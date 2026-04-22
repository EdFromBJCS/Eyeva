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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX2ZhY2V0ZWQtc2VhcmNoX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNJO0FBQ2I7QUFDUjtBQUNLO0FBQUEsSUFFekJLLGtCQUFrQiwwQkFBQUMsY0FBQTtFQUNuQyxTQUFBRCxtQkFBQSxFQUFxQjtJQUFBLElBQUFFLEtBQUE7SUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFOQyxJQUFJLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxHQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO01BQUpGLElBQUksQ0FBQUUsSUFBQSxJQUFBSixTQUFBLENBQUFJLElBQUE7SUFBQTtJQUNmTixLQUFBLEdBQUFELGNBQUEsQ0FBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULGNBQUEsU0FBQVUsTUFBQSxDQUFTTCxJQUFJLEVBQUM7SUFFZEosS0FBQSxDQUFLVSxhQUFhLEdBQUdWLEtBQUEsQ0FBS1csUUFBUTtJQUNsQ1gsS0FBQSxDQUFLVyxRQUFRLEdBQUdYLEtBQUEsQ0FBS1ksbUJBQW1CO0lBRXhDWixLQUFBLENBQUthLGlCQUFpQixDQUFDLENBQUM7SUFBQyxPQUFBYixLQUFBO0VBQzdCOztFQUVBO0FBQ0o7QUFDQTtFQUZJYyxjQUFBLENBQUFoQixrQkFBQSxFQUFBQyxjQUFBO0VBQUEsSUFBQWdCLE1BQUEsR0FBQWpCLGtCQUFBLENBQUFrQixTQUFBO0VBQUFELE1BQUEsQ0FHQUUsaUJBQWlCLEdBQWpCLFNBQUFBLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2hCO0VBQUEsQ0FDSDtFQUFBRixNQUFBLENBRURHLGFBQWEsR0FBYixTQUFBQSxhQUFhQSxDQUFDQyxLQUFLLEVBQUU7SUFDakJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFdEIsSUFBTUMsT0FBTyxHQUFHQyxDQUFDLENBQUNILEtB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ZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy91cmwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvaWdub3JlZHxDOlxcVXNlcnNcXGRvcmFuXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxHcmFwaGljIERlc2lnblxcQm9iIEpvaG5zb24ncyBDb21wdXRlciBTdHVmZlxcRXlldmFcXEV5ZXZhXFxub2RlX21vZHVsZXNcXG9iamVjdC1pbnNwZWN0fC4vdXRpbC5pbnNwZWN0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1cmxVdGlscyBmcm9tICcuLi8uLi90aGVtZS9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcclxuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi4vLi4vdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgeyBhbmltYXRlSGVpZ2h0IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgZ2V0Tm90aWZpY2F0aW9uIGZyb20gJy4uL25vdGlmaWNhdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeWV2YUZhY2V0ZWRTZWFyY2ggZXh0ZW5kcyBGYWNldGVkU2VhcmNoIHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdXBlckNhbGxiYWNrID0gdGhpcy5jYWxsYmFjaztcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5yZWZyZXNoVmlld0NhbGxiYWNrO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUZhY2V0SW1hZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvdmVycmlkZSB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgYmFzZSBjbGFzcyB0byBzdG9wIGNvbGxhcHNpbmcgYWxsIGZhY2V0cyBpbiB0aGlzIHRoZW1lXHJcbiAgICAgKi9cclxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgIH1cclxuXHJcbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcclxuXHJcbiAgICAgICAgaWYgKCR0b2dnbGUuaGFzQ2xhc3MoJ19sb2FkaW5nJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKCR0b2dnbGUuaGFzQ2xhc3MoJ19sb2FkZWQnKSkge1xyXG4gICAgICAgICAgICBjb25zdCAkaXRlbXMgPSAkbmF2TGlzdC5maW5kKCdbZGF0YS1mYWNldC1tb3JlLWl0ZW1dJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9ICRuYXZMaXN0LmhlaWdodCgpO1xyXG4gICAgICAgICAgICBsZXQgbmV3SGVpZ2h0O1xyXG4gICAgICAgICAgICBsZXQgZG9uZUNiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCR0b2dnbGUuaGFzQ2xhc3MoJ19leHBhbmRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkaXRlbXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnX2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSAkbmF2TGlzdC5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICRpdGVtcy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBkb25lQ2IgPSAoKSA9PiAkaXRlbXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGl0ZW1zLnNob3coKTtcclxuICAgICAgICAgICAgICAgICR0b2dnbGUuYWRkQ2xhc3MoJ19leHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gJG5hdkxpc3QuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGVIZWlnaHQoJG5hdkxpc3QsIGhlaWdodCwgbmV3SGVpZ2h0LCBudWxsLCBkb25lQ2IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICR0b2dnbGUuYWRkQ2xhc3MoJ19sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCwgJHRvZ2dsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZGluZyBtb3JlIGZhY2V0IHJlc3VsdHMuXHJcbiAgICAgKlxyXG4gICAgICogT3ZlcnJpZGRlbiB0aGUgZnVuY3Rpb24gdG8gYXBwZW5kIG1vcmUgZmFjZXQgcmVzdWx0cyB0byB0aGUgbGlzdCBpbnN0ZWFkIG9mIHNob3dpbmcgYSBtb2RhbFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbmF2TGlzdFxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR0b2dnbGVcclxuICAgICAqL1xyXG4gICAgZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCwgJHRvZ2dsZSkge1xyXG4gICAgICAgIGlmICghJHRvZ2dsZSkgcmV0dXJuIHN1cGVyLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xyXG5cclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSBnZXROb3RpZmljYXRpb24oKTtcclxuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XHJcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcclxuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdG9nZ2xlLnJlbW92ZUNsYXNzKCdfbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcihlcnIudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9ICRuYXZMaXN0LmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdJZHMgPSAkbmF2TGlzdC5maW5kKCdbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldF0nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoKS5tYXAoZWwgPT4gJChlbCkuZGF0YSgnaWQnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChyZXNwb25zZSkuZmluZCgnW2RhdGEtZmFjZXQtbW9yZS1pdGVtXScpLmVhY2goKF9pLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gJGVsLmZpbmQoJ1tkYXRhLWZhY2V0ZWQtc2VhcmNoLWZhY2V0XScpLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RpbmdJZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRuYXZMaXN0LmFwcGVuZCgkZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdG9nZ2xlLnJlbW92ZUNsYXNzKCdfbG9hZGluZycpLmFkZENsYXNzKCdfZXhwYW5kZWQgX2xvYWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9ICRuYXZMaXN0LmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFuaW1hdGVIZWlnaHQoJG5hdkxpc3QsIGhlaWdodCwgbmV3SGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmFjZXRJbWFnZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnX2xvYWRpbmcnKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcclxuICAgICAgICBzdXBlci5yZWZyZXNoVmlldyhjb250ZW50KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZhY2V0SW1hZ2VzKCk7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdyZWZyZXNoVmlldy5mYWNldGVkU2VhcmNoJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFZpZXdDYWxsYmFjayhjb250ZW50KSB7XHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIGN1cnJlbnQgZmFjZXQgYWNjb3JkaW9uIHN0YXRlc1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmdldCgpXHJcbiAgICAgICAgICAgIC5tYXAoZWwgPT4gJChlbCkuZGF0YSgoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKSkpXHJcbiAgICAgICAgICAgIC5tYXAoY29sbGFwc2libGUgPT4gKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkID8gY29sbGFwc2libGUudGFyZ2V0SWQgOiBudWxsKSlcclxuICAgICAgICAgICAgLmZpbHRlcihpZCA9PiBpZCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICR0b2dnbGVzID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgW2RhdGEtY29sbGFwc2libGU9XCJwYWdlLXNpZGViYXJcIl0nKTtcclxuXHJcbiAgICAgICAgLy8gdGVtcG9yYXJpbHkgYXBwZW5kIHRvIGJvZHkgdG8gcmVtb3ZlIGl0IGZyb20gcHJvZHVjdC1saXN0LWNvbnRhaW5lclxyXG4gICAgICAgICR0b2dnbGVzLmFwcGVuZFRvKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIG9uIHJlZnJlc2ggdmlld1xyXG4gICAgICAgIHRoaXMuc3VwZXJDYWxsYmFjayhjb250ZW50KTtcclxuXHJcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgbmV3IHRvZ2dsZSBidXR0b24gYnkgdGhlIG9sZCBvbmUgdG8ga2VlcCB0aGUgb3BlbiBzdGF0ZVxyXG4gICAgICAgIC8vIGFuZCBub3QgaW5pdCBjb2xsYXBzaWJsZSBpbnN0YW5jZSBhZ2FpblxyXG4gICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIFtkYXRhLWNvbGxhcHNpYmxlPVwicGFnZS1zaWRlYmFyXCJdJykuZWFjaCgoaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkdG9nZ2xlcy5lcShpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkdG9nZ2xlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICR0b2dnbGUuaHRtbCgkZWwuaHRtbCgpKTtcclxuICAgICAgICAgICAgICAgICRlbC5yZXBsYWNlV2l0aCgkdG9nZ2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgYW55IGxvbmVseSB0b2dnbGUgYnV0dG9uXHJcbiAgICAgICAgJHRvZ2dsZXMuZmlsdGVyKChpLCBlbCkgPT4gJChlbCkucGFyZW50KCkuaXMoJ2JvZHknKSkucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkZSB0aGlzIGZ1bmN0aW9uIHRvIHN0b3AgYW5pbWF0aW9uIG9mIGFjY29yZGlvbiB3aGVuIHJlc3RvcmluZyBjb2xsYXBzZWQgZmFjZXRzXHJcbiAgICAgKi9cclxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XHJcbiAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ19hbmltYXRpb24tb2ZmJyk7XHJcblxyXG4gICAgICAgIHN1cGVyLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcclxuXHJcbiAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ19hbmltYXRpb24tb2ZmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIGZhY2V0IGltYWdlc1xyXG4gICAgICovXHJcbiAgICB1cGRhdGVGYWNldEltYWdlcygpIHtcclxuICAgICAgICAkKCdbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldC1pbWFnZV0sIFtkYXRhLWZhY2V0ZWQtc2VhcmNoLWZhY2V0LWNvbG9yXScpLmZpbmQoJ2ltZycpLm5vdCgnLl9sb2FkZWQnKS5lYWNoKChpLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkaW1nID0gJChlbCk7XHJcbiAgICAgICAgICAgICRpbWcub25lKCdlcnJvcicsIGV2ZW50ID0+ICQoZXZlbnQuY3VycmVudFRhcmdldCkucmVtb3ZlKCkpO1xyXG4gICAgICAgICAgICAkaW1nLmF0dHIoJ3NyYycsICRpbWcuZGF0YSgnc3JjJykpO1xyXG4gICAgICAgICAgICAkaW1nLmFkZENsYXNzKCdsYXp5bG9hZCBfbG9hZGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuXHJcbmxldCBpbnN0YW5jZTtcclxuXHJcbmNsYXNzIE5vdGlmaWNhdGlvbiB7XHJcbiAgICB0ZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9uc1wiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBpdGVtVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcGF0aGVtZXNfX25vdGlmaWNhdGlvbnMtaXRlbSB7e2NsYXNzTmFtZX19XCI+XHJcbiAgICAgICAgICAgIHt7Jmljb259fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIHt7JmNvbnRlbnR9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3smY2xvc2V9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBjbG9zZVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9ucy1jbG9zZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPkNsb3NlPC9zcGFuPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiRub3RpZmljYXRpb25zID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy50ZW1wbGF0ZSkpXHJcbiAgICAgICAgICAgIC5oaWRlKClcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGluZm8oY29udGVudCwgaWNvbiwgdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMuc2hvdyhjb250ZW50LCBpY29uLCB0aW1lb3V0LCAnX2luZm8nKTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihjb250ZW50LCBpY29uLCB0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy5zaG93KGNvbnRlbnQsIGljb24sIHRpbWVvdXQsICdfZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KGNvbnRlbnQsIGljb24sIHRpbWVvdXQgPSA1MDAwLCBjbGFzc05hbWUgPSAnJykge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5jbG9zZVRlbXBsYXRlKTtcclxuICAgICAgICBjb25zdCAkaXRlbSA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMuaXRlbVRlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQsIGljb24sIGNsb3NlLCBjbGFzc05hbWUsXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICB0aGlzLiRub3RpZmljYXRpb25zLmFwcGVuZCgkaXRlbSkuc2hvdygpO1xyXG4gICAgICAgICRpdGVtLmFkZENsYXNzKCdfc2hvd2luZycpO1xyXG5cclxuICAgICAgICBjb25zdCBjbG9zZUZuYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgJGl0ZW0ucmVtb3ZlQ2xhc3MoJ19zaG93aW5nJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU5vdGlmaWNhdGlvbnMoKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoY2xvc2VGbmMsIHRpbWVvdXQpO1xyXG5cclxuICAgICAgICAkaXRlbS5maW5kKCcucGFwYXRoZW1lc19fbm90aWZpY2F0aW9ucy1jbG9zZScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICBjbG9zZUZuYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU5vdGlmaWNhdGlvbnMoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kbm90aWZpY2F0aW9ucy5pcygnOmVtcHR5JykpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbm90aWZpY2F0aW9ucy5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTm90aWZpY2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xyXG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91dGlscy91cmwtdXRpbHMnO1xyXG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcclxuXHJcblxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxyXG4gICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxyXG4gICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcclxuICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXHJcbiAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcclxuICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXHJcbiAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcclxuICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXHJcbiAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPyAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWF4X3ByaWNlXScgOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9cHJpY2VfbWF4XScsXHJcbiAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPyAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScgOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9cHJpY2VfbWluXScsXHJcbiAgICBzaG93TW9yZVRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1jb250ZW50IC50b2dnbGVMaW5rJyxcclxuICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcclxuICAgIG1vZGFsOiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdLFxyXG4gICAgbW9kYWxPcGVuOiBmYWxzZSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxyXG4gKi9cclxuY2xhc3MgRmFjZXRlZFNlYXJjaCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgZmV0Y2hpbmcgdGVtcGxhdGVzXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICpcclxuICAgICAqIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XHJcbiAgICAgKiAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXHJcbiAgICAgKiAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcidcclxuICAgICAqICAgICB9XHJcbiAgICAgKiB9O1xyXG4gICAgICpcclxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xyXG4gICAgICogICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xyXG4gICAgICogICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcclxuICAgICAqIH07XHJcbiAgICAgKlxyXG4gICAgICogbGV0IGZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgdGVtcGxhdGVzRGlkTG9hZCk7XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zLCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xyXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xyXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xyXG5cclxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxyXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XHJcblxyXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xyXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxyXG4gICAgICAgIC8vIE5PVEU6IE5lZWQgdG8gZXhlY3V0ZSBhZnRlciBDb2xsYXBzaWJsZSBnZXRzIGJvb3RzdHJhcHBlZFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxGYWNldHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblRvZ2dsZUNsaWNrID0gdGhpcy5vblRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkZhY2V0Q2xpY2sgPSB0aGlzLm9uRmFjZXRDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJGYWNldEl0ZW1zID0gdGhpcy5maWx0ZXJGYWNldEl0ZW1zLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBtZXRob2RzXHJcbiAgICByZWZyZXNoVmlldyhjb250ZW50KSB7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXHJcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcclxuXHJcbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXHJcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xyXG5cclxuICAgICAgICAvLyBCaW5kIGV2ZW50c1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcoKSB7XHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XHJcblxyXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFZpZXcoY29udGVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHJhbmdlIHZpZXcgd2hlbiBzaG9wLWJ5LXByaWNlIGVuYWJsZWRcclxuICAgICAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1cmxQYXJhbXMuaGFzKCdzZWFyY2hfcXVlcnknKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnJlc2V0LWZpbHRlcnMnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJwcmljZV9taW5cIl0nKS5hdHRyKCd2YWx1ZScsIHVybFBhcmFtcy5nZXQoJ3ByaWNlX21pbicpKTtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21heFwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWF4JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcclxuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZVxyXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcclxuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgY29uc3QgaGFzTW9yZVJlc3VsdHMgPSAkbmF2TGlzdC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpO1xyXG5cclxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIFtpZF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgLy8gVG9nZ2xlIGRlcGVuZGluZyBvbiBgY29sbGFwc2VkYCBmbGFnXHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcy5pbmNsdWRlcyhpZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGZhY2V0ID0gJG5hdkxpc3QuZGF0YSgnZmFjZXQnKTtcclxuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSkge1xyXG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWxPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgJGl0ZW1zID0gJCgnLm5hdkxpc3QtaXRlbScpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAkaXRlbXMuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9ICQoZWxlbWVudCkudGV4dCgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcclxuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xyXG5cclxuICAgICAgICBjb2xsYXBzaWJsZS5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcclxuXHJcbiAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsYXBzZUFsbEZhY2V0cygpIHtcclxuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcclxuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcclxuICAgIGluaXRQcmljZVZhbGlkYXRvcigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5vZCgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHtcclxuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxyXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IsXHJcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcclxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFZhbGlkYXRvcnMuc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uKHZhbGlkYXRvciwgc2VsZWN0b3JzLCB0aGlzLm9wdGlvbnMudmFsaWRhdGlvbkVycm9yTWVzc2FnZXMpO1xyXG5cclxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XHJcbiAgICAgICAgY29uc3QgJG5hdkxpc3RzID0gJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxyXG4gICAgICAgICRuYXZMaXN0cy5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMuaW5jbHVkZXMoaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcclxuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IHRoaXMuY29sbGFwc2VkRmFjZXRzLmluY2x1ZGVzKGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgLy8gQ2xlYW4tdXBcclxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xyXG5cclxuICAgICAgICAvLyBET00gZXZlbnRzXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcclxuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcclxuXHJcbiAgICAgICAgLy8gSG9va3NcclxuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xyXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XHJcbiAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xyXG4gICAgICAgICQod2luZG93KS5vZmYoJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcclxuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XHJcblxyXG4gICAgICAgIC8vIEhvb2tzXHJcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XHJcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XHJcbiAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGVhckZhY2V0KGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFVSTFxyXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcclxuXHJcbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gVG9nZ2xlIHZpc2libGUgaXRlbXNcclxuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmFjZXRDbGljayhldmVudCwgY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChjdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgVVJMXHJcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xyXG5cclxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XHJcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xyXG5cclxuICAgICAgICAvLyBVcmwgb2JqZWN0IGBxdWVyeWAgaXMgbm90IGEgdHJhZGl0aW9uYWwgSmF2YVNjcmlwdCBPYmplY3Qgb24gYWxsIHN5c3RlbXMsIGNsb25lIGl0IGluc3RlYWRcclxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmxRdWVyeVBhcmFtcykgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmFuZ2VTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJpY2VSYW5nZVZhbGlkYXRvci5hcmVBbGwobm9kLmNvbnN0YW50cy5WQUxJRCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcclxuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBkZWNvZGVVUkkoJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKSkuc3BsaXQoJyYnKTtcclxuICAgICAgICBxdWVyeVBhcmFtcyA9IHVybFV0aWxzLnBhcnNlUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBxdWVyeVBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5W2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcmwgb2JqZWN0IGBxdWVyeWAgaXMgbm90IGEgdHJhZGl0aW9uYWwgSmF2YVNjcmlwdCBPYmplY3Qgb24gYWxsIHN5c3RlbXMsIGNsb25lIGl0IGluc3RlYWRcclxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XHJcblxyXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmxRdWVyeVBhcmFtcykgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XHJcblxyXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUG9wU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggIT09ICcnKSByZXR1cm47XHJcblxyXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xyXG4iLCJpbXBvcnQgVXJsIGZyb20gJ3VybCc7XHJcblxyXG5jb25zdCB1cmxVdGlscyA9IHtcclxuICAgIGdldFVybDogKCkgPT4gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH1gLFxyXG5cclxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cmwpO1xyXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZXBsYWNlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcclxuICAgICAgICBsZXQgcGFyYW07XHJcblxyXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXHJcbiAgICAgICAgcGFyc2VkLnNlYXJjaCA9IG51bGw7XHJcblxyXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcclxuICAgIH0sXHJcblxyXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBvdXQgPSAnJztcclxuICAgICAgICBsZXQga2V5O1xyXG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xyXG4gICAgICAgICAgICBpZiAocXVlcnlEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5RGF0YVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobmR4IGluIHF1ZXJ5RGF0YVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke2tleX09JHtxdWVyeURhdGFba2V5XVtuZHhdfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXQuc3Vic3RyaW5nKDEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwYXJzZVF1ZXJ5UGFyYW1zOiAocXVlcnlEYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBxdWVyeURhdGFbaV0uc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZW1wWzBdIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zW3RlbXBbMF1dKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXS5wdXNoKHRlbXBbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSBbcGFyYW1zW3RlbXBbMF1dLCB0ZW1wWzFdXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IHRlbXBbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbXM7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXJsVXRpbHM7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJ1cmxVdGlscyIsIkZhY2V0ZWRTZWFyY2giLCJhcGkiLCJhbmltYXRlSGVpZ2h0IiwiZ2V0Tm90aWZpY2F0aW9uIiwiRXlldmFGYWNldGVkU2VhcmNoIiwiX0ZhY2V0ZWRTZWFyY2giLCJfdGhpcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3VwZXJDYWxsYmFjayIsImNhbGxiYWNrIiwicmVmcmVzaFZpZXdDYWxsYmFjayIsInVwZGF0ZUZhY2V0SW1hZ2VzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJjb2xsYXBzZUFsbEZhY2V0cyIsIm9uVG9nZ2xlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHRvZ2dsZSIsIiQiLCJjdXJyZW50VGFyZ2V0IiwiJG5hdkxpc3QiLCJhdHRyIiwiaGFzQ2xhc3MiLCIkaXRlbXMiLCJmaW5kIiwiaGVpZ2h0IiwibmV3SGVpZ2h0IiwiZG9uZUNiIiwiaGlkZSIsInJlbW92ZUNsYXNzIiwic2hvdyIsImFkZENsYXNzIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsIl90aGlzMiIsIm5vdGlmaWNhdGlvbiIsImZhY2V0IiwiZGF0YSIsImZhY2V0VXJsIiwiZ2V0VXJsIiwicmVxdWVzdE9wdGlvbnMiLCJzaG93TW9yZSIsImdldFBhZ2UiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvciIsInRvU3RyaW5nIiwiZXhpc3RpbmdJZHMiLCJnZXQiLCJtYXAiLCJlbCIsImVhY2giLCJfaSIsIiRlbCIsImlkIiwiaW5jbHVkZXMiLCJhcHBlbmQiLCJyZWZyZXNoVmlldyIsImNvbnRlbnQiLCJ0cmlnZ2VyIiwiY29sbGFwc2VkRmFjZXRzIiwib3B0aW9ucyIsImFjY29yZGlvblRvZ2dsZVNlbGVjdG9yIiwiY29sbGFwc2libGUiLCJpc0NvbGxhcHNlZCIsInRhcmdldElkIiwiZmlsdGVyIiwiJHRvZ2dsZXMiLCJhcHBlbmRUbyIsImkiLCJlcSIsImh0bWwiLCJyZXBsYWNlV2l0aCIsInBhcmVudCIsImlzIiwicmVtb3ZlIiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsIiRib2R5Iiwibm90IiwiJGltZyIsIm9uZSIsImRlZmF1bHQiLCJtdXN0YWNoZSIsImluc3RhbmNlIiwiTm90aWZpY2F0aW9uIiwiaXRlbVRlbXBsYXRlIiwiY2xvc2VUZW1wbGF0ZSIsIiRub3RpZmljYXRpb25zIiwicmVuZGVyIiwiaGlkZVRpbWVvdXQiLCJpbmZvIiwiaWNvbiIsInRpbWVvdXQiLCJjbGFzc05hbWUiLCJjbGVhclRpbWVvdXQiLCJjbG9zZSIsIiRpdGVtIiwiY2xvc2VGbmMiLCJzZXRUaW1lb3V0IiwidXBkYXRlTm90aWZpY2F0aW9ucyIsInRpbWVyIiwib24iLCJob29rcyIsIlVybCIsIm1vZGFsRmFjdG9yeSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlZhbGlkYXRvcnMiLCJub2QiLCJkZWZhdWx0T3B0aW9ucyIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbE9wZW4iLCJfZXh0ZW5kIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImluaXRQcmljZVZhbGlkYXRvciIsImluZGV4IiwibmF2TGlzdCIsImNvbGxhcHNlRmFjZXRJdGVtcyIsImFjY29yZGlvblRvZ2dsZSIsIiRhY2NvcmRpb25Ub2dnbGUiLCJwdXNoIiwib25TdGF0ZUNoYW5nZSIsImJpbmQiLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJvblNvcnRCeVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJ1cGRhdGVWaWV3IiwiRXJyb3IiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImhhcyIsImV4cGFuZEZhY2V0SXRlbXMiLCJfd2l0aG91dCIsImhhc01vcmVSZXN1bHRzIiwiX3VuaW9uIiwidG9nZ2xlRmFjZXRJdGVtcyIsIl90aGlzMyIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwicXVlcnkiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsImVsZW1lbnQiLCJ0ZXh0IiwiaW5kZXhPZiIsImV4cGFuZEZhY2V0IiwiY29sbGFwc2VGYWNldCIsIl90aGlzNCIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwiX3RoaXM1IiwidmFsaWRhdG9yIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIl90aGlzNiIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiX3RoaXM3IiwidW5iaW5kRXZlbnRzIiwib25Qb3BTdGF0ZSIsImRvY3VtZW50Iiwib2ZmIiwiJGxpbmsiLCJ1cmwiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwidG9nZ2xlQ2xhc3MiLCJwYXJzZSIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInNwbGl0IiwicGFnZSIsInVybFF1ZXJ5UGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9ybWF0IiwicGF0aG5hbWUiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJkZWNvZGVVUkkiLCJwYXJzZVF1ZXJ5UGFyYW1zIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJoYXNoIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRpdGxlIiwicmVwbGFjZVBhcmFtcyIsInBhcnNlZCIsInBhcmFtIiwicXVlcnlEYXRhIiwib3V0IiwiaXNBcnJheSIsIm5keCIsInN1YnN0cmluZyIsInRlbXAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==