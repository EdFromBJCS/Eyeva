import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
// import quickSearch from '../papathemes/quick-search'; // papathemes-eyeva edited disabled as loaded in papathemes/global.js
import currencySelector from './global/currency-selector';
// import mobileMenuToggle from './global/mobile-menu-toggle'; papathemes-eyeva disabled as loaded in papathemes/global.js
// import menu from './global/menu'; // papathemes-eyeva edited disabled as loaded in papathemes/global.js
import foundation from './global/foundation';
// import quickView from '../papathemes/quick-view'; // papathemes edited disabled as loaded in papathemes/global.js
import cartPreview from './global/cart-preview';
// import carousel from './common/carousel'; papathemes-eva disabled as not used in this theme
import svgInjector from './global/svg-injector';
import initTradeInTables from './global/trade-in-table';
import initRamTables from './global/ram-table';
import initSeasonalTheme from './global/seasonal-theme';
import papathemes from '../papathemes/global';

export default class Global extends PageManager {
    onReady() {
        const { cartId, secureBaseUrl } = this.context;
        initSeasonalTheme();
        cartPreview(secureBaseUrl, cartId);
        // quickSearch(); // papathemes-eyeva edited disabled as loaded in papathemes/global.js
        currencySelector(cartId);
        foundation($(document));
        // quickView(this.context); // papathemes edited disabled as loaded in papathemes/global
        // carousel(this.context); papathemes-eva disabled as not used in this theme
        // menu();
        // mobileMenuToggle();
        svgInjector();
        initTradeInTables();
        initRamTables();

        // papathemes-eyeva: Load papathemes functionality
        papathemes(this.context);
        import(/* webpackChunkName: "global" */ '../papathemes/global.async').then(module => {
            module.default(this.context);
        });

        this.bindRenewingDataPlanFallback();
    }

    bindRenewingDataPlanFallback() {
        const planConfigs = [
            {
                triggerAttributeId: 13303,
                fieldIds: [13304, 13305, 13306],
                autofill: {
                    13304: 'RENEWINGPLAN',
                    13305: true,
                    13306: '000000000000000',
                },
            },
            {
                triggerAttributeId: 13308,
                fieldIds: [13309, 13310, 13311],
                autofill: {
                    13309: 'RENEWINGPLAN',
                    13310: true,
                    13311: '000000000000000',
                },
            },
        ];

        const disableField = (field, fieldId, autofillMap) => {
            field.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(el => {
                if (!el.hasAttribute('data-original-required')) {
                    el.setAttribute('data-original-required', el.required ? 'true' : 'false');
                }

                el.required = false;
                el.removeAttribute('required');

                if (el.matches('select')) {
                    el.selectedIndex = 0;
                    return;
                }

                if (autofillMap[fieldId] === true && el.matches('input[type="checkbox"]')) {
                    el.checked = true;
                    el.setAttribute('data-renewing-autofill', 'true');
                    return;
                }

                if (typeof autofillMap[fieldId] === 'string' && (el.matches('input[type="text"]') || el.matches('textarea'))) {
                    el.value = autofillMap[fieldId];
                    el.setAttribute('data-renewing-autofill', 'true');
                    return;
                }

                if (el.matches('input[type="checkbox"], input[type="radio"]')) {
                    el.checked = false;
                } else {
                    el.value = '';
                }
            });
        };

        const enableField = field => {
            field.querySelectorAll('input:not([type="hidden"]), select, textarea').forEach(el => {
                const wasRequired = el.getAttribute('data-original-required') === 'true';
                const shouldRequire = wasRequired || !el.hasAttribute('data-original-required');
                el.required = shouldRequire;

                if (shouldRequire) {
                    el.setAttribute('required', '');
                } else {
                    el.removeAttribute('required');
                }

                if (el.getAttribute('data-renewing-autofill') === 'true') {
                    if (el.matches('input[type="checkbox"], input[type="radio"]')) {
                        el.checked = false;
                    } else if (el.matches('select')) {
                        el.selectedIndex = 0;
                    } else {
                        el.value = '';
                    }

                    el.removeAttribute('data-renewing-autofill');
                }
            });
        };

        const applyVisibility = () => {
            document.querySelectorAll('[data-product-option-change]').forEach(wrapper => {
                planConfigs.forEach(config => {
                    const renewing = wrapper.querySelector(`[name="attribute[${config.triggerAttributeId}]"][value="1698"]`);
                    if (!renewing) {
                        return;
                    }

                    const shouldHide = renewing.checked;

                    config.fieldIds.forEach(fieldId => {
                        const field = wrapper.querySelector(`[data-product-attribute-id="${fieldId}"]`);
                        if (!field) {
                            return;
                        }

                        if (shouldHide) {
                            disableField(field, fieldId, config.autofill);
                            field.style.display = 'none';
                            field.setAttribute('aria-hidden', 'true');
                            field.classList.remove('form-field--error');
                        } else {
                            enableField(field);
                            field.style.display = '';
                            field.setAttribute('aria-hidden', 'false');
                        }
                    });
                });
            });
        };

        const triggerSelector = planConfigs
            .map(config => `[name="attribute[${config.triggerAttributeId}]"]`)
            .join(', ');

        $(document)
            .off('change.renewingDataPlanFallback', triggerSelector)
            .on('change.renewingDataPlanFallback', triggerSelector, applyVisibility);

        document.addEventListener('onProductOptionsChanged', applyVisibility);
        applyVisibility();
    }
}
