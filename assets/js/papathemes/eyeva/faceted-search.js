import urlUtils from '../../theme/common/utils/url-utils';
import FacetedSearch from '../../theme/common/faceted-search';
import { api } from '@bigcommerce/stencil-utils';
import { animateHeight } from '../utils';
import getNotification from '../notification';

export default class EyevaFacetedSearch extends FacetedSearch {
    constructor(...args) {
        super(...args);

        this.superCallback = this.callback;
        this.callback = this.refreshViewCallback;

        this.updateFacetImages();
    }

    /**
     * override the default behavior of the base class to stop collapsing all facets in this theme
     */
    collapseAllFacets() {
        // do nothing
    }

    onToggleClick(event) {
        event.preventDefault();

        const $toggle = $(event.currentTarget);
        const $navList = $($toggle.attr('href'));

        if ($toggle.hasClass('_loading')) return;

        if ($toggle.hasClass('_loaded')) {
            const $items = $navList.find('[data-facet-more-item]');
            const height = $navList.height();
            let newHeight;
            let doneCb;

            if ($toggle.hasClass('_expanded')) {
                $items.hide();
                $toggle.removeClass('_expanded');
                newHeight = $navList.height();
                $items.show();
                doneCb = () => $items.hide();
            } else {
                $items.show();
                $toggle.addClass('_expanded');
                newHeight = $navList.height();
            }

            animateHeight($navList, height, newHeight, null, doneCb);
        } else {
            $toggle.addClass('_loading');
            this.getMoreFacetResults($navList, $toggle);
        }
    }

    /**
     * Loading more facet results.
     *
     * Overridden the function to append more facet results to the list instead of showing a modal
     *
     * @param {jQuery} $navList
     * @param {jQuery} $toggle
     */
    getMoreFacetResults($navList, $toggle) {
        if (!$toggle) return super.getMoreFacetResults($navList);

        const notification = getNotification();
        const facet = $navList.data('facet');
        const facetUrl = urlUtils.getUrl();

        if (this.requestOptions.showMore) {
            api.getPage(facetUrl, {
                template: this.requestOptions.showMore,
                params: {
                    list_all: facet,
                },
            }, (err, response) => {
                if (err) {
                    $toggle.removeClass('_loading');
                    notification.error(err.toString());
                    return;
                }

                const height = $navList.height();
                const existingIds = $navList.find('[data-faceted-search-facet]')
                    .get().map(el => $(el).data('id'));

                $(response).find('[data-facet-more-item]').each((_i, el) => {
                    const $el = $(el);
                    const id = $el.find('[data-faceted-search-facet]').data('id');

                    if (!existingIds.includes(id)) {
                        $navList.append($el);
                        $toggle.removeClass('_loading').addClass('_expanded _loaded');
                    }
                });

                const newHeight = $navList.height();

                animateHeight($navList, height, newHeight);
                this.updateFacetImages();
            });
        } else {
            $toggle.removeClass('_loading').hide();
        }
    }

    refreshView(content) {
        super.refreshView(content);
        this.updateFacetImages();

        $('body').trigger('refreshView.facetedSearch');
    }

    refreshViewCallback(content) {
        // store the current facet accordion states
        this.collapsedFacets = $(this.options.accordionToggleSelector).get()
            .map(el => $(el).data(('collapsibleInstance')))
            .map(collapsible => (collapsible.isCollapsed ? collapsible.targetId : null))
            .filter(id => id);

        const $toggles = $('#product-listing-container [data-collapsible="page-sidebar"]');

        // temporarily append to body to remove it from product-list-container
        $toggles.appendTo('body');

        // call the original callback on refresh view
        this.superCallback(content);

        // replace the new toggle button by the old one to keep the open state
        // and not init collapsible instance again
        $('#product-listing-container [data-collapsible="page-sidebar"]').each((i, el) => {
            const $el = $(el);
            const $toggle = $toggles.eq(i);

            if ($toggle.length > 0) {
                $toggle.html($el.html());
                $el.replaceWith($toggle);
            }
        });

        // remove any lonely toggle button
        $toggles.filter((i, el) => $(el).parent().is('body')).remove();
    }

    /**
     * Override this function to stop animation of accordion when restoring collapsed facets
     */
    restoreCollapsedFacets() {
        const $body = $('body');
        $body.addClass('_animation-off');

        super.restoreCollapsedFacets();

        $body.removeClass('_animation-off');
    }

    /**
     * Load facet images
     */
    updateFacetImages() {
        $('[data-faceted-search-facet-image], [data-faceted-search-facet-color]').find('img').not('._loaded').each((i, el) => {
            const $img = $(el);
            $img.one('error', event => $(event.currentTarget).remove());
            $img.attr('src', $img.data('src'));
            $img.addClass('lazyload _loaded');
        });
    }
}
