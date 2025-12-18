// Need for bundling into the 'main' js chunk
// import 'mustache';
// import 'url';
// import './eyeva/product-details';
// import './eyeva/image-gallery';
// ----
import initBlazeSlider from './blaze-slider';
import { throttle } from 'lodash';
import utils from '@bigcommerce/stencil-utils';
import collapsibleFactory, { Collapsible } from '../theme/common/collapsible';
import { parseJSON, toMilliseconds, animateHeight } from './utils';
import { createFocusTrap } from 'focus-trap';
import mediaQueryListFactory from '../theme/common/media-query-list';
import initMenu from './menu';

const requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;

const mediumMediaQuery = mediaQueryListFactory('medium');

function initFormFields() {
    $('body').on('change', 'input, textarea', (event) => {
        const $el = $(event.target);
        if ($el.val() !== '' && $el.val() !== null && $el.val() !== undefined) {
            $el.addClass('form-input--filled');
        } else {
            $el.removeClass('form-input--filled');
        }
    });
}

function initProductCardQty() {
    $('body').on('click', '[data-card-quantity-change] button', event => {
        event.preventDefault();
        const $target = $(event.currentTarget);
        const $input = $target.closest('[data-card-quantity-change]').find('input');
        const name = $input.attr('name');
        const lastVal = $input.val();
        const quantityMin = parseInt($input.data('quantityMin'), 10) || 1;
        const quantityMax = parseInt($input.data('quantityMax'), 10) || Infinity;
        const minmax = _qty => Math.max(Math.min(_qty, quantityMax), quantityMin);
        const allowZero = $input.attr('min') === '0';

        let qty = parseInt(lastVal, 10);
        if (Number.isNaN(qty)) {
            qty = quantityMin || 1;
        }

        if ($target.data('action') === 'inc') { // If action is incrementing
            qty = minmax(qty + 1);
        } else if ($target.data('action') === 'dec') { // if action is decrementing
            if (qty - 1 < quantityMin) {
                if (allowZero) {
                    qty = 0;
                } else {
                    qty = quantityMin;
                }
            } else {
                qty = minmax(qty - 1);
            }
        }

        $input.val(String(qty));

        // also update other inputs if same name
        if (name) $('[data-card-quantity-change] input').filter((_i, el) => el.name === name).val(String(qty));

        if ($input.val() !== lastVal) {
            $input.trigger('change');
        }
    });

    // Limit quantity input to min and max values
    $('body').on('change', '[data-card-quantity-change] input', event => {
        const $input = $(event.currentTarget);
        const name = $input.attr('name');
        const lastVal = $input.val();
        const qty = parseInt(lastVal, 10);
        const quantityMin = parseInt($input.data('quantityMin'), 10) || 1;
        const quantityMax = parseInt($input.data('quantityMax'), 10) || Infinity;
        const minmax = _qty => Math.max(Math.min(_qty, quantityMax), quantityMin);
        const allowZero = $input.attr('min') === '0';
        const newQty = String(qty < quantityMin && allowZero ? 0 : minmax(qty));

        $input.val(newQty);

        // also update other inputs if same name
        if (name) $('[data-card-quantity-change] input').filter((_i, el) => el.name === name).val(newQty);

        if ($input.val() !== lastVal) {
            $input.trigger('change');
        }
    });
}

function fixCollapsibleAccessibility() {
    const oldBindEvents = Collapsible.prototype.bindEvents;

    Collapsible.prototype.onKeyDown = function onKeyDown(event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            $(event.currentTarget).trigger('click');
        }
    };

    Collapsible.prototype.bindEvents = function bindEvents() {
        oldBindEvents.call(this);

        this.$toggle.each((_, el) => {
            const $el = $(el);
            if (!$el.is('a, button')) {
                $el.on('keydown', this.onKeyDown);
                $el.attr('role', 'button').attr('tabindex', '0');
            }
        });
    };
}

function enableAnimationAfterPageLoad() {
    $('body').addClass('_animation-on');
}

/**
 * Init feature to show more/less text when text is too long.
 *
 * Usage:
 *
 * ```html
 * <div class="category-description" id="category-description" data-text-collapsible>
 *     {{{category.description}}}
 *     <div class="category-description-more" data-text-collapsible-toggle-container>
 *         <button class="button button--plain" type="button" data-text-collapsible-toggle>
 *             <span class="_title _off">{{lang 'search.faceted.show-more'}}</span>
 *             <span class="_title _on">{{lang 'search.faceted.show-less'}}</span>
 *         </button>
 *     </div>
 * </div>
 * ```
 *
 * ```scss
 * .category-description {
 *     @include eyeva-text-collapsible;
 *     color: $color-textSecondary;
 *     margin-bottom: spacing("base");
 * }
 * .category-description-more .button {
 *     font-size: fontSize("smaller");
 *     margin: 0;
 * }
 * ```
 *
 * @see templates/pages/category.html
 */
function initTextCollapsible() {
    const resetCollapsible = () => {
        $('[data-text-collapsible]')
            .removeClass('._collapsible')
            .each((_, el) => {
                const $el = $(el);
                const $toggleContainer = $el.find('[data-text-collapsible-toggle-container]');
                const contentHeight = el.scrollHeight - $toggleContainer.outerHeight();

                if (contentHeight > $el.innerHeight()) {
                    $el.addClass('_collapsible');
                }
            });
    };

    $('[data-text-collapsible-toggle]').each((_, el) => {
        const $toggle = $(el);
        const $collapsible = $toggle.closest('[data-text-collapsible]');

        $toggle.on('click', (event) => {
            event.preventDefault();

            const h = $collapsible.height();

            $toggle.toggleClass('is-open');
            $collapsible.toggleClass('is-open', $toggle.hasClass('is-open'));

            const newH = $collapsible.height();

            $collapsible.css({ height: h, maxHeight: 'none' })
                .animate({ height: newH }, 300, () => {
                    $collapsible.css({ height: '', maxHeight: '' });
                });
        });
    });

    resetCollapsible();

    const resetCollapsibleThrottled = throttle(resetCollapsible, 300);
    $(window).off('resize', resetCollapsibleThrottled).on('resize', resetCollapsibleThrottled);
}

function initCollapsibleAnimation() {
    const $body = $('body');
    //
    // make animation for height of these collapsible elements
    //
    const selectors = [
        '.accordion-navigation[data-collapsible]',
        '[data-collapsible="sidebar-subcategories"]',
        '._animation-on[data-collapsible]',
        '.eyeva-style [data-collapsible]',
    ];

    $body.on('toggle.collapsible', selectors.join(', '), (event) => {
        if ($body.hasClass('_animation-off')) return;

        const $toggle = $(event.currentTarget);
        const collapsible = $toggle.data('collapsibleInstance');

        if (!collapsible) return; // stop if not finish initializing

        const isCollapsed = collapsible.isCollapsed;

        if (collapsible.$target.hasClass('_animation-off')) return;

        collapsible.$target.addClass('_animating');

        const height = collapsible.$target.height();
        const from = isCollapsed ? height : 0;
        const to = isCollapsed ? 0 : height;
        const doneCb = () => collapsible.$target.removeClass('_animating');

        animateHeight(collapsible.$target, from, to, null, doneCb);
    });

    //
    // make fade animation for collapsible modals
    //
    $body.on('click', '[data-collapsible="page-sidebar"]', (event) => {
        if ($body.hasClass('_animation-off')) return;

        const $toggle = $(event.currentTarget);
        const collapsible = $toggle.data('collapsibleInstance');

        if (!collapsible) return; // stop if not finish initializing

        const isCollapsed = collapsible.isCollapsed;

        if (isCollapsed) {
            collapsible.$target.addClass('_force-visible'); // show
            requestAnimationFrame(() => collapsible.$target.addClass('_closing')); // fade out after reflow
            const duration = toMilliseconds(collapsible.$target.css('transition-duration')) || 300;
            setTimeout(() => collapsible.$target.removeClass('_force-visible _closing'), duration); // hide after fade out
        } else {
            collapsible.$target.addClass('_opening'); // disable transition & invisible
            requestAnimationFrame(() => collapsible.$target.removeClass('_opening')); // face in after reflow
        }
    });
}

function initDropdownAnimation() {
    const addClass = ($el, cls = '_closing') => {
        $el.addClass(cls);
        const ms = Number($el.css('--animation-duration')) || 0;
        setTimeout(() => $el.removeClass(cls), ms);
    };

    $('body').on('closed.fndtn.dropdown', '[data-dropdown-content]', (event) => addClass($(event.target), '_closing'));

    $('body').on('opened.fndtn.dropdown', '[data-dropdown-content]', (event) => addClass($(event.target), '_opening'));
}

/**
* Init sidebar modal collapsible on mobile for certain pages (category, brands, search, etc.)
*/
function initSidebarModal() {
    const $body = $('body');
    const initFocusTrap = ($scope) => {
        let focusTrap = $scope.data('focusTrap');

        if (focusTrap) {
            focusTrap.deactivate();
        } else {
            focusTrap = createFocusTrap($scope[0], {
                escapeDeactivates: false,
                returnFocusOnDeactivate: false,
                allowOutsideClick: false,
            });
            $scope.data('focusTrap', focusTrap);
        }

        return focusTrap;
    };

    $body.on('toggle.collapsible', '[data-collapsible="page-sidebar"]', (event) => {
        const $toggle = $(event.currentTarget);
        const collapsible = $toggle.data('collapsibleInstance');

        if (!collapsible) return; // stop if not finish initializing

        const isCollapsed = collapsible.isCollapsed;
        const focusTrap = initFocusTrap(collapsible.$target);
        const $advancedSearchToggle = $('[data-collapsible="advanced-search-content"]');
        const advancedSearchCollapsible = $advancedSearchToggle.data('collapsibleInstance');

        // open advanced search collapsible on mobile & tablet and
        // close on desktop
        if (advancedSearchCollapsible) {
            advancedSearchCollapsible.$target.addClass('_animation-off');
            if (mediumMediaQuery.matches) {
                advancedSearchCollapsible.close();
            } else {
                advancedSearchCollapsible.open();
            }
            setTimeout(() => advancedSearchCollapsible.$target.removeClass('_animation-off'), 300);
        }

        // stop if collapsible is disabled (on desktop)
        if (collapsible.disabled) return;

        if (isCollapsed) {
            const lastActiveElement = collapsible.$target.data('lastActiveElement');

            // deactivate focus trap
            focusTrap.deactivate();

            // focus to the last active element
            if (lastActiveElement) setTimeout(() => $(lastActiveElement).trigger('focus'), 300);
        } else {
            collapsible.$target.data('lastActiveElement', document.activeElement);

            // the close button
            const $close = collapsible.$target.find('[data-collapsible]')
                .filter((_i, el) => $(el).data('collapsible') === collapsible.$toggle.data('collapsible'))
                .first();

            // activate focus trap
            focusTrap.activate();

            // focus to the close button
            setTimeout(() => $close.trigger('focus'), 300);
        }
    });

    //
    // if click on the reset button of the faceted filters on the modal on mobile,
    // close the sidebar modal when the clear all filters request done
    //
    $body.on('click', '#faceted-search-clear-all-close-sidebar', () => {
        $body.one('refreshView.facetedSearch', () => {
            const $toggle = $('[data-collapsible="page-sidebar"]').not(':hidden').first();
            const collapsible = $toggle.data('collapsibleInstance');
            if (!collapsible || collapsible.isCollapsed) return;
            collapsible.close();
        });
    });
}

function initBannerCarousel(context) {
    const template = ({
        content,
        txtPrevious,
        txtNext,
        txtPlay,
        txtPause,
        txtClose,
    }) => `
        <div class="eyeva__banners-carousel">
            <div class="blaze-slider"
                data-blaze-slider='{
                    "all": {
                        "enablePagination": true,
                        "enableAutoplay": false,
                        "autoplayInterval": 5000,
                        "stopAutoplayOnInteraction": true,
                        "transitionDuration": 100,
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "slideGap": "0px"
                    }
                }'
            >
                <div class="blaze-container">
                    <div class="blaze-track-container">
                        <div class="blaze-track">
                            ${content}
                        </div>
                    </div>

                    <!-- navigation buttons -->
                    <button class="blaze-prev" type="button" aria-label="${txtPrevious}"><span class="icon"><svg><use href="#icon-arrow-left-long"></use></svg></span></button>
                    <button class="blaze-next" type="button" aria-label="${txtNext}"><span class="icon"><svg><use href="#icon-arrow-right-long"></use></svg></span></button>
                    <button class="blaze-pause" type="button" aria-label="${txtPlay}/${txtPause}"><span class="icon"><svg><use href="#icon-play-pause"></use></svg></span></button>
                </div>
            </div>
            <button class="_close-btn" type="button" aria-label="${txtClose}"><span class="icon"><svg><use href="#icon-xmark-large"></use></svg></span></button>
        </div>
    `;

    $('[data-banner-carousel]').each((_, el) => {
        const $carousel = $(el);
        const html = template({
            content: $carousel.html(),
            ...context,
        });

        $carousel.html(html);

        const $slider = $carousel.find('[data-blaze-slider]');

        initBlazeSlider($slider);

        const slider = $slider.data('blazeSliderInstance');

        slider.onSlide(() => {
            if ($slider.hasClass('_manual')) {
                $slider.removeClass('_next');
            } else {
                $slider.removeClass('_prev');
                $slider.addClass('_next');
            }

            $slider.removeClass('_manual');
        });


        $slider.find('.blaze-prev').on('click', () => {
            $slider.addClass('_prev _manual');
        });

        $carousel.find('._close-btn').on('click', (event) => {
            event.preventDefault();
            const ms = Number($carousel.css('--animation-duration')) || 0;
            $carousel.css('height', $carousel.height());
            setTimeout(() => $carousel.addClass('_closing'));
            setTimeout(() => $carousel.remove(), ms);
        });
    });
}

function initRecentlyViewedEvent() {
    $('body').on('productviewed', (event, productId) => {
        try {
            const productIds = parseJSON(window.localStorage.getItem('papathemes_recentlyViewedProducts') || '[]') || [];
            if (productId && !productIds.includes(productId)) {
                productIds.unshift(productId);
                window.localStorage.setItem('papathemes_recentlyViewedProducts', JSON.stringify(productIds));
                utils.hooks.emit('product-view', productId);
            }
        } catch (e) {
            console.error(e); // eslint-disable-line
        }
    });
}

function detectBCAdminBar() {
    if (window.hasOwnProperty('bcAdminBar')) {
        $('body').addClass('eyeva__bc-admin-bar-loaded');
    }
}

function initLaptopBannersResize() {
    // Chỉ thiết lập event listeners nếu section tồn tại
    const $grid = $('.section--laptop-banners._theme-styled > ._grid');

    if (!$grid.length) return;

    const updateLaptopBannersImageDimensions = () => {
        // Thu thập các image wrapper hợp lệ cho hero carousel và flex banners
        const validHeroWrappers = [];
        const validFlexBanners = [];
        const $contentRegions = $grid.find('[data-content-region]');

        $contentRegions.each((_index, contentRegion) => {
            const $contentRegion = $(contentRegion);

            // Kiểm tra xem content region này có chứa đúng các element cần thiết không
            const $subLayouts = $contentRegion.find('[data-sub-layout]');
            const $widgetIds = $contentRegion.find('[data-widget-id]');
            const $heroCarousels = $contentRegion.find('.papathemes-eyeva-hero-carousel');

            // Luồng xử lý cho Hero Carousel
            if ($subLayouts.length === 1 && $widgetIds.length === 1 && $heroCarousels.length === 1) {
                // Tìm image wrapper bên trong content region này
                const $imageWrapper = $contentRegion.find('.papathemes-eyeva-hero-carousel-image-wrapper');

                if ($imageWrapper.length) {
                    const element = $imageWrapper[0];

                    // Lưu thuộc tính gốc vào dataset nếu chưa có
                    if (!$imageWrapper.data('originalImageWidth')) {
                        const computedStyle = window.getComputedStyle(element);
                        const originalWidth = computedStyle.getPropertyValue('--image-width') || '';
                        const originalHeight = computedStyle.getPropertyValue('--image-height') || '';

                        // Lưu giá trị gốc vào dataset
                        $imageWrapper.data('originalImageWidth', originalWidth);
                        $imageWrapper.data('originalImageHeight', originalHeight);
                    }

                    // Khôi phục thuộc tính gốc trước
                    const originalWidth = $imageWrapper.data('originalImageWidth');
                    const originalHeight = $imageWrapper.data('originalImageHeight');

                    if (originalWidth) {
                        $imageWrapper.css('--image-width', originalWidth);
                    }
                    if (originalHeight) {
                        $imageWrapper.css('--image-height', originalHeight);
                    }

                    // Thêm vào danh sách wrapper hợp lệ để xử lý sau
                    validHeroWrappers.push($imageWrapper);
                }
            }
        });

        // Luồng xử lý cho Flex Banners
        // Tìm các columns trong content region
        const $columns = $grid.find('> ._col');

        $columns.each((_colIndex, column) => {
            const $column = $(column);
            const $colWidgetIds = $column.find('[data-widget-id]');
            const $banners = $column.find('._banner');

            // Chỉ xử lý nếu column có đúng 1 [data-widget-id] và 1 ._banner
            if ($colWidgetIds.length === 1 && $banners.length === 1) {
                const $flexBanner = $column.find('.beautify__flexBanners ._banner');

                if ($flexBanner.length) {
                    const $imgContainer = $flexBanner.find('._imgContainer');

                    if ($imgContainer.length) {
                        // Xóa custom padding-top
                        $imgContainer
                            .css('--padding-top', '')
                            .removeClass('_theme-fixed');

                        // Thêm vào danh sách flex banner hợp lệ để xử lý sau
                        validFlexBanners.push($imgContainer);
                    }
                }
            }
        });

        // Nếu không tìm thấy wrapper hợp lệ nào, thoát sớm
        if (validHeroWrappers.length === 0 && validFlexBanners.length === 0) return;

        // chỉ cập nhật trên màn hình desktop
        if (!mediumMediaQuery.matches) return;

        // Lấy kích thước grid sau khi đã khôi phục thuộc tính gốc
        const gridHeight = $grid.height();

        // Áp dụng kích thước mới cho Hero Carousel wrappers
        validHeroWrappers.forEach($imageWrapper => {
            // Lấy chiều rộng hiện tại của image wrapper
            const currentWidth = $imageWrapper.width();

            // Tính toán kích thước ảnh mới dựa trên chiều rộng wrapper
            const newImageWidth = Math.round(currentWidth);

            // Lấy chiều cao hiện tại của image wrapper (sau khi đã reset)
            const currentHeight = $imageWrapper.height();

            // Chỉ cập nhật chiều cao nếu grid cao hơn chiều cao hiện tại
            const cssProperties = { '--image-width': newImageWidth };
            if (gridHeight > currentHeight) {
                const newImageHeight = Math.round(gridHeight);
                cssProperties['--image-height'] = newImageHeight;
            }

            // Cập nhật CSS custom properties
            $imageWrapper.css(cssProperties).addClass('_theme-fixed');
        });

        // Áp dụng kích thước mới cho Flex Banner containers
        validFlexBanners.forEach($imgContainer => {
            // Lấy chiều rộng hiện tại của img container
            const currentWidth = $imgContainer.width();

            // Tính toán padding-top dựa trên tỷ lệ height/width
            const paddingTopPercent = currentWidth > 0 ? Math.round((gridHeight / currentWidth) * 100) : 0;

            // Cập nhật CSS custom property cho padding-top
            $imgContainer
                .css('--padding-top', `${paddingTopPercent}%`)
                .addClass('_theme-fixed');
        });
    };

    // Debounce handler resize
    const debouncedResize = throttle(updateLaptopBannersImageDimensions, 300);

    // Tính toán ban đầu
    updateLaptopBannersImageDimensions();

    // Lắng nghe sự kiện resize của window
    $(window).on('load resize', debouncedResize);

    // Cũng lắng nghe sự kiện thay đổi hướng màn hình trên mobile
    $(window).on('orientationchange', () => {
        // Delay nhỏ để đảm bảo kích thước được cập nhật sau khi thay đổi hướng
        setTimeout(updateLaptopBannersImageDimensions, 100);
    });
}

function initCategoryTabsDefaultActive() {
    const desired = 'All Rugged Computers';
    $('.categoryTabs').each((_i, el) => {
        const $tabs = $(el);
        const $links = $tabs.find('.categoryTabs-link').not('._more');

        // If any tab is already active, leave it alone
        if ($links.filter('._active').length) return;

        // Exact match first
        let $match = $links.filter(function filterByText() {
            const $span = $(this).find('span').first();
            const txt = $span.length ? $span.text().trim() : $(this).text().trim();
            return txt === desired;
        }).first();

        // Fallback: case-insensitive contains
        if (!$match.length) {
            const desiredLower = desired.toLowerCase();
            $match = $links.filter(function filterByTextContains() {
                const $span = $(this).find('span').first();
                const txt = $span.length ? $span.text().trim().toLowerCase() : $(this).text().trim().toLowerCase();
                return txt.indexOf(desiredLower) !== -1;
            }).first();
        }

        if ($match.length) {
            $links.removeClass('_active');
            $match.addClass('_active');
        }
    });
}

export default function (context) {
    initFormFields();
    initBlazeSlider();
    initBannerCarousel(context);
    initProductCardQty();
    fixCollapsibleAccessibility(); // must call before collapsibleFactory
    collapsibleFactory();
    initMenu(context); // must call after collapsibleFactory
    initTextCollapsible();
    initSidebarModal();
    initRecentlyViewedEvent();
    initCategoryTabsDefaultActive();
    initLaptopBannersResize(); // Thêm handler resize cho laptop banners

    // lower priority
    initCollapsibleAnimation();
    initDropdownAnimation();
    enableAnimationAfterPageLoad();
    detectBCAdminBar();
}
