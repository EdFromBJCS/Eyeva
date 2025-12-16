/**
 * Storage Manager - Quản lý localStorage theo Category ID
 * Handles category-specific data storage and management
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 */

import { PCBuilderStorage } from './utils';
import getNotification from '../notification';

/**
 * Storage Manager class for PC Builder
 * Manages localStorage operations with category separation
 */
export default class StorageManager {
    /**
     * Constructor
     * @param {Object} languageManager - Language manager instance
     */
    constructor(languageManager) {
        this.languageManager = languageManager;
        this.currentCategoryId = null;
    }

    /**
     * Set current category ID
     * @param {string|number} categoryId - Category ID
     */
    setCategoryId(categoryId) {
        this.currentCategoryId = categoryId;
    }

    /**
     * Get storage information for current category
     * @returns {Object} Storage info for current category
     */
    getCurrentCategoryInfo() {
        if (!this.currentCategoryId) return null;

        const categoryKeys = PCBuilderStorage.getCategoryKeys(this.currentCategoryId);
        let totalSize = 0;
        const dataTypes = new Set();

        categoryKeys.forEach(key => {
            const value = localStorage.getItem(key);
            if (value) {
                totalSize += new Blob([value]).size;

                // Detect data type from key
                if (key.includes('configurations')) {
                    dataTypes.add('configurations');
                } else if (key.includes('temp')) {
                    dataTypes.add('temporary');
                } else {
                    dataTypes.add('other');
                }
            }
        });

        return {
            categoryId: this.currentCategoryId,
            totalKeys: categoryKeys.length,
            totalSize,
            dataTypes: Array.from(dataTypes),
            keys: categoryKeys,
        };
    }

    /**
     * Get all categories storage info
     * @returns {Object} Storage info for all categories
     */
    getAllCategoriesInfo() {
        const allInfo = PCBuilderStorage.getStorageInfo();
        const categoriesDetails = {};

        allInfo.categories.forEach(categoryId => {
            const categoryKeys = PCBuilderStorage.getCategoryKeys(categoryId);
            let categorySize = 0;

            categoryKeys.forEach(key => {
                const value = localStorage.getItem(key);
                if (value) {
                    categorySize += new Blob([value]).size;
                }
            });

            categoriesDetails[categoryId] = {
                keys: categoryKeys.length,
                size: categorySize,
            };
        });

        return {
            ...allInfo,
            categoriesDetails,
        };
    }

    /**
     * Clear data for current category
     * @returns {boolean} Success status
     */
    clearCurrentCategory() {
        if (!this.currentCategoryId) return false;

        try {
            PCBuilderStorage.clearCategory(this.currentCategoryId);

            const notification = getNotification();
            const message = this.languageManager.getLangWithPlaceholders(
                'storage.category_cleared',
                { categoryId: this.currentCategoryId },
                'Data cleared for category {categoryId}',
            );
            notification.success(message);

            return true;
        } catch (error) {
            const notification = getNotification();
            const message = this.languageManager.getLang(
                'storage.clear_error',
                'Error clearing category data',
            );
            notification.error(message);
            return false;
        }
    }

    /**
     * Clear data for specific category
     * @param {string|number} categoryId - Category ID
     * @returns {boolean} Success status
     */
    clearCategory(categoryId) {
        try {
            PCBuilderStorage.clearCategory(categoryId);

            const notification = getNotification();
            const message = this.languageManager.getLangWithPlaceholders(
                'storage.category_cleared',
                { categoryId },
                'Data cleared for category {categoryId}',
            );
            notification.success(message);

            return true;
        } catch (error) {
            const notification = getNotification();
            const message = this.languageManager.getLang(
                'storage.clear_error',
                'Error clearing category data',
            );
            notification.error(message);
            return false;
        }
    }

    /**
     * Clear all PC Builder data
     * @returns {boolean} Success status
     */
    clearAll() {
        // eslint-disable-next-line no-alert
        const confirmed = window.confirm(this.languageManager.getLang(
            'storage.confirm_clear_all',
            'Are you sure you want to clear all PC Builder data? This cannot be undone.',
        ));

        if (!confirmed) return false;

        try {
            PCBuilderStorage.clearAll();

            const notification = getNotification();
            const message = this.languageManager.getLang(
                'storage.all_cleared',
                'All PC Builder data cleared successfully',
            );
            notification.success(message);

            return true;
        } catch (error) {
            const notification = getNotification();
            const message = this.languageManager.getLang(
                'storage.clear_all_error',
                'Error clearing all data',
            );
            notification.error(message);
            return false;
        }
    }

    /**
     * Export data for current category
     * @returns {Object|null} Exported data or null
     */
    exportCurrentCategory() {
        if (!this.currentCategoryId) return null;

        const categoryKeys = PCBuilderStorage.getCategoryKeys(this.currentCategoryId);
        const exportData = {
            timestamp: new Date().toISOString(),
            version: '1.0',
            categoryId: this.currentCategoryId,
            data: {},
        };

        categoryKeys.forEach(key => {
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
    }

    /**
     * Export all data
     * @returns {Object} All exported data
     */
    exportAll() {
        return PCBuilderStorage.exportAll();
    }

    /**
     * Import data for current category
     * @param {Object} importData - Data to import
     * @param {boolean} clearFirst - Clear existing data first
     * @returns {boolean} Success status
     */
    importCurrentCategory(importData, clearFirst = false) {
        if (!this.currentCategoryId || !importData) return false;

        try {
            if (clearFirst) {
                PCBuilderStorage.clearCategory(this.currentCategoryId);
            }

            // Only import data that belongs to current category
            const categoryPattern = `_category_${this.currentCategoryId}`;
            Object.entries(importData.data || {}).forEach(([key, value]) => {
                if (key.includes(categoryPattern)) {
                    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
                    localStorage.setItem(key, stringValue);
                }
            });

            const notification = getNotification();
            const message = this.languageManager.getLangWithPlaceholders(
                'storage.import_success',
                { categoryId: this.currentCategoryId },
                'Data imported successfully for category {categoryId}',
            );
            notification.success(message);

            return true;
        } catch (error) {
            const notification = getNotification();
            const message = this.languageManager.getLang(
                'storage.import_error',
                'Error importing data',
            );
            notification.error(message);
            return false;
        }
    }

    /**
     * Import all data
     * @param {Object} importData - Data to import
     * @param {boolean} clearFirst - Clear existing data first
     * @returns {boolean} Success status
     */
    importAll(importData, clearFirst = false) {
        try {
            const success = PCBuilderStorage.importAll(importData, clearFirst);

            const notification = getNotification();
            if (success) {
                const message = this.languageManager.getLang(
                    'storage.import_all_success',
                    'All data imported successfully',
                );
                notification.success(message);
            } else {
                const message = this.languageManager.getLang(
                    'storage.import_all_error',
                    'Error importing data',
                );
                notification.error(message);
            }

            return success;
        } catch (error) {
            const notification = getNotification();
            const message = this.languageManager.getLang(
                'storage.import_all_error',
                'Error importing data',
            );
            notification.error(message);
            return false;
        }
    }

    /**
     * Get formatted storage usage display
     * @returns {string} Formatted storage info
     */
    getStorageUsageDisplay() {
        const info = this.getAllCategoriesInfo();
        const formatSize = (bytes) => {
            if (bytes === 0) return '0 B';
            const k = 1024;
            const sizes = ['B', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return `${parseFloat((bytes / (k ** i)).toFixed(2))} ${sizes[i]}`;
        };

        let display = `Total: ${info.totalKeys} keys, ${formatSize(info.totalSize)}\n`;
        display += `Categories: ${info.categoryCount}\n\n`;

        Object.entries(info.categoriesDetails).forEach(([categoryId, details]) => {
            display += `Category ${categoryId}: ${details.keys} keys, ${formatSize(details.size)}\n`;
        });

        return display;
    }
}
