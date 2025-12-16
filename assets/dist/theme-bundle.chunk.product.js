(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["product"],{

/***/ "./assets/js/papathemes/eyeva/reviews.js"
/*!***********************************************!*\
  !*** ./assets/js/papathemes/eyeva/reviews.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ },

/***/ "./node_modules/easyzoom/dist/easyzoom.js"
/*!************************************************!*\
  !*** ./node_modules/easyzoom/dist/easyzoom.js ***!
  \************************************************/
(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * @name        easyzoom
 * @author      Matt Hinchliffe
 * @modified    Friday, December 30th, 2022
 * @version     2.6.0
 */
!function(t,e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){e(t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function(i){"use strict";var c,d,l,p,o,s,h={loadingNotice:"Loading image",errorNotice:"The image could not be loaded",errorDuration:2500,linkAttribute:"href",preventClicks:!0,beforeShow:i.noop,beforeHide:i.noop,onShow:i.noop,onHide:i.noop,onMove:i.noop};function n(t,e){this.$target=i(t),this.opts=i.extend({},h,e,this.$target.data()),void 0===this.isOpen&&this._init()}return n.prototype._init=function(){this.$link=this.$target.find("a"),this.$image=this.$target.find("img"),this.$flyout=i('<div class="easyzoom-flyout" />'),this.$notice=i('<div class="easyzoom-notice" />'),this.$target.on({"mousemove.easyzoom touchmove.easyzoom":i.proxy(this._onMove,this),"mouseleave.easyzoom touchend.easyzoom":i.proxy(this._onLeave,this),"mouseenter.easyzoom touchstart.easyzoom":i.proxy(this._onEnter,this)}),this.opts.preventClicks&&this.$target.on("click.easyzoom",function(t){t.preventDefault()})},n.prototype.show=function(t,e){var o=this;if(!1!==this.opts.beforeShow.call(this)){if(!this.isReady)return this._loadImage(this.$link.attr(this.opts.linkAttribute),function(){!o.isMouseOver&&e||o.show(t)});this.$target.append(this.$flyout);var i=this.$target.outerWidth(),s=this.$target.outerHeight(),h=this.$flyout.width(),n=this.$flyout.height(),a=this.$zoom.width(),r=this.$zoom.height();c=Math.ceil(a-h),d=Math.ceil(r-n),l=(c=c<0?0:c)/i,p=(d=d<0?0:d)/s,this.isOpen=!0,this.opts.onShow.call(this),t&&this._move(t)}},n.prototype._onEnter=function(t){var e=t.originalEvent.touches;this.isMouseOver=!0,e&&1!=e.length||(t.preventDefault(),this.show(t,!0))},n.prototype._onMove=function(t){this.isOpen&&(t.preventDefault(),this._move(t))},n.prototype._onLeave=function(){this.isMouseOver=!1,this.isOpen&&this.hide()},n.prototype._onLoad=function(t){t.currentTarget.width&&(this.isReady=!0,this.$notice.detach(),this.$flyout.html(this.$zoom),this.$target.removeClass("is-loading").addClass("is-ready"),t.data.call&&t.data())},n.prototype._onError=function(){var t=this;this.$notice.text(this.opts.errorNotice),this.$target.removeClass("is-loading").addClass("is-error"),this.detachNotice=setTimeout(function(){t.$notice.detach(),t.detachNotice=null},this.opts.errorDuration)},n.prototype._loadImage=function(t,e){var o=new Image;this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)),this.$zoom=i(o).on("error",i.proxy(this._onError,this)).on("load",e,i.proxy(this._onLoad,this)),o.style.position="absolute",o.src=t},n.prototype._move=function(t){s=0===t.type.indexOf("touch")?(e=t.touches||t.originalEvent.touches,o=e[0].pageX,e[0].pageY):(o=t.pageX||o,t.pageY||s);var e=this.$target.offset(),t=o-e.left,e=s-e.top,t=Math.ceil(t*l),e=Math.ceil(e*p);t<0||e<0||c<t||d<e?this.hide():(e=-1*e,t=-1*t,"transform"in document.body.style?this.$zoom.css({transform:"translate("+t+"px, "+e+"px)"}):this.$zoom.css({top:e,left:t}),this.opts.onMove.call(this,e,t))},n.prototype.hide=function(){this.isOpen&&!1!==this.opts.beforeHide.call(this)&&(this.$flyout.detach(),this.isOpen=!1,this.opts.onHide.call(this))},n.prototype.swap=function(t,e,o){this.hide(),this.isReady=!1,this.detachNotice&&clearTimeout(this.detachNotice),this.$notice.parent().length&&this.$notice.detach(),this.$target.removeClass("is-loading is-ready is-error"),this.$image.attr({src:t,srcset:i.isArray(o)?o.join():o}),this.$link.attr(this.opts.linkAttribute,e)},n.prototype.teardown=function(){this.hide(),this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"),this.detachNotice&&clearTimeout(this.detachNotice),delete this.$link,delete this.$zoom,delete this.$image,delete this.$notice,delete this.$flyout,delete this.isOpen,delete this.isReady},i.fn.easyZoom=function(e){return this.each(function(){var t=i.data(this,"easyZoom");t?void 0===t.isOpen&&t._init():i.data(this,"easyZoom",new n(this,e))})},n});

/***/ },

/***/ "./node_modules/lodash/_baseKeys.js"
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ },

/***/ "./node_modules/lodash/_getPrototype.js"
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ },

/***/ "./node_modules/lodash/_getTag.js"
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ },

/***/ "./node_modules/lodash/_isPrototype.js"
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ },

/***/ "./node_modules/lodash/_overArg.js"
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
(module) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ },

/***/ "./node_modules/lodash/isBuffer.js"
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ },

/***/ "./node_modules/lodash/isEmpty.js"
/*!****************************************!*\
  !*** ./node_modules/lodash/isEmpty.js ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ },

/***/ "./node_modules/lodash/isPlainObject.js"
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ },

/***/ "./node_modules/lodash/isTypedArray.js"
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7QUFDZCxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9leWV2YS9yZXZpZXdzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvc2FmZS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2Vhc3l6b29tL2Rpc3QvZWFzeXpvb20uanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IENvcm5lcnN0b25lIFJldmlld3MgY2xhc3MgdG8gZGlzYWJsZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAqL1xuaW1wb3J0IENvcm5lcnN0b25lUmV2aWV3cyBmcm9tICcuLi8uLi90aGVtZS9wcm9kdWN0L3Jldmlld3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXZpZXdzIGV4dGVuZHMgQ29ybmVyc3RvbmVSZXZpZXdzIHtcbiAgICBzZXR1cFJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIHJldmlld3Mgc2hvdWxkIGJlIHZpc2libGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2hcbiAgICAgICAgICAgICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyNwcm9kdWN0LXJldmlld3MnKSA9PT0gMFxuICAgICAgICAgICAgJiYgdGhpcy4kcmV2aWV3c0NvbnRlbnQucGFyZW50cygnLnF1aWNrVmlldycpLmxlbmd0aCA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kUmV2aWV3cygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvcm5lcnN0b25lUHJvZHVjdCBmcm9tICcuLi90aGVtZS9wcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIENvcm5lcnN0b25lUHJvZHVjdCB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgc3VwZXIub25SZWFkeSgpO1xuXG4gICAgICAgIC8vIHBhcGF0aGVtZXM6IFRyYWNrIHJlY2VudGx5IHZpZXdlZCBwcm9kdWN0c1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBOdW1iZXIoJCgnLnByb2R1Y3RWaWV3JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RfaWRcIl0nKS52YWwoKSk7XG4gICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdwcm9kdWN0dmlld2VkJywgW3Byb2R1Y3RJZF0pO1xuICAgIH1cbn1cblxuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHBhcnNlcyBIVE1MIGVudGl0aWVzIGluIHN0cmluZ3NcbiAqIEBwYXJhbSBzdHI6IFN0cmluZ1xuICogQHJldHVybnMgU3RyaW5nXG4qL1xuZXhwb3J0IGNvbnN0IHNhZmVTdHJpbmcgPSAoc3RyKSA9PiB7XG4gICAgY29uc3QgZCA9IG5ldyBET01QYXJzZXIoKTtcbiAgICByZXR1cm4gZC5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJykuYm9keS50ZXh0Q29udGVudDtcbn07XG4iLCIvKlxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xuICovXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuLi9wYXBhdGhlbWVzL2V5ZXZhL3Jldmlld3MnOyAvLyBwYXBhdGhlbWVzLWV5ZXZhIGVkaXRlZFxuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vcGFwYXRoZW1lcy9leWV2YS9wcm9kdWN0LWRldGFpbHMnOyAvLyBwYXBhdGhlbWVzLWV5ZXZhIGVkaXRlZFxuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xuICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICAgICAgdGhpcy5yZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI21vZGFsLXJldmlldy1mb3JtJylbMF07XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvcjtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XG5cbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG5cbiAgICAgICAgdGhpcy5idWxrUHJpY2luZ0hhbmRsZXIoKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcblxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldyh7ICRyZXZpZXdGb3JtIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtaW5wdXRdJykuZWFjaCgoXywgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcblxuICAgICAgICAgICAgJGlucHV0LnNpYmxpbmdzKCdzcGFuJykuYXR0cignaWQnLCBtc2dTcGFuSWQpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1bGtQcmljaW5nSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnksIHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuaW1wb3J0IHsgc2FmZVN0cmluZyB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoeyAkcmV2aWV3Rm9ybSwgJGNvbnRleHQgfSkge1xuICAgICAgICBpZiAoJHJldmlld0Zvcm0gJiYgJHJldmlld0Zvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRjb250ZXh0ID0gJGNvbnRleHQ7XG4gICAgICAgIHRoaXMuJHJldmlld1RhYkxpbmsgPSAkKCcucHJvZHVjdFZpZXctcmV2aWV3VGFiTGluaycsIHRoaXMuJGNvbnRleHQpO1xuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudCA9ICQoJyNwcm9kdWN0LXJldmlld3MnLCB0aGlzLiRjb250ZXh0KTtcbiAgICAgICAgdGhpcy4kcmV2aWV3c0NvbnRlbnRMaXN0ID0gJCgnI3Byb2R1Y3RSZXZpZXdzLWNvbnRlbnQnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlID0gJCgnW2RhdGEtY29sbGFwc2libGVdJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLiRjb250ZXh0KSB7XG4gICAgICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHsgJGNvbnRleHQgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluaXRMaW5rQmluZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbmplY3RQYWdpbmF0aW9uTGluaygpO1xuICAgICAgICB0aGlzLnNldHVwUmV2aWV3cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGUgdXNlciBjbGlja3Mgb24gXCIoMTIgUmV2aWV3cylcIiBsaW5rXG4gICAgICogVGhlIGJyb3dzZXIganVtcHMgdG8gdGhlIHJldmlldyBwYWdlIGFuZCBzaG91bGQgZXhwYW5kIHRoZSByZXZpZXdzIHNlY3Rpb25cbiAgICAgKi9cbiAgICBpbml0TGlua0JpbmQoKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0UmV2aWV3TGluayA9ICQoJyNwcm9kdWN0UmV2aWV3X2xpbmsnKTtcbiAgICAgICAgJHByb2R1Y3RSZXZpZXdMaW5rXG4gICAgICAgICAgICAuYXR0cignaHJlZicsIGAkeyRwcm9kdWN0UmV2aWV3TGluay5hdHRyKCdocmVmJyl9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofSNwcm9kdWN0LXJldmlld3NgKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsICgpID0+IHRoaXMuZXhwYW5kUmV2aWV3cygpKTtcbiAgICB9XG5cbiAgICBzZXR1cFJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIHJldmlld3Mgc2hvdWxkIGJlIHZpc2libGVcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2hcbiAgICAgICAgICAgICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyNwcm9kdWN0LXJldmlld3MnKSA9PT0gMFxuICAgICAgICAgICAgJiYgdGhpcy4kcmV2aWV3c0NvbnRlbnQucGFyZW50cygnLnF1aWNrVmlldycpLmxlbmd0aCA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kUmV2aWV3cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2UgY29sbGFwc2Ugb24gcGFnZSBsb2FkXG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgIH1cblxuICAgIGV4cGFuZFJldmlld3MoKSB7XG4gICAgICAgIHRoaXMuJHJldmlld1RhYkxpbmsudHJpZ2dlcignY2xpY2snKTtcblxuICAgICAgICBpZiAoIXRoaXMuJHJldmlld3NDb250ZW50TGlzdC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdCBJRCBpbnRvIHRoZSBwYWdpbmF0aW9uIGxpbmtcbiAgICAgKi9cbiAgICBpbmplY3RQYWdpbmF0aW9uTGluaygpIHtcbiAgICAgICAgY29uc3QgJG5leHRMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuICAgICAgICBjb25zdCAkcHJldkxpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cyAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIGlmICgkbmV4dExpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbmV4dExpbmsuYXR0cignaHJlZicsIGAkeyRuZXh0TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcHJldkxpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkcHJldkxpbmsuYXR0cignaHJlZicsIGAkeyRwcmV2TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyVmFsaWRhdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLmFkZChbe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnJhdGluZ1wiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3UmF0aW5nKSxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRpdGxlXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBzYWZlU3RyaW5nKHRoaXMuY29udGV4dC5yZXZpZXdTdWJqZWN0KSxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldmZyb21uYW1lXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBzYWZlU3RyaW5nKHRoaXMuY29udGV4dC5yZXZpZXdOYW1lKSxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRleHRcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld0NvbW1lbnQpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJy53cml0ZVJldmlldy1mb3JtIFtuYW1lPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcbiAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0VtYWlsLFxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFZpZGVvR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xuICAgICAgICB0aGlzLiR2aWRlb3MgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZWxlY3ROZXdWaWRlbyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xuICAgICAgICAgICAgaWQ6ICR0YXJnZXQuZGF0YSgndmlkZW9JZCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyLmF0dHIoJ3NyYycsIGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuY3VycmVudFZpZGVvLmlkfWApO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3MucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3VmlkZW8uYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb0dhbGxlcnkoKSB7XG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xuICAgIGNvbnN0ICR2aWRlb0dhbGxlcnkgPSAkKGBbZGF0YS0ke3BsdWdpbktleX1dYCk7XG5cbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGlzSW5pdGlhbGl6ZWQgPSAkZWwuZGF0YShwbHVnaW5LZXkpIGluc3RhbmNlb2YgVmlkZW9HYWxsZXJ5O1xuXG4gICAgICAgIGlmIChpc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZGF0YShwbHVnaW5LZXksIG5ldyBWaWRlb0dhbGxlcnkoJGVsKSk7XG4gICAgfSk7XG59XG4iLCIvKiFcbiAqIEBuYW1lICAgICAgICBlYXN5em9vbVxuICogQGF1dGhvciAgICAgIE1hdHQgSGluY2hsaWZmZVxuICogQG1vZGlmaWVkICAgIEZyaWRheSwgRGVjZW1iZXIgMzB0aCwgMjAyMlxuICogQHZlcnNpb24gICAgIDIuNi4wXG4gKi9cbiFmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGZ1bmN0aW9uKHQpe2UodCl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10LkVhc3lab29tPWUocmVxdWlyZShcImpxdWVyeVwiKSk6dC5FYXN5Wm9vbT1lKHQualF1ZXJ5KX0odGhpcyxmdW5jdGlvbihpKXtcInVzZSBzdHJpY3RcIjt2YXIgYyxkLGwscCxvLHMsaD17bG9hZGluZ05vdGljZTpcIkxvYWRpbmcgaW1hZ2VcIixlcnJvck5vdGljZTpcIlRoZSBpbWFnZSBjb3VsZCBub3QgYmUgbG9hZGVkXCIsZXJyb3JEdXJhdGlvbjoyNTAwLGxpbmtBdHRyaWJ1dGU6XCJocmVmXCIscHJldmVudENsaWNrczohMCxiZWZvcmVTaG93Omkubm9vcCxiZWZvcmVIaWRlOmkubm9vcCxvblNob3c6aS5ub29wLG9uSGlkZTppLm5vb3Asb25Nb3ZlOmkubm9vcH07ZnVuY3Rpb24gbih0LGUpe3RoaXMuJHRhcmdldD1pKHQpLHRoaXMub3B0cz1pLmV4dGVuZCh7fSxoLGUsdGhpcy4kdGFyZ2V0LmRhdGEoKSksdm9pZCAwPT09dGhpcy5pc09wZW4mJnRoaXMuX2luaXQoKX1yZXR1cm4gbi5wcm90b3R5cGUuX2luaXQ9ZnVuY3Rpb24oKXt0aGlzLiRsaW5rPXRoaXMuJHRhcmdldC5maW5kKFwiYVwiKSx0aGlzLiRpbWFnZT10aGlzLiR0YXJnZXQuZmluZChcImltZ1wiKSx0aGlzLiRmbHlvdXQ9aSgnPGRpdiBjbGFzcz1cImVhc3l6b29tLWZseW91dFwiIC8+JyksdGhpcy4kbm90aWNlPWkoJzxkaXYgY2xhc3M9XCJlYXN5em9vbS1ub3RpY2VcIiAvPicpLHRoaXMuJHRhcmdldC5vbih7XCJtb3VzZW1vdmUuZWFzeXpvb20gdG91Y2htb3ZlLmVhc3l6b29tXCI6aS5wcm94eSh0aGlzLl9vbk1vdmUsdGhpcyksXCJtb3VzZWxlYXZlLmVhc3l6b29tIHRvdWNoZW5kLmVhc3l6b29tXCI6aS5wcm94eSh0aGlzLl9vbkxlYXZlLHRoaXMpLFwibW91c2VlbnRlci5lYXN5em9vbSB0b3VjaHN0YXJ0LmVhc3l6b29tXCI6aS5wcm94eSh0aGlzLl9vbkVudGVyLHRoaXMpfSksdGhpcy5vcHRzLnByZXZlbnRDbGlja3MmJnRoaXMuJHRhcmdldC5vbihcImNsaWNrLmVhc3l6b29tXCIsZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpfSl9LG4ucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24odCxlKXt2YXIgbz10aGlzO2lmKCExIT09dGhpcy5vcHRzLmJlZm9yZVNob3cuY2FsbCh0aGlzKSl7aWYoIXRoaXMuaXNSZWFkeSlyZXR1cm4gdGhpcy5fbG9hZEltYWdlKHRoaXMuJGxpbmsuYXR0cih0aGlzLm9wdHMubGlua0F0dHJpYnV0ZSksZnVuY3Rpb24oKXshby5pc01vdXNlT3ZlciYmZXx8by5zaG93KHQpfSk7dGhpcy4kdGFyZ2V0LmFwcGVuZCh0aGlzLiRmbHlvdXQpO3ZhciBpPXRoaXMuJHRhcmdldC5vdXRlcldpZHRoKCkscz10aGlzLiR0YXJnZXQub3V0ZXJIZWlnaHQoKSxoPXRoaXMuJGZseW91dC53aWR0aCgpLG49dGhpcy4kZmx5b3V0LmhlaWdodCgpLGE9dGhpcy4kem9vbS53aWR0aCgpLHI9dGhpcy4kem9vbS5oZWlnaHQoKTtjPU1hdGguY2VpbChhLWgpLGQ9TWF0aC5jZWlsKHItbiksbD0oYz1jPDA/MDpjKS9pLHA9KGQ9ZDwwPzA6ZCkvcyx0aGlzLmlzT3Blbj0hMCx0aGlzLm9wdHMub25TaG93LmNhbGwodGhpcyksdCYmdGhpcy5fbW92ZSh0KX19LG4ucHJvdG90eXBlLl9vbkVudGVyPWZ1bmN0aW9uKHQpe3ZhciBlPXQub3JpZ2luYWxFdmVudC50b3VjaGVzO3RoaXMuaXNNb3VzZU92ZXI9ITAsZSYmMSE9ZS5sZW5ndGh8fCh0LnByZXZlbnREZWZhdWx0KCksdGhpcy5zaG93KHQsITApKX0sbi5wcm90b3R5cGUuX29uTW92ZT1mdW5jdGlvbih0KXt0aGlzLmlzT3BlbiYmKHQucHJldmVudERlZmF1bHQoKSx0aGlzLl9tb3ZlKHQpKX0sbi5wcm90b3R5cGUuX29uTGVhdmU9ZnVuY3Rpb24oKXt0aGlzLmlzTW91c2VPdmVyPSExLHRoaXMuaXNPcGVuJiZ0aGlzLmhpZGUoKX0sbi5wcm90b3R5cGUuX29uTG9hZD1mdW5jdGlvbih0KXt0LmN1cnJlbnRUYXJnZXQud2lkdGgmJih0aGlzLmlzUmVhZHk9ITAsdGhpcy4kbm90aWNlLmRldGFjaCgpLHRoaXMuJGZseW91dC5odG1sKHRoaXMuJHpvb20pLHRoaXMuJHRhcmdldC5yZW1vdmVDbGFzcyhcImlzLWxvYWRpbmdcIikuYWRkQ2xhc3MoXCJpcy1yZWFkeVwiKSx0LmRhdGEuY2FsbCYmdC5kYXRhKCkpfSxuLnByb3RvdHlwZS5fb25FcnJvcj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy4kbm90aWNlLnRleHQodGhpcy5vcHRzLmVycm9yTm90aWNlKSx0aGlzLiR0YXJnZXQucmVtb3ZlQ2xhc3MoXCJpcy1sb2FkaW5nXCIpLmFkZENsYXNzKFwiaXMtZXJyb3JcIiksdGhpcy5kZXRhY2hOb3RpY2U9c2V0VGltZW91dChmdW5jdGlvbigpe3QuJG5vdGljZS5kZXRhY2goKSx0LmRldGFjaE5vdGljZT1udWxsfSx0aGlzLm9wdHMuZXJyb3JEdXJhdGlvbil9LG4ucHJvdG90eXBlLl9sb2FkSW1hZ2U9ZnVuY3Rpb24odCxlKXt2YXIgbz1uZXcgSW1hZ2U7dGhpcy4kdGFyZ2V0LmFkZENsYXNzKFwiaXMtbG9hZGluZ1wiKS5hcHBlbmQodGhpcy4kbm90aWNlLnRleHQodGhpcy5vcHRzLmxvYWRpbmdOb3RpY2UpKSx0aGlzLiR6b29tPWkobykub24oXCJlcnJvclwiLGkucHJveHkodGhpcy5fb25FcnJvcix0aGlzKSkub24oXCJsb2FkXCIsZSxpLnByb3h5KHRoaXMuX29uTG9hZCx0aGlzKSksby5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsby5zcmM9dH0sbi5wcm90b3R5cGUuX21vdmU9ZnVuY3Rpb24odCl7cz0wPT09dC50eXBlLmluZGV4T2YoXCJ0b3VjaFwiKT8oZT10LnRvdWNoZXN8fHQub3JpZ2luYWxFdmVudC50b3VjaGVzLG89ZVswXS5wYWdlWCxlWzBdLnBhZ2VZKToobz10LnBhZ2VYfHxvLHQucGFnZVl8fHMpO3ZhciBlPXRoaXMuJHRhcmdldC5vZmZzZXQoKSx0PW8tZS5sZWZ0LGU9cy1lLnRvcCx0PU1hdGguY2VpbCh0KmwpLGU9TWF0aC5jZWlsKGUqcCk7dDwwfHxlPDB8fGM8dHx8ZDxlP3RoaXMuaGlkZSgpOihlPS0xKmUsdD0tMSp0LFwidHJhbnNmb3JtXCJpbiBkb2N1bWVudC5ib2R5LnN0eWxlP3RoaXMuJHpvb20uY3NzKHt0cmFuc2Zvcm06XCJ0cmFuc2xhdGUoXCIrdCtcInB4LCBcIitlK1wicHgpXCJ9KTp0aGlzLiR6b29tLmNzcyh7dG9wOmUsbGVmdDp0fSksdGhpcy5vcHRzLm9uTW92ZS5jYWxsKHRoaXMsZSx0KSl9LG4ucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oKXt0aGlzLmlzT3BlbiYmITEhPT10aGlzLm9wdHMuYmVmb3JlSGlkZS5jYWxsKHRoaXMpJiYodGhpcy4kZmx5b3V0LmRldGFjaCgpLHRoaXMuaXNPcGVuPSExLHRoaXMub3B0cy5vbkhpZGUuY2FsbCh0aGlzKSl9LG4ucHJvdG90eXBlLnN3YXA9ZnVuY3Rpb24odCxlLG8pe3RoaXMuaGlkZSgpLHRoaXMuaXNSZWFkeT0hMSx0aGlzLmRldGFjaE5vdGljZSYmY2xlYXJUaW1lb3V0KHRoaXMuZGV0YWNoTm90aWNlKSx0aGlzLiRub3RpY2UucGFyZW50KCkubGVuZ3RoJiZ0aGlzLiRub3RpY2UuZGV0YWNoKCksdGhpcy4kdGFyZ2V0LnJlbW92ZUNsYXNzKFwiaXMtbG9hZGluZyBpcy1yZWFkeSBpcy1lcnJvclwiKSx0aGlzLiRpbWFnZS5hdHRyKHtzcmM6dCxzcmNzZXQ6aS5pc0FycmF5KG8pP28uam9pbigpOm99KSx0aGlzLiRsaW5rLmF0dHIodGhpcy5vcHRzLmxpbmtBdHRyaWJ1dGUsZSl9LG4ucHJvdG90eXBlLnRlYXJkb3duPWZ1bmN0aW9uKCl7dGhpcy5oaWRlKCksdGhpcy4kdGFyZ2V0Lm9mZihcIi5lYXN5em9vbVwiKS5yZW1vdmVDbGFzcyhcImlzLWxvYWRpbmcgaXMtcmVhZHkgaXMtZXJyb3JcIiksdGhpcy5kZXRhY2hOb3RpY2UmJmNsZWFyVGltZW91dCh0aGlzLmRldGFjaE5vdGljZSksZGVsZXRlIHRoaXMuJGxpbmssZGVsZXRlIHRoaXMuJHpvb20sZGVsZXRlIHRoaXMuJGltYWdlLGRlbGV0ZSB0aGlzLiRub3RpY2UsZGVsZXRlIHRoaXMuJGZseW91dCxkZWxldGUgdGhpcy5pc09wZW4sZGVsZXRlIHRoaXMuaXNSZWFkeX0saS5mbi5lYXN5Wm9vbT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9aS5kYXRhKHRoaXMsXCJlYXN5Wm9vbVwiKTt0P3ZvaWQgMD09PXQuaXNPcGVuJiZ0Ll9pbml0KCk6aS5kYXRhKHRoaXMsXCJlYXN5Wm9vbVwiLG5ldyBuKHRoaXMsZSkpfSl9LG59KTsiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCJ2YXIgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IG9iamVjdCwgY29sbGVjdGlvbiwgbWFwLCBvciBzZXQuXG4gKlxuICogT2JqZWN0cyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgbm8gb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkXG4gKiBwcm9wZXJ0aWVzLlxuICpcbiAqIEFycmF5LWxpa2UgdmFsdWVzIHN1Y2ggYXMgYGFyZ3VtZW50c2Agb2JqZWN0cywgYXJyYXlzLCBidWZmZXJzLCBzdHJpbmdzLCBvclxuICogalF1ZXJ5LWxpa2UgY29sbGVjdGlvbnMgYXJlIGNvbnNpZGVyZWQgZW1wdHkgaWYgdGhleSBoYXZlIGEgYGxlbmd0aGAgb2YgYDBgLlxuICogU2ltaWxhcmx5LCBtYXBzIGFuZCBzZXRzIGFyZSBjb25zaWRlcmVkIGVtcHR5IGlmIHRoZXkgaGF2ZSBhIGBzaXplYCBvZiBgMGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZW1wdHksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0VtcHR5KG51bGwpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNFbXB0eSh0cnVlKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRW1wdHkoMSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0VtcHR5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNFbXB0eSh7ICdhJzogMSB9KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmXG4gICAgICAoaXNBcnJheSh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZS5zcGxpY2UgPT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICBpc0J1ZmZlcih2YWx1ZSkgfHwgaXNUeXBlZEFycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgcmV0dXJuICF2YWx1ZS5sZW5ndGg7XG4gIH1cbiAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSk7XG4gIGlmICh0YWcgPT0gbWFwVGFnIHx8IHRhZyA9PSBzZXRUYWcpIHtcbiAgICByZXR1cm4gIXZhbHVlLnNpemU7XG4gIH1cbiAgaWYgKGlzUHJvdG90eXBlKHZhbHVlKSkge1xuICAgIHJldHVybiAhYmFzZUtleXModmFsdWUpLmxlbmd0aDtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VtcHR5O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIl0sIm5hbWVzIjpbIkNvcm5lcnN0b25lUmV2aWV3cyIsIlJldmlld3MiLCJfQ29ybmVyc3RvbmVSZXZpZXdzIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsInNldHVwUmV2aWV3cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsImluZGV4T2YiLCIkcmV2aWV3c0NvbnRlbnQiLCJwYXJlbnRzIiwibGVuZ3RoIiwiZXhwYW5kUmV2aWV3cyIsImRlZmF1bHQiLCJDb3JuZXJzdG9uZVByb2R1Y3QiLCJQcm9kdWN0IiwiX0Nvcm5lcnN0b25lUHJvZHVjdCIsIm9uUmVhZHkiLCJjYWxsIiwicHJvZHVjdElkIiwiTnVtYmVyIiwiJCIsImZpbmQiLCJ2YWwiLCJ0cmlnZ2VyIiwic2FmZVN0cmluZyIsInN0ciIsImQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJib2R5IiwidGV4dENvbnRlbnQiLCJQYWdlTWFuYWdlciIsIlJldmlldyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlByb2R1Y3REZXRhaWxzIiwidmlkZW9HYWxsZXJ5IiwiY2xhc3NpZnlGb3JtIiwibW9kYWxGYWN0b3J5IiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsIl90aGlzIiwidXJsIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwiJGJ1bGtQcmljaW5nTGluayIsInJldmlld01vZGFsIiwiX3RoaXMyIiwiZG9jdW1lbnQiLCJvbiIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwicHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJzZXRQcm9kdWN0VmFyaWFudCIsImJ1bGtQcmljaW5nSGFuZGxlciIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwiYXJpYURlc2NyaWJlUmV2aWV3SW5wdXRzIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCIkZm9ybSIsImVhY2giLCJfIiwiaW5wdXQiLCIkaW5wdXQiLCJtc2dTcGFuSWQiLCJhdHRyIiwic2libGluZ3MiLCJub2QiLCJDb2xsYXBzaWJsZUV2ZW50cyIsImZvcm1zIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsIl9kZWZhdWx0IiwiX3JlZiIsIiRjb250ZXh0Iiwic3VibWl0IiwidGFwIiwiJHJldmlld1RhYkxpbmsiLCIkcmV2aWV3c0NvbnRlbnRMaXN0IiwiJGNvbGxhcHNpYmxlIiwiaW5pdExpbmtCaW5kIiwiaW5qZWN0UGFnaW5hdGlvbkxpbmsiLCIkcHJvZHVjdFJldmlld0xpbmsiLCJzZWFyY2giLCJjbGljayIsImhhc0NsYXNzIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInJldmlld1JhdGluZyIsInJldmlld1N1YmplY3QiLCJyZXZpZXdOYW1lIiwicmV2aWV3Q29tbWVudCIsImNiIiwicmVzdWx0IiwiZW1haWwiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCJlIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImlkIiwiZGF0YSIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJpbmRleCIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=