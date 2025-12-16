/**
 * Export Manager - Quản lý các tính năng export và build management
 * Xử lý save build, load build, share build, export excel, view & print
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 */

import Modal from '../modal';
import getNotification from '../notification';
import { currencyFormat } from '../utils';
import { escapeCsvValue, copyToClipboardFallback } from './utils';

export default class ExportManager {
    /**
     * Constructor
     * @param {Object} context - BigCommerce context
     * @param {Object} languageManager - Language manager instance
     * @param {Object} currencySettings - Currency settings (optional, can be set later)
     */
    constructor(context, languageManager, currencySettings) {
        this.context = context;
        this.languageManager = languageManager;
        this.currencySettings = currencySettings;
        this.shareModal = null;
    }

    /**
     * Get current currency settings từ instance hoặc fallback từ context
     * @returns {Object} Currency settings object
     */
    getCurrentCurrencySettings() {
        // Priority 1: Use existing currency settings
        if (this.currencySettings) {
            return this.currencySettings;
        }

        // Priority 2: Try to get from buildSummaryManager if available via global instance
        if (window.pcBuilderInstance?.buildSummaryManager?.currencySettings) {
            return window.pcBuilderInstance.buildSummaryManager.currencySettings;
        }

        // Priority 3: Try to get currency settings from buildSummaryManager's GraphQL call
        // Force refresh currency settings if needed
        if (window.pcBuilderInstance?.buildSummaryManager) {
            const buildSummaryManager = window.pcBuilderInstance.buildSummaryManager;

            // If currency settings not loaded, try to use cached settings or trigger refresh
            if (!buildSummaryManager.isCurrencySettingsLoaded()) {
                // Return promise-based approach hoặc trigger async refresh
                console.warn('⚠️ Currency settings not loaded, using buildSummaryManager fallback'); // eslint-disable-line no-console

                // Try to get default settings from buildSummaryManager
                return buildSummaryManager.getDefaultCurrencySettings();
            }
        }

        // Priority 4: Final fallback - use buildSummaryManager's default method
        // Không hard-code currencies, dùng method có sẵn
        if (window.pcBuilderInstance?.buildSummaryManager?.getDefaultCurrencySettings) {
            return window.pcBuilderInstance.buildSummaryManager.getDefaultCurrencySettings();
        }

        // Priority 5: Absolute final fallback nếu không có gì
        return {
            currency_token: '$',
            currency_location: 'left',
            decimal_token: '.',
            decimal_places: 2,
            thousands_token: ',',
        };
    }

    /**
     * Save build state - Tải build xuống dưới dạng JSON
     * @param {Map} selectedComponents - Selected components từ PC Builder
     */
    saveBuild(selectedComponents) {
        const notification = getNotification();

        if (selectedComponents.size === 0) {
            const noComponentsText = this.languageManager.getLang('no_components_selected', 'No components selected to save. Please select some components first.');
            notification.error(`⚠️ ${noComponentsText}`);
            return;
        }

        try {
            // Prepare build data for export
            const buildData = {
                version: '1.0.0',
                created: new Date().toISOString(),
                components: [],
                metadata: {
                    totalComponents: selectedComponents.size,
                    buildName: `PC Build ${new Date().toLocaleDateString()}`,
                    description: this.languageManager.getLang('export.metadata.export_description', 'PC Builder configuration export'),
                },
            };

            // Convert Map to array with proper structure
            selectedComponents.forEach((component, componentType) => {
                buildData.components.push({
                    componentType,
                    product: {
                        id: component.product.id,
                        name: component.product.name,
                        price: component.product.price,
                        image: component.product.image,
                        url: component.product.url,
                        quantity: component.quantity || 1,
                        minPurchaseQuantity: component.product.minPurchaseQuantity,
                        maxPurchaseQuantity: component.product.maxPurchaseQuantity,
                    },
                    selectedOptions: component.product.selectedOptions || [],
                    addedAt: new Date().toISOString(),
                });
            });

            // Create JSON blob
            const jsonString = JSON.stringify(buildData, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });

            // Create download link
            const url = URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = `pc-build-${new Date().getTime()}.json`;

            // Trigger download
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            // Clean up
            URL.revokeObjectURL(url);

            // Show success notification
            const saveSuccessText = this.languageManager.getLang('notifications.save_success', 'Build Saved Successfully!');
            const fileDownloadedText = this.languageManager.getLangWithPlaceholders(
                'notifications.file_downloaded',
                { filename: downloadLink.download },
                'File downloaded: {filename}',
            );
            const componentsExportedText = this.languageManager.getLangWithPlaceholders(
                'notifications.components_exported',
                { count: buildData.components.length },
                '{count} components exported',
            );

            notification.info(`
                ✅ ${saveSuccessText}<br>
                ${fileDownloadedText}<br>
                ${componentsExportedText}
            `, '<i class="icon-check"></i>', 4000);
        } catch (error) {
            const saveErrorText = this.languageManager.getLang('notifications.save_error', 'Error saving build. Please try again.');
            notification.error(`❌ ${saveErrorText}`);
        }
    }

    /**
     * Export build to Excel (CSV) format
     * @param {Map} selectedComponents - Selected components từ PC Builder
     */
    exportExcel(selectedComponents) {
        const notification = getNotification();

        if (selectedComponents.size === 0) {
            const noComponentsText = this.languageManager.getLang('no_components_selected', 'No components selected to save. Please select some components first.');
            notification.error(`⚠️ ${noComponentsText}`);
            return;
        }

        try {
            // Prepare CSV data
            const csvRows = [];
            let totalPrice = 0;

            // Add header row
            csvRows.push([
                this.languageManager.getLang('export.csv_headers.component_type', 'Component Type'),
                this.languageManager.getLang('export.csv_headers.product_name', 'Product Name'),
                this.languageManager.getLang('export.csv_headers.selected_options', 'Selected Options'),
                this.languageManager.getLang('export.csv_headers.price', 'Price'),
                this.languageManager.getLang('export.csv_headers.quantity', 'Quantity'),
                this.languageManager.getLang('export.csv_headers.subtotal', 'Subtotal'),
            ]);

            // Add component rows
            selectedComponents.forEach((component, componentType) => {
                const componentPrice = parseFloat(component.product.price) || 0;
                const quantity = component.quantity || 1;
                const subtotal = componentPrice * quantity;
                totalPrice += subtotal;

                // Format selected options as readable text
                let optionsText = '';
                if (component.product.selectedOptions && component.product.selectedOptions.length > 0) {
                    optionsText = component.product.selectedOptions
                        .map(option => {
                            const value = (option.selectedText || option.selectedValue || '')
                                .replace(/[\n\r]+/g, ' ')
                                .replace(/\s+/g, ' ')
                                .trim();
                            const label = (option.fieldLabel || '').replace(/[\n\r]+/g, ' ').replace(/\s+/g, ' ').trim();
                            return `${label}: ${value}`;
                        })
                        .join('; ');
                }

                csvRows.push([
                    escapeCsvValue(componentType),
                    escapeCsvValue(component.product.name),
                    escapeCsvValue(optionsText),
                    escapeCsvValue(this.formatPriceForCsv(componentPrice)),
                    quantity,
                    escapeCsvValue(this.formatPriceForCsv(subtotal)),
                ]);
            });

            // Add total row
            csvRows.push([
                '',
                '',
                '',
                'TOTAL:',
                '',
                escapeCsvValue(this.formatPriceForCsv(totalPrice)),
            ]);

            // Convert to CSV string
            const csvContent = csvRows.map(row => row.join(',')).join('\n');

            // Add BOM for Excel compatibility
            const BOM = '\uFEFF';
            const csvWithBOM = BOM + csvContent;

            // Create CSV blob
            const blob = new Blob([csvWithBOM], { type: 'text/csv;charset=utf-8;' });

            // Create download link
            const url = URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = `pc-build-${new Date().getTime()}.csv`;

            // Trigger download
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

            // Clean up
            URL.revokeObjectURL(url);

            // Show success notification
            const exportSuccessText = this.languageManager.getLang('notifications.export_success', 'Excel Export Completed!');
            const fileDownloadedText = this.languageManager.getLangWithPlaceholders(
                'notifications.file_downloaded',
                { filename: downloadLink.download },
                'File downloaded: {filename}',
            );
            const componentsExportedText = this.languageManager.getLangWithPlaceholders(
                'notifications.components_exported',
                { count: selectedComponents.size },
                '{count} components exported',
            );

            notification.info(`
                📊 ${exportSuccessText}<br>
                ${fileDownloadedText}<br>
                ${componentsExportedText}
            `, '<i class="icon-check"></i>', 4000);
        } catch (error) {
            const exportErrorText = this.languageManager.getLang('notifications.export_error', 'Error exporting Excel. Please try again.');
            notification.error(`❌ ${exportErrorText}`);
        }
    }

    /**
     * Load build state - Mở file picker để load build
     * @param {Function} loadBuildCallback - Callback function để load build data
     */
    loadBuild(loadBuildCallback) {
        const notification = getNotification();

        // Create file input if not exists
        let fileInput = document.getElementById('papathemes-pcbuilder-file-input');
        if (!fileInput) {
            fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.json,application/json';
            fileInput.id = 'papathemes-pcbuilder-file-input';
            fileInput.className = 'papathemes-pcbuilder-file-input';
            document.body.appendChild(fileInput);
        }

        // Set up file change handler
        fileInput.onchange = (event) => {
            const file = event.target.files[0];
            if (!file) {
                return;
            }

            // Validate file type
            if (!file.name.toLowerCase().endsWith('.json')) {
                const selectValidJsonText = this.languageManager.getLang('select_valid_json', 'Please select a valid JSON file.');
                notification.error(`⚠️ ${selectValidJsonText}`);
                return;
            }

            // Read file
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const buildData = JSON.parse(e.target.result);
                    loadBuildCallback(buildData);
                } catch (error) {
                    const invalidJsonText = this.languageManager.getLang('invalid_json_file', 'Invalid JSON file. Please check the file format.');
                    notification.error(`❌ ${invalidJsonText}`);
                }
            };

            reader.onerror = () => {
                const errorReadingText = this.languageManager.getLang('error_reading_file', 'Error reading file. Please try again.');
                notification.error(`❌ ${errorReadingText}`);
            };

            reader.readAsText(file);

            // Reset input
            fileInput.value = '';
        };

        // Trigger file picker
        fileInput.click();
    }

    /**
     * Share build functionality - Tạo link share và hiển thị modal
     * @param {Map} selectedComponents - Selected components từ PC Builder
     */
    shareBuild(selectedComponents) {
        const notification = getNotification();

        if (selectedComponents.size === 0) {
            const noComponentsText = this.languageManager.getLang('no_components_selected', 'No components selected to share. Please select some components first.');
            notification.error(`⚠️ ${noComponentsText}`);
            return;
        }

        try {
            // Sử dụng delimiter format thay vì JSON để tiết kiệm tối đa kích thước URL
            const delimiterData = this.convertToDelimiterFormat(selectedComponents);

            // Optimize delimiter format - loại bỏ text values, chỉ giữ numeric values
            const optimizedDelimiterData = this.optimizeDelimiterFormat(delimiterData);

            // Create share URL trực tiếp mà không encoding để giữ nguyên ký tự : , ;
            const currentUrl = new URL(window.location.href);

            // Loại bỏ share parameter cũ nếu có
            currentUrl.searchParams.delete('share');

            // Tạo URL mới bằng cách append share parameter trực tiếp
            const baseUrl = currentUrl.toString();
            const separator = baseUrl.includes('?') ? '&' : '?';
            const shareUrl = `${baseUrl}${separator}share=${optimizedDelimiterData}`;

            // Show share modal
            this.showShareModal(shareUrl, selectedComponents.size);
        } catch (error) {
            console.error('❌ Error creating share URL:', error); // eslint-disable-line no-console
            const shareErrorText = this.languageManager.getLang('notifications.share_error', 'Error sharing build. Please try again.');
            notification.error(`❌ ${shareErrorText}`);
        }
    }

    /**
     * Convert selectedComponents sang delimiter format
     * @param {Map} selectedComponents - Selected components map
     * @returns {string} Delimiter format string
     */
    convertToDelimiterFormat(selectedComponents) {
        const componentArray = [];

        selectedComponents.forEach((component) => {
            // Bắt đầu với componentType:productId
            let componentStr = `${component.componentType}:${component.product.id}`;

            // Thêm quantity nếu khác 1
            if (component.quantity && component.quantity !== 1) {
                componentStr += `,${component.quantity}`;
            }

            // Thêm options nếu có
            if (component.product.selectedOptions && component.product.selectedOptions.length > 0) {
                const optionsStr = component.product.selectedOptions
                    .map(option => `${option.optionId}:${option.selectedValue}`)
                    .join(',');
                componentStr += `,${optionsStr}`;
            }

            componentArray.push(componentStr);
        });

        return componentArray.join(';');
    }

    /**
     * Optimize delimiter format bằng cách loại bỏ các option có value là text
     * @param {string} delimiterString - Chuỗi delimiter format
     * @returns {string} Chuỗi đã được optimize
     */
    optimizeDelimiterFormat(delimiterString) {
        return delimiterString.split(';').map(componentStr => {
            // Parse componentType:productId,quantity,options format
            const colonIndex = componentStr.indexOf(':');
            if (colonIndex === -1) {
                // Fallback for old format without component type
                return componentStr;
            }

            const componentType = componentStr.substring(0, colonIndex);
            const remainingStr = componentStr.substring(colonIndex + 1);
            const parts = remainingStr.split(',');
            const id = parts[0]; // Product ID

            const optimizedParts = [id];

            // Xử lý từng part
            for (let i = 1; i < parts.length; i++) {
                const part = parts[i];

                if (part.includes(':')) {
                    // Đây là option (optionId:value)
                    const [, optionValue] = part.split(':', 2);

                    // Chỉ giữ lại nếu value là numeric
                    if (this.isNumericValue(optionValue)) {
                        optimizedParts.push(part);
                    }
                    // Skip text values để tối ưu URL length
                } else {
                    // Đây là quantity
                    optimizedParts.push(part);
                }
            }

            return `${componentType}:${optimizedParts.join(',')}`;
        }).join(';');
    }

    /**
     * Kiểm tra xem một giá trị có phải là numeric hay không
     * @param {string} value - Giá trị cần kiểm tra
     * @returns {boolean} True nếu là numeric (bao gồm cả date format)
     */
    isNumericValue(value) {
        // Kiểm tra nếu là số thuần túy
        if (!Number.isNaN(Number(value)) && !Number.isNaN(parseFloat(value))) {
            return true;
        }

        // Kiểm tra nếu là date format (YYYY-MM-DD, YYYY-M-D, etc.)
        const datePattern = /^\d{4}-\d{1,2}-\d{1,2}$/;
        if (datePattern.test(value)) {
            return true;
        }

        // Kiểm tra nếu là timestamp hoặc ID number
        const numberPattern = /^\d+$/;
        if (numberPattern.test(value)) {
            return true;
        }

        return false;
    }

    /**
     * View & Print build - Tạo HTML table và mở trong window mới để in
     * @param {Map} selectedComponents - Selected components từ PC Builder
     */
    async viewAndPrint(selectedComponents) {
        // Kiểm tra có components nào không
        const componentsArray = Array.from(selectedComponents.values()).filter(component => component);

        if (componentsArray.length === 0) {
            const notification = getNotification();
            const noComponentsText = this.languageManager.getLang('no_components_selected', 'No components selected. Please select some components first.');
            notification.error(`❌ ${noComponentsText}`);
            return;
        }

        // Tạo HTML content cho print
        const printHtml = this.generatePrintHtml(componentsArray);

        // Mở window mới với print content
        const printWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');

        if (!printWindow) {
            const notification = getNotification();
            notification.error('❌ Popup blocked. Please allow popups for this site.');
            return;
        }

        // Write content to new window
        printWindow.document.write(printHtml);
        printWindow.document.close();

        // Focus window
        printWindow.focus();

        // Auto print after content loads
        printWindow.onload = () => {
            setTimeout(() => {
                printWindow.print();
            }, 500);
        };

        // Show success notification
        const notification = getNotification();
        const printSuccessText = this.languageManager.getLang('notifications.print_success', 'Print view opened successfully!');
        notification.info(`✅ ${printSuccessText}`, '<i class="icon-print"></i>', 3000);
    }

    /**
     * Handle share build from URL parameter
     * @param {Function} loadBuildCallback - Callback function để load build data
     */
    async handleShareBuildFromUrl(loadBuildCallback) {
        const urlParams = new URLSearchParams(window.location.search);
        const shareData = urlParams.get('share');

        if (!shareData) {
            return; // No share data in URL
        }

        try {
            // Decode URL encoded data nếu cần
            let decodedData = shareData;
            if (shareData.includes('%')) {
                decodedData = decodeURIComponent(shareData);
            }

            // Check if data is delimiter format (simple string không có encoding)
            if (this.isDelimiterFormat(decodedData)) {
                // Parse delimiter format và load build
                const buildData = await this.parseDelimiterFormat(decodedData);
                await loadBuildCallback(buildData);
            } else {
                // Legacy format - JSON với simple encoding hoặc base64
                let jsonString;
                if (this.isSimpleEncoded(decodedData)) {
                    // Simple encoded data - decode directly
                    jsonString = this.decodeSimpleEncoding(decodedData);
                } else {
                    // Base64 encoded data (backward compatibility)
                    jsonString = decodeURIComponent(escape(atob(decodedData)));
                }

                // Decompress nếu đây là compressed data từ version 2.0.0
                jsonString = this.decompressShareData(jsonString);

                const rawBuildData = JSON.parse(jsonString);

                // Show loading notification
                const notification = getNotification();
                const loadingSharedText = this.languageManager.getLang('notifications.loading_shared', 'Loading shared build...');
                notification.info(`⏳ ${loadingSharedText}`, '<i class="icon-spinner"></i>', 2000);

                // Xử lý dữ liệu theo version
                let buildData;
                if (rawBuildData.v === '2.0.0') {
                    // Version mới - convert từ format ngắn gọn về format đầy đủ
                    buildData = await this.convertOptimizedToFullBuildData(rawBuildData);
                } else {
                    // Version cũ - sử dụng trực tiếp
                    buildData = rawBuildData;
                }

                // Load build data
                await loadBuildCallback(buildData);
            }

            // Remove share parameter from URL để tránh reload lại
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.delete('share');
            window.history.replaceState({}, document.title, currentUrl.toString());

            // Show success notification
            const notification = getNotification();
            const loadSuccessText = this.languageManager.getLang('notifications.load_success', 'Build Loaded Successfully!');
            const sharedBuildText = this.languageManager.getLang('notifications.shared_build_loaded', 'Shared build loaded');

            notification.info(`
                ✅ ${loadSuccessText}<br>
                ${sharedBuildText}<br>
                Build components loaded successfully
            `, '<i class="icon-check"></i>', 4000);
        } catch (error) {
            console.error('❌ Error processing share URL:', error); // eslint-disable-line no-console
            const notification = getNotification();
            const loadErrorText = this.languageManager.getLang('notifications.load_error', 'Error loading shared build. Please check the link.');
            notification.error(`❌ ${loadErrorText}`);

            // Remove invalid share parameter from URL
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.delete('share');
            window.history.replaceState({}, document.title, currentUrl.toString());
        }
    }

    /**
     * Check if data is delimiter format
     * @param {string} data - Data string to check
     * @returns {boolean} True if delimiter format
     */
    isDelimiterFormat(data) {
        // Delimiter format chứa component type (letters/numbers), số, dấu :, ,, ; và dấu gạch ngang (-) cho date format
        // Format: componentType:productId,quantity,option1:value1;componentType2:productId2...
        return /^[a-zA-Z0-9-]+:\d+[\d:,;a-zA-Z0-9-]*(?:;[a-zA-Z0-9-]+:\d+[\d:,;a-zA-Z0-9-]*)*$/.test(data) && !data.includes('(') && !data.includes("'");
    }

    /**
     * Parse delimiter format thành build data
     * @param {string} delimiterData - Delimiter format string
     * @returns {Promise<Object>} Build data object
     */
    async parseDelimiterFormat(delimiterData) {
        // Parse delimiter format: componentType:productId,quantity,options
        const components = [];
        const parts = delimiterData.split(';');

        parts.forEach(componentStr => {
            // Parse componentType:productId,quantity,options format
            const colonIndex = componentStr.indexOf(':');
            if (colonIndex === -1) {
                throw new Error(`Invalid component format: ${componentStr}`);
            }

            const componentType = componentStr.substring(0, colonIndex);
            const remaining = componentStr.substring(colonIndex + 1);

            // Split remaining part để get productId, quantity, options
            const remainingParts = remaining.split(',');
            if (remainingParts.length < 1) {
                throw new Error(`Invalid component data: ${componentStr}`);
            }

            const id = parseInt(remainingParts[0], 10);
            const quantity = remainingParts.length > 1 ? parseInt(remainingParts[1], 10) || 1 : 1;

            // Parse options từ remaining parts (index 2+)
            const options = [];
            if (remainingParts.length > 2) {
                for (let i = 2; i < remainingParts.length; i++) {
                    const optionPart = remainingParts[i];
                    if (optionPart.includes(':')) {
                        const [optionId, optionValue] = optionPart.split(':');
                        if (optionId && optionValue) {
                            options.push({
                                optionId: parseInt(optionId, 10),
                                selectedValue: optionValue,
                            });
                        }
                    }
                }
            }

            components.push({
                componentType, id, quantity, options,
            });
        });

        // Validate parsed components
        if (components.length === 0) {
            throw new Error('No valid components found in delimiter format');
        }

        // Fetch products và tax settings
        const productIds = components.map(comp => comp.id);
        const { products: productData, taxSettings } = await this.fetchProductsByIds(productIds);

        // Create product lookup map
        const productMap = new Map();
        productData.forEach(product => {
            productMap.set(product.entityId, product);
        });

        // Convert về format đầy đủ
        const buildData = {
            version: '1.0.0', // Convert về version cũ để compatibility
            created: new Date().toISOString(),
            components: [],
            metadata: {
                totalComponents: components.length,
                buildName: `PC Build ${new Date().toLocaleDateString()}`,
                description: 'PC Builder configuration share (delimiter format)',
                taxSettings, // Store tax settings for reference
            },
        };

        // Build components với product data đầy đủ
        components.forEach(comp => {
            const product = productMap.get(comp.id);
            if (product) {
                // Restore selectedOptions từ parsed options với product options data
                const restoredOptions = this.restoreProductOptions(comp.options, product.productOptions);

                // Calculate adjusted price với selected options theo tax settings
                const basePrice = this.getPriceByTaxSettings(product, taxSettings);
                const adjustedPrice = this.calculatePriceWithOptions(basePrice);

                buildData.components.push({
                    componentType: comp.componentType, // Extracted từ delimiter format
                    product: {
                        id: product.entityId,
                        name: product.name,
                        price: adjustedPrice, // Use adjusted price instead of base price
                        image: product.defaultImage?.url320wide || product.defaultImage?.url || '',
                        url: product.path,
                        quantity: comp.quantity,
                        minPurchaseQuantity: product.minPurchaseQuantity || 1,
                        maxPurchaseQuantity: product.maxPurchaseQuantity || 999,
                        selectedOptions: restoredOptions,
                    },
                    selectedOptions: restoredOptions,
                    addedAt: new Date().toISOString(),
                });
            } else {
                console.warn(`⚠️ Product not found: ${comp.id}`); // eslint-disable-line no-console
            }
        });

        return buildData;
    }

    /**
     * Calculate price với selected options
     * Note: BigCommerce GraphQL không expose price adjustments cho options,
     * nên tạm thời return base price. Trong production có thể cần dùng Storefront API.
     *
     * @param {number} basePrice - Base product price
     * @returns {number} Price (base price for now, adjusted price if enhancement needed)
     */
    calculatePriceWithOptions(basePrice) {
        const cleanBasePrice = parseFloat(basePrice) || 0;

        // TODO: BigCommerce GraphQL không support price adjustments cho options
        // Có thể cần implement:
        // 1. Sử dụng Storefront API để get variant prices
        // 2. Sử dụng REST API product options
        // 3. Cache price adjustments từ product page khi user select options

        return cleanBasePrice;
    }

    /**
     * Restore product options với fieldLabel, selectedText, attributeType
     * @param {Array} parsedOptions - Parsed options từ delimiter format
     * @param {Object} productOptions - Product options từ GraphQL
     * @returns {Array} Restored options array
     */
    restoreProductOptions(parsedOptions, productOptions) {
        if (!parsedOptions || !productOptions || !productOptions.edges) {
            return [];
        }

        const restoredOptions = [];

        parsedOptions.forEach(parsedOption => {
            const { optionId, selectedValue } = parsedOption;

            // Find matching product option
            const productOption = productOptions.edges.find(edge => edge.node.entityId === optionId);

            if (!productOption) {
                console.warn(`⚠️ Product option not found: ${optionId}`); // eslint-disable-line no-console
                // Fallback without additional info
                restoredOptions.push({
                    optionId,
                    selectedValue,
                    fieldLabel: `Option ${optionId}`,
                    selectedText: selectedValue,
                    attributeType: 'text',
                });
                return;
            }

            const option = productOption.node;
            let selectedText = selectedValue;
            let attributeType = 'text';

            // Determine attribute type và find selectedText
            if (option.values && option.values.edges) {
                // MultipleChoiceOption (Dropdown, RadioButtons, RectangleList, ProductPickList, Swatch)
                const valueOption = option.values.edges.find(edge => edge.node.entityId.toString() === selectedValue);
                if (valueOption) {
                    selectedText = valueOption.node.label;
                    attributeType = 'product_list';
                }
            } else if (option.checkedByDefault !== undefined) {
                // CheckboxOption
                attributeType = 'checkbox';
                selectedText = selectedValue === 'true' ? 'Yes' : 'No';
            } else if (option.dateDefaultValue !== undefined) {
                // DateFieldOption
                attributeType = 'date';
                selectedText = selectedValue;
            } else if (option.textDefaultValue !== undefined) {
                // MultiLineTextFieldOption
                attributeType = 'text';
                selectedText = selectedValue;
            } else if (option.numberDefaultValue !== undefined) {
                // NumberFieldOption
                attributeType = 'number';
                selectedText = selectedValue;
            } else if (option.textFieldDefaultValue !== undefined) {
            // TextFieldOption
                attributeType = 'text';
                selectedText = selectedValue;
            } else if (option.fileTypes) {
            // FileUploadFieldOption
                attributeType = 'file';
                selectedText = selectedValue;
            }

            restoredOptions.push({
                optionId,
                selectedValue,
                fieldLabel: option.displayName || `Option ${optionId}`,
                selectedText,
                attributeType,
            });
        });

        return restoredOptions;
    }

    /**
     * Format price for CSV export (simple number format)
     * @param {number} price - Price to format
     * @returns {string} Formatted price
     */
    formatPriceForCsv(price) {
        if (typeof price !== 'number' || Number.isNaN(price)) {
            return '0.00';
        }
        return price.toFixed(2);
    }

    /**
     * Format price for display (sử dụng currency settings hiện tại)
     * @param {number} price - Price to format
     * @returns {string} Formatted price
     */
    formatPriceForDisplay(price) {
        // Validate price input
        const cleanPrice = parseFloat(price) || 0;

        // Get current currency settings với fallback chain
        const currencySettings = this.getCurrentCurrencySettings();

        return currencyFormat(cleanPrice, currencySettings);
    }

    /**
     * Show share modal với form chứa link và nút copy
     * @param {string} shareUrl - URL để share
     * @param {number} componentCount - Số lượng components
     */
    showShareModal(shareUrl, componentCount) {
        const shareDescription = this.languageManager.getLang('share_modal.description', 'Share this link with others to let them see your PC build configuration.');
        const linkLabel = this.languageManager.getLang('share_modal.link_label', 'Share Link:');
        const copyButtonText = this.languageManager.getLang('share_modal.copy_button', 'Copy Link');
        const copiedButtonText = this.languageManager.getLang('share_modal.copied_button', 'Copied!');
        const componentsText = this.languageManager.getLangWithPlaceholders(
            'share_modal.components_count',
            { count: componentCount },
            '{count} components in this build',
        );

        const modalContent = `
            <div class="papathemes-pcbuilder-share-modal">
                <div class="papathemes-pcbuilder-share-header">
                    <p>${shareDescription}</p>
                    <p class="papathemes-pcbuilder-share-components">${componentsText}</p>
                </div>

                <div class="papathemes-pcbuilder-share-form">
                    <div class="form-field">
                        <label for="share-link-input">${linkLabel}</label>
                        <div class="papathemes-pcbuilder-share-input-group">
                            <input
                                type="text"
                                id="share-link-input"
                                class="form-input papathemes-pcbuilder-share-input"
                                value="${shareUrl}"
                                readonly
                                aria-label="${linkLabel}"
                            >
                            <button
                                type="button"
                                class="button button--primary papathemes-pcbuilder-copy-button"
                                id="papathemes-pcbuilder-copy-button"
                                data-original-text="${copyButtonText}"
                                data-copied-text="${copiedButtonText}"
                            >
                                ${copyButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Create modal instance
        this.shareModal = new Modal({
            overlayExtraClass: 'papathemes-pcbuilder-share-modal-overlay',
            modalExtraClass: 'papathemes-pcbuilder-share-modal-content',
            modalTitle: this.languageManager.getLang('share_modal.title', 'Share Your PC Build'),
            closeOnBackgroundClick: true,
            closeOnEsc: true,
            stackable: true,
        });

        // Open modal
        this.shareModal.openModal(modalContent);

        // Bind copy button event
        this.bindShareModalEvents();
    }

    /**
     * Bind events cho share modal
     */
    bindShareModalEvents() {
        // Copy button event
        $(document).on('click', '#papathemes-pcbuilder-copy-button', (event) => {
            const $button = $(event.currentTarget);
            const $input = $('#share-link-input');
            const originalText = $button.data('original-text');
            const copiedText = $button.data('copied-text');

            // Copy to clipboard
            this.copyToClipboard($input.val());

            // Update button text temporarily
            $button.text(copiedText).prop('disabled', true);

            // Reset button after 2 seconds
            setTimeout(() => {
                $button.text(originalText).prop('disabled', false);
            }, 2000);
        });

        // Select all text when clicking on input
        $(document).on('click', '#share-link-input', (event) => {
            $(event.currentTarget).select();
        });
    }

    /**
     * Copy text to clipboard
     * @param {string} text - Text to copy
     */
    copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            // Use modern clipboard API
            navigator.clipboard.writeText(text).catch(() => {
                copyToClipboardFallback(text);
            });
        } else {
            // Fallback for older browsers
            copyToClipboardFallback(text);
        }
    }

    /**
     * Close share modal
     */
    closeShareModal() {
        if (this.shareModal) {
            this.shareModal.closeModal();
            this.shareModal = null;
        }
    }

    /**
     * Convert optimized build data (v2.0.0) về format đầy đủ để compatibility
     * @param {Object} optimizedData - Optimized build data với format ngắn gọn
     * @returns {Promise<Object>} Full build data format
     */
    async convertOptimizedToFullBuildData(optimizedData) {
        try {
            // Extract product IDs từ optimized data
            const productIds = optimizedData.c.map(component => component.id);

            // Fetch product data từ BigCommerce API sử dụng GraphQL
            const { products: productData, taxSettings } = await this.fetchProductsByIds(productIds);

            // Create product lookup map
            const productMap = new Map();
            productData.forEach(product => {
                productMap.set(product.entityId, product);
            });

            // Convert về format đầy đủ
            const fullBuildData = {
                version: '1.0.0', // Convert về version cũ để compatibility
                created: new Date().toISOString(),
                components: [],
                metadata: {
                    totalComponents: optimizedData.c.length,
                    buildName: `PC Build ${new Date().toLocaleDateString()}`,
                    description: 'PC Builder configuration share (loaded from optimized URL)',
                    taxSettings, // Store tax settings for reference
                },
            };

            // Rebuild components với product data đầy đủ
            optimizedData.c.forEach(optComponent => {
                const product = productMap.get(optComponent.id);
                if (product) {
                    // Restore selectedOptions từ optimized format
                    const restoredOptions = (optComponent.opts || []).map(opt => ({
                        optionId: opt.oid || opt.optionId, // Support cả format cũ và mới
                        selectedValue: opt.val || opt.selectedValue,
                        // Note: fieldLabel, selectedText, attributeType sẽ được restore từ product options
                    }));

                    // Calculate adjusted price với selected options theo tax settings
                    const basePrice = this.getPriceByTaxSettings(product, taxSettings);
                    const adjustedPrice = this.calculatePriceWithOptions(basePrice);

                    fullBuildData.components.push({
                        componentType: optComponent.t,
                        product: {
                            id: product.entityId,
                            name: product.name,
                            price: adjustedPrice, // Use adjusted price instead of base price
                            image: product.defaultImage?.url320wide || product.defaultImage?.url || '',
                            url: product.path,
                            quantity: optComponent.q || 1,
                            minPurchaseQuantity: product.minPurchaseQuantity || 1,
                            maxPurchaseQuantity: product.maxPurchaseQuantity || 999,
                            selectedOptions: restoredOptions,
                        },
                        selectedOptions: restoredOptions,
                        addedAt: new Date().toISOString(),
                    });
                }
            });

            return fullBuildData;
        } catch (error) {
            console.error('❌ Error converting optimized build data:', error); // eslint-disable-line no-console
            throw new Error('Failed to load shared build. Please check the link.');
        }
    }

    /**
     * Check if data is simple encoded (không phải base64)
     * @param {string} data - Data string to check
     * @returns {boolean} True if simple encoded
     */
    isSimpleEncoded(data) {
        // Simple encoded data chứa ký tự ( ) < > ' thay vì { } [ ] "
        return data.includes('(') && data.includes("'") && !data.match(/^[A-Za-z0-9+/]*={0,2}$/);
    }

    /**
     * Decode simple encoded data về JSON string
     * @param {string} simpleEncoded - Simple encoded string
     * @returns {string} JSON string
     */
    decodeSimpleEncoding(simpleEncoded) {
        return simpleEncoded
            .replace(/'/g, '"') // ' -> "
            .replace(/\(/g, '{') // ( -> {
            .replace(/\)/g, '}') // ) -> }
            .replace(/</g, '[') // < -> [
            .replace(/>/g, ']'); // > -> ]
    }

    /**
     * Decompress share data về format JSON đầy đủ
     * @param {string} compressedData - Compressed JSON string
     * @returns {string} Decompressed JSON string
     */
    decompressShareData(compressedData) {
        try {
            // Reverse compression transformations
            const decompressedData = compressedData
                .replace(/(["}])([0-9]+):/g, '$1,"q":$2:') // Restore removed quantity
                .replace(/(["}])(\[)/g, '$1,"opts":$2') // Restore removed opts arrays
                .replace(/"o":/g, '"oid":') // Restore optionId field
                .replace(/"v":/g, '"val":') // Restore selectedValue field
                .replace(/([^"])\b0\b/g, '$1null') // Restore null values
                .replace(/([^"])\b1\b(?=\s*[,}])/g, '$1true') // Restore boolean true
                .replace(/([^"])\b0\b(?=\s*[,}])/g, '$1false'); // Restore boolean false

            return decompressedData;
        } catch (error) {
            console.warn('⚠️ Decompression failed, using original data:', error); // eslint-disable-line no-console
            return compressedData; // Fallback to original data
        }
    }

    /**
     * Fetch products by IDs sử dụng GraphQL API
     * @param {Array<number>} productIds - Array of product IDs
     * @returns {Promise<Object>} Object containing products and tax settings
     */
    async fetchProductsByIds(productIds) {
        if (!productIds || productIds.length === 0) {
            return { products: [], taxSettings: 'INC' };
        }

        const query = `
            query getProductsByIds($productIds: [Int!], $currencyCode: currencyCode!) {
                site {
                    products(entityIds: $productIds) {
                        edges {
                            node {
                                entityId
                                name
                                sku
                                path
                                minPurchaseQuantity
                                maxPurchaseQuantity
                                defaultImage {
                                    url320wide: url(width: 320)
                                    url: url(width: 400)
                                    altText
                                }
                                pricesWithTax: prices(includeTax: true, currencyCode: $currencyCode) {
                                    price {
                                        value
                                        currencyCode
                                    }
                                    basePrice {
                                        value
                                        currencyCode
                                    }
                                    salePrice {
                                        value
                                        currencyCode
                                    }
                                    retailPrice {
                                        value
                                        currencyCode
                                    }
                                }
                                pricesWithoutTax: prices(includeTax: false, currencyCode: $currencyCode) {
                                    price {
                                        value
                                        currencyCode
                                    }
                                    basePrice {
                                        value
                                        currencyCode
                                    }
                                    salePrice {
                                        value
                                        currencyCode
                                    }
                                    retailPrice {
                                        value
                                        currencyCode
                                    }
                                }
                                productOptions {
                                    edges {
                                        node {
                                            entityId
                                            displayName
                                            ... on CheckboxOption {
                                                checkedByDefault
                                            }
                                            ... on DateFieldOption {
                                                dateDefaultValue: defaultValue
                                            }
                                            ... on FileUploadFieldOption {
                                                fileTypes
                                            }
                                            ... on MultiLineTextFieldOption {
                                                textDefaultValue: defaultValue
                                            }
                                            ... on NumberFieldOption {
                                                numberDefaultValue: defaultValue
                                            }
                                            ... on MultipleChoiceOption {
                                                values {
                                                    edges {
                                                        node {
                                                            entityId
                                                            label
                                                            isDefault
                                                        }
                                                    }
                                                }
                                            }
                                            ... on TextFieldOption {
                                                textFieldDefaultValue: defaultValue
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    settings {
                        tax {
                            plp
                        }
                    }
                }
            }
        `;

        // Luôn sử dụng currency code từ context.active_currency_code
        // BigCommerce đã handle currency switching và cung cấp đúng currency code
        const currencyCode = this.context?.active_currency_code || 'USD';

        try {
            const headers = {
                'Content-Type': 'application/json',
            };

            // Try multiple token sources
            const token = this.context?.token || this.context?.graphQLToken;
            if (token) {
                headers.Authorization = `Bearer ${token}`;
            } else {
                console.warn('⚠️ No GraphQL token available, trying without auth'); // eslint-disable-line no-console
            }

            const response = await $.ajax({
                url: '/graphql',
                method: 'POST',
                headers,
                data: JSON.stringify({
                    query,
                    variables: {
                        productIds,
                        currencyCode,
                    },
                }),
                xhrFields: {
                    withCredentials: true,
                },
            });

            if (response.errors) {
                console.error('❌ GraphQL errors:', response.errors); // eslint-disable-line no-console
                throw new Error(`GraphQL errors: ${JSON.stringify(response.errors)}`);
            }

            const products = response.data?.site?.products?.edges?.map(edge => edge.node) || [];
            const taxSettings = response.data?.site?.settings?.tax?.plp || 'INC';

            return { products, taxSettings };
        } catch (error) {
            console.error('❌ GraphQL product fetch failed:', error); // eslint-disable-line no-console
            throw error;
        }
    }

    /**
     * Get price theo tax display settings
     * @param {Object} product - Product từ GraphQL với pricesWithTax và pricesWithoutTax
     * @param {string} taxDisplay - Tax display setting ('EX', 'INC', 'BOTH')
     * @returns {number} Price value theo settings
     */
    getPriceByTaxSettings(product, taxDisplay) {
        // Default to pricesWithTax nếu không có taxDisplay hoặc không hợp lệ
        switch (taxDisplay) {
        case 'EX': // Excluding tax
            return product.pricesWithoutTax?.price?.value || 0;
        case 'INC': // Including tax
            return product.pricesWithTax?.price?.value || 0;
        case 'BOTH': // Both - default to including tax for compatibility
            return product.pricesWithTax?.price?.value || 0;
        default:
            // Fallback to including tax
            return product.pricesWithTax?.price?.value || 0;
        }
    }

    /**
     * Generate HTML content cho print view
     * @param {Array} components - Array of selected components
     * @returns {string} HTML content
     */
    generatePrintHtml(components) {
        const totalPrice = components.reduce((sum, component) => sum + (component.product.price * component.quantity), 0);

        const formattedTotalPrice = this.formatPriceForDisplay(totalPrice);
        const buildDate = new Date().toLocaleDateString();
        const buildTime = new Date().toLocaleTimeString();

        // Get language strings
        const printTitle = this.languageManager.getLang('print.title', 'PC Build Configuration');
        const printSubtitle = this.languageManager.getLang('print.subtitle', 'Custom PC Build Summary');
        const generatedOn = this.languageManager.getLangWithPlaceholders(
            'print.generated_on',
            { date: buildDate, time: buildTime },
            'Generated on {date} at {time}',
        );
        const componentLabel = this.languageManager.getLang('print.component', 'Component');
        const optionsLabel = this.languageManager.getLang('print.options', 'Options');
        const priceLabel = this.languageManager.getLang('print.price', 'Price');
        const quantityLabel = this.languageManager.getLang('print.quantity', 'Qty');
        const subtotalLabel = this.languageManager.getLang('print.subtotal', 'Subtotal');
        const totalLabel = this.languageManager.getLang('print.total', 'Total:');
        const noImageText = this.languageManager.getLang('print.no_image', 'No Image');
        const skuLabel = this.languageManager.getLang('print.sku', 'SKU:');
        const footerDescription = this.languageManager.getLang('print.footer_description', 'This build configuration was generated by the PC Builder tool.');
        const footerPricing = this.languageManager.getLang('print.footer_pricing', 'Prices are subject to change. Please verify current pricing before purchase.');
        const printButton = this.languageManager.getLang('print.print_button', 'Print');
        const closeButton = this.languageManager.getLang('print.close_button', 'Close');

        // Tạo table rows cho từng component
        const componentRows = components.map(component => {
            const formattedPrice = this.formatPriceForDisplay(component.product.price);
            const subtotal = this.formatPriceForDisplay(component.product.price * component.quantity);

            // Format selected options
            const optionsText = component.product.selectedOptions && component.product.selectedOptions.length > 0
                ? component.product.selectedOptions.map(option => `${option.fieldLabel}: ${option.selectedText}`).join(', ')
                : '';

            // Tạo HTML cho hình ảnh sản phẩm
            const productImage = component.product.image
                ? `<img src="${component.product.image}" alt="${component.product.name}" class="product-image" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">`
                : `<div class="no-image" style="width: 60px; height: 60px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #6c757d; font-size: 12px;">${noImageText}</div>`;

            return `
                <tr>
                    <td>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            ${productImage}
                            <div>
                                <div style="font-weight: 500; margin-bottom: 4px;">${component.product.name}</div>
                                ${component.product.sku ? `<div style="font-size: 12px; color: #6c757d;">${skuLabel} ${component.product.sku}</div>` : ''}
                            </div>
                        </div>
                    </td>
                    <td>${optionsText || '-'}</td>
                    <td class="text-right">${formattedPrice}</td>
                    <td class="text-center">${component.quantity}</td>
                    <td class="text-right">${subtotal}</td>
                </tr>
            `;
        }).join('');

        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PC Build - ${buildDate}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
            padding: 20px;
        }

        .print-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .print-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #333;
        }

        .print-title {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #2c3e50;
        }

        .print-subtitle {
            font-size: 16px;
            color: #666;
            margin-bottom: 5px;
        }

        .print-meta {
            font-size: 14px;
            color: #888;
        }

        .print-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
            background: #fff;
        }

        .print-table th {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 12px 8px;
            text-align: left;
            font-weight: bold;
            font-size: 14px;
            color: #495057;
        }

        .print-table td {
            border: 1px solid #dee2e6;
            padding: 12px 8px;
            font-size: 14px;
            vertical-align: top;
        }

        .product-image {
            border: 1px solid #dee2e6;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .no-image {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6c757d;
            font-size: 12px;
        }

        .print-table tr:nth-child(even) {
            background: #f8f9fa;
        }

        .text-right {
            text-align: right;
        }

        .text-center {
            text-align: center;
        }

        .total-row {
            background: #e9ecef !important;
            font-weight: bold;
            font-size: 16px;
        }

        .total-row td {
            border-top: 2px solid #333;
        }

        .print-footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #dee2e6;
            text-align: center;
            font-size: 12px;
            color: #666;
        }

        .print-actions {
            margin-top: 20px;
            text-align: center;
        }

        .print-button {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            margin: 0 10px;
        }

        .print-button:hover {
            background: #0056b3;
        }

        .close-button {
            background: #6c757d;
        }

        .close-button:hover {
            background: #545b62;
        }

        @media print {
            .print-actions {
                display: none;
            }

            body {
                padding: 0;
            }

            .print-container {
                max-width: none;
            }
        }

        @media screen and (max-width: 600px) {
            body {
                padding: 10px;
            }

            .print-table {
                font-size: 12px;
            }

            .print-table th,
            .print-table td {
                padding: 8px 4px;
            }
        }
    </style>
</head>
<body>
    <div class="print-container">
        <div class="print-header">
            <h1 class="print-title">${printTitle}</h1>
            <p class="print-subtitle">${printSubtitle}</p>
            <p class="print-meta">${generatedOn}</p>
        </div>

        <table class="print-table">
            <thead>
                <tr>
                    <th style="width: 35%;">${componentLabel}</th>
                    <th style="width: 25%;">${optionsLabel}</th>
                    <th class="text-right" style="width: 15%;">${priceLabel}</th>
                    <th class="text-center" style="width: 10%;">${quantityLabel}</th>
                    <th class="text-right" style="width: 15%;">${subtotalLabel}</th>
                </tr>
            </thead>
            <tbody>
                ${componentRows}
                <tr class="total-row">
                    <td colspan="4" class="text-right"><strong>${totalLabel}</strong></td>
                    <td class="text-right"><strong>${formattedTotalPrice}</strong></td>
                </tr>
            </tbody>
        </table>

        <div class="print-footer">
            <p>${footerDescription}</p>
            <p>${footerPricing}</p>
        </div>

        <div class="print-actions">
            <button class="print-button" onclick="window.print()">${printButton}</button>
            <button class="print-button close-button" onclick="window.close()">${closeButton}</button>
        </div>
    </div>
</body>
</html>
        `;
    }
}
