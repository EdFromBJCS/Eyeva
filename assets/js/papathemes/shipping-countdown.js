/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/*
<div
    data-papathemes-shipping-countdown="12:00:00"
    data-hour-text="Hour"
    data-hours-text="Hours"
    data-minute-text="Minute"
    data-minutes-text="Minutes"
    style="display:none">
    <div data-today-hm>In Stock & Ready To Ship! Order In The Next <strong>%HOUR%</strong> and <strong>%MINUTE%</strong> to ship today.</div>
    <div data-today-m>In Stock & Ready To Ship! Order In The Next <strong>%MINUTE%</strong> to ship today.</div>
    <div data-tomorrow-hm>In Stock & Ready To Ship! Order In The Next <strong>%HOUR%</strong> and <strong>%MINUTE%</strong> to ship tomorrow.</div>
    <div data-tomorrow-m>In Stock & Ready To Ship! Order In The Next <strong>%MINUTE%</strong> to ship tomorrow.</div>
    <div data-monday>In Stock & Ready To Ship! Order now to ship Monday.</div>
    <div data-custom></div>
</div>
*/
/* eslint-disable camelcase */
// import 'regenerator-runtime/runtime';
import { debounce } from 'lodash';
import moment from 'moment-timezone/builds/moment-timezone-with-data-10-year-range';
import stencilUtils from '@bigcommerce/stencil-utils';

const APPUID = 'PAPATHEMES_SHIPPINGCOUNTDOWN';
const DATAKEY = 'papathemesShippingCountdown';
const DASHKEY = 'papathemes-shipping-countdown';

const productMetaById = {};
const variantMetaById = {};

class Countdown {
    constructor($scope, {
        debug = false,
        graphQLToken = '',
        storeTZ = 'America/Mexico_City',
        checkMetaField = false,
        countdownValues = {
            parcel: '15:00:00',
            LTL: '12:00:00',
        },
        defaultCountdownTime = '12:00:00', // use this value if checkMetafield = false or data-papathemes-shipping-countdown = empty
        findProductIdFunc = ($scope1) => Number($scope1.closest('.productView').find('form[data-cart-item-add] input[name="product_id"]').val()),
    } = {}) {
        this.$scope = $scope;
        this.debug = debug;
        this.graphQLToken = graphQLToken;
        this.storeTZ = storeTZ;
        this.checkMetaField = checkMetaField;
        this.countdownValues = countdownValues;
        this.defaultCountdownTime = defaultCountdownTime;
        this.productId = findProductIdFunc($scope);

        if (!this.productId) {
            return;
        }

        this.updateCountdown();

        this.timer = window.setInterval(() => this.updateCountdown(), 60000);

        stencilUtils.hooks.on('product-options-change-remote', (event, data) => {
            if (!data || !data.response || !data.response.data || data.response.data.id !== this.productId) {
                return;
            }
            this.updateCountdown({
                variantId: data.response.data.v3_variant_id,
            });
        });

        this.$scope.addClass('_shipping-countdown-initialized');
    }

    async updateCountdown({
        variantId = 0,
    } = {}) {
        const {
            $scope, debug, graphQLToken, storeTZ, checkMetaField, countdownValues, defaultCountdownTime, productId,
        } = this;
        let countdown = $scope.data(DATAKEY);
        let custom;

        if (checkMetaField) {
            if (!productMetaById[productId] || variantId && !variantMetaById[variantId]) {
                const resp = await $.ajax({
                    url: '/graphql',
                    method: 'POST',
                    data: JSON.stringify({
                        query: `
                            query($productId: Int!, $variantId: Int!) {
                                site {
                                    product(entityId: $productId) {
                                        entityId
                                        metafields(namespace: "papa", keys: ["countdown"]) {
                                            edges {
                                                node {
                                                    entityId
                                                    key
                                                    value
                                                }
                                            }
                                        }
                                        variants (entityIds: [$variantId]) {
                                            edges {
                                                node {
                                                    metafields(namespace: "papa", keys: ["countdown"]) {
                                                        edges {
                                                            node {
                                                                entityId
                                                                key
                                                                value
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        `,
                        variables: {
                            productId,
                            variantId,
                        },
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${graphQLToken}`,
                    },
                    xhrFields: {
                        withCredentials: true,
                    },
                });

                productMetaById[productId] = resp.data.site.product.metafields.edges.reduce((_value, { node }) => node.value, null);
                debug && console.log(`productMetaById[${productId}] =`, productMetaById[productId]);

                variantMetaById[variantId] = resp.data.site.product.variants.edges.reduce(
                    (_value, { node }) =>
                        node.metafields.edges.reduce((_value1, { node1 }) => node1.value, _value),
                    null,
                );
                debug && console.log(`variantMetaById[${variantId}] =`, variantMetaById[variantId]);
            }

            const value = variantMetaById[variantId] || productMetaById[productId];
            if (value) {
                countdown = countdownValues[value];
            }

            custom = !countdownValues[value] ? value : '';
        } else {
            countdown = countdown || defaultCountdownTime;
        }


        if (!countdown && !custom) return;

        const hourText = $scope.data('hourText') || 'Hour';
        const hoursText = $scope.data('hoursText') || 'Hours';
        const minuteText = $scope.data('minuteText') || 'Minute';
        const minutesText = $scope.data('minutesText') || 'Minutes';

        const $todayhm = $scope.find('[data-today-hm]');
        const $todaym = $scope.find('[data-today-m]');
        const $tomorrowhm = $scope.find('[data-tomorrow-hm]');
        const $tomorrowm = $scope.find('[data-tomorrow-m]');
        const $monday = $scope.find('[data-monday]');
        const $custom = $scope.find('[data-custom]');

        if (!$todayhm.data('template')) {
            $todayhm.data('template', $todayhm.html());
        }
        if (!$todaym.data('template')) {
            $todaym.data('template', $todaym.html());
        }
        if (!$tomorrowhm.data('template')) {
            $tomorrowhm.data('template', $tomorrowhm.html());
        }
        if (!$tomorrowm.data('template')) {
            $tomorrowm.data('template', $tomorrowm.html());
        }

        if (countdown) {
            $custom.hide();

            const now = moment().tz(storeTZ);
            const today = moment.tz(`${moment().tz(storeTZ).format('YYYY-MM-DD')} ${countdown}`, storeTZ);
            const tomorrow = moment.tz(`${moment().add(1, 'days').tz(storeTZ).format('YYYY-MM-DD')} ${countdown}`, storeTZ);
            const friday = moment.tz(`${moment().tz(storeTZ).day('5').format('YYYY-MM-DD')} ${countdown}`, storeTZ);
            const sunday = moment.tz(`${moment().tz(storeTZ).day('7').format('YYYY-MM-DD')} 23:59:59`, storeTZ);
            const monday = moment.tz(`${moment().tz(storeTZ).day('8').format('YYYY-MM-DD')} ${countdown}`, storeTZ);
            const ship = now.isBetween(friday, sunday) ? monday : (now.isBefore(today) ? today : tomorrow);

            debug && console.log('now = ', now.format());
            debug && console.log('today = ', today.format());
            debug && console.log('tomorrow = ', tomorrow.format());
            debug && console.log('friday = ', friday.format());
            debug && console.log('sunday = ', sunday.format());
            debug && console.log('monday = ', monday.format());
            debug && console.log('ship = ', ship.format());

            const hours = ship.diff(now, 'hour');
            const minutes = ship.diff(now, 'minute') - hours * 60;

            if (ship.isSame(monday)) {
                $todayhm.hide();
                $todaym.hide();
                $tomorrowhm.hide();
                $tomorrowm.hide();
                $monday.show();
            } else if (ship.isSame(today)) {
                $tomorrowhm.hide();
                $tomorrowm.hide();
                $monday.hide();
                if (hours === 0) {
                    $todayhm.hide();
                    $todaym.html($todaym.data('template').replace(/%MINUTE%/g, `${minutes} ${minutes > 1 ? minutesText : minuteText}`)).show();
                } else {
                    $todayhm.html($todayhm.data('template')
                        .replace(/%HOUR%/g, `${hours} ${hours > 1 ? hoursText : hourText}`)
                        .replace(/%MINUTE%/g, `${minutes} ${minutes > 1 ? minutesText : minuteText}`)).show();
                    $todaym.hide();
                }
            } else {
                $todayhm.hide();
                $todaym.hide();
                $monday.hide();
                if (hours === 0) {
                    $tomorrowhm.hide();
                    $tomorrowm.html($tomorrowm.data('template').replace(/%MINUTE%/g, `${minutes} ${minutes > 1 ? minutesText : minuteText}`)).show();
                } else {
                    $tomorrowhm.html($tomorrowhm.data('template')
                        .replace(/%HOUR%/g, `${hours} ${hours > 1 ? hoursText : hourText}`)
                        .replace(/%MINUTE%/g, `${minutes} ${minutes > 1 ? minutesText : minuteText}`)).show();
                    $tomorrowm.hide();
                }
            }
        }

        if (custom) {
            $custom.html(custom).show();
            $todayhm.hide();
            $todaym.hide();
            $tomorrowhm.hide();
            $tomorrowm.hide();
            $monday.hide();
        }

        $scope.show();
    }
}

function domChanged({
    countdownSelector = `[data-${DASHKEY}]`,
    ...settings
}) {
    $(countdownSelector).each((i, el) => {
        const $el = $(el);
        if (!$el.data(`${APPUID}CountdownInstance`)) {
            $el.data(`${APPUID}CountdownInstance`, new Countdown($el, settings));
        }
    });
}

async function initApp(settings = {}) {
    domChanged(settings);
    const mo = new MutationObserver(debounce(() => {
        domChanged(settings);
    }), 300);
    mo.observe(document.body, { childList: true, subtree: true });
}

export default function ({
    graphQLToken,
    storeTZ,
    countdownValues,
    defaultCountdownTime,
}) {
    initApp({
        graphQLToken,
        storeTZ,
        countdownValues,
        defaultCountdownTime,
    });
}
