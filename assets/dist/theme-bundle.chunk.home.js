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
  }

  /**
   * Initialize category tabs on each products blocks (bestselling, featured, new arrivals, etc.)
   */;
  _proto.initCategoryTabs = function initCategoryTabs() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9ob21lLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC91bmlxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi90aGVtZS9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBhcGksIHRvb2xzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgQmxhemVTbGlkZXIgZnJvbSAnYmxhemUtc2xpZGVyJztcclxuaW1wb3J0IHsgdGhyb3R0bGUsIHVuaXEgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgcmVxdWVzdENhY2hlID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLmluaXRDYXRlZ29yeVRhYnMoKTtcclxuICAgICAgICB0aGlzLmluaXRCcmFuZENhcm91c2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIGNhdGVnb3J5IHRhYnMgb24gZWFjaCBwcm9kdWN0cyBibG9ja3MgKGJlc3RzZWxsaW5nLCBmZWF0dXJlZCwgbmV3IGFycml2YWxzLCBldGMuKVxyXG4gICAgICovXHJcbiAgICBpbml0Q2F0ZWdvcnlUYWJzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLWNhdGVnb3J5LXRhYnNdJykuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCAkaGlkZSA9ICRlbC5maW5kKCdbZGF0YS1jYXRlZ29yeS10YWJzLWl0ZW0taGlkZV0nKTtcclxuICAgICAgICAgICAgY29uc3QgJGRyb3Bkb3duID0gJGVsLmZpbmQoJ1tkYXRhLWNhdGVnb3J5LXRhYnMtZHJvcGRvd25dJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJGRyb3Bkb3duLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgJGhpZGUuY2xvbmUoKS5hcHBlbmRUbygkZHJvcGRvd24pLnJlbW92ZUNsYXNzKCdmb3JjZS1oaWRlLWRlc2t0b3AnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY2F0ZWdvcnktdGFicy11cmxdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCAkdGFicyA9ICRlbC5jbG9zZXN0KCdbZGF0YS1jYXRlZ29yeS10YWJzXScpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gJHRhYnMuZGF0YSgnY2F0ZWdvcnlUYWJzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRzY29wZSA9ICR0YWJzLmNsb3Nlc3Qob3B0aW9ucy5zY29wZSk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkc2NvcGUuZmluZChvcHRpb25zLmNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoJGVsLmRhdGEoJ2NhdGVnb3J5VGFic1VybCcpLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcclxuXHJcbiAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdsaW1pdCcsIG9wdGlvbnMubGltaXQpO1xyXG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc29ydCcsIG9wdGlvbnMuc29ydCk7XHJcblxyXG4gICAgICAgICAgICAkdGFicy5maW5kKCdbZGF0YS1jYXRlZ29yeS10YWJzLXVybF0nKS5yZW1vdmVDbGFzcygnX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3MoJ19hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUNvbnRlbnQgPSAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92ZUNsYXNzKCdfbG9hZGluZycpO1xyXG5cclxuICAgICAgICAgICAgICAgICRjb250YWluZXIuaHRtbCgkKGNvbnRlbnQpLmh0bWwoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2Nhcm91c2VsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRibGF6ZSA9ICRzY29wZS5maW5kKCcuYmxhemUtc2xpZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRibGF6ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsYXplID0gJGJsYXplLmRhdGEoJ2JsYXplU2xpZGVySW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsYXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGF6ZS50b3RhbFNsaWRlcyA9ICRjb250YWluZXIuY2hpbGRyZW4oKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGF6ZS5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYmxhemUuZGF0YSgnYmxhemVTbGlkZXJJbnN0YW5jZScsIG5ldyBCbGF6ZVNsaWRlcigkYmxhemUuZ2V0KDApLCAkYmxhemUuZGF0YSgnYmxhemVTbGlkZXInKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBgJHt1cmwuaHJlZn18JHtvcHRpb25zLnR5cGV9YDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Q2FjaGVbY2FjaGVLZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlQ29udGVudChyZXF1ZXN0Q2FjaGVbY2FjaGVLZXldKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmFkZENsYXNzKCdfbG9hZGluZycpO1xyXG5cclxuICAgICAgICAgICAgYXBpLmdldFBhZ2UodXJsLmhyZWYsIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBgcGFwYXRoZW1lcy9jYXRlZ29yeS9wcm9kdWN0cy0ke29wdGlvbnMudHlwZX1gLFxyXG4gICAgICAgICAgICB9LCAoZXJyLCBjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92ZUNsYXNzKCdfbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3RDYWNoZVtjYWNoZUtleV0gPSBjb250ZW50O1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ29udGVudChjb250ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIElmIGFueSB0YWIgd2FzIHByb2dyYW1tYXRpY2FsbHkgbWFya2VkIGFzIGFjdGl2ZSBiZWZvcmUgaGFuZGxlcnMgd2VyZSBhdHRhY2hlZCxcclxuICAgICAgICAvLyB0cmlnZ2VyIGl0cyBjbGljayBzbyB0aGUgcmVsYXRlZCBwcm9kdWN0cyBhcmUgbG9hZGVkLlxyXG4gICAgICAgICQoJ1tkYXRhLWNhdGVnb3J5LXRhYnNdJykuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YWJzID0gJChlbCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcmVBY3RpdmUgPSAkdGFicy5maW5kKCdbZGF0YS1jYXRlZ29yeS10YWJzLXVybF0uX2FjdGl2ZScpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGlmICgkcHJlQWN0aXZlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJHByZUFjdGl2ZS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIGJyYW5kIGNhcm91c2VsIHRvIGF1dG8tc2Nyb2xsIGhvcml6b250YWxseSBhbmQgbG9hZCBicmFuZCBpbWFnZXNcclxuICAgICAqL1xyXG4gICAgaW5pdEJyYW5kQ2Fyb3VzZWwoKSB7XHJcbiAgICAgICAgaWYgKCQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsXScpLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lcyA9IDM7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IDI7XHJcbiAgICAgICAgY29uc3QgYXV0b1Njcm9sbFN0ZXAgPSAyO1xyXG5cclxuICAgICAgICBjb25zdCBicmFuZElkcyA9IHVuaXEoJCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWwtaWRdJykuZ2V0KCkubWFwKGVsID0+ICQoZWwpLmRhdGEoJ2JyYW5kQ2Fyb3VzZWxJZCcpKSk7XHJcbiAgICAgICAgY29uc3QgYnJhbmRJbWdXaWR0aCA9IE51bWJlcih0aGlzLmNvbnRleHQuYnJhbmRfc2l6ZS5zcGxpdCgneCcpWzBdKTtcclxuXHJcbiAgICAgICAgLy8gbG9hZCBicmFuZCBpbWFnZXNcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeSAoJGJyYW5kSWRzOiBbSW50IV0sICR3aWR0aDogSW50ISkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kcyhlbnRpdHlJZHM6ICRicmFuZElkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwod2lkdGg6ICR3aWR0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxUZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyYW5kSWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBicmFuZEltZ1dpZHRoLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSByZXNwb25zZS5kYXRhLnNpdGUuYnJhbmRzLmVkZ2VzLm1hcChlZGdlID0+IGVkZ2Uubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmFuZHMuZm9yRWFjaChicmFuZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFicmFuZC5kZWZhdWx0SW1hZ2U/LnVybCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGJyYW5kLmRlZmF1bHRJbWFnZS51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3Jjc2V0ID0gdG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KGJyYW5kLmRlZmF1bHRJbWFnZS51cmxUZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGltZyA9ICQoJzxpbWcgc3JjPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95d0FBQUFBQVFBQkFBQUNBVXdBT3c9PVwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgY2xhc3M9XCJsYXp5bG9hZFwiPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyYycsIHNyYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0Jywgc3Jjc2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYWx0JywgYnJhbmQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChgW2RhdGEtYnJhbmQtY2Fyb3VzZWwtaWQ9XCIke2JyYW5kLmVudGl0eUlkfVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1icmFuZC1pbWFnZS1jb250YWluZXJdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoJGltZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1icmFuZC1jYXJvdXNlbF0nKS5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjYXJvdXNlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICRjYXJvdXNlbC5jbG9zZXN0KCdbZGF0YS1icmFuZC1jYXJvdXNlbC1jb250YWluZXJdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkaXRlbXMgPSAkY2Fyb3VzZWwuY2hpbGRyZW4oKS5ub3QoJy5fY2xvbmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSAkaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHcgPSAkY2Fyb3VzZWwud2lkdGgoKTsgdyA8ICRjb250YWluZXIuaW5uZXJXaWR0aCgpICogdGltZXM7IHcgPSAkY2Fyb3VzZWwuaW5uZXJXaWR0aCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRjYXJvdXNlbC5jaGlsZHJlbignLl9jbG9uZScpLmxlbmd0aCAlIG47XHJcbiAgICAgICAgICAgICAgICAgICAgJGl0ZW1zLmVxKGkpLmNsb25lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdfY2xvbmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJGNhcm91c2VsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRjYXJvdXNlbC5jaGlsZHJlbignLl9jbG9uZScpLmZpbmQoJ2EnKS5hdHRyKCd0YWJpbmRleCcsIC0xKTsgLy8gZGlzYWJsZSBmb2N1cyBvbiBjbG9uZWQgaXRlbXMgZm9yIEFEQSBjb21wbGlhbmNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlc2l6ZSgpO1xyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgdGhyb3R0bGUocmVzaXplLCAzMDApKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGluaXRpYWwgc2Nyb2xsIHBvc2l0aW9uIHRvIGNlbnRlclxyXG4gICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0nKS5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCAkY2Fyb3VzZWwgPSAkY29udGFpbmVyLmZpbmQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsXScpO1xyXG4gICAgICAgICAgICAkY29udGFpbmVyLnNjcm9sbExlZnQoJGNhcm91c2VsLndpZHRoKCkgLyB0aW1lcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgdGhlIGZpcnN0L2xhc3QgaXRlbSB0byB0aGUgZW5kL2JlZ2lubmluZyB3aGVuIHNjcm9sbGluZ1xyXG4gICAgICAgIGNvbnN0IG9uU2Nyb2xsID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoJGNvbnRhaW5lci5kYXRhKCdwYXVzZWQnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGNhcm91c2VsID0gJGNvbnRhaW5lci5maW5kKCdbZGF0YS1icmFuZC1jYXJvdXNlbF0nKTtcclxuICAgICAgICAgICAgY29uc3QgbGFzdFNjcm9sbExlZnQgPSAkY29udGFpbmVyLmRhdGEoJ2xhc3RTY3JvbGxMZWZ0JykgfHwgMDtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9ICRjb250YWluZXIuc2Nyb2xsTGVmdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpc1Njcm9sbGluZ1JpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBsYXN0U2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgY29uc3QgbiA9IE1hdGguZmxvb3IoJGNhcm91c2VsLmNoaWxkcmVuKCkubGVuZ3RoIC8gdGltZXMgLyByb3dzKSAqIHJvd3M7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gJGNhcm91c2VsLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNTY3JvbGxpbmdSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdzY3JvbGxpbmdEaXJlY3Rpb24nLCAncmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxMZWZ0ID4gd2lkdGggLyAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGhlYWRzID0gJGNhcm91c2VsLmNoaWxkcmVuKCkuc2xpY2UoMCwgbikuYXBwZW5kVG8oJGNhcm91c2VsKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJ1bmNhdGVkV2lkdGggPSAkY2Fyb3VzZWwud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGhlYWRzLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLnNjcm9sbExlZnQoc2Nyb2xsTGVmdCAtIHdpZHRoICsgdHJ1bmNhdGVkV2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdzY3JvbGxpbmdEaXJlY3Rpb24nLCAnbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbExlZnQgPCB3aWR0aCAvIHRpbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRhaWxzID0gJGNhcm91c2VsLmNoaWxkcmVuKCkuc2xpY2UoLW4pLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cnVuY2F0ZWRXaWR0aCA9ICRjYXJvdXNlbC53aWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdGFpbHMucHJlcGVuZFRvKCRjYXJvdXNlbCkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjb250YWluZXIuc2Nyb2xsTGVmdChzY3JvbGxMZWZ0ICsgd2lkdGggLSB0cnVuY2F0ZWRXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRjb250YWluZXIuZGF0YSgnbGFzdFNjcm9sbExlZnQnLCAkY29udGFpbmVyLnNjcm9sbExlZnQoKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gcGF1c2UgYXV0by1zY3JvbGxpbmcgd2hlbiB0b3VjaHN0YXJ0XHJcbiAgICAgICAgY29uc3Qgb25Ub3VjaFN0YXJ0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAkY29udGFpbmVyLmRhdGEoJ3BhdXNlZCcsIHRydWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHJlc3VtZSBhdXRvLXNjcm9sbGluZyB3aGVuIHRvdWNoZW5kXHJcbiAgICAgICAgY29uc3Qgb25Ub3VjaEVuZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdwYXVzZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIG9uU2Nyb2xsKGV2ZW50KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBzY3JvbGwgdGhlIGNhcm91c2VsIHRvIHJpZ2h0IG9yIGxlZnRcclxuICAgICAgICBjb25zdCBzY3JvbGwgPSAoJGNvbnRhaW5lcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJGNvbnRhaW5lci5kYXRhKCdwYXVzZWQnKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoJC5jb250YWlucygkY29udGFpbmVyWzBdLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgcmV0dXJuOyAvLyBzdG9wIGlmIHRoZSBjYXJvdXNlbCBjb250YWlucyB0aGUgZm9jdXNlZCBlbGVtZW50XHJcbiAgICAgICAgICAgIGlmICgkY29udGFpbmVyLmRhdGEoJ3Njcm9sbGluZ0RpcmVjdGlvbicpID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLnNjcm9sbExlZnQoJGNvbnRhaW5lci5zY3JvbGxMZWZ0KCkgKyBhdXRvU2Nyb2xsU3RlcCk7XHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLnRyaWdnZXIoJ3Njcm9sbCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCRjb250YWluZXIuZGF0YSgnc2Nyb2xsaW5nRGlyZWN0aW9uJykgPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5zY3JvbGxMZWZ0KCRjb250YWluZXIuc2Nyb2xsTGVmdCgpIC0gYXV0b1Njcm9sbFN0ZXApO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci50cmlnZ2VyKCdzY3JvbGwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGF1dG8tc2Nyb2xsIHRoZSBjYXJvdXNlbCBvbiB2aWV3cG9ydCBpbnRlcnNlY3Rpb25cclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJChlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiBzY3JvbGwoJGNvbnRhaW5lciksIE1hdGgucm91bmQoMTAwMCAvIDYwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdhdXRvU2Nyb2xsVGltZXInLCB0aW1lcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJGNvbnRhaW5lci5kYXRhKCdhdXRvU2Nyb2xsVGltZXInKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdhdXRvU2Nyb2xsVGltZXInLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0nKS5vbignc2Nyb2xsJywgdGhyb3R0bGUob25TY3JvbGwsIDIwMCkpO1xyXG4gICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0nKS5vbigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XHJcbiAgICAgICAgJCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWwtY29udGFpbmVyXScpLm9uKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xyXG4gICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0nKVxyXG4gICAgICAgICAgICAuZGF0YSgnc2Nyb2xsaW5nRGlyZWN0aW9uJywgJ3JpZ2h0JylcclxuICAgICAgICAgICAgLmVhY2goKF9pLCBlbCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1icmFuZC1jYXJvdXNlbC1jb250YWluZXJdIGE6bm90KC5fY2xvbmUpJykub24oJ2ZvY3VzJywgKGV2ZW50KSA9PiBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ25lYXJlc3QnLCBpbmxpbmU6ICdjZW50ZXInIH0pKTtcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xyXG5cclxuLyoqXHJcbiAqIENhc3RzIGB2YWx1ZWAgYXMgYW4gYXJyYXkgaWYgaXQncyBub3Qgb25lLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSA0LjQuMFxyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgYXJyYXkuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIF8uY2FzdEFycmF5KDEpO1xyXG4gKiAvLyA9PiBbMV1cclxuICpcclxuICogXy5jYXN0QXJyYXkoeyAnYSc6IDEgfSk7XHJcbiAqIC8vID0+IFt7ICdhJzogMSB9XVxyXG4gKlxyXG4gKiBfLmNhc3RBcnJheSgnYWJjJyk7XHJcbiAqIC8vID0+IFsnYWJjJ11cclxuICpcclxuICogXy5jYXN0QXJyYXkobnVsbCk7XHJcbiAqIC8vID0+IFtudWxsXVxyXG4gKlxyXG4gKiBfLmNhc3RBcnJheSh1bmRlZmluZWQpO1xyXG4gKiAvLyA9PiBbdW5kZWZpbmVkXVxyXG4gKlxyXG4gKiBfLmNhc3RBcnJheSgpO1xyXG4gKiAvLyA9PiBbXVxyXG4gKlxyXG4gKiB2YXIgYXJyYXkgPSBbMSwgMiwgM107XHJcbiAqIGNvbnNvbGUubG9nKF8uY2FzdEFycmF5KGFycmF5KSA9PT0gYXJyYXkpO1xyXG4gKiAvLyA9PiB0cnVlXHJcbiAqL1xyXG5mdW5jdGlvbiBjYXN0QXJyYXkoKSB7XHJcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIHZhciB2YWx1ZSA9IGFyZ3VtZW50c1swXTtcclxuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2FzdEFycmF5O1xyXG4iLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xyXG5cclxuLyoqXHJcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXHJcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXHJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cclxuICovXHJcbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XHJcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xyXG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcclxuIiwiLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXHJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxyXG4gKi9cclxuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XHJcbiAgdmFyIGluZGV4ID0gLTEsXHJcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xyXG5cclxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcclxuIiwiLyoqXHJcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcclxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cclxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XHJcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcclxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG5cclxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gLTE7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcclxuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcclxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXHJcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXHJcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXHJcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcclxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XHJcblxyXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cclxudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XHJcblxyXG4vKipcclxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXHJcbiAqL1xyXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcclxuICB2YXIgaW5kZXggPSAtMSxcclxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxyXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXHJcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcclxuICAgICAgcmVzdWx0ID0gW10sXHJcbiAgICAgIHNlZW4gPSByZXN1bHQ7XHJcblxyXG4gIGlmIChjb21wYXJhdG9yKSB7XHJcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xyXG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcclxuICB9XHJcbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcclxuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xyXG4gICAgaWYgKHNldCkge1xyXG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xyXG4gICAgfVxyXG4gICAgaXNDb21tb24gPSBmYWxzZTtcclxuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XHJcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xyXG4gIH1cclxuICBvdXRlcjpcclxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxyXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcclxuXHJcbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcclxuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcclxuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xyXG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcclxuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xyXG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVyYXRlZSkge1xyXG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xyXG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XHJcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XHJcbiIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XHJcblxyXG4vKipcclxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cclxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxyXG4gKi9cclxuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcclxuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XHJcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xyXG4iLCIvKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAc2luY2UgMi4zLjBcclxuICogQGNhdGVnb3J5IFV0aWxcclxuICogQGV4YW1wbGVcclxuICpcclxuICogXy50aW1lcygyLCBfLm5vb3ApO1xyXG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXHJcbiAqL1xyXG5mdW5jdGlvbiBub29wKCkge1xyXG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcclxuIiwiLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQG1lbWJlck9mIF9cclxuICogQHNpbmNlIDQuMTMuMFxyXG4gKiBAY2F0ZWdvcnkgVXRpbFxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xyXG4gKiAvLyA9PiBbW10sIFtdXVxyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XHJcbiAgcmV0dXJuIFtdO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcclxuIiwiLyoqXHJcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQG1lbWJlck9mIF9cclxuICogQHNpbmNlIDAuMS4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqXHJcbiAqIF8uaXNBcnJheSgnYWJjJyk7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqXHJcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKi9cclxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xyXG4iLCJ2YXIgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIGFuIGFycmF5LCB1c2luZ1xyXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxyXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGluIHdoaWNoIG9ubHkgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgZWFjaCBlbGVtZW50XHJcbiAqIGlzIGtlcHQuIFRoZSBvcmRlciBvZiByZXN1bHQgdmFsdWVzIGlzIGRldGVybWluZWQgYnkgdGhlIG9yZGVyIHRoZXkgb2NjdXJcclxuICogaW4gdGhlIGFycmF5LlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBAY2F0ZWdvcnkgQXJyYXlcclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBfLnVuaXEoWzIsIDEsIDJdKTtcclxuICogLy8gPT4gWzIsIDFdXHJcbiAqL1xyXG5mdW5jdGlvbiB1bmlxKGFycmF5KSB7XHJcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVVuaXEoYXJyYXkpIDogW107XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdW5pcTtcclxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiYXBpIiwidG9vbHMiLCJCbGF6ZVNsaWRlciIsInJlcXVlc3RDYWNoZSIsIkhvbWUiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImluaXRDYXRlZ29yeVRhYnMiLCJpbml0QnJhbmRDYXJvdXNlbCIsIiQiLCJlYWNoIiwiX2kiLCJlbCIsIiRlbCIsIiRoaWRlIiwiZmluZCIsIiRkcm9wZG93biIsImxlbmd0aCIsImNsb25lIiwiYXBwZW5kVG8iLCJyZW1vdmVDbGFzcyIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCIkdGFicyIsImNsb3Nlc3QiLCJvcHRpb25zIiwiZGF0YSIsIiRzY29wZSIsInNjb3BlIiwiJGNvbnRhaW5lciIsImNvbnRhaW5lciIsInVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwic2VhcmNoUGFyYW1zIiwic2V0IiwibGltaXQiLCJzb3J0IiwiYWRkQ2xhc3MiLCJ1cGRhdGVDb250ZW50IiwiY29udGVudCIsImh0bWwiLCJ0eXBlIiwiJGJsYXplIiwiYmxhemUiLCJ0b3RhbFNsaWRlcyIsImNoaWxkcmVuIiwicmVmcmVzaCIsImdldCIsImNhY2hlS2V5IiwiaHJlZiIsImdldFBhZ2UiLCJ0ZW1wbGF0ZSIsImVyciIsIkVycm9yIiwiJHByZUFjdGl2ZSIsImZpcnN0IiwidHJpZ2dlciIsInRpbWVzIiwicm93cyIsImF1dG9TY3JvbGxTdGVwIiwiYnJhbmRJZHMiLCJfdW5pcSIsIm1hcCIsImJyYW5kSW1nV2lkdGgiLCJOdW1iZXIiLCJjb250ZXh0IiwiYnJhbmRfc2l6ZSIsInNwbGl0IiwiYWpheCIsImNvbnRlbnRUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwid2lkdGgiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdyYXBoUUxUb2tlbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImJyYW5kcyIsInNpdGUiLCJlZGdlcyIsImVkZ2UiLCJub2RlIiwiZm9yRWFjaCIsImJyYW5kIiwiX2JyYW5kJGRlZmF1bHRJbWFnZSIsImRlZmF1bHRJbWFnZSIsInNyYyIsInNyY3NldCIsImltYWdlU3Jjc2V0IiwiZ2V0U3Jjc2V0IiwidXJsVGVtcGxhdGUiLCIkaW1nIiwiYXR0ciIsIm5hbWUiLCJlbnRpdHlJZCIsInJlc2l6ZSIsIiRjYXJvdXNlbCIsIiRpdGVtcyIsIm5vdCIsIm4iLCJ3IiwiaW5uZXJXaWR0aCIsImkiLCJlcSIsIl90aHJvdHRsZSIsInNjcm9sbExlZnQiLCJvblNjcm9sbCIsImxhc3RTY3JvbGxMZWZ0IiwiaXNTY3JvbGxpbmdSaWdodCIsIk1hdGgiLCJmbG9vciIsIiRoZWFkcyIsInNsaWNlIiwiaGlkZSIsInRydW5jYXRlZFdpZHRoIiwic2hvdyIsIiR0YWlscyIsInByZXBlbmRUbyIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJzY3JvbGwiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJyb3VuZCIsImNsZWFySW50ZXJ2YWwiLCJvYnNlcnZlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwiZGVmYXVsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9