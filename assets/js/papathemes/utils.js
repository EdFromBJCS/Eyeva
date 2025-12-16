/* eslint-disable camelcase */

function _formatMoney(_amount, _decimalCount = 2, decimal = '.', thousands = ',') {
    try {
        let decimalCount = Math.abs(_decimalCount);
        decimalCount = Number.isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = _amount < 0 ? '-' : '';
        const amount = Math.abs(Number(_amount) || 0).toFixed(decimalCount);

        const i = parseInt(amount, 10).toString();
        const j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '');
    } catch (e) {
        return null;
    }
}

export function currencyFormat(value, {
    currency_token = '$',
    currency_location = 'left',
    decimal_token = '.',
    decimal_places = 2,
    thousands_token = ',',
} = {}) {
    const _value = _formatMoney(value, decimal_places, decimal_token, thousands_token);
    return currency_location.toLowerCase() === 'left' ? `${currency_token}${_value}` : `${_value}${currency_token}`;
}

export function extractMoney(price, defaultMoney = {
    currency_token: '$',
    currency_location: 'left',
    decimal_token: '.',
    decimal_places: 2,
    thousands_token: ',',
}) {
    const money = { ...defaultMoney };

    if (!price && price !== 0) {
        return money;
    }

    const m = String(price).trim().match(/^([^0-9]*)([0-9.,]*)([^0-9]*)$/);
    const leftSymbol = String(m[1]).trim();
    const value = String(m[2]);
    const rightSymbol = String(m[3]).trim();
    const commaPosition = value.indexOf(',');
    const commaCount = (value.match(/,/g) || []).length;
    const dotPosition = value.indexOf('.');
    const dotCount = (value.match(/\./g) || []).length;

    if (leftSymbol) {
        money.currency_token = leftSymbol;
        money.currency_location = 'left';
    } else if (rightSymbol) {
        money.currency_token = rightSymbol;
        money.currency_location = 'right';
    }

    if (commaCount.length >= 2) {
        money.thousands_token = ',';
        money.decimal_token = '.';
        money.decimal_places = dotPosition > -1 ? value.length - dotPosition - 1 : 0;
    } else if (dotCount.length >= 2) {
        money.thousands_token = '.';
        money.decimal_token = ',';
        money.decimal_places = commaPosition > -1 ? value.length - commaPosition - 1 : 0;
    } else if (commaPosition > dotPosition && dotPosition > -1) {
        money.thousands_token = '.';
        money.decimal_token = ',';
        money.decimal_places = value.length - commaPosition - 1;
    } else if (dotPosition > commaPosition && commaPosition > -1) {
        money.thousands_token = ',';
        money.decimal_token = '.';
        money.decimal_places = value.length - dotPosition - 1;
    } else if (commaPosition > -1) {
        if ((value.length - commaPosition - 1) % 3 === 0) {
            money.thousands_token = ',';
            money.decimal_token = '.';
            money.decimal_places = 0;
        } else {
            money.thousands_token = '.';
            money.decimal_token = ',';
            money.decimal_places = value.length - commaPosition - 1;
        }
    } else if (dotPosition > -1) {
        if ((value.length - dotPosition - 1) % 3 === 0) {
            money.thousands_token = '.';
            money.decimal_token = ',';
            money.decimal_places = 0;
        } else {
            money.thousands_token = ',';
            money.decimal_token = '.';
            money.decimal_places = value.length - dotPosition - 1;
        }
    } else if (commaPosition === -1 && dotPosition === -1) {
        money.decimal_places = 0;
    }

    return money;
}

export function setCookie(cname, cvalue, sec) {
    const d = new Date();
    d.setTime(d.getTime() + sec * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

export function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

export function loadStyle(url) {
    if (Array.from(document.getElementsByTagName('link')).filter(el => el.href === url).length > 0) {
        return;
    }
    $('<link></link>').attr({ rel: 'stylesheet', href: url }).appendTo('head');
}

// mooncat: full functionality cart popup
export async function initCartPopup() {
    console.log('TODO: implement initCartPopup'); // eslint-disable-line no-console
}

export function openCartPreview() {
    console.log('TODO: implement openCartPreview'); // eslint-disable-line no-console
}

export function flyToCart(object, fromEl = null, toEl = '[data-cart-preview]') {
    const $object = $(object);
    const $toEl = $(toEl).first();
    const $fromEl = fromEl ? $(fromEl).first() : $object.first();

    if ($toEl.length === 0) {
        return;
    }
    const $el = $object.clone()
        .appendTo('body')
        .css({
            position: 'absolute',
            top: $fromEl.offset().top,
            left: $fromEl.offset().left,
            zIndex: 10000,
            opacity: 0,
        });
    $el.animate({
        top: $toEl.offset().top + $toEl.height() / 2,
        left: $toEl.offset().left + $toEl.width() - $el.width(),
        opacity: 0.5,
    }, 500, () => {
        $el.animate({
            top: $toEl.offset().top + $toEl.height(),
            opacity: 0.2,
        }, 200, () => {
            $el.animate({
                top: $toEl.offset().top,
                opacity: 0,
            }, 100, () => {
                $el.remove();
            });
        });
    });
}


// let uidVal = 0;
// const uid = (returnLastValue = false) => `papathemesuid${returnLastValue ? uidVal - 1 : uidVal++}`;

export class ProductCardsGraphQLQuery {
    constructor({
        graphQLToken = '',
        currencyCode = null, // fallback to active_currency_code if not provided
        restrictToLogin = false,
        showProductRating = false,
        showWishlist = false,
        defaultProductImage = '',

        // theme settings & store settings
        active_currency_code = 'USD',
        card_show_border = false,
        card_show_button = false,
        card_show_qty = false,
        card_show_compare = false,
        card_show_sku = false,
        card_show_brand = false,
        card_custom_fields = '',
        card_style = 'default',
        show_product_quick_view = false,
        card_show_swatches = true,
        card_show_countdown = false,
        card_show_gallery = false,
        ajax_add_to_cart = true,
        product_sale_badges = 'label',
        product_sale_label = 'Sale',
        product_custom_badges = true,
        show_rrp = true,
        pdp_retail_price_label = '',
        price_ranges = false,
        pdp_price_label = '',
        pdp_sale_price_label = '',
        pdp_non_sale_price_label = '',
        pdp_starting_price_label = '',
        pdp_sold_out_label = 'Sold Out',
        card_textAlign = 'left',
        // ---

        txtPriceWithoutTax = '',
        txtPriceWithTax = '',
        txtQuickView = 'Quick View',
        txtCompare = 'Compare',
        txtChooseOptions = 'Choose Options',
        txtPreOrder = 'Pre-Order',
        txtAddToCart = 'Add to Cart',
        txtQuantity = 'Quantity',
        txtQuantityDecrease = 'Decrease Quantity of {name}',
        txtQuantityIncrease = 'Increase Quantity of {name}',
        txtVideosLabel = 'Videos',
        txtImages360Label = '360 Views',
        ratingStarHtmlFunc = (isFull = true) => `
            <span class="icon icon--rating${isFull ? 'Full' : 'Empty'}">
                <svg><use href="#icon-star" /></svg>
            </span>
        `,
        customBadgeTemplate = (value) => `
            <div class="sale-flag-side sale-flag-side--custom">
                <span class="sale-text">${value}</span>
            </div>
        `,
        qtyBoxHtmlFunc = (id, min, max, qtyLabel, decLabel, incLabel) => `
            <div class="card-qty">
                <div class="form-field form-field--increments">
                    <div class="form-increment" data-card-quantity-change>
                        <button class="button button--icon" data-action="dec">
                            <span class="is-srOnly">${decLabel}</span>
                            <i class="icon" aria-hidden="true">
                                <svg>
                                    <use href="#icon-minus"/>
                                </svg>
                            </i>
                        </button>
                        <input class="form-input form-input--incrementTotal"
                            name="qty_${id}"
                            type="tel"
                            value="${min || 1}"
                            data-quantity-min="${min}"
                            data-quantity-max="${max}"
                            min="${min || 1}"
                            pattern="[0-9]*"
                            aria-label="${qtyLabel}"
                            aria-live="polite">
                        <button class="button button--icon" data-action="inc">
                            <span class="is-srOnly">${incLabel}</span>
                            <i class="icon" aria-hidden="true">
                                <svg>
                                    <use href="#icon-plus"/>
                                </svg>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        `,
        wishlistHtmlFunc = (id, name) => {
            const tmpl = $('#cardWishlistTemplate').text()
                .replace(/%%PRODUCT_ID%%/g, id)
                .replace(/%%PRODUCT_NAME%%/g, name);

            const $div = $('<div></div>').html(tmpl);

            // eslint-disable-next-line no-use-before-define
            fixFormElementUniqueIds($div);

            return $div.html();
        },
    } = {}) {
        this.graphQLToken = graphQLToken;
        this.currencyCode = currencyCode || active_currency_code;
        this.restrictToLogin = restrictToLogin;
        this.showProductRating = showProductRating;
        this.showWishlist = showWishlist;
        this.active_currency_code = active_currency_code;
        this.card_show_border = card_show_border;
        this.card_show_button = card_show_button;
        this.card_show_qty = card_show_qty;
        this.card_show_compare = card_show_compare;
        this.card_show_sku = card_show_sku;
        this.card_show_brand = card_show_brand;
        this.card_custom_fields = card_custom_fields;
        this.card_style = card_style;
        this.show_product_quick_view = show_product_quick_view;
        this.card_show_swatches = card_show_swatches;
        this.card_show_countdown = card_show_countdown;
        this.card_show_gallery = card_show_gallery;
        this.card_textAlign = card_textAlign;
        this.show_rrp = show_rrp;
        this.price_ranges = price_ranges;
        this.pdp_retail_price_label = pdp_retail_price_label;
        this.pdp_price_label = pdp_price_label;
        this.ajax_add_to_cart = ajax_add_to_cart;
        this.product_sale_badges = product_sale_badges;
        this.product_sale_label = product_sale_label;
        this.product_custom_badges = product_custom_badges;
        this.pdp_sale_price_label = pdp_sale_price_label;
        this.pdp_non_sale_price_label = pdp_non_sale_price_label;
        this.pdp_starting_price_label = pdp_starting_price_label;
        this.pdp_sold_out_label = pdp_sold_out_label;
        this.defaultProductImage = defaultProductImage;
        this.txtPriceWithoutTax = txtPriceWithoutTax;
        this.txtPriceWithTax = txtPriceWithTax;
        this.txtQuickView = txtQuickView;
        this.txtCompare = txtCompare;
        this.txtChooseOptions = txtChooseOptions;
        this.txtPreOrder = txtPreOrder;
        this.txtAddToCart = txtAddToCart;
        this.txtQuantity = txtQuantity;
        this.txtQuantityDecrease = txtQuantityDecrease;
        this.txtQuantityIncrease = txtQuantityIncrease;
        this.txtVideosLabel = txtVideosLabel;
        this.txtImages360Label = txtImages360Label;
        this.ratingStarHtmlFunc = ratingStarHtmlFunc;
        this.customBadgeTemplate = customBadgeTemplate;
        this.qtyBoxHtmlFunc = qtyBoxHtmlFunc;
        this.wishlistHtmlFunc = wishlistHtmlFunc;
        this.cachedProducts = {};
    }

    formatPrice(pricesObj, currency, tax, show_rrp, retail_price_label, pdp_price_label, pdp_non_sale_price_label, pdp_sale_price_label, price_ranges, pdp_starting_price_label) {
        const pricesHtml = (prices, incTax = false, abbr = false) => {
            const camel = incTax ? 'withTax' : 'withoutTax';
            const dash = incTax ? 'with-tax' : 'without-tax';
            const abbrHtml = abbr ? `<abbr title="${incTax ? this.txtPriceWithTax : this.txtPriceWithoutTax}">${incTax ? this.txtPriceWithTax : this.txtPriceWithoutTax}</abbr>` : '';
            let html = '';

            //
            // show price range
            //
            if (prices.priceRange.min.value !== prices.priceRange.max.value && price_ranges) {
                // main price range
                html += `
                    <div class="price-section price-section--${camel}">
                        <span class="price-label">${pdp_price_label}</span>
                        <span class="price-now-label" style="display: none;">${pdp_sale_price_label}</span>
                        <span data-product-price-${dash} class="price price--${camel} price--main">${currencyFormat(prices.priceRange.min.value, currency)}  - ${currencyFormat(prices.priceRange.max.value, currency)}</span>
                        ${abbrHtml}
                    </div>
                    ${/* Never display the "non-sales price" if there is a price range to be shown, but we do want the element on the page */ ''}
                    <div class="price-section price-section--${camel} non-sale-price--${camel}" style="display: none;">
                        <span class="price-was-label">${pdp_non_sale_price_label}</span>
                        <span data-product-non-sale-price-${dash} class="price price--non-sale">${currencyFormat(prices.basePrice.value)}</span>
                        ${abbrHtml}
                    </div>`;

                if (show_rrp) {
                    // retail price
                    html += `
                        <div class="price-section price-section--${camel} rrp-price--${camel}" style="display: none;">
                            <span class="price-was-label">${retail_price_label}</span>
                            <span data-product-rrp-price-${dash} class="price price--rrp">${prices.retailPrice ? currencyFormat(prices.retailPrice.value, currency) : ''}</span>
                            ${abbrHtml}
                        </div>`;
                }

                return html;
            }

            //
            // show starting price when price_ranges = false but price range exists
            //
            if (prices.priceRange.min.value !== prices.priceRange.max.value && !price_ranges) {
                // show starting price label with minimum price, similar to price.html logic
                html += `
                    <div class="price-section price-section--${camel}">
                        <span class="price-starting-label">${pdp_starting_price_label}</span>
                        <span class="price-label" style="display: none;">${pdp_price_label}</span>
                        <span class="price-now-label" style="display: none;">${pdp_sale_price_label}</span>
                        <span data-product-price-${dash} class="price price--${camel} price--main">${currencyFormat(prices.priceRange.min.value, currency)}</span>
                        ${abbrHtml}
                    </div>`;

                if (show_rrp) {
                    // retail price
                    html += `
                        <div class="price-section price-section--${camel} rrp-price--${camel}" ${!prices.retailPrice ? 'style="display: none;"' : ''}>
                            <span class="price-was-label">${retail_price_label}</span>
                            <span data-product-rrp-price-${dash} class="price price--rrp">${prices.retailPrice ? currencyFormat(prices.retailPrice.value, currency) : ''}</span>
                            ${abbrHtml}
                        </div>`;
                }

                return html;
            }

            //
            // show single price
            //

            const nonSalePrice = prices.basePrice.value !== prices.price.value ? prices.basePrice : null;

            // main price
            html += `
                <div class="price-section price-section--${camel}">
                    <span class="price-label" ${nonSalePrice ? 'style="display: none;"' : ''}>${pdp_price_label}</span>
                    <span class="price-now-label" ${!nonSalePrice ? 'style="display: none;"' : ''}>${pdp_sale_price_label}</span>
                    <span data-product-price-${dash} class="price price--${camel} price--main ${nonSalePrice || prices.retailPrice ? '_hasSale' : ''}">
                        ${currencyFormat(prices.price.value, currency)}
                    </span>
                    ${abbrHtml}
                </div>`;

            // non-sale price
            html += `
                <div class="price-section price-section--${camel} non-sale-price--${camel}" ${!nonSalePrice ? 'style="display: none;"' : ''}>
                    <span class="price-was-label">${pdp_non_sale_price_label}</span>
                    <span data-product-non-sale-price-${dash} class="price price--non-sale">${nonSalePrice ? currencyFormat(nonSalePrice.value, currency) : ''}</span>
                    ${abbrHtml}
                </div>`;

            if (show_rrp) {
                // retail price
                html += `
                    <div class="price-section price-section--${camel} rrp-price--${camel}" ${!prices.retailPrice ? 'style="display: none;"' : ''}>
                        <span class="price-was-label">${retail_price_label}</span>
                        <span data-product-rrp-price-${dash} class="price price--rrp">
                            ${prices.retailPrice ? currencyFormat(prices.retailPrice.value, currency) : ''}
                        </span>
                        ${abbrHtml}
                    </div>`;
            }

            return html;
        };

        if (tax === 'INC') {
            return pricesHtml(pricesObj, true, false);
        } else if (tax === 'EX') {
            return pricesHtml(pricesObj, false, false);
        }

        return `
            ${pricesHtml(pricesObj.priceWithTax, true, true)}
            <div class="_br"></div>
            ${pricesHtml(pricesObj.priceWithoutTax, false, true)}
        `;
    }

    templateCustomFields(arrayCustomFields, card_custom_fields) {
        if (!arrayCustomFields || arrayCustomFields.length === 0 || !card_custom_fields) {
            return '';
        }

        if (card_custom_fields === '*') {
            // Show all fields except those starting with '__'
            const filteredFields = arrayCustomFields.filter(item => !item.node.name.startsWith('__'));
            if (filteredFields.length > 0) {
                const customFieldItems = filteredFields.map(item => `
                    <dt class="card-customField-name card-customField-name--${item.node.name.toLowerCase().replace(/\s+/g, '-')}">${item.node.name}</dt>
                    <dd class="card-customField-value card-customField-value--${item.node.name.toLowerCase().replace(/\s+/g, '-')}">${item.node.value}</dd>
                `).join('');

                return `<dl class="card-customFields">${customFieldItems}</dl>`;
            }
        } else {
            // Show only specified fields in comma-separated list
            const arrayCardCustomFields = card_custom_fields.split(',').map(field => field.trim());
            const matchedFields = arrayCustomFields.filter(item => arrayCardCustomFields.includes(item.node.name));

            if (matchedFields.length > 0) {
                const customFieldItems = matchedFields.map(item => `
                    <dt class="card-customField-name card-customField-name--${item.node.name.toLowerCase().replace(/\s+/g, '-')} _hide">${item.node.name}</dt>
                    <dd class="card-customField-value card-customField-value--${item.node.name.toLowerCase().replace(/\s+/g, '-')}">${item.node.value}</dd>
                `).join('');

                return `<dl class="card-customFields">${customFieldItems}</dl>`;
            }
        }

        return '';
    }

    async load(_productIds) {
        const productIds = _productIds.slice(0, 50);
        const cacheKey = `${this.currencyCode}_${productIds.join(',')}`;

        if (!this.cachedProducts[cacheKey]) {
            this.cachedProducts[cacheKey] = await new Promise(resolve => {
                $.ajax({
                    url: '/graphql',
                    method: 'POST',
                    data: JSON.stringify({
                        query: `
                            query recentlyViewedProducts(
                                $productIds: [Int!]
                                $first: Int
                                $currencyCode: currencyCode!
                            ) {
                                site {
                                    products(entityIds: $productIds, first: $first) {
                                        edges {
                                            node {
                                                entityId
                                                name
                                                sku
                                                path
                                                addToCartUrl
                                                minPurchaseQuantity
                                                maxPurchaseQuantity
                                                pricesWithTax: prices(includeTax: true, currencyCode: $currencyCode) {
                                                    price {
                                                        ...MoneyFields
                                                    }
                                                    basePrice {
                                                        ...MoneyFields
                                                    }
                                                    salePrice {
                                                        ...MoneyFields
                                                    }
                                                    retailPrice {
                                                        ...MoneyFields
                                                    }
                                                    priceRange {
                                                        min {
                                                            ...MoneyFields
                                                        }
                                                        max {
                                                            ...MoneyFields
                                                        }
                                                    }
                                                }
                                                pricesWithoutTax: prices(includeTax: false, currencyCode: $currencyCode) {
                                                    price {
                                                        ...MoneyFields
                                                    }
                                                    basePrice {
                                                        ...MoneyFields
                                                    }
                                                    salePrice {
                                                        ...MoneyFields
                                                    }
                                                    retailPrice {
                                                        ...MoneyFields
                                                    }
                                                    priceRange {
                                                        min {
                                                            ...MoneyFields
                                                        }
                                                        max {
                                                            ...MoneyFields
                                                        }
                                                    }
                                                }
                                                defaultImage {
                                                    ...ImageFields
                                                }
                                                images {
                                                    edges {
                                                      node {
                                                        ...ImageFields
                                                        isDefault
                                                      }
                                                    }
                                                }
                                                brand {
                                                    name
                                                    path
                                                }
                                                reviewSummary {
                                                    averageRating
                                                    numberOfReviews
                                                }
                                                productOptions(first: 1) {
                                                    edges {
                                                        node {
                                                            entityId
                                                        }
                                                    }
                                                }
                                                availabilityV2 {
                                                    status
                                                    ... on ProductUnavailable {
                                                        message
                                                    }
                                                }
                                                inventory {
                                                    isInStock
                                                }
                                                customFields {
                                                    edges {
                                                        node {
                                                            name
                                                            value
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    settings {
                                        tax {
                                            plp
                                        }
                                        inventory {
                                            defaultOutOfStockMessage
                                        }
                                        storefront {
                                            catalog {
                                                productComparisonsEnabled
                                            }
                                        }
                                    }
                                    currency(currencyCode: $currencyCode) {
                                        display {
                                            symbol
                                            symbolPlacement
                                            decimalToken
                                            thousandsToken
                                            decimalPlaces
                                        }
                                    }
                                }
                            }
                            fragment MoneyFields on Money {
                                value
                                currencyCode
                            }
                            fragment ImageFields on Image {
                                url80wide: url(width: 80)
                                url160wide: url(width: 160)
                                url320wide: url(width: 320)
                                url640wide: url(width: 640)
                            }
                        `,
                        variables: {
                            productIds,
                            first: productIds.length,
                            currencyCode: this.currencyCode,
                        },
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${this.graphQLToken}`,
                    },
                    xhrFields: {
                        withCredentials: true,
                    },
                    success: (resp) => {
                        const currency = {
                            currency_token: resp.data.site.currency.display.symbol,
                            currency_location: String(resp.data.site.currency.display.symbolPlacement).toLowerCase(),
                            decimal_token: resp.data.site.currency.display.decimalToken,
                            decimal_places: resp.data.site.currency.display.decimalPlaces,
                            thousands_token: resp.data.site.currency.display.thousandsToken,
                        };

                        const ratingHtml = (rating) => (!rating ? '' : Array.from(Array(5).keys())
                            .map(i => this.ratingStarHtmlFunc(rating > i))
                            .join(''));

                        const ratingNumber = (s) => {
                            const n = Number(s);
                            if (!n) return '';
                            if (n === Math.round(n)) return n;
                            return n.toFixed(1);
                        };

                        const saleBadge = prices => {
                            const saleValue = prices?.salePrice?.value || prices?.basePrice?.value;
                            const baseValue = prices?.retailPrice?.value || prices?.basePrice?.value;

                            // return '' if no sale price
                            if (!saleValue || !baseValue || saleValue === baseValue) return '';

                            // return 'sale' badge
                            if (this.product_sale_badges === 'label') return this.product_sale_label;

                            // hide salebadge
                            if (this.product_sale_badges === 'hide') return '';

                            const n = saleValue ? Math.round((baseValue - saleValue) / baseValue * 100) : 0;
                            const percent = n > 0 ? `${n}%` : '';

                            // return '' if invalid percent
                            if (!percent) return '';

                            // return 'sale {percent}' badge
                            if (this.product_sale_label.includes('{percent}')) return this.product_sale_label.replace('{percent}', percent);

                            // recent 'sale ...%' badge
                            return `${this.product_sale_label}<span>${percent}</span>`;
                        };

                        const hoverProductImage = images => {
                            try {
                                const image = images.find(img => !img.node.isDefault);
                                return image ? image.node : null;
                            } catch (er) {
                                return null;
                            }
                        };

                        const saleBadgeCustom = (field) => {
                            if (field.length && this.product_custom_badges) {
                                const list = field.filter(item => item.node.name === '__badge');
                                return list.map(i => this.customBadgeTemplate(i.node.value)).join('');
                            }

                            return null;
                        };

                        const products = resp.data.site.products.edges
                            .map(({ node }, index) => ({
                                index,
                                id: node.entityId,
                                name: node.name,
                                sku: node.sku,
                                url: node.path,
                                minPurchaseQuantity: node.minPurchaseQuantity,
                                maxPurchaseQuantity: node.maxPurchaseQuantity,
                                defaultImage: node.defaultImage,
                                hoverImage: hoverProductImage(node.images.edges),
                                defaultProductImage: this.defaultProductImage,
                                restrictToLogin: this.restrictToLogin,
                                txtPriceWithoutTax: this.txtPriceWithoutTax,
                                txtPriceWithTax: this.txtPriceWithTax,
                                retailPrice: !this.restrictToLogin && node.pricesWithoutTax && node.pricesWithTax ? {
                                    // eslint-disable-next-line no-nested-ternary
                                    value: resp.data.site.settings.tax.plp === 'EX' ? node.pricesWithoutTax.retailPrice : resp.data.site.settings.tax.plp === 'INC' ? node.pricesWithTax.retailPrice : resp.data.site.settings.tax.plp === 'BOTH' ? {
                                        retailPriceWithoutTax: node.pricesWithoutTax.retailPrice,
                                        retailPriceWithTax: node.pricesWithTax.retailPrice,
                                    } : null,
                                } : null,
                                price: !this.restrictToLogin && node.pricesWithoutTax && node.pricesWithTax ? {
                                    // eslint-disable-next-line no-nested-ternary
                                    value: resp.data.site.settings.tax.plp === 'EX' ? {
                                        price: node.pricesWithoutTax.price.value,
                                        price_rrp: node.pricesWithoutTax.retailPrice,
                                    // eslint-disable-next-line no-nested-ternary
                                    } : resp.data.site.settings.tax.plp === 'INC' ? {
                                        price: node.pricesWithTax.price.value,
                                        price_rrp: node.pricesWithTax.retailPrice,
                                    } : resp.data.site.settings.tax.plp === 'BOTH' ? {
                                        priceWithoutTax: node.pricesWithoutTax.price.value,
                                        priceWithTax: node.pricesWithTax.price.value,
                                        price_rrpWithTax: node.pricesWithTax.retailPrice,
                                        price_rrpWithoutTax: node.pricesWithoutTax.retailPrice,
                                    } : null,
                                    // eslint-disable-next-line no-nested-ternary
                                    formatted: this.formatPrice(resp.data.site.settings.tax.plp === 'EX' ? node.pricesWithoutTax : resp.data.site.settings.tax.plp === 'INC' ? node.pricesWithTax : resp.data.site.settings.tax.plp === 'BOTH' ? {
                                        priceWithoutTax: node.pricesWithoutTax,
                                        priceWithTax: node.pricesWithTax,
                                    } : node.pricesWithoutTax, currency, resp.data.site.settings.tax.plp, this.show_rrp, this.pdp_retail_price_label, this.pdp_price_label, this.pdp_non_sale_price_label, this.pdp_sale_price_label, this.price_ranges, this.pdp_starting_price_label),
                                } : null,
                                saleBadge: node.inventory.isInStock ? saleBadge(resp.data.site.settings.tax.plp === 'EX' ? node.pricesWithoutTax : node.pricesWithTax) : '',
                                saleBadgeCustom: saleBadgeCustom(node.customFields.edges.length > 0 ? node.customFields.edges : ''),
                                outstockBadge: this.pdp_sold_out_label && !node.inventory.isInStock ? this.pdp_sold_out_label : '',
                                brand: node.brand,
                                customFields: this.templateCustomFields(node.customFields.edges, this.card_custom_fields),
                                rating: this.showProductRating ? ratingNumber(node.reviewSummary?.averageRating) : null,
                                ratingHtml: this.showProductRating ? ratingHtml(node.reviewSummary?.averageRating) : '',
                                show_numReviews: this.card_textAlign !== 'center' ? this.card_textAlign : '',
                                numberOfReviews: node.reviewSummary?.numberOfReviews,
                                cardExtraClass: `${this.card_show_border ? '_border' : ''} ${!this.card_show_button ? '_hideBtn' : ''}`,
                                card_show_button: this.card_show_button,
                                card_show_qty: this.card_show_qty,
                                card_show_compare: this.card_show_compare,
                                card_show_sku: this.card_show_sku,
                                card_show_brand: this.card_show_brand,
                                show_product_quick_view: this.show_product_quick_view,
                                card_show_swatches: this.card_show_swatches,
                                card_show_countdown: this.card_show_countdown,
                                card_show_gallery: this.card_show_gallery,
                                ajax_add_to_cart: this.ajax_add_to_cart,
                                product_sale_badges: this.product_sale_badges,
                                product_sale_label: this.product_sale_label,
                                txtQuickView: this.txtQuickView,
                                txtCompare: this.txtCompare,
                                txtChooseOptions: this.txtChooseOptions,
                                txtPreOrder: this.txtPreOrder,
                                txtAddToCart: this.txtAddToCart,
                                txtQuantity: this.txtQuantity,
                                txtQuantityDecrease: this.txtQuantityDecrease.replace('{name}', node.name),
                                txtQuantityIncrease: this.txtQuantityIncrease.replace('{name}', node.name),
                                txtVideosLabel: this.txtVideosLabel,
                                txtImages360Label: this.txtImages360Label,
                                preOrder: node.availabilityV2.status === 'Preorder',
                                hasOptions: node.availabilityV2.status === 'Available' && node.productOptions.edges.length > 0,
                                preOrderHasOptions: node.availabilityV2.status === 'Preorder' && node.productOptions.edges.length > 0,
                                addToCartUrl: node.availabilityV2.status !== 'Unavailable' && node.productOptions.edges.length === 0 && node.inventory.isInStock ? node.addToCartUrl : '',
                                outOfStockMessage: !node.inventory.isInStock ? resp.data.site.settings.inventory.defaultOutOfStockMessage : '',
                                qtyBoxHtml: this.card_show_qty ? this.qtyBoxHtmlFunc(node.entityId, node.minPurchaseQuantity, node.maxPurchaseQuantity, this.txtQuantity, this.txtQuantityDecrease, this.txtQuantityIncrease) : '',
                                show_compare: this.card_show_compare,
                                callForPrice: node.availabilityV2.message,
                                taxDisplay: resp.data.site.settings.tax.plp,
                                wishlist: this.showWishlist ? this.wishlistHtmlFunc(node.entityId, node.name) : '',
                                card_style: this.card_style,
                                card_style_boxed: this.card_style === 'boxed',
                            }));
                        resolve(products);
                    },
                    error: () => {
                        resolve('');
                    },
                });
            });
        }

        return this.cachedProducts[cacheKey];
    }
}

export const productCardTemplate = `
    <article
        class="card {{cardExtraClass}}{{#card_style}} card--{{card_style}}{{/card_style}}"
        data-test="card-{{id}}"
        data-event-type="list"
        data-entity-id="{{id}}"
        data-position="{{index}}"
        data-name="{{name}}"
        data-product-brand="{{brand.name}}"
        data-product-price="{{price.value.priceWithoutTax}}{{price.value.price}}"
    >
        <figure class="card-figure">
            <a href="{{url}}"
            class="card-figure__link"
            aria-label="{{name}}, {{price.value.priceWithoutTax}}{{price.value.price}}"
            data-event-type="product-click"
            >
                <div class="card-img-container">
                    <img
                        {{#defaultImage}}
                            src="{{url320wide}}"
                            srcset="{{url80wide}} 80w, {{url160wide}} 160w, {{url320wide}} 320w, {{url640wide}} 640w"
                        {{/defaultImage}}
                        {{^defaultImage}}
                            src="{{defaultProductImage}}"
                        {{/defaultImage}}
                        data-sizes="auto"
                        class="card-image lazyload"
                        alt="{{name}}"
                        title="{{name}}">
                    {{#hoverImage}}
                        <img
                            src="{{url320wide}}"
                            srcset="{{url80wide}} 80w, {{url160wide}} 160w, {{url320wide}} 320w, {{url640wide}} 640w"
                            data-sizes="auto"
                            class="card-image lazyload"
                            alt="{{name}}"
                            title="{{name}}">
                    {{/hoverImage}}
                </div>
            </a>

            <div class="card-badges">
                {{#outstockBadge}}
                    <div class="sold-out-flag-side">
                        <span class="sold-out-text">{{&outstockBadge}}</span>
                    </div>
                {{/outstockBadge}}
                {{#saleBadge}}
                    <div class="sale-flag-side {{#product_sale_badges}}_percent{{/product_sale_badges}}">
                        <span class="sale-text">{{&saleBadge}}</span>
                        {{#card_show_countdown}}
                            <span class="card-countdown"></span>
                        {{/card_show_countdown}}
                    </div>
                {{/saleBadge}}
                {{&saleBadgeCustom}}
            </div>

            <figcaption class="card-figcaption">
                <div class="card-figcaption-body">
                    <div class="_bottomLeft">
                        {{&wishlist}}
                    </div>
                    {{#card_show_gallery}}
                        <div class="_bottomRight">
                            <button type="button" class="card-figcaption-button _videos" data-video-button style="display:none">
                                <span class="icon"><svg aria-hidden="true"><use href="#icon-play"></use></svg></span>
                                <span class="is-srOnly">{{txtVideosLabel}}</span>
                            </button>
                            <button type="button" class="card-figcaption-button _img360" data-360-button style="display:none">
                                <span class="icon"><svg aria-hidden="true"><use href="#icon-360"></use></svg></span>
                                <span class="is-srOnly">{{txtImages360Label}}</span>
                            </button>
                        </div>
                    {{/card_show_gallery}}
                    {{^card_show_button}}
                        <div class="_center">
                            {{^restrictToLogin}}
                                {{#hasOptions}}
                                    {{&qtyBoxHtml}}
                                    {{#show_product_quick_view}}
                                        <button type="button" class="card-figcaption-button quickview _choose-options" data-event-type="product-click" data-product-id="{{id}}">
                                            <span class="icon"><svg aria-hidden="true"><use href="#icon-cart-shopping-fast"></use></svg></span>
                                            <span class="_label">{{txtChooseOptions}}</span>
                                        </button>
                                    {{/show_product_quick_view}}
                                    {{^show_product_quick_view}}
                                        <a href="{{url}}" data-event-type="product-click" class="card-figcaption-button _choose-options" data-product-id="{{id}}">
                                            <span class="icon"><svg aria-hidden="true"><use href="#icon-cart-shopping-fast"></use></svg></span>
                                            <span class="_label">{{txtChooseOptions}}</span>
                                        </a>
                                    {{/show_product_quick_view}}
                                {{/hasOptions}}
                                {{#preOrder}}
                                    {{&qtyBoxHtml}}
                                    {{#preOrderAddToCartUrl}}
                                        <a href="{{preOrderAddToCartUrl}}" data-event-type="product-click" class="card-figcaption-button _preorder" data-papathemes-cart-item-add>
                                            <span class="icon"><svg aria-hidden="true"><use href="#icon-cart-shopping-fast"></use></svg></span>
                                            <span class="_label">{{txtPreOrder}}</span>
                                        </a>
                                    {{/preOrderAddToCartUrl}}
                                    {{^preOrderAddToCartUrl}}
                                        {{#show_product_quick_view}}
                                            <button type="button" class="card-figcaption-button quickview _preorder" data-event-type="product-click" data-product-id="{{id}}">
                                                <span class="icon"><svg aria-hidden="true"><use href="#icon-cart-shopping-fast"></use></svg></span>
                                                <span class="_label">{{txtPreOrder}}</span>
                                            </button>
                                        {{/show_product_quick_view}}
                                    {{/preOrderAddToCartUrl}}
                                {{/preOrder}}
                                {{#addToCartUrl}}
                                    {{&qtyBoxHtml}}
                                    <a href="{{addToCartUrl}}" data-event-type="product-click" data-button-type="add-cart" class="card-figcaption-button _add-to-cart" data-papathemes-cart-item-add>
                                        <span class="icon"><svg aria-hidden="true"><use href="#icon-cart-shopping-fast"></use></svg></span>
                                        <span class="_label">{{txtAddToCart}}</span>
                                    </a>
                                {{/addToCartUrl}}
                                {{#outOfStockMessage}}
                                    <a href="{{url}}" data-event-type="product-click" class="card-figcaption-button _outstock" data-product-id="{{id}}">
                                        <span class="_label">{{outOfStockMessage}}</span>
                                    </a>
                                {{/outOfStockMessage}}
                            {{/restrictToLogin}}
                            {{#show_product_quick_view}}
                                <button type="button" class="card-figcaption-button quickview" data-event-type="product-click" data-product-id="{{id}}">
                                    <span class="icon"><svg aria-hidden="true"><use href="#icon-magnifying-glass"></use></svg></span>
                                    <span class="is-srOnly">{{txtQuickView}}</span>
                                </button>
                            {{/show_product_quick_view}}
                            {{#show_compare}}
                                <button type="button" class="card-figcaption-button compare"
                                    data-compare-id="{{id}}"
                                    data-compare-image="{{#defaultImage}}{{url320wide}}{{/defaultImage}}"
                                    data-compare-title="{{name}}"
                                    data-compare-url="{{url}}">
                                    <span class="icon"><svg aria-hidden="true"><use href="#icon-chart-line"></use></svg></span>
                                    <span class="is-srOnly">{{txtCompare}}</span>
                                </button>
                            {{/show_compare}}
                        </div>
                    {{/card_show_button}}
                </div>
            </figcaption>
        </figure>
        <div class="card-body">
            {{#card_style_boxed}}
                <h3 class="card-title">
                    <a href="{{url}}" data-event-type="product-click">{{name}}</a>
                </h3>

                {{#card_show_swatches}}
                    <div class="card-text card-text--colorswatches"></div>
                {{/card_show_swatches}}

                <div class="card-body-row">
                    <div class="card-prices" data-test-info-type="price">
                        {{#callForPrice}}
                            <div class="card-text--price">
                                <span class="price--call">{{&callForPrice}}</span>
                            </div>
                        {{/callForPrice}}

                        {{#price}}
                            {{&price.formatted}}
                        {{/price}}
                    </div>
                    {{#ratingHtml}}
                        <p class="card-ratings" data-test-info-type="productRating">
                            <span class="rating--small">
                                <span role="img" class="stars" aria-label="{{rating}}">
                                    <span class="icon icon--ratingFull">
                                        <svg>
                                            <use href="#icon-star" />
                                        </svg>
                                    </span>
                                    {{rating}}
                                </span>
                            </span>
                        </p>
                    {{/ratingHtml}}
                </div>
            {{/card_style_boxed}}
            {{^card_style_boxed}}
                <div class="card-body-row">
                    <h3 class="card-title">
                        <a href="{{url}}" data-event-type="product-click">{{name}}</a>
                    </h3>

                    <div class="card-prices" data-test-info-type="price">
                        {{#callForPrice}}
                            <div class="card-text--price">
                                <span class="price--call">{{&callForPrice}}</span>
                            </div>
                        {{/callForPrice}}

                        {{#price}}
                            {{&price.formatted}}
                        {{/price}}
                    </div>
                </div>

                <div class="card-body-row-swatch-rating">
                    {{#card_show_swatches}}
                        <div class="card-text card-text--colorswatches"></div>
                    {{/card_show_swatches}}

                    {{#ratingHtml}}
                        <p class="card-ratings" data-test-info-type="productRating">
                            <span class="rating--small">
                                <span role="img" class="stars" aria-label="{{rating}}">
                                    <span class="icon icon--ratingFull">
                                        <svg>
                                            <use href="#icon-star" />
                                        </svg>
                                    </span>
                                    {{rating}}
                                </span>
                            </span>
                        </p>
                    {{/ratingHtml}}
                </div>
            {{/card_style_boxed}}

            {{#customFields}}
                {{&customFields}}
            {{/customFields}}
        </div>
        <div class="card-footer">
            {{^restrictToLogin}}
                {{#hasOptions}}
                    {{&qtyBoxHtml}}
                    {{#show_product_quick_view}}
                        <button type="button" class="card-figcaption-button quickview _choose-options" data-event-type="product-click" data-product-id="{{id}}">
                            <span class="icon"><svg aria-hidden="true"><use href="#icon-cart-shopping-fast"></use></svg></span>
                            <span class="_label">{{txtChooseOptions}}</span>
                        </button>
                    {{/show_product_quick_view}}
                    {{^show_product_quick_view}}
                        <a href="{{url}}" data-event-type="product-click" class="card-figcaption-button _choose-options" data-product-id="{{id}}">
                            <span class="icon"><svg aria-hidden="true"><use href="#icon-cart-shopping-fast"></use></svg></span>
                            <span class="_label">{{txtChooseOptions}}</span>
                        </a>
                    {{/show_product_quick_view}}
                {{/hasOptions}}
                {{#preOrder}}
                    {{&qtyBoxHtml}}
                    {{#preOrderAddToCartUrl}}
                        <a href="{{pre_order_add_to_cart_url}}" data-event-type="product-click" class="card-figcaption-button _preorder" data-papathemes-cart-item-add>
                            <span class="icon"><svg aria-hidden="true"><use href="#icon-cart-shopping-fast"></use></svg></span>
                            <span class="_label">{{txtPreOrder}}</span>
                        </a>
                    {{/preOrderAddToCartUrl}}
                    {{^preOrderAddToCartUrl}}
                        {{#show_product_quick_view}}
                            <button type="button" class="card-figcaption-button quickview _preorder" data-event-type="product-click" data-product-id="{{id}}">
                                <span class="icon"><svg aria-hidden="true"><use href="#icon-cart-shopping-fast"></use></svg></span>
                                <span class="_label">{{txtPreOrder}}</span>
                            </button>
                        {{/show_product_quick_view}}
                    {{/preOrderAddToCartUrl}}
                {{/preOrder}}
                {{#addToCartUrl}}
                    {{&qtyBoxHtml}}
                    <a href="{{add_to_cart_url}}" data-event-type="product-click" data-button-type="add-cart" class="card-figcaption-button _add-to-cart" data-papathemes-cart-item-add>
                        <span class="icon"><svg aria-hidden="true"><use href="#icon-cart-shopping-fast"></use></svg></span>
                        <span class="_label">{{txtAddToCart}}</span>
                    </a>
                {{/addToCartUrl}}
                {{#outOfStockMessage}}
                    <a href="{{url}}" data-event-type="product-click" class="card-figcaption-button _outstock" data-product-id="{{id}}">
                        <span class="_label">{{outOfStockMessage}}</span>
                    </a>
                {{/outOfStockMessage}}
            {{/restrictToLogin}}
            {{#show_product_quick_view}}
                <button type="button" class="card-figcaption-button quickview" data-event-type="product-click" data-product-id="{{id}}">
                    <span class="icon"><svg aria-hidden="true"><use href="#icon-magnifying-glass"></use></svg></span>
                    <span class="is-srOnly">{{txtQuickView}}</span>
                </button>
            {{/show_product_quick_view}}
            {{#show_compare}}
                <button type="button" class="card-figcaption-button compare"
                    data-compare-id="{{id}}"
                    data-compare-image="{{#defaultImage}}{{url320wide}}{{/defaultImage}}"
                    data-compare-title="{{name}}"
                    data-compare-url="{{url}}">
                    <span class="icon"><svg aria-hidden="true"><use href="#icon-chart-line"></use></svg></span>
                    <span class="is-srOnly">{{txtCompare}}</span>
                </button>
            {{/show_compare}}
        </div>
    </article>

`;

export function parseJSON(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
}

export function fixFormElementUniqueIds($scope, ignoreIds = [
    'form-action-addToCart',
    'form-action-addToCart2',
    'form-action-addToCartLater',
    'form-action-addToCartSticky',
    'CartEditProductFieldsForm',
    'modal-review-form',
]) {
    const renameUnique = (el, separator = '', suffix = '') => {
        if (ignoreIds.includes(el.id) || $(el).attr('data-ignore-unique-id')) {
            return;
        }

        if ($(`[id="${el.id}${separator}${suffix}"]`).length > 1) {
            renameUnique(el, '-', suffix ? suffix + 1 : 1);
        } else if (suffix) {
            const id = el.id;
            // eslint-disable-next-line no-param-reassign
            el.id = `${el.id}${separator}${suffix}`;
            $scope.find(`[for="${id}"]`).attr('for', el.id);
            $scope.find(`[data-toggle="${id}"]`).attr('data-toggle', el.id);
            $scope.find(`[data-dropdown="${id}"]`).attr('data-dropdown', el.id);
            $scope.find(`[aria-controls="${id}"]`).attr('aria-controls', el.id);
            $scope.find(`[aria-labelledby="${id}"]`).attr('aria-labelledby', el.id);
        }
    };

    $scope.find('[id]').each((_i, el) => renameUnique(el));
}

export function animateHeight($el, from, to, duration, doneCb) {
    const _duration = duration || Number($el.css('--animation-duration'));

    if (!_duration) return;

    $el.css({
        height: from,
        overflow: 'hidden',
    }).animate({
        height: to,
    }, _duration, () => {
        $el.css('height', '');
        $el.css('overflow', '');
        if (doneCb) doneCb();
    });
}

export function toMilliseconds(s) {
    return String(s).includes('ms') ? parseFloat(s) : parseFloat(s) * 1000;
}

export default {};
