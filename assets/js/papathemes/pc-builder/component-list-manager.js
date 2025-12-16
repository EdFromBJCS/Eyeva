/**
 * Component List Manager - Quản lý hiển thị và xử lý danh sách components
 * Handles component row display, selection state, quantity controls, and summary updates
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 */

/**
 * Component List Manager class for PC Builder
 * Manages all component list display and interaction functionality
 */
export default class ComponentListManager {
    /**
     * Constructor
     * @param {Object} context - BigCommerce context
     * @param {Object} languageManager - Language manager instance
     * @param {Object} compatibilityManager - Compatibility manager instance
     * @param {Object} buildSummaryManager - Build summary manager instance
     */
    constructor(context, languageManager, compatibilityManager, buildSummaryManager) {
        this.context = context;
        this.languageManager = languageManager;
        this.compatibilityManager = compatibilityManager;
        this.buildSummaryManager = buildSummaryManager;

        // References will be set by bindEvents()
        this.modalManager = null;
        this.selectedComponents = null;
        this.actionButtonManager = null;
    }

    /**
     * Bind component-related event handlers
     * @param {Object} modalManager - Modal manager instance
     * @param {Map} selectedComponents - Selected components map
     * @param {Object} actionButtonManager - Action button manager instance
     * @param {Object} callbacks - Callback functions
     */
    bindEvents(modalManager, selectedComponents, actionButtonManager = null, callbacks = {}) {
        // Store references for use in event handlers
        this.modalManager = modalManager;
        this.selectedComponents = selectedComponents;
        this.actionButtonManager = actionButtonManager;
        this.callbacks = callbacks;

        // Event handler cho việc chọn component
        $(document).on('click', '.papathemes-pcbuilder-select-component', (event) => {
            this.onComponentSelect(
                event,
                this.modalManager,
                this.selectedComponents,
                (componentType, product) => this.addComponentToBuild(componentType, product, this.selectedComponents),
            );
        });

        // Event handler cho việc edit/remove component với specific PC Builder selectors
        $(document).on('click', '.papathemes-pcbuilder-edit-component', (event) => {
            this.onComponentEdit(
                event,
                this.modalManager,
                this.selectedComponents,
                (componentType, product) => this.addComponentToBuild(componentType, product, this.selectedComponents),
            );
        });

        $(document).on('click', '.papathemes-pcbuilder-remove-component', (event) => {
            this.onComponentRemove(event, this.selectedComponents);
        });

        // Event handler cho quantity change
        $(document).on('change', '.papathemes-pcbuilder-quantity-input', async (event) => {
            await this.onQuantityChange(
                event,
                this.selectedComponents,
                async () => {
                    try {
                        await this.buildSummaryManager.updateSummary(this.selectedComponents);
                        if (this.callbacks && this.callbacks.onComponentChanged) {
                            await this.callbacks.onComponentChanged();
                        }
                    } catch (error) {
                        console.error('Error in quantity change callback:', error); // eslint-disable-line no-console
                    }
                },
            );
        });

        // Event handlers cho quantity increase/decrease buttons
        $(document).on('click', '.papathemes-pcbuilder-qty-increase', async (event) => {
            event.preventDefault();
            event.stopPropagation(); // Prevent event bubbling
            const $input = $(event.currentTarget).siblings('.papathemes-pcbuilder-quantity-input');
            if ($input.length) {
                const currentValue = parseInt($input.val(), 10) || 1;
                const maxValue = parseInt($input.data('quantity-max'), 10) || parseInt($input.attr('max'), 10) || 999;
                if (currentValue < maxValue) {
                    $input.val(currentValue + 1);

                    // Delay trigger to avoid immediate re-triggering
                    setTimeout(() => {
                        $input.trigger('change');
                    }, 10);

                    // Visual feedback
                    $input.addClass('papathemes-pcbuilder-quantity-changed');
                    setTimeout(() => {
                        $input.removeClass('papathemes-pcbuilder-quantity-changed');
                    }, 300);
                }
            }
        });

        $(document).on('click', '.papathemes-pcbuilder-qty-decrease', async (event) => {
            event.preventDefault();
            event.stopPropagation(); // Prevent event bubbling
            const $input = $(event.currentTarget).siblings('.papathemes-pcbuilder-quantity-input');
            if ($input.length) {
                const currentValue = parseInt($input.val(), 10) || 1;
                const minValue = parseInt($input.data('quantity-min'), 10) || parseInt($input.attr('min'), 10) || 1;
                if (currentValue > minValue) {
                    $input.val(currentValue - 1);

                    // Delay trigger to avoid immediate re-triggering
                    setTimeout(() => {
                        $input.trigger('change');
                    }, 10);

                    // Visual feedback
                    $input.addClass('papathemes-pcbuilder-quantity-changed');
                    setTimeout(() => {
                        $input.removeClass('papathemes-pcbuilder-quantity-changed');
                    }, 300);
                }
            }
        });

        // Note: More toggle event is now handled by ActionButtonManager
    }

    /**
     * Unbind component-related event handlers
     */
    unbindEvents() {
        $(document).off('click', '.papathemes-pcbuilder-select-component');
        $(document).off('click', '.papathemes-pcbuilder-edit-component');
        $(document).off('click', '.papathemes-pcbuilder-remove-component');
        $(document).off('change', '.papathemes-pcbuilder-quantity-input');
        $(document).off('click', '.papathemes-pcbuilder-qty-increase');
        $(document).off('click', '.papathemes-pcbuilder-qty-decrease');

        // Clear references
        this.modalManager = null;
        this.selectedComponents = null;
        this.actionButtonManager = null;
    }

    /**
     * Cập nhật hiển thị component row khi có product được chọn
     * @param {string} componentType - Loại component
     * @param {Object} product - Thông tin product
     */
    updateComponentRow(componentType, product, selectedComponents = null) {
        const $componentRow = $(`.papathemes-pcbuilder-component-row[data-category="${componentType}"]`);

        if (!$componentRow.length) {
            console.warn('Component row not found for:', componentType); // eslint-disable-line no-console
            return;
        }

        // Hide no-selection text và show selected-product-info với flex layout
        $componentRow.find('.papathemes-pcbuilder-no-selection').hide();
        $componentRow.find('.papathemes-pcbuilder-selected-product-info').css('display', 'flex');

        // Update product thumbnail với image và fallback
        const $thumbnail = $componentRow.find('.papathemes-pcbuilder-product-thumbnail');
        if (product.image) {
            // Optimize image size cho thumbnail (80x80 hoặc 100x100)
            let optimizedImageUrl = product.image;
            if (optimizedImageUrl.includes('/stencil/')) {
                // Replace size để có thumbnail nhỏ hơn
                optimizedImageUrl = optimizedImageUrl.replace(/\/stencil\/\d+x\d+\//, '/stencil/100x100/');
            }

            const thumbnailImg = `
                <img src="${optimizedImageUrl}"
                     alt="${product.name}"
                     title="${product.name}"
                     class="papathemes-pcbuilder-thumbnail-img"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="papathemes-pcbuilder-thumbnail-fallback" style="display: none;">
                    <i class="icon" aria-hidden="true">
                        <svg><use href="#icon-image"></use></svg>
                    </i>
                </div>
            `;

            $thumbnail.html(thumbnailImg);
        } else {
            // Fallback nếu không có image
            $thumbnail.html(`
                <div class="papathemes-pcbuilder-thumbnail-fallback">
                    <i class="icon" aria-hidden="true">
                        <svg><use href="#icon-image"></use></svg>
                    </i>
                </div>
            `);
        }

        // Update selected product info
        $componentRow.find('.papathemes-pcbuilder-selected-product').text(product.name);

        // Format price với proper currency settings using BuildSummaryManager
        this.buildSummaryManager.formatPrice(product.price).then(formattedPrice => {
            $componentRow.find('.papathemes-pcbuilder-selected-price').text(formattedPrice);
        }).catch(() => {
            // Fallback nếu async format fails
            $componentRow.find('.papathemes-pcbuilder-selected-price').text('$0.00');
        });

        // Hiển thị selected options nếu có
        if (product.selectedOptions && product.selectedOptions.length > 0) {
            this.displaySelectedOptions($componentRow, product.selectedOptions);
        }

        // Create enhanced component controls theo cart pattern với accessibility
        // Sử dụng purchase quantities từ product data nếu có
        const minQty = product.minPurchaseQuantity || 1; // From GraphQL or default
        const maxQty = product.maxPurchaseQuantity || null; // From GraphQL or no limit

        // Get actual quantity from selectedComponents if available, otherwise use minQty
        let actualQty = minQty;
        const componentsMap = selectedComponents || this.selectedComponents;
        if (componentsMap && componentsMap.has(componentType)) {
            const componentData = componentsMap.get(componentType);
            actualQty = componentData.quantity || product.quantity || minQty;
        } else if (product.quantity) {
            actualQty = product.quantity;
        }

        // Get language strings for accessibility
        const editComponentText = this.languageManager.getLang('component.edit_component', 'Edit component');
        const decreaseQuantityText = this.languageManager.getLang('component.decrease_quantity', 'Decrease quantity');
        const increaseQuantityText = this.languageManager.getLang('component.increase_quantity', 'Increase quantity');
        const removeComponentText = this.languageManager.getLang('component.remove_component', 'Remove component');

        const controlsHtml = `
            <div class="papathemes-pcbuilder-component-controls">
                <button class="button button--outline button--icon papathemes-pcbuilder-edit-component"
                        data-component="${componentType}"
                        data-action="edit"
                        aria-label="Edit ${product.name} component">
                    <span class="is-srOnly">${editComponentText}</span>
                    <i class="icon" aria-hidden="true"><svg><use href="#icon-pen"/></svg></i>
                </button>

                <div class="form-increment papathemes-pcbuilder-quantity-control">
                    <button class="button button--icon papathemes-pcbuilder-qty-decrease"
                            data-component="${componentType}"
                            aria-label="Decrease ${product.name} quantity">
                        <span class="is-srOnly">${decreaseQuantityText}</span>
                        <i class="icon" aria-hidden="true"><svg><use href="#icon-minus"/></svg></i>
                    </button>
                    <input type="tel"
                           class="form-input form-input--incrementTotal papathemes-pcbuilder-quantity-input"
                           value="${actualQty}"
                           min="${minQty}"
                           ${maxQty ? `max="${maxQty}"` : ''}
                           data-quantity-min="${minQty}"
                           ${maxQty ? `data-quantity-max="${maxQty}"` : ''}
                           pattern="[0-9]*"
                           data-component="${componentType}"
                           aria-label="${product.name} quantity"
                           aria-live="polite">
                    <button class="button button--icon papathemes-pcbuilder-qty-increase"
                            data-component="${componentType}"
                            aria-label="Increase ${product.name} quantity">
                        <span class="is-srOnly">${increaseQuantityText}</span>
                        <i class="icon" aria-hidden="true"><svg><use href="#icon-plus"/></svg></i>
                    </button>
                </div>

                <button class="button button--outline button--icon papathemes-pcbuilder-remove-component"
                        data-component="${componentType}"
                        data-action="remove"
                        aria-label="Remove ${product.name} component">
                    <span class="is-srOnly">${removeComponentText}</span>
                    <i class="icon" aria-hidden="true"><svg><use href="#icon-trash"/></svg></i>
                </button>
            </div>
        `;

        // Replace existing controls or update
        const $existingControls = $componentRow.find('.papathemes-pcbuilder-component-controls');
        if ($existingControls.length) {
            $existingControls.replaceWith(controlsHtml);
        } else {
            $componentRow.find('.papathemes-pcbuilder-component-actions').append(controlsHtml);
        }

        // Show/hide appropriate buttons
        $componentRow.find('.papathemes-pcbuilder-select-component').hide();
        $componentRow.find('.papathemes-pcbuilder-component-controls').show();

        // Add selected class
        $componentRow.addClass('papathemes-pcbuilder-selected');

        // Bind enhanced quantity controls
        this.bindQuantityControls(componentType);
    }

    /**
     * Hiển thị selected options trong component row
     * @param {jQuery} $componentRow - Component row element
     * @param {Array} selectedOptions - Selected options
     */
    displaySelectedOptions($componentRow, selectedOptions) {
        // Tạo container cho selected options
        const $productDetails = $componentRow.find('.papathemes-pcbuilder-product-details');

        // Remove existing options display
        $productDetails.find('.papathemes-pcbuilder-selected-options').remove();

        // Create options HTML với format đẹp hơn
        const optionsHtml = selectedOptions.map(option => `
            <span class="papathemes-pcbuilder-selected-option">
                <span class="papathemes-pcbuilder-option-label">${option.fieldLabel}:</span>
                <span class="papathemes-pcbuilder-option-value">${option.selectedText}</span>
            </span>
        `).join('');

        // Add options display after price với styling đẹp
        $productDetails.find('.papathemes-pcbuilder-selected-price').after(`
            <div class="papathemes-pcbuilder-selected-options">
                ${optionsHtml}
            </div>
        `);
    }

    /**
     * Bind enhanced quantity controls (plus/minus buttons)
     * NOTE: Events are now handled globally in bindEvents() to avoid double binding
     * This method is kept for compatibility but doesn't bind local events anymore
     * @param {string} componentType - Loại component
     */
    bindQuantityControls(componentType) {
        // Events are now handled globally in bindEvents() method
        // No local binding needed to avoid conflict
        const $componentRow = $(`.papathemes-pcbuilder-component-row[data-category="${componentType}"]`);

        // Just add visual feedback class for quantity controls
        $componentRow.find('.papathemes-pcbuilder-quantity-control').addClass('quantity-control-active');
    }

    /**
     * Reset component row về trạng thái chưa chọn
     * @param {string} componentType - Loại component
     */
    resetComponentRow(componentType) {
        const $componentRow = $(`.papathemes-pcbuilder-component-row[data-category="${componentType}"]`);
        if (!$componentRow.length) {
            console.warn('Component row not found for reset:', componentType); // eslint-disable-line no-console
            return;
        }

        // Show no-selection text và hide selected-product-info
        $componentRow.find('.papathemes-pcbuilder-no-selection').show();
        $componentRow.find('.papathemes-pcbuilder-selected-product-info').hide();

        // Show select button và hide component controls
        $componentRow.find('.papathemes-pcbuilder-select-component').show();
        $componentRow.find('.papathemes-pcbuilder-component-controls').remove();

        // Remove selected class
        $componentRow.removeClass('papathemes-pcbuilder-selected');
    }

    /**
     * Xử lý thay đổi quantity với validation theo min/max
     * @param {Event} event - Change event
     * @param {Map} selectedComponents - Selected components map
     * @param {Function} updateSummaryCallback - Callback để update summary
     */
    async onQuantityChange(event, selectedComponents, updateSummaryCallback) {
        const $input = $(event.currentTarget);
        const componentType = String($input.data('component')); // Convert to string to match Map keys
        let newQuantity = parseInt($input.val(), 10) || 1;

        // Validate quantity theo min/max từ product data
        const minQuantity = parseInt($input.data('quantity-min'), 10) || 1;
        const maxQuantity = parseInt($input.data('quantity-max'), 10) || 10;

        // Clamp value trong phạm vi min-max
        newQuantity = Math.max(minQuantity, Math.min(newQuantity, maxQuantity));

        // Update input nếu value đã thay đổi
        if (newQuantity !== parseInt($input.val(), 10)) {
            $input.val(newQuantity);
        }


        // Try both string and number keys to handle inconsistency
        let actualKey = componentType;
        let componentData = null;

        if (selectedComponents.has(componentType)) {
            actualKey = componentType;
            componentData = selectedComponents.get(componentType);
        } else if (selectedComponents.has(Number(componentType))) {
            actualKey = Number(componentType);
            componentData = selectedComponents.get(actualKey);
        } else if (selectedComponents.has(String(componentType))) {
            actualKey = String(componentType);
            componentData = selectedComponents.get(actualKey);
        }

        if (componentData) {
            // Update quantity BEFORE calling the callback
            // eslint-disable-next-line no-param-reassign
            componentData.quantity = newQuantity;

            // 🔧 FIX: Also update product quantity để maintain consistency
            if (componentData.product) {
                // eslint-disable-next-line no-param-reassign
                componentData.product.quantity = newQuantity;
            }

            if (updateSummaryCallback) {
                await updateSummaryCallback();
            }
        } else {
            console.warn('Component not found in selectedComponents:', componentType); // eslint-disable-line no-console
        }
    }

    /**
     * Clear tất cả component rows về trạng thái chưa chọn
     */
    clearAllComponentRows() {
        $('.papathemes-pcbuilder-component-row').each((index, row) => {
            const componentType = $(row).data('category');
            this.resetComponentRow(componentType);
        });
    }

    /**
     * Add compatibility indicator to selected component row
     * @param {string} componentType - Type of component
     * @param {Object} product - Product object with custom fields
     * @param {Map} selectedComponents - Current selected components
     */
    addCompatibilityIndicatorToComponent(componentType, product, selectedComponents) {
        this.compatibilityManager.addCompatibilityIndicatorToComponent(componentType, product, selectedComponents);
    }

    /**
     * Update compatibility indicators for all selected components
     * @param {Map} selectedComponents - Current selected components
     */
    updateAllCompatibilityIndicators(selectedComponents) {
        this.compatibilityManager.updateAllCompatibilityIndicators(selectedComponents);
    }

    /**
     * Clear all compatibility indicators from UI
     */
    clearAllCompatibilityIndicators() {
        this.compatibilityManager.clearAllCompatibilityIndicators();
    }

    /**
     * Xử lý khi click chọn component
     * @param {Event} event - Click event
     * @param {Object} modalManager - Modal manager instance
     * @param {Map} selectedComponents - Selected components map
     * @param {Function} addComponentCallback - Callback to add component to build
     */
    onComponentSelect(event, modalManager, selectedComponents, addComponentCallback) {
        event.preventDefault();

        const $button = $(event.currentTarget);
        const $componentRow = $button.closest('.papathemes-pcbuilder-component-row');
        const categoryId = $button.data('category-id');
        const categoryUrl = $componentRow.data('category-url');
        const componentType = $button.data('component');
        const componentName = $componentRow.find('.papathemes-pcbuilder-component-name').text().trim();

        if (!categoryId || !categoryUrl) {
            return;
        }

        // Hiển thị loading state
        $button.prop('disabled', true).text(this.languageManager.getLang('loading', 'Loading...'));

        // Mở modal với category products
        modalManager.openComponentModal(categoryUrl, componentType, componentName, selectedComponents, addComponentCallback)
            .finally(() => {
                $button.prop('disabled', false).text(this.languageManager.getLang('component.select', 'Select'));
            });
    }

    /**
     * Thêm component vào build
     * @param {string} componentType - Loại component
     * @param {Object} product - Thông tin product
     * @param {Map} selectedComponents - Selected components map
     */
    async addComponentToBuild(componentType, product, selectedComponents) {
        // Lưu component vào Map với structure that getCurrentCompatibilityState() expects
        const initialQuantity = product.minPurchaseQuantity || 1;
        selectedComponents.set(componentType, {
            componentType,
            quantity: initialQuantity,
            product: {
                ...product,
                quantity: initialQuantity,
            },
        });

        // Update UI using ComponentListManager methods và BuildSummaryManager
        this.updateComponentRow(componentType, product, selectedComponents);
        await this.buildSummaryManager.updateSummary(selectedComponents);
        this.buildSummaryManager.updateProgress(selectedComponents);

        // Update action button states if available
        if (this.actionButtonManager) {
            this.actionButtonManager.updateButtonStates(selectedComponents);
        }

        // Update compatibility indicators for all selected components
        this.updateAllCompatibilityIndicators(selectedComponents);

        // Call callback if available để cập nhật configuration
        if (this.callbacks && this.callbacks.onComponentChanged) {
            await this.callbacks.onComponentChanged();
        }
    }

    /**
     * Xử lý khi click edit component
     * @param {Event} event - Click event
     * @param {Object} modalManager - Modal manager instance
     * @param {Map} selectedComponents - Selected components map
     * @param {Function} addComponentCallback - Callback to add component to build
     */
    onComponentEdit(event, modalManager, selectedComponents, addComponentCallback) {
        event.preventDefault();

        const componentType = $(event.currentTarget).data('component');
        const $componentRow = $(`.papathemes-pcbuilder-component-row[data-category="${componentType}"]`);
        const categoryUrl = $componentRow.data('category-url');
        const componentName = $componentRow.find('.papathemes-pcbuilder-component-name').text().trim();

        // Mở modal để chọn component khác
        modalManager.openComponentModal(categoryUrl, componentType, componentName, selectedComponents, addComponentCallback);
    }

    /**
     * Xử lý khi click remove component
     * @param {Event} event - Click event
     * @param {Map} selectedComponents - Selected components map
     */
    async onComponentRemove(event, selectedComponents) {
        event.preventDefault();

        const componentType = $(event.currentTarget).data('component');

        // Try to find and remove component with flexible key matching
        let removed = false;
        if (selectedComponents.has(componentType)) {
            selectedComponents.delete(componentType);
            removed = true;
        } else if (selectedComponents.has(Number(componentType))) {
            selectedComponents.delete(Number(componentType));
            removed = true;
        } else if (selectedComponents.has(String(componentType))) {
            selectedComponents.delete(String(componentType));
            removed = true;
        }

        if (!removed) {
            console.warn('Component not found for removal:', componentType); // eslint-disable-line no-console
            return;
        }

        // Reset component row using ComponentListManager
        this.resetComponentRow(componentType);

        // Update UI using BuildSummaryManager
        await this.buildSummaryManager.updateSummary(selectedComponents);
        this.buildSummaryManager.updateProgress(selectedComponents);

        // Update action button states if available
        if (this.actionButtonManager) {
            this.actionButtonManager.updateButtonStates(selectedComponents);
        }

        // Update compatibility indicators for remaining components
        this.updateAllCompatibilityIndicators(selectedComponents);

        // Call callback if available để cập nhật configuration
        if (this.callbacks && this.callbacks.onComponentChanged) {
            await this.callbacks.onComponentChanged();
        }
    }

    /**
     * Load single component from build data
     * @param {Object} componentData - Component data to load
     * @param {Map} selectedComponents - Selected components map
     */
    async loadSingleComponent(componentData, selectedComponents) {
        try {
            const { componentType, product, selectedOptions } = componentData;

            // Validate component data
            if (!componentType || !product || !product.id) {
                throw new Error('Invalid component data');
            }

            // Find corresponding component row in current build
            const $componentRow = $(`.papathemes-pcbuilder-component-row[data-category="${componentType}"]`);
            if (!$componentRow.length) {
                console.warn(`Component row not found for type: ${componentType}`); // eslint-disable-line no-console
                return;
            }

            // Prepare product object for adding to build
            const productToAdd = {
                id: product.id,
                name: product.name,
                price: product.price || 0,
                image: product.image || '',
                url: product.url || '',
                quantity: product.quantity || 1,
                minPurchaseQuantity: product.minPurchaseQuantity || 1,
                maxPurchaseQuantity: product.maxPurchaseQuantity || 999,
                selectedOptions: selectedOptions || [],
                componentType,
            };

            // Add component to build
            await this.addComponentToBuild(componentType, productToAdd, selectedComponents);
        } catch (error) {
            console.error(`Failed to load component ${componentData.componentType}:`, error); // eslint-disable-line no-console
            throw error; // Re-throw to be handled by caller
        }
    }
}
