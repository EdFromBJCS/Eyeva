import ajaxAddToCart from './ajax-addtocart';
import ProductSwatches from './card-swatches/ProductSwatches';
import initWishList from './wishlist';
import { initRecentlyViewedProductsSection } from './recently-viewed-products';
import initCartSuggestedProducts from './cart-suggested-products';
import initCartDrawer from './cart-drawer';
import initQuickSearch from './quick-search';
import initQuickView from './quick-view';
import shippingCountdown from './shipping-countdown';
import compareProducts from './compare-products';

/**
 * Init product card swatches, qty, and other product card functionalities
 * @param {Object} context
 * @param {Boolean} context.card_show_swatches reference `config.json` & `layout/base.html`
 * @param {Boolean} context.show_cart_action reference `components/products/card-actions.html`
 * @param {Boolean} context.card_show_qty reference `config.json` & `layout/base.html`
 * @param {Boolean} context.card_show_countdown reference `config.json`. Not used in Eyeva theme.
 * @param {Boolean} context.card_show_gallery reference `config.json`.
 * @param {Boolean} context.card_show_video reference `config.json`.
 * @param {Boolean} context.card_show_variantImg reference `config.json`. Not used in Eyeva theme.
 * @param {Boolean} context.card_show_priceCall reference `config.json`. Not used in Eyeva theme.
 * @param {String} context.graphQLToken reference `layout/base.html` & `layout/base.html`
 * @param {String} context.productgallery_size reference `layout/base.html` & `layout/base.html`
 * @param {String} context.card_swatch_name reference `config.json` & `layout/base.html`
 * @param {String} context.txtSaleCountdownJSON reference `config.json`. Not used in Eyeva theme.
 */
function initProductCards(context) {
    const showSwatches = context.card_show_swatches;
    const shouldUpdateMinMaxQty = context.show_cart_action && context.card_show_qty;
    if ((showSwatches || shouldUpdateMinMaxQty || context.card_show_countdown || context.card_show_gallery || context.card_show_video || context.card_show_variantImg || context.card_show_priceCall) && context.graphQLToken) {
        // eslint-disable-next-line no-new
        new ProductSwatches({
            showSwatches,
            shouldUpdateMinMaxQty,
            graphQLToken: context.graphQLToken,
            imageSize: context.productgallery_size,
            zoomSize: context.zoomSize,
            productSize: context.productSize,
            thumbSize: context.thumbSize,
            swatchesLimit: Number(context.card_swatch_limit),
            includeOptions: context.card_swatch_name.split(',').map(s => s.trim()).filter(s => s !== ''),
            displayStyles: ['Swatch'],
            showCountdown: context.card_show_countdown,
            showGallery: context.card_show_gallery,
            showHoverVideo: context.card_show_video,
            enableVariantImages: context.card_show_variantImg,
            showPriceCall: context.card_show_priceCall,
            txtSaleCountdownJSON: context.txtSaleCountdownJSON,
            txtVideosLabel: context.txtVideosLabel,
            txtImages360Label: context.txtImages360Label,
            txtImagesLabel: context.txtImagesLabel,
        });
    }
}

function initShippingCountdown(context) {
    if (context.shipping_countdown) {
        shippingCountdown({
            graphQLToken: context.graphQLToken,
            storeTZ: context.shipping_tz,
            countdownValues: {
                parcel: '15:00:00',
                LTL: '12:00:00',
            },
            defaultCountdownTime: context.shipping_countdown,
        });
    }
}

export default function (context) {
    initProductCards(context);
    initWishList(context); // should load before any ajax products load
    initRecentlyViewedProductsSection({
        ignoreProductViewedEvent: true,
        ...context,
    });
    initCartSuggestedProducts(context);
    initShippingCountdown(context);

    // lower priority
    initQuickSearch();
    initCartDrawer(context);
    ajaxAddToCart(context);
    initQuickView(context);
    compareProducts(context);
}
