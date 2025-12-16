import PageManager from '../theme/page-manager';
import { api, tools } from '@bigcommerce/stencil-utils';
import BlazeSlider from 'blaze-slider';
import { throttle, uniq } from 'lodash';

const requestCache = {};

export default class Home extends PageManager {
    onReady() {
        this.initCategoryTabs();
        this.initBrandCarousel();
    }

    /**
     * Initialize category tabs on each products blocks (bestselling, featured, new arrivals, etc.)
     */
    initCategoryTabs() {
        $('[data-category-tabs]').each((_i, el) => {
            const $el = $(el);
            const $hide = $el.find('[data-category-tabs-item-hide]');
            const $dropdown = $el.find('[data-category-tabs-dropdown]');

            if ($dropdown.length === 0) return;

            $hide.clone().appendTo($dropdown).removeClass('force-hide-desktop');
        });

        $('[data-category-tabs-url]').on('click', (event) => {
            event.preventDefault();

            const $el = $(event.currentTarget);
            const $tabs = $el.closest('[data-category-tabs]');
            const options = $tabs.data('categoryTabs');
            const $scope = $tabs.closest(options.scope);
            const $container = $scope.find(options.container);
            const url = new URL($el.data('categoryTabsUrl'), window.location.origin);

            url.searchParams.set('limit', options.limit);
            url.searchParams.set('sort', options.sort);

            $tabs.find('[data-category-tabs-url]').removeClass('_active');
            $el.addClass('_active');

            const updateContent = (content) => {
                $scope.removeClass('_loading');

                $container.html($(content).html());

                if (options.type === 'carousel') {
                    const $blaze = $scope.find('.blaze-slider');
                    if ($blaze.length > 0) {
                        const blaze = $blaze.data('blazeSliderInstance');
                        if (blaze) {
                            blaze.totalSlides = $container.children().length;
                            blaze.refresh();
                        } else {
                            $blaze.data('blazeSliderInstance', new BlazeSlider($blaze.get(0), $blaze.data('blazeSlider')));
                        }
                    }
                }
            };

            const cacheKey = `${url.href}|${options.type}`;

            if (requestCache[cacheKey]) {
                return updateContent(requestCache[cacheKey]);
            }

            $scope.addClass('_loading');

            api.getPage(url.href, {
                template: `papathemes/category/products-${options.type}`,
            }, (err, content) => {
                if (err) {
                    $scope.removeClass('_loading');
                    throw new Error(err);
                }

                requestCache[cacheKey] = content;
                updateContent(content);
            });
        });
    }

    /**
     * Initialize brand carousel to auto-scroll horizontally and load brand images
     */
    initBrandCarousel() {
        if ($('[data-brand-carousel]').length === 0) return;

        const times = 3;
        const rows = 2;
        const autoScrollStep = 2;

        const brandIds = uniq($('[data-brand-carousel-id]').get().map(el => $(el).data('brandCarouselId')));
        const brandImgWidth = Number(this.context.brand_size.split('x')[0]);

        // load brand images
        $.ajax({
            url: '/graphql',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: `
                    query ($brandIds: [Int!], $width: Int!) {
                        site {
                            brands(entityIds: $brandIds) {
                                edges {
                                    node {
                                        entityId
                                        name
                                        defaultImage {
                                            url(width: $width)
                                            urlTemplate
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
                variables: {
                    brandIds,
                    width: brandImgWidth,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.context.graphQLToken}`,
            },
            xhrFields: {
                withCredentials: true,
            },
            success: (response) => {
                const brands = response.data.site.brands.edges.map(edge => edge.node);
                brands.forEach(brand => {
                    if (!brand.defaultImage?.url) return;
                    const src = brand.defaultImage.url;
                    const srcset = tools.imageSrcset.getSrcset(brand.defaultImage.urlTemplate);
                    const $img = $('<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" data-sizes="auto" class="lazyload">')
                        .attr('data-src', src)
                        .attr('data-srcset', srcset)
                        .attr('alt', brand.name);
                    $(`[data-brand-carousel-id="${brand.entityId}"]`)
                        .find('[data-brand-image-container]')
                        .html($img);
                });
            },
        });

        const resize = () => {
            $('[data-brand-carousel]').each((_i, el) => {
                const $carousel = $(el);
                const $container = $carousel.closest('[data-brand-carousel-container]');
                const $items = $carousel.children().not('._clone');
                const n = $items.length;

                for (let w = $carousel.width(); w < $container.innerWidth() * times; w = $carousel.innerWidth()) {
                    const i = $carousel.children('._clone').length % n;
                    $items.eq(i).clone()
                        .addClass('_clone')
                        .appendTo($carousel);
                }
                $carousel.children('._clone').find('a').attr('tabindex', -1); // disable focus on cloned items for ADA compliance
            });
        };

        resize();
        $(window).on('resize', throttle(resize, 300));

        // set initial scroll position to center
        $('[data-brand-carousel-container]').each((_i, el) => {
            const $container = $(el);
            const $carousel = $container.find('[data-brand-carousel]');
            $container.scrollLeft($carousel.width() / times);
        });

        // move the first/last item to the end/beginning when scrolling
        const onScroll = (event) => {
            const $container = $(event.currentTarget);
            if ($container.data('paused')) return;

            const $carousel = $container.find('[data-brand-carousel]');
            const lastScrollLeft = $container.data('lastScrollLeft') || 0;
            const scrollLeft = $container.scrollLeft();
            const isScrollingRight = scrollLeft >= lastScrollLeft;
            const n = Math.floor($carousel.children().length / times / rows) * rows;
            const width = $carousel.width();

            if (isScrollingRight) {
                $container.data('scrollingDirection', 'right');
                if (scrollLeft > width / 2) {
                    const $heads = $carousel.children().slice(0, n).appendTo($carousel).hide();
                    const truncatedWidth = $carousel.width();

                    $heads.show();
                    $container.scrollLeft(scrollLeft - width + truncatedWidth);
                }
            } else {
                $container.data('scrollingDirection', 'left');
                if (scrollLeft < width / times) {
                    const $tails = $carousel.children().slice(-n).hide();
                    const truncatedWidth = $carousel.width();

                    $tails.prependTo($carousel).show();
                    $container.scrollLeft(scrollLeft + width - truncatedWidth);
                }
            }

            $container.data('lastScrollLeft', $container.scrollLeft());
        };

        // pause auto-scrolling when touchstart
        const onTouchStart = (event) => {
            const $container = $(event.currentTarget);
            $container.data('paused', true);
        };

        // resume auto-scrolling when touchend
        const onTouchEnd = (event) => {
            const $container = $(event.currentTarget);
            $container.data('paused', false);
            onScroll(event);
        };

        // scroll the carousel to right or left
        const scroll = ($container) => {
            if ($container.data('paused')) return;
            if ($.contains($container[0], document.activeElement)) return; // stop if the carousel contains the focused element
            if ($container.data('scrollingDirection') === 'right') {
                $container.scrollLeft($container.scrollLeft() + autoScrollStep);
                $container.trigger('scroll');
            } else if ($container.data('scrollingDirection') === 'left') {
                $container.scrollLeft($container.scrollLeft() - autoScrollStep);
                $container.trigger('scroll');
            }
        };

        // auto-scroll the carousel on viewport intersection
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const $container = $(entry.target);
                if (entry.isIntersecting) {
                    const timer = setInterval(() => scroll($container), Math.round(1000 / 60));
                    $container.data('autoScrollTimer', timer);
                } else {
                    clearInterval($container.data('autoScrollTimer'));
                    $container.data('autoScrollTimer', null);
                }
            });
        });

        $('[data-brand-carousel-container]').on('scroll', throttle(onScroll, 200));
        $('[data-brand-carousel-container]').on('touchstart', onTouchStart);
        $('[data-brand-carousel-container]').on('touchend', onTouchEnd);
        $('[data-brand-carousel-container]')
            .data('scrollingDirection', 'right')
            .each((_i, el) => observer.observe(el));

        $('[data-brand-carousel-container] a:not(._clone)').on('focus', (event) => event.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }));
    }
}
