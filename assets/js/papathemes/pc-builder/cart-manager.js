/**
 * Cart Manager - Handles cart operations for PC Builder
 * Manages adding components to cart, cart quantity updates, and cart UI interactions
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 */

import { api } from '@bigcommerce/stencil-utils';
import { normalizeFormData } from '../../theme/common/utils/api';
import initCartDrawer from '../cart-drawer';

/**
 * Cart Manager class for PC Builder
 * Handles all cart-related operations for PC Builder components
 */
export default class CartManager {
    /**
     * Constructor
     * @param {Object} context - BigCommerce context
     * @param {Object} languageManager - Language manager instance
     */
    constructor(context, languageManager) {
        this.context = context;
        this.languageManager = languageManager;

        // Store for tracking add operations
        this.isAddingToCart = false;
        this.addProgress = {
            current: 0,
            total: 0,
        };
    }

    /**
     * Add all components to cart
     * @param {Map} selectedComponents - Map of selected components
     * @returns {Promise} Promise that resolves when all components are added
     */
    async addAllToCart(selectedComponents) {
        if (selectedComponents.size === 0) {
            const noComponentsText = this.languageManager.getLang('cart.no_components', 'No components to add to cart');
            return Promise.reject(new Error(noComponentsText));
        }

        if (this.isAddingToCart) {
            return Promise.reject(new Error('Already adding to cart'));
        }

        this.isAddingToCart = true;
        const $addToCartBtn = $('#papathemes-pcbuilder-add-to-cart');
        const originalText = $addToCartBtn.html();

        try {
            this._showAddingState($addToCartBtn);

            const componentsArray = Array.from(selectedComponents.values());
            this.addProgress.current = 0;
            this.addProgress.total = componentsArray.length;

            // Add products sequentially to avoid race conditions
            for (const component of componentsArray) {
                await this.addSingleProductToCart(component);
                this.addProgress.current++;
                this._updateAddingProgress($addToCartBtn);
            }

            await this._showSuccessState($addToCartBtn, originalText);
            this._updateCartQuantity();
            this._openCartDrawer();
        } catch (error) {
            this._showErrorState($addToCartBtn, originalText);
            throw error;
        } finally {
            this.isAddingToCart = false;
        }
    }

    /**
     * Add single product to cart with options
     * @param {Object} component - Component data with product and options
     * @returns {Promise} Promise that resolves when product is added
     */
    addSingleProductToCart(component) {
        return new Promise((resolve, reject) => {
            const formData = this._createFormDataForComponent(component);

            // Call BigCommerce API to add to cart
            api.cart.itemAdd(normalizeFormData(formData), (err, response) => {
                if (err || (response && response.data && response.data.error)) {
                    const errorMessage = err || response.data.error;
                    reject(new Error(errorMessage));
                    return;
                }

                resolve(response);
            });
        });
    }

    /**
     * Update cart quantity after adding products
     * Gets total cart quantity from cart content and triggers update event
     */
    _updateCartQuantity() {
        const options = {
            template: 'cart/preview',
        };

        api.cart.getContent(options, (err, response) => {
            if (err) {
                return;
            }

            // Extract total cart quantity from response
            // BigCommerce returns total quantity in data-cart-quantity attribute
            const $cartQuantity = $('[data-cart-quantity]', response);
            const quantity = $cartQuantity.data('cart-quantity') || 0;

            // Trigger cart quantity update event to update UI header
            $('body').trigger('cart-quantity-update', quantity);
        });
    }

    /**
     * Create FormData for a component to add to cart
     * @param {Object} component - Component data
     * @returns {FormData} FormData object for cart API
     * @private
     */
    _createFormDataForComponent(component) {
        const formData = new FormData();

        // Add basic product data - access correct component.product structure
        formData.append('product_id', component.product.id);
        formData.append('qty[]', component.quantity || 1);

        // Add options if available - access correct component.product.selectedOptions structure
        if (component.product.selectedOptions && component.product.selectedOptions.length > 0) {
            component.product.selectedOptions.forEach(option => {
                const attributeName = `attribute[${option.optionId}]`;

                if (option.attributeType === 'date') {
                    // Handle date attributes - split selectedValue into year/month/day
                    this._handleDateAttribute(formData, attributeName, option.selectedValue);
                } else {
                    // Handle all other types
                    formData.append(attributeName, option.selectedValue);
                }
            });
        }

        return formData;
    }

    /**
     * Handle date attribute for FormData
     * @param {FormData} formData - FormData object
     * @param {string} attributeName - Attribute name
     * @param {string} selectedValue - Date value in YYYY-MM-DD format
     * @private
     */
    _handleDateAttribute(formData, attributeName, selectedValue) {
        const dateParts = selectedValue.split('-');
        if (dateParts.length === 3) {
            formData.append(`${attributeName}[year]`, dateParts[0]);
            formData.append(`${attributeName}[month]`, dateParts[1]);
            formData.append(`${attributeName}[day]`, dateParts[2]);
        }
    }

    /**
     * Show adding state on add to cart button
     * @param {jQuery} $button - Add to cart button
     * @private
     */
    _showAddingState($button) {
        const addingToCartText = this.languageManager.getLang('actions.adding_to_cart', 'Adding to Cart...');
        $button.prop('disabled', true).html(`
            <span class="icon">
                <svg><use href="#icon-spinner"></use></svg>
            </span>
            ${addingToCartText}
        `).addClass('adding');
    }

    /**
     * Update adding progress on add to cart button
     * @param {jQuery} $button - Add to cart button
     * @private
     */
    _updateAddingProgress($button) {
        const progressPercent = Math.round((this.addProgress.current / this.addProgress.total) * 100);
        const addingProgressText = this.languageManager.getLangWithPlaceholders(
            'cart.adding',
            {
                current: this.addProgress.current,
                total: this.addProgress.total,
                percent: progressPercent,
            },
            'Adding... {current}/{total} ({percent}%)',
        );

        $button.html(`
            <span class="icon">
                <svg><use href="#icon-spinner"></use></svg>
            </span>
            ${addingProgressText}
        `);
    }

    /**
     * Show success state on add to cart button
     * @param {jQuery} $button - Add to cart button
     * @param {string} originalText - Original button text
     * @returns {Promise} Promise that resolves after success animation
     * @private
     */
    _showSuccessState($button, originalText) {
        return new Promise((resolve) => {
            const addedSuccessText = this.languageManager.getLang('cart.added_success', 'All Added to Cart!');
            $button.html(`
                <span class="icon">
                    <svg><use href="#icon-check"></use></svg>
                </span>
                ${addedSuccessText}
            `).removeClass('adding').addClass('success');

            // Reset button after cart drawer opens
            setTimeout(() => {
                $button.prop('disabled', false)
                    .html(originalText)
                    .removeClass('success');
                resolve();
            }, 1800); // 800ms for cart drawer + 1000ms delay
        });
    }

    /**
     * Show error state on add to cart button
     * @param {jQuery} $button - Add to cart button
     * @param {string} originalText - Original button text
     * @private
     */
    _showErrorState($button, originalText) {
        const errorText = this.languageManager.getLang('cart.error', 'Error - Try Again');
        $button.html(`
            <span class="icon">
                <svg><use href="#icon-error"></use></svg>
            </span>
            ${errorText}
        `).removeClass('adding').addClass('error');

        // Reset button after 3 seconds
        setTimeout(() => {
            $button.prop('disabled', false)
                .html(originalText)
                .removeClass('error');
        }, 3000);

        // Show error notification if available
        if (typeof window.showNotification === 'function') {
            const errorMessage = this.languageManager.getLang('cart.error_notification', 'Error adding products to cart. Please try again.');
            window.showNotification(errorMessage, 'error');
        }
    }

    /**
     * Open cart drawer after successful add to cart
     * @private
     */
    _openCartDrawer() {
        setTimeout(() => {
            const cartDrawer = initCartDrawer(this.context);
            cartDrawer.open();
        }, 800);
    }

    /**
     * Get current add to cart progress
     * @returns {Object} Progress object with current and total
     */
    getAddProgress() {
        return {
            current: this.addProgress.current,
            total: this.addProgress.total,
            isAdding: this.isAddingToCart,
        };
    }

    /**
     * Check if currently adding to cart
     * @returns {boolean} True if adding to cart
     */
    isCurrentlyAddingToCart() {
        return this.isAddingToCart;
    }

    /**
     * Force reset add to cart state (for error recovery)
     */
    resetAddToCartState() {
        this.isAddingToCart = false;
        this.addProgress.current = 0;
        this.addProgress.total = 0;

        const $addToCartBtn = $('#papathemes-pcbuilder-add-to-cart');
        $addToCartBtn.prop('disabled', false)
            .removeClass('adding success error');
    }
}
