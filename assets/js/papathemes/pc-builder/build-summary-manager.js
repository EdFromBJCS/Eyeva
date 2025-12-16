/**
 * Build Summary Manager - Quản lý hiển thị tổng giá build và progress bar
 * Handles build summary calculations, progress tracking, currency formatting, and action button states
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 */

import { currencyFormat } from '../utils';
import { extractPriceFromText } from './utils';

/**
 * Build Summary Manager class for PC Builder
 * Centralized management of build summary, progress, and currency operations
 */
export default class BuildSummaryManager {
    /**
     * Constructor
     * @param {Object} context - BigCommerce context
     * @param {Object} languageManager - Language manager instance
     */
    constructor(context, languageManager) {
        this.context = context;
        this.languageManager = languageManager;

        // Currency settings cache
        this.currencySettings = null;
        this.cachedCurrencySettings = null;

        // Build statistics
        this.buildStats = {
            totalPrice: 0,
            componentCount: 0,
            totalComponents: 0,
        };

        // DOM element selectors
        this.selectors = {
            priceValue: '.papathemes-pcbuilder-price-value',
            mobilePriceValue: '.papathemes-pcbuilder-mobile-price-value',
            noProductPrice: '.papathemes-pcbuilder-no-product-price',
            progressFill: '.papathemes-pcbuilder-progress-fill',
            progressText: '.papathemes-pcbuilder-progress-text',
            mobileProgressText: '.papathemes-pcbuilder-mobile-progress-text',
            addToCartButton: '#papathemes-pcbuilder-add-to-cart',
            componentRows: '.papathemes-pcbuilder-component-row',
        };
    }

    /**
     * Initialize build summary manager
     * Load currency settings và setup initial display
     */
    async initialize() {
        try {
            await this.initializeCurrencyDisplay();
            this.updateInitialDisplay();
        } catch (error) {
            console.warn('⚠️ Failed to initialize build summary manager:', error); // eslint-disable-line no-console
            // Fallback to default currency settings
            this.currencySettings = this.getDefaultCurrencySettings();
            this.updateInitialDisplay();
        }
    }

    /**
     * Update build summary với selected components
     * @param {Map} selectedComponents - Map of selected components
     */
    async updateSummary(selectedComponents) {
        try {
            // Calculate build statistics
            const stats = this.calculateBuildStats(selectedComponents);
            this.buildStats = stats;

            // Update price displays
            await this.updatePriceDisplays(stats.totalPrice);

            // Update action buttons state
            this.updateActionButtons(stats.componentCount > 0);
        } catch (error) {
            console.error('❌ Error updating build summary:', error); // eslint-disable-line no-console
            // Fallback to safe display update
            this.updatePriceDisplays(0);
            this.updateActionButtons(false);
        }
    }

    /**
     * Update progress bar display
     * @param {Map} selectedComponents - Map of selected components
     */
    updateProgress(selectedComponents) {
        const totalComponents = $(this.selectors.componentRows).length;
        const selectedComponentsCount = selectedComponents.size;
        const progressPercent = totalComponents > 0 ? (selectedComponentsCount / totalComponents) * 100 : 0;

        // Update progress bar fill
        $(this.selectors.progressFill).css('width', `${progressPercent}%`);

        // Get localized progress text với placeholders
        const progressText = this.languageManager.getLangWithPlaceholders(
            'build.progress_text',
            { selected: selectedComponentsCount, total: totalComponents },
            '{selected}/{total} Components Selected',
        );

        // Update progress text displays
        $(this.selectors.progressText).text(progressText);
        $(this.selectors.mobileProgressText).text(progressText);

        // Update build stats cache
        this.buildStats.componentCount = selectedComponentsCount;
        this.buildStats.totalComponents = totalComponents;

        // Add visual feedback cho progress milestones
        this.updateProgressMilestones(progressPercent);
    }

    /**
     * Calculate total price from selectedComponents Map
     * @param {Map} selectedComponents - Map of selected components
     * @returns {Promise<number>} Total price
     */
    async calculateTotalPrice(selectedComponents) {
        let totalPrice = 0;

        for (const [, componentData] of selectedComponents) {
            if (componentData && componentData.product) {
                const price = componentData.product.price;
                const quantity = componentData.quantity || componentData.product.quantity || 1;
                // Clean price value and multiply by quantity
                const cleanPrice = extractPriceFromText(price);
                const itemTotal = cleanPrice * quantity;
                totalPrice += itemTotal;
            }
        }

        return totalPrice;
    }

    /**
     * Format price theo currency settings hiện tại
     * @param {number|string} price - Price to format
     * @param {Object} currencySettings - Currency settings (optional, uses cached if not provided)
     * @returns {Promise<string>} Formatted price string
     */
    async formatPrice(price, currencySettings = null) {
        // Clean and validate price input
        let cleanPrice = 0;
        if (typeof price === 'string') {
            cleanPrice = extractPriceFromText(price);
        } else if (typeof price === 'number' && !Number.isNaN(price)) {
            cleanPrice = price;
        }

        // Use provided settings hoặc load từ cache/API
        const settings = currencySettings || this.currencySettings || await this.getCurrencySettings();

        return currencyFormat(parseFloat(cleanPrice || 0), settings);
    }

    /**
     * Get currency settings từ GraphQL API với caching
     * @returns {Promise<Object>} Currency settings object
     */
    async getCurrencySettings() {
        // Return cached settings nếu đã có
        if (this.cachedCurrencySettings) {
            return this.cachedCurrencySettings;
        }

        // Default settings fallback
        const defaultSettings = this.getDefaultCurrencySettings();

        try {
            const headers = {
                'Content-Type': 'application/json',
            };

            // Add Authorization header nếu có GraphQL token
            if (this.context?.graphQLToken) {
                headers.Authorization = `Bearer ${this.context.graphQLToken}`;
            } else {
                console.warn('⚠️ No GraphQL token available for currency settings!'); // eslint-disable-line no-console
                throw new Error('No GraphQL token available');
            }

            // Use active_currency_code từ context
            const currencyCode = this.context.active_currency_code || 'USD';

            const response = await $.ajax({
                url: '/graphql',
                method: 'POST',
                headers,
                data: JSON.stringify({
                    query: `
                        query getCurrencySettings($currencyCode: currencyCode!) {
                            site {
                                currency(currencyCode: $currencyCode) {
                                    display {
                                        symbol
                                        symbolPlacement
                                        decimalToken
                                        thousandsToken
                                        decimalPlaces
                                    }
                                }
                            }
                        }
                    `,
                    variables: {
                        currencyCode,
                    },
                }),
                xhrFields: {
                    withCredentials: true,
                },
            });

            const currencyDisplay = response.data?.site?.currency?.display;

            if (currencyDisplay) {
                this.cachedCurrencySettings = {
                    currency_token: currencyDisplay.symbol || defaultSettings.currency_token,
                    currency_location: currencyDisplay.symbolPlacement === 'RIGHT' ? 'right' : 'left',
                    decimal_token: currencyDisplay.decimalToken || defaultSettings.decimal_token,
                    decimal_places: currencyDisplay.decimalPlaces || defaultSettings.decimal_places,
                    thousands_token: currencyDisplay.thousandsToken || defaultSettings.thousands_token,
                };

                return this.cachedCurrencySettings;
            }

            // Fallback nếu GraphQL không trả về data
            throw new Error('No currency data from GraphQL');
        } catch (error) {
            console.warn('⚠️ Failed to load currency settings from GraphQL, using fallback:', error); // eslint-disable-line no-console

            // Log chi tiết về lỗi GraphQL
            if (error.responseJSON) {
                console.error('GraphQL Response Error:', error.responseJSON); // eslint-disable-line no-console
            }

            // Final fallback: default settings
            this.cachedCurrencySettings = defaultSettings;
            return defaultSettings;
        }
    }

    /**
     * Initialize currency display khi PC Builder load
     */
    async initializeCurrencyDisplay() {
        try {
            // Load currency settings lần đầu để cache
            const currencySettings = await this.getCurrencySettings();

            // Set currency settings cho instance
            this.currencySettings = currencySettings;
        } catch (error) {
            console.warn('⚠️ Failed to initialize currency display:', error); // eslint-disable-line no-console
            // Fallback: use default format
            this.currencySettings = this.getDefaultCurrencySettings();
        }
    }

    /**
     * Calculate build statistics từ selected components
     * @param {Map} selectedComponents - Map of selected components
     * @returns {Object} Build statistics object
     */
    calculateBuildStats(selectedComponents) {
        let totalPrice = 0;
        let componentCount = 0;

        // Calculate totals từ selected components
        selectedComponents.forEach(component => {
            if (component.product && component.product.price) {
                const componentPrice = parseFloat(component.product.price) || 0;
                const quantity = parseInt(component.quantity, 10) || 1;
                totalPrice += componentPrice * quantity;
            }
            componentCount++;
        });

        const totalComponents = $(this.selectors.componentRows).length;

        return {
            totalPrice,
            componentCount,
            totalComponents,
            averagePrice: componentCount > 0 ? totalPrice / componentCount : 0,
            completionPercentage: totalComponents > 0 ? (componentCount / totalComponents) * 100 : 0,
        };
    }

    /**
     * Update price displays với formatted currency
     * @param {number} totalPrice - Total price to display
     */
    async updatePriceDisplays(totalPrice) {
        try {
            // Format total price
            const formattedTotalPrice = await this.formatPrice(totalPrice);

            // Update main price displays
            $(this.selectors.priceValue).text(formattedTotalPrice);
            $(this.selectors.mobilePriceValue).text(formattedTotalPrice);

            // Update no-product price displays với zero value
            const formattedZeroPrice = await this.formatPrice(0);
            $(this.selectors.noProductPrice).text(formattedZeroPrice);

            // Add visual feedback cho price changes
            this.addPriceChangeAnimation($(this.selectors.priceValue));
            this.addPriceChangeAnimation($(this.selectors.mobilePriceValue));
        } catch (error) {
            console.warn('⚠️ Failed to format prices, using fallback:', error); // eslint-disable-line no-console
            // Fallback to simple formatting
            $(this.selectors.priceValue).text('$0.00');
            $(this.selectors.mobilePriceValue).text('$0.00');
            $(this.selectors.noProductPrice).text('$0.00');
        }
    }

    /**
     * Update action buttons state
     * @param {boolean} hasComponents - Whether build has components
     */
    updateActionButtons(hasComponents) {
        // Enable/disable add to cart button
        $(this.selectors.addToCartButton).prop('disabled', !hasComponents);

        // Add visual feedback class
        if (hasComponents) {
            $(this.selectors.addToCartButton).addClass('has-components');
        } else {
            $(this.selectors.addToCartButton).removeClass('has-components');
        }

        // Update button accessibility
        const buttonTitle = hasComponents
            ? this.languageManager.getLang('actions.add_to_cart_ready', 'Add all components to cart')
            : this.languageManager.getLang('actions.add_to_cart_disabled', 'Select components to add to cart');

        $(this.selectors.addToCartButton).attr('title', buttonTitle).attr('aria-label', buttonTitle);
    }

    /**
     * Update initial display với default values
     */
    updateInitialDisplay() {
        // Set initial prices to zero với proper formatting
        if (this.currencySettings) {
            const formattedZero = currencyFormat(0, this.currencySettings);
            $(this.selectors.priceValue).text(formattedZero);
            $(this.selectors.mobilePriceValue).text(formattedZero);
            $(this.selectors.noProductPrice).text(formattedZero);
        } else {
            // Fallback formatting
            $(this.selectors.priceValue).text('$0.00');
            $(this.selectors.mobilePriceValue).text('$0.00');
            $(this.selectors.noProductPrice).text('$0.00');
        }

        // Initialize progress với empty state
        this.updateProgress(new Map());

        // Initialize action buttons in disabled state
        this.updateActionButtons(false);
    }

    /**
     * Add visual animation cho price changes
     * @param {jQuery} $element - Element to animate
     */
    addPriceChangeAnimation($element) {
        if (!$element.length) return;

        // Add brief highlight animation
        $element.addClass('papathemes-pcbuilder-price-updated');

        // Remove animation class sau animation duration
        setTimeout(() => {
            $element.removeClass('papathemes-pcbuilder-price-updated');
        }, 500);
    }

    /**
     * Update progress milestones with visual feedback
     * @param {number} progressPercent - Progress percentage (0-100)
     */
    updateProgressMilestones(progressPercent) {
        const $progressFill = $(this.selectors.progressFill);

        // Remove existing milestone classes
        $progressFill.removeClass('progress-quarter progress-half progress-three-quarters progress-complete');

        // Add milestone classes based on progress
        if (progressPercent >= 100) {
            $progressFill.addClass('progress-complete');
        } else if (progressPercent >= 75) {
            $progressFill.addClass('progress-three-quarters');
        } else if (progressPercent >= 50) {
            $progressFill.addClass('progress-half');
        } else if (progressPercent >= 25) {
            $progressFill.addClass('progress-quarter');
        }
    }

    /**
     * Get default currency settings fallback
     * @returns {Object} Default currency settings
     */
    getDefaultCurrencySettings() {
        return {
            currency_token: '$',
            currency_location: 'left',
            decimal_token: '.',
            decimal_places: 2,
            thousands_token: ',',
        };
    }

    /**
     * Reset build summary to initial state
     */
    async resetSummary() {
        // Reset build stats
        this.buildStats = {
            totalPrice: 0,
            componentCount: 0,
            totalComponents: $(this.selectors.componentRows).length,
        };

        // Update displays
        await this.updatePriceDisplays(0);
        this.updateProgress(new Map());
        this.updateActionButtons(false);
    }

    /**
     * Get current build statistics
     * @returns {Object} Current build statistics
     */
    getBuildStats() {
        return { ...this.buildStats };
    }

    /**
     * Format price for display (synchronous version using cached settings)
     * @param {number} price - Price to format
     * @returns {string} Formatted price
     */
    formatPriceSync(price) {
        if (this.currencySettings) {
            return currencyFormat(price || 0, this.currencySettings);
        }

        // Fallback formatting
        return currencyFormat(price || 0, this.getDefaultCurrencySettings());
    }

    /**
     * Check if currency settings are loaded
     * @returns {boolean} True if currency settings are available
     */
    isCurrencySettingsLoaded() {
        return !!this.currencySettings;
    }

    /**
     * Force refresh currency settings (clear cache và reload)
     */
    async refreshCurrencySettings() {
        this.cachedCurrencySettings = null;
        this.currencySettings = null;
        await this.initializeCurrencyDisplay();
    }
}
