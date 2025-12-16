/**
 * PC Builder Utilities - Independent helper functions
 * Utility functions that don't depend on class instance
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 */

/**
 * Parse language data from BigCommerce langJson injection
 * @param {string} jsonString - JSON string from langJson helper
 * @returns {Object} Parsed language data object
 */
export function parseLangData(jsonString) {
    // Try to parse JSON string from BigCommerce langJson helper
    if (jsonString && typeof jsonString === 'string') {
        try {
            const parsed = JSON.parse(jsonString);

            // Extract translations from BigCommerce langJson format
            if (parsed && parsed.translations) {
                return parsed.translations;
            }

            return parsed;
        } catch (e) {
            return {};
        }
    }

    return {};
}

/**
 * Extract price từ text (fallback nếu không có data-product-price)
 * @param {string} priceText - Price text
 * @returns {number} Price value
 */
export function extractPriceFromText(priceText) {
    if (!priceText) return 0;

    // Convert to string if it's a number
    const textValue = typeof priceText === 'number' ? priceText.toString() : priceText;

    // If still not a string, return 0
    if (typeof textValue !== 'string') return 0;

    // Extract numeric value, assume US format (1,234.56)
    const cleanText = textValue.replace(/[^\d.,]/g, '');
    const numericValue = cleanText.replace(/,/g, '');

    return parseFloat(numericValue) || 0;
}

/**
 * Generate unique ID
 * @returns {string} Unique ID
 */
export function generateId() {
    return `config_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if two compatibility values match
 * @param {string} value1 - First value
 * @param {string} value2 - Second value
 * @returns {boolean} True if values are compatible
 */
export function checkValueCompatibility(value1, value2) {
    if (!value1 || !value2) return false;

    // Normalize values to lowercase for comparison
    const values1 = value1.split(',').map(v => v.trim().toLowerCase());
    const values2 = value2.split(',').map(v => v.trim().toLowerCase());
    const isCompatible = values1.some(v1 => values2.includes(v1));

    return isCompatible;
}

/**
 * Get intersection of two comma-separated values
 * @param {string} value1 - First value
 * @param {string} value2 - Second value
 * @returns {string} Intersection value
 */
export function getValueIntersection(value1, value2) {
    if (!value1 || !value2) return '';

    const values1 = value1.split(',').map(v => v.trim());
    const values2 = value2.split(',').map(v => v.trim());

    const intersection = values1.filter(v1 =>
        values2.some(v2 => v2.toLowerCase() === v1.toLowerCase()));

    return intersection.join(', ');
}

/**
 * Escape CSV value for proper formatting
 * @param {string} value - Value to escape
 * @returns {string} Escaped value
 */
export function escapeCsvValue(value) {
    if (value == null) return '';

    const stringValue = String(value).replace(/[\n\r]+/g, ' ').replace(/\s+/g, ' ').trim();

    if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
        return `"${stringValue.replace(/"/g, '""')}"`;
    }

    return stringValue;
}

/**
 * Fallback method để copy text to clipboard
 * @param {string} text - Text to copy
 */
export function copyToClipboardFallback(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
    } catch (err) {
        // Copy failed
    }

    document.body.removeChild(textArea);
}

/**
 * Generate default currency settings
 * @returns {Object} Default currency settings
 */
export function getDefaultCurrencySettings() {
    return {
        symbol: '$',
        symbol_location: 'left',
        decimal_token: '.',
        thousands_token: ',',
        decimal_places: 2,
    };
}

/**
 * Validate build data structure
 * @param {Object} buildData - Build data to validate
 * @returns {boolean} True if valid
 */
export function validateBuildData(buildData) {
    if (!buildData || typeof buildData !== 'object') {
        return false;
    }

    if (!buildData.components || !Array.isArray(buildData.components)) {
        return false;
    }

    return true;
}

/**
 * Generate filename for exports
 * @param {string} prefix - Filename prefix
 * @param {string} extension - File extension
 * @returns {string} Generated filename
 */
export function generateFilename(prefix, extension) {
    const now = new Date();
    const timestamp = `${now.getFullYear()}${
        String(now.getMonth() + 1).padStart(2, '0')
    }${
        String(now.getDate()).padStart(2, '0')
    }_${
        String(now.getHours()).padStart(2, '0')
    }${
        String(now.getMinutes()).padStart(2, '0')
    }${
        String(now.getSeconds()).padStart(2, '0')
    }`;

    return `${prefix}_${timestamp}.${extension}`;
}

/**
 * Clean price value by removing non-numeric characters
 * @param {string|number} price - Price value to clean
 * @returns {number} Cleaned numeric price
 */
export function cleanPriceValue(price) {
    if (typeof price === 'number') {
        return Number.isNaN(price) ? 0 : price;
    }

    if (typeof price === 'string') {
        // Remove currency symbols and formatting, keep decimal point
        const cleaned = price.replace(/[^\d.-]/g, '');
        const parsed = parseFloat(cleaned);
        return Number.isNaN(parsed) ? 0 : parsed;
    }

    return 0;
}

/**
 * PC Builder localStorage utilities
 * Functions for managing category-specific data storage
 */
export const PCBuilderStorage = {
    /**
     * Get all PC Builder localStorage keys
     * @returns {Array<string>} Array of storage keys
     */
    getAllKeys() {
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('pcbuilder_')) {
                keys.push(key);
            }
        }
        return keys;
    },

    /**
     * Get storage keys for specific category
     * @param {string|number} categoryId - Category ID
     * @returns {Array<string>} Array of category-specific keys
     */
    getCategoryKeys(categoryId) {
        const allKeys = this.getAllKeys();
        const categoryPattern = `_category_${categoryId}`;
        return allKeys.filter(key => key.includes(categoryPattern));
    },

    /**
     * Clear all data for specific category
     * @param {string|number} categoryId - Category ID
     */
    clearCategory(categoryId) {
        const categoryKeys = this.getCategoryKeys(categoryId);
        categoryKeys.forEach(key => localStorage.removeItem(key));
    },

    /**
     * Clear all PC Builder data
     */
    clearAll() {
        const allKeys = this.getAllKeys();
        allKeys.forEach(key => localStorage.removeItem(key));
    },

    /**
     * Get storage usage info
     * @returns {Object} Storage usage information
     */
    getStorageInfo() {
        const allKeys = this.getAllKeys();
        let totalSize = 0;
        const categories = new Set();

        allKeys.forEach(key => {
            const value = localStorage.getItem(key);
            if (value) {
                totalSize += new Blob([value]).size;

                // Extract category ID from key
                const match = key.match(/_category_([^_]+)/);
                if (match) {
                    categories.add(match[1]);
                }
            }
        });

        return {
            totalKeys: allKeys.length,
            totalSize,
            categories: Array.from(categories),
            categoryCount: categories.size,
        };
    },

    /**
     * Export all data for backup
     * @returns {Object} All PC Builder data
     */
    exportAll() {
        const allKeys = this.getAllKeys();
        const exportData = {
            timestamp: new Date().toISOString(),
            version: '1.0',
            data: {},
        };

        allKeys.forEach(key => {
            const value = localStorage.getItem(key);
            if (value) {
                try {
                    exportData.data[key] = JSON.parse(value);
                } catch (e) {
                    exportData.data[key] = value;
                }
            }
        });

        return exportData;
    },

    /**
     * Import data from backup
     * @param {Object} exportData - Exported data object
     * @param {boolean} clearFirst - Clear existing data first
     * @returns {boolean} Success status
     */
    importAll(exportData, clearFirst = false) {
        try {
            if (!exportData || !exportData.data) {
                return false;
            }

            if (clearFirst) {
                this.clearAll();
            }

            Object.entries(exportData.data).forEach(([key, value]) => {
                const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
                localStorage.setItem(key, stringValue);
            });

            return true;
        } catch (e) {
            console.error('Error importing PC Builder data:', e); // eslint-disable-line no-console
            return false;
        }
    },
};

// Export all utilities as default object
export default {
    parseLangData,
    extractPriceFromText,
    generateId,
    checkValueCompatibility,
    getValueIntersection,
    escapeCsvValue,
    copyToClipboardFallback,
    getDefaultCurrencySettings,
    validateBuildData,
    generateFilename,
    cleanPriceValue,
    PCBuilderStorage,
};
