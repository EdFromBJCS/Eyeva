(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["assets_js_papathemes_eyeva_faceted-search_js"],{

/***/ "./assets/js/papathemes/eyeva/faceted-search.js"
/*!******************************************************!*\
  !*** ./assets/js/papathemes/eyeva/faceted-search.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EyevaFacetedSearch)
/* harmony export */ });
/* harmony import */ var _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _theme_common_faceted_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./assets/js/papathemes/utils.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notification */ "./assets/js/papathemes/notification.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var EyevaFacetedSearch = /*#__PURE__*/function (_FacetedSearch) {
  function EyevaFacetedSearch() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _FacetedSearch.call.apply(_FacetedSearch, [this].concat(args)) || this;
    _this.superCallback = _this.callback;
    _this.callback = _this.refreshViewCallback;
    _this.updateFacetImages();
    return _this;
  }

  /**
   * override the default behavior of the base class to stop collapsing all facets in this theme
   */
  _inheritsLoose(EyevaFacetedSearch, _FacetedSearch);
  var _proto = EyevaFacetedSearch.prototype;
  _proto.collapseAllFacets = function collapseAllFacets() {
    // do nothing
  };
  _proto.onToggleClick = function onToggleClick(event) {
    event.preventDefault();
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));
    if ($toggle.hasClass('_loading')) return;
    if ($toggle.hasClass('_loaded')) {
      var $items = $navList.find('[data-facet-more-item]');
      var height = $navList.height();
      var newHeight;
      var doneCb;
      if ($toggle.hasClass('_expanded')) {
        $items.hide();
        $toggle.removeClass('_expanded');
        newHeight = $navList.height();
        $items.show();
        doneCb = function doneCb() {
          return $items.hide();
        };
      } else {
        $items.show();
        $toggle.addClass('_expanded');
        newHeight = $navList.height();
      }
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__.animateHeight)($navList, height, newHeight, null, doneCb);
    } else {
      $toggle.addClass('_loading');
      this.getMoreFacetResults($navList, $toggle);
    }
  }

  /**
   * Loading more facet results.
   *
   * Overridden the function to append more facet results to the list instead of showing a modal
   *
   * @param {jQuery} $navList
   * @param {jQuery} $toggle
   */;
  _proto.getMoreFacetResults = function getMoreFacetResults($navList, $toggle) {
    var _this2 = this;
    if (!$toggle) return _FacetedSearch.prototype.getMoreFacetResults.call(this, $navList);
    var notification = (0,_notification__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var facet = $navList.data('facet');
    var facetUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          $toggle.removeClass('_loading');
          notification.error(err.toString());
          return;
        }
        var height = $navList.height();
        var existingIds = $navList.find('[data-faceted-search-facet]').get().map(function (el) {
          return $(el).data('id');
        });
        $(response).find('[data-facet-more-item]').each(function (_i, el) {
          var $el = $(el);
          var id = $el.find('[data-faceted-search-facet]').data('id');
          if (!existingIds.includes(id)) {
            $navList.append($el);
            $toggle.removeClass('_loading').addClass('_expanded _loaded');
          }
        });
        var newHeight = $navList.height();
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.animateHeight)($navList, height, newHeight);
        _this2.updateFacetImages();
      });
    } else {
      $toggle.removeClass('_loading').hide();
    }
  };
  _proto.refreshView = function refreshView(content) {
    _FacetedSearch.prototype.refreshView.call(this, content);
    this.updateFacetImages();
    $('body').trigger('refreshView.facetedSearch');
  };
  _proto.refreshViewCallback = function refreshViewCallback(content) {
    // store the current facet accordion states
    this.collapsedFacets = $(this.options.accordionToggleSelector).get().map(function (el) {
      return $(el).data('collapsibleInstance');
    }).map(function (collapsible) {
      return collapsible.isCollapsed ? collapsible.targetId : null;
    }).filter(function (id) {
      return id;
    });
    var $toggles = $('#product-listing-container [data-collapsible="page-sidebar"]');

    // temporarily append to body to remove it from product-list-container
    $toggles.appendTo('body');

    // call the original callback on refresh view
    this.superCallback(content);

    // replace the new toggle button by the old one to keep the open state
    // and not init collapsible instance again
    $('#product-listing-container [data-collapsible="page-sidebar"]').each(function (i, el) {
      var $el = $(el);
      var $toggle = $toggles.eq(i);
      if ($toggle.length > 0) {
        $toggle.html($el.html());
        $el.replaceWith($toggle);
      }
    });

    // remove any lonely toggle button
    $toggles.filter(function (i, el) {
      return $(el).parent().is('body');
    }).remove();
  }

  /**
   * Override this function to stop animation of accordion when restoring collapsed facets
   */;
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var $body = $('body');
    $body.addClass('_animation-off');
    _FacetedSearch.prototype.restoreCollapsedFacets.call(this);
    $body.removeClass('_animation-off');
  }

  /**
   * Load facet images
   */;
  _proto.updateFacetImages = function updateFacetImages() {
    $('[data-faceted-search-facet-image], [data-faceted-search-facet-color]').find('img').not('._loaded').each(function (i, el) {
      var $img = $(el);
      $img.one('error', function (event) {
        return $(event.currentTarget).remove();
      });
      $img.attr('src', $img.data('src'));
      $img.addClass('lazyload _loaded');
    });
  };
  return EyevaFacetedSearch;
}(_theme_common_faceted_search__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ },

/***/ "./assets/js/papathemes/notification.js"
/*!**********************************************!*\
  !*** ./assets/js/papathemes/notification.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var instance;
var Notification = /*#__PURE__*/function () {
  function Notification() {
    this.template = "\n        <div class=\"papathemes__notifications\">\n        </div>\n    ";
    this.itemTemplate = "\n        <div class=\"papathemes__notifications-item {{className}}\">\n            {{&icon}}\n            <div class=\"_content\">\n                {{&content}}\n            </div>\n            {{&close}}\n        </div>\n    ";
    this.closeTemplate = "\n        <button type=\"button\" class=\"papathemes__notifications-close\">\n            <span class=\"is-srOnly\">Close</span>\n            <i class=\"icon\" aria-hidden=\"true\"><svg><use href=\"#icon-xmark-large\"></use></svg></i>\n        </button>\n    ";
    this.$notifications = $(mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(this.template)).hide().appendTo('body');
    this.hideTimeout = null;
  }
  var _proto = Notification.prototype;
  _proto.info = function info(content, icon, timeout) {
    this.show(content, icon, timeout, '_info');
  };
  _proto.error = function error(content, icon, timeout) {
    this.show(content, icon, timeout, '_error');
  };
  _proto.show = function show(content, icon, timeout, className) {
    var _this = this;
    if (timeout === void 0) {
      timeout = 5000;
    }
    if (className === void 0) {
      className = '';
    }
    clearTimeout(this.hideTimeout);
    var close = mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(this.closeTemplate);
    var $item = $(mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(this.itemTemplate, {
      content: content,
      icon: icon,
      close: close,
      className: className
    }));
    this.$notifications.append($item).show();
    $item.addClass('_showing');
    var closeFnc = function closeFnc() {
      $item.removeClass('_showing');
      setTimeout(function () {
        $item.remove();
        _this.updateNotifications();
      }, 500);
    };
    var timer = setTimeout(closeFnc, timeout);
    $item.find('.papathemes__notifications-close').on('click', function (event) {
      event.preventDefault();
      clearTimeout(timer);
      closeFnc();
    });
  };
  _proto.updateNotifications = function updateNotifications() {
    var _this2 = this;
    clearTimeout(this.hideTimeout);
    if (this.$notifications.is(':empty')) {
      this.hideTimeout = setTimeout(function () {
        _this2.$notifications.hide();
      }, 500);
    }
  };
  return Notification;
}();
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!instance) {
    instance = new Notification();
  }
  return instance;
}

/***/ },

/***/ "./assets/js/theme/common/faceted-search.js"
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");










var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: $('#facetedSearch').length ? '#facet-range-form [name=max_price]' : '#facet-range-form [name=price_max]',
  priceRangeMinPriceSelector: $('#facetedSearch').length ? '#facet-range-form [name=min_price]' : '#facet-range-form [name=price_min]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal')[0],
  modalOpen: false
};

/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  }

  // Public methods
  var _proto = FacetedSearch.prototype;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);

      // Refresh range view when shop-by-price enabled
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('search_query')) {
        $('.reset-filters').show();
      }
      $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
      $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (this.collapsedFacetItems.includes(id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.Validators.setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = _this6.collapsedFacetItems.includes(id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = _this7.collapsedFacets.includes(id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_9__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].parseQueryParams(queryParams);
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    if (document.location.hash !== '') return;
    $(window).trigger('statechange');
  };
  return FacetedSearch;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacetedSearch);

/***/ },

/***/ "./assets/js/theme/common/utils/url-utils.js"
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }
    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};
    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');
      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }
    return params;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlUtils);

/***/ },

/***/ "?4f7e"
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
() {

/* (ignored) */

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX2ZhY2V0ZWQtc2VhcmNoX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNJO0FBQ2I7QUFDUjtBQUNLO0FBQUEsSUFFekJLLGtCQUFrQiwwQkFBQUMsY0FBQTtFQUNuQyxTQUFBRCxtQkFBQSxFQUFxQjtJQUFBLElBQUFFLEtBQUE7SUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFOQyxJQUFJLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxHQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO01BQUpGLElBQUksQ0FBQUUsSUFBQSxJQUFBSixTQUFBLENBQUFJLElBQUE7SUFBQTtJQUNmTixLQUFBLEdBQUFELGNBQUEsQ0FBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULGNBQUEsU0FBQVUsTUFBQSxDQUFTTCxJQUFJLEVBQUM7SUFFZEosS0FBQSxDQUFLVSxhQUFhLEdBQUdWLEtBQUEsQ0FBS1csUUFBUTtJQUNsQ1gsS0FBQSxDQUFLVyxRQUFRLEdBQUdYLEtBQUEsQ0FBS1ksbUJBQW1CO0lBRXhDWixLQUFBLENBQUthLGlCQUFpQixDQUFDLENBQUM7SUFBQyxPQUFBYixLQUFBO0VBQzdCOztFQUVBO0FBQ0o7QUFDQTtFQUZJYyxjQUFBLENBQUFoQixrQkFBQSxFQUFBQyxjQUFBO0VBQUEsSUFBQWdCLE1BQUEsR0FBQWpCLGtCQUFBLENBQUFrQixTQUFBO0VBQUFELE1BQUEsQ0FHQUUsaUJBQWlCLEdBQWpCLFNBQUFBLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2hCO0VBQUEsQ0FDSDtFQUFBRixNQUFBLENBRURHLGFBQWEsR0FBYixTQUFBQSxhQUFhQSxDQUFDQyxLQUFLLEVBQUU7SUFDakJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFdEIsSUFBTUMsT0FBTyxHQUFHQyxDQUFDLENBQUNILEtB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ZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy91cmwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvaWdub3JlZHxDOlxcVXNlcnNcXERvcmFuXFxFeWV2YVxcbm9kZV9tb2R1bGVzXFxvYmplY3QtaW5zcGVjdHwuL3V0aWwuaW5zcGVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi4vLi4vdGhlbWUvY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuLi8uLi90aGVtZS9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgYW5pbWF0ZUhlaWdodCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBnZXROb3RpZmljYXRpb24gZnJvbSAnLi4vbm90aWZpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXlldmFGYWNldGVkU2VhcmNoIGV4dGVuZHMgRmFjZXRlZFNlYXJjaCB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcblxuICAgICAgICB0aGlzLnN1cGVyQ2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5yZWZyZXNoVmlld0NhbGxiYWNrO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRmFjZXRJbWFnZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvdmVycmlkZSB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgYmFzZSBjbGFzcyB0byBzdG9wIGNvbGxhcHNpbmcgYWxsIGZhY2V0cyBpbiB0aGlzIHRoZW1lXG4gICAgICovXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICAgICAgaWYgKCR0b2dnbGUuaGFzQ2xhc3MoJ19sb2FkaW5nJykpIHJldHVybjtcblxuICAgICAgICBpZiAoJHRvZ2dsZS5oYXNDbGFzcygnX2xvYWRlZCcpKSB7XG4gICAgICAgICAgICBjb25zdCAkaXRlbXMgPSAkbmF2TGlzdC5maW5kKCdbZGF0YS1mYWNldC1tb3JlLWl0ZW1dJyk7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAkbmF2TGlzdC5oZWlnaHQoKTtcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgZG9uZUNiO1xuXG4gICAgICAgICAgICBpZiAoJHRvZ2dsZS5oYXNDbGFzcygnX2V4cGFuZGVkJykpIHtcbiAgICAgICAgICAgICAgICAkaXRlbXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ19leHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9ICRuYXZMaXN0LmhlaWdodCgpO1xuICAgICAgICAgICAgICAgICRpdGVtcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgZG9uZUNiID0gKCkgPT4gJGl0ZW1zLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGl0ZW1zLnNob3coKTtcbiAgICAgICAgICAgICAgICAkdG9nZ2xlLmFkZENsYXNzKCdfZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSAkbmF2TGlzdC5oZWlnaHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYW5pbWF0ZUhlaWdodCgkbmF2TGlzdCwgaGVpZ2h0LCBuZXdIZWlnaHQsIG51bGwsIGRvbmVDYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdG9nZ2xlLmFkZENsYXNzKCdfbG9hZGluZycpO1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0LCAkdG9nZ2xlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRpbmcgbW9yZSBmYWNldCByZXN1bHRzLlxuICAgICAqXG4gICAgICogT3ZlcnJpZGRlbiB0aGUgZnVuY3Rpb24gdG8gYXBwZW5kIG1vcmUgZmFjZXQgcmVzdWx0cyB0byB0aGUgbGlzdCBpbnN0ZWFkIG9mIHNob3dpbmcgYSBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRuYXZMaXN0XG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR0b2dnbGVcbiAgICAgKi9cbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0LCAkdG9nZ2xlKSB7XG4gICAgICAgIGlmICghJHRvZ2dsZSkgcmV0dXJuIHN1cGVyLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGdldE5vdGlmaWNhdGlvbigpO1xuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ19sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcihlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAkbmF2TGlzdC5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0lkcyA9ICRuYXZMaXN0LmZpbmQoJ1tkYXRhLWZhY2V0ZWQtc2VhcmNoLWZhY2V0XScpXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoKS5tYXAoZWwgPT4gJChlbCkuZGF0YSgnaWQnKSk7XG5cbiAgICAgICAgICAgICAgICAkKHJlc3BvbnNlKS5maW5kKCdbZGF0YS1mYWNldC1tb3JlLWl0ZW1dJykuZWFjaCgoX2ksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9ICRlbC5maW5kKCdbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldF0nKS5kYXRhKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RpbmdJZHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmF2TGlzdC5hcHBlbmQoJGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ19sb2FkaW5nJykuYWRkQ2xhc3MoJ19leHBhbmRlZCBfbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9ICRuYXZMaXN0LmhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgYW5pbWF0ZUhlaWdodCgkbmF2TGlzdCwgaGVpZ2h0LCBuZXdIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmFjZXRJbWFnZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnX2xvYWRpbmcnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZyZXNoVmlldyhjb250ZW50KSB7XG4gICAgICAgIHN1cGVyLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZhY2V0SW1hZ2VzKCk7XG5cbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3JlZnJlc2hWaWV3LmZhY2V0ZWRTZWFyY2gnKTtcbiAgICB9XG5cbiAgICByZWZyZXNoVmlld0NhbGxiYWNrKGNvbnRlbnQpIHtcbiAgICAgICAgLy8gc3RvcmUgdGhlIGN1cnJlbnQgZmFjZXQgYWNjb3JkaW9uIHN0YXRlc1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5nZXQoKVxuICAgICAgICAgICAgLm1hcChlbCA9PiAkKGVsKS5kYXRhKCgnY29sbGFwc2libGVJbnN0YW5jZScpKSlcbiAgICAgICAgICAgIC5tYXAoY29sbGFwc2libGUgPT4gKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkID8gY29sbGFwc2libGUudGFyZ2V0SWQgOiBudWxsKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gaWQpO1xuXG4gICAgICAgIGNvbnN0ICR0b2dnbGVzID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgW2RhdGEtY29sbGFwc2libGU9XCJwYWdlLXNpZGViYXJcIl0nKTtcblxuICAgICAgICAvLyB0ZW1wb3JhcmlseSBhcHBlbmQgdG8gYm9keSB0byByZW1vdmUgaXQgZnJvbSBwcm9kdWN0LWxpc3QtY29udGFpbmVyXG4gICAgICAgICR0b2dnbGVzLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgICAgLy8gY2FsbCB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgb24gcmVmcmVzaCB2aWV3XG4gICAgICAgIHRoaXMuc3VwZXJDYWxsYmFjayhjb250ZW50KTtcblxuICAgICAgICAvLyByZXBsYWNlIHRoZSBuZXcgdG9nZ2xlIGJ1dHRvbiBieSB0aGUgb2xkIG9uZSB0byBrZWVwIHRoZSBvcGVuIHN0YXRlXG4gICAgICAgIC8vIGFuZCBub3QgaW5pdCBjb2xsYXBzaWJsZSBpbnN0YW5jZSBhZ2FpblxuICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciBbZGF0YS1jb2xsYXBzaWJsZT1cInBhZ2Utc2lkZWJhclwiXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkdG9nZ2xlcy5lcShpKTtcblxuICAgICAgICAgICAgaWYgKCR0b2dnbGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICR0b2dnbGUuaHRtbCgkZWwuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICAkZWwucmVwbGFjZVdpdGgoJHRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlbW92ZSBhbnkgbG9uZWx5IHRvZ2dsZSBidXR0b25cbiAgICAgICAgJHRvZ2dsZXMuZmlsdGVyKChpLCBlbCkgPT4gJChlbCkucGFyZW50KCkuaXMoJ2JvZHknKSkucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiB0byBzdG9wIGFuaW1hdGlvbiBvZiBhY2NvcmRpb24gd2hlbiByZXN0b3JpbmcgY29sbGFwc2VkIGZhY2V0c1xuICAgICAqL1xuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAkYm9keS5hZGRDbGFzcygnX2FuaW1hdGlvbi1vZmYnKTtcblxuICAgICAgICBzdXBlci5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XG5cbiAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ19hbmltYXRpb24tb2ZmJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBmYWNldCBpbWFnZXNcbiAgICAgKi9cbiAgICB1cGRhdGVGYWNldEltYWdlcygpIHtcbiAgICAgICAgJCgnW2RhdGEtZmFjZXRlZC1zZWFyY2gtZmFjZXQtaW1hZ2VdLCBbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldC1jb2xvcl0nKS5maW5kKCdpbWcnKS5ub3QoJy5fbG9hZGVkJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbWcgPSAkKGVsKTtcbiAgICAgICAgICAgICRpbWcub25lKCdlcnJvcicsIGV2ZW50ID0+ICQoZXZlbnQuY3VycmVudFRhcmdldCkucmVtb3ZlKCkpO1xuICAgICAgICAgICAgJGltZy5hdHRyKCdzcmMnLCAkaW1nLmRhdGEoJ3NyYycpKTtcbiAgICAgICAgICAgICRpbWcuYWRkQ2xhc3MoJ2xhenlsb2FkIF9sb2FkZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcblxubGV0IGluc3RhbmNlO1xuXG5jbGFzcyBOb3RpZmljYXRpb24ge1xuICAgIHRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9uc1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgaXRlbVRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9ucy1pdGVtIHt7Y2xhc3NOYW1lfX1cIj5cbiAgICAgICAgICAgIHt7Jmljb259fVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3smY29udGVudH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt7JmNsb3NlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNsb3NlVGVtcGxhdGUgPSBgXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9ucy1jbG9zZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5DbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24teG1hcmstbGFyZ2VcIj48L3VzZT48L3N2Zz48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kbm90aWZpY2F0aW9ucyA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMudGVtcGxhdGUpKVxuICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgICAgdGhpcy5oaWRlVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5mbyhjb250ZW50LCBpY29uLCB0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuc2hvdyhjb250ZW50LCBpY29uLCB0aW1lb3V0LCAnX2luZm8nKTtcbiAgICB9XG5cbiAgICBlcnJvcihjb250ZW50LCBpY29uLCB0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuc2hvdyhjb250ZW50LCBpY29uLCB0aW1lb3V0LCAnX2Vycm9yJyk7XG4gICAgfVxuXG4gICAgc2hvdyhjb250ZW50LCBpY29uLCB0aW1lb3V0ID0gNTAwMCwgY2xhc3NOYW1lID0gJycpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuY2xvc2VUZW1wbGF0ZSk7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5pdGVtVGVtcGxhdGUsIHtcbiAgICAgICAgICAgIGNvbnRlbnQsIGljb24sIGNsb3NlLCBjbGFzc05hbWUsXG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiRub3RpZmljYXRpb25zLmFwcGVuZCgkaXRlbSkuc2hvdygpO1xuICAgICAgICAkaXRlbS5hZGRDbGFzcygnX3Nob3dpbmcnKTtcblxuICAgICAgICBjb25zdCBjbG9zZUZuYyA9ICgpID0+IHtcbiAgICAgICAgICAgICRpdGVtLnJlbW92ZUNsYXNzKCdfc2hvd2luZycpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJGl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOb3RpZmljYXRpb25zKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChjbG9zZUZuYywgdGltZW91dCk7XG5cbiAgICAgICAgJGl0ZW0uZmluZCgnLnBhcGF0aGVtZXNfX25vdGlmaWNhdGlvbnMtY2xvc2UnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgY2xvc2VGbmMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTm90aWZpY2F0aW9ucygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xuXG4gICAgICAgIGlmICh0aGlzLiRub3RpZmljYXRpb25zLmlzKCc6ZW1wdHknKSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5vdGlmaWNhdGlvbnMuaGlkZSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTm90aWZpY2F0aW9uKCk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuXG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxuICAgIGJsb2NrZXJTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5ibG9ja2VyJyxcbiAgICBjbGVhckZhY2V0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC1jbGVhckxpbmsnLFxuICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXG4gICAgZmFjZXROYXZMaXN0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAubmF2TGlzdCcsXG4gICAgcHJpY2VSYW5nZUVycm9yU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1pbmxpbmVNZXNzYWdlJyxcbiAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcbiAgICBwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0nLFxuICAgIHByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yOiAkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA/ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyA6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1wcmljZV9tYXhdJyxcbiAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPyAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScgOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9cHJpY2VfbWluXScsXG4gICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXG4gICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxuICAgIG1vZGFsOiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdLFxuICAgIG1vZGFsT3BlbjogZmFsc2UsXG59O1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHJhbmdlIHZpZXcgd2hlbiBzaG9wLWJ5LXByaWNlIGVuYWJsZWRcbiAgICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICAgICAgICAgIGlmICh1cmxQYXJhbXMuaGFzKCdzZWFyY2hfcXVlcnknKSkge1xuICAgICAgICAgICAgICAgICQoJy5yZXNldC1maWx0ZXJzJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicHJpY2VfbWluXCJdJykuYXR0cigndmFsdWUnLCB1cmxQYXJhbXMuZ2V0KCdwcmljZV9taW4nKSk7XG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicHJpY2VfbWF4XCJdJykuYXR0cigndmFsdWUnLCB1cmxQYXJhbXMuZ2V0KCdwcmljZV9tYXgnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFJlbW92ZVxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgY29uc3QgaGFzTW9yZVJlc3VsdHMgPSAkbmF2TGlzdC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChoYXNNb3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGRlcGVuZGluZyBvbiBgY29sbGFwc2VkYCBmbGFnXG4gICAgICAgIGlmICh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZpbHRlckZhY2V0SXRlbXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGl0ZW1zID0gJCgnLm5hdkxpc3QtaXRlbScpO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAkaXRlbXMuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUub3BlbigpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgICBpbml0UHJpY2VWYWxpZGF0b3IoKSB7XG4gICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5vZCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9O1xuXG4gICAgICAgIFZhbGlkYXRvcnMuc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uKHZhbGlkYXRvciwgc2VsZWN0b3JzLCB0aGlzLm9wdGlvbnMudmFsaWRhdGlvbkVycm9yTWVzc2FnZXMpO1xuXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgJG5hdkxpc3RzID0gJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XG4gICAgICAgICRuYXZMaXN0cy5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMuaW5jbHVkZXMoaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gdGhpcy5jb2xsYXBzZWRGYWNldHMuaW5jbHVkZXMoaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIENsZWFuLXVwXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgb25DbGVhckZhY2V0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHZpc2libGUgaXRlbXNcbiAgICAgICAgdGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICB9XG5cbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICAvLyBVcmwgb2JqZWN0IGBxdWVyeWAgaXMgbm90IGEgdHJhZGl0aW9uYWwgSmF2YVNjcmlwdCBPYmplY3Qgb24gYWxsIHN5c3RlbXMsIGNsb25lIGl0IGluc3RlYWRcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmxRdWVyeVBhcmFtcykgfSkpO1xuICAgIH1cblxuICAgIG9uUmFuZ2VTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIXRoaXMucHJpY2VSYW5nZVZhbGlkYXRvci5hcmVBbGwobm9kLmNvbnN0YW50cy5WQUxJRCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKS5zcGxpdCgnJicpO1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHVybFV0aWxzLnBhcnNlUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeVtrZXldID0gcXVlcnlQYXJhbXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmxRdWVyeVBhcmFtcykgfSkpO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuICAgIG9uQWNjb3JkaW9uVG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBvcFN0YXRlKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCAhPT0gJycpIHJldHVybjtcblxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2V0ZWRTZWFyY2g7XG4iLCJpbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmNvbnN0IHVybFV0aWxzID0ge1xuICAgIGdldFVybDogKCkgPT4gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH1gLFxuXG4gICAgZ29Ub1VybDogKHVybCkgPT4ge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cmwpO1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9LFxuXG4gICAgcmVwbGFjZVBhcmFtczogKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICBsZXQgcGFyYW07XG5cbiAgICAgICAgLy8gTGV0IHRoZSBmb3JtYXR0ZXIgdXNlIHRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdGhlIG5ldyB1cmxcbiAgICAgICAgcGFyc2VkLnNlYXJjaCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnF1ZXJ5W3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXJsLmZvcm1hdChwYXJzZWQpO1xuICAgIH0sXG5cbiAgICBidWlsZFF1ZXJ5U3RyaW5nOiAocXVlcnlEYXRhKSA9PiB7XG4gICAgICAgIGxldCBvdXQgPSAnJztcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gcXVlcnlEYXRhKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeURhdGFba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5keDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKG5keCBpbiBxdWVyeURhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YVtrZXldLmhhc093blByb3BlcnR5KG5keCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke2tleX09JHtxdWVyeURhdGFba2V5XVtuZHhdfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke2tleX09JHtxdWVyeURhdGFba2V5XX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQuc3Vic3RyaW5nKDEpO1xuICAgIH0sXG5cbiAgICBwYXJzZVF1ZXJ5UGFyYW1zOiAocXVlcnlEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gcXVlcnlEYXRhW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wWzBdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtc1t0ZW1wWzBdXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dLnB1c2godGVtcFsxXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gW3BhcmFtc1t0ZW1wWzBdXSwgdGVtcFsxXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSB0ZW1wWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJsVXRpbHM7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsidXJsVXRpbHMiLCJGYWNldGVkU2VhcmNoIiwiYXBpIiwiYW5pbWF0ZUhlaWdodCIsImdldE5vdGlmaWNhdGlvbiIsIkV5ZXZhRmFjZXRlZFNlYXJjaCIsIl9GYWNldGVkU2VhcmNoIiwiX3RoaXMiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN1cGVyQ2FsbGJhY2siLCJjYWxsYmFjayIsInJlZnJlc2hWaWV3Q2FsbGJhY2siLCJ1cGRhdGVGYWNldEltYWdlcyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblRvZ2dsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiR0b2dnbGUiLCIkIiwiY3VycmVudFRhcmdldCIsIiRuYXZMaXN0IiwiYXR0ciIsImhhc0NsYXNzIiwiJGl0ZW1zIiwiZmluZCIsImhlaWdodCIsIm5ld0hlaWdodCIsImRvbmVDYiIsImhpZGUiLCJyZW1vdmVDbGFzcyIsInNob3ciLCJhZGRDbGFzcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJfdGhpczIiLCJub3RpZmljYXRpb24iLCJmYWNldCIsImRhdGEiLCJmYWNldFVybCIsImdldFVybCIsInJlcXVlc3RPcHRpb25zIiwic2hvd01vcmUiLCJnZXRQYWdlIiwidGVtcGxhdGUiLCJwYXJhbXMiLCJsaXN0X2FsbCIsImVyciIsInJlc3BvbnNlIiwiZXJyb3IiLCJ0b1N0cmluZyIsImV4aXN0aW5nSWRzIiwiZ2V0IiwibWFwIiwiZWwiLCJlYWNoIiwiX2kiLCIkZWwiLCJpZCIsImluY2x1ZGVzIiwiYXBwZW5kIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwidHJpZ2dlciIsImNvbGxhcHNlZEZhY2V0cyIsIm9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImNvbGxhcHNpYmxlIiwiaXNDb2xsYXBzZWQiLCJ0YXJnZXRJZCIsImZpbHRlciIsIiR0b2dnbGVzIiwiYXBwZW5kVG8iLCJpIiwiZXEiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJwYXJlbnQiLCJpcyIsInJlbW92ZSIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCIkYm9keSIsIm5vdCIsIiRpbWciLCJvbmUiLCJkZWZhdWx0IiwibXVzdGFjaGUiLCJpbnN0YW5jZSIsIk5vdGlmaWNhdGlvbiIsIml0ZW1UZW1wbGF0ZSIsImNsb3NlVGVtcGxhdGUiLCIkbm90aWZpY2F0aW9ucyIsInJlbmRlciIsImhpZGVUaW1lb3V0IiwiaW5mbyIsImljb24iLCJ0aW1lb3V0IiwiY2xhc3NOYW1lIiwiY2xlYXJUaW1lb3V0IiwiY2xvc2UiLCIkaXRlbSIsImNsb3NlRm5jIiwic2V0VGltZW91dCIsInVwZGF0ZU5vdGlmaWNhdGlvbnMiLCJ0aW1lciIsIm9uIiwiaG9va3MiLCJVcmwiLCJtb2RhbEZhY3RvcnkiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJWYWxpZGF0b3JzIiwibm9kIiwiZGVmYXVsdE9wdGlvbnMiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxPcGVuIiwiX2V4dGVuZCIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJpbmRleCIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwicHVzaCIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25BY2NvcmRpb25Ub2dnbGUiLCJvbkNsZWFyRmFjZXQiLCJvbkZhY2V0Q2xpY2siLCJvblJhbmdlU3VibWl0Iiwib25Tb3J0QnlTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwiYmluZEV2ZW50cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsIkVycm9yIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJoYXMiLCJleHBhbmRGYWNldEl0ZW1zIiwiX3dpdGhvdXQiLCJoYXNNb3JlUmVzdWx0cyIsIl91bmlvbiIsInRvZ2dsZUZhY2V0SXRlbXMiLCJfdGhpczMiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsInF1ZXJ5IiwidmFsIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJfdGhpczQiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsIl90aGlzNSIsInZhbGlkYXRvciIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsInByaWNlUmFuZ2VWYWxpZGF0b3IiLCJfdGhpczYiLCIkbmF2TGlzdHMiLCJzaG91bGRDb2xsYXBzZSIsIl90aGlzNyIsInVuYmluZEV2ZW50cyIsIm9uUG9wU3RhdGUiLCJkb2N1bWVudCIsIm9mZiIsIiRsaW5rIiwidXJsIiwic3RvcFByb3BhZ2F0aW9uIiwiZ29Ub1VybCIsInRvZ2dsZUNsYXNzIiwicGFyc2UiLCJocmVmIiwicXVlcnlQYXJhbXMiLCJzZXJpYWxpemUiLCJzcGxpdCIsInBhZ2UiLCJ1cmxRdWVyeVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImZvcm1hdCIsInBhdGhuYW1lIiwiYnVpbGRRdWVyeVN0cmluZyIsImFyZUFsbCIsImNvbnN0YW50cyIsIlZBTElEIiwiZGVjb2RlVVJJIiwicGFyc2VRdWVyeVBhcmFtcyIsImtleSIsImhhc093blByb3BlcnR5IiwiaGFzaCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJ0aXRsZSIsInJlcGxhY2VQYXJhbXMiLCJwYXJzZWQiLCJwYXJhbSIsInF1ZXJ5RGF0YSIsIm91dCIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciLCJ0ZW1wIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=