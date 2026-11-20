"use strict";
(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["category"],{

/***/ "./assets/js/theme/catalog.js"
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPage)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  function CatalogPage(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }
  _inheritsLoose(CatalogPage, _PageManager);
  var _proto = CatalogPage.prototype;
  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');
    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.trigger('focus');
      window.localStorage.removeItem('sortByStatus');
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2__.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/theme/category.js"
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _papathemes_eyeva_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../papathemes/eyeva/faceted-search */ "./assets/js/papathemes/eyeva/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


 // papathemes-eyeva: replace Cornerstone's faceted search feature by PapaThemes

var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_3__.createTranslationDictionary)(context);
    return _this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').trigger('focus');
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    this.initFacetedSearch();
    if (!$('#facetedSearch').length) {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);

      // Refresh range view when shop-by-price enabled
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('search_query')) {
        $('.reset-filters').show();
      }
      $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
      $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.trigger('focus');
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _papathemes_eyeva_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ },

/***/ "./assets/js/theme/common/utils/translations-utils.js"
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTdHLE9BQU8sQ0FBdkc2Ryx3QkFBd0I7SUFBRUMsZ0NBQWdDLEdBQXNDOUcsT0FBTyxDQUE3RThHLGdDQUFnQztJQUFFQywrQkFBK0IsR0FBSy9HLE9BQU8sQ0FBM0MrRywrQkFBK0I7RUFDbkcsSUFBTUMsZ0JBQWdCLEdBQUdSLHNCQUFzQixDQUFDSyx3QkFBd0IsRUFBRUMsZ0NBQWdDLEVBQUVDLCtCQUErQixDQUFDO0VBQzVJLElBQU1FLGFBQWEsR0FBR1gsTUFBTSxDQUFDWSxNQUFNLENBQUNGLGdCQUFnQixDQUFDYixZQUFZLENBQUMsQ0FBQztFQUNuRSxJQUFNZ0IsZUFBZSxHQUFHYixNQUFNLENBQUNDLElBQUksQ0FBQ1MsZ0JBQWdCLENBQUNiLFlBQVksQ0FBQyxDQUFDLENBQUNpQixHQUFHLENBQUMsVUFBQUMsR0FBRztJQUFBLE9BQUlBLEdBQUcsQ0FBQ3pGLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzBGLEdBQUcsQ0FBQyxDQUFDO0VBQUEsRUFBQztFQUVwRyxPQUFPSCxlQUFlLENBQUNJLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVILEdBQUcsRUFBRVosQ0FBQyxFQUFLO0lBQzNDZSxHQUFHLENBQUNILEdBQUcsQ0FBQyxHQUFHSixhQUFhLENBQUNSLENBQUMsQ0FBQztJQUMzQixPQUFPZSxHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xyXG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQgPT09ICdzb3J0Jykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb3J0QnlTdGF0dXMnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFycmFuZ2VGb2N1c09uU29ydEJ5KCkge1xyXG4gICAgICAgIGNvbnN0ICRzb3J0QnlTZWxlY3RvciA9ICQoJ1tkYXRhLXNvcnQtYnk9XCJwcm9kdWN0XCJdICNzb3J0Jyk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRCeVN0YXR1cycpKSB7XHJcbiAgICAgICAgICAgICRzb3J0QnlTZWxlY3Rvci50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NvcnRCeVN0YXR1cycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XHJcblxyXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcclxuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcclxuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi4vcGFwYXRoZW1lcy9leWV2YS9mYWNldGVkLXNlYXJjaCc7IC8vIHBhcGF0aGVtZXMtZXlldmE6IHJlcGxhY2UgQ29ybmVyc3RvbmUncyBmYWNldGVkIHNlYXJjaCBmZWF0dXJlIGJ5IFBhcGFUaGVtZXNcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcclxuICAgICAgICAkZWxlbWVudC5hdHRyKHtcclxuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXHJcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiBhcmlhTGl2ZVN0YXR1cyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCkge1xyXG4gICAgICAgIGlmICghJCgnW2RhdGEtc2hvcC1ieS1wcmljZV0nKS5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCQoJy5uYXZMaXN0LWFjdGlvbicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZScpLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKCdzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlJyksICdzdGF0dXMnLCAnYXNzZXJ0aXZlJykpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XHJcblxyXG4gICAgICAgIGlmICghJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlZnJlc2ggcmFuZ2UgdmlldyB3aGVuIHNob3AtYnktcHJpY2UgZW5hYmxlZFxyXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVybFBhcmFtcy5oYXMoJ3NlYXJjaF9xdWVyeScpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucmVzZXQtZmlsdGVycycpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21pblwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWluJykpO1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicHJpY2VfbWF4XCJdJykuYXR0cigndmFsdWUnLCB1cmxQYXJhbXMuZ2V0KCdwcmljZV9tYXgnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdhLnJlc2V0LWJ0bicpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzKCQoJ3NwYW4ucmVzZXQtbWVzc2FnZScpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcmlhTm90aWZ5Tm9Qcm9kdWN0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xyXG4gICAgICAgIGNvbnN0ICRub1Byb2R1Y3RzTWVzc2FnZSA9ICQoJ1tkYXRhLW5vLXByb2R1Y3RzLW5vdGlmaWNhdGlvbl0nKTtcclxuICAgICAgICBpZiAoJG5vUHJvZHVjdHNNZXNzYWdlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxyXG4gICAgICAgICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxyXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcclxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxyXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcclxuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcclxuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xyXG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xyXG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXHJcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxyXG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xyXG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsInVybFV0aWxzIiwiVXJsIiwiQ2F0YWxvZ1BhZ2UiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc29ydEJ5U2VsZWN0b3IiLCIkIiwiZ2V0SXRlbSIsInRyaWdnZXIiLCJyZW1vdmVJdGVtIiwib25Tb3J0QnlTdWJtaXQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1cmwiLCJwYXJzZSIsImxvY2F0aW9uIiwiaHJlZiIsInF1ZXJ5UGFyYW1zIiwic2VyaWFsaXplIiwic3BsaXQiLCJxdWVyeSIsInBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1hdCIsInBhdGhuYW1lIiwic2VhcmNoIiwiYnVpbGRRdWVyeVN0cmluZyIsImRlZmF1bHQiLCJob29rcyIsIkZhY2V0ZWRTZWFyY2giLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJDYXRlZ29yeSIsIl9DYXRhbG9nUGFnZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5Iiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJhdHRyIiwicm9sZSIsIm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUiLCJfdGhpczIiLCJsZW5ndGgiLCJoYXNDbGFzcyIsIm9uIiwib25SZWFkeSIsIl90aGlzMyIsImUiLCJuZXh0IiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJiaW5kIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiaGFzIiwic2hvdyIsImdldCIsInNldExpdmVSZWdpb25zQXR0cmlidXRlcyIsImFyaWFOb3RpZnlOb1Byb2R1Y3RzIiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5IiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwiYXJndW1lbnRzIiwiSlNPTiIsInVuZGVmaW5lZCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5IiwicG9wIiwicmVkdWNlIiwiYWNjIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=