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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDekJBLGVBQWUsbUJBQU8sQ0FBQyx1REFBYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldENhY2hlLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5pcS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vdGhlbWUvcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IGFwaSwgdG9vbHMgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQmxhemVTbGlkZXIgZnJvbSAnYmxhemUtc2xpZGVyJztcbmltcG9ydCB7IHRocm90dGxlLCB1bmlxIH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgcmVxdWVzdENhY2hlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5pbml0Q2F0ZWdvcnlUYWJzKCk7XG4gICAgICAgIHRoaXMuaW5pdEJyYW5kQ2Fyb3VzZWwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGNhdGVnb3J5IHRhYnMgb24gZWFjaCBwcm9kdWN0cyBibG9ja3MgKGJlc3RzZWxsaW5nLCBmZWF0dXJlZCwgbmV3IGFycml2YWxzLCBldGMuKVxuICAgICAqL1xuICAgIGluaXRDYXRlZ29yeVRhYnMoKSB7XG4gICAgICAgICQoJ1tkYXRhLWNhdGVnb3J5LXRhYnNdJykuZWFjaCgoX2ksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRoaWRlID0gJGVsLmZpbmQoJ1tkYXRhLWNhdGVnb3J5LXRhYnMtaXRlbS1oaWRlXScpO1xuICAgICAgICAgICAgY29uc3QgJGRyb3Bkb3duID0gJGVsLmZpbmQoJ1tkYXRhLWNhdGVnb3J5LXRhYnMtZHJvcGRvd25dJyk7XG5cbiAgICAgICAgICAgIGlmICgkZHJvcGRvd24ubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgICRoaWRlLmNsb25lKCkuYXBwZW5kVG8oJGRyb3Bkb3duKS5yZW1vdmVDbGFzcygnZm9yY2UtaGlkZS1kZXNrdG9wJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNhdGVnb3J5LXRhYnMtdXJsXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0ICR0YWJzID0gJGVsLmNsb3Nlc3QoJ1tkYXRhLWNhdGVnb3J5LXRhYnNdJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gJHRhYnMuZGF0YSgnY2F0ZWdvcnlUYWJzJyk7XG4gICAgICAgICAgICBjb25zdCAkc2NvcGUgPSAkdGFicy5jbG9zZXN0KG9wdGlvbnMuc2NvcGUpO1xuICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICRzY29wZS5maW5kKG9wdGlvbnMuY29udGFpbmVyKTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoJGVsLmRhdGEoJ2NhdGVnb3J5VGFic1VybCcpLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcblxuICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2xpbWl0Jywgb3B0aW9ucy5saW1pdCk7XG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc29ydCcsIG9wdGlvbnMuc29ydCk7XG5cbiAgICAgICAgICAgICR0YWJzLmZpbmQoJ1tkYXRhLWNhdGVnb3J5LXRhYnMtdXJsXScpLnJlbW92ZUNsYXNzKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3MoJ19hY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlQ29udGVudCA9IChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92ZUNsYXNzKCdfbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5odG1sKCQoY29udGVudCkuaHRtbCgpKTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICdjYXJvdXNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGJsYXplID0gJHNjb3BlLmZpbmQoJy5ibGF6ZS1zbGlkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRibGF6ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibGF6ZSA9ICRibGF6ZS5kYXRhKCdibGF6ZVNsaWRlckluc3RhbmNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxhemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGF6ZS50b3RhbFNsaWRlcyA9ICRjb250YWluZXIuY2hpbGRyZW4oKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxhemUucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYmxhemUuZGF0YSgnYmxhemVTbGlkZXJJbnN0YW5jZScsIG5ldyBCbGF6ZVNsaWRlcigkYmxhemUuZ2V0KDApLCAkYmxhemUuZGF0YSgnYmxhemVTbGlkZXInKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBgJHt1cmwuaHJlZn18JHtvcHRpb25zLnR5cGV9YDtcblxuICAgICAgICAgICAgaWYgKHJlcXVlc3RDYWNoZVtjYWNoZUtleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlQ29udGVudChyZXF1ZXN0Q2FjaGVbY2FjaGVLZXldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNjb3BlLmFkZENsYXNzKCdfbG9hZGluZycpO1xuXG4gICAgICAgICAgICBhcGkuZ2V0UGFnZSh1cmwuaHJlZiwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBgcGFwYXRoZW1lcy9jYXRlZ29yeS9wcm9kdWN0cy0ke29wdGlvbnMudHlwZX1gLFxuICAgICAgICAgICAgfSwgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92ZUNsYXNzKCdfbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0Q2FjaGVbY2FjaGVLZXldID0gY29udGVudDtcbiAgICAgICAgICAgICAgICB1cGRhdGVDb250ZW50KGNvbnRlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYnJhbmQgY2Fyb3VzZWwgdG8gYXV0by1zY3JvbGwgaG9yaXpvbnRhbGx5IGFuZCBsb2FkIGJyYW5kIGltYWdlc1xuICAgICAqL1xuICAgIGluaXRCcmFuZENhcm91c2VsKCkge1xuICAgICAgICBpZiAoJCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWxdJykubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdGltZXMgPSAzO1xuICAgICAgICBjb25zdCByb3dzID0gMjtcbiAgICAgICAgY29uc3QgYXV0b1Njcm9sbFN0ZXAgPSAyO1xuXG4gICAgICAgIGNvbnN0IGJyYW5kSWRzID0gdW5pcSgkKCdbZGF0YS1icmFuZC1jYXJvdXNlbC1pZF0nKS5nZXQoKS5tYXAoZWwgPT4gJChlbCkuZGF0YSgnYnJhbmRDYXJvdXNlbElkJykpKTtcbiAgICAgICAgY29uc3QgYnJhbmRJbWdXaWR0aCA9IE51bWJlcih0aGlzLmNvbnRleHQuYnJhbmRfc2l6ZS5zcGxpdCgneCcpWzBdKTtcblxuICAgICAgICAvLyBsb2FkIGJyYW5kIGltYWdlc1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSAoJGJyYW5kSWRzOiBbSW50IV0sICR3aWR0aDogSW50ISkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmRzKGVudGl0eUlkczogJGJyYW5kSWRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCh3aWR0aDogJHdpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxUZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJyYW5kSWRzLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYnJhbmRJbWdXaWR0aCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBicmFuZHMgPSByZXNwb25zZS5kYXRhLnNpdGUuYnJhbmRzLmVkZ2VzLm1hcChlZGdlID0+IGVkZ2Uubm9kZSk7XG4gICAgICAgICAgICAgICAgYnJhbmRzLmZvckVhY2goYnJhbmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWJyYW5kLmRlZmF1bHRJbWFnZT8udXJsKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IGJyYW5kLmRlZmF1bHRJbWFnZS51cmw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyY3NldCA9IHRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChicmFuZC5kZWZhdWx0SW1hZ2UudXJsVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkaW1nID0gJCgnPGltZyBzcmM9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3l3QUFBQUFBUUFCQUFBQ0FVd0FPdz09XCIgZGF0YS1zaXplcz1cImF1dG9cIiBjbGFzcz1cImxhenlsb2FkXCI+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyYycsIHNyYylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIHNyY3NldClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhbHQnLCBicmFuZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgJChgW2RhdGEtYnJhbmQtY2Fyb3VzZWwtaWQ9XCIke2JyYW5kLmVudGl0eUlkfVwiXWApXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtYnJhbmQtaW1hZ2UtY29udGFpbmVyXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbCgkaW1nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsXScpLmVhY2goKF9pLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRjYXJvdXNlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkY2Fyb3VzZWwuY2xvc2VzdCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWwtY29udGFpbmVyXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpdGVtcyA9ICRjYXJvdXNlbC5jaGlsZHJlbigpLm5vdCgnLl9jbG9uZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG4gPSAkaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdyA9ICRjYXJvdXNlbC53aWR0aCgpOyB3IDwgJGNvbnRhaW5lci5pbm5lcldpZHRoKCkgKiB0aW1lczsgdyA9ICRjYXJvdXNlbC5pbm5lcldpZHRoKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRjYXJvdXNlbC5jaGlsZHJlbignLl9jbG9uZScpLmxlbmd0aCAlIG47XG4gICAgICAgICAgICAgICAgICAgICRpdGVtcy5lcShpKS5jbG9uZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ19jbG9uZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJGNhcm91c2VsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJGNhcm91c2VsLmNoaWxkcmVuKCcuX2Nsb25lJykuZmluZCgnYScpLmF0dHIoJ3RhYmluZGV4JywgLTEpOyAvLyBkaXNhYmxlIGZvY3VzIG9uIGNsb25lZCBpdGVtcyBmb3IgQURBIGNvbXBsaWFuY2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlc2l6ZSgpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHRocm90dGxlKHJlc2l6ZSwgMzAwKSk7XG5cbiAgICAgICAgLy8gc2V0IGluaXRpYWwgc2Nyb2xsIHBvc2l0aW9uIHRvIGNlbnRlclxuICAgICAgICAkKCdbZGF0YS1icmFuZC1jYXJvdXNlbC1jb250YWluZXJdJykuZWFjaCgoX2ksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCAkY2Fyb3VzZWwgPSAkY29udGFpbmVyLmZpbmQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsXScpO1xuICAgICAgICAgICAgJGNvbnRhaW5lci5zY3JvbGxMZWZ0KCRjYXJvdXNlbC53aWR0aCgpIC8gdGltZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtb3ZlIHRoZSBmaXJzdC9sYXN0IGl0ZW0gdG8gdGhlIGVuZC9iZWdpbm5pbmcgd2hlbiBzY3JvbGxpbmdcbiAgICAgICAgY29uc3Qgb25TY3JvbGwgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgaWYgKCRjb250YWluZXIuZGF0YSgncGF1c2VkJykpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgJGNhcm91c2VsID0gJGNvbnRhaW5lci5maW5kKCdbZGF0YS1icmFuZC1jYXJvdXNlbF0nKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RTY3JvbGxMZWZ0ID0gJGNvbnRhaW5lci5kYXRhKCdsYXN0U2Nyb2xsTGVmdCcpIHx8IDA7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gJGNvbnRhaW5lci5zY3JvbGxMZWZ0KCk7XG4gICAgICAgICAgICBjb25zdCBpc1Njcm9sbGluZ1JpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBsYXN0U2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBNYXRoLmZsb29yKCRjYXJvdXNlbC5jaGlsZHJlbigpLmxlbmd0aCAvIHRpbWVzIC8gcm93cykgKiByb3dzO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSAkY2Fyb3VzZWwud2lkdGgoKTtcblxuICAgICAgICAgICAgaWYgKGlzU2Nyb2xsaW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmRhdGEoJ3Njcm9sbGluZ0RpcmVjdGlvbicsICdyaWdodCcpO1xuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxMZWZ0ID4gd2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRoZWFkcyA9ICRjYXJvdXNlbC5jaGlsZHJlbigpLnNsaWNlKDAsIG4pLmFwcGVuZFRvKCRjYXJvdXNlbCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cnVuY2F0ZWRXaWR0aCA9ICRjYXJvdXNlbC53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICRoZWFkcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICRjb250YWluZXIuc2Nyb2xsTGVmdChzY3JvbGxMZWZ0IC0gd2lkdGggKyB0cnVuY2F0ZWRXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmRhdGEoJ3Njcm9sbGluZ0RpcmVjdGlvbicsICdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbExlZnQgPCB3aWR0aCAvIHRpbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0YWlscyA9ICRjYXJvdXNlbC5jaGlsZHJlbigpLnNsaWNlKC1uKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRydW5jYXRlZFdpZHRoID0gJGNhcm91c2VsLndpZHRoKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHRhaWxzLnByZXBlbmRUbygkY2Fyb3VzZWwpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5zY3JvbGxMZWZ0KHNjcm9sbExlZnQgKyB3aWR0aCAtIHRydW5jYXRlZFdpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRjb250YWluZXIuZGF0YSgnbGFzdFNjcm9sbExlZnQnLCAkY29udGFpbmVyLnNjcm9sbExlZnQoKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gcGF1c2UgYXV0by1zY3JvbGxpbmcgd2hlbiB0b3VjaHN0YXJ0XG4gICAgICAgIGNvbnN0IG9uVG91Y2hTdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICAkY29udGFpbmVyLmRhdGEoJ3BhdXNlZCcsIHRydWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHJlc3VtZSBhdXRvLXNjcm9sbGluZyB3aGVuIHRvdWNoZW5kXG4gICAgICAgIGNvbnN0IG9uVG91Y2hFbmQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdwYXVzZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICBvblNjcm9sbChldmVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2Nyb2xsIHRoZSBjYXJvdXNlbCB0byByaWdodCBvciBsZWZ0XG4gICAgICAgIGNvbnN0IHNjcm9sbCA9ICgkY29udGFpbmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoJGNvbnRhaW5lci5kYXRhKCdwYXVzZWQnKSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCQuY29udGFpbnMoJGNvbnRhaW5lclswXSwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHJldHVybjsgLy8gc3RvcCBpZiB0aGUgY2Fyb3VzZWwgY29udGFpbnMgdGhlIGZvY3VzZWQgZWxlbWVudFxuICAgICAgICAgICAgaWYgKCRjb250YWluZXIuZGF0YSgnc2Nyb2xsaW5nRGlyZWN0aW9uJykgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLnNjcm9sbExlZnQoJGNvbnRhaW5lci5zY3JvbGxMZWZ0KCkgKyBhdXRvU2Nyb2xsU3RlcCk7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci50cmlnZ2VyKCdzY3JvbGwnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJGNvbnRhaW5lci5kYXRhKCdzY3JvbGxpbmdEaXJlY3Rpb24nKSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5zY3JvbGxMZWZ0KCRjb250YWluZXIuc2Nyb2xsTGVmdCgpIC0gYXV0b1Njcm9sbFN0ZXApO1xuICAgICAgICAgICAgICAgICRjb250YWluZXIudHJpZ2dlcignc2Nyb2xsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYXV0by1zY3JvbGwgdGhlIGNhcm91c2VsIG9uIHZpZXdwb3J0IGludGVyc2VjdGlvblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2Nyb2xsKCRjb250YWluZXIpLCBNYXRoLnJvdW5kKDEwMDAgLyA2MCkpO1xuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLmRhdGEoJ2F1dG9TY3JvbGxUaW1lcicsIHRpbWVyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKCRjb250YWluZXIuZGF0YSgnYXV0b1Njcm9sbFRpbWVyJykpO1xuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLmRhdGEoJ2F1dG9TY3JvbGxUaW1lcicsIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1icmFuZC1jYXJvdXNlbC1jb250YWluZXJdJykub24oJ3Njcm9sbCcsIHRocm90dGxlKG9uU2Nyb2xsLCAyMDApKTtcbiAgICAgICAgJCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWwtY29udGFpbmVyXScpLm9uKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgJCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWwtY29udGFpbmVyXScpLm9uKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgICAgICAkKCdbZGF0YS1icmFuZC1jYXJvdXNlbC1jb250YWluZXJdJylcbiAgICAgICAgICAgIC5kYXRhKCdzY3JvbGxpbmdEaXJlY3Rpb24nLCAncmlnaHQnKVxuICAgICAgICAgICAgLmVhY2goKF9pLCBlbCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xuXG4gICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0gYTpub3QoLl9jbG9uZSknKS5vbignZm9jdXMnLCAoZXZlbnQpID0+IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnbmVhcmVzdCcsIGlubGluZTogJ2NlbnRlcicgfSkpO1xuICAgIH1cbn1cbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCBhcyBhbiBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjQuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2FzdEFycmF5KDEpO1xuICogLy8gPT4gWzFdXG4gKlxuICogXy5jYXN0QXJyYXkoeyAnYSc6IDEgfSk7XG4gKiAvLyA9PiBbeyAnYSc6IDEgfV1cbiAqXG4gKiBfLmNhc3RBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBbJ2FiYyddXG4gKlxuICogXy5jYXN0QXJyYXkobnVsbCk7XG4gKiAvLyA9PiBbbnVsbF1cbiAqXG4gKiBfLmNhc3RBcnJheSh1bmRlZmluZWQpO1xuICogLy8gPT4gW3VuZGVmaW5lZF1cbiAqXG4gKiBfLmNhc3RBcnJheSgpO1xuICogLy8gPT4gW11cbiAqXG4gKiB2YXIgYXJyYXkgPSBbMSwgMiwgM107XG4gKiBjb25zb2xlLmxvZyhfLmNhc3RBcnJheShhcnJheSkgPT09IGFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY2FzdEFycmF5KCkge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHZhbHVlID0gYXJndW1lbnRzWzBdO1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdEFycmF5O1xuIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcbiIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgYW4gYXJyYXksIHVzaW5nXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpbiB3aGljaCBvbmx5IHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGVhY2ggZWxlbWVudFxuICogaXMga2VwdC4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXMgZGV0ZXJtaW5lZCBieSB0aGUgb3JkZXIgdGhleSBvY2N1clxuICogaW4gdGhlIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51bmlxKFsyLCAxLCAyXSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqL1xuZnVuY3Rpb24gdW5pcShhcnJheSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlVW5pcShhcnJheSkgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmlxO1xuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiYXBpIiwidG9vbHMiLCJCbGF6ZVNsaWRlciIsInJlcXVlc3RDYWNoZSIsIkhvbWUiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImluaXRDYXRlZ29yeVRhYnMiLCJpbml0QnJhbmRDYXJvdXNlbCIsIiQiLCJlYWNoIiwiX2kiLCJlbCIsIiRlbCIsIiRoaWRlIiwiZmluZCIsIiRkcm9wZG93biIsImxlbmd0aCIsImNsb25lIiwiYXBwZW5kVG8iLCJyZW1vdmVDbGFzcyIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCIkdGFicyIsImNsb3Nlc3QiLCJvcHRpb25zIiwiZGF0YSIsIiRzY29wZSIsInNjb3BlIiwiJGNvbnRhaW5lciIsImNvbnRhaW5lciIsInVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwic2VhcmNoUGFyYW1zIiwic2V0IiwibGltaXQiLCJzb3J0IiwiYWRkQ2xhc3MiLCJ1cGRhdGVDb250ZW50IiwiY29udGVudCIsImh0bWwiLCJ0eXBlIiwiJGJsYXplIiwiYmxhemUiLCJ0b3RhbFNsaWRlcyIsImNoaWxkcmVuIiwicmVmcmVzaCIsImdldCIsImNhY2hlS2V5IiwiaHJlZiIsImdldFBhZ2UiLCJ0ZW1wbGF0ZSIsImVyciIsIkVycm9yIiwidGltZXMiLCJyb3dzIiwiYXV0b1Njcm9sbFN0ZXAiLCJicmFuZElkcyIsIl91bmlxIiwibWFwIiwiYnJhbmRJbWdXaWR0aCIsIk51bWJlciIsImNvbnRleHQiLCJicmFuZF9zaXplIiwic3BsaXQiLCJhamF4IiwiY29udGVudFR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJ3aWR0aCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ3JhcGhRTFRva2VuIiwieGhyRmllbGRzIiwid2l0aENyZWRlbnRpYWxzIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiYnJhbmRzIiwic2l0ZSIsImVkZ2VzIiwiZWRnZSIsIm5vZGUiLCJmb3JFYWNoIiwiYnJhbmQiLCJfYnJhbmQkZGVmYXVsdEltYWdlIiwiZGVmYXVsdEltYWdlIiwic3JjIiwic3Jjc2V0IiwiaW1hZ2VTcmNzZXQiLCJnZXRTcmNzZXQiLCJ1cmxUZW1wbGF0ZSIsIiRpbWciLCJhdHRyIiwibmFtZSIsImVudGl0eUlkIiwicmVzaXplIiwiJGNhcm91c2VsIiwiJGl0ZW1zIiwibm90IiwibiIsInciLCJpbm5lcldpZHRoIiwiaSIsImVxIiwiX3Rocm90dGxlIiwic2Nyb2xsTGVmdCIsIm9uU2Nyb2xsIiwibGFzdFNjcm9sbExlZnQiLCJpc1Njcm9sbGluZ1JpZ2h0IiwiTWF0aCIsImZsb29yIiwiJGhlYWRzIiwic2xpY2UiLCJoaWRlIiwidHJ1bmNhdGVkV2lkdGgiLCJzaG93IiwiJHRhaWxzIiwicHJlcGVuZFRvIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsInNjcm9sbCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwidHJpZ2dlciIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJyb3VuZCIsImNsZWFySW50ZXJ2YWwiLCJvYnNlcnZlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwiZGVmYXVsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9