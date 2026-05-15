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
    }
}
