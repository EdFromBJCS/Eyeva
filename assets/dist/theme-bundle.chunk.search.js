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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jYXRhbG9nLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcclxuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkID09PSAnc29ydCcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ydEJ5U3RhdHVzJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhcnJhbmdlRm9jdXNPblNvcnRCeSgpIHtcclxuICAgICAgICBjb25zdCAkc29ydEJ5U2VsZWN0b3IgPSAkKCdbZGF0YS1zb3J0LWJ5PVwicHJvZHVjdFwiXSAjc29ydCcpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0QnlTdGF0dXMnKSkge1xyXG4gICAgICAgICAgICAkc29ydEJ5U2VsZWN0b3IudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzb3J0QnlTdGF0dXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xyXG5cclxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XHJcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XHJcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4uL3BhcGF0aGVtZXMvZXlldmEvZmFjZXRlZC1zZWFyY2gnOyAvLyBwYXBhdGhlbWVzLWV5ZXZhOiByZXBsYWNlIENvcm5lcnN0b25lJ3MgZmFjZXRlZCBzZWFyY2ggZmVhdHVyZSBieSBQYXBhVGhlbWVzXHJcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcclxuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XHJcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcclxuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCAnanN0cmVlJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5cclxuY29uc3QgbGVmdEFycm93S2V5ID0gMzc7XHJcbmNvbnN0IHJpZ2h0QXJyb3dLZXkgPSAzOTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcclxuICAgIGZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZURhdGEgPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcclxuICAgICAgICAgICAgaWQ6IG5vZGUubWV0YWRhdGEuaWQsXHJcbiAgICAgICAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobm9kZS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBub2RlRGF0YS5zdGF0ZS5vcGVuZWQgPSBub2RlLnN0YXRlID09PSAnb3Blbic7XHJcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZHVjdHMobmF2aWdhdGUgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcclxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKSk7XHJcblxyXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50IHNwYW4nKS5kYXRhKCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gKHNlYXJjaERhdGEuY291bnQgPiAwKSA/IHNlYXJjaERhdGEudXJsIDogdXJsVXRpbHMucmVwbGFjZVBhcmFtcyhzZWFyY2hEYXRhLnVybCwge1xyXG4gICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbnRlbnQobmF2aWdhdGUgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XHJcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKSk7XHJcblxyXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50LWNvdW50IHNwYW4nKS5kYXRhKCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gKHNlYXJjaERhdGEuY291bnQgPiAwKSA/IHNlYXJjaERhdGEudXJsIDogdXJsVXRpbHMucmVwbGFjZVBhcmFtcyhzZWFyY2hEYXRhLnVybCwge1xyXG4gICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVUYWIoJHRhYlRvQWN0aXZhdGUpIHtcclxuICAgICAgICBjb25zdCAkdGFic0NvbGxlY3Rpb24gPSAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLmZpbmQoJ1tyb2xlPVwidGFiXCJdJyk7XHJcblxyXG4gICAgICAgICR0YWJzQ29sbGVjdGlvbi5lYWNoKChpZHgsIHRhYikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkdGFiID0gJCh0YWIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCR0YWIuaXMoJHRhYlRvQWN0aXZhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAkdGFiLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAkdGFiLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHRhYi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xyXG4gICAgICAgICAgICAkdGFiLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYWJDaGFuZ2VXaXRoQXJyb3dzKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBldmVudC53aGljaDtcclxuICAgICAgICBjb25zdCBpc0xlZnRPclJpZ2h0QXJyb3dLZXlkb3duID0gZXZlbnRLZXkgPT09IGxlZnRBcnJvd0tleVxyXG4gICAgICAgICAgICB8fCBldmVudEtleSA9PT0gcmlnaHRBcnJvd0tleTtcclxuICAgICAgICBpZiAoIWlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgJHRhYnNDb2xsZWN0aW9uID0gJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5maW5kKCdbcm9sZT1cInRhYlwiXScpO1xyXG5cclxuICAgICAgICBjb25zdCBpc0FjdGl2ZUVsZW1lbnROb3RUYWIgPSAkdGFic0NvbGxlY3Rpb24uaW5kZXgoJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkgPT09IC0xO1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZUVsZW1lbnROb3RUYWIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgJGFjdGl2ZVRhYiA9ICQoYCMke2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWR9YCk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVGFiSWR4ID0gJHRhYnNDb2xsZWN0aW9uLmluZGV4KCRhY3RpdmVUYWIpO1xyXG4gICAgICAgIGNvbnN0IGxhc3RUYWJJZHggPSAkdGFic0NvbGxlY3Rpb24ubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgbGV0IG5leHRUYWJJZHg7XHJcbiAgICAgICAgc3dpdGNoIChldmVudEtleSkge1xyXG4gICAgICAgIGNhc2UgbGVmdEFycm93S2V5OlxyXG4gICAgICAgICAgICBuZXh0VGFiSWR4ID0gYWN0aXZlVGFiSWR4ID09PSAwID8gbGFzdFRhYklkeCA6IGFjdGl2ZVRhYklkeCAtIDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgcmlnaHRBcnJvd0tleTpcclxuICAgICAgICAgICAgbmV4dFRhYklkeCA9IGFjdGl2ZVRhYklkeCA9PT0gbGFzdFRhYklkeCA/IDAgOiBhY3RpdmVUYWJJZHggKyAxO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJHRhYnNDb2xsZWN0aW9uLmdldChuZXh0VGFiSWR4KSkudHJpZ2dlcignZm9jdXMnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xyXG5cclxuICAgICAgICBjb25zdCAkc2VhcmNoRm9ybSA9ICQoJ1tkYXRhLWFkdmFuY2VkLXNlYXJjaC1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcclxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHRyZWVEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xyXG5cclxuICAgICAgICAvLyBJbml0IGZhY2V0ZWQgc2VhcmNoXHJcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLm9uKCdrZXl1cCcsIHRoaXMub25UYWJDaGFuZ2VXaXRoQXJyb3dzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmluaXRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtKVxyXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5jYXRlZ29yeVRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeVRyZWUoJGNhdGVnb3J5VHJlZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyLmpzdHJlZSgpLmdldF9zZWxlY3RlZCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzZWFyY2hGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjYXRlZ29yeVxcW1xcXVwiXScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGVnb3J5SWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2VhcmNoRm9ybS5hcHBlbmQoaW5wdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRzZWFyY2hSZXN1bHRzTWVzc2FnZSA9ICQoYDxwXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCJcclxuICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICBhcmlhLWxpdmU9XCJwb2xpdGVcIlxyXG4gICAgICAgICAgICA+JHt0aGlzLmNvbnRleHQuc2VhcmNoUmVzdWx0c0NvdW50fTwvcD5gKVxyXG4gICAgICAgICAgICAucHJlcGVuZFRvKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJHNlYXJjaFJlc3VsdHNNZXNzYWdlLnRyaWdnZXIoJ2ZvY3VzJyksIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRyZWVOb2Rlcyhub2RlLCBjYikge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnlJZDogbm9kZS5pZCxcclxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkuZG9uZShkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChkYXRhTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCB0cmVlT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29yZToge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogKG5vZGUsIGNiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUm9vdCBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYih0aGlzLmNhdGVnb3J5VHJlZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyZWVOb2Rlcyhub2RlLCBjYik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoZW1lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hlY2tib3g6IHtcclxuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkY29udGFpbmVyLmpzdHJlZSh0cmVlT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXHJcbiAgICAgICAgY29uc3QgeyBvbk1pblByaWNlRXJyb3IsIG9uTWF4UHJpY2VFcnJvciwgbWluUHJpY2VOb3RFbnRlcmVkLCBtYXhQcmljZU5vdEVudGVyZWQsIG9uSW52YWxpZFByaWNlIH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCAkY29udGVudExpc3RpbmdDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0ICRzZWFyY2hIZWFkaW5nID0gJCgnI3NlYXJjaC1yZXN1bHRzLWhlYWRpbmcnKTtcclxuICAgICAgICBjb25zdCAkc2VhcmNoQ291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCcpO1xyXG4gICAgICAgIGNvbnN0ICRjb250ZW50Q291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCcpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ3NlYXJjaC9wcm9kdWN0LWxpc3RpbmcnLFxyXG4gICAgICAgICAgICAgICAgY29udGVudExpc3Rpbmc6ICdzZWFyY2gvY29udGVudC1saXN0aW5nJyxcclxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnc2VhcmNoL2hlYWRpbmcnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdENvdW50OiAnc2VhcmNoL3Byb2R1Y3QtY291bnQnLFxyXG4gICAgICAgICAgICAgICAgY29udGVudENvdW50OiAnc2VhcmNoL2NvbnRlbnQtY291bnQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93TW9yZTogJ3NlYXJjaC9zaG93LW1vcmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAkc2VhcmNoSGVhZGluZy5odG1sKGNvbnRlbnQuaGVhZGluZyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAodXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5jb250ZW50TGlzdGluZyk7XHJcbiAgICAgICAgICAgICAgICAkY29udGVudENvdW50Lmh0bWwoY29udGVudC5jb250ZW50Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcclxuICAgICAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcclxuICAgICAgICAgICAgICAgICRzZWFyY2hDb3VudC5odG1sKGNvbnRlbnQucHJvZHVjdENvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VmFsaWRhdGlvbigkZm9ybSkge1xyXG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0sXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAkZWxlbWVudC5kYXRhKCdlcnJvck1lc3NhZ2UnKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjaGVjaygpIHtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwidXJsVXRpbHMiLCJVcmwiLCJDYXRhbG9nUGFnZSIsIl9QYWdlTWFuYWdlciIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJhcnJhbmdlRm9jdXNPblNvcnRCeSIsIiRzb3J0QnlTZWxlY3RvciIsIiQiLCJnZXRJdGVtIiwidHJpZ2dlciIsInJlbW92ZUl0ZW0iLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInVybCIsInBhcnNlIiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCJzZXJpYWxpemUiLCJzcGxpdCIsInF1ZXJ5IiwicGFnZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybWF0IiwicGF0aG5hbWUiLCJzZWFyY2giLCJidWlsZFF1ZXJ5U3RyaW5nIiwiZGVmYXVsdCIsImhvb2tzIiwiRmFjZXRlZFNlYXJjaCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJub2QiLCJsZWZ0QXJyb3dLZXkiLCJyaWdodEFycm93S2V5IiwiU2VhcmNoIiwiX0NhdGFsb2dQYWdlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUiLCJub2RlIiwibm9kZURhdGEiLCJ0ZXh0IiwiZGF0YSIsIm1ldGFkYXRhIiwic3RhdGUiLCJzZWxlY3RlZCIsIm9wZW5lZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInB1c2giLCJzaG93UHJvZHVjdHMiLCJuYXZpZ2F0ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsImFjdGl2YXRlVGFiIiwic2VhcmNoRGF0YSIsImNvdW50IiwicmVwbGFjZVBhcmFtcyIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIiR0YWJUb0FjdGl2YXRlIiwiJHRhYnNDb2xsZWN0aW9uIiwiZmluZCIsImVhY2giLCJpZHgiLCJ0YWIiLCIkdGFiIiwiaXMiLCJyZW1vdmVBdHRyIiwiYXR0ciIsIm9uVGFiQ2hhbmdlV2l0aEFycm93cyIsImV2ZW50S2V5Iiwid2hpY2giLCJpc0xlZnRPclJpZ2h0QXJyb3dLZXlkb3duIiwiaXNBY3RpdmVFbGVtZW50Tm90VGFiIiwiaW5kZXgiLCIkYWN0aXZlVGFiIiwiYWN0aXZlVGFiSWR4IiwibGFzdFRhYklkeCIsImxlbmd0aCIsIm5leHRUYWJJZHgiLCJnZXQiLCJvblJlYWR5IiwiX3RoaXMyIiwiJHNlYXJjaEZvcm0iLCIkY2F0ZWdvcnlUcmVlQ29udGFpbmVyIiwidHJlZURhdGEiLCJpbml0RmFjZXRlZFNlYXJjaCIsImJpbmQiLCJvbiIsInNlY3Rpb24iLCJ2YWxpZGF0b3IiLCJpbml0VmFsaWRhdGlvbiIsImJpbmRWYWxpZGF0aW9uIiwiY2F0ZWdvcnlUcmVlIiwiY2F0ZWdvcnlUcmVlRGF0YSIsImNyZWF0ZUNhdGVnb3J5VHJlZSIsInNlbGVjdGVkQ2F0ZWdvcnlJZHMiLCJqc3RyZWUiLCJnZXRfc2VsZWN0ZWQiLCJjaGVjayIsInJlbW92ZSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJjYXRlZ29yeUlkIiwidmFsdWUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiYXBwZW5kIiwiJHNlYXJjaFJlc3VsdHNNZXNzYWdlIiwic2VhcmNoUmVzdWx0c0NvdW50IiwicHJlcGVuZFRvIiwic2V0VGltZW91dCIsImxvYWRUcmVlTm9kZXMiLCJjYiIsIl90aGlzMyIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsImZvcm1hdHRlZFJlc3VsdHMiLCJkYXRhTm9kZSIsIiRjb250YWluZXIiLCJfdGhpczQiLCJ0cmVlT3B0aW9ucyIsImNvcmUiLCJ0aGVtZXMiLCJpY29ucyIsImNoZWNrYm94IiwidGhyZWVfc3RhdGUiLCJwbHVnaW5zIiwiX3RoaXM1IiwiX3RoaXMkY29udGV4dCIsIm9uTWluUHJpY2VFcnJvciIsIm9uTWF4UHJpY2VFcnJvciIsIm1pblByaWNlTm90RW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwiJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyIiwiJHNlYXJjaEhlYWRpbmciLCIkc2VhcmNoQ291bnQiLCIkY29udGVudENvdW50IiwicHJvZHVjdHNQZXJQYWdlIiwic2VhcmNoUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwiY29udGVudExpc3RpbmciLCJzaWRlYmFyIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsImNvbnRlbnRDb3VudCIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIiRmb3JtIiwic3VibWl0IiwidGFwIiwiJGVsZW1lbnQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=