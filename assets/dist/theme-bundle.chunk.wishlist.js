"use strict";
(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["wishlist"],{

/***/ "./assets/js/theme/common/utils/pagination-utils.js"
/*!**********************************************************!*\
  !*** ./assets/js/theme/common/utils/pagination-utils.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wishlistPaginatorHelper: () => (/* binding */ wishlistPaginatorHelper)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var changeWishlistPaginationLinks = function changeWishlistPaginationLinks(wishlistUrl) {
  for (var _len = arguments.length, paginationItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paginationItems[_key - 1] = arguments[_key];
  }
  return $.each(paginationItems, function (_, $item) {
    var paginationLink = $item.children('.pagination-link');
    if ($item.length && !paginationLink.attr('href').includes('page=')) {
      var pageNumber = paginationLink.attr('href');
      paginationLink.attr('href', wishlistUrl + "page=" + pageNumber);
    }
  });
};

/**
 * helps to withdraw differences in structures around the stencil resource pagination
 */
var wishlistPaginatorHelper = function wishlistPaginatorHelper() {
  var $paginationList = $('.pagination-list');
  if (!$paginationList.length) return;
  var $nextItem = $('.pagination-item--next', $paginationList);
  var $prevItem = $('.pagination-item--previous', $paginationList);
  var currentHref = $('[data-pagination-current-page-link]').attr('href');
  var partialPaginationUrl = currentHref.split('page=').shift();
  changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};

/***/ },

/***/ "./assets/js/theme/wishlist.js"
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WishList)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/pagination-utils */ "./assets/js/theme/common/utils/pagination-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var WishList = /*#__PURE__*/function (_PageManager) {
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _this || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  _inheritsLoose(WishList, _PageManager);
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: this.context.enterWishlistNameError
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');
    if ($('[data-pagination-wishlist]').length) {
      (0,_common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__.wishlistPaginatorHelper)();
    }
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7SUFDN0I7SUFFQSxJQUFJZ0QsZ0JBQWdCLENBQUM3RCxNQUFNLEVBQUU7TUFDekIsSUFBSSxDQUFDNEMsNkJBQTZCLENBQUNpQixnQkFBZ0IsQ0FBQztJQUN4RDtJQUVBLElBQUksQ0FBQzFCLHFCQUFxQixDQUFDLENBQUM7RUFDaEMsQ0FBQztFQUFBLE9BQUFYLFFBQUE7QUFBQSxFQW5FaUNGLHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvd2lzaGxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MgPSAod2lzaGxpc3RVcmwsIC4uLnBhZ2luYXRpb25JdGVtcykgPT4gJC5lYWNoKHBhZ2luYXRpb25JdGVtcywgKF8sICRpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uTGluayA9ICRpdGVtLmNoaWxkcmVuKCcucGFnaW5hdGlvbi1saW5rJyk7XHJcblxyXG4gICAgaWYgKCRpdGVtLmxlbmd0aCAmJiAhcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicpLmluY2x1ZGVzKCdwYWdlPScpKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICBwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJywgYCR7d2lzaGxpc3RVcmx9cGFnZT0ke3BhZ2VOdW1iZXJ9YCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIGhlbHBzIHRvIHdpdGhkcmF3IGRpZmZlcmVuY2VzIGluIHN0cnVjdHVyZXMgYXJvdW5kIHRoZSBzdGVuY2lsIHJlc291cmNlIHBhZ2luYXRpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCB3aXNobGlzdFBhZ2luYXRvckhlbHBlciA9ICgpID0+IHtcclxuICAgIGNvbnN0ICRwYWdpbmF0aW9uTGlzdCA9ICQoJy5wYWdpbmF0aW9uLWxpc3QnKTtcclxuXHJcbiAgICBpZiAoISRwYWdpbmF0aW9uTGlzdC5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCAkbmV4dEl0ZW0gPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0JywgJHBhZ2luYXRpb25MaXN0KTtcclxuICAgIGNvbnN0ICRwcmV2SXRlbSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzJywgJHBhZ2luYXRpb25MaXN0KTtcclxuICAgIGNvbnN0IGN1cnJlbnRIcmVmID0gJCgnW2RhdGEtcGFnaW5hdGlvbi1jdXJyZW50LXBhZ2UtbGlua10nKS5hdHRyKCdocmVmJyk7XHJcbiAgICBjb25zdCBwYXJ0aWFsUGFnaW5hdGlvblVybCA9IGN1cnJlbnRIcmVmLnNwbGl0KCdwYWdlPScpLnNoaWZ0KCk7XHJcblxyXG4gICAgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MocGFydGlhbFBhZ2luYXRpb25VcmwsICRwcmV2SXRlbSwgJG5leHRJdGVtKTtcclxufTtcclxuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XHJcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyB3aXNobGlzdFBhZ2luYXRvckhlbHBlciB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMnO1xyXG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXNoTGlzdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2FjY291bnQvYWRkLXdpc2hsaXN0JyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBjb25maXJtIGJveCBiZWZvcmUgZGVsZXRpbmcgYWxsIHdpc2ggbGlzdHNcclxuICAgICAqL1xyXG4gICAgd2lzaGxpc3REZWxldGVDb25maXJtKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3QtZGVsZXRlXScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0odGhpcy5jb250ZXh0Lndpc2hsaXN0RGVsZXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNobGlzdEZvcm0pIHtcclxuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy53aXNobGlzdC1mb3JtIGlucHV0W25hbWU9XCJ3aXNobGlzdG5hbWVcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJXaXNobGlzdE5hbWVFcnJvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgJGFkZFdpc2hsaXN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBjb25zdCAkYWRkV2lzaExpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nKTtcclxuXHJcbiAgICAgICAgaWYgKCQoJ1tkYXRhLXBhZ2luYXRpb24td2lzaGxpc3RdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGFkZFdpc2hMaXN0Rm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaExpc3RGb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud2lzaGxpc3REZWxldGVDb25maXJtKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzIiwid2lzaGxpc3RVcmwiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicGFnaW5hdGlvbkl0ZW1zIiwiQXJyYXkiLCJfa2V5IiwiJCIsImVhY2giLCJfIiwiJGl0ZW0iLCJwYWdpbmF0aW9uTGluayIsImNoaWxkcmVuIiwiYXR0ciIsImluY2x1ZGVzIiwicGFnZU51bWJlciIsIndpc2hsaXN0UGFnaW5hdG9ySGVscGVyIiwiJHBhZ2luYXRpb25MaXN0IiwiJG5leHRJdGVtIiwiJHByZXZJdGVtIiwiY3VycmVudEhyZWYiLCJwYXJ0aWFsUGFnaW5hdGlvblVybCIsInNwbGl0Iiwic2hpZnQiLCJub2QiLCJQYWdlTWFuYWdlciIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJXaXNoTGlzdCIsIl9QYWdlTWFuYWdlciIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJ3aXNobGlzdERlbGV0ZUNvbmZpcm0iLCJfdGhpczIiLCJvbiIsImV2ZW50IiwiY29uZmlybWVkIiwid2luZG93IiwiY29uZmlybSIsIndpc2hsaXN0RGVsZXRlIiwicHJldmVudERlZmF1bHQiLCJyZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbiIsIiRhZGRXaXNobGlzdEZvcm0iLCJfdGhpczMiLCJhZGRXaXNobGlzdFZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInZhbCIsInJlc3VsdCIsImVycm9yTWVzc2FnZSIsImVudGVyV2lzaGxpc3ROYW1lRXJyb3IiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJvblJlYWR5IiwiJGFkZFdpc2hMaXN0Rm9ybSIsImRlZmF1bHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==