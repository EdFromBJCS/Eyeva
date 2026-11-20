(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["home"],{

/***/ "./assets/js/papathemes/home.js"
/*!**************************************!*\
  !*** ./assets/js/papathemes/home.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var blaze_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blaze-slider */ "./node_modules/blaze-slider/dist/blaze-slider.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var requestCache = {};
var Home = /*#__PURE__*/function (_PageManager) {
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Home, _PageManager);
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    this.initCategoryTabs();
    this.initBrandCarousel();
    this.initMobileCarouselScrollbars();
  };
  _proto.initMobileCarouselScrollbars = function initMobileCarouselScrollbars(scope) {
    var $sliders = scope || $('.productCarousel, .popular-rugged-laptops-card .categoryCarousel');
    $sliders.each(function (_i, el) {
      var $slider = $(el);
      var slider = $slider.data('blazeSliderInstance');
      if (!slider) return;
      var existingUpdate = $slider.data('mobileCarouselScrollbarUpdate');
      if (existingUpdate) {
        existingUpdate();
        return;
      }
      var scrollbar = document.createElement('div');
      scrollbar.className = 'mobile-carousel-scrollbar';
      scrollbar.setAttribute('aria-hidden', 'true');
      var thumb = document.createElement('span');
      scrollbar.appendChild(thumb);
      el.appendChild(scrollbar);
      var updateScrollbar = function updateScrollbar(firstSlideIndex) {
        if (firstSlideIndex === void 0) {
          firstSlideIndex = slider.states[slider.stateIndex].page[0];
        }
        var totalSlides = Math.max(slider.totalSlides, 1);
        var maxStart = Math.max(totalSlides - slider.config.slidesToShow, 0);
        var thumbWidth = Math.min(slider.config.slidesToShow / totalSlides * 100, 100);
        var thumbOffset = maxStart ? firstSlideIndex / maxStart * (100 - thumbWidth) : 0;
        scrollbar.style.display = maxStart ? '' : 'none';
        thumb.style.width = thumbWidth + "%";
        thumb.style.left = thumbOffset + "%";
      };
      $slider.data('mobileCarouselScrollbarUpdate', updateScrollbar);
      slider.onSlide(function (_page, firstSlideIndex) {
        return updateScrollbar(firstSlideIndex);
      });
      $(window).on('resize', lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        return updateScrollbar();
      }, 300));
      updateScrollbar();
    });
  }

  /**
   * Initialize category tabs on each products blocks (bestselling, featured, new arrivals, etc.)
   */;
  _proto.initCategoryTabs = function initCategoryTabs() {
    var _this = this;
    $('[data-category-tabs]').each(function (_i, el) {
      var $el = $(el);
      var $hide = $el.find('[data-category-tabs-item-hide]');
      var $dropdown = $el.find('[data-category-tabs-dropdown]');
      if ($dropdown.length === 0) return;
      $hide.clone().appendTo($dropdown).removeClass('force-hide-desktop');
    });
    $('[data-category-tabs-url]').on('click', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var $tabs = $el.closest('[data-category-tabs]');
      var options = $tabs.data('categoryTabs');
      var $scope = $tabs.closest(options.scope);
      var $container = $scope.find(options.container);
      var url = new URL($el.data('categoryTabsUrl'), window.location.origin);
      url.searchParams.set('limit', options.limit);
      url.searchParams.set('sort', options.sort);
      $tabs.find('[data-category-tabs-url]').removeClass('_active');
      $el.addClass('_active');
      var updateContent = function updateContent(content) {
        $scope.removeClass('_loading');
        $container.html($(content).html());
        if (options.type === 'carousel') {
          var $blaze = $scope.find('.blaze-slider');
          if ($blaze.length > 0) {
            var blaze = $blaze.data('blazeSliderInstance');
            if (blaze) {
              blaze.totalSlides = $container.children().length;
              blaze.refresh();
            } else {
              $blaze.data('blazeSliderInstance', new blaze_slider__WEBPACK_IMPORTED_MODULE_4__["default"]($blaze.get(0), $blaze.data('blazeSlider')));
            }
            _this.initMobileCarouselScrollbars($scope.find('.productCarousel'));
          }
        }
      };
      var cacheKey = url.href + "|" + options.type;
      if (requestCache[cacheKey]) {
        return updateContent(requestCache[cacheKey]);
      }
      $scope.addClass('_loading');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(url.href, {
        template: "papathemes/category/products-" + options.type
      }, function (err, content) {
        if (err) {
          $scope.removeClass('_loading');
          throw new Error(err);
        }
        requestCache[cacheKey] = content;
        updateContent(content);
      });
    });

    // If any tab was programmatically marked as active before handlers were attached,
    // trigger its click so the related products are loaded.
    $('[data-category-tabs]').each(function (_i, el) {
      var $tabs = $(el);
      var $preActive = $tabs.find('[data-category-tabs-url]._active').first();
      if ($preActive.length) {
        $preActive.trigger('click');
      }
    });
  }

  /**
   * Initialize brand carousel to auto-scroll horizontally and load brand images
   */;
  _proto.initBrandCarousel = function initBrandCarousel() {
    if ($('[data-brand-carousel]').length === 0) return;
    var times = 3;
    var rows = 2;
    var autoScrollStep = 2;
    var brandIds = lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()($('[data-brand-carousel-id]').get().map(function (el) {
      return $(el).data('brandCarouselId');
    }));
    var brandImgWidth = Number(this.context.brand_size.split('x')[0]);

    // load brand images
    $.ajax({
      url: '/graphql',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        query: "\n                    query ($brandIds: [Int!], $width: Int!) {\n                        site {\n                            brands(entityIds: $brandIds) {\n                                edges {\n                                    node {\n                                        entityId\n                                        name\n                                        defaultImage {\n                                            url(width: $width)\n                                            urlTemplate\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                ",
        variables: {
          brandIds: brandIds,
          width: brandImgWidth
        }
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + this.context.graphQLToken
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(response) {
        var brands = response.data.site.brands.edges.map(function (edge) {
          return edge.node;
        });
        brands.forEach(function (brand) {
          var _brand$defaultImage;
          if (!((_brand$defaultImage = brand.defaultImage) != null && _brand$defaultImage.url)) return;
          var src = brand.defaultImage.url;
          var srcset = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.tools.imageSrcset.getSrcset(brand.defaultImage.urlTemplate);
          var $img = $('<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" data-sizes="auto" class="lazyload">').attr('data-src', src).attr('data-srcset', srcset).attr('alt', brand.name);
          $("[data-brand-carousel-id=\"" + brand.entityId + "\"]").find('[data-brand-image-container]').html($img);
        });
      }
    });
    var resize = function resize() {
      $('[data-brand-carousel]').each(function (_i, el) {
        var $carousel = $(el);
        var $container = $carousel.closest('[data-brand-carousel-container]');
        var $items = $carousel.children().not('._clone');
        var n = $items.length;
        for (var w = $carousel.width(); w < $container.innerWidth() * times; w = $carousel.innerWidth()) {
          var i = $carousel.children('._clone').length % n;
          $items.eq(i).clone().addClass('_clone').appendTo($carousel);
        }
        $carousel.children('._clone').find('a').attr('tabindex', -1); // disable focus on cloned items for ADA compliance
      });
    };
    resize();
    $(window).on('resize', lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(resize, 300));

    // set initial scroll position to center
    $('[data-brand-carousel-container]').each(function (_i, el) {
      var $container = $(el);
      var $carousel = $container.find('[data-brand-carousel]');
      $container.scrollLeft($carousel.width() / times);
    });

    // move the first/last item to the end/beginning when scrolling
    var onScroll = function onScroll(event) {
      var $container = $(event.currentTarget);
      if ($container.data('paused')) return;
      var $carousel = $container.find('[data-brand-carousel]');
      var lastScrollLeft = $container.data('lastScrollLeft') || 0;
      var scrollLeft = $container.scrollLeft();
      var isScrollingRight = scrollLeft >= lastScrollLeft;
      var n = Math.floor($carousel.children().length / times / rows) * rows;
      var width = $carousel.width();
      if (isScrollingRight) {
        $container.data('scrollingDirection', 'right');
        if (scrollLeft > width / 2) {
          var $heads = $carousel.children().slice(0, n).appendTo($carousel).hide();
          var truncatedWidth = $carousel.width();
          $heads.show();
          $container.scrollLeft(scrollLeft - width + truncatedWidth);
        }
      } else {
        $container.data('scrollingDirection', 'left');
        if (scrollLeft < width / times) {
          var $tails = $carousel.children().slice(-n).hide();
          var _truncatedWidth = $carousel.width();
          $tails.prependTo($carousel).show();
          $container.scrollLeft(scrollLeft + width - _truncatedWidth);
        }
      }
      $container.data('lastScrollLeft', $container.scrollLeft());
    };

    // pause auto-scrolling when touchstart
    var onTouchStart = function onTouchStart(event) {
      var $container = $(event.currentTarget);
      $container.data('paused', true);
    };

    // resume auto-scrolling when touchend
    var onTouchEnd = function onTouchEnd(event) {
      var $container = $(event.currentTarget);
      $container.data('paused', false);
      onScroll(event);
    };

    // scroll the carousel to right or left
    var scroll = function scroll($container) {
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
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var $container = $(entry.target);
        if (entry.isIntersecting) {
          var timer = setInterval(function () {
            return scroll($container);
          }, Math.round(1000 / 60));
          $container.data('autoScrollTimer', timer);
        } else {
          clearInterval($container.data('autoScrollTimer'));
          $container.data('autoScrollTimer', null);
        }
      });
    });
    $('[data-brand-carousel-container]').on('scroll', lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(onScroll, 200));
    $('[data-brand-carousel-container]').on('touchstart', onTouchStart);
    $('[data-brand-carousel-container]').on('touchend', onTouchEnd);
    $('[data-brand-carousel-container]').data('scrollingDirection', 'right').each(function (_i, el) {
      return observer.observe(el);
    });
    $('[data-brand-carousel-container] a:not(._clone)').on('focus', function (event) {
      return event.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    });
  };
  return Home;
}(_theme_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ },

/***/ "./node_modules/lodash/_SetCache.js"
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ },

/***/ "./node_modules/lodash/_arrayIncludes.js"
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ },

/***/ "./node_modules/lodash/_arrayIncludesWith.js"
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
(module) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ },

/***/ "./node_modules/lodash/_baseIndexOf.js"
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
(module) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ },

/***/ "./node_modules/lodash/_baseUniq.js"
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ },

/***/ "./node_modules/lodash/_cacheHas.js"
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ },

/***/ "./node_modules/lodash/_createSet.js"
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
(module) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ },

/***/ "./node_modules/lodash/_setToArray.js"
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
(module) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ },

/***/ "./node_modules/lodash/isArray.js"
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ },

/***/ "./node_modules/lodash/uniq.js"
/*!*************************************!*\
  !*** ./node_modules/lodash/uniq.js ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldENhY2hlLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5pcS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vdGhlbWUvcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IHsgYXBpLCB0b29scyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IEJsYXplU2xpZGVyIGZyb20gJ2JsYXplLXNsaWRlcic7XHJcbmltcG9ydCB7IHRocm90dGxlLCB1bmlxIH0gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IHJlcXVlc3RDYWNoZSA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0Q2F0ZWdvcnlUYWJzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QnJhbmRDYXJvdXNlbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1vYmlsZUNhcm91c2VsU2Nyb2xsYmFycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2JpbGVDYXJvdXNlbFNjcm9sbGJhcnMoc2NvcGUpIHtcclxuICAgICAgICBjb25zdCAkc2xpZGVycyA9IHNjb3BlIHx8ICQoJy5wcm9kdWN0Q2Fyb3VzZWwsIC5wb3B1bGFyLXJ1Z2dlZC1sYXB0b3BzLWNhcmQgLmNhdGVnb3J5Q2Fyb3VzZWwnKTtcclxuXHJcbiAgICAgICAgJHNsaWRlcnMuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRzbGlkZXIgPSAkKGVsKTtcclxuICAgICAgICAgICAgY29uc3Qgc2xpZGVyID0gJHNsaWRlci5kYXRhKCdibGF6ZVNsaWRlckluc3RhbmNlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNsaWRlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdVcGRhdGUgPSAkc2xpZGVyLmRhdGEoJ21vYmlsZUNhcm91c2VsU2Nyb2xsYmFyVXBkYXRlJyk7XHJcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1VwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHNjcm9sbGJhci5jbGFzc05hbWUgPSAnbW9iaWxlLWNhcm91c2VsLXNjcm9sbGJhcic7XHJcbiAgICAgICAgICAgIHNjcm9sbGJhci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBzY3JvbGxiYXIuYXBwZW5kQ2hpbGQodGh1bWIpO1xyXG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChzY3JvbGxiYXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlU2Nyb2xsYmFyID0gKGZpcnN0U2xpZGVJbmRleCA9IHNsaWRlci5zdGF0ZXNbc2xpZGVyLnN0YXRlSW5kZXhdLnBhZ2VbMF0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsU2xpZGVzID0gTWF0aC5tYXgoc2xpZGVyLnRvdGFsU2xpZGVzLCAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1heFN0YXJ0ID0gTWF0aC5tYXgodG90YWxTbGlkZXMgLSBzbGlkZXIuY29uZmlnLnNsaWRlc1RvU2hvdywgMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aHVtYldpZHRoID0gTWF0aC5taW4oKHNsaWRlci5jb25maWcuc2xpZGVzVG9TaG93IC8gdG90YWxTbGlkZXMpICogMTAwLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGh1bWJPZmZzZXQgPSBtYXhTdGFydCA/IChmaXJzdFNsaWRlSW5kZXggLyBtYXhTdGFydCkgKiAoMTAwIC0gdGh1bWJXaWR0aCkgOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcm9sbGJhci5zdHlsZS5kaXNwbGF5ID0gbWF4U3RhcnQgPyAnJyA6ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRodW1iLnN0eWxlLndpZHRoID0gYCR7dGh1bWJXaWR0aH0lYDtcclxuICAgICAgICAgICAgICAgIHRodW1iLnN0eWxlLmxlZnQgPSBgJHt0aHVtYk9mZnNldH0lYDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzbGlkZXIuZGF0YSgnbW9iaWxlQ2Fyb3VzZWxTY3JvbGxiYXJVcGRhdGUnLCB1cGRhdGVTY3JvbGxiYXIpO1xyXG4gICAgICAgICAgICBzbGlkZXIub25TbGlkZSgoX3BhZ2UsIGZpcnN0U2xpZGVJbmRleCkgPT4gdXBkYXRlU2Nyb2xsYmFyKGZpcnN0U2xpZGVJbmRleCkpO1xyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHRocm90dGxlKCgpID0+IHVwZGF0ZVNjcm9sbGJhcigpLCAzMDApKTtcclxuICAgICAgICAgICAgdXBkYXRlU2Nyb2xsYmFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIGNhdGVnb3J5IHRhYnMgb24gZWFjaCBwcm9kdWN0cyBibG9ja3MgKGJlc3RzZWxsaW5nLCBmZWF0dXJlZCwgbmV3IGFycml2YWxzLCBldGMuKVxyXG4gICAgICovXHJcbiAgICBpbml0Q2F0ZWdvcnlUYWJzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLWNhdGVnb3J5LXRhYnNdJykuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCAkaGlkZSA9ICRlbC5maW5kKCdbZGF0YS1jYXRlZ29yeS10YWJzLWl0ZW0taGlkZV0nKTtcclxuICAgICAgICAgICAgY29uc3QgJGRyb3Bkb3duID0gJGVsLmZpbmQoJ1tkYXRhLWNhdGVnb3J5LXRhYnMtZHJvcGRvd25dJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJGRyb3Bkb3duLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgJGhpZGUuY2xvbmUoKS5hcHBlbmRUbygkZHJvcGRvd24pLnJlbW92ZUNsYXNzKCdmb3JjZS1oaWRlLWRlc2t0b3AnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY2F0ZWdvcnktdGFicy11cmxdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCAkdGFicyA9ICRlbC5jbG9zZXN0KCdbZGF0YS1jYXRlZ29yeS10YWJzXScpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gJHRhYnMuZGF0YSgnY2F0ZWdvcnlUYWJzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRzY29wZSA9ICR0YWJzLmNsb3Nlc3Qob3B0aW9ucy5zY29wZSk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkc2NvcGUuZmluZChvcHRpb25zLmNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoJGVsLmRhdGEoJ2NhdGVnb3J5VGFic1VybCcpLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcclxuXHJcbiAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdsaW1pdCcsIG9wdGlvbnMubGltaXQpO1xyXG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc29ydCcsIG9wdGlvbnMuc29ydCk7XHJcblxyXG4gICAgICAgICAgICAkdGFicy5maW5kKCdbZGF0YS1jYXRlZ29yeS10YWJzLXVybF0nKS5yZW1vdmVDbGFzcygnX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3MoJ19hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUNvbnRlbnQgPSAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92ZUNsYXNzKCdfbG9hZGluZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICRjb250YWluZXIuaHRtbCgkKGNvbnRlbnQpLmh0bWwoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2Nhcm91c2VsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRibGF6ZSA9ICRzY29wZS5maW5kKCcuYmxhemUtc2xpZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRibGF6ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsYXplID0gJGJsYXplLmRhdGEoJ2JsYXplU2xpZGVySW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsYXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGF6ZS50b3RhbFNsaWRlcyA9ICRjb250YWluZXIuY2hpbGRyZW4oKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGF6ZS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYmxhemUuZGF0YSgnYmxhemVTbGlkZXJJbnN0YW5jZScsIG5ldyBCbGF6ZVNsaWRlcigkYmxhemUuZ2V0KDApLCAkYmxhemUuZGF0YSgnYmxhemVTbGlkZXInKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRNb2JpbGVDYXJvdXNlbFNjcm9sbGJhcnMoJHNjb3BlLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBgJHt1cmwuaHJlZn18JHtvcHRpb25zLnR5cGV9YDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Q2FjaGVbY2FjaGVLZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlQ29udGVudChyZXF1ZXN0Q2FjaGVbY2FjaGVLZXldKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmFkZENsYXNzKCdfbG9hZGluZycpO1xyXG5cclxuICAgICAgICAgICAgYXBpLmdldFBhZ2UodXJsLmhyZWYsIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBgcGFwYXRoZW1lcy9jYXRlZ29yeS9wcm9kdWN0cy0ke29wdGlvbnMudHlwZX1gLFxyXG4gICAgICAgICAgICB9LCAoZXJyLCBjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92ZUNsYXNzKCdfbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3RDYWNoZVtjYWNoZUtleV0gPSBjb250ZW50O1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ29udGVudChjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIElmIGFueSB0YWIgd2FzIHByb2dyYW1tYXRpY2FsbHkgbWFya2VkIGFzIGFjdGl2ZSBiZWZvcmUgaGFuZGxlcnMgd2VyZSBhdHRhY2hlZCxcclxuICAgICAgICAvLyB0cmlnZ2VyIGl0cyBjbGljayBzbyB0aGUgcmVsYXRlZCBwcm9kdWN0cyBhcmUgbG9hZGVkLlxyXG4gICAgICAgICQoJ1tkYXRhLWNhdGVnb3J5LXRhYnNdJykuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YWJzID0gJChlbCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcmVBY3RpdmUgPSAkdGFicy5maW5kKCdbZGF0YS1jYXRlZ29yeS10YWJzLXVybF0uX2FjdGl2ZScpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGlmICgkcHJlQWN0aXZlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJHByZUFjdGl2ZS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIGJyYW5kIGNhcm91c2VsIHRvIGF1dG8tc2Nyb2xsIGhvcml6b250YWxseSBhbmQgbG9hZCBicmFuZCBpbWFnZXNcclxuICAgICAqL1xyXG4gICAgaW5pdEJyYW5kQ2Fyb3VzZWwoKSB7XHJcbiAgICAgICAgaWYgKCQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsXScpLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lcyA9IDM7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IDI7XHJcbiAgICAgICAgY29uc3QgYXV0b1Njcm9sbFN0ZXAgPSAyO1xyXG5cclxuICAgICAgICBjb25zdCBicmFuZElkcyA9IHVuaXEoJCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWwtaWRdJykuZ2V0KCkubWFwKGVsID0+ICQoZWwpLmRhdGEoJ2JyYW5kQ2Fyb3VzZWxJZCcpKSk7XHJcbiAgICAgICAgY29uc3QgYnJhbmRJbWdXaWR0aCA9IE51bWJlcih0aGlzLmNvbnRleHQuYnJhbmRfc2l6ZS5zcGxpdCgneCcpWzBdKTtcclxuXHJcbiAgICAgICAgLy8gbG9hZCBicmFuZCBpbWFnZXNcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeSAoJGJyYW5kSWRzOiBbSW50IV0sICR3aWR0aDogSW50ISkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kcyhlbnRpdHlJZHM6ICRicmFuZElkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwod2lkdGg6ICR3aWR0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxUZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyYW5kSWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBicmFuZEltZ1dpZHRoLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSByZXNwb25zZS5kYXRhLnNpdGUuYnJhbmRzLmVkZ2VzLm1hcChlZGdlID0+IGVkZ2Uubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmFuZHMuZm9yRWFjaChicmFuZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFicmFuZC5kZWZhdWx0SW1hZ2U/LnVybCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGJyYW5kLmRlZmF1bHRJbWFnZS51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3Jjc2V0ID0gdG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KGJyYW5kLmRlZmF1bHRJbWFnZS51cmxUZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGltZyA9ICQoJzxpbWcgc3JjPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95d0FBQUFBQVFBQkFBQUNBVXdBT3c9PVwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgY2xhc3M9XCJsYXp5bG9hZFwiPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyYycsIHNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0Jywgc3Jjc2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYWx0JywgYnJhbmQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChgW2RhdGEtYnJhbmQtY2Fyb3VzZWwtaWQ9XCIke2JyYW5kLmVudGl0eUlkfVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1icmFuZC1pbWFnZS1jb250YWluZXJdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoJGltZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1icmFuZC1jYXJvdXNlbF0nKS5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjYXJvdXNlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICRjYXJvdXNlbC5jbG9zZXN0KCdbZGF0YS1icmFuZC1jYXJvdXNlbC1jb250YWluZXJdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkaXRlbXMgPSAkY2Fyb3VzZWwuY2hpbGRyZW4oKS5ub3QoJy5fY2xvbmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSAkaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHcgPSAkY2Fyb3VzZWwud2lkdGgoKTsgdyA8ICRjb250YWluZXIuaW5uZXJXaWR0aCgpICogdGltZXM7IHcgPSAkY2Fyb3VzZWwuaW5uZXJXaWR0aCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRjYXJvdXNlbC5jaGlsZHJlbignLl9jbG9uZScpLmxlbmd0aCAlIG47XHJcbiAgICAgICAgICAgICAgICAgICAgJGl0ZW1zLmVxKGkpLmNsb25lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdfY2xvbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJGNhcm91c2VsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRjYXJvdXNlbC5jaGlsZHJlbignLl9jbG9uZScpLmZpbmQoJ2EnKS5hdHRyKCd0YWJpbmRleCcsIC0xKTsgLy8gZGlzYWJsZSBmb2N1cyBvbiBjbG9uZWQgaXRlbXMgZm9yIEFEQSBjb21wbGlhbmNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlc2l6ZSgpO1xyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgdGhyb3R0bGUocmVzaXplLCAzMDApKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGluaXRpYWwgc2Nyb2xsIHBvc2l0aW9uIHRvIGNlbnRlclxyXG4gICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0nKS5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCAkY2Fyb3VzZWwgPSAkY29udGFpbmVyLmZpbmQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsXScpO1xyXG4gICAgICAgICAgICAkY29udGFpbmVyLnNjcm9sbExlZnQoJGNhcm91c2VsLndpZHRoKCkgLyB0aW1lcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgdGhlIGZpcnN0L2xhc3QgaXRlbSB0byB0aGUgZW5kL2JlZ2lubmluZyB3aGVuIHNjcm9sbGluZ1xyXG4gICAgICAgIGNvbnN0IG9uU2Nyb2xsID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoJGNvbnRhaW5lci5kYXRhKCdwYXVzZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGNhcm91c2VsID0gJGNvbnRhaW5lci5maW5kKCdbZGF0YS1icmFuZC1jYXJvdXNlbF0nKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdFNjcm9sbExlZnQgPSAkY29udGFpbmVyLmRhdGEoJ2xhc3RTY3JvbGxMZWZ0JykgfHwgMDtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9ICRjb250YWluZXIuc2Nyb2xsTGVmdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpc1Njcm9sbGluZ1JpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBsYXN0U2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgY29uc3QgbiA9IE1hdGguZmxvb3IoJGNhcm91c2VsLmNoaWxkcmVuKCkubGVuZ3RoIC8gdGltZXMgLyByb3dzKSAqIHJvd3M7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gJGNhcm91c2VsLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNTY3JvbGxpbmdSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdzY3JvbGxpbmdEaXJlY3Rpb24nLCAncmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxMZWZ0ID4gd2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGhlYWRzID0gJGNhcm91c2VsLmNoaWxkcmVuKCkuc2xpY2UoMCwgbikuYXBwZW5kVG8oJGNhcm91c2VsKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJ1bmNhdGVkV2lkdGggPSAkY2Fyb3VzZWwud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGhlYWRzLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLnNjcm9sbExlZnQoc2Nyb2xsTGVmdCAtIHdpZHRoICsgdHJ1bmNhdGVkV2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdzY3JvbGxpbmdEaXJlY3Rpb24nLCAnbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbExlZnQgPCB3aWR0aCAvIHRpbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRhaWxzID0gJGNhcm91c2VsLmNoaWxkcmVuKCkuc2xpY2UoLW4pLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cnVuY2F0ZWRXaWR0aCA9ICRjYXJvdXNlbC53aWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdGFpbHMucHJlcGVuZFRvKCRjYXJvdXNlbCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjb250YWluZXIuc2Nyb2xsTGVmdChzY3JvbGxMZWZ0ICsgd2lkdGggLSB0cnVuY2F0ZWRXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRjb250YWluZXIuZGF0YSgnbGFzdFNjcm9sbExlZnQnLCAkY29udGFpbmVyLnNjcm9sbExlZnQoKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gcGF1c2UgYXV0by1zY3JvbGxpbmcgd2hlbiB0b3VjaHN0YXJ0XHJcbiAgICAgICAgY29uc3Qgb25Ub3VjaFN0YXJ0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAkY29udGFpbmVyLmRhdGEoJ3BhdXNlZCcsIHRydWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHJlc3VtZSBhdXRvLXNjcm9sbGluZyB3aGVuIHRvdWNoZW5kXHJcbiAgICAgICAgY29uc3Qgb25Ub3VjaEVuZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdwYXVzZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIG9uU2Nyb2xsKGV2ZW50KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBzY3JvbGwgdGhlIGNhcm91c2VsIHRvIHJpZ2h0IG9yIGxlZnRcclxuICAgICAgICBjb25zdCBzY3JvbGwgPSAoJGNvbnRhaW5lcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJGNvbnRhaW5lci5kYXRhKCdwYXVzZWQnKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoJC5jb250YWlucygkY29udGFpbmVyWzBdLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgcmV0dXJuOyAvLyBzdG9wIGlmIHRoZSBjYXJvdXNlbCBjb250YWlucyB0aGUgZm9jdXNlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIGlmICgkY29udGFpbmVyLmRhdGEoJ3Njcm9sbGluZ0RpcmVjdGlvbicpID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLnNjcm9sbExlZnQoJGNvbnRhaW5lci5zY3JvbGxMZWZ0KCkgKyBhdXRvU2Nyb2xsU3RlcCk7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLnRyaWdnZXIoJ3Njcm9sbCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCRjb250YWluZXIuZGF0YSgnc2Nyb2xsaW5nRGlyZWN0aW9uJykgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5zY3JvbGxMZWZ0KCRjb250YWluZXIuc2Nyb2xsTGVmdCgpIC0gYXV0b1Njcm9sbFN0ZXApO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci50cmlnZ2VyKCdzY3JvbGwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGF1dG8tc2Nyb2xsIHRoZSBjYXJvdXNlbCBvbiB2aWV3cG9ydCBpbnRlcnNlY3Rpb25cclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJChlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiBzY3JvbGwoJGNvbnRhaW5lciksIE1hdGgucm91bmQoMTAwMCAvIDYwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdhdXRvU2Nyb2xsVGltZXInLCB0aW1lcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJGNvbnRhaW5lci5kYXRhKCdhdXRvU2Nyb2xsVGltZXInKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdhdXRvU2Nyb2xsVGltZXInLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0nKS5vbignc2Nyb2xsJywgdGhyb3R0bGUob25TY3JvbGwsIDIwMCkpO1xyXG4gICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0nKS5vbigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XHJcbiAgICAgICAgJCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWwtY29udGFpbmVyXScpLm9uKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xyXG4gICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0nKVxyXG4gICAgICAgICAgICAuZGF0YSgnc2Nyb2xsaW5nRGlyZWN0aW9uJywgJ3JpZ2h0JylcclxuICAgICAgICAgICAgLmVhY2goKF9pLCBlbCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1icmFuZC1jYXJvdXNlbC1jb250YWluZXJdIGE6bm90KC5fY2xvbmUpJykub24oJ2ZvY3VzJywgKGV2ZW50KSA9PiBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ25lYXJlc3QnLCBpbmxpbmU6ICdjZW50ZXInIH0pKTtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xyXG5cclxuLyoqXHJcbiAqIENhc3RzIGB2YWx1ZWAgYXMgYW4gYXJyYXkgaWYgaXQncyBub3Qgb25lLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSA0LjQuMFxyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgYXJyYXkuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIF8uY2FzdEFycmF5KDEpO1xyXG4gKiAvLyA9PiBbMV1cclxuICpcclxuICogXy5jYXN0QXJyYXkoeyAnYSc6IDEgfSk7XHJcbiAqIC8vID0+IFt7ICdhJzogMSB9XVxyXG4gKlxyXG4gKiBfLmNhc3RBcnJheSgnYWJjJyk7XHJcbiAqIC8vID0+IFsnYWJjJ11cclxuICpcclxuICogXy5jYXN0QXJyYXkobnVsbCk7XHJcbiAqIC8vID0+IFtudWxsXVxyXG4gKlxyXG4gKiBfLmNhc3RBcnJheSh1bmRlZmluZWQpO1xyXG4gKiAvLyA9PiBbdW5kZWZpbmVkXVxyXG4gKlxyXG4gKiBfLmNhc3RBcnJheSgpO1xyXG4gKiAvLyA9PiBbXVxyXG4gKlxyXG4gKiB2YXIgYXJyYXkgPSBbMSwgMiwgM107XHJcbiAqIGNvbnNvbGUubG9nKF8uY2FzdEFycmF5KGFycmF5KSA9PT0gYXJyYXkpO1xyXG4gKiAvLyA9PiB0cnVlXHJcbiAqL1xyXG5mdW5jdGlvbiBjYXN0QXJyYXkoKSB7XHJcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIHZhciB2YWx1ZSA9IGFyZ3VtZW50c1swXTtcclxuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2FzdEFycmF5O1xyXG4iLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xyXG5cclxuLyoqXHJcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXHJcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXHJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cclxuICovXHJcbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XHJcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xyXG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcclxuIiwiLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXHJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxyXG4gKi9cclxuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XHJcbiAgdmFyIGluZGV4ID0gLTEsXHJcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xyXG5cclxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcclxuIiwiLyoqXHJcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcclxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cclxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XHJcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcclxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG5cclxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gLTE7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcclxuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcclxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXHJcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXHJcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXHJcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcclxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XHJcblxyXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cclxudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XHJcblxyXG4vKipcclxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXHJcbiAqL1xyXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcclxuICB2YXIgaW5kZXggPSAtMSxcclxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxyXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXHJcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcclxuICAgICAgcmVzdWx0ID0gW10sXHJcbiAgICAgIHNlZW4gPSByZXN1bHQ7XHJcblxyXG4gIGlmIChjb21wYXJhdG9yKSB7XHJcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xyXG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcclxuICB9XHJcbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcclxuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xyXG4gICAgaWYgKHNldCkge1xyXG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xyXG4gICAgfVxyXG4gICAgaXNDb21tb24gPSBmYWxzZTtcclxuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XHJcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xyXG4gIH1cclxuICBvdXRlcjpcclxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxyXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcclxuXHJcbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcclxuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcclxuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcclxuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xyXG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVyYXRlZSkge1xyXG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xyXG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XHJcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XHJcbiIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XHJcblxyXG4vKipcclxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cclxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxyXG4gKi9cclxuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcclxuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XHJcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xyXG4iLCIvKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAc2luY2UgMi4zLjBcclxuICogQGNhdGVnb3J5IFV0aWxcclxuICogQGV4YW1wbGVcclxuICpcclxuICogXy50aW1lcygyLCBfLm5vb3ApO1xyXG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXHJcbiAqL1xyXG5mdW5jdGlvbiBub29wKCkge1xyXG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcclxuIiwiLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQG1lbWJlck9mIF9cclxuICogQHNpbmNlIDQuMTMuMFxyXG4gKiBAY2F0ZWdvcnkgVXRpbFxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xyXG4gKiAvLyA9PiBbW10sIFtdXVxyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XHJcbiAgcmV0dXJuIFtdO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcclxuIiwiLyoqXHJcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQG1lbWJlck9mIF9cclxuICogQHNpbmNlIDAuMS4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqXHJcbiAqIF8uaXNBcnJheSgnYWJjJyk7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqXHJcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKi9cclxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xyXG4iLCJ2YXIgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIGFuIGFycmF5LCB1c2luZ1xyXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxyXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGluIHdoaWNoIG9ubHkgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgZWFjaCBlbGVtZW50XHJcbiAqIGlzIGtlcHQuIFRoZSBvcmRlciBvZiByZXN1bHQgdmFsdWVzIGlzIGRldGVybWluZWQgYnkgdGhlIG9yZGVyIHRoZXkgb2NjdXJcclxuICogaW4gdGhlIGFycmF5LlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBAY2F0ZWdvcnkgQXJyYXlcclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBfLnVuaXEoWzIsIDEsIDJdKTtcclxuICogLy8gPT4gWzIsIDFdXHJcbiAqL1xyXG5mdW5jdGlvbiB1bmlxKGFycmF5KSB7XHJcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVVuaXEoYXJyYXkpIDogW107XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdW5pcTtcclxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiYXBpIiwidG9vbHMiLCJCbGF6ZVNsaWRlciIsInJlcXVlc3RDYWNoZSIsIkhvbWUiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImluaXRDYXRlZ29yeVRhYnMiLCJpbml0QnJhbmRDYXJvdXNlbCIsImluaXRNb2JpbGVDYXJvdXNlbFNjcm9sbGJhcnMiLCJzY29wZSIsIiRzbGlkZXJzIiwiJCIsImVhY2giLCJfaSIsImVsIiwiJHNsaWRlciIsInNsaWRlciIsImRhdGEiLCJleGlzdGluZ1VwZGF0ZSIsInNjcm9sbGJhciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsInRodW1iIiwiYXBwZW5kQ2hpbGQiLCJ1cGRhdGVTY3JvbGxiYXIiLCJmaXJzdFNsaWRlSW5kZXgiLCJzdGF0ZXMiLCJzdGF0ZUluZGV4IiwicGFnZSIsInRvdGFsU2xpZGVzIiwiTWF0aCIsIm1heCIsIm1heFN0YXJ0IiwiY29uZmlnIiwic2xpZGVzVG9TaG93IiwidGh1bWJXaWR0aCIsIm1pbiIsInRodW1iT2Zmc2V0Iiwic3R5bGUiLCJkaXNwbGF5Iiwid2lkdGgiLCJsZWZ0Iiwib25TbGlkZSIsIl9wYWdlIiwid2luZG93Iiwib24iLCJfdGhyb3R0bGUiLCJfdGhpcyIsIiRlbCIsIiRoaWRlIiwiZmluZCIsIiRkcm9wZG93biIsImxlbmd0aCIsImNsb25lIiwiYXBwZW5kVG8iLCJyZW1vdmVDbGFzcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwiJHRhYnMiLCJjbG9zZXN0Iiwib3B0aW9ucyIsIiRzY29wZSIsIiRjb250YWluZXIiLCJjb250YWluZXIiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInNlYXJjaFBhcmFtcyIsInNldCIsImxpbWl0Iiwic29ydCIsImFkZENsYXNzIiwidXBkYXRlQ29udGVudCIsImNvbnRlbnQiLCJodG1sIiwidHlwZSIsIiRibGF6ZSIsImJsYXplIiwiY2hpbGRyZW4iLCJyZWZyZXNoIiwiZ2V0IiwiY2FjaGVLZXkiLCJocmVmIiwiZ2V0UGFnZSIsInRlbXBsYXRlIiwiZXJyIiwiRXJyb3IiLCIkcHJlQWN0aXZlIiwiZmlyc3QiLCJ0cmlnZ2VyIiwidGltZXMiLCJyb3dzIiwiYXV0b1Njcm9sbFN0ZXAiLCJicmFuZElkcyIsIl91bmlxIiwibWFwIiwiYnJhbmRJbWdXaWR0aCIsIk51bWJlciIsImNvbnRleHQiLCJicmFuZF9zaXplIiwic3BsaXQiLCJhamF4IiwiY29udGVudFR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdyYXBoUUxUb2tlbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImJyYW5kcyIsInNpdGUiLCJlZGdlcyIsImVkZ2UiLCJub2RlIiwiZm9yRWFjaCIsImJyYW5kIiwiX2JyYW5kJGRlZmF1bHRJbWFnZSIsImRlZmF1bHRJbWFnZSIsInNyYyIsInNyY3NldCIsImltYWdlU3Jjc2V0IiwiZ2V0U3Jjc2V0IiwidXJsVGVtcGxhdGUiLCIkaW1nIiwiYXR0ciIsIm5hbWUiLCJlbnRpdHlJZCIsInJlc2l6ZSIsIiRjYXJvdXNlbCIsIiRpdGVtcyIsIm5vdCIsIm4iLCJ3IiwiaW5uZXJXaWR0aCIsImkiLCJlcSIsInNjcm9sbExlZnQiLCJvblNjcm9sbCIsImxhc3RTY3JvbGxMZWZ0IiwiaXNTY3JvbGxpbmdSaWdodCIsImZsb29yIiwiJGhlYWRzIiwic2xpY2UiLCJoaWRlIiwidHJ1bmNhdGVkV2lkdGgiLCJzaG93IiwiJHRhaWxzIiwicHJlcGVuZFRvIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsInNjcm9sbCIsImNvbnRhaW5zIiwiYWN0aXZlRWxlbWVudCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJyb3VuZCIsImNsZWFySW50ZXJ2YWwiLCJvYnNlcnZlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwiZGVmYXVsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9