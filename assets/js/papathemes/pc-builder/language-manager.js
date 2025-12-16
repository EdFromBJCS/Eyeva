/**
 * Language Manager - Handles all language/translation operations
 * Manages localization strings from BigCommerce language system
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 */

import { parseLangData } from './utils';

/**
 * Language Manager class for PC Builder
 * Handles all language data parsing and string retrieval
 */
export default class LanguageManager {
    /**
     * Constructor
     * @param {Object} context - BigCommerce context containing language data
     */
    constructor(context) {
        this.context = context;

        // Parse language data from BigCommerce langJson injection
        this.lang = parseLangData(context.pcBuilderLangJSON);
        this.commonLang = parseLangData(context.commonLangJSON);
        this.productsLang = parseLangData(context.productsLangJSON);

        // Store for debugging
        this.debugMode = false;
    }

    /**
     * Enable or disable debug mode for language warnings
     * @param {boolean} enabled - Whether to enable debug mode
     */
    setDebugMode(enabled) {
        this.debugMode = enabled;
    }

    /**
     * Get PC Builder language string
     * @param {string} key - Language key (e.g. 'component.select' or 'pc_builder.component.select')
     * @param {string} fallback - Fallback text (optional)
     * @returns {string} Translated string
     */
    getLang(key, fallback = '') {
        // Check if key already has pc_builder prefix
        const fullKey = key.startsWith('pc_builder.') ? key : `pc_builder.${key}`;

        if (this.lang && this.lang[fullKey]) {
            return this.lang[fullKey];
        }

        // Try without pc_builder prefix (for nested objects like print.title)
        if (this.lang && this.lang[key]) {
            return this.lang[key];
        }

        // Return fallback if provided, otherwise empty string
        if (fallback) {
            return fallback;
        }

        return '';
    }

    /**
     * Get common language string
     * @param {string} key - Language key
     * @param {string} fallback - Fallback text (optional)
     * @returns {string} Translated string
     */
    getCommonLang(key, fallback = '') {
        // Add common prefix if not present
        const fullKey = key.startsWith('common.') ? key : `common.${key}`;

        if (this.commonLang && this.commonLang[fullKey]) {
            return this.commonLang[fullKey];
        }

        // Return fallback if provided, otherwise empty string
        if (fallback) {
            return fallback;
        }

        return '';
    }

    /**
     * Get products language string
     * @param {string} key - Language key
     * @param {string} fallback - Fallback text (optional)
     * @returns {string} Translated string
     */
    getProductsLang(key, fallback = '') {
        // Add products prefix if not present
        const fullKey = key.startsWith('products.') ? key : `products.${key}`;

        if (this.productsLang && this.productsLang[fullKey]) {
            return this.productsLang[fullKey];
        }

        // Return fallback if provided, otherwise empty string
        if (fallback) {
            return fallback;
        }

        return '';
    }

    /**
     * Get language string with placeholder replacement
     * @param {string} key - Language key
     * @param {Object} placeholders - Key-value pairs for placeholder replacement
     * @param {string} fallback - Fallback text (optional)
     * @returns {string} Translated string with placeholders replaced
     */
    getLangWithPlaceholders(key, placeholders = {}, fallback = '') {
        let text = this.getLang(key, fallback);

        // Replace placeholders in format {key}
        Object.keys(placeholders).forEach(placeholder => {
            const pattern = new RegExp(`\\{${placeholder}\\}`, 'g');
            text = text.replace(pattern, placeholders[placeholder]);
        });

        return text;
    }

    /**
     * Get common language string with placeholder replacement
     * @param {string} key - Language key
     * @param {Object} placeholders - Key-value pairs for placeholder replacement
     * @param {string} fallback - Fallback text (optional)
     * @returns {string} Translated string with placeholders replaced
     */
    getCommonLangWithPlaceholders(key, placeholders = {}, fallback = '') {
        let text = this.getCommonLang(key, fallback);

        // Replace placeholders in format {key}
        Object.keys(placeholders).forEach(placeholder => {
            const pattern = new RegExp(`\\{${placeholder}\\}`, 'g');
            text = text.replace(pattern, placeholders[placeholder]);
        });

        return text;
    }

    /**
     * Get products language string with placeholder replacement
     * @param {string} key - Language key
     * @param {Object} placeholders - Key-value pairs for placeholder replacement
     * @param {string} fallback - Fallback text (optional)
     * @returns {string} Translated string with placeholders replaced
     */
    getProductsLangWithPlaceholders(key, placeholders = {}, fallback = '') {
        let text = this.getProductsLang(key, fallback);

        // Replace placeholders in format {key}
        Object.keys(placeholders).forEach(placeholder => {
            const pattern = new RegExp(`\\{${placeholder}\\}`, 'g');
            text = text.replace(pattern, placeholders[placeholder]);
        });

        return text;
    }

    /**
     * Check if a language key exists
     * @param {string} key - Language key to check
     * @param {string} namespace - Namespace ('pc_builder', 'common', or 'products')
     * @returns {boolean} True if key exists
     */
    hasLangKey(key, namespace = 'pc_builder') {
        switch (namespace) {
        case 'common': {
            const commonKey = key.startsWith('common.') ? key : `common.${key}`;
            return !!(this.commonLang && this.commonLang[commonKey]);
        }

        case 'products': {
            const productsKey = key.startsWith('products.') ? key : `products.${key}`;
            return !!(this.productsLang && this.productsLang[productsKey]);
        }

        case 'pc_builder':
        default: {
            const pcBuilderKey = key.startsWith('pc_builder.') ? key : `pc_builder.${key}`;
            return !!(this.lang && (this.lang[pcBuilderKey] || this.lang[key]));
        }
        }
    }

    /**
     * Get all available language keys for debugging
     * @param {string} namespace - Namespace to get keys for
     * @returns {Array} Array of available keys
     */
    getAvailableKeys(namespace = 'pc_builder') {
        switch (namespace) {
        case 'common':
            return this.commonLang ? Object.keys(this.commonLang) : [];
        case 'products':
            return this.productsLang ? Object.keys(this.productsLang) : [];
        case 'pc_builder':
        default:
            return this.lang ? Object.keys(this.lang) : [];
        }
    }

    /**
     * Get language statistics for debugging
     * @returns {Object} Language statistics
     */
    getLanguageStats() {
        return {
            pcBuilder: {
                loaded: !!this.lang,
                keyCount: this.lang ? Object.keys(this.lang).length : 0,
            },
            common: {
                loaded: !!this.commonLang,
                keyCount: this.commonLang ? Object.keys(this.commonLang).length : 0,
            },
            products: {
                loaded: !!this.productsLang,
                keyCount: this.productsLang ? Object.keys(this.productsLang).length : 0,
            },
        };
    }
}
