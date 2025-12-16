"use strict";
(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["assets_js_papathemes_eyeva_product-details_js"],{

/***/ "./assets/js/papathemes/eyeva/image-gallery.js"
/*!*****************************************************!*\
  !*** ./assets/js/papathemes/eyeva/image-gallery.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardImageGalleryModal: () => (/* binding */ CardImageGalleryModal),
/* harmony export */   "default": () => (/* binding */ ImageGallery)
/* harmony export */ });
/* harmony import */ var easyzoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easyzoom */ "./node_modules/easyzoom/dist/easyzoom.js");
/* harmony import */ var easyzoom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(easyzoom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_product_image_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/product/image-gallery */ "./assets/js/theme/product/image-gallery.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var DEFAULT_STEP = 360;
var ImageGalleryModal = /*#__PURE__*/function () {
  /**
   *
   * @param {ImageGallery?} imageGallery
   * @param {jQuery?} $gallery
   */
  function ImageGalleryModal(imageGallery, $gallery) {
    if (imageGallery === void 0) {
      imageGallery = null;
    }
    if ($gallery === void 0) {
      $gallery = null;
    }
    this.modalTemplate = "\n        <div class=\"eyeva__imageGalleryModal-overlay\">\n            <div class=\"eyeva__imageGalleryModal\">\n                <button class=\"eyeva__imageGalleryModal-close\" type=\"button\" title=\"Close\" data-eyeva-image-gallery-modal-close>\n                    <span class=\"aria-description--hidden\">Close</span>\n                    <span class=\"icon\" aria-hidden=\"true\">\n                        <svg><use href=\"#icon-xmark-large\"></use></svg>\n                    </span>\n                </button>\n                <div class=\"eyeva__imageGalleryModal-body\">\n                    <div class=\"eyeva__imageGalleryModal-main\">\n                        <div class=\"eyeva__imageGalleryModal-main-easyzoom\" data-eyeva-image-gallery-modal-easyzoom>\n                            <div class=\"eyeva__imageGalleryModal-main-img-container\" data-eyeva-image-gallery-modal-main-img-container>\n                                {{&mainImageLinkElement}}\n                            </div>\n                        </div>\n                        <div class=\"eyeva__imageGalleryModal-main-360\" data-eyeva-image-gallery-modal-360 style=\"display:none\">\n                            <div class=\"eyeva__imageGalleryModal-360-img-container\" data-eyeva-image-gallery-modal-360-img-container>\n                                <img class=\"lazyload\" data-sizes=\"auto\" />\n                            </div>\n                            <div class=\"eyeva__imageGalleryModal-360-controls\">\n                                <button type=\"button\" class=\"_btn _btn-previous\" data-eyeva-image-gallery-modal-360-previous>\n                                    <span class=\"icon\" aria-hidden=\"true\"><svg><use href=\"#icon-arrow-left-long\"></use></svg></span>\n                                    <span class=\"is-srOnly\">Previous</span>\n                                </button>\n                                <button type=\"button\" class=\"_btn _btn-play\" data-eyeva-image-gallery-modal-360-play>\n                                    <span class=\"icon\" aria-hidden=\"true\"><svg><use href=\"#icon-play\"></use></svg></span>\n                                    <span class=\"is-srOnly\">Play</span>\n                                </button>\n                                <button type=\"button\" class=\"_btn _btn-pause\" data-eyeva-image-gallery-modal-360-pause>\n                                    <span class=\"icon\" aria-hidden=\"true\"><svg><use href=\"#icon-pause\"></use></svg></span>\n                                    <span class=\"is-srOnly\">Pause</span>\n                                </button>\n                                <button type=\"button\" class=\"_btn _btn-next\" data-eyeva-image-gallery-modal-360-next>\n                                    <span class=\"icon\" aria-hidden=\"true\"><svg><use href=\"#icon-arrow-right-long\"></use></svg></span>\n                                    <span class=\"is-srOnly\">Next</span>\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"eyeva__imageGalleryModal-main-video\" data-eyeva-image-gallery-modal-video-player style=\"display:none\">\n                            <iframe\n                                class=\"lazyload\"\n                                type=\"text/html\"\n                                width=\"640\"\n                                height=\"390\"\n                                frameborder=\"0\"\n                                webkitAllowFullScreen\n                                mozallowfullscreen\n                                allowFullScreen\n                                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\">\n                            </iframe>\n                        </div>\n                    </div>\n                    <div class=\"eyeva__imageGalleryModal-content\">\n                        <h2 class=\"eyeva__imageGalleryModal-title\">{{name}}</h2>\n\n                        {{#videos.length}}\n                            <div class=\"eyeva__imageGalleryModal-videos\">\n                                <p class=\"eyeva__imageGalleryModal-label\">{{videosLabel}}</p>\n                                <ul class=\"eyeva__imageGalleryModal-thumbnails\">\n                                    {{#videos}}\n                                        <li class=\"eyeva__imageGalleryModal-thumbnail\">\n                                            {{&linkElement}}\n                                    {{/videos}}\n                                </ul>\n                            </div>\n                        {{/videos.length}}\n\n                        {{#images360.length}}\n                            <div class=\"eyeva__imageGalleryModal-360\">\n                                <p class=\"eyeva__imageGalleryModal-label\">{{images360Label}}</p>\n                                <ul class=\"eyeva__imageGalleryModal-thumbnails\">\n                                    {{#images360}}\n                                        <li class=\"eyeva__imageGalleryModal-thumbnail\">\n                                            {{&linkElement}}\n                                        </li>\n                                    {{/images360}}\n                                </ul>\n                            </div>\n                        {{/images360.length}}\n\n                        {{#images.length}}\n                            <div class=\"eyeva__imageGalleryModal-images\">\n                                <p class=\"eyeva__imageGalleryModal-label\">{{imagesLabel}}</p>\n                                <ul class=\"eyeva__imageGalleryModal-thumbnails\">\n                                    {{#images}}\n                                        <li class=\"eyeva__imageGalleryModal-thumbnail\">\n                                            {{&linkElement}}\n                                        </li>\n                                    {{/images}}\n                                </ul>\n                            </div>\n                        {{/images.length}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";
    this.imageGallery = imageGallery;
    this.$gallery = $gallery;
    this.$body = $('body');
    if (imageGallery && $gallery) {
      this.createModal();
    }
  }
  var _proto = ImageGalleryModal.prototype;
  _proto.bindEvents = function bindEvents() {
    var _this = this;
    if (this.$gallery) {
      // open modal when click on video, 360 view, or more image thumbnails
      this.$gallery.find('[data-image-gallery-item-video], [data-image-gallery-item-360], [data-image-gallery-item-more]').find('[data-image-gallery-item-video-id], [data-image-gallery-item]').off('click').on('click', function (event) {
        event.preventDefault();
        var $a = $(event.currentTarget);
        var imageUrl = $a.data('imageGalleryNewImageUrl');
        var imageSrcset = $a.data('imageGalleryNewImageSrcset');
        var zoomImageUrl = $a.data('imageGalleryZoomImageUrl');
        var videoId = $a.data('imageGalleryItemVideoId');
        var step = $a.closest('[data-image-gallery-item-360]').length > 0 ? Number(imageUrl.split('#')[1]) || DEFAULT_STEP : null;
        _this.openModal(imageUrl, imageSrcset, zoomImageUrl, videoId, step);
      });
    }

    // close modal when click close button
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-close]').on('click', function (event) {
      event.preventDefault();
      _this.closeModal();
    });

    // close modal when press Escape key
    this.$galleryModal.on('keydown', function (event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        _this.closeModal();
      }
    });

    // close modal when click outside (overlay)
    this.$galleryModal.on('click', function (event) {
      if (_this.$galleryModal.is(event.target)) {
        event.preventDefault();
        _this.closeModal();
      }
    });

    // image thumbnails
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-item]').on('click', function (event) {
      event.preventDefault();
      var $a = $(event.currentTarget);
      _this.setMainImage($a.data('imageGalleryNewImageUrl'), $a.data('imageGalleryNewImageSrcset'), $a.data('imageGalleryZoomImageUrl'));
    });

    // video thumbnails
    this.$galleryModal.find('[data-image-gallery-item-video-id]').on('click', function (event) {
      event.preventDefault();
      var $a = $(event.currentTarget);
      var videoId = $a.data('imageGalleryItemVideoId');
      _this.setMainVideo(videoId);
    });

    // 360 image thumbnails
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-item-rotator]').on('click', function (event) {
      event.preventDefault();
      var $a = $(event.currentTarget);
      var totalStep = $a.data('eyevaImageGalleryModalItemRotator');
      _this.setMain360($a.data('imageGalleryNewImageUrl'), $a.data('imageGalleryNewImageSrcset'), $a.data('imageGalleryZoomImageUrl'), totalStep);
    });
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-360-previous]').on('click', function (event) {
      event.preventDefault();
      _this.previous360Step();
    });
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-360-next]').on('click', function (event) {
      event.preventDefault();
      _this.next360Step();
    });
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-360-play]').on('click', function (event) {
      event.preventDefault();
      _this.play360();
    });
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-360-pause]').on('click', function (event) {
      event.preventDefault();
      _this.pause360();
    });
  };
  _proto.destroyModal = function destroyModal() {
    if (this.$galleryModal) {
      this.$galleryModal.remove();
      this.$galleryModal = $();
    }
  };
  _proto.createModal = function createModal() {
    var _$mainImageLink$get;
    var $mainImageLink = this.imageGallery.$mainImage.find('a').clone();
    $mainImageLink.find('img').removeAttr('data-zoom-image').attr('data-eyeva-gallery-modal-main-image', '');
    var mainImageLinkElement = (_$mainImageLink$get = $mainImageLink.get(0)) == null ? void 0 : _$mainImageLink$get.outerHTML;
    var name = this.$gallery.closest('.productView').find('[data-eyeva-product-title]').text();
    var videosLabel = this.$gallery.data('videosLabel') || 'Videos';
    var images360Label = this.$gallery.data('images360Label') || '360 View';
    var imagesLabel = this.$gallery.data('imagesLabel') || 'Product Images';
    var videos = this.$gallery.find('[data-image-gallery-item-video]').get().map(function (li) {
      var _$$find$clone$get;
      return {
        linkElement: (_$$find$clone$get = $(li).find('[data-image-gallery-item-video-id]').clone().get(0)) == null ? void 0 : _$$find$clone$get.outerHTML
      };
    });
    var images360 = this.$gallery.find('[data-image-gallery-item-360]').get().map(function (li) {
      var _$el$get;
      var $el = $(li).find('[data-image-gallery-item]').clone();
      var imageUrl = $el.data('imageGalleryNewImageUrl');
      var step = Number(imageUrl.split('#')[1]) || DEFAULT_STEP;
      $el.removeAttr('data-image-gallery-item').attr('data-eyeva-image-gallery-modal-item-rotator', step);
      return {
        linkElement: (_$el$get = $el.get(0)) == null ? void 0 : _$el$get.outerHTML
      };
    });
    var images = this.$gallery.find('[data-image-gallery-item]').get().filter(function (a) {
      return $(a).closest('[data-image-gallery-item-video], [data-image-gallery-item-360], [data-image-gallery-item-more]').length === 0;
    }).map(function (a) {
      var _$a$get;
      var $a = $(a).clone().removeAttr('data-image-gallery-item').attr('data-eyeva-image-gallery-modal-item', '');
      return {
        linkElement: (_$a$get = $a.get(0)) == null ? void 0 : _$a$get.outerHTML
      };
    });
    this.$galleryModal = $(mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.modalTemplate, {
      mainImageLinkElement: mainImageLinkElement,
      name: name,
      videosLabel: videosLabel,
      images360Label: images360Label,
      imagesLabel: imagesLabel,
      videos: videos,
      images360: images360,
      images: images
    }));
    this.$galleryModal.hide().appendTo(this.$body);
    this.initImageZoom();
    this.focusTrap = (0,focus_trap__WEBPACK_IMPORTED_MODULE_2__.createFocusTrap)(this.$galleryModal.get(0), {
      escapeDeactivates: false,
      returnFocusOnDeactivate: false,
      allowOutsideClick: true
    });
  };
  _proto.openModal = function openModal(imageUrl, imageSrcset, zoomImageUrl, videoId, totalStep) {
    var _this2 = this;
    this.$lastActiveElement = $(document.activeElement);
    this.$body.addClass('_galleryModal-opened');
    if (this.imageGallery) {
      var $mainImg = this.imageGallery.$mainImage.find('img');
      this.setMainImage($mainImg.attr('src'), $mainImg.attr('srcset'), this.imageGallery.$mainImage.attr('data-zoom-image'));
    }
    if (videoId) {
      this.setMainVideo(videoId);
    } else if (totalStep) {
      this.setMain360(imageUrl, imageSrcset, zoomImageUrl, totalStep);
    }
    this.$galleryModal.addClass('_opening').show().removeClass('_opening');
    this.focusTrap.activate();
    setTimeout(function () {
      _this2.$galleryModal.find('[data-eyeva-image-gallery-modal-close]').trigger('focus');
    }, 200);
  };
  _proto.closeModal = function closeModal() {
    var _this3 = this;
    this.$galleryModal.addClass('_closing');
    setTimeout(function () {
      _this3.hideMainVideo();
      _this3.hide360UI();
      _this3.$body.removeClass('_galleryModal-opened');
      _this3.$galleryModal.removeClass('_closing').hide();
      _this3.focusTrap.deactivate();
      if (_this3.$lastActiveElement) _this3.$lastActiveElement.trigger('focus');
    }, 300);
  };
  _proto.setMainImage = function setMainImage(mainImageUrl, mainImageSrcset, zoomImageUrl) {
    this.hideMainVideo();
    this.hide360UI();
    this.showMainImage();
    this.setActiveThumb(mainImageUrl);
    this.swapMainImage(mainImageUrl, mainImageSrcset, zoomImageUrl);
  };
  _proto.showMainImage = function showMainImage() {
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-easyzoom]').show();
  };
  _proto.hideMainImage = function hideMainImage() {
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-easyzoom]').hide();
  };
  _proto.setActiveThumb = function setActiveThumb(mainImageUrl, videoId) {
    this.$galleryModal.find('[data-image-gallery-new-image-url], [data-image-gallery-item-video-id]').removeClass('is-active').filter(function (_i, a) {
      return mainImageUrl && $(a).data('imageGalleryNewImageUrl') === mainImageUrl || videoId && $(a).data('imageGalleryItemVideoId') === videoId;
    }).addClass('is-active');
  };
  _proto.swapMainImage = function swapMainImage(mainImageUrl, mainImageSrcset, zoomImageUrl) {
    var $imageContainer = this.$galleryModal.find('[data-eyeva-image-gallery-modal-easyzoom]');
    var $a = $imageContainer.find('a');
    var $mainImage = this.$galleryModal.find('[data-eyeva-gallery-modal-main-image]');
    $imageContainer.attr('data-zoom-image', zoomImageUrl);
    $a.attr('href', zoomImageUrl);
    $mainImage.attr('src', mainImageUrl).attr('srcset', mainImageSrcset);
    this.easyzoom.data('easyZoom').swap(mainImageUrl, zoomImageUrl, mainImageSrcset);
    var isBrowserIE = navigator.userAgent.includes('Trident');
    if (isBrowserIE) {
      var fallbackStylesIE = {
        'background-image': "url(" + mainImageUrl + ")",
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-origin': 'content-box',
        'background-size': 'contain'
      };
      this.$galleryModal.find('[data-eyeva-image-gallery-modal-main-image]').css(fallbackStylesIE);
    }
  };
  _proto.checkImage = function checkImage() {
    var $imageContainer = this.$galleryModal.find('[data-eyeva-image-gallery-modal-main-img-container]');
    var containerHeight = $imageContainer.height();
    var containerWidth = $imageContainer.width();
    var $image = this.easyzoom.data('easyZoom').$zoom;
    var height = $image.height();
    var width = $image.width();
    if (height < containerHeight || width < containerWidth) {
      this.easyzoom.data('easyZoom').hide();
    }
  };
  _proto.initImageZoom = function initImageZoom() {
    var _this4 = this;
    this.easyzoom = this.$galleryModal.find('[data-eyeva-image-gallery-modal-easyzoom]').easyZoom({
      onShow: function onShow() {
        return _this4.checkImage();
      },
      errorNotice: '',
      loadingNotice: ''
    });
  };
  _proto.showMainVideo = function showMainVideo() {
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-video-player]').show();
  };
  _proto.hideMainVideo = function hideMainVideo() {
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-video-player]').hide().find('iframe').attr('src', '');
  };
  _proto.setMainVideo = function setMainVideo(videoId) {
    this.hideMainImage();
    this.hide360UI();
    this.showMainVideo();
    var src = "https://www.youtube.com/embed/" + videoId + "?ref=0&autoplay=1";
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-video-player]').show().find('iframe').attr('src', src);
    this.setActiveThumb(null, videoId);
  };
  _proto.setMain360 = function setMain360(mainImageUrl, mainImageSrcset, zoomImageUrl, totalStep) {
    this.hideMainImage();
    this.hideMainVideo();
    this.show360UI();
    this.setActiveThumb(mainImageUrl);
    this.swapMain360(mainImageUrl, mainImageSrcset, zoomImageUrl, totalStep);
  };
  _proto.swapMain360 = function swapMain360(mainImageUrl, mainImageSrcset, zoomImageUrl, totalStep) {
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-360-img-container] img').attr('src', mainImageUrl).attr('srcset', mainImageSrcset).attr('data-zoom-image', zoomImageUrl);
    this.set360CurrentStep(0, totalStep);
  };
  _proto.show360UI = function show360UI() {
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]').show();
  };
  _proto.hide360UI = function hide360UI() {
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]').hide();
    this.pause360();
  };
  _proto.set360CurrentStep = function set360CurrentStep(currentStep, totalStep) {
    if (totalStep === void 0) {
      totalStep = DEFAULT_STEP;
    }
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]').css('--image-360-current', currentStep).css('--image-360-steps', totalStep);
  };
  _proto.next360Step = function next360Step() {
    var $el = this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]');
    var step = Number($el.css('--image-360-current')) || 0;
    var total = Number($el.css('--image-360-steps')) || DEFAULT_STEP;
    if (step < total - 1) {
      this.set360CurrentStep(step + 1, total);
    } else {
      this.set360CurrentStep(0, total);
    }
  };
  _proto.previous360Step = function previous360Step() {
    var $el = this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]');
    var step = Number($el.css('--image-360-current')) || 0;
    var total = Number($el.css('--image-360-steps')) || DEFAULT_STEP;
    if (step > 0) {
      this.set360CurrentStep(step - 1, total);
    } else {
      this.set360CurrentStep(total - 1, total);
    }
  };
  _proto.play360 = function play360() {
    var _this5 = this;
    clearInterval(this.interval360);
    this.interval360 = setInterval(function () {
      _this5.next360Step();
    }, 100);
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]').addClass('_playing');
  };
  _proto.pause360 = function pause360() {
    clearInterval(this.interval360);
    this.$galleryModal.find('[data-eyeva-image-gallery-modal-360]').removeClass('_playing');
  };
  return ImageGalleryModal;
}();
var CardImageGalleryModal = /*#__PURE__*/function (_ImageGalleryModal2) {
  function CardImageGalleryModal($scope, _temp) {
    var _this6;
    var _ref = _temp === void 0 ? {} : _temp,
      productId = _ref.productId,
      graphQLToken = _ref.graphQLToken,
      zoomSize = _ref.zoomSize,
      productSize = _ref.productSize,
      thumbSize = _ref.thumbSize,
      txtVideosLabel = _ref.txtVideosLabel,
      txtImages360Label = _ref.txtImages360Label,
      txtImagesLabel = _ref.txtImagesLabel;
    _this6 = _ImageGalleryModal2.call(this) || this;
    _this6.loadingModalTemplate = "\n        <div class=\"eyeva__imageGalleryModal-overlay\">\n            <div class=\"eyeva__imageGalleryModal\">\n                <div class=\"loadingOverlay eyeva__imageGalleryModal-loading\"></div>\n            </div>\n        </div>\n    ";
    _this6.$scope = $scope;
    _this6.productId = productId;
    _this6.graphQLToken = graphQLToken;
    _this6.zoomSize = zoomSize;
    _this6.productSize = productSize;
    _this6.thumbSize = thumbSize;
    _this6.txtVideosLabel = txtVideosLabel;
    _this6.txtImages360Label = txtImages360Label;
    _this6.txtImagesLabel = txtImagesLabel;
    return _this6;
  }
  _inheritsLoose(CardImageGalleryModal, _ImageGalleryModal2);
  var _proto2 = CardImageGalleryModal.prototype;
  _proto2.openLoadingModal = /*#__PURE__*/function () {
    var _openLoadingModal = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            this.destroyModal();
            this.$lastActiveElement = $(document.activeElement);
            this.$body.addClass('_galleryModal-opened');

            // display loading modal
            this.$galleryModal = $(mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.loadingModalTemplate));
            this.$galleryModal.hide().appendTo(this.$body);
            this.$galleryModal.addClass('_opening').show().removeClass('_opening');
          case 1:
            return _context.a(2);
        }
      }, _callee, this);
    }));
    function openLoadingModal() {
      return _openLoadingModal.apply(this, arguments);
    }
    return openLoadingModal;
  }();
  _proto2.loadModal = /*#__PURE__*/function () {
    var _loadModal = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var mainImage, mainImageSrcset, mainImageLinkElement, name, videosLabel, images360Label, imagesLabel, videos, images360, images, $galleryModal;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return this.fetchProduct();
          case 1:
            mainImage = this.images.find(function (image) {
              return image.isDefault;
            }) || this.images[0];
            mainImageSrcset = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.tools.imageSrcset.getSrcset(mainImage.urlTemplate);
            mainImageLinkElement = "\n            <a\n                href=\"" + mainImage.zoomUrl + "\"\n                data-image-gallery-new-image-url=\"" + mainImage.url + "\"\n                data-image-gallery-new-image-srcset=\"" + mainImageSrcset + "\"\n                data-image-gallery-zoom-image-url=\"" + mainImage.zoomUrl + "\"\n            ><img class=\"lazyload\" src=\"" + mainImage.thumbnailUrl + "\" data-srcset=\"" + mainImageSrcset + "\" data-sizes=\"auto\" alt=\"" + mainImage.altText + "\" /></a>";
            name = this.$scope.find('.card-title').text();
            videosLabel = this.txtVideosLabel || 'Videos';
            images360Label = this.txtImages360Label || '360 View';
            imagesLabel = this.txtImagesLabel || 'Product Images';
            videos = this.videos.map(function (video) {
              var url = new URL(video.url);
              var videoId = url.searchParams.get('v');
              return {
                linkElement: "\n                    <a\n                        class=\"productView-thumbnail-link\"\n                        href=\"" + video.url + "\"\n                        data-image-gallery-item-video-id=\"" + videoId + "\"\n                    >\n                        <img src=\"https://i.ytimg.com/vi/" + videoId + "/default.jpg\" />\n                        <svg aria-hidden=\"true\"><use href=\"#icon-play-solid\"></use></svg>\n                    </a>"
              };
            });
            images360 = this.images360.map(function (imageUrl) {
              var step = Number(imageUrl.split('#')[1]) || DEFAULT_STEP;
              return {
                linkElement: "\n                    <a\n                        class=\"productView-thumbnail-link\"\n                        href=\"" + imageUrl + "\"\n                        data-eyeva-image-gallery-modal-item-rotator=\"" + step + "\"\n                        data-image-gallery-new-image-url=\"" + imageUrl + "\"\n                        data-image-gallery-new-image-srcset=\"" + imageUrl + "\"\n                        data-image-gallery-zoom-image-url=\"" + imageUrl + "\"\n                    >\n                        <img src=\"" + imageUrl + "\" />\n                        <svg aria-hidden=\"true\"><use href=\"#icon-360\"></use></svg>\n                    </a>"
              };
            });
            images = this.images.map(function (image) {
              var imageSrcset = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.tools.imageSrcset.getSrcset(image.urlTemplate);
              return {
                linkElement: "\n                    <a\n                        class=\"productView-thumbnail-link\"\n                        href=\"" + image.zoomUrl + "\"\n                        data-eyeva-image-gallery-modal-item\n                        data-image-gallery-new-image-url=\"" + image.url + "\"\n                        data-image-gallery-new-image-srcset=\"" + imageSrcset + "\"\n                        data-image-gallery-zoom-image-url=\"" + image.zoomUrl + "\"\n                    >\n                        <img class=\"lazyload\" src=\"" + image.thumbnailUrl + "\" data-srcset=\"" + imageSrcset + "\" data-sizes=\"auto\" alt=\"" + image.altText + "\" />\n                    </a>"
              };
            });
            $galleryModal = $(mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.modalTemplate, {
              mainImageLinkElement: mainImageLinkElement,
              name: name,
              videosLabel: videosLabel,
              images360Label: images360Label,
              imagesLabel: imagesLabel,
              videos: videos,
              images360: images360,
              images: images
            })); // replace loading modal with the actual modal
            this.$galleryModal.html($galleryModal.html());
            this.initImageZoom();
            this.focusTrap = (0,focus_trap__WEBPACK_IMPORTED_MODULE_2__.createFocusTrap)(this.$galleryModal.get(0), {
              escapeDeactivates: false,
              returnFocusOnDeactivate: false,
              allowOutsideClick: true
            });
            this.bindEvents();
          case 2:
            return _context2.a(2);
        }
      }, _callee2, this);
    }));
    function loadModal() {
      return _loadModal.apply(this, arguments);
    }
    return loadModal;
  }();
  _proto2.openModal = function openModal(_temp2) {
    var _this7 = this;
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$firstVideo = _ref2.firstVideo,
      firstVideo = _ref2$firstVideo === void 0 ? false : _ref2$firstVideo,
      _ref2$first = _ref2.first360,
      first360 = _ref2$first === void 0 ? false : _ref2$first;
    this.openLoadingModal();
    this.loadModal().then(function () {
      if (firstVideo) {
        var videoId = _this7.$galleryModal.find('[data-image-gallery-item-video-id]').first().data('imageGalleryItemVideoId');
        _this7.setMainVideo(videoId);
      }
      if (first360) {
        var $el = _this7.$galleryModal.find('[data-eyeva-image-gallery-modal-item-rotator]').first();
        _this7.setMain360($el.data('imageGalleryNewImageUrl'), $el.data('imageGalleryNewImageSrcset'), $el.data('imageGalleryZoomImageUrl'), $el.data('eyevaImageGalleryModalItemRotator'));
      }
      _this7.focusTrap.activate();
      setTimeout(function () {
        _this7.$galleryModal.find('[data-eyeva-image-gallery-modal-close]').trigger('focus');
      }, 200);
    });
  };
  _proto2.fetchProduct = /*#__PURE__*/function () {
    var _fetchProduct = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _this$zoomSize$split$, zoomWidth, zoomHeight, _this$productSize$spl, imageWidth, imageHeight, _this$thumbSize$split, thumbWidth, thumbHeight, resp, _ref3, images, videos, images360;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (!(this.images || this.videos || this.images360)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _this$zoomSize$split$ = this.zoomSize.split('x').map(Number), zoomWidth = _this$zoomSize$split$[0], zoomHeight = _this$zoomSize$split$[1];
            _this$productSize$spl = this.productSize.split('x').map(Number), imageWidth = _this$productSize$spl[0], imageHeight = _this$productSize$spl[1];
            _this$thumbSize$split = this.thumbSize.split('x').map(Number), thumbWidth = _this$thumbSize$split[0], thumbHeight = _this$thumbSize$split[1];
            _context3.n = 2;
            return $.ajax({
              url: '/graphql',
              method: 'POST',
              data: JSON.stringify({
                query: "\n                    query(\n                        $productId: Int!,\n                        $zoomWidth: Int!,\n                        $zoomHeight: Int!,\n                        $imageWidth: Int!,\n                        $imageHeight: Int!,\n                        $thumbWidth: Int!,\n                        $thumbHeight: Int!\n                    ) {\n                        site {\n                            product(entityId: $productId) {\n                                images {\n                                    edges {\n                                        node {\n                                            altText\n                                            isDefault\n                                            url(width: $imageWidth, height: $imageHeight)\n                                            thumbnailUrl: url(width: $thumbWidth, height: $thumbHeight)\n                                            zoomUrl: url(width: $zoomWidth, height: $zoomHeight)\n                                            urlTemplate\n                                        }\n                                    }\n                                }\n                                customFields(names: [\"__@360\"]) {\n                                    edges {\n                                        node {\n                                            name\n                                            value\n                                        }\n                                    }\n                                }\n                                videos {\n                                    edges {\n                                        node {\n                                            title\n                                            url\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                ",
                variables: {
                  productId: this.productId,
                  zoomWidth: zoomWidth,
                  zoomHeight: zoomHeight,
                  imageWidth: imageWidth,
                  imageHeight: imageHeight,
                  thumbWidth: thumbWidth,
                  thumbHeight: thumbHeight
                }
              }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + this.graphQLToken
              },
              xhrFields: {
                withCredentials: true
              }
            });
          case 2:
            resp = _context3.v;
            _ref3 = [resp.data.site.product.images.edges.map(function (_ref4) {
              var node = _ref4.node;
              return node;
            }), resp.data.site.product.videos.edges.map(function (_ref5) {
              var node = _ref5.node;
              return node;
            }), resp.data.site.product.customFields.edges.filter(function (_ref6) {
              var node = _ref6.node;
              return node.name === '__@360';
            }).map(function (_ref7) {
              var node = _ref7.node;
              return node.value;
            })], images = _ref3[0], videos = _ref3[1], images360 = _ref3[2];
            /**
             * @type {Array<{altText: string, isDefault: boolean, url?: string, thumbnailUrl?: string, zoomUrl?: string, urlTemplate?: string}>}
             */
            this.images = images;

            /**
             * @type {Array<{title: string, url: string}>}
             */
            this.videos = videos;

            /**
             * @type {string[]}
             */
            this.images360 = images360;
          case 3:
            return _context3.a(2);
        }
      }, _callee3, this);
    }));
    function fetchProduct() {
      return _fetchProduct.apply(this, arguments);
    }
    return fetchProduct;
  }();
  return CardImageGalleryModal;
}(ImageGalleryModal);
var ImageGallery = /*#__PURE__*/function (_CornerstoneImageGall) {
  function ImageGallery($gallery) {
    var _this8;
    _this8 = _CornerstoneImageGall.call(this, $gallery) || this;
    _this8.imageGalleryModal = new ImageGalleryModal(_this8, $gallery);
    return _this8;
  }
  _inheritsLoose(ImageGallery, _CornerstoneImageGall);
  var _proto3 = ImageGallery.prototype;
  _proto3.bindEvents = function bindEvents() {
    _CornerstoneImageGall.prototype.bindEvents.call(this);
    this.imageGalleryModal.bindEvents();
  };
  return ImageGallery;
}(_theme_product_image_gallery__WEBPACK_IMPORTED_MODULE_4__["default"]);


/***/ },

/***/ "./assets/js/papathemes/eyeva/product-details.js"
/*!*******************************************************!*\
  !*** ./assets/js/papathemes/eyeva/product-details.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetails)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* harmony import */ var _theme_common_product_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./assets/js/papathemes/utils.js");
/* harmony import */ var _sale_countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sale-countdown */ "./assets/js/papathemes/sale-countdown.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(typeof e + " is not iterable"); }
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* eslint-disable no-console */
/* eslint-disable camelcase */
// import utils from '@bigcommerce/stencil-utils';






var DEBUG_LOG = false;
var normalizeOptionString = function normalizeOptionString(s) {
  return s.replace(/:/g, '').replace(/\s{2,}/g, ' ').toLowerCase();
};
function equalOptionString(a, b) {
  return normalizeOptionString(a) === normalizeOptionString(b);
}

/**
 * Check if two arrays are equal regardless of order
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean}
 */
function areArraysEqualUnordered(arr1, arr2) {
  var _arr1 = arr1.slice().sort(function (a, b) {
    return a - b;
  });
  var _arr2 = arr2.slice().sort(function (a, b) {
    return a - b;
  });
  return _arr1.length === _arr2.length && _arr1.every(function (value, index) {
    return value === _arr2[index];
  });
}
var cachedSettings;

/**
 * Handle multiple promises with a concurrency limit (e.g., processing only 10 promises at a time out of 10)
 *
 * @param {Array<Function<T>} promises functions that return a promise
 * @param {*} limit number of promises to process at a time
 * @returns {Promise<Array<T>>} results of all promises
 */
function handlePromisesWithLimit(_x, _x2) {
  return _handlePromisesWithLimit.apply(this, arguments);
}
function _handlePromisesWithLimit() {
  _handlePromisesWithLimit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(promises, limit) {
    var results, executing, _loop, _iterator, _step;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          if (limit === void 0) {
            limit = 10;
          }
          results = [];
          executing = []; // Track the promises currently executing
          _loop = /*#__PURE__*/_regenerator().m(function _loop() {
            var promise, p;
            return _regenerator().w(function (_context7) {
              while (1) switch (_context7.n) {
                case 0:
                  promise = _step.value;
                  // Start the promise and add it to the executing list
                  p = promise().then(function (result) {
                    // Remove the finished promise from executing list
                    executing.splice(executing.indexOf(p), 1);
                    return result;
                  });
                  results.push(p);
                  executing.push(p);

                  // If we're at the limit, wait for the first to finish
                  if (!(executing.length >= limit)) {
                    _context7.n = 1;
                    break;
                  }
                  _context7.n = 1;
                  return Promise.race(executing);
                case 1:
                  return _context7.a(2);
              }
            }, _loop);
          });
          _iterator = _createForOfIteratorHelperLoose(promises);
        case 1:
          if ((_step = _iterator()).done) {
            _context8.n = 3;
            break;
          }
          return _context8.d(_regeneratorValues(_loop()), 2);
        case 2:
          _context8.n = 1;
          break;
        case 3:
          return _context8.a(2, Promise.all(results));
      }
    }, _callee7);
  }));
  return _handlePromisesWithLimit.apply(this, arguments);
}
var ProductDetails = /*#__PURE__*/function (_CornerstoneProductDe) {
  function ProductDetails($scope) {
    var _this;
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.fixFormElementUniqueIds)($scope);
    for (var _len = arguments.length, _args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      _args[_key - 1] = arguments[_key];
    }
    _this = _CornerstoneProductDe.call.apply(_CornerstoneProductDe, [this, $scope].concat(_args)) || this;
    _this.modifiersModalOverlayTemplate = "\n        <div class=\"eyeva__productView-modifiersModal-overlay\" data-eyeva-modifiers-modal-overlay></div>\n    ";
    _this.modifiersModalTemplate = "\n        <div class=\"eyeva__productView-modifiersModal\" data-eyeva-modifiers-modal>\n            <div class=\"eyeva__productView-modifiersModal-panel\">\n                <div class=\"eyeva__productView-modifiersModal-header\">\n                    <button class=\"eyeva__productView-modifiersModal-close-button\" type=\"button\" title=\"Close\" data-eyeva-modifiers-modal-close>\n                        <span class=\"aria-description--hidden\">Close</span>\n                        <span class=\"icon\" aria-hidden=\"true\">\n                            <svg><use href=\"#icon-xmark-large\"></use></svg>\n                        </span>\n                    </button>\n                    <button class=\"eyeva__productView-modifiersModal-back-button\" type=\"button\" title=\"Back\" data-eyeva-modifiers-modal-back>\n                        <span class=\"aria-description--hidden\">Back</span>\n                        <span class=\"icon\" aria-hidden=\"true\">\n                            <svg><use href=\"#icon-arrow-left-long\"></use></svg>\n                        </span>\n                    </button>\n                    <h2 class=\"eyeva__productView-modifiersModal-header-title\"><%&productTitle%></h2>\n                </div>\n                <div class=\"eyeva__productView-modifiersModal-content\" data-eyeva-modifiers-modal-content>\n                    <h3 class=\"eyeva__productView-modifiersModal-title\" data-eyeva-modifiers-modal-title>\n                        <!-- contain current step's title -->\n                    </h3>\n                    <div class=\"eyeva__productView-modifiersModal-options\" data-eyeva-modifiers-modal-options>\n                        <!-- contains modifiers -->\n                    </div>\n                    <div class=\"eyeva__productView-modifiersModal-summary\" data-eyeva-modifiers-modal-summary>\n                        <!-- contains summary -->\n                    </div>\n                    <div class=\"eyeva__productView-modifiersModal-complete\" data-eyeva-modifiers-modal-complete>\n                        <!-- contains add to cart button & qty box -->\n                    </div>\n                </div>\n                <div class=\"eyeva__productView-modifiersModal-footer\" data-eyeva-modifiers-modal-footer>\n                    <div class=\"eyeva__productView-modifiersModal-continue\">\n                        <button class=\"button button--primary\" type=\"button\" data-eyeva-modifiers-modal-continue>\n                            <%txtContinue%>\n                        </button>\n                    </div>\n                    <div class=\"eyeva__productView-modifiersModal-footer-subtotal\" data-eyeva-modifiers-modal-footer-subtotal>\n                        <!-- contains subtotal -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"eyeva__productView-modifiersModal-image\">\n                <%#mainImageUrl%>\n                    <img\n                        src=\"<%mainImageUrl%>\"\n                        data-srcset=\"<%mainImageSrcset%>\"\n                        data-zoom-image=\"<%zoomImageUrl%>\"\n                        data-sizes=\"auto\"\n                        class=\"lazyload\"\n                        data-eyeva-modifiers-modal-img />\n                <%/mainImageUrl%>\n            </div>\n        </div>\n    ";
    _this.optionTooltipTemplate = "\n        <div class=\"eyeva__productView-option-tooltip\"><%tooltip%></div>\n    ";
    _this.optionValueTooltipTemplate = "\n        <div class=\"eyeva__productView-value-tooltip\"><%tooltip%></div>\n    ";
    _this.optionValueTooltipHeadingTemplate = "\n        <div class=\"eyeva__productView-value-tooltip-heading\"><%heading%></div>\n    ";
    _this.optionPriceTemplate = "\n        <div class=\"eyeva__productView-option-price-group\">\n            <%#preloader%>\n                <div class=\"eyeva__productView-option-price _preloader\">...</div>\n            <%/preloader%>\n            <%#priceWithTax%>\n                <div class=\"eyeva__productView-option-price _withTax\">\n                    <%#nonSalePriceWithTax%>\n                        <span class=\"eyeva__productView-option-price-old _withTax price\" data-value=\"<%nonSalePriceWithTaxValue%>\"><%nonSalePriceWithTax%></span>\n                    <%/nonSalePriceWithTax%>\n                    <span class=\"eyeva__productView-option-price-now _withTax price\" data-value=\"<%priceWithTaxValue%>\"><%priceWithTax%></span>\n                </div>\n            <%/priceWithTax%>\n            <%#priceWithoutTax%>\n                <div class=\"eyeva__productView-option-price _withoutTax\">\n                    <%#nonSalePriceWithoutTax%>\n                        <span class=\"eyeva__productView-option-price-old _withoutTax price\" data-value=\"<%nonSalePriceWithoutTaxValue%>\"><%nonSalePriceWithoutTax%></span>\n                    <%/nonSalePriceWithoutTax%>\n                    <span class=\"eyeva__productView-option-price-now _withoutTax price\" data-value=\"<%priceWithoutTaxValue%>\"><%priceWithoutTax%></span>\n                </div>\n            <%/priceWithoutTax%>\n        </div>\n    ";
    _this.optionPricePlainTemplate = "\n        <%#priceWithTax%>\n            (<%priceWithTax%>)\n        <%/priceWithTax%>\n        <%^priceWithTax%>\n            <%#priceWithoutTax%>\n                (<%priceWithoutTax%>)\n            <%/priceWithoutTax%>\n        <%/priceWithTax%>\n    ";
    _this.subtotalTemplate = "\n        <div class=\"eyeva__productView-option-subtotal-group\">\n            <div class=\"eyeva__productView-option-subtotal-group-label\"><%txtSubtotal%></div>\n            <%#preloader%>\n                <div class=\"eyeva__productView-option-subtotal _preloader\">...</div>\n            <%/preloader%>\n            <%#priceWithTax%>\n                <div class=\"eyeva__productView-option-subtotal _withTax\">\n                    <%#nonSalePriceWithTax%>\n                        <span class=\"eyeva__productView-option-subtotal-old _withTax price\" data-value=\"<%nonSalePriceWithTaxValue%>\"><%nonSalePriceWithTax%></span>\n                    <%/nonSalePriceWithTax%>\n                    <span class=\"eyeva__productView-option-subtotal-now _withTax price\" data-value=\"<%priceWithTaxValue%>\"><%priceWithTax%></span>\n                </div>\n            <%/priceWithTax%>\n            <%#priceWithoutTax%>\n                <div class=\"eyeva__productView-option-subtotal _withoutTax\">\n                    <%#nonSalePriceWithoutTax%>\n                        <span class=\"eyeva__productView-option-subtotal-old _withoutTax price\" data-value=\"<%nonSalePriceWithoutTaxValue%>\"><%nonSalePriceWithoutTax%></span>\n                    <%/nonSalePriceWithoutTax%>\n                    <span class=\"eyeva__productView-option-subtotal-now _withoutTax price\" data-value=\"<%priceWithoutTaxValue%>\"><%priceWithoutTax%></span>\n                </div>\n            <%/priceWithoutTax%>\n        </div>\n    ";
    _this.summaryTemplate = "\n        <div class=\"eyeva__productView-summaryOptions\">\n            <%#options%>\n                <div class=\"eyeva__productView-summaryOptions-option\">\n                    <span class=\"eyeva__productView-summaryOptions-option-name\"><%name%></span>\n                    <span class=\"eyeva__productView-summaryOptions-option-value\"><%value%></span>\n                    <span class=\"eyeva__productView-summaryOptions-option-prices\"><%&priceHtml%></span>\n                </div>\n            <%/options%>\n        </div>\n    ";
    _this.showPriceFree = false;
    _this.showPriceZero = false;
    _this.addToCartWrapperSelector = '.add-to-cart-wrapper';
    /**
     * Cache for function `fetchOptionPrice`
     * @type {Object<string, { pricesWithTax: { basePrice: { value: number, currencyCode: string }, price: { value: number, currencyCode: string }, salePrice: { value: number, currencyCode: string } }, pricesWithoutTax: { basePrice: { value: number, currencyCode: string }, price: { value: number, currencyCode: string }, salePrice: { value: number, currencyCode: string } } }>}
     */
    _this.fetchOptionPriceCache = {};
    _this.console = {
      log: function log() {
        if (DEBUG_LOG) {
          var _console;
          (_console = console).log.apply(_console, arguments);
        }
      }
    };
    var $form = _this.$scope.find('[data-cart-item-add]');
    var $chooseOptionsBtn = $form.find('[data-eyeva-product-option-open]');

    /**
     * @type {number}
     */
    _this.productId = Number($form.find('[name="product_id"]').val());

    /**
     * @type {Array<{name: string, value: string}>}
     */
    _this.customFields = function () {
      var customFieldsText = $form.find('[data-eyeva-product-custom-fields]').text();
      if (customFieldsText) {
        try {
          return JSON.parse(customFieldsText);
        } catch (e) {
          // console.error('Invalid JSON for custom fields');
        }
      }
      return [];
    }();
    _this.console.log('ProductDetails.customFields:', _this.customFields);

    /**
     * @type {Array<{
     *   id: number,
     *   display_name: string,
     *   state: 'modifier' | 'variant_option',
     *   partial: 'swatch' | 'set-rectangle' | 'set-select' | 'set-radio'
     *     | 'input-text' | 'input-numbers' | 'input-checkbox' | 'input-file'
     *     | 'date' | 'textarea' | 'product-list',
     *   required: boolean,
     *   prefill?: string,
     *   selected_date?: {
     *     day: string,
     *     month: string,
     *     year: string
     *   },
     *   checked?: boolean,
     *   noValue?: number,
     *   value?: number,
     *   values?: Array<{
     *     id: number,
     *     label: string,
     *     selected: boolean,
     *     data: string | Array<string>
     *   }>
     * }>}
     *
     * - id: Option ID
     * - display_name: Display name of the option
     * - state: Type of option state, either 'modifier' or 'variant_option'
     * - required: Indicates if this option is required
     * - prefill: Optional prefill value, available for text based fields only
     * - selected_date: Optional selected date object, available for date field only:
     *   - day: Day part of the date
     *   - month: Month part of the date
     *   - year: Year part of the date
     * - checked: Optional checked status for the option, available for checkbox field only
     * - noValue: Optional value for "no selection" (if applicable), available for checkbox field only
     * - value: Optional numeric value assigned to the option, available for checkbox field only
     * - values: Optional array of possible values, available for radio, select, swatch, product pick-list fields only:
     *   - id: Unique identifier for each value
     *   - label: Display label for the value
     *   - selected: Indicates if this value is selected
     *   - data: Additional data for the value, can be a string or array of strings
     */
    _this.productOptions = function () {
      var productOptionsText = $form.find('[data-eyeva-product-options]').text();
      if (productOptionsText) {
        try {
          return JSON.parse(productOptionsText);
        } catch (e) {
          // console.error('Invalid JSON for product options');
        }
      }
      return [];
    }();
    _this.console.log('ProductDetails.productOptions:', _this.productOptions);

    /**
     * Enable or disable modifiers modal feature
     * @type {boolean}
     */
    // enable modifiers modal if our choose options button appears in the product details
    _this.enableModifiersModal = $chooseOptionsBtn.length > 0;
    if (_this.enableModifiersModal) {
      _this.createModifiersModal();
    }
    _this.bindProductEditEvents();
    _this.bindModalDestroy();
    _this.initOptionStepper();
    _this.syncProductCardQty();
    _this.initSaleCountdown();
    $('body').trigger('update-wishlist-buttons', [_this.$scope]);
    return _this;
  }
  _inheritsLoose(ProductDetails, _CornerstoneProductDe);
  var _proto = ProductDetails.prototype;
  _proto.getViewModel = function getViewModel() {
    var _CornerstoneProductDe2;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var model = (_CornerstoneProductDe2 = _CornerstoneProductDe.prototype.getViewModel).call.apply(_CornerstoneProductDe2, [this].concat(args));
    model.$updateProductWrapper = this.$updateProductWrapper;
    return model;
  };
  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    _CornerstoneProductDe.prototype.updateDefaultAttributesForOOS.call(this, data);
    var $btn = this.$updateProductWrapper.find('input, button');
    if (!data.purchasable || !data.instock) {
      $btn.prop('disabled', true);
    } else {
      $btn.prop('disabled', false);
    }
  }

  /**
   * Override the method to support edit product in cart
   * @param {Event} event
   * @param {HTMLFormElement} form
   */;
  _proto.addProductToCart = function addProductToCart(event, form) {
    if (event.editProductInCart) {
      $(form).find('input[name="action"]').val('EditProductFieldsInCart');
      this.editProductToCart(event, form);
    } else {
      $(form).find('input[name="action"]').val('add');
      _CornerstoneProductDe.prototype.addProductToCart.call(this, event, form);
    }
  }

  /**
   * Edit product in cart.
   * Almost clone from addProductToCart method from the parent class.
   * @param {Event} event
   * @param {HTMLFormElement} form
   * @returns {void}
   */;
  _proto.editProductToCart =
  /*#__PURE__*/
  function () {
    var _editProductToCart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event, form) {
      var _this2 = this;
      var $saveBtn, originalBtnVal, waitMessage, formData, success, failure, itemId, newQty, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            $saveBtn = $('[data-update-product-wrapper]', $(event.target)).find('input, button');
            originalBtnVal = $saveBtn.val();
            waitMessage = $saveBtn.data('waitMessage'); // Do not do AJAX if browser doesn't support FormData
            if (!(window.FormData === undefined)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            formData = new FormData(form); // Prevent default
            event.preventDefault();
            $saveBtn.val(waitMessage).prop('disabled', true);
            this.$overlay.show();
            this.setLiveRegionAttributes($saveBtn.next(), 'status', 'polite');
            success = function success(response) {
              $saveBtn.val(originalBtnVal).prop('disabled', false);
              _this2.$overlay.hide();
              if (typeof _this2.context.editProductCallback === 'function') {
                _this2.context.editProductCallback(response);
              }
            };
            failure = function failure(errorText) {
              // Strip the HTML from the error message
              var tmp = document.createElement('DIV');
              tmp.innerHTML = errorText;
              if (!_this2.checkIsQuickViewChild($saveBtn)) {
                (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_3__.alertModal)().$preModalFocusedEl = $saveBtn;
              }
              return (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_3__.showAlertModal)(tmp.textContent || tmp.innerText);
            };
            if (!this.context.editProductQuantity) {
              _context.n = 5;
              break;
            }
            itemId = formData.get('item_id');
            newQty = formData.get('qty[]');
            _context.p = 2;
            _context.n = 3;
            return this.updateCartItemQuantity(itemId, newQty);
          case 3:
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            return _context.a(2, failure(_t));
          case 5:
            _context.n = 6;
            return $.ajax({
              type: 'POST',
              url: form.getAttribute('action'),
              data: formData,
              processData: false,
              contentType: false
            }).done(function (response) {
              return success(response);
            }).fail(function (_xhr, _status, error) {
              return failure(error);
            });
          case 6:
            return _context.a(2);
        }
      }, _callee, this, [[2, 4]]);
    }));
    function editProductToCart(_x3, _x4) {
      return _editProductToCart.apply(this, arguments);
    }
    return editProductToCart;
  }();
  _proto.updateCartItemQuantity = function updateCartItemQuantity(itemId, newQty) {
    return new Promise(function (resolve, reject) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
        var _response$data;
        if (err) {
          return reject(err);
        }
        if ((response == null || (_response$data = response.data) == null ? void 0 : _response$data.status) !== 'succeed') {
          reject(response.data.errors.join('\n'));
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * When click on the Add New to Cart button, trigger the form submit event with `addNewToCart` flag
   * so that new product is always added to cart regardless of edit product in cart or not
   */;
  _proto.bindProductEditEvents = function bindProductEditEvents() {
    var submitEvent = $.Event('submit', {
      editProductInCart: true
    });
    var $form = this.$scope.find('[data-cart-item-add]');
    this.$updateProductWrapper.find('input, button').on('click', function (event) {
      event.preventDefault();
      $form.trigger(submitEvent);
    });
  };
  _proto.bindModalDestroy = function bindModalDestroy() {
    var _this3 = this;
    // destroy the image gallery modal when quick-view modal is closed
    // to prevent memory leak
    this.$scope.closest('.modal').one(_theme_global_modal__WEBPACK_IMPORTED_MODULE_3__.ModalEvents.closed, function () {
      _this3.imageGallery.imageGalleryModal.destroyModal();
    });
  };
  _proto.initOptionStepper = function initOptionStepper() {
    this.$scope.find('[data-product-option-stepper]').each(function (_i, formFieldEl) {
      var $formField = $(formFieldEl);
      var $dec = $formField.find('[data-action="dec"]');
      var $inc = $formField.find('[data-action="inc"]');
      var $check = $formField.find('[data-action="check"]');
      var init = function init() {
        $formField.find('.form-radio').addClass('_checking');
        var $radios = $formField.find('.form-radio:visible');
        var $checked = $radios.filter(':checked');
        var $first = $radios.first();
        if ($checked.length > 0) {
          var i = $radios.index($checked);
          $dec.prop('disabled', i === 0);
          $inc.prop('disabled', i === $radios.length - 1);
          $check.addClass('_checked');
        } else if ($first.length > 0) {
          $dec.prop('disabled', true);
          $inc.prop('disabled', false);
        }
        $formField.find('.form-radio').removeClass('_checking');
      };
      init();
      var select = function select(inc) {
        $formField.find('.form-radio').addClass('_checking');
        var $radios = $formField.find('.form-radio:visible');
        var $checked = $radios.filter(':checked');
        var $first = $radios.first();
        if ($checked.length > 0) {
          // found checked radio
          var i = $radios.index($checked);
          if (inc) {
            // select the next radio
            if (i < $radios.length - 1) {
              $radios.eq(i + 1).prop('checked', true).trigger('change');
              $dec.prop('disabled', false);
              $inc.prop('disabled', i + 1 === $radios.length - 1);
            }
          } else if (i > 0) {
            // select the previous radio
            $radios.eq(i - 1).prop('checked', true).trigger('change');
            $inc.prop('disabled', false);
            $dec.prop('disabled', i - 1 === 0);
          }
          $check.addClass('_checked');
        } else if ($first.length > 0) {
          // no checked radio, and found the first radio
          if (inc && $first.filter('[value=""], [value="0"]').length > 0) {
            // if + and first option is 'none', ignore the none option, select the first valued option
            $radios.not($first).first().prop('checked', true).trigger('change');
            $dec.prop('disabled', false);
            $inc.prop('disabled', $radios.length === 2);
          } else {
            // else, select the first radio
            $first.prop('checked', true).trigger('change');
            $dec.prop('disabled', true);
            $inc.prop('disabled', $radios.length === 1);
          }
          $check.addClass('_checked');
        }

        // if the checked radio is 'none' then uncheck the check button
        if ($formField.find('.form-radio:checked').filter('[value=""], [value="0"]').length > 0) {
          $check.removeClass('_checked');
        }
        $formField.find('.form-radio').removeClass('_checking');
      };
      $dec.on('click', function (event) {
        event.preventDefault();
        select(false);
      });
      $inc.on('click', function (event) {
        event.preventDefault();
        select(true);
      });
      $check.on('click', function (event) {
        event.preventDefault();
        if ($check.hasClass('_checked')) {
          // uncheck the checked radio and select the 'none' radio
          var $uncheck = $formField.find('.form-radio:checked').prop('checked', false);
          var $none = $formField.find('.form-radio').filter('[value=""], [value="0"]').prop('checked', true);
          if ($none.length > 0) $none.trigger('change');else if ($uncheck.length) $uncheck.trigger('change');
          $check.removeClass('_checked');
        } else {
          select(true);
        }
      });
    });
  }

  /**
   * Sync product quantity with qty of the corresponding product card
   */;
  _proto.syncProductCardQty = function syncProductCardQty() {
    if (this.context.editProductQuantity) return; // stop if edit product in cart

    var cardQty = $("[data-card-quantity-change] input[name=\"qty_" + this.productId + "\"]").val();
    if (!cardQty) return;
    var $qty = this.$scope.find('[data-quantity-change] input[name="qty[]"]');
    var qty = $qty.val();
    if ($qty.length > 0 && qty !== cardQty) {
      $qty.val(cardQty).trigger('change');
    }
  };
  _proto.initSaleCountdown = function initSaleCountdown() {
    var txtSaleCountdownJSON = this.context.txtSaleCountdownJSON;
    var $el = this.$scope.find('[data-sale-countdown-date]');
    $el.data('saleCountdownTranslations', {
      end_in: $el.data('saleCountdownLabel')
    });
    _sale_countdown__WEBPACK_IMPORTED_MODULE_5__["default"].configure({
      txtSaleCountdownJSON: txtSaleCountdownJSON
    });
    _sale_countdown__WEBPACK_IMPORTED_MODULE_5__["default"].add($el);
  };
  _proto.updateView = function updateView(data) {
    var _CornerstoneProductDe3;
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    (_CornerstoneProductDe3 = _CornerstoneProductDe.prototype.updateView).call.apply(_CornerstoneProductDe3, [this, data].concat(args));
    this.updateSalePercent(data);
    this.updateShippingCountdown(data);
    if (this.enableModifiersModal) {
      this.$scope.find('[data-eyeva-product-option-open]').prop('disabled', !(data != null && data.purchasable));
      if (this.$scope.find('[data-eyeva-modifiers-modal]').hasClass('is-open')) {
        if (!this.manualUpdateModifiersView) {
          this.updateModifiersView();
        } else {
          var $form = this.$scope.find('[data-cart-item-add]');
          var $productOptionsEl = $form.find('[data-product-option-change]');
          var $modifiersModalOptions = $productOptionsEl.find('[data-eyeva-modifiers-modal-options]');
          var $modifiersModalSubtotal = $productOptionsEl.find('[data-eyeva-modifiers-modal-footer-subtotal]');
          var formData = new FormData($form[0]);
          var showOptionIds = this.stackedShowOptionIds.slice(-1)[0];
          var noneSales = this.customFieldNoneSales;
          this.showOptionPrices($modifiersModalOptions, $modifiersModalSubtotal, showOptionIds, formData, noneSales, true);
          this.updateModifiersSubtotal(data);
        }
      }
    }
  };
  _proto.updateSalePercent = function updateSalePercent(data) {
    var _data$price, _data$price4;
    var $div = this.$scope.find('.price-section--salePercent');
    var $span = this.$scope.find('[data-product-price-sale-percent]');
    var salePercent = 0;
    if (data != null && (_data$price = data.price) != null && (_data$price = _data$price.without_tax) != null && _data$price.value) {
      var _data$price2, _data$price3;
      if ((data == null || (_data$price2 = data.price) == null || (_data$price2 = _data$price2.rrp_without_tax) == null ? void 0 : _data$price2.value) > 0) {
        salePercent = Math.round((1 - data.price.without_tax.value / data.price.rrp_without_tax.value) * 100);
      } else if ((data == null || (_data$price3 = data.price) == null || (_data$price3 = _data$price3.non_sale_price_without_tax) == null ? void 0 : _data$price3.value) > 0) {
        salePercent = Math.round((1 - data.price.without_tax.value / data.price.non_sale_price_without_tax.value) * 100);
      }
    } else if (data != null && (_data$price4 = data.price) != null && (_data$price4 = _data$price4.with_tax) != null && _data$price4.value) {
      var _data$price5, _data$price6;
      if ((data == null || (_data$price5 = data.price) == null || (_data$price5 = _data$price5.rrp_with_tax) == null ? void 0 : _data$price5.value) > 0) {
        salePercent = Math.round((1 - data.price.with_tax.value / data.price.rrp_with_tax.value) * 100);
      } else if ((data == null || (_data$price6 = data.price) == null || (_data$price6 = _data$price6.non_sale_price_with_tax) == null ? void 0 : _data$price6.value) > 0) {
        salePercent = Math.round((1 - data.price.with_tax.value / data.price.non_sale_price_with_tax.value) * 100);
      }
    }
    if (salePercent > 0) {
      $span.text("-" + salePercent + "%");
      $div.show();
    } else {
      $span.text('');
      $div.hide();
    }
  };
  _proto.updateShippingCountdown = function updateShippingCountdown(data) {
    var $shippingCountdown = this.$scope.find('[data-papathemes-shipping-countdown]');
    if ($shippingCountdown.is(':hidden') && data != null && data.purchasable) {
      $shippingCountdown.css('style', 'flex');
    } else if ($shippingCountdown.is(':visible') && !(data != null && data.purchasable)) {
      $shippingCountdown.hide();
    }
  };
  _proto.updateCartContent = function updateCartContent() {
    var _CornerstoneProductDe4;
    // close modifiers modal after added product to cart
    if (this.enableModifiersModal) {
      this.closeModifiersModal();
      if (this.previewModal) {
        this.previewModal.$preModalFocusedEl = this.$scope.find('[data-eyeva-product-option-open]');
      }
    }
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    (_CornerstoneProductDe4 = _CornerstoneProductDe.prototype.updateCartContent).call.apply(_CornerstoneProductDe4, [this].concat(args));
  };
  _proto.showProductImage = function showProductImage(image) {
    var _CornerstoneProductDe5;
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }
    (_CornerstoneProductDe5 = _CornerstoneProductDe.prototype.showProductImage).call.apply(_CornerstoneProductDe5, [this, image].concat(args));
    var $modifiersModalImg = this.$scope.find('[data-eyeva-modifiers-modal-img]');
    var _this$imageGallery$cu = this.imageGallery.currentImage,
      mainImageUrl = _this$imageGallery$cu.mainImageUrl,
      zoomImageUrl = _this$imageGallery$cu.zoomImageUrl,
      mainImageSrcset = _this$imageGallery$cu.mainImageSrcset;
    if (mainImageUrl && mainImageUrl !== $modifiersModalImg.attr('src')) {
      $modifiersModalImg.attr('src', mainImageUrl).attr('srcset', mainImageSrcset).attr('data-srcset', mainImageSrcset).attr('data-zoom-image', zoomImageUrl);

      // update main image in quick-view on mobile
      this.$scope.find('[data-main-image]').filter(function (_i, el) {
        return $(el).closest('[data-image-gallery]').length === 0;
      }).attr('src', mainImageUrl).attr('srcset', mainImageSrcset).attr('data-srcset', mainImageSrcset);
    }
  }

  /**
   * Format price with currency symbol and decimal places
   *
   * @param {number} value
   * @param {boolean} plusSymbol whether to show plus symbol for positive value
   * @returns {string}
   */;
  _proto.formatPrice = function formatPrice(value, plusSymbol) {
    if (plusSymbol === void 0) {
      plusSymbol = false;
    }
    var display = cachedSettings ? {
      currency_token: cachedSettings.currency.display.symbol,
      currency_location: cachedSettings.currency.display.symbolPlacement,
      decimal_token: cachedSettings.currency.display.decimalToken,
      decimal_places: cachedSettings.currency.display.decimalPlaces,
      thousands_token: cachedSettings.currency.display.thousandsToken
    } : {};
    if (value < 0) {
      var _formatted = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.currencyFormat)(-value, display);
      return plusSymbol ? "-" + _formatted : _formatted;
    }
    var formatted = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.currencyFormat)(value, display);
    return plusSymbol ? "+" + formatted : formatted;
  }

  /**
   * Find option value by option name and value name
   *
   * @param {string} optionName option display name
   * @param {string} valueName value label
   * @returns {[number, number]} optionId, valueId
   */;
  _proto.findOptionValue = function findOptionValue(optionName, valueName) {
    var _hideIfOption$values;
    var hideIfOption = this.productOptions.find(function (_ref) {
      var display_name = _ref.display_name;
      return display_name.replace('/:;/g', '').replace(/\s{2,}/g, ' ').toLowerCase() === optionName.toLowerCase();
    });
    var value = hideIfOption == null || (_hideIfOption$values = hideIfOption.values) == null ? void 0 : _hideIfOption$values.find(function (_ref2) {
      var label = _ref2.label;
      return label.replace('/:;/g', '').replace(/\s{2,}/g, ' ').toLowerCase() === valueName.toLowerCase();
    });
    var optionId = hideIfOption == null ? void 0 : hideIfOption.id;
    var valueId = value == null ? void 0 : value.id;
    return [optionId, valueId];
  };
  _proto.createModifiersModal = function createModifiersModal() {
    var _this4 = this;
    var zoomImageUrl = this.$scope.find('[data-image-gallery-main]').attr('data-zoom-image');
    var mainImageUrl = this.$scope.find('[data-main-image]').attr('src');
    var mainImageSrcset = this.$scope.find('[data-main-image]').attr('data-srcset');
    var $form = this.$scope.find('[data-cart-item-add]');
    var $attributeMessageWrapper = this.$scope.find('[data-eyeva-product-attributes-message]');
    var $addToCartWrapper = $form.find('[data-eyeva-add-to-cart-wrapper]');
    var $chooseOptionsBtn = $form.find('[data-eyeva-product-option-open]');
    var $productOptionsEl = $form.find('[data-product-option-change]');
    var $modifiersModal = $(mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.modifiersModalTemplate, {
      txtContinue: this.context.txtContinue,
      productTitle: this.$scope.find('[data-eyeva-product-title]').html(),
      mainImageUrl: this.imageGallery.currentImage.mainImageUrl || mainImageUrl,
      zoomImageUrl: this.imageGallery.currentImage.zoomImageUrl || zoomImageUrl,
      mainImageSrcset: this.imageGallery.currentImage.mainImageSrcset || mainImageSrcset
    }, null, ['<%', '%>'])).appendTo($productOptionsEl);
    var $modifiersModalOptions = $modifiersModal.find('[data-eyeva-modifiers-modal-options]');
    var $modifiersModalComplete = $modifiersModal.find('[data-eyeva-modifiers-modal-complete]');
    var $modifiersModalClose = $modifiersModal.find('[data-eyeva-modifiers-modal-close]');
    var $modifiersModalContinue = $modifiersModal.find('[data-eyeva-modifiers-modal-continue]');
    var $modifiersModalBack = $modifiersModal.find('[data-eyeva-modifiers-modal-back]');

    // move modifier options to the modal
    $productOptionsEl.find('[data-product-attribute-state="modifier"]').appendTo($modifiersModalOptions);

    // move add to cart & qty box to the modal
    $modifiersModalComplete.append($addToCartWrapper);

    // clone purchasable message
    $addToCartWrapper.find('.productAttributes-message').clone().appendTo($attributeMessageWrapper);
    $modifiersModalClose.on('click', function (event) {
      event.preventDefault();
      _this4.closeModifiersModal();
    });
    $modifiersModalBack.on('click', function (event) {
      event.preventDefault();
      _this4.goBackStep();
    });
    $modifiersModalContinue.on('click', function (event) {
      event.preventDefault();

      // stop and report invalid inputs if any
      var showOptionIds = _this4.stackedShowOptionIds.slice(-1)[0] || [];
      var invalidInputs = showOptionIds.reduce(function (_invalidInputs, optionId) {
        return [].concat(_invalidInputs, $modifiersModalOptions.find("[name=\"attribute[" + optionId + "]\"], [name=\"attribute[" + optionId + "][day]\"], [name=\"attribute[" + optionId + "][month]\"], [name=\"attribute[" + optionId + "][year]\"]").get().filter(function (el) {
          return !el.checkValidity();
        }));
      }, []);
      if (invalidInputs.length > 0) {
        return invalidInputs[0].reportValidity();
      }

      // auto select the 'none' option if no radio option or no product pick list option is selected
      showOptionIds.forEach(function (optionId) {
        var $radios = $modifiersModalOptions.find("input[type=\"radio\"][name=\"attribute[" + optionId + "]\"]");
        if ($radios.length > 0 && $radios.filter(':checked').length === 0) {
          $radios.filter('[value=""], [value="0"]').prop('checked', true);
        }
      });

      // after clicking continue button, update the modifiers view automatically
      _this4.manualUpdateModifiersView = false;
      _this4.updateModifiersView();
    });
    $chooseOptionsBtn.on('click', function (event) {
      event.preventDefault();

      // require selecting variant options before opening the modal
      if (_this4.validateVariantOptions()) {
        _this4.initModifiersView();
        _this4.openModifiersModal();
      }
    });
  };
  _proto.openModifiersModal = function openModifiersModal() {
    this.$scope.find('[data-eyeva-modifiers-modal]').addClass('is-open').before(this.modifiersModalOverlayTemplate);
  };
  _proto.closeModifiersModal = function closeModifiersModal() {
    this.$scope.find('[data-eyeva-modifiers-modal]').removeClass('is-open');
    this.$scope.find('[data-eyeva-modifiers-modal-overlay]').remove();
  };
  _proto.initModifiersView = function initModifiersView() {
    var $form = this.$scope.find('[data-cart-item-add]');
    var $productOptionsEl = $form.find('[data-product-option-change]');
    var $modifiersModalOptions = $productOptionsEl.find('[data-eyeva-modifiers-modal-options]');
    $modifiersModalOptions.find('input, select, textarea').not('[type="checkbox"], [type="radio"], [type="file"]').filter('[name^="attribute"]').val('');
    $modifiersModalOptions.find('input[type="checkbox"], input[type="radio"]').filter('[name^="attribute"]').prop('checked', false);

    // flag any input/select is not shown yet so that the continue button is shown
    $modifiersModalOptions.find('[name^="attribute"]').removeAttr('data-field-shown');

    // reset modal to update this view automatically when option is selected
    this.manualUpdateModifiersView = false;

    /**
     * Contains all option ids that are shown in each step
     * @type {number[][]}
     */
    // reset the shown option ids in all steps
    this.stackedShowOptionIds = [];

    /**
     * Non-sale prices for option values.
     * Pulling from custom fields `__@nonsale price = option name: option value[; option name: option value; ...]`.
     * Populated in `updateModifiersView()`.
     * @type {{ [optionId: number]: { [valueId: number]: number } }}
     */
    this.customFieldNoneSales = {};

    // update modifiers modal asap so that not all options are displayed
    this.updateModifiersView({
      ignoreAPICall: true
    });
    $productOptionsEl.trigger('change');
  };
  _proto.updateModifiersView = /*#__PURE__*/function () {
    var _updateModifiersView = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_temp) {
      var _this5 = this;
      var _ref3, _ref3$ignoreAPICall, ignoreAPICall, $form, $productOptionsEl, $modifiersModalBack, $modifiersModalOptions, $modifiersModalSummary, $modifiersModalTitle, $modifiersModalFooter, $modifiersModalContinue, $modifiersModalSubtotal, $addToCartWrapper, formData, currentOptionId, currentGroupName, currentGroupOptionIds, hideOptionIds, hideOptionValues, tooltips, tooltipHeadings, noneSales, optionRenames, showOptionIds, _this$productOptions$, title, groupTooltip, $tooltip;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _ref3 = _temp === void 0 ? {} : _temp, _ref3$ignoreAPICall = _ref3.ignoreAPICall, ignoreAPICall = _ref3$ignoreAPICall === void 0 ? false : _ref3$ignoreAPICall;
            $form = this.$scope.find('[data-cart-item-add]');
            $productOptionsEl = $form.find('[data-product-option-change]');
            $modifiersModalBack = $productOptionsEl.find('[data-eyeva-modifiers-modal-back]');
            $modifiersModalOptions = $productOptionsEl.find('[data-eyeva-modifiers-modal-options]');
            $modifiersModalSummary = $productOptionsEl.find('[data-eyeva-modifiers-modal-summary]').empty();
            $modifiersModalTitle = $productOptionsEl.find('[data-eyeva-modifiers-modal-title]').empty();
            $modifiersModalFooter = $productOptionsEl.find('[data-eyeva-modifiers-modal-footer]');
            $modifiersModalContinue = $productOptionsEl.find('[data-eyeva-modifiers-modal-continue]').hide();
            $modifiersModalSubtotal = $productOptionsEl.find('[data-eyeva-modifiers-modal-footer-subtotal]');
            $addToCartWrapper = $productOptionsEl.find('[data-eyeva-add-to-cart-wrapper]').hide();
            formData = new FormData($form[0]);
            this.console.log('ProductDetails - formData: ', Array.from(formData.entries()));

            /**
             * Current option id that appears alone without any group.
             * @type {number|undefined}
             */

            /**
             * Current group name that the option belongs to.
             * Group name that appears custom field `__@group (group name)`
             * @type {string|undefined}
             */
            /**
             * Option ids of option names appear in the value of custom field `__@group`.
             * @example
             *   Custom field: `__@group Select a prescription type` = `prescription type`
             * @type {Array<number>}
             */
            currentGroupOptionIds = [];
            /**
             * option ids should be hidden
             * @type {number[]}
             */
            hideOptionIds = [];
            /**
             * @type {Array<{optionId: number, valueId: number}>}
             */
            hideOptionValues = [];
            /**
             * Tooltips for options and option values extracted from custom fields `__@tooltip name[:value] = tooltip`
             * @type {Object<number, { tooltip: string, valueTooltips: { [valueId: number]: string } }>
             */
            tooltips = {};
            /**
             * Tooltip headings for option values extracted from custom fields `__@tooltip_heading name:value = tooltip heading`
             * @type {{ [optionId: number]: { [valueId: number]: string } }}
             * @example { 2: { 123: 'Tooltip Heading' } }
             */
            tooltipHeadings = {};
            /**
             * Non-sale prices for option values.
             * Can be overridden by custom fields `__@nonsale price = option name: option value[; option name: option value; ...]`
             * @type {{ [optionId: number]: { [valueId: number]: number } }}
             */
            noneSales = {};
            /**
             * Option renames extracted from custom fields `__@rename option name = new name`
             * @type {{ [optionId: number]: string }}
             * @example { 123: 'New Name', 456: 'Another Name' }
             */
            optionRenames = {};
            this.productOptions.filter(function (_ref4) {
              var state = _ref4.state;
              return state === 'modifier';
            }).forEach(function (option) {
              _this5.console.log('%cProductDetails - option: ', 'color: cyan', option.display_name);
              var hideOption = false;

              /**
               * First group name that the option belongs to.
               * Group name that appears custom field `__@group (group name)`
               * @type {string|undefined}
               */
              var groupName;

              /**
               * Option ids of option names appear in the value of custom field `__@group`.
               * @example
               *   Custom field: `__@group Select a prescription type` = `prescription type`
               * @type {Array<number>|undefined}
               */
              var groupOptionIds;

              // determine if this option is a radio type and has 'none' value checked
              var isNoneRadioChecked = $form.find("input[type=\"radio\"][name=\"attribute[" + option.id + "]\"][value=\"\"]").prop('checked');

              // determine if this option is a file type and already shown after modal shown
              var $file = $form.find("input[type=\"file\"][name=\"attribute[" + option.id + "]\"]");
              var isFileShown = $file.length > 0 && $file.attr('data-field-shown');

              // determine if this option is a optional date type and already shown after modal shown
              var $date = $form.find("select[name=\"attribute[" + option.id + "][day]\"], select[name=\"attribute[" + option.id + "][month]\"], select[name=\"attribute[" + option.id + "][year]\"]");
              var isOptionalDateShown = $date.length > 0 && !option.required && $date.attr('data-field-shown');

              // determine if this option is a optional select type and already shown after modal shown
              var $select = $form.find("select[name=\"attribute[" + option.id + "]\"]");
              var isOptionalSelectShown = $select.length > 0 && !option.required && $select.attr('data-field-shown');

              // determine if this option is a optional text / multiline / number type and already shown after modal shown
              var $text = $form.find('input[type="text"], input[type="number"], textarea').filter("[name=\"attribute[" + option.id + "]\"]");
              var isOptionalTextShown = $text.length > 0 && !option.required && $text.attr('data-field-shown');
              var formValue = formData.get("attribute[" + option.id + "]");
              if (formValue && !(formValue instanceof File) || isNoneRadioChecked || isFileShown || isOptionalDateShown || isOptionalSelectShown || isOptionalTextShown || formData.get("attribute[" + option.id + "][day]") || formData.get("attribute[" + option.id + "][month]") || formData.get("attribute[" + option.id + "][year]")) {
                // hide option if the option is selected
                hideOption = true;
                _this5.console.log('ProductDetails - hideOption: ', hideOption);
              }
              if (!hideOption) {
                _this5.customFields.forEach(function (customField) {
                  // match __@hide_if (.*)
                  var hideIfMatch = _this5.customFieldMatchHideIf({
                    customField: customField,
                    formData: formData,
                    option: option
                  });
                  if (hideIfMatch) {
                    hideOption = hideIfMatch.hideOption;
                    hideOptionValues.push.apply(hideOptionValues, hideIfMatch.hideOptionValues);
                  }
                  if (!groupName && !hideOption) {
                    // match __@group (.*)
                    var groupMatch = _this5.customFieldMatchGroup({
                      customField: customField,
                      option: option
                    });
                    if (groupMatch) {
                      groupName = groupMatch.groupName;
                      groupOptionIds = groupMatch.groupOptionIds;
                    }
                  }
                  if (!hideOption) {
                    var _Object$assign;
                    // match __@tooltip name[:value] = tooltip
                    var tooltipMatch = _this5.customFieldMatchTooltip({
                      customField: customField,
                      option: option
                    });
                    if (tooltipMatch) {
                      var _tooltips$option$id, _tooltips$option$id2;
                      tooltips[option.id] = Object.assign({}, tooltips[option.id], {
                        tooltip: tooltipMatch.tooltip || ((_tooltips$option$id = tooltips[option.id]) == null ? void 0 : _tooltips$option$id.tooltip),
                        valueTooltips: Object.assign({}, (_tooltips$option$id2 = tooltips[option.id]) == null ? void 0 : _tooltips$option$id2.valueTooltips, tooltipMatch.valueTooltips)
                      });
                    }

                    // match __@tooltip_heading name:value = tooltip heading
                    var valueTooltipHeadings = _this5.customFieldMatchTooltipHeading({
                      customField: customField,
                      option: option
                    });
                    if (tooltipHeadings) {
                      tooltipHeadings[option.id] = Object.assign({}, tooltipHeadings[option.id], valueTooltipHeadings);
                    }

                    // match __@rename option name = new name
                    var newName = _this5.customFieldMatchRename({
                      customField: customField,
                      option: option
                    });
                    if (newName) {
                      optionRenames[option.id] = newName;
                    }

                    // match __@nonsale price = option name: option value[; option name: option value; ...]
                    var valueNonSales = _this5.customFieldMatchNonSale({
                      customField: customField,
                      option: option
                    });
                    Object.assign(noneSales, (_Object$assign = {}, _Object$assign[option.id] = Object.assign({}, noneSales[option.id], valueNonSales), _Object$assign));
                  }
                });
              }
              if (!hideOption) {
                if (currentGroupOptionIds.length === 0 && !currentOptionId) {
                  // no visible option before
                  if (groupName) {
                    // option group
                    currentGroupName = groupName;
                    currentGroupOptionIds = groupOptionIds;
                    _this5.console.log("ProductDetails - currentGroupName: " + currentGroupName + ", currentGroupOptionIds: " + currentGroupOptionIds);
                  } else {
                    // stand-alone option
                    currentOptionId = option.id;
                    _this5.console.log("ProductDetails - currentOptionId: " + currentOptionId);
                  }
                }
              }
              if (hideOption) {
                hideOptionIds.push(option.id);
              }
            });
            if (currentGroupOptionIds.length > 0 && hideOptionIds.length > 0) {
              // remove hidden options from the current group
              currentGroupOptionIds = currentGroupOptionIds.filter(function (id) {
                return !hideOptionIds.includes(id);
              });
              this.console.log("ProductDetails - currentGroupOptionIds: " + currentGroupOptionIds);
            }
            this.console.log('ProductDetails - currentOptionId: ', currentOptionId);
            this.console.log('ProductDetails - currentGroupName: ', currentGroupName);
            this.console.log('ProductDetails - currentGroupOptionIds: ', currentGroupOptionIds);
            this.console.log('ProductDetails - hideOptionValues: ', hideOptionValues);

            // Store non-sale prices of option values
            // to use when updating option prices only without update the whole modifiers view
            Object.assign(this.customFieldNoneSales, noneSales);

            /**
             * IDs of options that should be displayed at the current step
             * @type {Array<number>}
             */
            // eslint-disable-next-line no-nested-ternary
            showOptionIds = currentGroupOptionIds.length > 0 ? currentGroupOptionIds : currentOptionId ? [currentOptionId] : []; // store the shown option ids of the current step to the stack
            // if not the same as the previous step.
            // this is used to navigate back to the previous step.
            if (this.stackedShowOptionIds.length === 0 || !areArraysEqualUnordered(this.stackedShowOptionIds.slice(-1)[0], showOptionIds)) {
              this.stackedShowOptionIds.push(showOptionIds);
              this.console.log('ProductDetails - stackedShowOptionIds: ', this.stackedShowOptionIds);
            }

            // show / hide back button
            if (this.stackedShowOptionIds.length > 1) {
              $modifiersModalBack.show();
            } else {
              $modifiersModalBack.hide();
            }

            // show footer, and hide it if no more option shown
            if (showOptionIds.length > 0) {
              $modifiersModalFooter.show();
            } else {
              $modifiersModalFooter.hide();
            }

            // Update modal title from the custom field `__@group (group name)` or option display name
            if (currentGroupName) {
              $modifiersModalTitle.html(currentGroupName);
            } else if (showOptionIds.length === 1) {
              title = optionRenames[showOptionIds[0]] || ((_this$productOptions$ = this.productOptions.find(function (_ref5) {
                var id = _ref5.id;
                return id === showOptionIds[0];
              })) == null ? void 0 : _this$productOptions$.display_name);
              $modifiersModalTitle.text(title);
            }

            // hide the option name when here is only 1 option shown in the current step
            if (showOptionIds.length === 1) {
              $modifiersModalOptions.find("[data-product-attribute-id=\"" + showOptionIds[0] + "\"] .form-label").first().hide();
            } else {
              $modifiersModalOptions.find('[data-product-attribute-id] .form-label').first().show();
            }

            // Display current product options
            $modifiersModalOptions.find('[data-product-attribute-id]').addClass('_show').filter(function (_, el) {
              return !showOptionIds.includes(Number($(el).data('product-attribute-id')));
            }).removeClass('_show');

            // Rename the shown options if needed
            showOptionIds.forEach(function (optionId) {
              var newName = optionRenames[optionId];
              if (newName) {
                $modifiersModalOptions.find("[data-product-attribute-id=\"" + optionId + "\"] .form-label").first().html(newName);
              }
            });

            // Show tooltip for group
            if (currentGroupName) {
              groupTooltip = '';
              this.customFields.forEach(function (customField) {
                if (!groupTooltip) {
                  groupTooltip = _this5.customFieldMatchTooltipGroup({
                    customField: customField,
                    groupName: currentGroupName
                  });
                }
              });
              if (groupTooltip) {
                $tooltip = $(this.optionTooltipTemplate.replace('<%tooltip%>', groupTooltip));
                $modifiersModalTitle.append($tooltip);
              }
            }

            // Show tooltip for options and option values
            if (showOptionIds.length > 0) {
              this.showOptionTooltips($modifiersModalOptions, $modifiersModalTitle, tooltips, tooltipHeadings, showOptionIds);
            }

            // Populate default values for shown options and display Continue button if needed.
            if (showOptionIds.length > 0) {
              this.populateDefaultOptionValues(showOptionIds, $modifiersModalOptions, $modifiersModalContinue);
            }

            // Display prices for options and option values
            if (ignoreAPICall) {
              _context2.n = 1;
              break;
            }
            if (showOptionIds.length > 0) {
              this.displayShowOptionPricesPreloader($modifiersModalOptions, $modifiersModalSubtotal, showOptionIds);
            } else {
              // show summary but preloader for prices
              this.showSummary($modifiersModalOptions, $modifiersModalSummary, $modifiersModalSubtotal, $modifiersModalTitle, $addToCartWrapper, formData, true);
            }
            _context2.n = 1;
            return this.showOptionPrices($modifiersModalOptions, $modifiersModalSubtotal, showOptionIds, formData, noneSales);
          case 1:
            // Show summary content if no option visible on the current step
            if (showOptionIds.length === 0) {
              this.showSummary($modifiersModalOptions, $modifiersModalSummary, $modifiersModalSubtotal, $modifiersModalTitle, $addToCartWrapper, formData);
            }
          case 2:
            return _context2.a(2);
        }
      }, _callee2, this);
    }));
    function updateModifiersView(_x5) {
      return _updateModifiersView.apply(this, arguments);
    }
    return updateModifiersView;
  }()
  /**
   * Validate required variant options and report error for the first invalid option.
   *
   * @returns {boolean}
   */
  ;
  _proto.validateVariantOptions = function validateVariantOptions() {
    var _this6 = this;
    var $form = this.$scope.find('[data-cart-item-add]');
    var formData = new FormData($form[0]);
    var invalid = this.productOptions.filter(function (_ref6) {
      var state = _ref6.state;
      return state === 'variant_option';
    }).find(function (option) {
      if (option.required) {
        var value = formData.get("attribute[" + option.id + "]");
        if (!value) {
          _this6.console.log("ProductDetails - Required option \"" + option.display_name + "\" is not selected");
          return true;
        }
      }
      return false;
    });
    if (invalid) {
      var el = $form.find("[name=\"attribute[" + invalid.id + "]\"]")[0];
      el.reportValidity();
      return false;
    }
    return true;
  };
  _proto.goBackStep = function goBackStep() {
    var $form = this.$scope.find('[data-cart-item-add]');
    var $productOptionsEl = $form.find('[data-product-option-change]');
    var $modifiersModalOptions = $productOptionsEl.find('[data-eyeva-modifiers-modal-options]');
    var showOptionIds = [].concat(this.stackedShowOptionIds.pop(), this.stackedShowOptionIds.pop());

    // reset values of shown option ids in current step & previous step
    // to display previous step again.
    if (showOptionIds) {
      var $option = $modifiersModalOptions.find('[data-product-attribute-id]').filter(function (_i, el) {
        return showOptionIds.includes(Number($(el).attr('data-product-attribute-id')));
      });
      $option.find('input, select, textarea').not('[type="checkbox"], [type="radio"], [type="file"]').filter('[name^="attribute"]').val('');
      $option.find('input[type="checkbox"], input[type="radio"]').filter('[name^="attribute"]').prop('checked', false);
      $option.find('[name^="attribute"]').removeAttr('data-field-shown');
      this.manualUpdateModifiersView = false;

      // immediately update display previous options on modifiers modal
      this.updateModifiersView({
        ignoreAPICall: true
      });

      // trigger change event to update prices & data belongs to BC
      $productOptionsEl.trigger('change');
    }
  }

  /**
   * Check if the option should be hidden based on the custom field `__@hide_if`
   *
   * @param {{
   *   customField: {
   *     name: string,
   *     value: string,
   *   },
   *   formData: FormData,
   *   option: {
   *     id: Number,
   *     display_name: string,
   *     values: [{
   *       id: Number,
   *       label: string,
   *     }]
   *   }
   * }} param0
   * @returns {{ hideOption: boolean, hideOptionValues: Array<{optionId: number, valueId: number}> } | undefined}
   */;
  _proto.customFieldMatchHideIf = function customFieldMatchHideIf(_ref7) {
    var _this7 = this;
    var customField = _ref7.customField,
      formData = _ref7.formData,
      option = _ref7.option;
    this.console.log("ProductDetails - customFieldMatchHideIf: cf_name = " + customField.name + " ; op_name = " + option.display_name);
    var hideOption = false;
    var hideOptionValues = [];
    var m = customField.name.match(/^__@hide_if\s+(.*)$/i);
    if (!m) return;

    /**
     * @type {Array<{name: string, value: string}>}
     */
    var hideIfOptions = m[1].split(';').map(function (kv) {
      return kv.split(':', 2);
    }).map(function (_ref8) {
      var key = _ref8[0],
        value = _ref8[1];
      return {
        name: key.trim(),
        value: value ? value.trim() : undefined
      };
    });
    this.console.log("ProductDetails - hideIfOptions: " + hideIfOptions.map(function (_ref9) {
      var name = _ref9.name,
        value = _ref9.value;
      return value ? name + ": " + value : name;
    }).join('; '));

    /**
     * @type {Array<{name: string, value: string}>}
     */
    var thenOptions = customField.value.split(';').map(function (kv) {
      return kv.split(':', 2);
    }).map(function (_ref0) {
      var key = _ref0[0],
        value = _ref0[1];
      return {
        name: key.trim(),
        value: value ? value.trim() : undefined
      };
    });
    this.console.log("ProductDetails - thenOptions: " + thenOptions.map(function (_ref1) {
      var name = _ref1.name,
        value = _ref1.value;
      return value ? name + ": " + value : name;
    }).join('; '));

    /**
     * Flag to check if option:value in the custom field `__@hide_if` matches with current form data
     * @type {boolean}
     */
    var hideIfMatch = false;

    // check whether option:value in custom field `__@hide_if` matches with current form data
    hideIfOptions.forEach(function (_ref10) {
      var name = _ref10.name,
        value = _ref10.value;
      var _this7$findOptionValu = _this7.findOptionValue(name, value),
        optionId = _this7$findOptionValu[0],
        valueId = _this7$findOptionValu[1];
      var formValue = Number(formData.getAll("attribute[" + optionId + "]").slice(-1)[0]);
      if (formValue === valueId) {
        hideIfMatch = true;
      }
    });
    this.console.log('ProductDetails - hideIfMatch: ', hideIfMatch);
    if (hideIfMatch) {
      // Check if the current option should be hidden when matching with the value of the custom field `__@hide_if`
      thenOptions.forEach(function (_ref11) {
        var name = _ref11.name,
          value = _ref11.value;
        if (equalOptionString(option.display_name, name)) {
          if (!value) {
            // if custom field value contain option name without value, then hide the whole option
            hideOption = true;
            _this7.console.log('ProductDetails - hideOption: ', hideOption);
          } else if (option.values) {
            // otherwise, hide the specific values
            option.values.forEach(function (_ref12) {
              var label = _ref12.label,
                id = _ref12.id;
              if (equalOptionString(label, value)) {
                var _hideOptionValue = {
                  optionId: option.id,
                  valueId: id
                };
                hideOptionValues.push(_hideOptionValue);
                _this7.console.log('ProductDetails - hideOptionValue: ', _hideOptionValue);
              }
            });
          }
        }
      });
    }
    if (hideOption || hideOptionValues.length > 0) {
      return {
        hideOption: hideOption,
        hideOptionValues: hideOptionValues
      };
    }
  }

  /**
   * Check if the option belongs to the group in the custom field `__@group`
   *
   * @param {{
   *   customField: {
   *     name: string,
   *     value: string,
   *   },
   *   option: {
   *     id: Number,
   *   },
   * @returns {{ groupName: string, groupOptionIds: Array<number> } | undefined}
   */;
  _proto.customFieldMatchGroup = function customFieldMatchGroup(_ref13) {
    var _this8 = this;
    var customField = _ref13.customField,
      option = _ref13.option;
    var m = customField.name.match(/^__@group\s+(.*)$/i);
    if (m) {
      var groupName = m[1].trim();
      var groupOptionIds = customField.value.split(';').map(function (s) {
        return s.trim();
      }) // option names
      .map(function (optionName) {
        var _this8$productOptions;
        return (_this8$productOptions = _this8.productOptions.find(function (_ref14) {
          var display_name = _ref14.display_name;
          return equalOptionString(display_name, optionName);
        })) == null ? void 0 : _this8$productOptions.id;
      }).filter(function (id) {
        return id;
      });
      if (groupOptionIds.includes(option.id)) {
        // option belongs to the group in this custom field
        this.console.log("ProductDetails - groupName: " + groupName + ", groupOptionIds: " + groupOptionIds);
        return {
          groupName: groupName,
          groupOptionIds: groupOptionIds
        };
      }
    }
  }

  /**
   * Check if the option value has a tooltip in the custom field `__@tooltip name[:value] = tooltip`
   *
   * @param {{
   *   customField: {
   *     name: string,
   *     value: string,
   *   }
   *   option: {
   *     display_name,
   *     values: [{
   *       label
   *     }]
   *   }
   * }} param0
   * @returns {{ tooltip: string } | { valueTooltips: { [valueId: number]: string } } | undefined}
   */;
  _proto.customFieldMatchTooltip = function customFieldMatchTooltip(_ref15) {
    var _this9 = this;
    var customField = _ref15.customField,
      option = _ref15.option;
    var m = customField.name.match(/^__@tooltip\s+(.*)$/i);
    if (m) {
      var _m$1$split$map = m[1].split(':', 2).map(function (s) {
          return s.trim();
        }),
        name = _m$1$split$map[0],
        value = _m$1$split$map[1];
      var tooltip = customField.value;

      // stop if not match option name
      if (!name || !equalOptionString(option.display_name, name)) return;
      if (!value) {
        // tooltip for option name
        this.console.log("ProductDetails - tooltip for option \"" + name + "\" = \"\"\"" + tooltip + "\"\"\"");
        return {
          tooltip: tooltip
        };
      }
      var valueTooltips = {};

      // tooltip for option value
      option.values.forEach(function (_ref16) {
        var id = _ref16.id,
          label = _ref16.label;
        if (equalOptionString(label, value)) {
          _this9.console.log("ProductDetails - tooltip for option \"" + name + " : " + value + "\" = \"\"\"" + tooltip + "\"\"\"");
          valueTooltips[id] = tooltip;
        }
      });
      return {
        valueTooltips: valueTooltips
      };
    }
  }

  /**
   * Check if the group has a tooltip in the custom field `__@tooltip (group name) = tooltip`
   * @param {{
   *   customField: {
   *     name: string,
   *     value: string,
   *   },
   *   groupName: string
   * }} param0
   * @returns {string | undefined}
   */;
  _proto.customFieldMatchTooltipGroup = function customFieldMatchTooltipGroup(_ref17) {
    var customField = _ref17.customField,
      groupName = _ref17.groupName;
    var m = customField.name.match(/^__@tooltip\s+(.*)$/i);
    if (m) {
      var name = m[1].trim();
      var tooltip = customField.value;

      // stop if not match group name
      if (!name || !equalOptionString(groupName, name)) return;
      this.console.log("ProductDetails - tooltip for group \"" + name + "\" = \"\"\"" + tooltip + "\"\"\"");
      return tooltip;
    }
  }

  /**
   * Check if the option value has a tooltip heading in the custom field `__@tooltip_heading name:value = tooltip heading`
   *
   * @param {{
   *   customField: {
   *     name: string,
   *     value: string,
   *   },
   *   option: {
   *     display_name: string,
   *     values: [{
   *       id: number,
   *       label: string,
   *     }]
   *   }
   * }} param0
   * @returns {{ [valueId: number]: string } | undefined}
   */;
  _proto.customFieldMatchTooltipHeading = function customFieldMatchTooltipHeading(_ref18) {
    var _this0 = this;
    var customField = _ref18.customField,
      option = _ref18.option;
    var m = customField.name.match(/^__@tooltip_heading\s+(.*)$/i);
    if (m) {
      var _m$1$split$map2 = m[1].split(':', 2).map(function (s) {
          return s.trim();
        }),
        name = _m$1$split$map2[0],
        value = _m$1$split$map2[1];
      var heading = customField.value;

      // stop if not match option name or not value
      if (!name || !value || !equalOptionString(option.display_name, name)) return;
      var valueTooltipHeadings = {};
      option.values.forEach(function (_ref19) {
        var id = _ref19.id,
          label = _ref19.label;
        if (equalOptionString(label, value)) {
          _this0.console.log("ProductDetails - tooltip heading for option \"" + name + " : " + value + "\" = \"\"\"" + heading + "\"\"\"");
          valueTooltipHeadings[id] = heading;
        }
      });
      return valueTooltipHeadings;
    }
  }

  /**
   * Check if the option name contains in the custom field `__@rename option name = new name`
   * and return the new name
   *
   * @param {Object} param0
   * @param {Object} param0.customField
   * @param {string} param0.customField.name
   * @param {string} param0.customField.value
   * @param {Object} param0.option
   * @param {string} param0.option.display_name
   * @returns {string | undefined} new option name
   */;
  _proto.customFieldMatchRename = function customFieldMatchRename(_ref20) {
    var customField = _ref20.customField,
      option = _ref20.option;
    var m = customField.name.match(/^__@rename\s+(.*)$/i);
    if (m) {
      var name = m[1].trim();
      var newName = String(customField.value).trim();

      // stop if not match option name
      if (!name || !equalOptionString(option.display_name, name)) return;
      this.console.log("ProductDetails - rename option \"" + name + "\" to \"" + newName + "\"");
      return newName;
    }
  }

  /**
   * Check if the option value has a non-sale price in the custom field
   * `__@nonsale price = option name: option value[; option name: option value; ...]`
   *
   * @param {{
   *   customField: {
   *     name: string,
   *     value: string,
   *   },
   *   option: {
   *     display_name: string,
   *     values: [{
   *       id: number,
   *       label: string,
   *     }]
   *   },
   * }} param0
   * @returns {{ [valueId: number]: number }}
   */;
  _proto.customFieldMatchNonSale = function customFieldMatchNonSale(_ref21) {
    var customField = _ref21.customField,
      option = _ref21.option;
    var valueNonSales = {};
    var m = customField.name.match(/^__@nonsale\s+(.*)$/i);
    if (m) {
      var price = Number(m[1].trim());

      // split each (option name: option value) pair separated by ";"
      customField.value.split(';').forEach(function (kv) {
        // split option name : option value in custom field value separated by ":"
        var _kv$split$map = kv.split(':', 2).map(function (s) {
            return s.trim();
          }),
          optionName = _kv$split$map[0],
          valueLabel = _kv$split$map[1];
        if (equalOptionString(option.display_name, optionName)) {
          var _option$values$find;
          // option name in custom field match with current option

          // find the option value ID that matches with the value label in custom field
          var valueId = (_option$values$find = option.values.find(function (_ref22) {
            var label = _ref22.label;
            return equalOptionString(label, valueLabel);
          })) == null ? void 0 : _option$values$find.id;
          if (valueId) {
            // return non-sale price corresponding to the option value ID
            valueNonSales[valueId] = price;
          }
        }
      });
    }
    return valueNonSales;
  }

  /**
   * Fetch store settings including tax and active currency
   *
   * @returns {Promise<{
   *   tax: { pdp: number },
   *   currency: {
   *     code: string,
   *     display: { decimalPlaces: number, decimalToken: string, symbol: string, symbolPlacement: string, thousandsToken: string },
   *     exchangeRate: number, name: string,
   *   },
   *   defaultCurrency: {
   *     code: string,
   *     display: { decimalPlaces: number, decimalToken: string, symbol: string, symbolPlacement: string, thousandsToken: string },
   *     exchangeRate: number, name: string,
   *   },
   * }>
   */;
  _proto.fetchSettings =
  /*#__PURE__*/
  function () {
    var _fetchSettings = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var resp;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (!cachedSettings) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, cachedSettings);
          case 1:
            _context3.n = 2;
            return $.ajax({
              url: '/graphql',
              method: 'POST',
              contentType: 'application/json',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + this.context.graphQLToken
              },
              xhrFields: {
                withCredentials: true
              },
              data: JSON.stringify({
                query: "\n                    query (\n                        $currencyCode: currencyCode!\n                        $defaultCurrencyCode: currencyCode!\n                    ) {\n                        site {\n                            currency(currencyCode: $currencyCode) {\n                                ...CurrencyFields\n                            }\n                            defaultCurrency: currency(currencyCode: $defaultCurrencyCode) {\n                                ...CurrencyFields\n                            }\n                            settings {\n                                tax {\n                                    pdp\n                                }\n                            }\n                        }\n                    }\n                    fragment CurrencyFields on Currency {\n                        code\n                        display {\n                            decimalPlaces\n                            decimalToken\n                            symbol\n                            symbolPlacement\n                            thousandsToken\n                        }\n                        exchangeRate\n                        name\n                    }\n                ",
                variables: {
                  currencyCode: this.context.active_currency_code,
                  defaultCurrencyCode: this.context.default_currency_code
                }
              })
            });
          case 2:
            resp = _context3.v;
            cachedSettings = Object.assign({}, resp.data.site.settings, {
              currency: resp.data.site.currency
            });
            return _context3.a(2, cachedSettings);
        }
      }, _callee3, this);
    }));
    function fetchSettings() {
      return _fetchSettings.apply(this, arguments);
    }
    return fetchSettings;
  }()
  /**
   * Fetch option prices
   *
   * @param {Array<{ id: number, values: Array<{ id: number }> }>} showOptions
   * @param {FormData} formData
   * @returns {Promise<Array<{
   *   optionId: number|null,
   *   valueId: number|null,
   *   pricesWithTax: {
   *     basePrice: { value: number, currencyCode: string },
   *     price: { value: number, currencyCode: string },
   *     salePrice: { value: number, currencyCode: string },
   *   },
   *   pricesWithoutTax: {
   *     basePrice: { value: number, currencyCode: string },
   *     price: { value: number, currencyCode: string },
   *     salePrice: { value: number, currencyCode: string },
   *   },
   *   adjustedPricesWithTax: {
   *     basePrice: { value: number, currencyCode: string },
   *     price: { value: number, currencyCode: string },
   *     nonSalePriceValue: number,
   *   },
   *   adjustedPricesWithoutTax: {
   *     basePrice: { value: number, currencyCode: string },
   *     price: { value: number, currencyCode: string },
   *     nonSalePriceValue: number,
   *   },
   * }>>}
   */
  ;
  _proto.fetchOptionPrices =
  /*#__PURE__*/
  function () {
    var _fetchOptionPrices = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(showOptions, formData) {
      var _this1 = this;
      var selectedOptionValueIds, promises, _yield$handlePromises, prev, selections;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            selectedOptionValueIds = [];
            formData.entries().forEach(function (_ref23) {
              var key = _ref23[0],
                value = _ref23[1];
              var m = key.match(/^attribute\[(\d+)\]$/);
              if (m) {
                var optionEntityId = Number(m[1]);
                var valueEntityId = Number(value);
                if (valueEntityId && !showOptions.find(function (_ref24) {
                  var id = _ref24.id;
                  return id === optionEntityId;
                })) {
                  selectedOptionValueIds.push({
                    optionEntityId: optionEntityId,
                    valueEntityId: valueEntityId
                  });
                }
              }
            });
            promises = [
            // fetch already selected options' prices
            function () {
              return _this1.fetchOptionPrice(selectedOptionValueIds);
            }];
            showOptions.forEach(function (option) {
              var values = option.values || (option.value ? [{
                id: option.value
              }] : []);
              values.forEach(function (value) {
                // fetch current option value's prices
                promises.push(function () {
                  return _this1.fetchOptionPrice([].concat(selectedOptionValueIds, [{
                    optionEntityId: option.id,
                    valueEntityId: value.id
                  }])).then(function (product) {
                    return Object.assign({
                      optionId: option.id,
                      valueId: value.id
                    }, product);
                  });
                });
              });
            });
            _context4.n = 1;
            return handlePromisesWithLimit(promises);
          case 1:
            _yield$handlePromises = _context4.v;
            prev = _yield$handlePromises[0];
            selections = _arrayLikeToArray(_yield$handlePromises).slice(1);
            selections.forEach(function (selection) {
              if (selection.pricesWithTax) {
                var _selection$pricesWith, _prev$pricesWithTax, _selection$pricesWith2, _prev$pricesWithTax2;
                // calculate the non-sale price based on the previous price and the current price
                // consider all now price and regular price
                var nonSalePriceWithTax = ((_selection$pricesWith = selection.pricesWithTax) == null ? void 0 : _selection$pricesWith.price.value) - ((_prev$pricesWithTax = prev.pricesWithTax) == null ? void 0 : _prev$pricesWithTax.price.value) || ((_selection$pricesWith2 = selection.pricesWithTax) == null ? void 0 : _selection$pricesWith2.basePrice.value) - ((_prev$pricesWithTax2 = prev.pricesWithTax) == null ? void 0 : _prev$pricesWithTax2.basePrice.value)
                // || selection.pricesWithTax?.price.value - selection.pricesWithTax?.basePrice.value
                || null;

                // remove non-sale price if it's less than the current price
                if (nonSalePriceWithTax <= selection.pricesWithTax.price.value - prev.pricesWithTax.price.value) {
                  nonSalePriceWithTax = null;
                }

                // eslint-disable-next-line no-param-reassign
                selection.adjustedPricesWithTax = {
                  basePrice: Object.assign({}, selection.pricesWithTax.basePrice, {
                    value: selection.pricesWithTax.basePrice.value - prev.pricesWithTax.basePrice.value
                  }),
                  price: Object.assign({}, selection.pricesWithTax.price, {
                    value: selection.pricesWithTax.price.value - prev.pricesWithTax.price.value
                  }),
                  nonSalePriceValue: nonSalePriceWithTax
                };
              }
              if (selection.pricesWithoutTax) {
                var _selection$pricesWith3, _prev$pricesWithoutTa, _selection$pricesWith4, _prev$pricesWithoutTa2;
                // calculate the non-sale price based on the previous price and the current price
                // consider all now price and regular price
                var nonSalePriceWithoutTax = ((_selection$pricesWith3 = selection.pricesWithoutTax) == null ? void 0 : _selection$pricesWith3.price.value) - ((_prev$pricesWithoutTa = prev.pricesWithoutTax) == null ? void 0 : _prev$pricesWithoutTa.price.value) || ((_selection$pricesWith4 = selection.pricesWithoutTax) == null ? void 0 : _selection$pricesWith4.basePrice.value) - ((_prev$pricesWithoutTa2 = prev.pricesWithoutTax) == null ? void 0 : _prev$pricesWithoutTa2.basePrice.value)
                // || selection.pricesWithoutTax?.price.value - selection.pricesWithoutTax?.basePrice.value
                || null;

                // remove non-sale price if it's less than the current price
                if (nonSalePriceWithoutTax <= selection.pricesWithoutTax.price.value - prev.pricesWithoutTax.price.value) {
                  nonSalePriceWithoutTax = null;
                }

                // eslint-disable-next-line no-param-reassign
                selection.adjustedPricesWithoutTax = {
                  basePrice: Object.assign({}, selection.pricesWithoutTax.basePrice, {
                    value: selection.pricesWithoutTax.basePrice.value - prev.pricesWithoutTax.basePrice.value
                  }),
                  price: Object.assign({}, selection.pricesWithoutTax.price, {
                    value: selection.pricesWithoutTax.price.value - prev.pricesWithoutTax.price.value
                  }),
                  nonSalePriceValue: nonSalePriceWithoutTax
                };
              }
            });
            this.console.log('ProductDetails - fetchOptionPrices returns: ', selections);
            return _context4.a(2, [prev].concat(selections));
        }
      }, _callee4, this);
    }));
    function fetchOptionPrices(_x6, _x7) {
      return _fetchOptionPrices.apply(this, arguments);
    }
    return fetchOptionPrices;
  }()
  /**
   * Fetch product price from specific options
   *
   * @param {Array<{ optionEntityId: number, valueEntityId: number}>} optionValueIds
   * @returns {Promise<{ pricesWithTax: { basePrice: { value: number, currencyCode: string }, price: { value: number, currencyCode: string }, salePrice: { value: number, currencyCode: string } }, pricesWithoutTax: { basePrice: { value: number, currencyCode: string }, price: { value: number, currencyCode: string }, salePrice: { value: number, currencyCode: string } } }>
   */
  ;
  _proto.fetchOptionPrice =
  /*#__PURE__*/
  function () {
    var _fetchOptionPrice = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(optionValueIds) {
      var cacheKey, resp;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            cacheKey = JSON.stringify(optionValueIds);
            if (this.fetchOptionPriceCache[cacheKey]) {
              _context5.n = 2;
              break;
            }
            _context5.n = 1;
            return $.ajax({
              url: '/graphql',
              method: 'POST',
              contentType: 'application/json',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + this.context.graphQLToken
              },
              xhrFields: {
                withCredentials: true
              },
              data: JSON.stringify({
                query: "\n                        query ($productId: Int!, $optionValueIds: [OptionValueId!], $currencyCode: currencyCode!) {\n                            site {\n                                product(entityId: $productId, optionValueIds: $optionValueIds) {\n                                    pricesWithTax: prices(currencyCode: $currencyCode, includeTax: true) {\n                                        ...PriceFields\n                                    }\n                                    pricesWithoutTax: prices(currencyCode: $currencyCode, includeTax: false) {\n                                        ...PriceFields\n                                    }\n                                }\n                            }\n                        }\n                        fragment MoneyFields on Money {\n                            value\n                            currencyCode\n                        }\n                        fragment PriceFields on Prices {\n                            basePrice {\n                                ...MoneyFields\n                            }\n                            price {\n                                ...MoneyFields\n                            }\n                            salePrice {\n                                ...MoneyFields\n                            }\n                        }\n                    ",
                variables: {
                  currencyCode: this.context.active_currency_code,
                  productId: this.productId,
                  optionValueIds: optionValueIds
                }
              })
            });
          case 1:
            resp = _context5.v;
            this.fetchOptionPriceCache[cacheKey] = resp.data.site.product;
          case 2:
            return _context5.a(2, this.fetchOptionPriceCache[cacheKey]);
        }
      }, _callee5, this);
    }));
    function fetchOptionPrice(_x8) {
      return _fetchOptionPrice.apply(this, arguments);
    }
    return fetchOptionPrice;
  }()
  /**
   * Display tooltips to the corresponding shown options and option values
   *
   * @param {jQuery} $modifiersModalOptions
   * @param {jQuery} $modifiersModalTitle
   * @param {{ [optionId: number]: { tooltip: string, valueTooltips: { [valueId: number]: string } } }} tooltips
   * @param {{ [optionId: number]: { [valueId: number]: string } }} tooltipHeadings
   * @param {Array<number>} showOptionIds option ids to show tooltips
   */
  ;
  _proto.showOptionTooltips = function showOptionTooltips($modifiersModalOptions, $modifiersModalTitle, tooltips, tooltipHeadings, showOptionIds) {
    var _this10 = this;
    // Display tooltip
    Object.entries(tooltips).forEach(function (_ref25) {
      var optionId = _ref25[0],
        _ref25$ = _ref25[1],
        tooltip = _ref25$.tooltip,
        valueTooltips = _ref25$.valueTooltips;
      if (!showOptionIds.includes(Number(optionId))) return;
      var $option = $modifiersModalOptions.find("[data-product-attribute-id=\"" + optionId + "\"]");
      if (tooltip) {
        var $tooltip = $(_this10.optionTooltipTemplate.replace('<%tooltip%>', tooltip)).attr('data-eyeva-product-option-tooltip-id', optionId);
        $option.find("[data-eyeva-product-option-tooltip-id=\"" + optionId + "\"]").remove();
        var $label = $option.find('label').first();
        if ($label.length > 0) {
          $label.after($tooltip);
        } else {
          $option.prepend($tooltip);
        }
      }
      Object.entries(valueTooltips).forEach(function (_ref26) {
        var valueId = _ref26[0],
          valueTooltip = _ref26[1];
        var $value = $option.find("[data-product-attribute-value=\"" + valueId + "\"]");
        var $tooltip = $(_this10.optionValueTooltipTemplate.replace('<%tooltip%>', valueTooltip)).attr('data-eyeva-product-option-tooltip-id', optionId + "-" + valueId);
        $option.find("[data-eyeva-product-option-tooltip-id=\"" + optionId + "-" + valueId + "\"]").remove();
        $value.after($tooltip);
      });
    });

    // if only 1 option shown at current step,
    // then move its tooltip to the modal title
    if (showOptionIds.length === 1) {
      var $tooltip = $modifiersModalOptions.find("[data-eyeva-product-option-tooltip-id=\"" + showOptionIds[0] + "\"]");
      $modifiersModalTitle.append($tooltip);
    }

    // Display tooltip heading
    Object.entries(tooltipHeadings).filter(function (_ref27) {
      var optionId = _ref27[0];
      return showOptionIds.includes(Number(optionId));
    }).forEach(function (_ref28) {
      var optionId = _ref28[0],
        valueTooltipHeadings = _ref28[1];
      var $option = $modifiersModalOptions.find("[data-product-attribute-id=\"" + optionId + "\"]");
      Object.entries(valueTooltipHeadings).forEach(function (_ref29) {
        var valueId = _ref29[0],
          valueTooltipHeading = _ref29[1];
        var $value = $option.find("[data-product-attribute-value=\"" + valueId + "\"]");
        var $tooltipHeading = $(_this10.optionValueTooltipHeadingTemplate.replace('<%heading%>', valueTooltipHeading)).attr('data-eyeva-product-option-tooltip-heading-id', optionId + "-" + valueId);
        $value.find("[data-eyeva-product-option-tooltip-heading-id=\"" + optionId + "-" + valueId + "\"]").remove();
        $value.append($tooltipHeading);
      });
    });
  }

  /**
   * Populate default values to the shown options and display continue button if necessary.
   * Stop auto update the modifiers view until the continue button is clicked.
   *
   * Continue button is shown if any of the following conditions are met:
   * - options that has default value
   * - checkbox options
   * - optional select options
   * - optional date select options
   * - file input
   * - more than 1 option are shown at the same time
   *
   * @param {Array<Number>} showOptionIds show option ids
   * @param {jQuery} $modifiersModalOptions
   * @param {jQuery} $modifiersModalContinue
   */;
  _proto.populateDefaultOptionValues = function populateDefaultOptionValues(showOptionIds, $modifiersModalOptions, $modifiersModalContinue) {
    var shownOptions = this.productOptions.filter(function (_ref30) {
      var id = _ref30.id;
      return showOptionIds.includes(id);
    });

    /**
     * options that has default value
     */
    var defaultOptions = shownOptions.filter(function (_ref31) {
      var prefill = _ref31.prefill,
        selected_date = _ref31.selected_date,
        values = _ref31.values;
      return prefill || selected_date && (selected_date.day || selected_date.month || selected_date.year) || (values == null ? void 0 : values.find(function (_ref32) {
        var selected = _ref32.selected;
        return selected;
      }));
    });

    /**
     * checkbox type options
     */
    var checkboxOptions = shownOptions.filter(function (_ref33) {
      var noValue = _ref33.noValue,
        value = _ref33.value;
      return noValue || value;
    });

    /**
     * file type options
     */
    var fileOptions = shownOptions.filter(function (_ref34) {
      var partial = _ref34.partial;
      return partial === 'input-file';
    });

    /**
     * date type options
     */
    var dateOptions = shownOptions.filter(function (_ref35) {
      var partial = _ref35.partial;
      return partial === 'date';
    });

    /**
     * dropdown type options
     */
    var dropdownOptions = shownOptions.filter(function (_ref36) {
      var required = _ref36.required,
        partial = _ref36.partial;
      return !required && partial === 'set-select';
    });

    /**
     * text / multiline / number options
     */
    var textOptions = shownOptions.filter(function (_ref37) {
      var partial = _ref37.partial;
      return partial === 'input-text' || partial === 'textarea' || partial === 'input-numbers';
    });
    if (showOptionIds.length > 1 || defaultOptions.length > 0 || checkboxOptions.length > 0 || fileOptions.length > 0 || dateOptions.length > 0 || dropdownOptions.length > 0 || textOptions.length > 0) {
      // show continue button
      $modifiersModalContinue.show();

      // stop auto update the modifiers view until the continue button is clicked
      this.manualUpdateModifiersView = true;

      // populate default values to the shown options
      defaultOptions.forEach(function (_ref38) {
        var _values$find;
        var id = _ref38.id,
          prefill = _ref38.prefill,
          selected_date = _ref38.selected_date,
          values = _ref38.values;
        var valueId = values == null || (_values$find = values.find(function (_ref39) {
          var selected = _ref39.selected;
          return selected;
        })) == null ? void 0 : _values$find.id;
        if (valueId) {
          $modifiersModalOptions.find('select').filter("[name=\"attribute[" + id + "]\"]").val(valueId);
          $modifiersModalOptions.find('input[type="radio"]').filter("[name=\"attribute[" + id + "]\"][value=\"" + valueId + "\"]").prop('checked', true);
        } else if (prefill) {
          $modifiersModalOptions.find('input, textarea').filter("[name=\"attribute[" + id + "]\"]").val(prefill);
        } else if (selected_date) {
          if (selected_date.day) {
            $modifiersModalOptions.find("select[name=\"attribute[" + id + "][day]\"]").val(selected_date.day);
          }
          if (selected_date.month) {
            $modifiersModalOptions.find("select[name=\"attribute[" + id + "][month]\"]").val(selected_date.month);
          }
          if (selected_date.year) {
            $modifiersModalOptions.find("select[name=\"attribute[" + id + "][year]\"]").val(selected_date.year);
          }
        }
      });

      // populate default values to the shown checkbox options
      checkboxOptions.forEach(function (_ref40) {
        var id = _ref40.id,
          checked = _ref40.checked,
          value = _ref40.value,
          noValue = _ref40.noValue;
        if (checked) {
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"hidden\"]").val(value);
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"checkbox\"]").prop('checked', true);
        } else {
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"hidden\"]").val(noValue);
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"checkbox\"]").prop('checked', false);
        }
      });

      // mark file input, date input, dropdown select, text input as shown
      [].concat(fileOptions, dateOptions, dropdownOptions, textOptions).forEach(function (_ref41) {
        var id = _ref41.id;
        $modifiersModalOptions.find("[name=\"attribute[" + id + "]\"], [name=\"attribute[" + id + "][day]\"], [name=\"attribute[" + id + "][month]\"], [name=\"attribute[" + id + "][year]\"]").attr('data-field-shown', 'true');
      });
    }
  };
  _proto.displayShowOptionPricesPreloader = function displayShowOptionPricesPreloader($modifiersModalOptions, $modifiersModalSubtotal, showOptionIds) {
    var params = {
      preloader: true
    };
    var priceHtml = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.optionPriceTemplate, params, null, ['<%', '%>']);
    var priceText = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.optionPricePlainTemplate, params, null, ['<%', '%>']);
    var subtotalHtml = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.subtotalTemplate, params, null, ['<%', '%>']);
    showOptionIds.forEach(function (optionId) {
      $modifiersModalOptions.find("[data-product-attribute-id=\"" + optionId + "\"] [data-product-attribute-value]").each(function (_i, el) {
        var $value = $(el);
        var valueId = Number($value.attr('data-product-attribute-value'));
        if (!valueId) return;
        var $price = $(priceHtml).attr('data-eyeva-product-option-price-id', optionId + "-" + valueId);
        if ($value.is('option')) {
          // if already has price displayed before?
          if ($value.data('priceHtml')) {
            if (!$value.data('originalText')) {
              $value.data('originalText', $value.text());
            }
            $value.text($value.data('originalText') + " " + priceText);
          }
        } else {
          var $old = $value.find("[data-eyeva-product-option-price-id=\"" + optionId + "-" + valueId + "\"]");
          if ($old.length > 0) {
            $old.remove();
            var $placeholder = $value.find('[data-eyeva-product-option-price-placeholder]');
            if ($placeholder.length > 0) {
              $placeholder.html($price);
            } else {
              $value.append($price);
            }
          }
        }
      });
    });
    $modifiersModalSubtotal.html(subtotalHtml);
  }

  /**
   * Display prices to corresponding options and option values
   *
   * @param {jQuery} $modifiersModalOptions
   * @param {jQuery} $modifiersModalSubtotal
   * @param {Array<number>} showOptionIds option ids to show prices
   * @param {FormData} formData
   * @param {{ [optionId: number]: { [valueId: number]: number } }} noneSales option values with non-sale prices
   * @param {boolean} [ignoreUpdateSubtotal=false] ignore update subtotal
   */;
  _proto.showOptionPrices =
  /*#__PURE__*/
  function () {
    var _showOptionPrices = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6($modifiersModalOptions, $modifiersModalSubtotal, showOptionIds, formData, noneSales, ignoreUpdateSubtotal) {
      var _this11 = this;
      var _yield$Promise$all, settings, _yield$Promise$all$, prev, selections, showPrice;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (ignoreUpdateSubtotal === void 0) {
              ignoreUpdateSubtotal = false;
            }
            _context6.n = 1;
            return Promise.all([this.fetchSettings(), this.fetchOptionPrices(showOptionIds.map(function (_id) {
              return _this11.productOptions.find(function (_ref42) {
                var id = _ref42.id;
                return id === _id;
              });
            }), formData)]);
          case 1:
            _yield$Promise$all = _context6.v;
            settings = _yield$Promise$all[0];
            _yield$Promise$all$ = _yield$Promise$all[1];
            prev = _yield$Promise$all$[0];
            selections = _arrayLikeToArray(_yield$Promise$all$).slice(1);
            showPrice = function showPrice(value) {
              if (value === 0) {
                if (_this11.showPriceFree) {
                  return _this11.context.txtPriceFree;
                } else if (_this11.showPriceZero) {
                  return _this11.formatPrice(value, true);
                }
                return '';
              }
              return _this11.formatPrice(value, true);
            };
            selections.forEach(function (_ref43) {
              var _adjustedPricesWithTa, _adjustedPricesWithTa2, _adjustedPricesWithou, _adjustedPricesWithou2;
              var optionId = _ref43.optionId,
                valueId = _ref43.valueId,
                adjustedPricesWithTax = _ref43.adjustedPricesWithTax,
                adjustedPricesWithoutTax = _ref43.adjustedPricesWithoutTax;
              var params = Object.assign({}, settings.tax.pdp !== 'EX' ? {
                priceWithTaxValue: adjustedPricesWithTax == null || (_adjustedPricesWithTa = adjustedPricesWithTax.price) == null ? void 0 : _adjustedPricesWithTa.value,
                priceWithTax: showPrice(adjustedPricesWithTax == null || (_adjustedPricesWithTa2 = adjustedPricesWithTax.price) == null ? void 0 : _adjustedPricesWithTa2.value),
                nonSalePriceWithTaxValue: adjustedPricesWithTax != null && adjustedPricesWithTax.nonSalePriceValue ? adjustedPricesWithTax == null ? void 0 : adjustedPricesWithTax.nonSalePriceValue : '',
                nonSalePriceWithTax: adjustedPricesWithTax != null && adjustedPricesWithTax.nonSalePriceValue ? _this11.formatPrice(adjustedPricesWithTax == null ? void 0 : adjustedPricesWithTax.nonSalePriceValue, true) : ''
              } : {}, settings.tax.pdp !== 'INC' ? {
                priceWithoutTaxValue: adjustedPricesWithoutTax == null || (_adjustedPricesWithou = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou.value,
                priceWithoutTax: showPrice(adjustedPricesWithoutTax == null || (_adjustedPricesWithou2 = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou2.value),
                nonSalePriceWithoutTaxValue: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue : '',
                nonSalePriceWithoutTax: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? _this11.formatPrice(adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue, true) : ''
              } : {});
              if (params.priceWithTax || params.priceWithoutTax) {
                var _noneSales$optionId;
                // override non-sale price for option values if it is appears in custom field `__@nonsale`
                // and if it's higher than the current price
                var nonSale = (_noneSales$optionId = noneSales[optionId]) == null ? void 0 : _noneSales$optionId[valueId];
                if (nonSale) {
                  var _adjustedPricesWithou3, _adjustedPricesWithTa3;
                  var exchangedNonSale = nonSale * settings.currency.exchangeRate;
                  var priceValue = settings.tax.pdp !== 'INC' ? adjustedPricesWithoutTax == null || (_adjustedPricesWithou3 = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou3.value : adjustedPricesWithTax == null || (_adjustedPricesWithTa3 = adjustedPricesWithTax.price) == null ? void 0 : _adjustedPricesWithTa3.value;
                  if (exchangedNonSale > priceValue) {
                    params = Object.assign({}, params, settings.tax.pdp !== 'EX' ? {
                      nonSalePriceWithTaxValue: exchangedNonSale,
                      nonSalePriceWithTax: _this11.formatPrice(exchangedNonSale, true)
                    } : {}, settings.tax.pdp !== 'INC' ? {
                      nonSalePriceWithoutTaxValue: exchangedNonSale,
                      nonSalePriceWithoutTax: _this11.formatPrice(exchangedNonSale, true)
                    } : {});
                  }
                }
                var priceHtml = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this11.optionPriceTemplate, params, null, ['<%', '%>']);
                var priceText = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this11.optionPricePlainTemplate, params, null, ['<%', '%>']);
                var $price = $(priceHtml).attr('data-eyeva-product-option-price-id', optionId + "-" + valueId);
                var $option = $modifiersModalOptions.find("[data-product-attribute-id=\"" + optionId + "\"]");
                var $value = $option.find("[data-product-attribute-value=\"" + valueId + "\"]");
                if ($value.is('option')) {
                  if (!$value.data('originalText')) {
                    $value.data('originalText', $value.text());
                  }
                  $value.text($value.data('originalText') + " " + priceText);
                  $value.data('priceHtml', priceHtml);
                } else {
                  $value.find("[data-eyeva-product-option-price-id=\"" + optionId + "-" + valueId + "\"]").remove();
                  var $placeholder = $value.find('[data-eyeva-product-option-price-placeholder]');
                  if ($placeholder.length > 0) {
                    $placeholder.html($price);
                  } else {
                    $value.append($price);
                  }
                }
              }
            });

            // Show subtotal calculated from all selected options for the current step
            if (!ignoreUpdateSubtotal) {
              this.showOptionSubtotal($modifiersModalSubtotal, prev, settings);
            }
          case 2:
            return _context6.a(2);
        }
      }, _callee6, this);
    }));
    function showOptionPrices(_x9, _x0, _x1, _x10, _x11, _x12) {
      return _showOptionPrices.apply(this, arguments);
    }
    return showOptionPrices;
  }()
  /**
   * Display subtotal for the current step
   *
   * @param {jQuery} $modifiersModalSubtotal
   * @param {{
   *   pricesWithTax: {
   *     price: { value: number, currencyCode: string },
   *     basePrice: { value: number, currencyCode: string },
   *     salePrice: { value: number, currencyCode: string } | null,
   *   },
   *   pricesWithoutTax: {
   *     price: { value: number, currencyCode: string },
   *     basePrice: { value: number, currencyCode: string },
   *   salePrice: { value: number, currencyCode: string } | null,
   * }} product
   * @param {{ tax: { pdp: number } }} settings
   *
   */
  ;
  _proto.showOptionSubtotal = function showOptionSubtotal($modifiersModalSubtotal, product, settings) {
    var _product$pricesWithTa, _product$pricesWithou;
    var params = {
      txtSubtotal: this.context.txtSubtotal,
      priceWithTaxValue: '',
      priceWithTax: '',
      priceWithoutTaxValue: '',
      priceWithoutTax: ''
    };
    if ((_product$pricesWithTa = product.pricesWithTax) != null && _product$pricesWithTa.price || (_product$pricesWithou = product.pricesWithoutTax) != null && _product$pricesWithou.price) {
      params = Object.assign({}, params, settings.tax.pdp !== 'EX' ? {
        priceWithTaxValue: product.pricesWithTax.price.value,
        priceWithTax: this.formatPrice(product.pricesWithTax.price.value),
        nonSalePriceWithTaxValue: product.pricesWithTax.basePrice.value > product.pricesWithTax.price.value ? product.pricesWithTax.basePrice.value : '',
        nonSalePriceWithTax: product.pricesWithTax.basePrice.value > product.pricesWithTax.price.value ? this.formatPrice(product.pricesWithTax.basePrice.value) : ''
      } : {}, settings.tax.pdp !== 'INC' ? {
        priceWithoutTaxValue: product.pricesWithoutTax.price.value,
        priceWithoutTax: this.formatPrice(product.pricesWithoutTax.price.value),
        nonSalePriceWithoutTaxValue: product.pricesWithoutTax.basePrice.value > product.pricesWithoutTax.price.value ? product.pricesWithoutTax.basePrice.value : '',
        nonSalePriceWithoutTax: product.pricesWithoutTax.basePrice.value > product.pricesWithoutTax.price.value ? this.formatPrice(product.pricesWithoutTax.basePrice.value) : ''
      } : {});
    }
    var subtotalHtml = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.subtotalTemplate, params, null, ['<%', '%>']);
    $modifiersModalSubtotal.html(subtotalHtml);
  }

  /**
   * Show summary of selected options before adding to cart
   *
   * @param {jQuery} $modifiersModalOptions
   * @param {jQuery} $modifiersModalSummary
   * @param {jQuery} $modifiersModalSubtotal
   * @param {jQuery} $modifiersModalTitle
   * @param {jQuery} $addToCartWrapper
   * @param {FormData} formData
   * @param {boolean} preloader
   */;
  _proto.showSummary = function showSummary($modifiersModalOptions, $modifiersModalSummary, $modifiersModalSubtotal, $modifiersModalTitle, $addToCartWrapper, formData, preloader) {
    if (preloader === void 0) {
      preloader = false;
    }
    $modifiersModalTitle.html(this.context.txtReviewSelections);
    var options = [];
    var subtotalHtml = !preloader ? $modifiersModalSubtotal.html() : mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.subtotalTemplate, {
      preloader: preloader
    }, null, ['<%', '%>']);
    var $subtotal = $(subtotalHtml).attr('data-eyeva-modifiers-modal-complete-subtotal', '');
    this.productOptions.forEach(function (option) {
      var _option$values, _$modifiersModalOptio;
      var dayStr = formData.get("attribute[" + option.id + "][day]");
      var monthStr = formData.get("attribute[" + option.id + "][month]");
      var yearStr = formData.get("attribute[" + option.id + "][year]");
      if (dayStr || monthStr || yearStr) {
        options.push({
          name: option.display_name,
          value: new Date(yearStr + "-" + monthStr + "-" + dayStr).toLocaleDateString()
          // value: `${yearStr}-${monthStr}-${dayStr}`,
        });
        return;
      }
      var valueStr = formData.getAll("attribute[" + option.id + "]").slice(-1)[0];
      if (!valueStr || valueStr === '0') return;
      if (valueStr instanceof File) {
        if (valueStr.name) {
          options.push({
            name: option.display_name,
            value: valueStr.name
          });
        }
        return;
      }
      var valueId = valueStr ? Number(valueStr) : null;

      // stop if it is checkbox and not checked
      if (option.noValue && option.noValue === valueId) return;
      var valueLabel = ((_option$values = option.values) == null || (_option$values = _option$values.find(function (_ref44) {
        var id = _ref44.id;
        return id === valueId;
      })) == null ? void 0 : _option$values.label) || (option.value === valueId ? option.label : undefined);
      var priceHtml = (_$modifiersModalOptio = $modifiersModalOptions.find("[data-eyeva-product-option-price-id=\"" + option.id + "-" + valueId + "\"]").first().clone().removeAttr('data-eyeva-product-option-price-id')[0]) == null ? void 0 : _$modifiersModalOptio.outerHTML;
      var optionElPriceHtml = $modifiersModalOptions.find("select[name=\"attribute[" + option.id + "]\"] option[value=\"" + valueId + "\"]").data('priceHtml');
      options.push({
        name: option.display_name,
        value: valueLabel || valueStr,
        priceHtml: priceHtml || optionElPriceHtml
      });
    });
    var summaryHtml = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.summaryTemplate, {
      options: options
    }, null, ['<%', '%>']);
    $modifiersModalSummary.html(summaryHtml);

    // Insert subtotal to to add to cart wrapper and show it
    $addToCartWrapper.find('[data-eyeva-modifiers-modal-complete-subtotal]').remove();
    $addToCartWrapper.find(this.addToCartWrapperSelector).prepend($subtotal);
    $addToCartWrapper.show();
  }

  /**
   *
   * @param {Object} data
   * @param {Object} [data.price]
   * @param {Object} [data.price.without_tax]
   * @param {string} data.price.without_tax.formatted
   * @param {number} data.price.without_tax.value
   * @param {string} data.price.without_tax.currency
   * @param {string} data.price.tax_label
   * @param {Object} [data.price.sale_price_without_tax]
   * @param {string} data.price.sale_price_without_tax.formatted
   * @param {number} data.price.sale_price_without_tax.value
   * @param {string} data.price.sale_price_without_tax.currency
   * @param {Object} [data.price.with_tax]
   * @param {string} data.price.with_tax.formatted
   * @param {number} data.price.with_tax.value
   * @param {string} data.price.with_tax.currency
   * @param {Object} [data.price.sale_price_with_tax]
   * @param {string} data.price.sale_price_with_tax.formatted
   * @param {number} data.price.sale_price_with_tax.value
   * @param {string} data.price.sale_price_with_tax.currency
   */;
  _proto.updateModifiersSubtotal = function updateModifiersSubtotal(data) {
    var $form = this.$scope.find('[data-cart-item-add]');
    var $productOptionsEl = $form.find('[data-product-option-change]');
    var $modifiersModalSubtotal = $productOptionsEl.find('[data-eyeva-modifiers-modal-footer-subtotal]');
    var params = {
      txtSubtotal: this.context.txtSubtotal,
      priceWithTaxValue: '',
      priceWithTax: '',
      priceWithoutTaxValue: '',
      priceWithoutTax: ''
    };
    if (data.price) {
      params = Object.assign({}, params, data.price.with_tax ? {
        priceWithTaxValue: data.price.with_tax.value,
        priceWithTax: data.price.with_tax.formatted
      } : {}, data.price.without_tax ? {
        priceWithoutTaxValue: data.price.without_tax.value,
        priceWithoutTax: data.price.without_tax.formatted
      } : {});
    }
    var subtotalHtml = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.subtotalTemplate, params, null, ['<%', '%>']);
    $modifiersModalSubtotal.html(subtotalHtml);
  };
  return _createClass(ProductDetails, [{
    key: "$updateProductWrapper",
    get: function get() {
      return this.$scope.find('[data-update-product-wrapper]');
    }
  }]);
}(_theme_common_product_details__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ },

/***/ "./assets/js/papathemes/sale-countdown.js"
/*!************************************************!*\
  !*** ./assets/js/papathemes/sale-countdown.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parseCountdownDate: () => (/* binding */ parseCountdownDate),
/* harmony export */   parseDateTimeString: () => (/* binding */ parseDateTimeString)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/**
 * Parses an ISO date-time string and extracts the components.
 *
 * @param {string} str - The date-time string to parse.
 * @returns {Object|null} An object containing the extracted components, or `null` if the format is invalid.
 */
function parseDateTimeString(str) {
  var regex = /^\s*(?:(?:(\d{4})-(\d{2})-(\d{2}))|(?:(\d{2})-(\d{2})))?(?:[T\s])?(?:(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?|(\d{2}):(\d{2})|(\d{2}))?\s*(?:Z|([+-])(\d{1,2})(?::?(\d{2}))?)?\s*$/;
  var match = str.trim().match(regex);
  if (!match) {
    return null; // Invalid format
  }
  var year = match[1],
    month = match[2],
    day = match[3],
    // [1], [2], [3]
    shortMonth = match[4],
    shortDay = match[5],
    // [4], [5]
    hour = match[6],
    minute = match[7],
    second = match[8],
    // [6], [7], [8]
    shortHour = match[9],
    shortMinute = match[10],
    // [9], [10]
    singleTimeComponent = match[11],
    // [11]
    tzSign = match[12],
    tzHourOffset = match[13],
    tzMinuteOffset // [12], [13], [14]
    = match[14];
  var result = {};

  // Date components
  if (year && month && day) {
    result.year = parseInt(year, 10);
    result.month = parseInt(month, 10);
    result.day = parseInt(day, 10);
  } else if (shortMonth && shortDay) {
    result.month = parseInt(shortMonth, 10);
    result.day = parseInt(shortDay, 10);
  }

  // Time components
  if (hour !== undefined && minute !== undefined) {
    result.hour = parseInt(hour, 10);
    result.minute = parseInt(minute, 10);
    if (second !== undefined) {
      result.second = parseInt(second, 10);
    }
  } else if (shortHour !== undefined && shortMinute !== undefined) {
    result.hour = parseInt(shortHour, 10);
    result.minute = parseInt(shortMinute, 10);
  } else if (singleTimeComponent !== undefined) {
    result.hour = parseInt(singleTimeComponent, 10);
  }

  // Timezone
  if (tzSign && tzHourOffset) {
    var sign = tzSign === '+' ? 1 : -1;
    var tzHour = parseInt(tzHourOffset, 10);
    var tzMinute = tzMinuteOffset ? parseInt(tzMinuteOffset, 10) : 0;
    result.timezone = sign * (tzHour + tzMinute / 60);
  } else if (str.includes('Z')) {
    result.timezone = 0;
  }
  return result;
}

/**
 * Converts a date-time string into a Date object adjusted for countdown purposes.
 *
 * - If the date-time string does not include a year, month, or day, it is treated as a daily countdown.
 *   The function will set the date to today or roll over to the next day if the time has already passed.
 * - If the date-time string does not include an hour, minute, or second, they default to 0.
 * - The function adjusts for the specified timezone offset.
 *
 * @param {string} str - The date-time string to parse.
 * @returns {Date|undefined} A Date object used for the countdown, or `undefined` if parsing fails.
 */
function parseCountdownDate(str) {
  var parsedDate = parseDateTimeString(str);
  if (!parsedDate) return;

  // eslint-disable-next-line object-curly-newline
  var year = parsedDate.year,
    month = parsedDate.month,
    day = parsedDate.day,
    hour = parsedDate.hour,
    minute = parsedDate.minute,
    second = parsedDate.second,
    timezone = parsedDate.timezone;
  var date = new Date();
  if (year) date.setFullYear(year);
  if (month) date.setMonth(month - 1);
  if (day) date.setDate(day);
  date.setHours(hour || 0);
  date.setMinutes(minute || 0);
  date.setSeconds(second || 0);

  // change timezone to UTC
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);

  // Adjust for timezone
  if (timezone) {
    date.setHours(date.getHours() - timezone);
  }
  if (!year && !month && !day) {
    // for daily countdown, add 1 day if date is in the past
    if (date < new Date()) {
      date.setDate(date.getDate() + 1);
    }
  }
  return date;
}

/**
 * **SaleCountdown Singleton Object**
 *
 * Manages countdown timers for sales or promotional events on your website.
 * It handles multiple countdown elements, updates them in real-time, and manages visibility based on the viewport.
 *
 * ---
 *
 * **Usage:**
 *
 * **1. Configure the Countdown (Optional):**
 *
 * ```javascript
 * SaleCountdown.configure({
 *   // Optional settings
 *   dateDataName: 'saleCountdownDate',       // Data attribute for countdown date
 *   inViewportDataName: 'saleCountdownInViewport', // Data attribute for viewport visibility
 *   selectors: { ... },
 *   template: '...',                         // Custom HTML template for the countdown
 *   hideClass: '_hide',                      // Class to hide elements
 *   saleEndClass: '_saleEnded',              // Class when sale ends
 *   activeClass: '_active',                  // Class when countdown is active
 *   translations: {
 *     end_in: 'Ends in',
 *     day: 'Day',
 *     days: 'Days',
 *     hour: 'Hour',
 *     hours: 'Hours',
 *     minute: 'Minute',
 *     minutes: 'Minutes',
 *     second: 'Second',
 *     seconds: 'Seconds',
 *   },
 *   txtSaleCountdownJSON: '{ "translations": { ... } }', // JSON string for translations
 * });
 * ```
 *
 * **2. Add Countdown Elements:**
 *
 * - **Option 1:** Directly specify the date when adding the element.
 *
 *   ```javascript
 *   const $el = $('#countdown-element');
 *   const date = new Date('2023-12-31T23:59:59');
 *   SaleCountdown.add($el, date);
 *   ```
 *
 * - **Option 2:** Set data attributes on the element and add it.
 *
 *   ```javascript
 *   const $el = $('#countdown-element');
 *   $el.data('saleCountdownDate', '2023-12-31T23:59:59');
 *   $el.data('saleCountdownTranslations', { end_in: 'Ends in', ... });
 *   SaleCountdown.add($el);
 *   ```
 *
 * ---
 *
 * **Notes:**
 *
 * - The countdown automatically updates visible elements in the viewport.
 * - Supports customization through configuration and data attributes.
 * - Handles automatic stopping when no elements remain.
 *
 * ---
 *
 * **Example:**
 *
 * ```javascript
 * // Initialize and configure
 * SaleCountdown.configure({
 *   translations: {
 *     end_in: 'Sale ends in',
 *     // Other translations...
 *   },
 * });
 *
 * // Add countdown element
 * const $countdown = $('#countdown');
 * const endDate = new Date('2023-12-31T23:59:59');
 * SaleCountdown.add($countdown, endDate);
 * ```
 */

var SaleCountdown = {
  /**
   * Collection of countdown elements
   * @type {Set<Element>}
   * @private
   */
  elements: new Set(),
  /**
   * Timer interval ID
   * @type {number|null}
   * @private
   */
  timer: null,
  /**
   * IntersectionObserver instance
   * @type {IntersectionObserver|null}
   * @private
   */
  observer: null,
  /**
  * Data attribute name for countdown date
  * @type {string}
  * @private
  */
  dateDataName: 'saleCountdownDate',
  /**
   * Data attribute name for in viewport visibility
   * @type {string}
   * @private
   */
  inViewportDataName: 'saleCountdownInViewport',
  /**
   * Data attribute name for translations JSON
   * @type {string}
   * @private
   */
  translationsDataName: 'saleCountdownTranslations',
  /**
   * Selectors for countdown elements
   * @type {{endLabel: string, day: string, dayValue: string, dayLabel: string, hour: string, hourValue: string, hourLabel: string, minute: string, minuteValue: string, minuteLabel: string, second: string, secondValue: string, secondLabel: string}}
   */
  selectors: {
    endLabel: '[data-sale-countdown-end-label]',
    day: '[data-sale-countdown-day]',
    dayValue: '[data-sale-countdown-day-value]',
    dayLabel: '[data-sale-countdown-day-label]',
    hour: '[data-sale-countdown-hour]',
    hourValue: '[data-sale-countdown-hour-value]',
    hourLabel: '[data-sale-countdown-hour-label]',
    minute: '[data-sale-countdown-minute]',
    minuteValue: '[data-sale-countdown-minute-value]',
    minuteLabel: '[data-sale-countdown-minute-label]',
    second: '[data-sale-countdown-second]',
    secondValue: '[data-sale-countdown-second-value]',
    secondLabel: '[data-sale-countdown-second-label]'
  },
  /**
   * Template for countdown elements
   * @type {string}
   * @private
   */
  template: "\n        <i class=\"icon\" aria-hidden=\"true\"><svg><use href=\"#icon-badge-percent\"></use></svg></i>\n        <span class=\"_end\" data-sale-countdown-end-label></span>\n        <span class=\"_day\" data-sale-countdown-day><span class=\"_value\" data-sale-countdown-day-value></span><span class=\"_label\" data-sale-countdown-day-label></span></span>\n        <span class=\"_hour\" data-sale-countdown-hour><span class=\"_value\" data-sale-countdown-hour-value></span><span class=\"_label\" data-sale-countdown-hour-label></span></span>\n        <span class=\"_minute\" data-sale-countdown-minute><span class=\"_value\" data-sale-countdown-minute-value></span><span class=\"_label\" data-sale-countdown-minute-label></span></span>\n        <span class=\"_second\" data-sale-countdown-second><span class=\"_value\" data-sale-countdown-second-value></span><span class=\"_label\" data-sale-countdown-second-label></span></span>\n    ",
  /**
   * Class name to hide elements
   * @type {string}
   * @private
   */
  hideClass: '_hide',
  /**
   * Class name to indicate sale has ended
   * @type {string}
   * @private
   */
  saleEndClass: '_saleEnded',
  /**
   * Class name to indicate active countdown
   * @type {string}
   * @private
   */
  activeClass: '_active',
  /**
   * Translations for countdown labels
   * @type {{end_in: string, day: string, days: string, hour: string, hours: string, minute: string, minutes: string, second: string, seconds: string}}
   * @private
   */
  translations: {
    end_in: 'End in',
    day: 'Day',
    days: 'Days',
    hour: 'Hour',
    hours: 'Hours',
    minute: 'Minute',
    minutes: 'Minutes',
    second: 'Second',
    seconds: 'Seconds'
  },
  /**
   * Configure the countdown settings
   * @public
   * @param {Object} options
   * @param {string} options.dateDataName - Data attribute name for countdown date
   * @param {string} options.inViewportDataName - Data attribute name for in viewport visibility
   * @param {Object} options.selectors - Selectors for countdown elements
   * @param {string} options.selectors.endLabel
   * @param {string} options.selectors.day
   * @param {string} options.selectors.dayValue
   * @param {string} options.selectors.dayLabel
   * @param {string} options.selectors.hour
   * @param {string} options.selectors.hourValue
   * @param {string} options.selectors.hourLabel
   * @param {string} options.selectors.minute
   * @param {string} options.selectors.minuteValue
   * @param {string} options.selectors.minuteLabel
   * @param {string} options.selectors.second
   * @param {string} options.selectors.secondValue
   * @param {string} options.selectors.secondLabel
   * @param {string} options.template - Template for countdown elements
   * @param {string} options.hideClass - Class name to hide elements
   * @param {string} options.saleEndClass - Class name to indicate sale has ended
   * @param {string} options.activeClass - Class name to indicate active countdown
   * @param {Object} options.translations - Translations for countdown labels
   * @param {string} options.translations.end_in
   * @param {string} options.translations.day
   * @param {string} options.translations.days
   * @param {string} options.translations.hour
   * @param {string} options.translations.hours
   * @param {string} options.translations.minute
   * @param {string} options.translations.minutes
   * @param {string} options.translations.second
   * @param {string} options.translations.seconds
   * @param {string} options.txtSaleCountdownJSON - JSON string for translations
   */
  configure: function configure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      dateDataName = _ref.dateDataName,
      inViewportDataName = _ref.inViewportDataName,
      selectors = _ref.selectors,
      template = _ref.template,
      hideClass = _ref.hideClass,
      saleEndClass = _ref.saleEndClass,
      activeClass = _ref.activeClass,
      translations = _ref.translations,
      txtSaleCountdownJSON = _ref.txtSaleCountdownJSON;
    if (dateDataName) {
      this.dateDataName = dateDataName;
    }
    if (inViewportDataName) {
      this.inViewportDataName = inViewportDataName;
    }
    if (selectors) {
      this.selectors = Object.assign({}, this.selectors, selectors);
    }
    if (template) {
      this.template = template;
    }
    if (hideClass) {
      this.hideClass = hideClass;
    }
    if (saleEndClass) {
      this.saleEndClass = saleEndClass;
    }
    if (activeClass) {
      this.activeClass = activeClass;
    }
    if (translations) {
      this.translations = Object.assign({}, this.translations, translations);
    }
    if (txtSaleCountdownJSON) {
      try {
        var json = JSON.parse(txtSaleCountdownJSON);
        var trans = Object.keys(json.translations).reduce(function (_trans, key) {
          var shortKey = key.split('.').pop();
          // eslint-disable-next-line no-param-reassign
          _trans[shortKey] = json.translations[key];
          return _trans;
        }, {});
        this.translations = Object.assign({}, this.translations, trans);
      } catch (error) {
        // do nothing
      }
    }
  },
  /**
   * Add the element & corresponding date to the countdown collection
   * @public
   * @param {jQuery} $el
   * @param {Date|null} date - The countdown date. If not provided, it will be extracted from the data attribute `data-sale-countdown-date`
   */
  add: function add($el, date) {
    var _this = this;
    if (date === void 0) {
      date = null;
    }
    var validDate = date || $el.data(this.dateDataName);
    if (validDate && typeof validDate === 'string') validDate = parseCountdownDate(validDate);
    if (!validDate) return;
    $el.data(this.dateDataName, validDate).html(this.template).get().forEach(function (el) {
      return _this.elements.add(el);
    });
    this.observe($el);
    this.start();
  },
  /**
   * Observe the element for in viewport visibility check
   * @param {jQuery} $el
   * @private
   */
  observe: function observe($el) {
    var _this2 = this;
    if (!window.IntersectionObserver) {
      // assume element is in viewport if IntersectionObserver is not supported
      $el.data(this.inViewportDataName, true);
      return;
    } else if (!this.observer) {
      // create IntersectionObserver instance if not already created
      this.observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          $(entry.target).data(_this2.inViewportDataName, entry.isIntersecting);
          // console.log('isIntersecting', entry.target, entry.isIntersecting);
        });
      }, {
        root: null,
        // Defaults to viewport
        threshold: 0 // Callback is triggered when any part of the element is visible
      });
    }
    $el.get().forEach(function (el) {
      return _this2.observer.observe(el);
    });
  },
  /**
   * Stop observing the element
   * @param {Element} el
   * @private
   */
  unobserve: function unobserve(el) {
    if (this.observer) {
      this.observer.unobserve(el);
      // console.log('unobserve', el);
    }
  },
  /**
   * Check if the element is in viewport and visible
   * @param {jQuery} $el
   * @returns {boolean}
   * @private
   */
  isVisibleInViewport: function isVisibleInViewport($el) {
    return $el.data(this.inViewportDataName) && $el.is(':visible');
  },
  /**
   * start running countdown every second
   * @public
   */
  start: function start() {
    var _this3 = this;
    if (!this.timer && this.elements.size > 0) {
      this.run();
      this.timer = setInterval(function () {
        return _this3.run();
      }, 1000);
    }
  },
  /**
   * stop countdown
   * @public
   */
  stop: function stop() {
    clearInterval(this.timer);
    this.timer = null;
    this.observer.disconnect();
    this.observer = null;
    // console.log('stop countdown');
  },
  /**
   * running countdown process
   * @private
   */
  run: function run() {
    var _this4 = this;
    this.elements.forEach(function (el) {
      // check and stop if element no longer exists in DOM
      if (!document.body.contains(el)) {
        _this4.elements["delete"](el);
        _this4.unobserve(el);
        return;
      }
      var $el = $(el);
      var date = $el.data(_this4.dateDataName);

      // stop countdown if element is not in viewport or not visible
      if (!date || !_this4.isVisibleInViewport($el)) {
        return;
      }
      var now = new Date();
      if (date <= now) {
        // Count down date has passed
        $el.addClass(_this4.saleEndClass);
        _this4.elements["delete"](el);
        _this4.unobserve(el);
        return;
      }

      // Calculate the remaining time (days, hours, minutes, seconds)
      var diff = date - now;
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(diff % (1000 * 60) / 1000);
      var $endLabel = $el.find(_this4.selectors.endLabel);
      var $day = $el.find(_this4.selectors.day);
      var $dayValue = $el.find(_this4.selectors.dayValue);
      var $dayLabel = $el.find(_this4.selectors.dayLabel);
      var $hour = $el.find(_this4.selectors.hour);
      var $hourValue = $el.find(_this4.selectors.hourValue);
      var $hourLabel = $el.find(_this4.selectors.hourLabel);
      var $minute = $el.find(_this4.selectors.minute);
      var $minuteValue = $el.find(_this4.selectors.minuteValue);
      var $minuteLabel = $el.find(_this4.selectors.minuteLabel);
      var $second = $el.find(_this4.selectors.second);
      var $secondValue = $el.find(_this4.selectors.secondValue);
      var $secondLabel = $el.find(_this4.selectors.secondLabel);
      var translations = Object.assign({}, _this4.translations, $el.data(_this4.translationsDataName));
      $el.addClass(_this4.activeClass);
      $endLabel.html(translations.end_in);
      $dayValue.text(days);
      $dayLabel.html(days === 1 ? translations.day : translations.days);
      $day.toggleClass(_this4.hideClass, days === 0);
      $hourValue.text(hours);
      $hourLabel.html(hours === 1 ? translations.hour : translations.hours);
      $hour.toggleClass(_this4.hideClass, days === 0 && hours === 0);
      $minuteValue.text(minutes);
      $minuteLabel.html(minutes === 1 ? translations.minute : translations.minutes);
      $minute.toggleClass(_this4.hideClass, days === 0 && hours === 0 && minutes === 0);
      $secondValue.text(seconds);
      $secondLabel.html(seconds === 1 ? translations.second : translations.seconds);
      $second.toggleClass(_this4.hideClass, days === 0 && hours === 0 && minutes === 0 && seconds === 0);
    });
    if (this.elements.size === 0) {
      this.stop();
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaleCountdown);

/***/ },

/***/ "./assets/js/theme/common/aria/constants.js"
/*!**************************************************!*\
  !*** ./assets/js/theme/common/aria/constants.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ariaKeyCodes: () => (/* binding */ ariaKeyCodes)
/* harmony export */ });
var ariaKeyCodes = {
  RETURN: 13,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

/***/ },

/***/ "./assets/js/theme/common/aria/index.js"
/*!**********************************************!*\
  !*** ./assets/js/theme/common/aria/index.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRadioOptions: () => (/* reexport safe */ _radioOptions__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _radioOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radioOptions */ "./assets/js/theme/common/aria/radioOptions.js");


/***/ },

/***/ "./assets/js/theme/common/aria/radioOptions.js"
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/aria/radioOptions.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/js/theme/common/aria/constants.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var setCheckedRadioItem = function setCheckedRadioItem(itemCollection, itemIdx) {
  itemCollection.each(function (idx, item) {
    var $item = $(item);
    if (idx !== itemIdx) {
      $item.attr('aria-checked', false).prop('checked', false);
      return;
    }
    $item.attr('aria-checked', true).prop('checked', true).trigger('focus');
    $item.trigger('change');
  });
};
var calculateTargetItemPosition = function calculateTargetItemPosition(lastItemIdx, currentIdx) {
  switch (true) {
    case currentIdx > lastItemIdx:
      return 0;
    case currentIdx < 0:
      return lastItemIdx;
    default:
      return currentIdx;
  }
};
var handleItemKeyDown = function handleItemKeyDown(itemCollection) {
  return function (e) {
    var keyCode = e.keyCode;
    var itemIdx = itemCollection.index(e.currentTarget);
    var lastCollectionItemIdx = itemCollection.length - 1;
    if (Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes).includes(keyCode)) {
      e.preventDefault();
      e.stopPropagation();
    }
    switch (keyCode) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.LEFT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.UP:
        {
          var prevItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx - 1);
          itemCollection.get(prevItemIdx).trigger('focus');
          setCheckedRadioItem(itemCollection, itemIdx - 1);
          break;
        }
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.RIGHT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.DOWN:
        {
          var nextItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx + 1);
          itemCollection.get(nextItemIdx).trigger('focus');
          setCheckedRadioItem(itemCollection, itemIdx + 1);
          break;
        }
      default:
        break;
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($container, itemSelector) {
  var $itemCollection = $container.find(itemSelector);
  $container.on('keydown', itemSelector, handleItemKeyDown($itemCollection));
});

/***/ },

/***/ "./assets/js/theme/common/product-details-base.js"
/*!********************************************************!*\
  !*** ./assets/js/theme/common/product-details-base.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetailsBase),
/* harmony export */   optionChangeDecorator: () => (/* binding */ optionChangeDecorator)
/* harmony export */ });
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aria */ "./assets/js/theme/common/aria/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
// import Wishlist from '../wishlist'; // papathemes-eveva: disabled

var optionsTypesMap = {
  INPUT_FILE: 'input-file',
  INPUT_TEXT: 'input-text',
  INPUT_NUMBER: 'input-number',
  INPUT_CHECKBOX: 'input-checkbox',
  TEXTAREA: 'textarea',
  DATE: 'date',
  SET_SELECT: 'set-select',
  SET_RECTANGLE: 'set-rectangle',
  SET_RADIO: 'set-radio',
  SWATCH: 'swatch',
  PRODUCT_LIST: 'product-list'
};
function optionChangeDecorator(areDefaultOptionsSet) {
  var _this = this;
  return function (err, response) {
    var attributesData = response.data || {};
    var attributesContent = response.content || {};
    _this.updateProductAttributes(attributesData);
    if (areDefaultOptionsSet) {
      _this.updateView(attributesData, attributesContent);
    } else {
      _this.updateDefaultAttributesForOOS(attributesData);
    }
  };
}
var ProductDetailsBase = /*#__PURE__*/function () {
  function ProductDetailsBase($scope, context) {
    var _this2 = this;
    this.$scope = $scope;
    this.context = context;
    this.initRadioAttributes();
    // Wishlist.load(this.context); // papathemes-eveva: disabled
    this.getTabRequests();
    $('[data-product-attribute]').each(function (__, value) {
      var type = value.getAttribute('data-product-attribute');
      _this2._makeProductVariantAccessible(value, type);
    });
  }
  var _proto = ProductDetailsBase.prototype;
  _proto._makeProductVariantAccessible = function _makeProductVariantAccessible(variantDomNode, variantType) {
    switch (variantType) {
      case optionsTypesMap.SET_RADIO:
      case optionsTypesMap.SWATCH:
        {
          (0,_aria__WEBPACK_IMPORTED_MODULE_0__.initRadioOptions)($(variantDomNode), '[type=radio]');
          break;
        }
      default:
        break;
    }
  }

  /**
   * Allow radio buttons to get deselected
   */;
  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this3 = this;
    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio);

      // Only bind to click once
      if ($radio.attr('data-state') !== undefined) {
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
          } else {
            $radio.data('state', true);
          }
          _this3.initRadioAttributes();
        });
      }
      $radio.attr('data-state', $radio.prop('checked'));
    });
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this4 = this;
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockDefaultMessage = this.context.outOfStockDefaultMessage;
    var outOfStockMessage = data.out_of_stock_message;
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    if (outOfStockMessage) {
      outOfStockMessage = " (" + outOfStockMessage + ")";
    } else {
      outOfStockMessage = " (" + outOfStockDefaultMessage + ")";
    }
    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        _this4.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this4.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }

  /**
   * Check for fragment identifier in URL requesting a specific tab
   */;
  _proto.getTabRequests = function getTabRequests() {
    if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
      var $activeTab = $('.tabs').has("[href='" + window.location.hash + "']");
      var $tabContent = $("" + window.location.hash);
      if ($activeTab.length > 0) {
        $activeTab.find('.tab').removeClass('is-active').has("[href='" + window.location.hash + "']").addClass('is-active');
        $tabContent.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */;
  _proto.getViewModel = function getViewModel($scope) {
    return {
      priceWithTax: {
        $div: $('.price--withTax', $scope),
        $span: $('[data-product-price-with-tax]', $scope)
      },
      priceWithoutTax: {
        $div: $('.price--withoutTax', $scope),
        $span: $('[data-product-price-without-tax]', $scope)
      },
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $addToCartForm: $('form[data-cart-item-add]', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      sku: {
        $label: $('dt.sku-label', $scope),
        $value: $('[data-product-sku]', $scope)
      },
      upc: {
        $label: $('dt.upc-label', $scope),
        $value: $('[data-product-upc]', $scope)
      },
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope),
      $walletButtons: $('[data-add-to-cart-wallet-buttons]', $scope)
    };
  }

  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */;
  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
    viewModel.priceWithTax.$div.hide();
    viewModel.priceWithoutTax.$div.hide();
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = this.getViewModel(this.$scope);
    this.showMessageBox(data.stock_message || data.purchasing_message);
    if (data.price instanceof Object) {
      this.updatePriceView(viewModel, data.price);
    } else {
      this.clearPricingNotFound(viewModel);
    }
    if (data.weight instanceof Object) {
      viewModel.$weight.html(data.weight.formatted);
    }

    // Set variation_id if it exists for adding to wishlist
    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    }

    // If SKU is available
    if (data.sku) {
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    }

    // If UPC is available
    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    }

    // if stock view is on (CP settings)
    if (viewModel.stock.$container.length && typeof data.stock === 'number') {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }
    this.updateDefaultAttributesForOOS(data);
    this.updateWalletButtonsView(data);

    // If Bulk Pricing rendered HTML is available
    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }
    var addToCartWrapper = $('#add-to-cart-wrapper');
    if (addToCartWrapper.is(':hidden') && data.purchasable) {
      addToCartWrapper.show();
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    if (price.with_tax) {
      var updatedPrice = price.price_range ? price.price_range.min.with_tax.formatted + " - " + price.price_range.max.with_tax.formatted : price.with_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.priceWithTax.$div.show();
      viewModel.priceWithTax.$span.html(updatedPrice);
    }
    if (price.without_tax) {
      var _updatedPrice = price.price_range ? price.price_range.min.without_tax.formatted + " - " + price.price_range.max.without_tax.formatted : price.without_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.priceWithoutTax.$div.show();
      viewModel.priceWithoutTax.$span.html(_updatedPrice);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */;
  _proto.showMessageBox = function showMessageBox(message) {
    var $messageBox = $('.productAttributes-message');
    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  };
  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);
    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
    }
  };
  _proto.updateWalletButtonsView = function updateWalletButtonsView(data) {
    var viewModel = this.getViewModel(this.$scope);
    var isValidForm = viewModel.$addToCartForm[0].checkValidity();
    this.toggleWalletButtonsVisibility(isValidForm && data.purchasable && data.instock);
  };
  _proto.toggleWalletButtonsVisibility = function toggleWalletButtonsVisibility(shouldShow) {
    var viewModel = this.getViewModel(this.$scope);
    if (shouldShow) {
      viewModel.$walletButtons.show();
    } else {
      viewModel.$walletButtons.hide();
    }
  };
  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };
  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide(0);
    } else {
      $attribute.addClass('unavailable');
    }
  };
  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  };
  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };
  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };
  return ProductDetailsBase;
}();


/***/ },

/***/ "./assets/js/theme/common/product-details.js"
/*!***************************************************!*\
  !*** ./assets/js/theme/common/product-details.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetails)
/* harmony export */ });
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _papathemes_eyeva_image_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../papathemes/eyeva/image-gallery */ "./assets/js/papathemes/eyeva/image-gallery.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/api */ "./assets/js/theme/common/utils/api.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* harmony import */ var _utils_banner_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/banner-utils */ "./assets/js/theme/common/utils/banner-utils.js");
/* harmony import */ var _global_currency_selector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../global/currency-selector */ "./assets/js/theme/global/currency-selector.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




 // papathemes-eyeva edited








var ProductDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  function ProductDetails($scope, context, productAttributesData) {
    var _this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    _this.$overlay = $('[data-cart-item-add] .loadingOverlay');
    _this.imageGallery = new _papathemes_eyeva_image_gallery__WEBPACK_IMPORTED_MODULE_6__["default"]($('[data-image-gallery]', _this.$scope));
    _this.imageGallery.init();
    _this.listenQuantityChange();
    _this.$swatchOptionMessage = $('.swatch-option-message');
    _this.swatchInitMessageStorage = {};
    _this.swatchGroupIdList = $('[id^="swatchGroup"]').map(function (_, group) {
      return $(group).attr('id');
    });
    _this.storeInitMessagesForSwatches();
    _this.updateDateSelector();
    var $form = $('form[data-cart-item-add]', $scope);
    if ($form[0].checkValidity()) {
      _this.updateProductDetailsData();
    } else {
      _this.toggleWalletButtonsVisibility(false);
    }
    _this.addToCartValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_8__["default"])({
      submit: $form.find('input#form-action-addToCart'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_9__.announceInputErrorMessage
    });
    var $productOptionsElement = $('[data-product-option-change]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    var $productSwatchGroup = $('[id*="attribute_swatch"]', $form);
    var $productSwatchLabels = $('.form-option-swatch', $form);
    var placeSwatchLabelImage = function placeSwatchLabelImage(_, label) {
      var $optionImage = $('.form-option-expanded', $(label));
      var optionImageWidth = $optionImage.outerWidth();
      var extendedOptionImageOffsetLeft = 55;
      var _label$getBoundingCli = label.getBoundingClientRect(),
        right = _label$getBoundingCli.right;
      var emptySpaceToScreenRightBorder = window.screen.width - right;
      var shiftValue = optionImageWidth - emptySpaceToScreenRightBorder;
      if (emptySpaceToScreenRightBorder < optionImageWidth + extendedOptionImageOffsetLeft) {
        $optionImage.css('left', (shiftValue > 0 ? -shiftValue : shiftValue) + "px");
      }
    };
    $(window).on('load', function () {
      _this.registerAddToCartValidation();
      $.each($productSwatchLabels, placeSwatchLabelImage);
    });
    if (context.showSwatchNames) {
      _this.$swatchOptionMessage.removeClass('u-hidden');
      $productSwatchGroup.on('change', function (_ref) {
        var target = _ref.target;
        var swatchGroupElement = target.parentNode.parentNode;
        _this.showSwatchNameOnOption($(target), $(swatchGroupElement));
      });
      $.each($productSwatchGroup, function (_, element) {
        var swatchGroupElement = element.parentNode.parentNode;
        if ($(element).is(':checked')) _this.showSwatchNameOnOption($(element), $(swatchGroupElement));
      });
    }
    $productOptionsElement.on('change', function (event) {
      _this.productOptionsChanged(event);
      _this.setProductVariant();
    });
    $form.on('submit', function (event) {
      _this.addToCartValidator.performCheck();
      if (_this.addToCartValidator.areAll('valid')) {
        _this.addProductToCart(event, $form[0]);
      }
    });

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var $productId = $('[name="product_id"]', $form).val();
      var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_3__.optionChangeDecorator.call(_this, hasDefaultOptions);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.productAttributes.optionChange($productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
      _utils_banner_utils__WEBPACK_IMPORTED_MODULE_13__["default"].dispatchProductBannerEvent(productAttributesData);
    }
    $productOptionsElement.show();
    _this.previewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#previewModal')[0];
    return _this;
  }
  _inheritsLoose(ProductDetails, _ProductDetailsBase);
  var _proto = ProductDetails.prototype;
  _proto.registerAddToCartValidation = function registerAddToCartValidation() {
    this.addToCartValidator.add([{
      selector: '[data-quantity-change] > .form-input--incrementTotal',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_10__["default"].numbersOnly(val);
        cb(result);
      },
      errorMessage: this.context.productQuantityErrorMessage
    }]);
    return this.addToCartValidator;
  };
  _proto.storeInitMessagesForSwatches = function storeInitMessagesForSwatches() {
    var _this2 = this;
    if (this.swatchGroupIdList.length && lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(this.swatchInitMessageStorage)) {
      this.swatchGroupIdList.each(function (_, swatchGroupId) {
        if (!_this2.swatchInitMessageStorage[swatchGroupId]) {
          _this2.swatchInitMessageStorage[swatchGroupId] = $("#" + swatchGroupId + " ~ .swatch-option-message").text().trim();
        }
      });
    }
  };
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          var getSelectedOptionLabel = function getSelectedOptionLabel() {
            var productVariantslist = (0,_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_12__.convertIntoArray)(value.children);
            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };
            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_12__.isBrowserIE ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_12__.isBrowserIE ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.productView');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.find('.productView-title')[0].innerText.replace(/"/g, '\\$&');
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Checks if the current window is being run inside an iframe
   * @returns {boolean}
   */;
  _proto.isRunningInIframe = function isRunningInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  /**
   *
   * Handle product options changes
   *
   */;
  _proto.productOptionsChanged = function productOptionsChanged(event) {
    var _this3 = this;
    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val();

    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      _this3.updateProductAttributes(productAttributesData);
      _this3.updateView(productAttributesData, productAttributesContent);
      _this3.updateProductDetailsData();
      _utils_banner_utils__WEBPACK_IMPORTED_MODULE_13__["default"].dispatchProductBannerEvent(productAttributesData);
      if (!_this3.checkIsQuickViewChild($form)) {
        var $context = $form.parents('.productView').find('.productView-info');
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('[data-reveal]', {
          $context: $context
        });
      }
      document.dispatchEvent(new CustomEvent('onProductOptionsChanged', {
        bubbles: true,
        detail: {
          content: productAttributesData,
          data: productAttributesContent
        }
      }));
    });
  }

  /**
   * if this setting is enabled in Page Builder
   * show name for swatch option
   */;
  _proto.showSwatchNameOnOption = function showSwatchNameOnOption($swatch, $swatchGroup) {
    var swatchName = $swatch.attr('aria-label');
    var activeSwatchGroupId = $swatchGroup.attr('aria-labelledby');
    var $swatchOptionMessage = $("#" + activeSwatchGroupId + " ~ .swatch-option-message");
    $('[data-option-value]', $swatchGroup).text(swatchName);
    $swatchOptionMessage.text(this.swatchInitMessageStorage[activeSwatchGroupId] + " " + swatchName);
    this.setLiveRegionAttributes($swatchOptionMessage, 'status', 'assertive');
  };
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.checkIsQuickViewChild = function checkIsQuickViewChild($element) {
    return !!$element.parents('.quickView').length;
  };
  _proto.showProductImage = function showProductImage(image) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default()(image)) {
      var zoomImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.zoomSize
      }
      /*
          Should match zoom size used for data-zoom-image in
          components/products/product-view.html
           Note that this will only be used as a fallback image for browsers that do not support srcset
           Also note that getSrcset returns a simple src string when exactly one size is provided
      */);
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.productSize
      }
      /*
          Should match fallback image size used for the main product image in
          components/products/product-view.html
           Note that this will only be used as a fallback image for browsers that do not support srcset
           Also note that getSrcset returns a simple src string when exactly one size is provided
      */);
      var mainImageSrcset = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].tools.imageSrcset.getSrcset(image.data);
      this.imageGallery.setAlternateImage({
        mainImageUrl: mainImageUrl,
        zoomImageUrl: zoomImageUrl,
        mainImageSrcset: mainImageSrcset
      });
    } else {
      this.imageGallery.restoreImage();
    }
  }

  /**
   *
   * Handle action when the shopper clicks on + / - for quantity
   *
   */;
  _proto.listenQuantityChange = function listenQuantityChange() {
    var _this4 = this;
    this.$scope.on('click', '[data-quantity-change] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var viewModel = _this4.getViewModel(_this4.$scope);
      var $input = viewModel.quantity.$input;
      var quantityMin = parseInt($input.data('quantityMin'), 10);
      var quantityMax = parseInt($input.data('quantityMax'), 10);
      var qty = _common_models_forms__WEBPACK_IMPORTED_MODULE_10__["default"].numbersOnly($input.val()) ? parseInt($input.val(), 10) : quantityMin;
      // If action is incrementing
      if ($target.data('action') === 'inc') {
        qty = _common_models_forms__WEBPACK_IMPORTED_MODULE_10__["default"].validateIncreaseAgainstMaxBoundary(qty, quantityMax);
      } else if (qty > 1) {
        qty = _common_models_forms__WEBPACK_IMPORTED_MODULE_10__["default"].validateDecreaseAgainstMinBoundary(qty, quantityMin);
      }

      // update hidden input
      viewModel.quantity.$input.val(qty);
      // update text
      viewModel.quantity.$text.text(qty);
      // perform validation after updating product quantity
      _this4.addToCartValidator.performCheck();
      _this4.updateProductDetailsData();
    });

    // Prevent triggering quantity change when pressing enter
    this.$scope.on('keypress', '.form-input--incrementTotal', function (event) {
      // If the browser supports event.which, then use event.which, otherwise use event.keyCode
      var x = event.which || event.keyCode;
      if (x === 13) {
        // Prevent default
        event.preventDefault();
      }
    });
    this.$scope.on('keyup', '.form-input--incrementTotal', function () {
      _this4.updateProductDetailsData();
    });
  }

  /**
   *
   * Add a product to cart
   *
   */;
  _proto.addProductToCart = function addProductToCart(event, form) {
    var _this5 = this;
    var $addToCartBtn = $('#form-action-addToCart', $(event.target));
    var originalBtnVal = $addToCartBtn.val();
    var waitMessage = $addToCartBtn.data('waitMessage');

    // Do not do AJAX if browser doesn't support FormData
    if (window.FormData === undefined) {
      return;
    }

    // Prevent default
    event.preventDefault();
    $addToCartBtn.val(waitMessage).prop('disabled', true);
    this.$overlay.show();

    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.itemAdd((0,_utils_api__WEBPACK_IMPORTED_MODULE_11__.normalizeFormData)(new FormData(form)), function (err, response) {
      (0,_global_currency_selector__WEBPACK_IMPORTED_MODULE_14__["default"])(response.data.cart_id);
      var errorMessage = err || response.data.error;
      $addToCartBtn.val(originalBtnVal).prop('disabled', false);
      _this5.$overlay.hide();

      // Guard statement
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        if (!_this5.checkIsQuickViewChild($addToCartBtn)) {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.alertModal)().$preModalFocusedEl = $addToCartBtn;
        }
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(tmp.textContent || tmp.innerText);
      }

      // Open preview modal and update content
      if (_this5.previewModal) {
        _this5.previewModal.open();
        if (window.ApplePaySession) {
          _this5.previewModal.$modal.addClass('apple-pay-supported');
        }
        if (!_this5.checkIsQuickViewChild($addToCartBtn)) {
          _this5.previewModal.$preModalFocusedEl = $addToCartBtn;
        }
        _this5.updateCartContent(_this5.previewModal, response.data.cart_item.id);
      } else {
        _this5.$overlay.show();
        // if no modal, redirect to the cart page
        _this5.redirectTo(response.data.cart_item.cart_url || _this5.context.urls.cart);
      }
    });
    this.setLiveRegionAttributes($addToCartBtn.next(), 'status', 'polite');
  }

  /**
   * Get cart contents
   *
   * @param {String} cartItemId
   * @param {Function} onComplete
   */;
  _proto.getCartContent = function getCartContent(cartItemId, onComplete) {
    var options = {
      template: 'cart/preview',
      params: {
        suggest: cartItemId
      },
      config: {
        cart: {
          suggestions: {
            limit: 4
          }
        }
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getContent(options, onComplete);
  }

  /**
   * Redirect to url
   *
   * @param {String} url
   */;
  _proto.redirectTo = function redirectTo(url) {
    if (this.isRunningInIframe() && !window.iframeSdk) {
      window.top.location = url;
    } else {
      window.location = url;
    }
  }

  /**
   * Update cart content
   *
   * @param {Modal} modal
   * @param {String} cartItemId
   * @param {Function} onComplete
   */;
  _proto.updateCartContent = function updateCartContent(modal, cartItemId, onComplete) {
    this.getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }
      modal.updateContent(response);

      // Update cart counter
      var $body = $('body');
      var $cartQuantity = $('[data-cart-quantity]', modal.$content);
      var $cartCounter = $('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cartQuantity') || 0;
      var $promotionBanner = $('[data-promotion-banner]');
      var $backToShopppingBtn = $('.previewCartCheckout > [data-reveal-close]');
      var $modalCloseBtn = $('#previewModal > .modal-close');
      var bannerUpdateHandler = function bannerUpdateHandler() {
        var $productContainer = $('#main-content > .container');
        $productContainer.append('<div class="loadingOverlay pdp-update"></div>');
        $('.loadingOverlay.pdp-update', $productContainer).show();
        window.location.reload();
      };
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);
      if (onComplete) {
        onComplete(response);
      }
      if ($promotionBanner.length && $backToShopppingBtn.length) {
        $backToShopppingBtn.on('click', bannerUpdateHandler);
        $modalCloseBtn.on('click', bannerUpdateHandler);
      }
    });
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);
    this.showProductImage(data.image);
  };
  _proto.updateProductDetailsData = function updateProductDetailsData() {
    var $form = $('form[data-cart-item-add]');
    var formDataItems = $form.serializeArray();
    var productDetails = {};
    for (var _iterator = _createForOfIteratorHelperLoose(formDataItems), _step; !(_step = _iterator()).done;) {
      var formDataItem = _step.value;
      var name = formDataItem.name,
        value = formDataItem.value;
      if (name === 'product_id') {
        productDetails.productId = Number(value);
      }
      if (name === 'qty[]') {
        productDetails.quantity = Number(value);
      }
      if (name.match(/attribute/)) {
        var productOption = {
          optionId: Number(name.match(/\d+/g)[0]),
          optionValue: value
        };
        productDetails.optionSelections = productDetails != null && productDetails.optionSelections ? [].concat(productDetails.optionSelections, [productOption]) : [productOption];
      }
    }
    document.dispatchEvent(new CustomEvent('onProductUpdate', {
      bubbles: true,
      detail: {
        productDetails: productDetails
      }
    }));
  };
  _proto.updateDateSelector = function updateDateSelector() {
    this.$scope.each(function (i, scope) {
      function updateDays(dateOption) {
        var monthSelector = dateOption.querySelector('select[name$="[month]"]');
        var daySelector = dateOption.querySelector('select[name$="[day]"]');
        var yearSelector = dateOption.querySelector('select[name$="[year]"]');
        var month = parseInt(monthSelector.value, 10);
        var year = parseInt(yearSelector.value, 10);
        var daysInMonth;
        if (!Number.isNaN(month) && !Number.isNaN(year)) {
          switch (month) {
            case 2:
              daysInMonth = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28;
              break;
            case 4:
            case 6:
            case 9:
            case 11:
              daysInMonth = 30;
              break;
            default:
              daysInMonth = 31;
          }
        }
        for (var day = 29; day <= 31; day++) {
          var option = daySelector.querySelector("option[value=\"" + day + "\"]");
          if (day <= daysInMonth && !option) {
            daySelector.options.add(new Option(day, day));
          } else if (day > daysInMonth && option) {
            option.remove();
          }
        }
      }
      $(scope).on('change', function (e) {
        var dateOption = e.target && e.target.closest && e.target.closest('[data-product-attribute=date]');
        if (dateOption) {
          updateDays(dateOption);
        }
      });
      scope.querySelectorAll('[data-product-attribute=date]').forEach(function (dateOption) {
        updateDays(dateOption);
      });
    });
  };
  return ProductDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ },

/***/ "./assets/js/theme/common/utils/api.js"
/*!*********************************************!*\
  !*** ./assets/js/theme/common/utils/api.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterEmptyFilesFromForm: () => (/* binding */ filterEmptyFilesFromForm),
/* harmony export */   filterEmptyValuesFromForm: () => (/* binding */ filterEmptyValuesFromForm),
/* harmony export */   normalizeFormData: () => (/* binding */ normalizeFormData)
/* harmony export */ });
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * This function removes any empty string values from the formData
 * @param formData: FormData object
 * @returns FormData object
*/
var filterEmptyValuesFromForm = function filterEmptyValuesFromForm(formData) {
  var res = new FormData();
  try {
    for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
        key = _step$value[0],
        val = _step$value[1];
      if (val !== '') {
        res.append(key, val);
      }
    }
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
  return res;
};

/**
 * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
 * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
 * @param formData: FormData object
 * @returns FormData object
 */
var filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
  var res = new FormData();
  try {
    for (var _iterator2 = _createForOfIteratorHelperLoose(formData), _step2; !(_step2 = _iterator2()).done;) {
      var _step2$value = _step2.value,
        key = _step2$value[0],
        val = _step2$value[1];
      if (!(val instanceof File) || val.name || val.size) {
        res.append(key, val);
      }
    }
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
  }
  return res;
};

/**
 * This function removes empty string values and empty files from the formData
 * @param formData: FormData object
 * @returns FormData object
 */
var normalizeFormData = function normalizeFormData(formData) {
  return filterEmptyValuesFromForm(filterEmptyFilesFromForm(formData));
};

/***/ },

/***/ "./assets/js/theme/common/utils/banner-utils.js"
/*!******************************************************!*\
  !*** ./assets/js/theme/common/utils/banner-utils.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ie_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");

var bannerUtils = {
  dispatchProductBannerEvent: function dispatchProductBannerEvent(productAttributes) {
    if (!productAttributes.price || _ie_helpers__WEBPACK_IMPORTED_MODULE_0__.isBrowserIE) return;
    var price = 0;
    if (!productAttributes.price.price_range) {
      if (productAttributes.price.without_tax) {
        price = productAttributes.price.without_tax.value;
      }
      if (productAttributes.price.with_tax) {
        price = productAttributes.price.with_tax.value;
      }
    }
    var evt = new CustomEvent('bigcommerce.productpricechange', {
      detail: {
        amount: price
      }
    });
    window.dispatchEvent(evt);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerUtils);

/***/ },

/***/ "./assets/js/theme/common/utils/ie-helpers.js"
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/ie-helpers.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertIntoArray: () => (/* binding */ convertIntoArray),
/* harmony export */   isBrowserIE: () => (/* binding */ isBrowserIE)
/* harmony export */ });
var isBrowserIE = !!document.documentMode;
var convertIntoArray = function convertIntoArray(collection) {
  return Array.prototype.slice.call(collection);
};

/***/ },

/***/ "./assets/js/theme/product/image-gallery.js"
/*!**************************************************!*\
  !*** ./assets/js/theme/product/image-gallery.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageGallery)
/* harmony export */ });
/* harmony import */ var easyzoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easyzoom */ "./node_modules/easyzoom/dist/easyzoom.js");
/* harmony import */ var easyzoom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(easyzoom__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var ImageGallery = /*#__PURE__*/function () {
  function ImageGallery($gallery) {
    this.$mainImage = $gallery.find('[data-image-gallery-main]');
    this.$mainImageNested = $gallery.find('[data-main-image]');
    this.$selectableImages = $gallery.find('[data-image-gallery-item]');
    this.currentImage = {};
  }
  var _proto = ImageGallery.prototype;
  _proto.init = function init() {
    this.bindEvents();
    this.setImageZoom();
  };
  _proto.setMainImage = function setMainImage(imgObj) {
    this.currentImage = Object.assign({}, imgObj);
    this.setActiveThumb();
    this.swapMainImage();
  };
  _proto.setAlternateImage = function setAlternateImage(imgObj) {
    if (!this.savedImage) {
      this.savedImage = {
        mainImageUrl: this.$mainImage.find('img').attr('src'),
        zoomImageUrl: this.$mainImage.attr('data-zoom-image'),
        mainImageSrcset: this.$mainImage.find('img').attr('srcset'),
        $selectedThumb: this.currentImage.$selectedThumb
      };
    }
    this.setMainImage(imgObj);
  };
  _proto.restoreImage = function restoreImage() {
    if (this.savedImage) {
      this.setMainImage(this.savedImage);
      delete this.savedImage;
    }
  };
  _proto.selectNewImage = function selectNewImage(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    var imgObj = {
      mainImageUrl: $target.attr('data-image-gallery-new-image-url'),
      zoomImageUrl: $target.attr('data-image-gallery-zoom-image-url'),
      mainImageSrcset: $target.attr('data-image-gallery-new-image-srcset'),
      $selectedThumb: $target,
      mainImageAlt: $target.children().first().attr('alt')
    };
    this.setMainImage(imgObj);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$selectableImages.removeClass('is-active');
    if (this.currentImage.$selectedThumb) {
      this.currentImage.$selectedThumb.addClass('is-active');
    }
  };
  _proto.swapMainImage = function swapMainImage() {
    var isBrowserIE = navigator.userAgent.includes('Trident');
    this.easyzoom.data('easyZoom').swap(this.currentImage.mainImageUrl, this.currentImage.zoomImageUrl, this.currentImage.mainImageSrcset);
    this.$mainImage.attr({
      'data-zoom-image': this.currentImage.zoomImageUrl
    });
    this.$mainImageNested.attr({
      alt: this.currentImage.mainImageAlt,
      title: this.currentImage.mainImageAlt
    });
    if (isBrowserIE) {
      var fallbackStylesIE = {
        'background-image': "url(" + this.currentImage.mainImageUrl + ")",
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-origin': 'content-box',
        'background-size': 'contain'
      };
      this.$mainImageNested.css(fallbackStylesIE);
    }
  };
  _proto.checkImage = function checkImage() {
    var $imageContainer = $('.productView-image');
    var containerHeight = $imageContainer.height();
    var containerWidth = $imageContainer.width();
    var $image = this.easyzoom.data('easyZoom').$zoom;
    var height = $image.height();
    var width = $image.width();
    if (height < containerHeight || width < containerWidth) {
      this.easyzoom.data('easyZoom').hide();
    }
  };
  _proto.setImageZoom = function setImageZoom() {
    var _this = this;
    this.easyzoom = this.$mainImage.easyZoom({
      onShow: function onShow() {
        return _this.checkImage();
      },
      errorNotice: '',
      loadingNotice: ''
    });
  };
  _proto.bindEvents = function bindEvents() {
    this.$selectableImages.on('click', this.selectNewImage.bind(this));
  };
  return ImageGallery;
}();


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX3Byb2R1Y3QtZGV0YWlsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEs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TUFDL0JVLFdBQVcsRUFBRSxFQUFFO01BQ2ZDLGFBQWEsRUFBRTtJQUNuQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUE5RyxNQUFBLENBRURDLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUMrbEMsaUJBQWlCLENBQUMzbEMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNnbUMsY0FBYyxDQUFDbnBDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN0RSxDQUFDO0VBQUEsT0FBQXVQLFlBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvaW1hZ2UtZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2V5ZXZhL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL3NhbGUtY291bnRkb3duLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9yYWRpb09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy1iYXNlLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvYmFubmVyLXV0aWxzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9pZS1oZWxwZXJzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Vhc3l6b29tJztcbmltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5pbXBvcnQgeyBjcmVhdGVGb2N1c1RyYXAgfSBmcm9tICdmb2N1cy10cmFwJztcbmltcG9ydCB7IHRvb2xzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IGZyb20gJy4uLy4uL3RoZW1lL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeSc7XG5cbmNvbnN0IERFRkFVTFRfU1RFUCA9IDM2MDtcbmNsYXNzIEltYWdlR2FsbGVyeU1vZGFsIHtcbiAgICBtb2RhbFRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWNsb3NlXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQ2xvc2VcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2U+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCI+Q2xvc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Zz48dXNlIGhyZWY9XCIjaWNvbi14bWFyay1sYXJnZVwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLWVhc3l6b29tXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi1pbWctY29udGFpbmVyXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLW1haW4taW1nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbWFpbkltYWdlTGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tMzYwXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MCBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwLWltZy1jb250YWluZXJcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLWltZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLTM2MC1jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1wcmV2aW91c1wiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcHJldmlvdXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LWxlZnQtbG9uZ1wiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1wbGF5XCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wbGF5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1wbGF5XCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5QbGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcGF1c2VcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBhdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1wYXVzZVwiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UGF1c2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1uZXh0XCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1uZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1hcnJvdy1yaWdodC1sb25nXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLXZpZGVvXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllciBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYXp5bG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM5MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGl0bGVcIj57e25hbWV9fTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I3ZpZGVvcy5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdmlkZW9zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3t2aWRlb3NMYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjdmlkZW9zfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L3ZpZGVvc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ey92aWRlb3MubGVuZ3RofX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzMzYwLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC0zNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbGFiZWxcIj57e2ltYWdlczM2MExhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXMzNjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXMzNjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzMzYwLmxlbmd0aH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlcy5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtaW1hZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3tpbWFnZXNMYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlcy5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ltYWdlR2FsbGVyeT99IGltYWdlR2FsbGVyeVxuICAgICAqIEBwYXJhbSB7alF1ZXJ5P30gJGdhbGxlcnlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbWFnZUdhbGxlcnkgPSBudWxsLCAkZ2FsbGVyeSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkgPSBpbWFnZUdhbGxlcnk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnkgPSAkZ2FsbGVyeTtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcblxuICAgICAgICBpZiAoaW1hZ2VHYWxsZXJ5ICYmICRnYWxsZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy4kZ2FsbGVyeSkge1xuICAgICAgICAgICAgLy8gb3BlbiBtb2RhbCB3aGVuIGNsaWNrIG9uIHZpZGVvLCAzNjAgdmlldywgb3IgbW9yZSBpbWFnZSB0aHVtYm5haWxzXG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5XG4gICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tbW9yZV0nKVxuICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJylcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljaycpXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVNyY3NldCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcCA9ICRhLmNsb3Nlc3QoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdJykubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHZpZGVvSWQsIHN0ZXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBjbGljayBjbG9zZSBidXR0b25cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2VdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNsb3NlIG1vZGFsIHdoZW4gcHJlc3MgRXNjYXBlIGtleVxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwub24oJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBjbGljayBvdXRzaWRlIChvdmVybGF5KVxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZ2FsbGVyeU1vZGFsLmlzKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpbWFnZSB0aHVtYm5haWxzXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW1dJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdmlkZW8gdGh1bWJuYWlsc1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8odmlkZW9JZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIDM2MCBpbWFnZSB0aHVtYm5haWxzXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcl0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB0b3RhbFN0ZXAgPSAkYS5kYXRhKCdleWV2YUltYWdlR2FsbGVyeU1vZGFsSXRlbVJvdGF0b3InKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbjM2MChcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgdG90YWxTdGVwLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXByZXZpb3VzXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXMzNjBTdGVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1uZXh0XScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMubmV4dDM2MFN0ZXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBsYXldJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5MzYwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wYXVzZV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnBhdXNlMzYwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3lNb2RhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGdhbGxlcnlNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsID0gJCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0ICRtYWluSW1hZ2VMaW5rID0gdGhpcy5pbWFnZUdhbGxlcnkuJG1haW5JbWFnZS5maW5kKCdhJykuY2xvbmUoKTtcbiAgICAgICAgJG1haW5JbWFnZUxpbmsuZmluZCgnaW1nJykucmVtb3ZlQXR0cignZGF0YS16b29tLWltYWdlJykuYXR0cignZGF0YS1leWV2YS1nYWxsZXJ5LW1vZGFsLW1haW4taW1hZ2UnLCAnJyk7XG5cbiAgICAgICAgY29uc3QgbWFpbkltYWdlTGlua0VsZW1lbnQgPSAkbWFpbkltYWdlTGluay5nZXQoMCk/Lm91dGVySFRNTDtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuJGdhbGxlcnkuY2xvc2VzdCgnLnByb2R1Y3RWaWV3JykuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC10aXRsZV0nKS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IHZpZGVvc0xhYmVsID0gdGhpcy4kZ2FsbGVyeS5kYXRhKCd2aWRlb3NMYWJlbCcpIHx8ICdWaWRlb3MnO1xuICAgICAgICBjb25zdCBpbWFnZXMzNjBMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgnaW1hZ2VzMzYwTGFiZWwnKSB8fCAnMzYwIFZpZXcnO1xuICAgICAgICBjb25zdCBpbWFnZXNMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgnaW1hZ2VzTGFiZWwnKSB8fCAnUHJvZHVjdCBJbWFnZXMnO1xuXG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHRoaXMuJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvXScpLmdldCgpLm1hcChsaSA9PiAoe1xuICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICQobGkpLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5jbG9uZSgpLmdldCgwKT8ub3V0ZXJIVE1MLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwID0gdGhpcy4kZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXScpLmdldCgpLm1hcChsaSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGxpKS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJykuY2xvbmUoKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyk7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUDtcbiAgICAgICAgICAgICRlbC5yZW1vdmVBdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktaXRlbScpLmF0dHIoJ2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3InLCBzdGVwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogJGVsLmdldCgwKT8ub3V0ZXJIVE1MLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy4kZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJykuZ2V0KClcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAkKGEpLmNsb3Nlc3QoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tbW9yZV0nKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRhID0gJChhKS5jbG9uZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktaXRlbScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbScsICcnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiAkYS5nZXQoMCk/Lm91dGVySFRNTCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RhbFRlbXBsYXRlLCB7XG4gICAgICAgICAgICBtYWluSW1hZ2VMaW5rRWxlbWVudCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB2aWRlb3NMYWJlbCxcbiAgICAgICAgICAgIGltYWdlczM2MExhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzTGFiZWwsXG4gICAgICAgICAgICB2aWRlb3MsXG4gICAgICAgICAgICBpbWFnZXMzNjAsXG4gICAgICAgICAgICBpbWFnZXMsXG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuaGlkZSgpLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuXG4gICAgICAgIHRoaXMuaW5pdEltYWdlWm9vbSgpO1xuXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGdhbGxlcnlNb2RhbC5nZXQoMCksIHtcbiAgICAgICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuTW9kYWwoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHZpZGVvSWQsIHRvdGFsU3RlcCkge1xuICAgICAgICB0aGlzLiRsYXN0QWN0aXZlRWxlbWVudCA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoJ19nYWxsZXJ5TW9kYWwtb3BlbmVkJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VHYWxsZXJ5KSB7XG4gICAgICAgICAgICBjb25zdCAkbWFpbkltZyA9IHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuZmluZCgnaW1nJyk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZShcbiAgICAgICAgICAgICAgICAkbWFpbkltZy5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAkbWFpbkltZy5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS4kbWFpbkltYWdlLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWRlb0lkKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5WaWRlbyh2aWRlb0lkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0b3RhbFN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbjM2MChpbWFnZVVybCwgaW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5hZGRDbGFzcygnX29wZW5pbmcnKS5zaG93KCkucmVtb3ZlQ2xhc3MoJ19vcGVuaW5nJyk7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5hZGRDbGFzcygnX2Nsb3NpbmcnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVNYWluVmlkZW8oKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZTM2MFVJKCk7XG4gICAgICAgICAgICB0aGlzLiRib2R5LnJlbW92ZUNsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLnJlbW92ZUNsYXNzKCdfY2xvc2luZycpLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRsYXN0QWN0aXZlRWxlbWVudCkgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBzZXRNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCkge1xuICAgICAgICB0aGlzLmhpZGVNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcbiAgICAgICAgdGhpcy5zaG93TWFpbkltYWdlKCk7XG5cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYihtYWluSW1hZ2VVcmwpO1xuICAgICAgICB0aGlzLnN3YXBNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCk7XG4gICAgfVxuXG4gICAgc2hvd01haW5JbWFnZSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJykuc2hvdygpO1xuICAgIH1cblxuICAgIGhpZGVNYWluSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYihtYWluSW1hZ2VVcmwsIHZpZGVvSWQpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBhKSA9PlxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybCAmJiAkKGEpLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJykgPT09IG1haW5JbWFnZVVybFxuICAgICAgICAgICAgICAgIHx8IHZpZGVvSWQgJiYgJChhKS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpID09PSB2aWRlb0lkKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBzd2FwTWFpbkltYWdlKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwpIHtcbiAgICAgICAgY29uc3QgJGltYWdlQ29udGFpbmVyID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJyk7XG4gICAgICAgIGNvbnN0ICRhID0gJGltYWdlQ29udGFpbmVyLmZpbmQoJ2EnKTtcbiAgICAgICAgY29uc3QgJG1haW5JbWFnZSA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1nYWxsZXJ5LW1vZGFsLW1haW4taW1hZ2VdJyk7XG5cbiAgICAgICAgJGltYWdlQ29udGFpbmVyLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScsIHpvb21JbWFnZVVybCk7XG4gICAgICAgICRhLmF0dHIoJ2hyZWYnLCB6b29tSW1hZ2VVcmwpO1xuICAgICAgICAkbWFpbkltYWdlLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybCkuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KTtcblxuICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuc3dhcChcbiAgICAgICAgICAgIG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgIHpvb21JbWFnZVVybCxcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpc0Jyb3dzZXJJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ1RyaWRlbnQnKTtcbiAgICAgICAgaWYgKGlzQnJvd3NlcklFKSB7XG4gICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlc0lFID0ge1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgke21haW5JbWFnZVVybH0pYCxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbic6ICdjb250ZW50LWJveCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb250YWluJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1tYWluLWltYWdlXScpLmNzcyhmYWxsYmFja1N0eWxlc0lFKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0ICRpbWFnZUNvbnRhaW5lciA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLW1haW4taW1nLWNvbnRhaW5lcl0nKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gJGltYWdlQ29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICRpbWFnZUNvbnRhaW5lci53aWR0aCgpO1xuXG4gICAgICAgIGNvbnN0ICRpbWFnZSA9IHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS4kem9vbTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gJGltYWdlLmhlaWdodCgpO1xuICAgICAgICBjb25zdCB3aWR0aCA9ICRpbWFnZS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChoZWlnaHQgPCBjb250YWluZXJIZWlnaHQgfHwgd2lkdGggPCBjb250YWluZXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRJbWFnZVpvb20oKSB7XG4gICAgICAgIHRoaXMuZWFzeXpvb20gPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5lYXN5Wm9vbSh7XG4gICAgICAgICAgICBvblNob3c6ICgpID0+IHRoaXMuY2hlY2tJbWFnZSgpLFxuICAgICAgICAgICAgZXJyb3JOb3RpY2U6ICcnLFxuICAgICAgICAgICAgbG9hZGluZ05vdGljZTogJycsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllcl0nKS5zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZU1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLmhpZGUoKVxuICAgICAgICAgICAgLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsICcnKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8odmlkZW9JZCkge1xuICAgICAgICB0aGlzLmhpZGVNYWluSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcbiAgICAgICAgdGhpcy5zaG93TWFpblZpZGVvKCk7XG5cbiAgICAgICAgY29uc3Qgc3JjID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/cmVmPTAmYXV0b3BsYXk9MWA7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllcl0nKS5zaG93KCkuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgc3JjKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYihudWxsLCB2aWRlb0lkKTtcbiAgICB9XG5cbiAgICBzZXRNYWluMzYwKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCkge1xuICAgICAgICB0aGlzLmhpZGVNYWluSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5oaWRlTWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2hvdzM2MFVJKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbjM2MChtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApO1xuICAgIH1cblxuICAgIHN3YXBNYWluMzYwKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtaW1nLWNvbnRhaW5lcl0gaW1nJylcbiAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpXG4gICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScsIHpvb21JbWFnZVVybCk7XG4gICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoMCwgdG90YWxTdGVwKTtcbiAgICB9XG5cbiAgICBzaG93MzYwVUkoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZTM2MFVJKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykuaGlkZSgpO1xuICAgICAgICB0aGlzLnBhdXNlMzYwKCk7XG4gICAgfVxuXG4gICAgc2V0MzYwQ3VycmVudFN0ZXAoY3VycmVudFN0ZXAsIHRvdGFsU3RlcCA9IERFRkFVTFRfU1RFUCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJylcbiAgICAgICAgICAgIC5jc3MoJy0taW1hZ2UtMzYwLWN1cnJlbnQnLCBjdXJyZW50U3RlcClcbiAgICAgICAgICAgIC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJywgdG90YWxTdGVwKTtcbiAgICB9XG5cbiAgICBuZXh0MzYwU3RlcCgpIHtcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpO1xuICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLWN1cnJlbnQnKSkgfHwgMDtcbiAgICAgICAgY29uc3QgdG90YWwgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtc3RlcHMnKSkgfHwgREVGQVVMVF9TVEVQO1xuXG4gICAgICAgIGlmIChzdGVwIDwgdG90YWwgLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKHN0ZXAgKyAxLCB0b3RhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKDAsIHRvdGFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXZpb3VzMzYwU3RlcCgpIHtcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpO1xuICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLWN1cnJlbnQnKSkgfHwgMDtcbiAgICAgICAgY29uc3QgdG90YWwgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtc3RlcHMnKSkgfHwgREVGQVVMVF9TVEVQO1xuXG4gICAgICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcChzdGVwIC0gMSwgdG90YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcCh0b3RhbCAtIDEsIHRvdGFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkzNjAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbDM2MCk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwzNjAgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHQzNjBTdGVwKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5hZGRDbGFzcygnX3BsYXlpbmcnKTtcbiAgICB9XG5cbiAgICBwYXVzZTM2MCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsMzYwKTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLnJlbW92ZUNsYXNzKCdfcGxheWluZycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmRJbWFnZUdhbGxlcnlNb2RhbCBleHRlbmRzIEltYWdlR2FsbGVyeU1vZGFsIHtcbiAgICBsb2FkaW5nTW9kYWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1vdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IGV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sb2FkaW5nXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAkc2NvcGUsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb2R1Y3RJZCxcbiAgICAgICAgICAgIGdyYXBoUUxUb2tlbixcbiAgICAgICAgICAgIHpvb21TaXplLFxuICAgICAgICAgICAgcHJvZHVjdFNpemUsXG4gICAgICAgICAgICB0aHVtYlNpemUsXG4gICAgICAgICAgICB0eHRWaWRlb3NMYWJlbCxcbiAgICAgICAgICAgIHR4dEltYWdlczM2MExhYmVsLFxuICAgICAgICAgICAgdHh0SW1hZ2VzTGFiZWwsXG4gICAgICAgIH0gPSB7fSxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuICAgICAgICB0aGlzLmdyYXBoUUxUb2tlbiA9IGdyYXBoUUxUb2tlbjtcbiAgICAgICAgdGhpcy56b29tU2l6ZSA9IHpvb21TaXplO1xuICAgICAgICB0aGlzLnByb2R1Y3RTaXplID0gcHJvZHVjdFNpemU7XG4gICAgICAgIHRoaXMudGh1bWJTaXplID0gdGh1bWJTaXplO1xuICAgICAgICB0aGlzLnR4dFZpZGVvc0xhYmVsID0gdHh0VmlkZW9zTGFiZWw7XG4gICAgICAgIHRoaXMudHh0SW1hZ2VzMzYwTGFiZWwgPSB0eHRJbWFnZXMzNjBMYWJlbDtcbiAgICAgICAgdGhpcy50eHRJbWFnZXNMYWJlbCA9IHR4dEltYWdlc0xhYmVsO1xuICAgIH1cblxuICAgIGFzeW5jIG9wZW5Mb2FkaW5nTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveU1vZGFsKCk7XG5cbiAgICAgICAgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRib2R5LmFkZENsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgbG9hZGluZyBtb2RhbFxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLmxvYWRpbmdNb2RhbFRlbXBsYXRlKSk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5oaWRlKCkuYXBwZW5kVG8odGhpcy4kYm9keSk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5hZGRDbGFzcygnX29wZW5pbmcnKS5zaG93KCkucmVtb3ZlQ2xhc3MoJ19vcGVuaW5nJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZE1vZGFsKCkge1xuICAgICAgICAvLyBmZXRjaCBwcm9kdWN0IGRhdGFcbiAgICAgICAgYXdhaXQgdGhpcy5mZXRjaFByb2R1Y3QoKTtcblxuICAgICAgICBjb25zdCBtYWluSW1hZ2UgPSB0aGlzLmltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmlzRGVmYXVsdCkgfHwgdGhpcy5pbWFnZXNbMF07XG4gICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChtYWluSW1hZ2UudXJsVGVtcGxhdGUpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZUxpbmtFbGVtZW50ID0gYFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiJHttYWluSW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsPVwiJHttYWluSW1hZ2UudXJsfVwiXG4gICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQ9XCIke21haW5JbWFnZVNyY3NldH1cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7bWFpbkltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgID48aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBzcmM9XCIke21haW5JbWFnZS50aHVtYm5haWxVcmx9XCIgZGF0YS1zcmNzZXQ9XCIke21haW5JbWFnZVNyY3NldH1cIiBkYXRhLXNpemVzPVwiYXV0b1wiIGFsdD1cIiR7bWFpbkltYWdlLmFsdFRleHR9XCIgLz48L2E+YDtcblxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy4kc2NvcGUuZmluZCgnLmNhcmQtdGl0bGUnKS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IHZpZGVvc0xhYmVsID0gdGhpcy50eHRWaWRlb3NMYWJlbCB8fCAnVmlkZW9zJztcbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwTGFiZWwgPSB0aGlzLnR4dEltYWdlczM2MExhYmVsIHx8ICczNjAgVmlldyc7XG4gICAgICAgIGNvbnN0IGltYWdlc0xhYmVsID0gdGhpcy50eHRJbWFnZXNMYWJlbCB8fCAnUHJvZHVjdCBJbWFnZXMnO1xuXG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHRoaXMudmlkZW9zLm1hcCh2aWRlbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHZpZGVvLnVybCk7XG4gICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3YnKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFZpZXctdGh1bWJuYWlsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7dmlkZW8udXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZD1cIiR7dmlkZW9JZH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvJHt2aWRlb0lkfS9kZWZhdWx0LmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgaHJlZj1cIiNpY29uLXBsYXktc29saWRcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPmAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbWFnZXMzNjAgPSB0aGlzLmltYWdlczM2MC5tYXAoKGltYWdlVXJsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFZpZXctdGh1bWJuYWlsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3I9XCIke3N0ZXB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsPVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQ9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVVybH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIGhyZWY9XCIjaWNvbi0zNjBcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPmAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoaW1hZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmNzZXQgPSB0b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoaW1hZ2UudXJsVGVtcGxhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogYFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kdWN0Vmlldy10aHVtYm5haWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHtpbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmw9XCIke2ltYWdlLnVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQ9XCIke2ltYWdlU3Jjc2V0fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke2ltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkXCIgc3JjPVwiJHtpbWFnZS50aHVtYm5haWxVcmx9XCIgZGF0YS1zcmNzZXQ9XCIke2ltYWdlU3Jjc2V0fVwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgYWx0PVwiJHtpbWFnZS5hbHRUZXh0fVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgJGdhbGxlcnlNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kYWxUZW1wbGF0ZSwge1xuICAgICAgICAgICAgbWFpbkltYWdlTGlua0VsZW1lbnQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmlkZW9zTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXMzNjBMYWJlbCxcbiAgICAgICAgICAgIGltYWdlc0xhYmVsLFxuICAgICAgICAgICAgdmlkZW9zLFxuICAgICAgICAgICAgaW1hZ2VzMzYwLFxuICAgICAgICAgICAgaW1hZ2VzLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gcmVwbGFjZSBsb2FkaW5nIG1vZGFsIHdpdGggdGhlIGFjdHVhbCBtb2RhbFxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuaHRtbCgkZ2FsbGVyeU1vZGFsLmh0bWwoKSk7XG5cbiAgICAgICAgdGhpcy5pbml0SW1hZ2Vab29tKCk7XG5cbiAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAodGhpcy4kZ2FsbGVyeU1vZGFsLmdldCgwKSwge1xuICAgICAgICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IGZhbHNlLFxuICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIG9wZW5Nb2RhbCh7XG4gICAgICAgIGZpcnN0VmlkZW8gPSBmYWxzZSxcbiAgICAgICAgZmlyc3QzNjAgPSBmYWxzZSxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5vcGVuTG9hZGluZ01vZGFsKCk7XG5cbiAgICAgICAgdGhpcy5sb2FkTW9kYWwoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChmaXJzdFZpZGVvKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykuZmlyc3QoKS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKHZpZGVvSWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmlyc3QzNjApIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3JdJykuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1haW4zNjAoXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnZXlldmFJbWFnZUdhbGxlcnlNb2RhbEl0ZW1Sb3RhdG9yJyksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuYWN0aXZhdGUoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2VdJykudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoUHJvZHVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzIHx8IHRoaXMudmlkZW9zIHx8IHRoaXMuaW1hZ2VzMzYwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgW3pvb21XaWR0aCwgem9vbUhlaWdodF0gPSB0aGlzLnpvb21TaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XG4gICAgICAgIGNvbnN0IFtpbWFnZVdpZHRoLCBpbWFnZUhlaWdodF0gPSB0aGlzLnByb2R1Y3RTaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XG4gICAgICAgIGNvbnN0IFt0aHVtYldpZHRoLCB0aHVtYkhlaWdodF0gPSB0aGlzLnRodW1iU2l6ZS5zcGxpdCgneCcpLm1hcChOdW1iZXIpO1xuXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkoXG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdElkOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHpvb21XaWR0aDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR6b29tSGVpZ2h0OiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW1hZ2VIZWlnaHQ6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGh1bWJXaWR0aDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aHVtYkhlaWdodDogSW50IVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QoZW50aXR5SWQ6ICRwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsKHdpZHRoOiAkaW1hZ2VXaWR0aCwgaGVpZ2h0OiAkaW1hZ2VIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbFVybDogdXJsKHdpZHRoOiAkdGh1bWJXaWR0aCwgaGVpZ2h0OiAkdGh1bWJIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb21Vcmw6IHVybCh3aWR0aDogJHpvb21XaWR0aCwgaGVpZ2h0OiAkem9vbUhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsVGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzKG5hbWVzOiBbXCJfX0AzNjBcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvZHVjdElkLFxuICAgICAgICAgICAgICAgICAgICB6b29tV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHpvb21IZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0aHVtYldpZHRoLFxuICAgICAgICAgICAgICAgICAgICB0aHVtYkhlaWdodCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5ncmFwaFFMVG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBbaW1hZ2VzLCB2aWRlb3MsIGltYWdlczM2MF0gPSBbXG4gICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LmltYWdlcy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiBub2RlKSxcbiAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QudmlkZW9zLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IG5vZGUpLFxuICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdC5jdXN0b21GaWVsZHMuZWRnZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IG5vZGUgfSkgPT4gbm9kZS5uYW1lID09PSAnX19AMzYwJylcbiAgICAgICAgICAgICAgICAubWFwKCh7IG5vZGUgfSkgPT4gbm9kZS52YWx1ZSksXG4gICAgICAgIF07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7YWx0VGV4dDogc3RyaW5nLCBpc0RlZmF1bHQ6IGJvb2xlYW4sIHVybD86IHN0cmluZywgdGh1bWJuYWlsVXJsPzogc3RyaW5nLCB6b29tVXJsPzogc3RyaW5nLCB1cmxUZW1wbGF0ZT86IHN0cmluZ30+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7dGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmd9Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmlkZW9zID0gdmlkZW9zO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmltYWdlczM2MCA9IGltYWdlczM2MDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSBleHRlbmRzIENvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZ2FsbGVyeSkge1xuICAgICAgICBzdXBlcigkZ2FsbGVyeSk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5TW9kYWwgPSBuZXcgSW1hZ2VHYWxsZXJ5TW9kYWwodGhpcywgJGdhbGxlcnkpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnlNb2RhbC5iaW5kRXZlbnRzKCk7XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4vLyBpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5pbXBvcnQgQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyBmcm9tICcuLi8uLi90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB7IGFsZXJ0TW9kYWwsIHNob3dBbGVydE1vZGFsLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4uLy4uL3RoZW1lL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgeyBmaXhGb3JtRWxlbWVudFVuaXF1ZUlkcywgY3VycmVuY3lGb3JtYXQgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgU2FsZUNvdW50ZG93biBmcm9tICcuLi9zYWxlLWNvdW50ZG93bic7XG5cbmNvbnN0IERFQlVHX0xPRyA9IGZhbHNlO1xuXG5jb25zdCBub3JtYWxpemVPcHRpb25TdHJpbmcgPSBzID0+IHMucmVwbGFjZSgvOi9nLCAnJykucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnRvTG93ZXJDYXNlKCk7XG5cbmZ1bmN0aW9uIGVxdWFsT3B0aW9uU3RyaW5nKGEsIGIpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplT3B0aW9uU3RyaW5nKGEpID09PSBub3JtYWxpemVPcHRpb25TdHJpbmcoYik7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIGFycmF5cyBhcmUgZXF1YWwgcmVnYXJkbGVzcyBvZiBvcmRlclxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycjFcbiAqIEBwYXJhbSB7QXJyYXl9IGFycjJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBhcmVBcnJheXNFcXVhbFVub3JkZXJlZChhcnIxLCBhcnIyKSB7XG4gICAgY29uc3QgX2FycjEgPSBhcnIxLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIGNvbnN0IF9hcnIyID0gYXJyMi5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICByZXR1cm4gX2FycjEubGVuZ3RoID09PSBfYXJyMi5sZW5ndGggJiYgX2FycjEuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IF9hcnIyW2luZGV4XSk7XG59XG5cbmxldCBjYWNoZWRTZXR0aW5ncztcblxuLyoqXG4gKiBIYW5kbGUgbXVsdGlwbGUgcHJvbWlzZXMgd2l0aCBhIGNvbmN1cnJlbmN5IGxpbWl0IChlLmcuLCBwcm9jZXNzaW5nIG9ubHkgMTAgcHJvbWlzZXMgYXQgYSB0aW1lIG91dCBvZiAxMClcbiAqXG4gKiBAcGFyYW0ge0FycmF5PEZ1bmN0aW9uPFQ+fSBwcm9taXNlcyBmdW5jdGlvbnMgdGhhdCByZXR1cm4gYSBwcm9taXNlXG4gKiBAcGFyYW0geyp9IGxpbWl0IG51bWJlciBvZiBwcm9taXNlcyB0byBwcm9jZXNzIGF0IGEgdGltZVxuICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8VD4+fSByZXN1bHRzIG9mIGFsbCBwcm9taXNlc1xuICovXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVQcm9taXNlc1dpdGhMaW1pdChwcm9taXNlcywgbGltaXQgPSAxMCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBjb25zdCBleGVjdXRpbmcgPSBbXTsgLy8gVHJhY2sgdGhlIHByb21pc2VzIGN1cnJlbnRseSBleGVjdXRpbmdcblxuICAgIGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuICAgICAgICAvLyBTdGFydCB0aGUgcHJvbWlzZSBhbmQgYWRkIGl0IHRvIHRoZSBleGVjdXRpbmcgbGlzdFxuICAgICAgICBjb25zdCBwID0gcHJvbWlzZSgpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmluaXNoZWQgcHJvbWlzZSBmcm9tIGV4ZWN1dGluZyBsaXN0XG4gICAgICAgICAgICBleGVjdXRpbmcuc3BsaWNlKGV4ZWN1dGluZy5pbmRleE9mKHApLCAxKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHRzLnB1c2gocCk7XG4gICAgICAgIGV4ZWN1dGluZy5wdXNoKHApO1xuXG4gICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBsaW1pdCwgd2FpdCBmb3IgdGhlIGZpcnN0IHRvIGZpbmlzaFxuICAgICAgICBpZiAoZXhlY3V0aW5nLmxlbmd0aCA+PSBsaW1pdCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmFjZShleGVjdXRpbmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2FpdCBmb3IgYWxsIHJlbWFpbmluZyBwcm9taXNlcyB0byBjb21wbGV0ZVxuICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb3JuZXJzdG9uZVByb2R1Y3REZXRhaWxzIHtcbiAgICBtb2RpZmllcnNNb2RhbE92ZXJsYXlUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1vdmVybGF5XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3ZlcmxheT48L2Rpdj5cbiAgICBgO1xuXG4gICAgbW9kaWZpZXJzTW9kYWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbFwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY2xvc2UtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQ2xvc2VcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jbG9zZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCI+Q2xvc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWJhY2stYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQmFja1wiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkJhY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LWxlZnQtbG9uZ1wiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWhlYWRlci10aXRsZVwiPjwlJnByb2R1Y3RUaXRsZSU+PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbnRlbnRcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtdGl0bGVcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbiBjdXJyZW50IHN0ZXAncyB0aXRsZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1vcHRpb25zXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgbW9kaWZpZXJzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1zdW1tYXJ5XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgc3VtbWFyeSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY29tcGxldGVcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgYWRkIHRvIGNhcnQgYnV0dG9uICYgcXR5IGJveCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1mb290ZXJcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY29udGludWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwldHh0Q29udGludWUlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWZvb3Rlci1zdWJ0b3RhbFwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgc3VidG90YWwgLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPCUjbWFpbkltYWdlVXJsJT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiPCVtYWluSW1hZ2VVcmwlPlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNyY3NldD1cIjwlbWFpbkltYWdlU3Jjc2V0JT5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS16b29tLWltYWdlPVwiPCV6b29tSW1hZ2VVcmwlPlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNpemVzPVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxhenlsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWltZyAvPlxuICAgICAgICAgICAgICAgIDwlL21haW5JbWFnZVVybCU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIG9wdGlvblRvb2x0aXBUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tdG9vbHRpcFwiPjwldG9vbHRpcCU+PC9kaXY+XG4gICAgYDtcblxuICAgIG9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXZhbHVlLXRvb2x0aXBcIj48JXRvb2x0aXAlPjwvZGl2PlxuICAgIGA7XG5cbiAgICBvcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdmFsdWUtdG9vbHRpcC1oZWFkaW5nXCI+PCVoZWFkaW5nJT48L2Rpdj5cbiAgICBgO1xuXG4gICAgb3B0aW9uUHJpY2VUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UtZ3JvdXBcIj5cbiAgICAgICAgICAgIDwlI3ByZWxvYWRlciU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UgX3ByZWxvYWRlclwiPi4uLjwvZGl2PlxuICAgICAgICAgICAgPCUvcHJlbG9hZGVyJT5cbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aFRheCU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UgX3dpdGhUYXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aFRheCU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utb2xkIF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhUYXglPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aFRheCU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1ub3cgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhUYXglPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XG4gICAgICAgICAgICA8JSNwcmljZVdpdGhvdXRUYXglPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlIF93aXRob3V0VGF4XCI+XG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW9sZCBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utbm93IF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8JS9wcmljZVdpdGhvdXRUYXglPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgb3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlID0gYFxuICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxuICAgICAgICAgICAgKDwlcHJpY2VXaXRoVGF4JT4pXG4gICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XG4gICAgICAgIDwlXnByaWNlV2l0aFRheCU+XG4gICAgICAgICAgICA8JSNwcmljZVdpdGhvdXRUYXglPlxuICAgICAgICAgICAgICAgICg8JXByaWNlV2l0aG91dFRheCU+KVxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cbiAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cbiAgICBgO1xuXG4gICAgc3VidG90YWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLWdyb3VwLWxhYmVsXCI+PCV0eHRTdWJ0b3RhbCU+PC9kaXY+XG4gICAgICAgICAgICA8JSNwcmVsb2FkZXIlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsIF9wcmVsb2FkZXJcIj4uLi48L2Rpdj5cbiAgICAgICAgICAgIDwlL3ByZWxvYWRlciU+XG4gICAgICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsIF93aXRoVGF4XCI+XG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhUYXglPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW9sZCBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRoVGF4JT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhUYXglPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtbm93IF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRoVGF4JT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8JS9wcmljZVdpdGhUYXglPlxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbCBfd2l0aG91dFRheFwiPlxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1vbGQgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW5vdyBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JXByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIHN1bW1hcnlUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9uc1wiPlxuICAgICAgICAgICAgPCUjb3B0aW9ucyU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnMtb3B0aW9uLW5hbWVcIj48JW5hbWUlPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnMtb3B0aW9uLXZhbHVlXCI+PCV2YWx1ZSU+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb24tcHJpY2VzXCI+PCUmcHJpY2VIdG1sJT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8JS9vcHRpb25zJT5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIHNob3dQcmljZUZyZWUgPSBmYWxzZTtcbiAgICBzaG93UHJpY2VaZXJvID0gZmFsc2U7XG5cbiAgICBhZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IgPSAnLmFkZC10by1jYXJ0LXdyYXBwZXInO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgZm9yIGZ1bmN0aW9uIGBmZXRjaE9wdGlvblByaWNlYFxuICAgICAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCB7IHByaWNlc1dpdGhUYXg6IHsgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IH0sIHByaWNlc1dpdGhvdXRUYXg6IHsgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IH0gfT59XG4gICAgICovXG4gICAgZmV0Y2hPcHRpb25QcmljZUNhY2hlID0ge307XG5cbiAgICBjb25zb2xlID0ge1xuICAgICAgICBsb2c6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICBpZiAoREVCVUdfTE9HKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAuLi5hcmdzKSB7XG4gICAgICAgIGZpeEZvcm1FbGVtZW50VW5pcXVlSWRzKCRzY29wZSk7XG5cbiAgICAgICAgc3VwZXIoJHNjb3BlLCAuLi5hcmdzKTtcblxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG4gICAgICAgIGNvbnN0ICRjaG9vc2VPcHRpb25zQnRuID0gJGZvcm0uZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gTnVtYmVyKCRmb3JtLmZpbmQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VzdG9tRmllbGRzID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUZpZWxkc1RleHQgPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LWN1c3RvbS1maWVsZHNdJykudGV4dCgpO1xuICAgICAgICAgICAgaWYgKGN1c3RvbUZpZWxkc1RleHQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShjdXN0b21GaWVsZHNUZXh0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgSlNPTiBmb3IgY3VzdG9tIGZpZWxkcycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMuY3VzdG9tRmllbGRzOicsIHRoaXMuY3VzdG9tRmllbGRzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtcbiAgICAgICAgICogICBpZDogbnVtYmVyLFxuICAgICAgICAgKiAgIGRpc3BsYXlfbmFtZTogc3RyaW5nLFxuICAgICAgICAgKiAgIHN0YXRlOiAnbW9kaWZpZXInIHwgJ3ZhcmlhbnRfb3B0aW9uJyxcbiAgICAgICAgICogICBwYXJ0aWFsOiAnc3dhdGNoJyB8ICdzZXQtcmVjdGFuZ2xlJyB8ICdzZXQtc2VsZWN0JyB8ICdzZXQtcmFkaW8nXG4gICAgICAgICAqICAgICB8ICdpbnB1dC10ZXh0JyB8ICdpbnB1dC1udW1iZXJzJyB8ICdpbnB1dC1jaGVja2JveCcgfCAnaW5wdXQtZmlsZSdcbiAgICAgICAgICogICAgIHwgJ2RhdGUnIHwgJ3RleHRhcmVhJyB8ICdwcm9kdWN0LWxpc3QnLFxuICAgICAgICAgKiAgIHJlcXVpcmVkOiBib29sZWFuLFxuICAgICAgICAgKiAgIHByZWZpbGw/OiBzdHJpbmcsXG4gICAgICAgICAqICAgc2VsZWN0ZWRfZGF0ZT86IHtcbiAgICAgICAgICogICAgIGRheTogc3RyaW5nLFxuICAgICAgICAgKiAgICAgbW9udGg6IHN0cmluZyxcbiAgICAgICAgICogICAgIHllYXI6IHN0cmluZ1xuICAgICAgICAgKiAgIH0sXG4gICAgICAgICAqICAgY2hlY2tlZD86IGJvb2xlYW4sXG4gICAgICAgICAqICAgbm9WYWx1ZT86IG51bWJlcixcbiAgICAgICAgICogICB2YWx1ZT86IG51bWJlcixcbiAgICAgICAgICogICB2YWx1ZXM/OiBBcnJheTx7XG4gICAgICAgICAqICAgICBpZDogbnVtYmVyLFxuICAgICAgICAgKiAgICAgbGFiZWw6IHN0cmluZyxcbiAgICAgICAgICogICAgIHNlbGVjdGVkOiBib29sZWFuLFxuICAgICAgICAgKiAgICAgZGF0YTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPlxuICAgICAgICAgKiAgIH0+XG4gICAgICAgICAqIH0+fVxuICAgICAgICAgKlxuICAgICAgICAgKiAtIGlkOiBPcHRpb24gSURcbiAgICAgICAgICogLSBkaXNwbGF5X25hbWU6IERpc3BsYXkgbmFtZSBvZiB0aGUgb3B0aW9uXG4gICAgICAgICAqIC0gc3RhdGU6IFR5cGUgb2Ygb3B0aW9uIHN0YXRlLCBlaXRoZXIgJ21vZGlmaWVyJyBvciAndmFyaWFudF9vcHRpb24nXG4gICAgICAgICAqIC0gcmVxdWlyZWQ6IEluZGljYXRlcyBpZiB0aGlzIG9wdGlvbiBpcyByZXF1aXJlZFxuICAgICAgICAgKiAtIHByZWZpbGw6IE9wdGlvbmFsIHByZWZpbGwgdmFsdWUsIGF2YWlsYWJsZSBmb3IgdGV4dCBiYXNlZCBmaWVsZHMgb25seVxuICAgICAgICAgKiAtIHNlbGVjdGVkX2RhdGU6IE9wdGlvbmFsIHNlbGVjdGVkIGRhdGUgb2JqZWN0LCBhdmFpbGFibGUgZm9yIGRhdGUgZmllbGQgb25seTpcbiAgICAgICAgICogICAtIGRheTogRGF5IHBhcnQgb2YgdGhlIGRhdGVcbiAgICAgICAgICogICAtIG1vbnRoOiBNb250aCBwYXJ0IG9mIHRoZSBkYXRlXG4gICAgICAgICAqICAgLSB5ZWFyOiBZZWFyIHBhcnQgb2YgdGhlIGRhdGVcbiAgICAgICAgICogLSBjaGVja2VkOiBPcHRpb25hbCBjaGVja2VkIHN0YXR1cyBmb3IgdGhlIG9wdGlvbiwgYXZhaWxhYmxlIGZvciBjaGVja2JveCBmaWVsZCBvbmx5XG4gICAgICAgICAqIC0gbm9WYWx1ZTogT3B0aW9uYWwgdmFsdWUgZm9yIFwibm8gc2VsZWN0aW9uXCIgKGlmIGFwcGxpY2FibGUpLCBhdmFpbGFibGUgZm9yIGNoZWNrYm94IGZpZWxkIG9ubHlcbiAgICAgICAgICogLSB2YWx1ZTogT3B0aW9uYWwgbnVtZXJpYyB2YWx1ZSBhc3NpZ25lZCB0byB0aGUgb3B0aW9uLCBhdmFpbGFibGUgZm9yIGNoZWNrYm94IGZpZWxkIG9ubHlcbiAgICAgICAgICogLSB2YWx1ZXM6IE9wdGlvbmFsIGFycmF5IG9mIHBvc3NpYmxlIHZhbHVlcywgYXZhaWxhYmxlIGZvciByYWRpbywgc2VsZWN0LCBzd2F0Y2gsIHByb2R1Y3QgcGljay1saXN0IGZpZWxkcyBvbmx5OlxuICAgICAgICAgKiAgIC0gaWQ6IFVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIHZhbHVlXG4gICAgICAgICAqICAgLSBsYWJlbDogRGlzcGxheSBsYWJlbCBmb3IgdGhlIHZhbHVlXG4gICAgICAgICAqICAgLSBzZWxlY3RlZDogSW5kaWNhdGVzIGlmIHRoaXMgdmFsdWUgaXMgc2VsZWN0ZWRcbiAgICAgICAgICogICAtIGRhdGE6IEFkZGl0aW9uYWwgZGF0YSBmb3IgdGhlIHZhbHVlLCBjYW4gYmUgYSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0T3B0aW9uc1RleHQgPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbnNdJykudGV4dCgpO1xuICAgICAgICAgICAgaWYgKHByb2R1Y3RPcHRpb25zVGV4dCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHByb2R1Y3RPcHRpb25zVGV4dCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdJbnZhbGlkIEpTT04gZm9yIHByb2R1Y3Qgb3B0aW9ucycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMucHJvZHVjdE9wdGlvbnM6JywgdGhpcy5wcm9kdWN0T3B0aW9ucyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIG1vZGlmaWVycyBtb2RhbCBmZWF0dXJlXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgLy8gZW5hYmxlIG1vZGlmaWVycyBtb2RhbCBpZiBvdXIgY2hvb3NlIG9wdGlvbnMgYnV0dG9uIGFwcGVhcnMgaW4gdGhlIHByb2R1Y3QgZGV0YWlsc1xuICAgICAgICB0aGlzLmVuYWJsZU1vZGlmaWVyc01vZGFsID0gJGNob29zZU9wdGlvbnNCdG4ubGVuZ3RoID4gMDtcblxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RpZmllcnNNb2RhbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kUHJvZHVjdEVkaXRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kTW9kYWxEZXN0cm95KCk7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvblN0ZXBwZXIoKTtcbiAgICAgICAgdGhpcy5zeW5jUHJvZHVjdENhcmRRdHkoKTtcbiAgICAgICAgdGhpcy5pbml0U2FsZUNvdW50ZG93bigpO1xuICAgICAgICAkKCdib2R5JykudHJpZ2dlcigndXBkYXRlLXdpc2hsaXN0LWJ1dHRvbnMnLCBbdGhpcy4kc2NvcGVdKTtcbiAgICB9XG5cbiAgICBnZXQgJHVwZGF0ZVByb2R1Y3RXcmFwcGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtdXBkYXRlLXByb2R1Y3Qtd3JhcHBlcl0nKTtcbiAgICB9XG5cbiAgICBnZXRWaWV3TW9kZWwoLi4uYXJncykge1xuICAgICAgICBjb25zdCBtb2RlbCA9IHN1cGVyLmdldFZpZXdNb2RlbCguLi5hcmdzKTtcbiAgICAgICAgbW9kZWwuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyID0gdGhpcy4kdXBkYXRlUHJvZHVjdFdyYXBwZXI7XG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xuICAgICAgICBjb25zdCAkYnRuID0gdGhpcy4kdXBkYXRlUHJvZHVjdFdyYXBwZXIuZmluZCgnaW5wdXQsIGJ1dHRvbicpO1xuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgJGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGJ0bi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoZSBtZXRob2QgdG8gc3VwcG9ydCBlZGl0IHByb2R1Y3QgaW4gY2FydFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cbiAgICAgKi9cbiAgICBhZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIGlmIChldmVudC5lZGl0UHJvZHVjdEluQ2FydCkge1xuICAgICAgICAgICAgJChmb3JtKS5maW5kKCdpbnB1dFtuYW1lPVwiYWN0aW9uXCJdJykudmFsKCdFZGl0UHJvZHVjdEZpZWxkc0luQ2FydCcpO1xuICAgICAgICAgICAgdGhpcy5lZGl0UHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKGZvcm0pLmZpbmQoJ2lucHV0W25hbWU9XCJhY3Rpb25cIl0nKS52YWwoJ2FkZCcpO1xuICAgICAgICAgICAgc3VwZXIuYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFZGl0IHByb2R1Y3QgaW4gY2FydC5cbiAgICAgKiBBbG1vc3QgY2xvbmUgZnJvbSBhZGRQcm9kdWN0VG9DYXJ0IG1ldGhvZCBmcm9tIHRoZSBwYXJlbnQgY2xhc3MuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGFzeW5jIGVkaXRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIGNvbnN0ICRzYXZlQnRuID0gJCgnW2RhdGEtdXBkYXRlLXByb2R1Y3Qtd3JhcHBlcl0nLCAkKGV2ZW50LnRhcmdldCkpLmZpbmQoJ2lucHV0LCBidXR0b24nKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkc2F2ZUJ0bi52YWwoKTtcbiAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkc2F2ZUJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJHNhdmVCdG5cbiAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRzYXZlQnRuLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKTtcblxuICAgICAgICBjb25zdCBzdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAkc2F2ZUJ0blxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdENhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBmYWlsdXJlID0gKGVycm9yVGV4dCkgPT4ge1xuICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JUZXh0O1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRzYXZlQnRuKSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0TW9kYWwoKS4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkc2F2ZUJ0bjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0UXVhbnRpdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGZvcm1EYXRhLmdldCgnaXRlbV9pZCcpO1xuICAgICAgICAgICAgY29uc3QgbmV3UXR5ID0gZm9ybURhdGEuZ2V0KCdxdHlbXScpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ2FydEl0ZW1RdWFudGl0eShpdGVtSWQsIG5ld1F0eSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsdXJlKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6IGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICB9KS5kb25lKChyZXNwb25zZSkgPT4gc3VjY2VzcyhyZXNwb25zZSkpLmZhaWwoKF94aHIsIF9zdGF0dXMsIGVycm9yKSA9PiBmYWlsdXJlKGVycm9yKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2FydEl0ZW1RdWFudGl0eShpdGVtSWQsIG5ld1F0eSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlPy5kYXRhPy5zdGF0dXMgIT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGNsaWNrIG9uIHRoZSBBZGQgTmV3IHRvIENhcnQgYnV0dG9uLCB0cmlnZ2VyIHRoZSBmb3JtIHN1Ym1pdCBldmVudCB3aXRoIGBhZGROZXdUb0NhcnRgIGZsYWdcbiAgICAgKiBzbyB0aGF0IG5ldyBwcm9kdWN0IGlzIGFsd2F5cyBhZGRlZCB0byBjYXJ0IHJlZ2FyZGxlc3Mgb2YgZWRpdCBwcm9kdWN0IGluIGNhcnQgb3Igbm90XG4gICAgICovXG4gICAgYmluZFByb2R1Y3RFZGl0RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBzdWJtaXRFdmVudCA9ICQuRXZlbnQoJ3N1Ym1pdCcsIHsgZWRpdFByb2R1Y3RJbkNhcnQ6IHRydWUgfSk7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcblxuICAgICAgICB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlci5maW5kKCdpbnB1dCwgYnV0dG9uJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRmb3JtLnRyaWdnZXIoc3VibWl0RXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kTW9kYWxEZXN0cm95KCkge1xuICAgICAgICAvLyBkZXN0cm95IHRoZSBpbWFnZSBnYWxsZXJ5IG1vZGFsIHdoZW4gcXVpY2stdmlldyBtb2RhbCBpcyBjbG9zZWRcbiAgICAgICAgLy8gdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgICAgICB0aGlzLiRzY29wZS5jbG9zZXN0KCcubW9kYWwnKS5vbmUoTW9kYWxFdmVudHMuY2xvc2VkLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbWFnZUdhbGxlcnlNb2RhbC5kZXN0cm95TW9kYWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdE9wdGlvblN0ZXBwZXIoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLXN0ZXBwZXJdJykuZWFjaCgoX2ksIGZvcm1GaWVsZEVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZm9ybUZpZWxkID0gJChmb3JtRmllbGRFbCk7XG4gICAgICAgICAgICBjb25zdCAkZGVjID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJkZWNcIl0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbmMgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImluY1wiXScpO1xuICAgICAgICAgICAgY29uc3QgJGNoZWNrID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJjaGVja1wiXScpO1xuXG4gICAgICAgICAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5hZGRDbGFzcygnX2NoZWNraW5nJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkcmFkaW9zID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbzp2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkZmlyc3QgPSAkcmFkaW9zLmZpcnN0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gJHJhZGlvcy5pbmRleCgkY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBpID09PSAwKTtcbiAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgPT09ICRyYWRpb3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5hZGRDbGFzcygnX2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRmaXJzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykucmVtb3ZlQ2xhc3MoJ19jaGVja2luZycpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW5pdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSAoaW5jKSA9PiB7XG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLmFkZENsYXNzKCdfY2hlY2tpbmcnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOnZpc2libGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICRyYWRpb3MuZmlsdGVyKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRmaXJzdCA9ICRyYWRpb3MuZmlyc3QoKTtcblxuICAgICAgICAgICAgICAgIGlmICgkY2hlY2tlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvdW5kIGNoZWNrZWQgcmFkaW9cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRyYWRpb3MuaW5kZXgoJGNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIG5leHQgcmFkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgJHJhZGlvcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5lcShpICsgMSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgKyAxID09PSAkcmFkaW9zLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIHByZXZpb3VzIHJhZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLmVxKGkgLSAxKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGkgLSAxID09PSAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkY2hlY2suYWRkQ2xhc3MoJ19jaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBubyBjaGVja2VkIHJhZGlvLCBhbmQgZm91bmQgdGhlIGZpcnN0IHJhZGlvXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmMgJiYgJGZpcnN0LmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKyBhbmQgZmlyc3Qgb3B0aW9uIGlzICdub25lJywgaWdub3JlIHRoZSBub25lIG9wdGlvbiwgc2VsZWN0IHRoZSBmaXJzdCB2YWx1ZWQgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLm5vdCgkZmlyc3QpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlLCBzZWxlY3QgdGhlIGZpcnN0IHJhZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAkZmlyc3QucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsICRyYWRpb3MubGVuZ3RoID09PSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkY2hlY2suYWRkQ2xhc3MoJ19jaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNoZWNrZWQgcmFkaW8gaXMgJ25vbmUnIHRoZW4gdW5jaGVjayB0aGUgY2hlY2sgYnV0dG9uXG4gICAgICAgICAgICAgICAgaWYgKCRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86Y2hlY2tlZCcpLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAkY2hlY2sucmVtb3ZlQ2xhc3MoJ19jaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLnJlbW92ZUNsYXNzKCdfY2hlY2tpbmcnKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICRkZWMub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkaW5jLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdCh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkY2hlY2sub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKCRjaGVjay5oYXNDbGFzcygnX2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bmNoZWNrIHRoZSBjaGVja2VkIHJhZGlvIGFuZCBzZWxlY3QgdGhlICdub25lJyByYWRpb1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdW5jaGVjayA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRub25lID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJG5vbmUubGVuZ3RoID4gMCkgJG5vbmUudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCR1bmNoZWNrLmxlbmd0aCkgJHVuY2hlY2sudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5yZW1vdmVDbGFzcygnX2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3QodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN5bmMgcHJvZHVjdCBxdWFudGl0eSB3aXRoIHF0eSBvZiB0aGUgY29ycmVzcG9uZGluZyBwcm9kdWN0IGNhcmRcbiAgICAgKi9cbiAgICBzeW5jUHJvZHVjdENhcmRRdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RRdWFudGl0eSkgcmV0dXJuOyAvLyBzdG9wIGlmIGVkaXQgcHJvZHVjdCBpbiBjYXJ0XG5cbiAgICAgICAgY29uc3QgY2FyZFF0eSA9ICQoYFtkYXRhLWNhcmQtcXVhbnRpdHktY2hhbmdlXSBpbnB1dFtuYW1lPVwicXR5XyR7dGhpcy5wcm9kdWN0SWR9XCJdYCkudmFsKCk7XG4gICAgICAgIGlmICghY2FyZFF0eSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0ICRxdHkgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGlucHV0W25hbWU9XCJxdHlbXVwiXScpO1xuICAgICAgICBjb25zdCBxdHkgPSAkcXR5LnZhbCgpO1xuICAgICAgICBpZiAoJHF0eS5sZW5ndGggPiAwICYmIHF0eSAhPT0gY2FyZFF0eSkge1xuICAgICAgICAgICAgJHF0eS52YWwoY2FyZFF0eSkudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0U2FsZUNvdW50ZG93bigpIHtcbiAgICAgICAgY29uc3QgeyB0eHRTYWxlQ291bnRkb3duSlNPTiB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXRlXScpO1xuICAgICAgICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAkZWwuZGF0YSgnc2FsZUNvdW50ZG93bkxhYmVsJykgfSk7XG5cbiAgICAgICAgU2FsZUNvdW50ZG93bi5jb25maWd1cmUoeyB0eHRTYWxlQ291bnRkb3duSlNPTiB9KTtcbiAgICAgICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KGRhdGEsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlVmlldyhkYXRhLCAuLi5hcmdzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVNhbGVQZXJjZW50KGRhdGEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNoaXBwaW5nQ291bnRkb3duKGRhdGEpO1xuXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZU1vZGlmaWVyc01vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgIWRhdGE/LnB1cmNoYXNhYmxlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RpZmllcnNWaWV3KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMuc2xpY2UoLTEpWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub25lU2FsZXMgPSB0aGlzLmN1c3RvbUZpZWxkTm9uZVNhbGVzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvblByaWNlcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcywgZm9ybURhdGEsIG5vbmVTYWxlcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzU3VidG90YWwoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2FsZVBlcmNlbnQoZGF0YSkge1xuICAgICAgICBjb25zdCAkZGl2ID0gdGhpcy4kc2NvcGUuZmluZCgnLnByaWNlLXNlY3Rpb24tLXNhbGVQZXJjZW50Jyk7XG4gICAgICAgIGNvbnN0ICRzcGFuID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYWxlLXBlcmNlbnRdJyk7XG4gICAgICAgIGxldCBzYWxlUGVyY2VudCA9IDA7XG5cbiAgICAgICAgaWYgKGRhdGE/LnByaWNlPy53aXRob3V0X3RheD8udmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhPy5wcmljZT8ucnJwX3dpdGhvdXRfdGF4Py52YWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ycnBfd2l0aG91dF90YXgudmFsdWUpICogMTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJpY2U/Lm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4Py52YWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC52YWx1ZSkgKiAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy53aXRoX3RheD8udmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhPy5wcmljZT8ucnJwX3dpdGhfdGF4Py52YWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ycnBfd2l0aF90YXgudmFsdWUpICogMTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJpY2U/Lm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Py52YWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZSkgKiAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhbGVQZXJjZW50ID4gMCkge1xuICAgICAgICAgICAgJHNwYW4udGV4dChgLSR7c2FsZVBlcmNlbnR9JWApO1xuICAgICAgICAgICAgJGRpdi5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc3Bhbi50ZXh0KCcnKTtcbiAgICAgICAgICAgICRkaXYuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2hpcHBpbmdDb3VudGRvd24oZGF0YSkge1xuICAgICAgICBjb25zdCAkc2hpcHBpbmdDb3VudGRvd24gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wYXBhdGhlbWVzLXNoaXBwaW5nLWNvdW50ZG93bl0nKTtcblxuICAgICAgICBpZiAoJHNoaXBwaW5nQ291bnRkb3duLmlzKCc6aGlkZGVuJykgJiYgZGF0YT8ucHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgICRzaGlwcGluZ0NvdW50ZG93bi5jc3MoJ3N0eWxlJywgJ2ZsZXgnKTtcbiAgICAgICAgfSBlbHNlIGlmICgkc2hpcHBpbmdDb3VudGRvd24uaXMoJzp2aXNpYmxlJykgJiYgIWRhdGE/LnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICAkc2hpcHBpbmdDb3VudGRvd24uaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ2FydENvbnRlbnQoLi4uYXJncykge1xuICAgICAgICAvLyBjbG9zZSBtb2RpZmllcnMgbW9kYWwgYWZ0ZXIgYWRkZWQgcHJvZHVjdCB0byBjYXJ0XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZU1vZGlmaWVyc01vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kaWZpZXJzTW9kYWwoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRwcmVNb2RhbEZvY3VzZWRFbCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51cGRhdGVDYXJ0Q29udGVudCguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlLCAuLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLnNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UsIC4uLmFyZ3MpO1xuXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEltZyA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1pbWddJyk7XG4gICAgICAgIGNvbnN0IHsgbWFpbkltYWdlVXJsLCB6b29tSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCB9ID0gdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlO1xuXG4gICAgICAgIGlmIChtYWluSW1hZ2VVcmwgJiYgbWFpbkltYWdlVXJsICE9PSAkbW9kaWZpZXJzTW9kYWxJbWcuYXR0cignc3JjJykpIHtcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEltZ1xuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScsIHpvb21JbWFnZVVybCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBtYWluIGltYWdlIGluIHF1aWNrLXZpZXcgb24gbW9iaWxlXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoX2ksIGVsKSA9PiAkKGVsKS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCBwcmljZSB3aXRoIGN1cnJlbmN5IHN5bWJvbCBhbmQgZGVjaW1hbCBwbGFjZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGx1c1N5bWJvbCB3aGV0aGVyIHRvIHNob3cgcGx1cyBzeW1ib2wgZm9yIHBvc2l0aXZlIHZhbHVlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBmb3JtYXRQcmljZSh2YWx1ZSwgcGx1c1N5bWJvbCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBjYWNoZWRTZXR0aW5ncyA/IHtcbiAgICAgICAgICAgIGN1cnJlbmN5X3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LnN5bWJvbCxcbiAgICAgICAgICAgIGN1cnJlbmN5X2xvY2F0aW9uOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LnN5bWJvbFBsYWNlbWVudCxcbiAgICAgICAgICAgIGRlY2ltYWxfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuZGVjaW1hbFRva2VuLFxuICAgICAgICAgICAgZGVjaW1hbF9wbGFjZXM6IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuZGVjaW1hbFBsYWNlcyxcbiAgICAgICAgICAgIHRob3VzYW5kc190b2tlbjogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS50aG91c2FuZHNUb2tlbixcbiAgICAgICAgfSA6IHt9O1xuXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGN1cnJlbmN5Rm9ybWF0KC12YWx1ZSwgZGlzcGxheSk7XG4gICAgICAgICAgICByZXR1cm4gcGx1c1N5bWJvbCA/IGAtJHtmb3JtYXR0ZWR9YCA6IGZvcm1hdHRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGN1cnJlbmN5Rm9ybWF0KHZhbHVlLCBkaXNwbGF5KTtcbiAgICAgICAgcmV0dXJuIHBsdXNTeW1ib2wgPyBgKyR7Zm9ybWF0dGVkfWAgOiBmb3JtYXR0ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBvcHRpb24gdmFsdWUgYnkgb3B0aW9uIG5hbWUgYW5kIHZhbHVlIG5hbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25OYW1lIG9wdGlvbiBkaXNwbGF5IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVOYW1lIHZhbHVlIGxhYmVsXG4gICAgICogQHJldHVybnMge1tudW1iZXIsIG51bWJlcl19IG9wdGlvbklkLCB2YWx1ZUlkXG4gICAgICovXG4gICAgZmluZE9wdGlvblZhbHVlKG9wdGlvbk5hbWUsIHZhbHVlTmFtZSkge1xuICAgICAgICBjb25zdCBoaWRlSWZPcHRpb24gPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgZGlzcGxheV9uYW1lIH0pID0+IGRpc3BsYXlfbmFtZS5yZXBsYWNlKCcvOjsvZycsICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBoaWRlSWZPcHRpb24/LnZhbHVlcz8uZmluZCgoeyBsYWJlbCB9KSA9PiBsYWJlbC5yZXBsYWNlKCcvOjsvZycsICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudG9Mb3dlckNhc2UoKSA9PT0gdmFsdWVOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBjb25zdCBvcHRpb25JZCA9IGhpZGVJZk9wdGlvbj8uaWQ7XG4gICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZT8uaWQ7XG4gICAgICAgIHJldHVybiBbb3B0aW9uSWQsIHZhbHVlSWRdO1xuICAgIH1cblxuICAgIGNyZWF0ZU1vZGlmaWVyc01vZGFsKCkge1xuICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW5dJykuYXR0cignZGF0YS16b29tLWltYWdlJyk7XG4gICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJykuYXR0cignc3JjJyk7XG4gICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJykuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICBjb25zdCAkYXR0cmlidXRlTWVzc2FnZVdyYXBwZXIgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LWF0dHJpYnV0ZXMtbWVzc2FnZV0nKTtcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydFdyYXBwZXIgPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1hZGQtdG8tY2FydC13cmFwcGVyXScpO1xuICAgICAgICBjb25zdCAkY2hvb3NlT3B0aW9uc0J0biA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLm1vZGlmaWVyc01vZGFsVGVtcGxhdGUsIHtcbiAgICAgICAgICAgIHR4dENvbnRpbnVlOiB0aGlzLmNvbnRleHQudHh0Q29udGludWUsXG4gICAgICAgICAgICBwcm9kdWN0VGl0bGU6IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtdGl0bGVdJykuaHRtbCgpLFxuICAgICAgICAgICAgbWFpbkltYWdlVXJsOiB0aGlzLmltYWdlR2FsbGVyeS5jdXJyZW50SW1hZ2UubWFpbkltYWdlVXJsIHx8IG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCB8fCB6b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VTcmNzZXQgfHwgbWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICB9LCBudWxsLCBbJzwlJywgJyU+J10pKS5hcHBlbmRUbygkcHJvZHVjdE9wdGlvbnNFbCk7XG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENvbXBsZXRlID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZV0nKTtcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ2xvc2UgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNsb3NlXScpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGludWVdJyk7XG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEJhY2sgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2tdJyk7XG5cbiAgICAgICAgLy8gbW92ZSBtb2RpZmllciBvcHRpb25zIHRvIHRoZSBtb2RhbFxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1zdGF0ZT1cIm1vZGlmaWVyXCJdJykuYXBwZW5kVG8oJG1vZGlmaWVyc01vZGFsT3B0aW9ucyk7XG5cbiAgICAgICAgLy8gbW92ZSBhZGQgdG8gY2FydCAmIHF0eSBib3ggdG8gdGhlIG1vZGFsXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENvbXBsZXRlLmFwcGVuZCgkYWRkVG9DYXJ0V3JhcHBlcik7XG5cbiAgICAgICAgLy8gY2xvbmUgcHVyY2hhc2FibGUgbWVzc2FnZVxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5maW5kKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpLmNsb25lKClcbiAgICAgICAgICAgIC5hcHBlbmRUbygkYXR0cmlidXRlTWVzc2FnZVdyYXBwZXIpO1xuXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENsb3NlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kaWZpZXJzTW9kYWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQmFjay5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5nb0JhY2tTdGVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENvbnRpbnVlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgYW5kIHJlcG9ydCBpbnZhbGlkIGlucHV0cyBpZiBhbnlcbiAgICAgICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXSB8fCBbXTtcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRJbnB1dHMgPSBzaG93T3B0aW9uSWRzLnJlZHVjZSgoX2ludmFsaWRJbnB1dHMsIG9wdGlvbklkKSA9PiAoW1xuICAgICAgICAgICAgICAgIC4uLl9pbnZhbGlkSW5wdXRzLFxuICAgICAgICAgICAgICAgIC4uLiRtb2RpZmllcnNNb2RhbE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW2RheV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVttb250aF1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVt5ZWFyXVwiXWApXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVsID0+ICFlbC5jaGVja1ZhbGlkaXR5KCkpLFxuICAgICAgICAgICAgXSksIFtdKTtcblxuICAgICAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnZhbGlkSW5wdXRzWzBdLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGF1dG8gc2VsZWN0IHRoZSAnbm9uZScgb3B0aW9uIGlmIG5vIHJhZGlvIG9wdGlvbiBvciBubyBwcm9kdWN0IHBpY2sgbGlzdCBvcHRpb24gaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgIHNob3dPcHRpb25JZHMuZm9yRWFjaChvcHRpb25JZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dXCJdYCk7XG4gICAgICAgICAgICAgICAgaWYgKCRyYWRpb3MubGVuZ3RoID4gMCAmJiAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gYWZ0ZXIgY2xpY2tpbmcgY29udGludWUgYnV0dG9uLCB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IGF1dG9tYXRpY2FsbHlcbiAgICAgICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RpZmllcnNWaWV3KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjaG9vc2VPcHRpb25zQnRuLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHJlcXVpcmUgc2VsZWN0aW5nIHZhcmlhbnQgb3B0aW9ucyBiZWZvcmUgb3BlbmluZyB0aGUgbW9kYWxcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlVmFyaWFudE9wdGlvbnMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1vZGlmaWVyc1ZpZXcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RpZmllcnNNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuTW9kaWZpZXJzTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5hZGRDbGFzcygnaXMtb3BlbicpXG4gICAgICAgICAgICAuYmVmb3JlKHRoaXMubW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kaWZpZXJzTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3ZlcmxheV0nKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpbml0TW9kaWZpZXJzVmlldygpIHtcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xuXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxuICAgICAgICAgICAgLm5vdCgnW3R5cGU9XCJjaGVja2JveFwiXSwgW3R5cGU9XCJyYWRpb1wiXSwgW3R5cGU9XCJmaWxlXCJdJylcbiAgICAgICAgICAgIC5maWx0ZXIoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnZhbCgnJyk7XG5cbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpXG4gICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXG4gICAgICAgIC8vIGZsYWcgYW55IGlucHV0L3NlbGVjdCBpcyBub3Qgc2hvd24geWV0IHNvIHRoYXQgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpcyBzaG93blxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnJlbW92ZUF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcblxuICAgICAgICAvLyByZXNldCBtb2RhbCB0byB1cGRhdGUgdGhpcyB2aWV3IGF1dG9tYXRpY2FsbHkgd2hlbiBvcHRpb24gaXMgc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnRhaW5zIGFsbCBvcHRpb24gaWRzIHRoYXQgYXJlIHNob3duIGluIGVhY2ggc3RlcFxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW11bXX1cbiAgICAgICAgICovXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzaG93biBvcHRpb24gaWRzIGluIGFsbCBzdGVwc1xuICAgICAgICB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vbi1zYWxlIHByaWNlcyBmb3Igb3B0aW9uIHZhbHVlcy5cbiAgICAgICAgICogUHVsbGluZyBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWAuXG4gICAgICAgICAqIFBvcHVsYXRlZCBpbiBgdXBkYXRlTW9kaWZpZXJzVmlldygpYC5cbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfSB9fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZE5vbmVTYWxlcyA9IHt9O1xuXG4gICAgICAgIC8vIHVwZGF0ZSBtb2RpZmllcnMgbW9kYWwgYXNhcCBzbyB0aGF0IG5vdCBhbGwgb3B0aW9ucyBhcmUgZGlzcGxheWVkXG4gICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGw6IHRydWUgfSk7XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWwudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGwgPSBmYWxzZSB9ID0ge30pIHtcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQmFjayA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1iYWNrXScpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1bW1hcnkgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtc3VtbWFyeV0nKS5lbXB0eSgpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxUaXRsZSA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC10aXRsZV0nKS5lbXB0eSgpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxGb290ZXIgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyXScpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250aW51ZV0nKS5oaWRlKCk7XG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydFdyYXBwZXIgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1hZGQtdG8tY2FydC13cmFwcGVyXScpLmhpZGUoKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xuXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gZm9ybURhdGE6ICcsIEFycmF5LmZyb20oZm9ybURhdGEuZW50cmllcygpKSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1cnJlbnQgb3B0aW9uIGlkIHRoYXQgYXBwZWFycyBhbG9uZSB3aXRob3V0IGFueSBncm91cC5cbiAgICAgICAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgY3VycmVudE9wdGlvbklkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50IGdyb3VwIG5hbWUgdGhhdCB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8uXG4gICAgICAgICAqIEdyb3VwIG5hbWUgdGhhdCBhcHBlYXJzIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH1cbiAgICAgICAgICovXG4gICAgICAgIGxldCBjdXJyZW50R3JvdXBOYW1lO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPcHRpb24gaWRzIG9mIG9wdGlvbiBuYW1lcyBhcHBlYXIgaW4gdGhlIHZhbHVlIG9mIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgIEN1c3RvbSBmaWVsZDogYF9fQGdyb3VwIFNlbGVjdCBhIHByZXNjcmlwdGlvbiB0eXBlYCA9IGBwcmVzY3JpcHRpb24gdHlwZWBcbiAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9wdGlvbiBpZHMgc2hvdWxkIGJlIGhpZGRlblxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW119XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBoaWRlT3B0aW9uSWRzID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7b3B0aW9uSWQ6IG51bWJlciwgdmFsdWVJZDogbnVtYmVyfT59XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBoaWRlT3B0aW9uVmFsdWVzID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvb2x0aXBzIGZvciBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzIGV4dHJhY3RlZCBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQHRvb2x0aXAgbmFtZVs6dmFsdWVdID0gdG9vbHRpcGBcbiAgICAgICAgICogQHR5cGUge09iamVjdDxudW1iZXIsIHsgdG9vbHRpcDogc3RyaW5nLCB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9PlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdG9vbHRpcHMgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVG9vbHRpcCBoZWFkaW5ncyBmb3Igb3B0aW9uIHZhbHVlcyBleHRyYWN0ZWQgZnJvbSBjdXN0b20gZmllbGRzIGBfX0B0b29sdGlwX2hlYWRpbmcgbmFtZTp2YWx1ZSA9IHRvb2x0aXAgaGVhZGluZ2BcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9fVxuICAgICAgICAgKiBAZXhhbXBsZSB7IDI6IHsgMTIzOiAnVG9vbHRpcCBIZWFkaW5nJyB9IH1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHRvb2x0aXBIZWFkaW5ncyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOb24tc2FsZSBwcmljZXMgZm9yIG9wdGlvbiB2YWx1ZXMuXG4gICAgICAgICAqIENhbiBiZSBvdmVycmlkZGVuIGJ5IGN1c3RvbSBmaWVsZHMgYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWBcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfSB9fVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgbm9uZVNhbGVzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9wdGlvbiByZW5hbWVzIGV4dHJhY3RlZCBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lYFxuICAgICAgICAgKiBAdHlwZSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHN0cmluZyB9fVxuICAgICAgICAgKiBAZXhhbXBsZSB7IDEyMzogJ05ldyBOYW1lJywgNDU2OiAnQW5vdGhlciBOYW1lJyB9XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBvcHRpb25SZW5hbWVzID0ge307XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgc3RhdGUgfSkgPT4gc3RhdGUgPT09ICdtb2RpZmllcicpLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJyVjUHJvZHVjdERldGFpbHMgLSBvcHRpb246ICcsICdjb2xvcjogY3lhbicsIG9wdGlvbi5kaXNwbGF5X25hbWUpO1xuXG4gICAgICAgICAgICBsZXQgaGlkZU9wdGlvbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpcnN0IGdyb3VwIG5hbWUgdGhhdCB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8uXG4gICAgICAgICAgICAgKiBHcm91cCBuYW1lIHRoYXQgYXBwZWFycyBjdXN0b20gZmllbGQgYF9fQGdyb3VwIChncm91cCBuYW1lKWBcbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsZXQgZ3JvdXBOYW1lO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE9wdGlvbiBpZHMgb2Ygb3B0aW9uIG5hbWVzIGFwcGVhciBpbiB0aGUgdmFsdWUgb2YgY3VzdG9tIGZpZWxkIGBfX0Bncm91cGAuXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgICAgICogICBDdXN0b20gZmllbGQ6IGBfX0Bncm91cCBTZWxlY3QgYSBwcmVzY3JpcHRpb24gdHlwZWAgPSBgcHJlc2NyaXB0aW9uIHR5cGVgXG4gICAgICAgICAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPnx1bmRlZmluZWR9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGxldCBncm91cE9wdGlvbklkcztcblxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgcmFkaW8gdHlwZSBhbmQgaGFzICdub25lJyB2YWx1ZSBjaGVja2VkXG4gICAgICAgICAgICBjb25zdCBpc05vbmVSYWRpb0NoZWNrZWQgPSAkZm9ybS5maW5kKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdW3ZhbHVlPVwiXCJdYCkucHJvcCgnY2hlY2tlZCcpO1xuXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBmaWxlIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cbiAgICAgICAgICAgIGNvbnN0ICRmaWxlID0gJGZvcm0uZmluZChgaW5wdXRbdHlwZT1cImZpbGVcIl1bbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdYCk7XG4gICAgICAgICAgICBjb25zdCBpc0ZpbGVTaG93biA9ICRmaWxlLmxlbmd0aCA+IDAgJiYgJGZpbGUuYXR0cignZGF0YS1maWVsZC1zaG93bicpO1xuXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCBkYXRlIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cbiAgICAgICAgICAgIGNvbnN0ICRkYXRlID0gJGZvcm0uZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVtkYXldXCJdLCBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dW21vbnRoXVwiXSwgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVt5ZWFyXVwiXWApO1xuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbERhdGVTaG93biA9ICRkYXRlLmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkZGF0ZS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XG5cbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIG9wdGlvbmFsIHNlbGVjdCB0eXBlIGFuZCBhbHJlYWR5IHNob3duIGFmdGVyIG1vZGFsIHNob3duXG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGZvcm0uZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXWApO1xuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbFNlbGVjdFNob3duID0gJHNlbGVjdC5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJHNlbGVjdC5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XG5cbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIG9wdGlvbmFsIHRleHQgLyBtdWx0aWxpbmUgLyBudW1iZXIgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxuICAgICAgICAgICAgY29uc3QgJHRleHQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgdGV4dGFyZWEnKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IGlzT3B0aW9uYWxUZXh0U2hvd24gPSAkdGV4dC5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJHRleHQuYXR0cignZGF0YS1maWVsZC1zaG93bicpO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCk7XG5cbiAgICAgICAgICAgIGlmIChmb3JtVmFsdWUgJiYgIShmb3JtVmFsdWUgaW5zdGFuY2VvZiBGaWxlKVxuICAgICAgICAgICAgICAgIHx8IGlzTm9uZVJhZGlvQ2hlY2tlZCB8fCBpc0ZpbGVTaG93biB8fCBpc09wdGlvbmFsRGF0ZVNob3duIHx8IGlzT3B0aW9uYWxTZWxlY3RTaG93biB8fCBpc09wdGlvbmFsVGV4dFNob3duXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVtkYXldYClcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW21vbnRoXWApXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVt5ZWFyXWApKSB7XG4gICAgICAgICAgICAgICAgLy8gaGlkZSBvcHRpb24gaWYgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIGhpZGVPcHRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvbjogJywgaGlkZU9wdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaGlkZU9wdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tRmllbGRzLmZvckVhY2goY3VzdG9tRmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0BoaWRlX2lmICguKilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlkZUlmTWF0Y2ggPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYoeyBjdXN0b21GaWVsZCwgZm9ybURhdGEsIG9wdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpZGVJZk1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gaGlkZUlmTWF0Y2guaGlkZU9wdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb25WYWx1ZXMucHVzaCguLi5oaWRlSWZNYXRjaC5oaWRlT3B0aW9uVmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JvdXBOYW1lICYmICFoaWRlT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0Bncm91cCAoLiopXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoR3JvdXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cE5hbWUgPSBncm91cE1hdGNoLmdyb3VwTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cE9wdGlvbklkcyA9IGdyb3VwTWF0Y2guZ3JvdXBPcHRpb25JZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQHRvb2x0aXAgbmFtZVs6dmFsdWVdID0gdG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcHNbb3B0aW9uLmlkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBzW29wdGlvbi5pZF0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdG9vbHRpcE1hdGNoLnRvb2x0aXAgfHwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udG9vbHRpcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwczogT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udmFsdWVUb29sdGlwcywgdG9vbHRpcE1hdGNoLnZhbHVlVG9vbHRpcHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0B0b29sdGlwX2hlYWRpbmcgbmFtZTp2YWx1ZSA9IHRvb2x0aXAgaGVhZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwSGVhZGluZ3MgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcEhlYWRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSwgdmFsdWVUb29sdGlwSGVhZGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoUmVuYW1lKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uUmVuYW1lc1tvcHRpb24uaWRdID0gbmV3TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZU5vblNhbGVzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoTm9uU2FsZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG5vbmVTYWxlcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb24uaWRdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5vbmVTYWxlc1tvcHRpb24uaWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZU5vblNhbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA9PT0gMCAmJiAhY3VycmVudE9wdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIHZpc2libGUgb3B0aW9uIGJlZm9yZVxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb24gZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE5hbWUgPSBncm91cE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBPcHRpb25JZHMgPSBncm91cE9wdGlvbklkcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwTmFtZTogJHtjdXJyZW50R3JvdXBOYW1lfSwgY3VycmVudEdyb3VwT3B0aW9uSWRzOiAke2N1cnJlbnRHcm91cE9wdGlvbklkc31gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YW5kLWFsb25lIG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wdGlvbklkID0gb3B0aW9uLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXJyZW50T3B0aW9uSWQ6ICR7Y3VycmVudE9wdGlvbklkfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlkZU9wdGlvbikge1xuICAgICAgICAgICAgICAgIGhpZGVPcHRpb25JZHMucHVzaChvcHRpb24uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA+IDAgJiYgaGlkZU9wdGlvbklkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgaGlkZGVuIG9wdGlvbnMgZnJvbSB0aGUgY3VycmVudCBncm91cFxuICAgICAgICAgICAgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gY3VycmVudEdyb3VwT3B0aW9uSWRzLmZpbHRlcihpZCA9PiAhaGlkZU9wdGlvbklkcy5pbmNsdWRlcyhpZCkpO1xuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICR7Y3VycmVudEdyb3VwT3B0aW9uSWRzfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50T3B0aW9uSWQ6ICcsIGN1cnJlbnRPcHRpb25JZCk7XG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwTmFtZTogJywgY3VycmVudEdyb3VwTmFtZSk7XG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwT3B0aW9uSWRzOiAnLCBjdXJyZW50R3JvdXBPcHRpb25JZHMpO1xuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb25WYWx1ZXM6ICcsIGhpZGVPcHRpb25WYWx1ZXMpO1xuXG4gICAgICAgIC8vIFN0b3JlIG5vbi1zYWxlIHByaWNlcyBvZiBvcHRpb24gdmFsdWVzXG4gICAgICAgIC8vIHRvIHVzZSB3aGVuIHVwZGF0aW5nIG9wdGlvbiBwcmljZXMgb25seSB3aXRob3V0IHVwZGF0ZSB0aGUgd2hvbGUgbW9kaWZpZXJzIHZpZXdcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmN1c3RvbUZpZWxkTm9uZVNhbGVzLCBub25lU2FsZXMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJRHMgb2Ygb3B0aW9ucyB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgYXQgdGhlIGN1cnJlbnQgc3RlcFxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cbiAgICAgICAgICovXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA+IDAgPyBjdXJyZW50R3JvdXBPcHRpb25JZHNcbiAgICAgICAgICAgIDogKGN1cnJlbnRPcHRpb25JZCA/IFtjdXJyZW50T3B0aW9uSWRdIDogW10pO1xuXG4gICAgICAgIC8vIHN0b3JlIHRoZSBzaG93biBvcHRpb24gaWRzIG9mIHRoZSBjdXJyZW50IHN0ZXAgdG8gdGhlIHN0YWNrXG4gICAgICAgIC8vIGlmIG5vdCB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXMgc3RlcC5cbiAgICAgICAgLy8gdGhpcyBpcyB1c2VkIHRvIG5hdmlnYXRlIGJhY2sgdG8gdGhlIHByZXZpb3VzIHN0ZXAuXG4gICAgICAgIGlmICh0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgfHwgIWFyZUFycmF5c0VxdWFsVW5vcmRlcmVkKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMuc2xpY2UoLTEpWzBdLCBzaG93T3B0aW9uSWRzKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5wdXNoKHNob3dPcHRpb25JZHMpO1xuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBzdGFja2VkU2hvd09wdGlvbklkczogJywgdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzaG93IC8gaGlkZSBiYWNrIGJ1dHRvblxuICAgICAgICBpZiAodGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxCYWNrLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2suaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2hvdyBmb290ZXIsIGFuZCBoaWRlIGl0IGlmIG5vIG1vcmUgb3B0aW9uIHNob3duXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEZvb3Rlci5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxGb290ZXIuaGlkZSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBVcGRhdGUgbW9kYWwgdGl0bGUgZnJvbSB0aGUgY3VzdG9tIGZpZWxkIGBfX0Bncm91cCAoZ3JvdXAgbmFtZSlgIG9yIG9wdGlvbiBkaXNwbGF5IG5hbWVcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE5hbWUpIHtcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmh0bWwoY3VycmVudEdyb3VwTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gb3B0aW9uUmVuYW1lc1tzaG93T3B0aW9uSWRzWzBdXSB8fCB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHNob3dPcHRpb25JZHNbMF0pPy5kaXNwbGF5X25hbWU7XG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS50ZXh0KHRpdGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhpZGUgdGhlIG9wdGlvbiBuYW1lIHdoZW4gaGVyZSBpcyBvbmx5IDEgb3B0aW9uIHNob3duIGluIHRoZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtzaG93T3B0aW9uSWRzWzBdfVwiXSAuZm9ybS1sYWJlbGApLmZpcnN0KCkuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0gLmZvcm0tbGFiZWwnKS5maXJzdCgpLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc3BsYXkgY3VycmVudCBwcm9kdWN0IG9wdGlvbnNcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0nKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdfc2hvdycpXG4gICAgICAgICAgICAuZmlsdGVyKChfLCBlbCkgPT4gIXNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKCQoZWwpLmRhdGEoJ3Byb2R1Y3QtYXR0cmlidXRlLWlkJykpKSlcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnX3Nob3cnKTtcblxuICAgICAgICAvLyBSZW5hbWUgdGhlIHNob3duIG9wdGlvbnMgaWYgbmVlZGVkXG4gICAgICAgIHNob3dPcHRpb25JZHMuZm9yRWFjaChvcHRpb25JZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gb3B0aW9uUmVuYW1lc1tvcHRpb25JZF07XG4gICAgICAgICAgICBpZiAobmV3TmFtZSkge1xuICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXSAuZm9ybS1sYWJlbGApLmZpcnN0KCkuaHRtbChuZXdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2hvdyB0b29sdGlwIGZvciBncm91cFxuICAgICAgICBpZiAoY3VycmVudEdyb3VwTmFtZSkge1xuICAgICAgICAgICAgbGV0IGdyb3VwVG9vbHRpcCA9ICcnO1xuXG4gICAgICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcy5mb3JFYWNoKGN1c3RvbUZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWdyb3VwVG9vbHRpcCkge1xuICAgICAgICAgICAgICAgICAgICBncm91cFRvb2x0aXAgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAoeyBjdXN0b21GaWVsZCwgZ3JvdXBOYW1lOiBjdXJyZW50R3JvdXBOYW1lIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdXBUb29sdGlwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgZ3JvdXBUb29sdGlwKSk7XG4gICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuYXBwZW5kKCR0b29sdGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3cgdG9vbHRpcCBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25Ub29sdGlwcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncywgc2hvd09wdGlvbklkcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyBmb3Igc2hvd24gb3B0aW9ucyBhbmQgZGlzcGxheSBDb250aW51ZSBidXR0b24gaWYgbmVlZGVkLlxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRGVmYXVsdE9wdGlvblZhbHVlcyhzaG93T3B0aW9uSWRzLCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwbGF5IHByaWNlcyBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xuICAgICAgICBpZiAoIWlnbm9yZUFQSUNhbGwpIHtcbiAgICAgICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyBzdW1tYXJ5IGJ1dCBwcmVsb2FkZXIgZm9yIHByaWNlc1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N1bW1hcnkoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSwgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsICRtb2RpZmllcnNNb2RhbFRpdGxlLCAkYWRkVG9DYXJ0V3JhcHBlciwgZm9ybURhdGEsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyBzdW1tYXJ5IGNvbnRlbnQgaWYgbm8gb3B0aW9uIHZpc2libGUgb24gdGhlIGN1cnJlbnQgc3RlcFxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1N1bW1hcnkoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSwgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsICRtb2RpZmllcnNNb2RhbFRpdGxlLCAkYWRkVG9DYXJ0V3JhcHBlciwgZm9ybURhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcmVxdWlyZWQgdmFyaWFudCBvcHRpb25zIGFuZCByZXBvcnQgZXJyb3IgZm9yIHRoZSBmaXJzdCBpbnZhbGlkIG9wdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHZhbGlkYXRlVmFyaWFudE9wdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xuXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBzdGF0ZSB9KSA9PiBzdGF0ZSA9PT0gJ3ZhcmlhbnRfb3B0aW9uJykuZmluZChvcHRpb24gPT4ge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XWApO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBSZXF1aXJlZCBvcHRpb24gXCIke29wdGlvbi5kaXNwbGF5X25hbWV9XCIgaXMgbm90IHNlbGVjdGVkYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gJGZvcm0uZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtpbnZhbGlkLmlkfV1cIl1gKVswXTtcbiAgICAgICAgICAgIGVsLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnb0JhY2tTdGVwKCkge1xuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XG5cbiAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMucG9wKCksIC8vIGN1cnJlbnQgc3RlcCdzIHNob3duIG9wdGlvbiBpZHNcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMucG9wKCksIC8vIHByZXZpb3VzIHN0ZXAncyBzaG93biBvcHRpb24gaWRzXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gcmVzZXQgdmFsdWVzIG9mIHNob3duIG9wdGlvbiBpZHMgaW4gY3VycmVudCBzdGVwICYgcHJldmlvdXMgc3RlcFxuICAgICAgICAvLyB0byBkaXNwbGF5IHByZXZpb3VzIHN0ZXAgYWdhaW4uXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzKSB7XG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0nKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBlbCkgPT4gc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIoJChlbCkuYXR0cignZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSkpO1xuXG4gICAgICAgICAgICAkb3B0aW9uLmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcbiAgICAgICAgICAgICAgICAubm90KCdbdHlwZT1cImNoZWNrYm94XCJdLCBbdHlwZT1cInJhZGlvXCJdLCBbdHlwZT1cImZpbGVcIl0nKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnZhbCgnJyk7XG5cbiAgICAgICAgICAgICRvcHRpb24uZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICRvcHRpb24uZmluZCgnW25hbWVePVwiYXR0cmlidXRlXCJdJykucmVtb3ZlQXR0cignZGF0YS1maWVsZC1zaG93bicpO1xuXG4gICAgICAgICAgICB0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgdXBkYXRlIGRpc3BsYXkgcHJldmlvdXMgb3B0aW9ucyBvbiBtb2RpZmllcnMgbW9kYWxcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGw6IHRydWUgfSk7XG5cbiAgICAgICAgICAgIC8vIHRyaWdnZXIgY2hhbmdlIGV2ZW50IHRvIHVwZGF0ZSBwcmljZXMgJiBkYXRhIGJlbG9uZ3MgdG8gQkNcbiAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiBzaG91bGQgYmUgaGlkZGVuIGJhc2VkIG9uIHRoZSBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcbiAgICAgKiAgIH0sXG4gICAgICogICBmb3JtRGF0YTogRm9ybURhdGEsXG4gICAgICogICBvcHRpb246IHtcbiAgICAgKiAgICAgaWQ6IE51bWJlcixcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXG4gICAgICogICAgIHZhbHVlczogW3tcbiAgICAgKiAgICAgICBpZDogTnVtYmVyLFxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgICogICAgIH1dXG4gICAgICogICB9XG4gICAgICogfX0gcGFyYW0wXG4gICAgICogQHJldHVybnMge3sgaGlkZU9wdGlvbjogYm9vbGVhbiwgaGlkZU9wdGlvblZhbHVlczogQXJyYXk8e29wdGlvbklkOiBudW1iZXIsIHZhbHVlSWQ6IG51bWJlcn0+IH0gfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgY3VzdG9tRmllbGRNYXRjaEhpZGVJZih7IGN1c3RvbUZpZWxkLCBmb3JtRGF0YSwgb3B0aW9uIH0pIHtcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXN0b21GaWVsZE1hdGNoSGlkZUlmOiBjZl9uYW1lID0gJHtjdXN0b21GaWVsZC5uYW1lfSA7IG9wX25hbWUgPSAke29wdGlvbi5kaXNwbGF5X25hbWV9YCk7XG4gICAgICAgIGxldCBoaWRlT3B0aW9uID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGhpZGVPcHRpb25WYWx1ZXMgPSBbXTtcblxuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQGhpZGVfaWZcXHMrKC4qKSQvaSk7XG4gICAgICAgIGlmICghbSkgcmV0dXJuO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaGlkZUlmT3B0aW9ucyA9IG1bMV0uc3BsaXQoJzsnKS5tYXAoa3YgPT4ga3Yuc3BsaXQoJzonLCAyKSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgICBuYW1lOiBrZXkudHJpbSgpLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUudHJpbSgpIDogdW5kZWZpbmVkLFxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gaGlkZUlmT3B0aW9uczogJHtoaWRlSWZPcHRpb25zLm1hcCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiAodmFsdWUgPyBgJHtuYW1lfTogJHt2YWx1ZX1gIDogbmFtZSkpLmpvaW4oJzsgJyl9YCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfT59XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB0aGVuT3B0aW9ucyA9IGN1c3RvbUZpZWxkLnZhbHVlLnNwbGl0KCc7JykubWFwKGt2ID0+IGt2LnNwbGl0KCc6JywgMikpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgICAgbmFtZToga2V5LnRyaW0oKSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSA/IHZhbHVlLnRyaW0oKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRoZW5PcHRpb25zOiAke3RoZW5PcHRpb25zLm1hcCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiAodmFsdWUgPyBgJHtuYW1lfTogJHt2YWx1ZX1gIDogbmFtZSkpLmpvaW4oJzsgJyl9YCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZsYWcgdG8gY2hlY2sgaWYgb3B0aW9uOnZhbHVlIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgIG1hdGNoZXMgd2l0aCBjdXJyZW50IGZvcm0gZGF0YVxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGxldCBoaWRlSWZNYXRjaCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3B0aW9uOnZhbHVlIGluIGN1c3RvbSBmaWVsZCBgX19AaGlkZV9pZmAgbWF0Y2hlcyB3aXRoIGN1cnJlbnQgZm9ybSBkYXRhXG4gICAgICAgIGhpZGVJZk9wdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbb3B0aW9uSWQsIHZhbHVlSWRdID0gdGhpcy5maW5kT3B0aW9uVmFsdWUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybVZhbHVlID0gTnVtYmVyKGZvcm1EYXRhLmdldEFsbChgYXR0cmlidXRlWyR7b3B0aW9uSWR9XWApLnNsaWNlKC0xKVswXSk7XG5cbiAgICAgICAgICAgIGlmIChmb3JtVmFsdWUgPT09IHZhbHVlSWQpIHtcbiAgICAgICAgICAgICAgICBoaWRlSWZNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVJZk1hdGNoOiAnLCBoaWRlSWZNYXRjaCk7XG5cbiAgICAgICAgaWYgKGhpZGVJZk1hdGNoKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBvcHRpb24gc2hvdWxkIGJlIGhpZGRlbiB3aGVuIG1hdGNoaW5nIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgXG4gICAgICAgICAgICB0aGVuT3B0aW9ucy5mb3JFYWNoKCh7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgY3VzdG9tIGZpZWxkIHZhbHVlIGNvbnRhaW4gb3B0aW9uIG5hbWUgd2l0aG91dCB2YWx1ZSwgdGhlbiBoaWRlIHRoZSB3aG9sZSBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uOiAnLCBoaWRlT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb24udmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIGhpZGUgdGhlIHNwZWNpZmljIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlcy5mb3JFYWNoKCh7IGxhYmVsLCBpZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hpZGVPcHRpb25WYWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbklkOiBvcHRpb24uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvblZhbHVlcy5wdXNoKF9oaWRlT3B0aW9uVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb25WYWx1ZTogJywgX2hpZGVPcHRpb25WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoaWRlT3B0aW9uIHx8IGhpZGVPcHRpb25WYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgaGlkZU9wdGlvbiwgaGlkZU9wdGlvblZhbHVlcyB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBncm91cCBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0Bncm91cGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxuICAgICAqICAgfSxcbiAgICAgKiAgIG9wdGlvbjoge1xuICAgICAqICAgICBpZDogTnVtYmVyLFxuICAgICAqICAgfSxcbiAgICAgKiBAcmV0dXJucyB7eyBncm91cE5hbWU6IHN0cmluZywgZ3JvdXBPcHRpb25JZHM6IEFycmF5PG51bWJlcj4gfSB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBjdXN0b21GaWVsZE1hdGNoR3JvdXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pIHtcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0Bncm91cFxccysoLiopJC9pKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IG1bMV0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBPcHRpb25JZHMgPSBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLm1hcChzID0+IHMudHJpbSgpKSAvLyBvcHRpb24gbmFtZXNcbiAgICAgICAgICAgICAgICAubWFwKG9wdGlvbk5hbWUgPT4gdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGRpc3BsYXlfbmFtZSB9KSA9PiBlcXVhbE9wdGlvblN0cmluZyhkaXNwbGF5X25hbWUsIG9wdGlvbk5hbWUpKT8uaWQpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpZCA9PiBpZCk7XG5cbiAgICAgICAgICAgIGlmIChncm91cE9wdGlvbklkcy5pbmNsdWRlcyhvcHRpb24uaWQpKSB7XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uIGJlbG9uZ3MgdG8gdGhlIGdyb3VwIGluIHRoaXMgY3VzdG9tIGZpZWxkXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBncm91cE5hbWU6ICR7Z3JvdXBOYW1lfSwgZ3JvdXBPcHRpb25JZHM6ICR7Z3JvdXBPcHRpb25JZHN9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZ3JvdXBOYW1lLCBncm91cE9wdGlvbklkcyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiB2YWx1ZSBoYXMgYSB0b29sdGlwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXAgbmFtZVs6dmFsdWVdID0gdG9vbHRpcGBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxuICAgICAqICAgfVxuICAgICAqICAgb3B0aW9uOiB7XG4gICAgICogICAgIGRpc3BsYXlfbmFtZSxcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xuICAgICAqICAgICAgIGxhYmVsXG4gICAgICogICAgIH1dXG4gICAgICogICB9XG4gICAgICogfX0gcGFyYW0wXG4gICAgICogQHJldHVybnMge3sgdG9vbHRpcDogc3RyaW5nIH0gfCB7IHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0gfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pIHtcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwXFxzKyguKikkL2kpO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IG1bMV0uc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gY3VzdG9tRmllbGQudmFsdWU7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIG9wdGlvbiBuYW1lXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyB0b29sdGlwIGZvciBvcHRpb24gbmFtZVxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3Igb3B0aW9uIFwiJHtuYW1lfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHRvb2x0aXAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwcyA9IHt9O1xuXG4gICAgICAgICAgICAvLyB0b29sdGlwIGZvciBvcHRpb24gdmFsdWVcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCgoeyBpZCwgbGFiZWwgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3Igb3B0aW9uIFwiJHtuYW1lfSA6ICR7dmFsdWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcHNbaWRdID0gdG9vbHRpcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWVUb29sdGlwcyB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGdyb3VwIGhhcyBhIHRvb2x0aXAgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AdG9vbHRpcCAoZ3JvdXAgbmFtZSkgPSB0b29sdGlwYFxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxuICAgICAqICAgfSxcbiAgICAgKiAgIGdyb3VwTmFtZTogc3RyaW5nXG4gICAgICogfX0gcGFyYW0wXG4gICAgICogQHJldHVybnMge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBjdXN0b21GaWVsZE1hdGNoVG9vbHRpcEdyb3VwKHsgY3VzdG9tRmllbGQsIGdyb3VwTmFtZSB9KSB7XG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcFxccysoLiopJC9pKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSBjdXN0b21GaWVsZC52YWx1ZTtcblxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggZ3JvdXAgbmFtZVxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhncm91cE5hbWUsIG5hbWUpKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3IgZ3JvdXAgXCIke25hbWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgdG9vbHRpcCBoZWFkaW5nIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nYFxuICAgICAqXG4gICAgICogQHBhcmFtIHt7XG4gICAgICogICBjdXN0b21GaWVsZDoge1xuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICogICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgICogICB9LFxuICAgICAqICAgb3B0aW9uOiB7XG4gICAgICogICAgIGRpc3BsYXlfbmFtZTogc3RyaW5nLFxuICAgICAqICAgICB2YWx1ZXM6IFt7XG4gICAgICogICAgICAgaWQ6IG51bWJlcixcbiAgICAgKiAgICAgICBsYWJlbDogc3RyaW5nLFxuICAgICAqICAgICB9XVxuICAgICAqICAgfVxuICAgICAqIH19IHBhcmFtMFxuICAgICAqIEByZXR1cm5zIHt7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB8IHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBjdXN0b21GaWVsZE1hdGNoVG9vbHRpcEhlYWRpbmcoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pIHtcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwX2hlYWRpbmdcXHMrKC4qKSQvaSk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gbVsxXS5zcGxpdCgnOicsIDIpLm1hcChzID0+IHMudHJpbSgpKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBjdXN0b21GaWVsZC52YWx1ZTtcblxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggb3B0aW9uIG5hbWUgb3Igbm90IHZhbHVlXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIXZhbHVlIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyA9IHt9O1xuXG4gICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgaWQsIGxhYmVsIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcobGFiZWwsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgaGVhZGluZyBmb3Igb3B0aW9uIFwiJHtuYW1lfSA6ICR7dmFsdWV9XCIgPSBcIlwiXCIke2hlYWRpbmd9XCJcIlwiYCk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcEhlYWRpbmdzW2lkXSA9IGhlYWRpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvb2x0aXBIZWFkaW5ncztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gbmFtZSBjb250YWlucyBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZWBcbiAgICAgKiBhbmQgcmV0dXJuIHRoZSBuZXcgbmFtZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbTAuY3VzdG9tRmllbGRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLmN1c3RvbUZpZWxkLm5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLmN1c3RvbUZpZWxkLnZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMC5vcHRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLm9wdGlvbi5kaXNwbGF5X25hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfSBuZXcgb3B0aW9uIG5hbWVcbiAgICAgKi9cbiAgICBjdXN0b21GaWVsZE1hdGNoUmVuYW1lKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AcmVuYW1lXFxzKyguKikkL2kpO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IG1bMV0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IFN0cmluZyhjdXN0b21GaWVsZC52YWx1ZSkudHJpbSgpO1xuXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZVxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHJlbmFtZSBvcHRpb24gXCIke25hbWV9XCIgdG8gXCIke25ld05hbWV9XCJgKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdOYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiB2YWx1ZSBoYXMgYSBub24tc2FsZSBwcmljZSBpbiB0aGUgY3VzdG9tIGZpZWxkXG4gICAgICogYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxuICAgICAqICAgfSxcbiAgICAgKiAgIG9wdGlvbjoge1xuICAgICAqICAgICBkaXNwbGF5X25hbWU6IHN0cmluZyxcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xuICAgICAqICAgICAgIGlkOiBudW1iZXIsXG4gICAgICogICAgICAgbGFiZWw6IHN0cmluZyxcbiAgICAgKiAgICAgfV1cbiAgICAgKiAgIH0sXG4gICAgICogfX0gcGFyYW0wXG4gICAgICogQHJldHVybnMge3sgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9fVxuICAgICAqL1xuICAgIGN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlTm9uU2FsZXMgPSB7fTtcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0Bub25zYWxlXFxzKyguKikkL2kpO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBOdW1iZXIobVsxXS50cmltKCkpO1xuXG4gICAgICAgICAgICAvLyBzcGxpdCBlYWNoIChvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlKSBwYWlyIHNlcGFyYXRlZCBieSBcIjtcIlxuICAgICAgICAgICAgY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5mb3JFYWNoKGt2ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzcGxpdCBvcHRpb24gbmFtZSA6IG9wdGlvbiB2YWx1ZSBpbiBjdXN0b20gZmllbGQgdmFsdWUgc2VwYXJhdGVkIGJ5IFwiOlwiXG4gICAgICAgICAgICAgICAgY29uc3QgW29wdGlvbk5hbWUsIHZhbHVlTGFiZWxdID0ga3Yuc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgb3B0aW9uTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIG5hbWUgaW4gY3VzdG9tIGZpZWxkIG1hdGNoIHdpdGggY3VycmVudCBvcHRpb25cblxuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBvcHRpb24gdmFsdWUgSUQgdGhhdCBtYXRjaGVzIHdpdGggdGhlIHZhbHVlIGxhYmVsIGluIGN1c3RvbSBmaWVsZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gb3B0aW9uLnZhbHVlcy5maW5kKCh7IGxhYmVsIH0pID0+IGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZUxhYmVsKSk/LmlkO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIG5vbi1zYWxlIHByaWNlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG9wdGlvbiB2YWx1ZSBJRFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVOb25TYWxlc1t2YWx1ZUlkXSA9IHByaWNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlTm9uU2FsZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggc3RvcmUgc2V0dGluZ3MgaW5jbHVkaW5nIHRheCBhbmQgYWN0aXZlIGN1cnJlbmN5XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7XG4gICAgICogICB0YXg6IHsgcGRwOiBudW1iZXIgfSxcbiAgICAgKiAgIGN1cnJlbmN5OiB7XG4gICAgICogICAgIGNvZGU6IHN0cmluZyxcbiAgICAgKiAgICAgZGlzcGxheTogeyBkZWNpbWFsUGxhY2VzOiBudW1iZXIsIGRlY2ltYWxUb2tlbjogc3RyaW5nLCBzeW1ib2w6IHN0cmluZywgc3ltYm9sUGxhY2VtZW50OiBzdHJpbmcsIHRob3VzYW5kc1Rva2VuOiBzdHJpbmcgfSxcbiAgICAgKiAgICAgZXhjaGFuZ2VSYXRlOiBudW1iZXIsIG5hbWU6IHN0cmluZyxcbiAgICAgKiAgIH0sXG4gICAgICogICBkZWZhdWx0Q3VycmVuY3k6IHtcbiAgICAgKiAgICAgY29kZTogc3RyaW5nLFxuICAgICAqICAgICBkaXNwbGF5OiB7IGRlY2ltYWxQbGFjZXM6IG51bWJlciwgZGVjaW1hbFRva2VuOiBzdHJpbmcsIHN5bWJvbDogc3RyaW5nLCBzeW1ib2xQbGFjZW1lbnQ6IHN0cmluZywgdGhvdXNhbmRzVG9rZW46IHN0cmluZyB9LFxuICAgICAqICAgICBleGNoYW5nZVJhdGU6IG51bWJlciwgbmFtZTogc3RyaW5nLFxuICAgICAqICAgfSxcbiAgICAgKiB9PlxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoU2V0dGluZ3MoKSB7XG4gICAgICAgIGlmIChjYWNoZWRTZXR0aW5ncykgcmV0dXJuIGNhY2hlZFNldHRpbmdzO1xuXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY29udGV4dC5ncmFwaFFMVG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5IChcbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSFcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWZhdWx0Q3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3koY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkN1cnJlbmN5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeTogY3VycmVuY3koY3VycmVuY3lDb2RlOiAkZGVmYXVsdEN1cnJlbmN5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5DdXJyZW5jeUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBDdXJyZW5jeUZpZWxkcyBvbiBDdXJyZW5jeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sUGxhY2VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2hhbmdlUmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuYWN0aXZlX2N1cnJlbmN5X2NvZGUsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5kZWZhdWx0X2N1cnJlbmN5X2NvZGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcblxuICAgICAgICBjYWNoZWRTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgIC4uLnJlc3AuZGF0YS5zaXRlLnNldHRpbmdzLFxuICAgICAgICAgICAgY3VycmVuY3k6IHJlc3AuZGF0YS5zaXRlLmN1cnJlbmN5LFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXR0aW5ncztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBvcHRpb24gcHJpY2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PHsgaWQ6IG51bWJlciwgdmFsdWVzOiBBcnJheTx7IGlkOiBudW1iZXIgfT4gfT59IHNob3dPcHRpb25zXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTx7XG4gICAgICogICBvcHRpb25JZDogbnVtYmVyfG51bGwsXG4gICAgICogICB2YWx1ZUlkOiBudW1iZXJ8bnVsbCxcbiAgICAgKiAgIHByaWNlc1dpdGhUYXg6IHtcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXG4gICAgICogICAgIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxuICAgICAqICAgfSxcbiAgICAgKiAgIHByaWNlc1dpdGhvdXRUYXg6IHtcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXG4gICAgICogICAgIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxuICAgICAqICAgfSxcbiAgICAgKiAgIGFkanVzdGVkUHJpY2VzV2l0aFRheDoge1xuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcbiAgICAgKiAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG51bWJlcixcbiAgICAgKiAgIH0sXG4gICAgICogICBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg6IHtcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXG4gICAgICogICAgIG5vblNhbGVQcmljZVZhbHVlOiBudW1iZXIsXG4gICAgICogICB9LFxuICAgICAqIH0+Pn1cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaE9wdGlvblByaWNlcyhzaG93T3B0aW9ucywgZm9ybURhdGEpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyA9IFtdO1xuXG4gICAgICAgIGZvcm1EYXRhLmVudHJpZXMoKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG0gPSBrZXkubWF0Y2goL15hdHRyaWJ1dGVcXFsoXFxkKylcXF0kLyk7XG4gICAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVudGl0eUlkID0gTnVtYmVyKG1bMV0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlRW50aXR5SWQgPSBOdW1iZXIodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlRW50aXR5SWQgJiYgIXNob3dPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IG9wdGlvbkVudGl0eUlkKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlSWRzLnB1c2goeyBvcHRpb25FbnRpdHlJZCwgdmFsdWVFbnRpdHlJZCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW1xuICAgICAgICAgICAgLy8gZmV0Y2ggYWxyZWFkeSBzZWxlY3RlZCBvcHRpb25zJyBwcmljZXNcbiAgICAgICAgICAgICgpID0+IHRoaXMuZmV0Y2hPcHRpb25QcmljZShzZWxlY3RlZE9wdGlvblZhbHVlSWRzKSxcbiAgICAgICAgXTtcblxuICAgICAgICBzaG93T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBvcHRpb24udmFsdWVzIHx8IChvcHRpb24udmFsdWUgPyBbeyBpZDogb3B0aW9uLnZhbHVlIH1dIDogW10pO1xuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGZldGNoIGN1cnJlbnQgb3B0aW9uIHZhbHVlJ3MgcHJpY2VzXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCgoKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbnRpdHlJZDogb3B0aW9uLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRW50aXR5SWQ6IHZhbHVlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSkudGhlbihwcm9kdWN0ID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogb3B0aW9uLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVJZDogdmFsdWUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IFtwcmV2LCAuLi5zZWxlY3Rpb25zXSA9IGF3YWl0IGhhbmRsZVByb21pc2VzV2l0aExpbWl0KHByb21pc2VzKTtcblxuICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goc2VsZWN0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucHJpY2VzV2l0aFRheCkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9uLXNhbGUgcHJpY2UgYmFzZWQgb24gdGhlIHByZXZpb3VzIHByaWNlIGFuZCB0aGUgY3VycmVudCBwcmljZVxuICAgICAgICAgICAgICAgIC8vIGNvbnNpZGVyIGFsbCBub3cgcHJpY2UgYW5kIHJlZ3VsYXIgcHJpY2VcbiAgICAgICAgICAgICAgICBsZXQgbm9uU2FsZVByaWNlV2l0aFRheCA9IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIC8vIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5wcmljZS52YWx1ZSAtIHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5iYXNlUHJpY2UudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfHwgbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBub24tc2FsZSBwcmljZSBpZiBpdCdzIGxlc3MgdGhhbiB0aGUgY3VycmVudCBwcmljZVxuICAgICAgICAgICAgICAgIGlmIChub25TYWxlUHJpY2VXaXRoVGF4IDw9IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXggPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5hZGp1c3RlZFByaWNlc1dpdGhUYXggPSB7XG4gICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhUYXguYmFzZVByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG5vblNhbGVQcmljZVdpdGhUYXgsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4KSB7XG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBub24tc2FsZSBwcmljZSBiYXNlZCBvbiB0aGUgcHJldmlvdXMgcHJpY2UgYW5kIHRoZSBjdXJyZW50IHByaWNlXG4gICAgICAgICAgICAgICAgLy8gY29uc2lkZXIgYWxsIG5vdyBwcmljZSBhbmQgcmVndWxhciBwcmljZVxuICAgICAgICAgICAgICAgIGxldCBub25TYWxlUHJpY2VXaXRob3V0VGF4ID0gc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLy8gfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LnByaWNlLnZhbHVlIC0gc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LmJhc2VQcmljZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB8fCBudWxsO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG5vbi1zYWxlIHByaWNlIGlmIGl0J3MgbGVzcyB0aGFuIHRoZSBjdXJyZW50IHByaWNlXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGVQcmljZVdpdGhvdXRUYXggPD0gc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFkanVzdGVkUHJpY2VzV2l0aG91dFRheCA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VWYWx1ZTogbm9uU2FsZVByaWNlV2l0aG91dFRheCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZldGNoT3B0aW9uUHJpY2VzIHJldHVybnM6ICcsIHNlbGVjdGlvbnMpO1xuICAgICAgICByZXR1cm4gW3ByZXYsIC4uLnNlbGVjdGlvbnNdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHByb2R1Y3QgcHJpY2UgZnJvbSBzcGVjaWZpYyBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PHsgb3B0aW9uRW50aXR5SWQ6IG51bWJlciwgdmFsdWVFbnRpdHlJZDogbnVtYmVyfT59IG9wdGlvblZhbHVlSWRzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8eyBwcmljZXNXaXRoVGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9LCBwcmljZXNXaXRob3V0VGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9IH0+XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2hPcHRpb25QcmljZShvcHRpb25WYWx1ZUlkcykge1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvblZhbHVlSWRzKTtcblxuICAgICAgICBpZiAoIXRoaXMuZmV0Y2hPcHRpb25QcmljZUNhY2hlW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICgkcHJvZHVjdElkOiBJbnQhLCAkb3B0aW9uVmFsdWVJZHM6IFtPcHRpb25WYWx1ZUlkIV0sICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdChlbnRpdHlJZDogJHByb2R1Y3RJZCwgb3B0aW9uVmFsdWVJZHM6ICRvcHRpb25WYWx1ZUlkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzV2l0aFRheDogcHJpY2VzKGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZSwgaW5jbHVkZVRheDogdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByaWNlRmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRob3V0VGF4OiBwcmljZXMoY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlLCBpbmNsdWRlVGF4OiBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByaWNlRmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IFByaWNlRmllbGRzIG9uIFByaWNlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVfY3VycmVuY3lfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZUlkcyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtjYWNoZUtleV0gPSByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hPcHRpb25QcmljZUNhY2hlW2NhY2hlS2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IHRvb2x0aXBzIHRvIHRoZSBjb3JyZXNwb25kaW5nIHNob3duIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFRpdGxlXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyB0b29sdGlwOiBzdHJpbmcsIHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0gfX0gdG9vbHRpcHNcbiAgICAgKiBAcGFyYW0ge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9fSB0b29sdGlwSGVhZGluZ3NcbiAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNob3dPcHRpb25JZHMgb3B0aW9uIGlkcyB0byBzaG93IHRvb2x0aXBzXG4gICAgICovXG4gICAgc2hvd09wdGlvblRvb2x0aXBzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFRpdGxlLCB0b29sdGlwcywgdG9vbHRpcEhlYWRpbmdzLCBzaG93T3B0aW9uSWRzKSB7XG4gICAgICAgIC8vIERpc3BsYXkgdG9vbHRpcFxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwcykuZm9yRWFjaCgoW29wdGlvbklkLCB7IHRvb2x0aXAsIHZhbHVlVG9vbHRpcHMgfV0pID0+IHtcbiAgICAgICAgICAgIGlmICghc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIob3B0aW9uSWQpKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XG5cbiAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdG9vbHRpcCkpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBvcHRpb25JZCk7XG5cbiAgICAgICAgICAgICAgICAkb3B0aW9uLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQ9XCIke29wdGlvbklkfVwiXWApLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgJGxhYmVsID0gJG9wdGlvbi5maW5kKCdsYWJlbCcpLmZpcnN0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJGxhYmVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJGxhYmVsLmFmdGVyKCR0b29sdGlwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLnByZXBlbmQoJHRvb2x0aXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwcykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcF0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdmFsdWVUb29sdGlwKSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XG5cbiAgICAgICAgICAgICAgICAkb3B0aW9uLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJHZhbHVlLmFmdGVyKCR0b29sdGlwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpZiBvbmx5IDEgb3B0aW9uIHNob3duIGF0IGN1cnJlbnQgc3RlcCxcbiAgICAgICAgLy8gdGhlbiBtb3ZlIGl0cyB0b29sdGlwIHRvIHRoZSBtb2RhbCB0aXRsZVxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtzaG93T3B0aW9uSWRzWzBdfVwiXWApO1xuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuYXBwZW5kKCR0b29sdGlwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc3BsYXkgdG9vbHRpcCBoZWFkaW5nXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvb2x0aXBIZWFkaW5ncylcbiAgICAgICAgICAgIC5maWx0ZXIoKFtvcHRpb25JZF0pID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKG9wdGlvbklkKSkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoW29wdGlvbklkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nc10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XG5cbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZVRvb2x0aXBIZWFkaW5ncykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmddKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwSGVhZGluZyA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUucmVwbGFjZSgnPCVoZWFkaW5nJT4nLCB2YWx1ZVRvb2x0aXBIZWFkaW5nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkdG9vbHRpcEhlYWRpbmcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIG9wdGlvbnMgYW5kIGRpc3BsYXkgY29udGludWUgYnV0dG9uIGlmIG5lY2Vzc2FyeS5cbiAgICAgKiBTdG9wIGF1dG8gdXBkYXRlIHRoZSBtb2RpZmllcnMgdmlldyB1bnRpbCB0aGUgY29udGludWUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICpcbiAgICAgKiBDb250aW51ZSBidXR0b24gaXMgc2hvd24gaWYgYW55IG9mIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICAgICAqIC0gb3B0aW9ucyB0aGF0IGhhcyBkZWZhdWx0IHZhbHVlXG4gICAgICogLSBjaGVja2JveCBvcHRpb25zXG4gICAgICogLSBvcHRpb25hbCBzZWxlY3Qgb3B0aW9uc1xuICAgICAqIC0gb3B0aW9uYWwgZGF0ZSBzZWxlY3Qgb3B0aW9uc1xuICAgICAqIC0gZmlsZSBpbnB1dFxuICAgICAqIC0gbW9yZSB0aGFuIDEgb3B0aW9uIGFyZSBzaG93biBhdCB0aGUgc2FtZSB0aW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IHNob3dPcHRpb25JZHMgc2hvdyBvcHRpb24gaWRzXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsQ29udGludWVcbiAgICAgKi9cbiAgICBwb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMoc2hvd09wdGlvbklkcywgJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsQ29udGludWUpIHtcbiAgICAgICAgY29uc3Qgc2hvd25PcHRpb25zID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgaWQgfSkgPT4gc2hvd09wdGlvbklkcy5pbmNsdWRlcyhpZCkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBvcHRpb25zIHRoYXQgaGFzIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gc2hvd25PcHRpb25zXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHByZWZpbGwsIHNlbGVjdGVkX2RhdGUsIHZhbHVlcyB9KSA9PlxuICAgICAgICAgICAgICAgIHByZWZpbGwgfHxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZF9kYXRlICYmIChzZWxlY3RlZF9kYXRlLmRheSB8fCBzZWxlY3RlZF9kYXRlLm1vbnRoIHx8IHNlbGVjdGVkX2RhdGUueWVhcikgfHxcbiAgICAgICAgICAgICAgICB2YWx1ZXM/LmZpbmQoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogY2hlY2tib3ggdHlwZSBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBjaGVja2JveE9wdGlvbnMgPSBzaG93bk9wdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgbm9WYWx1ZSwgdmFsdWUgfSkgPT4gbm9WYWx1ZSB8fCB2YWx1ZSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGZpbGUgdHlwZSBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBmaWxlT3B0aW9ucyA9IHNob3duT3B0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcigoeyBwYXJ0aWFsIH0pID0+IHBhcnRpYWwgPT09ICdpbnB1dC1maWxlJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRhdGUgdHlwZSBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkYXRlT3B0aW9ucyA9IHNob3duT3B0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcigoeyBwYXJ0aWFsIH0pID0+IHBhcnRpYWwgPT09ICdkYXRlJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRyb3Bkb3duIHR5cGUgb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gc2hvd25PcHRpb25zXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHJlcXVpcmVkLCBwYXJ0aWFsIH0pID0+ICFyZXF1aXJlZCAmJiBwYXJ0aWFsID09PSAnc2V0LXNlbGVjdCcpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0ZXh0IC8gbXVsdGlsaW5lIC8gbnVtYmVyIG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHRleHRPcHRpb25zID0gc2hvd25PcHRpb25zXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHBhcnRpYWwgfSkgPT4gcGFydGlhbCA9PT0gJ2lucHV0LXRleHQnIHx8IHBhcnRpYWwgPT09ICd0ZXh0YXJlYScgfHwgcGFydGlhbCA9PT0gJ2lucHV0LW51bWJlcnMnKTtcblxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAxXG4gICAgICAgICAgICB8fCBkZWZhdWx0T3B0aW9ucy5sZW5ndGggPiAwIHx8IGNoZWNrYm94T3B0aW9ucy5sZW5ndGggPiAwIHx8IGZpbGVPcHRpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgIHx8IGRhdGVPcHRpb25zLmxlbmd0aCA+IDAgfHwgZHJvcGRvd25PcHRpb25zLmxlbmd0aCA+IDAgfHwgdGV4dE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gc2hvdyBjb250aW51ZSBidXR0b25cbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbENvbnRpbnVlLnNob3coKTtcblxuICAgICAgICAgICAgLy8gc3RvcCBhdXRvIHVwZGF0ZSB0aGUgbW9kaWZpZXJzIHZpZXcgdW50aWwgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgICAgICAgICB0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gb3B0aW9uc1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMuZm9yRWFjaCgoe1xuICAgICAgICAgICAgICAgIGlkLCBwcmVmaWxsLCBzZWxlY3RlZF9kYXRlLCB2YWx1ZXMsXG4gICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IHZhbHVlcz8uZmluZCgoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCk/LmlkO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnc2VsZWN0JykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1gKS52YWwodmFsdWVJZCk7XG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdYCkudmFsKHByZWZpbGwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRfZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRfZGF0ZS5kYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW2RheV1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS5kYXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9kYXRlLm1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVttb250aF1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS5tb250aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX2RhdGUueWVhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1beWVhcl1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS55ZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gY2hlY2tib3ggb3B0aW9uc1xuICAgICAgICAgICAgY2hlY2tib3hPcHRpb25zLmZvckVhY2goKHtcbiAgICAgICAgICAgICAgICBpZCwgY2hlY2tlZCwgdmFsdWUsIG5vVmFsdWUsXG4gICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiaGlkZGVuXCJdYCkudmFsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiY2hlY2tib3hcIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiaGlkZGVuXCJdYCkudmFsKG5vVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJjaGVja2JveFwiXWApLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIG1hcmsgZmlsZSBpbnB1dCwgZGF0ZSBpbnB1dCwgZHJvcGRvd24gc2VsZWN0LCB0ZXh0IGlucHV0IGFzIHNob3duXG4gICAgICAgICAgICBbLi4uZmlsZU9wdGlvbnMsIC4uLmRhdGVPcHRpb25zLCAuLi5kcm9wZG93bk9wdGlvbnMsIC4uLnRleHRPcHRpb25zXS5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW2RheV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVttb250aF1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVt5ZWFyXVwiXWApLmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nLCAndHJ1ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlcigkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcykge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHByZWxvYWRlcjogdHJ1ZSB9O1xuICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XG4gICAgICAgIGNvbnN0IHByaWNlVGV4dCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlUGxhaW5UZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xuICAgICAgICBjb25zdCBzdWJ0b3RhbEh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XG5cbiAgICAgICAgc2hvd09wdGlvbklkcy5mb3JFYWNoKG9wdGlvbklkID0+IHtcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcbiAgICAgICAgICAgICAgICAuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV1gKVxuICAgICAgICAgICAgICAgIC5lYWNoKChfaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJChlbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSBOdW1iZXIoJHZhbHVlLmF0dHIoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWUnKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWVJZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJpY2UgPSAkKHByaWNlSHRtbCkuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGFscmVhZHkgaGFzIHByaWNlIGRpc3BsYXllZCBiZWZvcmU/XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmRhdGEoJ3ByaWNlSHRtbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcsICR2YWx1ZS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUudGV4dChgJHskdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0Jyl9ICR7cHJpY2VUZXh0fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJG9sZCA9ICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkb2xkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb2xkLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwbGFjZWhvbGRlciA9ICR2YWx1ZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1wbGFjZWhvbGRlcl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwoJHByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCRwcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IHByaWNlcyB0byBjb3JyZXNwb25kaW5nIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaG93T3B0aW9uSWRzIG9wdGlvbiBpZHMgdG8gc2hvdyBwcmljZXNcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxuICAgICAqIEBwYXJhbSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9IH19IG5vbmVTYWxlcyBvcHRpb24gdmFsdWVzIHdpdGggbm9uLXNhbGUgcHJpY2VzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaWdub3JlVXBkYXRlU3VidG90YWw9ZmFsc2VdIGlnbm9yZSB1cGRhdGUgc3VidG90YWxcbiAgICAgKi9cbiAgICBhc3luYyBzaG93T3B0aW9uUHJpY2VzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzLCBmb3JtRGF0YSwgbm9uZVNhbGVzLCBpZ25vcmVVcGRhdGVTdWJ0b3RhbCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IFtzZXR0aW5ncywgW3ByZXYsIC4uLnNlbGVjdGlvbnNdXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hTZXR0aW5ncygpLFxuICAgICAgICAgICAgdGhpcy5mZXRjaE9wdGlvblByaWNlcyhcbiAgICAgICAgICAgICAgICBzaG93T3B0aW9uSWRzLm1hcChfaWQgPT4gdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBfaWQpKSxcbiAgICAgICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgICksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IHNob3dQcmljZSA9IHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dQcmljZUZyZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50eHRQcmljZUZyZWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dQcmljZVplcm8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UHJpY2UodmFsdWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRQcmljZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKCh7XG4gICAgICAgICAgICBvcHRpb25JZCwgdmFsdWVJZCwgYWRqdXN0ZWRQcmljZXNXaXRoVGF4LCBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXgsXG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdFWCcgPyB7XG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiBhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiBzaG93UHJpY2UoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5wcmljZT8udmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IChhZGp1c3RlZFByaWNlc1dpdGhUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA6ICcnKSxcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUsIHRydWUpIDogJycpLFxuICAgICAgICAgICAgICAgIH0gOiB7fSksXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdJTkMnID8ge1xuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogc2hvd1ByaWNlKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ucHJpY2U/LnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiAoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgOiAnJyksXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IChhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlLCB0cnVlKSA6ICcnKSxcbiAgICAgICAgICAgICAgICB9IDoge30pLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtcy5wcmljZVdpdGhUYXggfHwgcGFyYW1zLnByaWNlV2l0aG91dFRheCkge1xuICAgICAgICAgICAgICAgIC8vIG92ZXJyaWRlIG5vbi1zYWxlIHByaWNlIGZvciBvcHRpb24gdmFsdWVzIGlmIGl0IGlzIGFwcGVhcnMgaW4gY3VzdG9tIGZpZWxkIGBfX0Bub25zYWxlYFxuICAgICAgICAgICAgICAgIC8vIGFuZCBpZiBpdCdzIGhpZ2hlciB0aGFuIHRoZSBjdXJyZW50IHByaWNlXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9uU2FsZSA9IG5vbmVTYWxlc1tvcHRpb25JZF0/Llt2YWx1ZUlkXTtcbiAgICAgICAgICAgICAgICBpZiAobm9uU2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGNoYW5nZWROb25TYWxlID0gbm9uU2FsZSAqIHNldHRpbmdzLmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VWYWx1ZSA9IHNldHRpbmdzLnRheC5wZHAgIT09ICdJTkMnID8gYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUgOiBhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2hhbmdlZE5vblNhbGUgPiBwcmljZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IGV4Y2hhbmdlZE5vblNhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXg6IHRoaXMuZm9ybWF0UHJpY2UoZXhjaGFuZ2VkTm9uU2FsZSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogZXhjaGFuZ2VkTm9uU2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheDogdGhpcy5mb3JtYXRQcmljZShleGNoYW5nZWROb25TYWxlLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge30pLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVRleHQgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVBsYWluVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJpY2UgPSAkKHByaWNlSHRtbCkuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcsICR2YWx1ZS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS50ZXh0KGAkeyR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKX0gJHtwcmljZVRleHR9YCk7XG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5kYXRhKCdwcmljZUh0bWwnLCBwcmljZUh0bWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHBsYWNlaG9sZGVyID0gJHZhbHVlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLXBsYWNlaG9sZGVyXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKCRwcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCRwcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNob3cgc3VidG90YWwgY2FsY3VsYXRlZCBmcm9tIGFsbCBzZWxlY3RlZCBvcHRpb25zIGZvciB0aGUgY3VycmVudCBzdGVwXG4gICAgICAgIGlmICghaWdub3JlVXBkYXRlU3VidG90YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvblN1YnRvdGFsKCRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBwcmV2LCBzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IHN1YnRvdGFsIGZvciB0aGUgY3VycmVudCBzdGVwXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VidG90YWxcbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIHByaWNlc1dpdGhUYXg6IHtcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXG4gICAgICogICAgIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IHwgbnVsbCxcbiAgICAgKiAgIH0sXG4gICAgICogICBwcmljZXNXaXRob3V0VGF4OiB7XG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxuICAgICAqICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfCBudWxsLFxuICAgICAqIH19IHByb2R1Y3RcbiAgICAgKiBAcGFyYW0ge3sgdGF4OiB7IHBkcDogbnVtYmVyIH0gfX0gc2V0dGluZ3NcbiAgICAgKlxuICAgICAqL1xuICAgIHNob3dPcHRpb25TdWJ0b3RhbCgkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgcHJvZHVjdCwgc2V0dGluZ3MpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHR4dFN1YnRvdGFsOiB0aGlzLmNvbnRleHQudHh0U3VidG90YWwsXG4gICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogJycsXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4VmFsdWU6ICcnLFxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiAnJyxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocHJvZHVjdC5wcmljZXNXaXRoVGF4Py5wcmljZSB8fCBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXg/LnByaWNlKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXg6IHRoaXMuZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlID8gcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiBwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxuICAgICAgICAgICAgICAgIH0gOiB7fSksXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdJTkMnID8ge1xuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IHRoaXMuZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlID8gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4OiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxuICAgICAgICAgICAgICAgIH0gOiB7fSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBzdW1tYXJ5IG9mIHNlbGVjdGVkIG9wdGlvbnMgYmVmb3JlIGFkZGluZyB0byBjYXJ0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5XG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFRpdGxlXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRhZGRUb0NhcnRXcmFwcGVyXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZWxvYWRlclxuICAgICAqL1xuICAgIHNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhLCBwcmVsb2FkZXIgPSBmYWxzZSkge1xuICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5odG1sKHRoaXMuY29udGV4dC50eHRSZXZpZXdTZWxlY3Rpb25zKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9ICFwcmVsb2FkZXJcbiAgICAgICAgICAgID8gJG1vZGlmaWVyc01vZGFsU3VidG90YWwuaHRtbCgpXG4gICAgICAgICAgICA6IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHsgcHJlbG9hZGVyIH0sIG51bGwsIFsnPCUnLCAnJT4nXSk7XG4gICAgICAgIGNvbnN0ICRzdWJ0b3RhbCA9ICQoc3VidG90YWxIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZS1zdWJ0b3RhbCcsICcnKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRheVN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XWApO1xuICAgICAgICAgICAgY29uc3QgbW9udGhTdHIgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW21vbnRoXWApO1xuICAgICAgICAgICAgY29uc3QgeWVhclN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1beWVhcl1gKTtcblxuICAgICAgICAgICAgaWYgKGRheVN0ciB8fCBtb250aFN0ciB8fCB5ZWFyU3RyKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGAke3llYXJTdHJ9LSR7bW9udGhTdHJ9LSR7ZGF5U3RyfWApLnRvTG9jYWxlRGF0ZVN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZTogYCR7eWVhclN0cn0tJHttb250aFN0cn0tJHtkYXlTdHJ9YCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlU3RyID0gZm9ybURhdGEuZ2V0QWxsKGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XWApLnNsaWNlKC0xKVswXTtcbiAgICAgICAgICAgIGlmICghdmFsdWVTdHIgfHwgdmFsdWVTdHIgPT09ICcwJykgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAodmFsdWVTdHIgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlU3RyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5kaXNwbGF5X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVTdHIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IHZhbHVlU3RyID8gTnVtYmVyKHZhbHVlU3RyKSA6IG51bGw7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgaWYgaXQgaXMgY2hlY2tib3ggYW5kIG5vdCBjaGVja2VkXG4gICAgICAgICAgICBpZiAob3B0aW9uLm5vVmFsdWUgJiYgb3B0aW9uLm5vVmFsdWUgPT09IHZhbHVlSWQpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVMYWJlbCA9IG9wdGlvbi52YWx1ZXM/LmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHZhbHVlSWQpPy5sYWJlbFxuICAgICAgICAgICAgICAgIHx8IChvcHRpb24udmFsdWUgPT09IHZhbHVlSWQgPyBvcHRpb24ubGFiZWwgOiB1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICBjb25zdCBwcmljZUh0bWwgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkPVwiJHtvcHRpb24uaWR9LSR7dmFsdWVJZH1cIl1gKVxuICAgICAgICAgICAgICAgIC5maXJzdCgpLmNsb25lKCkucmVtb3ZlQXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZCcpWzBdPy5vdXRlckhUTUw7XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsUHJpY2VIdG1sID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdIG9wdGlvblt2YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKS5kYXRhKCdwcmljZUh0bWwnKTtcblxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZGlzcGxheV9uYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZUxhYmVsIHx8IHZhbHVlU3RyLFxuICAgICAgICAgICAgICAgIHByaWNlSHRtbDogcHJpY2VIdG1sIHx8IG9wdGlvbkVsUHJpY2VIdG1sLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHN1bW1hcnlIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VtbWFyeVRlbXBsYXRlLCB7IG9wdGlvbnMgfSwgbnVsbCwgWyc8JScsICclPiddKTtcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsU3VtbWFyeS5odG1sKHN1bW1hcnlIdG1sKTtcblxuICAgICAgICAvLyBJbnNlcnQgc3VidG90YWwgdG8gdG8gYWRkIHRvIGNhcnQgd3JhcHBlciBhbmQgc2hvdyBpdFxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29tcGxldGUtc3VidG90YWxdJykucmVtb3ZlKCk7XG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLmZpbmQodGhpcy5hZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IpLnByZXBlbmQoJHN1YnRvdGFsKTtcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuc2hvdygpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aG91dF90YXhdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRob3V0X3RheC5jdXJyZW5jeVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnRheF9sYWJlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4XVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheC52YWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXguY3VycmVuY3lcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aF90YXhdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uud2l0aF90YXguZm9ybWF0dGVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRoX3RheC5jdXJyZW5jeVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4XVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXguY3VycmVuY3lcbiAgICAgKi9cbiAgICB1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbChkYXRhKSB7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcblxuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgdHh0U3VidG90YWw6IHRoaXMuY29udGV4dC50eHRTdWJ0b3RhbCxcbiAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiAnJyxcbiAgICAgICAgICAgIHByaWNlV2l0aFRheDogJycsXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogJycsXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6ICcnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChkYXRhLnByaWNlKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgICAgIC4uLihkYXRhLnByaWNlLndpdGhfdGF4ID8ge1xuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiBkYXRhLnByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCxcbiAgICAgICAgICAgICAgICB9IDoge30pLFxuICAgICAgICAgICAgICAgIC4uLihkYXRhLnByaWNlLndpdGhvdXRfdGF4ID8ge1xuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiBkYXRhLnByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCxcbiAgICAgICAgICAgICAgICB9IDoge30pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsU3VidG90YWwuaHRtbChzdWJ0b3RhbEh0bWwpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogUGFyc2VzIGFuIElTTyBkYXRlLXRpbWUgc3RyaW5nIGFuZCBleHRyYWN0cyB0aGUgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIGRhdGUtdGltZSBzdHJpbmcgdG8gcGFyc2UuXG4gKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBleHRyYWN0ZWQgY29tcG9uZW50cywgb3IgYG51bGxgIGlmIHRoZSBmb3JtYXQgaXMgaW52YWxpZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZVRpbWVTdHJpbmcoc3RyKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXlxccyooPzooPzooXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KSl8KD86KFxcZHsyfSktKFxcZHsyfSkpKT8oPzpbVFxcc10pPyg/OihcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0pKD86XFwuXFxkKyk/fChcXGR7Mn0pOihcXGR7Mn0pfChcXGR7Mn0pKT9cXHMqKD86WnwoWystXSkoXFxkezEsMn0pKD86Oj8oXFxkezJ9KSk/KT9cXHMqJC87XG5cbiAgICBjb25zdCBtYXRjaCA9IHN0ci50cmltKCkubWF0Y2gocmVnZXgpO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7IC8vIEludmFsaWQgZm9ybWF0XG4gICAgfVxuXG4gICAgY29uc3QgW1xuICAgICAgICAsXG4gICAgICAgIHllYXIsIG1vbnRoLCBkYXksIC8vIFsxXSwgWzJdLCBbM11cbiAgICAgICAgc2hvcnRNb250aCwgc2hvcnREYXksIC8vIFs0XSwgWzVdXG4gICAgICAgIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCAvLyBbNl0sIFs3XSwgWzhdXG4gICAgICAgIHNob3J0SG91ciwgc2hvcnRNaW51dGUsIC8vIFs5XSwgWzEwXVxuICAgICAgICBzaW5nbGVUaW1lQ29tcG9uZW50LCAvLyBbMTFdXG4gICAgICAgIHR6U2lnbiwgdHpIb3VyT2Zmc2V0LCB0ek1pbnV0ZU9mZnNldCwgLy8gWzEyXSwgWzEzXSwgWzE0XVxuICAgIF0gPSBtYXRjaDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgLy8gRGF0ZSBjb21wb25lbnRzXG4gICAgaWYgKHllYXIgJiYgbW9udGggJiYgZGF5KSB7XG4gICAgICAgIHJlc3VsdC55ZWFyID0gcGFyc2VJbnQoeWVhciwgMTApO1xuICAgICAgICByZXN1bHQubW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xuICAgICAgICByZXN1bHQuZGF5ID0gcGFyc2VJbnQoZGF5LCAxMCk7XG4gICAgfSBlbHNlIGlmIChzaG9ydE1vbnRoICYmIHNob3J0RGF5KSB7XG4gICAgICAgIHJlc3VsdC5tb250aCA9IHBhcnNlSW50KHNob3J0TW9udGgsIDEwKTtcbiAgICAgICAgcmVzdWx0LmRheSA9IHBhcnNlSW50KHNob3J0RGF5LCAxMCk7XG4gICAgfVxuXG4gICAgLy8gVGltZSBjb21wb25lbnRzXG4gICAgaWYgKGhvdXIgIT09IHVuZGVmaW5lZCAmJiBtaW51dGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KGhvdXIsIDEwKTtcbiAgICAgICAgcmVzdWx0Lm1pbnV0ZSA9IHBhcnNlSW50KG1pbnV0ZSwgMTApO1xuICAgICAgICBpZiAoc2Vjb25kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zZWNvbmQgPSBwYXJzZUludChzZWNvbmQsIDEwKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hvcnRIb3VyICE9PSB1bmRlZmluZWQgJiYgc2hvcnRNaW51dGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KHNob3J0SG91ciwgMTApO1xuICAgICAgICByZXN1bHQubWludXRlID0gcGFyc2VJbnQoc2hvcnRNaW51dGUsIDEwKTtcbiAgICB9IGVsc2UgaWYgKHNpbmdsZVRpbWVDb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KHNpbmdsZVRpbWVDb21wb25lbnQsIDEwKTtcbiAgICB9XG5cbiAgICAvLyBUaW1lem9uZVxuICAgIGlmICh0elNpZ24gJiYgdHpIb3VyT2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHNpZ24gPSB0elNpZ24gPT09ICcrJyA/IDEgOiAtMTtcbiAgICAgICAgY29uc3QgdHpIb3VyID0gcGFyc2VJbnQodHpIb3VyT2Zmc2V0LCAxMCk7XG4gICAgICAgIGNvbnN0IHR6TWludXRlID0gdHpNaW51dGVPZmZzZXQgPyBwYXJzZUludCh0ek1pbnV0ZU9mZnNldCwgMTApIDogMDtcbiAgICAgICAgcmVzdWx0LnRpbWV6b25lID0gc2lnbiAqICh0ekhvdXIgKyB0ek1pbnV0ZSAvIDYwKTtcbiAgICB9IGVsc2UgaWYgKHN0ci5pbmNsdWRlcygnWicpKSB7XG4gICAgICAgIHJlc3VsdC50aW1lem9uZSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRhdGUtdGltZSBzdHJpbmcgaW50byBhIERhdGUgb2JqZWN0IGFkanVzdGVkIGZvciBjb3VudGRvd24gcHVycG9zZXMuXG4gKlxuICogLSBJZiB0aGUgZGF0ZS10aW1lIHN0cmluZyBkb2VzIG5vdCBpbmNsdWRlIGEgeWVhciwgbW9udGgsIG9yIGRheSwgaXQgaXMgdHJlYXRlZCBhcyBhIGRhaWx5IGNvdW50ZG93bi5cbiAqICAgVGhlIGZ1bmN0aW9uIHdpbGwgc2V0IHRoZSBkYXRlIHRvIHRvZGF5IG9yIHJvbGwgb3ZlciB0byB0aGUgbmV4dCBkYXkgaWYgdGhlIHRpbWUgaGFzIGFscmVhZHkgcGFzc2VkLlxuICogLSBJZiB0aGUgZGF0ZS10aW1lIHN0cmluZyBkb2VzIG5vdCBpbmNsdWRlIGFuIGhvdXIsIG1pbnV0ZSwgb3Igc2Vjb25kLCB0aGV5IGRlZmF1bHQgdG8gMC5cbiAqIC0gVGhlIGZ1bmN0aW9uIGFkanVzdHMgZm9yIHRoZSBzcGVjaWZpZWQgdGltZXpvbmUgb2Zmc2V0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgZGF0ZS10aW1lIHN0cmluZyB0byBwYXJzZS5cbiAqIEByZXR1cm5zIHtEYXRlfHVuZGVmaW5lZH0gQSBEYXRlIG9iamVjdCB1c2VkIGZvciB0aGUgY291bnRkb3duLCBvciBgdW5kZWZpbmVkYCBpZiBwYXJzaW5nIGZhaWxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb3VudGRvd25EYXRlKHN0cikge1xuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBwYXJzZURhdGVUaW1lU3RyaW5nKHN0cik7XG4gICAgaWYgKCFwYXJzZWREYXRlKSByZXR1cm47XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbiAgICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCB0aW1lem9uZSB9ID0gcGFyc2VkRGF0ZTtcblxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKHllYXIpIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgaWYgKG1vbnRoKSBkYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7XG4gICAgaWYgKGRheSkgZGF0ZS5zZXREYXRlKGRheSk7XG4gICAgZGF0ZS5zZXRIb3Vycyhob3VyIHx8IDApO1xuICAgIGRhdGUuc2V0TWludXRlcyhtaW51dGUgfHwgMCk7XG4gICAgZGF0ZS5zZXRTZWNvbmRzKHNlY29uZCB8fCAwKTtcblxuICAgIC8vIGNoYW5nZSB0aW1lem9uZSB0byBVVENcbiAgICBkYXRlLnNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSAtIGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwKTtcblxuICAgIC8vIEFkanVzdCBmb3IgdGltZXpvbmVcbiAgICBpZiAodGltZXpvbmUpIHtcbiAgICAgICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgLSB0aW1lem9uZSk7XG4gICAgfVxuXG4gICAgaWYgKCF5ZWFyICYmICFtb250aCAmJiAhZGF5KSB7XG4gICAgICAgIC8vIGZvciBkYWlseSBjb3VudGRvd24sIGFkZCAxIGRheSBpZiBkYXRlIGlzIGluIHRoZSBwYXN0XG4gICAgICAgIGlmIChkYXRlIDwgbmV3IERhdGUoKSkge1xuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbn1cblxuLyoqXG4gKiAqKlNhbGVDb3VudGRvd24gU2luZ2xldG9uIE9iamVjdCoqXG4gKlxuICogTWFuYWdlcyBjb3VudGRvd24gdGltZXJzIGZvciBzYWxlcyBvciBwcm9tb3Rpb25hbCBldmVudHMgb24geW91ciB3ZWJzaXRlLlxuICogSXQgaGFuZGxlcyBtdWx0aXBsZSBjb3VudGRvd24gZWxlbWVudHMsIHVwZGF0ZXMgdGhlbSBpbiByZWFsLXRpbWUsIGFuZCBtYW5hZ2VzIHZpc2liaWxpdHkgYmFzZWQgb24gdGhlIHZpZXdwb3J0LlxuICpcbiAqIC0tLVxuICpcbiAqICoqVXNhZ2U6KipcbiAqXG4gKiAqKjEuIENvbmZpZ3VyZSB0aGUgQ291bnRkb3duIChPcHRpb25hbCk6KipcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBTYWxlQ291bnRkb3duLmNvbmZpZ3VyZSh7XG4gKiAgIC8vIE9wdGlvbmFsIHNldHRpbmdzXG4gKiAgIGRhdGVEYXRhTmFtZTogJ3NhbGVDb3VudGRvd25EYXRlJywgICAgICAgLy8gRGF0YSBhdHRyaWJ1dGUgZm9yIGNvdW50ZG93biBkYXRlXG4gKiAgIGluVmlld3BvcnREYXRhTmFtZTogJ3NhbGVDb3VudGRvd25JblZpZXdwb3J0JywgLy8gRGF0YSBhdHRyaWJ1dGUgZm9yIHZpZXdwb3J0IHZpc2liaWxpdHlcbiAqICAgc2VsZWN0b3JzOiB7IC4uLiB9LFxuICogICB0ZW1wbGF0ZTogJy4uLicsICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEN1c3RvbSBIVE1MIHRlbXBsYXRlIGZvciB0aGUgY291bnRkb3duXG4gKiAgIGhpZGVDbGFzczogJ19oaWRlJywgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xhc3MgdG8gaGlkZSBlbGVtZW50c1xuICogICBzYWxlRW5kQ2xhc3M6ICdfc2FsZUVuZGVkJywgICAgICAgICAgICAgIC8vIENsYXNzIHdoZW4gc2FsZSBlbmRzXG4gKiAgIGFjdGl2ZUNsYXNzOiAnX2FjdGl2ZScsICAgICAgICAgICAgICAgICAgLy8gQ2xhc3Mgd2hlbiBjb3VudGRvd24gaXMgYWN0aXZlXG4gKiAgIHRyYW5zbGF0aW9uczoge1xuICogICAgIGVuZF9pbjogJ0VuZHMgaW4nLFxuICogICAgIGRheTogJ0RheScsXG4gKiAgICAgZGF5czogJ0RheXMnLFxuICogICAgIGhvdXI6ICdIb3VyJyxcbiAqICAgICBob3VyczogJ0hvdXJzJyxcbiAqICAgICBtaW51dGU6ICdNaW51dGUnLFxuICogICAgIG1pbnV0ZXM6ICdNaW51dGVzJyxcbiAqICAgICBzZWNvbmQ6ICdTZWNvbmQnLFxuICogICAgIHNlY29uZHM6ICdTZWNvbmRzJyxcbiAqICAgfSxcbiAqICAgdHh0U2FsZUNvdW50ZG93bkpTT046ICd7IFwidHJhbnNsYXRpb25zXCI6IHsgLi4uIH0gfScsIC8vIEpTT04gc3RyaW5nIGZvciB0cmFuc2xhdGlvbnNcbiAqIH0pO1xuICogYGBgXG4gKlxuICogKioyLiBBZGQgQ291bnRkb3duIEVsZW1lbnRzOioqXG4gKlxuICogLSAqKk9wdGlvbiAxOioqIERpcmVjdGx5IHNwZWNpZnkgdGhlIGRhdGUgd2hlbiBhZGRpbmcgdGhlIGVsZW1lbnQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIGNvbnN0ICRlbCA9ICQoJyNjb3VudGRvd24tZWxlbWVudCcpO1xuICogICBjb25zdCBkYXRlID0gbmV3IERhdGUoJzIwMjMtMTItMzFUMjM6NTk6NTknKTtcbiAqICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsLCBkYXRlKTtcbiAqICAgYGBgXG4gKlxuICogLSAqKk9wdGlvbiAyOioqIFNldCBkYXRhIGF0dHJpYnV0ZXMgb24gdGhlIGVsZW1lbnQgYW5kIGFkZCBpdC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgY29uc3QgJGVsID0gJCgnI2NvdW50ZG93bi1lbGVtZW50Jyk7XG4gKiAgICRlbC5kYXRhKCdzYWxlQ291bnRkb3duRGF0ZScsICcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XG4gKiAgICRlbC5kYXRhKCdzYWxlQ291bnRkb3duVHJhbnNsYXRpb25zJywgeyBlbmRfaW46ICdFbmRzIGluJywgLi4uIH0pO1xuICogICBTYWxlQ291bnRkb3duLmFkZCgkZWwpO1xuICogICBgYGBcbiAqXG4gKiAtLS1cbiAqXG4gKiAqKk5vdGVzOioqXG4gKlxuICogLSBUaGUgY291bnRkb3duIGF1dG9tYXRpY2FsbHkgdXBkYXRlcyB2aXNpYmxlIGVsZW1lbnRzIGluIHRoZSB2aWV3cG9ydC5cbiAqIC0gU3VwcG9ydHMgY3VzdG9taXphdGlvbiB0aHJvdWdoIGNvbmZpZ3VyYXRpb24gYW5kIGRhdGEgYXR0cmlidXRlcy5cbiAqIC0gSGFuZGxlcyBhdXRvbWF0aWMgc3RvcHBpbmcgd2hlbiBubyBlbGVtZW50cyByZW1haW4uXG4gKlxuICogLS0tXG4gKlxuICogKipFeGFtcGxlOioqXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogLy8gSW5pdGlhbGl6ZSBhbmQgY29uZmlndXJlXG4gKiBTYWxlQ291bnRkb3duLmNvbmZpZ3VyZSh7XG4gKiAgIHRyYW5zbGF0aW9uczoge1xuICogICAgIGVuZF9pbjogJ1NhbGUgZW5kcyBpbicsXG4gKiAgICAgLy8gT3RoZXIgdHJhbnNsYXRpb25zLi4uXG4gKiAgIH0sXG4gKiB9KTtcbiAqXG4gKiAvLyBBZGQgY291bnRkb3duIGVsZW1lbnRcbiAqIGNvbnN0ICRjb3VudGRvd24gPSAkKCcjY291bnRkb3duJyk7XG4gKiBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoJzIwMjMtMTItMzFUMjM6NTk6NTknKTtcbiAqIFNhbGVDb3VudGRvd24uYWRkKCRjb3VudGRvd24sIGVuZERhdGUpO1xuICogYGBgXG4gKi9cblxuY29uc3QgU2FsZUNvdW50ZG93biA9IHtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEB0eXBlIHtTZXQ8RWxlbWVudD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBlbGVtZW50czogbmV3IFNldCgpLFxuXG4gICAgLyoqXG4gICAgICogVGltZXIgaW50ZXJ2YWwgSURcbiAgICAgKiBAdHlwZSB7bnVtYmVyfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aW1lcjogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlXG4gICAgICogQHR5cGUge0ludGVyc2VjdGlvbk9ic2VydmVyfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvYnNlcnZlcjogbnVsbCxcblxuICAgIC8qKlxuICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgY291bnRkb3duIGRhdGVcbiAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgZGF0ZURhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkRhdGUnLFxuXG4gICAgLyoqXG4gICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgaW4gdmlld3BvcnQgdmlzaWJpbGl0eVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpblZpZXdwb3J0RGF0YU5hbWU6ICdzYWxlQ291bnRkb3duSW5WaWV3cG9ydCcsXG5cbiAgICAvKipcbiAgICAgKiBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciB0cmFuc2xhdGlvbnMgSlNPTlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0cmFuc2xhdGlvbnNEYXRhTmFtZTogJ3NhbGVDb3VudGRvd25UcmFuc2xhdGlvbnMnLFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0b3JzIGZvciBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7e2VuZExhYmVsOiBzdHJpbmcsIGRheTogc3RyaW5nLCBkYXlWYWx1ZTogc3RyaW5nLCBkYXlMYWJlbDogc3RyaW5nLCBob3VyOiBzdHJpbmcsIGhvdXJWYWx1ZTogc3RyaW5nLCBob3VyTGFiZWw6IHN0cmluZywgbWludXRlOiBzdHJpbmcsIG1pbnV0ZVZhbHVlOiBzdHJpbmcsIG1pbnV0ZUxhYmVsOiBzdHJpbmcsIHNlY29uZDogc3RyaW5nLCBzZWNvbmRWYWx1ZTogc3RyaW5nLCBzZWNvbmRMYWJlbDogc3RyaW5nfX1cbiAgICAgKi9cbiAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgZW5kTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1lbmQtbGFiZWxdJyxcbiAgICAgICAgZGF5OiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF5XScsXG4gICAgICAgIGRheVZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF5LXZhbHVlXScsXG4gICAgICAgIGRheUxhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF5LWxhYmVsXScsXG4gICAgICAgIGhvdXI6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyXScsXG4gICAgICAgIGhvdXJWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWhvdXItdmFsdWVdJyxcbiAgICAgICAgaG91ckxhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24taG91ci1sYWJlbF0nLFxuICAgICAgICBtaW51dGU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGVdJyxcbiAgICAgICAgbWludXRlVmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtdmFsdWVdJyxcbiAgICAgICAgbWludXRlTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtbGFiZWxdJyxcbiAgICAgICAgc2Vjb25kOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kXScsXG4gICAgICAgIHNlY29uZFZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLXZhbHVlXScsXG4gICAgICAgIHNlY29uZExhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLWxhYmVsXScsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIGZvciBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1iYWRnZS1wZXJjZW50XCI+PC91c2U+PC9zdmc+PC9pPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9lbmRcIiBkYXRhLXNhbGUtY291bnRkb3duLWVuZC1sYWJlbD48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX2RheVwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5PjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktbGFiZWw+PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfaG91clwiIGRhdGEtc2FsZS1jb3VudGRvd24taG91cj48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24taG91ci12YWx1ZT48L3NwYW4+PHNwYW4gY2xhc3M9XCJfbGFiZWxcIiBkYXRhLXNhbGUtY291bnRkb3duLWhvdXItbGFiZWw+PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfbWludXRlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGU+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS12YWx1ZT48L3NwYW4+PHNwYW4gY2xhc3M9XCJfbGFiZWxcIiBkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9zZWNvbmRcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZD48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgYCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgdG8gaGlkZSBlbGVtZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBoaWRlQ2xhc3M6ICdfaGlkZScsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHRvIGluZGljYXRlIHNhbGUgaGFzIGVuZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNhbGVFbmRDbGFzczogJ19zYWxlRW5kZWQnLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBhY3RpdmUgY291bnRkb3duXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFjdGl2ZUNsYXNzOiAnX2FjdGl2ZScsXG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGlvbnMgZm9yIGNvdW50ZG93biBsYWJlbHNcbiAgICAgKiBAdHlwZSB7e2VuZF9pbjogc3RyaW5nLCBkYXk6IHN0cmluZywgZGF5czogc3RyaW5nLCBob3VyOiBzdHJpbmcsIGhvdXJzOiBzdHJpbmcsIG1pbnV0ZTogc3RyaW5nLCBtaW51dGVzOiBzdHJpbmcsIHNlY29uZDogc3RyaW5nLCBzZWNvbmRzOiBzdHJpbmd9fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgIGVuZF9pbjogJ0VuZCBpbicsXG4gICAgICAgIGRheTogJ0RheScsXG4gICAgICAgIGRheXM6ICdEYXlzJyxcbiAgICAgICAgaG91cjogJ0hvdXInLFxuICAgICAgICBob3VyczogJ0hvdXJzJyxcbiAgICAgICAgbWludXRlOiAnTWludXRlJyxcbiAgICAgICAgbWludXRlczogJ01pbnV0ZXMnLFxuICAgICAgICBzZWNvbmQ6ICdTZWNvbmQnLFxuICAgICAgICBzZWNvbmRzOiAnU2Vjb25kcycsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZSB0aGUgY291bnRkb3duIHNldHRpbmdzXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZGF0ZURhdGFOYW1lIC0gRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgY291bnRkb3duIGRhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5pblZpZXdwb3J0RGF0YU5hbWUgLSBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuc2VsZWN0b3JzIC0gU2VsZWN0b3JzIGZvciBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZW5kTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZGF5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmRheVZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmRheUxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuaG91clZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5taW51dGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMubWludXRlVmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMubWludXRlTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuc2Vjb25kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLnNlY29uZFZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLnNlY29uZExhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGVtcGxhdGUgLSBUZW1wbGF0ZSBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaGlkZUNsYXNzIC0gQ2xhc3MgbmFtZSB0byBoaWRlIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2FsZUVuZENsYXNzIC0gQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBzYWxlIGhhcyBlbmRlZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmFjdGl2ZUNsYXNzIC0gQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBhY3RpdmUgY291bnRkb3duXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMudHJhbnNsYXRpb25zIC0gVHJhbnNsYXRpb25zIGZvciBjb3VudGRvd24gbGFiZWxzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmVuZF9pblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5kYXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuZGF5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5ob3VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmhvdXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLm1pbnV0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5taW51dGVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLnNlY29uZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5zZWNvbmRzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHh0U2FsZUNvdW50ZG93bkpTT04gLSBKU09OIHN0cmluZyBmb3IgdHJhbnNsYXRpb25zXG4gICAgICovXG4gICAgY29uZmlndXJlKHtcbiAgICAgICAgZGF0ZURhdGFOYW1lLFxuICAgICAgICBpblZpZXdwb3J0RGF0YU5hbWUsXG4gICAgICAgIHNlbGVjdG9ycyxcbiAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgIGhpZGVDbGFzcyxcbiAgICAgICAgc2FsZUVuZENsYXNzLFxuICAgICAgICBhY3RpdmVDbGFzcyxcbiAgICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgICB0eHRTYWxlQ291bnRkb3duSlNPTixcbiAgICB9ID0ge30pIHtcbiAgICAgICAgaWYgKGRhdGVEYXRhTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlRGF0YU5hbWUgPSBkYXRlRGF0YU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5WaWV3cG9ydERhdGFOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmluVmlld3BvcnREYXRhTmFtZSA9IGluVmlld3BvcnREYXRhTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RvcnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JzID0geyAuLi50aGlzLnNlbGVjdG9ycywgLi4uc2VsZWN0b3JzIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoaWRlQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUNsYXNzID0gaGlkZUNsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhbGVFbmRDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5zYWxlRW5kQ2xhc3MgPSBzYWxlRW5kQ2xhc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSBhY3RpdmVDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zID0geyAuLi50aGlzLnRyYW5zbGF0aW9ucywgLi4udHJhbnNsYXRpb25zIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHh0U2FsZUNvdW50ZG93bkpTT04pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UodHh0U2FsZUNvdW50ZG93bkpTT04pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zID0gT2JqZWN0LmtleXMoanNvbi50cmFuc2xhdGlvbnMpLnJlZHVjZSgoX3RyYW5zLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvcnRLZXkgPSBrZXkuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgICAgICAgIF90cmFuc1tzaG9ydEtleV0gPSBqc29uLnRyYW5zbGF0aW9uc1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RyYW5zO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zID0geyAuLi50aGlzLnRyYW5zbGF0aW9ucywgLi4udHJhbnMgfTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgZWxlbWVudCAmIGNvcnJlc3BvbmRpbmcgZGF0ZSB0byB0aGUgY291bnRkb3duIGNvbGxlY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuICAgICAqIEBwYXJhbSB7RGF0ZXxudWxsfSBkYXRlIC0gVGhlIGNvdW50ZG93biBkYXRlLiBJZiBub3QgcHJvdmlkZWQsIGl0IHdpbGwgYmUgZXh0cmFjdGVkIGZyb20gdGhlIGRhdGEgYXR0cmlidXRlIGBkYXRhLXNhbGUtY291bnRkb3duLWRhdGVgXG4gICAgICovXG4gICAgYWRkKCRlbCwgZGF0ZSA9IG51bGwpIHtcbiAgICAgICAgbGV0IHZhbGlkRGF0ZSA9IGRhdGUgfHwgJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUpO1xuICAgICAgICBpZiAodmFsaWREYXRlICYmIHR5cGVvZiB2YWxpZERhdGUgPT09ICdzdHJpbmcnKSB2YWxpZERhdGUgPSBwYXJzZUNvdW50ZG93bkRhdGUodmFsaWREYXRlKTtcbiAgICAgICAgaWYgKCF2YWxpZERhdGUpIHJldHVybjtcbiAgICAgICAgJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUsIHZhbGlkRGF0ZSkuaHRtbCh0aGlzLnRlbXBsYXRlKVxuICAgICAgICAgICAgLmdldCgpLmZvckVhY2goZWwgPT4gdGhpcy5lbGVtZW50cy5hZGQoZWwpKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlKCRlbCk7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZSB0aGUgZWxlbWVudCBmb3IgaW4gdmlld3BvcnQgdmlzaWJpbGl0eSBjaGVja1xuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ic2VydmUoJGVsKSB7XG4gICAgICAgIGlmICghd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICAvLyBhc3N1bWUgZWxlbWVudCBpcyBpbiB2aWV3cG9ydCBpZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAkZWwuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZSBpZiBub3QgYWxyZWFkeSBjcmVhdGVkXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoZW50cnkudGFyZ2V0KS5kYXRhKHRoaXMuaW5WaWV3cG9ydERhdGFOYW1lLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0ludGVyc2VjdGluZycsIGVudHJ5LnRhcmdldCwgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHJvb3Q6IG51bGwsIC8vIERlZmF1bHRzIHRvIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLCAvLyBDYWxsYmFjayBpcyB0cmlnZ2VyZWQgd2hlbiBhbnkgcGFydCBvZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5nZXQoKS5mb3JFYWNoKGVsID0+IHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wIG9ic2VydmluZyB0aGUgZWxlbWVudFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHVub2JzZXJ2ZShlbCkge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci51bm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Vub2JzZXJ2ZScsIGVsKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyBpbiB2aWV3cG9ydCBhbmQgdmlzaWJsZVxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlzVmlzaWJsZUluVmlld3BvcnQoJGVsKSB7XG4gICAgICAgIHJldHVybiAkZWwuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSkgJiYgJGVsLmlzKCc6dmlzaWJsZScpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBzdGFydCBydW5uaW5nIGNvdW50ZG93biBldmVyeSBzZWNvbmRcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy50aW1lciAmJiB0aGlzLmVsZW1lbnRzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMucnVuKCksIDEwMDApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHN0b3AgY291bnRkb3duXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdG9wIGNvdW50ZG93bicpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBydW5uaW5nIGNvdW50ZG93biBwcm9jZXNzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAvLyBjaGVjayBhbmQgc3RvcCBpZiBlbGVtZW50IG5vIGxvbmdlciBleGlzdHMgaW4gRE9NXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoZWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5kZWxldGUoZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9ICRlbC5kYXRhKHRoaXMuZGF0ZURhdGFOYW1lKTtcblxuICAgICAgICAgICAgLy8gc3RvcCBjb3VudGRvd24gaWYgZWxlbWVudCBpcyBub3QgaW4gdmlld3BvcnQgb3Igbm90IHZpc2libGVcbiAgICAgICAgICAgIGlmICghZGF0ZSB8fCAhdGhpcy5pc1Zpc2libGVJblZpZXdwb3J0KCRlbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRlIDw9IG5vdykge1xuICAgICAgICAgICAgICAgIC8vIENvdW50IGRvd24gZGF0ZSBoYXMgcGFzc2VkXG4gICAgICAgICAgICAgICAgJGVsLmFkZENsYXNzKHRoaXMuc2FsZUVuZENsYXNzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmRlbGV0ZShlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSByZW1haW5pbmcgdGltZSAoZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gZGF0ZSAtIG5vdztcbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIGNvbnN0ICRlbmRMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmVuZExhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRkYXkgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5kYXkpO1xuICAgICAgICAgICAgY29uc3QgJGRheVZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5VmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgJGRheUxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5TGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJGhvdXIgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5ob3VyKTtcbiAgICAgICAgICAgIGNvbnN0ICRob3VyVmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5ob3VyVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgJGhvdXJMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmhvdXJMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkbWludXRlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMubWludXRlKTtcbiAgICAgICAgICAgIGNvbnN0ICRtaW51dGVWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZVZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRtaW51dGVMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZUxhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWNvbmQgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5zZWNvbmQpO1xuICAgICAgICAgICAgY29uc3QgJHNlY29uZFZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgJHNlY29uZExhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kTGFiZWwpO1xuXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi4kZWwuZGF0YSh0aGlzLnRyYW5zbGF0aW9uc0RhdGFOYW1lKSB9O1xuXG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3ModGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAkZW5kTGFiZWwuaHRtbCh0cmFuc2xhdGlvbnMuZW5kX2luKTtcbiAgICAgICAgICAgICRkYXlWYWx1ZS50ZXh0KGRheXMpO1xuICAgICAgICAgICAgJGRheUxhYmVsLmh0bWwoZGF5cyA9PT0gMSA/IHRyYW5zbGF0aW9ucy5kYXkgOiB0cmFuc2xhdGlvbnMuZGF5cyk7XG4gICAgICAgICAgICAkZGF5LnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwKTtcbiAgICAgICAgICAgICRob3VyVmFsdWUudGV4dChob3Vycyk7XG4gICAgICAgICAgICAkaG91ckxhYmVsLmh0bWwoaG91cnMgPT09IDEgPyB0cmFuc2xhdGlvbnMuaG91ciA6IHRyYW5zbGF0aW9ucy5ob3Vycyk7XG4gICAgICAgICAgICAkaG91ci50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCk7XG4gICAgICAgICAgICAkbWludXRlVmFsdWUudGV4dChtaW51dGVzKTtcbiAgICAgICAgICAgICRtaW51dGVMYWJlbC5odG1sKG1pbnV0ZXMgPT09IDEgPyB0cmFuc2xhdGlvbnMubWludXRlIDogdHJhbnNsYXRpb25zLm1pbnV0ZXMpO1xuICAgICAgICAgICAgJG1pbnV0ZS50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwKTtcbiAgICAgICAgICAgICRzZWNvbmRWYWx1ZS50ZXh0KHNlY29uZHMpO1xuICAgICAgICAgICAgJHNlY29uZExhYmVsLmh0bWwoc2Vjb25kcyA9PT0gMSA/IHRyYW5zbGF0aW9ucy5zZWNvbmQgOiB0cmFuc2xhdGlvbnMuc2Vjb25kcyk7XG4gICAgICAgICAgICAkc2Vjb25kLnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwICYmIGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhbGVDb3VudGRvd247XG4iLCJleHBvcnQgY29uc3QgYXJpYUtleUNvZGVzID0ge1xuICAgIFJFVFVSTjogMTMsXG4gICAgU1BBQ0U6IDMyLFxuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpbml0UmFkaW9PcHRpb25zIH0gZnJvbSAnLi9yYWRpb09wdGlvbnMnO1xuIiwiaW1wb3J0IHsgYXJpYUtleUNvZGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBzZXRDaGVja2VkUmFkaW9JdGVtID0gKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4KSA9PiB7XG4gICAgaXRlbUNvbGxlY3Rpb24uZWFjaCgoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gJChpdGVtKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gaXRlbUlkeCkge1xuICAgICAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgZmFsc2UpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkaXRlbS5hdHRyKCdhcmlhLWNoZWNrZWQnLCB0cnVlKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgJGl0ZW0udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24gPSAobGFzdEl0ZW1JZHgsIGN1cnJlbnRJZHgpID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGN1cnJlbnRJZHggPiBsYXN0SXRlbUlkeDogcmV0dXJuIDA7XG4gICAgY2FzZSBjdXJyZW50SWR4IDwgMDogcmV0dXJuIGxhc3RJdGVtSWR4O1xuICAgIGRlZmF1bHQ6IHJldHVybiBjdXJyZW50SWR4O1xuICAgIH1cbn07XG5cbmNvbnN0IGhhbmRsZUl0ZW1LZXlEb3duID0gaXRlbUNvbGxlY3Rpb24gPT4gZSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBlO1xuICAgIGNvbnN0IGl0ZW1JZHggPSBpdGVtQ29sbGVjdGlvbi5pbmRleChlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IGxhc3RDb2xsZWN0aW9uSXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhhcmlhS2V5Q29kZXMpLmluY2x1ZGVzKGtleUNvZGUpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5MRUZUOlxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlVQOiB7XG4gICAgICAgIGNvbnN0IHByZXZJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCAtIDEpO1xuICAgICAgICBpdGVtQ29sbGVjdGlvbi5nZXQocHJldkl0ZW1JZHgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlJJR0hUOlxuICAgIGNhc2UgYXJpYUtleUNvZGVzLkRPV046IHtcbiAgICAgICAgY29uc3QgbmV4dEl0ZW1JZHggPSBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24obGFzdENvbGxlY3Rpb25JdGVtSWR4LCBpdGVtSWR4ICsgMSk7XG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChuZXh0SXRlbUlkeCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgc2V0Q2hlY2tlZFJhZGlvSXRlbShpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCArIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiBicmVhaztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoJGNvbnRhaW5lciwgaXRlbVNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgJGl0ZW1Db2xsZWN0aW9uID0gJGNvbnRhaW5lci5maW5kKGl0ZW1TZWxlY3Rvcik7XG5cbiAgICAkY29udGFpbmVyLm9uKCdrZXlkb3duJywgaXRlbVNlbGVjdG9yLCBoYW5kbGVJdGVtS2V5RG93bigkaXRlbUNvbGxlY3Rpb24pKTtcbn07XG4iLCIvLyBpbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi4vd2lzaGxpc3QnOyAvLyBwYXBhdGhlbWVzLWV2ZXZhOiBkaXNhYmxlZFxuaW1wb3J0IHsgaW5pdFJhZGlvT3B0aW9ucyB9IGZyb20gJy4vYXJpYSc7XG5cbmNvbnN0IG9wdGlvbnNUeXBlc01hcCA9IHtcbiAgICBJTlBVVF9GSUxFOiAnaW5wdXQtZmlsZScsXG4gICAgSU5QVVRfVEVYVDogJ2lucHV0LXRleHQnLFxuICAgIElOUFVUX05VTUJFUjogJ2lucHV0LW51bWJlcicsXG4gICAgSU5QVVRfQ0hFQ0tCT1g6ICdpbnB1dC1jaGVja2JveCcsXG4gICAgVEVYVEFSRUE6ICd0ZXh0YXJlYScsXG4gICAgREFURTogJ2RhdGUnLFxuICAgIFNFVF9TRUxFQ1Q6ICdzZXQtc2VsZWN0JyxcbiAgICBTRVRfUkVDVEFOR0xFOiAnc2V0LXJlY3RhbmdsZScsXG4gICAgU0VUX1JBRElPOiAnc2V0LXJhZGlvJyxcbiAgICBTV0FUQ0g6ICdzd2F0Y2gnLFxuICAgIFBST0RVQ1RfTElTVDogJ3Byb2R1Y3QtbGlzdCcsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yKGFyZURlZmF1bHRPcHRpb25zU2V0KSB7XG4gICAgcmV0dXJuIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICBpZiAoYXJlRGVmYXVsdE9wdGlvbnNTZXQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsc0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCkge1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgIC8vIFdpc2hsaXN0LmxvYWQodGhpcy5jb250ZXh0KTsgLy8gcGFwYXRoZW1lcy1ldmV2YTogZGlzYWJsZWRcbiAgICAgICAgdGhpcy5nZXRUYWJSZXF1ZXN0cygpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLmVhY2goKF9fLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICB0aGlzLl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlKHZhbHVlLCB0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUodmFyaWFudERvbU5vZGUsIHZhcmlhbnRUeXBlKSB7XG4gICAgICAgIHN3aXRjaCAodmFyaWFudFR5cGUpIHtcbiAgICAgICAgY2FzZSBvcHRpb25zVHlwZXNNYXAuU0VUX1JBRElPOlxuICAgICAgICBjYXNlIG9wdGlvbnNUeXBlc01hcC5TV0FUQ0g6IHtcbiAgICAgICAgICAgIGluaXRSYWRpb09wdGlvbnMoJCh2YXJpYW50RG9tTm9kZSksICdbdHlwZT1yYWRpb10nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvdyByYWRpbyBidXR0b25zIHRvIGdldCBkZXNlbGVjdGVkXG4gICAgICovXG4gICAgaW5pdFJhZGlvQXR0cmlidXRlcygpIHtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdIGlucHV0W3R5cGU9XCJyYWRpb1wiXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCByYWRpbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHJhZGlvID0gJChyYWRpbyk7XG5cbiAgICAgICAgICAgIC8vIE9ubHkgYmluZCB0byBjbGljayBvbmNlXG4gICAgICAgICAgICBpZiAoJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgJHJhZGlvLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRyYWRpby5kYXRhKCdzdGF0ZScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnLCAkcmFkaW8ucHJvcCgnY2hlY2tlZCcpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcbiAgICAgICAgY29uc3QgaW5TdG9ja0lkcyA9IGRhdGEuaW5fc3RvY2tfYXR0cmlidXRlcztcbiAgICAgICAgY29uc3Qgb3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlID0gdGhpcy5jb250ZXh0Lm91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZTtcbiAgICAgICAgbGV0IG91dE9mU3RvY2tNZXNzYWdlID0gZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgICAgIG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtvdXRPZlN0b2NrTWVzc2FnZX0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2V9KWA7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0QXR0cmlidXRlVmFsdWUnKSwgMTApO1xuXG5cbiAgICAgICAgICAgIGlmIChpblN0b2NrSWRzLmluZGV4T2YoYXR0cklkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGZyYWdtZW50IGlkZW50aWZpZXIgaW4gVVJMIHJlcXVlc3RpbmcgYSBzcGVjaWZpYyB0YWJcbiAgICAgKi9cbiAgICBnZXRUYWJSZXF1ZXN0cygpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyN0YWItJykgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0ICRhY3RpdmVUYWIgPSAkKCcudGFicycpLmhhcyhgW2hyZWY9JyR7d2luZG93LmxvY2F0aW9uLmhhc2h9J11gKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YWJDb250ZW50ID0gJChgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gKTtcblxuICAgICAgICAgICAgaWYgKCRhY3RpdmVUYWIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICRhY3RpdmVUYWIuZmluZCgnLnRhYicpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmhhcyhgW2hyZWY9JyR7d2luZG93LmxvY2F0aW9uLmhhc2h9J11gKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJHRhYkNvbnRlbnQuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSAkcHJvZHVjdFZpZXcgY2FuIGJlIGR5bmFtaWNhbGx5IGluc2VydGVkIHVzaW5nIHJlbmRlcl93aXRoLFxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAkc2NvcGVcbiAgICAgKi9cbiAgICBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJycFdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXNhdmVkXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2Utbm93LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRpbmNyZW1lbnRzOiAkKCcuZm9ybS1maWVsZC0taW5jcmVtZW50cyA6aW5wdXQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXG4gICAgICAgICAgICAkYWRkVG9DYXJ0Rm9ybTogJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICR3aXNobGlzdFZhcmlhdGlvbjogJCgnW2RhdGEtd2lzaGxpc3QtYWRkXSBbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScsICRzY29wZSksXG4gICAgICAgICAgICBzdG9jazoge1xuICAgICAgICAgICAgICAgICRjb250YWluZXI6ICQoJy5mb3JtLWZpZWxkLS1zdG9jaycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbZGF0YS1wcm9kdWN0LXN0b2NrXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2t1OiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC5za3UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGM6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnVwYy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbbmFtZT1xdHlcXFxcW1xcXFxdXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXG4gICAgICAgICAgICAkd2FsbGV0QnV0dG9uczogJCgnW2RhdGEtYWRkLXRvLWNhcnQtd2FsbGV0LWJ1dHRvbnNdJywgJHNjb3BlKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBwcmljaW5nIGVsZW1lbnRzIHRoYXQgd2lsbCBzaG93IHVwIG9ubHkgd2hlbiB0aGUgcHJpY2UgZXhpc3RzIGluIEFQSVxuICAgICAqIEBwYXJhbSB2aWV3TW9kZWxcbiAgICAgKi9cbiAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlVmlldyhkYXRhLCBjb250ZW50ID0gbnVsbCkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG5cbiAgICAgICAgdGhpcy5zaG93TWVzc2FnZUJveChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xuXG4gICAgICAgIGlmIChkYXRhLnByaWNlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEud2VpZ2h0IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdlaWdodC5odG1sKGRhdGEud2VpZ2h0LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdmFyaWF0aW9uX2lkIGlmIGl0IGV4aXN0cyBmb3IgYWRkaW5nIHRvIHdpc2hsaXN0XG4gICAgICAgIGlmIChkYXRhLnZhcmlhbnRJZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3aXNobGlzdFZhcmlhdGlvbi52YWwoZGF0YS52YXJpYW50SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgU0tVIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5za3UpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoZGF0YS5za3UpO1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBVUEMgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLnVwYykge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dChkYXRhLnVwYyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHN0b2NrIHZpZXcgaXMgb24gKENQIHNldHRpbmdzKVxuICAgICAgICBpZiAodmlld01vZGVsLnN0b2NrLiRjb250YWluZXIubGVuZ3RoICYmIHR5cGVvZiBkYXRhLnN0b2NrID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0b2NrIGNvbnRhaW5lciBpcyBoaWRkZW4sIHNob3dcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3KGRhdGEpO1xuXG4gICAgICAgIC8vIElmIEJ1bGsgUHJpY2luZyByZW5kZXJlZCBIVE1MIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzICYmIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0V3JhcHBlciA9ICQoJyNhZGQtdG8tY2FydC13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKGFkZFRvQ2FydFdyYXBwZXIuaXMoJzpoaWRkZW4nKSAmJiBkYXRhLnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICBhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByaWNlID0gcHJpY2UucHJpY2VfcmFuZ2UgP1xuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRoX3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aF90YXguZm9ybWF0dGVkfWBcbiAgICAgICAgICAgICAgICA6IHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZDtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRoVGF4LiRzcGFuLmh0bWwodXBkYXRlZFByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByaWNlID0gcHJpY2UucHJpY2VfcmFuZ2UgP1xuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRob3V0X3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aG91dF90YXguZm9ybWF0dGVkfWBcbiAgICAgICAgICAgICAgICA6IHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZDtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRob3V0VGF4LiRzcGFuLmh0bWwodXBkYXRlZFByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5zYXZlZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGFuIG1lc3NhZ2UgYm94IGlmIGEgbWVzc2FnZSBpcyBwYXNzZWRcbiAgICAgKiBIaWRlIHRoZSBib3ggaWYgdGhlIG1lc3NhZ2UgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICAgKi9cbiAgICBzaG93TWVzc2FnZUJveChtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVXYWxsZXRCdXR0b25zVmlldyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgY29uc3QgaXNWYWxpZEZvcm0gPSB2aWV3TW9kZWwuJGFkZFRvQ2FydEZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGlzVmFsaWRGb3JtICYmIGRhdGEucHVyY2hhc2FibGUgJiYgZGF0YS5pbnN0b2NrKTtcbiAgICB9XG5cbiAgICB0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShzaG91bGRTaG93KSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICBpZiAoc2hvdWxkU2hvdykge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3YWxsZXRCdXR0b25zLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmhpZGUoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGluIGEgc2VsZWN0IGRyb3Bkb3duLCBzZWxlY3QgdGhlIGZpcnN0IG9wdGlvbiAoTUVSQy02MzkpXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHNCYXNlLCB7IG9wdGlvbkNoYW5nZURlY29yYXRvciB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvZXlldmEvaW1hZ2UtZ2FsbGVyeSc7IC8vIHBhcGF0aGVtZXMtZXlldmEgZWRpdGVkXG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IGFsZXJ0TW9kYWwsIHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCB7IGlzRW1wdHksIGlzUGxhaW5PYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5pbXBvcnQgeyBub3JtYWxpemVGb3JtRGF0YSB9IGZyb20gJy4vdXRpbHMvYXBpJztcbmltcG9ydCB7IGlzQnJvd3NlcklFLCBjb252ZXJ0SW50b0FycmF5IH0gZnJvbSAnLi91dGlscy9pZS1oZWxwZXJzJztcbmltcG9ydCBiYW5uZXJVdGlscyBmcm9tICcuL3V0aWxzL2Jhbm5lci11dGlscyc7XG5pbXBvcnQgY3VycmVuY3lTZWxlY3RvciBmcm9tICcuLi9nbG9iYWwvY3VycmVuY3ktc2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0LCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXSAubG9hZGluZ092ZXJsYXknKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkgPSBuZXcgSW1hZ2VHYWxsZXJ5KCQoJ1tkYXRhLWltYWdlLWdhbGxlcnldJywgdGhpcy4kc2NvcGUpKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB0aGlzLmxpc3RlblF1YW50aXR5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuJHN3YXRjaE9wdGlvbk1lc3NhZ2UgPSAkKCcuc3dhdGNoLW9wdGlvbi1tZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlID0ge307XG4gICAgICAgIHRoaXMuc3dhdGNoR3JvdXBJZExpc3QgPSAkKCdbaWRePVwic3dhdGNoR3JvdXBcIl0nKS5tYXAoKF8sIGdyb3VwKSA9PiAkKGdyb3VwKS5hdHRyKCdpZCcpKTtcbiAgICAgICAgdGhpcy5zdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVNlbGVjdG9yKCk7XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCAkc2NvcGUpO1xuXG4gICAgICAgIGlmICgkZm9ybVswXS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0uZmluZCgnaW5wdXQjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JyksXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuICAgICAgICBjb25zdCBoYXNPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5odG1sKCkudHJpbSgpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuICAgICAgICBjb25zdCAkcHJvZHVjdFN3YXRjaEdyb3VwID0gJCgnW2lkKj1cImF0dHJpYnV0ZV9zd2F0Y2hcIl0nLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0U3dhdGNoTGFiZWxzID0gJCgnLmZvcm0tb3B0aW9uLXN3YXRjaCcsICRmb3JtKTtcbiAgICAgICAgY29uc3QgcGxhY2VTd2F0Y2hMYWJlbEltYWdlID0gKF8sIGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uSW1hZ2UgPSAkKCcuZm9ybS1vcHRpb24tZXhwYW5kZWQnLCAkKGxhYmVsKSk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25JbWFnZVdpZHRoID0gJG9wdGlvbkltYWdlLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuZGVkT3B0aW9uSW1hZ2VPZmZzZXRMZWZ0ID0gNTU7XG4gICAgICAgICAgICBjb25zdCB7IHJpZ2h0IH0gPSBsYWJlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyID0gd2luZG93LnNjcmVlbi53aWR0aCAtIHJpZ2h0O1xuICAgICAgICAgICAgY29uc3Qgc2hpZnRWYWx1ZSA9IG9wdGlvbkltYWdlV2lkdGggLSBlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlcjtcblxuICAgICAgICAgICAgaWYgKGVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyIDwgKG9wdGlvbkltYWdlV2lkdGggKyBleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCkpIHtcbiAgICAgICAgICAgICAgICAkb3B0aW9uSW1hZ2UuY3NzKCdsZWZ0JywgYCR7c2hpZnRWYWx1ZSA+IDAgPyAtc2hpZnRWYWx1ZSA6IHNoaWZ0VmFsdWV9cHhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkVG9DYXJ0VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgJC5lYWNoKCRwcm9kdWN0U3dhdGNoTGFiZWxzLCBwbGFjZVN3YXRjaExhYmVsSW1hZ2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29udGV4dC5zaG93U3dhdGNoTmFtZXMpIHtcbiAgICAgICAgICAgIHRoaXMuJHN3YXRjaE9wdGlvbk1lc3NhZ2UucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0U3dhdGNoR3JvdXAub24oJ2NoYW5nZScsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoR3JvdXBFbGVtZW50ID0gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkKHRhcmdldCksICQoc3dhdGNoR3JvdXBFbGVtZW50KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJC5lYWNoKCRwcm9kdWN0U3dhdGNoR3JvdXAsIChfLCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoR3JvdXBFbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5pcygnOmNoZWNrZWQnKSkgdGhpcy5zaG93U3dhdGNoTmFtZU9uT3B0aW9uKCQoZWxlbWVudCksICQoc3dhdGNoR3JvdXBFbGVtZW50KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCAkZm9ybVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXG4gICAgICAgIC8vIG9yIGhhdmUgZGVmYXVsdCB2YXJpYW50IHByb3BlcnRpZXMgdGhhdCBjaGFuZ2UgdGhlIHZpZXdcbiAgICAgICAgaWYgKChpc0VtcHR5KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSkgfHwgaGFzRGVmYXVsdE9wdGlvbnMpICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25DaGFuZ2VDYWxsYmFjayA9IG9wdGlvbkNoYW5nZURlY29yYXRvci5jYWxsKHRoaXMsIGhhc0RlZmF1bHRPcHRpb25zKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZSgkcHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCBvcHRpb25DaGFuZ2VDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICBiYW5uZXJVdGlscy5kaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudChwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwcmV2aWV3TW9kYWwnKVswXTtcbiAgICB9XG5cbiAgICByZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLmFkZChbe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdID4gLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLm51bWJlcnNPbmx5KHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5wcm9kdWN0UXVhbnRpdHlFcnJvck1lc3NhZ2UsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3I7XG4gICAgfVxuXG4gICAgc3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3dhdGNoR3JvdXBJZExpc3QubGVuZ3RoICYmIGlzRW1wdHkodGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLnN3YXRjaEdyb3VwSWRMaXN0LmVhY2goKF8sIHN3YXRjaEdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW3N3YXRjaEdyb3VwSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW3N3YXRjaEdyb3VwSWRdID0gJChgIyR7c3dhdGNoR3JvdXBJZH0gfiAuc3dhdGNoLW9wdGlvbi1tZXNzYWdlYCkudGV4dCgpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFByb2R1Y3RWYXJpYW50KCkge1xuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyksIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBvcHRpb25MYWJlbC5zcGxpdCgnOicpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkID0gb3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcblxuICAgICAgICAgICAgaWYgKCh0eXBlID09PSAnaW5wdXQtZmlsZScgfHwgdHlwZSA9PT0gJ2lucHV0LXRleHQnIHx8IHR5cGUgPT09ICdpbnB1dC1udW1iZXInKSAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGV4dGFyZWEnICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2F0aXNmaWVkID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkuZXZlcnkoKHNlbGVjdCkgPT4gc2VsZWN0LnNlbGVjdGVkSW5kZXggIT09IDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzU2F0aXNmaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5tYXAoKHgpID0+IHgudmFsdWUpLmpvaW4oJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYW50c2xpc3QgPSBjb252ZXJ0SW50b0FycmF5KHZhbHVlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQgPSBpbnB0ID0+IGlucHQuZGF0YXNldC5wcm9kdWN0QXR0cmlidXRlVmFsdWUgPT09IGNoZWNrZWQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdFZhcmlhbnRzbGlzdC5maWx0ZXIobWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dClbMF07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuaW5uZXJUZXh0LnRyaW0oKSA6IGNoZWNrZWQubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3dhdGNoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5jaGlsZHJlblswXSA6IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHByb2R1Y3RWYXJpYW50ID0gdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IDAgPyBvcHRpb25zLnNvcnQoKS5qb2luKCcsICcpIDogJ3Vuc2F0aXNmaWVkJztcbiAgICAgICAgY29uc3QgdmlldyA9ICQoJy5wcm9kdWN0VmlldycpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XG4gICAgICAgICAgICBpZiAodmlldy5hdHRyKCdkYXRhLWV2ZW50LXR5cGUnKSkge1xuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlldy5maW5kKCcucHJvZHVjdFZpZXctdGl0bGUnKVswXS5pbm5lclRleHQucmVwbGFjZSgvXCIvZywgJ1xcXFwkJicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPVwiJHtwcm9kdWN0TmFtZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHdpbmRvdyBpcyBiZWluZyBydW4gaW5zaWRlIGFuIGlmcmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzUnVubmluZ0luSWZyYW1lKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIHByb2R1Y3Qgb3B0aW9ucyBjaGFuZ2VzXG4gICAgICpcbiAgICAgKi9cbiAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG5cbiAgICAgICAgLy8gRG8gbm90IHRyaWdnZXIgYW4gYWpheCByZXF1ZXN0IGlmIGl0J3MgYSBmaWxlIG9yIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcocHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGZvcm0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRleHQgPSAkZm9ybS5wYXJlbnRzKCcucHJvZHVjdFZpZXcnKS5maW5kKCcucHJvZHVjdFZpZXctaW5mbycpO1xuICAgICAgICAgICAgICAgIG1vZGFsRmFjdG9yeSgnW2RhdGEtcmV2ZWFsXScsIHsgJGNvbnRleHQgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RPcHRpb25zQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBwcm9kdWN0QXR0cmlidXRlc0RhdGEsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpZiB0aGlzIHNldHRpbmcgaXMgZW5hYmxlZCBpbiBQYWdlIEJ1aWxkZXJcbiAgICAgKiBzaG93IG5hbWUgZm9yIHN3YXRjaCBvcHRpb25cbiAgICAgKi9cbiAgICBzaG93U3dhdGNoTmFtZU9uT3B0aW9uKCRzd2F0Y2gsICRzd2F0Y2hHcm91cCkge1xuICAgICAgICBjb25zdCBzd2F0Y2hOYW1lID0gJHN3YXRjaC5hdHRyKCdhcmlhLWxhYmVsJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVN3YXRjaEdyb3VwSWQgPSAkc3dhdGNoR3JvdXAuYXR0cignYXJpYS1sYWJlbGxlZGJ5Jyk7XG4gICAgICAgIGNvbnN0ICRzd2F0Y2hPcHRpb25NZXNzYWdlID0gJChgIyR7YWN0aXZlU3dhdGNoR3JvdXBJZH0gfiAuc3dhdGNoLW9wdGlvbi1tZXNzYWdlYCk7XG5cbiAgICAgICAgJCgnW2RhdGEtb3B0aW9uLXZhbHVlXScsICRzd2F0Y2hHcm91cCkudGV4dChzd2F0Y2hOYW1lKTtcbiAgICAgICAgJHN3YXRjaE9wdGlvbk1lc3NhZ2UudGV4dChgJHt0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZVthY3RpdmVTd2F0Y2hHcm91cElkXX0gJHtzd2F0Y2hOYW1lfWApO1xuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRzd2F0Y2hPcHRpb25NZXNzYWdlLCAnc3RhdHVzJywgJ2Fzc2VydGl2ZScpO1xuICAgIH1cblxuICAgIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiBhcmlhTGl2ZVN0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAhISRlbGVtZW50LnBhcmVudHMoJy5xdWlja1ZpZXcnKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSkge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChpbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxuICAgICAgICAgICAgICAgIHsgJzF4JzogdGhpcy5jb250ZXh0Lnpvb21TaXplIH0sXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIHpvb20gc2l6ZSB1c2VkIGZvciBkYXRhLXpvb20taW1hZ2UgaW5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LXZpZXcuaHRtbFxuXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG5cbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQucHJvZHVjdFNpemUgfSxcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggZmFsbGJhY2sgaW1hZ2Ugc2l6ZSB1c2VkIGZvciB0aGUgbWFpbiBwcm9kdWN0IGltYWdlIGluXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcblxuICAgICAgICAgICAgICAgICAgICBOb3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIGltYWdlIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHNyY3NldFxuXG4gICAgICAgICAgICAgICAgICAgIEFsc28gbm90ZSB0aGF0IGdldFNyY3NldCByZXR1cm5zIGEgc2ltcGxlIHNyYyBzdHJpbmcgd2hlbiBleGFjdGx5IG9uZSBzaXplIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChpbWFnZS5kYXRhKTtcblxuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuc2V0QWx0ZXJuYXRlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5yZXN0b3JlSW1hZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIGFjdGlvbiB3aGVuIHRoZSBzaG9wcGVyIGNsaWNrcyBvbiArIC8gLSBmb3IgcXVhbnRpdHlcbiAgICAgKlxuICAgICAqL1xuICAgIGxpc3RlblF1YW50aXR5Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBidXR0b24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0O1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNaW4gPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNYXggPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuXG4gICAgICAgICAgICBsZXQgcXR5ID0gZm9ybXMubnVtYmVyc09ubHkoJGlucHV0LnZhbCgpKSA/IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApIDogcXVhbnRpdHlNaW47XG4gICAgICAgICAgICAvLyBJZiBhY3Rpb24gaXMgaW5jcmVtZW50aW5nXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgICAgICBxdHkgPSBmb3Jtcy52YWxpZGF0ZUluY3JlYXNlQWdhaW5zdE1heEJvdW5kYXJ5KHF0eSwgcXVhbnRpdHlNYXgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChxdHkgPiAxKSB7XG4gICAgICAgICAgICAgICAgcXR5ID0gZm9ybXMudmFsaWRhdGVEZWNyZWFzZUFnYWluc3RNaW5Cb3VuZGFyeShxdHksIHF1YW50aXR5TWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiBpbnB1dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiRpbnB1dC52YWwocXR5KTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0ZXh0XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJHRleHQudGV4dChxdHkpO1xuICAgICAgICAgICAgLy8gcGVyZm9ybSB2YWxpZGF0aW9uIGFmdGVyIHVwZGF0aW5nIHByb2R1Y3QgcXVhbnRpdHlcbiAgICAgICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQcmV2ZW50IHRyaWdnZXJpbmcgcXVhbnRpdHkgY2hhbmdlIHdoZW4gcHJlc3NpbmcgZW50ZXJcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2tleXByZXNzJywgJy5mb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIGV2ZW50LndoaWNoLCB0aGVuIHVzZSBldmVudC53aGljaCwgb3RoZXJ3aXNlIHVzZSBldmVudC5rZXlDb2RlXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcbiAgICAgICAgICAgIGlmICh4ID09PSAxMykge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdrZXl1cCcsICcuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEFkZCBhIHByb2R1Y3QgdG8gY2FydFxuICAgICAqXG4gICAgICovXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0QnRuID0gJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICQoZXZlbnQudGFyZ2V0KSk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQnRuVmFsID0gJGFkZFRvQ2FydEJ0bi52YWwoKTtcbiAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkYWRkVG9DYXJ0QnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XG5cbiAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKG5vcm1hbGl6ZUZvcm1EYXRhKG5ldyBGb3JtRGF0YShmb3JtKSksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW5jeVNlbGVjdG9yKHJlc3BvbnNlLmRhdGEuY2FydF9pZCk7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gR3VhcmQgc3RhdGVtZW50XG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRhZGRUb0NhcnRCdG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0TW9kYWwoKS4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkYWRkVG9DYXJ0QnRuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9wZW4gcHJldmlldyBtb2RhbCBhbmQgdXBkYXRlIGNvbnRlbnRcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5hZGRDbGFzcygnYXBwbGUtcGF5LXN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGFkZFRvQ2FydEJ0bikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJHByZU1vZGFsRm9jdXNlZEVsID0gJGFkZFRvQ2FydEJ0bjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRDb250ZW50KHRoaXMucHJldmlld01vZGFsLCByZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vIG1vZGFsLCByZWRpcmVjdCB0byB0aGUgY2FydCBwYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8IHRoaXMuY29udGV4dC51cmxzLmNhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRhZGRUb0NhcnRCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjYXJ0IGNvbnRlbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvcHJldmlldycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0OiBjYXJ0SXRlbUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gdXJsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3RUbyh1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xuICAgICAgICAgICAgd2luZG93LnRvcC5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYXJ0IGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kYWx9IG1vZGFsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhcnRJdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgdXBkYXRlQ2FydENvbnRlbnQobW9kYWwsIGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGNvdW50ZXJcbiAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRRdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgbW9kYWwuJGNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRDb3VudGVyID0gJCgnLm5hdlVzZXItYWN0aW9uIC5jYXJ0LWNvdW50Jyk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0UXVhbnRpdHkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9tb3Rpb25CYW5uZXIgPSAkKCdbZGF0YS1wcm9tb3Rpb24tYmFubmVyXScpO1xuICAgICAgICAgICAgY29uc3QgJGJhY2tUb1Nob3BwcGluZ0J0biA9ICQoJy5wcmV2aWV3Q2FydENoZWNrb3V0ID4gW2RhdGEtcmV2ZWFsLWNsb3NlXScpO1xuICAgICAgICAgICAgY29uc3QgJG1vZGFsQ2xvc2VCdG4gPSAkKCcjcHJldmlld01vZGFsID4gLm1vZGFsLWNsb3NlJyk7XG4gICAgICAgICAgICBjb25zdCBiYW5uZXJVcGRhdGVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0Q29udGFpbmVyID0gJCgnI21haW4tY29udGVudCA+IC5jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICRwcm9kdWN0Q29udGFpbmVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IHBkcC11cGRhdGVcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAkKCcubG9hZGluZ092ZXJsYXkucGRwLXVwZGF0ZScsICRwcm9kdWN0Q29udGFpbmVyKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJGNhcnRDb3VudGVyLmFkZENsYXNzKCdjYXJ0LWNvdW50LS1wb3NpdGl2ZScpO1xuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkcHJvbW90aW9uQmFubmVyLmxlbmd0aCAmJiAkYmFja1RvU2hvcHBwaW5nQnRuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICRiYWNrVG9TaG9wcHBpbmdCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgJG1vZGFsQ2xvc2VCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpO1xuICAgICAgICB0aGlzLnNob3dQcm9kdWN0SW1hZ2UoZGF0YS5pbWFnZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCkge1xuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YUl0ZW1zID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0RGV0YWlscyA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgZm9ybURhdGFJdGVtIG9mIGZvcm1EYXRhSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGZvcm1EYXRhSXRlbTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwcm9kdWN0X2lkJykge1xuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLnByb2R1Y3RJZCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAncXR5W10nKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMucXVhbnRpdHkgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvYXR0cmlidXRlLykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0T3B0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogTnVtYmVyKG5hbWUubWF0Y2goL1xcZCsvZylbMF0pLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMgPSBwcm9kdWN0RGV0YWlscz8ub3B0aW9uU2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFsuLi5wcm9kdWN0RGV0YWlscy5vcHRpb25TZWxlY3Rpb25zLCBwcm9kdWN0T3B0aW9uXVxuICAgICAgICAgICAgICAgICAgICA6IFtwcm9kdWN0T3B0aW9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RVcGRhdGUnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7IHByb2R1Y3REZXRhaWxzIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRlU2VsZWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLmVhY2goKGksIHNjb3BlKSA9PiB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVEYXlzKGRhdGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aFNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbbW9udGhdXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5U2VsZWN0b3IgPSBkYXRlT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lJD1cIltkYXldXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhclNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbeWVhcl1cIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KG1vbnRoU2VsZWN0b3IudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoeWVhclNlbGVjdG9yLnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgbGV0IGRheXNJbk1vbnRoO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4obW9udGgpICYmICFOdW1iZXIuaXNOYU4oeWVhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9ICgoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMCkgPyAyOSA6IDI4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogY2FzZSA2OiBjYXNlIDk6IGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9IDMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9IDMxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZGF5ID0gMjk7IGRheSA8PSAzMTsgZGF5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZGF5U2VsZWN0b3IucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtkYXl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXkgPD0gZGF5c0luTW9udGggJiYgIW9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5U2VsZWN0b3Iub3B0aW9ucy5hZGQobmV3IE9wdGlvbihkYXksIGRheSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRheSA+IGRheXNJbk1vbnRoICYmIG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKHNjb3BlKS5vbignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlT3B0aW9uID0gZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1kYXRlXScpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURheXMoZGF0ZU9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPWRhdGVdJykuZm9yRWFjaCgoZGF0ZU9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZURheXMoZGF0ZU9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYW55IGVtcHR5IHN0cmluZyB2YWx1ZXMgZnJvbSB0aGUgZm9ybURhdGFcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiovXG5leHBvcnQgY29uc3QgZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSA9IGZvcm1EYXRhID0+IHtcbiAgICBjb25zdCByZXMgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKHZhbCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjcyOTkyL2FqYXgtcmVxdWVzdC1mYWlscy13aGVuLXNlbmRpbmctZm9ybWRhdGEtaW5jbHVkaW5nLWVtcHR5LWZpbGUtaW5wdXQtaW4tc2FmYXJpXG4gKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtID0gZm9ybURhdGEgPT4ge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoISh2YWwgaW5zdGFuY2VvZiBGaWxlKSB8fCB2YWwubmFtZSB8fCB2YWwuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHJlcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgZW1wdHkgc3RyaW5nIHZhbHVlcyBhbmQgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybURhdGFcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUZvcm1EYXRhID0gZm9ybURhdGEgPT4gZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybShmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpKTtcbiIsImltcG9ydCB7IGlzQnJvd3NlcklFIH0gZnJvbSAnLi9pZS1oZWxwZXJzJztcblxuY29uc3QgYmFubmVyVXRpbHMgPSB7XG4gICAgZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQ6IChwcm9kdWN0QXR0cmlidXRlcykgPT4ge1xuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlIHx8IGlzQnJvd3NlcklFKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHByaWNlID0gMDtcblxuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLnByaWNlX3JhbmdlKSB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhfdGF4LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdiaWdjb21tZXJjZS5wcm9kdWN0cHJpY2VjaGFuZ2UnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYmFubmVyVXRpbHM7XG4iLCJleHBvcnQgY29uc3QgaXNCcm93c2VySUUgPSAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRJbnRvQXJyYXkgPSBjb2xsZWN0aW9uID0+IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbGxlY3Rpb24pO1xuIiwiaW1wb3J0ICdlYXN5em9vbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGdhbGxlcnkpIHtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1tYWluXScpO1xuICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpO1xuICAgICAgICB0aGlzLiRzZWxlY3RhYmxlSW1hZ2VzID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHt9O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLnNldEltYWdlWm9vbSgpO1xuICAgIH1cblxuICAgIHNldE1haW5JbWFnZShpbWdPYmopIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7IC4uLmltZ09iaiB9O1xuXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKCk7XG4gICAgfVxuXG4gICAgc2V0QWx0ZXJuYXRlSW1hZ2UoaW1nT2JqKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVkSW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuZmluZCgnaW1nJykuYXR0cignc3JjJyksXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuYXR0cignZGF0YS16b29tLWltYWdlJyksXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiB0aGlzLiRtYWluSW1hZ2UuZmluZCgnaW1nJykuYXR0cignc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6IHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHJlc3RvcmVJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UodGhpcy5zYXZlZEltYWdlKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNhdmVkSW1hZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3ROZXdJbWFnZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaW1nT2JqID0ge1xuICAgICAgICAgICAgbWFpbkltYWdlVXJsOiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsJyksXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsJyksXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICAgICAgbWFpbkltYWdlQWx0OiAkdGFyZ2V0LmNoaWxkcmVuKCkuZmlyc3QoKS5hdHRyKCdhbHQnKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoaW1nT2JqKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3dhcE1haW5JbWFnZSgpIHtcbiAgICAgICAgY29uc3QgaXNCcm93c2VySUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdUcmlkZW50Jyk7XG5cbiAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLnN3YXAoXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy4kbWFpbkltYWdlLmF0dHIoe1xuICAgICAgICAgICAgJ2RhdGEtem9vbS1pbWFnZSc6IHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZC5hdHRyKHtcbiAgICAgICAgICAgIGFsdDogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZUFsdCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzQnJvd3NlcklFKSB7XG4gICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlc0lFID0ge1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgke3RoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybH0pYCxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbic6ICdjb250ZW50LWJveCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb250YWluJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZC5jc3MoZmFsbGJhY2tTdHlsZXNJRSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltYWdlKCkge1xuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSAkKCcucHJvZHVjdFZpZXctaW1hZ2UnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gJGltYWdlQ29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICRpbWFnZUNvbnRhaW5lci53aWR0aCgpO1xuXG4gICAgICAgIGNvbnN0ICRpbWFnZSA9IHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS4kem9vbTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gJGltYWdlLmhlaWdodCgpO1xuICAgICAgICBjb25zdCB3aWR0aCA9ICRpbWFnZS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChoZWlnaHQgPCBjb250YWluZXJIZWlnaHQgfHwgd2lkdGggPCBjb250YWluZXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEltYWdlWm9vbSgpIHtcbiAgICAgICAgdGhpcy5lYXN5em9vbSA9IHRoaXMuJG1haW5JbWFnZS5lYXN5Wm9vbSh7XG4gICAgICAgICAgICBvblNob3c6ICgpID0+IHRoaXMuY2hlY2tJbWFnZSgpLFxuICAgICAgICAgICAgZXJyb3JOb3RpY2U6ICcnLFxuICAgICAgICAgICAgbG9hZGluZ05vdGljZTogJycsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdJbWFnZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfaW5oZXJpdHNMb29zZSIsImNvbnN0cnVjdG9yIiwiX3NldFByb3RvdHlwZU9mIiwibXVzdGFjaGUiLCJjcmVhdGVGb2N1c1RyYXAiLCJ0b29scyIsIkNvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IiwiREVGQVVMVF9TVEVQIiwiSW1hZ2VHYWxsZXJ5TW9kYWwiLCJpbWFnZUdhbGxlcnkiLCIkZ2FsbGVyeSIsIm1vZGFsVGVtcGxhdGUiLCIkYm9keSIsIiQiLCJjcmVhdGVNb2RhbCIsIl9wcm90byIsImJpbmRFdmVudHMiLCJfdGhpcyIsImZpbmQiLCJvZmYiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkYSIsImN1cnJlbnRUYXJnZXQiLCJpbWFnZVVybCIsImRhdGEiLCJpbWFnZVNyY3NldCIsInpvb21JbWFnZVVybCIsInZpZGVvSWQiLCJzdGVwIiwiY2xvc2VzdCIsIk51bWJlciIsInNwbGl0Iiwib3Blbk1vZGFsIiwiJGdhbGxlcnlNb2RhbCIsImNsb3NlTW9kYWwiLCJrZXkiLCJpcyIsInRhcmdldCIsInNldE1haW5JbWFnZSIsInNldE1haW5WaWRlbyIsInRvdGFsU3RlcCIsInNldE1haW4zNjAiLCJwcmV2aW91czM2MFN0ZXAiLCJuZXh0MzYwU3RlcCIsInBsYXkzNjAiLCJwYXVzZTM2MCIsImRlc3Ryb3lNb2RhbCIsInJlbW92ZSIsIl8kbWFpbkltYWdlTGluayRnZXQiLCIkbWFpbkltYWdlTGluayIsIiRtYWluSW1hZ2UiLCJjbG9uZSIsInJlbW92ZUF0dHIiLCJhdHRyIiwibWFpbkltYWdlTGlua0VsZW1lbnQiLCJnZXQiLCJvdXRlckhUTUwiLCJuYW1lIiwidGV4dCIsInZpZGVvc0xhYmVsIiwiaW1hZ2VzMzYwTGFiZWwiLCJpbWFnZXNMYWJlbCIsInZpZGVvcyIsIm1hcCIsImxpIiwiXyQkZmluZCRjbG9uZSRnZXQiLCJsaW5rRWxlbWVudCIsImltYWdlczM2MCIsIl8kZWwkZ2V0IiwiJGVsIiwiaW1hZ2VzIiwiZmlsdGVyIiwiXyRhJGdldCIsInJlbmRlciIsImhpZGUiLCJhcHBlbmRUbyIsImluaXRJbWFnZVpvb20iLCJmb2N1c1RyYXAiLCJlc2NhcGVEZWFjdGl2YXRlcyIsInJldHVybkZvY3VzT25EZWFjdGl2YXRlIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJfdGhpczIiLCIkbGFzdEFjdGl2ZUVsZW1lbnQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhZGRDbGFzcyIsIiRtYWluSW1nIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiYWN0aXZhdGUiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsIl90aGlzMyIsImhpZGVNYWluVmlkZW8iLCJoaWRlMzYwVUkiLCJkZWFjdGl2YXRlIiwibWFpbkltYWdlVXJsIiwibWFpbkltYWdlU3Jjc2V0Iiwic2hvd01haW5JbWFnZSIsInNldEFjdGl2ZVRodW1iIiwic3dhcE1haW5JbWFnZSIsImhpZGVNYWluSW1hZ2UiLCJfaSIsIiRpbWFnZUNvbnRhaW5lciIsImVhc3l6b29tIiwic3dhcCIsImlzQnJvd3NlcklFIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5jbHVkZXMiLCJmYWxsYmFja1N0eWxlc0lFIiwiY3NzIiwiY2hlY2tJbWFnZSIsImNvbnRhaW5lckhlaWdodCIsImhlaWdodCIsImNvbnRhaW5lcldpZHRoIiwid2lkdGgiLCIkaW1hZ2UiLCIkem9vbSIsIl90aGlzNCIsImVhc3lab29tIiwib25TaG93IiwiZXJyb3JOb3RpY2UiLCJsb2FkaW5nTm90aWNlIiwic2hvd01haW5WaWRlbyIsInNyYyIsInNob3czNjBVSSIsInN3YXBNYWluMzYwIiwic2V0MzYwQ3VycmVudFN0ZXAiLCJjdXJyZW50U3RlcCIsInRvdGFsIiwiX3RoaXM1IiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsMzYwIiwic2V0SW50ZXJ2YWwiLCJDYXJkSW1hZ2VHYWxsZXJ5TW9kYWwiLCJfSW1hZ2VHYWxsZXJ5TW9kYWwyIiwiJHNjb3BlIiwiX3RlbXAiLCJfdGhpczYiLCJfcmVmIiwicHJvZHVjdElkIiwiZ3JhcGhRTFRva2VuIiwiem9vbVNpemUiLCJwcm9kdWN0U2l6ZSIsInRodW1iU2l6ZSIsInR4dFZpZGVvc0xhYmVsIiwidHh0SW1hZ2VzMzYwTGFiZWwiLCJ0eHRJbWFnZXNMYWJlbCIsImxvYWRpbmdNb2RhbFRlbXBsYXRlIiwiX3Byb3RvMiIsIm9wZW5Mb2FkaW5nTW9kYWwiLCJfb3BlbkxvYWRpbmdNb2RhbCIsIl9jYWxsZWUiLCJfY29udGV4dCIsImxvYWRNb2RhbCIsIl9sb2FkTW9kYWwiLCJfY2FsbGVlMiIsIm1haW5JbWFnZSIsIl9jb250ZXh0MiIsImZldGNoUHJvZHVjdCIsImltYWdlIiwiaXNEZWZhdWx0IiwiZ2V0U3Jjc2V0IiwidXJsVGVtcGxhdGUiLCJ6b29tVXJsIiwidXJsIiwidGh1bWJuYWlsVXJsIiwiYWx0VGV4dCIsInZpZGVvIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiaHRtbCIsIl90ZW1wMiIsIl90aGlzNyIsIl9yZWYyIiwiX3JlZjIkZmlyc3RWaWRlbyIsImZpcnN0VmlkZW8iLCJfcmVmMiRmaXJzdCIsImZpcnN0MzYwIiwiZmlyc3QiLCJfZmV0Y2hQcm9kdWN0IiwiX2NhbGxlZTMiLCJfdGhpcyR6b29tU2l6ZSRzcGxpdCQiLCJ6b29tV2lkdGgiLCJ6b29tSGVpZ2h0IiwiX3RoaXMkcHJvZHVjdFNpemUkc3BsIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiX3RoaXMkdGh1bWJTaXplJHNwbGl0IiwidGh1bWJXaWR0aCIsInRodW1iSGVpZ2h0IiwicmVzcCIsIl9yZWYzIiwiX2NvbnRleHQzIiwiYWpheCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInZhcmlhYmxlcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwieGhyRmllbGRzIiwid2l0aENyZWRlbnRpYWxzIiwic2l0ZSIsInByb2R1Y3QiLCJlZGdlcyIsIl9yZWY0Iiwibm9kZSIsIl9yZWY1IiwiY3VzdG9tRmllbGRzIiwiX3JlZjYiLCJfcmVmNyIsIkltYWdlR2FsbGVyeSIsIl9Db3JuZXJzdG9uZUltYWdlR2FsbCIsIl90aGlzOCIsImltYWdlR2FsbGVyeU1vZGFsIiwiX3Byb3RvMyIsImRlZmF1bHQiLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2NyZWF0ZUNsYXNzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJ1dGlscyIsIkNvcm5lcnN0b25lUHJvZHVjdERldGFpbHMiLCJhbGVydE1vZGFsIiwic2hvd0FsZXJ0TW9kYWwiLCJNb2RhbEV2ZW50cyIsImZpeEZvcm1FbGVtZW50VW5pcXVlSWRzIiwiY3VycmVuY3lGb3JtYXQiLCJTYWxlQ291bnRkb3duIiwiREVCVUdfTE9HIiwibm9ybWFsaXplT3B0aW9uU3RyaW5nIiwicyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImVxdWFsT3B0aW9uU3RyaW5nIiwiYiIsImFyZUFycmF5c0VxdWFsVW5vcmRlcmVkIiwiYXJyMSIsImFycjIiLCJfYXJyMSIsInNsaWNlIiwic29ydCIsIl9hcnIyIiwiZXZlcnkiLCJpbmRleCIsImNhY2hlZFNldHRpbmdzIiwiaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQiLCJfeCIsIl94MiIsIl9oYW5kbGVQcm9taXNlc1dpdGhMaW1pdCIsIl9jYWxsZWU3IiwicHJvbWlzZXMiLCJsaW1pdCIsInJlc3VsdHMiLCJleGVjdXRpbmciLCJfbG9vcCIsIl9pdGVyYXRvciIsIl9zdGVwIiwiX2NvbnRleHQ4IiwicHJvbWlzZSIsIl9jb250ZXh0NyIsInJlc3VsdCIsInNwbGljZSIsImluZGV4T2YiLCJwdXNoIiwicmFjZSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfcmVnZW5lcmF0b3JWYWx1ZXMiLCJhbGwiLCJQcm9kdWN0RGV0YWlscyIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZSIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY29uY2F0IiwibW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUiLCJtb2RpZmllcnNNb2RhbFRlbXBsYXRlIiwib3B0aW9uVG9vbHRpcFRlbXBsYXRlIiwib3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUiLCJvcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUiLCJvcHRpb25QcmljZVRlbXBsYXRlIiwib3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlIiwic3VidG90YWxUZW1wbGF0ZSIsInN1bW1hcnlUZW1wbGF0ZSIsInNob3dQcmljZUZyZWUiLCJzaG93UHJpY2VaZXJvIiwiYWRkVG9DYXJ0V3JhcHBlclNlbGVjdG9yIiwiZmV0Y2hPcHRpb25QcmljZUNhY2hlIiwiY29uc29sZSIsImxvZyIsIl9jb25zb2xlIiwiJGZvcm0iLCIkY2hvb3NlT3B0aW9uc0J0biIsInZhbCIsImN1c3RvbUZpZWxkc1RleHQiLCJwYXJzZSIsInByb2R1Y3RPcHRpb25zIiwicHJvZHVjdE9wdGlvbnNUZXh0IiwiZW5hYmxlTW9kaWZpZXJzTW9kYWwiLCJjcmVhdGVNb2RpZmllcnNNb2RhbCIsImJpbmRQcm9kdWN0RWRpdEV2ZW50cyIsImJpbmRNb2RhbERlc3Ryb3kiLCJpbml0T3B0aW9uU3RlcHBlciIsInN5bmNQcm9kdWN0Q2FyZFF0eSIsImluaXRTYWxlQ291bnRkb3duIiwiZ2V0Vmlld01vZGVsIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlMiIsIl9sZW4yIiwiX2tleTIiLCJtb2RlbCIsIiR1cGRhdGVQcm9kdWN0V3JhcHBlciIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwiJGJ0biIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsInByb3AiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiZm9ybSIsImVkaXRQcm9kdWN0SW5DYXJ0IiwiZWRpdFByb2R1Y3RUb0NhcnQiLCJfZWRpdFByb2R1Y3RUb0NhcnQiLCIkc2F2ZUJ0biIsIm9yaWdpbmFsQnRuVmFsIiwid2FpdE1lc3NhZ2UiLCJmb3JtRGF0YSIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwiaXRlbUlkIiwibmV3UXR5IiwiX3QiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsInVuZGVmaW5lZCIsIiRvdmVybGF5Iiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCJuZXh0IiwicmVzcG9uc2UiLCJjb250ZXh0IiwiZWRpdFByb2R1Y3RDYWxsYmFjayIsImVycm9yVGV4dCIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGVja0lzUXVpY2tWaWV3Q2hpbGQiLCIkcHJlTW9kYWxGb2N1c2VkRWwiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsImVkaXRQcm9kdWN0UXVhbnRpdHkiLCJ1cGRhdGVDYXJ0SXRlbVF1YW50aXR5IiwidHlwZSIsImdldEF0dHJpYnV0ZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJmYWlsIiwiX3hociIsIl9zdGF0dXMiLCJlcnJvciIsIl94MyIsIl94NCIsInJlamVjdCIsImFwaSIsImNhcnQiLCJpdGVtVXBkYXRlIiwiZXJyIiwiX3Jlc3BvbnNlJGRhdGEiLCJzdGF0dXMiLCJlcnJvcnMiLCJqb2luIiwic3VibWl0RXZlbnQiLCJFdmVudCIsIm9uZSIsImNsb3NlZCIsImVhY2giLCJmb3JtRmllbGRFbCIsIiRmb3JtRmllbGQiLCIkZGVjIiwiJGluYyIsIiRjaGVjayIsImluaXQiLCIkcmFkaW9zIiwiJGNoZWNrZWQiLCIkZmlyc3QiLCJzZWxlY3QiLCJpbmMiLCJlcSIsIm5vdCIsImhhc0NsYXNzIiwiJHVuY2hlY2siLCIkbm9uZSIsImNhcmRRdHkiLCIkcXR5IiwicXR5IiwidHh0U2FsZUNvdW50ZG93bkpTT04iLCJlbmRfaW4iLCJjb25maWd1cmUiLCJhZGQiLCJ1cGRhdGVWaWV3IiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlMyIsIl9sZW4zIiwiX2tleTMiLCJ1cGRhdGVTYWxlUGVyY2VudCIsInVwZGF0ZVNoaXBwaW5nQ291bnRkb3duIiwibWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyIsInVwZGF0ZU1vZGlmaWVyc1ZpZXciLCIkcHJvZHVjdE9wdGlvbnNFbCIsIiRtb2RpZmllcnNNb2RhbE9wdGlvbnMiLCIkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCIsInNob3dPcHRpb25JZHMiLCJzdGFja2VkU2hvd09wdGlvbklkcyIsIm5vbmVTYWxlcyIsImN1c3RvbUZpZWxkTm9uZVNhbGVzIiwic2hvd09wdGlvblByaWNlcyIsInVwZGF0ZU1vZGlmaWVyc1N1YnRvdGFsIiwiX2RhdGEkcHJpY2UiLCJfZGF0YSRwcmljZTQiLCIkZGl2IiwiJHNwYW4iLCJzYWxlUGVyY2VudCIsInByaWNlIiwid2l0aG91dF90YXgiLCJfZGF0YSRwcmljZTIiLCJfZGF0YSRwcmljZTMiLCJycnBfd2l0aG91dF90YXgiLCJNYXRoIiwicm91bmQiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsIndpdGhfdGF4IiwiX2RhdGEkcHJpY2U1IiwiX2RhdGEkcHJpY2U2IiwicnJwX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCIkc2hpcHBpbmdDb3VudGRvd24iLCJ1cGRhdGVDYXJ0Q29udGVudCIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTQiLCJjbG9zZU1vZGlmaWVyc01vZGFsIiwicHJldmlld01vZGFsIiwiX2xlbjQiLCJfa2V5NCIsInNob3dQcm9kdWN0SW1hZ2UiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGU1IiwiX2xlbjUiLCJfa2V5NSIsIiRtb2RpZmllcnNNb2RhbEltZyIsIl90aGlzJGltYWdlR2FsbGVyeSRjdSIsImN1cnJlbnRJbWFnZSIsImVsIiwiZm9ybWF0UHJpY2UiLCJwbHVzU3ltYm9sIiwiZGlzcGxheSIsImN1cnJlbmN5X3Rva2VuIiwiY3VycmVuY3kiLCJzeW1ib2wiLCJjdXJyZW5jeV9sb2NhdGlvbiIsInN5bWJvbFBsYWNlbWVudCIsImRlY2ltYWxfdG9rZW4iLCJkZWNpbWFsVG9rZW4iLCJkZWNpbWFsX3BsYWNlcyIsImRlY2ltYWxQbGFjZXMiLCJ0aG91c2FuZHNfdG9rZW4iLCJ0aG91c2FuZHNUb2tlbiIsImZvcm1hdHRlZCIsImZpbmRPcHRpb25WYWx1ZSIsIm9wdGlvbk5hbWUiLCJ2YWx1ZU5hbWUiLCJfaGlkZUlmT3B0aW9uJHZhbHVlcyIsImhpZGVJZk9wdGlvbiIsImRpc3BsYXlfbmFtZSIsInZhbHVlcyIsImxhYmVsIiwib3B0aW9uSWQiLCJpZCIsInZhbHVlSWQiLCIkYXR0cmlidXRlTWVzc2FnZVdyYXBwZXIiLCIkYWRkVG9DYXJ0V3JhcHBlciIsIiRtb2RpZmllcnNNb2RhbCIsInR4dENvbnRpbnVlIiwicHJvZHVjdFRpdGxlIiwiJG1vZGlmaWVyc01vZGFsQ29tcGxldGUiLCIkbW9kaWZpZXJzTW9kYWxDbG9zZSIsIiRtb2RpZmllcnNNb2RhbENvbnRpbnVlIiwiJG1vZGlmaWVyc01vZGFsQmFjayIsImFwcGVuZCIsImdvQmFja1N0ZXAiLCJpbnZhbGlkSW5wdXRzIiwicmVkdWNlIiwiX2ludmFsaWRJbnB1dHMiLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJmb3JFYWNoIiwidmFsaWRhdGVWYXJpYW50T3B0aW9ucyIsImluaXRNb2RpZmllcnNWaWV3Iiwib3Blbk1vZGlmaWVyc01vZGFsIiwiYmVmb3JlIiwiaWdub3JlQVBJQ2FsbCIsIl91cGRhdGVNb2RpZmllcnNWaWV3IiwiX3JlZjMkaWdub3JlQVBJQ2FsbCIsIiRtb2RpZmllcnNNb2RhbFN1bW1hcnkiLCIkbW9kaWZpZXJzTW9kYWxUaXRsZSIsIiRtb2RpZmllcnNNb2RhbEZvb3RlciIsImN1cnJlbnRPcHRpb25JZCIsImN1cnJlbnRHcm91cE5hbWUiLCJjdXJyZW50R3JvdXBPcHRpb25JZHMiLCJoaWRlT3B0aW9uSWRzIiwiaGlkZU9wdGlvblZhbHVlcyIsInRvb2x0aXBzIiwidG9vbHRpcEhlYWRpbmdzIiwib3B0aW9uUmVuYW1lcyIsIl90aGlzJHByb2R1Y3RPcHRpb25zJCIsInRpdGxlIiwiZ3JvdXBUb29sdGlwIiwiJHRvb2x0aXAiLCJlbXB0eSIsImZyb20iLCJlbnRyaWVzIiwic3RhdGUiLCJvcHRpb24iLCJoaWRlT3B0aW9uIiwiZ3JvdXBOYW1lIiwiZ3JvdXBPcHRpb25JZHMiLCJpc05vbmVSYWRpb0NoZWNrZWQiLCIkZmlsZSIsImlzRmlsZVNob3duIiwiJGRhdGUiLCJpc09wdGlvbmFsRGF0ZVNob3duIiwicmVxdWlyZWQiLCIkc2VsZWN0IiwiaXNPcHRpb25hbFNlbGVjdFNob3duIiwiJHRleHQiLCJpc09wdGlvbmFsVGV4dFNob3duIiwiZm9ybVZhbHVlIiwiRmlsZSIsImN1c3RvbUZpZWxkIiwiaGlkZUlmTWF0Y2giLCJjdXN0b21GaWVsZE1hdGNoSGlkZUlmIiwiZ3JvdXBNYXRjaCIsImN1c3RvbUZpZWxkTWF0Y2hHcm91cCIsIl9PYmplY3QkYXNzaWduIiwidG9vbHRpcE1hdGNoIiwiY3VzdG9tRmllbGRNYXRjaFRvb2x0aXAiLCJfdG9vbHRpcHMkb3B0aW9uJGlkIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZDIiLCJhc3NpZ24iLCJ0b29sdGlwIiwidmFsdWVUb29sdGlwcyIsInZhbHVlVG9vbHRpcEhlYWRpbmdzIiwiY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nIiwibmV3TmFtZSIsImN1c3RvbUZpZWxkTWF0Y2hSZW5hbWUiLCJ2YWx1ZU5vblNhbGVzIiwiY3VzdG9tRmllbGRNYXRjaE5vblNhbGUiLCJfIiwiY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCIsInNob3dPcHRpb25Ub29sdGlwcyIsInBvcHVsYXRlRGVmYXVsdE9wdGlvblZhbHVlcyIsImRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyIiwic2hvd1N1bW1hcnkiLCJfeDUiLCJpbnZhbGlkIiwicG9wIiwiJG9wdGlvbiIsIm1hdGNoIiwiaGlkZUlmT3B0aW9ucyIsImt2IiwiX3JlZjgiLCJ0cmltIiwiX3JlZjkiLCJ0aGVuT3B0aW9ucyIsIl9yZWYwIiwiX3JlZjEiLCJfcmVmMTAiLCJfdGhpczckZmluZE9wdGlvblZhbHUiLCJnZXRBbGwiLCJfcmVmMTEiLCJfcmVmMTIiLCJfaGlkZU9wdGlvblZhbHVlIiwiX3JlZjEzIiwiX3RoaXM4JHByb2R1Y3RPcHRpb25zIiwiX3JlZjE0IiwiX3JlZjE1IiwiX3RoaXM5IiwiX20kMSRzcGxpdCRtYXAiLCJfcmVmMTYiLCJfcmVmMTciLCJfcmVmMTgiLCJfdGhpczAiLCJfbSQxJHNwbGl0JG1hcDIiLCJoZWFkaW5nIiwiX3JlZjE5IiwiX3JlZjIwIiwiX3JlZjIxIiwiX2t2JHNwbGl0JG1hcCIsInZhbHVlTGFiZWwiLCJfb3B0aW9uJHZhbHVlcyRmaW5kIiwiX3JlZjIyIiwiZmV0Y2hTZXR0aW5ncyIsIl9mZXRjaFNldHRpbmdzIiwiY3VycmVuY3lDb2RlIiwiYWN0aXZlX2N1cnJlbmN5X2NvZGUiLCJkZWZhdWx0Q3VycmVuY3lDb2RlIiwiZGVmYXVsdF9jdXJyZW5jeV9jb2RlIiwic2V0dGluZ3MiLCJmZXRjaE9wdGlvblByaWNlcyIsIl9mZXRjaE9wdGlvblByaWNlcyIsIl9jYWxsZWU0Iiwic2hvd09wdGlvbnMiLCJfdGhpczEiLCJzZWxlY3RlZE9wdGlvblZhbHVlSWRzIiwiX3lpZWxkJGhhbmRsZVByb21pc2VzIiwicHJldiIsInNlbGVjdGlvbnMiLCJfY29udGV4dDQiLCJfcmVmMjMiLCJvcHRpb25FbnRpdHlJZCIsInZhbHVlRW50aXR5SWQiLCJfcmVmMjQiLCJmZXRjaE9wdGlvblByaWNlIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJzZWxlY3Rpb24iLCJwcmljZXNXaXRoVGF4IiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoIiwiX3ByZXYkcHJpY2VzV2l0aFRheCIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aDIiLCJfcHJldiRwcmljZXNXaXRoVGF4MiIsIm5vblNhbGVQcmljZVdpdGhUYXgiLCJiYXNlUHJpY2UiLCJhZGp1c3RlZFByaWNlc1dpdGhUYXgiLCJub25TYWxlUHJpY2VWYWx1ZSIsInByaWNlc1dpdGhvdXRUYXgiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGgzIiwiX3ByZXYkcHJpY2VzV2l0aG91dFRhIiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoNCIsIl9wcmV2JHByaWNlc1dpdGhvdXRUYTIiLCJub25TYWxlUHJpY2VXaXRob3V0VGF4IiwiYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4IiwiX3g2IiwiX3g3IiwiX2ZldGNoT3B0aW9uUHJpY2UiLCJfY2FsbGVlNSIsIm9wdGlvblZhbHVlSWRzIiwiY2FjaGVLZXkiLCJfY29udGV4dDUiLCJfeDgiLCJfdGhpczEwIiwiX3JlZjI1IiwiX3JlZjI1JCIsIiRsYWJlbCIsImFmdGVyIiwicHJlcGVuZCIsIl9yZWYyNiIsInZhbHVlVG9vbHRpcCIsIiR2YWx1ZSIsIl9yZWYyNyIsIl9yZWYyOCIsIl9yZWYyOSIsInZhbHVlVG9vbHRpcEhlYWRpbmciLCIkdG9vbHRpcEhlYWRpbmciLCJzaG93bk9wdGlvbnMiLCJfcmVmMzAiLCJkZWZhdWx0T3B0aW9ucyIsIl9yZWYzMSIsInByZWZpbGwiLCJzZWxlY3RlZF9kYXRlIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiX3JlZjMyIiwic2VsZWN0ZWQiLCJjaGVja2JveE9wdGlvbnMiLCJfcmVmMzMiLCJub1ZhbHVlIiwiZmlsZU9wdGlvbnMiLCJfcmVmMzQiLCJwYXJ0aWFsIiwiZGF0ZU9wdGlvbnMiLCJfcmVmMzUiLCJkcm9wZG93bk9wdGlvbnMiLCJfcmVmMzYiLCJ0ZXh0T3B0aW9ucyIsIl9yZWYzNyIsIl9yZWYzOCIsIl92YWx1ZXMkZmluZCIsIl9yZWYzOSIsIl9yZWY0MCIsImNoZWNrZWQiLCJfcmVmNDEiLCJwYXJhbXMiLCJwcmVsb2FkZXIiLCJwcmljZUh0bWwiLCJwcmljZVRleHQiLCJzdWJ0b3RhbEh0bWwiLCIkcHJpY2UiLCIkb2xkIiwiJHBsYWNlaG9sZGVyIiwiX3Nob3dPcHRpb25QcmljZXMiLCJfY2FsbGVlNiIsImlnbm9yZVVwZGF0ZVN1YnRvdGFsIiwiX3RoaXMxMSIsIl95aWVsZCRQcm9taXNlJGFsbCIsIl95aWVsZCRQcm9taXNlJGFsbCQiLCJzaG93UHJpY2UiLCJfY29udGV4dDYiLCJfaWQiLCJfcmVmNDIiLCJ0eHRQcmljZUZyZWUiLCJfcmVmNDMiLCJfYWRqdXN0ZWRQcmljZXNXaXRoVGEiLCJfYWRqdXN0ZWRQcmljZXNXaXRoVGEyIiwiX2FkanVzdGVkUHJpY2VzV2l0aG91IiwiX2FkanVzdGVkUHJpY2VzV2l0aG91MiIsInRheCIsInBkcCIsInByaWNlV2l0aFRheFZhbHVlIiwicHJpY2VXaXRoVGF4Iiwibm9uU2FsZVByaWNlV2l0aFRheFZhbHVlIiwicHJpY2VXaXRob3V0VGF4VmFsdWUiLCJwcmljZVdpdGhvdXRUYXgiLCJub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWUiLCJfbm9uZVNhbGVzJG9wdGlvbklkIiwibm9uU2FsZSIsIl9hZGp1c3RlZFByaWNlc1dpdGhvdTMiLCJfYWRqdXN0ZWRQcmljZXNXaXRoVGEzIiwiZXhjaGFuZ2VkTm9uU2FsZSIsImV4Y2hhbmdlUmF0ZSIsInByaWNlVmFsdWUiLCJzaG93T3B0aW9uU3VidG90YWwiLCJfeDkiLCJfeDAiLCJfeDEiLCJfeDEwIiwiX3gxMSIsIl94MTIiLCJfcHJvZHVjdCRwcmljZXNXaXRoVGEiLCJfcHJvZHVjdCRwcmljZXNXaXRob3UiLCJ0eHRTdWJ0b3RhbCIsInR4dFJldmlld1NlbGVjdGlvbnMiLCJvcHRpb25zIiwiJHN1YnRvdGFsIiwiX29wdGlvbiR2YWx1ZXMiLCJfJG1vZGlmaWVyc01vZGFsT3B0aW8iLCJkYXlTdHIiLCJtb250aFN0ciIsInllYXJTdHIiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidmFsdWVTdHIiLCJfcmVmNDQiLCJvcHRpb25FbFByaWNlSHRtbCIsInN1bW1hcnlIdG1sIiwicGFyc2VEYXRlVGltZVN0cmluZyIsInN0ciIsInJlZ2V4Iiwic2hvcnRNb250aCIsInNob3J0RGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsInNob3J0SG91ciIsInNob3J0TWludXRlIiwic2luZ2xlVGltZUNvbXBvbmVudCIsInR6U2lnbiIsInR6SG91ck9mZnNldCIsInR6TWludXRlT2Zmc2V0IiwicGFyc2VJbnQiLCJzaWduIiwidHpIb3VyIiwidHpNaW51dGUiLCJ0aW1lem9uZSIsInBhcnNlQ291bnRkb3duRGF0ZSIsInBhcnNlZERhdGUiLCJkYXRlIiwic2V0RnVsbFllYXIiLCJzZXRNb250aCIsInNldERhdGUiLCJzZXRIb3VycyIsInNldE1pbnV0ZXMiLCJzZXRTZWNvbmRzIiwiZ2V0SG91cnMiLCJnZXRUaW1lem9uZU9mZnNldCIsImdldERhdGUiLCJlbGVtZW50cyIsIlNldCIsInRpbWVyIiwib2JzZXJ2ZXIiLCJkYXRlRGF0YU5hbWUiLCJpblZpZXdwb3J0RGF0YU5hbWUiLCJ0cmFuc2xhdGlvbnNEYXRhTmFtZSIsInNlbGVjdG9ycyIsImVuZExhYmVsIiwiZGF5VmFsdWUiLCJkYXlMYWJlbCIsImhvdXJWYWx1ZSIsImhvdXJMYWJlbCIsIm1pbnV0ZVZhbHVlIiwibWludXRlTGFiZWwiLCJzZWNvbmRWYWx1ZSIsInNlY29uZExhYmVsIiwidGVtcGxhdGUiLCJoaWRlQ2xhc3MiLCJzYWxlRW5kQ2xhc3MiLCJhY3RpdmVDbGFzcyIsInRyYW5zbGF0aW9ucyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwianNvbiIsInRyYW5zIiwia2V5cyIsIl90cmFucyIsInNob3J0S2V5IiwidmFsaWREYXRlIiwib2JzZXJ2ZSIsInN0YXJ0IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdCIsInRocmVzaG9sZCIsInVub2JzZXJ2ZSIsImlzVmlzaWJsZUluVmlld3BvcnQiLCJzaXplIiwicnVuIiwic3RvcCIsImRpc2Nvbm5lY3QiLCJib2R5IiwiY29udGFpbnMiLCJub3ciLCJkaWZmIiwiZmxvb3IiLCIkZW5kTGFiZWwiLCIkZGF5IiwiJGRheVZhbHVlIiwiJGRheUxhYmVsIiwiJGhvdXIiLCIkaG91clZhbHVlIiwiJGhvdXJMYWJlbCIsIiRtaW51dGUiLCIkbWludXRlVmFsdWUiLCIkbWludXRlTGFiZWwiLCIkc2Vjb25kIiwiJHNlY29uZFZhbHVlIiwiJHNlY29uZExhYmVsIiwidG9nZ2xlQ2xhc3MiLCJhcmlhS2V5Q29kZXMiLCJSRVRVUk4iLCJTUEFDRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsImluaXRSYWRpb09wdGlvbnMiLCJzZXRDaGVja2VkUmFkaW9JdGVtIiwiaXRlbUNvbGxlY3Rpb24iLCJpdGVtSWR4IiwiaWR4IiwiaXRlbSIsIiRpdGVtIiwiY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uIiwibGFzdEl0ZW1JZHgiLCJjdXJyZW50SWR4IiwiaGFuZGxlSXRlbUtleURvd24iLCJrZXlDb2RlIiwibGFzdENvbGxlY3Rpb25JdGVtSWR4Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldkl0ZW1JZHgiLCJuZXh0SXRlbUlkeCIsIiRjb250YWluZXIiLCJpdGVtU2VsZWN0b3IiLCIkaXRlbUNvbGxlY3Rpb24iLCJvcHRpb25zVHlwZXNNYXAiLCJJTlBVVF9GSUxFIiwiSU5QVVRfVEVYVCIsIklOUFVUX05VTUJFUiIsIklOUFVUX0NIRUNLQk9YIiwiVEVYVEFSRUEiLCJEQVRFIiwiU0VUX1NFTEVDVCIsIlNFVF9SRUNUQU5HTEUiLCJTRVRfUkFESU8iLCJTV0FUQ0giLCJQUk9EVUNUX0xJU1QiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJhcmVEZWZhdWx0T3B0aW9uc1NldCIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwiZ2V0VGFiUmVxdWVzdHMiLCJfXyIsIl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlIiwidmFyaWFudERvbU5vZGUiLCJ2YXJpYW50VHlwZSIsInJhZGlvIiwiJHJhZGlvIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsIiRhY3RpdmVUYWIiLCJoYXMiLCIkdGFiQ29udGVudCIsInNpYmxpbmdzIiwicnJwV2l0aFRheCIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCJwcmljZUxhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsIiRhZGRUb0NhcnRGb3JtIiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwic3RvY2siLCIkaW5wdXQiLCJza3UiLCJ1cGMiLCJxdWFudGl0eSIsIiRidWxrUHJpY2luZyIsIiR3YWxsZXRCdXR0b25zIiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJ2aWV3TW9kZWwiLCJzaG93TWVzc2FnZUJveCIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJ1cGRhdGVQcmljZVZpZXciLCJ3ZWlnaHQiLCJ2YXJpYW50SWQiLCJ1cGRhdGVXYWxsZXRCdXR0b25zVmlldyIsImJ1bGtfZGlzY291bnRfcmF0ZXMiLCJhZGRUb0NhcnRXcmFwcGVyIiwidXBkYXRlZFByaWNlIiwicHJpY2VfcmFuZ2UiLCJtaW4iLCJtYXgiLCJzYXZlZCIsIm1lc3NhZ2UiLCIkbWVzc2FnZUJveCIsImlzVmFsaWRGb3JtIiwidG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkiLCJzaG91bGRTaG93IiwiZ2V0QXR0cmlidXRlVHlwZSIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkcGFyZW50IiwicGFyZW50IiwidG9nZ2xlT3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsIm1vZGFsRmFjdG9yeSIsIm5vZCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJmb3JtcyIsIm5vcm1hbGl6ZUZvcm1EYXRhIiwiY29udmVydEludG9BcnJheSIsImJhbm5lclV0aWxzIiwiY3VycmVuY3lTZWxlY3RvciIsIl9Qcm9kdWN0RGV0YWlsc0Jhc2UiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJsaXN0ZW5RdWFudGl0eUNoYW5nZSIsIiRzd2F0Y2hPcHRpb25NZXNzYWdlIiwic3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlIiwic3dhdGNoR3JvdXBJZExpc3QiLCJncm91cCIsInN0b3JlSW5pdE1lc3NhZ2VzRm9yU3dhdGNoZXMiLCJ1cGRhdGVEYXRlU2VsZWN0b3IiLCJ1cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEiLCJhZGRUb0NhcnRWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsImhhc0RlZmF1bHRPcHRpb25zIiwiJHByb2R1Y3RTd2F0Y2hHcm91cCIsIiRwcm9kdWN0U3dhdGNoTGFiZWxzIiwicGxhY2VTd2F0Y2hMYWJlbEltYWdlIiwiJG9wdGlvbkltYWdlIiwib3B0aW9uSW1hZ2VXaWR0aCIsIm91dGVyV2lkdGgiLCJleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCIsIl9sYWJlbCRnZXRCb3VuZGluZ0NsaSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpZ2h0IiwiZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIiLCJzY3JlZW4iLCJzaGlmdFZhbHVlIiwicmVnaXN0ZXJBZGRUb0NhcnRWYWxpZGF0aW9uIiwic2hvd1N3YXRjaE5hbWVzIiwic3dhdGNoR3JvdXBFbGVtZW50IiwicGFyZW50Tm9kZSIsInNob3dTd2F0Y2hOYW1lT25PcHRpb24iLCJlbGVtZW50IiwicHJvZHVjdE9wdGlvbnNDaGFuZ2VkIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJfaXNFbXB0eSIsIiRwcm9kdWN0SWQiLCJvcHRpb25DaGFuZ2VDYWxsYmFjayIsInByb2R1Y3RBdHRyaWJ1dGVzIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwiZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJudW1iZXJzT25seSIsImVycm9yTWVzc2FnZSIsInByb2R1Y3RRdWFudGl0eUVycm9yTWVzc2FnZSIsInN3YXRjaEdyb3VwSWQiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsIm9wdGlvblRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlzU2F0aXNmaWVkIiwicXVlcnlTZWxlY3RvckFsbCIsImRhdGVTdHJpbmciLCJ4IiwiZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCIsInByb2R1Y3RWYXJpYW50c2xpc3QiLCJtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0IiwiaW5wdCIsImRhdGFzZXQiLCJwcm9kdWN0QXR0cmlidXRlVmFsdWUiLCJsYWJlbHMiLCJwcm9kdWN0VmFyaWFudCIsInZpZXciLCJwcm9kdWN0TmFtZSIsImNhcmQiLCJpc1J1bm5pbmdJbklmcmFtZSIsInNlbGYiLCJ0b3AiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCIkY29udGV4dCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkZXRhaWwiLCIkc3dhdGNoIiwiJHN3YXRjaEdyb3VwIiwic3dhdGNoTmFtZSIsImFjdGl2ZVN3YXRjaEdyb3VwSWQiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJyb2xlIiwiX2lzUGxhaW5PYmplY3QiLCJzZXRBbHRlcm5hdGVJbWFnZSIsInJlc3RvcmVJbWFnZSIsIiR0YXJnZXQiLCJxdWFudGl0eU1pbiIsInF1YW50aXR5TWF4IiwidmFsaWRhdGVJbmNyZWFzZUFnYWluc3RNYXhCb3VuZGFyeSIsInZhbGlkYXRlRGVjcmVhc2VBZ2FpbnN0TWluQm91bmRhcnkiLCJ3aGljaCIsIiRhZGRUb0NhcnRCdG4iLCJpdGVtQWRkIiwiY2FydF9pZCIsIm9wZW4iLCJBcHBsZVBheVNlc3Npb24iLCIkbW9kYWwiLCJjYXJ0X2l0ZW0iLCJyZWRpcmVjdFRvIiwiY2FydF91cmwiLCJ1cmxzIiwiZ2V0Q2FydENvbnRlbnQiLCJjYXJ0SXRlbUlkIiwib25Db21wbGV0ZSIsInN1Z2dlc3QiLCJjb25maWciLCJzdWdnZXN0aW9ucyIsImdldENvbnRlbnQiLCJpZnJhbWVTZGsiLCJtb2RhbCIsInVwZGF0ZUNvbnRlbnQiLCIkY2FydFF1YW50aXR5IiwiJGNvbnRlbnQiLCIkY2FydENvdW50ZXIiLCIkcHJvbW90aW9uQmFubmVyIiwiJGJhY2tUb1Nob3BwcGluZ0J0biIsIiRtb2RhbENsb3NlQnRuIiwiYmFubmVyVXBkYXRlSGFuZGxlciIsIiRwcm9kdWN0Q29udGFpbmVyIiwicmVsb2FkIiwiZm9ybURhdGFJdGVtcyIsInNlcmlhbGl6ZUFycmF5IiwicHJvZHVjdERldGFpbHMiLCJmb3JtRGF0YUl0ZW0iLCJwcm9kdWN0T3B0aW9uIiwib3B0aW9uVmFsdWUiLCJvcHRpb25TZWxlY3Rpb25zIiwic2NvcGUiLCJ1cGRhdGVEYXlzIiwiZGF0ZU9wdGlvbiIsIm1vbnRoU2VsZWN0b3IiLCJkYXlTZWxlY3RvciIsInllYXJTZWxlY3RvciIsImRheXNJbk1vbnRoIiwiaXNOYU4iLCJPcHRpb24iLCJmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtIiwicmVzIiwiX3N0ZXAkdmFsdWUiLCJmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0iLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX3N0ZXAyJHZhbHVlIiwiZXZ0IiwiYW1vdW50IiwiZG9jdW1lbnRNb2RlIiwiY29sbGVjdGlvbiIsIiRtYWluSW1hZ2VOZXN0ZWQiLCIkc2VsZWN0YWJsZUltYWdlcyIsInNldEltYWdlWm9vbSIsImltZ09iaiIsInNhdmVkSW1hZ2UiLCIkc2VsZWN0ZWRUaHVtYiIsInNlbGVjdE5ld0ltYWdlIiwibWFpbkltYWdlQWx0IiwiYWx0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=