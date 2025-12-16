import mustache from 'mustache';
import notification from './notification';
import Modal from './modal';
import { fixFormElementUniqueIds, ProductCardsGraphQLQuery, productCardTemplate } from './utils';

let wishlistInstance = null;

class WishList {
    /**
     * @type {Object[]} Customer wishlist objects
     * @see fetchCustomerWishlists
     */
    customerWishlists = [];

    /**
     * @type {number[]} Product IDs in customer's wishlists
     * @see fetchCustomerWishlists
     */
    customerWishlistProductIds = [];

    /**
     * @type {string} Mustache template for add wishlist dropdown item
     *
     * @link templates/components/common/wishlist-dropdown.html
     * @link templates/components/products/card-wishlist-dropdown.html
     */
    dropdownItemTemplate = `
        <li>
            <button class="_action {{#count}}_has-items{{/count}}"
                formaction="{{url}}&wishlistid={{id}}"
                type="submit"
                data-wishlist-id={{id}}
            >
                {{name}}
                <i aria-hidden="true" class="icon _on"><svg><use href="#icon-check" /></svg></i>
            </button>
        </li>
    `;

    infoIconTemplate = `
        <i aria-hidden="true" class="icon"><svg><use href="#icon-heart" /></svg></i>
    `;

    anonymousWishlistProductsTemplate = `
        <div>
            {{#productCards.length}}
                <div class="productGrid">
                    {{#productCards}}
                        <div class="product">
                            {{&.}}
                        </div>
                    {{/productCards}}
                </div>
                <div class="_buttons">
                    <button class="button button--outline" type="button" data-more>{{txtLoadMore}}</button>
                    <button class="button button--outline" type="button" data-less>{{txtCollapse}}</button>
                </div>
            {{/productCards.length}}
            {{^productCards.length}}
                {{txtEmptyWishlist}}
            {{/productCards.length}}
        </div>
    `;

    constructor(context) {
        this.context = context;
        this.customerId = context.customerId;
        this.graphQLToken = context.graphQLToken;
        this.txtAddedItemWishlist = context.txtAddedItemWishlist || '{name} has been added to your Wish List';
        this.txtDeletedItemWishlist = context.txtDeletedItemWishlist || '{name} has been removed from your Wish List';
        this.txtEmptyWishlist = context.txtEmptyWishlist || 'Your wishlist is empty';
        this.txtWishlistViewHeading = context.txtWishlistViewHeading || 'My Wish List: {name}';
        this.txtLoadMore = context.txtLoadMore || 'Load more';
        this.txtCollapse = context.txtCollapse || 'Collapse';
        this.genericError = context.genericError || 'Oops! Something went wrong.';
        this.$body = $('body');
        this.notification = notification();
        this.modal = new Modal(); // modal for creating a new wishlist

        this.onClickAddToWishlist = this.onClickAddToWishlist.bind(this);

        this.bindEvents();

        if (this.customerId) {
            this.initCustomerWishlists();
        } else {
            this.initAnonymousWishlists();
        }
    }

    /**
     * Initialize customer's wishlists for all product cards and product view when customer is logged in.
     * - Fetch customer's wishlists from GraphQL
     * - Add products from local storage to customer's wishlist
     * - Update wishlist button's states
     */
    async initCustomerWishlists() {
        await this.fetchCustomerWishlists();
        await this.updateCustomerWishlistFromAnonymous();
        this.updateWishlistButtons();
    }

    /**
     * Initialize local storage wishlists for all product cards and product view when customer is not logged in.
     * - Update wishlist button's states
     */
    initAnonymousWishlists() {
        this.updateWishlistButtons();
    }

    /**
     * Get wishlist products from local storage when customer is not logged in.
     *
     * @returns {number[]} List of product IDs
     */
    getAnonymousProducts() {
        const s = window.localStorage.getItem('WISHLIST_PRODUCTS') || '';
        return s.split(',').map(Number).filter(Boolean);
    }

    /**
     * Save wishlist products to local storage when customer is not logged in.
     *
     * @param {number[]} productIds List of product IDs
     */
    saveAnonymousProducts(productIds) {
        window.localStorage.setItem('WISHLIST_PRODUCTS', productIds.join(','));
    }

    /**
     * Clear wishlist products from local storage when customer is not logged in.
     */
    clearAnonymousProducts() {
        window.localStorage.removeItem('WISHLIST_PRODUCTS');
    }

    /**
     * Bind events (onClick) for add to wishlist buttons.
     * - [data-wishlist-add-anonymous] add wishlist buttons when customer is not logged in
     * - [data-wishlist-add-customer] add wishlist buttons when customer is logged in
     */
    bindEvents() {
        this.$body.on('click', '[data-wishlist-add-anonymous]', event => {
            event.preventDefault();
            const $el = $(event.currentTarget);
            const $form = this.getForm($el);
            const name = $form.data('productName');
            const productId = $el.closest('[data-wishlist-add]').data('wishlistAdd');
            const $sameBtns = $(`[data-wishlist-add="${productId}"] [data-wishlist-add-anonymous]`);
            if (productId) {
                if ($el.hasClass('is-active')) {
                    this.removeAnonymousProduct(productId);
                    $sameBtns.removeClass('is-active');
                    this.notification.info(this.txtDeletedItemWishlist.replace('{name}', name), this.infoIconTemplate);
                } else {
                    this.addAnonymousProduct(productId);
                    $sameBtns.addClass('is-active');
                    this.notification.info(this.txtAddedItemWishlist.replace('{name}', name), this.infoIconTemplate);
                }
            }
        });

        // when click to the add to wishlist button for logged in customer on product cards,
        // need to populate all wishlists to the dropdown because Stencil doesn't support wishlists on products listing
        this.$body.on('click', '[data-wishlist-add-customer]', event => {
            this.populateCustomerWishlistDropdown($(event.currentTarget));
        });

        // update position of the dropdown when opened to prevent hidden by parent elements
        this.$body.on('opened.fndtn.dropdown', '[data-wishlist-dropdown]', (_event, $dropdown, $target) => {
            this.updateDropdownPosition($dropdown, $target);
        });

        // create a new wishlist
        this.$body.on('click', '[data-wishlist-create]', event => {
            event.preventDefault();
            const $form = this.getForm($(event.currentTarget));
            const productId = $form.data('wishlistAdd');
            const productName = $form.data('productName');
            this.openCreatingWishlistModal(productId, productName);
        });

        // listen custom event to update wishlist buttons on request
        this.$body.on('update-wishlist-buttons', (event, $scope) => {
            this.updateWishlistButtons($scope);
        });

        // open wishlist modal display all wishlist products
        $('[data-wishlist-open]').on('click', event => {
            event.preventDefault();
            this.openAnonymousWishlistProductsModal();
        });
    }

    /**
     * Find the form element (`form[data-wishlist-add]`) of the add to wishlist buttons
     * @param {jQuery} $el
     * @returns {jQuery}
     */
    getForm($el) {
        const $dropdown = $el.is('[data-wishlist-dropdown]') ? $el : $el.closest('[data-wishlist-dropdown]');
        const form = $dropdown.data('formElement') || $dropdown.closest('[data-wishlist-add]')[0] || $el.closest('[data-wishlist-add]')[0];
        return $(form);
    }

    /**
     * Remove a specific product from local storage wishlist.
     *
     * @param {number} productId Product ID to remove
     */
    removeAnonymousProduct(productId) {
        const productIds = this.getAnonymousProducts();
        const index = productIds.indexOf(productId);
        if (index !== -1) {
            productIds.splice(index, 1);
            this.saveAnonymousProducts(productIds);
        }
    }

    /**
     * Add a specific product to local storage wishlist.
     *
     * @param {number} productId Product ID to add
     */
    addAnonymousProduct(productId) {
        const productIds = this.getAnonymousProducts();
        if (!productIds.includes(productId)) {
            productIds.push(productId);
            this.saveAnonymousProducts(productIds);
        }
    }

    /**
     * Update the state of add to wishlist buttons, to determine whether a product is in a wishlist or not.
     */
    updateWishlistButtons($scope = null) {
        const productIds = [
            ...this.getAnonymousProducts(),
            ...this.customerWishlistProductIds,
        ];

        let $allBtns = $();
        const $body = $scope || this.$body;

        $body.find('[data-wishlist-add]').each((_i, el) => {
            const $el = $(el);
            const productId = $el.data('wishlistAdd');
            const $btn = $el.find('[data-wishlist-add-anonymous], [data-wishlist-add-customer]');

            if (productIds.includes(productId)) {
                $btn.addClass('is-active');
            } else {
                $btn.removeClass('is-active');
            }

            $allBtns = $allBtns.add($btn);
        });

        // do not animate for the first time loaded
        setTimeout(() => $allBtns.addClass('_animate'), 500);
    }

    /**
     * Fetch customer's wishlists and their items.
     * - Store product IDs in `customerWishlistProductIds`
     * - Store wishlists in `customerWishlists`
     * @see customerWishlistProductIds
     * @see customerWishlists
     * @returns {Promise<void>}
     */
    async fetchCustomerWishlists() {
        const fetchWishlistItems = async (wishlistIds = [], afterItemCursor = '') => {
            const filters = wishlistIds.length > 0 ? { entityIds: wishlistIds } : null;
            const cursor = afterItemCursor || '';
            const resp = await $.ajax({
                url: '/graphql',
                method: 'POST',
                data: JSON.stringify({
                    query: `
                        query(
                            $filters: WishlistFiltersInput
                            $cursor: String
                        ) {
                            customer {
                                wishlists(
                                    first: 50
                                    filters: $filters
                                ) {
                                    edges {
                                        node {
                                            entityId
                                            name
                                            items(
                                                first: 50
                                                after: $cursor
                                            ) {
                                                edges {
                                                    node {
                                                        entityId
                                                        productEntityId
                                                    }
                                                }
                                                pageInfo {
                                                    hasNextPage
                                                    endCursor
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    `,
                    variables: {
                        cursor,
                        filters,
                    },
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.graphQLToken}`,
                },
                xhrFields: {
                    withCredentials: true,
                },
            });

            return resp.data.customer.wishlists.edges.map(({ node }) => ({
                ...node,
                items: node.items.edges.map(({ node: itemNode }) => itemNode),
                endItemCursor: node.items.pageInfo.hasNextPage && node.items.pageInfo.endCursor
                    ? node.items.pageInfo.endCursor
                    : '',
            }));
        };

        // fetch wishlists items
        this.customerWishlists = await fetchWishlistItems();

        // continue fetching all items in wishlists
        for (const wishlist of this.customerWishlists) {
            let endItemCursor = wishlist.endItemCursor;
            while (endItemCursor) {
                const wishlist2 = await fetchWishlistItems([wishlist.entityId], endItemCursor);
                const { items, endItemCursor: nextEndItemCursor } = wishlist2.find(w => w.entityId === wishlist.entityId);
                wishlist.items.push(...items);
                endItemCursor = nextEndItemCursor;
            }
        }

        /**
         * All product IDs in customer's wishlists
         * @type {Set<number>}
         */
        this.customerWishlistProductIds = Array.from(this.customerWishlists.reduce((acc, wishlist) => {
            wishlist.items.forEach(item => acc.add(item.productEntityId));
            return acc;
        }, new Set()));
    }

    /**
     * Add wishlist products from local storage to to customer's wishlist
     */
    async updateCustomerWishlistFromAnonymous() {
        /**
         * Product IDs in local storage only
         * @type {number[]}
         */
        const newProductIds = this.getAnonymousProducts().filter(productId => !this.customerWishlistProductIds.includes(productId));

        // add products in local storage to customer's wishlist
        await this.addCustomerWishlistItems(this.customerWishlists[0]?.entityId, newProductIds);

        // clear local storage
        this.clearAnonymousProducts();
    }

    /**
     * Add products to wishlist using GraphQL API.
     *
     * Also update:
     * - `customerWishlists`
     * - `customerWishlistProductIds`
     *
     * @param {number} wishlistId Wishlist ID
     * @param {number[]} productIds List of product IDs
     * @see customerWishlists
     * @see customerWishlistProductIds
     */
    async addCustomerWishlistItems(wishlistId, productIds) {
        if (!productIds.length) return;

        const items = productIds.map(productId => ({
            productEntityId: productId,
        }));

        let _wishlistId = wishlistId;
        if (!_wishlistId) {
            const wishlist = await this.createWishlist('My Wish List');
            _wishlistId = wishlist.entityId;
        }

        const resp = await $.ajax({
            url: '/graphql',
            method: 'POST',
            data: JSON.stringify({
                query: `
                    mutation (
                        $wishlistId: Int!
                        $items: [WishlistItemInput!]!
                    ) {
                        wishlist {
                            addWishlistItems(input: {entityId: $wishlistId, items: $items}) {
                                result {
                                    entityId
                                    name
                                    items(first: 50) {
                                        edges {
                                            node {
                                                entityId
                                                productEntityId
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
                variables: {
                    wishlistId: _wishlistId,
                    items,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.graphQLToken}`,
            },
            xhrFields: {
                withCredentials: true,
            },
        });

        let wishlist = this.customerWishlists.find(w => w.entityId === _wishlistId);

        // merge newly added items to the existing wishlists objects
        if (!wishlist) {
            wishlist = {
                ...resp.data.wishlist.addWishlistItems.result,
                items: resp.data.wishlist.addWishlistItems.result.items.edges.map(({ node }) => node),
            };
            this.customerWishlists.push(wishlist);
        } else {
            resp.data.wishlist.addWishlistItems.result.items.edges.forEach(({ node }) => {
                const exist = wishlist.items.find(item => item.entityId === node.entityId);
                if (!exist) {
                    wishlist.items.push(node);
                }
            });
        }

        // merge newly added product ids to the existing product ids
        resp.data.wishlist.addWishlistItems.result.items.edges.forEach(({ node }) => {
            const exist = this.customerWishlistProductIds.includes(node.productEntityId);
            if (!exist) {
                this.customerWishlistProductIds.push(node.productEntityId);
            }
        });

        // add product ids to the the existing product ids (in case graphql response is not updated or error)
        productIds.forEach(productId => {
            const exist = this.customerWishlistProductIds.includes(productId);
            if (!exist) {
                this.customerWishlistProductIds.push(productId);
            }
        });
    }

    /**
     * Add product to wishlist by URL using REST API
     *
     * @deprecated use `addCustomerWishlistItems` instead for better performance
     * @param {string} url Add product to wishlist URL
     * @param {number} productId Product ID
     * @returns {Promise<any>}
     */
    async addProductToWishlist(url, productId) {
        if (!this.customerWishlistProductIds.includes(productId)) {
            this.customerWishlistProductIds.push(productId);
        }

        return $.ajax({
            url,
            method: 'POST',
        });
    }

    /**
     * Remove product from a wishlist.
     *
     * Also update:
     * - `customerWishlists`
     * - `customerWishlistProductIds`
     *
     * @param {number} wishlistId Wishlist ID
     * @param {number} productId Product ID
     * @see customerWishlists
     * @see customerWishlistProductIds
     * @returns {Promise<any>}
     */
    async deleteCustomerWishlistItem(wishlistId, productId) {
        const wishlist = this.customerWishlists.find(w => w.entityId === wishlistId);
        const itemEntityIds = wishlist?.items
            .filter(item => item.productEntityId === productId)
            .map(item => item.entityId);

        const resp = await $.ajax({
            url: '/graphql',
            method: 'POST',
            data: JSON.stringify({
                query: `
                    mutation (
                        $wishlistId: Int!
                        $itemEntityIds: [Int!]!
                    ) {
                        wishlist {
                            deleteWishlistItems(input: {entityId: $wishlistId, itemEntityIds: $itemEntityIds}) {
                                result {
                                    entityId
                                }
                            }
                        }
                    }
                `,
                variables: {
                    wishlistId,
                    itemEntityIds,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.graphQLToken}`,
            },
            xhrFields: {
                withCredentials: true,
            },
        });

        // remove product from the wishlists objects
        wishlist.items = wishlist.items.filter(item => item.productEntityId !== productId);

        // remove product id from the product ids if not found in any wishlists
        const exist = this.customerWishlists.reduce((_found, w) => _found || w.items.find(item => item.productEntityId === productId), false);
        if (!exist && this.customerWishlistProductIds.includes(productId)) {
            this.customerWishlistProductIds = this.customerWishlistProductIds.filter(id => id !== productId);
        }

        return resp;
    }

    /**
     * Create a new wishlist and add a product to it.
     * - Also update `customerWishlists` and `customerWishlistProductIds`
     *
     * @param {string} name Wishlist name
     * @param {boolean} isPublic Is wishlist public
     * @param {number} productId Product ID
     * @see customerWishlists
     * @see customerWishlistProductIds
     * @returns {Promise<{
     *   entityId: number,
     *   name: string,
     *   items: { entityId: number, productEntityId: number }[]
     * }>}
     */
    async createWishlist(name, isPublic = false, productId) {
        const resp = await $.ajax({
            url: '/graphql',
            method: 'POST',
            data: JSON.stringify({
                query: `
                    mutation (
                        $name: String!
                        $isPublic: Boolean!
                        $items: [WishlistItemInput!]
                    ) {
                        wishlist {
                            createWishlist(input: { name: $name, isPublic: $isPublic, items: $items }) {
                                result {
                                    entityId
                                    name
                                    items(first: 50) {
                                        edges {
                                            node {
                                                entityId
                                                productEntityId
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
                variables: {
                    name,
                    isPublic,
                    items: productId ? [{ productEntityId: productId }] : [],
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.graphQLToken}`,
            },
            xhrFields: {
                withCredentials: true,
            },
        });

        const wishlist = {
            ...resp.data.wishlist.createWishlist.result,
            items: resp.data.wishlist.createWishlist.result.items.edges.map(({ node }) => node),
        };
        this.customerWishlists.push(wishlist);
        this.customerWishlistProductIds.push(productId);

        return wishlist;
    }

    /**
     * Populate all customer's wishlists to the dropdown for product cards.
     * Also update the state of wishlist buttons in the dropdown to determine which wishlists contain the product.
     *
     * @param {jQuery} $dropdownToggle Dropdown toggle button (add to wishlist icon)
     */
    populateCustomerWishlistDropdown($dropdownToggle) {
        const dropdownId = $dropdownToggle.data('dropdown');
        const $dropdown = $(`#${dropdownId}`);
        const $default = $dropdown.find('[data-wishlist-add-to-default]');
        const $form = $dropdownToggle.closest('[data-wishlist-add]');
        const url = $form.attr('action');
        const productId = $form.data('wishlistAdd');

        // populate dropdown wishlists
        if ($default.length > 0 && this.customerWishlists.length > 0) {
            this.customerWishlists.forEach(wishlist => {
                const html = mustache.render(this.dropdownItemTemplate, {
                    url,
                    id: wishlist.entityId,
                    name: wishlist.name,
                    count: wishlist.items.length,
                });
                $default.before(html);
            });
            $default.remove();
        } else {
            $default.off('click', this.onClickAddToWishlist).on('click', this.onClickAddToWishlist);
        }

        const $buttons = $dropdown.find('[data-wishlist-id]');

        $buttons.each((_i, el) => {
            const $btn = $(el);
            const wishlistId = $btn.data('wishlistId');
            const wishlist = this.customerWishlists.find(w => w.entityId === wishlistId);
            const found = wishlist?.items.find(item => item.productEntityId === productId);

            if (found) {
                $(el).addClass('is-active');
            }
        });

        $buttons.off('click', this.onClickAddToWishlist).on('click', this.onClickAddToWishlist);
    }

    /**
     * Update the position of the dropdown to prevent hidden by parent elements.
     *
     * @param {jQuery} $dropdown Dropdown element
     * @param {jQuery} $target Target element
     */
    updateDropdownPosition($dropdown, $target) {
        const rect = $target[0].getBoundingClientRect();

        const align = $dropdown.data('dropdownAlign') || 'left';
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const top = Math.round(rect.top + scrollTop + rect.height);
        const left = Math.round(rect.left + scrollLeft);
        const right = Math.round(document.documentElement.clientWidth - (rect.left + scrollLeft + rect.width));

        // move the dropdown to the body to prevent hidden by parent elements
        if (!$dropdown.parent().is('body')) {
            const form = $dropdown.closest('[data-wishlist-add]')[0];
            $dropdown
                .data('formElement', form)
                .appendTo('body');
        }

        $dropdown.css({
            top,
            left: align === 'left' ? left : '',
            right: align === 'right' ? right : '',
            width: '',
            maxWidth: '',
        });
    }

    /**
     * Handle add to wishlist button click event in the dropdown when customer is logged in.
     * - Add or remove product from wishlist.
     * - Update the state of the button in the dropdown.
     * - Show notification message after added or deleted product from wishlist.
     */
    onClickAddToWishlist(event) {
        event.preventDefault();
        const $button = $(event.currentTarget);
        const $form = this.getForm($button);
        const $toggle = $form.find('[data-wishlist-add-customer]');
        const wishlistId = $button.data('wishlistId');
        const productId = $form.data('wishlistAdd');
        const name = $form.data('productName');

        if ($button.hasClass('is-active')) {
            this.deleteCustomerWishlistItem(wishlistId, productId)
                .then(() => {
                    $button.removeClass('is-active');

                    // de-active the wishlist icon if not found in any wishlists
                    if (!this.customerWishlistProductIds.includes(productId)) {
                        $toggle.removeClass('is-active');
                    }

                    this.notification.info(this.txtDeletedItemWishlist.replace('{name}', name), this.infoIconTemplate);
                })
                .catch(() => {
                    this.notification.error(this.genericError);
                });
        } else {
            this.addCustomerWishlistItems(wishlistId, [productId])
                .then(() => {
                    $button.addClass('is-active');
                    $toggle.addClass('is-active');

                    this.notification.info(this.txtAddedItemWishlist.replace('{name}', name), this.infoIconTemplate);
                })
                .catch(() => {
                    this.notification.error(this.genericError);
                });
        }
    }

    openCreatingWishlistModal(productId, productName) {
        this.modal.openModal($('#creatingWishlistModalContent').html());

        fixFormElementUniqueIds(this.modal.$modal);

        this.modal.$modal.find('form').on('submit', event => {
            event.preventDefault();

            const $form = $(event.currentTarget);
            const name = $form.find('input[name="wishlistname"]').val();
            const share = $form.find('input[name="publicwishlist"]').prop('checked');

            this.createWishlist(name, share, productId).then((wishlist) => {
                this.modal.closeModal();
                this.notification.info(this.txtAddedItemWishlist.replace('{name}', productName), this.infoIconTemplate);

                // append the new wishlist to the dropdown of all product cards and product view
                $('[data-wishlist-dropdown]').each((_i, el) => {
                    const $dropdown = $(el);
                    const $form2 = this.getForm($dropdown);
                    const url = $form2.attr('action');
                    const $default = $dropdown.find('[data-wishlist-add-to-default]');

                    // only append the new wishlist for dropdowns initialized
                    if ($default.length > 0) return;

                    $(mustache.render(this.dropdownItemTemplate, {
                        url,
                        id: wishlist.entityId,
                        name: wishlist.name,
                        count: wishlist.items.length,
                    })).insertBefore($dropdown.children().last());
                });
            });
        });
    }

    /**
     * Open wishlist modal display all wishlist products.
     */
    async openAnonymousWishlistProductsModal() {
        const modal = new Modal({
            modalExtraClass: 'eyeva__wishlist-modal',
            modalTitle: this.txtWishlistViewHeading.replace('{name}', ''),
            closeOnBackgroundClick: true,
            closeOnEsc: true,
            stackable: true,
        });
        modal.openModal('', true);

        const {
            context,
            customerId,
            hidePriceFromGuests,
            txtEmptyWishlist,
            txtLoadMore,
            txtCollapse,
        } = this;
        const restrictToLogin = !customerId && hidePriceFromGuests;
        const productIds = this.getAnonymousProducts();
        const query = new ProductCardsGraphQLQuery({
            ...context,
            restrictToLogin,
        });

        const limit = 12;
        let currentPage = 1;

        const generateHtml = async (page) => {
            const from = (page - 1) * limit;
            const to = from + limit;
            const products = await query.load(productIds.slice(from, to));
            const productCards = products.map(product => mustache.render(productCardTemplate, product));
            const html = mustache.render(this.anonymousWishlistProductsTemplate, {
                productCards,
                txtEmptyWishlist,
                txtLoadMore,
                txtCollapse,
            });
            return html;
        };

        modal.updateContent(await generateHtml(currentPage));
        modal.$modal.find('.productGrid').children().attr('data-page', currentPage);

        this.updateWishlistButtons(modal.$modal);

        const $moreBtn = modal.$modal.find('[data-more]').hide();
        const $lessBtn = modal.$modal.find('[data-less]').hide();

        if (productIds.length > limit) $moreBtn.show();

        // load more products when click on the "Load more" button
        modal.$modal.find('[data-more]').on('click', async () => {
            currentPage += 1;

            // show products on the current page if already loaded
            const $products = modal.$modal.find('.productGrid').children().filter((i, el) => $(el).data('page') === currentPage).show();

            // load more products if not loaded
            if ($products.length === 0) {
                $moreBtn.addClass('_loading').attr('disabled', true);

                const html = await generateHtml(currentPage);
                const $newProducts = $(html).find('.productGrid').children().attr('data-page', currentPage);

                modal.$modal.find('.productGrid').append($newProducts);
                $moreBtn.removeClass('_loading').removeAttr('disabled');

                this.updateWishlistButtons(modal.$modal);
            }

            $lessBtn.show();
            if (productIds.length <= currentPage * limit) $moreBtn.hide();
        });

        // collapse products when click on the "Collapse" button
        modal.$modal.find('[data-less]').on('click', () => {
            currentPage = 1;
            modal.$modal.find('.productGrid').children().filter((i, el) => $(el).data('page') > 1).hide();
            $moreBtn.show();
            $lessBtn.hide();
        });

        // close the wishlist products modal when any other modal is opened (quick view, etc.)
        // $('#modal').one(ModalEvents.opened, () => {
        //     if (modal.$modal) modal.closeModal();
        // });
    }
}

/**
 * Create a singleton instance of the WishList class.
 *
 * @param {Object} context
 * @returns {WishList}
 */
export default function initWishList(context) {
    if (!wishlistInstance) {
        wishlistInstance = new WishList(context);
    }
    return wishlistInstance;
}
