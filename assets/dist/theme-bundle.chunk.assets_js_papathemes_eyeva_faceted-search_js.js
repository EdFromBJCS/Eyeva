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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX2ZhY2V0ZWQtc2VhcmNoX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNJO0FBQ2I7QUFDUjtBQUNLO0FBQUEsSUFFekJLLGtCQUFrQiwwQkFBQUMsY0FBQTtFQUNuQyxTQUFBRCxtQkFBQSxFQUFxQjtJQUFBLElBQUFFLEtBQUE7SUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFOQyxJQUFJLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxHQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO01BQUpGLElBQUksQ0FBQUUsSUFBQSxJQUFBSixTQUFBLENBQUFJLElBQUE7SUFBQTtJQUNmTixLQUFBLEdBQUFELGNBQUEsQ0FBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULGNBQUEsU0FBQVUsTUFBQSxDQUFTTCxJQUFJLEVBQUM7SUFFZEosS0FBQSxDQUFLVSxhQUFhLEdBQUdWLEtBQUEsQ0FBS1csUUFBUTtJQUNsQ1gsS0FBQSxDQUFLVyxRQUFRLEdBQUdYLEtBQUEsQ0FBS1ksbUJBQW1CO0lBRXhDWixLQUFBLENBQUthLGlCQUFpQixDQUFDLENBQUM7SUFBQyxPQUFBYixLQUFBO0VBQzdCOztFQUVBO0FBQ0o7QUFDQTtFQUZJYyxjQUFBLENBQUFoQixrQkFBQSxFQUFBQyxjQUFBO0VBQUEsSUFBQWdCLE1BQUEsR0FBQWpCLGtCQUFBLENBQUFrQixTQUFBO0VBQUFELE1BQUEsQ0FHQUUsaUJBQWlCLEdBQWpCLFNBQUFBLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2hCO0VBQUEsQ0FDSDtFQUFBRixNQUFBLENBRURHLGFBQWEsR0FBYixTQUFBQSxhQUFhQSxDQUFDQyxLQUFLLEVBQUU7SUFDakJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFdEIsSUFBTUMsT0FBTyxHQUFHQyxDQUFDLENBQUNILEtBQUssQ0FBQ0ksYUFBYSxDQUFDO0lBQ3RDLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRCxPQUFPLENBQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV4QyxJQUFJSixPQUFPLENBQUNLLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtJQUVsQyxJQUFJTCxPQUFPLENBQUNLLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUM3QixJQUFNQyxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLHdCQUF3QixDQUFDO01BQ3RELElBQU1DLE1BQU0sR0FBR0wsUUFBUSxDQUFDSyxNQUFNLENBQUMsQ0FBQztNQUNoQyxJQUFJQyxTQUFTO01BQ2IsSUFBSUMsTUFBTTtNQUVWLElBQUlWLE9BQU8sQ0FBQ0ssUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQy9CQyxNQUFNLENBQUNLLElBQUksQ0FBQyxDQUFDO1FBQ2JYLE9BQU8sQ0FBQ1ksV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUNoQ0gsU0FBUyxHQUFHTixRQUFRLENBQUNLLE1BQU0sQ0FBQyxDQUFDO1FBQzdCRixNQUFNLENBQUNPLElBQUksQ0FBQyxDQUFDO1FBQ2JILE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFBO1VBQUEsT0FBU0osTUFBTSxDQUFDSyxJQUFJLENBQUMsQ0FBQztRQUFBO01BQ2hDLENBQUMsTUFBTTtRQUNITCxNQUFNLENBQUNPLElBQUksQ0FBQyxDQUFDO1FBQ2JiLE9BQU8sQ0FBQ2MsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUM3QkwsU0FBUyxHQUFHTixRQUFRLENBQUNLLE1BQU0sQ0FBQyxDQUFDO01BQ2pDO01BRUFqQyxxREFBYSxDQUFDNEIsUUFBUSxFQUFFSyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxJQUFJLEVBQUVDLE1BQU0sQ0FBQztJQUM1RCxDQUFDLE1BQU07TUFDSFYsT0FBTyxDQUFDYyxRQUFRLENBQUMsVUFBVSxDQUFDO01BQzVCLElBQUksQ0FBQ0MsbUJBQW1CLENBQUNaLFFBQVEsRUFBRUgsT0FBTyxDQUFDO0lBQy9DO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVBJO0VBQUFOLE1BQUEsQ0FRQXFCLG1CQUFtQixHQUFuQixTQUFBQSxtQkFBbUJBLENBQUNaLFFBQVEsRUFBRUgsT0FBTyxFQUFFO0lBQUEsSUFBQWdCLE1BQUE7SUFDbkMsSUFBSSxDQUFDaEIsT0FBTyxFQUFFLE9BQUF0QixjQUFBLENBQUFpQixTQUFBLENBQWFvQixtQkFBbUIsQ0FBQTdCLElBQUEsT0FBQ2lCLFFBQVE7SUFFdkQsSUFBTWMsWUFBWSxHQUFHekMseURBQWUsQ0FBQyxDQUFDO0lBQ3RDLElBQU0wQyxLQUFLLEdBQUdmLFFBQVEsQ0FBQ2dCLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDcEMsSUFBTUMsUUFBUSxHQUFHaEQscUVBQVEsQ0FBQ2lELE1BQU0sQ0FBQyxDQUFDO0lBRWxDLElBQUksSUFBSSxDQUFDQyxjQUFjLENBQUNDLFFBQVEsRUFBRTtNQUM5QmpELDJEQUFHLENBQUNrRCxPQUFPLENBQUNKLFFBQVEsRUFBRTtRQUNsQkssUUFBUSxFQUFFLElBQUksQ0FBQ0gsY0FBYyxDQUFDQyxRQUFRO1FBQ3RDRyxNQUFNLEVBQUU7VUFDSkMsUUFBUSxFQUFFVDtRQUNkO01BQ0osQ0FBQyxFQUFFLFVBQUNVLEdBQUcsRUFBRUMsUUFBUSxFQUFLO1FBQ2xCLElBQUlELEdBQUcsRUFBRTtVQUNMNUIsT0FBTyxDQUFDWSxXQUFXLENBQUMsVUFBVSxDQUFDO1VBQy9CSyxZQUFZLENBQUNhLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1VBQ2xDO1FBQ0o7UUFFQSxJQUFNdkIsTUFBTSxHQUFHTCxRQUFRLENBQUNLLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQU13QixXQUFXLEdBQUc3QixRQUFRLENBQUNJLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUMzRDBCLEdBQUcsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxVQUFBQyxFQUFFO1VBQUEsT0FBSWxDLENBQUMsQ0FBQ2tDLEVBQUUsQ0FBQyxDQUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQztRQUFBLEVBQUM7UUFFdENsQixDQUFDLENBQUM0QixRQUFRLENBQUMsQ0FBQ3RCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDNkIsSUFBSSxDQUFDLFVBQUNDLEVBQUUsRUFBRUYsRUFBRSxFQUFLO1VBQ3hELElBQU1HLEdBQUcsR0FBR3JDLENBQUMsQ0FBQ2tDLEVBQUUsQ0FBQztVQUNqQixJQUFNSSxFQUFFLEdBQUdELEdBQUcsQ0FBQy9CLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDWSxJQUFJLENBQUMsSUFBSSxDQUFDO1VBRTdELElBQUksQ0FBQ2EsV0FBVyxDQUFDUSxRQUFRLENBQUNELEVBQUUsQ0FBQyxFQUFFO1lBQzNCcEMsUUFBUSxDQUFDc0MsTUFBTSxDQUFDSCxHQUFHLENBQUM7WUFDcEJ0QyxPQUFPLENBQUNZLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1VBQ2pFO1FBQ0osQ0FBQyxDQUFDO1FBRUYsSUFBTUwsU0FBUyxHQUFHTixRQUFRLENBQUNLLE1BQU0sQ0FBQyxDQUFDO1FBRW5DakMscURBQWEsQ0FBQzRCLFFBQVEsRUFBRUssTUFBTSxFQUFFQyxTQUFTLENBQUM7UUFDMUNPLE1BQUksQ0FBQ3hCLGlCQUFpQixDQUFDLENBQUM7TUFDNUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNO01BQ0hRLE9BQU8sQ0FBQ1ksV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDRCxJQUFJLENBQUMsQ0FBQztJQUMxQztFQUNKLENBQUM7RUFBQWpCLE1BQUEsQ0FFRGdELFdBQVcsR0FBWCxTQUFBQSxXQUFXQSxDQUFDQyxPQUFPLEVBQUU7SUFDakJqRSxjQUFBLENBQUFpQixTQUFBLENBQU0rQyxXQUFXLENBQUF4RCxJQUFBLE9BQUN5RCxPQUFPO0lBQ3pCLElBQUksQ0FBQ25ELGlCQUFpQixDQUFDLENBQUM7SUFFeEJTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzJDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQztFQUNsRCxDQUFDO0VBQUFsRCxNQUFBLENBRURILG1CQUFtQixHQUFuQixTQUFBQSxtQkFBbUJBLENBQUNvRCxPQUFPLEVBQUU7SUFDekI7SUFDQSxJQUFJLENBQUNFLGVBQWUsR0FBRzVDLENBQUMsQ0FBQyxJQUFJLENBQUM2QyxPQUFPLENBQUNDLHVCQUF1QixDQUFDLENBQUNkLEdBQUcsQ0FBQyxDQUFDLENBQy9EQyxHQUFHLENBQUMsVUFBQUMsRUFBRTtNQUFBLE9BQUlsQyxDQUFDLENBQUNrQyxFQUFFLENBQUMsQ0FBQ2hCLElBQUksQ0FBRSxxQkFBc0IsQ0FBQztJQUFBLEVBQUMsQ0FDOUNlLEdBQUcsQ0FBQyxVQUFBYyxXQUFXO01BQUEsT0FBS0EsV0FBVyxDQUFDQyxXQUFXLEdBQUdELFdBQVcsQ0FBQ0UsUUFBUSxHQUFHLElBQUk7SUFBQSxDQUFDLENBQUMsQ0FDM0VDLE1BQU0sQ0FBQyxVQUFBWixFQUFFO01BQUEsT0FBSUEsRUFBRTtJQUFBLEVBQUM7SUFFckIsSUFBTWEsUUFBUSxHQUFHbkQsQ0FBQyxDQUFDLDhEQUE4RCxDQUFDOztJQUVsRjtJQUNBbUQsUUFBUSxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDOztJQUV6QjtJQUNBLElBQUksQ0FBQ2hFLGFBQWEsQ0FBQ3NELE9BQU8sQ0FBQzs7SUFFM0I7SUFDQTtJQUNBMUMsQ0FBQyxDQUFDLDhEQUE4RCxDQUFDLENBQUNtQyxJQUFJLENBQUMsVUFBQ2tCLENBQUMsRUFBRW5CLEVBQUUsRUFBSztNQUM5RSxJQUFNRyxHQUFHLEdBQUdyQyxDQUFDLENBQUNrQyxFQUFFLENBQUM7TUFDakIsSUFBTW5DLE9BQU8sR0FBR29ELFFBQVEsQ0FBQ0csRUFBRSxDQUFDRCxDQUFDLENBQUM7TUFFOUIsSUFBSXRELE9BQU8sQ0FBQ2xCLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDcEJrQixPQUFPLENBQUN3RCxJQUFJLENBQUNsQixHQUFHLENBQUNrQixJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hCbEIsR0FBRyxDQUFDbUIsV0FBVyxDQUFDekQsT0FBTyxDQUFDO01BQzVCO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0FvRCxRQUFRLENBQUNELE1BQU0sQ0FBQyxVQUFDRyxDQUFDLEVBQUVuQixFQUFFO01BQUEsT0FBS2xDLENBQUMsQ0FBQ2tDLEVBQUUsQ0FBQyxDQUFDdUIsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUFBLEVBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7RUFDbEU7O0VBRUE7QUFDSjtBQUNBLEtBRkk7RUFBQWxFLE1BQUEsQ0FHQW1FLHNCQUFzQixHQUF0QixTQUFBQSxzQkFBc0JBLENBQUEsRUFBRztJQUNyQixJQUFNQyxLQUFLLEdBQUc3RCxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3ZCNkQsS0FBSyxDQUFDaEQsUUFBUSxDQUFDLGdCQUFnQixDQUFDO0lBRWhDcEMsY0FBQSxDQUFBaUIsU0FBQSxDQUFNa0Usc0JBQXNCLENBQUEzRSxJQUFBO0lBRTVCNEUsS0FBSyxDQUFDbEQsV0FBVyxDQUFDLGdCQUFnQixDQUFDO0VBQ3ZDOztFQUVBO0FBQ0o7QUFDQSxLQUZJO0VBQUFsQixNQUFBLENBR0FGLGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUEsRUFBRztJQUNoQlMsQ0FBQyxDQUFDLHNFQUFzRSxDQUFDLENBQUNNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQ3dELEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzNCLElBQUksQ0FBQyxVQUFDa0IsQ0FBQyxFQUFFbkIsRUFBRSxFQUFLO01BQ2xILElBQU02QixJQUFJLEdBQUcvRCxDQUFDLENBQUNrQyxFQUFFLENBQUM7TUFDbEI2QixJQUFJLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBQW5FLEtBQUs7UUFBQSxPQUFJRyxDQUFDLENBQUNILEtBQUssQ0FBQ0ksYUFBYSxDQUFDLENBQUMwRCxNQUFNLENBQUMsQ0FBQztNQUFBLEVBQUM7TUFDM0RJLElBQUksQ0FBQzVELElBQUksQ0FBQyxLQUFLLEVBQUU0RCxJQUFJLENBQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7TUFDbEM2QyxJQUFJLENBQUNsRCxRQUFRLENBQUMsa0JBQWtCLENBQUM7SUFDckMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFyQyxrQkFBQTtBQUFBLEVBbEsyQ0osb0VBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ043QjtBQUVoQyxJQUFJK0YsUUFBUTtBQUFDLElBRVBDLFlBQVk7RUF1QmQsU0FBQUEsYUFBQSxFQUFjO0lBQUEsS0F0QmQ1QyxRQUFRO0lBQUEsS0FLUjZDLFlBQVk7SUFBQSxLQVVaQyxhQUFhO0lBUVQsSUFBSSxDQUFDQyxjQUFjLEdBQUd2RSxDQUFDLENBQUNrRSxnREFBUSxDQUFDTSxNQUFNLENBQUMsSUFBSSxDQUFDaEQsUUFBUSxDQUFDLENBQUMsQ0FDbERkLElBQUksQ0FBQyxDQUFDLENBQ04wQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBRXJCLElBQUksQ0FBQ3FCLFdBQVcsR0FBRyxJQUFJO0VBQzNCO0VBQUMsSUFBQWhGLE1BQUEsR0FBQTJFLFlBQUEsQ0FBQTFFLFNBQUE7RUFBQUQsTUFBQSxDQUVEaUYsSUFBSSxHQUFKLFNBQUFBLElBQUlBLENBQUNoQyxPQUFPLEVBQUVpQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtJQUN6QixJQUFJLENBQUNoRSxJQUFJLENBQUM4QixPQUFPLEVBQUVpQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxPQUFPLENBQUM7RUFDOUMsQ0FBQztFQUFBbkYsTUFBQSxDQUVEb0MsS0FBSyxHQUFMLFNBQUFBLEtBQUtBLENBQUNhLE9BQU8sRUFBRWlDLElBQUksRUFBRUMsT0FBTyxFQUFFO0lBQzFCLElBQUksQ0FBQ2hFLElBQUksQ0FBQzhCLE9BQU8sRUFBRWlDLElBQUksRUFBRUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztFQUMvQyxDQUFDO0VBQUFuRixNQUFBLENBRURtQixJQUFJLEdBQUosU0FBQUEsSUFBSUEsQ0FBQzhCLE9BQU8sRUFBRWlDLElBQUksRUFBRUMsT0FBTyxFQUFTQyxTQUFTLEVBQU87SUFBQSxJQUFBbkcsS0FBQTtJQUFBLElBQWhDa0csT0FBTztNQUFQQSxPQUFPLEdBQUcsSUFBSTtJQUFBO0lBQUEsSUFBRUMsU0FBUztNQUFUQSxTQUFTLEdBQUcsRUFBRTtJQUFBO0lBQzlDQyxZQUFZLENBQUMsSUFBSSxDQUFDTCxXQUFXLENBQUM7SUFFOUIsSUFBTU0sS0FBSyxHQUFHYixnREFBUSxDQUFDTSxNQUFNLENBQUMsSUFBSSxDQUFDRixhQUFhLENBQUM7SUFDakQsSUFBTVUsS0FBSyxHQUFHaEYsQ0FBQyxDQUFDa0UsZ0RBQVEsQ0FBQ00sTUFBTSxDQUFDLElBQUksQ0FBQ0gsWUFBWSxFQUFFO01BQy9DM0IsT0FBTyxFQUFQQSxPQUFPO01BQUVpQyxJQUFJLEVBQUpBLElBQUk7TUFBRUksS0FBSyxFQUFMQSxLQUFLO01BQUVGLFNBQVMsRUFBVEE7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUNOLGNBQWMsQ0FBQy9CLE1BQU0sQ0FBQ3dDLEtBQUssQ0FBQyxDQUFDcEUsSUFBSSxDQUFDLENBQUM7SUFDeENvRSxLQUFLLENBQUNuRSxRQUFRLENBQUMsVUFBVSxDQUFDO0lBRTFCLElBQU1vRSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO01BQ25CRCxLQUFLLENBQUNyRSxXQUFXLENBQUMsVUFBVSxDQUFDO01BQzdCdUUsVUFBVSxDQUFDLFlBQU07UUFDYkYsS0FBSyxDQUFDckIsTUFBTSxDQUFDLENBQUM7UUFDZGpGLEtBQUksQ0FBQ3lHLG1CQUFtQixDQUFDLENBQUM7TUFDOUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNYLENBQUM7SUFFRCxJQUFNQyxLQUFLLEdBQUdGLFVBQVUsQ0FBQ0QsUUFBUSxFQUFFTCxPQUFPLENBQUM7SUFFM0NJLEtBQUssQ0FBQzFFLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDK0UsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDeEYsS0FBSyxFQUFLO01BQ2xFQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCZ0YsWUFBWSxDQUFDTSxLQUFLLENBQUM7TUFDbkJILFFBQVEsQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBeEYsTUFBQSxDQUVEMEYsbUJBQW1CLEdBQW5CLFNBQUFBLG1CQUFtQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQXBFLE1BQUE7SUFDbEIrRCxZQUFZLENBQUMsSUFBSSxDQUFDTCxXQUFXLENBQUM7SUFFOUIsSUFBSSxJQUFJLENBQUNGLGNBQWMsQ0FBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO01BQ2xDLElBQUksQ0FBQ2UsV0FBVyxHQUFHUyxVQUFVLENBQUMsWUFBTTtRQUNoQ25FLE1BQUksQ0FBQ3dELGNBQWMsQ0FBQzdELElBQUksQ0FBQyxDQUFDO01BQzlCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWDtFQUNKLENBQUM7RUFBQSxPQUFBMEQsWUFBQTtBQUFBO0FBR0wsNkJBQWUsc0NBQVk7RUFDdkIsSUFBSSxDQUFDRCxRQUFRLEVBQUU7SUFDWEEsUUFBUSxHQUFHLElBQUlDLFlBQVksQ0FBQyxDQUFDO0VBQ2pDO0VBQ0EsT0FBT0QsUUFBUTtBQUNuQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGd0Q7QUFFbEM7QUFDbUI7QUFDRTtBQUNJO0FBQ0M7QUFDeEI7QUFHeEIsSUFBTXlCLGNBQWMsR0FBRztFQUNuQjlDLHVCQUF1QixFQUFFLDRFQUE0RTtFQUNyRytDLGVBQWUsRUFBRSx5QkFBeUI7RUFDMUNDLGtCQUFrQixFQUFFLHlDQUF5QztFQUM3REMsaUJBQWlCLEVBQUUsd0JBQXdCO0VBQzNDQyxvQkFBb0IsRUFBRSx5QkFBeUI7RUFDL0NDLHVCQUF1QixFQUFFLHVDQUF1QztFQUNoRUMsMEJBQTBCLEVBQUUsa0NBQWtDO0VBQzlEQyxzQkFBc0IsRUFBRSxtQkFBbUI7RUFDM0NDLDBCQUEwQixFQUFFcEcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNuQixNQUFNLEdBQUcsb0NBQW9DLEdBQUcsb0NBQW9DO0VBQ3BJd0gsMEJBQTBCLEVBQUVyRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ25CLE1BQU0sR0FBRyxvQ0FBb0MsR0FBRyxvQ0FBb0M7RUFDcEl5SCxzQkFBc0IsRUFBRSwrQ0FBK0M7RUFDdkVDLHdCQUF3QixFQUFFLHdDQUF3QztFQUNsRUMsS0FBSyxFQUFFaEIseURBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDaENpQixTQUFTLEVBQUU7QUFDZixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUZBLElBR01ySSxhQUFhO0VBQ2Y7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJLFNBQUFBLGNBQVlpRCxjQUFjLEVBQUVoQyxRQUFRLEVBQUV3RCxPQUFPLEVBQUU7SUFBQSxJQUFBbkUsS0FBQTtJQUMzQztJQUNBLElBQUksQ0FBQzJDLGNBQWMsR0FBR0EsY0FBYztJQUNwQyxJQUFJLENBQUNoQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDd0QsT0FBTyxHQUFHNkQsb0RBQUEsQ0FBUyxDQUFDLENBQUMsRUFBRWQsY0FBYyxFQUFFL0MsT0FBTyxDQUFDO0lBQ3BELElBQUksQ0FBQ0QsZUFBZSxHQUFHLEVBQUU7SUFDekIsSUFBSSxDQUFDK0QsbUJBQW1CLEdBQUcsRUFBRTs7SUFFN0I7SUFDQWxCLHdEQUFrQixDQUFDLENBQUM7O0lBRXBCO0lBQ0EsSUFBSSxDQUFDbUIsa0JBQWtCLENBQUMsQ0FBQzs7SUFFekI7SUFDQTVHLENBQUMsQ0FBQyxJQUFJLENBQUM2QyxPQUFPLENBQUNtRCxvQkFBb0IsQ0FBQyxDQUFDN0QsSUFBSSxDQUFDLFVBQUMwRSxLQUFLLEVBQUVDLE9BQU8sRUFBSztNQUMxRHBJLEtBQUksQ0FBQ3FJLGtCQUFrQixDQUFDL0csQ0FBQyxDQUFDOEcsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDOztJQUVGO0lBQ0E5RyxDQUFDLENBQUMsSUFBSSxDQUFDNkMsT0FBTyxDQUFDQyx1QkFBdUIsQ0FBQyxDQUFDWCxJQUFJLENBQUMsVUFBQzBFLEtBQUssRUFBRUcsZUFBZSxFQUFLO01BQ3JFLElBQU1DLGdCQUFnQixHQUFHakgsQ0FBQyxDQUFDZ0gsZUFBZSxDQUFDO01BQzNDLElBQU1qRSxXQUFXLEdBQUdrRSxnQkFBZ0IsQ0FBQy9GLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztNQUVoRSxJQUFJNkIsV0FBVyxDQUFDQyxXQUFXLEVBQUU7UUFDekJ0RSxLQUFJLENBQUNrRSxlQUFlLENBQUNzRSxJQUFJLENBQUNuRSxXQUFXLENBQUNFLFFBQVEsQ0FBQztNQUNuRDtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBO0lBQ0FpQyxVQUFVLENBQUMsWUFBTTtNQUNiLElBQUlsRixDQUFDLENBQUN0QixLQUFJLENBQUNtRSxPQUFPLENBQUNrRCxpQkFBaUIsQ0FBQyxDQUFDckMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ2pEaEYsS0FBSSxDQUFDaUIsaUJBQWlCLENBQUMsQ0FBQztNQUM1QjtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUksQ0FBQ3dILGFBQWEsR0FBRyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsRCxJQUFJLENBQUN4SCxhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUN3SCxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xELElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMxRCxJQUFJLENBQUNFLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVksQ0FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoRCxJQUFJLENBQUNHLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVksQ0FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoRCxJQUFJLENBQUNJLGFBQWEsR0FBRyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsRCxJQUFJLENBQUNLLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNwRCxJQUFJLENBQUNNLGdCQUFnQixHQUFHLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUNOLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFeEQsSUFBSSxDQUFDTyxVQUFVLENBQUMsQ0FBQztFQUNyQjs7RUFFQTtFQUFBLElBQUFsSSxNQUFBLEdBQUFyQixhQUFBLENBQUFzQixTQUFBO0VBQUFELE1BQUEsQ0FDQWdELFdBQVcsR0FBWCxTQUFBQSxXQUFXQSxDQUFDQyxPQUFPLEVBQUU7SUFDakIsSUFBSUEsT0FBTyxFQUFFO01BQ1QsSUFBSSxDQUFDckQsUUFBUSxDQUFDcUQsT0FBTyxDQUFDO0lBQzFCOztJQUVBO0lBQ0ErQyx3REFBa0IsQ0FBQyxDQUFDOztJQUVwQjtJQUNBLElBQUksQ0FBQ21CLGtCQUFrQixDQUFDLENBQUM7O0lBRXpCO0lBQ0EsSUFBSSxDQUFDaEQsc0JBQXNCLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUNnRSwwQkFBMEIsQ0FBQyxDQUFDOztJQUVqQztJQUNBLElBQUksQ0FBQ0QsVUFBVSxDQUFDLENBQUM7RUFDckIsQ0FBQztFQUFBbEksTUFBQSxDQUVEb0ksVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUFBLElBQUE5RyxNQUFBO0lBQ1RmLENBQUMsQ0FBQyxJQUFJLENBQUM2QyxPQUFPLENBQUNnRCxlQUFlLENBQUMsQ0FBQ2pGLElBQUksQ0FBQyxDQUFDO0lBRXRDdkMsMkRBQUcsQ0FBQ2tELE9BQU8sQ0FBQ3BELHdEQUFRLENBQUNpRCxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsY0FBYyxFQUFFLFVBQUNNLEdBQUcsRUFBRWUsT0FBTyxFQUFLO01BQ2xFMUMsQ0FBQyxDQUFDZSxNQUFJLENBQUM4QixPQUFPLENBQUNnRCxlQUFlLENBQUMsQ0FBQ25GLElBQUksQ0FBQyxDQUFDO01BRXRDLElBQUlpQixHQUFHLEVBQUU7UUFDTCxNQUFNLElBQUltRyxLQUFLLENBQUNuRyxHQUFHLENBQUM7TUFDeEI7O01BRUE7TUFDQVosTUFBSSxDQUFDMEIsV0FBVyxDQUFDQyxPQUFPLENBQUM7O01BRXpCO01BQ0EsSUFBTXFGLFNBQVMsR0FBRyxJQUFJQyxlQUFlLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7TUFFN0QsSUFBSUosU0FBUyxDQUFDSyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDL0JwSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ1ksSUFBSSxDQUFDLENBQUM7TUFDOUI7TUFFQVosQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNHLElBQUksQ0FBQyxPQUFPLEVBQUU0SCxTQUFTLENBQUMvRixHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7TUFDdEVoQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLE9BQU8sRUFBRTRILFNBQVMsQ0FBQy9GLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUF2QyxNQUFBLENBRUQ0SSxnQkFBZ0IsR0FBaEIsU0FBQUEsZ0JBQWdCQSxDQUFDbkksUUFBUSxFQUFFO0lBQ3ZCLElBQU1vQyxFQUFFLEdBQUdwQyxRQUFRLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7O0lBRTlCO0lBQ0EsSUFBSSxDQUFDd0csbUJBQW1CLEdBQUcyQixxREFBQSxDQUFVLElBQUksQ0FBQzNCLG1CQUFtQixFQUFFckUsRUFBRSxDQUFDO0VBQ3RFLENBQUM7RUFBQTdDLE1BQUEsQ0FFRHNILGtCQUFrQixHQUFsQixTQUFBQSxrQkFBa0JBLENBQUM3RyxRQUFRLEVBQUU7SUFDekIsSUFBTW9DLEVBQUUsR0FBR3BDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QixJQUFNb0ksY0FBYyxHQUFHckksUUFBUSxDQUFDZ0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBRXRELElBQUlxSCxjQUFjLEVBQUU7TUFDaEIsSUFBSSxDQUFDNUIsbUJBQW1CLEdBQUc2QixtREFBQSxDQUFRLElBQUksQ0FBQzdCLG1CQUFtQixFQUFFLENBQUNyRSxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNxRSxtQkFBbUIsR0FBRzJCLHFEQUFBLENBQVUsSUFBSSxDQUFDM0IsbUJBQW1CLEVBQUVyRSxFQUFFLENBQUM7SUFDdEU7RUFDSixDQUFDO0VBQUE3QyxNQUFBLENBRURnSixnQkFBZ0IsR0FBaEIsU0FBQUEsZ0JBQWdCQSxDQUFDdkksUUFBUSxFQUFFO0lBQ3ZCLElBQU1vQyxFQUFFLEdBQUdwQyxRQUFRLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7O0lBRTlCO0lBQ0EsSUFBSSxJQUFJLENBQUN3RyxtQkFBbUIsQ0FBQ3BFLFFBQVEsQ0FBQ0QsRUFBRSxDQUFDLEVBQUU7TUFDdkMsSUFBSSxDQUFDeEIsbUJBQW1CLENBQUNaLFFBQVEsQ0FBQztNQUVsQyxPQUFPLElBQUk7SUFDZjtJQUVBLElBQUksQ0FBQzZHLGtCQUFrQixDQUFDN0csUUFBUSxDQUFDO0lBRWpDLE9BQU8sS0FBSztFQUNoQixDQUFDO0VBQUFULE1BQUEsQ0FFRHFCLG1CQUFtQixHQUFuQixTQUFBQSxtQkFBbUJBLENBQUNaLFFBQVEsRUFBRTtJQUFBLElBQUF3SSxNQUFBO0lBQzFCLElBQU16SCxLQUFLLEdBQUdmLFFBQVEsQ0FBQ2dCLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDcEMsSUFBTUMsUUFBUSxHQUFHaEQsd0RBQVEsQ0FBQ2lELE1BQU0sQ0FBQyxDQUFDO0lBRWxDLElBQUksSUFBSSxDQUFDQyxjQUFjLENBQUNDLFFBQVEsRUFBRTtNQUM5QmpELDJEQUFHLENBQUNrRCxPQUFPLENBQUNKLFFBQVEsRUFBRTtRQUNsQkssUUFBUSxFQUFFLElBQUksQ0FBQ0gsY0FBYyxDQUFDQyxRQUFRO1FBQ3RDRyxNQUFNLEVBQUU7VUFDSkMsUUFBUSxFQUFFVDtRQUNkO01BQ0osQ0FBQyxFQUFFLFVBQUNVLEdBQUcsRUFBRUMsUUFBUSxFQUFLO1FBQ2xCLElBQUlELEdBQUcsRUFBRTtVQUNMLE1BQU0sSUFBSW1HLEtBQUssQ0FBQ25HLEdBQUcsQ0FBQztRQUN4QjtRQUVBK0csTUFBSSxDQUFDN0YsT0FBTyxDQUFDMkQsS0FBSyxDQUFDbUMsSUFBSSxDQUFDLENBQUM7UUFDekJELE1BQUksQ0FBQzdGLE9BQU8sQ0FBQzRELFNBQVMsR0FBRyxJQUFJO1FBQzdCaUMsTUFBSSxDQUFDN0YsT0FBTyxDQUFDMkQsS0FBSyxDQUFDb0MsYUFBYSxDQUFDaEgsUUFBUSxDQUFDO01BQzlDLENBQUMsQ0FBQztJQUNOO0lBRUEsSUFBSSxDQUFDbUYsa0JBQWtCLENBQUM3RyxRQUFRLENBQUM7SUFFakMsT0FBTyxLQUFLO0VBQ2hCLENBQUM7RUFBQVQsTUFBQSxDQUVEaUksZ0JBQWdCLEdBQWhCLFNBQUFBLGdCQUFnQkEsQ0FBQzdILEtBQUssRUFBRTtJQUNwQixJQUFNUSxNQUFNLEdBQUdMLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFDakMsSUFBTTZJLEtBQUssR0FBRzdJLENBQUMsQ0FBQ0gsS0FBSyxDQUFDSSxhQUFhLENBQUMsQ0FBQzZJLEdBQUcsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBRXhEMUksTUFBTSxDQUFDOEIsSUFBSSxDQUFDLFVBQUMwRSxLQUFLLEVBQUVtQyxPQUFPLEVBQUs7TUFDNUIsSUFBTUMsSUFBSSxHQUFHakosQ0FBQyxDQUFDZ0osT0FBTyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUNGLFdBQVcsQ0FBQyxDQUFDO01BQzVDLElBQUlFLElBQUksQ0FBQ0MsT0FBTyxDQUFDTCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUM1QjdJLENBQUMsQ0FBQ2dKLE9BQU8sQ0FBQyxDQUFDcEksSUFBSSxDQUFDLENBQUM7TUFDckIsQ0FBQyxNQUFNO1FBQ0haLENBQUMsQ0FBQ2dKLE9BQU8sQ0FBQyxDQUFDdEksSUFBSSxDQUFDLENBQUM7TUFDckI7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFqQixNQUFBLENBRUQwSixXQUFXLEdBQVgsU0FBQUEsV0FBV0EsQ0FBQ2xDLGdCQUFnQixFQUFFO0lBQzFCLElBQU1sRSxXQUFXLEdBQUdrRSxnQkFBZ0IsQ0FBQy9GLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUVoRTZCLFdBQVcsQ0FBQzRGLElBQUksQ0FBQyxDQUFDO0VBQ3RCLENBQUM7RUFBQWxKLE1BQUEsQ0FFRDJKLGFBQWEsR0FBYixTQUFBQSxhQUFhQSxDQUFDbkMsZ0JBQWdCLEVBQUU7SUFDNUIsSUFBTWxFLFdBQVcsR0FBR2tFLGdCQUFnQixDQUFDL0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBRWhFNkIsV0FBVyxDQUFDZ0MsS0FBSyxDQUFDLENBQUM7RUFDdkIsQ0FBQztFQUFBdEYsTUFBQSxDQUVERSxpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFBLEVBQUc7SUFBQSxJQUFBMEosTUFBQTtJQUNoQixJQUFNQyxpQkFBaUIsR0FBR3RKLENBQUMsQ0FBQyxJQUFJLENBQUM2QyxPQUFPLENBQUNDLHVCQUF1QixDQUFDO0lBRWpFd0csaUJBQWlCLENBQUNuSCxJQUFJLENBQUMsVUFBQzBFLEtBQUssRUFBRUcsZUFBZSxFQUFLO01BQy9DLElBQU1DLGdCQUFnQixHQUFHakgsQ0FBQyxDQUFDZ0gsZUFBZSxDQUFDO01BRTNDcUMsTUFBSSxDQUFDRCxhQUFhLENBQUNuQyxnQkFBZ0IsQ0FBQztJQUN4QyxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUF4SCxNQUFBLENBRUQ4SixlQUFlLEdBQWYsU0FBQUEsZUFBZUEsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUNkLElBQU1GLGlCQUFpQixHQUFHdEosQ0FBQyxDQUFDLElBQUksQ0FBQzZDLE9BQU8sQ0FBQ0MsdUJBQXVCLENBQUM7SUFFakV3RyxpQkFBaUIsQ0FBQ25ILElBQUksQ0FBQyxVQUFDMEUsS0FBSyxFQUFFRyxlQUFlLEVBQUs7TUFDL0MsSUFBTUMsZ0JBQWdCLEdBQUdqSCxDQUFDLENBQUNnSCxlQUFlLENBQUM7TUFFM0N3QyxNQUFJLENBQUNMLFdBQVcsQ0FBQ2xDLGdCQUFnQixDQUFDO0lBQ3RDLENBQUMsQ0FBQztFQUNOOztFQUVBO0VBQUE7RUFBQXhILE1BQUEsQ0FDQW1ILGtCQUFrQixHQUFsQixTQUFBQSxrQkFBa0JBLENBQUEsRUFBRztJQUNqQixJQUFJNUcsQ0FBQyxDQUFDLElBQUksQ0FBQzZDLE9BQU8sQ0FBQ3NELHNCQUFzQixDQUFDLENBQUN0SCxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3JEO0lBQ0o7SUFFQSxJQUFNNEssU0FBUyxHQUFHOUQsZ0RBQUcsQ0FBQyxDQUFDO0lBQ3ZCLElBQU0rRCxTQUFTLEdBQUc7TUFDZEMsYUFBYSxFQUFFLElBQUksQ0FBQzlHLE9BQU8sQ0FBQ29ELHVCQUF1QjtNQUNuRDJELGdCQUFnQixFQUFFLElBQUksQ0FBQy9HLE9BQU8sQ0FBQ3FELDBCQUEwQjtNQUN6RDJELFlBQVksRUFBRSxJQUFJLENBQUNoSCxPQUFPLENBQUNzRCxzQkFBc0I7TUFDakQyRCxnQkFBZ0IsRUFBRSxJQUFJLENBQUNqSCxPQUFPLENBQUN1RCwwQkFBMEI7TUFDekQyRCxnQkFBZ0IsRUFBRSxJQUFJLENBQUNsSCxPQUFPLENBQUN3RDtJQUNuQyxDQUFDO0lBRURYLHlEQUFVLENBQUNzRSx3QkFBd0IsQ0FBQ1AsU0FBUyxFQUFFQyxTQUFTLEVBQUUsSUFBSSxDQUFDN0csT0FBTyxDQUFDb0gsdUJBQXVCLENBQUM7SUFFL0YsSUFBSSxDQUFDQyxtQkFBbUIsR0FBR1QsU0FBUztFQUN4QyxDQUFDO0VBQUFoSyxNQUFBLENBRURtSSwwQkFBMEIsR0FBMUIsU0FBQUEsMEJBQTBCQSxDQUFBLEVBQUc7SUFBQSxJQUFBdUMsTUFBQTtJQUN6QixJQUFNQyxTQUFTLEdBQUdwSyxDQUFDLENBQUMsSUFBSSxDQUFDNkMsT0FBTyxDQUFDbUQsb0JBQW9CLENBQUM7O0lBRXREO0lBQ0FvRSxTQUFTLENBQUNqSSxJQUFJLENBQUMsVUFBQzBFLEtBQUssRUFBRUMsT0FBTyxFQUFLO01BQy9CLElBQU01RyxRQUFRLEdBQUdGLENBQUMsQ0FBQzhHLE9BQU8sQ0FBQztNQUMzQixJQUFNeEUsRUFBRSxHQUFHcEMsUUFBUSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO01BQzlCLElBQU1rSyxjQUFjLEdBQUdGLE1BQUksQ0FBQ3hELG1CQUFtQixDQUFDcEUsUUFBUSxDQUFDRCxFQUFFLENBQUM7TUFFNUQsSUFBSStILGNBQWMsRUFBRTtRQUNoQkYsTUFBSSxDQUFDcEQsa0JBQWtCLENBQUM3RyxRQUFRLENBQUM7TUFDckMsQ0FBQyxNQUFNO1FBQ0hpSyxNQUFJLENBQUM5QixnQkFBZ0IsQ0FBQ25JLFFBQVEsQ0FBQztNQUNuQztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQVQsTUFBQSxDQUVEbUUsc0JBQXNCLEdBQXRCLFNBQUFBLHNCQUFzQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQTBHLE1BQUE7SUFDckIsSUFBTWhCLGlCQUFpQixHQUFHdEosQ0FBQyxDQUFDLElBQUksQ0FBQzZDLE9BQU8sQ0FBQ0MsdUJBQXVCLENBQUM7SUFFakV3RyxpQkFBaUIsQ0FBQ25ILElBQUksQ0FBQyxVQUFDMEUsS0FBSyxFQUFFRyxlQUFlLEVBQUs7TUFDL0MsSUFBTUMsZ0JBQWdCLEdBQUdqSCxDQUFDLENBQUNnSCxlQUFlLENBQUM7TUFDM0MsSUFBTWpFLFdBQVcsR0FBR2tFLGdCQUFnQixDQUFDL0YsSUFBSSxDQUFDLHFCQUFxQixDQUFDO01BQ2hFLElBQU1vQixFQUFFLEdBQUdTLFdBQVcsQ0FBQ0UsUUFBUTtNQUMvQixJQUFNb0gsY0FBYyxHQUFHQyxNQUFJLENBQUMxSCxlQUFlLENBQUNMLFFBQVEsQ0FBQ0QsRUFBRSxDQUFDO01BRXhELElBQUkrSCxjQUFjLEVBQUU7UUFDaEJDLE1BQUksQ0FBQ2xCLGFBQWEsQ0FBQ25DLGdCQUFnQixDQUFDO01BQ3hDLENBQUMsTUFBTTtRQUNIcUQsTUFBSSxDQUFDbkIsV0FBVyxDQUFDbEMsZ0JBQWdCLENBQUM7TUFDdEM7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUF4SCxNQUFBLENBRURrSSxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1Q7SUFDQSxJQUFJLENBQUM0QyxZQUFZLENBQUMsQ0FBQzs7SUFFbkI7SUFDQXZLLENBQUMsQ0FBQ2lJLE1BQU0sQ0FBQyxDQUFDNUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM4QixhQUFhLENBQUM7SUFDL0NuSCxDQUFDLENBQUNpSSxNQUFNLENBQUMsQ0FBQzVDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDbUYsVUFBVSxDQUFDO0lBQ3pDeEssQ0FBQyxDQUFDeUssUUFBUSxDQUFDLENBQUNwRixFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ3hDLE9BQU8sQ0FBQ3lELHNCQUFzQixFQUFFLElBQUksQ0FBQzFHLGFBQWEsQ0FBQztJQUNoRkksQ0FBQyxDQUFDeUssUUFBUSxDQUFDLENBQUNwRixFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDeEMsT0FBTyxDQUFDQyx1QkFBdUIsRUFBRSxJQUFJLENBQUN1RSxpQkFBaUIsQ0FBQztJQUNsR3JILENBQUMsQ0FBQ3lLLFFBQVEsQ0FBQyxDQUFDcEYsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUN4QyxPQUFPLENBQUMwRCx3QkFBd0IsRUFBRSxJQUFJLENBQUNtQixnQkFBZ0IsQ0FBQztJQUNyRjFILENBQUMsQ0FBQyxJQUFJLENBQUM2QyxPQUFPLENBQUNpRCxrQkFBa0IsQ0FBQyxDQUFDVCxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ2lDLFlBQVksQ0FBQzs7SUFFakU7SUFDQWhDLDZEQUFLLENBQUNELEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUNrQyxZQUFZLENBQUM7SUFDMURqQyw2REFBSyxDQUFDRCxFQUFFLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDbUMsYUFBYSxDQUFDO0lBQzdEbEMsNkRBQUssQ0FBQ0QsRUFBRSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQ29DLGNBQWMsQ0FBQztFQUNyRCxDQUFDO0VBQUFoSSxNQUFBLENBRUQ4SyxZQUFZLEdBQVosU0FBQUEsWUFBWUEsQ0FBQSxFQUFHO0lBQ1g7SUFDQXZLLENBQUMsQ0FBQ2lJLE1BQU0sQ0FBQyxDQUFDeUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUN2RCxhQUFhLENBQUM7SUFDaERuSCxDQUFDLENBQUNpSSxNQUFNLENBQUMsQ0FBQ3lDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDRixVQUFVLENBQUM7SUFDMUN4SyxDQUFDLENBQUN5SyxRQUFRLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM3SCxPQUFPLENBQUN5RCxzQkFBc0IsRUFBRSxJQUFJLENBQUMxRyxhQUFhLENBQUM7SUFDakZJLENBQUMsQ0FBQ3lLLFFBQVEsQ0FBQyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDN0gsT0FBTyxDQUFDQyx1QkFBdUIsRUFBRSxJQUFJLENBQUN1RSxpQkFBaUIsQ0FBQztJQUNuR3JILENBQUMsQ0FBQ3lLLFFBQVEsQ0FBQyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzdILE9BQU8sQ0FBQzBELHdCQUF3QixFQUFFLElBQUksQ0FBQ21CLGdCQUFnQixDQUFDO0lBQ3RGMUgsQ0FBQyxDQUFDLElBQUksQ0FBQzZDLE9BQU8sQ0FBQ2lELGtCQUFrQixDQUFDLENBQUM0RSxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ3BELFlBQVksQ0FBQzs7SUFFbEU7SUFDQWhDLDZEQUFLLENBQUNvRixHQUFHLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDbkQsWUFBWSxDQUFDO0lBQzNEakMsNkRBQUssQ0FBQ29GLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUNsRCxhQUFhLENBQUM7SUFDOURsQyw2REFBSyxDQUFDb0YsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQ2pELGNBQWMsQ0FBQztFQUN0RCxDQUFDO0VBQUFoSSxNQUFBLENBRUQ2SCxZQUFZLEdBQVosU0FBQUEsWUFBWUEsQ0FBQ3pILEtBQUssRUFBRTtJQUNoQixJQUFNOEssS0FBSyxHQUFHM0ssQ0FBQyxDQUFDSCxLQUFLLENBQUNJLGFBQWEsQ0FBQztJQUNwQyxJQUFNMkssR0FBRyxHQUFHRCxLQUFLLENBQUN4SyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTlCTixLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCRCxLQUFLLENBQUNnTCxlQUFlLENBQUMsQ0FBQzs7SUFFdkI7SUFDQTFNLHdEQUFRLENBQUMyTSxPQUFPLENBQUNGLEdBQUcsQ0FBQztFQUN6QixDQUFDO0VBQUFuTCxNQUFBLENBRURHLGFBQWEsR0FBYixTQUFBQSxhQUFhQSxDQUFDQyxLQUFLLEVBQUU7SUFDakIsSUFBTUUsT0FBTyxHQUFHQyxDQUFDLENBQUNILEtBQUssQ0FBQ0ksYUFBYSxDQUFDO0lBQ3RDLElBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDRCxPQUFPLENBQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFFeEM7SUFDQU4sS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQzs7SUFFdEI7SUFDQSxJQUFJLENBQUMySSxnQkFBZ0IsQ0FBQ3ZJLFFBQVEsQ0FBQztFQUNuQyxDQUFDO0VBQUFULE1BQUEsQ0FFRDhILFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFDMUgsS0FBSyxFQUFFSSxhQUFhLEVBQUU7SUFDL0IsSUFBTTBLLEtBQUssR0FBRzNLLENBQUMsQ0FBQ0MsYUFBYSxDQUFDO0lBQzlCLElBQU0ySyxHQUFHLEdBQUdELEtBQUssQ0FBQ3hLLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFOUJOLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFdEI2SyxLQUFLLENBQUNJLFdBQVcsQ0FBQyxhQUFhLENBQUM7O0lBRWhDO0lBQ0E1TSx3REFBUSxDQUFDMk0sT0FBTyxDQUFDRixHQUFHLENBQUM7SUFFckIsSUFBSSxJQUFJLENBQUMvSCxPQUFPLENBQUM0RCxTQUFTLEVBQUU7TUFDeEIsSUFBSSxDQUFDNUQsT0FBTyxDQUFDMkQsS0FBSyxDQUFDekIsS0FBSyxDQUFDLENBQUM7SUFDOUI7RUFDSixDQUFDO0VBQUF0RixNQUFBLENBRURnSSxjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQzVILEtBQUssRUFBRUksYUFBYSxFQUFFO0lBQ2pDLElBQU0ySyxHQUFHLEdBQUdyRixzQ0FBUyxDQUFDMEMsTUFBTSxDQUFDQyxRQUFRLENBQUMrQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ2pELElBQU1DLFdBQVcsR0FBR2xMLENBQUMsQ0FBQ0MsYUFBYSxDQUFDLENBQUNrTCxTQUFTLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBRTNEUixHQUFHLENBQUMvQixLQUFLLENBQUNxQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMxQyxPQUFPTixHQUFHLENBQUMvQixLQUFLLENBQUN3QyxJQUFJOztJQUVyQjtJQUNBLElBQU1DLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDekJDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRixjQUFjLEVBQUVWLEdBQUcsQ0FBQy9CLEtBQUssQ0FBQztJQUV4Q2hKLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFdEIzQix3REFBUSxDQUFDMk0sT0FBTyxDQUFDdkYsdUNBQVUsQ0FBQztNQUFFbUcsUUFBUSxFQUFFZCxHQUFHLENBQUNjLFFBQVE7TUFBRXZELE1BQU0sRUFBRWhLLHdEQUFRLENBQUN3TixnQkFBZ0IsQ0FBQ0wsY0FBYztJQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9HLENBQUM7RUFBQTdMLE1BQUEsQ0FFRCtILGFBQWEsR0FBYixTQUFBQSxhQUFhQSxDQUFDM0gsS0FBSyxFQUFFSSxhQUFhLEVBQUU7SUFDaENKLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQ29LLG1CQUFtQixDQUFDMEIsTUFBTSxDQUFDakcsNENBQUcsQ0FBQ2tHLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7TUFDdkQ7SUFDSjtJQUVBLElBQU1sQixHQUFHLEdBQUdyRixzQ0FBUyxDQUFDMEMsTUFBTSxDQUFDQyxRQUFRLENBQUMrQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ2pELElBQUlDLFdBQVcsR0FBR2EsU0FBUyxDQUFDL0wsQ0FBQyxDQUFDQyxhQUFhLENBQUMsQ0FBQ2tMLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRUYsV0FBVyxHQUFHL00sd0RBQVEsQ0FBQzZOLGdCQUFnQixDQUFDZCxXQUFXLENBQUM7SUFFcEQsS0FBSyxJQUFNZSxHQUFHLElBQUlmLFdBQVcsRUFBRTtNQUMzQixJQUFJQSxXQUFXLENBQUNnQixjQUFjLENBQUNELEdBQUcsQ0FBQyxFQUFFO1FBQ2pDckIsR0FBRyxDQUFDL0IsS0FBSyxDQUFDb0QsR0FBRyxDQUFDLEdBQUdmLFdBQVcsQ0FBQ2UsR0FBRyxDQUFDO01BQ3JDO0lBQ0o7O0lBRUE7SUFDQSxJQUFNWCxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0YsY0FBYyxFQUFFVixHQUFHLENBQUMvQixLQUFLLENBQUM7SUFFeEMxSyx3REFBUSxDQUFDMk0sT0FBTyxDQUFDdkYsdUNBQVUsQ0FBQztNQUFFbUcsUUFBUSxFQUFFZCxHQUFHLENBQUNjLFFBQVE7TUFBRXZELE1BQU0sRUFBRWhLLHdEQUFRLENBQUN3TixnQkFBZ0IsQ0FBQ0wsY0FBYztJQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9HLENBQUM7RUFBQTdMLE1BQUEsQ0FFRDBILGFBQWEsR0FBYixTQUFBQSxhQUFhQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNVLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCLENBQUM7RUFBQXBJLE1BQUEsQ0FFRDRILGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUN4SCxLQUFLLEVBQUU7SUFDckIsSUFBTW9ILGdCQUFnQixHQUFHakgsQ0FBQyxDQUFDSCxLQUFLLENBQUNJLGFBQWEsQ0FBQztJQUMvQyxJQUFNOEMsV0FBVyxHQUFHa0UsZ0JBQWdCLENBQUMvRixJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDaEUsSUFBTW9CLEVBQUUsR0FBR1MsV0FBVyxDQUFDRSxRQUFRO0lBRS9CLElBQUlGLFdBQVcsQ0FBQ0MsV0FBVyxFQUFFO01BQ3pCLElBQUksQ0FBQ0osZUFBZSxHQUFHNEYsbURBQUEsQ0FBUSxJQUFJLENBQUM1RixlQUFlLEVBQUUsQ0FBQ04sRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDTSxlQUFlLEdBQUcwRixxREFBQSxDQUFVLElBQUksQ0FBQzFGLGVBQWUsRUFBRU4sRUFBRSxDQUFDO0lBQzlEO0VBQ0osQ0FBQztFQUFBN0MsTUFBQSxDQUVEK0ssVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUNULElBQUlDLFFBQVEsQ0FBQ3ZDLFFBQVEsQ0FBQ2lFLElBQUksS0FBSyxFQUFFLEVBQUU7SUFFbkNuTSxDQUFDLENBQUNpSSxNQUFNLENBQUMsQ0FBQ3RGLE9BQU8sQ0FBQyxhQUFhLENBQUM7RUFDcEMsQ0FBQztFQUFBLE9BQUF2RSxhQUFBO0FBQUE7QUFHTCxpRUFBZUEsYUFBYSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZiTjtBQUV0QixJQUFNRCxRQUFRLEdBQUc7RUFDYmlELE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFBO0lBQUEsWUFBVzZHLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDd0QsUUFBUSxHQUFHekQsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU07RUFBQSxDQUFFO0VBRXBFMkMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUdGLEdBQUcsRUFBSztJQUNkM0MsTUFBTSxDQUFDbUUsT0FBTyxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU1QixRQUFRLENBQUM2QixLQUFLLEVBQUUxQixHQUFHLENBQUM7SUFDakQ1SyxDQUFDLENBQUNpSSxNQUFNLENBQUMsQ0FBQ3RGLE9BQU8sQ0FBQyxhQUFhLENBQUM7RUFDcEMsQ0FBQztFQUVENEosYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQUczQixHQUFHLEVBQUVuSixNQUFNLEVBQUs7SUFDNUIsSUFBTStLLE1BQU0sR0FBR2pILHNDQUFTLENBQUNxRixHQUFHLEVBQUUsSUFBSSxDQUFDO0lBQ25DLElBQUk2QixLQUFLOztJQUVUO0lBQ0FELE1BQU0sQ0FBQ3JFLE1BQU0sR0FBRyxJQUFJO0lBRXBCLEtBQUtzRSxLQUFLLElBQUloTCxNQUFNLEVBQUU7TUFDbEIsSUFBSUEsTUFBTSxDQUFDeUssY0FBYyxDQUFDTyxLQUFLLENBQUMsRUFBRTtRQUM5QkQsTUFBTSxDQUFDM0QsS0FBSyxDQUFDNEQsS0FBSyxDQUFDLEdBQUdoTCxNQUFNLENBQUNnTCxLQUFLLENBQUM7TUFDdkM7SUFDSjtJQUVBLE9BQU9sSCx1Q0FBVSxDQUFDaUgsTUFBTSxDQUFDO0VBQzdCLENBQUM7RUFFRGIsZ0JBQWdCLEVBQUUsU0FBbEJBLGdCQUFnQkEsQ0FBR2UsU0FBUyxFQUFLO0lBQzdCLElBQUlDLEdBQUcsR0FBRyxFQUFFO0lBQ1osSUFBSVYsR0FBRztJQUNQLEtBQUtBLEdBQUcsSUFBSVMsU0FBUyxFQUFFO01BQ25CLElBQUlBLFNBQVMsQ0FBQ1IsY0FBYyxDQUFDRCxHQUFHLENBQUMsRUFBRTtRQUMvQixJQUFJbE4sS0FBSyxDQUFDNk4sT0FBTyxDQUFDRixTQUFTLENBQUNULEdBQUcsQ0FBQyxDQUFDLEVBQUU7VUFDL0IsSUFBSVksR0FBRztVQUVQLEtBQUtBLEdBQUcsSUFBSUgsU0FBUyxDQUFDVCxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJUyxTQUFTLENBQUNULEdBQUcsQ0FBQyxDQUFDQyxjQUFjLENBQUNXLEdBQUcsQ0FBQyxFQUFFO2NBQ3BDRixHQUFHLFVBQVFWLEdBQUcsU0FBSVMsU0FBUyxDQUFDVCxHQUFHLENBQUMsQ0FBQ1ksR0FBRyxDQUFHO1lBQzNDO1VBQ0o7UUFDSixDQUFDLE1BQU07VUFDSEYsR0FBRyxVQUFRVixHQUFHLFNBQUlTLFNBQVMsQ0FBQ1QsR0FBRyxDQUFHO1FBQ3RDO01BQ0o7SUFDSjtJQUVBLE9BQU9VLEdBQUcsQ0FBQ0csU0FBUyxDQUFDLENBQUMsQ0FBQztFQUMzQixDQUFDO0VBRURkLGdCQUFnQixFQUFFLFNBQWxCQSxnQkFBZ0JBLENBQUdVLFNBQVMsRUFBSztJQUM3QixJQUFNakwsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVqQixLQUFLLElBQUk0QixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdxSixTQUFTLENBQUM3TixNQUFNLEVBQUV3RSxDQUFDLEVBQUUsRUFBRTtNQUN2QyxJQUFNMEosSUFBSSxHQUFHTCxTQUFTLENBQUNySixDQUFDLENBQUMsQ0FBQytILEtBQUssQ0FBQyxHQUFHLENBQUM7TUFFcEMsSUFBSTJCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSXRMLE1BQU0sRUFBRTtRQUNuQixJQUFJMUMsS0FBSyxDQUFDNk4sT0FBTyxDQUFDbkwsTUFBTSxDQUFDc0wsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUNoQ3RMLE1BQU0sQ0FBQ3NMLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDN0YsSUFBSSxDQUFDNkYsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsTUFBTTtVQUNIdEwsTUFBTSxDQUFDc0wsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ3RMLE1BQU0sQ0FBQ3NMLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQ7TUFDSixDQUFDLE1BQU07UUFDSHRMLE1BQU0sQ0FBQ3NMLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxJQUFJLENBQUMsQ0FBQyxDQUFDO01BQzdCO0lBQ0o7SUFFQSxPQUFPdEwsTUFBTTtFQUNqQjtBQUNKLENBQUM7QUFFRCxpRUFBZXRELFFBQVEsRTs7Ozs7Ozs7OztBQ3JFdkIsZSIsInNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy91cmwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvaWdub3JlZHxDOlxcVXNlcnNcXERvcmFuXFxFeWV2YVxcbm9kZV9tb2R1bGVzXFxvYmplY3QtaW5zcGVjdHwuL3V0aWwuaW5zcGVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi4vLi4vdGhlbWUvY29tbW9uL3V0aWxzL3VybC11dGlscyc7XHJcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4uLy4uL3RoZW1lL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IHsgYW5pbWF0ZUhlaWdodCB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IGdldE5vdGlmaWNhdGlvbiBmcm9tICcuLi9ub3RpZmljYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXlldmFGYWNldGVkU2VhcmNoIGV4dGVuZHMgRmFjZXRlZFNlYXJjaCB7XHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3VwZXJDYWxsYmFjayA9IHRoaXMuY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IHRoaXMucmVmcmVzaFZpZXdDYWxsYmFjaztcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVGYWNldEltYWdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2YgdGhlIGJhc2UgY2xhc3MgdG8gc3RvcCBjb2xsYXBzaW5nIGFsbCBmYWNldHMgaW4gdGhpcyB0aGVtZVxyXG4gICAgICovXHJcbiAgICBjb2xsYXBzZUFsbEZhY2V0cygpIHtcclxuICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XHJcblxyXG4gICAgICAgIGlmICgkdG9nZ2xlLmhhc0NsYXNzKCdfbG9hZGluZycpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICgkdG9nZ2xlLmhhc0NsYXNzKCdfbG9hZGVkJykpIHtcclxuICAgICAgICAgICAgY29uc3QgJGl0ZW1zID0gJG5hdkxpc3QuZmluZCgnW2RhdGEtZmFjZXQtbW9yZS1pdGVtXScpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAkbmF2TGlzdC5oZWlnaHQoKTtcclxuICAgICAgICAgICAgbGV0IG5ld0hlaWdodDtcclxuICAgICAgICAgICAgbGV0IGRvbmVDYjtcclxuXHJcbiAgICAgICAgICAgIGlmICgkdG9nZ2xlLmhhc0NsYXNzKCdfZXhwYW5kZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgJGl0ZW1zLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ19leHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gJG5hdkxpc3QuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAkaXRlbXMuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgZG9uZUNiID0gKCkgPT4gJGl0ZW1zLmhpZGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRpdGVtcy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkdG9nZ2xlLmFkZENsYXNzKCdfZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9ICRuYXZMaXN0LmhlaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhbmltYXRlSGVpZ2h0KCRuYXZMaXN0LCBoZWlnaHQsIG5ld0hlaWdodCwgbnVsbCwgZG9uZUNiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkdG9nZ2xlLmFkZENsYXNzKCdfbG9hZGluZycpO1xyXG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QsICR0b2dnbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRpbmcgbW9yZSBmYWNldCByZXN1bHRzLlxyXG4gICAgICpcclxuICAgICAqIE92ZXJyaWRkZW4gdGhlIGZ1bmN0aW9uIHRvIGFwcGVuZCBtb3JlIGZhY2V0IHJlc3VsdHMgdG8gdGhlIGxpc3QgaW5zdGVhZCBvZiBzaG93aW5nIGEgbW9kYWxcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG5hdkxpc3RcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkdG9nZ2xlXHJcbiAgICAgKi9cclxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QsICR0b2dnbGUpIHtcclxuICAgICAgICBpZiAoISR0b2dnbGUpIHJldHVybiBzdXBlci5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZ2V0Tm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xyXG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XHJcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnX2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uZXJyb3IoZXJyLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAkbmF2TGlzdC5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nSWRzID0gJG5hdkxpc3QuZmluZCgnW2RhdGEtZmFjZXRlZC1zZWFyY2gtZmFjZXRdJylcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KCkubWFwKGVsID0+ICQoZWwpLmRhdGEoJ2lkJykpO1xyXG5cclxuICAgICAgICAgICAgICAgICQocmVzcG9uc2UpLmZpbmQoJ1tkYXRhLWZhY2V0LW1vcmUtaXRlbV0nKS5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9ICRlbC5maW5kKCdbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldF0nKS5kYXRhKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4aXN0aW5nSWRzLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbmF2TGlzdC5hcHBlbmQoJGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnX2xvYWRpbmcnKS5hZGRDbGFzcygnX2V4cGFuZGVkIF9sb2FkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSAkbmF2TGlzdC5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlSGVpZ2h0KCRuYXZMaXN0LCBoZWlnaHQsIG5ld0hlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZhY2V0SW1hZ2VzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ19sb2FkaW5nJykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVmlldyhjb250ZW50KSB7XHJcbiAgICAgICAgc3VwZXIucmVmcmVzaFZpZXcoY29udGVudCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGYWNldEltYWdlcygpO1xyXG5cclxuICAgICAgICAkKCdib2R5JykudHJpZ2dlcigncmVmcmVzaFZpZXcuZmFjZXRlZFNlYXJjaCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hWaWV3Q2FsbGJhY2soY29udGVudCkge1xyXG4gICAgICAgIC8vIHN0b3JlIHRoZSBjdXJyZW50IGZhY2V0IGFjY29yZGlvbiBzdGF0ZXNcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5nZXQoKVxyXG4gICAgICAgICAgICAubWFwKGVsID0+ICQoZWwpLmRhdGEoKCdjb2xsYXBzaWJsZUluc3RhbmNlJykpKVxyXG4gICAgICAgICAgICAubWFwKGNvbGxhcHNpYmxlID0+IChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCA/IGNvbGxhcHNpYmxlLnRhcmdldElkIDogbnVsbCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gaWQpO1xyXG5cclxuICAgICAgICBjb25zdCAkdG9nZ2xlcyA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIFtkYXRhLWNvbGxhcHNpYmxlPVwicGFnZS1zaWRlYmFyXCJdJyk7XHJcblxyXG4gICAgICAgIC8vIHRlbXBvcmFyaWx5IGFwcGVuZCB0byBib2R5IHRvIHJlbW92ZSBpdCBmcm9tIHByb2R1Y3QtbGlzdC1jb250YWluZXJcclxuICAgICAgICAkdG9nZ2xlcy5hcHBlbmRUbygnYm9keScpO1xyXG5cclxuICAgICAgICAvLyBjYWxsIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBvbiByZWZyZXNoIHZpZXdcclxuICAgICAgICB0aGlzLnN1cGVyQ2FsbGJhY2soY29udGVudCk7XHJcblxyXG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIG5ldyB0b2dnbGUgYnV0dG9uIGJ5IHRoZSBvbGQgb25lIHRvIGtlZXAgdGhlIG9wZW4gc3RhdGVcclxuICAgICAgICAvLyBhbmQgbm90IGluaXQgY29sbGFwc2libGUgaW5zdGFuY2UgYWdhaW5cclxuICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciBbZGF0YS1jb2xsYXBzaWJsZT1cInBhZ2Utc2lkZWJhclwiXScpLmVhY2goKGksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCAkdG9nZ2xlID0gJHRvZ2dsZXMuZXEoaSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHRvZ2dsZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAkdG9nZ2xlLmh0bWwoJGVsLmh0bWwoKSk7XHJcbiAgICAgICAgICAgICAgICAkZWwucmVwbGFjZVdpdGgoJHRvZ2dsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGFueSBsb25lbHkgdG9nZ2xlIGJ1dHRvblxyXG4gICAgICAgICR0b2dnbGVzLmZpbHRlcigoaSwgZWwpID0+ICQoZWwpLnBhcmVudCgpLmlzKCdib2R5JykpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiB0byBzdG9wIGFuaW1hdGlvbiBvZiBhY2NvcmRpb24gd2hlbiByZXN0b3JpbmcgY29sbGFwc2VkIGZhY2V0c1xyXG4gICAgICovXHJcbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgICRib2R5LmFkZENsYXNzKCdfYW5pbWF0aW9uLW9mZicpO1xyXG5cclxuICAgICAgICBzdXBlci5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XHJcblxyXG4gICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdfYW5pbWF0aW9uLW9mZicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBmYWNldCBpbWFnZXNcclxuICAgICAqL1xyXG4gICAgdXBkYXRlRmFjZXRJbWFnZXMoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtZmFjZXRlZC1zZWFyY2gtZmFjZXQtaW1hZ2VdLCBbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldC1jb2xvcl0nKS5maW5kKCdpbWcnKS5ub3QoJy5fbG9hZGVkJykuZWFjaCgoaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGltZyA9ICQoZWwpO1xyXG4gICAgICAgICAgICAkaW1nLm9uZSgnZXJyb3InLCBldmVudCA9PiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnJlbW92ZSgpKTtcclxuICAgICAgICAgICAgJGltZy5hdHRyKCdzcmMnLCAkaW1nLmRhdGEoJ3NyYycpKTtcclxuICAgICAgICAgICAgJGltZy5hZGRDbGFzcygnbGF6eWxvYWQgX2xvYWRlZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5cbmxldCBpbnN0YW5jZTtcblxuY2xhc3MgTm90aWZpY2F0aW9uIHtcbiAgICB0ZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcGF0aGVtZXNfX25vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGl0ZW1UZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcGF0aGVtZXNfX25vdGlmaWNhdGlvbnMtaXRlbSB7e2NsYXNzTmFtZX19XCI+XG4gICAgICAgICAgICB7eyZpY29ufX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJfY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHt7JmNvbnRlbnR9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7eyZjbG9zZX19XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjbG9zZVRlbXBsYXRlID0gYFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInBhcGF0aGVtZXNfX25vdGlmaWNhdGlvbnMtY2xvc2VcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+Q2xvc2U8L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJG5vdGlmaWNhdGlvbnMgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLnRlbXBsYXRlKSlcbiAgICAgICAgICAgIC5oaWRlKClcbiAgICAgICAgICAgIC5hcHBlbmRUbygnYm9keScpO1xuXG4gICAgICAgIHRoaXMuaGlkZVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGluZm8oY29udGVudCwgaWNvbiwgdGltZW91dCkge1xuICAgICAgICB0aGlzLnNob3coY29udGVudCwgaWNvbiwgdGltZW91dCwgJ19pbmZvJyk7XG4gICAgfVxuXG4gICAgZXJyb3IoY29udGVudCwgaWNvbiwgdGltZW91dCkge1xuICAgICAgICB0aGlzLnNob3coY29udGVudCwgaWNvbiwgdGltZW91dCwgJ19lcnJvcicpO1xuICAgIH1cblxuICAgIHNob3coY29udGVudCwgaWNvbiwgdGltZW91dCA9IDUwMDAsIGNsYXNzTmFtZSA9ICcnKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVUaW1lb3V0KTtcblxuICAgICAgICBjb25zdCBjbG9zZSA9IG11c3RhY2hlLnJlbmRlcih0aGlzLmNsb3NlVGVtcGxhdGUpO1xuICAgICAgICBjb25zdCAkaXRlbSA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMuaXRlbVRlbXBsYXRlLCB7XG4gICAgICAgICAgICBjb250ZW50LCBpY29uLCBjbG9zZSwgY2xhc3NOYW1lLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy4kbm90aWZpY2F0aW9ucy5hcHBlbmQoJGl0ZW0pLnNob3coKTtcbiAgICAgICAgJGl0ZW0uYWRkQ2xhc3MoJ19zaG93aW5nJyk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VGbmMgPSAoKSA9PiB7XG4gICAgICAgICAgICAkaXRlbS5yZW1vdmVDbGFzcygnX3Nob3dpbmcnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICRpdGVtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTm90aWZpY2F0aW9ucygpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoY2xvc2VGbmMsIHRpbWVvdXQpO1xuXG4gICAgICAgICRpdGVtLmZpbmQoJy5wYXBhdGhlbWVzX19ub3RpZmljYXRpb25zLWNsb3NlJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIGNsb3NlRm5jKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZU5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVUaW1lb3V0KTtcblxuICAgICAgICBpZiAodGhpcy4kbm90aWZpY2F0aW9ucy5pcygnOmVtcHR5JykpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRub3RpZmljYXRpb25zLmhpZGUoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IE5vdGlmaWNhdGlvbigpO1xuICAgIH1cbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG4iLCJpbXBvcnQgeyBob29rcywgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XHJcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL3V0aWxzL3VybC11dGlscyc7XHJcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZScsXHJcbiAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlcicsXHJcbiAgICBjbGVhckZhY2V0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC1jbGVhckxpbmsnLFxyXG4gICAgY29tcG9uZW50U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JyxcclxuICAgIGZhY2V0TmF2TGlzdFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3QnLFxyXG4gICAgcHJpY2VSYW5nZUVycm9yU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1pbmxpbmVNZXNzYWdlJyxcclxuICAgIHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0tZmllbGRzZXQnLFxyXG4gICAgcHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtJyxcclxuICAgIHByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yOiAkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA/ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyA6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1wcmljZV9tYXhdJyxcclxuICAgIHByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yOiAkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA/ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyA6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1wcmljZV9taW5dJyxcclxuICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxyXG4gICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxyXG4gICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXHJcbiAgICBtb2RhbE9wZW46IGZhbHNlLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XHJcbiAqL1xyXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyBmb3IgdGhlIGFqYXggcmVxdWVzdHNcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKlxyXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICogICAgICB0ZW1wbGF0ZXM6IHtcclxuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xyXG4gICAgICogICAgIH1cclxuICAgICAqIH07XHJcbiAgICAgKlxyXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XHJcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XHJcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG4gICAgICogfTtcclxuICAgICAqXHJcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XHJcblxyXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXHJcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcclxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ29sbGFwc2UgYWxsIGZhY2V0cyBpZiBpbml0aWFsbHkgaGlkZGVuXHJcbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5jb21wb25lbnRTZWxlY3RvcikuaXMoJzpoaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcclxuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25DbGVhckZhY2V0ID0gdGhpcy5vbkNsZWFyRmFjZXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcclxuICAgICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcclxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xyXG5cclxuICAgICAgICAvLyBSZXN0b3JlIHZpZXcgc3RhdGVcclxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcclxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XHJcblxyXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldygpIHtcclxuICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcclxuXHJcbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlZnJlc2ggcmFuZ2UgdmlldyB3aGVuIHNob3AtYnktcHJpY2UgZW5hYmxlZFxyXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVybFBhcmFtcy5oYXMoJ3NlYXJjaF9xdWVyeScpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucmVzZXQtZmlsdGVycycpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21pblwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWluJykpO1xyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicHJpY2VfbWF4XCJdJykuYXR0cigndmFsdWUnLCB1cmxQYXJhbXMuZ2V0KCdwcmljZV9tYXgnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlXHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcclxuICAgICAgICBjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoJ2hhc01vcmVSZXN1bHRzJyk7XHJcblxyXG4gICAgICAgIGlmIChoYXNNb3JlUmVzdWx0cykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcclxuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xyXG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XHJcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckZhY2V0SXRlbXMoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkaXRlbXMgPSAkKCcubmF2TGlzdC1pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcblxyXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcclxuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xyXG5cclxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kQWxsRmFjZXRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xyXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbm9kKCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xyXG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUVycm9yU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcixcclxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcclxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgVmFsaWRhdG9ycy5zZXRNaW5NYXhQcmljZVZhbGlkYXRpb24odmFsaWRhdG9yLCBzZWxlY3RvcnMsIHRoaXMub3B0aW9ucy52YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcclxuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XHJcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcy5pbmNsdWRlcyhpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gdGhpcy5jb2xsYXBzZWRGYWNldHMuaW5jbHVkZXMoaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICAvLyBDbGVhbi11cFxyXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIC8vIERPTSBldmVudHNcclxuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcclxuICAgICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xyXG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xyXG5cclxuICAgICAgICAvLyBIb29rc1xyXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XHJcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcclxuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZEV2ZW50cygpIHtcclxuICAgICAgICAvLyBET00gZXZlbnRzXHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xyXG4gICAgICAgICQod2luZG93KS5vZmYoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xyXG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcclxuXHJcbiAgICAgICAgLy8gSG9va3NcclxuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcclxuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcclxuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgVVJMXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9nZ2xlQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25GYWNldENsaWNrKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XHJcblxyXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcclxuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XHJcblxyXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxyXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xyXG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKS5zcGxpdCgnJicpO1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHF1ZXJ5UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwucXVlcnlba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxyXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcclxuXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcclxuXHJcbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Qb3BTdGF0ZSgpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCAhPT0gJycpIHJldHVybjtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2V0ZWRTZWFyY2g7XHJcbiIsImltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuY29uc3QgdXJsVXRpbHMgPSB7XG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXG5cbiAgICBnb1RvVXJsOiAodXJsKSA9PiB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH0sXG5cbiAgICByZXBsYWNlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBmb3IgKHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVcmwuZm9ybWF0KHBhcnNlZCk7XG4gICAgfSxcblxuICAgIGJ1aWxkUXVlcnlTdHJpbmc6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBxdWVyeURhdGEpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5RGF0YVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmR4O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobmR4IGluIHF1ZXJ5RGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlEYXRhW2tleV0uaGFzT3duUHJvcGVydHkobmR4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldW25keF19YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XG4gICAgfSxcblxuICAgIHBhcnNlUXVlcnlQYXJhbXM6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBxdWVyeURhdGFbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHRlbXBbMF0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zW3RlbXBbMF1dKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0ucHVzaCh0ZW1wWzFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSBbcGFyYW1zW3RlbXBbMF1dLCB0ZW1wWzFdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IHRlbXBbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmxVdGlscztcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJ1cmxVdGlscyIsIkZhY2V0ZWRTZWFyY2giLCJhcGkiLCJhbmltYXRlSGVpZ2h0IiwiZ2V0Tm90aWZpY2F0aW9uIiwiRXlldmFGYWNldGVkU2VhcmNoIiwiX0ZhY2V0ZWRTZWFyY2giLCJfdGhpcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3VwZXJDYWxsYmFjayIsImNhbGxiYWNrIiwicmVmcmVzaFZpZXdDYWxsYmFjayIsInVwZGF0ZUZhY2V0SW1hZ2VzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJjb2xsYXBzZUFsbEZhY2V0cyIsIm9uVG9nZ2xlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHRvZ2dsZSIsIiQiLCJjdXJyZW50VGFyZ2V0IiwiJG5hdkxpc3QiLCJhdHRyIiwiaGFzQ2xhc3MiLCIkaXRlbXMiLCJmaW5kIiwiaGVpZ2h0IiwibmV3SGVpZ2h0IiwiZG9uZUNiIiwiaGlkZSIsInJlbW92ZUNsYXNzIiwic2hvdyIsImFkZENsYXNzIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsIl90aGlzMiIsIm5vdGlmaWNhdGlvbiIsImZhY2V0IiwiZGF0YSIsImZhY2V0VXJsIiwiZ2V0VXJsIiwicmVxdWVzdE9wdGlvbnMiLCJzaG93TW9yZSIsImdldFBhZ2UiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvciIsInRvU3RyaW5nIiwiZXhpc3RpbmdJZHMiLCJnZXQiLCJtYXAiLCJlbCIsImVhY2giLCJfaSIsIiRlbCIsImlkIiwiaW5jbHVkZXMiLCJhcHBlbmQiLCJyZWZyZXNoVmlldyIsImNvbnRlbnQiLCJ0cmlnZ2VyIiwiY29sbGFwc2VkRmFjZXRzIiwib3B0aW9ucyIsImFjY29yZGlvblRvZ2dsZVNlbGVjdG9yIiwiY29sbGFwc2libGUiLCJpc0NvbGxhcHNlZCIsInRhcmdldElkIiwiZmlsdGVyIiwiJHRvZ2dsZXMiLCJhcHBlbmRUbyIsImkiLCJlcSIsImh0bWwiLCJyZXBsYWNlV2l0aCIsInBhcmVudCIsImlzIiwicmVtb3ZlIiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsIiRib2R5Iiwibm90IiwiJGltZyIsIm9uZSIsImRlZmF1bHQiLCJtdXN0YWNoZSIsImluc3RhbmNlIiwiTm90aWZpY2F0aW9uIiwiaXRlbVRlbXBsYXRlIiwiY2xvc2VUZW1wbGF0ZSIsIiRub3RpZmljYXRpb25zIiwicmVuZGVyIiwiaGlkZVRpbWVvdXQiLCJpbmZvIiwiaWNvbiIsInRpbWVvdXQiLCJjbGFzc05hbWUiLCJjbGVhclRpbWVvdXQiLCJjbG9zZSIsIiRpdGVtIiwiY2xvc2VGbmMiLCJzZXRUaW1lb3V0IiwidXBkYXRlTm90aWZpY2F0aW9ucyIsInRpbWVyIiwib24iLCJob29rcyIsIlVybCIsIm1vZGFsRmFjdG9yeSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlZhbGlkYXRvcnMiLCJub2QiLCJkZWZhdWx0T3B0aW9ucyIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbE9wZW4iLCJfZXh0ZW5kIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImluaXRQcmljZVZhbGlkYXRvciIsImluZGV4IiwibmF2TGlzdCIsImNvbGxhcHNlRmFjZXRJdGVtcyIsImFjY29yZGlvblRvZ2dsZSIsIiRhY2NvcmRpb25Ub2dnbGUiLCJwdXNoIiwib25TdGF0ZUNoYW5nZSIsImJpbmQiLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJvblNvcnRCeVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJ1cGRhdGVWaWV3IiwiRXJyb3IiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImhhcyIsImV4cGFuZEZhY2V0SXRlbXMiLCJfd2l0aG91dCIsImhhc01vcmVSZXN1bHRzIiwiX3VuaW9uIiwidG9nZ2xlRmFjZXRJdGVtcyIsIl90aGlzMyIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwicXVlcnkiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsImVsZW1lbnQiLCJ0ZXh0IiwiaW5kZXhPZiIsImV4cGFuZEZhY2V0IiwiY29sbGFwc2VGYWNldCIsIl90aGlzNCIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwiX3RoaXM1IiwidmFsaWRhdG9yIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIl90aGlzNiIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiX3RoaXM3IiwidW5iaW5kRXZlbnRzIiwib25Qb3BTdGF0ZSIsImRvY3VtZW50Iiwib2ZmIiwiJGxpbmsiLCJ1cmwiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwidG9nZ2xlQ2xhc3MiLCJwYXJzZSIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInNwbGl0IiwicGFnZSIsInVybFF1ZXJ5UGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9ybWF0IiwicGF0aG5hbWUiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJkZWNvZGVVUkkiLCJwYXJzZVF1ZXJ5UGFyYW1zIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJoYXNoIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRpdGxlIiwicmVwbGFjZVBhcmFtcyIsInBhcnNlZCIsInBhcmFtIiwicXVlcnlEYXRhIiwib3V0IiwiaXNBcnJheSIsIm5keCIsInN1YnN0cmluZyIsInRlbXAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==