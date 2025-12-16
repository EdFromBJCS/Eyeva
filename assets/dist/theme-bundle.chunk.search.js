"use strict";
(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["search"],{

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

/***/ "./assets/js/theme/search.js"
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _papathemes_eyeva_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../papathemes/eyeva/faceted-search */ "./assets/js/papathemes/eyeva/faceted-search.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


 // papathemes-eyeva: replace Cornerstone's faceted search feature by PapaThemes






var leftArrowKey = 37;
var rightArrowKey = 39;
var Search = /*#__PURE__*/function (_CatalogPage) {
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Search, _CatalogPage);
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$productListingContainer.removeClass('u-hidden');
    this.$facetedSearchContainer.removeClass('u-hidden');
    this.$contentResultsContainer.addClass('u-hidden');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-product-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$contentResultsContainer.removeClass('u-hidden');
    this.$productListingContainer.addClass('u-hidden');
    this.$facetedSearchContainer.addClass('u-hidden');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-content-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };
  _proto.activateTab = function activateTab($tabToActivate) {
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    $tabsCollection.each(function (idx, tab) {
      var $tab = $(tab);
      if ($tab.is($tabToActivate)) {
        $tab.removeAttr('tabindex');
        $tab.attr('aria-selected', true);
        return;
      }
      $tab.attr('tabindex', '-1');
      $tab.attr('aria-selected', false);
    });
  };
  _proto.onTabChangeWithArrows = function onTabChangeWithArrows(event) {
    var eventKey = event.which;
    var isLeftOrRightArrowKeydown = eventKey === leftArrowKey || eventKey === rightArrowKey;
    if (!isLeftOrRightArrowKeydown) return;
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    var isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
    if (isActiveElementNotTab) return;
    var $activeTab = $("#" + document.activeElement.id);
    var activeTabIdx = $tabsCollection.index($activeTab);
    var lastTabIdx = $tabsCollection.length - 1;
    var nextTabIdx;
    switch (eventKey) {
      case leftArrowKey:
        nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
        break;
      case rightArrowKey:
        nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
        break;
      default:
        break;
    }
    $($tabsCollection.get(nextTabIdx)).trigger('focus').trigger('click');
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    this.arrangeFocusOnSortBy();
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_6__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    var $searchResultsMessage = $("<p\n            class=\"aria-description--hidden\"\n            tabindex=\"-1\"\n            role=\"status\"\n            aria-live=\"polite\"\n            >" + this.context.searchResultsCount + "</p>").prependTo('body');
    setTimeout(function () {
      return $searchResultsMessage.trigger('focus');
    }, 100);
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    // eslint-disable-next-line object-curly-newline
    var _this$context = this.context,
      onMinPriceError = _this$context.onMinPriceError,
      onMaxPriceError = _this$context.onMaxPriceError,
      minPriceNotEntered = _this$context.minPriceNotEntered,
      maxPriceNotEntered = _this$context.maxPriceNotEntered,
      onInvalidPrice = _this$context.onInvalidPrice;
    var $productListingContainer = $('#product-listing-container');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _papathemes_eyeva_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);
        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        _this5.showProducts(false);
      }
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
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_8__["default"])({
      submit: $form,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jYXRhbG9nLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkID09PSAnc29ydCcpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvcnRCeVN0YXR1cycsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhcnJhbmdlRm9jdXNPblNvcnRCeSgpIHtcbiAgICAgICAgY29uc3QgJHNvcnRCeVNlbGVjdG9yID0gJCgnW2RhdGEtc29ydC1ieT1cInByb2R1Y3RcIl0gI3NvcnQnKTtcblxuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0QnlTdGF0dXMnKSkge1xuICAgICAgICAgICAgJHNvcnRCeVNlbGVjdG9yLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NvcnRCeVN0YXR1cycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuLi9wYXBhdGhlbWVzL2V5ZXZhL2ZhY2V0ZWQtc2VhcmNoJzsgLy8gcGFwYXRoZW1lcy1leWV2YTogcmVwbGFjZSBDb3JuZXJzdG9uZSdzIGZhY2V0ZWQgc2VhcmNoIGZlYXR1cmUgYnkgUGFwYVRoZW1lc1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCAnanN0cmVlJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcblxuY29uc3QgbGVmdEFycm93S2V5ID0gMzc7XG5jb25zdCByaWdodEFycm93S2V5ID0gMzk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzKG5hdmlnYXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKSk7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50IHNwYW4nKS5kYXRhKCk7XG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBzaG93Q29udGVudChuYXZpZ2F0ZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKCQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykpO1xuXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCBzcGFuJykuZGF0YSgpO1xuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICB9KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGVUYWIoJHRhYlRvQWN0aXZhdGUpIHtcbiAgICAgICAgY29uc3QgJHRhYnNDb2xsZWN0aW9uID0gJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5maW5kKCdbcm9sZT1cInRhYlwiXScpO1xuXG4gICAgICAgICR0YWJzQ29sbGVjdGlvbi5lYWNoKChpZHgsIHRhYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhYiA9ICQodGFiKTtcblxuICAgICAgICAgICAgaWYgKCR0YWIuaXMoJHRhYlRvQWN0aXZhdGUpKSB7XG4gICAgICAgICAgICAgICAgJHRhYi5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgICR0YWIuYXR0cignYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHRhYi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgJHRhYi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRhYkNoYW5nZVdpdGhBcnJvd3MoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBldmVudC53aGljaDtcbiAgICAgICAgY29uc3QgaXNMZWZ0T3JSaWdodEFycm93S2V5ZG93biA9IGV2ZW50S2V5ID09PSBsZWZ0QXJyb3dLZXlcbiAgICAgICAgICAgIHx8IGV2ZW50S2V5ID09PSByaWdodEFycm93S2V5O1xuICAgICAgICBpZiAoIWlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24pIHJldHVybjtcblxuICAgICAgICBjb25zdCAkdGFic0NvbGxlY3Rpb24gPSAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLmZpbmQoJ1tyb2xlPVwidGFiXCJdJyk7XG5cbiAgICAgICAgY29uc3QgaXNBY3RpdmVFbGVtZW50Tm90VGFiID0gJHRhYnNDb2xsZWN0aW9uLmluZGV4KCQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpID09PSAtMTtcbiAgICAgICAgaWYgKGlzQWN0aXZlRWxlbWVudE5vdFRhYikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0ICRhY3RpdmVUYWIgPSAkKGAjJHtkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkfWApO1xuICAgICAgICBjb25zdCBhY3RpdmVUYWJJZHggPSAkdGFic0NvbGxlY3Rpb24uaW5kZXgoJGFjdGl2ZVRhYik7XG4gICAgICAgIGNvbnN0IGxhc3RUYWJJZHggPSAkdGFic0NvbGxlY3Rpb24ubGVuZ3RoIC0gMTtcblxuICAgICAgICBsZXQgbmV4dFRhYklkeDtcbiAgICAgICAgc3dpdGNoIChldmVudEtleSkge1xuICAgICAgICBjYXNlIGxlZnRBcnJvd0tleTpcbiAgICAgICAgICAgIG5leHRUYWJJZHggPSBhY3RpdmVUYWJJZHggPT09IDAgPyBsYXN0VGFiSWR4IDogYWN0aXZlVGFiSWR4IC0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHJpZ2h0QXJyb3dLZXk6XG4gICAgICAgICAgICBuZXh0VGFiSWR4ID0gYWN0aXZlVGFiSWR4ID09PSBsYXN0VGFiSWR4ID8gMCA6IGFjdGl2ZVRhYklkeCArIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAkKCR0YWJzQ29sbGVjdGlvbi5nZXQobmV4dFRhYklkeCkpLnRyaWdnZXIoJ2ZvY3VzJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLmFycmFuZ2VGb2N1c09uU29ydEJ5KCk7XG5cbiAgICAgICAgY29uc3QgJHNlYXJjaEZvcm0gPSAkKCdbZGF0YS1hZHZhbmNlZC1zZWFyY2gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGNhdGVnb3J5VHJlZUNvbnRhaW5lciA9ICRzZWFyY2hGb3JtLmZpbmQoJ1tkYXRhLXNlYXJjaC1jYXRlZ29yeS10cmVlXScpO1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCB0cmVlRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcblxuICAgICAgICAvLyBJbml0IGZhY2V0ZWQgc2VhcmNoXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLm9uKCdrZXl1cCcsIHRoaXMub25UYWJDaGFuZ2VXaXRoQXJyb3dzKTtcblxuICAgICAgICBpZiAodGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCgnbGkucHJvZHVjdCcpLmxlbmd0aCA9PT0gMCB8fCB1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmNhdGVnb3J5VHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xuXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgJHNlYXJjaFJlc3VsdHNNZXNzYWdlID0gJChgPHBcbiAgICAgICAgICAgIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIlxuICAgICAgICAgICAgPiR7dGhpcy5jb250ZXh0LnNlYXJjaFJlc3VsdHNDb3VudH08L3A+YClcbiAgICAgICAgICAgIC5wcmVwZW5kVG8oJ2JvZHknKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICRzZWFyY2hSZXN1bHRzTWVzc2FnZS50cmlnZ2VyKCdmb2N1cycpLCAxMDApO1xuICAgIH1cblxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xuICAgICAgICAgICAgY29yZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbiAgICAgICAgY29uc3QgeyBvbk1pblByaWNlRXJyb3IsIG9uTWF4UHJpY2VFcnJvciwgbWluUHJpY2VOb3RFbnRlcmVkLCBtYXhQcmljZU5vdEVudGVyZWQsIG9uSW52YWxpZFByaWNlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50Q291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBjb250ZW50TGlzdGluZzogJ3NlYXJjaC9jb250ZW50LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICAgICAgY29udGVudENvdW50OiAnc2VhcmNoL2NvbnRlbnQtY291bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5jb250ZW50TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgICAgICRzZWFyY2hDb3VudC5odG1sKGNvbnRlbnQucHJvZHVjdENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwidXJsVXRpbHMiLCJVcmwiLCJDYXRhbG9nUGFnZSIsIl9QYWdlTWFuYWdlciIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJhcnJhbmdlRm9jdXNPblNvcnRCeSIsIiRzb3J0QnlTZWxlY3RvciIsIiQiLCJnZXRJdGVtIiwidHJpZ2dlciIsInJlbW92ZUl0ZW0iLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInVybCIsInBhcnNlIiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCJzZXJpYWxpemUiLCJzcGxpdCIsInF1ZXJ5IiwicGFnZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybWF0IiwicGF0aG5hbWUiLCJzZWFyY2giLCJidWlsZFF1ZXJ5U3RyaW5nIiwiZGVmYXVsdCIsImhvb2tzIiwiRmFjZXRlZFNlYXJjaCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJub2QiLCJsZWZ0QXJyb3dLZXkiLCJyaWdodEFycm93S2V5IiwiU2VhcmNoIiwiX0NhdGFsb2dQYWdlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUiLCJub2RlIiwibm9kZURhdGEiLCJ0ZXh0IiwiZGF0YSIsIm1ldGFkYXRhIiwic3RhdGUiLCJzZWxlY3RlZCIsIm9wZW5lZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInB1c2giLCJzaG93UHJvZHVjdHMiLCJuYXZpZ2F0ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsImFjdGl2YXRlVGFiIiwic2VhcmNoRGF0YSIsImNvdW50IiwicmVwbGFjZVBhcmFtcyIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIiR0YWJUb0FjdGl2YXRlIiwiJHRhYnNDb2xsZWN0aW9uIiwiZmluZCIsImVhY2giLCJpZHgiLCJ0YWIiLCIkdGFiIiwiaXMiLCJyZW1vdmVBdHRyIiwiYXR0ciIsIm9uVGFiQ2hhbmdlV2l0aEFycm93cyIsImV2ZW50S2V5Iiwid2hpY2giLCJpc0xlZnRPclJpZ2h0QXJyb3dLZXlkb3duIiwiaXNBY3RpdmVFbGVtZW50Tm90VGFiIiwiaW5kZXgiLCIkYWN0aXZlVGFiIiwiYWN0aXZlVGFiSWR4IiwibGFzdFRhYklkeCIsImxlbmd0aCIsIm5leHRUYWJJZHgiLCJnZXQiLCJvblJlYWR5IiwiX3RoaXMyIiwiJHNlYXJjaEZvcm0iLCIkY2F0ZWdvcnlUcmVlQ29udGFpbmVyIiwidHJlZURhdGEiLCJpbml0RmFjZXRlZFNlYXJjaCIsImJpbmQiLCJvbiIsInNlY3Rpb24iLCJ2YWxpZGF0b3IiLCJpbml0VmFsaWRhdGlvbiIsImJpbmRWYWxpZGF0aW9uIiwiY2F0ZWdvcnlUcmVlIiwiY2F0ZWdvcnlUcmVlRGF0YSIsImNyZWF0ZUNhdGVnb3J5VHJlZSIsInNlbGVjdGVkQ2F0ZWdvcnlJZHMiLCJqc3RyZWUiLCJnZXRfc2VsZWN0ZWQiLCJjaGVjayIsInJlbW92ZSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJjYXRlZ29yeUlkIiwidmFsdWUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiYXBwZW5kIiwiJHNlYXJjaFJlc3VsdHNNZXNzYWdlIiwic2VhcmNoUmVzdWx0c0NvdW50IiwicHJlcGVuZFRvIiwic2V0VGltZW91dCIsImxvYWRUcmVlTm9kZXMiLCJjYiIsIl90aGlzMyIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsImZvcm1hdHRlZFJlc3VsdHMiLCJkYXRhTm9kZSIsIiRjb250YWluZXIiLCJfdGhpczQiLCJ0cmVlT3B0aW9ucyIsImNvcmUiLCJ0aGVtZXMiLCJpY29ucyIsImNoZWNrYm94IiwidGhyZWVfc3RhdGUiLCJwbHVnaW5zIiwiX3RoaXM1IiwiX3RoaXMkY29udGV4dCIsIm9uTWluUHJpY2VFcnJvciIsIm9uTWF4UHJpY2VFcnJvciIsIm1pblByaWNlTm90RW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwiJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyIiwiJHNlYXJjaEhlYWRpbmciLCIkc2VhcmNoQ291bnQiLCIkY29udGVudENvdW50IiwicHJvZHVjdHNQZXJQYWdlIiwic2VhcmNoUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwiY29udGVudExpc3RpbmciLCJzaWRlYmFyIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsImNvbnRlbnRDb3VudCIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIiRmb3JtIiwic3VibWl0IiwidGFwIiwiJGVsZW1lbnQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=