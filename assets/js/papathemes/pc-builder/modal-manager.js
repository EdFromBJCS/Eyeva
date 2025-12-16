/**
 * Modal Manager - Xử lý hiển thị modal và các chức năng bên trong modal
 * Manages modal display, product selection, faceted search integration, and quick view
 *
 * COPYRIGHT NOTICE:
 * ================
 * This code is proprietary and confidential to PapaThemes.
 * Copyright (c) 2024 PapaThemes. All rights reserved.
 */

import Modal from '../modal';
import FacetedSearch from '../eyeva/faceted-search';
import { api } from '@bigcommerce/stencil-utils';
import { defaultModal } from '../../theme/global/modal';
import ProductDetails from '../eyeva/product-details';
import urlUtils from '../../theme/common/utils/url-utils';
import collapsibleFactory from '../../theme/common/collapsible';
import { extractPriceFromText } from './utils';

/**
 * Modal Manager class for PC Builder
 * Handles all modal-related functionality including product selection and quick view
 */
export default class ModalManager {
    /**
     * Constructor
     * @param {Object} context - BigCommerce context
     * @param {Object} languageManager - Language manager instance
     * @param {Object} compatibilityManager - Compatibility manager instance
     */
    constructor(context, languageManager, compatibilityManager) {
        this.context = context;
        this.languageManager = languageManager;
        this.compatibilityManager = compatibilityManager;

        // Modal và FacetedSearch references
        this.currentModal = null;
        this.modalFacetedSearch = null;
        this.modalCategoryUrl = null;
        this.currentModalComponentType = null;

        // Quick view references
        this.quickViewModal = null;
        this.quickViewComponentType = null;
        this.quickViewProduct = null;
        this.quickViewProductDetails = null;

        // URL utils backup for modal
        this.originalUrlUtils = null;

        // Flags để tránh multiple updates
        this.isUpdatingFacetedSearch = false;
        this.isProcessingCallback = false;

        // Auto-bind modal events
        this.bindEvents();
    }

    /**
     * Mở modal chọn component với proper cleanup
     * @param {string} categoryUrl - URL của category
     * @param {string} componentType - Loại component
     * @param {string} componentName - Tên component
     * @param {Map} selectedComponents - Current selected components
     * @param {Function} addComponentToBuildCallback - Callback để add component to build
     * @returns {Promise} Promise that resolves when modal is opened
     */
    async openComponentModal(categoryUrl, componentType, componentName, selectedComponents, addComponentToBuildCallback) {
        try {
            // Close existing modal trước khi tạo modal mới để avoid conflicts
            this.closeModal();

            // Store category URL và component type để sử dụng trong modal
            this.modalCategoryUrl = categoryUrl;
            this.currentModalComponentType = componentType;
            this.selectedComponents = selectedComponents;
            this.addComponentToBuildCallback = addComponentToBuildCallback;

            // Tạo modal instance với proper configuration
            this.currentModal = new Modal({
                overlayExtraClass: 'papathemes-pcbuilder-modal-overlay',
                modalExtraClass: 'papathemes-pcbuilder-modal-content',
                modalTitle: `${this.languageManager.getLang('component.select', 'Select')} ${componentName}`,
                closeOnBackgroundClick: true,
                closeOnEsc: true,
                stackable: true,
            });

            // Mở modal với loading content
            this.currentModal.openModal(this.getLoadingContent(), true);

            // Load category data bằng BigCommerce Stencil API
            const categoryData = await this.loadCategoryData(categoryUrl);

            // Update modal content với category data
            const renderedContent = this.renderCategoryContent(categoryData, componentType);
            this.currentModal.updateContent(renderedContent);

            // Add compatibility indicators to initial product cards
            const $modalContent = $('.papathemes-pcbuilder-modal-content');
            const $productContainer = $modalContent.find('.papathemes-pcbuilder-product-listing');
            if ($productContainer.length) {
                this.compatibilityManager.addCompatibilityIndicatorsToProductCards(
                    $productContainer,
                    componentType,
                    selectedComponents,
                    this.loadProductCustomFields.bind(this),
                    this.extractProductInfoFromCard.bind(this),
                ).catch(error => {
                    console.error('❌ Error adding initial compatibility indicators:', error); // eslint-disable-line no-console
                });
            }

            // Initialize faceted search trong modal với proper cleanup
            this.initModalFacetedSearch();

            // Bind product selection events
            this.bindProductSelectionEvents();
        } catch (error) {
            console.error('❌ Error opening component modal:', error); // eslint-disable-line no-console
            this.closeModal(); // Use proper cleanup method
        }
    }

    /**
     * Load category data sử dụng BigCommerce Stencil API
     * @param {string} categoryUrl - URL của category
     * @returns {Promise<Object>} Object với productListing và sidebar
     */
    loadCategoryData(categoryUrl) {
        return new Promise((resolve, reject) => {
            const requestOptions = {
                config: {
                    category: {
                        products: {
                            limit: this.context.categoryProductsPerPage || 12,
                        },
                    },
                },
                template: {
                    productListing: 'category/product-listing',
                    sidebar: 'category/sidebar',
                },
                showMore: 'category/show-more',
            };

            api.getPage(categoryUrl, requestOptions, (err, response) => {
                if (err) {
                    console.error('❌ API Error loading category data:', err); // eslint-disable-line no-console
                    reject(err);
                    return;
                }

                resolve({
                    productListing: response.productListing || '',
                    sidebar: response.sidebar || '',
                });
            });
        });
    }

    /**
     * Initialize faceted search trong modal với duplicate prevention
     */
    initModalFacetedSearch() {
        // Guard: Nếu đã có FacetedSearch active, destroy nó trước
        if (this.modalFacetedSearch) {
            this.destroyModalFacetedSearch();
        }

        const $modal = $('.papathemes-pcbuilder-modal-content');
        const $productContainer = $modal.find('.papathemes-pcbuilder-product-listing');
        const $sidebarContainer = $modal.find('.papathemes-pcbuilder-product-sidebar');

        if (!$productContainer.length || !$sidebarContainer.length) {
            console.warn('⚠️ Product container or sidebar not found in modal'); // eslint-disable-line no-console
            return;
        }

        // Store original urlUtils methods nếu chưa store
        if (!this.originalUrlUtils) {
            this.originalUrlUtils = {
                getUrl: urlUtils.getUrl,
                goToUrl: urlUtils.goToUrl,
            };
        }

        // Override getUrl để return modal category URL
        urlUtils.getUrl = () => {
            const currentUrl = this.modalCategoryUrl || this.originalUrlUtils.getUrl();
            return currentUrl;
        };

        // Override goToUrl để prevent navigation và update modal URL
        urlUtils.goToUrl = (url) => {
            // Update modal category URL để keep track
            this.modalCategoryUrl = url;

            // Prevent duplicate calls bằng debounce-like check
            if (this.isUpdatingFacetedSearch) {
                return;
            }

            this.isUpdatingFacetedSearch = true;

            // Trigger normal FacetedSearch updateView() sau small delay
            setTimeout(() => {
                if (this.modalFacetedSearch && typeof this.modalFacetedSearch.updateView === 'function') {
                    this.modalFacetedSearch.updateView();
                } else {
                    console.warn('⚠️ Modal faceted search not available for update'); // eslint-disable-line no-console
                }
                this.isUpdatingFacetedSearch = false;
            }, 10);
        };

        // Configure request options cho faceted search
        const requestOptions = {
            config: {
                category: {
                    products: {
                        limit: this.context.categoryProductsPerPage || 12,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        // Validation options
        const validationOptions = {
            errorDiv: '.papathemes-pcbuilder-modal-content',
            errorContainer: '.alert',
            errorSpan: '.form-inlineMessage',
            validationErrorMessages: this.validationDictionary,
        };

        // Initialize FacetedSearch trong modal với callback debounce
        this.modalFacetedSearch = new FacetedSearch(requestOptions, (content) => {
            // Prevent multiple rapid calls
            if (this.isProcessingCallback) {
                return;
            }

            this.isProcessingCallback = true;

            // IMPORTANT: Re-process productListing để add "Add to Build" buttons và fix filter button
            const processedProductListing = this.processProductListingForModal(
                content.productListing,
                this.currentModalComponentType,
            );

            // Update product listing và sidebar với processed content
            $productContainer.html(processedProductListing);
            $sidebarContainer.html(this.processSidebarForModal(content.sidebar));

            // Add compatibility indicators to new product cards
            this.compatibilityManager.addCompatibilityIndicatorsToProductCards(
                $productContainer,
                this.currentModalComponentType,
                this.selectedComponents,
                this.loadProductCustomFields.bind(this),
                this.extractProductInfoFromCard.bind(this),
            ).catch(error => {
                console.error('❌ Error adding compatibility indicators:', error); // eslint-disable-line no-console
            });

            // Bind lại product selection events sau khi content được update
            this.bindProductSelectionEvents();

            // Initialize collapsible cho sidebar filter trong modal
            collapsibleFactory();

            // Reset flag sau small delay
            setTimeout(() => {
                this.isProcessingCallback = false;
            }, 100);
        }, validationOptions);

        // Bind sort-by events cho modal context
        this.bindModalSortByEvents();
    }

    /**
     * Bind sort-by events cho modal context
     */
    bindModalSortByEvents() {
        const $modal = $('.papathemes-pcbuilder-modal-content');
        if (!$modal.length) return;

        // Unbind existing để avoid duplicates
        $modal.off('submit.pcBuilderSortBy change.pcBuilderSortBy');

        // Bind submit event cho form
        $modal.on('submit.pcBuilderSortBy', '[data-pc-builder-sort-by]', (event) => {
            this.handleModalSortBySubmit(event, event.currentTarget);
        });

        // Bind change event cho select dropdown
        $modal.on('change.pcBuilderSortBy', '[data-pc-builder-sort-by] select', (event) => {
            const $form = $(event.currentTarget).closest('[data-pc-builder-sort-by]');
            if ($form.length) {
                this.handleModalSortBySubmit(event, $form[0]);
            }
        });
    }

    /**
     * Unbind sort-by events cho modal context
     */
    unbindModalSortByEvents() {
        const $modal = $('.papathemes-pcbuilder-modal-content');
        if ($modal.length) {
            $modal.off('submit.pcBuilderSortBy change.pcBuilderSortBy');
        }
    }

    /**
     * Handle sort-by submission trong modal context
     * @param {Event} event - Sort by submit event
     * @param {HTMLElement} currentTarget - Sort by form element
     */
    handleModalSortBySubmit(event, currentTarget) {
        // IMPORTANT: Prevent default page navigation IMMEDIATELY
        if (event && typeof event.preventDefault === 'function') {
            event.preventDefault();
            event.stopPropagation();
        }

        // Only handle if we're in modal context
        if (!this.currentModal || !this.modalFacetedSearch) {
            return;
        }

        // Prevent duplicate calls
        if (this.isUpdatingFacetedSearch) {
            return;
        }

        this.isUpdatingFacetedSearch = true;

        // Parse form data to get sort parameter
        const $sortForm = $(currentTarget);
        const formData = $sortForm.serialize();
        const queryParams = formData.split('=');

        if (queryParams.length >= 2) {
            const sortParam = queryParams[0];
            const sortValue = queryParams[1];

            // Update modal category URL with sort parameter
            let baseUrl = this.modalCategoryUrl || window.location.href;

            // Handle relative URLs by converting to absolute URL
            if (baseUrl.startsWith('/')) {
                baseUrl = window.location.origin + baseUrl;
            }

            try {
                const currentUrl = new URL(baseUrl);
                currentUrl.searchParams.set(sortParam, sortValue);
                currentUrl.searchParams.delete('page'); // Reset pagination

                // Store as relative path để consistent với original format
                this.modalCategoryUrl = currentUrl.pathname + currentUrl.search;
            } catch (urlError) {
                console.error('❌ Error updating modal URL:', urlError, 'Base URL:', baseUrl); // eslint-disable-line no-console
            }
        }

        // Trigger FacetedSearch update view sau small delay
        setTimeout(() => {
            if (this.modalFacetedSearch && typeof this.modalFacetedSearch.updateView === 'function') {
                this.modalFacetedSearch.updateView();
            } else {
                console.warn('⚠️ Modal faceted search not available for update'); // eslint-disable-line no-console
            }
            this.isUpdatingFacetedSearch = false;
        }, 10);
    }

    /**
     * Properly destroy modal FacetedSearch instance
     */
    destroyModalFacetedSearch() {
        // Unbind sort-by events first
        this.unbindModalSortByEvents();

        if (this.modalFacetedSearch) {
            // If FacetedSearch has destroy method, use it
            if (typeof this.modalFacetedSearch.destroy === 'function') {
                this.modalFacetedSearch.destroy();
            }

            // If it has unbindEvents method, use it
            if (typeof this.modalFacetedSearch.unbindEvents === 'function') {
                this.modalFacetedSearch.unbindEvents();
            }

            this.modalFacetedSearch = null;
        }

        // Reset processing flags
        this.isUpdatingFacetedSearch = false;
        this.isProcessingCallback = false;
    }

    /**
     * Bind events cho việc chọn products trong modal
     */
    bindProductSelectionEvents() {
        const $modal = $('.papathemes-pcbuilder-modal-content');

        // Remove existing handlers to prevent duplicate bindings
        $modal.off('click', '.papathemes-pcbuilder-add-to-build');

        // Event handler cho nút "Add to Build" với proper context binding
        $modal.on('click', '.papathemes-pcbuilder-add-to-build', (event) => {
            this.onProductSelect.call(this, event);
        });
    }

    /**
     * Xử lý khi chọn product trong modal
     * @param {Event} event - Click event
     */
    async onProductSelect(event) {
        event.preventDefault();

        const $button = $(event.currentTarget);
        const $productCard = $button.closest('.card');

        // Lấy thông tin product từ card
        const product = this.extractProductInfo($productCard);
        const componentType = $button.data('component-type');

        // 🔧 FIX: Extract custom fields từ cached GraphQL data
        const customFields = this.extractCustomFieldsFromCard($productCard);
        product.customFields = customFields;

        // Kiểm tra xem product có options hay không từ data-product-simple
        const hasOptions = this.checkProductHasOptions($productCard);

        if (hasOptions) {
            // Nếu có options, hiển thị quick view modal
            this.showQuickViewForBuild(product.id, componentType, product);
        } else {
            // Nếu không có options, add to build trực tiếp
            await this.addComponentToBuildCallback(componentType, product);
            this.closeModal();
        }
    }

    /**
     * Kiểm tra xem product có options hay không từ data-product-simple attribute
     * @param {jQuery} $productCard - Product card element
     * @returns {boolean}
     */
    checkProductHasOptions($productCard) {
        // Lấy data-product-simple từ product card
        // data-product-simple="false" = có options
        // data-product-simple="true" = không có options
        const isSimple = $productCard.data('product-simple');

        // Convert string 'false'/'true' thành boolean và inverse
        // Vì data-product-simple="false" nghĩa là có options
        if (typeof isSimple === 'string') {
            return isSimple === 'false';
        }

        // Nếu boolean thì inverse
        if (typeof isSimple === 'boolean') {
            return !isSimple;
        }

        // Fallback: assume no options nếu không có data
        console.warn('⚠️ data-product-simple not found, assuming no options'); // eslint-disable-line no-console
        return false;
    }

    /**
     * Hiển thị Quick View modal cho product có options
     * @param {number} productId - Product ID
     * @param {string} componentType - Component type
     * @param {Object} product - Product info
     */
    showQuickViewForBuild(productId, componentType, product) {
        const quickViewModal = defaultModal();

        // Store reference để có thể close modal sau
        this.quickViewModal = quickViewModal;
        this.quickViewComponentType = componentType;
        this.quickViewProduct = product;

        quickViewModal.open({ size: 'large' });
        quickViewModal.$modal.addClass('modal--quickView papathemes-pcbuilder-quickview');

        api.product.getById(productId, { template: 'products/quick-view' }, (err, response) => {
            if (err) {
                console.error('❌ Error loading quick view:', err); // eslint-disable-line no-console
                quickViewModal.close();
                return;
            }

            quickViewModal.updateContent(response);
            quickViewModal.$content.find('.productView').addClass('productView--quickView');

            // Initialize ProductDetails để handle options
            const productDetails = new ProductDetails(quickViewModal.$content.find('.quickView'), this.context);
            this.quickViewProductDetails = productDetails;

            // Thêm nút "Add to Build" vào quick view modal
            this.addAddToBuildButtonToQuickView(quickViewModal.$content, componentType);
        });
    }

    /**
     * Thêm nút "Add to Build" vào quick view modal
     * @param {jQuery} $content - Modal content
     * @param {string} componentType - Component type
     */
    addAddToBuildButtonToQuickView($content, componentType) {
        const $addToCartWrapper = $content.find('[data-eyeva-add-to-cart-wrapper]');
        const $form = $content.find('form[data-cart-item-add]');

        if (!$addToCartWrapper.length || !$form.length) {
            console.warn('⚠️ Add to cart wrapper or form not found in quick view'); // eslint-disable-line no-console
            return;
        }

        // Tạo nút "Add to Build" với wrapper để full width
        const addToBuildText = this.languageManager.getLang('component.add_to_build', 'Add to Build');
        const addToBuildButton = `
            <div class="papathemes-pcbuilder-add-to-build-wrapper">
                <button type="button" class="button button--primary papathemes-pcbuilder-add-to-build-btn"
                        data-component-type="${componentType}">
                    <span class="icon">
                        <svg><use href="#icon-plus"></use></svg>
                    </span>
                    ${addToBuildText}
                </button>
            </div>
        `;

        // Thêm nút vào cuối add to cart wrapper để hiện dưới tất cả
        $addToCartWrapper.append(addToBuildButton);

        // Bind event handler cho nút Add to Build với simplified class name
        $content.on('click', '.papathemes-pcbuilder-add-to-build-btn', (e) => {
            this.onQuickViewAddToBuild(e);
        });
    }

    /**
     * Xử lý khi click "Add to Build" từ quick view modal
     * @param {Event} event - Click event
     */
    async onQuickViewAddToBuild(event) {
        event.preventDefault();

        const $button = $(event.currentTarget);
        const componentType = $button.data('component-type');
        const $form = $button.closest('form');
        const product = this.quickViewProduct;

        // Validate form để đảm bảo required options được chọn
        if (!this.validateQuickViewForm($form)) {
            return;
        }

        // Visual feedback: disable button và show loading
        $button.prop('disabled', true).addClass('adding');
        const originalText = $button.html();
        const addingText = this.languageManager.getLang('component.adding_to_build', 'Adding to Build...');
        $button.html(`
            <span class="icon">
                <svg><use href="#icon-spinner"></use></svg>
            </span>
            ${addingText}
        `);

        try {
            // Lấy selected options từ form
            const selectedOptions = this.extractSelectedOptions($form);

            // Lưu options vào product object
            product.selectedOptions = selectedOptions;

            // Add component to build với options
            await this.addComponentToBuildCallback(componentType, product);

            // Success feedback
            const addedText = this.languageManager.getLang('component.added_to_build', 'Added to Build!');
            $button.html(`
                <span class="icon">
                    <svg><use href="#icon-check"></use></svg>
                </span>
                ${addedText}
            `);

            // Delay trước khi đóng modal để user thấy success feedback
            setTimeout(() => {
                // Đóng quick view modal
                this.closeQuickViewModal();

                // Đóng component selection modal
                this.closeModal();
            }, 800);
        } catch (error) {
            console.error('❌ Error adding to build:', error); // eslint-disable-line no-console
            // Error feedback
            const errorText = this.languageManager.getLang('cart.error', 'Error - Try Again');
            $button.html(`
                <span class="icon">
                    <svg><use href="#icon-error"></use></svg>
                </span>
                ${errorText}
            `).removeClass('adding');

            // Reset button sau 2 seconds
            setTimeout(() => {
                $button.prop('disabled', false).html(originalText);
            }, 2000);
        }
    }

    /**
     * Validate form trong quick view
     * @param {jQuery} $form - Form element
     * @returns {boolean}
     */
    validateQuickViewForm($form) {
        let isValid = true;

        // Kiểm tra required fields
        $form.find('[required]').each((_, field) => {
            const $field = $(field);

            if ($field.is('select')) {
                if (!$field.val() || $field.val() === '') {
                    isValid = false;
                    $field.focus();
                    return false;
                }
            } else if ($field.is('input[type="radio"]')) {
                const name = $field.attr('name');
                if (!$form.find(`input[name="${name}"]:checked`).length) {
                    isValid = false;
                    $field.focus();
                    return false;
                }
            } else if ($field.is('input, textarea')) {
                if (!$field.val()) {
                    isValid = false;
                    $field.focus();
                    return false;
                }
            }
        });

        return isValid;
    }

    /**
     * Extract selected options từ form
     * @param {jQuery} $form - Form element
     * @returns {Array} Selected options
     */
    extractSelectedOptions($form) {
        const options = [];
        const processedOptionIds = new Set();

        // Tìm tất cả các product attribute containers
        $form.find('[data-product-attribute-id]').each((_, container) => {
            const $container = $(container);
            const optionId = $container.data('product-attribute-id');
            const attributeType = $container.data('product-attribute');

            // Skip nếu đã process option này rồi
            if (processedOptionIds.has(optionId)) return;
            processedOptionIds.add(optionId);

            // Lấy field label (tên của option) từ container
            let fieldLabel = $container.find('.form-label').first().text().trim();

            // Clean field label - remove "Optional" text và extra whitespace
            const optionalText = this.languageManager.getLang('options.optional', 'Optional');
            const optionalRegex = new RegExp(`\\s*${optionalText}\\s*`, 'gi');
            fieldLabel = fieldLabel.replace(optionalRegex, '').replace(/\s+/g, ' ').replace(/:\s*$/, '').trim();

            let selectedValue = null;
            let selectedText = null;

            if (attributeType === 'date') {
                // Handle date fields specially - combine year/month/day
                const year = $container.find(`select[name="attribute[${optionId}][year]"]`).val();
                const month = $container.find(`select[name="attribute[${optionId}][month]"]`).val();
                const day = $container.find(`select[name="attribute[${optionId}][day]"]`).val();

                if (year || month || day) {
                    const yearText = year ? $container.find(`select[name="attribute[${optionId}][year]"] option:selected`).text() : '';
                    const monthText = month ? $container.find(`select[name="attribute[${optionId}][month]"] option:selected`).text() : '';
                    const dayText = day ? $container.find(`select[name="attribute[${optionId}][day]"] option:selected`).text() : '';

                    selectedValue = `${year}-${month}-${day}`;
                    selectedText = [monthText, dayText, yearText].filter(t => t).join(' ');
                }
            } else if (attributeType === 'input-checkbox') {
                // Handle checkbox
                const $checkbox = $container.find(`input[type="checkbox"][name="attribute[${optionId}]"]`);
                if ($checkbox.is(':checked')) {
                    selectedValue = $checkbox.val();
                    selectedText = this.languageManager.getLang('options.yes', 'Yes'); // Simple yes for checked checkbox
                }
            } else if (attributeType === 'set-select') {
                // Handle select dropdown
                const $select = $container.find(`select[name="attribute[${optionId}]"]`);
                const value = $select.val();
                if (value && value !== '') {
                    selectedValue = value;
                    selectedText = $select.find('option:selected').text().trim();
                }
            } else if (attributeType === 'input-text' || attributeType === 'input-number' || attributeType === 'textarea') {
                // Handle text, number, textarea inputs
                const $input = $container.find(`input[name="attribute[${optionId}]"], textarea[name="attribute[${optionId}]"]`);
                const value = $input.val();
                if (value && value.trim() !== '') {
                    selectedValue = value;
                    selectedText = value;
                }
            } else if (attributeType === 'input-file') {
                // Handle file upload
                const $fileInput = $container.find(`input[type="file"][name="attribute[${optionId}]"]`);
                const files = $fileInput[0]?.files;
                if (files && files.length > 0) {
                    selectedValue = files[0].name;
                    selectedText = files[0].name;
                }
            } else {
                // Handle radio types (swatch, set-radio, set-rectangle, product-list)
                const $checkedRadio = $container.find(`input[type="radio"][name="attribute[${optionId}]"]:checked`);
                const value = $checkedRadio.val();

                // Skip "None" values (empty string or "0")
                if (value && value !== '' && value !== '0') {
                    selectedValue = value;

                    // Get proper label for radio option
                    const $radioLabel = $checkedRadio.closest('.form-option-wrapper').find('label, .form-option');
                    if ($radioLabel.length) {
                        // For swatch/rectangle options, get text from span
                        const $labelSpan = $radioLabel.find('._label, .form-option-variant').first();
                        selectedText = $labelSpan.length ? $labelSpan.text().trim() : $radioLabel.text().trim();
                    } else {
                        // Fallback to label text
                        selectedText = $checkedRadio.next('label').text().trim();
                    }

                    // Clean selected text
                    selectedText = selectedText.replace(/\s+/g, ' ').trim();
                }
            }

            // Only add if we have both field label and selected value
            if (fieldLabel && selectedValue && selectedText) {
                options.push({
                    optionId,
                    fieldLabel,
                    selectedValue,
                    selectedText,
                    attributeType,
                });
            }
        });

        return options;
    }

    /**
     * Đóng quick view modal
     */
    closeQuickViewModal() {
        if (this.quickViewModal) {
            this.quickViewModal.close();
            this.quickViewModal = null;
            this.quickViewComponentType = null;
            this.quickViewProduct = null;
            this.quickViewProductDetails = null;
        }
    }

    /**
     * Extract thông tin product từ product card
     * @param {jQuery} $productCard - Product card element
     * @returns {Object} Product information
     */
    extractProductInfo($productCard) {
        // Try multiple selectors để tìm image với priority order
        const imageSelectors = [
            '.card-img-container img',
            'img.card-image',
            '.card-image',
            '.card-figure img',
            'img',
        ];

        let $image = $();
        for (const selector of imageSelectors) {
            $image = $productCard.find(selector).first();
            if ($image.length && ($image.attr('src') || $image.attr('data-src'))) {
                break;
            }
        }

        const $title = $productCard.find('.card-title a');

        // Extract price from data attributes with priority order
        let price = 0;
        const priceSelectors = [
            '[data-product-price-without-tax]',
            '[data-product-price-with-tax]',
            '[data-product-price]',
            '.price-value',
        ];

        for (const selector of priceSelectors) {
            const $priceElement = $productCard.find(selector);
            if ($priceElement.length > 0) {
                // Try data attributes first
                price = $priceElement.data('product-price-without-tax') ||
                       $priceElement.data('product-price-with-tax') ||
                       $priceElement.data('product-price');

                if (price) break;

                // Fallback to text parsing
                const priceText = $priceElement.text().trim();
                if (priceText) {
                    price = extractPriceFromText(priceText);
                    if (price > 0) break;
                }
            }
        }

        // Extract image URL với fallback options
        let imageUrl = '';
        if ($image.length) {
            imageUrl = $image.attr('src') || $image.attr('data-src') || $image.attr('data-original');
        } else {
            console.warn('⚠️ No image found for product:', $title.text().trim()); // eslint-disable-line no-console
        }

        // Get purchase quantities từ cached GraphQL data
        const purchaseQuantities = this.getProductPurchaseQuantities($productCard);

        return {
            id: $productCard.data('product-id') || $productCard.find('[data-product-id]').data('product-id') || $productCard.data('entity-id'),
            name: $title.length ? $title.text().trim() : $productCard.find('.card-title').text().trim(),
            price: price || 0,
            image: imageUrl,
            url: $title.attr('href'),
            minPurchaseQuantity: purchaseQuantities.minPurchaseQty,
            maxPurchaseQuantity: purchaseQuantities.maxPurchaseQty,
        };
    }

    /**
     * Load custom fields cho tất cả products via GraphQL
     * @param {jQuery} $productCards - jQuery collection of product cards
     * @returns {Promise} Promise that resolves when all custom fields are loaded
     */
    async loadProductCustomFields($productCards) {
        const productIds = [];
        const productCardMap = new Map();

        // Extract product IDs từ cards
        $productCards.each((index, card) => {
            const $card = $(card);
            let productId = $card.data('entity-id') || $card.find('[data-entity-id]').data('entity-id');

            if (!productId) {
                // Try to extract từ product URL
                const productUrl = $card.find('a[href*="/"]').first().attr('href');
                if (productUrl) {
                    const urlMatch = productUrl.match(/\/([^\/]+)\/?$/);
                    if (urlMatch) {
                        // This is a fallback, ideally we need the actual product ID
                        console.warn('⚠️ Could not find product ID for card, using URL extraction'); // eslint-disable-line no-console
                    }
                }
                return; // Skip this card if no ID found
            }

            productId = parseInt(productId, 10);
            if (!Number.isNaN(productId)) {
                productIds.push(productId);
                productCardMap.set(productId, $card);
            }
        });

        if (productIds.length === 0) {
            console.warn('⚠️ No valid product IDs found for custom fields loading'); // eslint-disable-line no-console
            return;
        }

        try {
            const customFieldsData = await this.fetchProductsCustomFields(productIds);

            // Store custom fields data và purchase quantities
            customFieldsData.forEach(productData => {
                const $card = productCardMap.get(productData.productId);
                if ($card) {
                    // Store all custom fields
                    $card.data('graphql-custom-fields', productData.customFields);

                    // Store purchase quantities
                    if (productData.minPurchaseQuantity !== undefined) {
                        $card.data('min-purchase-qty', productData.minPurchaseQuantity);
                    }
                    if (productData.maxPurchaseQuantity !== undefined) {
                        $card.data('max-purchase-qty', productData.maxPurchaseQuantity);
                    }
                }
            });
        } catch (error) {
            console.error('❌ Error loading product data:', error); // eslint-disable-line no-console
        }
    }

    /**
     * Fetch custom fields cho multiple products via GraphQL
     * @param {Array<number>} productIds - Array of product IDs
     * @returns {Promise<Array>} Array of products with custom fields
     */
    async fetchProductsCustomFields(productIds) {
        if (!productIds || productIds.length === 0) {
            return [];
        }

        const query = `
            query getProductsData($productIds: [Int!]!) {
                site {
                    products(entityIds: $productIds) {
                        edges {
                            node {
                                entityId
                                minPurchaseQuantity
                                maxPurchaseQuantity
                                customFields {
                                    edges {
                                        node {
                                            name
                                            value
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;

        const headers = {
            'Content-Type': 'application/json',
        };

        // Add Authorization header nếu có GraphQL token
        if (this.context?.graphQLToken) {
            headers.Authorization = `Bearer ${this.context.graphQLToken}`;
        } else {
            console.warn('⚠️ No GraphQL token available for custom fields query'); // eslint-disable-line no-console
            throw new Error('No GraphQL token available');
        }

        try {
            const response = await $.ajax({
                url: '/graphql',
                method: 'POST',
                headers,
                data: JSON.stringify({
                    query,
                    variables: { productIds },
                }),
                xhrFields: {
                    withCredentials: true,
                },
            });

            if (response.errors) {
                throw new Error(`GraphQL errors: ${JSON.stringify(response.errors)}`);
            }

            const products = response.data?.site?.products?.edges || [];
            return products.map(edge => ({
                productId: edge.node.entityId,
                minPurchaseQuantity: edge.node.minPurchaseQuantity,
                maxPurchaseQuantity: edge.node.maxPurchaseQuantity,
                customFields: edge.node.customFields.edges.map(fieldEdge => ({
                    name: fieldEdge.node.name,
                    value: fieldEdge.node.value,
                })),
            }));
        } catch (error) {
            console.error('❌ GraphQL custom fields query failed:', error); // eslint-disable-line no-console
            throw error;
        }
    }

    /**
     * Get purchase quantities từ cached GraphQL data
     * @param {jQuery} $card - Product card element
     * @returns {Object} Purchase quantities object
     */
    getProductPurchaseQuantities($card) {
        const minQty = $card.data('min-purchase-qty') || 1;
        const maxQty = $card.data('max-purchase-qty') || null;

        return {
            minPurchaseQty: minQty,
            maxPurchaseQty: maxQty,
        };
    }

    /**
     * Extract custom fields từ product card
     * @param {jQuery} $card - Product card element
     * @returns {Array} Array of custom fields {name, value}
     */
    extractCustomFieldsFromCard($card) {
        const customFields = [];

        try {
            // Chỉ sử dụng GraphQL loaded custom fields
            const graphqlCustomFields = $card.data('graphql-custom-fields');
            if (graphqlCustomFields && Array.isArray(graphqlCustomFields)) {
                graphqlCustomFields.forEach(field => {
                    if (field.name && field.value && this.compatibilityManager.isCompatibilityField(field.name)) {
                        customFields.push({
                            name: field.name,
                            value: field.value,
                        });
                    }
                });
            } else {
                console.warn('⚠️ No GraphQL custom fields data found on card'); // eslint-disable-line no-console
            }
        } catch (error) {
            console.error('❌ Error extracting custom fields:', error); // eslint-disable-line no-console
        }

        return customFields;
    }

    /**
     * Extract product information từ product card HTML
     * @param {jQuery} $card - Product card element
     * @returns {Object|null} Product information with custom fields
     */
    extractProductInfoFromCard($card) {
        try {
            const productId = $card.data('entity-id') || $card.find('[data-entity-id]').data('entity-id');
            const productName = $card.find('.card-title a, .card-title').text().trim();
            const productUrl = $card.find('.card-title a, .card-figure a').first().attr('href');

            if (!productId || !productName) {
                return null;
            }

            // Extract custom fields
            const customFields = this.extractCustomFieldsFromCard($card);

            return {
                id: parseInt(productId, 10),
                name: productName,
                url: productUrl,
                customFields,
            };
        } catch (error) {
            console.error('❌ Error extracting product info from card:', error); // eslint-disable-line no-console
            return null;
        }
    }

    /**
     * Process product listing để thêm "Add to Build" buttons và fix filter button
     * @param {string} productListing - HTML content of product listing
     * @param {string} componentType - Loại component
     * @returns {string} Processed HTML
     */
    processProductListingForModal(productListing, componentType) {
        let processedListing = productListing;

        // Parse HTML thành DOM để xử lý filter button
        const $tempDiv = $('<div>').html(processedListing);

        // Tìm và cập nhật filter button nếu có
        const $filterButton = $tempDiv.find('[data-collapsible="page-sidebar"]');
        if ($filterButton.length) {
            // Cập nhật data-collapsible
            $filterButton.attr('data-collapsible', 'papathemes-pcbuilder-product-sidebar');

            // Thêm class papathemes-pcbuilder-filter-toggle nếu chưa có
            if (!$filterButton.hasClass('papathemes-pcbuilder-filter-toggle')) {
                $filterButton.addClass('papathemes-pcbuilder-filter-toggle');
            }
        }

        // Tìm và cập nhật sort-by forms cho modal context
        const $sortByForms = $tempDiv.find('[data-sort-by]');
        if ($sortByForms.length) {
            $sortByForms.each((index, form) => {
                const $form = $(form);
                const sortByValue = $form.attr('data-sort-by');
                $form.removeAttr('data-sort-by');
                $form.attr('data-pc-builder-sort-by', sortByValue);
            });
        }

        // Lấy processed HTML
        processedListing = $tempDiv.html();

        // Add data attributes cho component type
        processedListing = processedListing.replace(
            /<article class="card"/g,
            `<article class="card" data-component-type="${componentType}"`,
        );

        // Thêm target="_blank" cho tất cả các link trong product cards để mở new window
        // Tránh các link không mong muốn bằng cách chỉ target các link sản phẩm
        processedListing = processedListing.replace(
            /<a([^>]*href="\/[^"]*"[^>]*)>/g,
            '<a$1 target="_blank" rel="noopener noreferrer">',
        );

        // Thêm "Add to Build" button vào card-actions (sau Add to Cart, Quick View, Compare)
        const addToBuildText = this.languageManager.getLang('component.add_to_build', 'Add to Build');
        processedListing = processedListing.replace(
            /<div class="card-actions"([^>]*)>(.*?)<\/div>/gs,
            (match, attributes, actions) => `<div class="card-actions"${attributes}>
                    ${actions}
                    <button type="button" class="card-figcaption-button papathemes-pcbuilder-add-to-build"
                            data-component-type="${componentType}">
                        <span class="icon">
                            <svg><use href="#icon-plus"></use></svg>
                        </span>
                        ${addToBuildText}
                    </button>
                </div>`,
        );

        // Thêm "Add to Build" button vào card-footer nếu có
        processedListing = processedListing.replace(
            /<div class="card-footer"([^>]*)>(.*?)<\/div>/gs,
            (match, attributes, footer) => `<div class="card-footer"${attributes}>
                    ${footer}
                    <button type="button" class="card-figcaption-button papathemes-pcbuilder-add-to-build"
                            data-component-type="${componentType}">
                        <span class="icon">
                            <svg><use href="#icon-plus"></use></svg>
                        </span>
                        ${addToBuildText}
                    </button>
                </div>`,
        );

        // Nếu không có card-actions hoặc card-footer, thêm vào cuối card
        if (!processedListing.includes('papathemes-pcbuilder-add-to-build')) {
            processedListing = processedListing.replace(
                /<\/div>\s*<\/article>/g,
                `    <div class="card-actions papathemes-pcbuilder-card-actions">
                        <button type="button" class="card-figcaption-button papathemes-pcbuilder-add-to-build"
                                data-component-type="${componentType}">
                            <span class="icon">
                                <svg><use href="#icon-plus"></use></svg>
                            </span>
                            ${addToBuildText}
                        </button>
                    </div>
                </div>
            </article>`,
            );
        }

        return processedListing;
    }

    /**
     * Process sidebar content cho modal để wrap đúng cấu trúc
     * @param {string} sidebarHtml - Original sidebar HTML
     * @returns {string} Processed sidebar HTML với wrapper
     */
    processSidebarForModal(sidebarHtml) {
        if (!sidebarHtml) return '';

        // Parse HTML thành DOM để xử lý chính xác
        const $tempDiv = $('<div>').html(sidebarHtml);

        // Tìm faceted-search-container-nav content
        const $navContent = $tempDiv.find('.faceted-search-container-nav');
        if (!$navContent.length) {
            console.warn('❌ No faceted-search-container-nav found in sidebar'); // eslint-disable-line no-console
            return sidebarHtml;
        }

        // Tìm và cập nhật close button trong footer
        const $footerButton = $navContent.find('[data-collapsible="page-sidebar"]');
        if ($footerButton.length) {
            $footerButton.attr('data-collapsible', 'papathemes-pcbuilder-product-sidebar');
        }

        // Tạo cấu trúc wrapper giống original sidebar
        const closeText = this.languageManager.getLang('modal.close', 'Close');
        const filtersText = this.languageManager.getLang('modal.filters', 'Filters');

        const wrappedContent = `
            <div class="plp-page-sidebar-modal">
                <button class="plp-page-sidebar-modal-close" type="button" title="${closeText}" data-collapsible="papathemes-pcbuilder-product-sidebar" aria-label="${closeText}" aria-controls="papathemes-pcbuilder-product-sidebar" aria-expanded="false">
                    <span class="aria-description--hidden">${closeText}</span>
                    <span class="icon" aria-hidden="true">
                        <svg><use href="#icon-xmark-large"></use></svg>
                    </span>
                </button>
                <div class="plp-page-sidebar-modal-header">
                    ${filtersText}
                </div>
                <div class="faceted-search-container" id="faceted-search-container">
                    ${$navContent.prop('outerHTML')}
                </div>
            </div>
        `;

        return wrappedContent;
    }

    /**
     * Đóng modal hiện tại với proper cleanup
     */
    closeModal() {
        // Destroy FacetedSearch instance properly (this also unbinds sort-by events)
        this.destroyModalFacetedSearch();

        // Restore original urlUtils methods
        if (this.originalUrlUtils) {
            urlUtils.getUrl = this.originalUrlUtils.getUrl;
            urlUtils.goToUrl = this.originalUrlUtils.goToUrl;
            this.originalUrlUtils = null;
        }

        // Close modal instance
        if (this.currentModal) {
            this.currentModal.closeModal();
            this.currentModal = null;
        }

        // Reset modal category URL và flags
        this.modalCategoryUrl = null;
        this.currentModalComponentType = null;
        this.isUpdatingFacetedSearch = false;
        this.isProcessingCallback = false;
    }

    /**
     * Get loading content cho modal
     * @returns {string} Loading HTML
     */
    getLoadingContent() {
        return `
            <div class="papathemes-pcbuilder-loading-state">
                <div class="papathemes-pcbuilder-loading-spinner"></div>
                <div class="papathemes-pcbuilder-loading-text">${this.languageManager.getLang('loading_components', 'Loading components...')}</div>
            </div>
        `;
    }

    /**
     * Render category content trong modal
     * @param {Object} categoryData - Data từ API
     * @param {string} componentType - Loại component
     * @param {string} componentName - Tên component
     * @returns {string} Rendered HTML
     */
    renderCategoryContent(categoryData, componentType) {
        // Process product listing để thêm "Add to Build" buttons
        const productListing = this.processProductListingForModal(
            categoryData.productListing || '',
            componentType,
        );

        // Process sidebar để wrap đúng cấu trúc modal
        const sidebar = this.processSidebarForModal(categoryData.sidebar || '');

        return `
            <div class="papathemes-pcbuilder-modal-category">
                <div class="papathemes-pcbuilder-modal-layout">
                    <div class="papathemes-pcbuilder-product-sidebar" id="papathemes-pcbuilder-product-sidebar">
                        ${sidebar}
                    </div>
                    <div class="papathemes-pcbuilder-product-listing">
                        ${productListing}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Bind modal-specific events
     */
    bindEvents() {
        // Event handler cho filter toggle trong modal
        $(document).on('click', '.papathemes-pcbuilder-filter-toggle', this.onFilterToggle.bind(this));
    }

    /**
     * Unbind modal-specific events
     */
    unbindEvents() {
        // Remove filter toggle event handler
        $(document).off('click', '.papathemes-pcbuilder-filter-toggle');
    }

    /**
     * Xử lý toggle filter sidebar trong modal (mobile/tablet)
     * @param {Event} event - Click event
     */
    onFilterToggle(event) {
        event.preventDefault();

        const $toggleBtn = $(event.currentTarget);
        const targetId = $toggleBtn.data('collapsible');
        const $sidebar = $(`#${targetId}`);

        if (!$sidebar.length) {
            console.warn('⚠️ Filter toggle target not found:', targetId); // eslint-disable-line no-console
            return;
        }

        // Toggle expanded state
        const isExpanded = $toggleBtn.attr('aria-expanded') === 'true';

        if (isExpanded) {
            // Collapse
            $toggleBtn.attr('aria-expanded', 'false');
            $sidebar.removeClass('is-open');
        } else {
            // Expand
            $toggleBtn.attr('aria-expanded', 'true');
            $sidebar.addClass('is-open');
        }
    }
}
