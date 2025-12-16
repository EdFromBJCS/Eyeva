/**
 * Compatibility Manager - Xử lý tương thích giữa các sản phẩm PC Builder
 * Manages product compatibility checking, indicators, and state tracking
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 */

import { checkValueCompatibility, getValueIntersection } from './utils';

/**
 * Compatibility Manager class for PC Builder
 * Handles all product compatibility logic and visual indicators
 */
export default class CompatibilityManager {
    /**
     * Constructor
     * @param {Array} compatibilityFields - Array of compatibility field names
     * @param {Object} languageManager - Language manager instance
     */
    constructor(compatibilityFields, languageManager) {
        this.compatibilityFields = compatibilityFields || [];
        this.languageManager = languageManager;
    }

    /**
     * Check if field name is a compatibility field
     * @param {string} fieldName - Name of the custom field
     * @returns {boolean} True if it's a compatibility field
     */
    isCompatibilityField(fieldName) {
        if (!this.compatibilityFields) {
            return false;
        }
        return this.compatibilityFields.includes(fieldName);
    }

    /**
     * Check product compatibility with current PC Builder state
     * @param {Array} productCustomFields - Custom fields của product
     * @param {Map} selectedComponents - Current selected components
     * @param {string} currentComponentType - Component type đang được check (để exclude khỏi state)
     * @returns {Object} Compatibility result với conflicts, matches, etc.
     */
    checkProductCompatibility(productCustomFields, selectedComponents, currentComponentType = null) {
        const compatibility = {
            isCompatible: true,
            conflicts: [],
            matches: [],
            hasCompatibilityFields: false,
        };

        // Filter chỉ compatibility fields
        const productCompatFields = productCustomFields.filter(field =>
            this.isCompatibilityField(field.name));

        if (productCompatFields.length === 0) {
            // No compatibility fields = compatible with everything
            return compatibility;
        }

        compatibility.hasCompatibilityFields = true;

        // Get current PC Builder compatibility state, EXCLUDING current component type
        const currentState = this.getCurrentCompatibilityState(selectedComponents, currentComponentType);

        if (currentState.length === 0) {
            // No components selected yet (or only current component) = compatible
            return compatibility;
        }

        // Check compatibility với từng field
        for (const productField of productCompatFields) {
            const fieldName = productField.name;
            const fieldValue = productField.value;

            for (const stateField of currentState) {
                if (stateField.name === fieldName) {
                    const isValueMatch = checkValueCompatibility(fieldValue, stateField.value);

                    if (isValueMatch) {
                        compatibility.matches.push({
                            productField: fieldName,
                            productValue: fieldValue,
                            stateField: stateField.name,
                            stateValue: stateField.value,
                        });
                    } else {
                        compatibility.conflicts.push({
                            productField: fieldName,
                            productValue: fieldValue,
                            stateField: stateField.name,
                            stateValue: stateField.value,
                            reason: this.languageManager.getLang('errors.value_mismatch', 'Value mismatch'),
                        });
                        compatibility.isCompatible = false;
                    }
                }
            }
        }

        return compatibility;
    }

    /**
     * Get current compatibility state từ selected components
     * @param {Map} selectedComponents - Selected components
     * @param {string} excludeComponentType - Component type để exclude khỏi state (optional)
     * @returns {Array} Array of compatibility fields from selected components
     */
    getCurrentCompatibilityState(selectedComponents, excludeComponentType = null) {
        const currentState = [];

        // Loop through selected components để build compatibility state
        selectedComponents.forEach((component, componentType) => {
            // Skip excluded component type (để tránh self-conflict khi replacing)
            if (excludeComponentType && componentType === excludeComponentType) {
                return;
            }

            if (component.product && component.product.customFields) {
                component.product.customFields.forEach(field => {
                    if (this.isCompatibilityField(field.name)) {
                        // Check if field already exists in state
                        const existingIndex = currentState.findIndex(stateField => stateField.name === field.name);

                        if (existingIndex >= 0) {
                            // Use XOR intersection logic
                            const intersectionValue = getValueIntersection(currentState[existingIndex].value, field.value);

                            if (intersectionValue) {
                                currentState[existingIndex] = {
                                    ...currentState[existingIndex],
                                    value: intersectionValue,
                                };
                            } else {
                                // Remove field if no intersection
                                currentState.splice(existingIndex, 1);
                            }
                        } else {
                            currentState.push({
                                name: field.name,
                                value: field.value,
                                componentType: component.componentType,
                            });
                        }
                    }
                });
            }
        });

        return currentState;
    }

    /**
     * Generate compatibility indicator cho product (chỉ hiển thị incompatible)
     * @param {Object} compatibility - Compatibility result từ checkProductCompatibility
     * @returns {string} HTML string for compatibility indicator hoặc empty string
     */
    getCompatibilityIndicator(compatibility) {
        // Chỉ hiển thị badge cho incompatible products
        if (!compatibility.isCompatible && compatibility.hasCompatibilityFields) {
            const incompatibleText = this.languageManager.getLang('compatibility.incompatible', 'Incompatible');
            return `
                <div class="papathemes-pcbuilder-compatibility-indicator papathemes-pcbuilder-compatibility-indicator--incompatible">
                    <span class="papathemes-pcbuilder-compatibility-icon">⚠️</span>
                    <span class="papathemes-pcbuilder-compatibility-text">${incompatibleText}</span>
                </div>
            `;
        }

        // Không hiển thị badge cho universal (no compatibility fields) hoặc compatible products
        return '';
    }

    /**
     * Add compatibility indicator to selected component row
     * @param {string} componentType - Type of component
     * @param {Object} product - Product object with custom fields
     * @param {Map} selectedComponents - Current selected components
     */
    addCompatibilityIndicatorToComponent(componentType, product, selectedComponents) {
        const $componentRow = $(`.papathemes-pcbuilder-component-row[data-category="${componentType}"]`);
        const $productDetails = $componentRow.find('.papathemes-pcbuilder-product-details');

        if (!$productDetails.length) {
            console.warn('⚠️ Product details not found for component:', componentType); // eslint-disable-line no-console
            return;
        }

        // Remove existing compatibility indicator
        $productDetails.find('.papathemes-pcbuilder-compatibility-indicator').remove();

        // Check compatibility với current build state (exclude current component type)
        const compatibility = this.checkProductCompatibility(product.customFields || [], selectedComponents, componentType);

        // Generate indicator HTML nếu có compatibility fields
        if (compatibility.hasCompatibilityFields) {
            const indicatorHtml = this.getCompatibilityIndicator(compatibility);

            // Add indicator after price trong product details
            const $priceElement = $productDetails.find('.papathemes-pcbuilder-selected-price');
            if (indicatorHtml && $priceElement.length) {
                $priceElement.after(indicatorHtml);
            }
        }
    }

    /**
     * Add compatibility indicators to product cards trong modal
     * @param {jQuery} $container - Container với product cards
     * @param {string} currentComponentType - Component type đang được check (để exclude khỏi state)
     * @param {Map} selectedComponents - Current selected components
     * @param {Function} loadProductCustomFields - Function to load custom fields
     * @param {Function} extractProductInfoFromCard - Function to extract product info
     */
    async addCompatibilityIndicatorsToProductCards($container, currentComponentType, selectedComponents, loadProductCustomFields, extractProductInfoFromCard) {
        const $productCards = $container.find('.card');
        if ($productCards.length === 0) {
            return;
        }

        // Đảm bảo custom fields đã được load
        await loadProductCustomFields($productCards);

        $productCards.each((index, card) => {
            const $card = $(card);

            try {
                // Extract product information từ card
                const productInfo = extractProductInfoFromCard($card);
                if (!productInfo) {
                    console.warn(`⚠️ Could not extract product info from card ${index + 1}`); // eslint-disable-line no-console
                    return;
                }

                // Check compatibility (exclude current component type để tránh self-conflict)
                const compatibility = this.checkProductCompatibility(productInfo.customFields || [], selectedComponents, currentComponentType);

                // Generate và add compatibility indicator
                const indicator = this.getCompatibilityIndicator(compatibility);

                if (indicator) {
                    // Remove existing indicator nếu có
                    $card.find('.papathemes-pcbuilder-compatibility-indicator').remove();

                    // Add indicator bên dưới Add to Build button
                    const $addToBuildButton = $card.find('.papathemes-pcbuilder-add-to-build');
                    if ($addToBuildButton.length > 0) {
                        $addToBuildButton.after(indicator);
                    } else {
                        // Fallback: add to card-actions or card-footer
                        const $cardActions = $card.find('.card-actions, .card-footer').last();
                        if ($cardActions.length > 0) {
                            $cardActions.append(indicator);
                        } else {
                            // Final fallback: append to card
                            $card.append(indicator);
                        }
                    }
                }
            } catch (error) {
                console.error(`❌ Error processing compatibility for card ${index + 1}:`, error); // eslint-disable-line no-console
            }
        });
    }

    /**
     * Update compatibility indicators for all selected components
     * Called when build state changes để refresh indicators
     * @param {Map} selectedComponents - Current selected components
     */
    updateAllCompatibilityIndicators(selectedComponents) {
        // Loop through all selected components
        for (const [componentType, component] of selectedComponents) {
            if (component.product && component.product.customFields) {
                this.addCompatibilityIndicatorToComponent(componentType, component.product, selectedComponents);
            }
        }
    }

    /**
     * Clear all compatibility indicators from UI
     */
    clearAllCompatibilityIndicators() {
        $('.papathemes-pcbuilder-compatibility-indicator').remove();
    }

    /**
     * Get compatibility statistics for current build
     * @param {Map} selectedComponents - Current selected components
     * @returns {Object} Compatibility statistics
     */
    getCompatibilityStats(selectedComponents) {
        const stats = {
            totalComponents: selectedComponents.size,
            compatibleCount: 0,
            incompatibleCount: 0,
            hasCompatibilityFields: false,
            overallCompatible: true,
        };

        selectedComponents.forEach((component) => {
            if (component.product && component.product.customFields) {
                const compatFields = component.product.customFields.filter(field =>
                    this.isCompatibilityField(field.name));

                if (compatFields.length > 0) {
                    stats.hasCompatibilityFields = true;
                    stats.compatibleCount++;
                } else {
                    stats.incompatibleCount++;
                }
            }
        });

        return stats;
    }
}
