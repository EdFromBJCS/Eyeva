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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN2RUEsa0JBQWtCLG1CQUFPLENBQUMsNkRBQWdCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDekJBLGVBQWUsbUJBQU8sQ0FBQyx1REFBYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldENhY2hlLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5pcS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vdGhlbWUvcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IGFwaSwgdG9vbHMgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQmxhemVTbGlkZXIgZnJvbSAnYmxhemUtc2xpZGVyJztcbmltcG9ydCB7IHRocm90dGxlLCB1bmlxIH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgcmVxdWVzdENhY2hlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5pbml0Q2F0ZWdvcnlUYWJzKCk7XG4gICAgICAgIHRoaXMuaW5pdEJyYW5kQ2Fyb3VzZWwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGNhdGVnb3J5IHRhYnMgb24gZWFjaCBwcm9kdWN0cyBibG9ja3MgKGJlc3RzZWxsaW5nLCBmZWF0dXJlZCwgbmV3IGFycml2YWxzLCBldGMuKVxuICAgICAqL1xuICAgIGluaXRDYXRlZ29yeVRhYnMoKSB7XG4gICAgICAgICQoJ1tkYXRhLWNhdGVnb3J5LXRhYnNdJykuZWFjaCgoX2ksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRoaWRlID0gJGVsLmZpbmQoJ1tkYXRhLWNhdGVnb3J5LXRhYnMtaXRlbS1oaWRlXScpO1xuICAgICAgICAgICAgY29uc3QgJGRyb3Bkb3duID0gJGVsLmZpbmQoJ1tkYXRhLWNhdGVnb3J5LXRhYnMtZHJvcGRvd25dJyk7XG5cbiAgICAgICAgICAgIGlmICgkZHJvcGRvd24ubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgICRoaWRlLmNsb25lKCkuYXBwZW5kVG8oJGRyb3Bkb3duKS5yZW1vdmVDbGFzcygnZm9yY2UtaGlkZS1kZXNrdG9wJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNhdGVnb3J5LXRhYnMtdXJsXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0ICR0YWJzID0gJGVsLmNsb3Nlc3QoJ1tkYXRhLWNhdGVnb3J5LXRhYnNdJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gJHRhYnMuZGF0YSgnY2F0ZWdvcnlUYWJzJyk7XG4gICAgICAgICAgICBjb25zdCAkc2NvcGUgPSAkdGFicy5jbG9zZXN0KG9wdGlvbnMuc2NvcGUpO1xuICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICRzY29wZS5maW5kKG9wdGlvbnMuY29udGFpbmVyKTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoJGVsLmRhdGEoJ2NhdGVnb3J5VGFic1VybCcpLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcblxuICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2xpbWl0Jywgb3B0aW9ucy5saW1pdCk7XG4gICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnc29ydCcsIG9wdGlvbnMuc29ydCk7XG5cbiAgICAgICAgICAgICR0YWJzLmZpbmQoJ1tkYXRhLWNhdGVnb3J5LXRhYnMtdXJsXScpLnJlbW92ZUNsYXNzKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3MoJ19hY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlQ29udGVudCA9IChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92ZUNsYXNzKCdfbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5odG1sKCQoY29udGVudCkuaHRtbCgpKTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICdjYXJvdXNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGJsYXplID0gJHNjb3BlLmZpbmQoJy5ibGF6ZS1zbGlkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRibGF6ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibGF6ZSA9ICRibGF6ZS5kYXRhKCdibGF6ZVNsaWRlckluc3RhbmNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxhemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGF6ZS50b3RhbFNsaWRlcyA9ICRjb250YWluZXIuY2hpbGRyZW4oKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxhemUucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYmxhemUuZGF0YSgnYmxhemVTbGlkZXJJbnN0YW5jZScsIG5ldyBCbGF6ZVNsaWRlcigkYmxhemUuZ2V0KDApLCAkYmxhemUuZGF0YSgnYmxhemVTbGlkZXInKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBgJHt1cmwuaHJlZn18JHtvcHRpb25zLnR5cGV9YDtcblxuICAgICAgICAgICAgaWYgKHJlcXVlc3RDYWNoZVtjYWNoZUtleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlQ29udGVudChyZXF1ZXN0Q2FjaGVbY2FjaGVLZXldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNjb3BlLmFkZENsYXNzKCdfbG9hZGluZycpO1xuXG4gICAgICAgICAgICBhcGkuZ2V0UGFnZSh1cmwuaHJlZiwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBgcGFwYXRoZW1lcy9jYXRlZ29yeS9wcm9kdWN0cy0ke29wdGlvbnMudHlwZX1gLFxuICAgICAgICAgICAgfSwgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92ZUNsYXNzKCdfbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0Q2FjaGVbY2FjaGVLZXldID0gY29udGVudDtcbiAgICAgICAgICAgICAgICB1cGRhdGVDb250ZW50KGNvbnRlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIElmIGFueSB0YWIgd2FzIHByb2dyYW1tYXRpY2FsbHkgbWFya2VkIGFzIGFjdGl2ZSBiZWZvcmUgaGFuZGxlcnMgd2VyZSBhdHRhY2hlZCxcbiAgICAgICAgLy8gdHJpZ2dlciBpdHMgY2xpY2sgc28gdGhlIHJlbGF0ZWQgcHJvZHVjdHMgYXJlIGxvYWRlZC5cbiAgICAgICAgJCgnW2RhdGEtY2F0ZWdvcnktdGFic10nKS5lYWNoKChfaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YWJzID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCAkcHJlQWN0aXZlID0gJHRhYnMuZmluZCgnW2RhdGEtY2F0ZWdvcnktdGFicy11cmxdLl9hY3RpdmUnKS5maXJzdCgpO1xuICAgICAgICAgICAgaWYgKCRwcmVBY3RpdmUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJHByZUFjdGl2ZS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGJyYW5kIGNhcm91c2VsIHRvIGF1dG8tc2Nyb2xsIGhvcml6b250YWxseSBhbmQgbG9hZCBicmFuZCBpbWFnZXNcbiAgICAgKi9cbiAgICBpbml0QnJhbmRDYXJvdXNlbCgpIHtcbiAgICAgICAgaWYgKCQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsXScpLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHRpbWVzID0gMztcbiAgICAgICAgY29uc3Qgcm93cyA9IDI7XG4gICAgICAgIGNvbnN0IGF1dG9TY3JvbGxTdGVwID0gMjtcblxuICAgICAgICBjb25zdCBicmFuZElkcyA9IHVuaXEoJCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWwtaWRdJykuZ2V0KCkubWFwKGVsID0+ICQoZWwpLmRhdGEoJ2JyYW5kQ2Fyb3VzZWxJZCcpKSk7XG4gICAgICAgIGNvbnN0IGJyYW5kSW1nV2lkdGggPSBOdW1iZXIodGhpcy5jb250ZXh0LmJyYW5kX3NpemUuc3BsaXQoJ3gnKVswXSk7XG5cbiAgICAgICAgLy8gbG9hZCBicmFuZCBpbWFnZXNcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgKCRicmFuZElkczogW0ludCFdLCAkd2lkdGg6IEludCEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kcyhlbnRpdHlJZHM6ICRicmFuZElkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwod2lkdGg6ICR3aWR0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsVGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICBicmFuZElkcyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGJyYW5kSW1nV2lkdGgsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY29udGV4dC5ncmFwaFFMVG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnJhbmRzID0gcmVzcG9uc2UuZGF0YS5zaXRlLmJyYW5kcy5lZGdlcy5tYXAoZWRnZSA9PiBlZGdlLm5vZGUpO1xuICAgICAgICAgICAgICAgIGJyYW5kcy5mb3JFYWNoKGJyYW5kID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFicmFuZC5kZWZhdWx0SW1hZ2U/LnVybCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBicmFuZC5kZWZhdWx0SW1hZ2UudXJsO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcmNzZXQgPSB0b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoYnJhbmQuZGVmYXVsdEltYWdlLnVybFRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGltZyA9ICQoJzxpbWcgc3JjPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95d0FBQUFBQVFBQkFBQUNBVXdBT3c9PVwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgY2xhc3M9XCJsYXp5bG9hZFwiPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmMnLCBzcmMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmNzZXQnLCBzcmNzZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYWx0JywgYnJhbmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICQoYFtkYXRhLWJyYW5kLWNhcm91c2VsLWlkPVwiJHticmFuZC5lbnRpdHlJZH1cIl1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLWJyYW5kLWltYWdlLWNvbnRhaW5lcl0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoJGltZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICAkKCdbZGF0YS1icmFuZC1jYXJvdXNlbF0nKS5lYWNoKChfaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkY2Fyb3VzZWwgPSAkKGVsKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJGNhcm91c2VsLmNsb3Nlc3QoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkaXRlbXMgPSAkY2Fyb3VzZWwuY2hpbGRyZW4oKS5ub3QoJy5fY2xvbmUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuID0gJGl0ZW1zLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IHcgPSAkY2Fyb3VzZWwud2lkdGgoKTsgdyA8ICRjb250YWluZXIuaW5uZXJXaWR0aCgpICogdGltZXM7IHcgPSAkY2Fyb3VzZWwuaW5uZXJXaWR0aCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSAkY2Fyb3VzZWwuY2hpbGRyZW4oJy5fY2xvbmUnKS5sZW5ndGggJSBuO1xuICAgICAgICAgICAgICAgICAgICAkaXRlbXMuZXEoaSkuY2xvbmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdfY2xvbmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKCRjYXJvdXNlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRjYXJvdXNlbC5jaGlsZHJlbignLl9jbG9uZScpLmZpbmQoJ2EnKS5hdHRyKCd0YWJpbmRleCcsIC0xKTsgLy8gZGlzYWJsZSBmb2N1cyBvbiBjbG9uZWQgaXRlbXMgZm9yIEFEQSBjb21wbGlhbmNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXNpemUoKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCB0aHJvdHRsZShyZXNpemUsIDMwMCkpO1xuXG4gICAgICAgIC8vIHNldCBpbml0aWFsIHNjcm9sbCBwb3NpdGlvbiB0byBjZW50ZXJcbiAgICAgICAgJCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWwtY29udGFpbmVyXScpLmVhY2goKF9pLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgJGNhcm91c2VsID0gJGNvbnRhaW5lci5maW5kKCdbZGF0YS1icmFuZC1jYXJvdXNlbF0nKTtcbiAgICAgICAgICAgICRjb250YWluZXIuc2Nyb2xsTGVmdCgkY2Fyb3VzZWwud2lkdGgoKSAvIHRpbWVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbW92ZSB0aGUgZmlyc3QvbGFzdCBpdGVtIHRvIHRoZSBlbmQvYmVnaW5uaW5nIHdoZW4gc2Nyb2xsaW5nXG4gICAgICAgIGNvbnN0IG9uU2Nyb2xsID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGlmICgkY29udGFpbmVyLmRhdGEoJ3BhdXNlZCcpKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0ICRjYXJvdXNlbCA9ICRjb250YWluZXIuZmluZCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWxdJyk7XG4gICAgICAgICAgICBjb25zdCBsYXN0U2Nyb2xsTGVmdCA9ICRjb250YWluZXIuZGF0YSgnbGFzdFNjcm9sbExlZnQnKSB8fCAwO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9ICRjb250YWluZXIuc2Nyb2xsTGVmdCgpO1xuICAgICAgICAgICAgY29uc3QgaXNTY3JvbGxpbmdSaWdodCA9IHNjcm9sbExlZnQgPj0gbGFzdFNjcm9sbExlZnQ7XG4gICAgICAgICAgICBjb25zdCBuID0gTWF0aC5mbG9vcigkY2Fyb3VzZWwuY2hpbGRyZW4oKS5sZW5ndGggLyB0aW1lcyAvIHJvd3MpICogcm93cztcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gJGNhcm91c2VsLndpZHRoKCk7XG5cbiAgICAgICAgICAgIGlmIChpc1Njcm9sbGluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdzY3JvbGxpbmdEaXJlY3Rpb24nLCAncmlnaHQnKTtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsTGVmdCA+IHdpZHRoIC8gMikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkaGVhZHMgPSAkY2Fyb3VzZWwuY2hpbGRyZW4oKS5zbGljZSgwLCBuKS5hcHBlbmRUbygkY2Fyb3VzZWwpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJ1bmNhdGVkV2lkdGggPSAkY2Fyb3VzZWwud2lkdGgoKTtcblxuICAgICAgICAgICAgICAgICAgICAkaGVhZHMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAkY29udGFpbmVyLnNjcm9sbExlZnQoc2Nyb2xsTGVmdCAtIHdpZHRoICsgdHJ1bmNhdGVkV2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdzY3JvbGxpbmdEaXJlY3Rpb24nLCAnbGVmdCcpO1xuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxMZWZ0IDwgd2lkdGggLyB0aW1lcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdGFpbHMgPSAkY2Fyb3VzZWwuY2hpbGRyZW4oKS5zbGljZSgtbikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cnVuY2F0ZWRXaWR0aCA9ICRjYXJvdXNlbC53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICR0YWlscy5wcmVwZW5kVG8oJGNhcm91c2VsKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICRjb250YWluZXIuc2Nyb2xsTGVmdChzY3JvbGxMZWZ0ICsgd2lkdGggLSB0cnVuY2F0ZWRXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkY29udGFpbmVyLmRhdGEoJ2xhc3RTY3JvbGxMZWZ0JywgJGNvbnRhaW5lci5zY3JvbGxMZWZ0KCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHBhdXNlIGF1dG8tc2Nyb2xsaW5nIHdoZW4gdG91Y2hzdGFydFxuICAgICAgICBjb25zdCBvblRvdWNoU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjb250YWluZXIgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdwYXVzZWQnLCB0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyByZXN1bWUgYXV0by1zY3JvbGxpbmcgd2hlbiB0b3VjaGVuZFxuICAgICAgICBjb25zdCBvblRvdWNoRW5kID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICRjb250YWluZXIuZGF0YSgncGF1c2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgb25TY3JvbGwoZXZlbnQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNjcm9sbCB0aGUgY2Fyb3VzZWwgdG8gcmlnaHQgb3IgbGVmdFxuICAgICAgICBjb25zdCBzY3JvbGwgPSAoJGNvbnRhaW5lcikgPT4ge1xuICAgICAgICAgICAgaWYgKCRjb250YWluZXIuZGF0YSgncGF1c2VkJykpIHJldHVybjtcbiAgICAgICAgICAgIGlmICgkLmNvbnRhaW5zKCRjb250YWluZXJbMF0sIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSByZXR1cm47IC8vIHN0b3AgaWYgdGhlIGNhcm91c2VsIGNvbnRhaW5zIHRoZSBmb2N1c2VkIGVsZW1lbnRcbiAgICAgICAgICAgIGlmICgkY29udGFpbmVyLmRhdGEoJ3Njcm9sbGluZ0RpcmVjdGlvbicpID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5zY3JvbGxMZWZ0KCRjb250YWluZXIuc2Nyb2xsTGVmdCgpICsgYXV0b1Njcm9sbFN0ZXApO1xuICAgICAgICAgICAgICAgICRjb250YWluZXIudHJpZ2dlcignc2Nyb2xsJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCRjb250YWluZXIuZGF0YSgnc2Nyb2xsaW5nRGlyZWN0aW9uJykgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICRjb250YWluZXIuc2Nyb2xsTGVmdCgkY29udGFpbmVyLnNjcm9sbExlZnQoKSAtIGF1dG9TY3JvbGxTdGVwKTtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLnRyaWdnZXIoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGF1dG8tc2Nyb2xsIHRoZSBjYXJvdXNlbCBvbiB2aWV3cG9ydCBpbnRlcnNlY3Rpb25cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGFpbmVyID0gJChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHNjcm9sbCgkY29udGFpbmVyKSwgTWF0aC5yb3VuZCgxMDAwIC8gNjApKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdhdXRvU2Nyb2xsVGltZXInLCB0aW1lcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCgkY29udGFpbmVyLmRhdGEoJ2F1dG9TY3JvbGxUaW1lcicpKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci5kYXRhKCdhdXRvU2Nyb2xsVGltZXInLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWwtY29udGFpbmVyXScpLm9uKCdzY3JvbGwnLCB0aHJvdHRsZShvblNjcm9sbCwgMjAwKSk7XG4gICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0nKS5vbigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gICAgICAgICQoJ1tkYXRhLWJyYW5kLWNhcm91c2VsLWNvbnRhaW5lcl0nKS5vbigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICAgICAgJCgnW2RhdGEtYnJhbmQtY2Fyb3VzZWwtY29udGFpbmVyXScpXG4gICAgICAgICAgICAuZGF0YSgnc2Nyb2xsaW5nRGlyZWN0aW9uJywgJ3JpZ2h0JylcbiAgICAgICAgICAgIC5lYWNoKChfaSwgZWwpID0+IG9ic2VydmVyLm9ic2VydmUoZWwpKTtcblxuICAgICAgICAkKCdbZGF0YS1icmFuZC1jYXJvdXNlbC1jb250YWluZXJdIGE6bm90KC5fY2xvbmUpJykub24oJ2ZvY3VzJywgKGV2ZW50KSA9PiBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ25lYXJlc3QnLCBpbmxpbmU6ICdjZW50ZXInIH0pKTtcbiAgICB9XG59XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgYXMgYW4gYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC40LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNhc3RBcnJheSgxKTtcbiAqIC8vID0+IFsxXVxuICpcbiAqIF8uY2FzdEFycmF5KHsgJ2EnOiAxIH0pO1xuICogLy8gPT4gW3sgJ2EnOiAxIH1dXG4gKlxuICogXy5jYXN0QXJyYXkoJ2FiYycpO1xuICogLy8gPT4gWydhYmMnXVxuICpcbiAqIF8uY2FzdEFycmF5KG51bGwpO1xuICogLy8gPT4gW251bGxdXG4gKlxuICogXy5jYXN0QXJyYXkodW5kZWZpbmVkKTtcbiAqIC8vID0+IFt1bmRlZmluZWRdXG4gKlxuICogXy5jYXN0QXJyYXkoKTtcbiAqIC8vID0+IFtdXG4gKlxuICogdmFyIGFycmF5ID0gWzEsIDIsIDNdO1xuICogY29uc29sZS5sb2coXy5jYXN0QXJyYXkoYXJyYXkpID09PSBhcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNhc3RBcnJheSgpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciB2YWx1ZSA9IGFyZ3VtZW50c1swXTtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RBcnJheTtcbiIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcbiIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG4iLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIGFuIGFycmF5LCB1c2luZ1xuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucywgaW4gd2hpY2ggb25seSB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBlYWNoIGVsZW1lbnRcbiAqIGlzIGtlcHQuIFRoZSBvcmRlciBvZiByZXN1bHQgdmFsdWVzIGlzIGRldGVybWluZWQgYnkgdGhlIG9yZGVyIHRoZXkgb2NjdXJcbiAqIGluIHRoZSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udW5pcShbMiwgMSwgMl0pO1xuICogLy8gPT4gWzIsIDFdXG4gKi9cbmZ1bmN0aW9uIHVuaXEoYXJyYXkpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVVuaXEoYXJyYXkpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcTtcbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsImFwaSIsInRvb2xzIiwiQmxhemVTbGlkZXIiLCJyZXF1ZXN0Q2FjaGUiLCJIb21lIiwiX1BhZ2VNYW5hZ2VyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJpbml0Q2F0ZWdvcnlUYWJzIiwiaW5pdEJyYW5kQ2Fyb3VzZWwiLCIkIiwiZWFjaCIsIl9pIiwiZWwiLCIkZWwiLCIkaGlkZSIsImZpbmQiLCIkZHJvcGRvd24iLCJsZW5ndGgiLCJjbG9uZSIsImFwcGVuZFRvIiwicmVtb3ZlQ2xhc3MiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwiJHRhYnMiLCJjbG9zZXN0Iiwib3B0aW9ucyIsImRhdGEiLCIkc2NvcGUiLCJzY29wZSIsIiRjb250YWluZXIiLCJjb250YWluZXIiLCJ1cmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsInNlYXJjaFBhcmFtcyIsInNldCIsImxpbWl0Iiwic29ydCIsImFkZENsYXNzIiwidXBkYXRlQ29udGVudCIsImNvbnRlbnQiLCJodG1sIiwidHlwZSIsIiRibGF6ZSIsImJsYXplIiwidG90YWxTbGlkZXMiLCJjaGlsZHJlbiIsInJlZnJlc2giLCJnZXQiLCJjYWNoZUtleSIsImhyZWYiLCJnZXRQYWdlIiwidGVtcGxhdGUiLCJlcnIiLCJFcnJvciIsIiRwcmVBY3RpdmUiLCJmaXJzdCIsInRyaWdnZXIiLCJ0aW1lcyIsInJvd3MiLCJhdXRvU2Nyb2xsU3RlcCIsImJyYW5kSWRzIiwiX3VuaXEiLCJtYXAiLCJicmFuZEltZ1dpZHRoIiwiTnVtYmVyIiwiY29udGV4dCIsImJyYW5kX3NpemUiLCJzcGxpdCIsImFqYXgiLCJjb250ZW50VHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInZhcmlhYmxlcyIsIndpZHRoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJncmFwaFFMVG9rZW4iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJicmFuZHMiLCJzaXRlIiwiZWRnZXMiLCJlZGdlIiwibm9kZSIsImZvckVhY2giLCJicmFuZCIsIl9icmFuZCRkZWZhdWx0SW1hZ2UiLCJkZWZhdWx0SW1hZ2UiLCJzcmMiLCJzcmNzZXQiLCJpbWFnZVNyY3NldCIsImdldFNyY3NldCIsInVybFRlbXBsYXRlIiwiJGltZyIsImF0dHIiLCJuYW1lIiwiZW50aXR5SWQiLCJyZXNpemUiLCIkY2Fyb3VzZWwiLCIkaXRlbXMiLCJub3QiLCJuIiwidyIsImlubmVyV2lkdGgiLCJpIiwiZXEiLCJfdGhyb3R0bGUiLCJzY3JvbGxMZWZ0Iiwib25TY3JvbGwiLCJsYXN0U2Nyb2xsTGVmdCIsImlzU2Nyb2xsaW5nUmlnaHQiLCJNYXRoIiwiZmxvb3IiLCIkaGVhZHMiLCJzbGljZSIsImhpZGUiLCJ0cnVuY2F0ZWRXaWR0aCIsInNob3ciLCIkdGFpbHMiLCJwcmVwZW5kVG8iLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoRW5kIiwic2Nyb2xsIiwiY29udGFpbnMiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJ0aW1lciIsInNldEludGVydmFsIiwicm91bmQiLCJjbGVhckludGVydmFsIiwib2JzZXJ2ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlubGluZSIsImRlZmF1bHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==