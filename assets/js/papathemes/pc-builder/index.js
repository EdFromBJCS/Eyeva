/**
 * PC Builder - Chức năng xây dựng PC với modal component selection
 * Sử dụng papathemes/modal.js và BigCommerce Stencil API
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 *
 * This code is specifically developed for the Eyeva theme and is intended
 * for use exclusively within the Eyeva theme framework.
 *
 * RESTRICTIONS:
 * - This code may NOT be copied, reproduced, or distributed in any form
 * - This code may NOT be modified, refactored, or adapted for other themes
 * - This code may NOT be used as inspiration or reference for other projects
 * - Any attempt to extract, reverse engineer, or reuse this code for other
 *   themes or projects constitutes a violation of intellectual property rights
 *
 * LEGAL NOTICE:
 * Unauthorized use, copying, modification, or distribution of this code
 * is strictly prohibited and may result in legal action.
 *
 * For licensing inquiries, please contact PapaThemes.
 */

import getNotification from '../notification';
import LanguageManager from './language-manager';
import CartManager from './cart-manager';
import ExportManager from './export-manager';
import CompatibilityManager from './compatibility-manager';
import ModalManager from './modal-manager';
import ComponentListManager from './component-list-manager';
import BuildSummaryManager from './build-summary-manager';
import ActionButtonManager from './action-button-manager';
import ConfigurationManager from './configuration-manager';
import ConfigurationUIManager from './configuration-ui-manager';


export default class PcBuilder {
    /**
     * Constructor
     * @param {Object} context - BigCommerce context
     */
    constructor(context) {
        this.context = context;

        // Initialize language manager
        this.languageManager = new LanguageManager(context);
        this.languageManager.setDebugMode(true); // Enable debug warnings

        // Initialize configuration manager with category ID, language manager and context
        const categoryId = context.pcBuilderCategoryId || null;
        this.configurationManager = new ConfigurationManager(categoryId, this.languageManager, context);

        // Initialize build summary manager
        this.buildSummaryManager = new BuildSummaryManager(context, this.languageManager);

        // Initialize configuration UI manager
        this.configurationUIManager = new ConfigurationUIManager(
            this.configurationManager,
            this.languageManager,
            this.buildSummaryManager,
        );

        // Initialize cart manager
        this.cartManager = new CartManager(context, this.languageManager);

        // Initialize export manager - currency settings sẽ được set sau khi buildSummaryManager initialize
        this.exportManager = new ExportManager(context, this.languageManager, null);

        // Load compatibility fields từ config.json via template injection
        // Handle string format: "Socket Support, Memory Type, TDP" -> ["Socket Support", "Memory Type", "TDP"]
        const compatibilityFieldsRaw = context.compatibilityFields || '';
        if (typeof compatibilityFieldsRaw === 'string' && compatibilityFieldsRaw.trim()) {
            this.compatibilityFields = compatibilityFieldsRaw
                .split(',')
                .map(field => field.trim())
                .filter(field => field.length > 0);
        } else if (Array.isArray(compatibilityFieldsRaw)) {
            this.compatibilityFields = compatibilityFieldsRaw;
        } else {
            this.compatibilityFields = [];
        }

        // Initialize compatibility manager
        this.compatibilityManager = new CompatibilityManager(this.compatibilityFields, this.languageManager);

        // Initialize modal manager
        this.modalManager = new ModalManager(context, this.languageManager, this.compatibilityManager);

        // Initialize component list manager với build summary manager
        this.componentListManager = new ComponentListManager(
            context,
            this.languageManager,
            this.compatibilityManager,
            this.buildSummaryManager,
        );

        // Initialize action button manager
        this.actionButtonManager = new ActionButtonManager(context, this.languageManager);

        this.selectedComponents = new Map();
        this.componentModalCache = new Map();
        this.categoryProductsCache = new Map();

        // Flag để tránh multiple updates
        this.isUpdating = false;

        this.init();
    }

    /**
     * Initialize PC Builder
     */
    async init() {
        // Initialize configuration UI with callbacks
        await this.configurationUIManager.initialize({
            onSwitchConfiguration: this.switchConfiguration.bind(this),
            onSaveCurrentConfiguration: this.saveCurrentConfiguration.bind(this),
            onLoadConfiguration: this.loadConfiguration.bind(this),
        });

        this.bindEvents();

        // Initialize action button manager với callbacks
        this.actionButtonManager.initialize({
            onAddToCart: async () => {
                await this.cartManager.addAllToCart(this.selectedComponents);
            },
            onClearBuild: () => this.clearBuild(),
            onSaveBuild: () => this.exportManager.saveBuild(this.selectedComponents),
            onLoadBuild: () => this.exportManager.loadBuild(this.loadBuildFromData.bind(this)),
            onShareBuild: () => this.exportManager.shareBuild(this.selectedComponents),
            onExportExcel: () => this.exportManager.exportExcel(this.selectedComponents),
            onViewPrint: async () => {
                // Ensure currency settings are loaded via BuildSummaryManager
                if (!this.buildSummaryManager.isCurrencySettingsLoaded()) {
                    await this.buildSummaryManager.refreshCurrencySettings();
                    this.exportManager.currencySettings = this.buildSummaryManager.currencySettings;
                }
                await this.exportManager.viewAndPrint(this.selectedComponents);
            },
        });

        // Bind component list manager events với required dependencies và callback để cập nhật configuration
        this.componentListManager.bindEvents(this.modalManager, this.selectedComponents, this.actionButtonManager, {
            onComponentChanged: async () => {
                try {
                    await this.saveCurrentConfiguration();

                    // Delay refresh để đảm bảo configuration đã được save
                    setTimeout(async () => {
                        await this.configurationUIManager.refreshUI();
                    }, 50);
                } catch (error) {
                    console.error('Error in onComponentChanged:', error); // eslint-disable-line no-console
                }
            },
        });

        // Check for share build URL parameter
        this.exportManager.handleShareBuildFromUrl(this.loadBuildFromData.bind(this));

        try {
            // Initialize build summary manager (handles currency and display setup)
            await this.buildSummaryManager.initialize();

            // Load active configuration từ localStorage
            const activeConfig = this.configurationManager.getActiveConfiguration();
            if (activeConfig && activeConfig.components && Object.keys(activeConfig.components).length > 0) {
                await this.loadConfiguration(activeConfig.id);
            }

            // Check and update currency for all configurations on startup
            await this.checkAndUpdateAllConfigurationsCurrency();

            // Update UI using build summary manager
            await this.buildSummaryManager.updateSummary(this.selectedComponents);
            this.buildSummaryManager.updateProgress(this.selectedComponents);

            // Update action button states based on initial components
            this.actionButtonManager.updateButtonStates(this.selectedComponents);

            // Update export manager với currency settings từ build summary manager
            this.exportManager.currencySettings = this.buildSummaryManager.currencySettings;
        } catch (error) {
            console.warn('PC Builder initialization failed:', error); // eslint-disable-line no-console
            // Fallback initialization
            await this.buildSummaryManager.resetSummary();
        }
    }

    /**
     * Switch to different configuration
     */
    async switchConfiguration(configId) {
        if (configId === this.configurationManager.activeConfigId) return;

        // Save current configuration
        await this.saveCurrentConfiguration();

        // Switch configuration
        const success = this.configurationManager.setActiveConfiguration(configId);
        if (!success) return;

        // Load new configuration
        await this.loadConfiguration(configId);
    }

    /**
     * Save current configuration
     */
    async saveCurrentConfiguration() {
        const activeConfig = this.configurationManager.getActiveConfiguration();
        if (!activeConfig) return;

        // Đảm bảo components có đúng prices và quantities trước khi save
        const components = {};
        this.selectedComponents.forEach((componentData, categoryId) => {
            // Ensure price data is consistent across component levels
            const updatedComponentData = {
                ...componentData,
                // Sync price từ product level
                price: componentData.product?.price || componentData.price || 0,
                totalPrice: (componentData.product?.price || componentData.price || 0) * (componentData.quantity || 1),
            };
            components[categoryId] = updatedComponentData;
        });

        const totalPrice = await this.buildSummaryManager.calculateTotalPrice(this.selectedComponents);

        this.configurationManager.updateConfiguration(activeConfig.id, {
            components,
            totalPrice,
        });
    }

    /**
     * Load configuration
     */
    async loadConfiguration(configId) {
        const config = this.configurationManager.getConfiguration(configId);
        if (!config) return;

        // Check currency compatibility
        if (!this.configurationManager.isCurrencyCompatible(config)) {
            await this.refreshConfigurationPrices(configId);
        }

        // Clear current selection
        this.selectedComponents.clear();
        this.componentListManager.clearAllComponentRows();

        // Load configuration components
        if (config.components) {
            Object.entries(config.components).forEach(([categoryId, componentData]) => {
                this.selectedComponents.set(categoryId, componentData);

                // updateComponentRow expects the product object, not componentData
                if (componentData.product) {
                    this.componentListManager.updateComponentRow(categoryId, componentData.product, this.selectedComponents);
                }
            });
        }

        // 🔧 FIX: Unbind events trước khi bind lại để tránh double binding
        this.componentListManager.unbindEvents();

        // Re-bind events to ensure callbacks reference the correct selectedComponents
        // This is critical after loading configuration to maintain proper event handling
        this.componentListManager.bindEvents(this.modalManager, this.selectedComponents, this.actionButtonManager, {
            onComponentChanged: async () => {
                try {
                    await this.saveCurrentConfiguration();

                    // Delay refresh để đảm bảo configuration đã được save
                    setTimeout(async () => {
                        await this.configurationUIManager.refreshUI();
                    }, 50);
                } catch (error) {
                    console.error('Error in onComponentChanged after config load:', error); // eslint-disable-line no-console
                }
            },
        });

        // Update UI
        await this.buildSummaryManager.updateSummary(this.selectedComponents);
        this.buildSummaryManager.updateProgress(this.selectedComponents);
        this.actionButtonManager.updateButtonStates(this.selectedComponents);

        // Refresh configuration UI to update active state and prices
        await this.configurationUIManager.refreshUI();
    }

    /**
     * Refresh configuration prices when currency changes
     * @param {string} configId - Configuration ID
     */
    async refreshConfigurationPrices(configId) {
        const config = this.configurationManager.getConfiguration(configId);
        if (!config || !config.components) return;

        try {
            // Get product IDs that need price refresh
            const productIds = Object.values(config.components)
                .filter(comp => comp.product && comp.product.id)
                .map(comp => comp.product.id);

            if (productIds.length === 0) return;

            // Fetch updated prices using ExportManager's GraphQL method
            const fetchResult = await this.exportManager.fetchProductsByIds(productIds);
            const updatedProducts = fetchResult.products || [];

            if (!updatedProducts || updatedProducts.length === 0) {
                return;
            }

            // Update component prices with new currency
            let totalPrice = 0;
            Object.entries(config.components).forEach(([, componentData]) => {
                if (componentData.product && componentData.product.id) {
                    const updatedProduct = updatedProducts.find(p => p.entityId === componentData.product.id);
                    if (updatedProduct && (updatedProduct.pricesWithTax || updatedProduct.pricesWithoutTax)) {
                        // Get price using ExportManager's tax settings logic
                        const newPrice = this.exportManager.getPriceByTaxSettings(updatedProduct, fetchResult.taxSettings);
                        const quantity = componentData.quantity || 1;

                        // Update prices in place (ESLint allows this pattern)
                        // eslint-disable-next-line no-param-reassign
                        componentData.product.price = newPrice;
                        // eslint-disable-next-line no-param-reassign
                        componentData.price = newPrice;
                        // eslint-disable-next-line no-param-reassign
                        componentData.totalPrice = newPrice * quantity;

                        totalPrice += componentData.totalPrice;
                    }
                }
            });

            // Update configuration with new prices and currency
            config.totalPrice = totalPrice;
            this.configurationManager.updateConfigurationCurrency(configId, this.configurationManager.getCurrentCurrencyCode());
        } catch (error) {
            console.error('Error refreshing configuration prices:', error); // eslint-disable-line no-console
            // Mark configuration as needing price refresh for retry
            this.configurationManager.markPriceRefreshNeeded(configId);
        }
    }

    /**
     * Check and update currency for all configurations
     */
    async checkAndUpdateAllConfigurationsCurrency() {
        const allConfigurations = this.configurationManager.getAllConfigurations();

        for (const config of allConfigurations) {
            if (!this.configurationManager.isCurrencyCompatible(config)) {
                await this.refreshConfigurationPrices(config.id);
            }
        }
    }

    /**
     * Force refresh prices for all configurations (for testing)
     */
    async forceRefreshAllConfigurationPrices() {
        const allConfigurations = this.configurationManager.getAllConfigurations();

        for (const config of allConfigurations) {
            if (config.components && Object.keys(config.components).length > 0) {
                await this.refreshConfigurationPrices(config.id);
            }
        }

        // Refresh UI after all updates
        await this.configurationUIManager.refreshUI();
    }

    /**
     * Bind các event handlers
     */
    bindEvents() {
        // Note: Component selection event is now handled by ComponentListManager.bindEvents()
        // Note: Action button events are now handled by ActionButtonManager.bindEvents()
        // Note: Component-related events (edit, remove, quantity, more toggle) are now handled by ComponentListManager.bindEvents()
        // Note: Configuration UI events are now handled by ConfigurationUIManager.bindEvents()
    }

    /**
     * Clear toàn bộ build
     */
    async clearBuild() {
        // Clear selectedComponents Map
        this.selectedComponents.clear();

        // Reset tất cả component rows using ComponentListManager
        this.componentListManager.clearAllComponentRows();

        // Update UI using BuildSummaryManager
        await this.buildSummaryManager.updateSummary(this.selectedComponents);
        this.buildSummaryManager.updateProgress(this.selectedComponents);

        // Update action button states
        this.actionButtonManager.updateButtonStates(this.selectedComponents);

        // Clear all compatibility indicators
        this.componentListManager.clearAllCompatibilityIndicators();
    }

    /**
     * Load build from parsed JSON data
     * @param {Object} buildData - Parsed build data
     */
    async loadBuildFromData(buildData) {
        const notification = getNotification();
        const $loadBtn = $('#papathemes-pcbuilder-load-build');

        try {
            // Validate build data structure
            if (!buildData || !buildData.components || !Array.isArray(buildData.components)) {
                const invalidDataText = this.languageManager.getLang('invalid_build_data', 'Invalid build data structure');
                throw new Error(invalidDataText);
            }

            if (buildData.components.length === 0) {
                const noComponentsText = this.languageManager.getLang('no_components_in_file', 'No components found in the build file.');
                notification.error(noComponentsText);
                return;
            }

            // Show loading state
            const originalText = $loadBtn.html();
            const loadingText = this.languageManager.getLang('actions.loading', 'Loading Build...');
            $loadBtn.prop('disabled', true).html(`
                <i class="icon-spinner"></i>
                ${loadingText}
            `);

            // Clear existing build first
            await this.clearBuild();

            let loadedCount = 0;
            let failedCount = 0;
            const totalCount = buildData.components.length;

            // Load components sequentially to avoid race conditions
            for (const componentData of buildData.components) {
                try {
                    await this.componentListManager.loadSingleComponent(componentData, this.selectedComponents);
                    loadedCount++;

                    // Update progress
                    const progressText = this.languageManager.getLang('loading', 'Loading');
                    $loadBtn.html(`
                        <i class="icon-spinner"></i>
                        ${progressText} ${loadedCount}/${totalCount}...
                    `);
                } catch (error) {
                    console.warn('Failed to load component:', componentData.componentType, error); // eslint-disable-line no-console
                    failedCount++;
                }
            }

            // Update UI after loading all components using BuildSummaryManager
            await this.buildSummaryManager.updateSummary(this.selectedComponents);
            this.buildSummaryManager.updateProgress(this.selectedComponents);

            // Update action button states
            this.actionButtonManager.updateButtonStates(this.selectedComponents);

            // Reset button
            $loadBtn.prop('disabled', false).html(originalText);

            // Show result notification
            if (loadedCount > 0) {
                const buildName = buildData.metadata?.buildName || this.languageManager.getLang('export.metadata.unnamed_build', 'Unnamed Build');
                if (failedCount > 0) {
                    const loadPartialText = this.languageManager.getLang('notifications.load_partial', 'Build Loaded!');
                    const componentsLoadedText = this.languageManager.getLangWithPlaceholders(
                        'notifications.components_loaded',
                        { loaded: loadedCount, failed: failedCount },
                        '{loaded} components loaded, {failed} failed',
                    );
                    notification.info(`
                        ✅ ${loadPartialText}<br>
                        Build: <em>${buildName}</em><br>
                        ${componentsLoadedText}
                    `, '<i class="icon-info"></i>', 5000);
                } else {
                    const loadSuccessText = this.languageManager.getLang('notifications.load_success', 'Build Loaded Successfully!');
                    const componentsRestoredText = this.languageManager.getLangWithPlaceholders(
                        'notifications.components_restored',
                        { count: loadedCount },
                        '{count} components restored',
                    );
                    notification.info(`
                        ✅ ${loadSuccessText}<br>
                        Build: <em>${buildName}</em><br>
                        ${componentsRestoredText}
                    `, '<i class="icon-check"></i>', 4000);
                }
            } else {
                const loadErrorText = this.languageManager.getLang('notifications.load_error', 'Failed to load any components from the build file.');
                notification.error(loadErrorText);
            }
        } catch (error) {
            console.error('Error loading build:', error); // eslint-disable-line no-console
            const loadErrorText = this.languageManager.getLang('notifications.load_error', 'Error loading build. Please check the file format.');
            notification.error(loadErrorText);

            // Reset button
            $loadBtn.prop('disabled', false).html($loadBtn.data('original-text') || this.languageManager.getLang('actions.load_build', 'Load Build'));
        }
    }
}
