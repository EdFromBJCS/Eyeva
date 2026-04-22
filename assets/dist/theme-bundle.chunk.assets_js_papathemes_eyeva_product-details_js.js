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
    _this.optionTooltipTemplate = "\n        <div class=\"eyeva__productView-option-tooltip\">\n            <span class=\"eyeva__productView-tooltip-trigger\" role=\"button\" tabindex=\"0\" aria-label=\"More information\" title=\"More information\">i</span>\n            <span class=\"eyeva__productView-tooltip-bubble\"><%tooltip%></span>\n        </div>\n    ";
    _this.optionValueTooltipTemplate = "\n        <div class=\"eyeva__productView-value-tooltip\">\n            <span class=\"eyeva__productView-tooltip-trigger\" role=\"button\" tabindex=\"0\" aria-label=\"More information\" title=\"More information\">i</span>\n            <span class=\"eyeva__productView-tooltip-bubble\"><%tooltip%></span>\n        </div>\n    ";
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
    _this.refreshProductMetadata($form);

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
    _this.bindStickyAddToCartEvents();
    _this.bindModalDestroy();
    _this.initOptionStepper();
    _this.syncProductCardQty();
    _this.initSaleCountdown();
    _this.renderInlineOptionTooltips();
    $('body').trigger('update-wishlist-buttons', [_this.$scope]);
    return _this;
  }
  _inheritsLoose(ProductDetails, _CornerstoneProductDe);
  var _proto = ProductDetails.prototype;
  _proto.refreshProductMetadata = function refreshProductMetadata($form) {
    if ($form === void 0) {
      $form = this.$scope.find('[data-cart-item-add]').first();
    }
    var parseMetadata = function parseMetadata(selector) {
      var text = $form.find(selector).first().text();
      if (text) {
        try {
          return JSON.parse(text);
        } catch (e) {
          // Ignore invalid metadata payloads.
        }
      }
      return [];
    };

    /**
     * @type {Array<{name: string, value: string}>}
     */
    this.customFields = parseMetadata('[data-eyeva-product-custom-fields]');

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
     */
    this.productOptions = parseMetadata('[data-eyeva-product-options]');
    this.console.log('ProductDetails.customFields:', this.customFields);
    this.console.log('ProductDetails.productOptions:', this.productOptions);
  };
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
  _proto.bindStickyAddToCartEvents = function bindStickyAddToCartEvents() {
    var _this3 = this;
    this.$scope.on('click', '#sticky-add-to-cart', function (event) {
      event.preventDefault();
      var $button = $(event.currentTarget);
      if ($button.prop('disabled') || $button.attr('aria-disabled') === 'true') {
        return;
      }
      var $form = _this3.$scope.find('form[data-cart-item-add]').first();
      if (!$form.length) {
        return;
      }
      $form.trigger('submit');
    });
  };
  _proto.bindModalDestroy = function bindModalDestroy() {
    var _this4 = this;
    // destroy the image gallery modal when quick-view modal is closed
    // to prevent memory leak
    this.$scope.closest('.modal').one(_theme_global_modal__WEBPACK_IMPORTED_MODULE_3__.ModalEvents.closed, function () {
      _this4.imageGallery.imageGalleryModal.destroyModal();
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
    this.refreshProductMetadata();
    this.renderInlineOptionTooltips();
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
    var _this5 = this;
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
      _this5.closeModifiersModal();
    });
    $modifiersModalBack.on('click', function (event) {
      event.preventDefault();
      _this5.goBackStep();
    });
    $modifiersModalContinue.on('click', function (event) {
      event.preventDefault();

      // stop and report invalid inputs if any
      var showOptionIds = _this5.stackedShowOptionIds.slice(-1)[0] || [];
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
      _this5.manualUpdateModifiersView = false;
      _this5.updateModifiersView();
    });
    $chooseOptionsBtn.on('click', function (event) {
      event.preventDefault();

      // require selecting variant options before opening the modal
      if (_this5.validateVariantOptions()) {
        _this5.initModifiersView();
        _this5.openModifiersModal();
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
      var _this6 = this;
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
              _this6.console.log('%cProductDetails - option: ', 'color: cyan', option.display_name);
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
                _this6.console.log('ProductDetails - hideOption: ', hideOption);
              }
              if (!hideOption) {
                _this6.customFields.forEach(function (customField) {
                  // match __@hide_if (.*)
                  var hideIfMatch = _this6.customFieldMatchHideIf({
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
                    var groupMatch = _this6.customFieldMatchGroup({
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
                    var tooltipMatch = _this6.customFieldMatchTooltip({
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
                    var valueTooltipHeadings = _this6.customFieldMatchTooltipHeading({
                      customField: customField,
                      option: option
                    });
                    if (tooltipHeadings) {
                      tooltipHeadings[option.id] = Object.assign({}, tooltipHeadings[option.id], valueTooltipHeadings);
                    }

                    // match __@rename option name = new name
                    var newName = _this6.customFieldMatchRename({
                      customField: customField,
                      option: option
                    });
                    if (newName) {
                      optionRenames[option.id] = newName;
                    }

                    // match __@nonsale price = option name: option value[; option name: option value; ...]
                    var valueNonSales = _this6.customFieldMatchNonSale({
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
                    _this6.console.log("ProductDetails - currentGroupName: " + currentGroupName + ", currentGroupOptionIds: " + currentGroupOptionIds);
                  } else {
                    // stand-alone option
                    currentOptionId = option.id;
                    _this6.console.log("ProductDetails - currentOptionId: " + currentOptionId);
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
                  groupTooltip = _this6.customFieldMatchTooltipGroup({
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
    var _this7 = this;
    var $form = this.$scope.find('[data-cart-item-add]');
    var formData = new FormData($form[0]);
    var invalid = this.productOptions.filter(function (_ref6) {
      var state = _ref6.state;
      return state === 'variant_option';
    }).find(function (option) {
      if (option.required) {
        var value = formData.get("attribute[" + option.id + "]");
        if (!value) {
          _this7.console.log("ProductDetails - Required option \"" + option.display_name + "\" is not selected");
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
    var _this8 = this;
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
      var _this8$findOptionValu = _this8.findOptionValue(name, value),
        optionId = _this8$findOptionValu[0],
        valueId = _this8$findOptionValu[1];
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
            _this8.console.log('ProductDetails - hideOption: ', hideOption);
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
                _this8.console.log('ProductDetails - hideOptionValue: ', _hideOptionValue);
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
    var _this9 = this;
    var customField = _ref13.customField,
      option = _ref13.option;
    var m = customField.name.match(/^__@group\s+(.*)$/i);
    if (m) {
      var groupName = m[1].trim();
      var groupOptionIds = customField.value.split(';').map(function (s) {
        return s.trim();
      }) // option names
      .map(function (optionName) {
        var _this9$productOptions;
        return (_this9$productOptions = _this9.productOptions.find(function (_ref14) {
          var display_name = _ref14.display_name;
          return equalOptionString(display_name, optionName);
        })) == null ? void 0 : _this9$productOptions.id;
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
    var _this0 = this;
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
          _this0.console.log("ProductDetails - tooltip for option \"" + name + " : " + value + "\" = \"\"\"" + tooltip + "\"\"\"");
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
    var _this1 = this;
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
          _this1.console.log("ProductDetails - tooltip heading for option \"" + name + " : " + value + "\" = \"\"\"" + heading + "\"\"\"");
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
      var _this10 = this;
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
              return _this10.fetchOptionPrice(selectedOptionValueIds);
            }];
            showOptions.forEach(function (option) {
              var values = option.values || (option.value ? [{
                id: option.value
              }] : []);
              values.forEach(function (value) {
                // fetch current option value's prices
                promises.push(function () {
                  return _this10.fetchOptionPrice([].concat(selectedOptionValueIds, [{
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
    var _this11 = this;
    // Display tooltip
    Object.entries(tooltips).forEach(function (_ref25) {
      var optionId = _ref25[0],
        _ref25$ = _ref25[1],
        tooltip = _ref25$.tooltip,
        valueTooltips = _ref25$.valueTooltips;
      if (!showOptionIds.includes(Number(optionId))) return;
      var $option = $modifiersModalOptions.find("[data-product-attribute-id=\"" + optionId + "\"]");
      if (tooltip) {
        var $tooltip = $(_this11.optionTooltipTemplate.replace('<%tooltip%>', tooltip)).attr('data-eyeva-product-option-tooltip-id', optionId);
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
        var $tooltip = $(_this11.optionValueTooltipTemplate.replace('<%tooltip%>', valueTooltip)).attr('data-eyeva-product-option-tooltip-id', optionId + "-" + valueId);
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
        var $tooltipHeading = $(_this11.optionValueTooltipHeadingTemplate.replace('<%heading%>', valueTooltipHeading)).attr('data-eyeva-product-option-tooltip-heading-id', optionId + "-" + valueId);
        $value.find("[data-eyeva-product-option-tooltip-heading-id=\"" + optionId + "-" + valueId + "\"]").remove();
        $value.append($tooltipHeading);
      });
    });
  };
  _proto.renderInlineOptionTooltips = function renderInlineOptionTooltips() {
    var _this12 = this;
    var $productOptionsEl = this.$scope.find('[data-product-option-change]').first();
    if (!$productOptionsEl.length) {
      return;
    }
    $productOptionsEl.find('[data-eyeva-product-option-tooltip-id], [data-eyeva-product-option-tooltip-heading-id]').remove();
    if (!this.productOptions.length || !this.customFields.length) {
      return;
    }
    var optionIds = $productOptionsEl.find('[data-product-attribute-id]').map(function (_index, el) {
      return Number($(el).data('product-attribute-id'));
    }).get();
    var tooltips = {};
    var tooltipHeadings = {};
    this.productOptions.filter(function (_ref30) {
      var id = _ref30.id;
      return optionIds.includes(id);
    }).forEach(function (option) {
      _this12.customFields.forEach(function (customField) {
        var tooltipMatch = _this12.customFieldMatchTooltip({
          customField: customField,
          option: option
        });
        if (tooltipMatch) {
          var _tooltips$option$id3, _tooltips$option$id4;
          tooltips[option.id] = Object.assign({}, tooltips[option.id], {
            tooltip: tooltipMatch.tooltip || ((_tooltips$option$id3 = tooltips[option.id]) == null ? void 0 : _tooltips$option$id3.tooltip),
            valueTooltips: Object.assign({}, (_tooltips$option$id4 = tooltips[option.id]) == null ? void 0 : _tooltips$option$id4.valueTooltips, tooltipMatch.valueTooltips)
          });
        }
        var valueTooltipHeadings = _this12.customFieldMatchTooltipHeading({
          customField: customField,
          option: option
        });
        if (valueTooltipHeadings) {
          tooltipHeadings[option.id] = Object.assign({}, tooltipHeadings[option.id], valueTooltipHeadings);
        }
      });
    });
    this.showInlineOptionTooltips($productOptionsEl, tooltips, tooltipHeadings);
  };
  _proto.showInlineOptionTooltips = function showInlineOptionTooltips($productOptionsEl, tooltips, tooltipHeadings) {
    var _this13 = this;
    Object.entries(tooltips).forEach(function (_ref31) {
      var optionId = _ref31[0],
        _ref31$ = _ref31[1],
        tooltip = _ref31$.tooltip,
        _ref31$$valueTooltips = _ref31$.valueTooltips,
        valueTooltips = _ref31$$valueTooltips === void 0 ? {} : _ref31$$valueTooltips;
      var $option = $productOptionsEl.find("[data-product-attribute-id=\"" + optionId + "\"]");
      if (!$option.length) {
        return;
      }
      if (tooltip) {
        var $tooltip = $(_this13.optionTooltipTemplate.replace('<%tooltip%>', tooltip)).attr('data-eyeva-product-option-tooltip-id', optionId);
        var $label = $option.find('label').first();
        if ($label.length > 0) {
          $label.append($tooltip);
        } else {
          $option.prepend($tooltip);
        }
      }
      Object.entries(valueTooltips).forEach(function (_ref32) {
        var valueId = _ref32[0],
          valueTooltip = _ref32[1];
        var $value = $option.find("[data-product-attribute-value=\"" + valueId + "\"]").first();
        if (!$value.length) {
          return;
        }
        var $tooltip = $(_this13.optionValueTooltipTemplate.replace('<%tooltip%>', valueTooltip)).attr('data-eyeva-product-option-tooltip-id', optionId + "-" + valueId);
        if ($value.is('option')) {
          if ($value.is(':selected')) {
            var $select = $option.find('select').first();
            if ($select.length > 0) {
              $select.after($tooltip);
            } else {
              $option.append($tooltip);
            }
          }
        } else {
          $value.after($tooltip);
        }
      });
    });
    Object.entries(tooltipHeadings).forEach(function (_ref33) {
      var optionId = _ref33[0],
        valueTooltipHeadings = _ref33[1];
      var $option = $productOptionsEl.find("[data-product-attribute-id=\"" + optionId + "\"]");
      if (!$option.length) {
        return;
      }
      Object.entries(valueTooltipHeadings).forEach(function (_ref34) {
        var valueId = _ref34[0],
          valueTooltipHeading = _ref34[1];
        var $value = $option.find("[data-product-attribute-value=\"" + valueId + "\"]").first();
        if (!$value.length) {
          return;
        }
        var $tooltipHeading = $(_this13.optionValueTooltipHeadingTemplate.replace('<%heading%>', valueTooltipHeading)).attr('data-eyeva-product-option-tooltip-heading-id', optionId + "-" + valueId);
        if ($value.is('option')) {
          if ($value.is(':selected')) {
            var $select = $option.find('select').first();
            if ($select.length > 0) {
              $select.after($tooltipHeading);
            } else {
              $option.append($tooltipHeading);
            }
          }
        } else {
          $value.append($tooltipHeading);
        }
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
    var shownOptions = this.productOptions.filter(function (_ref35) {
      var id = _ref35.id;
      return showOptionIds.includes(id);
    });

    /**
     * options that has default value
     */
    var defaultOptions = shownOptions.filter(function (_ref36) {
      var prefill = _ref36.prefill,
        selected_date = _ref36.selected_date,
        values = _ref36.values;
      return prefill || selected_date && (selected_date.day || selected_date.month || selected_date.year) || (values == null ? void 0 : values.find(function (_ref37) {
        var selected = _ref37.selected;
        return selected;
      }));
    });

    /**
     * checkbox type options
     */
    var checkboxOptions = shownOptions.filter(function (_ref38) {
      var noValue = _ref38.noValue,
        value = _ref38.value;
      return noValue || value;
    });

    /**
     * file type options
     */
    var fileOptions = shownOptions.filter(function (_ref39) {
      var partial = _ref39.partial;
      return partial === 'input-file';
    });

    /**
     * date type options
     */
    var dateOptions = shownOptions.filter(function (_ref40) {
      var partial = _ref40.partial;
      return partial === 'date';
    });

    /**
     * dropdown type options
     */
    var dropdownOptions = shownOptions.filter(function (_ref41) {
      var required = _ref41.required,
        partial = _ref41.partial;
      return !required && partial === 'set-select';
    });

    /**
     * text / multiline / number options
     */
    var textOptions = shownOptions.filter(function (_ref42) {
      var partial = _ref42.partial;
      return partial === 'input-text' || partial === 'textarea' || partial === 'input-numbers';
    });
    if (showOptionIds.length > 1 || defaultOptions.length > 0 || checkboxOptions.length > 0 || fileOptions.length > 0 || dateOptions.length > 0 || dropdownOptions.length > 0 || textOptions.length > 0) {
      // show continue button
      $modifiersModalContinue.show();

      // stop auto update the modifiers view until the continue button is clicked
      this.manualUpdateModifiersView = true;

      // populate default values to the shown options
      defaultOptions.forEach(function (_ref43) {
        var _values$find;
        var id = _ref43.id,
          prefill = _ref43.prefill,
          selected_date = _ref43.selected_date,
          values = _ref43.values;
        var valueId = values == null || (_values$find = values.find(function (_ref44) {
          var selected = _ref44.selected;
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
      checkboxOptions.forEach(function (_ref45) {
        var id = _ref45.id,
          checked = _ref45.checked,
          value = _ref45.value,
          noValue = _ref45.noValue;
        if (checked) {
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"hidden\"]").val(value);
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"checkbox\"]").prop('checked', true);
        } else {
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"hidden\"]").val(noValue);
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"checkbox\"]").prop('checked', false);
        }
      });

      // mark file input, date input, dropdown select, text input as shown
      [].concat(fileOptions, dateOptions, dropdownOptions, textOptions).forEach(function (_ref46) {
        var id = _ref46.id;
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
      var _this14 = this;
      var _yield$Promise$all, settings, _yield$Promise$all$, prev, selections, showPrice;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (ignoreUpdateSubtotal === void 0) {
              ignoreUpdateSubtotal = false;
            }
            _context6.n = 1;
            return Promise.all([this.fetchSettings(), this.fetchOptionPrices(showOptionIds.map(function (_id) {
              return _this14.productOptions.find(function (_ref47) {
                var id = _ref47.id;
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
                if (_this14.showPriceFree) {
                  return _this14.context.txtPriceFree;
                } else if (_this14.showPriceZero) {
                  return _this14.formatPrice(value, true);
                }
                return '';
              }
              return _this14.formatPrice(value, true);
            };
            selections.forEach(function (_ref48) {
              var _adjustedPricesWithTa, _adjustedPricesWithTa2, _adjustedPricesWithou, _adjustedPricesWithou2;
              var optionId = _ref48.optionId,
                valueId = _ref48.valueId,
                adjustedPricesWithTax = _ref48.adjustedPricesWithTax,
                adjustedPricesWithoutTax = _ref48.adjustedPricesWithoutTax;
              var params = Object.assign({}, settings.tax.pdp !== 'EX' ? {
                priceWithTaxValue: adjustedPricesWithTax == null || (_adjustedPricesWithTa = adjustedPricesWithTax.price) == null ? void 0 : _adjustedPricesWithTa.value,
                priceWithTax: showPrice(adjustedPricesWithTax == null || (_adjustedPricesWithTa2 = adjustedPricesWithTax.price) == null ? void 0 : _adjustedPricesWithTa2.value),
                nonSalePriceWithTaxValue: adjustedPricesWithTax != null && adjustedPricesWithTax.nonSalePriceValue ? adjustedPricesWithTax == null ? void 0 : adjustedPricesWithTax.nonSalePriceValue : '',
                nonSalePriceWithTax: adjustedPricesWithTax != null && adjustedPricesWithTax.nonSalePriceValue ? _this14.formatPrice(adjustedPricesWithTax == null ? void 0 : adjustedPricesWithTax.nonSalePriceValue, true) : ''
              } : {}, settings.tax.pdp !== 'INC' ? {
                priceWithoutTaxValue: adjustedPricesWithoutTax == null || (_adjustedPricesWithou = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou.value,
                priceWithoutTax: showPrice(adjustedPricesWithoutTax == null || (_adjustedPricesWithou2 = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou2.value),
                nonSalePriceWithoutTaxValue: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue : '',
                nonSalePriceWithoutTax: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? _this14.formatPrice(adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue, true) : ''
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
                      nonSalePriceWithTax: _this14.formatPrice(exchangedNonSale, true)
                    } : {}, settings.tax.pdp !== 'INC' ? {
                      nonSalePriceWithoutTaxValue: exchangedNonSale,
                      nonSalePriceWithoutTax: _this14.formatPrice(exchangedNonSale, true)
                    } : {});
                  }
                }
                var priceHtml = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this14.optionPriceTemplate, params, null, ['<%', '%>']);
                var priceText = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this14.optionPricePlainTemplate, params, null, ['<%', '%>']);
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
      var valueLabel = ((_option$values = option.values) == null || (_option$values = _option$values.find(function (_ref49) {
        var id = _ref49.id;
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
  var now = new Date();
  var y = year != null ? year : now.getFullYear();
  var m = month != null ? month : now.getMonth() + 1;
  var d = day != null ? day : now.getDate();
  var h = hour || 0;
  var min = minute || 0;
  var sec = second || 0;
  var date;
  if (timezone !== undefined) {
    var utcMillis = Date.UTC(y, m - 1, d, h, min, sec) - timezone * 60 * 60 * 1000;
    date = new Date(utcMillis);
  } else {
    date = new Date();
    if (year) date.setFullYear(year);
    if (month) date.setMonth(month - 1);
    if (day) date.setDate(day);
    date.setHours(h);
    date.setMinutes(min);
    date.setSeconds(sec);
  }
  if (!year && !month && !day) {
    // for daily countdown, add 1 day if date is in the past
    if (date < now) {
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
    var message = !data.instock ? data.stock_message || data.out_of_stock_message || this.context.outOfStockDefaultMessage : data.stock_message || data.purchasing_message;
    this.showMessageBox(message);
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
      _this.updateView(productAttributesData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX3Byb2R1Y3QtZGV0YWlsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEsR0FBQVIsQ0FBQSxFQUFBSCxDQUFBLE9BQUFpQixDQUFBLElBQUFGLENBQUEsS0FBQVYsQ0FBQSxJQUFBTCxDQUFBLEdBQUFnQixDQUFBLENBQUFPLE1BQUEsRUFBQXZCLENBQUEsVUFBQUssQ0FBQSxFQUFBRSxDQUFBLEdBQUFTLENBQUEsQ0FBQWhCLENBQUEsR0FBQXFCLENBQUEsR0FBQUgsQ0FBQSxDQUFBRixDQUFBLEVBQUFRLENBQUEsR0FBQWpCLENBQUEsS0FBQU4sQ0FBQSxRQUFBSSxDQUFBLEdBQUFtQixDQUFBLEtBQUFyQixDQUFBLE1BQUFRLENBQUEsR0FBQUosQ0FBQSxFQUFBQyxDQUFBLEdBQUFELENBQUEsWUFBQUMsQ0FBQSxXQUFBRCxDQUFBLE1BQUFBLENBQUEsTUFBQVIsQ0FBQSxJQUFBUSxDQUFBLE9BQUFjLENBQUEsTUFBQWhCLENBQUEsR0FBQUosQ0FBQSxRQUFBb0IsQ0FBQSxHQUFBZCxDQUFBLFFBQUFDLENBQUEsTUFBQVUsQ0FBQSxDQUFBQyxDQUFBLEdBQUFoQixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBSSxDQUFBLE9BQUFjLENBQUEsR0FBQUcsQ0FBQSxLQUFBbkIsQ0FBQSxHQUFBSixDQUFBLFFBQUFNLENBQUEsTUFBQUosQ0FBQSxJQUFBQSxDQUFBLEdBQUFxQixDQUFBLE1BQUFqQixDQUFBLE1BQUFOLENBQUEsRUFBQU0sQ0FBQSxNQUFBSixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBcUIsQ0FBQSxFQUFBaEIsQ0FBQSxjQUFBSCxDQUFBLElBQUFKLENBQUEsYUFBQW1CLENBQUEsUUFBQUgsQ0FBQSxPQUFBZCxDQUFBLHFCQUFBRSxDQUFBLEVBQUFXLENBQUEsRUFBQVEsQ0FBQSxRQUFBVCxDQUFBLFlBQUFVLFNBQUEsdUNBQUFSLENBQUEsVUFBQUQsQ0FBQSxJQUFBSyxDQUFBLENBQUFMLENBQUEsRUFBQVEsQ0FBQSxHQUFBaEIsQ0FBQSxHQUFBUSxDQUFBLEVBQUFMLENBQUEsR0FBQWEsQ0FBQSxHQUFBeEIsQ0FBQSxHQUFBUSxDQUFBLE9BQUFULENBQUEsR0FBQVksQ0FBQSxNQUFBTSxDQUFBLEtBQUFWLENBQUEsS0FBQUMsQ0FBQSxHQUFBQSxDQUFBLFFBQUFBLENBQUEsU0FBQVUsQ0FBQSxDQUFBZixDQUFBLFFBQUFrQixDQUFBLENBQUFiLENBQUEsRUFBQUcsQ0FBQSxLQUFBTyxDQUFBLENBQUFmLENBQUEsR0FBQVEsQ0FBQSxHQUFBTyxDQUFBLENBQUFDLENBQUEsR0FBQVIsQ0FBQSxhQUFBSSxDQUFBLE1BQUFSLENBQUEsUUFBQUMsQ0FBQSxLQUFBSCxDQUFBLFlBQUFMLENBQUEsR0FBQU8sQ0FBQSxDQUFBRixDQUFBLFdBQUFMLENBQUEsR0FBQUEsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLFVBQUFjLFNBQUEsMkNBQUF6QixDQUFBLENBQUEyQixJQUFBLFNBQUEzQixDQUFBLEVBQUFXLENBQUEsR0FBQVgsQ0FBQSxDQUFBNEIsS0FBQSxFQUFBcEIsQ0FBQSxTQUFBQSxDQUFBLG9CQUFBQSxDQUFBLEtBQUFSLENBQUEsR0FBQU8sQ0FBQSxlQUFBUCxDQUFBLENBQUEwQixJQUFBLENBQUFuQixDQUFBLEdBQUFDLENBQUEsU0FBQUcsQ0FBQSxHQUFBYyxTQUFBLHVDQUFBcEIsQ0FBQSxnQkFBQUcsQ0FBQSxPQUFBRCxDQUFBLEdBQUFSLENBQUEsY0FBQUMsQ0FBQSxJQUFBaUIsQ0FBQSxHQUFBQyxDQUFBLENBQUFmLENBQUEsUUFBQVEsQ0FBQSxHQUFBVixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLEVBQUFlLENBQUEsT0FBQUUsQ0FBQSxrQkFBQXBCLENBQUEsSUFBQU8sQ0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsTUFBQUcsQ0FBQSxHQUFBWCxDQUFBLGNBQUFlLENBQUEsbUJBQUFhLEtBQUEsRUFBQTVCLENBQUEsRUFBQTJCLElBQUEsRUFBQVYsQ0FBQSxTQUFBaEIsQ0FBQSxFQUFBSSxDQUFBLEVBQUFFLENBQUEsUUFBQUksQ0FBQSxRQUFBUyxDQUFBLGdCQUFBVixVQUFBLGNBQUFtQixrQkFBQSxjQUFBQywyQkFBQSxLQUFBOUIsQ0FBQSxHQUFBWSxNQUFBLENBQUFtQixjQUFBLE1BQUF2QixDQUFBLE1BQUFMLENBQUEsSUFBQUgsQ0FBQSxDQUFBQSxDQUFBLElBQUFHLENBQUEsU0FBQVcsbUJBQUEsQ0FBQWQsQ0FBQSxPQUFBRyxDQUFBLGlDQUFBSCxDQUFBLEdBQUFXLENBQUEsR0FBQW1CLDBCQUFBLENBQUFyQixTQUFBLEdBQUFDLFNBQUEsQ0FBQUQsU0FBQSxHQUFBRyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxZQUFBTyxFQUFBaEIsQ0FBQSxXQUFBYSxNQUFBLENBQUFvQixjQUFBLEdBQUFwQixNQUFBLENBQUFvQixjQUFBLENBQUFqQyxDQUFBLEVBQUErQiwwQkFBQSxLQUFBL0IsQ0FBQSxDQUFBa0MsU0FBQSxHQUFBSCwwQkFBQSxFQUFBaEIsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBTSxDQUFBLHlCQUFBTixDQUFBLENBQUFVLFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFGLENBQUEsR0FBQVosQ0FBQSxXQUFBOEIsaUJBQUEsQ0FBQXBCLFNBQUEsR0FBQXFCLDBCQUFBLEVBQUFoQixtQkFBQSxDQUFBSCxDQUFBLGlCQUFBbUIsMEJBQUEsR0FBQWhCLG1CQUFBLENBQUFnQiwwQkFBQSxpQkFBQUQsaUJBQUEsR0FBQUEsaUJBQUEsQ0FBQUssV0FBQSx3QkFBQXBCLG1CQUFBLENBQUFnQiwwQkFBQSxFQUFBekIsQ0FBQSx3QkFBQVMsbUJBQUEsQ0FBQUgsQ0FBQSxHQUFBRyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFOLENBQUEsZ0JBQUFTLG1CQUFBLENBQUFILENBQUEsRUFBQVIsQ0FBQSxpQ0FBQVcsbUJBQUEsQ0FBQUgsQ0FBQSw4REFBQXdCLFlBQUEsWUFBQUEsYUFBQSxhQUFBQyxDQUFBLEVBQUE3QixDQUFBLEVBQUE4QixDQUFBLEVBQUF0QixDQUFBO0FBQUEsU0FBQUQsb0JBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUEsUUFBQU8sQ0FBQSxHQUFBSyxNQUFBLENBQUEwQixjQUFBLFFBQUEvQixDQUFBLHVCQUFBUixDQUFBLElBQUFRLENBQUEsUUFBQU8sbUJBQUEsWUFBQXlCLG1CQUFBeEMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQSxhQUFBSyxFQUFBSixDQUFBLEVBQUFFLENBQUEsSUFBQVcsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBRSxDQUFBLFlBQUFGLENBQUEsZ0JBQUF5QyxPQUFBLENBQUF2QyxDQUFBLEVBQUFFLENBQUEsRUFBQUosQ0FBQSxTQUFBRSxDQUFBLEdBQUFNLENBQUEsR0FBQUEsQ0FBQSxDQUFBUixDQUFBLEVBQUFFLENBQUEsSUFBQTJCLEtBQUEsRUFBQXpCLENBQUEsRUFBQXNDLFVBQUEsR0FBQXpDLENBQUEsRUFBQTBDLFlBQUEsR0FBQTFDLENBQUEsRUFBQTJDLFFBQUEsR0FBQTNDLENBQUEsTUFBQUQsQ0FBQSxDQUFBRSxDQUFBLElBQUFFLENBQUEsSUFBQUUsQ0FBQSxhQUFBQSxDQUFBLGNBQUFBLENBQUEsbUJBQUFTLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBNEMsbUJBQUF6QyxDQUFBLEVBQUFILENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFJLENBQUEsRUFBQWUsQ0FBQSxFQUFBWixDQUFBLGNBQUFELENBQUEsR0FBQUosQ0FBQSxDQUFBaUIsQ0FBQSxFQUFBWixDQUFBLEdBQUFHLENBQUEsR0FBQUosQ0FBQSxDQUFBcUIsS0FBQSxXQUFBekIsQ0FBQSxnQkFBQUosQ0FBQSxDQUFBSSxDQUFBLEtBQUFJLENBQUEsQ0FBQW9CLElBQUEsR0FBQTNCLENBQUEsQ0FBQVcsQ0FBQSxJQUFBa0MsT0FBQSxDQUFBQyxPQUFBLENBQUFuQyxDQUFBLEVBQUFvQyxJQUFBLENBQUE5QyxDQUFBLEVBQUFJLENBQUE7QUFBQSxTQUFBMkMsa0JBQUE3QyxDQUFBLDZCQUFBSCxDQUFBLFNBQUFELENBQUEsR0FBQWtELFNBQUEsYUFBQUosT0FBQSxXQUFBNUMsQ0FBQSxFQUFBSSxDQUFBLFFBQUFlLENBQUEsR0FBQWpCLENBQUEsQ0FBQStDLEtBQUEsQ0FBQWxELENBQUEsRUFBQUQsQ0FBQSxZQUFBb0QsTUFBQWhELENBQUEsSUFBQXlDLGtCQUFBLENBQUF4QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQThDLEtBQUEsRUFBQUMsTUFBQSxVQUFBakQsQ0FBQSxjQUFBaUQsT0FBQWpELENBQUEsSUFBQXlDLGtCQUFBLENBQUF4QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQThDLEtBQUEsRUFBQUMsTUFBQSxXQUFBakQsQ0FBQSxLQUFBZ0QsS0FBQTtBQUFBLFNBQUFFLGVBQUFyRCxDQUFBLEVBQUFLLENBQUEsSUFBQUwsQ0FBQSxDQUFBUyxTQUFBLEdBQUFHLE1BQUEsQ0FBQUMsTUFBQSxDQUFBUixDQUFBLENBQUFJLFNBQUEsR0FBQVQsQ0FBQSxDQUFBUyxTQUFBLENBQUE2QyxXQUFBLEdBQUF0RCxDQUFBLEVBQUF1RCxlQUFBLENBQUF2RCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBa0QsZ0JBQUF2RCxDQUFBLEVBQUFELENBQUEsV0FBQXdELGVBQUEsR0FBQTNDLE1BQUEsQ0FBQW9CLGNBQUEsR0FBQXBCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsSUFBQSxlQUFBdEIsQ0FBQSxFQUFBRCxDQUFBLFdBQUFDLENBQUEsQ0FBQWlDLFNBQUEsR0FBQWxDLENBQUEsRUFBQUMsQ0FBQSxLQUFBdUQsZUFBQSxDQUFBdkQsQ0FBQSxFQUFBRCxDQUFBO0FBRGtCO0FBQ2M7QUFDYTtBQUNNO0FBQ3FCO0FBRXhFLElBQU02RCxZQUFZLEdBQUcsR0FBRztBQUFDLElBQ25CQyxpQkFBaUI7RUFvR25CO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSSxTQUFBQSxrQkFBWUMsWUFBWSxFQUFTQyxRQUFRLEVBQVM7SUFBQSxJQUF0Q0QsWUFBWTtNQUFaQSxZQUFZLEdBQUcsSUFBSTtJQUFBO0lBQUEsSUFBRUMsUUFBUTtNQUFSQSxRQUFRLEdBQUcsSUFBSTtJQUFBO0lBQUEsS0F4R2hEQyxhQUFhO0lBeUdULElBQUksQ0FBQ0YsWUFBWSxHQUFHQSxZQUFZO0lBQ2hDLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0UsS0FBSyxHQUFHQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRXRCLElBQUlKLFlBQVksSUFBSUMsUUFBUSxFQUFFO01BQzFCLElBQUksQ0FBQ0ksV0FBVyxDQUFDLENBQUM7SUFDdEI7RUFDSjtFQUFDLElBQUFDLE1BQUEsR0FBQVAsaUJBQUEsQ0FBQXBELFNBQUE7RUFBQTJELE1BQUEsQ0FFREMsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDVCxJQUFJLElBQUksQ0FBQ1AsUUFBUSxFQUFFO01BQ2Y7TUFDQSxJQUFJLENBQUNBLFFBQVEsQ0FDUlEsSUFBSSxDQUFDLGdHQUFnRyxDQUFDLENBQ3RHQSxJQUFJLENBQUMsK0RBQStELENBQUMsQ0FDckVDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FDWkMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7UUFDcEJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdEIsSUFBTUMsRUFBRSxHQUFHVixDQUFDLENBQUNRLEtBQUssQ0FBQ0csYUFBYSxDQUFDO1FBRWpDLElBQU1DLFFBQVEsR0FBR0YsRUFBRSxDQUFDRyxJQUFJLENBQUMseUJBQXlCLENBQUM7UUFDbkQsSUFBTUMsV0FBVyxHQUFHSixFQUFFLENBQUNHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztRQUN6RCxJQUFNRSxZQUFZLEdBQUdMLEVBQUUsQ0FBQ0csSUFBSSxDQUFDLDBCQUEwQixDQUFDO1FBQ3hELElBQU1HLE9BQU8sR0FBR04sRUFBRSxDQUFDRyxJQUFJLENBQUMseUJBQXlCLENBQUM7UUFDbEQsSUFBTUksSUFBSSxHQUFHUCxFQUFFLENBQUNRLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDN0QsTUFBTSxHQUFHLENBQUMsR0FDN0Q4RCxNQUFNLENBQUNQLFFBQVEsQ0FBQ1EsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUkxQixZQUFZLEdBQzlDLElBQUk7UUFFVlUsS0FBSSxDQUFDaUIsU0FBUyxDQUFDVCxRQUFRLEVBQUVFLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxPQUFPLEVBQUVDLElBQUksQ0FBQztNQUN0RSxDQUFDLENBQUM7SUFDVjs7SUFFQTtJQUNBLElBQUksQ0FBQ0ssYUFBYSxDQUFDakIsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUNFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3JGQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCTCxLQUFJLENBQUNtQixVQUFVLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJLENBQUNELGFBQWEsQ0FBQ2YsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDQyxLQUFLLEVBQUs7TUFDeEMsSUFBSUEsS0FBSyxDQUFDZ0IsR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUN4QmhCLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdEJMLEtBQUksQ0FBQ21CLFVBQVUsQ0FBQyxDQUFDO01BQ3JCO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBSSxDQUFDRCxhQUFhLENBQUNmLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3RDLElBQUlKLEtBQUksQ0FBQ2tCLGFBQWEsQ0FBQ0csRUFBRSxDQUFDakIsS0FBSyxDQUFDa0IsTUFBTSxDQUFDLEVBQUU7UUFDckNsQixLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RCTCxLQUFJLENBQUNtQixVQUFVLENBQUMsQ0FBQztNQUNyQjtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUksQ0FBQ0QsYUFBYSxDQUFDakIsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUNFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3BGQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCLElBQU1DLEVBQUUsR0FBR1YsQ0FBQyxDQUFDUSxLQUFLLENBQUNHLGFBQWEsQ0FBQztNQUNqQ1AsS0FBSSxDQUFDdUIsWUFBWSxDQUNiakIsRUFBRSxDQUFDRyxJQUFJLENBQUMseUJBQXlCLENBQUMsRUFDbENILEVBQUUsQ0FBQ0csSUFBSSxDQUFDLDRCQUE0QixDQUFDLEVBQ3JDSCxFQUFFLENBQUNHLElBQUksQ0FBQywwQkFBMEIsQ0FDdEMsQ0FBQztJQUNMLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUksQ0FBQ1MsYUFBYSxDQUFDakIsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUNFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ2pGQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCLElBQU1DLEVBQUUsR0FBR1YsQ0FBQyxDQUFDUSxLQUFLLENBQUNHLGFBQWEsQ0FBQztNQUNqQyxJQUFNSyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ0csSUFBSSxDQUFDLHlCQUF5QixDQUFDO01BQ2xEVCxLQUFJLENBQUN3QixZQUFZLENBQUNaLE9BQU8sQ0FBQztJQUM5QixDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJLENBQUNNLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDRSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztNQUM1RkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUN0QixJQUFNQyxFQUFFLEdBQUdWLENBQUMsQ0FBQ1EsS0FBSyxDQUFDRyxhQUFhLENBQUM7TUFDakMsSUFBTWtCLFNBQVMsR0FBR25CLEVBQUUsQ0FBQ0csSUFBSSxDQUFDLG1DQUFtQyxDQUFDO01BQzlEVCxLQUFJLENBQUMwQixVQUFVLENBQ1hwQixFQUFFLENBQUNHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxFQUNsQ0gsRUFBRSxDQUFDRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsRUFDckNILEVBQUUsQ0FBQ0csSUFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQ25DZ0IsU0FDSixDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDUCxhQUFhLENBQUNqQixJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQ0UsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7TUFDNUZBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDdEJMLEtBQUksQ0FBQzJCLGVBQWUsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ1QsYUFBYSxDQUFDakIsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUNFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3hGQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCTCxLQUFJLENBQUM0QixXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNWLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDRSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztNQUN4RkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUN0QkwsS0FBSSxDQUFDNkIsT0FBTyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDWCxhQUFhLENBQUNqQixJQUFJLENBQUMsNENBQTRDLENBQUMsQ0FBQ0UsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7TUFDekZBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDdEJMLEtBQUksQ0FBQzhCLFFBQVEsQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQWhDLE1BQUEsQ0FFRGlDLFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFBLEVBQUc7SUFDWCxJQUFJLElBQUksQ0FBQ2IsYUFBYSxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsYUFBYSxDQUFDYyxNQUFNLENBQUMsQ0FBQztNQUMzQixJQUFJLENBQUNkLGFBQWEsR0FBR3RCLENBQUMsQ0FBQyxDQUFDO0lBQzVCO0VBQ0osQ0FBQztFQUFBRSxNQUFBLENBRURELFdBQVcsR0FBWCxTQUFBQSxXQUFXQSxDQUFBLEVBQUc7SUFBQSxJQUFBb0MsbUJBQUE7SUFDVixJQUFNQyxjQUFjLEdBQUcsSUFBSSxDQUFDMUMsWUFBWSxDQUFDMkMsVUFBVSxDQUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDLENBQUM7SUFDckVGLGNBQWMsQ0FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQ29DLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxJQUFJLENBQUMscUNBQXFDLEVBQUUsRUFBRSxDQUFDO0lBRXhHLElBQU1DLG9CQUFvQixJQUFBTixtQkFBQSxHQUFHQyxjQUFjLENBQUNNLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXJCUCxtQkFBQSxDQUF1QlEsU0FBUztJQUM3RCxJQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDakQsUUFBUSxDQUFDcUIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDYixJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQzBDLElBQUksQ0FBQyxDQUFDO0lBQzVGLElBQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNuRCxRQUFRLENBQUNnQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksUUFBUTtJQUNqRSxJQUFNb0MsY0FBYyxHQUFHLElBQUksQ0FBQ3BELFFBQVEsQ0FBQ2dCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLFVBQVU7SUFDekUsSUFBTXFDLFdBQVcsR0FBRyxJQUFJLENBQUNyRCxRQUFRLENBQUNnQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksZ0JBQWdCO0lBRXpFLElBQU1zQyxNQUFNLEdBQUcsSUFBSSxDQUFDdEQsUUFBUSxDQUFDUSxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQ3VDLEdBQUcsQ0FBQyxDQUFDLENBQUNRLEdBQUcsQ0FBQyxVQUFBQyxFQUFFO01BQUEsSUFBQUMsaUJBQUE7TUFBQSxPQUFLO1FBQ2xGQyxXQUFXLEdBQUFELGlCQUFBLEdBQUV0RCxDQUFDLENBQUNxRCxFQUFFLENBQUMsQ0FBQ2hELElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLENBQUMsQ0FBQyxxQkFBL0RVLGlCQUFBLENBQWlFVDtNQUNsRixDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBRUgsSUFBTVcsU0FBUyxHQUFHLElBQUksQ0FBQzNELFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUN1QyxHQUFHLENBQUMsQ0FBQyxDQUFDUSxHQUFHLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQUEsSUFBQUksUUFBQTtNQUNsRixJQUFNQyxHQUFHLEdBQUcxRCxDQUFDLENBQUNxRCxFQUFFLENBQUMsQ0FBQ2hELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDLENBQUM7TUFDM0QsSUFBTTVCLFFBQVEsR0FBRzhDLEdBQUcsQ0FBQzdDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztNQUNwRCxJQUFNSSxJQUFJLEdBQUdFLE1BQU0sQ0FBQ1AsUUFBUSxDQUFDUSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTFCLFlBQVk7TUFDM0RnRSxHQUFHLENBQUNqQixVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLDZDQUE2QyxFQUFFekIsSUFBSSxDQUFDO01BRW5HLE9BQU87UUFDSHNDLFdBQVcsR0FBQUUsUUFBQSxHQUFFQyxHQUFHLENBQUNkLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQVZhLFFBQUEsQ0FBWVo7TUFDN0IsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLElBQU1jLE1BQU0sR0FBRyxJQUFJLENBQUM5RCxRQUFRLENBQUNRLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDdUMsR0FBRyxDQUFDLENBQUMsQ0FDL0RnQixNQUFNLENBQUMsVUFBQTFHLENBQUM7TUFBQSxPQUFJOEMsQ0FBQyxDQUFDOUMsQ0FBQyxDQUFDLENBQUNnRSxPQUFPLENBQUMsZ0dBQWdHLENBQUMsQ0FBQzdELE1BQU0sS0FBSyxDQUFDO0lBQUEsRUFBQyxDQUN4SStGLEdBQUcsQ0FBQyxVQUFBbEcsQ0FBQyxFQUFJO01BQUEsSUFBQTJHLE9BQUE7TUFDTixJQUFNbkQsRUFBRSxHQUFHVixDQUFDLENBQUM5QyxDQUFDLENBQUMsQ0FBQ3NGLEtBQUssQ0FBQyxDQUFDLENBQ2xCQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FDckNDLElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxFQUFFLENBQUM7TUFFcEQsT0FBTztRQUNIYSxXQUFXLEdBQUFNLE9BQUEsR0FBRW5ELEVBQUUsQ0FBQ2tDLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQVRpQixPQUFBLENBQVdoQjtNQUM1QixDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRU4sSUFBSSxDQUFDdkIsYUFBYSxHQUFHdEIsQ0FBQyxDQUFDVixnREFBUSxDQUFDd0UsTUFBTSxDQUFDLElBQUksQ0FBQ2hFLGFBQWEsRUFBRTtNQUN2RDZDLG9CQUFvQixFQUFwQkEsb0JBQW9CO01BQ3BCRyxJQUFJLEVBQUpBLElBQUk7TUFDSkUsV0FBVyxFQUFYQSxXQUFXO01BQ1hDLGNBQWMsRUFBZEEsY0FBYztNQUNkQyxXQUFXLEVBQVhBLFdBQVc7TUFDWEMsTUFBTSxFQUFOQSxNQUFNO01BQ05LLFNBQVMsRUFBVEEsU0FBUztNQUNURyxNQUFNLEVBQU5BO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUNyQyxhQUFhLENBQUN5QyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDakUsS0FBSyxDQUFDO0lBRTlDLElBQUksQ0FBQ2tFLGFBQWEsQ0FBQyxDQUFDO0lBRXBCLElBQUksQ0FBQ0MsU0FBUyxHQUFHM0UsMkRBQWUsQ0FBQyxJQUFJLENBQUMrQixhQUFhLENBQUNzQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDeER1QixpQkFBaUIsRUFBRSxLQUFLO01BQ3hCQyx1QkFBdUIsRUFBRSxLQUFLO01BQzlCQyxpQkFBaUIsRUFBRTtJQUN2QixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFuRSxNQUFBLENBRURtQixTQUFTLEdBQVQsU0FBQUEsU0FBU0EsQ0FBQ1QsUUFBUSxFQUFFRSxXQUFXLEVBQUVDLFlBQVksRUFBRUMsT0FBTyxFQUFFYSxTQUFTLEVBQUU7SUFBQSxJQUFBeUMsTUFBQTtJQUMvRCxJQUFJLENBQUNDLGtCQUFrQixHQUFHdkUsQ0FBQyxDQUFDd0UsUUFBUSxDQUFDQyxhQUFhLENBQUM7SUFDbkQsSUFBSSxDQUFDMUUsS0FBSyxDQUFDMkUsUUFBUSxDQUFDLHNCQUFzQixDQUFDO0lBRTNDLElBQUksSUFBSSxDQUFDOUUsWUFBWSxFQUFFO01BQ25CLElBQU0rRSxRQUFRLEdBQUcsSUFBSSxDQUFDL0UsWUFBWSxDQUFDMkMsVUFBVSxDQUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUN6RCxJQUFJLENBQUNzQixZQUFZLENBQ2JnRCxRQUFRLENBQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ3BCaUMsUUFBUSxDQUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN2QixJQUFJLENBQUM5QyxZQUFZLENBQUMyQyxVQUFVLENBQUNHLElBQUksQ0FBQyxpQkFBaUIsQ0FDdkQsQ0FBQztJQUNMO0lBRUEsSUFBSTFCLE9BQU8sRUFBRTtNQUNULElBQUksQ0FBQ1ksWUFBWSxDQUFDWixPQUFPLENBQUM7SUFDOUIsQ0FBQyxNQUFNLElBQUlhLFNBQVMsRUFBRTtNQUNsQixJQUFJLENBQUNDLFVBQVUsQ0FBQ2xCLFFBQVEsRUFBRUUsV0FBVyxFQUFFQyxZQUFZLEVBQUVjLFNBQVMsQ0FBQztJQUNuRTtJQUVBLElBQUksQ0FBQ1AsYUFBYSxDQUFDb0QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ3RFLElBQUksQ0FBQ1gsU0FBUyxDQUFDWSxRQUFRLENBQUMsQ0FBQztJQUV6QkMsVUFBVSxDQUFDLFlBQU07TUFDYlQsTUFBSSxDQUFDaEQsYUFBYSxDQUFDakIsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUMyRSxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3RGLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDWCxDQUFDO0VBQUE5RSxNQUFBLENBRURxQixVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQUEsSUFBQTBELE1BQUE7SUFDVCxJQUFJLENBQUMzRCxhQUFhLENBQUNvRCxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3ZDSyxVQUFVLENBQUMsWUFBTTtNQUNiRSxNQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO01BQ3BCRCxNQUFJLENBQUNFLFNBQVMsQ0FBQyxDQUFDO01BQ2hCRixNQUFJLENBQUNsRixLQUFLLENBQUM4RSxXQUFXLENBQUMsc0JBQXNCLENBQUM7TUFDOUNJLE1BQUksQ0FBQzNELGFBQWEsQ0FBQ3VELFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQ2QsSUFBSSxDQUFDLENBQUM7TUFDakRrQixNQUFJLENBQUNmLFNBQVMsQ0FBQ2tCLFVBQVUsQ0FBQyxDQUFDO01BQzNCLElBQUlILE1BQUksQ0FBQ1Ysa0JBQWtCLEVBQUVVLE1BQUksQ0FBQ1Ysa0JBQWtCLENBQUNTLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDekUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNYLENBQUM7RUFBQTlFLE1BQUEsQ0FFRHlCLFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFDMEQsWUFBWSxFQUFFQyxlQUFlLEVBQUV2RSxZQUFZLEVBQUU7SUFDdEQsSUFBSSxDQUFDbUUsYUFBYSxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUNoQixJQUFJLENBQUNJLGFBQWEsQ0FBQyxDQUFDO0lBRXBCLElBQUksQ0FBQ0MsY0FBYyxDQUFDSCxZQUFZLENBQUM7SUFDakMsSUFBSSxDQUFDSSxhQUFhLENBQUNKLFlBQVksRUFBRUMsZUFBZSxFQUFFdkUsWUFBWSxDQUFDO0VBQ25FLENBQUM7RUFBQWIsTUFBQSxDQUVEcUYsYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ2pFLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDdUUsSUFBSSxDQUFDLENBQUM7RUFDL0UsQ0FBQztFQUFBMUUsTUFBQSxDQUVEd0YsYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ3BFLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDMEQsSUFBSSxDQUFDLENBQUM7RUFDL0UsQ0FBQztFQUFBN0QsTUFBQSxDQUVEc0YsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUNILFlBQVksRUFBRXJFLE9BQU8sRUFBRTtJQUNsQyxJQUFJLENBQUNNLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDd0UsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNySGpCLE1BQU0sQ0FBQyxVQUFDK0IsRUFBRSxFQUFFekksQ0FBQztNQUFBLE9BQ1ZtSSxZQUFZLElBQUlyRixDQUFDLENBQUM5QyxDQUFDLENBQUMsQ0FBQzJELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLd0UsWUFBWSxJQUNsRXJFLE9BQU8sSUFBSWhCLENBQUMsQ0FBQzlDLENBQUMsQ0FBQyxDQUFDMkQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUtHLE9BQU87SUFBQSxFQUFDLENBQ2xFMEQsUUFBUSxDQUFDLFdBQVcsQ0FBQztFQUM5QixDQUFDO0VBQUF4RSxNQUFBLENBRUR1RixhQUFhLEdBQWIsU0FBQUEsYUFBYUEsQ0FBQ0osWUFBWSxFQUFFQyxlQUFlLEVBQUV2RSxZQUFZLEVBQUU7SUFDdkQsSUFBTTZFLGVBQWUsR0FBRyxJQUFJLENBQUN0RSxhQUFhLENBQUNqQixJQUFJLENBQUMsMkNBQTJDLENBQUM7SUFDNUYsSUFBTUssRUFBRSxHQUFHa0YsZUFBZSxDQUFDdkYsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQyxJQUFNa0MsVUFBVSxHQUFHLElBQUksQ0FBQ2pCLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQztJQUVuRnVGLGVBQWUsQ0FBQ2xELElBQUksQ0FBQyxpQkFBaUIsRUFBRTNCLFlBQVksQ0FBQztJQUNyREwsRUFBRSxDQUFDZ0MsSUFBSSxDQUFDLE1BQU0sRUFBRTNCLFlBQVksQ0FBQztJQUM3QndCLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLEtBQUssRUFBRTJDLFlBQVksQ0FBQyxDQUFDM0MsSUFBSSxDQUFDLFFBQVEsRUFBRTRDLGVBQWUsQ0FBQztJQUVwRSxJQUFJLENBQUNPLFFBQVEsQ0FBQ2hGLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ2lGLElBQUksQ0FDL0JULFlBQVksRUFDWnRFLFlBQVksRUFDWnVFLGVBQ0osQ0FBQztJQUVELElBQU1TLFdBQVcsR0FBR0MsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDM0QsSUFBSUgsV0FBVyxFQUFFO01BQ2IsSUFBTUksZ0JBQWdCLEdBQUc7UUFDckIsa0JBQWtCLFdBQVNkLFlBQVksTUFBRztRQUMxQyxxQkFBcUIsRUFBRSxRQUFRO1FBQy9CLG1CQUFtQixFQUFFLFdBQVc7UUFDaEMsbUJBQW1CLEVBQUUsYUFBYTtRQUNsQyxpQkFBaUIsRUFBRTtNQUN2QixDQUFDO01BQ0QsSUFBSSxDQUFDL0QsYUFBYSxDQUFDakIsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUMrRixHQUFHLENBQUNELGdCQUFnQixDQUFDO0lBQ2hHO0VBQ0osQ0FBQztFQUFBakcsTUFBQSxDQUVEbUcsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUNULElBQU1ULGVBQWUsR0FBRyxJQUFJLENBQUN0RSxhQUFhLENBQUNqQixJQUFJLENBQUMscURBQXFELENBQUM7SUFDdEcsSUFBTWlHLGVBQWUsR0FBR1YsZUFBZSxDQUFDVyxNQUFNLENBQUMsQ0FBQztJQUNoRCxJQUFNQyxjQUFjLEdBQUdaLGVBQWUsQ0FBQ2EsS0FBSyxDQUFDLENBQUM7SUFFOUMsSUFBTUMsTUFBTSxHQUFHLElBQUksQ0FBQ2IsUUFBUSxDQUFDaEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOEYsS0FBSztJQUNuRCxJQUFNSixNQUFNLEdBQUdHLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDLENBQUM7SUFDOUIsSUFBTUUsS0FBSyxHQUFHQyxNQUFNLENBQUNELEtBQUssQ0FBQyxDQUFDO0lBRTVCLElBQUlGLE1BQU0sR0FBR0QsZUFBZSxJQUFJRyxLQUFLLEdBQUdELGNBQWMsRUFBRTtNQUNwRCxJQUFJLENBQUNYLFFBQVEsQ0FBQ2hGLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ2tELElBQUksQ0FBQyxDQUFDO0lBQ3pDO0VBQ0osQ0FBQztFQUFBN0QsTUFBQSxDQUVEK0QsYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUFBLElBQUEyQyxNQUFBO0lBQ1osSUFBSSxDQUFDZixRQUFRLEdBQUcsSUFBSSxDQUFDdkUsYUFBYSxDQUFDakIsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUN3RyxRQUFRLENBQUM7TUFDMUZDLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFBO1FBQUEsT0FBUUYsTUFBSSxDQUFDUCxVQUFVLENBQUMsQ0FBQztNQUFBO01BQy9CVSxXQUFXLEVBQUUsRUFBRTtNQUNmQyxhQUFhLEVBQUU7SUFDbkIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBOUcsTUFBQSxDQUVEK0csYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQzNGLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDdUUsSUFBSSxDQUFDLENBQUM7RUFDbkYsQ0FBQztFQUFBMUUsTUFBQSxDQUVEZ0YsYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQzVELGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDMEQsSUFBSSxDQUFDLENBQUMsQ0FDMUUxRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUNxQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztFQUN2QyxDQUFDO0VBQUF4QyxNQUFBLENBRUQwQixZQUFZLEdBQVosU0FBQUEsWUFBWUEsQ0FBQ1osT0FBTyxFQUFFO0lBQ2xCLElBQUksQ0FBQzBFLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ1AsU0FBUyxDQUFDLENBQUM7SUFDaEIsSUFBSSxDQUFDOEIsYUFBYSxDQUFDLENBQUM7SUFFcEIsSUFBTUMsR0FBRyxzQ0FBb0NsRyxPQUFPLHNCQUFtQjtJQUN2RSxJQUFJLENBQUNNLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDdUUsSUFBSSxDQUFDLENBQUMsQ0FBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQ3FDLElBQUksQ0FBQyxLQUFLLEVBQUV3RSxHQUFHLENBQUM7SUFDL0csSUFBSSxDQUFDMUIsY0FBYyxDQUFDLElBQUksRUFBRXhFLE9BQU8sQ0FBQztFQUN0QyxDQUFDO0VBQUFkLE1BQUEsQ0FFRDRCLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFDdUQsWUFBWSxFQUFFQyxlQUFlLEVBQUV2RSxZQUFZLEVBQUVjLFNBQVMsRUFBRTtJQUMvRCxJQUFJLENBQUM2RCxhQUFhLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNSLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ2lDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hCLElBQUksQ0FBQzNCLGNBQWMsQ0FBQ0gsWUFBWSxDQUFDO0lBQ2pDLElBQUksQ0FBQytCLFdBQVcsQ0FBQy9CLFlBQVksRUFBRUMsZUFBZSxFQUFFdkUsWUFBWSxFQUFFYyxTQUFTLENBQUM7RUFDNUUsQ0FBQztFQUFBM0IsTUFBQSxDQUVEa0gsV0FBVyxHQUFYLFNBQUFBLFdBQVdBLENBQUMvQixZQUFZLEVBQUVDLGVBQWUsRUFBRXZFLFlBQVksRUFBRWMsU0FBUyxFQUFFO0lBQ2hFLElBQUksQ0FBQ1AsYUFBYSxDQUFDakIsSUFBSSxDQUFDLHdEQUF3RCxDQUFDLENBQzVFcUMsSUFBSSxDQUFDLEtBQUssRUFBRTJDLFlBQVksQ0FBQyxDQUN6QjNDLElBQUksQ0FBQyxRQUFRLEVBQUU0QyxlQUFlLENBQUMsQ0FDL0I1QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUzQixZQUFZLENBQUM7SUFDMUMsSUFBSSxDQUFDc0csaUJBQWlCLENBQUMsQ0FBQyxFQUFFeEYsU0FBUyxDQUFDO0VBQ3hDLENBQUM7RUFBQTNCLE1BQUEsQ0FFRGlILFNBQVMsR0FBVCxTQUFBQSxTQUFTQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUM3RixhQUFhLENBQUNqQixJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQ3VFLElBQUksQ0FBQyxDQUFDO0VBQzFFLENBQUM7RUFBQTFFLE1BQUEsQ0FFRGlGLFNBQVMsR0FBVCxTQUFBQSxTQUFTQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUM3RCxhQUFhLENBQUNqQixJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQzBELElBQUksQ0FBQyxDQUFDO0lBQ3RFLElBQUksQ0FBQzdCLFFBQVEsQ0FBQyxDQUFDO0VBQ25CLENBQUM7RUFBQWhDLE1BQUEsQ0FFRG1ILGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUNDLFdBQVcsRUFBRXpGLFNBQVMsRUFBaUI7SUFBQSxJQUExQkEsU0FBUztNQUFUQSxTQUFTLEdBQUduQyxZQUFZO0lBQUE7SUFDbkQsSUFBSSxDQUFDNEIsYUFBYSxDQUFDakIsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQzFEK0YsR0FBRyxDQUFDLHFCQUFxQixFQUFFa0IsV0FBVyxDQUFDLENBQ3ZDbEIsR0FBRyxDQUFDLG1CQUFtQixFQUFFdkUsU0FBUyxDQUFDO0VBQzVDLENBQUM7RUFBQTNCLE1BQUEsQ0FFRDhCLFdBQVcsR0FBWCxTQUFBQSxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFNMEIsR0FBRyxHQUFHLElBQUksQ0FBQ3BDLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztJQUMzRSxJQUFNWSxJQUFJLEdBQUdFLE1BQU0sQ0FBQ3VDLEdBQUcsQ0FBQzBDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RCxJQUFNbUIsS0FBSyxHQUFHcEcsTUFBTSxDQUFDdUMsR0FBRyxDQUFDMEMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSTFHLFlBQVk7SUFFbEUsSUFBSXVCLElBQUksR0FBR3NHLEtBQUssR0FBRyxDQUFDLEVBQUU7TUFDbEIsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQ3BHLElBQUksR0FBRyxDQUFDLEVBQUVzRyxLQUFLLENBQUM7SUFDM0MsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQyxDQUFDLEVBQUVFLEtBQUssQ0FBQztJQUNwQztFQUNKLENBQUM7RUFBQXJILE1BQUEsQ0FFRDZCLGVBQWUsR0FBZixTQUFBQSxlQUFlQSxDQUFBLEVBQUc7SUFDZCxJQUFNMkIsR0FBRyxHQUFHLElBQUksQ0FBQ3BDLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztJQUMzRSxJQUFNWSxJQUFJLEdBQUdFLE1BQU0sQ0FBQ3VDLEdBQUcsQ0FBQzBDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RCxJQUFNbUIsS0FBSyxHQUFHcEcsTUFBTSxDQUFDdUMsR0FBRyxDQUFDMEMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSTFHLFlBQVk7SUFFbEUsSUFBSXVCLElBQUksR0FBRyxDQUFDLEVBQUU7TUFDVixJQUFJLENBQUNvRyxpQkFBaUIsQ0FBQ3BHLElBQUksR0FBRyxDQUFDLEVBQUVzRyxLQUFLLENBQUM7SUFDM0MsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQ0UsS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxDQUFDO0lBQzVDO0VBQ0osQ0FBQztFQUFBckgsTUFBQSxDQUVEK0IsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUFBLElBQUF1RixNQUFBO0lBQ05DLGFBQWEsQ0FBQyxJQUFJLENBQUNDLFdBQVcsQ0FBQztJQUMvQixJQUFJLENBQUNBLFdBQVcsR0FBR0MsV0FBVyxDQUFDLFlBQU07TUFDakNILE1BQUksQ0FBQ3hGLFdBQVcsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDUCxJQUFJLENBQUNWLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDcUUsUUFBUSxDQUFDLFVBQVUsQ0FBQztFQUN4RixDQUFDO0VBQUF4RSxNQUFBLENBRURnQyxRQUFRLEdBQVIsU0FBQUEsUUFBUUEsQ0FBQSxFQUFHO0lBQ1B1RixhQUFhLENBQUMsSUFBSSxDQUFDQyxXQUFXLENBQUM7SUFDL0IsSUFBSSxDQUFDcEcsYUFBYSxDQUFDakIsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUN3RSxXQUFXLENBQUMsVUFBVSxDQUFDO0VBQzNGLENBQUM7RUFBQSxPQUFBbEYsaUJBQUE7QUFBQTtBQUdFLElBQU1pSSxxQkFBcUIsMEJBQUFDLG1CQUFBO0VBUzlCLFNBQUFELHNCQUNJRSxNQUFNLEVBQUFDLEtBQUEsRUFXUjtJQUFBLElBQUFDLE1BQUE7SUFBQSxJQUFBQyxJQUFBLEdBQUFGLEtBQUEsY0FETSxDQUFDLENBQUMsR0FBQUEsS0FBQTtNQVJGRyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztNQUNUQyxZQUFZLEdBQUFGLElBQUEsQ0FBWkUsWUFBWTtNQUNaQyxRQUFRLEdBQUFILElBQUEsQ0FBUkcsUUFBUTtNQUNSQyxXQUFXLEdBQUFKLElBQUEsQ0FBWEksV0FBVztNQUNYQyxTQUFTLEdBQUFMLElBQUEsQ0FBVEssU0FBUztNQUNUQyxjQUFjLEdBQUFOLElBQUEsQ0FBZE0sY0FBYztNQUNkQyxpQkFBaUIsR0FBQVAsSUFBQSxDQUFqQk8saUJBQWlCO01BQ2pCQyxjQUFjLEdBQUFSLElBQUEsQ0FBZFEsY0FBYztJQUdsQlQsTUFBQSxHQUFBSCxtQkFBQSxDQUFBckssSUFBQSxLQUFNLENBQUM7SUFBQ3dLLE1BQUEsQ0FyQlpVLG9CQUFvQjtJQXNCaEJWLE1BQUEsQ0FBS0YsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCRSxNQUFBLENBQUtFLFNBQVMsR0FBR0EsU0FBUztJQUMxQkYsTUFBQSxDQUFLRyxZQUFZLEdBQUdBLFlBQVk7SUFDaENILE1BQUEsQ0FBS0ksUUFBUSxHQUFHQSxRQUFRO0lBQ3hCSixNQUFBLENBQUtLLFdBQVcsR0FBR0EsV0FBVztJQUM5QkwsTUFBQSxDQUFLTSxTQUFTLEdBQUdBLFNBQVM7SUFDMUJOLE1BQUEsQ0FBS08sY0FBYyxHQUFHQSxjQUFjO0lBQ3BDUCxNQUFBLENBQUtRLGlCQUFpQixHQUFHQSxpQkFBaUI7SUFDMUNSLE1BQUEsQ0FBS1MsY0FBYyxHQUFHQSxjQUFjO0lBQUMsT0FBQVQsTUFBQTtFQUN6QztFQUFDN0ksY0FBQSxDQUFBeUkscUJBQUEsRUFBQUMsbUJBQUE7RUFBQSxJQUFBYyxPQUFBLEdBQUFmLHFCQUFBLENBQUFyTCxTQUFBO0VBQUFvTSxPQUFBLENBRUtDLGdCQUFnQjtJQUFBLElBQUFDLGlCQUFBLEdBQUEvSixpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBdEIsU0FBQTJLLFFBQUE7TUFBQSxPQUFBN0ssWUFBQSxHQUFBQyxDQUFBLFdBQUE2SyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQTlNLENBQUE7VUFBQTtZQUNJLElBQUksQ0FBQ2tHLFlBQVksQ0FBQyxDQUFDO1lBRW5CLElBQUksQ0FBQ29DLGtCQUFrQixHQUFHdkUsQ0FBQyxDQUFDd0UsUUFBUSxDQUFDQyxhQUFhLENBQUM7WUFDbkQsSUFBSSxDQUFDMUUsS0FBSyxDQUFDMkUsUUFBUSxDQUFDLHNCQUFzQixDQUFDOztZQUUzQztZQUNBLElBQUksQ0FBQ3BELGFBQWEsR0FBR3RCLENBQUMsQ0FBQ1YsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQyxJQUFJLENBQUM0RSxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQ3BILGFBQWEsQ0FBQ3lDLElBQUksQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUNqRSxLQUFLLENBQUM7WUFDOUMsSUFBSSxDQUFDdUIsYUFBYSxDQUFDb0QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsVUFBVSxDQUFDO1VBQUM7WUFBQSxPQUFBa0UsUUFBQSxDQUFBN0wsQ0FBQTtRQUFBO01BQUEsR0FBQTRMLE9BQUE7SUFBQSxDQUMxRTtJQUFBLFNBVktGLGdCQUFnQkEsQ0FBQTtNQUFBLE9BQUFDLGlCQUFBLENBQUE3SixLQUFBLE9BQUFELFNBQUE7SUFBQTtJQUFBLE9BQWhCNkosZ0JBQWdCO0VBQUE7RUFBQUQsT0FBQSxDQVloQkssU0FBUztJQUFBLElBQUFDLFVBQUEsR0FBQW5LLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFmLFNBQUErSyxTQUFBO01BQUEsSUFBQUMsU0FBQSxFQUFBN0QsZUFBQSxFQUFBM0Msb0JBQUEsRUFBQUcsSUFBQSxFQUFBRSxXQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxNQUFBLEVBQUFLLFNBQUEsRUFBQUcsTUFBQSxFQUFBckMsYUFBQTtNQUFBLE9BQUFyRCxZQUFBLEdBQUFDLENBQUEsV0FBQWtMLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBbk4sQ0FBQTtVQUFBO1lBQUFtTixTQUFBLENBQUFuTixDQUFBO1lBQUEsT0FFVSxJQUFJLENBQUNvTixZQUFZLENBQUMsQ0FBQztVQUFBO1lBRW5CRixTQUFTLEdBQUcsSUFBSSxDQUFDeEYsTUFBTSxDQUFDdEQsSUFBSSxDQUFDLFVBQUFpSixLQUFLO2NBQUEsT0FBSUEsS0FBSyxDQUFDQyxTQUFTO1lBQUEsRUFBQyxJQUFJLElBQUksQ0FBQzVGLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEUyQixlQUFlLEdBQUc5Riw2REFBSyxDQUFDc0IsV0FBVyxDQUFDMEksU0FBUyxDQUFDTCxTQUFTLENBQUNNLFdBQVcsQ0FBQztZQUVwRTlHLG9CQUFvQixpREFFVndHLFNBQVMsQ0FBQ08sT0FBTywrREFDV1AsU0FBUyxDQUFDUSxHQUFHLGtFQUNWckUsZUFBZSxnRUFDakI2RCxTQUFTLENBQUNPLE9BQU8sdURBQzVCUCxTQUFTLENBQUNTLFlBQVkseUJBQWtCdEUsZUFBZSxxQ0FBNEI2RCxTQUFTLENBQUNVLE9BQU87WUFFaEkvRyxJQUFJLEdBQUcsSUFBSSxDQUFDZ0YsTUFBTSxDQUFDekgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDMEMsSUFBSSxDQUFDLENBQUM7WUFDN0NDLFdBQVcsR0FBRyxJQUFJLENBQUN1RixjQUFjLElBQUksUUFBUTtZQUM3Q3RGLGNBQWMsR0FBRyxJQUFJLENBQUN1RixpQkFBaUIsSUFBSSxVQUFVO1lBQ3JEdEYsV0FBVyxHQUFHLElBQUksQ0FBQ3VGLGNBQWMsSUFBSSxnQkFBZ0I7WUFFckR0RixNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxVQUFBMEcsS0FBSyxFQUFJO2NBQ3BDLElBQU1ILEdBQUcsR0FBRyxJQUFJSSxHQUFHLENBQUNELEtBQUssQ0FBQ0gsR0FBRyxDQUFDO2NBQzlCLElBQU0zSSxPQUFPLEdBQUcySSxHQUFHLENBQUNLLFlBQVksQ0FBQ3BILEdBQUcsQ0FBQyxHQUFHLENBQUM7Y0FDekMsT0FBTztnQkFDSFcsV0FBVyw4SEFHS3VHLEtBQUssQ0FBQ0gsR0FBRyx1RUFDbUIzSSxPQUFPLDZGQUVSQSxPQUFPO2NBR3RELENBQUM7WUFDTCxDQUFDLENBQUM7WUFFSXdDLFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVMsQ0FBQ0osR0FBRyxDQUFDLFVBQUN4QyxRQUFRLEVBQUs7Y0FDL0MsSUFBTUssSUFBSSxHQUFHRSxNQUFNLENBQUNQLFFBQVEsQ0FBQ1EsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUkxQixZQUFZO2NBQzNELE9BQU87Z0JBQ0g2RCxXQUFXLDhIQUdLM0MsUUFBUSxrRkFDK0JLLElBQUksdUVBQ2ZMLFFBQVEsMEVBQ0xBLFFBQVEsd0VBQ1ZBLFFBQVEsc0VBRWpDQSxRQUFRO2NBR2hDLENBQUM7WUFDTCxDQUFDLENBQUM7WUFFSStDLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDLFVBQUFrRyxLQUFLLEVBQUk7Y0FDcEMsSUFBTXhJLFdBQVcsR0FBR3RCLDZEQUFLLENBQUNzQixXQUFXLENBQUMwSSxTQUFTLENBQUNGLEtBQUssQ0FBQ0csV0FBVyxDQUFDO2NBQ2xFLE9BQU87Z0JBQ0hsRyxXQUFXLDhIQUdLK0YsS0FBSyxDQUFDSSxPQUFPLG9JQUVlSixLQUFLLENBQUNLLEdBQUcsMEVBQ043SSxXQUFXLHdFQUNid0ksS0FBSyxDQUFDSSxPQUFPLHlGQUVyQkosS0FBSyxDQUFDTSxZQUFZLHlCQUFrQjlJLFdBQVcscUNBQTRCd0ksS0FBSyxDQUFDTyxPQUFPO2NBRWpJLENBQUM7WUFDTCxDQUFDLENBQUM7WUFFSXZJLGFBQWEsR0FBR3RCLENBQUMsQ0FBQ1YsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQyxJQUFJLENBQUNoRSxhQUFhLEVBQUU7Y0FDeEQ2QyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtjQUNwQkcsSUFBSSxFQUFKQSxJQUFJO2NBQ0pFLFdBQVcsRUFBWEEsV0FBVztjQUNYQyxjQUFjLEVBQWRBLGNBQWM7Y0FDZEMsV0FBVyxFQUFYQSxXQUFXO2NBQ1hDLE1BQU0sRUFBTkEsTUFBTTtjQUNOSyxTQUFTLEVBQVRBLFNBQVM7Y0FDVEcsTUFBTSxFQUFOQTtZQUNKLENBQUMsQ0FBQyxDQUFDLEVBRUg7WUFDQSxJQUFJLENBQUNyQyxhQUFhLENBQUMySSxJQUFJLENBQUMzSSxhQUFhLENBQUMySSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTdDLElBQUksQ0FBQ2hHLGFBQWEsQ0FBQyxDQUFDO1lBRXBCLElBQUksQ0FBQ0MsU0FBUyxHQUFHM0UsMkRBQWUsQ0FBQyxJQUFJLENBQUMrQixhQUFhLENBQUNzQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Y0FDeER1QixpQkFBaUIsRUFBRSxLQUFLO2NBQ3hCQyx1QkFBdUIsRUFBRSxLQUFLO2NBQzlCQyxpQkFBaUIsRUFBRTtZQUN2QixDQUFDLENBQUM7WUFFRixJQUFJLENBQUNsRSxVQUFVLENBQUMsQ0FBQztVQUFDO1lBQUEsT0FBQWlKLFNBQUEsQ0FBQWxNLENBQUE7UUFBQTtNQUFBLEdBQUFnTSxRQUFBO0lBQUEsQ0FDckI7SUFBQSxTQTlGS0YsU0FBU0EsQ0FBQTtNQUFBLE9BQUFDLFVBQUEsQ0FBQWpLLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0lBQUEsT0FBVGlLLFNBQVM7RUFBQTtFQUFBTCxPQUFBLENBZ0dmdEgsU0FBUyxHQUFULFNBQUFBLFNBQVNBLENBQUE2SSxNQUFBLEVBR0Q7SUFBQSxJQUFBQyxNQUFBO0lBQUEsSUFBQUMsS0FBQSxHQUFBRixNQUFBLGNBQUosQ0FBQyxDQUFDLEdBQUFBLE1BQUE7TUFBQUcsZ0JBQUEsR0FBQUQsS0FBQSxDQUZGRSxVQUFVO01BQVZBLFVBQVUsR0FBQUQsZ0JBQUEsY0FBRyxLQUFLLEdBQUFBLGdCQUFBO01BQUFFLFdBQUEsR0FBQUgsS0FBQSxDQUNsQkksUUFBUTtNQUFSQSxRQUFRLEdBQUFELFdBQUEsY0FBRyxLQUFLLEdBQUFBLFdBQUE7SUFFaEIsSUFBSSxDQUFDM0IsZ0JBQWdCLENBQUMsQ0FBQztJQUV2QixJQUFJLENBQUNJLFNBQVMsQ0FBQyxDQUFDLENBQUNuSyxJQUFJLENBQUMsWUFBTTtNQUN4QixJQUFJeUwsVUFBVSxFQUFFO1FBQ1osSUFBTXRKLE9BQU8sR0FBR21KLE1BQUksQ0FBQzdJLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDb0ssS0FBSyxDQUFDLENBQUMsQ0FBQzVKLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztRQUNySHNKLE1BQUksQ0FBQ3ZJLFlBQVksQ0FBQ1osT0FBTyxDQUFDO01BQzlCO01BRUEsSUFBSXdKLFFBQVEsRUFBRTtRQUNWLElBQU05RyxHQUFHLEdBQUd5RyxNQUFJLENBQUM3SSxhQUFhLENBQUNqQixJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQ29LLEtBQUssQ0FBQyxDQUFDO1FBQzVGTixNQUFJLENBQUNySSxVQUFVLENBQ1g0QixHQUFHLENBQUM3QyxJQUFJLENBQUMseUJBQXlCLENBQUMsRUFDbkM2QyxHQUFHLENBQUM3QyxJQUFJLENBQUMsNEJBQTRCLENBQUMsRUFDdEM2QyxHQUFHLENBQUM3QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsRUFDcEM2QyxHQUFHLENBQUM3QyxJQUFJLENBQUMsbUNBQW1DLENBQ2hELENBQUM7TUFDTDtNQUVBc0osTUFBSSxDQUFDakcsU0FBUyxDQUFDWSxRQUFRLENBQUMsQ0FBQztNQUV6QkMsVUFBVSxDQUFDLFlBQU07UUFDYm9GLE1BQUksQ0FBQzdJLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDMkUsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUN0RixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBMkQsT0FBQSxDQUVLVSxZQUFZO0lBQUEsSUFBQXFCLGFBQUEsR0FBQTVMLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFsQixTQUFBd00sU0FBQTtNQUFBLElBQUFDLHFCQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxVQUFBLEVBQUFDLFdBQUEsRUFBQUMscUJBQUEsRUFBQUMsVUFBQSxFQUFBQyxXQUFBLEVBQUFDLElBQUEsRUFBQUMsS0FBQSxFQUFBM0gsTUFBQSxFQUFBUixNQUFBLEVBQUFLLFNBQUE7TUFBQSxPQUFBdkYsWUFBQSxHQUFBQyxDQUFBLFdBQUFxTixTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQXRQLENBQUE7VUFBQTtZQUFBLE1BQ1EsSUFBSSxDQUFDMEgsTUFBTSxJQUFJLElBQUksQ0FBQ1IsTUFBTSxJQUFJLElBQUksQ0FBQ0ssU0FBUztjQUFBK0gsU0FBQSxDQUFBdFAsQ0FBQTtjQUFBO1lBQUE7WUFBQSxPQUFBc1AsU0FBQSxDQUFBck8sQ0FBQTtVQUFBO1lBQUEwTixxQkFBQSxHQUVoQixJQUFJLENBQUN4QyxRQUFRLENBQUNoSCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNnQyxHQUFHLENBQUNqQyxNQUFNLENBQUMsRUFBN0QwSixTQUFTLEdBQUFELHFCQUFBLEtBQUVFLFVBQVUsR0FBQUYscUJBQUE7WUFBQUcscUJBQUEsR0FDTSxJQUFJLENBQUMxQyxXQUFXLENBQUNqSCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNnQyxHQUFHLENBQUNqQyxNQUFNLENBQUMsRUFBbEU2SixVQUFVLEdBQUFELHFCQUFBLEtBQUVFLFdBQVcsR0FBQUYscUJBQUE7WUFBQUcscUJBQUEsR0FDSSxJQUFJLENBQUM1QyxTQUFTLENBQUNsSCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNnQyxHQUFHLENBQUNqQyxNQUFNLENBQUMsRUFBaEVnSyxVQUFVLEdBQUFELHFCQUFBLEtBQUVFLFdBQVcsR0FBQUYscUJBQUE7WUFBQUssU0FBQSxDQUFBdFAsQ0FBQTtZQUFBLE9BRVgrRCxDQUFDLENBQUN3TCxJQUFJLENBQUM7Y0FDdEI3QixHQUFHLEVBQUUsVUFBVTtjQUNmOEIsTUFBTSxFQUFFLE1BQU07Y0FDZDVLLElBQUksRUFBRTZLLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dCQUNqQkMsS0FBSywrOERBMkNKO2dCQUNEQyxTQUFTLEVBQUU7a0JBQ1AzRCxTQUFTLEVBQUUsSUFBSSxDQUFDQSxTQUFTO2tCQUN6QjJDLFNBQVMsRUFBVEEsU0FBUztrQkFDVEMsVUFBVSxFQUFWQSxVQUFVO2tCQUNWRSxVQUFVLEVBQVZBLFVBQVU7a0JBQ1ZDLFdBQVcsRUFBWEEsV0FBVztrQkFDWEUsVUFBVSxFQUFWQSxVQUFVO2tCQUNWQyxXQUFXLEVBQVhBO2dCQUNKO2NBQ0osQ0FBQyxDQUFDO2NBQ0ZVLE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQ0MsYUFBYSxjQUFZLElBQUksQ0FBQzVEO2NBQ2xDLENBQUM7Y0FDRDZELFNBQVMsRUFBRTtnQkFDUEMsZUFBZSxFQUFFO2NBQ3JCO1lBQ0osQ0FBQyxDQUFDO1VBQUE7WUFqRUlaLElBQUksR0FBQUUsU0FBQSxDQUFBdE8sQ0FBQTtZQUFBcU8sS0FBQSxHQW1FMEIsQ0FDaENELElBQUksQ0FBQ3hLLElBQUksQ0FBQ3FMLElBQUksQ0FBQ0MsT0FBTyxDQUFDeEksTUFBTSxDQUFDeUksS0FBSyxDQUFDaEosR0FBRyxDQUFDLFVBQUFpSixLQUFBO2NBQUEsSUFBR0MsSUFBSSxHQUFBRCxLQUFBLENBQUpDLElBQUk7Y0FBQSxPQUFPQSxJQUFJO1lBQUEsRUFBQyxFQUMzRGpCLElBQUksQ0FBQ3hLLElBQUksQ0FBQ3FMLElBQUksQ0FBQ0MsT0FBTyxDQUFDaEosTUFBTSxDQUFDaUosS0FBSyxDQUFDaEosR0FBRyxDQUFDLFVBQUFtSixLQUFBO2NBQUEsSUFBR0QsSUFBSSxHQUFBQyxLQUFBLENBQUpELElBQUk7Y0FBQSxPQUFPQSxJQUFJO1lBQUEsRUFBQyxFQUMzRGpCLElBQUksQ0FBQ3hLLElBQUksQ0FBQ3FMLElBQUksQ0FBQ0MsT0FBTyxDQUFDSyxZQUFZLENBQUNKLEtBQUssQ0FDcEN4SSxNQUFNLENBQUMsVUFBQTZJLEtBQUE7Y0FBQSxJQUFHSCxJQUFJLEdBQUFHLEtBQUEsQ0FBSkgsSUFBSTtjQUFBLE9BQU9BLElBQUksQ0FBQ3hKLElBQUksS0FBSyxRQUFRO1lBQUEsRUFBQyxDQUM1Q00sR0FBRyxDQUFDLFVBQUFzSixLQUFBO2NBQUEsSUFBR0osSUFBSSxHQUFBSSxLQUFBLENBQUpKLElBQUk7Y0FBQSxPQUFPQSxJQUFJLENBQUM1TyxLQUFLO1lBQUEsRUFBQyxDQUNyQyxFQU5NaUcsTUFBTSxHQUFBMkgsS0FBQSxLQUFFbkksTUFBTSxHQUFBbUksS0FBQSxLQUFFOUgsU0FBUyxHQUFBOEgsS0FBQTtZQVFoQztBQUNSO0FBQ0E7WUFDUSxJQUFJLENBQUMzSCxNQUFNLEdBQUdBLE1BQU07O1lBRXBCO0FBQ1I7QUFDQTtZQUNRLElBQUksQ0FBQ1IsTUFBTSxHQUFHQSxNQUFNOztZQUVwQjtBQUNSO0FBQ0E7WUFDUSxJQUFJLENBQUNLLFNBQVMsR0FBR0EsU0FBUztVQUFDO1lBQUEsT0FBQStILFNBQUEsQ0FBQXJPLENBQUE7UUFBQTtNQUFBLEdBQUF5TixRQUFBO0lBQUEsQ0FDOUI7SUFBQSxTQWhHS3RCLFlBQVlBLENBQUE7TUFBQSxPQUFBcUIsYUFBQSxDQUFBMUwsS0FBQSxPQUFBRCxTQUFBO0lBQUE7SUFBQSxPQUFac0ssWUFBWTtFQUFBO0VBQUEsT0FBQXpCLHFCQUFBO0FBQUEsRUE1S3FCakksaUJBQWlCO0FBNlEzRCxJQUVvQmdOLFlBQVksMEJBQUFDLHFCQUFBO0VBQzdCLFNBQUFELGFBQVk5TSxRQUFRLEVBQUU7SUFBQSxJQUFBZ04sTUFBQTtJQUNsQkEsTUFBQSxHQUFBRCxxQkFBQSxDQUFBcFAsSUFBQSxPQUFNcUMsUUFBUSxDQUFDO0lBQ2ZnTixNQUFBLENBQUtDLGlCQUFpQixHQUFHLElBQUluTixpQkFBaUIsQ0FBQWtOLE1BQUEsRUFBT2hOLFFBQVEsQ0FBQztJQUFDLE9BQUFnTixNQUFBO0VBQ25FO0VBQUMxTixjQUFBLENBQUF3TixZQUFBLEVBQUFDLHFCQUFBO0VBQUEsSUFBQUcsT0FBQSxHQUFBSixZQUFBLENBQUFwUSxTQUFBO0VBQUF3USxPQUFBLENBRUQ1TSxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1R5TSxxQkFBQSxDQUFBclEsU0FBQSxDQUFNNEQsVUFBVSxDQUFBM0MsSUFBQTtJQUNoQixJQUFJLENBQUNzUCxpQkFBaUIsQ0FBQzNNLFVBQVUsQ0FBQyxDQUFDO0VBQ3ZDLENBQUM7RUFBQSxPQUFBd00sWUFBQTtBQUFBLEVBVHFDbE4sb0VBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkN0dkJqRSx1S0FBQTVELENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEsR0FBQVIsQ0FBQSxFQUFBSCxDQUFBLE9BQUFpQixDQUFBLElBQUFGLENBQUEsS0FBQVYsQ0FBQSxJQUFBTCxDQUFBLEdBQUFnQixDQUFBLENBQUFPLE1BQUEsRUFBQXZCLENBQUEsVUFBQUssQ0FBQSxFQUFBRSxDQUFBLEdBQUFTLENBQUEsQ0FBQWhCLENBQUEsR0FBQXFCLENBQUEsR0FBQUgsQ0FBQSxDQUFBRixDQUFBLEVBQUFRLENBQUEsR0FBQWpCLENBQUEsS0FBQU4sQ0FBQSxRQUFBSSxDQUFBLEdBQUFtQixDQUFBLEtBQUFyQixDQUFBLE1BQUFRLENBQUEsR0FBQUosQ0FBQSxFQUFBQyxDQUFBLEdBQUFELENBQUEsWUFBQUMsQ0FBQSxXQUFBRCxDQUFBLE1BQUFBLENBQUEsTUFBQVIsQ0FBQSxJQUFBUSxDQUFBLE9BQUFjLENBQUEsTUFBQWhCLENBQUEsR0FBQUosQ0FBQSxRQUFBb0IsQ0FBQSxHQUFBZCxDQUFBLFFBQUFDLENBQUEsTUFBQVUsQ0FBQSxDQUFBQyxDQUFBLEdBQUFoQixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBSSxDQUFBLE9BQUFjLENBQUEsR0FBQUcsQ0FBQSxLQUFBbkIsQ0FBQSxHQUFBSixDQUFBLFFBQUFNLENBQUEsTUFBQUosQ0FBQSxJQUFBQSxDQUFBLEdBQUFxQixDQUFBLE1BQUFqQixDQUFBLE1BQUFOLENBQUEsRUFBQU0sQ0FBQSxNQUFBSixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBcUIsQ0FBQSxFQUFBaEIsQ0FBQSxjQUFBSCxDQUFBLElBQUFKLENBQUEsYUFBQW1CLENBQUEsUUFBQUgsQ0FBQSxPQUFBZCxDQUFBLHFCQUFBRSxDQUFBLEVBQUFXLENBQUEsRUFBQVEsQ0FBQSxRQUFBVCxDQUFBLFlBQUFVLFNBQUEsdUNBQUFSLENBQUEsVUFBQUQsQ0FBQSxJQUFBSyxDQUFBLENBQUFMLENBQUEsRUFBQVEsQ0FBQSxHQUFBaEIsQ0FBQSxHQUFBUSxDQUFBLEVBQUFMLENBQUEsR0FBQWEsQ0FBQSxHQUFBeEIsQ0FBQSxHQUFBUSxDQUFBLE9BQUFULENBQUEsR0FBQVksQ0FBQSxNQUFBTSxDQUFBLEtBQUFWLENBQUEsS0FBQUMsQ0FBQSxHQUFBQSxDQUFBLFFBQUFBLENBQUEsU0FBQVUsQ0FBQSxDQUFBZixDQUFBLFFBQUFrQixDQUFBLENBQUFiLENBQUEsRUFBQUcsQ0FBQSxLQUFBTyxDQUFBLENBQUFmLENBQUEsR0FBQVEsQ0FBQSxHQUFBTyxDQUFBLENBQUFDLENBQUEsR0FBQVIsQ0FBQSxhQUFBSSxDQUFBLE1BQUFSLENBQUEsUUFBQUMsQ0FBQSxLQUFBSCxDQUFBLFlBQUFMLENBQUEsR0FBQU8sQ0FBQSxDQUFBRixDQUFBLFdBQUFMLENBQUEsR0FBQUEsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLFVBQUFjLFNBQUEsMkNBQUF6QixDQUFBLENBQUEyQixJQUFBLFNBQUEzQixDQUFBLEVBQUFXLENBQUEsR0FBQVgsQ0FBQSxDQUFBNEIsS0FBQSxFQUFBcEIsQ0FBQSxTQUFBQSxDQUFBLG9CQUFBQSxDQUFBLEtBQUFSLENBQUEsR0FBQU8sQ0FBQSxlQUFBUCxDQUFBLENBQUEwQixJQUFBLENBQUFuQixDQUFBLEdBQUFDLENBQUEsU0FBQUcsQ0FBQSxHQUFBYyxTQUFBLHVDQUFBcEIsQ0FBQSxnQkFBQUcsQ0FBQSxPQUFBRCxDQUFBLEdBQUFSLENBQUEsY0FBQUMsQ0FBQSxJQUFBaUIsQ0FBQSxHQUFBQyxDQUFBLENBQUFmLENBQUEsUUFBQVEsQ0FBQSxHQUFBVixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLEVBQUFlLENBQUEsT0FBQUUsQ0FBQSxrQkFBQXBCLENBQUEsSUFBQU8sQ0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsTUFBQUcsQ0FBQSxHQUFBWCxDQUFBLGNBQUFlLENBQUEsbUJBQUFhLEtBQUEsRUFBQTVCLENBQUEsRUFBQTJCLElBQUEsRUFBQVYsQ0FBQSxTQUFBaEIsQ0FBQSxFQUFBSSxDQUFBLEVBQUFFLENBQUEsUUFBQUksQ0FBQSxRQUFBUyxDQUFBLGdCQUFBVixVQUFBLGNBQUFtQixrQkFBQSxjQUFBQywyQkFBQSxLQUFBOUIsQ0FBQSxHQUFBWSxNQUFBLENBQUFtQixjQUFBLE1BQUF2QixDQUFBLE1BQUFMLENBQUEsSUFBQUgsQ0FBQSxDQUFBQSxDQUFBLElBQUFHLENBQUEsU0FBQVcsbUJBQUEsQ0FBQWQsQ0FBQSxPQUFBRyxDQUFBLGlDQUFBSCxDQUFBLEdBQUFXLENBQUEsR0FBQW1CLDBCQUFBLENBQUFyQixTQUFBLEdBQUFDLFNBQUEsQ0FBQUQsU0FBQSxHQUFBRyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxZQUFBTyxFQUFBaEIsQ0FBQSxXQUFBYSxNQUFBLENBQUFvQixjQUFBLEdBQUFwQixNQUFBLENBQUFvQixjQUFBLENBQUFqQyxDQUFBLEVBQUErQiwwQkFBQSxLQUFBL0IsQ0FBQSxDQUFBa0MsU0FBQSxHQUFBSCwwQkFBQSxFQUFBaEIsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBTSxDQUFBLHlCQUFBTixDQUFBLENBQUFVLFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFGLENBQUEsR0FBQVosQ0FBQSxXQUFBOEIsaUJBQUEsQ0FBQXBCLFNBQUEsR0FBQXFCLDBCQUFBLEVBQUFoQixtQkFBQSxDQUFBSCxDQUFBLGlCQUFBbUIsMEJBQUEsR0FBQWhCLG1CQUFBLENBQUFnQiwwQkFBQSxpQkFBQUQsaUJBQUEsR0FBQUEsaUJBQUEsQ0FBQUssV0FBQSx3QkFBQXBCLG1CQUFBLENBQUFnQiwwQkFBQSxFQUFBekIsQ0FBQSx3QkFBQVMsbUJBQUEsQ0FBQUgsQ0FBQSxHQUFBRyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFOLENBQUEsZ0JBQUFTLG1CQUFBLENBQUFILENBQUEsRUFBQVIsQ0FBQSxpQ0FBQVcsbUJBQUEsQ0FBQUgsQ0FBQSw4REFBQXdCLFlBQUEsWUFBQUEsYUFBQSxhQUFBQyxDQUFBLEVBQUE3QixDQUFBLEVBQUE4QixDQUFBLEVBQUF0QixDQUFBO0FBQUEsU0FBQUQsb0JBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUEsUUFBQU8sQ0FBQSxHQUFBSyxNQUFBLENBQUEwQixjQUFBLFFBQUEvQixDQUFBLHVCQUFBUixDQUFBLElBQUFRLENBQUEsUUFBQU8sbUJBQUEsWUFBQXlCLG1CQUFBeEMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQSxhQUFBSyxFQUFBSixDQUFBLEVBQUFFLENBQUEsSUFBQVcsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBRSxDQUFBLFlBQUFGLENBQUEsZ0JBQUF5QyxPQUFBLENBQUF2QyxDQUFBLEVBQUFFLENBQUEsRUFBQUosQ0FBQSxTQUFBRSxDQUFBLEdBQUFNLENBQUEsR0FBQUEsQ0FBQSxDQUFBUixDQUFBLEVBQUFFLENBQUEsSUFBQTJCLEtBQUEsRUFBQXpCLENBQUEsRUFBQXNDLFVBQUEsR0FBQXpDLENBQUEsRUFBQTBDLFlBQUEsR0FBQTFDLENBQUEsRUFBQTJDLFFBQUEsR0FBQTNDLENBQUEsTUFBQUQsQ0FBQSxDQUFBRSxDQUFBLElBQUFFLENBQUEsSUFBQUUsQ0FBQSxhQUFBQSxDQUFBLGNBQUFBLENBQUEsbUJBQUFTLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBbVIsa0JBQUFwUixDQUFBLEVBQUFFLENBQUEsYUFBQUQsQ0FBQSxNQUFBQSxDQUFBLEdBQUFDLENBQUEsQ0FBQXNCLE1BQUEsRUFBQXZCLENBQUEsVUFBQUssQ0FBQSxHQUFBSixDQUFBLENBQUFELENBQUEsR0FBQUssQ0FBQSxDQUFBb0MsVUFBQSxHQUFBcEMsQ0FBQSxDQUFBb0MsVUFBQSxRQUFBcEMsQ0FBQSxDQUFBcUMsWUFBQSxrQkFBQXJDLENBQUEsS0FBQUEsQ0FBQSxDQUFBc0MsUUFBQSxRQUFBL0IsTUFBQSxDQUFBMEIsY0FBQSxDQUFBdkMsQ0FBQSxFQUFBcVIsY0FBQSxDQUFBL1EsQ0FBQSxDQUFBcUYsR0FBQSxHQUFBckYsQ0FBQTtBQUFBLFNBQUFnUixhQUFBdFIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFELENBQUEsV0FBQUMsQ0FBQSxJQUFBa1IsaUJBQUEsQ0FBQXBSLENBQUEsQ0FBQVUsU0FBQSxFQUFBUixDQUFBLEdBQUFELENBQUEsSUFBQW1SLGlCQUFBLENBQUFwUixDQUFBLEVBQUFDLENBQUEsR0FBQVksTUFBQSxDQUFBMEIsY0FBQSxDQUFBdkMsQ0FBQSxpQkFBQTRDLFFBQUEsU0FBQTVDLENBQUE7QUFBQSxTQUFBcVIsZUFBQXBSLENBQUEsUUFBQU8sQ0FBQSxHQUFBK1EsWUFBQSxDQUFBdFIsQ0FBQSx1Q0FBQU8sQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBK1EsYUFBQXRSLENBQUEsRUFBQUMsQ0FBQSwyQkFBQUQsQ0FBQSxLQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUFFLE1BQUEsQ0FBQXFSLFdBQUEsa0JBQUF4UixDQUFBLFFBQUFRLENBQUEsR0FBQVIsQ0FBQSxDQUFBMkIsSUFBQSxDQUFBMUIsQ0FBQSxFQUFBQyxDQUFBLHVDQUFBTSxDQUFBLFNBQUFBLENBQUEsWUFBQWtCLFNBQUEseUVBQUF4QixDQUFBLEdBQUF1UixNQUFBLEdBQUFuTSxNQUFBLEVBQUFyRixDQUFBO0FBQUEsU0FBQXFELGVBQUFyRCxDQUFBLEVBQUFLLENBQUEsSUFBQUwsQ0FBQSxDQUFBUyxTQUFBLEdBQUFHLE1BQUEsQ0FBQUMsTUFBQSxDQUFBUixDQUFBLENBQUFJLFNBQUEsR0FBQVQsQ0FBQSxDQUFBUyxTQUFBLENBQUE2QyxXQUFBLEdBQUF0RCxDQUFBLEVBQUF1RCxlQUFBLENBQUF2RCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBa0QsZ0JBQUF2RCxDQUFBLEVBQUFELENBQUEsV0FBQXdELGVBQUEsR0FBQTNDLE1BQUEsQ0FBQW9CLGNBQUEsR0FBQXBCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsSUFBQSxlQUFBdEIsQ0FBQSxFQUFBRCxDQUFBLFdBQUFDLENBQUEsQ0FBQWlDLFNBQUEsR0FBQWxDLENBQUEsRUFBQUMsQ0FBQSxLQUFBdUQsZUFBQSxDQUFBdkQsQ0FBQSxFQUFBRCxDQUFBO0FBQUEsU0FBQTZDLG1CQUFBekMsQ0FBQSxFQUFBSCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSSxDQUFBLEVBQUFlLENBQUEsRUFBQVosQ0FBQSxjQUFBRCxDQUFBLEdBQUFKLENBQUEsQ0FBQWlCLENBQUEsRUFBQVosQ0FBQSxHQUFBRyxDQUFBLEdBQUFKLENBQUEsQ0FBQXFCLEtBQUEsV0FBQXpCLENBQUEsZ0JBQUFKLENBQUEsQ0FBQUksQ0FBQSxLQUFBSSxDQUFBLENBQUFvQixJQUFBLEdBQUEzQixDQUFBLENBQUFXLENBQUEsSUFBQWtDLE9BQUEsQ0FBQUMsT0FBQSxDQUFBbkMsQ0FBQSxFQUFBb0MsSUFBQSxDQUFBOUMsQ0FBQSxFQUFBSSxDQUFBO0FBQUEsU0FBQTJDLGtCQUFBN0MsQ0FBQSw2QkFBQUgsQ0FBQSxTQUFBRCxDQUFBLEdBQUFrRCxTQUFBLGFBQUFKLE9BQUEsV0FBQTVDLENBQUEsRUFBQUksQ0FBQSxRQUFBZSxDQUFBLEdBQUFqQixDQUFBLENBQUErQyxLQUFBLENBQUFsRCxDQUFBLEVBQUFELENBQUEsWUFBQW9ELE1BQUFoRCxDQUFBLElBQUF5QyxrQkFBQSxDQUFBeEIsQ0FBQSxFQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLEVBQUE4QyxLQUFBLEVBQUFDLE1BQUEsVUFBQWpELENBQUEsY0FBQWlELE9BQUFqRCxDQUFBLElBQUF5QyxrQkFBQSxDQUFBeEIsQ0FBQSxFQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLEVBQUE4QyxLQUFBLEVBQUFDLE1BQUEsV0FBQWpELENBQUEsS0FBQWdELEtBQUE7QUFEQTtBQUNBO0FBQ0E7QUFDK0M7QUFDZjtBQUMyQztBQUNRO0FBQ2hCO0FBQ3JCO0FBRTlDLElBQU04TyxTQUFTLEdBQUcsS0FBSztBQUV2QixJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFHQyxDQUFDO0VBQUEsT0FBSUEsQ0FBQyxDQUFDQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDQSxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztBQUFBO0FBRTVGLFNBQVNDLGlCQUFpQkEsQ0FBQ2xSLENBQUMsRUFBRW1SLENBQUMsRUFBRTtFQUM3QixPQUFPTCxxQkFBcUIsQ0FBQzlRLENBQUMsQ0FBQyxLQUFLOFEscUJBQXFCLENBQUNLLENBQUMsQ0FBQztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLHVCQUF1QkEsQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJLEVBQUU7RUFDekMsSUFBTUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDelIsQ0FBQyxFQUFFbVIsQ0FBQztJQUFBLE9BQUtuUixDQUFDLEdBQUdtUixDQUFDO0VBQUEsRUFBQztFQUNoRCxJQUFNTyxLQUFLLEdBQUdKLElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUN6UixDQUFDLEVBQUVtUixDQUFDO0lBQUEsT0FBS25SLENBQUMsR0FBR21SLENBQUM7RUFBQSxFQUFDO0VBQ2hELE9BQU9JLEtBQUssQ0FBQ3BSLE1BQU0sS0FBS3VSLEtBQUssQ0FBQ3ZSLE1BQU0sSUFBSW9SLEtBQUssQ0FBQ0ksS0FBSyxDQUFDLFVBQUNuUixLQUFLLEVBQUVvUixLQUFLO0lBQUEsT0FBS3BSLEtBQUssS0FBS2tSLEtBQUssQ0FBQ0UsS0FBSyxDQUFDO0VBQUEsRUFBQztBQUNqRztBQUVBLElBQUlDLGNBQWM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkEsU0FPZUMsdUJBQXVCQSxDQUFBQyxFQUFBLEVBQUFDLEdBQUE7RUFBQSxPQUFBQyx3QkFBQSxDQUFBblEsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFBQSxTQUFBb1EseUJBQUE7RUFBQUEsd0JBQUEsR0FBQXJRLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUF0QyxTQUFBaVIsU0FBdUNDLFFBQVEsRUFBRUMsS0FBSztJQUFBLElBQUFDLE9BQUEsRUFBQUMsU0FBQSxFQUFBQyxLQUFBLEVBQUFDLFNBQUEsRUFBQUMsS0FBQTtJQUFBLE9BQUExUixZQUFBLEdBQUFDLENBQUEsV0FBQTBSLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBM1QsQ0FBQTtRQUFBO1VBQUEsSUFBTHFULEtBQUs7WUFBTEEsS0FBSyxHQUFHLEVBQUU7VUFBQTtVQUNqREMsT0FBTyxHQUFHLEVBQUU7VUFDWkMsU0FBUyxHQUFHLEVBQUUsRUFBRTtVQUFBQyxLQUFBLGdCQUFBeFIsWUFBQSxHQUFBRSxDQUFBLFVBQUFzUixNQUFBO1lBQUEsSUFBQUksT0FBQSxFQUFBL1MsQ0FBQTtZQUFBLE9BQUFtQixZQUFBLEdBQUFDLENBQUEsV0FBQTRSLFNBQUE7Y0FBQSxrQkFBQUEsU0FBQSxDQUFBN1QsQ0FBQTtnQkFBQTtrQkFFWDRULE9BQU8sR0FBQUYsS0FBQSxDQUFBalMsS0FBQTtrQkFDZDtrQkFDTVosQ0FBQyxHQUFHK1MsT0FBTyxDQUFDLENBQUMsQ0FBQ2hSLElBQUksQ0FBQyxVQUFBa1IsTUFBTSxFQUFJO29CQUMvQjtvQkFDQVAsU0FBUyxDQUFDUSxNQUFNLENBQUNSLFNBQVMsQ0FBQ1MsT0FBTyxDQUFDblQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxPQUFPaVQsTUFBTTtrQkFDakIsQ0FBQyxDQUFDO2tCQUNGUixPQUFPLENBQUNXLElBQUksQ0FBQ3BULENBQUMsQ0FBQztrQkFDZjBTLFNBQVMsQ0FBQ1UsSUFBSSxDQUFDcFQsQ0FBQyxDQUFDOztrQkFFakI7a0JBQUEsTUFDSTBTLFNBQVMsQ0FBQ25TLE1BQU0sSUFBSWlTLEtBQUs7b0JBQUFRLFNBQUEsQ0FBQTdULENBQUE7b0JBQUE7a0JBQUE7a0JBQUE2VCxTQUFBLENBQUE3VCxDQUFBO2tCQUFBLE9BRW5CMEMsT0FBTyxDQUFDd1IsSUFBSSxDQUFDWCxTQUFTLENBQUM7Z0JBQUE7a0JBQUEsT0FBQU0sU0FBQSxDQUFBNVMsQ0FBQTtjQUFBO1lBQUEsR0FBQXVTLEtBQUE7VUFBQTtVQUFBQyxTQUFBLEdBQUFVLCtCQUFBLENBYmZmLFFBQVE7UUFBQTtVQUFBLEtBQUFNLEtBQUEsR0FBQUQsU0FBQSxJQUFBalMsSUFBQTtZQUFBbVMsU0FBQSxDQUFBM1QsQ0FBQTtZQUFBO1VBQUE7VUFBQSxPQUFBMlQsU0FBQSxDQUFBelMsQ0FBQSxDQUFBa1Qsa0JBQUEsQ0FBQVosS0FBQTtRQUFBO1VBQUFHLFNBQUEsQ0FBQTNULENBQUE7VUFBQTtRQUFBO1VBQUEsT0FBQTJULFNBQUEsQ0FBQTFTLENBQUEsSUFrQnZCeUIsT0FBTyxDQUFDMlIsR0FBRyxDQUFDZixPQUFPLENBQUM7TUFBQTtJQUFBLEdBQUFILFFBQUE7RUFBQSxDQUM5QjtFQUFBLE9BQUFELHdCQUFBLENBQUFuUSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLElBRW9Cd1IsY0FBYywwQkFBQUMscUJBQUE7RUEySy9CLFNBQUFELGVBQVl6SSxNQUFNLEVBQVc7SUFBQSxJQUFBMUgsS0FBQTtJQUN6QndOLCtEQUF1QixDQUFDOUYsTUFBTSxDQUFDO0lBQUMsU0FBQTJJLElBQUEsR0FBQTFSLFNBQUEsQ0FBQTFCLE1BQUEsRUFEYnFULEtBQUksT0FBQUMsS0FBQSxDQUFBRixJQUFBLE9BQUFBLElBQUEsV0FBQUcsSUFBQSxNQUFBQSxJQUFBLEdBQUFILElBQUEsRUFBQUcsSUFBQTtNQUFKRixLQUFJLENBQUFFLElBQUEsUUFBQTdSLFNBQUEsQ0FBQTZSLElBQUE7SUFBQTtJQUd2QnhRLEtBQUEsR0FBQW9RLHFCQUFBLENBQUFoVCxJQUFBLENBQUF3QixLQUFBLENBQUF3UixxQkFBQSxTQUFNMUksTUFBTSxFQUFBK0ksTUFBQSxDQUFLSCxLQUFJLEVBQUM7SUFBQ3RRLEtBQUEsQ0E3SzNCMFEsNkJBQTZCO0lBQUExUSxLQUFBLENBSTdCMlEsc0JBQXNCO0lBQUEzUSxLQUFBLENBeUR0QjRRLHFCQUFxQjtJQUFBNVEsS0FBQSxDQU9yQjZRLDBCQUEwQjtJQUFBN1EsS0FBQSxDQU8xQjhRLGlDQUFpQztJQUFBOVEsS0FBQSxDQUlqQytRLG1CQUFtQjtJQUFBL1EsS0FBQSxDQXdCbkJnUix3QkFBd0I7SUFBQWhSLEtBQUEsQ0FXeEJpUixnQkFBZ0I7SUFBQWpSLEtBQUEsQ0F5QmhCa1IsZUFBZTtJQUFBbFIsS0FBQSxDQVlmbVIsYUFBYSxHQUFHLEtBQUs7SUFBQW5SLEtBQUEsQ0FDckJvUixhQUFhLEdBQUcsS0FBSztJQUFBcFIsS0FBQSxDQUVyQnFSLHdCQUF3QixHQUFHLHNCQUFzQjtJQUVqRDtBQUNKO0FBQ0E7QUFDQTtJQUhJclIsS0FBQSxDQUlBc1IscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQUF0UixLQUFBLENBRTFCdVIsT0FBTyxHQUFHO01BQ05DLEdBQUcsRUFBRSxTQUFMQSxHQUFHQSxDQUFBLEVBQWU7UUFDZCxJQUFJN0QsU0FBUyxFQUFFO1VBQUEsSUFBQThELFFBQUE7VUFDWCxDQUFBQSxRQUFBLEdBQUFGLE9BQU8sRUFBQ0MsR0FBRyxDQUFBNVMsS0FBQSxDQUFBNlMsUUFBQSxFQUFBOVMsU0FBUSxDQUFDO1FBQ3hCO01BQ0o7SUFDSixDQUFDO0lBT0csSUFBTStTLEtBQUssR0FBRzFSLEtBQUEsQ0FBSzBILE1BQU0sQ0FBQ3pILElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN0RCxJQUFNMFIsaUJBQWlCLEdBQUdELEtBQUssQ0FBQ3pSLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQzs7SUFFeEU7QUFDUjtBQUNBO0lBQ1FELEtBQUEsQ0FBSzhILFNBQVMsR0FBRy9HLE1BQU0sQ0FBQzJRLEtBQUssQ0FBQ3pSLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDMlIsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRTVSLEtBQUEsQ0FBSzZSLHNCQUFzQixDQUFDSCxLQUFLLENBQUM7O0lBRWxDO0FBQ1I7QUFDQTtBQUNBO0lBQ1E7SUFDQTFSLEtBQUEsQ0FBSzhSLG9CQUFvQixHQUFHSCxpQkFBaUIsQ0FBQzFVLE1BQU0sR0FBRyxDQUFDO0lBRXhELElBQUkrQyxLQUFBLENBQUs4UixvQkFBb0IsRUFBRTtNQUMzQjlSLEtBQUEsQ0FBSytSLG9CQUFvQixDQUFDLENBQUM7SUFDL0I7SUFFQS9SLEtBQUEsQ0FBS2dTLHFCQUFxQixDQUFDLENBQUM7SUFDNUJoUyxLQUFBLENBQUtpUyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2hDalMsS0FBQSxDQUFLa1MsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QmxTLEtBQUEsQ0FBS21TLGlCQUFpQixDQUFDLENBQUM7SUFDeEJuUyxLQUFBLENBQUtvUyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pCcFMsS0FBQSxDQUFLcVMsaUJBQWlCLENBQUMsQ0FBQztJQUN4QnJTLEtBQUEsQ0FBS3NTLDBCQUEwQixDQUFDLENBQUM7SUFDakMxUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNnRixPQUFPLENBQUMseUJBQXlCLEVBQUUsQ0FBQzVFLEtBQUEsQ0FBSzBILE1BQU0sQ0FBQyxDQUFDO0lBQUMsT0FBQTFILEtBQUE7RUFDaEU7RUFBQ2pCLGNBQUEsQ0FBQW9SLGNBQUEsRUFBQUMscUJBQUE7RUFBQSxJQUFBdFEsTUFBQSxHQUFBcVEsY0FBQSxDQUFBaFUsU0FBQTtFQUFBMkQsTUFBQSxDQUVEK1Isc0JBQXNCLEdBQXRCLFNBQUFBLHNCQUFzQkEsQ0FBQ0gsS0FBSyxFQUFxRDtJQUFBLElBQTFEQSxLQUFLO01BQUxBLEtBQUssR0FBRyxJQUFJLENBQUNoSyxNQUFNLENBQUN6SCxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQ29LLEtBQUssQ0FBQyxDQUFDO0lBQUE7SUFDM0UsSUFBTWtJLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBR0MsUUFBUSxFQUFJO01BQzlCLElBQU03UCxJQUFJLEdBQUcrTyxLQUFLLENBQUN6UixJQUFJLENBQUN1UyxRQUFRLENBQUMsQ0FBQ25JLEtBQUssQ0FBQyxDQUFDLENBQUMxSCxJQUFJLENBQUMsQ0FBQztNQUVoRCxJQUFJQSxJQUFJLEVBQUU7UUFDTixJQUFJO1VBQ0EsT0FBTzJJLElBQUksQ0FBQ21ILEtBQUssQ0FBQzlQLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUMsT0FBT2xILENBQUMsRUFBRTtVQUNSO1FBQUE7TUFFUjtNQUVBLE9BQU8sRUFBRTtJQUNiLENBQUM7O0lBRUQ7QUFDUjtBQUNBO0lBQ1EsSUFBSSxDQUFDMlEsWUFBWSxHQUFHbUcsYUFBYSxDQUFDLG9DQUFvQyxDQUFDOztJQUV2RTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDRyxjQUFjLEdBQUdILGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQztJQUVuRSxJQUFJLENBQUNoQixPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUNwRixZQUFZLENBQUM7SUFDbkUsSUFBSSxDQUFDbUYsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDa0IsY0FBYyxDQUFDO0VBQzNFLENBQUM7RUFBQTVTLE1BQUEsQ0FNRDZTLFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFBLEVBQVU7SUFBQSxJQUFBQyxzQkFBQTtJQUFBLFNBQUFDLEtBQUEsR0FBQWxVLFNBQUEsQ0FBQTFCLE1BQUEsRUFBTnFULElBQUksT0FBQUMsS0FBQSxDQUFBc0MsS0FBQSxHQUFBQyxLQUFBLE1BQUFBLEtBQUEsR0FBQUQsS0FBQSxFQUFBQyxLQUFBO01BQUp4QyxJQUFJLENBQUF3QyxLQUFBLElBQUFuVSxTQUFBLENBQUFtVSxLQUFBO0lBQUE7SUFDaEIsSUFBTUMsS0FBSyxJQUFBSCxzQkFBQSxHQUFBeEMscUJBQUEsQ0FBQWpVLFNBQUEsQ0FBU3dXLFlBQVksRUFBQXZWLElBQUEsQ0FBQXdCLEtBQUEsQ0FBQWdVLHNCQUFBLFNBQUFuQyxNQUFBLENBQUlILElBQUksRUFBQztJQUN6Q3lDLEtBQUssQ0FBQ0MscUJBQXFCLEdBQUcsSUFBSSxDQUFDQSxxQkFBcUI7SUFDeEQsT0FBT0QsS0FBSztFQUNoQixDQUFDO0VBQUFqVCxNQUFBLENBRURtVCw2QkFBNkIsR0FBN0IsU0FBQUEsNkJBQTZCQSxDQUFDeFMsSUFBSSxFQUFFO0lBQ2hDMlAscUJBQUEsQ0FBQWpVLFNBQUEsQ0FBTThXLDZCQUE2QixDQUFBN1YsSUFBQSxPQUFDcUQsSUFBSTtJQUN4QyxJQUFNeVMsSUFBSSxHQUFHLElBQUksQ0FBQ0YscUJBQXFCLENBQUMvUyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdELElBQUksQ0FBQ1EsSUFBSSxDQUFDMFMsV0FBVyxJQUFJLENBQUMxUyxJQUFJLENBQUMyUyxPQUFPLEVBQUU7TUFDcENGLElBQUksQ0FBQ0csSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7SUFDL0IsQ0FBQyxNQUFNO01BQ0hILElBQUksQ0FBQ0csSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7SUFDaEM7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBSkk7RUFBQXZULE1BQUEsQ0FLQXdULGdCQUFnQixHQUFoQixTQUFBQSxnQkFBZ0JBLENBQUNsVCxLQUFLLEVBQUVtVCxJQUFJLEVBQUU7SUFDMUIsSUFBSW5ULEtBQUssQ0FBQ29ULGlCQUFpQixFQUFFO01BQ3pCNVQsQ0FBQyxDQUFDMlQsSUFBSSxDQUFDLENBQUN0VCxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQzJSLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQztNQUNuRSxJQUFJLENBQUM2QixpQkFBaUIsQ0FBQ3JULEtBQUssRUFBRW1ULElBQUksQ0FBQztJQUN2QyxDQUFDLE1BQU07TUFDSDNULENBQUMsQ0FBQzJULElBQUksQ0FBQyxDQUFDdFQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMyUixHQUFHLENBQUMsS0FBSyxDQUFDO01BQy9DeEIscUJBQUEsQ0FBQWpVLFNBQUEsQ0FBTW1YLGdCQUFnQixDQUFBbFcsSUFBQSxPQUFDZ0QsS0FBSyxFQUFFbVQsSUFBSTtJQUN0QztFQUNKOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTkk7RUFBQXpULE1BQUEsQ0FPTTJULGlCQUFpQjtFQUFBO0VBQUE7SUFBQSxJQUFBQyxrQkFBQSxHQUFBaFYsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQXZCLFNBQUEySyxRQUF3QnRJLEtBQUssRUFBRW1ULElBQUk7TUFBQSxJQUFBclAsTUFBQTtNQUFBLElBQUF5UCxRQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxRQUFBLEVBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxNQUFBLEVBQUFDLE1BQUEsRUFBQUMsRUFBQTtNQUFBLE9BQUF0VyxZQUFBLEdBQUFDLENBQUEsV0FBQTZLLFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBak0sQ0FBQSxHQUFBaU0sUUFBQSxDQUFBOU0sQ0FBQTtVQUFBO1lBQ3pCOFgsUUFBUSxHQUFHL1QsQ0FBQyxDQUFDLCtCQUErQixFQUFFQSxDQUFDLENBQUNRLEtBQUssQ0FBQ2tCLE1BQU0sQ0FBQyxDQUFDLENBQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3BGMlQsY0FBYyxHQUFHRCxRQUFRLENBQUMvQixHQUFHLENBQUMsQ0FBQztZQUMvQmlDLFdBQVcsR0FBR0YsUUFBUSxDQUFDbFQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUVoRDtZQUFBLE1BQ0kyVCxNQUFNLENBQUNDLFFBQVEsS0FBS0MsU0FBUztjQUFBM0wsUUFBQSxDQUFBOU0sQ0FBQTtjQUFBO1lBQUE7WUFBQSxPQUFBOE0sUUFBQSxDQUFBN0wsQ0FBQTtVQUFBO1lBSTNCZ1gsUUFBUSxHQUFHLElBQUlPLFFBQVEsQ0FBQ2QsSUFBSSxDQUFDLEVBRW5DO1lBQ0FuVCxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1lBRXRCc1QsUUFBUSxDQUNIL0IsR0FBRyxDQUFDaUMsV0FBVyxDQUFDLENBQ2hCUixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztZQUUzQixJQUFJLENBQUNrQixRQUFRLENBQUMvUCxJQUFJLENBQUMsQ0FBQztZQUVwQixJQUFJLENBQUNnUSx1QkFBdUIsQ0FBQ2IsUUFBUSxDQUFDYyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7WUFFM0RWLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJVyxRQUFRLEVBQUs7Y0FDMUJmLFFBQVEsQ0FDSC9CLEdBQUcsQ0FBQ2dDLGNBQWMsQ0FBQyxDQUNuQlAsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7Y0FFNUJuUCxNQUFJLENBQUNxUSxRQUFRLENBQUM1USxJQUFJLENBQUMsQ0FBQztjQUVwQixJQUFJLE9BQU9PLE1BQUksQ0FBQ3lRLE9BQU8sQ0FBQ0MsbUJBQW1CLEtBQUssVUFBVSxFQUFFO2dCQUN4RDFRLE1BQUksQ0FBQ3lRLE9BQU8sQ0FBQ0MsbUJBQW1CLENBQUNGLFFBQVEsQ0FBQztjQUM5QztZQUNKLENBQUM7WUFFS1YsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlhLFNBQVMsRUFBSztjQUMzQjtjQUNBLElBQU1DLEdBQUcsR0FBRzFRLFFBQVEsQ0FBQzJRLGFBQWEsQ0FBQyxLQUFLLENBQUM7Y0FDekNELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHSCxTQUFTO2NBRXpCLElBQUksQ0FBQzNRLE1BQUksQ0FBQytRLHFCQUFxQixDQUFDdEIsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZDdEcsK0RBQVUsQ0FBQyxDQUFDLENBQUM2SCxrQkFBa0IsR0FBR3ZCLFFBQVE7Y0FDOUM7Y0FFQSxPQUFPckcsbUVBQWMsQ0FBQ3dILEdBQUcsQ0FBQ0ssV0FBVyxJQUFJTCxHQUFHLENBQUNNLFNBQVMsQ0FBQztZQUMzRCxDQUFDO1lBQUEsS0FFRyxJQUFJLENBQUNULE9BQU8sQ0FBQ1UsbUJBQW1CO2NBQUExTSxRQUFBLENBQUE5TSxDQUFBO2NBQUE7WUFBQTtZQUMxQm9ZLE1BQU0sR0FBR0gsUUFBUSxDQUFDdFIsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUNoQzBSLE1BQU0sR0FBR0osUUFBUSxDQUFDdFIsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUFBbUcsUUFBQSxDQUFBak0sQ0FBQTtZQUFBaU0sUUFBQSxDQUFBOU0sQ0FBQTtZQUFBLE9BRzFCLElBQUksQ0FBQ3laLHNCQUFzQixDQUFDckIsTUFBTSxFQUFFQyxNQUFNLENBQUM7VUFBQTtZQUFBdkwsUUFBQSxDQUFBOU0sQ0FBQTtZQUFBO1VBQUE7WUFBQThNLFFBQUEsQ0FBQWpNLENBQUE7WUFBQXlYLEVBQUEsR0FBQXhMLFFBQUEsQ0FBQTlMLENBQUE7WUFBQSxPQUFBOEwsUUFBQSxDQUFBN0wsQ0FBQSxJQUUxQ2tYLE9BQU8sQ0FBQUcsRUFBTSxDQUFDO1VBQUE7WUFBQXhMLFFBQUEsQ0FBQTlNLENBQUE7WUFBQSxPQUl2QitELENBQUMsQ0FBQ3dMLElBQUksQ0FBQztjQUNUbUssSUFBSSxFQUFFLE1BQU07Y0FDWmhNLEdBQUcsRUFBRWdLLElBQUksQ0FBQ2lDLFlBQVksQ0FBQyxRQUFRLENBQUM7Y0FDaEMvVSxJQUFJLEVBQUVxVCxRQUFRO2NBQ2QyQixXQUFXLEVBQUUsS0FBSztjQUNsQkMsV0FBVyxFQUFFO1lBQ2pCLENBQUMsQ0FBQyxDQUFDclksSUFBSSxDQUFDLFVBQUNxWCxRQUFRO2NBQUEsT0FBS1gsT0FBTyxDQUFDVyxRQUFRLENBQUM7WUFBQSxFQUFDLENBQUNpQixJQUFJLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUs7Y0FBQSxPQUFLOUIsT0FBTyxDQUFDOEIsS0FBSyxDQUFDO1lBQUEsRUFBQztVQUFBO1lBQUEsT0FBQW5OLFFBQUEsQ0FBQTdMLENBQUE7UUFBQTtNQUFBLEdBQUE0TCxPQUFBO0lBQUEsQ0FDMUY7SUFBQSxTQWpFSytLLGlCQUFpQkEsQ0FBQXNDLEdBQUEsRUFBQUMsR0FBQTtNQUFBLE9BQUF0QyxrQkFBQSxDQUFBOVUsS0FBQSxPQUFBRCxTQUFBO0lBQUE7SUFBQSxPQUFqQjhVLGlCQUFpQjtFQUFBO0VBQUEzVCxNQUFBLENBbUV2QndWLHNCQUFzQixHQUF0QixTQUFBQSxzQkFBc0JBLENBQUNyQixNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUNuQyxPQUFPLElBQUkzVixPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFeVgsTUFBTSxFQUFLO01BQ3BDOUksc0VBQVMsQ0FBQ2dKLElBQUksQ0FBQ0MsVUFBVSxDQUFDbkMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsVUFBQ21DLEdBQUcsRUFBRTNCLFFBQVEsRUFBSztRQUFBLElBQUE0QixjQUFBO1FBQ3pELElBQUlELEdBQUcsRUFBRTtVQUNMLE9BQU9KLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDO1FBQ3RCO1FBQ0EsSUFBSSxDQUFBM0IsUUFBUSxhQUFBNEIsY0FBQSxHQUFSNUIsUUFBUSxDQUFFalUsSUFBSSxxQkFBZDZWLGNBQUEsQ0FBZ0JDLE1BQU0sTUFBSyxTQUFTLEVBQUU7VUFDdENOLE1BQU0sQ0FBQ3ZCLFFBQVEsQ0FBQ2pVLElBQUksQ0FBQytWLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUMsTUFBTTtVQUNIalksT0FBTyxDQUFDa1csUUFBUSxDQUFDO1FBQ3JCO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047O0VBRUE7QUFDSjtBQUNBO0FBQ0EsS0FISTtFQUFBNVUsTUFBQSxDQUlBa1MscUJBQXFCLEdBQXJCLFNBQUFBLHFCQUFxQkEsQ0FBQSxFQUFHO0lBQ3BCLElBQU0wRSxXQUFXLEdBQUc5VyxDQUFDLENBQUMrVyxLQUFLLENBQUMsUUFBUSxFQUFFO01BQUVuRCxpQkFBaUIsRUFBRTtJQUFLLENBQUMsQ0FBQztJQUNsRSxJQUFNOUIsS0FBSyxHQUFHLElBQUksQ0FBQ2hLLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUV0RCxJQUFJLENBQUMrUyxxQkFBcUIsQ0FBQy9TLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ0UsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDbEVBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDdEJxUixLQUFLLENBQUM5TSxPQUFPLENBQUM4UixXQUFXLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBNVcsTUFBQSxDQUVEbVMseUJBQXlCLEdBQXpCLFNBQUFBLHlCQUF5QkEsQ0FBQSxFQUFHO0lBQUEsSUFBQXBOLE1BQUE7SUFDeEIsSUFBSSxDQUFDNkMsTUFBTSxDQUFDdkgsRUFBRSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDcERBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFFdEIsSUFBTXVXLE9BQU8sR0FBR2hYLENBQUMsQ0FBQ1EsS0FBSyxDQUFDRyxhQUFhLENBQUM7TUFDdEMsSUFBSXFXLE9BQU8sQ0FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSXVELE9BQU8sQ0FBQ3RVLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDdEU7TUFDSjtNQUVBLElBQU1vUCxLQUFLLEdBQUc3TSxNQUFJLENBQUM2QyxNQUFNLENBQUN6SCxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQ29LLEtBQUssQ0FBQyxDQUFDO01BQ2xFLElBQUksQ0FBQ3FILEtBQUssQ0FBQ3pVLE1BQU0sRUFBRTtRQUNmO01BQ0o7TUFFQXlVLEtBQUssQ0FBQzlNLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBOUUsTUFBQSxDQUVEb1MsZ0JBQWdCLEdBQWhCLFNBQUFBLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQTFMLE1BQUE7SUFDZjtJQUNBO0lBQ0EsSUFBSSxDQUFDa0IsTUFBTSxDQUFDNUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDK1YsR0FBRyxDQUFDdEosNERBQVcsQ0FBQ3VKLE1BQU0sRUFBRSxZQUFNO01BQ3hEdFEsTUFBSSxDQUFDaEgsWUFBWSxDQUFDa04saUJBQWlCLENBQUMzSyxZQUFZLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFqQyxNQUFBLENBRURxUyxpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFBLEVBQUc7SUFDaEIsSUFBSSxDQUFDekssTUFBTSxDQUFDekgsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM4VyxJQUFJLENBQUMsVUFBQ3hSLEVBQUUsRUFBRXlSLFdBQVcsRUFBSztNQUN4RSxJQUFNQyxVQUFVLEdBQUdyWCxDQUFDLENBQUNvWCxXQUFXLENBQUM7TUFDakMsSUFBTUUsSUFBSSxHQUFHRCxVQUFVLENBQUNoWCxJQUFJLENBQUMscUJBQXFCLENBQUM7TUFDbkQsSUFBTWtYLElBQUksR0FBR0YsVUFBVSxDQUFDaFgsSUFBSSxDQUFDLHFCQUFxQixDQUFDO01BQ25ELElBQU1tWCxNQUFNLEdBQUdILFVBQVUsQ0FBQ2hYLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztNQUV2RCxJQUFNb1gsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztRQUNmSixVQUFVLENBQUNoWCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUNxRSxRQUFRLENBQUMsV0FBVyxDQUFDO1FBRXBELElBQU1nVCxPQUFPLEdBQUdMLFVBQVUsQ0FBQ2hYLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0RCxJQUFNc1gsUUFBUSxHQUFHRCxPQUFPLENBQUM5VCxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzNDLElBQU1nVSxNQUFNLEdBQUdGLE9BQU8sQ0FBQ2pOLEtBQUssQ0FBQyxDQUFDO1FBRTlCLElBQUlrTixRQUFRLENBQUN0YSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3JCLElBQU1oQixDQUFDLEdBQUdxYixPQUFPLENBQUM1SSxLQUFLLENBQUM2SSxRQUFRLENBQUM7VUFDakNMLElBQUksQ0FBQzdELElBQUksQ0FBQyxVQUFVLEVBQUVwWCxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQzlCa2IsSUFBSSxDQUFDOUQsSUFBSSxDQUFDLFVBQVUsRUFBRXBYLENBQUMsS0FBS3FiLE9BQU8sQ0FBQ3JhLE1BQU0sR0FBRyxDQUFDLENBQUM7VUFDL0NtYSxNQUFNLENBQUM5UyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQy9CLENBQUMsTUFBTSxJQUFJa1QsTUFBTSxDQUFDdmEsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUMxQmlhLElBQUksQ0FBQzdELElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1VBQzNCOEQsSUFBSSxDQUFDOUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7UUFDaEM7UUFFQTRELFVBQVUsQ0FBQ2hYLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ3dFLFdBQVcsQ0FBQyxXQUFXLENBQUM7TUFDM0QsQ0FBQztNQUVENFMsSUFBSSxDQUFDLENBQUM7TUFFTixJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSUMsR0FBRyxFQUFLO1FBQ3BCVCxVQUFVLENBQUNoWCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUNxRSxRQUFRLENBQUMsV0FBVyxDQUFDO1FBRXBELElBQU1nVCxPQUFPLEdBQUdMLFVBQVUsQ0FBQ2hYLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0RCxJQUFNc1gsUUFBUSxHQUFHRCxPQUFPLENBQUM5VCxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzNDLElBQU1nVSxNQUFNLEdBQUdGLE9BQU8sQ0FBQ2pOLEtBQUssQ0FBQyxDQUFDO1FBRTlCLElBQUlrTixRQUFRLENBQUN0YSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3JCO1VBQ0EsSUFBTWhCLENBQUMsR0FBR3FiLE9BQU8sQ0FBQzVJLEtBQUssQ0FBQzZJLFFBQVEsQ0FBQztVQUNqQyxJQUFJRyxHQUFHLEVBQUU7WUFDTDtZQUNBLElBQUl6YixDQUFDLEdBQUdxYixPQUFPLENBQUNyYSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2NBQ3hCcWEsT0FBTyxDQUFDSyxFQUFFLENBQUMxYixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNvWCxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDek8sT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN6RHNTLElBQUksQ0FBQzdELElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO2NBQzVCOEQsSUFBSSxDQUFDOUQsSUFBSSxDQUFDLFVBQVUsRUFBRXBYLENBQUMsR0FBRyxDQUFDLEtBQUtxYixPQUFPLENBQUNyYSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZEO1VBQ0osQ0FBQyxNQUFNLElBQUloQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2Q7WUFDQXFiLE9BQU8sQ0FBQ0ssRUFBRSxDQUFDMWIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDb1gsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ3pPLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDekR1UyxJQUFJLENBQUM5RCxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztZQUM1QjZELElBQUksQ0FBQzdELElBQUksQ0FBQyxVQUFVLEVBQUVwWCxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztVQUN0QztVQUNBbWIsTUFBTSxDQUFDOVMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUMvQixDQUFDLE1BQU0sSUFBSWtULE1BQU0sQ0FBQ3ZhLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDMUI7VUFDQSxJQUFJeWEsR0FBRyxJQUFJRixNQUFNLENBQUNoVSxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQ3ZHLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUQ7WUFDQXFhLE9BQU8sQ0FBQ00sR0FBRyxDQUFDSixNQUFNLENBQUMsQ0FBQ25OLEtBQUssQ0FBQyxDQUFDLENBQUNnSixJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDek8sT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUNuRXNTLElBQUksQ0FBQzdELElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1lBQzVCOEQsSUFBSSxDQUFDOUQsSUFBSSxDQUFDLFVBQVUsRUFBRWlFLE9BQU8sQ0FBQ3JhLE1BQU0sS0FBSyxDQUFDLENBQUM7VUFDL0MsQ0FBQyxNQUFNO1lBQ0g7WUFDQXVhLE1BQU0sQ0FBQ25FLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUN6TyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzlDc1MsSUFBSSxDQUFDN0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDM0I4RCxJQUFJLENBQUM5RCxJQUFJLENBQUMsVUFBVSxFQUFFaUUsT0FBTyxDQUFDcmEsTUFBTSxLQUFLLENBQUMsQ0FBQztVQUMvQztVQUNBbWEsTUFBTSxDQUFDOVMsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUMvQjs7UUFFQTtRQUNBLElBQUkyUyxVQUFVLENBQUNoWCxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQ3VELE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDdkcsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNyRm1hLE1BQU0sQ0FBQzNTLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDbEM7UUFFQXdTLFVBQVUsQ0FBQ2hYLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ3dFLFdBQVcsQ0FBQyxXQUFXLENBQUM7TUFDM0QsQ0FBQztNQUVEeVMsSUFBSSxDQUFDL1csRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7UUFDdEJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdEJvWCxNQUFNLENBQUMsS0FBSyxDQUFDO01BQ2pCLENBQUMsQ0FBQztNQUVGTixJQUFJLENBQUNoWCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtRQUN0QkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUN0Qm9YLE1BQU0sQ0FBQyxJQUFJLENBQUM7TUFDaEIsQ0FBQyxDQUFDO01BRUZMLE1BQU0sQ0FBQ2pYLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO1FBQ3hCQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RCLElBQUkrVyxNQUFNLENBQUNTLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtVQUM3QjtVQUNBLElBQU1DLFFBQVEsR0FBR2IsVUFBVSxDQUFDaFgsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUNvVCxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztVQUM5RSxJQUFNMEUsS0FBSyxHQUFHZCxVQUFVLENBQUNoWCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUN1RCxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQzZQLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO1VBQ3BHLElBQUkwRSxLQUFLLENBQUM5YSxNQUFNLEdBQUcsQ0FBQyxFQUFFOGEsS0FBSyxDQUFDblQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQ3pDLElBQUlrVCxRQUFRLENBQUM3YSxNQUFNLEVBQUU2YSxRQUFRLENBQUNsVCxPQUFPLENBQUMsUUFBUSxDQUFDO1VBQ3BEd1MsTUFBTSxDQUFDM1MsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUNsQyxDQUFDLE1BQU07VUFDSGdULE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEI7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0EsS0FGSTtFQUFBM1gsTUFBQSxDQUdBc1Msa0JBQWtCLEdBQWxCLFNBQUFBLGtCQUFrQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksSUFBSSxDQUFDdUMsT0FBTyxDQUFDVSxtQkFBbUIsRUFBRSxPQUFPLENBQUM7O0lBRTlDLElBQU0yQyxPQUFPLEdBQUdwWSxDQUFDLG1EQUFnRCxJQUFJLENBQUNrSSxTQUFTLFFBQUksQ0FBQyxDQUFDOEosR0FBRyxDQUFDLENBQUM7SUFDMUYsSUFBSSxDQUFDb0csT0FBTyxFQUFFO0lBRWQsSUFBTUMsSUFBSSxHQUFHLElBQUksQ0FBQ3ZRLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyw0Q0FBNEMsQ0FBQztJQUMzRSxJQUFNaVksR0FBRyxHQUFHRCxJQUFJLENBQUNyRyxHQUFHLENBQUMsQ0FBQztJQUN0QixJQUFJcUcsSUFBSSxDQUFDaGIsTUFBTSxHQUFHLENBQUMsSUFBSWliLEdBQUcsS0FBS0YsT0FBTyxFQUFFO01BQ3BDQyxJQUFJLENBQUNyRyxHQUFHLENBQUNvRyxPQUFPLENBQUMsQ0FBQ3BULE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDdkM7RUFDSixDQUFDO0VBQUE5RSxNQUFBLENBRUR1UyxpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFBLEVBQUc7SUFDaEIsSUFBUThGLG9CQUFvQixHQUFLLElBQUksQ0FBQ3hELE9BQU8sQ0FBckN3RCxvQkFBb0I7SUFDNUIsSUFBTTdVLEdBQUcsR0FBRyxJQUFJLENBQUNvRSxNQUFNLENBQUN6SCxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDMURxRCxHQUFHLENBQUM3QyxJQUFJLENBQUMsMkJBQTJCLEVBQUU7TUFBRTJYLE1BQU0sRUFBRTlVLEdBQUcsQ0FBQzdDLElBQUksQ0FBQyxvQkFBb0I7SUFBRSxDQUFDLENBQUM7SUFFakZpTix1REFBYSxDQUFDMkssU0FBUyxDQUFDO01BQUVGLG9CQUFvQixFQUFwQkE7SUFBcUIsQ0FBQyxDQUFDO0lBQ2pEekssdURBQWEsQ0FBQzRLLEdBQUcsQ0FBQ2hWLEdBQUcsQ0FBQztFQUMxQixDQUFDO0VBQUF4RCxNQUFBLENBRUR5WSxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQzlYLElBQUksRUFBVztJQUFBLElBQUErWCxzQkFBQTtJQUFBLFNBQUFDLEtBQUEsR0FBQTlaLFNBQUEsQ0FBQTFCLE1BQUEsRUFBTnFULElBQUksT0FBQUMsS0FBQSxDQUFBa0ksS0FBQSxPQUFBQSxLQUFBLFdBQUFDLEtBQUEsTUFBQUEsS0FBQSxHQUFBRCxLQUFBLEVBQUFDLEtBQUE7TUFBSnBJLElBQUksQ0FBQW9JLEtBQUEsUUFBQS9aLFNBQUEsQ0FBQStaLEtBQUE7SUFBQTtJQUNwQixDQUFBRixzQkFBQSxHQUFBcEkscUJBQUEsQ0FBQWpVLFNBQUEsQ0FBTW9jLFVBQVUsRUFBQW5iLElBQUEsQ0FBQXdCLEtBQUEsQ0FBQTRaLHNCQUFBLFNBQUMvWCxJQUFJLEVBQUFnUSxNQUFBLENBQUtILElBQUk7SUFDOUIsSUFBSSxDQUFDdUIsc0JBQXNCLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUNTLDBCQUEwQixDQUFDLENBQUM7SUFFakMsSUFBSSxDQUFDcUcsaUJBQWlCLENBQUNsWSxJQUFJLENBQUM7SUFDNUIsSUFBSSxDQUFDbVksdUJBQXVCLENBQUNuWSxJQUFJLENBQUM7SUFFbEMsSUFBSSxJQUFJLENBQUNxUixvQkFBb0IsRUFBRTtNQUMzQixJQUFJLENBQUNwSyxNQUFNLENBQUN6SCxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FDL0NvVCxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUM1UyxJQUFJLFlBQUpBLElBQUksQ0FBRTBTLFdBQVcsRUFBQztNQUV6QyxJQUFJLElBQUksQ0FBQ3pMLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDNFgsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUNnQix5QkFBeUIsRUFBRTtVQUNqQyxJQUFJLENBQUNDLG1CQUFtQixDQUFDLENBQUM7UUFDOUIsQ0FBQyxNQUFNO1VBQ0gsSUFBTXBILEtBQUssR0FBRyxJQUFJLENBQUNoSyxNQUFNLENBQUN6SCxJQUFJLENBQUMsc0JBQXNCLENBQUM7VUFDdEQsSUFBTThZLGlCQUFpQixHQUFHckgsS0FBSyxDQUFDelIsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1VBQ3BFLElBQU0rWSxzQkFBc0IsR0FBR0QsaUJBQWlCLENBQUM5WSxJQUFJLENBQUMsc0NBQXNDLENBQUM7VUFDN0YsSUFBTWdaLHVCQUF1QixHQUFHRixpQkFBaUIsQ0FBQzlZLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQztVQUN0RyxJQUFNNlQsUUFBUSxHQUFHLElBQUlPLFFBQVEsQ0FBQzNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN2QyxJQUFNd0gsYUFBYSxHQUFHLElBQUksQ0FBQ0Msb0JBQW9CLENBQUM3SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDNUQsSUFBTThLLFNBQVMsR0FBRyxJQUFJLENBQUNDLG9CQUFvQjtVQUUzQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDTixzQkFBc0IsRUFBRUMsdUJBQXVCLEVBQUVDLGFBQWEsRUFBRXBGLFFBQVEsRUFBRXNGLFNBQVMsRUFBRSxJQUFJLENBQUM7VUFDaEgsSUFBSSxDQUFDRyx1QkFBdUIsQ0FBQzlZLElBQUksQ0FBQztRQUN0QztNQUNKO0lBQ0o7RUFDSixDQUFDO0VBQUFYLE1BQUEsQ0FFRDZZLGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUNsWSxJQUFJLEVBQUU7SUFBQSxJQUFBK1ksV0FBQSxFQUFBQyxZQUFBO0lBQ3BCLElBQU1DLElBQUksR0FBRyxJQUFJLENBQUNoUyxNQUFNLENBQUN6SCxJQUFJLENBQUMsNkJBQTZCLENBQUM7SUFDNUQsSUFBTTBaLEtBQUssR0FBRyxJQUFJLENBQUNqUyxNQUFNLENBQUN6SCxJQUFJLENBQUMsbUNBQW1DLENBQUM7SUFDbkUsSUFBSTJaLFdBQVcsR0FBRyxDQUFDO0lBRW5CLElBQUluWixJQUFJLGFBQUErWSxXQUFBLEdBQUovWSxJQUFJLENBQUVvWixLQUFLLGNBQUFMLFdBQUEsR0FBWEEsV0FBQSxDQUFhTSxXQUFXLGFBQXhCTixXQUFBLENBQTBCbGMsS0FBSyxFQUFFO01BQUEsSUFBQXljLFlBQUEsRUFBQUMsWUFBQTtNQUNqQyxJQUFJLENBQUF2WixJQUFJLGFBQUFzWixZQUFBLEdBQUp0WixJQUFJLENBQUVvWixLQUFLLGNBQUFFLFlBQUEsR0FBWEEsWUFBQSxDQUFhRSxlQUFlLHFCQUE1QkYsWUFBQSxDQUE4QnpjLEtBQUssSUFBRyxDQUFDLEVBQUU7UUFDekNzYyxXQUFXLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHMVosSUFBSSxDQUFDb1osS0FBSyxDQUFDQyxXQUFXLENBQUN4YyxLQUFLLEdBQUdtRCxJQUFJLENBQUNvWixLQUFLLENBQUNJLGVBQWUsQ0FBQzNjLEtBQUssSUFBSSxHQUFHLENBQUM7TUFDekcsQ0FBQyxNQUFNLElBQUksQ0FBQW1ELElBQUksYUFBQXVaLFlBQUEsR0FBSnZaLElBQUksQ0FBRW9aLEtBQUssY0FBQUcsWUFBQSxHQUFYQSxZQUFBLENBQWFJLDBCQUEwQixxQkFBdkNKLFlBQUEsQ0FBeUMxYyxLQUFLLElBQUcsQ0FBQyxFQUFFO1FBQzNEc2MsV0FBVyxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRzFaLElBQUksQ0FBQ29aLEtBQUssQ0FBQ0MsV0FBVyxDQUFDeGMsS0FBSyxHQUFHbUQsSUFBSSxDQUFDb1osS0FBSyxDQUFDTywwQkFBMEIsQ0FBQzljLEtBQUssSUFBSSxHQUFHLENBQUM7TUFDcEg7SUFDSixDQUFDLE1BQU0sSUFBSW1ELElBQUksYUFBQWdaLFlBQUEsR0FBSmhaLElBQUksQ0FBRW9aLEtBQUssY0FBQUosWUFBQSxHQUFYQSxZQUFBLENBQWFZLFFBQVEsYUFBckJaLFlBQUEsQ0FBdUJuYyxLQUFLLEVBQUU7TUFBQSxJQUFBZ2QsWUFBQSxFQUFBQyxZQUFBO01BQ3JDLElBQUksQ0FBQTlaLElBQUksYUFBQTZaLFlBQUEsR0FBSjdaLElBQUksQ0FBRW9aLEtBQUssY0FBQVMsWUFBQSxHQUFYQSxZQUFBLENBQWFFLFlBQVkscUJBQXpCRixZQUFBLENBQTJCaGQsS0FBSyxJQUFHLENBQUMsRUFBRTtRQUN0Q3NjLFdBQVcsR0FBR00sSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcxWixJQUFJLENBQUNvWixLQUFLLENBQUNRLFFBQVEsQ0FBQy9jLEtBQUssR0FBR21ELElBQUksQ0FBQ29aLEtBQUssQ0FBQ1csWUFBWSxDQUFDbGQsS0FBSyxJQUFJLEdBQUcsQ0FBQztNQUNuRyxDQUFDLE1BQU0sSUFBSSxDQUFBbUQsSUFBSSxhQUFBOFosWUFBQSxHQUFKOVosSUFBSSxDQUFFb1osS0FBSyxjQUFBVSxZQUFBLEdBQVhBLFlBQUEsQ0FBYUUsdUJBQXVCLHFCQUFwQ0YsWUFBQSxDQUFzQ2pkLEtBQUssSUFBRyxDQUFDLEVBQUU7UUFDeERzYyxXQUFXLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHMVosSUFBSSxDQUFDb1osS0FBSyxDQUFDUSxRQUFRLENBQUMvYyxLQUFLLEdBQUdtRCxJQUFJLENBQUNvWixLQUFLLENBQUNZLHVCQUF1QixDQUFDbmQsS0FBSyxJQUFJLEdBQUcsQ0FBQztNQUM5RztJQUNKO0lBRUEsSUFBSXNjLFdBQVcsR0FBRyxDQUFDLEVBQUU7TUFDakJELEtBQUssQ0FBQ2hYLElBQUksT0FBS2lYLFdBQVcsTUFBRyxDQUFDO01BQzlCRixJQUFJLENBQUNsVixJQUFJLENBQUMsQ0FBQztJQUNmLENBQUMsTUFBTTtNQUNIbVYsS0FBSyxDQUFDaFgsSUFBSSxDQUFDLEVBQUUsQ0FBQztNQUNkK1csSUFBSSxDQUFDL1YsSUFBSSxDQUFDLENBQUM7SUFDZjtFQUNKLENBQUM7RUFBQTdELE1BQUEsQ0FFRDhZLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUNuWSxJQUFJLEVBQUU7SUFDMUIsSUFBTWlhLGtCQUFrQixHQUFHLElBQUksQ0FBQ2hULE1BQU0sQ0FBQ3pILElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztJQUVuRixJQUFJeWEsa0JBQWtCLENBQUNyWixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUlaLElBQUksWUFBSkEsSUFBSSxDQUFFMFMsV0FBVyxFQUFFO01BQ3ZEdUgsa0JBQWtCLENBQUMxVSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUMzQyxDQUFDLE1BQU0sSUFBSTBVLGtCQUFrQixDQUFDclosRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUNaLElBQUksWUFBSkEsSUFBSSxDQUFFMFMsV0FBVyxHQUFFO01BQ2hFdUgsa0JBQWtCLENBQUMvVyxJQUFJLENBQUMsQ0FBQztJQUM3QjtFQUNKLENBQUM7RUFBQTdELE1BQUEsQ0FFRDZhLGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUEsRUFBVTtJQUFBLElBQUFDLHNCQUFBO0lBQ3ZCO0lBQ0EsSUFBSSxJQUFJLENBQUM5SSxvQkFBb0IsRUFBRTtNQUMzQixJQUFJLENBQUMrSSxtQkFBbUIsQ0FBQyxDQUFDO01BQzFCLElBQUksSUFBSSxDQUFDQyxZQUFZLEVBQUU7UUFDbkIsSUFBSSxDQUFDQSxZQUFZLENBQUM1RixrQkFBa0IsR0FBRyxJQUFJLENBQUN4TixNQUFNLENBQUN6SCxJQUFJLENBQUMsa0NBQWtDLENBQUM7TUFDL0Y7SUFDSjtJQUFDLFNBQUE4YSxLQUFBLEdBQUFwYyxTQUFBLENBQUExQixNQUFBLEVBUGdCcVQsSUFBSSxPQUFBQyxLQUFBLENBQUF3SyxLQUFBLEdBQUFDLEtBQUEsTUFBQUEsS0FBQSxHQUFBRCxLQUFBLEVBQUFDLEtBQUE7TUFBSjFLLElBQUksQ0FBQTBLLEtBQUEsSUFBQXJjLFNBQUEsQ0FBQXFjLEtBQUE7SUFBQTtJQVNyQixDQUFBSixzQkFBQSxHQUFBeEsscUJBQUEsQ0FBQWpVLFNBQUEsQ0FBTXdlLGlCQUFpQixFQUFBdmQsSUFBQSxDQUFBd0IsS0FBQSxDQUFBZ2Msc0JBQUEsU0FBQW5LLE1BQUEsQ0FBSUgsSUFBSTtFQUNuQyxDQUFDO0VBQUF4USxNQUFBLENBRURtYixnQkFBZ0IsR0FBaEIsU0FBQUEsZ0JBQWdCQSxDQUFDL1IsS0FBSyxFQUFXO0lBQUEsSUFBQWdTLHNCQUFBO0lBQUEsU0FBQUMsS0FBQSxHQUFBeGMsU0FBQSxDQUFBMUIsTUFBQSxFQUFOcVQsSUFBSSxPQUFBQyxLQUFBLENBQUE0SyxLQUFBLE9BQUFBLEtBQUEsV0FBQUMsS0FBQSxNQUFBQSxLQUFBLEdBQUFELEtBQUEsRUFBQUMsS0FBQTtNQUFKOUssSUFBSSxDQUFBOEssS0FBQSxRQUFBemMsU0FBQSxDQUFBeWMsS0FBQTtJQUFBO0lBQzNCLENBQUFGLHNCQUFBLEdBQUE5SyxxQkFBQSxDQUFBalUsU0FBQSxDQUFNOGUsZ0JBQWdCLEVBQUE3ZCxJQUFBLENBQUF3QixLQUFBLENBQUFzYyxzQkFBQSxTQUFDaFMsS0FBSyxFQUFBdUgsTUFBQSxDQUFLSCxJQUFJO0lBRXJDLElBQU0rSyxrQkFBa0IsR0FBRyxJQUFJLENBQUMzVCxNQUFNLENBQUN6SCxJQUFJLENBQUMsa0NBQWtDLENBQUM7SUFDL0UsSUFBQXFiLHFCQUFBLEdBQXdELElBQUksQ0FBQzliLFlBQVksQ0FBQytiLFlBQVk7TUFBOUV0VyxZQUFZLEdBQUFxVyxxQkFBQSxDQUFaclcsWUFBWTtNQUFFdEUsWUFBWSxHQUFBMmEscUJBQUEsQ0FBWjNhLFlBQVk7TUFBRXVFLGVBQWUsR0FBQW9XLHFCQUFBLENBQWZwVyxlQUFlO0lBRW5ELElBQUlELFlBQVksSUFBSUEsWUFBWSxLQUFLb1csa0JBQWtCLENBQUMvWSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDakUrWSxrQkFBa0IsQ0FDYi9ZLElBQUksQ0FBQyxLQUFLLEVBQUUyQyxZQUFZLENBQUMsQ0FDekIzQyxJQUFJLENBQUMsUUFBUSxFQUFFNEMsZUFBZSxDQUFDLENBQy9CNUMsSUFBSSxDQUFDLGFBQWEsRUFBRTRDLGVBQWUsQ0FBQyxDQUNwQzVDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTNCLFlBQVksQ0FBQzs7TUFFMUM7TUFDQSxJQUFJLENBQUMrRyxNQUFNLENBQUN6SCxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FDaEN1RCxNQUFNLENBQUMsVUFBQytCLEVBQUUsRUFBRWlXLEVBQUU7UUFBQSxPQUFLNWIsQ0FBQyxDQUFDNGIsRUFBRSxDQUFDLENBQUMxYSxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQzdELE1BQU0sS0FBSyxDQUFDO01BQUEsRUFBQyxDQUN0RXFGLElBQUksQ0FBQyxLQUFLLEVBQUUyQyxZQUFZLENBQUMsQ0FDekIzQyxJQUFJLENBQUMsUUFBUSxFQUFFNEMsZUFBZSxDQUFDLENBQy9CNUMsSUFBSSxDQUFDLGFBQWEsRUFBRTRDLGVBQWUsQ0FBQztJQUM3QztFQUNKOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTkk7RUFBQXBGLE1BQUEsQ0FPQTJiLFdBQVcsR0FBWCxTQUFBQSxXQUFXQSxDQUFDbmUsS0FBSyxFQUFFb2UsVUFBVSxFQUFVO0lBQUEsSUFBcEJBLFVBQVU7TUFBVkEsVUFBVSxHQUFHLEtBQUs7SUFBQTtJQUNqQyxJQUFNQyxPQUFPLEdBQUdoTixjQUFjLEdBQUc7TUFDN0JpTixjQUFjLEVBQUVqTixjQUFjLENBQUNrTixRQUFRLENBQUNGLE9BQU8sQ0FBQ0csTUFBTTtNQUN0REMsaUJBQWlCLEVBQUVwTixjQUFjLENBQUNrTixRQUFRLENBQUNGLE9BQU8sQ0FBQ0ssZUFBZTtNQUNsRUMsYUFBYSxFQUFFdE4sY0FBYyxDQUFDa04sUUFBUSxDQUFDRixPQUFPLENBQUNPLFlBQVk7TUFDM0RDLGNBQWMsRUFBRXhOLGNBQWMsQ0FBQ2tOLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDUyxhQUFhO01BQzdEQyxlQUFlLEVBQUUxTixjQUFjLENBQUNrTixRQUFRLENBQUNGLE9BQU8sQ0FBQ1c7SUFDckQsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVOLElBQUloZixLQUFLLEdBQUcsQ0FBQyxFQUFFO01BQ1gsSUFBTWlmLFVBQVMsR0FBRzlPLHNEQUFjLENBQUMsQ0FBQ25RLEtBQUssRUFBRXFlLE9BQU8sQ0FBQztNQUNqRCxPQUFPRCxVQUFVLFNBQU9hLFVBQVMsR0FBS0EsVUFBUztJQUNuRDtJQUVBLElBQU1BLFNBQVMsR0FBRzlPLHNEQUFjLENBQUNuUSxLQUFLLEVBQUVxZSxPQUFPLENBQUM7SUFDaEQsT0FBT0QsVUFBVSxTQUFPYSxTQUFTLEdBQUtBLFNBQVM7RUFDbkQ7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FOSTtFQUFBemMsTUFBQSxDQU9BMGMsZUFBZSxHQUFmLFNBQUFBLGVBQWVBLENBQUNDLFVBQVUsRUFBRUMsU0FBUyxFQUFFO0lBQUEsSUFBQUMsb0JBQUE7SUFDbkMsSUFBTUMsWUFBWSxHQUFHLElBQUksQ0FBQ2xLLGNBQWMsQ0FBQ3pTLElBQUksQ0FBQyxVQUFBNEgsSUFBQTtNQUFBLElBQUdnVixZQUFZLEdBQUFoVixJQUFBLENBQVpnVixZQUFZO01BQUEsT0FBT0EsWUFBWSxDQUFDL08sT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsS0FBSzBPLFVBQVUsQ0FBQzFPLFdBQVcsQ0FBQyxDQUFDO0lBQUEsRUFBQztJQUN6SyxJQUFNelEsS0FBSyxHQUFHc2YsWUFBWSxhQUFBRCxvQkFBQSxHQUFaQyxZQUFZLENBQUVFLE1BQU0scUJBQXBCSCxvQkFBQSxDQUFzQjFjLElBQUksQ0FBQyxVQUFBK0osS0FBQTtNQUFBLElBQUcrUyxLQUFLLEdBQUEvUyxLQUFBLENBQUwrUyxLQUFLO01BQUEsT0FBT0EsS0FBSyxDQUFDalAsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsS0FBSzJPLFNBQVMsQ0FBQzNPLFdBQVcsQ0FBQyxDQUFDO0lBQUEsRUFBQztJQUNySixJQUFNaVAsUUFBUSxHQUFHSixZQUFZLG9CQUFaQSxZQUFZLENBQUVLLEVBQUU7SUFDakMsSUFBTUMsT0FBTyxHQUFHNWYsS0FBSyxvQkFBTEEsS0FBSyxDQUFFMmYsRUFBRTtJQUN6QixPQUFPLENBQUNELFFBQVEsRUFBRUUsT0FBTyxDQUFDO0VBQzlCLENBQUM7RUFBQXBkLE1BQUEsQ0FFRGlTLG9CQUFvQixHQUFwQixTQUFBQSxvQkFBb0JBLENBQUEsRUFBRztJQUFBLElBQUEzSyxNQUFBO0lBQ25CLElBQU16RyxZQUFZLEdBQUcsSUFBSSxDQUFDK0csTUFBTSxDQUFDekgsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUNxQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDMUYsSUFBTTJDLFlBQVksR0FBRyxJQUFJLENBQUN5QyxNQUFNLENBQUN6SCxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3FDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEUsSUFBTTRDLGVBQWUsR0FBRyxJQUFJLENBQUN3QyxNQUFNLENBQUN6SCxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3FDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDakYsSUFBTW9QLEtBQUssR0FBRyxJQUFJLENBQUNoSyxNQUFNLENBQUN6SCxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDdEQsSUFBTWtkLHdCQUF3QixHQUFHLElBQUksQ0FBQ3pWLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyx5Q0FBeUMsQ0FBQztJQUM1RixJQUFNbWQsaUJBQWlCLEdBQUcxTCxLQUFLLENBQUN6UixJQUFJLENBQUMsa0NBQWtDLENBQUM7SUFDeEUsSUFBTTBSLGlCQUFpQixHQUFHRCxLQUFLLENBQUN6UixJQUFJLENBQUMsa0NBQWtDLENBQUM7SUFDeEUsSUFBTThZLGlCQUFpQixHQUFHckgsS0FBSyxDQUFDelIsSUFBSSxDQUFDLDhCQUE4QixDQUFDO0lBQ3BFLElBQU1vZCxlQUFlLEdBQUd6ZCxDQUFDLENBQUNWLGdEQUFRLENBQUN3RSxNQUFNLENBQUMsSUFBSSxDQUFDaU4sc0JBQXNCLEVBQUU7TUFDbkUyTSxXQUFXLEVBQUUsSUFBSSxDQUFDM0ksT0FBTyxDQUFDMkksV0FBVztNQUNyQ0MsWUFBWSxFQUFFLElBQUksQ0FBQzdWLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDNEosSUFBSSxDQUFDLENBQUM7TUFDbkU1RSxZQUFZLEVBQUUsSUFBSSxDQUFDekYsWUFBWSxDQUFDK2IsWUFBWSxDQUFDdFcsWUFBWSxJQUFJQSxZQUFZO01BQ3pFdEUsWUFBWSxFQUFFLElBQUksQ0FBQ25CLFlBQVksQ0FBQytiLFlBQVksQ0FBQzVhLFlBQVksSUFBSUEsWUFBWTtNQUN6RXVFLGVBQWUsRUFBRSxJQUFJLENBQUMxRixZQUFZLENBQUMrYixZQUFZLENBQUNyVyxlQUFlLElBQUlBO0lBQ3ZFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDdEIsUUFBUSxDQUFDbVYsaUJBQWlCLENBQUM7SUFDbkQsSUFBTUMsc0JBQXNCLEdBQUdxRSxlQUFlLENBQUNwZCxJQUFJLENBQUMsc0NBQXNDLENBQUM7SUFDM0YsSUFBTXVkLHVCQUF1QixHQUFHSCxlQUFlLENBQUNwZCxJQUFJLENBQUMsdUNBQXVDLENBQUM7SUFDN0YsSUFBTXdkLG9CQUFvQixHQUFHSixlQUFlLENBQUNwZCxJQUFJLENBQUMsb0NBQW9DLENBQUM7SUFDdkYsSUFBTXlkLHVCQUF1QixHQUFHTCxlQUFlLENBQUNwZCxJQUFJLENBQUMsdUNBQXVDLENBQUM7SUFDN0YsSUFBTTBkLG1CQUFtQixHQUFHTixlQUFlLENBQUNwZCxJQUFJLENBQUMsbUNBQW1DLENBQUM7O0lBRXJGO0lBQ0E4WSxpQkFBaUIsQ0FBQzlZLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDMkQsUUFBUSxDQUFDb1Ysc0JBQXNCLENBQUM7O0lBRXBHO0lBQ0F3RSx1QkFBdUIsQ0FBQ0ksTUFBTSxDQUFDUixpQkFBaUIsQ0FBQzs7SUFFakQ7SUFDQUEsaUJBQWlCLENBQUNuZCxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQ21DLEtBQUssQ0FBQyxDQUFDLENBQ3ZEd0IsUUFBUSxDQUFDdVosd0JBQXdCLENBQUM7SUFFdkNNLG9CQUFvQixDQUFDdGQsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDdENBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDdEIrRyxNQUFJLENBQUN5VCxtQkFBbUIsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQztJQUVGOEMsbUJBQW1CLENBQUN4ZCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUNyQ0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUN0QitHLE1BQUksQ0FBQ3lXLFVBQVUsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQztJQUVGSCx1QkFBdUIsQ0FBQ3ZkLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQ3pDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDOztNQUV0QjtNQUNBLElBQU02WSxhQUFhLEdBQUc5UixNQUFJLENBQUMrUixvQkFBb0IsQ0FBQzdLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7TUFDbEUsSUFBTXdQLGFBQWEsR0FBRzVFLGFBQWEsQ0FBQzZFLE1BQU0sQ0FBQyxVQUFDQyxjQUFjLEVBQUVoQixRQUFRO1FBQUEsVUFBQXZNLE1BQUEsQ0FDN0R1TixjQUFjLEVBQ2RoRixzQkFBc0IsQ0FDcEIvWSxJQUFJLHdCQUFxQitjLFFBQVEsZ0NBQXlCQSxRQUFRLHFDQUE4QkEsUUFBUSx1Q0FBZ0NBLFFBQVEsZUFBVyxDQUFDLENBQzVKeGEsR0FBRyxDQUFDLENBQUMsQ0FDTGdCLE1BQU0sQ0FBQyxVQUFBZ1ksRUFBRTtVQUFBLE9BQUksQ0FBQ0EsRUFBRSxDQUFDeUMsYUFBYSxDQUFDLENBQUM7UUFBQSxFQUFDO01BQUEsQ0FDeEMsRUFBRSxFQUFFLENBQUM7TUFFUCxJQUFJSCxhQUFhLENBQUM3Z0IsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMxQixPQUFPNmdCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksY0FBYyxDQUFDLENBQUM7TUFDNUM7O01BRUE7TUFDQWhGLGFBQWEsQ0FBQ2lGLE9BQU8sQ0FBQyxVQUFBbkIsUUFBUSxFQUFJO1FBQzlCLElBQU0xRixPQUFPLEdBQUcwQixzQkFBc0IsQ0FBQy9ZLElBQUksNkNBQXdDK2MsUUFBUSxTQUFLLENBQUM7UUFDakcsSUFBSTFGLE9BQU8sQ0FBQ3JhLE1BQU0sR0FBRyxDQUFDLElBQUlxYSxPQUFPLENBQUM5VCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUN2RyxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQy9EcWEsT0FBTyxDQUFDOVQsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM2UCxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztRQUNuRTtNQUNKLENBQUMsQ0FBQzs7TUFFRjtNQUNBak0sTUFBSSxDQUFDeVIseUJBQXlCLEdBQUcsS0FBSztNQUN0Q3pSLE1BQUksQ0FBQzBSLG1CQUFtQixDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0lBRUZuSCxpQkFBaUIsQ0FBQ3hSLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQ25DQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDOztNQUV0QjtNQUNBLElBQUkrRyxNQUFJLENBQUNnWCxzQkFBc0IsQ0FBQyxDQUFDLEVBQUU7UUFDL0JoWCxNQUFJLENBQUNpWCxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hCalgsTUFBSSxDQUFDa1gsa0JBQWtCLENBQUMsQ0FBQztNQUM3QjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXhlLE1BQUEsQ0FFRHdlLGtCQUFrQixHQUFsQixTQUFBQSxrQkFBa0JBLENBQUEsRUFBRztJQUNqQixJQUFJLENBQUM1VyxNQUFNLENBQUN6SCxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQ3FFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FDL0RpYSxNQUFNLENBQUMsSUFBSSxDQUFDN04sNkJBQTZCLENBQUM7RUFDbkQsQ0FBQztFQUFBNVEsTUFBQSxDQUVEK2EsbUJBQW1CLEdBQW5CLFNBQUFBLG1CQUFtQkEsQ0FBQSxFQUFHO0lBQ2xCLElBQUksQ0FBQ25ULE1BQU0sQ0FBQ3pILElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDd0UsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUN2RSxJQUFJLENBQUNpRCxNQUFNLENBQUN6SCxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQytCLE1BQU0sQ0FBQyxDQUFDO0VBQ3JFLENBQUM7RUFBQWxDLE1BQUEsQ0FFRHVlLGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUEsRUFBRztJQUNoQixJQUFNM00sS0FBSyxHQUFHLElBQUksQ0FBQ2hLLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN0RCxJQUFNOFksaUJBQWlCLEdBQUdySCxLQUFLLENBQUN6UixJQUFJLENBQUMsOEJBQThCLENBQUM7SUFDcEUsSUFBTStZLHNCQUFzQixHQUFHRCxpQkFBaUIsQ0FBQzlZLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztJQUU3RitZLHNCQUFzQixDQUFDL1ksSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQ2pEMlgsR0FBRyxDQUFDLGtEQUFrRCxDQUFDLENBQ3ZEcFUsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUNvTyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBRTFDb0gsc0JBQXNCLENBQUMvWSxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FDckV1RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQzZQLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDOztJQUV6RDtJQUNBMkYsc0JBQXNCLENBQUMvWSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQ29DLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQzs7SUFFakY7SUFDQSxJQUFJLENBQUN3Vyx5QkFBeUIsR0FBRyxLQUFLOztJQUV0QztBQUNSO0FBQ0E7QUFDQTtJQUNRO0lBQ0EsSUFBSSxDQUFDTSxvQkFBb0IsR0FBRyxFQUFFOztJQUU5QjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDUSxJQUFJLENBQUNFLG9CQUFvQixHQUFHLENBQUMsQ0FBQzs7SUFFOUI7SUFDQSxJQUFJLENBQUNQLG1CQUFtQixDQUFDO01BQUUwRixhQUFhLEVBQUU7SUFBSyxDQUFDLENBQUM7SUFFakR6RixpQkFBaUIsQ0FBQ25VLE9BQU8sQ0FBQyxRQUFRLENBQUM7RUFDdkMsQ0FBQztFQUFBOUUsTUFBQSxDQUVLZ1osbUJBQW1CO0lBQUEsSUFBQTJGLG9CQUFBLEdBQUEvZixpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBekIsU0FBQStLLFNBQUFuQixLQUFBO01BQUEsSUFBQUMsTUFBQTtNQUFBLElBQUFzRCxLQUFBLEVBQUF3VCxtQkFBQSxFQUFBRixhQUFBLEVBQUE5TSxLQUFBLEVBQUFxSCxpQkFBQSxFQUFBNEUsbUJBQUEsRUFBQTNFLHNCQUFBLEVBQUEyRixzQkFBQSxFQUFBQyxvQkFBQSxFQUFBQyxxQkFBQSxFQUFBbkIsdUJBQUEsRUFBQXpFLHVCQUFBLEVBQUFtRSxpQkFBQSxFQUFBdEosUUFBQSxFQUFBZ0wsZUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxhQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFFBQUEsRUFBQUMsZUFBQSxFQUFBaEcsU0FBQSxFQUFBaUcsYUFBQSxFQUFBbkcsYUFBQSxFQUFBb0cscUJBQUEsRUFBQUMsS0FBQSxFQUFBQyxZQUFBLEVBQUFDLFFBQUE7TUFBQSxPQUFBNWhCLFlBQUEsR0FBQUMsQ0FBQSxXQUFBa0wsU0FBQTtRQUFBLGtCQUFBQSxTQUFBLENBQUFuTixDQUFBO1VBQUE7WUFBQXFQLEtBQUEsR0FBQXZELEtBQUEsY0FBc0QsQ0FBQyxDQUFDLEdBQUFBLEtBQUEsRUFBQStXLG1CQUFBLEdBQUF4VCxLQUFBLENBQTVCc1QsYUFBYSxFQUFiQSxhQUFhLEdBQUFFLG1CQUFBLGNBQUcsS0FBSyxHQUFBQSxtQkFBQTtZQUN2Q2hOLEtBQUssR0FBRyxJQUFJLENBQUNoSyxNQUFNLENBQUN6SCxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDaEQ4WSxpQkFBaUIsR0FBR3JILEtBQUssQ0FBQ3pSLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztZQUM5RDBkLG1CQUFtQixHQUFHNUUsaUJBQWlCLENBQUM5WSxJQUFJLENBQUMsbUNBQW1DLENBQUM7WUFDakYrWSxzQkFBc0IsR0FBR0QsaUJBQWlCLENBQUM5WSxJQUFJLENBQUMsc0NBQXNDLENBQUM7WUFDdkYwZSxzQkFBc0IsR0FBRzVGLGlCQUFpQixDQUFDOVksSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUN5ZixLQUFLLENBQUMsQ0FBQztZQUMvRmQsb0JBQW9CLEdBQUc3RixpQkFBaUIsQ0FBQzlZLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDeWYsS0FBSyxDQUFDLENBQUM7WUFDM0ZiLHFCQUFxQixHQUFHOUYsaUJBQWlCLENBQUM5WSxJQUFJLENBQUMscUNBQXFDLENBQUM7WUFDckZ5ZCx1QkFBdUIsR0FBRzNFLGlCQUFpQixDQUFDOVksSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUMwRCxJQUFJLENBQUMsQ0FBQztZQUNoR3NWLHVCQUF1QixHQUFHRixpQkFBaUIsQ0FBQzlZLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQztZQUNoR21kLGlCQUFpQixHQUFHckUsaUJBQWlCLENBQUM5WSxJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQzBELElBQUksQ0FBQyxDQUFDO1lBQ3JGbVEsUUFBUSxHQUFHLElBQUlPLFFBQVEsQ0FBQzNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QyxJQUFJLENBQUNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixFQUFFakIsS0FBSyxDQUFDb1AsSUFBSSxDQUFDN0wsUUFBUSxDQUFDOEwsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUUvRTtBQUNSO0FBQ0E7QUFDQTs7WUFHUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO1lBR1E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO1lBQ1laLHFCQUFxQixHQUFHLEVBQUU7WUFFOUI7QUFDUjtBQUNBO0FBQ0E7WUFDY0MsYUFBYSxHQUFHLEVBQUU7WUFFeEI7QUFDUjtBQUNBO1lBQ2NDLGdCQUFnQixHQUFHLEVBQUU7WUFFM0I7QUFDUjtBQUNBO0FBQ0E7WUFDY0MsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUVuQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO1lBQ2NDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFFMUI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtZQUNjaEcsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUVwQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO1lBQ2NpRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBRXhCLElBQUksQ0FBQzNNLGNBQWMsQ0FBQ2xQLE1BQU0sQ0FBQyxVQUFBeUksS0FBQTtjQUFBLElBQUc0VCxLQUFLLEdBQUE1VCxLQUFBLENBQUw0VCxLQUFLO2NBQUEsT0FBT0EsS0FBSyxLQUFLLFVBQVU7WUFBQSxFQUFDLENBQUMxQixPQUFPLENBQUMsVUFBQTJCLE1BQU0sRUFBSTtjQUM5RWxZLE1BQUksQ0FBQzJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixFQUFFLGFBQWEsRUFBRXNPLE1BQU0sQ0FBQ2pELFlBQVksQ0FBQztjQUVuRixJQUFJa0QsVUFBVSxHQUFHLEtBQUs7O2NBRXRCO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7Y0FDWSxJQUFJQyxTQUFTOztjQUViO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtjQUNZLElBQUlDLGNBQWM7O2NBRWxCO2NBQ0EsSUFBTUMsa0JBQWtCLEdBQUd4TyxLQUFLLENBQUN6UixJQUFJLDZDQUF3QzZmLE1BQU0sQ0FBQzdDLEVBQUUscUJBQWUsQ0FBQyxDQUFDNUosSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Y0FFdEg7Y0FDQSxJQUFNOE0sS0FBSyxHQUFHek8sS0FBSyxDQUFDelIsSUFBSSw0Q0FBdUM2ZixNQUFNLENBQUM3QyxFQUFFLFNBQUssQ0FBQztjQUM5RSxJQUFNbUQsV0FBVyxHQUFHRCxLQUFLLENBQUNsakIsTUFBTSxHQUFHLENBQUMsSUFBSWtqQixLQUFLLENBQUM3ZCxJQUFJLENBQUMsa0JBQWtCLENBQUM7O2NBRXRFO2NBQ0EsSUFBTStkLEtBQUssR0FBRzNPLEtBQUssQ0FBQ3pSLElBQUksOEJBQTJCNmYsTUFBTSxDQUFDN0MsRUFBRSwyQ0FBb0M2QyxNQUFNLENBQUM3QyxFQUFFLDZDQUFzQzZDLE1BQU0sQ0FBQzdDLEVBQUUsZUFBVyxDQUFDO2NBQ3BLLElBQU1xRCxtQkFBbUIsR0FBR0QsS0FBSyxDQUFDcGpCLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQzZpQixNQUFNLENBQUNTLFFBQVEsSUFBSUYsS0FBSyxDQUFDL2QsSUFBSSxDQUFDLGtCQUFrQixDQUFDOztjQUVsRztjQUNBLElBQU1rZSxPQUFPLEdBQUc5TyxLQUFLLENBQUN6UixJQUFJLDhCQUEyQjZmLE1BQU0sQ0FBQzdDLEVBQUUsU0FBSyxDQUFDO2NBQ3BFLElBQU13RCxxQkFBcUIsR0FBR0QsT0FBTyxDQUFDdmpCLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQzZpQixNQUFNLENBQUNTLFFBQVEsSUFBSUMsT0FBTyxDQUFDbGUsSUFBSSxDQUFDLGtCQUFrQixDQUFDOztjQUV4RztjQUNBLElBQU1vZSxLQUFLLEdBQUdoUCxLQUFLLENBQUN6UixJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQ3VELE1BQU0sd0JBQXFCc2MsTUFBTSxDQUFDN0MsRUFBRSxTQUFLLENBQUM7Y0FDekgsSUFBTTBELG1CQUFtQixHQUFHRCxLQUFLLENBQUN6akIsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDNmlCLE1BQU0sQ0FBQ1MsUUFBUSxJQUFJRyxLQUFLLENBQUNwZSxJQUFJLENBQUMsa0JBQWtCLENBQUM7Y0FFbEcsSUFBTXNlLFNBQVMsR0FBRzlNLFFBQVEsQ0FBQ3RSLEdBQUcsZ0JBQWNzZCxNQUFNLENBQUM3QyxFQUFFLE1BQUcsQ0FBQztjQUV6RCxJQUFJMkQsU0FBUyxJQUFJLEVBQUVBLFNBQVMsWUFBWUMsSUFBSSxDQUFDLElBQ3RDWCxrQkFBa0IsSUFBSUUsV0FBVyxJQUFJRSxtQkFBbUIsSUFBSUcscUJBQXFCLElBQUlFLG1CQUFtQixJQUN4RzdNLFFBQVEsQ0FBQ3RSLEdBQUcsZ0JBQWNzZCxNQUFNLENBQUM3QyxFQUFFLFdBQVEsQ0FBQyxJQUM1Q25KLFFBQVEsQ0FBQ3RSLEdBQUcsZ0JBQWNzZCxNQUFNLENBQUM3QyxFQUFFLGFBQVUsQ0FBQyxJQUM5Q25KLFFBQVEsQ0FBQ3RSLEdBQUcsZ0JBQWNzZCxNQUFNLENBQUM3QyxFQUFFLFlBQVMsQ0FBQyxFQUFFO2dCQUNsRDtnQkFDQThDLFVBQVUsR0FBRyxJQUFJO2dCQUNqQm5ZLE1BQUksQ0FBQzJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixFQUFFdU8sVUFBVSxDQUFDO2NBQ2pFO2NBRUEsSUFBSSxDQUFDQSxVQUFVLEVBQUU7Z0JBQ2JuWSxNQUFJLENBQUN3RSxZQUFZLENBQUMrUixPQUFPLENBQUMsVUFBQTJDLFdBQVcsRUFBSTtrQkFDckM7a0JBQ0EsSUFBTUMsV0FBVyxHQUFHblosTUFBSSxDQUFDb1osc0JBQXNCLENBQUM7b0JBQUVGLFdBQVcsRUFBWEEsV0FBVztvQkFBRWhOLFFBQVEsRUFBUkEsUUFBUTtvQkFBRWdNLE1BQU0sRUFBTkE7a0JBQU8sQ0FBQyxDQUFDO2tCQUNsRixJQUFJaUIsV0FBVyxFQUFFO29CQUNiaEIsVUFBVSxHQUFHZ0IsV0FBVyxDQUFDaEIsVUFBVTtvQkFDbkNiLGdCQUFnQixDQUFDcFAsSUFBSSxDQUFBbFIsS0FBQSxDQUFyQnNnQixnQkFBZ0IsRUFBUzZCLFdBQVcsQ0FBQzdCLGdCQUFnQixDQUFDO2tCQUMxRDtrQkFFQSxJQUFJLENBQUNjLFNBQVMsSUFBSSxDQUFDRCxVQUFVLEVBQUU7b0JBQzNCO29CQUNBLElBQU1rQixVQUFVLEdBQUdyWixNQUFJLENBQUNzWixxQkFBcUIsQ0FBQztzQkFBRUosV0FBVyxFQUFYQSxXQUFXO3NCQUFFaEIsTUFBTSxFQUFOQTtvQkFBTyxDQUFDLENBQUM7b0JBQ3RFLElBQUltQixVQUFVLEVBQUU7c0JBQ1pqQixTQUFTLEdBQUdpQixVQUFVLENBQUNqQixTQUFTO3NCQUNoQ0MsY0FBYyxHQUFHZ0IsVUFBVSxDQUFDaEIsY0FBYztvQkFDOUM7a0JBQ0o7a0JBRUEsSUFBSSxDQUFDRixVQUFVLEVBQUU7b0JBQUEsSUFBQW9CLGNBQUE7b0JBQ2I7b0JBQ0EsSUFBTUMsWUFBWSxHQUFHeFosTUFBSSxDQUFDeVosdUJBQXVCLENBQUM7c0JBQUVQLFdBQVcsRUFBWEEsV0FBVztzQkFBRWhCLE1BQU0sRUFBTkE7b0JBQU8sQ0FBQyxDQUFDO29CQUMxRSxJQUFJc0IsWUFBWSxFQUFFO3NCQUFBLElBQUFFLG1CQUFBLEVBQUFDLG9CQUFBO3NCQUNkcEMsUUFBUSxDQUFDVyxNQUFNLENBQUM3QyxFQUFFLENBQUMsR0FBRzNnQixNQUFNLENBQUNrbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFckMsUUFBUSxDQUFDVyxNQUFNLENBQUM3QyxFQUFFLENBQUMsRUFBRTt3QkFDekR3RSxPQUFPLEVBQUVMLFlBQVksQ0FBQ0ssT0FBTyxNQUFBSCxtQkFBQSxHQUFJbkMsUUFBUSxDQUFDVyxNQUFNLENBQUM3QyxFQUFFLENBQUMscUJBQW5CcUUsbUJBQUEsQ0FBcUJHLE9BQU87d0JBQzdEQyxhQUFhLEVBQUVwbEIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQUQsb0JBQUEsR0FBRXBDLFFBQVEsQ0FBQ1csTUFBTSxDQUFDN0MsRUFBRSxDQUFDLHFCQUFuQnNFLG9CQUFBLENBQXFCRyxhQUFhLEVBQUVOLFlBQVksQ0FBQ00sYUFBYTtzQkFDbkcsQ0FBQyxDQUFDO29CQUNOOztvQkFFQTtvQkFDQSxJQUFNQyxvQkFBb0IsR0FBRy9aLE1BQUksQ0FBQ2dhLDhCQUE4QixDQUFDO3NCQUFFZCxXQUFXLEVBQVhBLFdBQVc7c0JBQUVoQixNQUFNLEVBQU5BO29CQUFPLENBQUMsQ0FBQztvQkFDekYsSUFBSVYsZUFBZSxFQUFFO3NCQUNqQkEsZUFBZSxDQUFDVSxNQUFNLENBQUM3QyxFQUFFLENBQUMsR0FBRzNnQixNQUFNLENBQUNrbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFcEMsZUFBZSxDQUFDVSxNQUFNLENBQUM3QyxFQUFFLENBQUMsRUFBRTBFLG9CQUFvQixDQUFDO29CQUNwRzs7b0JBR0E7b0JBQ0EsSUFBTUUsT0FBTyxHQUFHamEsTUFBSSxDQUFDa2Esc0JBQXNCLENBQUM7c0JBQUVoQixXQUFXLEVBQVhBLFdBQVc7c0JBQUVoQixNQUFNLEVBQU5BO29CQUFPLENBQUMsQ0FBQztvQkFDcEUsSUFBSStCLE9BQU8sRUFBRTtzQkFDVHhDLGFBQWEsQ0FBQ1MsTUFBTSxDQUFDN0MsRUFBRSxDQUFDLEdBQUc0RSxPQUFPO29CQUN0Qzs7b0JBRUE7b0JBQ0EsSUFBTUUsYUFBYSxHQUFHbmEsTUFBSSxDQUFDb2EsdUJBQXVCLENBQUM7c0JBQUVsQixXQUFXLEVBQVhBLFdBQVc7c0JBQUVoQixNQUFNLEVBQU5BO29CQUFPLENBQUMsQ0FBQztvQkFDM0V4akIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQ3BJLFNBQVMsR0FBQStILGNBQUEsT0FBQUEsY0FBQSxDQUNsQnJCLE1BQU0sQ0FBQzdDLEVBQUUsSUFBQTNnQixNQUFBLENBQUFrbEIsTUFBQSxLQUNIcEksU0FBUyxDQUFDMEcsTUFBTSxDQUFDN0MsRUFBRSxDQUFDLEVBQ3BCOEUsYUFBYSxHQUFBWixjQUFBLENBRXZCLENBQUM7a0JBQ047Z0JBQ0osQ0FBQyxDQUFDO2NBQ047Y0FFQSxJQUFJLENBQUNwQixVQUFVLEVBQUU7Z0JBQ2IsSUFBSWYscUJBQXFCLENBQUMvaEIsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDNmhCLGVBQWUsRUFBRTtrQkFDeEQ7a0JBQ0EsSUFBSWtCLFNBQVMsRUFBRTtvQkFDWDtvQkFDQWpCLGdCQUFnQixHQUFHaUIsU0FBUztvQkFDNUJoQixxQkFBcUIsR0FBR2lCLGNBQWM7b0JBQ3RDclksTUFBSSxDQUFDMkosT0FBTyxDQUFDQyxHQUFHLHlDQUF1Q3VOLGdCQUFnQixpQ0FBNEJDLHFCQUF1QixDQUFDO2tCQUMvSCxDQUFDLE1BQU07b0JBQ0g7b0JBQ0FGLGVBQWUsR0FBR2dCLE1BQU0sQ0FBQzdDLEVBQUU7b0JBQzNCclYsTUFBSSxDQUFDMkosT0FBTyxDQUFDQyxHQUFHLHdDQUFzQ3NOLGVBQWlCLENBQUM7a0JBQzVFO2dCQUNKO2NBQ0o7Y0FFQSxJQUFJaUIsVUFBVSxFQUFFO2dCQUNaZCxhQUFhLENBQUNuUCxJQUFJLENBQUNnUSxNQUFNLENBQUM3QyxFQUFFLENBQUM7Y0FDakM7WUFDSixDQUFDLENBQUM7WUFFRixJQUFJK0IscUJBQXFCLENBQUMvaEIsTUFBTSxHQUFHLENBQUMsSUFBSWdpQixhQUFhLENBQUNoaUIsTUFBTSxHQUFHLENBQUMsRUFBRTtjQUM5RDtjQUNBK2hCLHFCQUFxQixHQUFHQSxxQkFBcUIsQ0FBQ3hiLE1BQU0sQ0FBQyxVQUFBeVosRUFBRTtnQkFBQSxPQUFJLENBQUNnQyxhQUFhLENBQUNuWixRQUFRLENBQUNtWCxFQUFFLENBQUM7Y0FBQSxFQUFDO2NBQ3ZGLElBQUksQ0FBQzFMLE9BQU8sQ0FBQ0MsR0FBRyw4Q0FBNEN3TixxQkFBdUIsQ0FBQztZQUN4RjtZQUVBLElBQUksQ0FBQ3pOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9DQUFvQyxFQUFFc04sZUFBZSxDQUFDO1lBQ3ZFLElBQUksQ0FBQ3ZOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFDQUFxQyxFQUFFdU4sZ0JBQWdCLENBQUM7WUFDekUsSUFBSSxDQUFDeE4sT0FBTyxDQUFDQyxHQUFHLENBQUMsMENBQTBDLEVBQUV3TixxQkFBcUIsQ0FBQztZQUNuRixJQUFJLENBQUN6TixPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRTBOLGdCQUFnQixDQUFDOztZQUV6RTtZQUNBO1lBQ0E1aUIsTUFBTSxDQUFDa2xCLE1BQU0sQ0FBQyxJQUFJLENBQUNuSSxvQkFBb0IsRUFBRUQsU0FBUyxDQUFDOztZQUVuRDtBQUNSO0FBQ0E7QUFDQTtZQUNRO1lBQ01GLGFBQWEsR0FBRzhGLHFCQUFxQixDQUFDL2hCLE1BQU0sR0FBRyxDQUFDLEdBQUcraEIscUJBQXFCLEdBQ3ZFRixlQUFlLEdBQUcsQ0FBQ0EsZUFBZSxDQUFDLEdBQUcsRUFBRyxFQUVoRDtZQUNBO1lBQ0E7WUFDQSxJQUFJLElBQUksQ0FBQzNGLG9CQUFvQixDQUFDbGMsTUFBTSxLQUFLLENBQUMsSUFDbkMsQ0FBQ2lSLHVCQUF1QixDQUFDLElBQUksQ0FBQ2lMLG9CQUFvQixDQUFDN0ssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU0SyxhQUFhLENBQUMsRUFBRTtjQUNwRixJQUFJLENBQUNDLG9CQUFvQixDQUFDckosSUFBSSxDQUFDb0osYUFBYSxDQUFDO2NBQzdDLElBQUksQ0FBQzNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlDQUF5QyxFQUFFLElBQUksQ0FBQzJILG9CQUFvQixDQUFDO1lBQzFGOztZQUVBO1lBQ0EsSUFBSSxJQUFJLENBQUNBLG9CQUFvQixDQUFDbGMsTUFBTSxHQUFHLENBQUMsRUFBRTtjQUN0QzBnQixtQkFBbUIsQ0FBQ25aLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUMsTUFBTTtjQUNIbVosbUJBQW1CLENBQUNoYSxJQUFJLENBQUMsQ0FBQztZQUM5Qjs7WUFFQTtZQUNBLElBQUl1VixhQUFhLENBQUNqYyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2NBQzFCNGhCLHFCQUFxQixDQUFDcmEsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxNQUFNO2NBQ0hxYSxxQkFBcUIsQ0FBQ2xiLElBQUksQ0FBQyxDQUFDO1lBQ2hDOztZQUdBO1lBQ0EsSUFBSW9iLGdCQUFnQixFQUFFO2NBQ2xCSCxvQkFBb0IsQ0FBQy9VLElBQUksQ0FBQ2tWLGdCQUFnQixDQUFDO1lBQy9DLENBQUMsTUFBTSxJQUFJN0YsYUFBYSxDQUFDamMsTUFBTSxLQUFLLENBQUMsRUFBRTtjQUM3QnNpQixLQUFLLEdBQUdGLGFBQWEsQ0FBQ25HLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFBb0cscUJBQUEsR0FBSSxJQUFJLENBQUM1TSxjQUFjLENBQUN6UyxJQUFJLENBQUMsVUFBQWtNLEtBQUE7Z0JBQUEsSUFBRzhRLEVBQUUsR0FBQTlRLEtBQUEsQ0FBRjhRLEVBQUU7Z0JBQUEsT0FBT0EsRUFBRSxLQUFLL0QsYUFBYSxDQUFDLENBQUMsQ0FBQztjQUFBLEVBQUMscUJBQTdEb0cscUJBQUEsQ0FBK0R6QyxZQUFZO2NBQzVIK0Isb0JBQW9CLENBQUNqYyxJQUFJLENBQUM0YyxLQUFLLENBQUM7WUFDcEM7O1lBRUE7WUFDQSxJQUFJckcsYUFBYSxDQUFDamMsTUFBTSxLQUFLLENBQUMsRUFBRTtjQUM1QitiLHNCQUFzQixDQUFDL1ksSUFBSSxtQ0FBZ0NpWixhQUFhLENBQUMsQ0FBQyxDQUFDLG9CQUFnQixDQUFDLENBQUM3TyxLQUFLLENBQUMsQ0FBQyxDQUFDMUcsSUFBSSxDQUFDLENBQUM7WUFDL0csQ0FBQyxNQUFNO2NBQ0hxVixzQkFBc0IsQ0FBQy9ZLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDb0ssS0FBSyxDQUFDLENBQUMsQ0FBQzdGLElBQUksQ0FBQyxDQUFDO1lBQ3pGOztZQUVBO1lBQ0F3VSxzQkFBc0IsQ0FBQy9ZLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUNyRHFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FDakJkLE1BQU0sQ0FBQyxVQUFDeWUsQ0FBQyxFQUFFekcsRUFBRTtjQUFBLE9BQUssQ0FBQ3RDLGFBQWEsQ0FBQ3BULFFBQVEsQ0FBQy9FLE1BQU0sQ0FBQ25CLENBQUMsQ0FBQzRiLEVBQUUsQ0FBQyxDQUFDL2EsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUFBLEVBQUMsQ0FDdEZnRSxXQUFXLENBQUMsT0FBTyxDQUFDOztZQUV6QjtZQUNBeVUsYUFBYSxDQUFDaUYsT0FBTyxDQUFDLFVBQUFuQixRQUFRLEVBQUk7Y0FDOUIsSUFBTTZFLE9BQU8sR0FBR3hDLGFBQWEsQ0FBQ3JDLFFBQVEsQ0FBQztjQUN2QyxJQUFJNkUsT0FBTyxFQUFFO2dCQUNUN0ksc0JBQXNCLENBQUMvWSxJQUFJLG1DQUFnQytjLFFBQVEsb0JBQWdCLENBQUMsQ0FBQzNTLEtBQUssQ0FBQyxDQUFDLENBQUNSLElBQUksQ0FBQ2dZLE9BQU8sQ0FBQztjQUM5RztZQUNKLENBQUMsQ0FBQzs7WUFFRjtZQUNBLElBQUk5QyxnQkFBZ0IsRUFBRTtjQUNkUyxZQUFZLEdBQUcsRUFBRTtjQUVyQixJQUFJLENBQUNwVCxZQUFZLENBQUMrUixPQUFPLENBQUMsVUFBQTJDLFdBQVcsRUFBSTtnQkFDckMsSUFBSSxDQUFDdEIsWUFBWSxFQUFFO2tCQUNmQSxZQUFZLEdBQUc1WCxNQUFJLENBQUNzYSw0QkFBNEIsQ0FBQztvQkFBRXBCLFdBQVcsRUFBWEEsV0FBVztvQkFBRWQsU0FBUyxFQUFFakI7a0JBQWlCLENBQUMsQ0FBQztnQkFDbEc7Y0FDSixDQUFDLENBQUM7Y0FFRixJQUFJUyxZQUFZLEVBQUU7Z0JBQ1JDLFFBQVEsR0FBRzdmLENBQUMsQ0FBQyxJQUFJLENBQUNnUixxQkFBcUIsQ0FBQzlDLE9BQU8sQ0FBQyxhQUFhLEVBQUUwUixZQUFZLENBQUMsQ0FBQztnQkFDbkZaLG9CQUFvQixDQUFDaEIsTUFBTSxDQUFDNkIsUUFBUSxDQUFDO2NBQ3pDO1lBQ0o7O1lBRUE7WUFDQSxJQUFJdkcsYUFBYSxDQUFDamMsTUFBTSxHQUFHLENBQUMsRUFBRTtjQUMxQixJQUFJLENBQUNrbEIsa0JBQWtCLENBQUNuSixzQkFBc0IsRUFBRTRGLG9CQUFvQixFQUFFTyxRQUFRLEVBQUVDLGVBQWUsRUFBRWxHLGFBQWEsQ0FBQztZQUNuSDs7WUFFQTtZQUNBLElBQUlBLGFBQWEsQ0FBQ2pjLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDMUIsSUFBSSxDQUFDbWxCLDJCQUEyQixDQUFDbEosYUFBYSxFQUFFRixzQkFBc0IsRUFBRTBFLHVCQUF1QixDQUFDO1lBQ3BHOztZQUVBO1lBQUEsSUFDS2MsYUFBYTtjQUFBeFYsU0FBQSxDQUFBbk4sQ0FBQTtjQUFBO1lBQUE7WUFDZCxJQUFJcWQsYUFBYSxDQUFDamMsTUFBTSxHQUFHLENBQUMsRUFBRTtjQUMxQixJQUFJLENBQUNvbEIsZ0NBQWdDLENBQUNySixzQkFBc0IsRUFBRUMsdUJBQXVCLEVBQUVDLGFBQWEsQ0FBQztZQUN6RyxDQUFDLE1BQU07Y0FDSDtjQUNBLElBQUksQ0FBQ29KLFdBQVcsQ0FBQ3RKLHNCQUFzQixFQUFFMkYsc0JBQXNCLEVBQUUxRix1QkFBdUIsRUFBRTJGLG9CQUFvQixFQUFFeEIsaUJBQWlCLEVBQUV0SixRQUFRLEVBQUUsSUFBSSxDQUFDO1lBQ3RKO1lBQUM5SyxTQUFBLENBQUFuTixDQUFBO1lBQUEsT0FFSyxJQUFJLENBQUN5ZCxnQkFBZ0IsQ0FBQ04sc0JBQXNCLEVBQUVDLHVCQUF1QixFQUFFQyxhQUFhLEVBQUVwRixRQUFRLEVBQUVzRixTQUFTLENBQUM7VUFBQTtZQUdwSDtZQUNBLElBQUlGLGFBQWEsQ0FBQ2pjLE1BQU0sS0FBSyxDQUFDLEVBQUU7Y0FDNUIsSUFBSSxDQUFDcWxCLFdBQVcsQ0FBQ3RKLHNCQUFzQixFQUFFMkYsc0JBQXNCLEVBQUUxRix1QkFBdUIsRUFBRTJGLG9CQUFvQixFQUFFeEIsaUJBQWlCLEVBQUV0SixRQUFRLENBQUM7WUFDaEo7VUFBQztZQUFBLE9BQUE5SyxTQUFBLENBQUFsTSxDQUFBO1FBQUE7TUFBQSxHQUFBZ00sUUFBQTtJQUFBLENBQ0o7SUFBQSxTQTdUS2dRLG1CQUFtQkEsQ0FBQXlKLEdBQUE7TUFBQSxPQUFBOUQsb0JBQUEsQ0FBQTdmLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0lBQUEsT0FBbkJtYSxtQkFBbUI7RUFBQTtFQStUekI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUpJO0VBQUFoWixNQUFBLENBS0FzZSxzQkFBc0IsR0FBdEIsU0FBQUEsc0JBQXNCQSxDQUFBLEVBQUc7SUFBQSxJQUFBclUsTUFBQTtJQUNyQixJQUFNMkgsS0FBSyxHQUFHLElBQUksQ0FBQ2hLLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN0RCxJQUFNNlQsUUFBUSxHQUFHLElBQUlPLFFBQVEsQ0FBQzNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2QyxJQUFNOFEsT0FBTyxHQUFHLElBQUksQ0FBQzlQLGNBQWMsQ0FBQ2xQLE1BQU0sQ0FBQyxVQUFBNkksS0FBQTtNQUFBLElBQUd3VCxLQUFLLEdBQUF4VCxLQUFBLENBQUx3VCxLQUFLO01BQUEsT0FBT0EsS0FBSyxLQUFLLGdCQUFnQjtJQUFBLEVBQUMsQ0FBQzVmLElBQUksQ0FBQyxVQUFBNmYsTUFBTSxFQUFJO01BQ2pHLElBQUlBLE1BQU0sQ0FBQ1MsUUFBUSxFQUFFO1FBQ2pCLElBQU1qakIsS0FBSyxHQUFHd1csUUFBUSxDQUFDdFIsR0FBRyxnQkFBY3NkLE1BQU0sQ0FBQzdDLEVBQUUsTUFBRyxDQUFDO1FBQ3JELElBQUksQ0FBQzNmLEtBQUssRUFBRTtVQUNSeU0sTUFBSSxDQUFDd0gsT0FBTyxDQUFDQyxHQUFHLHlDQUFzQ3NPLE1BQU0sQ0FBQ2pELFlBQVksdUJBQW1CLENBQUM7VUFDN0YsT0FBTyxJQUFJO1FBQ2Y7TUFDSjtNQUNBLE9BQU8sS0FBSztJQUNoQixDQUFDLENBQUM7SUFFRixJQUFJMkYsT0FBTyxFQUFFO01BQ1QsSUFBTWhILEVBQUUsR0FBRzlKLEtBQUssQ0FBQ3pSLElBQUksd0JBQXFCdWlCLE9BQU8sQ0FBQ3ZGLEVBQUUsU0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzdEekIsRUFBRSxDQUFDMEMsY0FBYyxDQUFDLENBQUM7TUFDbkIsT0FBTyxLQUFLO0lBQ2hCO0lBRUEsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUFBcGUsTUFBQSxDQUVEK2QsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUNULElBQU1uTSxLQUFLLEdBQUcsSUFBSSxDQUFDaEssTUFBTSxDQUFDekgsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3RELElBQU04WSxpQkFBaUIsR0FBR3JILEtBQUssQ0FBQ3pSLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztJQUNwRSxJQUFNK1ksc0JBQXNCLEdBQUdELGlCQUFpQixDQUFDOVksSUFBSSxDQUFDLHNDQUFzQyxDQUFDO0lBRTdGLElBQU1pWixhQUFhLE1BQUF6SSxNQUFBLENBQ1osSUFBSSxDQUFDMEksb0JBQW9CLENBQUNzSixHQUFHLENBQUMsQ0FBQyxFQUMvQixJQUFJLENBQUN0SixvQkFBb0IsQ0FBQ3NKLEdBQUcsQ0FBQyxDQUFDLENBQ3JDOztJQUVEO0lBQ0E7SUFDQSxJQUFJdkosYUFBYSxFQUFFO01BQ2YsSUFBTXdKLE9BQU8sR0FBRzFKLHNCQUFzQixDQUFDL1ksSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQ3JFdUQsTUFBTSxDQUFDLFVBQUMrQixFQUFFLEVBQUVpVyxFQUFFO1FBQUEsT0FBS3RDLGFBQWEsQ0FBQ3BULFFBQVEsQ0FBQy9FLE1BQU0sQ0FBQ25CLENBQUMsQ0FBQzRiLEVBQUUsQ0FBQyxDQUFDbFosSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztNQUFBLEVBQUM7TUFFaEdvZ0IsT0FBTyxDQUFDemlCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUNsQzJYLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUN2RHBVLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDb08sR0FBRyxDQUFDLEVBQUUsQ0FBQztNQUUxQzhRLE9BQU8sQ0FBQ3ppQixJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FDdER1RCxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQzZQLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO01BRXpEcVAsT0FBTyxDQUFDemlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDb0MsVUFBVSxDQUFDLGtCQUFrQixDQUFDO01BRWxFLElBQUksQ0FBQ3dXLHlCQUF5QixHQUFHLEtBQUs7O01BRXRDO01BQ0EsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQztRQUFFMEYsYUFBYSxFQUFFO01BQUssQ0FBQyxDQUFDOztNQUVqRDtNQUNBekYsaUJBQWlCLENBQUNuVSxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3ZDO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5CSTtFQUFBOUUsTUFBQSxDQW9CQWtoQixzQkFBc0IsR0FBdEIsU0FBQUEsc0JBQXNCQSxDQUFBMVUsS0FBQSxFQUFvQztJQUFBLElBQUFHLE1BQUE7SUFBQSxJQUFqQ3FVLFdBQVcsR0FBQXhVLEtBQUEsQ0FBWHdVLFdBQVc7TUFBRWhOLFFBQVEsR0FBQXhILEtBQUEsQ0FBUndILFFBQVE7TUFBRWdNLE1BQU0sR0FBQXhULEtBQUEsQ0FBTndULE1BQU07SUFDbEQsSUFBSSxDQUFDdk8sT0FBTyxDQUFDQyxHQUFHLHlEQUF1RHNQLFdBQVcsQ0FBQ3BlLElBQUkscUJBQWdCb2QsTUFBTSxDQUFDakQsWUFBYyxDQUFDO0lBQzdILElBQUlrRCxVQUFVLEdBQUcsS0FBSztJQUN0QixJQUFNYixnQkFBZ0IsR0FBRyxFQUFFO0lBRTNCLElBQU1uaEIsQ0FBQyxHQUFHK2lCLFdBQVcsQ0FBQ3BlLElBQUksQ0FBQ2lnQixLQUFLLENBQUMsc0JBQXNCLENBQUM7SUFDeEQsSUFBSSxDQUFDNWtCLENBQUMsRUFBRTs7SUFFUjtBQUNSO0FBQ0E7SUFDUSxJQUFNNmtCLGFBQWEsR0FBRzdrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNpRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNnQyxHQUFHLENBQUMsVUFBQTZmLEVBQUU7TUFBQSxPQUFJQSxFQUFFLENBQUM3aEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFBQSxFQUFDLENBQUNnQyxHQUFHLENBQUMsVUFBQThmLEtBQUE7TUFBQSxJQUFFMWhCLEdBQUcsR0FBQTBoQixLQUFBO1FBQUV4bEIsS0FBSyxHQUFBd2xCLEtBQUE7TUFBQSxPQUFPO1FBQ3JGcGdCLElBQUksRUFBRXRCLEdBQUcsQ0FBQzJoQixJQUFJLENBQUMsQ0FBQztRQUNoQnpsQixLQUFLLEVBQUVBLEtBQUssR0FBR0EsS0FBSyxDQUFDeWxCLElBQUksQ0FBQyxDQUFDLEdBQUd6TztNQUNsQyxDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDL0MsT0FBTyxDQUFDQyxHQUFHLHNDQUFvQ29SLGFBQWEsQ0FBQzVmLEdBQUcsQ0FBQyxVQUFBZ2dCLEtBQUE7TUFBQSxJQUFHdGdCLElBQUksR0FBQXNnQixLQUFBLENBQUp0Z0IsSUFBSTtRQUFFcEYsS0FBSyxHQUFBMGxCLEtBQUEsQ0FBTDFsQixLQUFLO01BQUEsT0FBUUEsS0FBSyxHQUFNb0YsSUFBSSxVQUFLcEYsS0FBSyxHQUFLb0YsSUFBSTtJQUFBLENBQUMsQ0FBQyxDQUFDK1QsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFDOztJQUU5STtBQUNSO0FBQ0E7SUFDUSxJQUFNd00sV0FBVyxHQUFHbkMsV0FBVyxDQUFDeGpCLEtBQUssQ0FBQzBELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ2dDLEdBQUcsQ0FBQyxVQUFBNmYsRUFBRTtNQUFBLE9BQUlBLEVBQUUsQ0FBQzdoQixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FBQ2dDLEdBQUcsQ0FBQyxVQUFBa2dCLEtBQUE7TUFBQSxJQUFFOWhCLEdBQUcsR0FBQThoQixLQUFBO1FBQUU1bEIsS0FBSyxHQUFBNGxCLEtBQUE7TUFBQSxPQUFPO1FBQ2hHeGdCLElBQUksRUFBRXRCLEdBQUcsQ0FBQzJoQixJQUFJLENBQUMsQ0FBQztRQUNoQnpsQixLQUFLLEVBQUVBLEtBQUssR0FBR0EsS0FBSyxDQUFDeWxCLElBQUksQ0FBQyxDQUFDLEdBQUd6TztNQUNsQyxDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDL0MsT0FBTyxDQUFDQyxHQUFHLG9DQUFrQ3lSLFdBQVcsQ0FBQ2pnQixHQUFHLENBQUMsVUFBQW1nQixLQUFBO01BQUEsSUFBR3pnQixJQUFJLEdBQUF5Z0IsS0FBQSxDQUFKemdCLElBQUk7UUFBRXBGLEtBQUssR0FBQTZsQixLQUFBLENBQUw3bEIsS0FBSztNQUFBLE9BQVFBLEtBQUssR0FBTW9GLElBQUksVUFBS3BGLEtBQUssR0FBS29GLElBQUk7SUFBQSxDQUFDLENBQUMsQ0FBQytULElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQzs7SUFFMUk7QUFDUjtBQUNBO0FBQ0E7SUFDUSxJQUFJc0ssV0FBVyxHQUFHLEtBQUs7O0lBRXZCO0lBQ0E2QixhQUFhLENBQUN6RSxPQUFPLENBQUMsVUFBQWlGLE1BQUEsRUFBcUI7TUFBQSxJQUFsQjFnQixJQUFJLEdBQUEwZ0IsTUFBQSxDQUFKMWdCLElBQUk7UUFBRXBGLEtBQUssR0FBQThsQixNQUFBLENBQUw5bEIsS0FBSztNQUNoQyxJQUFBK2xCLHFCQUFBLEdBQTRCNVcsTUFBSSxDQUFDK1AsZUFBZSxDQUFDOVosSUFBSSxFQUFFcEYsS0FBSyxDQUFDO1FBQXREMGYsUUFBUSxHQUFBcUcscUJBQUE7UUFBRW5HLE9BQU8sR0FBQW1HLHFCQUFBO01BQ3hCLElBQU16QyxTQUFTLEdBQUc3ZixNQUFNLENBQUMrUyxRQUFRLENBQUN3UCxNQUFNLGdCQUFjdEcsUUFBUSxNQUFHLENBQUMsQ0FBQzFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BRWhGLElBQUlzUyxTQUFTLEtBQUsxRCxPQUFPLEVBQUU7UUFDdkI2RCxXQUFXLEdBQUcsSUFBSTtNQUN0QjtJQUNKLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ3hQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxFQUFFdVAsV0FBVyxDQUFDO0lBRS9ELElBQUlBLFdBQVcsRUFBRTtNQUNiO01BQ0FrQyxXQUFXLENBQUM5RSxPQUFPLENBQUMsVUFBQW9GLE1BQUEsRUFBcUI7UUFBQSxJQUFsQjdnQixJQUFJLEdBQUE2Z0IsTUFBQSxDQUFKN2dCLElBQUk7VUFBRXBGLEtBQUssR0FBQWltQixNQUFBLENBQUxqbUIsS0FBSztRQUM5QixJQUFJMFEsaUJBQWlCLENBQUM4UixNQUFNLENBQUNqRCxZQUFZLEVBQUVuYSxJQUFJLENBQUMsRUFBRTtVQUM5QyxJQUFJLENBQUNwRixLQUFLLEVBQUU7WUFDUjtZQUNBeWlCLFVBQVUsR0FBRyxJQUFJO1lBQ2pCdFQsTUFBSSxDQUFDOEUsT0FBTyxDQUFDQyxHQUFHLENBQUMsK0JBQStCLEVBQUV1TyxVQUFVLENBQUM7VUFDakUsQ0FBQyxNQUFNLElBQUlELE1BQU0sQ0FBQ2hELE1BQU0sRUFBRTtZQUN0QjtZQUNBZ0QsTUFBTSxDQUFDaEQsTUFBTSxDQUFDcUIsT0FBTyxDQUFDLFVBQUFxRixNQUFBLEVBQW1CO2NBQUEsSUFBaEJ6RyxLQUFLLEdBQUF5RyxNQUFBLENBQUx6RyxLQUFLO2dCQUFFRSxFQUFFLEdBQUF1RyxNQUFBLENBQUZ2RyxFQUFFO2NBQzlCLElBQUlqUCxpQkFBaUIsQ0FBQytPLEtBQUssRUFBRXpmLEtBQUssQ0FBQyxFQUFFO2dCQUNqQyxJQUFNbW1CLGdCQUFnQixHQUFHO2tCQUNyQnpHLFFBQVEsRUFBRThDLE1BQU0sQ0FBQzdDLEVBQUU7a0JBQ25CQyxPQUFPLEVBQUVEO2dCQUNiLENBQUM7Z0JBQ0RpQyxnQkFBZ0IsQ0FBQ3BQLElBQUksQ0FBQzJULGdCQUFnQixDQUFDO2dCQUN2Q2hYLE1BQUksQ0FBQzhFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9DQUFvQyxFQUFFaVMsZ0JBQWdCLENBQUM7Y0FDNUU7WUFDSixDQUFDLENBQUM7VUFDTjtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ047SUFFQSxJQUFJMUQsVUFBVSxJQUFJYixnQkFBZ0IsQ0FBQ2ppQixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzNDLE9BQU87UUFBRThpQixVQUFVLEVBQVZBLFVBQVU7UUFBRWIsZ0JBQWdCLEVBQWhCQTtNQUFpQixDQUFDO0lBQzNDO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FaSTtFQUFBcGYsTUFBQSxDQWFBb2hCLHFCQUFxQixHQUFyQixTQUFBQSxxQkFBcUJBLENBQUF3QyxNQUFBLEVBQTBCO0lBQUEsSUFBQUMsTUFBQTtJQUFBLElBQXZCN0MsV0FBVyxHQUFBNEMsTUFBQSxDQUFYNUMsV0FBVztNQUFFaEIsTUFBTSxHQUFBNEQsTUFBQSxDQUFONUQsTUFBTTtJQUN2QyxJQUFNL2hCLENBQUMsR0FBRytpQixXQUFXLENBQUNwZSxJQUFJLENBQUNpZ0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDO0lBQ3RELElBQUk1a0IsQ0FBQyxFQUFFO01BQ0gsSUFBTWlpQixTQUFTLEdBQUdqaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDZ2xCLElBQUksQ0FBQyxDQUFDO01BQzdCLElBQU05QyxjQUFjLEdBQUdhLFdBQVcsQ0FBQ3hqQixLQUFLLENBQUMwRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNnQyxHQUFHLENBQUMsVUFBQTZLLENBQUM7UUFBQSxPQUFJQSxDQUFDLENBQUNrVixJQUFJLENBQUMsQ0FBQztNQUFBLEVBQUMsQ0FBQztNQUFBLENBQ2xFL2YsR0FBRyxDQUFDLFVBQUF5WixVQUFVO1FBQUEsSUFBQW1ILHFCQUFBO1FBQUEsUUFBQUEscUJBQUEsR0FBSUQsTUFBSSxDQUFDalIsY0FBYyxDQUFDelMsSUFBSSxDQUFDLFVBQUE0akIsTUFBQTtVQUFBLElBQUdoSCxZQUFZLEdBQUFnSCxNQUFBLENBQVpoSCxZQUFZO1VBQUEsT0FBTzdPLGlCQUFpQixDQUFDNk8sWUFBWSxFQUFFSixVQUFVLENBQUM7UUFBQSxFQUFDLHFCQUEzRm1ILHFCQUFBLENBQTZGM0csRUFBRTtNQUFBLEVBQUMsQ0FDbEh6WixNQUFNLENBQUMsVUFBQXlaLEVBQUU7UUFBQSxPQUFJQSxFQUFFO01BQUEsRUFBQztNQUVyQixJQUFJZ0QsY0FBYyxDQUFDbmEsUUFBUSxDQUFDZ2EsTUFBTSxDQUFDN0MsRUFBRSxDQUFDLEVBQUU7UUFDcEM7UUFDQSxJQUFJLENBQUMxTCxPQUFPLENBQUNDLEdBQUcsa0NBQWdDd08sU0FBUywwQkFBcUJDLGNBQWdCLENBQUM7UUFDL0YsT0FBTztVQUFFRCxTQUFTLEVBQVRBLFNBQVM7VUFBRUMsY0FBYyxFQUFkQTtRQUFlLENBQUM7TUFDeEM7SUFDSjtFQUNKOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FoQkk7RUFBQW5nQixNQUFBLENBaUJBdWhCLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUF5QyxNQUFBLEVBQTBCO0lBQUEsSUFBQUMsTUFBQTtJQUFBLElBQXZCakQsV0FBVyxHQUFBZ0QsTUFBQSxDQUFYaEQsV0FBVztNQUFFaEIsTUFBTSxHQUFBZ0UsTUFBQSxDQUFOaEUsTUFBTTtJQUN6QyxJQUFNL2hCLENBQUMsR0FBRytpQixXQUFXLENBQUNwZSxJQUFJLENBQUNpZ0IsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0lBQ3hELElBQUk1a0IsQ0FBQyxFQUFFO01BQ0gsSUFBQWltQixjQUFBLEdBQXNCam1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2lELEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUNnQyxHQUFHLENBQUMsVUFBQTZLLENBQUM7VUFBQSxPQUFJQSxDQUFDLENBQUNrVixJQUFJLENBQUMsQ0FBQztRQUFBLEVBQUM7UUFBcERyZ0IsSUFBSSxHQUFBc2hCLGNBQUE7UUFBRTFtQixLQUFLLEdBQUEwbUIsY0FBQTtNQUNsQixJQUFNdkMsT0FBTyxHQUFHWCxXQUFXLENBQUN4akIsS0FBSzs7TUFFakM7TUFDQSxJQUFJLENBQUNvRixJQUFJLElBQUksQ0FBQ3NMLGlCQUFpQixDQUFDOFIsTUFBTSxDQUFDakQsWUFBWSxFQUFFbmEsSUFBSSxDQUFDLEVBQUU7TUFFNUQsSUFBSSxDQUFDcEYsS0FBSyxFQUFFO1FBQ1I7UUFDQSxJQUFJLENBQUNpVSxPQUFPLENBQUNDLEdBQUcsNENBQXlDOU8sSUFBSSxtQkFBVStlLE9BQU8sV0FBSyxDQUFDO1FBQ3BGLE9BQU87VUFBRUEsT0FBTyxFQUFQQTtRQUFRLENBQUM7TUFDdEI7TUFFQSxJQUFNQyxhQUFhLEdBQUcsQ0FBQyxDQUFDOztNQUV4QjtNQUNBNUIsTUFBTSxDQUFDaEQsTUFBTSxDQUFDcUIsT0FBTyxDQUFDLFVBQUE4RixNQUFBLEVBQW1CO1FBQUEsSUFBaEJoSCxFQUFFLEdBQUFnSCxNQUFBLENBQUZoSCxFQUFFO1VBQUVGLEtBQUssR0FBQWtILE1BQUEsQ0FBTGxILEtBQUs7UUFDOUIsSUFBSS9PLGlCQUFpQixDQUFDK08sS0FBSyxFQUFFemYsS0FBSyxDQUFDLEVBQUU7VUFDakN5bUIsTUFBSSxDQUFDeFMsT0FBTyxDQUFDQyxHQUFHLDRDQUF5QzlPLElBQUksV0FBTXBGLEtBQUssbUJBQVVta0IsT0FBTyxXQUFLLENBQUM7VUFDL0ZDLGFBQWEsQ0FBQ3pFLEVBQUUsQ0FBQyxHQUFHd0UsT0FBTztRQUMvQjtNQUNKLENBQUMsQ0FBQztNQUVGLE9BQU87UUFBRUMsYUFBYSxFQUFiQTtNQUFjLENBQUM7SUFDNUI7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVkk7RUFBQTVoQixNQUFBLENBV0FvaUIsNEJBQTRCLEdBQTVCLFNBQUFBLDRCQUE0QkEsQ0FBQWdDLE1BQUEsRUFBNkI7SUFBQSxJQUExQnBELFdBQVcsR0FBQW9ELE1BQUEsQ0FBWHBELFdBQVc7TUFBRWQsU0FBUyxHQUFBa0UsTUFBQSxDQUFUbEUsU0FBUztJQUNqRCxJQUFNamlCLENBQUMsR0FBRytpQixXQUFXLENBQUNwZSxJQUFJLENBQUNpZ0IsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0lBQ3hELElBQUk1a0IsQ0FBQyxFQUFFO01BQ0gsSUFBTTJFLElBQUksR0FBRzNFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2dsQixJQUFJLENBQUMsQ0FBQztNQUN4QixJQUFNdEIsT0FBTyxHQUFHWCxXQUFXLENBQUN4akIsS0FBSzs7TUFFakM7TUFDQSxJQUFJLENBQUNvRixJQUFJLElBQUksQ0FBQ3NMLGlCQUFpQixDQUFDZ1MsU0FBUyxFQUFFdGQsSUFBSSxDQUFDLEVBQUU7TUFFbEQsSUFBSSxDQUFDNk8sT0FBTyxDQUFDQyxHQUFHLDJDQUF3QzlPLElBQUksbUJBQVUrZSxPQUFPLFdBQUssQ0FBQztNQUNuRixPQUFPQSxPQUFPO0lBQ2xCO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBakJJO0VBQUEzaEIsTUFBQSxDQWtCQThoQiw4QkFBOEIsR0FBOUIsU0FBQUEsOEJBQThCQSxDQUFBdUMsTUFBQSxFQUEwQjtJQUFBLElBQUFDLE1BQUE7SUFBQSxJQUF2QnRELFdBQVcsR0FBQXFELE1BQUEsQ0FBWHJELFdBQVc7TUFBRWhCLE1BQU0sR0FBQXFFLE1BQUEsQ0FBTnJFLE1BQU07SUFDaEQsSUFBTS9oQixDQUFDLEdBQUcraUIsV0FBVyxDQUFDcGUsSUFBSSxDQUFDaWdCLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztJQUNoRSxJQUFJNWtCLENBQUMsRUFBRTtNQUNILElBQUFzbUIsZUFBQSxHQUFzQnRtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNpRCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDZ0MsR0FBRyxDQUFDLFVBQUE2SyxDQUFDO1VBQUEsT0FBSUEsQ0FBQyxDQUFDa1YsSUFBSSxDQUFDLENBQUM7UUFBQSxFQUFDO1FBQXBEcmdCLElBQUksR0FBQTJoQixlQUFBO1FBQUUvbUIsS0FBSyxHQUFBK21CLGVBQUE7TUFDbEIsSUFBTUMsT0FBTyxHQUFHeEQsV0FBVyxDQUFDeGpCLEtBQUs7O01BRWpDO01BQ0EsSUFBSSxDQUFDb0YsSUFBSSxJQUFJLENBQUNwRixLQUFLLElBQUksQ0FBQzBRLGlCQUFpQixDQUFDOFIsTUFBTSxDQUFDakQsWUFBWSxFQUFFbmEsSUFBSSxDQUFDLEVBQUU7TUFFdEUsSUFBTWlmLG9CQUFvQixHQUFHLENBQUMsQ0FBQztNQUUvQjdCLE1BQU0sQ0FBQ2hELE1BQU0sQ0FBQ3FCLE9BQU8sQ0FBQyxVQUFBb0csTUFBQSxFQUFtQjtRQUFBLElBQWhCdEgsRUFBRSxHQUFBc0gsTUFBQSxDQUFGdEgsRUFBRTtVQUFFRixLQUFLLEdBQUF3SCxNQUFBLENBQUx4SCxLQUFLO1FBQzlCLElBQUkvTyxpQkFBaUIsQ0FBQytPLEtBQUssRUFBRXpmLEtBQUssQ0FBQyxFQUFFO1VBQ2pDOG1CLE1BQUksQ0FBQzdTLE9BQU8sQ0FBQ0MsR0FBRyxvREFBaUQ5TyxJQUFJLFdBQU1wRixLQUFLLG1CQUFVZ25CLE9BQU8sV0FBSyxDQUFDO1VBQ3ZHM0Msb0JBQW9CLENBQUMxRSxFQUFFLENBQUMsR0FBR3FILE9BQU87UUFDdEM7TUFDSixDQUFDLENBQUM7TUFFRixPQUFPM0Msb0JBQW9CO0lBQy9CO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWEk7RUFBQTdoQixNQUFBLENBWUFnaUIsc0JBQXNCLEdBQXRCLFNBQUFBLHNCQUFzQkEsQ0FBQTBDLE1BQUEsRUFBMEI7SUFBQSxJQUF2QjFELFdBQVcsR0FBQTBELE1BQUEsQ0FBWDFELFdBQVc7TUFBRWhCLE1BQU0sR0FBQTBFLE1BQUEsQ0FBTjFFLE1BQU07SUFDeEMsSUFBTS9oQixDQUFDLEdBQUcraUIsV0FBVyxDQUFDcGUsSUFBSSxDQUFDaWdCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztJQUN2RCxJQUFJNWtCLENBQUMsRUFBRTtNQUNILElBQU0yRSxJQUFJLEdBQUczRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNnbEIsSUFBSSxDQUFDLENBQUM7TUFDeEIsSUFBTWxCLE9BQU8sR0FBRzNVLE1BQU0sQ0FBQzRULFdBQVcsQ0FBQ3hqQixLQUFLLENBQUMsQ0FBQ3lsQixJQUFJLENBQUMsQ0FBQzs7TUFFaEQ7TUFDQSxJQUFJLENBQUNyZ0IsSUFBSSxJQUFJLENBQUNzTCxpQkFBaUIsQ0FBQzhSLE1BQU0sQ0FBQ2pELFlBQVksRUFBRW5hLElBQUksQ0FBQyxFQUFFO01BRTVELElBQUksQ0FBQzZPLE9BQU8sQ0FBQ0MsR0FBRyx1Q0FBb0M5TyxJQUFJLGdCQUFTbWYsT0FBTyxPQUFHLENBQUM7TUFDNUUsT0FBT0EsT0FBTztJQUNsQjtFQUNKOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbEJJO0VBQUEvaEIsTUFBQSxDQW1CQWtpQix1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFBeUMsTUFBQSxFQUEwQjtJQUFBLElBQXZCM0QsV0FBVyxHQUFBMkQsTUFBQSxDQUFYM0QsV0FBVztNQUFFaEIsTUFBTSxHQUFBMkUsTUFBQSxDQUFOM0UsTUFBTTtJQUN6QyxJQUFNaUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN4QixJQUFNaGtCLENBQUMsR0FBRytpQixXQUFXLENBQUNwZSxJQUFJLENBQUNpZ0IsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0lBQ3hELElBQUk1a0IsQ0FBQyxFQUFFO01BQ0gsSUFBTThiLEtBQUssR0FBRzlZLE1BQU0sQ0FBQ2hELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ2dsQixJQUFJLENBQUMsQ0FBQyxDQUFDOztNQUVqQztNQUNBakMsV0FBVyxDQUFDeGpCLEtBQUssQ0FBQzBELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ21kLE9BQU8sQ0FBQyxVQUFBMEUsRUFBRSxFQUFJO1FBQ3ZDO1FBQ0EsSUFBQTZCLGFBQUEsR0FBaUM3QixFQUFFLENBQUM3aEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQ2dDLEdBQUcsQ0FBQyxVQUFBNkssQ0FBQztZQUFBLE9BQUlBLENBQUMsQ0FBQ2tWLElBQUksQ0FBQyxDQUFDO1VBQUEsRUFBQztVQUE3RHRHLFVBQVUsR0FBQWlJLGFBQUE7VUFBRUMsVUFBVSxHQUFBRCxhQUFBO1FBRTdCLElBQUkxVyxpQkFBaUIsQ0FBQzhSLE1BQU0sQ0FBQ2pELFlBQVksRUFBRUosVUFBVSxDQUFDLEVBQUU7VUFBQSxJQUFBbUksbUJBQUE7VUFDcEQ7O1VBRUE7VUFDQSxJQUFNMUgsT0FBTyxJQUFBMEgsbUJBQUEsR0FBRzlFLE1BQU0sQ0FBQ2hELE1BQU0sQ0FBQzdjLElBQUksQ0FBQyxVQUFBNGtCLE1BQUE7WUFBQSxJQUFHOUgsS0FBSyxHQUFBOEgsTUFBQSxDQUFMOUgsS0FBSztZQUFBLE9BQU8vTyxpQkFBaUIsQ0FBQytPLEtBQUssRUFBRTRILFVBQVUsQ0FBQztVQUFBLEVBQUMscUJBQXZFQyxtQkFBQSxDQUF5RTNILEVBQUU7VUFDM0YsSUFBSUMsT0FBTyxFQUFFO1lBQ1Q7WUFDQTZFLGFBQWEsQ0FBQzdFLE9BQU8sQ0FBQyxHQUFHckQsS0FBSztVQUNsQztRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ047SUFDQSxPQUFPa0ksYUFBYTtFQUN4Qjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaEJJO0VBQUFqaUIsTUFBQSxDQWlCTWdsQixhQUFhO0VBQUE7RUFBQTtJQUFBLElBQUFDLGNBQUEsR0FBQXJtQixpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBbkIsU0FBQXdNLFNBQUE7TUFBQSxJQUFBVSxJQUFBO01BQUEsT0FBQXBOLFlBQUEsR0FBQUMsQ0FBQSxXQUFBcU4sU0FBQTtRQUFBLGtCQUFBQSxTQUFBLENBQUF0UCxDQUFBO1VBQUE7WUFBQSxLQUNROFMsY0FBYztjQUFBeEQsU0FBQSxDQUFBdFAsQ0FBQTtjQUFBO1lBQUE7WUFBQSxPQUFBc1AsU0FBQSxDQUFBck8sQ0FBQSxJQUFTNlIsY0FBYztVQUFBO1lBQUF4RCxTQUFBLENBQUF0UCxDQUFBO1lBQUEsT0FFdEIrRCxDQUFDLENBQUN3TCxJQUFJLENBQUM7Y0FDdEI3QixHQUFHLEVBQUUsVUFBVTtjQUNmOEIsTUFBTSxFQUFFLE1BQU07Y0FDZHFLLFdBQVcsRUFBRSxrQkFBa0I7Y0FDL0JoSyxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbENDLGFBQWEsY0FBWSxJQUFJLENBQUNnSixPQUFPLENBQUM1TTtjQUMxQyxDQUFDO2NBQ0Q2RCxTQUFTLEVBQUU7Z0JBQ1BDLGVBQWUsRUFBRTtjQUNyQixDQUFDO2NBQ0RwTCxJQUFJLEVBQUU2SyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFDakJDLEtBQUsscXRDQStCSjtnQkFDREMsU0FBUyxFQUFFO2tCQUNQdVosWUFBWSxFQUFFLElBQUksQ0FBQ3JRLE9BQU8sQ0FBQ3NRLG9CQUFvQjtrQkFDL0NDLG1CQUFtQixFQUFFLElBQUksQ0FBQ3ZRLE9BQU8sQ0FBQ3dRO2dCQUN0QztjQUNKLENBQUM7WUFDTCxDQUFDLENBQUM7VUFBQTtZQWpESWxhLElBQUksR0FBQUUsU0FBQSxDQUFBdE8sQ0FBQTtZQW1EVjhSLGNBQWMsR0FBQXJTLE1BQUEsQ0FBQWtsQixNQUFBLEtBQ1B2VyxJQUFJLENBQUN4SyxJQUFJLENBQUNxTCxJQUFJLENBQUNzWixRQUFRO2NBQzFCdkosUUFBUSxFQUFFNVEsSUFBSSxDQUFDeEssSUFBSSxDQUFDcUwsSUFBSSxDQUFDK1A7WUFBUSxFQUNwQztZQUFDLE9BQUExUSxTQUFBLENBQUFyTyxDQUFBLElBRUs2UixjQUFjO1FBQUE7TUFBQSxHQUFBcEUsUUFBQTtJQUFBLENBQ3hCO0lBQUEsU0E1REt1YSxhQUFhQSxDQUFBO01BQUEsT0FBQUMsY0FBQSxDQUFBbm1CLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0lBQUEsT0FBYm1tQixhQUFhO0VBQUE7RUE4RG5CO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQTdCSTtFQUFBaGxCLE1BQUEsQ0E4Qk11bEIsaUJBQWlCO0VBQUE7RUFBQTtJQUFBLElBQUFDLGtCQUFBLEdBQUE1bUIsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQXZCLFNBQUF3bkIsU0FBd0JDLFdBQVcsRUFBRTFSLFFBQVE7TUFBQSxJQUFBMlIsT0FBQTtNQUFBLElBQUFDLHNCQUFBLEVBQUF6VyxRQUFBLEVBQUEwVyxxQkFBQSxFQUFBQyxJQUFBLEVBQUFDLFVBQUE7TUFBQSxPQUFBaG9CLFlBQUEsR0FBQUMsQ0FBQSxXQUFBZ29CLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBanFCLENBQUE7VUFBQTtZQUNuQzZwQixzQkFBc0IsR0FBRyxFQUFFO1lBRWpDNVIsUUFBUSxDQUFDOEwsT0FBTyxDQUFDLENBQUMsQ0FBQ3pCLE9BQU8sQ0FBQyxVQUFBNEgsTUFBQSxFQUFrQjtjQUFBLElBQWhCM2tCLEdBQUcsR0FBQTJrQixNQUFBO2dCQUFFem9CLEtBQUssR0FBQXlvQixNQUFBO2NBQ25DLElBQU1ob0IsQ0FBQyxHQUFHcUQsR0FBRyxDQUFDdWhCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztjQUMzQyxJQUFJNWtCLENBQUMsRUFBRTtnQkFDSCxJQUFNaW9CLGNBQWMsR0FBR2psQixNQUFNLENBQUNoRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLElBQU1rb0IsYUFBYSxHQUFHbGxCLE1BQU0sQ0FBQ3pELEtBQUssQ0FBQztnQkFFbkMsSUFBSTJvQixhQUFhLElBQUksQ0FBQ1QsV0FBVyxDQUFDdmxCLElBQUksQ0FBQyxVQUFBaW1CLE1BQUE7a0JBQUEsSUFBR2pKLEVBQUUsR0FBQWlKLE1BQUEsQ0FBRmpKLEVBQUU7a0JBQUEsT0FBT0EsRUFBRSxLQUFLK0ksY0FBYztnQkFBQSxFQUFDLEVBQUU7a0JBQ3ZFTixzQkFBc0IsQ0FBQzVWLElBQUksQ0FBQztvQkFBRWtXLGNBQWMsRUFBZEEsY0FBYztvQkFBRUMsYUFBYSxFQUFiQTtrQkFBYyxDQUFDLENBQUM7Z0JBQ2xFO2NBQ0o7WUFDSixDQUFDLENBQUM7WUFFSWhYLFFBQVEsR0FBRztZQUNiO1lBQ0E7Y0FBQSxPQUFNd1csT0FBSSxDQUFDVSxnQkFBZ0IsQ0FBQ1Qsc0JBQXNCLENBQUM7WUFBQSxFQUN0RDtZQUVERixXQUFXLENBQUNySCxPQUFPLENBQUMsVUFBQTJCLE1BQU0sRUFBSTtjQUMxQixJQUFNaEQsTUFBTSxHQUFHZ0QsTUFBTSxDQUFDaEQsTUFBTSxLQUFLZ0QsTUFBTSxDQUFDeGlCLEtBQUssR0FBRyxDQUFDO2dCQUFFMmYsRUFBRSxFQUFFNkMsTUFBTSxDQUFDeGlCO2NBQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2NBQzVFd2YsTUFBTSxDQUFDcUIsT0FBTyxDQUFDLFVBQUE3Z0IsS0FBSyxFQUFJO2dCQUNwQjtnQkFDQTJSLFFBQVEsQ0FBQ2EsSUFBSSxDQUFDO2tCQUFBLE9BQ1YyVixPQUFJLENBQUNVLGdCQUFnQixJQUFBMVYsTUFBQSxDQUNkaVYsc0JBQXNCLEdBQ3pCO29CQUNJTSxjQUFjLEVBQUVsRyxNQUFNLENBQUM3QyxFQUFFO29CQUN6QmdKLGFBQWEsRUFBRTNvQixLQUFLLENBQUMyZjtrQkFDekIsQ0FBQyxFQUNKLENBQUMsQ0FBQ3hlLElBQUksQ0FBQyxVQUFBc04sT0FBTztvQkFBQSxPQUFBelAsTUFBQSxDQUFBa2xCLE1BQUE7c0JBQ1h4RSxRQUFRLEVBQUU4QyxNQUFNLENBQUM3QyxFQUFFO3NCQUNuQkMsT0FBTyxFQUFFNWYsS0FBSyxDQUFDMmY7b0JBQUUsR0FDZGxSLE9BQU87a0JBQUEsQ0FDWixDQUFDO2dCQUFBLEVBQUM7Y0FDWixDQUFDLENBQUM7WUFDTixDQUFDLENBQUM7WUFBQytaLFNBQUEsQ0FBQWpxQixDQUFBO1lBQUEsT0FFaUMrUyx1QkFBdUIsQ0FBQ0ssUUFBUSxDQUFDO1VBQUE7WUFBQTBXLHFCQUFBLEdBQUFHLFNBQUEsQ0FBQWpwQixDQUFBO1lBQTlEK29CLElBQUksR0FBQUQscUJBQUE7WUFBS0UsVUFBVSxHQUFBTyxpQkFBQSxDQUFBVCxxQkFBQSxFQUFBclgsS0FBQTtZQUUxQnVYLFVBQVUsQ0FBQzFILE9BQU8sQ0FBQyxVQUFBa0ksU0FBUyxFQUFJO2NBQzVCLElBQUlBLFNBQVMsQ0FBQ0MsYUFBYSxFQUFFO2dCQUFBLElBQUFDLHFCQUFBLEVBQUFDLG1CQUFBLEVBQUFDLHNCQUFBLEVBQUFDLG9CQUFBO2dCQUN6QjtnQkFDQTtnQkFDQSxJQUFJQyxtQkFBbUIsR0FBRyxFQUFBSixxQkFBQSxHQUFBRixTQUFTLENBQUNDLGFBQWEscUJBQXZCQyxxQkFBQSxDQUF5QjFNLEtBQUssQ0FBQ3ZjLEtBQUssTUFBQWtwQixtQkFBQSxHQUFHWixJQUFJLENBQUNVLGFBQWEscUJBQWxCRSxtQkFBQSxDQUFvQjNNLEtBQUssQ0FBQ3ZjLEtBQUssS0FDekYsRUFBQW1wQixzQkFBQSxHQUFBSixTQUFTLENBQUNDLGFBQWEscUJBQXZCRyxzQkFBQSxDQUF5QkcsU0FBUyxDQUFDdHBCLEtBQUssTUFBQW9wQixvQkFBQSxHQUFHZCxJQUFJLENBQUNVLGFBQWEscUJBQWxCSSxvQkFBQSxDQUFvQkUsU0FBUyxDQUFDdHBCLEtBQUs7Z0JBQ2pGO2dCQUFBLEdBQ0csSUFBSTs7Z0JBRVg7Z0JBQ0EsSUFBSXFwQixtQkFBbUIsSUFBSU4sU0FBUyxDQUFDQyxhQUFhLENBQUN6TSxLQUFLLENBQUN2YyxLQUFLLEdBQUdzb0IsSUFBSSxDQUFDVSxhQUFhLENBQUN6TSxLQUFLLENBQUN2YyxLQUFLLEVBQUU7a0JBQzdGcXBCLG1CQUFtQixHQUFHLElBQUk7Z0JBQzlCOztnQkFFQTtnQkFDQU4sU0FBUyxDQUFDUSxxQkFBcUIsR0FBRztrQkFDOUJELFNBQVMsRUFBQXRxQixNQUFBLENBQUFrbEIsTUFBQSxLQUNGNkUsU0FBUyxDQUFDQyxhQUFhLENBQUNNLFNBQVM7b0JBQ3BDdHBCLEtBQUssRUFBRStvQixTQUFTLENBQUNDLGFBQWEsQ0FBQ00sU0FBUyxDQUFDdHBCLEtBQUssR0FBR3NvQixJQUFJLENBQUNVLGFBQWEsQ0FBQ00sU0FBUyxDQUFDdHBCO2tCQUFLLEVBQ3RGO2tCQUNEdWMsS0FBSyxFQUFBdmQsTUFBQSxDQUFBa2xCLE1BQUEsS0FDRTZFLFNBQVMsQ0FBQ0MsYUFBYSxDQUFDek0sS0FBSztvQkFDaEN2YyxLQUFLLEVBQUUrb0IsU0FBUyxDQUFDQyxhQUFhLENBQUN6TSxLQUFLLENBQUN2YyxLQUFLLEdBQUdzb0IsSUFBSSxDQUFDVSxhQUFhLENBQUN6TSxLQUFLLENBQUN2YztrQkFBSyxFQUM5RTtrQkFDRHdwQixpQkFBaUIsRUFBRUg7Z0JBQ3ZCLENBQUM7Y0FDTDtjQUVBLElBQUlOLFNBQVMsQ0FBQ1UsZ0JBQWdCLEVBQUU7Z0JBQUEsSUFBQUMsc0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsc0JBQUE7Z0JBQzVCO2dCQUNBO2dCQUNBLElBQUlDLHNCQUFzQixHQUFHLEVBQUFKLHNCQUFBLEdBQUFYLFNBQVMsQ0FBQ1UsZ0JBQWdCLHFCQUExQkMsc0JBQUEsQ0FBNEJuTixLQUFLLENBQUN2YyxLQUFLLE1BQUEycEIscUJBQUEsR0FBR3JCLElBQUksQ0FBQ21CLGdCQUFnQixxQkFBckJFLHFCQUFBLENBQXVCcE4sS0FBSyxDQUFDdmMsS0FBSyxLQUNsRyxFQUFBNHBCLHNCQUFBLEdBQUFiLFNBQVMsQ0FBQ1UsZ0JBQWdCLHFCQUExQkcsc0JBQUEsQ0FBNEJOLFNBQVMsQ0FBQ3RwQixLQUFLLE1BQUE2cEIsc0JBQUEsR0FBR3ZCLElBQUksQ0FBQ21CLGdCQUFnQixxQkFBckJJLHNCQUFBLENBQXVCUCxTQUFTLENBQUN0cEIsS0FBSztnQkFDdkY7Z0JBQUEsR0FDRyxJQUFJOztnQkFFWDtnQkFDQSxJQUFJOHBCLHNCQUFzQixJQUFJZixTQUFTLENBQUNVLGdCQUFnQixDQUFDbE4sS0FBSyxDQUFDdmMsS0FBSyxHQUFHc29CLElBQUksQ0FBQ21CLGdCQUFnQixDQUFDbE4sS0FBSyxDQUFDdmMsS0FBSyxFQUFFO2tCQUN0RzhwQixzQkFBc0IsR0FBRyxJQUFJO2dCQUNqQzs7Z0JBRUE7Z0JBQ0FmLFNBQVMsQ0FBQ2dCLHdCQUF3QixHQUFHO2tCQUNqQ1QsU0FBUyxFQUFBdHFCLE1BQUEsQ0FBQWtsQixNQUFBLEtBQ0Y2RSxTQUFTLENBQUNVLGdCQUFnQixDQUFDSCxTQUFTO29CQUN2Q3RwQixLQUFLLEVBQUUrb0IsU0FBUyxDQUFDVSxnQkFBZ0IsQ0FBQ0gsU0FBUyxDQUFDdHBCLEtBQUssR0FBR3NvQixJQUFJLENBQUNtQixnQkFBZ0IsQ0FBQ0gsU0FBUyxDQUFDdHBCO2tCQUFLLEVBQzVGO2tCQUNEdWMsS0FBSyxFQUFBdmQsTUFBQSxDQUFBa2xCLE1BQUEsS0FDRTZFLFNBQVMsQ0FBQ1UsZ0JBQWdCLENBQUNsTixLQUFLO29CQUNuQ3ZjLEtBQUssRUFBRStvQixTQUFTLENBQUNVLGdCQUFnQixDQUFDbE4sS0FBSyxDQUFDdmMsS0FBSyxHQUFHc29CLElBQUksQ0FBQ21CLGdCQUFnQixDQUFDbE4sS0FBSyxDQUFDdmM7a0JBQUssRUFDcEY7a0JBQ0R3cEIsaUJBQWlCLEVBQUVNO2dCQUN2QixDQUFDO2NBQ0w7WUFDSixDQUFDLENBQUM7WUFFRixJQUFJLENBQUM3VixPQUFPLENBQUNDLEdBQUcsQ0FBQyw4Q0FBOEMsRUFBRXFVLFVBQVUsQ0FBQztZQUFDLE9BQUFDLFNBQUEsQ0FBQWhwQixDQUFBLEtBQ3JFOG9CLElBQUksRUFBQW5WLE1BQUEsQ0FBS29WLFVBQVU7UUFBQTtNQUFBLEdBQUFOLFFBQUE7SUFBQSxDQUM5QjtJQUFBLFNBbkdLRixpQkFBaUJBLENBQUFpQyxHQUFBLEVBQUFDLEdBQUE7TUFBQSxPQUFBakMsa0JBQUEsQ0FBQTFtQixLQUFBLE9BQUFELFNBQUE7SUFBQTtJQUFBLE9BQWpCMG1CLGlCQUFpQjtFQUFBO0VBcUd2QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMSTtFQUFBdmxCLE1BQUEsQ0FNTXFtQixnQkFBZ0I7RUFBQTtFQUFBO0lBQUEsSUFBQXFCLGlCQUFBLEdBQUE5b0IsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQXRCLFNBQUEwcEIsU0FBdUJDLGNBQWM7TUFBQSxJQUFBQyxRQUFBLEVBQUExYyxJQUFBO01BQUEsT0FBQXBOLFlBQUEsR0FBQUMsQ0FBQSxXQUFBOHBCLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBL3JCLENBQUE7VUFBQTtZQUMzQjhyQixRQUFRLEdBQUdyYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ21jLGNBQWMsQ0FBQztZQUFBLElBRTFDLElBQUksQ0FBQ3BXLHFCQUFxQixDQUFDcVcsUUFBUSxDQUFDO2NBQUFDLFNBQUEsQ0FBQS9yQixDQUFBO2NBQUE7WUFBQTtZQUFBK3JCLFNBQUEsQ0FBQS9yQixDQUFBO1lBQUEsT0FDbEIrRCxDQUFDLENBQUN3TCxJQUFJLENBQUM7Y0FDdEI3QixHQUFHLEVBQUUsVUFBVTtjQUNmOEIsTUFBTSxFQUFFLE1BQU07Y0FDZHFLLFdBQVcsRUFBRSxrQkFBa0I7Y0FDL0JoSyxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbENDLGFBQWEsY0FBWSxJQUFJLENBQUNnSixPQUFPLENBQUM1TTtjQUMxQyxDQUFDO2NBQ0Q2RCxTQUFTLEVBQUU7Z0JBQ1BDLGVBQWUsRUFBRTtjQUNyQixDQUFDO2NBQ0RwTCxJQUFJLEVBQUU2SyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFDakJDLEtBQUssczJDQTRCSjtnQkFDREMsU0FBUyxFQUFFO2tCQUNQdVosWUFBWSxFQUFFLElBQUksQ0FBQ3JRLE9BQU8sQ0FBQ3NRLG9CQUFvQjtrQkFDL0NuZCxTQUFTLEVBQUUsSUFBSSxDQUFDQSxTQUFTO2tCQUN6QjRmLGNBQWMsRUFBZEE7Z0JBQ0o7Y0FDSixDQUFDO1lBQ0wsQ0FBQyxDQUFDO1VBQUE7WUEvQ0l6YyxJQUFJLEdBQUEyYyxTQUFBLENBQUEvcUIsQ0FBQTtZQWlEVixJQUFJLENBQUN5VSxxQkFBcUIsQ0FBQ3FXLFFBQVEsQ0FBQyxHQUFHMWMsSUFBSSxDQUFDeEssSUFBSSxDQUFDcUwsSUFBSSxDQUFDQyxPQUFPO1VBQUM7WUFBQSxPQUFBNmIsU0FBQSxDQUFBOXFCLENBQUEsSUFHM0QsSUFBSSxDQUFDd1UscUJBQXFCLENBQUNxVyxRQUFRLENBQUM7UUFBQTtNQUFBLEdBQUFGLFFBQUE7SUFBQSxDQUM5QztJQUFBLFNBekRLdEIsZ0JBQWdCQSxDQUFBMEIsR0FBQTtNQUFBLE9BQUFMLGlCQUFBLENBQUE1b0IsS0FBQSxPQUFBRCxTQUFBO0lBQUE7SUFBQSxPQUFoQnduQixnQkFBZ0I7RUFBQTtFQTJEdEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUkk7RUFBQXJtQixNQUFBLENBU0FxaUIsa0JBQWtCLEdBQWxCLFNBQUFBLGtCQUFrQkEsQ0FBQ25KLHNCQUFzQixFQUFFNEYsb0JBQW9CLEVBQUVPLFFBQVEsRUFBRUMsZUFBZSxFQUFFbEcsYUFBYSxFQUFFO0lBQUEsSUFBQTRPLE9BQUE7SUFDdkc7SUFDQXhyQixNQUFNLENBQUNzakIsT0FBTyxDQUFDVCxRQUFRLENBQUMsQ0FBQ2hCLE9BQU8sQ0FBQyxVQUFBNEosTUFBQSxFQUE0QztNQUFBLElBQTFDL0ssUUFBUSxHQUFBK0ssTUFBQTtRQUFBQyxPQUFBLEdBQUFELE1BQUE7UUFBSXRHLE9BQU8sR0FBQXVHLE9BQUEsQ0FBUHZHLE9BQU87UUFBRUMsYUFBYSxHQUFBc0csT0FBQSxDQUFidEcsYUFBYTtNQUNqRSxJQUFJLENBQUN4SSxhQUFhLENBQUNwVCxRQUFRLENBQUMvRSxNQUFNLENBQUNpYyxRQUFRLENBQUMsQ0FBQyxFQUFFO01BRS9DLElBQU0wRixPQUFPLEdBQUcxSixzQkFBc0IsQ0FBQy9ZLElBQUksbUNBQWdDK2MsUUFBUSxRQUFJLENBQUM7TUFFeEYsSUFBSXlFLE9BQU8sRUFBRTtRQUNULElBQU1oQyxRQUFRLEdBQUc3ZixDQUFDLENBQUNrb0IsT0FBSSxDQUFDbFgscUJBQXFCLENBQUM5QyxPQUFPLENBQUMsYUFBYSxFQUFFMlQsT0FBTyxDQUFDLENBQUMsQ0FDekVuZixJQUFJLENBQUMsc0NBQXNDLEVBQUUwYSxRQUFRLENBQUM7UUFFM0QwRixPQUFPLENBQUN6aUIsSUFBSSw4Q0FBMkMrYyxRQUFRLFFBQUksQ0FBQyxDQUFDaGIsTUFBTSxDQUFDLENBQUM7UUFFN0UsSUFBTWltQixNQUFNLEdBQUd2RixPQUFPLENBQUN6aUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDb0ssS0FBSyxDQUFDLENBQUM7UUFFNUMsSUFBSTRkLE1BQU0sQ0FBQ2hyQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ25CZ3JCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDekksUUFBUSxDQUFDO1FBQzFCLENBQUMsTUFBTTtVQUNIaUQsT0FBTyxDQUFDeUYsT0FBTyxDQUFDMUksUUFBUSxDQUFDO1FBQzdCO01BQ0o7TUFFQW5qQixNQUFNLENBQUNzakIsT0FBTyxDQUFDOEIsYUFBYSxDQUFDLENBQUN2RCxPQUFPLENBQUMsVUFBQWlLLE1BQUEsRUFBNkI7UUFBQSxJQUEzQmxMLE9BQU8sR0FBQWtMLE1BQUE7VUFBRUMsWUFBWSxHQUFBRCxNQUFBO1FBQ3pELElBQU1FLE1BQU0sR0FBRzVGLE9BQU8sQ0FBQ3ppQixJQUFJLHNDQUFtQ2lkLE9BQU8sUUFBSSxDQUFDO1FBQzFFLElBQU11QyxRQUFRLEdBQUc3ZixDQUFDLENBQUNrb0IsT0FBSSxDQUFDalgsMEJBQTBCLENBQUMvQyxPQUFPLENBQUMsYUFBYSxFQUFFdWEsWUFBWSxDQUFDLENBQUMsQ0FDbkYvbEIsSUFBSSxDQUFDLHNDQUFzQyxFQUFLMGEsUUFBUSxTQUFJRSxPQUFTLENBQUM7UUFFM0V3RixPQUFPLENBQUN6aUIsSUFBSSw4Q0FBMkMrYyxRQUFRLFNBQUlFLE9BQU8sUUFBSSxDQUFDLENBQUNsYixNQUFNLENBQUMsQ0FBQztRQUN4RnNtQixNQUFNLENBQUNKLEtBQUssQ0FBQ3pJLFFBQVEsQ0FBQztNQUMxQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7O0lBRUY7SUFDQTtJQUNBLElBQUl2RyxhQUFhLENBQUNqYyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQzVCLElBQU13aUIsUUFBUSxHQUFHekcsc0JBQXNCLENBQUMvWSxJQUFJLDhDQUEyQ2laLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBSSxDQUFDO01BQzVHMEYsb0JBQW9CLENBQUNoQixNQUFNLENBQUM2QixRQUFRLENBQUM7SUFDekM7O0lBRUE7SUFDQW5qQixNQUFNLENBQUNzakIsT0FBTyxDQUFDUixlQUFlLENBQUMsQ0FDMUI1YixNQUFNLENBQUMsVUFBQStrQixNQUFBO01BQUEsSUFBRXZMLFFBQVEsR0FBQXVMLE1BQUE7TUFBQSxPQUFNclAsYUFBYSxDQUFDcFQsUUFBUSxDQUFDL0UsTUFBTSxDQUFDaWMsUUFBUSxDQUFDLENBQUM7SUFBQSxFQUFDLENBQ2hFbUIsT0FBTyxDQUFDLFVBQUFxSyxNQUFBLEVBQXNDO01BQUEsSUFBcEN4TCxRQUFRLEdBQUF3TCxNQUFBO1FBQUU3RyxvQkFBb0IsR0FBQTZHLE1BQUE7TUFDckMsSUFBTTlGLE9BQU8sR0FBRzFKLHNCQUFzQixDQUFDL1ksSUFBSSxtQ0FBZ0MrYyxRQUFRLFFBQUksQ0FBQztNQUV4RjFnQixNQUFNLENBQUNzakIsT0FBTyxDQUFDK0Isb0JBQW9CLENBQUMsQ0FBQ3hELE9BQU8sQ0FBQyxVQUFBc0ssTUFBQSxFQUFvQztRQUFBLElBQWxDdkwsT0FBTyxHQUFBdUwsTUFBQTtVQUFFQyxtQkFBbUIsR0FBQUQsTUFBQTtRQUN2RSxJQUFNSCxNQUFNLEdBQUc1RixPQUFPLENBQUN6aUIsSUFBSSxzQ0FBbUNpZCxPQUFPLFFBQUksQ0FBQztRQUMxRSxJQUFNeUwsZUFBZSxHQUFHL29CLENBQUMsQ0FBQ2tvQixPQUFJLENBQUNoWCxpQ0FBaUMsQ0FBQ2hELE9BQU8sQ0FBQyxhQUFhLEVBQUU0YSxtQkFBbUIsQ0FBQyxDQUFDLENBQ3hHcG1CLElBQUksQ0FBQyw4Q0FBOEMsRUFBSzBhLFFBQVEsU0FBSUUsT0FBUyxDQUFDO1FBRW5Gb0wsTUFBTSxDQUFDcm9CLElBQUksc0RBQW1EK2MsUUFBUSxTQUFJRSxPQUFPLFFBQUksQ0FBQyxDQUFDbGIsTUFBTSxDQUFDLENBQUM7UUFDL0ZzbUIsTUFBTSxDQUFDMUssTUFBTSxDQUFDK0ssZUFBZSxDQUFDO01BQ2xDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNWLENBQUM7RUFBQTdvQixNQUFBLENBRUR3UywwQkFBMEIsR0FBMUIsU0FBQUEsMEJBQTBCQSxDQUFBLEVBQUc7SUFBQSxJQUFBc1csT0FBQTtJQUN6QixJQUFNN1AsaUJBQWlCLEdBQUcsSUFBSSxDQUFDclIsTUFBTSxDQUFDekgsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUNvSyxLQUFLLENBQUMsQ0FBQztJQUVsRixJQUFJLENBQUMwTyxpQkFBaUIsQ0FBQzliLE1BQU0sRUFBRTtNQUMzQjtJQUNKO0lBRUE4YixpQkFBaUIsQ0FBQzlZLElBQUksQ0FBQyx3RkFBd0YsQ0FBQyxDQUFDK0IsTUFBTSxDQUFDLENBQUM7SUFFekgsSUFBSSxDQUFDLElBQUksQ0FBQzBRLGNBQWMsQ0FBQ3pWLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ21QLFlBQVksQ0FBQ25QLE1BQU0sRUFBRTtNQUMxRDtJQUNKO0lBRUEsSUFBTTRyQixTQUFTLEdBQUc5UCxpQkFBaUIsQ0FBQzlZLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUNsRStDLEdBQUcsQ0FBQyxVQUFDOGxCLE1BQU0sRUFBRXROLEVBQUU7TUFBQSxPQUFLemEsTUFBTSxDQUFDbkIsQ0FBQyxDQUFDNGIsRUFBRSxDQUFDLENBQUMvYSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDL0QrQixHQUFHLENBQUMsQ0FBQztJQUNWLElBQU0yYyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLElBQU1DLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFFMUIsSUFBSSxDQUFDMU0sY0FBYyxDQUNkbFAsTUFBTSxDQUFDLFVBQUF1bEIsTUFBQTtNQUFBLElBQUc5TCxFQUFFLEdBQUE4TCxNQUFBLENBQUY5TCxFQUFFO01BQUEsT0FBTzRMLFNBQVMsQ0FBQy9pQixRQUFRLENBQUNtWCxFQUFFLENBQUM7SUFBQSxFQUFDLENBQzFDa0IsT0FBTyxDQUFDLFVBQUEyQixNQUFNLEVBQUk7TUFDZjhJLE9BQUksQ0FBQ3hjLFlBQVksQ0FBQytSLE9BQU8sQ0FBQyxVQUFBMkMsV0FBVyxFQUFJO1FBQ3JDLElBQU1NLFlBQVksR0FBR3dILE9BQUksQ0FBQ3ZILHVCQUF1QixDQUFDO1VBQUVQLFdBQVcsRUFBWEEsV0FBVztVQUFFaEIsTUFBTSxFQUFOQTtRQUFPLENBQUMsQ0FBQztRQUMxRSxJQUFJc0IsWUFBWSxFQUFFO1VBQUEsSUFBQTRILG9CQUFBLEVBQUFDLG9CQUFBO1VBQ2Q5SixRQUFRLENBQUNXLE1BQU0sQ0FBQzdDLEVBQUUsQ0FBQyxHQUFHM2dCLE1BQU0sQ0FBQ2tsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVyQyxRQUFRLENBQUNXLE1BQU0sQ0FBQzdDLEVBQUUsQ0FBQyxFQUFFO1lBQ3pEd0UsT0FBTyxFQUFFTCxZQUFZLENBQUNLLE9BQU8sTUFBQXVILG9CQUFBLEdBQUk3SixRQUFRLENBQUNXLE1BQU0sQ0FBQzdDLEVBQUUsQ0FBQyxxQkFBbkIrTCxvQkFBQSxDQUFxQnZILE9BQU87WUFDN0RDLGFBQWEsRUFBRXBsQixNQUFNLENBQUNrbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFBeUgsb0JBQUEsR0FBRTlKLFFBQVEsQ0FBQ1csTUFBTSxDQUFDN0MsRUFBRSxDQUFDLHFCQUFuQmdNLG9CQUFBLENBQXFCdkgsYUFBYSxFQUFFTixZQUFZLENBQUNNLGFBQWE7VUFDbkcsQ0FBQyxDQUFDO1FBQ047UUFFQSxJQUFNQyxvQkFBb0IsR0FBR2lILE9BQUksQ0FBQ2hILDhCQUE4QixDQUFDO1VBQUVkLFdBQVcsRUFBWEEsV0FBVztVQUFFaEIsTUFBTSxFQUFOQTtRQUFPLENBQUMsQ0FBQztRQUN6RixJQUFJNkIsb0JBQW9CLEVBQUU7VUFDdEJ2QyxlQUFlLENBQUNVLE1BQU0sQ0FBQzdDLEVBQUUsQ0FBQyxHQUFHM2dCLE1BQU0sQ0FBQ2tsQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVwQyxlQUFlLENBQUNVLE1BQU0sQ0FBQzdDLEVBQUUsQ0FBQyxFQUFFMEUsb0JBQW9CLENBQUM7UUFDcEc7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFFTixJQUFJLENBQUN1SCx3QkFBd0IsQ0FBQ25RLGlCQUFpQixFQUFFb0csUUFBUSxFQUFFQyxlQUFlLENBQUM7RUFDL0UsQ0FBQztFQUFBdGYsTUFBQSxDQUVEb3BCLHdCQUF3QixHQUF4QixTQUFBQSx3QkFBd0JBLENBQUNuUSxpQkFBaUIsRUFBRW9HLFFBQVEsRUFBRUMsZUFBZSxFQUFFO0lBQUEsSUFBQStKLE9BQUE7SUFDbkU3c0IsTUFBTSxDQUFDc2pCLE9BQU8sQ0FBQ1QsUUFBUSxDQUFDLENBQUNoQixPQUFPLENBQUMsVUFBQWlMLE1BQUEsRUFBaUQ7TUFBQSxJQUEvQ3BNLFFBQVEsR0FBQW9NLE1BQUE7UUFBQUMsT0FBQSxHQUFBRCxNQUFBO1FBQUkzSCxPQUFPLEdBQUE0SCxPQUFBLENBQVA1SCxPQUFPO1FBQUE2SCxxQkFBQSxHQUFBRCxPQUFBLENBQUUzSCxhQUFhO1FBQWJBLGFBQWEsR0FBQTRILHFCQUFBLGNBQUcsQ0FBQyxDQUFDLEdBQUFBLHFCQUFBO01BQ3RFLElBQU01RyxPQUFPLEdBQUczSixpQkFBaUIsQ0FBQzlZLElBQUksbUNBQWdDK2MsUUFBUSxRQUFJLENBQUM7TUFFbkYsSUFBSSxDQUFDMEYsT0FBTyxDQUFDemxCLE1BQU0sRUFBRTtRQUNqQjtNQUNKO01BRUEsSUFBSXdrQixPQUFPLEVBQUU7UUFDVCxJQUFNaEMsUUFBUSxHQUFHN2YsQ0FBQyxDQUFDdXBCLE9BQUksQ0FBQ3ZZLHFCQUFxQixDQUFDOUMsT0FBTyxDQUFDLGFBQWEsRUFBRTJULE9BQU8sQ0FBQyxDQUFDLENBQ3pFbmYsSUFBSSxDQUFDLHNDQUFzQyxFQUFFMGEsUUFBUSxDQUFDO1FBQzNELElBQU1pTCxNQUFNLEdBQUd2RixPQUFPLENBQUN6aUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDb0ssS0FBSyxDQUFDLENBQUM7UUFFNUMsSUFBSTRkLE1BQU0sQ0FBQ2hyQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ25CZ3JCLE1BQU0sQ0FBQ3JLLE1BQU0sQ0FBQzZCLFFBQVEsQ0FBQztRQUMzQixDQUFDLE1BQU07VUFDSGlELE9BQU8sQ0FBQ3lGLE9BQU8sQ0FBQzFJLFFBQVEsQ0FBQztRQUM3QjtNQUNKO01BRUFuakIsTUFBTSxDQUFDc2pCLE9BQU8sQ0FBQzhCLGFBQWEsQ0FBQyxDQUFDdkQsT0FBTyxDQUFDLFVBQUFvTCxNQUFBLEVBQTZCO1FBQUEsSUFBM0JyTSxPQUFPLEdBQUFxTSxNQUFBO1VBQUVsQixZQUFZLEdBQUFrQixNQUFBO1FBQ3pELElBQU1qQixNQUFNLEdBQUc1RixPQUFPLENBQUN6aUIsSUFBSSxzQ0FBbUNpZCxPQUFPLFFBQUksQ0FBQyxDQUFDN1MsS0FBSyxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDaWUsTUFBTSxDQUFDcnJCLE1BQU0sRUFBRTtVQUNoQjtRQUNKO1FBRUEsSUFBTXdpQixRQUFRLEdBQUc3ZixDQUFDLENBQUN1cEIsT0FBSSxDQUFDdFksMEJBQTBCLENBQUMvQyxPQUFPLENBQUMsYUFBYSxFQUFFdWEsWUFBWSxDQUFDLENBQUMsQ0FDbkYvbEIsSUFBSSxDQUFDLHNDQUFzQyxFQUFLMGEsUUFBUSxTQUFJRSxPQUFTLENBQUM7UUFFM0UsSUFBSW9MLE1BQU0sQ0FBQ2puQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7VUFDckIsSUFBSWluQixNQUFNLENBQUNqbkIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3hCLElBQU1tZixPQUFPLEdBQUdrQyxPQUFPLENBQUN6aUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDb0ssS0FBSyxDQUFDLENBQUM7WUFFOUMsSUFBSW1XLE9BQU8sQ0FBQ3ZqQixNQUFNLEdBQUcsQ0FBQyxFQUFFO2NBQ3BCdWpCLE9BQU8sQ0FBQzBILEtBQUssQ0FBQ3pJLFFBQVEsQ0FBQztZQUMzQixDQUFDLE1BQU07Y0FDSGlELE9BQU8sQ0FBQzlFLE1BQU0sQ0FBQzZCLFFBQVEsQ0FBQztZQUM1QjtVQUNKO1FBQ0osQ0FBQyxNQUFNO1VBQ0g2SSxNQUFNLENBQUNKLEtBQUssQ0FBQ3pJLFFBQVEsQ0FBQztRQUMxQjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGbmpCLE1BQU0sQ0FBQ3NqQixPQUFPLENBQUNSLGVBQWUsQ0FBQyxDQUFDakIsT0FBTyxDQUFDLFVBQUFxTCxNQUFBLEVBQXNDO01BQUEsSUFBcEN4TSxRQUFRLEdBQUF3TSxNQUFBO1FBQUU3SCxvQkFBb0IsR0FBQTZILE1BQUE7TUFDcEUsSUFBTTlHLE9BQU8sR0FBRzNKLGlCQUFpQixDQUFDOVksSUFBSSxtQ0FBZ0MrYyxRQUFRLFFBQUksQ0FBQztNQUVuRixJQUFJLENBQUMwRixPQUFPLENBQUN6bEIsTUFBTSxFQUFFO1FBQ2pCO01BQ0o7TUFFQVgsTUFBTSxDQUFDc2pCLE9BQU8sQ0FBQytCLG9CQUFvQixDQUFDLENBQUN4RCxPQUFPLENBQUMsVUFBQXNMLE1BQUEsRUFBb0M7UUFBQSxJQUFsQ3ZNLE9BQU8sR0FBQXVNLE1BQUE7VUFBRWYsbUJBQW1CLEdBQUFlLE1BQUE7UUFDdkUsSUFBTW5CLE1BQU0sR0FBRzVGLE9BQU8sQ0FBQ3ppQixJQUFJLHNDQUFtQ2lkLE9BQU8sUUFBSSxDQUFDLENBQUM3UyxLQUFLLENBQUMsQ0FBQztRQUVsRixJQUFJLENBQUNpZSxNQUFNLENBQUNyckIsTUFBTSxFQUFFO1VBQ2hCO1FBQ0o7UUFFQSxJQUFNMHJCLGVBQWUsR0FBRy9vQixDQUFDLENBQUN1cEIsT0FBSSxDQUFDclksaUNBQWlDLENBQUNoRCxPQUFPLENBQUMsYUFBYSxFQUFFNGEsbUJBQW1CLENBQUMsQ0FBQyxDQUN4R3BtQixJQUFJLENBQUMsOENBQThDLEVBQUswYSxRQUFRLFNBQUlFLE9BQVMsQ0FBQztRQUVuRixJQUFJb0wsTUFBTSxDQUFDam5CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtVQUNyQixJQUFJaW5CLE1BQU0sQ0FBQ2puQixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEIsSUFBTW1mLE9BQU8sR0FBR2tDLE9BQU8sQ0FBQ3ppQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUNvSyxLQUFLLENBQUMsQ0FBQztZQUU5QyxJQUFJbVcsT0FBTyxDQUFDdmpCLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDcEJ1akIsT0FBTyxDQUFDMEgsS0FBSyxDQUFDUyxlQUFlLENBQUM7WUFDbEMsQ0FBQyxNQUFNO2NBQ0hqRyxPQUFPLENBQUM5RSxNQUFNLENBQUMrSyxlQUFlLENBQUM7WUFDbkM7VUFDSjtRQUNKLENBQUMsTUFBTTtVQUNITCxNQUFNLENBQUMxSyxNQUFNLENBQUMrSyxlQUFlLENBQUM7UUFDbEM7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZJO0VBQUE3b0IsTUFBQSxDQWdCQXNpQiwyQkFBMkIsR0FBM0IsU0FBQUEsMkJBQTJCQSxDQUFDbEosYUFBYSxFQUFFRixzQkFBc0IsRUFBRTBFLHVCQUF1QixFQUFFO0lBQ3hGLElBQU1nTSxZQUFZLEdBQUcsSUFBSSxDQUFDaFgsY0FBYyxDQUFDbFAsTUFBTSxDQUFDLFVBQUFtbUIsTUFBQTtNQUFBLElBQUcxTSxFQUFFLEdBQUEwTSxNQUFBLENBQUYxTSxFQUFFO01BQUEsT0FBTy9ELGFBQWEsQ0FBQ3BULFFBQVEsQ0FBQ21YLEVBQUUsQ0FBQztJQUFBLEVBQUM7O0lBRXZGO0FBQ1I7QUFDQTtJQUNRLElBQU0yTSxjQUFjLEdBQUdGLFlBQVksQ0FDOUJsbUIsTUFBTSxDQUFDLFVBQUFxbUIsTUFBQTtNQUFBLElBQUdDLE9BQU8sR0FBQUQsTUFBQSxDQUFQQyxPQUFPO1FBQUVDLGFBQWEsR0FBQUYsTUFBQSxDQUFiRSxhQUFhO1FBQUVqTixNQUFNLEdBQUErTSxNQUFBLENBQU4vTSxNQUFNO01BQUEsT0FDckNnTixPQUFPLElBQ1BDLGFBQWEsS0FBS0EsYUFBYSxDQUFDQyxHQUFHLElBQUlELGFBQWEsQ0FBQ0UsS0FBSyxJQUFJRixhQUFhLENBQUNHLElBQUksQ0FBQyxLQUNqRnBOLE1BQU0sb0JBQU5BLE1BQU0sQ0FBRTdjLElBQUksQ0FBQyxVQUFBa3FCLE1BQUE7UUFBQSxJQUFHQyxRQUFRLEdBQUFELE1BQUEsQ0FBUkMsUUFBUTtRQUFBLE9BQU9BLFFBQVE7TUFBQSxFQUFDO0lBQUEsRUFBQzs7SUFFakQ7QUFDUjtBQUNBO0lBQ1EsSUFBTUMsZUFBZSxHQUFHWCxZQUFZLENBQy9CbG1CLE1BQU0sQ0FBQyxVQUFBOG1CLE1BQUE7TUFBQSxJQUFHQyxPQUFPLEdBQUFELE1BQUEsQ0FBUEMsT0FBTztRQUFFanRCLEtBQUssR0FBQWd0QixNQUFBLENBQUxodEIsS0FBSztNQUFBLE9BQU9pdEIsT0FBTyxJQUFJanRCLEtBQUs7SUFBQSxFQUFDOztJQUVyRDtBQUNSO0FBQ0E7SUFDUSxJQUFNa3RCLFdBQVcsR0FBR2QsWUFBWSxDQUMzQmxtQixNQUFNLENBQUMsVUFBQWluQixNQUFBO01BQUEsSUFBR0MsT0FBTyxHQUFBRCxNQUFBLENBQVBDLE9BQU87TUFBQSxPQUFPQSxPQUFPLEtBQUssWUFBWTtJQUFBLEVBQUM7O0lBRXREO0FBQ1I7QUFDQTtJQUNRLElBQU1DLFdBQVcsR0FBR2pCLFlBQVksQ0FDM0JsbUIsTUFBTSxDQUFDLFVBQUFvbkIsTUFBQTtNQUFBLElBQUdGLE9BQU8sR0FBQUUsTUFBQSxDQUFQRixPQUFPO01BQUEsT0FBT0EsT0FBTyxLQUFLLE1BQU07SUFBQSxFQUFDOztJQUVoRDtBQUNSO0FBQ0E7SUFDUSxJQUFNRyxlQUFlLEdBQUduQixZQUFZLENBQy9CbG1CLE1BQU0sQ0FBQyxVQUFBc25CLE1BQUE7TUFBQSxJQUFHdkssUUFBUSxHQUFBdUssTUFBQSxDQUFSdkssUUFBUTtRQUFFbUssT0FBTyxHQUFBSSxNQUFBLENBQVBKLE9BQU87TUFBQSxPQUFPLENBQUNuSyxRQUFRLElBQUltSyxPQUFPLEtBQUssWUFBWTtJQUFBLEVBQUM7O0lBRTdFO0FBQ1I7QUFDQTtJQUNRLElBQU1LLFdBQVcsR0FBR3JCLFlBQVksQ0FDM0JsbUIsTUFBTSxDQUFDLFVBQUF3bkIsTUFBQTtNQUFBLElBQUdOLE9BQU8sR0FBQU0sTUFBQSxDQUFQTixPQUFPO01BQUEsT0FBT0EsT0FBTyxLQUFLLFlBQVksSUFBSUEsT0FBTyxLQUFLLFVBQVUsSUFBSUEsT0FBTyxLQUFLLGVBQWU7SUFBQSxFQUFDO0lBRS9HLElBQUl4UixhQUFhLENBQUNqYyxNQUFNLEdBQUcsQ0FBQyxJQUNyQjJzQixjQUFjLENBQUMzc0IsTUFBTSxHQUFHLENBQUMsSUFBSW90QixlQUFlLENBQUNwdEIsTUFBTSxHQUFHLENBQUMsSUFBSXV0QixXQUFXLENBQUN2dEIsTUFBTSxHQUFHLENBQUMsSUFDakYwdEIsV0FBVyxDQUFDMXRCLE1BQU0sR0FBRyxDQUFDLElBQUk0dEIsZUFBZSxDQUFDNXRCLE1BQU0sR0FBRyxDQUFDLElBQUk4dEIsV0FBVyxDQUFDOXRCLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDbkY7TUFDQXlnQix1QkFBdUIsQ0FBQ2xaLElBQUksQ0FBQyxDQUFDOztNQUU5QjtNQUNBLElBQUksQ0FBQ3FVLHlCQUF5QixHQUFHLElBQUk7O01BRXJDO01BQ0ErUSxjQUFjLENBQUN6TCxPQUFPLENBQUMsVUFBQThNLE1BQUEsRUFFakI7UUFBQSxJQUFBQyxZQUFBO1FBQUEsSUFERmpPLEVBQUUsR0FBQWdPLE1BQUEsQ0FBRmhPLEVBQUU7VUFBRTZNLE9BQU8sR0FBQW1CLE1BQUEsQ0FBUG5CLE9BQU87VUFBRUMsYUFBYSxHQUFBa0IsTUFBQSxDQUFibEIsYUFBYTtVQUFFak4sTUFBTSxHQUFBbU8sTUFBQSxDQUFObk8sTUFBTTtRQUVsQyxJQUFNSSxPQUFPLEdBQUdKLE1BQU0sYUFBQW9PLFlBQUEsR0FBTnBPLE1BQU0sQ0FBRTdjLElBQUksQ0FBQyxVQUFBa3JCLE1BQUE7VUFBQSxJQUFHZixRQUFRLEdBQUFlLE1BQUEsQ0FBUmYsUUFBUTtVQUFBLE9BQU9BLFFBQVE7UUFBQSxFQUFDLHFCQUF4Q2MsWUFBQSxDQUEwQ2pPLEVBQUU7UUFDNUQsSUFBSUMsT0FBTyxFQUFFO1VBQ1RsRSxzQkFBc0IsQ0FBQy9ZLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQ3VELE1BQU0sd0JBQXFCeVosRUFBRSxTQUFLLENBQUMsQ0FBQ3JMLEdBQUcsQ0FBQ3NMLE9BQU8sQ0FBQztVQUN0RmxFLHNCQUFzQixDQUFDL1ksSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUN1RCxNQUFNLHdCQUFxQnlaLEVBQUUscUJBQWNDLE9BQU8sUUFBSSxDQUFDLENBQUM3SixJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztRQUNwSSxDQUFDLE1BQU0sSUFBSXlXLE9BQU8sRUFBRTtVQUNoQjlRLHNCQUFzQixDQUFDL1ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUN1RCxNQUFNLHdCQUFxQnlaLEVBQUUsU0FBSyxDQUFDLENBQUNyTCxHQUFHLENBQUNrWSxPQUFPLENBQUM7UUFDbkcsQ0FBQyxNQUFNLElBQUlDLGFBQWEsRUFBRTtVQUN0QixJQUFJQSxhQUFhLENBQUNDLEdBQUcsRUFBRTtZQUNuQmhSLHNCQUFzQixDQUFDL1ksSUFBSSw4QkFBMkJnZCxFQUFFLGNBQVUsQ0FBQyxDQUFDckwsR0FBRyxDQUFDbVksYUFBYSxDQUFDQyxHQUFHLENBQUM7VUFDOUY7VUFDQSxJQUFJRCxhQUFhLENBQUNFLEtBQUssRUFBRTtZQUNyQmpSLHNCQUFzQixDQUFDL1ksSUFBSSw4QkFBMkJnZCxFQUFFLGdCQUFZLENBQUMsQ0FBQ3JMLEdBQUcsQ0FBQ21ZLGFBQWEsQ0FBQ0UsS0FBSyxDQUFDO1VBQ2xHO1VBQ0EsSUFBSUYsYUFBYSxDQUFDRyxJQUFJLEVBQUU7WUFDcEJsUixzQkFBc0IsQ0FBQy9ZLElBQUksOEJBQTJCZ2QsRUFBRSxlQUFXLENBQUMsQ0FBQ3JMLEdBQUcsQ0FBQ21ZLGFBQWEsQ0FBQ0csSUFBSSxDQUFDO1VBQ2hHO1FBQ0o7TUFDSixDQUFDLENBQUM7O01BRUY7TUFDQUcsZUFBZSxDQUFDbE0sT0FBTyxDQUFDLFVBQUFpTixNQUFBLEVBRWxCO1FBQUEsSUFERm5PLEVBQUUsR0FBQW1PLE1BQUEsQ0FBRm5PLEVBQUU7VUFBRW9PLE9BQU8sR0FBQUQsTUFBQSxDQUFQQyxPQUFPO1VBQUUvdEIsS0FBSyxHQUFBOHRCLE1BQUEsQ0FBTDl0QixLQUFLO1VBQUVpdEIsT0FBTyxHQUFBYSxNQUFBLENBQVBiLE9BQU87UUFFM0IsSUFBSWMsT0FBTyxFQUFFO1VBQ1RyUyxzQkFBc0IsQ0FBQy9ZLElBQUksNkJBQTBCZ2QsRUFBRSwwQkFBb0IsQ0FBQyxDQUFDckwsR0FBRyxDQUFDdFUsS0FBSyxDQUFDO1VBQ3ZGMGIsc0JBQXNCLENBQUMvWSxJQUFJLDZCQUEwQmdkLEVBQUUsNEJBQXNCLENBQUMsQ0FBQzVKLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO1FBQ3hHLENBQUMsTUFBTTtVQUNIMkYsc0JBQXNCLENBQUMvWSxJQUFJLDZCQUEwQmdkLEVBQUUsMEJBQW9CLENBQUMsQ0FBQ3JMLEdBQUcsQ0FBQzJZLE9BQU8sQ0FBQztVQUN6RnZSLHNCQUFzQixDQUFDL1ksSUFBSSw2QkFBMEJnZCxFQUFFLDRCQUFzQixDQUFDLENBQUM1SixJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztRQUN6RztNQUNKLENBQUMsQ0FBQzs7TUFFRjtNQUNBLEdBQUE1QyxNQUFBLENBQUkrWixXQUFXLEVBQUtHLFdBQVcsRUFBS0UsZUFBZSxFQUFLRSxXQUFXLEVBQUU1TSxPQUFPLENBQUMsVUFBQW1OLE1BQUEsRUFBWTtRQUFBLElBQVRyTyxFQUFFLEdBQUFxTyxNQUFBLENBQUZyTyxFQUFFO1FBQzlFakUsc0JBQXNCLENBQUMvWSxJQUFJLHdCQUFxQmdkLEVBQUUsZ0NBQXlCQSxFQUFFLHFDQUE4QkEsRUFBRSx1Q0FBZ0NBLEVBQUUsZUFBVyxDQUFDLENBQUMzYSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDO01BQ2hNLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUFBeEMsTUFBQSxDQUVEdWlCLGdDQUFnQyxHQUFoQyxTQUFBQSxnQ0FBZ0NBLENBQUNySixzQkFBc0IsRUFBRUMsdUJBQXVCLEVBQUVDLGFBQWEsRUFBRTtJQUM3RixJQUFNcVMsTUFBTSxHQUFHO01BQUVDLFNBQVMsRUFBRTtJQUFLLENBQUM7SUFDbEMsSUFBTUMsU0FBUyxHQUFHdnNCLGdEQUFRLENBQUN3RSxNQUFNLENBQUMsSUFBSSxDQUFDcU4sbUJBQW1CLEVBQUV3YSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZGLElBQU1HLFNBQVMsR0FBR3hzQixnREFBUSxDQUFDd0UsTUFBTSxDQUFDLElBQUksQ0FBQ3NOLHdCQUF3QixFQUFFdWEsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RixJQUFNSSxZQUFZLEdBQUd6c0IsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQyxJQUFJLENBQUN1TixnQkFBZ0IsRUFBRXNhLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdkZyUyxhQUFhLENBQUNpRixPQUFPLENBQUMsVUFBQW5CLFFBQVEsRUFBSTtNQUM5QmhFLHNCQUFzQixDQUNqQi9ZLElBQUksbUNBQWdDK2MsUUFBUSx1Q0FBbUMsQ0FBQyxDQUNoRmpHLElBQUksQ0FBQyxVQUFDeFIsRUFBRSxFQUFFaVcsRUFBRSxFQUFLO1FBQ2QsSUFBTThNLE1BQU0sR0FBRzFvQixDQUFDLENBQUM0YixFQUFFLENBQUM7UUFDcEIsSUFBTTBCLE9BQU8sR0FBR25jLE1BQU0sQ0FBQ3VuQixNQUFNLENBQUNobUIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDNGEsT0FBTyxFQUFFO1FBQ2QsSUFBTTBPLE1BQU0sR0FBR2hzQixDQUFDLENBQUM2ckIsU0FBUyxDQUFDLENBQUNucEIsSUFBSSxDQUFDLG9DQUFvQyxFQUFLMGEsUUFBUSxTQUFJRSxPQUFTLENBQUM7UUFFaEcsSUFBSW9MLE1BQU0sQ0FBQ2puQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7VUFDckI7VUFDQSxJQUFJaW5CLE1BQU0sQ0FBQzduQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDNm5CLE1BQU0sQ0FBQzduQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7Y0FDOUI2bkIsTUFBTSxDQUFDN25CLElBQUksQ0FBQyxjQUFjLEVBQUU2bkIsTUFBTSxDQUFDM2xCLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUM7WUFDQTJsQixNQUFNLENBQUMzbEIsSUFBSSxDQUFJMmxCLE1BQU0sQ0FBQzduQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQUlpckIsU0FBVyxDQUFDO1VBQzlEO1FBQ0osQ0FBQyxNQUFNO1VBQ0gsSUFBTUcsSUFBSSxHQUFHdkQsTUFBTSxDQUFDcm9CLElBQUksNENBQXlDK2MsUUFBUSxTQUFJRSxPQUFPLFFBQUksQ0FBQztVQUN6RixJQUFJMk8sSUFBSSxDQUFDNXVCLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakI0dUIsSUFBSSxDQUFDN3BCLE1BQU0sQ0FBQyxDQUFDO1lBQ2IsSUFBTThwQixZQUFZLEdBQUd4RCxNQUFNLENBQUNyb0IsSUFBSSxDQUFDLCtDQUErQyxDQUFDO1lBQ2pGLElBQUk2ckIsWUFBWSxDQUFDN3VCLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDekI2dUIsWUFBWSxDQUFDamlCLElBQUksQ0FBQytoQixNQUFNLENBQUM7WUFDN0IsQ0FBQyxNQUFNO2NBQ0h0RCxNQUFNLENBQUMxSyxNQUFNLENBQUNnTyxNQUFNLENBQUM7WUFDekI7VUFDSjtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxDQUFDO0lBRUYzUyx1QkFBdUIsQ0FBQ3BQLElBQUksQ0FBQzhoQixZQUFZLENBQUM7RUFDOUM7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FUSTtFQUFBN3JCLE1BQUEsQ0FVTXdaLGdCQUFnQjtFQUFBO0VBQUE7SUFBQSxJQUFBeVMsaUJBQUEsR0FBQXJ0QixpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBdEIsU0FBQWl1QixTQUF1QmhULHNCQUFzQixFQUFFQyx1QkFBdUIsRUFBRUMsYUFBYSxFQUFFcEYsUUFBUSxFQUFFc0YsU0FBUyxFQUFFNlMsb0JBQW9CO01BQUEsSUFBQUMsT0FBQTtNQUFBLElBQUFDLGtCQUFBLEVBQUEvRyxRQUFBLEVBQUFnSCxtQkFBQSxFQUFBeEcsSUFBQSxFQUFBQyxVQUFBLEVBQUF3RyxTQUFBO01BQUEsT0FBQXh1QixZQUFBLEdBQUFDLENBQUEsV0FBQXd1QixTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQXp3QixDQUFBO1VBQUE7WUFBQSxJQUFwQm93QixvQkFBb0I7Y0FBcEJBLG9CQUFvQixHQUFHLEtBQUs7WUFBQTtZQUFBSyxTQUFBLENBQUF6d0IsQ0FBQTtZQUFBLE9BQ3BGMEMsT0FBTyxDQUFDMlIsR0FBRyxDQUFDLENBQ3hELElBQUksQ0FBQzRVLGFBQWEsQ0FBQyxDQUFDLEVBQ3BCLElBQUksQ0FBQ08saUJBQWlCLENBQ2xCbk0sYUFBYSxDQUFDbFcsR0FBRyxDQUFDLFVBQUF1cEIsR0FBRztjQUFBLE9BQUlMLE9BQUksQ0FBQ3haLGNBQWMsQ0FBQ3pTLElBQUksQ0FBQyxVQUFBdXNCLE1BQUE7Z0JBQUEsSUFBR3ZQLEVBQUUsR0FBQXVQLE1BQUEsQ0FBRnZQLEVBQUU7Z0JBQUEsT0FBT0EsRUFBRSxLQUFLc1AsR0FBRztjQUFBLEVBQUM7WUFBQSxFQUFDLEVBQzFFelksUUFDSixDQUFDLENBQ0osQ0FBQztVQUFBO1lBQUFxWSxrQkFBQSxHQUFBRyxTQUFBLENBQUF6dkIsQ0FBQTtZQU5LdW9CLFFBQVEsR0FBQStHLGtCQUFBO1lBQUFDLG1CQUFBLEdBQUFELGtCQUFBO1lBQUd2RyxJQUFJLEdBQUF3RyxtQkFBQTtZQUFLdkcsVUFBVSxHQUFBTyxpQkFBQSxDQUFBZ0csbUJBQUEsRUFBQTlkLEtBQUE7WUFRL0IrZCxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBRy91QixLQUFLLEVBQUk7Y0FDdkIsSUFBSUEsS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDYixJQUFJNHVCLE9BQUksQ0FBQy9hLGFBQWEsRUFBRTtrQkFDcEIsT0FBTythLE9BQUksQ0FBQ3ZYLE9BQU8sQ0FBQzhYLFlBQVk7Z0JBQ3BDLENBQUMsTUFBTSxJQUFJUCxPQUFJLENBQUM5YSxhQUFhLEVBQUU7a0JBQzNCLE9BQU84YSxPQUFJLENBQUN6USxXQUFXLENBQUNuZSxLQUFLLEVBQUUsSUFBSSxDQUFDO2dCQUN4QztnQkFDQSxPQUFPLEVBQUU7Y0FDYjtjQUNBLE9BQU80dUIsT0FBSSxDQUFDelEsV0FBVyxDQUFDbmUsS0FBSyxFQUFFLElBQUksQ0FBQztZQUN4QyxDQUFDO1lBRUR1b0IsVUFBVSxDQUFDMUgsT0FBTyxDQUFDLFVBQUF1TyxNQUFBLEVBRWI7Y0FBQSxJQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQTtjQUFBLElBREY5UCxRQUFRLEdBQUEwUCxNQUFBLENBQVIxUCxRQUFRO2dCQUFFRSxPQUFPLEdBQUF3UCxNQUFBLENBQVB4UCxPQUFPO2dCQUFFMkoscUJBQXFCLEdBQUE2RixNQUFBLENBQXJCN0YscUJBQXFCO2dCQUFFUSx3QkFBd0IsR0FBQXFGLE1BQUEsQ0FBeEJyRix3QkFBd0I7Y0FFbEUsSUFBSWtFLE1BQU0sR0FBQWp2QixNQUFBLENBQUFrbEIsTUFBQSxLQUNGNEQsUUFBUSxDQUFDMkgsR0FBRyxDQUFDQyxHQUFHLEtBQUssSUFBSSxHQUFHO2dCQUM1QkMsaUJBQWlCLEVBQUVwRyxxQkFBcUIsYUFBQThGLHFCQUFBLEdBQXJCOUYscUJBQXFCLENBQUVoTixLQUFLLHFCQUE1QjhTLHFCQUFBLENBQThCcnZCLEtBQUs7Z0JBQ3RENHZCLFlBQVksRUFBRWIsU0FBUyxDQUFDeEYscUJBQXFCLGFBQUErRixzQkFBQSxHQUFyQi9GLHFCQUFxQixDQUFFaE4sS0FBSyxxQkFBNUIrUyxzQkFBQSxDQUE4QnR2QixLQUFLLENBQUM7Z0JBQzVENnZCLHdCQUF3QixFQUFHdEcscUJBQXFCLFlBQXJCQSxxQkFBcUIsQ0FBRUMsaUJBQWlCLEdBQUdELHFCQUFxQixvQkFBckJBLHFCQUFxQixDQUFFQyxpQkFBaUIsR0FBRyxFQUFHO2dCQUNwSEgsbUJBQW1CLEVBQUdFLHFCQUFxQixZQUFyQkEscUJBQXFCLENBQUVDLGlCQUFpQixHQUFHb0YsT0FBSSxDQUFDelEsV0FBVyxDQUFDb0wscUJBQXFCLG9CQUFyQkEscUJBQXFCLENBQUVDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxHQUFHO2NBQ3hJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDRjFCLFFBQVEsQ0FBQzJILEdBQUcsQ0FBQ0MsR0FBRyxLQUFLLEtBQUssR0FBRztnQkFDN0JJLG9CQUFvQixFQUFFL0Ysd0JBQXdCLGFBQUF3RixxQkFBQSxHQUF4QnhGLHdCQUF3QixDQUFFeE4sS0FBSyxxQkFBL0JnVCxxQkFBQSxDQUFpQ3Z2QixLQUFLO2dCQUM1RCt2QixlQUFlLEVBQUVoQixTQUFTLENBQUNoRix3QkFBd0IsYUFBQXlGLHNCQUFBLEdBQXhCekYsd0JBQXdCLENBQUV4TixLQUFLLHFCQUEvQmlULHNCQUFBLENBQWlDeHZCLEtBQUssQ0FBQztnQkFDbEVnd0IsMkJBQTJCLEVBQUdqRyx3QkFBd0IsWUFBeEJBLHdCQUF3QixDQUFFUCxpQkFBaUIsR0FBR08sd0JBQXdCLG9CQUF4QkEsd0JBQXdCLENBQUVQLGlCQUFpQixHQUFHLEVBQUc7Z0JBQzdITSxzQkFBc0IsRUFBR0Msd0JBQXdCLFlBQXhCQSx3QkFBd0IsQ0FBRVAsaUJBQWlCLEdBQUdvRixPQUFJLENBQUN6USxXQUFXLENBQUM0TCx3QkFBd0Isb0JBQXhCQSx3QkFBd0IsQ0FBRVAsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEdBQUc7Y0FDakosQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNUO2NBRUQsSUFBSXlFLE1BQU0sQ0FBQzJCLFlBQVksSUFBSTNCLE1BQU0sQ0FBQzhCLGVBQWUsRUFBRTtnQkFBQSxJQUFBRSxtQkFBQTtnQkFDL0M7Z0JBQ0E7Z0JBQ0EsSUFBTUMsT0FBTyxJQUFBRCxtQkFBQSxHQUFHblUsU0FBUyxDQUFDNEQsUUFBUSxDQUFDLHFCQUFuQnVRLG1CQUFBLENBQXNCclEsT0FBTyxDQUFDO2dCQUM5QyxJQUFJc1EsT0FBTyxFQUFFO2tCQUFBLElBQUFDLHNCQUFBLEVBQUFDLHNCQUFBO2tCQUNULElBQU1DLGdCQUFnQixHQUFHSCxPQUFPLEdBQUdwSSxRQUFRLENBQUN2SixRQUFRLENBQUMrUixZQUFZO2tCQUNqRSxJQUFNQyxVQUFVLEdBQUd6SSxRQUFRLENBQUMySCxHQUFHLENBQUNDLEdBQUcsS0FBSyxLQUFLLEdBQUczRix3QkFBd0IsYUFBQW9HLHNCQUFBLEdBQXhCcEcsd0JBQXdCLENBQUV4TixLQUFLLHFCQUEvQjRULHNCQUFBLENBQWlDbndCLEtBQUssR0FBR3VwQixxQkFBcUIsYUFBQTZHLHNCQUFBLEdBQXJCN0cscUJBQXFCLENBQUVoTixLQUFLLHFCQUE1QjZULHNCQUFBLENBQThCcHdCLEtBQUs7a0JBQzVILElBQUlxd0IsZ0JBQWdCLEdBQUdFLFVBQVUsRUFBRTtvQkFDL0J0QyxNQUFNLEdBQUFqdkIsTUFBQSxDQUFBa2xCLE1BQUEsS0FDQytKLE1BQU0sRUFDTG5HLFFBQVEsQ0FBQzJILEdBQUcsQ0FBQ0MsR0FBRyxLQUFLLElBQUksR0FBRztzQkFDNUJHLHdCQUF3QixFQUFFUSxnQkFBZ0I7c0JBQzFDaEgsbUJBQW1CLEVBQUV1RixPQUFJLENBQUN6USxXQUFXLENBQUNrUyxnQkFBZ0IsRUFBRSxJQUFJO29CQUNoRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ0Z2SSxRQUFRLENBQUMySCxHQUFHLENBQUNDLEdBQUcsS0FBSyxLQUFLLEdBQUc7c0JBQzdCTSwyQkFBMkIsRUFBRUssZ0JBQWdCO3NCQUM3Q3ZHLHNCQUFzQixFQUFFOEUsT0FBSSxDQUFDelEsV0FBVyxDQUFDa1MsZ0JBQWdCLEVBQUUsSUFBSTtvQkFDbkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNUO2tCQUNMO2dCQUNKO2dCQUVBLElBQU1sQyxTQUFTLEdBQUd2c0IsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQ3dvQixPQUFJLENBQUNuYixtQkFBbUIsRUFBRXdhLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZGLElBQU1HLFNBQVMsR0FBR3hzQixnREFBUSxDQUFDd0UsTUFBTSxDQUFDd29CLE9BQUksQ0FBQ2xiLHdCQUF3QixFQUFFdWEsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUYsSUFBTUssTUFBTSxHQUFHaHNCLENBQUMsQ0FBQzZyQixTQUFTLENBQUMsQ0FBQ25wQixJQUFJLENBQUMsb0NBQW9DLEVBQUswYSxRQUFRLFNBQUlFLE9BQVMsQ0FBQztnQkFDaEcsSUFBTXdGLE9BQU8sR0FBRzFKLHNCQUFzQixDQUFDL1ksSUFBSSxtQ0FBZ0MrYyxRQUFRLFFBQUksQ0FBQztnQkFDeEYsSUFBTXNMLE1BQU0sR0FBRzVGLE9BQU8sQ0FBQ3ppQixJQUFJLHNDQUFtQ2lkLE9BQU8sUUFBSSxDQUFDO2dCQUUxRSxJQUFJb0wsTUFBTSxDQUFDam5CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtrQkFDckIsSUFBSSxDQUFDaW5CLE1BQU0sQ0FBQzduQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7b0JBQzlCNm5CLE1BQU0sQ0FBQzduQixJQUFJLENBQUMsY0FBYyxFQUFFNm5CLE1BQU0sQ0FBQzNsQixJQUFJLENBQUMsQ0FBQyxDQUFDO2tCQUM5QztrQkFDQTJsQixNQUFNLENBQUMzbEIsSUFBSSxDQUFJMmxCLE1BQU0sQ0FBQzduQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQUlpckIsU0FBVyxDQUFDO2tCQUMxRHBELE1BQU0sQ0FBQzduQixJQUFJLENBQUMsV0FBVyxFQUFFZ3JCLFNBQVMsQ0FBQztnQkFDdkMsQ0FBQyxNQUFNO2tCQUNIbkQsTUFBTSxDQUFDcm9CLElBQUksNENBQXlDK2MsUUFBUSxTQUFJRSxPQUFPLFFBQUksQ0FBQyxDQUFDbGIsTUFBTSxDQUFDLENBQUM7a0JBQ3JGLElBQU04cEIsWUFBWSxHQUFHeEQsTUFBTSxDQUFDcm9CLElBQUksQ0FBQywrQ0FBK0MsQ0FBQztrQkFDakYsSUFBSTZyQixZQUFZLENBQUM3dUIsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDekI2dUIsWUFBWSxDQUFDamlCLElBQUksQ0FBQytoQixNQUFNLENBQUM7a0JBQzdCLENBQUMsTUFBTTtvQkFDSHRELE1BQU0sQ0FBQzFLLE1BQU0sQ0FBQ2dPLE1BQU0sQ0FBQztrQkFDekI7Z0JBQ0o7Y0FDSjtZQUNKLENBQUMsQ0FBQzs7WUFFRjtZQUNBLElBQUksQ0FBQ0ssb0JBQW9CLEVBQUU7Y0FDdkIsSUFBSSxDQUFDNkIsa0JBQWtCLENBQUM3VSx1QkFBdUIsRUFBRTJNLElBQUksRUFBRVIsUUFBUSxDQUFDO1lBQ3BFO1VBQUM7WUFBQSxPQUFBa0gsU0FBQSxDQUFBeHZCLENBQUE7UUFBQTtNQUFBLEdBQUFrdkIsUUFBQTtJQUFBLENBQ0o7SUFBQSxTQXpGSzFTLGdCQUFnQkEsQ0FBQXlVLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsRUFBQUMsSUFBQSxFQUFBQyxJQUFBO01BQUEsT0FBQXJDLGlCQUFBLENBQUFudEIsS0FBQSxPQUFBRCxTQUFBO0lBQUE7SUFBQSxPQUFoQjJhLGdCQUFnQjtFQUFBO0VBMkZ0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFqQkk7RUFBQXhaLE1BQUEsQ0FrQkFndUIsa0JBQWtCLEdBQWxCLFNBQUFBLGtCQUFrQkEsQ0FBQzdVLHVCQUF1QixFQUFFbE4sT0FBTyxFQUFFcVosUUFBUSxFQUFFO0lBQUEsSUFBQWlKLHFCQUFBLEVBQUFDLHFCQUFBO0lBQzNELElBQUkvQyxNQUFNLEdBQUc7TUFDVGdELFdBQVcsRUFBRSxJQUFJLENBQUM1WixPQUFPLENBQUM0WixXQUFXO01BQ3JDdEIsaUJBQWlCLEVBQUUsRUFBRTtNQUNyQkMsWUFBWSxFQUFFLEVBQUU7TUFDaEJFLG9CQUFvQixFQUFFLEVBQUU7TUFDeEJDLGVBQWUsRUFBRTtJQUNyQixDQUFDO0lBRUQsSUFBSSxDQUFBZ0IscUJBQUEsR0FBQXRpQixPQUFPLENBQUN1YSxhQUFhLGFBQXJCK0gscUJBQUEsQ0FBdUJ4VSxLQUFLLEtBQUF5VSxxQkFBQSxHQUFJdmlCLE9BQU8sQ0FBQ2diLGdCQUFnQixhQUF4QnVILHFCQUFBLENBQTBCelUsS0FBSyxFQUFFO01BQ2pFMFIsTUFBTSxHQUFBanZCLE1BQUEsQ0FBQWtsQixNQUFBLEtBQ0MrSixNQUFNLEVBQ0xuRyxRQUFRLENBQUMySCxHQUFHLENBQUNDLEdBQUcsS0FBSyxJQUFJLEdBQUc7UUFDNUJDLGlCQUFpQixFQUFFbGhCLE9BQU8sQ0FBQ3VhLGFBQWEsQ0FBQ3pNLEtBQUssQ0FBQ3ZjLEtBQUs7UUFDcEQ0dkIsWUFBWSxFQUFFLElBQUksQ0FBQ3pSLFdBQVcsQ0FBQzFQLE9BQU8sQ0FBQ3VhLGFBQWEsQ0FBQ3pNLEtBQUssQ0FBQ3ZjLEtBQUssQ0FBQztRQUNqRTZ2Qix3QkFBd0IsRUFBRXBoQixPQUFPLENBQUN1YSxhQUFhLENBQUNNLFNBQVMsQ0FBQ3RwQixLQUFLLEdBQUd5TyxPQUFPLENBQUN1YSxhQUFhLENBQUN6TSxLQUFLLENBQUN2YyxLQUFLLEdBQUd5TyxPQUFPLENBQUN1YSxhQUFhLENBQUNNLFNBQVMsQ0FBQ3RwQixLQUFLLEdBQUcsRUFBRTtRQUNoSnFwQixtQkFBbUIsRUFBRTVhLE9BQU8sQ0FBQ3VhLGFBQWEsQ0FBQ00sU0FBUyxDQUFDdHBCLEtBQUssR0FBR3lPLE9BQU8sQ0FBQ3VhLGFBQWEsQ0FBQ3pNLEtBQUssQ0FBQ3ZjLEtBQUssR0FBRyxJQUFJLENBQUNtZSxXQUFXLENBQUMxUCxPQUFPLENBQUN1YSxhQUFhLENBQUNNLFNBQVMsQ0FBQ3RwQixLQUFLLENBQUMsR0FBRztNQUMvSixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ0Y4bkIsUUFBUSxDQUFDMkgsR0FBRyxDQUFDQyxHQUFHLEtBQUssS0FBSyxHQUFHO1FBQzdCSSxvQkFBb0IsRUFBRXJoQixPQUFPLENBQUNnYixnQkFBZ0IsQ0FBQ2xOLEtBQUssQ0FBQ3ZjLEtBQUs7UUFDMUQrdkIsZUFBZSxFQUFFLElBQUksQ0FBQzVSLFdBQVcsQ0FBQzFQLE9BQU8sQ0FBQ2diLGdCQUFnQixDQUFDbE4sS0FBSyxDQUFDdmMsS0FBSyxDQUFDO1FBQ3ZFZ3dCLDJCQUEyQixFQUFFdmhCLE9BQU8sQ0FBQ2diLGdCQUFnQixDQUFDSCxTQUFTLENBQUN0cEIsS0FBSyxHQUFHeU8sT0FBTyxDQUFDZ2IsZ0JBQWdCLENBQUNsTixLQUFLLENBQUN2YyxLQUFLLEdBQUd5TyxPQUFPLENBQUNnYixnQkFBZ0IsQ0FBQ0gsU0FBUyxDQUFDdHBCLEtBQUssR0FBRyxFQUFFO1FBQzVKOHBCLHNCQUFzQixFQUFFcmIsT0FBTyxDQUFDZ2IsZ0JBQWdCLENBQUNILFNBQVMsQ0FBQ3RwQixLQUFLLEdBQUd5TyxPQUFPLENBQUNnYixnQkFBZ0IsQ0FBQ2xOLEtBQUssQ0FBQ3ZjLEtBQUssR0FBRyxJQUFJLENBQUNtZSxXQUFXLENBQUMxUCxPQUFPLENBQUNnYixnQkFBZ0IsQ0FBQ0gsU0FBUyxDQUFDdHBCLEtBQUssQ0FBQyxHQUFHO01BQzNLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDVDtJQUNMO0lBRUEsSUFBTXF1QixZQUFZLEdBQUd6c0IsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQyxJQUFJLENBQUN1TixnQkFBZ0IsRUFBRXNhLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkZ0Uyx1QkFBdUIsQ0FBQ3BQLElBQUksQ0FBQzhoQixZQUFZLENBQUM7RUFDOUM7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVZJO0VBQUE3ckIsTUFBQSxDQVdBd2lCLFdBQVcsR0FBWCxTQUFBQSxXQUFXQSxDQUFDdEosc0JBQXNCLEVBQUUyRixzQkFBc0IsRUFBRTFGLHVCQUF1QixFQUFFMkYsb0JBQW9CLEVBQUV4QixpQkFBaUIsRUFBRXRKLFFBQVEsRUFBRTBYLFNBQVMsRUFBVTtJQUFBLElBQW5CQSxTQUFTO01BQVRBLFNBQVMsR0FBRyxLQUFLO0lBQUE7SUFDcko1TSxvQkFBb0IsQ0FBQy9VLElBQUksQ0FBQyxJQUFJLENBQUM4SyxPQUFPLENBQUM2WixtQkFBbUIsQ0FBQztJQUUzRCxJQUFNQyxPQUFPLEdBQUcsRUFBRTtJQUNsQixJQUFNOUMsWUFBWSxHQUFHLENBQUNILFNBQVMsR0FDekJ2Uyx1QkFBdUIsQ0FBQ3BQLElBQUksQ0FBQyxDQUFDLEdBQzlCM0ssZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQyxJQUFJLENBQUN1TixnQkFBZ0IsRUFBRTtNQUFFdWEsU0FBUyxFQUFUQTtJQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0UsSUFBTWtELFNBQVMsR0FBRzl1QixDQUFDLENBQUMrckIsWUFBWSxDQUFDLENBQUNycEIsSUFBSSxDQUFDLDhDQUE4QyxFQUFFLEVBQUUsQ0FBQztJQUUxRixJQUFJLENBQUNvUSxjQUFjLENBQUN5TCxPQUFPLENBQUMsVUFBQTJCLE1BQU0sRUFBSTtNQUFBLElBQUE2TyxjQUFBLEVBQUFDLHFCQUFBO01BQ2xDLElBQU1DLE1BQU0sR0FBRy9hLFFBQVEsQ0FBQ3RSLEdBQUcsZ0JBQWNzZCxNQUFNLENBQUM3QyxFQUFFLFdBQVEsQ0FBQztNQUMzRCxJQUFNNlIsUUFBUSxHQUFHaGIsUUFBUSxDQUFDdFIsR0FBRyxnQkFBY3NkLE1BQU0sQ0FBQzdDLEVBQUUsYUFBVSxDQUFDO01BQy9ELElBQU04UixPQUFPLEdBQUdqYixRQUFRLENBQUN0UixHQUFHLGdCQUFjc2QsTUFBTSxDQUFDN0MsRUFBRSxZQUFTLENBQUM7TUFFN0QsSUFBSTRSLE1BQU0sSUFBSUMsUUFBUSxJQUFJQyxPQUFPLEVBQUU7UUFDL0JOLE9BQU8sQ0FBQzNlLElBQUksQ0FBQztVQUNUcE4sSUFBSSxFQUFFb2QsTUFBTSxDQUFDakQsWUFBWTtVQUN6QnZmLEtBQUssRUFBRSxJQUFJMHhCLElBQUksQ0FBSUQsT0FBTyxTQUFJRCxRQUFRLFNBQUlELE1BQVEsQ0FBQyxDQUFDSSxrQkFBa0IsQ0FBQztVQUN2RTtRQUNKLENBQUMsQ0FBQztRQUNGO01BQ0o7TUFFQSxJQUFNQyxRQUFRLEdBQUdwYixRQUFRLENBQUN3UCxNQUFNLGdCQUFjeEQsTUFBTSxDQUFDN0MsRUFBRSxNQUFHLENBQUMsQ0FBQzNPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN4RSxJQUFJLENBQUM0Z0IsUUFBUSxJQUFJQSxRQUFRLEtBQUssR0FBRyxFQUFFO01BRW5DLElBQUlBLFFBQVEsWUFBWXJPLElBQUksRUFBRTtRQUMxQixJQUFJcU8sUUFBUSxDQUFDeHNCLElBQUksRUFBRTtVQUNmK3JCLE9BQU8sQ0FBQzNlLElBQUksQ0FBQztZQUNUcE4sSUFBSSxFQUFFb2QsTUFBTSxDQUFDakQsWUFBWTtZQUN6QnZmLEtBQUssRUFBRTR4QixRQUFRLENBQUN4c0I7VUFDcEIsQ0FBQyxDQUFDO1FBQ047UUFDQTtNQUNKO01BRUEsSUFBTXdhLE9BQU8sR0FBR2dTLFFBQVEsR0FBR251QixNQUFNLENBQUNtdUIsUUFBUSxDQUFDLEdBQUcsSUFBSTs7TUFFbEQ7TUFDQSxJQUFJcFAsTUFBTSxDQUFDeUssT0FBTyxJQUFJekssTUFBTSxDQUFDeUssT0FBTyxLQUFLck4sT0FBTyxFQUFFO01BRWxELElBQU15SCxVQUFVLEdBQUcsRUFBQWdLLGNBQUEsR0FBQTdPLE1BQU0sQ0FBQ2hELE1BQU0sY0FBQTZSLGNBQUEsR0FBYkEsY0FBQSxDQUFlMXVCLElBQUksQ0FBQyxVQUFBa3ZCLE1BQUE7UUFBQSxJQUFHbFMsRUFBRSxHQUFBa1MsTUFBQSxDQUFGbFMsRUFBRTtRQUFBLE9BQU9BLEVBQUUsS0FBS0MsT0FBTztNQUFBLEVBQUMscUJBQS9DeVIsY0FBQSxDQUFpRDVSLEtBQUssTUFDakUrQyxNQUFNLENBQUN4aUIsS0FBSyxLQUFLNGYsT0FBTyxHQUFHNEMsTUFBTSxDQUFDL0MsS0FBSyxHQUFHekksU0FBUyxDQUFDO01BRTVELElBQU1tWCxTQUFTLElBQUFtRCxxQkFBQSxHQUFHNVYsc0JBQXNCLENBQUMvWSxJQUFJLDRDQUF5QzZmLE1BQU0sQ0FBQzdDLEVBQUUsU0FBSUMsT0FBTyxRQUFJLENBQUMsQ0FDMUc3UyxLQUFLLENBQUMsQ0FBQyxDQUFDakksS0FBSyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUR0RHVzQixxQkFBQSxDQUN3RG5zQixTQUFTO01BRW5GLElBQU0yc0IsaUJBQWlCLEdBQUdwVyxzQkFBc0IsQ0FBQy9ZLElBQUksOEJBQTJCNmYsTUFBTSxDQUFDN0MsRUFBRSw0QkFBcUJDLE9BQU8sUUFBSSxDQUFDLENBQUN6YyxJQUFJLENBQUMsV0FBVyxDQUFDO01BRTVJZ3VCLE9BQU8sQ0FBQzNlLElBQUksQ0FBQztRQUNUcE4sSUFBSSxFQUFFb2QsTUFBTSxDQUFDakQsWUFBWTtRQUN6QnZmLEtBQUssRUFBRXFuQixVQUFVLElBQUl1SyxRQUFRO1FBQzdCekQsU0FBUyxFQUFFQSxTQUFTLElBQUkyRDtNQUM1QixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFFRixJQUFNQyxXQUFXLEdBQUdud0IsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQyxJQUFJLENBQUN3TixlQUFlLEVBQUU7TUFBRXVkLE9BQU8sRUFBUEE7SUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFGOVAsc0JBQXNCLENBQUM5VSxJQUFJLENBQUN3bEIsV0FBVyxDQUFDOztJQUV4QztJQUNBalMsaUJBQWlCLENBQUNuZCxJQUFJLENBQUMsZ0RBQWdELENBQUMsQ0FBQytCLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGb2IsaUJBQWlCLENBQUNuZCxJQUFJLENBQUMsSUFBSSxDQUFDb1Isd0JBQXdCLENBQUMsQ0FBQzhXLE9BQU8sQ0FBQ3VHLFNBQVMsQ0FBQztJQUN4RXRSLGlCQUFpQixDQUFDNVksSUFBSSxDQUFDLENBQUM7RUFDNUI7O0VBR0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyQkk7RUFBQTFFLE1BQUEsQ0FzQkF5Wix1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDOVksSUFBSSxFQUFFO0lBQzFCLElBQU1pUixLQUFLLEdBQUcsSUFBSSxDQUFDaEssTUFBTSxDQUFDekgsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3RELElBQU04WSxpQkFBaUIsR0FBR3JILEtBQUssQ0FBQ3pSLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztJQUNwRSxJQUFNZ1osdUJBQXVCLEdBQUdGLGlCQUFpQixDQUFDOVksSUFBSSxDQUFDLDhDQUE4QyxDQUFDO0lBRXRHLElBQUlzckIsTUFBTSxHQUFHO01BQ1RnRCxXQUFXLEVBQUUsSUFBSSxDQUFDNVosT0FBTyxDQUFDNFosV0FBVztNQUNyQ3RCLGlCQUFpQixFQUFFLEVBQUU7TUFDckJDLFlBQVksRUFBRSxFQUFFO01BQ2hCRSxvQkFBb0IsRUFBRSxFQUFFO01BQ3hCQyxlQUFlLEVBQUU7SUFDckIsQ0FBQztJQUVELElBQUk1c0IsSUFBSSxDQUFDb1osS0FBSyxFQUFFO01BQ1owUixNQUFNLEdBQUFqdkIsTUFBQSxDQUFBa2xCLE1BQUEsS0FDQytKLE1BQU0sRUFDTDlxQixJQUFJLENBQUNvWixLQUFLLENBQUNRLFFBQVEsR0FBRztRQUN0QjRTLGlCQUFpQixFQUFFeHNCLElBQUksQ0FBQ29aLEtBQUssQ0FBQ1EsUUFBUSxDQUFDL2MsS0FBSztRQUM1QzR2QixZQUFZLEVBQUV6c0IsSUFBSSxDQUFDb1osS0FBSyxDQUFDUSxRQUFRLENBQUNrQztNQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ0Y5YixJQUFJLENBQUNvWixLQUFLLENBQUNDLFdBQVcsR0FBRztRQUN6QnNULG9CQUFvQixFQUFFM3NCLElBQUksQ0FBQ29aLEtBQUssQ0FBQ0MsV0FBVyxDQUFDeGMsS0FBSztRQUNsRCt2QixlQUFlLEVBQUU1c0IsSUFBSSxDQUFDb1osS0FBSyxDQUFDQyxXQUFXLENBQUN5QztNQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ1Q7SUFDTDtJQUVBLElBQU1vUCxZQUFZLEdBQUd6c0IsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQyxJQUFJLENBQUN1TixnQkFBZ0IsRUFBRXNhLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkZ0Uyx1QkFBdUIsQ0FBQ3BQLElBQUksQ0FBQzhoQixZQUFZLENBQUM7RUFDOUMsQ0FBQztFQUFBLE9BQUE1ZSxZQUFBLENBQUFvRCxjQUFBO0lBQUEvTyxHQUFBO0lBQUFvQixHQUFBLEVBaG1FRCxTQUFBQSxJQUFBLEVBQTRCO01BQ3hCLE9BQU8sSUFBSSxDQUFDa0YsTUFBTSxDQUFDekgsSUFBSSxDQUFDLCtCQUErQixDQUFDO0lBQzVEO0VBQUM7QUFBQSxFQXBRdUNtTixxRUFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU2tpQixtQkFBbUJBLENBQUNDLEdBQUcsRUFBRTtFQUNyQyxJQUFNQyxLQUFLLEdBQUcsNktBQTZLO0VBRTNMLElBQU03TSxLQUFLLEdBQUc0TSxHQUFHLENBQUN4TSxJQUFJLENBQUMsQ0FBQyxDQUFDSixLQUFLLENBQUM2TSxLQUFLLENBQUM7RUFDckMsSUFBSSxDQUFDN00sS0FBSyxFQUFFO0lBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQztFQUNqQjtFQUVBLElBRUl1SCxJQUFJLEdBTUp2SCxLQUFLO0lBTkNzSCxLQUFLLEdBTVh0SCxLQUFLO0lBTlFxSCxHQUFHLEdBTWhCckgsS0FBSztJQU5hO0lBQ2xCOE0sVUFBVSxHQUtWOU0sS0FBSztJQUxPK00sUUFBUSxHQUtwQi9NLEtBQUs7SUFMaUI7SUFDdEJnTixJQUFJLEdBSUpoTixLQUFLO0lBSkNpTixNQUFNLEdBSVpqTixLQUFLO0lBSlNrTixNQUFNLEdBSXBCbE4sS0FBSztJQUppQjtJQUN0Qm1OLFNBQVMsR0FHVG5OLEtBQUs7SUFITW9OLFdBQVcsR0FHdEJwTixLQUFLO0lBSG1CO0lBQ3hCcU4sbUJBQW1CLEdBRW5Cck4sS0FBSztJQUZnQjtJQUNyQnNOLE1BQU0sR0FDTnROLEtBQUs7SUFER3VOLFlBQVksR0FDcEJ2TixLQUFLO0lBRGlCd04sY0FBYyxDQUFFO0lBQUEsRUFDdEN4TixLQUFLO0VBRVQsSUFBTWhULE1BQU0sR0FBRyxDQUFDLENBQUM7O0VBRWpCO0VBQ0EsSUFBSXVhLElBQUksSUFBSUQsS0FBSyxJQUFJRCxHQUFHLEVBQUU7SUFDdEJyYSxNQUFNLENBQUN1YSxJQUFJLEdBQUdrRyxRQUFRLENBQUNsRyxJQUFJLEVBQUUsRUFBRSxDQUFDO0lBQ2hDdmEsTUFBTSxDQUFDc2EsS0FBSyxHQUFHbUcsUUFBUSxDQUFDbkcsS0FBSyxFQUFFLEVBQUUsQ0FBQztJQUNsQ3RhLE1BQU0sQ0FBQ3FhLEdBQUcsR0FBR29HLFFBQVEsQ0FBQ3BHLEdBQUcsRUFBRSxFQUFFLENBQUM7RUFDbEMsQ0FBQyxNQUFNLElBQUl5RixVQUFVLElBQUlDLFFBQVEsRUFBRTtJQUMvQi9mLE1BQU0sQ0FBQ3NhLEtBQUssR0FBR21HLFFBQVEsQ0FBQ1gsVUFBVSxFQUFFLEVBQUUsQ0FBQztJQUN2QzlmLE1BQU0sQ0FBQ3FhLEdBQUcsR0FBR29HLFFBQVEsQ0FBQ1YsUUFBUSxFQUFFLEVBQUUsQ0FBQztFQUN2Qzs7RUFFQTtFQUNBLElBQUlDLElBQUksS0FBS3JiLFNBQVMsSUFBSXNiLE1BQU0sS0FBS3RiLFNBQVMsRUFBRTtJQUM1QzNFLE1BQU0sQ0FBQ2dnQixJQUFJLEdBQUdTLFFBQVEsQ0FBQ1QsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUNoQ2hnQixNQUFNLENBQUNpZ0IsTUFBTSxHQUFHUSxRQUFRLENBQUNSLE1BQU0sRUFBRSxFQUFFLENBQUM7SUFDcEMsSUFBSUMsTUFBTSxLQUFLdmIsU0FBUyxFQUFFO01BQ3RCM0UsTUFBTSxDQUFDa2dCLE1BQU0sR0FBR08sUUFBUSxDQUFDUCxNQUFNLEVBQUUsRUFBRSxDQUFDO0lBQ3hDO0VBQ0osQ0FBQyxNQUFNLElBQUlDLFNBQVMsS0FBS3hiLFNBQVMsSUFBSXliLFdBQVcsS0FBS3piLFNBQVMsRUFBRTtJQUM3RDNFLE1BQU0sQ0FBQ2dnQixJQUFJLEdBQUdTLFFBQVEsQ0FBQ04sU0FBUyxFQUFFLEVBQUUsQ0FBQztJQUNyQ25nQixNQUFNLENBQUNpZ0IsTUFBTSxHQUFHUSxRQUFRLENBQUNMLFdBQVcsRUFBRSxFQUFFLENBQUM7RUFDN0MsQ0FBQyxNQUFNLElBQUlDLG1CQUFtQixLQUFLMWIsU0FBUyxFQUFFO0lBQzFDM0UsTUFBTSxDQUFDZ2dCLElBQUksR0FBR1MsUUFBUSxDQUFDSixtQkFBbUIsRUFBRSxFQUFFLENBQUM7RUFDbkQ7O0VBRUE7RUFDQSxJQUFJQyxNQUFNLElBQUlDLFlBQVksRUFBRTtJQUN4QixJQUFNRyxJQUFJLEdBQUdKLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxJQUFNSyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0YsWUFBWSxFQUFFLEVBQUUsQ0FBQztJQUN6QyxJQUFNSyxRQUFRLEdBQUdKLGNBQWMsR0FBR0MsUUFBUSxDQUFDRCxjQUFjLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNsRXhnQixNQUFNLENBQUM2Z0IsUUFBUSxHQUFHSCxJQUFJLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxHQUFHLEVBQUUsQ0FBQztFQUNyRCxDQUFDLE1BQU0sSUFBSWhCLEdBQUcsQ0FBQ3pwQixRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDMUI2SixNQUFNLENBQUM2Z0IsUUFBUSxHQUFHLENBQUM7RUFDdkI7RUFFQSxPQUFPN2dCLE1BQU07QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVM4Z0Isa0JBQWtCQSxDQUFDbEIsR0FBRyxFQUFFO0VBQ3BDLElBQU1tQixVQUFVLEdBQUdwQixtQkFBbUIsQ0FBQ0MsR0FBRyxDQUFDO0VBQzNDLElBQUksQ0FBQ21CLFVBQVUsRUFBRTs7RUFFakI7RUFDQSxJQUFReEcsSUFBSSxHQUFpRHdHLFVBQVUsQ0FBL0R4RyxJQUFJO0lBQUVELEtBQUssR0FBMEN5RyxVQUFVLENBQXpEekcsS0FBSztJQUFFRCxHQUFHLEdBQXFDMEcsVUFBVSxDQUFsRDFHLEdBQUc7SUFBRTJGLElBQUksR0FBK0JlLFVBQVUsQ0FBN0NmLElBQUk7SUFBRUMsTUFBTSxHQUF1QmMsVUFBVSxDQUF2Q2QsTUFBTTtJQUFFQyxNQUFNLEdBQWVhLFVBQVUsQ0FBL0JiLE1BQU07SUFBRVcsUUFBUSxHQUFLRSxVQUFVLENBQXZCRixRQUFRO0VBRXhELElBQU1HLEdBQUcsR0FBRyxJQUFJM0IsSUFBSSxDQUFDLENBQUM7RUFDdEIsSUFBTXJ5QixDQUFDLEdBQUd1dEIsSUFBSSxXQUFKQSxJQUFJLEdBQUl5RyxHQUFHLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBQ25DLElBQU03eUIsQ0FBQyxHQUFHa3NCLEtBQUssV0FBTEEsS0FBSyxHQUFLMEcsR0FBRyxDQUFDRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUU7RUFDdkMsSUFBTTl6QixDQUFDLEdBQUdpdEIsR0FBRyxXQUFIQSxHQUFHLEdBQUkyRyxHQUFHLENBQUNHLE9BQU8sQ0FBQyxDQUFDO0VBQzlCLElBQU1DLENBQUMsR0FBR3BCLElBQUksSUFBSSxDQUFDO0VBQ25CLElBQU1xQixHQUFHLEdBQUdwQixNQUFNLElBQUksQ0FBQztFQUN2QixJQUFNcUIsR0FBRyxHQUFHcEIsTUFBTSxJQUFJLENBQUM7RUFFdkIsSUFBSXFCLElBQUk7RUFFUixJQUFJVixRQUFRLEtBQUtsYyxTQUFTLEVBQUU7SUFDeEIsSUFBTTZjLFNBQVMsR0FBR25DLElBQUksQ0FBQ29DLEdBQUcsQ0FBQ3owQixDQUFDLEVBQUVvQixDQUFDLEdBQUcsQ0FBQyxFQUFFaEIsQ0FBQyxFQUFFZzBCLENBQUMsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLENBQUMsR0FBSVQsUUFBUSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSztJQUNsRlUsSUFBSSxHQUFHLElBQUlsQyxJQUFJLENBQUNtQyxTQUFTLENBQUM7RUFDOUIsQ0FBQyxNQUFNO0lBQ0hELElBQUksR0FBRyxJQUFJbEMsSUFBSSxDQUFDLENBQUM7SUFDakIsSUFBSTlFLElBQUksRUFBRWdILElBQUksQ0FBQ0csV0FBVyxDQUFDbkgsSUFBSSxDQUFDO0lBQ2hDLElBQUlELEtBQUssRUFBRWlILElBQUksQ0FBQ0ksUUFBUSxDQUFDckgsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQyxJQUFJRCxHQUFHLEVBQUVrSCxJQUFJLENBQUNLLE9BQU8sQ0FBQ3ZILEdBQUcsQ0FBQztJQUMxQmtILElBQUksQ0FBQ00sUUFBUSxDQUFDVCxDQUFDLENBQUM7SUFDaEJHLElBQUksQ0FBQ08sVUFBVSxDQUFDVCxHQUFHLENBQUM7SUFDcEJFLElBQUksQ0FBQ1EsVUFBVSxDQUFDVCxHQUFHLENBQUM7RUFDeEI7RUFFQSxJQUFJLENBQUMvRyxJQUFJLElBQUksQ0FBQ0QsS0FBSyxJQUFJLENBQUNELEdBQUcsRUFBRTtJQUN6QjtJQUNBLElBQUlrSCxJQUFJLEdBQUdQLEdBQUcsRUFBRTtNQUNaTyxJQUFJLENBQUNLLE9BQU8sQ0FBQ0wsSUFBSSxDQUFDSixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQztFQUNKO0VBRUEsT0FBT0ksSUFBSTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTXhqQixhQUFhLEdBQUc7RUFDbEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJaWtCLFFBQVEsRUFBRSxJQUFJQyxHQUFHLENBQUMsQ0FBQztFQUVuQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLEtBQUssRUFBRSxJQUFJO0VBRVg7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxRQUFRLEVBQUUsSUFBSTtFQUVkO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUMsWUFBWSxFQUFFLG1CQUFtQjtFQUVqQztBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLGtCQUFrQixFQUFFLHlCQUF5QjtFQUU3QztBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLG9CQUFvQixFQUFFLDJCQUEyQjtFQUVqRDtBQUNKO0FBQ0E7QUFDQTtFQUNJQyxTQUFTLEVBQUU7SUFDUEMsUUFBUSxFQUFFLGlDQUFpQztJQUMzQ25JLEdBQUcsRUFBRSwyQkFBMkI7SUFDaENvSSxRQUFRLEVBQUUsaUNBQWlDO0lBQzNDQyxRQUFRLEVBQUUsaUNBQWlDO0lBQzNDMUMsSUFBSSxFQUFFLDRCQUE0QjtJQUNsQzJDLFNBQVMsRUFBRSxrQ0FBa0M7SUFDN0NDLFNBQVMsRUFBRSxrQ0FBa0M7SUFDN0MzQyxNQUFNLEVBQUUsOEJBQThCO0lBQ3RDNEMsV0FBVyxFQUFFLG9DQUFvQztJQUNqREMsV0FBVyxFQUFFLG9DQUFvQztJQUNqRDVDLE1BQU0sRUFBRSw4QkFBOEI7SUFDdEM2QyxXQUFXLEVBQUUsb0NBQW9DO0lBQ2pEQyxXQUFXLEVBQUU7RUFDakIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUMsUUFBUSwwNkJBT1A7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLFNBQVMsRUFBRSxPQUFPO0VBRWxCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUMsWUFBWSxFQUFFLFlBQVk7RUFFMUI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxXQUFXLEVBQUUsU0FBUztFQUV0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLFlBQVksRUFBRTtJQUNWNWEsTUFBTSxFQUFFLFFBQVE7SUFDaEI0UixHQUFHLEVBQUUsS0FBSztJQUNWaUosSUFBSSxFQUFFLE1BQU07SUFDWnRELElBQUksRUFBRSxNQUFNO0lBQ1p1RCxLQUFLLEVBQUUsT0FBTztJQUNkdEQsTUFBTSxFQUFFLFFBQVE7SUFDaEJ1RCxPQUFPLEVBQUUsU0FBUztJQUNsQnRELE1BQU0sRUFBRSxRQUFRO0lBQ2hCdUQsT0FBTyxFQUFFO0VBQ2IsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJL2EsU0FBUyxXQUFUQSxTQUFTQSxDQUFBMVEsS0FBQSxFQVVEO0lBQUEsSUFBQUUsSUFBQSxHQUFBRixLQUFBLGNBQUosQ0FBQyxDQUFDLEdBQUFBLEtBQUE7TUFURm9xQixZQUFZLEdBQUFscUIsSUFBQSxDQUFaa3FCLFlBQVk7TUFDWkMsa0JBQWtCLEdBQUFucUIsSUFBQSxDQUFsQm1xQixrQkFBa0I7TUFDbEJFLFNBQVMsR0FBQXJxQixJQUFBLENBQVRxcUIsU0FBUztNQUNUVSxRQUFRLEdBQUEvcUIsSUFBQSxDQUFSK3FCLFFBQVE7TUFDUkMsU0FBUyxHQUFBaHJCLElBQUEsQ0FBVGdyQixTQUFTO01BQ1RDLFlBQVksR0FBQWpyQixJQUFBLENBQVppckIsWUFBWTtNQUNaQyxXQUFXLEdBQUFsckIsSUFBQSxDQUFYa3JCLFdBQVc7TUFDWEMsWUFBWSxHQUFBbnJCLElBQUEsQ0FBWm1yQixZQUFZO01BQ1o3YSxvQkFBb0IsR0FBQXRRLElBQUEsQ0FBcEJzUSxvQkFBb0I7SUFFcEIsSUFBSTRaLFlBQVksRUFBRTtNQUNkLElBQUksQ0FBQ0EsWUFBWSxHQUFHQSxZQUFZO0lBQ3BDO0lBRUEsSUFBSUMsa0JBQWtCLEVBQUU7TUFDcEIsSUFBSSxDQUFDQSxrQkFBa0IsR0FBR0Esa0JBQWtCO0lBQ2hEO0lBRUEsSUFBSUUsU0FBUyxFQUFFO01BQ1gsSUFBSSxDQUFDQSxTQUFTLEdBQUE1MUIsTUFBQSxDQUFBa2xCLE1BQUEsS0FBUSxJQUFJLENBQUMwUSxTQUFTLEVBQUtBLFNBQVMsQ0FBRTtJQUN4RDtJQUVBLElBQUlVLFFBQVEsRUFBRTtNQUNWLElBQUksQ0FBQ0EsUUFBUSxHQUFHQSxRQUFRO0lBQzVCO0lBRUEsSUFBSUMsU0FBUyxFQUFFO01BQ1gsSUFBSSxDQUFDQSxTQUFTLEdBQUdBLFNBQVM7SUFDOUI7SUFFQSxJQUFJQyxZQUFZLEVBQUU7TUFDZCxJQUFJLENBQUNBLFlBQVksR0FBR0EsWUFBWTtJQUNwQztJQUVBLElBQUlDLFdBQVcsRUFBRTtNQUNiLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQ2xDO0lBRUEsSUFBSUMsWUFBWSxFQUFFO01BQ2QsSUFBSSxDQUFDQSxZQUFZLEdBQUExMkIsTUFBQSxDQUFBa2xCLE1BQUEsS0FBUSxJQUFJLENBQUN3UixZQUFZLEVBQUtBLFlBQVksQ0FBRTtJQUNqRTtJQUVBLElBQUk3YSxvQkFBb0IsRUFBRTtNQUN0QixJQUFJO1FBQ0EsSUFBTWtiLElBQUksR0FBRy9uQixJQUFJLENBQUNtSCxLQUFLLENBQUMwRixvQkFBb0IsQ0FBQztRQUM3QyxJQUFNbWIsS0FBSyxHQUFHaDNCLE1BQU0sQ0FBQ2kzQixJQUFJLENBQUNGLElBQUksQ0FBQ0wsWUFBWSxDQUFDLENBQUNqVixNQUFNLENBQUMsVUFBQ3lWLE1BQU0sRUFBRXB5QixHQUFHLEVBQUs7VUFDakUsSUFBTXF5QixRQUFRLEdBQUdyeUIsR0FBRyxDQUFDSixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUN5aEIsR0FBRyxDQUFDLENBQUM7VUFDckM7VUFDQStRLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLEdBQUdKLElBQUksQ0FBQ0wsWUFBWSxDQUFDNXhCLEdBQUcsQ0FBQztVQUN6QyxPQUFPb3lCLE1BQU07UUFDakIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRU4sSUFBSSxDQUFDUixZQUFZLEdBQUExMkIsTUFBQSxDQUFBa2xCLE1BQUEsS0FBUSxJQUFJLENBQUN3UixZQUFZLEVBQUtNLEtBQUssQ0FBRTtNQUMxRCxDQUFDLENBQUMsT0FBT3hkLEtBQUssRUFBRTtRQUNaO01BQUE7SUFFUjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSXdDLEdBQUcsV0FBSEEsR0FBR0EsQ0FBQ2hWLEdBQUcsRUFBRTR0QixJQUFJLEVBQVM7SUFBQSxJQUFBbHhCLEtBQUE7SUFBQSxJQUFia3hCLElBQUk7TUFBSkEsSUFBSSxHQUFHLElBQUk7SUFBQTtJQUNoQixJQUFJd0MsU0FBUyxHQUFHeEMsSUFBSSxJQUFJNXRCLEdBQUcsQ0FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUNzeEIsWUFBWSxDQUFDO0lBQ25ELElBQUkyQixTQUFTLElBQUksT0FBT0EsU0FBUyxLQUFLLFFBQVEsRUFBRUEsU0FBUyxHQUFHakQsa0JBQWtCLENBQUNpRCxTQUFTLENBQUM7SUFDekYsSUFBSSxDQUFDQSxTQUFTLEVBQUU7SUFDaEJwd0IsR0FBRyxDQUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQ3N4QixZQUFZLEVBQUUyQixTQUFTLENBQUMsQ0FBQzdwQixJQUFJLENBQUMsSUFBSSxDQUFDK29CLFFBQVEsQ0FBQyxDQUNyRHB3QixHQUFHLENBQUMsQ0FBQyxDQUFDMmIsT0FBTyxDQUFDLFVBQUEzQyxFQUFFO01BQUEsT0FBSXhiLEtBQUksQ0FBQzJ4QixRQUFRLENBQUNyWixHQUFHLENBQUNrRCxFQUFFLENBQUM7SUFBQSxFQUFDO0lBQy9DLElBQUksQ0FBQ21ZLE9BQU8sQ0FBQ3J3QixHQUFHLENBQUM7SUFDakIsSUFBSSxDQUFDc3dCLEtBQUssQ0FBQyxDQUFDO0VBQ2hCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lELE9BQU8sV0FBUEEsT0FBT0EsQ0FBQ3J3QixHQUFHLEVBQUU7SUFBQSxJQUFBWSxNQUFBO0lBQ1QsSUFBSSxDQUFDa1EsTUFBTSxDQUFDeWYsb0JBQW9CLEVBQUU7TUFDOUI7TUFDQXZ3QixHQUFHLENBQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDdXhCLGtCQUFrQixFQUFFLElBQUksQ0FBQztNQUN2QztJQUNKLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDRixRQUFRLEVBQUU7TUFDdkI7TUFDQSxJQUFJLENBQUNBLFFBQVEsR0FBRyxJQUFJK0Isb0JBQW9CLENBQUMsVUFBQWpVLE9BQU8sRUFBSTtRQUNoREEsT0FBTyxDQUFDekIsT0FBTyxDQUFDLFVBQUEyVixLQUFLLEVBQUk7VUFDckJsMEIsQ0FBQyxDQUFDazBCLEtBQUssQ0FBQ3h5QixNQUFNLENBQUMsQ0FBQ2IsSUFBSSxDQUFDeUQsTUFBSSxDQUFDOHRCLGtCQUFrQixFQUFFOEIsS0FBSyxDQUFDQyxjQUFjLENBQUM7VUFDbkU7UUFDSixDQUFDLENBQUM7TUFDTixDQUFDLEVBQUU7UUFDQ0MsSUFBSSxFQUFFLElBQUk7UUFBRTtRQUNaQyxTQUFTLEVBQUUsQ0FBQyxDQUFFO01BQ2xCLENBQUMsQ0FBQztJQUNOO0lBRUEzd0IsR0FBRyxDQUFDZCxHQUFHLENBQUMsQ0FBQyxDQUFDMmIsT0FBTyxDQUFDLFVBQUEzQyxFQUFFO01BQUEsT0FBSXRYLE1BQUksQ0FBQzR0QixRQUFRLENBQUM2QixPQUFPLENBQUNuWSxFQUFFLENBQUM7SUFBQSxFQUFDO0VBQ3RELENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0kwWSxTQUFTLFdBQVRBLFNBQVNBLENBQUMxWSxFQUFFLEVBQUU7SUFDVixJQUFJLElBQUksQ0FBQ3NXLFFBQVEsRUFBRTtNQUNmLElBQUksQ0FBQ0EsUUFBUSxDQUFDb0MsU0FBUyxDQUFDMVksRUFBRSxDQUFDO01BQzNCO0lBQ0o7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0kyWSxtQkFBbUIsV0FBbkJBLG1CQUFtQkEsQ0FBQzd3QixHQUFHLEVBQUU7SUFDckIsT0FBT0EsR0FBRyxDQUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQ3V4QixrQkFBa0IsQ0FBQyxJQUFJMXVCLEdBQUcsQ0FBQ2pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7RUFDbEUsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0l1eUIsS0FBSyxXQUFMQSxLQUFLQSxDQUFBLEVBQUc7SUFBQSxJQUFBL3VCLE1BQUE7SUFDSixJQUFJLENBQUMsSUFBSSxDQUFDZ3RCLEtBQUssSUFBSSxJQUFJLENBQUNGLFFBQVEsQ0FBQ3lDLElBQUksR0FBRyxDQUFDLEVBQUU7TUFDdkMsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQztNQUNWLElBQUksQ0FBQ3hDLEtBQUssR0FBR3RxQixXQUFXLENBQUM7UUFBQSxPQUFNMUMsTUFBSSxDQUFDd3ZCLEdBQUcsQ0FBQyxDQUFDO01BQUEsR0FBRSxJQUFJLENBQUM7SUFDcEQ7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSUMsSUFBSSxXQUFKQSxJQUFJQSxDQUFBLEVBQUc7SUFDSGp0QixhQUFhLENBQUMsSUFBSSxDQUFDd3FCLEtBQUssQ0FBQztJQUN6QixJQUFJLENBQUNBLEtBQUssR0FBRyxJQUFJO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDeUMsVUFBVSxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDekMsUUFBUSxHQUFHLElBQUk7SUFDcEI7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSXVDLEdBQUcsV0FBSEEsR0FBR0EsQ0FBQSxFQUFHO0lBQUEsSUFBQTd0QixNQUFBO0lBQ0YsSUFBSSxDQUFDbXJCLFFBQVEsQ0FBQ3hULE9BQU8sQ0FBQyxVQUFBM0MsRUFBRSxFQUFJO01BQ3hCO01BQ0EsSUFBSSxDQUFDcFgsUUFBUSxDQUFDb3dCLElBQUksQ0FBQ0MsUUFBUSxDQUFDalosRUFBRSxDQUFDLEVBQUU7UUFDN0JoVixNQUFJLENBQUNtckIsUUFBUSxVQUFPLENBQUNuVyxFQUFFLENBQUM7UUFDeEJoVixNQUFJLENBQUMwdEIsU0FBUyxDQUFDMVksRUFBRSxDQUFDO1FBQ2xCO01BQ0o7TUFFQSxJQUFNbFksR0FBRyxHQUFHMUQsQ0FBQyxDQUFDNGIsRUFBRSxDQUFDO01BQ2pCLElBQU0wVixJQUFJLEdBQUc1dEIsR0FBRyxDQUFDN0MsSUFBSSxDQUFDK0YsTUFBSSxDQUFDdXJCLFlBQVksQ0FBQzs7TUFFeEM7TUFDQSxJQUFJLENBQUNiLElBQUksSUFBSSxDQUFDMXFCLE1BQUksQ0FBQzJ0QixtQkFBbUIsQ0FBQzd3QixHQUFHLENBQUMsRUFBRTtRQUN6QztNQUNKO01BRUEsSUFBTXF0QixHQUFHLEdBQUcsSUFBSTNCLElBQUksQ0FBQyxDQUFDO01BRXRCLElBQUlrQyxJQUFJLElBQUlQLEdBQUcsRUFBRTtRQUNiO1FBQ0FydEIsR0FBRyxDQUFDZ0IsUUFBUSxDQUFDa0MsTUFBSSxDQUFDc3NCLFlBQVksQ0FBQztRQUMvQnRzQixNQUFJLENBQUNtckIsUUFBUSxVQUFPLENBQUNuVyxFQUFFLENBQUM7UUFDeEJoVixNQUFJLENBQUMwdEIsU0FBUyxDQUFDMVksRUFBRSxDQUFDO1FBQ2xCO01BQ0o7O01BRUE7TUFDQSxJQUFNa1osSUFBSSxHQUFHeEQsSUFBSSxHQUFHUCxHQUFHO01BQ3ZCLElBQU1zQyxJQUFJLEdBQUcvWSxJQUFJLENBQUN5YSxLQUFLLENBQUNELElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztNQUNyRCxJQUFNeEIsS0FBSyxHQUFHaFosSUFBSSxDQUFDeWEsS0FBSyxDQUFFRCxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUssSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztNQUMzRSxJQUFNdkIsT0FBTyxHQUFHalosSUFBSSxDQUFDeWEsS0FBSyxDQUFFRCxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7TUFDbkUsSUFBTXRCLE9BQU8sR0FBR2xaLElBQUksQ0FBQ3lhLEtBQUssQ0FBRUQsSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsR0FBSSxJQUFJLENBQUM7TUFFdkQsSUFBTUUsU0FBUyxHQUFHdHhCLEdBQUcsQ0FBQ3JELElBQUksQ0FBQ3VHLE1BQUksQ0FBQzByQixTQUFTLENBQUNDLFFBQVEsQ0FBQztNQUNuRCxJQUFNMEMsSUFBSSxHQUFHdnhCLEdBQUcsQ0FBQ3JELElBQUksQ0FBQ3VHLE1BQUksQ0FBQzByQixTQUFTLENBQUNsSSxHQUFHLENBQUM7TUFDekMsSUFBTThLLFNBQVMsR0FBR3h4QixHQUFHLENBQUNyRCxJQUFJLENBQUN1RyxNQUFJLENBQUMwckIsU0FBUyxDQUFDRSxRQUFRLENBQUM7TUFDbkQsSUFBTTJDLFNBQVMsR0FBR3p4QixHQUFHLENBQUNyRCxJQUFJLENBQUN1RyxNQUFJLENBQUMwckIsU0FBUyxDQUFDRyxRQUFRLENBQUM7TUFDbkQsSUFBTTJDLEtBQUssR0FBRzF4QixHQUFHLENBQUNyRCxJQUFJLENBQUN1RyxNQUFJLENBQUMwckIsU0FBUyxDQUFDdkMsSUFBSSxDQUFDO01BQzNDLElBQU1zRixVQUFVLEdBQUczeEIsR0FBRyxDQUFDckQsSUFBSSxDQUFDdUcsTUFBSSxDQUFDMHJCLFNBQVMsQ0FBQ0ksU0FBUyxDQUFDO01BQ3JELElBQU00QyxVQUFVLEdBQUc1eEIsR0FBRyxDQUFDckQsSUFBSSxDQUFDdUcsTUFBSSxDQUFDMHJCLFNBQVMsQ0FBQ0ssU0FBUyxDQUFDO01BQ3JELElBQU00QyxPQUFPLEdBQUc3eEIsR0FBRyxDQUFDckQsSUFBSSxDQUFDdUcsTUFBSSxDQUFDMHJCLFNBQVMsQ0FBQ3RDLE1BQU0sQ0FBQztNQUMvQyxJQUFNd0YsWUFBWSxHQUFHOXhCLEdBQUcsQ0FBQ3JELElBQUksQ0FBQ3VHLE1BQUksQ0FBQzByQixTQUFTLENBQUNNLFdBQVcsQ0FBQztNQUN6RCxJQUFNNkMsWUFBWSxHQUFHL3hCLEdBQUcsQ0FBQ3JELElBQUksQ0FBQ3VHLE1BQUksQ0FBQzByQixTQUFTLENBQUNPLFdBQVcsQ0FBQztNQUN6RCxJQUFNNkMsT0FBTyxHQUFHaHlCLEdBQUcsQ0FBQ3JELElBQUksQ0FBQ3VHLE1BQUksQ0FBQzByQixTQUFTLENBQUNyQyxNQUFNLENBQUM7TUFDL0MsSUFBTTBGLFlBQVksR0FBR2p5QixHQUFHLENBQUNyRCxJQUFJLENBQUN1RyxNQUFJLENBQUMwckIsU0FBUyxDQUFDUSxXQUFXLENBQUM7TUFDekQsSUFBTThDLFlBQVksR0FBR2x5QixHQUFHLENBQUNyRCxJQUFJLENBQUN1RyxNQUFJLENBQUMwckIsU0FBUyxDQUFDUyxXQUFXLENBQUM7TUFFekQsSUFBTUssWUFBWSxHQUFBMTJCLE1BQUEsQ0FBQWtsQixNQUFBLEtBQVFoYixNQUFJLENBQUN3c0IsWUFBWSxFQUFLMXZCLEdBQUcsQ0FBQzdDLElBQUksQ0FBQytGLE1BQUksQ0FBQ3lyQixvQkFBb0IsQ0FBQyxDQUFFO01BRXJGM3VCLEdBQUcsQ0FBQ2dCLFFBQVEsQ0FBQ2tDLE1BQUksQ0FBQ3VzQixXQUFXLENBQUM7TUFDOUI2QixTQUFTLENBQUMvcUIsSUFBSSxDQUFDbXBCLFlBQVksQ0FBQzVhLE1BQU0sQ0FBQztNQUNuQzBjLFNBQVMsQ0FBQ255QixJQUFJLENBQUNzd0IsSUFBSSxDQUFDO01BQ3BCOEIsU0FBUyxDQUFDbHJCLElBQUksQ0FBQ29wQixJQUFJLEtBQUssQ0FBQyxHQUFHRCxZQUFZLENBQUNoSixHQUFHLEdBQUdnSixZQUFZLENBQUNDLElBQUksQ0FBQztNQUNqRTRCLElBQUksQ0FBQ1ksV0FBVyxDQUFDanZCLE1BQUksQ0FBQ3FzQixTQUFTLEVBQUVJLElBQUksS0FBSyxDQUFDLENBQUM7TUFDNUNnQyxVQUFVLENBQUN0eUIsSUFBSSxDQUFDdXdCLEtBQUssQ0FBQztNQUN0QmdDLFVBQVUsQ0FBQ3JyQixJQUFJLENBQUNxcEIsS0FBSyxLQUFLLENBQUMsR0FBR0YsWUFBWSxDQUFDckQsSUFBSSxHQUFHcUQsWUFBWSxDQUFDRSxLQUFLLENBQUM7TUFDckU4QixLQUFLLENBQUNTLFdBQVcsQ0FBQ2p2QixNQUFJLENBQUNxc0IsU0FBUyxFQUFFSSxJQUFJLEtBQUssQ0FBQyxJQUFJQyxLQUFLLEtBQUssQ0FBQyxDQUFDO01BQzVEa0MsWUFBWSxDQUFDenlCLElBQUksQ0FBQ3d3QixPQUFPLENBQUM7TUFDMUJrQyxZQUFZLENBQUN4ckIsSUFBSSxDQUFDc3BCLE9BQU8sS0FBSyxDQUFDLEdBQUdILFlBQVksQ0FBQ3BELE1BQU0sR0FBR29ELFlBQVksQ0FBQ0csT0FBTyxDQUFDO01BQzdFZ0MsT0FBTyxDQUFDTSxXQUFXLENBQUNqdkIsTUFBSSxDQUFDcXNCLFNBQVMsRUFBRUksSUFBSSxLQUFLLENBQUMsSUFBSUMsS0FBSyxLQUFLLENBQUMsSUFBSUMsT0FBTyxLQUFLLENBQUMsQ0FBQztNQUMvRW9DLFlBQVksQ0FBQzV5QixJQUFJLENBQUN5d0IsT0FBTyxDQUFDO01BQzFCb0MsWUFBWSxDQUFDM3JCLElBQUksQ0FBQ3VwQixPQUFPLEtBQUssQ0FBQyxHQUFHSixZQUFZLENBQUNuRCxNQUFNLEdBQUdtRCxZQUFZLENBQUNJLE9BQU8sQ0FBQztNQUM3RWtDLE9BQU8sQ0FBQ0csV0FBVyxDQUFDanZCLE1BQUksQ0FBQ3FzQixTQUFTLEVBQUVJLElBQUksS0FBSyxDQUFDLElBQUlDLEtBQUssS0FBSyxDQUFDLElBQUlDLE9BQU8sS0FBSyxDQUFDLElBQUlDLE9BQU8sS0FBSyxDQUFDLENBQUM7SUFDcEcsQ0FBQyxDQUFDO0lBRUYsSUFBSSxJQUFJLENBQUN6QixRQUFRLENBQUN5QyxJQUFJLEtBQUssQ0FBQyxFQUFFO01BQzFCLElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUM7SUFDZjtFQUNKO0FBQ0osQ0FBQztBQUVELGlFQUFlNW1CLGFBQWEsRTs7Ozs7Ozs7Ozs7Ozs7QUM1akJyQixJQUFNZ29CLFlBQVksR0FBRztFQUN4QkMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFLEVBQUU7RUFDUkMsRUFBRSxFQUFFLEVBQUU7RUFDTkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFO0FBQ1YsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFUDBDO0FBRTNDLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUlDLGNBQWMsRUFBRUMsT0FBTyxFQUFLO0VBQ3JERCxjQUFjLENBQUNwZixJQUFJLENBQUMsVUFBQ3NmLEdBQUcsRUFBRUMsSUFBSSxFQUFLO0lBQy9CLElBQU1DLEtBQUssR0FBRzMyQixDQUFDLENBQUMwMkIsSUFBSSxDQUFDO0lBQ3JCLElBQUlELEdBQUcsS0FBS0QsT0FBTyxFQUFFO01BQ2pCRyxLQUFLLENBQUNqMEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQytRLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO01BQ3hEO0lBQ0o7SUFFQWtqQixLQUFLLENBQUNqMEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQytRLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUN6TyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3ZFMnhCLEtBQUssQ0FBQzN4QixPQUFPLENBQUMsUUFBUSxDQUFDO0VBQzNCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCxJQUFNNHhCLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBMkJBLENBQUlDLFdBQVcsRUFBRUMsVUFBVSxFQUFLO0VBQzdELFFBQVEsSUFBSTtJQUNaLEtBQUtBLFVBQVUsR0FBR0QsV0FBVztNQUFFLE9BQU8sQ0FBQztJQUN2QyxLQUFLQyxVQUFVLEdBQUcsQ0FBQztNQUFFLE9BQU9ELFdBQVc7SUFDdkM7TUFBUyxPQUFPQyxVQUFVO0VBQzFCO0FBQ0osQ0FBQztBQUVELElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUdSLGNBQWM7RUFBQSxPQUFJLFVBQUExNkIsQ0FBQyxFQUFJO0lBQzdDLElBQVFtN0IsT0FBTyxHQUFLbjdCLENBQUMsQ0FBYm03QixPQUFPO0lBQ2YsSUFBTVIsT0FBTyxHQUFHRCxjQUFjLENBQUN6bkIsS0FBSyxDQUFDalQsQ0FBQyxDQUFDOEUsYUFBYSxDQUFDO0lBQ3JELElBQU1zMkIscUJBQXFCLEdBQUdWLGNBQWMsQ0FBQ2w1QixNQUFNLEdBQUcsQ0FBQztJQUV2RCxJQUFJWCxNQUFNLENBQUN3Z0IsTUFBTSxDQUFDNFksb0RBQVksQ0FBQyxDQUFDNXZCLFFBQVEsQ0FBQzh3QixPQUFPLENBQUMsRUFBRTtNQUMvQ243QixDQUFDLENBQUM0RSxjQUFjLENBQUMsQ0FBQztNQUNsQjVFLENBQUMsQ0FBQ3E3QixlQUFlLENBQUMsQ0FBQztJQUN2QjtJQUVBLFFBQVFGLE9BQU87TUFDZixLQUFLbEIsb0RBQVksQ0FBQ0csSUFBSTtNQUN0QixLQUFLSCxvREFBWSxDQUFDSSxFQUFFO1FBQUU7VUFDbEIsSUFBTWlCLFdBQVcsR0FBR1AsMkJBQTJCLENBQUNLLHFCQUFxQixFQUFFVCxPQUFPLEdBQUcsQ0FBQyxDQUFDO1VBQ25GRCxjQUFjLENBQUMzekIsR0FBRyxDQUFDdTBCLFdBQVcsQ0FBQyxDQUFDbnlCLE9BQU8sQ0FBQyxPQUFPLENBQUM7VUFDaERzeEIsbUJBQW1CLENBQUNDLGNBQWMsRUFBRUMsT0FBTyxHQUFHLENBQUMsQ0FBQztVQUNoRDtRQUNKO01BQ0EsS0FBS1Ysb0RBQVksQ0FBQ0ssS0FBSztNQUN2QixLQUFLTCxvREFBWSxDQUFDTSxJQUFJO1FBQUU7VUFDcEIsSUFBTWdCLFdBQVcsR0FBR1IsMkJBQTJCLENBQUNLLHFCQUFxQixFQUFFVCxPQUFPLEdBQUcsQ0FBQyxDQUFDO1VBQ25GRCxjQUFjLENBQUMzekIsR0FBRyxDQUFDdzBCLFdBQVcsQ0FBQyxDQUFDcHlCLE9BQU8sQ0FBQyxPQUFPLENBQUM7VUFDaERzeEIsbUJBQW1CLENBQUNDLGNBQWMsRUFBRUMsT0FBTyxHQUFHLENBQUMsQ0FBQztVQUNoRDtRQUNKO01BRUE7UUFBUztJQUNUO0VBQ0osQ0FBQztBQUFBO0FBRUQsaUVBQWUsVUFBQ2EsVUFBVSxFQUFFQyxZQUFZLEVBQUs7RUFDekMsSUFBTUMsZUFBZSxHQUFHRixVQUFVLENBQUNoM0IsSUFBSSxDQUFDaTNCLFlBQVksQ0FBQztFQUVyREQsVUFBVSxDQUFDOTJCLEVBQUUsQ0FBQyxTQUFTLEVBQUUrMkIsWUFBWSxFQUFFUCxpQkFBaUIsQ0FBQ1EsZUFBZSxDQUFDLENBQUM7QUFDOUUsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pERDtBQUMwQztBQUUxQyxJQUFNQyxlQUFlLEdBQUc7RUFDcEJDLFVBQVUsRUFBRSxZQUFZO0VBQ3hCQyxVQUFVLEVBQUUsWUFBWTtFQUN4QkMsWUFBWSxFQUFFLGNBQWM7RUFDNUJDLGNBQWMsRUFBRSxnQkFBZ0I7RUFDaENDLFFBQVEsRUFBRSxVQUFVO0VBQ3BCQyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxVQUFVLEVBQUUsWUFBWTtFQUN4QkMsYUFBYSxFQUFFLGVBQWU7RUFDOUJDLFNBQVMsRUFBRSxXQUFXO0VBQ3RCQyxNQUFNLEVBQUUsUUFBUTtFQUNoQkMsWUFBWSxFQUFFO0FBQ2xCLENBQUM7QUFFTSxTQUFTQyxxQkFBcUJBLENBQUNDLG9CQUFvQixFQUFFO0VBQUEsSUFBQWo0QixLQUFBO0VBQ3hELE9BQU8sVUFBQ3FXLEdBQUcsRUFBRTNCLFFBQVEsRUFBSztJQUN0QixJQUFNd2pCLGNBQWMsR0FBR3hqQixRQUFRLENBQUNqVSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzFDLElBQU0wM0IsaUJBQWlCLEdBQUd6akIsUUFBUSxDQUFDMGpCLE9BQU8sSUFBSSxDQUFDLENBQUM7SUFFaERwNEIsS0FBSSxDQUFDcTRCLHVCQUF1QixDQUFDSCxjQUFjLENBQUM7SUFDNUMsSUFBSUQsb0JBQW9CLEVBQUU7TUFDdEJqNEIsS0FBSSxDQUFDdVksVUFBVSxDQUFDMmYsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQztJQUN0RCxDQUFDLE1BQU07TUFDSG40QixLQUFJLENBQUNpVCw2QkFBNkIsQ0FBQ2lsQixjQUFjLENBQUM7SUFDdEQ7RUFDSixDQUFDO0FBQ0w7QUFBQyxJQUVvQkksa0JBQWtCO0VBQ25DLFNBQUFBLG1CQUFZNXdCLE1BQU0sRUFBRWlOLE9BQU8sRUFBRTtJQUFBLElBQUF6USxNQUFBO0lBQ3pCLElBQUksQ0FBQ3dELE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNpTixPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDNGpCLG1CQUFtQixDQUFDLENBQUM7SUFDMUI7SUFDQSxJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRXJCNTRCLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDbVgsSUFBSSxDQUFDLFVBQUMwaEIsRUFBRSxFQUFFbjdCLEtBQUssRUFBSztNQUM5QyxJQUFNaVksSUFBSSxHQUFHalksS0FBSyxDQUFDa1ksWUFBWSxDQUFDLHdCQUF3QixDQUFDO01BRXpEdFIsTUFBSSxDQUFDdzBCLDZCQUE2QixDQUFDcDdCLEtBQUssRUFBRWlZLElBQUksQ0FBQztJQUNuRCxDQUFDLENBQUM7RUFDTjtFQUFDLElBQUF6VixNQUFBLEdBQUF3NEIsa0JBQUEsQ0FBQW44QixTQUFBO0VBQUEyRCxNQUFBLENBRUQ0NEIsNkJBQTZCLEdBQTdCLFNBQUFBLDZCQUE2QkEsQ0FBQ0MsY0FBYyxFQUFFQyxXQUFXLEVBQUU7SUFDdkQsUUFBUUEsV0FBVztNQUNuQixLQUFLeEIsZUFBZSxDQUFDUyxTQUFTO01BQzlCLEtBQUtULGVBQWUsQ0FBQ1UsTUFBTTtRQUFFO1VBQ3pCN0IsdURBQWdCLENBQUNyMkIsQ0FBQyxDQUFDKzRCLGNBQWMsQ0FBQyxFQUFFLGNBQWMsQ0FBQztVQUNuRDtRQUNKO01BRUE7UUFBUztJQUNUO0VBQ0o7O0VBRUE7QUFDSjtBQUNBLEtBRkk7RUFBQTc0QixNQUFBLENBR0F5NEIsbUJBQW1CLEdBQW5CLFNBQUFBLG1CQUFtQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQTF6QixNQUFBO0lBQ2xCakYsQ0FBQyxDQUFDLDhDQUE4QyxFQUFFLElBQUksQ0FBQzhILE1BQU0sQ0FBQyxDQUFDcVAsSUFBSSxDQUFDLFVBQUM5YSxDQUFDLEVBQUU0OEIsS0FBSyxFQUFLO01BQzlFLElBQU1DLE1BQU0sR0FBR2w1QixDQUFDLENBQUNpNUIsS0FBSyxDQUFDOztNQUV2QjtNQUNBLElBQUlDLE1BQU0sQ0FBQ3gyQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUtnUyxTQUFTLEVBQUU7UUFDekN3a0IsTUFBTSxDQUFDMzRCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBTTtVQUNyQixJQUFJMjRCLE1BQU0sQ0FBQ3I0QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQy9CcTRCLE1BQU0sQ0FBQ3psQixJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztZQUM3QnlsQixNQUFNLENBQUNyNEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7WUFFM0JxNEIsTUFBTSxDQUFDbDBCLE9BQU8sQ0FBQyxRQUFRLENBQUM7VUFDNUIsQ0FBQyxNQUFNO1lBQ0hrMEIsTUFBTSxDQUFDcjRCLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1VBQzlCO1VBRUFvRSxNQUFJLENBQUMwekIsbUJBQW1CLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUM7TUFDTjtNQUVBTyxNQUFNLENBQUN4MkIsSUFBSSxDQUFDLFlBQVksRUFBRXcyQixNQUFNLENBQUN6bEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQztFQUNOOztFQUVBO0FBQ0o7QUFDQTtBQUNBLEtBSEk7RUFBQXZULE1BQUEsQ0FJQXU0Qix1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDNTNCLElBQUksRUFBRTtJQUFBLElBQUErRixNQUFBO0lBQzFCLElBQU11eUIsUUFBUSxHQUFHdDRCLElBQUksQ0FBQ3U0QixxQkFBcUI7SUFDM0MsSUFBTUMsVUFBVSxHQUFHeDRCLElBQUksQ0FBQ3k0QixtQkFBbUI7SUFDM0MsSUFBTUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDeGtCLE9BQU8sQ0FBQ3drQix3QkFBd0I7SUFDdEUsSUFBSUMsaUJBQWlCLEdBQUczNEIsSUFBSSxDQUFDNDRCLG9CQUFvQjtJQUVqRCxJQUFJTixRQUFRLEtBQUssYUFBYSxJQUFJQSxRQUFRLEtBQUssY0FBYyxFQUFFO01BQzNEO0lBQ0o7SUFFQSxJQUFJSyxpQkFBaUIsRUFBRTtNQUNuQkEsaUJBQWlCLFVBQVFBLGlCQUFpQixNQUFHO0lBQ2pELENBQUMsTUFBTTtNQUNIQSxpQkFBaUIsVUFBUUQsd0JBQXdCLE1BQUc7SUFDeEQ7SUFFQXY1QixDQUFDLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDOEgsTUFBTSxDQUFDLENBQUNxUCxJQUFJLENBQUMsVUFBQzlhLENBQUMsRUFBRXE5QixTQUFTLEVBQUs7TUFDcEUsSUFBTUMsVUFBVSxHQUFHMzVCLENBQUMsQ0FBQzA1QixTQUFTLENBQUM7TUFDL0IsSUFBTUUsTUFBTSxHQUFHcEosUUFBUSxDQUFDbUosVUFBVSxDQUFDOTRCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUdyRSxJQUFJdzRCLFVBQVUsQ0FBQ3BwQixPQUFPLENBQUMycEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDbkNoekIsTUFBSSxDQUFDaXpCLGVBQWUsQ0FBQ0YsVUFBVSxFQUFFUixRQUFRLEVBQUVLLGlCQUFpQixDQUFDO01BQ2pFLENBQUMsTUFBTTtRQUNINXlCLE1BQUksQ0FBQ2t6QixnQkFBZ0IsQ0FBQ0gsVUFBVSxFQUFFUixRQUFRLEVBQUVLLGlCQUFpQixDQUFDO01BQ2xFO0lBQ0osQ0FBQyxDQUFDO0VBQ047O0VBRUE7QUFDSjtBQUNBLEtBRkk7RUFBQXQ1QixNQUFBLENBR0EwNEIsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUEsRUFBRztJQUNiLElBQUlwa0IsTUFBTSxDQUFDdWxCLFFBQVEsQ0FBQ0MsSUFBSSxJQUFJeGxCLE1BQU0sQ0FBQ3VsQixRQUFRLENBQUNDLElBQUksQ0FBQy9wQixPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO01BQ3JFLElBQU1ncUIsVUFBVSxHQUFHajZCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQ2s2QixHQUFHLGFBQVcxbEIsTUFBTSxDQUFDdWxCLFFBQVEsQ0FBQ0MsSUFBSSxPQUFJLENBQUM7TUFDckUsSUFBTUcsV0FBVyxHQUFHbjZCLENBQUMsTUFBSXdVLE1BQU0sQ0FBQ3VsQixRQUFRLENBQUNDLElBQU0sQ0FBQztNQUVoRCxJQUFJQyxVQUFVLENBQUM1OEIsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN2QjQ4QixVQUFVLENBQUM1NUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUNsQndFLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDeEJxMUIsR0FBRyxhQUFXMWxCLE1BQU0sQ0FBQ3VsQixRQUFRLENBQUNDLElBQUksT0FBSSxDQUFDLENBQ3ZDdDFCLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFFMUJ5MUIsV0FBVyxDQUFDejFCLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FDNUIwMUIsUUFBUSxDQUFDLENBQUMsQ0FDVnYxQixXQUFXLENBQUMsV0FBVyxDQUFDO01BQ2pDO0lBQ0o7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMSTtFQUFBM0UsTUFBQSxDQU1BNlMsWUFBWSxHQUFaLFNBQUFBLFlBQVlBLENBQUNqTCxNQUFNLEVBQUU7SUFDakIsT0FBTztNQUNId2xCLFlBQVksRUFBRTtRQUNWeFQsSUFBSSxFQUFFOVosQ0FBQyxDQUFDLGlCQUFpQixFQUFFOEgsTUFBTSxDQUFDO1FBQ2xDaVMsS0FBSyxFQUFFL1osQ0FBQyxDQUFDLCtCQUErQixFQUFFOEgsTUFBTTtNQUNwRCxDQUFDO01BQ0QybEIsZUFBZSxFQUFFO1FBQ2IzVCxJQUFJLEVBQUU5WixDQUFDLENBQUMsb0JBQW9CLEVBQUU4SCxNQUFNLENBQUM7UUFDckNpUyxLQUFLLEVBQUUvWixDQUFDLENBQUMsa0NBQWtDLEVBQUU4SCxNQUFNO01BQ3ZELENBQUM7TUFDRHV5QixVQUFVLEVBQUU7UUFDUnZnQixJQUFJLEVBQUU5WixDQUFDLENBQUMscUJBQXFCLEVBQUU4SCxNQUFNLENBQUM7UUFDdENpUyxLQUFLLEVBQUUvWixDQUFDLENBQUMsNkJBQTZCLEVBQUU4SCxNQUFNO01BQ2xELENBQUM7TUFDRHd5QixhQUFhLEVBQUU7UUFDWHhnQixJQUFJLEVBQUU5WixDQUFDLENBQUMsd0JBQXdCLEVBQUU4SCxNQUFNLENBQUM7UUFDekNpUyxLQUFLLEVBQUUvWixDQUFDLENBQUMsc0NBQXNDLEVBQUU4SCxNQUFNO01BQzNELENBQUM7TUFDRHl5QixjQUFjLEVBQUU7UUFDWnpnQixJQUFJLEVBQUU5WixDQUFDLENBQUMsMEJBQTBCLEVBQUU4SCxNQUFNLENBQUM7UUFDM0NpUyxLQUFLLEVBQUUvWixDQUFDLENBQUMsd0NBQXdDLEVBQUU4SCxNQUFNO01BQzdELENBQUM7TUFDRDB5QixpQkFBaUIsRUFBRTtRQUNmMWdCLElBQUksRUFBRTlaLENBQUMsQ0FBQyw2QkFBNkIsRUFBRThILE1BQU0sQ0FBQztRQUM5Q2lTLEtBQUssRUFBRS9aLENBQUMsQ0FBQywyQ0FBMkMsRUFBRThILE1BQU07TUFDaEUsQ0FBQztNQUNEMnlCLFVBQVUsRUFBRTtRQUNSM2dCLElBQUksRUFBRTlaLENBQUMsQ0FBQyx3QkFBd0IsRUFBRThILE1BQU0sQ0FBQztRQUN6Q2lTLEtBQUssRUFBRS9aLENBQUMsQ0FBQyw0QkFBNEIsRUFBRThILE1BQU07TUFDakQsQ0FBQztNQUNENHlCLGFBQWEsRUFBRTtRQUNYM2dCLEtBQUssRUFBRS9aLENBQUMsQ0FBQyxrQkFBa0IsRUFBRThILE1BQU07TUFDdkMsQ0FBQztNQUNENnlCLFVBQVUsRUFBRTtRQUNSNWdCLEtBQUssRUFBRS9aLENBQUMsQ0FBQyxjQUFjLEVBQUU4SCxNQUFNO01BQ25DLENBQUM7TUFDRDh5QixPQUFPLEVBQUU1NkIsQ0FBQyxDQUFDLHlDQUF5QyxFQUFFOEgsTUFBTSxDQUFDO01BQzdEK3lCLFdBQVcsRUFBRTc2QixDQUFDLENBQUMsZ0NBQWdDLEVBQUU4SCxNQUFNLENBQUM7TUFDeERnekIsVUFBVSxFQUFFOTZCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRThILE1BQU0sQ0FBQztNQUMvQ2l6QixjQUFjLEVBQUUvNkIsQ0FBQyxDQUFDLDBCQUEwQixFQUFFOEgsTUFBTSxDQUFDO01BQ3JEa3pCLGtCQUFrQixFQUFFaDdCLENBQUMsQ0FBQywyQ0FBMkMsRUFBRThILE1BQU0sQ0FBQztNQUMxRW16QixLQUFLLEVBQUU7UUFDSDVELFVBQVUsRUFBRXIzQixDQUFDLENBQUMsb0JBQW9CLEVBQUU4SCxNQUFNLENBQUM7UUFDM0NvekIsTUFBTSxFQUFFbDdCLENBQUMsQ0FBQyxzQkFBc0IsRUFBRThILE1BQU07TUFDNUMsQ0FBQztNQUNEcXpCLEdBQUcsRUFBRTtRQUNEOVMsTUFBTSxFQUFFcm9CLENBQUMsQ0FBQyxjQUFjLEVBQUU4SCxNQUFNLENBQUM7UUFDakM0Z0IsTUFBTSxFQUFFMW9CLENBQUMsQ0FBQyxvQkFBb0IsRUFBRThILE1BQU07TUFDMUMsQ0FBQztNQUNEc3pCLEdBQUcsRUFBRTtRQUNEL1MsTUFBTSxFQUFFcm9CLENBQUMsQ0FBQyxjQUFjLEVBQUU4SCxNQUFNLENBQUM7UUFDakM0Z0IsTUFBTSxFQUFFMW9CLENBQUMsQ0FBQyxvQkFBb0IsRUFBRThILE1BQU07TUFDMUMsQ0FBQztNQUNEdXpCLFFBQVEsRUFBRTtRQUNOdmEsS0FBSyxFQUFFOWdCLENBQUMsQ0FBQyxpQkFBaUIsRUFBRThILE1BQU0sQ0FBQztRQUNuQ296QixNQUFNLEVBQUVsN0IsQ0FBQyxDQUFDLGtCQUFrQixFQUFFOEgsTUFBTTtNQUN4QyxDQUFDO01BQ0R3ekIsWUFBWSxFQUFFdDdCLENBQUMsQ0FBQywrQkFBK0IsRUFBRThILE1BQU0sQ0FBQztNQUN4RHl6QixjQUFjLEVBQUV2N0IsQ0FBQyxDQUFDLG1DQUFtQyxFQUFFOEgsTUFBTTtJQUNqRSxDQUFDO0VBQ0w7O0VBRUE7QUFDSjtBQUNBO0FBQ0EsS0FISTtFQUFBNUgsTUFBQSxDQUlBczdCLG9CQUFvQixHQUFwQixTQUFBQSxvQkFBb0JBLENBQUNDLFNBQVMsRUFBRTtJQUM1QkEsU0FBUyxDQUFDcEIsVUFBVSxDQUFDdmdCLElBQUksQ0FBQy9WLElBQUksQ0FBQyxDQUFDO0lBQ2hDMDNCLFNBQVMsQ0FBQ25CLGFBQWEsQ0FBQ3hnQixJQUFJLENBQUMvVixJQUFJLENBQUMsQ0FBQztJQUNuQzAzQixTQUFTLENBQUNsQixjQUFjLENBQUN6Z0IsSUFBSSxDQUFDL1YsSUFBSSxDQUFDLENBQUM7SUFDcEMwM0IsU0FBUyxDQUFDakIsaUJBQWlCLENBQUMxZ0IsSUFBSSxDQUFDL1YsSUFBSSxDQUFDLENBQUM7SUFDdkMwM0IsU0FBUyxDQUFDaEIsVUFBVSxDQUFDM2dCLElBQUksQ0FBQy9WLElBQUksQ0FBQyxDQUFDO0lBQ2hDMDNCLFNBQVMsQ0FBQ2YsYUFBYSxDQUFDM2dCLEtBQUssQ0FBQ2hXLElBQUksQ0FBQyxDQUFDO0lBQ3BDMDNCLFNBQVMsQ0FBQ2QsVUFBVSxDQUFDNWdCLEtBQUssQ0FBQ2hXLElBQUksQ0FBQyxDQUFDO0lBQ2pDMDNCLFNBQVMsQ0FBQ25PLFlBQVksQ0FBQ3hULElBQUksQ0FBQy9WLElBQUksQ0FBQyxDQUFDO0lBQ2xDMDNCLFNBQVMsQ0FBQ2hPLGVBQWUsQ0FBQzNULElBQUksQ0FBQy9WLElBQUksQ0FBQyxDQUFDO0VBQ3pDOztFQUVBO0FBQ0o7QUFDQTtBQUNBLEtBSEk7RUFBQTdELE1BQUEsQ0FJQXlZLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFDOVgsSUFBSSxFQUFFMjNCLE9BQU8sRUFBUztJQUFBLElBQWhCQSxPQUFPO01BQVBBLE9BQU8sR0FBRyxJQUFJO0lBQUE7SUFDM0IsSUFBTWlELFNBQVMsR0FBRyxJQUFJLENBQUMxb0IsWUFBWSxDQUFDLElBQUksQ0FBQ2pMLE1BQU0sQ0FBQztJQUVoRCxJQUFNNHpCLE9BQU8sR0FBRyxDQUFDNzZCLElBQUksQ0FBQzJTLE9BQU8sR0FDdEIzUyxJQUFJLENBQUM4NkIsYUFBYSxJQUFJOTZCLElBQUksQ0FBQzQ0QixvQkFBb0IsSUFBSSxJQUFJLENBQUMxa0IsT0FBTyxDQUFDd2tCLHdCQUF3QixHQUN4RjE0QixJQUFJLENBQUM4NkIsYUFBYSxJQUFJOTZCLElBQUksQ0FBQys2QixrQkFBbUI7SUFFckQsSUFBSSxDQUFDQyxjQUFjLENBQUNILE9BQU8sQ0FBQztJQUU1QixJQUFJNzZCLElBQUksQ0FBQ29aLEtBQUssWUFBWXZkLE1BQU0sRUFBRTtNQUM5QixJQUFJLENBQUNvL0IsZUFBZSxDQUFDTCxTQUFTLEVBQUU1NkIsSUFBSSxDQUFDb1osS0FBSyxDQUFDO0lBQy9DLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ3VoQixvQkFBb0IsQ0FBQ0MsU0FBUyxDQUFDO0lBQ3hDO0lBRUEsSUFBSTU2QixJQUFJLENBQUNrN0IsTUFBTSxZQUFZci9CLE1BQU0sRUFBRTtNQUMvQisrQixTQUFTLENBQUNiLE9BQU8sQ0FBQzN3QixJQUFJLENBQUNwSixJQUFJLENBQUNrN0IsTUFBTSxDQUFDcGYsU0FBUyxDQUFDO0lBQ2pEOztJQUVBO0lBQ0EsSUFBSTliLElBQUksQ0FBQ203QixTQUFTLEVBQUU7TUFDaEJQLFNBQVMsQ0FBQ1Qsa0JBQWtCLENBQUNocEIsR0FBRyxDQUFDblIsSUFBSSxDQUFDbTdCLFNBQVMsQ0FBQztJQUNwRDs7SUFFQTtJQUNBLElBQUluN0IsSUFBSSxDQUFDczZCLEdBQUcsRUFBRTtNQUNWTSxTQUFTLENBQUNOLEdBQUcsQ0FBQ3pTLE1BQU0sQ0FBQzNsQixJQUFJLENBQUNsQyxJQUFJLENBQUNzNkIsR0FBRyxDQUFDO01BQ25DTSxTQUFTLENBQUNOLEdBQUcsQ0FBQzlTLE1BQU0sQ0FBQ3pqQixJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDLE1BQU07TUFDSDYyQixTQUFTLENBQUNOLEdBQUcsQ0FBQzlTLE1BQU0sQ0FBQ3RrQixJQUFJLENBQUMsQ0FBQztNQUMzQjAzQixTQUFTLENBQUNOLEdBQUcsQ0FBQ3pTLE1BQU0sQ0FBQzNsQixJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pDOztJQUVBO0lBQ0EsSUFBSWxDLElBQUksQ0FBQ3U2QixHQUFHLEVBQUU7TUFDVkssU0FBUyxDQUFDTCxHQUFHLENBQUMxUyxNQUFNLENBQUMzbEIsSUFBSSxDQUFDbEMsSUFBSSxDQUFDdTZCLEdBQUcsQ0FBQztNQUNuQ0ssU0FBUyxDQUFDTCxHQUFHLENBQUMvUyxNQUFNLENBQUN6akIsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxNQUFNO01BQ0g2MkIsU0FBUyxDQUFDTCxHQUFHLENBQUMvUyxNQUFNLENBQUN0a0IsSUFBSSxDQUFDLENBQUM7TUFDM0IwM0IsU0FBUyxDQUFDTCxHQUFHLENBQUMxUyxNQUFNLENBQUMzbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNqQzs7SUFFQTtJQUNBLElBQUkwNEIsU0FBUyxDQUFDUixLQUFLLENBQUM1RCxVQUFVLENBQUNoNkIsTUFBTSxJQUFJLE9BQU93RCxJQUFJLENBQUNvNkIsS0FBSyxLQUFLLFFBQVEsRUFBRTtNQUNyRTtNQUNBUSxTQUFTLENBQUNSLEtBQUssQ0FBQzVELFVBQVUsQ0FBQ3h5QixXQUFXLENBQUMsa0JBQWtCLENBQUM7TUFFMUQ0MkIsU0FBUyxDQUFDUixLQUFLLENBQUNDLE1BQU0sQ0FBQ240QixJQUFJLENBQUNsQyxJQUFJLENBQUNvNkIsS0FBSyxDQUFDO0lBQzNDLENBQUMsTUFBTTtNQUNIUSxTQUFTLENBQUNSLEtBQUssQ0FBQzVELFVBQVUsQ0FBQzN5QixRQUFRLENBQUMsa0JBQWtCLENBQUM7TUFDdkQrMkIsU0FBUyxDQUFDUixLQUFLLENBQUNDLE1BQU0sQ0FBQ240QixJQUFJLENBQUNsQyxJQUFJLENBQUNvNkIsS0FBSyxDQUFDO0lBQzNDO0lBRUEsSUFBSSxDQUFDNW5CLDZCQUE2QixDQUFDeFMsSUFBSSxDQUFDO0lBQ3hDLElBQUksQ0FBQ283Qix1QkFBdUIsQ0FBQ3A3QixJQUFJLENBQUM7O0lBRWxDO0lBQ0EsSUFBSUEsSUFBSSxDQUFDcTdCLG1CQUFtQixJQUFJMUQsT0FBTyxFQUFFO01BQ3JDaUQsU0FBUyxDQUFDSCxZQUFZLENBQUNyeEIsSUFBSSxDQUFDdXVCLE9BQU8sQ0FBQztJQUN4QyxDQUFDLE1BQU0sSUFBSSxPQUFRMzNCLElBQUksQ0FBQ3E3QixtQkFBb0IsS0FBSyxXQUFXLEVBQUU7TUFDMURULFNBQVMsQ0FBQ0gsWUFBWSxDQUFDcnhCLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkM7SUFFQSxJQUFNa3lCLGdCQUFnQixHQUFHbjhCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztJQUVsRCxJQUFJbThCLGdCQUFnQixDQUFDMTZCLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSVosSUFBSSxDQUFDMFMsV0FBVyxFQUFFO01BQ3BENG9CLGdCQUFnQixDQUFDdjNCLElBQUksQ0FBQyxDQUFDO0lBQzNCO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0FBQ0EsS0FISTtFQUFBMUUsTUFBQSxDQUlBNDdCLGVBQWUsR0FBZixTQUFBQSxlQUFlQSxDQUFDTCxTQUFTLEVBQUV4aEIsS0FBSyxFQUFFO0lBQzlCLElBQUksQ0FBQ3VoQixvQkFBb0IsQ0FBQ0MsU0FBUyxDQUFDO0lBRXBDLElBQUl4aEIsS0FBSyxDQUFDUSxRQUFRLEVBQUU7TUFDaEIsSUFBTTJoQixZQUFZLEdBQUduaUIsS0FBSyxDQUFDb2lCLFdBQVcsR0FDL0JwaUIsS0FBSyxDQUFDb2lCLFdBQVcsQ0FBQ2pMLEdBQUcsQ0FBQzNXLFFBQVEsQ0FBQ2tDLFNBQVMsV0FBTTFDLEtBQUssQ0FBQ29pQixXQUFXLENBQUNDLEdBQUcsQ0FBQzdoQixRQUFRLENBQUNrQyxTQUFTLEdBQ3ZGMUMsS0FBSyxDQUFDUSxRQUFRLENBQUNrQyxTQUFTO01BQzlCOGUsU0FBUyxDQUFDZCxVQUFVLENBQUM1Z0IsS0FBSyxDQUFDblYsSUFBSSxDQUFDLENBQUM7TUFDakM2MkIsU0FBUyxDQUFDbk8sWUFBWSxDQUFDeFQsSUFBSSxDQUFDbFYsSUFBSSxDQUFDLENBQUM7TUFDbEM2MkIsU0FBUyxDQUFDbk8sWUFBWSxDQUFDdlQsS0FBSyxDQUFDOVAsSUFBSSxDQUFDbXlCLFlBQVksQ0FBQztJQUNuRDtJQUVBLElBQUluaUIsS0FBSyxDQUFDQyxXQUFXLEVBQUU7TUFDbkIsSUFBTWtpQixhQUFZLEdBQUduaUIsS0FBSyxDQUFDb2lCLFdBQVcsR0FDL0JwaUIsS0FBSyxDQUFDb2lCLFdBQVcsQ0FBQ2pMLEdBQUcsQ0FBQ2xYLFdBQVcsQ0FBQ3lDLFNBQVMsV0FBTTFDLEtBQUssQ0FBQ29pQixXQUFXLENBQUNDLEdBQUcsQ0FBQ3BpQixXQUFXLENBQUN5QyxTQUFTLEdBQzdGMUMsS0FBSyxDQUFDQyxXQUFXLENBQUN5QyxTQUFTO01BQ2pDOGUsU0FBUyxDQUFDZCxVQUFVLENBQUM1Z0IsS0FBSyxDQUFDblYsSUFBSSxDQUFDLENBQUM7TUFDakM2MkIsU0FBUyxDQUFDaE8sZUFBZSxDQUFDM1QsSUFBSSxDQUFDbFYsSUFBSSxDQUFDLENBQUM7TUFDckM2MkIsU0FBUyxDQUFDaE8sZUFBZSxDQUFDMVQsS0FBSyxDQUFDOVAsSUFBSSxDQUFDbXlCLGFBQVksQ0FBQztJQUN0RDtJQUVBLElBQUluaUIsS0FBSyxDQUFDVyxZQUFZLEVBQUU7TUFDcEI2Z0IsU0FBUyxDQUFDcEIsVUFBVSxDQUFDdmdCLElBQUksQ0FBQ2xWLElBQUksQ0FBQyxDQUFDO01BQ2hDNjJCLFNBQVMsQ0FBQ3BCLFVBQVUsQ0FBQ3RnQixLQUFLLENBQUM5UCxJQUFJLENBQUNnUSxLQUFLLENBQUNXLFlBQVksQ0FBQytCLFNBQVMsQ0FBQztJQUNqRTtJQUVBLElBQUkxQyxLQUFLLENBQUNJLGVBQWUsRUFBRTtNQUN2Qm9oQixTQUFTLENBQUNuQixhQUFhLENBQUN4Z0IsSUFBSSxDQUFDbFYsSUFBSSxDQUFDLENBQUM7TUFDbkM2MkIsU0FBUyxDQUFDbkIsYUFBYSxDQUFDdmdCLEtBQUssQ0FBQzlQLElBQUksQ0FBQ2dRLEtBQUssQ0FBQ0ksZUFBZSxDQUFDc0MsU0FBUyxDQUFDO0lBQ3ZFO0lBRUEsSUFBSTFDLEtBQUssQ0FBQ3NpQixLQUFLLEVBQUU7TUFDYmQsU0FBUyxDQUFDaEIsVUFBVSxDQUFDM2dCLElBQUksQ0FBQ2xWLElBQUksQ0FBQyxDQUFDO01BQ2hDNjJCLFNBQVMsQ0FBQ2hCLFVBQVUsQ0FBQzFnQixLQUFLLENBQUM5UCxJQUFJLENBQUNnUSxLQUFLLENBQUNzaUIsS0FBSyxDQUFDNWYsU0FBUyxDQUFDO0lBQzFEO0lBRUEsSUFBSTFDLEtBQUssQ0FBQ1ksdUJBQXVCLEVBQUU7TUFDL0I0Z0IsU0FBUyxDQUFDZCxVQUFVLENBQUM1Z0IsS0FBSyxDQUFDaFcsSUFBSSxDQUFDLENBQUM7TUFDakMwM0IsU0FBUyxDQUFDbEIsY0FBYyxDQUFDemdCLElBQUksQ0FBQ2xWLElBQUksQ0FBQyxDQUFDO01BQ3BDNjJCLFNBQVMsQ0FBQ2YsYUFBYSxDQUFDM2dCLEtBQUssQ0FBQ25WLElBQUksQ0FBQyxDQUFDO01BQ3BDNjJCLFNBQVMsQ0FBQ2xCLGNBQWMsQ0FBQ3hnQixLQUFLLENBQUM5UCxJQUFJLENBQUNnUSxLQUFLLENBQUNZLHVCQUF1QixDQUFDOEIsU0FBUyxDQUFDO0lBQ2hGO0lBRUEsSUFBSTFDLEtBQUssQ0FBQ08sMEJBQTBCLEVBQUU7TUFDbENpaEIsU0FBUyxDQUFDZCxVQUFVLENBQUM1Z0IsS0FBSyxDQUFDaFcsSUFBSSxDQUFDLENBQUM7TUFDakMwM0IsU0FBUyxDQUFDakIsaUJBQWlCLENBQUMxZ0IsSUFBSSxDQUFDbFYsSUFBSSxDQUFDLENBQUM7TUFDdkM2MkIsU0FBUyxDQUFDZixhQUFhLENBQUMzZ0IsS0FBSyxDQUFDblYsSUFBSSxDQUFDLENBQUM7TUFDcEM2MkIsU0FBUyxDQUFDakIsaUJBQWlCLENBQUN6Z0IsS0FBSyxDQUFDOVAsSUFBSSxDQUFDZ1EsS0FBSyxDQUFDTywwQkFBMEIsQ0FBQ21DLFNBQVMsQ0FBQztJQUN0RjtFQUNKOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FKSTtFQUFBemMsTUFBQSxDQUtBMjdCLGNBQWMsR0FBZCxTQUFBQSxjQUFjQSxDQUFDSCxPQUFPLEVBQUU7SUFDcEIsSUFBTWMsV0FBVyxHQUFHeDhCLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUVuRCxJQUFJMDdCLE9BQU8sRUFBRTtNQUNUMTdCLENBQUMsQ0FBQyxtQkFBbUIsRUFBRXc4QixXQUFXLENBQUMsQ0FBQ3o1QixJQUFJLENBQUMyNEIsT0FBTyxDQUFDO01BQ2pEYyxXQUFXLENBQUM1M0IsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQyxNQUFNO01BQ0g0M0IsV0FBVyxDQUFDejRCLElBQUksQ0FBQyxDQUFDO0lBQ3RCO0VBQ0osQ0FBQztFQUFBN0QsTUFBQSxDQUVEbVQsNkJBQTZCLEdBQTdCLFNBQUFBLDZCQUE2QkEsQ0FBQ3hTLElBQUksRUFBRTtJQUNoQyxJQUFNNDZCLFNBQVMsR0FBRyxJQUFJLENBQUMxb0IsWUFBWSxDQUFDLElBQUksQ0FBQ2pMLE1BQU0sQ0FBQztJQUNoRCxJQUFJLENBQUNqSCxJQUFJLENBQUMwUyxXQUFXLElBQUksQ0FBQzFTLElBQUksQ0FBQzJTLE9BQU8sRUFBRTtNQUNwQ2lvQixTQUFTLENBQUNYLFVBQVUsQ0FBQ3JuQixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztNQUMzQ2dvQixTQUFTLENBQUNaLFdBQVcsQ0FBQ3BuQixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztJQUNoRCxDQUFDLE1BQU07TUFDSGdvQixTQUFTLENBQUNYLFVBQVUsQ0FBQ3JuQixJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztNQUM1Q2dvQixTQUFTLENBQUNaLFdBQVcsQ0FBQ3BuQixJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztJQUNqRDtFQUNKLENBQUM7RUFBQXZULE1BQUEsQ0FFRCs3Qix1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDcDdCLElBQUksRUFBRTtJQUMxQixJQUFNNDZCLFNBQVMsR0FBRyxJQUFJLENBQUMxb0IsWUFBWSxDQUFDLElBQUksQ0FBQ2pMLE1BQU0sQ0FBQztJQUNoRCxJQUFNMjBCLFdBQVcsR0FBR2hCLFNBQVMsQ0FBQ1YsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDMWMsYUFBYSxDQUFDLENBQUM7SUFDL0QsSUFBSSxDQUFDcWUsNkJBQTZCLENBQUNELFdBQVcsSUFBSTU3QixJQUFJLENBQUMwUyxXQUFXLElBQUkxUyxJQUFJLENBQUMyUyxPQUFPLENBQUM7RUFDdkYsQ0FBQztFQUFBdFQsTUFBQSxDQUVEdzhCLDZCQUE2QixHQUE3QixTQUFBQSw2QkFBNkJBLENBQUNDLFVBQVUsRUFBRTtJQUN0QyxJQUFNbEIsU0FBUyxHQUFHLElBQUksQ0FBQzFvQixZQUFZLENBQUMsSUFBSSxDQUFDakwsTUFBTSxDQUFDO0lBRWhELElBQUk2MEIsVUFBVSxFQUFFO01BQ1psQixTQUFTLENBQUNGLGNBQWMsQ0FBQzMyQixJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDLE1BQU07TUFDSDYyQixTQUFTLENBQUNGLGNBQWMsQ0FBQ3gzQixJQUFJLENBQUMsQ0FBQztJQUNuQztFQUNKLENBQUM7RUFBQTdELE1BQUEsQ0FFRDI1QixlQUFlLEdBQWYsU0FBQUEsZUFBZUEsQ0FBQ0YsVUFBVSxFQUFFUixRQUFRLEVBQUVLLGlCQUFpQixFQUFFO0lBQ3JELElBQUksSUFBSSxDQUFDb0QsZ0JBQWdCLENBQUNqRCxVQUFVLENBQUMsS0FBSyxZQUFZLEVBQUU7TUFDcEQsT0FBTyxJQUFJLENBQUNrRCwyQkFBMkIsQ0FBQ2xELFVBQVUsRUFBRVIsUUFBUSxFQUFFSyxpQkFBaUIsQ0FBQztJQUNwRjtJQUVBLElBQUlMLFFBQVEsS0FBSyxhQUFhLEVBQUU7TUFDNUJRLFVBQVUsQ0FBQy8wQixJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDLE1BQU07TUFDSCswQixVQUFVLENBQUM5MEIsV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUN6QztFQUNKLENBQUM7RUFBQTNFLE1BQUEsQ0FFRDQ1QixnQkFBZ0IsR0FBaEIsU0FBQUEsZ0JBQWdCQSxDQUFDSCxVQUFVLEVBQUVSLFFBQVEsRUFBRUssaUJBQWlCLEVBQUU7SUFDdEQsSUFBSSxJQUFJLENBQUNvRCxnQkFBZ0IsQ0FBQ2pELFVBQVUsQ0FBQyxLQUFLLFlBQVksRUFBRTtNQUNwRCxPQUFPLElBQUksQ0FBQ21ELDRCQUE0QixDQUFDbkQsVUFBVSxFQUFFUixRQUFRLEVBQUVLLGlCQUFpQixDQUFDO0lBQ3JGO0lBRUEsSUFBSUwsUUFBUSxLQUFLLGFBQWEsRUFBRTtNQUM1QlEsVUFBVSxDQUFDNTFCLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxNQUFNO01BQ0g0MUIsVUFBVSxDQUFDajFCLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDdEM7RUFDSixDQUFDO0VBQUF4RSxNQUFBLENBRUQwOEIsZ0JBQWdCLEdBQWhCLFNBQUFBLGdCQUFnQkEsQ0FBQ2pELFVBQVUsRUFBRTtJQUN6QixJQUFNb0QsT0FBTyxHQUFHcEQsVUFBVSxDQUFDejRCLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztJQUU5RCxPQUFPNjdCLE9BQU8sR0FBR0EsT0FBTyxDQUFDbDhCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUk7RUFDNUQsQ0FBQztFQUFBWCxNQUFBLENBRUQ0OEIsNEJBQTRCLEdBQTVCLFNBQUFBLDRCQUE0QkEsQ0FBQ25ELFVBQVUsRUFBRVIsUUFBUSxFQUFFSyxpQkFBaUIsRUFBRTtJQUNsRSxJQUFNNVksT0FBTyxHQUFHK1ksVUFBVSxDQUFDcUQsTUFBTSxDQUFDLENBQUM7SUFFbkMsSUFBSTdELFFBQVEsS0FBSyxhQUFhLEVBQUU7TUFDNUJRLFVBQVUsQ0FBQ3NELFlBQVksQ0FBQyxLQUFLLENBQUM7TUFDOUI7TUFDQSxJQUFJcmMsT0FBTyxDQUFDNU8sR0FBRyxDQUFDLENBQUMsS0FBSzJuQixVQUFVLENBQUNqM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQzVDa2UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDc2MsYUFBYSxHQUFHLENBQUM7TUFDaEM7SUFDSixDQUFDLE1BQU07TUFDSHZELFVBQVUsQ0FBQzF2QixJQUFJLENBQUMwdkIsVUFBVSxDQUFDMXZCLElBQUksQ0FBQyxDQUFDLENBQUNpRSxPQUFPLENBQUNzckIsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUdBLGlCQUFpQixDQUFDO0lBQ3pGO0VBQ0osQ0FBQztFQUFBdDVCLE1BQUEsQ0FFRDI4QiwyQkFBMkIsR0FBM0IsU0FBQUEsMkJBQTJCQSxDQUFDbEQsVUFBVSxFQUFFUixRQUFRLEVBQUVLLGlCQUFpQixFQUFFO0lBQ2pFLElBQUlMLFFBQVEsS0FBSyxhQUFhLEVBQUU7TUFDNUJRLFVBQVUsQ0FBQ3NELFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQyxNQUFNO01BQ0h0RCxVQUFVLENBQUMxdkIsSUFBSSxDQUFDMHZCLFVBQVUsQ0FBQzF2QixJQUFJLENBQUMsQ0FBQyxDQUFDaUUsT0FBTyxDQUFDc3JCLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFO0VBQ0osQ0FBQztFQUFBLE9BQUFkLGtCQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdiMEM7QUFDb0M7QUFDaEM7QUFDTztBQUNNLENBQUM7QUFDVTtBQUUzQztBQUN1QztBQUM1QjtBQUNLO0FBQ21CO0FBQ3BCO0FBQ1k7QUFBQSxJQUV0Q25vQixjQUFjLDBCQUFBb3RCLG1CQUFBO0VBQy9CLFNBQUFwdEIsZUFBWXpJLE1BQU0sRUFBRWlOLE9BQU8sRUFBRTZvQixxQkFBcUIsRUFBTztJQUFBLElBQUF4OUIsS0FBQTtJQUFBLElBQTVCdzlCLHFCQUFxQjtNQUFyQkEscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQUE7SUFDbkR4OUIsS0FBQSxHQUFBdTlCLG1CQUFBLENBQUFuZ0MsSUFBQSxPQUFNc0ssTUFBTSxFQUFFaU4sT0FBTyxDQUFDO0lBRXRCM1UsS0FBQSxDQUFLdVUsUUFBUSxHQUFHM1UsQ0FBQyxDQUFDLHNDQUFzQyxDQUFDO0lBQ3pESSxLQUFBLENBQUtSLFlBQVksR0FBRyxJQUFJK00sdUVBQVksQ0FBQzNNLENBQUMsQ0FBQyxzQkFBc0IsRUFBRUksS0FBQSxDQUFLMEgsTUFBTSxDQUFDLENBQUM7SUFDNUUxSCxLQUFBLENBQUtSLFlBQVksQ0FBQzZYLElBQUksQ0FBQyxDQUFDO0lBQ3hCclgsS0FBQSxDQUFLeTlCLG9CQUFvQixDQUFDLENBQUM7SUFDM0J6OUIsS0FBQSxDQUFLMDlCLG9CQUFvQixHQUFHOTlCLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQztJQUN2REksS0FBQSxDQUFLMjlCLHdCQUF3QixHQUFHLENBQUMsQ0FBQztJQUNsQzM5QixLQUFBLENBQUs0OUIsaUJBQWlCLEdBQUdoK0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNvRCxHQUFHLENBQUMsVUFBQ2lmLENBQUMsRUFBRTRiLEtBQUs7TUFBQSxPQUFLaitCLENBQUMsQ0FBQ2krQixLQUFLLENBQUMsQ0FBQ3Y3QixJQUFJLENBQUMsSUFBSSxDQUFDO0lBQUEsRUFBQztJQUN4RnRDLEtBQUEsQ0FBSzg5Qiw0QkFBNEIsQ0FBQyxDQUFDO0lBQ25DOTlCLEtBQUEsQ0FBSys5QixrQkFBa0IsQ0FBQyxDQUFDO0lBRXpCLElBQU1yc0IsS0FBSyxHQUFHOVIsQ0FBQyxDQUFDLDBCQUEwQixFQUFFOEgsTUFBTSxDQUFDO0lBRW5ELElBQUlnSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUN1TSxhQUFhLENBQUMsQ0FBQyxFQUFFO01BQzFCamUsS0FBQSxDQUFLZytCLHdCQUF3QixDQUFDLENBQUM7SUFDbkMsQ0FBQyxNQUFNO01BQ0hoK0IsS0FBQSxDQUFLczhCLDZCQUE2QixDQUFDLEtBQUssQ0FBQztJQUM3QztJQUVBdDhCLEtBQUEsQ0FBS2krQixrQkFBa0IsR0FBR2pCLHVEQUFHLENBQUM7TUFDMUJrQixNQUFNLEVBQUV4c0IsS0FBSyxDQUFDelIsSUFBSSxDQUFDLDZCQUE2QixDQUFDO01BQ2pEaytCLEdBQUcsRUFBRWxCLCtFQUF5QkE7SUFDbEMsQ0FBQyxDQUFDO0lBRUYsSUFBTW1CLHNCQUFzQixHQUFHeCtCLENBQUMsQ0FBQyw4QkFBOEIsRUFBRThSLEtBQUssQ0FBQztJQUN2RSxJQUFNMnNCLFVBQVUsR0FBR0Qsc0JBQXNCLENBQUN2MEIsSUFBSSxDQUFDLENBQUMsQ0FBQ2taLElBQUksQ0FBQyxDQUFDLENBQUM5bEIsTUFBTTtJQUM5RCxJQUFNcWhDLGlCQUFpQixHQUFHRixzQkFBc0IsQ0FBQ24rQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ2hELE1BQU07SUFDOUUsSUFBTXNoQyxtQkFBbUIsR0FBRzMrQixDQUFDLENBQUMsMEJBQTBCLEVBQUU4UixLQUFLLENBQUM7SUFDaEUsSUFBTThzQixvQkFBb0IsR0FBRzUrQixDQUFDLENBQUMscUJBQXFCLEVBQUU4UixLQUFLLENBQUM7SUFDNUQsSUFBTStzQixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFJeGMsQ0FBQyxFQUFFbEYsS0FBSyxFQUFLO01BQ3hDLElBQU0yaEIsWUFBWSxHQUFHOStCLENBQUMsQ0FBQyx1QkFBdUIsRUFBRUEsQ0FBQyxDQUFDbWQsS0FBSyxDQUFDLENBQUM7TUFDekQsSUFBTTRoQixnQkFBZ0IsR0FBR0QsWUFBWSxDQUFDRSxVQUFVLENBQUMsQ0FBQztNQUNsRCxJQUFNQyw2QkFBNkIsR0FBRyxFQUFFO01BQ3hDLElBQUFDLHFCQUFBLEdBQWtCL2hCLEtBQUssQ0FBQ2dpQixxQkFBcUIsQ0FBQyxDQUFDO1FBQXZDQyxLQUFLLEdBQUFGLHFCQUFBLENBQUxFLEtBQUs7TUFDYixJQUFNQyw2QkFBNkIsR0FBRzdxQixNQUFNLENBQUM4cUIsTUFBTSxDQUFDNzRCLEtBQUssR0FBRzI0QixLQUFLO01BQ2pFLElBQU1HLFVBQVUsR0FBR1IsZ0JBQWdCLEdBQUdNLDZCQUE2QjtNQUVuRSxJQUFJQSw2QkFBNkIsR0FBSU4sZ0JBQWdCLEdBQUdFLDZCQUE4QixFQUFFO1FBQ3BGSCxZQUFZLENBQUMxNEIsR0FBRyxDQUFDLE1BQU0sR0FBS201QixVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUNBLFVBQVUsR0FBR0EsVUFBVSxRQUFJLENBQUM7TUFDOUU7SUFDSixDQUFDO0lBRUR2L0IsQ0FBQyxDQUFDd1UsTUFBTSxDQUFDLENBQUNqVSxFQUFFLENBQUMsTUFBTSxFQUFFLFlBQU07TUFDdkJILEtBQUEsQ0FBS28vQiwyQkFBMkIsQ0FBQyxDQUFDO01BQ2xDeC9CLENBQUMsQ0FBQ21YLElBQUksQ0FBQ3luQixvQkFBb0IsRUFBRUMscUJBQXFCLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0lBRUYsSUFBSTlwQixPQUFPLENBQUMwcUIsZUFBZSxFQUFFO01BQ3pCci9CLEtBQUEsQ0FBSzA5QixvQkFBb0IsQ0FBQ2o1QixXQUFXLENBQUMsVUFBVSxDQUFDO01BRWpEODVCLG1CQUFtQixDQUFDcCtCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQTBILElBQUEsRUFBZ0I7UUFBQSxJQUFidkcsTUFBTSxHQUFBdUcsSUFBQSxDQUFOdkcsTUFBTTtRQUN0QyxJQUFNZytCLGtCQUFrQixHQUFHaCtCLE1BQU0sQ0FBQ2krQixVQUFVLENBQUNBLFVBQVU7UUFFdkR2L0IsS0FBQSxDQUFLdy9CLHNCQUFzQixDQUFDNS9CLENBQUMsQ0FBQzBCLE1BQU0sQ0FBQyxFQUFFMUIsQ0FBQyxDQUFDMC9CLGtCQUFrQixDQUFDLENBQUM7TUFDakUsQ0FBQyxDQUFDO01BRUYxL0IsQ0FBQyxDQUFDbVgsSUFBSSxDQUFDd25CLG1CQUFtQixFQUFFLFVBQUN0YyxDQUFDLEVBQUV3ZCxPQUFPLEVBQUs7UUFDeEMsSUFBTUgsa0JBQWtCLEdBQUdHLE9BQU8sQ0FBQ0YsVUFBVSxDQUFDQSxVQUFVO1FBRXhELElBQUkzL0IsQ0FBQyxDQUFDNi9CLE9BQU8sQ0FBQyxDQUFDcCtCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRXJCLEtBQUEsQ0FBS3cvQixzQkFBc0IsQ0FBQzUvQixDQUFDLENBQUM2L0IsT0FBTyxDQUFDLEVBQUU3L0IsQ0FBQyxDQUFDMC9CLGtCQUFrQixDQUFDLENBQUM7TUFDakcsQ0FBQyxDQUFDO0lBQ047SUFFQWxCLHNCQUFzQixDQUFDaitCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQ3pDSixLQUFBLENBQUswL0IscUJBQXFCLENBQUN0L0IsS0FBSyxDQUFDO01BQ2pDSixLQUFBLENBQUsyL0IsaUJBQWlCLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7SUFFRmp1QixLQUFLLENBQUN2UixFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUN4QkosS0FBQSxDQUFLaStCLGtCQUFrQixDQUFDMkIsWUFBWSxDQUFDLENBQUM7TUFFdEMsSUFBSTUvQixLQUFBLENBQUtpK0Isa0JBQWtCLENBQUM0QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDekM3L0IsS0FBQSxDQUFLc1QsZ0JBQWdCLENBQUNsVCxLQUFLLEVBQUVzUixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDMUM7SUFDSixDQUFDLENBQUM7O0lBRUY7SUFDQTtJQUNBLElBQUksQ0FBQ291QixxREFBQSxDQUFRdEMscUJBQXFCLENBQUMsSUFBSWMsaUJBQWlCLEtBQUtELFVBQVUsRUFBRTtNQUNyRSxJQUFNMEIsVUFBVSxHQUFHbmdDLENBQUMsQ0FBQyxxQkFBcUIsRUFBRThSLEtBQUssQ0FBQyxDQUFDRSxHQUFHLENBQUMsQ0FBQztNQUN4RCxJQUFNb3VCLG9CQUFvQixHQUFHaEksd0VBQXFCLENBQUM1NkIsSUFBSSxDQUFBNEMsS0FBQSxFQUFPcytCLGlCQUFpQixDQUFDO01BRWhGbnhCLHNFQUFTLENBQUM4eUIsaUJBQWlCLENBQUNDLFlBQVksQ0FBQ0gsVUFBVSxFQUFFcnVCLEtBQUssQ0FBQ3l1QixTQUFTLENBQUMsQ0FBQyxFQUFFLDhCQUE4QixFQUFFSCxvQkFBb0IsQ0FBQztJQUNqSSxDQUFDLE1BQU07TUFDSGhnQyxLQUFBLENBQUtxNEIsdUJBQXVCLENBQUNtRixxQkFBcUIsQ0FBQztNQUNuRHg5QixLQUFBLENBQUt1WSxVQUFVLENBQUNpbEIscUJBQXFCLENBQUM7TUFDdENILDREQUFXLENBQUMrQywwQkFBMEIsQ0FBQzVDLHFCQUFxQixDQUFDO0lBQ2pFO0lBRUFZLHNCQUFzQixDQUFDNTVCLElBQUksQ0FBQyxDQUFDO0lBRTdCeEUsS0FBQSxDQUFLOGEsWUFBWSxHQUFHaWlCLHlEQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUMsT0FBQS84QixLQUFBO0VBQ3pEO0VBQUNqQixjQUFBLENBQUFvUixjQUFBLEVBQUFvdEIsbUJBQUE7RUFBQSxJQUFBejlCLE1BQUEsR0FBQXFRLGNBQUEsQ0FBQWhVLFNBQUE7RUFBQTJELE1BQUEsQ0FFRHMvQiwyQkFBMkIsR0FBM0IsU0FBQUEsMkJBQTJCQSxDQUFBLEVBQUc7SUFDMUIsSUFBSSxDQUFDbkIsa0JBQWtCLENBQUMzbEIsR0FBRyxDQUFDLENBQUM7TUFDekI5RixRQUFRLEVBQUUsc0RBQXNEO01BQ2hFNnRCLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHQyxFQUFFLEVBQUUxdUIsR0FBRyxFQUFLO1FBQ25CLElBQU1qQyxNQUFNLEdBQUd1dEIsNkRBQUssQ0FBQ3FELFdBQVcsQ0FBQzN1QixHQUFHLENBQUM7UUFDckMwdUIsRUFBRSxDQUFDM3dCLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRDZ3QixZQUFZLEVBQUUsSUFBSSxDQUFDN3JCLE9BQU8sQ0FBQzhyQjtJQUMvQixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sSUFBSSxDQUFDeEMsa0JBQWtCO0VBQ2xDLENBQUM7RUFBQW4rQixNQUFBLENBRURnK0IsNEJBQTRCLEdBQTVCLFNBQUFBLDRCQUE0QkEsQ0FBQSxFQUFHO0lBQUEsSUFBQTU1QixNQUFBO0lBQzNCLElBQUksSUFBSSxDQUFDMDVCLGlCQUFpQixDQUFDM2dDLE1BQU0sSUFBSTZpQyxxREFBQSxDQUFRLElBQUksQ0FBQ25DLHdCQUF3QixDQUFDLEVBQUU7TUFDekUsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQzdtQixJQUFJLENBQUMsVUFBQ2tMLENBQUMsRUFBRXllLGFBQWEsRUFBSztRQUM5QyxJQUFJLENBQUN4OEIsTUFBSSxDQUFDeTVCLHdCQUF3QixDQUFDK0MsYUFBYSxDQUFDLEVBQUU7VUFDL0N4OEIsTUFBSSxDQUFDeTVCLHdCQUF3QixDQUFDK0MsYUFBYSxDQUFDLEdBQUc5Z0MsQ0FBQyxPQUFLOGdDLGFBQWEsOEJBQTJCLENBQUMsQ0FBQy85QixJQUFJLENBQUMsQ0FBQyxDQUFDb2dCLElBQUksQ0FBQyxDQUFDO1FBQ2hIO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBQUFqakIsTUFBQSxDQUVENi9CLGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUEsRUFBRztJQUNoQixJQUFNZ0IseUJBQXlCLEdBQUcsRUFBRTtJQUNwQyxJQUFNbFMsT0FBTyxHQUFHLEVBQUU7SUFFbEI3dUIsQ0FBQyxDQUFDbVgsSUFBSSxDQUFDblgsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLEVBQUUsVUFBQzhPLEtBQUssRUFBRXBSLEtBQUssRUFBSztNQUNwRCxJQUFNc2pDLFdBQVcsR0FBR3RqQyxLQUFLLENBQUN1akMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDenJCLFNBQVM7TUFDL0MsSUFBTTByQixXQUFXLEdBQUdGLFdBQVcsQ0FBQzUvQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMraEIsSUFBSSxDQUFDLENBQUM7TUFDcEQsSUFBTXhDLFFBQVEsR0FBR3FnQixXQUFXLENBQUM3eUIsV0FBVyxDQUFDLENBQUMsQ0FBQ2pJLFFBQVEsQ0FBQyxVQUFVLENBQUM7TUFDL0QsSUFBTXlQLElBQUksR0FBR2pZLEtBQUssQ0FBQ2tZLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztNQUV6RCxJQUFJLENBQUNELElBQUksS0FBSyxZQUFZLElBQUlBLElBQUksS0FBSyxZQUFZLElBQUlBLElBQUksS0FBSyxjQUFjLEtBQUtqWSxLQUFLLENBQUN5akMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDempDLEtBQUssS0FBSyxFQUFFLElBQUlpakIsUUFBUSxFQUFFO1FBQ3RJb2dCLHlCQUF5QixDQUFDN3dCLElBQUksQ0FBQ3hTLEtBQUssQ0FBQztNQUN6QztNQUVBLElBQUlpWSxJQUFJLEtBQUssVUFBVSxJQUFJalksS0FBSyxDQUFDeWpDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ3pqQyxLQUFLLEtBQUssRUFBRSxJQUFJaWpCLFFBQVEsRUFBRTtRQUNqRm9nQix5QkFBeUIsQ0FBQzd3QixJQUFJLENBQUN4UyxLQUFLLENBQUM7TUFDekM7TUFFQSxJQUFJaVksSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUNqQixJQUFNeXJCLFdBQVcsR0FBR3p3QixLQUFLLENBQUNvUCxJQUFJLENBQUNyaUIsS0FBSyxDQUFDMmpDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUN4eUIsS0FBSyxDQUFDLFVBQUNnSixNQUFNO1VBQUEsT0FBS0EsTUFBTSxDQUFDcWxCLGFBQWEsS0FBSyxDQUFDO1FBQUEsRUFBQztRQUU5RyxJQUFJa0UsV0FBVyxFQUFFO1VBQ2IsSUFBTUUsVUFBVSxHQUFHM3dCLEtBQUssQ0FBQ29QLElBQUksQ0FBQ3JpQixLQUFLLENBQUMyakMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQ2orQixHQUFHLENBQUMsVUFBQ20rQixDQUFDO1lBQUEsT0FBS0EsQ0FBQyxDQUFDN2pDLEtBQUs7VUFBQSxFQUFDLENBQUNtWixJQUFJLENBQUMsR0FBRyxDQUFDO1VBQzdGZ1ksT0FBTyxDQUFDM2UsSUFBSSxDQUFJZ3hCLFdBQVcsU0FBSUksVUFBWSxDQUFDO1VBRTVDO1FBQ0o7UUFFQSxJQUFJM2dCLFFBQVEsRUFBRTtVQUNWb2dCLHlCQUF5QixDQUFDN3dCLElBQUksQ0FBQ3hTLEtBQUssQ0FBQztRQUN6QztNQUNKO01BRUEsSUFBSWlZLElBQUksS0FBSyxZQUFZLEVBQUU7UUFDdkIsSUFBTWtDLE1BQU0sR0FBR25hLEtBQUssQ0FBQ3lqQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzVDLElBQU1qRSxhQUFhLEdBQUdybEIsTUFBTSxDQUFDcWxCLGFBQWE7UUFFMUMsSUFBSUEsYUFBYSxLQUFLLENBQUMsRUFBRTtVQUNyQnJPLE9BQU8sQ0FBQzNlLElBQUksQ0FBSWd4QixXQUFXLFNBQUlycEIsTUFBTSxDQUFDZ1gsT0FBTyxDQUFDcU8sYUFBYSxDQUFDLENBQUMxbkIsU0FBVyxDQUFDO1VBRXpFO1FBQ0o7UUFFQSxJQUFJbUwsUUFBUSxFQUFFO1VBQ1ZvZ0IseUJBQXlCLENBQUM3d0IsSUFBSSxDQUFDeFMsS0FBSyxDQUFDO1FBQ3pDO01BQ0o7TUFFQSxJQUFJaVksSUFBSSxLQUFLLGVBQWUsSUFBSUEsSUFBSSxLQUFLLFdBQVcsSUFBSUEsSUFBSSxLQUFLLFFBQVEsSUFBSUEsSUFBSSxLQUFLLGdCQUFnQixJQUFJQSxJQUFJLEtBQUssY0FBYyxFQUFFO1FBQy9ILElBQU04VixPQUFPLEdBQUcvdEIsS0FBSyxDQUFDeWpDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDL0MsSUFBSTFWLE9BQU8sRUFBRTtVQUNULElBQU0rVixzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCQSxDQUFBLEVBQVM7WUFDakMsSUFBTUMsbUJBQW1CLEdBQUdqRSxvRUFBZ0IsQ0FBQzkvQixLQUFLLENBQUN1akMsUUFBUSxDQUFDO1lBQzVELElBQU1TLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBeUJBLENBQUdDLElBQUk7Y0FBQSxPQUFJQSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MscUJBQXFCLEtBQUtwVyxPQUFPLENBQUMvdEIsS0FBSztZQUFBO1lBQzlGLE9BQU8rakMsbUJBQW1CLENBQUM3OUIsTUFBTSxDQUFDODlCLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ25FLENBQUM7VUFDRCxJQUFJL3JCLElBQUksS0FBSyxlQUFlLElBQUlBLElBQUksS0FBSyxXQUFXLElBQUlBLElBQUksS0FBSyxjQUFjLEVBQUU7WUFDN0UsSUFBTXdILEtBQUssR0FBR3BYLDJEQUFXLEdBQUd5N0Isc0JBQXNCLENBQUMsQ0FBQyxDQUFDaHNCLFNBQVMsQ0FBQzJOLElBQUksQ0FBQyxDQUFDLEdBQUdzSSxPQUFPLENBQUNxVyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUN0c0IsU0FBUztZQUNuRyxJQUFJMkgsS0FBSyxFQUFFO2NBQ1AwUixPQUFPLENBQUMzZSxJQUFJLENBQUlneEIsV0FBVyxTQUFJL2pCLEtBQU8sQ0FBQztZQUMzQztVQUNKO1VBRUEsSUFBSXhILElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkIsSUFBTXdILE1BQUssR0FBR3BYLDJEQUFXLEdBQUd5N0Isc0JBQXNCLENBQUMsQ0FBQyxDQUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUd4VixPQUFPLENBQUNxVyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNiLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEcsSUFBSTlqQixNQUFLLEVBQUU7Y0FDUDBSLE9BQU8sQ0FBQzNlLElBQUksQ0FBSWd4QixXQUFXLFNBQUkvakIsTUFBSyxDQUFDd0MsS0FBTyxDQUFDO1lBQ2pEO1VBQ0o7VUFFQSxJQUFJaEssSUFBSSxLQUFLLGdCQUFnQixFQUFFO1lBQzNCa1osT0FBTyxDQUFDM2UsSUFBSSxDQUFJZ3hCLFdBQVcsU0FBTSxDQUFDO1VBQ3RDO1VBRUE7UUFDSjtRQUVBLElBQUl2ckIsSUFBSSxLQUFLLGdCQUFnQixFQUFFO1VBQzNCa1osT0FBTyxDQUFDM2UsSUFBSSxDQUFJZ3hCLFdBQVcsUUFBSyxDQUFDO1FBQ3JDO1FBRUEsSUFBSXZnQixRQUFRLEVBQUU7VUFDVm9nQix5QkFBeUIsQ0FBQzd3QixJQUFJLENBQUN4UyxLQUFLLENBQUM7UUFDekM7TUFDSjtJQUNKLENBQUMsQ0FBQztJQUVGLElBQUlxa0MsY0FBYyxHQUFHaEIseUJBQXlCLENBQUMxakMsTUFBTSxLQUFLLENBQUMsR0FBR3d4QixPQUFPLENBQUNsZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQ2tJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxhQUFhO0lBQ3ZHLElBQU1tckIsSUFBSSxHQUFHaGlDLENBQUMsQ0FBQyxjQUFjLENBQUM7SUFFOUIsSUFBSStoQyxjQUFjLEVBQUU7TUFDaEJBLGNBQWMsR0FBR0EsY0FBYyxLQUFLLGFBQWEsR0FBRyxFQUFFLEdBQUdBLGNBQWM7TUFDdkUsSUFBSUMsSUFBSSxDQUFDdC9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1FBQzlCcy9CLElBQUksQ0FBQ3QvQixJQUFJLENBQUMsc0JBQXNCLEVBQUVxL0IsY0FBYyxDQUFDO01BQ3JELENBQUMsTUFBTTtRQUNILElBQU1FLFdBQVcsR0FBR0QsSUFBSSxDQUFDM2hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDbVYsU0FBUyxDQUFDdEgsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7UUFDdEYsSUFBTWcwQixJQUFJLEdBQUdsaUMsQ0FBQyxtQkFBZ0JpaUMsV0FBVyxRQUFJLENBQUM7UUFDOUNDLElBQUksQ0FBQ3gvQixJQUFJLENBQUMsc0JBQXNCLEVBQUVxL0IsY0FBYyxDQUFDO01BQ3JEO0lBQ0o7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQSxLQUhJO0VBQUE3aEMsTUFBQSxDQUlBaWlDLGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUEsRUFBRztJQUNoQixJQUFJO01BQ0EsT0FBTzN0QixNQUFNLENBQUM0dEIsSUFBSSxLQUFLNXRCLE1BQU0sQ0FBQzZ0QixHQUFHO0lBQ3JDLENBQUMsQ0FBQyxPQUFPeG1DLENBQUMsRUFBRTtNQUNSLE9BQU8sSUFBSTtJQUNmO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUpJO0VBQUFxRSxNQUFBLENBS0E0L0IscUJBQXFCLEdBQXJCLFNBQUFBLHFCQUFxQkEsQ0FBQ3QvQixLQUFLLEVBQUU7SUFBQSxJQUFBeUUsTUFBQTtJQUN6QixJQUFNcTlCLGNBQWMsR0FBR3RpQyxDQUFDLENBQUNRLEtBQUssQ0FBQ2tCLE1BQU0sQ0FBQztJQUN0QyxJQUFNb1EsS0FBSyxHQUFHd3dCLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUM1QyxJQUFNcjZCLFNBQVMsR0FBR2xJLENBQUMsQ0FBQyxxQkFBcUIsRUFBRThSLEtBQUssQ0FBQyxDQUFDRSxHQUFHLENBQUMsQ0FBQzs7SUFFdkQ7SUFDQSxJQUFJc3dCLGNBQWMsQ0FBQzUvQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxJQUFJOFIsTUFBTSxDQUFDQyxRQUFRLEtBQUtDLFNBQVMsRUFBRTtNQUN6RTtJQUNKO0lBRUFuSCxzRUFBUyxDQUFDOHlCLGlCQUFpQixDQUFDQyxZQUFZLENBQUNwNEIsU0FBUyxFQUFFNEosS0FBSyxDQUFDeXVCLFNBQVMsQ0FBQyxDQUFDLEVBQUUsOEJBQThCLEVBQUUsVUFBQzlwQixHQUFHLEVBQUUzQixRQUFRLEVBQUs7TUFDdEgsSUFBTThvQixxQkFBcUIsR0FBRzlvQixRQUFRLENBQUNqVSxJQUFJLElBQUksQ0FBQyxDQUFDO01BQ2pELElBQU0yaEMsd0JBQXdCLEdBQUcxdEIsUUFBUSxDQUFDMGpCLE9BQU8sSUFBSSxDQUFDLENBQUM7TUFDdkR2ekIsTUFBSSxDQUFDd3pCLHVCQUF1QixDQUFDbUYscUJBQXFCLENBQUM7TUFDbkQzNEIsTUFBSSxDQUFDMFQsVUFBVSxDQUFDaWxCLHFCQUFxQixFQUFFNEUsd0JBQXdCLENBQUM7TUFDaEV2OUIsTUFBSSxDQUFDbTVCLHdCQUF3QixDQUFDLENBQUM7TUFDL0JYLDREQUFXLENBQUMrQywwQkFBMEIsQ0FBQzVDLHFCQUFxQixDQUFDO01BRTdELElBQUksQ0FBQzM0QixNQUFJLENBQUNvUSxxQkFBcUIsQ0FBQ3ZELEtBQUssQ0FBQyxFQUFFO1FBQ3BDLElBQU0yd0IsUUFBUSxHQUFHM3dCLEtBQUssQ0FBQ3l3QixPQUFPLENBQUMsY0FBYyxDQUFDLENBQUNsaUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3hFODhCLHlEQUFZLENBQUMsZUFBZSxFQUFFO1VBQUVzRixRQUFRLEVBQVJBO1FBQVMsQ0FBQyxDQUFDO01BQy9DO01BRUFqK0IsUUFBUSxDQUFDaytCLGFBQWEsQ0FBQyxJQUFJQyxXQUFXLENBQUMseUJBQXlCLEVBQUU7UUFDOURDLE9BQU8sRUFBRSxJQUFJO1FBQ2JDLE1BQU0sRUFBRTtVQUNKckssT0FBTyxFQUFFb0YscUJBQXFCO1VBQzlCLzhCLElBQUksRUFBRTJoQztRQUNWO01BQ0osQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0E7QUFDQSxLQUhJO0VBQUF0aUMsTUFBQSxDQUlBMC9CLHNCQUFzQixHQUF0QixTQUFBQSxzQkFBc0JBLENBQUNrRCxPQUFPLEVBQUVDLFlBQVksRUFBRTtJQUMxQyxJQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQ3BnQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdDLElBQU11Z0MsbUJBQW1CLEdBQUdGLFlBQVksQ0FBQ3JnQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEUsSUFBTW83QixvQkFBb0IsR0FBRzk5QixDQUFDLE9BQUtpakMsbUJBQW1CLDhCQUEyQixDQUFDO0lBRWxGampDLENBQUMsQ0FBQyxxQkFBcUIsRUFBRStpQyxZQUFZLENBQUMsQ0FBQ2hnQyxJQUFJLENBQUNpZ0MsVUFBVSxDQUFDO0lBQ3ZEbEYsb0JBQW9CLENBQUMvNkIsSUFBSSxDQUFJLElBQUksQ0FBQ2c3Qix3QkFBd0IsQ0FBQ2tGLG1CQUFtQixDQUFDLFNBQUlELFVBQVksQ0FBQztJQUNoRyxJQUFJLENBQUNwdUIsdUJBQXVCLENBQUNrcEIsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQztFQUM3RSxDQUFDO0VBQUE1OUIsTUFBQSxDQUVEMFUsdUJBQXVCLEdBQXZCLFNBQUFBLHVCQUF1QkEsQ0FBQ3N1QixRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUN4Z0MsSUFBSSxDQUFDO01BQ1YyZ0MsSUFBSSxFQUFFRixRQUFRO01BQ2QsV0FBVyxFQUFFQztJQUNqQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFsakMsTUFBQSxDQUVEbVYscUJBQXFCLEdBQXJCLFNBQUFBLHFCQUFxQkEsQ0FBQzZ0QixRQUFRLEVBQUU7SUFDNUIsT0FBTyxDQUFDLENBQUNBLFFBQVEsQ0FBQ1gsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDbGxDLE1BQU07RUFDbEQsQ0FBQztFQUFBNkMsTUFBQSxDQUVEbWIsZ0JBQWdCLEdBQWhCLFNBQUFBLGdCQUFnQkEsQ0FBQy9SLEtBQUssRUFBRTtJQUNwQixJQUFJZzZCLDJEQUFBLENBQWNoNkIsS0FBSyxDQUFDLEVBQUU7TUFDdEIsSUFBTXZJLFlBQVksR0FBR3dNLHdFQUFXLENBQUN6TSxXQUFXLENBQUMwSSxTQUFTLENBQ2xERixLQUFLLENBQUN6SSxJQUFJLEVBQ1Y7UUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDa1UsT0FBTyxDQUFDM007TUFBUztNQUM5QjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBR1ksQ0FBQztNQUVELElBQU0vQyxZQUFZLEdBQUdrSSx3RUFBVyxDQUFDek0sV0FBVyxDQUFDMEksU0FBUyxDQUNsREYsS0FBSyxDQUFDekksSUFBSSxFQUNWO1FBQUUsSUFBSSxFQUFFLElBQUksQ0FBQ2tVLE9BQU8sQ0FBQzFNO01BQVk7TUFDakM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUdZLENBQUM7TUFFRCxJQUFNL0MsZUFBZSxHQUFHaUksd0VBQVcsQ0FBQ3pNLFdBQVcsQ0FBQzBJLFNBQVMsQ0FBQ0YsS0FBSyxDQUFDekksSUFBSSxDQUFDO01BRXJFLElBQUksQ0FBQ2pCLFlBQVksQ0FBQzJqQyxpQkFBaUIsQ0FBQztRQUNoQ2wrQixZQUFZLEVBQVpBLFlBQVk7UUFDWnRFLFlBQVksRUFBWkEsWUFBWTtRQUNadUUsZUFBZSxFQUFmQTtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQzFGLFlBQVksQ0FBQzRqQyxZQUFZLENBQUMsQ0FBQztJQUNwQztFQUNKOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FKSTtFQUFBdGpDLE1BQUEsQ0FLQTI5QixvQkFBb0IsR0FBcEIsU0FBQUEsb0JBQW9CQSxDQUFBLEVBQUc7SUFBQSxJQUFBajNCLE1BQUE7SUFDbkIsSUFBSSxDQUFDa0IsTUFBTSxDQUFDdkgsRUFBRSxDQUFDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDOURBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDdEIsSUFBTWdqQyxPQUFPLEdBQUd6akMsQ0FBQyxDQUFDUSxLQUFLLENBQUNHLGFBQWEsQ0FBQztNQUN0QyxJQUFNODZCLFNBQVMsR0FBRzcwQixNQUFJLENBQUNtTSxZQUFZLENBQUNuTSxNQUFJLENBQUNrQixNQUFNLENBQUM7TUFDaEQsSUFBTW96QixNQUFNLEdBQUdPLFNBQVMsQ0FBQ0osUUFBUSxDQUFDSCxNQUFNO01BQ3hDLElBQU13SSxXQUFXLEdBQUdsVCxRQUFRLENBQUMwSyxNQUFNLENBQUNyNkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUM1RCxJQUFNOGlDLFdBQVcsR0FBR25ULFFBQVEsQ0FBQzBLLE1BQU0sQ0FBQ3I2QixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDO01BRTVELElBQUl5WCxHQUFHLEdBQUdnbEIsNkRBQUssQ0FBQ3FELFdBQVcsQ0FBQ3pGLE1BQU0sQ0FBQ2xwQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUd3ZSxRQUFRLENBQUMwSyxNQUFNLENBQUNscEIsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRzB4QixXQUFXO01BQ3BGO01BQ0EsSUFBSUQsT0FBTyxDQUFDNWlDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLEVBQUU7UUFDbEN5WCxHQUFHLEdBQUdnbEIsNkRBQUssQ0FBQ3NHLGtDQUFrQyxDQUFDdHJCLEdBQUcsRUFBRXFyQixXQUFXLENBQUM7TUFDcEUsQ0FBQyxNQUFNLElBQUlyckIsR0FBRyxHQUFHLENBQUMsRUFBRTtRQUNoQkEsR0FBRyxHQUFHZ2xCLDZEQUFLLENBQUN1RyxrQ0FBa0MsQ0FBQ3ZyQixHQUFHLEVBQUVvckIsV0FBVyxDQUFDO01BQ3BFOztNQUVBO01BQ0FqSSxTQUFTLENBQUNKLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDbHBCLEdBQUcsQ0FBQ3NHLEdBQUcsQ0FBQztNQUNsQztNQUNBbWpCLFNBQVMsQ0FBQ0osUUFBUSxDQUFDdmEsS0FBSyxDQUFDL2QsSUFBSSxDQUFDdVYsR0FBRyxDQUFDO01BQ2xDO01BQ0ExUixNQUFJLENBQUN5M0Isa0JBQWtCLENBQUMyQixZQUFZLENBQUMsQ0FBQztNQUV0Q3A1QixNQUFJLENBQUN3M0Isd0JBQXdCLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJLENBQUN0MkIsTUFBTSxDQUFDdkgsRUFBRSxDQUFDLFVBQVUsRUFBRSw2QkFBNkIsRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDL0Q7TUFDQSxJQUFNK2dDLENBQUMsR0FBRy9nQyxLQUFLLENBQUNzakMsS0FBSyxJQUFJdGpDLEtBQUssQ0FBQ3cyQixPQUFPO01BQ3RDLElBQUl1SyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1Y7UUFDQS9nQyxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQzFCO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDcUgsTUFBTSxDQUFDdkgsRUFBRSxDQUFDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxZQUFNO01BQ3pEcUcsTUFBSSxDQUFDdzNCLHdCQUF3QixDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0VBQ047O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUpJO0VBQUFsK0IsTUFBQSxDQUtBd1QsZ0JBQWdCLEdBQWhCLFNBQUFBLGdCQUFnQkEsQ0FBQ2xULEtBQUssRUFBRW1ULElBQUksRUFBRTtJQUFBLElBQUFuTSxNQUFBO0lBQzFCLElBQU11OEIsYUFBYSxHQUFHL2pDLENBQUMsQ0FBQyx3QkFBd0IsRUFBRUEsQ0FBQyxDQUFDUSxLQUFLLENBQUNrQixNQUFNLENBQUMsQ0FBQztJQUNsRSxJQUFNc1MsY0FBYyxHQUFHK3ZCLGFBQWEsQ0FBQy94QixHQUFHLENBQUMsQ0FBQztJQUMxQyxJQUFNaUMsV0FBVyxHQUFHOHZCLGFBQWEsQ0FBQ2xqQyxJQUFJLENBQUMsYUFBYSxDQUFDOztJQUVyRDtJQUNBLElBQUkyVCxNQUFNLENBQUNDLFFBQVEsS0FBS0MsU0FBUyxFQUFFO01BQy9CO0lBQ0o7O0lBRUE7SUFDQWxVLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFdEJzakMsYUFBYSxDQUNSL3hCLEdBQUcsQ0FBQ2lDLFdBQVcsQ0FBQyxDQUNoQlIsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7SUFFM0IsSUFBSSxDQUFDa0IsUUFBUSxDQUFDL1AsSUFBSSxDQUFDLENBQUM7O0lBRXBCO0lBQ0EySSxzRUFBUyxDQUFDZ0osSUFBSSxDQUFDeXRCLE9BQU8sQ0FBQ3pHLDhEQUFpQixDQUFDLElBQUk5b0IsUUFBUSxDQUFDZCxJQUFJLENBQUMsQ0FBQyxFQUFFLFVBQUM4QyxHQUFHLEVBQUUzQixRQUFRLEVBQUs7TUFDN0U0b0Isc0VBQWdCLENBQUM1b0IsUUFBUSxDQUFDalUsSUFBSSxDQUFDb2pDLE9BQU8sQ0FBQztNQUN2QyxJQUFNckQsWUFBWSxHQUFHbnFCLEdBQUcsSUFBSTNCLFFBQVEsQ0FBQ2pVLElBQUksQ0FBQ3FWLEtBQUs7TUFFL0M2dEIsYUFBYSxDQUNSL3hCLEdBQUcsQ0FBQ2dDLGNBQWMsQ0FBQyxDQUNuQlAsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7TUFFNUJqTSxNQUFJLENBQUNtTixRQUFRLENBQUM1USxJQUFJLENBQUMsQ0FBQzs7TUFFcEI7TUFDQSxJQUFJNjhCLFlBQVksRUFBRTtRQUNkO1FBQ0EsSUFBTTFyQixHQUFHLEdBQUcxUSxRQUFRLENBQUMyUSxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3pDRCxHQUFHLENBQUNFLFNBQVMsR0FBR3dyQixZQUFZO1FBRTVCLElBQUksQ0FBQ3A1QixNQUFJLENBQUM2TixxQkFBcUIsQ0FBQzB1QixhQUFhLENBQUMsRUFBRTtVQUM1Q3QyQix5REFBVSxDQUFDLENBQUMsQ0FBQzZILGtCQUFrQixHQUFHeXVCLGFBQWE7UUFDbkQ7UUFFQSxPQUFPcjJCLDZEQUFjLENBQUN3SCxHQUFHLENBQUNLLFdBQVcsSUFBSUwsR0FBRyxDQUFDTSxTQUFTLENBQUM7TUFDM0Q7O01BRUE7TUFDQSxJQUFJaE8sTUFBSSxDQUFDMFQsWUFBWSxFQUFFO1FBQ25CMVQsTUFBSSxDQUFDMFQsWUFBWSxDQUFDZ3BCLElBQUksQ0FBQyxDQUFDO1FBRXhCLElBQUkxdkIsTUFBTSxDQUFDMnZCLGVBQWUsRUFBRTtVQUN4QjM4QixNQUFJLENBQUMwVCxZQUFZLENBQUNrcEIsTUFBTSxDQUFDMS9CLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQztRQUM1RDtRQUVBLElBQUksQ0FBQzhDLE1BQUksQ0FBQzZOLHFCQUFxQixDQUFDMHVCLGFBQWEsQ0FBQyxFQUFFO1VBQzVDdjhCLE1BQUksQ0FBQzBULFlBQVksQ0FBQzVGLGtCQUFrQixHQUFHeXVCLGFBQWE7UUFDeEQ7UUFFQXY4QixNQUFJLENBQUN1VCxpQkFBaUIsQ0FBQ3ZULE1BQUksQ0FBQzBULFlBQVksRUFBRXBHLFFBQVEsQ0FBQ2pVLElBQUksQ0FBQ3dqQyxTQUFTLENBQUNobkIsRUFBRSxDQUFDO01BQ3pFLENBQUMsTUFBTTtRQUNIN1YsTUFBSSxDQUFDbU4sUUFBUSxDQUFDL1AsSUFBSSxDQUFDLENBQUM7UUFDcEI7UUFDQTRDLE1BQUksQ0FBQzg4QixVQUFVLENBQUN4dkIsUUFBUSxDQUFDalUsSUFBSSxDQUFDd2pDLFNBQVMsQ0FBQ0UsUUFBUSxJQUFJLzhCLE1BQUksQ0FBQ3VOLE9BQU8sQ0FBQ3l2QixJQUFJLENBQUNqdUIsSUFBSSxDQUFDO01BQy9FO0lBQ0osQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDM0IsdUJBQXVCLENBQUNtdkIsYUFBYSxDQUFDbHZCLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztFQUMxRTs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMSTtFQUFBM1UsTUFBQSxDQU1BdWtDLGNBQWMsR0FBZCxTQUFBQSxjQUFjQSxDQUFDQyxVQUFVLEVBQUVDLFVBQVUsRUFBRTtJQUNuQyxJQUFNOVYsT0FBTyxHQUFHO01BQ1ptRSxRQUFRLEVBQUUsY0FBYztNQUN4QnJILE1BQU0sRUFBRTtRQUNKaVosT0FBTyxFQUFFRjtNQUNiLENBQUM7TUFDREcsTUFBTSxFQUFFO1FBQ0p0dUIsSUFBSSxFQUFFO1VBQ0Z1dUIsV0FBVyxFQUFFO1lBQ1R4MUIsS0FBSyxFQUFFO1VBQ1g7UUFDSjtNQUNKO0lBQ0osQ0FBQztJQUVEL0Isc0VBQVMsQ0FBQ2dKLElBQUksQ0FBQ3d1QixVQUFVLENBQUNsVyxPQUFPLEVBQUU4VixVQUFVLENBQUM7RUFDbEQ7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUpJO0VBQUF6a0MsTUFBQSxDQUtBb2tDLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFDMzZCLEdBQUcsRUFBRTtJQUNaLElBQUksSUFBSSxDQUFDdzRCLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDM3RCLE1BQU0sQ0FBQ3d3QixTQUFTLEVBQUU7TUFDL0N4d0IsTUFBTSxDQUFDNnRCLEdBQUcsQ0FBQ3RJLFFBQVEsR0FBR3B3QixHQUFHO0lBQzdCLENBQUMsTUFBTTtNQUNINkssTUFBTSxDQUFDdWxCLFFBQVEsR0FBR3B3QixHQUFHO0lBQ3pCO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FOSTtFQUFBekosTUFBQSxDQU9BNmEsaUJBQWlCLEdBQWpCLFNBQUFBLGlCQUFpQkEsQ0FBQ2txQixLQUFLLEVBQUVQLFVBQVUsRUFBRUMsVUFBVSxFQUFFO0lBQzdDLElBQUksQ0FBQ0YsY0FBYyxDQUFDQyxVQUFVLEVBQUUsVUFBQ2p1QixHQUFHLEVBQUUzQixRQUFRLEVBQUs7TUFDL0MsSUFBSTJCLEdBQUcsRUFBRTtRQUNMO01BQ0o7TUFFQXd1QixLQUFLLENBQUNDLGFBQWEsQ0FBQ3B3QixRQUFRLENBQUM7O01BRTdCO01BQ0EsSUFBTS9VLEtBQUssR0FBR0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQztNQUN2QixJQUFNbWxDLGFBQWEsR0FBR25sQyxDQUFDLENBQUMsc0JBQXNCLEVBQUVpbEMsS0FBSyxDQUFDRyxRQUFRLENBQUM7TUFDL0QsSUFBTUMsWUFBWSxHQUFHcmxDLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQztNQUNyRCxJQUFNcTdCLFFBQVEsR0FBRzhKLGFBQWEsQ0FBQ3RrQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztNQUN4RCxJQUFNeWtDLGdCQUFnQixHQUFHdGxDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztNQUNyRCxJQUFNdWxDLG1CQUFtQixHQUFHdmxDLENBQUMsQ0FBQyw0Q0FBNEMsQ0FBQztNQUMzRSxJQUFNd2xDLGNBQWMsR0FBR3hsQyxDQUFDLENBQUMsOEJBQThCLENBQUM7TUFDeEQsSUFBTXlsQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQVM7UUFDOUIsSUFBTUMsaUJBQWlCLEdBQUcxbEMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDO1FBRXpEMGxDLGlCQUFpQixDQUFDMW5CLE1BQU0sQ0FBQywrQ0FBK0MsQ0FBQztRQUN6RWhlLENBQUMsQ0FBQyw0QkFBNEIsRUFBRTBsQyxpQkFBaUIsQ0FBQyxDQUFDOWdDLElBQUksQ0FBQyxDQUFDO1FBQ3pENFAsTUFBTSxDQUFDdWxCLFFBQVEsQ0FBQzRMLE1BQU0sQ0FBQyxDQUFDO01BQzVCLENBQUM7TUFFRE4sWUFBWSxDQUFDM2dDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQztNQUM3QzNFLEtBQUssQ0FBQ2lGLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRXEyQixRQUFRLENBQUM7TUFFL0MsSUFBSXNKLFVBQVUsRUFBRTtRQUNaQSxVQUFVLENBQUM3dkIsUUFBUSxDQUFDO01BQ3hCO01BRUEsSUFBSXd3QixnQkFBZ0IsQ0FBQ2pvQyxNQUFNLElBQUlrb0MsbUJBQW1CLENBQUNsb0MsTUFBTSxFQUFFO1FBQ3ZEa29DLG1CQUFtQixDQUFDaGxDLEVBQUUsQ0FBQyxPQUFPLEVBQUVrbEMsbUJBQW1CLENBQUM7UUFDcERELGNBQWMsQ0FBQ2psQyxFQUFFLENBQUMsT0FBTyxFQUFFa2xDLG1CQUFtQixDQUFDO01BQ25EO0lBQ0osQ0FBQyxDQUFDO0VBQ047O0VBRUE7QUFDSjtBQUNBO0FBQ0EsS0FISTtFQUFBdmxDLE1BQUEsQ0FJQXU0Qix1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDNTNCLElBQUksRUFBRTtJQUMxQjg4QixtQkFBQSxDQUFBcGhDLFNBQUEsQ0FBTWs4Qix1QkFBdUIsQ0FBQWo3QixJQUFBLE9BQUNxRCxJQUFJO0lBQ2xDLElBQUksQ0FBQ3dhLGdCQUFnQixDQUFDeGEsSUFBSSxDQUFDeUksS0FBSyxDQUFDO0VBQ3JDLENBQUM7RUFBQXBKLE1BQUEsQ0FFRGsrQix3QkFBd0IsR0FBeEIsU0FBQUEsd0JBQXdCQSxDQUFBLEVBQUc7SUFDdkIsSUFBTXRzQixLQUFLLEdBQUc5UixDQUFDLENBQUMsMEJBQTBCLENBQUM7SUFDM0MsSUFBTTRsQyxhQUFhLEdBQUc5ekIsS0FBSyxDQUFDK3pCLGNBQWMsQ0FBQyxDQUFDO0lBRTVDLElBQU1DLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFFekIsU0FBQXAyQixTQUFBLEdBQUFVLCtCQUFBLENBQTJCdzFCLGFBQWEsR0FBQWoyQixLQUFBLElBQUFBLEtBQUEsR0FBQUQsU0FBQSxJQUFBalMsSUFBQSxHQUFFO01BQUEsSUFBL0Jzb0MsWUFBWSxHQUFBcDJCLEtBQUEsQ0FBQWpTLEtBQUE7TUFDbkIsSUFBUW9GLElBQUksR0FBWWlqQyxZQUFZLENBQTVCampDLElBQUk7UUFBRXBGLEtBQUssR0FBS3FvQyxZQUFZLENBQXRCcm9DLEtBQUs7TUFFbkIsSUFBSW9GLElBQUksS0FBSyxZQUFZLEVBQUU7UUFDdkJnakMsY0FBYyxDQUFDNTlCLFNBQVMsR0FBRy9HLE1BQU0sQ0FBQ3pELEtBQUssQ0FBQztNQUM1QztNQUVBLElBQUlvRixJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ2xCZ2pDLGNBQWMsQ0FBQ3pLLFFBQVEsR0FBR2w2QixNQUFNLENBQUN6RCxLQUFLLENBQUM7TUFDM0M7TUFFQSxJQUFJb0YsSUFBSSxDQUFDaWdCLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUN6QixJQUFNaWpCLGFBQWEsR0FBRztVQUNsQjVvQixRQUFRLEVBQUVqYyxNQUFNLENBQUMyQixJQUFJLENBQUNpZ0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3ZDa2pCLFdBQVcsRUFBRXZvQztRQUNqQixDQUFDO1FBRURvb0MsY0FBYyxDQUFDSSxnQkFBZ0IsR0FBR0osY0FBYyxZQUFkQSxjQUFjLENBQUVJLGdCQUFnQixNQUFBcjFCLE1BQUEsQ0FDeERpMUIsY0FBYyxDQUFDSSxnQkFBZ0IsR0FBRUYsYUFBYSxLQUNsRCxDQUFDQSxhQUFhLENBQUM7TUFDekI7SUFDSjtJQUVBeGhDLFFBQVEsQ0FBQ2srQixhQUFhLENBQUMsSUFBSUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFO01BQ3REQyxPQUFPLEVBQUUsSUFBSTtNQUNiQyxNQUFNLEVBQUU7UUFBRWlELGNBQWMsRUFBZEE7TUFBZTtJQUM3QixDQUFDLENBQUMsQ0FBQztFQUNQLENBQUM7RUFBQTVsQyxNQUFBLENBRURpK0Isa0JBQWtCLEdBQWxCLFNBQUFBLGtCQUFrQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ3IyQixNQUFNLENBQUNxUCxJQUFJLENBQUMsVUFBQzlhLENBQUMsRUFBRThwQyxLQUFLLEVBQUs7TUFDM0IsU0FBU0MsVUFBVUEsQ0FBQ0MsVUFBVSxFQUFFO1FBQzVCLElBQU1DLGFBQWEsR0FBR0QsVUFBVSxDQUFDbEYsYUFBYSxDQUFDLHlCQUF5QixDQUFDO1FBQ3pFLElBQU1vRixXQUFXLEdBQUdGLFVBQVUsQ0FBQ2xGLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztRQUNyRSxJQUFNcUYsWUFBWSxHQUFHSCxVQUFVLENBQUNsRixhQUFhLENBQUMsd0JBQXdCLENBQUM7UUFDdkUsSUFBTTlXLEtBQUssR0FBR21HLFFBQVEsQ0FBQzhWLGFBQWEsQ0FBQzVvQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQy9DLElBQU00c0IsSUFBSSxHQUFHa0csUUFBUSxDQUFDZ1csWUFBWSxDQUFDOW9DLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDN0MsSUFBSStvQyxXQUFXO1FBRWYsSUFBSSxDQUFDdGxDLE1BQU0sQ0FBQ3VsQyxLQUFLLENBQUNyYyxLQUFLLENBQUMsSUFBSSxDQUFDbHBCLE1BQU0sQ0FBQ3VsQyxLQUFLLENBQUNwYyxJQUFJLENBQUMsRUFBRTtVQUM3QyxRQUFRRCxLQUFLO1lBQ2IsS0FBSyxDQUFDO2NBQ0ZvYyxXQUFXLEdBQUtuYyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSUEsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUtBLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFJLEVBQUUsR0FBRyxFQUFFO2NBQ2xGO1lBQ0osS0FBSyxDQUFDO1lBQUUsS0FBSyxDQUFDO1lBQUUsS0FBSyxDQUFDO1lBQUUsS0FBSyxFQUFFO2NBQzNCbWMsV0FBVyxHQUFHLEVBQUU7Y0FDaEI7WUFDSjtjQUNJQSxXQUFXLEdBQUcsRUFBRTtVQUNwQjtRQUNKO1FBRUEsS0FBSyxJQUFJcmMsR0FBRyxHQUFHLEVBQUUsRUFBRUEsR0FBRyxJQUFJLEVBQUUsRUFBRUEsR0FBRyxFQUFFLEVBQUU7VUFDakMsSUFBTWxLLE1BQU0sR0FBR3FtQixXQUFXLENBQUNwRixhQUFhLHFCQUFrQi9XLEdBQUcsUUFBSSxDQUFDO1VBQ2xFLElBQUlBLEdBQUcsSUFBSXFjLFdBQVcsSUFBSSxDQUFDdm1CLE1BQU0sRUFBRTtZQUMvQnFtQixXQUFXLENBQUMxWCxPQUFPLENBQUNuVyxHQUFHLENBQUMsSUFBSWl1QixNQUFNLENBQUN2YyxHQUFHLEVBQUVBLEdBQUcsQ0FBQyxDQUFDO1VBQ2pELENBQUMsTUFBTSxJQUFJQSxHQUFHLEdBQUdxYyxXQUFXLElBQUl2bUIsTUFBTSxFQUFFO1lBQ3BDQSxNQUFNLENBQUM5ZCxNQUFNLENBQUMsQ0FBQztVQUNuQjtRQUNKO01BQ0o7TUFFQXBDLENBQUMsQ0FBQ21tQyxLQUFLLENBQUMsQ0FBQzVsQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMxRSxDQUFDLEVBQUs7UUFDekIsSUFBTXdxQyxVQUFVLEdBQUd4cUMsQ0FBQyxDQUFDNkYsTUFBTSxJQUFJN0YsQ0FBQyxDQUFDNkYsTUFBTSxDQUFDUixPQUFPLElBQUlyRixDQUFDLENBQUM2RixNQUFNLENBQUNSLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztRQUNwRyxJQUFJbWxDLFVBQVUsRUFBRTtVQUNaRCxVQUFVLENBQUNDLFVBQVUsQ0FBQztRQUMxQjtNQUNKLENBQUMsQ0FBQztNQUVGRixLQUFLLENBQUM5RSxnQkFBZ0IsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDOWlCLE9BQU8sQ0FBQyxVQUFDOG5CLFVBQVUsRUFBSztRQUM1RUQsVUFBVSxDQUFDQyxVQUFVLENBQUM7TUFDMUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUE5MUIsY0FBQTtBQUFBLEVBam5CdUNtb0IsNkRBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTWtPLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBeUJBLENBQUcxeUIsUUFBUSxFQUFJO0VBQ2pELElBQU0yeUIsR0FBRyxHQUFHLElBQUlweUIsUUFBUSxDQUFDLENBQUM7RUFFMUIsSUFBSTtJQUNBLFNBQUEvRSxTQUFBLEdBQUFVLCtCQUFBLENBQXlCOEQsUUFBUSxHQUFBdkUsS0FBQSxJQUFBQSxLQUFBLEdBQUFELFNBQUEsSUFBQWpTLElBQUEsR0FBRTtNQUFBLElBQUFxcEMsV0FBQSxHQUFBbjNCLEtBQUEsQ0FBQWpTLEtBQUE7UUFBdkI4RCxHQUFHLEdBQUFzbEMsV0FBQTtRQUFFOTBCLEdBQUcsR0FBQTgwQixXQUFBO01BQ2hCLElBQUk5MEIsR0FBRyxLQUFLLEVBQUUsRUFBRTtRQUNaNjBCLEdBQUcsQ0FBQzdvQixNQUFNLENBQUN4YyxHQUFHLEVBQUV3USxHQUFHLENBQUM7TUFDeEI7SUFDSjtFQUNKLENBQUMsQ0FBQyxPQUFPblcsQ0FBQyxFQUFFO0lBQ1I4VixPQUFPLENBQUNDLEdBQUcsQ0FBQy9WLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDcEI7RUFFQSxPQUFPZ3JDLEdBQUc7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1FLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBd0JBLENBQUc3eUIsUUFBUSxFQUFJO0VBQ2hELElBQU0yeUIsR0FBRyxHQUFHLElBQUlweUIsUUFBUSxDQUFDLENBQUM7RUFFMUIsSUFBSTtJQUNBLFNBQUF1eUIsVUFBQSxHQUFBNTJCLCtCQUFBLENBQXlCOEQsUUFBUSxHQUFBK3lCLE1BQUEsSUFBQUEsTUFBQSxHQUFBRCxVQUFBLElBQUF2cEMsSUFBQSxHQUFFO01BQUEsSUFBQXlwQyxZQUFBLEdBQUFELE1BQUEsQ0FBQXZwQyxLQUFBO1FBQXZCOEQsR0FBRyxHQUFBMGxDLFlBQUE7UUFBRWwxQixHQUFHLEdBQUFrMUIsWUFBQTtNQUNoQixJQUFJLEVBQUVsMUIsR0FBRyxZQUFZaVAsSUFBSSxDQUFDLElBQUlqUCxHQUFHLENBQUNsUCxJQUFJLElBQUlrUCxHQUFHLENBQUN3aUIsSUFBSSxFQUFFO1FBQ2hEcVMsR0FBRyxDQUFDN29CLE1BQU0sQ0FBQ3hjLEdBQUcsRUFBRXdRLEdBQUcsQ0FBQztNQUN4QjtJQUNKO0VBQ0osQ0FBQyxDQUFDLE9BQU9uVyxDQUFDLEVBQUU7SUFDUjhWLE9BQU8sQ0FBQ3VFLEtBQUssQ0FBQ3JhLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDdEI7RUFFQSxPQUFPZ3JDLEdBQUc7QUFDZCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNdEosaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBR3JwQixRQUFRO0VBQUEsT0FBSTB5Qix5QkFBeUIsQ0FBQ0csd0JBQXdCLENBQUM3eUIsUUFBUSxDQUFDLENBQUM7QUFBQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUNoRC9EO0FBRTNDLElBQU11cEIsV0FBVyxHQUFHO0VBQ2hCK0MsMEJBQTBCLEVBQUUsU0FBNUJBLDBCQUEwQkEsQ0FBR0gsaUJBQWlCLEVBQUs7SUFDL0MsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ3BtQixLQUFLLElBQUlsVSxvREFBVyxFQUFFO0lBRTdDLElBQUlrVSxLQUFLLEdBQUcsQ0FBQztJQUViLElBQUksQ0FBQ29tQixpQkFBaUIsQ0FBQ3BtQixLQUFLLENBQUNvaUIsV0FBVyxFQUFFO01BQ3RDLElBQUlnRSxpQkFBaUIsQ0FBQ3BtQixLQUFLLENBQUNDLFdBQVcsRUFBRTtRQUNyQ0QsS0FBSyxHQUFHb21CLGlCQUFpQixDQUFDcG1CLEtBQUssQ0FBQ0MsV0FBVyxDQUFDeGMsS0FBSztNQUNyRDtNQUVBLElBQUkyaUMsaUJBQWlCLENBQUNwbUIsS0FBSyxDQUFDUSxRQUFRLEVBQUU7UUFDbENSLEtBQUssR0FBR29tQixpQkFBaUIsQ0FBQ3BtQixLQUFLLENBQUNRLFFBQVEsQ0FBQy9jLEtBQUs7TUFDbEQ7SUFDSjtJQUVBLElBQU15cEMsR0FBRyxHQUFHLElBQUl4RSxXQUFXLENBQUMsZ0NBQWdDLEVBQUU7TUFDMURFLE1BQU0sRUFBRTtRQUNKdUUsTUFBTSxFQUFFbnRCO01BQ1o7SUFDSixDQUFDLENBQUM7SUFFRnpGLE1BQU0sQ0FBQ2t1QixhQUFhLENBQUN5RSxHQUFHLENBQUM7RUFDN0I7QUFDSixDQUFDO0FBRUQsaUVBQWUxSixXQUFXLEU7Ozs7Ozs7Ozs7Ozs7OztBQzVCbkIsSUFBTTEzQixXQUFXLEdBQUcsQ0FBQyxDQUFDdkIsUUFBUSxDQUFDNmlDLFlBQVk7QUFFM0MsSUFBTTdKLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUc4SixVQUFVO0VBQUEsT0FBSTMyQixLQUFLLENBQUNwVSxTQUFTLENBQUNtUyxLQUFLLENBQUNsUixJQUFJLENBQUM4cEMsVUFBVSxDQUFDO0FBQUEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEU7QUFBQSxJQUVHMzZCLFlBQVk7RUFDN0IsU0FBQUEsYUFBWTlNLFFBQVEsRUFBRTtJQUNsQixJQUFJLENBQUMwQyxVQUFVLEdBQUcxQyxRQUFRLENBQUNRLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUM1RCxJQUFJLENBQUNrbkMsZ0JBQWdCLEdBQUcxbkMsUUFBUSxDQUFDUSxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDMUQsSUFBSSxDQUFDbW5DLGlCQUFpQixHQUFHM25DLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLDJCQUEyQixDQUFDO0lBQ25FLElBQUksQ0FBQ3NiLFlBQVksR0FBRyxDQUFDLENBQUM7RUFDMUI7RUFBQyxJQUFBemIsTUFBQSxHQUFBeU0sWUFBQSxDQUFBcFEsU0FBQTtFQUFBMkQsTUFBQSxDQUVEdVgsSUFBSSxHQUFKLFNBQUFBLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ3RYLFVBQVUsQ0FBQyxDQUFDO0lBQ2pCLElBQUksQ0FBQ3NuQyxZQUFZLENBQUMsQ0FBQztFQUN2QixDQUFDO0VBQUF2bkMsTUFBQSxDQUVEeUIsWUFBWSxHQUFaLFNBQUFBLFlBQVlBLENBQUMrbEMsTUFBTSxFQUFFO0lBQ2pCLElBQUksQ0FBQy9yQixZQUFZLEdBQUFqZixNQUFBLENBQUFrbEIsTUFBQSxLQUFROGxCLE1BQU0sQ0FBRTtJQUVqQyxJQUFJLENBQUNsaUMsY0FBYyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztFQUN4QixDQUFDO0VBQUF2RixNQUFBLENBRURxakMsaUJBQWlCLEdBQWpCLFNBQUFBLGlCQUFpQkEsQ0FBQ21FLE1BQU0sRUFBRTtJQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDQyxVQUFVLEVBQUU7TUFDbEIsSUFBSSxDQUFDQSxVQUFVLEdBQUc7UUFDZHRpQyxZQUFZLEVBQUUsSUFBSSxDQUFDOUMsVUFBVSxDQUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDcUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNyRDNCLFlBQVksRUFBRSxJQUFJLENBQUN3QixVQUFVLENBQUNHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNyRDRDLGVBQWUsRUFBRSxJQUFJLENBQUMvQyxVQUFVLENBQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUNxQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzNEa2xDLGNBQWMsRUFBRSxJQUFJLENBQUNqc0IsWUFBWSxDQUFDaXNCO01BQ3RDLENBQUM7SUFDTDtJQUNBLElBQUksQ0FBQ2ptQyxZQUFZLENBQUMrbEMsTUFBTSxDQUFDO0VBQzdCLENBQUM7RUFBQXhuQyxNQUFBLENBRURzakMsWUFBWSxHQUFaLFNBQUFBLFlBQVlBLENBQUEsRUFBRztJQUNYLElBQUksSUFBSSxDQUFDbUUsVUFBVSxFQUFFO01BQ2pCLElBQUksQ0FBQ2htQyxZQUFZLENBQUMsSUFBSSxDQUFDZ21DLFVBQVUsQ0FBQztNQUNsQyxPQUFPLElBQUksQ0FBQ0EsVUFBVTtJQUMxQjtFQUNKLENBQUM7RUFBQXpuQyxNQUFBLENBRUQybkMsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUNoc0MsQ0FBQyxFQUFFO0lBQ2RBLENBQUMsQ0FBQzRFLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLElBQU1nakMsT0FBTyxHQUFHempDLENBQUMsQ0FBQ25FLENBQUMsQ0FBQzhFLGFBQWEsQ0FBQztJQUNsQyxJQUFNK21DLE1BQU0sR0FBRztNQUNYcmlDLFlBQVksRUFBRW8rQixPQUFPLENBQUMvZ0MsSUFBSSxDQUFDLGtDQUFrQyxDQUFDO01BQzlEM0IsWUFBWSxFQUFFMGlDLE9BQU8sQ0FBQy9nQyxJQUFJLENBQUMsbUNBQW1DLENBQUM7TUFDL0Q0QyxlQUFlLEVBQUVtK0IsT0FBTyxDQUFDL2dDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQztNQUNwRWtsQyxjQUFjLEVBQUVuRSxPQUFPO01BQ3ZCcUUsWUFBWSxFQUFFckUsT0FBTyxDQUFDeEMsUUFBUSxDQUFDLENBQUMsQ0FBQ3gyQixLQUFLLENBQUMsQ0FBQyxDQUFDL0gsSUFBSSxDQUFDLEtBQUs7SUFDdkQsQ0FBQztJQUNELElBQUksQ0FBQ2YsWUFBWSxDQUFDK2xDLE1BQU0sQ0FBQztFQUM3QixDQUFDO0VBQUF4bkMsTUFBQSxDQUVEc0YsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUEsRUFBRztJQUNiLElBQUksQ0FBQ2dpQyxpQkFBaUIsQ0FBQzNpQyxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQy9DLElBQUksSUFBSSxDQUFDOFcsWUFBWSxDQUFDaXNCLGNBQWMsRUFBRTtNQUNsQyxJQUFJLENBQUNqc0IsWUFBWSxDQUFDaXNCLGNBQWMsQ0FBQ2xqQyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQzFEO0VBQ0osQ0FBQztFQUFBeEUsTUFBQSxDQUVEdUYsYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUNaLElBQU1NLFdBQVcsR0FBR0MsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFFM0QsSUFBSSxDQUFDTCxRQUFRLENBQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNpRixJQUFJLENBQy9CLElBQUksQ0FBQzZWLFlBQVksQ0FBQ3RXLFlBQVksRUFDOUIsSUFBSSxDQUFDc1csWUFBWSxDQUFDNWEsWUFBWSxFQUM5QixJQUFJLENBQUM0YSxZQUFZLENBQUNyVyxlQUN0QixDQUFDO0lBRUQsSUFBSSxDQUFDL0MsVUFBVSxDQUFDRyxJQUFJLENBQUM7TUFDakIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDaVosWUFBWSxDQUFDNWE7SUFDekMsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDd21DLGdCQUFnQixDQUFDN2tDLElBQUksQ0FBQztNQUN2QnFsQyxHQUFHLEVBQUUsSUFBSSxDQUFDcHNCLFlBQVksQ0FBQ21zQixZQUFZO01BQ25Dbm9CLEtBQUssRUFBRSxJQUFJLENBQUNoRSxZQUFZLENBQUNtc0I7SUFDN0IsQ0FBQyxDQUFDO0lBRUYsSUFBSS9oQyxXQUFXLEVBQUU7TUFDYixJQUFNSSxnQkFBZ0IsR0FBRztRQUNyQixrQkFBa0IsV0FBUyxJQUFJLENBQUN3VixZQUFZLENBQUN0VyxZQUFZLE1BQUc7UUFDNUQscUJBQXFCLEVBQUUsUUFBUTtRQUMvQixtQkFBbUIsRUFBRSxXQUFXO1FBQ2hDLG1CQUFtQixFQUFFLGFBQWE7UUFDbEMsaUJBQWlCLEVBQUU7TUFDdkIsQ0FBQztNQUVELElBQUksQ0FBQ2tpQyxnQkFBZ0IsQ0FBQ25oQyxHQUFHLENBQUNELGdCQUFnQixDQUFDO0lBQy9DO0VBQ0osQ0FBQztFQUFBakcsTUFBQSxDQUVEbUcsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUNULElBQU1ULGVBQWUsR0FBRzVGLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMvQyxJQUFNc0csZUFBZSxHQUFHVixlQUFlLENBQUNXLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELElBQU1DLGNBQWMsR0FBR1osZUFBZSxDQUFDYSxLQUFLLENBQUMsQ0FBQztJQUU5QyxJQUFNQyxNQUFNLEdBQUcsSUFBSSxDQUFDYixRQUFRLENBQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM4RixLQUFLO0lBQ25ELElBQU1KLE1BQU0sR0FBR0csTUFBTSxDQUFDSCxNQUFNLENBQUMsQ0FBQztJQUM5QixJQUFNRSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDLENBQUM7SUFFNUIsSUFBSUYsTUFBTSxHQUFHRCxlQUFlLElBQUlHLEtBQUssR0FBR0QsY0FBYyxFQUFFO01BQ3BELElBQUksQ0FBQ1gsUUFBUSxDQUFDaEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDa0QsSUFBSSxDQUFDLENBQUM7SUFDekM7RUFDSixDQUFDO0VBQUE3RCxNQUFBLENBRUR1bkMsWUFBWSxHQUFaLFNBQUFBLFlBQVlBLENBQUEsRUFBRztJQUFBLElBQUFybkMsS0FBQTtJQUNYLElBQUksQ0FBQ3lGLFFBQVEsR0FBRyxJQUFJLENBQUN0RCxVQUFVLENBQUNzRSxRQUFRLENBQUM7TUFDckNDLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFBO1FBQUEsT0FBUTFHLEtBQUksQ0FBQ2lHLFVBQVUsQ0FBQyxDQUFDO01BQUE7TUFDL0JVLFdBQVcsRUFBRSxFQUFFO01BQ2ZDLGFBQWEsRUFBRTtJQUNuQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUE5RyxNQUFBLENBRURDLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNxbkMsaUJBQWlCLENBQUNqbkMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNzbkMsY0FBYyxDQUFDenFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN0RSxDQUFDO0VBQUEsT0FBQXVQLFlBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvaW1hZ2UtZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2V5ZXZhL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL3NhbGUtY291bnRkb3duLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9yYWRpb09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy1iYXNlLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvYmFubmVyLXV0aWxzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9pZS1oZWxwZXJzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Vhc3l6b29tJztcclxuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuaW1wb3J0IHsgY3JlYXRlRm9jdXNUcmFwIH0gZnJvbSAnZm9jdXMtdHJhcCc7XHJcbmltcG9ydCB7IHRvb2xzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkgZnJvbSAnLi4vLi4vdGhlbWUvcHJvZHVjdC9pbWFnZS1nYWxsZXJ5JztcclxuXHJcbmNvbnN0IERFRkFVTFRfU1RFUCA9IDM2MDtcclxuY2xhc3MgSW1hZ2VHYWxsZXJ5TW9kYWwge1xyXG4gICAgbW9kYWxUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1jbG9zZVwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkNsb3NlXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCI+Q2xvc2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+PHVzZSBocmVmPVwiI2ljb24teG1hcmstbGFyZ2VcIj48L3VzZT48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tZWFzeXpvb21cIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4taW1nLWNvbnRhaW5lclwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1tYWluLWltZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbWFpbkltYWdlTGlua0VsZW1lbnR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tMzYwXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MCBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC0zNjAtaW1nLWNvbnRhaW5lclwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtaW1nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBkYXRhLXNpemVzPVwiYXV0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcHJldmlvdXNcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXByZXZpb3VzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LWxlZnQtbG9uZ1wiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5QcmV2aW91czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1wbGF5XCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wbGF5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXBsYXlcIj48L3VzZT48L3N2Zz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UGxheTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1wYXVzZVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGF1c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tcGF1c2VcIj48L3VzZT48L3N2Zz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UGF1c2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tbmV4dFwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtbmV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1hcnJvdy1yaWdodC1sb25nXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPk5leHQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi12aWRlb1wiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxhenlsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjY0MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzkwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRpdGxlXCI+e3tuYW1lfX08L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sjdmlkZW9zLmxlbmd0aH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXZpZGVvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3t2aWRlb3NMYWJlbH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I3ZpZGVvc319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey92aWRlb3N9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3svdmlkZW9zLmxlbmd0aH19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXMzNjAubGVuZ3RofX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbGFiZWxcIj57e2ltYWdlczM2MExhYmVsfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzMzYwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsaW5rRWxlbWVudH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXMzNjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzMzYwLmxlbmd0aH19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXMubGVuZ3RofX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbGFiZWxcIj57e2ltYWdlc0xhYmVsfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsaW5rRWxlbWVudH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXN9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzLmxlbmd0aH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SW1hZ2VHYWxsZXJ5P30gaW1hZ2VHYWxsZXJ5XHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeT99ICRnYWxsZXJ5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGltYWdlR2FsbGVyeSA9IG51bGwsICRnYWxsZXJ5ID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5ID0gaW1hZ2VHYWxsZXJ5O1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnkgPSAkZ2FsbGVyeTtcclxuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xyXG5cclxuICAgICAgICBpZiAoaW1hZ2VHYWxsZXJ5ICYmICRnYWxsZXJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9kYWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICBpZiAodGhpcy4kZ2FsbGVyeSkge1xyXG4gICAgICAgICAgICAvLyBvcGVuIG1vZGFsIHdoZW4gY2xpY2sgb24gdmlkZW8sIDM2MCB2aWV3LCBvciBtb3JlIGltYWdlIHRodW1ibmFpbHNcclxuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tbW9yZV0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKVxyXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmNzZXQgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSAkYS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXScpLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHZpZGVvSWQsIHN0ZXApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIGNsb3NlIGJ1dHRvblxyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBwcmVzcyBFc2NhcGUga2V5XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLm9uKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBjbGljayBvdXRzaWRlIChvdmVybGF5KVxyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJGdhbGxlcnlNb2RhbC5pcyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gaW1hZ2UgdGh1bWJuYWlsc1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW1dJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxyXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcclxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB2aWRlbyB0aHVtYm5haWxzXHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8odmlkZW9JZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDM2MCBpbWFnZSB0aHVtYm5haWxzXHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsU3RlcCA9ICRhLmRhdGEoJ2V5ZXZhSW1hZ2VHYWxsZXJ5TW9kYWxJdGVtUm90YXRvcicpO1xyXG4gICAgICAgICAgICB0aGlzLnNldE1haW4zNjAoXHJcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxyXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcclxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpLFxyXG4gICAgICAgICAgICAgICAgdG90YWxTdGVwLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcHJldmlvdXNdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXMzNjBTdGVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1uZXh0XScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQzNjBTdGVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wbGF5XScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXkzNjAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBhdXNlXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlMzYwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveU1vZGFsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLiRnYWxsZXJ5TW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwgPSAkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1vZGFsKCkge1xyXG4gICAgICAgIGNvbnN0ICRtYWluSW1hZ2VMaW5rID0gdGhpcy5pbWFnZUdhbGxlcnkuJG1haW5JbWFnZS5maW5kKCdhJykuY2xvbmUoKTtcclxuICAgICAgICAkbWFpbkltYWdlTGluay5maW5kKCdpbWcnKS5yZW1vdmVBdHRyKCdkYXRhLXpvb20taW1hZ2UnKS5hdHRyKCdkYXRhLWV5ZXZhLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZScsICcnKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbkltYWdlTGlua0VsZW1lbnQgPSAkbWFpbkltYWdlTGluay5nZXQoMCk/Lm91dGVySFRNTDtcclxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy4kZ2FsbGVyeS5jbG9zZXN0KCcucHJvZHVjdFZpZXcnKS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LXRpdGxlXScpLnRleHQoKTtcclxuICAgICAgICBjb25zdCB2aWRlb3NMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgndmlkZW9zTGFiZWwnKSB8fCAnVmlkZW9zJztcclxuICAgICAgICBjb25zdCBpbWFnZXMzNjBMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgnaW1hZ2VzMzYwTGFiZWwnKSB8fCAnMzYwIFZpZXcnO1xyXG4gICAgICAgIGNvbnN0IGltYWdlc0xhYmVsID0gdGhpcy4kZ2FsbGVyeS5kYXRhKCdpbWFnZXNMYWJlbCcpIHx8ICdQcm9kdWN0IEltYWdlcyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHRoaXMuJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvXScpLmdldCgpLm1hcChsaSA9PiAoe1xyXG4gICAgICAgICAgICBsaW5rRWxlbWVudDogJChsaSkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLmNsb25lKCkuZ2V0KDApPy5vdXRlckhUTUwsXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZXMzNjAgPSB0aGlzLiRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdJykuZ2V0KCkubWFwKGxpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChsaSkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpLmNsb25lKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQO1xyXG4gICAgICAgICAgICAkZWwucmVtb3ZlQXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0nKS5hdHRyKCdkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yJywgc3RlcCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICRlbC5nZXQoMCk/Lm91dGVySFRNTCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy4kZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJykuZ2V0KClcclxuICAgICAgICAgICAgLmZpbHRlcihhID0+ICQoYSkuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS1tb3JlXScpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgLm1hcChhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRhID0gJChhKS5jbG9uZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtJylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0nLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogJGEuZ2V0KDApPy5vdXRlckhUTUwsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RhbFRlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgIG1haW5JbWFnZUxpbmtFbGVtZW50LFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2aWRlb3NMYWJlbCxcclxuICAgICAgICAgICAgaW1hZ2VzMzYwTGFiZWwsXHJcbiAgICAgICAgICAgIGltYWdlc0xhYmVsLFxyXG4gICAgICAgICAgICB2aWRlb3MsXHJcbiAgICAgICAgICAgIGltYWdlczM2MCxcclxuICAgICAgICAgICAgaW1hZ2VzLFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmhpZGUoKS5hcHBlbmRUbyh0aGlzLiRib2R5KTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0SW1hZ2Vab29tKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGdhbGxlcnlNb2RhbC5nZXQoMCksIHtcclxuICAgICAgICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RhbChpbWFnZVVybCwgaW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdmlkZW9JZCwgdG90YWxTdGVwKSB7XHJcbiAgICAgICAgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoJ19nYWxsZXJ5TW9kYWwtb3BlbmVkJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmltYWdlR2FsbGVyeSkge1xyXG4gICAgICAgICAgICBjb25zdCAkbWFpbkltZyA9IHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuZmluZCgnaW1nJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKFxyXG4gICAgICAgICAgICAgICAgJG1haW5JbWcuYXR0cignc3JjJyksXHJcbiAgICAgICAgICAgICAgICAkbWFpbkltZy5hdHRyKCdzcmNzZXQnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuYXR0cignZGF0YS16b29tLWltYWdlJyksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmlkZW9JZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1haW5WaWRlbyh2aWRlb0lkKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsU3RlcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1haW4zNjAoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19vcGVuaW5nJykuc2hvdygpLnJlbW92ZUNsYXNzKCdfb3BlbmluZycpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19jbG9zaW5nJyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZU1haW5WaWRlbygpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUzNjBVSSgpO1xyXG4gICAgICAgICAgICB0aGlzLiRib2R5LnJlbW92ZUNsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xyXG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwucmVtb3ZlQ2xhc3MoJ19jbG9zaW5nJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcC5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRsYXN0QWN0aXZlRWxlbWVudCkgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlTWFpblZpZGVvKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcclxuICAgICAgICB0aGlzLnNob3dNYWluSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYihtYWluSW1hZ2VVcmwpO1xyXG4gICAgICAgIHRoaXMuc3dhcE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TWFpbkltYWdlKCkge1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTWFpbkltYWdlKCkge1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmVUaHVtYihtYWluSW1hZ2VVcmwsIHZpZGVvSWQpIHtcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChfaSwgYSkgPT5cclxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybCAmJiAkKGEpLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJykgPT09IG1haW5JbWFnZVVybFxyXG4gICAgICAgICAgICAgICAgfHwgdmlkZW9JZCAmJiAkKGEpLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJykgPT09IHZpZGVvSWQpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKSB7XHJcbiAgICAgICAgY29uc3QgJGltYWdlQ29udGFpbmVyID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJyk7XHJcbiAgICAgICAgY29uc3QgJGEgPSAkaW1hZ2VDb250YWluZXIuZmluZCgnYScpO1xyXG4gICAgICAgIGNvbnN0ICRtYWluSW1hZ2UgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtZ2FsbGVyeS1tb2RhbC1tYWluLWltYWdlXScpO1xyXG5cclxuICAgICAgICAkaW1hZ2VDb250YWluZXIuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcclxuICAgICAgICAkYS5hdHRyKCdocmVmJywgem9vbUltYWdlVXJsKTtcclxuICAgICAgICAkbWFpbkltYWdlLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybCkuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLnN3YXAoXHJcbiAgICAgICAgICAgIG1haW5JbWFnZVVybCxcclxuICAgICAgICAgICAgem9vbUltYWdlVXJsLFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNCcm93c2VySUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdUcmlkZW50Jyk7XHJcbiAgICAgICAgaWYgKGlzQnJvd3NlcklFKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrU3R5bGVzSUUgPSB7XHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoJHttYWluSW1hZ2VVcmx9KWAsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1vcmlnaW4nOiAnY29udGVudC1ib3gnLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb250YWluJyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZV0nKS5jc3MoZmFsbGJhY2tTdHlsZXNJRSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSW1hZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgJGltYWdlQ29udGFpbmVyID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWctY29udGFpbmVyXScpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICRpbWFnZUNvbnRhaW5lci5oZWlnaHQoKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICRpbWFnZUNvbnRhaW5lci53aWR0aCgpO1xyXG5cclxuICAgICAgICBjb25zdCAkaW1hZ2UgPSB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuJHpvb207XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gJGltYWdlLmhlaWdodCgpO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gJGltYWdlLndpZHRoKCk7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHQgPCBjb250YWluZXJIZWlnaHQgfHwgd2lkdGggPCBjb250YWluZXJXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0SW1hZ2Vab29tKCkge1xyXG4gICAgICAgIHRoaXMuZWFzeXpvb20gPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5lYXN5Wm9vbSh7XHJcbiAgICAgICAgICAgIG9uU2hvdzogKCkgPT4gdGhpcy5jaGVja0ltYWdlKCksXHJcbiAgICAgICAgICAgIGVycm9yTm90aWNlOiAnJyxcclxuICAgICAgICAgICAgbG9hZGluZ05vdGljZTogJycsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01haW5WaWRlbygpIHtcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXJdJykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNYWluVmlkZW8oKSB7XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLmhpZGUoKVxyXG4gICAgICAgICAgICAuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1haW5WaWRlbyh2aWRlb0lkKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlTWFpbkltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcclxuICAgICAgICB0aGlzLnNob3dNYWluVmlkZW8oKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3JjID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/cmVmPTAmYXV0b3BsYXk9MWA7XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLnNob3coKS5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCBzcmMpO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobnVsbCwgdmlkZW9JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFpbjM2MChtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApIHtcclxuICAgICAgICB0aGlzLmhpZGVNYWluSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmhpZGVNYWluVmlkZW8oKTtcclxuICAgICAgICB0aGlzLnNob3czNjBVSSgpO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsKTtcclxuICAgICAgICB0aGlzLnN3YXBNYWluMzYwKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcE1haW4zNjAobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKSB7XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLWltZy1jb250YWluZXJdIGltZycpXHJcbiAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpXHJcbiAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXHJcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xyXG4gICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoMCwgdG90YWxTdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93MzYwVUkoKSB7XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlMzYwVUkoKSB7XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnBhdXNlMzYwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0MzYwQ3VycmVudFN0ZXAoY3VycmVudFN0ZXAsIHRvdGFsU3RlcCA9IERFRkFVTFRfU1RFUCkge1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKVxyXG4gICAgICAgICAgICAuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JywgY3VycmVudFN0ZXApXHJcbiAgICAgICAgICAgIC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJywgdG90YWxTdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0MzYwU3RlcCgpIHtcclxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JykpIHx8IDA7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtc3RlcHMnKSkgfHwgREVGQVVMVF9TVEVQO1xyXG5cclxuICAgICAgICBpZiAoc3RlcCA8IHRvdGFsIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKHN0ZXAgKyAxLCB0b3RhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcCgwLCB0b3RhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzMzYwU3RlcCgpIHtcclxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JykpIHx8IDA7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtc3RlcHMnKSkgfHwgREVGQVVMVF9TVEVQO1xyXG5cclxuICAgICAgICBpZiAoc3RlcCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcChzdGVwIC0gMSwgdG90YWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAodG90YWwgLSAxLCB0b3RhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXkzNjAoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsMzYwKTtcclxuICAgICAgICB0aGlzLmludGVydmFsMzYwID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQzNjBTdGVwKCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykuYWRkQ2xhc3MoJ19wbGF5aW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2UzNjAoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsMzYwKTtcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykucmVtb3ZlQ2xhc3MoJ19wbGF5aW5nJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkSW1hZ2VHYWxsZXJ5TW9kYWwgZXh0ZW5kcyBJbWFnZUdhbGxlcnlNb2RhbCB7XHJcbiAgICBsb2FkaW5nTW9kYWxUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IGV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sb2FkaW5nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAkc2NvcGUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9kdWN0SWQsXHJcbiAgICAgICAgICAgIGdyYXBoUUxUb2tlbixcclxuICAgICAgICAgICAgem9vbVNpemUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RTaXplLFxyXG4gICAgICAgICAgICB0aHVtYlNpemUsXHJcbiAgICAgICAgICAgIHR4dFZpZGVvc0xhYmVsLFxyXG4gICAgICAgICAgICB0eHRJbWFnZXMzNjBMYWJlbCxcclxuICAgICAgICAgICAgdHh0SW1hZ2VzTGFiZWwsXHJcbiAgICAgICAgfSA9IHt9LFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcclxuICAgICAgICB0aGlzLmdyYXBoUUxUb2tlbiA9IGdyYXBoUUxUb2tlbjtcclxuICAgICAgICB0aGlzLnpvb21TaXplID0gem9vbVNpemU7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0U2l6ZSA9IHByb2R1Y3RTaXplO1xyXG4gICAgICAgIHRoaXMudGh1bWJTaXplID0gdGh1bWJTaXplO1xyXG4gICAgICAgIHRoaXMudHh0VmlkZW9zTGFiZWwgPSB0eHRWaWRlb3NMYWJlbDtcclxuICAgICAgICB0aGlzLnR4dEltYWdlczM2MExhYmVsID0gdHh0SW1hZ2VzMzYwTGFiZWw7XHJcbiAgICAgICAgdGhpcy50eHRJbWFnZXNMYWJlbCA9IHR4dEltYWdlc0xhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9wZW5Mb2FkaW5nTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95TW9kYWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoJ19nYWxsZXJ5TW9kYWwtb3BlbmVkJyk7XHJcblxyXG4gICAgICAgIC8vIGRpc3BsYXkgbG9hZGluZyBtb2RhbFxyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubG9hZGluZ01vZGFsVGVtcGxhdGUpKTtcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuaGlkZSgpLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5hZGRDbGFzcygnX29wZW5pbmcnKS5zaG93KCkucmVtb3ZlQ2xhc3MoJ19vcGVuaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZE1vZGFsKCkge1xyXG4gICAgICAgIC8vIGZldGNoIHByb2R1Y3QgZGF0YVxyXG4gICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hQcm9kdWN0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZSA9IHRoaXMuaW1hZ2VzLmZpbmQoaW1hZ2UgPT4gaW1hZ2UuaXNEZWZhdWx0KSB8fCB0aGlzLmltYWdlc1swXTtcclxuICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB0b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQobWFpbkltYWdlLnVybFRlbXBsYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFpbkltYWdlTGlua0VsZW1lbnQgPSBgXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiJHttYWluSW1hZ2Uuem9vbVVybH1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmw9XCIke21haW5JbWFnZS51cmx9XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHttYWluSW1hZ2VTcmNzZXR9XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7bWFpbkltYWdlLnpvb21Vcmx9XCJcclxuICAgICAgICAgICAgPjxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIHNyYz1cIiR7bWFpbkltYWdlLnRodW1ibmFpbFVybH1cIiBkYXRhLXNyY3NldD1cIiR7bWFpbkltYWdlU3Jjc2V0fVwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgYWx0PVwiJHttYWluSW1hZ2UuYWx0VGV4dH1cIiAvPjwvYT5gO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy4kc2NvcGUuZmluZCgnLmNhcmQtdGl0bGUnKS50ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgdmlkZW9zTGFiZWwgPSB0aGlzLnR4dFZpZGVvc0xhYmVsIHx8ICdWaWRlb3MnO1xyXG4gICAgICAgIGNvbnN0IGltYWdlczM2MExhYmVsID0gdGhpcy50eHRJbWFnZXMzNjBMYWJlbCB8fCAnMzYwIFZpZXcnO1xyXG4gICAgICAgIGNvbnN0IGltYWdlc0xhYmVsID0gdGhpcy50eHRJbWFnZXNMYWJlbCB8fCAnUHJvZHVjdCBJbWFnZXMnO1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlb3MgPSB0aGlzLnZpZGVvcy5tYXAodmlkZW8gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHZpZGVvLnVybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgndicpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7dmlkZW8udXJsfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkPVwiJHt2aWRlb0lkfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvJHt2aWRlb0lkfS9kZWZhdWx0LmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSBocmVmPVwiI2ljb24tcGxheS1zb2xpZFwiPjwvdXNlPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZXMzNjAgPSB0aGlzLmltYWdlczM2MC5tYXAoKGltYWdlVXJsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7aW1hZ2VVcmx9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcj1cIiR7c3RlcH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybD1cIiR7aW1hZ2VVcmx9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQ9XCIke2ltYWdlVXJsfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7aW1hZ2VVcmx9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVVybH1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgaHJlZj1cIiNpY29uLTM2MFwiPjwvdXNlPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoaW1hZ2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVNyY3NldCA9IHRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChpbWFnZS51cmxUZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogYFxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFZpZXctdGh1bWJuYWlsLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHtpbWFnZS56b29tVXJsfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsPVwiJHtpbWFnZS51cmx9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQ9XCIke2ltYWdlU3Jjc2V0fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7aW1hZ2Uuem9vbVVybH1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkXCIgc3JjPVwiJHtpbWFnZS50aHVtYm5haWxVcmx9XCIgZGF0YS1zcmNzZXQ9XCIke2ltYWdlU3Jjc2V0fVwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgYWx0PVwiJHtpbWFnZS5hbHRUZXh0fVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPmAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRnYWxsZXJ5TW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLm1vZGFsVGVtcGxhdGUsIHtcclxuICAgICAgICAgICAgbWFpbkltYWdlTGlua0VsZW1lbnQsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHZpZGVvc0xhYmVsLFxyXG4gICAgICAgICAgICBpbWFnZXMzNjBMYWJlbCxcclxuICAgICAgICAgICAgaW1hZ2VzTGFiZWwsXHJcbiAgICAgICAgICAgIHZpZGVvcyxcclxuICAgICAgICAgICAgaW1hZ2VzMzYwLFxyXG4gICAgICAgICAgICBpbWFnZXMsXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAvLyByZXBsYWNlIGxvYWRpbmcgbW9kYWwgd2l0aCB0aGUgYWN0dWFsIG1vZGFsXHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmh0bWwoJGdhbGxlcnlNb2RhbC5odG1sKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRJbWFnZVpvb20oKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAodGhpcy4kZ2FsbGVyeU1vZGFsLmdldCgwKSwge1xyXG4gICAgICAgICAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXHJcbiAgICAgICAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RhbCh7XHJcbiAgICAgICAgZmlyc3RWaWRlbyA9IGZhbHNlLFxyXG4gICAgICAgIGZpcnN0MzYwID0gZmFsc2UsXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLm9wZW5Mb2FkaW5nTW9kYWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkTW9kYWwoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpcnN0VmlkZW8pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLmZpcnN0KCkuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKHZpZGVvSWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlyc3QzNjApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcl0nKS5maXJzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKFxyXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcclxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnZXlldmFJbWFnZUdhbGxlcnlNb2RhbEl0ZW1Sb3RhdG9yJyksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcC5hY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZldGNoUHJvZHVjdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbWFnZXMgfHwgdGhpcy52aWRlb3MgfHwgdGhpcy5pbWFnZXMzNjApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgW3pvb21XaWR0aCwgem9vbUhlaWdodF0gPSB0aGlzLnpvb21TaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3QgW2ltYWdlV2lkdGgsIGltYWdlSGVpZ2h0XSA9IHRoaXMucHJvZHVjdFNpemUuc3BsaXQoJ3gnKS5tYXAoTnVtYmVyKTtcclxuICAgICAgICBjb25zdCBbdGh1bWJXaWR0aCwgdGh1bWJIZWlnaHRdID0gdGhpcy50aHVtYlNpemUuc3BsaXQoJ3gnKS5tYXAoTnVtYmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0SWQ6IEludCEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR6b29tV2lkdGg6IEludCEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR6b29tSGVpZ2h0OiBJbnQhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW1hZ2VXaWR0aDogSW50ISxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlSGVpZ2h0OiBJbnQhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGh1bWJXaWR0aDogSW50ISxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRodW1iSGVpZ2h0OiBJbnQhXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdChlbnRpdHlJZDogJHByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwod2lkdGg6ICRpbWFnZVdpZHRoLCBoZWlnaHQ6ICRpbWFnZUhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxVcmw6IHVybCh3aWR0aDogJHRodW1iV2lkdGgsIGhlaWdodDogJHRodW1iSGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb21Vcmw6IHVybCh3aWR0aDogJHpvb21XaWR0aCwgaGVpZ2h0OiAkem9vbUhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxUZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkcyhuYW1lczogW1wiX19AMzYwXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgICAgICB6b29tV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgem9vbUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRodW1iV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgW2ltYWdlcywgdmlkZW9zLCBpbWFnZXMzNjBdID0gW1xyXG4gICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LmltYWdlcy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiBub2RlKSxcclxuICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdC52aWRlb3MuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gbm9kZSksXHJcbiAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QuY3VzdG9tRmllbGRzLmVkZ2VzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IG5vZGUgfSkgPT4gbm9kZS5uYW1lID09PSAnX19AMzYwJylcclxuICAgICAgICAgICAgICAgIC5tYXAoKHsgbm9kZSB9KSA9PiBub2RlLnZhbHVlKSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e2FsdFRleHQ6IHN0cmluZywgaXNEZWZhdWx0OiBib29sZWFuLCB1cmw/OiBzdHJpbmcsIHRodW1ibmFpbFVybD86IHN0cmluZywgem9vbVVybD86IHN0cmluZywgdXJsVGVtcGxhdGU/OiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHt0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudmlkZW9zID0gdmlkZW9zO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5pbWFnZXMzNjAgPSBpbWFnZXMzNjA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSBleHRlbmRzIENvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCRnYWxsZXJ5KSB7XHJcbiAgICAgICAgc3VwZXIoJGdhbGxlcnkpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5TW9kYWwgPSBuZXcgSW1hZ2VHYWxsZXJ5TW9kYWwodGhpcywgJGdhbGxlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgc3VwZXIuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5TW9kYWwuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXHJcbi8vIGltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XHJcbmltcG9ydCBDb3JuZXJzdG9uZVByb2R1Y3REZXRhaWxzIGZyb20gJy4uLy4uL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xyXG5pbXBvcnQgeyBhbGVydE1vZGFsLCBzaG93QWxlcnRNb2RhbCwgTW9kYWxFdmVudHMgfSBmcm9tICcuLi8uLi90aGVtZS9nbG9iYWwvbW9kYWwnO1xyXG5pbXBvcnQgeyBmaXhGb3JtRWxlbWVudFVuaXF1ZUlkcywgY3VycmVuY3lGb3JtYXQgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCBTYWxlQ291bnRkb3duIGZyb20gJy4uL3NhbGUtY291bnRkb3duJztcclxuXHJcbmNvbnN0IERFQlVHX0xPRyA9IGZhbHNlO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplT3B0aW9uU3RyaW5nID0gcyA9PiBzLnJlcGxhY2UoLzovZywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuZnVuY3Rpb24gZXF1YWxPcHRpb25TdHJpbmcoYSwgYikge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZU9wdGlvblN0cmluZyhhKSA9PT0gbm9ybWFsaXplT3B0aW9uU3RyaW5nKGIpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdHdvIGFycmF5cyBhcmUgZXF1YWwgcmVnYXJkbGVzcyBvZiBvcmRlclxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIxXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycjJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBhcmVBcnJheXNFcXVhbFVub3JkZXJlZChhcnIxLCBhcnIyKSB7XHJcbiAgICBjb25zdCBfYXJyMSA9IGFycjEuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICBjb25zdCBfYXJyMiA9IGFycjIuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICByZXR1cm4gX2FycjEubGVuZ3RoID09PSBfYXJyMi5sZW5ndGggJiYgX2FycjEuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IF9hcnIyW2luZGV4XSk7XHJcbn1cclxuXHJcbmxldCBjYWNoZWRTZXR0aW5ncztcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGUgbXVsdGlwbGUgcHJvbWlzZXMgd2l0aCBhIGNvbmN1cnJlbmN5IGxpbWl0IChlLmcuLCBwcm9jZXNzaW5nIG9ubHkgMTAgcHJvbWlzZXMgYXQgYSB0aW1lIG91dCBvZiAxMClcclxuICpcclxuICogQHBhcmFtIHtBcnJheTxGdW5jdGlvbjxUPn0gcHJvbWlzZXMgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIGEgcHJvbWlzZVxyXG4gKiBAcGFyYW0geyp9IGxpbWl0IG51bWJlciBvZiBwcm9taXNlcyB0byBwcm9jZXNzIGF0IGEgdGltZVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTxUPj59IHJlc3VsdHMgb2YgYWxsIHByb21pc2VzXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVQcm9taXNlc1dpdGhMaW1pdChwcm9taXNlcywgbGltaXQgPSAxMCkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgY29uc3QgZXhlY3V0aW5nID0gW107IC8vIFRyYWNrIHRoZSBwcm9taXNlcyBjdXJyZW50bHkgZXhlY3V0aW5nXHJcblxyXG4gICAgZm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XHJcbiAgICAgICAgLy8gU3RhcnQgdGhlIHByb21pc2UgYW5kIGFkZCBpdCB0byB0aGUgZXhlY3V0aW5nIGxpc3RcclxuICAgICAgICBjb25zdCBwID0gcHJvbWlzZSgpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaW5pc2hlZCBwcm9taXNlIGZyb20gZXhlY3V0aW5nIGxpc3RcclxuICAgICAgICAgICAgZXhlY3V0aW5nLnNwbGljZShleGVjdXRpbmcuaW5kZXhPZihwKSwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHApO1xyXG4gICAgICAgIGV4ZWN1dGluZy5wdXNoKHApO1xyXG5cclxuICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgbGltaXQsIHdhaXQgZm9yIHRoZSBmaXJzdCB0byBmaW5pc2hcclxuICAgICAgICBpZiAoZXhlY3V0aW5nLmxlbmd0aCA+PSBsaW1pdCkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJhY2UoZXhlY3V0aW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2FpdCBmb3IgYWxsIHJlbWFpbmluZyBwcm9taXNlcyB0byBjb21wbGV0ZVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIENvcm5lcnN0b25lUHJvZHVjdERldGFpbHMge1xyXG4gICAgbW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1vdmVybGF5XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3ZlcmxheT48L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgbW9kaWZpZXJzTW9kYWxUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jbG9zZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJDbG9zZVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNsb3NlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkNsb3NlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+PHVzZSBocmVmPVwiI2ljb24teG1hcmstbGFyZ2VcIj48L3VzZT48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtYmFjay1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJCYWNrXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5CYWNrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctbGVmdC1sb25nXCI+PC91c2U+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtaGVhZGVyLXRpdGxlXCI+PCUmcHJvZHVjdFRpdGxlJT48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbnRlbnRcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC10aXRsZVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW4gY3VycmVudCBzdGVwJ3MgdGl0bGUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLW9wdGlvbnNcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIG1vZGlmaWVycyAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLXN1bW1hcnlcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIHN1bW1hcnkgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jb21wbGV0ZVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIGFkZCB0byBjYXJ0IGJ1dHRvbiAmIHF0eSBib3ggLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtZm9vdGVyXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY29udGludWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGludWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8JXR4dENvbnRpbnVlJT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1mb290ZXItc3VidG90YWxcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgc3VidG90YWwgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwlI21haW5JbWFnZVVybCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCI8JW1haW5JbWFnZVVybCU+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmNzZXQ9XCI8JW1haW5JbWFnZVNyY3NldCU+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS16b29tLWltYWdlPVwiPCV6b29tSW1hZ2VVcmwlPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2l6ZXM9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYXp5bG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWltZyAvPlxyXG4gICAgICAgICAgICAgICAgPCUvbWFpbkltYWdlVXJsJT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG9wdGlvblRvb2x0aXBUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi10b29sdGlwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXRvb2x0aXAtdHJpZ2dlclwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwiTW9yZSBpbmZvcm1hdGlvblwiIHRpdGxlPVwiTW9yZSBpbmZvcm1hdGlvblwiPmk8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXRvb2x0aXAtYnViYmxlXCI+PCV0b29sdGlwJT48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdmFsdWUtdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLXRyaWdnZXJcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbD1cIk1vcmUgaW5mb3JtYXRpb25cIiB0aXRsZT1cIk1vcmUgaW5mb3JtYXRpb25cIj5pPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLWJ1YmJsZVwiPjwldG9vbHRpcCU+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy12YWx1ZS10b29sdGlwLWhlYWRpbmdcIj48JWhlYWRpbmclPjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25QcmljZVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDwlI3ByZWxvYWRlciU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfcHJlbG9hZGVyXCI+Li4uPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByZWxvYWRlciU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfd2l0aFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utb2xkIF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utbm93IF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlIF93aXRob3V0VGF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1vbGQgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1ub3cgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25QcmljZVBsYWluVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPCUjcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgKDwlcHJpY2VXaXRoVGF4JT4pXHJcbiAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICA8JV5wcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgKDwlcHJpY2VXaXRob3V0VGF4JT4pXHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgIGA7XHJcblxyXG4gICAgc3VidG90YWxUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ncm91cC1sYWJlbFwiPjwldHh0U3VidG90YWwlPjwvZGl2PlxyXG4gICAgICAgICAgICA8JSNwcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3ByZWxvYWRlclwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3dpdGhUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW9sZCBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW5vdyBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aFRheFZhbHVlJT5cIj48JXByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbCBfd2l0aG91dFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtb2xkIF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtbm93IF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgc3VtbWFyeVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPCUjb3B0aW9ucyU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi1uYW1lXCI+PCVuYW1lJT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnMtb3B0aW9uLXZhbHVlXCI+PCV2YWx1ZSU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi1wcmljZXNcIj48JSZwcmljZUh0bWwlPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9vcHRpb25zJT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgc2hvd1ByaWNlRnJlZSA9IGZhbHNlO1xyXG4gICAgc2hvd1ByaWNlWmVybyA9IGZhbHNlO1xyXG5cclxuICAgIGFkZFRvQ2FydFdyYXBwZXJTZWxlY3RvciA9ICcuYWRkLXRvLWNhcnQtd3JhcHBlcic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZSBmb3IgZnVuY3Rpb24gYGZldGNoT3B0aW9uUHJpY2VgXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgeyBwcmljZXNXaXRoVGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9LCBwcmljZXNXaXRob3V0VGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9IH0+fVxyXG4gICAgICovXHJcbiAgICBmZXRjaE9wdGlvblByaWNlQ2FjaGUgPSB7fTtcclxuXHJcbiAgICBjb25zb2xlID0ge1xyXG4gICAgICAgIGxvZzogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgaWYgKERFQlVHX0xPRykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgLi4uYXJncykge1xyXG4gICAgICAgIGZpeEZvcm1FbGVtZW50VW5pcXVlSWRzKCRzY29wZSk7XHJcblxyXG4gICAgICAgIHN1cGVyKCRzY29wZSwgLi4uYXJncyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkY2hvb3NlT3B0aW9uc0J0biA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBOdW1iZXIoJGZvcm0uZmluZCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJykudmFsKCkpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgkZm9ybSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIG1vZGlmaWVycyBtb2RhbCBmZWF0dXJlXHJcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gZW5hYmxlIG1vZGlmaWVycyBtb2RhbCBpZiBvdXIgY2hvb3NlIG9wdGlvbnMgYnV0dG9uIGFwcGVhcnMgaW4gdGhlIHByb2R1Y3QgZGV0YWlsc1xyXG4gICAgICAgIHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwgPSAkY2hvb3NlT3B0aW9uc0J0bi5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpbmRQcm9kdWN0RWRpdEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZFN0aWNreUFkZFRvQ2FydEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZE1vZGFsRGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdE9wdGlvblN0ZXBwZXIoKTtcclxuICAgICAgICB0aGlzLnN5bmNQcm9kdWN0Q2FyZFF0eSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNhbGVDb3VudGRvd24oKTtcclxuICAgICAgICB0aGlzLnJlbmRlcklubGluZU9wdGlvblRvb2x0aXBzKCk7XHJcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3VwZGF0ZS13aXNobGlzdC1idXR0b25zJywgW3RoaXMuJHNjb3BlXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKSkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlTWV0YWRhdGEgPSBzZWxlY3RvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkZm9ybS5maW5kKHNlbGVjdG9yKS5maXJzdCgpLnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBpbnZhbGlkIG1ldGFkYXRhIHBheWxvYWRzLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcyA9IHBhcnNlTWV0YWRhdGEoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtY3VzdG9tLWZpZWxkc10nKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtcclxuICAgICAgICAgKiAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICogICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAgICAgKiAgIHN0YXRlOiAnbW9kaWZpZXInIHwgJ3ZhcmlhbnRfb3B0aW9uJyxcclxuICAgICAgICAgKiAgIHBhcnRpYWw6ICdzd2F0Y2gnIHwgJ3NldC1yZWN0YW5nbGUnIHwgJ3NldC1zZWxlY3QnIHwgJ3NldC1yYWRpbydcclxuICAgICAgICAgKiAgICAgfCAnaW5wdXQtdGV4dCcgfCAnaW5wdXQtbnVtYmVycycgfCAnaW5wdXQtY2hlY2tib3gnIHwgJ2lucHV0LWZpbGUnXHJcbiAgICAgICAgICogICAgIHwgJ2RhdGUnIHwgJ3RleHRhcmVhJyB8ICdwcm9kdWN0LWxpc3QnLFxyXG4gICAgICAgICAqICAgcmVxdWlyZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICogICBwcmVmaWxsPzogc3RyaW5nLFxyXG4gICAgICAgICAqICAgc2VsZWN0ZWRfZGF0ZT86IHtcclxuICAgICAgICAgKiAgICAgZGF5OiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIG1vbnRoOiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIHllYXI6IHN0cmluZ1xyXG4gICAgICAgICAqICAgfSxcclxuICAgICAgICAgKiAgIGNoZWNrZWQ/OiBib29sZWFuLFxyXG4gICAgICAgICAqICAgbm9WYWx1ZT86IG51bWJlcixcclxuICAgICAgICAgKiAgIHZhbHVlPzogbnVtYmVyLFxyXG4gICAgICAgICAqICAgdmFsdWVzPzogQXJyYXk8e1xyXG4gICAgICAgICAqICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAqICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICAgICAqICAgICBzZWxlY3RlZDogYm9vbGVhbixcclxuICAgICAgICAgKiAgICAgZGF0YTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPlxyXG4gICAgICAgICAqICAgfT5cclxuICAgICAgICAgKiB9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zID0gcGFyc2VNZXRhZGF0YSgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscy5jdXN0b21GaWVsZHM6JywgdGhpcy5jdXN0b21GaWVsZHMpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzLnByb2R1Y3RPcHRpb25zOicsIHRoaXMucHJvZHVjdE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkdXBkYXRlUHJvZHVjdFdyYXBwZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld01vZGVsKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IHN1cGVyLmdldFZpZXdNb2RlbCguLi5hcmdzKTtcclxuICAgICAgICBtb2RlbC4kdXBkYXRlUHJvZHVjdFdyYXBwZXIgPSB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlcjtcclxuICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xyXG4gICAgICAgIGNvbnN0ICRidG4gPSB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlci5maW5kKCdpbnB1dCwgYnV0dG9uJyk7XHJcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcclxuICAgICAgICAgICAgJGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRidG4ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGUgdGhlIG1ldGhvZCB0byBzdXBwb3J0IGVkaXQgcHJvZHVjdCBpbiBjYXJ0XHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cclxuICAgICAqL1xyXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xyXG4gICAgICAgIGlmIChldmVudC5lZGl0UHJvZHVjdEluQ2FydCkge1xyXG4gICAgICAgICAgICAkKGZvcm0pLmZpbmQoJ2lucHV0W25hbWU9XCJhY3Rpb25cIl0nKS52YWwoJ0VkaXRQcm9kdWN0RmllbGRzSW5DYXJ0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoZm9ybSkuZmluZCgnaW5wdXRbbmFtZT1cImFjdGlvblwiXScpLnZhbCgnYWRkJyk7XHJcbiAgICAgICAgICAgIHN1cGVyLmFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVkaXQgcHJvZHVjdCBpbiBjYXJ0LlxyXG4gICAgICogQWxtb3N0IGNsb25lIGZyb20gYWRkUHJvZHVjdFRvQ2FydCBtZXRob2QgZnJvbSB0aGUgcGFyZW50IGNsYXNzLlxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZWRpdFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcclxuICAgICAgICBjb25zdCAkc2F2ZUJ0biA9ICQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJywgJChldmVudC50YXJnZXQpKS5maW5kKCdpbnB1dCwgYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkc2F2ZUJ0bi52YWwoKTtcclxuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRzYXZlQnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkc2F2ZUJ0blxyXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxyXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJHNhdmVCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xyXG5cclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzYXZlQnRuXHJcbiAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBmYWlsdXJlID0gKGVycm9yVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JUZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkc2F2ZUJ0bikpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0TW9kYWwoKS4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkc2F2ZUJ0bjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0UXVhbnRpdHkpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZm9ybURhdGEuZ2V0KCdpdGVtX2lkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1F0eSA9IGZvcm1EYXRhLmdldCgncXR5W10nKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWx1cmUoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgfSkuZG9uZSgocmVzcG9uc2UpID0+IHN1Y2Nlc3MocmVzcG9uc2UpKS5mYWlsKChfeGhyLCBfc3RhdHVzLCBlcnJvcikgPT4gZmFpbHVyZShlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZT8uZGF0YT8uc3RhdHVzICE9PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGNsaWNrIG9uIHRoZSBBZGQgTmV3IHRvIENhcnQgYnV0dG9uLCB0cmlnZ2VyIHRoZSBmb3JtIHN1Ym1pdCBldmVudCB3aXRoIGBhZGROZXdUb0NhcnRgIGZsYWdcclxuICAgICAqIHNvIHRoYXQgbmV3IHByb2R1Y3QgaXMgYWx3YXlzIGFkZGVkIHRvIGNhcnQgcmVnYXJkbGVzcyBvZiBlZGl0IHByb2R1Y3QgaW4gY2FydCBvciBub3RcclxuICAgICAqL1xyXG4gICAgYmluZFByb2R1Y3RFZGl0RXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEV2ZW50ID0gJC5FdmVudCgnc3VibWl0JywgeyBlZGl0UHJvZHVjdEluQ2FydDogdHJ1ZSB9KTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyLmZpbmQoJ2lucHV0LCBidXR0b24nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICRmb3JtLnRyaWdnZXIoc3VibWl0RXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRTdGlja3lBZGRUb0NhcnRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NsaWNrJywgJyNzdGlja3ktYWRkLXRvLWNhcnQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkYnV0dG9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKCRidXR0b24ucHJvcCgnZGlzYWJsZWQnKSB8fCAkYnV0dG9uLmF0dHIoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYgKCEkZm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZE1vZGFsRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBkZXN0cm95IHRoZSBpbWFnZSBnYWxsZXJ5IG1vZGFsIHdoZW4gcXVpY2stdmlldyBtb2RhbCBpcyBjbG9zZWRcclxuICAgICAgICAvLyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuY2xvc2VzdCgnLm1vZGFsJykub25lKE1vZGFsRXZlbnRzLmNsb3NlZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbWFnZUdhbGxlcnlNb2RhbC5kZXN0cm95TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0T3B0aW9uU3RlcHBlcigpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1zdGVwcGVyXScpLmVhY2goKF9pLCBmb3JtRmllbGRFbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZm9ybUZpZWxkID0gJChmb3JtRmllbGRFbCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRkZWMgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImRlY1wiXScpO1xyXG4gICAgICAgICAgICBjb25zdCAkaW5jID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJpbmNcIl0nKTtcclxuICAgICAgICAgICAgY29uc3QgJGNoZWNrID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJjaGVja1wiXScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5hZGRDbGFzcygnX2NoZWNraW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86dmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaXJzdCA9ICRyYWRpb3MuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSAkcmFkaW9zLmluZGV4KCRjaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgaSA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgPT09ICRyYWRpb3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5yZW1vdmVDbGFzcygnX2NoZWNraW5nJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbml0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSAoaW5jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykuYWRkQ2xhc3MoJ19jaGVja2luZycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOnZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjaGVja2VkID0gJHJhZGlvcy5maWx0ZXIoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZmlyc3QgPSAkcmFkaW9zLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVja2VkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3VuZCBjaGVja2VkIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRyYWRpb3MuaW5kZXgoJGNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0IHRoZSBuZXh0IHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgJHJhZGlvcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLmVxKGkgKyAxKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgKyAxID09PSAkcmFkaW9zLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIHByZXZpb3VzIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZXEoaSAtIDEpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGkgLSAxID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIGNoZWNrZWQgcmFkaW8sIGFuZCBmb3VuZCB0aGUgZmlyc3QgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jICYmICRmaXJzdC5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKyBhbmQgZmlyc3Qgb3B0aW9uIGlzICdub25lJywgaWdub3JlIHRoZSBub25lIG9wdGlvbiwgc2VsZWN0IHRoZSBmaXJzdCB2YWx1ZWQgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3Mubm90KCRmaXJzdCkuZmlyc3QoKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSwgc2VsZWN0IHRoZSBmaXJzdCByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZmlyc3QucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5hZGRDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hlY2tlZCByYWRpbyBpcyAnbm9uZScgdGhlbiB1bmNoZWNrIHRoZSBjaGVjayBidXR0b25cclxuICAgICAgICAgICAgICAgIGlmICgkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2sucmVtb3ZlQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLnJlbW92ZUNsYXNzKCdfY2hlY2tpbmcnKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRkZWMub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGluYy5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0KHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRjaGVjay5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVjay5oYXNDbGFzcygnX2NoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuY2hlY2sgdGhlIGNoZWNrZWQgcmFkaW8gYW5kIHNlbGVjdCB0aGUgJ25vbmUnIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHVuY2hlY2sgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRub25lID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkbm9uZS5sZW5ndGggPiAwKSAkbm9uZS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgkdW5jaGVjay5sZW5ndGgpICR1bmNoZWNrLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5yZW1vdmVDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN5bmMgcHJvZHVjdCBxdWFudGl0eSB3aXRoIHF0eSBvZiB0aGUgY29ycmVzcG9uZGluZyBwcm9kdWN0IGNhcmRcclxuICAgICAqL1xyXG4gICAgc3luY1Byb2R1Y3RDYXJkUXR5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RRdWFudGl0eSkgcmV0dXJuOyAvLyBzdG9wIGlmIGVkaXQgcHJvZHVjdCBpbiBjYXJ0XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRRdHkgPSAkKGBbZGF0YS1jYXJkLXF1YW50aXR5LWNoYW5nZV0gaW5wdXRbbmFtZT1cInF0eV8ke3RoaXMucHJvZHVjdElkfVwiXWApLnZhbCgpO1xyXG4gICAgICAgIGlmICghY2FyZFF0eSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCAkcXR5ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBpbnB1dFtuYW1lPVwicXR5W11cIl0nKTtcclxuICAgICAgICBjb25zdCBxdHkgPSAkcXR5LnZhbCgpO1xyXG4gICAgICAgIGlmICgkcXR5Lmxlbmd0aCA+IDAgJiYgcXR5ICE9PSBjYXJkUXR5KSB7XHJcbiAgICAgICAgICAgICRxdHkudmFsKGNhcmRRdHkpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0U2FsZUNvdW50ZG93bigpIHtcclxuICAgICAgICBjb25zdCB7IHR4dFNhbGVDb3VudGRvd25KU09OIH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF0ZV0nKTtcclxuICAgICAgICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAkZWwuZGF0YSgnc2FsZUNvdW50ZG93bkxhYmVsJykgfSk7XHJcblxyXG4gICAgICAgIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHsgdHh0U2FsZUNvdW50ZG93bkpTT04gfSk7XHJcbiAgICAgICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWV3KGRhdGEsIC4uLmFyZ3MpIHtcclxuICAgICAgICBzdXBlci51cGRhdGVWaWV3KGRhdGEsIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTYWxlUGVyY2VudChkYXRhKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoaXBwaW5nQ291bnRkb3duKGRhdGEpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpXHJcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCAhZGF0YT8ucHVyY2hhc2FibGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vbmVTYWxlcyA9IHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvblByaWNlcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcywgZm9ybURhdGEsIG5vbmVTYWxlcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RpZmllcnNTdWJ0b3RhbChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTYWxlUGVyY2VudChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJGRpdiA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcmljZS1zZWN0aW9uLS1zYWxlUGVyY2VudCcpO1xyXG4gICAgICAgIGNvbnN0ICRzcGFuID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYWxlLXBlcmNlbnRdJyk7XHJcbiAgICAgICAgbGV0IHNhbGVQZXJjZW50ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGRhdGE/LnByaWNlPy53aXRob3V0X3RheD8udmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGE/LnByaWNlPy5ycnBfd2l0aG91dF90YXg/LnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSAvIGRhdGEucHJpY2UucnJwX3dpdGhvdXRfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJpY2U/Lm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWUgLyBkYXRhLnByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy53aXRoX3RheD8udmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGE/LnByaWNlPy5ycnBfd2l0aF90YXg/LnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZSAvIGRhdGEucHJpY2UucnJwX3dpdGhfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJpY2U/Lm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUgLyBkYXRhLnByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzYWxlUGVyY2VudCA+IDApIHtcclxuICAgICAgICAgICAgJHNwYW4udGV4dChgLSR7c2FsZVBlcmNlbnR9JWApO1xyXG4gICAgICAgICAgICAkZGl2LnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkc3Bhbi50ZXh0KCcnKTtcclxuICAgICAgICAgICAgJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNoaXBwaW5nQ291bnRkb3duKGRhdGEpIHtcclxuICAgICAgICBjb25zdCAkc2hpcHBpbmdDb3VudGRvd24gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wYXBhdGhlbWVzLXNoaXBwaW5nLWNvdW50ZG93bl0nKTtcclxuXHJcbiAgICAgICAgaWYgKCRzaGlwcGluZ0NvdW50ZG93bi5pcygnOmhpZGRlbicpICYmIGRhdGE/LnB1cmNoYXNhYmxlKSB7XHJcbiAgICAgICAgICAgICRzaGlwcGluZ0NvdW50ZG93bi5jc3MoJ3N0eWxlJywgJ2ZsZXgnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzaGlwcGluZ0NvdW50ZG93bi5pcygnOnZpc2libGUnKSAmJiAhZGF0YT8ucHVyY2hhc2FibGUpIHtcclxuICAgICAgICAgICAgJHNoaXBwaW5nQ291bnRkb3duLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FydENvbnRlbnQoLi4uYXJncykge1xyXG4gICAgICAgIC8vIGNsb3NlIG1vZGlmaWVycyBtb2RhbCBhZnRlciBhZGRlZCBwcm9kdWN0IHRvIGNhcnRcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlci51cGRhdGVDYXJ0Q29udGVudCguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIuc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSwgLi4uYXJncyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEltZyA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1pbWddJyk7XHJcbiAgICAgICAgY29uc3QgeyBtYWluSW1hZ2VVcmwsIHpvb21JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0IH0gPSB0aGlzLmltYWdlR2FsbGVyeS5jdXJyZW50SW1hZ2U7XHJcblxyXG4gICAgICAgIGlmIChtYWluSW1hZ2VVcmwgJiYgbWFpbkltYWdlVXJsICE9PSAkbW9kaWZpZXJzTW9kYWxJbWcuYXR0cignc3JjJykpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsSW1nXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIG1haW4gaW1hZ2UgaW4gcXVpY2stdmlldyBvbiBtb2JpbGVcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoX2ksIGVsKSA9PiAkKGVsKS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXQgcHJpY2Ugd2l0aCBjdXJyZW5jeSBzeW1ib2wgYW5kIGRlY2ltYWwgcGxhY2VzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsdXNTeW1ib2wgd2hldGhlciB0byBzaG93IHBsdXMgc3ltYm9sIGZvciBwb3NpdGl2ZSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZm9ybWF0UHJpY2UodmFsdWUsIHBsdXNTeW1ib2wgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBjYWNoZWRTZXR0aW5ncyA/IHtcclxuICAgICAgICAgICAgY3VycmVuY3lfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuc3ltYm9sLFxyXG4gICAgICAgICAgICBjdXJyZW5jeV9sb2NhdGlvbjogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5zeW1ib2xQbGFjZW1lbnQsXHJcbiAgICAgICAgICAgIGRlY2ltYWxfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuZGVjaW1hbFRva2VuLFxyXG4gICAgICAgICAgICBkZWNpbWFsX3BsYWNlczogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5kZWNpbWFsUGxhY2VzLFxyXG4gICAgICAgICAgICB0aG91c2FuZHNfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkudGhvdXNhbmRzVG9rZW4sXHJcbiAgICAgICAgfSA6IHt9O1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGN1cnJlbmN5Rm9ybWF0KC12YWx1ZSwgZGlzcGxheSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwbHVzU3ltYm9sID8gYC0ke2Zvcm1hdHRlZH1gIDogZm9ybWF0dGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gY3VycmVuY3lGb3JtYXQodmFsdWUsIGRpc3BsYXkpO1xyXG4gICAgICAgIHJldHVybiBwbHVzU3ltYm9sID8gYCske2Zvcm1hdHRlZH1gIDogZm9ybWF0dGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZCBvcHRpb24gdmFsdWUgYnkgb3B0aW9uIG5hbWUgYW5kIHZhbHVlIG5hbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSBvcHRpb24gZGlzcGxheSBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVOYW1lIHZhbHVlIGxhYmVsXHJcbiAgICAgKiBAcmV0dXJucyB7W251bWJlciwgbnVtYmVyXX0gb3B0aW9uSWQsIHZhbHVlSWRcclxuICAgICAqL1xyXG4gICAgZmluZE9wdGlvblZhbHVlKG9wdGlvbk5hbWUsIHZhbHVlTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGhpZGVJZk9wdGlvbiA9IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBkaXNwbGF5X25hbWUgfSkgPT4gZGlzcGxheV9uYW1lLnJlcGxhY2UoJy86Oy9nJywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpID09PSBvcHRpb25OYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaGlkZUlmT3B0aW9uPy52YWx1ZXM/LmZpbmQoKHsgbGFiZWwgfSkgPT4gbGFiZWwucmVwbGFjZSgnLzo7L2cnLCAnJykucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCBvcHRpb25JZCA9IGhpZGVJZk9wdGlvbj8uaWQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWVJZCA9IHZhbHVlPy5pZDtcclxuICAgICAgICByZXR1cm4gW29wdGlvbklkLCB2YWx1ZUlkXTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNb2RpZmllcnNNb2RhbCgpIHtcclxuICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW5dJykuYXR0cignZGF0YS16b29tLWltYWdlJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlciA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtYXR0cmlidXRlcy1tZXNzYWdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRXcmFwcGVyID0gJGZvcm0uZmluZCgnW2RhdGEtZXlldmEtYWRkLXRvLWNhcnQtd3JhcHBlcl0nKTtcclxuICAgICAgICBjb25zdCAkY2hvb3NlT3B0aW9uc0J0biA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RpZmllcnNNb2RhbFRlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgIHR4dENvbnRpbnVlOiB0aGlzLmNvbnRleHQudHh0Q29udGludWUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC10aXRsZV0nKS5odG1sKCksXHJcbiAgICAgICAgICAgIG1haW5JbWFnZVVybDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLm1haW5JbWFnZVVybCB8fCBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCB8fCB6b29tSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLm1haW5JbWFnZVNyY3NldCB8fCBtYWluSW1hZ2VTcmNzZXQsXHJcbiAgICAgICAgfSwgbnVsbCwgWyc8JScsICclPiddKSkuYXBwZW5kVG8oJHByb2R1Y3RPcHRpb25zRWwpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ29tcGxldGUgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENsb3NlID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jbG9zZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGludWVdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQmFjayA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFja10nKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSBtb2RpZmllciBvcHRpb25zIHRvIHRoZSBtb2RhbFxyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXN0YXRlPVwibW9kaWZpZXJcIl0nKS5hcHBlbmRUbygkbW9kaWZpZXJzTW9kYWxPcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSBhZGQgdG8gY2FydCAmIHF0eSBib3ggdG8gdGhlIG1vZGFsXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29tcGxldGUuYXBwZW5kKCRhZGRUb0NhcnRXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgLy8gY2xvbmUgcHVyY2hhc2FibGUgbWVzc2FnZVxyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLmZpbmQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJykuY2xvbmUoKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJGF0dHJpYnV0ZU1lc3NhZ2VXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ2xvc2Uub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQmFjay5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrU3RlcCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxDb250aW51ZS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGFuZCByZXBvcnQgaW52YWxpZCBpbnB1dHMgaWYgYW55XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXSB8fCBbXTtcclxuICAgICAgICAgICAgY29uc3QgaW52YWxpZElucHV0cyA9IHNob3dPcHRpb25JZHMucmVkdWNlKChfaW52YWxpZElucHV0cywgb3B0aW9uSWQpID0+IChbXHJcbiAgICAgICAgICAgICAgICAuLi5faW52YWxpZElucHV0cyxcclxuICAgICAgICAgICAgICAgIC4uLiRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAuZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbklkfV1bZGF5XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW21vbnRoXVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW3llYXJdXCJdYClcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVsID0+ICFlbC5jaGVja1ZhbGlkaXR5KCkpLFxyXG4gICAgICAgICAgICBdKSwgW10pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludmFsaWRJbnB1dHNbMF0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYXV0byBzZWxlY3QgdGhlICdub25lJyBvcHRpb24gaWYgbm8gcmFkaW8gb3B0aW9uIG9yIG5vIHByb2R1Y3QgcGljayBsaXN0IG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dXCJdYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHJhZGlvcy5sZW5ndGggPiAwICYmICRyYWRpb3MuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZmlsdGVyKCdbdmFsdWU9XCJcIl0sIFt2YWx1ZT1cIjBcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gYWZ0ZXIgY2xpY2tpbmcgY29udGludWUgYnV0dG9uLCB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IGF1dG9tYXRpY2FsbHlcclxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkY2hvb3NlT3B0aW9uc0J0bi5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXF1aXJlIHNlbGVjdGluZyB2YXJpYW50IG9wdGlvbnMgYmVmb3JlIG9wZW5pbmcgdGhlIG1vZGFsXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlVmFyaWFudE9wdGlvbnMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RpZmllcnNNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAuYmVmb3JlKHRoaXMubW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsXScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW92ZXJsYXldJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1vZGlmaWVyc1ZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXHJcbiAgICAgICAgICAgIC5ub3QoJ1t0eXBlPVwiY2hlY2tib3hcIl0sIFt0eXBlPVwicmFkaW9cIl0sIFt0eXBlPVwiZmlsZVwiXScpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnZhbCgnJyk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBmbGFnIGFueSBpbnB1dC9zZWxlY3QgaXMgbm90IHNob3duIHlldCBzbyB0aGF0IHRoZSBjb250aW51ZSBidXR0b24gaXMgc2hvd25cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnJlbW92ZUF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgbW9kYWwgdG8gdXBkYXRlIHRoaXMgdmlldyBhdXRvbWF0aWNhbGx5IHdoZW4gb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbnRhaW5zIGFsbCBvcHRpb24gaWRzIHRoYXQgYXJlIHNob3duIGluIGVhY2ggc3RlcFxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJbXVtdfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzaG93biBvcHRpb24gaWRzIGluIGFsbCBzdGVwc1xyXG4gICAgICAgIHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTm9uLXNhbGUgcHJpY2VzIGZvciBvcHRpb24gdmFsdWVzLlxyXG4gICAgICAgICAqIFB1bGxpbmcgZnJvbSBjdXN0b20gZmllbGRzIGBfX0Bub25zYWxlIHByaWNlID0gb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZVs7IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWU7IC4uLl1gLlxyXG4gICAgICAgICAqIFBvcHVsYXRlZCBpbiBgdXBkYXRlTW9kaWZpZXJzVmlldygpYC5cclxuICAgICAgICAgKiBAdHlwZSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9IH19XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZE5vbmVTYWxlcyA9IHt9O1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgbW9kaWZpZXJzIG1vZGFsIGFzYXAgc28gdGhhdCBub3QgYWxsIG9wdGlvbnMgYXJlIGRpc3BsYXllZFxyXG4gICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGw6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsID0gZmFsc2UgfSA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEJhY2sgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFja10nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1zdW1tYXJ5XScpLmVtcHR5KCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsVGl0bGUgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtdGl0bGVdJykuZW1wdHkoKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxGb290ZXIgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENvbnRpbnVlID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlXScpLmhpZGUoKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XHJcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydFdyYXBwZXIgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1hZGQtdG8tY2FydC13cmFwcGVyXScpLmhpZGUoKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gZm9ybURhdGE6ICcsIEFycmF5LmZyb20oZm9ybURhdGEuZW50cmllcygpKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1cnJlbnQgb3B0aW9uIGlkIHRoYXQgYXBwZWFycyBhbG9uZSB3aXRob3V0IGFueSBncm91cC5cclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfHVuZGVmaW5lZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgY3VycmVudE9wdGlvbklkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdXJyZW50IGdyb3VwIG5hbWUgdGhhdCB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8uXHJcbiAgICAgICAgICogR3JvdXAgbmFtZSB0aGF0IGFwcGVhcnMgY3VzdG9tIGZpZWxkIGBfX0Bncm91cCAoZ3JvdXAgbmFtZSlgXHJcbiAgICAgICAgICogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRHcm91cE5hbWU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9wdGlvbiBpZHMgb2Ygb3B0aW9uIG5hbWVzIGFwcGVhciBpbiB0aGUgdmFsdWUgb2YgY3VzdG9tIGZpZWxkIGBfX0Bncm91cGAuXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiAgIEN1c3RvbSBmaWVsZDogYF9fQGdyb3VwIFNlbGVjdCBhIHByZXNjcmlwdGlvbiB0eXBlYCA9IGBwcmVzY3JpcHRpb24gdHlwZWBcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIG9wdGlvbiBpZHMgc2hvdWxkIGJlIGhpZGRlblxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBoaWRlT3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7b3B0aW9uSWQ6IG51bWJlciwgdmFsdWVJZDogbnVtYmVyfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgaGlkZU9wdGlvblZhbHVlcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUb29sdGlwcyBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlcyBleHRyYWN0ZWQgZnJvbSBjdXN0b20gZmllbGRzIGBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBgXHJcbiAgICAgICAgICogQHR5cGUge09iamVjdDxudW1iZXIsIHsgdG9vbHRpcDogc3RyaW5nLCB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9PlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBzID0ge307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRvb2x0aXAgaGVhZGluZ3MgZm9yIG9wdGlvbiB2YWx1ZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AdG9vbHRpcF9oZWFkaW5nIG5hbWU6dmFsdWUgPSB0b29sdGlwIGhlYWRpbmdgXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9fVxyXG4gICAgICAgICAqIEBleGFtcGxlIHsgMjogeyAxMjM6ICdUb29sdGlwIEhlYWRpbmcnIH0gfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBIZWFkaW5ncyA9IHt9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBOb24tc2FsZSBwcmljZXMgZm9yIG9wdGlvbiB2YWx1ZXMuXHJcbiAgICAgICAgICogQ2FuIGJlIG92ZXJyaWRkZW4gYnkgY3VzdG9tIGZpZWxkcyBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH0gfX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBub25lU2FsZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT3B0aW9uIHJlbmFtZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AcmVuYW1lIG9wdGlvbiBuYW1lID0gbmV3IG5hbWVgXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiBzdHJpbmcgfX1cclxuICAgICAgICAgKiBAZXhhbXBsZSB7IDEyMzogJ05ldyBOYW1lJywgNDU2OiAnQW5vdGhlciBOYW1lJyB9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uUmVuYW1lcyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBzdGF0ZSB9KSA9PiBzdGF0ZSA9PT0gJ21vZGlmaWVyJykuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCclY1Byb2R1Y3REZXRhaWxzIC0gb3B0aW9uOiAnLCAnY29sb3I6IGN5YW4nLCBvcHRpb24uZGlzcGxheV9uYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoaWRlT3B0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRmlyc3QgZ3JvdXAgbmFtZSB0aGF0IHRoZSBvcHRpb24gYmVsb25ncyB0by5cclxuICAgICAgICAgICAgICogR3JvdXAgbmFtZSB0aGF0IGFwcGVhcnMgY3VzdG9tIGZpZWxkIGBfX0Bncm91cCAoZ3JvdXAgbmFtZSlgXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbGV0IGdyb3VwTmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBPcHRpb24gaWRzIG9mIG9wdGlvbiBuYW1lcyBhcHBlYXIgaW4gdGhlIHZhbHVlIG9mIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgLlxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgKiAgIEN1c3RvbSBmaWVsZDogYF9fQGdyb3VwIFNlbGVjdCBhIHByZXNjcmlwdGlvbiB0eXBlYCA9IGBwcmVzY3JpcHRpb24gdHlwZWBcclxuICAgICAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj58dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbGV0IGdyb3VwT3B0aW9uSWRzO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgcmFkaW8gdHlwZSBhbmQgaGFzICdub25lJyB2YWx1ZSBjaGVja2VkXHJcbiAgICAgICAgICAgIGNvbnN0IGlzTm9uZVJhZGlvQ2hlY2tlZCA9ICRmb3JtLmZpbmQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1bdmFsdWU9XCJcIl1gKS5wcm9wKCdjaGVja2VkJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBmaWxlIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJGZpbGUgPSAkZm9ybS5maW5kKGBpbnB1dFt0eXBlPVwiZmlsZVwiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNGaWxlU2hvd24gPSAkZmlsZS5sZW5ndGggPiAwICYmICRmaWxlLmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIG9wdGlvbmFsIGRhdGUgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkZGF0ZSA9ICRmb3JtLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XVwiXSwgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1cIl0sIHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1beWVhcl1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbERhdGVTaG93biA9ICRkYXRlLmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkZGF0ZS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCBzZWxlY3QgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGZvcm0uZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBpc09wdGlvbmFsU2VsZWN0U2hvd24gPSAkc2VsZWN0Lmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkc2VsZWN0LmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIG9wdGlvbmFsIHRleHQgLyBtdWx0aWxpbmUgLyBudW1iZXIgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkdGV4dCA9ICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCB0ZXh0YXJlYScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBpc09wdGlvbmFsVGV4dFNob3duID0gJHRleHQubGVuZ3RoID4gMCAmJiAhb3B0aW9uLnJlcXVpcmVkICYmICR0ZXh0LmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZSA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtVmFsdWUgJiYgIShmb3JtVmFsdWUgaW5zdGFuY2VvZiBGaWxlKVxyXG4gICAgICAgICAgICAgICAgfHwgaXNOb25lUmFkaW9DaGVja2VkIHx8IGlzRmlsZVNob3duIHx8IGlzT3B0aW9uYWxEYXRlU2hvd24gfHwgaXNPcHRpb25hbFNlbGVjdFNob3duIHx8IGlzT3B0aW9uYWxUZXh0U2hvd25cclxuICAgICAgICAgICAgICAgIHx8IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XWApXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW21vbnRoXWApXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdYCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGhpZGUgb3B0aW9uIGlmIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIGhpZGVPcHRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uOiAnLCBoaWRlT3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcy5mb3JFYWNoKGN1c3RvbUZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0BoaWRlX2lmICguKilcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWRlSWZNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaEhpZGVJZih7IGN1c3RvbUZpZWxkLCBmb3JtRGF0YSwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaWRlSWZNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gaGlkZUlmTWF0Y2guaGlkZU9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvblZhbHVlcy5wdXNoKC4uLmhpZGVJZk1hdGNoLmhpZGVPcHRpb25WYWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncm91cE5hbWUgJiYgIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AZ3JvdXAgKC4qKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoR3JvdXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lID0gZ3JvdXBNYXRjaC5ncm91cE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cE9wdGlvbklkcyA9IGdyb3VwTWF0Y2guZ3JvdXBPcHRpb25JZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdG9vbHRpcE1hdGNoLnRvb2x0aXAgfHwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBzOiBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdPy52YWx1ZVRvb2x0aXBzLCB0b29sdGlwTWF0Y2gudmFsdWVUb29sdGlwcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AdG9vbHRpcF9oZWFkaW5nIG5hbWU6dmFsdWUgPSB0b29sdGlwIGhlYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwSGVhZGluZ3MgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwSGVhZGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0sIHZhbHVlVG9vbHRpcEhlYWRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hSZW5hbWUoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uUmVuYW1lc1tvcHRpb24uaWRdID0gbmV3TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlTm9uU2FsZXMgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihub25lU2FsZXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb24uaWRdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubm9uZVNhbGVzW29wdGlvbi5pZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVOb25TYWxlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50R3JvdXBPcHRpb25JZHMubGVuZ3RoID09PSAwICYmICFjdXJyZW50T3B0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBubyB2aXNpYmxlIG9wdGlvbiBiZWZvcmVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBncm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBOYW1lID0gZ3JvdXBOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBPcHRpb25JZHMgPSBncm91cE9wdGlvbklkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBOYW1lOiAke2N1cnJlbnRHcm91cE5hbWV9LCBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICR7Y3VycmVudEdyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YW5kLWFsb25lIG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uSWQgPSBvcHRpb24uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudE9wdGlvbklkOiAke2N1cnJlbnRPcHRpb25JZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlT3B0aW9uSWRzLnB1c2gob3B0aW9uLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA+IDAgJiYgaGlkZU9wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBoaWRkZW4gb3B0aW9ucyBmcm9tIHRoZSBjdXJyZW50IGdyb3VwXHJcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cE9wdGlvbklkcyA9IGN1cnJlbnRHcm91cE9wdGlvbklkcy5maWx0ZXIoaWQgPT4gIWhpZGVPcHRpb25JZHMuaW5jbHVkZXMoaWQpKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICR7Y3VycmVudEdyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50T3B0aW9uSWQ6ICcsIGN1cnJlbnRPcHRpb25JZCk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBOYW1lOiAnLCBjdXJyZW50R3JvdXBOYW1lKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRHcm91cE9wdGlvbklkczogJywgY3VycmVudEdyb3VwT3B0aW9uSWRzKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb25WYWx1ZXM6ICcsIGhpZGVPcHRpb25WYWx1ZXMpO1xyXG5cclxuICAgICAgICAvLyBTdG9yZSBub24tc2FsZSBwcmljZXMgb2Ygb3B0aW9uIHZhbHVlc1xyXG4gICAgICAgIC8vIHRvIHVzZSB3aGVuIHVwZGF0aW5nIG9wdGlvbiBwcmljZXMgb25seSB3aXRob3V0IHVwZGF0ZSB0aGUgd2hvbGUgbW9kaWZpZXJzIHZpZXdcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXMsIG5vbmVTYWxlcyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElEcyBvZiBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBhdCB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XHJcbiAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPiAwID8gY3VycmVudEdyb3VwT3B0aW9uSWRzXHJcbiAgICAgICAgICAgIDogKGN1cnJlbnRPcHRpb25JZCA/IFtjdXJyZW50T3B0aW9uSWRdIDogW10pO1xyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgc2hvd24gb3B0aW9uIGlkcyBvZiB0aGUgY3VycmVudCBzdGVwIHRvIHRoZSBzdGFja1xyXG4gICAgICAgIC8vIGlmIG5vdCB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXMgc3RlcC5cclxuICAgICAgICAvLyB0aGlzIGlzIHVzZWQgdG8gbmF2aWdhdGUgYmFjayB0byB0aGUgcHJldmlvdXMgc3RlcC5cclxuICAgICAgICBpZiAodGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgfHwgIWFyZUFycmF5c0VxdWFsVW5vcmRlcmVkKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMuc2xpY2UoLTEpWzBdLCBzaG93T3B0aW9uSWRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnB1c2goc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gc3RhY2tlZFNob3dPcHRpb25JZHM6ICcsIHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2hvdyAvIGhpZGUgYmFjayBidXR0b25cclxuICAgICAgICBpZiAodGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2suc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2suaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2hvdyBmb290ZXIsIGFuZCBoaWRlIGl0IGlmIG5vIG1vcmUgb3B0aW9uIHNob3duXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxGb290ZXIuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEZvb3Rlci5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIG1vZGFsIHRpdGxlIGZyb20gdGhlIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYCBvciBvcHRpb24gZGlzcGxheSBuYW1lXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE5hbWUpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuaHRtbChjdXJyZW50R3JvdXBOYW1lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gb3B0aW9uUmVuYW1lc1tzaG93T3B0aW9uSWRzWzBdXSB8fCB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHNob3dPcHRpb25JZHNbMF0pPy5kaXNwbGF5X25hbWU7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLnRleHQodGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGlkZSB0aGUgb3B0aW9uIG5hbWUgd2hlbiBoZXJlIGlzIG9ubHkgMSBvcHRpb24gc2hvd24gaW4gdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtzaG93T3B0aW9uSWRzWzBdfVwiXSAuZm9ybS1sYWJlbGApLmZpcnN0KCkuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdIC5mb3JtLWxhYmVsJykuZmlyc3QoKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IGN1cnJlbnQgcHJvZHVjdCBvcHRpb25zXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0nKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ19zaG93JylcclxuICAgICAgICAgICAgLmZpbHRlcigoXywgZWwpID0+ICFzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcigkKGVsKS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSkpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnX3Nob3cnKTtcclxuXHJcbiAgICAgICAgLy8gUmVuYW1lIHRoZSBzaG93biBvcHRpb25zIGlmIG5lZWRlZFxyXG4gICAgICAgIHNob3dPcHRpb25JZHMuZm9yRWFjaChvcHRpb25JZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBvcHRpb25SZW5hbWVzW29wdGlvbklkXTtcclxuICAgICAgICAgICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXSAuZm9ybS1sYWJlbGApLmZpcnN0KCkuaHRtbChuZXdOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTaG93IHRvb2x0aXAgZm9yIGdyb3VwXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwVG9vbHRpcCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyb3VwVG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVG9vbHRpcCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCh7IGN1c3RvbUZpZWxkLCBncm91cE5hbWU6IGN1cnJlbnRHcm91cE5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyb3VwVG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgZ3JvdXBUb29sdGlwKSk7XHJcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaG93IHRvb2x0aXAgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvblRvb2x0aXBzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFRpdGxlLCB0b29sdGlwcywgdG9vbHRpcEhlYWRpbmdzLCBzaG93T3B0aW9uSWRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIGZvciBzaG93biBvcHRpb25zIGFuZCBkaXNwbGF5IENvbnRpbnVlIGJ1dHRvbiBpZiBuZWVkZWQuXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRGVmYXVsdE9wdGlvblZhbHVlcyhzaG93T3B0aW9uSWRzLCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IHByaWNlcyBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xyXG4gICAgICAgIGlmICghaWdub3JlQVBJQ2FsbCkge1xyXG4gICAgICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgc3VtbWFyeSBidXQgcHJlbG9hZGVyIGZvciBwcmljZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N1bW1hcnkoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSwgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsICRtb2RpZmllcnNNb2RhbFRpdGxlLCAkYWRkVG9DYXJ0V3JhcHBlciwgZm9ybURhdGEsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2hvdyBzdW1tYXJ5IGNvbnRlbnQgaWYgbm8gb3B0aW9uIHZpc2libGUgb24gdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0ZSByZXF1aXJlZCB2YXJpYW50IG9wdGlvbnMgYW5kIHJlcG9ydCBlcnJvciBmb3IgdGhlIGZpcnN0IGludmFsaWQgb3B0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZVZhcmlhbnRPcHRpb25zKCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBzdGF0ZSB9KSA9PiBzdGF0ZSA9PT0gJ3ZhcmlhbnRfb3B0aW9uJykuZmluZChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIFJlcXVpcmVkIG9wdGlvbiBcIiR7b3B0aW9uLmRpc3BsYXlfbmFtZX1cIiBpcyBub3Qgc2VsZWN0ZWRgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gJGZvcm0uZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtpbnZhbGlkLmlkfV1cIl1gKVswXTtcclxuICAgICAgICAgICAgZWwucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrU3RlcCgpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gW1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnBvcCgpLCAvLyBjdXJyZW50IHN0ZXAncyBzaG93biBvcHRpb24gaWRzXHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMucG9wKCksIC8vIHByZXZpb3VzIHN0ZXAncyBzaG93biBvcHRpb24gaWRzXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgdmFsdWVzIG9mIHNob3duIG9wdGlvbiBpZHMgaW4gY3VycmVudCBzdGVwICYgcHJldmlvdXMgc3RlcFxyXG4gICAgICAgIC8vIHRvIGRpc3BsYXkgcHJldmlvdXMgc3RlcCBhZ2Fpbi5cclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcykge1xyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoX2ksIGVsKSA9PiBzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcigkKGVsKS5hdHRyKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkJykpKSk7XHJcblxyXG4gICAgICAgICAgICAkb3B0aW9uLmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcclxuICAgICAgICAgICAgICAgIC5ub3QoJ1t0eXBlPVwiY2hlY2tib3hcIl0sIFt0eXBlPVwicmFkaW9cIl0sIFt0eXBlPVwiZmlsZVwiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS52YWwoJycpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5yZW1vdmVBdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IHVwZGF0ZSBkaXNwbGF5IHByZXZpb3VzIG9wdGlvbnMgb24gbW9kaWZpZXJzIG1vZGFsXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGw6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIGNoYW5nZSBldmVudCB0byB1cGRhdGUgcHJpY2VzICYgZGF0YSBiZWxvbmdzIHRvIEJDXHJcbiAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gc2hvdWxkIGJlIGhpZGRlbiBiYXNlZCBvbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBmb3JtRGF0YTogRm9ybURhdGEsXHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IE51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfVxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBoaWRlT3B0aW9uOiBib29sZWFuLCBoaWRlT3B0aW9uVmFsdWVzOiBBcnJheTx7b3B0aW9uSWQ6IG51bWJlciwgdmFsdWVJZDogbnVtYmVyfT4gfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaEhpZGVJZih7IGN1c3RvbUZpZWxkLCBmb3JtRGF0YSwgb3B0aW9uIH0pIHtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGN1c3RvbUZpZWxkTWF0Y2hIaWRlSWY6IGNmX25hbWUgPSAke2N1c3RvbUZpZWxkLm5hbWV9IDsgb3BfbmFtZSA9ICR7b3B0aW9uLmRpc3BsYXlfbmFtZX1gKTtcclxuICAgICAgICBsZXQgaGlkZU9wdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGhpZGVPcHRpb25WYWx1ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0BoaWRlX2lmXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmICghbSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGhpZGVJZk9wdGlvbnMgPSBtWzFdLnNwbGl0KCc7JykubWFwKGt2ID0+IGt2LnNwbGl0KCc6JywgMikpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lOiBrZXkudHJpbSgpLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgPyB2YWx1ZS50cmltKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gaGlkZUlmT3B0aW9uczogJHtoaWRlSWZPcHRpb25zLm1hcCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiAodmFsdWUgPyBgJHtuYW1lfTogJHt2YWx1ZX1gIDogbmFtZSkpLmpvaW4oJzsgJyl9YCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgdGhlbk9wdGlvbnMgPSBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLm1hcChrdiA9PiBrdi5zcGxpdCgnOicsIDIpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcclxuICAgICAgICAgICAgbmFtZToga2V5LnRyaW0oKSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUudHJpbSgpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRoZW5PcHRpb25zOiAke3RoZW5PcHRpb25zLm1hcCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiAodmFsdWUgPyBgJHtuYW1lfTogJHt2YWx1ZX1gIDogbmFtZSkpLmpvaW4oJzsgJyl9YCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEZsYWcgdG8gY2hlY2sgaWYgb3B0aW9uOnZhbHVlIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgIG1hdGNoZXMgd2l0aCBjdXJyZW50IGZvcm0gZGF0YVxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBoaWRlSWZNYXRjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG9wdGlvbjp2YWx1ZSBpbiBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgIG1hdGNoZXMgd2l0aCBjdXJyZW50IGZvcm0gZGF0YVxyXG4gICAgICAgIGhpZGVJZk9wdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtvcHRpb25JZCwgdmFsdWVJZF0gPSB0aGlzLmZpbmRPcHRpb25WYWx1ZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZSA9IE51bWJlcihmb3JtRGF0YS5nZXRBbGwoYGF0dHJpYnV0ZVske29wdGlvbklkfV1gKS5zbGljZSgtMSlbMF0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm1WYWx1ZSA9PT0gdmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgaGlkZUlmTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlSWZNYXRjaDogJywgaGlkZUlmTWF0Y2gpO1xyXG5cclxuICAgICAgICBpZiAoaGlkZUlmTWF0Y2gpIHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgb3B0aW9uIHNob3VsZCBiZSBoaWRkZW4gd2hlbiBtYXRjaGluZyB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYFxyXG4gICAgICAgICAgICB0aGVuT3B0aW9ucy5mb3JFYWNoKCh7IG5hbWUsIHZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgY3VzdG9tIGZpZWxkIHZhbHVlIGNvbnRhaW4gb3B0aW9uIG5hbWUgd2l0aG91dCB2YWx1ZSwgdGhlbiBoaWRlIHRoZSB3aG9sZSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvbjogJywgaGlkZU9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb24udmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgaGlkZSB0aGUgc3BlY2lmaWMgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCgoeyBsYWJlbCwgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaGlkZU9wdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogb3B0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb25WYWx1ZXMucHVzaChfaGlkZU9wdGlvblZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb25WYWx1ZTogJywgX2hpZGVPcHRpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGlkZU9wdGlvbiB8fCBoaWRlT3B0aW9uVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaGlkZU9wdGlvbiwgaGlkZU9wdGlvblZhbHVlcyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gYmVsb25ncyB0byB0aGUgZ3JvdXAgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt7XHJcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XHJcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiBAcmV0dXJucyB7eyBncm91cE5hbWU6IHN0cmluZywgZ3JvdXBPcHRpb25JZHM6IEFycmF5PG51bWJlcj4gfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaEdyb3VwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0Bncm91cFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cE5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBPcHRpb25JZHMgPSBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLm1hcChzID0+IHMudHJpbSgpKSAvLyBvcHRpb24gbmFtZXNcclxuICAgICAgICAgICAgICAgIC5tYXAob3B0aW9uTmFtZSA9PiB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgZGlzcGxheV9uYW1lIH0pID0+IGVxdWFsT3B0aW9uU3RyaW5nKGRpc3BsYXlfbmFtZSwgb3B0aW9uTmFtZSkpPy5pZClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyb3VwT3B0aW9uSWRzLmluY2x1ZGVzKG9wdGlvbi5pZCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBncm91cCBpbiB0aGlzIGN1c3RvbSBmaWVsZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBncm91cE5hbWU6ICR7Z3JvdXBOYW1lfSwgZ3JvdXBPcHRpb25JZHM6ICR7Z3JvdXBPcHRpb25JZHN9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBncm91cE5hbWUsIGdyb3VwT3B0aW9uSWRzIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHZhbHVlIGhhcyBhIHRvb2x0aXAgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9XHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGRpc3BsYXlfbmFtZSxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBsYWJlbFxyXG4gICAgICogICAgIH1dXHJcbiAgICAgKiAgIH1cclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgdG9vbHRpcDogc3RyaW5nIH0gfCB7IHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBtWzFdLnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gY3VzdG9tRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0b29sdGlwIGZvciBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGZvciBvcHRpb24gXCIke25hbWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0b29sdGlwIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcHMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRvb2x0aXAgZm9yIG9wdGlvbiB2YWx1ZVxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgaWQsIGxhYmVsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGZvciBvcHRpb24gXCIke25hbWV9IDogJHt2YWx1ZX1cIiA9IFwiXCJcIiR7dG9vbHRpcH1cIlwiXCJgKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBzW2lkXSA9IHRvb2x0aXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWVUb29sdGlwcyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBncm91cCBoYXMgYSB0b29sdGlwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXAgKGdyb3VwIG5hbWUpID0gdG9vbHRpcGBcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBncm91cE5hbWU6IHN0cmluZ1xyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoVG9vbHRpcEdyb3VwKHsgY3VzdG9tRmllbGQsIGdyb3VwTmFtZSB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IGN1c3RvbUZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggZ3JvdXAgbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKGdyb3VwTmFtZSwgbmFtZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3IgZ3JvdXAgXCIke25hbWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgdG9vbHRpcCBoZWFkaW5nIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICogICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9XHJcbiAgICAgKiB9fSBwYXJhbTBcclxuICAgICAqIEByZXR1cm5zIHt7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwX2hlYWRpbmdcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IG1bMV0uc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBjdXN0b21GaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIG9wdGlvbiBuYW1lIG9yIG5vdCB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIXZhbHVlIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwSGVhZGluZ3MgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCgoeyBpZCwgbGFiZWwgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgaGVhZGluZyBmb3Igb3B0aW9uIFwiJHtuYW1lfSA6ICR7dmFsdWV9XCIgPSBcIlwiXCIke2hlYWRpbmd9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwSGVhZGluZ3NbaWRdID0gaGVhZGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb29sdGlwSGVhZGluZ3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiBuYW1lIGNvbnRhaW5zIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lYFxyXG4gICAgICogYW5kIHJldHVybiB0aGUgbmV3IG5hbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wLmN1c3RvbUZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLmN1c3RvbUZpZWxkLm5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbTAuY3VzdG9tRmllbGQudmFsdWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbTAub3B0aW9uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLm9wdGlvbi5kaXNwbGF5X25hbWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9IG5ldyBvcHRpb24gbmFtZVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoUmVuYW1lKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0ByZW5hbWVcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IG1bMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gU3RyaW5nKGN1c3RvbUZpZWxkLnZhbHVlKS50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHJlbmFtZSBvcHRpb24gXCIke25hbWV9XCIgdG8gXCIke25ld05hbWV9XCJgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiB2YWx1ZSBoYXMgYSBub24tc2FsZSBwcmljZSBpbiB0aGUgY3VzdG9tIGZpZWxkXHJcbiAgICAgKiBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICogICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9LFxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH19XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVOb25TYWxlcyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19Abm9uc2FsZVxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IE51bWJlcihtWzFdLnRyaW0oKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzcGxpdCBlYWNoIChvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlKSBwYWlyIHNlcGFyYXRlZCBieSBcIjtcIlxyXG4gICAgICAgICAgICBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLmZvckVhY2goa3YgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gc3BsaXQgb3B0aW9uIG5hbWUgOiBvcHRpb24gdmFsdWUgaW4gY3VzdG9tIGZpZWxkIHZhbHVlIHNlcGFyYXRlZCBieSBcIjpcIlxyXG4gICAgICAgICAgICAgICAgY29uc3QgW29wdGlvbk5hbWUsIHZhbHVlTGFiZWxdID0ga3Yuc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG9wdGlvbk5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIG5hbWUgaW4gY3VzdG9tIGZpZWxkIG1hdGNoIHdpdGggY3VycmVudCBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgb3B0aW9uIHZhbHVlIElEIHRoYXQgbWF0Y2hlcyB3aXRoIHRoZSB2YWx1ZSBsYWJlbCBpbiBjdXN0b20gZmllbGRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gb3B0aW9uLnZhbHVlcy5maW5kKCh7IGxhYmVsIH0pID0+IGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZUxhYmVsKSk/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBub24tc2FsZSBwcmljZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBvcHRpb24gdmFsdWUgSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVOb25TYWxlc1t2YWx1ZUlkXSA9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZU5vblNhbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2ggc3RvcmUgc2V0dGluZ3MgaW5jbHVkaW5nIHRheCBhbmQgYWN0aXZlIGN1cnJlbmN5XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8e1xyXG4gICAgICogICB0YXg6IHsgcGRwOiBudW1iZXIgfSxcclxuICAgICAqICAgY3VycmVuY3k6IHtcclxuICAgICAqICAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgZGlzcGxheTogeyBkZWNpbWFsUGxhY2VzOiBudW1iZXIsIGRlY2ltYWxUb2tlbjogc3RyaW5nLCBzeW1ib2w6IHN0cmluZywgc3ltYm9sUGxhY2VtZW50OiBzdHJpbmcsIHRob3VzYW5kc1Rva2VuOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBleGNoYW5nZVJhdGU6IG51bWJlciwgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBkZWZhdWx0Q3VycmVuY3k6IHtcclxuICAgICAqICAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgZGlzcGxheTogeyBkZWNpbWFsUGxhY2VzOiBudW1iZXIsIGRlY2ltYWxUb2tlbjogc3RyaW5nLCBzeW1ib2w6IHN0cmluZywgc3ltYm9sUGxhY2VtZW50OiBzdHJpbmcsIHRob3VzYW5kc1Rva2VuOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBleGNoYW5nZVJhdGU6IG51bWJlciwgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogfT5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hTZXR0aW5ncygpIHtcclxuICAgICAgICBpZiAoY2FjaGVkU2V0dGluZ3MpIHJldHVybiBjYWNoZWRTZXR0aW5ncztcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlZmF1bHRDdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSFcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeShjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5DdXJyZW5jeUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBjdXJyZW5jeShjdXJyZW5jeUNvZGU6ICRkZWZhdWx0Q3VycmVuY3lDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQ3VycmVuY3lGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgQ3VycmVuY3lGaWVsZHMgb24gQ3VycmVuY3kge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFBsYWNlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNoYW5nZVJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuZGVmYXVsdF9jdXJyZW5jeV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhY2hlZFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICAuLi5yZXNwLmRhdGEuc2l0ZS5zZXR0aW5ncyxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHJlc3AuZGF0YS5zaXRlLmN1cnJlbmN5LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIG9wdGlvbiBwcmljZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PHsgaWQ6IG51bWJlciwgdmFsdWVzOiBBcnJheTx7IGlkOiBudW1iZXIgfT4gfT59IHNob3dPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8e1xyXG4gICAgICogICBvcHRpb25JZDogbnVtYmVyfG51bGwsXHJcbiAgICAgKiAgIHZhbHVlSWQ6IG51bWJlcnxudWxsLFxyXG4gICAgICogICBwcmljZXNXaXRoVGF4OiB7XHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgcHJpY2VzV2l0aG91dFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIGFkanVzdGVkUHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG51bWJlcixcclxuICAgICAqICAgfSxcclxuICAgICAqICAgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4OiB7XHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBub25TYWxlUHJpY2VWYWx1ZTogbnVtYmVyLFxyXG4gICAgICogICB9LFxyXG4gICAgICogfT4+fVxyXG4gICAgICovXHJcbiAgICBhc3luYyBmZXRjaE9wdGlvblByaWNlcyhzaG93T3B0aW9ucywgZm9ybURhdGEpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlSWRzID0gW107XHJcblxyXG4gICAgICAgIGZvcm1EYXRhLmVudHJpZXMoKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IGtleS5tYXRjaCgvXmF0dHJpYnV0ZVxcWyhcXGQrKVxcXSQvKTtcclxuICAgICAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVudGl0eUlkID0gTnVtYmVyKG1bMV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVFbnRpdHlJZCA9IE51bWJlcih2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlRW50aXR5SWQgJiYgIXNob3dPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IG9wdGlvbkVudGl0eUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWVJZHMucHVzaCh7IG9wdGlvbkVudGl0eUlkLCB2YWx1ZUVudGl0eUlkIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW1xyXG4gICAgICAgICAgICAvLyBmZXRjaCBhbHJlYWR5IHNlbGVjdGVkIG9wdGlvbnMnIHByaWNlc1xyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmZldGNoT3B0aW9uUHJpY2Uoc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgc2hvd09wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBvcHRpb24udmFsdWVzIHx8IChvcHRpb24udmFsdWUgPyBbeyBpZDogb3B0aW9uLnZhbHVlIH1dIDogW10pO1xyXG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBmZXRjaCBjdXJyZW50IG9wdGlvbiB2YWx1ZSdzIHByaWNlc1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hPcHRpb25QcmljZShbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkT3B0aW9uVmFsdWVJZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkVudGl0eUlkOiBvcHRpb24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUVudGl0eUlkOiB2YWx1ZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdKS50aGVuKHByb2R1Y3QgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVJZDogdmFsdWUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtwcmV2LCAuLi5zZWxlY3Rpb25zXSA9IGF3YWl0IGhhbmRsZVByb21pc2VzV2l0aExpbWl0KHByb21pc2VzKTtcclxuXHJcbiAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKHNlbGVjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucHJpY2VzV2l0aFRheCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBub24tc2FsZSBwcmljZSBiYXNlZCBvbiB0aGUgcHJldmlvdXMgcHJpY2UgYW5kIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zaWRlciBhbGwgbm93IHByaWNlIGFuZCByZWd1bGFyIHByaWNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9uU2FsZVByaWNlV2l0aFRheCA9IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAvLyB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWUgLSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbm9uLXNhbGUgcHJpY2UgaWYgaXQncyBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIGlmIChub25TYWxlUHJpY2VXaXRoVGF4IDw9IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRqdXN0ZWRQcmljZXNXaXRoVGF4ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVZhbHVlOiBub25TYWxlUHJpY2VXaXRoVGF4LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vbi1zYWxlIHByaWNlIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBwcmljZSBhbmQgdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNpZGVyIGFsbCBub3cgcHJpY2UgYW5kIHJlZ3VsYXIgcHJpY2VcclxuICAgICAgICAgICAgICAgIGxldCBub25TYWxlUHJpY2VXaXRob3V0VGF4ID0gc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXg/LmJhc2VQcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZSAtIHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBub24tc2FsZSBwcmljZSBpZiBpdCdzIGxlc3MgdGhhbiB0aGUgY3VycmVudCBwcmljZVxyXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGVQcmljZVdpdGhvdXRUYXggPD0gc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5hZGp1c3RlZFByaWNlc1dpdGhvdXRUYXggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG5vblNhbGVQcmljZVdpdGhvdXRUYXgsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gZmV0Y2hPcHRpb25QcmljZXMgcmV0dXJuczogJywgc2VsZWN0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIFtwcmV2LCAuLi5zZWxlY3Rpb25zXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHByb2R1Y3QgcHJpY2UgZnJvbSBzcGVjaWZpYyBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTx7IG9wdGlvbkVudGl0eUlkOiBudW1iZXIsIHZhbHVlRW50aXR5SWQ6IG51bWJlcn0+fSBvcHRpb25WYWx1ZUlkc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8eyBwcmljZXNXaXRoVGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9LCBwcmljZXNXaXRob3V0VGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9IH0+XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGZldGNoT3B0aW9uUHJpY2Uob3B0aW9uVmFsdWVJZHMpIHtcclxuICAgICAgICBjb25zdCBjYWNoZUtleSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvblZhbHVlSWRzKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtjYWNoZUtleV0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHhockZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgKCRwcm9kdWN0SWQ6IEludCEsICRvcHRpb25WYWx1ZUlkczogW09wdGlvblZhbHVlSWQhXSwgJGN1cnJlbmN5Q29kZTogY3VycmVuY3lDb2RlISkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdChlbnRpdHlJZDogJHByb2R1Y3RJZCwgb3B0aW9uVmFsdWVJZHM6ICRvcHRpb25WYWx1ZUlkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRoVGF4OiBwcmljZXMoY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlLCBpbmNsdWRlVGF4OiB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlc1dpdGhvdXRUYXg6IHByaWNlcyhjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUsIGluY2x1ZGVUYXg6IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5RmllbGRzIG9uIE1vbmV5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBQcmljZUZpZWxkcyBvbiBQcmljZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWVJZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hPcHRpb25QcmljZUNhY2hlW2NhY2hlS2V5XSA9IHJlc3AuZGF0YS5zaXRlLnByb2R1Y3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVbY2FjaGVLZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheSB0b29sdGlwcyB0byB0aGUgY29ycmVzcG9uZGluZyBzaG93biBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxUaXRsZVxyXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyB0b29sdGlwOiBzdHJpbmcsIHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0gfX0gdG9vbHRpcHNcclxuICAgICAqIEBwYXJhbSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH19IHRvb2x0aXBIZWFkaW5nc1xyXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaG93T3B0aW9uSWRzIG9wdGlvbiBpZHMgdG8gc2hvdyB0b29sdGlwc1xyXG4gICAgICovXHJcbiAgICBzaG93T3B0aW9uVG9vbHRpcHMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsVGl0bGUsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MsIHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICAvLyBEaXNwbGF5IHRvb2x0aXBcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwcykuZm9yRWFjaCgoW29wdGlvbklkLCB7IHRvb2x0aXAsIHZhbHVlVG9vbHRpcHMgfV0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcihvcHRpb25JZCkpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdG9vbHRpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIG9wdGlvbklkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkb3B0aW9uLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQ9XCIke29wdGlvbklkfVwiXWApLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRsYWJlbCA9ICRvcHRpb24uZmluZCgnbGFiZWwnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkbGFiZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYWJlbC5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb24ucHJlcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcHMpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB2YWx1ZVRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICRvcHRpb24uZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICR2YWx1ZS5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpZiBvbmx5IDEgb3B0aW9uIHNob3duIGF0IGN1cnJlbnQgc3RlcCxcclxuICAgICAgICAvLyB0aGVuIG1vdmUgaXRzIHRvb2x0aXAgdG8gdGhlIG1vZGFsIHRpdGxlXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtzaG93T3B0aW9uSWRzWzBdfVwiXWApO1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSB0b29sdGlwIGhlYWRpbmdcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwSGVhZGluZ3MpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKFtvcHRpb25JZF0pID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKG9wdGlvbklkKSkpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChbb3B0aW9uSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmdzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcEhlYWRpbmdzKS5mb3JFYWNoKChbdmFsdWVJZCwgdmFsdWVUb29sdGlwSGVhZGluZ10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwSGVhZGluZyA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUucmVwbGFjZSgnPCVoZWFkaW5nJT4nLCB2YWx1ZVRvb2x0aXBIZWFkaW5nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMoKSB7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKCEkcHJvZHVjdE9wdGlvbnNFbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZF0sIFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZF0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2R1Y3RPcHRpb25zLmxlbmd0aCB8fCAhdGhpcy5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbklkcyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkXScpXHJcbiAgICAgICAgICAgIC5tYXAoKF9pbmRleCwgZWwpID0+IE51bWJlcigkKGVsKS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSlcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBzID0ge307XHJcbiAgICAgICAgY29uc3QgdG9vbHRpcEhlYWRpbmdzID0ge307XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBvcHRpb25JZHMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAgICAgICAuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdG9vbHRpcE1hdGNoLnRvb2x0aXAgfHwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcHM6IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBzW29wdGlvbi5pZF0/LnZhbHVlVG9vbHRpcHMsIHRvb2x0aXBNYXRjaC52YWx1ZVRvb2x0aXBzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUb29sdGlwSGVhZGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSwgdmFsdWVUb29sdGlwSGVhZGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93SW5saW5lT3B0aW9uVG9vbHRpcHMoJHByb2R1Y3RPcHRpb25zRWwsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJbmxpbmVPcHRpb25Ub29sdGlwcygkcHJvZHVjdE9wdGlvbnNFbCwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncykge1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvb2x0aXBzKS5mb3JFYWNoKChbb3B0aW9uSWQsIHsgdG9vbHRpcCwgdmFsdWVUb29sdGlwcyA9IHt9IH1dKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRvcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25Ub29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB0b29sdGlwKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkJywgb3B0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGxhYmVsID0gJG9wdGlvbi5maW5kKCdsYWJlbCcpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRsYWJlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxhYmVsLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb24ucHJlcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcHMpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEkdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdmFsdWVUb29sdGlwKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJzpzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkb3B0aW9uLmZpbmQoJ3NlbGVjdCcpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNlbGVjdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2VsZWN0LmFmdGVyKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb24uYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFmdGVyKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvb2x0aXBIZWFkaW5ncykuZm9yRWFjaCgoW29wdGlvbklkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nc10pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJG9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwSGVhZGluZ3MpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJG9wdGlvbi5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcEhlYWRpbmcgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlLnJlcGxhY2UoJzwlaGVhZGluZyU+JywgdmFsdWVUb29sdGlwSGVhZGluZykpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJzpzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkb3B0aW9uLmZpbmQoJ3NlbGVjdCcpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNlbGVjdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2VsZWN0LmFmdGVyKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLmFwcGVuZCgkdG9vbHRpcEhlYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIG9wdGlvbnMgYW5kIGRpc3BsYXkgY29udGludWUgYnV0dG9uIGlmIG5lY2Vzc2FyeS5cclxuICAgICAqIFN0b3AgYXV0byB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IHVudGlsIHRoZSBjb250aW51ZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAqXHJcbiAgICAgKiBDb250aW51ZSBidXR0b24gaXMgc2hvd24gaWYgYW55IG9mIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gICAgICogLSBvcHRpb25zIHRoYXQgaGFzIGRlZmF1bHQgdmFsdWVcclxuICAgICAqIC0gY2hlY2tib3ggb3B0aW9uc1xyXG4gICAgICogLSBvcHRpb25hbCBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgICogLSBvcHRpb25hbCBkYXRlIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgKiAtIGZpbGUgaW5wdXRcclxuICAgICAqIC0gbW9yZSB0aGFuIDEgb3B0aW9uIGFyZSBzaG93biBhdCB0aGUgc2FtZSB0aW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBzaG93T3B0aW9uSWRzIHNob3cgb3B0aW9uIGlkc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxDb250aW51ZVxyXG4gICAgICovXHJcbiAgICBwb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMoc2hvd09wdGlvbklkcywgJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsQ29udGludWUpIHtcclxuICAgICAgICBjb25zdCBzaG93bk9wdGlvbnMgPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBpZCB9KSA9PiBzaG93T3B0aW9uSWRzLmluY2x1ZGVzKGlkKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIG9wdGlvbnMgdGhhdCBoYXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcHJlZmlsbCwgc2VsZWN0ZWRfZGF0ZSwgdmFsdWVzIH0pID0+XHJcbiAgICAgICAgICAgICAgICBwcmVmaWxsIHx8XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZF9kYXRlICYmIChzZWxlY3RlZF9kYXRlLmRheSB8fCBzZWxlY3RlZF9kYXRlLm1vbnRoIHx8IHNlbGVjdGVkX2RhdGUueWVhcikgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlcz8uZmluZCgoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjaGVja2JveCB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBjaGVja2JveE9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBub1ZhbHVlLCB2YWx1ZSB9KSA9PiBub1ZhbHVlIHx8IHZhbHVlKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZmlsZSB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBmaWxlT3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHBhcnRpYWwgfSkgPT4gcGFydGlhbCA9PT0gJ2lucHV0LWZpbGUnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZGF0ZSB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkYXRlT3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHBhcnRpYWwgfSkgPT4gcGFydGlhbCA9PT0gJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZHJvcGRvd24gdHlwZSBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcmVxdWlyZWQsIHBhcnRpYWwgfSkgPT4gIXJlcXVpcmVkICYmIHBhcnRpYWwgPT09ICdzZXQtc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRleHQgLyBtdWx0aWxpbmUgLyBudW1iZXIgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRleHRPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnaW5wdXQtdGV4dCcgfHwgcGFydGlhbCA9PT0gJ3RleHRhcmVhJyB8fCBwYXJ0aWFsID09PSAnaW5wdXQtbnVtYmVycycpO1xyXG5cclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgIHx8IGRlZmF1bHRPcHRpb25zLmxlbmd0aCA+IDAgfHwgY2hlY2tib3hPcHRpb25zLmxlbmd0aCA+IDAgfHwgZmlsZU9wdGlvbnMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICB8fCBkYXRlT3B0aW9ucy5sZW5ndGggPiAwIHx8IGRyb3Bkb3duT3B0aW9ucy5sZW5ndGggPiAwIHx8IHRleHRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gc2hvdyBjb250aW51ZSBidXR0b25cclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29udGludWUuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBhdXRvIHVwZGF0ZSB0aGUgbW9kaWZpZXJzIHZpZXcgdW50aWwgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gb3B0aW9uc1xyXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucy5mb3JFYWNoKCh7XHJcbiAgICAgICAgICAgICAgICBpZCwgcHJlZmlsbCwgc2VsZWN0ZWRfZGF0ZSwgdmFsdWVzLFxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gdmFsdWVzPy5maW5kKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKT8uaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnc2VsZWN0JykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1gKS52YWwodmFsdWVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt2YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByZWZpbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdYCkudmFsKHByZWZpbGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZF9kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX2RhdGUuZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW2RheV1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS5kYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRfZGF0ZS5tb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVttb250aF1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS5tb250aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9kYXRlLnllYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1beWVhcl1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIGNoZWNrYm94IG9wdGlvbnNcclxuICAgICAgICAgICAgY2hlY2tib3hPcHRpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgICAgIGlkLCBjaGVja2VkLCB2YWx1ZSwgbm9WYWx1ZSxcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJoaWRkZW5cIl1gKS52YWwodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImNoZWNrYm94XCJdYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJoaWRkZW5cIl1gKS52YWwobm9WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiY2hlY2tib3hcIl1gKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1hcmsgZmlsZSBpbnB1dCwgZGF0ZSBpbnB1dCwgZHJvcGRvd24gc2VsZWN0LCB0ZXh0IGlucHV0IGFzIHNob3duXHJcbiAgICAgICAgICAgIFsuLi5maWxlT3B0aW9ucywgLi4uZGF0ZU9wdGlvbnMsIC4uLmRyb3Bkb3duT3B0aW9ucywgLi4udGV4dE9wdGlvbnNdLmZvckVhY2goKHsgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVtkYXldXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bbW9udGhdXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1beWVhcl1cIl1gKS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzKSB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBwcmVsb2FkZXI6IHRydWUgfTtcclxuICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgY29uc3QgcHJpY2VUZXh0ID0gbXVzdGFjaGUucmVuZGVyKHRoaXMub3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG5cclxuICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV1gKVxyXG4gICAgICAgICAgICAgICAgLmVhY2goKF9pLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSBOdW1iZXIoJHZhbHVlLmF0dHIoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZUlkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByaWNlID0gJChwcmljZUh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBhbHJlYWR5IGhhcyBwcmljZSBkaXNwbGF5ZWQgYmVmb3JlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmRhdGEoJ3ByaWNlSHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnLCAkdmFsdWUudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS50ZXh0KGAkeyR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKX0gJHtwcmljZVRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkb2xkID0gJHZhbHVlLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkPVwiJHtvcHRpb25JZH0tJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG9sZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb2xkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHBsYWNlaG9sZGVyID0gJHZhbHVlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLXBsYWNlaG9sZGVyXScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwoJHByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgcHJpY2VzIHRvIGNvcnJlc3BvbmRpbmcgb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VidG90YWxcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2hvd09wdGlvbklkcyBvcHRpb24gaWRzIHRvIHNob3cgcHJpY2VzXHJcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxyXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH0gfX0gbm9uZVNhbGVzIG9wdGlvbiB2YWx1ZXMgd2l0aCBub24tc2FsZSBwcmljZXNcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZVVwZGF0ZVN1YnRvdGFsPWZhbHNlXSBpZ25vcmUgdXBkYXRlIHN1YnRvdGFsXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMsIGlnbm9yZVVwZGF0ZVN1YnRvdGFsID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBbc2V0dGluZ3MsIFtwcmV2LCAuLi5zZWxlY3Rpb25zXV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hTZXR0aW5ncygpLFxyXG4gICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2VzKFxyXG4gICAgICAgICAgICAgICAgc2hvd09wdGlvbklkcy5tYXAoX2lkID0+IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gX2lkKSksXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd1ByaWNlID0gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dQcmljZUZyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnR4dFByaWNlRnJlZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93UHJpY2VaZXJvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UHJpY2UodmFsdWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFByaWNlKHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgb3B0aW9uSWQsIHZhbHVlSWQsIGFkanVzdGVkUHJpY2VzV2l0aFRheCwgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4LFxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiBhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXg6IHNob3dQcmljZShhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiAoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUsIHRydWUpIDogJycpLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiBzaG93UHJpY2UoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IChhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlLCB0cnVlKSA6ICcnKSxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyYW1zLnByaWNlV2l0aFRheCB8fCBwYXJhbXMucHJpY2VXaXRob3V0VGF4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvdmVycmlkZSBub24tc2FsZSBwcmljZSBmb3Igb3B0aW9uIHZhbHVlcyBpZiBpdCBpcyBhcHBlYXJzIGluIGN1c3RvbSBmaWVsZCBgX19Abm9uc2FsZWBcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBpZiBpdCdzIGhpZ2hlciB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub25TYWxlID0gbm9uZVNhbGVzW29wdGlvbklkXT8uW3ZhbHVlSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGNoYW5nZWROb25TYWxlID0gbm9uU2FsZSAqIHNldHRpbmdzLmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVZhbHVlID0gc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSA6IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNoYW5nZWROb25TYWxlID4gcHJpY2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IGV4Y2hhbmdlZE5vblNhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogdGhpcy5mb3JtYXRQcmljZShleGNoYW5nZWROb25TYWxlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiBleGNoYW5nZWROb25TYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IHRoaXMuZm9ybWF0UHJpY2UoZXhjaGFuZ2VkTm9uU2FsZSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVRleHQgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVBsYWluVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcmljZSA9ICQocHJpY2VIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JywgJHZhbHVlLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS50ZXh0KGAkeyR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKX0gJHtwcmljZVRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ3ByaWNlSHRtbCcsIHByaWNlSHRtbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGxhY2Vob2xkZXIgPSAkdmFsdWUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtcGxhY2Vob2xkZXJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTaG93IHN1YnRvdGFsIGNhbGN1bGF0ZWQgZnJvbSBhbGwgc2VsZWN0ZWQgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmICghaWdub3JlVXBkYXRlU3VidG90YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9uU3VidG90YWwoJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHByZXYsIHNldHRpbmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5IHN1YnRvdGFsIGZvciB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgcHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfCBudWxsLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBwcmljZXNXaXRob3V0VGF4OiB7XHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfCBudWxsLFxyXG4gICAgICogfX0gcHJvZHVjdFxyXG4gICAgICogQHBhcmFtIHt7IHRheDogeyBwZHA6IG51bWJlciB9IH19IHNldHRpbmdzXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBzaG93T3B0aW9uU3VidG90YWwoJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHByb2R1Y3QsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdHh0U3VidG90YWw6IHRoaXMuY29udGV4dC50eHRTdWJ0b3RhbCxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogJycsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3QucHJpY2VzV2l0aFRheD8ucHJpY2UgfHwgcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4Py5wcmljZSkge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheDogdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiBwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4OiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IHN1bW1hcnkgb2Ygc2VsZWN0ZWQgb3B0aW9ucyBiZWZvcmUgYWRkaW5nIHRvIGNhcnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1bW1hcnlcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbFxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFRpdGxlXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGFkZFRvQ2FydFdyYXBwZXJcclxuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZWxvYWRlclxyXG4gICAgICovXHJcbiAgICBzaG93U3VtbWFyeSgkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5LCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgJG1vZGlmaWVyc01vZGFsVGl0bGUsICRhZGRUb0NhcnRXcmFwcGVyLCBmb3JtRGF0YSwgcHJlbG9hZGVyID0gZmFsc2UpIHtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5odG1sKHRoaXMuY29udGV4dC50eHRSZXZpZXdTZWxlY3Rpb25zKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9ICFwcmVsb2FkZXJcclxuICAgICAgICAgICAgPyAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKClcclxuICAgICAgICAgICAgOiBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCB7IHByZWxvYWRlciB9LCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgIGNvbnN0ICRzdWJ0b3RhbCA9ICQoc3VidG90YWxIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZS1zdWJ0b3RhbCcsICcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheVN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XWApO1xyXG4gICAgICAgICAgICBjb25zdCBtb250aFN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bbW9udGhdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHllYXJTdHIgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF5U3RyIHx8IG1vbnRoU3RyIHx8IHllYXJTdHIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoYCR7eWVhclN0cn0tJHttb250aFN0cn0tJHtkYXlTdHJ9YCkudG9Mb2NhbGVEYXRlU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU6IGAke3llYXJTdHJ9LSR7bW9udGhTdHJ9LSR7ZGF5U3RyfWAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVTdHIgPSBmb3JtRGF0YS5nZXRBbGwoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCkuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlU3RyIHx8IHZhbHVlU3RyID09PSAnMCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZVN0ciBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVN0ci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlU3RyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZVN0ciA/IE51bWJlcih2YWx1ZVN0cikgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBpdCBpcyBjaGVja2JveCBhbmQgbm90IGNoZWNrZWRcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5ub1ZhbHVlICYmIG9wdGlvbi5ub1ZhbHVlID09PSB2YWx1ZUlkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUxhYmVsID0gb3B0aW9uLnZhbHVlcz8uZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gdmFsdWVJZCk/LmxhYmVsXHJcbiAgICAgICAgICAgICAgICB8fCAob3B0aW9uLnZhbHVlID09PSB2YWx1ZUlkID8gb3B0aW9uLmxhYmVsIDogdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlSHRtbCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbi5pZH0tJHt2YWx1ZUlkfVwiXWApXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKS5jbG9uZSgpLnJlbW92ZUF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnKVswXT8ub3V0ZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxQcmljZUh0bWwgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl0gb3B0aW9uW3ZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLmRhdGEoJ3ByaWNlSHRtbCcpO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5kaXNwbGF5X25hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVMYWJlbCB8fCB2YWx1ZVN0cixcclxuICAgICAgICAgICAgICAgIHByaWNlSHRtbDogcHJpY2VIdG1sIHx8IG9wdGlvbkVsUHJpY2VIdG1sLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VtbWFyeUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdW1tYXJ5VGVtcGxhdGUsIHsgb3B0aW9ucyB9LCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1bW1hcnkuaHRtbChzdW1tYXJ5SHRtbCk7XHJcblxyXG4gICAgICAgIC8vIEluc2VydCBzdWJ0b3RhbCB0byB0byBhZGQgdG8gY2FydCB3cmFwcGVyIGFuZCBzaG93IGl0XHJcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlLXN1YnRvdGFsXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLmZpbmQodGhpcy5hZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IpLnByZXBlbmQoJHN1YnRvdGFsKTtcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5zaG93KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2VdXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aG91dF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRob3V0X3RheC5jdXJyZW5jeVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2UudGF4X2xhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmN1cnJlbmN5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRoX3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRoX3RheC5jdXJyZW5jeVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC5jdXJyZW5jeVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdHh0U3VidG90YWw6IHRoaXMuY29udGV4dC50eHRTdWJ0b3RhbCxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogJycsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEucHJpY2UpIHtcclxuICAgICAgICAgICAgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgLi4uKGRhdGEucHJpY2Uud2l0aF90YXggPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6IGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiBkYXRhLnByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAuLi4oZGF0YS5wcmljZS53aXRob3V0X3RheCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IGRhdGEucHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFBhcnNlcyBhbiBJU08gZGF0ZS10aW1lIHN0cmluZyBhbmQgZXh0cmFjdHMgdGhlIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgZGF0ZS10aW1lIHN0cmluZyB0byBwYXJzZS5cclxuICogQHJldHVybnMge09iamVjdHxudWxsfSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZXh0cmFjdGVkIGNvbXBvbmVudHMsIG9yIGBudWxsYCBpZiB0aGUgZm9ybWF0IGlzIGludmFsaWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlVGltZVN0cmluZyhzdHIpIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gL15cXHMqKD86KD86KFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkpfCg/OihcXGR7Mn0pLShcXGR7Mn0pKSk/KD86W1RcXHNdKT8oPzooXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KSg/OlxcLlxcZCspP3woXFxkezJ9KTooXFxkezJ9KXwoXFxkezJ9KSk/XFxzKig/Olp8KFsrLV0pKFxcZHsxLDJ9KSg/Ojo/KFxcZHsyfSkpPyk/XFxzKiQvO1xyXG5cclxuICAgIGNvbnN0IG1hdGNoID0gc3RyLnRyaW0oKS5tYXRjaChyZWdleCk7XHJcbiAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7IC8vIEludmFsaWQgZm9ybWF0XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW1xyXG4gICAgICAgICxcclxuICAgICAgICB5ZWFyLCBtb250aCwgZGF5LCAvLyBbMV0sIFsyXSwgWzNdXHJcbiAgICAgICAgc2hvcnRNb250aCwgc2hvcnREYXksIC8vIFs0XSwgWzVdXHJcbiAgICAgICAgaG91ciwgbWludXRlLCBzZWNvbmQsIC8vIFs2XSwgWzddLCBbOF1cclxuICAgICAgICBzaG9ydEhvdXIsIHNob3J0TWludXRlLCAvLyBbOV0sIFsxMF1cclxuICAgICAgICBzaW5nbGVUaW1lQ29tcG9uZW50LCAvLyBbMTFdXHJcbiAgICAgICAgdHpTaWduLCB0ekhvdXJPZmZzZXQsIHR6TWludXRlT2Zmc2V0LCAvLyBbMTJdLCBbMTNdLCBbMTRdXHJcbiAgICBdID0gbWF0Y2g7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0ge307XHJcblxyXG4gICAgLy8gRGF0ZSBjb21wb25lbnRzXHJcbiAgICBpZiAoeWVhciAmJiBtb250aCAmJiBkYXkpIHtcclxuICAgICAgICByZXN1bHQueWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcclxuICAgICAgICByZXN1bHQubW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xyXG4gICAgICAgIHJlc3VsdC5kYXkgPSBwYXJzZUludChkYXksIDEwKTtcclxuICAgIH0gZWxzZSBpZiAoc2hvcnRNb250aCAmJiBzaG9ydERheSkge1xyXG4gICAgICAgIHJlc3VsdC5tb250aCA9IHBhcnNlSW50KHNob3J0TW9udGgsIDEwKTtcclxuICAgICAgICByZXN1bHQuZGF5ID0gcGFyc2VJbnQoc2hvcnREYXksIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaW1lIGNvbXBvbmVudHNcclxuICAgIGlmIChob3VyICE9PSB1bmRlZmluZWQgJiYgbWludXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KGhvdXIsIDEwKTtcclxuICAgICAgICByZXN1bHQubWludXRlID0gcGFyc2VJbnQobWludXRlLCAxMCk7XHJcbiAgICAgICAgaWYgKHNlY29uZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZWNvbmQgPSBwYXJzZUludChzZWNvbmQsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNob3J0SG91ciAhPT0gdW5kZWZpbmVkICYmIHNob3J0TWludXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KHNob3J0SG91ciwgMTApO1xyXG4gICAgICAgIHJlc3VsdC5taW51dGUgPSBwYXJzZUludChzaG9ydE1pbnV0ZSwgMTApO1xyXG4gICAgfSBlbHNlIGlmIChzaW5nbGVUaW1lQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KHNpbmdsZVRpbWVDb21wb25lbnQsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaW1lem9uZVxyXG4gICAgaWYgKHR6U2lnbiAmJiB0ekhvdXJPZmZzZXQpIHtcclxuICAgICAgICBjb25zdCBzaWduID0gdHpTaWduID09PSAnKycgPyAxIDogLTE7XHJcbiAgICAgICAgY29uc3QgdHpIb3VyID0gcGFyc2VJbnQodHpIb3VyT2Zmc2V0LCAxMCk7XHJcbiAgICAgICAgY29uc3QgdHpNaW51dGUgPSB0ek1pbnV0ZU9mZnNldCA/IHBhcnNlSW50KHR6TWludXRlT2Zmc2V0LCAxMCkgOiAwO1xyXG4gICAgICAgIHJlc3VsdC50aW1lem9uZSA9IHNpZ24gKiAodHpIb3VyICsgdHpNaW51dGUgLyA2MCk7XHJcbiAgICB9IGVsc2UgaWYgKHN0ci5pbmNsdWRlcygnWicpKSB7XHJcbiAgICAgICAgcmVzdWx0LnRpbWV6b25lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBkYXRlLXRpbWUgc3RyaW5nIGludG8gYSBEYXRlIG9iamVjdCBhZGp1c3RlZCBmb3IgY291bnRkb3duIHB1cnBvc2VzLlxyXG4gKlxyXG4gKiAtIElmIHRoZSBkYXRlLXRpbWUgc3RyaW5nIGRvZXMgbm90IGluY2x1ZGUgYSB5ZWFyLCBtb250aCwgb3IgZGF5LCBpdCBpcyB0cmVhdGVkIGFzIGEgZGFpbHkgY291bnRkb3duLlxyXG4gKiAgIFRoZSBmdW5jdGlvbiB3aWxsIHNldCB0aGUgZGF0ZSB0byB0b2RheSBvciByb2xsIG92ZXIgdG8gdGhlIG5leHQgZGF5IGlmIHRoZSB0aW1lIGhhcyBhbHJlYWR5IHBhc3NlZC5cclxuICogLSBJZiB0aGUgZGF0ZS10aW1lIHN0cmluZyBkb2VzIG5vdCBpbmNsdWRlIGFuIGhvdXIsIG1pbnV0ZSwgb3Igc2Vjb25kLCB0aGV5IGRlZmF1bHQgdG8gMC5cclxuICogLSBUaGUgZnVuY3Rpb24gYWRqdXN0cyBmb3IgdGhlIHNwZWNpZmllZCB0aW1lem9uZSBvZmZzZXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgZGF0ZS10aW1lIHN0cmluZyB0byBwYXJzZS5cclxuICogQHJldHVybnMge0RhdGV8dW5kZWZpbmVkfSBBIERhdGUgb2JqZWN0IHVzZWQgZm9yIHRoZSBjb3VudGRvd24sIG9yIGB1bmRlZmluZWRgIGlmIHBhcnNpbmcgZmFpbHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb3VudGRvd25EYXRlKHN0cikge1xyXG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlRGF0ZVRpbWVTdHJpbmcoc3RyKTtcclxuICAgIGlmICghcGFyc2VkRGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxyXG4gICAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgdGltZXpvbmUgfSA9IHBhcnNlZERhdGU7XHJcblxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHkgPSB5ZWFyID8/IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbSA9IG1vbnRoID8/IChub3cuZ2V0TW9udGgoKSArIDEpO1xyXG4gICAgY29uc3QgZCA9IGRheSA/PyBub3cuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgaCA9IGhvdXIgfHwgMDtcclxuICAgIGNvbnN0IG1pbiA9IG1pbnV0ZSB8fCAwO1xyXG4gICAgY29uc3Qgc2VjID0gc2Vjb25kIHx8IDA7XHJcblxyXG4gICAgbGV0IGRhdGU7XHJcblxyXG4gICAgaWYgKHRpbWV6b25lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCB1dGNNaWxsaXMgPSBEYXRlLlVUQyh5LCBtIC0gMSwgZCwgaCwgbWluLCBzZWMpIC0gKHRpbWV6b25lICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh1dGNNaWxsaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBpZiAoeWVhcikgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcclxuICAgICAgICBpZiAobW9udGgpIGRhdGUuc2V0TW9udGgobW9udGggLSAxKTtcclxuICAgICAgICBpZiAoZGF5KSBkYXRlLnNldERhdGUoZGF5KTtcclxuICAgICAgICBkYXRlLnNldEhvdXJzKGgpO1xyXG4gICAgICAgIGRhdGUuc2V0TWludXRlcyhtaW4pO1xyXG4gICAgICAgIGRhdGUuc2V0U2Vjb25kcyhzZWMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgheWVhciAmJiAhbW9udGggJiYgIWRheSkge1xyXG4gICAgICAgIC8vIGZvciBkYWlseSBjb3VudGRvd24sIGFkZCAxIGRheSBpZiBkYXRlIGlzIGluIHRoZSBwYXN0XHJcbiAgICAgICAgaWYgKGRhdGUgPCBub3cpIHtcclxuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG4vKipcclxuICogKipTYWxlQ291bnRkb3duIFNpbmdsZXRvbiBPYmplY3QqKlxyXG4gKlxyXG4gKiBNYW5hZ2VzIGNvdW50ZG93biB0aW1lcnMgZm9yIHNhbGVzIG9yIHByb21vdGlvbmFsIGV2ZW50cyBvbiB5b3VyIHdlYnNpdGUuXHJcbiAqIEl0IGhhbmRsZXMgbXVsdGlwbGUgY291bnRkb3duIGVsZW1lbnRzLCB1cGRhdGVzIHRoZW0gaW4gcmVhbC10aW1lLCBhbmQgbWFuYWdlcyB2aXNpYmlsaXR5IGJhc2VkIG9uIHRoZSB2aWV3cG9ydC5cclxuICpcclxuICogLS0tXHJcbiAqXHJcbiAqICoqVXNhZ2U6KipcclxuICpcclxuICogKioxLiBDb25maWd1cmUgdGhlIENvdW50ZG93biAoT3B0aW9uYWwpOioqXHJcbiAqXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xyXG4gKiAgIC8vIE9wdGlvbmFsIHNldHRpbmdzXHJcbiAqICAgZGF0ZURhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkRhdGUnLCAgICAgICAvLyBEYXRhIGF0dHJpYnV0ZSBmb3IgY291bnRkb3duIGRhdGVcclxuICogICBpblZpZXdwb3J0RGF0YU5hbWU6ICdzYWxlQ291bnRkb3duSW5WaWV3cG9ydCcsIC8vIERhdGEgYXR0cmlidXRlIGZvciB2aWV3cG9ydCB2aXNpYmlsaXR5XHJcbiAqICAgc2VsZWN0b3JzOiB7IC4uLiB9LFxyXG4gKiAgIHRlbXBsYXRlOiAnLi4uJywgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3VzdG9tIEhUTUwgdGVtcGxhdGUgZm9yIHRoZSBjb3VudGRvd25cclxuICogICBoaWRlQ2xhc3M6ICdfaGlkZScsICAgICAgICAgICAgICAgICAgICAgIC8vIENsYXNzIHRvIGhpZGUgZWxlbWVudHNcclxuICogICBzYWxlRW5kQ2xhc3M6ICdfc2FsZUVuZGVkJywgICAgICAgICAgICAgIC8vIENsYXNzIHdoZW4gc2FsZSBlbmRzXHJcbiAqICAgYWN0aXZlQ2xhc3M6ICdfYWN0aXZlJywgICAgICAgICAgICAgICAgICAvLyBDbGFzcyB3aGVuIGNvdW50ZG93biBpcyBhY3RpdmVcclxuICogICB0cmFuc2xhdGlvbnM6IHtcclxuICogICAgIGVuZF9pbjogJ0VuZHMgaW4nLFxyXG4gKiAgICAgZGF5OiAnRGF5JyxcclxuICogICAgIGRheXM6ICdEYXlzJyxcclxuICogICAgIGhvdXI6ICdIb3VyJyxcclxuICogICAgIGhvdXJzOiAnSG91cnMnLFxyXG4gKiAgICAgbWludXRlOiAnTWludXRlJyxcclxuICogICAgIG1pbnV0ZXM6ICdNaW51dGVzJyxcclxuICogICAgIHNlY29uZDogJ1NlY29uZCcsXHJcbiAqICAgICBzZWNvbmRzOiAnU2Vjb25kcycsXHJcbiAqICAgfSxcclxuICogICB0eHRTYWxlQ291bnRkb3duSlNPTjogJ3sgXCJ0cmFuc2xhdGlvbnNcIjogeyAuLi4gfSB9JywgLy8gSlNPTiBzdHJpbmcgZm9yIHRyYW5zbGF0aW9uc1xyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqICoqMi4gQWRkIENvdW50ZG93biBFbGVtZW50czoqKlxyXG4gKlxyXG4gKiAtICoqT3B0aW9uIDE6KiogRGlyZWN0bHkgc3BlY2lmeSB0aGUgZGF0ZSB3aGVuIGFkZGluZyB0aGUgZWxlbWVudC5cclxuICpcclxuICogICBgYGBqYXZhc2NyaXB0XHJcbiAqICAgY29uc3QgJGVsID0gJCgnI2NvdW50ZG93bi1lbGVtZW50Jyk7XHJcbiAqICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XHJcbiAqICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsLCBkYXRlKTtcclxuICogICBgYGBcclxuICpcclxuICogLSAqKk9wdGlvbiAyOioqIFNldCBkYXRhIGF0dHJpYnV0ZXMgb24gdGhlIGVsZW1lbnQgYW5kIGFkZCBpdC5cclxuICpcclxuICogICBgYGBqYXZhc2NyaXB0XHJcbiAqICAgY29uc3QgJGVsID0gJCgnI2NvdW50ZG93bi1lbGVtZW50Jyk7XHJcbiAqICAgJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25EYXRlJywgJzIwMjMtMTItMzFUMjM6NTk6NTknKTtcclxuICogICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAnRW5kcyBpbicsIC4uLiB9KTtcclxuICogICBTYWxlQ291bnRkb3duLmFkZCgkZWwpO1xyXG4gKiAgIGBgYFxyXG4gKlxyXG4gKiAtLS1cclxuICpcclxuICogKipOb3RlczoqKlxyXG4gKlxyXG4gKiAtIFRoZSBjb3VudGRvd24gYXV0b21hdGljYWxseSB1cGRhdGVzIHZpc2libGUgZWxlbWVudHMgaW4gdGhlIHZpZXdwb3J0LlxyXG4gKiAtIFN1cHBvcnRzIGN1c3RvbWl6YXRpb24gdGhyb3VnaCBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGF0dHJpYnV0ZXMuXHJcbiAqIC0gSGFuZGxlcyBhdXRvbWF0aWMgc3RvcHBpbmcgd2hlbiBubyBlbGVtZW50cyByZW1haW4uXHJcbiAqXHJcbiAqIC0tLVxyXG4gKlxyXG4gKiAqKkV4YW1wbGU6KipcclxuICpcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiAvLyBJbml0aWFsaXplIGFuZCBjb25maWd1cmVcclxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xyXG4gKiAgIHRyYW5zbGF0aW9uczoge1xyXG4gKiAgICAgZW5kX2luOiAnU2FsZSBlbmRzIGluJyxcclxuICogICAgIC8vIE90aGVyIHRyYW5zbGF0aW9ucy4uLlxyXG4gKiAgIH0sXHJcbiAqIH0pO1xyXG4gKlxyXG4gKiAvLyBBZGQgY291bnRkb3duIGVsZW1lbnRcclxuICogY29uc3QgJGNvdW50ZG93biA9ICQoJyNjb3VudGRvd24nKTtcclxuICogY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XHJcbiAqIFNhbGVDb3VudGRvd24uYWRkKCRjb3VudGRvd24sIGVuZERhdGUpO1xyXG4gKiBgYGBcclxuICovXHJcblxyXG5jb25zdCBTYWxlQ291bnRkb3duID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsZWN0aW9uIG9mIGNvdW50ZG93biBlbGVtZW50c1xyXG4gICAgICogQHR5cGUge1NldDxFbGVtZW50Pn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnRzOiBuZXcgU2V0KCksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaW1lciBpbnRlcnZhbCBJRFxyXG4gICAgICogQHR5cGUge251bWJlcnxudWxsfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGltZXI6IG51bGwsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZVxyXG4gICAgICogQHR5cGUge0ludGVyc2VjdGlvbk9ic2VydmVyfG51bGx9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvYnNlcnZlcjogbnVsbCxcclxuXHJcbiAgICAvKipcclxuICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgY291bnRkb3duIGRhdGVcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICogQHByaXZhdGVcclxuICAgICovXHJcbiAgICBkYXRlRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duRGF0ZScsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5XHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgaW5WaWV3cG9ydERhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkluVmlld3BvcnQnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgdHJhbnNsYXRpb25zIEpTT05cclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdGlvbnNEYXRhTmFtZTogJ3NhbGVDb3VudGRvd25UcmFuc2xhdGlvbnMnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0b3JzIGZvciBjb3VudGRvd24gZWxlbWVudHNcclxuICAgICAqIEB0eXBlIHt7ZW5kTGFiZWw6IHN0cmluZywgZGF5OiBzdHJpbmcsIGRheVZhbHVlOiBzdHJpbmcsIGRheUxhYmVsOiBzdHJpbmcsIGhvdXI6IHN0cmluZywgaG91clZhbHVlOiBzdHJpbmcsIGhvdXJMYWJlbDogc3RyaW5nLCBtaW51dGU6IHN0cmluZywgbWludXRlVmFsdWU6IHN0cmluZywgbWludXRlTGFiZWw6IHN0cmluZywgc2Vjb25kOiBzdHJpbmcsIHNlY29uZFZhbHVlOiBzdHJpbmcsIHNlY29uZExhYmVsOiBzdHJpbmd9fVxyXG4gICAgICovXHJcbiAgICBzZWxlY3RvcnM6IHtcclxuICAgICAgICBlbmRMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWVuZC1sYWJlbF0nLFxyXG4gICAgICAgIGRheTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheV0nLFxyXG4gICAgICAgIGRheVZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF5LXZhbHVlXScsXHJcbiAgICAgICAgZGF5TGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktbGFiZWxdJyxcclxuICAgICAgICBob3VyOiAnW2RhdGEtc2FsZS1jb3VudGRvd24taG91cl0nLFxyXG4gICAgICAgIGhvdXJWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWhvdXItdmFsdWVdJyxcclxuICAgICAgICBob3VyTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLWxhYmVsXScsXHJcbiAgICAgICAgbWludXRlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlXScsXHJcbiAgICAgICAgbWludXRlVmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtdmFsdWVdJyxcclxuICAgICAgICBtaW51dGVMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS1sYWJlbF0nLFxyXG4gICAgICAgIHNlY29uZDogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZF0nLFxyXG4gICAgICAgIHNlY29uZFZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLXZhbHVlXScsXHJcbiAgICAgICAgc2Vjb25kTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtbGFiZWxdJyxcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZW1wbGF0ZSBmb3IgY291bnRkb3duIGVsZW1lbnRzXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWJhZGdlLXBlcmNlbnRcIj48L3VzZT48L3N2Zz48L2k+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfZW5kXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1lbmQtbGFiZWw+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX2RheVwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5PjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktbGFiZWw+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9ob3VyXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24taG91ci1sYWJlbD48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX21pbnV0ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtbGFiZWw+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9zZWNvbmRcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZD48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLWxhYmVsPjwvc3Bhbj48L3NwYW4+XHJcbiAgICBgLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xhc3MgbmFtZSB0byBoaWRlIGVsZW1lbnRzXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgaGlkZUNsYXNzOiAnX2hpZGUnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBzYWxlIGhhcyBlbmRlZFxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHNhbGVFbmRDbGFzczogJ19zYWxlRW5kZWQnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBhY3RpdmUgY291bnRkb3duXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYWN0aXZlQ2xhc3M6ICdfYWN0aXZlJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zbGF0aW9ucyBmb3IgY291bnRkb3duIGxhYmVsc1xyXG4gICAgICogQHR5cGUge3tlbmRfaW46IHN0cmluZywgZGF5OiBzdHJpbmcsIGRheXM6IHN0cmluZywgaG91cjogc3RyaW5nLCBob3Vyczogc3RyaW5nLCBtaW51dGU6IHN0cmluZywgbWludXRlczogc3RyaW5nLCBzZWNvbmQ6IHN0cmluZywgc2Vjb25kczogc3RyaW5nfX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgIGVuZF9pbjogJ0VuZCBpbicsXHJcbiAgICAgICAgZGF5OiAnRGF5JyxcclxuICAgICAgICBkYXlzOiAnRGF5cycsXHJcbiAgICAgICAgaG91cjogJ0hvdXInLFxyXG4gICAgICAgIGhvdXJzOiAnSG91cnMnLFxyXG4gICAgICAgIG1pbnV0ZTogJ01pbnV0ZScsXHJcbiAgICAgICAgbWludXRlczogJ01pbnV0ZXMnLFxyXG4gICAgICAgIHNlY29uZDogJ1NlY29uZCcsXHJcbiAgICAgICAgc2Vjb25kczogJ1NlY29uZHMnLFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZSB0aGUgY291bnRkb3duIHNldHRpbmdzXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZGF0ZURhdGFOYW1lIC0gRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgY291bnRkb3duIGRhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmluVmlld3BvcnREYXRhTmFtZSAtIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnNlbGVjdG9ycyAtIFNlbGVjdG9ycyBmb3IgY291bnRkb3duIGVsZW1lbnRzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZW5kTGFiZWxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlWYWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmRheUxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuaG91clxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJWYWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJMYWJlbFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZVZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMubWludXRlTGFiZWxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRWYWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLnNlY29uZExhYmVsXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50ZW1wbGF0ZSAtIFRlbXBsYXRlIGZvciBjb3VudGRvd24gZWxlbWVudHNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmhpZGVDbGFzcyAtIENsYXNzIG5hbWUgdG8gaGlkZSBlbGVtZW50c1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2FsZUVuZENsYXNzIC0gQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBzYWxlIGhhcyBlbmRlZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYWN0aXZlQ2xhc3MgLSBDbGFzcyBuYW1lIHRvIGluZGljYXRlIGFjdGl2ZSBjb3VudGRvd25cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnRyYW5zbGF0aW9ucyAtIFRyYW5zbGF0aW9ucyBmb3IgY291bnRkb3duIGxhYmVsc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmVuZF9pblxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmRheVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmRheXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5ob3VyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuaG91cnNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5taW51dGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5taW51dGVzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuc2Vjb25kXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuc2Vjb25kc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHh0U2FsZUNvdW50ZG93bkpTT04gLSBKU09OIHN0cmluZyBmb3IgdHJhbnNsYXRpb25zXHJcbiAgICAgKi9cclxuICAgIGNvbmZpZ3VyZSh7XHJcbiAgICAgICAgZGF0ZURhdGFOYW1lLFxyXG4gICAgICAgIGluVmlld3BvcnREYXRhTmFtZSxcclxuICAgICAgICBzZWxlY3RvcnMsXHJcbiAgICAgICAgdGVtcGxhdGUsXHJcbiAgICAgICAgaGlkZUNsYXNzLFxyXG4gICAgICAgIHNhbGVFbmRDbGFzcyxcclxuICAgICAgICBhY3RpdmVDbGFzcyxcclxuICAgICAgICB0cmFuc2xhdGlvbnMsXHJcbiAgICAgICAgdHh0U2FsZUNvdW50ZG93bkpTT04sXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICBpZiAoZGF0ZURhdGFOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZURhdGFOYW1lID0gZGF0ZURhdGFOYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluVmlld3BvcnREYXRhTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluVmlld3BvcnREYXRhTmFtZSA9IGluVmlld3BvcnREYXRhTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RvcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RvcnMgPSB7IC4uLnRoaXMuc2VsZWN0b3JzLCAuLi5zZWxlY3RvcnMgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGlkZUNsYXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUNsYXNzID0gaGlkZUNsYXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNhbGVFbmRDbGFzcykge1xyXG4gICAgICAgICAgICB0aGlzLnNhbGVFbmRDbGFzcyA9IHNhbGVFbmRDbGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVDbGFzcykge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNsYXNzID0gYWN0aXZlQ2xhc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zID0geyAuLi50aGlzLnRyYW5zbGF0aW9ucywgLi4udHJhbnNsYXRpb25zIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHh0U2FsZUNvdW50ZG93bkpTT04pIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHR4dFNhbGVDb3VudGRvd25KU09OKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zID0gT2JqZWN0LmtleXMoanNvbi50cmFuc2xhdGlvbnMpLnJlZHVjZSgoX3RyYW5zLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG9ydEtleSA9IGtleS5zcGxpdCgnLicpLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICAgICAgICAgIF90cmFuc1tzaG9ydEtleV0gPSBqc29uLnRyYW5zbGF0aW9uc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHJhbnM7XHJcbiAgICAgICAgICAgICAgICB9LCB7fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi50cmFucyB9O1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCB0aGUgZWxlbWVudCAmIGNvcnJlc3BvbmRpbmcgZGF0ZSB0byB0aGUgY291bnRkb3duIGNvbGxlY3Rpb25cclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcclxuICAgICAqIEBwYXJhbSB7RGF0ZXxudWxsfSBkYXRlIC0gVGhlIGNvdW50ZG93biBkYXRlLiBJZiBub3QgcHJvdmlkZWQsIGl0IHdpbGwgYmUgZXh0cmFjdGVkIGZyb20gdGhlIGRhdGEgYXR0cmlidXRlIGBkYXRhLXNhbGUtY291bnRkb3duLWRhdGVgXHJcbiAgICAgKi9cclxuICAgIGFkZCgkZWwsIGRhdGUgPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkRGF0ZSA9IGRhdGUgfHwgJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUpO1xyXG4gICAgICAgIGlmICh2YWxpZERhdGUgJiYgdHlwZW9mIHZhbGlkRGF0ZSA9PT0gJ3N0cmluZycpIHZhbGlkRGF0ZSA9IHBhcnNlQ291bnRkb3duRGF0ZSh2YWxpZERhdGUpO1xyXG4gICAgICAgIGlmICghdmFsaWREYXRlKSByZXR1cm47XHJcbiAgICAgICAgJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUsIHZhbGlkRGF0ZSkuaHRtbCh0aGlzLnRlbXBsYXRlKVxyXG4gICAgICAgICAgICAuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLmVsZW1lbnRzLmFkZChlbCkpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZSgkZWwpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZlIHRoZSBlbGVtZW50IGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5IGNoZWNrXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvYnNlcnZlKCRlbCkge1xyXG4gICAgICAgIGlmICghd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIC8vIGFzc3VtZSBlbGVtZW50IGlzIGluIHZpZXdwb3J0IGlmIEludGVyc2VjdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICAgICAgJGVsLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2UgaWYgbm90IGFscmVhZHkgY3JlYXRlZFxyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVudHJ5LnRhcmdldCkuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSwgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0ludGVyc2VjdGluZycsIGVudHJ5LnRhcmdldCwgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJvb3Q6IG51bGwsIC8vIERlZmF1bHRzIHRvIHZpZXdwb3J0XHJcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAsIC8vIENhbGxiYWNrIGlzIHRyaWdnZXJlZCB3aGVuIGFueSBwYXJ0IG9mIHRoZSBlbGVtZW50IGlzIHZpc2libGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkZWwuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLm9ic2VydmVyLm9ic2VydmUoZWwpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIG9ic2VydmluZyB0aGUgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdW5vYnNlcnZlKGVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci51bm9ic2VydmUoZWwpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndW5vYnNlcnZlJywgZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyBpbiB2aWV3cG9ydCBhbmQgdmlzaWJsZVxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpc1Zpc2libGVJblZpZXdwb3J0KCRlbCkge1xyXG4gICAgICAgIHJldHVybiAkZWwuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSkgJiYgJGVsLmlzKCc6dmlzaWJsZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIHN0YXJ0IHJ1bm5pbmcgY291bnRkb3duIGV2ZXJ5IHNlY29uZFxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGltZXIgJiYgdGhpcy5lbGVtZW50cy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5ydW4oKSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIHN0b3AgY291bnRkb3duXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKi9cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RvcCBjb3VudGRvd24nKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBydW5uaW5nIGNvdW50ZG93biBwcm9jZXNzXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgLy8gY2hlY2sgYW5kIHN0b3AgaWYgZWxlbWVudCBubyBsb25nZXIgZXhpc3RzIGluIERPTVxyXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoZWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmRlbGV0ZShlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVub2JzZXJ2ZShlbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBjb3VudGRvd24gaWYgZWxlbWVudCBpcyBub3QgaW4gdmlld3BvcnQgb3Igbm90IHZpc2libGVcclxuICAgICAgICAgICAgaWYgKCFkYXRlIHx8ICF0aGlzLmlzVmlzaWJsZUluVmlld3BvcnQoJGVsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGUgPD0gbm93KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDb3VudCBkb3duIGRhdGUgaGFzIHBhc3NlZFxyXG4gICAgICAgICAgICAgICAgJGVsLmFkZENsYXNzKHRoaXMuc2FsZUVuZENsYXNzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlKGVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5vYnNlcnZlKGVsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSByZW1haW5pbmcgdGltZSAoZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBkYXRlIC0gbm93O1xyXG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGVuZExhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZW5kTGFiZWwpO1xyXG4gICAgICAgICAgICBjb25zdCAkZGF5ID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5KTtcclxuICAgICAgICAgICAgY29uc3QgJGRheVZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5VmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCAkZGF5TGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5kYXlMYWJlbCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRob3VyID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91cik7XHJcbiAgICAgICAgICAgIGNvbnN0ICRob3VyVmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5ob3VyVmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCAkaG91ckxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91ckxhYmVsKTtcclxuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtaW51dGVWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZVZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZUxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMubWludXRlTGFiZWwpO1xyXG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kKTtcclxuICAgICAgICAgICAgY29uc3QgJHNlY29uZFZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kVmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5zZWNvbmRMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi4kZWwuZGF0YSh0aGlzLnRyYW5zbGF0aW9uc0RhdGFOYW1lKSB9O1xyXG5cclxuICAgICAgICAgICAgJGVsLmFkZENsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICAkZW5kTGFiZWwuaHRtbCh0cmFuc2xhdGlvbnMuZW5kX2luKTtcclxuICAgICAgICAgICAgJGRheVZhbHVlLnRleHQoZGF5cyk7XHJcbiAgICAgICAgICAgICRkYXlMYWJlbC5odG1sKGRheXMgPT09IDEgPyB0cmFuc2xhdGlvbnMuZGF5IDogdHJhbnNsYXRpb25zLmRheXMpO1xyXG4gICAgICAgICAgICAkZGF5LnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwKTtcclxuICAgICAgICAgICAgJGhvdXJWYWx1ZS50ZXh0KGhvdXJzKTtcclxuICAgICAgICAgICAgJGhvdXJMYWJlbC5odG1sKGhvdXJzID09PSAxID8gdHJhbnNsYXRpb25zLmhvdXIgOiB0cmFuc2xhdGlvbnMuaG91cnMpO1xyXG4gICAgICAgICAgICAkaG91ci50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCk7XHJcbiAgICAgICAgICAgICRtaW51dGVWYWx1ZS50ZXh0KG1pbnV0ZXMpO1xyXG4gICAgICAgICAgICAkbWludXRlTGFiZWwuaHRtbChtaW51dGVzID09PSAxID8gdHJhbnNsYXRpb25zLm1pbnV0ZSA6IHRyYW5zbGF0aW9ucy5taW51dGVzKTtcclxuICAgICAgICAgICAgJG1pbnV0ZS50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwKTtcclxuICAgICAgICAgICAgJHNlY29uZFZhbHVlLnRleHQoc2Vjb25kcyk7XHJcbiAgICAgICAgICAgICRzZWNvbmRMYWJlbC5odG1sKHNlY29uZHMgPT09IDEgPyB0cmFuc2xhdGlvbnMuc2Vjb25kIDogdHJhbnNsYXRpb25zLnNlY29uZHMpO1xyXG4gICAgICAgICAgICAkc2Vjb25kLnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwICYmIGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGVDb3VudGRvd247XHJcbiIsImV4cG9ydCBjb25zdCBhcmlhS2V5Q29kZXMgPSB7XHJcbiAgICBSRVRVUk46IDEzLFxyXG4gICAgU1BBQ0U6IDMyLFxyXG4gICAgTEVGVDogMzcsXHJcbiAgICBVUDogMzgsXHJcbiAgICBSSUdIVDogMzksXHJcbiAgICBET1dOOiA0MCxcclxufTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpbml0UmFkaW9PcHRpb25zIH0gZnJvbSAnLi9yYWRpb09wdGlvbnMnO1xyXG4iLCJpbXBvcnQgeyBhcmlhS2V5Q29kZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBzZXRDaGVja2VkUmFkaW9JdGVtID0gKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4KSA9PiB7XHJcbiAgICBpdGVtQ29sbGVjdGlvbi5lYWNoKChpZHgsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCAkaXRlbSA9ICQoaXRlbSk7XHJcbiAgICAgICAgaWYgKGlkeCAhPT0gaXRlbUlkeCkge1xyXG4gICAgICAgICAgICAkaXRlbS5hdHRyKCdhcmlhLWNoZWNrZWQnLCBmYWxzZSkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgdHJ1ZSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgJGl0ZW0udHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbiA9IChsYXN0SXRlbUlkeCwgY3VycmVudElkeCkgPT4ge1xyXG4gICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICBjYXNlIGN1cnJlbnRJZHggPiBsYXN0SXRlbUlkeDogcmV0dXJuIDA7XHJcbiAgICBjYXNlIGN1cnJlbnRJZHggPCAwOiByZXR1cm4gbGFzdEl0ZW1JZHg7XHJcbiAgICBkZWZhdWx0OiByZXR1cm4gY3VycmVudElkeDtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUl0ZW1LZXlEb3duID0gaXRlbUNvbGxlY3Rpb24gPT4gZSA9PiB7XHJcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGU7XHJcbiAgICBjb25zdCBpdGVtSWR4ID0gaXRlbUNvbGxlY3Rpb24uaW5kZXgoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgIGNvbnN0IGxhc3RDb2xsZWN0aW9uSXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgaWYgKE9iamVjdC52YWx1ZXMoYXJpYUtleUNvZGVzKS5pbmNsdWRlcyhrZXlDb2RlKSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xyXG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuTEVGVDpcclxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlVQOiB7XHJcbiAgICAgICAgY29uc3QgcHJldkl0ZW1JZHggPSBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24obGFzdENvbGxlY3Rpb25JdGVtSWR4LCBpdGVtSWR4IC0gMSk7XHJcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZ2V0KHByZXZJdGVtSWR4KS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggLSAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlJJR0hUOlxyXG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuRE9XTjoge1xyXG4gICAgICAgIGNvbnN0IG5leHRJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCArIDEpO1xyXG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChuZXh0SXRlbUlkeCkudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4ICsgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoJGNvbnRhaW5lciwgaXRlbVNlbGVjdG9yKSA9PiB7XHJcbiAgICBjb25zdCAkaXRlbUNvbGxlY3Rpb24gPSAkY29udGFpbmVyLmZpbmQoaXRlbVNlbGVjdG9yKTtcclxuXHJcbiAgICAkY29udGFpbmVyLm9uKCdrZXlkb3duJywgaXRlbVNlbGVjdG9yLCBoYW5kbGVJdGVtS2V5RG93bigkaXRlbUNvbGxlY3Rpb24pKTtcclxufTtcclxuIiwiLy8gaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4uL3dpc2hsaXN0JzsgLy8gcGFwYXRoZW1lcy1ldmV2YTogZGlzYWJsZWRcclxuaW1wb3J0IHsgaW5pdFJhZGlvT3B0aW9ucyB9IGZyb20gJy4vYXJpYSc7XHJcblxyXG5jb25zdCBvcHRpb25zVHlwZXNNYXAgPSB7XHJcbiAgICBJTlBVVF9GSUxFOiAnaW5wdXQtZmlsZScsXHJcbiAgICBJTlBVVF9URVhUOiAnaW5wdXQtdGV4dCcsXHJcbiAgICBJTlBVVF9OVU1CRVI6ICdpbnB1dC1udW1iZXInLFxyXG4gICAgSU5QVVRfQ0hFQ0tCT1g6ICdpbnB1dC1jaGVja2JveCcsXHJcbiAgICBURVhUQVJFQTogJ3RleHRhcmVhJyxcclxuICAgIERBVEU6ICdkYXRlJyxcclxuICAgIFNFVF9TRUxFQ1Q6ICdzZXQtc2VsZWN0JyxcclxuICAgIFNFVF9SRUNUQU5HTEU6ICdzZXQtcmVjdGFuZ2xlJyxcclxuICAgIFNFVF9SQURJTzogJ3NldC1yYWRpbycsXHJcbiAgICBTV0FUQ0g6ICdzd2F0Y2gnLFxyXG4gICAgUFJPRFVDVF9MSVNUOiAncHJvZHVjdC1saXN0JyxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25DaGFuZ2VEZWNvcmF0b3IoYXJlRGVmYXVsdE9wdGlvbnNTZXQpIHtcclxuICAgIHJldHVybiAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgIGlmIChhcmVEZWZhdWx0T3B0aW9uc1NldCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsc0Jhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcclxuICAgICAgICAvLyBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7IC8vIHBhcGF0aGVtZXMtZXZldmE6IGRpc2FibGVkXHJcbiAgICAgICAgdGhpcy5nZXRUYWJSZXF1ZXN0cygpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKS5lYWNoKChfXywgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YWx1ZSwgdHlwZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUodmFyaWFudERvbU5vZGUsIHZhcmlhbnRUeXBlKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YXJpYW50VHlwZSkge1xyXG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNFVF9SQURJTzpcclxuICAgICAgICBjYXNlIG9wdGlvbnNUeXBlc01hcC5TV0FUQ0g6IHtcclxuICAgICAgICAgICAgaW5pdFJhZGlvT3B0aW9ucygkKHZhcmlhbnREb21Ob2RlKSwgJ1t0eXBlPXJhZGlvXScpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHJhZGlvIGJ1dHRvbnMgdG8gZ2V0IGRlc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgaW5pdFJhZGlvQXR0cmlidXRlcygpIHtcclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIHJhZGlvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRyYWRpbyA9ICQocmFkaW8pO1xyXG5cclxuICAgICAgICAgICAgLy8gT25seSBiaW5kIHRvIGNsaWNrIG9uY2VcclxuICAgICAgICAgICAgaWYgKCRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgJHJhZGlvLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHJhZGlvLmRhdGEoJ3N0YXRlJykgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJywgJHJhZGlvLnByb3AoJ2NoZWNrZWQnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcclxuICAgICAqL1xyXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XHJcbiAgICAgICAgY29uc3QgaW5TdG9ja0lkcyA9IGRhdGEuaW5fc3RvY2tfYXR0cmlidXRlcztcclxuICAgICAgICBjb25zdCBvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UgPSB0aGlzLmNvbnRleHQub3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlO1xyXG4gICAgICAgIGxldCBvdXRPZlN0b2NrTWVzc2FnZSA9IGRhdGEub3V0X29mX3N0b2NrX21lc3NhZ2U7XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtvdXRPZlN0b2NrTWVzc2FnZX0pYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7b3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlfSlgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRySWQgPSBwYXJzZUludCgkYXR0cmlidXRlLmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZScpLCAxMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBmb3IgZnJhZ21lbnQgaWRlbnRpZmllciBpbiBVUkwgcmVxdWVzdGluZyBhIHNwZWNpZmljIHRhYlxyXG4gICAgICovXHJcbiAgICBnZXRUYWJSZXF1ZXN0cygpIHtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3RhYi0nKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJCgnLnRhYnMnKS5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YWJDb250ZW50ID0gJChgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkYWN0aXZlVGFiLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICRhY3RpdmVUYWIuZmluZCgnLnRhYicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYClcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICR0YWJDb250ZW50LmFkZENsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpbmNlICRwcm9kdWN0VmlldyBjYW4gYmUgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgdXNpbmcgcmVuZGVyX3dpdGgsXHJcbiAgICAgKiBXZSBoYXZlIHRvIHJldHJpZXZlIHRoZSByZXNwZWN0aXZlIGVsZW1lbnRzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICRzY29wZVxyXG4gICAgICovXHJcbiAgICBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkYWRkVG9DYXJ0Rm9ybTogJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJHdpc2hsaXN0VmFyaWF0aW9uOiAkKCdbZGF0YS13aXNobGlzdC1hZGRdIFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgc3RvY2s6IHtcclxuICAgICAgICAgICAgICAgICRjb250YWluZXI6ICQoJy5mb3JtLWZpZWxkLS1zdG9jaycsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tkYXRhLXByb2R1Y3Qtc3RvY2tdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2t1OiB7XHJcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnNrdS1sYWJlbCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwYzoge1xyXG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC51cGMtbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBxdWFudGl0eToge1xyXG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXHJcbiAgICAgICAgICAgICR3YWxsZXRCdXR0b25zOiAkKCdbZGF0YS1hZGQtdG8tY2FydC13YWxsZXQtYnV0dG9uc10nLCAkc2NvcGUpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIHRoZSBwcmljaW5nIGVsZW1lbnRzIHRoYXQgd2lsbCBzaG93IHVwIG9ubHkgd2hlbiB0aGUgcHJpY2UgZXhpc3RzIGluIEFQSVxyXG4gICAgICogQHBhcmFtIHZpZXdNb2RlbFxyXG4gICAgICovXHJcbiAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcclxuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVWaWV3KGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gIWRhdGEuaW5zdG9ja1xyXG4gICAgICAgICAgICA/IChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZSB8fCB0aGlzLmNvbnRleHQub3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlKVxyXG4gICAgICAgICAgICA6IChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5wcmljZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLndlaWdodCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdlaWdodC5odG1sKGRhdGEud2VpZ2h0LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgdmFyaWF0aW9uX2lkIGlmIGl0IGV4aXN0cyBmb3IgYWRkaW5nIHRvIHdpc2hsaXN0XHJcbiAgICAgICAgaWYgKGRhdGEudmFyaWFudElkKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcclxuICAgICAgICBpZiAoZGF0YS5za3UpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dChkYXRhLnNrdSk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmIChkYXRhLnVwYykge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KGRhdGEudXBjKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dCgnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBzdG9jayB2aWV3IGlzIG9uIChDUCBzZXR0aW5ncylcclxuICAgICAgICBpZiAodmlld01vZGVsLnN0b2NrLiRjb250YWluZXIubGVuZ3RoICYmIHR5cGVvZiBkYXRhLnN0b2NrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RvY2sgY29udGFpbmVyIGlzIGhpZGRlbiwgc2hvd1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xyXG5cclxuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXYWxsZXRCdXR0b25zVmlldyhkYXRhKTtcclxuXHJcbiAgICAgICAgLy8gSWYgQnVsayBQcmljaW5nIHJlbmRlcmVkIEhUTUwgaXMgYXZhaWxhYmxlXHJcbiAgICAgICAgaWYgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcyAmJiBjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKCcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFRvQ2FydFdyYXBwZXIgPSAkKCcjYWRkLXRvLWNhcnQtd3JhcHBlcicpO1xyXG5cclxuICAgICAgICBpZiAoYWRkVG9DYXJ0V3JhcHBlci5pcygnOmhpZGRlbicpICYmIGRhdGEucHVyY2hhc2FibGUpIHtcclxuICAgICAgICAgICAgYWRkVG9DYXJ0V3JhcHBlci5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cclxuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRoX3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aF90YXguZm9ybWF0dGVkfWBcclxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aF90YXguZm9ybWF0dGVkO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJHNwYW4uaHRtbCh1cGRhdGVkUHJpY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cclxuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRob3V0X3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aG91dF90YXguZm9ybWF0dGVkfWBcclxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJHNwYW4uaHRtbCh1cGRhdGVkUHJpY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBhbiBtZXNzYWdlIGJveCBpZiBhIG1lc3NhZ2UgaXMgcGFzc2VkXHJcbiAgICAgKiBIaWRlIHRoZSBib3ggaWYgdGhlIG1lc3NhZ2UgaXMgZW1wdHlcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBzaG93TWVzc2FnZUJveChtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpO1xyXG5cclxuICAgICAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xyXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3KGRhdGEpIHtcclxuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZEZvcm0gPSB2aWV3TW9kZWwuJGFkZFRvQ2FydEZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkoaXNWYWxpZEZvcm0gJiYgZGF0YS5wdXJjaGFzYWJsZSAmJiBkYXRhLmluc3RvY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KHNob3VsZFNob3cpIHtcclxuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XHJcblxyXG4gICAgICAgIGlmIChzaG91bGRTaG93KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLiR3YWxsZXRCdXR0b25zLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xyXG5cclxuICAgICAgICByZXR1cm4gJHBhcmVudCA/ICRwYXJlbnQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZScpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIGlzIHRoZSBzZWxlY3RlZCBvcHRpb24gaW4gYSBzZWxlY3QgZHJvcGRvd24sIHNlbGVjdCB0aGUgZmlyc3Qgb3B0aW9uIChNRVJDLTYzOSlcclxuICAgICAgICAgICAgaWYgKCRzZWxlY3QudmFsKCkgPT09ICRhdHRyaWJ1dGUuYXR0cigndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsc0Jhc2UsIHsgb3B0aW9uQ2hhbmdlRGVjb3JhdG9yIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtYmFzZSc7XHJcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xyXG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XHJcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSAnLi4vLi4vcGFwYXRoZW1lcy9leWV2YS9pbWFnZS1nYWxsZXJ5JzsgLy8gcGFwYXRoZW1lcy1leWV2YSBlZGl0ZWRcclxuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBhbGVydE1vZGFsLCBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCB7IGlzRW1wdHksIGlzUGxhaW5PYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUZvcm1EYXRhIH0gZnJvbSAnLi91dGlscy9hcGknO1xyXG5pbXBvcnQgeyBpc0Jyb3dzZXJJRSwgY29udmVydEludG9BcnJheSB9IGZyb20gJy4vdXRpbHMvaWUtaGVscGVycyc7XHJcbmltcG9ydCBiYW5uZXJVdGlscyBmcm9tICcuL3V0aWxzL2Jhbm5lci11dGlscyc7XHJcbmltcG9ydCBjdXJyZW5jeVNlbGVjdG9yIGZyb20gJy4uL2dsb2JhbC9jdXJyZW5jeS1zZWxlY3Rvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoJHNjb3BlLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdIC5sb2FkaW5nT3ZlcmxheScpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5ID0gbmV3IEltYWdlR2FsbGVyeSgkKCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScsIHRoaXMuJHNjb3BlKSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuUXVhbnRpdHlDaGFuZ2UoKTtcclxuICAgICAgICB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlID0gJCgnLnN3YXRjaC1vcHRpb24tbWVzc2FnZScpO1xyXG4gICAgICAgIHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlID0ge307XHJcbiAgICAgICAgdGhpcy5zd2F0Y2hHcm91cElkTGlzdCA9ICQoJ1tpZF49XCJzd2F0Y2hHcm91cFwiXScpLm1hcCgoXywgZ3JvdXApID0+ICQoZ3JvdXApLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVNlbGVjdG9yKCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKTtcclxuXHJcbiAgICAgICAgaWYgKCRmb3JtWzBdLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICRmb3JtLmZpbmQoJ2lucHV0I2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdFN3YXRjaEdyb3VwID0gJCgnW2lkKj1cImF0dHJpYnV0ZV9zd2F0Y2hcIl0nLCAkZm9ybSk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RTd2F0Y2hMYWJlbHMgPSAkKCcuZm9ybS1vcHRpb24tc3dhdGNoJywgJGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IHBsYWNlU3dhdGNoTGFiZWxJbWFnZSA9IChfLCBsYWJlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uSW1hZ2UgPSAkKCcuZm9ybS1vcHRpb24tZXhwYW5kZWQnLCAkKGxhYmVsKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkltYWdlV2lkdGggPSAkb3B0aW9uSW1hZ2Uub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCA9IDU1O1xyXG4gICAgICAgICAgICBjb25zdCB7IHJpZ2h0IH0gPSBsYWJlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIgPSB3aW5kb3cuc2NyZWVuLndpZHRoIC0gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0VmFsdWUgPSBvcHRpb25JbWFnZVdpZHRoIC0gZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIgPCAob3B0aW9uSW1hZ2VXaWR0aCArIGV4dGVuZGVkT3B0aW9uSW1hZ2VPZmZzZXRMZWZ0KSkge1xyXG4gICAgICAgICAgICAgICAgJG9wdGlvbkltYWdlLmNzcygnbGVmdCcsIGAke3NoaWZ0VmFsdWUgPiAwID8gLXNoaWZ0VmFsdWUgOiBzaGlmdFZhbHVlfXB4YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRUb0NhcnRWYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaExhYmVscywgcGxhY2VTd2F0Y2hMYWJlbEltYWdlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQuc2hvd1N3YXRjaE5hbWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHN3YXRjaE9wdGlvbk1lc3NhZ2UucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICAkcHJvZHVjdFN3YXRjaEdyb3VwLm9uKCdjaGFuZ2UnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoR3JvdXBFbGVtZW50ID0gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTd2F0Y2hOYW1lT25PcHRpb24oJCh0YXJnZXQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaEdyb3VwLCAoXywgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoR3JvdXBFbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuaXMoJzpjaGVja2VkJykpIHRoaXMuc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkKGVsZW1lbnQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRmb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCAkZm9ybVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHByb2R1Y3QgYXR0cmlidXRlcy4gQWxzbyB1cGRhdGUgdGhlIGluaXRpYWwgdmlldyBpbiBjYXNlIGl0ZW1zIGFyZSBvb3NcclxuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XHJcbiAgICAgICAgaWYgKChpc0VtcHR5KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSkgfHwgaGFzRGVmYXVsdE9wdGlvbnMpICYmIGhhc09wdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlQ2FsbGJhY2sgPSBvcHRpb25DaGFuZ2VEZWNvcmF0b3IuY2FsbCh0aGlzLCBoYXNEZWZhdWx0T3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKCRwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIG9wdGlvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICBiYW5uZXJVdGlscy5kaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudChwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5zaG93KCk7XHJcblxyXG4gICAgICAgIHRoaXMucHJldmlld01vZGFsID0gbW9kYWxGYWN0b3J5KCcjcHJldmlld01vZGFsJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJBZGRUb0NhcnRWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLmFkZChbe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gPiAuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLFxyXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLm51bWJlcnNPbmx5KHZhbCk7XHJcbiAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5wcm9kdWN0UXVhbnRpdHlFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5zd2F0Y2hHcm91cElkTGlzdC5sZW5ndGggJiYgaXNFbXB0eSh0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zd2F0Y2hHcm91cElkTGlzdC5lYWNoKChfLCBzd2F0Y2hHcm91cElkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW3N3YXRjaEdyb3VwSWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2Vbc3dhdGNoR3JvdXBJZF0gPSAkKGAjJHtzd2F0Y2hHcm91cElkfSB+IC5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2VgKS50ZXh0KCkudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQoKSB7XHJcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGV4dGFyZWEnICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFudHNsaXN0ID0gY29udmVydEludG9BcnJheSh2YWx1ZS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQgPSBpbnB0ID0+IGlucHQuZGF0YXNldC5wcm9kdWN0QXR0cmlidXRlVmFsdWUgPT09IGNoZWNrZWQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0KVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuY2hpbGRyZW5bMF0gOiBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJykgOiAndW5zYXRpc2ZpZWQnO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcucHJvZHVjdFZpZXcnKTtcclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3RWYXJpYW50KSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50ID0gcHJvZHVjdFZhcmlhbnQgPT09ICd1bnNhdGlzZmllZCcgPyAnJyA6IHByb2R1Y3RWYXJpYW50O1xyXG4gICAgICAgICAgICBpZiAodmlldy5hdHRyKCdkYXRhLWV2ZW50LXR5cGUnKSkge1xyXG4gICAgICAgICAgICAgICAgdmlldy5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlldy5maW5kKCcucHJvZHVjdFZpZXctdGl0bGUnKVswXS5pbm5lclRleHQucmVwbGFjZSgvXCIvZywgJ1xcXFwkJicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9ICQoYFtkYXRhLW5hbWU9XCIke3Byb2R1Y3ROYW1lfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgY2FyZC5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB3aW5kb3cgaXMgYmVpbmcgcnVuIGluc2lkZSBhbiBpZnJhbWVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBpc1J1bm5pbmdJbklmcmFtZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogSGFuZGxlIHByb2R1Y3Qgb3B0aW9ucyBjaGFuZ2VzXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XHJcblxyXG4gICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcclxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSwgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50KTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcclxuICAgICAgICAgICAgYmFubmVyVXRpbHMuZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGZvcm0pKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGV4dCA9ICRmb3JtLnBhcmVudHMoJy5wcm9kdWN0VmlldycpLmZpbmQoJy5wcm9kdWN0Vmlldy1pbmZvJyk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbEZhY3RvcnkoJ1tkYXRhLXJldmVhbF0nLCB7ICRjb250ZXh0IH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb25Qcm9kdWN0T3B0aW9uc0NoYW5nZWQnLCB7XHJcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlmIHRoaXMgc2V0dGluZyBpcyBlbmFibGVkIGluIFBhZ2UgQnVpbGRlclxyXG4gICAgICogc2hvdyBuYW1lIGZvciBzd2F0Y2ggb3B0aW9uXHJcbiAgICAgKi9cclxuICAgIHNob3dTd2F0Y2hOYW1lT25PcHRpb24oJHN3YXRjaCwgJHN3YXRjaEdyb3VwKSB7XHJcbiAgICAgICAgY29uc3Qgc3dhdGNoTmFtZSA9ICRzd2F0Y2guYXR0cignYXJpYS1sYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVN3YXRjaEdyb3VwSWQgPSAkc3dhdGNoR3JvdXAuYXR0cignYXJpYS1sYWJlbGxlZGJ5Jyk7XHJcbiAgICAgICAgY29uc3QgJHN3YXRjaE9wdGlvbk1lc3NhZ2UgPSAkKGAjJHthY3RpdmVTd2F0Y2hHcm91cElkfSB+IC5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2VgKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtb3B0aW9uLXZhbHVlXScsICRzd2F0Y2hHcm91cCkudGV4dChzd2F0Y2hOYW1lKTtcclxuICAgICAgICAkc3dhdGNoT3B0aW9uTWVzc2FnZS50ZXh0KGAke3RoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW2FjdGl2ZVN3YXRjaEdyb3VwSWRdfSAke3N3YXRjaE5hbWV9YCk7XHJcbiAgICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkc3dhdGNoT3B0aW9uTWVzc2FnZSwgJ3N0YXR1cycsICdhc3NlcnRpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XHJcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XHJcbiAgICAgICAgICAgIHJvbGU6IHJvbGVUeXBlLFxyXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuICEhJGVsZW1lbnQucGFyZW50cygnLnF1aWNrVmlldycpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QoaW1hZ2UpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcclxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC56b29tU2l6ZSB9LFxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggem9vbSBzaXplIHVzZWQgZm9yIGRhdGEtem9vbS1pbWFnZSBpblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXHJcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQucHJvZHVjdFNpemUgfSxcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIGZhbGxiYWNrIGltYWdlIHNpemUgdXNlZCBmb3IgdGhlIG1haW4gcHJvZHVjdCBpbWFnZSBpblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoaW1hZ2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5zZXRBbHRlcm5hdGVJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnJlc3RvcmVJbWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBIYW5kbGUgYWN0aW9uIHdoZW4gdGhlIHNob3BwZXIgY2xpY2tzIG9uICsgLyAtIGZvciBxdWFudGl0eVxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgbGlzdGVuUXVhbnRpdHlDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NsaWNrJywgJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gYnV0dG9uJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xyXG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0O1xyXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWF4ID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBxdHkgPSBmb3Jtcy5udW1iZXJzT25seSgkaW5wdXQudmFsKCkpID8gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCkgOiBxdWFudGl0eU1pbjtcclxuICAgICAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xyXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcclxuICAgICAgICAgICAgICAgIHF0eSA9IGZvcm1zLnZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkocXR5LCBxdWFudGl0eU1heCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcXR5ID0gZm9ybXMudmFsaWRhdGVEZWNyZWFzZUFnYWluc3RNaW5Cb3VuZGFyeShxdHksIHF1YW50aXR5TWluKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiBpbnB1dFxyXG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0LnZhbChxdHkpO1xyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGV4dFxyXG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJHRleHQudGV4dChxdHkpO1xyXG4gICAgICAgICAgICAvLyBwZXJmb3JtIHZhbGlkYXRpb24gYWZ0ZXIgdXBkYXRpbmcgcHJvZHVjdCBxdWFudGl0eVxyXG4gICAgICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgdHJpZ2dlcmluZyBxdWFudGl0eSBjaGFuZ2Ugd2hlbiBwcmVzc2luZyBlbnRlclxyXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdrZXlwcmVzcycsICcuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIGV2ZW50LndoaWNoLCB0aGVuIHVzZSBldmVudC53aGljaCwgb3RoZXJ3aXNlIHVzZSBldmVudC5rZXlDb2RlXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRzY29wZS5vbigna2V5dXAnLCAnLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEFkZCBhIHByb2R1Y3QgdG8gY2FydFxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xyXG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRCdG4gPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJChldmVudC50YXJnZXQpKTtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XHJcbiAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkYWRkVG9DYXJ0QnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICRhZGRUb0NhcnRCdG5cclxuICAgICAgICAgICAgLnZhbCh3YWl0TWVzc2FnZSlcclxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG5cclxuICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XHJcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChub3JtYWxpemVGb3JtRGF0YShuZXcgRm9ybURhdGEoZm9ybSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW5jeVNlbGVjdG9yKHJlc3BvbnNlLmRhdGEuY2FydF9pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xyXG5cclxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxyXG4gICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcclxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gR3VhcmQgc3RhdGVtZW50XHJcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRhZGRUb0NhcnRCdG4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRNb2RhbCgpLiRwcmVNb2RhbEZvY3VzZWRFbCA9ICRhZGRUb0NhcnRCdG47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gT3BlbiBwcmV2aWV3IG1vZGFsIGFuZCB1cGRhdGUgY29udGVudFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aWV3TW9kYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLm9wZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5hZGRDbGFzcygnYXBwbGUtcGF5LXN1cHBvcnRlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGFkZFRvQ2FydEJ0bikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkYWRkVG9DYXJ0QnRuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydENvbnRlbnQodGhpcy5wcmV2aWV3TW9kYWwsIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gbW9kYWwsIHJlZGlyZWN0IHRvIHRoZSBjYXJ0IHBhZ2VcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbyhyZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5jYXJ0X3VybCB8fCB0aGlzLmNvbnRleHQudXJscy5jYXJ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRhZGRUb0NhcnRCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNhcnQgY29udGVudHNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L3ByZXZpZXcnLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgY2FydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWRpcmVjdCB0byB1cmxcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXHJcbiAgICAgKi9cclxuICAgIHJlZGlyZWN0VG8odXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xyXG4gICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gdXJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgY2FydCBjb250ZW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNb2RhbH0gbW9kYWxcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXJ0SXRlbUlkXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUNhcnRDb250ZW50KG1vZGFsLCBjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxyXG4gICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICAgICAgY29uc3QgJGNhcnRRdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgbW9kYWwuJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcclxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkY2FydFF1YW50aXR5LmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcm9tb3Rpb25CYW5uZXIgPSAkKCdbZGF0YS1wcm9tb3Rpb24tYmFubmVyXScpO1xyXG4gICAgICAgICAgICBjb25zdCAkYmFja1RvU2hvcHBwaW5nQnRuID0gJCgnLnByZXZpZXdDYXJ0Q2hlY2tvdXQgPiBbZGF0YS1yZXZlYWwtY2xvc2VdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtb2RhbENsb3NlQnRuID0gJCgnI3ByZXZpZXdNb2RhbCA+IC5tb2RhbC1jbG9zZScpO1xyXG4gICAgICAgICAgICBjb25zdCBiYW5uZXJVcGRhdGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RDb250YWluZXIgPSAkKCcjbWFpbi1jb250ZW50ID4gLmNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICRwcm9kdWN0Q29udGFpbmVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IHBkcC11cGRhdGVcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICQoJy5sb2FkaW5nT3ZlcmxheS5wZHAtdXBkYXRlJywgJHByb2R1Y3RDb250YWluZXIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcygnY2FydC1jb3VudC0tcG9zaXRpdmUnKTtcclxuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XHJcblxyXG4gICAgICAgICAgICBpZiAob25Db21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkcHJvbW90aW9uQmFubmVyLmxlbmd0aCAmJiAkYmFja1RvU2hvcHBwaW5nQnRuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJGJhY2tUb1Nob3BwcGluZ0J0bi5vbignY2xpY2snLCBiYW5uZXJVcGRhdGVIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICRtb2RhbENsb3NlQnRuLm9uKCdjbGljaycsIGJhbm5lclVwZGF0ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcclxuICAgICAqL1xyXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RJbWFnZShkYXRhLmltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YUl0ZW1zID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdERldGFpbHMgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBmb3JtRGF0YUl0ZW0gb2YgZm9ybURhdGFJdGVtcykge1xyXG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBmb3JtRGF0YUl0ZW07XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3Byb2R1Y3RfaWQnKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5wcm9kdWN0SWQgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3F0eVtdJykge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMucXVhbnRpdHkgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvYXR0cmlidXRlLykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RPcHRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IE51bWJlcihuYW1lLm1hdGNoKC9cXGQrL2cpWzBdKSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMgPSBwcm9kdWN0RGV0YWlscz8ub3B0aW9uU2VsZWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgID8gWy4uLnByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMsIHByb2R1Y3RPcHRpb25dXHJcbiAgICAgICAgICAgICAgICAgICAgOiBbcHJvZHVjdE9wdGlvbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RVcGRhdGUnLCB7XHJcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGRldGFpbDogeyBwcm9kdWN0RGV0YWlscyB9LFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEYXRlU2VsZWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZWFjaCgoaSwgc2NvcGUpID0+IHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGF5cyhkYXRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aFNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbbW9udGhdXCJdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlTZWxlY3RvciA9IGRhdGVPcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWUkPVwiW2RheV1cIl0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXJTZWxlY3RvciA9IGRhdGVPcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWUkPVwiW3llYXJdXCJdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KG1vbnRoU2VsZWN0b3IudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludCh5ZWFyU2VsZWN0b3IudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXlzSW5Nb250aDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc05hTihtb250aCkgJiYgIU51bWJlci5pc05hTih5ZWFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gKCh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwKSA/IDI5IDogMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogY2FzZSA2OiBjYXNlIDk6IGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gMzE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGRheSA9IDI5OyBkYXkgPD0gMzE7IGRheSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZGF5U2VsZWN0b3IucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtkYXl9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheSA8PSBkYXlzSW5Nb250aCAmJiAhb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheVNlbGVjdG9yLm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oZGF5LCBkYXkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRheSA+IGRheXNJbk1vbnRoICYmIG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKHNjb3BlKS5vbignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVPcHRpb24gPSBlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPWRhdGVdJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURheXMoZGF0ZU9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9ZGF0ZV0nKS5mb3JFYWNoKChkYXRlT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEYXlzKGRhdGVPcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBzdHJpbmcgdmFsdWVzIGZyb20gdGhlIGZvcm1EYXRhXHJcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XHJcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxyXG4qL1xyXG5leHBvcnQgY29uc3QgZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSA9IGZvcm1EYXRhID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuYXBwZW5kKGtleSwgdmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTY3Mjk5Mi9hamF4LXJlcXVlc3QtZmFpbHMtd2hlbi1zZW5kaW5nLWZvcm1kYXRhLWluY2x1ZGluZy1lbXB0eS1maWxlLWlucHV0LWluLXNhZmFyaVxyXG4gKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xyXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxyXG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0gPSBmb3JtRGF0YSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoISh2YWwgaW5zdGFuY2VvZiBGaWxlKSB8fCB2YWwubmFtZSB8fCB2YWwuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzLmFwcGVuZChrZXksIHZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgZW1wdHkgc3RyaW5nIHZhbHVlcyBhbmQgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybURhdGFcclxuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcclxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplRm9ybURhdGEgPSBmb3JtRGF0YSA9PiBmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkpO1xyXG4iLCJpbXBvcnQgeyBpc0Jyb3dzZXJJRSB9IGZyb20gJy4vaWUtaGVscGVycyc7XHJcblxyXG5jb25zdCBiYW5uZXJVdGlscyA9IHtcclxuICAgIGRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50OiAocHJvZHVjdEF0dHJpYnV0ZXMpID0+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlIHx8IGlzQnJvd3NlcklFKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBwcmljZSA9IDA7XHJcblxyXG4gICAgICAgIGlmICghcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2UucHJpY2VfcmFuZ2UpIHtcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgpIHtcclxuICAgICAgICAgICAgICAgIHByaWNlID0gcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudCgnYmlnY29tbWVyY2UucHJvZHVjdHByaWNlY2hhbmdlJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogcHJpY2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFubmVyVXRpbHM7XHJcbiIsImV4cG9ydCBjb25zdCBpc0Jyb3dzZXJJRSA9ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRJbnRvQXJyYXkgPSBjb2xsZWN0aW9uID0+IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbGxlY3Rpb24pO1xyXG4iLCJpbXBvcnQgJ2Vhc3l6b29tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZ2FsbGVyeSkge1xyXG4gICAgICAgIHRoaXMuJG1haW5JbWFnZSA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbWFpbl0nKTtcclxuICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpO1xyXG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuc2V0SW1hZ2Vab29tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFpbkltYWdlKGltZ09iaikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0geyAuLi5pbWdPYmogfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xyXG4gICAgICAgIHRoaXMuc3dhcE1haW5JbWFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFsdGVybmF0ZUltYWdlKGltZ09iaikge1xyXG4gICAgICAgIGlmICghdGhpcy5zYXZlZEltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRJbWFnZSA9IHtcclxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybDogdGhpcy4kbWFpbkltYWdlLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpLFxyXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuYXR0cignZGF0YS16b29tLWltYWdlJyksXHJcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6IHRoaXMuJG1haW5JbWFnZS5maW5kKCdpbWcnKS5hdHRyKCdzcmNzZXQnKSxcclxuICAgICAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiB0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoaW1nT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlSW1hZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWRJbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZSh0aGlzLnNhdmVkSW1hZ2UpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zYXZlZEltYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3ROZXdJbWFnZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgaW1nT2JqID0ge1xyXG4gICAgICAgICAgICBtYWluSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmwnKSxcclxuICAgICAgICAgICAgem9vbUltYWdlVXJsOiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybCcpLFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQnKSxcclxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXHJcbiAgICAgICAgICAgIG1haW5JbWFnZUFsdDogJHRhcmdldC5jaGlsZHJlbigpLmZpcnN0KCkuYXR0cignYWx0JyksXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xyXG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3YXBNYWluSW1hZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgaXNCcm93c2VySUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdUcmlkZW50Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5zd2FwKFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlU3Jjc2V0LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuJG1haW5JbWFnZS5hdHRyKHtcclxuICAgICAgICAgICAgJ2RhdGEtem9vbS1pbWFnZSc6IHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQuYXR0cih7XHJcbiAgICAgICAgICAgIGFsdDogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaXNCcm93c2VySUUpIHtcclxuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZXNJRSA9IHtcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgke3RoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybH0pYCxcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbic6ICdjb250ZW50LWJveCcsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJ2NvbnRhaW4nLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kbWFpbkltYWdlTmVzdGVkLmNzcyhmYWxsYmFja1N0eWxlc0lFKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJbWFnZSgpIHtcclxuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSAkKCcucHJvZHVjdFZpZXctaW1hZ2UnKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSAkaW1hZ2VDb250YWluZXIuaGVpZ2h0KCk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSAkaW1hZ2VDb250YWluZXIud2lkdGgoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGltYWdlID0gdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLiR6b29tO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICRpbWFnZS5oZWlnaHQoKTtcclxuICAgICAgICBjb25zdCB3aWR0aCA9ICRpbWFnZS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0IDwgY29udGFpbmVySGVpZ2h0IHx8IHdpZHRoIDwgY29udGFpbmVyV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW1hZ2Vab29tKCkge1xyXG4gICAgICAgIHRoaXMuZWFzeXpvb20gPSB0aGlzLiRtYWluSW1hZ2UuZWFzeVpvb20oe1xyXG4gICAgICAgICAgICBvblNob3c6ICgpID0+IHRoaXMuY2hlY2tJbWFnZSgpLFxyXG4gICAgICAgICAgICBlcnJvck5vdGljZTogJycsXHJcbiAgICAgICAgICAgIGxvYWRpbmdOb3RpY2U6ICcnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld0ltYWdlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9pbmhlcml0c0xvb3NlIiwiY29uc3RydWN0b3IiLCJfc2V0UHJvdG90eXBlT2YiLCJtdXN0YWNoZSIsImNyZWF0ZUZvY3VzVHJhcCIsInRvb2xzIiwiQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkiLCJERUZBVUxUX1NURVAiLCJJbWFnZUdhbGxlcnlNb2RhbCIsImltYWdlR2FsbGVyeSIsIiRnYWxsZXJ5IiwibW9kYWxUZW1wbGF0ZSIsIiRib2R5IiwiJCIsImNyZWF0ZU1vZGFsIiwiX3Byb3RvIiwiYmluZEV2ZW50cyIsIl90aGlzIiwiZmluZCIsIm9mZiIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRhIiwiY3VycmVudFRhcmdldCIsImltYWdlVXJsIiwiZGF0YSIsImltYWdlU3Jjc2V0Iiwiem9vbUltYWdlVXJsIiwidmlkZW9JZCIsInN0ZXAiLCJjbG9zZXN0IiwiTnVtYmVyIiwic3BsaXQiLCJvcGVuTW9kYWwiLCIkZ2FsbGVyeU1vZGFsIiwiY2xvc2VNb2RhbCIsImtleSIsImlzIiwidGFyZ2V0Iiwic2V0TWFpbkltYWdlIiwic2V0TWFpblZpZGVvIiwidG90YWxTdGVwIiwic2V0TWFpbjM2MCIsInByZXZpb3VzMzYwU3RlcCIsIm5leHQzNjBTdGVwIiwicGxheTM2MCIsInBhdXNlMzYwIiwiZGVzdHJveU1vZGFsIiwicmVtb3ZlIiwiXyRtYWluSW1hZ2VMaW5rJGdldCIsIiRtYWluSW1hZ2VMaW5rIiwiJG1haW5JbWFnZSIsImNsb25lIiwicmVtb3ZlQXR0ciIsImF0dHIiLCJtYWluSW1hZ2VMaW5rRWxlbWVudCIsImdldCIsIm91dGVySFRNTCIsIm5hbWUiLCJ0ZXh0IiwidmlkZW9zTGFiZWwiLCJpbWFnZXMzNjBMYWJlbCIsImltYWdlc0xhYmVsIiwidmlkZW9zIiwibWFwIiwibGkiLCJfJCRmaW5kJGNsb25lJGdldCIsImxpbmtFbGVtZW50IiwiaW1hZ2VzMzYwIiwiXyRlbCRnZXQiLCIkZWwiLCJpbWFnZXMiLCJmaWx0ZXIiLCJfJGEkZ2V0IiwicmVuZGVyIiwiaGlkZSIsImFwcGVuZFRvIiwiaW5pdEltYWdlWm9vbSIsImZvY3VzVHJhcCIsImVzY2FwZURlYWN0aXZhdGVzIiwicmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUiLCJhbGxvd091dHNpZGVDbGljayIsIl90aGlzMiIsIiRsYXN0QWN0aXZlRWxlbWVudCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImFkZENsYXNzIiwiJG1haW5JbWciLCJzaG93IiwicmVtb3ZlQ2xhc3MiLCJhY3RpdmF0ZSIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwiX3RoaXMzIiwiaGlkZU1haW5WaWRlbyIsImhpZGUzNjBVSSIsImRlYWN0aXZhdGUiLCJtYWluSW1hZ2VVcmwiLCJtYWluSW1hZ2VTcmNzZXQiLCJzaG93TWFpbkltYWdlIiwic2V0QWN0aXZlVGh1bWIiLCJzd2FwTWFpbkltYWdlIiwiaGlkZU1haW5JbWFnZSIsIl9pIiwiJGltYWdlQ29udGFpbmVyIiwiZWFzeXpvb20iLCJzd2FwIiwiaXNCcm93c2VySUUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmNsdWRlcyIsImZhbGxiYWNrU3R5bGVzSUUiLCJjc3MiLCJjaGVja0ltYWdlIiwiY29udGFpbmVySGVpZ2h0IiwiaGVpZ2h0IiwiY29udGFpbmVyV2lkdGgiLCJ3aWR0aCIsIiRpbWFnZSIsIiR6b29tIiwiX3RoaXM0IiwiZWFzeVpvb20iLCJvblNob3ciLCJlcnJvck5vdGljZSIsImxvYWRpbmdOb3RpY2UiLCJzaG93TWFpblZpZGVvIiwic3JjIiwic2hvdzM2MFVJIiwic3dhcE1haW4zNjAiLCJzZXQzNjBDdXJyZW50U3RlcCIsImN1cnJlbnRTdGVwIiwidG90YWwiLCJfdGhpczUiLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwzNjAiLCJzZXRJbnRlcnZhbCIsIkNhcmRJbWFnZUdhbGxlcnlNb2RhbCIsIl9JbWFnZUdhbGxlcnlNb2RhbDIiLCIkc2NvcGUiLCJfdGVtcCIsIl90aGlzNiIsIl9yZWYiLCJwcm9kdWN0SWQiLCJncmFwaFFMVG9rZW4iLCJ6b29tU2l6ZSIsInByb2R1Y3RTaXplIiwidGh1bWJTaXplIiwidHh0VmlkZW9zTGFiZWwiLCJ0eHRJbWFnZXMzNjBMYWJlbCIsInR4dEltYWdlc0xhYmVsIiwibG9hZGluZ01vZGFsVGVtcGxhdGUiLCJfcHJvdG8yIiwib3BlbkxvYWRpbmdNb2RhbCIsIl9vcGVuTG9hZGluZ01vZGFsIiwiX2NhbGxlZSIsIl9jb250ZXh0IiwibG9hZE1vZGFsIiwiX2xvYWRNb2RhbCIsIl9jYWxsZWUyIiwibWFpbkltYWdlIiwiX2NvbnRleHQyIiwiZmV0Y2hQcm9kdWN0IiwiaW1hZ2UiLCJpc0RlZmF1bHQiLCJnZXRTcmNzZXQiLCJ1cmxUZW1wbGF0ZSIsInpvb21VcmwiLCJ1cmwiLCJ0aHVtYm5haWxVcmwiLCJhbHRUZXh0IiwidmlkZW8iLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJodG1sIiwiX3RlbXAyIiwiX3RoaXM3IiwiX3JlZjIiLCJfcmVmMiRmaXJzdFZpZGVvIiwiZmlyc3RWaWRlbyIsIl9yZWYyJGZpcnN0IiwiZmlyc3QzNjAiLCJmaXJzdCIsIl9mZXRjaFByb2R1Y3QiLCJfY2FsbGVlMyIsIl90aGlzJHpvb21TaXplJHNwbGl0JCIsInpvb21XaWR0aCIsInpvb21IZWlnaHQiLCJfdGhpcyRwcm9kdWN0U2l6ZSRzcGwiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJfdGhpcyR0aHVtYlNpemUkc3BsaXQiLCJ0aHVtYldpZHRoIiwidGh1bWJIZWlnaHQiLCJyZXNwIiwiX3JlZjMiLCJfY29udGV4dDMiLCJhamF4IiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzaXRlIiwicHJvZHVjdCIsImVkZ2VzIiwiX3JlZjQiLCJub2RlIiwiX3JlZjUiLCJjdXN0b21GaWVsZHMiLCJfcmVmNiIsIl9yZWY3IiwiSW1hZ2VHYWxsZXJ5IiwiX0Nvcm5lcnN0b25lSW1hZ2VHYWxsIiwiX3RoaXM4IiwiaW1hZ2VHYWxsZXJ5TW9kYWwiLCJfcHJvdG8zIiwiZGVmYXVsdCIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsInV0aWxzIiwiQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyIsImFsZXJ0TW9kYWwiLCJzaG93QWxlcnRNb2RhbCIsIk1vZGFsRXZlbnRzIiwiZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMiLCJjdXJyZW5jeUZvcm1hdCIsIlNhbGVDb3VudGRvd24iLCJERUJVR19MT0ciLCJub3JtYWxpemVPcHRpb25TdHJpbmciLCJzIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZXF1YWxPcHRpb25TdHJpbmciLCJiIiwiYXJlQXJyYXlzRXF1YWxVbm9yZGVyZWQiLCJhcnIxIiwiYXJyMiIsIl9hcnIxIiwic2xpY2UiLCJzb3J0IiwiX2FycjIiLCJldmVyeSIsImluZGV4IiwiY2FjaGVkU2V0dGluZ3MiLCJoYW5kbGVQcm9taXNlc1dpdGhMaW1pdCIsIl94IiwiX3gyIiwiX2hhbmRsZVByb21pc2VzV2l0aExpbWl0IiwiX2NhbGxlZTciLCJwcm9taXNlcyIsImxpbWl0IiwicmVzdWx0cyIsImV4ZWN1dGluZyIsIl9sb29wIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJfY29udGV4dDgiLCJwcm9taXNlIiwiX2NvbnRleHQ3IiwicmVzdWx0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInB1c2giLCJyYWNlIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9yZWdlbmVyYXRvclZhbHVlcyIsImFsbCIsIlByb2R1Y3REZXRhaWxzIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25jYXQiLCJtb2RpZmllcnNNb2RhbE92ZXJsYXlUZW1wbGF0ZSIsIm1vZGlmaWVyc01vZGFsVGVtcGxhdGUiLCJvcHRpb25Ub29sdGlwVGVtcGxhdGUiLCJvcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZSIsIm9wdGlvblZhbHVlVG9vbHRpcEhlYWRpbmdUZW1wbGF0ZSIsIm9wdGlvblByaWNlVGVtcGxhdGUiLCJvcHRpb25QcmljZVBsYWluVGVtcGxhdGUiLCJzdWJ0b3RhbFRlbXBsYXRlIiwic3VtbWFyeVRlbXBsYXRlIiwic2hvd1ByaWNlRnJlZSIsInNob3dQcmljZVplcm8iLCJhZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IiLCJmZXRjaE9wdGlvblByaWNlQ2FjaGUiLCJjb25zb2xlIiwibG9nIiwiX2NvbnNvbGUiLCIkZm9ybSIsIiRjaG9vc2VPcHRpb25zQnRuIiwidmFsIiwicmVmcmVzaFByb2R1Y3RNZXRhZGF0YSIsImVuYWJsZU1vZGlmaWVyc01vZGFsIiwiY3JlYXRlTW9kaWZpZXJzTW9kYWwiLCJiaW5kUHJvZHVjdEVkaXRFdmVudHMiLCJiaW5kU3RpY2t5QWRkVG9DYXJ0RXZlbnRzIiwiYmluZE1vZGFsRGVzdHJveSIsImluaXRPcHRpb25TdGVwcGVyIiwic3luY1Byb2R1Y3RDYXJkUXR5IiwiaW5pdFNhbGVDb3VudGRvd24iLCJyZW5kZXJJbmxpbmVPcHRpb25Ub29sdGlwcyIsInBhcnNlTWV0YWRhdGEiLCJzZWxlY3RvciIsInBhcnNlIiwicHJvZHVjdE9wdGlvbnMiLCJnZXRWaWV3TW9kZWwiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGUyIiwiX2xlbjIiLCJfa2V5MiIsIm1vZGVsIiwiJHVwZGF0ZVByb2R1Y3RXcmFwcGVyIiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCIkYnRuIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwicHJvcCIsImFkZFByb2R1Y3RUb0NhcnQiLCJmb3JtIiwiZWRpdFByb2R1Y3RJbkNhcnQiLCJlZGl0UHJvZHVjdFRvQ2FydCIsIl9lZGl0UHJvZHVjdFRvQ2FydCIsIiRzYXZlQnRuIiwib3JpZ2luYWxCdG5WYWwiLCJ3YWl0TWVzc2FnZSIsImZvcm1EYXRhIiwic3VjY2VzcyIsImZhaWx1cmUiLCJpdGVtSWQiLCJuZXdRdHkiLCJfdCIsIndpbmRvdyIsIkZvcm1EYXRhIiwidW5kZWZpbmVkIiwiJG92ZXJsYXkiLCJzZXRMaXZlUmVnaW9uQXR0cmlidXRlcyIsIm5leHQiLCJyZXNwb25zZSIsImNvbnRleHQiLCJlZGl0UHJvZHVjdENhbGxiYWNrIiwiZXJyb3JUZXh0IiwidG1wIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoZWNrSXNRdWlja1ZpZXdDaGlsZCIsIiRwcmVNb2RhbEZvY3VzZWRFbCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiZWRpdFByb2R1Y3RRdWFudGl0eSIsInVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsImZhaWwiLCJfeGhyIiwiX3N0YXR1cyIsImVycm9yIiwiX3gzIiwiX3g0IiwicmVqZWN0IiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJfcmVzcG9uc2UkZGF0YSIsInN0YXR1cyIsImVycm9ycyIsImpvaW4iLCJzdWJtaXRFdmVudCIsIkV2ZW50IiwiJGJ1dHRvbiIsIm9uZSIsImNsb3NlZCIsImVhY2giLCJmb3JtRmllbGRFbCIsIiRmb3JtRmllbGQiLCIkZGVjIiwiJGluYyIsIiRjaGVjayIsImluaXQiLCIkcmFkaW9zIiwiJGNoZWNrZWQiLCIkZmlyc3QiLCJzZWxlY3QiLCJpbmMiLCJlcSIsIm5vdCIsImhhc0NsYXNzIiwiJHVuY2hlY2siLCIkbm9uZSIsImNhcmRRdHkiLCIkcXR5IiwicXR5IiwidHh0U2FsZUNvdW50ZG93bkpTT04iLCJlbmRfaW4iLCJjb25maWd1cmUiLCJhZGQiLCJ1cGRhdGVWaWV3IiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlMyIsIl9sZW4zIiwiX2tleTMiLCJ1cGRhdGVTYWxlUGVyY2VudCIsInVwZGF0ZVNoaXBwaW5nQ291bnRkb3duIiwibWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyIsInVwZGF0ZU1vZGlmaWVyc1ZpZXciLCIkcHJvZHVjdE9wdGlvbnNFbCIsIiRtb2RpZmllcnNNb2RhbE9wdGlvbnMiLCIkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCIsInNob3dPcHRpb25JZHMiLCJzdGFja2VkU2hvd09wdGlvbklkcyIsIm5vbmVTYWxlcyIsImN1c3RvbUZpZWxkTm9uZVNhbGVzIiwic2hvd09wdGlvblByaWNlcyIsInVwZGF0ZU1vZGlmaWVyc1N1YnRvdGFsIiwiX2RhdGEkcHJpY2UiLCJfZGF0YSRwcmljZTQiLCIkZGl2IiwiJHNwYW4iLCJzYWxlUGVyY2VudCIsInByaWNlIiwid2l0aG91dF90YXgiLCJfZGF0YSRwcmljZTIiLCJfZGF0YSRwcmljZTMiLCJycnBfd2l0aG91dF90YXgiLCJNYXRoIiwicm91bmQiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsIndpdGhfdGF4IiwiX2RhdGEkcHJpY2U1IiwiX2RhdGEkcHJpY2U2IiwicnJwX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCIkc2hpcHBpbmdDb3VudGRvd24iLCJ1cGRhdGVDYXJ0Q29udGVudCIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTQiLCJjbG9zZU1vZGlmaWVyc01vZGFsIiwicHJldmlld01vZGFsIiwiX2xlbjQiLCJfa2V5NCIsInNob3dQcm9kdWN0SW1hZ2UiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGU1IiwiX2xlbjUiLCJfa2V5NSIsIiRtb2RpZmllcnNNb2RhbEltZyIsIl90aGlzJGltYWdlR2FsbGVyeSRjdSIsImN1cnJlbnRJbWFnZSIsImVsIiwiZm9ybWF0UHJpY2UiLCJwbHVzU3ltYm9sIiwiZGlzcGxheSIsImN1cnJlbmN5X3Rva2VuIiwiY3VycmVuY3kiLCJzeW1ib2wiLCJjdXJyZW5jeV9sb2NhdGlvbiIsInN5bWJvbFBsYWNlbWVudCIsImRlY2ltYWxfdG9rZW4iLCJkZWNpbWFsVG9rZW4iLCJkZWNpbWFsX3BsYWNlcyIsImRlY2ltYWxQbGFjZXMiLCJ0aG91c2FuZHNfdG9rZW4iLCJ0aG91c2FuZHNUb2tlbiIsImZvcm1hdHRlZCIsImZpbmRPcHRpb25WYWx1ZSIsIm9wdGlvbk5hbWUiLCJ2YWx1ZU5hbWUiLCJfaGlkZUlmT3B0aW9uJHZhbHVlcyIsImhpZGVJZk9wdGlvbiIsImRpc3BsYXlfbmFtZSIsInZhbHVlcyIsImxhYmVsIiwib3B0aW9uSWQiLCJpZCIsInZhbHVlSWQiLCIkYXR0cmlidXRlTWVzc2FnZVdyYXBwZXIiLCIkYWRkVG9DYXJ0V3JhcHBlciIsIiRtb2RpZmllcnNNb2RhbCIsInR4dENvbnRpbnVlIiwicHJvZHVjdFRpdGxlIiwiJG1vZGlmaWVyc01vZGFsQ29tcGxldGUiLCIkbW9kaWZpZXJzTW9kYWxDbG9zZSIsIiRtb2RpZmllcnNNb2RhbENvbnRpbnVlIiwiJG1vZGlmaWVyc01vZGFsQmFjayIsImFwcGVuZCIsImdvQmFja1N0ZXAiLCJpbnZhbGlkSW5wdXRzIiwicmVkdWNlIiwiX2ludmFsaWRJbnB1dHMiLCJjaGVja1ZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJmb3JFYWNoIiwidmFsaWRhdGVWYXJpYW50T3B0aW9ucyIsImluaXRNb2RpZmllcnNWaWV3Iiwib3Blbk1vZGlmaWVyc01vZGFsIiwiYmVmb3JlIiwiaWdub3JlQVBJQ2FsbCIsIl91cGRhdGVNb2RpZmllcnNWaWV3IiwiX3JlZjMkaWdub3JlQVBJQ2FsbCIsIiRtb2RpZmllcnNNb2RhbFN1bW1hcnkiLCIkbW9kaWZpZXJzTW9kYWxUaXRsZSIsIiRtb2RpZmllcnNNb2RhbEZvb3RlciIsImN1cnJlbnRPcHRpb25JZCIsImN1cnJlbnRHcm91cE5hbWUiLCJjdXJyZW50R3JvdXBPcHRpb25JZHMiLCJoaWRlT3B0aW9uSWRzIiwiaGlkZU9wdGlvblZhbHVlcyIsInRvb2x0aXBzIiwidG9vbHRpcEhlYWRpbmdzIiwib3B0aW9uUmVuYW1lcyIsIl90aGlzJHByb2R1Y3RPcHRpb25zJCIsInRpdGxlIiwiZ3JvdXBUb29sdGlwIiwiJHRvb2x0aXAiLCJlbXB0eSIsImZyb20iLCJlbnRyaWVzIiwic3RhdGUiLCJvcHRpb24iLCJoaWRlT3B0aW9uIiwiZ3JvdXBOYW1lIiwiZ3JvdXBPcHRpb25JZHMiLCJpc05vbmVSYWRpb0NoZWNrZWQiLCIkZmlsZSIsImlzRmlsZVNob3duIiwiJGRhdGUiLCJpc09wdGlvbmFsRGF0ZVNob3duIiwicmVxdWlyZWQiLCIkc2VsZWN0IiwiaXNPcHRpb25hbFNlbGVjdFNob3duIiwiJHRleHQiLCJpc09wdGlvbmFsVGV4dFNob3duIiwiZm9ybVZhbHVlIiwiRmlsZSIsImN1c3RvbUZpZWxkIiwiaGlkZUlmTWF0Y2giLCJjdXN0b21GaWVsZE1hdGNoSGlkZUlmIiwiZ3JvdXBNYXRjaCIsImN1c3RvbUZpZWxkTWF0Y2hHcm91cCIsIl9PYmplY3QkYXNzaWduIiwidG9vbHRpcE1hdGNoIiwiY3VzdG9tRmllbGRNYXRjaFRvb2x0aXAiLCJfdG9vbHRpcHMkb3B0aW9uJGlkIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZDIiLCJhc3NpZ24iLCJ0b29sdGlwIiwidmFsdWVUb29sdGlwcyIsInZhbHVlVG9vbHRpcEhlYWRpbmdzIiwiY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nIiwibmV3TmFtZSIsImN1c3RvbUZpZWxkTWF0Y2hSZW5hbWUiLCJ2YWx1ZU5vblNhbGVzIiwiY3VzdG9tRmllbGRNYXRjaE5vblNhbGUiLCJfIiwiY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCIsInNob3dPcHRpb25Ub29sdGlwcyIsInBvcHVsYXRlRGVmYXVsdE9wdGlvblZhbHVlcyIsImRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyIiwic2hvd1N1bW1hcnkiLCJfeDUiLCJpbnZhbGlkIiwicG9wIiwiJG9wdGlvbiIsIm1hdGNoIiwiaGlkZUlmT3B0aW9ucyIsImt2IiwiX3JlZjgiLCJ0cmltIiwiX3JlZjkiLCJ0aGVuT3B0aW9ucyIsIl9yZWYwIiwiX3JlZjEiLCJfcmVmMTAiLCJfdGhpczgkZmluZE9wdGlvblZhbHUiLCJnZXRBbGwiLCJfcmVmMTEiLCJfcmVmMTIiLCJfaGlkZU9wdGlvblZhbHVlIiwiX3JlZjEzIiwiX3RoaXM5IiwiX3RoaXM5JHByb2R1Y3RPcHRpb25zIiwiX3JlZjE0IiwiX3JlZjE1IiwiX3RoaXMwIiwiX20kMSRzcGxpdCRtYXAiLCJfcmVmMTYiLCJfcmVmMTciLCJfcmVmMTgiLCJfdGhpczEiLCJfbSQxJHNwbGl0JG1hcDIiLCJoZWFkaW5nIiwiX3JlZjE5IiwiX3JlZjIwIiwiX3JlZjIxIiwiX2t2JHNwbGl0JG1hcCIsInZhbHVlTGFiZWwiLCJfb3B0aW9uJHZhbHVlcyRmaW5kIiwiX3JlZjIyIiwiZmV0Y2hTZXR0aW5ncyIsIl9mZXRjaFNldHRpbmdzIiwiY3VycmVuY3lDb2RlIiwiYWN0aXZlX2N1cnJlbmN5X2NvZGUiLCJkZWZhdWx0Q3VycmVuY3lDb2RlIiwiZGVmYXVsdF9jdXJyZW5jeV9jb2RlIiwic2V0dGluZ3MiLCJmZXRjaE9wdGlvblByaWNlcyIsIl9mZXRjaE9wdGlvblByaWNlcyIsIl9jYWxsZWU0Iiwic2hvd09wdGlvbnMiLCJfdGhpczEwIiwic2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyIsIl95aWVsZCRoYW5kbGVQcm9taXNlcyIsInByZXYiLCJzZWxlY3Rpb25zIiwiX2NvbnRleHQ0IiwiX3JlZjIzIiwib3B0aW9uRW50aXR5SWQiLCJ2YWx1ZUVudGl0eUlkIiwiX3JlZjI0IiwiZmV0Y2hPcHRpb25QcmljZSIsIl9hcnJheUxpa2VUb0FycmF5Iiwic2VsZWN0aW9uIiwicHJpY2VzV2l0aFRheCIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aCIsIl9wcmV2JHByaWNlc1dpdGhUYXgiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGgyIiwiX3ByZXYkcHJpY2VzV2l0aFRheDIiLCJub25TYWxlUHJpY2VXaXRoVGF4IiwiYmFzZVByaWNlIiwiYWRqdXN0ZWRQcmljZXNXaXRoVGF4Iiwibm9uU2FsZVByaWNlVmFsdWUiLCJwcmljZXNXaXRob3V0VGF4IiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoMyIsIl9wcmV2JHByaWNlc1dpdGhvdXRUYSIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aDQiLCJfcHJldiRwcmljZXNXaXRob3V0VGEyIiwibm9uU2FsZVByaWNlV2l0aG91dFRheCIsImFkanVzdGVkUHJpY2VzV2l0aG91dFRheCIsIl94NiIsIl94NyIsIl9mZXRjaE9wdGlvblByaWNlIiwiX2NhbGxlZTUiLCJvcHRpb25WYWx1ZUlkcyIsImNhY2hlS2V5IiwiX2NvbnRleHQ1IiwiX3g4IiwiX3RoaXMxMSIsIl9yZWYyNSIsIl9yZWYyNSQiLCIkbGFiZWwiLCJhZnRlciIsInByZXBlbmQiLCJfcmVmMjYiLCJ2YWx1ZVRvb2x0aXAiLCIkdmFsdWUiLCJfcmVmMjciLCJfcmVmMjgiLCJfcmVmMjkiLCJ2YWx1ZVRvb2x0aXBIZWFkaW5nIiwiJHRvb2x0aXBIZWFkaW5nIiwiX3RoaXMxMiIsIm9wdGlvbklkcyIsIl9pbmRleCIsIl9yZWYzMCIsIl90b29sdGlwcyRvcHRpb24kaWQzIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZDQiLCJzaG93SW5saW5lT3B0aW9uVG9vbHRpcHMiLCJfdGhpczEzIiwiX3JlZjMxIiwiX3JlZjMxJCIsIl9yZWYzMSQkdmFsdWVUb29sdGlwcyIsIl9yZWYzMiIsIl9yZWYzMyIsIl9yZWYzNCIsInNob3duT3B0aW9ucyIsIl9yZWYzNSIsImRlZmF1bHRPcHRpb25zIiwiX3JlZjM2IiwicHJlZmlsbCIsInNlbGVjdGVkX2RhdGUiLCJkYXkiLCJtb250aCIsInllYXIiLCJfcmVmMzciLCJzZWxlY3RlZCIsImNoZWNrYm94T3B0aW9ucyIsIl9yZWYzOCIsIm5vVmFsdWUiLCJmaWxlT3B0aW9ucyIsIl9yZWYzOSIsInBhcnRpYWwiLCJkYXRlT3B0aW9ucyIsIl9yZWY0MCIsImRyb3Bkb3duT3B0aW9ucyIsIl9yZWY0MSIsInRleHRPcHRpb25zIiwiX3JlZjQyIiwiX3JlZjQzIiwiX3ZhbHVlcyRmaW5kIiwiX3JlZjQ0IiwiX3JlZjQ1IiwiY2hlY2tlZCIsIl9yZWY0NiIsInBhcmFtcyIsInByZWxvYWRlciIsInByaWNlSHRtbCIsInByaWNlVGV4dCIsInN1YnRvdGFsSHRtbCIsIiRwcmljZSIsIiRvbGQiLCIkcGxhY2Vob2xkZXIiLCJfc2hvd09wdGlvblByaWNlcyIsIl9jYWxsZWU2IiwiaWdub3JlVXBkYXRlU3VidG90YWwiLCJfdGhpczE0IiwiX3lpZWxkJFByb21pc2UkYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsJCIsInNob3dQcmljZSIsIl9jb250ZXh0NiIsIl9pZCIsIl9yZWY0NyIsInR4dFByaWNlRnJlZSIsIl9yZWY0OCIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYSIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYTIiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UyIiwidGF4IiwicGRwIiwicHJpY2VXaXRoVGF4VmFsdWUiLCJwcmljZVdpdGhUYXgiLCJub25TYWxlUHJpY2VXaXRoVGF4VmFsdWUiLCJwcmljZVdpdGhvdXRUYXhWYWx1ZSIsInByaWNlV2l0aG91dFRheCIsIm5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZSIsIl9ub25lU2FsZXMkb3B0aW9uSWQiLCJub25TYWxlIiwiX2FkanVzdGVkUHJpY2VzV2l0aG91MyIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYTMiLCJleGNoYW5nZWROb25TYWxlIiwiZXhjaGFuZ2VSYXRlIiwicHJpY2VWYWx1ZSIsInNob3dPcHRpb25TdWJ0b3RhbCIsIl94OSIsIl94MCIsIl94MSIsIl94MTAiLCJfeDExIiwiX3gxMiIsIl9wcm9kdWN0JHByaWNlc1dpdGhUYSIsIl9wcm9kdWN0JHByaWNlc1dpdGhvdSIsInR4dFN1YnRvdGFsIiwidHh0UmV2aWV3U2VsZWN0aW9ucyIsIm9wdGlvbnMiLCIkc3VidG90YWwiLCJfb3B0aW9uJHZhbHVlcyIsIl8kbW9kaWZpZXJzTW9kYWxPcHRpbyIsImRheVN0ciIsIm1vbnRoU3RyIiwieWVhclN0ciIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ2YWx1ZVN0ciIsIl9yZWY0OSIsIm9wdGlvbkVsUHJpY2VIdG1sIiwic3VtbWFyeUh0bWwiLCJwYXJzZURhdGVUaW1lU3RyaW5nIiwic3RyIiwicmVnZXgiLCJzaG9ydE1vbnRoIiwic2hvcnREYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwic2hvcnRIb3VyIiwic2hvcnRNaW51dGUiLCJzaW5nbGVUaW1lQ29tcG9uZW50IiwidHpTaWduIiwidHpIb3VyT2Zmc2V0IiwidHpNaW51dGVPZmZzZXQiLCJwYXJzZUludCIsInNpZ24iLCJ0ekhvdXIiLCJ0ek1pbnV0ZSIsInRpbWV6b25lIiwicGFyc2VDb3VudGRvd25EYXRlIiwicGFyc2VkRGF0ZSIsIm5vdyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiaCIsIm1pbiIsInNlYyIsImRhdGUiLCJ1dGNNaWxsaXMiLCJVVEMiLCJzZXRGdWxsWWVhciIsInNldE1vbnRoIiwic2V0RGF0ZSIsInNldEhvdXJzIiwic2V0TWludXRlcyIsInNldFNlY29uZHMiLCJlbGVtZW50cyIsIlNldCIsInRpbWVyIiwib2JzZXJ2ZXIiLCJkYXRlRGF0YU5hbWUiLCJpblZpZXdwb3J0RGF0YU5hbWUiLCJ0cmFuc2xhdGlvbnNEYXRhTmFtZSIsInNlbGVjdG9ycyIsImVuZExhYmVsIiwiZGF5VmFsdWUiLCJkYXlMYWJlbCIsImhvdXJWYWx1ZSIsImhvdXJMYWJlbCIsIm1pbnV0ZVZhbHVlIiwibWludXRlTGFiZWwiLCJzZWNvbmRWYWx1ZSIsInNlY29uZExhYmVsIiwidGVtcGxhdGUiLCJoaWRlQ2xhc3MiLCJzYWxlRW5kQ2xhc3MiLCJhY3RpdmVDbGFzcyIsInRyYW5zbGF0aW9ucyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwianNvbiIsInRyYW5zIiwia2V5cyIsIl90cmFucyIsInNob3J0S2V5IiwidmFsaWREYXRlIiwib2JzZXJ2ZSIsInN0YXJ0IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdCIsInRocmVzaG9sZCIsInVub2JzZXJ2ZSIsImlzVmlzaWJsZUluVmlld3BvcnQiLCJzaXplIiwicnVuIiwic3RvcCIsImRpc2Nvbm5lY3QiLCJib2R5IiwiY29udGFpbnMiLCJkaWZmIiwiZmxvb3IiLCIkZW5kTGFiZWwiLCIkZGF5IiwiJGRheVZhbHVlIiwiJGRheUxhYmVsIiwiJGhvdXIiLCIkaG91clZhbHVlIiwiJGhvdXJMYWJlbCIsIiRtaW51dGUiLCIkbWludXRlVmFsdWUiLCIkbWludXRlTGFiZWwiLCIkc2Vjb25kIiwiJHNlY29uZFZhbHVlIiwiJHNlY29uZExhYmVsIiwidG9nZ2xlQ2xhc3MiLCJhcmlhS2V5Q29kZXMiLCJSRVRVUk4iLCJTUEFDRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsImluaXRSYWRpb09wdGlvbnMiLCJzZXRDaGVja2VkUmFkaW9JdGVtIiwiaXRlbUNvbGxlY3Rpb24iLCJpdGVtSWR4IiwiaWR4IiwiaXRlbSIsIiRpdGVtIiwiY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uIiwibGFzdEl0ZW1JZHgiLCJjdXJyZW50SWR4IiwiaGFuZGxlSXRlbUtleURvd24iLCJrZXlDb2RlIiwibGFzdENvbGxlY3Rpb25JdGVtSWR4Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldkl0ZW1JZHgiLCJuZXh0SXRlbUlkeCIsIiRjb250YWluZXIiLCJpdGVtU2VsZWN0b3IiLCIkaXRlbUNvbGxlY3Rpb24iLCJvcHRpb25zVHlwZXNNYXAiLCJJTlBVVF9GSUxFIiwiSU5QVVRfVEVYVCIsIklOUFVUX05VTUJFUiIsIklOUFVUX0NIRUNLQk9YIiwiVEVYVEFSRUEiLCJEQVRFIiwiU0VUX1NFTEVDVCIsIlNFVF9SRUNUQU5HTEUiLCJTRVRfUkFESU8iLCJTV0FUQ0giLCJQUk9EVUNUX0xJU1QiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJhcmVEZWZhdWx0T3B0aW9uc1NldCIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwiZ2V0VGFiUmVxdWVzdHMiLCJfXyIsIl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlIiwidmFyaWFudERvbU5vZGUiLCJ2YXJpYW50VHlwZSIsInJhZGlvIiwiJHJhZGlvIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsIiRhY3RpdmVUYWIiLCJoYXMiLCIkdGFiQ29udGVudCIsInNpYmxpbmdzIiwicnJwV2l0aFRheCIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCJwcmljZUxhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsIiRhZGRUb0NhcnRGb3JtIiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwic3RvY2siLCIkaW5wdXQiLCJza3UiLCJ1cGMiLCJxdWFudGl0eSIsIiRidWxrUHJpY2luZyIsIiR3YWxsZXRCdXR0b25zIiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJ2aWV3TW9kZWwiLCJtZXNzYWdlIiwic3RvY2tfbWVzc2FnZSIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInNob3dNZXNzYWdlQm94IiwidXBkYXRlUHJpY2VWaWV3Iiwid2VpZ2h0IiwidmFyaWFudElkIiwidXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXciLCJidWxrX2Rpc2NvdW50X3JhdGVzIiwiYWRkVG9DYXJ0V3JhcHBlciIsInVwZGF0ZWRQcmljZSIsInByaWNlX3JhbmdlIiwibWF4Iiwic2F2ZWQiLCIkbWVzc2FnZUJveCIsImlzVmFsaWRGb3JtIiwidG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkiLCJzaG91bGRTaG93IiwiZ2V0QXR0cmlidXRlVHlwZSIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkcGFyZW50IiwicGFyZW50IiwidG9nZ2xlT3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsIm1vZGFsRmFjdG9yeSIsIm5vZCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJmb3JtcyIsIm5vcm1hbGl6ZUZvcm1EYXRhIiwiY29udmVydEludG9BcnJheSIsImJhbm5lclV0aWxzIiwiY3VycmVuY3lTZWxlY3RvciIsIl9Qcm9kdWN0RGV0YWlsc0Jhc2UiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJsaXN0ZW5RdWFudGl0eUNoYW5nZSIsIiRzd2F0Y2hPcHRpb25NZXNzYWdlIiwic3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlIiwic3dhdGNoR3JvdXBJZExpc3QiLCJncm91cCIsInN0b3JlSW5pdE1lc3NhZ2VzRm9yU3dhdGNoZXMiLCJ1cGRhdGVEYXRlU2VsZWN0b3IiLCJ1cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEiLCJhZGRUb0NhcnRWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsImhhc0RlZmF1bHRPcHRpb25zIiwiJHByb2R1Y3RTd2F0Y2hHcm91cCIsIiRwcm9kdWN0U3dhdGNoTGFiZWxzIiwicGxhY2VTd2F0Y2hMYWJlbEltYWdlIiwiJG9wdGlvbkltYWdlIiwib3B0aW9uSW1hZ2VXaWR0aCIsIm91dGVyV2lkdGgiLCJleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCIsIl9sYWJlbCRnZXRCb3VuZGluZ0NsaSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpZ2h0IiwiZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIiLCJzY3JlZW4iLCJzaGlmdFZhbHVlIiwicmVnaXN0ZXJBZGRUb0NhcnRWYWxpZGF0aW9uIiwic2hvd1N3YXRjaE5hbWVzIiwic3dhdGNoR3JvdXBFbGVtZW50IiwicGFyZW50Tm9kZSIsInNob3dTd2F0Y2hOYW1lT25PcHRpb24iLCJlbGVtZW50IiwicHJvZHVjdE9wdGlvbnNDaGFuZ2VkIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJfaXNFbXB0eSIsIiRwcm9kdWN0SWQiLCJvcHRpb25DaGFuZ2VDYWxsYmFjayIsInByb2R1Y3RBdHRyaWJ1dGVzIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwiZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQiLCJ2YWxpZGF0ZSIsImNiIiwibnVtYmVyc09ubHkiLCJlcnJvck1lc3NhZ2UiLCJwcm9kdWN0UXVhbnRpdHlFcnJvck1lc3NhZ2UiLCJzd2F0Y2hHcm91cElkIiwidW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyIsIm9wdGlvbkxhYmVsIiwiY2hpbGRyZW4iLCJvcHRpb25UaXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJpc1NhdGlzZmllZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRlU3RyaW5nIiwieCIsImdldFNlbGVjdGVkT3B0aW9uTGFiZWwiLCJwcm9kdWN0VmFyaWFudHNsaXN0IiwibWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCIsImlucHQiLCJkYXRhc2V0IiwicHJvZHVjdEF0dHJpYnV0ZVZhbHVlIiwibGFiZWxzIiwicHJvZHVjdFZhcmlhbnQiLCJ2aWV3IiwicHJvZHVjdE5hbWUiLCJjYXJkIiwiaXNSdW5uaW5nSW5JZnJhbWUiLCJzZWxmIiwidG9wIiwiJGNoYW5nZWRPcHRpb24iLCJwYXJlbnRzIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50IiwiJGNvbnRleHQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGV0YWlsIiwiJHN3YXRjaCIsIiRzd2F0Y2hHcm91cCIsInN3YXRjaE5hbWUiLCJhY3RpdmVTd2F0Y2hHcm91cElkIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwicm9sZSIsIl9pc1BsYWluT2JqZWN0Iiwic2V0QWx0ZXJuYXRlSW1hZ2UiLCJyZXN0b3JlSW1hZ2UiLCIkdGFyZ2V0IiwicXVhbnRpdHlNaW4iLCJxdWFudGl0eU1heCIsInZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkiLCJ2YWxpZGF0ZURlY3JlYXNlQWdhaW5zdE1pbkJvdW5kYXJ5Iiwid2hpY2giLCIkYWRkVG9DYXJ0QnRuIiwiaXRlbUFkZCIsImNhcnRfaWQiLCJvcGVuIiwiQXBwbGVQYXlTZXNzaW9uIiwiJG1vZGFsIiwiY2FydF9pdGVtIiwicmVkaXJlY3RUbyIsImNhcnRfdXJsIiwidXJscyIsImdldENhcnRDb250ZW50IiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCJzdWdnZXN0IiwiY29uZmlnIiwic3VnZ2VzdGlvbnMiLCJnZXRDb250ZW50IiwiaWZyYW1lU2RrIiwibW9kYWwiLCJ1cGRhdGVDb250ZW50IiwiJGNhcnRRdWFudGl0eSIsIiRjb250ZW50IiwiJGNhcnRDb3VudGVyIiwiJHByb21vdGlvbkJhbm5lciIsIiRiYWNrVG9TaG9wcHBpbmdCdG4iLCIkbW9kYWxDbG9zZUJ0biIsImJhbm5lclVwZGF0ZUhhbmRsZXIiLCIkcHJvZHVjdENvbnRhaW5lciIsInJlbG9hZCIsImZvcm1EYXRhSXRlbXMiLCJzZXJpYWxpemVBcnJheSIsInByb2R1Y3REZXRhaWxzIiwiZm9ybURhdGFJdGVtIiwicHJvZHVjdE9wdGlvbiIsIm9wdGlvblZhbHVlIiwib3B0aW9uU2VsZWN0aW9ucyIsInNjb3BlIiwidXBkYXRlRGF5cyIsImRhdGVPcHRpb24iLCJtb250aFNlbGVjdG9yIiwiZGF5U2VsZWN0b3IiLCJ5ZWFyU2VsZWN0b3IiLCJkYXlzSW5Nb250aCIsImlzTmFOIiwiT3B0aW9uIiwiZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSIsInJlcyIsIl9zdGVwJHZhbHVlIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsImV2dCIsImFtb3VudCIsImRvY3VtZW50TW9kZSIsImNvbGxlY3Rpb24iLCIkbWFpbkltYWdlTmVzdGVkIiwiJHNlbGVjdGFibGVJbWFnZXMiLCJzZXRJbWFnZVpvb20iLCJpbWdPYmoiLCJzYXZlZEltYWdlIiwiJHNlbGVjdGVkVGh1bWIiLCJzZWxlY3ROZXdJbWFnZSIsIm1haW5JbWFnZUFsdCIsImFsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9