import utils from './utils';

const STORAGE_KEY_PREFIX = 'pcbuilder_configurations';
const MAX_CONFIGURATIONS = 5;
const DEFAULT_CONFIG_NAME = 'Build';

export default class ConfigurationManager {
    constructor(categoryId = null, languageManager = null, context = null) {
        this.categoryId = categoryId;
        this.languageManager = languageManager;
        this.context = context;
        this.storageKey = this.getStorageKey();
        this.configurations = this.loadConfigurations();
        this.activeConfigId = null;
        this.listeners = {
            change: [],
            switch: [],
            create: [],
            delete: [],
            update: [],
        };

        // Initialize với ít nhất 1 configuration
        if (this.configurations.length === 0) {
            this.createConfiguration(this.getDefaultConfigurationName());
        }

        // Set active configuration
        this.activeConfigId = this.configurations[0].id;
    }

    /**
     * Get default configuration name
     * @returns {string} Default name
     */
    getDefaultConfigurationName() {
        if (this.languageManager) {
            return this.languageManager.getLang('pc_builder.config.default_name', 'Build 1');
        }
        return 'Build 1';
    }

    /**
     * Get storage key for current category
     * @returns {string} Storage key
     */
    getStorageKey() {
        if (this.categoryId) {
            return `${STORAGE_KEY_PREFIX}_category_${this.categoryId}`;
        }
        return `${STORAGE_KEY_PREFIX}_global`;
    }

    /**
     * Get current currency code from BigCommerce context
     * @returns {string} Currency code
     */
    getCurrentCurrencyCode() {
        // Primary source: BigCommerce context
        if (this.context && this.context.active_currency_code) {
            return this.context.active_currency_code;
        }

        // Fallback: window.jsContext
        if (typeof window !== 'undefined' && window.jsContext && window.jsContext.active_currency_code) {
            return window.jsContext.active_currency_code;
        }

        // Final fallback: USD
        return 'USD';
    }

    /**
     * Check if configuration currency is compatible with current currency
     * @param {Object} config - Configuration object
     * @returns {boolean} True if compatible
     */
    isCurrencyCompatible(config) {
        const currentCurrency = this.getCurrentCurrencyCode();

        if (!config.currencyCode) {
            return false; // Old configurations without currency data are incompatible
        }

        return config.currencyCode === currentCurrency;
    }

    /**
     * Mark configuration as needing price refresh
     * @param {string} configId - Configuration ID
     */
    markPriceRefreshNeeded(configId) {
        const config = this.getConfiguration(configId);
        if (config) {
            config.needsPriceRefresh = true;
            config.updatedAt = new Date().toISOString();
            this.saveConfigurations();
        }
    }

    /**
     * Update configuration currency code
     * @param {string} configId - Configuration ID
     * @param {string} currencyCode - New currency code
     */
    updateConfigurationCurrency(configId, currencyCode) {
        const config = this.getConfiguration(configId);
        if (config) {
            config.currencyCode = currencyCode;
            config.needsPriceRefresh = false; // Reset flag after currency update
            config.updatedAt = new Date().toISOString();
            this.saveConfigurations();
            this.emit('update', config);
        }
    }

    /**
     * Load configurations từ localStorage
     * @returns {Array} Danh sách configurations
     */
    loadConfigurations() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error('Error loading configurations:', e); // eslint-disable-line no-console
            return [];
        }
    }

    /**
     * Save configurations vào localStorage
     */
    saveConfigurations() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.configurations));
            this.emit('change', this.configurations);
        } catch (e) {
            console.error('Error saving configurations:', e); // eslint-disable-line no-console
        }
    }

    /**
     * Tạo configuration mới
     * @param {string} name - Tên configuration
     * @param {string} currencyCode - Currency code for this configuration
     * @returns {Object|null} Configuration mới hoặc null nếu đạt giới hạn
     */
    createConfiguration(name = DEFAULT_CONFIG_NAME, currencyCode = null) {
        if (this.configurations.length >= MAX_CONFIGURATIONS) {
            return null;
        }

        const newConfig = {
            id: utils.generateId(),
            name: this.generateUniqueName(name),
            components: {},
            totalPrice: 0,
            currencyCode: currencyCode || this.getCurrentCurrencyCode(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        this.configurations.push(newConfig);
        this.saveConfigurations();
        this.emit('create', newConfig);

        return newConfig;
    }

    /**
     * Tạo tên unique cho configuration
     * @param {string} baseName - Tên gốc
     * @returns {string} Tên unique
     */
    generateUniqueName(baseName) {
        const existingNames = this.configurations.map(c => c.name);

        // Nếu baseName là tên mặc định, tạo tên theo dạng "Build 1", "Build 2"...
        const defaultBase = this.languageManager ?
            this.languageManager.getLang('pc_builder.config.default_base', 'Build') :
            'Build';

        if (baseName === DEFAULT_CONFIG_NAME || baseName === defaultBase || baseName === 'Build') {
            let counter = 1;
            let name = `${defaultBase} ${counter}`;

            while (existingNames.includes(name)) {
                counter++;
                name = `${defaultBase} ${counter}`;
            }

            return name;
        }

        // Cho các tên khác, thêm suffix (1), (2)... nếu trùng
        let name = baseName;
        let counter = 1;

        while (existingNames.includes(name)) {
            name = `${baseName} (${counter})`;
            counter++;
        }

        return name;
    }

    /**
     * Lấy configuration theo ID
     * @param {string} id - Configuration ID
     * @returns {Object|null} Configuration hoặc null
     */
    getConfiguration(id) {
        return this.configurations.find(c => c.id === id) || null;
    }

    /**
     * Lấy active configuration
     * @returns {Object|null} Active configuration
     */
    getActiveConfiguration() {
        return this.getConfiguration(this.activeConfigId);
    }

    /**
     * Set active configuration
     * @param {string} id - Configuration ID
     * @returns {boolean} Success
     */
    setActiveConfiguration(id) {
        const config = this.getConfiguration(id);
        if (!config) return false;

        const previousId = this.activeConfigId;
        this.activeConfigId = id;
        this.emit('switch', { from: previousId, to: id, configuration: config });

        return true;
    }

    /**
     * Update configuration
     * @param {string} id - Configuration ID
     * @param {Object} updates - Updates object
     * @returns {boolean} Success
     */
    updateConfiguration(id, updates) {
        const config = this.getConfiguration(id);
        if (!config) return false;

        // Update allowed fields
        if (updates.name !== undefined) {
            config.name = updates.name;
        }

        if (updates.components !== undefined) {
            config.components = updates.components;
        }

        if (updates.totalPrice !== undefined) {
            config.totalPrice = updates.totalPrice;
        }

        config.updatedAt = new Date().toISOString();

        this.saveConfigurations();
        this.emit('update', config);

        return true;
    }

    /**
     * Delete configuration
     * @param {string} id - Configuration ID
     * @returns {boolean} Success
     */
    deleteConfiguration(id) {
        // Không cho xóa nếu chỉ còn 1 configuration
        if (this.configurations.length <= 1) {
            return false;
        }

        const index = this.configurations.findIndex(c => c.id === id);
        if (index === -1) return false;

        const deletedConfig = this.configurations[index];
        this.configurations.splice(index, 1);

        // Nếu xóa active configuration, chuyển sang configuration khác
        if (this.activeConfigId === id) {
            this.activeConfigId = this.configurations[0].id;
            this.emit('switch', {
                from: id,
                to: this.activeConfigId,
                configuration: this.configurations[0],
            });
        }

        this.saveConfigurations();
        this.emit('delete', deletedConfig);

        return true;
    }

    /**
     * Duplicate configuration
     * @param {string} id - Configuration ID to duplicate
     * @returns {Object|null} New configuration hoặc null
     */
    duplicateConfiguration(id) {
        const source = this.getConfiguration(id);
        if (!source || this.configurations.length >= MAX_CONFIGURATIONS) {
            return null;
        }

        // Khi duplicate, nếu source name có dạng "Build X", tạo tên mới theo sequence
        const defaultBase = this.languageManager ?
            this.languageManager.getLang('pc_builder.config.default_base', 'Build') :
            'Build';

        let newName;
        if (source.name.startsWith(`${defaultBase} `)) {
            newName = this.generateUniqueName(defaultBase);
        } else {
            const copySuffix = this.languageManager ?
                this.languageManager.getLang('pc_builder.config.copy_suffix', 'Copy') :
                'Copy';
            newName = this.generateUniqueName(`${source.name} ${copySuffix}`);
        }

        const newConfig = {
            ...source,
            id: utils.generateId(),
            name: newName,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        this.configurations.push(newConfig);
        this.saveConfigurations();
        this.emit('create', newConfig);

        return newConfig;
    }

    /**
     * Get all configurations
     * @returns {Array} All configurations
     */
    getAllConfigurations() {
        return [...this.configurations];
    }

    /**
     * Check if can create more configurations
     * @returns {boolean} Can create
     */
    canCreateConfiguration() {
        return this.configurations.length < MAX_CONFIGURATIONS;
    }

    /**
     * Export configuration
     * @param {string} id - Configuration ID
     * @returns {string} JSON string
     */
    exportConfiguration(id) {
        const config = this.getConfiguration(id);
        if (!config) return null;

        return JSON.stringify(config, null, 2);
    }

    /**
     * Import configuration
     * @param {string} jsonString - JSON string
     * @returns {Object|null} Imported configuration hoặc null
     */
    importConfiguration(jsonString) {
        try {
            const data = JSON.parse(jsonString);

            // Validate required fields
            if (!data.name || !data.components) {
                return null;
            }

            // Create new configuration với imported data
            const newConfig = {
                ...data,
                id: utils.generateId(),
                name: this.generateUniqueName(data.name),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            if (this.configurations.length < MAX_CONFIGURATIONS) {
                this.configurations.push(newConfig);
                this.saveConfigurations();
                this.emit('create', newConfig);
                return newConfig;
            }

            return null;
        } catch (e) {
            console.error('Error importing configuration:', e); // eslint-disable-line no-console
            return null;
        }
    }

    /**
     * Add event listener
     * @param {string} event - Event name
     * @param {Function} callback - Callback function
     */
    on(event, callback) {
        if (this.listeners[event]) {
            this.listeners[event].push(callback);
        }
    }

    /**
     * Remove event listener
     * @param {string} event - Event name
     * @param {Function} callback - Callback function
     */
    off(event, callback) {
        if (this.listeners[event]) {
            this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
        }
    }

    /**
     * Emit event
     * @param {string} event - Event name
     * @param {*} data - Event data
     */
    emit(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => {
                callback(data);
            });
        }
    }

    /**
     * Clear all configurations và tạo mới
     */
    clearAll() {
        this.configurations = [];
        this.createConfiguration(this.getDefaultConfigurationName());
        this.activeConfigId = this.configurations[0].id;
        this.saveConfigurations();
    }

    /**
     * Get all storage keys for all categories
     * @returns {Array} Array of storage keys
     */
    static getAllStorageKeys() {
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(STORAGE_KEY_PREFIX)) {
                keys.push(key);
            }
        }
        return keys;
    }

    /**
     * Clear all PC Builder data for all categories
     */
    static clearAllCategories() {
        const keys = ConfigurationManager.getAllStorageKeys();
        keys.forEach(key => localStorage.removeItem(key));
    }

    /**
     * Get configurations for specific category
     * @param {string|number} categoryId - Category ID
     * @returns {Array} Configurations for category
     */
    static getConfigurationsForCategory(categoryId) {
        const storageKey = categoryId ?
            `${STORAGE_KEY_PREFIX}_category_${categoryId}` :
            `${STORAGE_KEY_PREFIX}_global`;

        try {
            const stored = localStorage.getItem(storageKey);
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error('Error loading configurations for category:', categoryId, e); // eslint-disable-line no-console
            return [];
        }
    }

    /**
     * Set category ID and reload configurations
     * @param {string|number} categoryId - Category ID
     */
    setCategoryId(categoryId) {
        if (this.categoryId !== categoryId) {
            this.categoryId = categoryId;
            this.storageKey = this.getStorageKey();
            this.configurations = this.loadConfigurations();

            // Initialize với ít nhất 1 configuration nếu empty
            if (this.configurations.length === 0) {
                this.createConfiguration(this.getDefaultConfigurationName());
            }

            // Set active configuration
            this.activeConfigId = this.configurations[0].id;
            this.emit('change', this.configurations);
        }
    }
}
