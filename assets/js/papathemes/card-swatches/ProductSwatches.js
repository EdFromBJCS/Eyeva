import { debounce } from 'lodash';
import Card from './Card';
import SaleCountdown from '../sale-countdown';

function strEqual(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

class ProductSwatches {
    constructor({
        showSwatches = true,
        shouldUpdateMinMaxQty = false,
        cardSelector = '.product .card, .productCarousel-slide .card, .product .listItem',
        productIdSelector = '[data-product-id]',
        findProductIdByImg = false,
        swatchesContainerSelector = '.card-text--colorswatches',
        cardImageSelector = '.card-image',
        cardImageContainerSelector = '.card-img-container',
        cardTextPriceSelector = '.card-text--price',
        addToCartFormSelector = 'form[data-cart-item-add]',
        productViewFile = 'products/product-view',
        attributesTemplate = `
            <div class="productSwatches-attributes">
                {{#attributes}}
                    <div class="productSwatches-swatches" data-swatches="{{0.attributeName}}">
                        {{#.}}
                            <a href="#" class="productSwatches-swatches-item productSwatches-swatches-item--{{type}}" title="{{label}}"
                                data-attribute-id="{{attributeId}}"
                                data-attribute-value="{{attributeValue}}">{{&content}}</a>
                        {{/.}}
                        <button type="button" class="productSwatches-swatches-more" data-more>+ More</button>
                        <button type="button" class="productSwatches-swatches-less" data-less>- Less</button>
                    </div>
                {{/attributes}}
            </div>
        `,
        countdownSelector = '.card-countdown',
        countdownCustomField = '__countdown_date',
        templateCustomTags = null,
        imageSize = '590x590',
        zoomSize = '1280x1280',
        productSize = '900x900',
        thumbSize = '80x80',
        inputFinderFunc = null,
        swatchesLimit = 3,
        imageReplacerFunc = null,
        includeOptions = [],
        displayStyles = ['Swatch', 'RectangleBoxes'],
        displayInStockOnly = false,
        autoSelectOptionValues = true,
        graphQLToken = '',
        enableVariantImages = false,
        showCountdown = true,
        showGallery = false,
        showHoverVideo = false,
        image360CustomField = '__@360',
        hoverVideoCustomField = '__@card_video',
        showPriceCall = true,
        txtSaleCountdownJSON,
        txtVideosLabel = 'Videos',
        txtImages360Label = '360 Views',
        txtImagesLabel = 'Product Images',
    } = {}) {
        this.config = {
            showSwatches,
            shouldUpdateMinMaxQty,
            cardSelector,
            productIdSelector,
            findProductIdByImg,
            swatchesContainerSelector,
            cardImageSelector,
            cardImageContainerSelector,
            cardTextPriceSelector,
            addToCartFormSelector,
            productViewFile,
            attributesTemplate,
            countdownSelector,
            countdownCustomField,
            templateCustomTags,
            imageSize,
            zoomSize,
            productSize,
            thumbSize,
            inputFinderFunc,
            swatchesLimit,
            imageReplacerFunc,
            includeOptions: includeOptions.map(s => String(s).trim().toLocaleUpperCase()),
            displayStyles,
            displayInStockOnly,
            autoSelectOptionValues,
            graphQLToken,
            enableVariantImages,
            showCountdown,
            showGallery,
            showHoverVideo,
            image360CustomField,
            hoverVideoCustomField,
            showPriceCall,
            txtVideosLabel,
            txtImages360Label,
            txtImagesLabel,
        };

        SaleCountdown.configure({
            txtSaleCountdownJSON,
        });

        this.bindEvents();
    }

    bindEvents() {
        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            this.mutationObserver = new MutationObserver(debounce(() => {
                this.onWindowScroll();
            }, 200));
            this.mutationObserver.observe(document.documentElement, {
                childList: true,
                subtree: true,
            });
        }
    }

    unbindEvents() {
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
            this.mutationObserver = null;
        }
    }

    onWindowScroll($body = null) {
        /**
         * @type {Card[]}
         */
        const cards = [];

        $(this.config.cardSelector, $body).not('.productSwatchesLoaded').each((i, el) => {
            const $scope = $(el).addClass('productSwatchesLoaded');
            if ($scope.data('productSwatchesCard')) {
                return;
            }

            let productId = Number($scope.data('productId') || $scope.find(this.config.productIdSelector).data('productId'));
            if (!productId) {
                // try to find product ID by img src
                if (!this.config.findProductIdByImg) {
                    return;
                }
                productId = $scope.find('img').get().reduce((id, img) => {
                    if (id) {
                        return id;
                    }
                    const m = String(img.src).match(/products\/([0-9]+)\//);
                    return m ? Number(m[1]) : id;
                }, null);
                if (!productId) {
                    return;
                }
            }

            const $attributesContainer = $scope.find(this.config.swatchesContainerSelector);
            const $countdown = $scope.find(this.config.countdownSelector);
            const $cardPriceContainer = $scope.find(this.config.cardTextPriceSelector);
            const hasPriceCall = $scope.find('[data-price-call-placeholder]').length > 0;

            if (!this.config.showGallery && !this.config.showHoverVideo && !this.config.showCountdown && !this.config.showSwatches && (!this.config.showPriceCall || !hasPriceCall)) {
                return;
            }


            const {
                productViewFile,
                attributesTemplate,
                countdownCustomField,
                templateCustomTags,
                addToCartFormSelector,
                imageSize,
                zoomSize,
                productSize,
                thumbSize,
                inputFinderFunc,
                swatchesLimit,
                imageReplacerFunc,
                includeOptions,
                displayStyles,
                displayInStockOnly,
                autoSelectOptionValues,
                graphQLToken,
                showSwatches,
                shouldUpdateMinMaxQty,
                showCountdown,
                showGallery,
                showHoverVideo,
                image360CustomField,
                hoverVideoCustomField,
                cardImageContainerSelector,
                showPriceCall,
                txtVideosLabel,
                txtImages360Label,
                txtImagesLabel,
            } = this.config;

            const $cardImage = $scope.find(this.config.cardImageSelector).first();

            const card = new Card({
                $scope,
                $attributesContainer,
                productId,
                productViewFile,
                attributesTemplate,
                $countdown,
                countdownCustomField,
                templateCustomTags,
                addToCartFormSelector,
                $cardImage,
                $cardPriceContainer,
                imageSize,
                zoomSize,
                productSize,
                thumbSize,
                inputFinderFunc,
                swatchesLimit,
                imageReplacerFunc,
                includeOptions,
                displayStyles,
                displayInStockOnly,
                autoSelectOptionValues,
                autoInit: !graphQLToken,
                graphQLToken,
                showSwatches,
                shouldUpdateMinMaxQty,
                showCountdown,
                showGallery,
                showHoverVideo,
                image360CustomField,
                hoverVideoCustomField,
                cardImageContainerSelector,
                showPriceCall,
                txtVideosLabel,
                txtImages360Label,
                txtImagesLabel,
            });
            cards.push(card);

            $scope.data('productSwatchesCard', card);
        });

        if (this.config.graphQLToken && cards.length > 0) {
            const ids = Array.from(new Set(cards.map(card => card.productId)));
            // this.fetchGraphQLProducts(ids).then(edges => {
            //     edges.forEach(edge => {
            //         cards.filter(card => card.productId === edge.node.entityId).forEach(card => {
            //             card.graphQLNode = edge.node; // eslint-disable-line no-param-reassign
            //             card.init();
            //         });
            //     });
            // });

            this.fetchGraphQLProducts(ids).then(async (edges) => {
                const variantImages = this.config.enableVariantImages ? await this.fetchGraphQLVariantImages(this.createGraphQLParamsForVariantImages(edges.map(({ node }) => node))) : [];
                edges.forEach(edge => {
                    cards.filter(card => card.productId === edge.node.entityId).forEach(card => {
                        // eslint-disable-next-line no-param-reassign
                        card.graphQLNode = edge.node;
                        // eslint-disable-next-line no-param-reassign
                        card.variantImageUrlTemplate = variantImages.find(v => v.productId === card.productId)?.imageUrlTemplate;
                        // eslint-disable-next-line no-param-reassign
                        card.arrayAttributeSelect = variantImages.find(v => v.productId === card.productId)?.arrayAttributeIdSelect;
                        card.init();
                    });
                });
            });
        }
    }

    async fetchGraphQLProducts(ids) {
        let edges = [];
        for (let i = 0; i < ids.length; i += 50) {
            const _ids = ids.slice(i, i + 50);
            const resp = await $.ajax({
                url: '/graphql',
                method: 'POST',
                data: JSON.stringify({
                    query: `
                        query ($entityIds: [Int!]) {
                            site {
                                products (entityIds: $entityIds, first: 50) {
                                    edges {
                                        node {
                                            entityId
                                            minPurchaseQuantity
                                            maxPurchaseQuantity
                                            ${this.config.showSwatches ? `
                                                productOptions {
                                                    edges {
                                                        node {
                                                            entityId
                                                            displayName
                                                            ... on CheckboxOption {
                                                                checkedByDefault
                                                            }
                                                            ... on MultipleChoiceOption {
                                                                displayStyle
                                                                values {
                                                                    edges {
                                                                        node {
                                                                            entityId
                                                                            isDefault
                                                                            ... on SwatchOptionValue {
                                                                                label
                                                                                hexColors
                                                                                imageUrl(width: 100)
                                                                            }
                                                                            ... on MultipleChoiceOptionValue {
                                                                                label
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            ` : ''}
                                            ${this.config.showCountdown || this.config.showGallery || this.config.showHoverVideo ? `
                                                customFields(names: ["${this.config.countdownCustomField}", "${this.config.image360CustomField}", "${this.config.hoverVideoCustomField}"]) {
                                                    edges {
                                                        node {
                                                            name
                                                            value
                                                        }
                                                    }
                                                }
                                            ` : ''}
                                            ${this.config.showGallery ? `
                                                videos(first: 1) {
                                                    edges {
                                                        node {
                                                            title
                                                            url
                                                        }
                                                    }
                                                }
                                            ` : ''}
                                            availabilityV2 {
                                                ... on ProductUnavailable {
                                                message
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    `,
                    variables: {
                        entityIds: _ids,
                    },
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.config.graphQLToken}`,
                },
                xhrFields: {
                    withCredentials: true,
                },
            });
            edges = edges.concat(resp.data.site.products.edges);
        }
        return edges;
    }

    /**
     * Create GraphQL params for fetching variant images
     * @param {Product} products
     * @returns {[{ entityId: number, optionValueIds: [{ optionEntityId: number, valueEntityId: number }]}]}
     */
    createGraphQLParamsForVariantImages(products) {
        const searchParams = new URLSearchParams(window.location.search);
        const filters = searchParams.get('_bc_fsnf') ? Array.from(searchParams.entries()).map(([name, value]) => ({ name: name.replace('[]', ''), value })).filter(({ name }) => name !== '_bc_fsnf') : [];
        const gqlParams = [];

        products.forEach(node => {
            const optionValueIds = [];

            node.productOptions.edges.forEach(({ node: optionNode }) => {
                if (Array.isArray(optionNode.values?.edges)) {
                    optionNode.values.edges.forEach(({ node: valueNode }) => {
                        filters.forEach(({ name, value }) => {
                            if (strEqual(name, optionNode.displayName) && strEqual(value, valueNode.label)) {
                                if (!optionValueIds.find(({ optionEntityId }) => optionEntityId === optionNode.entityId)) {
                                    optionValueIds.push({
                                        optionEntityId: optionNode.entityId,
                                        valueEntityId: valueNode.entityId,
                                    });
                                }
                            }
                        });
                    });
                }
            });

            if (optionValueIds.length > 0) {
                gqlParams.push({
                    entityId: node.entityId,
                    optionValueIds,
                });
            }
        });

        return gqlParams;
    }

    /**
     * Fetch variant images via GraphQL
     * @param {[{ entityId: number, optionValueIds: [{ optionEntityId: number, valueEntityId: number }]}]} gqlParams GraphQL variables
     * @returns {[{ productId: number, variantId: number, imageUrlTemplate: string }]}
     */

    async fetchGraphQLVariantImages(gqlParams) {
        let products = [];
        for (let i = 0; i < gqlParams.length; i += 6) {
            const _gqlParams = gqlParams.slice(i, i + 6);
            const resp = await $.ajax({
                url: '/graphql',
                method: 'POST',
                data: JSON.stringify({
                    query: `
                        query(
                            ${_gqlParams.map(({ entityId }) => `$optionValueIds${entityId}: [OptionValueId!]`).join(',\n')}
                        ) {
                            site {
                                ${_gqlParams.map(({ entityId }) => `
                                    product${entityId}: product(entityId: ${entityId}) {
                                        entityId
                                        variants(optionValueIds: $optionValueIds${entityId}, first: 1) {
                                            edges {
                                                node {
                                                    entityId
                                                    defaultImage {
                                                        urlTemplate
                                                    }
                                                    productOptions {
                                                        edges {
                                                            node {
                                                                entityId
                                                                displayName
                                                                ... on CheckboxOption {
                                                                    checkedByDefault
                                                                }
                                                                ... on MultipleChoiceOption {
                                                                    displayStyle
                                                                    values {
                                                                        edges {
                                                                            node {
                                                                                entityId
                                                                                isDefault
                                                                                ... on MultipleChoiceOptionValue {
                                                                                    label
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                `).join('\n')}
                            }
                        }
                    `,
                    variables: _gqlParams.reduce((acc, { entityId, optionValueIds }) => ({ ...acc, [`optionValueIds${entityId}`]: optionValueIds }), {}),
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.config.graphQLToken}`,
                },
                xhrFields: {
                    withCredentials: true,
                },
            });
            products = products.concat(_gqlParams.map(({ entityId }) => resp.data.site[`product${entityId}`]).filter(p => p));
        }
        const productImages = products.map(product => ({
            productId: product.entityId,
            variantId: product.variants.edges[0]?.node.entityId,
            imageUrlTemplate: product.variants.edges[0]?.node.defaultImage?.urlTemplate,
            arrayAttributeIdSelect: product.variants.edges[0]?.node.productOptions?.edges,
        }));
        return productImages;
    }
}

export default ProductSwatches;
