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
      var selectedOptionValueIds, combos, combosMeta, variantIds, selectedVariantValueIds, variantBaselineIndexes, candidates, products, prev, variantBaselines, selections;
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
            combosMeta = [null]; // Variant options (those that create a SKU) only return the SKU's price when every variant option is specified
            variantIds = new Set(this.$scope.find('[data-product-attribute-state="variant_option"]').map(function (_i, el) {
              return Number($(el).attr('data-product-attribute-id'));
            }).get());
            selectedVariantValueIds = [];
            formData.entries().forEach(function (_ref25) {
              var key = _ref25[0],
                value = _ref25[1];
              var m = key.match(/^attribute\[(\d+)\]$/);
              if (m && variantIds.has(Number(m[1])) && Number(value)) {
                selectedVariantValueIds.push({
                  optionEntityId: Number(m[1]),
                  valueEntityId: Number(value)
                });
              }
            });

            // per variant option: SKU of the other selected variants + this option's first (standard) value
            variantBaselineIndexes = {};
            candidates = [];
            showOptions.forEach(function (option) {
              var values = option.values || (option.value ? [{
                id: option.value
              }] : []);
              var isVariant = variantIds.has(option.id);
              var otherVariants = isVariant ? selectedVariantValueIds.filter(function (_ref26) {
                var optionEntityId = _ref26.optionEntityId;
                return optionEntityId !== option.id;
              }) : [];
              if (isVariant && values.length > 0) {
                variantBaselineIndexes[option.id] = combos.length;
                combos.push([].concat(otherVariants, [{
                  optionEntityId: option.id,
                  valueEntityId: values[0].id
                }]));
                combosMeta.push(null);
              }
              values.forEach(function (value) {
                candidates.push({
                  combo: [].concat(selectedOptionValueIds, otherVariants, [{
                    optionEntityId: option.id,
                    valueEntityId: value.id
                  }]),
                  meta: {
                    optionId: option.id,
                    valueId: value.id
                  }
                });
              });
            });
            candidates.forEach(function (_ref27) {
              var combo = _ref27.combo,
                meta = _ref27.meta;
              combos.push(combo);
              combosMeta.push(meta);
            });
            _context4.n = 1;
            return this.fetchOptionPricesBatch(combos);
          case 1:
            products = _context4.v;
            prev = products[0];
            variantBaselines = {};
            Object.entries(variantBaselineIndexes).forEach(function (_ref28) {
              var optionId = _ref28[0],
                index = _ref28[1];
              variantBaselines[optionId] = products[index];
            });
            selections = products.map(function (product, i) {
              return combosMeta[i] ? Object.assign({}, combosMeta[i], product) : null;
            }).filter(Boolean);
            selections.forEach(function (selection) {
              // variant options need the full SKU combination, so they compare against their own baseline
              var base = variantBaselines[selection.optionId] || prev;
              if (selection.pricesWithTax) {
                var _selection$pricesWith, _base$pricesWithTax, _selection$pricesWith2, _base$pricesWithTax2;
                // calculate the non-sale price based on the previous price and the current price
                // consider all now price and regular price
                var nonSalePriceWithTax = ((_selection$pricesWith = selection.pricesWithTax) == null ? void 0 : _selection$pricesWith.price.value) - ((_base$pricesWithTax = base.pricesWithTax) == null ? void 0 : _base$pricesWithTax.price.value) || ((_selection$pricesWith2 = selection.pricesWithTax) == null ? void 0 : _selection$pricesWith2.basePrice.value) - ((_base$pricesWithTax2 = base.pricesWithTax) == null ? void 0 : _base$pricesWithTax2.basePrice.value)
                // || selection.pricesWithTax?.price.value - selection.pricesWithTax?.basePrice.value
                || null;

                // remove non-sale price if it's less than the current price
                if (nonSalePriceWithTax <= selection.pricesWithTax.price.value - base.pricesWithTax.price.value) {
                  nonSalePriceWithTax = null;
                }

                // eslint-disable-next-line no-param-reassign
                selection.adjustedPricesWithTax = {
                  basePrice: Object.assign({}, selection.pricesWithTax.basePrice, {
                    value: selection.pricesWithTax.basePrice.value - base.pricesWithTax.basePrice.value
                  }),
                  price: Object.assign({}, selection.pricesWithTax.price, {
                    value: selection.pricesWithTax.price.value - base.pricesWithTax.price.value
                  }),
                  nonSalePriceValue: nonSalePriceWithTax
                };
              }
              if (selection.pricesWithoutTax) {
                var _selection$pricesWith3, _base$pricesWithoutTa, _selection$pricesWith4, _base$pricesWithoutTa2;
                // calculate the non-sale price based on the previous price and the current price
                // consider all now price and regular price
                var nonSalePriceWithoutTax = ((_selection$pricesWith3 = selection.pricesWithoutTax) == null ? void 0 : _selection$pricesWith3.price.value) - ((_base$pricesWithoutTa = base.pricesWithoutTax) == null ? void 0 : _base$pricesWithoutTa.price.value) || ((_selection$pricesWith4 = selection.pricesWithoutTax) == null ? void 0 : _selection$pricesWith4.basePrice.value) - ((_base$pricesWithoutTa2 = base.pricesWithoutTax) == null ? void 0 : _base$pricesWithoutTa2.basePrice.value)
                // || selection.pricesWithoutTax?.price.value - selection.pricesWithoutTax?.basePrice.value
                || null;

                // remove non-sale price if it's less than the current price
                if (nonSalePriceWithoutTax <= selection.pricesWithoutTax.price.value - base.pricesWithoutTax.price.value) {
                  nonSalePriceWithoutTax = null;
                }

                // eslint-disable-next-line no-param-reassign
                selection.adjustedPricesWithoutTax = {
                  basePrice: Object.assign({}, selection.pricesWithoutTax.basePrice, {
                    value: selection.pricesWithoutTax.basePrice.value - base.pricesWithoutTax.basePrice.value
                  }),
                  price: Object.assign({}, selection.pricesWithoutTax.price, {
                    value: selection.pricesWithoutTax.price.value - base.pricesWithoutTax.price.value
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
    Object.entries(tooltips).forEach(function (_ref30) {
      var optionId = _ref30[0],
        _ref30$ = _ref30[1],
        tooltip = _ref30$.tooltip,
        valueTooltips = _ref30$.valueTooltips;
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
      Object.entries(valueTooltips).forEach(function (_ref31) {
        var valueId = _ref31[0],
          valueTooltip = _ref31[1];
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
    Object.entries(tooltipHeadings).filter(function (_ref32) {
      var optionId = _ref32[0];
      return showOptionIds.includes(Number(optionId));
    }).forEach(function (_ref33) {
      var optionId = _ref33[0],
        valueTooltipHeadings = _ref33[1];
      var $option = $modifiersModalOptions.find("[data-product-attribute-id=\"" + optionId + "\"]");
      Object.entries(valueTooltipHeadings).forEach(function (_ref34) {
        var valueId = _ref34[0],
          valueTooltipHeading = _ref34[1];
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
    this.productOptions.filter(function (_ref35) {
      var id = _ref35.id;
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
    this.customFields.forEach(function (_ref36) {
      var name = _ref36.name,
        value = _ref36.value;
      if (!name.startsWith(prefix)) {
        return;
      }
      var specName = name.slice(prefix.length).trim();
      if (specName && value) {
        resolvedTooltips[specName] = value;
      }
    });
    Object.entries(resolvedTooltips).forEach(function (_ref37) {
      var specName = _ref37[0],
        tooltipText = _ref37[1];
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
    Object.entries(tooltips).forEach(function (_ref38) {
      var optionId = _ref38[0],
        _ref38$ = _ref38[1],
        tooltip = _ref38$.tooltip,
        _ref38$$valueTooltips = _ref38$.valueTooltips,
        valueTooltips = _ref38$$valueTooltips === void 0 ? {} : _ref38$$valueTooltips;
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
      Object.entries(valueTooltips).forEach(function (_ref39) {
        var valueId = _ref39[0],
          valueTooltip = _ref39[1];
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
    Object.entries(tooltipHeadings).forEach(function (_ref40) {
      var optionId = _ref40[0],
        valueTooltipHeadings = _ref40[1];
      var $option = $productOptionsEl.find("[data-product-attribute-id=\"" + optionId + "\"]");
      if (!$option.length) {
        return;
      }
      Object.entries(valueTooltipHeadings).forEach(function (_ref41) {
        var valueId = _ref41[0],
          valueTooltipHeading = _ref41[1];
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
    var shownOptions = this.productOptions.filter(function (_ref42) {
      var id = _ref42.id;
      return showOptionIds.includes(id);
    });

    /**
     * options that has default value
     */
    var defaultOptions = shownOptions.filter(function (_ref43) {
      var prefill = _ref43.prefill,
        selected_date = _ref43.selected_date,
        values = _ref43.values;
      return prefill || selected_date && (selected_date.day || selected_date.month || selected_date.year) || (values == null ? void 0 : values.find(function (_ref44) {
        var selected = _ref44.selected;
        return selected;
      }));
    });

    /**
     * checkbox type options
     */
    var checkboxOptions = shownOptions.filter(function (_ref45) {
      var noValue = _ref45.noValue,
        value = _ref45.value;
      return noValue || value;
    });

    /**
     * file type options
     */
    var fileOptions = shownOptions.filter(function (_ref46) {
      var partial = _ref46.partial;
      return partial === 'input-file';
    });

    /**
     * date type options
     */
    var dateOptions = shownOptions.filter(function (_ref47) {
      var partial = _ref47.partial;
      return partial === 'date';
    });

    /**
     * dropdown type options
     */
    var dropdownOptions = shownOptions.filter(function (_ref48) {
      var required = _ref48.required,
        partial = _ref48.partial;
      return !required && partial === 'set-select';
    });

    /**
     * text / multiline / number options
     */
    var textOptions = shownOptions.filter(function (_ref49) {
      var partial = _ref49.partial;
      return partial === 'input-text' || partial === 'textarea' || partial === 'input-numbers';
    });
    if (showOptionIds.length > 1 || defaultOptions.length > 0 || checkboxOptions.length > 0 || fileOptions.length > 0 || dateOptions.length > 0 || dropdownOptions.length > 0 || textOptions.length > 0) {
      // show continue button
      $modifiersModalContinue.show();

      // stop auto update the modifiers view until the continue button is clicked
      this.manualUpdateModifiersView = true;

      // populate default values to the shown options
      defaultOptions.forEach(function (_ref50) {
        var _values$find;
        var id = _ref50.id,
          prefill = _ref50.prefill,
          selected_date = _ref50.selected_date,
          values = _ref50.values;
        var valueId = values == null || (_values$find = values.find(function (_ref51) {
          var selected = _ref51.selected;
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
      checkboxOptions.forEach(function (_ref52) {
        var id = _ref52.id,
          checked = _ref52.checked,
          value = _ref52.value,
          noValue = _ref52.noValue;
        if (checked) {
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"hidden\"]").val(value);
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"checkbox\"]").prop('checked', true);
        } else {
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"hidden\"]").val(noValue);
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"checkbox\"]").prop('checked', false);
        }
      });

      // mark file input, date input, dropdown select, text input as shown
      [].concat(fileOptions, dateOptions, dropdownOptions, textOptions).forEach(function (_ref53) {
        var id = _ref53.id;
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
    var showOptionIds = this.productOptions.map(function (_ref54) {
      var id = _ref54.id;
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
              return _this18.productOptions.find(function (_ref55) {
                var id = _ref55.id;
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
            selections.forEach(function (_ref56) {
              var _adjustedPricesWithTa, _adjustedPricesWithTa2, _adjustedPricesWithou, _adjustedPricesWithou2;
              var optionId = _ref56.optionId,
                valueId = _ref56.valueId,
                adjustedPricesWithTax = _ref56.adjustedPricesWithTax,
                adjustedPricesWithoutTax = _ref56.adjustedPricesWithoutTax;
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
      var valueLabel = ((_option$values = option.values) == null || (_option$values = _option$values.find(function (_ref57) {
        var id = _ref57.id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX3Byb2R1Y3QtZGV0YWlsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEs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Q0FBQztFQUFBLE9BQUF1UCxZQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2V5ZXZhL2ltYWdlLWdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9leWV2YS9wcm9kdWN0LWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9zYWxlLWNvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvcmFkaW9PcHRpb25zLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMtYmFzZS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Jhbm5lci11dGlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvaWUtaGVscGVycy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L2ltYWdlLWdhbGxlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdlYXN5em9vbSc7XHJcbmltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XHJcbmltcG9ydCB7IGNyZWF0ZUZvY3VzVHJhcCB9IGZyb20gJ2ZvY3VzLXRyYXAnO1xyXG5pbXBvcnQgeyB0b29scyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IENvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IGZyb20gJy4uLy4uL3RoZW1lL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeSc7XHJcblxyXG5jb25zdCBERUZBVUxUX1NURVAgPSAzNjA7XHJcbmNsYXNzIEltYWdlR2FsbGVyeU1vZGFsIHtcclxuICAgIG1vZGFsVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJDbG9zZVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkNsb3NlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLWVhc3l6b29tXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLWltZy1jb250YWluZXJcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Jm1haW5JbWFnZUxpbmtFbGVtZW50fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLTM2MFwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwLWltZy1jb250YWluZXJcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLWltZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkXCIgZGF0YS1zaXplcz1cImF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLTM2MC1jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLXByZXZpb3VzXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wcmV2aW91cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1hcnJvdy1sZWZ0LWxvbmdcIj48L3VzZT48L3N2Zz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UHJldmlvdXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcGxheVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGxheT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1wbGF5XCI+PC91c2U+PC9zdmc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlBsYXk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcGF1c2VcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBhdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXBhdXNlXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlBhdXNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLW5leHRcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLW5leHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctcmlnaHQtbG9uZ1wiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5OZXh0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tdmlkZW9cIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYXp5bG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2NDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM5MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aXRsZVwiPnt7bmFtZX19PC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I3ZpZGVvcy5sZW5ndGh9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC12aWRlb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sYWJlbFwiPnt7dmlkZW9zTGFiZWx9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyN2aWRlb3N9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxpbmtFbGVtZW50fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svdmlkZW9zfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L3ZpZGVvcy5sZW5ndGh9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzMzYwLmxlbmd0aH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLTM2MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3tpbWFnZXMzNjBMYWJlbH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlczM2MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzMzYwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlczM2MC5sZW5ndGh9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzLmxlbmd0aH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWltYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3tpbWFnZXNMYWJlbH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlc319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlcy5sZW5ndGh9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0ltYWdlR2FsbGVyeT99IGltYWdlR2FsbGVyeVxyXG4gICAgICogQHBhcmFtIHtqUXVlcnk/fSAkZ2FsbGVyeVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihpbWFnZUdhbGxlcnkgPSBudWxsLCAkZ2FsbGVyeSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeSA9IGltYWdlR2FsbGVyeTtcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5ID0gJGdhbGxlcnk7XHJcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcclxuXHJcbiAgICAgICAgaWYgKGltYWdlR2FsbGVyeSAmJiAkZ2FsbGVyeSkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuJGdhbGxlcnkpIHtcclxuICAgICAgICAgICAgLy8gb3BlbiBtb2RhbCB3aGVuIGNsaWNrIG9uIHZpZGVvLCAzNjAgdmlldywgb3IgbW9yZSBpbWFnZSB0aHVtYm5haWxzXHJcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlcclxuICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW9dLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLW1vcmVdJylcclxuICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJylcclxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrJylcclxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3Jjc2V0ID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwID0gJGEuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0nKS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKGltYWdlVXJsLCBpbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB2aWRlb0lkLCBzdGVwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBjbGljayBjbG9zZSBidXR0b25cclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNsb3NlIG1vZGFsIHdoZW4gcHJlc3MgRXNjYXBlIGtleVxyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5vbigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNsb3NlIG1vZGFsIHdoZW4gY2xpY2sgb3V0c2lkZSAob3ZlcmxheSlcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRnYWxsZXJ5TW9kYWwuaXMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGltYWdlIHRodW1ibmFpbHNcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKFxyXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcclxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0JyksXHJcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gdmlkZW8gdGh1bWJuYWlsc1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKHZpZGVvSWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAzNjAgaW1hZ2UgdGh1bWJuYWlsc1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcl0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFN0ZXAgPSAkYS5kYXRhKCdleWV2YUltYWdlR2FsbGVyeU1vZGFsSXRlbVJvdGF0b3InKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKFxyXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcclxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0JyksXHJcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcclxuICAgICAgICAgICAgICAgIHRvdGFsU3RlcCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXByZXZpb3VzXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzMzYwU3RlcCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtbmV4dF0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0MzYwU3RlcCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGxheV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5MzYwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wYXVzZV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZTM2MCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lNb2RhbCgpIHtcclxuICAgICAgICBpZiAodGhpcy4kZ2FsbGVyeU1vZGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsID0gJCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNb2RhbCgpIHtcclxuICAgICAgICBjb25zdCAkbWFpbkltYWdlTGluayA9IHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuZmluZCgnYScpLmNsb25lKCk7XHJcbiAgICAgICAgJG1haW5JbWFnZUxpbmsuZmluZCgnaW1nJykucmVtb3ZlQXR0cignZGF0YS16b29tLWltYWdlJykuYXR0cignZGF0YS1leWV2YS1nYWxsZXJ5LW1vZGFsLW1haW4taW1hZ2UnLCAnJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZUxpbmtFbGVtZW50ID0gJG1haW5JbWFnZUxpbmsuZ2V0KDApPy5vdXRlckhUTUw7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuJGdhbGxlcnkuY2xvc2VzdCgnLnByb2R1Y3RWaWV3JykuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC10aXRsZV0nKS50ZXh0KCk7XHJcbiAgICAgICAgY29uc3QgdmlkZW9zTGFiZWwgPSB0aGlzLiRnYWxsZXJ5LmRhdGEoJ3ZpZGVvc0xhYmVsJykgfHwgJ1ZpZGVvcyc7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwTGFiZWwgPSB0aGlzLiRnYWxsZXJ5LmRhdGEoJ2ltYWdlczM2MExhYmVsJykgfHwgJzM2MCBWaWV3JztcclxuICAgICAgICBjb25zdCBpbWFnZXNMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgnaW1hZ2VzTGFiZWwnKSB8fCAnUHJvZHVjdCBJbWFnZXMnO1xyXG5cclxuICAgICAgICBjb25zdCB2aWRlb3MgPSB0aGlzLiRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10nKS5nZXQoKS5tYXAobGkgPT4gKHtcclxuICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICQobGkpLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5jbG9uZSgpLmdldCgwKT8ub3V0ZXJIVE1MLFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwID0gdGhpcy4kZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXScpLmdldCgpLm1hcChsaSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQobGkpLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKS5jbG9uZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9ICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUDtcclxuICAgICAgICAgICAgJGVsLnJlbW92ZUF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtJykuYXR0cignZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcicsIHN0ZXApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiAkZWwuZ2V0KDApPy5vdXRlckhUTUwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpLmdldCgpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAkKGEpLmNsb3Nlc3QoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tbW9yZV0nKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIC5tYXAoYSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkYSA9ICQoYSkuY2xvbmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktaXRlbScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtJywgJycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICRhLmdldCgwKT8ub3V0ZXJIVE1MLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kYWxUZW1wbGF0ZSwge1xyXG4gICAgICAgICAgICBtYWluSW1hZ2VMaW5rRWxlbWVudCxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdmlkZW9zTGFiZWwsXHJcbiAgICAgICAgICAgIGltYWdlczM2MExhYmVsLFxyXG4gICAgICAgICAgICBpbWFnZXNMYWJlbCxcclxuICAgICAgICAgICAgdmlkZW9zLFxyXG4gICAgICAgICAgICBpbWFnZXMzNjAsXHJcbiAgICAgICAgICAgIGltYWdlcyxcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5oaWRlKCkuYXBwZW5kVG8odGhpcy4kYm9keSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEltYWdlWm9vbSgpO1xyXG5cclxuICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IGNyZWF0ZUZvY3VzVHJhcCh0aGlzLiRnYWxsZXJ5TW9kYWwuZ2V0KDApLCB7XHJcbiAgICAgICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTW9kYWwoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHZpZGVvSWQsIHRvdGFsU3RlcCkge1xyXG4gICAgICAgIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50ID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgICAgICB0aGlzLiRib2R5LmFkZENsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pbWFnZUdhbGxlcnkpIHtcclxuICAgICAgICAgICAgY29uc3QgJG1haW5JbWcgPSB0aGlzLmltYWdlR2FsbGVyeS4kbWFpbkltYWdlLmZpbmQoJ2ltZycpO1xyXG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZShcclxuICAgICAgICAgICAgICAgICRtYWluSW1nLmF0dHIoJ3NyYycpLFxyXG4gICAgICAgICAgICAgICAgJG1haW5JbWcuYXR0cignc3Jjc2V0JyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS4kbWFpbkltYWdlLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZpZGVvSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8odmlkZW9JZCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0b3RhbFN0ZXApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKGltYWdlVXJsLCBpbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmFkZENsYXNzKCdfb3BlbmluZycpLnNob3coKS5yZW1vdmVDbGFzcygnX29wZW5pbmcnKTtcclxuICAgICAgICB0aGlzLmZvY3VzVHJhcC5hY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2VdJykudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmFkZENsYXNzKCdfY2xvc2luZycpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVNYWluVmlkZW8oKTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcclxuICAgICAgICAgICAgdGhpcy4kYm9keS5yZW1vdmVDbGFzcygnX2dhbGxlcnlNb2RhbC1vcGVuZWQnKTtcclxuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLnJlbW92ZUNsYXNzKCdfY2xvc2luZycpLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQpIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50LnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCkge1xyXG4gICAgICAgIHRoaXMuaGlkZU1haW5WaWRlbygpO1xyXG4gICAgICAgIHRoaXMuaGlkZTM2MFVJKCk7XHJcbiAgICAgICAgdGhpcy5zaG93TWFpbkltYWdlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsKTtcclxuICAgICAgICB0aGlzLnN3YXBNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01haW5JbWFnZSgpIHtcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU1haW5JbWFnZSgpIHtcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsLCB2aWRlb0lkKSB7XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgLmZpbHRlcigoX2ksIGEpID0+XHJcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmwgJiYgJChhKS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpID09PSBtYWluSW1hZ2VVcmxcclxuICAgICAgICAgICAgICAgIHx8IHZpZGVvSWQgJiYgJChhKS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpID09PSB2aWRlb0lkKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3YXBNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCkge1xyXG4gICAgICAgIGNvbnN0ICRpbWFnZUNvbnRhaW5lciA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpO1xyXG4gICAgICAgIGNvbnN0ICRhID0gJGltYWdlQ29udGFpbmVyLmZpbmQoJ2EnKTtcclxuICAgICAgICBjb25zdCAkbWFpbkltYWdlID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZV0nKTtcclxuXHJcbiAgICAgICAgJGltYWdlQ29udGFpbmVyLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScsIHpvb21JbWFnZVVybCk7XHJcbiAgICAgICAgJGEuYXR0cignaHJlZicsIHpvb21JbWFnZVVybCk7XHJcbiAgICAgICAgJG1haW5JbWFnZS5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldCk7XHJcblxyXG4gICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5zd2FwKFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIHpvb21JbWFnZVVybCxcclxuICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQnJvd3NlcklFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnVHJpZGVudCcpO1xyXG4gICAgICAgIGlmIChpc0Jyb3dzZXJJRSkge1xyXG4gICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlc0lFID0ge1xyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKCR7bWFpbkltYWdlVXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtb3JpZ2luJzogJ2NvbnRlbnQtYm94JyxcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY29udGFpbicsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLW1haW4taW1hZ2VdJykuY3NzKGZhbGxiYWNrU3R5bGVzSUUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0ltYWdlKCkge1xyXG4gICAgICAgIGNvbnN0ICRpbWFnZUNvbnRhaW5lciA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLW1haW4taW1nLWNvbnRhaW5lcl0nKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSAkaW1hZ2VDb250YWluZXIuaGVpZ2h0KCk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSAkaW1hZ2VDb250YWluZXIud2lkdGgoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGltYWdlID0gdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLiR6b29tO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICRpbWFnZS5oZWlnaHQoKTtcclxuICAgICAgICBjb25zdCB3aWR0aCA9ICRpbWFnZS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0IDwgY29udGFpbmVySGVpZ2h0IHx8IHdpZHRoIDwgY29udGFpbmVyV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEltYWdlWm9vbSgpIHtcclxuICAgICAgICB0aGlzLmVhc3l6b29tID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJykuZWFzeVpvb20oe1xyXG4gICAgICAgICAgICBvblNob3c6ICgpID0+IHRoaXMuY2hlY2tJbWFnZSgpLFxyXG4gICAgICAgICAgICBlcnJvck5vdGljZTogJycsXHJcbiAgICAgICAgICAgIGxvYWRpbmdOb3RpY2U6ICcnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNYWluVmlkZW8oKSB7XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTWFpblZpZGVvKCkge1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllcl0nKS5oaWRlKClcclxuICAgICAgICAgICAgLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYWluVmlkZW8odmlkZW9JZCkge1xyXG4gICAgICAgIHRoaXMuaGlkZU1haW5JbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaGlkZTM2MFVJKCk7XHJcbiAgICAgICAgdGhpcy5zaG93TWFpblZpZGVvKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P3JlZj0wJmF1dG9wbGF5PTFgO1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllcl0nKS5zaG93KCkuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgc3JjKTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKG51bGwsIHZpZGVvSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1haW4zNjAobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlTWFpbkltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlTWFpblZpZGVvKCk7XHJcbiAgICAgICAgdGhpcy5zaG93MzYwVUkoKTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKG1haW5JbWFnZVVybCk7XHJcbiAgICAgICAgdGhpcy5zd2FwTWFpbjM2MChtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIHN3YXBNYWluMzYwKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCkge1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1pbWctY29udGFpbmVyXSBpbWcnKVxyXG4gICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxyXG4gICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxyXG4gICAgICAgICAgICAuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcclxuICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKDAsIHRvdGFsU3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdzM2MFVJKCkge1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZTM2MFVJKCkge1xyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5wYXVzZTM2MCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldDM2MEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwLCB0b3RhbFN0ZXAgPSBERUZBVUxUX1NURVApIHtcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJylcclxuICAgICAgICAgICAgLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcsIGN1cnJlbnRTdGVwKVxyXG4gICAgICAgICAgICAuY3NzKCctLWltYWdlLTM2MC1zdGVwcycsIHRvdGFsU3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dDM2MFN0ZXAoKSB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcpKSB8fCAwO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJykpIHx8IERFRkFVTFRfU1RFUDtcclxuXHJcbiAgICAgICAgaWYgKHN0ZXAgPCB0b3RhbCAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcChzdGVwICsgMSwgdG90YWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoMCwgdG90YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91czM2MFN0ZXAoKSB7XHJcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcpKSB8fCAwO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJykpIHx8IERFRkFVTFRfU1RFUDtcclxuXHJcbiAgICAgICAgaWYgKHN0ZXAgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoc3RlcCAtIDEsIHRvdGFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKHRvdGFsIC0gMSwgdG90YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5MzYwKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbDM2MCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbDM2MCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0MzYwU3RlcCgpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLmFkZENsYXNzKCdfcGxheWluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlMzYwKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbDM2MCk7XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLnJlbW92ZUNsYXNzKCdfcGxheWluZycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyZEltYWdlR2FsbGVyeU1vZGFsIGV4dGVuZHMgSW1hZ2VHYWxsZXJ5TW9kYWwge1xyXG4gICAgbG9hZGluZ01vZGFsVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheSBleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbG9hZGluZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgJHNjb3BlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgICAgICBncmFwaFFMVG9rZW4sXHJcbiAgICAgICAgICAgIHpvb21TaXplLFxyXG4gICAgICAgICAgICBwcm9kdWN0U2l6ZSxcclxuICAgICAgICAgICAgdGh1bWJTaXplLFxyXG4gICAgICAgICAgICB0eHRWaWRlb3NMYWJlbCxcclxuICAgICAgICAgICAgdHh0SW1hZ2VzMzYwTGFiZWwsXHJcbiAgICAgICAgICAgIHR4dEltYWdlc0xhYmVsLFxyXG4gICAgICAgIH0gPSB7fSxcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XHJcbiAgICAgICAgdGhpcy5ncmFwaFFMVG9rZW4gPSBncmFwaFFMVG9rZW47XHJcbiAgICAgICAgdGhpcy56b29tU2l6ZSA9IHpvb21TaXplO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdFNpemUgPSBwcm9kdWN0U2l6ZTtcclxuICAgICAgICB0aGlzLnRodW1iU2l6ZSA9IHRodW1iU2l6ZTtcclxuICAgICAgICB0aGlzLnR4dFZpZGVvc0xhYmVsID0gdHh0VmlkZW9zTGFiZWw7XHJcbiAgICAgICAgdGhpcy50eHRJbWFnZXMzNjBMYWJlbCA9IHR4dEltYWdlczM2MExhYmVsO1xyXG4gICAgICAgIHRoaXMudHh0SW1hZ2VzTGFiZWwgPSB0eHRJbWFnZXNMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvcGVuTG9hZGluZ01vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveU1vZGFsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50ID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgICAgICB0aGlzLiRib2R5LmFkZENsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xyXG5cclxuICAgICAgICAvLyBkaXNwbGF5IGxvYWRpbmcgbW9kYWxcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLmxvYWRpbmdNb2RhbFRlbXBsYXRlKSk7XHJcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmhpZGUoKS5hcHBlbmRUbyh0aGlzLiRib2R5KTtcclxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19vcGVuaW5nJykuc2hvdygpLnJlbW92ZUNsYXNzKCdfb3BlbmluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRNb2RhbCgpIHtcclxuICAgICAgICAvLyBmZXRjaCBwcm9kdWN0IGRhdGFcclxuICAgICAgICBhd2FpdCB0aGlzLmZldGNoUHJvZHVjdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluSW1hZ2UgPSB0aGlzLmltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmlzRGVmYXVsdCkgfHwgdGhpcy5pbWFnZXNbMF07XHJcbiAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KG1haW5JbWFnZS51cmxUZW1wbGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZUxpbmtFbGVtZW50ID0gYFxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiR7bWFpbkltYWdlLnpvb21Vcmx9XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsPVwiJHttYWluSW1hZ2UudXJsfVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldD1cIiR7bWFpbkltYWdlU3Jjc2V0fVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke21haW5JbWFnZS56b29tVXJsfVwiXHJcbiAgICAgICAgICAgID48aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBzcmM9XCIke21haW5JbWFnZS50aHVtYm5haWxVcmx9XCIgZGF0YS1zcmNzZXQ9XCIke21haW5JbWFnZVNyY3NldH1cIiBkYXRhLXNpemVzPVwiYXV0b1wiIGFsdD1cIiR7bWFpbkltYWdlLmFsdFRleHR9XCIgLz48L2E+YDtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuJHNjb3BlLmZpbmQoJy5jYXJkLXRpdGxlJykudGV4dCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvc0xhYmVsID0gdGhpcy50eHRWaWRlb3NMYWJlbCB8fCAnVmlkZW9zJztcclxuICAgICAgICBjb25zdCBpbWFnZXMzNjBMYWJlbCA9IHRoaXMudHh0SW1hZ2VzMzYwTGFiZWwgfHwgJzM2MCBWaWV3JztcclxuICAgICAgICBjb25zdCBpbWFnZXNMYWJlbCA9IHRoaXMudHh0SW1hZ2VzTGFiZWwgfHwgJ1Byb2R1Y3QgSW1hZ2VzJztcclxuXHJcbiAgICAgICAgY29uc3QgdmlkZW9zID0gdGhpcy52aWRlb3MubWFwKHZpZGVvID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh2aWRlby51cmwpO1xyXG4gICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3YnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kdWN0Vmlldy10aHVtYm5haWwtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3ZpZGVvLnVybH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZD1cIiR7dmlkZW9JZH1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpLyR7dmlkZW9JZH0vZGVmYXVsdC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgaHJlZj1cIiNpY29uLXBsYXktc29saWRcIj48L3VzZT48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+YCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwID0gdGhpcy5pbWFnZXMzNjAubWFwKChpbWFnZVVybCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUDtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kdWN0Vmlldy10aHVtYm5haWwtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke2ltYWdlVXJsfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3I9XCIke3N0ZXB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmw9XCIke2ltYWdlVXJsfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHtpbWFnZVVybH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke2ltYWdlVXJsfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VVcmx9XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIGhyZWY9XCIjaWNvbi0zNjBcIj48L3VzZT48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+YCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5pbWFnZXMubWFwKGltYWdlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmNzZXQgPSB0b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoaW1hZ2UudXJsVGVtcGxhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7aW1hZ2Uuem9vbVVybH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybD1cIiR7aW1hZ2UudXJsfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHtpbWFnZVNyY3NldH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke2ltYWdlLnpvb21Vcmx9XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIHNyYz1cIiR7aW1hZ2UudGh1bWJuYWlsVXJsfVwiIGRhdGEtc3Jjc2V0PVwiJHtpbWFnZVNyY3NldH1cIiBkYXRhLXNpemVzPVwiYXV0b1wiIGFsdD1cIiR7aW1hZ2UuYWx0VGV4dH1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCAkZ2FsbGVyeU1vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RhbFRlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgIG1haW5JbWFnZUxpbmtFbGVtZW50LFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2aWRlb3NMYWJlbCxcclxuICAgICAgICAgICAgaW1hZ2VzMzYwTGFiZWwsXHJcbiAgICAgICAgICAgIGltYWdlc0xhYmVsLFxyXG4gICAgICAgICAgICB2aWRlb3MsXHJcbiAgICAgICAgICAgIGltYWdlczM2MCxcclxuICAgICAgICAgICAgaW1hZ2VzLFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgLy8gcmVwbGFjZSBsb2FkaW5nIG1vZGFsIHdpdGggdGhlIGFjdHVhbCBtb2RhbFxyXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5odG1sKCRnYWxsZXJ5TW9kYWwuaHRtbCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0SW1hZ2Vab29tKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGdhbGxlcnlNb2RhbC5nZXQoMCksIHtcclxuICAgICAgICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTW9kYWwoe1xyXG4gICAgICAgIGZpcnN0VmlkZW8gPSBmYWxzZSxcclxuICAgICAgICBmaXJzdDM2MCA9IGZhbHNlLFxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5vcGVuTG9hZGluZ01vZGFsKCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZE1vZGFsKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdFZpZGVvKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5maXJzdCgpLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1haW5WaWRlbyh2aWRlb0lkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZpcnN0MzYwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3JdJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFpbjM2MChcclxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcclxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcclxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2V5ZXZhSW1hZ2VHYWxsZXJ5TW9kYWxJdGVtUm90YXRvcicpLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2VdJykudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmZXRjaFByb2R1Y3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzIHx8IHRoaXMudmlkZW9zIHx8IHRoaXMuaW1hZ2VzMzYwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IFt6b29tV2lkdGgsIHpvb21IZWlnaHRdID0gdGhpcy56b29tU2l6ZS5zcGxpdCgneCcpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IFtpbWFnZVdpZHRoLCBpbWFnZUhlaWdodF0gPSB0aGlzLnByb2R1Y3RTaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3QgW3RodW1iV2lkdGgsIHRodW1iSGVpZ2h0XSA9IHRoaXMudGh1bWJTaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdElkOiBJbnQhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkem9vbVdpZHRoOiBJbnQhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkem9vbUhlaWdodDogSW50ISxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlV2lkdGg6IEludCEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbWFnZUhlaWdodDogSW50ISxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRodW1iV2lkdGg6IEludCEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aHVtYkhlaWdodDogSW50IVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QoZW50aXR5SWQ6ICRwcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsKHdpZHRoOiAkaW1hZ2VXaWR0aCwgaGVpZ2h0OiAkaW1hZ2VIZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsVXJsOiB1cmwod2lkdGg6ICR0aHVtYldpZHRoLCBoZWlnaHQ6ICR0aHVtYkhlaWdodClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tVXJsOiB1cmwod2lkdGg6ICR6b29tV2lkdGgsIGhlaWdodDogJHpvb21IZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsVGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHMobmFtZXM6IFtcIl9fQDM2MFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgem9vbVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHpvb21IZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB0aHVtYldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRodW1iSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5ncmFwaFFMVG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtpbWFnZXMsIHZpZGVvcywgaW1hZ2VzMzYwXSA9IFtcclxuICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdC5pbWFnZXMuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gbm9kZSksXHJcbiAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QudmlkZW9zLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IG5vZGUpLFxyXG4gICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LmN1c3RvbUZpZWxkcy5lZGdlc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeyBub2RlIH0pID0+IG5vZGUubmFtZSA9PT0gJ19fQDM2MCcpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh7IG5vZGUgfSkgPT4gbm9kZS52YWx1ZSksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHthbHRUZXh0OiBzdHJpbmcsIGlzRGVmYXVsdDogYm9vbGVhbiwgdXJsPzogc3RyaW5nLCB0aHVtYm5haWxVcmw/OiBzdHJpbmcsIHpvb21Vcmw/OiBzdHJpbmcsIHVybFRlbXBsYXRlPzogc3RyaW5nfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7dGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnZpZGVvcyA9IHZpZGVvcztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzMzYwID0gaW1hZ2VzMzYwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkgZXh0ZW5kcyBDb3JuZXJzdG9uZUltYWdlR2FsbGVyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZ2FsbGVyeSkge1xyXG4gICAgICAgIHN1cGVyKCRnYWxsZXJ5KTtcclxuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeU1vZGFsID0gbmV3IEltYWdlR2FsbGVyeU1vZGFsKHRoaXMsICRnYWxsZXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmJpbmRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeU1vZGFsLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4vLyBpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xyXG5pbXBvcnQgQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyBmcm9tICcuLi8uLi90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcclxuaW1wb3J0IHsgYWxlcnRNb2RhbCwgc2hvd0FsZXJ0TW9kYWwsIE1vZGFsRXZlbnRzIH0gZnJvbSAnLi4vLi4vdGhlbWUvZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IHsgZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMsIGN1cnJlbmN5Rm9ybWF0IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgU2FsZUNvdW50ZG93biBmcm9tICcuLi9zYWxlLWNvdW50ZG93bic7XHJcblxyXG5jb25zdCBERUJVR19MT0cgPSBmYWxzZTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZU9wdGlvblN0cmluZyA9IHMgPT4gcy5yZXBsYWNlKC86L2csICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudG9Mb3dlckNhc2UoKTtcclxuXHJcbmZ1bmN0aW9uIGVxdWFsT3B0aW9uU3RyaW5nKGEsIGIpIHtcclxuICAgIHJldHVybiBub3JtYWxpemVPcHRpb25TdHJpbmcoYSkgPT09IG5vcm1hbGl6ZU9wdGlvblN0cmluZyhiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHR3byBhcnJheXMgYXJlIGVxdWFsIHJlZ2FyZGxlc3Mgb2Ygb3JkZXJcclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYXJyMVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIyXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWxVbm9yZGVyZWQoYXJyMSwgYXJyMikge1xyXG4gICAgY29uc3QgX2FycjEgPSBhcnIxLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgY29uc3QgX2FycjIgPSBhcnIyLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgcmV0dXJuIF9hcnIxLmxlbmd0aCA9PT0gX2FycjIubGVuZ3RoICYmIF9hcnIxLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBfYXJyMltpbmRleF0pO1xyXG59XHJcblxyXG5sZXQgY2FjaGVkU2V0dGluZ3M7XHJcblxyXG4vKipcclxuICogSGFuZGxlIG11bHRpcGxlIHByb21pc2VzIHdpdGggYSBjb25jdXJyZW5jeSBsaW1pdCAoZS5nLiwgcHJvY2Vzc2luZyBvbmx5IDEwIHByb21pc2VzIGF0IGEgdGltZSBvdXQgb2YgMTApXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXk8RnVuY3Rpb248VD59IHByb21pc2VzIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBhIHByb21pc2VcclxuICogQHBhcmFtIHsqfSBsaW1pdCBudW1iZXIgb2YgcHJvbWlzZXMgdG8gcHJvY2VzcyBhdCBhIHRpbWVcclxuICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8VD4+fSByZXN1bHRzIG9mIGFsbCBwcm9taXNlc1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQocHJvbWlzZXMsIGxpbWl0ID0gMTApIHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgIGNvbnN0IGV4ZWN1dGluZyA9IFtdOyAvLyBUcmFjayB0aGUgcHJvbWlzZXMgY3VycmVudGx5IGV4ZWN1dGluZ1xyXG5cclxuICAgIGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xyXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBwcm9taXNlIGFuZCBhZGQgaXQgdG8gdGhlIGV4ZWN1dGluZyBsaXN0XHJcbiAgICAgICAgY29uc3QgcCA9IHByb21pc2UoKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmluaXNoZWQgcHJvbWlzZSBmcm9tIGV4ZWN1dGluZyBsaXN0XHJcbiAgICAgICAgICAgIGV4ZWN1dGluZy5zcGxpY2UoZXhlY3V0aW5nLmluZGV4T2YocCksIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaChwKTtcclxuICAgICAgICBleGVjdXRpbmcucHVzaChwKTtcclxuXHJcbiAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGxpbWl0LCB3YWl0IGZvciB0aGUgZmlyc3QgdG8gZmluaXNoXHJcbiAgICAgICAgaWYgKGV4ZWN1dGluZy5sZW5ndGggPj0gbGltaXQpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKGV4ZWN1dGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdhaXQgZm9yIGFsbCByZW1haW5pbmcgcHJvbWlzZXMgdG8gY29tcGxldGVcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb3JuZXJzdG9uZVByb2R1Y3REZXRhaWxzIHtcclxuICAgIG1vZGlmaWVyc01vZGFsT3ZlcmxheVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtb3ZlcmxheVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW92ZXJsYXk+PC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG1vZGlmaWVyc01vZGFsVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbFwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY2xvc2UtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQ2xvc2VcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jbG9zZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5DbG9zZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWJhY2stYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQmFja1wiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCI+QmFjazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LWxlZnQtbG9uZ1wiPjwvdXNlPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWhlYWRlci10aXRsZVwiPjwlJnByb2R1Y3RUaXRsZSU+PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jb250ZW50XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtdGl0bGVcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC10aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWluIGN1cnJlbnQgc3RlcCdzIHRpdGxlIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1vcHRpb25zXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBtb2RpZmllcnMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1zdW1tYXJ5XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBzdW1tYXJ5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY29tcGxldGVcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBhZGQgdG8gY2FydCBidXR0b24gJiBxdHkgYm94IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWZvb3RlclwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbnRpbnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCV0eHRDb250aW51ZSU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtZm9vdGVyLXN1YnRvdGFsXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIHN1YnRvdGFsIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8JSNtYWluSW1hZ2VVcmwlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiPCVtYWluSW1hZ2VVcmwlPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3Jjc2V0PVwiPCVtYWluSW1hZ2VTcmNzZXQlPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtem9vbS1pbWFnZT1cIjwlem9vbUltYWdlVXJsJT5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNpemVzPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGF6eWxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1pbWcgLz5cclxuICAgICAgICAgICAgICAgIDwlL21haW5JbWFnZVVybCU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25Ub29sdGlwVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLXRyaWdnZXJcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbD1cIk1vcmUgaW5mb3JtYXRpb25cIiB0aXRsZT1cIk1vcmUgaW5mb3JtYXRpb25cIj5pPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLWJ1YmJsZVwiPjwldG9vbHRpcCU+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXZhbHVlLXRvb2x0aXBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdG9vbHRpcC10cmlnZ2VyXCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCJNb3JlIGluZm9ybWF0aW9uXCIgdGl0bGU9XCJNb3JlIGluZm9ybWF0aW9uXCI+aTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdG9vbHRpcC1idWJibGVcIj48JXRvb2x0aXAlPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdmFsdWUtdG9vbHRpcC1oZWFkaW5nXCI+PCVoZWFkaW5nJT48L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uUHJpY2VUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8JSNwcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UgX3ByZWxvYWRlclwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UgX3dpdGhUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW9sZCBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW5vdyBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aFRheFZhbHVlJT5cIj48JXByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfd2l0aG91dFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utb2xkIF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utbm93IF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlID0gYFxyXG4gICAgICAgIDwlI3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICg8JXByaWNlV2l0aFRheCU+KVxyXG4gICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgPCVecHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICg8JXByaWNlV2l0aG91dFRheCU+KVxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICBgO1xyXG5cclxuICAgIHN1YnRvdGFsVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtZ3JvdXAtbGFiZWxcIj48JXR4dFN1YnRvdGFsJT48L2Rpdj5cclxuICAgICAgICAgICAgPCUjcHJlbG9hZGVyJT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsIF9wcmVsb2FkZXJcIj4uLi48L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJlbG9hZGVyJT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsIF93aXRoVGF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1vbGQgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ub3cgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3dpdGhvdXRUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW9sZCBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW5vdyBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JXByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHN1bW1hcnlUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDwlI29wdGlvbnMlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb24tbmFtZVwiPjwlbmFtZSU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi12YWx1ZVwiPjwldmFsdWUlPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb24tcHJpY2VzXCI+PCUmcHJpY2VIdG1sJT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvb3B0aW9ucyU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHNob3dQcmljZUZyZWUgPSBmYWxzZTtcclxuICAgIHNob3dQcmljZVplcm8gPSBmYWxzZTtcclxuXHJcbiAgICBhZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IgPSAnLmFkZC10by1jYXJ0LXdyYXBwZXInO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGUgZm9yIGZ1bmN0aW9uIGBmZXRjaE9wdGlvblByaWNlYFxyXG4gICAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIHsgcHJpY2VzV2l0aFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSwgcHJpY2VzV2l0aG91dFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSB9Pn1cclxuICAgICAqL1xyXG4gICAgZmV0Y2hPcHRpb25QcmljZUNhY2hlID0ge307XHJcblxyXG4gICAgY29uc29sZSA9IHtcclxuICAgICAgICBsb2c6ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChERUJVR19MT0cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBmaXhGb3JtRWxlbWVudFVuaXF1ZUlkcygkc2NvcGUpO1xyXG5cclxuICAgICAgICBzdXBlcigkc2NvcGUsIC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJGNob29zZU9wdGlvbnNCdG4gPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gTnVtYmVyKCRmb3JtLmZpbmQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQcm9kdWN0TWV0YWRhdGEoJGZvcm0pO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSBtb2RpZmllcnMgbW9kYWwgZmVhdHVyZVxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIGVuYWJsZSBtb2RpZmllcnMgbW9kYWwgaWYgb3VyIGNob29zZSBvcHRpb25zIGJ1dHRvbiBhcHBlYXJzIGluIHRoZSBwcm9kdWN0IGRldGFpbHNcclxuICAgICAgICB0aGlzLmVuYWJsZU1vZGlmaWVyc01vZGFsID0gJGNob29zZU9wdGlvbnNCdG4ubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RpZmllcnNNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kUHJvZHVjdEVkaXRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRTdGlja3lBZGRUb0NhcnRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRNb2RhbERlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmluaXRPcHRpb25TdGVwcGVyKCk7XHJcbiAgICAgICAgdGhpcy5zeW5jUHJvZHVjdENhcmRRdHkoKTtcclxuICAgICAgICB0aGlzLmluaXRTYWxlQ291bnRkb3duKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kUmVuZXdpbmdEYXRhUGxhblZpc2liaWxpdHkoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcklubGluZU9wdGlvblRvb2x0aXBzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTcGVjVG9vbHRpcHMoKTtcclxuICAgICAgICB0aGlzLmluaXRJbmxpbmVPcHRpb25QcmljZUhpbnRzKCk7XHJcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3VwZGF0ZS13aXNobGlzdC1idXR0b25zJywgW3RoaXMuJHNjb3BlXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKSkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlTWV0YWRhdGEgPSBzZWxlY3RvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkZm9ybS5maW5kKHNlbGVjdG9yKS5maXJzdCgpLnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBpbnZhbGlkIG1ldGFkYXRhIHBheWxvYWRzLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcyA9IHBhcnNlTWV0YWRhdGEoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtY3VzdG9tLWZpZWxkc10nKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtcclxuICAgICAgICAgKiAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICogICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAgICAgKiAgIHN0YXRlOiAnbW9kaWZpZXInIHwgJ3ZhcmlhbnRfb3B0aW9uJyxcclxuICAgICAgICAgKiAgIHBhcnRpYWw6ICdzd2F0Y2gnIHwgJ3NldC1yZWN0YW5nbGUnIHwgJ3NldC1zZWxlY3QnIHwgJ3NldC1yYWRpbydcclxuICAgICAgICAgKiAgICAgfCAnaW5wdXQtdGV4dCcgfCAnaW5wdXQtbnVtYmVycycgfCAnaW5wdXQtY2hlY2tib3gnIHwgJ2lucHV0LWZpbGUnXHJcbiAgICAgICAgICogICAgIHwgJ2RhdGUnIHwgJ3RleHRhcmVhJyB8ICdwcm9kdWN0LWxpc3QnLFxyXG4gICAgICAgICAqICAgcmVxdWlyZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICogICBwcmVmaWxsPzogc3RyaW5nLFxyXG4gICAgICAgICAqICAgc2VsZWN0ZWRfZGF0ZT86IHtcclxuICAgICAgICAgKiAgICAgZGF5OiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIG1vbnRoOiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIHllYXI6IHN0cmluZ1xyXG4gICAgICAgICAqICAgfSxcclxuICAgICAgICAgKiAgIGNoZWNrZWQ/OiBib29sZWFuLFxyXG4gICAgICAgICAqICAgbm9WYWx1ZT86IG51bWJlcixcclxuICAgICAgICAgKiAgIHZhbHVlPzogbnVtYmVyLFxyXG4gICAgICAgICAqICAgdmFsdWVzPzogQXJyYXk8e1xyXG4gICAgICAgICAqICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAqICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICAgICAqICAgICBzZWxlY3RlZDogYm9vbGVhbixcclxuICAgICAgICAgKiAgICAgZGF0YTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPlxyXG4gICAgICAgICAqICAgfT5cclxuICAgICAgICAgKiB9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zID0gcGFyc2VNZXRhZGF0YSgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscy5jdXN0b21GaWVsZHM6JywgdGhpcy5jdXN0b21GaWVsZHMpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzLnByb2R1Y3RPcHRpb25zOicsIHRoaXMucHJvZHVjdE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkdXBkYXRlUHJvZHVjdFdyYXBwZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld01vZGVsKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IHN1cGVyLmdldFZpZXdNb2RlbCguLi5hcmdzKTtcclxuICAgICAgICBtb2RlbC4kdXBkYXRlUHJvZHVjdFdyYXBwZXIgPSB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlcjtcclxuICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xyXG4gICAgICAgIGNvbnN0ICRidG4gPSB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlci5maW5kKCdpbnB1dCwgYnV0dG9uJyk7XHJcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcclxuICAgICAgICAgICAgJGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRidG4ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGUgdGhlIG1ldGhvZCB0byBzdXBwb3J0IGVkaXQgcHJvZHVjdCBpbiBjYXJ0XHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cclxuICAgICAqL1xyXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xyXG4gICAgICAgIGlmIChldmVudC5lZGl0UHJvZHVjdEluQ2FydCkge1xyXG4gICAgICAgICAgICAkKGZvcm0pLmZpbmQoJ2lucHV0W25hbWU9XCJhY3Rpb25cIl0nKS52YWwoJ0VkaXRQcm9kdWN0RmllbGRzSW5DYXJ0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoZm9ybSkuZmluZCgnaW5wdXRbbmFtZT1cImFjdGlvblwiXScpLnZhbCgnYWRkJyk7XHJcbiAgICAgICAgICAgIHN1cGVyLmFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVkaXQgcHJvZHVjdCBpbiBjYXJ0LlxyXG4gICAgICogQWxtb3N0IGNsb25lIGZyb20gYWRkUHJvZHVjdFRvQ2FydCBtZXRob2QgZnJvbSB0aGUgcGFyZW50IGNsYXNzLlxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZWRpdFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcclxuICAgICAgICBjb25zdCAkc2F2ZUJ0biA9ICQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJywgJChldmVudC50YXJnZXQpKS5maW5kKCdpbnB1dCwgYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkc2F2ZUJ0bi52YWwoKTtcclxuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRzYXZlQnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkc2F2ZUJ0blxyXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxyXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJHNhdmVCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xyXG5cclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzYXZlQnRuXHJcbiAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBmYWlsdXJlID0gKGVycm9yVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JUZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkc2F2ZUJ0bikpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0TW9kYWwoKS4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkc2F2ZUJ0bjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0UXVhbnRpdHkpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZm9ybURhdGEuZ2V0KCdpdGVtX2lkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1F0eSA9IGZvcm1EYXRhLmdldCgncXR5W10nKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWx1cmUoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgfSkuZG9uZSgocmVzcG9uc2UpID0+IHN1Y2Nlc3MocmVzcG9uc2UpKS5mYWlsKChfeGhyLCBfc3RhdHVzLCBlcnJvcikgPT4gZmFpbHVyZShlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZT8uZGF0YT8uc3RhdHVzICE9PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGNsaWNrIG9uIHRoZSBBZGQgTmV3IHRvIENhcnQgYnV0dG9uLCB0cmlnZ2VyIHRoZSBmb3JtIHN1Ym1pdCBldmVudCB3aXRoIGBhZGROZXdUb0NhcnRgIGZsYWdcclxuICAgICAqIHNvIHRoYXQgbmV3IHByb2R1Y3QgaXMgYWx3YXlzIGFkZGVkIHRvIGNhcnQgcmVnYXJkbGVzcyBvZiBlZGl0IHByb2R1Y3QgaW4gY2FydCBvciBub3RcclxuICAgICAqL1xyXG4gICAgYmluZFByb2R1Y3RFZGl0RXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEV2ZW50ID0gJC5FdmVudCgnc3VibWl0JywgeyBlZGl0UHJvZHVjdEluQ2FydDogdHJ1ZSB9KTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyLmZpbmQoJ2lucHV0LCBidXR0b24nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICRmb3JtLnRyaWdnZXIoc3VibWl0RXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRTdGlja3lBZGRUb0NhcnRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlU3RpY2t5QWRkVG9DYXJ0Q2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkYnV0dG9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKCRidXR0b24ucHJvcCgnZGlzYWJsZWQnKSB8fCAkYnV0dG9uLmF0dHIoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYgKCEkZm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJHN0aWNreVF0eSA9ICRidXR0b24uc2libGluZ3MoJy5wcm9kdWN0Vmlldy1zdGlja3ktYWRkLXRvLWNhcnQnKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5tb2JpbGUtaW5jcmVtZW50IGlucHV0W25hbWU9XCJxdHlbXVwiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgJGZvcm1RdHkgPSAkZm9ybS5maW5kKCdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGlucHV0W25hbWU9XCJxdHlbXVwiXScpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHN0aWNreVF0eS5sZW5ndGggJiYgJGZvcm1RdHkubGVuZ3RoICYmICRmb3JtUXR5LnZhbCgpICE9PSAkc3RpY2t5UXR5LnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybVF0eS52YWwoJHN0aWNreVF0eS52YWwoKSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybVswXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtICYmICFmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW52YWxpZEZpZWxkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCc6aW52YWxpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbnZhbGlkRmllbGQ/LnNjcm9sbEludG9WaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZEZpZWxkLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGludmFsaWRGaWVsZD8uZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvcm0ucmVwb3J0VmFsaWRpdHkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGludmFsaWRGaWVsZD8ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJyNzdGlja3ktYWRkLXRvLWNhcnQnKVxyXG4gICAgICAgICAgICAub2ZmKCdjbGljay5leWV2YVN0aWNreUFkZFRvQ2FydCcpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2suZXlldmFTdGlja3lBZGRUb0NhcnQnLCBoYW5kbGVTdGlja3lBZGRUb0NhcnRDbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZE1vZGFsRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBkZXN0cm95IHRoZSBpbWFnZSBnYWxsZXJ5IG1vZGFsIHdoZW4gcXVpY2stdmlldyBtb2RhbCBpcyBjbG9zZWRcclxuICAgICAgICAvLyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuY2xvc2VzdCgnLm1vZGFsJykub25lKE1vZGFsRXZlbnRzLmNsb3NlZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbWFnZUdhbGxlcnlNb2RhbC5kZXN0cm95TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0T3B0aW9uU3RlcHBlcigpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1zdGVwcGVyXScpLmVhY2goKF9pLCBmb3JtRmllbGRFbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZm9ybUZpZWxkID0gJChmb3JtRmllbGRFbCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRkZWMgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImRlY1wiXScpO1xyXG4gICAgICAgICAgICBjb25zdCAkaW5jID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJpbmNcIl0nKTtcclxuICAgICAgICAgICAgY29uc3QgJGNoZWNrID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJjaGVja1wiXScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5hZGRDbGFzcygnX2NoZWNraW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86dmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaXJzdCA9ICRyYWRpb3MuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSAkcmFkaW9zLmluZGV4KCRjaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgaSA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgPT09ICRyYWRpb3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5yZW1vdmVDbGFzcygnX2NoZWNraW5nJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbml0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSAoaW5jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykuYWRkQ2xhc3MoJ19jaGVja2luZycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOnZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjaGVja2VkID0gJHJhZGlvcy5maWx0ZXIoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZmlyc3QgPSAkcmFkaW9zLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVja2VkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3VuZCBjaGVja2VkIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRyYWRpb3MuaW5kZXgoJGNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0IHRoZSBuZXh0IHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgJHJhZGlvcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLmVxKGkgKyAxKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgKyAxID09PSAkcmFkaW9zLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIHByZXZpb3VzIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZXEoaSAtIDEpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGkgLSAxID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIGNoZWNrZWQgcmFkaW8sIGFuZCBmb3VuZCB0aGUgZmlyc3QgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jICYmICRmaXJzdC5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKyBhbmQgZmlyc3Qgb3B0aW9uIGlzICdub25lJywgaWdub3JlIHRoZSBub25lIG9wdGlvbiwgc2VsZWN0IHRoZSBmaXJzdCB2YWx1ZWQgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3Mubm90KCRmaXJzdCkuZmlyc3QoKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSwgc2VsZWN0IHRoZSBmaXJzdCByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZmlyc3QucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5hZGRDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hlY2tlZCByYWRpbyBpcyAnbm9uZScgdGhlbiB1bmNoZWNrIHRoZSBjaGVjayBidXR0b25cclxuICAgICAgICAgICAgICAgIGlmICgkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2sucmVtb3ZlQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLnJlbW92ZUNsYXNzKCdfY2hlY2tpbmcnKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRkZWMub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGluYy5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0KHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRjaGVjay5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVjay5oYXNDbGFzcygnX2NoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuY2hlY2sgdGhlIGNoZWNrZWQgcmFkaW8gYW5kIHNlbGVjdCB0aGUgJ25vbmUnIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHVuY2hlY2sgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRub25lID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkbm9uZS5sZW5ndGggPiAwKSAkbm9uZS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgkdW5jaGVjay5sZW5ndGgpICR1bmNoZWNrLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5yZW1vdmVDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN5bmMgcHJvZHVjdCBxdWFudGl0eSB3aXRoIHF0eSBvZiB0aGUgY29ycmVzcG9uZGluZyBwcm9kdWN0IGNhcmRcclxuICAgICAqL1xyXG4gICAgc3luY1Byb2R1Y3RDYXJkUXR5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RRdWFudGl0eSkgcmV0dXJuOyAvLyBzdG9wIGlmIGVkaXQgcHJvZHVjdCBpbiBjYXJ0XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRRdHkgPSAkKGBbZGF0YS1jYXJkLXF1YW50aXR5LWNoYW5nZV0gaW5wdXRbbmFtZT1cInF0eV8ke3RoaXMucHJvZHVjdElkfVwiXWApLnZhbCgpO1xyXG4gICAgICAgIGlmICghY2FyZFF0eSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCAkcXR5ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBpbnB1dFtuYW1lPVwicXR5W11cIl0nKTtcclxuICAgICAgICBjb25zdCBxdHkgPSAkcXR5LnZhbCgpO1xyXG4gICAgICAgIGlmICgkcXR5Lmxlbmd0aCA+IDAgJiYgcXR5ICE9PSBjYXJkUXR5KSB7XHJcbiAgICAgICAgICAgICRxdHkudmFsKGNhcmRRdHkpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0U2FsZUNvdW50ZG93bigpIHtcclxuICAgICAgICBjb25zdCB7IHR4dFNhbGVDb3VudGRvd25KU09OIH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF0ZV0nKTtcclxuICAgICAgICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAkZWwuZGF0YSgnc2FsZUNvdW50ZG93bkxhYmVsJykgfSk7XHJcblxyXG4gICAgICAgIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHsgdHh0U2FsZUNvdW50ZG93bkpTT04gfSk7XHJcbiAgICAgICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kUmVuZXdpbmdEYXRhUGxhblZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUub2ZmKCdjaGFuZ2UuZXlldmFSZW5ld2luZ0RhdGFQbGFuJywgJ1tuYW1lPVwiYXR0cmlidXRlWzEzMzAzXVwiXScpO1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjaGFuZ2UuZXlldmFSZW5ld2luZ0RhdGFQbGFuJywgJ1tuYW1lPVwiYXR0cmlidXRlWzEzMzAzXVwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpLmZpcnN0KCk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKCRwcm9kdWN0T3B0aW9uc0VsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCAkcmVuZXdpbmdSYWRpbyA9ICRwcm9kdWN0T3B0aW9uc0VsXHJcbiAgICAgICAgICAgIC5maW5kKCdbbmFtZT1cImF0dHJpYnV0ZVsxMzMwM11cIl1bdmFsdWU9XCIxNjk4XCJdJylcclxuICAgICAgICAgICAgLmZpcnN0KCk7XHJcblxyXG4gICAgICAgIGlmICgkcmVuZXdpbmdSYWRpby5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2hvdWxkSGlkZUZpZWxkcyA9ICRyZW5ld2luZ1JhZGlvLmlzKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkSWRzID0gWzEzMzA0LCAxMzMwNSwgMTMzMDZdO1xyXG5cclxuICAgICAgICBmaWVsZElkcy5mb3JFYWNoKGZpZWxkSWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7ZmllbGRJZH1cIl1gKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkSGlkZUZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlSGlkZGVuTW9kaWZpZXJGaWVsZCgkZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgJGZpZWxkLmNzcygnZGlzcGxheScsICdub25lJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1lcnJvcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVTaG93bk1vZGlmaWVyRmllbGQoJGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICRmaWVsZC5jc3MoJ2Rpc3BsYXknLCAnJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVIaWRkZW5Nb2RpZmllckZpZWxkKCRmaWVsZCkge1xyXG4gICAgICAgICRmaWVsZC5maW5kKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkZWwuaXMoJ1tkYXRhLWV5ZXZhLW9yaWdpbmFsLXJlcXVpcmVkXScpKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwuYXR0cignZGF0YS1leWV2YS1vcmlnaW5hbC1yZXF1aXJlZCcsICRlbC5wcm9wKCdyZXF1aXJlZCcpID8gJ3RydWUnIDogJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRlbC5wcm9wKCdyZXF1aXJlZCcsIGZhbHNlKS5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRlbC5pcygnOmNoZWNrYm94LCA6cmFkaW8nKSkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJGVsLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnByb3AoJ3NlbGVjdGVkSW5kZXgnLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRlbC52YWwoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlU2hvd25Nb2RpZmllckZpZWxkKCRmaWVsZCkge1xyXG4gICAgICAgICRmaWVsZC5maW5kKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlcXVpcmVkID0gJGVsLmF0dHIoJ2RhdGEtZXlldmEtb3JpZ2luYWwtcmVxdWlyZWQnKSA9PT0gJ3RydWUnO1xyXG5cclxuICAgICAgICAgICAgJGVsLnByb3AoJ3JlcXVpcmVkJywgb3JpZ2luYWxSZXF1aXJlZCk7XHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwuYXR0cigncmVxdWlyZWQnLCAnJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZWwucmVtb3ZlQXR0cigncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcoZGF0YSwgLi4uYXJncykge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZVZpZXcoZGF0YSwgLi4uYXJncyk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUHJvZHVjdE1ldGFkYXRhKCk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJJbmxpbmVPcHRpb25Ub29sdGlwcygpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVNhbGVQZXJjZW50KGRhdGEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hpcHBpbmdDb3VudGRvd24oZGF0YSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZU1vZGlmaWVyc01vZGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJylcclxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsICFkYXRhPy5wdXJjaGFzYWJsZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsXScpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RpZmllcnNWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VidG90YWwgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5zbGljZSgtMSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9uZVNhbGVzID0gdGhpcy5jdXN0b21GaWVsZE5vbmVTYWxlcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9uUHJpY2VzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzLCBmb3JtRGF0YSwgbm9uZVNhbGVzLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1N1YnRvdGFsKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNhbGVQZXJjZW50KGRhdGEpIHtcclxuICAgICAgICBjb25zdCAkZGl2ID0gdGhpcy4kc2NvcGUuZmluZCgnLnByaWNlLXNlY3Rpb24tLXNhbGVQZXJjZW50Jyk7XHJcbiAgICAgICAgY29uc3QgJHNwYW4gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LXByaWNlLXNhbGUtcGVyY2VudF0nKTtcclxuICAgICAgICBsZXQgc2FsZVBlcmNlbnQgPSAwO1xyXG5cclxuICAgICAgICBpZiAoZGF0YT8ucHJpY2U/LndpdGhvdXRfdGF4Py52YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YT8ucHJpY2U/LnJycF93aXRob3V0X3RheD8udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ycnBfd2l0aG91dF90YXgudmFsdWUpICogMTAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhPy5wcmljZT8ubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXg/LnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSAvIGRhdGEucHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgudmFsdWUpICogMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJpY2U/LndpdGhfdGF4Py52YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YT8ucHJpY2U/LnJycF93aXRoX3RheD8udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ycnBfd2l0aF90YXgudmFsdWUpICogMTAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhPy5wcmljZT8ubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXg/LnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZSAvIGRhdGEucHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgudmFsdWUpICogMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNhbGVQZXJjZW50ID4gMCkge1xyXG4gICAgICAgICAgICAkc3Bhbi50ZXh0KGAtJHtzYWxlUGVyY2VudH0lYCk7XHJcbiAgICAgICAgICAgICRkaXYuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRzcGFuLnRleHQoJycpO1xyXG4gICAgICAgICAgICAkZGl2LmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2hpcHBpbmdDb3VudGRvd24oZGF0YSkge1xyXG4gICAgICAgIGNvbnN0ICRzaGlwcGluZ0NvdW50ZG93biA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXBhcGF0aGVtZXMtc2hpcHBpbmctY291bnRkb3duXScpO1xyXG5cclxuICAgICAgICBpZiAoJHNoaXBwaW5nQ291bnRkb3duLmlzKCc6aGlkZGVuJykgJiYgZGF0YT8ucHVyY2hhc2FibGUpIHtcclxuICAgICAgICAgICAgJHNoaXBwaW5nQ291bnRkb3duLmNzcygnc3R5bGUnLCAnZmxleCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJHNoaXBwaW5nQ291bnRkb3duLmlzKCc6dmlzaWJsZScpICYmICFkYXRhPy5wdXJjaGFzYWJsZSkge1xyXG4gICAgICAgICAgICAkc2hpcHBpbmdDb3VudGRvd24uaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYXJ0Q29udGVudCguLi5hcmdzKSB7XHJcbiAgICAgICAgLy8gY2xvc2UgbW9kaWZpZXJzIG1vZGFsIGFmdGVyIGFkZGVkIHByb2R1Y3QgdG8gY2FydFxyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZU1vZGlmaWVyc01vZGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RpZmllcnNNb2RhbCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aWV3TW9kYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRwcmVNb2RhbEZvY3VzZWRFbCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZUNhcnRDb250ZW50KC4uLmFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UsIC4uLmFyZ3MpIHtcclxuICAgICAgICBzdXBlci5zaG93UHJvZHVjdEltYWdlKGltYWdlLCAuLi5hcmdzKTtcclxuXHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsSW1nID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWltZ10nKTtcclxuICAgICAgICBjb25zdCB7IG1haW5JbWFnZVVybCwgem9vbUltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQgfSA9IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZTtcclxuXHJcbiAgICAgICAgaWYgKG1haW5JbWFnZVVybCAmJiBtYWluSW1hZ2VVcmwgIT09ICRtb2RpZmllcnNNb2RhbEltZy5hdHRyKCdzcmMnKSkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxJbWdcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScsIHpvb21JbWFnZVVybCk7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgbWFpbiBpbWFnZSBpbiBxdWljay12aWV3IG9uIG1vYmlsZVxyXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChfaSwgZWwpID0+ICQoZWwpLmNsb3Nlc3QoJ1tkYXRhLWltYWdlLWdhbGxlcnldJykubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvcm1hdCBwcmljZSB3aXRoIGN1cnJlbmN5IHN5bWJvbCBhbmQgZGVjaW1hbCBwbGFjZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGx1c1N5bWJvbCB3aGV0aGVyIHRvIHNob3cgcGx1cyBzeW1ib2wgZm9yIHBvc2l0aXZlIHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBmb3JtYXRQcmljZSh2YWx1ZSwgcGx1c1N5bWJvbCA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGNhY2hlZFNldHRpbmdzID8ge1xyXG4gICAgICAgICAgICBjdXJyZW5jeV90b2tlbjogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5zeW1ib2wsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5X2xvY2F0aW9uOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LnN5bWJvbFBsYWNlbWVudCxcclxuICAgICAgICAgICAgZGVjaW1hbF90b2tlbjogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5kZWNpbWFsVG9rZW4sXHJcbiAgICAgICAgICAgIGRlY2ltYWxfcGxhY2VzOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LmRlY2ltYWxQbGFjZXMsXHJcbiAgICAgICAgICAgIHRob3VzYW5kc190b2tlbjogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS50aG91c2FuZHNUb2tlbixcclxuICAgICAgICB9IDoge307XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gY3VycmVuY3lGb3JtYXQoLXZhbHVlLCBkaXNwbGF5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHBsdXNTeW1ib2wgPyBgLSR7Zm9ybWF0dGVkfWAgOiBmb3JtYXR0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBjdXJyZW5jeUZvcm1hdCh2YWx1ZSwgZGlzcGxheSk7XHJcbiAgICAgICAgcmV0dXJuIHBsdXNTeW1ib2wgPyBgKyR7Zm9ybWF0dGVkfWAgOiBmb3JtYXR0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIG9wdGlvbiB2YWx1ZSBieSBvcHRpb24gbmFtZSBhbmQgdmFsdWUgbmFtZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25OYW1lIG9wdGlvbiBkaXNwbGF5IG5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZU5hbWUgdmFsdWUgbGFiZWxcclxuICAgICAqIEByZXR1cm5zIHtbbnVtYmVyLCBudW1iZXJdfSBvcHRpb25JZCwgdmFsdWVJZFxyXG4gICAgICovXHJcbiAgICBmaW5kT3B0aW9uVmFsdWUob3B0aW9uTmFtZSwgdmFsdWVOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgaGlkZUlmT3B0aW9uID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGRpc3BsYXlfbmFtZSB9KSA9PiBkaXNwbGF5X25hbWUucmVwbGFjZSgnLzo7L2cnLCAnJykucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnRvTG93ZXJDYXNlKCkgPT09IG9wdGlvbk5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBoaWRlSWZPcHRpb24/LnZhbHVlcz8uZmluZCgoeyBsYWJlbCB9KSA9PiBsYWJlbC5yZXBsYWNlKCcvOjsvZycsICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudG9Mb3dlckNhc2UoKSA9PT0gdmFsdWVOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbklkID0gaGlkZUlmT3B0aW9uPy5pZDtcclxuICAgICAgICBjb25zdCB2YWx1ZUlkID0gdmFsdWU/LmlkO1xyXG4gICAgICAgIHJldHVybiBbb3B0aW9uSWQsIHZhbHVlSWRdO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1vZGlmaWVyc01vZGFsKCkge1xyXG4gICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbWFpbl0nKS5hdHRyKCdkYXRhLXpvb20taW1hZ2UnKTtcclxuICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJykuYXR0cignZGF0YS1zcmNzZXQnKTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJGF0dHJpYnV0ZU1lc3NhZ2VXcmFwcGVyID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1hdHRyaWJ1dGVzLW1lc3NhZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydFdyYXBwZXIgPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1hZGQtdG8tY2FydC13cmFwcGVyXScpO1xyXG4gICAgICAgIGNvbnN0ICRjaG9vc2VPcHRpb25zQnRuID0gJGZvcm0uZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLm1vZGlmaWVyc01vZGFsVGVtcGxhdGUsIHtcclxuICAgICAgICAgICAgdHh0Q29udGludWU6IHRoaXMuY29udGV4dC50eHRDb250aW51ZSxcclxuICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LXRpdGxlXScpLmh0bWwoKSxcclxuICAgICAgICAgICAgbWFpbkltYWdlVXJsOiB0aGlzLmltYWdlR2FsbGVyeS5jdXJyZW50SW1hZ2UubWFpbkltYWdlVXJsIHx8IG1haW5JbWFnZVVybCxcclxuICAgICAgICAgICAgem9vbUltYWdlVXJsOiB0aGlzLmltYWdlR2FsbGVyeS5jdXJyZW50SW1hZ2Uuem9vbUltYWdlVXJsIHx8IHpvb21JbWFnZVVybCxcclxuICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiB0aGlzLmltYWdlR2FsbGVyeS5jdXJyZW50SW1hZ2UubWFpbkltYWdlU3Jjc2V0IHx8IG1haW5JbWFnZVNyY3NldCxcclxuICAgICAgICB9LCBudWxsLCBbJzwlJywgJyU+J10pKS5hcHBlbmRUbygkcHJvZHVjdE9wdGlvbnNFbCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb21wbGV0ZSA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29tcGxldGVdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ2xvc2UgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNsb3NlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENvbnRpbnVlID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250aW51ZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxCYWNrID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1iYWNrXScpO1xyXG5cclxuICAgICAgICAvLyBtb3ZlIG1vZGlmaWVyIG9wdGlvbnMgdG8gdGhlIG1vZGFsXHJcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtc3RhdGU9XCJtb2RpZmllclwiXScpLmFwcGVuZFRvKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBtb3ZlIGFkZCB0byBjYXJ0ICYgcXR5IGJveCB0byB0aGUgbW9kYWxcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxDb21wbGV0ZS5hcHBlbmQoJGFkZFRvQ2FydFdyYXBwZXIpO1xyXG5cclxuICAgICAgICAvLyBjbG9uZSBwdXJjaGFzYWJsZSBtZXNzYWdlXHJcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuZmluZCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnKS5jbG9uZSgpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygkYXR0cmlidXRlTWVzc2FnZVdyYXBwZXIpO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxDbG9zZS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RpZmllcnNNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxCYWNrLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5nb0JhY2tTdGVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENvbnRpbnVlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgYW5kIHJlcG9ydCBpbnZhbGlkIGlucHV0cyBpZiBhbnlcclxuICAgICAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMuc2xpY2UoLTEpWzBdIHx8IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBpbnZhbGlkSW5wdXRzID0gc2hvd09wdGlvbklkcy5yZWR1Y2UoKF9pbnZhbGlkSW5wdXRzLCBvcHRpb25JZCkgPT4gKFtcclxuICAgICAgICAgICAgICAgIC4uLl9pbnZhbGlkSW5wdXRzLFxyXG4gICAgICAgICAgICAgICAgLi4uJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKGBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbklkfV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVtkYXldXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbklkfV1bbW9udGhdXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbklkfV1beWVhcl1cIl1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZWwgPT4gIWVsLmNoZWNrVmFsaWRpdHkoKSksXHJcbiAgICAgICAgICAgIF0pLCBbXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW52YWxpZElucHV0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW52YWxpZElucHV0c1swXS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhdXRvIHNlbGVjdCB0aGUgJ25vbmUnIG9wdGlvbiBpZiBubyByYWRpbyBvcHRpb24gb3Igbm8gcHJvZHVjdCBwaWNrIGxpc3Qgb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgIHNob3dPcHRpb25JZHMuZm9yRWFjaChvcHRpb25JZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkcmFkaW9zID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbklkfV1cIl1gKTtcclxuICAgICAgICAgICAgICAgIGlmICgkcmFkaW9zLmxlbmd0aCA+IDAgJiYgJHJhZGlvcy5maWx0ZXIoJzpjaGVja2VkJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBhZnRlciBjbGlja2luZyBjb250aW51ZSBidXR0b24sIHVwZGF0ZSB0aGUgbW9kaWZpZXJzIHZpZXcgYXV0b21hdGljYWxseVxyXG4gICAgICAgICAgICB0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RpZmllcnNWaWV3KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRjaG9vc2VPcHRpb25zQnRuLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlcXVpcmUgc2VsZWN0aW5nIHZhcmlhbnQgb3B0aW9ucyBiZWZvcmUgb3BlbmluZyB0aGUgbW9kYWxcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVWYXJpYW50T3B0aW9ucygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRNb2RpZmllcnNWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RpZmllcnNNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGlmaWVyc01vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5hZGRDbGFzcygnaXMtb3BlbicpXHJcbiAgICAgICAgICAgIC5iZWZvcmUodGhpcy5tb2RpZmllcnNNb2RhbE92ZXJsYXlUZW1wbGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RpZmllcnNNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3ZlcmxheV0nKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TW9kaWZpZXJzVmlldygpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcclxuICAgICAgICAgICAgLm5vdCgnW3R5cGU9XCJjaGVja2JveFwiXSwgW3R5cGU9XCJyYWRpb1wiXSwgW3R5cGU9XCJmaWxlXCJdJylcclxuICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykudmFsKCcnKTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIGZsYWcgYW55IGlucHV0L3NlbGVjdCBpcyBub3Qgc2hvd24geWV0IHNvIHRoYXQgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpcyBzaG93blxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW25hbWVePVwiYXR0cmlidXRlXCJdJykucmVtb3ZlQXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAvLyByZXNldCBtb2RhbCB0byB1cGRhdGUgdGhpcyB2aWV3IGF1dG9tYXRpY2FsbHkgd2hlbiBvcHRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAgICB0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29udGFpbnMgYWxsIG9wdGlvbiBpZHMgdGhhdCBhcmUgc2hvd24gaW4gZWFjaCBzdGVwXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcltdW119XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gcmVzZXQgdGhlIHNob3duIG9wdGlvbiBpZHMgaW4gYWxsIHN0ZXBzXHJcbiAgICAgICAgdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBOb24tc2FsZSBwcmljZXMgZm9yIG9wdGlvbiB2YWx1ZXMuXHJcbiAgICAgICAgICogUHVsbGluZyBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWAuXHJcbiAgICAgICAgICogUG9wdWxhdGVkIGluIGB1cGRhdGVNb2RpZmllcnNWaWV3KClgLlxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH0gfX1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1c3RvbUZpZWxkTm9uZVNhbGVzID0ge307XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBtb2RpZmllcnMgbW9kYWwgYXNhcCBzbyB0aGF0IG5vdCBhbGwgb3B0aW9ucyBhcmUgZGlzcGxheWVkXHJcbiAgICAgICAgdGhpcy51cGRhdGVNb2RpZmllcnNWaWV3KHsgaWdub3JlQVBJQ2FsbDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWwudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGwgPSBmYWxzZSB9ID0ge30pIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQmFjayA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1iYWNrXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5ID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXN1bW1hcnldJykuZW1wdHkoKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxUaXRsZSA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC10aXRsZV0nKS5lbXB0eSgpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEZvb3RlciA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXJdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ29udGludWUgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGludWVdJykuaGlkZSgpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcclxuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0V3JhcHBlciA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLWFkZC10by1jYXJ0LXdyYXBwZXJdJykuaGlkZSgpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtWzBdKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBmb3JtRGF0YTogJywgQXJyYXkuZnJvbShmb3JtRGF0YS5lbnRyaWVzKCkpKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3VycmVudCBvcHRpb24gaWQgdGhhdCBhcHBlYXJzIGFsb25lIHdpdGhvdXQgYW55IGdyb3VwLlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ8dW5kZWZpbmVkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBjdXJyZW50T3B0aW9uSWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1cnJlbnQgZ3JvdXAgbmFtZSB0aGF0IHRoZSBvcHRpb24gYmVsb25ncyB0by5cclxuICAgICAgICAgKiBHcm91cCBuYW1lIHRoYXQgYXBwZWFycyBjdXN0b20gZmllbGQgYF9fQGdyb3VwIChncm91cCBuYW1lKWBcclxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgY3VycmVudEdyb3VwTmFtZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT3B0aW9uIGlkcyBvZiBvcHRpb24gbmFtZXMgYXBwZWFyIGluIHRoZSB2YWx1ZSBvZiBjdXN0b20gZmllbGQgYF9fQGdyb3VwYC5cclxuICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAqICAgQ3VzdG9tIGZpZWxkOiBgX19AZ3JvdXAgU2VsZWN0IGEgcHJlc2NyaXB0aW9uIHR5cGVgID0gYHByZXNjcmlwdGlvbiB0eXBlYFxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBjdXJyZW50R3JvdXBPcHRpb25JZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogb3B0aW9uIGlkcyBzaG91bGQgYmUgaGlkZGVuXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcltdfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGhpZGVPcHRpb25JZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtvcHRpb25JZDogbnVtYmVyLCB2YWx1ZUlkOiBudW1iZXJ9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBoaWRlT3B0aW9uVmFsdWVzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRvb2x0aXBzIGZvciBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzIGV4dHJhY3RlZCBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQHRvb2x0aXAgbmFtZVs6dmFsdWVdID0gdG9vbHRpcGBcclxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0PG51bWJlciwgeyB0b29sdGlwOiBzdHJpbmcsIHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0+XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgdG9vbHRpcHMgPSB7fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVG9vbHRpcCBoZWFkaW5ncyBmb3Igb3B0aW9uIHZhbHVlcyBleHRyYWN0ZWQgZnJvbSBjdXN0b20gZmllbGRzIGBfX0B0b29sdGlwX2hlYWRpbmcgbmFtZTp2YWx1ZSA9IHRvb2x0aXAgaGVhZGluZ2BcclxuICAgICAgICAgKiBAdHlwZSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH19XHJcbiAgICAgICAgICogQGV4YW1wbGUgeyAyOiB7IDEyMzogJ1Rvb2x0aXAgSGVhZGluZycgfSB9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgdG9vbHRpcEhlYWRpbmdzID0ge307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE5vbi1zYWxlIHByaWNlcyBmb3Igb3B0aW9uIHZhbHVlcy5cclxuICAgICAgICAgKiBDYW4gYmUgb3ZlcnJpZGRlbiBieSBjdXN0b20gZmllbGRzIGBfX0Bub25zYWxlIHByaWNlID0gb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZVs7IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWU7IC4uLl1gXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfSB9fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IG5vbmVTYWxlcyA9IHt9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcHRpb24gcmVuYW1lcyBleHRyYWN0ZWQgZnJvbSBjdXN0b20gZmllbGRzIGBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZWBcclxuICAgICAgICAgKiBAdHlwZSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHN0cmluZyB9fVxyXG4gICAgICAgICAqIEBleGFtcGxlIHsgMTIzOiAnTmV3IE5hbWUnLCA0NTY6ICdBbm90aGVyIE5hbWUnIH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBvcHRpb25SZW5hbWVzID0ge307XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnMuZmlsdGVyKCh7IHN0YXRlIH0pID0+IHN0YXRlID09PSAnbW9kaWZpZXInKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJyVjUHJvZHVjdERldGFpbHMgLSBvcHRpb246ICcsICdjb2xvcjogY3lhbicsIG9wdGlvbi5kaXNwbGF5X25hbWUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhpZGVPcHRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBGaXJzdCBncm91cCBuYW1lIHRoYXQgdGhlIG9wdGlvbiBiZWxvbmdzIHRvLlxyXG4gICAgICAgICAgICAgKiBHcm91cCBuYW1lIHRoYXQgYXBwZWFycyBjdXN0b20gZmllbGQgYF9fQGdyb3VwIChncm91cCBuYW1lKWBcclxuICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBOYW1lO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE9wdGlvbiBpZHMgb2Ygb3B0aW9uIG5hbWVzIGFwcGVhciBpbiB0aGUgdmFsdWUgb2YgY3VzdG9tIGZpZWxkIGBfX0Bncm91cGAuXHJcbiAgICAgICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICAgICAqICAgQ3VzdG9tIGZpZWxkOiBgX19AZ3JvdXAgU2VsZWN0IGEgcHJlc2NyaXB0aW9uIHR5cGVgID0gYHByZXNjcmlwdGlvbiB0eXBlYFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPnx1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBPcHRpb25JZHM7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSByYWRpbyB0eXBlIGFuZCBoYXMgJ25vbmUnIHZhbHVlIGNoZWNrZWRcclxuICAgICAgICAgICAgY29uc3QgaXNOb25lUmFkaW9DaGVja2VkID0gJGZvcm0uZmluZChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXVt2YWx1ZT1cIlwiXWApLnByb3AoJ2NoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIGZpbGUgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkZmlsZSA9ICRmb3JtLmZpbmQoYGlucHV0W3R5cGU9XCJmaWxlXCJdW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBpc0ZpbGVTaG93biA9ICRmaWxlLmxlbmd0aCA+IDAgJiYgJGZpbGUuYXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgb3B0aW9uYWwgZGF0ZSB0eXBlIGFuZCBhbHJlYWR5IHNob3duIGFmdGVyIG1vZGFsIHNob3duXHJcbiAgICAgICAgICAgIGNvbnN0ICRkYXRlID0gJGZvcm0uZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVtkYXldXCJdLCBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dW21vbnRoXVwiXSwgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVt5ZWFyXVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBpc09wdGlvbmFsRGF0ZVNob3duID0gJGRhdGUubGVuZ3RoID4gMCAmJiAhb3B0aW9uLnJlcXVpcmVkICYmICRkYXRlLmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIG9wdGlvbmFsIHNlbGVjdCB0eXBlIGFuZCBhbHJlYWR5IHNob3duIGFmdGVyIG1vZGFsIHNob3duXHJcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkZm9ybS5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT3B0aW9uYWxTZWxlY3RTaG93biA9ICRzZWxlY3QubGVuZ3RoID4gMCAmJiAhb3B0aW9uLnJlcXVpcmVkICYmICRzZWxlY3QuYXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgb3B0aW9uYWwgdGV4dCAvIG11bHRpbGluZSAvIG51bWJlciB0eXBlIGFuZCBhbHJlYWR5IHNob3duIGFmdGVyIG1vZGFsIHNob3duXHJcbiAgICAgICAgICAgIGNvbnN0ICR0ZXh0ID0gJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIHRleHRhcmVhJykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT3B0aW9uYWxUZXh0U2hvd24gPSAkdGV4dC5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJHRleHQuYXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybVZhbHVlID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm1WYWx1ZSAmJiAhKGZvcm1WYWx1ZSBpbnN0YW5jZW9mIEZpbGUpXHJcbiAgICAgICAgICAgICAgICB8fCBpc05vbmVSYWRpb0NoZWNrZWQgfHwgaXNGaWxlU2hvd24gfHwgaXNPcHRpb25hbERhdGVTaG93biB8fCBpc09wdGlvbmFsU2VsZWN0U2hvd24gfHwgaXNPcHRpb25hbFRleHRTaG93blxyXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVtkYXldYClcclxuICAgICAgICAgICAgICAgIHx8IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bbW9udGhdYClcclxuICAgICAgICAgICAgICAgIHx8IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1beWVhcl1gKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaGlkZSBvcHRpb24gaWYgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgaGlkZU9wdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb246ICcsIGhpZGVPcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tRmllbGRzLmZvckVhY2goY3VzdG9tRmllbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQGhpZGVfaWYgKC4qKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVJZk1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoSGlkZUlmKHsgY3VzdG9tRmllbGQsIGZvcm1EYXRhLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpZGVJZk1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb24gPSBoaWRlSWZNYXRjaC5oaWRlT3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uVmFsdWVzLnB1c2goLi4uaGlkZUlmTWF0Y2guaGlkZU9wdGlvblZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdyb3VwTmFtZSAmJiAhaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0Bncm91cCAoLiopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwTWF0Y2ggPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hHcm91cCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cE5hbWUgPSBncm91cE1hdGNoLmdyb3VwTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwT3B0aW9uSWRzID0gZ3JvdXBNYXRjaC5ncm91cE9wdGlvbklkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQHRvb2x0aXAgbmFtZVs6dmFsdWVdID0gdG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b29sdGlwTWF0Y2ggPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcHNbb3B0aW9uLmlkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBzW29wdGlvbi5pZF0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB0b29sdGlwTWF0Y2gudG9vbHRpcCB8fCB0b29sdGlwc1tvcHRpb24uaWRdPy50b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcHM6IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBzW29wdGlvbi5pZF0/LnZhbHVlVG9vbHRpcHMsIHRvb2x0aXBNYXRjaC52YWx1ZVRvb2x0aXBzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0B0b29sdGlwX2hlYWRpbmcgbmFtZTp2YWx1ZSA9IHRvb2x0aXAgaGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBIZWFkaW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSwgdmFsdWVUb29sdGlwSGVhZGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AcmVuYW1lIG9wdGlvbiBuYW1lID0gbmV3IG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFJlbmFtZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25SZW5hbWVzW29wdGlvbi5pZF0gPSBuZXdOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0Bub25zYWxlIHByaWNlID0gb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZVs7IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWU7IC4uLl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVOb25TYWxlcyA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaE5vblNhbGUoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG5vbmVTYWxlcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW29wdGlvbi5pZF06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ub25lU2FsZXNbb3B0aW9uLmlkXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZU5vblNhbGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPT09IDAgJiYgIWN1cnJlbnRPcHRpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIHZpc2libGUgb3B0aW9uIGJlZm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIGdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE5hbWUgPSBncm91cE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cE9wdGlvbklkcyA9IGdyb3VwT3B0aW9uSWRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRHcm91cE5hbWU6ICR7Y3VycmVudEdyb3VwTmFtZX0sIGN1cnJlbnRHcm91cE9wdGlvbklkczogJHtjdXJyZW50R3JvdXBPcHRpb25JZHN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhbmQtYWxvbmUgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcHRpb25JZCA9IG9wdGlvbi5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXJyZW50T3B0aW9uSWQ6ICR7Y3VycmVudE9wdGlvbklkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGhpZGVPcHRpb25JZHMucHVzaChvcHRpb24uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBPcHRpb25JZHMubGVuZ3RoID4gMCAmJiBoaWRlT3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGhpZGRlbiBvcHRpb25zIGZyb20gdGhlIGN1cnJlbnQgZ3JvdXBcclxuICAgICAgICAgICAgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gY3VycmVudEdyb3VwT3B0aW9uSWRzLmZpbHRlcihpZCA9PiAhaGlkZU9wdGlvbklkcy5pbmNsdWRlcyhpZCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRHcm91cE9wdGlvbklkczogJHtjdXJyZW50R3JvdXBPcHRpb25JZHN9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRPcHRpb25JZDogJywgY3VycmVudE9wdGlvbklkKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRHcm91cE5hbWU6ICcsIGN1cnJlbnRHcm91cE5hbWUpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwT3B0aW9uSWRzOiAnLCBjdXJyZW50R3JvdXBPcHRpb25JZHMpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvblZhbHVlczogJywgaGlkZU9wdGlvblZhbHVlcyk7XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIG5vbi1zYWxlIHByaWNlcyBvZiBvcHRpb24gdmFsdWVzXHJcbiAgICAgICAgLy8gdG8gdXNlIHdoZW4gdXBkYXRpbmcgb3B0aW9uIHByaWNlcyBvbmx5IHdpdGhvdXQgdXBkYXRlIHRoZSB3aG9sZSBtb2RpZmllcnMgdmlld1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jdXN0b21GaWVsZE5vbmVTYWxlcywgbm9uZVNhbGVzKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSURzIG9mIG9wdGlvbnMgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIGF0IHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcclxuICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA+IDAgPyBjdXJyZW50R3JvdXBPcHRpb25JZHNcclxuICAgICAgICAgICAgOiAoY3VycmVudE9wdGlvbklkID8gW2N1cnJlbnRPcHRpb25JZF0gOiBbXSk7XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHRoZSBzaG93biBvcHRpb24gaWRzIG9mIHRoZSBjdXJyZW50IHN0ZXAgdG8gdGhlIHN0YWNrXHJcbiAgICAgICAgLy8gaWYgbm90IHRoZSBzYW1lIGFzIHRoZSBwcmV2aW91cyBzdGVwLlxyXG4gICAgICAgIC8vIHRoaXMgaXMgdXNlZCB0byBuYXZpZ2F0ZSBiYWNrIHRvIHRoZSBwcmV2aW91cyBzdGVwLlxyXG4gICAgICAgIGlmICh0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICB8fCAhYXJlQXJyYXlzRXF1YWxVbm9yZGVyZWQodGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5zbGljZSgtMSlbMF0sIHNob3dPcHRpb25JZHMpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMucHVzaChzaG93T3B0aW9uSWRzKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBzdGFja2VkU2hvd09wdGlvbklkczogJywgdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaG93IC8gaGlkZSBiYWNrIGJ1dHRvblxyXG4gICAgICAgIGlmICh0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsQmFjay5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsQmFjay5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzaG93IGZvb3RlciwgYW5kIGhpZGUgaXQgaWYgbm8gbW9yZSBvcHRpb24gc2hvd25cclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEZvb3Rlci5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsRm9vdGVyLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgbW9kYWwgdGl0bGUgZnJvbSB0aGUgY3VzdG9tIGZpZWxkIGBfX0Bncm91cCAoZ3JvdXAgbmFtZSlgIG9yIG9wdGlvbiBkaXNwbGF5IG5hbWVcclxuICAgICAgICBpZiAoY3VycmVudEdyb3VwTmFtZSkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5odG1sKGN1cnJlbnRHcm91cE5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBvcHRpb25SZW5hbWVzW3Nob3dPcHRpb25JZHNbMF1dIHx8IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gc2hvd09wdGlvbklkc1swXSk/LmRpc3BsYXlfbmFtZTtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUudGV4dCh0aXRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBoaWRlIHRoZSBvcHRpb24gbmFtZSB3aGVuIGhlcmUgaXMgb25seSAxIG9wdGlvbiBzaG93biBpbiB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke3Nob3dPcHRpb25JZHNbMF19XCJdIC5mb3JtLWxhYmVsYCkuZmlyc3QoKS5oaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0gLmZvcm0tbGFiZWwnKS5maXJzdCgpLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpc3BsYXkgY3VycmVudCBwcm9kdWN0IG9wdGlvbnNcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkXScpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnX3Nob3cnKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChfLCBlbCkgPT4gIXNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKCQoZWwpLmRhdGEoJ3Byb2R1Y3QtYXR0cmlidXRlLWlkJykpKSlcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdfc2hvdycpO1xyXG5cclxuICAgICAgICAvLyBSZW5hbWUgdGhlIHNob3duIG9wdGlvbnMgaWYgbmVlZGVkXHJcbiAgICAgICAgc2hvd09wdGlvbklkcy5mb3JFYWNoKG9wdGlvbklkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IG9wdGlvblJlbmFtZXNbb3B0aW9uSWRdO1xyXG4gICAgICAgICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdIC5mb3JtLWxhYmVsYCkuZmlyc3QoKS5odG1sKG5ld05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNob3cgdG9vbHRpcCBmb3IgZ3JvdXBcclxuICAgICAgICBpZiAoY3VycmVudEdyb3VwTmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBUb29sdGlwID0gJyc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcy5mb3JFYWNoKGN1c3RvbUZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZ3JvdXBUb29sdGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUb29sdGlwID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcEdyb3VwKHsgY3VzdG9tRmllbGQsIGdyb3VwTmFtZTogY3VycmVudEdyb3VwTmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3JvdXBUb29sdGlwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25Ub29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCBncm91cFRvb2x0aXApKTtcclxuICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNob3cgdG9vbHRpcCBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9uVG9vbHRpcHMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsVGl0bGUsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MsIHNob3dPcHRpb25JZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHNob3duIG9wdGlvbnMgYW5kIGRpc3BsYXkgQ29udGludWUgYnV0dG9uIGlmIG5lZWRlZC5cclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVEZWZhdWx0T3B0aW9uVmFsdWVzKHNob3dPcHRpb25JZHMsICRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbENvbnRpbnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpc3BsYXkgcHJpY2VzIGZvciBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgICAgaWYgKCFpZ25vcmVBUElDYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVNob3dPcHRpb25QcmljZXNQcmVsb2FkZXIoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gc2hvdyBzdW1tYXJ5IGJ1dCBwcmVsb2FkZXIgZm9yIHByaWNlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3VtbWFyeSgkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5LCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgJG1vZGlmaWVyc01vZGFsVGl0bGUsICRhZGRUb0NhcnRXcmFwcGVyLCBmb3JtRGF0YSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2hvd09wdGlvblByaWNlcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcywgZm9ybURhdGEsIG5vbmVTYWxlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaG93IHN1bW1hcnkgY29udGVudCBpZiBubyBvcHRpb24gdmlzaWJsZSBvbiB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1N1bW1hcnkoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSwgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsICRtb2RpZmllcnNNb2RhbFRpdGxlLCAkYWRkVG9DYXJ0V3JhcHBlciwgZm9ybURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIHJlcXVpcmVkIHZhcmlhbnQgb3B0aW9ucyBhbmQgcmVwb3J0IGVycm9yIGZvciB0aGUgZmlyc3QgaW52YWxpZCBvcHRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlVmFyaWFudE9wdGlvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtWzBdKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW52YWxpZCA9IHRoaXMucHJvZHVjdE9wdGlvbnMuZmlsdGVyKCh7IHN0YXRlIH0pID0+IHN0YXRlID09PSAndmFyaWFudF9vcHRpb24nKS5maW5kKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb24ucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gUmVxdWlyZWQgb3B0aW9uIFwiJHtvcHRpb24uZGlzcGxheV9uYW1lfVwiIGlzIG5vdCBzZWxlY3RlZGApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGludmFsaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSAkZm9ybS5maW5kKGBbbmFtZT1cImF0dHJpYnV0ZVske2ludmFsaWQuaWR9XVwiXWApWzBdO1xyXG4gICAgICAgICAgICBlbC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2tTdGVwKCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSBbXHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMucG9wKCksIC8vIGN1cnJlbnQgc3RlcCdzIHNob3duIG9wdGlvbiBpZHNcclxuICAgICAgICAgICAgLi4udGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5wb3AoKSwgLy8gcHJldmlvdXMgc3RlcCdzIHNob3duIG9wdGlvbiBpZHNcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvLyByZXNldCB2YWx1ZXMgb2Ygc2hvd24gb3B0aW9uIGlkcyBpbiBjdXJyZW50IHN0ZXAgJiBwcmV2aW91cyBzdGVwXHJcbiAgICAgICAgLy8gdG8gZGlzcGxheSBwcmV2aW91cyBzdGVwIGFnYWluLlxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkXScpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChfaSwgZWwpID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKCQoZWwpLmF0dHIoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQnKSkpKTtcclxuXHJcbiAgICAgICAgICAgICRvcHRpb24uZmluZCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxyXG4gICAgICAgICAgICAgICAgLm5vdCgnW3R5cGU9XCJjaGVja2JveFwiXSwgW3R5cGU9XCJyYWRpb1wiXSwgW3R5cGU9XCJmaWxlXCJdJylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnZhbCgnJyk7XHJcblxyXG4gICAgICAgICAgICAkb3B0aW9uLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAkb3B0aW9uLmZpbmQoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnJlbW92ZUF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgdXBkYXRlIGRpc3BsYXkgcHJldmlvdXMgb3B0aW9ucyBvbiBtb2RpZmllcnMgbW9kYWxcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RpZmllcnNWaWV3KHsgaWdub3JlQVBJQ2FsbDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgY2hhbmdlIGV2ZW50IHRvIHVwZGF0ZSBwcmljZXMgJiBkYXRhIGJlbG9uZ3MgdG8gQkNcclxuICAgICAgICAgICAgJHByb2R1Y3RPcHRpb25zRWwudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiBzaG91bGQgYmUgaGlkZGVuIGJhc2VkIG9uIHRoZSBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt7XHJcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XHJcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIGZvcm1EYXRhOiBGb3JtRGF0YSxcclxuICAgICAqICAgb3B0aW9uOiB7XHJcbiAgICAgKiAgICAgaWQ6IE51bWJlcixcclxuICAgICAqICAgICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBpZDogTnVtYmVyLFxyXG4gICAgICogICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9XHJcbiAgICAgKiB9fSBwYXJhbTBcclxuICAgICAqIEByZXR1cm5zIHt7IGhpZGVPcHRpb246IGJvb2xlYW4sIGhpZGVPcHRpb25WYWx1ZXM6IEFycmF5PHtvcHRpb25JZDogbnVtYmVyLCB2YWx1ZUlkOiBudW1iZXJ9PiB9IHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoSGlkZUlmKHsgY3VzdG9tRmllbGQsIGZvcm1EYXRhLCBvcHRpb24gfSkge1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VzdG9tRmllbGRNYXRjaEhpZGVJZjogY2ZfbmFtZSA9ICR7Y3VzdG9tRmllbGQubmFtZX0gOyBvcF9uYW1lID0gJHtvcHRpb24uZGlzcGxheV9uYW1lfWApO1xyXG4gICAgICAgIGxldCBoaWRlT3B0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgaGlkZU9wdGlvblZhbHVlcyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQGhpZGVfaWZcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKCFtKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgaGlkZUlmT3B0aW9ucyA9IG1bMV0uc3BsaXQoJzsnKS5tYXAoa3YgPT4ga3Yuc3BsaXQoJzonLCAyKSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XHJcbiAgICAgICAgICAgIG5hbWU6IGtleS50cmltKCksXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSA/IHZhbHVlLnRyaW0oKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBoaWRlSWZPcHRpb25zOiAke2hpZGVJZk9wdGlvbnMubWFwKCh7IG5hbWUsIHZhbHVlIH0pID0+ICh2YWx1ZSA/IGAke25hbWV9OiAke3ZhbHVlfWAgOiBuYW1lKSkuam9pbignOyAnKX1gKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB0aGVuT3B0aW9ucyA9IGN1c3RvbUZpZWxkLnZhbHVlLnNwbGl0KCc7JykubWFwKGt2ID0+IGt2LnNwbGl0KCc6JywgMikpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lOiBrZXkudHJpbSgpLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgPyB2YWx1ZS50cmltKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdGhlbk9wdGlvbnM6ICR7dGhlbk9wdGlvbnMubWFwKCh7IG5hbWUsIHZhbHVlIH0pID0+ICh2YWx1ZSA/IGAke25hbWV9OiAke3ZhbHVlfWAgOiBuYW1lKSkuam9pbignOyAnKX1gKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRmxhZyB0byBjaGVjayBpZiBvcHRpb246dmFsdWUgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AaGlkZV9pZmAgbWF0Y2hlcyB3aXRoIGN1cnJlbnQgZm9ybSBkYXRhXHJcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGhpZGVJZk1hdGNoID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgb3B0aW9uOnZhbHVlIGluIGN1c3RvbSBmaWVsZCBgX19AaGlkZV9pZmAgbWF0Y2hlcyB3aXRoIGN1cnJlbnQgZm9ybSBkYXRhXHJcbiAgICAgICAgaGlkZUlmT3B0aW9ucy5mb3JFYWNoKCh7IG5hbWUsIHZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW29wdGlvbklkLCB2YWx1ZUlkXSA9IHRoaXMuZmluZE9wdGlvblZhbHVlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgZm9ybVZhbHVlID0gTnVtYmVyKGZvcm1EYXRhLmdldEFsbChgYXR0cmlidXRlWyR7b3B0aW9uSWR9XWApLnNsaWNlKC0xKVswXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybVZhbHVlID09PSB2YWx1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlSWZNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVJZk1hdGNoOiAnLCBoaWRlSWZNYXRjaCk7XHJcblxyXG4gICAgICAgIGlmIChoaWRlSWZNYXRjaCkge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBvcHRpb24gc2hvdWxkIGJlIGhpZGRlbiB3aGVuIG1hdGNoaW5nIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgXHJcbiAgICAgICAgICAgIHRoZW5PcHRpb25zLmZvckVhY2goKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBjdXN0b20gZmllbGQgdmFsdWUgY29udGFpbiBvcHRpb24gbmFtZSB3aXRob3V0IHZhbHVlLCB0aGVuIGhpZGUgdGhlIHdob2xlIG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uOiAnLCBoaWRlT3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbi52YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCBoaWRlIHRoZSBzcGVjaWZpYyB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlcy5mb3JFYWNoKCh7IGxhYmVsLCBpZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcobGFiZWwsIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9oaWRlT3B0aW9uVmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbklkOiBvcHRpb24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlSWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvblZhbHVlcy5wdXNoKF9oaWRlT3B0aW9uVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvblZhbHVlOiAnLCBfaGlkZU9wdGlvblZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoaWRlT3B0aW9uIHx8IGhpZGVPcHRpb25WYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBoaWRlT3B0aW9uLCBoaWRlT3B0aW9uVmFsdWVzIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBncm91cCBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0Bncm91cGBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgb3B0aW9uOiB7XHJcbiAgICAgKiAgICAgaWQ6IE51bWJlcixcclxuICAgICAqICAgfSxcclxuICAgICAqIEByZXR1cm5zIHt7IGdyb3VwTmFtZTogc3RyaW5nLCBncm91cE9wdGlvbklkczogQXJyYXk8bnVtYmVyPiB9IHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoR3JvdXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pIHtcclxuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQGdyb3VwXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IG1bMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCBncm91cE9wdGlvbklkcyA9IGN1c3RvbUZpZWxkLnZhbHVlLnNwbGl0KCc7JykubWFwKHMgPT4gcy50cmltKCkpIC8vIG9wdGlvbiBuYW1lc1xyXG4gICAgICAgICAgICAgICAgLm1hcChvcHRpb25OYW1lID0+IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBkaXNwbGF5X25hbWUgfSkgPT4gZXF1YWxPcHRpb25TdHJpbmcoZGlzcGxheV9uYW1lLCBvcHRpb25OYW1lKSk/LmlkKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpZCA9PiBpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3JvdXBPcHRpb25JZHMuaW5jbHVkZXMob3B0aW9uLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uIGJlbG9uZ3MgdG8gdGhlIGdyb3VwIGluIHRoaXMgY3VzdG9tIGZpZWxkXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGdyb3VwTmFtZTogJHtncm91cE5hbWV9LCBncm91cE9wdGlvbklkczogJHtncm91cE9wdGlvbklkc31gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGdyb3VwTmFtZSwgZ3JvdXBPcHRpb25JZHMgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgdG9vbHRpcCBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt7XHJcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XHJcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgKiAgIH1cclxuICAgICAqICAgb3B0aW9uOiB7XHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lLFxyXG4gICAgICogICAgIHZhbHVlczogW3tcclxuICAgICAqICAgICAgIGxhYmVsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfVxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyB0b29sdGlwOiBzdHJpbmcgfSB8IHsgdmFsdWVUb29sdGlwczogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pIHtcclxuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQHRvb2x0aXBcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IG1bMV0uc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSBjdXN0b21GaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIG9wdGlvbiBuYW1lXHJcbiAgICAgICAgICAgIGlmICghbmFtZSB8fCAhZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRvb2x0aXAgZm9yIG9wdGlvbiBuYW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgZm9yIG9wdGlvbiBcIiR7bmFtZX1cIiA9IFwiXCJcIiR7dG9vbHRpcH1cIlwiXCJgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHRvb2x0aXAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwcyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgLy8gdG9vbHRpcCBmb3Igb3B0aW9uIHZhbHVlXHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCgoeyBpZCwgbGFiZWwgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgZm9yIG9wdGlvbiBcIiR7bmFtZX0gOiAke3ZhbHVlfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcHNbaWRdID0gdG9vbHRpcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZVRvb2x0aXBzIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGdyb3VwIGhhcyBhIHRvb2x0aXAgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AdG9vbHRpcCAoZ3JvdXAgbmFtZSkgPSB0b29sdGlwYFxyXG4gICAgICogQHBhcmFtIHt7XHJcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XHJcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIGdyb3VwTmFtZTogc3RyaW5nXHJcbiAgICAgKiB9fSBwYXJhbTBcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAoeyBjdXN0b21GaWVsZCwgZ3JvdXBOYW1lIH0pIHtcclxuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQHRvb2x0aXBcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IG1bMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gY3VzdG9tRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBncm91cCBuYW1lXHJcbiAgICAgICAgICAgIGlmICghbmFtZSB8fCAhZXF1YWxPcHRpb25TdHJpbmcoZ3JvdXBOYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGZvciBncm91cCBcIiR7bmFtZX1cIiA9IFwiXCJcIiR7dG9vbHRpcH1cIlwiXCJgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiB2YWx1ZSBoYXMgYSB0b29sdGlwIGhlYWRpbmcgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AdG9vbHRpcF9oZWFkaW5nIG5hbWU6dmFsdWUgPSB0b29sdGlwIGhlYWRpbmdgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt7XHJcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XHJcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGRpc3BsYXlfbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlczogW3tcclxuICAgICAqICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgKiAgICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICogICAgIH1dXHJcbiAgICAgKiAgIH1cclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoVG9vbHRpcEhlYWRpbmcoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pIHtcclxuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQHRvb2x0aXBfaGVhZGluZ1xccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gbVsxXS5zcGxpdCgnOicsIDIpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGluZyA9IGN1c3RvbUZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggb3B0aW9uIG5hbWUgb3Igbm90IHZhbHVlXHJcbiAgICAgICAgICAgIGlmICghbmFtZSB8fCAhdmFsdWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlcy5mb3JFYWNoKCh7IGlkLCBsYWJlbCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcobGFiZWwsIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBoZWFkaW5nIGZvciBvcHRpb24gXCIke25hbWV9IDogJHt2YWx1ZX1cIiA9IFwiXCJcIiR7aGVhZGluZ31cIlwiXCJgKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBIZWFkaW5nc1tpZF0gPSBoZWFkaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvb2x0aXBIZWFkaW5ncztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIG5hbWUgY29udGFpbnMgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AcmVuYW1lIG9wdGlvbiBuYW1lID0gbmV3IG5hbWVgXHJcbiAgICAgKiBhbmQgcmV0dXJuIHRoZSBuZXcgbmFtZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbTBcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbTAuY3VzdG9tRmllbGRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbTAuY3VzdG9tRmllbGQubmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5jdXN0b21GaWVsZC52YWx1ZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMC5vcHRpb25cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbTAub3B0aW9uLmRpc3BsYXlfbmFtZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZyB8IHVuZGVmaW5lZH0gbmV3IG9wdGlvbiBuYW1lXHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hSZW5hbWUoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pIHtcclxuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQHJlbmFtZVxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBTdHJpbmcoY3VzdG9tRmllbGQudmFsdWUpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIG9wdGlvbiBuYW1lXHJcbiAgICAgICAgICAgIGlmICghbmFtZSB8fCAhZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gcmVuYW1lIG9wdGlvbiBcIiR7bmFtZX1cIiB0byBcIiR7bmV3TmFtZX1cImApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3TmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHZhbHVlIGhhcyBhIG5vbi1zYWxlIHByaWNlIGluIHRoZSBjdXN0b20gZmllbGRcclxuICAgICAqIGBfX0Bub25zYWxlIHByaWNlID0gb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZVs7IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWU7IC4uLl1gXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt7XHJcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XHJcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGRpc3BsYXlfbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlczogW3tcclxuICAgICAqICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgKiAgICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICogICAgIH1dXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiB9fSBwYXJhbTBcclxuICAgICAqIEByZXR1cm5zIHt7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfX1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaE5vblNhbGUoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pIHtcclxuICAgICAgICBjb25zdCB2YWx1ZU5vblNhbGVzID0ge307XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0Bub25zYWxlXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gTnVtYmVyKG1bMV0udHJpbSgpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNwbGl0IGVhY2ggKG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWUpIHBhaXIgc2VwYXJhdGVkIGJ5IFwiO1wiXHJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkLnZhbHVlLnNwbGl0KCc7JykuZm9yRWFjaChrdiA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBzcGxpdCBvcHRpb24gbmFtZSA6IG9wdGlvbiB2YWx1ZSBpbiBjdXN0b20gZmllbGQgdmFsdWUgc2VwYXJhdGVkIGJ5IFwiOlwiXHJcbiAgICAgICAgICAgICAgICBjb25zdCBbb3B0aW9uTmFtZSwgdmFsdWVMYWJlbF0gPSBrdi5zcGxpdCgnOicsIDIpLm1hcChzID0+IHMudHJpbSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgb3B0aW9uTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb24gbmFtZSBpbiBjdXN0b20gZmllbGQgbWF0Y2ggd2l0aCBjdXJyZW50IG9wdGlvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBvcHRpb24gdmFsdWUgSUQgdGhhdCBtYXRjaGVzIHdpdGggdGhlIHZhbHVlIGxhYmVsIGluIGN1c3RvbSBmaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSBvcHRpb24udmFsdWVzLmZpbmQoKHsgbGFiZWwgfSkgPT4gZXF1YWxPcHRpb25TdHJpbmcobGFiZWwsIHZhbHVlTGFiZWwpKT8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIG5vbi1zYWxlIHByaWNlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG9wdGlvbiB2YWx1ZSBJRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZU5vblNhbGVzW3ZhbHVlSWRdID0gcHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlTm9uU2FsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBzdG9yZSBzZXR0aW5ncyBpbmNsdWRpbmcgdGF4IGFuZCBhY3RpdmUgY3VycmVuY3lcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7XHJcbiAgICAgKiAgIHRheDogeyBwZHA6IG51bWJlciB9LFxyXG4gICAgICogICBjdXJyZW5jeToge1xyXG4gICAgICogICAgIGNvZGU6IHN0cmluZyxcclxuICAgICAqICAgICBkaXNwbGF5OiB7IGRlY2ltYWxQbGFjZXM6IG51bWJlciwgZGVjaW1hbFRva2VuOiBzdHJpbmcsIHN5bWJvbDogc3RyaW5nLCBzeW1ib2xQbGFjZW1lbnQ6IHN0cmluZywgdGhvdXNhbmRzVG9rZW46IHN0cmluZyB9LFxyXG4gICAgICogICAgIGV4Y2hhbmdlUmF0ZTogbnVtYmVyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIGRlZmF1bHRDdXJyZW5jeToge1xyXG4gICAgICogICAgIGNvZGU6IHN0cmluZyxcclxuICAgICAqICAgICBkaXNwbGF5OiB7IGRlY2ltYWxQbGFjZXM6IG51bWJlciwgZGVjaW1hbFRva2VuOiBzdHJpbmcsIHN5bWJvbDogc3RyaW5nLCBzeW1ib2xQbGFjZW1lbnQ6IHN0cmluZywgdGhvdXNhbmRzVG9rZW46IHN0cmluZyB9LFxyXG4gICAgICogICAgIGV4Y2hhbmdlUmF0ZTogbnVtYmVyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiB9PlxyXG4gICAgICovXHJcbiAgICBhc3luYyBmZXRjaFNldHRpbmdzKCkge1xyXG4gICAgICAgIGlmIChjYWNoZWRTZXR0aW5ncykgcmV0dXJuIGNhY2hlZFNldHRpbmdzO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmNvbnRleHQuZ3JhcGhRTFRva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhockZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJlbmN5Q29kZTogY3VycmVuY3lDb2RlIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVmYXVsdEN1cnJlbmN5Q29kZTogY3VycmVuY3lDb2RlIVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5KGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkN1cnJlbmN5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3k6IGN1cnJlbmN5KGN1cnJlbmN5Q29kZTogJGRlZmF1bHRDdXJyZW5jeUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5DdXJyZW5jeUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBkcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBDdXJyZW5jeUZpZWxkcyBvbiBDdXJyZW5jeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sUGxhY2VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZHNUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2hhbmdlUmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZTogdGhpcy5jb250ZXh0LmFjdGl2ZV9jdXJyZW5jeV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5kZWZhdWx0X2N1cnJlbmN5X2NvZGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FjaGVkU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIC4uLnJlc3AuZGF0YS5zaXRlLnNldHRpbmdzLFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogcmVzcC5kYXRhLnNpdGUuY3VycmVuY3ksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldHRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2ggb3B0aW9uIHByaWNlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8eyBpZDogbnVtYmVyLCB2YWx1ZXM6IEFycmF5PHsgaWQ6IG51bWJlciB9PiB9Pn0gc2hvd09wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTx7XHJcbiAgICAgKiAgIG9wdGlvbklkOiBudW1iZXJ8bnVsbCxcclxuICAgICAqICAgdmFsdWVJZDogbnVtYmVyfG51bGwsXHJcbiAgICAgKiAgIHByaWNlc1dpdGhUYXg6IHtcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBwcmljZXNXaXRob3V0VGF4OiB7XHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgYWRqdXN0ZWRQcmljZXNXaXRoVGF4OiB7XHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBub25TYWxlUHJpY2VWYWx1ZTogbnVtYmVyLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg6IHtcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIG5vblNhbGVQcmljZVZhbHVlOiBudW1iZXIsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiB9Pj59XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGZldGNoT3B0aW9uUHJpY2VzKHNob3dPcHRpb25zLCBmb3JtRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uVmFsdWVJZHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9ybURhdGEuZW50cmllcygpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtID0ga2V5Lm1hdGNoKC9eYXR0cmlidXRlXFxbKFxcZCspXFxdJC8pO1xyXG4gICAgICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uRW50aXR5SWQgPSBOdW1iZXIobVsxXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUVudGl0eUlkID0gTnVtYmVyKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVFbnRpdHlJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hvd09wdGlvbnMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gb3B0aW9uRW50aXR5SWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWVJZHMucHVzaCh7IG9wdGlvbkVudGl0eUlkLCB2YWx1ZUVudGl0eUlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjb21ib3NbMF0gaXMgdGhlIGJhc2VsaW5lIChhbHJlYWR5IHNlbGVjdGVkIG9wdGlvbnMpOyB0aGUgcmVzdCBhcmUgb25lIGNhbmRpZGF0ZSB2YWx1ZSBlYWNoXHJcbiAgICAgICAgY29uc3QgY29tYm9zID0gW3NlbGVjdGVkT3B0aW9uVmFsdWVJZHNdO1xyXG4gICAgICAgIGNvbnN0IGNvbWJvc01ldGEgPSBbbnVsbF07XHJcblxyXG4gICAgICAgIC8vIFZhcmlhbnQgb3B0aW9ucyAodGhvc2UgdGhhdCBjcmVhdGUgYSBTS1UpIG9ubHkgcmV0dXJuIHRoZSBTS1UncyBwcmljZSB3aGVuIGV2ZXJ5IHZhcmlhbnQgb3B0aW9uIGlzIHNwZWNpZmllZFxyXG4gICAgICAgIGNvbnN0IHZhcmlhbnRJZHMgPSBuZXcgU2V0KFxyXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1zdGF0ZT1cInZhcmlhbnRfb3B0aW9uXCJdJylcclxuICAgICAgICAgICAgICAgIC5tYXAoKF9pLCBlbCkgPT4gTnVtYmVyKCQoZWwpLmF0dHIoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQnKSkpXHJcbiAgICAgICAgICAgICAgICAuZ2V0KCksXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFZhcmlhbnRWYWx1ZUlkcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5lbnRyaWVzKCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSBrZXkubWF0Y2goL15hdHRyaWJ1dGVcXFsoXFxkKylcXF0kLyk7XHJcbiAgICAgICAgICAgIGlmIChtICYmIHZhcmlhbnRJZHMuaGFzKE51bWJlcihtWzFdKSkgJiYgTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYW50VmFsdWVJZHMucHVzaCh7IG9wdGlvbkVudGl0eUlkOiBOdW1iZXIobVsxXSksIHZhbHVlRW50aXR5SWQ6IE51bWJlcih2YWx1ZSkgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcGVyIHZhcmlhbnQgb3B0aW9uOiBTS1Ugb2YgdGhlIG90aGVyIHNlbGVjdGVkIHZhcmlhbnRzICsgdGhpcyBvcHRpb24ncyBmaXJzdCAoc3RhbmRhcmQpIHZhbHVlXHJcbiAgICAgICAgY29uc3QgdmFyaWFudEJhc2VsaW5lSW5kZXhlcyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgc2hvd09wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBvcHRpb24udmFsdWVzIHx8IChvcHRpb24udmFsdWUgPyBbeyBpZDogb3B0aW9uLnZhbHVlIH1dIDogW10pO1xyXG4gICAgICAgICAgICBjb25zdCBpc1ZhcmlhbnQgPSB2YXJpYW50SWRzLmhhcyhvcHRpb24uaWQpO1xyXG4gICAgICAgICAgICBjb25zdCBvdGhlclZhcmlhbnRzID0gaXNWYXJpYW50XHJcbiAgICAgICAgICAgICAgICA/IHNlbGVjdGVkVmFyaWFudFZhbHVlSWRzLmZpbHRlcigoeyBvcHRpb25FbnRpdHlJZCB9KSA9PiBvcHRpb25FbnRpdHlJZCAhPT0gb3B0aW9uLmlkKVxyXG4gICAgICAgICAgICAgICAgOiBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc1ZhcmlhbnQgJiYgdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhcmlhbnRCYXNlbGluZUluZGV4ZXNbb3B0aW9uLmlkXSA9IGNvbWJvcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBjb21ib3MucHVzaChbLi4ub3RoZXJWYXJpYW50cywgeyBvcHRpb25FbnRpdHlJZDogb3B0aW9uLmlkLCB2YWx1ZUVudGl0eUlkOiB2YWx1ZXNbMF0uaWQgfV0pO1xyXG4gICAgICAgICAgICAgICAgY29tYm9zTWV0YS5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbWJvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkT3B0aW9uVmFsdWVJZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm90aGVyVmFyaWFudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgb3B0aW9uRW50aXR5SWQ6IG9wdGlvbi5pZCwgdmFsdWVFbnRpdHlJZDogdmFsdWUuaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGE6IHsgb3B0aW9uSWQ6IG9wdGlvbi5pZCwgdmFsdWVJZDogdmFsdWUuaWQgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FuZGlkYXRlcy5mb3JFYWNoKCh7IGNvbWJvLCBtZXRhIH0pID0+IHtcclxuICAgICAgICAgICAgY29tYm9zLnB1c2goY29tYm8pO1xyXG4gICAgICAgICAgICBjb21ib3NNZXRhLnB1c2gobWV0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgdGhpcy5mZXRjaE9wdGlvblByaWNlc0JhdGNoKGNvbWJvcyk7XHJcbiAgICAgICAgY29uc3QgcHJldiA9IHByb2R1Y3RzWzBdO1xyXG4gICAgICAgIGNvbnN0IHZhcmlhbnRCYXNlbGluZXMgPSB7fTtcclxuICAgICAgICBPYmplY3QuZW50cmllcyh2YXJpYW50QmFzZWxpbmVJbmRleGVzKS5mb3JFYWNoKChbb3B0aW9uSWQsIGluZGV4XSkgPT4ge1xyXG4gICAgICAgICAgICB2YXJpYW50QmFzZWxpbmVzW29wdGlvbklkXSA9IHByb2R1Y3RzW2luZGV4XTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gcHJvZHVjdHNcclxuICAgICAgICAgICAgLm1hcCgocHJvZHVjdCwgaSkgPT4gKGNvbWJvc01ldGFbaV0gPyB7IC4uLmNvbWJvc01ldGFbaV0sIC4uLnByb2R1Y3QgfSA6IG51bGwpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xyXG5cclxuICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goc2VsZWN0aW9uID0+IHtcclxuICAgICAgICAgICAgLy8gdmFyaWFudCBvcHRpb25zIG5lZWQgdGhlIGZ1bGwgU0tVIGNvbWJpbmF0aW9uLCBzbyB0aGV5IGNvbXBhcmUgYWdhaW5zdCB0aGVpciBvd24gYmFzZWxpbmVcclxuICAgICAgICAgICAgY29uc3QgYmFzZSA9IHZhcmlhbnRCYXNlbGluZXNbc2VsZWN0aW9uLm9wdGlvbklkXSB8fCBwcmV2O1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vbi1zYWxlIHByaWNlIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBwcmljZSBhbmQgdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNpZGVyIGFsbCBub3cgcHJpY2UgYW5kIHJlZ3VsYXIgcHJpY2VcclxuICAgICAgICAgICAgICAgIGxldCBub25TYWxlUHJpY2VXaXRoVGF4ID0gc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LnByaWNlLnZhbHVlIC0gYmFzZS5wcmljZXNXaXRoVGF4Py5wcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5iYXNlUHJpY2UudmFsdWUgLSBiYXNlLnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5wcmljZS52YWx1ZSAtIHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBub24tc2FsZSBwcmljZSBpZiBpdCdzIGxlc3MgdGhhbiB0aGUgY3VycmVudCBwcmljZVxyXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGVQcmljZVdpdGhUYXggPD0gc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUgLSBiYXNlLnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5hZGp1c3RlZFByaWNlc1dpdGhUYXggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LmJhc2VQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSAtIGJhc2UucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlIC0gYmFzZS5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG5vblNhbGVQcmljZVdpdGhUYXgsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9uLXNhbGUgcHJpY2UgYmFzZWQgb24gdGhlIHByZXZpb3VzIHByaWNlIGFuZCB0aGUgY3VycmVudCBwcmljZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc2lkZXIgYWxsIG5vdyBwcmljZSBhbmQgcmVndWxhciBwcmljZVxyXG4gICAgICAgICAgICAgICAgbGV0IG5vblNhbGVQcmljZVdpdGhvdXRUYXggPSBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8ucHJpY2UudmFsdWUgLSBiYXNlLnByaWNlc1dpdGhvdXRUYXg/LnByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LmJhc2VQcmljZS52YWx1ZSAtIGJhc2UucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LnByaWNlLnZhbHVlIC0gc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LmJhc2VQcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG5vbi1zYWxlIHByaWNlIGlmIGl0J3MgbGVzcyB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBpZiAobm9uU2FsZVByaWNlV2l0aG91dFRheCA8PSBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSAtIGJhc2UucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFkanVzdGVkUHJpY2VzV2l0aG91dFRheCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlIC0gYmFzZS5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUgLSBiYXNlLnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VWYWx1ZTogbm9uU2FsZVByaWNlV2l0aG91dFRheCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBmZXRjaE9wdGlvblByaWNlcyByZXR1cm5zOiAnLCBzZWxlY3Rpb25zKTtcclxuICAgICAgICByZXR1cm4gW3ByZXYsIC4uLnNlbGVjdGlvbnNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2ggcHJvZHVjdCBwcmljZSBmcm9tIHNwZWNpZmljIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PHsgb3B0aW9uRW50aXR5SWQ6IG51bWJlciwgdmFsdWVFbnRpdHlJZDogbnVtYmVyfT59IG9wdGlvblZhbHVlSWRzXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFyaWFudCBmZXRjaCB0aGUgbWF0Y2hpbmcgU0tVL3ZhcmlhbnQncyBvd24gcHJpY2UgaW5zdGVhZCBvZiB0aGUgYmFzZSBwcm9kdWN0ICsgbW9kaWZpZXJzXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHByaWNlc1dpdGhUYXg6IHsgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IH0sIHByaWNlc1dpdGhvdXRUYXg6IHsgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IH0gfT5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hPcHRpb25QcmljZShvcHRpb25WYWx1ZUlkcykge1xyXG4gICAgICAgIGNvbnN0IFtwcm9kdWN0XSA9IGF3YWl0IHRoaXMuZmV0Y2hPcHRpb25QcmljZXNCYXRjaChbb3B0aW9uVmFsdWVJZHNdKTtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHByaWNlcyBmb3IgbXVsdGlwbGUgb3B0aW9uLXZhbHVlIGNvbWJpbmF0aW9ucywgbWVyZ2luZyBhcyBtYW55IGFzIHBvc3NpYmxlIGludG8gYVxyXG4gICAgICogc2luZ2xlIEdyYXBoUUwgcmVxdWVzdCAodmlhIGFsaWFzZXMpIGluc3RlYWQgb2Ygb25lIHJlcXVlc3QgcGVyIGNvbWJpbmF0aW9uLCB0byBjdXQgZG93blxyXG4gICAgICogb24gdGhlIG51bWJlciBvZiBuZXR3b3JrIHJvdW5kLXRyaXBzICh0aGUgbWFpbiBjb3N0LCBub3QgcGF5bG9hZCBzaXplKS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PHsgb3B0aW9uRW50aXR5SWQ6IG51bWJlciwgdmFsdWVFbnRpdHlJZDogbnVtYmVyfT4+fSBjb21ib3NcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8Ym9vbGVhbj59IGlzVmFyaWFudEZsYWdzIHBlci1jb21ibzogbG9vayB1cCB0aGUgbWF0Y2hpbmcgdmFyaWFudC9TS1UgcHJpY2VcclxuICAgICAqICAgKG5lZWRlZCBmb3IgXCJ2YXJpYW50IG9wdGlvblwiIGF0dHJpYnV0ZXMsIHdoaWNoIGRlZmluZSBzZXBhcmF0ZSBTS1VzKSBpbnN0ZWFkIG9mIHRoZVxyXG4gICAgICogICBiYXNlIHByb2R1Y3QgcHJpY2UgKyBtb2RpZmllciBhZGp1c3RtZW50XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTx7IHByaWNlc1dpdGhUYXg6IG9iamVjdCwgcHJpY2VzV2l0aG91dFRheDogb2JqZWN0IH0+Pn0gcmVzdWx0cywgc2FtZSBvcmRlci9sZW5ndGggYXMgYGNvbWJvc2BcclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hPcHRpb25QcmljZXNCYXRjaChjb21ib3MpIHtcclxuICAgICAgICBjb25zdCBCQVRDSF9DSFVOS19TSVpFID0gODtcclxuICAgICAgICBjb25zdCBjYWNoZUtleXMgPSBjb21ib3MubWFwKGNvbWJvID0+IGBwcm9kdWN0OiR7SlNPTi5zdHJpbmdpZnkoY29tYm8pfWApO1xyXG4gICAgICAgIGNvbnN0IHVuY2FjaGVkSW5kZXhlcyA9IGNhY2hlS2V5c1xyXG4gICAgICAgICAgICAubWFwKChrZXksIGluZGV4KSA9PiAodGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVba2V5XSA/IG51bGwgOiBpbmRleCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoaW5kZXggPT4gaW5kZXggIT09IG51bGwpO1xyXG5cclxuICAgICAgICBjb25zdCBjaHVua3MgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuY2FjaGVkSW5kZXhlcy5sZW5ndGg7IGkgKz0gQkFUQ0hfQ0hVTktfU0laRSkge1xyXG4gICAgICAgICAgICBjaHVua3MucHVzaCh1bmNhY2hlZEluZGV4ZXMuc2xpY2UoaSwgaSArIEJBVENIX0NIVU5LX1NJWkUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IGhhbmRsZVByb21pc2VzV2l0aExpbWl0KGNodW5rcy5tYXAoY2h1bmtJbmRleGVzID0+IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVEZWZzID0gY2h1bmtJbmRleGVzLm1hcChpID0+IGAkb3B0aW9uVmFsdWVJZHMke2l9OiBbT3B0aW9uVmFsdWVJZCFdYCkuam9pbignLCAnKTtcclxuICAgICAgICAgICAgY29uc3QgYWxpYXNGaWVsZHMgPSBjaHVua0luZGV4ZXMubWFwKGkgPT4gYFxyXG4gICAgICAgICAgICAgICAgZiR7aX06IHByb2R1Y3QoZW50aXR5SWQ6ICRwcm9kdWN0SWQsIG9wdGlvblZhbHVlSWRzOiAkb3B0aW9uVmFsdWVJZHMke2l9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzV2l0aFRheDogcHJpY2VzKGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZSwgaW5jbHVkZVRheDogdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRob3V0VGF4OiBwcmljZXMoY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlLCBpbmNsdWRlVGF4OiBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYCkuam9pbignXFxuJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuYWN0aXZlX2N1cnJlbmN5X2NvZGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNodW5rSW5kZXhlcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzW2BvcHRpb25WYWx1ZUlkcyR7aX1gXSA9IGNvbWJvc1tpXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICgkcHJvZHVjdElkOiBJbnQhLCAkY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhLCAke3ZhcmlhYmxlRGVmc30pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHthbGlhc0ZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IFByaWNlRmllbGRzIG9uIFByaWNlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2h1bmtJbmRleGVzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcC5kYXRhPy5zaXRlPy5bYGYke2l9YF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVbY2FjaGVLZXlzW2ldXSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRvbid0IGxldCBvbmUgYmFkIGNodW5rIChlLmcuIGFuIHVuc3VwcG9ydGVkIHZhcmlhbnQgcHJpY2luZyBxdWVyeSBvbiB0aGlzXHJcbiAgICAgICAgICAgICAgICAvLyBzdG9yZSkgdGFrZSBkb3duIHByaWNpbmcgZm9yIGV2ZXJ5IG90aGVyIG9wdGlvbiBvbiB0aGUgcGFnZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBmZXRjaE9wdGlvblByaWNlc0JhdGNoIGNodW5rIGZhaWxlZDogJywgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCA0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhY2hlS2V5cy5tYXAoa2V5ID0+IHRoaXMuZmV0Y2hPcHRpb25QcmljZUNhY2hlW2tleV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheSB0b29sdGlwcyB0byB0aGUgY29ycmVzcG9uZGluZyBzaG93biBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxUaXRsZVxyXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyB0b29sdGlwOiBzdHJpbmcsIHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0gfX0gdG9vbHRpcHNcclxuICAgICAqIEBwYXJhbSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH19IHRvb2x0aXBIZWFkaW5nc1xyXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaG93T3B0aW9uSWRzIG9wdGlvbiBpZHMgdG8gc2hvdyB0b29sdGlwc1xyXG4gICAgICovXHJcbiAgICBzaG93T3B0aW9uVG9vbHRpcHMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsVGl0bGUsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MsIHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICAvLyBEaXNwbGF5IHRvb2x0aXBcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwcykuZm9yRWFjaCgoW29wdGlvbklkLCB7IHRvb2x0aXAsIHZhbHVlVG9vbHRpcHMgfV0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcihvcHRpb25JZCkpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdG9vbHRpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIG9wdGlvbklkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkb3B0aW9uLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQ9XCIke29wdGlvbklkfVwiXWApLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRsYWJlbCA9ICRvcHRpb24uZmluZCgnbGFiZWwnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkbGFiZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYWJlbC5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb24ucHJlcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcHMpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB2YWx1ZVRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICRvcHRpb24uZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICR2YWx1ZS5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpZiBvbmx5IDEgb3B0aW9uIHNob3duIGF0IGN1cnJlbnQgc3RlcCxcclxuICAgICAgICAvLyB0aGVuIG1vdmUgaXRzIHRvb2x0aXAgdG8gdGhlIG1vZGFsIHRpdGxlXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtzaG93T3B0aW9uSWRzWzBdfVwiXWApO1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSB0b29sdGlwIGhlYWRpbmdcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwSGVhZGluZ3MpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKFtvcHRpb25JZF0pID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKG9wdGlvbklkKSkpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChbb3B0aW9uSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmdzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcEhlYWRpbmdzKS5mb3JFYWNoKChbdmFsdWVJZCwgdmFsdWVUb29sdGlwSGVhZGluZ10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwSGVhZGluZyA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUucmVwbGFjZSgnPCVoZWFkaW5nJT4nLCB2YWx1ZVRvb2x0aXBIZWFkaW5nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMoKSB7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKCEkcHJvZHVjdE9wdGlvbnNFbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZF0sIFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZF0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2R1Y3RPcHRpb25zLmxlbmd0aCB8fCAhdGhpcy5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbklkcyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkXScpXHJcbiAgICAgICAgICAgIC5tYXAoKF9pbmRleCwgZWwpID0+IE51bWJlcigkKGVsKS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSlcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBzID0ge307XHJcbiAgICAgICAgY29uc3QgdG9vbHRpcEhlYWRpbmdzID0ge307XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBvcHRpb25JZHMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAgICAgICAuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdG9vbHRpcE1hdGNoLnRvb2x0aXAgfHwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcHM6IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBzW29wdGlvbi5pZF0/LnZhbHVlVG9vbHRpcHMsIHRvb2x0aXBNYXRjaC52YWx1ZVRvb2x0aXBzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUb29sdGlwSGVhZGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSwgdmFsdWVUb29sdGlwSGVhZGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93SW5saW5lT3B0aW9uVG9vbHRpcHMoJHByb2R1Y3RPcHRpb25zRWwsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNwZWNUb29sdGlwcygpIHtcclxuICAgICAgICBjb25zdCBwcmVmaXggPSAnX19Ac3BlY190b29sdGlwICc7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIE1BU1RFUiBTUEVDIFRPT0xUSVBTXHJcbiAgICAgICAgLy8gQWRkIGVudHJpZXMgaGVyZSB0byBzaG93IGEgdG9vbHRpcCBvbiBldmVyeSBwcm9kdWN0IHBhZ2UgZm9yXHJcbiAgICAgICAgLy8gdGhhdCBzcGVjIHJvdyBhdXRvbWF0aWNhbGx5LiBObyBjdXN0b20gZmllbGQgbmVlZGVkIHBlciBwcm9kdWN0LlxyXG4gICAgICAgIC8vIFBlci1wcm9kdWN0IGN1c3RvbSBmaWVsZHMgKGUuZy4gX19Ac3BlY190b29sdGlwIE1lbW9yeSkgd2lsbFxyXG4gICAgICAgIC8vIG92ZXJyaWRlIHRoZXNlIHZhbHVlcyBpZiBwcmVzZW50LlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGNvbnN0IG1hc3RlclRvb2x0aXBzID0ge1xyXG4gICAgICAgICAgICAnTWVtb3J5JzogJ05vdCBzdXJlIGlmIHRoaXMgaXMgdGhlIHJpZ2h0IGFtb3VudCBvZiBtZW1vcnkgZm9yIHlvdXIgbmVlZHM/IFJlZmVyIHRvIG91ciBibG9nIG9uIDxhIGhyZWY9XCJodHRwczovL3d3dy5ib2Jqb2huc29uLmNvbS9ibG9nL2hvdy1tdWNoLXJhbS1kby15b3UtYWN0dWFsbHktbmVlZC1pbi1hLXJ1Z2dlZC1sYXB0b3AvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UkFNIE5lZWRzIGluIGEgcnVnZ2VkIGxhcHRvcDwvYT4uJyxcclxuICAgICAgICAgICAgLy8gJ1N0b3JhZ2UnOiAnVGhlIGRyaXZlIHdoZXJlIHlvdXIgZmlsZXMgYW5kIE9TIGFyZSBzdG9yZWQuJyxcclxuICAgICAgICAgICAgLy8gJ1Byb2Nlc3Nvcic6ICdUaGUgQ1BVIGlzIHRoZSBicmFpbiBvZiB0aGUgY29tcHV0ZXIuJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgYW55IHByZXZpb3VzbHkgaW5qZWN0ZWQgc3BlYyB0b29sdGlwc1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXNwZWMtdG9vbHRpcF0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgLy8gQnVpbGQgZmluYWwgbWFwOiBzdGFydCB3aXRoIG1hc3RlciBkZWZhdWx0cywgb3ZlcnJpZGUgd2l0aCBwZXItcHJvZHVjdCBjdXN0b20gZmllbGRzXHJcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRUb29sdGlwcyA9IHsgLi4ubWFzdGVyVG9vbHRpcHMgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbmFtZS5zdGFydHNXaXRoKHByZWZpeCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3BlY05hbWUgPSBuYW1lLnNsaWNlKHByZWZpeC5sZW5ndGgpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzcGVjTmFtZSAmJiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRUb29sdGlwc1tzcGVjTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyhyZXNvbHZlZFRvb2x0aXBzKS5mb3JFYWNoKChbc3BlY05hbWUsIHRvb2x0aXBUZXh0XSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZGQgPSB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1zcGVjLW5hbWU9XCIke3NwZWNOYW1lfVwiXWApLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRkZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdG9vbHRpcFRleHQpKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtc3BlYy10b29sdGlwJywgc3BlY05hbWUpO1xyXG5cclxuICAgICAgICAgICAgJGRkLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0lubGluZU9wdGlvblRvb2x0aXBzKCRwcm9kdWN0T3B0aW9uc0VsLCB0b29sdGlwcywgdG9vbHRpcEhlYWRpbmdzKSB7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9vbHRpcHMpLmZvckVhY2goKFtvcHRpb25JZCwgeyB0b29sdGlwLCB2YWx1ZVRvb2x0aXBzID0ge30gfV0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJG9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBvcHRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbGFiZWwgPSAkb3B0aW9uLmZpbmQoJ2xhYmVsJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGxhYmVsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbGFiZWwuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5wcmVwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwcykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcF0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB2YWx1ZVRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJ29wdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnOnNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRvcHRpb24uZmluZCgnc2VsZWN0JykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2VsZWN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzZWxlY3QuYWZ0ZXIoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYWZ0ZXIoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9vbHRpcEhlYWRpbmdzKS5mb3JFYWNoKChbb3B0aW9uSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmdzXSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkb3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZVRvb2x0aXBIZWFkaW5ncykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmddKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEkdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwSGVhZGluZyA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUucmVwbGFjZSgnPCVoZWFkaW5nJT4nLCB2YWx1ZVRvb2x0aXBIZWFkaW5nKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWhlYWRpbmctaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJ29wdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnOnNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRvcHRpb24uZmluZCgnc2VsZWN0JykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2VsZWN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzZWxlY3QuYWZ0ZXIoJHRvb2x0aXBIZWFkaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb24uYXBwZW5kKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5hcHBlbmQoJHRvb2x0aXBIZWFkaW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gb3B0aW9ucyBhbmQgZGlzcGxheSBjb250aW51ZSBidXR0b24gaWYgbmVjZXNzYXJ5LlxyXG4gICAgICogU3RvcCBhdXRvIHVwZGF0ZSB0aGUgbW9kaWZpZXJzIHZpZXcgdW50aWwgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICpcclxuICAgICAqIENvbnRpbnVlIGJ1dHRvbiBpcyBzaG93biBpZiBhbnkgb2YgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAgICAgKiAtIG9wdGlvbnMgdGhhdCBoYXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICogLSBjaGVja2JveCBvcHRpb25zXHJcbiAgICAgKiAtIG9wdGlvbmFsIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgKiAtIG9wdGlvbmFsIGRhdGUgc2VsZWN0IG9wdGlvbnNcclxuICAgICAqIC0gZmlsZSBpbnB1dFxyXG4gICAgICogLSBtb3JlIHRoYW4gMSBvcHRpb24gYXJlIHNob3duIGF0IHRoZSBzYW1lIHRpbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IHNob3dPcHRpb25JZHMgc2hvdyBvcHRpb24gaWRzXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbENvbnRpbnVlXHJcbiAgICAgKi9cclxuICAgIHBvcHVsYXRlRGVmYXVsdE9wdGlvblZhbHVlcyhzaG93T3B0aW9uSWRzLCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSkge1xyXG4gICAgICAgIGNvbnN0IHNob3duT3B0aW9ucyA9IHRoaXMucHJvZHVjdE9wdGlvbnMuZmlsdGVyKCh7IGlkIH0pID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoaWQpKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogb3B0aW9ucyB0aGF0IGhhcyBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBwcmVmaWxsLCBzZWxlY3RlZF9kYXRlLCB2YWx1ZXMgfSkgPT5cclxuICAgICAgICAgICAgICAgIHByZWZpbGwgfHxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkX2RhdGUgJiYgKHNlbGVjdGVkX2RhdGUuZGF5IHx8IHNlbGVjdGVkX2RhdGUubW9udGggfHwgc2VsZWN0ZWRfZGF0ZS55ZWFyKSB8fFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzPy5maW5kKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNoZWNrYm94IHR5cGUgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94T3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IG5vVmFsdWUsIHZhbHVlIH0pID0+IG5vVmFsdWUgfHwgdmFsdWUpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBmaWxlIHR5cGUgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGZpbGVPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnaW5wdXQtZmlsZScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBkYXRlIHR5cGUgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRhdGVPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnZGF0ZScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBkcm9wZG93biB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyByZXF1aXJlZCwgcGFydGlhbCB9KSA9PiAhcmVxdWlyZWQgJiYgcGFydGlhbCA9PT0gJ3NldC1zZWxlY3QnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdGV4dCAvIG11bHRpbGluZSAvIG51bWJlciBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgdGV4dE9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBwYXJ0aWFsIH0pID0+IHBhcnRpYWwgPT09ICdpbnB1dC10ZXh0JyB8fCBwYXJ0aWFsID09PSAndGV4dGFyZWEnIHx8IHBhcnRpYWwgPT09ICdpbnB1dC1udW1iZXJzJyk7XHJcblxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDFcclxuICAgICAgICAgICAgfHwgZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMCB8fCBjaGVja2JveE9wdGlvbnMubGVuZ3RoID4gMCB8fCBmaWxlT3B0aW9ucy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgIHx8IGRhdGVPcHRpb25zLmxlbmd0aCA+IDAgfHwgZHJvcGRvd25PcHRpb25zLmxlbmd0aCA+IDAgfHwgdGV4dE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBzaG93IGNvbnRpbnVlIGJ1dHRvblxyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxDb250aW51ZS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGF1dG8gdXBkYXRlIHRoZSBtb2RpZmllcnMgdmlldyB1bnRpbCB0aGUgY29udGludWUgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIHRvIHRoZSBzaG93biBvcHRpb25zXHJcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgICAgIGlkLCBwcmVmaWxsLCBzZWxlY3RlZF9kYXRlLCB2YWx1ZXMsXHJcbiAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZXM/LmZpbmQoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpPy5pZDtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdzZWxlY3QnKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXWApLnZhbCh2YWx1ZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3ZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlZmlsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXQsIHRleHRhcmVhJykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1gKS52YWwocHJlZmlsbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkX2RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRfZGF0ZS5kYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bZGF5XVwiXWApLnZhbChzZWxlY3RlZF9kYXRlLmRheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9kYXRlLm1vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW21vbnRoXVwiXWApLnZhbChzZWxlY3RlZF9kYXRlLm1vbnRoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX2RhdGUueWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVt5ZWFyXVwiXWApLnZhbChzZWxlY3RlZF9kYXRlLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gY2hlY2tib3ggb3B0aW9uc1xyXG4gICAgICAgICAgICBjaGVja2JveE9wdGlvbnMuZm9yRWFjaCgoe1xyXG4gICAgICAgICAgICAgICAgaWQsIGNoZWNrZWQsIHZhbHVlLCBub1ZhbHVlLFxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImhpZGRlblwiXWApLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiY2hlY2tib3hcIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImhpZGRlblwiXWApLnZhbChub1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJjaGVja2JveFwiXWApLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gbWFyayBmaWxlIGlucHV0LCBkYXRlIGlucHV0LCBkcm9wZG93biBzZWxlY3QsIHRleHQgaW5wdXQgYXMgc2hvd25cclxuICAgICAgICAgICAgWy4uLmZpbGVPcHRpb25zLCAuLi5kYXRlT3B0aW9ucywgLi4uZHJvcGRvd25PcHRpb25zLCAuLi50ZXh0T3B0aW9uc10uZm9yRWFjaCgoeyBpZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW2RheV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVttb250aF1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVt5ZWFyXVwiXWApLmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVNob3dPcHRpb25QcmljZXNQcmVsb2FkZXIoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHByZWxvYWRlcjogdHJ1ZSB9O1xyXG4gICAgICAgIGNvbnN0IHByaWNlSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICBjb25zdCBwcmljZVRleHQgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVBsYWluVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICBjb25zdCBzdWJ0b3RhbEh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcblxyXG4gICAgICAgIHNob3dPcHRpb25JZHMuZm9yRWFjaChvcHRpb25JZCA9PiB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAgICAgICAgICAgIC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXWApXHJcbiAgICAgICAgICAgICAgICAuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IE51bWJlcigkdmFsdWUuYXR0cignZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlSWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJpY2UgPSAkKHByaWNlSHRtbCkuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJ29wdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGFscmVhZHkgaGFzIHByaWNlIGRpc3BsYXllZCBiZWZvcmU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuZGF0YSgncHJpY2VIdG1sJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcsICR2YWx1ZS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLnRleHQoYCR7JHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpfSAke3ByaWNlVGV4dH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRvbGQgPSAkdmFsdWUuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkb2xkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGxhY2Vob2xkZXIgPSAkdmFsdWUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtcGxhY2Vob2xkZXJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsU3VidG90YWwuaHRtbChzdWJ0b3RhbEh0bWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheSBwcmljZXMgdG8gY29ycmVzcG9uZGluZyBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbFxyXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaG93T3B0aW9uSWRzIG9wdGlvbiBpZHMgdG8gc2hvdyBwcmljZXNcclxuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXHJcbiAgICAgKiBAcGFyYW0ge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfSB9fSBub25lU2FsZXMgb3B0aW9uIHZhbHVlcyB3aXRoIG5vbi1zYWxlIHByaWNlc1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaWdub3JlVXBkYXRlU3VidG90YWw9ZmFsc2VdIGlnbm9yZSB1cGRhdGUgc3VidG90YWxcclxuICAgICAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiBBdXRvLWNhbGN1bGF0ZSBhbmQgZGlzcGxheSBlYWNoIG9wdGlvbiB2YWx1ZSdzIHByaWNlIGFkanVzdG1lbnQgKGUuZy4gXCIoKyQxMDAuMDApXCIpXHJcbiAgICAgKiBuZXh0IHRvIGl0cyBsYWJlbCBvbiB0aGUgcGxhaW4gKG5vbi1tb2RhbCkgb3B0aW9uIGxpc3QsIHNvIGFkbWlucyBubyBsb25nZXIgbmVlZCB0b1xyXG4gICAgICogbWFudWFsbHkgdHlwZSB0aGUgcHJpY2UgZGlmZmVyZW5jZSBpbnRvIHRoZSBvcHRpb24gdmFsdWUgbmFtZS5cclxuICAgICAqL1xyXG4gICAgaW5pdElubGluZU9wdGlvblByaWNlSGludHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpLmZpcnN0KCk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKCRwcm9kdWN0T3B0aW9uc0VsLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5wcm9kdWN0T3B0aW9ucz8ubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtWzBdKTtcclxuICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5tYXAoKHsgaWQgfSkgPT4gaWQpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dPcHRpb25QcmljZXMoJHByb2R1Y3RPcHRpb25zRWwsICQoKSwgc2hvd09wdGlvbklkcywgZm9ybURhdGEsIHt9LCB0cnVlKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaW5pdElubGluZU9wdGlvblByaWNlSGludHMgZmFpbGVkOiAnLCBlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaG93T3B0aW9uUHJpY2VzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzLCBmb3JtRGF0YSwgbm9uZVNhbGVzLCBpZ25vcmVVcGRhdGVTdWJ0b3RhbCA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgW3NldHRpbmdzLCBbcHJldiwgLi4uc2VsZWN0aW9uc11dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoU2V0dGluZ3MoKSxcclxuICAgICAgICAgICAgdGhpcy5mZXRjaE9wdGlvblByaWNlcyhcclxuICAgICAgICAgICAgICAgIHNob3dPcHRpb25JZHMubWFwKF9pZCA9PiB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IF9pZCkpLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dQcmljZSA9IHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgTWF0aC5hYnMoTnVtYmVyKHZhbHVlKSkgPCAwLjAwNSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFByaWNlKHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgb3B0aW9uSWQsIHZhbHVlSWQsIGFkanVzdGVkUHJpY2VzV2l0aFRheCwgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4LFxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiBhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXg6IHNob3dQcmljZShhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiAoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUsIHRydWUpIDogJycpLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiBzaG93UHJpY2UoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IChhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlLCB0cnVlKSA6ICcnKSxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyYW1zLnByaWNlV2l0aFRheCB8fCBwYXJhbXMucHJpY2VXaXRob3V0VGF4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvdmVycmlkZSBub24tc2FsZSBwcmljZSBmb3Igb3B0aW9uIHZhbHVlcyBpZiBpdCBpcyBhcHBlYXJzIGluIGN1c3RvbSBmaWVsZCBgX19Abm9uc2FsZWBcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBpZiBpdCdzIGhpZ2hlciB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub25TYWxlID0gbm9uZVNhbGVzW29wdGlvbklkXT8uW3ZhbHVlSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGNoYW5nZWROb25TYWxlID0gbm9uU2FsZSAqIHNldHRpbmdzLmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVZhbHVlID0gc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSA6IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNoYW5nZWROb25TYWxlID4gcHJpY2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IGV4Y2hhbmdlZE5vblNhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogdGhpcy5mb3JtYXRQcmljZShleGNoYW5nZWROb25TYWxlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiBleGNoYW5nZWROb25TYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IHRoaXMuZm9ybWF0UHJpY2UoZXhjaGFuZ2VkTm9uU2FsZSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVRleHQgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVBsYWluVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcmljZSA9ICQocHJpY2VIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgIC8vIHNjb3BlIHRvIHRoZSBsYWJlbCBvbmx5OiBzb21lIGxheW91dHMgKGUuZy4gaW1hZ2UgbGlzdCBpdGVtcykgYWxzbyBwdXRcclxuICAgICAgICAgICAgICAgIC8vIGRhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWUgb24gdGhlIHN1cnJvdW5kaW5nIDxsaT4sIHdoaWNoIHdvdWxkIG90aGVyd2lzZVxyXG4gICAgICAgICAgICAgICAgLy8gbWF0Y2ggdG9vIGFuZCBkdXBsaWNhdGUgdGhlIHByaWNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYGxhYmVsW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdLCBvcHRpb25bZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVNlbGVjdG9yID0gYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkPVwiJHtvcHRpb25JZH0tJHt2YWx1ZUlkfVwiXWA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbXMucHJpY2VXaXRoVGF4ICYmICFwYXJhbXMucHJpY2VXaXRob3V0VGF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmZpbmQocHJpY2VTZWxlY3RvcikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJ29wdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcsICR2YWx1ZS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUudGV4dChgJHskdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0Jyl9ICR7cHJpY2VUZXh0fWApO1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5kYXRhKCdwcmljZUh0bWwnLCBwcmljZUh0bWwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZmluZChwcmljZVNlbGVjdG9yKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGxhY2Vob2xkZXIgPSAkdmFsdWUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtcGxhY2Vob2xkZXJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTaG93IHN1YnRvdGFsIGNhbGN1bGF0ZWQgZnJvbSBhbGwgc2VsZWN0ZWQgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmICghaWdub3JlVXBkYXRlU3VidG90YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9uU3VidG90YWwoJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHByZXYsIHNldHRpbmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5IHN1YnRvdGFsIGZvciB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgcHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfCBudWxsLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBwcmljZXNXaXRob3V0VGF4OiB7XHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfCBudWxsLFxyXG4gICAgICogfX0gcHJvZHVjdFxyXG4gICAgICogQHBhcmFtIHt7IHRheDogeyBwZHA6IG51bWJlciB9IH19IHNldHRpbmdzXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBzaG93T3B0aW9uU3VidG90YWwoJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHByb2R1Y3QsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdHh0U3VidG90YWw6IHRoaXMuY29udGV4dC50eHRTdWJ0b3RhbCxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogJycsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3QucHJpY2VzV2l0aFRheD8ucHJpY2UgfHwgcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4Py5wcmljZSkge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheDogdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiBwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4OiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IHN1bW1hcnkgb2Ygc2VsZWN0ZWQgb3B0aW9ucyBiZWZvcmUgYWRkaW5nIHRvIGNhcnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1bW1hcnlcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbFxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFRpdGxlXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGFkZFRvQ2FydFdyYXBwZXJcclxuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZWxvYWRlclxyXG4gICAgICovXHJcbiAgICBzaG93U3VtbWFyeSgkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5LCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgJG1vZGlmaWVyc01vZGFsVGl0bGUsICRhZGRUb0NhcnRXcmFwcGVyLCBmb3JtRGF0YSwgcHJlbG9hZGVyID0gZmFsc2UpIHtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5odG1sKHRoaXMuY29udGV4dC50eHRSZXZpZXdTZWxlY3Rpb25zKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9ICFwcmVsb2FkZXJcclxuICAgICAgICAgICAgPyAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKClcclxuICAgICAgICAgICAgOiBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCB7IHByZWxvYWRlciB9LCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgIGNvbnN0ICRzdWJ0b3RhbCA9ICQoc3VidG90YWxIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZS1zdWJ0b3RhbCcsICcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheVN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XWApO1xyXG4gICAgICAgICAgICBjb25zdCBtb250aFN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bbW9udGhdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHllYXJTdHIgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF5U3RyIHx8IG1vbnRoU3RyIHx8IHllYXJTdHIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoYCR7eWVhclN0cn0tJHttb250aFN0cn0tJHtkYXlTdHJ9YCkudG9Mb2NhbGVEYXRlU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU6IGAke3llYXJTdHJ9LSR7bW9udGhTdHJ9LSR7ZGF5U3RyfWAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVTdHIgPSBmb3JtRGF0YS5nZXRBbGwoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCkuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlU3RyIHx8IHZhbHVlU3RyID09PSAnMCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZVN0ciBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVN0ci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlU3RyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZVN0ciA/IE51bWJlcih2YWx1ZVN0cikgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBpdCBpcyBjaGVja2JveCBhbmQgbm90IGNoZWNrZWRcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5ub1ZhbHVlICYmIG9wdGlvbi5ub1ZhbHVlID09PSB2YWx1ZUlkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUxhYmVsID0gb3B0aW9uLnZhbHVlcz8uZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gdmFsdWVJZCk/LmxhYmVsXHJcbiAgICAgICAgICAgICAgICB8fCAob3B0aW9uLnZhbHVlID09PSB2YWx1ZUlkID8gb3B0aW9uLmxhYmVsIDogdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlSHRtbCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbi5pZH0tJHt2YWx1ZUlkfVwiXWApXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKS5jbG9uZSgpLnJlbW92ZUF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnKVswXT8ub3V0ZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxQcmljZUh0bWwgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl0gb3B0aW9uW3ZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLmRhdGEoJ3ByaWNlSHRtbCcpO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5kaXNwbGF5X25hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVMYWJlbCB8fCB2YWx1ZVN0cixcclxuICAgICAgICAgICAgICAgIHByaWNlSHRtbDogcHJpY2VIdG1sIHx8IG9wdGlvbkVsUHJpY2VIdG1sLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VtbWFyeUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdW1tYXJ5VGVtcGxhdGUsIHsgb3B0aW9ucyB9LCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1bW1hcnkuaHRtbChzdW1tYXJ5SHRtbCk7XHJcblxyXG4gICAgICAgIC8vIEluc2VydCBzdWJ0b3RhbCB0byB0byBhZGQgdG8gY2FydCB3cmFwcGVyIGFuZCBzaG93IGl0XHJcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlLXN1YnRvdGFsXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLmZpbmQodGhpcy5hZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IpLnByZXBlbmQoJHN1YnRvdGFsKTtcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5zaG93KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2VdXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aG91dF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRob3V0X3RheC5jdXJyZW5jeVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2UudGF4X2xhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmN1cnJlbmN5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRoX3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRoX3RheC5jdXJyZW5jeVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC5jdXJyZW5jeVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdHh0U3VidG90YWw6IHRoaXMuY29udGV4dC50eHRTdWJ0b3RhbCxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogJycsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEucHJpY2UpIHtcclxuICAgICAgICAgICAgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgLi4uKGRhdGEucHJpY2Uud2l0aF90YXggPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6IGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiBkYXRhLnByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAuLi4oZGF0YS5wcmljZS53aXRob3V0X3RheCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IGRhdGEucHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFBhcnNlcyBhbiBJU08gZGF0ZS10aW1lIHN0cmluZyBhbmQgZXh0cmFjdHMgdGhlIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgZGF0ZS10aW1lIHN0cmluZyB0byBwYXJzZS5cclxuICogQHJldHVybnMge09iamVjdHxudWxsfSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZXh0cmFjdGVkIGNvbXBvbmVudHMsIG9yIGBudWxsYCBpZiB0aGUgZm9ybWF0IGlzIGludmFsaWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlVGltZVN0cmluZyhzdHIpIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gL15cXHMqKD86KD86KFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkpfCg/OihcXGR7Mn0pLShcXGR7Mn0pKSk/KD86W1RcXHNdKT8oPzooXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KSg/OlxcLlxcZCspP3woXFxkezJ9KTooXFxkezJ9KXwoXFxkezJ9KSk/XFxzKig/Olp8KFsrLV0pKFxcZHsxLDJ9KSg/Ojo/KFxcZHsyfSkpPyk/XFxzKiQvO1xyXG5cclxuICAgIGNvbnN0IG1hdGNoID0gc3RyLnRyaW0oKS5tYXRjaChyZWdleCk7XHJcbiAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7IC8vIEludmFsaWQgZm9ybWF0XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW1xyXG4gICAgICAgICxcclxuICAgICAgICB5ZWFyLCBtb250aCwgZGF5LCAvLyBbMV0sIFsyXSwgWzNdXHJcbiAgICAgICAgc2hvcnRNb250aCwgc2hvcnREYXksIC8vIFs0XSwgWzVdXHJcbiAgICAgICAgaG91ciwgbWludXRlLCBzZWNvbmQsIC8vIFs2XSwgWzddLCBbOF1cclxuICAgICAgICBzaG9ydEhvdXIsIHNob3J0TWludXRlLCAvLyBbOV0sIFsxMF1cclxuICAgICAgICBzaW5nbGVUaW1lQ29tcG9uZW50LCAvLyBbMTFdXHJcbiAgICAgICAgdHpTaWduLCB0ekhvdXJPZmZzZXQsIHR6TWludXRlT2Zmc2V0LCAvLyBbMTJdLCBbMTNdLCBbMTRdXHJcbiAgICBdID0gbWF0Y2g7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0ge307XHJcblxyXG4gICAgLy8gRGF0ZSBjb21wb25lbnRzXHJcbiAgICBpZiAoeWVhciAmJiBtb250aCAmJiBkYXkpIHtcclxuICAgICAgICByZXN1bHQueWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcclxuICAgICAgICByZXN1bHQubW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xyXG4gICAgICAgIHJlc3VsdC5kYXkgPSBwYXJzZUludChkYXksIDEwKTtcclxuICAgIH0gZWxzZSBpZiAoc2hvcnRNb250aCAmJiBzaG9ydERheSkge1xyXG4gICAgICAgIHJlc3VsdC5tb250aCA9IHBhcnNlSW50KHNob3J0TW9udGgsIDEwKTtcclxuICAgICAgICByZXN1bHQuZGF5ID0gcGFyc2VJbnQoc2hvcnREYXksIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaW1lIGNvbXBvbmVudHNcclxuICAgIGlmIChob3VyICE9PSB1bmRlZmluZWQgJiYgbWludXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KGhvdXIsIDEwKTtcclxuICAgICAgICByZXN1bHQubWludXRlID0gcGFyc2VJbnQobWludXRlLCAxMCk7XHJcbiAgICAgICAgaWYgKHNlY29uZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zZWNvbmQgPSBwYXJzZUludChzZWNvbmQsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNob3J0SG91ciAhPT0gdW5kZWZpbmVkICYmIHNob3J0TWludXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KHNob3J0SG91ciwgMTApO1xyXG4gICAgICAgIHJlc3VsdC5taW51dGUgPSBwYXJzZUludChzaG9ydE1pbnV0ZSwgMTApO1xyXG4gICAgfSBlbHNlIGlmIChzaW5nbGVUaW1lQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXN1bHQuaG91ciA9IHBhcnNlSW50KHNpbmdsZVRpbWVDb21wb25lbnQsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaW1lem9uZVxyXG4gICAgaWYgKHR6U2lnbiAmJiB0ekhvdXJPZmZzZXQpIHtcclxuICAgICAgICBjb25zdCBzaWduID0gdHpTaWduID09PSAnKycgPyAxIDogLTE7XHJcbiAgICAgICAgY29uc3QgdHpIb3VyID0gcGFyc2VJbnQodHpIb3VyT2Zmc2V0LCAxMCk7XHJcbiAgICAgICAgY29uc3QgdHpNaW51dGUgPSB0ek1pbnV0ZU9mZnNldCA/IHBhcnNlSW50KHR6TWludXRlT2Zmc2V0LCAxMCkgOiAwO1xyXG4gICAgICAgIHJlc3VsdC50aW1lem9uZSA9IHNpZ24gKiAodHpIb3VyICsgdHpNaW51dGUgLyA2MCk7XHJcbiAgICB9IGVsc2UgaWYgKHN0ci5pbmNsdWRlcygnWicpKSB7XHJcbiAgICAgICAgcmVzdWx0LnRpbWV6b25lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBkYXRlLXRpbWUgc3RyaW5nIGludG8gYSBEYXRlIG9iamVjdCBhZGp1c3RlZCBmb3IgY291bnRkb3duIHB1cnBvc2VzLlxyXG4gKlxyXG4gKiAtIElmIHRoZSBkYXRlLXRpbWUgc3RyaW5nIGRvZXMgbm90IGluY2x1ZGUgYSB5ZWFyLCBtb250aCwgb3IgZGF5LCBpdCBpcyB0cmVhdGVkIGFzIGEgZGFpbHkgY291bnRkb3duLlxyXG4gKiAgIFRoZSBmdW5jdGlvbiB3aWxsIHNldCB0aGUgZGF0ZSB0byB0b2RheSBvciByb2xsIG92ZXIgdG8gdGhlIG5leHQgZGF5IGlmIHRoZSB0aW1lIGhhcyBhbHJlYWR5IHBhc3NlZC5cclxuICogLSBJZiB0aGUgZGF0ZS10aW1lIHN0cmluZyBkb2VzIG5vdCBpbmNsdWRlIGFuIGhvdXIsIG1pbnV0ZSwgb3Igc2Vjb25kLCB0aGV5IGRlZmF1bHQgdG8gMC5cclxuICogLSBUaGUgZnVuY3Rpb24gYWRqdXN0cyBmb3IgdGhlIHNwZWNpZmllZCB0aW1lem9uZSBvZmZzZXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgZGF0ZS10aW1lIHN0cmluZyB0byBwYXJzZS5cclxuICogQHJldHVybnMge0RhdGV8dW5kZWZpbmVkfSBBIERhdGUgb2JqZWN0IHVzZWQgZm9yIHRoZSBjb3VudGRvd24sIG9yIGB1bmRlZmluZWRgIGlmIHBhcnNpbmcgZmFpbHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb3VudGRvd25EYXRlKHN0cikge1xyXG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlRGF0ZVRpbWVTdHJpbmcoc3RyKTtcclxuICAgIGlmICghcGFyc2VkRGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxyXG4gICAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgdGltZXpvbmUgfSA9IHBhcnNlZERhdGU7XHJcblxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHkgPSB5ZWFyID8/IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbSA9IG1vbnRoID8/IChub3cuZ2V0TW9udGgoKSArIDEpO1xyXG4gICAgY29uc3QgZCA9IGRheSA/PyBub3cuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgaCA9IGhvdXIgfHwgMDtcclxuICAgIGNvbnN0IG1pbiA9IG1pbnV0ZSB8fCAwO1xyXG4gICAgY29uc3Qgc2VjID0gc2Vjb25kIHx8IDA7XHJcblxyXG4gICAgbGV0IGRhdGU7XHJcblxyXG4gICAgaWYgKHRpbWV6b25lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCB1dGNNaWxsaXMgPSBEYXRlLlVUQyh5LCBtIC0gMSwgZCwgaCwgbWluLCBzZWMpIC0gKHRpbWV6b25lICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh1dGNNaWxsaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBpZiAoeWVhcikgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcclxuICAgICAgICBpZiAobW9udGgpIGRhdGUuc2V0TW9udGgobW9udGggLSAxKTtcclxuICAgICAgICBpZiAoZGF5KSBkYXRlLnNldERhdGUoZGF5KTtcclxuICAgICAgICBkYXRlLnNldEhvdXJzKGgpO1xyXG4gICAgICAgIGRhdGUuc2V0TWludXRlcyhtaW4pO1xyXG4gICAgICAgIGRhdGUuc2V0U2Vjb25kcyhzZWMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgheWVhciAmJiAhbW9udGggJiYgIWRheSkge1xyXG4gICAgICAgIC8vIGZvciBkYWlseSBjb3VudGRvd24sIGFkZCAxIGRheSBpZiBkYXRlIGlzIGluIHRoZSBwYXN0XHJcbiAgICAgICAgaWYgKGRhdGUgPCBub3cpIHtcclxuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG4vKipcclxuICogKipTYWxlQ291bnRkb3duIFNpbmdsZXRvbiBPYmplY3QqKlxyXG4gKlxyXG4gKiBNYW5hZ2VzIGNvdW50ZG93biB0aW1lcnMgZm9yIHNhbGVzIG9yIHByb21vdGlvbmFsIGV2ZW50cyBvbiB5b3VyIHdlYnNpdGUuXHJcbiAqIEl0IGhhbmRsZXMgbXVsdGlwbGUgY291bnRkb3duIGVsZW1lbnRzLCB1cGRhdGVzIHRoZW0gaW4gcmVhbC10aW1lLCBhbmQgbWFuYWdlcyB2aXNpYmlsaXR5IGJhc2VkIG9uIHRoZSB2aWV3cG9ydC5cclxuICpcclxuICogLS0tXHJcbiAqXHJcbiAqICoqVXNhZ2U6KipcclxuICpcclxuICogKioxLiBDb25maWd1cmUgdGhlIENvdW50ZG93biAoT3B0aW9uYWwpOioqXHJcbiAqXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xyXG4gKiAgIC8vIE9wdGlvbmFsIHNldHRpbmdzXHJcbiAqICAgZGF0ZURhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkRhdGUnLCAgICAgICAvLyBEYXRhIGF0dHJpYnV0ZSBmb3IgY291bnRkb3duIGRhdGVcclxuICogICBpblZpZXdwb3J0RGF0YU5hbWU6ICdzYWxlQ291bnRkb3duSW5WaWV3cG9ydCcsIC8vIERhdGEgYXR0cmlidXRlIGZvciB2aWV3cG9ydCB2aXNpYmlsaXR5XHJcbiAqICAgc2VsZWN0b3JzOiB7IC4uLiB9LFxyXG4gKiAgIHRlbXBsYXRlOiAnLi4uJywgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3VzdG9tIEhUTUwgdGVtcGxhdGUgZm9yIHRoZSBjb3VudGRvd25cclxuICogICBoaWRlQ2xhc3M6ICdfaGlkZScsICAgICAgICAgICAgICAgICAgICAgIC8vIENsYXNzIHRvIGhpZGUgZWxlbWVudHNcclxuICogICBzYWxlRW5kQ2xhc3M6ICdfc2FsZUVuZGVkJywgICAgICAgICAgICAgIC8vIENsYXNzIHdoZW4gc2FsZSBlbmRzXHJcbiAqICAgYWN0aXZlQ2xhc3M6ICdfYWN0aXZlJywgICAgICAgICAgICAgICAgICAvLyBDbGFzcyB3aGVuIGNvdW50ZG93biBpcyBhY3RpdmVcclxuICogICB0cmFuc2xhdGlvbnM6IHtcclxuICogICAgIGVuZF9pbjogJ0VuZHMgaW4nLFxyXG4gKiAgICAgZGF5OiAnRGF5JyxcclxuICogICAgIGRheXM6ICdEYXlzJyxcclxuICogICAgIGhvdXI6ICdIb3VyJyxcclxuICogICAgIGhvdXJzOiAnSG91cnMnLFxyXG4gKiAgICAgbWludXRlOiAnTWludXRlJyxcclxuICogICAgIG1pbnV0ZXM6ICdNaW51dGVzJyxcclxuICogICAgIHNlY29uZDogJ1NlY29uZCcsXHJcbiAqICAgICBzZWNvbmRzOiAnU2Vjb25kcycsXHJcbiAqICAgfSxcclxuICogICB0eHRTYWxlQ291bnRkb3duSlNPTjogJ3sgXCJ0cmFuc2xhdGlvbnNcIjogeyAuLi4gfSB9JywgLy8gSlNPTiBzdHJpbmcgZm9yIHRyYW5zbGF0aW9uc1xyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqICoqMi4gQWRkIENvdW50ZG93biBFbGVtZW50czoqKlxyXG4gKlxyXG4gKiAtICoqT3B0aW9uIDE6KiogRGlyZWN0bHkgc3BlY2lmeSB0aGUgZGF0ZSB3aGVuIGFkZGluZyB0aGUgZWxlbWVudC5cclxuICpcclxuICogICBgYGBqYXZhc2NyaXB0XHJcbiAqICAgY29uc3QgJGVsID0gJCgnI2NvdW50ZG93bi1lbGVtZW50Jyk7XHJcbiAqICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XHJcbiAqICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsLCBkYXRlKTtcclxuICogICBgYGBcclxuICpcclxuICogLSAqKk9wdGlvbiAyOioqIFNldCBkYXRhIGF0dHJpYnV0ZXMgb24gdGhlIGVsZW1lbnQgYW5kIGFkZCBpdC5cclxuICpcclxuICogICBgYGBqYXZhc2NyaXB0XHJcbiAqICAgY29uc3QgJGVsID0gJCgnI2NvdW50ZG93bi1lbGVtZW50Jyk7XHJcbiAqICAgJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25EYXRlJywgJzIwMjMtMTItMzFUMjM6NTk6NTknKTtcclxuICogICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAnRW5kcyBpbicsIC4uLiB9KTtcclxuICogICBTYWxlQ291bnRkb3duLmFkZCgkZWwpO1xyXG4gKiAgIGBgYFxyXG4gKlxyXG4gKiAtLS1cclxuICpcclxuICogKipOb3RlczoqKlxyXG4gKlxyXG4gKiAtIFRoZSBjb3VudGRvd24gYXV0b21hdGljYWxseSB1cGRhdGVzIHZpc2libGUgZWxlbWVudHMgaW4gdGhlIHZpZXdwb3J0LlxyXG4gKiAtIFN1cHBvcnRzIGN1c3RvbWl6YXRpb24gdGhyb3VnaCBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGF0dHJpYnV0ZXMuXHJcbiAqIC0gSGFuZGxlcyBhdXRvbWF0aWMgc3RvcHBpbmcgd2hlbiBubyBlbGVtZW50cyByZW1haW4uXHJcbiAqXHJcbiAqIC0tLVxyXG4gKlxyXG4gKiAqKkV4YW1wbGU6KipcclxuICpcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiAvLyBJbml0aWFsaXplIGFuZCBjb25maWd1cmVcclxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xyXG4gKiAgIHRyYW5zbGF0aW9uczoge1xyXG4gKiAgICAgZW5kX2luOiAnU2FsZSBlbmRzIGluJyxcclxuICogICAgIC8vIE90aGVyIHRyYW5zbGF0aW9ucy4uLlxyXG4gKiAgIH0sXHJcbiAqIH0pO1xyXG4gKlxyXG4gKiAvLyBBZGQgY291bnRkb3duIGVsZW1lbnRcclxuICogY29uc3QgJGNvdW50ZG93biA9ICQoJyNjb3VudGRvd24nKTtcclxuICogY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XHJcbiAqIFNhbGVDb3VudGRvd24uYWRkKCRjb3VudGRvd24sIGVuZERhdGUpO1xyXG4gKiBgYGBcclxuICovXHJcblxyXG5jb25zdCBTYWxlQ291bnRkb3duID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsZWN0aW9uIG9mIGNvdW50ZG93biBlbGVtZW50c1xyXG4gICAgICogQHR5cGUge1NldDxFbGVtZW50Pn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGVsZW1lbnRzOiBuZXcgU2V0KCksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaW1lciBpbnRlcnZhbCBJRFxyXG4gICAgICogQHR5cGUge251bWJlcnxudWxsfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGltZXI6IG51bGwsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZVxyXG4gICAgICogQHR5cGUge0ludGVyc2VjdGlvbk9ic2VydmVyfG51bGx9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvYnNlcnZlcjogbnVsbCxcclxuXHJcbiAgICAvKipcclxuICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgY291bnRkb3duIGRhdGVcclxuICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICogQHByaXZhdGVcclxuICAgICovXHJcbiAgICBkYXRlRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duRGF0ZScsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5XHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgaW5WaWV3cG9ydERhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkluVmlld3BvcnQnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgdHJhbnNsYXRpb25zIEpTT05cclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICB0cmFuc2xhdGlvbnNEYXRhTmFtZTogJ3NhbGVDb3VudGRvd25UcmFuc2xhdGlvbnMnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0b3JzIGZvciBjb3VudGRvd24gZWxlbWVudHNcclxuICAgICAqIEB0eXBlIHt7ZW5kTGFiZWw6IHN0cmluZywgZGF5OiBzdHJpbmcsIGRheVZhbHVlOiBzdHJpbmcsIGRheUxhYmVsOiBzdHJpbmcsIGhvdXI6IHN0cmluZywgaG91clZhbHVlOiBzdHJpbmcsIGhvdXJMYWJlbDogc3RyaW5nLCBtaW51dGU6IHN0cmluZywgbWludXRlVmFsdWU6IHN0cmluZywgbWludXRlTGFiZWw6IHN0cmluZywgc2Vjb25kOiBzdHJpbmcsIHNlY29uZFZhbHVlOiBzdHJpbmcsIHNlY29uZExhYmVsOiBzdHJpbmd9fVxyXG4gICAgICovXHJcbiAgICBzZWxlY3RvcnM6IHtcclxuICAgICAgICBlbmRMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWVuZC1sYWJlbF0nLFxyXG4gICAgICAgIGRheTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheV0nLFxyXG4gICAgICAgIGRheVZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF5LXZhbHVlXScsXHJcbiAgICAgICAgZGF5TGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktbGFiZWxdJyxcclxuICAgICAgICBob3VyOiAnW2RhdGEtc2FsZS1jb3VudGRvd24taG91cl0nLFxyXG4gICAgICAgIGhvdXJWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWhvdXItdmFsdWVdJyxcclxuICAgICAgICBob3VyTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLWxhYmVsXScsXHJcbiAgICAgICAgbWludXRlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlXScsXHJcbiAgICAgICAgbWludXRlVmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtdmFsdWVdJyxcclxuICAgICAgICBtaW51dGVMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS1sYWJlbF0nLFxyXG4gICAgICAgIHNlY29uZDogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZF0nLFxyXG4gICAgICAgIHNlY29uZFZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLXZhbHVlXScsXHJcbiAgICAgICAgc2Vjb25kTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtbGFiZWxdJyxcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZW1wbGF0ZSBmb3IgY291bnRkb3duIGVsZW1lbnRzXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWJhZGdlLXBlcmNlbnRcIj48L3VzZT48L3N2Zz48L2k+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfZW5kXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1lbmQtbGFiZWw+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX2RheVwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5PjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktbGFiZWw+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9ob3VyXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24taG91ci1sYWJlbD48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX21pbnV0ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtbGFiZWw+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9zZWNvbmRcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZD48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kLWxhYmVsPjwvc3Bhbj48L3NwYW4+XHJcbiAgICBgLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xhc3MgbmFtZSB0byBoaWRlIGVsZW1lbnRzXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgaGlkZUNsYXNzOiAnX2hpZGUnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBzYWxlIGhhcyBlbmRlZFxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHNhbGVFbmRDbGFzczogJ19zYWxlRW5kZWQnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBhY3RpdmUgY291bnRkb3duXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYWN0aXZlQ2xhc3M6ICdfYWN0aXZlJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zbGF0aW9ucyBmb3IgY291bnRkb3duIGxhYmVsc1xyXG4gICAgICogQHR5cGUge3tlbmRfaW46IHN0cmluZywgZGF5OiBzdHJpbmcsIGRheXM6IHN0cmluZywgaG91cjogc3RyaW5nLCBob3Vyczogc3RyaW5nLCBtaW51dGU6IHN0cmluZywgbWludXRlczogc3RyaW5nLCBzZWNvbmQ6IHN0cmluZywgc2Vjb25kczogc3RyaW5nfX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHRyYW5zbGF0aW9uczoge1xyXG4gICAgICAgIGVuZF9pbjogJ0VuZCBpbicsXHJcbiAgICAgICAgZGF5OiAnRGF5JyxcclxuICAgICAgICBkYXlzOiAnRGF5cycsXHJcbiAgICAgICAgaG91cjogJ0hvdXInLFxyXG4gICAgICAgIGhvdXJzOiAnSG91cnMnLFxyXG4gICAgICAgIG1pbnV0ZTogJ01pbnV0ZScsXHJcbiAgICAgICAgbWludXRlczogJ01pbnV0ZXMnLFxyXG4gICAgICAgIHNlY29uZDogJ1NlY29uZCcsXHJcbiAgICAgICAgc2Vjb25kczogJ1NlY29uZHMnLFxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyZSB0aGUgY291bnRkb3duIHNldHRpbmdzXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZGF0ZURhdGFOYW1lIC0gRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgY291bnRkb3duIGRhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmluVmlld3BvcnREYXRhTmFtZSAtIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnNlbGVjdG9ycyAtIFNlbGVjdG9ycyBmb3IgY291bnRkb3duIGVsZW1lbnRzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZW5kTGFiZWxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlWYWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmRheUxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuaG91clxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJWYWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJMYWJlbFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZVZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMubWludXRlTGFiZWxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRWYWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLnNlY29uZExhYmVsXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50ZW1wbGF0ZSAtIFRlbXBsYXRlIGZvciBjb3VudGRvd24gZWxlbWVudHNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmhpZGVDbGFzcyAtIENsYXNzIG5hbWUgdG8gaGlkZSBlbGVtZW50c1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2FsZUVuZENsYXNzIC0gQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBzYWxlIGhhcyBlbmRlZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYWN0aXZlQ2xhc3MgLSBDbGFzcyBuYW1lIHRvIGluZGljYXRlIGFjdGl2ZSBjb3VudGRvd25cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnRyYW5zbGF0aW9ucyAtIFRyYW5zbGF0aW9ucyBmb3IgY291bnRkb3duIGxhYmVsc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmVuZF9pblxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmRheVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmRheXNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5ob3VyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuaG91cnNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5taW51dGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5taW51dGVzXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuc2Vjb25kXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuc2Vjb25kc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHh0U2FsZUNvdW50ZG93bkpTT04gLSBKU09OIHN0cmluZyBmb3IgdHJhbnNsYXRpb25zXHJcbiAgICAgKi9cclxuICAgIGNvbmZpZ3VyZSh7XHJcbiAgICAgICAgZGF0ZURhdGFOYW1lLFxyXG4gICAgICAgIGluVmlld3BvcnREYXRhTmFtZSxcclxuICAgICAgICBzZWxlY3RvcnMsXHJcbiAgICAgICAgdGVtcGxhdGUsXHJcbiAgICAgICAgaGlkZUNsYXNzLFxyXG4gICAgICAgIHNhbGVFbmRDbGFzcyxcclxuICAgICAgICBhY3RpdmVDbGFzcyxcclxuICAgICAgICB0cmFuc2xhdGlvbnMsXHJcbiAgICAgICAgdHh0U2FsZUNvdW50ZG93bkpTT04sXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICBpZiAoZGF0ZURhdGFOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZURhdGFOYW1lID0gZGF0ZURhdGFOYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluVmlld3BvcnREYXRhTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluVmlld3BvcnREYXRhTmFtZSA9IGluVmlld3BvcnREYXRhTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RvcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RvcnMgPSB7IC4uLnRoaXMuc2VsZWN0b3JzLCAuLi5zZWxlY3RvcnMgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGlkZUNsYXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUNsYXNzID0gaGlkZUNsYXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNhbGVFbmRDbGFzcykge1xyXG4gICAgICAgICAgICB0aGlzLnNhbGVFbmRDbGFzcyA9IHNhbGVFbmRDbGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhY3RpdmVDbGFzcykge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNsYXNzID0gYWN0aXZlQ2xhc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb25zID0geyAuLi50aGlzLnRyYW5zbGF0aW9ucywgLi4udHJhbnNsYXRpb25zIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHh0U2FsZUNvdW50ZG93bkpTT04pIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHR4dFNhbGVDb3VudGRvd25KU09OKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zID0gT2JqZWN0LmtleXMoanNvbi50cmFuc2xhdGlvbnMpLnJlZHVjZSgoX3RyYW5zLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG9ydEtleSA9IGtleS5zcGxpdCgnLicpLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICAgICAgICAgIF90cmFuc1tzaG9ydEtleV0gPSBqc29uLnRyYW5zbGF0aW9uc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHJhbnM7XHJcbiAgICAgICAgICAgICAgICB9LCB7fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi50cmFucyB9O1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCB0aGUgZWxlbWVudCAmIGNvcnJlc3BvbmRpbmcgZGF0ZSB0byB0aGUgY291bnRkb3duIGNvbGxlY3Rpb25cclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcclxuICAgICAqIEBwYXJhbSB7RGF0ZXxudWxsfSBkYXRlIC0gVGhlIGNvdW50ZG93biBkYXRlLiBJZiBub3QgcHJvdmlkZWQsIGl0IHdpbGwgYmUgZXh0cmFjdGVkIGZyb20gdGhlIGRhdGEgYXR0cmlidXRlIGBkYXRhLXNhbGUtY291bnRkb3duLWRhdGVgXHJcbiAgICAgKi9cclxuICAgIGFkZCgkZWwsIGRhdGUgPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkRGF0ZSA9IGRhdGUgfHwgJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUpO1xyXG4gICAgICAgIGlmICh2YWxpZERhdGUgJiYgdHlwZW9mIHZhbGlkRGF0ZSA9PT0gJ3N0cmluZycpIHZhbGlkRGF0ZSA9IHBhcnNlQ291bnRkb3duRGF0ZSh2YWxpZERhdGUpO1xyXG4gICAgICAgIGlmICghdmFsaWREYXRlKSByZXR1cm47XHJcbiAgICAgICAgJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUsIHZhbGlkRGF0ZSkuaHRtbCh0aGlzLnRlbXBsYXRlKVxyXG4gICAgICAgICAgICAuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLmVsZW1lbnRzLmFkZChlbCkpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZSgkZWwpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZlIHRoZSBlbGVtZW50IGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5IGNoZWNrXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBvYnNlcnZlKCRlbCkge1xyXG4gICAgICAgIGlmICghd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIC8vIGFzc3VtZSBlbGVtZW50IGlzIGluIHZpZXdwb3J0IGlmIEludGVyc2VjdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICAgICAgJGVsLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2UgaWYgbm90IGFscmVhZHkgY3JlYXRlZFxyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVudHJ5LnRhcmdldCkuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSwgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0ludGVyc2VjdGluZycsIGVudHJ5LnRhcmdldCwgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIHJvb3Q6IG51bGwsIC8vIERlZmF1bHRzIHRvIHZpZXdwb3J0XHJcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAsIC8vIENhbGxiYWNrIGlzIHRyaWdnZXJlZCB3aGVuIGFueSBwYXJ0IG9mIHRoZSBlbGVtZW50IGlzIHZpc2libGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkZWwuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLm9ic2VydmVyLm9ic2VydmUoZWwpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIG9ic2VydmluZyB0aGUgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdW5vYnNlcnZlKGVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci51bm9ic2VydmUoZWwpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndW5vYnNlcnZlJywgZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZWxlbWVudCBpcyBpbiB2aWV3cG9ydCBhbmQgdmlzaWJsZVxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpc1Zpc2libGVJblZpZXdwb3J0KCRlbCkge1xyXG4gICAgICAgIHJldHVybiAkZWwuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSkgJiYgJGVsLmlzKCc6dmlzaWJsZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIHN0YXJ0IHJ1bm5pbmcgY291bnRkb3duIGV2ZXJ5IHNlY29uZFxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGltZXIgJiYgdGhpcy5lbGVtZW50cy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5ydW4oKSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIHN0b3AgY291bnRkb3duXHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKi9cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RvcCBjb3VudGRvd24nKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBydW5uaW5nIGNvdW50ZG93biBwcm9jZXNzXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgLy8gY2hlY2sgYW5kIHN0b3AgaWYgZWxlbWVudCBubyBsb25nZXIgZXhpc3RzIGluIERPTVxyXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoZWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmRlbGV0ZShlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVub2JzZXJ2ZShlbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBjb3VudGRvd24gaWYgZWxlbWVudCBpcyBub3QgaW4gdmlld3BvcnQgb3Igbm90IHZpc2libGVcclxuICAgICAgICAgICAgaWYgKCFkYXRlIHx8ICF0aGlzLmlzVmlzaWJsZUluVmlld3BvcnQoJGVsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGUgPD0gbm93KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDb3VudCBkb3duIGRhdGUgaGFzIHBhc3NlZFxyXG4gICAgICAgICAgICAgICAgJGVsLmFkZENsYXNzKHRoaXMuc2FsZUVuZENsYXNzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlKGVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5vYnNlcnZlKGVsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSByZW1haW5pbmcgdGltZSAoZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBkYXRlIC0gbm93O1xyXG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGVuZExhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZW5kTGFiZWwpO1xyXG4gICAgICAgICAgICBjb25zdCAkZGF5ID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5KTtcclxuICAgICAgICAgICAgY29uc3QgJGRheVZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5VmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCAkZGF5TGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5kYXlMYWJlbCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRob3VyID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91cik7XHJcbiAgICAgICAgICAgIGNvbnN0ICRob3VyVmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5ob3VyVmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCAkaG91ckxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91ckxhYmVsKTtcclxuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtaW51dGVWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZVZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZUxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMubWludXRlTGFiZWwpO1xyXG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kKTtcclxuICAgICAgICAgICAgY29uc3QgJHNlY29uZFZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kVmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5zZWNvbmRMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi4kZWwuZGF0YSh0aGlzLnRyYW5zbGF0aW9uc0RhdGFOYW1lKSB9O1xyXG5cclxuICAgICAgICAgICAgJGVsLmFkZENsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgICAgICAkZW5kTGFiZWwuaHRtbCh0cmFuc2xhdGlvbnMuZW5kX2luKTtcclxuICAgICAgICAgICAgJGRheVZhbHVlLnRleHQoZGF5cyk7XHJcbiAgICAgICAgICAgICRkYXlMYWJlbC5odG1sKGRheXMgPT09IDEgPyB0cmFuc2xhdGlvbnMuZGF5IDogdHJhbnNsYXRpb25zLmRheXMpO1xyXG4gICAgICAgICAgICAkZGF5LnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwKTtcclxuICAgICAgICAgICAgJGhvdXJWYWx1ZS50ZXh0KGhvdXJzKTtcclxuICAgICAgICAgICAgJGhvdXJMYWJlbC5odG1sKGhvdXJzID09PSAxID8gdHJhbnNsYXRpb25zLmhvdXIgOiB0cmFuc2xhdGlvbnMuaG91cnMpO1xyXG4gICAgICAgICAgICAkaG91ci50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCk7XHJcbiAgICAgICAgICAgICRtaW51dGVWYWx1ZS50ZXh0KG1pbnV0ZXMpO1xyXG4gICAgICAgICAgICAkbWludXRlTGFiZWwuaHRtbChtaW51dGVzID09PSAxID8gdHJhbnNsYXRpb25zLm1pbnV0ZSA6IHRyYW5zbGF0aW9ucy5taW51dGVzKTtcclxuICAgICAgICAgICAgJG1pbnV0ZS50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwKTtcclxuICAgICAgICAgICAgJHNlY29uZFZhbHVlLnRleHQoc2Vjb25kcyk7XHJcbiAgICAgICAgICAgICRzZWNvbmRMYWJlbC5odG1sKHNlY29uZHMgPT09IDEgPyB0cmFuc2xhdGlvbnMuc2Vjb25kIDogdHJhbnNsYXRpb25zLnNlY29uZHMpO1xyXG4gICAgICAgICAgICAkc2Vjb25kLnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwICYmIGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGVDb3VudGRvd247XHJcbiIsImV4cG9ydCBjb25zdCBhcmlhS2V5Q29kZXMgPSB7XHJcbiAgICBSRVRVUk46IDEzLFxyXG4gICAgU1BBQ0U6IDMyLFxyXG4gICAgTEVGVDogMzcsXHJcbiAgICBVUDogMzgsXHJcbiAgICBSSUdIVDogMzksXHJcbiAgICBET1dOOiA0MCxcclxufTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpbml0UmFkaW9PcHRpb25zIH0gZnJvbSAnLi9yYWRpb09wdGlvbnMnO1xyXG4iLCJpbXBvcnQgeyBhcmlhS2V5Q29kZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBzZXRDaGVja2VkUmFkaW9JdGVtID0gKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4KSA9PiB7XHJcbiAgICBpdGVtQ29sbGVjdGlvbi5lYWNoKChpZHgsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCAkaXRlbSA9ICQoaXRlbSk7XHJcbiAgICAgICAgaWYgKGlkeCAhPT0gaXRlbUlkeCkge1xyXG4gICAgICAgICAgICAkaXRlbS5hdHRyKCdhcmlhLWNoZWNrZWQnLCBmYWxzZSkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgdHJ1ZSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgJGl0ZW0udHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbiA9IChsYXN0SXRlbUlkeCwgY3VycmVudElkeCkgPT4ge1xyXG4gICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICBjYXNlIGN1cnJlbnRJZHggPiBsYXN0SXRlbUlkeDogcmV0dXJuIDA7XHJcbiAgICBjYXNlIGN1cnJlbnRJZHggPCAwOiByZXR1cm4gbGFzdEl0ZW1JZHg7XHJcbiAgICBkZWZhdWx0OiByZXR1cm4gY3VycmVudElkeDtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUl0ZW1LZXlEb3duID0gaXRlbUNvbGxlY3Rpb24gPT4gZSA9PiB7XHJcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGU7XHJcbiAgICBjb25zdCBpdGVtSWR4ID0gaXRlbUNvbGxlY3Rpb24uaW5kZXgoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgIGNvbnN0IGxhc3RDb2xsZWN0aW9uSXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgaWYgKE9iamVjdC52YWx1ZXMoYXJpYUtleUNvZGVzKS5pbmNsdWRlcyhrZXlDb2RlKSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xyXG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuTEVGVDpcclxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlVQOiB7XHJcbiAgICAgICAgY29uc3QgcHJldkl0ZW1JZHggPSBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24obGFzdENvbGxlY3Rpb25JdGVtSWR4LCBpdGVtSWR4IC0gMSk7XHJcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZ2V0KHByZXZJdGVtSWR4KS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggLSAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlJJR0hUOlxyXG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuRE9XTjoge1xyXG4gICAgICAgIGNvbnN0IG5leHRJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCArIDEpO1xyXG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChuZXh0SXRlbUlkeCkudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4ICsgMSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoJGNvbnRhaW5lciwgaXRlbVNlbGVjdG9yKSA9PiB7XHJcbiAgICBjb25zdCAkaXRlbUNvbGxlY3Rpb24gPSAkY29udGFpbmVyLmZpbmQoaXRlbVNlbGVjdG9yKTtcclxuXHJcbiAgICAkY29udGFpbmVyLm9uKCdrZXlkb3duJywgaXRlbVNlbGVjdG9yLCBoYW5kbGVJdGVtS2V5RG93bigkaXRlbUNvbGxlY3Rpb24pKTtcclxufTtcclxuIiwiLy8gaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4uL3dpc2hsaXN0JzsgLy8gcGFwYXRoZW1lcy1ldmV2YTogZGlzYWJsZWRcclxuaW1wb3J0IHsgaW5pdFJhZGlvT3B0aW9ucyB9IGZyb20gJy4vYXJpYSc7XHJcblxyXG5jb25zdCBvcHRpb25zVHlwZXNNYXAgPSB7XHJcbiAgICBJTlBVVF9GSUxFOiAnaW5wdXQtZmlsZScsXHJcbiAgICBJTlBVVF9URVhUOiAnaW5wdXQtdGV4dCcsXHJcbiAgICBJTlBVVF9OVU1CRVI6ICdpbnB1dC1udW1iZXInLFxyXG4gICAgSU5QVVRfQ0hFQ0tCT1g6ICdpbnB1dC1jaGVja2JveCcsXHJcbiAgICBURVhUQVJFQTogJ3RleHRhcmVhJyxcclxuICAgIERBVEU6ICdkYXRlJyxcclxuICAgIFNFVF9TRUxFQ1Q6ICdzZXQtc2VsZWN0JyxcclxuICAgIFNFVF9SRUNUQU5HTEU6ICdzZXQtcmVjdGFuZ2xlJyxcclxuICAgIFNFVF9SQURJTzogJ3NldC1yYWRpbycsXHJcbiAgICBTV0FUQ0g6ICdzd2F0Y2gnLFxyXG4gICAgUFJPRFVDVF9MSVNUOiAncHJvZHVjdC1saXN0JyxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25DaGFuZ2VEZWNvcmF0b3IoYXJlRGVmYXVsdE9wdGlvbnNTZXQpIHtcclxuICAgIHJldHVybiAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgIGlmIChhcmVEZWZhdWx0T3B0aW9uc1NldCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsc0Jhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcclxuICAgICAgICAvLyBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7IC8vIHBhcGF0aGVtZXMtZXZldmE6IGRpc2FibGVkXHJcbiAgICAgICAgdGhpcy5nZXRUYWJSZXF1ZXN0cygpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKS5lYWNoKChfXywgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YWx1ZSwgdHlwZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUodmFyaWFudERvbU5vZGUsIHZhcmlhbnRUeXBlKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YXJpYW50VHlwZSkge1xyXG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNFVF9SQURJTzpcclxuICAgICAgICBjYXNlIG9wdGlvbnNUeXBlc01hcC5TV0FUQ0g6IHtcclxuICAgICAgICAgICAgaW5pdFJhZGlvT3B0aW9ucygkKHZhcmlhbnREb21Ob2RlKSwgJ1t0eXBlPXJhZGlvXScpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHJhZGlvIGJ1dHRvbnMgdG8gZ2V0IGRlc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgaW5pdFJhZGlvQXR0cmlidXRlcygpIHtcclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIHJhZGlvKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRyYWRpbyA9ICQocmFkaW8pO1xyXG5cclxuICAgICAgICAgICAgLy8gT25seSBiaW5kIHRvIGNsaWNrIG9uY2VcclxuICAgICAgICAgICAgaWYgKCRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgJHJhZGlvLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHJhZGlvLmRhdGEoJ3N0YXRlJykgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJywgJHJhZGlvLnByb3AoJ2NoZWNrZWQnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcclxuICAgICAqL1xyXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XHJcbiAgICAgICAgY29uc3QgaW5TdG9ja0lkcyA9IGRhdGEuaW5fc3RvY2tfYXR0cmlidXRlcztcclxuICAgICAgICBjb25zdCBvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UgPSB0aGlzLmNvbnRleHQub3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlO1xyXG4gICAgICAgIGxldCBvdXRPZlN0b2NrTWVzc2FnZSA9IGRhdGEub3V0X29mX3N0b2NrX21lc3NhZ2U7XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtvdXRPZlN0b2NrTWVzc2FnZX0pYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7b3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlfSlgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRySWQgPSBwYXJzZUludCgkYXR0cmlidXRlLmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZScpLCAxMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBmb3IgZnJhZ21lbnQgaWRlbnRpZmllciBpbiBVUkwgcmVxdWVzdGluZyBhIHNwZWNpZmljIHRhYlxyXG4gICAgICovXHJcbiAgICBnZXRUYWJSZXF1ZXN0cygpIHtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3RhYi0nKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJCgnLnRhYnMnKS5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YWJDb250ZW50ID0gJChgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkYWN0aXZlVGFiLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICRhY3RpdmVUYWIuZmluZCgnLnRhYicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYClcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICR0YWJDb250ZW50LmFkZENsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpbmNlICRwcm9kdWN0VmlldyBjYW4gYmUgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgdXNpbmcgcmVuZGVyX3dpdGgsXHJcbiAgICAgKiBXZSBoYXZlIHRvIHJldHJpZXZlIHRoZSByZXNwZWN0aXZlIGVsZW1lbnRzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICRzY29wZVxyXG4gICAgICovXHJcbiAgICBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkYWRkVG9DYXJ0Rm9ybTogJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJHdpc2hsaXN0VmFyaWF0aW9uOiAkKCdbZGF0YS13aXNobGlzdC1hZGRdIFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgc3RvY2s6IHtcclxuICAgICAgICAgICAgICAgICRjb250YWluZXI6ICQoJy5mb3JtLWZpZWxkLS1zdG9jaycsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tkYXRhLXByb2R1Y3Qtc3RvY2tdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2t1OiB7XHJcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnNrdS1sYWJlbCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwYzoge1xyXG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC51cGMtbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBxdWFudGl0eToge1xyXG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXHJcbiAgICAgICAgICAgICR3YWxsZXRCdXR0b25zOiAkKCdbZGF0YS1hZGQtdG8tY2FydC13YWxsZXQtYnV0dG9uc10nLCAkc2NvcGUpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIHRoZSBwcmljaW5nIGVsZW1lbnRzIHRoYXQgd2lsbCBzaG93IHVwIG9ubHkgd2hlbiB0aGUgcHJpY2UgZXhpc3RzIGluIEFQSVxyXG4gICAgICogQHBhcmFtIHZpZXdNb2RlbFxyXG4gICAgICovXHJcbiAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcclxuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVWaWV3KGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gIWRhdGEuaW5zdG9ja1xyXG4gICAgICAgICAgICA/IChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZSB8fCB0aGlzLmNvbnRleHQub3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlKVxyXG4gICAgICAgICAgICA6IChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5wcmljZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLndlaWdodCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdlaWdodC5odG1sKGRhdGEud2VpZ2h0LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgdmFyaWF0aW9uX2lkIGlmIGl0IGV4aXN0cyBmb3IgYWRkaW5nIHRvIHdpc2hsaXN0XHJcbiAgICAgICAgaWYgKGRhdGEudmFyaWFudElkKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcclxuICAgICAgICBpZiAoZGF0YS5za3UpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dChkYXRhLnNrdSk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmIChkYXRhLnVwYykge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KGRhdGEudXBjKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dCgnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBzdG9jayB2aWV3IGlzIG9uIChDUCBzZXR0aW5ncylcclxuICAgICAgICBpZiAodmlld01vZGVsLnN0b2NrLiRjb250YWluZXIubGVuZ3RoICYmIHR5cGVvZiBkYXRhLnN0b2NrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RvY2sgY29udGFpbmVyIGlzIGhpZGRlbiwgc2hvd1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xyXG5cclxuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXYWxsZXRCdXR0b25zVmlldyhkYXRhKTtcclxuXHJcbiAgICAgICAgLy8gSWYgQnVsayBQcmljaW5nIHJlbmRlcmVkIEhUTUwgaXMgYXZhaWxhYmxlXHJcbiAgICAgICAgaWYgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcyAmJiBjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKCcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFRvQ2FydFdyYXBwZXIgPSAkKCcjYWRkLXRvLWNhcnQtd3JhcHBlcicpO1xyXG5cclxuICAgICAgICBpZiAoYWRkVG9DYXJ0V3JhcHBlci5pcygnOmhpZGRlbicpICYmIGRhdGEucHVyY2hhc2FibGUpIHtcclxuICAgICAgICAgICAgYWRkVG9DYXJ0V3JhcHBlci5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cclxuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRoX3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aF90YXguZm9ybWF0dGVkfWBcclxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aF90YXguZm9ybWF0dGVkO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJHNwYW4uaHRtbCh1cGRhdGVkUHJpY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cclxuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRob3V0X3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aG91dF90YXguZm9ybWF0dGVkfWBcclxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJHNwYW4uaHRtbCh1cGRhdGVkUHJpY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdyBhbiBtZXNzYWdlIGJveCBpZiBhIG1lc3NhZ2UgaXMgcGFzc2VkXHJcbiAgICAgKiBIaWRlIHRoZSBib3ggaWYgdGhlIG1lc3NhZ2UgaXMgZW1wdHlcclxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBzaG93TWVzc2FnZUJveChtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpO1xyXG5cclxuICAgICAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xyXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3KGRhdGEpIHtcclxuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZEZvcm0gPSB2aWV3TW9kZWwuJGFkZFRvQ2FydEZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkoaXNWYWxpZEZvcm0gJiYgZGF0YS5wdXJjaGFzYWJsZSAmJiBkYXRhLmluc3RvY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KHNob3VsZFNob3cpIHtcclxuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XHJcblxyXG4gICAgICAgIGlmIChzaG91bGRTaG93KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLiR3YWxsZXRCdXR0b25zLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xyXG5cclxuICAgICAgICByZXR1cm4gJHBhcmVudCA/ICRwYXJlbnQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZScpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIGlzIHRoZSBzZWxlY3RlZCBvcHRpb24gaW4gYSBzZWxlY3QgZHJvcGRvd24sIHNlbGVjdCB0aGUgZmlyc3Qgb3B0aW9uIChNRVJDLTYzOSlcclxuICAgICAgICAgICAgaWYgKCRzZWxlY3QudmFsKCkgPT09ICRhdHRyaWJ1dGUuYXR0cigndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsc0Jhc2UsIHsgb3B0aW9uQ2hhbmdlRGVjb3JhdG9yIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtYmFzZSc7XHJcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xyXG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XHJcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSAnLi4vLi4vcGFwYXRoZW1lcy9leWV2YS9pbWFnZS1nYWxsZXJ5JzsgLy8gcGFwYXRoZW1lcy1leWV2YSBlZGl0ZWRcclxuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBhbGVydE1vZGFsLCBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCB7IGlzRW1wdHksIGlzUGxhaW5PYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZUZvcm1EYXRhIH0gZnJvbSAnLi91dGlscy9hcGknO1xyXG5pbXBvcnQgeyBpc0Jyb3dzZXJJRSwgY29udmVydEludG9BcnJheSB9IGZyb20gJy4vdXRpbHMvaWUtaGVscGVycyc7XHJcbmltcG9ydCBiYW5uZXJVdGlscyBmcm9tICcuL3V0aWxzL2Jhbm5lci11dGlscyc7XHJcbmltcG9ydCBjdXJyZW5jeVNlbGVjdG9yIGZyb20gJy4uL2dsb2JhbC9jdXJyZW5jeS1zZWxlY3Rvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoJHNjb3BlLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdIC5sb2FkaW5nT3ZlcmxheScpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5ID0gbmV3IEltYWdlR2FsbGVyeSgkKCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScsIHRoaXMuJHNjb3BlKSk7XHJcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuUXVhbnRpdHlDaGFuZ2UoKTtcclxuICAgICAgICB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlID0gJCgnLnN3YXRjaC1vcHRpb24tbWVzc2FnZScpO1xyXG4gICAgICAgIHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlID0ge307XHJcbiAgICAgICAgdGhpcy5zd2F0Y2hHcm91cElkTGlzdCA9ICQoJ1tpZF49XCJzd2F0Y2hHcm91cFwiXScpLm1hcCgoXywgZ3JvdXApID0+ICQoZ3JvdXApLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVNlbGVjdG9yKCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKTtcclxuXHJcbiAgICAgICAgaWYgKCRmb3JtWzBdLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICRmb3JtLmZpbmQoJ2lucHV0I2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xyXG4gICAgICAgIHRoaXMuYmluZFJlbmV3aW5nRGF0YVBsYW5WaXNpYmlsaXR5KCRwcm9kdWN0T3B0aW9uc0VsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdFN3YXRjaEdyb3VwID0gJCgnW2lkKj1cImF0dHJpYnV0ZV9zd2F0Y2hcIl0nLCAkZm9ybSk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RTd2F0Y2hMYWJlbHMgPSAkKCcuZm9ybS1vcHRpb24tc3dhdGNoJywgJGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IHBsYWNlU3dhdGNoTGFiZWxJbWFnZSA9IChfLCBsYWJlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uSW1hZ2UgPSAkKCcuZm9ybS1vcHRpb24tZXhwYW5kZWQnLCAkKGxhYmVsKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkltYWdlV2lkdGggPSAkb3B0aW9uSW1hZ2Uub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCA9IDU1O1xyXG4gICAgICAgICAgICBjb25zdCB7IHJpZ2h0IH0gPSBsYWJlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3QgZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIgPSB3aW5kb3cuc2NyZWVuLndpZHRoIC0gcmlnaHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0VmFsdWUgPSBvcHRpb25JbWFnZVdpZHRoIC0gZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIgPCAob3B0aW9uSW1hZ2VXaWR0aCArIGV4dGVuZGVkT3B0aW9uSW1hZ2VPZmZzZXRMZWZ0KSkge1xyXG4gICAgICAgICAgICAgICAgJG9wdGlvbkltYWdlLmNzcygnbGVmdCcsIGAke3NoaWZ0VmFsdWUgPiAwID8gLXNoaWZ0VmFsdWUgOiBzaGlmdFZhbHVlfXB4YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRUb0NhcnRWYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaExhYmVscywgcGxhY2VTd2F0Y2hMYWJlbEltYWdlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQuc2hvd1N3YXRjaE5hbWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHN3YXRjaE9wdGlvbk1lc3NhZ2UucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICAkcHJvZHVjdFN3YXRjaEdyb3VwLm9uKCdjaGFuZ2UnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoR3JvdXBFbGVtZW50ID0gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTd2F0Y2hOYW1lT25PcHRpb24oJCh0YXJnZXQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaEdyb3VwLCAoXywgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoR3JvdXBFbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuaXMoJzpjaGVja2VkJykpIHRoaXMuc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkKGVsZW1lbnQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygkcHJvZHVjdE9wdGlvbnNFbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsICRmb3JtWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xyXG4gICAgICAgIC8vIG9yIGhhdmUgZGVmYXVsdCB2YXJpYW50IHByb3BlcnRpZXMgdGhhdCBjaGFuZ2UgdGhlIHZpZXdcclxuICAgICAgICBpZiAoKGlzRW1wdHkocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKSB8fCBoYXNEZWZhdWx0T3B0aW9ucykgJiYgaGFzT3B0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25DaGFuZ2VDYWxsYmFjayA9IG9wdGlvbkNoYW5nZURlY29yYXRvci5jYWxsKHRoaXMsIGhhc0RlZmF1bHRPcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoJHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LnNob3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwcmV2aWV3TW9kYWwnKVswXTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IuYWRkKFt7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSA+IC5mb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbCcsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMubnVtYmVyc09ubHkodmFsKTtcclxuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnByb2R1Y3RRdWFudGl0eUVycm9yTWVzc2FnZSxcclxuICAgICAgICB9XSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBzdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN3YXRjaEdyb3VwSWRMaXN0Lmxlbmd0aCAmJiBpc0VtcHR5KHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN3YXRjaEdyb3VwSWRMaXN0LmVhY2goKF8sIHN3YXRjaEdyb3VwSWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2Vbc3dhdGNoR3JvdXBJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZVtzd2F0Y2hHcm91cElkXSA9ICQoYCMke3N3YXRjaEdyb3VwSWR9IH4gLnN3YXRjaC1vcHRpb24tbWVzc2FnZWApLnRleHQoKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9kdWN0VmFyaWFudCgpIHtcclxuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyksIChpbmRleCwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCQodmFsdWUpLmlzKCc6aGlkZGVuJykgfHwgdmFsdWUuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkID0gb3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCh0eXBlID09PSAnaW5wdXQtZmlsZScgfHwgdHlwZSA9PT0gJ2lucHV0LXRleHQnIHx8IHR5cGUgPT09ICdpbnB1dC1udW1iZXInKSAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2F0aXNmaWVkID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkuZXZlcnkoKHNlbGVjdCkgPT4gc2VsZWN0LnNlbGVjdGVkSW5kZXggIT09IDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5tYXAoKHgpID0+IHgudmFsdWUpLmpvaW4oJy0nKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYW50c2xpc3QgPSBjb252ZXJ0SW50b0FycmF5KHZhbHVlLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCA9IGlucHQgPT4gaW5wdC5kYXRhc2V0LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSA9PT0gY2hlY2tlZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50c2xpc3QuZmlsdGVyKG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmlubmVyVGV4dC50cmltKCkgOiBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5jaGlsZHJlblswXSA6IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbC50aXRsZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpZZXNgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKSA6ICd1bnNhdGlzZmllZCc7XHJcbiAgICAgICAgY29uc3QgdmlldyA9ICQoJy5wcm9kdWN0VmlldycpO1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdFZhcmlhbnQpIHtcclxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XHJcbiAgICAgICAgICAgIGlmICh2aWV3LmF0dHIoJ2RhdGEtZXZlbnQtdHlwZScpKSB7XHJcbiAgICAgICAgICAgICAgICB2aWV3LmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSB2aWV3LmZpbmQoJy5wcm9kdWN0Vmlldy10aXRsZScpWzBdLmlubmVyVGV4dC5yZXBsYWNlKC9cIi9nLCAnXFxcXCQmJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRSZW5ld2luZ0RhdGFQbGFuVmlzaWJpbGl0eSgkcHJvZHVjdE9wdGlvbnNFbGVtZW50KSB7XHJcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vZmYoJ2NoYW5nZS5yZW5ld2luZ0RhdGFQbGFuJywgJ1tuYW1lPVwiYXR0cmlidXRlWzEzMzAzXVwiXScpO1xyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NoYW5nZS5yZW5ld2luZ0RhdGFQbGFuJywgJ1tuYW1lPVwiYXR0cmlidXRlWzEzMzAzXVwiXScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCRwcm9kdWN0T3B0aW9uc0VsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoJHByb2R1Y3RPcHRpb25zRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygkcHJvZHVjdE9wdGlvbnNFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKCEkcHJvZHVjdE9wdGlvbnNFbGVtZW50IHx8ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0ICRyZW5ld2luZ1JhZGlvID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudFxyXG4gICAgICAgICAgICAuZmluZCgnW25hbWU9XCJhdHRyaWJ1dGVbMTMzMDNdXCJdW3ZhbHVlPVwiMTY5OFwiXScpXHJcbiAgICAgICAgICAgIC5maXJzdCgpO1xyXG5cclxuICAgICAgICBpZiAoJHJlbmV3aW5nUmFkaW8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3VsZEhpZGVGaWVsZHMgPSAkcmVuZXdpbmdSYWRpby5pcygnOmNoZWNrZWQnKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkcyA9IFsxMzMwNCwgMTMzMDUsIDEzMzA2XTtcclxuXHJcbiAgICAgICAgZmllbGRJZHMuZm9yRWFjaChmaWVsZElkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7ZmllbGRJZH1cIl1gKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkSGlkZUZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlSGlkZGVuTW9kaWZpZXJGaWVsZCgkZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgJGZpZWxkLmNzcygnZGlzcGxheScsICdub25lJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1lcnJvcicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVTaG93bk1vZGlmaWVyRmllbGQoJGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICRmaWVsZC5jc3MoJ2Rpc3BsYXknLCAnJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVIaWRkZW5Nb2RpZmllckZpZWxkKCRmaWVsZCkge1xyXG4gICAgICAgICRmaWVsZC5maW5kKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkZWwuaXMoJ1tkYXRhLW9yaWdpbmFsLXJlcXVpcmVkXScpKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwuYXR0cignZGF0YS1vcmlnaW5hbC1yZXF1aXJlZCcsICRlbC5wcm9wKCdyZXF1aXJlZCcpID8gJ3RydWUnIDogJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRlbC5wcm9wKCdyZXF1aXJlZCcsIGZhbHNlKS5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRlbC5pcygnOmNoZWNrYm94LCA6cmFkaW8nKSkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJGVsLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnByb3AoJ3NlbGVjdGVkSW5kZXgnLCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRlbC52YWwoJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlU2hvd25Nb2RpZmllckZpZWxkKCRmaWVsZCkge1xyXG4gICAgICAgICRmaWVsZC5maW5kKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICBjb25zdCB3YXNSZXF1aXJlZCA9ICRlbC5hdHRyKCdkYXRhLW9yaWdpbmFsLXJlcXVpcmVkJykgPT09ICd0cnVlJztcclxuXHJcbiAgICAgICAgICAgICRlbC5wcm9wKCdyZXF1aXJlZCcsIHdhc1JlcXVpcmVkKTtcclxuICAgICAgICAgICAgaWYgKHdhc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwuYXR0cigncmVxdWlyZWQnLCAnJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZWwucmVtb3ZlQXR0cigncmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHdpbmRvdyBpcyBiZWluZyBydW4gaW5zaWRlIGFuIGlmcmFtZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzUnVubmluZ0luSWZyYW1lKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBIYW5kbGUgcHJvZHVjdCBvcHRpb25zIGNoYW5nZXNcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcclxuXHJcbiAgICAgICAgLy8gRG8gbm90IHRyaWdnZXIgYW4gYWpheCByZXF1ZXN0IGlmIGl0J3MgYSBmaWxlIG9yIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxyXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcocHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcclxuICAgICAgICAgICAgYmFubmVyVXRpbHMuZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGZvcm0pKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGV4dCA9ICRmb3JtLnBhcmVudHMoJy5wcm9kdWN0VmlldycpLmZpbmQoJy5wcm9kdWN0Vmlldy1pbmZvJyk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbEZhY3RvcnkoJ1tkYXRhLXJldmVhbF0nLCB7ICRjb250ZXh0IH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb25Qcm9kdWN0T3B0aW9uc0NoYW5nZWQnLCB7XHJcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGlmIHRoaXMgc2V0dGluZyBpcyBlbmFibGVkIGluIFBhZ2UgQnVpbGRlclxyXG4gICAgICogc2hvdyBuYW1lIGZvciBzd2F0Y2ggb3B0aW9uXHJcbiAgICAgKi9cclxuICAgIHNob3dTd2F0Y2hOYW1lT25PcHRpb24oJHN3YXRjaCwgJHN3YXRjaEdyb3VwKSB7XHJcbiAgICAgICAgY29uc3Qgc3dhdGNoTmFtZSA9ICRzd2F0Y2guYXR0cignYXJpYS1sYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVN3YXRjaEdyb3VwSWQgPSAkc3dhdGNoR3JvdXAuYXR0cignYXJpYS1sYWJlbGxlZGJ5Jyk7XHJcbiAgICAgICAgY29uc3QgJHN3YXRjaE9wdGlvbk1lc3NhZ2UgPSAkKGAjJHthY3RpdmVTd2F0Y2hHcm91cElkfSB+IC5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2VgKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtb3B0aW9uLXZhbHVlXScsICRzd2F0Y2hHcm91cCkudGV4dChzd2F0Y2hOYW1lKTtcclxuICAgICAgICAkc3dhdGNoT3B0aW9uTWVzc2FnZS50ZXh0KGAke3RoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW2FjdGl2ZVN3YXRjaEdyb3VwSWRdfSAke3N3YXRjaE5hbWV9YCk7XHJcbiAgICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkc3dhdGNoT3B0aW9uTWVzc2FnZSwgJ3N0YXR1cycsICdhc3NlcnRpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XHJcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XHJcbiAgICAgICAgICAgIHJvbGU6IHJvbGVUeXBlLFxyXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuICEhJGVsZW1lbnQucGFyZW50cygnLnF1aWNrVmlldycpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QoaW1hZ2UpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcclxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC56b29tU2l6ZSB9LFxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggem9vbSBzaXplIHVzZWQgZm9yIGRhdGEtem9vbS1pbWFnZSBpblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXHJcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQucHJvZHVjdFNpemUgfSxcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIGZhbGxiYWNrIGltYWdlIHNpemUgdXNlZCBmb3IgdGhlIG1haW4gcHJvZHVjdCBpbWFnZSBpblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoaW1hZ2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5zZXRBbHRlcm5hdGVJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnJlc3RvcmVJbWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBIYW5kbGUgYWN0aW9uIHdoZW4gdGhlIHNob3BwZXIgY2xpY2tzIG9uICsgLyAtIGZvciBxdWFudGl0eVxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgbGlzdGVuUXVhbnRpdHlDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NsaWNrJywgJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gYnV0dG9uJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xyXG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0O1xyXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWF4ID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBxdHkgPSBmb3Jtcy5udW1iZXJzT25seSgkaW5wdXQudmFsKCkpID8gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCkgOiBxdWFudGl0eU1pbjtcclxuICAgICAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xyXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcclxuICAgICAgICAgICAgICAgIHF0eSA9IGZvcm1zLnZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkocXR5LCBxdWFudGl0eU1heCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcXR5ID0gZm9ybXMudmFsaWRhdGVEZWNyZWFzZUFnYWluc3RNaW5Cb3VuZGFyeShxdHksIHF1YW50aXR5TWluKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiBpbnB1dFxyXG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0LnZhbChxdHkpO1xyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGV4dFxyXG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJHRleHQudGV4dChxdHkpO1xyXG4gICAgICAgICAgICAvLyBwZXJmb3JtIHZhbGlkYXRpb24gYWZ0ZXIgdXBkYXRpbmcgcHJvZHVjdCBxdWFudGl0eVxyXG4gICAgICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgdHJpZ2dlcmluZyBxdWFudGl0eSBjaGFuZ2Ugd2hlbiBwcmVzc2luZyBlbnRlclxyXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdrZXlwcmVzcycsICcuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIGV2ZW50LndoaWNoLCB0aGVuIHVzZSBldmVudC53aGljaCwgb3RoZXJ3aXNlIHVzZSBldmVudC5rZXlDb2RlXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRzY29wZS5vbigna2V5dXAnLCAnLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEFkZCBhIHByb2R1Y3QgdG8gY2FydFxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xyXG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRCdG4gPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJChldmVudC50YXJnZXQpKTtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XHJcbiAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkYWRkVG9DYXJ0QnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICRhZGRUb0NhcnRCdG5cclxuICAgICAgICAgICAgLnZhbCh3YWl0TWVzc2FnZSlcclxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG5cclxuICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XHJcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChub3JtYWxpemVGb3JtRGF0YShuZXcgRm9ybURhdGEoZm9ybSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW5jeVNlbGVjdG9yKHJlc3BvbnNlLmRhdGEuY2FydF9pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xyXG5cclxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxyXG4gICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcclxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gR3VhcmQgc3RhdGVtZW50XHJcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRhZGRUb0NhcnRCdG4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRNb2RhbCgpLiRwcmVNb2RhbEZvY3VzZWRFbCA9ICRhZGRUb0NhcnRCdG47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gT3BlbiBwcmV2aWV3IG1vZGFsIGFuZCB1cGRhdGUgY29udGVudFxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aWV3TW9kYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLm9wZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5hZGRDbGFzcygnYXBwbGUtcGF5LXN1cHBvcnRlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGFkZFRvQ2FydEJ0bikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkYWRkVG9DYXJ0QnRuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydENvbnRlbnQodGhpcy5wcmV2aWV3TW9kYWwsIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gbW9kYWwsIHJlZGlyZWN0IHRvIHRoZSBjYXJ0IHBhZ2VcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbyhyZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5jYXJ0X3VybCB8fCB0aGlzLmNvbnRleHQudXJscy5jYXJ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRhZGRUb0NhcnRCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNhcnQgY29udGVudHNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZVxyXG4gICAgICovXHJcbiAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L3ByZXZpZXcnLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgY2FydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWRpcmVjdCB0byB1cmxcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXHJcbiAgICAgKi9cclxuICAgIHJlZGlyZWN0VG8odXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xyXG4gICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gdXJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgY2FydCBjb250ZW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNb2RhbH0gbW9kYWxcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXJ0SXRlbUlkXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUNhcnRDb250ZW50KG1vZGFsLCBjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxyXG4gICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICAgICAgY29uc3QgJGNhcnRRdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgbW9kYWwuJGNvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcclxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkY2FydFF1YW50aXR5LmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcm9tb3Rpb25CYW5uZXIgPSAkKCdbZGF0YS1wcm9tb3Rpb24tYmFubmVyXScpO1xyXG4gICAgICAgICAgICBjb25zdCAkYmFja1RvU2hvcHBwaW5nQnRuID0gJCgnLnByZXZpZXdDYXJ0Q2hlY2tvdXQgPiBbZGF0YS1yZXZlYWwtY2xvc2VdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtb2RhbENsb3NlQnRuID0gJCgnI3ByZXZpZXdNb2RhbCA+IC5tb2RhbC1jbG9zZScpO1xyXG4gICAgICAgICAgICBjb25zdCBiYW5uZXJVcGRhdGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RDb250YWluZXIgPSAkKCcjbWFpbi1jb250ZW50ID4gLmNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICRwcm9kdWN0Q29udGFpbmVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IHBkcC11cGRhdGVcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgICAgICQoJy5sb2FkaW5nT3ZlcmxheS5wZHAtdXBkYXRlJywgJHByb2R1Y3RDb250YWluZXIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcygnY2FydC1jb3VudC0tcG9zaXRpdmUnKTtcclxuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XHJcblxyXG4gICAgICAgICAgICBpZiAob25Db21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkcHJvbW90aW9uQmFubmVyLmxlbmd0aCAmJiAkYmFja1RvU2hvcHBwaW5nQnRuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJGJhY2tUb1Nob3BwcGluZ0J0bi5vbignY2xpY2snLCBiYW5uZXJVcGRhdGVIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICRtb2RhbENsb3NlQnRuLm9uKCdjbGljaycsIGJhbm5lclVwZGF0ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcclxuICAgICAqL1xyXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RJbWFnZShkYXRhLmltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YUl0ZW1zID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdERldGFpbHMgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBmb3JtRGF0YUl0ZW0gb2YgZm9ybURhdGFJdGVtcykge1xyXG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBmb3JtRGF0YUl0ZW07XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3Byb2R1Y3RfaWQnKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5wcm9kdWN0SWQgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3F0eVtdJykge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMucXVhbnRpdHkgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvYXR0cmlidXRlLykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RPcHRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IE51bWJlcihuYW1lLm1hdGNoKC9cXGQrL2cpWzBdKSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMgPSBwcm9kdWN0RGV0YWlscz8ub3B0aW9uU2VsZWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgID8gWy4uLnByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMsIHByb2R1Y3RPcHRpb25dXHJcbiAgICAgICAgICAgICAgICAgICAgOiBbcHJvZHVjdE9wdGlvbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RVcGRhdGUnLCB7XHJcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGRldGFpbDogeyBwcm9kdWN0RGV0YWlscyB9LFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEYXRlU2VsZWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZWFjaCgoaSwgc2NvcGUpID0+IHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGF5cyhkYXRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aFNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbbW9udGhdXCJdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlTZWxlY3RvciA9IGRhdGVPcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWUkPVwiW2RheV1cIl0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXJTZWxlY3RvciA9IGRhdGVPcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWUkPVwiW3llYXJdXCJdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KG1vbnRoU2VsZWN0b3IudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludCh5ZWFyU2VsZWN0b3IudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXlzSW5Nb250aDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc05hTihtb250aCkgJiYgIU51bWJlci5pc05hTih5ZWFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gKCh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwKSA/IDI5IDogMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogY2FzZSA2OiBjYXNlIDk6IGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gMzE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGRheSA9IDI5OyBkYXkgPD0gMzE7IGRheSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZGF5U2VsZWN0b3IucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtkYXl9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheSA8PSBkYXlzSW5Nb250aCAmJiAhb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheVNlbGVjdG9yLm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oZGF5LCBkYXkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRheSA+IGRheXNJbk1vbnRoICYmIG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKHNjb3BlKS5vbignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVPcHRpb24gPSBlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPWRhdGVdJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURheXMoZGF0ZU9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9ZGF0ZV0nKS5mb3JFYWNoKChkYXRlT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEYXlzKGRhdGVPcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBzdHJpbmcgdmFsdWVzIGZyb20gdGhlIGZvcm1EYXRhXHJcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XHJcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxyXG4qL1xyXG5leHBvcnQgY29uc3QgZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSA9IGZvcm1EYXRhID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuYXBwZW5kKGtleSwgdmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTY3Mjk5Mi9hamF4LXJlcXVlc3QtZmFpbHMtd2hlbi1zZW5kaW5nLWZvcm1kYXRhLWluY2x1ZGluZy1lbXB0eS1maWxlLWlucHV0LWluLXNhZmFyaVxyXG4gKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xyXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxyXG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0gPSBmb3JtRGF0YSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoISh2YWwgaW5zdGFuY2VvZiBGaWxlKSB8fCB2YWwubmFtZSB8fCB2YWwuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzLmFwcGVuZChrZXksIHZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgZW1wdHkgc3RyaW5nIHZhbHVlcyBhbmQgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybURhdGFcclxuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcclxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplRm9ybURhdGEgPSBmb3JtRGF0YSA9PiBmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkpO1xyXG4iLCJpbXBvcnQgeyBpc0Jyb3dzZXJJRSB9IGZyb20gJy4vaWUtaGVscGVycyc7XHJcblxyXG5jb25zdCBiYW5uZXJVdGlscyA9IHtcclxuICAgIGRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50OiAocHJvZHVjdEF0dHJpYnV0ZXMpID0+IHtcclxuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlIHx8IGlzQnJvd3NlcklFKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBwcmljZSA9IDA7XHJcblxyXG4gICAgICAgIGlmICghcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2UucHJpY2VfcmFuZ2UpIHtcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgpIHtcclxuICAgICAgICAgICAgICAgIHByaWNlID0gcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudCgnYmlnY29tbWVyY2UucHJvZHVjdHByaWNlY2hhbmdlJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogcHJpY2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFubmVyVXRpbHM7XHJcbiIsImV4cG9ydCBjb25zdCBpc0Jyb3dzZXJJRSA9ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRJbnRvQXJyYXkgPSBjb2xsZWN0aW9uID0+IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbGxlY3Rpb24pO1xyXG4iLCJpbXBvcnQgJ2Vhc3l6b29tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZ2FsbGVyeSkge1xyXG4gICAgICAgIHRoaXMuJG1haW5JbWFnZSA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbWFpbl0nKTtcclxuICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpO1xyXG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJyk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuc2V0SW1hZ2Vab29tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFpbkltYWdlKGltZ09iaikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0geyAuLi5pbWdPYmogfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xyXG4gICAgICAgIHRoaXMuc3dhcE1haW5JbWFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFsdGVybmF0ZUltYWdlKGltZ09iaikge1xyXG4gICAgICAgIGlmICghdGhpcy5zYXZlZEltYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRJbWFnZSA9IHtcclxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybDogdGhpcy4kbWFpbkltYWdlLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpLFxyXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuYXR0cignZGF0YS16b29tLWltYWdlJyksXHJcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6IHRoaXMuJG1haW5JbWFnZS5maW5kKCdpbWcnKS5hdHRyKCdzcmNzZXQnKSxcclxuICAgICAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiB0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoaW1nT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlSW1hZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWRJbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZSh0aGlzLnNhdmVkSW1hZ2UpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zYXZlZEltYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3ROZXdJbWFnZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgaW1nT2JqID0ge1xyXG4gICAgICAgICAgICBtYWluSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmwnKSxcclxuICAgICAgICAgICAgem9vbUltYWdlVXJsOiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybCcpLFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQnKSxcclxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXHJcbiAgICAgICAgICAgIG1haW5JbWFnZUFsdDogJHRhcmdldC5jaGlsZHJlbigpLmZpcnN0KCkuYXR0cignYWx0JyksXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xyXG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3YXBNYWluSW1hZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgaXNCcm93c2VySUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdUcmlkZW50Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5zd2FwKFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlU3Jjc2V0LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuJG1haW5JbWFnZS5hdHRyKHtcclxuICAgICAgICAgICAgJ2RhdGEtem9vbS1pbWFnZSc6IHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQuYXR0cih7XHJcbiAgICAgICAgICAgIGFsdDogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaXNCcm93c2VySUUpIHtcclxuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZXNJRSA9IHtcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgke3RoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybH0pYCxcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbic6ICdjb250ZW50LWJveCcsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJ2NvbnRhaW4nLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kbWFpbkltYWdlTmVzdGVkLmNzcyhmYWxsYmFja1N0eWxlc0lFKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJbWFnZSgpIHtcclxuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSAkKCcucHJvZHVjdFZpZXctaW1hZ2UnKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSAkaW1hZ2VDb250YWluZXIuaGVpZ2h0KCk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSAkaW1hZ2VDb250YWluZXIud2lkdGgoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGltYWdlID0gdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLiR6b29tO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICRpbWFnZS5oZWlnaHQoKTtcclxuICAgICAgICBjb25zdCB3aWR0aCA9ICRpbWFnZS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0IDwgY29udGFpbmVySGVpZ2h0IHx8IHdpZHRoIDwgY29udGFpbmVyV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW1hZ2Vab29tKCkge1xyXG4gICAgICAgIHRoaXMuZWFzeXpvb20gPSB0aGlzLiRtYWluSW1hZ2UuZWFzeVpvb20oe1xyXG4gICAgICAgICAgICBvblNob3c6ICgpID0+IHRoaXMuY2hlY2tJbWFnZSgpLFxyXG4gICAgICAgICAgICBlcnJvck5vdGljZTogJycsXHJcbiAgICAgICAgICAgIGxvYWRpbmdOb3RpY2U6ICcnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld0ltYWdlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9pbmhlcml0c0xvb3NlIiwiY29uc3RydWN0b3IiLCJfc2V0UHJvdG90eXBlT2YiLCJtdXN0YWNoZSIsImNyZWF0ZUZvY3VzVHJhcCIsInRvb2xzIiwiQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkiLCJERUZBVUxUX1NURVAiLCJJbWFnZUdhbGxlcnlNb2RhbCIsImltYWdlR2FsbGVyeSIsIiRnYWxsZXJ5IiwibW9kYWxUZW1wbGF0ZSIsIiRib2R5IiwiJCIsImNyZWF0ZU1vZGFsIiwiX3Byb3RvIiwiYmluZEV2ZW50cyIsIl90aGlzIiwiZmluZCIsIm9mZiIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRhIiwiY3VycmVudFRhcmdldCIsImltYWdlVXJsIiwiZGF0YSIsImltYWdlU3Jjc2V0Iiwiem9vbUltYWdlVXJsIiwidmlkZW9JZCIsInN0ZXAiLCJjbG9zZXN0IiwiTnVtYmVyIiwic3BsaXQiLCJvcGVuTW9kYWwiLCIkZ2FsbGVyeU1vZGFsIiwiY2xvc2VNb2RhbCIsImtleSIsImlzIiwidGFyZ2V0Iiwic2V0TWFpbkltYWdlIiwic2V0TWFpblZpZGVvIiwidG90YWxTdGVwIiwic2V0TWFpbjM2MCIsInByZXZpb3VzMzYwU3RlcCIsIm5leHQzNjBTdGVwIiwicGxheTM2MCIsInBhdXNlMzYwIiwiZGVzdHJveU1vZGFsIiwicmVtb3ZlIiwiXyRtYWluSW1hZ2VMaW5rJGdldCIsIiRtYWluSW1hZ2VMaW5rIiwiJG1haW5JbWFnZSIsImNsb25lIiwicmVtb3ZlQXR0ciIsImF0dHIiLCJtYWluSW1hZ2VMaW5rRWxlbWVudCIsImdldCIsIm91dGVySFRNTCIsIm5hbWUiLCJ0ZXh0IiwidmlkZW9zTGFiZWwiLCJpbWFnZXMzNjBMYWJlbCIsImltYWdlc0xhYmVsIiwidmlkZW9zIiwibWFwIiwibGkiLCJfJCRmaW5kJGNsb25lJGdldCIsImxpbmtFbGVtZW50IiwiaW1hZ2VzMzYwIiwiXyRlbCRnZXQiLCIkZWwiLCJpbWFnZXMiLCJmaWx0ZXIiLCJfJGEkZ2V0IiwicmVuZGVyIiwiaGlkZSIsImFwcGVuZFRvIiwiaW5pdEltYWdlWm9vbSIsImZvY3VzVHJhcCIsImVzY2FwZURlYWN0aXZhdGVzIiwicmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUiLCJhbGxvd091dHNpZGVDbGljayIsIl90aGlzMiIsIiRsYXN0QWN0aXZlRWxlbWVudCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImFkZENsYXNzIiwiJG1haW5JbWciLCJzaG93IiwicmVtb3ZlQ2xhc3MiLCJhY3RpdmF0ZSIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwiX3RoaXMzIiwiaGlkZU1haW5WaWRlbyIsImhpZGUzNjBVSSIsImRlYWN0aXZhdGUiLCJtYWluSW1hZ2VVcmwiLCJtYWluSW1hZ2VTcmNzZXQiLCJzaG93TWFpbkltYWdlIiwic2V0QWN0aXZlVGh1bWIiLCJzd2FwTWFpbkltYWdlIiwiaGlkZU1haW5JbWFnZSIsIl9pIiwiJGltYWdlQ29udGFpbmVyIiwiZWFzeXpvb20iLCJzd2FwIiwiaXNCcm93c2VySUUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmNsdWRlcyIsImZhbGxiYWNrU3R5bGVzSUUiLCJjc3MiLCJjaGVja0ltYWdlIiwiY29udGFpbmVySGVpZ2h0IiwiaGVpZ2h0IiwiY29udGFpbmVyV2lkdGgiLCJ3aWR0aCIsIiRpbWFnZSIsIiR6b29tIiwiX3RoaXM0IiwiZWFzeVpvb20iLCJvblNob3ciLCJlcnJvck5vdGljZSIsImxvYWRpbmdOb3RpY2UiLCJzaG93TWFpblZpZGVvIiwic3JjIiwic2hvdzM2MFVJIiwic3dhcE1haW4zNjAiLCJzZXQzNjBDdXJyZW50U3RlcCIsImN1cnJlbnRTdGVwIiwidG90YWwiLCJfdGhpczUiLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwzNjAiLCJzZXRJbnRlcnZhbCIsIkNhcmRJbWFnZUdhbGxlcnlNb2RhbCIsIl9JbWFnZUdhbGxlcnlNb2RhbDIiLCIkc2NvcGUiLCJfdGVtcCIsIl90aGlzNiIsIl9yZWYiLCJwcm9kdWN0SWQiLCJncmFwaFFMVG9rZW4iLCJ6b29tU2l6ZSIsInByb2R1Y3RTaXplIiwidGh1bWJTaXplIiwidHh0VmlkZW9zTGFiZWwiLCJ0eHRJbWFnZXMzNjBMYWJlbCIsInR4dEltYWdlc0xhYmVsIiwibG9hZGluZ01vZGFsVGVtcGxhdGUiLCJfcHJvdG8yIiwib3BlbkxvYWRpbmdNb2RhbCIsIl9vcGVuTG9hZGluZ01vZGFsIiwiX2NhbGxlZSIsIl9jb250ZXh0IiwibG9hZE1vZGFsIiwiX2xvYWRNb2RhbCIsIl9jYWxsZWUyIiwibWFpbkltYWdlIiwiX2NvbnRleHQyIiwiZmV0Y2hQcm9kdWN0IiwiaW1hZ2UiLCJpc0RlZmF1bHQiLCJnZXRTcmNzZXQiLCJ1cmxUZW1wbGF0ZSIsInpvb21VcmwiLCJ1cmwiLCJ0aHVtYm5haWxVcmwiLCJhbHRUZXh0IiwidmlkZW8iLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJodG1sIiwiX3RlbXAyIiwiX3RoaXM3IiwiX3JlZjIiLCJfcmVmMiRmaXJzdFZpZGVvIiwiZmlyc3RWaWRlbyIsIl9yZWYyJGZpcnN0IiwiZmlyc3QzNjAiLCJmaXJzdCIsIl9mZXRjaFByb2R1Y3QiLCJfY2FsbGVlMyIsIl90aGlzJHpvb21TaXplJHNwbGl0JCIsInpvb21XaWR0aCIsInpvb21IZWlnaHQiLCJfdGhpcyRwcm9kdWN0U2l6ZSRzcGwiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJfdGhpcyR0aHVtYlNpemUkc3BsaXQiLCJ0aHVtYldpZHRoIiwidGh1bWJIZWlnaHQiLCJyZXNwIiwiX3JlZjMiLCJfY29udGV4dDMiLCJhamF4IiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzaXRlIiwicHJvZHVjdCIsImVkZ2VzIiwiX3JlZjQiLCJub2RlIiwiX3JlZjUiLCJjdXN0b21GaWVsZHMiLCJfcmVmNiIsIl9yZWY3IiwiSW1hZ2VHYWxsZXJ5IiwiX0Nvcm5lcnN0b25lSW1hZ2VHYWxsIiwiX3RoaXM4IiwiaW1hZ2VHYWxsZXJ5TW9kYWwiLCJfcHJvdG8zIiwiZGVmYXVsdCIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsInV0aWxzIiwiQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyIsImFsZXJ0TW9kYWwiLCJzaG93QWxlcnRNb2RhbCIsIk1vZGFsRXZlbnRzIiwiZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMiLCJjdXJyZW5jeUZvcm1hdCIsIlNhbGVDb3VudGRvd24iLCJERUJVR19MT0ciLCJub3JtYWxpemVPcHRpb25TdHJpbmciLCJzIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZXF1YWxPcHRpb25TdHJpbmciLCJiIiwiYXJlQXJyYXlzRXF1YWxVbm9yZGVyZWQiLCJhcnIxIiwiYXJyMiIsIl9hcnIxIiwic2xpY2UiLCJzb3J0IiwiX2FycjIiLCJldmVyeSIsImluZGV4IiwiY2FjaGVkU2V0dGluZ3MiLCJoYW5kbGVQcm9taXNlc1dpdGhMaW1pdCIsIl94IiwiX3gyIiwiX2hhbmRsZVByb21pc2VzV2l0aExpbWl0IiwiX2NhbGxlZTkiLCJwcm9taXNlcyIsImxpbWl0IiwicmVzdWx0cyIsImV4ZWN1dGluZyIsIl9sb29wIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJfY29udGV4dDAiLCJwcm9taXNlIiwiX2NvbnRleHQ5IiwicmVzdWx0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInB1c2giLCJyYWNlIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9yZWdlbmVyYXRvclZhbHVlcyIsImFsbCIsIlByb2R1Y3REZXRhaWxzIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25jYXQiLCJtb2RpZmllcnNNb2RhbE92ZXJsYXlUZW1wbGF0ZSIsIm1vZGlmaWVyc01vZGFsVGVtcGxhdGUiLCJvcHRpb25Ub29sdGlwVGVtcGxhdGUiLCJvcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZSIsIm9wdGlvblZhbHVlVG9vbHRpcEhlYWRpbmdUZW1wbGF0ZSIsIm9wdGlvblByaWNlVGVtcGxhdGUiLCJvcHRpb25QcmljZVBsYWluVGVtcGxhdGUiLCJzdWJ0b3RhbFRlbXBsYXRlIiwic3VtbWFyeVRlbXBsYXRlIiwic2hvd1ByaWNlRnJlZSIsInNob3dQcmljZVplcm8iLCJhZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IiLCJmZXRjaE9wdGlvblByaWNlQ2FjaGUiLCJjb25zb2xlIiwibG9nIiwiX2NvbnNvbGUiLCIkZm9ybSIsIiRjaG9vc2VPcHRpb25zQnRuIiwidmFsIiwicmVmcmVzaFByb2R1Y3RNZXRhZGF0YSIsImVuYWJsZU1vZGlmaWVyc01vZGFsIiwiY3JlYXRlTW9kaWZpZXJzTW9kYWwiLCJiaW5kUHJvZHVjdEVkaXRFdmVudHMiLCJiaW5kU3RpY2t5QWRkVG9DYXJ0RXZlbnRzIiwiYmluZE1vZGFsRGVzdHJveSIsImluaXRPcHRpb25TdGVwcGVyIiwic3luY1Byb2R1Y3RDYXJkUXR5IiwiaW5pdFNhbGVDb3VudGRvd24iLCJiaW5kUmVuZXdpbmdEYXRhUGxhblZpc2liaWxpdHkiLCJyZW5kZXJJbmxpbmVPcHRpb25Ub29sdGlwcyIsInJlbmRlclNwZWNUb29sdGlwcyIsImluaXRJbmxpbmVPcHRpb25QcmljZUhpbnRzIiwicGFyc2VNZXRhZGF0YSIsInNlbGVjdG9yIiwicGFyc2UiLCJwcm9kdWN0T3B0aW9ucyIsImdldFZpZXdNb2RlbCIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTIiLCJfbGVuMiIsIl9rZXkyIiwibW9kZWwiLCIkdXBkYXRlUHJvZHVjdFdyYXBwZXIiLCJ1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyIsIiRidG4iLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJwcm9wIiwiYWRkUHJvZHVjdFRvQ2FydCIsImZvcm0iLCJlZGl0UHJvZHVjdEluQ2FydCIsImVkaXRQcm9kdWN0VG9DYXJ0IiwiX2VkaXRQcm9kdWN0VG9DYXJ0IiwiJHNhdmVCdG4iLCJvcmlnaW5hbEJ0blZhbCIsIndhaXRNZXNzYWdlIiwiZm9ybURhdGEiLCJzdWNjZXNzIiwiZmFpbHVyZSIsIml0ZW1JZCIsIm5ld1F0eSIsIl90Iiwid2luZG93IiwiRm9ybURhdGEiLCJ1bmRlZmluZWQiLCIkb3ZlcmxheSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwibmV4dCIsInJlc3BvbnNlIiwiY29udGV4dCIsImVkaXRQcm9kdWN0Q2FsbGJhY2siLCJlcnJvclRleHQiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hlY2tJc1F1aWNrVmlld0NoaWxkIiwiJHByZU1vZGFsRm9jdXNlZEVsIiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJlZGl0UHJvZHVjdFF1YW50aXR5IiwidXBkYXRlQ2FydEl0ZW1RdWFudGl0eSIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiZmFpbCIsIl94aHIiLCJfc3RhdHVzIiwiZXJyb3IiLCJfeDMiLCJfeDQiLCJyZWplY3QiLCJhcGkiLCJjYXJ0IiwiaXRlbVVwZGF0ZSIsImVyciIsIl9yZXNwb25zZSRkYXRhIiwic3RhdHVzIiwiZXJyb3JzIiwiam9pbiIsInN1Ym1pdEV2ZW50IiwiRXZlbnQiLCJoYW5kbGVTdGlja3lBZGRUb0NhcnRDbGljayIsIiRidXR0b24iLCIkc3RpY2t5UXR5Iiwic2libGluZ3MiLCIkZm9ybVF0eSIsImNoZWNrVmFsaWRpdHkiLCJpbnZhbGlkRmllbGQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiZm9jdXMiLCJyZXBvcnRWYWxpZGl0eSIsIm9uZSIsImNsb3NlZCIsImVhY2giLCJmb3JtRmllbGRFbCIsIiRmb3JtRmllbGQiLCIkZGVjIiwiJGluYyIsIiRjaGVjayIsImluaXQiLCIkcmFkaW9zIiwiJGNoZWNrZWQiLCIkZmlyc3QiLCJzZWxlY3QiLCJpbmMiLCJlcSIsIm5vdCIsImhhc0NsYXNzIiwiJHVuY2hlY2siLCIkbm9uZSIsImNhcmRRdHkiLCIkcXR5IiwicXR5IiwidHh0U2FsZUNvdW50ZG93bkpTT04iLCJlbmRfaW4iLCJjb25maWd1cmUiLCJhZGQiLCJ0b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzIiwiJHByb2R1Y3RPcHRpb25zRWwiLCIkcmVuZXdpbmdSYWRpbyIsInNob3VsZEhpZGVGaWVsZHMiLCJmaWVsZElkcyIsImZvckVhY2giLCJmaWVsZElkIiwiJGZpZWxkIiwiZGlzYWJsZUhpZGRlbk1vZGlmaWVyRmllbGQiLCJlbmFibGVTaG93bk1vZGlmaWVyRmllbGQiLCJlbCIsIm9yaWdpbmFsUmVxdWlyZWQiLCJ1cGRhdGVWaWV3IiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlMyIsIl9sZW4zIiwiX2tleTMiLCJ1cGRhdGVTYWxlUGVyY2VudCIsInVwZGF0ZVNoaXBwaW5nQ291bnRkb3duIiwibWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyIsInVwZGF0ZU1vZGlmaWVyc1ZpZXciLCIkbW9kaWZpZXJzTW9kYWxPcHRpb25zIiwiJG1vZGlmaWVyc01vZGFsU3VidG90YWwiLCJzaG93T3B0aW9uSWRzIiwic3RhY2tlZFNob3dPcHRpb25JZHMiLCJub25lU2FsZXMiLCJjdXN0b21GaWVsZE5vbmVTYWxlcyIsInNob3dPcHRpb25QcmljZXMiLCJ1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbCIsIl9kYXRhJHByaWNlIiwiX2RhdGEkcHJpY2U0IiwiJGRpdiIsIiRzcGFuIiwic2FsZVBlcmNlbnQiLCJwcmljZSIsIndpdGhvdXRfdGF4IiwiX2RhdGEkcHJpY2UyIiwiX2RhdGEkcHJpY2UzIiwicnJwX3dpdGhvdXRfdGF4IiwiTWF0aCIsInJvdW5kIiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJ3aXRoX3RheCIsIl9kYXRhJHByaWNlNSIsIl9kYXRhJHByaWNlNiIsInJycF93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4IiwiJHNoaXBwaW5nQ291bnRkb3duIiwidXBkYXRlQ2FydENvbnRlbnQiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGU0IiwiY2xvc2VNb2RpZmllcnNNb2RhbCIsInByZXZpZXdNb2RhbCIsIl9sZW40IiwiX2tleTQiLCJzaG93UHJvZHVjdEltYWdlIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlNSIsIl9sZW41IiwiX2tleTUiLCIkbW9kaWZpZXJzTW9kYWxJbWciLCJfdGhpcyRpbWFnZUdhbGxlcnkkY3UiLCJjdXJyZW50SW1hZ2UiLCJmb3JtYXRQcmljZSIsInBsdXNTeW1ib2wiLCJkaXNwbGF5IiwiY3VycmVuY3lfdG9rZW4iLCJjdXJyZW5jeSIsInN5bWJvbCIsImN1cnJlbmN5X2xvY2F0aW9uIiwic3ltYm9sUGxhY2VtZW50IiwiZGVjaW1hbF90b2tlbiIsImRlY2ltYWxUb2tlbiIsImRlY2ltYWxfcGxhY2VzIiwiZGVjaW1hbFBsYWNlcyIsInRob3VzYW5kc190b2tlbiIsInRob3VzYW5kc1Rva2VuIiwiZm9ybWF0dGVkIiwiZmluZE9wdGlvblZhbHVlIiwib3B0aW9uTmFtZSIsInZhbHVlTmFtZSIsIl9oaWRlSWZPcHRpb24kdmFsdWVzIiwiaGlkZUlmT3B0aW9uIiwiZGlzcGxheV9uYW1lIiwidmFsdWVzIiwibGFiZWwiLCJvcHRpb25JZCIsImlkIiwidmFsdWVJZCIsIiRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlciIsIiRhZGRUb0NhcnRXcmFwcGVyIiwiJG1vZGlmaWVyc01vZGFsIiwidHh0Q29udGludWUiLCJwcm9kdWN0VGl0bGUiLCIkbW9kaWZpZXJzTW9kYWxDb21wbGV0ZSIsIiRtb2RpZmllcnNNb2RhbENsb3NlIiwiJG1vZGlmaWVyc01vZGFsQ29udGludWUiLCIkbW9kaWZpZXJzTW9kYWxCYWNrIiwiYXBwZW5kIiwiZ29CYWNrU3RlcCIsImludmFsaWRJbnB1dHMiLCJyZWR1Y2UiLCJfaW52YWxpZElucHV0cyIsInZhbGlkYXRlVmFyaWFudE9wdGlvbnMiLCJpbml0TW9kaWZpZXJzVmlldyIsIm9wZW5Nb2RpZmllcnNNb2RhbCIsImJlZm9yZSIsImlnbm9yZUFQSUNhbGwiLCJfdXBkYXRlTW9kaWZpZXJzVmlldyIsIl9yZWYzJGlnbm9yZUFQSUNhbGwiLCIkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5IiwiJG1vZGlmaWVyc01vZGFsVGl0bGUiLCIkbW9kaWZpZXJzTW9kYWxGb290ZXIiLCJjdXJyZW50T3B0aW9uSWQiLCJjdXJyZW50R3JvdXBOYW1lIiwiY3VycmVudEdyb3VwT3B0aW9uSWRzIiwiaGlkZU9wdGlvbklkcyIsImhpZGVPcHRpb25WYWx1ZXMiLCJ0b29sdGlwcyIsInRvb2x0aXBIZWFkaW5ncyIsIm9wdGlvblJlbmFtZXMiLCJfdGhpcyRwcm9kdWN0T3B0aW9ucyQiLCJ0aXRsZSIsImdyb3VwVG9vbHRpcCIsIiR0b29sdGlwIiwiZW1wdHkiLCJmcm9tIiwiZW50cmllcyIsInN0YXRlIiwib3B0aW9uIiwiaGlkZU9wdGlvbiIsImdyb3VwTmFtZSIsImdyb3VwT3B0aW9uSWRzIiwiaXNOb25lUmFkaW9DaGVja2VkIiwiJGZpbGUiLCJpc0ZpbGVTaG93biIsIiRkYXRlIiwiaXNPcHRpb25hbERhdGVTaG93biIsInJlcXVpcmVkIiwiJHNlbGVjdCIsImlzT3B0aW9uYWxTZWxlY3RTaG93biIsIiR0ZXh0IiwiaXNPcHRpb25hbFRleHRTaG93biIsImZvcm1WYWx1ZSIsIkZpbGUiLCJjdXN0b21GaWVsZCIsImhpZGVJZk1hdGNoIiwiY3VzdG9tRmllbGRNYXRjaEhpZGVJZiIsImdyb3VwTWF0Y2giLCJjdXN0b21GaWVsZE1hdGNoR3JvdXAiLCJfT2JqZWN0JGFzc2lnbiIsInRvb2x0aXBNYXRjaCIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZCIsIl90b29sdGlwcyRvcHRpb24kaWQyIiwiYXNzaWduIiwidG9vbHRpcCIsInZhbHVlVG9vbHRpcHMiLCJ2YWx1ZVRvb2x0aXBIZWFkaW5ncyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyIsIm5ld05hbWUiLCJjdXN0b21GaWVsZE1hdGNoUmVuYW1lIiwidmFsdWVOb25TYWxlcyIsImN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlIiwiXyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAiLCJzaG93T3B0aW9uVG9vbHRpcHMiLCJwb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMiLCJkaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlciIsInNob3dTdW1tYXJ5IiwiX3g1IiwiX3RoaXM5IiwiaW52YWxpZCIsInBvcCIsIiRvcHRpb24iLCJfdGhpczAiLCJtYXRjaCIsImhpZGVJZk9wdGlvbnMiLCJrdiIsIl9yZWY4IiwidHJpbSIsIl9yZWY5IiwidGhlbk9wdGlvbnMiLCJfcmVmMCIsIl9yZWYxIiwiX3JlZjEwIiwiX3RoaXMwJGZpbmRPcHRpb25WYWx1IiwiZ2V0QWxsIiwiX3JlZjExIiwiX3JlZjEyIiwiX2hpZGVPcHRpb25WYWx1ZSIsIl9yZWYxMyIsIl90aGlzMSIsIl90aGlzMSRwcm9kdWN0T3B0aW9ucyIsIl9yZWYxNCIsIl9yZWYxNSIsIl90aGlzMTAiLCJfbSQxJHNwbGl0JG1hcCIsIl9yZWYxNiIsIl9yZWYxNyIsIl9yZWYxOCIsIl90aGlzMTEiLCJfbSQxJHNwbGl0JG1hcDIiLCJoZWFkaW5nIiwiX3JlZjE5IiwiX3JlZjIwIiwiX3JlZjIxIiwiX2t2JHNwbGl0JG1hcCIsInZhbHVlTGFiZWwiLCJfb3B0aW9uJHZhbHVlcyRmaW5kIiwiX3JlZjIyIiwiZmV0Y2hTZXR0aW5ncyIsIl9mZXRjaFNldHRpbmdzIiwiY3VycmVuY3lDb2RlIiwiYWN0aXZlX2N1cnJlbmN5X2NvZGUiLCJkZWZhdWx0Q3VycmVuY3lDb2RlIiwiZGVmYXVsdF9jdXJyZW5jeV9jb2RlIiwic2V0dGluZ3MiLCJmZXRjaE9wdGlvblByaWNlcyIsIl9mZXRjaE9wdGlvblByaWNlcyIsIl9jYWxsZWU0Iiwic2hvd09wdGlvbnMiLCJzZWxlY3RlZE9wdGlvblZhbHVlSWRzIiwiY29tYm9zIiwiY29tYm9zTWV0YSIsInZhcmlhbnRJZHMiLCJzZWxlY3RlZFZhcmlhbnRWYWx1ZUlkcyIsInZhcmlhbnRCYXNlbGluZUluZGV4ZXMiLCJjYW5kaWRhdGVzIiwicHJvZHVjdHMiLCJwcmV2IiwidmFyaWFudEJhc2VsaW5lcyIsInNlbGVjdGlvbnMiLCJfY29udGV4dDQiLCJfcmVmMjMiLCJvcHRpb25FbnRpdHlJZCIsInZhbHVlRW50aXR5SWQiLCJfcmVmMjQiLCJTZXQiLCJfcmVmMjUiLCJoYXMiLCJpc1ZhcmlhbnQiLCJvdGhlclZhcmlhbnRzIiwiX3JlZjI2IiwiY29tYm8iLCJtZXRhIiwiX3JlZjI3IiwiZmV0Y2hPcHRpb25QcmljZXNCYXRjaCIsIl9yZWYyOCIsIkJvb2xlYW4iLCJzZWxlY3Rpb24iLCJiYXNlIiwicHJpY2VzV2l0aFRheCIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aCIsIl9iYXNlJHByaWNlc1dpdGhUYXgiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGgyIiwiX2Jhc2UkcHJpY2VzV2l0aFRheDIiLCJub25TYWxlUHJpY2VXaXRoVGF4IiwiYmFzZVByaWNlIiwiYWRqdXN0ZWRQcmljZXNXaXRoVGF4Iiwibm9uU2FsZVByaWNlVmFsdWUiLCJwcmljZXNXaXRob3V0VGF4IiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoMyIsIl9iYXNlJHByaWNlc1dpdGhvdXRUYSIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aDQiLCJfYmFzZSRwcmljZXNXaXRob3V0VGEyIiwibm9uU2FsZVByaWNlV2l0aG91dFRheCIsImFkanVzdGVkUHJpY2VzV2l0aG91dFRheCIsIl94NiIsIl94NyIsImZldGNoT3B0aW9uUHJpY2UiLCJfZmV0Y2hPcHRpb25QcmljZSIsIl9jYWxsZWU1Iiwib3B0aW9uVmFsdWVJZHMiLCJfeWllbGQkdGhpcyRmZXRjaE9wdGkiLCJfY29udGV4dDUiLCJfeDgiLCJfZmV0Y2hPcHRpb25QcmljZXNCYXRjaCIsIl9jYWxsZWU3IiwiX3RoaXMxMiIsIkJBVENIX0NIVU5LX1NJWkUiLCJjYWNoZUtleXMiLCJ1bmNhY2hlZEluZGV4ZXMiLCJjaHVua3MiLCJfY29udGV4dDciLCJjaHVua0luZGV4ZXMiLCJfY2FsbGVlNiIsInZhcmlhYmxlRGVmcyIsImFsaWFzRmllbGRzIiwiX3QyIiwiX2NvbnRleHQ2IiwiX3Jlc3AkZGF0YSIsIl94OSIsIl90aGlzMTMiLCJfcmVmMzAiLCJfcmVmMzAkIiwiJGxhYmVsIiwiYWZ0ZXIiLCJwcmVwZW5kIiwiX3JlZjMxIiwidmFsdWVUb29sdGlwIiwiJHZhbHVlIiwiX3JlZjMyIiwiX3JlZjMzIiwiX3JlZjM0IiwidmFsdWVUb29sdGlwSGVhZGluZyIsIiR0b29sdGlwSGVhZGluZyIsIl90aGlzMTQiLCJvcHRpb25JZHMiLCJfaW5kZXgiLCJfcmVmMzUiLCJfdG9vbHRpcHMkb3B0aW9uJGlkMyIsIl90b29sdGlwcyRvcHRpb24kaWQ0Iiwic2hvd0lubGluZU9wdGlvblRvb2x0aXBzIiwiX3RoaXMxNSIsInByZWZpeCIsIm1hc3RlclRvb2x0aXBzIiwicmVzb2x2ZWRUb29sdGlwcyIsIl9yZWYzNiIsInN0YXJ0c1dpdGgiLCJzcGVjTmFtZSIsIl9yZWYzNyIsInRvb2x0aXBUZXh0IiwiJGRkIiwiX3RoaXMxNiIsIl9yZWYzOCIsIl9yZWYzOCQiLCJfcmVmMzgkJHZhbHVlVG9vbHRpcHMiLCJfcmVmMzkiLCJfcmVmNDAiLCJfcmVmNDEiLCJzaG93bk9wdGlvbnMiLCJfcmVmNDIiLCJkZWZhdWx0T3B0aW9ucyIsIl9yZWY0MyIsInByZWZpbGwiLCJzZWxlY3RlZF9kYXRlIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiX3JlZjQ0Iiwic2VsZWN0ZWQiLCJjaGVja2JveE9wdGlvbnMiLCJfcmVmNDUiLCJub1ZhbHVlIiwiZmlsZU9wdGlvbnMiLCJfcmVmNDYiLCJwYXJ0aWFsIiwiZGF0ZU9wdGlvbnMiLCJfcmVmNDciLCJkcm9wZG93bk9wdGlvbnMiLCJfcmVmNDgiLCJ0ZXh0T3B0aW9ucyIsIl9yZWY0OSIsIl9yZWY1MCIsIl92YWx1ZXMkZmluZCIsIl9yZWY1MSIsIl9yZWY1MiIsImNoZWNrZWQiLCJfcmVmNTMiLCJwYXJhbXMiLCJwcmVsb2FkZXIiLCJwcmljZUh0bWwiLCJwcmljZVRleHQiLCJzdWJ0b3RhbEh0bWwiLCIkcHJpY2UiLCIkb2xkIiwiJHBsYWNlaG9sZGVyIiwiX3RoaXMkcHJvZHVjdE9wdGlvbnMiLCJfdGhpczE3IiwiX3JlZjU0IiwiX3Nob3dPcHRpb25QcmljZXMiLCJfY2FsbGVlOCIsImlnbm9yZVVwZGF0ZVN1YnRvdGFsIiwiX3RoaXMxOCIsIl95aWVsZCRQcm9taXNlJGFsbCIsIl95aWVsZCRQcm9taXNlJGFsbCQiLCJzaG93UHJpY2UiLCJfY29udGV4dDgiLCJfaWQiLCJfcmVmNTUiLCJfYXJyYXlMaWtlVG9BcnJheSIsImFicyIsIl9yZWY1NiIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYSIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYTIiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UyIiwidGF4IiwicGRwIiwicHJpY2VXaXRoVGF4VmFsdWUiLCJwcmljZVdpdGhUYXgiLCJub25TYWxlUHJpY2VXaXRoVGF4VmFsdWUiLCJwcmljZVdpdGhvdXRUYXhWYWx1ZSIsInByaWNlV2l0aG91dFRheCIsIm5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZSIsIl9ub25lU2FsZXMkb3B0aW9uSWQiLCJub25TYWxlIiwiX2FkanVzdGVkUHJpY2VzV2l0aG91MyIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYTMiLCJleGNoYW5nZWROb25TYWxlIiwiZXhjaGFuZ2VSYXRlIiwicHJpY2VWYWx1ZSIsInByaWNlU2VsZWN0b3IiLCJzaG93T3B0aW9uU3VidG90YWwiLCJfeDAiLCJfeDEiLCJfeDEwIiwiX3gxMSIsIl94MTIiLCJfeDEzIiwiX3Byb2R1Y3QkcHJpY2VzV2l0aFRhIiwiX3Byb2R1Y3QkcHJpY2VzV2l0aG91IiwidHh0U3VidG90YWwiLCJ0eHRSZXZpZXdTZWxlY3Rpb25zIiwib3B0aW9ucyIsIiRzdWJ0b3RhbCIsIl9vcHRpb24kdmFsdWVzIiwiXyRtb2RpZmllcnNNb2RhbE9wdGlvIiwiZGF5U3RyIiwibW9udGhTdHIiLCJ5ZWFyU3RyIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInZhbHVlU3RyIiwiX3JlZjU3Iiwib3B0aW9uRWxQcmljZUh0bWwiLCJzdW1tYXJ5SHRtbCIsInBhcnNlRGF0ZVRpbWVTdHJpbmciLCJzdHIiLCJyZWdleCIsInNob3J0TW9udGgiLCJzaG9ydERheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJzaG9ydEhvdXIiLCJzaG9ydE1pbnV0ZSIsInNpbmdsZVRpbWVDb21wb25lbnQiLCJ0elNpZ24iLCJ0ekhvdXJPZmZzZXQiLCJ0ek1pbnV0ZU9mZnNldCIsInBhcnNlSW50Iiwic2lnbiIsInR6SG91ciIsInR6TWludXRlIiwidGltZXpvbmUiLCJwYXJzZUNvdW50ZG93bkRhdGUiLCJwYXJzZWREYXRlIiwibm93IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJoIiwibWluIiwic2VjIiwiZGF0ZSIsInV0Y01pbGxpcyIsIlVUQyIsInNldEZ1bGxZZWFyIiwic2V0TW9udGgiLCJzZXREYXRlIiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsImVsZW1lbnRzIiwidGltZXIiLCJvYnNlcnZlciIsImRhdGVEYXRhTmFtZSIsImluVmlld3BvcnREYXRhTmFtZSIsInRyYW5zbGF0aW9uc0RhdGFOYW1lIiwic2VsZWN0b3JzIiwiZW5kTGFiZWwiLCJkYXlWYWx1ZSIsImRheUxhYmVsIiwiaG91clZhbHVlIiwiaG91ckxhYmVsIiwibWludXRlVmFsdWUiLCJtaW51dGVMYWJlbCIsInNlY29uZFZhbHVlIiwic2Vjb25kTGFiZWwiLCJ0ZW1wbGF0ZSIsImhpZGVDbGFzcyIsInNhbGVFbmRDbGFzcyIsImFjdGl2ZUNsYXNzIiwidHJhbnNsYXRpb25zIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJqc29uIiwidHJhbnMiLCJrZXlzIiwiX3RyYW5zIiwic2hvcnRLZXkiLCJ2YWxpZERhdGUiLCJvYnNlcnZlIiwic3RhcnQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290IiwidGhyZXNob2xkIiwidW5vYnNlcnZlIiwiaXNWaXNpYmxlSW5WaWV3cG9ydCIsInNpemUiLCJydW4iLCJzdG9wIiwiZGlzY29ubmVjdCIsImJvZHkiLCJjb250YWlucyIsImRpZmYiLCJmbG9vciIsIiRlbmRMYWJlbCIsIiRkYXkiLCIkZGF5VmFsdWUiLCIkZGF5TGFiZWwiLCIkaG91ciIsIiRob3VyVmFsdWUiLCIkaG91ckxhYmVsIiwiJG1pbnV0ZSIsIiRtaW51dGVWYWx1ZSIsIiRtaW51dGVMYWJlbCIsIiRzZWNvbmQiLCIkc2Vjb25kVmFsdWUiLCIkc2Vjb25kTGFiZWwiLCJ0b2dnbGVDbGFzcyIsImFyaWFLZXlDb2RlcyIsIlJFVFVSTiIsIlNQQUNFIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwiaW5pdFJhZGlvT3B0aW9ucyIsInNldENoZWNrZWRSYWRpb0l0ZW0iLCJpdGVtQ29sbGVjdGlvbiIsIml0ZW1JZHgiLCJpZHgiLCJpdGVtIiwiJGl0ZW0iLCJjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24iLCJsYXN0SXRlbUlkeCIsImN1cnJlbnRJZHgiLCJoYW5kbGVJdGVtS2V5RG93biIsImtleUNvZGUiLCJsYXN0Q29sbGVjdGlvbkl0ZW1JZHgiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2SXRlbUlkeCIsIm5leHRJdGVtSWR4IiwiJGNvbnRhaW5lciIsIml0ZW1TZWxlY3RvciIsIiRpdGVtQ29sbGVjdGlvbiIsIm9wdGlvbnNUeXBlc01hcCIsIklOUFVUX0ZJTEUiLCJJTlBVVF9URVhUIiwiSU5QVVRfTlVNQkVSIiwiSU5QVVRfQ0hFQ0tCT1giLCJURVhUQVJFQSIsIkRBVEUiLCJTRVRfU0VMRUNUIiwiU0VUX1JFQ1RBTkdMRSIsIlNFVF9SQURJTyIsIlNXQVRDSCIsIlBST0RVQ1RfTElTVCIsIm9wdGlvbkNoYW5nZURlY29yYXRvciIsImFyZURlZmF1bHRPcHRpb25zU2V0IiwiYXR0cmlidXRlc0RhdGEiLCJhdHRyaWJ1dGVzQ29udGVudCIsImNvbnRlbnQiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsIlByb2R1Y3REZXRhaWxzQmFzZSIsImluaXRSYWRpb0F0dHJpYnV0ZXMiLCJnZXRUYWJSZXF1ZXN0cyIsIl9fIiwiX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUiLCJ2YXJpYW50RG9tTm9kZSIsInZhcmlhbnRUeXBlIiwicmFkaW8iLCIkcmFkaW8iLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsIiRhY3RpdmVUYWIiLCIkdGFiQ29udGVudCIsInJycFdpdGhUYXgiLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwicHJpY2VMYWJlbCIsIiR3ZWlnaHQiLCIkaW5jcmVtZW50cyIsIiRhZGRUb0NhcnQiLCIkYWRkVG9DYXJ0Rm9ybSIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGlucHV0Iiwic2t1IiwidXBjIiwicXVhbnRpdHkiLCIkYnVsa1ByaWNpbmciLCIkd2FsbGV0QnV0dG9ucyIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwidmlld01vZGVsIiwibWVzc2FnZSIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJzaG93TWVzc2FnZUJveCIsInVwZGF0ZVByaWNlVmlldyIsIndlaWdodCIsInZhcmlhbnRJZCIsInVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3IiwiYnVsa19kaXNjb3VudF9yYXRlcyIsImFkZFRvQ2FydFdyYXBwZXIiLCJ1cGRhdGVkUHJpY2UiLCJwcmljZV9yYW5nZSIsIm1heCIsInNhdmVkIiwiJG1lc3NhZ2VCb3giLCJpc1ZhbGlkRm9ybSIsInRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5Iiwic2hvdWxkU2hvdyIsImdldEF0dHJpYnV0ZVR5cGUiLCJlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJtb2RhbEZhY3RvcnkiLCJub2QiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiZm9ybXMiLCJub3JtYWxpemVGb3JtRGF0YSIsImNvbnZlcnRJbnRvQXJyYXkiLCJiYW5uZXJVdGlscyIsImN1cnJlbmN5U2VsZWN0b3IiLCJfUHJvZHVjdERldGFpbHNCYXNlIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwibGlzdGVuUXVhbnRpdHlDaGFuZ2UiLCIkc3dhdGNoT3B0aW9uTWVzc2FnZSIsInN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZSIsInN3YXRjaEdyb3VwSWRMaXN0IiwiZ3JvdXAiLCJzdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzIiwidXBkYXRlRGF0ZVNlbGVjdG9yIiwidXBkYXRlUHJvZHVjdERldGFpbHNEYXRhIiwiYWRkVG9DYXJ0VmFsaWRhdG9yIiwic3VibWl0IiwidGFwIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJoYXNEZWZhdWx0T3B0aW9ucyIsIiRwcm9kdWN0U3dhdGNoR3JvdXAiLCIkcHJvZHVjdFN3YXRjaExhYmVscyIsInBsYWNlU3dhdGNoTGFiZWxJbWFnZSIsIiRvcHRpb25JbWFnZSIsIm9wdGlvbkltYWdlV2lkdGgiLCJvdXRlcldpZHRoIiwiZXh0ZW5kZWRPcHRpb25JbWFnZU9mZnNldExlZnQiLCJfbGFiZWwkZ2V0Qm91bmRpbmdDbGkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyaWdodCIsImVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyIiwic2NyZWVuIiwic2hpZnRWYWx1ZSIsInJlZ2lzdGVyQWRkVG9DYXJ0VmFsaWRhdGlvbiIsInNob3dTd2F0Y2hOYW1lcyIsInN3YXRjaEdyb3VwRWxlbWVudCIsInBhcmVudE5vZGUiLCJzaG93U3dhdGNoTmFtZU9uT3B0aW9uIiwiZWxlbWVudCIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZCIsInNldFByb2R1Y3RWYXJpYW50IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiX2lzRW1wdHkiLCIkcHJvZHVjdElkIiwib3B0aW9uQ2hhbmdlQ2FsbGJhY2siLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsImRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50IiwidmFsaWRhdGUiLCJjYiIsIm51bWJlcnNPbmx5IiwiZXJyb3JNZXNzYWdlIiwicHJvZHVjdFF1YW50aXR5RXJyb3JNZXNzYWdlIiwic3dhdGNoR3JvdXBJZCIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJvcHRpb25MYWJlbCIsImNoaWxkcmVuIiwib3B0aW9uVGl0bGUiLCJpc1NhdGlzZmllZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRlU3RyaW5nIiwieCIsImdldFNlbGVjdGVkT3B0aW9uTGFiZWwiLCJwcm9kdWN0VmFyaWFudHNsaXN0IiwibWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCIsImlucHQiLCJkYXRhc2V0IiwicHJvZHVjdEF0dHJpYnV0ZVZhbHVlIiwibGFiZWxzIiwicHJvZHVjdFZhcmlhbnQiLCJ2aWV3IiwicHJvZHVjdE5hbWUiLCJjYXJkIiwid2FzUmVxdWlyZWQiLCJpc1J1bm5pbmdJbklmcmFtZSIsInNlbGYiLCJ0b3AiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCIkY29udGV4dCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkZXRhaWwiLCIkc3dhdGNoIiwiJHN3YXRjaEdyb3VwIiwic3dhdGNoTmFtZSIsImFjdGl2ZVN3YXRjaEdyb3VwSWQiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJyb2xlIiwiX2lzUGxhaW5PYmplY3QiLCJzZXRBbHRlcm5hdGVJbWFnZSIsInJlc3RvcmVJbWFnZSIsIiR0YXJnZXQiLCJxdWFudGl0eU1pbiIsInF1YW50aXR5TWF4IiwidmFsaWRhdGVJbmNyZWFzZUFnYWluc3RNYXhCb3VuZGFyeSIsInZhbGlkYXRlRGVjcmVhc2VBZ2FpbnN0TWluQm91bmRhcnkiLCJ3aGljaCIsIiRhZGRUb0NhcnRCdG4iLCJpdGVtQWRkIiwiY2FydF9pZCIsIm9wZW4iLCJBcHBsZVBheVNlc3Npb24iLCIkbW9kYWwiLCJjYXJ0X2l0ZW0iLCJyZWRpcmVjdFRvIiwiY2FydF91cmwiLCJ1cmxzIiwiZ2V0Q2FydENvbnRlbnQiLCJjYXJ0SXRlbUlkIiwib25Db21wbGV0ZSIsInN1Z2dlc3QiLCJjb25maWciLCJzdWdnZXN0aW9ucyIsImdldENvbnRlbnQiLCJpZnJhbWVTZGsiLCJtb2RhbCIsInVwZGF0ZUNvbnRlbnQiLCIkY2FydFF1YW50aXR5IiwiJGNvbnRlbnQiLCIkY2FydENvdW50ZXIiLCIkcHJvbW90aW9uQmFubmVyIiwiJGJhY2tUb1Nob3BwcGluZ0J0biIsIiRtb2RhbENsb3NlQnRuIiwiYmFubmVyVXBkYXRlSGFuZGxlciIsIiRwcm9kdWN0Q29udGFpbmVyIiwicmVsb2FkIiwiZm9ybURhdGFJdGVtcyIsInNlcmlhbGl6ZUFycmF5IiwicHJvZHVjdERldGFpbHMiLCJmb3JtRGF0YUl0ZW0iLCJwcm9kdWN0T3B0aW9uIiwib3B0aW9uVmFsdWUiLCJvcHRpb25TZWxlY3Rpb25zIiwic2NvcGUiLCJ1cGRhdGVEYXlzIiwiZGF0ZU9wdGlvbiIsIm1vbnRoU2VsZWN0b3IiLCJkYXlTZWxlY3RvciIsInllYXJTZWxlY3RvciIsImRheXNJbk1vbnRoIiwiaXNOYU4iLCJPcHRpb24iLCJmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtIiwicmVzIiwiX3N0ZXAkdmFsdWUiLCJmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0iLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX3N0ZXAyJHZhbHVlIiwiZXZ0IiwiYW1vdW50IiwiZG9jdW1lbnRNb2RlIiwiY29sbGVjdGlvbiIsIiRtYWluSW1hZ2VOZXN0ZWQiLCIkc2VsZWN0YWJsZUltYWdlcyIsInNldEltYWdlWm9vbSIsImltZ09iaiIsInNhdmVkSW1hZ2UiLCIkc2VsZWN0ZWRUaHVtYiIsInNlbGVjdE5ld0ltYWdlIiwibWFpbkltYWdlQWx0IiwiYWx0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=