import Mustache from 'mustache';

let singleton;

const compareListTmpl = `
    <div class="papathemes-compareList-panel-wrapper is-empty" id="papathemesCompareList">
        <div class="papathemes-compareList-panel">
            <button type="button" class="button button--close" data-compare-product-toggle btn-close>
                <span class="is-srOnly">Close</span>
                <span class="papathemes-compareList-icon"><svg><use href="#icon-arrow-right-to-line"></use></svg></span>
                <span class="papathemes-compareList-text">{{compare}}</span>
            </button>
            <button type="button" class="button button--open" data-compare-product-toggle btn-open>
                <span class="is-srOnly">Open</span>
                <span class="papathemes-compareList-icon"><svg><use href="#icon-arrow-left-from-line"></use></svg></span>
                <span class="papathemes-compareList-text">{{compare}}</span>
            </button>
            <div class="papathemes-compareList-panel-body">
                <div class="papathemes-compareList" data-compare-product-list>{{{renderItems}}}</div>
                <div class="papathemes-compareList-actions">
                    <a role="button" href="{{compare_url}}" class="button button--primary button--small button--compare" data-compare-product-button>{{compare}}</a>
                    <button type="button" class="button button--plain button--small button--clearAll" data-compare-product-clearall>{{clear_all}}</button>
                </div>
            </div>
        </div>
    </div>
`;

const compareListItemTmpl = `
    <div class="papathemes-compareList-item" data-compare-product-item="{{id}}">
        <a href="{{url}}" class="quickview" data-product-id="{{id}}">
            <img class="papathemes-compareList-img quickview" src="{{image}}" alt="{{alt}}" title="{{alt}}" data-product-id="{{id}}">
        </a>
        <button type="button" class="papathemes-compareList-remove" data-compare-product-remove="{{id}}">
            <span class="is-srOnly">{{remove}}{{alt}}</span>
            <span><svg class="icon"><use href="#icon-close"></use></svg></span>
        </button>
    </div>
`;

class CompareProducts {
    constructor(context) {
        this.context = context;
        this.animationTime = 300;
        this.$body = $('body');

        this.products = this.loadProductsFromLocalStorage() || [];

        this.$scope = $(Mustache.render(compareListTmpl, {
            compare: context.compareAddonLang_compare,
            clear_all: context.compareAddonLang_clear_all,
            renderItems: () => this.products.map(product => this.renderItem(product)).join(''),
        }));

        if (this.products.length === 0) {
            this.$scope.addClass('is-empty').hide();
        } else {
            this.$scope.removeClass('is-empty').show();
        }

        this.$body.find('.body').before(this.$scope);

        this.$productList = this.$scope.find('[data-compare-product-list]');
        this.$compareButton = this.$scope.find('[data-compare-product-button]');

        this.updateCompareUrl();

        this.loadStateToggle();

        this.bindEvents();
    }

    loadStateToggle() {
        if (!window.sessionStorage) {
            return;
        }

        const s = Number(window.sessionStorage.getItem('papathemes_compare_products_close'));

        if (s && s === 0) {
            this.$scope.remove('is-closed');
        } else if (s && s !== 0) {
            this.$scope.addClass('is-closed');
        }
    }

    saveToggleToSessionStorage(state) {
        if (!window.sessionStorage) {
            return;
        }
        window.sessionStorage.setItem('papathemes_compare_products_close', state);
    }

    loadProductsFromLocalStorage() {
        if (!window.localStorage) {
            return;
        }
        const s = window.localStorage.getItem('compareProducts');
        if (s) {
            try {
                return JSON.parse(s);
            } catch (e) {
                return null;
            }
        } else {
            return null;
        }
    }

    saveProductsToLocalStorage() {
        if (!window.localStorage) {
            return;
        }
        window.localStorage.setItem('compareProducts', JSON.stringify(this.products));
    }

    bindEvents() {
        this.$body.on('click', '[data-compare-id]', event => {
            event.preventDefault();
            const $el = $(event.currentTarget);
            const id = Number($el.data('compareId'));

            if (this.products.filter(item => item.id === id).length === 0) {
                this.addProduct({
                    image: $el.data('compareImage'),
                    alt: $el.data('compareTitle'),
                    url: $el.data('compareUrl'),
                    id,
                });
                $('[data-message-compare]').show();

                setTimeout(() => {
                    $('[data-message-compare]').hide();
                }, 3000);
            }

            this.$scope.removeClass('is-closed');
        });

        this.$scope.on('click', '[data-compare-product-remove]', event => {
            event.preventDefault();
            const $el = $(event.currentTarget);
            const id = Number($el.data('compareProductRemove'));
            this.removeProduct(id);

            this.$scope.removeClass('is-closed');
        });

        this.$scope.find('[data-compare-product-toggle]').on('click', event => {
            event.preventDefault();
            this.$scope.toggleClass('is-closed');
        });

        this.$scope.find('[data-compare-product-clearall]').on('click', event => {
            event.preventDefault();
            this.clearAllProducts();
        });

        this.$scope.find('[btn-close]').on('click', event => {
            event.preventDefault();
            this.saveToggleToSessionStorage(1);
        });

        this.$scope.find('[btn-open]').on('click', event => {
            event.preventDefault();
            this.saveToggleToSessionStorage(0);
        });
    }

    addProduct(product) {
        this.products.push(product);
        this.saveProductsToLocalStorage();
        this.updateCompareUrl();

        const $el = $(this.renderItem(product)).hide();

        this.$productList.append($el);

        $el.show(this.animationTime, () => {
            this.$scope.removeClass('is-empty').fadeIn(this.animationTime);
        });
    }

    removeProduct(id) {
        this.products = this.products.filter(item => item.id !== id);
        this.saveProductsToLocalStorage();
        this.updateCompareUrl();

        const $el = this.$scope.find(`[data-compare-product-item=${id}]`);
        $el.fadeOut(this.animationTime, () => {
            $el.remove();

            if (this.products.length === 0) {
                this.$scope.addClass('is-empty').fadeOut(this.animationTime);
            }
        });
    }

    clearAllProducts() {
        this.products = [];
        this.saveProductsToLocalStorage();
        this.updateCompareUrl();

        const $el = this.$scope.find('[data-compare-product-item]');
        $el.fadeOut(this.animationTime, () => {
            $el.remove();
            this.$scope.addClass('is-empty').fadeOut(this.animationTime);
        });
    }

    updateCompareUrl() {
        const path = this.products.map(product => product.id).join('/');
        this.$compareButton.attr('href', `${this.context.urls.compare}/${path}`);
    }

    renderItem(item) {
        return Mustache.render(compareListItemTmpl, {
            ...item,
            quick_view: this.context.compareAddonLang_quick_view,
            remove: this.context.compareAddonLang_remove,
        });
    }
}

export default function compareProducts(context) {
    if (!singleton) {
        singleton = new CompareProducts(context);
    }
    return singleton;
}
