/**
 * Override the default Cornerstone Reviews class to disable collapse on page load
 */
import CornerstoneReviews from '../../theme/product/reviews';

export default class Reviews extends CornerstoneReviews {
    setupReviews() {
        // We're in paginating state, reviews should be visible
        if (
            window.location.hash
            && window.location.hash.indexOf('#product-reviews') === 0
            && this.$reviewsContent.parents('.quickView').length === 0
        ) {
            this.expandReviews();
        }
    }
}
