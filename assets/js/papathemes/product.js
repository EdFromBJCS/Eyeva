import CornerstoneProduct from '../theme/product';

export default class Product extends CornerstoneProduct {
    onReady() {
        super.onReady();

        // papathemes: Track recently viewed products
        const productId = Number($('.productView').find('input[name="product_id"]').val());
        $('body').trigger('productviewed', [productId]);
    }
}

