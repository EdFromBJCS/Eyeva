import utils from '@bigcommerce/stencil-utils';
import { defaultModal, ModalEvents } from '../theme/global/modal';
import ProductDetails from './eyeva/product-details';
import collapsibleFactory from '../theme/common/collapsible';

function quickViewCornerstone(context) {
    const modal = defaultModal();

    $('body').on('click', '.quickview', event => {
        event.preventDefault();

        const productId = $(event.currentTarget).data('productId');

        modal.open({ size: 'large' });

        utils.api.product.getById(productId, { template: 'products/quick-view' }, (err, response) => {
            if (err) return;

            modal.updateContent(response);

            collapsibleFactory('[data-collapsible]', { $context: modal.$content });

            /* papathemes fix: STRF-2471 - Multiple Wish Lists - prevents double-firing
            * of foundation.dropdown click.fndtn.dropdown event */
            modal.$content.off('.fndtn.dropdown');
            modal.$content.find('[data-dropdown-content]').off('.fndtn.dropdown');
            modal.$content.foundation({
                dropdown: { active_class: 'is-open' },
            });

            modal.$content.find('.productView').addClass('productView--quickView');

            return new ProductDetails(modal.$content.find('.quickView'), context);
        });
    });
}


export default function (...args) {
    const modal = defaultModal();

    $('body').on('click', '.quickview', () => {
        modal.$modal.one(ModalEvents.open, () => modal.$modal.addClass('modal--quickView'));
        modal.$modal.one(ModalEvents.closed, () => modal.$modal.removeClass('modal--quickView'));
    });

    /* STRF-2471 - Multiple Wish Lists - prevents double-firing
     * of foundation.dropdown click.fndtn.dropdown event */
    // modal.$modal.on('click', '[data-dropdown]', e => e.stopPropagation());

    // papathemes: Track recently viewed products
    modal.$modal.on(ModalEvents.loaded, () => {
        const $productView = modal.$content.find('.productView');
        const productId = Number($productView.find('input[name="product_id"]').val());
        if (productId) {
            $('body').trigger('productviewed', [productId]);
        }
    });

    return quickViewCornerstone(...args);
}
