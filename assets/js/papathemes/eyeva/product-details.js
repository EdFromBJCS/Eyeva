/* eslint-disable no-console */
/* eslint-disable camelcase */
// import utils from '@bigcommerce/stencil-utils';
import utils from '@bigcommerce/stencil-utils';
import mustache from 'mustache';
import CornerstoneProductDetails from '../../theme/common/product-details';
import { alertModal, showAlertModal, ModalEvents } from '../../theme/global/modal';
import { fixFormElementUniqueIds, currencyFormat } from '../utils';
import SaleCountdown from '../sale-countdown';

const DEBUG_LOG = false;

const normalizeOptionString = s => s.replace(/:/g, '').replace(/\s{2,}/g, ' ').toLowerCase();

function equalOptionString(a, b) {
    return normalizeOptionString(a) === normalizeOptionString(b);
}

/**
 * Check if two arrays are equal regardless of order
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean}
 */
function areArraysEqualUnordered(arr1, arr2) {
    const _arr1 = arr1.slice().sort((a, b) => a - b);
    const _arr2 = arr2.slice().sort((a, b) => a - b);
    return _arr1.length === _arr2.length && _arr1.every((value, index) => value === _arr2[index]);
}

let cachedSettings;

/**
 * Handle multiple promises with a concurrency limit (e.g., processing only 10 promises at a time out of 10)
 *
 * @param {Array<Function<T>} promises functions that return a promise
 * @param {*} limit number of promises to process at a time
 * @returns {Promise<Array<T>>} results of all promises
 */
async function handlePromisesWithLimit(promises, limit = 10) {
    const results = [];
    const executing = []; // Track the promises currently executing

    for (const promise of promises) {
        // Start the promise and add it to the executing list
        const p = promise().then(result => {
            // Remove the finished promise from executing list
            executing.splice(executing.indexOf(p), 1);
            return result;
        });
        results.push(p);
        executing.push(p);

        // If we're at the limit, wait for the first to finish
        if (executing.length >= limit) {
            // eslint-disable-next-line no-await-in-loop
            await Promise.race(executing);
        }
    }

    // Wait for all remaining promises to complete
    return Promise.all(results);
}

export default class ProductDetails extends CornerstoneProductDetails {
    modifiersModalOverlayTemplate = `
        <div class="eyeva__productView-modifiersModal-overlay" data-eyeva-modifiers-modal-overlay></div>
    `;

    modifiersModalTemplate = `
        <div class="eyeva__productView-modifiersModal" data-eyeva-modifiers-modal>
            <div class="eyeva__productView-modifiersModal-panel">
                <div class="eyeva__productView-modifiersModal-header">
                    <button class="eyeva__productView-modifiersModal-close-button" type="button" title="Close" data-eyeva-modifiers-modal-close>
                        <span class="aria-description--hidden">Close</span>
                        <span class="icon" aria-hidden="true">
                            <svg><use href="#icon-xmark-large"></use></svg>
                        </span>
                    </button>
                    <button class="eyeva__productView-modifiersModal-back-button" type="button" title="Back" data-eyeva-modifiers-modal-back>
                        <span class="aria-description--hidden">Back</span>
                        <span class="icon" aria-hidden="true">
                            <svg><use href="#icon-arrow-left-long"></use></svg>
                        </span>
                    </button>
                    <h2 class="eyeva__productView-modifiersModal-header-title"><%&productTitle%></h2>
                </div>
                <div class="eyeva__productView-modifiersModal-content" data-eyeva-modifiers-modal-content>
                    <h3 class="eyeva__productView-modifiersModal-title" data-eyeva-modifiers-modal-title>
                        <!-- contain current step's title -->
                    </h3>
                    <div class="eyeva__productView-modifiersModal-options" data-eyeva-modifiers-modal-options>
                        <!-- contains modifiers -->
                    </div>
                    <div class="eyeva__productView-modifiersModal-summary" data-eyeva-modifiers-modal-summary>
                        <!-- contains summary -->
                    </div>
                    <div class="eyeva__productView-modifiersModal-complete" data-eyeva-modifiers-modal-complete>
                        <!-- contains add to cart button & qty box -->
                    </div>
                </div>
                <div class="eyeva__productView-modifiersModal-footer" data-eyeva-modifiers-modal-footer>
                    <div class="eyeva__productView-modifiersModal-continue">
                        <button class="button button--primary" type="button" data-eyeva-modifiers-modal-continue>
                            <%txtContinue%>
                        </button>
                    </div>
                    <div class="eyeva__productView-modifiersModal-footer-subtotal" data-eyeva-modifiers-modal-footer-subtotal>
                        <!-- contains subtotal -->
                    </div>
                </div>
            </div>
            <div class="eyeva__productView-modifiersModal-image">
                <%#mainImageUrl%>
                    <img
                        src="<%mainImageUrl%>"
                        data-srcset="<%mainImageSrcset%>"
                        data-zoom-image="<%zoomImageUrl%>"
                        data-sizes="auto"
                        class="lazyload"
                        data-eyeva-modifiers-modal-img />
                <%/mainImageUrl%>
            </div>
        </div>
    `;

    optionTooltipTemplate = `
        <div class="eyeva__productView-option-tooltip">
            <span class="eyeva__productView-tooltip-trigger" role="button" tabindex="0" aria-label="More information" title="More information">i</span>
            <span class="eyeva__productView-tooltip-bubble"><%tooltip%></span>
        </div>
    `;

    optionValueTooltipTemplate = `
        <div class="eyeva__productView-value-tooltip">
            <span class="eyeva__productView-tooltip-trigger" role="button" tabindex="0" aria-label="More information" title="More information">i</span>
            <span class="eyeva__productView-tooltip-bubble"><%tooltip%></span>
        </div>
    `;

    optionValueTooltipHeadingTemplate = `
        <div class="eyeva__productView-value-tooltip-heading"><%heading%></div>
    `;

    optionPriceTemplate = `
        <div class="eyeva__productView-option-price-group">
            <%#preloader%>
                <div class="eyeva__productView-option-price _preloader">...</div>
            <%/preloader%>
            <%#priceWithTax%>
                <div class="eyeva__productView-option-price _withTax">
                    <%#nonSalePriceWithTax%>
                        <span class="eyeva__productView-option-price-old _withTax price" data-value="<%nonSalePriceWithTaxValue%>"><%nonSalePriceWithTax%></span>
                    <%/nonSalePriceWithTax%>
                    <span class="eyeva__productView-option-price-now _withTax price" data-value="<%priceWithTaxValue%>"><%priceWithTax%></span>
                </div>
            <%/priceWithTax%>
            <%#priceWithoutTax%>
                <div class="eyeva__productView-option-price _withoutTax">
                    <%#nonSalePriceWithoutTax%>
                        <span class="eyeva__productView-option-price-old _withoutTax price" data-value="<%nonSalePriceWithoutTaxValue%>"><%nonSalePriceWithoutTax%></span>
                    <%/nonSalePriceWithoutTax%>
                    <span class="eyeva__productView-option-price-now _withoutTax price" data-value="<%priceWithoutTaxValue%>"><%priceWithoutTax%></span>
                </div>
            <%/priceWithoutTax%>
        </div>
    `;

    optionPricePlainTemplate = `
        <%#priceWithTax%>
            (<%priceWithTax%>)
        <%/priceWithTax%>
        <%^priceWithTax%>
            <%#priceWithoutTax%>
                (<%priceWithoutTax%>)
            <%/priceWithoutTax%>
        <%/priceWithTax%>
    `;

    subtotalTemplate = `
        <div class="eyeva__productView-option-subtotal-group">
            <div class="eyeva__productView-option-subtotal-group-label"><%txtSubtotal%></div>
            <%#preloader%>
                <div class="eyeva__productView-option-subtotal _preloader">...</div>
            <%/preloader%>
            <%#priceWithTax%>
                <div class="eyeva__productView-option-subtotal _withTax">
                    <%#nonSalePriceWithTax%>
                        <span class="eyeva__productView-option-subtotal-old _withTax price" data-value="<%nonSalePriceWithTaxValue%>"><%nonSalePriceWithTax%></span>
                    <%/nonSalePriceWithTax%>
                    <span class="eyeva__productView-option-subtotal-now _withTax price" data-value="<%priceWithTaxValue%>"><%priceWithTax%></span>
                </div>
            <%/priceWithTax%>
            <%#priceWithoutTax%>
                <div class="eyeva__productView-option-subtotal _withoutTax">
                    <%#nonSalePriceWithoutTax%>
                        <span class="eyeva__productView-option-subtotal-old _withoutTax price" data-value="<%nonSalePriceWithoutTaxValue%>"><%nonSalePriceWithoutTax%></span>
                    <%/nonSalePriceWithoutTax%>
                    <span class="eyeva__productView-option-subtotal-now _withoutTax price" data-value="<%priceWithoutTaxValue%>"><%priceWithoutTax%></span>
                </div>
            <%/priceWithoutTax%>
        </div>
    `;

    summaryTemplate = `
        <div class="eyeva__productView-summaryOptions">
            <%#options%>
                <div class="eyeva__productView-summaryOptions-option">
                    <span class="eyeva__productView-summaryOptions-option-name"><%name%></span>
                    <span class="eyeva__productView-summaryOptions-option-value"><%value%></span>
                    <span class="eyeva__productView-summaryOptions-option-prices"><%&priceHtml%></span>
                </div>
            <%/options%>
        </div>
    `;

    showPriceFree = false;
    showPriceZero = false;

    addToCartWrapperSelector = '.add-to-cart-wrapper';

    /**
     * Cache for function `fetchOptionPrice`
     * @type {Object<string, { pricesWithTax: { basePrice: { value: number, currencyCode: string }, price: { value: number, currencyCode: string }, salePrice: { value: number, currencyCode: string } }, pricesWithoutTax: { basePrice: { value: number, currencyCode: string }, price: { value: number, currencyCode: string }, salePrice: { value: number, currencyCode: string } } }>}
     */
    fetchOptionPriceCache = {};

    console = {
        log: (...args) => {
            if (DEBUG_LOG) {
                console.log(...args);
            }
        },
    }

    constructor($scope, ...args) {
        fixFormElementUniqueIds($scope);

        super($scope, ...args);

        const $form = this.$scope.find('[data-cart-item-add]');
        const $chooseOptionsBtn = $form.find('[data-eyeva-product-option-open]');

        /**
         * @type {number}
         */
        this.productId = Number($form.find('[name="product_id"]').val());
        this.refreshProductMetadata($form);

        /**
         * Enable or disable modifiers modal feature
         * @type {boolean}
         */
        // enable modifiers modal if our choose options button appears in the product details
        this.enableModifiersModal = $chooseOptionsBtn.length > 0;

        if (this.enableModifiersModal) {
            this.createModifiersModal();
        }

        this.bindProductEditEvents();
        this.bindStickyAddToCartEvents();
        this.bindModalDestroy();
        this.initOptionStepper();
        this.syncProductCardQty();
        this.initSaleCountdown();
        this.renderInlineOptionTooltips();
        this.renderSpecTooltips();
        $('body').trigger('update-wishlist-buttons', [this.$scope]);
    }

    refreshProductMetadata($form = this.$scope.find('[data-cart-item-add]').first()) {
        const parseMetadata = selector => {
            const text = $form.find(selector).first().text();

            if (text) {
                try {
                    return JSON.parse(text);
                } catch (e) {
                    // Ignore invalid metadata payloads.
                }
            }

            return [];
        };

        /**
         * @type {Array<{name: string, value: string}>}
         */
        this.customFields = parseMetadata('[data-eyeva-product-custom-fields]');

        /**
         * @type {Array<{
         *   id: number,
         *   display_name: string,
         *   state: 'modifier' | 'variant_option',
         *   partial: 'swatch' | 'set-rectangle' | 'set-select' | 'set-radio'
         *     | 'input-text' | 'input-numbers' | 'input-checkbox' | 'input-file'
         *     | 'date' | 'textarea' | 'product-list',
         *   required: boolean,
         *   prefill?: string,
         *   selected_date?: {
         *     day: string,
         *     month: string,
         *     year: string
         *   },
         *   checked?: boolean,
         *   noValue?: number,
         *   value?: number,
         *   values?: Array<{
         *     id: number,
         *     label: string,
         *     selected: boolean,
         *     data: string | Array<string>
         *   }>
         * }>}
         */
        this.productOptions = parseMetadata('[data-eyeva-product-options]');

        this.console.log('ProductDetails.customFields:', this.customFields);
        this.console.log('ProductDetails.productOptions:', this.productOptions);
    }

    get $updateProductWrapper() {
        return this.$scope.find('[data-update-product-wrapper]');
    }

    getViewModel(...args) {
        const model = super.getViewModel(...args);
        model.$updateProductWrapper = this.$updateProductWrapper;
        return model;
    }

    updateDefaultAttributesForOOS(data) {
        super.updateDefaultAttributesForOOS(data);
        const $btn = this.$updateProductWrapper.find('input, button');
        if (!data.purchasable || !data.instock) {
            $btn.prop('disabled', true);
        } else {
            $btn.prop('disabled', false);
        }
    }

    /**
     * Override the method to support edit product in cart
     * @param {Event} event
     * @param {HTMLFormElement} form
     */
    addProductToCart(event, form) {
        if (event.editProductInCart) {
            $(form).find('input[name="action"]').val('EditProductFieldsInCart');
            this.editProductToCart(event, form);
        } else {
            $(form).find('input[name="action"]').val('add');
            super.addProductToCart(event, form);
        }
    }

    /**
     * Edit product in cart.
     * Almost clone from addProductToCart method from the parent class.
     * @param {Event} event
     * @param {HTMLFormElement} form
     * @returns {void}
     */
    async editProductToCart(event, form) {
        const $saveBtn = $('[data-update-product-wrapper]', $(event.target)).find('input, button');
        const originalBtnVal = $saveBtn.val();
        const waitMessage = $saveBtn.data('waitMessage');

        // Do not do AJAX if browser doesn't support FormData
        if (window.FormData === undefined) {
            return;
        }

        const formData = new FormData(form);

        // Prevent default
        event.preventDefault();

        $saveBtn
            .val(waitMessage)
            .prop('disabled', true);

        this.$overlay.show();

        this.setLiveRegionAttributes($saveBtn.next(), 'status', 'polite');

        const success = (response) => {
            $saveBtn
                .val(originalBtnVal)
                .prop('disabled', false);

            this.$overlay.hide();

            if (typeof this.context.editProductCallback === 'function') {
                this.context.editProductCallback(response);
            }
        };

        const failure = (errorText) => {
            // Strip the HTML from the error message
            const tmp = document.createElement('DIV');
            tmp.innerHTML = errorText;

            if (!this.checkIsQuickViewChild($saveBtn)) {
                alertModal().$preModalFocusedEl = $saveBtn;
            }

            return showAlertModal(tmp.textContent || tmp.innerText);
        };

        if (this.context.editProductQuantity) {
            const itemId = formData.get('item_id');
            const newQty = formData.get('qty[]');

            try {
                await this.updateCartItemQuantity(itemId, newQty);
            } catch (error) {
                return failure(error);
            }
        }

        await $.ajax({
            type: 'POST',
            url: form.getAttribute('action'),
            data: formData,
            processData: false,
            contentType: false,
        }).done((response) => success(response)).fail((_xhr, _status, error) => failure(error));
    }

    updateCartItemQuantity(itemId, newQty) {
        return new Promise((resolve, reject) => {
            utils.api.cart.itemUpdate(itemId, newQty, (err, response) => {
                if (err) {
                    return reject(err);
                }
                if (response?.data?.status !== 'succeed') {
                    reject(response.data.errors.join('\n'));
                } else {
                    resolve(response);
                }
            });
        });
    }

    /**
     * When click on the Add New to Cart button, trigger the form submit event with `addNewToCart` flag
     * so that new product is always added to cart regardless of edit product in cart or not
     */
    bindProductEditEvents() {
        const submitEvent = $.Event('submit', { editProductInCart: true });
        const $form = this.$scope.find('[data-cart-item-add]');

        this.$updateProductWrapper.find('input, button').on('click', event => {
            event.preventDefault();
            $form.trigger(submitEvent);
        });
    }

    bindStickyAddToCartEvents() {
        const handleStickyAddToCartClick = event => {
            event.preventDefault();

            const $button = $(event.currentTarget);
            if ($button.prop('disabled') || $button.attr('aria-disabled') === 'true') {
                return;
            }

            const $form = this.$scope.find('form[data-cart-item-add]').first();
            if (!$form.length) {
                return;
            }

            const $stickyQty = $button.siblings('.productView-sticky-add-to-cart')
                .find('.mobile-increment input[name="qty[]"]')
                .first();
            const $formQty = $form.find('[data-quantity-change] input[name="qty[]"]').first();

            if ($stickyQty.length && $formQty.length && $formQty.val() !== $stickyQty.val()) {
                $formQty.val($stickyQty.val()).trigger('change');
            }

            const form = $form[0];

            if (form && !form.checkValidity()) {
                const invalidField = form.querySelector(':invalid');

                if (invalidField?.scrollIntoView) {
                    invalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }

                if (invalidField?.focus) {
                    invalidField.focus();
                }

                if (typeof form.reportValidity === 'function') {
                    form.reportValidity();
                } else if (invalidField?.reportValidity) {
                    invalidField.reportValidity();
                }

                return;
            }

            $form.trigger('submit');
        };

        this.$scope.find('#sticky-add-to-cart')
            .off('click.eyevaStickyAddToCart')
            .on('click.eyevaStickyAddToCart', handleStickyAddToCartClick);
    }

    bindModalDestroy() {
        // destroy the image gallery modal when quick-view modal is closed
        // to prevent memory leak
        this.$scope.closest('.modal').one(ModalEvents.closed, () => {
            this.imageGallery.imageGalleryModal.destroyModal();
        });
    }

    initOptionStepper() {
        this.$scope.find('[data-product-option-stepper]').each((_i, formFieldEl) => {
            const $formField = $(formFieldEl);
            const $dec = $formField.find('[data-action="dec"]');
            const $inc = $formField.find('[data-action="inc"]');
            const $check = $formField.find('[data-action="check"]');

            const init = () => {
                $formField.find('.form-radio').addClass('_checking');

                const $radios = $formField.find('.form-radio:visible');
                const $checked = $radios.filter(':checked');
                const $first = $radios.first();

                if ($checked.length > 0) {
                    const i = $radios.index($checked);
                    $dec.prop('disabled', i === 0);
                    $inc.prop('disabled', i === $radios.length - 1);
                    $check.addClass('_checked');
                } else if ($first.length > 0) {
                    $dec.prop('disabled', true);
                    $inc.prop('disabled', false);
                }

                $formField.find('.form-radio').removeClass('_checking');
            };

            init();

            const select = (inc) => {
                $formField.find('.form-radio').addClass('_checking');

                const $radios = $formField.find('.form-radio:visible');
                const $checked = $radios.filter(':checked');
                const $first = $radios.first();

                if ($checked.length > 0) {
                    // found checked radio
                    const i = $radios.index($checked);
                    if (inc) {
                        // select the next radio
                        if (i < $radios.length - 1) {
                            $radios.eq(i + 1).prop('checked', true).trigger('change');
                            $dec.prop('disabled', false);
                            $inc.prop('disabled', i + 1 === $radios.length - 1);
                        }
                    } else if (i > 0) {
                        // select the previous radio
                        $radios.eq(i - 1).prop('checked', true).trigger('change');
                        $inc.prop('disabled', false);
                        $dec.prop('disabled', i - 1 === 0);
                    }
                    $check.addClass('_checked');
                } else if ($first.length > 0) {
                    // no checked radio, and found the first radio
                    if (inc && $first.filter('[value=""], [value="0"]').length > 0) {
                        // if + and first option is 'none', ignore the none option, select the first valued option
                        $radios.not($first).first().prop('checked', true).trigger('change');
                        $dec.prop('disabled', false);
                        $inc.prop('disabled', $radios.length === 2);
                    } else {
                        // else, select the first radio
                        $first.prop('checked', true).trigger('change');
                        $dec.prop('disabled', true);
                        $inc.prop('disabled', $radios.length === 1);
                    }
                    $check.addClass('_checked');
                }

                // if the checked radio is 'none' then uncheck the check button
                if ($formField.find('.form-radio:checked').filter('[value=""], [value="0"]').length > 0) {
                    $check.removeClass('_checked');
                }

                $formField.find('.form-radio').removeClass('_checking');
            };

            $dec.on('click', event => {
                event.preventDefault();
                select(false);
            });

            $inc.on('click', event => {
                event.preventDefault();
                select(true);
            });

            $check.on('click', event => {
                event.preventDefault();
                if ($check.hasClass('_checked')) {
                    // uncheck the checked radio and select the 'none' radio
                    const $uncheck = $formField.find('.form-radio:checked').prop('checked', false);
                    const $none = $formField.find('.form-radio').filter('[value=""], [value="0"]').prop('checked', true);
                    if ($none.length > 0) $none.trigger('change');
                    else if ($uncheck.length) $uncheck.trigger('change');
                    $check.removeClass('_checked');
                } else {
                    select(true);
                }
            });
        });
    }

    /**
     * Sync product quantity with qty of the corresponding product card
     */
    syncProductCardQty() {
        if (this.context.editProductQuantity) return; // stop if edit product in cart

        const cardQty = $(`[data-card-quantity-change] input[name="qty_${this.productId}"]`).val();
        if (!cardQty) return;

        const $qty = this.$scope.find('[data-quantity-change] input[name="qty[]"]');
        const qty = $qty.val();
        if ($qty.length > 0 && qty !== cardQty) {
            $qty.val(cardQty).trigger('change');
        }
    }

    initSaleCountdown() {
        const { txtSaleCountdownJSON } = this.context;
        const $el = this.$scope.find('[data-sale-countdown-date]');
        $el.data('saleCountdownTranslations', { end_in: $el.data('saleCountdownLabel') });

        SaleCountdown.configure({ txtSaleCountdownJSON });
        SaleCountdown.add($el);
    }

    updateView(data, ...args) {
        super.updateView(data, ...args);
        this.refreshProductMetadata();
        this.renderInlineOptionTooltips();

        this.updateSalePercent(data);
        this.updateShippingCountdown(data);

        if (this.enableModifiersModal) {
            this.$scope.find('[data-eyeva-product-option-open]')
                .prop('disabled', !data?.purchasable);

            if (this.$scope.find('[data-eyeva-modifiers-modal]').hasClass('is-open')) {
                if (!this.manualUpdateModifiersView) {
                    this.updateModifiersView();
                } else {
                    const $form = this.$scope.find('[data-cart-item-add]');
                    const $productOptionsEl = $form.find('[data-product-option-change]');
                    const $modifiersModalOptions = $productOptionsEl.find('[data-eyeva-modifiers-modal-options]');
                    const $modifiersModalSubtotal = $productOptionsEl.find('[data-eyeva-modifiers-modal-footer-subtotal]');
                    const formData = new FormData($form[0]);
                    const showOptionIds = this.stackedShowOptionIds.slice(-1)[0];
                    const noneSales = this.customFieldNoneSales;

                    this.showOptionPrices($modifiersModalOptions, $modifiersModalSubtotal, showOptionIds, formData, noneSales, true);
                    this.updateModifiersSubtotal(data);
                }
            }
        }
    }

    updateSalePercent(data) {
        const $div = this.$scope.find('.price-section--salePercent');
        const $span = this.$scope.find('[data-product-price-sale-percent]');
        let salePercent = 0;

        if (data?.price?.without_tax?.value) {
            if (data?.price?.rrp_without_tax?.value > 0) {
                salePercent = Math.round((1 - data.price.without_tax.value / data.price.rrp_without_tax.value) * 100);
            } else if (data?.price?.non_sale_price_without_tax?.value > 0) {
                salePercent = Math.round((1 - data.price.without_tax.value / data.price.non_sale_price_without_tax.value) * 100);
            }
        } else if (data?.price?.with_tax?.value) {
            if (data?.price?.rrp_with_tax?.value > 0) {
                salePercent = Math.round((1 - data.price.with_tax.value / data.price.rrp_with_tax.value) * 100);
            } else if (data?.price?.non_sale_price_with_tax?.value > 0) {
                salePercent = Math.round((1 - data.price.with_tax.value / data.price.non_sale_price_with_tax.value) * 100);
            }
        }

        if (salePercent > 0) {
            $span.text(`-${salePercent}%`);
            $div.show();
        } else {
            $span.text('');
            $div.hide();
        }
    }

    updateShippingCountdown(data) {
        const $shippingCountdown = this.$scope.find('[data-papathemes-shipping-countdown]');

        if ($shippingCountdown.is(':hidden') && data?.purchasable) {
            $shippingCountdown.css('style', 'flex');
        } else if ($shippingCountdown.is(':visible') && !data?.purchasable) {
            $shippingCountdown.hide();
        }
    }

    updateCartContent(...args) {
        // close modifiers modal after added product to cart
        if (this.enableModifiersModal) {
            this.closeModifiersModal();
            if (this.previewModal) {
                this.previewModal.$preModalFocusedEl = this.$scope.find('[data-eyeva-product-option-open]');
            }
        }

        super.updateCartContent(...args);
    }

    showProductImage(image, ...args) {
        super.showProductImage(image, ...args);

        const $modifiersModalImg = this.$scope.find('[data-eyeva-modifiers-modal-img]');
        const { mainImageUrl, zoomImageUrl, mainImageSrcset } = this.imageGallery.currentImage;

        if (mainImageUrl && mainImageUrl !== $modifiersModalImg.attr('src')) {
            $modifiersModalImg
                .attr('src', mainImageUrl)
                .attr('srcset', mainImageSrcset)
                .attr('data-srcset', mainImageSrcset)
                .attr('data-zoom-image', zoomImageUrl);

            // update main image in quick-view on mobile
            this.$scope.find('[data-main-image]')
                .filter((_i, el) => $(el).closest('[data-image-gallery]').length === 0)
                .attr('src', mainImageUrl)
                .attr('srcset', mainImageSrcset)
                .attr('data-srcset', mainImageSrcset);
        }
    }

    /**
     * Format price with currency symbol and decimal places
     *
     * @param {number} value
     * @param {boolean} plusSymbol whether to show plus symbol for positive value
     * @returns {string}
     */
    formatPrice(value, plusSymbol = false) {
        const display = cachedSettings ? {
            currency_token: cachedSettings.currency.display.symbol,
            currency_location: cachedSettings.currency.display.symbolPlacement,
            decimal_token: cachedSettings.currency.display.decimalToken,
            decimal_places: cachedSettings.currency.display.decimalPlaces,
            thousands_token: cachedSettings.currency.display.thousandsToken,
        } : {};

        if (value < 0) {
            const formatted = currencyFormat(-value, display);
            return plusSymbol ? `-${formatted}` : formatted;
        }

        const formatted = currencyFormat(value, display);
        return plusSymbol ? `+${formatted}` : formatted;
    }

    /**
     * Find option value by option name and value name
     *
     * @param {string} optionName option display name
     * @param {string} valueName value label
     * @returns {[number, number]} optionId, valueId
     */
    findOptionValue(optionName, valueName) {
        const hideIfOption = this.productOptions.find(({ display_name }) => display_name.replace('/:;/g', '').replace(/\s{2,}/g, ' ').toLowerCase() === optionName.toLowerCase());
        const value = hideIfOption?.values?.find(({ label }) => label.replace('/:;/g', '').replace(/\s{2,}/g, ' ').toLowerCase() === valueName.toLowerCase());
        const optionId = hideIfOption?.id;
        const valueId = value?.id;
        return [optionId, valueId];
    }

    createModifiersModal() {
        const zoomImageUrl = this.$scope.find('[data-image-gallery-main]').attr('data-zoom-image');
        const mainImageUrl = this.$scope.find('[data-main-image]').attr('src');
        const mainImageSrcset = this.$scope.find('[data-main-image]').attr('data-srcset');
        const $form = this.$scope.find('[data-cart-item-add]');
        const $attributeMessageWrapper = this.$scope.find('[data-eyeva-product-attributes-message]');
        const $addToCartWrapper = $form.find('[data-eyeva-add-to-cart-wrapper]');
        const $chooseOptionsBtn = $form.find('[data-eyeva-product-option-open]');
        const $productOptionsEl = $form.find('[data-product-option-change]');
        const $modifiersModal = $(mustache.render(this.modifiersModalTemplate, {
            txtContinue: this.context.txtContinue,
            productTitle: this.$scope.find('[data-eyeva-product-title]').html(),
            mainImageUrl: this.imageGallery.currentImage.mainImageUrl || mainImageUrl,
            zoomImageUrl: this.imageGallery.currentImage.zoomImageUrl || zoomImageUrl,
            mainImageSrcset: this.imageGallery.currentImage.mainImageSrcset || mainImageSrcset,
        }, null, ['<%', '%>'])).appendTo($productOptionsEl);
        const $modifiersModalOptions = $modifiersModal.find('[data-eyeva-modifiers-modal-options]');
        const $modifiersModalComplete = $modifiersModal.find('[data-eyeva-modifiers-modal-complete]');
        const $modifiersModalClose = $modifiersModal.find('[data-eyeva-modifiers-modal-close]');
        const $modifiersModalContinue = $modifiersModal.find('[data-eyeva-modifiers-modal-continue]');
        const $modifiersModalBack = $modifiersModal.find('[data-eyeva-modifiers-modal-back]');

        // move modifier options to the modal
        $productOptionsEl.find('[data-product-attribute-state="modifier"]').appendTo($modifiersModalOptions);

        // move add to cart & qty box to the modal
        $modifiersModalComplete.append($addToCartWrapper);

        // clone purchasable message
        $addToCartWrapper.find('.productAttributes-message').clone()
            .appendTo($attributeMessageWrapper);

        $modifiersModalClose.on('click', event => {
            event.preventDefault();
            this.closeModifiersModal();
        });

        $modifiersModalBack.on('click', event => {
            event.preventDefault();
            this.goBackStep();
        });

        $modifiersModalContinue.on('click', event => {
            event.preventDefault();

            // stop and report invalid inputs if any
            const showOptionIds = this.stackedShowOptionIds.slice(-1)[0] || [];
            const invalidInputs = showOptionIds.reduce((_invalidInputs, optionId) => ([
                ..._invalidInputs,
                ...$modifiersModalOptions
                    .find(`[name="attribute[${optionId}]"], [name="attribute[${optionId}][day]"], [name="attribute[${optionId}][month]"], [name="attribute[${optionId}][year]"]`)
                    .get()
                    .filter(el => !el.checkValidity()),
            ]), []);

            if (invalidInputs.length > 0) {
                return invalidInputs[0].reportValidity();
            }

            // auto select the 'none' option if no radio option or no product pick list option is selected
            showOptionIds.forEach(optionId => {
                const $radios = $modifiersModalOptions.find(`input[type="radio"][name="attribute[${optionId}]"]`);
                if ($radios.length > 0 && $radios.filter(':checked').length === 0) {
                    $radios.filter('[value=""], [value="0"]').prop('checked', true);
                }
            });

            // after clicking continue button, update the modifiers view automatically
            this.manualUpdateModifiersView = false;
            this.updateModifiersView();
        });

        $chooseOptionsBtn.on('click', event => {
            event.preventDefault();

            // require selecting variant options before opening the modal
            if (this.validateVariantOptions()) {
                this.initModifiersView();
                this.openModifiersModal();
            }
        });
    }

    openModifiersModal() {
        this.$scope.find('[data-eyeva-modifiers-modal]').addClass('is-open')
            .before(this.modifiersModalOverlayTemplate);
    }

    closeModifiersModal() {
        this.$scope.find('[data-eyeva-modifiers-modal]').removeClass('is-open');
        this.$scope.find('[data-eyeva-modifiers-modal-overlay]').remove();
    }

    initModifiersView() {
        const $form = this.$scope.find('[data-cart-item-add]');
        const $productOptionsEl = $form.find('[data-product-option-change]');
        const $modifiersModalOptions = $productOptionsEl.find('[data-eyeva-modifiers-modal-options]');

        $modifiersModalOptions.find('input, select, textarea')
            .not('[type="checkbox"], [type="radio"], [type="file"]')
            .filter('[name^="attribute"]').val('');

        $modifiersModalOptions.find('input[type="checkbox"], input[type="radio"]')
            .filter('[name^="attribute"]').prop('checked', false);

        // flag any input/select is not shown yet so that the continue button is shown
        $modifiersModalOptions.find('[name^="attribute"]').removeAttr('data-field-shown');

        // reset modal to update this view automatically when option is selected
        this.manualUpdateModifiersView = false;

        /**
         * Contains all option ids that are shown in each step
         * @type {number[][]}
         */
        // reset the shown option ids in all steps
        this.stackedShowOptionIds = [];

        /**
         * Non-sale prices for option values.
         * Pulling from custom fields `__@nonsale price = option name: option value[; option name: option value; ...]`.
         * Populated in `updateModifiersView()`.
         * @type {{ [optionId: number]: { [valueId: number]: number } }}
         */
        this.customFieldNoneSales = {};

        // update modifiers modal asap so that not all options are displayed
        this.updateModifiersView({ ignoreAPICall: true });

        $productOptionsEl.trigger('change');
    }

    async updateModifiersView({ ignoreAPICall = false } = {}) {
        const $form = this.$scope.find('[data-cart-item-add]');
        const $productOptionsEl = $form.find('[data-product-option-change]');
        const $modifiersModalBack = $productOptionsEl.find('[data-eyeva-modifiers-modal-back]');
        const $modifiersModalOptions = $productOptionsEl.find('[data-eyeva-modifiers-modal-options]');
        const $modifiersModalSummary = $productOptionsEl.find('[data-eyeva-modifiers-modal-summary]').empty();
        const $modifiersModalTitle = $productOptionsEl.find('[data-eyeva-modifiers-modal-title]').empty();
        const $modifiersModalFooter = $productOptionsEl.find('[data-eyeva-modifiers-modal-footer]');
        const $modifiersModalContinue = $productOptionsEl.find('[data-eyeva-modifiers-modal-continue]').hide();
        const $modifiersModalSubtotal = $productOptionsEl.find('[data-eyeva-modifiers-modal-footer-subtotal]');
        const $addToCartWrapper = $productOptionsEl.find('[data-eyeva-add-to-cart-wrapper]').hide();
        const formData = new FormData($form[0]);

        this.console.log('ProductDetails - formData: ', Array.from(formData.entries()));

        /**
         * Current option id that appears alone without any group.
         * @type {number|undefined}
         */
        let currentOptionId;

        /**
         * Current group name that the option belongs to.
         * Group name that appears custom field `__@group (group name)`
         * @type {string|undefined}
         */
        let currentGroupName;

        /**
         * Option ids of option names appear in the value of custom field `__@group`.
         * @example
         *   Custom field: `__@group Select a prescription type` = `prescription type`
         * @type {Array<number>}
         */
        let currentGroupOptionIds = [];

        /**
         * option ids should be hidden
         * @type {number[]}
         */
        const hideOptionIds = [];

        /**
         * @type {Array<{optionId: number, valueId: number}>}
         */
        const hideOptionValues = [];

        /**
         * Tooltips for options and option values extracted from custom fields `__@tooltip name[:value] = tooltip`
         * @type {Object<number, { tooltip: string, valueTooltips: { [valueId: number]: string } }>
         */
        const tooltips = {};

        /**
         * Tooltip headings for option values extracted from custom fields `__@tooltip_heading name:value = tooltip heading`
         * @type {{ [optionId: number]: { [valueId: number]: string } }}
         * @example { 2: { 123: 'Tooltip Heading' } }
         */
        const tooltipHeadings = {};

        /**
         * Non-sale prices for option values.
         * Can be overridden by custom fields `__@nonsale price = option name: option value[; option name: option value; ...]`
         * @type {{ [optionId: number]: { [valueId: number]: number } }}
         */
        const noneSales = {};

        /**
         * Option renames extracted from custom fields `__@rename option name = new name`
         * @type {{ [optionId: number]: string }}
         * @example { 123: 'New Name', 456: 'Another Name' }
         */
        const optionRenames = {};

        this.productOptions.filter(({ state }) => state === 'modifier').forEach(option => {
            this.console.log('%cProductDetails - option: ', 'color: cyan', option.display_name);

            let hideOption = false;

            /**
             * First group name that the option belongs to.
             * Group name that appears custom field `__@group (group name)`
             * @type {string|undefined}
             */
            let groupName;

            /**
             * Option ids of option names appear in the value of custom field `__@group`.
             * @example
             *   Custom field: `__@group Select a prescription type` = `prescription type`
             * @type {Array<number>|undefined}
             */
            let groupOptionIds;

            // determine if this option is a radio type and has 'none' value checked
            const isNoneRadioChecked = $form.find(`input[type="radio"][name="attribute[${option.id}]"][value=""]`).prop('checked');

            // determine if this option is a file type and already shown after modal shown
            const $file = $form.find(`input[type="file"][name="attribute[${option.id}]"]`);
            const isFileShown = $file.length > 0 && $file.attr('data-field-shown');

            // determine if this option is a optional date type and already shown after modal shown
            const $date = $form.find(`select[name="attribute[${option.id}][day]"], select[name="attribute[${option.id}][month]"], select[name="attribute[${option.id}][year]"]`);
            const isOptionalDateShown = $date.length > 0 && !option.required && $date.attr('data-field-shown');

            // determine if this option is a optional select type and already shown after modal shown
            const $select = $form.find(`select[name="attribute[${option.id}]"]`);
            const isOptionalSelectShown = $select.length > 0 && !option.required && $select.attr('data-field-shown');

            // determine if this option is a optional text / multiline / number type and already shown after modal shown
            const $text = $form.find('input[type="text"], input[type="number"], textarea').filter(`[name="attribute[${option.id}]"]`);
            const isOptionalTextShown = $text.length > 0 && !option.required && $text.attr('data-field-shown');

            const formValue = formData.get(`attribute[${option.id}]`);

            if (formValue && !(formValue instanceof File)
                || isNoneRadioChecked || isFileShown || isOptionalDateShown || isOptionalSelectShown || isOptionalTextShown
                || formData.get(`attribute[${option.id}][day]`)
                || formData.get(`attribute[${option.id}][month]`)
                || formData.get(`attribute[${option.id}][year]`)) {
                // hide option if the option is selected
                hideOption = true;
                this.console.log('ProductDetails - hideOption: ', hideOption);
            }

            if (!hideOption) {
                this.customFields.forEach(customField => {
                    // match __@hide_if (.*)
                    const hideIfMatch = this.customFieldMatchHideIf({ customField, formData, option });
                    if (hideIfMatch) {
                        hideOption = hideIfMatch.hideOption;
                        hideOptionValues.push(...hideIfMatch.hideOptionValues);
                    }

                    if (!groupName && !hideOption) {
                        // match __@group (.*)
                        const groupMatch = this.customFieldMatchGroup({ customField, option });
                        if (groupMatch) {
                            groupName = groupMatch.groupName;
                            groupOptionIds = groupMatch.groupOptionIds;
                        }
                    }

                    if (!hideOption) {
                        // match __@tooltip name[:value] = tooltip
                        const tooltipMatch = this.customFieldMatchTooltip({ customField, option });
                        if (tooltipMatch) {
                            tooltips[option.id] = Object.assign({}, tooltips[option.id], {
                                tooltip: tooltipMatch.tooltip || tooltips[option.id]?.tooltip,
                                valueTooltips: Object.assign({}, tooltips[option.id]?.valueTooltips, tooltipMatch.valueTooltips),
                            });
                        }

                        // match __@tooltip_heading name:value = tooltip heading
                        const valueTooltipHeadings = this.customFieldMatchTooltipHeading({ customField, option });
                        if (tooltipHeadings) {
                            tooltipHeadings[option.id] = Object.assign({}, tooltipHeadings[option.id], valueTooltipHeadings);
                        }


                        // match __@rename option name = new name
                        const newName = this.customFieldMatchRename({ customField, option });
                        if (newName) {
                            optionRenames[option.id] = newName;
                        }

                        // match __@nonsale price = option name: option value[; option name: option value; ...]
                        const valueNonSales = this.customFieldMatchNonSale({ customField, option });
                        Object.assign(noneSales, {
                            [option.id]: {
                                ...noneSales[option.id],
                                ...valueNonSales,
                            },
                        });
                    }
                });
            }

            if (!hideOption) {
                if (currentGroupOptionIds.length === 0 && !currentOptionId) {
                    // no visible option before
                    if (groupName) {
                        // option group
                        currentGroupName = groupName;
                        currentGroupOptionIds = groupOptionIds;
                        this.console.log(`ProductDetails - currentGroupName: ${currentGroupName}, currentGroupOptionIds: ${currentGroupOptionIds}`);
                    } else {
                        // stand-alone option
                        currentOptionId = option.id;
                        this.console.log(`ProductDetails - currentOptionId: ${currentOptionId}`);
                    }
                }
            }

            if (hideOption) {
                hideOptionIds.push(option.id);
            }
        });

        if (currentGroupOptionIds.length > 0 && hideOptionIds.length > 0) {
            // remove hidden options from the current group
            currentGroupOptionIds = currentGroupOptionIds.filter(id => !hideOptionIds.includes(id));
            this.console.log(`ProductDetails - currentGroupOptionIds: ${currentGroupOptionIds}`);
        }

        this.console.log('ProductDetails - currentOptionId: ', currentOptionId);
        this.console.log('ProductDetails - currentGroupName: ', currentGroupName);
        this.console.log('ProductDetails - currentGroupOptionIds: ', currentGroupOptionIds);
        this.console.log('ProductDetails - hideOptionValues: ', hideOptionValues);

        // Store non-sale prices of option values
        // to use when updating option prices only without update the whole modifiers view
        Object.assign(this.customFieldNoneSales, noneSales);

        /**
         * IDs of options that should be displayed at the current step
         * @type {Array<number>}
         */
        // eslint-disable-next-line no-nested-ternary
        const showOptionIds = currentGroupOptionIds.length > 0 ? currentGroupOptionIds
            : (currentOptionId ? [currentOptionId] : []);

        // store the shown option ids of the current step to the stack
        // if not the same as the previous step.
        // this is used to navigate back to the previous step.
        if (this.stackedShowOptionIds.length === 0
            || !areArraysEqualUnordered(this.stackedShowOptionIds.slice(-1)[0], showOptionIds)) {
            this.stackedShowOptionIds.push(showOptionIds);
            this.console.log('ProductDetails - stackedShowOptionIds: ', this.stackedShowOptionIds);
        }

        // show / hide back button
        if (this.stackedShowOptionIds.length > 1) {
            $modifiersModalBack.show();
        } else {
            $modifiersModalBack.hide();
        }

        // show footer, and hide it if no more option shown
        if (showOptionIds.length > 0) {
            $modifiersModalFooter.show();
        } else {
            $modifiersModalFooter.hide();
        }


        // Update modal title from the custom field `__@group (group name)` or option display name
        if (currentGroupName) {
            $modifiersModalTitle.html(currentGroupName);
        } else if (showOptionIds.length === 1) {
            const title = optionRenames[showOptionIds[0]] || this.productOptions.find(({ id }) => id === showOptionIds[0])?.display_name;
            $modifiersModalTitle.text(title);
        }

        // hide the option name when here is only 1 option shown in the current step
        if (showOptionIds.length === 1) {
            $modifiersModalOptions.find(`[data-product-attribute-id="${showOptionIds[0]}"] .form-label`).first().hide();
        } else {
            $modifiersModalOptions.find('[data-product-attribute-id] .form-label').first().show();
        }

        // Display current product options
        $modifiersModalOptions.find('[data-product-attribute-id]')
            .addClass('_show')
            .filter((_, el) => !showOptionIds.includes(Number($(el).data('product-attribute-id'))))
            .removeClass('_show');

        // Rename the shown options if needed
        showOptionIds.forEach(optionId => {
            const newName = optionRenames[optionId];
            if (newName) {
                $modifiersModalOptions.find(`[data-product-attribute-id="${optionId}"] .form-label`).first().html(newName);
            }
        });

        // Show tooltip for group
        if (currentGroupName) {
            let groupTooltip = '';

            this.customFields.forEach(customField => {
                if (!groupTooltip) {
                    groupTooltip = this.customFieldMatchTooltipGroup({ customField, groupName: currentGroupName });
                }
            });

            if (groupTooltip) {
                const $tooltip = $(this.optionTooltipTemplate.replace('<%tooltip%>', groupTooltip));
                $modifiersModalTitle.append($tooltip);
            }
        }

        // Show tooltip for options and option values
        if (showOptionIds.length > 0) {
            this.showOptionTooltips($modifiersModalOptions, $modifiersModalTitle, tooltips, tooltipHeadings, showOptionIds);
        }

        // Populate default values for shown options and display Continue button if needed.
        if (showOptionIds.length > 0) {
            this.populateDefaultOptionValues(showOptionIds, $modifiersModalOptions, $modifiersModalContinue);
        }

        // Display prices for options and option values
        if (!ignoreAPICall) {
            if (showOptionIds.length > 0) {
                this.displayShowOptionPricesPreloader($modifiersModalOptions, $modifiersModalSubtotal, showOptionIds);
            } else {
                // show summary but preloader for prices
                this.showSummary($modifiersModalOptions, $modifiersModalSummary, $modifiersModalSubtotal, $modifiersModalTitle, $addToCartWrapper, formData, true);
            }

            await this.showOptionPrices($modifiersModalOptions, $modifiersModalSubtotal, showOptionIds, formData, noneSales);
        }

        // Show summary content if no option visible on the current step
        if (showOptionIds.length === 0) {
            this.showSummary($modifiersModalOptions, $modifiersModalSummary, $modifiersModalSubtotal, $modifiersModalTitle, $addToCartWrapper, formData);
        }
    }

    /**
     * Validate required variant options and report error for the first invalid option.
     *
     * @returns {boolean}
     */
    validateVariantOptions() {
        const $form = this.$scope.find('[data-cart-item-add]');
        const formData = new FormData($form[0]);

        const invalid = this.productOptions.filter(({ state }) => state === 'variant_option').find(option => {
            if (option.required) {
                const value = formData.get(`attribute[${option.id}]`);
                if (!value) {
                    this.console.log(`ProductDetails - Required option "${option.display_name}" is not selected`);
                    return true;
                }
            }
            return false;
        });

        if (invalid) {
            const el = $form.find(`[name="attribute[${invalid.id}]"]`)[0];
            el.reportValidity();
            return false;
        }

        return true;
    }

    goBackStep() {
        const $form = this.$scope.find('[data-cart-item-add]');
        const $productOptionsEl = $form.find('[data-product-option-change]');
        const $modifiersModalOptions = $productOptionsEl.find('[data-eyeva-modifiers-modal-options]');

        const showOptionIds = [
            ...this.stackedShowOptionIds.pop(), // current step's shown option ids
            ...this.stackedShowOptionIds.pop(), // previous step's shown option ids
        ];

        // reset values of shown option ids in current step & previous step
        // to display previous step again.
        if (showOptionIds) {
            const $option = $modifiersModalOptions.find('[data-product-attribute-id]')
                .filter((_i, el) => showOptionIds.includes(Number($(el).attr('data-product-attribute-id'))));

            $option.find('input, select, textarea')
                .not('[type="checkbox"], [type="radio"], [type="file"]')
                .filter('[name^="attribute"]').val('');

            $option.find('input[type="checkbox"], input[type="radio"]')
                .filter('[name^="attribute"]').prop('checked', false);

            $option.find('[name^="attribute"]').removeAttr('data-field-shown');

            this.manualUpdateModifiersView = false;

            // immediately update display previous options on modifiers modal
            this.updateModifiersView({ ignoreAPICall: true });

            // trigger change event to update prices & data belongs to BC
            $productOptionsEl.trigger('change');
        }
    }

    /**
     * Check if the option should be hidden based on the custom field `__@hide_if`
     *
     * @param {{
     *   customField: {
     *     name: string,
     *     value: string,
     *   },
     *   formData: FormData,
     *   option: {
     *     id: Number,
     *     display_name: string,
     *     values: [{
     *       id: Number,
     *       label: string,
     *     }]
     *   }
     * }} param0
     * @returns {{ hideOption: boolean, hideOptionValues: Array<{optionId: number, valueId: number}> } | undefined}
     */
    customFieldMatchHideIf({ customField, formData, option }) {
        this.console.log(`ProductDetails - customFieldMatchHideIf: cf_name = ${customField.name} ; op_name = ${option.display_name}`);
        let hideOption = false;
        const hideOptionValues = [];

        const m = customField.name.match(/^__@hide_if\s+(.*)$/i);
        if (!m) return;

        /**
         * @type {Array<{name: string, value: string}>}
         */
        const hideIfOptions = m[1].split(';').map(kv => kv.split(':', 2)).map(([key, value]) => ({
            name: key.trim(),
            value: value ? value.trim() : undefined,
        }));
        this.console.log(`ProductDetails - hideIfOptions: ${hideIfOptions.map(({ name, value }) => (value ? `${name}: ${value}` : name)).join('; ')}`);

        /**
         * @type {Array<{name: string, value: string}>}
         */
        const thenOptions = customField.value.split(';').map(kv => kv.split(':', 2)).map(([key, value]) => ({
            name: key.trim(),
            value: value ? value.trim() : undefined,
        }));
        this.console.log(`ProductDetails - thenOptions: ${thenOptions.map(({ name, value }) => (value ? `${name}: ${value}` : name)).join('; ')}`);

        /**
         * Flag to check if option:value in the custom field `__@hide_if` matches with current form data
         * @type {boolean}
         */
        let hideIfMatch = false;

        // check whether option:value in custom field `__@hide_if` matches with current form data
        hideIfOptions.forEach(({ name, value }) => {
            const [optionId, valueId] = this.findOptionValue(name, value);
            const formValue = Number(formData.getAll(`attribute[${optionId}]`).slice(-1)[0]);

            if (formValue === valueId) {
                hideIfMatch = true;
            }
        });
        this.console.log('ProductDetails - hideIfMatch: ', hideIfMatch);

        if (hideIfMatch) {
            // Check if the current option should be hidden when matching with the value of the custom field `__@hide_if`
            thenOptions.forEach(({ name, value }) => {
                if (equalOptionString(option.display_name, name)) {
                    if (!value) {
                        // if custom field value contain option name without value, then hide the whole option
                        hideOption = true;
                        this.console.log('ProductDetails - hideOption: ', hideOption);
                    } else if (option.values) {
                        // otherwise, hide the specific values
                        option.values.forEach(({ label, id }) => {
                            if (equalOptionString(label, value)) {
                                const _hideOptionValue = {
                                    optionId: option.id,
                                    valueId: id,
                                };
                                hideOptionValues.push(_hideOptionValue);
                                this.console.log('ProductDetails - hideOptionValue: ', _hideOptionValue);
                            }
                        });
                    }
                }
            });
        }

        if (hideOption || hideOptionValues.length > 0) {
            return { hideOption, hideOptionValues };
        }
    }

    /**
     * Check if the option belongs to the group in the custom field `__@group`
     *
     * @param {{
     *   customField: {
     *     name: string,
     *     value: string,
     *   },
     *   option: {
     *     id: Number,
     *   },
     * @returns {{ groupName: string, groupOptionIds: Array<number> } | undefined}
     */
    customFieldMatchGroup({ customField, option }) {
        const m = customField.name.match(/^__@group\s+(.*)$/i);
        if (m) {
            const groupName = m[1].trim();
            const groupOptionIds = customField.value.split(';').map(s => s.trim()) // option names
                .map(optionName => this.productOptions.find(({ display_name }) => equalOptionString(display_name, optionName))?.id)
                .filter(id => id);

            if (groupOptionIds.includes(option.id)) {
                // option belongs to the group in this custom field
                this.console.log(`ProductDetails - groupName: ${groupName}, groupOptionIds: ${groupOptionIds}`);
                return { groupName, groupOptionIds };
            }
        }
    }

    /**
     * Check if the option value has a tooltip in the custom field `__@tooltip name[:value] = tooltip`
     *
     * @param {{
     *   customField: {
     *     name: string,
     *     value: string,
     *   }
     *   option: {
     *     display_name,
     *     values: [{
     *       label
     *     }]
     *   }
     * }} param0
     * @returns {{ tooltip: string } | { valueTooltips: { [valueId: number]: string } } | undefined}
     */
    customFieldMatchTooltip({ customField, option }) {
        const m = customField.name.match(/^__@tooltip\s+(.*)$/i);
        if (m) {
            const [name, value] = m[1].split(':', 2).map(s => s.trim());
            const tooltip = customField.value;

            // stop if not match option name
            if (!name || !equalOptionString(option.display_name, name)) return;

            if (!value) {
                // tooltip for option name
                this.console.log(`ProductDetails - tooltip for option "${name}" = """${tooltip}"""`);
                return { tooltip };
            }

            const valueTooltips = {};

            // tooltip for option value
            option.values.forEach(({ id, label }) => {
                if (equalOptionString(label, value)) {
                    this.console.log(`ProductDetails - tooltip for option "${name} : ${value}" = """${tooltip}"""`);
                    valueTooltips[id] = tooltip;
                }
            });

            return { valueTooltips };
        }
    }

    /**
     * Check if the group has a tooltip in the custom field `__@tooltip (group name) = tooltip`
     * @param {{
     *   customField: {
     *     name: string,
     *     value: string,
     *   },
     *   groupName: string
     * }} param0
     * @returns {string | undefined}
     */
    customFieldMatchTooltipGroup({ customField, groupName }) {
        const m = customField.name.match(/^__@tooltip\s+(.*)$/i);
        if (m) {
            const name = m[1].trim();
            const tooltip = customField.value;

            // stop if not match group name
            if (!name || !equalOptionString(groupName, name)) return;

            this.console.log(`ProductDetails - tooltip for group "${name}" = """${tooltip}"""`);
            return tooltip;
        }
    }

    /**
     * Check if the option value has a tooltip heading in the custom field `__@tooltip_heading name:value = tooltip heading`
     *
     * @param {{
     *   customField: {
     *     name: string,
     *     value: string,
     *   },
     *   option: {
     *     display_name: string,
     *     values: [{
     *       id: number,
     *       label: string,
     *     }]
     *   }
     * }} param0
     * @returns {{ [valueId: number]: string } | undefined}
     */
    customFieldMatchTooltipHeading({ customField, option }) {
        const m = customField.name.match(/^__@tooltip_heading\s+(.*)$/i);
        if (m) {
            const [name, value] = m[1].split(':', 2).map(s => s.trim());
            const heading = customField.value;

            // stop if not match option name or not value
            if (!name || !value || !equalOptionString(option.display_name, name)) return;

            const valueTooltipHeadings = {};

            option.values.forEach(({ id, label }) => {
                if (equalOptionString(label, value)) {
                    this.console.log(`ProductDetails - tooltip heading for option "${name} : ${value}" = """${heading}"""`);
                    valueTooltipHeadings[id] = heading;
                }
            });

            return valueTooltipHeadings;
        }
    }

    /**
     * Check if the option name contains in the custom field `__@rename option name = new name`
     * and return the new name
     *
     * @param {Object} param0
     * @param {Object} param0.customField
     * @param {string} param0.customField.name
     * @param {string} param0.customField.value
     * @param {Object} param0.option
     * @param {string} param0.option.display_name
     * @returns {string | undefined} new option name
     */
    customFieldMatchRename({ customField, option }) {
        const m = customField.name.match(/^__@rename\s+(.*)$/i);
        if (m) {
            const name = m[1].trim();
            const newName = String(customField.value).trim();

            // stop if not match option name
            if (!name || !equalOptionString(option.display_name, name)) return;

            this.console.log(`ProductDetails - rename option "${name}" to "${newName}"`);
            return newName;
        }
    }

    /**
     * Check if the option value has a non-sale price in the custom field
     * `__@nonsale price = option name: option value[; option name: option value; ...]`
     *
     * @param {{
     *   customField: {
     *     name: string,
     *     value: string,
     *   },
     *   option: {
     *     display_name: string,
     *     values: [{
     *       id: number,
     *       label: string,
     *     }]
     *   },
     * }} param0
     * @returns {{ [valueId: number]: number }}
     */
    customFieldMatchNonSale({ customField, option }) {
        const valueNonSales = {};
        const m = customField.name.match(/^__@nonsale\s+(.*)$/i);
        if (m) {
            const price = Number(m[1].trim());

            // split each (option name: option value) pair separated by ";"
            customField.value.split(';').forEach(kv => {
                // split option name : option value in custom field value separated by ":"
                const [optionName, valueLabel] = kv.split(':', 2).map(s => s.trim());

                if (equalOptionString(option.display_name, optionName)) {
                    // option name in custom field match with current option

                    // find the option value ID that matches with the value label in custom field
                    const valueId = option.values.find(({ label }) => equalOptionString(label, valueLabel))?.id;
                    if (valueId) {
                        // return non-sale price corresponding to the option value ID
                        valueNonSales[valueId] = price;
                    }
                }
            });
        }
        return valueNonSales;
    }

    /**
     * Fetch store settings including tax and active currency
     *
     * @returns {Promise<{
     *   tax: { pdp: number },
     *   currency: {
     *     code: string,
     *     display: { decimalPlaces: number, decimalToken: string, symbol: string, symbolPlacement: string, thousandsToken: string },
     *     exchangeRate: number, name: string,
     *   },
     *   defaultCurrency: {
     *     code: string,
     *     display: { decimalPlaces: number, decimalToken: string, symbol: string, symbolPlacement: string, thousandsToken: string },
     *     exchangeRate: number, name: string,
     *   },
     * }>
     */
    async fetchSettings() {
        if (cachedSettings) return cachedSettings;

        const resp = await $.ajax({
            url: '/graphql',
            method: 'POST',
            contentType: 'application/json',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.context.graphQLToken}`,
            },
            xhrFields: {
                withCredentials: true,
            },
            data: JSON.stringify({
                query: `
                    query (
                        $currencyCode: currencyCode!
                        $defaultCurrencyCode: currencyCode!
                    ) {
                        site {
                            currency(currencyCode: $currencyCode) {
                                ...CurrencyFields
                            }
                            defaultCurrency: currency(currencyCode: $defaultCurrencyCode) {
                                ...CurrencyFields
                            }
                            settings {
                                tax {
                                    pdp
                                }
                            }
                        }
                    }
                    fragment CurrencyFields on Currency {
                        code
                        display {
                            decimalPlaces
                            decimalToken
                            symbol
                            symbolPlacement
                            thousandsToken
                        }
                        exchangeRate
                        name
                    }
                `,
                variables: {
                    currencyCode: this.context.active_currency_code,
                    defaultCurrencyCode: this.context.default_currency_code,
                },
            }),
        });

        cachedSettings = {
            ...resp.data.site.settings,
            currency: resp.data.site.currency,
        };

        return cachedSettings;
    }

    /**
     * Fetch option prices
     *
     * @param {Array<{ id: number, values: Array<{ id: number }> }>} showOptions
     * @param {FormData} formData
     * @returns {Promise<Array<{
     *   optionId: number|null,
     *   valueId: number|null,
     *   pricesWithTax: {
     *     basePrice: { value: number, currencyCode: string },
     *     price: { value: number, currencyCode: string },
     *     salePrice: { value: number, currencyCode: string },
     *   },
     *   pricesWithoutTax: {
     *     basePrice: { value: number, currencyCode: string },
     *     price: { value: number, currencyCode: string },
     *     salePrice: { value: number, currencyCode: string },
     *   },
     *   adjustedPricesWithTax: {
     *     basePrice: { value: number, currencyCode: string },
     *     price: { value: number, currencyCode: string },
     *     nonSalePriceValue: number,
     *   },
     *   adjustedPricesWithoutTax: {
     *     basePrice: { value: number, currencyCode: string },
     *     price: { value: number, currencyCode: string },
     *     nonSalePriceValue: number,
     *   },
     * }>>}
     */
    async fetchOptionPrices(showOptions, formData) {
        const selectedOptionValueIds = [];

        formData.entries().forEach(([key, value]) => {
            const m = key.match(/^attribute\[(\d+)\]$/);
            if (m) {
                const optionEntityId = Number(m[1]);
                const valueEntityId = Number(value);

                if (valueEntityId && !showOptions.find(({ id }) => id === optionEntityId)) {
                    selectedOptionValueIds.push({ optionEntityId, valueEntityId });
                }
            }
        });

        const promises = [
            // fetch already selected options' prices
            () => this.fetchOptionPrice(selectedOptionValueIds),
        ];

        showOptions.forEach(option => {
            const values = option.values || (option.value ? [{ id: option.value }] : []);
            values.forEach(value => {
                // fetch current option value's prices
                promises.push(() =>
                    this.fetchOptionPrice([
                        ...selectedOptionValueIds,
                        {
                            optionEntityId: option.id,
                            valueEntityId: value.id,
                        },
                    ]).then(product => ({
                        optionId: option.id,
                        valueId: value.id,
                        ...product,
                    })));
            });
        });

        const [prev, ...selections] = await handlePromisesWithLimit(promises);

        selections.forEach(selection => {
            if (selection.pricesWithTax) {
                // calculate the non-sale price based on the previous price and the current price
                // consider all now price and regular price
                let nonSalePriceWithTax = selection.pricesWithTax?.price.value - prev.pricesWithTax?.price.value
                    || selection.pricesWithTax?.basePrice.value - prev.pricesWithTax?.basePrice.value
                    // || selection.pricesWithTax?.price.value - selection.pricesWithTax?.basePrice.value
                    || null;

                // remove non-sale price if it's less than the current price
                if (nonSalePriceWithTax <= selection.pricesWithTax.price.value - prev.pricesWithTax.price.value) {
                    nonSalePriceWithTax = null;
                }

                // eslint-disable-next-line no-param-reassign
                selection.adjustedPricesWithTax = {
                    basePrice: {
                        ...selection.pricesWithTax.basePrice,
                        value: selection.pricesWithTax.basePrice.value - prev.pricesWithTax.basePrice.value,
                    },
                    price: {
                        ...selection.pricesWithTax.price,
                        value: selection.pricesWithTax.price.value - prev.pricesWithTax.price.value,
                    },
                    nonSalePriceValue: nonSalePriceWithTax,
                };
            }

            if (selection.pricesWithoutTax) {
                // calculate the non-sale price based on the previous price and the current price
                // consider all now price and regular price
                let nonSalePriceWithoutTax = selection.pricesWithoutTax?.price.value - prev.pricesWithoutTax?.price.value
                    || selection.pricesWithoutTax?.basePrice.value - prev.pricesWithoutTax?.basePrice.value
                    // || selection.pricesWithoutTax?.price.value - selection.pricesWithoutTax?.basePrice.value
                    || null;

                // remove non-sale price if it's less than the current price
                if (nonSalePriceWithoutTax <= selection.pricesWithoutTax.price.value - prev.pricesWithoutTax.price.value) {
                    nonSalePriceWithoutTax = null;
                }

                // eslint-disable-next-line no-param-reassign
                selection.adjustedPricesWithoutTax = {
                    basePrice: {
                        ...selection.pricesWithoutTax.basePrice,
                        value: selection.pricesWithoutTax.basePrice.value - prev.pricesWithoutTax.basePrice.value,
                    },
                    price: {
                        ...selection.pricesWithoutTax.price,
                        value: selection.pricesWithoutTax.price.value - prev.pricesWithoutTax.price.value,
                    },
                    nonSalePriceValue: nonSalePriceWithoutTax,
                };
            }
        });

        this.console.log('ProductDetails - fetchOptionPrices returns: ', selections);
        return [prev, ...selections];
    }

    /**
     * Fetch product price from specific options
     *
     * @param {Array<{ optionEntityId: number, valueEntityId: number}>} optionValueIds
     * @returns {Promise<{ pricesWithTax: { basePrice: { value: number, currencyCode: string }, price: { value: number, currencyCode: string }, salePrice: { value: number, currencyCode: string } }, pricesWithoutTax: { basePrice: { value: number, currencyCode: string }, price: { value: number, currencyCode: string }, salePrice: { value: number, currencyCode: string } } }>
     */
    async fetchOptionPrice(optionValueIds) {
        const cacheKey = JSON.stringify(optionValueIds);

        if (!this.fetchOptionPriceCache[cacheKey]) {
            const resp = await $.ajax({
                url: '/graphql',
                method: 'POST',
                contentType: 'application/json',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.context.graphQLToken}`,
                },
                xhrFields: {
                    withCredentials: true,
                },
                data: JSON.stringify({
                    query: `
                        query ($productId: Int!, $optionValueIds: [OptionValueId!], $currencyCode: currencyCode!) {
                            site {
                                product(entityId: $productId, optionValueIds: $optionValueIds) {
                                    pricesWithTax: prices(currencyCode: $currencyCode, includeTax: true) {
                                        ...PriceFields
                                    }
                                    pricesWithoutTax: prices(currencyCode: $currencyCode, includeTax: false) {
                                        ...PriceFields
                                    }
                                }
                            }
                        }
                        fragment MoneyFields on Money {
                            value
                            currencyCode
                        }
                        fragment PriceFields on Prices {
                            basePrice {
                                ...MoneyFields
                            }
                            price {
                                ...MoneyFields
                            }
                            salePrice {
                                ...MoneyFields
                            }
                        }
                    `,
                    variables: {
                        currencyCode: this.context.active_currency_code,
                        productId: this.productId,
                        optionValueIds,
                    },
                }),
            });

            this.fetchOptionPriceCache[cacheKey] = resp.data.site.product;
        }

        return this.fetchOptionPriceCache[cacheKey];
    }

    /**
     * Display tooltips to the corresponding shown options and option values
     *
     * @param {jQuery} $modifiersModalOptions
     * @param {jQuery} $modifiersModalTitle
     * @param {{ [optionId: number]: { tooltip: string, valueTooltips: { [valueId: number]: string } } }} tooltips
     * @param {{ [optionId: number]: { [valueId: number]: string } }} tooltipHeadings
     * @param {Array<number>} showOptionIds option ids to show tooltips
     */
    showOptionTooltips($modifiersModalOptions, $modifiersModalTitle, tooltips, tooltipHeadings, showOptionIds) {
        // Display tooltip
        Object.entries(tooltips).forEach(([optionId, { tooltip, valueTooltips }]) => {
            if (!showOptionIds.includes(Number(optionId))) return;

            const $option = $modifiersModalOptions.find(`[data-product-attribute-id="${optionId}"]`);

            if (tooltip) {
                const $tooltip = $(this.optionTooltipTemplate.replace('<%tooltip%>', tooltip))
                    .attr('data-eyeva-product-option-tooltip-id', optionId);

                $option.find(`[data-eyeva-product-option-tooltip-id="${optionId}"]`).remove();

                const $label = $option.find('label').first();

                if ($label.length > 0) {
                    $label.after($tooltip);
                } else {
                    $option.prepend($tooltip);
                }
            }

            Object.entries(valueTooltips).forEach(([valueId, valueTooltip]) => {
                const $value = $option.find(`[data-product-attribute-value="${valueId}"]`);
                const $tooltip = $(this.optionValueTooltipTemplate.replace('<%tooltip%>', valueTooltip))
                    .attr('data-eyeva-product-option-tooltip-id', `${optionId}-${valueId}`);

                $option.find(`[data-eyeva-product-option-tooltip-id="${optionId}-${valueId}"]`).remove();
                $value.after($tooltip);
            });
        });

        // if only 1 option shown at current step,
        // then move its tooltip to the modal title
        if (showOptionIds.length === 1) {
            const $tooltip = $modifiersModalOptions.find(`[data-eyeva-product-option-tooltip-id="${showOptionIds[0]}"]`);
            $modifiersModalTitle.append($tooltip);
        }

        // Display tooltip heading
        Object.entries(tooltipHeadings)
            .filter(([optionId]) => showOptionIds.includes(Number(optionId)))
            .forEach(([optionId, valueTooltipHeadings]) => {
                const $option = $modifiersModalOptions.find(`[data-product-attribute-id="${optionId}"]`);

                Object.entries(valueTooltipHeadings).forEach(([valueId, valueTooltipHeading]) => {
                    const $value = $option.find(`[data-product-attribute-value="${valueId}"]`);
                    const $tooltipHeading = $(this.optionValueTooltipHeadingTemplate.replace('<%heading%>', valueTooltipHeading))
                        .attr('data-eyeva-product-option-tooltip-heading-id', `${optionId}-${valueId}`);

                    $value.find(`[data-eyeva-product-option-tooltip-heading-id="${optionId}-${valueId}"]`).remove();
                    $value.append($tooltipHeading);
                });
            });
    }

    renderInlineOptionTooltips() {
        const $productOptionsEl = this.$scope.find('[data-product-option-change]').first();

        if (!$productOptionsEl.length) {
            return;
        }

        $productOptionsEl.find('[data-eyeva-product-option-tooltip-id], [data-eyeva-product-option-tooltip-heading-id]').remove();

        if (!this.productOptions.length || !this.customFields.length) {
            return;
        }

        const optionIds = $productOptionsEl.find('[data-product-attribute-id]')
            .map((_index, el) => Number($(el).data('product-attribute-id')))
            .get();
        const tooltips = {};
        const tooltipHeadings = {};

        this.productOptions
            .filter(({ id }) => optionIds.includes(id))
            .forEach(option => {
                this.customFields.forEach(customField => {
                    const tooltipMatch = this.customFieldMatchTooltip({ customField, option });
                    if (tooltipMatch) {
                        tooltips[option.id] = Object.assign({}, tooltips[option.id], {
                            tooltip: tooltipMatch.tooltip || tooltips[option.id]?.tooltip,
                            valueTooltips: Object.assign({}, tooltips[option.id]?.valueTooltips, tooltipMatch.valueTooltips),
                        });
                    }

                    const valueTooltipHeadings = this.customFieldMatchTooltipHeading({ customField, option });
                    if (valueTooltipHeadings) {
                        tooltipHeadings[option.id] = Object.assign({}, tooltipHeadings[option.id], valueTooltipHeadings);
                    }
                });
            });

        this.showInlineOptionTooltips($productOptionsEl, tooltips, tooltipHeadings);
    }

    renderSpecTooltips() {
        const prefix = '__@spec_tooltip ';

        // ---------------------------------------------------------------
        // MASTER SPEC TOOLTIPS
        // Add entries here to show a tooltip on every product page for
        // that spec row automatically. No custom field needed per product.
        // Per-product custom fields (e.g. __@spec_tooltip Memory) will
        // override these values if present.
        // ---------------------------------------------------------------
        const masterTooltips = {
            'Memory': 'Not sure if this is the right amount of memory for your needs? Refer to our blog on <a href="https://www.bobjohnson.com/blog/how-much-ram-do-you-actually-need-in-a-rugged-laptop/" target="_blank">RAM Needs in a rugged laptop</a>.',
            // 'Storage': 'The drive where your files and OS are stored.',
            // 'Processor': 'The CPU is the brain of the computer.',
        };

        // Remove any previously injected spec tooltips
        this.$scope.find('[data-eyeva-spec-tooltip]').remove();

        // Build final map: start with master defaults, override with per-product custom fields
        const resolvedTooltips = { ...masterTooltips };

        this.customFields.forEach(({ name, value }) => {
            if (!name.startsWith(prefix)) {
                return;
            }

            const specName = name.slice(prefix.length).trim();

            if (specName && value) {
                resolvedTooltips[specName] = value;
            }
        });

        Object.entries(resolvedTooltips).forEach(([specName, tooltipText]) => {
            const $dd = this.$scope.find(`[data-spec-name="${specName}"]`).first();

            if (!$dd.length) {
                return;
            }

            const $tooltip = $(this.optionTooltipTemplate.replace('<%tooltip%>', tooltipText))
                .attr('data-eyeva-spec-tooltip', specName);

            $dd.append($tooltip);
        });
    }

    showInlineOptionTooltips($productOptionsEl, tooltips, tooltipHeadings) {
        Object.entries(tooltips).forEach(([optionId, { tooltip, valueTooltips = {} }]) => {
            const $option = $productOptionsEl.find(`[data-product-attribute-id="${optionId}"]`);

            if (!$option.length) {
                return;
            }

            if (tooltip) {
                const $tooltip = $(this.optionTooltipTemplate.replace('<%tooltip%>', tooltip))
                    .attr('data-eyeva-product-option-tooltip-id', optionId);
                const $label = $option.find('label').first();

                if ($label.length > 0) {
                    $label.append($tooltip);
                } else {
                    $option.prepend($tooltip);
                }
            }

            Object.entries(valueTooltips).forEach(([valueId, valueTooltip]) => {
                const $value = $option.find(`[data-product-attribute-value="${valueId}"]`).first();

                if (!$value.length) {
                    return;
                }

                const $tooltip = $(this.optionValueTooltipTemplate.replace('<%tooltip%>', valueTooltip))
                    .attr('data-eyeva-product-option-tooltip-id', `${optionId}-${valueId}`);

                if ($value.is('option')) {
                    if ($value.is(':selected')) {
                        const $select = $option.find('select').first();

                        if ($select.length > 0) {
                            $select.after($tooltip);
                        } else {
                            $option.append($tooltip);
                        }
                    }
                } else {
                    $value.after($tooltip);
                }
            });
        });

        Object.entries(tooltipHeadings).forEach(([optionId, valueTooltipHeadings]) => {
            const $option = $productOptionsEl.find(`[data-product-attribute-id="${optionId}"]`);

            if (!$option.length) {
                return;
            }

            Object.entries(valueTooltipHeadings).forEach(([valueId, valueTooltipHeading]) => {
                const $value = $option.find(`[data-product-attribute-value="${valueId}"]`).first();

                if (!$value.length) {
                    return;
                }

                const $tooltipHeading = $(this.optionValueTooltipHeadingTemplate.replace('<%heading%>', valueTooltipHeading))
                    .attr('data-eyeva-product-option-tooltip-heading-id', `${optionId}-${valueId}`);

                if ($value.is('option')) {
                    if ($value.is(':selected')) {
                        const $select = $option.find('select').first();

                        if ($select.length > 0) {
                            $select.after($tooltipHeading);
                        } else {
                            $option.append($tooltipHeading);
                        }
                    }
                } else {
                    $value.append($tooltipHeading);
                }
            });
        });
    }

    /**
     * Populate default values to the shown options and display continue button if necessary.
     * Stop auto update the modifiers view until the continue button is clicked.
     *
     * Continue button is shown if any of the following conditions are met:
     * - options that has default value
     * - checkbox options
     * - optional select options
     * - optional date select options
     * - file input
     * - more than 1 option are shown at the same time
     *
     * @param {Array<Number>} showOptionIds show option ids
     * @param {jQuery} $modifiersModalOptions
     * @param {jQuery} $modifiersModalContinue
     */
    populateDefaultOptionValues(showOptionIds, $modifiersModalOptions, $modifiersModalContinue) {
        const shownOptions = this.productOptions.filter(({ id }) => showOptionIds.includes(id));

        /**
         * options that has default value
         */
        const defaultOptions = shownOptions
            .filter(({ prefill, selected_date, values }) =>
                prefill ||
                selected_date && (selected_date.day || selected_date.month || selected_date.year) ||
                values?.find(({ selected }) => selected));

        /**
         * checkbox type options
         */
        const checkboxOptions = shownOptions
            .filter(({ noValue, value }) => noValue || value);

        /**
         * file type options
         */
        const fileOptions = shownOptions
            .filter(({ partial }) => partial === 'input-file');

        /**
         * date type options
         */
        const dateOptions = shownOptions
            .filter(({ partial }) => partial === 'date');

        /**
         * dropdown type options
         */
        const dropdownOptions = shownOptions
            .filter(({ required, partial }) => !required && partial === 'set-select');

        /**
         * text / multiline / number options
         */
        const textOptions = shownOptions
            .filter(({ partial }) => partial === 'input-text' || partial === 'textarea' || partial === 'input-numbers');

        if (showOptionIds.length > 1
            || defaultOptions.length > 0 || checkboxOptions.length > 0 || fileOptions.length > 0
            || dateOptions.length > 0 || dropdownOptions.length > 0 || textOptions.length > 0) {
            // show continue button
            $modifiersModalContinue.show();

            // stop auto update the modifiers view until the continue button is clicked
            this.manualUpdateModifiersView = true;

            // populate default values to the shown options
            defaultOptions.forEach(({
                id, prefill, selected_date, values,
            }) => {
                const valueId = values?.find(({ selected }) => selected)?.id;
                if (valueId) {
                    $modifiersModalOptions.find('select').filter(`[name="attribute[${id}]"]`).val(valueId);
                    $modifiersModalOptions.find('input[type="radio"]').filter(`[name="attribute[${id}]"][value="${valueId}"]`).prop('checked', true);
                } else if (prefill) {
                    $modifiersModalOptions.find('input, textarea').filter(`[name="attribute[${id}]"]`).val(prefill);
                } else if (selected_date) {
                    if (selected_date.day) {
                        $modifiersModalOptions.find(`select[name="attribute[${id}][day]"]`).val(selected_date.day);
                    }
                    if (selected_date.month) {
                        $modifiersModalOptions.find(`select[name="attribute[${id}][month]"]`).val(selected_date.month);
                    }
                    if (selected_date.year) {
                        $modifiersModalOptions.find(`select[name="attribute[${id}][year]"]`).val(selected_date.year);
                    }
                }
            });

            // populate default values to the shown checkbox options
            checkboxOptions.forEach(({
                id, checked, value, noValue,
            }) => {
                if (checked) {
                    $modifiersModalOptions.find(`input[name="attribute[${id}]"][type="hidden"]`).val(value);
                    $modifiersModalOptions.find(`input[name="attribute[${id}]"][type="checkbox"]`).prop('checked', true);
                } else {
                    $modifiersModalOptions.find(`input[name="attribute[${id}]"][type="hidden"]`).val(noValue);
                    $modifiersModalOptions.find(`input[name="attribute[${id}]"][type="checkbox"]`).prop('checked', false);
                }
            });

            // mark file input, date input, dropdown select, text input as shown
            [...fileOptions, ...dateOptions, ...dropdownOptions, ...textOptions].forEach(({ id }) => {
                $modifiersModalOptions.find(`[name="attribute[${id}]"], [name="attribute[${id}][day]"], [name="attribute[${id}][month]"], [name="attribute[${id}][year]"]`).attr('data-field-shown', 'true');
            });
        }
    }

    displayShowOptionPricesPreloader($modifiersModalOptions, $modifiersModalSubtotal, showOptionIds) {
        const params = { preloader: true };
        const priceHtml = mustache.render(this.optionPriceTemplate, params, null, ['<%', '%>']);
        const priceText = mustache.render(this.optionPricePlainTemplate, params, null, ['<%', '%>']);
        const subtotalHtml = mustache.render(this.subtotalTemplate, params, null, ['<%', '%>']);

        showOptionIds.forEach(optionId => {
            $modifiersModalOptions
                .find(`[data-product-attribute-id="${optionId}"] [data-product-attribute-value]`)
                .each((_i, el) => {
                    const $value = $(el);
                    const valueId = Number($value.attr('data-product-attribute-value'));
                    if (!valueId) return;
                    const $price = $(priceHtml).attr('data-eyeva-product-option-price-id', `${optionId}-${valueId}`);

                    if ($value.is('option')) {
                        // if already has price displayed before?
                        if ($value.data('priceHtml')) {
                            if (!$value.data('originalText')) {
                                $value.data('originalText', $value.text());
                            }
                            $value.text(`${$value.data('originalText')} ${priceText}`);
                        }
                    } else {
                        const $old = $value.find(`[data-eyeva-product-option-price-id="${optionId}-${valueId}"]`);
                        if ($old.length > 0) {
                            $old.remove();
                            const $placeholder = $value.find('[data-eyeva-product-option-price-placeholder]');
                            if ($placeholder.length > 0) {
                                $placeholder.html($price);
                            } else {
                                $value.append($price);
                            }
                        }
                    }
                });
        });

        $modifiersModalSubtotal.html(subtotalHtml);
    }

    /**
     * Display prices to corresponding options and option values
     *
     * @param {jQuery} $modifiersModalOptions
     * @param {jQuery} $modifiersModalSubtotal
     * @param {Array<number>} showOptionIds option ids to show prices
     * @param {FormData} formData
     * @param {{ [optionId: number]: { [valueId: number]: number } }} noneSales option values with non-sale prices
     * @param {boolean} [ignoreUpdateSubtotal=false] ignore update subtotal
     */
    async showOptionPrices($modifiersModalOptions, $modifiersModalSubtotal, showOptionIds, formData, noneSales, ignoreUpdateSubtotal = false) {
        const [settings, [prev, ...selections]] = await Promise.all([
            this.fetchSettings(),
            this.fetchOptionPrices(
                showOptionIds.map(_id => this.productOptions.find(({ id }) => id === _id)),
                formData,
            ),
        ]);

        const showPrice = value => {
            if (value === 0) {
                if (this.showPriceFree) {
                    return this.context.txtPriceFree;
                } else if (this.showPriceZero) {
                    return this.formatPrice(value, true);
                }
                return '';
            }
            return this.formatPrice(value, true);
        };

        selections.forEach(({
            optionId, valueId, adjustedPricesWithTax, adjustedPricesWithoutTax,
        }) => {
            let params = {
                ...(settings.tax.pdp !== 'EX' ? {
                    priceWithTaxValue: adjustedPricesWithTax?.price?.value,
                    priceWithTax: showPrice(adjustedPricesWithTax?.price?.value),
                    nonSalePriceWithTaxValue: (adjustedPricesWithTax?.nonSalePriceValue ? adjustedPricesWithTax?.nonSalePriceValue : ''),
                    nonSalePriceWithTax: (adjustedPricesWithTax?.nonSalePriceValue ? this.formatPrice(adjustedPricesWithTax?.nonSalePriceValue, true) : ''),
                } : {}),
                ...(settings.tax.pdp !== 'INC' ? {
                    priceWithoutTaxValue: adjustedPricesWithoutTax?.price?.value,
                    priceWithoutTax: showPrice(adjustedPricesWithoutTax?.price?.value),
                    nonSalePriceWithoutTaxValue: (adjustedPricesWithoutTax?.nonSalePriceValue ? adjustedPricesWithoutTax?.nonSalePriceValue : ''),
                    nonSalePriceWithoutTax: (adjustedPricesWithoutTax?.nonSalePriceValue ? this.formatPrice(adjustedPricesWithoutTax?.nonSalePriceValue, true) : ''),
                } : {}),
            };

            if (params.priceWithTax || params.priceWithoutTax) {
                // override non-sale price for option values if it is appears in custom field `__@nonsale`
                // and if it's higher than the current price
                const nonSale = noneSales[optionId]?.[valueId];
                if (nonSale) {
                    const exchangedNonSale = nonSale * settings.currency.exchangeRate;
                    const priceValue = settings.tax.pdp !== 'INC' ? adjustedPricesWithoutTax?.price?.value : adjustedPricesWithTax?.price?.value;
                    if (exchangedNonSale > priceValue) {
                        params = {
                            ...params,
                            ...(settings.tax.pdp !== 'EX' ? {
                                nonSalePriceWithTaxValue: exchangedNonSale,
                                nonSalePriceWithTax: this.formatPrice(exchangedNonSale, true),
                            } : {}),
                            ...(settings.tax.pdp !== 'INC' ? {
                                nonSalePriceWithoutTaxValue: exchangedNonSale,
                                nonSalePriceWithoutTax: this.formatPrice(exchangedNonSale, true),
                            } : {}),
                        };
                    }
                }

                const priceHtml = mustache.render(this.optionPriceTemplate, params, null, ['<%', '%>']);
                const priceText = mustache.render(this.optionPricePlainTemplate, params, null, ['<%', '%>']);
                const $price = $(priceHtml).attr('data-eyeva-product-option-price-id', `${optionId}-${valueId}`);
                const $option = $modifiersModalOptions.find(`[data-product-attribute-id="${optionId}"]`);
                const $value = $option.find(`[data-product-attribute-value="${valueId}"]`);

                if ($value.is('option')) {
                    if (!$value.data('originalText')) {
                        $value.data('originalText', $value.text());
                    }
                    $value.text(`${$value.data('originalText')} ${priceText}`);
                    $value.data('priceHtml', priceHtml);
                } else {
                    $value.find(`[data-eyeva-product-option-price-id="${optionId}-${valueId}"]`).remove();
                    const $placeholder = $value.find('[data-eyeva-product-option-price-placeholder]');
                    if ($placeholder.length > 0) {
                        $placeholder.html($price);
                    } else {
                        $value.append($price);
                    }
                }
            }
        });

        // Show subtotal calculated from all selected options for the current step
        if (!ignoreUpdateSubtotal) {
            this.showOptionSubtotal($modifiersModalSubtotal, prev, settings);
        }
    }

    /**
     * Display subtotal for the current step
     *
     * @param {jQuery} $modifiersModalSubtotal
     * @param {{
     *   pricesWithTax: {
     *     price: { value: number, currencyCode: string },
     *     basePrice: { value: number, currencyCode: string },
     *     salePrice: { value: number, currencyCode: string } | null,
     *   },
     *   pricesWithoutTax: {
     *     price: { value: number, currencyCode: string },
     *     basePrice: { value: number, currencyCode: string },
     *   salePrice: { value: number, currencyCode: string } | null,
     * }} product
     * @param {{ tax: { pdp: number } }} settings
     *
     */
    showOptionSubtotal($modifiersModalSubtotal, product, settings) {
        let params = {
            txtSubtotal: this.context.txtSubtotal,
            priceWithTaxValue: '',
            priceWithTax: '',
            priceWithoutTaxValue: '',
            priceWithoutTax: '',
        };

        if (product.pricesWithTax?.price || product.pricesWithoutTax?.price) {
            params = {
                ...params,
                ...(settings.tax.pdp !== 'EX' ? {
                    priceWithTaxValue: product.pricesWithTax.price.value,
                    priceWithTax: this.formatPrice(product.pricesWithTax.price.value),
                    nonSalePriceWithTaxValue: product.pricesWithTax.basePrice.value > product.pricesWithTax.price.value ? product.pricesWithTax.basePrice.value : '',
                    nonSalePriceWithTax: product.pricesWithTax.basePrice.value > product.pricesWithTax.price.value ? this.formatPrice(product.pricesWithTax.basePrice.value) : '',
                } : {}),
                ...(settings.tax.pdp !== 'INC' ? {
                    priceWithoutTaxValue: product.pricesWithoutTax.price.value,
                    priceWithoutTax: this.formatPrice(product.pricesWithoutTax.price.value),
                    nonSalePriceWithoutTaxValue: product.pricesWithoutTax.basePrice.value > product.pricesWithoutTax.price.value ? product.pricesWithoutTax.basePrice.value : '',
                    nonSalePriceWithoutTax: product.pricesWithoutTax.basePrice.value > product.pricesWithoutTax.price.value ? this.formatPrice(product.pricesWithoutTax.basePrice.value) : '',
                } : {}),
            };
        }

        const subtotalHtml = mustache.render(this.subtotalTemplate, params, null, ['<%', '%>']);
        $modifiersModalSubtotal.html(subtotalHtml);
    }

    /**
     * Show summary of selected options before adding to cart
     *
     * @param {jQuery} $modifiersModalOptions
     * @param {jQuery} $modifiersModalSummary
     * @param {jQuery} $modifiersModalSubtotal
     * @param {jQuery} $modifiersModalTitle
     * @param {jQuery} $addToCartWrapper
     * @param {FormData} formData
     * @param {boolean} preloader
     */
    showSummary($modifiersModalOptions, $modifiersModalSummary, $modifiersModalSubtotal, $modifiersModalTitle, $addToCartWrapper, formData, preloader = false) {
        $modifiersModalTitle.html(this.context.txtReviewSelections);

        const options = [];
        const subtotalHtml = !preloader
            ? $modifiersModalSubtotal.html()
            : mustache.render(this.subtotalTemplate, { preloader }, null, ['<%', '%>']);
        const $subtotal = $(subtotalHtml).attr('data-eyeva-modifiers-modal-complete-subtotal', '');

        this.productOptions.forEach(option => {
            const dayStr = formData.get(`attribute[${option.id}][day]`);
            const monthStr = formData.get(`attribute[${option.id}][month]`);
            const yearStr = formData.get(`attribute[${option.id}][year]`);

            if (dayStr || monthStr || yearStr) {
                options.push({
                    name: option.display_name,
                    value: new Date(`${yearStr}-${monthStr}-${dayStr}`).toLocaleDateString(),
                    // value: `${yearStr}-${monthStr}-${dayStr}`,
                });
                return;
            }

            const valueStr = formData.getAll(`attribute[${option.id}]`).slice(-1)[0];
            if (!valueStr || valueStr === '0') return;

            if (valueStr instanceof File) {
                if (valueStr.name) {
                    options.push({
                        name: option.display_name,
                        value: valueStr.name,
                    });
                }
                return;
            }

            const valueId = valueStr ? Number(valueStr) : null;

            // stop if it is checkbox and not checked
            if (option.noValue && option.noValue === valueId) return;

            const valueLabel = option.values?.find(({ id }) => id === valueId)?.label
                || (option.value === valueId ? option.label : undefined);

            const priceHtml = $modifiersModalOptions.find(`[data-eyeva-product-option-price-id="${option.id}-${valueId}"]`)
                .first().clone().removeAttr('data-eyeva-product-option-price-id')[0]?.outerHTML;

            const optionElPriceHtml = $modifiersModalOptions.find(`select[name="attribute[${option.id}]"] option[value="${valueId}"]`).data('priceHtml');

            options.push({
                name: option.display_name,
                value: valueLabel || valueStr,
                priceHtml: priceHtml || optionElPriceHtml,
            });
        });

        const summaryHtml = mustache.render(this.summaryTemplate, { options }, null, ['<%', '%>']);
        $modifiersModalSummary.html(summaryHtml);

        // Insert subtotal to to add to cart wrapper and show it
        $addToCartWrapper.find('[data-eyeva-modifiers-modal-complete-subtotal]').remove();
        $addToCartWrapper.find(this.addToCartWrapperSelector).prepend($subtotal);
        $addToCartWrapper.show();
    }


    /**
     *
     * @param {Object} data
     * @param {Object} [data.price]
     * @param {Object} [data.price.without_tax]
     * @param {string} data.price.without_tax.formatted
     * @param {number} data.price.without_tax.value
     * @param {string} data.price.without_tax.currency
     * @param {string} data.price.tax_label
     * @param {Object} [data.price.sale_price_without_tax]
     * @param {string} data.price.sale_price_without_tax.formatted
     * @param {number} data.price.sale_price_without_tax.value
     * @param {string} data.price.sale_price_without_tax.currency
     * @param {Object} [data.price.with_tax]
     * @param {string} data.price.with_tax.formatted
     * @param {number} data.price.with_tax.value
     * @param {string} data.price.with_tax.currency
     * @param {Object} [data.price.sale_price_with_tax]
     * @param {string} data.price.sale_price_with_tax.formatted
     * @param {number} data.price.sale_price_with_tax.value
     * @param {string} data.price.sale_price_with_tax.currency
     */
    updateModifiersSubtotal(data) {
        const $form = this.$scope.find('[data-cart-item-add]');
        const $productOptionsEl = $form.find('[data-product-option-change]');
        const $modifiersModalSubtotal = $productOptionsEl.find('[data-eyeva-modifiers-modal-footer-subtotal]');

        let params = {
            txtSubtotal: this.context.txtSubtotal,
            priceWithTaxValue: '',
            priceWithTax: '',
            priceWithoutTaxValue: '',
            priceWithoutTax: '',
        };

        if (data.price) {
            params = {
                ...params,
                ...(data.price.with_tax ? {
                    priceWithTaxValue: data.price.with_tax.value,
                    priceWithTax: data.price.with_tax.formatted,
                } : {}),
                ...(data.price.without_tax ? {
                    priceWithoutTaxValue: data.price.without_tax.value,
                    priceWithoutTax: data.price.without_tax.formatted,
                } : {}),
            };
        }

        const subtotalHtml = mustache.render(this.subtotalTemplate, params, null, ['<%', '%>']);
        $modifiersModalSubtotal.html(subtotalHtml);
    }
}
