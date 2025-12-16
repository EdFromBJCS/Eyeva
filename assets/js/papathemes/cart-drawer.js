import utils from '@bigcommerce/stencil-utils';
import Modal from './modal';
import modalFactory from '../theme/global/modal';
import { initRecentlyViewedProductsSection } from './recently-viewed-products';
import initCartSuggestedProducts from './cart-suggested-products';
import CartPage from './cart';

let cartDrawerSingleton;

class Cart extends CartPage {
    constructor(context, $scope) {
        super(context);
        this.$scope = $scope || $('body');
        this.onReady();
    }

    // Copied from the base class. add scope to jquery selector
    onReady() {
        this.$modal = null;
        this.$cartPageContent = $('[data-cart]', this.$scope);
        this.$cartContent = $('[data-cart-content]', this.$scope);
        this.$cartMessages = $('[data-cart-status]', this.$scope);
        this.$cartTotals = $('[data-cart-totals]', this.$scope);
        this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]', this.$scope);
        this.$overlay = $('[data-cart] .loadingOverlay', this.$scope)
            .hide(); // TODO: temporary until roper pulls in his cart components
        this.$activeCartItemId = null;
        this.$activeCartItemBtnAction = null;

        this.setApplePaySupport();
        this.bindEvents();
    }
}

class CartDrawer {
    constructor(context) {
        this.context = context;
        this.modal = new Modal({
            overlayExtraClass: 'cart-drawer',
            closeOnBackgroundClick: true,
            closeOnEsc: true,
            stackable: true,
        });
        this.bindEvents();
        this.overrideCartPreviewModal();
    }

    bindEvents() {
        $('[data-cart-drawer-toggle]').on('click', (event) => {
            event.preventDefault();
            this.open();
        });

        this.bindCartQuantityUpdateEvent();
    }

    bindCartQuantityUpdateEvent() {
        const $body = $('body');
        const $toggle = $('[data-cart-drawer-toggle]');

        // copied Cornerstone code
        // @see: assets/js/theme/global/cart-preview.js
        $body.on('cart-quantity-update', (event, quantity) => {
            $toggle.attr('aria-label', (_, prevValue) => prevValue.replace(/\d+/, quantity));

            if (!quantity) {
                $toggle.addClass('navUser-item--cart__hidden-s');
            } else {
                $toggle.removeClass('navUser-item--cart__hidden-s');
            }

            $('.cart-quantity')
                .text(quantity)
                .toggleClass('countPill--positive', quantity > 0);
            if (utils.tools.storage.localStorageAvailable()) {
                localStorage.setItem('cart-quantity', quantity);
            }
        });
    }

    initCart(content) {
        if (content) {
            this.modal.updateContent(content);

            // move the newly added item to the top of the cart
            const $item = this.modal.$modal.find('[data-item-row-added]');
            $item.prependTo($item.parent());
            $item.addClass('_adding');
            $item.one('animationend', () => $item.removeClass('_adding'));
        }

        this.cart = new Cart(this.context, this.modal.$modal);
        initRecentlyViewedProductsSection(this.context);
        initCartSuggestedProducts(this.context);
    }

    open() {
        this.modal.openModal('', true);

        utils.api.cart.getContent({ template: 'papathemes/cart-drawer' }, (err, response) => {
            this.initCart(response);
        });
    }

    overrideCartPreviewModal() {
        const previewModal = modalFactory('#previewModal')[0];

        previewModal.open = () => {
            previewModal.close(); // to close the quick view modal

            if (this.context.page_type !== 'cart') {
                this.modal.openModal('', true);
            }
        };

        previewModal.updateContent = (response) => {
            if (this.context.page_type === 'cart') {
                $('body').trigger('refresh-cart', [response]);
            } else {
                const qty = $(response).find('[data-cart-quantity]').attr('data-cart-quantity');
                previewModal.$content.html(`<div data-cart-quantity="${qty}"></div>`);
                this.initCart(response);
            }
        };
    }
}

export default function factory(context) {
    if (!cartDrawerSingleton) {
        cartDrawerSingleton = new CartDrawer(context);
    }

    return cartDrawerSingleton;
}
