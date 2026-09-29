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
  _handlePromisesWithLimit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(promises, limit) {
    var results, executing, _loop, _iterator, _step;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          if (limit === void 0) {
            limit = 10;
          }
          results = [];
          executing = []; // Track the promises currently executing
          _loop = /*#__PURE__*/_regenerator().m(function _loop() {
            var promise, p;
            return _regenerator().w(function (_context9) {
              while (1) switch (_context9.n) {
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
                    _context9.n = 1;
                    break;
                  }
                  _context9.n = 1;
                  return Promise.race(executing);
                case 1:
                  return _context9.a(2);
              }
            }, _loop);
          });
          _iterator = _createForOfIteratorHelperLoose(promises);
        case 1:
          if ((_step = _iterator()).done) {
            _context0.n = 3;
            break;
          }
          return _context0.d(_regeneratorValues(_loop()), 2);
        case 2:
          _context0.n = 1;
          break;
        case 3:
          return _context0.a(2, Promise.all(results));
      }
    }, _callee9);
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
    _this.bindRenewingDataPlanVisibility();
    _this.renderInlineOptionTooltips();
    _this.renderSpecTooltips();
    _this.initInlineOptionPriceHints();
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
    var handleStickyAddToCartClick = function handleStickyAddToCartClick(event) {
      event.preventDefault();
      var $button = $(event.currentTarget);
      if ($button.prop('disabled') || $button.attr('aria-disabled') === 'true') {
        return;
      }
      var $form = _this3.$scope.find('form[data-cart-item-add]').first();
      if (!$form.length) {
        return;
      }
      var $stickyQty = $button.siblings('.productView-sticky-add-to-cart').find('.mobile-increment input[name="qty[]"]').first();
      var $formQty = $form.find('[data-quantity-change] input[name="qty[]"]').first();
      if ($stickyQty.length && $formQty.length && $formQty.val() !== $stickyQty.val()) {
        $formQty.val($stickyQty.val()).trigger('change');
      }
      var form = $form[0];
      if (form && !form.checkValidity()) {
        var invalidField = form.querySelector(':invalid');
        if (invalidField != null && invalidField.scrollIntoView) {
          invalidField.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
        if (invalidField != null && invalidField.focus) {
          invalidField.focus();
        }
        if (typeof form.reportValidity === 'function') {
          form.reportValidity();
        } else if (invalidField != null && invalidField.reportValidity) {
          invalidField.reportValidity();
        }
        return;
      }
      $form.trigger('submit');
    };
    this.$scope.find('#sticky-add-to-cart').off('click.eyevaStickyAddToCart').on('click.eyevaStickyAddToCart', handleStickyAddToCartClick);
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
  _proto.bindRenewingDataPlanVisibility = function bindRenewingDataPlanVisibility() {
    var _this5 = this;
    this.$scope.off('change.eyevaRenewingDataPlan', '[name="attribute[13303]"]');
    this.$scope.on('change.eyevaRenewingDataPlan', '[name="attribute[13303]"]', function () {
      _this5.toggleRenewingDataPlanFields();
    });
    this.toggleRenewingDataPlanFields();
  };
  _proto.toggleRenewingDataPlanFields = function toggleRenewingDataPlanFields() {
    var _this6 = this;
    var $form = this.$scope.find('[data-cart-item-add]').first();
    var $productOptionsEl = $form.find('[data-product-option-change]').first();
    if ($productOptionsEl.length === 0) {
      return;
    }
    var $renewingRadio = $productOptionsEl.find('[name="attribute[13303]"][value="1698"]').first();
    if ($renewingRadio.length === 0) {
      return;
    }
    var shouldHideFields = $renewingRadio.is(':checked');
    var fieldIds = [13304, 13305, 13306];
    fieldIds.forEach(function (fieldId) {
      var $field = $productOptionsEl.find("[data-product-attribute-id=\"" + fieldId + "\"]").first();
      if ($field.length === 0) {
        return;
      }
      if (shouldHideFields) {
        _this6.disableHiddenModifierField($field);
        $field.css('display', 'none').attr('aria-hidden', 'true').removeClass('form-field--error');
      } else {
        _this6.enableShownModifierField($field);
        $field.css('display', '').attr('aria-hidden', 'false');
      }
    });
  };
  _proto.disableHiddenModifierField = function disableHiddenModifierField($field) {
    $field.find('input:not([type="hidden"]), select, textarea').each(function (_i, el) {
      var $el = $(el);
      if (!$el.is('[data-eyeva-original-required]')) {
        $el.attr('data-eyeva-original-required', $el.prop('required') ? 'true' : 'false');
      }
      $el.prop('required', false).removeAttr('required');
      if ($el.is(':checkbox, :radio')) {
        $el.prop('checked', false);
      } else if ($el.is('select')) {
        $el.prop('selectedIndex', 0);
      } else {
        $el.val('');
      }
    });
  };
  _proto.enableShownModifierField = function enableShownModifierField($field) {
    $field.find('input:not([type="hidden"]), select, textarea').each(function (_i, el) {
      var $el = $(el);
      var originalRequired = $el.attr('data-eyeva-original-required') === 'true';
      $el.prop('required', originalRequired);
      if (originalRequired) {
        $el.attr('required', '');
      } else {
        $el.removeAttr('required');
      }
    });
  };
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _CornerstoneProductDe.prototype.updateProductAttributes.call(this, data);
    this.$scope.find('label.unavailable, option.unavailable').find('[data-eyeva-product-option-price-id]').remove();
  };
  _proto.updateView = function updateView(data) {
    var _CornerstoneProductDe3;
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    (_CornerstoneProductDe3 = _CornerstoneProductDe.prototype.updateView).call.apply(_CornerstoneProductDe3, [this, data].concat(args));
    this.refreshProductMetadata();
    this.toggleRenewingDataPlanFields();
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
    var _this7 = this;
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
      _this7.closeModifiersModal();
    });
    $modifiersModalBack.on('click', function (event) {
      event.preventDefault();
      _this7.goBackStep();
    });
    $modifiersModalContinue.on('click', function (event) {
      event.preventDefault();

      // stop and report invalid inputs if any
      var showOptionIds = _this7.stackedShowOptionIds.slice(-1)[0] || [];
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
      _this7.manualUpdateModifiersView = false;
      _this7.updateModifiersView();
    });
    $chooseOptionsBtn.on('click', function (event) {
      event.preventDefault();

      // require selecting variant options before opening the modal
      if (_this7.validateVariantOptions()) {
        _this7.initModifiersView();
        _this7.openModifiersModal();
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
      var _this8 = this;
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
              _this8.console.log('%cProductDetails - option: ', 'color: cyan', option.display_name);
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
                _this8.console.log('ProductDetails - hideOption: ', hideOption);
              }
              if (!hideOption) {
                _this8.customFields.forEach(function (customField) {
                  // match __@hide_if (.*)
                  var hideIfMatch = _this8.customFieldMatchHideIf({
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
                    var groupMatch = _this8.customFieldMatchGroup({
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
                    var tooltipMatch = _this8.customFieldMatchTooltip({
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
                    var valueTooltipHeadings = _this8.customFieldMatchTooltipHeading({
                      customField: customField,
                      option: option
                    });
                    if (tooltipHeadings) {
                      tooltipHeadings[option.id] = Object.assign({}, tooltipHeadings[option.id], valueTooltipHeadings);
                    }

                    // match __@rename option name = new name
                    var newName = _this8.customFieldMatchRename({
                      customField: customField,
                      option: option
                    });
                    if (newName) {
                      optionRenames[option.id] = newName;
                    }

                    // match __@nonsale price = option name: option value[; option name: option value; ...]
                    var valueNonSales = _this8.customFieldMatchNonSale({
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
                    _this8.console.log("ProductDetails - currentGroupName: " + currentGroupName + ", currentGroupOptionIds: " + currentGroupOptionIds);
                  } else {
                    // stand-alone option
                    currentOptionId = option.id;
                    _this8.console.log("ProductDetails - currentOptionId: " + currentOptionId);
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
                  groupTooltip = _this8.customFieldMatchTooltipGroup({
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
    var _this9 = this;
    var $form = this.$scope.find('[data-cart-item-add]');
    var formData = new FormData($form[0]);
    var invalid = this.productOptions.filter(function (_ref6) {
      var state = _ref6.state;
      return state === 'variant_option';
    }).find(function (option) {
      if (option.required) {
        var value = formData.get("attribute[" + option.id + "]");
        if (!value) {
          _this9.console.log("ProductDetails - Required option \"" + option.display_name + "\" is not selected");
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
    var _this0 = this;
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
      var _this0$findOptionValu = _this0.findOptionValue(name, value),
        optionId = _this0$findOptionValu[0],
        valueId = _this0$findOptionValu[1];
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
            _this0.console.log('ProductDetails - hideOption: ', hideOption);
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
                _this0.console.log('ProductDetails - hideOptionValue: ', _hideOptionValue);
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
    var _this1 = this;
    var customField = _ref13.customField,
      option = _ref13.option;
    var m = customField.name.match(/^__@group\s+(.*)$/i);
    if (m) {
      var groupName = m[1].trim();
      var groupOptionIds = customField.value.split(';').map(function (s) {
        return s.trim();
      }) // option names
      .map(function (optionName) {
        var _this1$productOptions;
        return (_this1$productOptions = _this1.productOptions.find(function (_ref14) {
          var display_name = _ref14.display_name;
          return equalOptionString(display_name, optionName);
        })) == null ? void 0 : _this1$productOptions.id;
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
    var _this10 = this;
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
          _this10.console.log("ProductDetails - tooltip for option \"" + name + " : " + value + "\" = \"\"\"" + tooltip + "\"\"\"");
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
    var _this11 = this;
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
          _this11.console.log("ProductDetails - tooltip heading for option \"" + name + " : " + value + "\" = \"\"\"" + heading + "\"\"\"");
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
      var selectedOptionValueIds, combos, combosMeta, products, _products$map, prev, selections;
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
                if (valueEntityId) {
                  if (!showOptions.find(function (_ref24) {
                    var id = _ref24.id;
                    return id === optionEntityId;
                  })) {
                    selectedOptionValueIds.push({
                      optionEntityId: optionEntityId,
                      valueEntityId: valueEntityId
                    });
                  }
                }
              }
            });

            // combos[0] is the baseline (already selected options); the rest are one candidate value each
            combos = [selectedOptionValueIds];
            combosMeta = [null];
            showOptions.forEach(function (option) {
              var values = option.values || (option.value ? [{
                id: option.value
              }] : []);
              values.forEach(function (value) {
                combos.push([].concat(selectedOptionValueIds, [{
                  optionEntityId: option.id,
                  valueEntityId: value.id
                }]));
                combosMeta.push({
                  optionId: option.id,
                  valueId: value.id
                });
              });
            });
            _context4.n = 1;
            return this.fetchOptionPricesBatch(combos);
          case 1:
            products = _context4.v;
            _products$map = products.map(function (product, i) {
              return i === 0 ? product : Object.assign({}, combosMeta[i], product);
            }), prev = _products$map[0], selections = _arrayLikeToArray(_products$map).slice(1);
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
   * @param {boolean} isVariant fetch the matching SKU/variant's own price instead of the base product + modifiers
   * @returns {Promise<{ pricesWithTax: { basePrice: { value: number, currencyCode: string }, price: { value: number, currencyCode: string }, salePrice: { value: number, currencyCode: string } }, pricesWithoutTax: { basePrice: { value: number, currencyCode: string }, price: { value: number, currencyCode: string }, salePrice: { value: number, currencyCode: string } } }>
   */
  ;
  _proto.fetchOptionPrice =
  /*#__PURE__*/
  function () {
    var _fetchOptionPrice = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(optionValueIds) {
      var _yield$this$fetchOpti, product;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return this.fetchOptionPricesBatch([optionValueIds]);
          case 1:
            _yield$this$fetchOpti = _context5.v;
            product = _yield$this$fetchOpti[0];
            return _context5.a(2, product);
        }
      }, _callee5, this);
    }));
    function fetchOptionPrice(_x8) {
      return _fetchOptionPrice.apply(this, arguments);
    }
    return fetchOptionPrice;
  }()
  /**
   * Fetch prices for multiple option-value combinations, merging as many as possible into a
   * single GraphQL request (via aliases) instead of one request per combination, to cut down
   * on the number of network round-trips (the main cost, not payload size).
   *
   * @param {Array<Array<{ optionEntityId: number, valueEntityId: number}>>} combos
   * @param {Array<boolean>} isVariantFlags per-combo: look up the matching variant/SKU price
   *   (needed for "variant option" attributes, which define separate SKUs) instead of the
   *   base product price + modifier adjustment
   * @returns {Promise<Array<{ pricesWithTax: object, pricesWithoutTax: object }>>} results, same order/length as `combos`
   */
  ;
  _proto.fetchOptionPricesBatch =
  /*#__PURE__*/
  function () {
    var _fetchOptionPricesBatch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(combos) {
      var _this12 = this;
      var BATCH_CHUNK_SIZE, cacheKeys, uncachedIndexes, chunks, i;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            BATCH_CHUNK_SIZE = 8;
            cacheKeys = combos.map(function (combo) {
              return "product:" + JSON.stringify(combo);
            });
            uncachedIndexes = cacheKeys.map(function (key, index) {
              return _this12.fetchOptionPriceCache[key] ? null : index;
            }).filter(function (index) {
              return index !== null;
            });
            chunks = [];
            for (i = 0; i < uncachedIndexes.length; i += BATCH_CHUNK_SIZE) {
              chunks.push(uncachedIndexes.slice(i, i + BATCH_CHUNK_SIZE));
            }
            _context7.n = 1;
            return handlePromisesWithLimit(chunks.map(function (chunkIndexes) {
              return /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
                var variableDefs, aliasFields, variables, resp, _t2;
                return _regenerator().w(function (_context6) {
                  while (1) switch (_context6.p = _context6.n) {
                    case 0:
                      variableDefs = chunkIndexes.map(function (i) {
                        return "$optionValueIds" + i + ": [OptionValueId!]";
                      }).join(', ');
                      aliasFields = chunkIndexes.map(function (i) {
                        return "\n                f" + i + ": product(entityId: $productId, optionValueIds: $optionValueIds" + i + ") {\n                    pricesWithTax: prices(currencyCode: $currencyCode, includeTax: true) {\n                        ...PriceFields\n                    }\n                    pricesWithoutTax: prices(currencyCode: $currencyCode, includeTax: false) {\n                        ...PriceFields\n                    }\n                }\n            ";
                      }).join('\n');
                      variables = {
                        productId: _this12.productId,
                        currencyCode: _this12.context.active_currency_code
                      };
                      chunkIndexes.forEach(function (i) {
                        variables["optionValueIds" + i] = combos[i];
                      });
                      _context6.p = 1;
                      _context6.n = 2;
                      return $.ajax({
                        url: '/graphql',
                        method: 'POST',
                        contentType: 'application/json',
                        headers: {
                          'Content-Type': 'application/json',
                          Authorization: "Bearer " + _this12.context.graphQLToken
                        },
                        xhrFields: {
                          withCredentials: true
                        },
                        data: JSON.stringify({
                          query: "\n                            query ($productId: Int!, $currencyCode: currencyCode!, " + variableDefs + ") {\n                                site {\n                                    " + aliasFields + "\n                                }\n                            }\n                            fragment MoneyFields on Money {\n                                value\n                                currencyCode\n                            }\n                            fragment PriceFields on Prices {\n                                basePrice {\n                                    ...MoneyFields\n                                }\n                                price {\n                                    ...MoneyFields\n                                }\n                                salePrice {\n                                    ...MoneyFields\n                                }\n                            }\n                        ",
                          variables: variables
                        })
                      });
                    case 2:
                      resp = _context6.v;
                      chunkIndexes.forEach(function (i) {
                        var _resp$data;
                        var result = (_resp$data = resp.data) == null || (_resp$data = _resp$data.site) == null ? void 0 : _resp$data["f" + i];
                        _this12.fetchOptionPriceCache[cacheKeys[i]] = result;
                      });
                      _context6.n = 4;
                      break;
                    case 3:
                      _context6.p = 3;
                      _t2 = _context6.v;
                      // don't let one bad chunk (e.g. an unsupported variant pricing query on this
                      // store) take down pricing for every other option on the page
                      _this12.console.log('ProductDetails - fetchOptionPricesBatch chunk failed: ', _t2);
                    case 4:
                      return _context6.a(2);
                  }
                }, _callee6, null, [[1, 3]]);
              }));
            }), 4);
          case 1:
            return _context7.a(2, cacheKeys.map(function (key) {
              return _this12.fetchOptionPriceCache[key];
            }));
        }
      }, _callee7);
    }));
    function fetchOptionPricesBatch(_x9) {
      return _fetchOptionPricesBatch.apply(this, arguments);
    }
    return fetchOptionPricesBatch;
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
    var _this13 = this;
    // Display tooltip
    Object.entries(tooltips).forEach(function (_ref26) {
      var optionId = _ref26[0],
        _ref26$ = _ref26[1],
        tooltip = _ref26$.tooltip,
        valueTooltips = _ref26$.valueTooltips;
      if (!showOptionIds.includes(Number(optionId))) return;
      var $option = $modifiersModalOptions.find("[data-product-attribute-id=\"" + optionId + "\"]");
      if (tooltip) {
        var $tooltip = $(_this13.optionTooltipTemplate.replace('<%tooltip%>', tooltip)).attr('data-eyeva-product-option-tooltip-id', optionId);
        $option.find("[data-eyeva-product-option-tooltip-id=\"" + optionId + "\"]").remove();
        var $label = $option.find('label').first();
        if ($label.length > 0) {
          $label.after($tooltip);
        } else {
          $option.prepend($tooltip);
        }
      }
      Object.entries(valueTooltips).forEach(function (_ref27) {
        var valueId = _ref27[0],
          valueTooltip = _ref27[1];
        var $value = $option.find("[data-product-attribute-value=\"" + valueId + "\"]");
        var $tooltip = $(_this13.optionValueTooltipTemplate.replace('<%tooltip%>', valueTooltip)).attr('data-eyeva-product-option-tooltip-id', optionId + "-" + valueId);
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
    Object.entries(tooltipHeadings).filter(function (_ref28) {
      var optionId = _ref28[0];
      return showOptionIds.includes(Number(optionId));
    }).forEach(function (_ref29) {
      var optionId = _ref29[0],
        valueTooltipHeadings = _ref29[1];
      var $option = $modifiersModalOptions.find("[data-product-attribute-id=\"" + optionId + "\"]");
      Object.entries(valueTooltipHeadings).forEach(function (_ref30) {
        var valueId = _ref30[0],
          valueTooltipHeading = _ref30[1];
        var $value = $option.find("[data-product-attribute-value=\"" + valueId + "\"]");
        var $tooltipHeading = $(_this13.optionValueTooltipHeadingTemplate.replace('<%heading%>', valueTooltipHeading)).attr('data-eyeva-product-option-tooltip-heading-id', optionId + "-" + valueId);
        $value.find("[data-eyeva-product-option-tooltip-heading-id=\"" + optionId + "-" + valueId + "\"]").remove();
        $value.append($tooltipHeading);
      });
    });
  };
  _proto.renderInlineOptionTooltips = function renderInlineOptionTooltips() {
    var _this14 = this;
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
    this.productOptions.filter(function (_ref31) {
      var id = _ref31.id;
      return optionIds.includes(id);
    }).forEach(function (option) {
      _this14.customFields.forEach(function (customField) {
        var tooltipMatch = _this14.customFieldMatchTooltip({
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
        var valueTooltipHeadings = _this14.customFieldMatchTooltipHeading({
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
  _proto.renderSpecTooltips = function renderSpecTooltips() {
    var _this15 = this;
    var prefix = '__@spec_tooltip ';

    // ---------------------------------------------------------------
    // MASTER SPEC TOOLTIPS
    // Add entries here to show a tooltip on every product page for
    // that spec row automatically. No custom field needed per product.
    // Per-product custom fields (e.g. __@spec_tooltip Memory) will
    // override these values if present.
    // ---------------------------------------------------------------
    var masterTooltips = {
      'Memory': 'Not sure if this is the right amount of memory for your needs? Refer to our blog on <a href="https://www.bobjohnson.com/blog/how-much-ram-do-you-actually-need-in-a-rugged-laptop/" target="_blank">RAM Needs in a rugged laptop</a>.'
      // 'Storage': 'The drive where your files and OS are stored.',
      // 'Processor': 'The CPU is the brain of the computer.',
    };

    // Remove any previously injected spec tooltips
    this.$scope.find('[data-eyeva-spec-tooltip]').remove();

    // Build final map: start with master defaults, override with per-product custom fields
    var resolvedTooltips = Object.assign({}, masterTooltips);
    this.customFields.forEach(function (_ref32) {
      var name = _ref32.name,
        value = _ref32.value;
      if (!name.startsWith(prefix)) {
        return;
      }
      var specName = name.slice(prefix.length).trim();
      if (specName && value) {
        resolvedTooltips[specName] = value;
      }
    });
    Object.entries(resolvedTooltips).forEach(function (_ref33) {
      var specName = _ref33[0],
        tooltipText = _ref33[1];
      var $dd = _this15.$scope.find("[data-spec-name=\"" + specName + "\"]").first();
      if (!$dd.length) {
        return;
      }
      var $tooltip = $(_this15.optionTooltipTemplate.replace('<%tooltip%>', tooltipText)).attr('data-eyeva-spec-tooltip', specName);
      $dd.append($tooltip);
    });
  };
  _proto.showInlineOptionTooltips = function showInlineOptionTooltips($productOptionsEl, tooltips, tooltipHeadings) {
    var _this16 = this;
    Object.entries(tooltips).forEach(function (_ref34) {
      var optionId = _ref34[0],
        _ref34$ = _ref34[1],
        tooltip = _ref34$.tooltip,
        _ref34$$valueTooltips = _ref34$.valueTooltips,
        valueTooltips = _ref34$$valueTooltips === void 0 ? {} : _ref34$$valueTooltips;
      var $option = $productOptionsEl.find("[data-product-attribute-id=\"" + optionId + "\"]");
      if (!$option.length) {
        return;
      }
      if (tooltip) {
        var $tooltip = $(_this16.optionTooltipTemplate.replace('<%tooltip%>', tooltip)).attr('data-eyeva-product-option-tooltip-id', optionId);
        var $label = $option.find('label').first();
        if ($label.length > 0) {
          $label.append($tooltip);
        } else {
          $option.prepend($tooltip);
        }
      }
      Object.entries(valueTooltips).forEach(function (_ref35) {
        var valueId = _ref35[0],
          valueTooltip = _ref35[1];
        var $value = $option.find("[data-product-attribute-value=\"" + valueId + "\"]").first();
        if (!$value.length) {
          return;
        }
        var $tooltip = $(_this16.optionValueTooltipTemplate.replace('<%tooltip%>', valueTooltip)).attr('data-eyeva-product-option-tooltip-id', optionId + "-" + valueId);
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
    Object.entries(tooltipHeadings).forEach(function (_ref36) {
      var optionId = _ref36[0],
        valueTooltipHeadings = _ref36[1];
      var $option = $productOptionsEl.find("[data-product-attribute-id=\"" + optionId + "\"]");
      if (!$option.length) {
        return;
      }
      Object.entries(valueTooltipHeadings).forEach(function (_ref37) {
        var valueId = _ref37[0],
          valueTooltipHeading = _ref37[1];
        var $value = $option.find("[data-product-attribute-value=\"" + valueId + "\"]").first();
        if (!$value.length) {
          return;
        }
        var $tooltipHeading = $(_this16.optionValueTooltipHeadingTemplate.replace('<%heading%>', valueTooltipHeading)).attr('data-eyeva-product-option-tooltip-heading-id', optionId + "-" + valueId);
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
    var shownOptions = this.productOptions.filter(function (_ref38) {
      var id = _ref38.id;
      return showOptionIds.includes(id);
    });

    /**
     * options that has default value
     */
    var defaultOptions = shownOptions.filter(function (_ref39) {
      var prefill = _ref39.prefill,
        selected_date = _ref39.selected_date,
        values = _ref39.values;
      return prefill || selected_date && (selected_date.day || selected_date.month || selected_date.year) || (values == null ? void 0 : values.find(function (_ref40) {
        var selected = _ref40.selected;
        return selected;
      }));
    });

    /**
     * checkbox type options
     */
    var checkboxOptions = shownOptions.filter(function (_ref41) {
      var noValue = _ref41.noValue,
        value = _ref41.value;
      return noValue || value;
    });

    /**
     * file type options
     */
    var fileOptions = shownOptions.filter(function (_ref42) {
      var partial = _ref42.partial;
      return partial === 'input-file';
    });

    /**
     * date type options
     */
    var dateOptions = shownOptions.filter(function (_ref43) {
      var partial = _ref43.partial;
      return partial === 'date';
    });

    /**
     * dropdown type options
     */
    var dropdownOptions = shownOptions.filter(function (_ref44) {
      var required = _ref44.required,
        partial = _ref44.partial;
      return !required && partial === 'set-select';
    });

    /**
     * text / multiline / number options
     */
    var textOptions = shownOptions.filter(function (_ref45) {
      var partial = _ref45.partial;
      return partial === 'input-text' || partial === 'textarea' || partial === 'input-numbers';
    });
    if (showOptionIds.length > 1 || defaultOptions.length > 0 || checkboxOptions.length > 0 || fileOptions.length > 0 || dateOptions.length > 0 || dropdownOptions.length > 0 || textOptions.length > 0) {
      // show continue button
      $modifiersModalContinue.show();

      // stop auto update the modifiers view until the continue button is clicked
      this.manualUpdateModifiersView = true;

      // populate default values to the shown options
      defaultOptions.forEach(function (_ref46) {
        var _values$find;
        var id = _ref46.id,
          prefill = _ref46.prefill,
          selected_date = _ref46.selected_date,
          values = _ref46.values;
        var valueId = values == null || (_values$find = values.find(function (_ref47) {
          var selected = _ref47.selected;
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
      checkboxOptions.forEach(function (_ref48) {
        var id = _ref48.id,
          checked = _ref48.checked,
          value = _ref48.value,
          noValue = _ref48.noValue;
        if (checked) {
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"hidden\"]").val(value);
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"checkbox\"]").prop('checked', true);
        } else {
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"hidden\"]").val(noValue);
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"checkbox\"]").prop('checked', false);
        }
      });

      // mark file input, date input, dropdown select, text input as shown
      [].concat(fileOptions, dateOptions, dropdownOptions, textOptions).forEach(function (_ref49) {
        var id = _ref49.id;
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
   */
  /**
   * Auto-calculate and display each option value's price adjustment (e.g. "(+$100.00)")
   * next to its label on the plain (non-modal) option list, so admins no longer need to
   * manually type the price difference into the option value name.
   */;
  _proto.initInlineOptionPriceHints = function initInlineOptionPriceHints() {
    var _this$productOptions,
      _this17 = this;
    if (this.enableModifiersModal) return;
    var $form = this.$scope.find('[data-cart-item-add]').first();
    var $productOptionsEl = $form.find('[data-product-option-change]').first();
    if ($productOptionsEl.length === 0 || !((_this$productOptions = this.productOptions) != null && _this$productOptions.length)) return;
    var formData = new FormData($form[0]);
    var showOptionIds = this.productOptions.map(function (_ref50) {
      var id = _ref50.id;
      return id;
    });
    this.showOptionPrices($productOptionsEl, $(), showOptionIds, formData, {}, true)["catch"](function (err) {
      return _this17.console.log('ProductDetails - initInlineOptionPriceHints failed: ', err);
    });
  };
  _proto.showOptionPrices = /*#__PURE__*/function () {
    var _showOptionPrices = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8($modifiersModalOptions, $modifiersModalSubtotal, showOptionIds, formData, noneSales, ignoreUpdateSubtotal) {
      var _this18 = this;
      var _yield$Promise$all, settings, _yield$Promise$all$, prev, selections, showPrice;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            if (ignoreUpdateSubtotal === void 0) {
              ignoreUpdateSubtotal = false;
            }
            _context8.n = 1;
            return Promise.all([this.fetchSettings(), this.fetchOptionPrices(showOptionIds.map(function (_id) {
              return _this18.productOptions.find(function (_ref51) {
                var id = _ref51.id;
                return id === _id;
              });
            }), formData)]);
          case 1:
            _yield$Promise$all = _context8.v;
            settings = _yield$Promise$all[0];
            _yield$Promise$all$ = _yield$Promise$all[1];
            prev = _yield$Promise$all$[0];
            selections = _arrayLikeToArray(_yield$Promise$all$).slice(1);
            showPrice = function showPrice(value) {
              if (value == null || Math.abs(Number(value)) < 0.005) {
                return '';
              }
              return _this18.formatPrice(value, true);
            };
            selections.forEach(function (_ref52) {
              var _adjustedPricesWithTa, _adjustedPricesWithTa2, _adjustedPricesWithou, _adjustedPricesWithou2;
              var optionId = _ref52.optionId,
                valueId = _ref52.valueId,
                adjustedPricesWithTax = _ref52.adjustedPricesWithTax,
                adjustedPricesWithoutTax = _ref52.adjustedPricesWithoutTax;
              var params = Object.assign({}, settings.tax.pdp !== 'EX' ? {
                priceWithTaxValue: adjustedPricesWithTax == null || (_adjustedPricesWithTa = adjustedPricesWithTax.price) == null ? void 0 : _adjustedPricesWithTa.value,
                priceWithTax: showPrice(adjustedPricesWithTax == null || (_adjustedPricesWithTa2 = adjustedPricesWithTax.price) == null ? void 0 : _adjustedPricesWithTa2.value),
                nonSalePriceWithTaxValue: adjustedPricesWithTax != null && adjustedPricesWithTax.nonSalePriceValue ? adjustedPricesWithTax == null ? void 0 : adjustedPricesWithTax.nonSalePriceValue : '',
                nonSalePriceWithTax: adjustedPricesWithTax != null && adjustedPricesWithTax.nonSalePriceValue ? _this18.formatPrice(adjustedPricesWithTax == null ? void 0 : adjustedPricesWithTax.nonSalePriceValue, true) : ''
              } : {}, settings.tax.pdp !== 'INC' ? {
                priceWithoutTaxValue: adjustedPricesWithoutTax == null || (_adjustedPricesWithou = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou.value,
                priceWithoutTax: showPrice(adjustedPricesWithoutTax == null || (_adjustedPricesWithou2 = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou2.value),
                nonSalePriceWithoutTaxValue: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue : '',
                nonSalePriceWithoutTax: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? _this18.formatPrice(adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue, true) : ''
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
                      nonSalePriceWithTax: _this18.formatPrice(exchangedNonSale, true)
                    } : {}, settings.tax.pdp !== 'INC' ? {
                      nonSalePriceWithoutTaxValue: exchangedNonSale,
                      nonSalePriceWithoutTax: _this18.formatPrice(exchangedNonSale, true)
                    } : {});
                  }
                }
                var priceHtml = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this18.optionPriceTemplate, params, null, ['<%', '%>']);
                var priceText = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this18.optionPricePlainTemplate, params, null, ['<%', '%>']);
                var $price = $(priceHtml).attr('data-eyeva-product-option-price-id', optionId + "-" + valueId);
                var $option = $modifiersModalOptions.find("[data-product-attribute-id=\"" + optionId + "\"]");
                // scope to the label only: some layouts (e.g. image list items) also put
                // data-product-attribute-value on the surrounding <li>, which would otherwise
                // match too and duplicate the price
                var $value = $option.find("label[data-product-attribute-value=\"" + valueId + "\"], option[data-product-attribute-value=\"" + valueId + "\"]");

                // don't show a price for out-of-stock/unavailable values
                if ($value.hasClass('unavailable')) {
                  $value.find("[data-eyeva-product-option-price-id=\"" + optionId + "-" + valueId + "\"]").remove();
                  return;
                }
                var priceSelector = "[data-eyeva-product-option-price-id=\"" + optionId + "-" + valueId + "\"]";
                if (!params.priceWithTax && !params.priceWithoutTax) {
                  $value.find(priceSelector).remove();
                  return;
                }
                if ($value.is('option')) {
                  if (!$value.data('originalText')) {
                    $value.data('originalText', $value.text());
                  }
                  $value.text($value.data('originalText') + " " + priceText);
                  $value.data('priceHtml', priceHtml);
                } else {
                  $value.find(priceSelector).remove();
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
            return _context8.a(2);
        }
      }, _callee8, this);
    }));
    function showOptionPrices(_x0, _x1, _x10, _x11, _x12, _x13) {
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
      var valueLabel = ((_option$values = option.values) == null || (_option$values = _option$values.find(function (_ref53) {
        var id = _ref53.id;
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
    _this.bindRenewingDataPlanVisibility($productOptionsElement);
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
      _this.toggleRenewingDataPlanFields($productOptionsElement);
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
      if ($(value).is(':hidden') || value.getAttribute('aria-hidden') === 'true') {
        return;
      }
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
  };
  _proto.bindRenewingDataPlanVisibility = function bindRenewingDataPlanVisibility($productOptionsElement) {
    var _this3 = this;
    $productOptionsElement.off('change.renewingDataPlan', '[name="attribute[13303]"]');
    $productOptionsElement.on('change.renewingDataPlan', '[name="attribute[13303]"]', function () {
      _this3.toggleRenewingDataPlanFields($productOptionsElement);
    });
    this.toggleRenewingDataPlanFields($productOptionsElement);
  };
  _proto.toggleRenewingDataPlanFields = function toggleRenewingDataPlanFields($productOptionsElement) {
    var _this4 = this;
    if (!$productOptionsElement || $productOptionsElement.length === 0) {
      return;
    }
    var $renewingRadio = $productOptionsElement.find('[name="attribute[13303]"][value="1698"]').first();
    if ($renewingRadio.length === 0) {
      return;
    }
    var shouldHideFields = $renewingRadio.is(':checked');
    var fieldIds = [13304, 13305, 13306];
    fieldIds.forEach(function (fieldId) {
      var $field = $productOptionsElement.find("[data-product-attribute-id=\"" + fieldId + "\"]").first();
      if ($field.length === 0) {
        return;
      }
      if (shouldHideFields) {
        _this4.disableHiddenModifierField($field);
        $field.css('display', 'none').attr('aria-hidden', 'true').removeClass('form-field--error');
      } else {
        _this4.enableShownModifierField($field);
        $field.css('display', '').attr('aria-hidden', 'false');
      }
    });
  };
  _proto.disableHiddenModifierField = function disableHiddenModifierField($field) {
    $field.find('input:not([type="hidden"]), select, textarea').each(function (_i, el) {
      var $el = $(el);
      if (!$el.is('[data-original-required]')) {
        $el.attr('data-original-required', $el.prop('required') ? 'true' : 'false');
      }
      $el.prop('required', false).removeAttr('required');
      if ($el.is(':checkbox, :radio')) {
        $el.prop('checked', false);
      } else if ($el.is('select')) {
        $el.prop('selectedIndex', 0);
      } else {
        $el.val('');
      }
    });
  };
  _proto.enableShownModifierField = function enableShownModifierField($field) {
    $field.find('input:not([type="hidden"]), select, textarea').each(function (_i, el) {
      var $el = $(el);
      var wasRequired = $el.attr('data-original-required') === 'true';
      $el.prop('required', wasRequired);
      if (wasRequired) {
        $el.attr('required', '');
      } else {
        $el.removeAttr('required');
      }
    });
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
    var _this5 = this;
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
      _this5.updateProductAttributes(productAttributesData);
      _this5.updateView(productAttributesData, productAttributesContent);
      _this5.toggleRenewingDataPlanFields($form.find('[data-product-option-change]'));
      _this5.updateProductDetailsData();
      _utils_banner_utils__WEBPACK_IMPORTED_MODULE_13__["default"].dispatchProductBannerEvent(productAttributesData);
      if (!_this5.checkIsQuickViewChild($form)) {
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
    var _this6 = this;
    this.$scope.on('click', '[data-quantity-change] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var viewModel = _this6.getViewModel(_this6.$scope);
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
      _this6.addToCartValidator.performCheck();
      _this6.updateProductDetailsData();
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
      _this6.updateProductDetailsData();
    });
  }

  /**
   *
   * Add a product to cart
   *
   */;
  _proto.addProductToCart = function addProductToCart(event, form) {
    var _this7 = this;
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
      _this7.$overlay.hide();

      // Guard statement
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        if (!_this7.checkIsQuickViewChild($addToCartBtn)) {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.alertModal)().$preModalFocusedEl = $addToCartBtn;
        }
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(tmp.textContent || tmp.innerText);
      }

      // Open preview modal and update content
      if (_this7.previewModal) {
        _this7.previewModal.open();
        if (window.ApplePaySession) {
          _this7.previewModal.$modal.addClass('apple-pay-supported');
        }
        if (!_this7.checkIsQuickViewChild($addToCartBtn)) {
          _this7.previewModal.$preModalFocusedEl = $addToCartBtn;
        }
        _this7.updateCartContent(_this7.previewModal, response.data.cart_item.id);
      } else {
        _this7.$overlay.show();
        // if no modal, redirect to the cart page
        _this7.redirectTo(response.data.cart_item.cart_url || _this7.context.urls.cart);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX3Byb2R1Y3QtZGV0YWlsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEsR0FBQVIsQ0FBQSxFQUFBSCxDQUFBLE9BQUFpQixDQUFBLElBQUFGLENBQUEsS0FBQVYsQ0FBQSxJQUFBTCxDQUFBLEdBQUFnQixDQUFBLENBQUFPLE1BQUEsRUFBQXZCLENBQUEsVUFBQUssQ0FBQSxFQUFBRSxDQUFBLEdBQUFTLENBQUEsQ0FBQWhCLENBQUEsR0FBQXFCLENBQUEsR0FBQUgsQ0FBQSxDQUFBRixDQUFBLEVBQUFRLENBQUEsR0FBQWpCLENBQUEsS0FBQU4sQ0FBQSxRQUFBSSxDQUFBLEdBQUFtQixDQUFBLEtBQUFyQixDQUFBLE1BQUFRLENBQUEsR0FBQUosQ0FBQSxFQUFBQyxDQUFBLEdBQUFELENBQUEsWUFBQUMsQ0FBQSxXQUFBRCxDQUFBLE1BQUFBLENBQUEsTUFBQVIsQ0FBQSxJQUFBUSxDQUFBLE9BQUFjLENBQUEsTUFBQWhCLENBQUEsR0FBQUosQ0FBQSxRQUFBb0IsQ0FBQSxHQUFBZCxDQUFBLFFBQUFDLENBQUEsTUFBQVUsQ0FBQSxDQUFBQyxDQUFBLEdBQUFoQixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBSSxDQUFBLE9BQUFjLENBQUEsR0FBQUcsQ0FBQSxLQUFBbkIsQ0FBQSxHQUFBSixDQUFBLFFBQUFNLENBQUEsTUFBQUosQ0FBQSxJQUFBQSxDQUFBLEdBQUFxQixDQUFBLE1BQUFqQixDQUFBLE1BQUFOLENBQUEsRUFBQU0sQ0FBQSxNQUFBSixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBcUIsQ0FBQSxFQUFBaEIsQ0FBQSxjQUFBSCxDQUFBLElBQUFKLENBQUEsYUFBQW1CLENBQUEsUUFBQUgsQ0FBQSxPQUFBZCxDQUFBLHFCQUFBRSxDQUFBLEVBQUFXLENBQUEsRUFBQVEsQ0FBQSxRQUFBVCxDQUFBLFlBQUFVLFNBQUEsdUNBQUFSLENBQUEsVUFBQUQsQ0FBQSxJQUFBSyxDQUFBLENBQUFMLENBQUEsRUFBQVEsQ0FBQSxHQUFBaEIsQ0FBQSxHQUFBUSxDQUFBLEVBQUFMLENBQUEsR0FBQWEsQ0FBQSxHQUFBeEIsQ0FBQSxHQUFBUSxDQUFBLE9BQUFULENBQUEsR0FBQVksQ0FBQSxNQUFBTSxDQUFBLEtBQUFWLENBQUEsS0FBQUMsQ0FBQSxHQUFBQSxDQUFBLFFBQUFBLENBQUEsU0FBQVUsQ0FBQSxDQUFBZixDQUFBLFFBQUFrQixDQUFBLENBQUFiLENBQUEsRUFBQUcsQ0FBQSxLQUFBTyxDQUFBLENBQUFmLENBQUEsR0FBQVEsQ0FBQSxHQUFBTyxDQUFBLENBQUFDLENBQUEsR0FBQVIsQ0FBQSxhQUFBSSxDQUFBLE1BQUFSLENBQUEsUUFBQUMsQ0FBQSxLQUFBSCxDQUFBLFlBQUFMLENBQUEsR0FBQU8sQ0FBQSxDQUFBRixDQUFBLFdBQUFMLENBQUEsR0FBQUEsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLFVBQUFjLFNBQUEsMkNBQUF6QixDQUFBLENBQUEyQixJQUFBLFNBQUEzQixDQUFBLEVBQUFXLENBQUEsR0FBQVgsQ0FBQSxDQUFBNEIsS0FBQSxFQUFBcEIsQ0FBQSxTQUFBQSxDQUFBLG9CQUFBQSxDQUFBLEtBQUFSLENBQUEsR0FBQU8sQ0FBQSxlQUFBUCxDQUFBLENBQUEwQixJQUFBLENBQUFuQixDQUFBLEdBQUFDLENBQUEsU0FBQUcsQ0FBQSxHQUFBYyxTQUFBLHVDQUFBcEIsQ0FBQSxnQkFBQUcsQ0FBQSxPQUFBRCxDQUFBLEdBQUFSLENBQUEsY0FBQUMsQ0FBQSxJQUFBaUIsQ0FBQSxHQUFBQyxDQUFBLENBQUFmLENBQUEsUUFBQVEsQ0FBQSxHQUFBVixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLEVBQUFlLENBQUEsT0FBQUUsQ0FBQSxrQkFBQXBCLENBQUEsSUFBQU8sQ0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsTUFBQUcsQ0FBQSxHQUFBWCxDQUFBLGNBQUFlLENBQUEsbUJBQUFhLEtBQUEsRUFBQTVCLENBQUEsRUFBQTJCLElBQUEsRUFBQVYsQ0FBQSxTQUFBaEIsQ0FBQSxFQUFBSSxDQUFBLEVBQUFFLENBQUEsUUFBQUksQ0FBQSxRQUFBUyxDQUFBLGdCQUFBVixVQUFBLGNBQUFtQixrQkFBQSxjQUFBQywyQkFBQSxLQUFBOUIsQ0FBQSxHQUFBWSxNQUFBLENBQUFtQixjQUFBLE1BQUF2QixDQUFBLE1BQUFMLENBQUEsSUFBQUgsQ0FBQSxDQUFBQSxDQUFBLElBQUFHLENBQUEsU0FBQVcsbUJBQUEsQ0FBQWQsQ0FBQSxPQUFBRyxDQUFBLGlDQUFBSCxDQUFBLEdBQUFXLENBQUEsR0FBQW1CLDBCQUFBLENBQUFyQixTQUFBLEdBQUFDLFNBQUEsQ0FBQUQsU0FBQSxHQUFBRyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxZQUFBTyxFQUFBaEIsQ0FBQSxXQUFBYSxNQUFBLENBQUFvQixjQUFBLEdBQUFwQixNQUFBLENBQUFvQixjQUFBLENBQUFqQyxDQUFBLEVBQUErQiwwQkFBQSxLQUFBL0IsQ0FBQSxDQUFBa0MsU0FBQSxHQUFBSCwwQkFBQSxFQUFBaEIsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBTSxDQUFBLHlCQUFBTixDQUFBLENBQUFVLFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFGLENBQUEsR0FBQVosQ0FBQSxXQUFBOEIsaUJBQUEsQ0FBQXBCLFNBQUEsR0FBQXFCLDBCQUFBLEVBQUFoQixtQkFBQSxDQUFBSCxDQUFBLGlCQUFBbUIsMEJBQUEsR0FBQWhCLG1CQUFBLENBQUFnQiwwQkFBQSxpQkFBQUQsaUJBQUEsR0FBQUEsaUJBQUEsQ0FBQUssV0FBQSx3QkFBQXBCLG1CQUFBLENBQUFnQiwwQkFBQSxFQUFBekIsQ0FBQSx3QkFBQVMsbUJBQUEsQ0FBQUgsQ0FBQSxHQUFBRyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFOLENBQUEsZ0JBQUFTLG1CQUFBLENBQUFILENBQUEsRUFBQVIsQ0FBQSxpQ0FBQVcsbUJBQUEsQ0FBQUgsQ0FBQSw4REFBQXdCLFlBQUEsWUFBQUEsYUFBQSxhQUFBQyxDQUFBLEVBQUE3QixDQUFBLEVBQUE4QixDQUFBLEVBQUF0QixDQUFBO0FBQUEsU0FBQUQsb0JBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUEsUUFBQU8sQ0FBQSxHQUFBSyxNQUFBLENBQUEwQixjQUFBLFFBQUEvQixDQUFBLHVCQUFBUixDQUFBLElBQUFRLENBQUEsUUFBQU8sbUJBQUEsWUFBQXlCLG1CQUFBeEMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQSxhQUFBSyxFQUFBSixDQUFBLEVBQUFFLENBQUEsSUFBQVcsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBRSxDQUFBLFlBQUFGLENBQUEsZ0JBQUF5QyxPQUFBLENBQUF2QyxDQUFBLEVBQUFFLENBQUEsRUFBQUosQ0FBQSxTQUFBRSxDQUFBLEdBQUFNLENBQUEsR0FBQUEsQ0FBQSxDQUFBUixDQUFBLEVBQUFFLENBQUEsSUFBQTJCLEtBQUEsRUFBQXpCLENBQUEsRUFBQXNDLFVBQUEsR0FBQXpDLENBQUEsRUFBQTBDLFlBQUEsR0FBQTFDLENBQUEsRUFBQTJDLFFBQUEsR0FBQTNDLENBQUEsTUFBQUQsQ0FBQSxDQUFBRSxDQUFBLElBQUFFLENBQUEsSUFBQUUsQ0FBQSxhQUFBQSxDQUFBLGNBQUFBLENBQUEsbUJBQUFTLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBNEMsbUJBQUF6QyxDQUFBLEVBQUFILENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFJLENBQUEsRUFBQWUsQ0FBQSxFQUFBWixDQUFBLGNBQUFELENBQUEsR0FBQUosQ0FBQSxDQUFBaUIsQ0FBQSxFQUFBWixDQUFBLEdBQUFHLENBQUEsR0FBQUosQ0FBQSxDQUFBcUIsS0FBQSxXQUFBekIsQ0FBQSxnQkFBQUosQ0FBQSxDQUFBSSxDQUFBLEtBQUFJLENBQUEsQ0FBQW9CLElBQUEsR0FBQTNCLENBQUEsQ0FBQVcsQ0FBQSxJQUFBa0MsT0FBQSxDQUFBQyxPQUFBLENBQUFuQyxDQUFBLEVBQUFvQyxJQUFBLENBQUE5QyxDQUFBLEVBQUFJLENBQUE7QUFBQSxTQUFBMkMsa0JBQUE3QyxDQUFBLDZCQUFBSCxDQUFBLFNBQUFELENBQUEsR0FBQWtELFNBQUEsYUFBQUosT0FBQSxXQUFBNUMsQ0FBQSxFQUFBSSxDQUFBLFFBQUFlLENBQUEsR0FBQWpCLENBQUEsQ0FBQStDLEtBQUEsQ0FBQWxELENBQUEsRUFBQUQsQ0FBQSxZQUFBb0QsTUFBQWhELENBQUEsSUFBQXlDLGtCQUFBLENBQUF4QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQThDLEtBQUEsRUFBQUMsTUFBQSxVQUFBakQsQ0FBQSxjQUFBaUQsT0FBQWpELENBQUEsSUFBQXlDLGtCQUFBLENBQUF4QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQThDLEtBQUEsRUFBQUMsTUFBQSxXQUFBakQsQ0FBQSxLQUFBZ0QsS0FBQTtBQUFBLFNBQUFFLGVBQUFyRCxDQUFBLEVBQUFLLENBQUEsSUFBQUwsQ0FBQSxDQUFBUyxTQUFBLEdBQUFHLE1BQUEsQ0FBQUMsTUFBQSxDQUFBUixDQUFBLENBQUFJLFNBQUEsR0FBQVQsQ0FBQSxDQUFBUyxTQUFBLENBQUE2QyxXQUFBLEdBQUF0RCxDQUFBLEVBQUF1RCxlQUFBLENBQUF2RCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBa0QsZ0JBQUF2RCxDQUFBLEVBQUFELENBQUEsV0FBQXdELGVBQUEsR0FBQTNDLE1BQUEsQ0FBQW9CLGNBQUEsR0FBQXBCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsSUFBQSxlQUFBdEIsQ0FBQSxFQUFBRCxDQUFBLFdBQUFDLENBQUEsQ0FBQWlDLFNBQUEsR0FBQWxDLENBQUEsRUFBQUMsQ0FBQSxLQUFBdUQsZUFBQSxDQUFBdkQsQ0FBQSxFQUFBRCxDQUFBO0FBRGtCO0FBQ2M7QUFDYTtBQUNNO0FBQ3FCO0FBRXhFLElBQU02RCxZQUFZLEdBQUcsR0FBRztBQUFDLElBQ25CQyxpQkFBaUI7RUFvR25CO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSSxTQUFBQSxrQkFBWUMsWUFBWSxFQUFTQyxRQUFRLEVBQVM7SUFBQSxJQUF0Q0QsWUFBWTtNQUFaQSxZQUFZLEdBQUcsSUFBSTtJQUFBO0lBQUEsSUFBRUMsUUFBUTtNQUFSQSxRQUFRLEdBQUcsSUFBSTtJQUFBO0lBQUEsS0F4R2hEQyxhQUFhO0lBeUdULElBQUksQ0FBQ0YsWUFBWSxHQUFHQSxZQUFZO0lBQ2hDLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0UsS0FBSyxHQUFHQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRXRCLElBQUlKLFlBQVksSUFBSUMsUUFBUSxFQUFFO01BQzFCLElBQUksQ0FBQ0ksV0FBVyxDQUFDLENBQUM7SUFDdEI7RUFDSjtFQUFDLElBQUFDLE1BQUEsR0FBQVAsaUJBQUEsQ0FBQXBELFNBQUE7RUFBQTJELE1BQUEsQ0FFREMsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDVCxJQUFJLElBQUksQ0FBQ1AsUUFBUSxFQUFFO01BQ2Y7TUFDQSxJQUFJLENBQUNBLFFBQVEsQ0FDUlEsSUFBSSxDQUFDLGdHQUFnRyxDQUFDLENBQ3RHQSxJQUFJLENBQUMsK0RBQStELENBQUMsQ0FDckVDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FDWkMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7UUFDcEJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdEIsSUFBTUMsRUFBRSxHQUFHVixDQUFDLENBQUNRLEtBQUssQ0FBQ0csYUFBYSxDQUFDO1FBRWpDLElBQU1DLFFBQVEsR0FBR0YsRUFBRSxDQUFDRyxJQUFJLENBQUMseUJBQXlCLENBQUM7UUFDbkQsSUFBTUMsV0FBVyxHQUFHSixFQUFFLENBQUNHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztRQUN6RCxJQUFNRSxZQUFZLEdBQUdMLEVBQUUsQ0FBQ0csSUFBSSxDQUFDLDBCQUEwQixDQUFDO1FBQ3hELElBQU1HLE9BQU8sR0FBR04sRUFBRSxDQUFDRyxJQUFJLENBQUMseUJBQXlCLENBQUM7UUFDbEQsSUFBTUksSUFBSSxHQUFHUCxFQUFFLENBQUNRLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDN0QsTUFBTSxHQUFHLENBQUMsR0FDN0Q4RCxNQUFNLENBQUNQLFFBQVEsQ0FBQ1EsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUkxQixZQUFZLEdBQzlDLElBQUk7UUFFVlUsS0FBSSxDQUFDaUIsU0FBUyxDQUFDVCxRQUFRLEVBQUVFLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxPQUFPLEVBQUVDLElBQUksQ0FBQztNQUN0RSxDQUFDLENBQUM7SUFDVjs7SUFFQTtJQUNBLElBQUksQ0FBQ0ssYUFBYSxDQUFDakIsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUNFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3JGQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCTCxLQUFJLENBQUNtQixVQUFVLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJLENBQUNELGFBQWEsQ0FBQ2YsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDQyxLQUFLLEVBQUs7TUFDeEMsSUFBSUEsS0FBSyxDQUFDZ0IsR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUN4QmhCLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdEJMLEtBQUksQ0FBQ21CLFVBQVUsQ0FBQyxDQUFDO01BQ3JCO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBSSxDQUFDRCxhQUFhLENBQUNmLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3RDLElBQUlKLEtBQUksQ0FBQ2tCLGFBQWEsQ0FBQ0csRUFBRSxDQUFDakIsS0FBSyxDQUFDa0IsTUFBTSxDQUFDLEVBQUU7UUFDckNsQixLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RCTCxLQUFJLENBQUNtQixVQUFVLENBQUMsQ0FBQztNQUNyQjtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUksQ0FBQ0QsYUFBYSxDQUFDakIsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUNFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3BGQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCLElBQU1DLEVBQUUsR0FBR1YsQ0FBQyxDQUFDUSxLQUFLLENBQUNHLGFBQWEsQ0FBQztNQUNqQ1AsS0FBSSxDQUFDdUIsWUFBWSxDQUNiakIsRUFBRSxDQUFDRyxJQUFJLENBQUMseUJBQXlCLENBQUMsRUFDbENILEVBQUUsQ0FBQ0csSUFBSSxDQUFDLDRCQUE0QixDQUFDLEVBQ3JDSCxFQUFFLENBQUNHLElBQUksQ0FBQywwQkFBMEIsQ0FDdEMsQ0FBQztJQUNMLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUksQ0FBQ1MsYUFBYSxDQUFDakIsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUNFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ2pGQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCLElBQU1DLEVBQUUsR0FBR1YsQ0FBQyxDQUFDUSxLQUFLLENBQUNHLGFBQWEsQ0FBQztNQUNqQyxJQUFNSyxPQUFPLEdBQUdOLEVBQUUsQ0FBQ0csSUFBSSxDQUFDLHlCQUF5QixDQUFDO01BQ2xEVCxLQUFJLENBQUN3QixZQUFZLENBQUNaLE9BQU8sQ0FBQztJQUM5QixDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJLENBQUNNLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDRSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztNQUM1RkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUN0QixJQUFNQyxFQUFFLEdBQUdWLENBQUMsQ0FBQ1EsS0FBSyxDQUFDRyxhQUFhLENBQUM7TUFDakMsSUFBTWtCLFNBQVMsR0FBR25CLEVBQUUsQ0FBQ0csSUFBSSxDQUFDLG1DQUFtQyxDQUFDO01BQzlEVCxLQUFJLENBQUMwQixVQUFVLENBQ1hwQixFQUFFLENBQUNHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxFQUNsQ0gsRUFBRSxDQUFDRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsRUFDckNILEVBQUUsQ0FBQ0csSUFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQ25DZ0IsU0FDSixDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDUCxhQUFhLENBQUNqQixJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQ0UsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7TUFDNUZBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDdEJMLEtBQUksQ0FBQzJCLGVBQWUsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ1QsYUFBYSxDQUFDakIsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUNFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQ3hGQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCTCxLQUFJLENBQUM0QixXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNWLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDRSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztNQUN4RkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUN0QkwsS0FBSSxDQUFDNkIsT0FBTyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDWCxhQUFhLENBQUNqQixJQUFJLENBQUMsNENBQTRDLENBQUMsQ0FBQ0UsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7TUFDekZBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDdEJMLEtBQUksQ0FBQzhCLFFBQVEsQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQWhDLE1BQUEsQ0FFRGlDLFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFBLEVBQUc7SUFDWCxJQUFJLElBQUksQ0FBQ2IsYUFBYSxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsYUFBYSxDQUFDYyxNQUFNLENBQUMsQ0FBQztNQUMzQixJQUFJLENBQUNkLGFBQWEsR0FBR3RCLENBQUMsQ0FBQyxDQUFDO0lBQzVCO0VBQ0osQ0FBQztFQUFBRSxNQUFBLENBRURELFdBQVcsR0FBWCxTQUFBQSxXQUFXQSxDQUFBLEVBQUc7SUFBQSxJQUFBb0MsbUJBQUE7SUFDVixJQUFNQyxjQUFjLEdBQUcsSUFBSSxDQUFDMUMsWUFBWSxDQUFDMkMsVUFBVSxDQUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDLENBQUM7SUFDckVGLGNBQWMsQ0FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQ29DLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxJQUFJLENBQUMscUNBQXFDLEVBQUUsRUFBRSxDQUFDO0lBRXhHLElBQU1DLG9CQUFvQixJQUFBTixtQkFBQSxHQUFHQyxjQUFjLENBQUNNLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXJCUCxtQkFBQSxDQUF1QlEsU0FBUztJQUM3RCxJQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDakQsUUFBUSxDQUFDcUIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDYixJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQzBDLElBQUksQ0FBQyxDQUFDO0lBQzVGLElBQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNuRCxRQUFRLENBQUNnQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksUUFBUTtJQUNqRSxJQUFNb0MsY0FBYyxHQUFHLElBQUksQ0FBQ3BELFFBQVEsQ0FBQ2dCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLFVBQVU7SUFDekUsSUFBTXFDLFdBQVcsR0FBRyxJQUFJLENBQUNyRCxRQUFRLENBQUNnQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksZ0JBQWdCO0lBRXpFLElBQU1zQyxNQUFNLEdBQUcsSUFBSSxDQUFDdEQsUUFBUSxDQUFDUSxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQ3VDLEdBQUcsQ0FBQyxDQUFDLENBQUNRLEdBQUcsQ0FBQyxVQUFBQyxFQUFFO01BQUEsSUFBQUMsaUJBQUE7TUFBQSxPQUFLO1FBQ2xGQyxXQUFXLEdBQUFELGlCQUFBLEdBQUV0RCxDQUFDLENBQUNxRCxFQUFFLENBQUMsQ0FBQ2hELElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLENBQUMsQ0FBQyxxQkFBL0RVLGlCQUFBLENBQWlFVDtNQUNsRixDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBRUgsSUFBTVcsU0FBUyxHQUFHLElBQUksQ0FBQzNELFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUN1QyxHQUFHLENBQUMsQ0FBQyxDQUFDUSxHQUFHLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQUEsSUFBQUksUUFBQTtNQUNsRixJQUFNQyxHQUFHLEdBQUcxRCxDQUFDLENBQUNxRCxFQUFFLENBQUMsQ0FBQ2hELElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDLENBQUM7TUFDM0QsSUFBTTVCLFFBQVEsR0FBRzhDLEdBQUcsQ0FBQzdDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztNQUNwRCxJQUFNSSxJQUFJLEdBQUdFLE1BQU0sQ0FBQ1AsUUFBUSxDQUFDUSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTFCLFlBQVk7TUFDM0RnRSxHQUFHLENBQUNqQixVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLDZDQUE2QyxFQUFFekIsSUFBSSxDQUFDO01BRW5HLE9BQU87UUFDSHNDLFdBQVcsR0FBQUUsUUFBQSxHQUFFQyxHQUFHLENBQUNkLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQVZhLFFBQUEsQ0FBWVo7TUFDN0IsQ0FBQztJQUNMLENBQUMsQ0FBQztJQUVGLElBQU1jLE1BQU0sR0FBRyxJQUFJLENBQUM5RCxRQUFRLENBQUNRLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDdUMsR0FBRyxDQUFDLENBQUMsQ0FDL0RnQixNQUFNLENBQUMsVUFBQTFHLENBQUM7TUFBQSxPQUFJOEMsQ0FBQyxDQUFDOUMsQ0FBQyxDQUFDLENBQUNnRSxPQUFPLENBQUMsZ0dBQWdHLENBQUMsQ0FBQzdELE1BQU0sS0FBSyxDQUFDO0lBQUEsRUFBQyxDQUN4SStGLEdBQUcsQ0FBQyxVQUFBbEcsQ0FBQyxFQUFJO01BQUEsSUFBQTJHLE9BQUE7TUFDTixJQUFNbkQsRUFBRSxHQUFHVixDQUFDLENBQUM5QyxDQUFDLENBQUMsQ0FBQ3NGLEtBQUssQ0FBQyxDQUFDLENBQ2xCQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FDckNDLElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxFQUFFLENBQUM7TUFFcEQsT0FBTztRQUNIYSxXQUFXLEdBQUFNLE9BQUEsR0FBRW5ELEVBQUUsQ0FBQ2tDLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQVRpQixPQUFBLENBQVdoQjtNQUM1QixDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBRU4sSUFBSSxDQUFDdkIsYUFBYSxHQUFHdEIsQ0FBQyxDQUFDVixnREFBUSxDQUFDd0UsTUFBTSxDQUFDLElBQUksQ0FBQ2hFLGFBQWEsRUFBRTtNQUN2RDZDLG9CQUFvQixFQUFwQkEsb0JBQW9CO01BQ3BCRyxJQUFJLEVBQUpBLElBQUk7TUFDSkUsV0FBVyxFQUFYQSxXQUFXO01BQ1hDLGNBQWMsRUFBZEEsY0FBYztNQUNkQyxXQUFXLEVBQVhBLFdBQVc7TUFDWEMsTUFBTSxFQUFOQSxNQUFNO01BQ05LLFNBQVMsRUFBVEEsU0FBUztNQUNURyxNQUFNLEVBQU5BO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUNyQyxhQUFhLENBQUN5QyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDakUsS0FBSyxDQUFDO0lBRTlDLElBQUksQ0FBQ2tFLGFBQWEsQ0FBQyxDQUFDO0lBRXBCLElBQUksQ0FBQ0MsU0FBUyxHQUFHM0UsMkRBQWUsQ0FBQyxJQUFJLENBQUMrQixhQUFhLENBQUNzQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDeER1QixpQkFBaUIsRUFBRSxLQUFLO01BQ3hCQyx1QkFBdUIsRUFBRSxLQUFLO01BQzlCQyxpQkFBaUIsRUFBRTtJQUN2QixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFuRSxNQUFBLENBRURtQixTQUFTLEdBQVQsU0FBQUEsU0FBU0EsQ0FBQ1QsUUFBUSxFQUFFRSxXQUFXLEVBQUVDLFlBQVksRUFBRUMsT0FBTyxFQUFFYSxTQUFTLEVBQUU7SUFBQSxJQUFBeUMsTUFBQTtJQUMvRCxJQUFJLENBQUNDLGtCQUFrQixHQUFHdkUsQ0FBQyxDQUFDd0UsUUFBUSxDQUFDQyxhQUFhLENBQUM7SUFDbkQsSUFBSSxDQUFDMUUsS0FBSyxDQUFDMkUsUUFBUSxDQUFDLHNCQUFzQixDQUFDO0lBRTNDLElBQUksSUFBSSxDQUFDOUUsWUFBWSxFQUFFO01BQ25CLElBQU0rRSxRQUFRLEdBQUcsSUFBSSxDQUFDL0UsWUFBWSxDQUFDMkMsVUFBVSxDQUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUN6RCxJQUFJLENBQUNzQixZQUFZLENBQ2JnRCxRQUFRLENBQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ3BCaUMsUUFBUSxDQUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN2QixJQUFJLENBQUM5QyxZQUFZLENBQUMyQyxVQUFVLENBQUNHLElBQUksQ0FBQyxpQkFBaUIsQ0FDdkQsQ0FBQztJQUNMO0lBRUEsSUFBSTFCLE9BQU8sRUFBRTtNQUNULElBQUksQ0FBQ1ksWUFBWSxDQUFDWixPQUFPLENBQUM7SUFDOUIsQ0FBQyxNQUFNLElBQUlhLFNBQVMsRUFBRTtNQUNsQixJQUFJLENBQUNDLFVBQVUsQ0FBQ2xCLFFBQVEsRUFBRUUsV0FBVyxFQUFFQyxZQUFZLEVBQUVjLFNBQVMsQ0FBQztJQUNuRTtJQUVBLElBQUksQ0FBQ1AsYUFBYSxDQUFDb0QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ3RFLElBQUksQ0FBQ1gsU0FBUyxDQUFDWSxRQUFRLENBQUMsQ0FBQztJQUV6QkMsVUFBVSxDQUFDLFlBQU07TUFDYlQsTUFBSSxDQUFDaEQsYUFBYSxDQUFDakIsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUMyRSxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQ3RGLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDWCxDQUFDO0VBQUE5RSxNQUFBLENBRURxQixVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQUEsSUFBQTBELE1BQUE7SUFDVCxJQUFJLENBQUMzRCxhQUFhLENBQUNvRCxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ3ZDSyxVQUFVLENBQUMsWUFBTTtNQUNiRSxNQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO01BQ3BCRCxNQUFJLENBQUNFLFNBQVMsQ0FBQyxDQUFDO01BQ2hCRixNQUFJLENBQUNsRixLQUFLLENBQUM4RSxXQUFXLENBQUMsc0JBQXNCLENBQUM7TUFDOUNJLE1BQUksQ0FBQzNELGFBQWEsQ0FBQ3VELFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQ2QsSUFBSSxDQUFDLENBQUM7TUFDakRrQixNQUFJLENBQUNmLFNBQVMsQ0FBQ2tCLFVBQVUsQ0FBQyxDQUFDO01BQzNCLElBQUlILE1BQUksQ0FBQ1Ysa0JBQWtCLEVBQUVVLE1BQUksQ0FBQ1Ysa0JBQWtCLENBQUNTLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDekUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNYLENBQUM7RUFBQTlFLE1BQUEsQ0FFRHlCLFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFDMEQsWUFBWSxFQUFFQyxlQUFlLEVBQUV2RSxZQUFZLEVBQUU7SUFDdEQsSUFBSSxDQUFDbUUsYUFBYSxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUNoQixJQUFJLENBQUNJLGFBQWEsQ0FBQyxDQUFDO0lBRXBCLElBQUksQ0FBQ0MsY0FBYyxDQUFDSCxZQUFZLENBQUM7SUFDakMsSUFBSSxDQUFDSSxhQUFhLENBQUNKLFlBQVksRUFBRUMsZUFBZSxFQUFFdkUsWUFBWSxDQUFDO0VBQ25FLENBQUM7RUFBQWIsTUFBQSxDQUVEcUYsYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ2pFLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDdUUsSUFBSSxDQUFDLENBQUM7RUFDL0UsQ0FBQztFQUFBMUUsTUFBQSxDQUVEd0YsYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQ3BFLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDMEQsSUFBSSxDQUFDLENBQUM7RUFDL0UsQ0FBQztFQUFBN0QsTUFBQSxDQUVEc0YsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUNILFlBQVksRUFBRXJFLE9BQU8sRUFBRTtJQUNsQyxJQUFJLENBQUNNLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDd0UsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNySGpCLE1BQU0sQ0FBQyxVQUFDK0IsRUFBRSxFQUFFekksQ0FBQztNQUFBLE9BQ1ZtSSxZQUFZLElBQUlyRixDQUFDLENBQUM5QyxDQUFDLENBQUMsQ0FBQzJELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLd0UsWUFBWSxJQUNsRXJFLE9BQU8sSUFBSWhCLENBQUMsQ0FBQzlDLENBQUMsQ0FBQyxDQUFDMkQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUtHLE9BQU87SUFBQSxFQUFDLENBQ2xFMEQsUUFBUSxDQUFDLFdBQVcsQ0FBQztFQUM5QixDQUFDO0VBQUF4RSxNQUFBLENBRUR1RixhQUFhLEdBQWIsU0FBQUEsYUFBYUEsQ0FBQ0osWUFBWSxFQUFFQyxlQUFlLEVBQUV2RSxZQUFZLEVBQUU7SUFDdkQsSUFBTTZFLGVBQWUsR0FBRyxJQUFJLENBQUN0RSxhQUFhLENBQUNqQixJQUFJLENBQUMsMkNBQTJDLENBQUM7SUFDNUYsSUFBTUssRUFBRSxHQUFHa0YsZUFBZSxDQUFDdkYsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQyxJQUFNa0MsVUFBVSxHQUFHLElBQUksQ0FBQ2pCLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQztJQUVuRnVGLGVBQWUsQ0FBQ2xELElBQUksQ0FBQyxpQkFBaUIsRUFBRTNCLFlBQVksQ0FBQztJQUNyREwsRUFBRSxDQUFDZ0MsSUFBSSxDQUFDLE1BQU0sRUFBRTNCLFlBQVksQ0FBQztJQUM3QndCLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLEtBQUssRUFBRTJDLFlBQVksQ0FBQyxDQUFDM0MsSUFBSSxDQUFDLFFBQVEsRUFBRTRDLGVBQWUsQ0FBQztJQUVwRSxJQUFJLENBQUNPLFFBQVEsQ0FBQ2hGLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ2lGLElBQUksQ0FDL0JULFlBQVksRUFDWnRFLFlBQVksRUFDWnVFLGVBQ0osQ0FBQztJQUVELElBQU1TLFdBQVcsR0FBR0MsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDM0QsSUFBSUgsV0FBVyxFQUFFO01BQ2IsSUFBTUksZ0JBQWdCLEdBQUc7UUFDckIsa0JBQWtCLFdBQVNkLFlBQVksTUFBRztRQUMxQyxxQkFBcUIsRUFBRSxRQUFRO1FBQy9CLG1CQUFtQixFQUFFLFdBQVc7UUFDaEMsbUJBQW1CLEVBQUUsYUFBYTtRQUNsQyxpQkFBaUIsRUFBRTtNQUN2QixDQUFDO01BQ0QsSUFBSSxDQUFDL0QsYUFBYSxDQUFDakIsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUMrRixHQUFHLENBQUNELGdCQUFnQixDQUFDO0lBQ2hHO0VBQ0osQ0FBQztFQUFBakcsTUFBQSxDQUVEbUcsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUNULElBQU1ULGVBQWUsR0FBRyxJQUFJLENBQUN0RSxhQUFhLENBQUNqQixJQUFJLENBQUMscURBQXFELENBQUM7SUFDdEcsSUFBTWlHLGVBQWUsR0FBR1YsZUFBZSxDQUFDVyxNQUFNLENBQUMsQ0FBQztJQUNoRCxJQUFNQyxjQUFjLEdBQUdaLGVBQWUsQ0FBQ2EsS0FBSyxDQUFDLENBQUM7SUFFOUMsSUFBTUMsTUFBTSxHQUFHLElBQUksQ0FBQ2IsUUFBUSxDQUFDaEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOEYsS0FBSztJQUNuRCxJQUFNSixNQUFNLEdBQUdHLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDLENBQUM7SUFDOUIsSUFBTUUsS0FBSyxHQUFHQyxNQUFNLENBQUNELEtBQUssQ0FBQyxDQUFDO0lBRTVCLElBQUlGLE1BQU0sR0FBR0QsZUFBZSxJQUFJRyxLQUFLLEdBQUdELGNBQWMsRUFBRTtNQUNwRCxJQUFJLENBQUNYLFFBQVEsQ0FBQ2hGLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ2tELElBQUksQ0FBQyxDQUFDO0lBQ3pDO0VBQ0osQ0FBQztFQUFBN0QsTUFBQSxDQUVEK0QsYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUFBLElBQUEyQyxNQUFBO0lBQ1osSUFBSSxDQUFDZixRQUFRLEdBQUcsSUFBSSxDQUFDdkUsYUFBYSxDQUFDakIsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUN3RyxRQUFRLENBQUM7TUFDMUZDLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFBO1FBQUEsT0FBUUYsTUFBSSxDQUFDUCxVQUFVLENBQUMsQ0FBQztNQUFBO01BQy9CVSxXQUFXLEVBQUUsRUFBRTtNQUNmQyxhQUFhLEVBQUU7SUFDbkIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBOUcsTUFBQSxDQUVEK0csYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQzNGLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDdUUsSUFBSSxDQUFDLENBQUM7RUFDbkYsQ0FBQztFQUFBMUUsTUFBQSxDQUVEZ0YsYUFBYSxHQUFiLFNBQUFBLGFBQWFBLENBQUEsRUFBRztJQUNaLElBQUksQ0FBQzVELGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDMEQsSUFBSSxDQUFDLENBQUMsQ0FDMUUxRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUNxQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztFQUN2QyxDQUFDO0VBQUF4QyxNQUFBLENBRUQwQixZQUFZLEdBQVosU0FBQUEsWUFBWUEsQ0FBQ1osT0FBTyxFQUFFO0lBQ2xCLElBQUksQ0FBQzBFLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ1AsU0FBUyxDQUFDLENBQUM7SUFDaEIsSUFBSSxDQUFDOEIsYUFBYSxDQUFDLENBQUM7SUFFcEIsSUFBTUMsR0FBRyxzQ0FBb0NsRyxPQUFPLHNCQUFtQjtJQUN2RSxJQUFJLENBQUNNLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDdUUsSUFBSSxDQUFDLENBQUMsQ0FBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQ3FDLElBQUksQ0FBQyxLQUFLLEVBQUV3RSxHQUFHLENBQUM7SUFDL0csSUFBSSxDQUFDMUIsY0FBYyxDQUFDLElBQUksRUFBRXhFLE9BQU8sQ0FBQztFQUN0QyxDQUFDO0VBQUFkLE1BQUEsQ0FFRDRCLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFDdUQsWUFBWSxFQUFFQyxlQUFlLEVBQUV2RSxZQUFZLEVBQUVjLFNBQVMsRUFBRTtJQUMvRCxJQUFJLENBQUM2RCxhQUFhLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNSLGFBQWEsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ2lDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hCLElBQUksQ0FBQzNCLGNBQWMsQ0FBQ0gsWUFBWSxDQUFDO0lBQ2pDLElBQUksQ0FBQytCLFdBQVcsQ0FBQy9CLFlBQVksRUFBRUMsZUFBZSxFQUFFdkUsWUFBWSxFQUFFYyxTQUFTLENBQUM7RUFDNUUsQ0FBQztFQUFBM0IsTUFBQSxDQUVEa0gsV0FBVyxHQUFYLFNBQUFBLFdBQVdBLENBQUMvQixZQUFZLEVBQUVDLGVBQWUsRUFBRXZFLFlBQVksRUFBRWMsU0FBUyxFQUFFO0lBQ2hFLElBQUksQ0FBQ1AsYUFBYSxDQUFDakIsSUFBSSxDQUFDLHdEQUF3RCxDQUFDLENBQzVFcUMsSUFBSSxDQUFDLEtBQUssRUFBRTJDLFlBQVksQ0FBQyxDQUN6QjNDLElBQUksQ0FBQyxRQUFRLEVBQUU0QyxlQUFlLENBQUMsQ0FDL0I1QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUzQixZQUFZLENBQUM7SUFDMUMsSUFBSSxDQUFDc0csaUJBQWlCLENBQUMsQ0FBQyxFQUFFeEYsU0FBUyxDQUFDO0VBQ3hDLENBQUM7RUFBQTNCLE1BQUEsQ0FFRGlILFNBQVMsR0FBVCxTQUFBQSxTQUFTQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUM3RixhQUFhLENBQUNqQixJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQ3VFLElBQUksQ0FBQyxDQUFDO0VBQzFFLENBQUM7RUFBQTFFLE1BQUEsQ0FFRGlGLFNBQVMsR0FBVCxTQUFBQSxTQUFTQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUM3RCxhQUFhLENBQUNqQixJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQzBELElBQUksQ0FBQyxDQUFDO0lBQ3RFLElBQUksQ0FBQzdCLFFBQVEsQ0FBQyxDQUFDO0VBQ25CLENBQUM7RUFBQWhDLE1BQUEsQ0FFRG1ILGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUNDLFdBQVcsRUFBRXpGLFNBQVMsRUFBaUI7SUFBQSxJQUExQkEsU0FBUztNQUFUQSxTQUFTLEdBQUduQyxZQUFZO0lBQUE7SUFDbkQsSUFBSSxDQUFDNEIsYUFBYSxDQUFDakIsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQzFEK0YsR0FBRyxDQUFDLHFCQUFxQixFQUFFa0IsV0FBVyxDQUFDLENBQ3ZDbEIsR0FBRyxDQUFDLG1CQUFtQixFQUFFdkUsU0FBUyxDQUFDO0VBQzVDLENBQUM7RUFBQTNCLE1BQUEsQ0FFRDhCLFdBQVcsR0FBWCxTQUFBQSxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFNMEIsR0FBRyxHQUFHLElBQUksQ0FBQ3BDLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztJQUMzRSxJQUFNWSxJQUFJLEdBQUdFLE1BQU0sQ0FBQ3VDLEdBQUcsQ0FBQzBDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RCxJQUFNbUIsS0FBSyxHQUFHcEcsTUFBTSxDQUFDdUMsR0FBRyxDQUFDMEMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSTFHLFlBQVk7SUFFbEUsSUFBSXVCLElBQUksR0FBR3NHLEtBQUssR0FBRyxDQUFDLEVBQUU7TUFDbEIsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQ3BHLElBQUksR0FBRyxDQUFDLEVBQUVzRyxLQUFLLENBQUM7SUFDM0MsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQyxDQUFDLEVBQUVFLEtBQUssQ0FBQztJQUNwQztFQUNKLENBQUM7RUFBQXJILE1BQUEsQ0FFRDZCLGVBQWUsR0FBZixTQUFBQSxlQUFlQSxDQUFBLEVBQUc7SUFDZCxJQUFNMkIsR0FBRyxHQUFHLElBQUksQ0FBQ3BDLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztJQUMzRSxJQUFNWSxJQUFJLEdBQUdFLE1BQU0sQ0FBQ3VDLEdBQUcsQ0FBQzBDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RCxJQUFNbUIsS0FBSyxHQUFHcEcsTUFBTSxDQUFDdUMsR0FBRyxDQUFDMEMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSTFHLFlBQVk7SUFFbEUsSUFBSXVCLElBQUksR0FBRyxDQUFDLEVBQUU7TUFDVixJQUFJLENBQUNvRyxpQkFBaUIsQ0FBQ3BHLElBQUksR0FBRyxDQUFDLEVBQUVzRyxLQUFLLENBQUM7SUFDM0MsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQ0UsS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxDQUFDO0lBQzVDO0VBQ0osQ0FBQztFQUFBckgsTUFBQSxDQUVEK0IsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUFBLElBQUF1RixNQUFBO0lBQ05DLGFBQWEsQ0FBQyxJQUFJLENBQUNDLFdBQVcsQ0FBQztJQUMvQixJQUFJLENBQUNBLFdBQVcsR0FBR0MsV0FBVyxDQUFDLFlBQU07TUFDakNILE1BQUksQ0FBQ3hGLFdBQVcsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDUCxJQUFJLENBQUNWLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDcUUsUUFBUSxDQUFDLFVBQVUsQ0FBQztFQUN4RixDQUFDO0VBQUF4RSxNQUFBLENBRURnQyxRQUFRLEdBQVIsU0FBQUEsUUFBUUEsQ0FBQSxFQUFHO0lBQ1B1RixhQUFhLENBQUMsSUFBSSxDQUFDQyxXQUFXLENBQUM7SUFDL0IsSUFBSSxDQUFDcEcsYUFBYSxDQUFDakIsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUN3RSxXQUFXLENBQUMsVUFBVSxDQUFDO0VBQzNGLENBQUM7RUFBQSxPQUFBbEYsaUJBQUE7QUFBQTtBQUdFLElBQU1pSSxxQkFBcUIsMEJBQUFDLG1CQUFBO0VBUzlCLFNBQUFELHNCQUNJRSxNQUFNLEVBQUFDLEtBQUEsRUFXUjtJQUFBLElBQUFDLE1BQUE7SUFBQSxJQUFBQyxJQUFBLEdBQUFGLEtBQUEsY0FETSxDQUFDLENBQUMsR0FBQUEsS0FBQTtNQVJGRyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztNQUNUQyxZQUFZLEdBQUFGLElBQUEsQ0FBWkUsWUFBWTtNQUNaQyxRQUFRLEdBQUFILElBQUEsQ0FBUkcsUUFBUTtNQUNSQyxXQUFXLEdBQUFKLElBQUEsQ0FBWEksV0FBVztNQUNYQyxTQUFTLEdBQUFMLElBQUEsQ0FBVEssU0FBUztNQUNUQyxjQUFjLEdBQUFOLElBQUEsQ0FBZE0sY0FBYztNQUNkQyxpQkFBaUIsR0FBQVAsSUFBQSxDQUFqQk8saUJBQWlCO01BQ2pCQyxjQUFjLEdBQUFSLElBQUEsQ0FBZFEsY0FBYztJQUdsQlQsTUFBQSxHQUFBSCxtQkFBQSxDQUFBckssSUFBQSxLQUFNLENBQUM7SUFBQ3dLLE1BQUEsQ0FyQlpVLG9CQUFvQjtJQXNCaEJWLE1BQUEsQ0FBS0YsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCRSxNQUFBLENBQUtFLFNBQVMsR0FBR0EsU0FBUztJQUMxQkYsTUFBQSxDQUFLRyxZQUFZLEdBQUdBLFlBQVk7SUFDaENILE1BQUEsQ0FBS0ksUUFBUSxHQUFHQSxRQUFRO0lBQ3hCSixNQUFBLENBQUtLLFdBQVcsR0FBR0EsV0FBVztJQUM5QkwsTUFBQSxDQUFLTSxTQUFTLEdBQUdBLFNBQVM7SUFDMUJOLE1BQUEsQ0FBS08sY0FBYyxHQUFHQSxjQUFjO0lBQ3BDUCxNQUFBLENBQUtRLGlCQUFpQixHQUFHQSxpQkFBaUI7SUFDMUNSLE1BQUEsQ0FBS1MsY0FBYyxHQUFHQSxjQUFjO0lBQUMsT0FBQVQsTUFBQTtFQUN6QztFQUFDN0ksY0FBQSxDQUFBeUkscUJBQUEsRUFBQUMsbUJBQUE7RUFBQSxJQUFBYyxPQUFBLEdBQUFmLHFCQUFBLENBQUFyTCxTQUFBO0VBQUFvTSxPQUFBLENBRUtDLGdCQUFnQjtJQUFBLElBQUFDLGlCQUFBLEdBQUEvSixpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBdEIsU0FBQTJLLFFBQUE7TUFBQSxPQUFBN0ssWUFBQSxHQUFBQyxDQUFBLFdBQUE2SyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQTlNLENBQUE7VUFBQTtZQUNJLElBQUksQ0FBQ2tHLFlBQVksQ0FBQyxDQUFDO1lBRW5CLElBQUksQ0FBQ29DLGtCQUFrQixHQUFHdkUsQ0FBQyxDQUFDd0UsUUFBUSxDQUFDQyxhQUFhLENBQUM7WUFDbkQsSUFBSSxDQUFDMUUsS0FBSyxDQUFDMkUsUUFBUSxDQUFDLHNCQUFzQixDQUFDOztZQUUzQztZQUNBLElBQUksQ0FBQ3BELGFBQWEsR0FBR3RCLENBQUMsQ0FBQ1YsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQyxJQUFJLENBQUM0RSxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQ3BILGFBQWEsQ0FBQ3lDLElBQUksQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUNqRSxLQUFLLENBQUM7WUFDOUMsSUFBSSxDQUFDdUIsYUFBYSxDQUFDb0QsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsVUFBVSxDQUFDO1VBQUM7WUFBQSxPQUFBa0UsUUFBQSxDQUFBN0wsQ0FBQTtRQUFBO01BQUEsR0FBQTRMLE9BQUE7SUFBQSxDQUMxRTtJQUFBLFNBVktGLGdCQUFnQkEsQ0FBQTtNQUFBLE9BQUFDLGlCQUFBLENBQUE3SixLQUFBLE9BQUFELFNBQUE7SUFBQTtJQUFBLE9BQWhCNkosZ0JBQWdCO0VBQUE7RUFBQUQsT0FBQSxDQVloQkssU0FBUztJQUFBLElBQUFDLFVBQUEsR0FBQW5LLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFmLFNBQUErSyxTQUFBO01BQUEsSUFBQUMsU0FBQSxFQUFBN0QsZUFBQSxFQUFBM0Msb0JBQUEsRUFBQUcsSUFBQSxFQUFBRSxXQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxNQUFBLEVBQUFLLFNBQUEsRUFBQUcsTUFBQSxFQUFBckMsYUFBQTtNQUFBLE9BQUFyRCxZQUFBLEdBQUFDLENBQUEsV0FBQWtMLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBbk4sQ0FBQTtVQUFBO1lBQUFtTixTQUFBLENBQUFuTixDQUFBO1lBQUEsT0FFVSxJQUFJLENBQUNvTixZQUFZLENBQUMsQ0FBQztVQUFBO1lBRW5CRixTQUFTLEdBQUcsSUFBSSxDQUFDeEYsTUFBTSxDQUFDdEQsSUFBSSxDQUFDLFVBQUFpSixLQUFLO2NBQUEsT0FBSUEsS0FBSyxDQUFDQyxTQUFTO1lBQUEsRUFBQyxJQUFJLElBQUksQ0FBQzVGLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEUyQixlQUFlLEdBQUc5Riw2REFBSyxDQUFDc0IsV0FBVyxDQUFDMEksU0FBUyxDQUFDTCxTQUFTLENBQUNNLFdBQVcsQ0FBQztZQUVwRTlHLG9CQUFvQixpREFFVndHLFNBQVMsQ0FBQ08sT0FBTywrREFDV1AsU0FBUyxDQUFDUSxHQUFHLGtFQUNWckUsZUFBZSxnRUFDakI2RCxTQUFTLENBQUNPLE9BQU8sdURBQzVCUCxTQUFTLENBQUNTLFlBQVkseUJBQWtCdEUsZUFBZSxxQ0FBNEI2RCxTQUFTLENBQUNVLE9BQU87WUFFaEkvRyxJQUFJLEdBQUcsSUFBSSxDQUFDZ0YsTUFBTSxDQUFDekgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDMEMsSUFBSSxDQUFDLENBQUM7WUFDN0NDLFdBQVcsR0FBRyxJQUFJLENBQUN1RixjQUFjLElBQUksUUFBUTtZQUM3Q3RGLGNBQWMsR0FBRyxJQUFJLENBQUN1RixpQkFBaUIsSUFBSSxVQUFVO1lBQ3JEdEYsV0FBVyxHQUFHLElBQUksQ0FBQ3VGLGNBQWMsSUFBSSxnQkFBZ0I7WUFFckR0RixNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxVQUFBMEcsS0FBSyxFQUFJO2NBQ3BDLElBQU1ILEdBQUcsR0FBRyxJQUFJSSxHQUFHLENBQUNELEtBQUssQ0FBQ0gsR0FBRyxDQUFDO2NBQzlCLElBQU0zSSxPQUFPLEdBQUcySSxHQUFHLENBQUNLLFlBQVksQ0FBQ3BILEdBQUcsQ0FBQyxHQUFHLENBQUM7Y0FDekMsT0FBTztnQkFDSFcsV0FBVyw4SEFHS3VHLEtBQUssQ0FBQ0gsR0FBRyx1RUFDbUIzSSxPQUFPLDZGQUVSQSxPQUFPO2NBR3RELENBQUM7WUFDTCxDQUFDLENBQUM7WUFFSXdDLFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVMsQ0FBQ0osR0FBRyxDQUFDLFVBQUN4QyxRQUFRLEVBQUs7Y0FDL0MsSUFBTUssSUFBSSxHQUFHRSxNQUFNLENBQUNQLFFBQVEsQ0FBQ1EsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUkxQixZQUFZO2NBQzNELE9BQU87Z0JBQ0g2RCxXQUFXLDhIQUdLM0MsUUFBUSxrRkFDK0JLLElBQUksdUVBQ2ZMLFFBQVEsMEVBQ0xBLFFBQVEsd0VBQ1ZBLFFBQVEsc0VBRWpDQSxRQUFRO2NBR2hDLENBQUM7WUFDTCxDQUFDLENBQUM7WUFFSStDLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDLFVBQUFrRyxLQUFLLEVBQUk7Y0FDcEMsSUFBTXhJLFdBQVcsR0FBR3RCLDZEQUFLLENBQUNzQixXQUFXLENBQUMwSSxTQUFTLENBQUNGLEtBQUssQ0FBQ0csV0FBVyxDQUFDO2NBQ2xFLE9BQU87Z0JBQ0hsRyxXQUFXLDhIQUdLK0YsS0FBSyxDQUFDSSxPQUFPLG9JQUVlSixLQUFLLENBQUNLLEdBQUcsMEVBQ043SSxXQUFXLHdFQUNid0ksS0FBSyxDQUFDSSxPQUFPLHlGQUVyQkosS0FBSyxDQUFDTSxZQUFZLHlCQUFrQjlJLFdBQVcscUNBQTRCd0ksS0FBSyxDQUFDTyxPQUFPO2NBRWpJLENBQUM7WUFDTCxDQUFDLENBQUM7WUFFSXZJLGFBQWEsR0FBR3RCLENBQUMsQ0FBQ1YsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQyxJQUFJLENBQUNoRSxhQUFhLEVBQUU7Y0FDeEQ2QyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtjQUNwQkcsSUFBSSxFQUFKQSxJQUFJO2NBQ0pFLFdBQVcsRUFBWEEsV0FBVztjQUNYQyxjQUFjLEVBQWRBLGNBQWM7Y0FDZEMsV0FBVyxFQUFYQSxXQUFXO2NBQ1hDLE1BQU0sRUFBTkEsTUFBTTtjQUNOSyxTQUFTLEVBQVRBLFNBQVM7Y0FDVEcsTUFBTSxFQUFOQTtZQUNKLENBQUMsQ0FBQyxDQUFDLEVBRUg7WUFDQSxJQUFJLENBQUNyQyxhQUFhLENBQUMySSxJQUFJLENBQUMzSSxhQUFhLENBQUMySSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTdDLElBQUksQ0FBQ2hHLGFBQWEsQ0FBQyxDQUFDO1lBRXBCLElBQUksQ0FBQ0MsU0FBUyxHQUFHM0UsMkRBQWUsQ0FBQyxJQUFJLENBQUMrQixhQUFhLENBQUNzQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Y0FDeER1QixpQkFBaUIsRUFBRSxLQUFLO2NBQ3hCQyx1QkFBdUIsRUFBRSxLQUFLO2NBQzlCQyxpQkFBaUIsRUFBRTtZQUN2QixDQUFDLENBQUM7WUFFRixJQUFJLENBQUNsRSxVQUFVLENBQUMsQ0FBQztVQUFDO1lBQUEsT0FBQWlKLFNBQUEsQ0FBQWxNLENBQUE7UUFBQTtNQUFBLEdBQUFnTSxRQUFBO0lBQUEsQ0FDckI7SUFBQSxTQTlGS0YsU0FBU0EsQ0FBQTtNQUFBLE9BQUFDLFVBQUEsQ0FBQWpLLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0lBQUEsT0FBVGlLLFNBQVM7RUFBQTtFQUFBTCxPQUFBLENBZ0dmdEgsU0FBUyxHQUFULFNBQUFBLFNBQVNBLENBQUE2SSxNQUFBLEVBR0Q7SUFBQSxJQUFBQyxNQUFBO0lBQUEsSUFBQUMsS0FBQSxHQUFBRixNQUFBLGNBQUosQ0FBQyxDQUFDLEdBQUFBLE1BQUE7TUFBQUcsZ0JBQUEsR0FBQUQsS0FBQSxDQUZGRSxVQUFVO01BQVZBLFVBQVUsR0FBQUQsZ0JBQUEsY0FBRyxLQUFLLEdBQUFBLGdCQUFBO01BQUFFLFdBQUEsR0FBQUgsS0FBQSxDQUNsQkksUUFBUTtNQUFSQSxRQUFRLEdBQUFELFdBQUEsY0FBRyxLQUFLLEdBQUFBLFdBQUE7SUFFaEIsSUFBSSxDQUFDM0IsZ0JBQWdCLENBQUMsQ0FBQztJQUV2QixJQUFJLENBQUNJLFNBQVMsQ0FBQyxDQUFDLENBQUNuSyxJQUFJLENBQUMsWUFBTTtNQUN4QixJQUFJeUwsVUFBVSxFQUFFO1FBQ1osSUFBTXRKLE9BQU8sR0FBR21KLE1BQUksQ0FBQzdJLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDb0ssS0FBSyxDQUFDLENBQUMsQ0FBQzVKLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztRQUNySHNKLE1BQUksQ0FBQ3ZJLFlBQVksQ0FBQ1osT0FBTyxDQUFDO01BQzlCO01BRUEsSUFBSXdKLFFBQVEsRUFBRTtRQUNWLElBQU05RyxHQUFHLEdBQUd5RyxNQUFJLENBQUM3SSxhQUFhLENBQUNqQixJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQ29LLEtBQUssQ0FBQyxDQUFDO1FBQzVGTixNQUFJLENBQUNySSxVQUFVLENBQ1g0QixHQUFHLENBQUM3QyxJQUFJLENBQUMseUJBQXlCLENBQUMsRUFDbkM2QyxHQUFHLENBQUM3QyxJQUFJLENBQUMsNEJBQTRCLENBQUMsRUFDdEM2QyxHQUFHLENBQUM3QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsRUFDcEM2QyxHQUFHLENBQUM3QyxJQUFJLENBQUMsbUNBQW1DLENBQ2hELENBQUM7TUFDTDtNQUVBc0osTUFBSSxDQUFDakcsU0FBUyxDQUFDWSxRQUFRLENBQUMsQ0FBQztNQUV6QkMsVUFBVSxDQUFDLFlBQU07UUFDYm9GLE1BQUksQ0FBQzdJLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDMkUsT0FBTyxDQUFDLE9BQU8sQ0FBQztNQUN0RixDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBMkQsT0FBQSxDQUVLVSxZQUFZO0lBQUEsSUFBQXFCLGFBQUEsR0FBQTVMLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUFsQixTQUFBd00sU0FBQTtNQUFBLElBQUFDLHFCQUFBLEVBQUFDLFNBQUEsRUFBQUMsVUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxVQUFBLEVBQUFDLFdBQUEsRUFBQUMscUJBQUEsRUFBQUMsVUFBQSxFQUFBQyxXQUFBLEVBQUFDLElBQUEsRUFBQUMsS0FBQSxFQUFBM0gsTUFBQSxFQUFBUixNQUFBLEVBQUFLLFNBQUE7TUFBQSxPQUFBdkYsWUFBQSxHQUFBQyxDQUFBLFdBQUFxTixTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQXRQLENBQUE7VUFBQTtZQUFBLE1BQ1EsSUFBSSxDQUFDMEgsTUFBTSxJQUFJLElBQUksQ0FBQ1IsTUFBTSxJQUFJLElBQUksQ0FBQ0ssU0FBUztjQUFBK0gsU0FBQSxDQUFBdFAsQ0FBQTtjQUFBO1lBQUE7WUFBQSxPQUFBc1AsU0FBQSxDQUFBck8sQ0FBQTtVQUFBO1lBQUEwTixxQkFBQSxHQUVoQixJQUFJLENBQUN4QyxRQUFRLENBQUNoSCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNnQyxHQUFHLENBQUNqQyxNQUFNLENBQUMsRUFBN0QwSixTQUFTLEdBQUFELHFCQUFBLEtBQUVFLFVBQVUsR0FBQUYscUJBQUE7WUFBQUcscUJBQUEsR0FDTSxJQUFJLENBQUMxQyxXQUFXLENBQUNqSCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNnQyxHQUFHLENBQUNqQyxNQUFNLENBQUMsRUFBbEU2SixVQUFVLEdBQUFELHFCQUFBLEtBQUVFLFdBQVcsR0FBQUYscUJBQUE7WUFBQUcscUJBQUEsR0FDSSxJQUFJLENBQUM1QyxTQUFTLENBQUNsSCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNnQyxHQUFHLENBQUNqQyxNQUFNLENBQUMsRUFBaEVnSyxVQUFVLEdBQUFELHFCQUFBLEtBQUVFLFdBQVcsR0FBQUYscUJBQUE7WUFBQUssU0FBQSxDQUFBdFAsQ0FBQTtZQUFBLE9BRVgrRCxDQUFDLENBQUN3TCxJQUFJLENBQUM7Y0FDdEI3QixHQUFHLEVBQUUsVUFBVTtjQUNmOEIsTUFBTSxFQUFFLE1BQU07Y0FDZDVLLElBQUksRUFBRTZLLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dCQUNqQkMsS0FBSywrOERBMkNKO2dCQUNEQyxTQUFTLEVBQUU7a0JBQ1AzRCxTQUFTLEVBQUUsSUFBSSxDQUFDQSxTQUFTO2tCQUN6QjJDLFNBQVMsRUFBVEEsU0FBUztrQkFDVEMsVUFBVSxFQUFWQSxVQUFVO2tCQUNWRSxVQUFVLEVBQVZBLFVBQVU7a0JBQ1ZDLFdBQVcsRUFBWEEsV0FBVztrQkFDWEUsVUFBVSxFQUFWQSxVQUFVO2tCQUNWQyxXQUFXLEVBQVhBO2dCQUNKO2NBQ0osQ0FBQyxDQUFDO2NBQ0ZVLE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQ0MsYUFBYSxjQUFZLElBQUksQ0FBQzVEO2NBQ2xDLENBQUM7Y0FDRDZELFNBQVMsRUFBRTtnQkFDUEMsZUFBZSxFQUFFO2NBQ3JCO1lBQ0osQ0FBQyxDQUFDO1VBQUE7WUFqRUlaLElBQUksR0FBQUUsU0FBQSxDQUFBdE8sQ0FBQTtZQUFBcU8sS0FBQSxHQW1FMEIsQ0FDaENELElBQUksQ0FBQ3hLLElBQUksQ0FBQ3FMLElBQUksQ0FBQ0MsT0FBTyxDQUFDeEksTUFBTSxDQUFDeUksS0FBSyxDQUFDaEosR0FBRyxDQUFDLFVBQUFpSixLQUFBO2NBQUEsSUFBR0MsSUFBSSxHQUFBRCxLQUFBLENBQUpDLElBQUk7Y0FBQSxPQUFPQSxJQUFJO1lBQUEsRUFBQyxFQUMzRGpCLElBQUksQ0FBQ3hLLElBQUksQ0FBQ3FMLElBQUksQ0FBQ0MsT0FBTyxDQUFDaEosTUFBTSxDQUFDaUosS0FBSyxDQUFDaEosR0FBRyxDQUFDLFVBQUFtSixLQUFBO2NBQUEsSUFBR0QsSUFBSSxHQUFBQyxLQUFBLENBQUpELElBQUk7Y0FBQSxPQUFPQSxJQUFJO1lBQUEsRUFBQyxFQUMzRGpCLElBQUksQ0FBQ3hLLElBQUksQ0FBQ3FMLElBQUksQ0FBQ0MsT0FBTyxDQUFDSyxZQUFZLENBQUNKLEtBQUssQ0FDcEN4SSxNQUFNLENBQUMsVUFBQTZJLEtBQUE7Y0FBQSxJQUFHSCxJQUFJLEdBQUFHLEtBQUEsQ0FBSkgsSUFBSTtjQUFBLE9BQU9BLElBQUksQ0FBQ3hKLElBQUksS0FBSyxRQUFRO1lBQUEsRUFBQyxDQUM1Q00sR0FBRyxDQUFDLFVBQUFzSixLQUFBO2NBQUEsSUFBR0osSUFBSSxHQUFBSSxLQUFBLENBQUpKLElBQUk7Y0FBQSxPQUFPQSxJQUFJLENBQUM1TyxLQUFLO1lBQUEsRUFBQyxDQUNyQyxFQU5NaUcsTUFBTSxHQUFBMkgsS0FBQSxLQUFFbkksTUFBTSxHQUFBbUksS0FBQSxLQUFFOUgsU0FBUyxHQUFBOEgsS0FBQTtZQVFoQztBQUNSO0FBQ0E7WUFDUSxJQUFJLENBQUMzSCxNQUFNLEdBQUdBLE1BQU07O1lBRXBCO0FBQ1I7QUFDQTtZQUNRLElBQUksQ0FBQ1IsTUFBTSxHQUFHQSxNQUFNOztZQUVwQjtBQUNSO0FBQ0E7WUFDUSxJQUFJLENBQUNLLFNBQVMsR0FBR0EsU0FBUztVQUFDO1lBQUEsT0FBQStILFNBQUEsQ0FBQXJPLENBQUE7UUFBQTtNQUFBLEdBQUF5TixRQUFBO0lBQUEsQ0FDOUI7SUFBQSxTQWhHS3RCLFlBQVlBLENBQUE7TUFBQSxPQUFBcUIsYUFBQSxDQUFBMUwsS0FBQSxPQUFBRCxTQUFBO0lBQUE7SUFBQSxPQUFac0ssWUFBWTtFQUFBO0VBQUEsT0FBQXpCLHFCQUFBO0FBQUEsRUE1S3FCakksaUJBQWlCO0FBNlEzRCxJQUVvQmdOLFlBQVksMEJBQUFDLHFCQUFBO0VBQzdCLFNBQUFELGFBQVk5TSxRQUFRLEVBQUU7SUFBQSxJQUFBZ04sTUFBQTtJQUNsQkEsTUFBQSxHQUFBRCxxQkFBQSxDQUFBcFAsSUFBQSxPQUFNcUMsUUFBUSxDQUFDO0lBQ2ZnTixNQUFBLENBQUtDLGlCQUFpQixHQUFHLElBQUluTixpQkFBaUIsQ0FBQWtOLE1BQUEsRUFBT2hOLFFBQVEsQ0FBQztJQUFDLE9BQUFnTixNQUFBO0VBQ25FO0VBQUMxTixjQUFBLENBQUF3TixZQUFBLEVBQUFDLHFCQUFBO0VBQUEsSUFBQUcsT0FBQSxHQUFBSixZQUFBLENBQUFwUSxTQUFBO0VBQUF3USxPQUFBLENBRUQ1TSxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1R5TSxxQkFBQSxDQUFBclEsU0FBQSxDQUFNNEQsVUFBVSxDQUFBM0MsSUFBQTtJQUNoQixJQUFJLENBQUNzUCxpQkFBaUIsQ0FBQzNNLFVBQVUsQ0FBQyxDQUFDO0VBQ3ZDLENBQUM7RUFBQSxPQUFBd00sWUFBQTtBQUFBLEVBVHFDbE4sb0VBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkN0dkJqRSx1S0FBQTVELENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEsR0FBQVIsQ0FBQSxFQUFBSCxDQUFBLE9BQUFpQixDQUFBLElBQUFGLENBQUEsS0FBQVYsQ0FBQSxJQUFBTCxDQUFBLEdBQUFnQixDQUFBLENBQUFPLE1BQUEsRUFBQXZCLENBQUEsVUFBQUssQ0FBQSxFQUFBRSxDQUFBLEdBQUFTLENBQUEsQ0FBQWhCLENBQUEsR0FBQXFCLENBQUEsR0FBQUgsQ0FBQSxDQUFBRixDQUFBLEVBQUFRLENBQUEsR0FBQWpCLENBQUEsS0FBQU4sQ0FBQSxRQUFBSSxDQUFBLEdBQUFtQixDQUFBLEtBQUFyQixDQUFBLE1BQUFRLENBQUEsR0FBQUosQ0FBQSxFQUFBQyxDQUFBLEdBQUFELENBQUEsWUFBQUMsQ0FBQSxXQUFBRCxDQUFBLE1BQUFBLENBQUEsTUFBQVIsQ0FBQSxJQUFBUSxDQUFBLE9BQUFjLENBQUEsTUFBQWhCLENBQUEsR0FBQUosQ0FBQSxRQUFBb0IsQ0FBQSxHQUFBZCxDQUFBLFFBQUFDLENBQUEsTUFBQVUsQ0FBQSxDQUFBQyxDQUFBLEdBQUFoQixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBSSxDQUFBLE9BQUFjLENBQUEsR0FBQUcsQ0FBQSxLQUFBbkIsQ0FBQSxHQUFBSixDQUFBLFFBQUFNLENBQUEsTUFBQUosQ0FBQSxJQUFBQSxDQUFBLEdBQUFxQixDQUFBLE1BQUFqQixDQUFBLE1BQUFOLENBQUEsRUFBQU0sQ0FBQSxNQUFBSixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBcUIsQ0FBQSxFQUFBaEIsQ0FBQSxjQUFBSCxDQUFBLElBQUFKLENBQUEsYUFBQW1CLENBQUEsUUFBQUgsQ0FBQSxPQUFBZCxDQUFBLHFCQUFBRSxDQUFBLEVBQUFXLENBQUEsRUFBQVEsQ0FBQSxRQUFBVCxDQUFBLFlBQUFVLFNBQUEsdUNBQUFSLENBQUEsVUFBQUQsQ0FBQSxJQUFBSyxDQUFBLENBQUFMLENBQUEsRUFBQVEsQ0FBQSxHQUFBaEIsQ0FBQSxHQUFBUSxDQUFBLEVBQUFMLENBQUEsR0FBQWEsQ0FBQSxHQUFBeEIsQ0FBQSxHQUFBUSxDQUFBLE9BQUFULENBQUEsR0FBQVksQ0FBQSxNQUFBTSxDQUFBLEtBQUFWLENBQUEsS0FBQUMsQ0FBQSxHQUFBQSxDQUFBLFFBQUFBLENBQUEsU0FBQVUsQ0FBQSxDQUFBZixDQUFBLFFBQUFrQixDQUFBLENBQUFiLENBQUEsRUFBQUcsQ0FBQSxLQUFBTyxDQUFBLENBQUFmLENBQUEsR0FBQVEsQ0FBQSxHQUFBTyxDQUFBLENBQUFDLENBQUEsR0FBQVIsQ0FBQSxhQUFBSSxDQUFBLE1BQUFSLENBQUEsUUFBQUMsQ0FBQSxLQUFBSCxDQUFBLFlBQUFMLENBQUEsR0FBQU8sQ0FBQSxDQUFBRixDQUFBLFdBQUFMLENBQUEsR0FBQUEsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLFVBQUFjLFNBQUEsMkNBQUF6QixDQUFBLENBQUEyQixJQUFBLFNBQUEzQixDQUFBLEVBQUFXLENBQUEsR0FBQVgsQ0FBQSxDQUFBNEIsS0FBQSxFQUFBcEIsQ0FBQSxTQUFBQSxDQUFBLG9CQUFBQSxDQUFBLEtBQUFSLENBQUEsR0FBQU8sQ0FBQSxlQUFBUCxDQUFBLENBQUEwQixJQUFBLENBQUFuQixDQUFBLEdBQUFDLENBQUEsU0FBQUcsQ0FBQSxHQUFBYyxTQUFBLHVDQUFBcEIsQ0FBQSxnQkFBQUcsQ0FBQSxPQUFBRCxDQUFBLEdBQUFSLENBQUEsY0FBQUMsQ0FBQSxJQUFBaUIsQ0FBQSxHQUFBQyxDQUFBLENBQUFmLENBQUEsUUFBQVEsQ0FBQSxHQUFBVixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLEVBQUFlLENBQUEsT0FBQUUsQ0FBQSxrQkFBQXBCLENBQUEsSUFBQU8sQ0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsTUFBQUcsQ0FBQSxHQUFBWCxDQUFBLGNBQUFlLENBQUEsbUJBQUFhLEtBQUEsRUFBQTVCLENBQUEsRUFBQTJCLElBQUEsRUFBQVYsQ0FBQSxTQUFBaEIsQ0FBQSxFQUFBSSxDQUFBLEVBQUFFLENBQUEsUUFBQUksQ0FBQSxRQUFBUyxDQUFBLGdCQUFBVixVQUFBLGNBQUFtQixrQkFBQSxjQUFBQywyQkFBQSxLQUFBOUIsQ0FBQSxHQUFBWSxNQUFBLENBQUFtQixjQUFBLE1BQUF2QixDQUFBLE1BQUFMLENBQUEsSUFBQUgsQ0FBQSxDQUFBQSxDQUFBLElBQUFHLENBQUEsU0FBQVcsbUJBQUEsQ0FBQWQsQ0FBQSxPQUFBRyxDQUFBLGlDQUFBSCxDQUFBLEdBQUFXLENBQUEsR0FBQW1CLDBCQUFBLENBQUFyQixTQUFBLEdBQUFDLFNBQUEsQ0FBQUQsU0FBQSxHQUFBRyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxZQUFBTyxFQUFBaEIsQ0FBQSxXQUFBYSxNQUFBLENBQUFvQixjQUFBLEdBQUFwQixNQUFBLENBQUFvQixjQUFBLENBQUFqQyxDQUFBLEVBQUErQiwwQkFBQSxLQUFBL0IsQ0FBQSxDQUFBa0MsU0FBQSxHQUFBSCwwQkFBQSxFQUFBaEIsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBTSxDQUFBLHlCQUFBTixDQUFBLENBQUFVLFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFGLENBQUEsR0FBQVosQ0FBQSxXQUFBOEIsaUJBQUEsQ0FBQXBCLFNBQUEsR0FBQXFCLDBCQUFBLEVBQUFoQixtQkFBQSxDQUFBSCxDQUFBLGlCQUFBbUIsMEJBQUEsR0FBQWhCLG1CQUFBLENBQUFnQiwwQkFBQSxpQkFBQUQsaUJBQUEsR0FBQUEsaUJBQUEsQ0FBQUssV0FBQSx3QkFBQXBCLG1CQUFBLENBQUFnQiwwQkFBQSxFQUFBekIsQ0FBQSx3QkFBQVMsbUJBQUEsQ0FBQUgsQ0FBQSxHQUFBRyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFOLENBQUEsZ0JBQUFTLG1CQUFBLENBQUFILENBQUEsRUFBQVIsQ0FBQSxpQ0FBQVcsbUJBQUEsQ0FBQUgsQ0FBQSw4REFBQXdCLFlBQUEsWUFBQUEsYUFBQSxhQUFBQyxDQUFBLEVBQUE3QixDQUFBLEVBQUE4QixDQUFBLEVBQUF0QixDQUFBO0FBQUEsU0FBQUQsb0JBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUEsUUFBQU8sQ0FBQSxHQUFBSyxNQUFBLENBQUEwQixjQUFBLFFBQUEvQixDQUFBLHVCQUFBUixDQUFBLElBQUFRLENBQUEsUUFBQU8sbUJBQUEsWUFBQXlCLG1CQUFBeEMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQSxhQUFBSyxFQUFBSixDQUFBLEVBQUFFLENBQUEsSUFBQVcsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBRSxDQUFBLFlBQUFGLENBQUEsZ0JBQUF5QyxPQUFBLENBQUF2QyxDQUFBLEVBQUFFLENBQUEsRUFBQUosQ0FBQSxTQUFBRSxDQUFBLEdBQUFNLENBQUEsR0FBQUEsQ0FBQSxDQUFBUixDQUFBLEVBQUFFLENBQUEsSUFBQTJCLEtBQUEsRUFBQXpCLENBQUEsRUFBQXNDLFVBQUEsR0FBQXpDLENBQUEsRUFBQTBDLFlBQUEsR0FBQTFDLENBQUEsRUFBQTJDLFFBQUEsR0FBQTNDLENBQUEsTUFBQUQsQ0FBQSxDQUFBRSxDQUFBLElBQUFFLENBQUEsSUFBQUUsQ0FBQSxhQUFBQSxDQUFBLGNBQUFBLENBQUEsbUJBQUFTLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBbVIsa0JBQUFwUixDQUFBLEVBQUFFLENBQUEsYUFBQUQsQ0FBQSxNQUFBQSxDQUFBLEdBQUFDLENBQUEsQ0FBQXNCLE1BQUEsRUFBQXZCLENBQUEsVUFBQUssQ0FBQSxHQUFBSixDQUFBLENBQUFELENBQUEsR0FBQUssQ0FBQSxDQUFBb0MsVUFBQSxHQUFBcEMsQ0FBQSxDQUFBb0MsVUFBQSxRQUFBcEMsQ0FBQSxDQUFBcUMsWUFBQSxrQkFBQXJDLENBQUEsS0FBQUEsQ0FBQSxDQUFBc0MsUUFBQSxRQUFBL0IsTUFBQSxDQUFBMEIsY0FBQSxDQUFBdkMsQ0FBQSxFQUFBcVIsY0FBQSxDQUFBL1EsQ0FBQSxDQUFBcUYsR0FBQSxHQUFBckYsQ0FBQTtBQUFBLFNBQUFnUixhQUFBdFIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFELENBQUEsV0FBQUMsQ0FBQSxJQUFBa1IsaUJBQUEsQ0FBQXBSLENBQUEsQ0FBQVUsU0FBQSxFQUFBUixDQUFBLEdBQUFELENBQUEsSUFBQW1SLGlCQUFBLENBQUFwUixDQUFBLEVBQUFDLENBQUEsR0FBQVksTUFBQSxDQUFBMEIsY0FBQSxDQUFBdkMsQ0FBQSxpQkFBQTRDLFFBQUEsU0FBQTVDLENBQUE7QUFBQSxTQUFBcVIsZUFBQXBSLENBQUEsUUFBQU8sQ0FBQSxHQUFBK1EsWUFBQSxDQUFBdFIsQ0FBQSx1Q0FBQU8sQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBK1EsYUFBQXRSLENBQUEsRUFBQUMsQ0FBQSwyQkFBQUQsQ0FBQSxLQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUFFLE1BQUEsQ0FBQXFSLFdBQUEsa0JBQUF4UixDQUFBLFFBQUFRLENBQUEsR0FBQVIsQ0FBQSxDQUFBMkIsSUFBQSxDQUFBMUIsQ0FBQSxFQUFBQyxDQUFBLHVDQUFBTSxDQUFBLFNBQUFBLENBQUEsWUFBQWtCLFNBQUEseUVBQUF4QixDQUFBLEdBQUF1UixNQUFBLEdBQUFuTSxNQUFBLEVBQUFyRixDQUFBO0FBQUEsU0FBQXFELGVBQUFyRCxDQUFBLEVBQUFLLENBQUEsSUFBQUwsQ0FBQSxDQUFBUyxTQUFBLEdBQUFHLE1BQUEsQ0FBQUMsTUFBQSxDQUFBUixDQUFBLENBQUFJLFNBQUEsR0FBQVQsQ0FBQSxDQUFBUyxTQUFBLENBQUE2QyxXQUFBLEdBQUF0RCxDQUFBLEVBQUF1RCxlQUFBLENBQUF2RCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBa0QsZ0JBQUF2RCxDQUFBLEVBQUFELENBQUEsV0FBQXdELGVBQUEsR0FBQTNDLE1BQUEsQ0FBQW9CLGNBQUEsR0FBQXBCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsSUFBQSxlQUFBdEIsQ0FBQSxFQUFBRCxDQUFBLFdBQUFDLENBQUEsQ0FBQWlDLFNBQUEsR0FBQWxDLENBQUEsRUFBQUMsQ0FBQSxLQUFBdUQsZUFBQSxDQUFBdkQsQ0FBQSxFQUFBRCxDQUFBO0FBQUEsU0FBQTZDLG1CQUFBekMsQ0FBQSxFQUFBSCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBSSxDQUFBLEVBQUFlLENBQUEsRUFBQVosQ0FBQSxjQUFBRCxDQUFBLEdBQUFKLENBQUEsQ0FBQWlCLENBQUEsRUFBQVosQ0FBQSxHQUFBRyxDQUFBLEdBQUFKLENBQUEsQ0FBQXFCLEtBQUEsV0FBQXpCLENBQUEsZ0JBQUFKLENBQUEsQ0FBQUksQ0FBQSxLQUFBSSxDQUFBLENBQUFvQixJQUFBLEdBQUEzQixDQUFBLENBQUFXLENBQUEsSUFBQWtDLE9BQUEsQ0FBQUMsT0FBQSxDQUFBbkMsQ0FBQSxFQUFBb0MsSUFBQSxDQUFBOUMsQ0FBQSxFQUFBSSxDQUFBO0FBQUEsU0FBQTJDLGtCQUFBN0MsQ0FBQSw2QkFBQUgsQ0FBQSxTQUFBRCxDQUFBLEdBQUFrRCxTQUFBLGFBQUFKLE9BQUEsV0FBQTVDLENBQUEsRUFBQUksQ0FBQSxRQUFBZSxDQUFBLEdBQUFqQixDQUFBLENBQUErQyxLQUFBLENBQUFsRCxDQUFBLEVBQUFELENBQUEsWUFBQW9ELE1BQUFoRCxDQUFBLElBQUF5QyxrQkFBQSxDQUFBeEIsQ0FBQSxFQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLEVBQUE4QyxLQUFBLEVBQUFDLE1BQUEsVUFBQWpELENBQUEsY0FBQWlELE9BQUFqRCxDQUFBLElBQUF5QyxrQkFBQSxDQUFBeEIsQ0FBQSxFQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLEVBQUE4QyxLQUFBLEVBQUFDLE1BQUEsV0FBQWpELENBQUEsS0FBQWdELEtBQUE7QUFEQTtBQUNBO0FBQ0E7QUFDK0M7QUFDZjtBQUMyQztBQUNRO0FBQ2hCO0FBQ3JCO0FBRTlDLElBQU04TyxTQUFTLEdBQUcsS0FBSztBQUV2QixJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXFCQSxDQUFHQyxDQUFDO0VBQUEsT0FBSUEsQ0FBQyxDQUFDQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDQSxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztBQUFBO0FBRTVGLFNBQVNDLGlCQUFpQkEsQ0FBQ2xSLENBQUMsRUFBRW1SLENBQUMsRUFBRTtFQUM3QixPQUFPTCxxQkFBcUIsQ0FBQzlRLENBQUMsQ0FBQyxLQUFLOFEscUJBQXFCLENBQUNLLENBQUMsQ0FBQztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLHVCQUF1QkEsQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJLEVBQUU7RUFDekMsSUFBTUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDelIsQ0FBQyxFQUFFbVIsQ0FBQztJQUFBLE9BQUtuUixDQUFDLEdBQUdtUixDQUFDO0VBQUEsRUFBQztFQUNoRCxJQUFNTyxLQUFLLEdBQUdKLElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUN6UixDQUFDLEVBQUVtUixDQUFDO0lBQUEsT0FBS25SLENBQUMsR0FBR21SLENBQUM7RUFBQSxFQUFDO0VBQ2hELE9BQU9JLEtBQUssQ0FBQ3BSLE1BQU0sS0FBS3VSLEtBQUssQ0FBQ3ZSLE1BQU0sSUFBSW9SLEtBQUssQ0FBQ0ksS0FBSyxDQUFDLFVBQUNuUixLQUFLLEVBQUVvUixLQUFLO0lBQUEsT0FBS3BSLEtBQUssS0FBS2tSLEtBQUssQ0FBQ0UsS0FBSyxDQUFDO0VBQUEsRUFBQztBQUNqRztBQUVBLElBQUlDLGNBQWM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkEsU0FPZUMsdUJBQXVCQSxDQUFBQyxFQUFBLEVBQUFDLEdBQUE7RUFBQSxPQUFBQyx3QkFBQSxDQUFBblEsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFBQSxTQUFBb1EseUJBQUE7RUFBQUEsd0JBQUEsR0FBQXJRLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUF0QyxTQUFBaVIsU0FBdUNDLFFBQVEsRUFBRUMsS0FBSztJQUFBLElBQUFDLE9BQUEsRUFBQUMsU0FBQSxFQUFBQyxLQUFBLEVBQUFDLFNBQUEsRUFBQUMsS0FBQTtJQUFBLE9BQUExUixZQUFBLEdBQUFDLENBQUEsV0FBQTBSLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBM1QsQ0FBQTtRQUFBO1VBQUEsSUFBTHFULEtBQUs7WUFBTEEsS0FBSyxHQUFHLEVBQUU7VUFBQTtVQUNqREMsT0FBTyxHQUFHLEVBQUU7VUFDWkMsU0FBUyxHQUFHLEVBQUUsRUFBRTtVQUFBQyxLQUFBLGdCQUFBeFIsWUFBQSxHQUFBRSxDQUFBLFVBQUFzUixNQUFBO1lBQUEsSUFBQUksT0FBQSxFQUFBL1MsQ0FBQTtZQUFBLE9BQUFtQixZQUFBLEdBQUFDLENBQUEsV0FBQTRSLFNBQUE7Y0FBQSxrQkFBQUEsU0FBQSxDQUFBN1QsQ0FBQTtnQkFBQTtrQkFFWDRULE9BQU8sR0FBQUYsS0FBQSxDQUFBalMsS0FBQTtrQkFDZDtrQkFDTVosQ0FBQyxHQUFHK1MsT0FBTyxDQUFDLENBQUMsQ0FBQ2hSLElBQUksQ0FBQyxVQUFBa1IsTUFBTSxFQUFJO29CQUMvQjtvQkFDQVAsU0FBUyxDQUFDUSxNQUFNLENBQUNSLFNBQVMsQ0FBQ1MsT0FBTyxDQUFDblQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxPQUFPaVQsTUFBTTtrQkFDakIsQ0FBQyxDQUFDO2tCQUNGUixPQUFPLENBQUNXLElBQUksQ0FBQ3BULENBQUMsQ0FBQztrQkFDZjBTLFNBQVMsQ0FBQ1UsSUFBSSxDQUFDcFQsQ0FBQyxDQUFDOztrQkFFakI7a0JBQUEsTUFDSTBTLFNBQVMsQ0FBQ25TLE1BQU0sSUFBSWlTLEtBQUs7b0JBQUFRLFNBQUEsQ0FBQTdULENBQUE7b0JBQUE7a0JBQUE7a0JBQUE2VCxTQUFBLENBQUE3VCxDQUFBO2tCQUFBLE9BRW5CMEMsT0FBTyxDQUFDd1IsSUFBSSxDQUFDWCxTQUFTLENBQUM7Z0JBQUE7a0JBQUEsT0FBQU0sU0FBQSxDQUFBNVMsQ0FBQTtjQUFBO1lBQUEsR0FBQXVTLEtBQUE7VUFBQTtVQUFBQyxTQUFBLEdBQUFVLCtCQUFBLENBYmZmLFFBQVE7UUFBQTtVQUFBLEtBQUFNLEtBQUEsR0FBQUQsU0FBQSxJQUFBalMsSUFBQTtZQUFBbVMsU0FBQSxDQUFBM1QsQ0FBQTtZQUFBO1VBQUE7VUFBQSxPQUFBMlQsU0FBQSxDQUFBelMsQ0FBQSxDQUFBa1Qsa0JBQUEsQ0FBQVosS0FBQTtRQUFBO1VBQUFHLFNBQUEsQ0FBQTNULENBQUE7VUFBQTtRQUFBO1VBQUEsT0FBQTJULFNBQUEsQ0FBQTFTLENBQUEsSUFrQnZCeUIsT0FBTyxDQUFDMlIsR0FBRyxDQUFDZixPQUFPLENBQUM7TUFBQTtJQUFBLEdBQUFILFFBQUE7RUFBQSxDQUM5QjtFQUFBLE9BQUFELHdCQUFBLENBQUFuUSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLElBRW9Cd1IsY0FBYywwQkFBQUMscUJBQUE7RUEySy9CLFNBQUFELGVBQVl6SSxNQUFNLEVBQVc7SUFBQSxJQUFBMUgsS0FBQTtJQUN6QndOLCtEQUF1QixDQUFDOUYsTUFBTSxDQUFDO0lBQUMsU0FBQTJJLElBQUEsR0FBQTFSLFNBQUEsQ0FBQTFCLE1BQUEsRUFEYnFULEtBQUksT0FBQUMsS0FBQSxDQUFBRixJQUFBLE9BQUFBLElBQUEsV0FBQUcsSUFBQSxNQUFBQSxJQUFBLEdBQUFILElBQUEsRUFBQUcsSUFBQTtNQUFKRixLQUFJLENBQUFFLElBQUEsUUFBQTdSLFNBQUEsQ0FBQTZSLElBQUE7SUFBQTtJQUd2QnhRLEtBQUEsR0FBQW9RLHFCQUFBLENBQUFoVCxJQUFBLENBQUF3QixLQUFBLENBQUF3UixxQkFBQSxTQUFNMUksTUFBTSxFQUFBK0ksTUFBQSxDQUFLSCxLQUFJLEVBQUM7SUFBQ3RRLEtBQUEsQ0E3SzNCMFEsNkJBQTZCO0lBQUExUSxLQUFBLENBSTdCMlEsc0JBQXNCO0lBQUEzUSxLQUFBLENBeUR0QjRRLHFCQUFxQjtJQUFBNVEsS0FBQSxDQU9yQjZRLDBCQUEwQjtJQUFBN1EsS0FBQSxDQU8xQjhRLGlDQUFpQztJQUFBOVEsS0FBQSxDQUlqQytRLG1CQUFtQjtJQUFBL1EsS0FBQSxDQXdCbkJnUix3QkFBd0I7SUFBQWhSLEtBQUEsQ0FXeEJpUixnQkFBZ0I7SUFBQWpSLEtBQUEsQ0F5QmhCa1IsZUFBZTtJQUFBbFIsS0FBQSxDQVlmbVIsYUFBYSxHQUFHLEtBQUs7SUFBQW5SLEtBQUEsQ0FDckJvUixhQUFhLEdBQUcsS0FBSztJQUFBcFIsS0FBQSxDQUVyQnFSLHdCQUF3QixHQUFHLHNCQUFzQjtJQUVqRDtBQUNKO0FBQ0E7QUFDQTtJQUhJclIsS0FBQSxDQUlBc1IscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQUF0UixLQUFBLENBRTFCdVIsT0FBTyxHQUFHO01BQ05DLEdBQUcsRUFBRSxTQUFMQSxHQUFHQSxDQUFBLEVBQWU7UUFDZCxJQUFJN0QsU0FBUyxFQUFFO1VBQUEsSUFBQThELFFBQUE7VUFDWCxDQUFBQSxRQUFBLEdBQUFGLE9BQU8sRUFBQ0MsR0FBRyxDQUFBNVMsS0FBQSxDQUFBNlMsUUFBQSxFQUFBOVMsU0FBUSxDQUFDO1FBQ3hCO01BQ0o7SUFDSixDQUFDO0lBT0csSUFBTStTLEtBQUssR0FBRzFSLEtBQUEsQ0FBSzBILE1BQU0sQ0FBQ3pILElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUN0RCxJQUFNMFIsaUJBQWlCLEdBQUdELEtBQUssQ0FBQ3pSLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQzs7SUFFeEU7QUFDUjtBQUNBO0lBQ1FELEtBQUEsQ0FBSzhILFNBQVMsR0FBRy9HLE1BQU0sQ0FBQzJRLEtBQUssQ0FBQ3pSLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDMlIsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRTVSLEtBQUEsQ0FBSzZSLHNCQUFzQixDQUFDSCxLQUFLLENBQUM7O0lBRWxDO0FBQ1I7QUFDQTtBQUNBO0lBQ1E7SUFDQTFSLEtBQUEsQ0FBSzhSLG9CQUFvQixHQUFHSCxpQkFBaUIsQ0FBQzFVLE1BQU0sR0FBRyxDQUFDO0lBRXhELElBQUkrQyxLQUFBLENBQUs4UixvQkFBb0IsRUFBRTtNQUMzQjlSLEtBQUEsQ0FBSytSLG9CQUFvQixDQUFDLENBQUM7SUFDL0I7SUFFQS9SLEtBQUEsQ0FBS2dTLHFCQUFxQixDQUFDLENBQUM7SUFDNUJoUyxLQUFBLENBQUtpUyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2hDalMsS0FBQSxDQUFLa1MsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QmxTLEtBQUEsQ0FBS21TLGlCQUFpQixDQUFDLENBQUM7SUFDeEJuUyxLQUFBLENBQUtvUyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pCcFMsS0FBQSxDQUFLcVMsaUJBQWlCLENBQUMsQ0FBQztJQUN4QnJTLEtBQUEsQ0FBS3NTLDhCQUE4QixDQUFDLENBQUM7SUFDckN0UyxLQUFBLENBQUt1UywwQkFBMEIsQ0FBQyxDQUFDO0lBQ2pDdlMsS0FBQSxDQUFLd1Msa0JBQWtCLENBQUMsQ0FBQztJQUN6QnhTLEtBQUEsQ0FBS3lTLDBCQUEwQixDQUFDLENBQUM7SUFDakM3UyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNnRixPQUFPLENBQUMseUJBQXlCLEVBQUUsQ0FBQzVFLEtBQUEsQ0FBSzBILE1BQU0sQ0FBQyxDQUFDO0lBQUMsT0FBQTFILEtBQUE7RUFDaEU7RUFBQ2pCLGNBQUEsQ0FBQW9SLGNBQUEsRUFBQUMscUJBQUE7RUFBQSxJQUFBdFEsTUFBQSxHQUFBcVEsY0FBQSxDQUFBaFUsU0FBQTtFQUFBMkQsTUFBQSxDQUVEK1Isc0JBQXNCLEdBQXRCLFNBQUFBLHNCQUFzQkEsQ0FBQ0gsS0FBSyxFQUFxRDtJQUFBLElBQTFEQSxLQUFLO01BQUxBLEtBQUssR0FBRyxJQUFJLENBQUNoSyxNQUFNLENBQUN6SCxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQ29LLEtBQUssQ0FBQyxDQUFDO0lBQUE7SUFDM0UsSUFBTXFJLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBR0MsUUFBUSxFQUFJO01BQzlCLElBQU1oUSxJQUFJLEdBQUcrTyxLQUFLLENBQUN6UixJQUFJLENBQUMwUyxRQUFRLENBQUMsQ0FBQ3RJLEtBQUssQ0FBQyxDQUFDLENBQUMxSCxJQUFJLENBQUMsQ0FBQztNQUVoRCxJQUFJQSxJQUFJLEVBQUU7UUFDTixJQUFJO1VBQ0EsT0FBTzJJLElBQUksQ0FBQ3NILEtBQUssQ0FBQ2pRLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUMsT0FBT2xILENBQUMsRUFBRTtVQUNSO1FBQUE7TUFFUjtNQUVBLE9BQU8sRUFBRTtJQUNiLENBQUM7O0lBRUQ7QUFDUjtBQUNBO0lBQ1EsSUFBSSxDQUFDMlEsWUFBWSxHQUFHc0csYUFBYSxDQUFDLG9DQUFvQyxDQUFDOztJQUV2RTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ1EsSUFBSSxDQUFDRyxjQUFjLEdBQUdILGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQztJQUVuRSxJQUFJLENBQUNuQixPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUNwRixZQUFZLENBQUM7SUFDbkUsSUFBSSxDQUFDbUYsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDcUIsY0FBYyxDQUFDO0VBQzNFLENBQUM7RUFBQS9TLE1BQUEsQ0FNRGdULFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFBLEVBQVU7SUFBQSxJQUFBQyxzQkFBQTtJQUFBLFNBQUFDLEtBQUEsR0FBQXJVLFNBQUEsQ0FBQTFCLE1BQUEsRUFBTnFULElBQUksT0FBQUMsS0FBQSxDQUFBeUMsS0FBQSxHQUFBQyxLQUFBLE1BQUFBLEtBQUEsR0FBQUQsS0FBQSxFQUFBQyxLQUFBO01BQUozQyxJQUFJLENBQUEyQyxLQUFBLElBQUF0VSxTQUFBLENBQUFzVSxLQUFBO0lBQUE7SUFDaEIsSUFBTUMsS0FBSyxJQUFBSCxzQkFBQSxHQUFBM0MscUJBQUEsQ0FBQWpVLFNBQUEsQ0FBUzJXLFlBQVksRUFBQTFWLElBQUEsQ0FBQXdCLEtBQUEsQ0FBQW1VLHNCQUFBLFNBQUF0QyxNQUFBLENBQUlILElBQUksRUFBQztJQUN6QzRDLEtBQUssQ0FBQ0MscUJBQXFCLEdBQUcsSUFBSSxDQUFDQSxxQkFBcUI7SUFDeEQsT0FBT0QsS0FBSztFQUNoQixDQUFDO0VBQUFwVCxNQUFBLENBRURzVCw2QkFBNkIsR0FBN0IsU0FBQUEsNkJBQTZCQSxDQUFDM1MsSUFBSSxFQUFFO0lBQ2hDMlAscUJBQUEsQ0FBQWpVLFNBQUEsQ0FBTWlYLDZCQUE2QixDQUFBaFcsSUFBQSxPQUFDcUQsSUFBSTtJQUN4QyxJQUFNNFMsSUFBSSxHQUFHLElBQUksQ0FBQ0YscUJBQXFCLENBQUNsVCxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdELElBQUksQ0FBQ1EsSUFBSSxDQUFDNlMsV0FBVyxJQUFJLENBQUM3UyxJQUFJLENBQUM4UyxPQUFPLEVBQUU7TUFDcENGLElBQUksQ0FBQ0csSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7SUFDL0IsQ0FBQyxNQUFNO01BQ0hILElBQUksQ0FBQ0csSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7SUFDaEM7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBSkk7RUFBQTFULE1BQUEsQ0FLQTJULGdCQUFnQixHQUFoQixTQUFBQSxnQkFBZ0JBLENBQUNyVCxLQUFLLEVBQUVzVCxJQUFJLEVBQUU7SUFDMUIsSUFBSXRULEtBQUssQ0FBQ3VULGlCQUFpQixFQUFFO01BQ3pCL1QsQ0FBQyxDQUFDOFQsSUFBSSxDQUFDLENBQUN6VCxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQzJSLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQztNQUNuRSxJQUFJLENBQUNnQyxpQkFBaUIsQ0FBQ3hULEtBQUssRUFBRXNULElBQUksQ0FBQztJQUN2QyxDQUFDLE1BQU07TUFDSDlULENBQUMsQ0FBQzhULElBQUksQ0FBQyxDQUFDelQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMyUixHQUFHLENBQUMsS0FBSyxDQUFDO01BQy9DeEIscUJBQUEsQ0FBQWpVLFNBQUEsQ0FBTXNYLGdCQUFnQixDQUFBclcsSUFBQSxPQUFDZ0QsS0FBSyxFQUFFc1QsSUFBSTtJQUN0QztFQUNKOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTkk7RUFBQTVULE1BQUEsQ0FPTThULGlCQUFpQjtFQUFBO0VBQUE7SUFBQSxJQUFBQyxrQkFBQSxHQUFBblYsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQXZCLFNBQUEySyxRQUF3QnRJLEtBQUssRUFBRXNULElBQUk7TUFBQSxJQUFBeFAsTUFBQTtNQUFBLElBQUE0UCxRQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxRQUFBLEVBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxNQUFBLEVBQUFDLE1BQUEsRUFBQUMsRUFBQTtNQUFBLE9BQUF6VyxZQUFBLEdBQUFDLENBQUEsV0FBQTZLLFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBak0sQ0FBQSxHQUFBaU0sUUFBQSxDQUFBOU0sQ0FBQTtVQUFBO1lBQ3pCaVksUUFBUSxHQUFHbFUsQ0FBQyxDQUFDLCtCQUErQixFQUFFQSxDQUFDLENBQUNRLEtBQUssQ0FBQ2tCLE1BQU0sQ0FBQyxDQUFDLENBQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3BGOFQsY0FBYyxHQUFHRCxRQUFRLENBQUNsQyxHQUFHLENBQUMsQ0FBQztZQUMvQm9DLFdBQVcsR0FBR0YsUUFBUSxDQUFDclQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUVoRDtZQUFBLE1BQ0k4VCxNQUFNLENBQUNDLFFBQVEsS0FBS0MsU0FBUztjQUFBOUwsUUFBQSxDQUFBOU0sQ0FBQTtjQUFBO1lBQUE7WUFBQSxPQUFBOE0sUUFBQSxDQUFBN0wsQ0FBQTtVQUFBO1lBSTNCbVgsUUFBUSxHQUFHLElBQUlPLFFBQVEsQ0FBQ2QsSUFBSSxDQUFDLEVBRW5DO1lBQ0F0VCxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1lBRXRCeVQsUUFBUSxDQUNIbEMsR0FBRyxDQUFDb0MsV0FBVyxDQUFDLENBQ2hCUixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztZQUUzQixJQUFJLENBQUNrQixRQUFRLENBQUNsUSxJQUFJLENBQUMsQ0FBQztZQUVwQixJQUFJLENBQUNtUSx1QkFBdUIsQ0FBQ2IsUUFBUSxDQUFDYyxJQUFJLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7WUFFM0RWLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJVyxRQUFRLEVBQUs7Y0FDMUJmLFFBQVEsQ0FDSGxDLEdBQUcsQ0FBQ21DLGNBQWMsQ0FBQyxDQUNuQlAsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7Y0FFNUJ0UCxNQUFJLENBQUN3USxRQUFRLENBQUMvUSxJQUFJLENBQUMsQ0FBQztjQUVwQixJQUFJLE9BQU9PLE1BQUksQ0FBQzRRLE9BQU8sQ0FBQ0MsbUJBQW1CLEtBQUssVUFBVSxFQUFFO2dCQUN4RDdRLE1BQUksQ0FBQzRRLE9BQU8sQ0FBQ0MsbUJBQW1CLENBQUNGLFFBQVEsQ0FBQztjQUM5QztZQUNKLENBQUM7WUFFS1YsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlhLFNBQVMsRUFBSztjQUMzQjtjQUNBLElBQU1DLEdBQUcsR0FBRzdRLFFBQVEsQ0FBQzhRLGFBQWEsQ0FBQyxLQUFLLENBQUM7Y0FDekNELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHSCxTQUFTO2NBRXpCLElBQUksQ0FBQzlRLE1BQUksQ0FBQ2tSLHFCQUFxQixDQUFDdEIsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZDekcsK0RBQVUsQ0FBQyxDQUFDLENBQUNnSSxrQkFBa0IsR0FBR3ZCLFFBQVE7Y0FDOUM7Y0FFQSxPQUFPeEcsbUVBQWMsQ0FBQzJILEdBQUcsQ0FBQ0ssV0FBVyxJQUFJTCxHQUFHLENBQUNNLFNBQVMsQ0FBQztZQUMzRCxDQUFDO1lBQUEsS0FFRyxJQUFJLENBQUNULE9BQU8sQ0FBQ1UsbUJBQW1CO2NBQUE3TSxRQUFBLENBQUE5TSxDQUFBO2NBQUE7WUFBQTtZQUMxQnVZLE1BQU0sR0FBR0gsUUFBUSxDQUFDelIsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUNoQzZSLE1BQU0sR0FBR0osUUFBUSxDQUFDelIsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUFBbUcsUUFBQSxDQUFBak0sQ0FBQTtZQUFBaU0sUUFBQSxDQUFBOU0sQ0FBQTtZQUFBLE9BRzFCLElBQUksQ0FBQzRaLHNCQUFzQixDQUFDckIsTUFBTSxFQUFFQyxNQUFNLENBQUM7VUFBQTtZQUFBMUwsUUFBQSxDQUFBOU0sQ0FBQTtZQUFBO1VBQUE7WUFBQThNLFFBQUEsQ0FBQWpNLENBQUE7WUFBQTRYLEVBQUEsR0FBQTNMLFFBQUEsQ0FBQTlMLENBQUE7WUFBQSxPQUFBOEwsUUFBQSxDQUFBN0wsQ0FBQSxJQUUxQ3FYLE9BQU8sQ0FBQUcsRUFBTSxDQUFDO1VBQUE7WUFBQTNMLFFBQUEsQ0FBQTlNLENBQUE7WUFBQSxPQUl2QitELENBQUMsQ0FBQ3dMLElBQUksQ0FBQztjQUNUc0ssSUFBSSxFQUFFLE1BQU07Y0FDWm5NLEdBQUcsRUFBRW1LLElBQUksQ0FBQ2lDLFlBQVksQ0FBQyxRQUFRLENBQUM7Y0FDaENsVixJQUFJLEVBQUV3VCxRQUFRO2NBQ2QyQixXQUFXLEVBQUUsS0FBSztjQUNsQkMsV0FBVyxFQUFFO1lBQ2pCLENBQUMsQ0FBQyxDQUFDeFksSUFBSSxDQUFDLFVBQUN3WCxRQUFRO2NBQUEsT0FBS1gsT0FBTyxDQUFDVyxRQUFRLENBQUM7WUFBQSxFQUFDLENBQUNpQixJQUFJLENBQUMsVUFBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUs7Y0FBQSxPQUFLOUIsT0FBTyxDQUFDOEIsS0FBSyxDQUFDO1lBQUEsRUFBQztVQUFBO1lBQUEsT0FBQXROLFFBQUEsQ0FBQTdMLENBQUE7UUFBQTtNQUFBLEdBQUE0TCxPQUFBO0lBQUEsQ0FDMUY7SUFBQSxTQWpFS2tMLGlCQUFpQkEsQ0FBQXNDLEdBQUEsRUFBQUMsR0FBQTtNQUFBLE9BQUF0QyxrQkFBQSxDQUFBalYsS0FBQSxPQUFBRCxTQUFBO0lBQUE7SUFBQSxPQUFqQmlWLGlCQUFpQjtFQUFBO0VBQUE5VCxNQUFBLENBbUV2QjJWLHNCQUFzQixHQUF0QixTQUFBQSxzQkFBc0JBLENBQUNyQixNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUNuQyxPQUFPLElBQUk5VixPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFNFgsTUFBTSxFQUFLO01BQ3BDakosc0VBQVMsQ0FBQ21KLElBQUksQ0FBQ0MsVUFBVSxDQUFDbkMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsVUFBQ21DLEdBQUcsRUFBRTNCLFFBQVEsRUFBSztRQUFBLElBQUE0QixjQUFBO1FBQ3pELElBQUlELEdBQUcsRUFBRTtVQUNMLE9BQU9KLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDO1FBQ3RCO1FBQ0EsSUFBSSxDQUFBM0IsUUFBUSxhQUFBNEIsY0FBQSxHQUFSNUIsUUFBUSxDQUFFcFUsSUFBSSxxQkFBZGdXLGNBQUEsQ0FBZ0JDLE1BQU0sTUFBSyxTQUFTLEVBQUU7VUFDdENOLE1BQU0sQ0FBQ3ZCLFFBQVEsQ0FBQ3BVLElBQUksQ0FBQ2tXLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUMsTUFBTTtVQUNIcFksT0FBTyxDQUFDcVcsUUFBUSxDQUFDO1FBQ3JCO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047O0VBRUE7QUFDSjtBQUNBO0FBQ0EsS0FISTtFQUFBL1UsTUFBQSxDQUlBa1MscUJBQXFCLEdBQXJCLFNBQUFBLHFCQUFxQkEsQ0FBQSxFQUFHO0lBQ3BCLElBQU02RSxXQUFXLEdBQUdqWCxDQUFDLENBQUNrWCxLQUFLLENBQUMsUUFBUSxFQUFFO01BQUVuRCxpQkFBaUIsRUFBRTtJQUFLLENBQUMsQ0FBQztJQUNsRSxJQUFNakMsS0FBSyxHQUFHLElBQUksQ0FBQ2hLLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUV0RCxJQUFJLENBQUNrVCxxQkFBcUIsQ0FBQ2xULElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQ0UsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDbEVBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDdEJxUixLQUFLLENBQUM5TSxPQUFPLENBQUNpUyxXQUFXLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBL1csTUFBQSxDQUVEbVMseUJBQXlCLEdBQXpCLFNBQUFBLHlCQUF5QkEsQ0FBQSxFQUFHO0lBQUEsSUFBQXBOLE1BQUE7SUFDeEIsSUFBTWtTLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBMEJBLENBQUczVyxLQUFLLEVBQUk7TUFDeENBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFFdEIsSUFBTTJXLE9BQU8sR0FBR3BYLENBQUMsQ0FBQ1EsS0FBSyxDQUFDRyxhQUFhLENBQUM7TUFDdEMsSUFBSXlXLE9BQU8sQ0FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSXdELE9BQU8sQ0FBQzFVLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDdEU7TUFDSjtNQUVBLElBQU1vUCxLQUFLLEdBQUc3TSxNQUFJLENBQUM2QyxNQUFNLENBQUN6SCxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQ29LLEtBQUssQ0FBQyxDQUFDO01BQ2xFLElBQUksQ0FBQ3FILEtBQUssQ0FBQ3pVLE1BQU0sRUFBRTtRQUNmO01BQ0o7TUFFQSxJQUFNZ2EsVUFBVSxHQUFHRCxPQUFPLENBQUNFLFFBQVEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUNqRWpYLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUM3Q29LLEtBQUssQ0FBQyxDQUFDO01BQ1osSUFBTThNLFFBQVEsR0FBR3pGLEtBQUssQ0FBQ3pSLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDb0ssS0FBSyxDQUFDLENBQUM7TUFFakYsSUFBSTRNLFVBQVUsQ0FBQ2hhLE1BQU0sSUFBSWthLFFBQVEsQ0FBQ2xhLE1BQU0sSUFBSWthLFFBQVEsQ0FBQ3ZGLEdBQUcsQ0FBQyxDQUFDLEtBQUtxRixVQUFVLENBQUNyRixHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQzdFdUYsUUFBUSxDQUFDdkYsR0FBRyxDQUFDcUYsVUFBVSxDQUFDckYsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDaE4sT0FBTyxDQUFDLFFBQVEsQ0FBQztNQUNwRDtNQUVBLElBQU04TyxJQUFJLEdBQUdoQyxLQUFLLENBQUMsQ0FBQyxDQUFDO01BRXJCLElBQUlnQyxJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDMEQsYUFBYSxDQUFDLENBQUMsRUFBRTtRQUMvQixJQUFNQyxZQUFZLEdBQUczRCxJQUFJLENBQUM0RCxhQUFhLENBQUMsVUFBVSxDQUFDO1FBRW5ELElBQUlELFlBQVksWUFBWkEsWUFBWSxDQUFFRSxjQUFjLEVBQUU7VUFDOUJGLFlBQVksQ0FBQ0UsY0FBYyxDQUFDO1lBQUVDLFFBQVEsRUFBRSxRQUFRO1lBQUVDLEtBQUssRUFBRTtVQUFTLENBQUMsQ0FBQztRQUN4RTtRQUVBLElBQUlKLFlBQVksWUFBWkEsWUFBWSxDQUFFSyxLQUFLLEVBQUU7VUFDckJMLFlBQVksQ0FBQ0ssS0FBSyxDQUFDLENBQUM7UUFDeEI7UUFFQSxJQUFJLE9BQU9oRSxJQUFJLENBQUNpRSxjQUFjLEtBQUssVUFBVSxFQUFFO1VBQzNDakUsSUFBSSxDQUFDaUUsY0FBYyxDQUFDLENBQUM7UUFDekIsQ0FBQyxNQUFNLElBQUlOLFlBQVksWUFBWkEsWUFBWSxDQUFFTSxjQUFjLEVBQUU7VUFDckNOLFlBQVksQ0FBQ00sY0FBYyxDQUFDLENBQUM7UUFDakM7UUFFQTtNQUNKO01BRUFqRyxLQUFLLENBQUM5TSxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLENBQUM4QyxNQUFNLENBQUN6SCxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FDbENDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUNqQ0MsRUFBRSxDQUFDLDRCQUE0QixFQUFFNFcsMEJBQTBCLENBQUM7RUFDckUsQ0FBQztFQUFBalgsTUFBQSxDQUVEb1MsZ0JBQWdCLEdBQWhCLFNBQUFBLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQTFMLE1BQUE7SUFDZjtJQUNBO0lBQ0EsSUFBSSxDQUFDa0IsTUFBTSxDQUFDNUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDOFcsR0FBRyxDQUFDckssNERBQVcsQ0FBQ3NLLE1BQU0sRUFBRSxZQUFNO01BQ3hEclIsTUFBSSxDQUFDaEgsWUFBWSxDQUFDa04saUJBQWlCLENBQUMzSyxZQUFZLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFqQyxNQUFBLENBRURxUyxpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFBLEVBQUc7SUFDaEIsSUFBSSxDQUFDekssTUFBTSxDQUFDekgsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM2WCxJQUFJLENBQUMsVUFBQ3ZTLEVBQUUsRUFBRXdTLFdBQVcsRUFBSztNQUN4RSxJQUFNQyxVQUFVLEdBQUdwWSxDQUFDLENBQUNtWSxXQUFXLENBQUM7TUFDakMsSUFBTUUsSUFBSSxHQUFHRCxVQUFVLENBQUMvWCxJQUFJLENBQUMscUJBQXFCLENBQUM7TUFDbkQsSUFBTWlZLElBQUksR0FBR0YsVUFBVSxDQUFDL1gsSUFBSSxDQUFDLHFCQUFxQixDQUFDO01BQ25ELElBQU1rWSxNQUFNLEdBQUdILFVBQVUsQ0FBQy9YLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztNQUV2RCxJQUFNbVksSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBUztRQUNmSixVQUFVLENBQUMvWCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUNxRSxRQUFRLENBQUMsV0FBVyxDQUFDO1FBRXBELElBQU0rVCxPQUFPLEdBQUdMLFVBQVUsQ0FBQy9YLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0RCxJQUFNcVksUUFBUSxHQUFHRCxPQUFPLENBQUM3VSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzNDLElBQU0rVSxNQUFNLEdBQUdGLE9BQU8sQ0FBQ2hPLEtBQUssQ0FBQyxDQUFDO1FBRTlCLElBQUlpTyxRQUFRLENBQUNyYixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3JCLElBQU1oQixDQUFDLEdBQUdvYyxPQUFPLENBQUMzSixLQUFLLENBQUM0SixRQUFRLENBQUM7VUFDakNMLElBQUksQ0FBQ3pFLElBQUksQ0FBQyxVQUFVLEVBQUV2WCxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQzlCaWMsSUFBSSxDQUFDMUUsSUFBSSxDQUFDLFVBQVUsRUFBRXZYLENBQUMsS0FBS29jLE9BQU8sQ0FBQ3BiLE1BQU0sR0FBRyxDQUFDLENBQUM7VUFDL0NrYixNQUFNLENBQUM3VCxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQy9CLENBQUMsTUFBTSxJQUFJaVUsTUFBTSxDQUFDdGIsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUMxQmdiLElBQUksQ0FBQ3pFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1VBQzNCMEUsSUFBSSxDQUFDMUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7UUFDaEM7UUFFQXdFLFVBQVUsQ0FBQy9YLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ3dFLFdBQVcsQ0FBQyxXQUFXLENBQUM7TUFDM0QsQ0FBQztNQUVEMlQsSUFBSSxDQUFDLENBQUM7TUFFTixJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSUMsR0FBRyxFQUFLO1FBQ3BCVCxVQUFVLENBQUMvWCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUNxRSxRQUFRLENBQUMsV0FBVyxDQUFDO1FBRXBELElBQU0rVCxPQUFPLEdBQUdMLFVBQVUsQ0FBQy9YLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0RCxJQUFNcVksUUFBUSxHQUFHRCxPQUFPLENBQUM3VSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzNDLElBQU0rVSxNQUFNLEdBQUdGLE9BQU8sQ0FBQ2hPLEtBQUssQ0FBQyxDQUFDO1FBRTlCLElBQUlpTyxRQUFRLENBQUNyYixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3JCO1VBQ0EsSUFBTWhCLENBQUMsR0FBR29jLE9BQU8sQ0FBQzNKLEtBQUssQ0FBQzRKLFFBQVEsQ0FBQztVQUNqQyxJQUFJRyxHQUFHLEVBQUU7WUFDTDtZQUNBLElBQUl4YyxDQUFDLEdBQUdvYyxPQUFPLENBQUNwYixNQUFNLEdBQUcsQ0FBQyxFQUFFO2NBQ3hCb2IsT0FBTyxDQUFDSyxFQUFFLENBQUN6YyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUN1WCxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDNU8sT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN6RHFULElBQUksQ0FBQ3pFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO2NBQzVCMEUsSUFBSSxDQUFDMUUsSUFBSSxDQUFDLFVBQVUsRUFBRXZYLENBQUMsR0FBRyxDQUFDLEtBQUtvYyxPQUFPLENBQUNwYixNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZEO1VBQ0osQ0FBQyxNQUFNLElBQUloQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2Q7WUFDQW9jLE9BQU8sQ0FBQ0ssRUFBRSxDQUFDemMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDdVgsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzVPLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDekRzVCxJQUFJLENBQUMxRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztZQUM1QnlFLElBQUksQ0FBQ3pFLElBQUksQ0FBQyxVQUFVLEVBQUV2WCxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztVQUN0QztVQUNBa2MsTUFBTSxDQUFDN1QsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUMvQixDQUFDLE1BQU0sSUFBSWlVLE1BQU0sQ0FBQ3RiLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDMUI7VUFDQSxJQUFJd2IsR0FBRyxJQUFJRixNQUFNLENBQUMvVSxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQ3ZHLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUQ7WUFDQW9iLE9BQU8sQ0FBQ00sR0FBRyxDQUFDSixNQUFNLENBQUMsQ0FBQ2xPLEtBQUssQ0FBQyxDQUFDLENBQUNtSixJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDNU8sT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUNuRXFULElBQUksQ0FBQ3pFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1lBQzVCMEUsSUFBSSxDQUFDMUUsSUFBSSxDQUFDLFVBQVUsRUFBRTZFLE9BQU8sQ0FBQ3BiLE1BQU0sS0FBSyxDQUFDLENBQUM7VUFDL0MsQ0FBQyxNQUFNO1lBQ0g7WUFDQXNiLE1BQU0sQ0FBQy9FLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM1TyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzlDcVQsSUFBSSxDQUFDekUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDM0IwRSxJQUFJLENBQUMxRSxJQUFJLENBQUMsVUFBVSxFQUFFNkUsT0FBTyxDQUFDcGIsTUFBTSxLQUFLLENBQUMsQ0FBQztVQUMvQztVQUNBa2IsTUFBTSxDQUFDN1QsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUMvQjs7UUFFQTtRQUNBLElBQUkwVCxVQUFVLENBQUMvWCxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQ3VELE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDdkcsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNyRmtiLE1BQU0sQ0FBQzFULFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDbEM7UUFFQXVULFVBQVUsQ0FBQy9YLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQ3dFLFdBQVcsQ0FBQyxXQUFXLENBQUM7TUFDM0QsQ0FBQztNQUVEd1QsSUFBSSxDQUFDOVgsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7UUFDdEJBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdEJtWSxNQUFNLENBQUMsS0FBSyxDQUFDO01BQ2pCLENBQUMsQ0FBQztNQUVGTixJQUFJLENBQUMvWCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtRQUN0QkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUN0Qm1ZLE1BQU0sQ0FBQyxJQUFJLENBQUM7TUFDaEIsQ0FBQyxDQUFDO01BRUZMLE1BQU0sQ0FBQ2hZLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO1FBQ3hCQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RCLElBQUk4WCxNQUFNLENBQUNTLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtVQUM3QjtVQUNBLElBQU1DLFFBQVEsR0FBR2IsVUFBVSxDQUFDL1gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUN1VCxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztVQUM5RSxJQUFNc0YsS0FBSyxHQUFHZCxVQUFVLENBQUMvWCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUN1RCxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQ2dRLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO1VBQ3BHLElBQUlzRixLQUFLLENBQUM3YixNQUFNLEdBQUcsQ0FBQyxFQUFFNmIsS0FBSyxDQUFDbFUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQ3pDLElBQUlpVSxRQUFRLENBQUM1YixNQUFNLEVBQUU0YixRQUFRLENBQUNqVSxPQUFPLENBQUMsUUFBUSxDQUFDO1VBQ3BEdVQsTUFBTSxDQUFDMVQsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUNsQyxDQUFDLE1BQU07VUFDSCtULE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEI7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0EsS0FGSTtFQUFBMVksTUFBQSxDQUdBc1Msa0JBQWtCLEdBQWxCLFNBQUFBLGtCQUFrQkEsQ0FBQSxFQUFHO0lBQ2pCLElBQUksSUFBSSxDQUFDMEMsT0FBTyxDQUFDVSxtQkFBbUIsRUFBRSxPQUFPLENBQUM7O0lBRTlDLElBQU11RCxPQUFPLEdBQUduWixDQUFDLG1EQUFnRCxJQUFJLENBQUNrSSxTQUFTLFFBQUksQ0FBQyxDQUFDOEosR0FBRyxDQUFDLENBQUM7SUFDMUYsSUFBSSxDQUFDbUgsT0FBTyxFQUFFO0lBRWQsSUFBTUMsSUFBSSxHQUFHLElBQUksQ0FBQ3RSLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyw0Q0FBNEMsQ0FBQztJQUMzRSxJQUFNZ1osR0FBRyxHQUFHRCxJQUFJLENBQUNwSCxHQUFHLENBQUMsQ0FBQztJQUN0QixJQUFJb0gsSUFBSSxDQUFDL2IsTUFBTSxHQUFHLENBQUMsSUFBSWdjLEdBQUcsS0FBS0YsT0FBTyxFQUFFO01BQ3BDQyxJQUFJLENBQUNwSCxHQUFHLENBQUNtSCxPQUFPLENBQUMsQ0FBQ25VLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDdkM7RUFDSixDQUFDO0VBQUE5RSxNQUFBLENBRUR1UyxpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFBLEVBQUc7SUFDaEIsSUFBUTZHLG9CQUFvQixHQUFLLElBQUksQ0FBQ3BFLE9BQU8sQ0FBckNvRSxvQkFBb0I7SUFDNUIsSUFBTTVWLEdBQUcsR0FBRyxJQUFJLENBQUNvRSxNQUFNLENBQUN6SCxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDMURxRCxHQUFHLENBQUM3QyxJQUFJLENBQUMsMkJBQTJCLEVBQUU7TUFBRTBZLE1BQU0sRUFBRTdWLEdBQUcsQ0FBQzdDLElBQUksQ0FBQyxvQkFBb0I7SUFBRSxDQUFDLENBQUM7SUFFakZpTix1REFBYSxDQUFDMEwsU0FBUyxDQUFDO01BQUVGLG9CQUFvQixFQUFwQkE7SUFBcUIsQ0FBQyxDQUFDO0lBQ2pEeEwsdURBQWEsQ0FBQzJMLEdBQUcsQ0FBQy9WLEdBQUcsQ0FBQztFQUMxQixDQUFDO0VBQUF4RCxNQUFBLENBRUR3Uyw4QkFBOEIsR0FBOUIsU0FBQUEsOEJBQThCQSxDQUFBLEVBQUc7SUFBQSxJQUFBbEwsTUFBQTtJQUM3QixJQUFJLENBQUNNLE1BQU0sQ0FBQ3hILEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSwyQkFBMkIsQ0FBQztJQUM1RSxJQUFJLENBQUN3SCxNQUFNLENBQUN2SCxFQUFFLENBQUMsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUUsWUFBTTtNQUM5RWlILE1BQUksQ0FBQ2tTLDRCQUE0QixDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDQSw0QkFBNEIsQ0FBQyxDQUFDO0VBQ3ZDLENBQUM7RUFBQXhaLE1BQUEsQ0FFRHdaLDRCQUE0QixHQUE1QixTQUFBQSw0QkFBNEJBLENBQUEsRUFBRztJQUFBLElBQUExUixNQUFBO0lBQzNCLElBQU04SixLQUFLLEdBQUcsSUFBSSxDQUFDaEssTUFBTSxDQUFDekgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUNvSyxLQUFLLENBQUMsQ0FBQztJQUM5RCxJQUFNa1AsaUJBQWlCLEdBQUc3SCxLQUFLLENBQUN6UixJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQ29LLEtBQUssQ0FBQyxDQUFDO0lBRTVFLElBQUlrUCxpQkFBaUIsQ0FBQ3RjLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDaEM7SUFDSjtJQUVBLElBQU11YyxjQUFjLEdBQUdELGlCQUFpQixDQUNuQ3RaLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUMvQ29LLEtBQUssQ0FBQyxDQUFDO0lBRVosSUFBSW1QLGNBQWMsQ0FBQ3ZjLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDN0I7SUFDSjtJQUVBLElBQU13YyxnQkFBZ0IsR0FBR0QsY0FBYyxDQUFDblksRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUN0RCxJQUFNcVksUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7SUFFdENBLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtNQUN4QixJQUFNQyxNQUFNLEdBQUdOLGlCQUFpQixDQUFDdFosSUFBSSxtQ0FBZ0MyWixPQUFPLFFBQUksQ0FBQyxDQUFDdlAsS0FBSyxDQUFDLENBQUM7TUFDekYsSUFBSXdQLE1BQU0sQ0FBQzVjLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckI7TUFDSjtNQUVBLElBQUl3YyxnQkFBZ0IsRUFBRTtRQUNsQjdSLE1BQUksQ0FBQ2tTLDBCQUEwQixDQUFDRCxNQUFNLENBQUM7UUFDdkNBLE1BQU0sQ0FBQzdULEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMxRCxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDbUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO01BQzlGLENBQUMsTUFBTTtRQUNIbUQsTUFBSSxDQUFDbVMsd0JBQXdCLENBQUNGLE1BQU0sQ0FBQztRQUNyQ0EsTUFBTSxDQUFDN1QsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQzFELElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO01BQzFEO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBeEMsTUFBQSxDQUVEZ2EsMEJBQTBCLEdBQTFCLFNBQUFBLDBCQUEwQkEsQ0FBQ0QsTUFBTSxFQUFFO0lBQy9CQSxNQUFNLENBQUM1WixJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQzZYLElBQUksQ0FBQyxVQUFDdlMsRUFBRSxFQUFFeVUsRUFBRSxFQUFLO01BQ3pFLElBQU0xVyxHQUFHLEdBQUcxRCxDQUFDLENBQUNvYSxFQUFFLENBQUM7TUFFakIsSUFBSSxDQUFDMVcsR0FBRyxDQUFDakMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDLEVBQUU7UUFDM0NpQyxHQUFHLENBQUNoQixJQUFJLENBQUMsOEJBQThCLEVBQUVnQixHQUFHLENBQUNrUSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztNQUNyRjtNQUVBbFEsR0FBRyxDQUFDa1EsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQ25SLFVBQVUsQ0FBQyxVQUFVLENBQUM7TUFFbEQsSUFBSWlCLEdBQUcsQ0FBQ2pDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1FBQzdCaUMsR0FBRyxDQUFDa1EsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7TUFDOUIsQ0FBQyxNQUFNLElBQUlsUSxHQUFHLENBQUNqQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDekJpQyxHQUFHLENBQUNrUSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztNQUNoQyxDQUFDLE1BQU07UUFDSGxRLEdBQUcsQ0FBQ3NPLEdBQUcsQ0FBQyxFQUFFLENBQUM7TUFDZjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTlSLE1BQUEsQ0FFRGlhLHdCQUF3QixHQUF4QixTQUFBQSx3QkFBd0JBLENBQUNGLE1BQU0sRUFBRTtJQUM3QkEsTUFBTSxDQUFDNVosSUFBSSxDQUFDLDhDQUE4QyxDQUFDLENBQUM2WCxJQUFJLENBQUMsVUFBQ3ZTLEVBQUUsRUFBRXlVLEVBQUUsRUFBSztNQUN6RSxJQUFNMVcsR0FBRyxHQUFHMUQsQ0FBQyxDQUFDb2EsRUFBRSxDQUFDO01BQ2pCLElBQU1DLGdCQUFnQixHQUFHM1csR0FBRyxDQUFDaEIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssTUFBTTtNQUU1RWdCLEdBQUcsQ0FBQ2tRLElBQUksQ0FBQyxVQUFVLEVBQUV5RyxnQkFBZ0IsQ0FBQztNQUN0QyxJQUFJQSxnQkFBZ0IsRUFBRTtRQUNsQjNXLEdBQUcsQ0FBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO01BQzVCLENBQUMsTUFBTTtRQUNIZ0IsR0FBRyxDQUFDakIsVUFBVSxDQUFDLFVBQVUsQ0FBQztNQUM5QjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXZDLE1BQUEsQ0FFRG9hLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUN6WixJQUFJLEVBQUU7SUFDMUIyUCxxQkFBQSxDQUFBalUsU0FBQSxDQUFNK2QsdUJBQXVCLENBQUE5YyxJQUFBLE9BQUNxRCxJQUFJO0lBQ2xDLElBQUksQ0FBQ2lILE1BQU0sQ0FBQ3pILElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUNwREEsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQzVDK0IsTUFBTSxDQUFDLENBQUM7RUFDakIsQ0FBQztFQUFBbEMsTUFBQSxDQUVEcWEsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUMxWixJQUFJLEVBQVc7SUFBQSxJQUFBMlosc0JBQUE7SUFBQSxTQUFBQyxLQUFBLEdBQUExYixTQUFBLENBQUExQixNQUFBLEVBQU5xVCxJQUFJLE9BQUFDLEtBQUEsQ0FBQThKLEtBQUEsT0FBQUEsS0FBQSxXQUFBQyxLQUFBLE1BQUFBLEtBQUEsR0FBQUQsS0FBQSxFQUFBQyxLQUFBO01BQUpoSyxJQUFJLENBQUFnSyxLQUFBLFFBQUEzYixTQUFBLENBQUEyYixLQUFBO0lBQUE7SUFDcEIsQ0FBQUYsc0JBQUEsR0FBQWhLLHFCQUFBLENBQUFqVSxTQUFBLENBQU1nZSxVQUFVLEVBQUEvYyxJQUFBLENBQUF3QixLQUFBLENBQUF3YixzQkFBQSxTQUFDM1osSUFBSSxFQUFBZ1EsTUFBQSxDQUFLSCxJQUFJO0lBQzlCLElBQUksQ0FBQ3VCLHNCQUFzQixDQUFDLENBQUM7SUFDN0IsSUFBSSxDQUFDeUgsNEJBQTRCLENBQUMsQ0FBQztJQUNuQyxJQUFJLENBQUMvRywwQkFBMEIsQ0FBQyxDQUFDO0lBRWpDLElBQUksQ0FBQ2dJLGlCQUFpQixDQUFDOVosSUFBSSxDQUFDO0lBQzVCLElBQUksQ0FBQytaLHVCQUF1QixDQUFDL1osSUFBSSxDQUFDO0lBRWxDLElBQUksSUFBSSxDQUFDcVIsb0JBQW9CLEVBQUU7TUFDM0IsSUFBSSxDQUFDcEssTUFBTSxDQUFDekgsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQy9DdVQsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFDL1MsSUFBSSxZQUFKQSxJQUFJLENBQUU2UyxXQUFXLEVBQUM7TUFFekMsSUFBSSxJQUFJLENBQUM1TCxNQUFNLENBQUN6SCxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQzJZLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDNkIseUJBQXlCLEVBQUU7VUFDakMsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzlCLENBQUMsTUFBTTtVQUNILElBQU1oSixLQUFLLEdBQUcsSUFBSSxDQUFDaEssTUFBTSxDQUFDekgsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1VBQ3RELElBQU1zWixpQkFBaUIsR0FBRzdILEtBQUssQ0FBQ3pSLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztVQUNwRSxJQUFNMGEsc0JBQXNCLEdBQUdwQixpQkFBaUIsQ0FBQ3RaLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztVQUM3RixJQUFNMmEsdUJBQXVCLEdBQUdyQixpQkFBaUIsQ0FBQ3RaLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQztVQUN0RyxJQUFNZ1UsUUFBUSxHQUFHLElBQUlPLFFBQVEsQ0FBQzlDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN2QyxJQUFNbUosYUFBYSxHQUFHLElBQUksQ0FBQ0Msb0JBQW9CLENBQUN4TSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDNUQsSUFBTXlNLFNBQVMsR0FBRyxJQUFJLENBQUNDLG9CQUFvQjtVQUUzQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDTixzQkFBc0IsRUFBRUMsdUJBQXVCLEVBQUVDLGFBQWEsRUFBRTVHLFFBQVEsRUFBRThHLFNBQVMsRUFBRSxJQUFJLENBQUM7VUFDaEgsSUFBSSxDQUFDRyx1QkFBdUIsQ0FBQ3phLElBQUksQ0FBQztRQUN0QztNQUNKO0lBQ0o7RUFDSixDQUFDO0VBQUFYLE1BQUEsQ0FFRHlhLGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUM5WixJQUFJLEVBQUU7SUFBQSxJQUFBMGEsV0FBQSxFQUFBQyxZQUFBO0lBQ3BCLElBQU1DLElBQUksR0FBRyxJQUFJLENBQUMzVCxNQUFNLENBQUN6SCxJQUFJLENBQUMsNkJBQTZCLENBQUM7SUFDNUQsSUFBTXFiLEtBQUssR0FBRyxJQUFJLENBQUM1VCxNQUFNLENBQUN6SCxJQUFJLENBQUMsbUNBQW1DLENBQUM7SUFDbkUsSUFBSXNiLFdBQVcsR0FBRyxDQUFDO0lBRW5CLElBQUk5YSxJQUFJLGFBQUEwYSxXQUFBLEdBQUoxYSxJQUFJLENBQUUrYSxLQUFLLGNBQUFMLFdBQUEsR0FBWEEsV0FBQSxDQUFhTSxXQUFXLGFBQXhCTixXQUFBLENBQTBCN2QsS0FBSyxFQUFFO01BQUEsSUFBQW9lLFlBQUEsRUFBQUMsWUFBQTtNQUNqQyxJQUFJLENBQUFsYixJQUFJLGFBQUFpYixZQUFBLEdBQUpqYixJQUFJLENBQUUrYSxLQUFLLGNBQUFFLFlBQUEsR0FBWEEsWUFBQSxDQUFhRSxlQUFlLHFCQUE1QkYsWUFBQSxDQUE4QnBlLEtBQUssSUFBRyxDQUFDLEVBQUU7UUFDekNpZSxXQUFXLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHcmIsSUFBSSxDQUFDK2EsS0FBSyxDQUFDQyxXQUFXLENBQUNuZSxLQUFLLEdBQUdtRCxJQUFJLENBQUMrYSxLQUFLLENBQUNJLGVBQWUsQ0FBQ3RlLEtBQUssSUFBSSxHQUFHLENBQUM7TUFDekcsQ0FBQyxNQUFNLElBQUksQ0FBQW1ELElBQUksYUFBQWtiLFlBQUEsR0FBSmxiLElBQUksQ0FBRSthLEtBQUssY0FBQUcsWUFBQSxHQUFYQSxZQUFBLENBQWFJLDBCQUEwQixxQkFBdkNKLFlBQUEsQ0FBeUNyZSxLQUFLLElBQUcsQ0FBQyxFQUFFO1FBQzNEaWUsV0FBVyxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR3JiLElBQUksQ0FBQythLEtBQUssQ0FBQ0MsV0FBVyxDQUFDbmUsS0FBSyxHQUFHbUQsSUFBSSxDQUFDK2EsS0FBSyxDQUFDTywwQkFBMEIsQ0FBQ3plLEtBQUssSUFBSSxHQUFHLENBQUM7TUFDcEg7SUFDSixDQUFDLE1BQU0sSUFBSW1ELElBQUksYUFBQTJhLFlBQUEsR0FBSjNhLElBQUksQ0FBRSthLEtBQUssY0FBQUosWUFBQSxHQUFYQSxZQUFBLENBQWFZLFFBQVEsYUFBckJaLFlBQUEsQ0FBdUI5ZCxLQUFLLEVBQUU7TUFBQSxJQUFBMmUsWUFBQSxFQUFBQyxZQUFBO01BQ3JDLElBQUksQ0FBQXpiLElBQUksYUFBQXdiLFlBQUEsR0FBSnhiLElBQUksQ0FBRSthLEtBQUssY0FBQVMsWUFBQSxHQUFYQSxZQUFBLENBQWFFLFlBQVkscUJBQXpCRixZQUFBLENBQTJCM2UsS0FBSyxJQUFHLENBQUMsRUFBRTtRQUN0Q2llLFdBQVcsR0FBR00sSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUdyYixJQUFJLENBQUMrYSxLQUFLLENBQUNRLFFBQVEsQ0FBQzFlLEtBQUssR0FBR21ELElBQUksQ0FBQythLEtBQUssQ0FBQ1csWUFBWSxDQUFDN2UsS0FBSyxJQUFJLEdBQUcsQ0FBQztNQUNuRyxDQUFDLE1BQU0sSUFBSSxDQUFBbUQsSUFBSSxhQUFBeWIsWUFBQSxHQUFKemIsSUFBSSxDQUFFK2EsS0FBSyxjQUFBVSxZQUFBLEdBQVhBLFlBQUEsQ0FBYUUsdUJBQXVCLHFCQUFwQ0YsWUFBQSxDQUFzQzVlLEtBQUssSUFBRyxDQUFDLEVBQUU7UUFDeERpZSxXQUFXLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHcmIsSUFBSSxDQUFDK2EsS0FBSyxDQUFDUSxRQUFRLENBQUMxZSxLQUFLLEdBQUdtRCxJQUFJLENBQUMrYSxLQUFLLENBQUNZLHVCQUF1QixDQUFDOWUsS0FBSyxJQUFJLEdBQUcsQ0FBQztNQUM5RztJQUNKO0lBRUEsSUFBSWllLFdBQVcsR0FBRyxDQUFDLEVBQUU7TUFDakJELEtBQUssQ0FBQzNZLElBQUksT0FBSzRZLFdBQVcsTUFBRyxDQUFDO01BQzlCRixJQUFJLENBQUM3VyxJQUFJLENBQUMsQ0FBQztJQUNmLENBQUMsTUFBTTtNQUNIOFcsS0FBSyxDQUFDM1ksSUFBSSxDQUFDLEVBQUUsQ0FBQztNQUNkMFksSUFBSSxDQUFDMVgsSUFBSSxDQUFDLENBQUM7SUFDZjtFQUNKLENBQUM7RUFBQTdELE1BQUEsQ0FFRDBhLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUMvWixJQUFJLEVBQUU7SUFDMUIsSUFBTTRiLGtCQUFrQixHQUFHLElBQUksQ0FBQzNVLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztJQUVuRixJQUFJb2Msa0JBQWtCLENBQUNoYixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUlaLElBQUksWUFBSkEsSUFBSSxDQUFFNlMsV0FBVyxFQUFFO01BQ3ZEK0ksa0JBQWtCLENBQUNyVyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztJQUMzQyxDQUFDLE1BQU0sSUFBSXFXLGtCQUFrQixDQUFDaGIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUNaLElBQUksWUFBSkEsSUFBSSxDQUFFNlMsV0FBVyxHQUFFO01BQ2hFK0ksa0JBQWtCLENBQUMxWSxJQUFJLENBQUMsQ0FBQztJQUM3QjtFQUNKLENBQUM7RUFBQTdELE1BQUEsQ0FFRHdjLGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUEsRUFBVTtJQUFBLElBQUFDLHNCQUFBO0lBQ3ZCO0lBQ0EsSUFBSSxJQUFJLENBQUN6SyxvQkFBb0IsRUFBRTtNQUMzQixJQUFJLENBQUMwSyxtQkFBbUIsQ0FBQyxDQUFDO01BQzFCLElBQUksSUFBSSxDQUFDQyxZQUFZLEVBQUU7UUFDbkIsSUFBSSxDQUFDQSxZQUFZLENBQUNwSCxrQkFBa0IsR0FBRyxJQUFJLENBQUMzTixNQUFNLENBQUN6SCxJQUFJLENBQUMsa0NBQWtDLENBQUM7TUFDL0Y7SUFDSjtJQUFDLFNBQUF5YyxLQUFBLEdBQUEvZCxTQUFBLENBQUExQixNQUFBLEVBUGdCcVQsSUFBSSxPQUFBQyxLQUFBLENBQUFtTSxLQUFBLEdBQUFDLEtBQUEsTUFBQUEsS0FBQSxHQUFBRCxLQUFBLEVBQUFDLEtBQUE7TUFBSnJNLElBQUksQ0FBQXFNLEtBQUEsSUFBQWhlLFNBQUEsQ0FBQWdlLEtBQUE7SUFBQTtJQVNyQixDQUFBSixzQkFBQSxHQUFBbk0scUJBQUEsQ0FBQWpVLFNBQUEsQ0FBTW1nQixpQkFBaUIsRUFBQWxmLElBQUEsQ0FBQXdCLEtBQUEsQ0FBQTJkLHNCQUFBLFNBQUE5TCxNQUFBLENBQUlILElBQUk7RUFDbkMsQ0FBQztFQUFBeFEsTUFBQSxDQUVEOGMsZ0JBQWdCLEdBQWhCLFNBQUFBLGdCQUFnQkEsQ0FBQzFULEtBQUssRUFBVztJQUFBLElBQUEyVCxzQkFBQTtJQUFBLFNBQUFDLEtBQUEsR0FBQW5lLFNBQUEsQ0FBQTFCLE1BQUEsRUFBTnFULElBQUksT0FBQUMsS0FBQSxDQUFBdU0sS0FBQSxPQUFBQSxLQUFBLFdBQUFDLEtBQUEsTUFBQUEsS0FBQSxHQUFBRCxLQUFBLEVBQUFDLEtBQUE7TUFBSnpNLElBQUksQ0FBQXlNLEtBQUEsUUFBQXBlLFNBQUEsQ0FBQW9lLEtBQUE7SUFBQTtJQUMzQixDQUFBRixzQkFBQSxHQUFBek0scUJBQUEsQ0FBQWpVLFNBQUEsQ0FBTXlnQixnQkFBZ0IsRUFBQXhmLElBQUEsQ0FBQXdCLEtBQUEsQ0FBQWllLHNCQUFBLFNBQUMzVCxLQUFLLEVBQUF1SCxNQUFBLENBQUtILElBQUk7SUFFckMsSUFBTTBNLGtCQUFrQixHQUFHLElBQUksQ0FBQ3RWLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztJQUMvRSxJQUFBZ2QscUJBQUEsR0FBd0QsSUFBSSxDQUFDemQsWUFBWSxDQUFDMGQsWUFBWTtNQUE5RWpZLFlBQVksR0FBQWdZLHFCQUFBLENBQVpoWSxZQUFZO01BQUV0RSxZQUFZLEdBQUFzYyxxQkFBQSxDQUFadGMsWUFBWTtNQUFFdUUsZUFBZSxHQUFBK1gscUJBQUEsQ0FBZi9YLGVBQWU7SUFFbkQsSUFBSUQsWUFBWSxJQUFJQSxZQUFZLEtBQUsrWCxrQkFBa0IsQ0FBQzFhLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtNQUNqRTBhLGtCQUFrQixDQUNiMWEsSUFBSSxDQUFDLEtBQUssRUFBRTJDLFlBQVksQ0FBQyxDQUN6QjNDLElBQUksQ0FBQyxRQUFRLEVBQUU0QyxlQUFlLENBQUMsQ0FDL0I1QyxJQUFJLENBQUMsYUFBYSxFQUFFNEMsZUFBZSxDQUFDLENBQ3BDNUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFM0IsWUFBWSxDQUFDOztNQUUxQztNQUNBLElBQUksQ0FBQytHLE1BQU0sQ0FBQ3pILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUNoQ3VELE1BQU0sQ0FBQyxVQUFDK0IsRUFBRSxFQUFFeVUsRUFBRTtRQUFBLE9BQUtwYSxDQUFDLENBQUNvYSxFQUFFLENBQUMsQ0FBQ2xaLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDN0QsTUFBTSxLQUFLLENBQUM7TUFBQSxFQUFDLENBQ3RFcUYsSUFBSSxDQUFDLEtBQUssRUFBRTJDLFlBQVksQ0FBQyxDQUN6QjNDLElBQUksQ0FBQyxRQUFRLEVBQUU0QyxlQUFlLENBQUMsQ0FDL0I1QyxJQUFJLENBQUMsYUFBYSxFQUFFNEMsZUFBZSxDQUFDO0lBQzdDO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FOSTtFQUFBcEYsTUFBQSxDQU9BcWQsV0FBVyxHQUFYLFNBQUFBLFdBQVdBLENBQUM3ZixLQUFLLEVBQUU4ZixVQUFVLEVBQVU7SUFBQSxJQUFwQkEsVUFBVTtNQUFWQSxVQUFVLEdBQUcsS0FBSztJQUFBO0lBQ2pDLElBQU1DLE9BQU8sR0FBRzFPLGNBQWMsR0FBRztNQUM3QjJPLGNBQWMsRUFBRTNPLGNBQWMsQ0FBQzRPLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDRyxNQUFNO01BQ3REQyxpQkFBaUIsRUFBRTlPLGNBQWMsQ0FBQzRPLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDSyxlQUFlO01BQ2xFQyxhQUFhLEVBQUVoUCxjQUFjLENBQUM0TyxRQUFRLENBQUNGLE9BQU8sQ0FBQ08sWUFBWTtNQUMzREMsY0FBYyxFQUFFbFAsY0FBYyxDQUFDNE8sUUFBUSxDQUFDRixPQUFPLENBQUNTLGFBQWE7TUFDN0RDLGVBQWUsRUFBRXBQLGNBQWMsQ0FBQzRPLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDVztJQUNyRCxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRU4sSUFBSTFnQixLQUFLLEdBQUcsQ0FBQyxFQUFFO01BQ1gsSUFBTTJnQixVQUFTLEdBQUd4USxzREFBYyxDQUFDLENBQUNuUSxLQUFLLEVBQUUrZixPQUFPLENBQUM7TUFDakQsT0FBT0QsVUFBVSxTQUFPYSxVQUFTLEdBQUtBLFVBQVM7SUFDbkQ7SUFFQSxJQUFNQSxTQUFTLEdBQUd4USxzREFBYyxDQUFDblEsS0FBSyxFQUFFK2YsT0FBTyxDQUFDO0lBQ2hELE9BQU9ELFVBQVUsU0FBT2EsU0FBUyxHQUFLQSxTQUFTO0VBQ25EOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTkk7RUFBQW5lLE1BQUEsQ0FPQW9lLGVBQWUsR0FBZixTQUFBQSxlQUFlQSxDQUFDQyxVQUFVLEVBQUVDLFNBQVMsRUFBRTtJQUFBLElBQUFDLG9CQUFBO0lBQ25DLElBQU1DLFlBQVksR0FBRyxJQUFJLENBQUN6TCxjQUFjLENBQUM1UyxJQUFJLENBQUMsVUFBQTRILElBQUE7TUFBQSxJQUFHMFcsWUFBWSxHQUFBMVcsSUFBQSxDQUFaMFcsWUFBWTtNQUFBLE9BQU9BLFlBQVksQ0FBQ3pRLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUNBLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDLEtBQUtvUSxVQUFVLENBQUNwUSxXQUFXLENBQUMsQ0FBQztJQUFBLEVBQUM7SUFDekssSUFBTXpRLEtBQUssR0FBR2doQixZQUFZLGFBQUFELG9CQUFBLEdBQVpDLFlBQVksQ0FBRUUsTUFBTSxxQkFBcEJILG9CQUFBLENBQXNCcGUsSUFBSSxDQUFDLFVBQUErSixLQUFBO01BQUEsSUFBR3lVLEtBQUssR0FBQXpVLEtBQUEsQ0FBTHlVLEtBQUs7TUFBQSxPQUFPQSxLQUFLLENBQUMzUSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDQSxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxLQUFLcVEsU0FBUyxDQUFDclEsV0FBVyxDQUFDLENBQUM7SUFBQSxFQUFDO0lBQ3JKLElBQU0yUSxRQUFRLEdBQUdKLFlBQVksb0JBQVpBLFlBQVksQ0FBRUssRUFBRTtJQUNqQyxJQUFNQyxPQUFPLEdBQUd0aEIsS0FBSyxvQkFBTEEsS0FBSyxDQUFFcWhCLEVBQUU7SUFDekIsT0FBTyxDQUFDRCxRQUFRLEVBQUVFLE9BQU8sQ0FBQztFQUM5QixDQUFDO0VBQUE5ZSxNQUFBLENBRURpUyxvQkFBb0IsR0FBcEIsU0FBQUEsb0JBQW9CQSxDQUFBLEVBQUc7SUFBQSxJQUFBaEksTUFBQTtJQUNuQixJQUFNcEosWUFBWSxHQUFHLElBQUksQ0FBQytHLE1BQU0sQ0FBQ3pILElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDcUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQzFGLElBQU0yQyxZQUFZLEdBQUcsSUFBSSxDQUFDeUMsTUFBTSxDQUFDekgsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUNxQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RFLElBQU00QyxlQUFlLEdBQUcsSUFBSSxDQUFDd0MsTUFBTSxDQUFDekgsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUNxQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ2pGLElBQU1vUCxLQUFLLEdBQUcsSUFBSSxDQUFDaEssTUFBTSxDQUFDekgsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3RELElBQU00ZSx3QkFBd0IsR0FBRyxJQUFJLENBQUNuWCxNQUFNLENBQUN6SCxJQUFJLENBQUMseUNBQXlDLENBQUM7SUFDNUYsSUFBTTZlLGlCQUFpQixHQUFHcE4sS0FBSyxDQUFDelIsSUFBSSxDQUFDLGtDQUFrQyxDQUFDO0lBQ3hFLElBQU0wUixpQkFBaUIsR0FBR0QsS0FBSyxDQUFDelIsSUFBSSxDQUFDLGtDQUFrQyxDQUFDO0lBQ3hFLElBQU1zWixpQkFBaUIsR0FBRzdILEtBQUssQ0FBQ3pSLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztJQUNwRSxJQUFNOGUsZUFBZSxHQUFHbmYsQ0FBQyxDQUFDVixnREFBUSxDQUFDd0UsTUFBTSxDQUFDLElBQUksQ0FBQ2lOLHNCQUFzQixFQUFFO01BQ25FcU8sV0FBVyxFQUFFLElBQUksQ0FBQ2xLLE9BQU8sQ0FBQ2tLLFdBQVc7TUFDckNDLFlBQVksRUFBRSxJQUFJLENBQUN2WCxNQUFNLENBQUN6SCxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQzRKLElBQUksQ0FBQyxDQUFDO01BQ25FNUUsWUFBWSxFQUFFLElBQUksQ0FBQ3pGLFlBQVksQ0FBQzBkLFlBQVksQ0FBQ2pZLFlBQVksSUFBSUEsWUFBWTtNQUN6RXRFLFlBQVksRUFBRSxJQUFJLENBQUNuQixZQUFZLENBQUMwZCxZQUFZLENBQUN2YyxZQUFZLElBQUlBLFlBQVk7TUFDekV1RSxlQUFlLEVBQUUsSUFBSSxDQUFDMUYsWUFBWSxDQUFDMGQsWUFBWSxDQUFDaFksZUFBZSxJQUFJQTtJQUN2RSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ3RCLFFBQVEsQ0FBQzJWLGlCQUFpQixDQUFDO0lBQ25ELElBQU1vQixzQkFBc0IsR0FBR29FLGVBQWUsQ0FBQzllLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztJQUMzRixJQUFNaWYsdUJBQXVCLEdBQUdILGVBQWUsQ0FBQzllLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQztJQUM3RixJQUFNa2Ysb0JBQW9CLEdBQUdKLGVBQWUsQ0FBQzllLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUN2RixJQUFNbWYsdUJBQXVCLEdBQUdMLGVBQWUsQ0FBQzllLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQztJQUM3RixJQUFNb2YsbUJBQW1CLEdBQUdOLGVBQWUsQ0FBQzllLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQzs7SUFFckY7SUFDQXNaLGlCQUFpQixDQUFDdFosSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUMyRCxRQUFRLENBQUMrVyxzQkFBc0IsQ0FBQzs7SUFFcEc7SUFDQXVFLHVCQUF1QixDQUFDSSxNQUFNLENBQUNSLGlCQUFpQixDQUFDOztJQUVqRDtJQUNBQSxpQkFBaUIsQ0FBQzdlLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDLENBQUMsQ0FDdkR3QixRQUFRLENBQUNpYix3QkFBd0IsQ0FBQztJQUV2Q00sb0JBQW9CLENBQUNoZixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUN0Q0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUN0QjBKLE1BQUksQ0FBQ3lTLG1CQUFtQixDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0lBRUY2QyxtQkFBbUIsQ0FBQ2xmLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQ3JDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ3RCMEosTUFBSSxDQUFDd1YsVUFBVSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDO0lBRUZILHVCQUF1QixDQUFDamYsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDekNBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7O01BRXRCO01BQ0EsSUFBTXdhLGFBQWEsR0FBRzlRLE1BQUksQ0FBQytRLG9CQUFvQixDQUFDeE0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtNQUNsRSxJQUFNa1IsYUFBYSxHQUFHM0UsYUFBYSxDQUFDNEUsTUFBTSxDQUFDLFVBQUNDLGNBQWMsRUFBRWhCLFFBQVE7UUFBQSxVQUFBak8sTUFBQSxDQUM3RGlQLGNBQWMsRUFDZC9FLHNCQUFzQixDQUNwQjFhLElBQUksd0JBQXFCeWUsUUFBUSxnQ0FBeUJBLFFBQVEscUNBQThCQSxRQUFRLHVDQUFnQ0EsUUFBUSxlQUFXLENBQUMsQ0FDNUpsYyxHQUFHLENBQUMsQ0FBQyxDQUNMZ0IsTUFBTSxDQUFDLFVBQUF3VyxFQUFFO1VBQUEsT0FBSSxDQUFDQSxFQUFFLENBQUM1QyxhQUFhLENBQUMsQ0FBQztRQUFBLEVBQUM7TUFBQSxDQUN4QyxFQUFFLEVBQUUsQ0FBQztNQUVQLElBQUlvSSxhQUFhLENBQUN2aUIsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMxQixPQUFPdWlCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzdILGNBQWMsQ0FBQyxDQUFDO01BQzVDOztNQUVBO01BQ0FrRCxhQUFhLENBQUNsQixPQUFPLENBQUMsVUFBQStFLFFBQVEsRUFBSTtRQUM5QixJQUFNckcsT0FBTyxHQUFHc0Msc0JBQXNCLENBQUMxYSxJQUFJLDZDQUF3Q3llLFFBQVEsU0FBSyxDQUFDO1FBQ2pHLElBQUlyRyxPQUFPLENBQUNwYixNQUFNLEdBQUcsQ0FBQyxJQUFJb2IsT0FBTyxDQUFDN1UsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDdkcsTUFBTSxLQUFLLENBQUMsRUFBRTtVQUMvRG9iLE9BQU8sQ0FBQzdVLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDZ1EsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7UUFDbkU7TUFDSixDQUFDLENBQUM7O01BRUY7TUFDQXpKLE1BQUksQ0FBQzBRLHlCQUF5QixHQUFHLEtBQUs7TUFDdEMxUSxNQUFJLENBQUMyUSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQztJQUVGL0ksaUJBQWlCLENBQUN4UixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUNuQ0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQzs7TUFFdEI7TUFDQSxJQUFJMEosTUFBSSxDQUFDNFYsc0JBQXNCLENBQUMsQ0FBQyxFQUFFO1FBQy9CNVYsTUFBSSxDQUFDNlYsaUJBQWlCLENBQUMsQ0FBQztRQUN4QjdWLE1BQUksQ0FBQzhWLGtCQUFrQixDQUFDLENBQUM7TUFDN0I7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEvZixNQUFBLENBRUQrZixrQkFBa0IsR0FBbEIsU0FBQUEsa0JBQWtCQSxDQUFBLEVBQUc7SUFDakIsSUFBSSxDQUFDblksTUFBTSxDQUFDekgsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUNxRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQy9Ed2IsTUFBTSxDQUFDLElBQUksQ0FBQ3BQLDZCQUE2QixDQUFDO0VBQ25ELENBQUM7RUFBQTVRLE1BQUEsQ0FFRDBjLG1CQUFtQixHQUFuQixTQUFBQSxtQkFBbUJBLENBQUEsRUFBRztJQUNsQixJQUFJLENBQUM5VSxNQUFNLENBQUN6SCxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQ3dFLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDdkUsSUFBSSxDQUFDaUQsTUFBTSxDQUFDekgsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUMrQixNQUFNLENBQUMsQ0FBQztFQUNyRSxDQUFDO0VBQUFsQyxNQUFBLENBRUQ4ZixpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFBLEVBQUc7SUFDaEIsSUFBTWxPLEtBQUssR0FBRyxJQUFJLENBQUNoSyxNQUFNLENBQUN6SCxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDdEQsSUFBTXNaLGlCQUFpQixHQUFHN0gsS0FBSyxDQUFDelIsSUFBSSxDQUFDLDhCQUE4QixDQUFDO0lBQ3BFLElBQU0wYSxzQkFBc0IsR0FBR3BCLGlCQUFpQixDQUFDdFosSUFBSSxDQUFDLHNDQUFzQyxDQUFDO0lBRTdGMGEsc0JBQXNCLENBQUMxYSxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FDakQwWSxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FDdkRuVixNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQ29PLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFFMUMrSSxzQkFBc0IsQ0FBQzFhLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUNyRXVELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDZ1EsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7O0lBRXpEO0lBQ0FtSCxzQkFBc0IsQ0FBQzFhLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDb0MsVUFBVSxDQUFDLGtCQUFrQixDQUFDOztJQUVqRjtJQUNBLElBQUksQ0FBQ29ZLHlCQUF5QixHQUFHLEtBQUs7O0lBRXRDO0FBQ1I7QUFDQTtBQUNBO0lBQ1E7SUFDQSxJQUFJLENBQUNLLG9CQUFvQixHQUFHLEVBQUU7O0lBRTlCO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNRLElBQUksQ0FBQ0Usb0JBQW9CLEdBQUcsQ0FBQyxDQUFDOztJQUU5QjtJQUNBLElBQUksQ0FBQ04sbUJBQW1CLENBQUM7TUFBRXFGLGFBQWEsRUFBRTtJQUFLLENBQUMsQ0FBQztJQUVqRHhHLGlCQUFpQixDQUFDM1UsT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUN2QyxDQUFDO0VBQUE5RSxNQUFBLENBRUs0YSxtQkFBbUI7SUFBQSxJQUFBc0Ysb0JBQUEsR0FBQXRoQixpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBekIsU0FBQStLLFNBQUFuQixLQUFBO01BQUEsSUFBQThFLE1BQUE7TUFBQSxJQUFBdkIsS0FBQSxFQUFBK1UsbUJBQUEsRUFBQUYsYUFBQSxFQUFBck8sS0FBQSxFQUFBNkgsaUJBQUEsRUFBQThGLG1CQUFBLEVBQUExRSxzQkFBQSxFQUFBdUYsc0JBQUEsRUFBQUMsb0JBQUEsRUFBQUMscUJBQUEsRUFBQWhCLHVCQUFBLEVBQUF4RSx1QkFBQSxFQUFBa0UsaUJBQUEsRUFBQTdLLFFBQUEsRUFBQW9NLGVBQUEsRUFBQUMsZ0JBQUEsRUFBQUMscUJBQUEsRUFBQUMsYUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxRQUFBLEVBQUFDLGVBQUEsRUFBQTVGLFNBQUEsRUFBQTZGLGFBQUEsRUFBQS9GLGFBQUEsRUFBQWdHLHFCQUFBLEVBQUFDLEtBQUEsRUFBQUMsWUFBQSxFQUFBQyxRQUFBO01BQUEsT0FBQW5qQixZQUFBLEdBQUFDLENBQUEsV0FBQWtMLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBbk4sQ0FBQTtVQUFBO1lBQUFxUCxLQUFBLEdBQUF2RCxLQUFBLGNBQXNELENBQUMsQ0FBQyxHQUFBQSxLQUFBLEVBQUFzWSxtQkFBQSxHQUFBL1UsS0FBQSxDQUE1QjZVLGFBQWEsRUFBYkEsYUFBYSxHQUFBRSxtQkFBQSxjQUFHLEtBQUssR0FBQUEsbUJBQUE7WUFDdkN2TyxLQUFLLEdBQUcsSUFBSSxDQUFDaEssTUFBTSxDQUFDekgsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQ2hEc1osaUJBQWlCLEdBQUc3SCxLQUFLLENBQUN6UixJQUFJLENBQUMsOEJBQThCLENBQUM7WUFDOURvZixtQkFBbUIsR0FBRzlGLGlCQUFpQixDQUFDdFosSUFBSSxDQUFDLG1DQUFtQyxDQUFDO1lBQ2pGMGEsc0JBQXNCLEdBQUdwQixpQkFBaUIsQ0FBQ3RaLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztZQUN2RmlnQixzQkFBc0IsR0FBRzNHLGlCQUFpQixDQUFDdFosSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUNnaEIsS0FBSyxDQUFDLENBQUM7WUFDL0ZkLG9CQUFvQixHQUFHNUcsaUJBQWlCLENBQUN0WixJQUFJLENBQUMsb0NBQW9DLENBQUMsQ0FBQ2doQixLQUFLLENBQUMsQ0FBQztZQUMzRmIscUJBQXFCLEdBQUc3RyxpQkFBaUIsQ0FBQ3RaLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQztZQUNyRm1mLHVCQUF1QixHQUFHN0YsaUJBQWlCLENBQUN0WixJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQzBELElBQUksQ0FBQyxDQUFDO1lBQ2hHaVgsdUJBQXVCLEdBQUdyQixpQkFBaUIsQ0FBQ3RaLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQztZQUNoRzZlLGlCQUFpQixHQUFHdkYsaUJBQWlCLENBQUN0WixJQUFJLENBQUMsa0NBQWtDLENBQUMsQ0FBQzBELElBQUksQ0FBQyxDQUFDO1lBQ3JGc1EsUUFBUSxHQUFHLElBQUlPLFFBQVEsQ0FBQzlDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QyxJQUFJLENBQUNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixFQUFFakIsS0FBSyxDQUFDMlEsSUFBSSxDQUFDak4sUUFBUSxDQUFDa04sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUUvRTtBQUNSO0FBQ0E7QUFDQTs7WUFHUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO1lBR1E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO1lBQ1laLHFCQUFxQixHQUFHLEVBQUU7WUFFOUI7QUFDUjtBQUNBO0FBQ0E7WUFDY0MsYUFBYSxHQUFHLEVBQUU7WUFFeEI7QUFDUjtBQUNBO1lBQ2NDLGdCQUFnQixHQUFHLEVBQUU7WUFFM0I7QUFDUjtBQUNBO0FBQ0E7WUFDY0MsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUVuQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO1lBQ2NDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFFMUI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtZQUNjNUYsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUVwQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO1lBQ2M2RixhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBRXhCLElBQUksQ0FBQy9OLGNBQWMsQ0FBQ3JQLE1BQU0sQ0FBQyxVQUFBeUksS0FBQTtjQUFBLElBQUdtVixLQUFLLEdBQUFuVixLQUFBLENBQUxtVixLQUFLO2NBQUEsT0FBT0EsS0FBSyxLQUFLLFVBQVU7WUFBQSxFQUFDLENBQUN6SCxPQUFPLENBQUMsVUFBQTBILE1BQU0sRUFBSTtjQUM5RTVVLE1BQUksQ0FBQzhFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixFQUFFLGFBQWEsRUFBRTZQLE1BQU0sQ0FBQzlDLFlBQVksQ0FBQztjQUVuRixJQUFJK0MsVUFBVSxHQUFHLEtBQUs7O2NBRXRCO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7Y0FDWSxJQUFJQyxTQUFTOztjQUViO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtjQUNZLElBQUlDLGNBQWM7O2NBRWxCO2NBQ0EsSUFBTUMsa0JBQWtCLEdBQUcvUCxLQUFLLENBQUN6UixJQUFJLDZDQUF3Q29oQixNQUFNLENBQUMxQyxFQUFFLHFCQUFlLENBQUMsQ0FBQ25MLElBQUksQ0FBQyxTQUFTLENBQUM7O2NBRXRIO2NBQ0EsSUFBTWtPLEtBQUssR0FBR2hRLEtBQUssQ0FBQ3pSLElBQUksNENBQXVDb2hCLE1BQU0sQ0FBQzFDLEVBQUUsU0FBSyxDQUFDO2NBQzlFLElBQU1nRCxXQUFXLEdBQUdELEtBQUssQ0FBQ3prQixNQUFNLEdBQUcsQ0FBQyxJQUFJeWtCLEtBQUssQ0FBQ3BmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzs7Y0FFdEU7Y0FDQSxJQUFNc2YsS0FBSyxHQUFHbFEsS0FBSyxDQUFDelIsSUFBSSw4QkFBMkJvaEIsTUFBTSxDQUFDMUMsRUFBRSwyQ0FBb0MwQyxNQUFNLENBQUMxQyxFQUFFLDZDQUFzQzBDLE1BQU0sQ0FBQzFDLEVBQUUsZUFBVyxDQUFDO2NBQ3BLLElBQU1rRCxtQkFBbUIsR0FBR0QsS0FBSyxDQUFDM2tCLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQ29rQixNQUFNLENBQUNTLFFBQVEsSUFBSUYsS0FBSyxDQUFDdGYsSUFBSSxDQUFDLGtCQUFrQixDQUFDOztjQUVsRztjQUNBLElBQU15ZixPQUFPLEdBQUdyUSxLQUFLLENBQUN6UixJQUFJLDhCQUEyQm9oQixNQUFNLENBQUMxQyxFQUFFLFNBQUssQ0FBQztjQUNwRSxJQUFNcUQscUJBQXFCLEdBQUdELE9BQU8sQ0FBQzlrQixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUNva0IsTUFBTSxDQUFDUyxRQUFRLElBQUlDLE9BQU8sQ0FBQ3pmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzs7Y0FFeEc7Y0FDQSxJQUFNMmYsS0FBSyxHQUFHdlEsS0FBSyxDQUFDelIsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUN1RCxNQUFNLHdCQUFxQjZkLE1BQU0sQ0FBQzFDLEVBQUUsU0FBSyxDQUFDO2NBQ3pILElBQU11RCxtQkFBbUIsR0FBR0QsS0FBSyxDQUFDaGxCLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQ29rQixNQUFNLENBQUNTLFFBQVEsSUFBSUcsS0FBSyxDQUFDM2YsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2NBRWxHLElBQU02ZixTQUFTLEdBQUdsTyxRQUFRLENBQUN6UixHQUFHLGdCQUFjNmUsTUFBTSxDQUFDMUMsRUFBRSxNQUFHLENBQUM7Y0FFekQsSUFBSXdELFNBQVMsSUFBSSxFQUFFQSxTQUFTLFlBQVlDLElBQUksQ0FBQyxJQUN0Q1gsa0JBQWtCLElBQUlFLFdBQVcsSUFBSUUsbUJBQW1CLElBQUlHLHFCQUFxQixJQUFJRSxtQkFBbUIsSUFDeEdqTyxRQUFRLENBQUN6UixHQUFHLGdCQUFjNmUsTUFBTSxDQUFDMUMsRUFBRSxXQUFRLENBQUMsSUFDNUMxSyxRQUFRLENBQUN6UixHQUFHLGdCQUFjNmUsTUFBTSxDQUFDMUMsRUFBRSxhQUFVLENBQUMsSUFDOUMxSyxRQUFRLENBQUN6UixHQUFHLGdCQUFjNmUsTUFBTSxDQUFDMUMsRUFBRSxZQUFTLENBQUMsRUFBRTtnQkFDbEQ7Z0JBQ0EyQyxVQUFVLEdBQUcsSUFBSTtnQkFDakI3VSxNQUFJLENBQUM4RSxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRThQLFVBQVUsQ0FBQztjQUNqRTtjQUVBLElBQUksQ0FBQ0EsVUFBVSxFQUFFO2dCQUNiN1UsTUFBSSxDQUFDTCxZQUFZLENBQUN1TixPQUFPLENBQUMsVUFBQTBJLFdBQVcsRUFBSTtrQkFDckM7a0JBQ0EsSUFBTUMsV0FBVyxHQUFHN1YsTUFBSSxDQUFDOFYsc0JBQXNCLENBQUM7b0JBQUVGLFdBQVcsRUFBWEEsV0FBVztvQkFBRXBPLFFBQVEsRUFBUkEsUUFBUTtvQkFBRW9OLE1BQU0sRUFBTkE7a0JBQU8sQ0FBQyxDQUFDO2tCQUNsRixJQUFJaUIsV0FBVyxFQUFFO29CQUNiaEIsVUFBVSxHQUFHZ0IsV0FBVyxDQUFDaEIsVUFBVTtvQkFDbkNiLGdCQUFnQixDQUFDM1EsSUFBSSxDQUFBbFIsS0FBQSxDQUFyQjZoQixnQkFBZ0IsRUFBUzZCLFdBQVcsQ0FBQzdCLGdCQUFnQixDQUFDO2tCQUMxRDtrQkFFQSxJQUFJLENBQUNjLFNBQVMsSUFBSSxDQUFDRCxVQUFVLEVBQUU7b0JBQzNCO29CQUNBLElBQU1rQixVQUFVLEdBQUcvVixNQUFJLENBQUNnVyxxQkFBcUIsQ0FBQztzQkFBRUosV0FBVyxFQUFYQSxXQUFXO3NCQUFFaEIsTUFBTSxFQUFOQTtvQkFBTyxDQUFDLENBQUM7b0JBQ3RFLElBQUltQixVQUFVLEVBQUU7c0JBQ1pqQixTQUFTLEdBQUdpQixVQUFVLENBQUNqQixTQUFTO3NCQUNoQ0MsY0FBYyxHQUFHZ0IsVUFBVSxDQUFDaEIsY0FBYztvQkFDOUM7a0JBQ0o7a0JBRUEsSUFBSSxDQUFDRixVQUFVLEVBQUU7b0JBQUEsSUFBQW9CLGNBQUE7b0JBQ2I7b0JBQ0EsSUFBTUMsWUFBWSxHQUFHbFcsTUFBSSxDQUFDbVcsdUJBQXVCLENBQUM7c0JBQUVQLFdBQVcsRUFBWEEsV0FBVztzQkFBRWhCLE1BQU0sRUFBTkE7b0JBQU8sQ0FBQyxDQUFDO29CQUMxRSxJQUFJc0IsWUFBWSxFQUFFO3NCQUFBLElBQUFFLG1CQUFBLEVBQUFDLG9CQUFBO3NCQUNkcEMsUUFBUSxDQUFDVyxNQUFNLENBQUMxQyxFQUFFLENBQUMsR0FBR3JpQixNQUFNLENBQUN5bUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFckMsUUFBUSxDQUFDVyxNQUFNLENBQUMxQyxFQUFFLENBQUMsRUFBRTt3QkFDekRxRSxPQUFPLEVBQUVMLFlBQVksQ0FBQ0ssT0FBTyxNQUFBSCxtQkFBQSxHQUFJbkMsUUFBUSxDQUFDVyxNQUFNLENBQUMxQyxFQUFFLENBQUMscUJBQW5Ca0UsbUJBQUEsQ0FBcUJHLE9BQU87d0JBQzdEQyxhQUFhLEVBQUUzbUIsTUFBTSxDQUFDeW1CLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBQUQsb0JBQUEsR0FBRXBDLFFBQVEsQ0FBQ1csTUFBTSxDQUFDMUMsRUFBRSxDQUFDLHFCQUFuQm1FLG9CQUFBLENBQXFCRyxhQUFhLEVBQUVOLFlBQVksQ0FBQ00sYUFBYTtzQkFDbkcsQ0FBQyxDQUFDO29CQUNOOztvQkFFQTtvQkFDQSxJQUFNQyxvQkFBb0IsR0FBR3pXLE1BQUksQ0FBQzBXLDhCQUE4QixDQUFDO3NCQUFFZCxXQUFXLEVBQVhBLFdBQVc7c0JBQUVoQixNQUFNLEVBQU5BO29CQUFPLENBQUMsQ0FBQztvQkFDekYsSUFBSVYsZUFBZSxFQUFFO3NCQUNqQkEsZUFBZSxDQUFDVSxNQUFNLENBQUMxQyxFQUFFLENBQUMsR0FBR3JpQixNQUFNLENBQUN5bUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFcEMsZUFBZSxDQUFDVSxNQUFNLENBQUMxQyxFQUFFLENBQUMsRUFBRXVFLG9CQUFvQixDQUFDO29CQUNwRzs7b0JBR0E7b0JBQ0EsSUFBTUUsT0FBTyxHQUFHM1csTUFBSSxDQUFDNFcsc0JBQXNCLENBQUM7c0JBQUVoQixXQUFXLEVBQVhBLFdBQVc7c0JBQUVoQixNQUFNLEVBQU5BO29CQUFPLENBQUMsQ0FBQztvQkFDcEUsSUFBSStCLE9BQU8sRUFBRTtzQkFDVHhDLGFBQWEsQ0FBQ1MsTUFBTSxDQUFDMUMsRUFBRSxDQUFDLEdBQUd5RSxPQUFPO29CQUN0Qzs7b0JBRUE7b0JBQ0EsSUFBTUUsYUFBYSxHQUFHN1csTUFBSSxDQUFDOFcsdUJBQXVCLENBQUM7c0JBQUVsQixXQUFXLEVBQVhBLFdBQVc7c0JBQUVoQixNQUFNLEVBQU5BO29CQUFPLENBQUMsQ0FBQztvQkFDM0Uva0IsTUFBTSxDQUFDeW1CLE1BQU0sQ0FBQ2hJLFNBQVMsR0FBQTJILGNBQUEsT0FBQUEsY0FBQSxDQUNsQnJCLE1BQU0sQ0FBQzFDLEVBQUUsSUFBQXJpQixNQUFBLENBQUF5bUIsTUFBQSxLQUNIaEksU0FBUyxDQUFDc0csTUFBTSxDQUFDMUMsRUFBRSxDQUFDLEVBQ3BCMkUsYUFBYSxHQUFBWixjQUFBLENBRXZCLENBQUM7a0JBQ047Z0JBQ0osQ0FBQyxDQUFDO2NBQ047Y0FFQSxJQUFJLENBQUNwQixVQUFVLEVBQUU7Z0JBQ2IsSUFBSWYscUJBQXFCLENBQUN0akIsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDb2pCLGVBQWUsRUFBRTtrQkFDeEQ7a0JBQ0EsSUFBSWtCLFNBQVMsRUFBRTtvQkFDWDtvQkFDQWpCLGdCQUFnQixHQUFHaUIsU0FBUztvQkFDNUJoQixxQkFBcUIsR0FBR2lCLGNBQWM7b0JBQ3RDL1UsTUFBSSxDQUFDOEUsT0FBTyxDQUFDQyxHQUFHLHlDQUF1QzhPLGdCQUFnQixpQ0FBNEJDLHFCQUF1QixDQUFDO2tCQUMvSCxDQUFDLE1BQU07b0JBQ0g7b0JBQ0FGLGVBQWUsR0FBR2dCLE1BQU0sQ0FBQzFDLEVBQUU7b0JBQzNCbFMsTUFBSSxDQUFDOEUsT0FBTyxDQUFDQyxHQUFHLHdDQUFzQzZPLGVBQWlCLENBQUM7a0JBQzVFO2dCQUNKO2NBQ0o7Y0FFQSxJQUFJaUIsVUFBVSxFQUFFO2dCQUNaZCxhQUFhLENBQUMxUSxJQUFJLENBQUN1UixNQUFNLENBQUMxQyxFQUFFLENBQUM7Y0FDakM7WUFDSixDQUFDLENBQUM7WUFFRixJQUFJNEIscUJBQXFCLENBQUN0akIsTUFBTSxHQUFHLENBQUMsSUFBSXVqQixhQUFhLENBQUN2akIsTUFBTSxHQUFHLENBQUMsRUFBRTtjQUM5RDtjQUNBc2pCLHFCQUFxQixHQUFHQSxxQkFBcUIsQ0FBQy9jLE1BQU0sQ0FBQyxVQUFBbWIsRUFBRTtnQkFBQSxPQUFJLENBQUM2QixhQUFhLENBQUMxYSxRQUFRLENBQUM2WSxFQUFFLENBQUM7Y0FBQSxFQUFDO2NBQ3ZGLElBQUksQ0FBQ3BOLE9BQU8sQ0FBQ0MsR0FBRyw4Q0FBNEMrTyxxQkFBdUIsQ0FBQztZQUN4RjtZQUVBLElBQUksQ0FBQ2hQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9DQUFvQyxFQUFFNk8sZUFBZSxDQUFDO1lBQ3ZFLElBQUksQ0FBQzlPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFDQUFxQyxFQUFFOE8sZ0JBQWdCLENBQUM7WUFDekUsSUFBSSxDQUFDL08sT0FBTyxDQUFDQyxHQUFHLENBQUMsMENBQTBDLEVBQUUrTyxxQkFBcUIsQ0FBQztZQUNuRixJQUFJLENBQUNoUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRWlQLGdCQUFnQixDQUFDOztZQUV6RTtZQUNBO1lBQ0Fua0IsTUFBTSxDQUFDeW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMvSCxvQkFBb0IsRUFBRUQsU0FBUyxDQUFDOztZQUVuRDtBQUNSO0FBQ0E7QUFDQTtZQUNRO1lBQ01GLGFBQWEsR0FBRzBGLHFCQUFxQixDQUFDdGpCLE1BQU0sR0FBRyxDQUFDLEdBQUdzakIscUJBQXFCLEdBQ3ZFRixlQUFlLEdBQUcsQ0FBQ0EsZUFBZSxDQUFDLEdBQUcsRUFBRyxFQUVoRDtZQUNBO1lBQ0E7WUFDQSxJQUFJLElBQUksQ0FBQ3ZGLG9CQUFvQixDQUFDN2QsTUFBTSxLQUFLLENBQUMsSUFDbkMsQ0FBQ2lSLHVCQUF1QixDQUFDLElBQUksQ0FBQzRNLG9CQUFvQixDQUFDeE0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUV1TSxhQUFhLENBQUMsRUFBRTtjQUNwRixJQUFJLENBQUNDLG9CQUFvQixDQUFDaEwsSUFBSSxDQUFDK0ssYUFBYSxDQUFDO2NBQzdDLElBQUksQ0FBQ3RKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlDQUF5QyxFQUFFLElBQUksQ0FBQ3NKLG9CQUFvQixDQUFDO1lBQzFGOztZQUVBO1lBQ0EsSUFBSSxJQUFJLENBQUNBLG9CQUFvQixDQUFDN2QsTUFBTSxHQUFHLENBQUMsRUFBRTtjQUN0Q29pQixtQkFBbUIsQ0FBQzdhLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUMsTUFBTTtjQUNINmEsbUJBQW1CLENBQUMxYixJQUFJLENBQUMsQ0FBQztZQUM5Qjs7WUFFQTtZQUNBLElBQUlrWCxhQUFhLENBQUM1ZCxNQUFNLEdBQUcsQ0FBQyxFQUFFO2NBQzFCbWpCLHFCQUFxQixDQUFDNWIsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxNQUFNO2NBQ0g0YixxQkFBcUIsQ0FBQ3pjLElBQUksQ0FBQyxDQUFDO1lBQ2hDOztZQUdBO1lBQ0EsSUFBSTJjLGdCQUFnQixFQUFFO2NBQ2xCSCxvQkFBb0IsQ0FBQ3RXLElBQUksQ0FBQ3lXLGdCQUFnQixDQUFDO1lBQy9DLENBQUMsTUFBTSxJQUFJekYsYUFBYSxDQUFDNWQsTUFBTSxLQUFLLENBQUMsRUFBRTtjQUM3QjZqQixLQUFLLEdBQUdGLGFBQWEsQ0FBQy9GLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFBZ0cscUJBQUEsR0FBSSxJQUFJLENBQUNoTyxjQUFjLENBQUM1UyxJQUFJLENBQUMsVUFBQWtNLEtBQUE7Z0JBQUEsSUFBR3dTLEVBQUUsR0FBQXhTLEtBQUEsQ0FBRndTLEVBQUU7Z0JBQUEsT0FBT0EsRUFBRSxLQUFLOUQsYUFBYSxDQUFDLENBQUMsQ0FBQztjQUFBLEVBQUMscUJBQTdEZ0cscUJBQUEsQ0FBK0R0QyxZQUFZO2NBQzVINEIsb0JBQW9CLENBQUN4ZCxJQUFJLENBQUNtZSxLQUFLLENBQUM7WUFDcEM7O1lBRUE7WUFDQSxJQUFJakcsYUFBYSxDQUFDNWQsTUFBTSxLQUFLLENBQUMsRUFBRTtjQUM1QjBkLHNCQUFzQixDQUFDMWEsSUFBSSxtQ0FBZ0M0YSxhQUFhLENBQUMsQ0FBQyxDQUFDLG9CQUFnQixDQUFDLENBQUN4USxLQUFLLENBQUMsQ0FBQyxDQUFDMUcsSUFBSSxDQUFDLENBQUM7WUFDL0csQ0FBQyxNQUFNO2NBQ0hnWCxzQkFBc0IsQ0FBQzFhLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDb0ssS0FBSyxDQUFDLENBQUMsQ0FBQzdGLElBQUksQ0FBQyxDQUFDO1lBQ3pGOztZQUVBO1lBQ0FtVyxzQkFBc0IsQ0FBQzFhLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUNyRHFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FDakJkLE1BQU0sQ0FBQyxVQUFDZ2dCLENBQUMsRUFBRXhKLEVBQUU7Y0FBQSxPQUFLLENBQUNhLGFBQWEsQ0FBQy9VLFFBQVEsQ0FBQy9FLE1BQU0sQ0FBQ25CLENBQUMsQ0FBQ29hLEVBQUUsQ0FBQyxDQUFDdlosSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUFBLEVBQUMsQ0FDdEZnRSxXQUFXLENBQUMsT0FBTyxDQUFDOztZQUV6QjtZQUNBb1csYUFBYSxDQUFDbEIsT0FBTyxDQUFDLFVBQUErRSxRQUFRLEVBQUk7Y0FDOUIsSUFBTTBFLE9BQU8sR0FBR3hDLGFBQWEsQ0FBQ2xDLFFBQVEsQ0FBQztjQUN2QyxJQUFJMEUsT0FBTyxFQUFFO2dCQUNUekksc0JBQXNCLENBQUMxYSxJQUFJLG1DQUFnQ3llLFFBQVEsb0JBQWdCLENBQUMsQ0FBQ3JVLEtBQUssQ0FBQyxDQUFDLENBQUNSLElBQUksQ0FBQ3VaLE9BQU8sQ0FBQztjQUM5RztZQUNKLENBQUMsQ0FBQzs7WUFFRjtZQUNBLElBQUk5QyxnQkFBZ0IsRUFBRTtjQUNkUyxZQUFZLEdBQUcsRUFBRTtjQUVyQixJQUFJLENBQUMzVSxZQUFZLENBQUN1TixPQUFPLENBQUMsVUFBQTBJLFdBQVcsRUFBSTtnQkFDckMsSUFBSSxDQUFDdEIsWUFBWSxFQUFFO2tCQUNmQSxZQUFZLEdBQUd0VSxNQUFJLENBQUNnWCw0QkFBNEIsQ0FBQztvQkFBRXBCLFdBQVcsRUFBWEEsV0FBVztvQkFBRWQsU0FBUyxFQUFFakI7a0JBQWlCLENBQUMsQ0FBQztnQkFDbEc7Y0FDSixDQUFDLENBQUM7Y0FFRixJQUFJUyxZQUFZLEVBQUU7Z0JBQ1JDLFFBQVEsR0FBR3BoQixDQUFDLENBQUMsSUFBSSxDQUFDZ1IscUJBQXFCLENBQUM5QyxPQUFPLENBQUMsYUFBYSxFQUFFaVQsWUFBWSxDQUFDLENBQUM7Z0JBQ25GWixvQkFBb0IsQ0FBQ2IsTUFBTSxDQUFDMEIsUUFBUSxDQUFDO2NBQ3pDO1lBQ0o7O1lBRUE7WUFDQSxJQUFJbkcsYUFBYSxDQUFDNWQsTUFBTSxHQUFHLENBQUMsRUFBRTtjQUMxQixJQUFJLENBQUN5bUIsa0JBQWtCLENBQUMvSSxzQkFBc0IsRUFBRXdGLG9CQUFvQixFQUFFTyxRQUFRLEVBQUVDLGVBQWUsRUFBRTlGLGFBQWEsQ0FBQztZQUNuSDs7WUFFQTtZQUNBLElBQUlBLGFBQWEsQ0FBQzVkLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDMUIsSUFBSSxDQUFDMG1CLDJCQUEyQixDQUFDOUksYUFBYSxFQUFFRixzQkFBc0IsRUFBRXlFLHVCQUF1QixDQUFDO1lBQ3BHOztZQUVBO1lBQUEsSUFDS1csYUFBYTtjQUFBL1csU0FBQSxDQUFBbk4sQ0FBQTtjQUFBO1lBQUE7WUFDZCxJQUFJZ2YsYUFBYSxDQUFDNWQsTUFBTSxHQUFHLENBQUMsRUFBRTtjQUMxQixJQUFJLENBQUMybUIsZ0NBQWdDLENBQUNqSixzQkFBc0IsRUFBRUMsdUJBQXVCLEVBQUVDLGFBQWEsQ0FBQztZQUN6RyxDQUFDLE1BQU07Y0FDSDtjQUNBLElBQUksQ0FBQ2dKLFdBQVcsQ0FBQ2xKLHNCQUFzQixFQUFFdUYsc0JBQXNCLEVBQUV0Rix1QkFBdUIsRUFBRXVGLG9CQUFvQixFQUFFckIsaUJBQWlCLEVBQUU3SyxRQUFRLEVBQUUsSUFBSSxDQUFDO1lBQ3RKO1lBQUNqTCxTQUFBLENBQUFuTixDQUFBO1lBQUEsT0FFSyxJQUFJLENBQUNvZixnQkFBZ0IsQ0FBQ04sc0JBQXNCLEVBQUVDLHVCQUF1QixFQUFFQyxhQUFhLEVBQUU1RyxRQUFRLEVBQUU4RyxTQUFTLENBQUM7VUFBQTtZQUdwSDtZQUNBLElBQUlGLGFBQWEsQ0FBQzVkLE1BQU0sS0FBSyxDQUFDLEVBQUU7Y0FDNUIsSUFBSSxDQUFDNG1CLFdBQVcsQ0FBQ2xKLHNCQUFzQixFQUFFdUYsc0JBQXNCLEVBQUV0Rix1QkFBdUIsRUFBRXVGLG9CQUFvQixFQUFFckIsaUJBQWlCLEVBQUU3SyxRQUFRLENBQUM7WUFDaEo7VUFBQztZQUFBLE9BQUFqTCxTQUFBLENBQUFsTSxDQUFBO1FBQUE7TUFBQSxHQUFBZ00sUUFBQTtJQUFBLENBQ0o7SUFBQSxTQTdUSzRSLG1CQUFtQkEsQ0FBQW9KLEdBQUE7TUFBQSxPQUFBOUQsb0JBQUEsQ0FBQXBoQixLQUFBLE9BQUFELFNBQUE7SUFBQTtJQUFBLE9BQW5CK2IsbUJBQW1CO0VBQUE7RUErVHpCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFKSTtFQUFBNWEsTUFBQSxDQUtBNmYsc0JBQXNCLEdBQXRCLFNBQUFBLHNCQUFzQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQW9FLE1BQUE7SUFDckIsSUFBTXJTLEtBQUssR0FBRyxJQUFJLENBQUNoSyxNQUFNLENBQUN6SCxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDdEQsSUFBTWdVLFFBQVEsR0FBRyxJQUFJTyxRQUFRLENBQUM5QyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdkMsSUFBTXNTLE9BQU8sR0FBRyxJQUFJLENBQUNuUixjQUFjLENBQUNyUCxNQUFNLENBQUMsVUFBQTZJLEtBQUE7TUFBQSxJQUFHK1UsS0FBSyxHQUFBL1UsS0FBQSxDQUFMK1UsS0FBSztNQUFBLE9BQU9BLEtBQUssS0FBSyxnQkFBZ0I7SUFBQSxFQUFDLENBQUNuaEIsSUFBSSxDQUFDLFVBQUFvaEIsTUFBTSxFQUFJO01BQ2pHLElBQUlBLE1BQU0sQ0FBQ1MsUUFBUSxFQUFFO1FBQ2pCLElBQU14a0IsS0FBSyxHQUFHMlcsUUFBUSxDQUFDelIsR0FBRyxnQkFBYzZlLE1BQU0sQ0FBQzFDLEVBQUUsTUFBRyxDQUFDO1FBQ3JELElBQUksQ0FBQ3JoQixLQUFLLEVBQUU7VUFDUnltQixNQUFJLENBQUN4UyxPQUFPLENBQUNDLEdBQUcseUNBQXNDNlAsTUFBTSxDQUFDOUMsWUFBWSx1QkFBbUIsQ0FBQztVQUM3RixPQUFPLElBQUk7UUFDZjtNQUNKO01BQ0EsT0FBTyxLQUFLO0lBQ2hCLENBQUMsQ0FBQztJQUVGLElBQUl5RixPQUFPLEVBQUU7TUFDVCxJQUFNaEssRUFBRSxHQUFHdEksS0FBSyxDQUFDelIsSUFBSSx3QkFBcUIrakIsT0FBTyxDQUFDckYsRUFBRSxTQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDN0QzRSxFQUFFLENBQUNyQyxjQUFjLENBQUMsQ0FBQztNQUNuQixPQUFPLEtBQUs7SUFDaEI7SUFFQSxPQUFPLElBQUk7RUFDZixDQUFDO0VBQUE3WCxNQUFBLENBRUR5ZixVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsSUFBTTdOLEtBQUssR0FBRyxJQUFJLENBQUNoSyxNQUFNLENBQUN6SCxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDdEQsSUFBTXNaLGlCQUFpQixHQUFHN0gsS0FBSyxDQUFDelIsSUFBSSxDQUFDLDhCQUE4QixDQUFDO0lBQ3BFLElBQU0wYSxzQkFBc0IsR0FBR3BCLGlCQUFpQixDQUFDdFosSUFBSSxDQUFDLHNDQUFzQyxDQUFDO0lBRTdGLElBQU00YSxhQUFhLE1BQUFwSyxNQUFBLENBQ1osSUFBSSxDQUFDcUssb0JBQW9CLENBQUNtSixHQUFHLENBQUMsQ0FBQyxFQUMvQixJQUFJLENBQUNuSixvQkFBb0IsQ0FBQ21KLEdBQUcsQ0FBQyxDQUFDLENBQ3JDOztJQUVEO0lBQ0E7SUFDQSxJQUFJcEosYUFBYSxFQUFFO01BQ2YsSUFBTXFKLE9BQU8sR0FBR3ZKLHNCQUFzQixDQUFDMWEsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQ3JFdUQsTUFBTSxDQUFDLFVBQUMrQixFQUFFLEVBQUV5VSxFQUFFO1FBQUEsT0FBS2EsYUFBYSxDQUFDL1UsUUFBUSxDQUFDL0UsTUFBTSxDQUFDbkIsQ0FBQyxDQUFDb2EsRUFBRSxDQUFDLENBQUMxWCxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO01BQUEsRUFBQztNQUVoRzRoQixPQUFPLENBQUNqa0IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQ2xDMFksR0FBRyxDQUFDLGtEQUFrRCxDQUFDLENBQ3ZEblYsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUNvTyxHQUFHLENBQUMsRUFBRSxDQUFDO01BRTFDc1MsT0FBTyxDQUFDamtCLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUN0RHVELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDZ1EsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7TUFFekQwUSxPQUFPLENBQUNqa0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUNvQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7TUFFbEUsSUFBSSxDQUFDb1kseUJBQXlCLEdBQUcsS0FBSzs7TUFFdEM7TUFDQSxJQUFJLENBQUNDLG1CQUFtQixDQUFDO1FBQUVxRixhQUFhLEVBQUU7TUFBSyxDQUFDLENBQUM7O01BRWpEO01BQ0F4RyxpQkFBaUIsQ0FBQzNVLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDdkM7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbkJJO0VBQUE5RSxNQUFBLENBb0JBeWlCLHNCQUFzQixHQUF0QixTQUFBQSxzQkFBc0JBLENBQUFqVyxLQUFBLEVBQW9DO0lBQUEsSUFBQTZYLE1BQUE7SUFBQSxJQUFqQzlCLFdBQVcsR0FBQS9WLEtBQUEsQ0FBWCtWLFdBQVc7TUFBRXBPLFFBQVEsR0FBQTNILEtBQUEsQ0FBUjJILFFBQVE7TUFBRW9OLE1BQU0sR0FBQS9VLEtBQUEsQ0FBTitVLE1BQU07SUFDbEQsSUFBSSxDQUFDOVAsT0FBTyxDQUFDQyxHQUFHLHlEQUF1RDZRLFdBQVcsQ0FBQzNmLElBQUkscUJBQWdCMmUsTUFBTSxDQUFDOUMsWUFBYyxDQUFDO0lBQzdILElBQUkrQyxVQUFVLEdBQUcsS0FBSztJQUN0QixJQUFNYixnQkFBZ0IsR0FBRyxFQUFFO0lBRTNCLElBQU0xaUIsQ0FBQyxHQUFHc2tCLFdBQVcsQ0FBQzNmLElBQUksQ0FBQzBoQixLQUFLLENBQUMsc0JBQXNCLENBQUM7SUFDeEQsSUFBSSxDQUFDcm1CLENBQUMsRUFBRTs7SUFFUjtBQUNSO0FBQ0E7SUFDUSxJQUFNc21CLGFBQWEsR0FBR3RtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNpRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNnQyxHQUFHLENBQUMsVUFBQXNoQixFQUFFO01BQUEsT0FBSUEsRUFBRSxDQUFDdGpCLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQUEsRUFBQyxDQUFDZ0MsR0FBRyxDQUFDLFVBQUF1aEIsS0FBQTtNQUFBLElBQUVuakIsR0FBRyxHQUFBbWpCLEtBQUE7UUFBRWpuQixLQUFLLEdBQUFpbkIsS0FBQTtNQUFBLE9BQU87UUFDckY3aEIsSUFBSSxFQUFFdEIsR0FBRyxDQUFDb2pCLElBQUksQ0FBQyxDQUFDO1FBQ2hCbG5CLEtBQUssRUFBRUEsS0FBSyxHQUFHQSxLQUFLLENBQUNrbkIsSUFBSSxDQUFDLENBQUMsR0FBRy9QO01BQ2xDLENBQUM7SUFBQSxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUNsRCxPQUFPLENBQUNDLEdBQUcsc0NBQW9DNlMsYUFBYSxDQUFDcmhCLEdBQUcsQ0FBQyxVQUFBeWhCLEtBQUE7TUFBQSxJQUFHL2hCLElBQUksR0FBQStoQixLQUFBLENBQUovaEIsSUFBSTtRQUFFcEYsS0FBSyxHQUFBbW5CLEtBQUEsQ0FBTG5uQixLQUFLO01BQUEsT0FBUUEsS0FBSyxHQUFNb0YsSUFBSSxVQUFLcEYsS0FBSyxHQUFLb0YsSUFBSTtJQUFBLENBQUMsQ0FBQyxDQUFDa1UsSUFBSSxDQUFDLElBQUksQ0FBRyxDQUFDOztJQUU5STtBQUNSO0FBQ0E7SUFDUSxJQUFNOE4sV0FBVyxHQUFHckMsV0FBVyxDQUFDL2tCLEtBQUssQ0FBQzBELEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ2dDLEdBQUcsQ0FBQyxVQUFBc2hCLEVBQUU7TUFBQSxPQUFJQSxFQUFFLENBQUN0akIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFBQSxFQUFDLENBQUNnQyxHQUFHLENBQUMsVUFBQTJoQixLQUFBO01BQUEsSUFBRXZqQixHQUFHLEdBQUF1akIsS0FBQTtRQUFFcm5CLEtBQUssR0FBQXFuQixLQUFBO01BQUEsT0FBTztRQUNoR2ppQixJQUFJLEVBQUV0QixHQUFHLENBQUNvakIsSUFBSSxDQUFDLENBQUM7UUFDaEJsbkIsS0FBSyxFQUFFQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ2tuQixJQUFJLENBQUMsQ0FBQyxHQUFHL1A7TUFDbEMsQ0FBQztJQUFBLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQ2xELE9BQU8sQ0FBQ0MsR0FBRyxvQ0FBa0NrVCxXQUFXLENBQUMxaEIsR0FBRyxDQUFDLFVBQUE0aEIsS0FBQTtNQUFBLElBQUdsaUIsSUFBSSxHQUFBa2lCLEtBQUEsQ0FBSmxpQixJQUFJO1FBQUVwRixLQUFLLEdBQUFzbkIsS0FBQSxDQUFMdG5CLEtBQUs7TUFBQSxPQUFRQSxLQUFLLEdBQU1vRixJQUFJLFVBQUtwRixLQUFLLEdBQUtvRixJQUFJO0lBQUEsQ0FBQyxDQUFDLENBQUNrVSxJQUFJLENBQUMsSUFBSSxDQUFHLENBQUM7O0lBRTFJO0FBQ1I7QUFDQTtBQUNBO0lBQ1EsSUFBSTBMLFdBQVcsR0FBRyxLQUFLOztJQUV2QjtJQUNBK0IsYUFBYSxDQUFDMUssT0FBTyxDQUFDLFVBQUFrTCxNQUFBLEVBQXFCO01BQUEsSUFBbEJuaUIsSUFBSSxHQUFBbWlCLE1BQUEsQ0FBSm5pQixJQUFJO1FBQUVwRixLQUFLLEdBQUF1bkIsTUFBQSxDQUFMdm5CLEtBQUs7TUFDaEMsSUFBQXduQixxQkFBQSxHQUE0QlgsTUFBSSxDQUFDakcsZUFBZSxDQUFDeGIsSUFBSSxFQUFFcEYsS0FBSyxDQUFDO1FBQXREb2hCLFFBQVEsR0FBQW9HLHFCQUFBO1FBQUVsRyxPQUFPLEdBQUFrRyxxQkFBQTtNQUN4QixJQUFNM0MsU0FBUyxHQUFHcGhCLE1BQU0sQ0FBQ2tULFFBQVEsQ0FBQzhRLE1BQU0sZ0JBQWNyRyxRQUFRLE1BQUcsQ0FBQyxDQUFDcFEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFFaEYsSUFBSTZULFNBQVMsS0FBS3ZELE9BQU8sRUFBRTtRQUN2QjBELFdBQVcsR0FBRyxJQUFJO01BQ3RCO0lBQ0osQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDL1EsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUU4USxXQUFXLENBQUM7SUFFL0QsSUFBSUEsV0FBVyxFQUFFO01BQ2I7TUFDQW9DLFdBQVcsQ0FBQy9LLE9BQU8sQ0FBQyxVQUFBcUwsTUFBQSxFQUFxQjtRQUFBLElBQWxCdGlCLElBQUksR0FBQXNpQixNQUFBLENBQUp0aUIsSUFBSTtVQUFFcEYsS0FBSyxHQUFBMG5CLE1BQUEsQ0FBTDFuQixLQUFLO1FBQzlCLElBQUkwUSxpQkFBaUIsQ0FBQ3FULE1BQU0sQ0FBQzlDLFlBQVksRUFBRTdiLElBQUksQ0FBQyxFQUFFO1VBQzlDLElBQUksQ0FBQ3BGLEtBQUssRUFBRTtZQUNSO1lBQ0Fna0IsVUFBVSxHQUFHLElBQUk7WUFDakI2QyxNQUFJLENBQUM1UyxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRThQLFVBQVUsQ0FBQztVQUNqRSxDQUFDLE1BQU0sSUFBSUQsTUFBTSxDQUFDN0MsTUFBTSxFQUFFO1lBQ3RCO1lBQ0E2QyxNQUFNLENBQUM3QyxNQUFNLENBQUM3RSxPQUFPLENBQUMsVUFBQXNMLE1BQUEsRUFBbUI7Y0FBQSxJQUFoQnhHLEtBQUssR0FBQXdHLE1BQUEsQ0FBTHhHLEtBQUs7Z0JBQUVFLEVBQUUsR0FBQXNHLE1BQUEsQ0FBRnRHLEVBQUU7Y0FDOUIsSUFBSTNRLGlCQUFpQixDQUFDeVEsS0FBSyxFQUFFbmhCLEtBQUssQ0FBQyxFQUFFO2dCQUNqQyxJQUFNNG5CLGdCQUFnQixHQUFHO2tCQUNyQnhHLFFBQVEsRUFBRTJDLE1BQU0sQ0FBQzFDLEVBQUU7a0JBQ25CQyxPQUFPLEVBQUVEO2dCQUNiLENBQUM7Z0JBQ0Q4QixnQkFBZ0IsQ0FBQzNRLElBQUksQ0FBQ29WLGdCQUFnQixDQUFDO2dCQUN2Q2YsTUFBSSxDQUFDNVMsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUwVCxnQkFBZ0IsQ0FBQztjQUM1RTtZQUNKLENBQUMsQ0FBQztVQUNOO1FBQ0o7TUFDSixDQUFDLENBQUM7SUFDTjtJQUVBLElBQUk1RCxVQUFVLElBQUliLGdCQUFnQixDQUFDeGpCLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDM0MsT0FBTztRQUFFcWtCLFVBQVUsRUFBVkEsVUFBVTtRQUFFYixnQkFBZ0IsRUFBaEJBO01BQWlCLENBQUM7SUFDM0M7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVpJO0VBQUEzZ0IsTUFBQSxDQWFBMmlCLHFCQUFxQixHQUFyQixTQUFBQSxxQkFBcUJBLENBQUEwQyxNQUFBLEVBQTBCO0lBQUEsSUFBQUMsTUFBQTtJQUFBLElBQXZCL0MsV0FBVyxHQUFBOEMsTUFBQSxDQUFYOUMsV0FBVztNQUFFaEIsTUFBTSxHQUFBOEQsTUFBQSxDQUFOOUQsTUFBTTtJQUN2QyxJQUFNdGpCLENBQUMsR0FBR3NrQixXQUFXLENBQUMzZixJQUFJLENBQUMwaEIsS0FBSyxDQUFDLG9CQUFvQixDQUFDO0lBQ3RELElBQUlybUIsQ0FBQyxFQUFFO01BQ0gsSUFBTXdqQixTQUFTLEdBQUd4akIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDeW1CLElBQUksQ0FBQyxDQUFDO01BQzdCLElBQU1oRCxjQUFjLEdBQUdhLFdBQVcsQ0FBQy9rQixLQUFLLENBQUMwRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNnQyxHQUFHLENBQUMsVUFBQTZLLENBQUM7UUFBQSxPQUFJQSxDQUFDLENBQUMyVyxJQUFJLENBQUMsQ0FBQztNQUFBLEVBQUMsQ0FBQztNQUFBLENBQ2xFeGhCLEdBQUcsQ0FBQyxVQUFBbWIsVUFBVTtRQUFBLElBQUFrSCxxQkFBQTtRQUFBLFFBQUFBLHFCQUFBLEdBQUlELE1BQUksQ0FBQ3ZTLGNBQWMsQ0FBQzVTLElBQUksQ0FBQyxVQUFBcWxCLE1BQUE7VUFBQSxJQUFHL0csWUFBWSxHQUFBK0csTUFBQSxDQUFaL0csWUFBWTtVQUFBLE9BQU92USxpQkFBaUIsQ0FBQ3VRLFlBQVksRUFBRUosVUFBVSxDQUFDO1FBQUEsRUFBQyxxQkFBM0ZrSCxxQkFBQSxDQUE2RjFHLEVBQUU7TUFBQSxFQUFDLENBQ2xIbmIsTUFBTSxDQUFDLFVBQUFtYixFQUFFO1FBQUEsT0FBSUEsRUFBRTtNQUFBLEVBQUM7TUFFckIsSUFBSTZDLGNBQWMsQ0FBQzFiLFFBQVEsQ0FBQ3ViLE1BQU0sQ0FBQzFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3BDO1FBQ0EsSUFBSSxDQUFDcE4sT0FBTyxDQUFDQyxHQUFHLGtDQUFnQytQLFNBQVMsMEJBQXFCQyxjQUFnQixDQUFDO1FBQy9GLE9BQU87VUFBRUQsU0FBUyxFQUFUQSxTQUFTO1VBQUVDLGNBQWMsRUFBZEE7UUFBZSxDQUFDO01BQ3hDO0lBQ0o7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaEJJO0VBQUExaEIsTUFBQSxDQWlCQThpQix1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFBMkMsTUFBQSxFQUEwQjtJQUFBLElBQUFDLE9BQUE7SUFBQSxJQUF2Qm5ELFdBQVcsR0FBQWtELE1BQUEsQ0FBWGxELFdBQVc7TUFBRWhCLE1BQU0sR0FBQWtFLE1BQUEsQ0FBTmxFLE1BQU07SUFDekMsSUFBTXRqQixDQUFDLEdBQUdza0IsV0FBVyxDQUFDM2YsSUFBSSxDQUFDMGhCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztJQUN4RCxJQUFJcm1CLENBQUMsRUFBRTtNQUNILElBQUEwbkIsY0FBQSxHQUFzQjFuQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNpRCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDZ0MsR0FBRyxDQUFDLFVBQUE2SyxDQUFDO1VBQUEsT0FBSUEsQ0FBQyxDQUFDMlcsSUFBSSxDQUFDLENBQUM7UUFBQSxFQUFDO1FBQXBEOWhCLElBQUksR0FBQStpQixjQUFBO1FBQUVub0IsS0FBSyxHQUFBbW9CLGNBQUE7TUFDbEIsSUFBTXpDLE9BQU8sR0FBR1gsV0FBVyxDQUFDL2tCLEtBQUs7O01BRWpDO01BQ0EsSUFBSSxDQUFDb0YsSUFBSSxJQUFJLENBQUNzTCxpQkFBaUIsQ0FBQ3FULE1BQU0sQ0FBQzlDLFlBQVksRUFBRTdiLElBQUksQ0FBQyxFQUFFO01BRTVELElBQUksQ0FBQ3BGLEtBQUssRUFBRTtRQUNSO1FBQ0EsSUFBSSxDQUFDaVUsT0FBTyxDQUFDQyxHQUFHLDRDQUF5QzlPLElBQUksbUJBQVVzZ0IsT0FBTyxXQUFLLENBQUM7UUFDcEYsT0FBTztVQUFFQSxPQUFPLEVBQVBBO1FBQVEsQ0FBQztNQUN0QjtNQUVBLElBQU1DLGFBQWEsR0FBRyxDQUFDLENBQUM7O01BRXhCO01BQ0E1QixNQUFNLENBQUM3QyxNQUFNLENBQUM3RSxPQUFPLENBQUMsVUFBQStMLE1BQUEsRUFBbUI7UUFBQSxJQUFoQi9HLEVBQUUsR0FBQStHLE1BQUEsQ0FBRi9HLEVBQUU7VUFBRUYsS0FBSyxHQUFBaUgsTUFBQSxDQUFMakgsS0FBSztRQUM5QixJQUFJelEsaUJBQWlCLENBQUN5USxLQUFLLEVBQUVuaEIsS0FBSyxDQUFDLEVBQUU7VUFDakNrb0IsT0FBSSxDQUFDalUsT0FBTyxDQUFDQyxHQUFHLDRDQUF5QzlPLElBQUksV0FBTXBGLEtBQUssbUJBQVUwbEIsT0FBTyxXQUFLLENBQUM7VUFDL0ZDLGFBQWEsQ0FBQ3RFLEVBQUUsQ0FBQyxHQUFHcUUsT0FBTztRQUMvQjtNQUNKLENBQUMsQ0FBQztNQUVGLE9BQU87UUFBRUMsYUFBYSxFQUFiQTtNQUFjLENBQUM7SUFDNUI7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVkk7RUFBQW5qQixNQUFBLENBV0EyakIsNEJBQTRCLEdBQTVCLFNBQUFBLDRCQUE0QkEsQ0FBQWtDLE1BQUEsRUFBNkI7SUFBQSxJQUExQnRELFdBQVcsR0FBQXNELE1BQUEsQ0FBWHRELFdBQVc7TUFBRWQsU0FBUyxHQUFBb0UsTUFBQSxDQUFUcEUsU0FBUztJQUNqRCxJQUFNeGpCLENBQUMsR0FBR3NrQixXQUFXLENBQUMzZixJQUFJLENBQUMwaEIsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0lBQ3hELElBQUlybUIsQ0FBQyxFQUFFO01BQ0gsSUFBTTJFLElBQUksR0FBRzNFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3ltQixJQUFJLENBQUMsQ0FBQztNQUN4QixJQUFNeEIsT0FBTyxHQUFHWCxXQUFXLENBQUMva0IsS0FBSzs7TUFFakM7TUFDQSxJQUFJLENBQUNvRixJQUFJLElBQUksQ0FBQ3NMLGlCQUFpQixDQUFDdVQsU0FBUyxFQUFFN2UsSUFBSSxDQUFDLEVBQUU7TUFFbEQsSUFBSSxDQUFDNk8sT0FBTyxDQUFDQyxHQUFHLDJDQUF3QzlPLElBQUksbUJBQVVzZ0IsT0FBTyxXQUFLLENBQUM7TUFDbkYsT0FBT0EsT0FBTztJQUNsQjtFQUNKOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpCSTtFQUFBbGpCLE1BQUEsQ0FrQkFxakIsOEJBQThCLEdBQTlCLFNBQUFBLDhCQUE4QkEsQ0FBQXlDLE1BQUEsRUFBMEI7SUFBQSxJQUFBQyxPQUFBO0lBQUEsSUFBdkJ4RCxXQUFXLEdBQUF1RCxNQUFBLENBQVh2RCxXQUFXO01BQUVoQixNQUFNLEdBQUF1RSxNQUFBLENBQU52RSxNQUFNO0lBQ2hELElBQU10akIsQ0FBQyxHQUFHc2tCLFdBQVcsQ0FBQzNmLElBQUksQ0FBQzBoQixLQUFLLENBQUMsOEJBQThCLENBQUM7SUFDaEUsSUFBSXJtQixDQUFDLEVBQUU7TUFDSCxJQUFBK25CLGVBQUEsR0FBc0IvbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDaUQsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQ2dDLEdBQUcsQ0FBQyxVQUFBNkssQ0FBQztVQUFBLE9BQUlBLENBQUMsQ0FBQzJXLElBQUksQ0FBQyxDQUFDO1FBQUEsRUFBQztRQUFwRDloQixJQUFJLEdBQUFvakIsZUFBQTtRQUFFeG9CLEtBQUssR0FBQXdvQixlQUFBO01BQ2xCLElBQU1DLE9BQU8sR0FBRzFELFdBQVcsQ0FBQy9rQixLQUFLOztNQUVqQztNQUNBLElBQUksQ0FBQ29GLElBQUksSUFBSSxDQUFDcEYsS0FBSyxJQUFJLENBQUMwUSxpQkFBaUIsQ0FBQ3FULE1BQU0sQ0FBQzlDLFlBQVksRUFBRTdiLElBQUksQ0FBQyxFQUFFO01BRXRFLElBQU13Z0Isb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO01BRS9CN0IsTUFBTSxDQUFDN0MsTUFBTSxDQUFDN0UsT0FBTyxDQUFDLFVBQUFxTSxNQUFBLEVBQW1CO1FBQUEsSUFBaEJySCxFQUFFLEdBQUFxSCxNQUFBLENBQUZySCxFQUFFO1VBQUVGLEtBQUssR0FBQXVILE1BQUEsQ0FBTHZILEtBQUs7UUFDOUIsSUFBSXpRLGlCQUFpQixDQUFDeVEsS0FBSyxFQUFFbmhCLEtBQUssQ0FBQyxFQUFFO1VBQ2pDdW9CLE9BQUksQ0FBQ3RVLE9BQU8sQ0FBQ0MsR0FBRyxvREFBaUQ5TyxJQUFJLFdBQU1wRixLQUFLLG1CQUFVeW9CLE9BQU8sV0FBSyxDQUFDO1VBQ3ZHN0Msb0JBQW9CLENBQUN2RSxFQUFFLENBQUMsR0FBR29ILE9BQU87UUFDdEM7TUFDSixDQUFDLENBQUM7TUFFRixPQUFPN0Msb0JBQW9CO0lBQy9CO0VBQ0o7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWEk7RUFBQXBqQixNQUFBLENBWUF1akIsc0JBQXNCLEdBQXRCLFNBQUFBLHNCQUFzQkEsQ0FBQTRDLE1BQUEsRUFBMEI7SUFBQSxJQUF2QjVELFdBQVcsR0FBQTRELE1BQUEsQ0FBWDVELFdBQVc7TUFBRWhCLE1BQU0sR0FBQTRFLE1BQUEsQ0FBTjVFLE1BQU07SUFDeEMsSUFBTXRqQixDQUFDLEdBQUdza0IsV0FBVyxDQUFDM2YsSUFBSSxDQUFDMGhCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztJQUN2RCxJQUFJcm1CLENBQUMsRUFBRTtNQUNILElBQU0yRSxJQUFJLEdBQUczRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUN5bUIsSUFBSSxDQUFDLENBQUM7TUFDeEIsSUFBTXBCLE9BQU8sR0FBR2xXLE1BQU0sQ0FBQ21WLFdBQVcsQ0FBQy9rQixLQUFLLENBQUMsQ0FBQ2tuQixJQUFJLENBQUMsQ0FBQzs7TUFFaEQ7TUFDQSxJQUFJLENBQUM5aEIsSUFBSSxJQUFJLENBQUNzTCxpQkFBaUIsQ0FBQ3FULE1BQU0sQ0FBQzlDLFlBQVksRUFBRTdiLElBQUksQ0FBQyxFQUFFO01BRTVELElBQUksQ0FBQzZPLE9BQU8sQ0FBQ0MsR0FBRyx1Q0FBb0M5TyxJQUFJLGdCQUFTMGdCLE9BQU8sT0FBRyxDQUFDO01BQzVFLE9BQU9BLE9BQU87SUFDbEI7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxCSTtFQUFBdGpCLE1BQUEsQ0FtQkF5akIsdUJBQXVCLEdBQXZCLFNBQUFBLHVCQUF1QkEsQ0FBQTJDLE1BQUEsRUFBMEI7SUFBQSxJQUF2QjdELFdBQVcsR0FBQTZELE1BQUEsQ0FBWDdELFdBQVc7TUFBRWhCLE1BQU0sR0FBQTZFLE1BQUEsQ0FBTjdFLE1BQU07SUFDekMsSUFBTWlDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDeEIsSUFBTXZsQixDQUFDLEdBQUdza0IsV0FBVyxDQUFDM2YsSUFBSSxDQUFDMGhCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztJQUN4RCxJQUFJcm1CLENBQUMsRUFBRTtNQUNILElBQU15ZCxLQUFLLEdBQUd6YSxNQUFNLENBQUNoRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUN5bUIsSUFBSSxDQUFDLENBQUMsQ0FBQzs7TUFFakM7TUFDQW5DLFdBQVcsQ0FBQy9rQixLQUFLLENBQUMwRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMyWSxPQUFPLENBQUMsVUFBQTJLLEVBQUUsRUFBSTtRQUN2QztRQUNBLElBQUE2QixhQUFBLEdBQWlDN0IsRUFBRSxDQUFDdGpCLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUNnQyxHQUFHLENBQUMsVUFBQTZLLENBQUM7WUFBQSxPQUFJQSxDQUFDLENBQUMyVyxJQUFJLENBQUMsQ0FBQztVQUFBLEVBQUM7VUFBN0RyRyxVQUFVLEdBQUFnSSxhQUFBO1VBQUVDLFVBQVUsR0FBQUQsYUFBQTtRQUU3QixJQUFJblksaUJBQWlCLENBQUNxVCxNQUFNLENBQUM5QyxZQUFZLEVBQUVKLFVBQVUsQ0FBQyxFQUFFO1VBQUEsSUFBQWtJLG1CQUFBO1VBQ3BEOztVQUVBO1VBQ0EsSUFBTXpILE9BQU8sSUFBQXlILG1CQUFBLEdBQUdoRixNQUFNLENBQUM3QyxNQUFNLENBQUN2ZSxJQUFJLENBQUMsVUFBQXFtQixNQUFBO1lBQUEsSUFBRzdILEtBQUssR0FBQTZILE1BQUEsQ0FBTDdILEtBQUs7WUFBQSxPQUFPelEsaUJBQWlCLENBQUN5USxLQUFLLEVBQUUySCxVQUFVLENBQUM7VUFBQSxFQUFDLHFCQUF2RUMsbUJBQUEsQ0FBeUUxSCxFQUFFO1VBQzNGLElBQUlDLE9BQU8sRUFBRTtZQUNUO1lBQ0EwRSxhQUFhLENBQUMxRSxPQUFPLENBQUMsR0FBR3BELEtBQUs7VUFDbEM7UUFDSjtNQUNKLENBQUMsQ0FBQztJQUNOO0lBQ0EsT0FBTzhILGFBQWE7RUFDeEI7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhCSTtFQUFBeGpCLE1BQUEsQ0FpQk15bUIsYUFBYTtFQUFBO0VBQUE7SUFBQSxJQUFBQyxjQUFBLEdBQUE5bkIsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQW5CLFNBQUF3TSxTQUFBO01BQUEsSUFBQVUsSUFBQTtNQUFBLE9BQUFwTixZQUFBLEdBQUFDLENBQUEsV0FBQXFOLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBdFAsQ0FBQTtVQUFBO1lBQUEsS0FDUThTLGNBQWM7Y0FBQXhELFNBQUEsQ0FBQXRQLENBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQXNQLFNBQUEsQ0FBQXJPLENBQUEsSUFBUzZSLGNBQWM7VUFBQTtZQUFBeEQsU0FBQSxDQUFBdFAsQ0FBQTtZQUFBLE9BRXRCK0QsQ0FBQyxDQUFDd0wsSUFBSSxDQUFDO2NBQ3RCN0IsR0FBRyxFQUFFLFVBQVU7Y0FDZjhCLE1BQU0sRUFBRSxNQUFNO2NBQ2R3SyxXQUFXLEVBQUUsa0JBQWtCO2NBQy9CbkssT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDQyxhQUFhLGNBQVksSUFBSSxDQUFDbUosT0FBTyxDQUFDL007Y0FDMUMsQ0FBQztjQUNENkQsU0FBUyxFQUFFO2dCQUNQQyxlQUFlLEVBQUU7Y0FDckIsQ0FBQztjQUNEcEwsSUFBSSxFQUFFNkssSUFBSSxDQUFDQyxTQUFTLENBQUM7Z0JBQ2pCQyxLQUFLLHF0Q0ErQko7Z0JBQ0RDLFNBQVMsRUFBRTtrQkFDUGdiLFlBQVksRUFBRSxJQUFJLENBQUMzUixPQUFPLENBQUM0UixvQkFBb0I7a0JBQy9DQyxtQkFBbUIsRUFBRSxJQUFJLENBQUM3UixPQUFPLENBQUM4UjtnQkFDdEM7Y0FDSixDQUFDO1lBQ0wsQ0FBQyxDQUFDO1VBQUE7WUFqREkzYixJQUFJLEdBQUFFLFNBQUEsQ0FBQXRPLENBQUE7WUFtRFY4UixjQUFjLEdBQUFyUyxNQUFBLENBQUF5bUIsTUFBQSxLQUNQOVgsSUFBSSxDQUFDeEssSUFBSSxDQUFDcUwsSUFBSSxDQUFDK2EsUUFBUTtjQUMxQnRKLFFBQVEsRUFBRXRTLElBQUksQ0FBQ3hLLElBQUksQ0FBQ3FMLElBQUksQ0FBQ3lSO1lBQVEsRUFDcEM7WUFBQyxPQUFBcFMsU0FBQSxDQUFBck8sQ0FBQSxJQUVLNlIsY0FBYztRQUFBO01BQUEsR0FBQXBFLFFBQUE7SUFBQSxDQUN4QjtJQUFBLFNBNURLZ2MsYUFBYUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUEsQ0FBQTVuQixLQUFBLE9BQUFELFNBQUE7SUFBQTtJQUFBLE9BQWI0bkIsYUFBYTtFQUFBO0VBOERuQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUE3Qkk7RUFBQXptQixNQUFBLENBOEJNZ25CLGlCQUFpQjtFQUFBO0VBQUE7SUFBQSxJQUFBQyxrQkFBQSxHQUFBcm9CLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUF2QixTQUFBaXBCLFNBQXdCQyxXQUFXLEVBQUVoVCxRQUFRO01BQUEsSUFBQWlULHNCQUFBLEVBQUFDLE1BQUEsRUFBQUMsVUFBQSxFQUFBQyxRQUFBLEVBQUFDLGFBQUEsRUFBQUMsSUFBQSxFQUFBQyxVQUFBO01BQUEsT0FBQTNwQixZQUFBLEdBQUFDLENBQUEsV0FBQTJwQixTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQTVyQixDQUFBO1VBQUE7WUFDbkNxckIsc0JBQXNCLEdBQUcsRUFBRTtZQUVqQ2pULFFBQVEsQ0FBQ2tOLE9BQU8sQ0FBQyxDQUFDLENBQUN4SCxPQUFPLENBQUMsVUFBQStOLE1BQUEsRUFBa0I7Y0FBQSxJQUFoQnRtQixHQUFHLEdBQUFzbUIsTUFBQTtnQkFBRXBxQixLQUFLLEdBQUFvcUIsTUFBQTtjQUNuQyxJQUFNM3BCLENBQUMsR0FBR3FELEdBQUcsQ0FBQ2dqQixLQUFLLENBQUMsc0JBQXNCLENBQUM7Y0FDM0MsSUFBSXJtQixDQUFDLEVBQUU7Z0JBQ0gsSUFBTTRwQixjQUFjLEdBQUc1bUIsTUFBTSxDQUFDaEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFNNnBCLGFBQWEsR0FBRzdtQixNQUFNLENBQUN6RCxLQUFLLENBQUM7Z0JBRW5DLElBQUlzcUIsYUFBYSxFQUFFO2tCQUNmLElBQUksQ0FBQ1gsV0FBVyxDQUFDaG5CLElBQUksQ0FBQyxVQUFBNG5CLE1BQUE7b0JBQUEsSUFBR2xKLEVBQUUsR0FBQWtKLE1BQUEsQ0FBRmxKLEVBQUU7b0JBQUEsT0FBT0EsRUFBRSxLQUFLZ0osY0FBYztrQkFBQSxFQUFDLEVBQUU7b0JBQ3REVCxzQkFBc0IsQ0FBQ3BYLElBQUksQ0FBQztzQkFBRTZYLGNBQWMsRUFBZEEsY0FBYztzQkFBRUMsYUFBYSxFQUFiQTtvQkFBYyxDQUFDLENBQUM7a0JBQ2xFO2dCQUNKO2NBQ0o7WUFDSixDQUFDLENBQUM7O1lBRUY7WUFDTVQsTUFBTSxHQUFHLENBQUNELHNCQUFzQixDQUFDO1lBQ2pDRSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFFekJILFdBQVcsQ0FBQ3ROLE9BQU8sQ0FBQyxVQUFBMEgsTUFBTSxFQUFJO2NBQzFCLElBQU03QyxNQUFNLEdBQUc2QyxNQUFNLENBQUM3QyxNQUFNLEtBQUs2QyxNQUFNLENBQUMvakIsS0FBSyxHQUFHLENBQUM7Z0JBQUVxaEIsRUFBRSxFQUFFMEMsTUFBTSxDQUFDL2pCO2NBQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2NBRTVFa2hCLE1BQU0sQ0FBQzdFLE9BQU8sQ0FBQyxVQUFBcmMsS0FBSyxFQUFJO2dCQUNwQjZwQixNQUFNLENBQUNyWCxJQUFJLElBQUFXLE1BQUEsQ0FDSnlXLHNCQUFzQixHQUN6QjtrQkFBRVMsY0FBYyxFQUFFdEcsTUFBTSxDQUFDMUMsRUFBRTtrQkFBRWlKLGFBQWEsRUFBRXRxQixLQUFLLENBQUNxaEI7Z0JBQUcsQ0FBQyxFQUN6RCxDQUFDO2dCQUNGeUksVUFBVSxDQUFDdFgsSUFBSSxDQUFDO2tCQUFFNE8sUUFBUSxFQUFFMkMsTUFBTSxDQUFDMUMsRUFBRTtrQkFBRUMsT0FBTyxFQUFFdGhCLEtBQUssQ0FBQ3FoQjtnQkFBRyxDQUFDLENBQUM7Y0FDL0QsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDO1lBQUM4SSxTQUFBLENBQUE1ckIsQ0FBQTtZQUFBLE9BRW9CLElBQUksQ0FBQ2lzQixzQkFBc0IsQ0FBQ1gsTUFBTSxDQUFDO1VBQUE7WUFBcERFLFFBQVEsR0FBQUksU0FBQSxDQUFBNXFCLENBQUE7WUFBQXlxQixhQUFBLEdBQ2dCRCxRQUFRLENBQUNya0IsR0FBRyxDQUFDLFVBQUMrSSxPQUFPLEVBQUU5UCxDQUFDO2NBQUEsT0FBTUEsQ0FBQyxLQUFLLENBQUMsR0FBRzhQLE9BQU8sR0FBQXpQLE1BQUEsQ0FBQXltQixNQUFBLEtBQVFxRSxVQUFVLENBQUNuckIsQ0FBQyxDQUFDLEVBQUs4UCxPQUFPLENBQUU7WUFBQSxDQUFDLENBQUMsRUFBM0d3YixJQUFJLEdBQUFELGFBQUEsS0FBS0UsVUFBVSxHQUFBTyxpQkFBQSxDQUFBVCxhQUFBLEVBQUFoWixLQUFBO1lBRTFCa1osVUFBVSxDQUFDN04sT0FBTyxDQUFDLFVBQUFxTyxTQUFTLEVBQUk7Y0FDNUIsSUFBSUEsU0FBUyxDQUFDQyxhQUFhLEVBQUU7Z0JBQUEsSUFBQUMscUJBQUEsRUFBQUMsbUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsb0JBQUE7Z0JBQ3pCO2dCQUNBO2dCQUNBLElBQUlDLG1CQUFtQixHQUFHLEVBQUFKLHFCQUFBLEdBQUFGLFNBQVMsQ0FBQ0MsYUFBYSxxQkFBdkJDLHFCQUFBLENBQXlCMU0sS0FBSyxDQUFDbGUsS0FBSyxNQUFBNnFCLG1CQUFBLEdBQUdaLElBQUksQ0FBQ1UsYUFBYSxxQkFBbEJFLG1CQUFBLENBQW9CM00sS0FBSyxDQUFDbGUsS0FBSyxLQUN6RixFQUFBOHFCLHNCQUFBLEdBQUFKLFNBQVMsQ0FBQ0MsYUFBYSxxQkFBdkJHLHNCQUFBLENBQXlCRyxTQUFTLENBQUNqckIsS0FBSyxNQUFBK3FCLG9CQUFBLEdBQUdkLElBQUksQ0FBQ1UsYUFBYSxxQkFBbEJJLG9CQUFBLENBQW9CRSxTQUFTLENBQUNqckIsS0FBSztnQkFDakY7Z0JBQUEsR0FDRyxJQUFJOztnQkFFWDtnQkFDQSxJQUFJZ3JCLG1CQUFtQixJQUFJTixTQUFTLENBQUNDLGFBQWEsQ0FBQ3pNLEtBQUssQ0FBQ2xlLEtBQUssR0FBR2lxQixJQUFJLENBQUNVLGFBQWEsQ0FBQ3pNLEtBQUssQ0FBQ2xlLEtBQUssRUFBRTtrQkFDN0ZnckIsbUJBQW1CLEdBQUcsSUFBSTtnQkFDOUI7O2dCQUVBO2dCQUNBTixTQUFTLENBQUNRLHFCQUFxQixHQUFHO2tCQUM5QkQsU0FBUyxFQUFBanNCLE1BQUEsQ0FBQXltQixNQUFBLEtBQ0ZpRixTQUFTLENBQUNDLGFBQWEsQ0FBQ00sU0FBUztvQkFDcENqckIsS0FBSyxFQUFFMHFCLFNBQVMsQ0FBQ0MsYUFBYSxDQUFDTSxTQUFTLENBQUNqckIsS0FBSyxHQUFHaXFCLElBQUksQ0FBQ1UsYUFBYSxDQUFDTSxTQUFTLENBQUNqckI7a0JBQUssRUFDdEY7a0JBQ0RrZSxLQUFLLEVBQUFsZixNQUFBLENBQUF5bUIsTUFBQSxLQUNFaUYsU0FBUyxDQUFDQyxhQUFhLENBQUN6TSxLQUFLO29CQUNoQ2xlLEtBQUssRUFBRTBxQixTQUFTLENBQUNDLGFBQWEsQ0FBQ3pNLEtBQUssQ0FBQ2xlLEtBQUssR0FBR2lxQixJQUFJLENBQUNVLGFBQWEsQ0FBQ3pNLEtBQUssQ0FBQ2xlO2tCQUFLLEVBQzlFO2tCQUNEbXJCLGlCQUFpQixFQUFFSDtnQkFDdkIsQ0FBQztjQUNMO2NBRUEsSUFBSU4sU0FBUyxDQUFDVSxnQkFBZ0IsRUFBRTtnQkFBQSxJQUFBQyxzQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxzQkFBQTtnQkFDNUI7Z0JBQ0E7Z0JBQ0EsSUFBSUMsc0JBQXNCLEdBQUcsRUFBQUosc0JBQUEsR0FBQVgsU0FBUyxDQUFDVSxnQkFBZ0IscUJBQTFCQyxzQkFBQSxDQUE0Qm5OLEtBQUssQ0FBQ2xlLEtBQUssTUFBQXNyQixxQkFBQSxHQUFHckIsSUFBSSxDQUFDbUIsZ0JBQWdCLHFCQUFyQkUscUJBQUEsQ0FBdUJwTixLQUFLLENBQUNsZSxLQUFLLEtBQ2xHLEVBQUF1ckIsc0JBQUEsR0FBQWIsU0FBUyxDQUFDVSxnQkFBZ0IscUJBQTFCRyxzQkFBQSxDQUE0Qk4sU0FBUyxDQUFDanJCLEtBQUssTUFBQXdyQixzQkFBQSxHQUFHdkIsSUFBSSxDQUFDbUIsZ0JBQWdCLHFCQUFyQkksc0JBQUEsQ0FBdUJQLFNBQVMsQ0FBQ2pyQixLQUFLO2dCQUN2RjtnQkFBQSxHQUNHLElBQUk7O2dCQUVYO2dCQUNBLElBQUl5ckIsc0JBQXNCLElBQUlmLFNBQVMsQ0FBQ1UsZ0JBQWdCLENBQUNsTixLQUFLLENBQUNsZSxLQUFLLEdBQUdpcUIsSUFBSSxDQUFDbUIsZ0JBQWdCLENBQUNsTixLQUFLLENBQUNsZSxLQUFLLEVBQUU7a0JBQ3RHeXJCLHNCQUFzQixHQUFHLElBQUk7Z0JBQ2pDOztnQkFFQTtnQkFDQWYsU0FBUyxDQUFDZ0Isd0JBQXdCLEdBQUc7a0JBQ2pDVCxTQUFTLEVBQUFqc0IsTUFBQSxDQUFBeW1CLE1BQUEsS0FDRmlGLFNBQVMsQ0FBQ1UsZ0JBQWdCLENBQUNILFNBQVM7b0JBQ3ZDanJCLEtBQUssRUFBRTBxQixTQUFTLENBQUNVLGdCQUFnQixDQUFDSCxTQUFTLENBQUNqckIsS0FBSyxHQUFHaXFCLElBQUksQ0FBQ21CLGdCQUFnQixDQUFDSCxTQUFTLENBQUNqckI7a0JBQUssRUFDNUY7a0JBQ0RrZSxLQUFLLEVBQUFsZixNQUFBLENBQUF5bUIsTUFBQSxLQUNFaUYsU0FBUyxDQUFDVSxnQkFBZ0IsQ0FBQ2xOLEtBQUs7b0JBQ25DbGUsS0FBSyxFQUFFMHFCLFNBQVMsQ0FBQ1UsZ0JBQWdCLENBQUNsTixLQUFLLENBQUNsZSxLQUFLLEdBQUdpcUIsSUFBSSxDQUFDbUIsZ0JBQWdCLENBQUNsTixLQUFLLENBQUNsZTtrQkFBSyxFQUNwRjtrQkFDRG1yQixpQkFBaUIsRUFBRU07Z0JBQ3ZCLENBQUM7Y0FDTDtZQUNKLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ3hYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhDQUE4QyxFQUFFZ1csVUFBVSxDQUFDO1lBQUMsT0FBQUMsU0FBQSxDQUFBM3FCLENBQUEsS0FDckV5cUIsSUFBSSxFQUFBOVcsTUFBQSxDQUFLK1csVUFBVTtRQUFBO01BQUEsR0FBQVIsUUFBQTtJQUFBLENBQzlCO0lBQUEsU0E5RktGLGlCQUFpQkEsQ0FBQW1DLEdBQUEsRUFBQUMsR0FBQTtNQUFBLE9BQUFuQyxrQkFBQSxDQUFBbm9CLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0lBQUEsT0FBakJtb0IsaUJBQWlCO0VBQUE7RUFnR3ZCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTkk7RUFBQWhuQixNQUFBLENBT01xcEIsZ0JBQWdCO0VBQUE7RUFBQTtJQUFBLElBQUFDLGlCQUFBLEdBQUExcUIsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQXRCLFNBQUFzckIsU0FBdUJDLGNBQWM7TUFBQSxJQUFBQyxxQkFBQSxFQUFBeGQsT0FBQTtNQUFBLE9BQUFsTyxZQUFBLEdBQUFDLENBQUEsV0FBQTByQixTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQTN0QixDQUFBO1VBQUE7WUFBQTJ0QixTQUFBLENBQUEzdEIsQ0FBQTtZQUFBLE9BQ1QsSUFBSSxDQUFDaXNCLHNCQUFzQixDQUFDLENBQUN3QixjQUFjLENBQUMsQ0FBQztVQUFBO1lBQUFDLHFCQUFBLEdBQUFDLFNBQUEsQ0FBQTNzQixDQUFBO1lBQTlEa1AsT0FBTyxHQUFBd2QscUJBQUE7WUFBQSxPQUFBQyxTQUFBLENBQUExc0IsQ0FBQSxJQUNQaVAsT0FBTztRQUFBO01BQUEsR0FBQXNkLFFBQUE7SUFBQSxDQUNqQjtJQUFBLFNBSEtGLGdCQUFnQkEsQ0FBQU0sR0FBQTtNQUFBLE9BQUFMLGlCQUFBLENBQUF4cUIsS0FBQSxPQUFBRCxTQUFBO0lBQUE7SUFBQSxPQUFoQndxQixnQkFBZ0I7RUFBQTtFQUt0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBVkk7RUFBQXJwQixNQUFBLENBV01nb0Isc0JBQXNCO0VBQUE7RUFBQTtJQUFBLElBQUE0Qix1QkFBQSxHQUFBaHJCLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUE1QixTQUFBNHJCLFNBQTZCeEMsTUFBTTtNQUFBLElBQUF5QyxPQUFBO01BQUEsSUFBQUMsZ0JBQUEsRUFBQUMsU0FBQSxFQUFBQyxlQUFBLEVBQUFDLE1BQUEsRUFBQS90QixDQUFBO01BQUEsT0FBQTRCLFlBQUEsR0FBQUMsQ0FBQSxXQUFBbXNCLFNBQUE7UUFBQSxrQkFBQUEsU0FBQSxDQUFBcHVCLENBQUE7VUFBQTtZQUN6Qmd1QixnQkFBZ0IsR0FBRyxDQUFDO1lBQ3BCQyxTQUFTLEdBQUczQyxNQUFNLENBQUNua0IsR0FBRyxDQUFDLFVBQUFrbkIsS0FBSztjQUFBLG9CQUFlNWUsSUFBSSxDQUFDQyxTQUFTLENBQUMyZSxLQUFLLENBQUM7WUFBQSxDQUFFLENBQUM7WUFDbkVILGVBQWUsR0FBR0QsU0FBUyxDQUM1QjltQixHQUFHLENBQUMsVUFBQzVCLEdBQUcsRUFBRXNOLEtBQUs7Y0FBQSxPQUFNa2IsT0FBSSxDQUFDdFkscUJBQXFCLENBQUNsUSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUdzTixLQUFLO1lBQUEsQ0FBQyxDQUFDLENBQ3JFbEwsTUFBTSxDQUFDLFVBQUFrTCxLQUFLO2NBQUEsT0FBSUEsS0FBSyxLQUFLLElBQUk7WUFBQSxFQUFDO1lBRTlCc2IsTUFBTSxHQUFHLEVBQUU7WUFDakIsS0FBUy90QixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc4dEIsZUFBZSxDQUFDOXNCLE1BQU0sRUFBRWhCLENBQUMsSUFBSTR0QixnQkFBZ0IsRUFBRTtjQUMvREcsTUFBTSxDQUFDbGEsSUFBSSxDQUFDaWEsZUFBZSxDQUFDemIsS0FBSyxDQUFDclMsQ0FBQyxFQUFFQSxDQUFDLEdBQUc0dEIsZ0JBQWdCLENBQUMsQ0FBQztZQUMvRDtZQUFDSSxTQUFBLENBQUFwdUIsQ0FBQTtZQUFBLE9BRUsrUyx1QkFBdUIsQ0FBQ29iLE1BQU0sQ0FBQ2huQixHQUFHLENBQUMsVUFBQW1uQixZQUFZO2NBQUEsb0JBQUF6ckIsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBQUksU0FBQXFzQixTQUFBO2dCQUFBLElBQUFDLFlBQUEsRUFBQUMsV0FBQSxFQUFBN2UsU0FBQSxFQUFBUixJQUFBLEVBQUFzZixHQUFBO2dCQUFBLE9BQUExc0IsWUFBQSxHQUFBQyxDQUFBLFdBQUEwc0IsU0FBQTtrQkFBQSxrQkFBQUEsU0FBQSxDQUFBOXRCLENBQUEsR0FBQTh0QixTQUFBLENBQUEzdUIsQ0FBQTtvQkFBQTtzQkFDL0N3dUIsWUFBWSxHQUFHRixZQUFZLENBQUNubkIsR0FBRyxDQUFDLFVBQUEvRyxDQUFDO3dCQUFBLDJCQUFzQkEsQ0FBQztzQkFBQSxDQUFvQixDQUFDLENBQUMyYSxJQUFJLENBQUMsSUFBSSxDQUFDO3NCQUN4RjBULFdBQVcsR0FBR0gsWUFBWSxDQUFDbm5CLEdBQUcsQ0FBQyxVQUFBL0csQ0FBQzt3QkFBQSwrQkFDL0JBLENBQUMsdUVBQWtFQSxDQUFDO3NCQUFBLENBUTFFLENBQUMsQ0FBQzJhLElBQUksQ0FBQyxJQUFJLENBQUM7c0JBRVBuTCxTQUFTLEdBQUc7d0JBQ2QzRCxTQUFTLEVBQUU4aEIsT0FBSSxDQUFDOWhCLFNBQVM7d0JBQ3pCMmUsWUFBWSxFQUFFbUQsT0FBSSxDQUFDOVUsT0FBTyxDQUFDNFI7c0JBQy9CLENBQUM7c0JBQ0R5RCxZQUFZLENBQUN4USxPQUFPLENBQUMsVUFBQTFkLENBQUMsRUFBSTt3QkFDdEJ3UCxTQUFTLG9CQUFrQnhQLENBQUMsQ0FBRyxHQUFHa3JCLE1BQU0sQ0FBQ2xyQixDQUFDLENBQUM7c0JBQy9DLENBQUMsQ0FBQztzQkFBQ3V1QixTQUFBLENBQUE5dEIsQ0FBQTtzQkFBQTh0QixTQUFBLENBQUEzdUIsQ0FBQTtzQkFBQSxPQUdvQitELENBQUMsQ0FBQ3dMLElBQUksQ0FBQzt3QkFDdEI3QixHQUFHLEVBQUUsVUFBVTt3QkFDZjhCLE1BQU0sRUFBRSxNQUFNO3dCQUNkd0ssV0FBVyxFQUFFLGtCQUFrQjt3QkFDL0JuSyxPQUFPLEVBQUU7MEJBQ0wsY0FBYyxFQUFFLGtCQUFrQjswQkFDbENDLGFBQWEsY0FBWWllLE9BQUksQ0FBQzlVLE9BQU8sQ0FBQy9NO3dCQUMxQyxDQUFDO3dCQUNENkQsU0FBUyxFQUFFOzBCQUNQQyxlQUFlLEVBQUU7d0JBQ3JCLENBQUM7d0JBQ0RwTCxJQUFJLEVBQUU2SyxJQUFJLENBQUNDLFNBQVMsQ0FBQzswQkFDakJDLEtBQUssNEZBQ3dENmUsWUFBWSx5RkFFM0RDLFdBQVcsdXZCQWtCeEI7MEJBQ0Q3ZSxTQUFTLEVBQVRBO3dCQUNKLENBQUM7c0JBQ0wsQ0FBQyxDQUFDO29CQUFBO3NCQXBDSVIsSUFBSSxHQUFBdWYsU0FBQSxDQUFBM3RCLENBQUE7c0JBc0NWc3RCLFlBQVksQ0FBQ3hRLE9BQU8sQ0FBQyxVQUFBMWQsQ0FBQyxFQUFJO3dCQUFBLElBQUF3dUIsVUFBQTt3QkFDdEIsSUFBTTlhLE1BQU0sSUFBQThhLFVBQUEsR0FBR3hmLElBQUksQ0FBQ3hLLElBQUksY0FBQWdxQixVQUFBLEdBQVRBLFVBQUEsQ0FBVzNlLElBQUkscUJBQWYyZSxVQUFBLE9BQXNCeHVCLENBQUMsQ0FBRzt3QkFDekMydEIsT0FBSSxDQUFDdFkscUJBQXFCLENBQUN3WSxTQUFTLENBQUM3dEIsQ0FBQyxDQUFDLENBQUMsR0FBRzBULE1BQU07c0JBQ3JELENBQUMsQ0FBQztzQkFBQzZhLFNBQUEsQ0FBQTN1QixDQUFBO3NCQUFBO29CQUFBO3NCQUFBMnVCLFNBQUEsQ0FBQTl0QixDQUFBO3NCQUFBNnRCLEdBQUEsR0FBQUMsU0FBQSxDQUFBM3RCLENBQUE7c0JBRUg7c0JBQ0E7c0JBQ0Erc0IsT0FBSSxDQUFDclksT0FBTyxDQUFDQyxHQUFHLENBQUMsd0RBQXdELEVBQUErWSxHQUFLLENBQUM7b0JBQUM7c0JBQUEsT0FBQUMsU0FBQSxDQUFBMXRCLENBQUE7a0JBQUE7Z0JBQUEsR0FBQXN0QixRQUFBO2NBQUEsQ0FFdkY7WUFBQSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQUE7WUFBQSxPQUFBSCxTQUFBLENBQUFudEIsQ0FBQSxJQUVDZ3RCLFNBQVMsQ0FBQzltQixHQUFHLENBQUMsVUFBQTVCLEdBQUc7Y0FBQSxPQUFJd29CLE9BQUksQ0FBQ3RZLHFCQUFxQixDQUFDbFEsR0FBRyxDQUFDO1lBQUEsRUFBQztRQUFBO01BQUEsR0FBQXVvQixRQUFBO0lBQUEsQ0FDL0Q7SUFBQSxTQXBGSzdCLHNCQUFzQkEsQ0FBQTRDLEdBQUE7TUFBQSxPQUFBaEIsdUJBQUEsQ0FBQTlxQixLQUFBLE9BQUFELFNBQUE7SUFBQTtJQUFBLE9BQXRCbXBCLHNCQUFzQjtFQUFBO0VBc0Y1QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFSSTtFQUFBaG9CLE1BQUEsQ0FTQTRqQixrQkFBa0IsR0FBbEIsU0FBQUEsa0JBQWtCQSxDQUFDL0ksc0JBQXNCLEVBQUV3RixvQkFBb0IsRUFBRU8sUUFBUSxFQUFFQyxlQUFlLEVBQUU5RixhQUFhLEVBQUU7SUFBQSxJQUFBOFAsT0FBQTtJQUN2RztJQUNBcnVCLE1BQU0sQ0FBQzZrQixPQUFPLENBQUNULFFBQVEsQ0FBQyxDQUFDL0csT0FBTyxDQUFDLFVBQUFpUixNQUFBLEVBQTRDO01BQUEsSUFBMUNsTSxRQUFRLEdBQUFrTSxNQUFBO1FBQUFDLE9BQUEsR0FBQUQsTUFBQTtRQUFJNUgsT0FBTyxHQUFBNkgsT0FBQSxDQUFQN0gsT0FBTztRQUFFQyxhQUFhLEdBQUE0SCxPQUFBLENBQWI1SCxhQUFhO01BQ2pFLElBQUksQ0FBQ3BJLGFBQWEsQ0FBQy9VLFFBQVEsQ0FBQy9FLE1BQU0sQ0FBQzJkLFFBQVEsQ0FBQyxDQUFDLEVBQUU7TUFFL0MsSUFBTXdGLE9BQU8sR0FBR3ZKLHNCQUFzQixDQUFDMWEsSUFBSSxtQ0FBZ0N5ZSxRQUFRLFFBQUksQ0FBQztNQUV4RixJQUFJc0UsT0FBTyxFQUFFO1FBQ1QsSUFBTWhDLFFBQVEsR0FBR3BoQixDQUFDLENBQUMrcUIsT0FBSSxDQUFDL1oscUJBQXFCLENBQUM5QyxPQUFPLENBQUMsYUFBYSxFQUFFa1YsT0FBTyxDQUFDLENBQUMsQ0FDekUxZ0IsSUFBSSxDQUFDLHNDQUFzQyxFQUFFb2MsUUFBUSxDQUFDO1FBRTNEd0YsT0FBTyxDQUFDamtCLElBQUksOENBQTJDeWUsUUFBUSxRQUFJLENBQUMsQ0FBQzFjLE1BQU0sQ0FBQyxDQUFDO1FBRTdFLElBQU04b0IsTUFBTSxHQUFHNUcsT0FBTyxDQUFDamtCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQ29LLEtBQUssQ0FBQyxDQUFDO1FBRTVDLElBQUl5Z0IsTUFBTSxDQUFDN3RCLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDbkI2dEIsTUFBTSxDQUFDQyxLQUFLLENBQUMvSixRQUFRLENBQUM7UUFDMUIsQ0FBQyxNQUFNO1VBQ0hrRCxPQUFPLENBQUM4RyxPQUFPLENBQUNoSyxRQUFRLENBQUM7UUFDN0I7TUFDSjtNQUVBMWtCLE1BQU0sQ0FBQzZrQixPQUFPLENBQUM4QixhQUFhLENBQUMsQ0FBQ3RKLE9BQU8sQ0FBQyxVQUFBc1IsTUFBQSxFQUE2QjtRQUFBLElBQTNCck0sT0FBTyxHQUFBcU0sTUFBQTtVQUFFQyxZQUFZLEdBQUFELE1BQUE7UUFDekQsSUFBTUUsTUFBTSxHQUFHakgsT0FBTyxDQUFDamtCLElBQUksc0NBQW1DMmUsT0FBTyxRQUFJLENBQUM7UUFDMUUsSUFBTW9DLFFBQVEsR0FBR3BoQixDQUFDLENBQUMrcUIsT0FBSSxDQUFDOVosMEJBQTBCLENBQUMvQyxPQUFPLENBQUMsYUFBYSxFQUFFb2QsWUFBWSxDQUFDLENBQUMsQ0FDbkY1b0IsSUFBSSxDQUFDLHNDQUFzQyxFQUFLb2MsUUFBUSxTQUFJRSxPQUFTLENBQUM7UUFFM0VzRixPQUFPLENBQUNqa0IsSUFBSSw4Q0FBMkN5ZSxRQUFRLFNBQUlFLE9BQU8sUUFBSSxDQUFDLENBQUM1YyxNQUFNLENBQUMsQ0FBQztRQUN4Rm1wQixNQUFNLENBQUNKLEtBQUssQ0FBQy9KLFFBQVEsQ0FBQztNQUMxQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7O0lBRUY7SUFDQTtJQUNBLElBQUluRyxhQUFhLENBQUM1ZCxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQzVCLElBQU0rakIsUUFBUSxHQUFHckcsc0JBQXNCLENBQUMxYSxJQUFJLDhDQUEyQzRhLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBSSxDQUFDO01BQzVHc0Ysb0JBQW9CLENBQUNiLE1BQU0sQ0FBQzBCLFFBQVEsQ0FBQztJQUN6Qzs7SUFFQTtJQUNBMWtCLE1BQU0sQ0FBQzZrQixPQUFPLENBQUNSLGVBQWUsQ0FBQyxDQUMxQm5kLE1BQU0sQ0FBQyxVQUFBNG5CLE1BQUE7TUFBQSxJQUFFMU0sUUFBUSxHQUFBME0sTUFBQTtNQUFBLE9BQU12USxhQUFhLENBQUMvVSxRQUFRLENBQUMvRSxNQUFNLENBQUMyZCxRQUFRLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDaEUvRSxPQUFPLENBQUMsVUFBQTBSLE1BQUEsRUFBc0M7TUFBQSxJQUFwQzNNLFFBQVEsR0FBQTJNLE1BQUE7UUFBRW5JLG9CQUFvQixHQUFBbUksTUFBQTtNQUNyQyxJQUFNbkgsT0FBTyxHQUFHdkosc0JBQXNCLENBQUMxYSxJQUFJLG1DQUFnQ3llLFFBQVEsUUFBSSxDQUFDO01BRXhGcGlCLE1BQU0sQ0FBQzZrQixPQUFPLENBQUMrQixvQkFBb0IsQ0FBQyxDQUFDdkosT0FBTyxDQUFDLFVBQUEyUixNQUFBLEVBQW9DO1FBQUEsSUFBbEMxTSxPQUFPLEdBQUEwTSxNQUFBO1VBQUVDLG1CQUFtQixHQUFBRCxNQUFBO1FBQ3ZFLElBQU1ILE1BQU0sR0FBR2pILE9BQU8sQ0FBQ2prQixJQUFJLHNDQUFtQzJlLE9BQU8sUUFBSSxDQUFDO1FBQzFFLElBQU00TSxlQUFlLEdBQUc1ckIsQ0FBQyxDQUFDK3FCLE9BQUksQ0FBQzdaLGlDQUFpQyxDQUFDaEQsT0FBTyxDQUFDLGFBQWEsRUFBRXlkLG1CQUFtQixDQUFDLENBQUMsQ0FDeEdqcEIsSUFBSSxDQUFDLDhDQUE4QyxFQUFLb2MsUUFBUSxTQUFJRSxPQUFTLENBQUM7UUFFbkZ1TSxNQUFNLENBQUNsckIsSUFBSSxzREFBbUR5ZSxRQUFRLFNBQUlFLE9BQU8sUUFBSSxDQUFDLENBQUM1YyxNQUFNLENBQUMsQ0FBQztRQUMvRm1wQixNQUFNLENBQUM3TCxNQUFNLENBQUNrTSxlQUFlLENBQUM7TUFDbEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ1YsQ0FBQztFQUFBMXJCLE1BQUEsQ0FFRHlTLDBCQUEwQixHQUExQixTQUFBQSwwQkFBMEJBLENBQUEsRUFBRztJQUFBLElBQUFrWixPQUFBO0lBQ3pCLElBQU1sUyxpQkFBaUIsR0FBRyxJQUFJLENBQUM3UixNQUFNLENBQUN6SCxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQ29LLEtBQUssQ0FBQyxDQUFDO0lBRWxGLElBQUksQ0FBQ2tQLGlCQUFpQixDQUFDdGMsTUFBTSxFQUFFO01BQzNCO0lBQ0o7SUFFQXNjLGlCQUFpQixDQUFDdFosSUFBSSxDQUFDLHdGQUF3RixDQUFDLENBQUMrQixNQUFNLENBQUMsQ0FBQztJQUV6SCxJQUFJLENBQUMsSUFBSSxDQUFDNlEsY0FBYyxDQUFDNVYsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDbVAsWUFBWSxDQUFDblAsTUFBTSxFQUFFO01BQzFEO0lBQ0o7SUFFQSxJQUFNeXVCLFNBQVMsR0FBR25TLGlCQUFpQixDQUFDdFosSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQ2xFK0MsR0FBRyxDQUFDLFVBQUMyb0IsTUFBTSxFQUFFM1IsRUFBRTtNQUFBLE9BQUtqWixNQUFNLENBQUNuQixDQUFDLENBQUNvYSxFQUFFLENBQUMsQ0FBQ3ZaLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQUEsRUFBQyxDQUMvRCtCLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBTWtlLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDbkIsSUFBTUMsZUFBZSxHQUFHLENBQUMsQ0FBQztJQUUxQixJQUFJLENBQUM5TixjQUFjLENBQ2RyUCxNQUFNLENBQUMsVUFBQW9vQixNQUFBO01BQUEsSUFBR2pOLEVBQUUsR0FBQWlOLE1BQUEsQ0FBRmpOLEVBQUU7TUFBQSxPQUFPK00sU0FBUyxDQUFDNWxCLFFBQVEsQ0FBQzZZLEVBQUUsQ0FBQztJQUFBLEVBQUMsQ0FDMUNoRixPQUFPLENBQUMsVUFBQTBILE1BQU0sRUFBSTtNQUNmb0ssT0FBSSxDQUFDcmYsWUFBWSxDQUFDdU4sT0FBTyxDQUFDLFVBQUEwSSxXQUFXLEVBQUk7UUFDckMsSUFBTU0sWUFBWSxHQUFHOEksT0FBSSxDQUFDN0ksdUJBQXVCLENBQUM7VUFBRVAsV0FBVyxFQUFYQSxXQUFXO1VBQUVoQixNQUFNLEVBQU5BO1FBQU8sQ0FBQyxDQUFDO1FBQzFFLElBQUlzQixZQUFZLEVBQUU7VUFBQSxJQUFBa0osb0JBQUEsRUFBQUMsb0JBQUE7VUFDZHBMLFFBQVEsQ0FBQ1csTUFBTSxDQUFDMUMsRUFBRSxDQUFDLEdBQUdyaUIsTUFBTSxDQUFDeW1CLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXJDLFFBQVEsQ0FBQ1csTUFBTSxDQUFDMUMsRUFBRSxDQUFDLEVBQUU7WUFDekRxRSxPQUFPLEVBQUVMLFlBQVksQ0FBQ0ssT0FBTyxNQUFBNkksb0JBQUEsR0FBSW5MLFFBQVEsQ0FBQ1csTUFBTSxDQUFDMUMsRUFBRSxDQUFDLHFCQUFuQmtOLG9CQUFBLENBQXFCN0ksT0FBTztZQUM3REMsYUFBYSxFQUFFM21CLE1BQU0sQ0FBQ3ltQixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUErSSxvQkFBQSxHQUFFcEwsUUFBUSxDQUFDVyxNQUFNLENBQUMxQyxFQUFFLENBQUMscUJBQW5CbU4sb0JBQUEsQ0FBcUI3SSxhQUFhLEVBQUVOLFlBQVksQ0FBQ00sYUFBYTtVQUNuRyxDQUFDLENBQUM7UUFDTjtRQUVBLElBQU1DLG9CQUFvQixHQUFHdUksT0FBSSxDQUFDdEksOEJBQThCLENBQUM7VUFBRWQsV0FBVyxFQUFYQSxXQUFXO1VBQUVoQixNQUFNLEVBQU5BO1FBQU8sQ0FBQyxDQUFDO1FBQ3pGLElBQUk2QixvQkFBb0IsRUFBRTtVQUN0QnZDLGVBQWUsQ0FBQ1UsTUFBTSxDQUFDMUMsRUFBRSxDQUFDLEdBQUdyaUIsTUFBTSxDQUFDeW1CLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXBDLGVBQWUsQ0FBQ1UsTUFBTSxDQUFDMUMsRUFBRSxDQUFDLEVBQUV1RSxvQkFBb0IsQ0FBQztRQUNwRztNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVOLElBQUksQ0FBQzZJLHdCQUF3QixDQUFDeFMsaUJBQWlCLEVBQUVtSCxRQUFRLEVBQUVDLGVBQWUsQ0FBQztFQUMvRSxDQUFDO0VBQUE3Z0IsTUFBQSxDQUVEMFMsa0JBQWtCLEdBQWxCLFNBQUFBLGtCQUFrQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQXdaLE9BQUE7SUFDakIsSUFBTUMsTUFBTSxHQUFHLGtCQUFrQjs7SUFFakM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFNQyxjQUFjLEdBQUc7TUFDbkIsUUFBUSxFQUFFO01BQ1Y7TUFDQTtJQUNKLENBQUM7O0lBRUQ7SUFDQSxJQUFJLENBQUN4a0IsTUFBTSxDQUFDekgsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUMrQixNQUFNLENBQUMsQ0FBQzs7SUFFdEQ7SUFDQSxJQUFNbXFCLGdCQUFnQixHQUFBN3ZCLE1BQUEsQ0FBQXltQixNQUFBLEtBQVFtSixjQUFjLENBQUU7SUFFOUMsSUFBSSxDQUFDOWYsWUFBWSxDQUFDdU4sT0FBTyxDQUFDLFVBQUF5UyxNQUFBLEVBQXFCO01BQUEsSUFBbEIxcEIsSUFBSSxHQUFBMHBCLE1BQUEsQ0FBSjFwQixJQUFJO1FBQUVwRixLQUFLLEdBQUE4dUIsTUFBQSxDQUFMOXVCLEtBQUs7TUFDcEMsSUFBSSxDQUFDb0YsSUFBSSxDQUFDMnBCLFVBQVUsQ0FBQ0osTUFBTSxDQUFDLEVBQUU7UUFDMUI7TUFDSjtNQUVBLElBQU1LLFFBQVEsR0FBRzVwQixJQUFJLENBQUM0TCxLQUFLLENBQUMyZCxNQUFNLENBQUNodkIsTUFBTSxDQUFDLENBQUN1bkIsSUFBSSxDQUFDLENBQUM7TUFFakQsSUFBSThILFFBQVEsSUFBSWh2QixLQUFLLEVBQUU7UUFDbkI2dUIsZ0JBQWdCLENBQUNHLFFBQVEsQ0FBQyxHQUFHaHZCLEtBQUs7TUFDdEM7SUFDSixDQUFDLENBQUM7SUFFRmhCLE1BQU0sQ0FBQzZrQixPQUFPLENBQUNnTCxnQkFBZ0IsQ0FBQyxDQUFDeFMsT0FBTyxDQUFDLFVBQUE0UyxNQUFBLEVBQTZCO01BQUEsSUFBM0JELFFBQVEsR0FBQUMsTUFBQTtRQUFFQyxXQUFXLEdBQUFELE1BQUE7TUFDNUQsSUFBTUUsR0FBRyxHQUFHVCxPQUFJLENBQUN0a0IsTUFBTSxDQUFDekgsSUFBSSx3QkFBcUJxc0IsUUFBUSxRQUFJLENBQUMsQ0FBQ2ppQixLQUFLLENBQUMsQ0FBQztNQUV0RSxJQUFJLENBQUNvaUIsR0FBRyxDQUFDeHZCLE1BQU0sRUFBRTtRQUNiO01BQ0o7TUFFQSxJQUFNK2pCLFFBQVEsR0FBR3BoQixDQUFDLENBQUNvc0IsT0FBSSxDQUFDcGIscUJBQXFCLENBQUM5QyxPQUFPLENBQUMsYUFBYSxFQUFFMGUsV0FBVyxDQUFDLENBQUMsQ0FDN0VscUIsSUFBSSxDQUFDLHlCQUF5QixFQUFFZ3FCLFFBQVEsQ0FBQztNQUU5Q0csR0FBRyxDQUFDbk4sTUFBTSxDQUFDMEIsUUFBUSxDQUFDO0lBQ3hCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQWxoQixNQUFBLENBRURpc0Isd0JBQXdCLEdBQXhCLFNBQUFBLHdCQUF3QkEsQ0FBQ3hTLGlCQUFpQixFQUFFbUgsUUFBUSxFQUFFQyxlQUFlLEVBQUU7SUFBQSxJQUFBK0wsT0FBQTtJQUNuRXB3QixNQUFNLENBQUM2a0IsT0FBTyxDQUFDVCxRQUFRLENBQUMsQ0FBQy9HLE9BQU8sQ0FBQyxVQUFBZ1QsTUFBQSxFQUFpRDtNQUFBLElBQS9Dak8sUUFBUSxHQUFBaU8sTUFBQTtRQUFBQyxPQUFBLEdBQUFELE1BQUE7UUFBSTNKLE9BQU8sR0FBQTRKLE9BQUEsQ0FBUDVKLE9BQU87UUFBQTZKLHFCQUFBLEdBQUFELE9BQUEsQ0FBRTNKLGFBQWE7UUFBYkEsYUFBYSxHQUFBNEoscUJBQUEsY0FBRyxDQUFDLENBQUMsR0FBQUEscUJBQUE7TUFDdEUsSUFBTTNJLE9BQU8sR0FBRzNLLGlCQUFpQixDQUFDdFosSUFBSSxtQ0FBZ0N5ZSxRQUFRLFFBQUksQ0FBQztNQUVuRixJQUFJLENBQUN3RixPQUFPLENBQUNqbkIsTUFBTSxFQUFFO1FBQ2pCO01BQ0o7TUFFQSxJQUFJK2xCLE9BQU8sRUFBRTtRQUNULElBQU1oQyxRQUFRLEdBQUdwaEIsQ0FBQyxDQUFDOHNCLE9BQUksQ0FBQzliLHFCQUFxQixDQUFDOUMsT0FBTyxDQUFDLGFBQWEsRUFBRWtWLE9BQU8sQ0FBQyxDQUFDLENBQ3pFMWdCLElBQUksQ0FBQyxzQ0FBc0MsRUFBRW9jLFFBQVEsQ0FBQztRQUMzRCxJQUFNb00sTUFBTSxHQUFHNUcsT0FBTyxDQUFDamtCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQ29LLEtBQUssQ0FBQyxDQUFDO1FBRTVDLElBQUl5Z0IsTUFBTSxDQUFDN3RCLE1BQU0sR0FBRyxDQUFDLEVBQUU7VUFDbkI2dEIsTUFBTSxDQUFDeEwsTUFBTSxDQUFDMEIsUUFBUSxDQUFDO1FBQzNCLENBQUMsTUFBTTtVQUNIa0QsT0FBTyxDQUFDOEcsT0FBTyxDQUFDaEssUUFBUSxDQUFDO1FBQzdCO01BQ0o7TUFFQTFrQixNQUFNLENBQUM2a0IsT0FBTyxDQUFDOEIsYUFBYSxDQUFDLENBQUN0SixPQUFPLENBQUMsVUFBQW1ULE1BQUEsRUFBNkI7UUFBQSxJQUEzQmxPLE9BQU8sR0FBQWtPLE1BQUE7VUFBRTVCLFlBQVksR0FBQTRCLE1BQUE7UUFDekQsSUFBTTNCLE1BQU0sR0FBR2pILE9BQU8sQ0FBQ2prQixJQUFJLHNDQUFtQzJlLE9BQU8sUUFBSSxDQUFDLENBQUN2VSxLQUFLLENBQUMsQ0FBQztRQUVsRixJQUFJLENBQUM4Z0IsTUFBTSxDQUFDbHVCLE1BQU0sRUFBRTtVQUNoQjtRQUNKO1FBRUEsSUFBTStqQixRQUFRLEdBQUdwaEIsQ0FBQyxDQUFDOHNCLE9BQUksQ0FBQzdiLDBCQUEwQixDQUFDL0MsT0FBTyxDQUFDLGFBQWEsRUFBRW9kLFlBQVksQ0FBQyxDQUFDLENBQ25GNW9CLElBQUksQ0FBQyxzQ0FBc0MsRUFBS29jLFFBQVEsU0FBSUUsT0FBUyxDQUFDO1FBRTNFLElBQUl1TSxNQUFNLENBQUM5cEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1VBQ3JCLElBQUk4cEIsTUFBTSxDQUFDOXBCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4QixJQUFNMGdCLE9BQU8sR0FBR21DLE9BQU8sQ0FBQ2prQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUNvSyxLQUFLLENBQUMsQ0FBQztZQUU5QyxJQUFJMFgsT0FBTyxDQUFDOWtCLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDcEI4a0IsT0FBTyxDQUFDZ0osS0FBSyxDQUFDL0osUUFBUSxDQUFDO1lBQzNCLENBQUMsTUFBTTtjQUNIa0QsT0FBTyxDQUFDNUUsTUFBTSxDQUFDMEIsUUFBUSxDQUFDO1lBQzVCO1VBQ0o7UUFDSixDQUFDLE1BQU07VUFDSG1LLE1BQU0sQ0FBQ0osS0FBSyxDQUFDL0osUUFBUSxDQUFDO1FBQzFCO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBRUYxa0IsTUFBTSxDQUFDNmtCLE9BQU8sQ0FBQ1IsZUFBZSxDQUFDLENBQUNoSCxPQUFPLENBQUMsVUFBQW9ULE1BQUEsRUFBc0M7TUFBQSxJQUFwQ3JPLFFBQVEsR0FBQXFPLE1BQUE7UUFBRTdKLG9CQUFvQixHQUFBNkosTUFBQTtNQUNwRSxJQUFNN0ksT0FBTyxHQUFHM0ssaUJBQWlCLENBQUN0WixJQUFJLG1DQUFnQ3llLFFBQVEsUUFBSSxDQUFDO01BRW5GLElBQUksQ0FBQ3dGLE9BQU8sQ0FBQ2puQixNQUFNLEVBQUU7UUFDakI7TUFDSjtNQUVBWCxNQUFNLENBQUM2a0IsT0FBTyxDQUFDK0Isb0JBQW9CLENBQUMsQ0FBQ3ZKLE9BQU8sQ0FBQyxVQUFBcVQsTUFBQSxFQUFvQztRQUFBLElBQWxDcE8sT0FBTyxHQUFBb08sTUFBQTtVQUFFekIsbUJBQW1CLEdBQUF5QixNQUFBO1FBQ3ZFLElBQU03QixNQUFNLEdBQUdqSCxPQUFPLENBQUNqa0IsSUFBSSxzQ0FBbUMyZSxPQUFPLFFBQUksQ0FBQyxDQUFDdlUsS0FBSyxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDOGdCLE1BQU0sQ0FBQ2x1QixNQUFNLEVBQUU7VUFDaEI7UUFDSjtRQUVBLElBQU11dUIsZUFBZSxHQUFHNXJCLENBQUMsQ0FBQzhzQixPQUFJLENBQUM1YixpQ0FBaUMsQ0FBQ2hELE9BQU8sQ0FBQyxhQUFhLEVBQUV5ZCxtQkFBbUIsQ0FBQyxDQUFDLENBQ3hHanBCLElBQUksQ0FBQyw4Q0FBOEMsRUFBS29jLFFBQVEsU0FBSUUsT0FBUyxDQUFDO1FBRW5GLElBQUl1TSxNQUFNLENBQUM5cEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1VBQ3JCLElBQUk4cEIsTUFBTSxDQUFDOXBCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4QixJQUFNMGdCLE9BQU8sR0FBR21DLE9BQU8sQ0FBQ2prQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUNvSyxLQUFLLENBQUMsQ0FBQztZQUU5QyxJQUFJMFgsT0FBTyxDQUFDOWtCLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDcEI4a0IsT0FBTyxDQUFDZ0osS0FBSyxDQUFDUyxlQUFlLENBQUM7WUFDbEMsQ0FBQyxNQUFNO2NBQ0h0SCxPQUFPLENBQUM1RSxNQUFNLENBQUNrTSxlQUFlLENBQUM7WUFDbkM7VUFDSjtRQUNKLENBQUMsTUFBTTtVQUNITCxNQUFNLENBQUM3TCxNQUFNLENBQUNrTSxlQUFlLENBQUM7UUFDbEM7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZJO0VBQUExckIsTUFBQSxDQWdCQTZqQiwyQkFBMkIsR0FBM0IsU0FBQUEsMkJBQTJCQSxDQUFDOUksYUFBYSxFQUFFRixzQkFBc0IsRUFBRXlFLHVCQUF1QixFQUFFO0lBQ3hGLElBQU02TixZQUFZLEdBQUcsSUFBSSxDQUFDcGEsY0FBYyxDQUFDclAsTUFBTSxDQUFDLFVBQUEwcEIsTUFBQTtNQUFBLElBQUd2TyxFQUFFLEdBQUF1TyxNQUFBLENBQUZ2TyxFQUFFO01BQUEsT0FBTzlELGFBQWEsQ0FBQy9VLFFBQVEsQ0FBQzZZLEVBQUUsQ0FBQztJQUFBLEVBQUM7O0lBRXZGO0FBQ1I7QUFDQTtJQUNRLElBQU13TyxjQUFjLEdBQUdGLFlBQVksQ0FDOUJ6cEIsTUFBTSxDQUFDLFVBQUE0cEIsTUFBQTtNQUFBLElBQUdDLE9BQU8sR0FBQUQsTUFBQSxDQUFQQyxPQUFPO1FBQUVDLGFBQWEsR0FBQUYsTUFBQSxDQUFiRSxhQUFhO1FBQUU5TyxNQUFNLEdBQUE0TyxNQUFBLENBQU41TyxNQUFNO01BQUEsT0FDckM2TyxPQUFPLElBQ1BDLGFBQWEsS0FBS0EsYUFBYSxDQUFDQyxHQUFHLElBQUlELGFBQWEsQ0FBQ0UsS0FBSyxJQUFJRixhQUFhLENBQUNHLElBQUksQ0FBQyxLQUNqRmpQLE1BQU0sb0JBQU5BLE1BQU0sQ0FBRXZlLElBQUksQ0FBQyxVQUFBeXRCLE1BQUE7UUFBQSxJQUFHQyxRQUFRLEdBQUFELE1BQUEsQ0FBUkMsUUFBUTtRQUFBLE9BQU9BLFFBQVE7TUFBQSxFQUFDO0lBQUEsRUFBQzs7SUFFakQ7QUFDUjtBQUNBO0lBQ1EsSUFBTUMsZUFBZSxHQUFHWCxZQUFZLENBQy9CenBCLE1BQU0sQ0FBQyxVQUFBcXFCLE1BQUE7TUFBQSxJQUFHQyxPQUFPLEdBQUFELE1BQUEsQ0FBUEMsT0FBTztRQUFFeHdCLEtBQUssR0FBQXV3QixNQUFBLENBQUx2d0IsS0FBSztNQUFBLE9BQU93d0IsT0FBTyxJQUFJeHdCLEtBQUs7SUFBQSxFQUFDOztJQUVyRDtBQUNSO0FBQ0E7SUFDUSxJQUFNeXdCLFdBQVcsR0FBR2QsWUFBWSxDQUMzQnpwQixNQUFNLENBQUMsVUFBQXdxQixNQUFBO01BQUEsSUFBR0MsT0FBTyxHQUFBRCxNQUFBLENBQVBDLE9BQU87TUFBQSxPQUFPQSxPQUFPLEtBQUssWUFBWTtJQUFBLEVBQUM7O0lBRXREO0FBQ1I7QUFDQTtJQUNRLElBQU1DLFdBQVcsR0FBR2pCLFlBQVksQ0FDM0J6cEIsTUFBTSxDQUFDLFVBQUEycUIsTUFBQTtNQUFBLElBQUdGLE9BQU8sR0FBQUUsTUFBQSxDQUFQRixPQUFPO01BQUEsT0FBT0EsT0FBTyxLQUFLLE1BQU07SUFBQSxFQUFDOztJQUVoRDtBQUNSO0FBQ0E7SUFDUSxJQUFNRyxlQUFlLEdBQUduQixZQUFZLENBQy9CenBCLE1BQU0sQ0FBQyxVQUFBNnFCLE1BQUE7TUFBQSxJQUFHdk0sUUFBUSxHQUFBdU0sTUFBQSxDQUFSdk0sUUFBUTtRQUFFbU0sT0FBTyxHQUFBSSxNQUFBLENBQVBKLE9BQU87TUFBQSxPQUFPLENBQUNuTSxRQUFRLElBQUltTSxPQUFPLEtBQUssWUFBWTtJQUFBLEVBQUM7O0lBRTdFO0FBQ1I7QUFDQTtJQUNRLElBQU1LLFdBQVcsR0FBR3JCLFlBQVksQ0FDM0J6cEIsTUFBTSxDQUFDLFVBQUErcUIsTUFBQTtNQUFBLElBQUdOLE9BQU8sR0FBQU0sTUFBQSxDQUFQTixPQUFPO01BQUEsT0FBT0EsT0FBTyxLQUFLLFlBQVksSUFBSUEsT0FBTyxLQUFLLFVBQVUsSUFBSUEsT0FBTyxLQUFLLGVBQWU7SUFBQSxFQUFDO0lBRS9HLElBQUlwVCxhQUFhLENBQUM1ZCxNQUFNLEdBQUcsQ0FBQyxJQUNyQmt3QixjQUFjLENBQUNsd0IsTUFBTSxHQUFHLENBQUMsSUFBSTJ3QixlQUFlLENBQUMzd0IsTUFBTSxHQUFHLENBQUMsSUFBSTh3QixXQUFXLENBQUM5d0IsTUFBTSxHQUFHLENBQUMsSUFDakZpeEIsV0FBVyxDQUFDanhCLE1BQU0sR0FBRyxDQUFDLElBQUlteEIsZUFBZSxDQUFDbnhCLE1BQU0sR0FBRyxDQUFDLElBQUlxeEIsV0FBVyxDQUFDcnhCLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDbkY7TUFDQW1pQix1QkFBdUIsQ0FBQzVhLElBQUksQ0FBQyxDQUFDOztNQUU5QjtNQUNBLElBQUksQ0FBQ2lXLHlCQUF5QixHQUFHLElBQUk7O01BRXJDO01BQ0EwUyxjQUFjLENBQUN4VCxPQUFPLENBQUMsVUFBQTZVLE1BQUEsRUFFakI7UUFBQSxJQUFBQyxZQUFBO1FBQUEsSUFERjlQLEVBQUUsR0FBQTZQLE1BQUEsQ0FBRjdQLEVBQUU7VUFBRTBPLE9BQU8sR0FBQW1CLE1BQUEsQ0FBUG5CLE9BQU87VUFBRUMsYUFBYSxHQUFBa0IsTUFBQSxDQUFibEIsYUFBYTtVQUFFOU8sTUFBTSxHQUFBZ1EsTUFBQSxDQUFOaFEsTUFBTTtRQUVsQyxJQUFNSSxPQUFPLEdBQUdKLE1BQU0sYUFBQWlRLFlBQUEsR0FBTmpRLE1BQU0sQ0FBRXZlLElBQUksQ0FBQyxVQUFBeXVCLE1BQUE7VUFBQSxJQUFHZixRQUFRLEdBQUFlLE1BQUEsQ0FBUmYsUUFBUTtVQUFBLE9BQU9BLFFBQVE7UUFBQSxFQUFDLHFCQUF4Q2MsWUFBQSxDQUEwQzlQLEVBQUU7UUFDNUQsSUFBSUMsT0FBTyxFQUFFO1VBQ1RqRSxzQkFBc0IsQ0FBQzFhLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQ3VELE1BQU0sd0JBQXFCbWIsRUFBRSxTQUFLLENBQUMsQ0FBQy9NLEdBQUcsQ0FBQ2dOLE9BQU8sQ0FBQztVQUN0RmpFLHNCQUFzQixDQUFDMWEsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUN1RCxNQUFNLHdCQUFxQm1iLEVBQUUscUJBQWNDLE9BQU8sUUFBSSxDQUFDLENBQUNwTCxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztRQUNwSSxDQUFDLE1BQU0sSUFBSTZaLE9BQU8sRUFBRTtVQUNoQjFTLHNCQUFzQixDQUFDMWEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUN1RCxNQUFNLHdCQUFxQm1iLEVBQUUsU0FBSyxDQUFDLENBQUMvTSxHQUFHLENBQUN5YixPQUFPLENBQUM7UUFDbkcsQ0FBQyxNQUFNLElBQUlDLGFBQWEsRUFBRTtVQUN0QixJQUFJQSxhQUFhLENBQUNDLEdBQUcsRUFBRTtZQUNuQjVTLHNCQUFzQixDQUFDMWEsSUFBSSw4QkFBMkIwZSxFQUFFLGNBQVUsQ0FBQyxDQUFDL00sR0FBRyxDQUFDMGIsYUFBYSxDQUFDQyxHQUFHLENBQUM7VUFDOUY7VUFDQSxJQUFJRCxhQUFhLENBQUNFLEtBQUssRUFBRTtZQUNyQjdTLHNCQUFzQixDQUFDMWEsSUFBSSw4QkFBMkIwZSxFQUFFLGdCQUFZLENBQUMsQ0FBQy9NLEdBQUcsQ0FBQzBiLGFBQWEsQ0FBQ0UsS0FBSyxDQUFDO1VBQ2xHO1VBQ0EsSUFBSUYsYUFBYSxDQUFDRyxJQUFJLEVBQUU7WUFDcEI5UyxzQkFBc0IsQ0FBQzFhLElBQUksOEJBQTJCMGUsRUFBRSxlQUFXLENBQUMsQ0FBQy9NLEdBQUcsQ0FBQzBiLGFBQWEsQ0FBQ0csSUFBSSxDQUFDO1VBQ2hHO1FBQ0o7TUFDSixDQUFDLENBQUM7O01BRUY7TUFDQUcsZUFBZSxDQUFDalUsT0FBTyxDQUFDLFVBQUFnVixNQUFBLEVBRWxCO1FBQUEsSUFERmhRLEVBQUUsR0FBQWdRLE1BQUEsQ0FBRmhRLEVBQUU7VUFBRWlRLE9BQU8sR0FBQUQsTUFBQSxDQUFQQyxPQUFPO1VBQUV0eEIsS0FBSyxHQUFBcXhCLE1BQUEsQ0FBTHJ4QixLQUFLO1VBQUV3d0IsT0FBTyxHQUFBYSxNQUFBLENBQVBiLE9BQU87UUFFM0IsSUFBSWMsT0FBTyxFQUFFO1VBQ1RqVSxzQkFBc0IsQ0FBQzFhLElBQUksNkJBQTBCMGUsRUFBRSwwQkFBb0IsQ0FBQyxDQUFDL00sR0FBRyxDQUFDdFUsS0FBSyxDQUFDO1VBQ3ZGcWQsc0JBQXNCLENBQUMxYSxJQUFJLDZCQUEwQjBlLEVBQUUsNEJBQXNCLENBQUMsQ0FBQ25MLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO1FBQ3hHLENBQUMsTUFBTTtVQUNIbUgsc0JBQXNCLENBQUMxYSxJQUFJLDZCQUEwQjBlLEVBQUUsMEJBQW9CLENBQUMsQ0FBQy9NLEdBQUcsQ0FBQ2tjLE9BQU8sQ0FBQztVQUN6Rm5ULHNCQUFzQixDQUFDMWEsSUFBSSw2QkFBMEIwZSxFQUFFLDRCQUFzQixDQUFDLENBQUNuTCxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztRQUN6RztNQUNKLENBQUMsQ0FBQzs7TUFFRjtNQUNBLEdBQUEvQyxNQUFBLENBQUlzZCxXQUFXLEVBQUtHLFdBQVcsRUFBS0UsZUFBZSxFQUFLRSxXQUFXLEVBQUUzVSxPQUFPLENBQUMsVUFBQWtWLE1BQUEsRUFBWTtRQUFBLElBQVRsUSxFQUFFLEdBQUFrUSxNQUFBLENBQUZsUSxFQUFFO1FBQzlFaEUsc0JBQXNCLENBQUMxYSxJQUFJLHdCQUFxQjBlLEVBQUUsZ0NBQXlCQSxFQUFFLHFDQUE4QkEsRUFBRSx1Q0FBZ0NBLEVBQUUsZUFBVyxDQUFDLENBQUNyYyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDO01BQ2hNLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUFBeEMsTUFBQSxDQUVEOGpCLGdDQUFnQyxHQUFoQyxTQUFBQSxnQ0FBZ0NBLENBQUNqSixzQkFBc0IsRUFBRUMsdUJBQXVCLEVBQUVDLGFBQWEsRUFBRTtJQUM3RixJQUFNaVUsTUFBTSxHQUFHO01BQUVDLFNBQVMsRUFBRTtJQUFLLENBQUM7SUFDbEMsSUFBTUMsU0FBUyxHQUFHOXZCLGdEQUFRLENBQUN3RSxNQUFNLENBQUMsSUFBSSxDQUFDcU4sbUJBQW1CLEVBQUUrZCxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZGLElBQU1HLFNBQVMsR0FBRy92QixnREFBUSxDQUFDd0UsTUFBTSxDQUFDLElBQUksQ0FBQ3NOLHdCQUF3QixFQUFFOGQsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RixJQUFNSSxZQUFZLEdBQUdod0IsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQyxJQUFJLENBQUN1TixnQkFBZ0IsRUFBRTZkLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdkZqVSxhQUFhLENBQUNsQixPQUFPLENBQUMsVUFBQStFLFFBQVEsRUFBSTtNQUM5Qi9ELHNCQUFzQixDQUNqQjFhLElBQUksbUNBQWdDeWUsUUFBUSx1Q0FBbUMsQ0FBQyxDQUNoRjVHLElBQUksQ0FBQyxVQUFDdlMsRUFBRSxFQUFFeVUsRUFBRSxFQUFLO1FBQ2QsSUFBTW1SLE1BQU0sR0FBR3ZyQixDQUFDLENBQUNvYSxFQUFFLENBQUM7UUFDcEIsSUFBTTRFLE9BQU8sR0FBRzdkLE1BQU0sQ0FBQ29xQixNQUFNLENBQUM3b0IsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDc2MsT0FBTyxFQUFFO1FBQ2QsSUFBTXVRLE1BQU0sR0FBR3Z2QixDQUFDLENBQUNvdkIsU0FBUyxDQUFDLENBQUMxc0IsSUFBSSxDQUFDLG9DQUFvQyxFQUFLb2MsUUFBUSxTQUFJRSxPQUFTLENBQUM7UUFFaEcsSUFBSXVNLE1BQU0sQ0FBQzlwQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7VUFDckI7VUFDQSxJQUFJOHBCLE1BQU0sQ0FBQzFxQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDMHFCLE1BQU0sQ0FBQzFxQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7Y0FDOUIwcUIsTUFBTSxDQUFDMXFCLElBQUksQ0FBQyxjQUFjLEVBQUUwcUIsTUFBTSxDQUFDeG9CLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUM7WUFDQXdvQixNQUFNLENBQUN4b0IsSUFBSSxDQUFJd29CLE1BQU0sQ0FBQzFxQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQUl3dUIsU0FBVyxDQUFDO1VBQzlEO1FBQ0osQ0FBQyxNQUFNO1VBQ0gsSUFBTUcsSUFBSSxHQUFHakUsTUFBTSxDQUFDbHJCLElBQUksNENBQXlDeWUsUUFBUSxTQUFJRSxPQUFPLFFBQUksQ0FBQztVQUN6RixJQUFJd1EsSUFBSSxDQUFDbnlCLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakJteUIsSUFBSSxDQUFDcHRCLE1BQU0sQ0FBQyxDQUFDO1lBQ2IsSUFBTXF0QixZQUFZLEdBQUdsRSxNQUFNLENBQUNsckIsSUFBSSxDQUFDLCtDQUErQyxDQUFDO1lBQ2pGLElBQUlvdkIsWUFBWSxDQUFDcHlCLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDekJveUIsWUFBWSxDQUFDeGxCLElBQUksQ0FBQ3NsQixNQUFNLENBQUM7WUFDN0IsQ0FBQyxNQUFNO2NBQ0hoRSxNQUFNLENBQUM3TCxNQUFNLENBQUM2UCxNQUFNLENBQUM7WUFDekI7VUFDSjtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ1YsQ0FBQyxDQUFDO0lBRUZ2VSx1QkFBdUIsQ0FBQy9RLElBQUksQ0FBQ3FsQixZQUFZLENBQUM7RUFDOUM7O0VBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBSkk7RUFBQXB2QixNQUFBLENBS0EyUywwQkFBMEIsR0FBMUIsU0FBQUEsMEJBQTBCQSxDQUFBLEVBQUc7SUFBQSxJQUFBNmMsb0JBQUE7TUFBQUMsT0FBQTtJQUN6QixJQUFJLElBQUksQ0FBQ3pkLG9CQUFvQixFQUFFO0lBRS9CLElBQU1KLEtBQUssR0FBRyxJQUFJLENBQUNoSyxNQUFNLENBQUN6SCxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQ29LLEtBQUssQ0FBQyxDQUFDO0lBQzlELElBQU1rUCxpQkFBaUIsR0FBRzdILEtBQUssQ0FBQ3pSLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDb0ssS0FBSyxDQUFDLENBQUM7SUFFNUUsSUFBSWtQLGlCQUFpQixDQUFDdGMsTUFBTSxLQUFLLENBQUMsSUFBSSxHQUFBcXlCLG9CQUFBLEdBQUMsSUFBSSxDQUFDemMsY0FBYyxhQUFuQnljLG9CQUFBLENBQXFCcnlCLE1BQU0sR0FBRTtJQUVwRSxJQUFNZ1gsUUFBUSxHQUFHLElBQUlPLFFBQVEsQ0FBQzlDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFNbUosYUFBYSxHQUFHLElBQUksQ0FBQ2hJLGNBQWMsQ0FBQzdQLEdBQUcsQ0FBQyxVQUFBd3NCLE1BQUE7TUFBQSxJQUFHN1EsRUFBRSxHQUFBNlEsTUFBQSxDQUFGN1EsRUFBRTtNQUFBLE9BQU9BLEVBQUU7SUFBQSxFQUFDO0lBRTdELElBQUksQ0FBQzFELGdCQUFnQixDQUFDMUIsaUJBQWlCLEVBQUUzWixDQUFDLENBQUMsQ0FBQyxFQUFFaWIsYUFBYSxFQUFFNUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUN0RSxDQUFDLFVBQUF1QyxHQUFHO01BQUEsT0FBSStZLE9BQUksQ0FBQ2hlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNEQUFzRCxFQUFFZ0YsR0FBRyxDQUFDO0lBQUEsRUFBQztFQUNwRyxDQUFDO0VBQUExVyxNQUFBLENBRUttYixnQkFBZ0I7SUFBQSxJQUFBd1UsaUJBQUEsR0FBQS93QixpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FBdEIsU0FBQTJ4QixTQUF1Qi9VLHNCQUFzQixFQUFFQyx1QkFBdUIsRUFBRUMsYUFBYSxFQUFFNUcsUUFBUSxFQUFFOEcsU0FBUyxFQUFFNFUsb0JBQW9CO01BQUEsSUFBQUMsT0FBQTtNQUFBLElBQUFDLGtCQUFBLEVBQUFoSixRQUFBLEVBQUFpSixtQkFBQSxFQUFBdkksSUFBQSxFQUFBQyxVQUFBLEVBQUF1SSxTQUFBO01BQUEsT0FBQWx5QixZQUFBLEdBQUFDLENBQUEsV0FBQWt5QixTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQW4wQixDQUFBO1VBQUE7WUFBQSxJQUFwQjh6QixvQkFBb0I7Y0FBcEJBLG9CQUFvQixHQUFHLEtBQUs7WUFBQTtZQUFBSyxTQUFBLENBQUFuMEIsQ0FBQTtZQUFBLE9BQ3BGMEMsT0FBTyxDQUFDMlIsR0FBRyxDQUFDLENBQ3hELElBQUksQ0FBQ3FXLGFBQWEsQ0FBQyxDQUFDLEVBQ3BCLElBQUksQ0FBQ08saUJBQWlCLENBQ2xCak0sYUFBYSxDQUFDN1gsR0FBRyxDQUFDLFVBQUFpdEIsR0FBRztjQUFBLE9BQUlMLE9BQUksQ0FBQy9jLGNBQWMsQ0FBQzVTLElBQUksQ0FBQyxVQUFBaXdCLE1BQUE7Z0JBQUEsSUFBR3ZSLEVBQUUsR0FBQXVSLE1BQUEsQ0FBRnZSLEVBQUU7Z0JBQUEsT0FBT0EsRUFBRSxLQUFLc1IsR0FBRztjQUFBLEVBQUM7WUFBQSxFQUFDLEVBQzFFaGMsUUFDSixDQUFDLENBQ0osQ0FBQztVQUFBO1lBQUE0YixrQkFBQSxHQUFBRyxTQUFBLENBQUFuekIsQ0FBQTtZQU5LZ3FCLFFBQVEsR0FBQWdKLGtCQUFBO1lBQUFDLG1CQUFBLEdBQUFELGtCQUFBO1lBQUd0SSxJQUFJLEdBQUF1SSxtQkFBQTtZQUFLdEksVUFBVSxHQUFBTyxpQkFBQSxDQUFBK0gsbUJBQUEsRUFBQXhoQixLQUFBO1lBUS9CeWhCLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFHenlCLEtBQUssRUFBSTtjQUN2QixJQUFJQSxLQUFLLElBQUksSUFBSSxJQUFJdWUsSUFBSSxDQUFDc1UsR0FBRyxDQUFDcHZCLE1BQU0sQ0FBQ3pELEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFO2dCQUNsRCxPQUFPLEVBQUU7Y0FDYjtjQUNBLE9BQU9zeUIsT0FBSSxDQUFDelMsV0FBVyxDQUFDN2YsS0FBSyxFQUFFLElBQUksQ0FBQztZQUN4QyxDQUFDO1lBRURrcUIsVUFBVSxDQUFDN04sT0FBTyxDQUFDLFVBQUF5VyxNQUFBLEVBRWI7Y0FBQSxJQUFBQyxxQkFBQSxFQUFBQyxzQkFBQSxFQUFBQyxxQkFBQSxFQUFBQyxzQkFBQTtjQUFBLElBREY5UixRQUFRLEdBQUEwUixNQUFBLENBQVIxUixRQUFRO2dCQUFFRSxPQUFPLEdBQUF3UixNQUFBLENBQVB4UixPQUFPO2dCQUFFNEoscUJBQXFCLEdBQUE0SCxNQUFBLENBQXJCNUgscUJBQXFCO2dCQUFFUSx3QkFBd0IsR0FBQW9ILE1BQUEsQ0FBeEJwSCx3QkFBd0I7Y0FFbEUsSUFBSThGLE1BQU0sR0FBQXh5QixNQUFBLENBQUF5bUIsTUFBQSxLQUNGOEQsUUFBUSxDQUFDNEosR0FBRyxDQUFDQyxHQUFHLEtBQUssSUFBSSxHQUFHO2dCQUM1QkMsaUJBQWlCLEVBQUVuSSxxQkFBcUIsYUFBQTZILHFCQUFBLEdBQXJCN0gscUJBQXFCLENBQUVoTixLQUFLLHFCQUE1QjZVLHFCQUFBLENBQThCL3lCLEtBQUs7Z0JBQ3REc3pCLFlBQVksRUFBRWIsU0FBUyxDQUFDdkgscUJBQXFCLGFBQUE4SCxzQkFBQSxHQUFyQjlILHFCQUFxQixDQUFFaE4sS0FBSyxxQkFBNUI4VSxzQkFBQSxDQUE4Qmh6QixLQUFLLENBQUM7Z0JBQzVEdXpCLHdCQUF3QixFQUFHckkscUJBQXFCLFlBQXJCQSxxQkFBcUIsQ0FBRUMsaUJBQWlCLEdBQUdELHFCQUFxQixvQkFBckJBLHFCQUFxQixDQUFFQyxpQkFBaUIsR0FBRyxFQUFHO2dCQUNwSEgsbUJBQW1CLEVBQUdFLHFCQUFxQixZQUFyQkEscUJBQXFCLENBQUVDLGlCQUFpQixHQUFHbUgsT0FBSSxDQUFDelMsV0FBVyxDQUFDcUwscUJBQXFCLG9CQUFyQkEscUJBQXFCLENBQUVDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxHQUFHO2NBQ3hJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDRjVCLFFBQVEsQ0FBQzRKLEdBQUcsQ0FBQ0MsR0FBRyxLQUFLLEtBQUssR0FBRztnQkFDN0JJLG9CQUFvQixFQUFFOUgsd0JBQXdCLGFBQUF1SCxxQkFBQSxHQUF4QnZILHdCQUF3QixDQUFFeE4sS0FBSyxxQkFBL0IrVSxxQkFBQSxDQUFpQ2p6QixLQUFLO2dCQUM1RHl6QixlQUFlLEVBQUVoQixTQUFTLENBQUMvRyx3QkFBd0IsYUFBQXdILHNCQUFBLEdBQXhCeEgsd0JBQXdCLENBQUV4TixLQUFLLHFCQUEvQmdWLHNCQUFBLENBQWlDbHpCLEtBQUssQ0FBQztnQkFDbEUwekIsMkJBQTJCLEVBQUdoSSx3QkFBd0IsWUFBeEJBLHdCQUF3QixDQUFFUCxpQkFBaUIsR0FBR08sd0JBQXdCLG9CQUF4QkEsd0JBQXdCLENBQUVQLGlCQUFpQixHQUFHLEVBQUc7Z0JBQzdITSxzQkFBc0IsRUFBR0Msd0JBQXdCLFlBQXhCQSx3QkFBd0IsQ0FBRVAsaUJBQWlCLEdBQUdtSCxPQUFJLENBQUN6UyxXQUFXLENBQUM2TCx3QkFBd0Isb0JBQXhCQSx3QkFBd0IsQ0FBRVAsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEdBQUc7Y0FDakosQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNUO2NBRUQsSUFBSXFHLE1BQU0sQ0FBQzhCLFlBQVksSUFBSTlCLE1BQU0sQ0FBQ2lDLGVBQWUsRUFBRTtnQkFBQSxJQUFBRSxtQkFBQTtnQkFDL0M7Z0JBQ0E7Z0JBQ0EsSUFBTUMsT0FBTyxJQUFBRCxtQkFBQSxHQUFHbFcsU0FBUyxDQUFDMkQsUUFBUSxDQUFDLHFCQUFuQnVTLG1CQUFBLENBQXNCclMsT0FBTyxDQUFDO2dCQUM5QyxJQUFJc1MsT0FBTyxFQUFFO2tCQUFBLElBQUFDLHNCQUFBLEVBQUFDLHNCQUFBO2tCQUNULElBQU1DLGdCQUFnQixHQUFHSCxPQUFPLEdBQUdySyxRQUFRLENBQUN0SixRQUFRLENBQUMrVCxZQUFZO2tCQUNqRSxJQUFNQyxVQUFVLEdBQUcxSyxRQUFRLENBQUM0SixHQUFHLENBQUNDLEdBQUcsS0FBSyxLQUFLLEdBQUcxSCx3QkFBd0IsYUFBQW1JLHNCQUFBLEdBQXhCbkksd0JBQXdCLENBQUV4TixLQUFLLHFCQUEvQjJWLHNCQUFBLENBQWlDN3pCLEtBQUssR0FBR2tyQixxQkFBcUIsYUFBQTRJLHNCQUFBLEdBQXJCNUkscUJBQXFCLENBQUVoTixLQUFLLHFCQUE1QjRWLHNCQUFBLENBQThCOXpCLEtBQUs7a0JBQzVILElBQUkrekIsZ0JBQWdCLEdBQUdFLFVBQVUsRUFBRTtvQkFDL0J6QyxNQUFNLEdBQUF4eUIsTUFBQSxDQUFBeW1CLE1BQUEsS0FDQytMLE1BQU0sRUFDTGpJLFFBQVEsQ0FBQzRKLEdBQUcsQ0FBQ0MsR0FBRyxLQUFLLElBQUksR0FBRztzQkFDNUJHLHdCQUF3QixFQUFFUSxnQkFBZ0I7c0JBQzFDL0ksbUJBQW1CLEVBQUVzSCxPQUFJLENBQUN6UyxXQUFXLENBQUNrVSxnQkFBZ0IsRUFBRSxJQUFJO29CQUNoRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ0Z4SyxRQUFRLENBQUM0SixHQUFHLENBQUNDLEdBQUcsS0FBSyxLQUFLLEdBQUc7c0JBQzdCTSwyQkFBMkIsRUFBRUssZ0JBQWdCO3NCQUM3Q3RJLHNCQUFzQixFQUFFNkcsT0FBSSxDQUFDelMsV0FBVyxDQUFDa1UsZ0JBQWdCLEVBQUUsSUFBSTtvQkFDbkUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNUO2tCQUNMO2dCQUNKO2dCQUVBLElBQU1yQyxTQUFTLEdBQUc5dkIsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQ2tzQixPQUFJLENBQUM3ZSxtQkFBbUIsRUFBRStkLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZGLElBQU1HLFNBQVMsR0FBRy92QixnREFBUSxDQUFDd0UsTUFBTSxDQUFDa3NCLE9BQUksQ0FBQzVlLHdCQUF3QixFQUFFOGQsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUYsSUFBTUssTUFBTSxHQUFHdnZCLENBQUMsQ0FBQ292QixTQUFTLENBQUMsQ0FBQzFzQixJQUFJLENBQUMsb0NBQW9DLEVBQUtvYyxRQUFRLFNBQUlFLE9BQVMsQ0FBQztnQkFDaEcsSUFBTXNGLE9BQU8sR0FBR3ZKLHNCQUFzQixDQUFDMWEsSUFBSSxtQ0FBZ0N5ZSxRQUFRLFFBQUksQ0FBQztnQkFDeEY7Z0JBQ0E7Z0JBQ0E7Z0JBQ0EsSUFBTXlNLE1BQU0sR0FBR2pILE9BQU8sQ0FBQ2prQixJQUFJLDJDQUF3QzJlLE9BQU8sbURBQTRDQSxPQUFPLFFBQUksQ0FBQzs7Z0JBRWxJO2dCQUNBLElBQUl1TSxNQUFNLENBQUN2UyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7a0JBQ2hDdVMsTUFBTSxDQUFDbHJCLElBQUksNENBQXlDeWUsUUFBUSxTQUFJRSxPQUFPLFFBQUksQ0FBQyxDQUFDNWMsTUFBTSxDQUFDLENBQUM7a0JBQ3JGO2dCQUNKO2dCQUVBLElBQU13dkIsYUFBYSw4Q0FBMkM5UyxRQUFRLFNBQUlFLE9BQU8sUUFBSTtnQkFFckYsSUFBSSxDQUFDa1EsTUFBTSxDQUFDOEIsWUFBWSxJQUFJLENBQUM5QixNQUFNLENBQUNpQyxlQUFlLEVBQUU7a0JBQ2pENUYsTUFBTSxDQUFDbHJCLElBQUksQ0FBQ3V4QixhQUFhLENBQUMsQ0FBQ3h2QixNQUFNLENBQUMsQ0FBQztrQkFDbkM7Z0JBQ0o7Z0JBRUEsSUFBSW1wQixNQUFNLENBQUM5cEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2tCQUNyQixJQUFJLENBQUM4cEIsTUFBTSxDQUFDMXFCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDOUIwcUIsTUFBTSxDQUFDMXFCLElBQUksQ0FBQyxjQUFjLEVBQUUwcUIsTUFBTSxDQUFDeG9CLElBQUksQ0FBQyxDQUFDLENBQUM7a0JBQzlDO2tCQUNBd29CLE1BQU0sQ0FBQ3hvQixJQUFJLENBQUl3b0IsTUFBTSxDQUFDMXFCLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBSXd1QixTQUFXLENBQUM7a0JBQzFEOUQsTUFBTSxDQUFDMXFCLElBQUksQ0FBQyxXQUFXLEVBQUV1dUIsU0FBUyxDQUFDO2dCQUN2QyxDQUFDLE1BQU07a0JBQ0g3RCxNQUFNLENBQUNsckIsSUFBSSxDQUFDdXhCLGFBQWEsQ0FBQyxDQUFDeHZCLE1BQU0sQ0FBQyxDQUFDO2tCQUNuQyxJQUFNcXRCLFlBQVksR0FBR2xFLE1BQU0sQ0FBQ2xyQixJQUFJLENBQUMsK0NBQStDLENBQUM7a0JBQ2pGLElBQUlvdkIsWUFBWSxDQUFDcHlCLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3pCb3lCLFlBQVksQ0FBQ3hsQixJQUFJLENBQUNzbEIsTUFBTSxDQUFDO2tCQUM3QixDQUFDLE1BQU07b0JBQ0hoRSxNQUFNLENBQUM3TCxNQUFNLENBQUM2UCxNQUFNLENBQUM7a0JBQ3pCO2dCQUNKO2NBQ0o7WUFDSixDQUFDLENBQUM7O1lBRUY7WUFDQSxJQUFJLENBQUNRLG9CQUFvQixFQUFFO2NBQ3ZCLElBQUksQ0FBQzhCLGtCQUFrQixDQUFDN1csdUJBQXVCLEVBQUUyTSxJQUFJLEVBQUVWLFFBQVEsQ0FBQztZQUNwRTtVQUFDO1lBQUEsT0FBQW1KLFNBQUEsQ0FBQWx6QixDQUFBO1FBQUE7TUFBQSxHQUFBNHlCLFFBQUE7SUFBQSxDQUNKO0lBQUEsU0FwR0t6VSxnQkFBZ0JBLENBQUF5VyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxFQUFBQyxJQUFBLEVBQUFDLElBQUEsRUFBQUMsSUFBQTtNQUFBLE9BQUF0QyxpQkFBQSxDQUFBN3dCLEtBQUEsT0FBQUQsU0FBQTtJQUFBO0lBQUEsT0FBaEJzYyxnQkFBZ0I7RUFBQTtFQXNHdEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBakJJO0VBQUFuYixNQUFBLENBa0JBMnhCLGtCQUFrQixHQUFsQixTQUFBQSxrQkFBa0JBLENBQUM3Vyx1QkFBdUIsRUFBRTdPLE9BQU8sRUFBRThhLFFBQVEsRUFBRTtJQUFBLElBQUFtTCxxQkFBQSxFQUFBQyxxQkFBQTtJQUMzRCxJQUFJbkQsTUFBTSxHQUFHO01BQ1RvRCxXQUFXLEVBQUUsSUFBSSxDQUFDcGQsT0FBTyxDQUFDb2QsV0FBVztNQUNyQ3ZCLGlCQUFpQixFQUFFLEVBQUU7TUFDckJDLFlBQVksRUFBRSxFQUFFO01BQ2hCRSxvQkFBb0IsRUFBRSxFQUFFO01BQ3hCQyxlQUFlLEVBQUU7SUFDckIsQ0FBQztJQUVELElBQUksQ0FBQWlCLHFCQUFBLEdBQUFqbUIsT0FBTyxDQUFDa2MsYUFBYSxhQUFyQitKLHFCQUFBLENBQXVCeFcsS0FBSyxLQUFBeVcscUJBQUEsR0FBSWxtQixPQUFPLENBQUMyYyxnQkFBZ0IsYUFBeEJ1SixxQkFBQSxDQUEwQnpXLEtBQUssRUFBRTtNQUNqRXNULE1BQU0sR0FBQXh5QixNQUFBLENBQUF5bUIsTUFBQSxLQUNDK0wsTUFBTSxFQUNMakksUUFBUSxDQUFDNEosR0FBRyxDQUFDQyxHQUFHLEtBQUssSUFBSSxHQUFHO1FBQzVCQyxpQkFBaUIsRUFBRTVrQixPQUFPLENBQUNrYyxhQUFhLENBQUN6TSxLQUFLLENBQUNsZSxLQUFLO1FBQ3BEc3pCLFlBQVksRUFBRSxJQUFJLENBQUN6VCxXQUFXLENBQUNwUixPQUFPLENBQUNrYyxhQUFhLENBQUN6TSxLQUFLLENBQUNsZSxLQUFLLENBQUM7UUFDakV1ekIsd0JBQXdCLEVBQUU5a0IsT0FBTyxDQUFDa2MsYUFBYSxDQUFDTSxTQUFTLENBQUNqckIsS0FBSyxHQUFHeU8sT0FBTyxDQUFDa2MsYUFBYSxDQUFDek0sS0FBSyxDQUFDbGUsS0FBSyxHQUFHeU8sT0FBTyxDQUFDa2MsYUFBYSxDQUFDTSxTQUFTLENBQUNqckIsS0FBSyxHQUFHLEVBQUU7UUFDaEpnckIsbUJBQW1CLEVBQUV2YyxPQUFPLENBQUNrYyxhQUFhLENBQUNNLFNBQVMsQ0FBQ2pyQixLQUFLLEdBQUd5TyxPQUFPLENBQUNrYyxhQUFhLENBQUN6TSxLQUFLLENBQUNsZSxLQUFLLEdBQUcsSUFBSSxDQUFDNmYsV0FBVyxDQUFDcFIsT0FBTyxDQUFDa2MsYUFBYSxDQUFDTSxTQUFTLENBQUNqckIsS0FBSyxDQUFDLEdBQUc7TUFDL0osQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNGdXBCLFFBQVEsQ0FBQzRKLEdBQUcsQ0FBQ0MsR0FBRyxLQUFLLEtBQUssR0FBRztRQUM3Qkksb0JBQW9CLEVBQUUva0IsT0FBTyxDQUFDMmMsZ0JBQWdCLENBQUNsTixLQUFLLENBQUNsZSxLQUFLO1FBQzFEeXpCLGVBQWUsRUFBRSxJQUFJLENBQUM1VCxXQUFXLENBQUNwUixPQUFPLENBQUMyYyxnQkFBZ0IsQ0FBQ2xOLEtBQUssQ0FBQ2xlLEtBQUssQ0FBQztRQUN2RTB6QiwyQkFBMkIsRUFBRWpsQixPQUFPLENBQUMyYyxnQkFBZ0IsQ0FBQ0gsU0FBUyxDQUFDanJCLEtBQUssR0FBR3lPLE9BQU8sQ0FBQzJjLGdCQUFnQixDQUFDbE4sS0FBSyxDQUFDbGUsS0FBSyxHQUFHeU8sT0FBTyxDQUFDMmMsZ0JBQWdCLENBQUNILFNBQVMsQ0FBQ2pyQixLQUFLLEdBQUcsRUFBRTtRQUM1SnlyQixzQkFBc0IsRUFBRWhkLE9BQU8sQ0FBQzJjLGdCQUFnQixDQUFDSCxTQUFTLENBQUNqckIsS0FBSyxHQUFHeU8sT0FBTyxDQUFDMmMsZ0JBQWdCLENBQUNsTixLQUFLLENBQUNsZSxLQUFLLEdBQUcsSUFBSSxDQUFDNmYsV0FBVyxDQUFDcFIsT0FBTyxDQUFDMmMsZ0JBQWdCLENBQUNILFNBQVMsQ0FBQ2pyQixLQUFLLENBQUMsR0FBRztNQUMzSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ1Q7SUFDTDtJQUVBLElBQU00eEIsWUFBWSxHQUFHaHdCLGdEQUFRLENBQUN3RSxNQUFNLENBQUMsSUFBSSxDQUFDdU4sZ0JBQWdCLEVBQUU2ZCxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZGbFUsdUJBQXVCLENBQUMvUSxJQUFJLENBQUNxbEIsWUFBWSxDQUFDO0VBQzlDOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FWSTtFQUFBcHZCLE1BQUEsQ0FXQStqQixXQUFXLEdBQVgsU0FBQUEsV0FBV0EsQ0FBQ2xKLHNCQUFzQixFQUFFdUYsc0JBQXNCLEVBQUV0Rix1QkFBdUIsRUFBRXVGLG9CQUFvQixFQUFFckIsaUJBQWlCLEVBQUU3SyxRQUFRLEVBQUU4YSxTQUFTLEVBQVU7SUFBQSxJQUFuQkEsU0FBUztNQUFUQSxTQUFTLEdBQUcsS0FBSztJQUFBO0lBQ3JKNU8sb0JBQW9CLENBQUN0VyxJQUFJLENBQUMsSUFBSSxDQUFDaUwsT0FBTyxDQUFDcWQsbUJBQW1CLENBQUM7SUFFM0QsSUFBTUMsT0FBTyxHQUFHLEVBQUU7SUFDbEIsSUFBTWxELFlBQVksR0FBRyxDQUFDSCxTQUFTLEdBQ3pCblUsdUJBQXVCLENBQUMvUSxJQUFJLENBQUMsQ0FBQyxHQUM5QjNLLGdEQUFRLENBQUN3RSxNQUFNLENBQUMsSUFBSSxDQUFDdU4sZ0JBQWdCLEVBQUU7TUFBRThkLFNBQVMsRUFBVEE7SUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9FLElBQU1zRCxTQUFTLEdBQUd6eUIsQ0FBQyxDQUFDc3ZCLFlBQVksQ0FBQyxDQUFDNXNCLElBQUksQ0FBQyw4Q0FBOEMsRUFBRSxFQUFFLENBQUM7SUFFMUYsSUFBSSxDQUFDdVEsY0FBYyxDQUFDOEcsT0FBTyxDQUFDLFVBQUEwSCxNQUFNLEVBQUk7TUFBQSxJQUFBaVIsY0FBQSxFQUFBQyxxQkFBQTtNQUNsQyxJQUFNQyxNQUFNLEdBQUd2ZSxRQUFRLENBQUN6UixHQUFHLGdCQUFjNmUsTUFBTSxDQUFDMUMsRUFBRSxXQUFRLENBQUM7TUFDM0QsSUFBTThULFFBQVEsR0FBR3hlLFFBQVEsQ0FBQ3pSLEdBQUcsZ0JBQWM2ZSxNQUFNLENBQUMxQyxFQUFFLGFBQVUsQ0FBQztNQUMvRCxJQUFNK1QsT0FBTyxHQUFHemUsUUFBUSxDQUFDelIsR0FBRyxnQkFBYzZlLE1BQU0sQ0FBQzFDLEVBQUUsWUFBUyxDQUFDO01BRTdELElBQUk2VCxNQUFNLElBQUlDLFFBQVEsSUFBSUMsT0FBTyxFQUFFO1FBQy9CTixPQUFPLENBQUN0aUIsSUFBSSxDQUFDO1VBQ1RwTixJQUFJLEVBQUUyZSxNQUFNLENBQUM5QyxZQUFZO1VBQ3pCamhCLEtBQUssRUFBRSxJQUFJcTFCLElBQUksQ0FBSUQsT0FBTyxTQUFJRCxRQUFRLFNBQUlELE1BQVEsQ0FBQyxDQUFDSSxrQkFBa0IsQ0FBQztVQUN2RTtRQUNKLENBQUMsQ0FBQztRQUNGO01BQ0o7TUFFQSxJQUFNQyxRQUFRLEdBQUc1ZSxRQUFRLENBQUM4USxNQUFNLGdCQUFjMUQsTUFBTSxDQUFDMUMsRUFBRSxNQUFHLENBQUMsQ0FBQ3JRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN4RSxJQUFJLENBQUN1a0IsUUFBUSxJQUFJQSxRQUFRLEtBQUssR0FBRyxFQUFFO01BRW5DLElBQUlBLFFBQVEsWUFBWXpRLElBQUksRUFBRTtRQUMxQixJQUFJeVEsUUFBUSxDQUFDbndCLElBQUksRUFBRTtVQUNmMHZCLE9BQU8sQ0FBQ3RpQixJQUFJLENBQUM7WUFDVHBOLElBQUksRUFBRTJlLE1BQU0sQ0FBQzlDLFlBQVk7WUFDekJqaEIsS0FBSyxFQUFFdTFCLFFBQVEsQ0FBQ253QjtVQUNwQixDQUFDLENBQUM7UUFDTjtRQUNBO01BQ0o7TUFFQSxJQUFNa2MsT0FBTyxHQUFHaVUsUUFBUSxHQUFHOXhCLE1BQU0sQ0FBQzh4QixRQUFRLENBQUMsR0FBRyxJQUFJOztNQUVsRDtNQUNBLElBQUl4UixNQUFNLENBQUN5TSxPQUFPLElBQUl6TSxNQUFNLENBQUN5TSxPQUFPLEtBQUtsUCxPQUFPLEVBQUU7TUFFbEQsSUFBTXdILFVBQVUsR0FBRyxFQUFBa00sY0FBQSxHQUFBalIsTUFBTSxDQUFDN0MsTUFBTSxjQUFBOFQsY0FBQSxHQUFiQSxjQUFBLENBQWVyeUIsSUFBSSxDQUFDLFVBQUE2eUIsTUFBQTtRQUFBLElBQUduVSxFQUFFLEdBQUFtVSxNQUFBLENBQUZuVSxFQUFFO1FBQUEsT0FBT0EsRUFBRSxLQUFLQyxPQUFPO01BQUEsRUFBQyxxQkFBL0MwVCxjQUFBLENBQWlEN1QsS0FBSyxNQUNqRTRDLE1BQU0sQ0FBQy9qQixLQUFLLEtBQUtzaEIsT0FBTyxHQUFHeUMsTUFBTSxDQUFDNUMsS0FBSyxHQUFHaEssU0FBUyxDQUFDO01BRTVELElBQU11YSxTQUFTLElBQUF1RCxxQkFBQSxHQUFHNVgsc0JBQXNCLENBQUMxYSxJQUFJLDRDQUF5Q29oQixNQUFNLENBQUMxQyxFQUFFLFNBQUlDLE9BQU8sUUFBSSxDQUFDLENBQzFHdlUsS0FBSyxDQUFDLENBQUMsQ0FBQ2pJLEtBQUssQ0FBQyxDQUFDLENBQUNDLFVBQVUsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFEdERrd0IscUJBQUEsQ0FDd0Q5dkIsU0FBUztNQUVuRixJQUFNc3dCLGlCQUFpQixHQUFHcFksc0JBQXNCLENBQUMxYSxJQUFJLDhCQUEyQm9oQixNQUFNLENBQUMxQyxFQUFFLDRCQUFxQkMsT0FBTyxRQUFJLENBQUMsQ0FBQ25lLElBQUksQ0FBQyxXQUFXLENBQUM7TUFFNUkyeEIsT0FBTyxDQUFDdGlCLElBQUksQ0FBQztRQUNUcE4sSUFBSSxFQUFFMmUsTUFBTSxDQUFDOUMsWUFBWTtRQUN6QmpoQixLQUFLLEVBQUU4b0IsVUFBVSxJQUFJeU0sUUFBUTtRQUM3QjdELFNBQVMsRUFBRUEsU0FBUyxJQUFJK0Q7TUFDNUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBRUYsSUFBTUMsV0FBVyxHQUFHOXpCLGdEQUFRLENBQUN3RSxNQUFNLENBQUMsSUFBSSxDQUFDd04sZUFBZSxFQUFFO01BQUVraEIsT0FBTyxFQUFQQTtJQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUZsUyxzQkFBc0IsQ0FBQ3JXLElBQUksQ0FBQ21wQixXQUFXLENBQUM7O0lBRXhDO0lBQ0FsVSxpQkFBaUIsQ0FBQzdlLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDK0IsTUFBTSxDQUFDLENBQUM7SUFDakY4YyxpQkFBaUIsQ0FBQzdlLElBQUksQ0FBQyxJQUFJLENBQUNvUix3QkFBd0IsQ0FBQyxDQUFDMlosT0FBTyxDQUFDcUgsU0FBUyxDQUFDO0lBQ3hFdlQsaUJBQWlCLENBQUN0YSxJQUFJLENBQUMsQ0FBQztFQUM1Qjs7RUFHQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJCSTtFQUFBMUUsTUFBQSxDQXNCQW9iLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUN6YSxJQUFJLEVBQUU7SUFDMUIsSUFBTWlSLEtBQUssR0FBRyxJQUFJLENBQUNoSyxNQUFNLENBQUN6SCxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDdEQsSUFBTXNaLGlCQUFpQixHQUFHN0gsS0FBSyxDQUFDelIsSUFBSSxDQUFDLDhCQUE4QixDQUFDO0lBQ3BFLElBQU0yYSx1QkFBdUIsR0FBR3JCLGlCQUFpQixDQUFDdFosSUFBSSxDQUFDLDhDQUE4QyxDQUFDO0lBRXRHLElBQUk2dUIsTUFBTSxHQUFHO01BQ1RvRCxXQUFXLEVBQUUsSUFBSSxDQUFDcGQsT0FBTyxDQUFDb2QsV0FBVztNQUNyQ3ZCLGlCQUFpQixFQUFFLEVBQUU7TUFDckJDLFlBQVksRUFBRSxFQUFFO01BQ2hCRSxvQkFBb0IsRUFBRSxFQUFFO01BQ3hCQyxlQUFlLEVBQUU7SUFDckIsQ0FBQztJQUVELElBQUl0d0IsSUFBSSxDQUFDK2EsS0FBSyxFQUFFO01BQ1pzVCxNQUFNLEdBQUF4eUIsTUFBQSxDQUFBeW1CLE1BQUEsS0FDQytMLE1BQU0sRUFDTHJ1QixJQUFJLENBQUMrYSxLQUFLLENBQUNRLFFBQVEsR0FBRztRQUN0QjJVLGlCQUFpQixFQUFFbHdCLElBQUksQ0FBQythLEtBQUssQ0FBQ1EsUUFBUSxDQUFDMWUsS0FBSztRQUM1Q3N6QixZQUFZLEVBQUVud0IsSUFBSSxDQUFDK2EsS0FBSyxDQUFDUSxRQUFRLENBQUNpQztNQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ0Z4ZCxJQUFJLENBQUMrYSxLQUFLLENBQUNDLFdBQVcsR0FBRztRQUN6QnFWLG9CQUFvQixFQUFFcndCLElBQUksQ0FBQythLEtBQUssQ0FBQ0MsV0FBVyxDQUFDbmUsS0FBSztRQUNsRHl6QixlQUFlLEVBQUV0d0IsSUFBSSxDQUFDK2EsS0FBSyxDQUFDQyxXQUFXLENBQUN3QztNQUM1QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ1Q7SUFDTDtJQUVBLElBQU1pUixZQUFZLEdBQUdod0IsZ0RBQVEsQ0FBQ3dFLE1BQU0sQ0FBQyxJQUFJLENBQUN1TixnQkFBZ0IsRUFBRTZkLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkZsVSx1QkFBdUIsQ0FBQy9RLElBQUksQ0FBQ3FsQixZQUFZLENBQUM7RUFDOUMsQ0FBQztFQUFBLE9BQUFuaUIsWUFBQSxDQUFBb0QsY0FBQTtJQUFBL08sR0FBQTtJQUFBb0IsR0FBQSxFQS8wRUQsU0FBQUEsSUFBQSxFQUE0QjtNQUN4QixPQUFPLElBQUksQ0FBQ2tGLE1BQU0sQ0FBQ3pILElBQUksQ0FBQywrQkFBK0IsQ0FBQztJQUM1RDtFQUFDO0FBQUEsRUF2UXVDbU4scUVBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVM2bEIsbUJBQW1CQSxDQUFDQyxHQUFHLEVBQUU7RUFDckMsSUFBTUMsS0FBSyxHQUFHLDZLQUE2SztFQUUzTCxJQUFNL08sS0FBSyxHQUFHOE8sR0FBRyxDQUFDMU8sSUFBSSxDQUFDLENBQUMsQ0FBQ0osS0FBSyxDQUFDK08sS0FBSyxDQUFDO0VBQ3JDLElBQUksQ0FBQy9PLEtBQUssRUFBRTtJQUNSLE9BQU8sSUFBSSxDQUFDLENBQUM7RUFDakI7RUFFQSxJQUVJcUosSUFBSSxHQU1KckosS0FBSztJQU5Db0osS0FBSyxHQU1YcEosS0FBSztJQU5RbUosR0FBRyxHQU1oQm5KLEtBQUs7SUFOYTtJQUNsQmdQLFVBQVUsR0FLVmhQLEtBQUs7SUFMT2lQLFFBQVEsR0FLcEJqUCxLQUFLO0lBTGlCO0lBQ3RCa1AsSUFBSSxHQUlKbFAsS0FBSztJQUpDbVAsTUFBTSxHQUlablAsS0FBSztJQUpTb1AsTUFBTSxHQUlwQnBQLEtBQUs7SUFKaUI7SUFDdEJxUCxTQUFTLEdBR1RyUCxLQUFLO0lBSE1zUCxXQUFXLEdBR3RCdFAsS0FBSztJQUhtQjtJQUN4QnVQLG1CQUFtQixHQUVuQnZQLEtBQUs7SUFGZ0I7SUFDckJ3UCxNQUFNLEdBQ054UCxLQUFLO0lBREd5UCxZQUFZLEdBQ3BCelAsS0FBSztJQURpQjBQLGNBQWMsQ0FBRTtJQUFBLEVBQ3RDMVAsS0FBSztFQUVULElBQU16VSxNQUFNLEdBQUcsQ0FBQyxDQUFDOztFQUVqQjtFQUNBLElBQUk4ZCxJQUFJLElBQUlELEtBQUssSUFBSUQsR0FBRyxFQUFFO0lBQ3RCNWQsTUFBTSxDQUFDOGQsSUFBSSxHQUFHc0csUUFBUSxDQUFDdEcsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUNoQzlkLE1BQU0sQ0FBQzZkLEtBQUssR0FBR3VHLFFBQVEsQ0FBQ3ZHLEtBQUssRUFBRSxFQUFFLENBQUM7SUFDbEM3ZCxNQUFNLENBQUM0ZCxHQUFHLEdBQUd3RyxRQUFRLENBQUN4RyxHQUFHLEVBQUUsRUFBRSxDQUFDO0VBQ2xDLENBQUMsTUFBTSxJQUFJNkYsVUFBVSxJQUFJQyxRQUFRLEVBQUU7SUFDL0IxakIsTUFBTSxDQUFDNmQsS0FBSyxHQUFHdUcsUUFBUSxDQUFDWCxVQUFVLEVBQUUsRUFBRSxDQUFDO0lBQ3ZDempCLE1BQU0sQ0FBQzRkLEdBQUcsR0FBR3dHLFFBQVEsQ0FBQ1YsUUFBUSxFQUFFLEVBQUUsQ0FBQztFQUN2Qzs7RUFFQTtFQUNBLElBQUlDLElBQUksS0FBSzdlLFNBQVMsSUFBSThlLE1BQU0sS0FBSzllLFNBQVMsRUFBRTtJQUM1QzlFLE1BQU0sQ0FBQzJqQixJQUFJLEdBQUdTLFFBQVEsQ0FBQ1QsSUFBSSxFQUFFLEVBQUUsQ0FBQztJQUNoQzNqQixNQUFNLENBQUM0akIsTUFBTSxHQUFHUSxRQUFRLENBQUNSLE1BQU0sRUFBRSxFQUFFLENBQUM7SUFDcEMsSUFBSUMsTUFBTSxLQUFLL2UsU0FBUyxFQUFFO01BQ3RCOUUsTUFBTSxDQUFDNmpCLE1BQU0sR0FBR08sUUFBUSxDQUFDUCxNQUFNLEVBQUUsRUFBRSxDQUFDO0lBQ3hDO0VBQ0osQ0FBQyxNQUFNLElBQUlDLFNBQVMsS0FBS2hmLFNBQVMsSUFBSWlmLFdBQVcsS0FBS2pmLFNBQVMsRUFBRTtJQUM3RDlFLE1BQU0sQ0FBQzJqQixJQUFJLEdBQUdTLFFBQVEsQ0FBQ04sU0FBUyxFQUFFLEVBQUUsQ0FBQztJQUNyQzlqQixNQUFNLENBQUM0akIsTUFBTSxHQUFHUSxRQUFRLENBQUNMLFdBQVcsRUFBRSxFQUFFLENBQUM7RUFDN0MsQ0FBQyxNQUFNLElBQUlDLG1CQUFtQixLQUFLbGYsU0FBUyxFQUFFO0lBQzFDOUUsTUFBTSxDQUFDMmpCLElBQUksR0FBR1MsUUFBUSxDQUFDSixtQkFBbUIsRUFBRSxFQUFFLENBQUM7RUFDbkQ7O0VBRUE7RUFDQSxJQUFJQyxNQUFNLElBQUlDLFlBQVksRUFBRTtJQUN4QixJQUFNRyxJQUFJLEdBQUdKLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxJQUFNSyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0YsWUFBWSxFQUFFLEVBQUUsQ0FBQztJQUN6QyxJQUFNSyxRQUFRLEdBQUdKLGNBQWMsR0FBR0MsUUFBUSxDQUFDRCxjQUFjLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNsRW5rQixNQUFNLENBQUN3a0IsUUFBUSxHQUFHSCxJQUFJLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxHQUFHLEVBQUUsQ0FBQztFQUNyRCxDQUFDLE1BQU0sSUFBSWhCLEdBQUcsQ0FBQ3B0QixRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDMUI2SixNQUFNLENBQUN3a0IsUUFBUSxHQUFHLENBQUM7RUFDdkI7RUFFQSxPQUFPeGtCLE1BQU07QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVN5a0Isa0JBQWtCQSxDQUFDbEIsR0FBRyxFQUFFO0VBQ3BDLElBQU1tQixVQUFVLEdBQUdwQixtQkFBbUIsQ0FBQ0MsR0FBRyxDQUFDO0VBQzNDLElBQUksQ0FBQ21CLFVBQVUsRUFBRTs7RUFFakI7RUFDQSxJQUFRNUcsSUFBSSxHQUFpRDRHLFVBQVUsQ0FBL0Q1RyxJQUFJO0lBQUVELEtBQUssR0FBMEM2RyxVQUFVLENBQXpEN0csS0FBSztJQUFFRCxHQUFHLEdBQXFDOEcsVUFBVSxDQUFsRDlHLEdBQUc7SUFBRStGLElBQUksR0FBK0JlLFVBQVUsQ0FBN0NmLElBQUk7SUFBRUMsTUFBTSxHQUF1QmMsVUFBVSxDQUF2Q2QsTUFBTTtJQUFFQyxNQUFNLEdBQWVhLFVBQVUsQ0FBL0JiLE1BQU07SUFBRVcsUUFBUSxHQUFLRSxVQUFVLENBQXZCRixRQUFRO0VBRXhELElBQU1HLEdBQUcsR0FBRyxJQUFJM0IsSUFBSSxDQUFDLENBQUM7RUFDdEIsSUFBTWgyQixDQUFDLEdBQUc4d0IsSUFBSSxXQUFKQSxJQUFJLEdBQUk2RyxHQUFHLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBQ25DLElBQU14MkIsQ0FBQyxHQUFHeXZCLEtBQUssV0FBTEEsS0FBSyxHQUFLOEcsR0FBRyxDQUFDRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUU7RUFDdkMsSUFBTXozQixDQUFDLEdBQUd3d0IsR0FBRyxXQUFIQSxHQUFHLEdBQUkrRyxHQUFHLENBQUNHLE9BQU8sQ0FBQyxDQUFDO0VBQzlCLElBQU1DLENBQUMsR0FBR3BCLElBQUksSUFBSSxDQUFDO0VBQ25CLElBQU1xQixHQUFHLEdBQUdwQixNQUFNLElBQUksQ0FBQztFQUN2QixJQUFNcUIsR0FBRyxHQUFHcEIsTUFBTSxJQUFJLENBQUM7RUFFdkIsSUFBSXFCLElBQUk7RUFFUixJQUFJVixRQUFRLEtBQUsxZixTQUFTLEVBQUU7SUFDeEIsSUFBTXFnQixTQUFTLEdBQUduQyxJQUFJLENBQUNvQyxHQUFHLENBQUNwNEIsQ0FBQyxFQUFFb0IsQ0FBQyxHQUFHLENBQUMsRUFBRWhCLENBQUMsRUFBRTIzQixDQUFDLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLEdBQUlULFFBQVEsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUs7SUFDbEZVLElBQUksR0FBRyxJQUFJbEMsSUFBSSxDQUFDbUMsU0FBUyxDQUFDO0VBQzlCLENBQUMsTUFBTTtJQUNIRCxJQUFJLEdBQUcsSUFBSWxDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLElBQUlsRixJQUFJLEVBQUVvSCxJQUFJLENBQUNHLFdBQVcsQ0FBQ3ZILElBQUksQ0FBQztJQUNoQyxJQUFJRCxLQUFLLEVBQUVxSCxJQUFJLENBQUNJLFFBQVEsQ0FBQ3pILEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkMsSUFBSUQsR0FBRyxFQUFFc0gsSUFBSSxDQUFDSyxPQUFPLENBQUMzSCxHQUFHLENBQUM7SUFDMUJzSCxJQUFJLENBQUNNLFFBQVEsQ0FBQ1QsQ0FBQyxDQUFDO0lBQ2hCRyxJQUFJLENBQUNPLFVBQVUsQ0FBQ1QsR0FBRyxDQUFDO0lBQ3BCRSxJQUFJLENBQUNRLFVBQVUsQ0FBQ1QsR0FBRyxDQUFDO0VBQ3hCO0VBRUEsSUFBSSxDQUFDbkgsSUFBSSxJQUFJLENBQUNELEtBQUssSUFBSSxDQUFDRCxHQUFHLEVBQUU7SUFDekI7SUFDQSxJQUFJc0gsSUFBSSxHQUFHUCxHQUFHLEVBQUU7TUFDWk8sSUFBSSxDQUFDSyxPQUFPLENBQUNMLElBQUksQ0FBQ0osT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEM7RUFDSjtFQUVBLE9BQU9JLElBQUk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1ubkIsYUFBYSxHQUFHO0VBQ2xCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSTRuQixRQUFRLEVBQUUsSUFBSUMsR0FBRyxDQUFDLENBQUM7RUFFbkI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxLQUFLLEVBQUUsSUFBSTtFQUVYO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUMsUUFBUSxFQUFFLElBQUk7RUFFZDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLFlBQVksRUFBRSxtQkFBbUI7RUFFakM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxrQkFBa0IsRUFBRSx5QkFBeUI7RUFFN0M7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxvQkFBb0IsRUFBRSwyQkFBMkI7RUFFakQ7QUFDSjtBQUNBO0FBQ0E7RUFDSUMsU0FBUyxFQUFFO0lBQ1BDLFFBQVEsRUFBRSxpQ0FBaUM7SUFDM0N2SSxHQUFHLEVBQUUsMkJBQTJCO0lBQ2hDd0ksUUFBUSxFQUFFLGlDQUFpQztJQUMzQ0MsUUFBUSxFQUFFLGlDQUFpQztJQUMzQzFDLElBQUksRUFBRSw0QkFBNEI7SUFDbEMyQyxTQUFTLEVBQUUsa0NBQWtDO0lBQzdDQyxTQUFTLEVBQUUsa0NBQWtDO0lBQzdDM0MsTUFBTSxFQUFFLDhCQUE4QjtJQUN0QzRDLFdBQVcsRUFBRSxvQ0FBb0M7SUFDakRDLFdBQVcsRUFBRSxvQ0FBb0M7SUFDakQ1QyxNQUFNLEVBQUUsOEJBQThCO0lBQ3RDNkMsV0FBVyxFQUFFLG9DQUFvQztJQUNqREMsV0FBVyxFQUFFO0VBQ2pCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLFFBQVEsMDZCQU9QO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxTQUFTLEVBQUUsT0FBTztFQUVsQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLFlBQVksRUFBRSxZQUFZO0VBRTFCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUMsV0FBVyxFQUFFLFNBQVM7RUFFdEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxZQUFZLEVBQUU7SUFDVnhkLE1BQU0sRUFBRSxRQUFRO0lBQ2hCb1UsR0FBRyxFQUFFLEtBQUs7SUFDVnFKLElBQUksRUFBRSxNQUFNO0lBQ1p0RCxJQUFJLEVBQUUsTUFBTTtJQUNadUQsS0FBSyxFQUFFLE9BQU87SUFDZHRELE1BQU0sRUFBRSxRQUFRO0lBQ2hCdUQsT0FBTyxFQUFFLFNBQVM7SUFDbEJ0RCxNQUFNLEVBQUUsUUFBUTtJQUNoQnVELE9BQU8sRUFBRTtFQUNiLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTNkLFNBQVMsV0FBVEEsU0FBU0EsQ0FBQXpSLEtBQUEsRUFVRDtJQUFBLElBQUFFLElBQUEsR0FBQUYsS0FBQSxjQUFKLENBQUMsQ0FBQyxHQUFBQSxLQUFBO01BVEYrdEIsWUFBWSxHQUFBN3RCLElBQUEsQ0FBWjZ0QixZQUFZO01BQ1pDLGtCQUFrQixHQUFBOXRCLElBQUEsQ0FBbEI4dEIsa0JBQWtCO01BQ2xCRSxTQUFTLEdBQUFodUIsSUFBQSxDQUFUZ3VCLFNBQVM7TUFDVFUsUUFBUSxHQUFBMXVCLElBQUEsQ0FBUjB1QixRQUFRO01BQ1JDLFNBQVMsR0FBQTN1QixJQUFBLENBQVQydUIsU0FBUztNQUNUQyxZQUFZLEdBQUE1dUIsSUFBQSxDQUFaNHVCLFlBQVk7TUFDWkMsV0FBVyxHQUFBN3VCLElBQUEsQ0FBWDZ1QixXQUFXO01BQ1hDLFlBQVksR0FBQTl1QixJQUFBLENBQVo4dUIsWUFBWTtNQUNaemQsb0JBQW9CLEdBQUFyUixJQUFBLENBQXBCcVIsb0JBQW9CO0lBRXBCLElBQUl3YyxZQUFZLEVBQUU7TUFDZCxJQUFJLENBQUNBLFlBQVksR0FBR0EsWUFBWTtJQUNwQztJQUVBLElBQUlDLGtCQUFrQixFQUFFO01BQ3BCLElBQUksQ0FBQ0Esa0JBQWtCLEdBQUdBLGtCQUFrQjtJQUNoRDtJQUVBLElBQUlFLFNBQVMsRUFBRTtNQUNYLElBQUksQ0FBQ0EsU0FBUyxHQUFBdjVCLE1BQUEsQ0FBQXltQixNQUFBLEtBQVEsSUFBSSxDQUFDOFMsU0FBUyxFQUFLQSxTQUFTLENBQUU7SUFDeEQ7SUFFQSxJQUFJVSxRQUFRLEVBQUU7TUFDVixJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUTtJQUM1QjtJQUVBLElBQUlDLFNBQVMsRUFBRTtNQUNYLElBQUksQ0FBQ0EsU0FBUyxHQUFHQSxTQUFTO0lBQzlCO0lBRUEsSUFBSUMsWUFBWSxFQUFFO01BQ2QsSUFBSSxDQUFDQSxZQUFZLEdBQUdBLFlBQVk7SUFDcEM7SUFFQSxJQUFJQyxXQUFXLEVBQUU7TUFDYixJQUFJLENBQUNBLFdBQVcsR0FBR0EsV0FBVztJQUNsQztJQUVBLElBQUlDLFlBQVksRUFBRTtNQUNkLElBQUksQ0FBQ0EsWUFBWSxHQUFBcjZCLE1BQUEsQ0FBQXltQixNQUFBLEtBQVEsSUFBSSxDQUFDNFQsWUFBWSxFQUFLQSxZQUFZLENBQUU7SUFDakU7SUFFQSxJQUFJemQsb0JBQW9CLEVBQUU7TUFDdEIsSUFBSTtRQUNBLElBQU04ZCxJQUFJLEdBQUcxckIsSUFBSSxDQUFDc0gsS0FBSyxDQUFDc0csb0JBQW9CLENBQUM7UUFDN0MsSUFBTStkLEtBQUssR0FBRzM2QixNQUFNLENBQUM0NkIsSUFBSSxDQUFDRixJQUFJLENBQUNMLFlBQVksQ0FBQyxDQUFDbFgsTUFBTSxDQUFDLFVBQUMwWCxNQUFNLEVBQUUvMUIsR0FBRyxFQUFLO1VBQ2pFLElBQU1nMkIsUUFBUSxHQUFHaDJCLEdBQUcsQ0FBQ0osS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDaWpCLEdBQUcsQ0FBQyxDQUFDO1VBQ3JDO1VBQ0FrVCxNQUFNLENBQUNDLFFBQVEsQ0FBQyxHQUFHSixJQUFJLENBQUNMLFlBQVksQ0FBQ3YxQixHQUFHLENBQUM7VUFDekMsT0FBTysxQixNQUFNO1FBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVOLElBQUksQ0FBQ1IsWUFBWSxHQUFBcjZCLE1BQUEsQ0FBQXltQixNQUFBLEtBQVEsSUFBSSxDQUFDNFQsWUFBWSxFQUFLTSxLQUFLLENBQUU7TUFDMUQsQ0FBQyxDQUFDLE9BQU9oaEIsS0FBSyxFQUFFO1FBQ1o7TUFBQTtJQUVSO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJb0QsR0FBRyxXQUFIQSxHQUFHQSxDQUFDL1YsR0FBRyxFQUFFdXhCLElBQUksRUFBUztJQUFBLElBQUE3MEIsS0FBQTtJQUFBLElBQWI2MEIsSUFBSTtNQUFKQSxJQUFJLEdBQUcsSUFBSTtJQUFBO0lBQ2hCLElBQUl3QyxTQUFTLEdBQUd4QyxJQUFJLElBQUl2eEIsR0FBRyxDQUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQ2kxQixZQUFZLENBQUM7SUFDbkQsSUFBSTJCLFNBQVMsSUFBSSxPQUFPQSxTQUFTLEtBQUssUUFBUSxFQUFFQSxTQUFTLEdBQUdqRCxrQkFBa0IsQ0FBQ2lELFNBQVMsQ0FBQztJQUN6RixJQUFJLENBQUNBLFNBQVMsRUFBRTtJQUNoQi96QixHQUFHLENBQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDaTFCLFlBQVksRUFBRTJCLFNBQVMsQ0FBQyxDQUFDeHRCLElBQUksQ0FBQyxJQUFJLENBQUMwc0IsUUFBUSxDQUFDLENBQ3JEL3pCLEdBQUcsQ0FBQyxDQUFDLENBQUNtWCxPQUFPLENBQUMsVUFBQUssRUFBRTtNQUFBLE9BQUloYSxLQUFJLENBQUNzMUIsUUFBUSxDQUFDamMsR0FBRyxDQUFDVyxFQUFFLENBQUM7SUFBQSxFQUFDO0lBQy9DLElBQUksQ0FBQ3NkLE9BQU8sQ0FBQ2gwQixHQUFHLENBQUM7SUFDakIsSUFBSSxDQUFDaTBCLEtBQUssQ0FBQyxDQUFDO0VBQ2hCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lELE9BQU8sV0FBUEEsT0FBT0EsQ0FBQ2gwQixHQUFHLEVBQUU7SUFBQSxJQUFBWSxNQUFBO0lBQ1QsSUFBSSxDQUFDcVEsTUFBTSxDQUFDaWpCLG9CQUFvQixFQUFFO01BQzlCO01BQ0FsMEIsR0FBRyxDQUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQ2sxQixrQkFBa0IsRUFBRSxJQUFJLENBQUM7TUFDdkM7SUFDSixDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ0YsUUFBUSxFQUFFO01BQ3ZCO01BQ0EsSUFBSSxDQUFDQSxRQUFRLEdBQUcsSUFBSStCLG9CQUFvQixDQUFDLFVBQUFyVyxPQUFPLEVBQUk7UUFDaERBLE9BQU8sQ0FBQ3hILE9BQU8sQ0FBQyxVQUFBOGQsS0FBSyxFQUFJO1VBQ3JCNzNCLENBQUMsQ0FBQzYzQixLQUFLLENBQUNuMkIsTUFBTSxDQUFDLENBQUNiLElBQUksQ0FBQ3lELE1BQUksQ0FBQ3l4QixrQkFBa0IsRUFBRThCLEtBQUssQ0FBQ0MsY0FBYyxDQUFDO1VBQ25FO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQyxFQUFFO1FBQ0NDLElBQUksRUFBRSxJQUFJO1FBQUU7UUFDWkMsU0FBUyxFQUFFLENBQUMsQ0FBRTtNQUNsQixDQUFDLENBQUM7SUFDTjtJQUVBdDBCLEdBQUcsQ0FBQ2QsR0FBRyxDQUFDLENBQUMsQ0FBQ21YLE9BQU8sQ0FBQyxVQUFBSyxFQUFFO01BQUEsT0FBSTlWLE1BQUksQ0FBQ3V4QixRQUFRLENBQUM2QixPQUFPLENBQUN0ZCxFQUFFLENBQUM7SUFBQSxFQUFDO0VBQ3RELENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0k2ZCxTQUFTLFdBQVRBLFNBQVNBLENBQUM3ZCxFQUFFLEVBQUU7SUFDVixJQUFJLElBQUksQ0FBQ3liLFFBQVEsRUFBRTtNQUNmLElBQUksQ0FBQ0EsUUFBUSxDQUFDb0MsU0FBUyxDQUFDN2QsRUFBRSxDQUFDO01BQzNCO0lBQ0o7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0k4ZCxtQkFBbUIsV0FBbkJBLG1CQUFtQkEsQ0FBQ3gwQixHQUFHLEVBQUU7SUFDckIsT0FBT0EsR0FBRyxDQUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQ2sxQixrQkFBa0IsQ0FBQyxJQUFJcnlCLEdBQUcsQ0FBQ2pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7RUFDbEUsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lrMkIsS0FBSyxXQUFMQSxLQUFLQSxDQUFBLEVBQUc7SUFBQSxJQUFBMXlCLE1BQUE7SUFDSixJQUFJLENBQUMsSUFBSSxDQUFDMndCLEtBQUssSUFBSSxJQUFJLENBQUNGLFFBQVEsQ0FBQ3lDLElBQUksR0FBRyxDQUFDLEVBQUU7TUFDdkMsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQztNQUNWLElBQUksQ0FBQ3hDLEtBQUssR0FBR2p1QixXQUFXLENBQUM7UUFBQSxPQUFNMUMsTUFBSSxDQUFDbXpCLEdBQUcsQ0FBQyxDQUFDO01BQUEsR0FBRSxJQUFJLENBQUM7SUFDcEQ7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSUMsSUFBSSxXQUFKQSxJQUFJQSxDQUFBLEVBQUc7SUFDSDV3QixhQUFhLENBQUMsSUFBSSxDQUFDbXVCLEtBQUssQ0FBQztJQUN6QixJQUFJLENBQUNBLEtBQUssR0FBRyxJQUFJO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDeUMsVUFBVSxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDekMsUUFBUSxHQUFHLElBQUk7SUFDcEI7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSXVDLEdBQUcsV0FBSEEsR0FBR0EsQ0FBQSxFQUFHO0lBQUEsSUFBQXh4QixNQUFBO0lBQ0YsSUFBSSxDQUFDOHVCLFFBQVEsQ0FBQzNiLE9BQU8sQ0FBQyxVQUFBSyxFQUFFLEVBQUk7TUFDeEI7TUFDQSxJQUFJLENBQUM1VixRQUFRLENBQUMrekIsSUFBSSxDQUFDQyxRQUFRLENBQUNwZSxFQUFFLENBQUMsRUFBRTtRQUM3QnhULE1BQUksQ0FBQzh1QixRQUFRLFVBQU8sQ0FBQ3RiLEVBQUUsQ0FBQztRQUN4QnhULE1BQUksQ0FBQ3F4QixTQUFTLENBQUM3ZCxFQUFFLENBQUM7UUFDbEI7TUFDSjtNQUVBLElBQU0xVyxHQUFHLEdBQUcxRCxDQUFDLENBQUNvYSxFQUFFLENBQUM7TUFDakIsSUFBTTZhLElBQUksR0FBR3Z4QixHQUFHLENBQUM3QyxJQUFJLENBQUMrRixNQUFJLENBQUNrdkIsWUFBWSxDQUFDOztNQUV4QztNQUNBLElBQUksQ0FBQ2IsSUFBSSxJQUFJLENBQUNydUIsTUFBSSxDQUFDc3hCLG1CQUFtQixDQUFDeDBCLEdBQUcsQ0FBQyxFQUFFO1FBQ3pDO01BQ0o7TUFFQSxJQUFNZ3hCLEdBQUcsR0FBRyxJQUFJM0IsSUFBSSxDQUFDLENBQUM7TUFFdEIsSUFBSWtDLElBQUksSUFBSVAsR0FBRyxFQUFFO1FBQ2I7UUFDQWh4QixHQUFHLENBQUNnQixRQUFRLENBQUNrQyxNQUFJLENBQUNpd0IsWUFBWSxDQUFDO1FBQy9CandCLE1BQUksQ0FBQzh1QixRQUFRLFVBQU8sQ0FBQ3RiLEVBQUUsQ0FBQztRQUN4QnhULE1BQUksQ0FBQ3F4QixTQUFTLENBQUM3ZCxFQUFFLENBQUM7UUFDbEI7TUFDSjs7TUFFQTtNQUNBLElBQU1xZSxJQUFJLEdBQUd4RCxJQUFJLEdBQUdQLEdBQUc7TUFDdkIsSUFBTXNDLElBQUksR0FBRy9hLElBQUksQ0FBQ3ljLEtBQUssQ0FBQ0QsSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO01BQ3JELElBQU14QixLQUFLLEdBQUdoYixJQUFJLENBQUN5YyxLQUFLLENBQUVELElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO01BQzNFLElBQU12QixPQUFPLEdBQUdqYixJQUFJLENBQUN5YyxLQUFLLENBQUVELElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFLLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztNQUNuRSxJQUFNdEIsT0FBTyxHQUFHbGIsSUFBSSxDQUFDeWMsS0FBSyxDQUFFRCxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFJLElBQUksQ0FBQztNQUV2RCxJQUFNRSxTQUFTLEdBQUdqMUIsR0FBRyxDQUFDckQsSUFBSSxDQUFDdUcsTUFBSSxDQUFDcXZCLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDO01BQ25ELElBQU0wQyxJQUFJLEdBQUdsMUIsR0FBRyxDQUFDckQsSUFBSSxDQUFDdUcsTUFBSSxDQUFDcXZCLFNBQVMsQ0FBQ3RJLEdBQUcsQ0FBQztNQUN6QyxJQUFNa0wsU0FBUyxHQUFHbjFCLEdBQUcsQ0FBQ3JELElBQUksQ0FBQ3VHLE1BQUksQ0FBQ3F2QixTQUFTLENBQUNFLFFBQVEsQ0FBQztNQUNuRCxJQUFNMkMsU0FBUyxHQUFHcDFCLEdBQUcsQ0FBQ3JELElBQUksQ0FBQ3VHLE1BQUksQ0FBQ3F2QixTQUFTLENBQUNHLFFBQVEsQ0FBQztNQUNuRCxJQUFNMkMsS0FBSyxHQUFHcjFCLEdBQUcsQ0FBQ3JELElBQUksQ0FBQ3VHLE1BQUksQ0FBQ3F2QixTQUFTLENBQUN2QyxJQUFJLENBQUM7TUFDM0MsSUFBTXNGLFVBQVUsR0FBR3QxQixHQUFHLENBQUNyRCxJQUFJLENBQUN1RyxNQUFJLENBQUNxdkIsU0FBUyxDQUFDSSxTQUFTLENBQUM7TUFDckQsSUFBTTRDLFVBQVUsR0FBR3YxQixHQUFHLENBQUNyRCxJQUFJLENBQUN1RyxNQUFJLENBQUNxdkIsU0FBUyxDQUFDSyxTQUFTLENBQUM7TUFDckQsSUFBTTRDLE9BQU8sR0FBR3gxQixHQUFHLENBQUNyRCxJQUFJLENBQUN1RyxNQUFJLENBQUNxdkIsU0FBUyxDQUFDdEMsTUFBTSxDQUFDO01BQy9DLElBQU13RixZQUFZLEdBQUd6MUIsR0FBRyxDQUFDckQsSUFBSSxDQUFDdUcsTUFBSSxDQUFDcXZCLFNBQVMsQ0FBQ00sV0FBVyxDQUFDO01BQ3pELElBQU02QyxZQUFZLEdBQUcxMUIsR0FBRyxDQUFDckQsSUFBSSxDQUFDdUcsTUFBSSxDQUFDcXZCLFNBQVMsQ0FBQ08sV0FBVyxDQUFDO01BQ3pELElBQU02QyxPQUFPLEdBQUczMUIsR0FBRyxDQUFDckQsSUFBSSxDQUFDdUcsTUFBSSxDQUFDcXZCLFNBQVMsQ0FBQ3JDLE1BQU0sQ0FBQztNQUMvQyxJQUFNMEYsWUFBWSxHQUFHNTFCLEdBQUcsQ0FBQ3JELElBQUksQ0FBQ3VHLE1BQUksQ0FBQ3F2QixTQUFTLENBQUNRLFdBQVcsQ0FBQztNQUN6RCxJQUFNOEMsWUFBWSxHQUFHNzFCLEdBQUcsQ0FBQ3JELElBQUksQ0FBQ3VHLE1BQUksQ0FBQ3F2QixTQUFTLENBQUNTLFdBQVcsQ0FBQztNQUV6RCxJQUFNSyxZQUFZLEdBQUFyNkIsTUFBQSxDQUFBeW1CLE1BQUEsS0FBUXZjLE1BQUksQ0FBQ213QixZQUFZLEVBQUtyekIsR0FBRyxDQUFDN0MsSUFBSSxDQUFDK0YsTUFBSSxDQUFDb3ZCLG9CQUFvQixDQUFDLENBQUU7TUFFckZ0eUIsR0FBRyxDQUFDZ0IsUUFBUSxDQUFDa0MsTUFBSSxDQUFDa3dCLFdBQVcsQ0FBQztNQUM5QjZCLFNBQVMsQ0FBQzF1QixJQUFJLENBQUM4c0IsWUFBWSxDQUFDeGQsTUFBTSxDQUFDO01BQ25Dc2YsU0FBUyxDQUFDOTFCLElBQUksQ0FBQ2kwQixJQUFJLENBQUM7TUFDcEI4QixTQUFTLENBQUM3dUIsSUFBSSxDQUFDK3NCLElBQUksS0FBSyxDQUFDLEdBQUdELFlBQVksQ0FBQ3BKLEdBQUcsR0FBR29KLFlBQVksQ0FBQ0MsSUFBSSxDQUFDO01BQ2pFNEIsSUFBSSxDQUFDWSxXQUFXLENBQUM1eUIsTUFBSSxDQUFDZ3dCLFNBQVMsRUFBRUksSUFBSSxLQUFLLENBQUMsQ0FBQztNQUM1Q2dDLFVBQVUsQ0FBQ2oyQixJQUFJLENBQUNrMEIsS0FBSyxDQUFDO01BQ3RCZ0MsVUFBVSxDQUFDaHZCLElBQUksQ0FBQ2d0QixLQUFLLEtBQUssQ0FBQyxHQUFHRixZQUFZLENBQUNyRCxJQUFJLEdBQUdxRCxZQUFZLENBQUNFLEtBQUssQ0FBQztNQUNyRThCLEtBQUssQ0FBQ1MsV0FBVyxDQUFDNXlCLE1BQUksQ0FBQ2d3QixTQUFTLEVBQUVJLElBQUksS0FBSyxDQUFDLElBQUlDLEtBQUssS0FBSyxDQUFDLENBQUM7TUFDNURrQyxZQUFZLENBQUNwMkIsSUFBSSxDQUFDbTBCLE9BQU8sQ0FBQztNQUMxQmtDLFlBQVksQ0FBQ252QixJQUFJLENBQUNpdEIsT0FBTyxLQUFLLENBQUMsR0FBR0gsWUFBWSxDQUFDcEQsTUFBTSxHQUFHb0QsWUFBWSxDQUFDRyxPQUFPLENBQUM7TUFDN0VnQyxPQUFPLENBQUNNLFdBQVcsQ0FBQzV5QixNQUFJLENBQUNnd0IsU0FBUyxFQUFFSSxJQUFJLEtBQUssQ0FBQyxJQUFJQyxLQUFLLEtBQUssQ0FBQyxJQUFJQyxPQUFPLEtBQUssQ0FBQyxDQUFDO01BQy9Fb0MsWUFBWSxDQUFDdjJCLElBQUksQ0FBQ28wQixPQUFPLENBQUM7TUFDMUJvQyxZQUFZLENBQUN0dkIsSUFBSSxDQUFDa3RCLE9BQU8sS0FBSyxDQUFDLEdBQUdKLFlBQVksQ0FBQ25ELE1BQU0sR0FBR21ELFlBQVksQ0FBQ0ksT0FBTyxDQUFDO01BQzdFa0MsT0FBTyxDQUFDRyxXQUFXLENBQUM1eUIsTUFBSSxDQUFDZ3dCLFNBQVMsRUFBRUksSUFBSSxLQUFLLENBQUMsSUFBSUMsS0FBSyxLQUFLLENBQUMsSUFBSUMsT0FBTyxLQUFLLENBQUMsSUFBSUMsT0FBTyxLQUFLLENBQUMsQ0FBQztJQUNwRyxDQUFDLENBQUM7SUFFRixJQUFJLElBQUksQ0FBQ3pCLFFBQVEsQ0FBQ3lDLElBQUksS0FBSyxDQUFDLEVBQUU7TUFDMUIsSUFBSSxDQUFDRSxJQUFJLENBQUMsQ0FBQztJQUNmO0VBQ0o7QUFDSixDQUFDO0FBRUQsaUVBQWV2cUIsYUFBYSxFOzs7Ozs7Ozs7Ozs7OztBQzVqQnJCLElBQU0yckIsWUFBWSxHQUFHO0VBQ3hCQyxNQUFNLEVBQUUsRUFBRTtFQUNWQyxLQUFLLEVBQUUsRUFBRTtFQUNUQyxJQUFJLEVBQUUsRUFBRTtFQUNSQyxFQUFFLEVBQUUsRUFBRTtFQUNOQyxLQUFLLEVBQUUsRUFBRTtFQUNUQyxJQUFJLEVBQUU7QUFDVixDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVQMEM7QUFFM0MsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBSUMsY0FBYyxFQUFFQyxPQUFPLEVBQUs7RUFDckRELGNBQWMsQ0FBQ2hpQixJQUFJLENBQUMsVUFBQ2tpQixHQUFHLEVBQUVDLElBQUksRUFBSztJQUMvQixJQUFNQyxLQUFLLEdBQUd0NkIsQ0FBQyxDQUFDcTZCLElBQUksQ0FBQztJQUNyQixJQUFJRCxHQUFHLEtBQUtELE9BQU8sRUFBRTtNQUNqQkcsS0FBSyxDQUFDNTNCLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUNrUixJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztNQUN4RDtJQUNKO0lBRUEwbUIsS0FBSyxDQUFDNTNCLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUNrUixJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDNU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUN2RXMxQixLQUFLLENBQUN0MUIsT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsSUFBTXUxQiwyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQTJCQSxDQUFJQyxXQUFXLEVBQUVDLFVBQVUsRUFBSztFQUM3RCxRQUFRLElBQUk7SUFDWixLQUFLQSxVQUFVLEdBQUdELFdBQVc7TUFBRSxPQUFPLENBQUM7SUFDdkMsS0FBS0MsVUFBVSxHQUFHLENBQUM7TUFBRSxPQUFPRCxXQUFXO0lBQ3ZDO01BQVMsT0FBT0MsVUFBVTtFQUMxQjtBQUNKLENBQUM7QUFFRCxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFHUixjQUFjO0VBQUEsT0FBSSxVQUFBcitCLENBQUMsRUFBSTtJQUM3QyxJQUFROCtCLE9BQU8sR0FBSzkrQixDQUFDLENBQWI4K0IsT0FBTztJQUNmLElBQU1SLE9BQU8sR0FBR0QsY0FBYyxDQUFDcHJCLEtBQUssQ0FBQ2pULENBQUMsQ0FBQzhFLGFBQWEsQ0FBQztJQUNyRCxJQUFNaTZCLHFCQUFxQixHQUFHVixjQUFjLENBQUM3OEIsTUFBTSxHQUFHLENBQUM7SUFFdkQsSUFBSVgsTUFBTSxDQUFDa2lCLE1BQU0sQ0FBQzZhLG9EQUFZLENBQUMsQ0FBQ3Z6QixRQUFRLENBQUN5MEIsT0FBTyxDQUFDLEVBQUU7TUFDL0M5K0IsQ0FBQyxDQUFDNEUsY0FBYyxDQUFDLENBQUM7TUFDbEI1RSxDQUFDLENBQUNnL0IsZUFBZSxDQUFDLENBQUM7SUFDdkI7SUFFQSxRQUFRRixPQUFPO01BQ2YsS0FBS2xCLG9EQUFZLENBQUNHLElBQUk7TUFDdEIsS0FBS0gsb0RBQVksQ0FBQ0ksRUFBRTtRQUFFO1VBQ2xCLElBQU1pQixXQUFXLEdBQUdQLDJCQUEyQixDQUFDSyxxQkFBcUIsRUFBRVQsT0FBTyxHQUFHLENBQUMsQ0FBQztVQUNuRkQsY0FBYyxDQUFDdDNCLEdBQUcsQ0FBQ2s0QixXQUFXLENBQUMsQ0FBQzkxQixPQUFPLENBQUMsT0FBTyxDQUFDO1VBQ2hEaTFCLG1CQUFtQixDQUFDQyxjQUFjLEVBQUVDLE9BQU8sR0FBRyxDQUFDLENBQUM7VUFDaEQ7UUFDSjtNQUNBLEtBQUtWLG9EQUFZLENBQUNLLEtBQUs7TUFDdkIsS0FBS0wsb0RBQVksQ0FBQ00sSUFBSTtRQUFFO1VBQ3BCLElBQU1nQixXQUFXLEdBQUdSLDJCQUEyQixDQUFDSyxxQkFBcUIsRUFBRVQsT0FBTyxHQUFHLENBQUMsQ0FBQztVQUNuRkQsY0FBYyxDQUFDdDNCLEdBQUcsQ0FBQ200QixXQUFXLENBQUMsQ0FBQy8xQixPQUFPLENBQUMsT0FBTyxDQUFDO1VBQ2hEaTFCLG1CQUFtQixDQUFDQyxjQUFjLEVBQUVDLE9BQU8sR0FBRyxDQUFDLENBQUM7VUFDaEQ7UUFDSjtNQUVBO1FBQVM7SUFDVDtFQUNKLENBQUM7QUFBQTtBQUVELGlFQUFlLFVBQUNhLFVBQVUsRUFBRUMsWUFBWSxFQUFLO0VBQ3pDLElBQU1DLGVBQWUsR0FBR0YsVUFBVSxDQUFDMzZCLElBQUksQ0FBQzQ2QixZQUFZLENBQUM7RUFFckRELFVBQVUsQ0FBQ3o2QixFQUFFLENBQUMsU0FBUyxFQUFFMDZCLFlBQVksRUFBRVAsaUJBQWlCLENBQUNRLGVBQWUsQ0FBQyxDQUFDO0FBQzlFLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REQ7QUFDMEM7QUFFMUMsSUFBTUMsZUFBZSxHQUFHO0VBQ3BCQyxVQUFVLEVBQUUsWUFBWTtFQUN4QkMsVUFBVSxFQUFFLFlBQVk7RUFDeEJDLFlBQVksRUFBRSxjQUFjO0VBQzVCQyxjQUFjLEVBQUUsZ0JBQWdCO0VBQ2hDQyxRQUFRLEVBQUUsVUFBVTtFQUNwQkMsSUFBSSxFQUFFLE1BQU07RUFDWkMsVUFBVSxFQUFFLFlBQVk7RUFDeEJDLGFBQWEsRUFBRSxlQUFlO0VBQzlCQyxTQUFTLEVBQUUsV0FBVztFQUN0QkMsTUFBTSxFQUFFLFFBQVE7RUFDaEJDLFlBQVksRUFBRTtBQUNsQixDQUFDO0FBRU0sU0FBU0MscUJBQXFCQSxDQUFDQyxvQkFBb0IsRUFBRTtFQUFBLElBQUE1N0IsS0FBQTtFQUN4RCxPQUFPLFVBQUN3VyxHQUFHLEVBQUUzQixRQUFRLEVBQUs7SUFDdEIsSUFBTWduQixjQUFjLEdBQUdobkIsUUFBUSxDQUFDcFUsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUMxQyxJQUFNcTdCLGlCQUFpQixHQUFHam5CLFFBQVEsQ0FBQ2tuQixPQUFPLElBQUksQ0FBQyxDQUFDO0lBRWhELzdCLEtBQUksQ0FBQ2thLHVCQUF1QixDQUFDMmhCLGNBQWMsQ0FBQztJQUM1QyxJQUFJRCxvQkFBb0IsRUFBRTtNQUN0QjU3QixLQUFJLENBQUNtYSxVQUFVLENBQUMwaEIsY0FBYyxFQUFFQyxpQkFBaUIsQ0FBQztJQUN0RCxDQUFDLE1BQU07TUFDSDk3QixLQUFJLENBQUNvVCw2QkFBNkIsQ0FBQ3lvQixjQUFjLENBQUM7SUFDdEQ7RUFDSixDQUFDO0FBQ0w7QUFBQyxJQUVvQkcsa0JBQWtCO0VBQ25DLFNBQUFBLG1CQUFZdDBCLE1BQU0sRUFBRW9OLE9BQU8sRUFBRTtJQUFBLElBQUE1USxNQUFBO0lBQ3pCLElBQUksQ0FBQ3dELE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNvTixPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDbW5CLG1CQUFtQixDQUFDLENBQUM7SUFDMUI7SUFDQSxJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRXJCdDhCLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDa1ksSUFBSSxDQUFDLFVBQUNxa0IsRUFBRSxFQUFFNytCLEtBQUssRUFBSztNQUM5QyxJQUFNb1ksSUFBSSxHQUFHcFksS0FBSyxDQUFDcVksWUFBWSxDQUFDLHdCQUF3QixDQUFDO01BRXpEelIsTUFBSSxDQUFDazRCLDZCQUE2QixDQUFDOStCLEtBQUssRUFBRW9ZLElBQUksQ0FBQztJQUNuRCxDQUFDLENBQUM7RUFDTjtFQUFDLElBQUE1VixNQUFBLEdBQUFrOEIsa0JBQUEsQ0FBQTcvQixTQUFBO0VBQUEyRCxNQUFBLENBRURzOEIsNkJBQTZCLEdBQTdCLFNBQUFBLDZCQUE2QkEsQ0FBQ0MsY0FBYyxFQUFFQyxXQUFXLEVBQUU7SUFDdkQsUUFBUUEsV0FBVztNQUNuQixLQUFLdkIsZUFBZSxDQUFDUyxTQUFTO01BQzlCLEtBQUtULGVBQWUsQ0FBQ1UsTUFBTTtRQUFFO1VBQ3pCN0IsdURBQWdCLENBQUNoNkIsQ0FBQyxDQUFDeThCLGNBQWMsQ0FBQyxFQUFFLGNBQWMsQ0FBQztVQUNuRDtRQUNKO01BRUE7UUFBUztJQUNUO0VBQ0o7O0VBRUE7QUFDSjtBQUNBLEtBRkk7RUFBQXY4QixNQUFBLENBR0FtOEIsbUJBQW1CLEdBQW5CLFNBQUFBLG1CQUFtQkEsQ0FBQSxFQUFHO0lBQUEsSUFBQXAzQixNQUFBO0lBQ2xCakYsQ0FBQyxDQUFDLDhDQUE4QyxFQUFFLElBQUksQ0FBQzhILE1BQU0sQ0FBQyxDQUFDb1EsSUFBSSxDQUFDLFVBQUM3YixDQUFDLEVBQUVzZ0MsS0FBSyxFQUFLO01BQzlFLElBQU1DLE1BQU0sR0FBRzU4QixDQUFDLENBQUMyOEIsS0FBSyxDQUFDOztNQUV2QjtNQUNBLElBQUlDLE1BQU0sQ0FBQ2w2QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUttUyxTQUFTLEVBQUU7UUFDekMrbkIsTUFBTSxDQUFDcjhCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBTTtVQUNyQixJQUFJcThCLE1BQU0sQ0FBQy83QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQy9CKzdCLE1BQU0sQ0FBQ2hwQixJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztZQUM3QmdwQixNQUFNLENBQUMvN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7WUFFM0IrN0IsTUFBTSxDQUFDNTNCLE9BQU8sQ0FBQyxRQUFRLENBQUM7VUFDNUIsQ0FBQyxNQUFNO1lBQ0g0M0IsTUFBTSxDQUFDLzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1VBQzlCO1VBRUFvRSxNQUFJLENBQUNvM0IsbUJBQW1CLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUM7TUFDTjtNQUVBTyxNQUFNLENBQUNsNkIsSUFBSSxDQUFDLFlBQVksRUFBRWs2QixNQUFNLENBQUNocEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQztFQUNOOztFQUVBO0FBQ0o7QUFDQTtBQUNBLEtBSEk7RUFBQTFULE1BQUEsQ0FJQW9hLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUN6WixJQUFJLEVBQUU7SUFBQSxJQUFBK0YsTUFBQTtJQUMxQixJQUFNZ1IsUUFBUSxHQUFHL1csSUFBSSxDQUFDZzhCLHFCQUFxQjtJQUMzQyxJQUFNQyxVQUFVLEdBQUdqOEIsSUFBSSxDQUFDazhCLG1CQUFtQjtJQUMzQyxJQUFNQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM5bkIsT0FBTyxDQUFDOG5CLHdCQUF3QjtJQUN0RSxJQUFJQyxpQkFBaUIsR0FBR3A4QixJQUFJLENBQUNxOEIsb0JBQW9CO0lBRWpELElBQUl0bEIsUUFBUSxLQUFLLGFBQWEsSUFBSUEsUUFBUSxLQUFLLGNBQWMsRUFBRTtNQUMzRDtJQUNKO0lBRUEsSUFBSXFsQixpQkFBaUIsRUFBRTtNQUNuQkEsaUJBQWlCLFVBQVFBLGlCQUFpQixNQUFHO0lBQ2pELENBQUMsTUFBTTtNQUNIQSxpQkFBaUIsVUFBUUQsd0JBQXdCLE1BQUc7SUFDeEQ7SUFFQWg5QixDQUFDLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDOEgsTUFBTSxDQUFDLENBQUNvUSxJQUFJLENBQUMsVUFBQzdiLENBQUMsRUFBRThnQyxTQUFTLEVBQUs7TUFDcEUsSUFBTUMsVUFBVSxHQUFHcDlCLENBQUMsQ0FBQ205QixTQUFTLENBQUM7TUFDL0IsSUFBTUUsTUFBTSxHQUFHbEosUUFBUSxDQUFDaUosVUFBVSxDQUFDdjhCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUdyRSxJQUFJaThCLFVBQVUsQ0FBQzdzQixPQUFPLENBQUNvdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDbkN6MkIsTUFBSSxDQUFDMDJCLGVBQWUsQ0FBQ0YsVUFBVSxFQUFFeGxCLFFBQVEsRUFBRXFsQixpQkFBaUIsQ0FBQztNQUNqRSxDQUFDLE1BQU07UUFDSHIyQixNQUFJLENBQUMyMkIsZ0JBQWdCLENBQUNILFVBQVUsRUFBRXhsQixRQUFRLEVBQUVxbEIsaUJBQWlCLENBQUM7TUFDbEU7SUFDSixDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0EsS0FGSTtFQUFBLzhCLE1BQUEsQ0FHQW84QixjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQSxFQUFHO0lBQ2IsSUFBSTNuQixNQUFNLENBQUM2b0IsUUFBUSxDQUFDQyxJQUFJLElBQUk5b0IsTUFBTSxDQUFDNm9CLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDeHRCLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDckUsSUFBTXl0QixVQUFVLEdBQUcxOUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDMjlCLEdBQUcsYUFBV2hwQixNQUFNLENBQUM2b0IsUUFBUSxDQUFDQyxJQUFJLE9BQUksQ0FBQztNQUNyRSxJQUFNRyxXQUFXLEdBQUc1OUIsQ0FBQyxNQUFJMlUsTUFBTSxDQUFDNm9CLFFBQVEsQ0FBQ0MsSUFBTSxDQUFDO01BRWhELElBQUlDLFVBQVUsQ0FBQ3JnQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZCcWdDLFVBQVUsQ0FBQ3I5QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQ2xCd0UsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUN4Qjg0QixHQUFHLGFBQVdocEIsTUFBTSxDQUFDNm9CLFFBQVEsQ0FBQ0MsSUFBSSxPQUFJLENBQUMsQ0FDdkMvNEIsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUUxQms1QixXQUFXLENBQUNsNUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUM1QjRTLFFBQVEsQ0FBQyxDQUFDLENBQ1Z6UyxXQUFXLENBQUMsV0FBVyxDQUFDO01BQ2pDO0lBQ0o7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMSTtFQUFBM0UsTUFBQSxDQU1BZ1QsWUFBWSxHQUFaLFNBQUFBLFlBQVlBLENBQUNwTCxNQUFNLEVBQUU7SUFDakIsT0FBTztNQUNIa3BCLFlBQVksRUFBRTtRQUNWdlYsSUFBSSxFQUFFemIsQ0FBQyxDQUFDLGlCQUFpQixFQUFFOEgsTUFBTSxDQUFDO1FBQ2xDNFQsS0FBSyxFQUFFMWIsQ0FBQyxDQUFDLCtCQUErQixFQUFFOEgsTUFBTTtNQUNwRCxDQUFDO01BQ0RxcEIsZUFBZSxFQUFFO1FBQ2IxVixJQUFJLEVBQUV6YixDQUFDLENBQUMsb0JBQW9CLEVBQUU4SCxNQUFNLENBQUM7UUFDckM0VCxLQUFLLEVBQUUxYixDQUFDLENBQUMsa0NBQWtDLEVBQUU4SCxNQUFNO01BQ3ZELENBQUM7TUFDRCsxQixVQUFVLEVBQUU7UUFDUnBpQixJQUFJLEVBQUV6YixDQUFDLENBQUMscUJBQXFCLEVBQUU4SCxNQUFNLENBQUM7UUFDdEM0VCxLQUFLLEVBQUUxYixDQUFDLENBQUMsNkJBQTZCLEVBQUU4SCxNQUFNO01BQ2xELENBQUM7TUFDRGcyQixhQUFhLEVBQUU7UUFDWHJpQixJQUFJLEVBQUV6YixDQUFDLENBQUMsd0JBQXdCLEVBQUU4SCxNQUFNLENBQUM7UUFDekM0VCxLQUFLLEVBQUUxYixDQUFDLENBQUMsc0NBQXNDLEVBQUU4SCxNQUFNO01BQzNELENBQUM7TUFDRGkyQixjQUFjLEVBQUU7UUFDWnRpQixJQUFJLEVBQUV6YixDQUFDLENBQUMsMEJBQTBCLEVBQUU4SCxNQUFNLENBQUM7UUFDM0M0VCxLQUFLLEVBQUUxYixDQUFDLENBQUMsd0NBQXdDLEVBQUU4SCxNQUFNO01BQzdELENBQUM7TUFDRGsyQixpQkFBaUIsRUFBRTtRQUNmdmlCLElBQUksRUFBRXpiLENBQUMsQ0FBQyw2QkFBNkIsRUFBRThILE1BQU0sQ0FBQztRQUM5QzRULEtBQUssRUFBRTFiLENBQUMsQ0FBQywyQ0FBMkMsRUFBRThILE1BQU07TUFDaEUsQ0FBQztNQUNEbTJCLFVBQVUsRUFBRTtRQUNSeGlCLElBQUksRUFBRXpiLENBQUMsQ0FBQyx3QkFBd0IsRUFBRThILE1BQU0sQ0FBQztRQUN6QzRULEtBQUssRUFBRTFiLENBQUMsQ0FBQyw0QkFBNEIsRUFBRThILE1BQU07TUFDakQsQ0FBQztNQUNEbzJCLGFBQWEsRUFBRTtRQUNYeGlCLEtBQUssRUFBRTFiLENBQUMsQ0FBQyxrQkFBa0IsRUFBRThILE1BQU07TUFDdkMsQ0FBQztNQUNEcTJCLFVBQVUsRUFBRTtRQUNSemlCLEtBQUssRUFBRTFiLENBQUMsQ0FBQyxjQUFjLEVBQUU4SCxNQUFNO01BQ25DLENBQUM7TUFDRHMyQixPQUFPLEVBQUVwK0IsQ0FBQyxDQUFDLHlDQUF5QyxFQUFFOEgsTUFBTSxDQUFDO01BQzdEdTJCLFdBQVcsRUFBRXIrQixDQUFDLENBQUMsZ0NBQWdDLEVBQUU4SCxNQUFNLENBQUM7TUFDeER3MkIsVUFBVSxFQUFFdCtCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRThILE1BQU0sQ0FBQztNQUMvQ3kyQixjQUFjLEVBQUV2K0IsQ0FBQyxDQUFDLDBCQUEwQixFQUFFOEgsTUFBTSxDQUFDO01BQ3JEMDJCLGtCQUFrQixFQUFFeCtCLENBQUMsQ0FBQywyQ0FBMkMsRUFBRThILE1BQU0sQ0FBQztNQUMxRTIyQixLQUFLLEVBQUU7UUFDSHpELFVBQVUsRUFBRWg3QixDQUFDLENBQUMsb0JBQW9CLEVBQUU4SCxNQUFNLENBQUM7UUFDM0M0MkIsTUFBTSxFQUFFMStCLENBQUMsQ0FBQyxzQkFBc0IsRUFBRThILE1BQU07TUFDNUMsQ0FBQztNQUNENjJCLEdBQUcsRUFBRTtRQUNEelQsTUFBTSxFQUFFbHJCLENBQUMsQ0FBQyxjQUFjLEVBQUU4SCxNQUFNLENBQUM7UUFDakN5akIsTUFBTSxFQUFFdnJCLENBQUMsQ0FBQyxvQkFBb0IsRUFBRThILE1BQU07TUFDMUMsQ0FBQztNQUNEODJCLEdBQUcsRUFBRTtRQUNEMVQsTUFBTSxFQUFFbHJCLENBQUMsQ0FBQyxjQUFjLEVBQUU4SCxNQUFNLENBQUM7UUFDakN5akIsTUFBTSxFQUFFdnJCLENBQUMsQ0FBQyxvQkFBb0IsRUFBRThILE1BQU07TUFDMUMsQ0FBQztNQUNEKzJCLFFBQVEsRUFBRTtRQUNOeGMsS0FBSyxFQUFFcmlCLENBQUMsQ0FBQyxpQkFBaUIsRUFBRThILE1BQU0sQ0FBQztRQUNuQzQyQixNQUFNLEVBQUUxK0IsQ0FBQyxDQUFDLGtCQUFrQixFQUFFOEgsTUFBTTtNQUN4QyxDQUFDO01BQ0RnM0IsWUFBWSxFQUFFOStCLENBQUMsQ0FBQywrQkFBK0IsRUFBRThILE1BQU0sQ0FBQztNQUN4RGkzQixjQUFjLEVBQUUvK0IsQ0FBQyxDQUFDLG1DQUFtQyxFQUFFOEgsTUFBTTtJQUNqRSxDQUFDO0VBQ0w7O0VBRUE7QUFDSjtBQUNBO0FBQ0EsS0FISTtFQUFBNUgsTUFBQSxDQUlBOCtCLG9CQUFvQixHQUFwQixTQUFBQSxvQkFBb0JBLENBQUNDLFNBQVMsRUFBRTtJQUM1QkEsU0FBUyxDQUFDcEIsVUFBVSxDQUFDcGlCLElBQUksQ0FBQzFYLElBQUksQ0FBQyxDQUFDO0lBQ2hDazdCLFNBQVMsQ0FBQ25CLGFBQWEsQ0FBQ3JpQixJQUFJLENBQUMxWCxJQUFJLENBQUMsQ0FBQztJQUNuQ2s3QixTQUFTLENBQUNsQixjQUFjLENBQUN0aUIsSUFBSSxDQUFDMVgsSUFBSSxDQUFDLENBQUM7SUFDcENrN0IsU0FBUyxDQUFDakIsaUJBQWlCLENBQUN2aUIsSUFBSSxDQUFDMVgsSUFBSSxDQUFDLENBQUM7SUFDdkNrN0IsU0FBUyxDQUFDaEIsVUFBVSxDQUFDeGlCLElBQUksQ0FBQzFYLElBQUksQ0FBQyxDQUFDO0lBQ2hDazdCLFNBQVMsQ0FBQ2YsYUFBYSxDQUFDeGlCLEtBQUssQ0FBQzNYLElBQUksQ0FBQyxDQUFDO0lBQ3BDazdCLFNBQVMsQ0FBQ2QsVUFBVSxDQUFDemlCLEtBQUssQ0FBQzNYLElBQUksQ0FBQyxDQUFDO0lBQ2pDazdCLFNBQVMsQ0FBQ2pPLFlBQVksQ0FBQ3ZWLElBQUksQ0FBQzFYLElBQUksQ0FBQyxDQUFDO0lBQ2xDazdCLFNBQVMsQ0FBQzlOLGVBQWUsQ0FBQzFWLElBQUksQ0FBQzFYLElBQUksQ0FBQyxDQUFDO0VBQ3pDOztFQUVBO0FBQ0o7QUFDQTtBQUNBLEtBSEk7RUFBQTdELE1BQUEsQ0FJQXFhLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFDMVosSUFBSSxFQUFFczdCLE9BQU8sRUFBUztJQUFBLElBQWhCQSxPQUFPO01BQVBBLE9BQU8sR0FBRyxJQUFJO0lBQUE7SUFDM0IsSUFBTThDLFNBQVMsR0FBRyxJQUFJLENBQUMvckIsWUFBWSxDQUFDLElBQUksQ0FBQ3BMLE1BQU0sQ0FBQztJQUVoRCxJQUFNbzNCLE9BQU8sR0FBRyxDQUFDcitCLElBQUksQ0FBQzhTLE9BQU8sR0FDdEI5UyxJQUFJLENBQUNzK0IsYUFBYSxJQUFJdCtCLElBQUksQ0FBQ3E4QixvQkFBb0IsSUFBSSxJQUFJLENBQUNob0IsT0FBTyxDQUFDOG5CLHdCQUF3QixHQUN4Rm44QixJQUFJLENBQUNzK0IsYUFBYSxJQUFJdCtCLElBQUksQ0FBQ3UrQixrQkFBbUI7SUFFckQsSUFBSSxDQUFDQyxjQUFjLENBQUNILE9BQU8sQ0FBQztJQUU1QixJQUFJcitCLElBQUksQ0FBQythLEtBQUssWUFBWWxmLE1BQU0sRUFBRTtNQUM5QixJQUFJLENBQUM0aUMsZUFBZSxDQUFDTCxTQUFTLEVBQUVwK0IsSUFBSSxDQUFDK2EsS0FBSyxDQUFDO0lBQy9DLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ29qQixvQkFBb0IsQ0FBQ0MsU0FBUyxDQUFDO0lBQ3hDO0lBRUEsSUFBSXArQixJQUFJLENBQUMwK0IsTUFBTSxZQUFZN2lDLE1BQU0sRUFBRTtNQUMvQnVpQyxTQUFTLENBQUNiLE9BQU8sQ0FBQ24wQixJQUFJLENBQUNwSixJQUFJLENBQUMwK0IsTUFBTSxDQUFDbGhCLFNBQVMsQ0FBQztJQUNqRDs7SUFFQTtJQUNBLElBQUl4ZCxJQUFJLENBQUMyK0IsU0FBUyxFQUFFO01BQ2hCUCxTQUFTLENBQUNULGtCQUFrQixDQUFDeHNCLEdBQUcsQ0FBQ25SLElBQUksQ0FBQzIrQixTQUFTLENBQUM7SUFDcEQ7O0lBRUE7SUFDQSxJQUFJMytCLElBQUksQ0FBQzg5QixHQUFHLEVBQUU7TUFDVk0sU0FBUyxDQUFDTixHQUFHLENBQUNwVCxNQUFNLENBQUN4b0IsSUFBSSxDQUFDbEMsSUFBSSxDQUFDODlCLEdBQUcsQ0FBQztNQUNuQ00sU0FBUyxDQUFDTixHQUFHLENBQUN6VCxNQUFNLENBQUN0bUIsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxNQUFNO01BQ0hxNkIsU0FBUyxDQUFDTixHQUFHLENBQUN6VCxNQUFNLENBQUNubkIsSUFBSSxDQUFDLENBQUM7TUFDM0JrN0IsU0FBUyxDQUFDTixHQUFHLENBQUNwVCxNQUFNLENBQUN4b0IsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNqQzs7SUFFQTtJQUNBLElBQUlsQyxJQUFJLENBQUMrOUIsR0FBRyxFQUFFO01BQ1ZLLFNBQVMsQ0FBQ0wsR0FBRyxDQUFDclQsTUFBTSxDQUFDeG9CLElBQUksQ0FBQ2xDLElBQUksQ0FBQys5QixHQUFHLENBQUM7TUFDbkNLLFNBQVMsQ0FBQ0wsR0FBRyxDQUFDMVQsTUFBTSxDQUFDdG1CLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUMsTUFBTTtNQUNIcTZCLFNBQVMsQ0FBQ0wsR0FBRyxDQUFDMVQsTUFBTSxDQUFDbm5CLElBQUksQ0FBQyxDQUFDO01BQzNCazdCLFNBQVMsQ0FBQ0wsR0FBRyxDQUFDclQsTUFBTSxDQUFDeG9CLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakM7O0lBRUE7SUFDQSxJQUFJazhCLFNBQVMsQ0FBQ1IsS0FBSyxDQUFDekQsVUFBVSxDQUFDMzlCLE1BQU0sSUFBSSxPQUFPd0QsSUFBSSxDQUFDNDlCLEtBQUssS0FBSyxRQUFRLEVBQUU7TUFDckU7TUFDQVEsU0FBUyxDQUFDUixLQUFLLENBQUN6RCxVQUFVLENBQUNuMkIsV0FBVyxDQUFDLGtCQUFrQixDQUFDO01BRTFEbzZCLFNBQVMsQ0FBQ1IsS0FBSyxDQUFDQyxNQUFNLENBQUMzN0IsSUFBSSxDQUFDbEMsSUFBSSxDQUFDNDlCLEtBQUssQ0FBQztJQUMzQyxDQUFDLE1BQU07TUFDSFEsU0FBUyxDQUFDUixLQUFLLENBQUN6RCxVQUFVLENBQUN0MkIsUUFBUSxDQUFDLGtCQUFrQixDQUFDO01BQ3ZEdTZCLFNBQVMsQ0FBQ1IsS0FBSyxDQUFDQyxNQUFNLENBQUMzN0IsSUFBSSxDQUFDbEMsSUFBSSxDQUFDNDlCLEtBQUssQ0FBQztJQUMzQztJQUVBLElBQUksQ0FBQ2pyQiw2QkFBNkIsQ0FBQzNTLElBQUksQ0FBQztJQUN4QyxJQUFJLENBQUM0K0IsdUJBQXVCLENBQUM1K0IsSUFBSSxDQUFDOztJQUVsQztJQUNBLElBQUlBLElBQUksQ0FBQzYrQixtQkFBbUIsSUFBSXZELE9BQU8sRUFBRTtNQUNyQzhDLFNBQVMsQ0FBQ0gsWUFBWSxDQUFDNzBCLElBQUksQ0FBQ2t5QixPQUFPLENBQUM7SUFDeEMsQ0FBQyxNQUFNLElBQUksT0FBUXQ3QixJQUFJLENBQUM2K0IsbUJBQW9CLEtBQUssV0FBVyxFQUFFO01BQzFEVCxTQUFTLENBQUNILFlBQVksQ0FBQzcwQixJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25DO0lBRUEsSUFBTTAxQixnQkFBZ0IsR0FBRzMvQixDQUFDLENBQUMsc0JBQXNCLENBQUM7SUFFbEQsSUFBSTIvQixnQkFBZ0IsQ0FBQ2wrQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUlaLElBQUksQ0FBQzZTLFdBQVcsRUFBRTtNQUNwRGlzQixnQkFBZ0IsQ0FBQy82QixJQUFJLENBQUMsQ0FBQztJQUMzQjtFQUNKOztFQUVBO0FBQ0o7QUFDQTtBQUNBLEtBSEk7RUFBQTFFLE1BQUEsQ0FJQW8vQixlQUFlLEdBQWYsU0FBQUEsZUFBZUEsQ0FBQ0wsU0FBUyxFQUFFcmpCLEtBQUssRUFBRTtJQUM5QixJQUFJLENBQUNvakIsb0JBQW9CLENBQUNDLFNBQVMsQ0FBQztJQUVwQyxJQUFJcmpCLEtBQUssQ0FBQ1EsUUFBUSxFQUFFO01BQ2hCLElBQU13akIsWUFBWSxHQUFHaGtCLEtBQUssQ0FBQ2lrQixXQUFXLEdBQy9CamtCLEtBQUssQ0FBQ2lrQixXQUFXLENBQUM5SyxHQUFHLENBQUMzWSxRQUFRLENBQUNpQyxTQUFTLFdBQU16QyxLQUFLLENBQUNpa0IsV0FBVyxDQUFDQyxHQUFHLENBQUMxakIsUUFBUSxDQUFDaUMsU0FBUyxHQUN2RnpDLEtBQUssQ0FBQ1EsUUFBUSxDQUFDaUMsU0FBUztNQUM5QjRnQixTQUFTLENBQUNkLFVBQVUsQ0FBQ3ppQixLQUFLLENBQUM5VyxJQUFJLENBQUMsQ0FBQztNQUNqQ3E2QixTQUFTLENBQUNqTyxZQUFZLENBQUN2VixJQUFJLENBQUM3VyxJQUFJLENBQUMsQ0FBQztNQUNsQ3E2QixTQUFTLENBQUNqTyxZQUFZLENBQUN0VixLQUFLLENBQUN6UixJQUFJLENBQUMyMUIsWUFBWSxDQUFDO0lBQ25EO0lBRUEsSUFBSWhrQixLQUFLLENBQUNDLFdBQVcsRUFBRTtNQUNuQixJQUFNK2pCLGFBQVksR0FBR2hrQixLQUFLLENBQUNpa0IsV0FBVyxHQUMvQmprQixLQUFLLENBQUNpa0IsV0FBVyxDQUFDOUssR0FBRyxDQUFDbFosV0FBVyxDQUFDd0MsU0FBUyxXQUFNekMsS0FBSyxDQUFDaWtCLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDamtCLFdBQVcsQ0FBQ3dDLFNBQVMsR0FDN0Z6QyxLQUFLLENBQUNDLFdBQVcsQ0FBQ3dDLFNBQVM7TUFDakM0Z0IsU0FBUyxDQUFDZCxVQUFVLENBQUN6aUIsS0FBSyxDQUFDOVcsSUFBSSxDQUFDLENBQUM7TUFDakNxNkIsU0FBUyxDQUFDOU4sZUFBZSxDQUFDMVYsSUFBSSxDQUFDN1csSUFBSSxDQUFDLENBQUM7TUFDckNxNkIsU0FBUyxDQUFDOU4sZUFBZSxDQUFDelYsS0FBSyxDQUFDelIsSUFBSSxDQUFDMjFCLGFBQVksQ0FBQztJQUN0RDtJQUVBLElBQUloa0IsS0FBSyxDQUFDVyxZQUFZLEVBQUU7TUFDcEIwaUIsU0FBUyxDQUFDcEIsVUFBVSxDQUFDcGlCLElBQUksQ0FBQzdXLElBQUksQ0FBQyxDQUFDO01BQ2hDcTZCLFNBQVMsQ0FBQ3BCLFVBQVUsQ0FBQ25pQixLQUFLLENBQUN6UixJQUFJLENBQUMyUixLQUFLLENBQUNXLFlBQVksQ0FBQzhCLFNBQVMsQ0FBQztJQUNqRTtJQUVBLElBQUl6QyxLQUFLLENBQUNJLGVBQWUsRUFBRTtNQUN2QmlqQixTQUFTLENBQUNuQixhQUFhLENBQUNyaUIsSUFBSSxDQUFDN1csSUFBSSxDQUFDLENBQUM7TUFDbkNxNkIsU0FBUyxDQUFDbkIsYUFBYSxDQUFDcGlCLEtBQUssQ0FBQ3pSLElBQUksQ0FBQzJSLEtBQUssQ0FBQ0ksZUFBZSxDQUFDcUMsU0FBUyxDQUFDO0lBQ3ZFO0lBRUEsSUFBSXpDLEtBQUssQ0FBQ21rQixLQUFLLEVBQUU7TUFDYmQsU0FBUyxDQUFDaEIsVUFBVSxDQUFDeGlCLElBQUksQ0FBQzdXLElBQUksQ0FBQyxDQUFDO01BQ2hDcTZCLFNBQVMsQ0FBQ2hCLFVBQVUsQ0FBQ3ZpQixLQUFLLENBQUN6UixJQUFJLENBQUMyUixLQUFLLENBQUNta0IsS0FBSyxDQUFDMWhCLFNBQVMsQ0FBQztJQUMxRDtJQUVBLElBQUl6QyxLQUFLLENBQUNZLHVCQUF1QixFQUFFO01BQy9CeWlCLFNBQVMsQ0FBQ2QsVUFBVSxDQUFDemlCLEtBQUssQ0FBQzNYLElBQUksQ0FBQyxDQUFDO01BQ2pDazdCLFNBQVMsQ0FBQ2xCLGNBQWMsQ0FBQ3RpQixJQUFJLENBQUM3VyxJQUFJLENBQUMsQ0FBQztNQUNwQ3E2QixTQUFTLENBQUNmLGFBQWEsQ0FBQ3hpQixLQUFLLENBQUM5VyxJQUFJLENBQUMsQ0FBQztNQUNwQ3E2QixTQUFTLENBQUNsQixjQUFjLENBQUNyaUIsS0FBSyxDQUFDelIsSUFBSSxDQUFDMlIsS0FBSyxDQUFDWSx1QkFBdUIsQ0FBQzZCLFNBQVMsQ0FBQztJQUNoRjtJQUVBLElBQUl6QyxLQUFLLENBQUNPLDBCQUEwQixFQUFFO01BQ2xDOGlCLFNBQVMsQ0FBQ2QsVUFBVSxDQUFDemlCLEtBQUssQ0FBQzNYLElBQUksQ0FBQyxDQUFDO01BQ2pDazdCLFNBQVMsQ0FBQ2pCLGlCQUFpQixDQUFDdmlCLElBQUksQ0FBQzdXLElBQUksQ0FBQyxDQUFDO01BQ3ZDcTZCLFNBQVMsQ0FBQ2YsYUFBYSxDQUFDeGlCLEtBQUssQ0FBQzlXLElBQUksQ0FBQyxDQUFDO01BQ3BDcTZCLFNBQVMsQ0FBQ2pCLGlCQUFpQixDQUFDdGlCLEtBQUssQ0FBQ3pSLElBQUksQ0FBQzJSLEtBQUssQ0FBQ08sMEJBQTBCLENBQUNrQyxTQUFTLENBQUM7SUFDdEY7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBSkk7RUFBQW5lLE1BQUEsQ0FLQW0vQixjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQ0gsT0FBTyxFQUFFO0lBQ3BCLElBQU1jLFdBQVcsR0FBR2hnQyxDQUFDLENBQUMsNEJBQTRCLENBQUM7SUFFbkQsSUFBSWsvQixPQUFPLEVBQUU7TUFDVGwvQixDQUFDLENBQUMsbUJBQW1CLEVBQUVnZ0MsV0FBVyxDQUFDLENBQUNqOUIsSUFBSSxDQUFDbThCLE9BQU8sQ0FBQztNQUNqRGMsV0FBVyxDQUFDcDdCLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsTUFBTTtNQUNIbzdCLFdBQVcsQ0FBQ2o4QixJQUFJLENBQUMsQ0FBQztJQUN0QjtFQUNKLENBQUM7RUFBQTdELE1BQUEsQ0FFRHNULDZCQUE2QixHQUE3QixTQUFBQSw2QkFBNkJBLENBQUMzUyxJQUFJLEVBQUU7SUFDaEMsSUFBTW8rQixTQUFTLEdBQUcsSUFBSSxDQUFDL3JCLFlBQVksQ0FBQyxJQUFJLENBQUNwTCxNQUFNLENBQUM7SUFDaEQsSUFBSSxDQUFDakgsSUFBSSxDQUFDNlMsV0FBVyxJQUFJLENBQUM3UyxJQUFJLENBQUM4UyxPQUFPLEVBQUU7TUFDcENzckIsU0FBUyxDQUFDWCxVQUFVLENBQUMxcUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDM0NxckIsU0FBUyxDQUFDWixXQUFXLENBQUN6cUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7SUFDaEQsQ0FBQyxNQUFNO01BQ0hxckIsU0FBUyxDQUFDWCxVQUFVLENBQUMxcUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7TUFDNUNxckIsU0FBUyxDQUFDWixXQUFXLENBQUN6cUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7SUFDakQ7RUFDSixDQUFDO0VBQUExVCxNQUFBLENBRUR1L0IsdUJBQXVCLEdBQXZCLFNBQUFBLHVCQUF1QkEsQ0FBQzUrQixJQUFJLEVBQUU7SUFDMUIsSUFBTW8rQixTQUFTLEdBQUcsSUFBSSxDQUFDL3JCLFlBQVksQ0FBQyxJQUFJLENBQUNwTCxNQUFNLENBQUM7SUFDaEQsSUFBTW00QixXQUFXLEdBQUdoQixTQUFTLENBQUNWLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQy9tQixhQUFhLENBQUMsQ0FBQztJQUMvRCxJQUFJLENBQUMwb0IsNkJBQTZCLENBQUNELFdBQVcsSUFBSXAvQixJQUFJLENBQUM2UyxXQUFXLElBQUk3UyxJQUFJLENBQUM4UyxPQUFPLENBQUM7RUFDdkYsQ0FBQztFQUFBelQsTUFBQSxDQUVEZ2dDLDZCQUE2QixHQUE3QixTQUFBQSw2QkFBNkJBLENBQUNDLFVBQVUsRUFBRTtJQUN0QyxJQUFNbEIsU0FBUyxHQUFHLElBQUksQ0FBQy9yQixZQUFZLENBQUMsSUFBSSxDQUFDcEwsTUFBTSxDQUFDO0lBRWhELElBQUlxNEIsVUFBVSxFQUFFO01BQ1psQixTQUFTLENBQUNGLGNBQWMsQ0FBQ242QixJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDLE1BQU07TUFDSHE2QixTQUFTLENBQUNGLGNBQWMsQ0FBQ2g3QixJQUFJLENBQUMsQ0FBQztJQUNuQztFQUNKLENBQUM7RUFBQTdELE1BQUEsQ0FFRG85QixlQUFlLEdBQWYsU0FBQUEsZUFBZUEsQ0FBQ0YsVUFBVSxFQUFFeGxCLFFBQVEsRUFBRXFsQixpQkFBaUIsRUFBRTtJQUNyRCxJQUFJLElBQUksQ0FBQ21ELGdCQUFnQixDQUFDaEQsVUFBVSxDQUFDLEtBQUssWUFBWSxFQUFFO01BQ3BELE9BQU8sSUFBSSxDQUFDaUQsMkJBQTJCLENBQUNqRCxVQUFVLEVBQUV4bEIsUUFBUSxFQUFFcWxCLGlCQUFpQixDQUFDO0lBQ3BGO0lBRUEsSUFBSXJsQixRQUFRLEtBQUssYUFBYSxFQUFFO01BQzVCd2xCLFVBQVUsQ0FBQ3g0QixJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDLE1BQU07TUFDSHc0QixVQUFVLENBQUN2NEIsV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUN6QztFQUNKLENBQUM7RUFBQTNFLE1BQUEsQ0FFRHE5QixnQkFBZ0IsR0FBaEIsU0FBQUEsZ0JBQWdCQSxDQUFDSCxVQUFVLEVBQUV4bEIsUUFBUSxFQUFFcWxCLGlCQUFpQixFQUFFO0lBQ3RELElBQUksSUFBSSxDQUFDbUQsZ0JBQWdCLENBQUNoRCxVQUFVLENBQUMsS0FBSyxZQUFZLEVBQUU7TUFDcEQsT0FBTyxJQUFJLENBQUNrRCw0QkFBNEIsQ0FBQ2xELFVBQVUsRUFBRXhsQixRQUFRLEVBQUVxbEIsaUJBQWlCLENBQUM7SUFDckY7SUFFQSxJQUFJcmxCLFFBQVEsS0FBSyxhQUFhLEVBQUU7TUFDNUJ3bEIsVUFBVSxDQUFDcjVCLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxNQUFNO01BQ0hxNUIsVUFBVSxDQUFDMTRCLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDdEM7RUFDSixDQUFDO0VBQUF4RSxNQUFBLENBRURrZ0MsZ0JBQWdCLEdBQWhCLFNBQUFBLGdCQUFnQkEsQ0FBQ2hELFVBQVUsRUFBRTtJQUN6QixJQUFNbUQsT0FBTyxHQUFHbkQsVUFBVSxDQUFDbDhCLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztJQUU5RCxPQUFPcS9CLE9BQU8sR0FBR0EsT0FBTyxDQUFDMS9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUk7RUFDNUQsQ0FBQztFQUFBWCxNQUFBLENBRURvZ0MsNEJBQTRCLEdBQTVCLFNBQUFBLDRCQUE0QkEsQ0FBQ2xELFVBQVUsRUFBRXhsQixRQUFRLEVBQUVxbEIsaUJBQWlCLEVBQUU7SUFDbEUsSUFBTTlhLE9BQU8sR0FBR2liLFVBQVUsQ0FBQ29ELE1BQU0sQ0FBQyxDQUFDO0lBRW5DLElBQUk1b0IsUUFBUSxLQUFLLGFBQWEsRUFBRTtNQUM1QndsQixVQUFVLENBQUNxRCxZQUFZLENBQUMsS0FBSyxDQUFDO01BQzlCO01BQ0EsSUFBSXRlLE9BQU8sQ0FBQ25RLEdBQUcsQ0FBQyxDQUFDLEtBQUtvckIsVUFBVSxDQUFDMTZCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUM1Q3lmLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ3VlLGFBQWEsR0FBRyxDQUFDO01BQ2hDO0lBQ0osQ0FBQyxNQUFNO01BQ0h0RCxVQUFVLENBQUNuekIsSUFBSSxDQUFDbXpCLFVBQVUsQ0FBQ256QixJQUFJLENBQUMsQ0FBQyxDQUFDaUUsT0FBTyxDQUFDK3VCLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHQSxpQkFBaUIsQ0FBQztJQUN6RjtFQUNKLENBQUM7RUFBQS84QixNQUFBLENBRURtZ0MsMkJBQTJCLEdBQTNCLFNBQUFBLDJCQUEyQkEsQ0FBQ2pELFVBQVUsRUFBRXhsQixRQUFRLEVBQUVxbEIsaUJBQWlCLEVBQUU7SUFDakUsSUFBSXJsQixRQUFRLEtBQUssYUFBYSxFQUFFO01BQzVCd2xCLFVBQVUsQ0FBQ3FELFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQyxNQUFNO01BQ0hyRCxVQUFVLENBQUNuekIsSUFBSSxDQUFDbXpCLFVBQVUsQ0FBQ256QixJQUFJLENBQUMsQ0FBQyxDQUFDaUUsT0FBTyxDQUFDK3VCLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFO0VBQ0osQ0FBQztFQUFBLE9BQUFiLGtCQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdiMEM7QUFDb0M7QUFDaEM7QUFDTztBQUNNLENBQUM7QUFDVTtBQUUzQztBQUN1QztBQUM1QjtBQUNLO0FBQ21CO0FBQ3BCO0FBQ1k7QUFBQSxJQUV0QzdyQixjQUFjLDBCQUFBNHdCLG1CQUFBO0VBQy9CLFNBQUE1d0IsZUFBWXpJLE1BQU0sRUFBRW9OLE9BQU8sRUFBRWtzQixxQkFBcUIsRUFBTztJQUFBLElBQUFoaEMsS0FBQTtJQUFBLElBQTVCZ2hDLHFCQUFxQjtNQUFyQkEscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQUE7SUFDbkRoaEMsS0FBQSxHQUFBK2dDLG1CQUFBLENBQUEzakMsSUFBQSxPQUFNc0ssTUFBTSxFQUFFb04sT0FBTyxDQUFDO0lBRXRCOVUsS0FBQSxDQUFLMFUsUUFBUSxHQUFHOVUsQ0FBQyxDQUFDLHNDQUFzQyxDQUFDO0lBQ3pESSxLQUFBLENBQUtSLFlBQVksR0FBRyxJQUFJK00sdUVBQVksQ0FBQzNNLENBQUMsQ0FBQyxzQkFBc0IsRUFBRUksS0FBQSxDQUFLMEgsTUFBTSxDQUFDLENBQUM7SUFDNUUxSCxLQUFBLENBQUtSLFlBQVksQ0FBQzRZLElBQUksQ0FBQyxDQUFDO0lBQ3hCcFksS0FBQSxDQUFLaWhDLG9CQUFvQixDQUFDLENBQUM7SUFDM0JqaEMsS0FBQSxDQUFLa2hDLG9CQUFvQixHQUFHdGhDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQztJQUN2REksS0FBQSxDQUFLbWhDLHdCQUF3QixHQUFHLENBQUMsQ0FBQztJQUNsQ25oQyxLQUFBLENBQUtvaEMsaUJBQWlCLEdBQUd4aEMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNvRCxHQUFHLENBQUMsVUFBQ3dnQixDQUFDLEVBQUU2ZCxLQUFLO01BQUEsT0FBS3poQyxDQUFDLENBQUN5aEMsS0FBSyxDQUFDLENBQUMvK0IsSUFBSSxDQUFDLElBQUksQ0FBQztJQUFBLEVBQUM7SUFDeEZ0QyxLQUFBLENBQUtzaEMsNEJBQTRCLENBQUMsQ0FBQztJQUNuQ3RoQyxLQUFBLENBQUt1aEMsa0JBQWtCLENBQUMsQ0FBQztJQUV6QixJQUFNN3ZCLEtBQUssR0FBRzlSLENBQUMsQ0FBQywwQkFBMEIsRUFBRThILE1BQU0sQ0FBQztJQUVuRCxJQUFJZ0ssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDMEYsYUFBYSxDQUFDLENBQUMsRUFBRTtNQUMxQnBYLEtBQUEsQ0FBS3doQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ25DLENBQUMsTUFBTTtNQUNIeGhDLEtBQUEsQ0FBSzgvQiw2QkFBNkIsQ0FBQyxLQUFLLENBQUM7SUFDN0M7SUFFQTkvQixLQUFBLENBQUt5aEMsa0JBQWtCLEdBQUdqQix1REFBRyxDQUFDO01BQzFCa0IsTUFBTSxFQUFFaHdCLEtBQUssQ0FBQ3pSLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztNQUNqRDBoQyxHQUFHLEVBQUVsQiwrRUFBeUJBO0lBQ2xDLENBQUMsQ0FBQztJQUVGLElBQU1tQixzQkFBc0IsR0FBR2hpQyxDQUFDLENBQUMsOEJBQThCLEVBQUU4UixLQUFLLENBQUM7SUFDdkUxUixLQUFBLENBQUtzUyw4QkFBOEIsQ0FBQ3N2QixzQkFBc0IsQ0FBQztJQUMzRCxJQUFNQyxVQUFVLEdBQUdELHNCQUFzQixDQUFDLzNCLElBQUksQ0FBQyxDQUFDLENBQUMyYSxJQUFJLENBQUMsQ0FBQyxDQUFDdm5CLE1BQU07SUFDOUQsSUFBTTZrQyxpQkFBaUIsR0FBR0Ysc0JBQXNCLENBQUMzaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUNoRCxNQUFNO0lBQzlFLElBQU04a0MsbUJBQW1CLEdBQUduaUMsQ0FBQyxDQUFDLDBCQUEwQixFQUFFOFIsS0FBSyxDQUFDO0lBQ2hFLElBQU1zd0Isb0JBQW9CLEdBQUdwaUMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFOFIsS0FBSyxDQUFDO0lBQzVELElBQU11d0IscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBSXplLENBQUMsRUFBRS9FLEtBQUssRUFBSztNQUN4QyxJQUFNeWpCLFlBQVksR0FBR3RpQyxDQUFDLENBQUMsdUJBQXVCLEVBQUVBLENBQUMsQ0FBQzZlLEtBQUssQ0FBQyxDQUFDO01BQ3pELElBQU0wakIsZ0JBQWdCLEdBQUdELFlBQVksQ0FBQ0UsVUFBVSxDQUFDLENBQUM7TUFDbEQsSUFBTUMsNkJBQTZCLEdBQUcsRUFBRTtNQUN4QyxJQUFBQyxxQkFBQSxHQUFrQjdqQixLQUFLLENBQUM4akIscUJBQXFCLENBQUMsQ0FBQztRQUF2Q0MsS0FBSyxHQUFBRixxQkFBQSxDQUFMRSxLQUFLO01BQ2IsSUFBTUMsNkJBQTZCLEdBQUdsdUIsTUFBTSxDQUFDbXVCLE1BQU0sQ0FBQ3I4QixLQUFLLEdBQUdtOEIsS0FBSztNQUNqRSxJQUFNRyxVQUFVLEdBQUdSLGdCQUFnQixHQUFHTSw2QkFBNkI7TUFFbkUsSUFBSUEsNkJBQTZCLEdBQUlOLGdCQUFnQixHQUFHRSw2QkFBOEIsRUFBRTtRQUNwRkgsWUFBWSxDQUFDbDhCLEdBQUcsQ0FBQyxNQUFNLEdBQUsyOEIsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDQSxVQUFVLEdBQUdBLFVBQVUsUUFBSSxDQUFDO01BQzlFO0lBQ0osQ0FBQztJQUVEL2lDLENBQUMsQ0FBQzJVLE1BQU0sQ0FBQyxDQUFDcFUsRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFNO01BQ3ZCSCxLQUFBLENBQUs0aUMsMkJBQTJCLENBQUMsQ0FBQztNQUNsQ2hqQyxDQUFDLENBQUNrWSxJQUFJLENBQUNrcUIsb0JBQW9CLEVBQUVDLHFCQUFxQixDQUFDO0lBQ3ZELENBQUMsQ0FBQztJQUVGLElBQUludEIsT0FBTyxDQUFDK3RCLGVBQWUsRUFBRTtNQUN6QjdpQyxLQUFBLENBQUtraEMsb0JBQW9CLENBQUN6OEIsV0FBVyxDQUFDLFVBQVUsQ0FBQztNQUVqRHM5QixtQkFBbUIsQ0FBQzVoQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUEwSCxJQUFBLEVBQWdCO1FBQUEsSUFBYnZHLE1BQU0sR0FBQXVHLElBQUEsQ0FBTnZHLE1BQU07UUFDdEMsSUFBTXdoQyxrQkFBa0IsR0FBR3hoQyxNQUFNLENBQUN5aEMsVUFBVSxDQUFDQSxVQUFVO1FBRXZEL2lDLEtBQUEsQ0FBS2dqQyxzQkFBc0IsQ0FBQ3BqQyxDQUFDLENBQUMwQixNQUFNLENBQUMsRUFBRTFCLENBQUMsQ0FBQ2tqQyxrQkFBa0IsQ0FBQyxDQUFDO01BQ2pFLENBQUMsQ0FBQztNQUVGbGpDLENBQUMsQ0FBQ2tZLElBQUksQ0FBQ2lxQixtQkFBbUIsRUFBRSxVQUFDdmUsQ0FBQyxFQUFFeWYsT0FBTyxFQUFLO1FBQ3hDLElBQU1ILGtCQUFrQixHQUFHRyxPQUFPLENBQUNGLFVBQVUsQ0FBQ0EsVUFBVTtRQUV4RCxJQUFJbmpDLENBQUMsQ0FBQ3FqQyxPQUFPLENBQUMsQ0FBQzVoQyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUVyQixLQUFBLENBQUtnakMsc0JBQXNCLENBQUNwakMsQ0FBQyxDQUFDcWpDLE9BQU8sQ0FBQyxFQUFFcmpDLENBQUMsQ0FBQ2tqQyxrQkFBa0IsQ0FBQyxDQUFDO01BQ2pHLENBQUMsQ0FBQztJQUNOO0lBRUFsQixzQkFBc0IsQ0FBQ3poQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUN6Q0osS0FBQSxDQUFLa2pDLHFCQUFxQixDQUFDOWlDLEtBQUssQ0FBQztNQUNqQ0osS0FBQSxDQUFLbWpDLGlCQUFpQixDQUFDLENBQUM7TUFDeEJuakMsS0FBQSxDQUFLc1osNEJBQTRCLENBQUNzb0Isc0JBQXNCLENBQUM7SUFDN0QsQ0FBQyxDQUFDO0lBRUZsd0IsS0FBSyxDQUFDdlIsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDeEJKLEtBQUEsQ0FBS3loQyxrQkFBa0IsQ0FBQzJCLFlBQVksQ0FBQyxDQUFDO01BRXRDLElBQUlwakMsS0FBQSxDQUFLeWhDLGtCQUFrQixDQUFDNEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3pDcmpDLEtBQUEsQ0FBS3lULGdCQUFnQixDQUFDclQsS0FBSyxFQUFFc1IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzFDO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0E7SUFDQSxJQUFJLENBQUM0eEIscURBQUEsQ0FBUXRDLHFCQUFxQixDQUFDLElBQUljLGlCQUFpQixLQUFLRCxVQUFVLEVBQUU7TUFDckUsSUFBTTBCLFVBQVUsR0FBRzNqQyxDQUFDLENBQUMscUJBQXFCLEVBQUU4UixLQUFLLENBQUMsQ0FBQ0UsR0FBRyxDQUFDLENBQUM7TUFDeEQsSUFBTTR4QixvQkFBb0IsR0FBRzdILHdFQUFxQixDQUFDditCLElBQUksQ0FBQTRDLEtBQUEsRUFBTzhoQyxpQkFBaUIsQ0FBQztNQUVoRjMwQixzRUFBUyxDQUFDczJCLGlCQUFpQixDQUFDQyxZQUFZLENBQUNILFVBQVUsRUFBRTd4QixLQUFLLENBQUNpeUIsU0FBUyxDQUFDLENBQUMsRUFBRSw4QkFBOEIsRUFBRUgsb0JBQW9CLENBQUM7SUFDakksQ0FBQyxNQUFNO01BQ0h4akMsS0FBQSxDQUFLa2EsdUJBQXVCLENBQUM4bUIscUJBQXFCLENBQUM7TUFDbkRoaEMsS0FBQSxDQUFLbWEsVUFBVSxDQUFDNm1CLHFCQUFxQixDQUFDO01BQ3RDSCw0REFBVyxDQUFDK0MsMEJBQTBCLENBQUM1QyxxQkFBcUIsQ0FBQztJQUNqRTtJQUVBWSxzQkFBc0IsQ0FBQ3A5QixJQUFJLENBQUMsQ0FBQztJQUU3QnhFLEtBQUEsQ0FBS3ljLFlBQVksR0FBRzhqQix5REFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFDLE9BQUF2Z0MsS0FBQTtFQUN6RDtFQUFDakIsY0FBQSxDQUFBb1IsY0FBQSxFQUFBNHdCLG1CQUFBO0VBQUEsSUFBQWpoQyxNQUFBLEdBQUFxUSxjQUFBLENBQUFoVSxTQUFBO0VBQUEyRCxNQUFBLENBRUQ4aUMsMkJBQTJCLEdBQTNCLFNBQUFBLDJCQUEyQkEsQ0FBQSxFQUFHO0lBQzFCLElBQUksQ0FBQ25CLGtCQUFrQixDQUFDcG9CLEdBQUcsQ0FBQyxDQUFDO01BQ3pCMUcsUUFBUSxFQUFFLHNEQUFzRDtNQUNoRWt4QixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFFbHlCLEdBQUcsRUFBSztRQUNuQixJQUFNakMsTUFBTSxHQUFHK3dCLDZEQUFLLENBQUNxRCxXQUFXLENBQUNueUIsR0FBRyxDQUFDO1FBQ3JDa3lCLEVBQUUsQ0FBQ24wQixNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0RxMEIsWUFBWSxFQUFFLElBQUksQ0FBQ2x2QixPQUFPLENBQUNtdkI7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQ3hDLGtCQUFrQjtFQUNsQyxDQUFDO0VBQUEzaEMsTUFBQSxDQUVEd2hDLDRCQUE0QixHQUE1QixTQUFBQSw0QkFBNEJBLENBQUEsRUFBRztJQUFBLElBQUFwOUIsTUFBQTtJQUMzQixJQUFJLElBQUksQ0FBQ2s5QixpQkFBaUIsQ0FBQ25rQyxNQUFNLElBQUlxbUMscURBQUEsQ0FBUSxJQUFJLENBQUNuQyx3QkFBd0IsQ0FBQyxFQUFFO01BQ3pFLElBQUksQ0FBQ0MsaUJBQWlCLENBQUN0cEIsSUFBSSxDQUFDLFVBQUMwTCxDQUFDLEVBQUUwZ0IsYUFBYSxFQUFLO1FBQzlDLElBQUksQ0FBQ2hnQyxNQUFJLENBQUNpOUIsd0JBQXdCLENBQUMrQyxhQUFhLENBQUMsRUFBRTtVQUMvQ2hnQyxNQUFJLENBQUNpOUIsd0JBQXdCLENBQUMrQyxhQUFhLENBQUMsR0FBR3RrQyxDQUFDLE9BQUtza0MsYUFBYSw4QkFBMkIsQ0FBQyxDQUFDdmhDLElBQUksQ0FBQyxDQUFDLENBQUM2aEIsSUFBSSxDQUFDLENBQUM7UUFDaEg7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7RUFBQTFrQixNQUFBLENBRURxakMsaUJBQWlCLEdBQWpCLFNBQUFBLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2hCLElBQU1nQix5QkFBeUIsR0FBRyxFQUFFO0lBQ3BDLElBQU0vUixPQUFPLEdBQUcsRUFBRTtJQUVsQnh5QixDQUFDLENBQUNrWSxJQUFJLENBQUNsWSxDQUFDLENBQUMsMEJBQTBCLENBQUMsRUFBRSxVQUFDOE8sS0FBSyxFQUFFcFIsS0FBSyxFQUFLO01BQ3BELElBQUlzQyxDQUFDLENBQUN0QyxLQUFLLENBQUMsQ0FBQytELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSS9ELEtBQUssQ0FBQ3FZLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDeEU7TUFDSjtNQUVBLElBQU15dUIsV0FBVyxHQUFHOW1DLEtBQUssQ0FBQyttQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM5dUIsU0FBUztNQUMvQyxJQUFNK3VCLFdBQVcsR0FBR0YsV0FBVyxDQUFDcGpDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3dqQixJQUFJLENBQUMsQ0FBQztNQUNwRCxJQUFNMUMsUUFBUSxHQUFHc2lCLFdBQVcsQ0FBQ3IyQixXQUFXLENBQUMsQ0FBQyxDQUFDakksUUFBUSxDQUFDLFVBQVUsQ0FBQztNQUMvRCxJQUFNNFAsSUFBSSxHQUFHcFksS0FBSyxDQUFDcVksWUFBWSxDQUFDLHdCQUF3QixDQUFDO01BRXpELElBQUksQ0FBQ0QsSUFBSSxLQUFLLFlBQVksSUFBSUEsSUFBSSxLQUFLLFlBQVksSUFBSUEsSUFBSSxLQUFLLGNBQWMsS0FBS3BZLEtBQUssQ0FBQ2dhLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ2hhLEtBQUssS0FBSyxFQUFFLElBQUl3a0IsUUFBUSxFQUFFO1FBQ3RJcWlCLHlCQUF5QixDQUFDcjBCLElBQUksQ0FBQ3hTLEtBQUssQ0FBQztNQUN6QztNQUVBLElBQUlvWSxJQUFJLEtBQUssVUFBVSxJQUFJcFksS0FBSyxDQUFDZ2EsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDaGEsS0FBSyxLQUFLLEVBQUUsSUFBSXdrQixRQUFRLEVBQUU7UUFDakZxaUIseUJBQXlCLENBQUNyMEIsSUFBSSxDQUFDeFMsS0FBSyxDQUFDO01BQ3pDO01BRUEsSUFBSW9ZLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDakIsSUFBTTZ1QixXQUFXLEdBQUdoMEIsS0FBSyxDQUFDMlEsSUFBSSxDQUFDNWpCLEtBQUssQ0FBQ2tuQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLzFCLEtBQUssQ0FBQyxVQUFDK0osTUFBTTtVQUFBLE9BQUtBLE1BQU0sQ0FBQzhuQixhQUFhLEtBQUssQ0FBQztRQUFBLEVBQUM7UUFFOUcsSUFBSWlFLFdBQVcsRUFBRTtVQUNiLElBQU1FLFVBQVUsR0FBR2wwQixLQUFLLENBQUMyUSxJQUFJLENBQUM1akIsS0FBSyxDQUFDa25DLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUN4aEMsR0FBRyxDQUFDLFVBQUMwaEMsQ0FBQztZQUFBLE9BQUtBLENBQUMsQ0FBQ3BuQyxLQUFLO1VBQUEsRUFBQyxDQUFDc1osSUFBSSxDQUFDLEdBQUcsQ0FBQztVQUM3RndiLE9BQU8sQ0FBQ3RpQixJQUFJLENBQUl3MEIsV0FBVyxTQUFJRyxVQUFZLENBQUM7VUFFNUM7UUFDSjtRQUVBLElBQUkzaUIsUUFBUSxFQUFFO1VBQ1ZxaUIseUJBQXlCLENBQUNyMEIsSUFBSSxDQUFDeFMsS0FBSyxDQUFDO1FBQ3pDO01BQ0o7TUFFQSxJQUFJb1ksSUFBSSxLQUFLLFlBQVksRUFBRTtRQUN2QixJQUFNOEMsTUFBTSxHQUFHbGIsS0FBSyxDQUFDZ2EsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFNZ3BCLGFBQWEsR0FBRzluQixNQUFNLENBQUM4bkIsYUFBYTtRQUUxQyxJQUFJQSxhQUFhLEtBQUssQ0FBQyxFQUFFO1VBQ3JCbE8sT0FBTyxDQUFDdGlCLElBQUksQ0FBSXcwQixXQUFXLFNBQUk5ckIsTUFBTSxDQUFDNFosT0FBTyxDQUFDa08sYUFBYSxDQUFDLENBQUMvcUIsU0FBVyxDQUFDO1VBRXpFO1FBQ0o7UUFFQSxJQUFJdU0sUUFBUSxFQUFFO1VBQ1ZxaUIseUJBQXlCLENBQUNyMEIsSUFBSSxDQUFDeFMsS0FBSyxDQUFDO1FBQ3pDO01BQ0o7TUFFQSxJQUFJb1ksSUFBSSxLQUFLLGVBQWUsSUFBSUEsSUFBSSxLQUFLLFdBQVcsSUFBSUEsSUFBSSxLQUFLLFFBQVEsSUFBSUEsSUFBSSxLQUFLLGdCQUFnQixJQUFJQSxJQUFJLEtBQUssY0FBYyxFQUFFO1FBQy9ILElBQU1rWixPQUFPLEdBQUd0eEIsS0FBSyxDQUFDZ2EsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJc1gsT0FBTyxFQUFFO1VBQ1QsSUFBTStWLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUEsRUFBUztZQUNqQyxJQUFNQyxtQkFBbUIsR0FBR2hFLG9FQUFnQixDQUFDdGpDLEtBQUssQ0FBQyttQyxRQUFRLENBQUM7WUFDNUQsSUFBTVEseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUF5QkEsQ0FBR0MsSUFBSTtjQUFBLE9BQUlBLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxxQkFBcUIsS0FBS3BXLE9BQU8sQ0FBQ3R4QixLQUFLO1lBQUE7WUFDOUYsT0FBT3NuQyxtQkFBbUIsQ0FBQ3BoQyxNQUFNLENBQUNxaEMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDbkUsQ0FBQztVQUNELElBQUludkIsSUFBSSxLQUFLLGVBQWUsSUFBSUEsSUFBSSxLQUFLLFdBQVcsSUFBSUEsSUFBSSxLQUFLLGNBQWMsRUFBRTtZQUM3RSxJQUFNK0ksS0FBSyxHQUFHOVksMkRBQVcsR0FBR2cvQixzQkFBc0IsQ0FBQyxDQUFDLENBQUNwdkIsU0FBUyxDQUFDaVAsSUFBSSxDQUFDLENBQUMsR0FBR29LLE9BQU8sQ0FBQ3FXLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzF2QixTQUFTO1lBQ25HLElBQUlrSixLQUFLLEVBQUU7Y0FDUDJULE9BQU8sQ0FBQ3RpQixJQUFJLENBQUl3MEIsV0FBVyxTQUFJN2xCLEtBQU8sQ0FBQztZQUMzQztVQUNKO1VBRUEsSUFBSS9JLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkIsSUFBTStJLE1BQUssR0FBRzlZLDJEQUFXLEdBQUdnL0Isc0JBQXNCLENBQUMsQ0FBQyxDQUFDTixRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUd6VixPQUFPLENBQUNxVyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNaLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEcsSUFBSTVsQixNQUFLLEVBQUU7Y0FDUDJULE9BQU8sQ0FBQ3RpQixJQUFJLENBQUl3MEIsV0FBVyxTQUFJN2xCLE1BQUssQ0FBQ3FDLEtBQU8sQ0FBQztZQUNqRDtVQUNKO1VBRUEsSUFBSXBMLElBQUksS0FBSyxnQkFBZ0IsRUFBRTtZQUMzQjBjLE9BQU8sQ0FBQ3RpQixJQUFJLENBQUl3MEIsV0FBVyxTQUFNLENBQUM7VUFDdEM7VUFFQTtRQUNKO1FBRUEsSUFBSTV1QixJQUFJLEtBQUssZ0JBQWdCLEVBQUU7VUFDM0IwYyxPQUFPLENBQUN0aUIsSUFBSSxDQUFJdzBCLFdBQVcsUUFBSyxDQUFDO1FBQ3JDO1FBRUEsSUFBSXhpQixRQUFRLEVBQUU7VUFDVnFpQix5QkFBeUIsQ0FBQ3IwQixJQUFJLENBQUN4UyxLQUFLLENBQUM7UUFDekM7TUFDSjtJQUNKLENBQUMsQ0FBQztJQUVGLElBQUk0bkMsY0FBYyxHQUFHZix5QkFBeUIsQ0FBQ2xuQyxNQUFNLEtBQUssQ0FBQyxHQUFHbTFCLE9BQU8sQ0FBQzdqQixJQUFJLENBQUMsQ0FBQyxDQUFDcUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWE7SUFDdkcsSUFBTXV1QixJQUFJLEdBQUd2bEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUU5QixJQUFJc2xDLGNBQWMsRUFBRTtNQUNoQkEsY0FBYyxHQUFHQSxjQUFjLEtBQUssYUFBYSxHQUFHLEVBQUUsR0FBR0EsY0FBYztNQUN2RSxJQUFJQyxJQUFJLENBQUM3aUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7UUFDOUI2aUMsSUFBSSxDQUFDN2lDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTRpQyxjQUFjLENBQUM7TUFDckQsQ0FBQyxNQUFNO1FBQ0gsSUFBTUUsV0FBVyxHQUFHRCxJQUFJLENBQUNsbEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNzVixTQUFTLENBQUN6SCxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztRQUN0RixJQUFNdTNCLElBQUksR0FBR3psQyxDQUFDLG1CQUFnQndsQyxXQUFXLFFBQUksQ0FBQztRQUM5Q0MsSUFBSSxDQUFDL2lDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTRpQyxjQUFjLENBQUM7TUFDckQ7SUFDSjtFQUNKLENBQUM7RUFBQXBsQyxNQUFBLENBRUR3Uyw4QkFBOEIsR0FBOUIsU0FBQUEsOEJBQThCQSxDQUFDc3ZCLHNCQUFzQixFQUFFO0lBQUEsSUFBQS84QixNQUFBO0lBQ25EKzhCLHNCQUFzQixDQUFDMWhDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSwyQkFBMkIsQ0FBQztJQUNsRjBoQyxzQkFBc0IsQ0FBQ3poQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsWUFBTTtNQUNwRjBFLE1BQUksQ0FBQ3lVLDRCQUE0QixDQUFDc29CLHNCQUFzQixDQUFDO0lBQzdELENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ3RvQiw0QkFBNEIsQ0FBQ3NvQixzQkFBc0IsQ0FBQztFQUM3RCxDQUFDO0VBQUE5aEMsTUFBQSxDQUVEd1osNEJBQTRCLEdBQTVCLFNBQUFBLDRCQUE0QkEsQ0FBQ3NvQixzQkFBc0IsRUFBRTtJQUFBLElBQUFwN0IsTUFBQTtJQUNqRCxJQUFJLENBQUNvN0Isc0JBQXNCLElBQUlBLHNCQUFzQixDQUFDM2tDLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDaEU7SUFDSjtJQUVBLElBQU11YyxjQUFjLEdBQUdvb0Isc0JBQXNCLENBQ3hDM2hDLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUMvQ29LLEtBQUssQ0FBQyxDQUFDO0lBRVosSUFBSW1QLGNBQWMsQ0FBQ3ZjLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDN0I7SUFDSjtJQUVBLElBQU13YyxnQkFBZ0IsR0FBR0QsY0FBYyxDQUFDblksRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUN0RCxJQUFNcVksUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7SUFFdENBLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtNQUN4QixJQUFNQyxNQUFNLEdBQUcrbkIsc0JBQXNCLENBQUMzaEMsSUFBSSxtQ0FBZ0MyWixPQUFPLFFBQUksQ0FBQyxDQUFDdlAsS0FBSyxDQUFDLENBQUM7TUFDOUYsSUFBSXdQLE1BQU0sQ0FBQzVjLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckI7TUFDSjtNQUVBLElBQUl3YyxnQkFBZ0IsRUFBRTtRQUNsQmpULE1BQUksQ0FBQ3NULDBCQUEwQixDQUFDRCxNQUFNLENBQUM7UUFDdkNBLE1BQU0sQ0FBQzdULEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMxRCxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDbUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO01BQzlGLENBQUMsTUFBTTtRQUNIK0IsTUFBSSxDQUFDdVQsd0JBQXdCLENBQUNGLE1BQU0sQ0FBQztRQUNyQ0EsTUFBTSxDQUFDN1QsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQzFELElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO01BQzFEO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBeEMsTUFBQSxDQUVEZ2EsMEJBQTBCLEdBQTFCLFNBQUFBLDBCQUEwQkEsQ0FBQ0QsTUFBTSxFQUFFO0lBQy9CQSxNQUFNLENBQUM1WixJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQzZYLElBQUksQ0FBQyxVQUFDdlMsRUFBRSxFQUFFeVUsRUFBRSxFQUFLO01BQ3pFLElBQU0xVyxHQUFHLEdBQUcxRCxDQUFDLENBQUNvYSxFQUFFLENBQUM7TUFFakIsSUFBSSxDQUFDMVcsR0FBRyxDQUFDakMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7UUFDckNpQyxHQUFHLENBQUNoQixJQUFJLENBQUMsd0JBQXdCLEVBQUVnQixHQUFHLENBQUNrUSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztNQUMvRTtNQUVBbFEsR0FBRyxDQUFDa1EsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQ25SLFVBQVUsQ0FBQyxVQUFVLENBQUM7TUFFbEQsSUFBSWlCLEdBQUcsQ0FBQ2pDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1FBQzdCaUMsR0FBRyxDQUFDa1EsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7TUFDOUIsQ0FBQyxNQUFNLElBQUlsUSxHQUFHLENBQUNqQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDekJpQyxHQUFHLENBQUNrUSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztNQUNoQyxDQUFDLE1BQU07UUFDSGxRLEdBQUcsQ0FBQ3NPLEdBQUcsQ0FBQyxFQUFFLENBQUM7TUFDZjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTlSLE1BQUEsQ0FFRGlhLHdCQUF3QixHQUF4QixTQUFBQSx3QkFBd0JBLENBQUNGLE1BQU0sRUFBRTtJQUM3QkEsTUFBTSxDQUFDNVosSUFBSSxDQUFDLDhDQUE4QyxDQUFDLENBQUM2WCxJQUFJLENBQUMsVUFBQ3ZTLEVBQUUsRUFBRXlVLEVBQUUsRUFBSztNQUN6RSxJQUFNMVcsR0FBRyxHQUFHMUQsQ0FBQyxDQUFDb2EsRUFBRSxDQUFDO01BQ2pCLElBQU1zckIsV0FBVyxHQUFHaGlDLEdBQUcsQ0FBQ2hCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLE1BQU07TUFFakVnQixHQUFHLENBQUNrUSxJQUFJLENBQUMsVUFBVSxFQUFFOHhCLFdBQVcsQ0FBQztNQUNqQyxJQUFJQSxXQUFXLEVBQUU7UUFDYmhpQyxHQUFHLENBQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztNQUM1QixDQUFDLE1BQU07UUFDSGdCLEdBQUcsQ0FBQ2pCLFVBQVUsQ0FBQyxVQUFVLENBQUM7TUFDOUI7SUFDSixDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0E7QUFDQSxLQUhJO0VBQUF2QyxNQUFBLENBSUF5bEMsaUJBQWlCLEdBQWpCLFNBQUFBLGlCQUFpQkEsQ0FBQSxFQUFHO0lBQ2hCLElBQUk7TUFDQSxPQUFPaHhCLE1BQU0sQ0FBQ2l4QixJQUFJLEtBQUtqeEIsTUFBTSxDQUFDa3hCLEdBQUc7SUFDckMsQ0FBQyxDQUFDLE9BQU9ocUMsQ0FBQyxFQUFFO01BQ1IsT0FBTyxJQUFJO0lBQ2Y7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBSkk7RUFBQXFFLE1BQUEsQ0FLQW9qQyxxQkFBcUIsR0FBckIsU0FBQUEscUJBQXFCQSxDQUFDOWlDLEtBQUssRUFBRTtJQUFBLElBQUFnSCxNQUFBO0lBQ3pCLElBQU1zK0IsY0FBYyxHQUFHOWxDLENBQUMsQ0FBQ1EsS0FBSyxDQUFDa0IsTUFBTSxDQUFDO0lBQ3RDLElBQU1vUSxLQUFLLEdBQUdnMEIsY0FBYyxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzVDLElBQU03OUIsU0FBUyxHQUFHbEksQ0FBQyxDQUFDLHFCQUFxQixFQUFFOFIsS0FBSyxDQUFDLENBQUNFLEdBQUcsQ0FBQyxDQUFDOztJQUV2RDtJQUNBLElBQUk4ekIsY0FBYyxDQUFDcGpDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLElBQUlpUyxNQUFNLENBQUNDLFFBQVEsS0FBS0MsU0FBUyxFQUFFO01BQ3pFO0lBQ0o7SUFFQXRILHNFQUFTLENBQUNzMkIsaUJBQWlCLENBQUNDLFlBQVksQ0FBQzU3QixTQUFTLEVBQUU0SixLQUFLLENBQUNpeUIsU0FBUyxDQUFDLENBQUMsRUFBRSw4QkFBOEIsRUFBRSxVQUFDbnRCLEdBQUcsRUFBRTNCLFFBQVEsRUFBSztNQUN0SCxJQUFNbXNCLHFCQUFxQixHQUFHbnNCLFFBQVEsQ0FBQ3BVLElBQUksSUFBSSxDQUFDLENBQUM7TUFDakQsSUFBTW1sQyx3QkFBd0IsR0FBRy93QixRQUFRLENBQUNrbkIsT0FBTyxJQUFJLENBQUMsQ0FBQztNQUN2RDMwQixNQUFJLENBQUM4Uyx1QkFBdUIsQ0FBQzhtQixxQkFBcUIsQ0FBQztNQUNuRDU1QixNQUFJLENBQUMrUyxVQUFVLENBQUM2bUIscUJBQXFCLEVBQUU0RSx3QkFBd0IsQ0FBQztNQUNoRXgrQixNQUFJLENBQUNrUyw0QkFBNEIsQ0FBQzVILEtBQUssQ0FBQ3pSLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO01BQzdFbUgsTUFBSSxDQUFDbzZCLHdCQUF3QixDQUFDLENBQUM7TUFDL0JYLDREQUFXLENBQUMrQywwQkFBMEIsQ0FBQzVDLHFCQUFxQixDQUFDO01BRTdELElBQUksQ0FBQzU1QixNQUFJLENBQUNnTyxxQkFBcUIsQ0FBQzFELEtBQUssQ0FBQyxFQUFFO1FBQ3BDLElBQU1tMEIsUUFBUSxHQUFHbjBCLEtBQUssQ0FBQ2kwQixPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMxbEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3hFc2dDLHlEQUFZLENBQUMsZUFBZSxFQUFFO1VBQUVzRixRQUFRLEVBQVJBO1FBQVMsQ0FBQyxDQUFDO01BQy9DO01BRUF6aEMsUUFBUSxDQUFDMGhDLGFBQWEsQ0FBQyxJQUFJQyxXQUFXLENBQUMseUJBQXlCLEVBQUU7UUFDOURDLE9BQU8sRUFBRSxJQUFJO1FBQ2JDLE1BQU0sRUFBRTtVQUNKbEssT0FBTyxFQUFFaUYscUJBQXFCO1VBQzlCdmdDLElBQUksRUFBRW1sQztRQUNWO01BQ0osQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0E7QUFDQSxLQUhJO0VBQUE5bEMsTUFBQSxDQUlBa2pDLHNCQUFzQixHQUF0QixTQUFBQSxzQkFBc0JBLENBQUNrRCxPQUFPLEVBQUVDLFlBQVksRUFBRTtJQUMxQyxJQUFNQyxVQUFVLEdBQUdGLE9BQU8sQ0FBQzVqQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdDLElBQU0rakMsbUJBQW1CLEdBQUdGLFlBQVksQ0FBQzdqQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEUsSUFBTTQrQixvQkFBb0IsR0FBR3RoQyxDQUFDLE9BQUt5bUMsbUJBQW1CLDhCQUEyQixDQUFDO0lBRWxGem1DLENBQUMsQ0FBQyxxQkFBcUIsRUFBRXVtQyxZQUFZLENBQUMsQ0FBQ3hqQyxJQUFJLENBQUN5akMsVUFBVSxDQUFDO0lBQ3ZEbEYsb0JBQW9CLENBQUN2K0IsSUFBSSxDQUFJLElBQUksQ0FBQ3crQix3QkFBd0IsQ0FBQ2tGLG1CQUFtQixDQUFDLFNBQUlELFVBQVksQ0FBQztJQUNoRyxJQUFJLENBQUN6eEIsdUJBQXVCLENBQUN1c0Isb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQztFQUM3RSxDQUFDO0VBQUFwaEMsTUFBQSxDQUVENlUsdUJBQXVCLEdBQXZCLFNBQUFBLHVCQUF1QkEsQ0FBQzJ4QixRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNoa0MsSUFBSSxDQUFDO01BQ1Zta0MsSUFBSSxFQUFFRixRQUFRO01BQ2QsV0FBVyxFQUFFQztJQUNqQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUExbUMsTUFBQSxDQUVEc1YscUJBQXFCLEdBQXJCLFNBQUFBLHFCQUFxQkEsQ0FBQ2t4QixRQUFRLEVBQUU7SUFDNUIsT0FBTyxDQUFDLENBQUNBLFFBQVEsQ0FBQ1gsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDMW9DLE1BQU07RUFDbEQsQ0FBQztFQUFBNkMsTUFBQSxDQUVEOGMsZ0JBQWdCLEdBQWhCLFNBQUFBLGdCQUFnQkEsQ0FBQzFULEtBQUssRUFBRTtJQUNwQixJQUFJdzlCLDJEQUFBLENBQWN4OUIsS0FBSyxDQUFDLEVBQUU7TUFDdEIsSUFBTXZJLFlBQVksR0FBR3dNLHdFQUFXLENBQUN6TSxXQUFXLENBQUMwSSxTQUFTLENBQ2xERixLQUFLLENBQUN6SSxJQUFJLEVBQ1Y7UUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDcVUsT0FBTyxDQUFDOU07TUFBUztNQUM5QjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBR1ksQ0FBQztNQUVELElBQU0vQyxZQUFZLEdBQUdrSSx3RUFBVyxDQUFDek0sV0FBVyxDQUFDMEksU0FBUyxDQUNsREYsS0FBSyxDQUFDekksSUFBSSxFQUNWO1FBQUUsSUFBSSxFQUFFLElBQUksQ0FBQ3FVLE9BQU8sQ0FBQzdNO01BQVk7TUFDakM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUdZLENBQUM7TUFFRCxJQUFNL0MsZUFBZSxHQUFHaUksd0VBQVcsQ0FBQ3pNLFdBQVcsQ0FBQzBJLFNBQVMsQ0FBQ0YsS0FBSyxDQUFDekksSUFBSSxDQUFDO01BRXJFLElBQUksQ0FBQ2pCLFlBQVksQ0FBQ21uQyxpQkFBaUIsQ0FBQztRQUNoQzFoQyxZQUFZLEVBQVpBLFlBQVk7UUFDWnRFLFlBQVksRUFBWkEsWUFBWTtRQUNadUUsZUFBZSxFQUFmQTtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQzFGLFlBQVksQ0FBQ29uQyxZQUFZLENBQUMsQ0FBQztJQUNwQztFQUNKOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FKSTtFQUFBOW1DLE1BQUEsQ0FLQW1oQyxvQkFBb0IsR0FBcEIsU0FBQUEsb0JBQW9CQSxDQUFBLEVBQUc7SUFBQSxJQUFBcjVCLE1BQUE7SUFDbkIsSUFBSSxDQUFDRixNQUFNLENBQUN2SCxFQUFFLENBQUMsT0FBTyxFQUFFLCtCQUErQixFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUM5REEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUN0QixJQUFNd21DLE9BQU8sR0FBR2puQyxDQUFDLENBQUNRLEtBQUssQ0FBQ0csYUFBYSxDQUFDO01BQ3RDLElBQU1zK0IsU0FBUyxHQUFHajNCLE1BQUksQ0FBQ2tMLFlBQVksQ0FBQ2xMLE1BQUksQ0FBQ0YsTUFBTSxDQUFDO01BQ2hELElBQU00MkIsTUFBTSxHQUFHTyxTQUFTLENBQUNKLFFBQVEsQ0FBQ0gsTUFBTTtNQUN4QyxJQUFNd0ksV0FBVyxHQUFHL1MsUUFBUSxDQUFDdUssTUFBTSxDQUFDNzlCLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDNUQsSUFBTXNtQyxXQUFXLEdBQUdoVCxRQUFRLENBQUN1SyxNQUFNLENBQUM3OUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztNQUU1RCxJQUFJd1ksR0FBRyxHQUFHeW5CLDZEQUFLLENBQUNxRCxXQUFXLENBQUN6RixNQUFNLENBQUMxc0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHbWlCLFFBQVEsQ0FBQ3VLLE1BQU0sQ0FBQzFzQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHazFCLFdBQVc7TUFDcEY7TUFDQSxJQUFJRCxPQUFPLENBQUNwbUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssRUFBRTtRQUNsQ3dZLEdBQUcsR0FBR3luQiw2REFBSyxDQUFDc0csa0NBQWtDLENBQUMvdEIsR0FBRyxFQUFFOHRCLFdBQVcsQ0FBQztNQUNwRSxDQUFDLE1BQU0sSUFBSTl0QixHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBQ2hCQSxHQUFHLEdBQUd5bkIsNkRBQUssQ0FBQ3VHLGtDQUFrQyxDQUFDaHVCLEdBQUcsRUFBRTZ0QixXQUFXLENBQUM7TUFDcEU7O01BRUE7TUFDQWpJLFNBQVMsQ0FBQ0osUUFBUSxDQUFDSCxNQUFNLENBQUMxc0IsR0FBRyxDQUFDcUgsR0FBRyxDQUFDO01BQ2xDO01BQ0E0bEIsU0FBUyxDQUFDSixRQUFRLENBQUN4YyxLQUFLLENBQUN0ZixJQUFJLENBQUNzVyxHQUFHLENBQUM7TUFDbEM7TUFDQXJSLE1BQUksQ0FBQzY1QixrQkFBa0IsQ0FBQzJCLFlBQVksQ0FBQyxDQUFDO01BRXRDeDdCLE1BQUksQ0FBQzQ1Qix3QkFBd0IsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUksQ0FBQzk1QixNQUFNLENBQUN2SCxFQUFFLENBQUMsVUFBVSxFQUFFLDZCQUE2QixFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUMvRDtNQUNBLElBQU1za0MsQ0FBQyxHQUFHdGtDLEtBQUssQ0FBQzhtQyxLQUFLLElBQUk5bUMsS0FBSyxDQUFDbTZCLE9BQU87TUFDdEMsSUFBSW1LLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDVjtRQUNBdGtDLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDMUI7SUFDSixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNxSCxNQUFNLENBQUN2SCxFQUFFLENBQUMsT0FBTyxFQUFFLDZCQUE2QixFQUFFLFlBQU07TUFDekR5SCxNQUFJLENBQUM0NUIsd0JBQXdCLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBSkk7RUFBQTFoQyxNQUFBLENBS0EyVCxnQkFBZ0IsR0FBaEIsU0FBQUEsZ0JBQWdCQSxDQUFDclQsS0FBSyxFQUFFc1QsSUFBSSxFQUFFO0lBQUEsSUFBQTNKLE1BQUE7SUFDMUIsSUFBTW85QixhQUFhLEdBQUd2bkMsQ0FBQyxDQUFDLHdCQUF3QixFQUFFQSxDQUFDLENBQUNRLEtBQUssQ0FBQ2tCLE1BQU0sQ0FBQyxDQUFDO0lBQ2xFLElBQU15UyxjQUFjLEdBQUdvekIsYUFBYSxDQUFDdjFCLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLElBQU1vQyxXQUFXLEdBQUdtekIsYUFBYSxDQUFDMW1DLElBQUksQ0FBQyxhQUFhLENBQUM7O0lBRXJEO0lBQ0EsSUFBSThULE1BQU0sQ0FBQ0MsUUFBUSxLQUFLQyxTQUFTLEVBQUU7TUFDL0I7SUFDSjs7SUFFQTtJQUNBclUsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUV0QjhtQyxhQUFhLENBQ1J2MUIsR0FBRyxDQUFDb0MsV0FBVyxDQUFDLENBQ2hCUixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztJQUUzQixJQUFJLENBQUNrQixRQUFRLENBQUNsUSxJQUFJLENBQUMsQ0FBQzs7SUFFcEI7SUFDQTJJLHNFQUFTLENBQUNtSixJQUFJLENBQUM4d0IsT0FBTyxDQUFDekcsOERBQWlCLENBQUMsSUFBSW5zQixRQUFRLENBQUNkLElBQUksQ0FBQyxDQUFDLEVBQUUsVUFBQzhDLEdBQUcsRUFBRTNCLFFBQVEsRUFBSztNQUM3RWlzQixzRUFBZ0IsQ0FBQ2pzQixRQUFRLENBQUNwVSxJQUFJLENBQUM0bUMsT0FBTyxDQUFDO01BQ3ZDLElBQU1yRCxZQUFZLEdBQUd4dEIsR0FBRyxJQUFJM0IsUUFBUSxDQUFDcFUsSUFBSSxDQUFDd1YsS0FBSztNQUUvQ2t4QixhQUFhLENBQ1J2MUIsR0FBRyxDQUFDbUMsY0FBYyxDQUFDLENBQ25CUCxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztNQUU1QnpKLE1BQUksQ0FBQzJLLFFBQVEsQ0FBQy9RLElBQUksQ0FBQyxDQUFDOztNQUVwQjtNQUNBLElBQUlxZ0MsWUFBWSxFQUFFO1FBQ2Q7UUFDQSxJQUFNL3VCLEdBQUcsR0FBRzdRLFFBQVEsQ0FBQzhRLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDekNELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHNnVCLFlBQVk7UUFFNUIsSUFBSSxDQUFDajZCLE1BQUksQ0FBQ3FMLHFCQUFxQixDQUFDK3hCLGFBQWEsQ0FBQyxFQUFFO1VBQzVDOTVCLHlEQUFVLENBQUMsQ0FBQyxDQUFDZ0ksa0JBQWtCLEdBQUc4eEIsYUFBYTtRQUNuRDtRQUVBLE9BQU83NUIsNkRBQWMsQ0FBQzJILEdBQUcsQ0FBQ0ssV0FBVyxJQUFJTCxHQUFHLENBQUNNLFNBQVMsQ0FBQztNQUMzRDs7TUFFQTtNQUNBLElBQUl4TCxNQUFJLENBQUMwUyxZQUFZLEVBQUU7UUFDbkIxUyxNQUFJLENBQUMwUyxZQUFZLENBQUM2cUIsSUFBSSxDQUFDLENBQUM7UUFFeEIsSUFBSS95QixNQUFNLENBQUNnekIsZUFBZSxFQUFFO1VBQ3hCeDlCLE1BQUksQ0FBQzBTLFlBQVksQ0FBQytxQixNQUFNLENBQUNsakMsUUFBUSxDQUFDLHFCQUFxQixDQUFDO1FBQzVEO1FBRUEsSUFBSSxDQUFDeUYsTUFBSSxDQUFDcUwscUJBQXFCLENBQUMreEIsYUFBYSxDQUFDLEVBQUU7VUFDNUNwOUIsTUFBSSxDQUFDMFMsWUFBWSxDQUFDcEgsa0JBQWtCLEdBQUc4eEIsYUFBYTtRQUN4RDtRQUVBcDlCLE1BQUksQ0FBQ3VTLGlCQUFpQixDQUFDdlMsTUFBSSxDQUFDMFMsWUFBWSxFQUFFNUgsUUFBUSxDQUFDcFUsSUFBSSxDQUFDZ25DLFNBQVMsQ0FBQzlvQixFQUFFLENBQUM7TUFDekUsQ0FBQyxNQUFNO1FBQ0g1VSxNQUFJLENBQUMySyxRQUFRLENBQUNsUSxJQUFJLENBQUMsQ0FBQztRQUNwQjtRQUNBdUYsTUFBSSxDQUFDMjlCLFVBQVUsQ0FBQzd5QixRQUFRLENBQUNwVSxJQUFJLENBQUNnbkMsU0FBUyxDQUFDRSxRQUFRLElBQUk1OUIsTUFBSSxDQUFDK0ssT0FBTyxDQUFDOHlCLElBQUksQ0FBQ3R4QixJQUFJLENBQUM7TUFDL0U7SUFDSixDQUFDLENBQUM7SUFFRixJQUFJLENBQUMzQix1QkFBdUIsQ0FBQ3d5QixhQUFhLENBQUN2eUIsSUFBSSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO0VBQzFFOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxJO0VBQUE5VSxNQUFBLENBTUErbkMsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUNDLFVBQVUsRUFBRUMsVUFBVSxFQUFFO0lBQ25DLElBQU0zVixPQUFPLEdBQUc7TUFDWm1FLFFBQVEsRUFBRSxjQUFjO01BQ3hCekgsTUFBTSxFQUFFO1FBQ0prWixPQUFPLEVBQUVGO01BQ2IsQ0FBQztNQUNERyxNQUFNLEVBQUU7UUFDSjN4QixJQUFJLEVBQUU7VUFDRjR4QixXQUFXLEVBQUU7WUFDVGg1QixLQUFLLEVBQUU7VUFDWDtRQUNKO01BQ0o7SUFDSixDQUFDO0lBRUQvQixzRUFBUyxDQUFDbUosSUFBSSxDQUFDNnhCLFVBQVUsQ0FBQy9WLE9BQU8sRUFBRTJWLFVBQVUsQ0FBQztFQUNsRDs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBSkk7RUFBQWpvQyxNQUFBLENBS0E0bkMsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUNuK0IsR0FBRyxFQUFFO0lBQ1osSUFBSSxJQUFJLENBQUNnOEIsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUNoeEIsTUFBTSxDQUFDNnpCLFNBQVMsRUFBRTtNQUMvQzd6QixNQUFNLENBQUNreEIsR0FBRyxDQUFDckksUUFBUSxHQUFHN3pCLEdBQUc7SUFDN0IsQ0FBQyxNQUFNO01BQ0hnTCxNQUFNLENBQUM2b0IsUUFBUSxHQUFHN3pCLEdBQUc7SUFDekI7RUFDSjs7RUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQU5JO0VBQUF6SixNQUFBLENBT0F3YyxpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFDK3JCLEtBQUssRUFBRVAsVUFBVSxFQUFFQyxVQUFVLEVBQUU7SUFDN0MsSUFBSSxDQUFDRixjQUFjLENBQUNDLFVBQVUsRUFBRSxVQUFDdHhCLEdBQUcsRUFBRTNCLFFBQVEsRUFBSztNQUMvQyxJQUFJMkIsR0FBRyxFQUFFO1FBQ0w7TUFDSjtNQUVBNnhCLEtBQUssQ0FBQ0MsYUFBYSxDQUFDenpCLFFBQVEsQ0FBQzs7TUFFN0I7TUFDQSxJQUFNbFYsS0FBSyxHQUFHQyxDQUFDLENBQUMsTUFBTSxDQUFDO01BQ3ZCLElBQU0yb0MsYUFBYSxHQUFHM29DLENBQUMsQ0FBQyxzQkFBc0IsRUFBRXlvQyxLQUFLLENBQUNHLFFBQVEsQ0FBQztNQUMvRCxJQUFNQyxZQUFZLEdBQUc3b0MsQ0FBQyxDQUFDLDZCQUE2QixDQUFDO01BQ3JELElBQU02K0IsUUFBUSxHQUFHOEosYUFBYSxDQUFDOW5DLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO01BQ3hELElBQU1pb0MsZ0JBQWdCLEdBQUc5b0MsQ0FBQyxDQUFDLHlCQUF5QixDQUFDO01BQ3JELElBQU0rb0MsbUJBQW1CLEdBQUcvb0MsQ0FBQyxDQUFDLDRDQUE0QyxDQUFDO01BQzNFLElBQU1ncEMsY0FBYyxHQUFHaHBDLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQztNQUN4RCxJQUFNaXBDLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQUEsRUFBUztRQUM5QixJQUFNQyxpQkFBaUIsR0FBR2xwQyxDQUFDLENBQUMsNEJBQTRCLENBQUM7UUFFekRrcEMsaUJBQWlCLENBQUN4cEIsTUFBTSxDQUFDLCtDQUErQyxDQUFDO1FBQ3pFMWYsQ0FBQyxDQUFDLDRCQUE0QixFQUFFa3BDLGlCQUFpQixDQUFDLENBQUN0a0MsSUFBSSxDQUFDLENBQUM7UUFDekQrUCxNQUFNLENBQUM2b0IsUUFBUSxDQUFDMkwsTUFBTSxDQUFDLENBQUM7TUFDNUIsQ0FBQztNQUVETixZQUFZLENBQUNua0MsUUFBUSxDQUFDLHNCQUFzQixDQUFDO01BQzdDM0UsS0FBSyxDQUFDaUYsT0FBTyxDQUFDLHNCQUFzQixFQUFFNjVCLFFBQVEsQ0FBQztNQUUvQyxJQUFJc0osVUFBVSxFQUFFO1FBQ1pBLFVBQVUsQ0FBQ2x6QixRQUFRLENBQUM7TUFDeEI7TUFFQSxJQUFJNnpCLGdCQUFnQixDQUFDenJDLE1BQU0sSUFBSTByQyxtQkFBbUIsQ0FBQzFyQyxNQUFNLEVBQUU7UUFDdkQwckMsbUJBQW1CLENBQUN4b0MsRUFBRSxDQUFDLE9BQU8sRUFBRTBvQyxtQkFBbUIsQ0FBQztRQUNwREQsY0FBYyxDQUFDem9DLEVBQUUsQ0FBQyxPQUFPLEVBQUUwb0MsbUJBQW1CLENBQUM7TUFDbkQ7SUFDSixDQUFDLENBQUM7RUFDTjs7RUFFQTtBQUNKO0FBQ0E7QUFDQSxLQUhJO0VBQUEvb0MsTUFBQSxDQUlBb2EsdUJBQXVCLEdBQXZCLFNBQUFBLHVCQUF1QkEsQ0FBQ3paLElBQUksRUFBRTtJQUMxQnNnQyxtQkFBQSxDQUFBNWtDLFNBQUEsQ0FBTStkLHVCQUF1QixDQUFBOWMsSUFBQSxPQUFDcUQsSUFBSTtJQUNsQyxJQUFJLENBQUNtYyxnQkFBZ0IsQ0FBQ25jLElBQUksQ0FBQ3lJLEtBQUssQ0FBQztFQUNyQyxDQUFDO0VBQUFwSixNQUFBLENBRUQwaEMsd0JBQXdCLEdBQXhCLFNBQUFBLHdCQUF3QkEsQ0FBQSxFQUFHO0lBQ3ZCLElBQU05dkIsS0FBSyxHQUFHOVIsQ0FBQyxDQUFDLDBCQUEwQixDQUFDO0lBQzNDLElBQU1vcEMsYUFBYSxHQUFHdDNCLEtBQUssQ0FBQ3UzQixjQUFjLENBQUMsQ0FBQztJQUU1QyxJQUFNQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBRXpCLFNBQUE1NUIsU0FBQSxHQUFBVSwrQkFBQSxDQUEyQmc1QixhQUFhLEdBQUF6NUIsS0FBQSxJQUFBQSxLQUFBLEdBQUFELFNBQUEsSUFBQWpTLElBQUEsR0FBRTtNQUFBLElBQS9COHJDLFlBQVksR0FBQTU1QixLQUFBLENBQUFqUyxLQUFBO01BQ25CLElBQVFvRixJQUFJLEdBQVl5bUMsWUFBWSxDQUE1QnptQyxJQUFJO1FBQUVwRixLQUFLLEdBQUs2ckMsWUFBWSxDQUF0QjdyQyxLQUFLO01BRW5CLElBQUlvRixJQUFJLEtBQUssWUFBWSxFQUFFO1FBQ3ZCd21DLGNBQWMsQ0FBQ3BoQyxTQUFTLEdBQUcvRyxNQUFNLENBQUN6RCxLQUFLLENBQUM7TUFDNUM7TUFFQSxJQUFJb0YsSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUNsQndtQyxjQUFjLENBQUN6SyxRQUFRLEdBQUcxOUIsTUFBTSxDQUFDekQsS0FBSyxDQUFDO01BQzNDO01BRUEsSUFBSW9GLElBQUksQ0FBQzBoQixLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDekIsSUFBTWdsQixhQUFhLEdBQUc7VUFDbEIxcUIsUUFBUSxFQUFFM2QsTUFBTSxDQUFDMkIsSUFBSSxDQUFDMGhCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN2Q2lsQixXQUFXLEVBQUUvckM7UUFDakIsQ0FBQztRQUVENHJDLGNBQWMsQ0FBQ0ksZ0JBQWdCLEdBQUdKLGNBQWMsWUFBZEEsY0FBYyxDQUFFSSxnQkFBZ0IsTUFBQTc0QixNQUFBLENBQ3hEeTRCLGNBQWMsQ0FBQ0ksZ0JBQWdCLEdBQUVGLGFBQWEsS0FDbEQsQ0FBQ0EsYUFBYSxDQUFDO01BQ3pCO0lBQ0o7SUFFQWhsQyxRQUFRLENBQUMwaEMsYUFBYSxDQUFDLElBQUlDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRTtNQUN0REMsT0FBTyxFQUFFLElBQUk7TUFDYkMsTUFBTSxFQUFFO1FBQUVpRCxjQUFjLEVBQWRBO01BQWU7SUFDN0IsQ0FBQyxDQUFDLENBQUM7RUFDUCxDQUFDO0VBQUFwcEMsTUFBQSxDQUVEeWhDLGtCQUFrQixHQUFsQixTQUFBQSxrQkFBa0JBLENBQUEsRUFBRztJQUNqQixJQUFJLENBQUM3NUIsTUFBTSxDQUFDb1EsSUFBSSxDQUFDLFVBQUM3YixDQUFDLEVBQUVzdEMsS0FBSyxFQUFLO01BQzNCLFNBQVNDLFVBQVVBLENBQUNDLFVBQVUsRUFBRTtRQUM1QixJQUFNQyxhQUFhLEdBQUdELFVBQVUsQ0FBQ255QixhQUFhLENBQUMseUJBQXlCLENBQUM7UUFDekUsSUFBTXF5QixXQUFXLEdBQUdGLFVBQVUsQ0FBQ255QixhQUFhLENBQUMsdUJBQXVCLENBQUM7UUFDckUsSUFBTXN5QixZQUFZLEdBQUdILFVBQVUsQ0FBQ255QixhQUFhLENBQUMsd0JBQXdCLENBQUM7UUFDdkUsSUFBTWtXLEtBQUssR0FBR3VHLFFBQVEsQ0FBQzJWLGFBQWEsQ0FBQ3BzQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQy9DLElBQU1td0IsSUFBSSxHQUFHc0csUUFBUSxDQUFDNlYsWUFBWSxDQUFDdHNDLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDN0MsSUFBSXVzQyxXQUFXO1FBRWYsSUFBSSxDQUFDOW9DLE1BQU0sQ0FBQytvQyxLQUFLLENBQUN0YyxLQUFLLENBQUMsSUFBSSxDQUFDenNCLE1BQU0sQ0FBQytvQyxLQUFLLENBQUNyYyxJQUFJLENBQUMsRUFBRTtVQUM3QyxRQUFRRCxLQUFLO1lBQ2IsS0FBSyxDQUFDO2NBQ0ZxYyxXQUFXLEdBQUtwYyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSUEsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUtBLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFJLEVBQUUsR0FBRyxFQUFFO2NBQ2xGO1lBQ0osS0FBSyxDQUFDO1lBQUUsS0FBSyxDQUFDO1lBQUUsS0FBSyxDQUFDO1lBQUUsS0FBSyxFQUFFO2NBQzNCb2MsV0FBVyxHQUFHLEVBQUU7Y0FDaEI7WUFDSjtjQUNJQSxXQUFXLEdBQUcsRUFBRTtVQUNwQjtRQUNKO1FBRUEsS0FBSyxJQUFJdGMsR0FBRyxHQUFHLEVBQUUsRUFBRUEsR0FBRyxJQUFJLEVBQUUsRUFBRUEsR0FBRyxFQUFFLEVBQUU7VUFDakMsSUFBTWxNLE1BQU0sR0FBR3NvQixXQUFXLENBQUNyeUIsYUFBYSxxQkFBa0JpVyxHQUFHLFFBQUksQ0FBQztVQUNsRSxJQUFJQSxHQUFHLElBQUlzYyxXQUFXLElBQUksQ0FBQ3hvQixNQUFNLEVBQUU7WUFDL0Jzb0IsV0FBVyxDQUFDdlgsT0FBTyxDQUFDL1ksR0FBRyxDQUFDLElBQUkwd0IsTUFBTSxDQUFDeGMsR0FBRyxFQUFFQSxHQUFHLENBQUMsQ0FBQztVQUNqRCxDQUFDLE1BQU0sSUFBSUEsR0FBRyxHQUFHc2MsV0FBVyxJQUFJeG9CLE1BQU0sRUFBRTtZQUNwQ0EsTUFBTSxDQUFDcmYsTUFBTSxDQUFDLENBQUM7VUFDbkI7UUFDSjtNQUNKO01BRUFwQyxDQUFDLENBQUMycEMsS0FBSyxDQUFDLENBQUNwcEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDMUUsQ0FBQyxFQUFLO1FBQ3pCLElBQU1ndUMsVUFBVSxHQUFHaHVDLENBQUMsQ0FBQzZGLE1BQU0sSUFBSTdGLENBQUMsQ0FBQzZGLE1BQU0sQ0FBQ1IsT0FBTyxJQUFJckYsQ0FBQyxDQUFDNkYsTUFBTSxDQUFDUixPQUFPLENBQUMsK0JBQStCLENBQUM7UUFDcEcsSUFBSTJvQyxVQUFVLEVBQUU7VUFDWkQsVUFBVSxDQUFDQyxVQUFVLENBQUM7UUFDMUI7TUFDSixDQUFDLENBQUM7TUFFRkYsS0FBSyxDQUFDL0UsZ0JBQWdCLENBQUMsK0JBQStCLENBQUMsQ0FBQzdxQixPQUFPLENBQUMsVUFBQzh2QixVQUFVLEVBQUs7UUFDNUVELFVBQVUsQ0FBQ0MsVUFBVSxDQUFDO01BQzFCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBdDVCLGNBQUE7QUFBQSxFQW5zQnVDNnJCLDZEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1nTyx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQXlCQSxDQUFHLzFCLFFBQVEsRUFBSTtFQUNqRCxJQUFNZzJCLEdBQUcsR0FBRyxJQUFJejFCLFFBQVEsQ0FBQyxDQUFDO0VBRTFCLElBQUk7SUFDQSxTQUFBbEYsU0FBQSxHQUFBVSwrQkFBQSxDQUF5QmlFLFFBQVEsR0FBQTFFLEtBQUEsSUFBQUEsS0FBQSxHQUFBRCxTQUFBLElBQUFqUyxJQUFBLEdBQUU7TUFBQSxJQUFBNnNDLFdBQUEsR0FBQTM2QixLQUFBLENBQUFqUyxLQUFBO1FBQXZCOEQsR0FBRyxHQUFBOG9DLFdBQUE7UUFBRXQ0QixHQUFHLEdBQUFzNEIsV0FBQTtNQUNoQixJQUFJdDRCLEdBQUcsS0FBSyxFQUFFLEVBQUU7UUFDWnE0QixHQUFHLENBQUMzcUIsTUFBTSxDQUFDbGUsR0FBRyxFQUFFd1EsR0FBRyxDQUFDO01BQ3hCO0lBQ0o7RUFDSixDQUFDLENBQUMsT0FBT25XLENBQUMsRUFBRTtJQUNSOFYsT0FBTyxDQUFDQyxHQUFHLENBQUMvVixDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3BCO0VBRUEsT0FBT3d1QyxHQUFHO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNRSx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQXdCQSxDQUFHbDJCLFFBQVEsRUFBSTtFQUNoRCxJQUFNZzJCLEdBQUcsR0FBRyxJQUFJejFCLFFBQVEsQ0FBQyxDQUFDO0VBRTFCLElBQUk7SUFDQSxTQUFBNDFCLFVBQUEsR0FBQXA2QiwrQkFBQSxDQUF5QmlFLFFBQVEsR0FBQW8yQixNQUFBLElBQUFBLE1BQUEsR0FBQUQsVUFBQSxJQUFBL3NDLElBQUEsR0FBRTtNQUFBLElBQUFpdEMsWUFBQSxHQUFBRCxNQUFBLENBQUEvc0MsS0FBQTtRQUF2QjhELEdBQUcsR0FBQWtwQyxZQUFBO1FBQUUxNEIsR0FBRyxHQUFBMDRCLFlBQUE7TUFDaEIsSUFBSSxFQUFFMTRCLEdBQUcsWUFBWXdRLElBQUksQ0FBQyxJQUFJeFEsR0FBRyxDQUFDbFAsSUFBSSxJQUFJa1AsR0FBRyxDQUFDbW1CLElBQUksRUFBRTtRQUNoRGtTLEdBQUcsQ0FBQzNxQixNQUFNLENBQUNsZSxHQUFHLEVBQUV3USxHQUFHLENBQUM7TUFDeEI7SUFDSjtFQUNKLENBQUMsQ0FBQyxPQUFPblcsQ0FBQyxFQUFFO0lBQ1I4VixPQUFPLENBQUMwRSxLQUFLLENBQUN4YSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3RCO0VBRUEsT0FBT3d1QyxHQUFHO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTXRKLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUcxc0IsUUFBUTtFQUFBLE9BQUkrMUIseUJBQXlCLENBQUNHLHdCQUF3QixDQUFDbDJCLFFBQVEsQ0FBQyxDQUFDO0FBQUEsRTs7Ozs7Ozs7Ozs7Ozs7O0FDaEQvRDtBQUUzQyxJQUFNNHNCLFdBQVcsR0FBRztFQUNoQitDLDBCQUEwQixFQUFFLFNBQTVCQSwwQkFBMEJBLENBQUdILGlCQUFpQixFQUFLO0lBQy9DLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNqb0IsS0FBSyxJQUFJN1Ysb0RBQVcsRUFBRTtJQUU3QyxJQUFJNlYsS0FBSyxHQUFHLENBQUM7SUFFYixJQUFJLENBQUNpb0IsaUJBQWlCLENBQUNqb0IsS0FBSyxDQUFDaWtCLFdBQVcsRUFBRTtNQUN0QyxJQUFJZ0UsaUJBQWlCLENBQUNqb0IsS0FBSyxDQUFDQyxXQUFXLEVBQUU7UUFDckNELEtBQUssR0FBR2lvQixpQkFBaUIsQ0FBQ2pvQixLQUFLLENBQUNDLFdBQVcsQ0FBQ25lLEtBQUs7TUFDckQ7TUFFQSxJQUFJbW1DLGlCQUFpQixDQUFDam9CLEtBQUssQ0FBQ1EsUUFBUSxFQUFFO1FBQ2xDUixLQUFLLEdBQUdpb0IsaUJBQWlCLENBQUNqb0IsS0FBSyxDQUFDUSxRQUFRLENBQUMxZSxLQUFLO01BQ2xEO0lBQ0o7SUFFQSxJQUFNaXRDLEdBQUcsR0FBRyxJQUFJeEUsV0FBVyxDQUFDLGdDQUFnQyxFQUFFO01BQzFERSxNQUFNLEVBQUU7UUFDSnVFLE1BQU0sRUFBRWh2QjtNQUNaO0lBQ0osQ0FBQyxDQUFDO0lBRUZqSCxNQUFNLENBQUN1eEIsYUFBYSxDQUFDeUUsR0FBRyxDQUFDO0VBQzdCO0FBQ0osQ0FBQztBQUVELGlFQUFlMUosV0FBVyxFOzs7Ozs7Ozs7Ozs7Ozs7QUM1Qm5CLElBQU1sN0IsV0FBVyxHQUFHLENBQUMsQ0FBQ3ZCLFFBQVEsQ0FBQ3FtQyxZQUFZO0FBRTNDLElBQU03SixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFHOEosVUFBVTtFQUFBLE9BQUluNkIsS0FBSyxDQUFDcFUsU0FBUyxDQUFDbVMsS0FBSyxDQUFDbFIsSUFBSSxDQUFDc3RDLFVBQVUsQ0FBQztBQUFBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmxFO0FBQUEsSUFFR24rQixZQUFZO0VBQzdCLFNBQUFBLGFBQVk5TSxRQUFRLEVBQUU7SUFDbEIsSUFBSSxDQUFDMEMsVUFBVSxHQUFHMUMsUUFBUSxDQUFDUSxJQUFJLENBQUMsMkJBQTJCLENBQUM7SUFDNUQsSUFBSSxDQUFDMHFDLGdCQUFnQixHQUFHbHJDLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQzFELElBQUksQ0FBQzJxQyxpQkFBaUIsR0FBR25yQyxRQUFRLENBQUNRLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUNuRSxJQUFJLENBQUNpZCxZQUFZLEdBQUcsQ0FBQyxDQUFDO0VBQzFCO0VBQUMsSUFBQXBkLE1BQUEsR0FBQXlNLFlBQUEsQ0FBQXBRLFNBQUE7RUFBQTJELE1BQUEsQ0FFRHNZLElBQUksR0FBSixTQUFBQSxJQUFJQSxDQUFBLEVBQUc7SUFDSCxJQUFJLENBQUNyWSxVQUFVLENBQUMsQ0FBQztJQUNqQixJQUFJLENBQUM4cUMsWUFBWSxDQUFDLENBQUM7RUFDdkIsQ0FBQztFQUFBL3FDLE1BQUEsQ0FFRHlCLFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFDdXBDLE1BQU0sRUFBRTtJQUNqQixJQUFJLENBQUM1dEIsWUFBWSxHQUFBNWdCLE1BQUEsQ0FBQXltQixNQUFBLEtBQVErbkIsTUFBTSxDQUFFO0lBRWpDLElBQUksQ0FBQzFsQyxjQUFjLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDO0VBQ3hCLENBQUM7RUFBQXZGLE1BQUEsQ0FFRDZtQyxpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFDbUUsTUFBTSxFQUFFO0lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUNDLFVBQVUsRUFBRTtNQUNsQixJQUFJLENBQUNBLFVBQVUsR0FBRztRQUNkOWxDLFlBQVksRUFBRSxJQUFJLENBQUM5QyxVQUFVLENBQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUNxQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3JEM0IsWUFBWSxFQUFFLElBQUksQ0FBQ3dCLFVBQVUsQ0FBQ0csSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3JENEMsZUFBZSxFQUFFLElBQUksQ0FBQy9DLFVBQVUsQ0FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQ3FDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDM0Qwb0MsY0FBYyxFQUFFLElBQUksQ0FBQzl0QixZQUFZLENBQUM4dEI7TUFDdEMsQ0FBQztJQUNMO0lBQ0EsSUFBSSxDQUFDenBDLFlBQVksQ0FBQ3VwQyxNQUFNLENBQUM7RUFDN0IsQ0FBQztFQUFBaHJDLE1BQUEsQ0FFRDhtQyxZQUFZLEdBQVosU0FBQUEsWUFBWUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxJQUFJLENBQUNtRSxVQUFVLEVBQUU7TUFDakIsSUFBSSxDQUFDeHBDLFlBQVksQ0FBQyxJQUFJLENBQUN3cEMsVUFBVSxDQUFDO01BQ2xDLE9BQU8sSUFBSSxDQUFDQSxVQUFVO0lBQzFCO0VBQ0osQ0FBQztFQUFBanJDLE1BQUEsQ0FFRG1yQyxjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQ3h2QyxDQUFDLEVBQUU7SUFDZEEsQ0FBQyxDQUFDNEUsY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBTXdtQyxPQUFPLEdBQUdqbkMsQ0FBQyxDQUFDbkUsQ0FBQyxDQUFDOEUsYUFBYSxDQUFDO0lBQ2xDLElBQU11cUMsTUFBTSxHQUFHO01BQ1g3bEMsWUFBWSxFQUFFNGhDLE9BQU8sQ0FBQ3ZrQyxJQUFJLENBQUMsa0NBQWtDLENBQUM7TUFDOUQzQixZQUFZLEVBQUVrbUMsT0FBTyxDQUFDdmtDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztNQUMvRDRDLGVBQWUsRUFBRTJoQyxPQUFPLENBQUN2a0MsSUFBSSxDQUFDLHFDQUFxQyxDQUFDO01BQ3BFMG9DLGNBQWMsRUFBRW5FLE9BQU87TUFDdkJxRSxZQUFZLEVBQUVyRSxPQUFPLENBQUN4QyxRQUFRLENBQUMsQ0FBQyxDQUFDaDZCLEtBQUssQ0FBQyxDQUFDLENBQUMvSCxJQUFJLENBQUMsS0FBSztJQUN2RCxDQUFDO0lBQ0QsSUFBSSxDQUFDZixZQUFZLENBQUN1cEMsTUFBTSxDQUFDO0VBQzdCLENBQUM7RUFBQWhyQyxNQUFBLENBRURzRixjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQSxFQUFHO0lBQ2IsSUFBSSxDQUFDd2xDLGlCQUFpQixDQUFDbm1DLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDL0MsSUFBSSxJQUFJLENBQUN5WSxZQUFZLENBQUM4dEIsY0FBYyxFQUFFO01BQ2xDLElBQUksQ0FBQzl0QixZQUFZLENBQUM4dEIsY0FBYyxDQUFDMW1DLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDMUQ7RUFDSixDQUFDO0VBQUF4RSxNQUFBLENBRUR1RixhQUFhLEdBQWIsU0FBQUEsYUFBYUEsQ0FBQSxFQUFHO0lBQ1osSUFBTU0sV0FBVyxHQUFHQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUUzRCxJQUFJLENBQUNMLFFBQVEsQ0FBQ2hGLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQ2lGLElBQUksQ0FDL0IsSUFBSSxDQUFDd1gsWUFBWSxDQUFDalksWUFBWSxFQUM5QixJQUFJLENBQUNpWSxZQUFZLENBQUN2YyxZQUFZLEVBQzlCLElBQUksQ0FBQ3VjLFlBQVksQ0FBQ2hZLGVBQ3RCLENBQUM7SUFFRCxJQUFJLENBQUMvQyxVQUFVLENBQUNHLElBQUksQ0FBQztNQUNqQixpQkFBaUIsRUFBRSxJQUFJLENBQUM0YSxZQUFZLENBQUN2YztJQUN6QyxDQUFDLENBQUM7SUFDRixJQUFJLENBQUNncUMsZ0JBQWdCLENBQUNyb0MsSUFBSSxDQUFDO01BQ3ZCNm9DLEdBQUcsRUFBRSxJQUFJLENBQUNqdUIsWUFBWSxDQUFDZ3VCLFlBQVk7TUFDbkNwcUIsS0FBSyxFQUFFLElBQUksQ0FBQzVELFlBQVksQ0FBQ2d1QjtJQUM3QixDQUFDLENBQUM7SUFFRixJQUFJdmxDLFdBQVcsRUFBRTtNQUNiLElBQU1JLGdCQUFnQixHQUFHO1FBQ3JCLGtCQUFrQixXQUFTLElBQUksQ0FBQ21YLFlBQVksQ0FBQ2pZLFlBQVksTUFBRztRQUM1RCxxQkFBcUIsRUFBRSxRQUFRO1FBQy9CLG1CQUFtQixFQUFFLFdBQVc7UUFDaEMsbUJBQW1CLEVBQUUsYUFBYTtRQUNsQyxpQkFBaUIsRUFBRTtNQUN2QixDQUFDO01BRUQsSUFBSSxDQUFDMGxDLGdCQUFnQixDQUFDM2tDLEdBQUcsQ0FBQ0QsZ0JBQWdCLENBQUM7SUFDL0M7RUFDSixDQUFDO0VBQUFqRyxNQUFBLENBRURtRyxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsSUFBTVQsZUFBZSxHQUFHNUYsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQy9DLElBQU1zRyxlQUFlLEdBQUdWLGVBQWUsQ0FBQ1csTUFBTSxDQUFDLENBQUM7SUFDaEQsSUFBTUMsY0FBYyxHQUFHWixlQUFlLENBQUNhLEtBQUssQ0FBQyxDQUFDO0lBRTlDLElBQU1DLE1BQU0sR0FBRyxJQUFJLENBQUNiLFFBQVEsQ0FBQ2hGLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzhGLEtBQUs7SUFDbkQsSUFBTUosTUFBTSxHQUFHRyxNQUFNLENBQUNILE1BQU0sQ0FBQyxDQUFDO0lBQzlCLElBQU1FLEtBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFLLENBQUMsQ0FBQztJQUU1QixJQUFJRixNQUFNLEdBQUdELGVBQWUsSUFBSUcsS0FBSyxHQUFHRCxjQUFjLEVBQUU7TUFDcEQsSUFBSSxDQUFDWCxRQUFRLENBQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNrRCxJQUFJLENBQUMsQ0FBQztJQUN6QztFQUNKLENBQUM7RUFBQTdELE1BQUEsQ0FFRCtxQyxZQUFZLEdBQVosU0FBQUEsWUFBWUEsQ0FBQSxFQUFHO0lBQUEsSUFBQTdxQyxLQUFBO0lBQ1gsSUFBSSxDQUFDeUYsUUFBUSxHQUFHLElBQUksQ0FBQ3RELFVBQVUsQ0FBQ3NFLFFBQVEsQ0FBQztNQUNyQ0MsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUE7UUFBQSxPQUFRMUcsS0FBSSxDQUFDaUcsVUFBVSxDQUFDLENBQUM7TUFBQTtNQUMvQlUsV0FBVyxFQUFFLEVBQUU7TUFDZkMsYUFBYSxFQUFFO0lBQ25CLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTlHLE1BQUEsQ0FFREMsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQzZxQyxpQkFBaUIsQ0FBQ3pxQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzhxQyxjQUFjLENBQUNqdUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3RFLENBQUM7RUFBQSxPQUFBdVAsWUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9leWV2YS9pbWFnZS1nYWxsZXJ5LmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvcHJvZHVjdC1kZXRhaWxzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvc2FsZS1jb3VudGRvd24uanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvY29uc3RhbnRzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL2luZGV4LmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL3JhZGlvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvYXBpLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9iYW5uZXItdXRpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2llLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9pbWFnZS1nYWxsZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZWFzeXpvb20nO1xuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcbmltcG9ydCB7IGNyZWF0ZUZvY3VzVHJhcCB9IGZyb20gJ2ZvY3VzLXRyYXAnO1xuaW1wb3J0IHsgdG9vbHMgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkgZnJvbSAnLi4vLi4vdGhlbWUvcHJvZHVjdC9pbWFnZS1nYWxsZXJ5JztcblxuY29uc3QgREVGQVVMVF9TVEVQID0gMzYwO1xuY2xhc3MgSW1hZ2VHYWxsZXJ5TW9kYWwge1xuICAgIG1vZGFsVGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtb3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJDbG9zZVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5DbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tZWFzeXpvb21cIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLWltZy1jb250YWluZXJcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZtYWluSW1hZ2VMaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi0zNjBcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC0zNjAtaW1nLWNvbnRhaW5lclwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtaW1nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkXCIgZGF0YS1zaXplcz1cImF1dG9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLXByZXZpb3VzXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wcmV2aW91cz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctbGVmdC1sb25nXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLXBsYXlcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBsYXk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXBsYXlcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlBsYXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1wYXVzZVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGF1c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXBhdXNlXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5QYXVzZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLW5leHRcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLW5leHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LXJpZ2h0LWxvbmdcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tdmlkZW9cIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxhenlsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aXRsZVwiPnt7bmFtZX19PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3sjdmlkZW9zLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC12aWRlb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbGFiZWxcIj57e3ZpZGVvc0xhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyN2aWRlb3N9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svdmlkZW9zfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L3ZpZGVvcy5sZW5ndGh9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXMzNjAubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLTM2MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sYWJlbFwiPnt7aW1hZ2VzMzYwTGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlczM2MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlczM2MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXMzNjAubGVuZ3RofX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1pbWFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbGFiZWxcIj57e2ltYWdlc0xhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SW1hZ2VHYWxsZXJ5P30gaW1hZ2VHYWxsZXJ5XG4gICAgICogQHBhcmFtIHtqUXVlcnk/fSAkZ2FsbGVyeVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGltYWdlR2FsbGVyeSA9IG51bGwsICRnYWxsZXJ5ID0gbnVsbCkge1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeSA9IGltYWdlR2FsbGVyeTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeSA9ICRnYWxsZXJ5O1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuXG4gICAgICAgIGlmIChpbWFnZUdhbGxlcnkgJiYgJGdhbGxlcnkpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLiRnYWxsZXJ5KSB7XG4gICAgICAgICAgICAvLyBvcGVuIG1vZGFsIHdoZW4gY2xpY2sgb24gdmlkZW8sIDM2MCB2aWV3LCBvciBtb3JlIGltYWdlIHRodW1ibmFpbHNcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlcbiAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS1tb3JlXScpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrJylcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3Jjc2V0ID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwID0gJGEuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0nKS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IE51bWJlcihpbWFnZVVybC5zcGxpdCgnIycpWzFdKSB8fCBERUZBVUxUX1NURVBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbChpbWFnZVVybCwgaW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdmlkZW9JZCwgc3RlcCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIGNsb3NlIGJ1dHRvblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBwcmVzcyBFc2NhcGUga2V5XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5vbigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIG91dHNpZGUgKG92ZXJsYXkpXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRnYWxsZXJ5TW9kYWwuaXMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGltYWdlIHRodW1ibmFpbHNcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZShcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyksXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB2aWRlbyB0aHVtYm5haWxzXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJyk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5WaWRlbyh2aWRlb0lkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gMzYwIGltYWdlIHRodW1ibmFpbHNcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsU3RlcCA9ICRhLmRhdGEoJ2V5ZXZhSW1hZ2VHYWxsZXJ5TW9kYWxJdGVtUm90YXRvcicpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICB0b3RhbFN0ZXAsXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcHJldmlvdXNdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91czM2MFN0ZXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLW5leHRdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5uZXh0MzYwU3RlcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGxheV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXkzNjAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBhdXNlXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucGF1c2UzNjAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveU1vZGFsKCkge1xuICAgICAgICBpZiAodGhpcy4kZ2FsbGVyeU1vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwgPSAkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgJG1haW5JbWFnZUxpbmsgPSB0aGlzLmltYWdlR2FsbGVyeS4kbWFpbkltYWdlLmZpbmQoJ2EnKS5jbG9uZSgpO1xuICAgICAgICAkbWFpbkltYWdlTGluay5maW5kKCdpbWcnKS5yZW1vdmVBdHRyKCdkYXRhLXpvb20taW1hZ2UnKS5hdHRyKCdkYXRhLWV5ZXZhLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZScsICcnKTtcblxuICAgICAgICBjb25zdCBtYWluSW1hZ2VMaW5rRWxlbWVudCA9ICRtYWluSW1hZ2VMaW5rLmdldCgwKT8ub3V0ZXJIVE1MO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy4kZ2FsbGVyeS5jbG9zZXN0KCcucHJvZHVjdFZpZXcnKS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LXRpdGxlXScpLnRleHQoKTtcbiAgICAgICAgY29uc3QgdmlkZW9zTGFiZWwgPSB0aGlzLiRnYWxsZXJ5LmRhdGEoJ3ZpZGVvc0xhYmVsJykgfHwgJ1ZpZGVvcyc7XG4gICAgICAgIGNvbnN0IGltYWdlczM2MExhYmVsID0gdGhpcy4kZ2FsbGVyeS5kYXRhKCdpbWFnZXMzNjBMYWJlbCcpIHx8ICczNjAgVmlldyc7XG4gICAgICAgIGNvbnN0IGltYWdlc0xhYmVsID0gdGhpcy4kZ2FsbGVyeS5kYXRhKCdpbWFnZXNMYWJlbCcpIHx8ICdQcm9kdWN0IEltYWdlcyc7XG5cbiAgICAgICAgY29uc3QgdmlkZW9zID0gdGhpcy4kZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW9dJykuZ2V0KCkubWFwKGxpID0+ICh7XG4gICAgICAgICAgICBsaW5rRWxlbWVudDogJChsaSkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLmNsb25lKCkuZ2V0KDApPy5vdXRlckhUTUwsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCBpbWFnZXMzNjAgPSB0aGlzLiRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdJykuZ2V0KCkubWFwKGxpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQobGkpLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKS5jbG9uZSgpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQO1xuICAgICAgICAgICAgJGVsLnJlbW92ZUF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtJykuYXR0cignZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcicsIHN0ZXApO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiAkZWwuZ2V0KDApPy5vdXRlckhUTUwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLiRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKS5nZXQoKVxuICAgICAgICAgICAgLmZpbHRlcihhID0+ICQoYSkuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS1tb3JlXScpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIC5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGEgPSAkKGEpLmNsb25lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtJywgJycpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICRhLmdldCgwKT8ub3V0ZXJIVE1MLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLm1vZGFsVGVtcGxhdGUsIHtcbiAgICAgICAgICAgIG1haW5JbWFnZUxpbmtFbGVtZW50LFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHZpZGVvc0xhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzMzYwTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXNMYWJlbCxcbiAgICAgICAgICAgIHZpZGVvcyxcbiAgICAgICAgICAgIGltYWdlczM2MCxcbiAgICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5oaWRlKCkuYXBwZW5kVG8odGhpcy4kYm9keSk7XG5cbiAgICAgICAgdGhpcy5pbml0SW1hZ2Vab29tKCk7XG5cbiAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAodGhpcy4kZ2FsbGVyeU1vZGFsLmdldCgwKSwge1xuICAgICAgICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IGZhbHNlLFxuICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW5Nb2RhbChpbWFnZVVybCwgaW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdmlkZW9JZCwgdG90YWxTdGVwKSB7XG4gICAgICAgIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50ID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy4kYm9keS5hZGRDbGFzcygnX2dhbGxlcnlNb2RhbC1vcGVuZWQnKTtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZUdhbGxlcnkpIHtcbiAgICAgICAgICAgIGNvbnN0ICRtYWluSW1nID0gdGhpcy5pbWFnZUdhbGxlcnkuJG1haW5JbWFnZS5maW5kKCdpbWcnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKFxuICAgICAgICAgICAgICAgICRtYWluSW1nLmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgICAgICRtYWluSW1nLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuYXR0cignZGF0YS16b29tLWltYWdlJyksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZGVvSWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKHZpZGVvSWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsU3RlcCkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKGltYWdlVXJsLCBpbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmFkZENsYXNzKCdfb3BlbmluZycpLnNob3coKS5yZW1vdmVDbGFzcygnX29wZW5pbmcnKTtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAuYWN0aXZhdGUoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlXScpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmFkZENsYXNzKCdfY2xvc2luZycpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZU1haW5WaWRlbygpO1xuICAgICAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcbiAgICAgICAgICAgIHRoaXMuJGJvZHkucmVtb3ZlQ2xhc3MoJ19nYWxsZXJ5TW9kYWwtb3BlbmVkJyk7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwucmVtb3ZlQ2xhc3MoJ19jbG9zaW5nJykuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50KSB0aGlzLiRsYXN0QWN0aXZlRWxlbWVudC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIHNldE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKSB7XG4gICAgICAgIHRoaXMuaGlkZU1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLmhpZGUzNjBVSSgpO1xuICAgICAgICB0aGlzLnNob3dNYWluSW1hZ2UoKTtcblxuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKG1haW5JbWFnZVVybCk7XG4gICAgICAgIHRoaXMuc3dhcE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKTtcbiAgICB9XG5cbiAgICBzaG93TWFpbkltYWdlKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZU1haW5JbWFnZSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKG1haW5JbWFnZVVybCwgdmlkZW9JZCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgLmZpbHRlcigoX2ksIGEpID0+XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsICYmICQoYSkuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSA9PT0gbWFpbkltYWdlVXJsXG4gICAgICAgICAgICAgICAgfHwgdmlkZW9JZCAmJiAkKGEpLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJykgPT09IHZpZGVvSWQpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIHN3YXBNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCkge1xuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKTtcbiAgICAgICAgY29uc3QgJGEgPSAkaW1hZ2VDb250YWluZXIuZmluZCgnYScpO1xuICAgICAgICBjb25zdCAkbWFpbkltYWdlID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZV0nKTtcblxuICAgICAgICAkaW1hZ2VDb250YWluZXIuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcbiAgICAgICAgJGEuYXR0cignaHJlZicsIHpvb21JbWFnZVVybCk7XG4gICAgICAgICRtYWluSW1hZ2UuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKS5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpO1xuXG4gICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5zd2FwKFxuICAgICAgICAgICAgbWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGlzQnJvd3NlcklFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnVHJpZGVudCcpO1xuICAgICAgICBpZiAoaXNCcm93c2VySUUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrU3R5bGVzSUUgPSB7XG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKCR7bWFpbkltYWdlVXJsfSlgLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtb3JpZ2luJzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJ2NvbnRhaW4nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLW1haW4taW1hZ2VdJykuY3NzKGZhbGxiYWNrU3R5bGVzSUUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgJGltYWdlQ29udGFpbmVyID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWctY29udGFpbmVyXScpO1xuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSAkaW1hZ2VDb250YWluZXIuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gJGltYWdlQ29udGFpbmVyLndpZHRoKCk7XG5cbiAgICAgICAgY29uc3QgJGltYWdlID0gdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLiR6b29tO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAkaW1hZ2UuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gJGltYWdlLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKGhlaWdodCA8IGNvbnRhaW5lckhlaWdodCB8fCB3aWR0aCA8IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEltYWdlWm9vbSgpIHtcbiAgICAgICAgdGhpcy5lYXN5em9vbSA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpLmVhc3lab29tKHtcbiAgICAgICAgICAgIG9uU2hvdzogKCkgPT4gdGhpcy5jaGVja0ltYWdlKCksXG4gICAgICAgICAgICBlcnJvck5vdGljZTogJycsXG4gICAgICAgICAgICBsb2FkaW5nTm90aWNlOiAnJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd01haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLnNob3coKTtcbiAgICB9XG5cbiAgICBoaWRlTWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXJdJykuaGlkZSgpXG4gICAgICAgICAgICAuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgJycpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbyh2aWRlb0lkKSB7XG4gICAgICAgIHRoaXMuaGlkZU1haW5JbWFnZSgpO1xuICAgICAgICB0aGlzLmhpZGUzNjBVSSgpO1xuICAgICAgICB0aGlzLnNob3dNYWluVmlkZW8oKTtcblxuICAgICAgICBjb25zdCBzcmMgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfT9yZWY9MCZhdXRvcGxheT0xYDtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLnNob3coKS5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCBzcmMpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKG51bGwsIHZpZGVvSWQpO1xuICAgIH1cblxuICAgIHNldE1haW4zNjAobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKSB7XG4gICAgICAgIHRoaXMuaGlkZU1haW5JbWFnZSgpO1xuICAgICAgICB0aGlzLmhpZGVNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zaG93MzYwVUkoKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYihtYWluSW1hZ2VVcmwpO1xuICAgICAgICB0aGlzLnN3YXBNYWluMzYwKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCk7XG4gICAgfVxuXG4gICAgc3dhcE1haW4zNjAobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1pbWctY29udGFpbmVyXSBpbWcnKVxuICAgICAgICAgICAgLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybClcbiAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXG4gICAgICAgICAgICAuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcbiAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcCgwLCB0b3RhbFN0ZXApO1xuICAgIH1cblxuICAgIHNob3czNjBVSSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLnNob3coKTtcbiAgICB9XG5cbiAgICBoaWRlMzYwVUkoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5oaWRlKCk7XG4gICAgICAgIHRoaXMucGF1c2UzNjAoKTtcbiAgICB9XG5cbiAgICBzZXQzNjBDdXJyZW50U3RlcChjdXJyZW50U3RlcCwgdG90YWxTdGVwID0gREVGQVVMVF9TVEVQKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKVxuICAgICAgICAgICAgLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcsIGN1cnJlbnRTdGVwKVxuICAgICAgICAgICAgLmNzcygnLS1pbWFnZS0zNjAtc3RlcHMnLCB0b3RhbFN0ZXApO1xuICAgIH1cblxuICAgIG5leHQzNjBTdGVwKCkge1xuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJyk7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcpKSB8fCAwO1xuICAgICAgICBjb25zdCB0b3RhbCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1zdGVwcycpKSB8fCBERUZBVUxUX1NURVA7XG5cbiAgICAgICAgaWYgKHN0ZXAgPCB0b3RhbCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoc3RlcCArIDEsIHRvdGFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoMCwgdG90YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXMzNjBTdGVwKCkge1xuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJyk7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcpKSB8fCAwO1xuICAgICAgICBjb25zdCB0b3RhbCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1zdGVwcycpKSB8fCBERUZBVUxUX1NURVA7XG5cbiAgICAgICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKHN0ZXAgLSAxLCB0b3RhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKHRvdGFsIC0gMSwgdG90YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheTM2MCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsMzYwKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbDM2MCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dDM2MFN0ZXAoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLmFkZENsYXNzKCdfcGxheWluZycpO1xuICAgIH1cblxuICAgIHBhdXNlMzYwKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwzNjApO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykucmVtb3ZlQ2xhc3MoJ19wbGF5aW5nJyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZEltYWdlR2FsbGVyeU1vZGFsIGV4dGVuZHMgSW1hZ2VHYWxsZXJ5TW9kYWwge1xuICAgIGxvYWRpbmdNb2RhbFRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXkgZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxvYWRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgICRzY29wZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvZHVjdElkLFxuICAgICAgICAgICAgZ3JhcGhRTFRva2VuLFxuICAgICAgICAgICAgem9vbVNpemUsXG4gICAgICAgICAgICBwcm9kdWN0U2l6ZSxcbiAgICAgICAgICAgIHRodW1iU2l6ZSxcbiAgICAgICAgICAgIHR4dFZpZGVvc0xhYmVsLFxuICAgICAgICAgICAgdHh0SW1hZ2VzMzYwTGFiZWwsXG4gICAgICAgICAgICB0eHRJbWFnZXNMYWJlbCxcbiAgICAgICAgfSA9IHt9LFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XG4gICAgICAgIHRoaXMuZ3JhcGhRTFRva2VuID0gZ3JhcGhRTFRva2VuO1xuICAgICAgICB0aGlzLnpvb21TaXplID0gem9vbVNpemU7XG4gICAgICAgIHRoaXMucHJvZHVjdFNpemUgPSBwcm9kdWN0U2l6ZTtcbiAgICAgICAgdGhpcy50aHVtYlNpemUgPSB0aHVtYlNpemU7XG4gICAgICAgIHRoaXMudHh0VmlkZW9zTGFiZWwgPSB0eHRWaWRlb3NMYWJlbDtcbiAgICAgICAgdGhpcy50eHRJbWFnZXMzNjBMYWJlbCA9IHR4dEltYWdlczM2MExhYmVsO1xuICAgICAgICB0aGlzLnR4dEltYWdlc0xhYmVsID0gdHh0SW1hZ2VzTGFiZWw7XG4gICAgfVxuXG4gICAgYXN5bmMgb3BlbkxvYWRpbmdNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95TW9kYWwoKTtcblxuICAgICAgICB0aGlzLiRsYXN0QWN0aXZlRWxlbWVudCA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoJ19nYWxsZXJ5TW9kYWwtb3BlbmVkJyk7XG5cbiAgICAgICAgLy8gZGlzcGxheSBsb2FkaW5nIG1vZGFsXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubG9hZGluZ01vZGFsVGVtcGxhdGUpKTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmhpZGUoKS5hcHBlbmRUbyh0aGlzLiRib2R5KTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmFkZENsYXNzKCdfb3BlbmluZycpLnNob3coKS5yZW1vdmVDbGFzcygnX29wZW5pbmcnKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkTW9kYWwoKSB7XG4gICAgICAgIC8vIGZldGNoIHByb2R1Y3QgZGF0YVxuICAgICAgICBhd2FpdCB0aGlzLmZldGNoUHJvZHVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZSA9IHRoaXMuaW1hZ2VzLmZpbmQoaW1hZ2UgPT4gaW1hZ2UuaXNEZWZhdWx0KSB8fCB0aGlzLmltYWdlc1swXTtcbiAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KG1haW5JbWFnZS51cmxUZW1wbGF0ZSk7XG5cbiAgICAgICAgY29uc3QgbWFpbkltYWdlTGlua0VsZW1lbnQgPSBgXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIke21haW5JbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmw9XCIke21haW5JbWFnZS51cmx9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldD1cIiR7bWFpbkltYWdlU3Jjc2V0fVwiXG4gICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsPVwiJHttYWluSW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgPjxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIHNyYz1cIiR7bWFpbkltYWdlLnRodW1ibmFpbFVybH1cIiBkYXRhLXNyY3NldD1cIiR7bWFpbkltYWdlU3Jjc2V0fVwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgYWx0PVwiJHttYWluSW1hZ2UuYWx0VGV4dH1cIiAvPjwvYT5gO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLiRzY29wZS5maW5kKCcuY2FyZC10aXRsZScpLnRleHQoKTtcbiAgICAgICAgY29uc3QgdmlkZW9zTGFiZWwgPSB0aGlzLnR4dFZpZGVvc0xhYmVsIHx8ICdWaWRlb3MnO1xuICAgICAgICBjb25zdCBpbWFnZXMzNjBMYWJlbCA9IHRoaXMudHh0SW1hZ2VzMzYwTGFiZWwgfHwgJzM2MCBWaWV3JztcbiAgICAgICAgY29uc3QgaW1hZ2VzTGFiZWwgPSB0aGlzLnR4dEltYWdlc0xhYmVsIHx8ICdQcm9kdWN0IEltYWdlcyc7XG5cbiAgICAgICAgY29uc3QgdmlkZW9zID0gdGhpcy52aWRlb3MubWFwKHZpZGVvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodmlkZW8udXJsKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgndicpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogYFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kdWN0Vmlldy10aHVtYm5haWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHt2aWRlby51cmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkPVwiJHt2aWRlb0lkfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8ke3ZpZGVvSWR9L2RlZmF1bHQuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSBocmVmPVwiI2ljb24tcGxheS1zb2xpZFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGltYWdlczM2MCA9IHRoaXMuaW1hZ2VzMzYwLm1hcCgoaW1hZ2VVcmwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogYFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kdWN0Vmlldy10aHVtYm5haWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcj1cIiR7c3RlcH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmw9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldD1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlVXJsfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgaHJlZj1cIiNpY29uLTM2MFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuaW1hZ2VzLm1hcChpbWFnZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVNyY3NldCA9IHRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChpbWFnZS51cmxUZW1wbGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiBgXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke2ltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybD1cIiR7aW1hZ2UudXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldD1cIiR7aW1hZ2VTcmNzZXR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7aW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBzcmM9XCIke2ltYWdlLnRodW1ibmFpbFVybH1cIiBkYXRhLXNyY3NldD1cIiR7aW1hZ2VTcmNzZXR9XCIgZGF0YS1zaXplcz1cImF1dG9cIiBhbHQ9XCIke2ltYWdlLmFsdFRleHR9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPmAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCAkZ2FsbGVyeU1vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RhbFRlbXBsYXRlLCB7XG4gICAgICAgICAgICBtYWluSW1hZ2VMaW5rRWxlbWVudCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB2aWRlb3NMYWJlbCxcbiAgICAgICAgICAgIGltYWdlczM2MExhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzTGFiZWwsXG4gICAgICAgICAgICB2aWRlb3MsXG4gICAgICAgICAgICBpbWFnZXMzNjAsXG4gICAgICAgICAgICBpbWFnZXMsXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyByZXBsYWNlIGxvYWRpbmcgbW9kYWwgd2l0aCB0aGUgYWN0dWFsIG1vZGFsXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5odG1sKCRnYWxsZXJ5TW9kYWwuaHRtbCgpKTtcblxuICAgICAgICB0aGlzLmluaXRJbWFnZVpvb20oKTtcblxuICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IGNyZWF0ZUZvY3VzVHJhcCh0aGlzLiRnYWxsZXJ5TW9kYWwuZ2V0KDApLCB7XG4gICAgICAgICAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgICAgICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKHtcbiAgICAgICAgZmlyc3RWaWRlbyA9IGZhbHNlLFxuICAgICAgICBmaXJzdDM2MCA9IGZhbHNlLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLm9wZW5Mb2FkaW5nTW9kYWwoKTtcblxuICAgICAgICB0aGlzLmxvYWRNb2RhbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZpcnN0VmlkZW8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5maXJzdCgpLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8odmlkZW9JZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmaXJzdDM2MCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcl0nKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFpbjM2MChcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdleWV2YUltYWdlR2FsbGVyeU1vZGFsSXRlbVJvdGF0b3InKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcC5hY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hQcm9kdWN0KCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXMgfHwgdGhpcy52aWRlb3MgfHwgdGhpcy5pbWFnZXMzNjApIHJldHVybjtcblxuICAgICAgICBjb25zdCBbem9vbVdpZHRoLCB6b29tSGVpZ2h0XSA9IHRoaXMuem9vbVNpemUuc3BsaXQoJ3gnKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgY29uc3QgW2ltYWdlV2lkdGgsIGltYWdlSGVpZ2h0XSA9IHRoaXMucHJvZHVjdFNpemUuc3BsaXQoJ3gnKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgY29uc3QgW3RodW1iV2lkdGgsIHRodW1iSGVpZ2h0XSA9IHRoaXMudGh1bWJTaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XG5cbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICBxdWVyeShcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0SWQ6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkem9vbVdpZHRoOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHpvb21IZWlnaHQ6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW1hZ2VXaWR0aDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbWFnZUhlaWdodDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aHVtYldpZHRoOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHRodW1iSGVpZ2h0OiBJbnQhXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdChlbnRpdHlJZDogJHByb2R1Y3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwod2lkdGg6ICRpbWFnZVdpZHRoLCBoZWlnaHQ6ICRpbWFnZUhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsVXJsOiB1cmwod2lkdGg6ICR0aHVtYldpZHRoLCBoZWlnaHQ6ICR0aHVtYkhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbVVybDogdXJsKHdpZHRoOiAkem9vbVdpZHRoLCBoZWlnaHQ6ICR6b29tSGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxUZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHMobmFtZXM6IFtcIl9fQDM2MFwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgICAgIHpvb21XaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgem9vbUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHRodW1iV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHRodW1iSGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmdyYXBoUUxUb2tlbn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IFtpbWFnZXMsIHZpZGVvcywgaW1hZ2VzMzYwXSA9IFtcbiAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QuaW1hZ2VzLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IG5vZGUpLFxuICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdC52aWRlb3MuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gbm9kZSksXG4gICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LmN1c3RvbUZpZWxkcy5lZGdlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgbm9kZSB9KSA9PiBub2RlLm5hbWUgPT09ICdfX0AzNjAnKVxuICAgICAgICAgICAgICAgIC5tYXAoKHsgbm9kZSB9KSA9PiBub2RlLnZhbHVlKSxcbiAgICAgICAgXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5PHthbHRUZXh0OiBzdHJpbmcsIGlzRGVmYXVsdDogYm9vbGVhbiwgdXJsPzogc3RyaW5nLCB0aHVtYm5haWxVcmw/OiBzdHJpbmcsIHpvb21Vcmw/OiBzdHJpbmcsIHVybFRlbXBsYXRlPzogc3RyaW5nfT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5PHt0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZ30+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aWRlb3MgPSB2aWRlb3M7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW1hZ2VzMzYwID0gaW1hZ2VzMzYwO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VHYWxsZXJ5IGV4dGVuZHMgQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRnYWxsZXJ5KSB7XG4gICAgICAgIHN1cGVyKCRnYWxsZXJ5KTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnlNb2RhbCA9IG5ldyBJbWFnZUdhbGxlcnlNb2RhbCh0aGlzLCAkZ2FsbGVyeSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgc3VwZXIuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeU1vZGFsLmJpbmRFdmVudHMoKTtcbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4vLyBpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xyXG5pbXBvcnQgQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyBmcm9tICcuLi8uLi90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcclxuaW1wb3J0IHsgYWxlcnRNb2RhbCwgc2hvd0FsZXJ0TW9kYWwsIE1vZGFsRXZlbnRzIH0gZnJvbSAnLi4vLi4vdGhlbWUvZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IHsgZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMsIGN1cnJlbmN5Rm9ybWF0IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgU2FsZUNvdW50ZG93biBmcm9tICcuLi9zYWxlLWNvdW50ZG93bic7XHJcblxyXG5jb25zdCBERUJVR19MT0cgPSBmYWxzZTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZU9wdGlvblN0cmluZyA9IHMgPT4gcy5yZXBsYWNlKC86L2csICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudG9Mb3dlckNhc2UoKTtcclxuXHJcbmZ1bmN0aW9uIGVxdWFsT3B0aW9uU3RyaW5nKGEsIGIpIHtcclxuICAgIHJldHVybiBub3JtYWxpemVPcHRpb25TdHJpbmcoYSkgPT09IG5vcm1hbGl6ZU9wdGlvblN0cmluZyhiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHR3byBhcnJheXMgYXJlIGVxdWFsIHJlZ2FyZGxlc3Mgb2Ygb3JkZXJcclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYXJyMVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIyXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWxVbm9yZGVyZWQoYXJyMSwgYXJyMikge1xyXG4gICAgY29uc3QgX2FycjEgPSBhcnIxLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgY29uc3QgX2FycjIgPSBhcnIyLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgcmV0dXJuIF9hcnIxLmxlbmd0aCA9PT0gX2FycjIubGVuZ3RoICYmIF9hcnIxLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBfYXJyMltpbmRleF0pO1xyXG59XHJcblxyXG5sZXQgY2FjaGVkU2V0dGluZ3M7XHJcblxyXG4vKipcclxuICogSGFuZGxlIG11bHRpcGxlIHByb21pc2VzIHdpdGggYSBjb25jdXJyZW5jeSBsaW1pdCAoZS5nLiwgcHJvY2Vzc2luZyBvbmx5IDEwIHByb21pc2VzIGF0IGEgdGltZSBvdXQgb2YgMTApXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXk8RnVuY3Rpb248VD59IHByb21pc2VzIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBhIHByb21pc2VcclxuICogQHBhcmFtIHsqfSBsaW1pdCBudW1iZXIgb2YgcHJvbWlzZXMgdG8gcHJvY2VzcyBhdCBhIHRpbWVcclxuICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8VD4+fSByZXN1bHRzIG9mIGFsbCBwcm9taXNlc1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQocHJvbWlzZXMsIGxpbWl0ID0gMTApIHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgIGNvbnN0IGV4ZWN1dGluZyA9IFtdOyAvLyBUcmFjayB0aGUgcHJvbWlzZXMgY3VycmVudGx5IGV4ZWN1dGluZ1xyXG5cclxuICAgIGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xyXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBwcm9taXNlIGFuZCBhZGQgaXQgdG8gdGhlIGV4ZWN1dGluZyBsaXN0XHJcbiAgICAgICAgY29uc3QgcCA9IHByb21pc2UoKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmluaXNoZWQgcHJvbWlzZSBmcm9tIGV4ZWN1dGluZyBsaXN0XHJcbiAgICAgICAgICAgIGV4ZWN1dGluZy5zcGxpY2UoZXhlY3V0aW5nLmluZGV4T2YocCksIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaChwKTtcclxuICAgICAgICBleGVjdXRpbmcucHVzaChwKTtcclxuXHJcbiAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGxpbWl0LCB3YWl0IGZvciB0aGUgZmlyc3QgdG8gZmluaXNoXHJcbiAgICAgICAgaWYgKGV4ZWN1dGluZy5sZW5ndGggPj0gbGltaXQpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKGV4ZWN1dGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdhaXQgZm9yIGFsbCByZW1haW5pbmcgcHJvbWlzZXMgdG8gY29tcGxldGVcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb3JuZXJzdG9uZVByb2R1Y3REZXRhaWxzIHtcclxuICAgIG1vZGlmaWVyc01vZGFsT3ZlcmxheVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtb3ZlcmxheVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW92ZXJsYXk+PC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG1vZGlmaWVyc01vZGFsVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbFwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY2xvc2UtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQ2xvc2VcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jbG9zZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5DbG9zZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWJhY2stYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQmFja1wiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCI+QmFjazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LWxlZnQtbG9uZ1wiPjwvdXNlPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWhlYWRlci10aXRsZVwiPjwlJnByb2R1Y3RUaXRsZSU+PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jb250ZW50XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtdGl0bGVcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC10aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWluIGN1cnJlbnQgc3RlcCdzIHRpdGxlIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1vcHRpb25zXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBtb2RpZmllcnMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1zdW1tYXJ5XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBzdW1tYXJ5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY29tcGxldGVcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBhZGQgdG8gY2FydCBidXR0b24gJiBxdHkgYm94IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWZvb3RlclwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbnRpbnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCV0eHRDb250aW51ZSU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtZm9vdGVyLXN1YnRvdGFsXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIHN1YnRvdGFsIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8JSNtYWluSW1hZ2VVcmwlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiPCVtYWluSW1hZ2VVcmwlPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3Jjc2V0PVwiPCVtYWluSW1hZ2VTcmNzZXQlPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtem9vbS1pbWFnZT1cIjwlem9vbUltYWdlVXJsJT5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNpemVzPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGF6eWxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1pbWcgLz5cclxuICAgICAgICAgICAgICAgIDwlL21haW5JbWFnZVVybCU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25Ub29sdGlwVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLXRyaWdnZXJcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbD1cIk1vcmUgaW5mb3JtYXRpb25cIiB0aXRsZT1cIk1vcmUgaW5mb3JtYXRpb25cIj5pPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLWJ1YmJsZVwiPjwldG9vbHRpcCU+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXZhbHVlLXRvb2x0aXBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdG9vbHRpcC10cmlnZ2VyXCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCJNb3JlIGluZm9ybWF0aW9uXCIgdGl0bGU9XCJNb3JlIGluZm9ybWF0aW9uXCI+aTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdG9vbHRpcC1idWJibGVcIj48JXRvb2x0aXAlPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdmFsdWUtdG9vbHRpcC1oZWFkaW5nXCI+PCVoZWFkaW5nJT48L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uUHJpY2VUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8JSNwcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UgX3ByZWxvYWRlclwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UgX3dpdGhUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW9sZCBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW5vdyBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aFRheFZhbHVlJT5cIj48JXByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfd2l0aG91dFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utb2xkIF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utbm93IF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlID0gYFxyXG4gICAgICAgIDwlI3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICg8JXByaWNlV2l0aFRheCU+KVxyXG4gICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgPCVecHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICg8JXByaWNlV2l0aG91dFRheCU+KVxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICBgO1xyXG5cclxuICAgIHN1YnRvdGFsVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtZ3JvdXAtbGFiZWxcIj48JXR4dFN1YnRvdGFsJT48L2Rpdj5cclxuICAgICAgICAgICAgPCUjcHJlbG9hZGVyJT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsIF9wcmVsb2FkZXJcIj4uLi48L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJlbG9hZGVyJT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsIF93aXRoVGF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1vbGQgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ub3cgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3dpdGhvdXRUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW9sZCBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW5vdyBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JXByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHN1bW1hcnlUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDwlI29wdGlvbnMlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb24tbmFtZVwiPjwlbmFtZSU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi12YWx1ZVwiPjwldmFsdWUlPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb24tcHJpY2VzXCI+PCUmcHJpY2VIdG1sJT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvb3B0aW9ucyU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHNob3dQcmljZUZyZWUgPSBmYWxzZTtcclxuICAgIHNob3dQcmljZVplcm8gPSBmYWxzZTtcclxuXHJcbiAgICBhZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IgPSAnLmFkZC10by1jYXJ0LXdyYXBwZXInO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGUgZm9yIGZ1bmN0aW9uIGBmZXRjaE9wdGlvblByaWNlYFxyXG4gICAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIHsgcHJpY2VzV2l0aFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSwgcHJpY2VzV2l0aG91dFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSB9Pn1cclxuICAgICAqL1xyXG4gICAgZmV0Y2hPcHRpb25QcmljZUNhY2hlID0ge307XHJcblxyXG4gICAgY29uc29sZSA9IHtcclxuICAgICAgICBsb2c6ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChERUJVR19MT0cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBmaXhGb3JtRWxlbWVudFVuaXF1ZUlkcygkc2NvcGUpO1xyXG5cclxuICAgICAgICBzdXBlcigkc2NvcGUsIC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJGNob29zZU9wdGlvbnNCdG4gPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gTnVtYmVyKCRmb3JtLmZpbmQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQcm9kdWN0TWV0YWRhdGEoJGZvcm0pO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSBtb2RpZmllcnMgbW9kYWwgZmVhdHVyZVxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIGVuYWJsZSBtb2RpZmllcnMgbW9kYWwgaWYgb3VyIGNob29zZSBvcHRpb25zIGJ1dHRvbiBhcHBlYXJzIGluIHRoZSBwcm9kdWN0IGRldGFpbHNcclxuICAgICAgICB0aGlzLmVuYWJsZU1vZGlmaWVyc01vZGFsID0gJGNob29zZU9wdGlvbnNCdG4ubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RpZmllcnNNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kUHJvZHVjdEVkaXRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRTdGlja3lBZGRUb0NhcnRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRNb2RhbERlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmluaXRPcHRpb25TdGVwcGVyKCk7XHJcbiAgICAgICAgdGhpcy5zeW5jUHJvZHVjdENhcmRRdHkoKTtcclxuICAgICAgICB0aGlzLmluaXRTYWxlQ291bnRkb3duKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kUmVuZXdpbmdEYXRhUGxhblZpc2liaWxpdHkoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcklubGluZU9wdGlvblRvb2x0aXBzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTcGVjVG9vbHRpcHMoKTtcclxuICAgICAgICB0aGlzLmluaXRJbmxpbmVPcHRpb25QcmljZUhpbnRzKCk7XHJcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3VwZGF0ZS13aXNobGlzdC1idXR0b25zJywgW3RoaXMuJHNjb3BlXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKSkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlTWV0YWRhdGEgPSBzZWxlY3RvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkZm9ybS5maW5kKHNlbGVjdG9yKS5maXJzdCgpLnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBpbnZhbGlkIG1ldGFkYXRhIHBheWxvYWRzLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcyA9IHBhcnNlTWV0YWRhdGEoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtY3VzdG9tLWZpZWxkc10nKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtcclxuICAgICAgICAgKiAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICogICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAgICAgKiAgIHN0YXRlOiAnbW9kaWZpZXInIHwgJ3ZhcmlhbnRfb3B0aW9uJyxcclxuICAgICAgICAgKiAgIHBhcnRpYWw6ICdzd2F0Y2gnIHwgJ3NldC1yZWN0YW5nbGUnIHwgJ3NldC1zZWxlY3QnIHwgJ3NldC1yYWRpbydcclxuICAgICAgICAgKiAgICAgfCAnaW5wdXQtdGV4dCcgfCAnaW5wdXQtbnVtYmVycycgfCAnaW5wdXQtY2hlY2tib3gnIHwgJ2lucHV0LWZpbGUnXHJcbiAgICAgICAgICogICAgIHwgJ2RhdGUnIHwgJ3RleHRhcmVhJyB8ICdwcm9kdWN0LWxpc3QnLFxyXG4gICAgICAgICAqICAgcmVxdWlyZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICogICBwcmVmaWxsPzogc3RyaW5nLFxyXG4gICAgICAgICAqICAgc2VsZWN0ZWRfZGF0ZT86IHtcclxuICAgICAgICAgKiAgICAgZGF5OiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIG1vbnRoOiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIHllYXI6IHN0cmluZ1xyXG4gICAgICAgICAqICAgfSxcclxuICAgICAgICAgKiAgIGNoZWNrZWQ/OiBib29sZWFuLFxyXG4gICAgICAgICAqICAgbm9WYWx1ZT86IG51bWJlcixcclxuICAgICAgICAgKiAgIHZhbHVlPzogbnVtYmVyLFxyXG4gICAgICAgICAqICAgdmFsdWVzPzogQXJyYXk8e1xyXG4gICAgICAgICAqICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAqICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICAgICAqICAgICBzZWxlY3RlZDogYm9vbGVhbixcclxuICAgICAgICAgKiAgICAgZGF0YTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPlxyXG4gICAgICAgICAqICAgfT5cclxuICAgICAgICAgKiB9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zID0gcGFyc2VNZXRhZGF0YSgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscy5jdXN0b21GaWVsZHM6JywgdGhpcy5jdXN0b21GaWVsZHMpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzLnByb2R1Y3RPcHRpb25zOicsIHRoaXMucHJvZHVjdE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkdXBkYXRlUHJvZHVjdFdyYXBwZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld01vZGVsKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IHN1cGVyLmdldFZpZXdNb2RlbCguLi5hcmdzKTtcclxuICAgICAgICBtb2RlbC4kdXBkYXRlUHJvZHVjdFdyYXBwZXIgPSB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlcjtcclxuICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xyXG4gICAgICAgIGNvbnN0ICRidG4gPSB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlci5maW5kKCdpbnB1dCwgYnV0dG9uJyk7XHJcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcclxuICAgICAgICAgICAgJGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRidG4ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGUgdGhlIG1ldGhvZCB0byBzdXBwb3J0IGVkaXQgcHJvZHVjdCBpbiBjYXJ0XHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cclxuICAgICAqL1xyXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xyXG4gICAgICAgIGlmIChldmVudC5lZGl0UHJvZHVjdEluQ2FydCkge1xyXG4gICAgICAgICAgICAkKGZvcm0pLmZpbmQoJ2lucHV0W25hbWU9XCJhY3Rpb25cIl0nKS52YWwoJ0VkaXRQcm9kdWN0RmllbGRzSW5DYXJ0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoZm9ybSkuZmluZCgnaW5wdXRbbmFtZT1cImFjdGlvblwiXScpLnZhbCgnYWRkJyk7XHJcbiAgICAgICAgICAgIHN1cGVyLmFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVkaXQgcHJvZHVjdCBpbiBjYXJ0LlxyXG4gICAgICogQWxtb3N0IGNsb25lIGZyb20gYWRkUHJvZHVjdFRvQ2FydCBtZXRob2QgZnJvbSB0aGUgcGFyZW50IGNsYXNzLlxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZWRpdFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcclxuICAgICAgICBjb25zdCAkc2F2ZUJ0biA9ICQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJywgJChldmVudC50YXJnZXQpKS5maW5kKCdpbnB1dCwgYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkc2F2ZUJ0bi52YWwoKTtcclxuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRzYXZlQnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkc2F2ZUJ0blxyXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxyXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJHNhdmVCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xyXG5cclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzYXZlQnRuXHJcbiAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBmYWlsdXJlID0gKGVycm9yVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JUZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkc2F2ZUJ0bikpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0TW9kYWwoKS4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkc2F2ZUJ0bjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0UXVhbnRpdHkpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZm9ybURhdGEuZ2V0KCdpdGVtX2lkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1F0eSA9IGZvcm1EYXRhLmdldCgncXR5W10nKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWx1cmUoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgfSkuZG9uZSgocmVzcG9uc2UpID0+IHN1Y2Nlc3MocmVzcG9uc2UpKS5mYWlsKChfeGhyLCBfc3RhdHVzLCBlcnJvcikgPT4gZmFpbHVyZShlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZT8uZGF0YT8uc3RhdHVzICE9PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGNsaWNrIG9uIHRoZSBBZGQgTmV3IHRvIENhcnQgYnV0dG9uLCB0cmlnZ2VyIHRoZSBmb3JtIHN1Ym1pdCBldmVudCB3aXRoIGBhZGROZXdUb0NhcnRgIGZsYWdcclxuICAgICAqIHNvIHRoYXQgbmV3IHByb2R1Y3QgaXMgYWx3YXlzIGFkZGVkIHRvIGNhcnQgcmVnYXJkbGVzcyBvZiBlZGl0IHByb2R1Y3QgaW4gY2FydCBvciBub3RcclxuICAgICAqL1xyXG4gICAgYmluZFByb2R1Y3RFZGl0RXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEV2ZW50ID0gJC5FdmVudCgnc3VibWl0JywgeyBlZGl0UHJvZHVjdEluQ2FydDogdHJ1ZSB9KTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyLmZpbmQoJ2lucHV0LCBidXR0b24nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICRmb3JtLnRyaWdnZXIoc3VibWl0RXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRTdGlja3lBZGRUb0NhcnRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlU3RpY2t5QWRkVG9DYXJ0Q2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkYnV0dG9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKCRidXR0b24ucHJvcCgnZGlzYWJsZWQnKSB8fCAkYnV0dG9uLmF0dHIoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYgKCEkZm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJHN0aWNreVF0eSA9ICRidXR0b24uc2libGluZ3MoJy5wcm9kdWN0Vmlldy1zdGlja3ktYWRkLXRvLWNhcnQnKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5tb2JpbGUtaW5jcmVtZW50IGlucHV0W25hbWU9XCJxdHlbXVwiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgJGZvcm1RdHkgPSAkZm9ybS5maW5kKCdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGlucHV0W25hbWU9XCJxdHlbXVwiXScpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHN0aWNreVF0eS5sZW5ndGggJiYgJGZvcm1RdHkubGVuZ3RoICYmICRmb3JtUXR5LnZhbCgpICE9PSAkc3RpY2t5UXR5LnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybVF0eS52YWwoJHN0aWNreVF0eS52YWwoKSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybVswXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtICYmICFmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW52YWxpZEZpZWxkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCc6aW52YWxpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbnZhbGlkRmllbGQ/LnNjcm9sbEludG9WaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZEZpZWxkLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGludmFsaWRGaWVsZD8uZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvcm0ucmVwb3J0VmFsaWRpdHkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGludmFsaWRGaWVsZD8ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJyNzdGlja3ktYWRkLXRvLWNhcnQnKVxyXG4gICAgICAgICAgICAub2ZmKCdjbGljay5leWV2YVN0aWNreUFkZFRvQ2FydCcpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2suZXlldmFTdGlja3lBZGRUb0NhcnQnLCBoYW5kbGVTdGlja3lBZGRUb0NhcnRDbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZE1vZGFsRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBkZXN0cm95IHRoZSBpbWFnZSBnYWxsZXJ5IG1vZGFsIHdoZW4gcXVpY2stdmlldyBtb2RhbCBpcyBjbG9zZWRcclxuICAgICAgICAvLyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuY2xvc2VzdCgnLm1vZGFsJykub25lKE1vZGFsRXZlbnRzLmNsb3NlZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbWFnZUdhbGxlcnlNb2RhbC5kZXN0cm95TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0T3B0aW9uU3RlcHBlcigpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1zdGVwcGVyXScpLmVhY2goKF9pLCBmb3JtRmllbGRFbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZm9ybUZpZWxkID0gJChmb3JtRmllbGRFbCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRkZWMgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImRlY1wiXScpO1xyXG4gICAgICAgICAgICBjb25zdCAkaW5jID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJpbmNcIl0nKTtcclxuICAgICAgICAgICAgY29uc3QgJGNoZWNrID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJjaGVja1wiXScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5hZGRDbGFzcygnX2NoZWNraW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86dmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaXJzdCA9ICRyYWRpb3MuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSAkcmFkaW9zLmluZGV4KCRjaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgaSA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgPT09ICRyYWRpb3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5yZW1vdmVDbGFzcygnX2NoZWNraW5nJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbml0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSAoaW5jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykuYWRkQ2xhc3MoJ19jaGVja2luZycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOnZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjaGVja2VkID0gJHJhZGlvcy5maWx0ZXIoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZmlyc3QgPSAkcmFkaW9zLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVja2VkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3VuZCBjaGVja2VkIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRyYWRpb3MuaW5kZXgoJGNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0IHRoZSBuZXh0IHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgJHJhZGlvcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLmVxKGkgKyAxKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgKyAxID09PSAkcmFkaW9zLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIHByZXZpb3VzIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZXEoaSAtIDEpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGkgLSAxID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIGNoZWNrZWQgcmFkaW8sIGFuZCBmb3VuZCB0aGUgZmlyc3QgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jICYmICRmaXJzdC5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKyBhbmQgZmlyc3Qgb3B0aW9uIGlzICdub25lJywgaWdub3JlIHRoZSBub25lIG9wdGlvbiwgc2VsZWN0IHRoZSBmaXJzdCB2YWx1ZWQgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3Mubm90KCRmaXJzdCkuZmlyc3QoKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSwgc2VsZWN0IHRoZSBmaXJzdCByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZmlyc3QucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5hZGRDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hlY2tlZCByYWRpbyBpcyAnbm9uZScgdGhlbiB1bmNoZWNrIHRoZSBjaGVjayBidXR0b25cclxuICAgICAgICAgICAgICAgIGlmICgkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2sucmVtb3ZlQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLnJlbW92ZUNsYXNzKCdfY2hlY2tpbmcnKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRkZWMub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGluYy5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0KHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRjaGVjay5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVjay5oYXNDbGFzcygnX2NoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuY2hlY2sgdGhlIGNoZWNrZWQgcmFkaW8gYW5kIHNlbGVjdCB0aGUgJ25vbmUnIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHVuY2hlY2sgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRub25lID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkbm9uZS5sZW5ndGggPiAwKSAkbm9uZS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgkdW5jaGVjay5sZW5ndGgpICR1bmNoZWNrLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5yZW1vdmVDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN5bmMgcHJvZHVjdCBxdWFudGl0eSB3aXRoIHF0eSBvZiB0aGUgY29ycmVzcG9uZGluZyBwcm9kdWN0IGNhcmRcclxuICAgICAqL1xyXG4gICAgc3luY1Byb2R1Y3RDYXJkUXR5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RRdWFudGl0eSkgcmV0dXJuOyAvLyBzdG9wIGlmIGVkaXQgcHJvZHVjdCBpbiBjYXJ0XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRRdHkgPSAkKGBbZGF0YS1jYXJkLXF1YW50aXR5LWNoYW5nZV0gaW5wdXRbbmFtZT1cInF0eV8ke3RoaXMucHJvZHVjdElkfVwiXWApLnZhbCgpO1xyXG4gICAgICAgIGlmICghY2FyZFF0eSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCAkcXR5ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBpbnB1dFtuYW1lPVwicXR5W11cIl0nKTtcclxuICAgICAgICBjb25zdCBxdHkgPSAkcXR5LnZhbCgpO1xyXG4gICAgICAgIGlmICgkcXR5Lmxlbmd0aCA+IDAgJiYgcXR5ICE9PSBjYXJkUXR5KSB7XHJcbiAgICAgICAgICAgICRxdHkudmFsKGNhcmRRdHkpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0U2FsZUNvdW50ZG93bigpIHtcclxuICAgICAgICBjb25zdCB7IHR4dFNhbGVDb3VudGRvd25KU09OIH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF0ZV0nKTtcclxuICAgICAgICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAkZWwuZGF0YSgnc2FsZUNvdW50ZG93bkxhYmVsJykgfSk7XHJcblxyXG4gICAgICAgIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHsgdHh0U2FsZUNvdW50ZG93bkpTT04gfSk7XHJcbiAgICAgICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kUmVuZXdpbmdEYXRhUGxhblZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUub2ZmKCdjaGFuZ2UuZXlldmFSZW5ld2luZ0RhdGFQbGFuJywgJ1tuYW1lPVwiYXR0cmlidXRlWzEzMzAzXVwiXScpO1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjaGFuZ2UuZXlldmFSZW5ld2luZ0RhdGFQbGFuJywgJ1tuYW1lPVwiYXR0cmlidXRlWzEzMzAzXVwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpLmZpcnN0KCk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKCRwcm9kdWN0T3B0aW9uc0VsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCAkcmVuZXdpbmdSYWRpbyA9ICRwcm9kdWN0T3B0aW9uc0VsXHJcbiAgICAgICAgICAgIC5maW5kKCdbbmFtZT1cImF0dHJpYnV0ZVsxMzMwM11cIl1bdmFsdWU9XCIxNjk4XCJdJylcclxuICAgICAgICAgICAgLmZpcnN0KCk7XHJcblxyXG4gICAgICAgIGlmICgkcmVuZXdpbmdSYWRpby5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2hvdWxkSGlkZUZpZWxkcyA9ICRyZW5ld2luZ1JhZGlvLmlzKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkSWRzID0gWzEzMzA0LCAxMzMwNSwgMTMzMDZdO1xyXG5cclxuICAgICAgICBmaWVsZElkcy5mb3JFYWNoKGZpZWxkSWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7ZmllbGRJZH1cIl1gKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkSGlkZUZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlSGlkZGVuTW9kaWZpZXJGaWVsZCgkZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgJGZpZWxkLmNzcygnZGlzcGxheScsICdub25lJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1lcnJvcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVTaG93bk1vZGlmaWVyRmllbGQoJGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICRmaWVsZC5jc3MoJ2Rpc3BsYXknLCAnJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVIaWRkZW5Nb2RpZmllckZpZWxkKCRmaWVsZCkge1xyXG4gICAgICAgICRmaWVsZC5maW5kKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkZWwuaXMoJ1tkYXRhLWV5ZXZhLW9yaWdpbmFsLXJlcXVpcmVkXScpKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwuYXR0cignZGF0YS1leWV2YS1vcmlnaW5hbC1yZXF1aXJlZCcsICRlbC5wcm9wKCdyZXF1aXJlZCcpID8gJ3RydWUnIDogJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRlbC5wcm9wKCdyZXF1aXJlZCcsIGZhbHNlKS5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRlbC5pcygnOmNoZWNrYm94LCA6cmFkaW8nKSkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJGVsLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnByb3AoJ3NlbGVjdGVkSW5kZXgnLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRlbC52YWwoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlU2hvd25Nb2RpZmllckZpZWxkKCRmaWVsZCkge1xyXG4gICAgICAgICRmaWVsZC5maW5kKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlcXVpcmVkID0gJGVsLmF0dHIoJ2RhdGEtZXlldmEtb3JpZ2luYWwtcmVxdWlyZWQnKSA9PT0gJ3RydWUnO1xyXG5cclxuICAgICAgICAgICAgJGVsLnByb3AoJ3JlcXVpcmVkJywgb3JpZ2luYWxSZXF1aXJlZCk7XHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwuYXR0cigncmVxdWlyZWQnLCAnJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZWwucmVtb3ZlQXR0cigncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKTtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdsYWJlbC51bmF2YWlsYWJsZSwgb3B0aW9uLnVuYXZhaWxhYmxlJylcclxuICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkXScpXHJcbiAgICAgICAgICAgIC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWV3KGRhdGEsIC4uLmFyZ3MpIHtcclxuICAgICAgICBzdXBlci51cGRhdGVWaWV3KGRhdGEsIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygpO1xyXG4gICAgICAgIHRoaXMucmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTYWxlUGVyY2VudChkYXRhKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoaXBwaW5nQ291bnRkb3duKGRhdGEpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpXHJcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCAhZGF0YT8ucHVyY2hhc2FibGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vbmVTYWxlcyA9IHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvblByaWNlcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcywgZm9ybURhdGEsIG5vbmVTYWxlcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RpZmllcnNTdWJ0b3RhbChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTYWxlUGVyY2VudChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJGRpdiA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcmljZS1zZWN0aW9uLS1zYWxlUGVyY2VudCcpO1xyXG4gICAgICAgIGNvbnN0ICRzcGFuID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYWxlLXBlcmNlbnRdJyk7XHJcbiAgICAgICAgbGV0IHNhbGVQZXJjZW50ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGRhdGE/LnByaWNlPy53aXRob3V0X3RheD8udmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGE/LnByaWNlPy5ycnBfd2l0aG91dF90YXg/LnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSAvIGRhdGEucHJpY2UucnJwX3dpdGhvdXRfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJpY2U/Lm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWUgLyBkYXRhLnByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy53aXRoX3RheD8udmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGE/LnByaWNlPy5ycnBfd2l0aF90YXg/LnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZSAvIGRhdGEucHJpY2UucnJwX3dpdGhfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJpY2U/Lm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUgLyBkYXRhLnByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzYWxlUGVyY2VudCA+IDApIHtcclxuICAgICAgICAgICAgJHNwYW4udGV4dChgLSR7c2FsZVBlcmNlbnR9JWApO1xyXG4gICAgICAgICAgICAkZGl2LnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkc3Bhbi50ZXh0KCcnKTtcclxuICAgICAgICAgICAgJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNoaXBwaW5nQ291bnRkb3duKGRhdGEpIHtcclxuICAgICAgICBjb25zdCAkc2hpcHBpbmdDb3VudGRvd24gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wYXBhdGhlbWVzLXNoaXBwaW5nLWNvdW50ZG93bl0nKTtcclxuXHJcbiAgICAgICAgaWYgKCRzaGlwcGluZ0NvdW50ZG93bi5pcygnOmhpZGRlbicpICYmIGRhdGE/LnB1cmNoYXNhYmxlKSB7XHJcbiAgICAgICAgICAgICRzaGlwcGluZ0NvdW50ZG93bi5jc3MoJ3N0eWxlJywgJ2ZsZXgnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzaGlwcGluZ0NvdW50ZG93bi5pcygnOnZpc2libGUnKSAmJiAhZGF0YT8ucHVyY2hhc2FibGUpIHtcclxuICAgICAgICAgICAgJHNoaXBwaW5nQ291bnRkb3duLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FydENvbnRlbnQoLi4uYXJncykge1xyXG4gICAgICAgIC8vIGNsb3NlIG1vZGlmaWVycyBtb2RhbCBhZnRlciBhZGRlZCBwcm9kdWN0IHRvIGNhcnRcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlci51cGRhdGVDYXJ0Q29udGVudCguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIuc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSwgLi4uYXJncyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEltZyA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1pbWddJyk7XHJcbiAgICAgICAgY29uc3QgeyBtYWluSW1hZ2VVcmwsIHpvb21JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0IH0gPSB0aGlzLmltYWdlR2FsbGVyeS5jdXJyZW50SW1hZ2U7XHJcblxyXG4gICAgICAgIGlmIChtYWluSW1hZ2VVcmwgJiYgbWFpbkltYWdlVXJsICE9PSAkbW9kaWZpZXJzTW9kYWxJbWcuYXR0cignc3JjJykpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsSW1nXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIG1haW4gaW1hZ2UgaW4gcXVpY2stdmlldyBvbiBtb2JpbGVcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoX2ksIGVsKSA9PiAkKGVsKS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXQgcHJpY2Ugd2l0aCBjdXJyZW5jeSBzeW1ib2wgYW5kIGRlY2ltYWwgcGxhY2VzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsdXNTeW1ib2wgd2hldGhlciB0byBzaG93IHBsdXMgc3ltYm9sIGZvciBwb3NpdGl2ZSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZm9ybWF0UHJpY2UodmFsdWUsIHBsdXNTeW1ib2wgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBjYWNoZWRTZXR0aW5ncyA/IHtcclxuICAgICAgICAgICAgY3VycmVuY3lfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuc3ltYm9sLFxyXG4gICAgICAgICAgICBjdXJyZW5jeV9sb2NhdGlvbjogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5zeW1ib2xQbGFjZW1lbnQsXHJcbiAgICAgICAgICAgIGRlY2ltYWxfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuZGVjaW1hbFRva2VuLFxyXG4gICAgICAgICAgICBkZWNpbWFsX3BsYWNlczogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5kZWNpbWFsUGxhY2VzLFxyXG4gICAgICAgICAgICB0aG91c2FuZHNfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkudGhvdXNhbmRzVG9rZW4sXHJcbiAgICAgICAgfSA6IHt9O1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGN1cnJlbmN5Rm9ybWF0KC12YWx1ZSwgZGlzcGxheSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwbHVzU3ltYm9sID8gYC0ke2Zvcm1hdHRlZH1gIDogZm9ybWF0dGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gY3VycmVuY3lGb3JtYXQodmFsdWUsIGRpc3BsYXkpO1xyXG4gICAgICAgIHJldHVybiBwbHVzU3ltYm9sID8gYCske2Zvcm1hdHRlZH1gIDogZm9ybWF0dGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZCBvcHRpb24gdmFsdWUgYnkgb3B0aW9uIG5hbWUgYW5kIHZhbHVlIG5hbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSBvcHRpb24gZGlzcGxheSBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVOYW1lIHZhbHVlIGxhYmVsXHJcbiAgICAgKiBAcmV0dXJucyB7W251bWJlciwgbnVtYmVyXX0gb3B0aW9uSWQsIHZhbHVlSWRcclxuICAgICAqL1xyXG4gICAgZmluZE9wdGlvblZhbHVlKG9wdGlvbk5hbWUsIHZhbHVlTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGhpZGVJZk9wdGlvbiA9IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBkaXNwbGF5X25hbWUgfSkgPT4gZGlzcGxheV9uYW1lLnJlcGxhY2UoJy86Oy9nJywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpID09PSBvcHRpb25OYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaGlkZUlmT3B0aW9uPy52YWx1ZXM/LmZpbmQoKHsgbGFiZWwgfSkgPT4gbGFiZWwucmVwbGFjZSgnLzo7L2cnLCAnJykucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCBvcHRpb25JZCA9IGhpZGVJZk9wdGlvbj8uaWQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWVJZCA9IHZhbHVlPy5pZDtcclxuICAgICAgICByZXR1cm4gW29wdGlvbklkLCB2YWx1ZUlkXTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNb2RpZmllcnNNb2RhbCgpIHtcclxuICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW5dJykuYXR0cignZGF0YS16b29tLWltYWdlJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlciA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtYXR0cmlidXRlcy1tZXNzYWdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRXcmFwcGVyID0gJGZvcm0uZmluZCgnW2RhdGEtZXlldmEtYWRkLXRvLWNhcnQtd3JhcHBlcl0nKTtcclxuICAgICAgICBjb25zdCAkY2hvb3NlT3B0aW9uc0J0biA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RpZmllcnNNb2RhbFRlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgIHR4dENvbnRpbnVlOiB0aGlzLmNvbnRleHQudHh0Q29udGludWUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC10aXRsZV0nKS5odG1sKCksXHJcbiAgICAgICAgICAgIG1haW5JbWFnZVVybDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLm1haW5JbWFnZVVybCB8fCBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCB8fCB6b29tSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLm1haW5JbWFnZVNyY3NldCB8fCBtYWluSW1hZ2VTcmNzZXQsXHJcbiAgICAgICAgfSwgbnVsbCwgWyc8JScsICclPiddKSkuYXBwZW5kVG8oJHByb2R1Y3RPcHRpb25zRWwpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ29tcGxldGUgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENsb3NlID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jbG9zZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGludWVdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQmFjayA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFja10nKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSBtb2RpZmllciBvcHRpb25zIHRvIHRoZSBtb2RhbFxyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXN0YXRlPVwibW9kaWZpZXJcIl0nKS5hcHBlbmRUbygkbW9kaWZpZXJzTW9kYWxPcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSBhZGQgdG8gY2FydCAmIHF0eSBib3ggdG8gdGhlIG1vZGFsXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29tcGxldGUuYXBwZW5kKCRhZGRUb0NhcnRXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgLy8gY2xvbmUgcHVyY2hhc2FibGUgbWVzc2FnZVxyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLmZpbmQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJykuY2xvbmUoKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJGF0dHJpYnV0ZU1lc3NhZ2VXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ2xvc2Uub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQmFjay5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrU3RlcCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxDb250aW51ZS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGFuZCByZXBvcnQgaW52YWxpZCBpbnB1dHMgaWYgYW55XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXSB8fCBbXTtcclxuICAgICAgICAgICAgY29uc3QgaW52YWxpZElucHV0cyA9IHNob3dPcHRpb25JZHMucmVkdWNlKChfaW52YWxpZElucHV0cywgb3B0aW9uSWQpID0+IChbXHJcbiAgICAgICAgICAgICAgICAuLi5faW52YWxpZElucHV0cyxcclxuICAgICAgICAgICAgICAgIC4uLiRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAuZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbklkfV1bZGF5XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW21vbnRoXVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW3llYXJdXCJdYClcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVsID0+ICFlbC5jaGVja1ZhbGlkaXR5KCkpLFxyXG4gICAgICAgICAgICBdKSwgW10pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludmFsaWRJbnB1dHNbMF0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYXV0byBzZWxlY3QgdGhlICdub25lJyBvcHRpb24gaWYgbm8gcmFkaW8gb3B0aW9uIG9yIG5vIHByb2R1Y3QgcGljayBsaXN0IG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dXCJdYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHJhZGlvcy5sZW5ndGggPiAwICYmICRyYWRpb3MuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZmlsdGVyKCdbdmFsdWU9XCJcIl0sIFt2YWx1ZT1cIjBcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gYWZ0ZXIgY2xpY2tpbmcgY29udGludWUgYnV0dG9uLCB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IGF1dG9tYXRpY2FsbHlcclxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkY2hvb3NlT3B0aW9uc0J0bi5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXF1aXJlIHNlbGVjdGluZyB2YXJpYW50IG9wdGlvbnMgYmVmb3JlIG9wZW5pbmcgdGhlIG1vZGFsXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlVmFyaWFudE9wdGlvbnMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RpZmllcnNNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAuYmVmb3JlKHRoaXMubW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsXScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW92ZXJsYXldJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1vZGlmaWVyc1ZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXHJcbiAgICAgICAgICAgIC5ub3QoJ1t0eXBlPVwiY2hlY2tib3hcIl0sIFt0eXBlPVwicmFkaW9cIl0sIFt0eXBlPVwiZmlsZVwiXScpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnZhbCgnJyk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBmbGFnIGFueSBpbnB1dC9zZWxlY3QgaXMgbm90IHNob3duIHlldCBzbyB0aGF0IHRoZSBjb250aW51ZSBidXR0b24gaXMgc2hvd25cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnJlbW92ZUF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgbW9kYWwgdG8gdXBkYXRlIHRoaXMgdmlldyBhdXRvbWF0aWNhbGx5IHdoZW4gb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbnRhaW5zIGFsbCBvcHRpb24gaWRzIHRoYXQgYXJlIHNob3duIGluIGVhY2ggc3RlcFxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJbXVtdfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzaG93biBvcHRpb24gaWRzIGluIGFsbCBzdGVwc1xyXG4gICAgICAgIHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTm9uLXNhbGUgcHJpY2VzIGZvciBvcHRpb24gdmFsdWVzLlxyXG4gICAgICAgICAqIFB1bGxpbmcgZnJvbSBjdXN0b20gZmllbGRzIGBfX0Bub25zYWxlIHByaWNlID0gb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZVs7IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWU7IC4uLl1gLlxyXG4gICAgICAgICAqIFBvcHVsYXRlZCBpbiBgdXBkYXRlTW9kaWZpZXJzVmlldygpYC5cclxuICAgICAgICAgKiBAdHlwZSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9IH19XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZE5vbmVTYWxlcyA9IHt9O1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgbW9kaWZpZXJzIG1vZGFsIGFzYXAgc28gdGhhdCBub3QgYWxsIG9wdGlvbnMgYXJlIGRpc3BsYXllZFxyXG4gICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGw6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsID0gZmFsc2UgfSA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEJhY2sgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFja10nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1zdW1tYXJ5XScpLmVtcHR5KCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsVGl0bGUgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtdGl0bGVdJykuZW1wdHkoKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxGb290ZXIgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENvbnRpbnVlID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlXScpLmhpZGUoKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XHJcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydFdyYXBwZXIgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1hZGQtdG8tY2FydC13cmFwcGVyXScpLmhpZGUoKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gZm9ybURhdGE6ICcsIEFycmF5LmZyb20oZm9ybURhdGEuZW50cmllcygpKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1cnJlbnQgb3B0aW9uIGlkIHRoYXQgYXBwZWFycyBhbG9uZSB3aXRob3V0IGFueSBncm91cC5cclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfHVuZGVmaW5lZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgY3VycmVudE9wdGlvbklkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdXJyZW50IGdyb3VwIG5hbWUgdGhhdCB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8uXHJcbiAgICAgICAgICogR3JvdXAgbmFtZSB0aGF0IGFwcGVhcnMgY3VzdG9tIGZpZWxkIGBfX0Bncm91cCAoZ3JvdXAgbmFtZSlgXHJcbiAgICAgICAgICogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRHcm91cE5hbWU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9wdGlvbiBpZHMgb2Ygb3B0aW9uIG5hbWVzIGFwcGVhciBpbiB0aGUgdmFsdWUgb2YgY3VzdG9tIGZpZWxkIGBfX0Bncm91cGAuXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiAgIEN1c3RvbSBmaWVsZDogYF9fQGdyb3VwIFNlbGVjdCBhIHByZXNjcmlwdGlvbiB0eXBlYCA9IGBwcmVzY3JpcHRpb24gdHlwZWBcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIG9wdGlvbiBpZHMgc2hvdWxkIGJlIGhpZGRlblxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBoaWRlT3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7b3B0aW9uSWQ6IG51bWJlciwgdmFsdWVJZDogbnVtYmVyfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgaGlkZU9wdGlvblZhbHVlcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUb29sdGlwcyBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlcyBleHRyYWN0ZWQgZnJvbSBjdXN0b20gZmllbGRzIGBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBgXHJcbiAgICAgICAgICogQHR5cGUge09iamVjdDxudW1iZXIsIHsgdG9vbHRpcDogc3RyaW5nLCB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9PlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBzID0ge307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRvb2x0aXAgaGVhZGluZ3MgZm9yIG9wdGlvbiB2YWx1ZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AdG9vbHRpcF9oZWFkaW5nIG5hbWU6dmFsdWUgPSB0b29sdGlwIGhlYWRpbmdgXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9fVxyXG4gICAgICAgICAqIEBleGFtcGxlIHsgMjogeyAxMjM6ICdUb29sdGlwIEhlYWRpbmcnIH0gfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBIZWFkaW5ncyA9IHt9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBOb24tc2FsZSBwcmljZXMgZm9yIG9wdGlvbiB2YWx1ZXMuXHJcbiAgICAgICAgICogQ2FuIGJlIG92ZXJyaWRkZW4gYnkgY3VzdG9tIGZpZWxkcyBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH0gfX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBub25lU2FsZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT3B0aW9uIHJlbmFtZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AcmVuYW1lIG9wdGlvbiBuYW1lID0gbmV3IG5hbWVgXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiBzdHJpbmcgfX1cclxuICAgICAgICAgKiBAZXhhbXBsZSB7IDEyMzogJ05ldyBOYW1lJywgNDU2OiAnQW5vdGhlciBOYW1lJyB9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uUmVuYW1lcyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBzdGF0ZSB9KSA9PiBzdGF0ZSA9PT0gJ21vZGlmaWVyJykuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCclY1Byb2R1Y3REZXRhaWxzIC0gb3B0aW9uOiAnLCAnY29sb3I6IGN5YW4nLCBvcHRpb24uZGlzcGxheV9uYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoaWRlT3B0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRmlyc3QgZ3JvdXAgbmFtZSB0aGF0IHRoZSBvcHRpb24gYmVsb25ncyB0by5cclxuICAgICAgICAgICAgICogR3JvdXAgbmFtZSB0aGF0IGFwcGVhcnMgY3VzdG9tIGZpZWxkIGBfX0Bncm91cCAoZ3JvdXAgbmFtZSlgXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbGV0IGdyb3VwTmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBPcHRpb24gaWRzIG9mIG9wdGlvbiBuYW1lcyBhcHBlYXIgaW4gdGhlIHZhbHVlIG9mIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgLlxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgKiAgIEN1c3RvbSBmaWVsZDogYF9fQGdyb3VwIFNlbGVjdCBhIHByZXNjcmlwdGlvbiB0eXBlYCA9IGBwcmVzY3JpcHRpb24gdHlwZWBcclxuICAgICAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj58dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbGV0IGdyb3VwT3B0aW9uSWRzO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgcmFkaW8gdHlwZSBhbmQgaGFzICdub25lJyB2YWx1ZSBjaGVja2VkXHJcbiAgICAgICAgICAgIGNvbnN0IGlzTm9uZVJhZGlvQ2hlY2tlZCA9ICRmb3JtLmZpbmQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1bdmFsdWU9XCJcIl1gKS5wcm9wKCdjaGVja2VkJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBmaWxlIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJGZpbGUgPSAkZm9ybS5maW5kKGBpbnB1dFt0eXBlPVwiZmlsZVwiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNGaWxlU2hvd24gPSAkZmlsZS5sZW5ndGggPiAwICYmICRmaWxlLmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIG9wdGlvbmFsIGRhdGUgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkZGF0ZSA9ICRmb3JtLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XVwiXSwgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1cIl0sIHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1beWVhcl1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbERhdGVTaG93biA9ICRkYXRlLmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkZGF0ZS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCBzZWxlY3QgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGZvcm0uZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBpc09wdGlvbmFsU2VsZWN0U2hvd24gPSAkc2VsZWN0Lmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkc2VsZWN0LmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIG9wdGlvbmFsIHRleHQgLyBtdWx0aWxpbmUgLyBudW1iZXIgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkdGV4dCA9ICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCB0ZXh0YXJlYScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBpc09wdGlvbmFsVGV4dFNob3duID0gJHRleHQubGVuZ3RoID4gMCAmJiAhb3B0aW9uLnJlcXVpcmVkICYmICR0ZXh0LmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZSA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtVmFsdWUgJiYgIShmb3JtVmFsdWUgaW5zdGFuY2VvZiBGaWxlKVxyXG4gICAgICAgICAgICAgICAgfHwgaXNOb25lUmFkaW9DaGVja2VkIHx8IGlzRmlsZVNob3duIHx8IGlzT3B0aW9uYWxEYXRlU2hvd24gfHwgaXNPcHRpb25hbFNlbGVjdFNob3duIHx8IGlzT3B0aW9uYWxUZXh0U2hvd25cclxuICAgICAgICAgICAgICAgIHx8IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XWApXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW21vbnRoXWApXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdYCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGhpZGUgb3B0aW9uIGlmIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIGhpZGVPcHRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uOiAnLCBoaWRlT3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcy5mb3JFYWNoKGN1c3RvbUZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0BoaWRlX2lmICguKilcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWRlSWZNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaEhpZGVJZih7IGN1c3RvbUZpZWxkLCBmb3JtRGF0YSwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaWRlSWZNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gaGlkZUlmTWF0Y2guaGlkZU9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvblZhbHVlcy5wdXNoKC4uLmhpZGVJZk1hdGNoLmhpZGVPcHRpb25WYWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncm91cE5hbWUgJiYgIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AZ3JvdXAgKC4qKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoR3JvdXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lID0gZ3JvdXBNYXRjaC5ncm91cE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cE9wdGlvbklkcyA9IGdyb3VwTWF0Y2guZ3JvdXBPcHRpb25JZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdG9vbHRpcE1hdGNoLnRvb2x0aXAgfHwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBzOiBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdPy52YWx1ZVRvb2x0aXBzLCB0b29sdGlwTWF0Y2gudmFsdWVUb29sdGlwcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AdG9vbHRpcF9oZWFkaW5nIG5hbWU6dmFsdWUgPSB0b29sdGlwIGhlYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwSGVhZGluZ3MgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwSGVhZGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0sIHZhbHVlVG9vbHRpcEhlYWRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hSZW5hbWUoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uUmVuYW1lc1tvcHRpb24uaWRdID0gbmV3TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlTm9uU2FsZXMgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihub25lU2FsZXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb24uaWRdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubm9uZVNhbGVzW29wdGlvbi5pZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVOb25TYWxlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50R3JvdXBPcHRpb25JZHMubGVuZ3RoID09PSAwICYmICFjdXJyZW50T3B0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBubyB2aXNpYmxlIG9wdGlvbiBiZWZvcmVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBncm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBOYW1lID0gZ3JvdXBOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBPcHRpb25JZHMgPSBncm91cE9wdGlvbklkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBOYW1lOiAke2N1cnJlbnRHcm91cE5hbWV9LCBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICR7Y3VycmVudEdyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YW5kLWFsb25lIG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uSWQgPSBvcHRpb24uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudE9wdGlvbklkOiAke2N1cnJlbnRPcHRpb25JZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlT3B0aW9uSWRzLnB1c2gob3B0aW9uLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA+IDAgJiYgaGlkZU9wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBoaWRkZW4gb3B0aW9ucyBmcm9tIHRoZSBjdXJyZW50IGdyb3VwXHJcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cE9wdGlvbklkcyA9IGN1cnJlbnRHcm91cE9wdGlvbklkcy5maWx0ZXIoaWQgPT4gIWhpZGVPcHRpb25JZHMuaW5jbHVkZXMoaWQpKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICR7Y3VycmVudEdyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50T3B0aW9uSWQ6ICcsIGN1cnJlbnRPcHRpb25JZCk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBOYW1lOiAnLCBjdXJyZW50R3JvdXBOYW1lKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRHcm91cE9wdGlvbklkczogJywgY3VycmVudEdyb3VwT3B0aW9uSWRzKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb25WYWx1ZXM6ICcsIGhpZGVPcHRpb25WYWx1ZXMpO1xyXG5cclxuICAgICAgICAvLyBTdG9yZSBub24tc2FsZSBwcmljZXMgb2Ygb3B0aW9uIHZhbHVlc1xyXG4gICAgICAgIC8vIHRvIHVzZSB3aGVuIHVwZGF0aW5nIG9wdGlvbiBwcmljZXMgb25seSB3aXRob3V0IHVwZGF0ZSB0aGUgd2hvbGUgbW9kaWZpZXJzIHZpZXdcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXMsIG5vbmVTYWxlcyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElEcyBvZiBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBhdCB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XHJcbiAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPiAwID8gY3VycmVudEdyb3VwT3B0aW9uSWRzXHJcbiAgICAgICAgICAgIDogKGN1cnJlbnRPcHRpb25JZCA/IFtjdXJyZW50T3B0aW9uSWRdIDogW10pO1xyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgc2hvd24gb3B0aW9uIGlkcyBvZiB0aGUgY3VycmVudCBzdGVwIHRvIHRoZSBzdGFja1xyXG4gICAgICAgIC8vIGlmIG5vdCB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXMgc3RlcC5cclxuICAgICAgICAvLyB0aGlzIGlzIHVzZWQgdG8gbmF2aWdhdGUgYmFjayB0byB0aGUgcHJldmlvdXMgc3RlcC5cclxuICAgICAgICBpZiAodGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgfHwgIWFyZUFycmF5c0VxdWFsVW5vcmRlcmVkKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMuc2xpY2UoLTEpWzBdLCBzaG93T3B0aW9uSWRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnB1c2goc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gc3RhY2tlZFNob3dPcHRpb25JZHM6ICcsIHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2hvdyAvIGhpZGUgYmFjayBidXR0b25cclxuICAgICAgICBpZiAodGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2suc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2suaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2hvdyBmb290ZXIsIGFuZCBoaWRlIGl0IGlmIG5vIG1vcmUgb3B0aW9uIHNob3duXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxGb290ZXIuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEZvb3Rlci5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIG1vZGFsIHRpdGxlIGZyb20gdGhlIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYCBvciBvcHRpb24gZGlzcGxheSBuYW1lXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE5hbWUpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuaHRtbChjdXJyZW50R3JvdXBOYW1lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gb3B0aW9uUmVuYW1lc1tzaG93T3B0aW9uSWRzWzBdXSB8fCB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHNob3dPcHRpb25JZHNbMF0pPy5kaXNwbGF5X25hbWU7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLnRleHQodGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGlkZSB0aGUgb3B0aW9uIG5hbWUgd2hlbiBoZXJlIGlzIG9ubHkgMSBvcHRpb24gc2hvd24gaW4gdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtzaG93T3B0aW9uSWRzWzBdfVwiXSAuZm9ybS1sYWJlbGApLmZpcnN0KCkuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdIC5mb3JtLWxhYmVsJykuZmlyc3QoKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IGN1cnJlbnQgcHJvZHVjdCBvcHRpb25zXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0nKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ19zaG93JylcclxuICAgICAgICAgICAgLmZpbHRlcigoXywgZWwpID0+ICFzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcigkKGVsKS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSkpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnX3Nob3cnKTtcclxuXHJcbiAgICAgICAgLy8gUmVuYW1lIHRoZSBzaG93biBvcHRpb25zIGlmIG5lZWRlZFxyXG4gICAgICAgIHNob3dPcHRpb25JZHMuZm9yRWFjaChvcHRpb25JZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBvcHRpb25SZW5hbWVzW29wdGlvbklkXTtcclxuICAgICAgICAgICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXSAuZm9ybS1sYWJlbGApLmZpcnN0KCkuaHRtbChuZXdOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTaG93IHRvb2x0aXAgZm9yIGdyb3VwXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwVG9vbHRpcCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyb3VwVG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVG9vbHRpcCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCh7IGN1c3RvbUZpZWxkLCBncm91cE5hbWU6IGN1cnJlbnRHcm91cE5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyb3VwVG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgZ3JvdXBUb29sdGlwKSk7XHJcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaG93IHRvb2x0aXAgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvblRvb2x0aXBzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFRpdGxlLCB0b29sdGlwcywgdG9vbHRpcEhlYWRpbmdzLCBzaG93T3B0aW9uSWRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIGZvciBzaG93biBvcHRpb25zIGFuZCBkaXNwbGF5IENvbnRpbnVlIGJ1dHRvbiBpZiBuZWVkZWQuXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRGVmYXVsdE9wdGlvblZhbHVlcyhzaG93T3B0aW9uSWRzLCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IHByaWNlcyBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xyXG4gICAgICAgIGlmICghaWdub3JlQVBJQ2FsbCkge1xyXG4gICAgICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgc3VtbWFyeSBidXQgcHJlbG9hZGVyIGZvciBwcmljZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N1bW1hcnkoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSwgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsICRtb2RpZmllcnNNb2RhbFRpdGxlLCAkYWRkVG9DYXJ0V3JhcHBlciwgZm9ybURhdGEsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2hvdyBzdW1tYXJ5IGNvbnRlbnQgaWYgbm8gb3B0aW9uIHZpc2libGUgb24gdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0ZSByZXF1aXJlZCB2YXJpYW50IG9wdGlvbnMgYW5kIHJlcG9ydCBlcnJvciBmb3IgdGhlIGZpcnN0IGludmFsaWQgb3B0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZVZhcmlhbnRPcHRpb25zKCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBzdGF0ZSB9KSA9PiBzdGF0ZSA9PT0gJ3ZhcmlhbnRfb3B0aW9uJykuZmluZChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIFJlcXVpcmVkIG9wdGlvbiBcIiR7b3B0aW9uLmRpc3BsYXlfbmFtZX1cIiBpcyBub3Qgc2VsZWN0ZWRgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gJGZvcm0uZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtpbnZhbGlkLmlkfV1cIl1gKVswXTtcclxuICAgICAgICAgICAgZWwucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrU3RlcCgpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gW1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnBvcCgpLCAvLyBjdXJyZW50IHN0ZXAncyBzaG93biBvcHRpb24gaWRzXHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMucG9wKCksIC8vIHByZXZpb3VzIHN0ZXAncyBzaG93biBvcHRpb24gaWRzXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgdmFsdWVzIG9mIHNob3duIG9wdGlvbiBpZHMgaW4gY3VycmVudCBzdGVwICYgcHJldmlvdXMgc3RlcFxyXG4gICAgICAgIC8vIHRvIGRpc3BsYXkgcHJldmlvdXMgc3RlcCBhZ2Fpbi5cclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcykge1xyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoX2ksIGVsKSA9PiBzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcigkKGVsKS5hdHRyKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkJykpKSk7XHJcblxyXG4gICAgICAgICAgICAkb3B0aW9uLmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcclxuICAgICAgICAgICAgICAgIC5ub3QoJ1t0eXBlPVwiY2hlY2tib3hcIl0sIFt0eXBlPVwicmFkaW9cIl0sIFt0eXBlPVwiZmlsZVwiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS52YWwoJycpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5yZW1vdmVBdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IHVwZGF0ZSBkaXNwbGF5IHByZXZpb3VzIG9wdGlvbnMgb24gbW9kaWZpZXJzIG1vZGFsXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGw6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIGNoYW5nZSBldmVudCB0byB1cGRhdGUgcHJpY2VzICYgZGF0YSBiZWxvbmdzIHRvIEJDXHJcbiAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gc2hvdWxkIGJlIGhpZGRlbiBiYXNlZCBvbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBmb3JtRGF0YTogRm9ybURhdGEsXHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IE51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfVxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBoaWRlT3B0aW9uOiBib29sZWFuLCBoaWRlT3B0aW9uVmFsdWVzOiBBcnJheTx7b3B0aW9uSWQ6IG51bWJlciwgdmFsdWVJZDogbnVtYmVyfT4gfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaEhpZGVJZih7IGN1c3RvbUZpZWxkLCBmb3JtRGF0YSwgb3B0aW9uIH0pIHtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGN1c3RvbUZpZWxkTWF0Y2hIaWRlSWY6IGNmX25hbWUgPSAke2N1c3RvbUZpZWxkLm5hbWV9IDsgb3BfbmFtZSA9ICR7b3B0aW9uLmRpc3BsYXlfbmFtZX1gKTtcclxuICAgICAgICBsZXQgaGlkZU9wdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGhpZGVPcHRpb25WYWx1ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0BoaWRlX2lmXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmICghbSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGhpZGVJZk9wdGlvbnMgPSBtWzFdLnNwbGl0KCc7JykubWFwKGt2ID0+IGt2LnNwbGl0KCc6JywgMikpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lOiBrZXkudHJpbSgpLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgPyB2YWx1ZS50cmltKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gaGlkZUlmT3B0aW9uczogJHtoaWRlSWZPcHRpb25zLm1hcCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiAodmFsdWUgPyBgJHtuYW1lfTogJHt2YWx1ZX1gIDogbmFtZSkpLmpvaW4oJzsgJyl9YCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgdGhlbk9wdGlvbnMgPSBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLm1hcChrdiA9PiBrdi5zcGxpdCgnOicsIDIpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcclxuICAgICAgICAgICAgbmFtZToga2V5LnRyaW0oKSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUudHJpbSgpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRoZW5PcHRpb25zOiAke3RoZW5PcHRpb25zLm1hcCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiAodmFsdWUgPyBgJHtuYW1lfTogJHt2YWx1ZX1gIDogbmFtZSkpLmpvaW4oJzsgJyl9YCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEZsYWcgdG8gY2hlY2sgaWYgb3B0aW9uOnZhbHVlIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgIG1hdGNoZXMgd2l0aCBjdXJyZW50IGZvcm0gZGF0YVxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBoaWRlSWZNYXRjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG9wdGlvbjp2YWx1ZSBpbiBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgIG1hdGNoZXMgd2l0aCBjdXJyZW50IGZvcm0gZGF0YVxyXG4gICAgICAgIGhpZGVJZk9wdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtvcHRpb25JZCwgdmFsdWVJZF0gPSB0aGlzLmZpbmRPcHRpb25WYWx1ZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZSA9IE51bWJlcihmb3JtRGF0YS5nZXRBbGwoYGF0dHJpYnV0ZVske29wdGlvbklkfV1gKS5zbGljZSgtMSlbMF0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm1WYWx1ZSA9PT0gdmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgaGlkZUlmTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlSWZNYXRjaDogJywgaGlkZUlmTWF0Y2gpO1xyXG5cclxuICAgICAgICBpZiAoaGlkZUlmTWF0Y2gpIHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgb3B0aW9uIHNob3VsZCBiZSBoaWRkZW4gd2hlbiBtYXRjaGluZyB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYFxyXG4gICAgICAgICAgICB0aGVuT3B0aW9ucy5mb3JFYWNoKCh7IG5hbWUsIHZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgY3VzdG9tIGZpZWxkIHZhbHVlIGNvbnRhaW4gb3B0aW9uIG5hbWUgd2l0aG91dCB2YWx1ZSwgdGhlbiBoaWRlIHRoZSB3aG9sZSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvbjogJywgaGlkZU9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb24udmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgaGlkZSB0aGUgc3BlY2lmaWMgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCgoeyBsYWJlbCwgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaGlkZU9wdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogb3B0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb25WYWx1ZXMucHVzaChfaGlkZU9wdGlvblZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb25WYWx1ZTogJywgX2hpZGVPcHRpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGlkZU9wdGlvbiB8fCBoaWRlT3B0aW9uVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaGlkZU9wdGlvbiwgaGlkZU9wdGlvblZhbHVlcyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gYmVsb25ncyB0byB0aGUgZ3JvdXAgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt7XHJcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XHJcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiBAcmV0dXJucyB7eyBncm91cE5hbWU6IHN0cmluZywgZ3JvdXBPcHRpb25JZHM6IEFycmF5PG51bWJlcj4gfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaEdyb3VwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0Bncm91cFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cE5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBPcHRpb25JZHMgPSBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLm1hcChzID0+IHMudHJpbSgpKSAvLyBvcHRpb24gbmFtZXNcclxuICAgICAgICAgICAgICAgIC5tYXAob3B0aW9uTmFtZSA9PiB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgZGlzcGxheV9uYW1lIH0pID0+IGVxdWFsT3B0aW9uU3RyaW5nKGRpc3BsYXlfbmFtZSwgb3B0aW9uTmFtZSkpPy5pZClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyb3VwT3B0aW9uSWRzLmluY2x1ZGVzKG9wdGlvbi5pZCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBncm91cCBpbiB0aGlzIGN1c3RvbSBmaWVsZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBncm91cE5hbWU6ICR7Z3JvdXBOYW1lfSwgZ3JvdXBPcHRpb25JZHM6ICR7Z3JvdXBPcHRpb25JZHN9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBncm91cE5hbWUsIGdyb3VwT3B0aW9uSWRzIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHZhbHVlIGhhcyBhIHRvb2x0aXAgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9XHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGRpc3BsYXlfbmFtZSxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBsYWJlbFxyXG4gICAgICogICAgIH1dXHJcbiAgICAgKiAgIH1cclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgdG9vbHRpcDogc3RyaW5nIH0gfCB7IHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBtWzFdLnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gY3VzdG9tRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0b29sdGlwIGZvciBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGZvciBvcHRpb24gXCIke25hbWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0b29sdGlwIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcHMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRvb2x0aXAgZm9yIG9wdGlvbiB2YWx1ZVxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgaWQsIGxhYmVsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGZvciBvcHRpb24gXCIke25hbWV9IDogJHt2YWx1ZX1cIiA9IFwiXCJcIiR7dG9vbHRpcH1cIlwiXCJgKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBzW2lkXSA9IHRvb2x0aXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWVUb29sdGlwcyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBncm91cCBoYXMgYSB0b29sdGlwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXAgKGdyb3VwIG5hbWUpID0gdG9vbHRpcGBcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBncm91cE5hbWU6IHN0cmluZ1xyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoVG9vbHRpcEdyb3VwKHsgY3VzdG9tRmllbGQsIGdyb3VwTmFtZSB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IGN1c3RvbUZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggZ3JvdXAgbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKGdyb3VwTmFtZSwgbmFtZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3IgZ3JvdXAgXCIke25hbWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgdG9vbHRpcCBoZWFkaW5nIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICogICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9XHJcbiAgICAgKiB9fSBwYXJhbTBcclxuICAgICAqIEByZXR1cm5zIHt7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwX2hlYWRpbmdcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IG1bMV0uc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBjdXN0b21GaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIG9wdGlvbiBuYW1lIG9yIG5vdCB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIXZhbHVlIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwSGVhZGluZ3MgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCgoeyBpZCwgbGFiZWwgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgaGVhZGluZyBmb3Igb3B0aW9uIFwiJHtuYW1lfSA6ICR7dmFsdWV9XCIgPSBcIlwiXCIke2hlYWRpbmd9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwSGVhZGluZ3NbaWRdID0gaGVhZGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb29sdGlwSGVhZGluZ3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiBuYW1lIGNvbnRhaW5zIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lYFxyXG4gICAgICogYW5kIHJldHVybiB0aGUgbmV3IG5hbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wLmN1c3RvbUZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLmN1c3RvbUZpZWxkLm5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbTAuY3VzdG9tRmllbGQudmFsdWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbTAub3B0aW9uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLm9wdGlvbi5kaXNwbGF5X25hbWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9IG5ldyBvcHRpb24gbmFtZVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoUmVuYW1lKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0ByZW5hbWVcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IG1bMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gU3RyaW5nKGN1c3RvbUZpZWxkLnZhbHVlKS50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHJlbmFtZSBvcHRpb24gXCIke25hbWV9XCIgdG8gXCIke25ld05hbWV9XCJgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiB2YWx1ZSBoYXMgYSBub24tc2FsZSBwcmljZSBpbiB0aGUgY3VzdG9tIGZpZWxkXHJcbiAgICAgKiBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICogICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9LFxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH19XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVOb25TYWxlcyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19Abm9uc2FsZVxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IE51bWJlcihtWzFdLnRyaW0oKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzcGxpdCBlYWNoIChvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlKSBwYWlyIHNlcGFyYXRlZCBieSBcIjtcIlxyXG4gICAgICAgICAgICBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLmZvckVhY2goa3YgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gc3BsaXQgb3B0aW9uIG5hbWUgOiBvcHRpb24gdmFsdWUgaW4gY3VzdG9tIGZpZWxkIHZhbHVlIHNlcGFyYXRlZCBieSBcIjpcIlxyXG4gICAgICAgICAgICAgICAgY29uc3QgW29wdGlvbk5hbWUsIHZhbHVlTGFiZWxdID0ga3Yuc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG9wdGlvbk5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIG5hbWUgaW4gY3VzdG9tIGZpZWxkIG1hdGNoIHdpdGggY3VycmVudCBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgb3B0aW9uIHZhbHVlIElEIHRoYXQgbWF0Y2hlcyB3aXRoIHRoZSB2YWx1ZSBsYWJlbCBpbiBjdXN0b20gZmllbGRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gb3B0aW9uLnZhbHVlcy5maW5kKCh7IGxhYmVsIH0pID0+IGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZUxhYmVsKSk/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBub24tc2FsZSBwcmljZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBvcHRpb24gdmFsdWUgSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVOb25TYWxlc1t2YWx1ZUlkXSA9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZU5vblNhbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2ggc3RvcmUgc2V0dGluZ3MgaW5jbHVkaW5nIHRheCBhbmQgYWN0aXZlIGN1cnJlbmN5XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8e1xyXG4gICAgICogICB0YXg6IHsgcGRwOiBudW1iZXIgfSxcclxuICAgICAqICAgY3VycmVuY3k6IHtcclxuICAgICAqICAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgZGlzcGxheTogeyBkZWNpbWFsUGxhY2VzOiBudW1iZXIsIGRlY2ltYWxUb2tlbjogc3RyaW5nLCBzeW1ib2w6IHN0cmluZywgc3ltYm9sUGxhY2VtZW50OiBzdHJpbmcsIHRob3VzYW5kc1Rva2VuOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBleGNoYW5nZVJhdGU6IG51bWJlciwgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBkZWZhdWx0Q3VycmVuY3k6IHtcclxuICAgICAqICAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgZGlzcGxheTogeyBkZWNpbWFsUGxhY2VzOiBudW1iZXIsIGRlY2ltYWxUb2tlbjogc3RyaW5nLCBzeW1ib2w6IHN0cmluZywgc3ltYm9sUGxhY2VtZW50OiBzdHJpbmcsIHRob3VzYW5kc1Rva2VuOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBleGNoYW5nZVJhdGU6IG51bWJlciwgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogfT5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hTZXR0aW5ncygpIHtcclxuICAgICAgICBpZiAoY2FjaGVkU2V0dGluZ3MpIHJldHVybiBjYWNoZWRTZXR0aW5ncztcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlZmF1bHRDdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSFcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeShjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5DdXJyZW5jeUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBjdXJyZW5jeShjdXJyZW5jeUNvZGU6ICRkZWZhdWx0Q3VycmVuY3lDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQ3VycmVuY3lGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgQ3VycmVuY3lGaWVsZHMgb24gQ3VycmVuY3kge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFBsYWNlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNoYW5nZVJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuZGVmYXVsdF9jdXJyZW5jeV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhY2hlZFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICAuLi5yZXNwLmRhdGEuc2l0ZS5zZXR0aW5ncyxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHJlc3AuZGF0YS5zaXRlLmN1cnJlbmN5LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIG9wdGlvbiBwcmljZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PHsgaWQ6IG51bWJlciwgdmFsdWVzOiBBcnJheTx7IGlkOiBudW1iZXIgfT4gfT59IHNob3dPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8e1xyXG4gICAgICogICBvcHRpb25JZDogbnVtYmVyfG51bGwsXHJcbiAgICAgKiAgIHZhbHVlSWQ6IG51bWJlcnxudWxsLFxyXG4gICAgICogICBwcmljZXNXaXRoVGF4OiB7XHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgcHJpY2VzV2l0aG91dFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIGFkanVzdGVkUHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG51bWJlcixcclxuICAgICAqICAgfSxcclxuICAgICAqICAgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4OiB7XHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBub25TYWxlUHJpY2VWYWx1ZTogbnVtYmVyLFxyXG4gICAgICogICB9LFxyXG4gICAgICogfT4+fVxyXG4gICAgICovXHJcbiAgICBhc3luYyBmZXRjaE9wdGlvblByaWNlcyhzaG93T3B0aW9ucywgZm9ybURhdGEpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlSWRzID0gW107XHJcblxyXG4gICAgICAgIGZvcm1EYXRhLmVudHJpZXMoKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IGtleS5tYXRjaCgvXmF0dHJpYnV0ZVxcWyhcXGQrKVxcXSQvKTtcclxuICAgICAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVudGl0eUlkID0gTnVtYmVyKG1bMV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVFbnRpdHlJZCA9IE51bWJlcih2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlRW50aXR5SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3dPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IG9wdGlvbkVudGl0eUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlSWRzLnB1c2goeyBvcHRpb25FbnRpdHlJZCwgdmFsdWVFbnRpdHlJZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY29tYm9zWzBdIGlzIHRoZSBiYXNlbGluZSAoYWxyZWFkeSBzZWxlY3RlZCBvcHRpb25zKTsgdGhlIHJlc3QgYXJlIG9uZSBjYW5kaWRhdGUgdmFsdWUgZWFjaFxyXG4gICAgICAgIGNvbnN0IGNvbWJvcyA9IFtzZWxlY3RlZE9wdGlvblZhbHVlSWRzXTtcclxuICAgICAgICBjb25zdCBjb21ib3NNZXRhID0gW251bGxdO1xyXG5cclxuICAgICAgICBzaG93T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG9wdGlvbi52YWx1ZXMgfHwgKG9wdGlvbi52YWx1ZSA/IFt7IGlkOiBvcHRpb24udmFsdWUgfV0gOiBbXSk7XHJcblxyXG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb21ib3MucHVzaChbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyxcclxuICAgICAgICAgICAgICAgICAgICB7IG9wdGlvbkVudGl0eUlkOiBvcHRpb24uaWQsIHZhbHVlRW50aXR5SWQ6IHZhbHVlLmlkIH0sXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgIGNvbWJvc01ldGEucHVzaCh7IG9wdGlvbklkOiBvcHRpb24uaWQsIHZhbHVlSWQ6IHZhbHVlLmlkIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCB0aGlzLmZldGNoT3B0aW9uUHJpY2VzQmF0Y2goY29tYm9zKTtcclxuICAgICAgICBjb25zdCBbcHJldiwgLi4uc2VsZWN0aW9uc10gPSBwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+IChpID09PSAwID8gcHJvZHVjdCA6IHsgLi4uY29tYm9zTWV0YVtpXSwgLi4ucHJvZHVjdCB9KSk7XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9uLXNhbGUgcHJpY2UgYmFzZWQgb24gdGhlIHByZXZpb3VzIHByaWNlIGFuZCB0aGUgY3VycmVudCBwcmljZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc2lkZXIgYWxsIG5vdyBwcmljZSBhbmQgcmVndWxhciBwcmljZVxyXG4gICAgICAgICAgICAgICAgbGV0IG5vblNhbGVQcmljZVdpdGhUYXggPSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXg/LnByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LnByaWNlLnZhbHVlIC0gc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG5vbi1zYWxlIHByaWNlIGlmIGl0J3MgbGVzcyB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBpZiAobm9uU2FsZVByaWNlV2l0aFRheCA8PSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFkanVzdGVkUHJpY2VzV2l0aFRheCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhUYXguYmFzZVByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VWYWx1ZTogbm9uU2FsZVByaWNlV2l0aFRheCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBub24tc2FsZSBwcmljZSBiYXNlZCBvbiB0aGUgcHJldmlvdXMgcHJpY2UgYW5kIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zaWRlciBhbGwgbm93IHByaWNlIGFuZCByZWd1bGFyIHByaWNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9uU2FsZVByaWNlV2l0aG91dFRheCA9IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheD8ucHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAvLyB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8ucHJpY2UudmFsdWUgLSBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbm9uLXNhbGUgcHJpY2UgaWYgaXQncyBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIGlmIChub25TYWxlUHJpY2VXaXRob3V0VGF4IDw9IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVZhbHVlOiBub25TYWxlUHJpY2VXaXRob3V0VGF4LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZldGNoT3B0aW9uUHJpY2VzIHJldHVybnM6ICcsIHNlbGVjdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBbcHJldiwgLi4uc2VsZWN0aW9uc107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBwcm9kdWN0IHByaWNlIGZyb20gc3BlY2lmaWMgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8eyBvcHRpb25FbnRpdHlJZDogbnVtYmVyLCB2YWx1ZUVudGl0eUlkOiBudW1iZXJ9Pn0gb3B0aW9uVmFsdWVJZHNcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYXJpYW50IGZldGNoIHRoZSBtYXRjaGluZyBTS1UvdmFyaWFudCdzIG93biBwcmljZSBpbnN0ZWFkIG9mIHRoZSBiYXNlIHByb2R1Y3QgKyBtb2RpZmllcnNcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcHJpY2VzV2l0aFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSwgcHJpY2VzV2l0aG91dFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSB9PlxyXG4gICAgICovXHJcbiAgICBhc3luYyBmZXRjaE9wdGlvblByaWNlKG9wdGlvblZhbHVlSWRzKSB7XHJcbiAgICAgICAgY29uc3QgW3Byb2R1Y3RdID0gYXdhaXQgdGhpcy5mZXRjaE9wdGlvblByaWNlc0JhdGNoKFtvcHRpb25WYWx1ZUlkc10pO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2ggcHJpY2VzIGZvciBtdWx0aXBsZSBvcHRpb24tdmFsdWUgY29tYmluYXRpb25zLCBtZXJnaW5nIGFzIG1hbnkgYXMgcG9zc2libGUgaW50byBhXHJcbiAgICAgKiBzaW5nbGUgR3JhcGhRTCByZXF1ZXN0ICh2aWEgYWxpYXNlcykgaW5zdGVhZCBvZiBvbmUgcmVxdWVzdCBwZXIgY29tYmluYXRpb24sIHRvIGN1dCBkb3duXHJcbiAgICAgKiBvbiB0aGUgbnVtYmVyIG9mIG5ldHdvcmsgcm91bmQtdHJpcHMgKHRoZSBtYWluIGNvc3QsIG5vdCBwYXlsb2FkIHNpemUpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8eyBvcHRpb25FbnRpdHlJZDogbnVtYmVyLCB2YWx1ZUVudGl0eUlkOiBudW1iZXJ9Pj59IGNvbWJvc1xyXG4gICAgICogQHBhcmFtIHtBcnJheTxib29sZWFuPn0gaXNWYXJpYW50RmxhZ3MgcGVyLWNvbWJvOiBsb29rIHVwIHRoZSBtYXRjaGluZyB2YXJpYW50L1NLVSBwcmljZVxyXG4gICAgICogICAobmVlZGVkIGZvciBcInZhcmlhbnQgb3B0aW9uXCIgYXR0cmlidXRlcywgd2hpY2ggZGVmaW5lIHNlcGFyYXRlIFNLVXMpIGluc3RlYWQgb2YgdGhlXHJcbiAgICAgKiAgIGJhc2UgcHJvZHVjdCBwcmljZSArIG1vZGlmaWVyIGFkanVzdG1lbnRcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PHsgcHJpY2VzV2l0aFRheDogb2JqZWN0LCBwcmljZXNXaXRob3V0VGF4OiBvYmplY3QgfT4+fSByZXN1bHRzLCBzYW1lIG9yZGVyL2xlbmd0aCBhcyBgY29tYm9zYFxyXG4gICAgICovXHJcbiAgICBhc3luYyBmZXRjaE9wdGlvblByaWNlc0JhdGNoKGNvbWJvcykge1xyXG4gICAgICAgIGNvbnN0IEJBVENIX0NIVU5LX1NJWkUgPSA4O1xyXG4gICAgICAgIGNvbnN0IGNhY2hlS2V5cyA9IGNvbWJvcy5tYXAoY29tYm8gPT4gYHByb2R1Y3Q6JHtKU09OLnN0cmluZ2lmeShjb21ibyl9YCk7XHJcbiAgICAgICAgY29uc3QgdW5jYWNoZWRJbmRleGVzID0gY2FjaGVLZXlzXHJcbiAgICAgICAgICAgIC5tYXAoKGtleSwgaW5kZXgpID0+ICh0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtrZXldID8gbnVsbCA6IGluZGV4KSlcclxuICAgICAgICAgICAgLmZpbHRlcihpbmRleCA9PiBpbmRleCAhPT0gbnVsbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5jYWNoZWRJbmRleGVzLmxlbmd0aDsgaSArPSBCQVRDSF9DSFVOS19TSVpFKSB7XHJcbiAgICAgICAgICAgIGNodW5rcy5wdXNoKHVuY2FjaGVkSW5kZXhlcy5zbGljZShpLCBpICsgQkFUQ0hfQ0hVTktfU0laRSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQoY2h1bmtzLm1hcChjaHVua0luZGV4ZXMgPT4gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZURlZnMgPSBjaHVua0luZGV4ZXMubWFwKGkgPT4gYCRvcHRpb25WYWx1ZUlkcyR7aX06IFtPcHRpb25WYWx1ZUlkIV1gKS5qb2luKCcsICcpO1xyXG4gICAgICAgICAgICBjb25zdCBhbGlhc0ZpZWxkcyA9IGNodW5rSW5kZXhlcy5tYXAoaSA9PiBgXHJcbiAgICAgICAgICAgICAgICBmJHtpfTogcHJvZHVjdChlbnRpdHlJZDogJHByb2R1Y3RJZCwgb3B0aW9uVmFsdWVJZHM6ICRvcHRpb25WYWx1ZUlkcyR7aX0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRoVGF4OiBwcmljZXMoY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlLCBpbmNsdWRlVGF4OiB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByaWNlRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlc1dpdGhvdXRUYXg6IHByaWNlcyhjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUsIGluY2x1ZGVUYXg6IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByaWNlRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgKS5qb2luKCdcXG4nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2h1bmtJbmRleGVzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNbYG9wdGlvblZhbHVlSWRzJHtpfWBdID0gY29tYm9zW2ldO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmNvbnRleHQuZ3JhcGhRTFRva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgKCRwcm9kdWN0SWQ6IEludCEsICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSEsICR7dmFyaWFibGVEZWZzfSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2FsaWFzRmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5RmllbGRzIG9uIE1vbmV5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgUHJpY2VGaWVsZHMgb24gUHJpY2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaHVua0luZGV4ZXMuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwLmRhdGE/LnNpdGU/LltgZiR7aX1gXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtjYWNoZUtleXNbaV1dID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3QgbGV0IG9uZSBiYWQgY2h1bmsgKGUuZy4gYW4gdW5zdXBwb3J0ZWQgdmFyaWFudCBwcmljaW5nIHF1ZXJ5IG9uIHRoaXNcclxuICAgICAgICAgICAgICAgIC8vIHN0b3JlKSB0YWtlIGRvd24gcHJpY2luZyBmb3IgZXZlcnkgb3RoZXIgb3B0aW9uIG9uIHRoZSBwYWdlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZldGNoT3B0aW9uUHJpY2VzQmF0Y2ggY2h1bmsgZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksIDQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2FjaGVLZXlzLm1hcChrZXkgPT4gdGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVba2V5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5IHRvb2x0aXBzIHRvIHRoZSBjb3JyZXNwb25kaW5nIHNob3duIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFRpdGxlXHJcbiAgICAgKiBAcGFyYW0ge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IHRvb2x0aXA6IHN0cmluZywgdmFsdWVUb29sdGlwczogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfSB9fSB0b29sdGlwc1xyXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfX0gdG9vbHRpcEhlYWRpbmdzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNob3dPcHRpb25JZHMgb3B0aW9uIGlkcyB0byBzaG93IHRvb2x0aXBzXHJcbiAgICAgKi9cclxuICAgIHNob3dPcHRpb25Ub29sdGlwcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncywgc2hvd09wdGlvbklkcykge1xyXG4gICAgICAgIC8vIERpc3BsYXkgdG9vbHRpcFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvb2x0aXBzKS5mb3JFYWNoKChbb3B0aW9uSWQsIHsgdG9vbHRpcCwgdmFsdWVUb29sdGlwcyB9XSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKG9wdGlvbklkKSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25Ub29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB0b29sdGlwKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkJywgb3B0aW9uSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICRvcHRpb24uZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZD1cIiR7b3B0aW9uSWR9XCJdYCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJGxhYmVsID0gJG9wdGlvbi5maW5kKCdsYWJlbCcpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRsYWJlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxhYmVsLmFmdGVyKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5wcmVwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwcykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcF0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHZhbHVlVG9vbHRpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJG9wdGlvbi5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtvcHRpb25JZH0tJHt2YWx1ZUlkfVwiXWApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHZhbHVlLmFmdGVyKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGlmIG9ubHkgMSBvcHRpb24gc2hvd24gYXQgY3VycmVudCBzdGVwLFxyXG4gICAgICAgIC8vIHRoZW4gbW92ZSBpdHMgdG9vbHRpcCB0byB0aGUgbW9kYWwgdGl0bGVcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQ9XCIke3Nob3dPcHRpb25JZHNbMF19XCJdYCk7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IHRvb2x0aXAgaGVhZGluZ1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvb2x0aXBIZWFkaW5ncylcclxuICAgICAgICAgICAgLmZpbHRlcigoW29wdGlvbklkXSkgPT4gc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIob3B0aW9uSWQpKSlcclxuICAgICAgICAgICAgLmZvckVhY2goKFtvcHRpb25JZCwgdmFsdWVUb29sdGlwSGVhZGluZ3NdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwSGVhZGluZ3MpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXBIZWFkaW5nID0gJCh0aGlzLm9wdGlvblZhbHVlVG9vbHRpcEhlYWRpbmdUZW1wbGF0ZS5yZXBsYWNlKCc8JWhlYWRpbmclPicsIHZhbHVlVG9vbHRpcEhlYWRpbmcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWhlYWRpbmctaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkPVwiJHtvcHRpb25JZH0tJHt2YWx1ZUlkfVwiXWApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5hcHBlbmQoJHRvb2x0aXBIZWFkaW5nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJbmxpbmVPcHRpb25Ub29sdGlwcygpIHtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKS5maXJzdCgpO1xyXG5cclxuICAgICAgICBpZiAoISRwcm9kdWN0T3B0aW9uc0VsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkXSwgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkXScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJvZHVjdE9wdGlvbnMubGVuZ3RoIHx8ICF0aGlzLmN1c3RvbUZpZWxkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uSWRzID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcclxuICAgICAgICAgICAgLm1hcCgoX2luZGV4LCBlbCkgPT4gTnVtYmVyKCQoZWwpLmRhdGEoJ3Byb2R1Y3QtYXR0cmlidXRlLWlkJykpKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgdG9vbHRpcHMgPSB7fTtcclxuICAgICAgICBjb25zdCB0b29sdGlwSGVhZGluZ3MgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IG9wdGlvbklkcy5pbmNsdWRlcyhpZCkpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcy5mb3JFYWNoKGN1c3RvbUZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b29sdGlwTWF0Y2ggPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB0b29sdGlwTWF0Y2gudG9vbHRpcCB8fCB0b29sdGlwc1tvcHRpb24uaWRdPy50b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwczogT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udmFsdWVUb29sdGlwcywgdG9vbHRpcE1hdGNoLnZhbHVlVG9vbHRpcHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcEhlYWRpbmdzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcEhlYWRpbmcoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVRvb2x0aXBIZWFkaW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdLCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dJbmxpbmVPcHRpb25Ub29sdGlwcygkcHJvZHVjdE9wdGlvbnNFbCwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3BlY1Rvb2x0aXBzKCkge1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9ICdfX0BzcGVjX3Rvb2x0aXAgJztcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gTUFTVEVSIFNQRUMgVE9PTFRJUFNcclxuICAgICAgICAvLyBBZGQgZW50cmllcyBoZXJlIHRvIHNob3cgYSB0b29sdGlwIG9uIGV2ZXJ5IHByb2R1Y3QgcGFnZSBmb3JcclxuICAgICAgICAvLyB0aGF0IHNwZWMgcm93IGF1dG9tYXRpY2FsbHkuIE5vIGN1c3RvbSBmaWVsZCBuZWVkZWQgcGVyIHByb2R1Y3QuXHJcbiAgICAgICAgLy8gUGVyLXByb2R1Y3QgY3VzdG9tIGZpZWxkcyAoZS5nLiBfX0BzcGVjX3Rvb2x0aXAgTWVtb3J5KSB3aWxsXHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlc2UgdmFsdWVzIGlmIHByZXNlbnQuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3QgbWFzdGVyVG9vbHRpcHMgPSB7XHJcbiAgICAgICAgICAgICdNZW1vcnknOiAnTm90IHN1cmUgaWYgdGhpcyBpcyB0aGUgcmlnaHQgYW1vdW50IG9mIG1lbW9yeSBmb3IgeW91ciBuZWVkcz8gUmVmZXIgdG8gb3VyIGJsb2cgb24gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJvYmpvaG5zb24uY29tL2Jsb2cvaG93LW11Y2gtcmFtLWRvLXlvdS1hY3R1YWxseS1uZWVkLWluLWEtcnVnZ2VkLWxhcHRvcC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SQU0gTmVlZHMgaW4gYSBydWdnZWQgbGFwdG9wPC9hPi4nLFxyXG4gICAgICAgICAgICAvLyAnU3RvcmFnZSc6ICdUaGUgZHJpdmUgd2hlcmUgeW91ciBmaWxlcyBhbmQgT1MgYXJlIHN0b3JlZC4nLFxyXG4gICAgICAgICAgICAvLyAnUHJvY2Vzc29yJzogJ1RoZSBDUFUgaXMgdGhlIGJyYWluIG9mIHRoZSBjb21wdXRlci4nLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBhbnkgcHJldmlvdXNseSBpbmplY3RlZCBzcGVjIHRvb2x0aXBzXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtc3BlYy10b29sdGlwXScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAvLyBCdWlsZCBmaW5hbCBtYXA6IHN0YXJ0IHdpdGggbWFzdGVyIGRlZmF1bHRzLCBvdmVycmlkZSB3aXRoIHBlci1wcm9kdWN0IGN1c3RvbSBmaWVsZHNcclxuICAgICAgICBjb25zdCByZXNvbHZlZFRvb2x0aXBzID0geyAuLi5tYXN0ZXJUb29sdGlwcyB9O1xyXG5cclxuICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcy5mb3JFYWNoKCh7IG5hbWUsIHZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFuYW1lLnN0YXJ0c1dpdGgocHJlZml4KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzcGVjTmFtZSA9IG5hbWUuc2xpY2UocHJlZml4Lmxlbmd0aCkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNwZWNOYW1lICYmIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlZFRvb2x0aXBzW3NwZWNOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHJlc29sdmVkVG9vbHRpcHMpLmZvckVhY2goKFtzcGVjTmFtZSwgdG9vbHRpcFRleHRdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRkZCA9IHRoaXMuJHNjb3BlLmZpbmQoYFtkYXRhLXNwZWMtbmFtZT1cIiR7c3BlY05hbWV9XCJdYCkuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGRkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25Ub29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB0b29sdGlwVGV4dCkpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1zcGVjLXRvb2x0aXAnLCBzcGVjTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAkZGQuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93SW5saW5lT3B0aW9uVG9vbHRpcHMoJHByb2R1Y3RPcHRpb25zRWwsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MpIHtcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwcykuZm9yRWFjaCgoW29wdGlvbklkLCB7IHRvb2x0aXAsIHZhbHVlVG9vbHRpcHMgPSB7fSB9XSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkb3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdG9vbHRpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIG9wdGlvbklkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRsYWJlbCA9ICRvcHRpb24uZmluZCgnbGFiZWwnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkbGFiZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYWJlbC5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLnByZXBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZVRvb2x0aXBzKS5mb3JFYWNoKChbdmFsdWVJZCwgdmFsdWVUb29sdGlwXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJG9wdGlvbi5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHZhbHVlVG9vbHRpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCc6c2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJG9wdGlvbi5maW5kKCdzZWxlY3QnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzZWxlY3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNlbGVjdC5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwSGVhZGluZ3MpLmZvckVhY2goKFtvcHRpb25JZCwgdmFsdWVUb29sdGlwSGVhZGluZ3NdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRvcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcEhlYWRpbmdzKS5mb3JFYWNoKChbdmFsdWVJZCwgdmFsdWVUb29sdGlwSGVhZGluZ10pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXBIZWFkaW5nID0gJCh0aGlzLm9wdGlvblZhbHVlVG9vbHRpcEhlYWRpbmdUZW1wbGF0ZS5yZXBsYWNlKCc8JWhlYWRpbmclPicsIHZhbHVlVG9vbHRpcEhlYWRpbmcpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCc6c2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJG9wdGlvbi5maW5kKCdzZWxlY3QnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzZWxlY3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNlbGVjdC5hZnRlcigkdG9vbHRpcEhlYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5hcHBlbmQoJHRvb2x0aXBIZWFkaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkdG9vbHRpcEhlYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIHRvIHRoZSBzaG93biBvcHRpb25zIGFuZCBkaXNwbGF5IGNvbnRpbnVlIGJ1dHRvbiBpZiBuZWNlc3NhcnkuXHJcbiAgICAgKiBTdG9wIGF1dG8gdXBkYXRlIHRoZSBtb2RpZmllcnMgdmlldyB1bnRpbCB0aGUgY29udGludWUgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbiAgICAgKlxyXG4gICAgICogQ29udGludWUgYnV0dG9uIGlzIHNob3duIGlmIGFueSBvZiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICAgICAqIC0gb3B0aW9ucyB0aGF0IGhhcyBkZWZhdWx0IHZhbHVlXHJcbiAgICAgKiAtIGNoZWNrYm94IG9wdGlvbnNcclxuICAgICAqIC0gb3B0aW9uYWwgc2VsZWN0IG9wdGlvbnNcclxuICAgICAqIC0gb3B0aW9uYWwgZGF0ZSBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgICogLSBmaWxlIGlucHV0XHJcbiAgICAgKiAtIG1vcmUgdGhhbiAxIG9wdGlvbiBhcmUgc2hvd24gYXQgdGhlIHNhbWUgdGltZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gc2hvd09wdGlvbklkcyBzaG93IG9wdGlvbiBpZHNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsQ29udGludWVcclxuICAgICAqL1xyXG4gICAgcG9wdWxhdGVEZWZhdWx0T3B0aW9uVmFsdWVzKHNob3dPcHRpb25JZHMsICRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbENvbnRpbnVlKSB7XHJcbiAgICAgICAgY29uc3Qgc2hvd25PcHRpb25zID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgaWQgfSkgPT4gc2hvd09wdGlvbklkcy5pbmNsdWRlcyhpZCkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBvcHRpb25zIHRoYXQgaGFzIGRlZmF1bHQgdmFsdWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHByZWZpbGwsIHNlbGVjdGVkX2RhdGUsIHZhbHVlcyB9KSA9PlxyXG4gICAgICAgICAgICAgICAgcHJlZmlsbCB8fFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRfZGF0ZSAmJiAoc2VsZWN0ZWRfZGF0ZS5kYXkgfHwgc2VsZWN0ZWRfZGF0ZS5tb250aCB8fCBzZWxlY3RlZF9kYXRlLnllYXIpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM/LmZpbmQoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogY2hlY2tib3ggdHlwZSBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgY2hlY2tib3hPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgbm9WYWx1ZSwgdmFsdWUgfSkgPT4gbm9WYWx1ZSB8fCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGZpbGUgdHlwZSBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZmlsZU9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBwYXJ0aWFsIH0pID0+IHBhcnRpYWwgPT09ICdpbnB1dC1maWxlJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGRhdGUgdHlwZSBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZGF0ZU9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBwYXJ0aWFsIH0pID0+IHBhcnRpYWwgPT09ICdkYXRlJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGRyb3Bkb3duIHR5cGUgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHJlcXVpcmVkLCBwYXJ0aWFsIH0pID0+ICFyZXF1aXJlZCAmJiBwYXJ0aWFsID09PSAnc2V0LXNlbGVjdCcpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB0ZXh0IC8gbXVsdGlsaW5lIC8gbnVtYmVyIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB0ZXh0T3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHBhcnRpYWwgfSkgPT4gcGFydGlhbCA9PT0gJ2lucHV0LXRleHQnIHx8IHBhcnRpYWwgPT09ICd0ZXh0YXJlYScgfHwgcGFydGlhbCA9PT0gJ2lucHV0LW51bWJlcnMnKTtcclxuXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICB8fCBkZWZhdWx0T3B0aW9ucy5sZW5ndGggPiAwIHx8IGNoZWNrYm94T3B0aW9ucy5sZW5ndGggPiAwIHx8IGZpbGVPcHRpb25zLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgfHwgZGF0ZU9wdGlvbnMubGVuZ3RoID4gMCB8fCBkcm9wZG93bk9wdGlvbnMubGVuZ3RoID4gMCB8fCB0ZXh0T3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHNob3cgY29udGludWUgYnV0dG9uXHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbENvbnRpbnVlLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgYXV0byB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IHVudGlsIHRoZSBjb250aW51ZSBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICAgICAgICB0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIG9wdGlvbnNcclxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMuZm9yRWFjaCgoe1xyXG4gICAgICAgICAgICAgICAgaWQsIHByZWZpbGwsIHNlbGVjdGVkX2RhdGUsIHZhbHVlcyxcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IHZhbHVlcz8uZmluZCgoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCk/LmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ3NlbGVjdCcpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdYCkudmFsKHZhbHVlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVmaWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dCwgdGV4dGFyZWEnKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXWApLnZhbChwcmVmaWxsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRfZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9kYXRlLmRheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVtkYXldXCJdYCkudmFsKHNlbGVjdGVkX2RhdGUuZGF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX2RhdGUubW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bbW9udGhdXCJdYCkudmFsKHNlbGVjdGVkX2RhdGUubW9udGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRfZGF0ZS55ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW3llYXJdXCJdYCkudmFsKHNlbGVjdGVkX2RhdGUueWVhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIHRvIHRoZSBzaG93biBjaGVja2JveCBvcHRpb25zXHJcbiAgICAgICAgICAgIGNoZWNrYm94T3B0aW9ucy5mb3JFYWNoKCh7XHJcbiAgICAgICAgICAgICAgICBpZCwgY2hlY2tlZCwgdmFsdWUsIG5vVmFsdWUsXHJcbiAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiaGlkZGVuXCJdYCkudmFsKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJjaGVja2JveFwiXWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiaGlkZGVuXCJdYCkudmFsKG5vVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImNoZWNrYm94XCJdYCkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBtYXJrIGZpbGUgaW5wdXQsIGRhdGUgaW5wdXQsIGRyb3Bkb3duIHNlbGVjdCwgdGV4dCBpbnB1dCBhcyBzaG93blxyXG4gICAgICAgICAgICBbLi4uZmlsZU9wdGlvbnMsIC4uLmRhdGVPcHRpb25zLCAuLi5kcm9wZG93bk9wdGlvbnMsIC4uLnRleHRPcHRpb25zXS5mb3JFYWNoKCh7IGlkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bZGF5XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW21vbnRoXVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW3llYXJdXCJdYCkuYXR0cignZGF0YS1maWVsZC1zaG93bicsICd0cnVlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlcigkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcykge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgcHJlbG9hZGVyOiB0cnVlIH07XHJcbiAgICAgICAgY29uc3QgcHJpY2VIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMub3B0aW9uUHJpY2VUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgIGNvbnN0IHByaWNlVGV4dCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlUGxhaW5UZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuXHJcbiAgICAgICAgc2hvd09wdGlvbklkcy5mb3JFYWNoKG9wdGlvbklkID0+IHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl0gW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdYClcclxuICAgICAgICAgICAgICAgIC5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gTnVtYmVyKCR2YWx1ZS5hdHRyKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWVJZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwcmljZSA9ICQocHJpY2VIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgYWxyZWFkeSBoYXMgcHJpY2UgZGlzcGxheWVkIGJlZm9yZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5kYXRhKCdwcmljZUh0bWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JywgJHZhbHVlLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUudGV4dChgJHskdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0Jyl9ICR7cHJpY2VUZXh0fWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJG9sZCA9ICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRvbGQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG9sZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwbGFjZWhvbGRlciA9ICR2YWx1ZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1wbGFjZWhvbGRlcl0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcGxhY2Vob2xkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS5hcHBlbmQoJHByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5IHByaWNlcyB0byBjb3JyZXNwb25kaW5nIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNob3dPcHRpb25JZHMgb3B0aW9uIGlkcyB0byBzaG93IHByaWNlc1xyXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcclxuICAgICAqIEBwYXJhbSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9IH19IG5vbmVTYWxlcyBvcHRpb24gdmFsdWVzIHdpdGggbm9uLXNhbGUgcHJpY2VzXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpZ25vcmVVcGRhdGVTdWJ0b3RhbD1mYWxzZV0gaWdub3JlIHVwZGF0ZSBzdWJ0b3RhbFxyXG4gICAgICovXHJcbiAgICAvKipcclxuICAgICAqIEF1dG8tY2FsY3VsYXRlIGFuZCBkaXNwbGF5IGVhY2ggb3B0aW9uIHZhbHVlJ3MgcHJpY2UgYWRqdXN0bWVudCAoZS5nLiBcIigrJDEwMC4wMClcIilcclxuICAgICAqIG5leHQgdG8gaXRzIGxhYmVsIG9uIHRoZSBwbGFpbiAobm9uLW1vZGFsKSBvcHRpb24gbGlzdCwgc28gYWRtaW5zIG5vIGxvbmdlciBuZWVkIHRvXHJcbiAgICAgKiBtYW51YWxseSB0eXBlIHRoZSBwcmljZSBkaWZmZXJlbmNlIGludG8gdGhlIG9wdGlvbiB2YWx1ZSBuYW1lLlxyXG4gICAgICovXHJcbiAgICBpbml0SW5saW5lT3B0aW9uUHJpY2VIaW50cygpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKS5maXJzdCgpO1xyXG5cclxuICAgICAgICBpZiAoJHByb2R1Y3RPcHRpb25zRWwubGVuZ3RoID09PSAwIHx8ICF0aGlzLnByb2R1Y3RPcHRpb25zPy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG4gICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnByb2R1Y3RPcHRpb25zLm1hcCgoeyBpZCB9KSA9PiBpZCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd09wdGlvblByaWNlcygkcHJvZHVjdE9wdGlvbnNFbCwgJCgpLCBzaG93T3B0aW9uSWRzLCBmb3JtRGF0YSwge30sIHRydWUpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBpbml0SW5saW5lT3B0aW9uUHJpY2VIaW50cyBmYWlsZWQ6ICcsIGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMsIGlnbm9yZVVwZGF0ZVN1YnRvdGFsID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBbc2V0dGluZ3MsIFtwcmV2LCAuLi5zZWxlY3Rpb25zXV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hTZXR0aW5ncygpLFxyXG4gICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2VzKFxyXG4gICAgICAgICAgICAgICAgc2hvd09wdGlvbklkcy5tYXAoX2lkID0+IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gX2lkKSksXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd1ByaWNlID0gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCBNYXRoLmFicyhOdW1iZXIodmFsdWUpKSA8IDAuMDA1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UHJpY2UodmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaCgoe1xyXG4gICAgICAgICAgICBvcHRpb25JZCwgdmFsdWVJZCwgYWRqdXN0ZWRQcmljZXNXaXRoVGF4LCBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXgsXHJcbiAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdFWCcgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheDogc2hvd1ByaWNlKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IChhZGp1c3RlZFByaWNlc1dpdGhUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA6ICcnKSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiAoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IHRoaXMuZm9ybWF0UHJpY2UoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSwgdHJ1ZSkgOiAnJyksXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdJTkMnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IHNob3dQcmljZShhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiAoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheDogKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUsIHRydWUpIDogJycpLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMucHJpY2VXaXRoVGF4IHx8IHBhcmFtcy5wcmljZVdpdGhvdXRUYXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIG92ZXJyaWRlIG5vbi1zYWxlIHByaWNlIGZvciBvcHRpb24gdmFsdWVzIGlmIGl0IGlzIGFwcGVhcnMgaW4gY3VzdG9tIGZpZWxkIGBfX0Bub25zYWxlYFxyXG4gICAgICAgICAgICAgICAgLy8gYW5kIGlmIGl0J3MgaGlnaGVyIHRoYW4gdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vblNhbGUgPSBub25lU2FsZXNbb3B0aW9uSWRdPy5bdmFsdWVJZF07XHJcbiAgICAgICAgICAgICAgICBpZiAobm9uU2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4Y2hhbmdlZE5vblNhbGUgPSBub25TYWxlICogc2V0dGluZ3MuY3VycmVuY3kuZXhjaGFuZ2VSYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlVmFsdWUgPSBzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ucHJpY2U/LnZhbHVlIDogYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5wcmljZT8udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2hhbmdlZE5vblNhbGUgPiBwcmljZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZTogZXhjaGFuZ2VkTm9uU2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiB0aGlzLmZvcm1hdFByaWNlKGV4Y2hhbmdlZE5vblNhbGUsIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWU6IGV4Y2hhbmdlZE5vblNhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheDogdGhpcy5mb3JtYXRQcmljZShleGNoYW5nZWROb25TYWxlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlVGV4dCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlUGxhaW5UZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHByaWNlID0gJChwcmljZUh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgLy8gc2NvcGUgdG8gdGhlIGxhYmVsIG9ubHk6IHNvbWUgbGF5b3V0cyAoZS5nLiBpbWFnZSBsaXN0IGl0ZW1zKSBhbHNvIHB1dFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZSBvbiB0aGUgc3Vycm91bmRpbmcgPGxpPiwgd2hpY2ggd291bGQgb3RoZXJ3aXNlXHJcbiAgICAgICAgICAgICAgICAvLyBtYXRjaCB0b28gYW5kIGR1cGxpY2F0ZSB0aGUgcHJpY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgbGFiZWxbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl0sIG9wdGlvbltkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRvbid0IHNob3cgYSBwcmljZSBmb3Igb3V0LW9mLXN0b2NrL3VuYXZhaWxhYmxlIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5oYXNDbGFzcygndW5hdmFpbGFibGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VTZWxlY3RvciA9IGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcGFyYW1zLnByaWNlV2l0aFRheCAmJiAhcGFyYW1zLnByaWNlV2l0aG91dFRheCkge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKHByaWNlU2VsZWN0b3IpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnLCAkdmFsdWUudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLnRleHQoYCR7JHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpfSAke3ByaWNlVGV4dH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZGF0YSgncHJpY2VIdG1sJywgcHJpY2VIdG1sKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmZpbmQocHJpY2VTZWxlY3RvcikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHBsYWNlaG9sZGVyID0gJHZhbHVlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLXBsYWNlaG9sZGVyXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkcGxhY2Vob2xkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS5hcHBlbmQoJHByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyBzdWJ0b3RhbCBjYWxjdWxhdGVkIGZyb20gYWxsIHNlbGVjdGVkIG9wdGlvbnMgZm9yIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICBpZiAoIWlnbm9yZVVwZGF0ZVN1YnRvdGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvblN1YnRvdGFsKCRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBwcmV2LCBzZXR0aW5ncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheSBzdWJ0b3RhbCBmb3IgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbFxyXG4gICAgICogQHBhcmFtIHt7XHJcbiAgICAgKiAgIHByaWNlc1dpdGhUYXg6IHtcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IHwgbnVsbCxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgcHJpY2VzV2l0aG91dFRheDoge1xyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IHwgbnVsbCxcclxuICAgICAqIH19IHByb2R1Y3RcclxuICAgICAqIEBwYXJhbSB7eyB0YXg6IHsgcGRwOiBudW1iZXIgfSB9fSBzZXR0aW5nc1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgc2hvd09wdGlvblN1YnRvdGFsKCRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBwcm9kdWN0LCBzZXR0aW5ncykge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHR4dFN1YnRvdGFsOiB0aGlzLmNvbnRleHQudHh0U3VidG90YWwsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiAnJyxcclxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6ICcnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChwcm9kdWN0LnByaWNlc1dpdGhUYXg/LnByaWNlIHx8IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheD8ucHJpY2UpIHtcclxuICAgICAgICAgICAgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdFWCcgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6IHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXg6IHRoaXMuZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgPiBwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUgPyBwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSA/IHRoaXMuZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSkgOiAnJyxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4VmFsdWU6IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IHRoaXMuZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWU6IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgPiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUgPyBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheDogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSA/IHRoaXMuZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSkgOiAnJyxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdWJ0b3RhbEh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsU3VidG90YWwuaHRtbChzdWJ0b3RhbEh0bWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBzdW1tYXJ5IG9mIHNlbGVjdGVkIG9wdGlvbnMgYmVmb3JlIGFkZGluZyB0byBjYXJ0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5XHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VidG90YWxcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxUaXRsZVxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRhZGRUb0NhcnRXcmFwcGVyXHJcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwcmVsb2FkZXJcclxuICAgICAqL1xyXG4gICAgc2hvd1N1bW1hcnkoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSwgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsICRtb2RpZmllcnNNb2RhbFRpdGxlLCAkYWRkVG9DYXJ0V3JhcHBlciwgZm9ybURhdGEsIHByZWxvYWRlciA9IGZhbHNlKSB7XHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuaHRtbCh0aGlzLmNvbnRleHQudHh0UmV2aWV3U2VsZWN0aW9ucyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcclxuICAgICAgICBjb25zdCBzdWJ0b3RhbEh0bWwgPSAhcHJlbG9hZGVyXHJcbiAgICAgICAgICAgID8gJG1vZGlmaWVyc01vZGFsU3VidG90YWwuaHRtbCgpXHJcbiAgICAgICAgICAgIDogbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgeyBwcmVsb2FkZXIgfSwgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICBjb25zdCAkc3VidG90YWwgPSAkKHN1YnRvdGFsSHRtbCkuYXR0cignZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29tcGxldGUtc3VidG90YWwnLCAnJyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXlTdHIgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW2RheV1gKTtcclxuICAgICAgICAgICAgY29uc3QgbW9udGhTdHIgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW21vbnRoXWApO1xyXG4gICAgICAgICAgICBjb25zdCB5ZWFyU3RyID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVt5ZWFyXWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRheVN0ciB8fCBtb250aFN0ciB8fCB5ZWFyU3RyKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5kaXNwbGF5X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKGAke3llYXJTdHJ9LSR7bW9udGhTdHJ9LSR7ZGF5U3RyfWApLnRvTG9jYWxlRGF0ZVN0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlOiBgJHt5ZWFyU3RyfS0ke21vbnRoU3RyfS0ke2RheVN0cn1gLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlU3RyID0gZm9ybURhdGEuZ2V0QWxsKGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XWApLnNsaWNlKC0xKVswXTtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZVN0ciB8fCB2YWx1ZVN0ciA9PT0gJzAnKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWVTdHIgaW5zdGFuY2VvZiBGaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVTdHIubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5kaXNwbGF5X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVN0ci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gdmFsdWVTdHIgPyBOdW1iZXIodmFsdWVTdHIpIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgaWYgaXQgaXMgY2hlY2tib3ggYW5kIG5vdCBjaGVja2VkXHJcbiAgICAgICAgICAgIGlmIChvcHRpb24ubm9WYWx1ZSAmJiBvcHRpb24ubm9WYWx1ZSA9PT0gdmFsdWVJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVMYWJlbCA9IG9wdGlvbi52YWx1ZXM/LmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHZhbHVlSWQpPy5sYWJlbFxyXG4gICAgICAgICAgICAgICAgfHwgKG9wdGlvbi52YWx1ZSA9PT0gdmFsdWVJZCA/IG9wdGlvbi5sYWJlbCA6IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcmljZUh0bWwgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkPVwiJHtvcHRpb24uaWR9LSR7dmFsdWVJZH1cIl1gKVxyXG4gICAgICAgICAgICAgICAgLmZpcnN0KCkuY2xvbmUoKS5yZW1vdmVBdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkJylbMF0/Lm91dGVySFRNTDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsUHJpY2VIdG1sID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdIG9wdGlvblt2YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKS5kYXRhKCdwcmljZUh0bWwnKTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZGlzcGxheV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlTGFiZWwgfHwgdmFsdWVTdHIsXHJcbiAgICAgICAgICAgICAgICBwcmljZUh0bWw6IHByaWNlSHRtbCB8fCBvcHRpb25FbFByaWNlSHRtbCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1bW1hcnlIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VtbWFyeVRlbXBsYXRlLCB7IG9wdGlvbnMgfSwgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5Lmh0bWwoc3VtbWFyeUh0bWwpO1xyXG5cclxuICAgICAgICAvLyBJbnNlcnQgc3VidG90YWwgdG8gdG8gYWRkIHRvIGNhcnQgd3JhcHBlciBhbmQgc2hvdyBpdFxyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZS1zdWJ0b3RhbF0nKS5yZW1vdmUoKTtcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5maW5kKHRoaXMuYWRkVG9DYXJ0V3JhcHBlclNlbGVjdG9yKS5wcmVwZW5kKCRzdWJ0b3RhbCk7XHJcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhLnByaWNlXVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhLnByaWNlLndpdGhvdXRfdGF4XVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uud2l0aG91dF90YXguY3VycmVuY3lcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnRheF9sYWJlbFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheC52YWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheC5jdXJyZW5jeVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhLnByaWNlLndpdGhfdGF4XVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uud2l0aF90YXguZm9ybWF0dGVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uud2l0aF90YXguY3VycmVuY3lcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4XVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXgudmFsdWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXguY3VycmVuY3lcclxuICAgICAqL1xyXG4gICAgdXBkYXRlTW9kaWZpZXJzU3VidG90YWwoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XHJcblxyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHR4dFN1YnRvdGFsOiB0aGlzLmNvbnRleHQudHh0U3VidG90YWwsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiAnJyxcclxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6ICcnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnByaWNlKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgIC4uLihkYXRhLnByaWNlLndpdGhfdGF4ID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheDogZGF0YS5wcmljZS53aXRoX3RheC5mb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgLi4uKGRhdGEucHJpY2Uud2l0aG91dF90YXggPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4VmFsdWU6IGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiBkYXRhLnByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdWJ0b3RhbEh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsU3VidG90YWwuaHRtbChzdWJ0b3RhbEh0bWwpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxuICogUGFyc2VzIGFuIElTTyBkYXRlLXRpbWUgc3RyaW5nIGFuZCBleHRyYWN0cyB0aGUgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIGRhdGUtdGltZSBzdHJpbmcgdG8gcGFyc2UuXG4gKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBleHRyYWN0ZWQgY29tcG9uZW50cywgb3IgYG51bGxgIGlmIHRoZSBmb3JtYXQgaXMgaW52YWxpZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZVRpbWVTdHJpbmcoc3RyKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXlxccyooPzooPzooXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KSl8KD86KFxcZHsyfSktKFxcZHsyfSkpKT8oPzpbVFxcc10pPyg/OihcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0pKD86XFwuXFxkKyk/fChcXGR7Mn0pOihcXGR7Mn0pfChcXGR7Mn0pKT9cXHMqKD86WnwoWystXSkoXFxkezEsMn0pKD86Oj8oXFxkezJ9KSk/KT9cXHMqJC87XG5cbiAgICBjb25zdCBtYXRjaCA9IHN0ci50cmltKCkubWF0Y2gocmVnZXgpO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7IC8vIEludmFsaWQgZm9ybWF0XG4gICAgfVxuXG4gICAgY29uc3QgW1xuICAgICAgICAsXG4gICAgICAgIHllYXIsIG1vbnRoLCBkYXksIC8vIFsxXSwgWzJdLCBbM11cbiAgICAgICAgc2hvcnRNb250aCwgc2hvcnREYXksIC8vIFs0XSwgWzVdXG4gICAgICAgIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCAvLyBbNl0sIFs3XSwgWzhdXG4gICAgICAgIHNob3J0SG91ciwgc2hvcnRNaW51dGUsIC8vIFs5XSwgWzEwXVxuICAgICAgICBzaW5nbGVUaW1lQ29tcG9uZW50LCAvLyBbMTFdXG4gICAgICAgIHR6U2lnbiwgdHpIb3VyT2Zmc2V0LCB0ek1pbnV0ZU9mZnNldCwgLy8gWzEyXSwgWzEzXSwgWzE0XVxuICAgIF0gPSBtYXRjaDtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgLy8gRGF0ZSBjb21wb25lbnRzXG4gICAgaWYgKHllYXIgJiYgbW9udGggJiYgZGF5KSB7XG4gICAgICAgIHJlc3VsdC55ZWFyID0gcGFyc2VJbnQoeWVhciwgMTApO1xuICAgICAgICByZXN1bHQubW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xuICAgICAgICByZXN1bHQuZGF5ID0gcGFyc2VJbnQoZGF5LCAxMCk7XG4gICAgfSBlbHNlIGlmIChzaG9ydE1vbnRoICYmIHNob3J0RGF5KSB7XG4gICAgICAgIHJlc3VsdC5tb250aCA9IHBhcnNlSW50KHNob3J0TW9udGgsIDEwKTtcbiAgICAgICAgcmVzdWx0LmRheSA9IHBhcnNlSW50KHNob3J0RGF5LCAxMCk7XG4gICAgfVxuXG4gICAgLy8gVGltZSBjb21wb25lbnRzXG4gICAgaWYgKGhvdXIgIT09IHVuZGVmaW5lZCAmJiBtaW51dGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KGhvdXIsIDEwKTtcbiAgICAgICAgcmVzdWx0Lm1pbnV0ZSA9IHBhcnNlSW50KG1pbnV0ZSwgMTApO1xuICAgICAgICBpZiAoc2Vjb25kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zZWNvbmQgPSBwYXJzZUludChzZWNvbmQsIDEwKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hvcnRIb3VyICE9PSB1bmRlZmluZWQgJiYgc2hvcnRNaW51dGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KHNob3J0SG91ciwgMTApO1xuICAgICAgICByZXN1bHQubWludXRlID0gcGFyc2VJbnQoc2hvcnRNaW51dGUsIDEwKTtcbiAgICB9IGVsc2UgaWYgKHNpbmdsZVRpbWVDb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KHNpbmdsZVRpbWVDb21wb25lbnQsIDEwKTtcbiAgICB9XG5cbiAgICAvLyBUaW1lem9uZVxuICAgIGlmICh0elNpZ24gJiYgdHpIb3VyT2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHNpZ24gPSB0elNpZ24gPT09ICcrJyA/IDEgOiAtMTtcbiAgICAgICAgY29uc3QgdHpIb3VyID0gcGFyc2VJbnQodHpIb3VyT2Zmc2V0LCAxMCk7XG4gICAgICAgIGNvbnN0IHR6TWludXRlID0gdHpNaW51dGVPZmZzZXQgPyBwYXJzZUludCh0ek1pbnV0ZU9mZnNldCwgMTApIDogMDtcbiAgICAgICAgcmVzdWx0LnRpbWV6b25lID0gc2lnbiAqICh0ekhvdXIgKyB0ek1pbnV0ZSAvIDYwKTtcbiAgICB9IGVsc2UgaWYgKHN0ci5pbmNsdWRlcygnWicpKSB7XG4gICAgICAgIHJlc3VsdC50aW1lem9uZSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRhdGUtdGltZSBzdHJpbmcgaW50byBhIERhdGUgb2JqZWN0IGFkanVzdGVkIGZvciBjb3VudGRvd24gcHVycG9zZXMuXG4gKlxuICogLSBJZiB0aGUgZGF0ZS10aW1lIHN0cmluZyBkb2VzIG5vdCBpbmNsdWRlIGEgeWVhciwgbW9udGgsIG9yIGRheSwgaXQgaXMgdHJlYXRlZCBhcyBhIGRhaWx5IGNvdW50ZG93bi5cbiAqICAgVGhlIGZ1bmN0aW9uIHdpbGwgc2V0IHRoZSBkYXRlIHRvIHRvZGF5IG9yIHJvbGwgb3ZlciB0byB0aGUgbmV4dCBkYXkgaWYgdGhlIHRpbWUgaGFzIGFscmVhZHkgcGFzc2VkLlxuICogLSBJZiB0aGUgZGF0ZS10aW1lIHN0cmluZyBkb2VzIG5vdCBpbmNsdWRlIGFuIGhvdXIsIG1pbnV0ZSwgb3Igc2Vjb25kLCB0aGV5IGRlZmF1bHQgdG8gMC5cbiAqIC0gVGhlIGZ1bmN0aW9uIGFkanVzdHMgZm9yIHRoZSBzcGVjaWZpZWQgdGltZXpvbmUgb2Zmc2V0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgZGF0ZS10aW1lIHN0cmluZyB0byBwYXJzZS5cbiAqIEByZXR1cm5zIHtEYXRlfHVuZGVmaW5lZH0gQSBEYXRlIG9iamVjdCB1c2VkIGZvciB0aGUgY291bnRkb3duLCBvciBgdW5kZWZpbmVkYCBpZiBwYXJzaW5nIGZhaWxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb3VudGRvd25EYXRlKHN0cikge1xuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBwYXJzZURhdGVUaW1lU3RyaW5nKHN0cik7XG4gICAgaWYgKCFwYXJzZWREYXRlKSByZXR1cm47XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbiAgICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCB0aW1lem9uZSB9ID0gcGFyc2VkRGF0ZTtcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgeSA9IHllYXIgPz8gbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbSA9IG1vbnRoID8/IChub3cuZ2V0TW9udGgoKSArIDEpO1xuICAgIGNvbnN0IGQgPSBkYXkgPz8gbm93LmdldERhdGUoKTtcbiAgICBjb25zdCBoID0gaG91ciB8fCAwO1xuICAgIGNvbnN0IG1pbiA9IG1pbnV0ZSB8fCAwO1xuICAgIGNvbnN0IHNlYyA9IHNlY29uZCB8fCAwO1xuXG4gICAgbGV0IGRhdGU7XG5cbiAgICBpZiAodGltZXpvbmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB1dGNNaWxsaXMgPSBEYXRlLlVUQyh5LCBtIC0gMSwgZCwgaCwgbWluLCBzZWMpIC0gKHRpbWV6b25lICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICBkYXRlID0gbmV3IERhdGUodXRjTWlsbGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKHllYXIpIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgICAgIGlmIChtb250aCkgZGF0ZS5zZXRNb250aChtb250aCAtIDEpO1xuICAgICAgICBpZiAoZGF5KSBkYXRlLnNldERhdGUoZGF5KTtcbiAgICAgICAgZGF0ZS5zZXRIb3VycyhoKTtcbiAgICAgICAgZGF0ZS5zZXRNaW51dGVzKG1pbik7XG4gICAgICAgIGRhdGUuc2V0U2Vjb25kcyhzZWMpO1xuICAgIH1cblxuICAgIGlmICgheWVhciAmJiAhbW9udGggJiYgIWRheSkge1xuICAgICAgICAvLyBmb3IgZGFpbHkgY291bnRkb3duLCBhZGQgMSBkYXkgaWYgZGF0ZSBpcyBpbiB0aGUgcGFzdFxuICAgICAgICBpZiAoZGF0ZSA8IG5vdykge1xuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbn1cblxuLyoqXG4gKiAqKlNhbGVDb3VudGRvd24gU2luZ2xldG9uIE9iamVjdCoqXG4gKlxuICogTWFuYWdlcyBjb3VudGRvd24gdGltZXJzIGZvciBzYWxlcyBvciBwcm9tb3Rpb25hbCBldmVudHMgb24geW91ciB3ZWJzaXRlLlxuICogSXQgaGFuZGxlcyBtdWx0aXBsZSBjb3VudGRvd24gZWxlbWVudHMsIHVwZGF0ZXMgdGhlbSBpbiByZWFsLXRpbWUsIGFuZCBtYW5hZ2VzIHZpc2liaWxpdHkgYmFzZWQgb24gdGhlIHZpZXdwb3J0LlxuICpcbiAqIC0tLVxuICpcbiAqICoqVXNhZ2U6KipcbiAqXG4gKiAqKjEuIENvbmZpZ3VyZSB0aGUgQ291bnRkb3duIChPcHRpb25hbCk6KipcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBTYWxlQ291bnRkb3duLmNvbmZpZ3VyZSh7XG4gKiAgIC8vIE9wdGlvbmFsIHNldHRpbmdzXG4gKiAgIGRhdGVEYXRhTmFtZTogJ3NhbGVDb3VudGRvd25EYXRlJywgICAgICAgLy8gRGF0YSBhdHRyaWJ1dGUgZm9yIGNvdW50ZG93biBkYXRlXG4gKiAgIGluVmlld3BvcnREYXRhTmFtZTogJ3NhbGVDb3VudGRvd25JblZpZXdwb3J0JywgLy8gRGF0YSBhdHRyaWJ1dGUgZm9yIHZpZXdwb3J0IHZpc2liaWxpdHlcbiAqICAgc2VsZWN0b3JzOiB7IC4uLiB9LFxuICogICB0ZW1wbGF0ZTogJy4uLicsICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEN1c3RvbSBIVE1MIHRlbXBsYXRlIGZvciB0aGUgY291bnRkb3duXG4gKiAgIGhpZGVDbGFzczogJ19oaWRlJywgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xhc3MgdG8gaGlkZSBlbGVtZW50c1xuICogICBzYWxlRW5kQ2xhc3M6ICdfc2FsZUVuZGVkJywgICAgICAgICAgICAgIC8vIENsYXNzIHdoZW4gc2FsZSBlbmRzXG4gKiAgIGFjdGl2ZUNsYXNzOiAnX2FjdGl2ZScsICAgICAgICAgICAgICAgICAgLy8gQ2xhc3Mgd2hlbiBjb3VudGRvd24gaXMgYWN0aXZlXG4gKiAgIHRyYW5zbGF0aW9uczoge1xuICogICAgIGVuZF9pbjogJ0VuZHMgaW4nLFxuICogICAgIGRheTogJ0RheScsXG4gKiAgICAgZGF5czogJ0RheXMnLFxuICogICAgIGhvdXI6ICdIb3VyJyxcbiAqICAgICBob3VyczogJ0hvdXJzJyxcbiAqICAgICBtaW51dGU6ICdNaW51dGUnLFxuICogICAgIG1pbnV0ZXM6ICdNaW51dGVzJyxcbiAqICAgICBzZWNvbmQ6ICdTZWNvbmQnLFxuICogICAgIHNlY29uZHM6ICdTZWNvbmRzJyxcbiAqICAgfSxcbiAqICAgdHh0U2FsZUNvdW50ZG93bkpTT046ICd7IFwidHJhbnNsYXRpb25zXCI6IHsgLi4uIH0gfScsIC8vIEpTT04gc3RyaW5nIGZvciB0cmFuc2xhdGlvbnNcbiAqIH0pO1xuICogYGBgXG4gKlxuICogKioyLiBBZGQgQ291bnRkb3duIEVsZW1lbnRzOioqXG4gKlxuICogLSAqKk9wdGlvbiAxOioqIERpcmVjdGx5IHNwZWNpZnkgdGhlIGRhdGUgd2hlbiBhZGRpbmcgdGhlIGVsZW1lbnQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIGNvbnN0ICRlbCA9ICQoJyNjb3VudGRvd24tZWxlbWVudCcpO1xuICogICBjb25zdCBkYXRlID0gbmV3IERhdGUoJzIwMjMtMTItMzFUMjM6NTk6NTknKTtcbiAqICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsLCBkYXRlKTtcbiAqICAgYGBgXG4gKlxuICogLSAqKk9wdGlvbiAyOioqIFNldCBkYXRhIGF0dHJpYnV0ZXMgb24gdGhlIGVsZW1lbnQgYW5kIGFkZCBpdC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgY29uc3QgJGVsID0gJCgnI2NvdW50ZG93bi1lbGVtZW50Jyk7XG4gKiAgICRlbC5kYXRhKCdzYWxlQ291bnRkb3duRGF0ZScsICcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XG4gKiAgICRlbC5kYXRhKCdzYWxlQ291bnRkb3duVHJhbnNsYXRpb25zJywgeyBlbmRfaW46ICdFbmRzIGluJywgLi4uIH0pO1xuICogICBTYWxlQ291bnRkb3duLmFkZCgkZWwpO1xuICogICBgYGBcbiAqXG4gKiAtLS1cbiAqXG4gKiAqKk5vdGVzOioqXG4gKlxuICogLSBUaGUgY291bnRkb3duIGF1dG9tYXRpY2FsbHkgdXBkYXRlcyB2aXNpYmxlIGVsZW1lbnRzIGluIHRoZSB2aWV3cG9ydC5cbiAqIC0gU3VwcG9ydHMgY3VzdG9taXphdGlvbiB0aHJvdWdoIGNvbmZpZ3VyYXRpb24gYW5kIGRhdGEgYXR0cmlidXRlcy5cbiAqIC0gSGFuZGxlcyBhdXRvbWF0aWMgc3RvcHBpbmcgd2hlbiBubyBlbGVtZW50cyByZW1haW4uXG4gKlxuICogLS0tXG4gKlxuICogKipFeGFtcGxlOioqXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogLy8gSW5pdGlhbGl6ZSBhbmQgY29uZmlndXJlXG4gKiBTYWxlQ291bnRkb3duLmNvbmZpZ3VyZSh7XG4gKiAgIHRyYW5zbGF0aW9uczoge1xuICogICAgIGVuZF9pbjogJ1NhbGUgZW5kcyBpbicsXG4gKiAgICAgLy8gT3RoZXIgdHJhbnNsYXRpb25zLi4uXG4gKiAgIH0sXG4gKiB9KTtcbiAqXG4gKiAvLyBBZGQgY291bnRkb3duIGVsZW1lbnRcbiAqIGNvbnN0ICRjb3VudGRvd24gPSAkKCcjY291bnRkb3duJyk7XG4gKiBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoJzIwMjMtMTItMzFUMjM6NTk6NTknKTtcbiAqIFNhbGVDb3VudGRvd24uYWRkKCRjb3VudGRvd24sIGVuZERhdGUpO1xuICogYGBgXG4gKi9cblxuY29uc3QgU2FsZUNvdW50ZG93biA9IHtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEB0eXBlIHtTZXQ8RWxlbWVudD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBlbGVtZW50czogbmV3IFNldCgpLFxuXG4gICAgLyoqXG4gICAgICogVGltZXIgaW50ZXJ2YWwgSURcbiAgICAgKiBAdHlwZSB7bnVtYmVyfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aW1lcjogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlXG4gICAgICogQHR5cGUge0ludGVyc2VjdGlvbk9ic2VydmVyfG51bGx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvYnNlcnZlcjogbnVsbCxcblxuICAgIC8qKlxuICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgY291bnRkb3duIGRhdGVcbiAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gICAgZGF0ZURhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkRhdGUnLFxuXG4gICAgLyoqXG4gICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgaW4gdmlld3BvcnQgdmlzaWJpbGl0eVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpblZpZXdwb3J0RGF0YU5hbWU6ICdzYWxlQ291bnRkb3duSW5WaWV3cG9ydCcsXG5cbiAgICAvKipcbiAgICAgKiBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciB0cmFuc2xhdGlvbnMgSlNPTlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0cmFuc2xhdGlvbnNEYXRhTmFtZTogJ3NhbGVDb3VudGRvd25UcmFuc2xhdGlvbnMnLFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0b3JzIGZvciBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7e2VuZExhYmVsOiBzdHJpbmcsIGRheTogc3RyaW5nLCBkYXlWYWx1ZTogc3RyaW5nLCBkYXlMYWJlbDogc3RyaW5nLCBob3VyOiBzdHJpbmcsIGhvdXJWYWx1ZTogc3RyaW5nLCBob3VyTGFiZWw6IHN0cmluZywgbWludXRlOiBzdHJpbmcsIG1pbnV0ZVZhbHVlOiBzdHJpbmcsIG1pbnV0ZUxhYmVsOiBzdHJpbmcsIHNlY29uZDogc3RyaW5nLCBzZWNvbmRWYWx1ZTogc3RyaW5nLCBzZWNvbmRMYWJlbDogc3RyaW5nfX1cbiAgICAgKi9cbiAgICBzZWxlY3RvcnM6IHtcbiAgICAgICAgZW5kTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1lbmQtbGFiZWxdJyxcbiAgICAgICAgZGF5OiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF5XScsXG4gICAgICAgIGRheVZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF5LXZhbHVlXScsXG4gICAgICAgIGRheUxhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF5LWxhYmVsXScsXG4gICAgICAgIGhvdXI6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyXScsXG4gICAgICAgIGhvdXJWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWhvdXItdmFsdWVdJyxcbiAgICAgICAgaG91ckxhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24taG91ci1sYWJlbF0nLFxuICAgICAgICBtaW51dGU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGVdJyxcbiAgICAgICAgbWludXRlVmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtdmFsdWVdJyxcbiAgICAgICAgbWludXRlTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtbGFiZWxdJyxcbiAgICAgICAgc2Vjb25kOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kXScsXG4gICAgICAgIHNlY29uZFZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLXZhbHVlXScsXG4gICAgICAgIHNlY29uZExhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLWxhYmVsXScsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIGZvciBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1iYWRnZS1wZXJjZW50XCI+PC91c2U+PC9zdmc+PC9pPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9lbmRcIiBkYXRhLXNhbGUtY291bnRkb3duLWVuZC1sYWJlbD48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX2RheVwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5PjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktbGFiZWw+PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfaG91clwiIGRhdGEtc2FsZS1jb3VudGRvd24taG91cj48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24taG91ci12YWx1ZT48L3NwYW4+PHNwYW4gY2xhc3M9XCJfbGFiZWxcIiBkYXRhLXNhbGUtY291bnRkb3duLWhvdXItbGFiZWw+PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfbWludXRlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGU+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS12YWx1ZT48L3NwYW4+PHNwYW4gY2xhc3M9XCJfbGFiZWxcIiBkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9zZWNvbmRcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZD48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgYCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgdG8gaGlkZSBlbGVtZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBoaWRlQ2xhc3M6ICdfaGlkZScsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHRvIGluZGljYXRlIHNhbGUgaGFzIGVuZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNhbGVFbmRDbGFzczogJ19zYWxlRW5kZWQnLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBhY3RpdmUgY291bnRkb3duXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFjdGl2ZUNsYXNzOiAnX2FjdGl2ZScsXG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGlvbnMgZm9yIGNvdW50ZG93biBsYWJlbHNcbiAgICAgKiBAdHlwZSB7e2VuZF9pbjogc3RyaW5nLCBkYXk6IHN0cmluZywgZGF5czogc3RyaW5nLCBob3VyOiBzdHJpbmcsIGhvdXJzOiBzdHJpbmcsIG1pbnV0ZTogc3RyaW5nLCBtaW51dGVzOiBzdHJpbmcsIHNlY29uZDogc3RyaW5nLCBzZWNvbmRzOiBzdHJpbmd9fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgIGVuZF9pbjogJ0VuZCBpbicsXG4gICAgICAgIGRheTogJ0RheScsXG4gICAgICAgIGRheXM6ICdEYXlzJyxcbiAgICAgICAgaG91cjogJ0hvdXInLFxuICAgICAgICBob3VyczogJ0hvdXJzJyxcbiAgICAgICAgbWludXRlOiAnTWludXRlJyxcbiAgICAgICAgbWludXRlczogJ01pbnV0ZXMnLFxuICAgICAgICBzZWNvbmQ6ICdTZWNvbmQnLFxuICAgICAgICBzZWNvbmRzOiAnU2Vjb25kcycsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyZSB0aGUgY291bnRkb3duIHNldHRpbmdzXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZGF0ZURhdGFOYW1lIC0gRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgY291bnRkb3duIGRhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5pblZpZXdwb3J0RGF0YU5hbWUgLSBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuc2VsZWN0b3JzIC0gU2VsZWN0b3JzIGZvciBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZW5kTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZGF5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmRheVZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmRheUxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuaG91clZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5taW51dGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMubWludXRlVmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMubWludXRlTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuc2Vjb25kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLnNlY29uZFZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLnNlY29uZExhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGVtcGxhdGUgLSBUZW1wbGF0ZSBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaGlkZUNsYXNzIC0gQ2xhc3MgbmFtZSB0byBoaWRlIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2FsZUVuZENsYXNzIC0gQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBzYWxlIGhhcyBlbmRlZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmFjdGl2ZUNsYXNzIC0gQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBhY3RpdmUgY291bnRkb3duXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMudHJhbnNsYXRpb25zIC0gVHJhbnNsYXRpb25zIGZvciBjb3VudGRvd24gbGFiZWxzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmVuZF9pblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5kYXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuZGF5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5ob3VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmhvdXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLm1pbnV0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5taW51dGVzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLnNlY29uZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5zZWNvbmRzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHh0U2FsZUNvdW50ZG93bkpTT04gLSBKU09OIHN0cmluZyBmb3IgdHJhbnNsYXRpb25zXG4gICAgICovXG4gICAgY29uZmlndXJlKHtcbiAgICAgICAgZGF0ZURhdGFOYW1lLFxuICAgICAgICBpblZpZXdwb3J0RGF0YU5hbWUsXG4gICAgICAgIHNlbGVjdG9ycyxcbiAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgIGhpZGVDbGFzcyxcbiAgICAgICAgc2FsZUVuZENsYXNzLFxuICAgICAgICBhY3RpdmVDbGFzcyxcbiAgICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgICB0eHRTYWxlQ291bnRkb3duSlNPTixcbiAgICB9ID0ge30pIHtcbiAgICAgICAgaWYgKGRhdGVEYXRhTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlRGF0YU5hbWUgPSBkYXRlRGF0YU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5WaWV3cG9ydERhdGFOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmluVmlld3BvcnREYXRhTmFtZSA9IGluVmlld3BvcnREYXRhTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RvcnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0b3JzID0geyAuLi50aGlzLnNlbGVjdG9ycywgLi4uc2VsZWN0b3JzIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoaWRlQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUNsYXNzID0gaGlkZUNsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhbGVFbmRDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5zYWxlRW5kQ2xhc3MgPSBzYWxlRW5kQ2xhc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSBhY3RpdmVDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zID0geyAuLi50aGlzLnRyYW5zbGF0aW9ucywgLi4udHJhbnNsYXRpb25zIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHh0U2FsZUNvdW50ZG93bkpTT04pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UodHh0U2FsZUNvdW50ZG93bkpTT04pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zID0gT2JqZWN0LmtleXMoanNvbi50cmFuc2xhdGlvbnMpLnJlZHVjZSgoX3RyYW5zLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvcnRLZXkgPSBrZXkuc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgICAgICAgIF90cmFuc1tzaG9ydEtleV0gPSBqc29uLnRyYW5zbGF0aW9uc1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RyYW5zO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zID0geyAuLi50aGlzLnRyYW5zbGF0aW9ucywgLi4udHJhbnMgfTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgZWxlbWVudCAmIGNvcnJlc3BvbmRpbmcgZGF0ZSB0byB0aGUgY291bnRkb3duIGNvbGxlY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuICAgICAqIEBwYXJhbSB7RGF0ZXxudWxsfSBkYXRlIC0gVGhlIGNvdW50ZG93biBkYXRlLiBJZiBub3QgcHJvdmlkZWQsIGl0IHdpbGwgYmUgZXh0cmFjdGVkIGZyb20gdGhlIGRhdGEgYXR0cmlidXRlIGBkYXRhLXNhbGUtY291bnRkb3duLWRhdGVgXG4gICAgICovXG4gICAgYWRkKCRlbCwgZGF0ZSA9IG51bGwpIHtcbiAgICAgICAgbGV0IHZhbGlkRGF0ZSA9IGRhdGUgfHwgJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUpO1xuICAgICAgICBpZiAodmFsaWREYXRlICYmIHR5cGVvZiB2YWxpZERhdGUgPT09ICdzdHJpbmcnKSB2YWxpZERhdGUgPSBwYXJzZUNvdW50ZG93bkRhdGUodmFsaWREYXRlKTtcbiAgICAgICAgaWYgKCF2YWxpZERhdGUpIHJldHVybjtcbiAgICAgICAgJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUsIHZhbGlkRGF0ZSkuaHRtbCh0aGlzLnRlbXBsYXRlKVxuICAgICAgICAgICAgLmdldCgpLmZvckVhY2goZWwgPT4gdGhpcy5lbGVtZW50cy5hZGQoZWwpKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlKCRlbCk7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZSB0aGUgZWxlbWVudCBmb3IgaW4gdmlld3BvcnQgdmlzaWJpbGl0eSBjaGVja1xuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ic2VydmUoJGVsKSB7XG4gICAgICAgIGlmICghd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICAvLyBhc3N1bWUgZWxlbWVudCBpcyBpbiB2aWV3cG9ydCBpZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAkZWwuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZSBpZiBub3QgYWxyZWFkeSBjcmVhdGVkXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICQoZW50cnkudGFyZ2V0KS5kYXRhKHRoaXMuaW5WaWV3cG9ydERhdGFOYW1lLCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0ludGVyc2VjdGluZycsIGVudHJ5LnRhcmdldCwgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHJvb3Q6IG51bGwsIC8vIERlZmF1bHRzIHRvIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLCAvLyBDYWxsYmFjayBpcyB0cmlnZ2VyZWQgd2hlbiBhbnkgcGFydCBvZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5nZXQoKS5mb3JFYWNoKGVsID0+IHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTdG9wIG9ic2VydmluZyB0aGUgZWxlbWVudFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHVub2JzZXJ2ZShlbCkge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci51bm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Vub2JzZXJ2ZScsIGVsKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyBpbiB2aWV3cG9ydCBhbmQgdmlzaWJsZVxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlzVmlzaWJsZUluVmlld3BvcnQoJGVsKSB7XG4gICAgICAgIHJldHVybiAkZWwuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSkgJiYgJGVsLmlzKCc6dmlzaWJsZScpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBzdGFydCBydW5uaW5nIGNvdW50ZG93biBldmVyeSBzZWNvbmRcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy50aW1lciAmJiB0aGlzLmVsZW1lbnRzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMucnVuKCksIDEwMDApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHN0b3AgY291bnRkb3duXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdG9wIGNvdW50ZG93bicpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBydW5uaW5nIGNvdW50ZG93biBwcm9jZXNzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAvLyBjaGVjayBhbmQgc3RvcCBpZiBlbGVtZW50IG5vIGxvbmdlciBleGlzdHMgaW4gRE9NXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoZWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5kZWxldGUoZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9ICRlbC5kYXRhKHRoaXMuZGF0ZURhdGFOYW1lKTtcblxuICAgICAgICAgICAgLy8gc3RvcCBjb3VudGRvd24gaWYgZWxlbWVudCBpcyBub3QgaW4gdmlld3BvcnQgb3Igbm90IHZpc2libGVcbiAgICAgICAgICAgIGlmICghZGF0ZSB8fCAhdGhpcy5pc1Zpc2libGVJblZpZXdwb3J0KCRlbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRlIDw9IG5vdykge1xuICAgICAgICAgICAgICAgIC8vIENvdW50IGRvd24gZGF0ZSBoYXMgcGFzc2VkXG4gICAgICAgICAgICAgICAgJGVsLmFkZENsYXNzKHRoaXMuc2FsZUVuZENsYXNzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmRlbGV0ZShlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSByZW1haW5pbmcgdGltZSAoZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gZGF0ZSAtIG5vdztcbiAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgIGNvbnN0ICRlbmRMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmVuZExhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRkYXkgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5kYXkpO1xuICAgICAgICAgICAgY29uc3QgJGRheVZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5VmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgJGRheUxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5TGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJGhvdXIgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5ob3VyKTtcbiAgICAgICAgICAgIGNvbnN0ICRob3VyVmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5ob3VyVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgJGhvdXJMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmhvdXJMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkbWludXRlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMubWludXRlKTtcbiAgICAgICAgICAgIGNvbnN0ICRtaW51dGVWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZVZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRtaW51dGVMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZUxhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWNvbmQgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5zZWNvbmQpO1xuICAgICAgICAgICAgY29uc3QgJHNlY29uZFZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgJHNlY29uZExhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kTGFiZWwpO1xuXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi4kZWwuZGF0YSh0aGlzLnRyYW5zbGF0aW9uc0RhdGFOYW1lKSB9O1xuXG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3ModGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAkZW5kTGFiZWwuaHRtbCh0cmFuc2xhdGlvbnMuZW5kX2luKTtcbiAgICAgICAgICAgICRkYXlWYWx1ZS50ZXh0KGRheXMpO1xuICAgICAgICAgICAgJGRheUxhYmVsLmh0bWwoZGF5cyA9PT0gMSA/IHRyYW5zbGF0aW9ucy5kYXkgOiB0cmFuc2xhdGlvbnMuZGF5cyk7XG4gICAgICAgICAgICAkZGF5LnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwKTtcbiAgICAgICAgICAgICRob3VyVmFsdWUudGV4dChob3Vycyk7XG4gICAgICAgICAgICAkaG91ckxhYmVsLmh0bWwoaG91cnMgPT09IDEgPyB0cmFuc2xhdGlvbnMuaG91ciA6IHRyYW5zbGF0aW9ucy5ob3Vycyk7XG4gICAgICAgICAgICAkaG91ci50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCk7XG4gICAgICAgICAgICAkbWludXRlVmFsdWUudGV4dChtaW51dGVzKTtcbiAgICAgICAgICAgICRtaW51dGVMYWJlbC5odG1sKG1pbnV0ZXMgPT09IDEgPyB0cmFuc2xhdGlvbnMubWludXRlIDogdHJhbnNsYXRpb25zLm1pbnV0ZXMpO1xuICAgICAgICAgICAgJG1pbnV0ZS50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwKTtcbiAgICAgICAgICAgICRzZWNvbmRWYWx1ZS50ZXh0KHNlY29uZHMpO1xuICAgICAgICAgICAgJHNlY29uZExhYmVsLmh0bWwoc2Vjb25kcyA9PT0gMSA/IHRyYW5zbGF0aW9ucy5zZWNvbmQgOiB0cmFuc2xhdGlvbnMuc2Vjb25kcyk7XG4gICAgICAgICAgICAkc2Vjb25kLnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwICYmIGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhbGVDb3VudGRvd247XG4iLCJleHBvcnQgY29uc3QgYXJpYUtleUNvZGVzID0ge1xuICAgIFJFVFVSTjogMTMsXG4gICAgU1BBQ0U6IDMyLFxuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpbml0UmFkaW9PcHRpb25zIH0gZnJvbSAnLi9yYWRpb09wdGlvbnMnO1xuIiwiaW1wb3J0IHsgYXJpYUtleUNvZGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBzZXRDaGVja2VkUmFkaW9JdGVtID0gKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4KSA9PiB7XG4gICAgaXRlbUNvbGxlY3Rpb24uZWFjaCgoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gJChpdGVtKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gaXRlbUlkeCkge1xuICAgICAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgZmFsc2UpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkaXRlbS5hdHRyKCdhcmlhLWNoZWNrZWQnLCB0cnVlKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgJGl0ZW0udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24gPSAobGFzdEl0ZW1JZHgsIGN1cnJlbnRJZHgpID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGN1cnJlbnRJZHggPiBsYXN0SXRlbUlkeDogcmV0dXJuIDA7XG4gICAgY2FzZSBjdXJyZW50SWR4IDwgMDogcmV0dXJuIGxhc3RJdGVtSWR4O1xuICAgIGRlZmF1bHQ6IHJldHVybiBjdXJyZW50SWR4O1xuICAgIH1cbn07XG5cbmNvbnN0IGhhbmRsZUl0ZW1LZXlEb3duID0gaXRlbUNvbGxlY3Rpb24gPT4gZSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBlO1xuICAgIGNvbnN0IGl0ZW1JZHggPSBpdGVtQ29sbGVjdGlvbi5pbmRleChlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IGxhc3RDb2xsZWN0aW9uSXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhhcmlhS2V5Q29kZXMpLmluY2x1ZGVzKGtleUNvZGUpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5MRUZUOlxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlVQOiB7XG4gICAgICAgIGNvbnN0IHByZXZJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCAtIDEpO1xuICAgICAgICBpdGVtQ29sbGVjdGlvbi5nZXQocHJldkl0ZW1JZHgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlJJR0hUOlxuICAgIGNhc2UgYXJpYUtleUNvZGVzLkRPV046IHtcbiAgICAgICAgY29uc3QgbmV4dEl0ZW1JZHggPSBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24obGFzdENvbGxlY3Rpb25JdGVtSWR4LCBpdGVtSWR4ICsgMSk7XG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChuZXh0SXRlbUlkeCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgc2V0Q2hlY2tlZFJhZGlvSXRlbShpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCArIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiBicmVhaztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoJGNvbnRhaW5lciwgaXRlbVNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgJGl0ZW1Db2xsZWN0aW9uID0gJGNvbnRhaW5lci5maW5kKGl0ZW1TZWxlY3Rvcik7XG5cbiAgICAkY29udGFpbmVyLm9uKCdrZXlkb3duJywgaXRlbVNlbGVjdG9yLCBoYW5kbGVJdGVtS2V5RG93bigkaXRlbUNvbGxlY3Rpb24pKTtcbn07XG4iLCIvLyBpbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi4vd2lzaGxpc3QnOyAvLyBwYXBhdGhlbWVzLWV2ZXZhOiBkaXNhYmxlZFxuaW1wb3J0IHsgaW5pdFJhZGlvT3B0aW9ucyB9IGZyb20gJy4vYXJpYSc7XG5cbmNvbnN0IG9wdGlvbnNUeXBlc01hcCA9IHtcbiAgICBJTlBVVF9GSUxFOiAnaW5wdXQtZmlsZScsXG4gICAgSU5QVVRfVEVYVDogJ2lucHV0LXRleHQnLFxuICAgIElOUFVUX05VTUJFUjogJ2lucHV0LW51bWJlcicsXG4gICAgSU5QVVRfQ0hFQ0tCT1g6ICdpbnB1dC1jaGVja2JveCcsXG4gICAgVEVYVEFSRUE6ICd0ZXh0YXJlYScsXG4gICAgREFURTogJ2RhdGUnLFxuICAgIFNFVF9TRUxFQ1Q6ICdzZXQtc2VsZWN0JyxcbiAgICBTRVRfUkVDVEFOR0xFOiAnc2V0LXJlY3RhbmdsZScsXG4gICAgU0VUX1JBRElPOiAnc2V0LXJhZGlvJyxcbiAgICBTV0FUQ0g6ICdzd2F0Y2gnLFxuICAgIFBST0RVQ1RfTElTVDogJ3Byb2R1Y3QtbGlzdCcsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yKGFyZURlZmF1bHRPcHRpb25zU2V0KSB7XG4gICAgcmV0dXJuIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICBpZiAoYXJlRGVmYXVsdE9wdGlvbnNTZXQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsc0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCkge1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgIC8vIFdpc2hsaXN0LmxvYWQodGhpcy5jb250ZXh0KTsgLy8gcGFwYXRoZW1lcy1ldmV2YTogZGlzYWJsZWRcbiAgICAgICAgdGhpcy5nZXRUYWJSZXF1ZXN0cygpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLmVhY2goKF9fLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICB0aGlzLl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlKHZhbHVlLCB0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUodmFyaWFudERvbU5vZGUsIHZhcmlhbnRUeXBlKSB7XG4gICAgICAgIHN3aXRjaCAodmFyaWFudFR5cGUpIHtcbiAgICAgICAgY2FzZSBvcHRpb25zVHlwZXNNYXAuU0VUX1JBRElPOlxuICAgICAgICBjYXNlIG9wdGlvbnNUeXBlc01hcC5TV0FUQ0g6IHtcbiAgICAgICAgICAgIGluaXRSYWRpb09wdGlvbnMoJCh2YXJpYW50RG9tTm9kZSksICdbdHlwZT1yYWRpb10nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvdyByYWRpbyBidXR0b25zIHRvIGdldCBkZXNlbGVjdGVkXG4gICAgICovXG4gICAgaW5pdFJhZGlvQXR0cmlidXRlcygpIHtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdIGlucHV0W3R5cGU9XCJyYWRpb1wiXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCByYWRpbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHJhZGlvID0gJChyYWRpbyk7XG5cbiAgICAgICAgICAgIC8vIE9ubHkgYmluZCB0byBjbGljayBvbmNlXG4gICAgICAgICAgICBpZiAoJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgJHJhZGlvLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRyYWRpby5kYXRhKCdzdGF0ZScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnLCAkcmFkaW8ucHJvcCgnY2hlY2tlZCcpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcbiAgICAgICAgY29uc3QgaW5TdG9ja0lkcyA9IGRhdGEuaW5fc3RvY2tfYXR0cmlidXRlcztcbiAgICAgICAgY29uc3Qgb3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlID0gdGhpcy5jb250ZXh0Lm91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZTtcbiAgICAgICAgbGV0IG91dE9mU3RvY2tNZXNzYWdlID0gZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgICAgIG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtvdXRPZlN0b2NrTWVzc2FnZX0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2V9KWA7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0QXR0cmlidXRlVmFsdWUnKSwgMTApO1xuXG5cbiAgICAgICAgICAgIGlmIChpblN0b2NrSWRzLmluZGV4T2YoYXR0cklkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGZyYWdtZW50IGlkZW50aWZpZXIgaW4gVVJMIHJlcXVlc3RpbmcgYSBzcGVjaWZpYyB0YWJcbiAgICAgKi9cbiAgICBnZXRUYWJSZXF1ZXN0cygpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyN0YWItJykgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0ICRhY3RpdmVUYWIgPSAkKCcudGFicycpLmhhcyhgW2hyZWY9JyR7d2luZG93LmxvY2F0aW9uLmhhc2h9J11gKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YWJDb250ZW50ID0gJChgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gKTtcblxuICAgICAgICAgICAgaWYgKCRhY3RpdmVUYWIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICRhY3RpdmVUYWIuZmluZCgnLnRhYicpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmhhcyhgW2hyZWY9JyR7d2luZG93LmxvY2F0aW9uLmhhc2h9J11gKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJHRhYkNvbnRlbnQuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSAkcHJvZHVjdFZpZXcgY2FuIGJlIGR5bmFtaWNhbGx5IGluc2VydGVkIHVzaW5nIHJlbmRlcl93aXRoLFxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAkc2NvcGVcbiAgICAgKi9cbiAgICBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJycFdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXNhdmVkXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2Utbm93LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRpbmNyZW1lbnRzOiAkKCcuZm9ybS1maWVsZC0taW5jcmVtZW50cyA6aW5wdXQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXG4gICAgICAgICAgICAkYWRkVG9DYXJ0Rm9ybTogJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICR3aXNobGlzdFZhcmlhdGlvbjogJCgnW2RhdGEtd2lzaGxpc3QtYWRkXSBbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScsICRzY29wZSksXG4gICAgICAgICAgICBzdG9jazoge1xuICAgICAgICAgICAgICAgICRjb250YWluZXI6ICQoJy5mb3JtLWZpZWxkLS1zdG9jaycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbZGF0YS1wcm9kdWN0LXN0b2NrXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2t1OiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC5za3UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGM6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnVwYy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbbmFtZT1xdHlcXFxcW1xcXFxdXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXG4gICAgICAgICAgICAkd2FsbGV0QnV0dG9uczogJCgnW2RhdGEtYWRkLXRvLWNhcnQtd2FsbGV0LWJ1dHRvbnNdJywgJHNjb3BlKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBwcmljaW5nIGVsZW1lbnRzIHRoYXQgd2lsbCBzaG93IHVwIG9ubHkgd2hlbiB0aGUgcHJpY2UgZXhpc3RzIGluIEFQSVxuICAgICAqIEBwYXJhbSB2aWV3TW9kZWxcbiAgICAgKi9cbiAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlVmlldyhkYXRhLCBjb250ZW50ID0gbnVsbCkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICFkYXRhLmluc3RvY2tcbiAgICAgICAgICAgID8gKGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlIHx8IHRoaXMuY29udGV4dC5vdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UpXG4gICAgICAgICAgICA6IChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xuXG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2VCb3gobWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKGRhdGEucHJpY2UgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgZGF0YS5wcmljZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS53ZWlnaHQgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2VpZ2h0Lmh0bWwoZGF0YS53ZWlnaHQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB2YXJpYXRpb25faWQgaWYgaXQgZXhpc3RzIGZvciBhZGRpbmcgdG8gd2lzaGxpc3RcbiAgICAgICAgaWYgKGRhdGEudmFyaWFudElkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdpc2hsaXN0VmFyaWF0aW9uLnZhbChkYXRhLnZhcmlhbnRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBTS1UgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLnNrdSkge1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dChkYXRhLnNrdSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFVQQyBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEudXBjKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KGRhdGEudXBjKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgc3RvY2sgdmlldyBpcyBvbiAoQ1Agc2V0dGluZ3MpXG4gICAgICAgIGlmICh2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5sZW5ndGggJiYgdHlwZW9mIGRhdGEuc3RvY2sgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RvY2sgY29udGFpbmVyIGlzIGhpZGRlbiwgc2hvd1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSk7XG4gICAgICAgIHRoaXMudXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXcoZGF0YSk7XG5cbiAgICAgICAgLy8gSWYgQnVsayBQcmljaW5nIHJlbmRlcmVkIEhUTUwgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLmJ1bGtfZGlzY291bnRfcmF0ZXMgJiYgY29udGVudCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKGNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRUb0NhcnRXcmFwcGVyID0gJCgnI2FkZC10by1jYXJ0LXdyYXBwZXInKTtcblxuICAgICAgICBpZiAoYWRkVG9DYXJ0V3JhcHBlci5pcygnOmhpZGRlbicpICYmIGRhdGEucHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgIGFkZFRvQ2FydFdyYXBwZXIuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xuICAgICAgICB0aGlzLmNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBwcmljZS5wcmljZV9yYW5nZSA/XG4gICAgICAgICAgICAgICAgYCR7cHJpY2UucHJpY2VfcmFuZ2UubWluLndpdGhfdGF4LmZvcm1hdHRlZH0gLSAke3ByaWNlLnByaWNlX3JhbmdlLm1heC53aXRoX3RheC5mb3JtYXR0ZWR9YFxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aF90YXguZm9ybWF0dGVkO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJHNwYW4uaHRtbCh1cGRhdGVkUHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBwcmljZS5wcmljZV9yYW5nZSA/XG4gICAgICAgICAgICAgICAgYCR7cHJpY2UucHJpY2VfcmFuZ2UubWluLndpdGhvdXRfdGF4LmZvcm1hdHRlZH0gLSAke3ByaWNlLnByaWNlX3JhbmdlLm1heC53aXRob3V0X3RheC5mb3JtYXR0ZWR9YFxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJHNwYW4uaHRtbCh1cGRhdGVkUHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYW4gbWVzc2FnZSBib3ggaWYgYSBtZXNzYWdlIGlzIHBhc3NlZFxuICAgICAqIEhpZGUgdGhlIGJveCBpZiB0aGUgbWVzc2FnZSBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3KGRhdGEpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICBjb25zdCBpc1ZhbGlkRm9ybSA9IHZpZXdNb2RlbC4kYWRkVG9DYXJ0Rm9ybVswXS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkoaXNWYWxpZEZvcm0gJiYgZGF0YS5wdXJjaGFzYWJsZSAmJiBkYXRhLmluc3RvY2spO1xuICAgIH1cblxuICAgIHRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KHNob3VsZFNob3cpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIGlmIChzaG91bGRTaG93KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdhbGxldEJ1dHRvbnMuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3YWxsZXRCdXR0b25zLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XG5cbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIGlzIHRoZSBzZWxlY3RlZCBvcHRpb24gaW4gYSBzZWxlY3QgZHJvcGRvd24sIHNlbGVjdCB0aGUgZmlyc3Qgb3B0aW9uIChNRVJDLTYzOSlcbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSArIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBQcm9kdWN0RGV0YWlsc0Jhc2UsIHsgb3B0aW9uQ2hhbmdlRGVjb3JhdG9yIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtYmFzZSc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSAnLi4vLi4vcGFwYXRoZW1lcy9leWV2YS9pbWFnZS1nYWxsZXJ5JzsgLy8gcGFwYXRoZW1lcy1leWV2YSBlZGl0ZWRcbmltcG9ydCBtb2RhbEZhY3RvcnksIHsgYWxlcnRNb2RhbCwgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IHsgaXNFbXB0eSwgaXNQbGFpbk9iamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7IG5vcm1hbGl6ZUZvcm1EYXRhIH0gZnJvbSAnLi91dGlscy9hcGknO1xuaW1wb3J0IHsgaXNCcm93c2VySUUsIGNvbnZlcnRJbnRvQXJyYXkgfSBmcm9tICcuL3V0aWxzL2llLWhlbHBlcnMnO1xuaW1wb3J0IGJhbm5lclV0aWxzIGZyb20gJy4vdXRpbHMvYmFubmVyLXV0aWxzJztcbmltcG9ydCBjdXJyZW5jeVNlbGVjdG9yIGZyb20gJy4uL2dsb2JhbC9jdXJyZW5jeS1zZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCRzY29wZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdIC5sb2FkaW5nT3ZlcmxheScpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeSA9IG5ldyBJbWFnZUdhbGxlcnkoJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeV0nLCB0aGlzLiRzY29wZSkpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbml0KCk7XG4gICAgICAgIHRoaXMubGlzdGVuUXVhbnRpdHlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy4kc3dhdGNoT3B0aW9uTWVzc2FnZSA9ICQoJy5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2UnKTtcbiAgICAgICAgdGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2UgPSB7fTtcbiAgICAgICAgdGhpcy5zd2F0Y2hHcm91cElkTGlzdCA9ICQoJ1tpZF49XCJzd2F0Y2hHcm91cFwiXScpLm1hcCgoXywgZ3JvdXApID0+ICQoZ3JvdXApLmF0dHIoJ2lkJykpO1xuICAgICAgICB0aGlzLnN0b3JlSW5pdE1lc3NhZ2VzRm9yU3dhdGNoZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRlU2VsZWN0b3IoKTtcblxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsICRzY29wZSk7XG5cbiAgICAgICAgaWYgKCRmb3JtWzBdLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybS5maW5kKCdpbnB1dCNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnKSxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XG4gICAgICAgIHRoaXMuYmluZFJlbmV3aW5nRGF0YVBsYW5WaXNpYmlsaXR5KCRwcm9kdWN0T3B0aW9uc0VsZW1lbnQpO1xuICAgICAgICBjb25zdCBoYXNPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5odG1sKCkudHJpbSgpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuICAgICAgICBjb25zdCAkcHJvZHVjdFN3YXRjaEdyb3VwID0gJCgnW2lkKj1cImF0dHJpYnV0ZV9zd2F0Y2hcIl0nLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0U3dhdGNoTGFiZWxzID0gJCgnLmZvcm0tb3B0aW9uLXN3YXRjaCcsICRmb3JtKTtcbiAgICAgICAgY29uc3QgcGxhY2VTd2F0Y2hMYWJlbEltYWdlID0gKF8sIGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uSW1hZ2UgPSAkKCcuZm9ybS1vcHRpb24tZXhwYW5kZWQnLCAkKGxhYmVsKSk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25JbWFnZVdpZHRoID0gJG9wdGlvbkltYWdlLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuZGVkT3B0aW9uSW1hZ2VPZmZzZXRMZWZ0ID0gNTU7XG4gICAgICAgICAgICBjb25zdCB7IHJpZ2h0IH0gPSBsYWJlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyID0gd2luZG93LnNjcmVlbi53aWR0aCAtIHJpZ2h0O1xuICAgICAgICAgICAgY29uc3Qgc2hpZnRWYWx1ZSA9IG9wdGlvbkltYWdlV2lkdGggLSBlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlcjtcblxuICAgICAgICAgICAgaWYgKGVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyIDwgKG9wdGlvbkltYWdlV2lkdGggKyBleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCkpIHtcbiAgICAgICAgICAgICAgICAkb3B0aW9uSW1hZ2UuY3NzKCdsZWZ0JywgYCR7c2hpZnRWYWx1ZSA+IDAgPyAtc2hpZnRWYWx1ZSA6IHNoaWZ0VmFsdWV9cHhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkVG9DYXJ0VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgJC5lYWNoKCRwcm9kdWN0U3dhdGNoTGFiZWxzLCBwbGFjZVN3YXRjaExhYmVsSW1hZ2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29udGV4dC5zaG93U3dhdGNoTmFtZXMpIHtcbiAgICAgICAgICAgIHRoaXMuJHN3YXRjaE9wdGlvbk1lc3NhZ2UucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0U3dhdGNoR3JvdXAub24oJ2NoYW5nZScsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoR3JvdXBFbGVtZW50ID0gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkKHRhcmdldCksICQoc3dhdGNoR3JvdXBFbGVtZW50KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJC5lYWNoKCRwcm9kdWN0U3dhdGNoR3JvdXAsIChfLCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoR3JvdXBFbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5pcygnOmNoZWNrZWQnKSkgdGhpcy5zaG93U3dhdGNoTmFtZU9uT3B0aW9uKCQoZWxlbWVudCksICQoc3dhdGNoR3JvdXBFbGVtZW50KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygkcHJvZHVjdE9wdGlvbnNFbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCAkZm9ybVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXG4gICAgICAgIC8vIG9yIGhhdmUgZGVmYXVsdCB2YXJpYW50IHByb3BlcnRpZXMgdGhhdCBjaGFuZ2UgdGhlIHZpZXdcbiAgICAgICAgaWYgKChpc0VtcHR5KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSkgfHwgaGFzRGVmYXVsdE9wdGlvbnMpICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25DaGFuZ2VDYWxsYmFjayA9IG9wdGlvbkNoYW5nZURlY29yYXRvci5jYWxsKHRoaXMsIGhhc0RlZmF1bHRPcHRpb25zKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZSgkcHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCBvcHRpb25DaGFuZ2VDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LnNob3coKTtcblxuICAgICAgICB0aGlzLnByZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3ByZXZpZXdNb2RhbCcpWzBdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQWRkVG9DYXJ0VmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gPiAuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMubnVtYmVyc09ubHkodmFsKTtcbiAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnByb2R1Y3RRdWFudGl0eUVycm9yTWVzc2FnZSxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICBzdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzKCkge1xuICAgICAgICBpZiAodGhpcy5zd2F0Y2hHcm91cElkTGlzdC5sZW5ndGggJiYgaXNFbXB0eSh0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc3dhdGNoR3JvdXBJZExpc3QuZWFjaCgoXywgc3dhdGNoR3JvdXBJZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2Vbc3dhdGNoR3JvdXBJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2Vbc3dhdGNoR3JvdXBJZF0gPSAkKGAjJHtzd2F0Y2hHcm91cElkfSB+IC5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2VgKS50ZXh0KCkudHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQoKSB7XG4gICAgICAgIGNvbnN0IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgICQuZWFjaCgkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodmFsdWUpLmlzKCc6aGlkZGVuJykgfHwgdmFsdWUuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBvcHRpb25MYWJlbC5zcGxpdCgnOicpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkID0gb3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcblxuICAgICAgICAgICAgaWYgKCh0eXBlID09PSAnaW5wdXQtZmlsZScgfHwgdHlwZSA9PT0gJ2lucHV0LXRleHQnIHx8IHR5cGUgPT09ICdpbnB1dC1udW1iZXInKSAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGV4dGFyZWEnICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2F0aXNmaWVkID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkuZXZlcnkoKHNlbGVjdCkgPT4gc2VsZWN0LnNlbGVjdGVkSW5kZXggIT09IDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzU2F0aXNmaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5tYXAoKHgpID0+IHgudmFsdWUpLmpvaW4oJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYW50c2xpc3QgPSBjb252ZXJ0SW50b0FycmF5KHZhbHVlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQgPSBpbnB0ID0+IGlucHQuZGF0YXNldC5wcm9kdWN0QXR0cmlidXRlVmFsdWUgPT09IGNoZWNrZWQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdFZhcmlhbnRzbGlzdC5maWx0ZXIobWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dClbMF07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuaW5uZXJUZXh0LnRyaW0oKSA6IGNoZWNrZWQubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3dhdGNoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5jaGlsZHJlblswXSA6IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHByb2R1Y3RWYXJpYW50ID0gdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IDAgPyBvcHRpb25zLnNvcnQoKS5qb2luKCcsICcpIDogJ3Vuc2F0aXNmaWVkJztcbiAgICAgICAgY29uc3QgdmlldyA9ICQoJy5wcm9kdWN0VmlldycpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XG4gICAgICAgICAgICBpZiAodmlldy5hdHRyKCdkYXRhLWV2ZW50LXR5cGUnKSkge1xuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlldy5maW5kKCcucHJvZHVjdFZpZXctdGl0bGUnKVswXS5pbm5lclRleHQucmVwbGFjZSgvXCIvZywgJ1xcXFwkJicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPVwiJHtwcm9kdWN0TmFtZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZFJlbmV3aW5nRGF0YVBsYW5WaXNpYmlsaXR5KCRwcm9kdWN0T3B0aW9uc0VsZW1lbnQpIHtcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vZmYoJ2NoYW5nZS5yZW5ld2luZ0RhdGFQbGFuJywgJ1tuYW1lPVwiYXR0cmlidXRlWzEzMzAzXVwiXScpO1xuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UucmVuZXdpbmdEYXRhUGxhbicsICdbbmFtZT1cImF0dHJpYnV0ZVsxMzMwM11cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoJHByb2R1Y3RPcHRpb25zRWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygkcHJvZHVjdE9wdGlvbnNFbGVtZW50KTtcbiAgICB9XG5cbiAgICB0b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCRwcm9kdWN0T3B0aW9uc0VsZW1lbnQpIHtcbiAgICAgICAgaWYgKCEkcHJvZHVjdE9wdGlvbnNFbGVtZW50IHx8ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkcmVuZXdpbmdSYWRpbyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnRcbiAgICAgICAgICAgIC5maW5kKCdbbmFtZT1cImF0dHJpYnV0ZVsxMzMwM11cIl1bdmFsdWU9XCIxNjk4XCJdJylcbiAgICAgICAgICAgIC5maXJzdCgpO1xuXG4gICAgICAgIGlmICgkcmVuZXdpbmdSYWRpby5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3VsZEhpZGVGaWVsZHMgPSAkcmVuZXdpbmdSYWRpby5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgY29uc3QgZmllbGRJZHMgPSBbMTMzMDQsIDEzMzA1LCAxMzMwNl07XG5cbiAgICAgICAgZmllbGRJZHMuZm9yRWFjaChmaWVsZElkID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke2ZpZWxkSWR9XCJdYCkuZmlyc3QoKTtcbiAgICAgICAgICAgIGlmICgkZmllbGQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hvdWxkSGlkZUZpZWxkcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUhpZGRlbk1vZGlmaWVyRmllbGQoJGZpZWxkKTtcbiAgICAgICAgICAgICAgICAkZmllbGQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLWVycm9yJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlU2hvd25Nb2RpZmllckZpZWxkKCRmaWVsZCk7XG4gICAgICAgICAgICAgICAgJGZpZWxkLmNzcygnZGlzcGxheScsICcnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNhYmxlSGlkZGVuTW9kaWZpZXJGaWVsZCgkZmllbGQpIHtcbiAgICAgICAgJGZpZWxkLmZpbmQoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSksIHNlbGVjdCwgdGV4dGFyZWEnKS5lYWNoKChfaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuXG4gICAgICAgICAgICBpZiAoISRlbC5pcygnW2RhdGEtb3JpZ2luYWwtcmVxdWlyZWRdJykpIHtcbiAgICAgICAgICAgICAgICAkZWwuYXR0cignZGF0YS1vcmlnaW5hbC1yZXF1aXJlZCcsICRlbC5wcm9wKCdyZXF1aXJlZCcpID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRlbC5wcm9wKCdyZXF1aXJlZCcsIGZhbHNlKS5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpO1xuXG4gICAgICAgICAgICBpZiAoJGVsLmlzKCc6Y2hlY2tib3gsIDpyYWRpbycpKSB7XG4gICAgICAgICAgICAgICAgJGVsLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCRlbC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAkZWwucHJvcCgnc2VsZWN0ZWRJbmRleCcsIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5hYmxlU2hvd25Nb2RpZmllckZpZWxkKCRmaWVsZCkge1xuICAgICAgICAkZmllbGQuZmluZCgnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKSwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKF9pLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCB3YXNSZXF1aXJlZCA9ICRlbC5hdHRyKCdkYXRhLW9yaWdpbmFsLXJlcXVpcmVkJykgPT09ICd0cnVlJztcblxuICAgICAgICAgICAgJGVsLnByb3AoJ3JlcXVpcmVkJywgd2FzUmVxdWlyZWQpO1xuICAgICAgICAgICAgaWYgKHdhc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwucmVtb3ZlQXR0cigncmVxdWlyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHdpbmRvdyBpcyBiZWluZyBydW4gaW5zaWRlIGFuIGlmcmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzUnVubmluZ0luSWZyYW1lKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIHByb2R1Y3Qgb3B0aW9ucyBjaGFuZ2VzXG4gICAgICpcbiAgICAgKi9cbiAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG5cbiAgICAgICAgLy8gRG8gbm90IHRyaWdnZXIgYW4gYWpheCByZXF1ZXN0IGlmIGl0J3MgYSBmaWxlIG9yIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcocHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICAgICAgYmFubmVyVXRpbHMuZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkZm9ybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGV4dCA9ICRmb3JtLnBhcmVudHMoJy5wcm9kdWN0VmlldycpLmZpbmQoJy5wcm9kdWN0Vmlldy1pbmZvJyk7XG4gICAgICAgICAgICAgICAgbW9kYWxGYWN0b3J5KCdbZGF0YS1yZXZlYWxdJywgeyAkY29udGV4dCB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ29uUHJvZHVjdE9wdGlvbnNDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGlmIHRoaXMgc2V0dGluZyBpcyBlbmFibGVkIGluIFBhZ2UgQnVpbGRlclxuICAgICAqIHNob3cgbmFtZSBmb3Igc3dhdGNoIG9wdGlvblxuICAgICAqL1xuICAgIHNob3dTd2F0Y2hOYW1lT25PcHRpb24oJHN3YXRjaCwgJHN3YXRjaEdyb3VwKSB7XG4gICAgICAgIGNvbnN0IHN3YXRjaE5hbWUgPSAkc3dhdGNoLmF0dHIoJ2FyaWEtbGFiZWwnKTtcbiAgICAgICAgY29uc3QgYWN0aXZlU3dhdGNoR3JvdXBJZCA9ICRzd2F0Y2hHcm91cC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknKTtcbiAgICAgICAgY29uc3QgJHN3YXRjaE9wdGlvbk1lc3NhZ2UgPSAkKGAjJHthY3RpdmVTd2F0Y2hHcm91cElkfSB+IC5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2VgKTtcblxuICAgICAgICAkKCdbZGF0YS1vcHRpb24tdmFsdWVdJywgJHN3YXRjaEdyb3VwKS50ZXh0KHN3YXRjaE5hbWUpO1xuICAgICAgICAkc3dhdGNoT3B0aW9uTWVzc2FnZS50ZXh0KGAke3RoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW2FjdGl2ZVN3YXRjaEdyb3VwSWRdfSAke3N3YXRjaE5hbWV9YCk7XG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJHN3YXRjaE9wdGlvbk1lc3NhZ2UsICdzdGF0dXMnLCAnYXNzZXJ0aXZlJyk7XG4gICAgfVxuXG4gICAgc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGVsZW1lbnQsIHJvbGVUeXBlLCBhcmlhTGl2ZVN0YXR1cykge1xuICAgICAgICAkZWxlbWVudC5hdHRyKHtcbiAgICAgICAgICAgIHJvbGU6IHJvbGVUeXBlLFxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IGFyaWFMaXZlU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICEhJGVsZW1lbnQucGFyZW50cygnLnF1aWNrVmlldycpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlKSB7XG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KGltYWdlKSkge1xuICAgICAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQuem9vbVNpemUgfSxcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggem9vbSBzaXplIHVzZWQgZm9yIGRhdGEtem9vbS1pbWFnZSBpblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3Qtdmlldy5odG1sXG5cbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcblxuICAgICAgICAgICAgICAgICAgICBBbHNvIG5vdGUgdGhhdCBnZXRTcmNzZXQgcmV0dXJucyBhIHNpbXBsZSBzcmMgc3RyaW5nIHdoZW4gZXhhY3RseSBvbmUgc2l6ZSBpcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YSxcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC5wcm9kdWN0U2l6ZSB9LFxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgIFNob3VsZCBtYXRjaCBmYWxsYmFjayBpbWFnZSBzaXplIHVzZWQgZm9yIHRoZSBtYWluIHByb2R1Y3QgaW1hZ2UgaW5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LXZpZXcuaHRtbFxuXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG5cbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KGltYWdlLmRhdGEpO1xuXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5zZXRBbHRlcm5hdGVJbWFnZSh7XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgICAgIHpvb21JbWFnZVVybCxcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnJlc3RvcmVJbWFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgYWN0aW9uIHdoZW4gdGhlIHNob3BwZXIgY2xpY2tzIG9uICsgLyAtIGZvciBxdWFudGl0eVxuICAgICAqXG4gICAgICovXG4gICAgbGlzdGVuUXVhbnRpdHlDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGJ1dHRvbicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9IHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQ7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1heCA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG5cbiAgICAgICAgICAgIGxldCBxdHkgPSBmb3Jtcy5udW1iZXJzT25seSgkaW5wdXQudmFsKCkpID8gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCkgOiBxdWFudGl0eU1pbjtcbiAgICAgICAgICAgIC8vIElmIGFjdGlvbiBpcyBpbmNyZW1lbnRpbmdcbiAgICAgICAgICAgIGlmICgkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJykge1xuICAgICAgICAgICAgICAgIHF0eSA9IGZvcm1zLnZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkocXR5LCBxdWFudGl0eU1heCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF0eSA+IDEpIHtcbiAgICAgICAgICAgICAgICBxdHkgPSBmb3Jtcy52YWxpZGF0ZURlY3JlYXNlQWdhaW5zdE1pbkJvdW5kYXJ5KHF0eSwgcXVhbnRpdHlNaW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB1cGRhdGUgaGlkZGVuIGlucHV0XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0LnZhbChxdHkpO1xuICAgICAgICAgICAgLy8gdXBkYXRlIHRleHRcbiAgICAgICAgICAgIHZpZXdNb2RlbC5xdWFudGl0eS4kdGV4dC50ZXh0KHF0eSk7XG4gICAgICAgICAgICAvLyBwZXJmb3JtIHZhbGlkYXRpb24gYWZ0ZXIgdXBkYXRpbmcgcHJvZHVjdCBxdWFudGl0eVxuICAgICAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFByZXZlbnQgdHJpZ2dlcmluZyBxdWFudGl0eSBjaGFuZ2Ugd2hlbiBwcmVzc2luZyBlbnRlclxuICAgICAgICB0aGlzLiRzY29wZS5vbigna2V5cHJlc3MnLCAnLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgZXZlbnQud2hpY2gsIHRoZW4gdXNlIGV2ZW50LndoaWNoLCBvdGhlcndpc2UgdXNlIGV2ZW50LmtleUNvZGVcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xuICAgICAgICAgICAgaWYgKHggPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2tleXVwJywgJy5mb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQWRkIGEgcHJvZHVjdCB0byBjYXJ0XG4gICAgICpcbiAgICAgKi9cbiAgICBhZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRCdG4gPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJChldmVudC50YXJnZXQpKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkYWRkVG9DYXJ0QnRuLnZhbCgpO1xuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcblxuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1BZGQobm9ybWFsaXplRm9ybURhdGEobmV3IEZvcm1EYXRhKGZvcm0pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbmN5U2VsZWN0b3IocmVzcG9uc2UuZGF0YS5jYXJ0X2lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xuXG4gICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGFkZFRvQ2FydEJ0bikpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRNb2RhbCgpLiRwcmVNb2RhbEZvY3VzZWRFbCA9ICRhZGRUb0NhcnRCdG47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3BlbiBwcmV2aWV3IG1vZGFsIGFuZCB1cGRhdGUgY29udGVudFxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwub3BlbigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5BcHBsZVBheVNlc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJG1vZGFsLmFkZENsYXNzKCdhcHBsZS1wYXktc3VwcG9ydGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkYWRkVG9DYXJ0QnRuKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkYWRkVG9DYXJ0QnRuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydENvbnRlbnQodGhpcy5wcmV2aWV3TW9kYWwsIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gbW9kYWwsIHJlZGlyZWN0IHRvIHRoZSBjYXJ0IHBhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8ocmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHwgdGhpcy5jb250ZXh0LnVybHMuY2FydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGFkZFRvQ2FydEJ0bi5uZXh0KCksICdzdGF0dXMnLCAncG9saXRlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhcnQgY29udGVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXJ0SXRlbUlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZVxuICAgICAqL1xuICAgIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9wcmV2aWV3JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCBvbkNvbXBsZXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmdJbklmcmFtZSgpICYmICF3aW5kb3cuaWZyYW1lU2RrKSB7XG4gICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhcnQgY29udGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RhbH0gbW9kYWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICB1cGRhdGVDYXJ0Q29udGVudChtb2RhbCwgY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLmdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxuICAgICAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCAkY2FydFF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCBtb2RhbC4kY29udGVudCk7XG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJGNhcnRRdWFudGl0eS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgJHByb21vdGlvbkJhbm5lciA9ICQoJ1tkYXRhLXByb21vdGlvbi1iYW5uZXJdJyk7XG4gICAgICAgICAgICBjb25zdCAkYmFja1RvU2hvcHBwaW5nQnRuID0gJCgnLnByZXZpZXdDYXJ0Q2hlY2tvdXQgPiBbZGF0YS1yZXZlYWwtY2xvc2VdJyk7XG4gICAgICAgICAgICBjb25zdCAkbW9kYWxDbG9zZUJ0biA9ICQoJyNwcmV2aWV3TW9kYWwgPiAubW9kYWwtY2xvc2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbm5lclVwZGF0ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RDb250YWluZXIgPSAkKCcjbWFpbi1jb250ZW50ID4gLmNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgJHByb2R1Y3RDb250YWluZXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXkgcGRwLXVwZGF0ZVwiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICQoJy5sb2FkaW5nT3ZlcmxheS5wZHAtdXBkYXRlJywgJHByb2R1Y3RDb250YWluZXIpLnNob3coKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkY2FydENvdW50ZXIuYWRkQ2xhc3MoJ2NhcnQtY291bnQtLXBvc2l0aXZlJyk7XG4gICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRwcm9tb3Rpb25CYW5uZXIubGVuZ3RoICYmICRiYWNrVG9TaG9wcHBpbmdCdG4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJGJhY2tUb1Nob3BwcGluZ0J0bi5vbignY2xpY2snLCBiYW5uZXJVcGRhdGVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAkbW9kYWxDbG9zZUJ0bi5vbignY2xpY2snLCBiYW5uZXJVcGRhdGVIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RJbWFnZShkYXRhLmltYWdlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKSB7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhSXRlbXMgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3REZXRhaWxzID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBmb3JtRGF0YUl0ZW0gb2YgZm9ybURhdGFJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZm9ybURhdGFJdGVtO1xuXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3Byb2R1Y3RfaWQnKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMucHJvZHVjdElkID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdxdHlbXScpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5xdWFudGl0eSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lLm1hdGNoKC9hdHRyaWJ1dGUvKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RPcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbklkOiBOdW1iZXIobmFtZS5tYXRjaCgvXFxkKy9nKVswXSksXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMub3B0aW9uU2VsZWN0aW9ucyA9IHByb2R1Y3REZXRhaWxzPy5vcHRpb25TZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgID8gWy4uLnByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMsIHByb2R1Y3RPcHRpb25dXG4gICAgICAgICAgICAgICAgICAgIDogW3Byb2R1Y3RPcHRpb25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ29uUHJvZHVjdFVwZGF0ZScsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHsgcHJvZHVjdERldGFpbHMgfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGVTZWxlY3RvcigpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUuZWFjaCgoaSwgc2NvcGUpID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURheXMoZGF0ZU9wdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoU2VsZWN0b3IgPSBkYXRlT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lJD1cIlttb250aF1cIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlTZWxlY3RvciA9IGRhdGVPcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWUkPVwiW2RheV1cIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyU2VsZWN0b3IgPSBkYXRlT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lJD1cIlt5ZWFyXVwiXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQobW9udGhTZWxlY3Rvci52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludCh5ZWFyU2VsZWN0b3IudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5c0luTW9udGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc05hTihtb250aCkgJiYgIU51bWJlci5pc05hTih5ZWFyKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gKCh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwKSA/IDI5IDogMjg7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiBjYXNlIDY6IGNhc2UgOTogY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gMzE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXkgPSAyOTsgZGF5IDw9IDMxOyBkYXkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkYXlTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke2RheX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheSA8PSBkYXlzSW5Nb250aCAmJiAhb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlTZWxlY3Rvci5vcHRpb25zLmFkZChuZXcgT3B0aW9uKGRheSwgZGF5KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF5ID4gZGF5c0luTW9udGggJiYgb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoc2NvcGUpLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVPcHRpb24gPSBlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPWRhdGVdJyk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF5cyhkYXRlT3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2NvcGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9ZGF0ZV0nKS5mb3JFYWNoKChkYXRlT3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF5cyhkYXRlT3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgc3RyaW5nIHZhbHVlcyBmcm9tIHRoZSBmb3JtRGF0YVxuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtID0gZm9ybURhdGEgPT4ge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAodmFsICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJlcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk2NzI5OTIvYWpheC1yZXF1ZXN0LWZhaWxzLXdoZW4tc2VuZGluZy1mb3JtZGF0YS1pbmNsdWRpbmctZW1wdHktZmlsZS1pbnB1dC1pbi1zYWZhcmlcbiAqIFNhZmFyaSBicm93c2VyIHdpdGgganF1ZXJ5IDMuMy4xIGhhcyBhbiBpc3N1ZSB1cGxvYWRpbmcgZW1wdHkgZmlsZSBwYXJhbWV0ZXJzLiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYW55IGVtcHR5IGZpbGVzIGZyb20gdGhlIGZvcm0gcGFyYW1zXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0gPSBmb3JtRGF0YSA9PiB7XG4gICAgY29uc3QgcmVzID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHZhbCBpbnN0YW5jZW9mIEZpbGUpIHx8IHZhbC5uYW1lIHx8IHZhbC5zaXplKSB7XG4gICAgICAgICAgICAgICAgcmVzLmFwcGVuZChrZXksIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBlbXB0eSBzdHJpbmcgdmFsdWVzIGFuZCBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtRGF0YVxuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplRm9ybURhdGEgPSBmb3JtRGF0YSA9PiBmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkpO1xuIiwiaW1wb3J0IHsgaXNCcm93c2VySUUgfSBmcm9tICcuL2llLWhlbHBlcnMnO1xuXG5jb25zdCBiYW5uZXJVdGlscyA9IHtcbiAgICBkaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudDogKHByb2R1Y3RBdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGlmICghcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2UgfHwgaXNCcm93c2VySUUpIHJldHVybjtcblxuICAgICAgICBsZXQgcHJpY2UgPSAwO1xuXG4gICAgICAgIGlmICghcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2UucHJpY2VfcmFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgICAgIHByaWNlID0gcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aG91dF90YXgudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgICAgIHByaWNlID0gcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2JpZ2NvbW1lcmNlLnByb2R1Y3RwcmljZWNoYW5nZScsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIGFtb3VudDogcHJpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBiYW5uZXJVdGlscztcbiIsImV4cG9ydCBjb25zdCBpc0Jyb3dzZXJJRSA9ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuXG5leHBvcnQgY29uc3QgY29udmVydEludG9BcnJheSA9IGNvbGxlY3Rpb24gPT4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29sbGVjdGlvbik7XG4iLCJpbXBvcnQgJ2Vhc3l6b29tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VHYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZ2FsbGVyeSkge1xuICAgICAgICB0aGlzLiRtYWluSW1hZ2UgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW5dJyk7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZCA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJyk7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0ge307XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SW1hZ2Vab29tKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpbkltYWdlKGltZ09iaikge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHsgLi4uaW1nT2JqIH07XG5cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgICAgICB0aGlzLnN3YXBNYWluSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBzZXRBbHRlcm5hdGVJbWFnZShpbWdPYmopIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVkSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRJbWFnZSA9IHtcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmw6IHRoaXMuJG1haW5JbWFnZS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmw6IHRoaXMuJG1haW5JbWFnZS5hdHRyKCdkYXRhLXpvb20taW1hZ2UnKSxcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6IHRoaXMuJG1haW5JbWFnZS5maW5kKCdpbWcnKS5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogdGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKGltZ09iaik7XG4gICAgfVxuXG4gICAgcmVzdG9yZUltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZSh0aGlzLnNhdmVkSW1hZ2UpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2F2ZWRJbWFnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdE5ld0ltYWdlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBpbWdPYmogPSB7XG4gICAgICAgICAgICBtYWluSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmwnKSxcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmwnKSxcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgICAgICBtYWluSW1hZ2VBbHQ6ICR0YXJnZXQuY2hpbGRyZW4oKS5maXJzdCgpLmF0dHIoJ2FsdCcpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiRzZWxlY3RhYmxlSW1hZ2VzLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzd2FwTWFpbkltYWdlKCkge1xuICAgICAgICBjb25zdCBpc0Jyb3dzZXJJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ1RyaWRlbnQnKTtcblxuICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuc3dhcChcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybCxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLiRtYWluSW1hZ2UuYXR0cih7XG4gICAgICAgICAgICAnZGF0YS16b29tLWltYWdlJzogdGhpcy5jdXJyZW50SW1hZ2Uuem9vbUltYWdlVXJsLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlTmVzdGVkLmF0dHIoe1xuICAgICAgICAgICAgYWx0OiB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VBbHQsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNCcm93c2VySUUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrU3R5bGVzSUUgPSB7XG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKCR7dGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlVXJsfSlgLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtb3JpZ2luJzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJ2NvbnRhaW4nLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy4kbWFpbkltYWdlTmVzdGVkLmNzcyhmYWxsYmFja1N0eWxlc0lFKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0ICRpbWFnZUNvbnRhaW5lciA9ICQoJy5wcm9kdWN0Vmlldy1pbWFnZScpO1xuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSAkaW1hZ2VDb250YWluZXIuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gJGltYWdlQ29udGFpbmVyLndpZHRoKCk7XG5cbiAgICAgICAgY29uc3QgJGltYWdlID0gdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLiR6b29tO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAkaW1hZ2UuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gJGltYWdlLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKGhlaWdodCA8IGNvbnRhaW5lckhlaWdodCB8fCB3aWR0aCA8IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW1hZ2Vab29tKCkge1xuICAgICAgICB0aGlzLmVhc3l6b29tID0gdGhpcy4kbWFpbkltYWdlLmVhc3lab29tKHtcbiAgICAgICAgICAgIG9uU2hvdzogKCkgPT4gdGhpcy5jaGVja0ltYWdlKCksXG4gICAgICAgICAgICBlcnJvck5vdGljZTogJycsXG4gICAgICAgICAgICBsb2FkaW5nTm90aWNlOiAnJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld0ltYWdlLmJpbmQodGhpcykpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9pbmhlcml0c0xvb3NlIiwiY29uc3RydWN0b3IiLCJfc2V0UHJvdG90eXBlT2YiLCJtdXN0YWNoZSIsImNyZWF0ZUZvY3VzVHJhcCIsInRvb2xzIiwiQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkiLCJERUZBVUxUX1NURVAiLCJJbWFnZUdhbGxlcnlNb2RhbCIsImltYWdlR2FsbGVyeSIsIiRnYWxsZXJ5IiwibW9kYWxUZW1wbGF0ZSIsIiRib2R5IiwiJCIsImNyZWF0ZU1vZGFsIiwiX3Byb3RvIiwiYmluZEV2ZW50cyIsIl90aGlzIiwiZmluZCIsIm9mZiIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRhIiwiY3VycmVudFRhcmdldCIsImltYWdlVXJsIiwiZGF0YSIsImltYWdlU3Jjc2V0Iiwiem9vbUltYWdlVXJsIiwidmlkZW9JZCIsInN0ZXAiLCJjbG9zZXN0IiwiTnVtYmVyIiwic3BsaXQiLCJvcGVuTW9kYWwiLCIkZ2FsbGVyeU1vZGFsIiwiY2xvc2VNb2RhbCIsImtleSIsImlzIiwidGFyZ2V0Iiwic2V0TWFpbkltYWdlIiwic2V0TWFpblZpZGVvIiwidG90YWxTdGVwIiwic2V0TWFpbjM2MCIsInByZXZpb3VzMzYwU3RlcCIsIm5leHQzNjBTdGVwIiwicGxheTM2MCIsInBhdXNlMzYwIiwiZGVzdHJveU1vZGFsIiwicmVtb3ZlIiwiXyRtYWluSW1hZ2VMaW5rJGdldCIsIiRtYWluSW1hZ2VMaW5rIiwiJG1haW5JbWFnZSIsImNsb25lIiwicmVtb3ZlQXR0ciIsImF0dHIiLCJtYWluSW1hZ2VMaW5rRWxlbWVudCIsImdldCIsIm91dGVySFRNTCIsIm5hbWUiLCJ0ZXh0IiwidmlkZW9zTGFiZWwiLCJpbWFnZXMzNjBMYWJlbCIsImltYWdlc0xhYmVsIiwidmlkZW9zIiwibWFwIiwibGkiLCJfJCRmaW5kJGNsb25lJGdldCIsImxpbmtFbGVtZW50IiwiaW1hZ2VzMzYwIiwiXyRlbCRnZXQiLCIkZWwiLCJpbWFnZXMiLCJmaWx0ZXIiLCJfJGEkZ2V0IiwicmVuZGVyIiwiaGlkZSIsImFwcGVuZFRvIiwiaW5pdEltYWdlWm9vbSIsImZvY3VzVHJhcCIsImVzY2FwZURlYWN0aXZhdGVzIiwicmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUiLCJhbGxvd091dHNpZGVDbGljayIsIl90aGlzMiIsIiRsYXN0QWN0aXZlRWxlbWVudCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImFkZENsYXNzIiwiJG1haW5JbWciLCJzaG93IiwicmVtb3ZlQ2xhc3MiLCJhY3RpdmF0ZSIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwiX3RoaXMzIiwiaGlkZU1haW5WaWRlbyIsImhpZGUzNjBVSSIsImRlYWN0aXZhdGUiLCJtYWluSW1hZ2VVcmwiLCJtYWluSW1hZ2VTcmNzZXQiLCJzaG93TWFpbkltYWdlIiwic2V0QWN0aXZlVGh1bWIiLCJzd2FwTWFpbkltYWdlIiwiaGlkZU1haW5JbWFnZSIsIl9pIiwiJGltYWdlQ29udGFpbmVyIiwiZWFzeXpvb20iLCJzd2FwIiwiaXNCcm93c2VySUUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmNsdWRlcyIsImZhbGxiYWNrU3R5bGVzSUUiLCJjc3MiLCJjaGVja0ltYWdlIiwiY29udGFpbmVySGVpZ2h0IiwiaGVpZ2h0IiwiY29udGFpbmVyV2lkdGgiLCJ3aWR0aCIsIiRpbWFnZSIsIiR6b29tIiwiX3RoaXM0IiwiZWFzeVpvb20iLCJvblNob3ciLCJlcnJvck5vdGljZSIsImxvYWRpbmdOb3RpY2UiLCJzaG93TWFpblZpZGVvIiwic3JjIiwic2hvdzM2MFVJIiwic3dhcE1haW4zNjAiLCJzZXQzNjBDdXJyZW50U3RlcCIsImN1cnJlbnRTdGVwIiwidG90YWwiLCJfdGhpczUiLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwzNjAiLCJzZXRJbnRlcnZhbCIsIkNhcmRJbWFnZUdhbGxlcnlNb2RhbCIsIl9JbWFnZUdhbGxlcnlNb2RhbDIiLCIkc2NvcGUiLCJfdGVtcCIsIl90aGlzNiIsIl9yZWYiLCJwcm9kdWN0SWQiLCJncmFwaFFMVG9rZW4iLCJ6b29tU2l6ZSIsInByb2R1Y3RTaXplIiwidGh1bWJTaXplIiwidHh0VmlkZW9zTGFiZWwiLCJ0eHRJbWFnZXMzNjBMYWJlbCIsInR4dEltYWdlc0xhYmVsIiwibG9hZGluZ01vZGFsVGVtcGxhdGUiLCJfcHJvdG8yIiwib3BlbkxvYWRpbmdNb2RhbCIsIl9vcGVuTG9hZGluZ01vZGFsIiwiX2NhbGxlZSIsIl9jb250ZXh0IiwibG9hZE1vZGFsIiwiX2xvYWRNb2RhbCIsIl9jYWxsZWUyIiwibWFpbkltYWdlIiwiX2NvbnRleHQyIiwiZmV0Y2hQcm9kdWN0IiwiaW1hZ2UiLCJpc0RlZmF1bHQiLCJnZXRTcmNzZXQiLCJ1cmxUZW1wbGF0ZSIsInpvb21VcmwiLCJ1cmwiLCJ0aHVtYm5haWxVcmwiLCJhbHRUZXh0IiwidmlkZW8iLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJodG1sIiwiX3RlbXAyIiwiX3RoaXM3IiwiX3JlZjIiLCJfcmVmMiRmaXJzdFZpZGVvIiwiZmlyc3RWaWRlbyIsIl9yZWYyJGZpcnN0IiwiZmlyc3QzNjAiLCJmaXJzdCIsIl9mZXRjaFByb2R1Y3QiLCJfY2FsbGVlMyIsIl90aGlzJHpvb21TaXplJHNwbGl0JCIsInpvb21XaWR0aCIsInpvb21IZWlnaHQiLCJfdGhpcyRwcm9kdWN0U2l6ZSRzcGwiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJfdGhpcyR0aHVtYlNpemUkc3BsaXQiLCJ0aHVtYldpZHRoIiwidGh1bWJIZWlnaHQiLCJyZXNwIiwiX3JlZjMiLCJfY29udGV4dDMiLCJhamF4IiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzaXRlIiwicHJvZHVjdCIsImVkZ2VzIiwiX3JlZjQiLCJub2RlIiwiX3JlZjUiLCJjdXN0b21GaWVsZHMiLCJfcmVmNiIsIl9yZWY3IiwiSW1hZ2VHYWxsZXJ5IiwiX0Nvcm5lcnN0b25lSW1hZ2VHYWxsIiwiX3RoaXM4IiwiaW1hZ2VHYWxsZXJ5TW9kYWwiLCJfcHJvdG8zIiwiZGVmYXVsdCIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsInV0aWxzIiwiQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyIsImFsZXJ0TW9kYWwiLCJzaG93QWxlcnRNb2RhbCIsIk1vZGFsRXZlbnRzIiwiZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMiLCJjdXJyZW5jeUZvcm1hdCIsIlNhbGVDb3VudGRvd24iLCJERUJVR19MT0ciLCJub3JtYWxpemVPcHRpb25TdHJpbmciLCJzIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZXF1YWxPcHRpb25TdHJpbmciLCJiIiwiYXJlQXJyYXlzRXF1YWxVbm9yZGVyZWQiLCJhcnIxIiwiYXJyMiIsIl9hcnIxIiwic2xpY2UiLCJzb3J0IiwiX2FycjIiLCJldmVyeSIsImluZGV4IiwiY2FjaGVkU2V0dGluZ3MiLCJoYW5kbGVQcm9taXNlc1dpdGhMaW1pdCIsIl94IiwiX3gyIiwiX2hhbmRsZVByb21pc2VzV2l0aExpbWl0IiwiX2NhbGxlZTkiLCJwcm9taXNlcyIsImxpbWl0IiwicmVzdWx0cyIsImV4ZWN1dGluZyIsIl9sb29wIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJfY29udGV4dDAiLCJwcm9taXNlIiwiX2NvbnRleHQ5IiwicmVzdWx0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInB1c2giLCJyYWNlIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9yZWdlbmVyYXRvclZhbHVlcyIsImFsbCIsIlByb2R1Y3REZXRhaWxzIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25jYXQiLCJtb2RpZmllcnNNb2RhbE92ZXJsYXlUZW1wbGF0ZSIsIm1vZGlmaWVyc01vZGFsVGVtcGxhdGUiLCJvcHRpb25Ub29sdGlwVGVtcGxhdGUiLCJvcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZSIsIm9wdGlvblZhbHVlVG9vbHRpcEhlYWRpbmdUZW1wbGF0ZSIsIm9wdGlvblByaWNlVGVtcGxhdGUiLCJvcHRpb25QcmljZVBsYWluVGVtcGxhdGUiLCJzdWJ0b3RhbFRlbXBsYXRlIiwic3VtbWFyeVRlbXBsYXRlIiwic2hvd1ByaWNlRnJlZSIsInNob3dQcmljZVplcm8iLCJhZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IiLCJmZXRjaE9wdGlvblByaWNlQ2FjaGUiLCJjb25zb2xlIiwibG9nIiwiX2NvbnNvbGUiLCIkZm9ybSIsIiRjaG9vc2VPcHRpb25zQnRuIiwidmFsIiwicmVmcmVzaFByb2R1Y3RNZXRhZGF0YSIsImVuYWJsZU1vZGlmaWVyc01vZGFsIiwiY3JlYXRlTW9kaWZpZXJzTW9kYWwiLCJiaW5kUHJvZHVjdEVkaXRFdmVudHMiLCJiaW5kU3RpY2t5QWRkVG9DYXJ0RXZlbnRzIiwiYmluZE1vZGFsRGVzdHJveSIsImluaXRPcHRpb25TdGVwcGVyIiwic3luY1Byb2R1Y3RDYXJkUXR5IiwiaW5pdFNhbGVDb3VudGRvd24iLCJiaW5kUmVuZXdpbmdEYXRhUGxhblZpc2liaWxpdHkiLCJyZW5kZXJJbmxpbmVPcHRpb25Ub29sdGlwcyIsInJlbmRlclNwZWNUb29sdGlwcyIsImluaXRJbmxpbmVPcHRpb25QcmljZUhpbnRzIiwicGFyc2VNZXRhZGF0YSIsInNlbGVjdG9yIiwicGFyc2UiLCJwcm9kdWN0T3B0aW9ucyIsImdldFZpZXdNb2RlbCIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTIiLCJfbGVuMiIsIl9rZXkyIiwibW9kZWwiLCIkdXBkYXRlUHJvZHVjdFdyYXBwZXIiLCJ1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyIsIiRidG4iLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJwcm9wIiwiYWRkUHJvZHVjdFRvQ2FydCIsImZvcm0iLCJlZGl0UHJvZHVjdEluQ2FydCIsImVkaXRQcm9kdWN0VG9DYXJ0IiwiX2VkaXRQcm9kdWN0VG9DYXJ0IiwiJHNhdmVCdG4iLCJvcmlnaW5hbEJ0blZhbCIsIndhaXRNZXNzYWdlIiwiZm9ybURhdGEiLCJzdWNjZXNzIiwiZmFpbHVyZSIsIml0ZW1JZCIsIm5ld1F0eSIsIl90Iiwid2luZG93IiwiRm9ybURhdGEiLCJ1bmRlZmluZWQiLCIkb3ZlcmxheSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwibmV4dCIsInJlc3BvbnNlIiwiY29udGV4dCIsImVkaXRQcm9kdWN0Q2FsbGJhY2siLCJlcnJvclRleHQiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hlY2tJc1F1aWNrVmlld0NoaWxkIiwiJHByZU1vZGFsRm9jdXNlZEVsIiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJlZGl0UHJvZHVjdFF1YW50aXR5IiwidXBkYXRlQ2FydEl0ZW1RdWFudGl0eSIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiZmFpbCIsIl94aHIiLCJfc3RhdHVzIiwiZXJyb3IiLCJfeDMiLCJfeDQiLCJyZWplY3QiLCJhcGkiLCJjYXJ0IiwiaXRlbVVwZGF0ZSIsImVyciIsIl9yZXNwb25zZSRkYXRhIiwic3RhdHVzIiwiZXJyb3JzIiwiam9pbiIsInN1Ym1pdEV2ZW50IiwiRXZlbnQiLCJoYW5kbGVTdGlja3lBZGRUb0NhcnRDbGljayIsIiRidXR0b24iLCIkc3RpY2t5UXR5Iiwic2libGluZ3MiLCIkZm9ybVF0eSIsImNoZWNrVmFsaWRpdHkiLCJpbnZhbGlkRmllbGQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiZm9jdXMiLCJyZXBvcnRWYWxpZGl0eSIsIm9uZSIsImNsb3NlZCIsImVhY2giLCJmb3JtRmllbGRFbCIsIiRmb3JtRmllbGQiLCIkZGVjIiwiJGluYyIsIiRjaGVjayIsImluaXQiLCIkcmFkaW9zIiwiJGNoZWNrZWQiLCIkZmlyc3QiLCJzZWxlY3QiLCJpbmMiLCJlcSIsIm5vdCIsImhhc0NsYXNzIiwiJHVuY2hlY2siLCIkbm9uZSIsImNhcmRRdHkiLCIkcXR5IiwicXR5IiwidHh0U2FsZUNvdW50ZG93bkpTT04iLCJlbmRfaW4iLCJjb25maWd1cmUiLCJhZGQiLCJ0b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzIiwiJHByb2R1Y3RPcHRpb25zRWwiLCIkcmVuZXdpbmdSYWRpbyIsInNob3VsZEhpZGVGaWVsZHMiLCJmaWVsZElkcyIsImZvckVhY2giLCJmaWVsZElkIiwiJGZpZWxkIiwiZGlzYWJsZUhpZGRlbk1vZGlmaWVyRmllbGQiLCJlbmFibGVTaG93bk1vZGlmaWVyRmllbGQiLCJlbCIsIm9yaWdpbmFsUmVxdWlyZWQiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVwZGF0ZVZpZXciLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGUzIiwiX2xlbjMiLCJfa2V5MyIsInVwZGF0ZVNhbGVQZXJjZW50IiwidXBkYXRlU2hpcHBpbmdDb3VudGRvd24iLCJtYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3IiwidXBkYXRlTW9kaWZpZXJzVmlldyIsIiRtb2RpZmllcnNNb2RhbE9wdGlvbnMiLCIkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCIsInNob3dPcHRpb25JZHMiLCJzdGFja2VkU2hvd09wdGlvbklkcyIsIm5vbmVTYWxlcyIsImN1c3RvbUZpZWxkTm9uZVNhbGVzIiwic2hvd09wdGlvblByaWNlcyIsInVwZGF0ZU1vZGlmaWVyc1N1YnRvdGFsIiwiX2RhdGEkcHJpY2UiLCJfZGF0YSRwcmljZTQiLCIkZGl2IiwiJHNwYW4iLCJzYWxlUGVyY2VudCIsInByaWNlIiwid2l0aG91dF90YXgiLCJfZGF0YSRwcmljZTIiLCJfZGF0YSRwcmljZTMiLCJycnBfd2l0aG91dF90YXgiLCJNYXRoIiwicm91bmQiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsIndpdGhfdGF4IiwiX2RhdGEkcHJpY2U1IiwiX2RhdGEkcHJpY2U2IiwicnJwX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCIkc2hpcHBpbmdDb3VudGRvd24iLCJ1cGRhdGVDYXJ0Q29udGVudCIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTQiLCJjbG9zZU1vZGlmaWVyc01vZGFsIiwicHJldmlld01vZGFsIiwiX2xlbjQiLCJfa2V5NCIsInNob3dQcm9kdWN0SW1hZ2UiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGU1IiwiX2xlbjUiLCJfa2V5NSIsIiRtb2RpZmllcnNNb2RhbEltZyIsIl90aGlzJGltYWdlR2FsbGVyeSRjdSIsImN1cnJlbnRJbWFnZSIsImZvcm1hdFByaWNlIiwicGx1c1N5bWJvbCIsImRpc3BsYXkiLCJjdXJyZW5jeV90b2tlbiIsImN1cnJlbmN5Iiwic3ltYm9sIiwiY3VycmVuY3lfbG9jYXRpb24iLCJzeW1ib2xQbGFjZW1lbnQiLCJkZWNpbWFsX3Rva2VuIiwiZGVjaW1hbFRva2VuIiwiZGVjaW1hbF9wbGFjZXMiLCJkZWNpbWFsUGxhY2VzIiwidGhvdXNhbmRzX3Rva2VuIiwidGhvdXNhbmRzVG9rZW4iLCJmb3JtYXR0ZWQiLCJmaW5kT3B0aW9uVmFsdWUiLCJvcHRpb25OYW1lIiwidmFsdWVOYW1lIiwiX2hpZGVJZk9wdGlvbiR2YWx1ZXMiLCJoaWRlSWZPcHRpb24iLCJkaXNwbGF5X25hbWUiLCJ2YWx1ZXMiLCJsYWJlbCIsIm9wdGlvbklkIiwiaWQiLCJ2YWx1ZUlkIiwiJGF0dHJpYnV0ZU1lc3NhZ2VXcmFwcGVyIiwiJGFkZFRvQ2FydFdyYXBwZXIiLCIkbW9kaWZpZXJzTW9kYWwiLCJ0eHRDb250aW51ZSIsInByb2R1Y3RUaXRsZSIsIiRtb2RpZmllcnNNb2RhbENvbXBsZXRlIiwiJG1vZGlmaWVyc01vZGFsQ2xvc2UiLCIkbW9kaWZpZXJzTW9kYWxDb250aW51ZSIsIiRtb2RpZmllcnNNb2RhbEJhY2siLCJhcHBlbmQiLCJnb0JhY2tTdGVwIiwiaW52YWxpZElucHV0cyIsInJlZHVjZSIsIl9pbnZhbGlkSW5wdXRzIiwidmFsaWRhdGVWYXJpYW50T3B0aW9ucyIsImluaXRNb2RpZmllcnNWaWV3Iiwib3Blbk1vZGlmaWVyc01vZGFsIiwiYmVmb3JlIiwiaWdub3JlQVBJQ2FsbCIsIl91cGRhdGVNb2RpZmllcnNWaWV3IiwiX3JlZjMkaWdub3JlQVBJQ2FsbCIsIiRtb2RpZmllcnNNb2RhbFN1bW1hcnkiLCIkbW9kaWZpZXJzTW9kYWxUaXRsZSIsIiRtb2RpZmllcnNNb2RhbEZvb3RlciIsImN1cnJlbnRPcHRpb25JZCIsImN1cnJlbnRHcm91cE5hbWUiLCJjdXJyZW50R3JvdXBPcHRpb25JZHMiLCJoaWRlT3B0aW9uSWRzIiwiaGlkZU9wdGlvblZhbHVlcyIsInRvb2x0aXBzIiwidG9vbHRpcEhlYWRpbmdzIiwib3B0aW9uUmVuYW1lcyIsIl90aGlzJHByb2R1Y3RPcHRpb25zJCIsInRpdGxlIiwiZ3JvdXBUb29sdGlwIiwiJHRvb2x0aXAiLCJlbXB0eSIsImZyb20iLCJlbnRyaWVzIiwic3RhdGUiLCJvcHRpb24iLCJoaWRlT3B0aW9uIiwiZ3JvdXBOYW1lIiwiZ3JvdXBPcHRpb25JZHMiLCJpc05vbmVSYWRpb0NoZWNrZWQiLCIkZmlsZSIsImlzRmlsZVNob3duIiwiJGRhdGUiLCJpc09wdGlvbmFsRGF0ZVNob3duIiwicmVxdWlyZWQiLCIkc2VsZWN0IiwiaXNPcHRpb25hbFNlbGVjdFNob3duIiwiJHRleHQiLCJpc09wdGlvbmFsVGV4dFNob3duIiwiZm9ybVZhbHVlIiwiRmlsZSIsImN1c3RvbUZpZWxkIiwiaGlkZUlmTWF0Y2giLCJjdXN0b21GaWVsZE1hdGNoSGlkZUlmIiwiZ3JvdXBNYXRjaCIsImN1c3RvbUZpZWxkTWF0Y2hHcm91cCIsIl9PYmplY3QkYXNzaWduIiwidG9vbHRpcE1hdGNoIiwiY3VzdG9tRmllbGRNYXRjaFRvb2x0aXAiLCJfdG9vbHRpcHMkb3B0aW9uJGlkIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZDIiLCJhc3NpZ24iLCJ0b29sdGlwIiwidmFsdWVUb29sdGlwcyIsInZhbHVlVG9vbHRpcEhlYWRpbmdzIiwiY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nIiwibmV3TmFtZSIsImN1c3RvbUZpZWxkTWF0Y2hSZW5hbWUiLCJ2YWx1ZU5vblNhbGVzIiwiY3VzdG9tRmllbGRNYXRjaE5vblNhbGUiLCJfIiwiY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCIsInNob3dPcHRpb25Ub29sdGlwcyIsInBvcHVsYXRlRGVmYXVsdE9wdGlvblZhbHVlcyIsImRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyIiwic2hvd1N1bW1hcnkiLCJfeDUiLCJfdGhpczkiLCJpbnZhbGlkIiwicG9wIiwiJG9wdGlvbiIsIl90aGlzMCIsIm1hdGNoIiwiaGlkZUlmT3B0aW9ucyIsImt2IiwiX3JlZjgiLCJ0cmltIiwiX3JlZjkiLCJ0aGVuT3B0aW9ucyIsIl9yZWYwIiwiX3JlZjEiLCJfcmVmMTAiLCJfdGhpczAkZmluZE9wdGlvblZhbHUiLCJnZXRBbGwiLCJfcmVmMTEiLCJfcmVmMTIiLCJfaGlkZU9wdGlvblZhbHVlIiwiX3JlZjEzIiwiX3RoaXMxIiwiX3RoaXMxJHByb2R1Y3RPcHRpb25zIiwiX3JlZjE0IiwiX3JlZjE1IiwiX3RoaXMxMCIsIl9tJDEkc3BsaXQkbWFwIiwiX3JlZjE2IiwiX3JlZjE3IiwiX3JlZjE4IiwiX3RoaXMxMSIsIl9tJDEkc3BsaXQkbWFwMiIsImhlYWRpbmciLCJfcmVmMTkiLCJfcmVmMjAiLCJfcmVmMjEiLCJfa3Ykc3BsaXQkbWFwIiwidmFsdWVMYWJlbCIsIl9vcHRpb24kdmFsdWVzJGZpbmQiLCJfcmVmMjIiLCJmZXRjaFNldHRpbmdzIiwiX2ZldGNoU2V0dGluZ3MiLCJjdXJyZW5jeUNvZGUiLCJhY3RpdmVfY3VycmVuY3lfY29kZSIsImRlZmF1bHRDdXJyZW5jeUNvZGUiLCJkZWZhdWx0X2N1cnJlbmN5X2NvZGUiLCJzZXR0aW5ncyIsImZldGNoT3B0aW9uUHJpY2VzIiwiX2ZldGNoT3B0aW9uUHJpY2VzIiwiX2NhbGxlZTQiLCJzaG93T3B0aW9ucyIsInNlbGVjdGVkT3B0aW9uVmFsdWVJZHMiLCJjb21ib3MiLCJjb21ib3NNZXRhIiwicHJvZHVjdHMiLCJfcHJvZHVjdHMkbWFwIiwicHJldiIsInNlbGVjdGlvbnMiLCJfY29udGV4dDQiLCJfcmVmMjMiLCJvcHRpb25FbnRpdHlJZCIsInZhbHVlRW50aXR5SWQiLCJfcmVmMjQiLCJmZXRjaE9wdGlvblByaWNlc0JhdGNoIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJzZWxlY3Rpb24iLCJwcmljZXNXaXRoVGF4IiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoIiwiX3ByZXYkcHJpY2VzV2l0aFRheCIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aDIiLCJfcHJldiRwcmljZXNXaXRoVGF4MiIsIm5vblNhbGVQcmljZVdpdGhUYXgiLCJiYXNlUHJpY2UiLCJhZGp1c3RlZFByaWNlc1dpdGhUYXgiLCJub25TYWxlUHJpY2VWYWx1ZSIsInByaWNlc1dpdGhvdXRUYXgiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGgzIiwiX3ByZXYkcHJpY2VzV2l0aG91dFRhIiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoNCIsIl9wcmV2JHByaWNlc1dpdGhvdXRUYTIiLCJub25TYWxlUHJpY2VXaXRob3V0VGF4IiwiYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4IiwiX3g2IiwiX3g3IiwiZmV0Y2hPcHRpb25QcmljZSIsIl9mZXRjaE9wdGlvblByaWNlIiwiX2NhbGxlZTUiLCJvcHRpb25WYWx1ZUlkcyIsIl95aWVsZCR0aGlzJGZldGNoT3B0aSIsIl9jb250ZXh0NSIsIl94OCIsIl9mZXRjaE9wdGlvblByaWNlc0JhdGNoIiwiX2NhbGxlZTciLCJfdGhpczEyIiwiQkFUQ0hfQ0hVTktfU0laRSIsImNhY2hlS2V5cyIsInVuY2FjaGVkSW5kZXhlcyIsImNodW5rcyIsIl9jb250ZXh0NyIsImNvbWJvIiwiY2h1bmtJbmRleGVzIiwiX2NhbGxlZTYiLCJ2YXJpYWJsZURlZnMiLCJhbGlhc0ZpZWxkcyIsIl90MiIsIl9jb250ZXh0NiIsIl9yZXNwJGRhdGEiLCJfeDkiLCJfdGhpczEzIiwiX3JlZjI2IiwiX3JlZjI2JCIsIiRsYWJlbCIsImFmdGVyIiwicHJlcGVuZCIsIl9yZWYyNyIsInZhbHVlVG9vbHRpcCIsIiR2YWx1ZSIsIl9yZWYyOCIsIl9yZWYyOSIsIl9yZWYzMCIsInZhbHVlVG9vbHRpcEhlYWRpbmciLCIkdG9vbHRpcEhlYWRpbmciLCJfdGhpczE0Iiwib3B0aW9uSWRzIiwiX2luZGV4IiwiX3JlZjMxIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZDMiLCJfdG9vbHRpcHMkb3B0aW9uJGlkNCIsInNob3dJbmxpbmVPcHRpb25Ub29sdGlwcyIsIl90aGlzMTUiLCJwcmVmaXgiLCJtYXN0ZXJUb29sdGlwcyIsInJlc29sdmVkVG9vbHRpcHMiLCJfcmVmMzIiLCJzdGFydHNXaXRoIiwic3BlY05hbWUiLCJfcmVmMzMiLCJ0b29sdGlwVGV4dCIsIiRkZCIsIl90aGlzMTYiLCJfcmVmMzQiLCJfcmVmMzQkIiwiX3JlZjM0JCR2YWx1ZVRvb2x0aXBzIiwiX3JlZjM1IiwiX3JlZjM2IiwiX3JlZjM3Iiwic2hvd25PcHRpb25zIiwiX3JlZjM4IiwiZGVmYXVsdE9wdGlvbnMiLCJfcmVmMzkiLCJwcmVmaWxsIiwic2VsZWN0ZWRfZGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsIl9yZWY0MCIsInNlbGVjdGVkIiwiY2hlY2tib3hPcHRpb25zIiwiX3JlZjQxIiwibm9WYWx1ZSIsImZpbGVPcHRpb25zIiwiX3JlZjQyIiwicGFydGlhbCIsImRhdGVPcHRpb25zIiwiX3JlZjQzIiwiZHJvcGRvd25PcHRpb25zIiwiX3JlZjQ0IiwidGV4dE9wdGlvbnMiLCJfcmVmNDUiLCJfcmVmNDYiLCJfdmFsdWVzJGZpbmQiLCJfcmVmNDciLCJfcmVmNDgiLCJjaGVja2VkIiwiX3JlZjQ5IiwicGFyYW1zIiwicHJlbG9hZGVyIiwicHJpY2VIdG1sIiwicHJpY2VUZXh0Iiwic3VidG90YWxIdG1sIiwiJHByaWNlIiwiJG9sZCIsIiRwbGFjZWhvbGRlciIsIl90aGlzJHByb2R1Y3RPcHRpb25zIiwiX3RoaXMxNyIsIl9yZWY1MCIsIl9zaG93T3B0aW9uUHJpY2VzIiwiX2NhbGxlZTgiLCJpZ25vcmVVcGRhdGVTdWJ0b3RhbCIsIl90aGlzMTgiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwkIiwic2hvd1ByaWNlIiwiX2NvbnRleHQ4IiwiX2lkIiwiX3JlZjUxIiwiYWJzIiwiX3JlZjUyIiwiX2FkanVzdGVkUHJpY2VzV2l0aFRhIiwiX2FkanVzdGVkUHJpY2VzV2l0aFRhMiIsIl9hZGp1c3RlZFByaWNlc1dpdGhvdSIsIl9hZGp1c3RlZFByaWNlc1dpdGhvdTIiLCJ0YXgiLCJwZHAiLCJwcmljZVdpdGhUYXhWYWx1ZSIsInByaWNlV2l0aFRheCIsIm5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSIsInByaWNlV2l0aG91dFRheFZhbHVlIiwicHJpY2VXaXRob3V0VGF4Iiwibm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlIiwiX25vbmVTYWxlcyRvcHRpb25JZCIsIm5vblNhbGUiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UzIiwiX2FkanVzdGVkUHJpY2VzV2l0aFRhMyIsImV4Y2hhbmdlZE5vblNhbGUiLCJleGNoYW5nZVJhdGUiLCJwcmljZVZhbHVlIiwicHJpY2VTZWxlY3RvciIsInNob3dPcHRpb25TdWJ0b3RhbCIsIl94MCIsIl94MSIsIl94MTAiLCJfeDExIiwiX3gxMiIsIl94MTMiLCJfcHJvZHVjdCRwcmljZXNXaXRoVGEiLCJfcHJvZHVjdCRwcmljZXNXaXRob3UiLCJ0eHRTdWJ0b3RhbCIsInR4dFJldmlld1NlbGVjdGlvbnMiLCJvcHRpb25zIiwiJHN1YnRvdGFsIiwiX29wdGlvbiR2YWx1ZXMiLCJfJG1vZGlmaWVyc01vZGFsT3B0aW8iLCJkYXlTdHIiLCJtb250aFN0ciIsInllYXJTdHIiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidmFsdWVTdHIiLCJfcmVmNTMiLCJvcHRpb25FbFByaWNlSHRtbCIsInN1bW1hcnlIdG1sIiwicGFyc2VEYXRlVGltZVN0cmluZyIsInN0ciIsInJlZ2V4Iiwic2hvcnRNb250aCIsInNob3J0RGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsInNob3J0SG91ciIsInNob3J0TWludXRlIiwic2luZ2xlVGltZUNvbXBvbmVudCIsInR6U2lnbiIsInR6SG91ck9mZnNldCIsInR6TWludXRlT2Zmc2V0IiwicGFyc2VJbnQiLCJzaWduIiwidHpIb3VyIiwidHpNaW51dGUiLCJ0aW1lem9uZSIsInBhcnNlQ291bnRkb3duRGF0ZSIsInBhcnNlZERhdGUiLCJub3ciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImgiLCJtaW4iLCJzZWMiLCJkYXRlIiwidXRjTWlsbGlzIiwiVVRDIiwic2V0RnVsbFllYXIiLCJzZXRNb250aCIsInNldERhdGUiLCJzZXRIb3VycyIsInNldE1pbnV0ZXMiLCJzZXRTZWNvbmRzIiwiZWxlbWVudHMiLCJTZXQiLCJ0aW1lciIsIm9ic2VydmVyIiwiZGF0ZURhdGFOYW1lIiwiaW5WaWV3cG9ydERhdGFOYW1lIiwidHJhbnNsYXRpb25zRGF0YU5hbWUiLCJzZWxlY3RvcnMiLCJlbmRMYWJlbCIsImRheVZhbHVlIiwiZGF5TGFiZWwiLCJob3VyVmFsdWUiLCJob3VyTGFiZWwiLCJtaW51dGVWYWx1ZSIsIm1pbnV0ZUxhYmVsIiwic2Vjb25kVmFsdWUiLCJzZWNvbmRMYWJlbCIsInRlbXBsYXRlIiwiaGlkZUNsYXNzIiwic2FsZUVuZENsYXNzIiwiYWN0aXZlQ2xhc3MiLCJ0cmFuc2xhdGlvbnMiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImpzb24iLCJ0cmFucyIsImtleXMiLCJfdHJhbnMiLCJzaG9ydEtleSIsInZhbGlkRGF0ZSIsIm9ic2VydmUiLCJzdGFydCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJ1bm9ic2VydmUiLCJpc1Zpc2libGVJblZpZXdwb3J0Iiwic2l6ZSIsInJ1biIsInN0b3AiLCJkaXNjb25uZWN0IiwiYm9keSIsImNvbnRhaW5zIiwiZGlmZiIsImZsb29yIiwiJGVuZExhYmVsIiwiJGRheSIsIiRkYXlWYWx1ZSIsIiRkYXlMYWJlbCIsIiRob3VyIiwiJGhvdXJWYWx1ZSIsIiRob3VyTGFiZWwiLCIkbWludXRlIiwiJG1pbnV0ZVZhbHVlIiwiJG1pbnV0ZUxhYmVsIiwiJHNlY29uZCIsIiRzZWNvbmRWYWx1ZSIsIiRzZWNvbmRMYWJlbCIsInRvZ2dsZUNsYXNzIiwiYXJpYUtleUNvZGVzIiwiUkVUVVJOIiwiU1BBQ0UiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJpbml0UmFkaW9PcHRpb25zIiwic2V0Q2hlY2tlZFJhZGlvSXRlbSIsIml0ZW1Db2xsZWN0aW9uIiwiaXRlbUlkeCIsImlkeCIsIml0ZW0iLCIkaXRlbSIsImNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbiIsImxhc3RJdGVtSWR4IiwiY3VycmVudElkeCIsImhhbmRsZUl0ZW1LZXlEb3duIiwia2V5Q29kZSIsImxhc3RDb2xsZWN0aW9uSXRlbUlkeCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZJdGVtSWR4IiwibmV4dEl0ZW1JZHgiLCIkY29udGFpbmVyIiwiaXRlbVNlbGVjdG9yIiwiJGl0ZW1Db2xsZWN0aW9uIiwib3B0aW9uc1R5cGVzTWFwIiwiSU5QVVRfRklMRSIsIklOUFVUX1RFWFQiLCJJTlBVVF9OVU1CRVIiLCJJTlBVVF9DSEVDS0JPWCIsIlRFWFRBUkVBIiwiREFURSIsIlNFVF9TRUxFQ1QiLCJTRVRfUkVDVEFOR0xFIiwiU0VUX1JBRElPIiwiU1dBVENIIiwiUFJPRFVDVF9MSVNUIiwib3B0aW9uQ2hhbmdlRGVjb3JhdG9yIiwiYXJlRGVmYXVsdE9wdGlvbnNTZXQiLCJhdHRyaWJ1dGVzRGF0YSIsImF0dHJpYnV0ZXNDb250ZW50IiwiY29udGVudCIsIlByb2R1Y3REZXRhaWxzQmFzZSIsImluaXRSYWRpb0F0dHJpYnV0ZXMiLCJnZXRUYWJSZXF1ZXN0cyIsIl9fIiwiX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUiLCJ2YXJpYW50RG9tTm9kZSIsInZhcmlhbnRUeXBlIiwicmFkaW8iLCIkcmFkaW8iLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsIiRhY3RpdmVUYWIiLCJoYXMiLCIkdGFiQ29udGVudCIsInJycFdpdGhUYXgiLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwicHJpY2VMYWJlbCIsIiR3ZWlnaHQiLCIkaW5jcmVtZW50cyIsIiRhZGRUb0NhcnQiLCIkYWRkVG9DYXJ0Rm9ybSIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGlucHV0Iiwic2t1IiwidXBjIiwicXVhbnRpdHkiLCIkYnVsa1ByaWNpbmciLCIkd2FsbGV0QnV0dG9ucyIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwidmlld01vZGVsIiwibWVzc2FnZSIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJzaG93TWVzc2FnZUJveCIsInVwZGF0ZVByaWNlVmlldyIsIndlaWdodCIsInZhcmlhbnRJZCIsInVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3IiwiYnVsa19kaXNjb3VudF9yYXRlcyIsImFkZFRvQ2FydFdyYXBwZXIiLCJ1cGRhdGVkUHJpY2UiLCJwcmljZV9yYW5nZSIsIm1heCIsInNhdmVkIiwiJG1lc3NhZ2VCb3giLCJpc1ZhbGlkRm9ybSIsInRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5Iiwic2hvdWxkU2hvdyIsImdldEF0dHJpYnV0ZVR5cGUiLCJlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJtb2RhbEZhY3RvcnkiLCJub2QiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiZm9ybXMiLCJub3JtYWxpemVGb3JtRGF0YSIsImNvbnZlcnRJbnRvQXJyYXkiLCJiYW5uZXJVdGlscyIsImN1cnJlbmN5U2VsZWN0b3IiLCJfUHJvZHVjdERldGFpbHNCYXNlIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwibGlzdGVuUXVhbnRpdHlDaGFuZ2UiLCIkc3dhdGNoT3B0aW9uTWVzc2FnZSIsInN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZSIsInN3YXRjaEdyb3VwSWRMaXN0IiwiZ3JvdXAiLCJzdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzIiwidXBkYXRlRGF0ZVNlbGVjdG9yIiwidXBkYXRlUHJvZHVjdERldGFpbHNEYXRhIiwiYWRkVG9DYXJ0VmFsaWRhdG9yIiwic3VibWl0IiwidGFwIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJoYXNEZWZhdWx0T3B0aW9ucyIsIiRwcm9kdWN0U3dhdGNoR3JvdXAiLCIkcHJvZHVjdFN3YXRjaExhYmVscyIsInBsYWNlU3dhdGNoTGFiZWxJbWFnZSIsIiRvcHRpb25JbWFnZSIsIm9wdGlvbkltYWdlV2lkdGgiLCJvdXRlcldpZHRoIiwiZXh0ZW5kZWRPcHRpb25JbWFnZU9mZnNldExlZnQiLCJfbGFiZWwkZ2V0Qm91bmRpbmdDbGkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyaWdodCIsImVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyIiwic2NyZWVuIiwic2hpZnRWYWx1ZSIsInJlZ2lzdGVyQWRkVG9DYXJ0VmFsaWRhdGlvbiIsInNob3dTd2F0Y2hOYW1lcyIsInN3YXRjaEdyb3VwRWxlbWVudCIsInBhcmVudE5vZGUiLCJzaG93U3dhdGNoTmFtZU9uT3B0aW9uIiwiZWxlbWVudCIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZCIsInNldFByb2R1Y3RWYXJpYW50IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiX2lzRW1wdHkiLCIkcHJvZHVjdElkIiwib3B0aW9uQ2hhbmdlQ2FsbGJhY2siLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsImRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50IiwidmFsaWRhdGUiLCJjYiIsIm51bWJlcnNPbmx5IiwiZXJyb3JNZXNzYWdlIiwicHJvZHVjdFF1YW50aXR5RXJyb3JNZXNzYWdlIiwic3dhdGNoR3JvdXBJZCIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJvcHRpb25MYWJlbCIsImNoaWxkcmVuIiwib3B0aW9uVGl0bGUiLCJpc1NhdGlzZmllZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRlU3RyaW5nIiwieCIsImdldFNlbGVjdGVkT3B0aW9uTGFiZWwiLCJwcm9kdWN0VmFyaWFudHNsaXN0IiwibWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCIsImlucHQiLCJkYXRhc2V0IiwicHJvZHVjdEF0dHJpYnV0ZVZhbHVlIiwibGFiZWxzIiwicHJvZHVjdFZhcmlhbnQiLCJ2aWV3IiwicHJvZHVjdE5hbWUiLCJjYXJkIiwid2FzUmVxdWlyZWQiLCJpc1J1bm5pbmdJbklmcmFtZSIsInNlbGYiLCJ0b3AiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCIkY29udGV4dCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkZXRhaWwiLCIkc3dhdGNoIiwiJHN3YXRjaEdyb3VwIiwic3dhdGNoTmFtZSIsImFjdGl2ZVN3YXRjaEdyb3VwSWQiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJyb2xlIiwiX2lzUGxhaW5PYmplY3QiLCJzZXRBbHRlcm5hdGVJbWFnZSIsInJlc3RvcmVJbWFnZSIsIiR0YXJnZXQiLCJxdWFudGl0eU1pbiIsInF1YW50aXR5TWF4IiwidmFsaWRhdGVJbmNyZWFzZUFnYWluc3RNYXhCb3VuZGFyeSIsInZhbGlkYXRlRGVjcmVhc2VBZ2FpbnN0TWluQm91bmRhcnkiLCJ3aGljaCIsIiRhZGRUb0NhcnRCdG4iLCJpdGVtQWRkIiwiY2FydF9pZCIsIm9wZW4iLCJBcHBsZVBheVNlc3Npb24iLCIkbW9kYWwiLCJjYXJ0X2l0ZW0iLCJyZWRpcmVjdFRvIiwiY2FydF91cmwiLCJ1cmxzIiwiZ2V0Q2FydENvbnRlbnQiLCJjYXJ0SXRlbUlkIiwib25Db21wbGV0ZSIsInN1Z2dlc3QiLCJjb25maWciLCJzdWdnZXN0aW9ucyIsImdldENvbnRlbnQiLCJpZnJhbWVTZGsiLCJtb2RhbCIsInVwZGF0ZUNvbnRlbnQiLCIkY2FydFF1YW50aXR5IiwiJGNvbnRlbnQiLCIkY2FydENvdW50ZXIiLCIkcHJvbW90aW9uQmFubmVyIiwiJGJhY2tUb1Nob3BwcGluZ0J0biIsIiRtb2RhbENsb3NlQnRuIiwiYmFubmVyVXBkYXRlSGFuZGxlciIsIiRwcm9kdWN0Q29udGFpbmVyIiwicmVsb2FkIiwiZm9ybURhdGFJdGVtcyIsInNlcmlhbGl6ZUFycmF5IiwicHJvZHVjdERldGFpbHMiLCJmb3JtRGF0YUl0ZW0iLCJwcm9kdWN0T3B0aW9uIiwib3B0aW9uVmFsdWUiLCJvcHRpb25TZWxlY3Rpb25zIiwic2NvcGUiLCJ1cGRhdGVEYXlzIiwiZGF0ZU9wdGlvbiIsIm1vbnRoU2VsZWN0b3IiLCJkYXlTZWxlY3RvciIsInllYXJTZWxlY3RvciIsImRheXNJbk1vbnRoIiwiaXNOYU4iLCJPcHRpb24iLCJmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtIiwicmVzIiwiX3N0ZXAkdmFsdWUiLCJmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0iLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX3N0ZXAyJHZhbHVlIiwiZXZ0IiwiYW1vdW50IiwiZG9jdW1lbnRNb2RlIiwiY29sbGVjdGlvbiIsIiRtYWluSW1hZ2VOZXN0ZWQiLCIkc2VsZWN0YWJsZUltYWdlcyIsInNldEltYWdlWm9vbSIsImltZ09iaiIsInNhdmVkSW1hZ2UiLCIkc2VsZWN0ZWRUaHVtYiIsInNlbGVjdE5ld0ltYWdlIiwibWFpbkltYWdlQWx0IiwiYWx0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=