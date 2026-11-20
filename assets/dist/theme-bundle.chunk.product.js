"use strict";
(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["product"],{

/***/ "./assets/js/papathemes/eyeva/reviews.js"
/*!***********************************************!*\
  !*** ./assets/js/papathemes/eyeva/reviews.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reviews)
/* harmony export */ });
/* harmony import */ var _theme_product_reviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/product/reviews */ "./assets/js/theme/product/reviews.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Override the default Cornerstone Reviews class to disable collapse on page load
 */

var Reviews = /*#__PURE__*/function (_CornerstoneReviews) {
  function Reviews() {
    return _CornerstoneReviews.apply(this, arguments) || this;
  }
  _inheritsLoose(Reviews, _CornerstoneReviews);
  var _proto = Reviews.prototype;
  _proto.setupReviews = function setupReviews() {
    // We're in paginating state, reviews should be visible
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0 && this.$reviewsContent.parents('.quickView').length === 0) {
      this.expandReviews();
    }
  };
  return Reviews;
}(_theme_product_reviews__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/papathemes/product.js"
/*!*****************************************!*\
  !*** ./assets/js/papathemes/product.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _theme_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/product */ "./assets/js/theme/product.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Product = /*#__PURE__*/function (_CornerstoneProduct) {
  function Product() {
    return _CornerstoneProduct.apply(this, arguments) || this;
  }
  _inheritsLoose(Product, _CornerstoneProduct);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    _CornerstoneProduct.prototype.onReady.call(this);

    // papathemes: Track recently viewed products
    var productId = Number($('.productView').find('input[name="product_id"]').val());
    $('body').trigger('productviewed', [productId]);
  };
  return Product;
}(_theme_product__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/theme/common/utils/safe-string.js"
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/utils/safe-string.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeString: () => (/* binding */ safeString)
/* harmony export */ });
/**
 * This function parses HTML entities in strings
 * @param str: String
 * @returns String
*/
var safeString = function safeString(str) {
  var d = new DOMParser();
  return d.parseFromString(str, 'text/html').body.textContent;
};

/***/ },

/***/ "./assets/js/theme/product.js"
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _papathemes_eyeva_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../papathemes/eyeva/reviews */ "./assets/js/papathemes/eyeva/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _papathemes_eyeva_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../papathemes/eyeva/product-details */ "./assets/js/papathemes/eyeva/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */

 // papathemes-eyeva edited

 // papathemes-eyeva edited



var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _papathemes_eyeva_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _papathemes_eyeva_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $reviewForm: $reviewForm
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/theme/product/reviews.js"
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/safe-string */ "./assets/js/theme/common/utils/safe-string.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





var _default = /*#__PURE__*/function () {
  function _default(_ref) {
    var $reviewForm = _ref.$reviewForm,
      $context = _ref.$context;
    if ($reviewForm && $reviewForm.length) {
      this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
        submit: $reviewForm.find('input[type="submit"]'),
        tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__.announceInputErrorMessage
      });
    }
    this.$context = $context;
    this.$reviewTabLink = $('.productView-reviewTabLink', this.$context);
    this.$reviewsContent = $('#product-reviews', this.$context);
    this.$reviewsContentList = $('#productReviews-content', this.$reviewsContent);
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    if (this.$context) {
      (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-collapsible]', {
        $context: $context
      });
    } else {
      this.initLinkBind();
    }
    this.injectPaginationLink();
    this.setupReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $productReviewLink = $('#productReview_link');
    $productReviewLink.attr('href', "" + $productReviewLink.attr('href') + window.location.search + "#product-reviews").on('click', function () {
      return _this.expandReviews();
    });
  };
  _proto.setupReviews = function setupReviews() {
    // We're in paginating state, reviews should be visible
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0 && this.$reviewsContent.parents('.quickView').length === 0) {
      this.expandReviews();
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
  };
  _proto.expandReviews = function expandReviews() {
    this.$reviewTabLink.trigger('click');
    if (!this.$reviewsContentList.hasClass('is-open')) {
      this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
    }
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewRating)
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewSubject)
    }, {
      selector: '[name="revfromname"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewName)
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewComment)
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ },

/***/ "./assets/js/theme/product/video-gallery.js"
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvRSxDQUFDO0VBQUFwSCxNQUFBLENBRUR3SCxjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDWixPQUFPLENBQUNhLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDckMsSUFBSSxDQUFDWixZQUFZLENBQUNTLGNBQWMsQ0FBQ0ksUUFBUSxDQUFDLFdBQVcsQ0FBQztFQUMxRCxDQUFDO0VBQUExSCxNQUFBLENBRUQ4RyxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDRixPQUFPLENBQUM3RCxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ2dFLGNBQWMsQ0FBQ1ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzVELENBQUM7RUFBQSxPQUFBbEIsWUFBQTtBQUFBO0FBR1UsU0FBU3ZFLFlBQVlBLENBQUEsRUFBRztFQUNuQyxJQUFNMEYsU0FBUyxHQUFHLGVBQWU7RUFDakMsSUFBTUMsYUFBYSxHQUFHMUcsQ0FBQyxZQUFVeUcsU0FBUyxNQUFHLENBQUM7RUFFOUNDLGFBQWEsQ0FBQzNELElBQUksQ0FBQyxVQUFDNEQsS0FBSyxFQUFFQyxPQUFPLEVBQUs7SUFDbkMsSUFBTUMsR0FBRyxHQUFHN0csQ0FBQyxDQUFDNEcsT0FBTyxDQUFDO0lBQ3RCLElBQU1FLGFBQWEsR0FBR0QsR0FBRyxDQUFDWCxJQUFJLENBQUNPLFNBQVMsQ0FBQyxZQUFZbkIsWUFBWTtJQUVqRSxJQUFJd0IsYUFBYSxFQUFFO01BQ2Y7SUFDSjtJQUVBRCxHQUFHLENBQUNYLElBQUksQ0FBQ08sU0FBUyxFQUFFLElBQUluQixZQUFZLENBQUN1QixHQUFHLENBQUMsQ0FBQztFQUM5QyxDQUFDLENBQUM7QUFDTixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9leWV2YS9yZXZpZXdzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvc2FmZS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBDb3JuZXJzdG9uZSBSZXZpZXdzIGNsYXNzIHRvIGRpc2FibGUgY29sbGFwc2Ugb24gcGFnZSBsb2FkXHJcbiAqL1xyXG5pbXBvcnQgQ29ybmVyc3RvbmVSZXZpZXdzIGZyb20gJy4uLy4uL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXZpZXdzIGV4dGVuZHMgQ29ybmVyc3RvbmVSZXZpZXdzIHtcclxuICAgIHNldHVwUmV2aWV3cygpIHtcclxuICAgICAgICAvLyBXZSdyZSBpbiBwYWdpbmF0aW5nIHN0YXRlLCByZXZpZXdzIHNob3VsZCBiZSB2aXNpYmxlXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaFxyXG4gICAgICAgICAgICAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjcHJvZHVjdC1yZXZpZXdzJykgPT09IDBcclxuICAgICAgICAgICAgJiYgdGhpcy4kcmV2aWV3c0NvbnRlbnQucGFyZW50cygnLnF1aWNrVmlldycpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZFJldmlld3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENvcm5lcnN0b25lUHJvZHVjdCBmcm9tICcuLi90aGVtZS9wcm9kdWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBDb3JuZXJzdG9uZVByb2R1Y3Qge1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBzdXBlci5vblJlYWR5KCk7XHJcblxyXG4gICAgICAgIC8vIHBhcGF0aGVtZXM6IFRyYWNrIHJlY2VudGx5IHZpZXdlZCBwcm9kdWN0c1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IE51bWJlcigkKCcucHJvZHVjdFZpZXcnKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpKTtcclxuICAgICAgICAkKCdib2R5JykudHJpZ2dlcigncHJvZHVjdHZpZXdlZCcsIFtwcm9kdWN0SWRdKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gcGFyc2VzIEhUTUwgZW50aXRpZXMgaW4gc3RyaW5nc1xyXG4gKiBAcGFyYW0gc3RyOiBTdHJpbmdcclxuICogQHJldHVybnMgU3RyaW5nXHJcbiovXHJcbmV4cG9ydCBjb25zdCBzYWZlU3RyaW5nID0gKHN0cikgPT4ge1xyXG4gICAgY29uc3QgZCA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgIHJldHVybiBkLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKS5ib2R5LnRleHRDb250ZW50O1xyXG59O1xyXG4iLCIvKlxyXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXHJcbiAqL1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4uL3BhcGF0aGVtZXMvZXlldmEvcmV2aWV3cyc7IC8vIHBhcGF0aGVtZXMtZXlldmEgZWRpdGVkXHJcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vcGFwYXRoZW1lcy9leWV2YS9wcm9kdWN0LWRldGFpbHMnOyAvLyBwYXBhdGhlbWVzLWV5ZXZhIGVkaXRlZFxyXG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcclxuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xyXG4gICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLWJ1bGstcHJpY2luZ1wiXScpO1xyXG4gICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbG9zZS5mbmR0bi5yZXZlYWwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xyXG5cclxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcclxuXHJcbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xyXG5cclxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoeyAkcmV2aWV3Rm9ybSB9KTtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcclxuICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS1pbnB1dF0nKS5lYWNoKChfLCBpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcclxuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcclxuXHJcbiAgICAgICAgICAgICRpbnB1dC5zaWJsaW5ncygnc3BhbicpLmF0dHIoJ2lkJywgbXNnU3BhbklkKTtcclxuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVsa1ByaWNpbmdIYW5kbGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjYnVsa19wcmljaW5nJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5LCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vY29tbW9uL2NvbGxhcHNpYmxlJztcclxuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xyXG5pbXBvcnQgeyBzYWZlU3RyaW5nIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL3NhZmUtc3RyaW5nJztcclxuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgJHJldmlld0Zvcm0sICRjb250ZXh0IH0pIHtcclxuICAgICAgICBpZiAoJHJldmlld0Zvcm0gJiYgJHJldmlld0Zvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdDogJHJldmlld0Zvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxyXG4gICAgICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGNvbnRleHQgPSAkY29udGV4dDtcclxuICAgICAgICB0aGlzLiRyZXZpZXdUYWJMaW5rID0gJCgnLnByb2R1Y3RWaWV3LXJldmlld1RhYkxpbmsnLCB0aGlzLiRjb250ZXh0KTtcclxuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudCA9ICQoJyNwcm9kdWN0LXJldmlld3MnLCB0aGlzLiRjb250ZXh0KTtcclxuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudExpc3QgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcclxuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHRoaXMuJHJldmlld3NDb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJGNvbnRleHQpIHtcclxuICAgICAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB7ICRjb250ZXh0IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluamVjdFBhZ2luYXRpb25MaW5rKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFJldmlld3MoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGUgdXNlciBjbGlja3Mgb24gXCIoMTIgUmV2aWV3cylcIiBsaW5rXHJcbiAgICAgKiBUaGUgYnJvd3NlciBqdW1wcyB0byB0aGUgcmV2aWV3IHBhZ2UgYW5kIHNob3VsZCBleHBhbmQgdGhlIHJldmlld3Mgc2VjdGlvblxyXG4gICAgICovXHJcbiAgICBpbml0TGlua0JpbmQoKSB7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RSZXZpZXdMaW5rID0gJCgnI3Byb2R1Y3RSZXZpZXdfbGluaycpO1xyXG4gICAgICAgICRwcm9kdWN0UmV2aWV3TGlua1xyXG4gICAgICAgICAgICAuYXR0cignaHJlZicsIGAkeyRwcm9kdWN0UmV2aWV3TGluay5hdHRyKCdocmVmJyl9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofSNwcm9kdWN0LXJldmlld3NgKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5leHBhbmRSZXZpZXdzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwUmV2aWV3cygpIHtcclxuICAgICAgICAvLyBXZSdyZSBpbiBwYWdpbmF0aW5nIHN0YXRlLCByZXZpZXdzIHNob3VsZCBiZSB2aXNpYmxlXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaFxyXG4gICAgICAgICAgICAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjcHJvZHVjdC1yZXZpZXdzJykgPT09IDBcclxuICAgICAgICAgICAgJiYgdGhpcy4kcmV2aWV3c0NvbnRlbnQucGFyZW50cygnLnF1aWNrVmlldycpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZFJldmlld3MoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZm9yY2UgY29sbGFwc2Ugb24gcGFnZSBsb2FkXHJcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwYW5kUmV2aWV3cygpIHtcclxuICAgICAgICB0aGlzLiRyZXZpZXdUYWJMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy4kcmV2aWV3c0NvbnRlbnRMaXN0Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xyXG4gICAgICovXHJcbiAgICBpbmplY3RQYWdpbmF0aW9uTGluaygpIHtcclxuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XHJcbiAgICAgICAgY29uc3QgJHByZXZMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJG5leHRMaW5rLmF0dHIoJ2hyZWYnLCBgJHskbmV4dExpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJHByZXZMaW5rLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkcHJldkxpbmsuYXR0cignaHJlZicsIGAkeyRwcmV2TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yLmFkZChbe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcclxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3UmF0aW5nKSxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0aXRsZVwiXScsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QpLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldmZyb21uYW1lXCJdJyxcclxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3TmFtZSksXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld0NvbW1lbnQpLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcud3JpdGVSZXZpZXctZm9ybSBbbmFtZT1cImVtYWlsXCJdJyxcclxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XHJcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xyXG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXHJcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1haW5WaWRlbygpIHtcclxuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XHJcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xyXG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xyXG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcclxuXHJcbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcclxuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcclxuXHJcbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvcm5lcnN0b25lUmV2aWV3cyIsIlJldmlld3MiLCJfQ29ybmVyc3RvbmVSZXZpZXdzIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsInNldHVwUmV2aWV3cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsImluZGV4T2YiLCIkcmV2aWV3c0NvbnRlbnQiLCJwYXJlbnRzIiwibGVuZ3RoIiwiZXhwYW5kUmV2aWV3cyIsImRlZmF1bHQiLCJDb3JuZXJzdG9uZVByb2R1Y3QiLCJQcm9kdWN0IiwiX0Nvcm5lcnN0b25lUHJvZHVjdCIsIm9uUmVhZHkiLCJjYWxsIiwicHJvZHVjdElkIiwiTnVtYmVyIiwiJCIsImZpbmQiLCJ2YWwiLCJ0cmlnZ2VyIiwic2FmZVN0cmluZyIsInN0ciIsImQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJib2R5IiwidGV4dENvbnRlbnQiLCJQYWdlTWFuYWdlciIsIlJldmlldyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlByb2R1Y3REZXRhaWxzIiwidmlkZW9HYWxsZXJ5IiwiY2xhc3NpZnlGb3JtIiwibW9kYWxGYWN0b3J5IiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsIl90aGlzIiwidXJsIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwiJGJ1bGtQcmljaW5nTGluayIsInJldmlld01vZGFsIiwiX3RoaXMyIiwiZG9jdW1lbnQiLCJvbiIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwicHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJzZXRQcm9kdWN0VmFyaWFudCIsImJ1bGtQcmljaW5nSGFuZGxlciIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwiYXJpYURlc2NyaWJlUmV2aWV3SW5wdXRzIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCIkZm9ybSIsImVhY2giLCJfIiwiaW5wdXQiLCIkaW5wdXQiLCJtc2dTcGFuSWQiLCJhdHRyIiwic2libGluZ3MiLCJub2QiLCJDb2xsYXBzaWJsZUV2ZW50cyIsImZvcm1zIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsIl9kZWZhdWx0IiwiX3JlZiIsIiRjb250ZXh0Iiwic3VibWl0IiwidGFwIiwiJHJldmlld1RhYkxpbmsiLCIkcmV2aWV3c0NvbnRlbnRMaXN0IiwiJGNvbGxhcHNpYmxlIiwiaW5pdExpbmtCaW5kIiwiaW5qZWN0UGFnaW5hdGlvbkxpbmsiLCIkcHJvZHVjdFJldmlld0xpbmsiLCJzZWFyY2giLCJjbGljayIsImhhc0NsYXNzIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInJldmlld1JhdGluZyIsInJldmlld1N1YmplY3QiLCJyZXZpZXdOYW1lIiwicmV2aWV3Q29tbWVudCIsImNiIiwicmVzdWx0IiwiZW1haWwiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImlkIiwiZGF0YSIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJpbmRleCIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=