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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX2ZhY2V0ZWQtc2VhcmNoX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNJO0FBQ2I7QUFDUjtBQUNLO0FBQUEsSUFFekJLLGtCQUFrQiwwQkFBQUMsY0FBQTtFQUNuQyxTQUFBRCxtQkFBQSxFQUFxQjtJQUFBLElBQUFFLEtBQUE7SUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFOQyxJQUFJLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxHQUFBSyxJQUFBLE1BQUFBLElBQUEsR0FBQUwsSUFBQSxFQUFBSyxJQUFBO01BQUpGLElBQUksQ0FBQUUsSUFBQSxJQUFBSixTQUFBLENBQUFJLElBQUE7SUFBQTtJQUNmTixLQUFBLEdBQUFELGNBQUEsQ0FBQVEsSUFBQSxDQUFBQyxLQUFBLENBQUFULGNBQUEsU0FBQVUsTUFBQSxDQUFTTCxJQUFJLEVBQUM7SUFFZEosS0FBQSxDQUFLVSxhQUFhLEdBQUdWLEtBQUEsQ0FBS1csUUFBUTtJQUNsQ1gsS0FBQSxDQUFLVyxRQUFRLEdBQUdYLEtBQUEsQ0FBS1ksbUJBQW1CO0lBRXhDWixLQUFBLENBQUthLGlCQUFpQixDQUFDLENBQUM7SUFBQyxPQUFBYixLQUFBO0VBQzdCOztFQUVBO0FBQ0o7QUFDQTtFQUZJYyxjQUFBLENBQUFoQixrQkFBQSxFQUFBQyxjQUFBO0VBQUEsSUFBQWdCLE1BQUEsR0FBQWpCLGtCQUFBLENBQUFrQixTQUFBO0VBQUFELE1BQUEsQ0FHQUUsaUJBQWlCLEdBQWpCLFNBQUFBLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2hCO0VBQUEsQ0FDSDtFQUFBRixNQUFBLENBRURHLGFBQWEsR0FBYixTQUFBQSxhQUFhQSxDQUFDQyxLQUFLLEVBQUU7SUFDakJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFdEIsSUFBTUMsT0FBTyxHQUFHQyxDQUFDLENBQUNILEtB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ZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy91cmwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvaWdub3JlZHxDOlxcVXNlcnNcXERvcmFuXFxFeWV2YVxcbm9kZV9tb2R1bGVzXFxvYmplY3QtaW5zcGVjdHwuL3V0aWwuaW5zcGVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi4vLi4vdGhlbWUvY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuLi8uLi90aGVtZS9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgYW5pbWF0ZUhlaWdodCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBnZXROb3RpZmljYXRpb24gZnJvbSAnLi4vbm90aWZpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXlldmFGYWNldGVkU2VhcmNoIGV4dGVuZHMgRmFjZXRlZFNlYXJjaCB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcblxuICAgICAgICB0aGlzLnN1cGVyQ2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5yZWZyZXNoVmlld0NhbGxiYWNrO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRmFjZXRJbWFnZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvdmVycmlkZSB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgYmFzZSBjbGFzcyB0byBzdG9wIGNvbGxhcHNpbmcgYWxsIGZhY2V0cyBpbiB0aGlzIHRoZW1lXG4gICAgICovXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICAgICAgaWYgKCR0b2dnbGUuaGFzQ2xhc3MoJ19sb2FkaW5nJykpIHJldHVybjtcblxuICAgICAgICBpZiAoJHRvZ2dsZS5oYXNDbGFzcygnX2xvYWRlZCcpKSB7XG4gICAgICAgICAgICBjb25zdCAkaXRlbXMgPSAkbmF2TGlzdC5maW5kKCdbZGF0YS1mYWNldC1tb3JlLWl0ZW1dJyk7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAkbmF2TGlzdC5oZWlnaHQoKTtcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgZG9uZUNiO1xuXG4gICAgICAgICAgICBpZiAoJHRvZ2dsZS5oYXNDbGFzcygnX2V4cGFuZGVkJykpIHtcbiAgICAgICAgICAgICAgICAkaXRlbXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ19leHBhbmRlZCcpO1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9ICRuYXZMaXN0LmhlaWdodCgpO1xuICAgICAgICAgICAgICAgICRpdGVtcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgZG9uZUNiID0gKCkgPT4gJGl0ZW1zLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGl0ZW1zLnNob3coKTtcbiAgICAgICAgICAgICAgICAkdG9nZ2xlLmFkZENsYXNzKCdfZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSAkbmF2TGlzdC5oZWlnaHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYW5pbWF0ZUhlaWdodCgkbmF2TGlzdCwgaGVpZ2h0LCBuZXdIZWlnaHQsIG51bGwsIGRvbmVDYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdG9nZ2xlLmFkZENsYXNzKCdfbG9hZGluZycpO1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0LCAkdG9nZ2xlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRpbmcgbW9yZSBmYWNldCByZXN1bHRzLlxuICAgICAqXG4gICAgICogT3ZlcnJpZGRlbiB0aGUgZnVuY3Rpb24gdG8gYXBwZW5kIG1vcmUgZmFjZXQgcmVzdWx0cyB0byB0aGUgbGlzdCBpbnN0ZWFkIG9mIHNob3dpbmcgYSBtb2RhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRuYXZMaXN0XG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR0b2dnbGVcbiAgICAgKi9cbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0LCAkdG9nZ2xlKSB7XG4gICAgICAgIGlmICghJHRvZ2dsZSkgcmV0dXJuIHN1cGVyLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGdldE5vdGlmaWNhdGlvbigpO1xuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ19sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5lcnJvcihlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAkbmF2TGlzdC5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ0lkcyA9ICRuYXZMaXN0LmZpbmQoJ1tkYXRhLWZhY2V0ZWQtc2VhcmNoLWZhY2V0XScpXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoKS5tYXAoZWwgPT4gJChlbCkuZGF0YSgnaWQnKSk7XG5cbiAgICAgICAgICAgICAgICAkKHJlc3BvbnNlKS5maW5kKCdbZGF0YS1mYWNldC1tb3JlLWl0ZW1dJykuZWFjaCgoX2ksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9ICRlbC5maW5kKCdbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldF0nKS5kYXRhKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RpbmdJZHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmF2TGlzdC5hcHBlbmQoJGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ19sb2FkaW5nJykuYWRkQ2xhc3MoJ19leHBhbmRlZCBfbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9ICRuYXZMaXN0LmhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgYW5pbWF0ZUhlaWdodCgkbmF2TGlzdCwgaGVpZ2h0LCBuZXdIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmFjZXRJbWFnZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRvZ2dsZS5yZW1vdmVDbGFzcygnX2xvYWRpbmcnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZyZXNoVmlldyhjb250ZW50KSB7XG4gICAgICAgIHN1cGVyLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZhY2V0SW1hZ2VzKCk7XG5cbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3JlZnJlc2hWaWV3LmZhY2V0ZWRTZWFyY2gnKTtcbiAgICB9XG5cbiAgICByZWZyZXNoVmlld0NhbGxiYWNrKGNvbnRlbnQpIHtcbiAgICAgICAgLy8gc3RvcmUgdGhlIGN1cnJlbnQgZmFjZXQgYWNjb3JkaW9uIHN0YXRlc1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5nZXQoKVxuICAgICAgICAgICAgLm1hcChlbCA9PiAkKGVsKS5kYXRhKCgnY29sbGFwc2libGVJbnN0YW5jZScpKSlcbiAgICAgICAgICAgIC5tYXAoY29sbGFwc2libGUgPT4gKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkID8gY29sbGFwc2libGUudGFyZ2V0SWQgOiBudWxsKSlcbiAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gaWQpO1xuXG4gICAgICAgIGNvbnN0ICR0b2dnbGVzID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgW2RhdGEtY29sbGFwc2libGU9XCJwYWdlLXNpZGViYXJcIl0nKTtcblxuICAgICAgICAvLyB0ZW1wb3JhcmlseSBhcHBlbmQgdG8gYm9keSB0byByZW1vdmUgaXQgZnJvbSBwcm9kdWN0LWxpc3QtY29udGFpbmVyXG4gICAgICAgICR0b2dnbGVzLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgICAgLy8gY2FsbCB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgb24gcmVmcmVzaCB2aWV3XG4gICAgICAgIHRoaXMuc3VwZXJDYWxsYmFjayhjb250ZW50KTtcblxuICAgICAgICAvLyByZXBsYWNlIHRoZSBuZXcgdG9nZ2xlIGJ1dHRvbiBieSB0aGUgb2xkIG9uZSB0byBrZWVwIHRoZSBvcGVuIHN0YXRlXG4gICAgICAgIC8vIGFuZCBub3QgaW5pdCBjb2xsYXBzaWJsZSBpbnN0YW5jZSBhZ2FpblxuICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciBbZGF0YS1jb2xsYXBzaWJsZT1cInBhZ2Utc2lkZWJhclwiXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkdG9nZ2xlcy5lcShpKTtcblxuICAgICAgICAgICAgaWYgKCR0b2dnbGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICR0b2dnbGUuaHRtbCgkZWwuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICAkZWwucmVwbGFjZVdpdGgoJHRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlbW92ZSBhbnkgbG9uZWx5IHRvZ2dsZSBidXR0b25cbiAgICAgICAgJHRvZ2dsZXMuZmlsdGVyKChpLCBlbCkgPT4gJChlbCkucGFyZW50KCkuaXMoJ2JvZHknKSkucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiB0byBzdG9wIGFuaW1hdGlvbiBvZiBhY2NvcmRpb24gd2hlbiByZXN0b3JpbmcgY29sbGFwc2VkIGZhY2V0c1xuICAgICAqL1xuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAkYm9keS5hZGRDbGFzcygnX2FuaW1hdGlvbi1vZmYnKTtcblxuICAgICAgICBzdXBlci5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XG5cbiAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ19hbmltYXRpb24tb2ZmJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBmYWNldCBpbWFnZXNcbiAgICAgKi9cbiAgICB1cGRhdGVGYWNldEltYWdlcygpIHtcbiAgICAgICAgJCgnW2RhdGEtZmFjZXRlZC1zZWFyY2gtZmFjZXQtaW1hZ2VdLCBbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldC1jb2xvcl0nKS5maW5kKCdpbWcnKS5ub3QoJy5fbG9hZGVkJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbWcgPSAkKGVsKTtcbiAgICAgICAgICAgICRpbWcub25lKCdlcnJvcicsIGV2ZW50ID0+ICQoZXZlbnQuY3VycmVudFRhcmdldCkucmVtb3ZlKCkpO1xuICAgICAgICAgICAgJGltZy5hdHRyKCdzcmMnLCAkaW1nLmRhdGEoJ3NyYycpKTtcbiAgICAgICAgICAgICRpbWcuYWRkQ2xhc3MoJ2xhenlsb2FkIF9sb2FkZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcblxubGV0IGluc3RhbmNlO1xuXG5jbGFzcyBOb3RpZmljYXRpb24ge1xuICAgIHRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9uc1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgaXRlbVRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9ucy1pdGVtIHt7Y2xhc3NOYW1lfX1cIj5cbiAgICAgICAgICAgIHt7Jmljb259fVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3smY29udGVudH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt7JmNsb3NlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNsb3NlVGVtcGxhdGUgPSBgXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicGFwYXRoZW1lc19fbm90aWZpY2F0aW9ucy1jbG9zZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5DbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24teG1hcmstbGFyZ2VcIj48L3VzZT48L3N2Zz48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIGA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kbm90aWZpY2F0aW9ucyA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMudGVtcGxhdGUpKVxuICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgICAgdGhpcy5oaWRlVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5mbyhjb250ZW50LCBpY29uLCB0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuc2hvdyhjb250ZW50LCBpY29uLCB0aW1lb3V0LCAnX2luZm8nKTtcbiAgICB9XG5cbiAgICBlcnJvcihjb250ZW50LCBpY29uLCB0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuc2hvdyhjb250ZW50LCBpY29uLCB0aW1lb3V0LCAnX2Vycm9yJyk7XG4gICAgfVxuXG4gICAgc2hvdyhjb250ZW50LCBpY29uLCB0aW1lb3V0ID0gNTAwMCwgY2xhc3NOYW1lID0gJycpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuY2xvc2VUZW1wbGF0ZSk7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5pdGVtVGVtcGxhdGUsIHtcbiAgICAgICAgICAgIGNvbnRlbnQsIGljb24sIGNsb3NlLCBjbGFzc05hbWUsXG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiRub3RpZmljYXRpb25zLmFwcGVuZCgkaXRlbSkuc2hvdygpO1xuICAgICAgICAkaXRlbS5hZGRDbGFzcygnX3Nob3dpbmcnKTtcblxuICAgICAgICBjb25zdCBjbG9zZUZuYyA9ICgpID0+IHtcbiAgICAgICAgICAgICRpdGVtLnJlbW92ZUNsYXNzKCdfc2hvd2luZycpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJGl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOb3RpZmljYXRpb25zKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChjbG9zZUZuYywgdGltZW91dCk7XG5cbiAgICAgICAgJGl0ZW0uZmluZCgnLnBhcGF0aGVtZXNfX25vdGlmaWNhdGlvbnMtY2xvc2UnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgY2xvc2VGbmMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTm90aWZpY2F0aW9ucygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXQpO1xuXG4gICAgICAgIGlmICh0aGlzLiRub3RpZmljYXRpb25zLmlzKCc6ZW1wdHknKSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5vdGlmaWNhdGlvbnMuaGlkZSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgTm90aWZpY2F0aW9uKCk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcclxuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXRpbHMvdXJsLXV0aWxzJztcclxuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xyXG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29sbGFwc2libGUnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi91dGlscy9mb3JtLXV0aWxzJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XHJcblxyXG5cclxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tbmF2aWdhdGlvbiwgI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtdG9nZ2xlJyxcclxuICAgIGJsb2NrZXJTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5ibG9ja2VyJyxcclxuICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXHJcbiAgICBjb21wb25lbnRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnLFxyXG4gICAgZmFjZXROYXZMaXN0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAubmF2TGlzdCcsXHJcbiAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxyXG4gICAgcHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldCcsXHJcbiAgICBwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0nLFxyXG4gICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID8gJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nIDogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPXByaWNlX21heF0nLFxyXG4gICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID8gJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nIDogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPXByaWNlX21pbl0nLFxyXG4gICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXHJcbiAgICBmYWNldGVkU2VhcmNoRmlsdGVySXRlbXM6ICcjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dCcsXHJcbiAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcclxuICAgIG1vZGFsT3BlbjogZmFsc2UsXHJcbn07XHJcblxyXG4vKipcclxuICogRmFjZXRlZCBzZWFyY2ggdmlldyBjb21wb25lbnRcclxuICovXHJcbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBDb25maWd1cmFibGUgb3B0aW9uc1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqXHJcbiAgICAgKiBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgKiAgICAgIHRlbXBsYXRlczoge1xyXG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxyXG4gICAgICogICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInXHJcbiAgICAgKiAgICAgfVxyXG4gICAgICogfTtcclxuICAgICAqXHJcbiAgICAgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcclxuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcclxuICAgICAqICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XHJcbiAgICAgKiB9O1xyXG4gICAgICpcclxuICAgICAqIGxldCBmYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIHRlbXBsYXRlc0RpZExvYWQpO1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcclxuICAgICAgICAvLyBQcml2YXRlIHByb3BlcnRpZXNcclxuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcclxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xyXG5cclxuICAgICAgICAvLyBTaG93IGxpbWl0ZWQgaXRlbXMgYnkgZGVmYXVsdFxyXG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkKG5hdkxpc3QpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTWFyayBpbml0aWFsbHkgY29sbGFwc2VkIGFjY29yZGlvbnNcclxuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5wdXNoKGNvbGxhcHNpYmxlLnRhcmdldElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cclxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gT2JzZXJ2ZSB1c2VyIGV2ZW50c1xyXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25BY2NvcmRpb25Ub2dnbGUgPSB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmFuZ2VTdWJtaXQgPSB0aGlzLm9uUmFuZ2VTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xyXG4gICAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xyXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xyXG5cclxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxyXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XHJcblxyXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxyXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xyXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKTtcclxuXHJcbiAgICAgICAgLy8gQmluZCBldmVudHNcclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWV3KCkge1xyXG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xyXG5cclxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmxVdGlscy5nZXRVcmwoKSwgdGhpcy5yZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVmcmVzaCByYW5nZSB2aWV3IHdoZW4gc2hvcC1ieS1wcmljZSBlbmFibGVkXHJcbiAgICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodXJsUGFyYW1zLmhhcygnc2VhcmNoX3F1ZXJ5JykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5yZXNldC1maWx0ZXJzJykuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicHJpY2VfbWluXCJdJykuYXR0cigndmFsdWUnLCB1cmxQYXJhbXMuZ2V0KCdwcmljZV9taW4nKSk7XHJcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJwcmljZV9tYXhcIl0nKS5hdHRyKCd2YWx1ZScsIHVybFBhcmFtcy5nZXQoJ3ByaWNlX21heCcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmVcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcclxuXHJcbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcclxuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xyXG4gICAgICAgIGlmICh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcclxuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XHJcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcclxuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcclxuXHJcbiAgICAgICAgY29sbGFwc2libGUub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XHJcblxyXG4gICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXHJcbiAgICBpbml0UHJpY2VWYWxpZGF0b3IoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcclxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxyXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycywgdGhpcy5vcHRpb25zLnZhbGlkYXRpb25FcnJvck1lc3NhZ2VzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xyXG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcclxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLmluY2x1ZGVzKGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlZEZhY2V0cy5pbmNsdWRlcyhpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIC8vIENsZWFuLXVwXHJcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xyXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xyXG4gICAgICAgICQod2luZG93KS5vbigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XHJcblxyXG4gICAgICAgIC8vIEhvb2tzXHJcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcclxuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xyXG4gICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIC8vIERPTSBldmVudHNcclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XHJcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xyXG5cclxuICAgICAgICAvLyBIb29rc1xyXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xyXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xyXG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXHJcbiAgICAgICAgdGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgICBjb25zdCAkbGluayA9ICQoY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIFVSTFxyXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcclxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcclxuXHJcbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xyXG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcclxuXHJcbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXHJcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KCcmJyk7XHJcbiAgICAgICAgcXVlcnlQYXJhbXMgPSB1cmxVdGlscy5wYXJzZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHVybC5xdWVyeVtrZXldID0gcXVlcnlQYXJhbXNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXHJcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xyXG5cclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN0YXRlQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWNjb3JkaW9uVG9nZ2xlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcclxuICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xyXG5cclxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblBvcFN0YXRlKCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoICE9PSAnJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjZXRlZFNlYXJjaDtcclxuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV1bbmR4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxuXG4gICAgcGFyc2VRdWVyeVBhcmFtczogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHF1ZXJ5RGF0YVtpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFswXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNbdGVtcFswXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXS5wdXNoKHRlbXBbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IFtwYXJhbXNbdGVtcFswXV0sIHRlbXBbMV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gdGVtcFsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbInVybFV0aWxzIiwiRmFjZXRlZFNlYXJjaCIsImFwaSIsImFuaW1hdGVIZWlnaHQiLCJnZXROb3RpZmljYXRpb24iLCJFeWV2YUZhY2V0ZWRTZWFyY2giLCJfRmFjZXRlZFNlYXJjaCIsIl90aGlzIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdXBlckNhbGxiYWNrIiwiY2FsbGJhY2siLCJyZWZyZXNoVmlld0NhbGxiYWNrIiwidXBkYXRlRmFjZXRJbWFnZXMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsImNvbGxhcHNlQWxsRmFjZXRzIiwib25Ub2dnbGVDbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkdG9nZ2xlIiwiJCIsImN1cnJlbnRUYXJnZXQiLCIkbmF2TGlzdCIsImF0dHIiLCJoYXNDbGFzcyIsIiRpdGVtcyIsImZpbmQiLCJoZWlnaHQiLCJuZXdIZWlnaHQiLCJkb25lQ2IiLCJoaWRlIiwicmVtb3ZlQ2xhc3MiLCJzaG93IiwiYWRkQ2xhc3MiLCJnZXRNb3JlRmFjZXRSZXN1bHRzIiwiX3RoaXMyIiwibm90aWZpY2F0aW9uIiwiZmFjZXQiLCJkYXRhIiwiZmFjZXRVcmwiLCJnZXRVcmwiLCJyZXF1ZXN0T3B0aW9ucyIsInNob3dNb3JlIiwiZ2V0UGFnZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJlcnIiLCJyZXNwb25zZSIsImVycm9yIiwidG9TdHJpbmciLCJleGlzdGluZ0lkcyIsImdldCIsIm1hcCIsImVsIiwiZWFjaCIsIl9pIiwiJGVsIiwiaWQiLCJpbmNsdWRlcyIsImFwcGVuZCIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInRyaWdnZXIiLCJjb2xsYXBzZWRGYWNldHMiLCJvcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJjb2xsYXBzaWJsZSIsImlzQ29sbGFwc2VkIiwidGFyZ2V0SWQiLCJmaWx0ZXIiLCIkdG9nZ2xlcyIsImFwcGVuZFRvIiwiaSIsImVxIiwiaHRtbCIsInJlcGxhY2VXaXRoIiwicGFyZW50IiwiaXMiLCJyZW1vdmUiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRzIiwiJGJvZHkiLCJub3QiLCIkaW1nIiwib25lIiwiZGVmYXVsdCIsIm11c3RhY2hlIiwiaW5zdGFuY2UiLCJOb3RpZmljYXRpb24iLCJpdGVtVGVtcGxhdGUiLCJjbG9zZVRlbXBsYXRlIiwiJG5vdGlmaWNhdGlvbnMiLCJyZW5kZXIiLCJoaWRlVGltZW91dCIsImluZm8iLCJpY29uIiwidGltZW91dCIsImNsYXNzTmFtZSIsImNsZWFyVGltZW91dCIsImNsb3NlIiwiJGl0ZW0iLCJjbG9zZUZuYyIsInNldFRpbWVvdXQiLCJ1cGRhdGVOb3RpZmljYXRpb25zIiwidGltZXIiLCJvbiIsImhvb2tzIiwiVXJsIiwibW9kYWxGYWN0b3J5IiwiY29sbGFwc2libGVGYWN0b3J5IiwiVmFsaWRhdG9ycyIsIm5vZCIsImRlZmF1bHRPcHRpb25zIiwiYmxvY2tlclNlbGVjdG9yIiwiY2xlYXJGYWNldFNlbGVjdG9yIiwiY29tcG9uZW50U2VsZWN0b3IiLCJmYWNldE5hdkxpc3RTZWxlY3RvciIsInByaWNlUmFuZ2VFcnJvclNlbGVjdG9yIiwicHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IiLCJwcmljZVJhbmdlRm9ybVNlbGVjdG9yIiwicHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IiLCJwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvciIsInNob3dNb3JlVG9nZ2xlU2VsZWN0b3IiLCJmYWNldGVkU2VhcmNoRmlsdGVySXRlbXMiLCJtb2RhbCIsIm1vZGFsT3BlbiIsIl9leHRlbmQiLCJjb2xsYXBzZWRGYWNldEl0ZW1zIiwiaW5pdFByaWNlVmFsaWRhdG9yIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsInB1c2giLCJvblN0YXRlQ2hhbmdlIiwiYmluZCIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsIm9uU29ydEJ5U3VibWl0IiwiZmlsdGVyRmFjZXRJdGVtcyIsImJpbmRFdmVudHMiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsInVwZGF0ZVZpZXciLCJFcnJvciIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiaGFzIiwiZXhwYW5kRmFjZXRJdGVtcyIsIl93aXRob3V0IiwiaGFzTW9yZVJlc3VsdHMiLCJfdW5pb24iLCJ0b2dnbGVGYWNldEl0ZW1zIiwiX3RoaXMzIiwib3BlbiIsInVwZGF0ZUNvbnRlbnQiLCJxdWVyeSIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiX3RoaXM0IiwiJGFjY29yZGlvblRvZ2dsZXMiLCJleHBhbmRBbGxGYWNldHMiLCJfdGhpczUiLCJ2YWxpZGF0b3IiLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwiX3RoaXM2IiwiJG5hdkxpc3RzIiwic2hvdWxkQ29sbGFwc2UiLCJfdGhpczciLCJ1bmJpbmRFdmVudHMiLCJvblBvcFN0YXRlIiwiZG9jdW1lbnQiLCJvZmYiLCIkbGluayIsInVybCIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCJ0b2dnbGVDbGFzcyIsInBhcnNlIiwiaHJlZiIsInF1ZXJ5UGFyYW1zIiwic2VyaWFsaXplIiwic3BsaXQiLCJwYWdlIiwidXJsUXVlcnlQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JtYXQiLCJwYXRobmFtZSIsImJ1aWxkUXVlcnlTdHJpbmciLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsInBhcnNlUXVlcnlQYXJhbXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc2giLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwidGl0bGUiLCJyZXBsYWNlUGFyYW1zIiwicGFyc2VkIiwicGFyYW0iLCJxdWVyeURhdGEiLCJvdXQiLCJpc0FycmF5IiwibmR4Iiwic3Vic3RyaW5nIiwidGVtcCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9