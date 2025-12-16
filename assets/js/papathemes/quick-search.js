import { debounce } from 'lodash';
import utils from '@bigcommerce/stencil-utils';
import Modal from './modal';
import mediaQueryListFactory from '../theme/common/media-query-list';

const medium = mediaQueryListFactory('medium');

class QuickSearch {
    constructor() {
        if (QuickSearch._instance) return QuickSearch._instance;

        const $template = $('#quickSearchModalTemplate');

        this.$body = $('body');
        this.quickSearchTemplate = $template.text();
        this.modal = new Modal({
            modalTitle: $template.data('modalTitle'),
            overlayExtraClass: '_quickSearch',
            modalExtraClass: '_quickSearch',
            closeOnEsc: true,
            stackable: true,
        });

        this.bindEvents();
    }

    static getInstance() {
        if (!QuickSearch._instance) QuickSearch._instance = new QuickSearch();
        return QuickSearch._instance;
    }

    bindEvents() {
        const $header = $('[data-sticky-header]');

        $('[data-papathemes-quick-search-toggle]').on('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            this.modal.openModal(this.quickSearchTemplate, false);

            if (medium.matches) {
                const headerHeight = $header.outerHeight();
                const headerTop = $header[0]?.getBoundingClientRect().top || 0;

                this.modal.$modal.css('top', headerTop + headerHeight);
            }

            // Focus on the search input
            setTimeout(() => {
                this.modal.$modal.find('[data-search-quick]').focus();
            }, 400);

            this.bindModalEvents();
        });

        // close quick search modal when clicking on sticky header
        $header.on('click', () => {
            if (!this.modal.$modal || this.modal.$modal.is(':hidden')) return;
            this.modal.closeModal();
        });
    }

    bindModalEvents() {
        const $form = this.modal.$modal.find('[data-quick-search-form]');

        // Catch the submission of the quick-search forms
        $form.on('submit', event => {
            event.preventDefault();

            const $target = $(event.currentTarget);
            const searchQuery = $target.find('input').val();
            const searchUrl = $target.data('url');

            if (searchQuery.length === 0) {
                return;
            }

            window.location.href = `${searchUrl}?search_query=${encodeURIComponent(searchQuery)}`;
        });

        const doSearchDebounce = debounce(searchQuery => this.doSearch(searchQuery), 1000);
        const $input = $form.find('[data-search-quick]');

        $input.on('input', (event) => {
            const searchQuery = $(event.currentTarget).val();
            if (searchQuery.length < 3) return;
            $form.addClass('_loading');
            doSearchDebounce(searchQuery);
        });
    }

    doSearch(searchQuery) {
        utils.api.search.search(searchQuery, { template: 'search/quick-results' }, (err, response) => {
            if (!this.modal.$modal) return false;

            const $form = this.modal.$modal.find('[data-quick-search-form]');
            $form.removeClass('_loading');

            if (err) return false;

            const $quickSearchResults = this.modal.$modal.find('.quickSearchResults');

            $quickSearchResults.html(response);

            const $quickSearchResultsCurrent = $quickSearchResults.filter(':visible');
            const $noResultsMessage = $quickSearchResultsCurrent.find('.quickSearchMessage');

            if ($noResultsMessage.length) {
                $noResultsMessage.attr({
                    role: 'status',
                    'aria-live': 'polite',
                });
            } else {
                const $quickSearchAriaMessage = this.modal.$modal.find('[data-search-aria-message-predefined-text]');
                $quickSearchAriaMessage.addClass('u-hidden');

                const predefinedText = $quickSearchAriaMessage.data('search-aria-message-predefined-text');
                const itemsFoundCount = $quickSearchResultsCurrent.find('.product').length;

                $quickSearchAriaMessage.text(`${itemsFoundCount} ${predefinedText} ${searchQuery}`);

                setTimeout(() => {
                    $quickSearchAriaMessage.removeClass('u-hidden');
                }, 100);
            }
        });
    }
}

export default function () {
    return QuickSearch.getInstance();
}
