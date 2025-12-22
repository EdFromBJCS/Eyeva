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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX3Byb2R1Y3QtZGV0YWlsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEs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Qy9CVSxXQUFXLEVBQUUsRUFBRTtNQUNmQyxhQUFhLEVBQUU7SUFDbkIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBOUcsTUFBQSxDQUVEQyxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDK2xDLGlCQUFpQixDQUFDM2xDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDZ21DLGNBQWMsQ0FBQ25wQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDdEUsQ0FBQztFQUFBLE9BQUF1UCxZQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2V5ZXZhL2ltYWdlLWdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9leWV2YS9wcm9kdWN0LWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9zYWxlLWNvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvcmFkaW9PcHRpb25zLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMtYmFzZS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Jhbm5lci11dGlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvaWUtaGVscGVycy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L2ltYWdlLWdhbGxlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdlYXN5em9vbSc7XG5pbXBvcnQgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xuaW1wb3J0IHsgY3JlYXRlRm9jdXNUcmFwIH0gZnJvbSAnZm9jdXMtdHJhcCc7XG5pbXBvcnQgeyB0b29scyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDb3JuZXJzdG9uZUltYWdlR2FsbGVyeSBmcm9tICcuLi8uLi90aGVtZS9wcm9kdWN0L2ltYWdlLWdhbGxlcnknO1xuXG5jb25zdCBERUZBVUxUX1NURVAgPSAzNjA7XG5jbGFzcyBJbWFnZUdhbGxlcnlNb2RhbCB7XG4gICAgbW9kYWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1vdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1jbG9zZVwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkNsb3NlXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkNsb3NlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+PHVzZSBocmVmPVwiI2ljb24teG1hcmstbGFyZ2VcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi1lYXN5em9vbVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4taW1nLWNvbnRhaW5lclwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1tYWluLWltZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Jm1haW5JbWFnZUxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLTM2MFwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLTM2MC1pbWctY29udGFpbmVyXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1pbWctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBkYXRhLXNpemVzPVwiYXV0b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC0zNjAtY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcHJldmlvdXNcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXByZXZpb3VzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1hcnJvdy1sZWZ0LWxvbmdcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcGxheVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGxheT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tcGxheVwiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UGxheTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLXBhdXNlXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wYXVzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tcGF1c2VcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlBhdXNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tbmV4dFwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtbmV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctcmlnaHQtbG9uZ1wiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi12aWRlb1wiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGF6eWxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2NDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzOTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRpdGxlXCI+e3tuYW1lfX08L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyN2aWRlb3MubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXZpZGVvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sYWJlbFwiPnt7dmlkZW9zTGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I3ZpZGVvc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey92aWRlb3N9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3svdmlkZW9zLmxlbmd0aH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlczM2MC5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3tpbWFnZXMzNjBMYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzMzYwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzMzYwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlczM2MC5sZW5ndGh9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXMubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWltYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sYWJlbFwiPnt7aW1hZ2VzTGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXMubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJbWFnZUdhbGxlcnk/fSBpbWFnZUdhbGxlcnlcbiAgICAgKiBAcGFyYW0ge2pRdWVyeT99ICRnYWxsZXJ5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW1hZ2VHYWxsZXJ5ID0gbnVsbCwgJGdhbGxlcnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5ID0gaW1hZ2VHYWxsZXJ5O1xuICAgICAgICB0aGlzLiRnYWxsZXJ5ID0gJGdhbGxlcnk7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgICAgICAgaWYgKGltYWdlR2FsbGVyeSAmJiAkZ2FsbGVyeSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuJGdhbGxlcnkpIHtcbiAgICAgICAgICAgIC8vIG9wZW4gbW9kYWwgd2hlbiBjbGljayBvbiB2aWRlbywgMzYwIHZpZXcsIG9yIG1vcmUgaW1hZ2UgdGh1bWJuYWlsc1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeVxuICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW9dLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLW1vcmVdJylcbiAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snKVxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmNzZXQgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSAkYS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXScpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKGltYWdlVXJsLCBpbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB2aWRlb0lkLCBzdGVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsb3NlIG1vZGFsIHdoZW4gY2xpY2sgY2xvc2UgYnV0dG9uXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIHByZXNzIEVzY2FwZSBrZXlcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLm9uKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNsb3NlIG1vZGFsIHdoZW4gY2xpY2sgb3V0c2lkZSAob3ZlcmxheSlcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGdhbGxlcnlNb2RhbC5pcyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW1hZ2UgdGh1bWJuYWlsc1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHZpZGVvIHRodW1ibmFpbHNcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKHZpZGVvSWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAzNjAgaW1hZ2UgdGh1bWJuYWlsc1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3JdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdG90YWxTdGVwID0gJGEuZGF0YSgnZXlldmFJbWFnZUdhbGxlcnlNb2RhbEl0ZW1Sb3RhdG9yJyk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW4zNjAoXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgIHRvdGFsU3RlcCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wcmV2aW91c10nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzMzYwU3RlcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtbmV4dF0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLm5leHQzNjBTdGVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wbGF5XScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucGxheTM2MCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGF1c2VdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZTM2MCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95TW9kYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLiRnYWxsZXJ5TW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbCA9ICQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZU1vZGFsKCkge1xuICAgICAgICBjb25zdCAkbWFpbkltYWdlTGluayA9IHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuZmluZCgnYScpLmNsb25lKCk7XG4gICAgICAgICRtYWluSW1hZ2VMaW5rLmZpbmQoJ2ltZycpLnJlbW92ZUF0dHIoJ2RhdGEtem9vbS1pbWFnZScpLmF0dHIoJ2RhdGEtZXlldmEtZ2FsbGVyeS1tb2RhbC1tYWluLWltYWdlJywgJycpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZUxpbmtFbGVtZW50ID0gJG1haW5JbWFnZUxpbmsuZ2V0KDApPy5vdXRlckhUTUw7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLiRnYWxsZXJ5LmNsb3Nlc3QoJy5wcm9kdWN0VmlldycpLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtdGl0bGVdJykudGV4dCgpO1xuICAgICAgICBjb25zdCB2aWRlb3NMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgndmlkZW9zTGFiZWwnKSB8fCAnVmlkZW9zJztcbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwTGFiZWwgPSB0aGlzLiRnYWxsZXJ5LmRhdGEoJ2ltYWdlczM2MExhYmVsJykgfHwgJzM2MCBWaWV3JztcbiAgICAgICAgY29uc3QgaW1hZ2VzTGFiZWwgPSB0aGlzLiRnYWxsZXJ5LmRhdGEoJ2ltYWdlc0xhYmVsJykgfHwgJ1Byb2R1Y3QgSW1hZ2VzJztcblxuICAgICAgICBjb25zdCB2aWRlb3MgPSB0aGlzLiRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10nKS5nZXQoKS5tYXAobGkgPT4gKHtcbiAgICAgICAgICAgIGxpbmtFbGVtZW50OiAkKGxpKS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykuY2xvbmUoKS5nZXQoMCk/Lm91dGVySFRNTCxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGltYWdlczM2MCA9IHRoaXMuJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0nKS5nZXQoKS5tYXAobGkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChsaSkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpLmNsb25lKCk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9ICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpO1xuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcihpbWFnZVVybC5zcGxpdCgnIycpWzFdKSB8fCBERUZBVUxUX1NURVA7XG4gICAgICAgICAgICAkZWwucmVtb3ZlQXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0nKS5hdHRyKCdkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yJywgc3RlcCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICRlbC5nZXQoMCk/Lm91dGVySFRNTCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpLmdldCgpXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4gJChhKS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW9dLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLW1vcmVdJykubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkYSA9ICQoYSkuY2xvbmUoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0nLCAnJyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogJGEuZ2V0KDApPy5vdXRlckhUTUwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kYWxUZW1wbGF0ZSwge1xuICAgICAgICAgICAgbWFpbkltYWdlTGlua0VsZW1lbnQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmlkZW9zTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXMzNjBMYWJlbCxcbiAgICAgICAgICAgIGltYWdlc0xhYmVsLFxuICAgICAgICAgICAgdmlkZW9zLFxuICAgICAgICAgICAgaW1hZ2VzMzYwLFxuICAgICAgICAgICAgaW1hZ2VzLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmhpZGUoKS5hcHBlbmRUbyh0aGlzLiRib2R5KTtcblxuICAgICAgICB0aGlzLmluaXRJbWFnZVpvb20oKTtcblxuICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IGNyZWF0ZUZvY3VzVHJhcCh0aGlzLiRnYWxsZXJ5TW9kYWwuZ2V0KDApLCB7XG4gICAgICAgICAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgICAgICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKGltYWdlVXJsLCBpbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB2aWRlb0lkLCB0b3RhbFN0ZXApIHtcbiAgICAgICAgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRib2R5LmFkZENsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xuXG4gICAgICAgIGlmICh0aGlzLmltYWdlR2FsbGVyeSkge1xuICAgICAgICAgICAgY29uc3QgJG1haW5JbWcgPSB0aGlzLmltYWdlR2FsbGVyeS4kbWFpbkltYWdlLmZpbmQoJ2ltZycpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoXG4gICAgICAgICAgICAgICAgJG1haW5JbWcuYXR0cignc3JjJyksXG4gICAgICAgICAgICAgICAgJG1haW5JbWcuYXR0cignc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuJG1haW5JbWFnZS5hdHRyKCdkYXRhLXpvb20taW1hZ2UnKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlkZW9JZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8odmlkZW9JZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG90YWxTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW4zNjAoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19vcGVuaW5nJykuc2hvdygpLnJlbW92ZUNsYXNzKCdfb3BlbmluZycpO1xuICAgICAgICB0aGlzLmZvY3VzVHJhcC5hY3RpdmF0ZSgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2VdJykudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19jbG9zaW5nJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlTWFpblZpZGVvKCk7XG4gICAgICAgICAgICB0aGlzLmhpZGUzNjBVSSgpO1xuICAgICAgICAgICAgdGhpcy4kYm9keS5yZW1vdmVDbGFzcygnX2dhbGxlcnlNb2RhbC1vcGVuZWQnKTtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5yZW1vdmVDbGFzcygnX2Nsb3NpbmcnKS5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQpIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50LnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgc2V0TWFpbkltYWdlKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwpIHtcbiAgICAgICAgdGhpcy5oaWRlTWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuaGlkZTM2MFVJKCk7XG4gICAgICAgIHRoaXMuc2hvd01haW5JbWFnZSgpO1xuXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwpO1xuICAgIH1cblxuICAgIHNob3dNYWluSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpLnNob3coKTtcbiAgICB9XG5cbiAgICBoaWRlTWFpbkltYWdlKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsLCB2aWRlb0lkKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmxdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAuZmlsdGVyKChfaSwgYSkgPT5cbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmwgJiYgJChhKS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpID09PSBtYWluSW1hZ2VVcmxcbiAgICAgICAgICAgICAgICB8fCB2aWRlb0lkICYmICQoYSkuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKSA9PT0gdmlkZW9JZClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgc3dhcE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKSB7XG4gICAgICAgIGNvbnN0ICRpbWFnZUNvbnRhaW5lciA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpO1xuICAgICAgICBjb25zdCAkYSA9ICRpbWFnZUNvbnRhaW5lci5maW5kKCdhJyk7XG4gICAgICAgIGNvbnN0ICRtYWluSW1hZ2UgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtZ2FsbGVyeS1tb2RhbC1tYWluLWltYWdlXScpO1xuXG4gICAgICAgICRpbWFnZUNvbnRhaW5lci5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xuICAgICAgICAkYS5hdHRyKCdocmVmJywgem9vbUltYWdlVXJsKTtcbiAgICAgICAgJG1haW5JbWFnZS5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldCk7XG5cbiAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLnN3YXAoXG4gICAgICAgICAgICBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaXNCcm93c2VySUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdUcmlkZW50Jyk7XG4gICAgICAgIGlmIChpc0Jyb3dzZXJJRSkge1xuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZXNJRSA9IHtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoJHttYWluSW1hZ2VVcmx9KWAsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1vcmlnaW4nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY29udGFpbicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZV0nKS5jc3MoZmFsbGJhY2tTdHlsZXNJRSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltYWdlKCkge1xuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1tYWluLWltZy1jb250YWluZXJdJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICRpbWFnZUNvbnRhaW5lci5oZWlnaHQoKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSAkaW1hZ2VDb250YWluZXIud2lkdGgoKTtcblxuICAgICAgICBjb25zdCAkaW1hZ2UgPSB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuJHpvb207XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICRpbWFnZS5oZWlnaHQoKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAkaW1hZ2Uud2lkdGgoKTtcblxuICAgICAgICBpZiAoaGVpZ2h0IDwgY29udGFpbmVySGVpZ2h0IHx8IHdpZHRoIDwgY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0SW1hZ2Vab29tKCkge1xuICAgICAgICB0aGlzLmVhc3l6b29tID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJykuZWFzeVpvb20oe1xuICAgICAgICAgICAgb25TaG93OiAoKSA9PiB0aGlzLmNoZWNrSW1hZ2UoKSxcbiAgICAgICAgICAgIGVycm9yTm90aWNlOiAnJyxcbiAgICAgICAgICAgIGxvYWRpbmdOb3RpY2U6ICcnLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXJdJykuc2hvdygpO1xuICAgIH1cblxuICAgIGhpZGVNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllcl0nKS5oaWRlKClcbiAgICAgICAgICAgIC5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCAnJyk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKHZpZGVvSWQpIHtcbiAgICAgICAgdGhpcy5oaWRlTWFpbkltYWdlKCk7XG4gICAgICAgIHRoaXMuaGlkZTM2MFVJKCk7XG4gICAgICAgIHRoaXMuc2hvd01haW5WaWRlbygpO1xuXG4gICAgICAgIGNvbnN0IHNyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P3JlZj0wJmF1dG9wbGF5PTFgO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXJdJykuc2hvdygpLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobnVsbCwgdmlkZW9JZCk7XG4gICAgfVxuXG4gICAgc2V0TWFpbjM2MChtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApIHtcbiAgICAgICAgdGhpcy5oaWRlTWFpbkltYWdlKCk7XG4gICAgICAgIHRoaXMuaGlkZU1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNob3czNjBVSSgpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKG1haW5JbWFnZVVybCk7XG4gICAgICAgIHRoaXMuc3dhcE1haW4zNjAobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKTtcbiAgICB9XG5cbiAgICBzd2FwTWFpbjM2MChtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLWltZy1jb250YWluZXJdIGltZycpXG4gICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxuICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xuICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKDAsIHRvdGFsU3RlcCk7XG4gICAgfVxuXG4gICAgc2hvdzM2MFVJKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykuc2hvdygpO1xuICAgIH1cblxuICAgIGhpZGUzNjBVSSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLmhpZGUoKTtcbiAgICAgICAgdGhpcy5wYXVzZTM2MCgpO1xuICAgIH1cblxuICAgIHNldDM2MEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwLCB0b3RhbFN0ZXAgPSBERUZBVUxUX1NURVApIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpXG4gICAgICAgICAgICAuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JywgY3VycmVudFN0ZXApXG4gICAgICAgICAgICAuY3NzKCctLWltYWdlLTM2MC1zdGVwcycsIHRvdGFsU3RlcCk7XG4gICAgfVxuXG4gICAgbmV4dDM2MFN0ZXAoKSB7XG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKTtcbiAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JykpIHx8IDA7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJykpIHx8IERFRkFVTFRfU1RFUDtcblxuICAgICAgICBpZiAoc3RlcCA8IHRvdGFsIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcChzdGVwICsgMSwgdG90YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcCgwLCB0b3RhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2aW91czM2MFN0ZXAoKSB7XG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKTtcbiAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JykpIHx8IDA7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJykpIHx8IERFRkFVTFRfU1RFUDtcblxuICAgICAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoc3RlcCAtIDEsIHRvdGFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAodG90YWwgLSAxLCB0b3RhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5MzYwKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwzNjApO1xuICAgICAgICB0aGlzLmludGVydmFsMzYwID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0MzYwU3RlcCgpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykuYWRkQ2xhc3MoJ19wbGF5aW5nJyk7XG4gICAgfVxuXG4gICAgcGF1c2UzNjAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbDM2MCk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5yZW1vdmVDbGFzcygnX3BsYXlpbmcnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkSW1hZ2VHYWxsZXJ5TW9kYWwgZXh0ZW5kcyBJbWFnZUdhbGxlcnlNb2RhbCB7XG4gICAgbG9hZGluZ01vZGFsVGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtb3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheSBleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbG9hZGluZ1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgJHNjb3BlLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9kdWN0SWQsXG4gICAgICAgICAgICBncmFwaFFMVG9rZW4sXG4gICAgICAgICAgICB6b29tU2l6ZSxcbiAgICAgICAgICAgIHByb2R1Y3RTaXplLFxuICAgICAgICAgICAgdGh1bWJTaXplLFxuICAgICAgICAgICAgdHh0VmlkZW9zTGFiZWwsXG4gICAgICAgICAgICB0eHRJbWFnZXMzNjBMYWJlbCxcbiAgICAgICAgICAgIHR4dEltYWdlc0xhYmVsLFxuICAgICAgICB9ID0ge30sXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcbiAgICAgICAgdGhpcy5ncmFwaFFMVG9rZW4gPSBncmFwaFFMVG9rZW47XG4gICAgICAgIHRoaXMuem9vbVNpemUgPSB6b29tU2l6ZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0U2l6ZSA9IHByb2R1Y3RTaXplO1xuICAgICAgICB0aGlzLnRodW1iU2l6ZSA9IHRodW1iU2l6ZTtcbiAgICAgICAgdGhpcy50eHRWaWRlb3NMYWJlbCA9IHR4dFZpZGVvc0xhYmVsO1xuICAgICAgICB0aGlzLnR4dEltYWdlczM2MExhYmVsID0gdHh0SW1hZ2VzMzYwTGFiZWw7XG4gICAgICAgIHRoaXMudHh0SW1hZ2VzTGFiZWwgPSB0eHRJbWFnZXNMYWJlbDtcbiAgICB9XG5cbiAgICBhc3luYyBvcGVuTG9hZGluZ01vZGFsKCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lNb2RhbCgpO1xuXG4gICAgICAgIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50ID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy4kYm9keS5hZGRDbGFzcygnX2dhbGxlcnlNb2RhbC1vcGVuZWQnKTtcblxuICAgICAgICAvLyBkaXNwbGF5IGxvYWRpbmcgbW9kYWxcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5sb2FkaW5nTW9kYWxUZW1wbGF0ZSkpO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuaGlkZSgpLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19vcGVuaW5nJykuc2hvdygpLnJlbW92ZUNsYXNzKCdfb3BlbmluZycpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRNb2RhbCgpIHtcbiAgICAgICAgLy8gZmV0Y2ggcHJvZHVjdCBkYXRhXG4gICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hQcm9kdWN0KCk7XG5cbiAgICAgICAgY29uc3QgbWFpbkltYWdlID0gdGhpcy5pbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pc0RlZmF1bHQpIHx8IHRoaXMuaW1hZ2VzWzBdO1xuICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB0b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQobWFpbkltYWdlLnVybFRlbXBsYXRlKTtcblxuICAgICAgICBjb25zdCBtYWluSW1hZ2VMaW5rRWxlbWVudCA9IGBcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIiR7bWFpbkltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybD1cIiR7bWFpbkltYWdlLnVybH1cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHttYWluSW1hZ2VTcmNzZXR9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke21haW5JbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICA+PGltZyBjbGFzcz1cImxhenlsb2FkXCIgc3JjPVwiJHttYWluSW1hZ2UudGh1bWJuYWlsVXJsfVwiIGRhdGEtc3Jjc2V0PVwiJHttYWluSW1hZ2VTcmNzZXR9XCIgZGF0YS1zaXplcz1cImF1dG9cIiBhbHQ9XCIke21haW5JbWFnZS5hbHRUZXh0fVwiIC8+PC9hPmA7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuJHNjb3BlLmZpbmQoJy5jYXJkLXRpdGxlJykudGV4dCgpO1xuICAgICAgICBjb25zdCB2aWRlb3NMYWJlbCA9IHRoaXMudHh0VmlkZW9zTGFiZWwgfHwgJ1ZpZGVvcyc7XG4gICAgICAgIGNvbnN0IGltYWdlczM2MExhYmVsID0gdGhpcy50eHRJbWFnZXMzNjBMYWJlbCB8fCAnMzYwIFZpZXcnO1xuICAgICAgICBjb25zdCBpbWFnZXNMYWJlbCA9IHRoaXMudHh0SW1hZ2VzTGFiZWwgfHwgJ1Byb2R1Y3QgSW1hZ2VzJztcblxuICAgICAgICBjb25zdCB2aWRlb3MgPSB0aGlzLnZpZGVvcy5tYXAodmlkZW8gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh2aWRlby51cmwpO1xuICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd2Jyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiBgXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3ZpZGVvLnVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWQ9XCIke3ZpZGVvSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpLyR7dmlkZW9JZH0vZGVmYXVsdC5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIGhyZWY9XCIjaWNvbi1wbGF5LXNvbGlkXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwID0gdGhpcy5pbWFnZXMzNjAubWFwKChpbWFnZVVybCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcihpbWFnZVVybC5zcGxpdCgnIycpWzFdKSB8fCBERUZBVUxUX1NURVA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiBgXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yPVwiJHtzdGVwfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybD1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsPVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VVcmx9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSBocmVmPVwiI2ljb24tMzYwXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5pbWFnZXMubWFwKGltYWdlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlU3Jjc2V0ID0gdG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KGltYWdlLnVybFRlbXBsYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFZpZXctdGh1bWJuYWlsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7aW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsPVwiJHtpbWFnZS51cmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHtpbWFnZVNyY3NldH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsPVwiJHtpbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIHNyYz1cIiR7aW1hZ2UudGh1bWJuYWlsVXJsfVwiIGRhdGEtc3Jjc2V0PVwiJHtpbWFnZVNyY3NldH1cIiBkYXRhLXNpemVzPVwiYXV0b1wiIGFsdD1cIiR7aW1hZ2UuYWx0VGV4dH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0ICRnYWxsZXJ5TW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLm1vZGFsVGVtcGxhdGUsIHtcbiAgICAgICAgICAgIG1haW5JbWFnZUxpbmtFbGVtZW50LFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHZpZGVvc0xhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzMzYwTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXNMYWJlbCxcbiAgICAgICAgICAgIHZpZGVvcyxcbiAgICAgICAgICAgIGltYWdlczM2MCxcbiAgICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIHJlcGxhY2UgbG9hZGluZyBtb2RhbCB3aXRoIHRoZSBhY3R1YWwgbW9kYWxcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmh0bWwoJGdhbGxlcnlNb2RhbC5odG1sKCkpO1xuXG4gICAgICAgIHRoaXMuaW5pdEltYWdlWm9vbSgpO1xuXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGdhbGxlcnlNb2RhbC5nZXQoMCksIHtcbiAgICAgICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBvcGVuTW9kYWwoe1xuICAgICAgICBmaXJzdFZpZGVvID0gZmFsc2UsXG4gICAgICAgIGZpcnN0MzYwID0gZmFsc2UsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMub3BlbkxvYWRpbmdNb2RhbCgpO1xuXG4gICAgICAgIHRoaXMubG9hZE1vZGFsKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmlyc3RWaWRlbykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLmZpcnN0KCkuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1haW5WaWRlbyh2aWRlb0lkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpcnN0MzYwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yXScpLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2V5ZXZhSW1hZ2VHYWxsZXJ5TW9kYWxJdGVtUm90YXRvcicpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlXScpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaFByb2R1Y3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlcyB8fCB0aGlzLnZpZGVvcyB8fCB0aGlzLmltYWdlczM2MCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IFt6b29tV2lkdGgsIHpvb21IZWlnaHRdID0gdGhpcy56b29tU2l6ZS5zcGxpdCgneCcpLm1hcChOdW1iZXIpO1xuICAgICAgICBjb25zdCBbaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHRdID0gdGhpcy5wcm9kdWN0U2l6ZS5zcGxpdCgneCcpLm1hcChOdW1iZXIpO1xuICAgICAgICBjb25zdCBbdGh1bWJXaWR0aCwgdGh1bWJIZWlnaHRdID0gdGhpcy50aHVtYlNpemUuc3BsaXQoJ3gnKS5tYXAoTnVtYmVyKTtcblxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5KFxuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RJZDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR6b29tV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkem9vbUhlaWdodDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbWFnZVdpZHRoOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlSGVpZ2h0OiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHRodW1iV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGh1bWJIZWlnaHQ6IEludCFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0KGVudGl0eUlkOiAkcHJvZHVjdElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCh3aWR0aDogJGltYWdlV2lkdGgsIGhlaWdodDogJGltYWdlSGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxVcmw6IHVybCh3aWR0aDogJHRodW1iV2lkdGgsIGhlaWdodDogJHRodW1iSGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tVXJsOiB1cmwod2lkdGg6ICR6b29tV2lkdGgsIGhlaWdodDogJHpvb21IZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkcyhuYW1lczogW1wiX19AMzYwXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3RJZCxcbiAgICAgICAgICAgICAgICAgICAgem9vbVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICB6b29tSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJIZWlnaHQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuZ3JhcGhRTFRva2VufWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgW2ltYWdlcywgdmlkZW9zLCBpbWFnZXMzNjBdID0gW1xuICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdC5pbWFnZXMuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gbm9kZSksXG4gICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LnZpZGVvcy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiBub2RlKSxcbiAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QuY3VzdG9tRmllbGRzLmVkZ2VzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeyBub2RlIH0pID0+IG5vZGUubmFtZSA9PT0gJ19fQDM2MCcpXG4gICAgICAgICAgICAgICAgLm1hcCgoeyBub2RlIH0pID0+IG5vZGUudmFsdWUpLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e2FsdFRleHQ6IHN0cmluZywgaXNEZWZhdWx0OiBib29sZWFuLCB1cmw/OiBzdHJpbmcsIHRodW1ibmFpbFVybD86IHN0cmluZywgem9vbVVybD86IHN0cmluZywgdXJsVGVtcGxhdGU/OiBzdHJpbmd9Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e3RpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nfT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZpZGVvcyA9IHZpZGVvcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbWFnZXMzNjAgPSBpbWFnZXMzNjA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkgZXh0ZW5kcyBDb3JuZXJzdG9uZUltYWdlR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGdhbGxlcnkpIHtcbiAgICAgICAgc3VwZXIoJGdhbGxlcnkpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeU1vZGFsID0gbmV3IEltYWdlR2FsbGVyeU1vZGFsKHRoaXMsICRnYWxsZXJ5KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBzdXBlci5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5TW9kYWwuYmluZEV2ZW50cygpO1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuLy8gaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xuaW1wb3J0IENvcm5lcnN0b25lUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vLi4vdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgeyBhbGVydE1vZGFsLCBzaG93QWxlcnRNb2RhbCwgTW9kYWxFdmVudHMgfSBmcm9tICcuLi8uLi90aGVtZS9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IHsgZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMsIGN1cnJlbmN5Rm9ybWF0IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IFNhbGVDb3VudGRvd24gZnJvbSAnLi4vc2FsZS1jb3VudGRvd24nO1xuXG5jb25zdCBERUJVR19MT0cgPSBmYWxzZTtcblxuY29uc3Qgbm9ybWFsaXplT3B0aW9uU3RyaW5nID0gcyA9PiBzLnJlcGxhY2UoLzovZywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpO1xuXG5mdW5jdGlvbiBlcXVhbE9wdGlvblN0cmluZyhhLCBiKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZU9wdGlvblN0cmluZyhhKSA9PT0gbm9ybWFsaXplT3B0aW9uU3RyaW5nKGIpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byBhcnJheXMgYXJlIGVxdWFsIHJlZ2FyZGxlc3Mgb2Ygb3JkZXJcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIxXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWxVbm9yZGVyZWQoYXJyMSwgYXJyMikge1xuICAgIGNvbnN0IF9hcnIxID0gYXJyMS5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICBjb25zdCBfYXJyMiA9IGFycjIuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgcmV0dXJuIF9hcnIxLmxlbmd0aCA9PT0gX2FycjIubGVuZ3RoICYmIF9hcnIxLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBfYXJyMltpbmRleF0pO1xufVxuXG5sZXQgY2FjaGVkU2V0dGluZ3M7XG5cbi8qKlxuICogSGFuZGxlIG11bHRpcGxlIHByb21pc2VzIHdpdGggYSBjb25jdXJyZW5jeSBsaW1pdCAoZS5nLiwgcHJvY2Vzc2luZyBvbmx5IDEwIHByb21pc2VzIGF0IGEgdGltZSBvdXQgb2YgMTApXG4gKlxuICogQHBhcmFtIHtBcnJheTxGdW5jdGlvbjxUPn0gcHJvbWlzZXMgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIGEgcHJvbWlzZVxuICogQHBhcmFtIHsqfSBsaW1pdCBudW1iZXIgb2YgcHJvbWlzZXMgdG8gcHJvY2VzcyBhdCBhIHRpbWVcbiAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PFQ+Pn0gcmVzdWx0cyBvZiBhbGwgcHJvbWlzZXNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQocHJvbWlzZXMsIGxpbWl0ID0gMTApIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgY29uc3QgZXhlY3V0aW5nID0gW107IC8vIFRyYWNrIHRoZSBwcm9taXNlcyBjdXJyZW50bHkgZXhlY3V0aW5nXG5cbiAgICBmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcbiAgICAgICAgLy8gU3RhcnQgdGhlIHByb21pc2UgYW5kIGFkZCBpdCB0byB0aGUgZXhlY3V0aW5nIGxpc3RcbiAgICAgICAgY29uc3QgcCA9IHByb21pc2UoKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpbmlzaGVkIHByb21pc2UgZnJvbSBleGVjdXRpbmcgbGlzdFxuICAgICAgICAgICAgZXhlY3V0aW5nLnNwbGljZShleGVjdXRpbmcuaW5kZXhPZihwKSwgMSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHApO1xuICAgICAgICBleGVjdXRpbmcucHVzaChwKTtcblxuICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgbGltaXQsIHdhaXQgZm9yIHRoZSBmaXJzdCB0byBmaW5pc2hcbiAgICAgICAgaWYgKGV4ZWN1dGluZy5sZW5ndGggPj0gbGltaXQpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJhY2UoZXhlY3V0aW5nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdhaXQgZm9yIGFsbCByZW1haW5pbmcgcHJvbWlzZXMgdG8gY29tcGxldGVcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyB7XG4gICAgbW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtb3ZlcmxheVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW92ZXJsYXk+PC9kaXY+XG4gICAgYDtcblxuICAgIG1vZGlmaWVyc01vZGFsVGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWxcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNsb3NlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkNsb3NlXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY2xvc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkNsb3NlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Zz48dXNlIGhyZWY9XCIjaWNvbi14bWFyay1sYXJnZVwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1iYWNrLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkJhY2tcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1iYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5CYWNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1hcnJvdy1sZWZ0LWxvbmdcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1oZWFkZXItdGl0bGVcIj48JSZwcm9kdWN0VGl0bGUlPjwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jb250ZW50XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLXRpdGxlXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW4gY3VycmVudCBzdGVwJ3MgdGl0bGUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtb3B0aW9uc1wiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIG1vZGlmaWVycyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtc3VtbWFyeVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIHN1bW1hcnkgLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbXBsZXRlXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29tcGxldGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIGFkZCB0byBjYXJ0IGJ1dHRvbiAmIHF0eSBib3ggLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtZm9vdGVyXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbnRpbnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250aW51ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8JXR4dENvbnRpbnVlJT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1mb290ZXItc3VidG90YWxcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIHN1YnRvdGFsIC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDwlI21haW5JbWFnZVVybCU+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIjwlbWFpbkltYWdlVXJsJT5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmNzZXQ9XCI8JW1haW5JbWFnZVNyY3NldCU+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtem9vbS1pbWFnZT1cIjwlem9vbUltYWdlVXJsJT5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaXplcz1cImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYXp5bG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1pbWcgLz5cbiAgICAgICAgICAgICAgICA8JS9tYWluSW1hZ2VVcmwlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBvcHRpb25Ub29sdGlwVGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXRvb2x0aXBcIj48JXRvb2x0aXAlPjwvZGl2PlxuICAgIGA7XG5cbiAgICBvcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy12YWx1ZS10b29sdGlwXCI+PCV0b29sdGlwJT48L2Rpdj5cbiAgICBgO1xuXG4gICAgb3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXZhbHVlLXRvb2x0aXAtaGVhZGluZ1wiPjwlaGVhZGluZyU+PC9kaXY+XG4gICAgYDtcblxuICAgIG9wdGlvblByaWNlVGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLWdyb3VwXCI+XG4gICAgICAgICAgICA8JSNwcmVsb2FkZXIlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlIF9wcmVsb2FkZXJcIj4uLi48L2Rpdj5cbiAgICAgICAgICAgIDwlL3ByZWxvYWRlciU+XG4gICAgICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlIF93aXRoVGF4XCI+XG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhUYXglPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW9sZCBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRoVGF4JT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhUYXglPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utbm93IF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRoVGF4JT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8JS9wcmljZVdpdGhUYXglPlxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfd2l0aG91dFRheFwiPlxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1vbGQgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW5vdyBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JXByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIG9wdGlvblByaWNlUGxhaW5UZW1wbGF0ZSA9IGBcbiAgICAgICAgPCUjcHJpY2VXaXRoVGF4JT5cbiAgICAgICAgICAgICg8JXByaWNlV2l0aFRheCU+KVxuICAgICAgICA8JS9wcmljZVdpdGhUYXglPlxuICAgICAgICA8JV5wcmljZVdpdGhUYXglPlxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cbiAgICAgICAgICAgICAgICAoPCVwcmljZVdpdGhvdXRUYXglPilcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aG91dFRheCU+XG4gICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XG4gICAgYDtcblxuICAgIHN1YnRvdGFsVGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLWdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ncm91cC1sYWJlbFwiPjwldHh0U3VidG90YWwlPjwvZGl2PlxuICAgICAgICAgICAgPCUjcHJlbG9hZGVyJT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbCBfcHJlbG9hZGVyXCI+Li4uPC9kaXY+XG4gICAgICAgICAgICA8JS9wcmVsb2FkZXIlPlxuICAgICAgICAgICAgPCUjcHJpY2VXaXRoVGF4JT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbCBfd2l0aFRheFwiPlxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRoVGF4JT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1vbGQgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aFRheCU+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRoVGF4JT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW5vdyBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aFRheFZhbHVlJT5cIj48JXByaWNlV2l0aFRheCU+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aG91dFRheCU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3dpdGhvdXRUYXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtb2xkIF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ub3cgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aG91dFRheCU+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBzdW1tYXJ5VGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnNcIj5cbiAgICAgICAgICAgIDwlI29wdGlvbnMlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnMtb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi1uYW1lXCI+PCVuYW1lJT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi12YWx1ZVwiPjwldmFsdWUlPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnMtb3B0aW9uLXByaWNlc1wiPjwlJnByaWNlSHRtbCU+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCUvb3B0aW9ucyU+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBzaG93UHJpY2VGcmVlID0gZmFsc2U7XG4gICAgc2hvd1ByaWNlWmVybyA9IGZhbHNlO1xuXG4gICAgYWRkVG9DYXJ0V3JhcHBlclNlbGVjdG9yID0gJy5hZGQtdG8tY2FydC13cmFwcGVyJztcblxuICAgIC8qKlxuICAgICAqIENhY2hlIGZvciBmdW5jdGlvbiBgZmV0Y2hPcHRpb25QcmljZWBcbiAgICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgeyBwcmljZXNXaXRoVGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9LCBwcmljZXNXaXRob3V0VGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9IH0+fVxuICAgICAqL1xuICAgIGZldGNoT3B0aW9uUHJpY2VDYWNoZSA9IHt9O1xuXG4gICAgY29uc29sZSA9IHtcbiAgICAgICAgbG9nOiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgaWYgKERFQlVHX0xPRykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgLi4uYXJncykge1xuICAgICAgICBmaXhGb3JtRWxlbWVudFVuaXF1ZUlkcygkc2NvcGUpO1xuXG4gICAgICAgIHN1cGVyKCRzY29wZSwgLi4uYXJncyk7XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICBjb25zdCAkY2hvb3NlT3B0aW9uc0J0biA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IE51bWJlcigkZm9ybS5maW5kKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nKS52YWwoKSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21GaWVsZHNUZXh0ID0gJGZvcm0uZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1jdXN0b20tZmllbGRzXScpLnRleHQoKTtcbiAgICAgICAgICAgIGlmIChjdXN0b21GaWVsZHNUZXh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoY3VzdG9tRmllbGRzVGV4dCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdJbnZhbGlkIEpTT04gZm9yIGN1c3RvbSBmaWVsZHMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzLmN1c3RvbUZpZWxkczonLCB0aGlzLmN1c3RvbUZpZWxkcyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7XG4gICAgICAgICAqICAgaWQ6IG51bWJlcixcbiAgICAgICAgICogICBkaXNwbGF5X25hbWU6IHN0cmluZyxcbiAgICAgICAgICogICBzdGF0ZTogJ21vZGlmaWVyJyB8ICd2YXJpYW50X29wdGlvbicsXG4gICAgICAgICAqICAgcGFydGlhbDogJ3N3YXRjaCcgfCAnc2V0LXJlY3RhbmdsZScgfCAnc2V0LXNlbGVjdCcgfCAnc2V0LXJhZGlvJ1xuICAgICAgICAgKiAgICAgfCAnaW5wdXQtdGV4dCcgfCAnaW5wdXQtbnVtYmVycycgfCAnaW5wdXQtY2hlY2tib3gnIHwgJ2lucHV0LWZpbGUnXG4gICAgICAgICAqICAgICB8ICdkYXRlJyB8ICd0ZXh0YXJlYScgfCAncHJvZHVjdC1saXN0JyxcbiAgICAgICAgICogICByZXF1aXJlZDogYm9vbGVhbixcbiAgICAgICAgICogICBwcmVmaWxsPzogc3RyaW5nLFxuICAgICAgICAgKiAgIHNlbGVjdGVkX2RhdGU/OiB7XG4gICAgICAgICAqICAgICBkYXk6IHN0cmluZyxcbiAgICAgICAgICogICAgIG1vbnRoOiBzdHJpbmcsXG4gICAgICAgICAqICAgICB5ZWFyOiBzdHJpbmdcbiAgICAgICAgICogICB9LFxuICAgICAgICAgKiAgIGNoZWNrZWQ/OiBib29sZWFuLFxuICAgICAgICAgKiAgIG5vVmFsdWU/OiBudW1iZXIsXG4gICAgICAgICAqICAgdmFsdWU/OiBudW1iZXIsXG4gICAgICAgICAqICAgdmFsdWVzPzogQXJyYXk8e1xuICAgICAgICAgKiAgICAgaWQ6IG51bWJlcixcbiAgICAgICAgICogICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgICAgICAqICAgICBzZWxlY3RlZDogYm9vbGVhbixcbiAgICAgICAgICogICAgIGRhdGE6IHN0cmluZyB8IEFycmF5PHN0cmluZz5cbiAgICAgICAgICogICB9PlxuICAgICAgICAgKiB9Pn1cbiAgICAgICAgICpcbiAgICAgICAgICogLSBpZDogT3B0aW9uIElEXG4gICAgICAgICAqIC0gZGlzcGxheV9uYW1lOiBEaXNwbGF5IG5hbWUgb2YgdGhlIG9wdGlvblxuICAgICAgICAgKiAtIHN0YXRlOiBUeXBlIG9mIG9wdGlvbiBzdGF0ZSwgZWl0aGVyICdtb2RpZmllcicgb3IgJ3ZhcmlhbnRfb3B0aW9uJ1xuICAgICAgICAgKiAtIHJlcXVpcmVkOiBJbmRpY2F0ZXMgaWYgdGhpcyBvcHRpb24gaXMgcmVxdWlyZWRcbiAgICAgICAgICogLSBwcmVmaWxsOiBPcHRpb25hbCBwcmVmaWxsIHZhbHVlLCBhdmFpbGFibGUgZm9yIHRleHQgYmFzZWQgZmllbGRzIG9ubHlcbiAgICAgICAgICogLSBzZWxlY3RlZF9kYXRlOiBPcHRpb25hbCBzZWxlY3RlZCBkYXRlIG9iamVjdCwgYXZhaWxhYmxlIGZvciBkYXRlIGZpZWxkIG9ubHk6XG4gICAgICAgICAqICAgLSBkYXk6IERheSBwYXJ0IG9mIHRoZSBkYXRlXG4gICAgICAgICAqICAgLSBtb250aDogTW9udGggcGFydCBvZiB0aGUgZGF0ZVxuICAgICAgICAgKiAgIC0geWVhcjogWWVhciBwYXJ0IG9mIHRoZSBkYXRlXG4gICAgICAgICAqIC0gY2hlY2tlZDogT3B0aW9uYWwgY2hlY2tlZCBzdGF0dXMgZm9yIHRoZSBvcHRpb24sIGF2YWlsYWJsZSBmb3IgY2hlY2tib3ggZmllbGQgb25seVxuICAgICAgICAgKiAtIG5vVmFsdWU6IE9wdGlvbmFsIHZhbHVlIGZvciBcIm5vIHNlbGVjdGlvblwiIChpZiBhcHBsaWNhYmxlKSwgYXZhaWxhYmxlIGZvciBjaGVja2JveCBmaWVsZCBvbmx5XG4gICAgICAgICAqIC0gdmFsdWU6IE9wdGlvbmFsIG51bWVyaWMgdmFsdWUgYXNzaWduZWQgdG8gdGhlIG9wdGlvbiwgYXZhaWxhYmxlIGZvciBjaGVja2JveCBmaWVsZCBvbmx5XG4gICAgICAgICAqIC0gdmFsdWVzOiBPcHRpb25hbCBhcnJheSBvZiBwb3NzaWJsZSB2YWx1ZXMsIGF2YWlsYWJsZSBmb3IgcmFkaW8sIHNlbGVjdCwgc3dhdGNoLCBwcm9kdWN0IHBpY2stbGlzdCBmaWVsZHMgb25seTpcbiAgICAgICAgICogICAtIGlkOiBVbmlxdWUgaWRlbnRpZmllciBmb3IgZWFjaCB2YWx1ZVxuICAgICAgICAgKiAgIC0gbGFiZWw6IERpc3BsYXkgbGFiZWwgZm9yIHRoZSB2YWx1ZVxuICAgICAgICAgKiAgIC0gc2VsZWN0ZWQ6IEluZGljYXRlcyBpZiB0aGlzIHZhbHVlIGlzIHNlbGVjdGVkXG4gICAgICAgICAqICAgLSBkYXRhOiBBZGRpdGlvbmFsIGRhdGEgZm9yIHRoZSB2YWx1ZSwgY2FuIGJlIGEgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3NcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnMgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdE9wdGlvbnNUZXh0ID0gJGZvcm0uZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb25zXScpLnRleHQoKTtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0T3B0aW9uc1RleHQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShwcm9kdWN0T3B0aW9uc1RleHQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcignSW52YWxpZCBKU09OIGZvciBwcm9kdWN0IG9wdGlvbnMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzLnByb2R1Y3RPcHRpb25zOicsIHRoaXMucHJvZHVjdE9wdGlvbnMpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSBtb2RpZmllcnMgbW9kYWwgZmVhdHVyZVxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIC8vIGVuYWJsZSBtb2RpZmllcnMgbW9kYWwgaWYgb3VyIGNob29zZSBvcHRpb25zIGJ1dHRvbiBhcHBlYXJzIGluIHRoZSBwcm9kdWN0IGRldGFpbHNcbiAgICAgICAgdGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCA9ICRjaG9vc2VPcHRpb25zQnRuLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9kaWZpZXJzTW9kYWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZFByb2R1Y3RFZGl0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZE1vZGFsRGVzdHJveSgpO1xuICAgICAgICB0aGlzLmluaXRPcHRpb25TdGVwcGVyKCk7XG4gICAgICAgIHRoaXMuc3luY1Byb2R1Y3RDYXJkUXR5KCk7XG4gICAgICAgIHRoaXMuaW5pdFNhbGVDb3VudGRvd24oKTtcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3VwZGF0ZS13aXNobGlzdC1idXR0b25zJywgW3RoaXMuJHNjb3BlXSk7XG4gICAgfVxuXG4gICAgZ2V0ICR1cGRhdGVQcm9kdWN0V3JhcHBlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJyk7XG4gICAgfVxuXG4gICAgZ2V0Vmlld01vZGVsKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBzdXBlci5nZXRWaWV3TW9kZWwoLi4uYXJncyk7XG4gICAgICAgIG1vZGVsLiR1cGRhdGVQcm9kdWN0V3JhcHBlciA9IHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyO1xuICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgfVxuXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xuICAgICAgICBzdXBlci51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKTtcbiAgICAgICAgY29uc3QgJGJ0biA9IHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyLmZpbmQoJ2lucHV0LCBidXR0b24nKTtcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgICRidG4ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRidG4ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGUgbWV0aG9kIHRvIHN1cHBvcnQgZWRpdCBwcm9kdWN0IGluIGNhcnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG4gICAgICovXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xuICAgICAgICBpZiAoZXZlbnQuZWRpdFByb2R1Y3RJbkNhcnQpIHtcbiAgICAgICAgICAgICQoZm9ybSkuZmluZCgnaW5wdXRbbmFtZT1cImFjdGlvblwiXScpLnZhbCgnRWRpdFByb2R1Y3RGaWVsZHNJbkNhcnQnKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChmb3JtKS5maW5kKCdpbnB1dFtuYW1lPVwiYWN0aW9uXCJdJykudmFsKCdhZGQnKTtcbiAgICAgICAgICAgIHN1cGVyLmFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRWRpdCBwcm9kdWN0IGluIGNhcnQuXG4gICAgICogQWxtb3N0IGNsb25lIGZyb20gYWRkUHJvZHVjdFRvQ2FydCBtZXRob2QgZnJvbSB0aGUgcGFyZW50IGNsYXNzLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBhc3luYyBlZGl0UHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xuICAgICAgICBjb25zdCAkc2F2ZUJ0biA9ICQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJywgJChldmVudC50YXJnZXQpKS5maW5kKCdpbnB1dCwgYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQnRuVmFsID0gJHNhdmVCdG4udmFsKCk7XG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJHNhdmVCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcblxuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRzYXZlQnRuXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkc2F2ZUJ0bi5uZXh0KCksICdzdGF0dXMnLCAncG9saXRlJyk7XG5cbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJHNhdmVCdG5cbiAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RDYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZmFpbHVyZSA9IChlcnJvclRleHQpID0+IHtcbiAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yVGV4dDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkc2F2ZUJ0bikpIHtcbiAgICAgICAgICAgICAgICBhbGVydE1vZGFsKCkuJHByZU1vZGFsRm9jdXNlZEVsID0gJHNhdmVCdG47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdFF1YW50aXR5KSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBmb3JtRGF0YS5nZXQoJ2l0ZW1faWQnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1F0eSA9IGZvcm1EYXRhLmdldCgncXR5W10nKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbHVyZShlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgfSkuZG9uZSgocmVzcG9uc2UpID0+IHN1Y2Nlc3MocmVzcG9uc2UpKS5mYWlsKChfeGhyLCBfc3RhdHVzLCBlcnJvcikgPT4gZmFpbHVyZShlcnJvcikpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZT8uZGF0YT8uc3RhdHVzICE9PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiBjbGljayBvbiB0aGUgQWRkIE5ldyB0byBDYXJ0IGJ1dHRvbiwgdHJpZ2dlciB0aGUgZm9ybSBzdWJtaXQgZXZlbnQgd2l0aCBgYWRkTmV3VG9DYXJ0YCBmbGFnXG4gICAgICogc28gdGhhdCBuZXcgcHJvZHVjdCBpcyBhbHdheXMgYWRkZWQgdG8gY2FydCByZWdhcmRsZXNzIG9mIGVkaXQgcHJvZHVjdCBpbiBjYXJ0IG9yIG5vdFxuICAgICAqL1xuICAgIGJpbmRQcm9kdWN0RWRpdEV2ZW50cygpIHtcbiAgICAgICAgY29uc3Qgc3VibWl0RXZlbnQgPSAkLkV2ZW50KCdzdWJtaXQnLCB7IGVkaXRQcm9kdWN0SW5DYXJ0OiB0cnVlIH0pO1xuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG5cbiAgICAgICAgdGhpcy4kdXBkYXRlUHJvZHVjdFdyYXBwZXIuZmluZCgnaW5wdXQsIGJ1dHRvbicpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkZm9ybS50cmlnZ2VyKHN1Ym1pdEV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZE1vZGFsRGVzdHJveSgpIHtcbiAgICAgICAgLy8gZGVzdHJveSB0aGUgaW1hZ2UgZ2FsbGVyeSBtb2RhbCB3aGVuIHF1aWNrLXZpZXcgbW9kYWwgaXMgY2xvc2VkXG4gICAgICAgIC8vIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAgICAgdGhpcy4kc2NvcGUuY2xvc2VzdCgnLm1vZGFsJykub25lKE1vZGFsRXZlbnRzLmNsb3NlZCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuaW1hZ2VHYWxsZXJ5TW9kYWwuZGVzdHJveU1vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRPcHRpb25TdGVwcGVyKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1zdGVwcGVyXScpLmVhY2goKF9pLCBmb3JtRmllbGRFbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGZvcm1GaWVsZCA9ICQoZm9ybUZpZWxkRWwpO1xuICAgICAgICAgICAgY29uc3QgJGRlYyA9ICRmb3JtRmllbGQuZmluZCgnW2RhdGEtYWN0aW9uPVwiZGVjXCJdJyk7XG4gICAgICAgICAgICBjb25zdCAkaW5jID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJpbmNcIl0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRjaGVjayA9ICRmb3JtRmllbGQuZmluZCgnW2RhdGEtYWN0aW9uPVwiY2hlY2tcIl0nKTtcblxuICAgICAgICAgICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykuYWRkQ2xhc3MoJ19jaGVja2luZycpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86dmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRjaGVja2VkID0gJHJhZGlvcy5maWx0ZXIoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGZpcnN0ID0gJHJhZGlvcy5maXJzdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVja2VkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRyYWRpb3MuaW5kZXgoJGNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgaSA9PT0gMCk7XG4gICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCBpID09PSAkcmFkaW9zLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAkY2hlY2suYWRkQ2xhc3MoJ19jaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLnJlbW92ZUNsYXNzKCdfY2hlY2tpbmcnKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGluaXQoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gKGluYykgPT4ge1xuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5hZGRDbGFzcygnX2NoZWNraW5nJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkcmFkaW9zID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbzp2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkZmlyc3QgPSAkcmFkaW9zLmZpcnN0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3VuZCBjaGVja2VkIHJhZGlvXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSAkcmFkaW9zLmluZGV4KCRjaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0IHRoZSBuZXh0IHJhZGlvXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8ICRyYWRpb3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZXEoaSArIDEpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCBpICsgMSA9PT0gJHJhZGlvcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0IHRoZSBwcmV2aW91cyByYWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5lcShpIC0gMSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBpIC0gMSA9PT0gMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJGZpcnN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gY2hlY2tlZCByYWRpbywgYW5kIGZvdW5kIHRoZSBmaXJzdCByYWRpb1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jICYmICRmaXJzdC5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICsgYW5kIGZpcnN0IG9wdGlvbiBpcyAnbm9uZScsIGlnbm9yZSB0aGUgbm9uZSBvcHRpb24sIHNlbGVjdCB0aGUgZmlyc3QgdmFsdWVkIG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5ub3QoJGZpcnN0KS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgJHJhZGlvcy5sZW5ndGggPT09IDIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSwgc2VsZWN0IHRoZSBmaXJzdCByYWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgJGZpcnN0LnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjaGVja2VkIHJhZGlvIGlzICdub25lJyB0aGVuIHVuY2hlY2sgdGhlIGNoZWNrIGJ1dHRvblxuICAgICAgICAgICAgICAgIGlmICgkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLnJlbW92ZUNsYXNzKCdfY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5yZW1vdmVDbGFzcygnX2NoZWNraW5nJyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkZGVjLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdChmYWxzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJGluYy5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZWxlY3QodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJGNoZWNrLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmICgkY2hlY2suaGFzQ2xhc3MoJ19jaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5jaGVjayB0aGUgY2hlY2tlZCByYWRpbyBhbmQgc2VsZWN0IHRoZSAnbm9uZScgcmFkaW9cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHVuY2hlY2sgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbm9uZSA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRub25lLmxlbmd0aCA+IDApICRub25lLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgkdW5jaGVjay5sZW5ndGgpICR1bmNoZWNrLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICAkY2hlY2sucmVtb3ZlQ2xhc3MoJ19jaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTeW5jIHByb2R1Y3QgcXVhbnRpdHkgd2l0aCBxdHkgb2YgdGhlIGNvcnJlc3BvbmRpbmcgcHJvZHVjdCBjYXJkXG4gICAgICovXG4gICAgc3luY1Byb2R1Y3RDYXJkUXR5KCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0UXVhbnRpdHkpIHJldHVybjsgLy8gc3RvcCBpZiBlZGl0IHByb2R1Y3QgaW4gY2FydFxuXG4gICAgICAgIGNvbnN0IGNhcmRRdHkgPSAkKGBbZGF0YS1jYXJkLXF1YW50aXR5LWNoYW5nZV0gaW5wdXRbbmFtZT1cInF0eV8ke3RoaXMucHJvZHVjdElkfVwiXWApLnZhbCgpO1xuICAgICAgICBpZiAoIWNhcmRRdHkpIHJldHVybjtcblxuICAgICAgICBjb25zdCAkcXR5ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBpbnB1dFtuYW1lPVwicXR5W11cIl0nKTtcbiAgICAgICAgY29uc3QgcXR5ID0gJHF0eS52YWwoKTtcbiAgICAgICAgaWYgKCRxdHkubGVuZ3RoID4gMCAmJiBxdHkgIT09IGNhcmRRdHkpIHtcbiAgICAgICAgICAgICRxdHkudmFsKGNhcmRRdHkpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdFNhbGVDb3VudGRvd24oKSB7XG4gICAgICAgIGNvbnN0IHsgdHh0U2FsZUNvdW50ZG93bkpTT04gfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF0ZV0nKTtcbiAgICAgICAgJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25UcmFuc2xhdGlvbnMnLCB7IGVuZF9pbjogJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25MYWJlbCcpIH0pO1xuXG4gICAgICAgIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHsgdHh0U2FsZUNvdW50ZG93bkpTT04gfSk7XG4gICAgICAgIFNhbGVDb3VudGRvd24uYWRkKCRlbCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldyhkYXRhLCAuLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVZpZXcoZGF0YSwgLi4uYXJncyk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTYWxlUGVyY2VudChkYXRhKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaGlwcGluZ0NvdW50ZG93bihkYXRhKTtcblxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsICFkYXRhPy5wdXJjaGFzYWJsZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VidG90YWwgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsXScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9uZVNhbGVzID0gdGhpcy5jdXN0b21GaWVsZE5vbmVTYWxlcztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1N1YnRvdGFsKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVNhbGVQZXJjZW50KGRhdGEpIHtcbiAgICAgICAgY29uc3QgJGRpdiA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcmljZS1zZWN0aW9uLS1zYWxlUGVyY2VudCcpO1xuICAgICAgICBjb25zdCAkc3BhbiA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2FsZS1wZXJjZW50XScpO1xuICAgICAgICBsZXQgc2FsZVBlcmNlbnQgPSAwO1xuXG4gICAgICAgIGlmIChkYXRhPy5wcmljZT8ud2l0aG91dF90YXg/LnZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZGF0YT8ucHJpY2U/LnJycF93aXRob3V0X3RheD8udmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSAvIGRhdGEucHJpY2UucnJwX3dpdGhvdXRfdGF4LnZhbHVlKSAqIDEwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheD8udmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSAvIGRhdGEucHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgudmFsdWUpICogMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhPy5wcmljZT8ud2l0aF90YXg/LnZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZGF0YT8ucHJpY2U/LnJycF93aXRoX3RheD8udmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZSAvIGRhdGEucHJpY2UucnJwX3dpdGhfdGF4LnZhbHVlKSAqIDEwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy5ub25fc2FsZV9wcmljZV93aXRoX3RheD8udmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZSAvIGRhdGEucHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgudmFsdWUpICogMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYWxlUGVyY2VudCA+IDApIHtcbiAgICAgICAgICAgICRzcGFuLnRleHQoYC0ke3NhbGVQZXJjZW50fSVgKTtcbiAgICAgICAgICAgICRkaXYuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHNwYW4udGV4dCgnJyk7XG4gICAgICAgICAgICAkZGl2LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVNoaXBwaW5nQ291bnRkb3duKGRhdGEpIHtcbiAgICAgICAgY29uc3QgJHNoaXBwaW5nQ291bnRkb3duID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcGFwYXRoZW1lcy1zaGlwcGluZy1jb3VudGRvd25dJyk7XG5cbiAgICAgICAgaWYgKCRzaGlwcGluZ0NvdW50ZG93bi5pcygnOmhpZGRlbicpICYmIGRhdGE/LnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICAkc2hpcHBpbmdDb3VudGRvd24uY3NzKCdzdHlsZScsICdmbGV4Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoJHNoaXBwaW5nQ291bnRkb3duLmlzKCc6dmlzaWJsZScpICYmICFkYXRhPy5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgICAgJHNoaXBwaW5nQ291bnRkb3duLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUNhcnRDb250ZW50KC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gY2xvc2UgbW9kaWZpZXJzIG1vZGFsIGFmdGVyIGFkZGVkIHByb2R1Y3QgdG8gY2FydFxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGlmaWVyc01vZGFsKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aWV3TW9kYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudXBkYXRlQ2FydENvbnRlbnQoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSwgLi4uYXJncykge1xuICAgICAgICBzdXBlci5zaG93UHJvZHVjdEltYWdlKGltYWdlLCAuLi5hcmdzKTtcblxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxJbWcgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtaW1nXScpO1xuICAgICAgICBjb25zdCB7IG1haW5JbWFnZVVybCwgem9vbUltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQgfSA9IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZTtcblxuICAgICAgICBpZiAobWFpbkltYWdlVXJsICYmIG1haW5JbWFnZVVybCAhPT0gJG1vZGlmaWVyc01vZGFsSW1nLmF0dHIoJ3NyYycpKSB7XG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxJbWdcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgbWFpbiBpbWFnZSBpbiBxdWljay12aWV3IG9uIG1vYmlsZVxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBlbCkgPT4gJChlbCkuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeV0nKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybClcbiAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIG1haW5JbWFnZVNyY3NldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgcHJpY2Ugd2l0aCBjdXJyZW5jeSBzeW1ib2wgYW5kIGRlY2ltYWwgcGxhY2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsdXNTeW1ib2wgd2hldGhlciB0byBzaG93IHBsdXMgc3ltYm9sIGZvciBwb3NpdGl2ZSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZm9ybWF0UHJpY2UodmFsdWUsIHBsdXNTeW1ib2wgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gY2FjaGVkU2V0dGluZ3MgPyB7XG4gICAgICAgICAgICBjdXJyZW5jeV90b2tlbjogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5zeW1ib2wsXG4gICAgICAgICAgICBjdXJyZW5jeV9sb2NhdGlvbjogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5zeW1ib2xQbGFjZW1lbnQsXG4gICAgICAgICAgICBkZWNpbWFsX3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LmRlY2ltYWxUb2tlbixcbiAgICAgICAgICAgIGRlY2ltYWxfcGxhY2VzOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LmRlY2ltYWxQbGFjZXMsXG4gICAgICAgICAgICB0aG91c2FuZHNfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkudGhvdXNhbmRzVG9rZW4sXG4gICAgICAgIH0gOiB7fTtcblxuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBjdXJyZW5jeUZvcm1hdCgtdmFsdWUsIGRpc3BsYXkpO1xuICAgICAgICAgICAgcmV0dXJuIHBsdXNTeW1ib2wgPyBgLSR7Zm9ybWF0dGVkfWAgOiBmb3JtYXR0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBjdXJyZW5jeUZvcm1hdCh2YWx1ZSwgZGlzcGxheSk7XG4gICAgICAgIHJldHVybiBwbHVzU3ltYm9sID8gYCske2Zvcm1hdHRlZH1gIDogZm9ybWF0dGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgb3B0aW9uIHZhbHVlIGJ5IG9wdGlvbiBuYW1lIGFuZCB2YWx1ZSBuYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSBvcHRpb24gZGlzcGxheSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlTmFtZSB2YWx1ZSBsYWJlbFxuICAgICAqIEByZXR1cm5zIHtbbnVtYmVyLCBudW1iZXJdfSBvcHRpb25JZCwgdmFsdWVJZFxuICAgICAqL1xuICAgIGZpbmRPcHRpb25WYWx1ZShvcHRpb25OYW1lLCB2YWx1ZU5hbWUpIHtcbiAgICAgICAgY29uc3QgaGlkZUlmT3B0aW9uID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGRpc3BsYXlfbmFtZSB9KSA9PiBkaXNwbGF5X25hbWUucmVwbGFjZSgnLzo7L2cnLCAnJykucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnRvTG93ZXJDYXNlKCkgPT09IG9wdGlvbk5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaGlkZUlmT3B0aW9uPy52YWx1ZXM/LmZpbmQoKHsgbGFiZWwgfSkgPT4gbGFiZWwucmVwbGFjZSgnLzo7L2cnLCAnJykucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uSWQgPSBoaWRlSWZPcHRpb24/LmlkO1xuICAgICAgICBjb25zdCB2YWx1ZUlkID0gdmFsdWU/LmlkO1xuICAgICAgICByZXR1cm4gW29wdGlvbklkLCB2YWx1ZUlkXTtcbiAgICB9XG5cbiAgICBjcmVhdGVNb2RpZmllcnNNb2RhbCgpIHtcbiAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1tYWluXScpLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpO1xuICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpLmF0dHIoJ3NyYycpO1xuICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcbiAgICAgICAgY29uc3QgJGF0dHJpYnV0ZU1lc3NhZ2VXcmFwcGVyID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1hdHRyaWJ1dGVzLW1lc3NhZ2VdJyk7XG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRXcmFwcGVyID0gJGZvcm0uZmluZCgnW2RhdGEtZXlldmEtYWRkLXRvLWNhcnQtd3JhcHBlcl0nKTtcbiAgICAgICAgY29uc3QgJGNob29zZU9wdGlvbnNCdG4gPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RpZmllcnNNb2RhbFRlbXBsYXRlLCB7XG4gICAgICAgICAgICB0eHRDb250aW51ZTogdGhpcy5jb250ZXh0LnR4dENvbnRpbnVlLFxuICAgICAgICAgICAgcHJvZHVjdFRpdGxlOiB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LXRpdGxlXScpLmh0bWwoKSxcbiAgICAgICAgICAgIG1haW5JbWFnZVVybDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLm1haW5JbWFnZVVybCB8fCBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwgfHwgem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiB0aGlzLmltYWdlR2FsbGVyeS5jdXJyZW50SW1hZ2UubWFpbkltYWdlU3Jjc2V0IHx8IG1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgfSwgbnVsbCwgWyc8JScsICclPiddKSkuYXBwZW5kVG8oJHByb2R1Y3RPcHRpb25zRWwpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb21wbGV0ZSA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29tcGxldGVdJyk7XG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENsb3NlID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jbG9zZV0nKTtcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ29udGludWUgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlXScpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxCYWNrID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1iYWNrXScpO1xuXG4gICAgICAgIC8vIG1vdmUgbW9kaWZpZXIgb3B0aW9ucyB0byB0aGUgbW9kYWxcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtc3RhdGU9XCJtb2RpZmllclwiXScpLmFwcGVuZFRvKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMpO1xuXG4gICAgICAgIC8vIG1vdmUgYWRkIHRvIGNhcnQgJiBxdHkgYm94IHRvIHRoZSBtb2RhbFxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxDb21wbGV0ZS5hcHBlbmQoJGFkZFRvQ2FydFdyYXBwZXIpO1xuXG4gICAgICAgIC8vIGNsb25lIHB1cmNoYXNhYmxlIG1lc3NhZ2VcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuZmluZCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnKS5jbG9uZSgpXG4gICAgICAgICAgICAuYXBwZW5kVG8oJGF0dHJpYnV0ZU1lc3NhZ2VXcmFwcGVyKTtcblxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxDbG9zZS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGlmaWVyc01vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2sub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrU3RlcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxDb250aW51ZS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBzdG9wIGFuZCByZXBvcnQgaW52YWxpZCBpbnB1dHMgaWYgYW55XG4gICAgICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5zbGljZSgtMSlbMF0gfHwgW107XG4gICAgICAgICAgICBjb25zdCBpbnZhbGlkSW5wdXRzID0gc2hvd09wdGlvbklkcy5yZWR1Y2UoKF9pbnZhbGlkSW5wdXRzLCBvcHRpb25JZCkgPT4gKFtcbiAgICAgICAgICAgICAgICAuLi5faW52YWxpZElucHV0cyxcbiAgICAgICAgICAgICAgICAuLi4kbW9kaWZpZXJzTW9kYWxPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKGBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbklkfV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVtkYXldXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbklkfV1bbW9udGhdXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbklkfV1beWVhcl1cIl1gKVxuICAgICAgICAgICAgICAgICAgICAuZ2V0KClcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihlbCA9PiAhZWwuY2hlY2tWYWxpZGl0eSgpKSxcbiAgICAgICAgICAgIF0pLCBbXSk7XG5cbiAgICAgICAgICAgIGlmIChpbnZhbGlkSW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW52YWxpZElucHV0c1swXS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhdXRvIHNlbGVjdCB0aGUgJ25vbmUnIG9wdGlvbiBpZiBubyByYWRpbyBvcHRpb24gb3Igbm8gcHJvZHVjdCBwaWNrIGxpc3Qgb3B0aW9uIGlzIHNlbGVjdGVkXG4gICAgICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVwiXWApO1xuICAgICAgICAgICAgICAgIGlmICgkcmFkaW9zLmxlbmd0aCA+IDAgJiYgJHJhZGlvcy5maWx0ZXIoJzpjaGVja2VkJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZmlsdGVyKCdbdmFsdWU9XCJcIl0sIFt2YWx1ZT1cIjBcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGFmdGVyIGNsaWNraW5nIGNvbnRpbnVlIGJ1dHRvbiwgdXBkYXRlIHRoZSBtb2RpZmllcnMgdmlldyBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgICB0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkY2hvb3NlT3B0aW9uc0J0bi5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyByZXF1aXJlIHNlbGVjdGluZyB2YXJpYW50IG9wdGlvbnMgYmVmb3JlIG9wZW5pbmcgdGhlIG1vZGFsXG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVZhcmlhbnRPcHRpb25zKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRNb2RpZmllcnNWaWV3KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kaWZpZXJzTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3Blbk1vZGlmaWVyc01vZGFsKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgLmJlZm9yZSh0aGlzLm1vZGlmaWVyc01vZGFsT3ZlcmxheVRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGlmaWVyc01vZGFsKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW92ZXJsYXldJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaW5pdE1vZGlmaWVyc1ZpZXcoKSB7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcblxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcbiAgICAgICAgICAgIC5ub3QoJ1t0eXBlPVwiY2hlY2tib3hcIl0sIFt0eXBlPVwicmFkaW9cIl0sIFt0eXBlPVwiZmlsZVwiXScpXG4gICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS52YWwoJycpO1xuXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxuICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAvLyBmbGFnIGFueSBpbnB1dC9zZWxlY3QgaXMgbm90IHNob3duIHlldCBzbyB0aGF0IHRoZSBjb250aW51ZSBidXR0b24gaXMgc2hvd25cbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5yZW1vdmVBdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XG5cbiAgICAgICAgLy8gcmVzZXQgbW9kYWwgdG8gdXBkYXRlIHRoaXMgdmlldyBhdXRvbWF0aWNhbGx5IHdoZW4gb3B0aW9uIGlzIHNlbGVjdGVkXG4gICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb250YWlucyBhbGwgb3B0aW9uIGlkcyB0aGF0IGFyZSBzaG93biBpbiBlYWNoIHN0ZXBcbiAgICAgICAgICogQHR5cGUge251bWJlcltdW119XG4gICAgICAgICAqL1xuICAgICAgICAvLyByZXNldCB0aGUgc2hvd24gb3B0aW9uIGlkcyBpbiBhbGwgc3RlcHNcbiAgICAgICAgdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOb24tc2FsZSBwcmljZXMgZm9yIG9wdGlvbiB2YWx1ZXMuXG4gICAgICAgICAqIFB1bGxpbmcgZnJvbSBjdXN0b20gZmllbGRzIGBfX0Bub25zYWxlIHByaWNlID0gb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZVs7IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWU7IC4uLl1gLlxuICAgICAgICAgKiBQb3B1bGF0ZWQgaW4gYHVwZGF0ZU1vZGlmaWVyc1ZpZXcoKWAuXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH0gfX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXMgPSB7fTtcblxuICAgICAgICAvLyB1cGRhdGUgbW9kaWZpZXJzIG1vZGFsIGFzYXAgc28gdGhhdCBub3QgYWxsIG9wdGlvbnMgYXJlIGRpc3BsYXllZFxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsOiB0cnVlIH0pO1xuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEJhY2sgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFja10nKTtcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5ID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXN1bW1hcnldJykuZW1wdHkoKTtcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsVGl0bGUgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtdGl0bGVdJykuZW1wdHkoKTtcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsRm9vdGVyID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlcl0nKTtcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ29udGludWUgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGludWVdJykuaGlkZSgpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRXcmFwcGVyID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtYWRkLXRvLWNhcnQtd3JhcHBlcl0nKS5oaWRlKCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtWzBdKTtcblxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZvcm1EYXRhOiAnLCBBcnJheS5mcm9tKGZvcm1EYXRhLmVudHJpZXMoKSkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50IG9wdGlvbiBpZCB0aGF0IGFwcGVhcnMgYWxvbmUgd2l0aG91dCBhbnkgZ3JvdXAuXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGN1cnJlbnRPcHRpb25JZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudCBncm91cCBuYW1lIHRoYXQgdGhlIG9wdGlvbiBiZWxvbmdzIHRvLlxuICAgICAgICAgKiBHcm91cCBuYW1lIHRoYXQgYXBwZWFycyBjdXN0b20gZmllbGQgYF9fQGdyb3VwIChncm91cCBuYW1lKWBcbiAgICAgICAgICogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgY3VycmVudEdyb3VwTmFtZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT3B0aW9uIGlkcyBvZiBvcHRpb24gbmFtZXMgYXBwZWFyIGluIHRoZSB2YWx1ZSBvZiBjdXN0b20gZmllbGQgYF9fQGdyb3VwYC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICBDdXN0b20gZmllbGQ6IGBfX0Bncm91cCBTZWxlY3QgYSBwcmVzY3JpcHRpb24gdHlwZWAgPSBgcHJlc2NyaXB0aW9uIHR5cGVgXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGN1cnJlbnRHcm91cE9wdGlvbklkcyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBvcHRpb24gaWRzIHNob3VsZCBiZSBoaWRkZW5cbiAgICAgICAgICogQHR5cGUge251bWJlcltdfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaGlkZU9wdGlvbklkcyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e29wdGlvbklkOiBudW1iZXIsIHZhbHVlSWQ6IG51bWJlcn0+fVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaGlkZU9wdGlvblZhbHVlcyA9IFtdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb29sdGlwcyBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlcyBleHRyYWN0ZWQgZnJvbSBjdXN0b20gZmllbGRzIGBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBgXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3Q8bnVtYmVyLCB7IHRvb2x0aXA6IHN0cmluZywgdmFsdWVUb29sdGlwczogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfT5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHRvb2x0aXBzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvb2x0aXAgaGVhZGluZ3MgZm9yIG9wdGlvbiB2YWx1ZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AdG9vbHRpcF9oZWFkaW5nIG5hbWU6dmFsdWUgPSB0b29sdGlwIGhlYWRpbmdgXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfX1cbiAgICAgICAgICogQGV4YW1wbGUgeyAyOiB7IDEyMzogJ1Rvb2x0aXAgSGVhZGluZycgfSB9XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB0b29sdGlwSGVhZGluZ3MgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTm9uLXNhbGUgcHJpY2VzIGZvciBvcHRpb24gdmFsdWVzLlxuICAgICAgICAgKiBDYW4gYmUgb3ZlcnJpZGRlbiBieSBjdXN0b20gZmllbGRzIGBfX0Bub25zYWxlIHByaWNlID0gb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZVs7IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWU7IC4uLl1gXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH0gfX1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IG5vbmVTYWxlcyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPcHRpb24gcmVuYW1lcyBleHRyYWN0ZWQgZnJvbSBjdXN0b20gZmllbGRzIGBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZWBcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiBzdHJpbmcgfX1cbiAgICAgICAgICogQGV4YW1wbGUgeyAxMjM6ICdOZXcgTmFtZScsIDQ1NjogJ0Fub3RoZXIgTmFtZScgfVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgb3B0aW9uUmVuYW1lcyA9IHt9O1xuXG4gICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnMuZmlsdGVyKCh7IHN0YXRlIH0pID0+IHN0YXRlID09PSAnbW9kaWZpZXInKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCclY1Byb2R1Y3REZXRhaWxzIC0gb3B0aW9uOiAnLCAnY29sb3I6IGN5YW4nLCBvcHRpb24uZGlzcGxheV9uYW1lKTtcblxuICAgICAgICAgICAgbGV0IGhpZGVPcHRpb24gPSBmYWxzZTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBGaXJzdCBncm91cCBuYW1lIHRoYXQgdGhlIG9wdGlvbiBiZWxvbmdzIHRvLlxuICAgICAgICAgICAgICogR3JvdXAgbmFtZSB0aGF0IGFwcGVhcnMgY3VzdG9tIGZpZWxkIGBfX0Bncm91cCAoZ3JvdXAgbmFtZSlgXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGV0IGdyb3VwTmFtZTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPcHRpb24gaWRzIG9mIG9wdGlvbiBuYW1lcyBhcHBlYXIgaW4gdGhlIHZhbHVlIG9mIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgLlxuICAgICAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICAgICAqICAgQ3VzdG9tIGZpZWxkOiBgX19AZ3JvdXAgU2VsZWN0IGEgcHJlc2NyaXB0aW9uIHR5cGVgID0gYHByZXNjcmlwdGlvbiB0eXBlYFxuICAgICAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj58dW5kZWZpbmVkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsZXQgZ3JvdXBPcHRpb25JZHM7XG5cbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIHJhZGlvIHR5cGUgYW5kIGhhcyAnbm9uZScgdmFsdWUgY2hlY2tlZFxuICAgICAgICAgICAgY29uc3QgaXNOb25lUmFkaW9DaGVja2VkID0gJGZvcm0uZmluZChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXVt2YWx1ZT1cIlwiXWApLnByb3AoJ2NoZWNrZWQnKTtcblxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgZmlsZSB0eXBlIGFuZCBhbHJlYWR5IHNob3duIGFmdGVyIG1vZGFsIHNob3duXG4gICAgICAgICAgICBjb25zdCAkZmlsZSA9ICRmb3JtLmZpbmQoYGlucHV0W3R5cGU9XCJmaWxlXCJdW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXWApO1xuICAgICAgICAgICAgY29uc3QgaXNGaWxlU2hvd24gPSAkZmlsZS5sZW5ndGggPiAwICYmICRmaWxlLmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcblxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgb3B0aW9uYWwgZGF0ZSB0eXBlIGFuZCBhbHJlYWR5IHNob3duIGFmdGVyIG1vZGFsIHNob3duXG4gICAgICAgICAgICBjb25zdCAkZGF0ZSA9ICRmb3JtLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XVwiXSwgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1cIl0sIHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1beWVhcl1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IGlzT3B0aW9uYWxEYXRlU2hvd24gPSAkZGF0ZS5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJGRhdGUuYXR0cignZGF0YS1maWVsZC1zaG93bicpO1xuXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCBzZWxlY3QgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRmb3JtLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IGlzT3B0aW9uYWxTZWxlY3RTaG93biA9ICRzZWxlY3QubGVuZ3RoID4gMCAmJiAhb3B0aW9uLnJlcXVpcmVkICYmICRzZWxlY3QuYXR0cignZGF0YS1maWVsZC1zaG93bicpO1xuXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCB0ZXh0IC8gbXVsdGlsaW5lIC8gbnVtYmVyIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cbiAgICAgICAgICAgIGNvbnN0ICR0ZXh0ID0gJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIHRleHRhcmVhJykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdYCk7XG4gICAgICAgICAgICBjb25zdCBpc09wdGlvbmFsVGV4dFNob3duID0gJHRleHQubGVuZ3RoID4gMCAmJiAhb3B0aW9uLnJlcXVpcmVkICYmICR0ZXh0LmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcblxuICAgICAgICAgICAgY29uc3QgZm9ybVZhbHVlID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XWApO1xuXG4gICAgICAgICAgICBpZiAoZm9ybVZhbHVlICYmICEoZm9ybVZhbHVlIGluc3RhbmNlb2YgRmlsZSlcbiAgICAgICAgICAgICAgICB8fCBpc05vbmVSYWRpb0NoZWNrZWQgfHwgaXNGaWxlU2hvd24gfHwgaXNPcHRpb25hbERhdGVTaG93biB8fCBpc09wdGlvbmFsU2VsZWN0U2hvd24gfHwgaXNPcHRpb25hbFRleHRTaG93blxuICAgICAgICAgICAgICAgIHx8IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XWApXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1gKVxuICAgICAgICAgICAgICAgIHx8IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1beWVhcl1gKSkge1xuICAgICAgICAgICAgICAgIC8vIGhpZGUgb3B0aW9uIGlmIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb246ICcsIGhpZGVPcHRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcy5mb3JFYWNoKGN1c3RvbUZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AaGlkZV9pZiAoLiopXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVJZk1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoSGlkZUlmKHsgY3VzdG9tRmllbGQsIGZvcm1EYXRhLCBvcHRpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoaWRlSWZNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvbiA9IGhpZGVJZk1hdGNoLmhpZGVPcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uVmFsdWVzLnB1c2goLi4uaGlkZUlmTWF0Y2guaGlkZU9wdGlvblZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWdyb3VwTmFtZSAmJiAhaGlkZU9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AZ3JvdXAgKC4qKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaEdyb3VwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lID0gZ3JvdXBNYXRjaC5ncm91cE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBPcHRpb25JZHMgPSBncm91cE1hdGNoLmdyb3VwT3B0aW9uSWRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoaWRlT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXBNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHRvb2x0aXBNYXRjaC50b29sdGlwIHx8IHRvb2x0aXBzW29wdGlvbi5pZF0/LnRvb2x0aXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcHM6IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBzW29wdGlvbi5pZF0/LnZhbHVlVG9vbHRpcHMsIHRvb2x0aXBNYXRjaC52YWx1ZVRvb2x0aXBzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AdG9vbHRpcF9oZWFkaW5nIG5hbWU6dmFsdWUgPSB0b29sdGlwIGhlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcEhlYWRpbmdzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcEhlYWRpbmcoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBIZWFkaW5ncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0sIHZhbHVlVG9vbHRpcEhlYWRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFJlbmFtZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblJlbmFtZXNbb3B0aW9uLmlkXSA9IG5ld05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVOb25TYWxlcyA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaE5vblNhbGUoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihub25lU2FsZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uLmlkXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5ub25lU2FsZXNbb3B0aW9uLmlkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVOb25TYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoaWRlT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPT09IDAgJiYgIWN1cnJlbnRPcHRpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBubyB2aXNpYmxlIG9wdGlvbiBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIGdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBOYW1lID0gZ3JvdXBOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gZ3JvdXBPcHRpb25JZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRHcm91cE5hbWU6ICR7Y3VycmVudEdyb3VwTmFtZX0sIGN1cnJlbnRHcm91cE9wdGlvbklkczogJHtjdXJyZW50R3JvdXBPcHRpb25JZHN9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFuZC1hbG9uZSBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcHRpb25JZCA9IG9wdGlvbi5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudE9wdGlvbklkOiAke2N1cnJlbnRPcHRpb25JZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICBoaWRlT3B0aW9uSWRzLnB1c2gob3B0aW9uLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPiAwICYmIGhpZGVPcHRpb25JZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGhpZGRlbiBvcHRpb25zIGZyb20gdGhlIGN1cnJlbnQgZ3JvdXBcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cE9wdGlvbklkcyA9IGN1cnJlbnRHcm91cE9wdGlvbklkcy5maWx0ZXIoaWQgPT4gIWhpZGVPcHRpb25JZHMuaW5jbHVkZXMoaWQpKTtcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwT3B0aW9uSWRzOiAke2N1cnJlbnRHcm91cE9wdGlvbklkc31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudE9wdGlvbklkOiAnLCBjdXJyZW50T3B0aW9uSWQpO1xuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRHcm91cE5hbWU6ICcsIGN1cnJlbnRHcm91cE5hbWUpO1xuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRHcm91cE9wdGlvbklkczogJywgY3VycmVudEdyb3VwT3B0aW9uSWRzKTtcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uVmFsdWVzOiAnLCBoaWRlT3B0aW9uVmFsdWVzKTtcblxuICAgICAgICAvLyBTdG9yZSBub24tc2FsZSBwcmljZXMgb2Ygb3B0aW9uIHZhbHVlc1xuICAgICAgICAvLyB0byB1c2Ugd2hlbiB1cGRhdGluZyBvcHRpb24gcHJpY2VzIG9ubHkgd2l0aG91dCB1cGRhdGUgdGhlIHdob2xlIG1vZGlmaWVycyB2aWV3XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jdXN0b21GaWVsZE5vbmVTYWxlcywgbm9uZVNhbGVzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSURzIG9mIG9wdGlvbnMgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIGF0IHRoZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XG4gICAgICAgICAqL1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPiAwID8gY3VycmVudEdyb3VwT3B0aW9uSWRzXG4gICAgICAgICAgICA6IChjdXJyZW50T3B0aW9uSWQgPyBbY3VycmVudE9wdGlvbklkXSA6IFtdKTtcblxuICAgICAgICAvLyBzdG9yZSB0aGUgc2hvd24gb3B0aW9uIGlkcyBvZiB0aGUgY3VycmVudCBzdGVwIHRvIHRoZSBzdGFja1xuICAgICAgICAvLyBpZiBub3QgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzIHN0ZXAuXG4gICAgICAgIC8vIHRoaXMgaXMgdXNlZCB0byBuYXZpZ2F0ZSBiYWNrIHRvIHRoZSBwcmV2aW91cyBzdGVwLlxuICAgICAgICBpZiAodGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgIHx8ICFhcmVBcnJheXNFcXVhbFVub3JkZXJlZCh0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXSwgc2hvd09wdGlvbklkcykpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMucHVzaChzaG93T3B0aW9uSWRzKTtcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gc3RhY2tlZFNob3dPcHRpb25JZHM6ICcsIHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2hvdyAvIGhpZGUgYmFjayBidXR0b25cbiAgICAgICAgaWYgKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsQmFjay5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxCYWNrLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNob3cgZm9vdGVyLCBhbmQgaGlkZSBpdCBpZiBubyBtb3JlIG9wdGlvbiBzaG93blxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxGb290ZXIuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsRm9vdGVyLmhpZGUoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gVXBkYXRlIG1vZGFsIHRpdGxlIGZyb20gdGhlIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYCBvciBvcHRpb24gZGlzcGxheSBuYW1lXG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBOYW1lKSB7XG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5odG1sKGN1cnJlbnRHcm91cE5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IG9wdGlvblJlbmFtZXNbc2hvd09wdGlvbklkc1swXV0gfHwgdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBzaG93T3B0aW9uSWRzWzBdKT8uZGlzcGxheV9uYW1lO1xuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUudGV4dCh0aXRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoaWRlIHRoZSBvcHRpb24gbmFtZSB3aGVuIGhlcmUgaXMgb25seSAxIG9wdGlvbiBzaG93biBpbiB0aGUgY3VycmVudCBzdGVwXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7c2hvd09wdGlvbklkc1swXX1cIl0gLmZvcm0tbGFiZWxgKS5maXJzdCgpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdIC5mb3JtLWxhYmVsJykuZmlyc3QoKS5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwbGF5IGN1cnJlbnQgcHJvZHVjdCBvcHRpb25zXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnX3Nob3cnKVxuICAgICAgICAgICAgLmZpbHRlcigoXywgZWwpID0+ICFzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcigkKGVsKS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSkpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ19zaG93Jyk7XG5cbiAgICAgICAgLy8gUmVuYW1lIHRoZSBzaG93biBvcHRpb25zIGlmIG5lZWRlZFxuICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IG9wdGlvblJlbmFtZXNbb3B0aW9uSWRdO1xuICAgICAgICAgICAgaWYgKG5ld05hbWUpIHtcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl0gLmZvcm0tbGFiZWxgKS5maXJzdCgpLmh0bWwobmV3TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNob3cgdG9vbHRpcCBmb3IgZ3JvdXBcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE5hbWUpIHtcbiAgICAgICAgICAgIGxldCBncm91cFRvb2x0aXAgPSAnJztcblxuICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFncm91cFRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUb29sdGlwID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcEdyb3VwKHsgY3VzdG9tRmllbGQsIGdyb3VwTmFtZTogY3VycmVudEdyb3VwTmFtZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGdyb3VwVG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIGdyb3VwVG9vbHRpcCkpO1xuICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmFwcGVuZCgkdG9vbHRpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaG93IHRvb2x0aXAgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9uVG9vbHRpcHMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsVGl0bGUsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MsIHNob3dPcHRpb25JZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHNob3duIG9wdGlvbnMgYW5kIGRpc3BsYXkgQ29udGludWUgYnV0dG9uIGlmIG5lZWRlZC5cbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMoc2hvd09wdGlvbklkcywgJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsQ29udGludWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzcGxheSBwcmljZXMgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcbiAgICAgICAgaWYgKCFpZ25vcmVBUElDYWxsKSB7XG4gICAgICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlcigkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHNob3cgc3VtbWFyeSBidXQgcHJlbG9hZGVyIGZvciBwcmljZXNcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zaG93T3B0aW9uUHJpY2VzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzLCBmb3JtRGF0YSwgbm9uZVNhbGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3cgc3VtbWFyeSBjb250ZW50IGlmIG5vIG9wdGlvbiB2aXNpYmxlIG9uIHRoZSBjdXJyZW50IHN0ZXBcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHJlcXVpcmVkIHZhcmlhbnQgb3B0aW9ucyBhbmQgcmVwb3J0IGVycm9yIGZvciB0aGUgZmlyc3QgaW52YWxpZCBvcHRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB2YWxpZGF0ZVZhcmlhbnRPcHRpb25zKCkge1xuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtWzBdKTtcblxuICAgICAgICBjb25zdCBpbnZhbGlkID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgc3RhdGUgfSkgPT4gc3RhdGUgPT09ICd2YXJpYW50X29wdGlvbicpLmZpbmQob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24ucmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gUmVxdWlyZWQgb3B0aW9uIFwiJHtvcHRpb24uZGlzcGxheV9uYW1lfVwiIGlzIG5vdCBzZWxlY3RlZGApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9ICRmb3JtLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7aW52YWxpZC5pZH1dXCJdYClbMF07XG4gICAgICAgICAgICBlbC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ29CYWNrU3RlcCgpIHtcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xuXG4gICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnBvcCgpLCAvLyBjdXJyZW50IHN0ZXAncyBzaG93biBvcHRpb24gaWRzXG4gICAgICAgICAgICAuLi50aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnBvcCgpLCAvLyBwcmV2aW91cyBzdGVwJ3Mgc2hvd24gb3B0aW9uIGlkc1xuICAgICAgICBdO1xuXG4gICAgICAgIC8vIHJlc2V0IHZhbHVlcyBvZiBzaG93biBvcHRpb24gaWRzIGluIGN1cnJlbnQgc3RlcCAmIHByZXZpb3VzIHN0ZXBcbiAgICAgICAgLy8gdG8gZGlzcGxheSBwcmV2aW91cyBzdGVwIGFnYWluLlxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcykge1xuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChfaSwgZWwpID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKCQoZWwpLmF0dHIoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQnKSkpKTtcblxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXG4gICAgICAgICAgICAgICAgLm5vdCgnW3R5cGU9XCJjaGVja2JveFwiXSwgW3R5cGU9XCJyYWRpb1wiXSwgW3R5cGU9XCJmaWxlXCJdJylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS52YWwoJycpO1xuXG4gICAgICAgICAgICAkb3B0aW9uLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAkb3B0aW9uLmZpbmQoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnJlbW92ZUF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcblxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IHVwZGF0ZSBkaXNwbGF5IHByZXZpb3VzIG9wdGlvbnMgb24gbW9kaWZpZXJzIG1vZGFsXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIGNoYW5nZSBldmVudCB0byB1cGRhdGUgcHJpY2VzICYgZGF0YSBiZWxvbmdzIHRvIEJDXG4gICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gc2hvdWxkIGJlIGhpZGRlbiBiYXNlZCBvbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYFxuICAgICAqXG4gICAgICogQHBhcmFtIHt7XG4gICAgICogICBjdXN0b21GaWVsZDoge1xuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICogICAgIHZhbHVlOiBzdHJpbmcsXG4gICAgICogICB9LFxuICAgICAqICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuICAgICAqICAgb3B0aW9uOiB7XG4gICAgICogICAgIGlkOiBOdW1iZXIsXG4gICAgICogICAgIGRpc3BsYXlfbmFtZTogc3RyaW5nLFxuICAgICAqICAgICB2YWx1ZXM6IFt7XG4gICAgICogICAgICAgaWQ6IE51bWJlcixcbiAgICAgKiAgICAgICBsYWJlbDogc3RyaW5nLFxuICAgICAqICAgICB9XVxuICAgICAqICAgfVxuICAgICAqIH19IHBhcmFtMFxuICAgICAqIEByZXR1cm5zIHt7IGhpZGVPcHRpb246IGJvb2xlYW4sIGhpZGVPcHRpb25WYWx1ZXM6IEFycmF5PHtvcHRpb25JZDogbnVtYmVyLCB2YWx1ZUlkOiBudW1iZXJ9PiB9IHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYoeyBjdXN0b21GaWVsZCwgZm9ybURhdGEsIG9wdGlvbiB9KSB7XG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VzdG9tRmllbGRNYXRjaEhpZGVJZjogY2ZfbmFtZSA9ICR7Y3VzdG9tRmllbGQubmFtZX0gOyBvcF9uYW1lID0gJHtvcHRpb24uZGlzcGxheV9uYW1lfWApO1xuICAgICAgICBsZXQgaGlkZU9wdGlvbiA9IGZhbHNlO1xuICAgICAgICBjb25zdCBoaWRlT3B0aW9uVmFsdWVzID0gW107XG5cbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0BoaWRlX2lmXFxzKyguKikkL2kpO1xuICAgICAgICBpZiAoIW0pIHJldHVybjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGhpZGVJZk9wdGlvbnMgPSBtWzFdLnNwbGl0KCc7JykubWFwKGt2ID0+IGt2LnNwbGl0KCc6JywgMikpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgICAgbmFtZToga2V5LnRyaW0oKSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSA/IHZhbHVlLnRyaW0oKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGhpZGVJZk9wdGlvbnM6ICR7aGlkZUlmT3B0aW9ucy5tYXAoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKHZhbHVlID8gYCR7bmFtZX06ICR7dmFsdWV9YCA6IG5hbWUpKS5qb2luKCc7ICcpfWApO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdGhlbk9wdGlvbnMgPSBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLm1hcChrdiA9PiBrdi5zcGxpdCgnOicsIDIpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICAgIG5hbWU6IGtleS50cmltKCksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgPyB2YWx1ZS50cmltKCkgOiB1bmRlZmluZWQsXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0aGVuT3B0aW9uczogJHt0aGVuT3B0aW9ucy5tYXAoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKHZhbHVlID8gYCR7bmFtZX06ICR7dmFsdWV9YCA6IG5hbWUpKS5qb2luKCc7ICcpfWApO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGbGFnIHRvIGNoZWNrIGlmIG9wdGlvbjp2YWx1ZSBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYCBtYXRjaGVzIHdpdGggY3VycmVudCBmb3JtIGRhdGFcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBsZXQgaGlkZUlmTWF0Y2ggPSBmYWxzZTtcblxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG9wdGlvbjp2YWx1ZSBpbiBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgIG1hdGNoZXMgd2l0aCBjdXJyZW50IGZvcm0gZGF0YVxuICAgICAgICBoaWRlSWZPcHRpb25zLmZvckVhY2goKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW29wdGlvbklkLCB2YWx1ZUlkXSA9IHRoaXMuZmluZE9wdGlvblZhbHVlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZSA9IE51bWJlcihmb3JtRGF0YS5nZXRBbGwoYGF0dHJpYnV0ZVske29wdGlvbklkfV1gKS5zbGljZSgtMSlbMF0pO1xuXG4gICAgICAgICAgICBpZiAoZm9ybVZhbHVlID09PSB2YWx1ZUlkKSB7XG4gICAgICAgICAgICAgICAgaGlkZUlmTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlSWZNYXRjaDogJywgaGlkZUlmTWF0Y2gpO1xuXG4gICAgICAgIGlmIChoaWRlSWZNYXRjaCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgb3B0aW9uIHNob3VsZCBiZSBoaWRkZW4gd2hlbiBtYXRjaGluZyB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYFxuICAgICAgICAgICAgdGhlbk9wdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGN1c3RvbSBmaWVsZCB2YWx1ZSBjb250YWluIG9wdGlvbiBuYW1lIHdpdGhvdXQgdmFsdWUsIHRoZW4gaGlkZSB0aGUgd2hvbGUgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvbjogJywgaGlkZU9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCBoaWRlIHRoZSBzcGVjaWZpYyB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCgoeyBsYWJlbCwgaWQgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9oaWRlT3B0aW9uVmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogb3B0aW9uLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVJZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb25WYWx1ZXMucHVzaChfaGlkZU9wdGlvblZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uVmFsdWU6ICcsIF9oaWRlT3B0aW9uVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlkZU9wdGlvbiB8fCBoaWRlT3B0aW9uVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IGhpZGVPcHRpb24sIGhpZGVPcHRpb25WYWx1ZXMgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gYmVsb25ncyB0byB0aGUgZ3JvdXAgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcbiAgICAgKiAgIH0sXG4gICAgICogICBvcHRpb246IHtcbiAgICAgKiAgICAgaWQ6IE51bWJlcixcbiAgICAgKiAgIH0sXG4gICAgICogQHJldHVybnMge3sgZ3JvdXBOYW1lOiBzdHJpbmcsIGdyb3VwT3B0aW9uSWRzOiBBcnJheTxudW1iZXI+IH0gfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgY3VzdG9tRmllbGRNYXRjaEdyb3VwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AZ3JvdXBcXHMrKC4qKSQvaSk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cE5hbWUgPSBtWzFdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwT3B0aW9uSWRzID0gY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5tYXAocyA9PiBzLnRyaW0oKSkgLy8gb3B0aW9uIG5hbWVzXG4gICAgICAgICAgICAgICAgLm1hcChvcHRpb25OYW1lID0+IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBkaXNwbGF5X25hbWUgfSkgPT4gZXF1YWxPcHRpb25TdHJpbmcoZGlzcGxheV9uYW1lLCBvcHRpb25OYW1lKSk/LmlkKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gaWQpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdXBPcHRpb25JZHMuaW5jbHVkZXMob3B0aW9uLmlkKSkge1xuICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBncm91cCBpbiB0aGlzIGN1c3RvbSBmaWVsZFxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gZ3JvdXBOYW1lOiAke2dyb3VwTmFtZX0sIGdyb3VwT3B0aW9uSWRzOiAke2dyb3VwT3B0aW9uSWRzfWApO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGdyb3VwTmFtZSwgZ3JvdXBPcHRpb25JZHMgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgdG9vbHRpcCBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcbiAgICAgKiAgIH1cbiAgICAgKiAgIG9wdGlvbjoge1xuICAgICAqICAgICBkaXNwbGF5X25hbWUsXG4gICAgICogICAgIHZhbHVlczogW3tcbiAgICAgKiAgICAgICBsYWJlbFxuICAgICAqICAgICB9XVxuICAgICAqICAgfVxuICAgICAqIH19IHBhcmFtMFxuICAgICAqIEByZXR1cm5zIHt7IHRvb2x0aXA6IHN0cmluZyB9IHwgeyB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9IHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcFxccysoLiopJC9pKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBtWzFdLnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IGN1c3RvbUZpZWxkLnZhbHVlO1xuXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZVxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gdG9vbHRpcCBmb3Igb3B0aW9uIG5hbWVcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgZm9yIG9wdGlvbiBcIiR7bmFtZX1cIiA9IFwiXCJcIiR7dG9vbHRpcH1cIlwiXCJgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0b29sdGlwIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcHMgPSB7fTtcblxuICAgICAgICAgICAgLy8gdG9vbHRpcCBmb3Igb3B0aW9uIHZhbHVlXG4gICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgaWQsIGxhYmVsIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcobGFiZWwsIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgZm9yIG9wdGlvbiBcIiR7bmFtZX0gOiAke3ZhbHVlfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBzW2lkXSA9IHRvb2x0aXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlVG9vbHRpcHMgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBncm91cCBoYXMgYSB0b29sdGlwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXAgKGdyb3VwIG5hbWUpID0gdG9vbHRpcGBcbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcbiAgICAgKiAgIH0sXG4gICAgICogICBncm91cE5hbWU6IHN0cmluZ1xuICAgICAqIH19IHBhcmFtMFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCh7IGN1c3RvbUZpZWxkLCBncm91cE5hbWUgfSkge1xuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQHRvb2x0aXBcXHMrKC4qKSQvaSk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbVsxXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gY3VzdG9tRmllbGQudmFsdWU7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIGdyb3VwIG5hbWVcbiAgICAgICAgICAgIGlmICghbmFtZSB8fCAhZXF1YWxPcHRpb25TdHJpbmcoZ3JvdXBOYW1lLCBuYW1lKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgZm9yIGdyb3VwIFwiJHtuYW1lfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xuICAgICAgICAgICAgcmV0dXJuIHRvb2x0aXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHZhbHVlIGhhcyBhIHRvb2x0aXAgaGVhZGluZyBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0B0b29sdGlwX2hlYWRpbmcgbmFtZTp2YWx1ZSA9IHRvb2x0aXAgaGVhZGluZ2BcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e1xuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxuICAgICAqICAgfSxcbiAgICAgKiAgIG9wdGlvbjoge1xuICAgICAqICAgICBkaXNwbGF5X25hbWU6IHN0cmluZyxcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xuICAgICAqICAgICAgIGlkOiBudW1iZXIsXG4gICAgICogICAgICAgbGFiZWw6IHN0cmluZyxcbiAgICAgKiAgICAgfV1cbiAgICAgKiAgIH1cbiAgICAgKiB9fSBwYXJhbTBcbiAgICAgKiBAcmV0dXJucyB7eyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcF9oZWFkaW5nXFxzKyguKikkL2kpO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IG1bMV0uc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gY3VzdG9tRmllbGQudmFsdWU7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIG9wdGlvbiBuYW1lIG9yIG5vdCB2YWx1ZVxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICF2YWx1ZSB8fCAhZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwSGVhZGluZ3MgPSB7fTtcblxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlcy5mb3JFYWNoKCh7IGlkLCBsYWJlbCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGhlYWRpbmcgZm9yIG9wdGlvbiBcIiR7bmFtZX0gOiAke3ZhbHVlfVwiID0gXCJcIlwiJHtoZWFkaW5nfVwiXCJcImApO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBIZWFkaW5nc1tpZF0gPSBoZWFkaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb29sdGlwSGVhZGluZ3M7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIG5hbWUgY29udGFpbnMgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AcmVuYW1lIG9wdGlvbiBuYW1lID0gbmV3IG5hbWVgXG4gICAgICogYW5kIHJldHVybiB0aGUgbmV3IG5hbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbTBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wLmN1c3RvbUZpZWxkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5jdXN0b21GaWVsZC5uYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5jdXN0b21GaWVsZC52YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbTAub3B0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5vcHRpb24uZGlzcGxheV9uYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZyB8IHVuZGVmaW5lZH0gbmV3IG9wdGlvbiBuYW1lXG4gICAgICovXG4gICAgY3VzdG9tRmllbGRNYXRjaFJlbmFtZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQHJlbmFtZVxccysoLiopJC9pKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBTdHJpbmcoY3VzdG9tRmllbGQudmFsdWUpLnRyaW0oKTtcblxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggb3B0aW9uIG5hbWVcbiAgICAgICAgICAgIGlmICghbmFtZSB8fCAhZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSByZW5hbWUgb3B0aW9uIFwiJHtuYW1lfVwiIHRvIFwiJHtuZXdOYW1lfVwiYCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3TmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgbm9uLXNhbGUgcHJpY2UgaW4gdGhlIGN1c3RvbSBmaWVsZFxuICAgICAqIGBfX0Bub25zYWxlIHByaWNlID0gb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZVs7IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWU7IC4uLl1gXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3tcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcbiAgICAgKiAgIH0sXG4gICAgICogICBvcHRpb246IHtcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXG4gICAgICogICAgIHZhbHVlczogW3tcbiAgICAgKiAgICAgICBpZDogbnVtYmVyLFxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgICogICAgIH1dXG4gICAgICogICB9LFxuICAgICAqIH19IHBhcmFtMFxuICAgICAqIEByZXR1cm5zIHt7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfX1cbiAgICAgKi9cbiAgICBjdXN0b21GaWVsZE1hdGNoTm9uU2FsZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xuICAgICAgICBjb25zdCB2YWx1ZU5vblNhbGVzID0ge307XG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19Abm9uc2FsZVxccysoLiopJC9pKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gTnVtYmVyKG1bMV0udHJpbSgpKTtcblxuICAgICAgICAgICAgLy8gc3BsaXQgZWFjaCAob3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZSkgcGFpciBzZXBhcmF0ZWQgYnkgXCI7XCJcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkLnZhbHVlLnNwbGl0KCc7JykuZm9yRWFjaChrdiA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc3BsaXQgb3B0aW9uIG5hbWUgOiBvcHRpb24gdmFsdWUgaW4gY3VzdG9tIGZpZWxkIHZhbHVlIHNlcGFyYXRlZCBieSBcIjpcIlxuICAgICAgICAgICAgICAgIGNvbnN0IFtvcHRpb25OYW1lLCB2YWx1ZUxhYmVsXSA9IGt2LnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG9wdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBuYW1lIGluIGN1c3RvbSBmaWVsZCBtYXRjaCB3aXRoIGN1cnJlbnQgb3B0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgb3B0aW9uIHZhbHVlIElEIHRoYXQgbWF0Y2hlcyB3aXRoIHRoZSB2YWx1ZSBsYWJlbCBpbiBjdXN0b20gZmllbGRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IG9wdGlvbi52YWx1ZXMuZmluZCgoeyBsYWJlbCB9KSA9PiBlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWVMYWJlbCkpPy5pZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBub24tc2FsZSBwcmljZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBvcHRpb24gdmFsdWUgSURcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTm9uU2FsZXNbdmFsdWVJZF0gPSBwcmljZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZU5vblNhbGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHN0b3JlIHNldHRpbmdzIGluY2x1ZGluZyB0YXggYW5kIGFjdGl2ZSBjdXJyZW5jeVxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8e1xuICAgICAqICAgdGF4OiB7IHBkcDogbnVtYmVyIH0sXG4gICAgICogICBjdXJyZW5jeToge1xuICAgICAqICAgICBjb2RlOiBzdHJpbmcsXG4gICAgICogICAgIGRpc3BsYXk6IHsgZGVjaW1hbFBsYWNlczogbnVtYmVyLCBkZWNpbWFsVG9rZW46IHN0cmluZywgc3ltYm9sOiBzdHJpbmcsIHN5bWJvbFBsYWNlbWVudDogc3RyaW5nLCB0aG91c2FuZHNUb2tlbjogc3RyaW5nIH0sXG4gICAgICogICAgIGV4Y2hhbmdlUmF0ZTogbnVtYmVyLCBuYW1lOiBzdHJpbmcsXG4gICAgICogICB9LFxuICAgICAqICAgZGVmYXVsdEN1cnJlbmN5OiB7XG4gICAgICogICAgIGNvZGU6IHN0cmluZyxcbiAgICAgKiAgICAgZGlzcGxheTogeyBkZWNpbWFsUGxhY2VzOiBudW1iZXIsIGRlY2ltYWxUb2tlbjogc3RyaW5nLCBzeW1ib2w6IHN0cmluZywgc3ltYm9sUGxhY2VtZW50OiBzdHJpbmcsIHRob3VzYW5kc1Rva2VuOiBzdHJpbmcgfSxcbiAgICAgKiAgICAgZXhjaGFuZ2VSYXRlOiBudW1iZXIsIG5hbWU6IHN0cmluZyxcbiAgICAgKiAgIH0sXG4gICAgICogfT5cbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaFNldHRpbmdzKCkge1xuICAgICAgICBpZiAoY2FjaGVkU2V0dGluZ3MpIHJldHVybiBjYWNoZWRTZXR0aW5ncztcblxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmNvbnRleHQuZ3JhcGhRTFRva2VufWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVmYXVsdEN1cnJlbmN5Q29kZTogY3VycmVuY3lDb2RlIVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5KGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5DdXJyZW5jeUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3k6IGN1cnJlbmN5KGN1cnJlbmN5Q29kZTogJGRlZmF1bHRDdXJyZW5jeUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQ3VycmVuY3lGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgQ3VycmVuY3lGaWVsZHMgb24gQ3VycmVuY3kge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxUb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kc1Rva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBleGNoYW5nZVJhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZTogdGhpcy5jb250ZXh0LmFjdGl2ZV9jdXJyZW5jeV9jb2RlLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuZGVmYXVsdF9jdXJyZW5jeV9jb2RlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2FjaGVkU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAuLi5yZXNwLmRhdGEuc2l0ZS5zZXR0aW5ncyxcbiAgICAgICAgICAgIGN1cnJlbmN5OiByZXNwLmRhdGEuc2l0ZS5jdXJyZW5jeSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gY2FjaGVkU2V0dGluZ3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggb3B0aW9uIHByaWNlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTx7IGlkOiBudW1iZXIsIHZhbHVlczogQXJyYXk8eyBpZDogbnVtYmVyIH0+IH0+fSBzaG93T3B0aW9uc1xuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8e1xuICAgICAqICAgb3B0aW9uSWQ6IG51bWJlcnxudWxsLFxuICAgICAqICAgdmFsdWVJZDogbnVtYmVyfG51bGwsXG4gICAgICogICBwcmljZXNXaXRoVGF4OiB7XG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxuICAgICAqICAgICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcbiAgICAgKiAgIH0sXG4gICAgICogICBwcmljZXNXaXRob3V0VGF4OiB7XG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxuICAgICAqICAgICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcbiAgICAgKiAgIH0sXG4gICAgICogICBhZGp1c3RlZFByaWNlc1dpdGhUYXg6IHtcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXG4gICAgICogICAgIG5vblNhbGVQcmljZVZhbHVlOiBudW1iZXIsXG4gICAgICogICB9LFxuICAgICAqICAgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4OiB7XG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxuICAgICAqICAgICBub25TYWxlUHJpY2VWYWx1ZTogbnVtYmVyLFxuICAgICAqICAgfSxcbiAgICAgKiB9Pj59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2hPcHRpb25QcmljZXMoc2hvd09wdGlvbnMsIGZvcm1EYXRhKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uVmFsdWVJZHMgPSBbXTtcblxuICAgICAgICBmb3JtRGF0YS5lbnRyaWVzKCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtID0ga2V5Lm1hdGNoKC9eYXR0cmlidXRlXFxbKFxcZCspXFxdJC8pO1xuICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25FbnRpdHlJZCA9IE51bWJlcihtWzFdKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUVudGl0eUlkID0gTnVtYmVyKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUVudGl0eUlkICYmICFzaG93T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBvcHRpb25FbnRpdHlJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcy5wdXNoKHsgb3B0aW9uRW50aXR5SWQsIHZhbHVlRW50aXR5SWQgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcbiAgICAgICAgICAgIC8vIGZldGNoIGFscmVhZHkgc2VsZWN0ZWQgb3B0aW9ucycgcHJpY2VzXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmZldGNoT3B0aW9uUHJpY2Uoc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyksXG4gICAgICAgIF07XG5cbiAgICAgICAgc2hvd09wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gb3B0aW9uLnZhbHVlcyB8fCAob3B0aW9uLnZhbHVlID8gW3sgaWQ6IG9wdGlvbi52YWx1ZSB9XSA6IFtdKTtcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAvLyBmZXRjaCBjdXJyZW50IG9wdGlvbiB2YWx1ZSdzIHByaWNlc1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaE9wdGlvblByaWNlKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkT3B0aW9uVmFsdWVJZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRW50aXR5SWQ6IG9wdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUVudGl0eUlkOiB2YWx1ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLnRoZW4ocHJvZHVjdCA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlSWQ6IHZhbHVlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBbcHJldiwgLi4uc2VsZWN0aW9uc10gPSBhd2FpdCBoYW5kbGVQcm9taXNlc1dpdGhMaW1pdChwcm9taXNlcyk7XG5cbiAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKHNlbGVjdGlvbiA9PiB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgpIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vbi1zYWxlIHByaWNlIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBwcmljZSBhbmQgdGhlIGN1cnJlbnQgcHJpY2VcbiAgICAgICAgICAgICAgICAvLyBjb25zaWRlciBhbGwgbm93IHByaWNlIGFuZCByZWd1bGFyIHByaWNlXG4gICAgICAgICAgICAgICAgbGV0IG5vblNhbGVQcmljZVdpdGhUYXggPSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXg/LnByaWNlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAvLyB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWUgLSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHx8IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbm9uLXNhbGUgcHJpY2UgaWYgaXQncyBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgcHJpY2VcbiAgICAgICAgICAgICAgICBpZiAobm9uU2FsZVByaWNlV2l0aFRheCA8PSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRqdXN0ZWRQcmljZXNXaXRoVGF4ID0ge1xuICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LmJhc2VQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwcmljZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgucHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVZhbHVlOiBub25TYWxlUHJpY2VXaXRoVGF4LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheCkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9uLXNhbGUgcHJpY2UgYmFzZWQgb24gdGhlIHByZXZpb3VzIHByaWNlIGFuZCB0aGUgY3VycmVudCBwcmljZVxuICAgICAgICAgICAgICAgIC8vIGNvbnNpZGVyIGFsbCBub3cgcHJpY2UgYW5kIHJlZ3VsYXIgcHJpY2VcbiAgICAgICAgICAgICAgICBsZXQgbm9uU2FsZVByaWNlV2l0aG91dFRheCA9IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheD8ucHJpY2UudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIC8vIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZSAtIHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfHwgbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBub24tc2FsZSBwcmljZSBpZiBpdCdzIGxlc3MgdGhhbiB0aGUgY3VycmVudCBwcmljZVxuICAgICAgICAgICAgICAgIGlmIChub25TYWxlUHJpY2VXaXRob3V0VGF4IDw9IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXggPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5hZGp1c3RlZFByaWNlc1dpdGhvdXRUYXggPSB7XG4gICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG5vblNhbGVQcmljZVdpdGhvdXRUYXgsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBmZXRjaE9wdGlvblByaWNlcyByZXR1cm5zOiAnLCBzZWxlY3Rpb25zKTtcbiAgICAgICAgcmV0dXJuIFtwcmV2LCAuLi5zZWxlY3Rpb25zXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBwcm9kdWN0IHByaWNlIGZyb20gc3BlY2lmaWMgb3B0aW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTx7IG9wdGlvbkVudGl0eUlkOiBudW1iZXIsIHZhbHVlRW50aXR5SWQ6IG51bWJlcn0+fSBvcHRpb25WYWx1ZUlkc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcHJpY2VzV2l0aFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSwgcHJpY2VzV2l0aG91dFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSB9PlxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoT3B0aW9uUHJpY2Uob3B0aW9uVmFsdWVJZHMpIHtcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25WYWx1ZUlkcyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY29udGV4dC5ncmFwaFFMVG9rZW59YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSAoJHByb2R1Y3RJZDogSW50ISwgJG9wdGlvblZhbHVlSWRzOiBbT3B0aW9uVmFsdWVJZCFdLCAkY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QoZW50aXR5SWQ6ICRwcm9kdWN0SWQsIG9wdGlvblZhbHVlSWRzOiAkb3B0aW9uVmFsdWVJZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlc1dpdGhUYXg6IHByaWNlcyhjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUsIGluY2x1ZGVUYXg6IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzV2l0aG91dFRheDogcHJpY2VzKGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZSwgaW5jbHVkZVRheDogZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgTW9uZXlGaWVsZHMgb24gTW9uZXkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBQcmljZUZpZWxkcyBvbiBQcmljZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuYWN0aXZlX2N1cnJlbmN5X2NvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvZHVjdElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWVJZHMsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVbY2FjaGVLZXldID0gcmVzcC5kYXRhLnNpdGUucHJvZHVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtjYWNoZUtleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSB0b29sdGlwcyB0byB0aGUgY29ycmVzcG9uZGluZyBzaG93biBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxUaXRsZVxuICAgICAqIEBwYXJhbSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgdG9vbHRpcDogc3RyaW5nLCB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9IH19IHRvb2x0aXBzXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfX0gdG9vbHRpcEhlYWRpbmdzXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaG93T3B0aW9uSWRzIG9wdGlvbiBpZHMgdG8gc2hvdyB0b29sdGlwc1xuICAgICAqL1xuICAgIHNob3dPcHRpb25Ub29sdGlwcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncywgc2hvd09wdGlvbklkcykge1xuICAgICAgICAvLyBEaXNwbGF5IHRvb2x0aXBcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9vbHRpcHMpLmZvckVhY2goKFtvcHRpb25JZCwgeyB0b29sdGlwLCB2YWx1ZVRvb2x0aXBzIH1dKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKG9wdGlvbklkKSkpIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xuXG4gICAgICAgICAgICBpZiAodG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHRvb2x0aXApKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkJywgb3B0aW9uSWQpO1xuXG4gICAgICAgICAgICAgICAgJG9wdGlvbi5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtvcHRpb25JZH1cIl1gKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0ICRsYWJlbCA9ICRvcHRpb24uZmluZCgnbGFiZWwnKS5maXJzdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRsYWJlbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRsYWJlbC5hZnRlcigkdG9vbHRpcCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5wcmVwZW5kKCR0b29sdGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcHMpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJG9wdGlvbi5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHZhbHVlVG9vbHRpcCkpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xuXG4gICAgICAgICAgICAgICAgJG9wdGlvbi5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtvcHRpb25JZH0tJHt2YWx1ZUlkfVwiXWApLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICR2YWx1ZS5hZnRlcigkdG9vbHRpcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaWYgb25seSAxIG9wdGlvbiBzaG93biBhdCBjdXJyZW50IHN0ZXAsXG4gICAgICAgIC8vIHRoZW4gbW92ZSBpdHMgdG9vbHRpcCB0byB0aGUgbW9kYWwgdGl0bGVcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZD1cIiR7c2hvd09wdGlvbklkc1swXX1cIl1gKTtcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmFwcGVuZCgkdG9vbHRpcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwbGF5IHRvb2x0aXAgaGVhZGluZ1xuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwSGVhZGluZ3MpXG4gICAgICAgICAgICAuZmlsdGVyKChbb3B0aW9uSWRdKSA9PiBzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcihvcHRpb25JZCkpKVxuICAgICAgICAgICAgLmZvckVhY2goKFtvcHRpb25JZCwgdmFsdWVUb29sdGlwSGVhZGluZ3NdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwSGVhZGluZ3MpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcEhlYWRpbmcgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlLnJlcGxhY2UoJzwlaGVhZGluZyU+JywgdmFsdWVUb29sdGlwSGVhZGluZykpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWhlYWRpbmctaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xuXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWhlYWRpbmctaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5hcHBlbmQoJHRvb2x0aXBIZWFkaW5nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIHRvIHRoZSBzaG93biBvcHRpb25zIGFuZCBkaXNwbGF5IGNvbnRpbnVlIGJ1dHRvbiBpZiBuZWNlc3NhcnkuXG4gICAgICogU3RvcCBhdXRvIHVwZGF0ZSB0aGUgbW9kaWZpZXJzIHZpZXcgdW50aWwgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqXG4gICAgICogQ29udGludWUgYnV0dG9uIGlzIHNob3duIGlmIGFueSBvZiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAgICAgKiAtIG9wdGlvbnMgdGhhdCBoYXMgZGVmYXVsdCB2YWx1ZVxuICAgICAqIC0gY2hlY2tib3ggb3B0aW9uc1xuICAgICAqIC0gb3B0aW9uYWwgc2VsZWN0IG9wdGlvbnNcbiAgICAgKiAtIG9wdGlvbmFsIGRhdGUgc2VsZWN0IG9wdGlvbnNcbiAgICAgKiAtIGZpbGUgaW5wdXRcbiAgICAgKiAtIG1vcmUgdGhhbiAxIG9wdGlvbiBhcmUgc2hvd24gYXQgdGhlIHNhbWUgdGltZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBzaG93T3B0aW9uSWRzIHNob3cgb3B0aW9uIGlkc1xuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbENvbnRpbnVlXG4gICAgICovXG4gICAgcG9wdWxhdGVEZWZhdWx0T3B0aW9uVmFsdWVzKHNob3dPcHRpb25JZHMsICRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbENvbnRpbnVlKSB7XG4gICAgICAgIGNvbnN0IHNob3duT3B0aW9ucyA9IHRoaXMucHJvZHVjdE9wdGlvbnMuZmlsdGVyKCh7IGlkIH0pID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoaWQpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogb3B0aW9ucyB0aGF0IGhhcyBkZWZhdWx0IHZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHNob3duT3B0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcigoeyBwcmVmaWxsLCBzZWxlY3RlZF9kYXRlLCB2YWx1ZXMgfSkgPT5cbiAgICAgICAgICAgICAgICBwcmVmaWxsIHx8XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRfZGF0ZSAmJiAoc2VsZWN0ZWRfZGF0ZS5kYXkgfHwgc2VsZWN0ZWRfZGF0ZS5tb250aCB8fCBzZWxlY3RlZF9kYXRlLnllYXIpIHx8XG4gICAgICAgICAgICAgICAgdmFsdWVzPy5maW5kKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNoZWNrYm94IHR5cGUgb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgY2hlY2tib3hPcHRpb25zID0gc2hvd25PcHRpb25zXG4gICAgICAgICAgICAuZmlsdGVyKCh7IG5vVmFsdWUsIHZhbHVlIH0pID0+IG5vVmFsdWUgfHwgdmFsdWUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBmaWxlIHR5cGUgb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZmlsZU9wdGlvbnMgPSBzaG93bk9wdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnaW5wdXQtZmlsZScpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkYXRlIHR5cGUgb3B0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZGF0ZU9wdGlvbnMgPSBzaG93bk9wdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnZGF0ZScpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkcm9wZG93biB0eXBlIG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9ucyA9IHNob3duT3B0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcigoeyByZXF1aXJlZCwgcGFydGlhbCB9KSA9PiAhcmVxdWlyZWQgJiYgcGFydGlhbCA9PT0gJ3NldC1zZWxlY3QnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdGV4dCAvIG11bHRpbGluZSAvIG51bWJlciBvcHRpb25zXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB0ZXh0T3B0aW9ucyA9IHNob3duT3B0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcigoeyBwYXJ0aWFsIH0pID0+IHBhcnRpYWwgPT09ICdpbnB1dC10ZXh0JyB8fCBwYXJ0aWFsID09PSAndGV4dGFyZWEnIHx8IHBhcnRpYWwgPT09ICdpbnB1dC1udW1iZXJzJyk7XG5cbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMVxuICAgICAgICAgICAgfHwgZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMCB8fCBjaGVja2JveE9wdGlvbnMubGVuZ3RoID4gMCB8fCBmaWxlT3B0aW9ucy5sZW5ndGggPiAwXG4gICAgICAgICAgICB8fCBkYXRlT3B0aW9ucy5sZW5ndGggPiAwIHx8IGRyb3Bkb3duT3B0aW9ucy5sZW5ndGggPiAwIHx8IHRleHRPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIHNob3cgY29udGludWUgYnV0dG9uXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxDb250aW51ZS5zaG93KCk7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgYXV0byB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IHVudGlsIHRoZSBjb250aW51ZSBidXR0b24gaXMgY2xpY2tlZFxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIG9wdGlvbnNcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zLmZvckVhY2goKHtcbiAgICAgICAgICAgICAgICBpZCwgcHJlZmlsbCwgc2VsZWN0ZWRfZGF0ZSwgdmFsdWVzLFxuICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZXM/LmZpbmQoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpPy5pZDtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ3NlbGVjdCcpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdYCkudmFsKHZhbHVlSWQpO1xuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3ZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByZWZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dCwgdGV4dGFyZWEnKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXWApLnZhbChwcmVmaWxsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkX2RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX2RhdGUuZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVtkYXldXCJdYCkudmFsKHNlbGVjdGVkX2RhdGUuZGF5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRfZGF0ZS5tb250aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bbW9udGhdXCJdYCkudmFsKHNlbGVjdGVkX2RhdGUubW9udGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9kYXRlLnllYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW3llYXJdXCJdYCkudmFsKHNlbGVjdGVkX2RhdGUueWVhcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIGNoZWNrYm94IG9wdGlvbnNcbiAgICAgICAgICAgIGNoZWNrYm94T3B0aW9ucy5mb3JFYWNoKCh7XG4gICAgICAgICAgICAgICAgaWQsIGNoZWNrZWQsIHZhbHVlLCBub1ZhbHVlLFxuICAgICAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImhpZGRlblwiXWApLnZhbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImNoZWNrYm94XCJdYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImhpZGRlblwiXWApLnZhbChub1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiY2hlY2tib3hcIl1gKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBtYXJrIGZpbGUgaW5wdXQsIGRhdGUgaW5wdXQsIGRyb3Bkb3duIHNlbGVjdCwgdGV4dCBpbnB1dCBhcyBzaG93blxuICAgICAgICAgICAgWy4uLmZpbGVPcHRpb25zLCAuLi5kYXRlT3B0aW9ucywgLi4uZHJvcGRvd25PcHRpb25zLCAuLi50ZXh0T3B0aW9uc10uZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVtkYXldXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bbW9udGhdXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1beWVhcl1cIl1gKS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJywgJ3RydWUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheVNob3dPcHRpb25QcmljZXNQcmVsb2FkZXIoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBwcmVsb2FkZXI6IHRydWUgfTtcbiAgICAgICAgY29uc3QgcHJpY2VIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMub3B0aW9uUHJpY2VUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xuICAgICAgICBjb25zdCBwcmljZVRleHQgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVBsYWluVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xuXG4gICAgICAgIHNob3dPcHRpb25JZHMuZm9yRWFjaChvcHRpb25JZCA9PiB7XG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXG4gICAgICAgICAgICAgICAgLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl0gW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdYClcbiAgICAgICAgICAgICAgICAuZWFjaCgoX2ksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICQoZWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gTnVtYmVyKCR2YWx1ZS5hdHRyKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlJykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlSWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByaWNlID0gJChwcmljZUh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJ29wdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBhbHJlYWR5IGhhcyBwcmljZSBkaXNwbGF5ZWQgYmVmb3JlP1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5kYXRhKCdwcmljZUh0bWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnLCAkdmFsdWUudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLnRleHQoYCR7JHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpfSAke3ByaWNlVGV4dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRvbGQgPSAkdmFsdWUuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG9sZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG9sZC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGxhY2Vob2xkZXIgPSAkdmFsdWUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtcGxhY2Vob2xkZXJdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKCRwcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkcHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBwcmljZXMgdG8gY29ycmVzcG9uZGluZyBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbFxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2hvd09wdGlvbklkcyBvcHRpb24gaWRzIHRvIHNob3cgcHJpY2VzXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcbiAgICAgKiBAcGFyYW0ge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfSB9fSBub25lU2FsZXMgb3B0aW9uIHZhbHVlcyB3aXRoIG5vbi1zYWxlIHByaWNlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZVVwZGF0ZVN1YnRvdGFsPWZhbHNlXSBpZ25vcmUgdXBkYXRlIHN1YnRvdGFsXG4gICAgICovXG4gICAgYXN5bmMgc2hvd09wdGlvblByaWNlcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcywgZm9ybURhdGEsIG5vbmVTYWxlcywgaWdub3JlVXBkYXRlU3VidG90YWwgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBbc2V0dGluZ3MsIFtwcmV2LCAuLi5zZWxlY3Rpb25zXV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLmZldGNoU2V0dGluZ3MoKSxcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hPcHRpb25QcmljZXMoXG4gICAgICAgICAgICAgICAgc2hvd09wdGlvbklkcy5tYXAoX2lkID0+IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gX2lkKSksXG4gICAgICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICApLFxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zdCBzaG93UHJpY2UgPSB2YWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93UHJpY2VGcmVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHh0UHJpY2VGcmVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93UHJpY2VaZXJvKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFByaWNlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UHJpY2UodmFsdWUsIHRydWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaCgoe1xuICAgICAgICAgICAgb3B0aW9uSWQsIHZhbHVlSWQsIGFkanVzdGVkUHJpY2VzV2l0aFRheCwgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4LFxuICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5wcmljZT8udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheDogc2hvd1ByaWNlKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiAoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgOiAnJyksXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXg6IChhZGp1c3RlZFByaWNlc1dpdGhUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShhZGp1c3RlZFByaWNlc1dpdGhUYXg/Lm5vblNhbGVQcmljZVZhbHVlLCB0cnVlKSA6ICcnKSxcbiAgICAgICAgICAgICAgICB9IDoge30pLFxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4VmFsdWU6IGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ucHJpY2U/LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IHNob3dQcmljZShhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlIDogJycpLFxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4OiAoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IHRoaXMuZm9ybWF0UHJpY2UoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5ub25TYWxlUHJpY2VWYWx1ZSwgdHJ1ZSkgOiAnJyksXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMucHJpY2VXaXRoVGF4IHx8IHBhcmFtcy5wcmljZVdpdGhvdXRUYXgpIHtcbiAgICAgICAgICAgICAgICAvLyBvdmVycmlkZSBub24tc2FsZSBwcmljZSBmb3Igb3B0aW9uIHZhbHVlcyBpZiBpdCBpcyBhcHBlYXJzIGluIGN1c3RvbSBmaWVsZCBgX19Abm9uc2FsZWBcbiAgICAgICAgICAgICAgICAvLyBhbmQgaWYgaXQncyBoaWdoZXIgdGhhbiB0aGUgY3VycmVudCBwcmljZVxuICAgICAgICAgICAgICAgIGNvbnN0IG5vblNhbGUgPSBub25lU2FsZXNbb3B0aW9uSWRdPy5bdmFsdWVJZF07XG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhjaGFuZ2VkTm9uU2FsZSA9IG5vblNhbGUgKiBzZXR0aW5ncy5jdXJyZW5jeS5leGNoYW5nZVJhdGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlVmFsdWUgPSBzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ucHJpY2U/LnZhbHVlIDogYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5wcmljZT8udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNoYW5nZWROb25TYWxlID4gcHJpY2VWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiBleGNoYW5nZWROb25TYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiB0aGlzLmZvcm1hdFByaWNlKGV4Y2hhbmdlZE5vblNhbGUsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7fSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdJTkMnID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWU6IGV4Y2hhbmdlZE5vblNhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IHRoaXMuZm9ybWF0UHJpY2UoZXhjaGFuZ2VkTm9uU2FsZSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VUZXh0ID0gbXVzdGFjaGUucmVuZGVyKHRoaXMub3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgJHByaWNlID0gJChwcmljZUh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnLCAkdmFsdWUudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUudGV4dChgJHskdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0Jyl9ICR7cHJpY2VUZXh0fWApO1xuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZGF0YSgncHJpY2VIdG1sJywgcHJpY2VIdG1sKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwbGFjZWhvbGRlciA9ICR2YWx1ZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1wbGFjZWhvbGRlcl0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbCgkcHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkcHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTaG93IHN1YnRvdGFsIGNhbGN1bGF0ZWQgZnJvbSBhbGwgc2VsZWN0ZWQgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgc3RlcFxuICAgICAgICBpZiAoIWlnbm9yZVVwZGF0ZVN1YnRvdGFsKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25TdWJ0b3RhbCgkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgcHJldiwgc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBzdWJ0b3RhbCBmb3IgdGhlIGN1cnJlbnQgc3RlcFxuICAgICAqXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXG4gICAgICogQHBhcmFtIHt7XG4gICAgICogICBwcmljZXNXaXRoVGF4OiB7XG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxuICAgICAqICAgICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB8IG51bGwsXG4gICAgICogICB9LFxuICAgICAqICAgcHJpY2VzV2l0aG91dFRheDoge1xuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcbiAgICAgKiAgIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IHwgbnVsbCxcbiAgICAgKiB9fSBwcm9kdWN0XG4gICAgICogQHBhcmFtIHt7IHRheDogeyBwZHA6IG51bWJlciB9IH19IHNldHRpbmdzXG4gICAgICpcbiAgICAgKi9cbiAgICBzaG93T3B0aW9uU3VidG90YWwoJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHByb2R1Y3QsIHNldHRpbmdzKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICB0eHRTdWJ0b3RhbDogdGhpcy5jb250ZXh0LnR4dFN1YnRvdGFsLFxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6ICcnLFxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiAnJyxcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiAnJyxcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogJycsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHByb2R1Y3QucHJpY2VzV2l0aFRheD8ucHJpY2UgfHwgcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4Py5wcmljZSkge1xuICAgICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6IHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSA/IHRoaXMuZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSkgOiAnJyxcbiAgICAgICAgICAgICAgICB9IDoge30pLFxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4VmFsdWU6IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheDogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSA/IHRoaXMuZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSkgOiAnJyxcbiAgICAgICAgICAgICAgICB9IDoge30pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsU3VidG90YWwuaHRtbChzdWJ0b3RhbEh0bWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgc3VtbWFyeSBvZiBzZWxlY3RlZCBvcHRpb25zIGJlZm9yZSBhZGRpbmcgdG8gY2FydFxuICAgICAqXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VtbWFyeVxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbFxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxUaXRsZVxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkYWRkVG9DYXJ0V3JhcHBlclxuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwcmVsb2FkZXJcbiAgICAgKi9cbiAgICBzaG93U3VtbWFyeSgkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5LCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgJG1vZGlmaWVyc01vZGFsVGl0bGUsICRhZGRUb0NhcnRXcmFwcGVyLCBmb3JtRGF0YSwgcHJlbG9hZGVyID0gZmFsc2UpIHtcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuaHRtbCh0aGlzLmNvbnRleHQudHh0UmV2aWV3U2VsZWN0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBzdWJ0b3RhbEh0bWwgPSAhcHJlbG9hZGVyXG4gICAgICAgICAgICA/ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoKVxuICAgICAgICAgICAgOiBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCB7IHByZWxvYWRlciB9LCBudWxsLCBbJzwlJywgJyU+J10pO1xuICAgICAgICBjb25zdCAkc3VidG90YWwgPSAkKHN1YnRvdGFsSHRtbCkuYXR0cignZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29tcGxldGUtc3VidG90YWwnLCAnJyk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXlTdHIgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW2RheV1gKTtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoU3RyID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1gKTtcbiAgICAgICAgICAgIGNvbnN0IHllYXJTdHIgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdYCk7XG5cbiAgICAgICAgICAgIGlmIChkYXlTdHIgfHwgbW9udGhTdHIgfHwgeWVhclN0cikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5kaXNwbGF5X25hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShgJHt5ZWFyU3RyfS0ke21vbnRoU3RyfS0ke2RheVN0cn1gKS50b0xvY2FsZURhdGVTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU6IGAke3llYXJTdHJ9LSR7bW9udGhTdHJ9LSR7ZGF5U3RyfWAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVN0ciA9IGZvcm1EYXRhLmdldEFsbChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKS5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICBpZiAoIXZhbHVlU3RyIHx8IHZhbHVlU3RyID09PSAnMCcpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHZhbHVlU3RyIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVN0ci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZGlzcGxheV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlU3RyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZVN0ciA/IE51bWJlcih2YWx1ZVN0cikgOiBudWxsO1xuXG4gICAgICAgICAgICAvLyBzdG9wIGlmIGl0IGlzIGNoZWNrYm94IGFuZCBub3QgY2hlY2tlZFxuICAgICAgICAgICAgaWYgKG9wdGlvbi5ub1ZhbHVlICYmIG9wdGlvbi5ub1ZhbHVlID09PSB2YWx1ZUlkKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlTGFiZWwgPSBvcHRpb24udmFsdWVzPy5maW5kKCh7IGlkIH0pID0+IGlkID09PSB2YWx1ZUlkKT8ubGFiZWxcbiAgICAgICAgICAgICAgICB8fCAob3B0aW9uLnZhbHVlID09PSB2YWx1ZUlkID8gb3B0aW9uLmxhYmVsIDogdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgY29uc3QgcHJpY2VIdG1sID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uLmlkfS0ke3ZhbHVlSWR9XCJdYClcbiAgICAgICAgICAgICAgICAuZmlyc3QoKS5jbG9uZSgpLnJlbW92ZUF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnKVswXT8ub3V0ZXJIVE1MO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25FbFByaWNlSHRtbCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXSBvcHRpb25bdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkuZGF0YSgncHJpY2VIdG1sJyk7XG5cbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVMYWJlbCB8fCB2YWx1ZVN0cixcbiAgICAgICAgICAgICAgICBwcmljZUh0bWw6IHByaWNlSHRtbCB8fCBvcHRpb25FbFByaWNlSHRtbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzdW1tYXJ5SHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1bW1hcnlUZW1wbGF0ZSwgeyBvcHRpb25zIH0sIG51bGwsIFsnPCUnLCAnJT4nXSk7XG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1bW1hcnkuaHRtbChzdW1tYXJ5SHRtbCk7XG5cbiAgICAgICAgLy8gSW5zZXJ0IHN1YnRvdGFsIHRvIHRvIGFkZCB0byBjYXJ0IHdyYXBwZXIgYW5kIHNob3cgaXRcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlLXN1YnRvdGFsXScpLnJlbW92ZSgpO1xuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5maW5kKHRoaXMuYWRkVG9DYXJ0V3JhcHBlclNlbGVjdG9yKS5wcmVwZW5kKCRzdWJ0b3RhbCk7XG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2VdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhLnByaWNlLndpdGhvdXRfdGF4XVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uud2l0aG91dF90YXguY3VycmVuY3lcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS50YXhfbGFiZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheF1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXgudmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmN1cnJlbmN5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhLnByaWNlLndpdGhfdGF4XVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhfdGF4LmZvcm1hdHRlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uud2l0aF90YXguY3VycmVuY3lcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheF1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXgudmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LmN1cnJlbmN5XG4gICAgICovXG4gICAgdXBkYXRlTW9kaWZpZXJzU3VidG90YWwoZGF0YSkge1xuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XG5cbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHR4dFN1YnRvdGFsOiB0aGlzLmNvbnRleHQudHh0U3VidG90YWwsXG4gICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogJycsXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4VmFsdWU6ICcnLFxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiAnJyxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZGF0YS5wcmljZSkge1xuICAgICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgICAgICAuLi4oZGF0YS5wcmljZS53aXRoX3RheCA/IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6IGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheDogZGF0YS5wcmljZS53aXRoX3RheC5mb3JtYXR0ZWQsXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcbiAgICAgICAgICAgICAgICAuLi4oZGF0YS5wcmljZS53aXRob3V0X3RheCA/IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4VmFsdWU6IGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogZGF0YS5wcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQsXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWJ0b3RhbEh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIFBhcnNlcyBhbiBJU08gZGF0ZS10aW1lIHN0cmluZyBhbmQgZXh0cmFjdHMgdGhlIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBkYXRlLXRpbWUgc3RyaW5nIHRvIHBhcnNlLlxuICogQHJldHVybnMge09iamVjdHxudWxsfSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZXh0cmFjdGVkIGNvbXBvbmVudHMsIG9yIGBudWxsYCBpZiB0aGUgZm9ybWF0IGlzIGludmFsaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGVUaW1lU3RyaW5nKHN0cikge1xuICAgIGNvbnN0IHJlZ2V4ID0gL15cXHMqKD86KD86KFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkpfCg/OihcXGR7Mn0pLShcXGR7Mn0pKSk/KD86W1RcXHNdKT8oPzooXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KSg/OlxcLlxcZCspP3woXFxkezJ9KTooXFxkezJ9KXwoXFxkezJ9KSk/XFxzKig/Olp8KFsrLV0pKFxcZHsxLDJ9KSg/Ojo/KFxcZHsyfSkpPyk/XFxzKiQvO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBzdHIudHJpbSgpLm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIGZvcm1hdFxuICAgIH1cblxuICAgIGNvbnN0IFtcbiAgICAgICAgLFxuICAgICAgICB5ZWFyLCBtb250aCwgZGF5LCAvLyBbMV0sIFsyXSwgWzNdXG4gICAgICAgIHNob3J0TW9udGgsIHNob3J0RGF5LCAvLyBbNF0sIFs1XVxuICAgICAgICBob3VyLCBtaW51dGUsIHNlY29uZCwgLy8gWzZdLCBbN10sIFs4XVxuICAgICAgICBzaG9ydEhvdXIsIHNob3J0TWludXRlLCAvLyBbOV0sIFsxMF1cbiAgICAgICAgc2luZ2xlVGltZUNvbXBvbmVudCwgLy8gWzExXVxuICAgICAgICB0elNpZ24sIHR6SG91ck9mZnNldCwgdHpNaW51dGVPZmZzZXQsIC8vIFsxMl0sIFsxM10sIFsxNF1cbiAgICBdID0gbWF0Y2g7XG5cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgIC8vIERhdGUgY29tcG9uZW50c1xuICAgIGlmICh5ZWFyICYmIG1vbnRoICYmIGRheSkge1xuICAgICAgICByZXN1bHQueWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcbiAgICAgICAgcmVzdWx0Lm1vbnRoID0gcGFyc2VJbnQobW9udGgsIDEwKTtcbiAgICAgICAgcmVzdWx0LmRheSA9IHBhcnNlSW50KGRheSwgMTApO1xuICAgIH0gZWxzZSBpZiAoc2hvcnRNb250aCAmJiBzaG9ydERheSkge1xuICAgICAgICByZXN1bHQubW9udGggPSBwYXJzZUludChzaG9ydE1vbnRoLCAxMCk7XG4gICAgICAgIHJlc3VsdC5kYXkgPSBwYXJzZUludChzaG9ydERheSwgMTApO1xuICAgIH1cblxuICAgIC8vIFRpbWUgY29tcG9uZW50c1xuICAgIGlmIChob3VyICE9PSB1bmRlZmluZWQgJiYgbWludXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChob3VyLCAxMCk7XG4gICAgICAgIHJlc3VsdC5taW51dGUgPSBwYXJzZUludChtaW51dGUsIDEwKTtcbiAgICAgICAgaWYgKHNlY29uZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHQuc2Vjb25kID0gcGFyc2VJbnQoc2Vjb25kLCAxMCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNob3J0SG91ciAhPT0gdW5kZWZpbmVkICYmIHNob3J0TWludXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChzaG9ydEhvdXIsIDEwKTtcbiAgICAgICAgcmVzdWx0Lm1pbnV0ZSA9IHBhcnNlSW50KHNob3J0TWludXRlLCAxMCk7XG4gICAgfSBlbHNlIGlmIChzaW5nbGVUaW1lQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChzaW5nbGVUaW1lQ29tcG9uZW50LCAxMCk7XG4gICAgfVxuXG4gICAgLy8gVGltZXpvbmVcbiAgICBpZiAodHpTaWduICYmIHR6SG91ck9mZnNldCkge1xuICAgICAgICBjb25zdCBzaWduID0gdHpTaWduID09PSAnKycgPyAxIDogLTE7XG4gICAgICAgIGNvbnN0IHR6SG91ciA9IHBhcnNlSW50KHR6SG91ck9mZnNldCwgMTApO1xuICAgICAgICBjb25zdCB0ek1pbnV0ZSA9IHR6TWludXRlT2Zmc2V0ID8gcGFyc2VJbnQodHpNaW51dGVPZmZzZXQsIDEwKSA6IDA7XG4gICAgICAgIHJlc3VsdC50aW1lem9uZSA9IHNpZ24gKiAodHpIb3VyICsgdHpNaW51dGUgLyA2MCk7XG4gICAgfSBlbHNlIGlmIChzdHIuaW5jbHVkZXMoJ1onKSkge1xuICAgICAgICByZXN1bHQudGltZXpvbmUgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkYXRlLXRpbWUgc3RyaW5nIGludG8gYSBEYXRlIG9iamVjdCBhZGp1c3RlZCBmb3IgY291bnRkb3duIHB1cnBvc2VzLlxuICpcbiAqIC0gSWYgdGhlIGRhdGUtdGltZSBzdHJpbmcgZG9lcyBub3QgaW5jbHVkZSBhIHllYXIsIG1vbnRoLCBvciBkYXksIGl0IGlzIHRyZWF0ZWQgYXMgYSBkYWlseSBjb3VudGRvd24uXG4gKiAgIFRoZSBmdW5jdGlvbiB3aWxsIHNldCB0aGUgZGF0ZSB0byB0b2RheSBvciByb2xsIG92ZXIgdG8gdGhlIG5leHQgZGF5IGlmIHRoZSB0aW1lIGhhcyBhbHJlYWR5IHBhc3NlZC5cbiAqIC0gSWYgdGhlIGRhdGUtdGltZSBzdHJpbmcgZG9lcyBub3QgaW5jbHVkZSBhbiBob3VyLCBtaW51dGUsIG9yIHNlY29uZCwgdGhleSBkZWZhdWx0IHRvIDAuXG4gKiAtIFRoZSBmdW5jdGlvbiBhZGp1c3RzIGZvciB0aGUgc3BlY2lmaWVkIHRpbWV6b25lIG9mZnNldC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIGRhdGUtdGltZSBzdHJpbmcgdG8gcGFyc2UuXG4gKiBAcmV0dXJucyB7RGF0ZXx1bmRlZmluZWR9IEEgRGF0ZSBvYmplY3QgdXNlZCBmb3IgdGhlIGNvdW50ZG93biwgb3IgYHVuZGVmaW5lZGAgaWYgcGFyc2luZyBmYWlscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ291bnRkb3duRGF0ZShzdHIpIHtcbiAgICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2VEYXRlVGltZVN0cmluZyhzdHIpO1xuICAgIGlmICghcGFyc2VkRGF0ZSkgcmV0dXJuO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXG4gICAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgdGltZXpvbmUgfSA9IHBhcnNlZERhdGU7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGlmICh5ZWFyKSBkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICAgIGlmIChtb250aCkgZGF0ZS5zZXRNb250aChtb250aCAtIDEpO1xuICAgIGlmIChkYXkpIGRhdGUuc2V0RGF0ZShkYXkpO1xuICAgIGRhdGUuc2V0SG91cnMoaG91ciB8fCAwKTtcbiAgICBkYXRlLnNldE1pbnV0ZXMobWludXRlIHx8IDApO1xuICAgIGRhdGUuc2V0U2Vjb25kcyhzZWNvbmQgfHwgMCk7XG5cbiAgICAvLyBjaGFuZ2UgdGltZXpvbmUgdG8gVVRDXG4gICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgLSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MCk7XG5cbiAgICAvLyBBZGp1c3QgZm9yIHRpbWV6b25lXG4gICAgaWYgKHRpbWV6b25lKSB7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpIC0gdGltZXpvbmUpO1xuICAgIH1cblxuICAgIGlmICgheWVhciAmJiAhbW9udGggJiYgIWRheSkge1xuICAgICAgICAvLyBmb3IgZGFpbHkgY291bnRkb3duLCBhZGQgMSBkYXkgaWYgZGF0ZSBpcyBpbiB0aGUgcGFzdFxuICAgICAgICBpZiAoZGF0ZSA8IG5ldyBEYXRlKCkpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbi8qKlxuICogKipTYWxlQ291bnRkb3duIFNpbmdsZXRvbiBPYmplY3QqKlxuICpcbiAqIE1hbmFnZXMgY291bnRkb3duIHRpbWVycyBmb3Igc2FsZXMgb3IgcHJvbW90aW9uYWwgZXZlbnRzIG9uIHlvdXIgd2Vic2l0ZS5cbiAqIEl0IGhhbmRsZXMgbXVsdGlwbGUgY291bnRkb3duIGVsZW1lbnRzLCB1cGRhdGVzIHRoZW0gaW4gcmVhbC10aW1lLCBhbmQgbWFuYWdlcyB2aXNpYmlsaXR5IGJhc2VkIG9uIHRoZSB2aWV3cG9ydC5cbiAqXG4gKiAtLS1cbiAqXG4gKiAqKlVzYWdlOioqXG4gKlxuICogKioxLiBDb25maWd1cmUgdGhlIENvdW50ZG93biAoT3B0aW9uYWwpOioqXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xuICogICAvLyBPcHRpb25hbCBzZXR0aW5nc1xuICogICBkYXRlRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duRGF0ZScsICAgICAgIC8vIERhdGEgYXR0cmlidXRlIGZvciBjb3VudGRvd24gZGF0ZVxuICogICBpblZpZXdwb3J0RGF0YU5hbWU6ICdzYWxlQ291bnRkb3duSW5WaWV3cG9ydCcsIC8vIERhdGEgYXR0cmlidXRlIGZvciB2aWV3cG9ydCB2aXNpYmlsaXR5XG4gKiAgIHNlbGVjdG9yczogeyAuLi4gfSxcbiAqICAgdGVtcGxhdGU6ICcuLi4nLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDdXN0b20gSFRNTCB0ZW1wbGF0ZSBmb3IgdGhlIGNvdW50ZG93blxuICogICBoaWRlQ2xhc3M6ICdfaGlkZScsICAgICAgICAgICAgICAgICAgICAgIC8vIENsYXNzIHRvIGhpZGUgZWxlbWVudHNcbiAqICAgc2FsZUVuZENsYXNzOiAnX3NhbGVFbmRlZCcsICAgICAgICAgICAgICAvLyBDbGFzcyB3aGVuIHNhbGUgZW5kc1xuICogICBhY3RpdmVDbGFzczogJ19hY3RpdmUnLCAgICAgICAgICAgICAgICAgIC8vIENsYXNzIHdoZW4gY291bnRkb3duIGlzIGFjdGl2ZVxuICogICB0cmFuc2xhdGlvbnM6IHtcbiAqICAgICBlbmRfaW46ICdFbmRzIGluJyxcbiAqICAgICBkYXk6ICdEYXknLFxuICogICAgIGRheXM6ICdEYXlzJyxcbiAqICAgICBob3VyOiAnSG91cicsXG4gKiAgICAgaG91cnM6ICdIb3VycycsXG4gKiAgICAgbWludXRlOiAnTWludXRlJyxcbiAqICAgICBtaW51dGVzOiAnTWludXRlcycsXG4gKiAgICAgc2Vjb25kOiAnU2Vjb25kJyxcbiAqICAgICBzZWNvbmRzOiAnU2Vjb25kcycsXG4gKiAgIH0sXG4gKiAgIHR4dFNhbGVDb3VudGRvd25KU09OOiAneyBcInRyYW5zbGF0aW9uc1wiOiB7IC4uLiB9IH0nLCAvLyBKU09OIHN0cmluZyBmb3IgdHJhbnNsYXRpb25zXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqICoqMi4gQWRkIENvdW50ZG93biBFbGVtZW50czoqKlxuICpcbiAqIC0gKipPcHRpb24gMToqKiBEaXJlY3RseSBzcGVjaWZ5IHRoZSBkYXRlIHdoZW4gYWRkaW5nIHRoZSBlbGVtZW50LlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBjb25zdCAkZWwgPSAkKCcjY291bnRkb3duLWVsZW1lbnQnKTtcbiAqICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XG4gKiAgIFNhbGVDb3VudGRvd24uYWRkKCRlbCwgZGF0ZSk7XG4gKiAgIGBgYFxuICpcbiAqIC0gKipPcHRpb24gMjoqKiBTZXQgZGF0YSBhdHRyaWJ1dGVzIG9uIHRoZSBlbGVtZW50IGFuZCBhZGQgaXQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIGNvbnN0ICRlbCA9ICQoJyNjb3VudGRvd24tZWxlbWVudCcpO1xuICogICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93bkRhdGUnLCAnMjAyMy0xMi0zMVQyMzo1OTo1OScpO1xuICogICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAnRW5kcyBpbicsIC4uLiB9KTtcbiAqICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsKTtcbiAqICAgYGBgXG4gKlxuICogLS0tXG4gKlxuICogKipOb3RlczoqKlxuICpcbiAqIC0gVGhlIGNvdW50ZG93biBhdXRvbWF0aWNhbGx5IHVwZGF0ZXMgdmlzaWJsZSBlbGVtZW50cyBpbiB0aGUgdmlld3BvcnQuXG4gKiAtIFN1cHBvcnRzIGN1c3RvbWl6YXRpb24gdGhyb3VnaCBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGF0dHJpYnV0ZXMuXG4gKiAtIEhhbmRsZXMgYXV0b21hdGljIHN0b3BwaW5nIHdoZW4gbm8gZWxlbWVudHMgcmVtYWluLlxuICpcbiAqIC0tLVxuICpcbiAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIEluaXRpYWxpemUgYW5kIGNvbmZpZ3VyZVxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xuICogICB0cmFuc2xhdGlvbnM6IHtcbiAqICAgICBlbmRfaW46ICdTYWxlIGVuZHMgaW4nLFxuICogICAgIC8vIE90aGVyIHRyYW5zbGF0aW9ucy4uLlxuICogICB9LFxuICogfSk7XG4gKlxuICogLy8gQWRkIGNvdW50ZG93biBlbGVtZW50XG4gKiBjb25zdCAkY291bnRkb3duID0gJCgnI2NvdW50ZG93bicpO1xuICogY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XG4gKiBTYWxlQ291bnRkb3duLmFkZCgkY291bnRkb3duLCBlbmREYXRlKTtcbiAqIGBgYFxuICovXG5cbmNvbnN0IFNhbGVDb3VudGRvd24gPSB7XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7U2V0PEVsZW1lbnQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZWxlbWVudHM6IG5ldyBTZXQoKSxcblxuICAgIC8qKlxuICAgICAqIFRpbWVyIGludGVydmFsIElEXG4gICAgICogQHR5cGUge251bWJlcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGltZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHtJbnRlcnNlY3Rpb25PYnNlcnZlcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAqIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGNvdW50ZG93biBkYXRlXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIGRhdGVEYXRhTmFtZTogJ3NhbGVDb3VudGRvd25EYXRlJyxcblxuICAgIC8qKlxuICAgICAqIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaW5WaWV3cG9ydERhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkluVmlld3BvcnQnLFxuXG4gICAgLyoqXG4gICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgdHJhbnNsYXRpb25zIEpTT05cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdHJhbnNsYXRpb25zRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duVHJhbnNsYXRpb25zJyxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdG9ycyBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHR5cGUge3tlbmRMYWJlbDogc3RyaW5nLCBkYXk6IHN0cmluZywgZGF5VmFsdWU6IHN0cmluZywgZGF5TGFiZWw6IHN0cmluZywgaG91cjogc3RyaW5nLCBob3VyVmFsdWU6IHN0cmluZywgaG91ckxhYmVsOiBzdHJpbmcsIG1pbnV0ZTogc3RyaW5nLCBtaW51dGVWYWx1ZTogc3RyaW5nLCBtaW51dGVMYWJlbDogc3RyaW5nLCBzZWNvbmQ6IHN0cmluZywgc2Vjb25kVmFsdWU6IHN0cmluZywgc2Vjb25kTGFiZWw6IHN0cmluZ319XG4gICAgICovXG4gICAgc2VsZWN0b3JzOiB7XG4gICAgICAgIGVuZExhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZW5kLWxhYmVsXScsXG4gICAgICAgIGRheTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheV0nLFxuICAgICAgICBkYXlWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheS12YWx1ZV0nLFxuICAgICAgICBkYXlMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheS1sYWJlbF0nLFxuICAgICAgICBob3VyOiAnW2RhdGEtc2FsZS1jb3VudGRvd24taG91cl0nLFxuICAgICAgICBob3VyVmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLXZhbHVlXScsXG4gICAgICAgIGhvdXJMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWhvdXItbGFiZWxdJyxcbiAgICAgICAgbWludXRlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlXScsXG4gICAgICAgIG1pbnV0ZVZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLXZhbHVlXScsXG4gICAgICAgIG1pbnV0ZUxhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLWxhYmVsXScsXG4gICAgICAgIHNlY29uZDogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZF0nLFxuICAgICAgICBzZWNvbmRWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC12YWx1ZV0nLFxuICAgICAgICBzZWNvbmRMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC1sYWJlbF0nLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYmFkZ2UtcGVyY2VudFwiPjwvdXNlPjwvc3ZnPjwvaT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfZW5kXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1lbmQtbGFiZWw+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9kYXlcIiBkYXRhLXNhbGUtY291bnRkb3duLWRheT48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5LXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5LWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX2hvdXJcIiBkYXRhLXNhbGUtY291bnRkb3duLWhvdXI+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLWhvdXItdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX21pbnV0ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtbGFiZWw+PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfc2Vjb25kXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQ+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC12YWx1ZT48L3NwYW4+PHNwYW4gY2xhc3M9XCJfbGFiZWxcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgIGAsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHRvIGhpZGUgZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaGlkZUNsYXNzOiAnX2hpZGUnLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBzYWxlIGhhcyBlbmRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzYWxlRW5kQ2xhc3M6ICdfc2FsZUVuZGVkJyxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgYWN0aXZlIGNvdW50ZG93blxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhY3RpdmVDbGFzczogJ19hY3RpdmUnLFxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRpb25zIGZvciBjb3VudGRvd24gbGFiZWxzXG4gICAgICogQHR5cGUge3tlbmRfaW46IHN0cmluZywgZGF5OiBzdHJpbmcsIGRheXM6IHN0cmluZywgaG91cjogc3RyaW5nLCBob3Vyczogc3RyaW5nLCBtaW51dGU6IHN0cmluZywgbWludXRlczogc3RyaW5nLCBzZWNvbmQ6IHN0cmluZywgc2Vjb25kczogc3RyaW5nfX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICBlbmRfaW46ICdFbmQgaW4nLFxuICAgICAgICBkYXk6ICdEYXknLFxuICAgICAgICBkYXlzOiAnRGF5cycsXG4gICAgICAgIGhvdXI6ICdIb3VyJyxcbiAgICAgICAgaG91cnM6ICdIb3VycycsXG4gICAgICAgIG1pbnV0ZTogJ01pbnV0ZScsXG4gICAgICAgIG1pbnV0ZXM6ICdNaW51dGVzJyxcbiAgICAgICAgc2Vjb25kOiAnU2Vjb25kJyxcbiAgICAgICAgc2Vjb25kczogJ1NlY29uZHMnLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmUgdGhlIGNvdW50ZG93biBzZXR0aW5nc1xuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmRhdGVEYXRhTmFtZSAtIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGNvdW50ZG93biBkYXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaW5WaWV3cG9ydERhdGFOYW1lIC0gRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgaW4gdmlld3BvcnQgdmlzaWJpbGl0eVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnNlbGVjdG9ycyAtIFNlbGVjdG9ycyBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmVuZExhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmRheVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5ob3VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5ob3VyTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMubWludXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZVZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZUxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLnNlY29uZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRlbXBsYXRlIC0gVGVtcGxhdGUgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmhpZGVDbGFzcyAtIENsYXNzIG5hbWUgdG8gaGlkZSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNhbGVFbmRDbGFzcyAtIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgc2FsZSBoYXMgZW5kZWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hY3RpdmVDbGFzcyAtIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgYWN0aXZlIGNvdW50ZG93blxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnRyYW5zbGF0aW9ucyAtIFRyYW5zbGF0aW9ucyBmb3IgY291bnRkb3duIGxhYmVsc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5lbmRfaW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuZGF5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmRheXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuaG91clxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5ob3Vyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5taW51dGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMubWludXRlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5zZWNvbmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuc2Vjb25kc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnR4dFNhbGVDb3VudGRvd25KU09OIC0gSlNPTiBzdHJpbmcgZm9yIHRyYW5zbGF0aW9uc1xuICAgICAqL1xuICAgIGNvbmZpZ3VyZSh7XG4gICAgICAgIGRhdGVEYXRhTmFtZSxcbiAgICAgICAgaW5WaWV3cG9ydERhdGFOYW1lLFxuICAgICAgICBzZWxlY3RvcnMsXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICBoaWRlQ2xhc3MsXG4gICAgICAgIHNhbGVFbmRDbGFzcyxcbiAgICAgICAgYWN0aXZlQ2xhc3MsXG4gICAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgICAgdHh0U2FsZUNvdW50ZG93bkpTT04sXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIGlmIChkYXRlRGF0YU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZURhdGFOYW1lID0gZGF0ZURhdGFOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluVmlld3BvcnREYXRhTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5pblZpZXdwb3J0RGF0YU5hbWUgPSBpblZpZXdwb3J0RGF0YU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0b3JzKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycyA9IHsgLi4udGhpcy5zZWxlY3RvcnMsIC4uLnNlbGVjdG9ycyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlkZUNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVDbGFzcyA9IGhpZGVDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYWxlRW5kQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2FsZUVuZENsYXNzID0gc2FsZUVuZENsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNsYXNzID0gYWN0aXZlQ2xhc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy50cmFuc2xhdGlvbnMsIC4uLnRyYW5zbGF0aW9ucyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR4dFNhbGVDb3VudGRvd25KU09OKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHR4dFNhbGVDb3VudGRvd25KU09OKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFucyA9IE9iamVjdC5rZXlzKGpzb24udHJhbnNsYXRpb25zKS5yZWR1Y2UoKF90cmFucywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3J0S2V5ID0ga2V5LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgICAgICBfdHJhbnNbc2hvcnRLZXldID0ganNvbi50cmFuc2xhdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90cmFucztcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy50cmFuc2xhdGlvbnMsIC4uLnRyYW5zIH07XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGVsZW1lbnQgJiBjb3JyZXNwb25kaW5nIGRhdGUgdG8gdGhlIGNvdW50ZG93biBjb2xsZWN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcbiAgICAgKiBAcGFyYW0ge0RhdGV8bnVsbH0gZGF0ZSAtIFRoZSBjb3VudGRvd24gZGF0ZS4gSWYgbm90IHByb3ZpZGVkLCBpdCB3aWxsIGJlIGV4dHJhY3RlZCBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZSBgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXRlYFxuICAgICAqL1xuICAgIGFkZCgkZWwsIGRhdGUgPSBudWxsKSB7XG4gICAgICAgIGxldCB2YWxpZERhdGUgPSBkYXRlIHx8ICRlbC5kYXRhKHRoaXMuZGF0ZURhdGFOYW1lKTtcbiAgICAgICAgaWYgKHZhbGlkRGF0ZSAmJiB0eXBlb2YgdmFsaWREYXRlID09PSAnc3RyaW5nJykgdmFsaWREYXRlID0gcGFyc2VDb3VudGRvd25EYXRlKHZhbGlkRGF0ZSk7XG4gICAgICAgIGlmICghdmFsaWREYXRlKSByZXR1cm47XG4gICAgICAgICRlbC5kYXRhKHRoaXMuZGF0ZURhdGFOYW1lLCB2YWxpZERhdGUpLmh0bWwodGhpcy50ZW1wbGF0ZSlcbiAgICAgICAgICAgIC5nZXQoKS5mb3JFYWNoKGVsID0+IHRoaXMuZWxlbWVudHMuYWRkKGVsKSk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZSgkZWwpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9ic2VydmUgdGhlIGVsZW1lbnQgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHkgY2hlY2tcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvYnNlcnZlKCRlbCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgLy8gYXNzdW1lIGVsZW1lbnQgaXMgaW4gdmlld3BvcnQgaWYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgJGVsLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2UgaWYgbm90IGFscmVhZHkgY3JlYXRlZFxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKGVudHJ5LnRhcmdldCkuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSwgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXNJbnRlcnNlY3RpbmcnLCBlbnRyeS50YXJnZXQsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICByb290OiBudWxsLCAvLyBEZWZhdWx0cyB0byB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMCwgLy8gQ2FsbGJhY2sgaXMgdHJpZ2dlcmVkIHdoZW4gYW55IHBhcnQgb2YgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLm9ic2VydmVyLm9ic2VydmUoZWwpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RvcCBvYnNlcnZpbmcgdGhlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB1bm9ic2VydmUoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1bm9ic2VydmUnLCBlbCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdmlld3BvcnQgYW5kIHZpc2libGVcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpc1Zpc2libGVJblZpZXdwb3J0KCRlbCkge1xuICAgICAgICByZXR1cm4gJGVsLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUpICYmICRlbC5pcygnOnZpc2libGUnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogc3RhcnQgcnVubmluZyBjb3VudGRvd24gZXZlcnkgc2Vjb25kXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMudGltZXIgJiYgdGhpcy5lbGVtZW50cy5zaXplID4gMCkge1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnJ1bigpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBzdG9wIGNvdW50ZG93blxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RvcCBjb3VudGRvd24nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogcnVubmluZyBjb3VudGRvd24gcHJvY2Vzc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgLy8gY2hlY2sgYW5kIHN0b3AgaWYgZWxlbWVudCBubyBsb25nZXIgZXhpc3RzIGluIERPTVxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlKGVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSAkZWwuZGF0YSh0aGlzLmRhdGVEYXRhTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgY291bnRkb3duIGlmIGVsZW1lbnQgaXMgbm90IGluIHZpZXdwb3J0IG9yIG5vdCB2aXNpYmxlXG4gICAgICAgICAgICBpZiAoIWRhdGUgfHwgIXRoaXMuaXNWaXNpYmxlSW5WaWV3cG9ydCgkZWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAoZGF0ZSA8PSBub3cpIHtcbiAgICAgICAgICAgICAgICAvLyBDb3VudCBkb3duIGRhdGUgaGFzIHBhc3NlZFxuICAgICAgICAgICAgICAgICRlbC5hZGRDbGFzcyh0aGlzLnNhbGVFbmRDbGFzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5kZWxldGUoZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcmVtYWluaW5nIHRpbWUgKGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKVxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGRhdGUgLSBub3c7XG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgICAgICBjb25zdCAkZW5kTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5lbmRMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkZGF5ID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5KTtcbiAgICAgICAgICAgIGNvbnN0ICRkYXlWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmRheVZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRkYXlMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmRheUxhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRob3VyID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91cik7XG4gICAgICAgICAgICBjb25zdCAkaG91clZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91clZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRob3VyTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5ob3VyTGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZSk7XG4gICAgICAgICAgICBjb25zdCAkbWludXRlVmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5taW51dGVWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkbWludXRlTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5taW51dGVMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWNvbmRWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLnNlY29uZFZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWNvbmRMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLnNlY29uZExhYmVsKTtcblxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRpb25zID0geyAuLi50aGlzLnRyYW5zbGF0aW9ucywgLi4uJGVsLmRhdGEodGhpcy50cmFuc2xhdGlvbnNEYXRhTmFtZSkgfTtcblxuICAgICAgICAgICAgJGVsLmFkZENsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgJGVuZExhYmVsLmh0bWwodHJhbnNsYXRpb25zLmVuZF9pbik7XG4gICAgICAgICAgICAkZGF5VmFsdWUudGV4dChkYXlzKTtcbiAgICAgICAgICAgICRkYXlMYWJlbC5odG1sKGRheXMgPT09IDEgPyB0cmFuc2xhdGlvbnMuZGF5IDogdHJhbnNsYXRpb25zLmRheXMpO1xuICAgICAgICAgICAgJGRheS50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCk7XG4gICAgICAgICAgICAkaG91clZhbHVlLnRleHQoaG91cnMpO1xuICAgICAgICAgICAgJGhvdXJMYWJlbC5odG1sKGhvdXJzID09PSAxID8gdHJhbnNsYXRpb25zLmhvdXIgOiB0cmFuc2xhdGlvbnMuaG91cnMpO1xuICAgICAgICAgICAgJGhvdXIudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDAgJiYgaG91cnMgPT09IDApO1xuICAgICAgICAgICAgJG1pbnV0ZVZhbHVlLnRleHQobWludXRlcyk7XG4gICAgICAgICAgICAkbWludXRlTGFiZWwuaHRtbChtaW51dGVzID09PSAxID8gdHJhbnNsYXRpb25zLm1pbnV0ZSA6IHRyYW5zbGF0aW9ucy5taW51dGVzKTtcbiAgICAgICAgICAgICRtaW51dGUudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDAgJiYgaG91cnMgPT09IDAgJiYgbWludXRlcyA9PT0gMCk7XG4gICAgICAgICAgICAkc2Vjb25kVmFsdWUudGV4dChzZWNvbmRzKTtcbiAgICAgICAgICAgICRzZWNvbmRMYWJlbC5odG1sKHNlY29uZHMgPT09IDEgPyB0cmFuc2xhdGlvbnMuc2Vjb25kIDogdHJhbnNsYXRpb25zLnNlY29uZHMpO1xuICAgICAgICAgICAgJHNlY29uZC50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYWxlQ291bnRkb3duO1xuIiwiZXhwb3J0IGNvbnN0IGFyaWFLZXlDb2RlcyA9IHtcbiAgICBSRVRVUk46IDEzLFxuICAgIFNQQUNFOiAzMixcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxufTtcbiIsImltcG9ydCB7IGFyaWFLZXlDb2RlcyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3Qgc2V0Q2hlY2tlZFJhZGlvSXRlbSA9IChpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCkgPT4ge1xuICAgIGl0ZW1Db2xsZWN0aW9uLmVhY2goKGlkeCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCAkaXRlbSA9ICQoaXRlbSk7XG4gICAgICAgIGlmIChpZHggIT09IGl0ZW1JZHgpIHtcbiAgICAgICAgICAgICRpdGVtLmF0dHIoJ2FyaWEtY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgdHJ1ZSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICRpdGVtLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xufTtcblxuY29uc3QgY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uID0gKGxhc3RJdGVtSWR4LCBjdXJyZW50SWR4KSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBjdXJyZW50SWR4ID4gbGFzdEl0ZW1JZHg6IHJldHVybiAwO1xuICAgIGNhc2UgY3VycmVudElkeCA8IDA6IHJldHVybiBsYXN0SXRlbUlkeDtcbiAgICBkZWZhdWx0OiByZXR1cm4gY3VycmVudElkeDtcbiAgICB9XG59O1xuXG5jb25zdCBoYW5kbGVJdGVtS2V5RG93biA9IGl0ZW1Db2xsZWN0aW9uID0+IGUgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZTtcbiAgICBjb25zdCBpdGVtSWR4ID0gaXRlbUNvbGxlY3Rpb24uaW5kZXgoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCBsYXN0Q29sbGVjdGlvbkl0ZW1JZHggPSBpdGVtQ29sbGVjdGlvbi5sZW5ndGggLSAxO1xuXG4gICAgaWYgKE9iamVjdC52YWx1ZXMoYXJpYUtleUNvZGVzKS5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuTEVGVDpcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5VUDoge1xuICAgICAgICBjb25zdCBwcmV2SXRlbUlkeCA9IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbihsYXN0Q29sbGVjdGlvbkl0ZW1JZHgsIGl0ZW1JZHggLSAxKTtcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZ2V0KHByZXZJdGVtSWR4KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4IC0gMSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5SSUdIVDpcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5ET1dOOiB7XG4gICAgICAgIGNvbnN0IG5leHRJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCArIDEpO1xuICAgICAgICBpdGVtQ29sbGVjdGlvbi5nZXQobmV4dEl0ZW1JZHgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggKyAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDogYnJlYWs7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKCRjb250YWluZXIsIGl0ZW1TZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0ICRpdGVtQ29sbGVjdGlvbiA9ICRjb250YWluZXIuZmluZChpdGVtU2VsZWN0b3IpO1xuXG4gICAgJGNvbnRhaW5lci5vbigna2V5ZG93bicsIGl0ZW1TZWxlY3RvciwgaGFuZGxlSXRlbUtleURvd24oJGl0ZW1Db2xsZWN0aW9uKSk7XG59O1xuIiwiLy8gaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4uL3dpc2hsaXN0JzsgLy8gcGFwYXRoZW1lcy1ldmV2YTogZGlzYWJsZWRcbmltcG9ydCB7IGluaXRSYWRpb09wdGlvbnMgfSBmcm9tICcuL2FyaWEnO1xuXG5jb25zdCBvcHRpb25zVHlwZXNNYXAgPSB7XG4gICAgSU5QVVRfRklMRTogJ2lucHV0LWZpbGUnLFxuICAgIElOUFVUX1RFWFQ6ICdpbnB1dC10ZXh0JyxcbiAgICBJTlBVVF9OVU1CRVI6ICdpbnB1dC1udW1iZXInLFxuICAgIElOUFVUX0NIRUNLQk9YOiAnaW5wdXQtY2hlY2tib3gnLFxuICAgIFRFWFRBUkVBOiAndGV4dGFyZWEnLFxuICAgIERBVEU6ICdkYXRlJyxcbiAgICBTRVRfU0VMRUNUOiAnc2V0LXNlbGVjdCcsXG4gICAgU0VUX1JFQ1RBTkdMRTogJ3NldC1yZWN0YW5nbGUnLFxuICAgIFNFVF9SQURJTzogJ3NldC1yYWRpbycsXG4gICAgU1dBVENIOiAnc3dhdGNoJyxcbiAgICBQUk9EVUNUX0xJU1Q6ICdwcm9kdWN0LWxpc3QnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbkNoYW5nZURlY29yYXRvcihhcmVEZWZhdWx0T3B0aW9uc1NldCkge1xuICAgIHJldHVybiAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgaWYgKGFyZURlZmF1bHRPcHRpb25zU2V0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAvLyBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7IC8vIHBhcGF0aGVtZXMtZXZldmE6IGRpc2FibGVkXG4gICAgICAgIHRoaXMuZ2V0VGFiUmVxdWVzdHMoKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKS5lYWNoKChfXywgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcblxuICAgICAgICAgICAgdGhpcy5fbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YWx1ZSwgdHlwZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlKHZhcmlhbnREb21Ob2RlLCB2YXJpYW50VHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHZhcmlhbnRUeXBlKSB7XG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNFVF9SQURJTzpcbiAgICAgICAgY2FzZSBvcHRpb25zVHlwZXNNYXAuU1dBVENIOiB7XG4gICAgICAgICAgICBpbml0UmFkaW9PcHRpb25zKCQodmFyaWFudERvbU5vZGUpLCAnW3R5cGU9cmFkaW9dJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3cgcmFkaW8gYnV0dG9ucyB0byBnZXQgZGVzZWxlY3RlZFxuICAgICAqL1xuICAgIGluaXRSYWRpb0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgcmFkaW8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRyYWRpbyA9ICQocmFkaW8pO1xuXG4gICAgICAgICAgICAvLyBPbmx5IGJpbmQgdG8gY2xpY2sgb25jZVxuICAgICAgICAgICAgaWYgKCRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICRyYWRpby5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkcmFkaW8uZGF0YSgnc3RhdGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJywgJHJhZGlvLnByb3AoJ2NoZWNrZWQnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSA9IHRoaXMuY29udGV4dC5vdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2U7XG4gICAgICAgIGxldCBvdXRPZlN0b2NrTWVzc2FnZSA9IGRhdGEub3V0X29mX3N0b2NrX21lc3NhZ2U7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yICE9PSAnaGlkZV9vcHRpb24nICYmIGJlaGF2aW9yICE9PSAnbGFiZWxfb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgICAgICBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7b3V0T2ZTdG9ja01lc3NhZ2V9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7b3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlfSlgO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcblxuXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBmcmFnbWVudCBpZGVudGlmaWVyIGluIFVSTCByZXF1ZXN0aW5nIGEgc3BlY2lmaWMgdGFiXG4gICAgICovXG4gICAgZ2V0VGFiUmVxdWVzdHMoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjdGFiLScpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJCgnLnRhYnMnKS5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYCk7XG4gICAgICAgICAgICBjb25zdCAkdGFiQ29udGVudCA9ICQoYCR7d2luZG93LmxvY2F0aW9uLmhhc2h9YCk7XG5cbiAgICAgICAgICAgIGlmICgkYWN0aXZlVGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkYWN0aXZlVGFiLmZpbmQoJy50YWInKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYClcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICR0YWJDb250ZW50LmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2luY2UgJHByb2R1Y3RWaWV3IGNhbiBiZSBkeW5hbWljYWxseSBpbnNlcnRlZCB1c2luZyByZW5kZXJfd2l0aCxcbiAgICAgKiBXZSBoYXZlIHRvIHJldHJpZXZlIHRoZSByZXNwZWN0aXZlIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gJHNjb3BlXG4gICAgICovXG4gICAgZ2V0Vmlld01vZGVsKCRzY29wZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICR3ZWlnaHQ6ICQoJy5wcm9kdWN0Vmlldy1pbmZvIFtkYXRhLXByb2R1Y3Qtd2VpZ2h0XScsICRzY29wZSksXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydEZvcm06ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNrdToge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQuc2t1LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBjOiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC51cGMtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC11cGNdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWFudGl0eToge1xuICAgICAgICAgICAgICAgICR0ZXh0OiAkKCcuaW5jcmVtZW50VG90YWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRidWxrUHJpY2luZzogJCgnLnByb2R1Y3RWaWV3LWluZm8tYnVsa1ByaWNpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHdhbGxldEJ1dHRvbnM6ICQoJ1tkYXRhLWFkZC10by1jYXJ0LXdhbGxldC1idXR0b25zXScsICRzY29wZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcHJpY2luZyBlbGVtZW50cyB0aGF0IHdpbGwgc2hvdyB1cCBvbmx5IHdoZW4gdGhlIHByaWNlIGV4aXN0cyBpbiBBUElcbiAgICAgKiBAcGFyYW0gdmlld01vZGVsXG4gICAgICovXG4gICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZXcoZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2VCb3goZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcblxuICAgICAgICBpZiAoZGF0YS5wcmljZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBkYXRhLnByaWNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLndlaWdodCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3ZWlnaHQuaHRtbChkYXRhLndlaWdodC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHZhcmlhdGlvbl9pZCBpZiBpdCBleGlzdHMgZm9yIGFkZGluZyB0byB3aXNobGlzdFxuICAgICAgICBpZiAoZGF0YS52YXJpYW50SWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuc2t1KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KGRhdGEuc2t1KTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS51cGMpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoZGF0YS51cGMpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBzdG9jayB2aWV3IGlzIG9uIChDUCBzZXR0aW5ncylcbiAgICAgICAgaWYgKHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmxlbmd0aCAmJiB0eXBlb2YgZGF0YS5zdG9jayA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdG9jayBjb250YWluZXIgaXMgaGlkZGVuLCBzaG93XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKTtcbiAgICAgICAgdGhpcy51cGRhdGVXYWxsZXRCdXR0b25zVmlldyhkYXRhKTtcblxuICAgICAgICAvLyBJZiBCdWxrIFByaWNpbmcgcmVuZGVyZWQgSFRNTCBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcyAmJiBjb250ZW50KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChkYXRhLmJ1bGtfZGlzY291bnRfcmF0ZXMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZFRvQ2FydFdyYXBwZXIgPSAkKCcjYWRkLXRvLWNhcnQtd3JhcHBlcicpO1xuXG4gICAgICAgIGlmIChhZGRUb0NhcnRXcmFwcGVyLmlzKCc6aGlkZGVuJykgJiYgZGF0YS5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgICAgYWRkVG9DYXJ0V3JhcHBlci5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcblxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cbiAgICAgICAgICAgICAgICBgJHtwcmljZS5wcmljZV9yYW5nZS5taW4ud2l0aF90YXguZm9ybWF0dGVkfSAtICR7cHJpY2UucHJpY2VfcmFuZ2UubWF4LndpdGhfdGF4LmZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aFRheC4kc3Bhbi5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cbiAgICAgICAgICAgICAgICBgJHtwcmljZS5wcmljZV9yYW5nZS5taW4ud2l0aG91dF90YXguZm9ybWF0dGVkfSAtICR7cHJpY2UucHJpY2VfcmFuZ2UubWF4LndpdGhvdXRfdGF4LmZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aG91dFRheC4kc3Bhbi5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBhbiBtZXNzYWdlIGJveCBpZiBhIG1lc3NhZ2UgaXMgcGFzc2VkXG4gICAgICogSGlkZSB0aGUgYm94IGlmIHRoZSBtZXNzYWdlIGlzIGVtcHR5XG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICovXG4gICAgc2hvd01lc3NhZ2VCb3gobWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJyk7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQobWVzc2FnZSk7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXcoZGF0YSkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgIGNvbnN0IGlzVmFsaWRGb3JtID0gdmlld01vZGVsLiRhZGRUb0NhcnRGb3JtWzBdLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgdGhpcy50b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShpc1ZhbGlkRm9ybSAmJiBkYXRhLnB1cmNoYXNhYmxlICYmIGRhdGEuaW5zdG9jayk7XG4gICAgfVxuXG4gICAgdG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkoc2hvdWxkU2hvdykge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG5cbiAgICAgICAgaWYgKHNob3VsZFNob3cpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdhbGxldEJ1dHRvbnMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkge1xuICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcblxuICAgICAgICByZXR1cm4gJHBhcmVudCA/ICRwYXJlbnQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZScpIDogbnVsbDtcbiAgICB9XG5cbiAgICBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgaXMgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiBhIHNlbGVjdCBkcm9wZG93biwgc2VsZWN0IHRoZSBmaXJzdCBvcHRpb24gKE1FUkMtNjM5KVxuICAgICAgICAgICAgaWYgKCRzZWxlY3QudmFsKCkgPT09ICRhdHRyaWJ1dGUuYXR0cigndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzQmFzZSwgeyBvcHRpb25DaGFuZ2VEZWNvcmF0b3IgfSBmcm9tICcuL3Byb2R1Y3QtZGV0YWlscy1iYXNlJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi8uLi9wYXBhdGhlbWVzL2V5ZXZhL2ltYWdlLWdhbGxlcnknOyAvLyBwYXBhdGhlbWVzLWV5ZXZhIGVkaXRlZFxuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBhbGVydE1vZGFsLCBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgeyBpc0VtcHR5LCBpc1BsYWluT2JqZWN0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuaW1wb3J0IHsgbm9ybWFsaXplRm9ybURhdGEgfSBmcm9tICcuL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXJJRSwgY29udmVydEludG9BcnJheSB9IGZyb20gJy4vdXRpbHMvaWUtaGVscGVycyc7XG5pbXBvcnQgYmFubmVyVXRpbHMgZnJvbSAnLi91dGlscy9iYW5uZXItdXRpbHMnO1xuaW1wb3J0IGN1cnJlbmN5U2VsZWN0b3IgZnJvbSAnLi4vZ2xvYmFsL2N1cnJlbmN5LXNlbGVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBQcm9kdWN0RGV0YWlsc0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0ge30pIHtcbiAgICAgICAgc3VwZXIoJHNjb3BlLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydC1pdGVtLWFkZF0gLmxvYWRpbmdPdmVybGF5Jyk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5ID0gbmV3IEltYWdlR2FsbGVyeSgkKCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScsIHRoaXMuJHNjb3BlKSk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LmluaXQoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5RdWFudGl0eUNoYW5nZSgpO1xuICAgICAgICB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlID0gJCgnLnN3YXRjaC1vcHRpb24tbWVzc2FnZScpO1xuICAgICAgICB0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZSA9IHt9O1xuICAgICAgICB0aGlzLnN3YXRjaEdyb3VwSWRMaXN0ID0gJCgnW2lkXj1cInN3YXRjaEdyb3VwXCJdJykubWFwKChfLCBncm91cCkgPT4gJChncm91cCkuYXR0cignaWQnKSk7XG4gICAgICAgIHRoaXMuc3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGVTZWxlY3RvcigpO1xuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKTtcblxuICAgICAgICBpZiAoJGZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRmb3JtLmZpbmQoJ2lucHV0I2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScsICRmb3JtKTtcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RTd2F0Y2hHcm91cCA9ICQoJ1tpZCo9XCJhdHRyaWJ1dGVfc3dhdGNoXCJdJywgJGZvcm0pO1xuICAgICAgICBjb25zdCAkcHJvZHVjdFN3YXRjaExhYmVscyA9ICQoJy5mb3JtLW9wdGlvbi1zd2F0Y2gnLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IHBsYWNlU3dhdGNoTGFiZWxJbWFnZSA9IChfLCBsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG9wdGlvbkltYWdlID0gJCgnLmZvcm0tb3B0aW9uLWV4cGFuZGVkJywgJChsYWJlbCkpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSW1hZ2VXaWR0aCA9ICRvcHRpb25JbWFnZS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICBjb25zdCBleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCA9IDU1O1xuICAgICAgICAgICAgY29uc3QgeyByaWdodCB9ID0gbGFiZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlciA9IHdpbmRvdy5zY3JlZW4ud2lkdGggLSByaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0VmFsdWUgPSBvcHRpb25JbWFnZVdpZHRoIC0gZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXI7XG5cbiAgICAgICAgICAgIGlmIChlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlciA8IChvcHRpb25JbWFnZVdpZHRoICsgZXh0ZW5kZWRPcHRpb25JbWFnZU9mZnNldExlZnQpKSB7XG4gICAgICAgICAgICAgICAgJG9wdGlvbkltYWdlLmNzcygnbGVmdCcsIGAke3NoaWZ0VmFsdWUgPiAwID8gLXNoaWZ0VmFsdWUgOiBzaGlmdFZhbHVlfXB4YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaExhYmVscywgcGxhY2VTd2F0Y2hMYWJlbEltYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuc2hvd1N3YXRjaE5hbWVzKSB7XG4gICAgICAgICAgICB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuXG4gICAgICAgICAgICAkcHJvZHVjdFN3YXRjaEdyb3VwLm9uKCdjaGFuZ2UnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3YXRjaEdyb3VwRWxlbWVudCA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTd2F0Y2hOYW1lT25PcHRpb24oJCh0YXJnZXQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaEdyb3VwLCAoXywgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3YXRjaEdyb3VwRWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuaXMoJzpjaGVja2VkJykpIHRoaXMuc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkKGVsZW1lbnQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRmb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdFRvQ2FydChldmVudCwgJGZvcm1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XG4gICAgICAgIGlmICgoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlQ2FsbGJhY2sgPSBvcHRpb25DaGFuZ2VEZWNvcmF0b3IuY2FsbCh0aGlzLCBoYXNEZWZhdWx0T3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoJHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgYmFubmVyVXRpbHMuZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuc2hvdygpO1xuXG4gICAgICAgIHRoaXMucHJldmlld01vZGFsID0gbW9kYWxGYWN0b3J5KCcjcHJldmlld01vZGFsJylbMF07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBZGRUb0NhcnRWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSA+IC5mb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbCcsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5udW1iZXJzT25seSh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucHJvZHVjdFF1YW50aXR5RXJyb3JNZXNzYWdlLFxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHN0b3JlSW5pdE1lc3NhZ2VzRm9yU3dhdGNoZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN3YXRjaEdyb3VwSWRMaXN0Lmxlbmd0aCAmJiBpc0VtcHR5KHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlKSkge1xuICAgICAgICAgICAgdGhpcy5zd2F0Y2hHcm91cElkTGlzdC5lYWNoKChfLCBzd2F0Y2hHcm91cElkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZVtzd2F0Y2hHcm91cElkXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZVtzd2F0Y2hHcm91cElkXSA9ICQoYCMke3N3YXRjaEdyb3VwSWR9IH4gLnN3YXRjaC1vcHRpb24tbWVzc2FnZWApLnRleHQoKS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFudHNsaXN0ID0gY29udmVydEludG9BcnJheSh2YWx1ZS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0ID0gaW5wdCA9PiBpbnB0LmRhdGFzZXQucHJvZHVjdEF0dHJpYnV0ZVZhbHVlID09PSBjaGVja2VkLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50c2xpc3QuZmlsdGVyKG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQpWzBdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmlubmVyVGV4dC50cmltKCkgOiBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuY2hpbGRyZW5bMF0gOiBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbC50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKSA6ICd1bnNhdGlzZmllZCc7XG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcucHJvZHVjdFZpZXcnKTtcblxuICAgICAgICBpZiAocHJvZHVjdFZhcmlhbnQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50ID0gcHJvZHVjdFZhcmlhbnQgPT09ICd1bnNhdGlzZmllZCcgPyAnJyA6IHByb2R1Y3RWYXJpYW50O1xuICAgICAgICAgICAgaWYgKHZpZXcuYXR0cignZGF0YS1ldmVudC10eXBlJykpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IHZpZXcuZmluZCgnLnByb2R1Y3RWaWV3LXRpdGxlJylbMF0uaW5uZXJUZXh0LnJlcGxhY2UoL1wiL2csICdcXFxcJCYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XG4gICAgICAgICAgICAgICAgY2FyZC5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB3aW5kb3cgaXMgYmVpbmcgcnVuIGluc2lkZSBhbiBpZnJhbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1J1bm5pbmdJbklmcmFtZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEhhbmRsZSBwcm9kdWN0IG9wdGlvbnMgY2hhbmdlc1xuICAgICAqXG4gICAgICovXG4gICAgcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuXG4gICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKCRjaGFuZ2VkT3B0aW9uLmF0dHIoJ3R5cGUnKSA9PT0gJ2ZpbGUnIHx8IHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSwgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgICAgICBiYW5uZXJVdGlscy5kaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudChwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRmb3JtKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZXh0ID0gJGZvcm0ucGFyZW50cygnLnByb2R1Y3RWaWV3JykuZmluZCgnLnByb2R1Y3RWaWV3LWluZm8nKTtcbiAgICAgICAgICAgICAgICBtb2RhbEZhY3RvcnkoJ1tkYXRhLXJldmVhbF0nLCB7ICRjb250ZXh0IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb25Qcm9kdWN0T3B0aW9uc0NoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaWYgdGhpcyBzZXR0aW5nIGlzIGVuYWJsZWQgaW4gUGFnZSBCdWlsZGVyXG4gICAgICogc2hvdyBuYW1lIGZvciBzd2F0Y2ggb3B0aW9uXG4gICAgICovXG4gICAgc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkc3dhdGNoLCAkc3dhdGNoR3JvdXApIHtcbiAgICAgICAgY29uc3Qgc3dhdGNoTmFtZSA9ICRzd2F0Y2guYXR0cignYXJpYS1sYWJlbCcpO1xuICAgICAgICBjb25zdCBhY3RpdmVTd2F0Y2hHcm91cElkID0gJHN3YXRjaEdyb3VwLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScpO1xuICAgICAgICBjb25zdCAkc3dhdGNoT3B0aW9uTWVzc2FnZSA9ICQoYCMke2FjdGl2ZVN3YXRjaEdyb3VwSWR9IH4gLnN3YXRjaC1vcHRpb24tbWVzc2FnZWApO1xuXG4gICAgICAgICQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nLCAkc3dhdGNoR3JvdXApLnRleHQoc3dhdGNoTmFtZSk7XG4gICAgICAgICRzd2F0Y2hPcHRpb25NZXNzYWdlLnRleHQoYCR7dGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2VbYWN0aXZlU3dhdGNoR3JvdXBJZF19ICR7c3dhdGNoTmFtZX1gKTtcbiAgICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkc3dhdGNoT3B0aW9uTWVzc2FnZSwgJ3N0YXR1cycsICdhc3NlcnRpdmUnKTtcbiAgICB9XG5cbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gISEkZWxlbWVudC5wYXJlbnRzKCcucXVpY2tWaWV3JykubGVuZ3RoO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QoaW1hZ2UpKSB7XG4gICAgICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YSxcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC56b29tU2l6ZSB9LFxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgIFNob3VsZCBtYXRjaCB6b29tIHNpemUgdXNlZCBmb3IgZGF0YS16b29tLWltYWdlIGluXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcblxuICAgICAgICAgICAgICAgICAgICBOb3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIGltYWdlIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHNyY3NldFxuXG4gICAgICAgICAgICAgICAgICAgIEFsc28gbm90ZSB0aGF0IGdldFNyY3NldCByZXR1cm5zIGEgc2ltcGxlIHNyYyBzdHJpbmcgd2hlbiBleGFjdGx5IG9uZSBzaXplIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxuICAgICAgICAgICAgICAgIHsgJzF4JzogdGhpcy5jb250ZXh0LnByb2R1Y3RTaXplIH0sXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIGZhbGxiYWNrIGltYWdlIHNpemUgdXNlZCBmb3IgdGhlIG1haW4gcHJvZHVjdCBpbWFnZSBpblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3Qtdmlldy5odG1sXG5cbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcblxuICAgICAgICAgICAgICAgICAgICBBbHNvIG5vdGUgdGhhdCBnZXRTcmNzZXQgcmV0dXJucyBhIHNpbXBsZSBzcmMgc3RyaW5nIHdoZW4gZXhhY3RseSBvbmUgc2l6ZSBpcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoaW1hZ2UuZGF0YSk7XG5cbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnNldEFsdGVybmF0ZUltYWdlKHtcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkucmVzdG9yZUltYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEhhbmRsZSBhY3Rpb24gd2hlbiB0aGUgc2hvcHBlciBjbGlja3Mgb24gKyAvIC0gZm9yIHF1YW50aXR5XG4gICAgICpcbiAgICAgKi9cbiAgICBsaXN0ZW5RdWFudGl0eUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NsaWNrJywgJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gYnV0dG9uJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gdmlld01vZGVsLnF1YW50aXR5LiRpbnB1dDtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWluID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWF4ID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcblxuICAgICAgICAgICAgbGV0IHF0eSA9IGZvcm1zLm51bWJlcnNPbmx5KCRpbnB1dC52YWwoKSkgPyBwYXJzZUludCgkaW5wdXQudmFsKCksIDEwKSA6IHF1YW50aXR5TWluO1xuICAgICAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgICAgICAgaWYgKCR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnKSB7XG4gICAgICAgICAgICAgICAgcXR5ID0gZm9ybXMudmFsaWRhdGVJbmNyZWFzZUFnYWluc3RNYXhCb3VuZGFyeShxdHksIHF1YW50aXR5TWF4KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5ID4gMSkge1xuICAgICAgICAgICAgICAgIHF0eSA9IGZvcm1zLnZhbGlkYXRlRGVjcmVhc2VBZ2FpbnN0TWluQm91bmRhcnkocXR5LCBxdWFudGl0eU1pbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBoaWRkZW4gaW5wdXRcbiAgICAgICAgICAgIHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQudmFsKHF0eSk7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGV4dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiR0ZXh0LnRleHQocXR5KTtcbiAgICAgICAgICAgIC8vIHBlcmZvcm0gdmFsaWRhdGlvbiBhZnRlciB1cGRhdGluZyBwcm9kdWN0IHF1YW50aXR5XG4gICAgICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUHJldmVudCB0cmlnZ2VyaW5nIHF1YW50aXR5IGNoYW5nZSB3aGVuIHByZXNzaW5nIGVudGVyXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdrZXlwcmVzcycsICcuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBldmVudC53aGljaCwgdGhlbiB1c2UgZXZlbnQud2hpY2gsIG90aGVyd2lzZSB1c2UgZXZlbnQua2V5Q29kZVxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XG4gICAgICAgICAgICBpZiAoeCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5vbigna2V5dXAnLCAnLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIGNhcnRcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkKGV2ZW50LnRhcmdldCkpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgLnZhbCh3YWl0TWVzc2FnZSlcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChub3JtYWxpemVGb3JtRGF0YShuZXcgRm9ybURhdGEoZm9ybSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY3VycmVuY3lTZWxlY3RvcihyZXNwb25zZS5kYXRhLmNhcnRfaWQpO1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkYWRkVG9DYXJ0QnRuKSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydE1vZGFsKCkuJHByZU1vZGFsRm9jdXNlZEVsID0gJGFkZFRvQ2FydEJ0bjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPcGVuIHByZXZpZXcgbW9kYWwgYW5kIHVwZGF0ZSBjb250ZW50XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aWV3TW9kYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kbW9kYWwuYWRkQ2xhc3MoJ2FwcGxlLXBheS1zdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRhZGRUb0NhcnRCdG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRwcmVNb2RhbEZvY3VzZWRFbCA9ICRhZGRUb0NhcnRCdG47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0Q29udGVudCh0aGlzLnByZXZpZXdNb2RhbCwgcmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgICAgICAgICAvLyBpZiBubyBtb2RhbCwgcmVkaXJlY3QgdG8gdGhlIGNhcnQgcGFnZVxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbyhyZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5jYXJ0X3VybCB8fCB0aGlzLmNvbnRleHQudXJscy5jYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkYWRkVG9DYXJ0QnRuLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2FydCBjb250ZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhcnRJdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L3ByZXZpZXcnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdDogY2FydEl0ZW1JZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogNCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIG9uQ29tcGxldGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZGlyZWN0IHRvIHVybFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHJlZGlyZWN0VG8odXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUnVubmluZ0luSWZyYW1lKCkgJiYgIXdpbmRvdy5pZnJhbWVTZGspIHtcbiAgICAgICAgICAgIHdpbmRvdy50b3AubG9jYXRpb24gPSB1cmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgY2FydCBjb250ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01vZGFsfSBtb2RhbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXJ0SXRlbUlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZVxuICAgICAqL1xuICAgIHVwZGF0ZUNhcnRDb250ZW50KG1vZGFsLCBjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FydCBjb3VudGVyXG4gICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0UXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIG1vZGFsLiRjb250ZW50KTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0Q291bnRlciA9ICQoJy5uYXZVc2VyLWFjdGlvbiAuY2FydC1jb3VudCcpO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkY2FydFF1YW50aXR5LmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG4gICAgICAgICAgICBjb25zdCAkcHJvbW90aW9uQmFubmVyID0gJCgnW2RhdGEtcHJvbW90aW9uLWJhbm5lcl0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRiYWNrVG9TaG9wcHBpbmdCdG4gPSAkKCcucHJldmlld0NhcnRDaGVja291dCA+IFtkYXRhLXJldmVhbC1jbG9zZV0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRtb2RhbENsb3NlQnRuID0gJCgnI3ByZXZpZXdNb2RhbCA+IC5tb2RhbC1jbG9zZScpO1xuICAgICAgICAgICAgY29uc3QgYmFubmVyVXBkYXRlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdENvbnRhaW5lciA9ICQoJyNtYWluLWNvbnRlbnQgPiAuY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAkcHJvZHVjdENvbnRhaW5lci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheSBwZHAtdXBkYXRlXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgJCgnLmxvYWRpbmdPdmVybGF5LnBkcC11cGRhdGUnLCAkcHJvZHVjdENvbnRhaW5lcikuc2hvdygpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcygnY2FydC1jb3VudC0tcG9zaXRpdmUnKTtcbiAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuXG4gICAgICAgICAgICBpZiAob25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHByb21vdGlvbkJhbm5lci5sZW5ndGggJiYgJGJhY2tUb1Nob3BwcGluZ0J0bi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkYmFja1RvU2hvcHBwaW5nQnRuLm9uKCdjbGljaycsIGJhbm5lclVwZGF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICRtb2RhbENsb3NlQnRuLm9uKCdjbGljaycsIGJhbm5lclVwZGF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBzdXBlci51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKTtcbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdEltYWdlKGRhdGEuaW1hZ2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpIHtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGFJdGVtcyA9ICRmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdERldGFpbHMgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZvcm1EYXRhSXRlbSBvZiBmb3JtRGF0YUl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBmb3JtRGF0YUl0ZW07XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAncHJvZHVjdF9pZCcpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5wcm9kdWN0SWQgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3F0eVtdJykge1xuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLnF1YW50aXR5ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5hbWUubWF0Y2goL2F0dHJpYnV0ZS8pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE9wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IE51bWJlcihuYW1lLm1hdGNoKC9cXGQrL2cpWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5vcHRpb25TZWxlY3Rpb25zID0gcHJvZHVjdERldGFpbHM/Lm9wdGlvblNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBbLi4ucHJvZHVjdERldGFpbHMub3B0aW9uU2VsZWN0aW9ucywgcHJvZHVjdE9wdGlvbl1cbiAgICAgICAgICAgICAgICAgICAgOiBbcHJvZHVjdE9wdGlvbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb25Qcm9kdWN0VXBkYXRlJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDogeyBwcm9kdWN0RGV0YWlscyB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGF0ZVNlbGVjdG9yKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5lYWNoKChpLCBzY29wZSkgPT4ge1xuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGF5cyhkYXRlT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGhTZWxlY3RvciA9IGRhdGVPcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWUkPVwiW21vbnRoXVwiXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheVNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbZGF5XVwiXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHllYXJTZWxlY3RvciA9IGRhdGVPcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWUkPVwiW3llYXJdXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChtb250aFNlbGVjdG9yLnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KHllYXJTZWxlY3Rvci52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgIGxldCBkYXlzSW5Nb250aDtcblxuICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKG1vbnRoKSAmJiAhTnVtYmVyLmlzTmFOKHllYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c0luTW9udGggPSAoKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApIHx8IHllYXIgJSA0MDAgPT09IDApID8gMjkgOiAyODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IGNhc2UgNjogY2FzZSA5OiBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c0luTW9udGggPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c0luTW9udGggPSAzMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGRheSA9IDI5OyBkYXkgPD0gMzE7IGRheSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRheVNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7ZGF5fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5IDw9IGRheXNJbk1vbnRoICYmICFvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheVNlbGVjdG9yLm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oZGF5LCBkYXkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXkgPiBkYXlzSW5Nb250aCAmJiBvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJChzY29wZSkub24oJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZU9wdGlvbiA9IGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsb3Nlc3QgJiYgZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9ZGF0ZV0nKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZU9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXlzKGRhdGVPcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1kYXRlXScpLmZvckVhY2goKGRhdGVPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVEYXlzKGRhdGVPcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBzdHJpbmcgdmFsdWVzIGZyb20gdGhlIGZvcm1EYXRhXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4qL1xuZXhwb3J0IGNvbnN0IGZpbHRlckVtcHR5VmFsdWVzRnJvbUZvcm0gPSBmb3JtRGF0YSA9PiB7XG4gICAgY29uc3QgcmVzID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICh2YWwgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmVzLmFwcGVuZChrZXksIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTY3Mjk5Mi9hamF4LXJlcXVlc3QtZmFpbHMtd2hlbi1zZW5kaW5nLWZvcm1kYXRhLWluY2x1ZGluZy1lbXB0eS1maWxlLWlucHV0LWluLXNhZmFyaVxuICogU2FmYXJpIGJyb3dzZXIgd2l0aCBqcXVlcnkgMy4zLjEgaGFzIGFuIGlzc3VlIHVwbG9hZGluZyBlbXB0eSBmaWxlIHBhcmFtZXRlcnMuIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybSBwYXJhbXNcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSA9IGZvcm1EYXRhID0+IHtcbiAgICBjb25zdCByZXMgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCEodmFsIGluc3RhbmNlb2YgRmlsZSkgfHwgdmFsLm5hbWUgfHwgdmFsLnNpemUpIHtcbiAgICAgICAgICAgICAgICByZXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIGVtcHR5IHN0cmluZyB2YWx1ZXMgYW5kIGVtcHR5IGZpbGVzIGZyb20gdGhlIGZvcm1EYXRhXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVGb3JtRGF0YSA9IGZvcm1EYXRhID0+IGZpbHRlckVtcHR5VmFsdWVzRnJvbUZvcm0oZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSk7XG4iLCJpbXBvcnQgeyBpc0Jyb3dzZXJJRSB9IGZyb20gJy4vaWUtaGVscGVycyc7XG5cbmNvbnN0IGJhbm5lclV0aWxzID0ge1xuICAgIGRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50OiAocHJvZHVjdEF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZSB8fCBpc0Jyb3dzZXJJRSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwcmljZSA9IDA7XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZS5wcmljZV9yYW5nZSkge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRob3V0X3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRoX3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudCgnYmlnY29tbWVyY2UucHJvZHVjdHByaWNlY2hhbmdlJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiBwcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJhbm5lclV0aWxzO1xuIiwiZXhwb3J0IGNvbnN0IGlzQnJvd3NlcklFID0gISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0SW50b0FycmF5ID0gY29sbGVjdGlvbiA9PiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb2xsZWN0aW9uKTtcbiIsImltcG9ydCAnZWFzeXpvb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRnYWxsZXJ5KSB7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZSA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbWFpbl0nKTtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlTmVzdGVkID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKTtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcyA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7fTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRJbWFnZVpvb20oKTtcbiAgICB9XG5cbiAgICBzZXRNYWluSW1hZ2UoaW1nT2JqKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0geyAuLi5pbWdPYmogfTtcblxuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgICAgIHRoaXMuc3dhcE1haW5JbWFnZSgpO1xuICAgIH1cblxuICAgIHNldEFsdGVybmF0ZUltYWdlKGltZ09iaikge1xuICAgICAgICBpZiAoIXRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlZEltYWdlID0ge1xuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybDogdGhpcy4kbWFpbkltYWdlLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgICAgIHpvb21JbWFnZVVybDogdGhpcy4kbWFpbkltYWdlLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpLFxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogdGhpcy4kbWFpbkltYWdlLmZpbmQoJ2ltZycpLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiB0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoaW1nT2JqKTtcbiAgICB9XG5cbiAgICByZXN0b3JlSW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnNhdmVkSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKHRoaXMuc2F2ZWRJbWFnZSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zYXZlZEltYWdlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3SW1hZ2UoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGltZ09iaiA9IHtcbiAgICAgICAgICAgIG1haW5JbWFnZVVybDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybCcpLFxuICAgICAgICAgICAgem9vbUltYWdlVXJsOiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybCcpLFxuICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0JyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgICAgIG1haW5JbWFnZUFsdDogJHRhcmdldC5jaGlsZHJlbigpLmZpcnN0KCkuYXR0cignYWx0JyksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKGltZ09iaik7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN3YXBNYWluSW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0IGlzQnJvd3NlcklFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnVHJpZGVudCcpO1xuXG4gICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5zd2FwKFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2Uuem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuJG1haW5JbWFnZS5hdHRyKHtcbiAgICAgICAgICAgICdkYXRhLXpvb20taW1hZ2UnOiB0aGlzLmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQuYXR0cih7XG4gICAgICAgICAgICBhbHQ6IHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZUFsdCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VBbHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc0Jyb3dzZXJJRSkge1xuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZXNJRSA9IHtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoJHt0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmx9KWAsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1vcmlnaW4nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY29udGFpbicsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQuY3NzKGZhbGxiYWNrU3R5bGVzSUUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgJGltYWdlQ29udGFpbmVyID0gJCgnLnByb2R1Y3RWaWV3LWltYWdlJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICRpbWFnZUNvbnRhaW5lci5oZWlnaHQoKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSAkaW1hZ2VDb250YWluZXIud2lkdGgoKTtcblxuICAgICAgICBjb25zdCAkaW1hZ2UgPSB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuJHpvb207XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICRpbWFnZS5oZWlnaHQoKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAkaW1hZ2Uud2lkdGgoKTtcblxuICAgICAgICBpZiAoaGVpZ2h0IDwgY29udGFpbmVySGVpZ2h0IHx8IHdpZHRoIDwgY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJbWFnZVpvb20oKSB7XG4gICAgICAgIHRoaXMuZWFzeXpvb20gPSB0aGlzLiRtYWluSW1hZ2UuZWFzeVpvb20oe1xuICAgICAgICAgICAgb25TaG93OiAoKSA9PiB0aGlzLmNoZWNrSW1hZ2UoKSxcbiAgICAgICAgICAgIGVycm9yTm90aWNlOiAnJyxcbiAgICAgICAgICAgIGxvYWRpbmdOb3RpY2U6ICcnLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRzZWxlY3RhYmxlSW1hZ2VzLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3SW1hZ2UuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2luaGVyaXRzTG9vc2UiLCJjb25zdHJ1Y3RvciIsIl9zZXRQcm90b3R5cGVPZiIsIm11c3RhY2hlIiwiY3JlYXRlRm9jdXNUcmFwIiwidG9vbHMiLCJDb3JuZXJzdG9uZUltYWdlR2FsbGVyeSIsIkRFRkFVTFRfU1RFUCIsIkltYWdlR2FsbGVyeU1vZGFsIiwiaW1hZ2VHYWxsZXJ5IiwiJGdhbGxlcnkiLCJtb2RhbFRlbXBsYXRlIiwiJGJvZHkiLCIkIiwiY3JlYXRlTW9kYWwiLCJfcHJvdG8iLCJiaW5kRXZlbnRzIiwiX3RoaXMiLCJmaW5kIiwib2ZmIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGEiLCJjdXJyZW50VGFyZ2V0IiwiaW1hZ2VVcmwiLCJkYXRhIiwiaW1hZ2VTcmNzZXQiLCJ6b29tSW1hZ2VVcmwiLCJ2aWRlb0lkIiwic3RlcCIsImNsb3Nlc3QiLCJOdW1iZXIiLCJzcGxpdCIsIm9wZW5Nb2RhbCIsIiRnYWxsZXJ5TW9kYWwiLCJjbG9zZU1vZGFsIiwia2V5IiwiaXMiLCJ0YXJnZXQiLCJzZXRNYWluSW1hZ2UiLCJzZXRNYWluVmlkZW8iLCJ0b3RhbFN0ZXAiLCJzZXRNYWluMzYwIiwicHJldmlvdXMzNjBTdGVwIiwibmV4dDM2MFN0ZXAiLCJwbGF5MzYwIiwicGF1c2UzNjAiLCJkZXN0cm95TW9kYWwiLCJyZW1vdmUiLCJfJG1haW5JbWFnZUxpbmskZ2V0IiwiJG1haW5JbWFnZUxpbmsiLCIkbWFpbkltYWdlIiwiY2xvbmUiLCJyZW1vdmVBdHRyIiwiYXR0ciIsIm1haW5JbWFnZUxpbmtFbGVtZW50IiwiZ2V0Iiwib3V0ZXJIVE1MIiwibmFtZSIsInRleHQiLCJ2aWRlb3NMYWJlbCIsImltYWdlczM2MExhYmVsIiwiaW1hZ2VzTGFiZWwiLCJ2aWRlb3MiLCJtYXAiLCJsaSIsIl8kJGZpbmQkY2xvbmUkZ2V0IiwibGlua0VsZW1lbnQiLCJpbWFnZXMzNjAiLCJfJGVsJGdldCIsIiRlbCIsImltYWdlcyIsImZpbHRlciIsIl8kYSRnZXQiLCJyZW5kZXIiLCJoaWRlIiwiYXBwZW5kVG8iLCJpbml0SW1hZ2Vab29tIiwiZm9jdXNUcmFwIiwiZXNjYXBlRGVhY3RpdmF0ZXMiLCJyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSIsImFsbG93T3V0c2lkZUNsaWNrIiwiX3RoaXMyIiwiJGxhc3RBY3RpdmVFbGVtZW50IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYWRkQ2xhc3MiLCIkbWFpbkltZyIsInNob3ciLCJyZW1vdmVDbGFzcyIsImFjdGl2YXRlIiwic2V0VGltZW91dCIsInRyaWdnZXIiLCJfdGhpczMiLCJoaWRlTWFpblZpZGVvIiwiaGlkZTM2MFVJIiwiZGVhY3RpdmF0ZSIsIm1haW5JbWFnZVVybCIsIm1haW5JbWFnZVNyY3NldCIsInNob3dNYWluSW1hZ2UiLCJzZXRBY3RpdmVUaHVtYiIsInN3YXBNYWluSW1hZ2UiLCJoaWRlTWFpbkltYWdlIiwiX2kiLCIkaW1hZ2VDb250YWluZXIiLCJlYXN5em9vbSIsInN3YXAiLCJpc0Jyb3dzZXJJRSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluY2x1ZGVzIiwiZmFsbGJhY2tTdHlsZXNJRSIsImNzcyIsImNoZWNrSW1hZ2UiLCJjb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJjb250YWluZXJXaWR0aCIsIndpZHRoIiwiJGltYWdlIiwiJHpvb20iLCJfdGhpczQiLCJlYXN5Wm9vbSIsIm9uU2hvdyIsImVycm9yTm90aWNlIiwibG9hZGluZ05vdGljZSIsInNob3dNYWluVmlkZW8iLCJzcmMiLCJzaG93MzYwVUkiLCJzd2FwTWFpbjM2MCIsInNldDM2MEN1cnJlbnRTdGVwIiwiY3VycmVudFN0ZXAiLCJ0b3RhbCIsIl90aGlzNSIsImNsZWFySW50ZXJ2YWwiLCJpbnRlcnZhbDM2MCIsInNldEludGVydmFsIiwiQ2FyZEltYWdlR2FsbGVyeU1vZGFsIiwiX0ltYWdlR2FsbGVyeU1vZGFsMiIsIiRzY29wZSIsIl90ZW1wIiwiX3RoaXM2IiwiX3JlZiIsInByb2R1Y3RJZCIsImdyYXBoUUxUb2tlbiIsInpvb21TaXplIiwicHJvZHVjdFNpemUiLCJ0aHVtYlNpemUiLCJ0eHRWaWRlb3NMYWJlbCIsInR4dEltYWdlczM2MExhYmVsIiwidHh0SW1hZ2VzTGFiZWwiLCJsb2FkaW5nTW9kYWxUZW1wbGF0ZSIsIl9wcm90bzIiLCJvcGVuTG9hZGluZ01vZGFsIiwiX29wZW5Mb2FkaW5nTW9kYWwiLCJfY2FsbGVlIiwiX2NvbnRleHQiLCJsb2FkTW9kYWwiLCJfbG9hZE1vZGFsIiwiX2NhbGxlZTIiLCJtYWluSW1hZ2UiLCJfY29udGV4dDIiLCJmZXRjaFByb2R1Y3QiLCJpbWFnZSIsImlzRGVmYXVsdCIsImdldFNyY3NldCIsInVybFRlbXBsYXRlIiwiem9vbVVybCIsInVybCIsInRodW1ibmFpbFVybCIsImFsdFRleHQiLCJ2aWRlbyIsIlVSTCIsInNlYXJjaFBhcmFtcyIsImh0bWwiLCJfdGVtcDIiLCJfdGhpczciLCJfcmVmMiIsIl9yZWYyJGZpcnN0VmlkZW8iLCJmaXJzdFZpZGVvIiwiX3JlZjIkZmlyc3QiLCJmaXJzdDM2MCIsImZpcnN0IiwiX2ZldGNoUHJvZHVjdCIsIl9jYWxsZWUzIiwiX3RoaXMkem9vbVNpemUkc3BsaXQkIiwiem9vbVdpZHRoIiwiem9vbUhlaWdodCIsIl90aGlzJHByb2R1Y3RTaXplJHNwbCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsIl90aGlzJHRodW1iU2l6ZSRzcGxpdCIsInRodW1iV2lkdGgiLCJ0aHVtYkhlaWdodCIsInJlc3AiLCJfcmVmMyIsIl9jb250ZXh0MyIsImFqYXgiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsInNpdGUiLCJwcm9kdWN0IiwiZWRnZXMiLCJfcmVmNCIsIm5vZGUiLCJfcmVmNSIsImN1c3RvbUZpZWxkcyIsIl9yZWY2IiwiX3JlZjciLCJJbWFnZUdhbGxlcnkiLCJfQ29ybmVyc3RvbmVJbWFnZUdhbGwiLCJfdGhpczgiLCJpbWFnZUdhbGxlcnlNb2RhbCIsIl9wcm90bzMiLCJkZWZhdWx0IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jcmVhdGVDbGFzcyIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwidXRpbHMiLCJDb3JuZXJzdG9uZVByb2R1Y3REZXRhaWxzIiwiYWxlcnRNb2RhbCIsInNob3dBbGVydE1vZGFsIiwiTW9kYWxFdmVudHMiLCJmaXhGb3JtRWxlbWVudFVuaXF1ZUlkcyIsImN1cnJlbmN5Rm9ybWF0IiwiU2FsZUNvdW50ZG93biIsIkRFQlVHX0xPRyIsIm5vcm1hbGl6ZU9wdGlvblN0cmluZyIsInMiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJlcXVhbE9wdGlvblN0cmluZyIsImIiLCJhcmVBcnJheXNFcXVhbFVub3JkZXJlZCIsImFycjEiLCJhcnIyIiwiX2FycjEiLCJzbGljZSIsInNvcnQiLCJfYXJyMiIsImV2ZXJ5IiwiaW5kZXgiLCJjYWNoZWRTZXR0aW5ncyIsImhhbmRsZVByb21pc2VzV2l0aExpbWl0IiwiX3giLCJfeDIiLCJfaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQiLCJfY2FsbGVlNyIsInByb21pc2VzIiwibGltaXQiLCJyZXN1bHRzIiwiZXhlY3V0aW5nIiwiX2xvb3AiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIl9jb250ZXh0OCIsInByb21pc2UiLCJfY29udGV4dDciLCJyZXN1bHQiLCJzcGxpY2UiLCJpbmRleE9mIiwicHVzaCIsInJhY2UiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3JlZ2VuZXJhdG9yVmFsdWVzIiwiYWxsIiwiUHJvZHVjdERldGFpbHMiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGUiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbmNhdCIsIm1vZGlmaWVyc01vZGFsT3ZlcmxheVRlbXBsYXRlIiwibW9kaWZpZXJzTW9kYWxUZW1wbGF0ZSIsIm9wdGlvblRvb2x0aXBUZW1wbGF0ZSIsIm9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlIiwib3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlIiwib3B0aW9uUHJpY2VUZW1wbGF0ZSIsIm9wdGlvblByaWNlUGxhaW5UZW1wbGF0ZSIsInN1YnRvdGFsVGVtcGxhdGUiLCJzdW1tYXJ5VGVtcGxhdGUiLCJzaG93UHJpY2VGcmVlIiwic2hvd1ByaWNlWmVybyIsImFkZFRvQ2FydFdyYXBwZXJTZWxlY3RvciIsImZldGNoT3B0aW9uUHJpY2VDYWNoZSIsImNvbnNvbGUiLCJsb2ciLCJfY29uc29sZSIsIiRmb3JtIiwiJGNob29zZU9wdGlvbnNCdG4iLCJ2YWwiLCJjdXN0b21GaWVsZHNUZXh0IiwicGFyc2UiLCJwcm9kdWN0T3B0aW9ucyIsInByb2R1Y3RPcHRpb25zVGV4dCIsImVuYWJsZU1vZGlmaWVyc01vZGFsIiwiY3JlYXRlTW9kaWZpZXJzTW9kYWwiLCJiaW5kUHJvZHVjdEVkaXRFdmVudHMiLCJiaW5kTW9kYWxEZXN0cm95IiwiaW5pdE9wdGlvblN0ZXBwZXIiLCJzeW5jUHJvZHVjdENhcmRRdHkiLCJpbml0U2FsZUNvdW50ZG93biIsImdldFZpZXdNb2RlbCIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTIiLCJfbGVuMiIsIl9rZXkyIiwibW9kZWwiLCIkdXBkYXRlUHJvZHVjdFdyYXBwZXIiLCJ1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyIsIiRidG4iLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJwcm9wIiwiYWRkUHJvZHVjdFRvQ2FydCIsImZvcm0iLCJlZGl0UHJvZHVjdEluQ2FydCIsImVkaXRQcm9kdWN0VG9DYXJ0IiwiX2VkaXRQcm9kdWN0VG9DYXJ0IiwiJHNhdmVCdG4iLCJvcmlnaW5hbEJ0blZhbCIsIndhaXRNZXNzYWdlIiwiZm9ybURhdGEiLCJzdWNjZXNzIiwiZmFpbHVyZSIsIml0ZW1JZCIsIm5ld1F0eSIsIl90Iiwid2luZG93IiwiRm9ybURhdGEiLCJ1bmRlZmluZWQiLCIkb3ZlcmxheSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwibmV4dCIsInJlc3BvbnNlIiwiY29udGV4dCIsImVkaXRQcm9kdWN0Q2FsbGJhY2siLCJlcnJvclRleHQiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hlY2tJc1F1aWNrVmlld0NoaWxkIiwiJHByZU1vZGFsRm9jdXNlZEVsIiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJlZGl0UHJvZHVjdFF1YW50aXR5IiwidXBkYXRlQ2FydEl0ZW1RdWFudGl0eSIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiZmFpbCIsIl94aHIiLCJfc3RhdHVzIiwiZXJyb3IiLCJfeDMiLCJfeDQiLCJyZWplY3QiLCJhcGkiLCJjYXJ0IiwiaXRlbVVwZGF0ZSIsImVyciIsIl9yZXNwb25zZSRkYXRhIiwic3RhdHVzIiwiZXJyb3JzIiwiam9pbiIsInN1Ym1pdEV2ZW50IiwiRXZlbnQiLCJvbmUiLCJjbG9zZWQiLCJlYWNoIiwiZm9ybUZpZWxkRWwiLCIkZm9ybUZpZWxkIiwiJGRlYyIsIiRpbmMiLCIkY2hlY2siLCJpbml0IiwiJHJhZGlvcyIsIiRjaGVja2VkIiwiJGZpcnN0Iiwic2VsZWN0IiwiaW5jIiwiZXEiLCJub3QiLCJoYXNDbGFzcyIsIiR1bmNoZWNrIiwiJG5vbmUiLCJjYXJkUXR5IiwiJHF0eSIsInF0eSIsInR4dFNhbGVDb3VudGRvd25KU09OIiwiZW5kX2luIiwiY29uZmlndXJlIiwiYWRkIiwidXBkYXRlVmlldyIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTMiLCJfbGVuMyIsIl9rZXkzIiwidXBkYXRlU2FsZVBlcmNlbnQiLCJ1cGRhdGVTaGlwcGluZ0NvdW50ZG93biIsIm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXciLCJ1cGRhdGVNb2RpZmllcnNWaWV3IiwiJHByb2R1Y3RPcHRpb25zRWwiLCIkbW9kaWZpZXJzTW9kYWxPcHRpb25zIiwiJG1vZGlmaWVyc01vZGFsU3VidG90YWwiLCJzaG93T3B0aW9uSWRzIiwic3RhY2tlZFNob3dPcHRpb25JZHMiLCJub25lU2FsZXMiLCJjdXN0b21GaWVsZE5vbmVTYWxlcyIsInNob3dPcHRpb25QcmljZXMiLCJ1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbCIsIl9kYXRhJHByaWNlIiwiX2RhdGEkcHJpY2U0IiwiJGRpdiIsIiRzcGFuIiwic2FsZVBlcmNlbnQiLCJwcmljZSIsIndpdGhvdXRfdGF4IiwiX2RhdGEkcHJpY2UyIiwiX2RhdGEkcHJpY2UzIiwicnJwX3dpdGhvdXRfdGF4IiwiTWF0aCIsInJvdW5kIiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJ3aXRoX3RheCIsIl9kYXRhJHByaWNlNSIsIl9kYXRhJHByaWNlNiIsInJycF93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4IiwiJHNoaXBwaW5nQ291bnRkb3duIiwidXBkYXRlQ2FydENvbnRlbnQiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGU0IiwiY2xvc2VNb2RpZmllcnNNb2RhbCIsInByZXZpZXdNb2RhbCIsIl9sZW40IiwiX2tleTQiLCJzaG93UHJvZHVjdEltYWdlIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlNSIsIl9sZW41IiwiX2tleTUiLCIkbW9kaWZpZXJzTW9kYWxJbWciLCJfdGhpcyRpbWFnZUdhbGxlcnkkY3UiLCJjdXJyZW50SW1hZ2UiLCJlbCIsImZvcm1hdFByaWNlIiwicGx1c1N5bWJvbCIsImRpc3BsYXkiLCJjdXJyZW5jeV90b2tlbiIsImN1cnJlbmN5Iiwic3ltYm9sIiwiY3VycmVuY3lfbG9jYXRpb24iLCJzeW1ib2xQbGFjZW1lbnQiLCJkZWNpbWFsX3Rva2VuIiwiZGVjaW1hbFRva2VuIiwiZGVjaW1hbF9wbGFjZXMiLCJkZWNpbWFsUGxhY2VzIiwidGhvdXNhbmRzX3Rva2VuIiwidGhvdXNhbmRzVG9rZW4iLCJmb3JtYXR0ZWQiLCJmaW5kT3B0aW9uVmFsdWUiLCJvcHRpb25OYW1lIiwidmFsdWVOYW1lIiwiX2hpZGVJZk9wdGlvbiR2YWx1ZXMiLCJoaWRlSWZPcHRpb24iLCJkaXNwbGF5X25hbWUiLCJ2YWx1ZXMiLCJsYWJlbCIsIm9wdGlvbklkIiwiaWQiLCJ2YWx1ZUlkIiwiJGF0dHJpYnV0ZU1lc3NhZ2VXcmFwcGVyIiwiJGFkZFRvQ2FydFdyYXBwZXIiLCIkbW9kaWZpZXJzTW9kYWwiLCJ0eHRDb250aW51ZSIsInByb2R1Y3RUaXRsZSIsIiRtb2RpZmllcnNNb2RhbENvbXBsZXRlIiwiJG1vZGlmaWVyc01vZGFsQ2xvc2UiLCIkbW9kaWZpZXJzTW9kYWxDb250aW51ZSIsIiRtb2RpZmllcnNNb2RhbEJhY2siLCJhcHBlbmQiLCJnb0JhY2tTdGVwIiwiaW52YWxpZElucHV0cyIsInJlZHVjZSIsIl9pbnZhbGlkSW5wdXRzIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiZm9yRWFjaCIsInZhbGlkYXRlVmFyaWFudE9wdGlvbnMiLCJpbml0TW9kaWZpZXJzVmlldyIsIm9wZW5Nb2RpZmllcnNNb2RhbCIsImJlZm9yZSIsImlnbm9yZUFQSUNhbGwiLCJfdXBkYXRlTW9kaWZpZXJzVmlldyIsIl9yZWYzJGlnbm9yZUFQSUNhbGwiLCIkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5IiwiJG1vZGlmaWVyc01vZGFsVGl0bGUiLCIkbW9kaWZpZXJzTW9kYWxGb290ZXIiLCJjdXJyZW50T3B0aW9uSWQiLCJjdXJyZW50R3JvdXBOYW1lIiwiY3VycmVudEdyb3VwT3B0aW9uSWRzIiwiaGlkZU9wdGlvbklkcyIsImhpZGVPcHRpb25WYWx1ZXMiLCJ0b29sdGlwcyIsInRvb2x0aXBIZWFkaW5ncyIsIm9wdGlvblJlbmFtZXMiLCJfdGhpcyRwcm9kdWN0T3B0aW9ucyQiLCJ0aXRsZSIsImdyb3VwVG9vbHRpcCIsIiR0b29sdGlwIiwiZW1wdHkiLCJmcm9tIiwiZW50cmllcyIsInN0YXRlIiwib3B0aW9uIiwiaGlkZU9wdGlvbiIsImdyb3VwTmFtZSIsImdyb3VwT3B0aW9uSWRzIiwiaXNOb25lUmFkaW9DaGVja2VkIiwiJGZpbGUiLCJpc0ZpbGVTaG93biIsIiRkYXRlIiwiaXNPcHRpb25hbERhdGVTaG93biIsInJlcXVpcmVkIiwiJHNlbGVjdCIsImlzT3B0aW9uYWxTZWxlY3RTaG93biIsIiR0ZXh0IiwiaXNPcHRpb25hbFRleHRTaG93biIsImZvcm1WYWx1ZSIsIkZpbGUiLCJjdXN0b21GaWVsZCIsImhpZGVJZk1hdGNoIiwiY3VzdG9tRmllbGRNYXRjaEhpZGVJZiIsImdyb3VwTWF0Y2giLCJjdXN0b21GaWVsZE1hdGNoR3JvdXAiLCJfT2JqZWN0JGFzc2lnbiIsInRvb2x0aXBNYXRjaCIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZCIsIl90b29sdGlwcyRvcHRpb24kaWQyIiwiYXNzaWduIiwidG9vbHRpcCIsInZhbHVlVG9vbHRpcHMiLCJ2YWx1ZVRvb2x0aXBIZWFkaW5ncyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyIsIm5ld05hbWUiLCJjdXN0b21GaWVsZE1hdGNoUmVuYW1lIiwidmFsdWVOb25TYWxlcyIsImN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlIiwiXyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAiLCJzaG93T3B0aW9uVG9vbHRpcHMiLCJwb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMiLCJkaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlciIsInNob3dTdW1tYXJ5IiwiX3g1IiwiaW52YWxpZCIsInBvcCIsIiRvcHRpb24iLCJtYXRjaCIsImhpZGVJZk9wdGlvbnMiLCJrdiIsIl9yZWY4IiwidHJpbSIsIl9yZWY5IiwidGhlbk9wdGlvbnMiLCJfcmVmMCIsIl9yZWYxIiwiX3JlZjEwIiwiX3RoaXM3JGZpbmRPcHRpb25WYWx1IiwiZ2V0QWxsIiwiX3JlZjExIiwiX3JlZjEyIiwiX2hpZGVPcHRpb25WYWx1ZSIsIl9yZWYxMyIsIl90aGlzOCRwcm9kdWN0T3B0aW9ucyIsIl9yZWYxNCIsIl9yZWYxNSIsIl90aGlzOSIsIl9tJDEkc3BsaXQkbWFwIiwiX3JlZjE2IiwiX3JlZjE3IiwiX3JlZjE4IiwiX3RoaXMwIiwiX20kMSRzcGxpdCRtYXAyIiwiaGVhZGluZyIsIl9yZWYxOSIsIl9yZWYyMCIsIl9yZWYyMSIsIl9rdiRzcGxpdCRtYXAiLCJ2YWx1ZUxhYmVsIiwiX29wdGlvbiR2YWx1ZXMkZmluZCIsIl9yZWYyMiIsImZldGNoU2V0dGluZ3MiLCJfZmV0Y2hTZXR0aW5ncyIsImN1cnJlbmN5Q29kZSIsImFjdGl2ZV9jdXJyZW5jeV9jb2RlIiwiZGVmYXVsdEN1cnJlbmN5Q29kZSIsImRlZmF1bHRfY3VycmVuY3lfY29kZSIsInNldHRpbmdzIiwiZmV0Y2hPcHRpb25QcmljZXMiLCJfZmV0Y2hPcHRpb25QcmljZXMiLCJfY2FsbGVlNCIsInNob3dPcHRpb25zIiwiX3RoaXMxIiwic2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyIsIl95aWVsZCRoYW5kbGVQcm9taXNlcyIsInByZXYiLCJzZWxlY3Rpb25zIiwiX2NvbnRleHQ0IiwiX3JlZjIzIiwib3B0aW9uRW50aXR5SWQiLCJ2YWx1ZUVudGl0eUlkIiwiX3JlZjI0IiwiZmV0Y2hPcHRpb25QcmljZSIsIl9hcnJheUxpa2VUb0FycmF5Iiwic2VsZWN0aW9uIiwicHJpY2VzV2l0aFRheCIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aCIsIl9wcmV2JHByaWNlc1dpdGhUYXgiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGgyIiwiX3ByZXYkcHJpY2VzV2l0aFRheDIiLCJub25TYWxlUHJpY2VXaXRoVGF4IiwiYmFzZVByaWNlIiwiYWRqdXN0ZWRQcmljZXNXaXRoVGF4Iiwibm9uU2FsZVByaWNlVmFsdWUiLCJwcmljZXNXaXRob3V0VGF4IiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoMyIsIl9wcmV2JHByaWNlc1dpdGhvdXRUYSIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aDQiLCJfcHJldiRwcmljZXNXaXRob3V0VGEyIiwibm9uU2FsZVByaWNlV2l0aG91dFRheCIsImFkanVzdGVkUHJpY2VzV2l0aG91dFRheCIsIl94NiIsIl94NyIsIl9mZXRjaE9wdGlvblByaWNlIiwiX2NhbGxlZTUiLCJvcHRpb25WYWx1ZUlkcyIsImNhY2hlS2V5IiwiX2NvbnRleHQ1IiwiX3g4IiwiX3RoaXMxMCIsIl9yZWYyNSIsIl9yZWYyNSQiLCIkbGFiZWwiLCJhZnRlciIsInByZXBlbmQiLCJfcmVmMjYiLCJ2YWx1ZVRvb2x0aXAiLCIkdmFsdWUiLCJfcmVmMjciLCJfcmVmMjgiLCJfcmVmMjkiLCJ2YWx1ZVRvb2x0aXBIZWFkaW5nIiwiJHRvb2x0aXBIZWFkaW5nIiwic2hvd25PcHRpb25zIiwiX3JlZjMwIiwiZGVmYXVsdE9wdGlvbnMiLCJfcmVmMzEiLCJwcmVmaWxsIiwic2VsZWN0ZWRfZGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsIl9yZWYzMiIsInNlbGVjdGVkIiwiY2hlY2tib3hPcHRpb25zIiwiX3JlZjMzIiwibm9WYWx1ZSIsImZpbGVPcHRpb25zIiwiX3JlZjM0IiwicGFydGlhbCIsImRhdGVPcHRpb25zIiwiX3JlZjM1IiwiZHJvcGRvd25PcHRpb25zIiwiX3JlZjM2IiwidGV4dE9wdGlvbnMiLCJfcmVmMzciLCJfcmVmMzgiLCJfdmFsdWVzJGZpbmQiLCJfcmVmMzkiLCJfcmVmNDAiLCJjaGVja2VkIiwiX3JlZjQxIiwicGFyYW1zIiwicHJlbG9hZGVyIiwicHJpY2VIdG1sIiwicHJpY2VUZXh0Iiwic3VidG90YWxIdG1sIiwiJHByaWNlIiwiJG9sZCIsIiRwbGFjZWhvbGRlciIsIl9zaG93T3B0aW9uUHJpY2VzIiwiX2NhbGxlZTYiLCJpZ25vcmVVcGRhdGVTdWJ0b3RhbCIsIl90aGlzMTEiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwkIiwic2hvd1ByaWNlIiwiX2NvbnRleHQ2IiwiX2lkIiwiX3JlZjQyIiwidHh0UHJpY2VGcmVlIiwiX3JlZjQzIiwiX2FkanVzdGVkUHJpY2VzV2l0aFRhIiwiX2FkanVzdGVkUHJpY2VzV2l0aFRhMiIsIl9hZGp1c3RlZFByaWNlc1dpdGhvdSIsIl9hZGp1c3RlZFByaWNlc1dpdGhvdTIiLCJ0YXgiLCJwZHAiLCJwcmljZVdpdGhUYXhWYWx1ZSIsInByaWNlV2l0aFRheCIsIm5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSIsInByaWNlV2l0aG91dFRheFZhbHVlIiwicHJpY2VXaXRob3V0VGF4Iiwibm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlIiwiX25vbmVTYWxlcyRvcHRpb25JZCIsIm5vblNhbGUiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UzIiwiX2FkanVzdGVkUHJpY2VzV2l0aFRhMyIsImV4Y2hhbmdlZE5vblNhbGUiLCJleGNoYW5nZVJhdGUiLCJwcmljZVZhbHVlIiwic2hvd09wdGlvblN1YnRvdGFsIiwiX3g5IiwiX3gwIiwiX3gxIiwiX3gxMCIsIl94MTEiLCJfeDEyIiwiX3Byb2R1Y3QkcHJpY2VzV2l0aFRhIiwiX3Byb2R1Y3QkcHJpY2VzV2l0aG91IiwidHh0U3VidG90YWwiLCJ0eHRSZXZpZXdTZWxlY3Rpb25zIiwib3B0aW9ucyIsIiRzdWJ0b3RhbCIsIl9vcHRpb24kdmFsdWVzIiwiXyRtb2RpZmllcnNNb2RhbE9wdGlvIiwiZGF5U3RyIiwibW9udGhTdHIiLCJ5ZWFyU3RyIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInZhbHVlU3RyIiwiX3JlZjQ0Iiwib3B0aW9uRWxQcmljZUh0bWwiLCJzdW1tYXJ5SHRtbCIsInBhcnNlRGF0ZVRpbWVTdHJpbmciLCJzdHIiLCJyZWdleCIsInNob3J0TW9udGgiLCJzaG9ydERheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJzaG9ydEhvdXIiLCJzaG9ydE1pbnV0ZSIsInNpbmdsZVRpbWVDb21wb25lbnQiLCJ0elNpZ24iLCJ0ekhvdXJPZmZzZXQiLCJ0ek1pbnV0ZU9mZnNldCIsInBhcnNlSW50Iiwic2lnbiIsInR6SG91ciIsInR6TWludXRlIiwidGltZXpvbmUiLCJwYXJzZUNvdW50ZG93bkRhdGUiLCJwYXJzZWREYXRlIiwiZGF0ZSIsInNldEZ1bGxZZWFyIiwic2V0TW9udGgiLCJzZXREYXRlIiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsImdldEhvdXJzIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJnZXREYXRlIiwiZWxlbWVudHMiLCJTZXQiLCJ0aW1lciIsIm9ic2VydmVyIiwiZGF0ZURhdGFOYW1lIiwiaW5WaWV3cG9ydERhdGFOYW1lIiwidHJhbnNsYXRpb25zRGF0YU5hbWUiLCJzZWxlY3RvcnMiLCJlbmRMYWJlbCIsImRheVZhbHVlIiwiZGF5TGFiZWwiLCJob3VyVmFsdWUiLCJob3VyTGFiZWwiLCJtaW51dGVWYWx1ZSIsIm1pbnV0ZUxhYmVsIiwic2Vjb25kVmFsdWUiLCJzZWNvbmRMYWJlbCIsInRlbXBsYXRlIiwiaGlkZUNsYXNzIiwic2FsZUVuZENsYXNzIiwiYWN0aXZlQ2xhc3MiLCJ0cmFuc2xhdGlvbnMiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImpzb24iLCJ0cmFucyIsImtleXMiLCJfdHJhbnMiLCJzaG9ydEtleSIsInZhbGlkRGF0ZSIsIm9ic2VydmUiLCJzdGFydCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJ1bm9ic2VydmUiLCJpc1Zpc2libGVJblZpZXdwb3J0Iiwic2l6ZSIsInJ1biIsInN0b3AiLCJkaXNjb25uZWN0IiwiYm9keSIsImNvbnRhaW5zIiwibm93IiwiZGlmZiIsImZsb29yIiwiJGVuZExhYmVsIiwiJGRheSIsIiRkYXlWYWx1ZSIsIiRkYXlMYWJlbCIsIiRob3VyIiwiJGhvdXJWYWx1ZSIsIiRob3VyTGFiZWwiLCIkbWludXRlIiwiJG1pbnV0ZVZhbHVlIiwiJG1pbnV0ZUxhYmVsIiwiJHNlY29uZCIsIiRzZWNvbmRWYWx1ZSIsIiRzZWNvbmRMYWJlbCIsInRvZ2dsZUNsYXNzIiwiYXJpYUtleUNvZGVzIiwiUkVUVVJOIiwiU1BBQ0UiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJzZXRDaGVja2VkUmFkaW9JdGVtIiwiaXRlbUNvbGxlY3Rpb24iLCJpdGVtSWR4IiwiaWR4IiwiaXRlbSIsIiRpdGVtIiwiY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uIiwibGFzdEl0ZW1JZHgiLCJjdXJyZW50SWR4IiwiaGFuZGxlSXRlbUtleURvd24iLCJrZXlDb2RlIiwibGFzdENvbGxlY3Rpb25JdGVtSWR4Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldkl0ZW1JZHgiLCJuZXh0SXRlbUlkeCIsIiRjb250YWluZXIiLCJpdGVtU2VsZWN0b3IiLCIkaXRlbUNvbGxlY3Rpb24iLCJpbml0UmFkaW9PcHRpb25zIiwib3B0aW9uc1R5cGVzTWFwIiwiSU5QVVRfRklMRSIsIklOUFVUX1RFWFQiLCJJTlBVVF9OVU1CRVIiLCJJTlBVVF9DSEVDS0JPWCIsIlRFWFRBUkVBIiwiREFURSIsIlNFVF9TRUxFQ1QiLCJTRVRfUkVDVEFOR0xFIiwiU0VUX1JBRElPIiwiU1dBVENIIiwiUFJPRFVDVF9MSVNUIiwib3B0aW9uQ2hhbmdlRGVjb3JhdG9yIiwiYXJlRGVmYXVsdE9wdGlvbnNTZXQiLCJhdHRyaWJ1dGVzRGF0YSIsImF0dHJpYnV0ZXNDb250ZW50IiwiY29udGVudCIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwiUHJvZHVjdERldGFpbHNCYXNlIiwiaW5pdFJhZGlvQXR0cmlidXRlcyIsImdldFRhYlJlcXVlc3RzIiwiX18iLCJfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSIsInZhcmlhbnREb21Ob2RlIiwidmFyaWFudFR5cGUiLCJyYWRpbyIsIiRyYWRpbyIsImJlaGF2aW9yIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsImVuYWJsZUF0dHJpYnV0ZSIsImRpc2FibGVBdHRyaWJ1dGUiLCJsb2NhdGlvbiIsImhhc2giLCIkYWN0aXZlVGFiIiwiaGFzIiwiJHRhYkNvbnRlbnQiLCJzaWJsaW5ncyIsInJycFdpdGhUYXgiLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwicHJpY2VMYWJlbCIsIiR3ZWlnaHQiLCIkaW5jcmVtZW50cyIsIiRhZGRUb0NhcnQiLCIkYWRkVG9DYXJ0Rm9ybSIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGlucHV0Iiwic2t1IiwidXBjIiwicXVhbnRpdHkiLCIkYnVsa1ByaWNpbmciLCIkd2FsbGV0QnV0dG9ucyIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwidmlld01vZGVsIiwic2hvd01lc3NhZ2VCb3giLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwidXBkYXRlUHJpY2VWaWV3Iiwid2VpZ2h0IiwidmFyaWFudElkIiwidXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXciLCJidWxrX2Rpc2NvdW50X3JhdGVzIiwiYWRkVG9DYXJ0V3JhcHBlciIsInVwZGF0ZWRQcmljZSIsInByaWNlX3JhbmdlIiwibWluIiwibWF4Iiwic2F2ZWQiLCJtZXNzYWdlIiwiJG1lc3NhZ2VCb3giLCJpc1ZhbGlkRm9ybSIsInRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5Iiwic2hvdWxkU2hvdyIsImdldEF0dHJpYnV0ZVR5cGUiLCJlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJtb2RhbEZhY3RvcnkiLCJub2QiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiZm9ybXMiLCJub3JtYWxpemVGb3JtRGF0YSIsImNvbnZlcnRJbnRvQXJyYXkiLCJiYW5uZXJVdGlscyIsImN1cnJlbmN5U2VsZWN0b3IiLCJfUHJvZHVjdERldGFpbHNCYXNlIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwibGlzdGVuUXVhbnRpdHlDaGFuZ2UiLCIkc3dhdGNoT3B0aW9uTWVzc2FnZSIsInN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZSIsInN3YXRjaEdyb3VwSWRMaXN0IiwiZ3JvdXAiLCJzdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzIiwidXBkYXRlRGF0ZVNlbGVjdG9yIiwidXBkYXRlUHJvZHVjdERldGFpbHNEYXRhIiwiYWRkVG9DYXJ0VmFsaWRhdG9yIiwic3VibWl0IiwidGFwIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJoYXNEZWZhdWx0T3B0aW9ucyIsIiRwcm9kdWN0U3dhdGNoR3JvdXAiLCIkcHJvZHVjdFN3YXRjaExhYmVscyIsInBsYWNlU3dhdGNoTGFiZWxJbWFnZSIsIiRvcHRpb25JbWFnZSIsIm9wdGlvbkltYWdlV2lkdGgiLCJvdXRlcldpZHRoIiwiZXh0ZW5kZWRPcHRpb25JbWFnZU9mZnNldExlZnQiLCJfbGFiZWwkZ2V0Qm91bmRpbmdDbGkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyaWdodCIsImVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyIiwic2NyZWVuIiwic2hpZnRWYWx1ZSIsInJlZ2lzdGVyQWRkVG9DYXJ0VmFsaWRhdGlvbiIsInNob3dTd2F0Y2hOYW1lcyIsInN3YXRjaEdyb3VwRWxlbWVudCIsInBhcmVudE5vZGUiLCJzaG93U3dhdGNoTmFtZU9uT3B0aW9uIiwiZWxlbWVudCIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZCIsInNldFByb2R1Y3RWYXJpYW50IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiX2lzRW1wdHkiLCIkcHJvZHVjdElkIiwib3B0aW9uQ2hhbmdlQ2FsbGJhY2siLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsImRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50Iiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwibnVtYmVyc09ubHkiLCJlcnJvck1lc3NhZ2UiLCJwcm9kdWN0UXVhbnRpdHlFcnJvck1lc3NhZ2UiLCJzd2F0Y2hHcm91cElkIiwidW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyIsIm9wdGlvbkxhYmVsIiwiY2hpbGRyZW4iLCJvcHRpb25UaXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJpc1NhdGlzZmllZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRlU3RyaW5nIiwieCIsImdldFNlbGVjdGVkT3B0aW9uTGFiZWwiLCJwcm9kdWN0VmFyaWFudHNsaXN0IiwibWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCIsImlucHQiLCJkYXRhc2V0IiwicHJvZHVjdEF0dHJpYnV0ZVZhbHVlIiwibGFiZWxzIiwicHJvZHVjdFZhcmlhbnQiLCJ2aWV3IiwicHJvZHVjdE5hbWUiLCJjYXJkIiwiaXNSdW5uaW5nSW5JZnJhbWUiLCJzZWxmIiwidG9wIiwiJGNoYW5nZWRPcHRpb24iLCJwYXJlbnRzIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50IiwiJGNvbnRleHQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGV0YWlsIiwiJHN3YXRjaCIsIiRzd2F0Y2hHcm91cCIsInN3YXRjaE5hbWUiLCJhY3RpdmVTd2F0Y2hHcm91cElkIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwicm9sZSIsIl9pc1BsYWluT2JqZWN0Iiwic2V0QWx0ZXJuYXRlSW1hZ2UiLCJyZXN0b3JlSW1hZ2UiLCIkdGFyZ2V0IiwicXVhbnRpdHlNaW4iLCJxdWFudGl0eU1heCIsInZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkiLCJ2YWxpZGF0ZURlY3JlYXNlQWdhaW5zdE1pbkJvdW5kYXJ5Iiwid2hpY2giLCIkYWRkVG9DYXJ0QnRuIiwiaXRlbUFkZCIsImNhcnRfaWQiLCJvcGVuIiwiQXBwbGVQYXlTZXNzaW9uIiwiJG1vZGFsIiwiY2FydF9pdGVtIiwicmVkaXJlY3RUbyIsImNhcnRfdXJsIiwidXJscyIsImdldENhcnRDb250ZW50IiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCJzdWdnZXN0IiwiY29uZmlnIiwic3VnZ2VzdGlvbnMiLCJnZXRDb250ZW50IiwiaWZyYW1lU2RrIiwibW9kYWwiLCJ1cGRhdGVDb250ZW50IiwiJGNhcnRRdWFudGl0eSIsIiRjb250ZW50IiwiJGNhcnRDb3VudGVyIiwiJHByb21vdGlvbkJhbm5lciIsIiRiYWNrVG9TaG9wcHBpbmdCdG4iLCIkbW9kYWxDbG9zZUJ0biIsImJhbm5lclVwZGF0ZUhhbmRsZXIiLCIkcHJvZHVjdENvbnRhaW5lciIsInJlbG9hZCIsImZvcm1EYXRhSXRlbXMiLCJzZXJpYWxpemVBcnJheSIsInByb2R1Y3REZXRhaWxzIiwiZm9ybURhdGFJdGVtIiwicHJvZHVjdE9wdGlvbiIsIm9wdGlvblZhbHVlIiwib3B0aW9uU2VsZWN0aW9ucyIsInNjb3BlIiwidXBkYXRlRGF5cyIsImRhdGVPcHRpb24iLCJtb250aFNlbGVjdG9yIiwiZGF5U2VsZWN0b3IiLCJ5ZWFyU2VsZWN0b3IiLCJkYXlzSW5Nb250aCIsImlzTmFOIiwiT3B0aW9uIiwiZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSIsInJlcyIsIl9zdGVwJHZhbHVlIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsImV2dCIsImFtb3VudCIsImRvY3VtZW50TW9kZSIsImNvbGxlY3Rpb24iLCIkbWFpbkltYWdlTmVzdGVkIiwiJHNlbGVjdGFibGVJbWFnZXMiLCJzZXRJbWFnZVpvb20iLCJpbWdPYmoiLCJzYXZlZEltYWdlIiwiJHNlbGVjdGVkVGh1bWIiLCJzZWxlY3ROZXdJbWFnZSIsIm1haW5JbWFnZUFsdCIsImFsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9