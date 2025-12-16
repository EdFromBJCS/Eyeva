import utils from '@bigcommerce/stencil-utils';
import CornerstoneCart from '../theme/cart';
import { defaultModal, ModalEvents } from '../theme/global/modal';
import ProductDetails from './eyeva/product-details';
import notification from './notification';

export default class Cart extends CornerstoneCart {
    constructor(...args) {
        super(...args);
        this.notification = notification();
    }
    /**
     * Override the method to refresh cart content when `body` receive event `refresh-cart`
     */
    onReady() {
        super.onReady();

        $('body').on('refresh-cart', (event, response = '') => {
            if (response) {
                this.updateContent(response);
            } else {
                this.refreshContent();
            }
        });
    }

    cartEditOptions(itemId, productId) {
        const modal = defaultModal();

        if (this.$modal === null) {
            this.$modal = $('#modal');
        }

        modal.open({ size: 'large' });

        Promise.all([
            this.openProductEdit(itemId),
            this.openQuickView(productId, modal),
        ]).then(([{ content, data }]) => {
            //
            // merge quick-view with product edit options HTML
            //
            const $content = $('<div></div>').html(content);
            const $productAttributesWrapper = $content.find('[data-product-attributes-wrapper]');
            const $form = this.$modal.find('form[data-cart-item-add]');
            const editProductQuantity = this.$cartContent.find(`input[name="qty-${itemId}"]`).val();

            // fix stepper options because custom_fields not working in product/configure request
            this.fixStepperOptions($productAttributesWrapper);

            this.$modal.find('[data-product-option-change]').html($productAttributesWrapper.html()); // merge [data-product-attributes-wrapper] > * to [data-product-option-change]
            this.$modal.find('[data-eyeva-product-options]').text(JSON.stringify(data.options)); // update [data-eyeva-product-options]
            this.$modal.find('[data-update-product-wrapper]').show(); // show Add New To Cart button
            $form.prepend(`<input type="hidden" name="item_id" value="${data.quote_item_id}">`); // add hidden input[name="item_id"] to form
            $form.find('input[name="qty[]"]').val(editProductQuantity); // update product quantity

            // update cart content after edit product options
            const editProductCallback = (response) => {
                modal.close();
                if (this.updateContent(response)) {
                    const msg = $content.find('[data-updated-success-msg]').text();
                    if (msg) this.notification.info(msg);

                    const $item = this.$cartContent.find(`[data-item-edit="${itemId}"]`).closest('[data-item-row]');
                    $item.addClass('_adding');
                    $item.one('animationend', () => $item.removeClass('_adding'));
                }
            };

            const context = { ...this.context, editProductCallback, editProductQuantity };
            return new ProductDetails(modal.$content.find('.quickView'), context);
        });
    }

    // Replicate the stepper option controls from the product view into the cart edit options modal
    // This is necessary because custom_fields are not available in the product/configure request
    fixStepperOptions($productAttributesWrapper) {
        this.$modal.find('[data-product-option-change]').find('[data-product-option-stepper]')
            .each((_i, el) => {
                const $el = $(el);
                const attrId = $el.data('product-attribute-id');
                const $option = $productAttributesWrapper.find(`[data-product-attribute-id="${attrId}"]`);
                $option
                    .addClass('form-field--stepper')
                    .attr('data-product-option-stepper', '');
                $el.find('._query-stepper-first').clone().prependTo($option);
                $el.find('._query-stepper-last').clone().appendTo($option);
            });
    }

    /**
     * Refresh cart content with input cart page HTML
     * @param {string} response HTML of cart page
     */
    updateContent(response) {
        const $response = $(response);

        const $cartContent = $('[data-cart-content]', $response);
        const $cartTotals = $('[data-cart-totals]', $response);
        const $cartMessages = $('[data-cart-status]', $response);
        const $cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]', $response);
        const $cartPageTitle = $('[data-cart-page-title]', $response);

        if ($cartContent.length === 0) {
            this.notification.error(this.context.genericError);
            return false;
        }

        this.$cartContent.html($cartContent.html());
        this.$cartTotals.html($cartTotals.html());
        this.$cartMessages.html($cartMessages.html());
        this.$cartAdditionalCheckoutBtns.html($cartAdditionalCheckoutBtns.html());
        $('[data-cart-page-title]').replaceWith($cartPageTitle);

        this.bindEvents();

        $(`[data-cart-itemid='${this.$activeCartItemId}']`, this.$cartContent)
            .filter(`[data-action='${this.$activeCartItemBtnAction}']`)
            .trigger('focus');

        // highlight the newly added item
        const $item = this.$cartContent.find('[data-item-row-added]');
        $item.addClass('_adding');
        $item.one('animationend', () => $item.removeClass('_adding'));

        return true;
    }

    /**
     * Fetch product configured options
     *
     * @param {string} itemId
     * @returns {Promise<{
     *   content: string,
     *   data: {
     *     customizations: object[],
     *     options: object[],
     *     product_name: string,
     *     quote_item_id: string,
     *   }
     * }}>
     */
    openProductEdit(itemId) {
        return new Promise((resolve) => {
            const options = {
                template: 'cart/modals/configure-product',
            };

            utils.api.productAttributes.configureInCart(itemId, options, (err, response) => {
                resolve(response);
            });
        });
    }

    /**
     * Clone code from assets/js/theme/global/quick-view.js
     *
     * @param {number} productId
     * @returns {Promise<void>}
     */
    openQuickView(productId, modal) {
        modal.$modal.addClass('modal--quickView'); // ensure modal has correct class if it already opened
        modal.$modal.one(ModalEvents.open, () => modal.$modal.addClass('modal--quickView'));
        modal.$modal.one(ModalEvents.closed, () => modal.$modal.removeClass('modal--quickView'));

        const handleDropdownExpand = ({ currentTarget }) => {
            const $dropdownMenu = $(currentTarget);
            const dropdownBtnHeight = $dropdownMenu.prev().outerHeight();

            $dropdownMenu.css('top', dropdownBtnHeight);

            return modal.$modal.one(ModalEvents.close, () => $dropdownMenu.off('opened.fndtn.dropdown', handleDropdownExpand));
        };

        return new Promise((resolve) => {
            utils.api.product.getById(productId, { template: 'products/quick-view' }, (err, response) => {
                if (err) return resolve();

                modal.updateContent(response);

                $('#modal .dropdown-menu').on('opened.fndtn.dropdown', handleDropdownExpand);
                modal.$content.find('.productView').addClass('productView--quickView');

                // removed data-slick code as not used in this theme
                // removed Review code as it as replaced by the theme's custom code
                // removed new ProductDetails object
                resolve();
            });
        });
    }
}
