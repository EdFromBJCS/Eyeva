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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX3Byb2R1Y3QtZGV0YWlsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEs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RTtJQUNuQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUE5RyxNQUFBLENBRURDLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUM2cUMsaUJBQWlCLENBQUN6cUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM4cUMsY0FBYyxDQUFDanVDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN0RSxDQUFDO0VBQUEsT0FBQXVQLFlBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvaW1hZ2UtZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2V5ZXZhL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL3NhbGUtY291bnRkb3duLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9yYWRpb09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy1iYXNlLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvYmFubmVyLXV0aWxzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9pZS1oZWxwZXJzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Vhc3l6b29tJztcbmltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5pbXBvcnQgeyBjcmVhdGVGb2N1c1RyYXAgfSBmcm9tICdmb2N1cy10cmFwJztcbmltcG9ydCB7IHRvb2xzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IGZyb20gJy4uLy4uL3RoZW1lL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeSc7XG5cbmNvbnN0IERFRkFVTFRfU1RFUCA9IDM2MDtcbmNsYXNzIEltYWdlR2FsbGVyeU1vZGFsIHtcbiAgICBtb2RhbFRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWNsb3NlXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQ2xvc2VcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2U+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCI+Q2xvc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Zz48dXNlIGhyZWY9XCIjaWNvbi14bWFyay1sYXJnZVwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLWVhc3l6b29tXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi1pbWctY29udGFpbmVyXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLW1haW4taW1nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbWFpbkltYWdlTGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tMzYwXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MCBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwLWltZy1jb250YWluZXJcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLWltZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLTM2MC1jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1wcmV2aW91c1wiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcHJldmlvdXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LWxlZnQtbG9uZ1wiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1wbGF5XCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wbGF5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1wbGF5XCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5QbGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcGF1c2VcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBhdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1wYXVzZVwiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UGF1c2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1uZXh0XCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1uZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1hcnJvdy1yaWdodC1sb25nXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLXZpZGVvXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllciBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYXp5bG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM5MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGl0bGVcIj57e25hbWV9fTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I3ZpZGVvcy5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdmlkZW9zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3t2aWRlb3NMYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjdmlkZW9zfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L3ZpZGVvc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ey92aWRlb3MubGVuZ3RofX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzMzYwLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC0zNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbGFiZWxcIj57e2ltYWdlczM2MExhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXMzNjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXMzNjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzMzYwLmxlbmd0aH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlcy5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtaW1hZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3tpbWFnZXNMYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlcy5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ltYWdlR2FsbGVyeT99IGltYWdlR2FsbGVyeVxuICAgICAqIEBwYXJhbSB7alF1ZXJ5P30gJGdhbGxlcnlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbWFnZUdhbGxlcnkgPSBudWxsLCAkZ2FsbGVyeSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkgPSBpbWFnZUdhbGxlcnk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnkgPSAkZ2FsbGVyeTtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcblxuICAgICAgICBpZiAoaW1hZ2VHYWxsZXJ5ICYmICRnYWxsZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy4kZ2FsbGVyeSkge1xuICAgICAgICAgICAgLy8gb3BlbiBtb2RhbCB3aGVuIGNsaWNrIG9uIHZpZGVvLCAzNjAgdmlldywgb3IgbW9yZSBpbWFnZSB0aHVtYm5haWxzXG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5XG4gICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tbW9yZV0nKVxuICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJylcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljaycpXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVNyY3NldCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcCA9ICRhLmNsb3Nlc3QoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdJykubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHZpZGVvSWQsIHN0ZXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBjbGljayBjbG9zZSBidXR0b25cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2VdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNsb3NlIG1vZGFsIHdoZW4gcHJlc3MgRXNjYXBlIGtleVxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwub24oJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBjbGljayBvdXRzaWRlIChvdmVybGF5KVxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZ2FsbGVyeU1vZGFsLmlzKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpbWFnZSB0aHVtYm5haWxzXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW1dJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdmlkZW8gdGh1bWJuYWlsc1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8odmlkZW9JZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIDM2MCBpbWFnZSB0aHVtYm5haWxzXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcl0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB0b3RhbFN0ZXAgPSAkYS5kYXRhKCdleWV2YUltYWdlR2FsbGVyeU1vZGFsSXRlbVJvdGF0b3InKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbjM2MChcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgdG90YWxTdGVwLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXByZXZpb3VzXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXMzNjBTdGVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1uZXh0XScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMubmV4dDM2MFN0ZXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBsYXldJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5MzYwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wYXVzZV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnBhdXNlMzYwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3lNb2RhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGdhbGxlcnlNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsID0gJCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0ICRtYWluSW1hZ2VMaW5rID0gdGhpcy5pbWFnZUdhbGxlcnkuJG1haW5JbWFnZS5maW5kKCdhJykuY2xvbmUoKTtcbiAgICAgICAgJG1haW5JbWFnZUxpbmsuZmluZCgnaW1nJykucmVtb3ZlQXR0cignZGF0YS16b29tLWltYWdlJykuYXR0cignZGF0YS1leWV2YS1nYWxsZXJ5LW1vZGFsLW1haW4taW1hZ2UnLCAnJyk7XG5cbiAgICAgICAgY29uc3QgbWFpbkltYWdlTGlua0VsZW1lbnQgPSAkbWFpbkltYWdlTGluay5nZXQoMCk/Lm91dGVySFRNTDtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuJGdhbGxlcnkuY2xvc2VzdCgnLnByb2R1Y3RWaWV3JykuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC10aXRsZV0nKS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IHZpZGVvc0xhYmVsID0gdGhpcy4kZ2FsbGVyeS5kYXRhKCd2aWRlb3NMYWJlbCcpIHx8ICdWaWRlb3MnO1xuICAgICAgICBjb25zdCBpbWFnZXMzNjBMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgnaW1hZ2VzMzYwTGFiZWwnKSB8fCAnMzYwIFZpZXcnO1xuICAgICAgICBjb25zdCBpbWFnZXNMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgnaW1hZ2VzTGFiZWwnKSB8fCAnUHJvZHVjdCBJbWFnZXMnO1xuXG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHRoaXMuJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvXScpLmdldCgpLm1hcChsaSA9PiAoe1xuICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICQobGkpLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5jbG9uZSgpLmdldCgwKT8ub3V0ZXJIVE1MLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwID0gdGhpcy4kZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXScpLmdldCgpLm1hcChsaSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGxpKS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJykuY2xvbmUoKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyk7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUDtcbiAgICAgICAgICAgICRlbC5yZW1vdmVBdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktaXRlbScpLmF0dHIoJ2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3InLCBzdGVwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogJGVsLmdldCgwKT8ub3V0ZXJIVE1MLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy4kZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJykuZ2V0KClcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAkKGEpLmNsb3Nlc3QoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tbW9yZV0nKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRhID0gJChhKS5jbG9uZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktaXRlbScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbScsICcnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiAkYS5nZXQoMCk/Lm91dGVySFRNTCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RhbFRlbXBsYXRlLCB7XG4gICAgICAgICAgICBtYWluSW1hZ2VMaW5rRWxlbWVudCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB2aWRlb3NMYWJlbCxcbiAgICAgICAgICAgIGltYWdlczM2MExhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzTGFiZWwsXG4gICAgICAgICAgICB2aWRlb3MsXG4gICAgICAgICAgICBpbWFnZXMzNjAsXG4gICAgICAgICAgICBpbWFnZXMsXG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuaGlkZSgpLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuXG4gICAgICAgIHRoaXMuaW5pdEltYWdlWm9vbSgpO1xuXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGdhbGxlcnlNb2RhbC5nZXQoMCksIHtcbiAgICAgICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuTW9kYWwoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHZpZGVvSWQsIHRvdGFsU3RlcCkge1xuICAgICAgICB0aGlzLiRsYXN0QWN0aXZlRWxlbWVudCA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoJ19nYWxsZXJ5TW9kYWwtb3BlbmVkJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VHYWxsZXJ5KSB7XG4gICAgICAgICAgICBjb25zdCAkbWFpbkltZyA9IHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuZmluZCgnaW1nJyk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZShcbiAgICAgICAgICAgICAgICAkbWFpbkltZy5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAkbWFpbkltZy5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS4kbWFpbkltYWdlLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWRlb0lkKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5WaWRlbyh2aWRlb0lkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0b3RhbFN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbjM2MChpbWFnZVVybCwgaW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5hZGRDbGFzcygnX29wZW5pbmcnKS5zaG93KCkucmVtb3ZlQ2xhc3MoJ19vcGVuaW5nJyk7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5hZGRDbGFzcygnX2Nsb3NpbmcnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVNYWluVmlkZW8oKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZTM2MFVJKCk7XG4gICAgICAgICAgICB0aGlzLiRib2R5LnJlbW92ZUNsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLnJlbW92ZUNsYXNzKCdfY2xvc2luZycpLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRsYXN0QWN0aXZlRWxlbWVudCkgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBzZXRNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCkge1xuICAgICAgICB0aGlzLmhpZGVNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcbiAgICAgICAgdGhpcy5zaG93TWFpbkltYWdlKCk7XG5cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYihtYWluSW1hZ2VVcmwpO1xuICAgICAgICB0aGlzLnN3YXBNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCk7XG4gICAgfVxuXG4gICAgc2hvd01haW5JbWFnZSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJykuc2hvdygpO1xuICAgIH1cblxuICAgIGhpZGVNYWluSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYihtYWluSW1hZ2VVcmwsIHZpZGVvSWQpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBhKSA9PlxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybCAmJiAkKGEpLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJykgPT09IG1haW5JbWFnZVVybFxuICAgICAgICAgICAgICAgIHx8IHZpZGVvSWQgJiYgJChhKS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpID09PSB2aWRlb0lkKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBzd2FwTWFpbkltYWdlKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwpIHtcbiAgICAgICAgY29uc3QgJGltYWdlQ29udGFpbmVyID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJyk7XG4gICAgICAgIGNvbnN0ICRhID0gJGltYWdlQ29udGFpbmVyLmZpbmQoJ2EnKTtcbiAgICAgICAgY29uc3QgJG1haW5JbWFnZSA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1nYWxsZXJ5LW1vZGFsLW1haW4taW1hZ2VdJyk7XG5cbiAgICAgICAgJGltYWdlQ29udGFpbmVyLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScsIHpvb21JbWFnZVVybCk7XG4gICAgICAgICRhLmF0dHIoJ2hyZWYnLCB6b29tSW1hZ2VVcmwpO1xuICAgICAgICAkbWFpbkltYWdlLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybCkuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KTtcblxuICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuc3dhcChcbiAgICAgICAgICAgIG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgIHpvb21JbWFnZVVybCxcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpc0Jyb3dzZXJJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ1RyaWRlbnQnKTtcbiAgICAgICAgaWYgKGlzQnJvd3NlcklFKSB7XG4gICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlc0lFID0ge1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgke21haW5JbWFnZVVybH0pYCxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbic6ICdjb250ZW50LWJveCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb250YWluJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1tYWluLWltYWdlXScpLmNzcyhmYWxsYmFja1N0eWxlc0lFKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0ICRpbWFnZUNvbnRhaW5lciA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLW1haW4taW1nLWNvbnRhaW5lcl0nKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gJGltYWdlQ29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICRpbWFnZUNvbnRhaW5lci53aWR0aCgpO1xuXG4gICAgICAgIGNvbnN0ICRpbWFnZSA9IHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS4kem9vbTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gJGltYWdlLmhlaWdodCgpO1xuICAgICAgICBjb25zdCB3aWR0aCA9ICRpbWFnZS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChoZWlnaHQgPCBjb250YWluZXJIZWlnaHQgfHwgd2lkdGggPCBjb250YWluZXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRJbWFnZVpvb20oKSB7XG4gICAgICAgIHRoaXMuZWFzeXpvb20gPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5lYXN5Wm9vbSh7XG4gICAgICAgICAgICBvblNob3c6ICgpID0+IHRoaXMuY2hlY2tJbWFnZSgpLFxuICAgICAgICAgICAgZXJyb3JOb3RpY2U6ICcnLFxuICAgICAgICAgICAgbG9hZGluZ05vdGljZTogJycsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllcl0nKS5zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZU1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLmhpZGUoKVxuICAgICAgICAgICAgLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsICcnKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8odmlkZW9JZCkge1xuICAgICAgICB0aGlzLmhpZGVNYWluSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcbiAgICAgICAgdGhpcy5zaG93TWFpblZpZGVvKCk7XG5cbiAgICAgICAgY29uc3Qgc3JjID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/cmVmPTAmYXV0b3BsYXk9MWA7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllcl0nKS5zaG93KCkuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgc3JjKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYihudWxsLCB2aWRlb0lkKTtcbiAgICB9XG5cbiAgICBzZXRNYWluMzYwKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCkge1xuICAgICAgICB0aGlzLmhpZGVNYWluSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5oaWRlTWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2hvdzM2MFVJKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbjM2MChtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApO1xuICAgIH1cblxuICAgIHN3YXBNYWluMzYwKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtaW1nLWNvbnRhaW5lcl0gaW1nJylcbiAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpXG4gICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScsIHpvb21JbWFnZVVybCk7XG4gICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoMCwgdG90YWxTdGVwKTtcbiAgICB9XG5cbiAgICBzaG93MzYwVUkoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZTM2MFVJKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykuaGlkZSgpO1xuICAgICAgICB0aGlzLnBhdXNlMzYwKCk7XG4gICAgfVxuXG4gICAgc2V0MzYwQ3VycmVudFN0ZXAoY3VycmVudFN0ZXAsIHRvdGFsU3RlcCA9IERFRkFVTFRfU1RFUCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJylcbiAgICAgICAgICAgIC5jc3MoJy0taW1hZ2UtMzYwLWN1cnJlbnQnLCBjdXJyZW50U3RlcClcbiAgICAgICAgICAgIC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJywgdG90YWxTdGVwKTtcbiAgICB9XG5cbiAgICBuZXh0MzYwU3RlcCgpIHtcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpO1xuICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLWN1cnJlbnQnKSkgfHwgMDtcbiAgICAgICAgY29uc3QgdG90YWwgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtc3RlcHMnKSkgfHwgREVGQVVMVF9TVEVQO1xuXG4gICAgICAgIGlmIChzdGVwIDwgdG90YWwgLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKHN0ZXAgKyAxLCB0b3RhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKDAsIHRvdGFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXZpb3VzMzYwU3RlcCgpIHtcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpO1xuICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLWN1cnJlbnQnKSkgfHwgMDtcbiAgICAgICAgY29uc3QgdG90YWwgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtc3RlcHMnKSkgfHwgREVGQVVMVF9TVEVQO1xuXG4gICAgICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcChzdGVwIC0gMSwgdG90YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcCh0b3RhbCAtIDEsIHRvdGFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkzNjAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbDM2MCk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwzNjAgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHQzNjBTdGVwKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5hZGRDbGFzcygnX3BsYXlpbmcnKTtcbiAgICB9XG5cbiAgICBwYXVzZTM2MCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsMzYwKTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLnJlbW92ZUNsYXNzKCdfcGxheWluZycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmRJbWFnZUdhbGxlcnlNb2RhbCBleHRlbmRzIEltYWdlR2FsbGVyeU1vZGFsIHtcbiAgICBsb2FkaW5nTW9kYWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1vdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IGV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sb2FkaW5nXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAkc2NvcGUsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb2R1Y3RJZCxcbiAgICAgICAgICAgIGdyYXBoUUxUb2tlbixcbiAgICAgICAgICAgIHpvb21TaXplLFxuICAgICAgICAgICAgcHJvZHVjdFNpemUsXG4gICAgICAgICAgICB0aHVtYlNpemUsXG4gICAgICAgICAgICB0eHRWaWRlb3NMYWJlbCxcbiAgICAgICAgICAgIHR4dEltYWdlczM2MExhYmVsLFxuICAgICAgICAgICAgdHh0SW1hZ2VzTGFiZWwsXG4gICAgICAgIH0gPSB7fSxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuICAgICAgICB0aGlzLmdyYXBoUUxUb2tlbiA9IGdyYXBoUUxUb2tlbjtcbiAgICAgICAgdGhpcy56b29tU2l6ZSA9IHpvb21TaXplO1xuICAgICAgICB0aGlzLnByb2R1Y3RTaXplID0gcHJvZHVjdFNpemU7XG4gICAgICAgIHRoaXMudGh1bWJTaXplID0gdGh1bWJTaXplO1xuICAgICAgICB0aGlzLnR4dFZpZGVvc0xhYmVsID0gdHh0VmlkZW9zTGFiZWw7XG4gICAgICAgIHRoaXMudHh0SW1hZ2VzMzYwTGFiZWwgPSB0eHRJbWFnZXMzNjBMYWJlbDtcbiAgICAgICAgdGhpcy50eHRJbWFnZXNMYWJlbCA9IHR4dEltYWdlc0xhYmVsO1xuICAgIH1cblxuICAgIGFzeW5jIG9wZW5Mb2FkaW5nTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveU1vZGFsKCk7XG5cbiAgICAgICAgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRib2R5LmFkZENsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgbG9hZGluZyBtb2RhbFxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLmxvYWRpbmdNb2RhbFRlbXBsYXRlKSk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5oaWRlKCkuYXBwZW5kVG8odGhpcy4kYm9keSk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5hZGRDbGFzcygnX29wZW5pbmcnKS5zaG93KCkucmVtb3ZlQ2xhc3MoJ19vcGVuaW5nJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZE1vZGFsKCkge1xuICAgICAgICAvLyBmZXRjaCBwcm9kdWN0IGRhdGFcbiAgICAgICAgYXdhaXQgdGhpcy5mZXRjaFByb2R1Y3QoKTtcblxuICAgICAgICBjb25zdCBtYWluSW1hZ2UgPSB0aGlzLmltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmlzRGVmYXVsdCkgfHwgdGhpcy5pbWFnZXNbMF07XG4gICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChtYWluSW1hZ2UudXJsVGVtcGxhdGUpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZUxpbmtFbGVtZW50ID0gYFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiJHttYWluSW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsPVwiJHttYWluSW1hZ2UudXJsfVwiXG4gICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQ9XCIke21haW5JbWFnZVNyY3NldH1cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7bWFpbkltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgID48aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBzcmM9XCIke21haW5JbWFnZS50aHVtYm5haWxVcmx9XCIgZGF0YS1zcmNzZXQ9XCIke21haW5JbWFnZVNyY3NldH1cIiBkYXRhLXNpemVzPVwiYXV0b1wiIGFsdD1cIiR7bWFpbkltYWdlLmFsdFRleHR9XCIgLz48L2E+YDtcblxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy4kc2NvcGUuZmluZCgnLmNhcmQtdGl0bGUnKS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IHZpZGVvc0xhYmVsID0gdGhpcy50eHRWaWRlb3NMYWJlbCB8fCAnVmlkZW9zJztcbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwTGFiZWwgPSB0aGlzLnR4dEltYWdlczM2MExhYmVsIHx8ICczNjAgVmlldyc7XG4gICAgICAgIGNvbnN0IGltYWdlc0xhYmVsID0gdGhpcy50eHRJbWFnZXNMYWJlbCB8fCAnUHJvZHVjdCBJbWFnZXMnO1xuXG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHRoaXMudmlkZW9zLm1hcCh2aWRlbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHZpZGVvLnVybCk7XG4gICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3YnKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFZpZXctdGh1bWJuYWlsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7dmlkZW8udXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZD1cIiR7dmlkZW9JZH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvJHt2aWRlb0lkfS9kZWZhdWx0LmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgaHJlZj1cIiNpY29uLXBsYXktc29saWRcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPmAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbWFnZXMzNjAgPSB0aGlzLmltYWdlczM2MC5tYXAoKGltYWdlVXJsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFZpZXctdGh1bWJuYWlsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3I9XCIke3N0ZXB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsPVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQ9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVVybH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIGhyZWY9XCIjaWNvbi0zNjBcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPmAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoaW1hZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmNzZXQgPSB0b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoaW1hZ2UudXJsVGVtcGxhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogYFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kdWN0Vmlldy10aHVtYm5haWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHtpbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmw9XCIke2ltYWdlLnVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQ9XCIke2ltYWdlU3Jjc2V0fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke2ltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkXCIgc3JjPVwiJHtpbWFnZS50aHVtYm5haWxVcmx9XCIgZGF0YS1zcmNzZXQ9XCIke2ltYWdlU3Jjc2V0fVwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgYWx0PVwiJHtpbWFnZS5hbHRUZXh0fVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgJGdhbGxlcnlNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kYWxUZW1wbGF0ZSwge1xuICAgICAgICAgICAgbWFpbkltYWdlTGlua0VsZW1lbnQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmlkZW9zTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXMzNjBMYWJlbCxcbiAgICAgICAgICAgIGltYWdlc0xhYmVsLFxuICAgICAgICAgICAgdmlkZW9zLFxuICAgICAgICAgICAgaW1hZ2VzMzYwLFxuICAgICAgICAgICAgaW1hZ2VzLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gcmVwbGFjZSBsb2FkaW5nIG1vZGFsIHdpdGggdGhlIGFjdHVhbCBtb2RhbFxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuaHRtbCgkZ2FsbGVyeU1vZGFsLmh0bWwoKSk7XG5cbiAgICAgICAgdGhpcy5pbml0SW1hZ2Vab29tKCk7XG5cbiAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAodGhpcy4kZ2FsbGVyeU1vZGFsLmdldCgwKSwge1xuICAgICAgICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IGZhbHNlLFxuICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIG9wZW5Nb2RhbCh7XG4gICAgICAgIGZpcnN0VmlkZW8gPSBmYWxzZSxcbiAgICAgICAgZmlyc3QzNjAgPSBmYWxzZSxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5vcGVuTG9hZGluZ01vZGFsKCk7XG5cbiAgICAgICAgdGhpcy5sb2FkTW9kYWwoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChmaXJzdFZpZGVvKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykuZmlyc3QoKS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKHZpZGVvSWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmlyc3QzNjApIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3JdJykuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1haW4zNjAoXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnZXlldmFJbWFnZUdhbGxlcnlNb2RhbEl0ZW1Sb3RhdG9yJyksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuYWN0aXZhdGUoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2VdJykudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoUHJvZHVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzIHx8IHRoaXMudmlkZW9zIHx8IHRoaXMuaW1hZ2VzMzYwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgW3pvb21XaWR0aCwgem9vbUhlaWdodF0gPSB0aGlzLnpvb21TaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XG4gICAgICAgIGNvbnN0IFtpbWFnZVdpZHRoLCBpbWFnZUhlaWdodF0gPSB0aGlzLnByb2R1Y3RTaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XG4gICAgICAgIGNvbnN0IFt0aHVtYldpZHRoLCB0aHVtYkhlaWdodF0gPSB0aGlzLnRodW1iU2l6ZS5zcGxpdCgneCcpLm1hcChOdW1iZXIpO1xuXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkoXG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdElkOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHpvb21XaWR0aDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR6b29tSGVpZ2h0OiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW1hZ2VIZWlnaHQ6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGh1bWJXaWR0aDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aHVtYkhlaWdodDogSW50IVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QoZW50aXR5SWQ6ICRwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsKHdpZHRoOiAkaW1hZ2VXaWR0aCwgaGVpZ2h0OiAkaW1hZ2VIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbFVybDogdXJsKHdpZHRoOiAkdGh1bWJXaWR0aCwgaGVpZ2h0OiAkdGh1bWJIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb21Vcmw6IHVybCh3aWR0aDogJHpvb21XaWR0aCwgaGVpZ2h0OiAkem9vbUhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsVGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzKG5hbWVzOiBbXCJfX0AzNjBcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvZHVjdElkLFxuICAgICAgICAgICAgICAgICAgICB6b29tV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHpvb21IZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0aHVtYldpZHRoLFxuICAgICAgICAgICAgICAgICAgICB0aHVtYkhlaWdodCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5ncmFwaFFMVG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBbaW1hZ2VzLCB2aWRlb3MsIGltYWdlczM2MF0gPSBbXG4gICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LmltYWdlcy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiBub2RlKSxcbiAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QudmlkZW9zLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IG5vZGUpLFxuICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdC5jdXN0b21GaWVsZHMuZWRnZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IG5vZGUgfSkgPT4gbm9kZS5uYW1lID09PSAnX19AMzYwJylcbiAgICAgICAgICAgICAgICAubWFwKCh7IG5vZGUgfSkgPT4gbm9kZS52YWx1ZSksXG4gICAgICAgIF07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7YWx0VGV4dDogc3RyaW5nLCBpc0RlZmF1bHQ6IGJvb2xlYW4sIHVybD86IHN0cmluZywgdGh1bWJuYWlsVXJsPzogc3RyaW5nLCB6b29tVXJsPzogc3RyaW5nLCB1cmxUZW1wbGF0ZT86IHN0cmluZ30+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7dGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmd9Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmlkZW9zID0gdmlkZW9zO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmltYWdlczM2MCA9IGltYWdlczM2MDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSBleHRlbmRzIENvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZ2FsbGVyeSkge1xuICAgICAgICBzdXBlcigkZ2FsbGVyeSk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5TW9kYWwgPSBuZXcgSW1hZ2VHYWxsZXJ5TW9kYWwodGhpcywgJGdhbGxlcnkpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnlNb2RhbC5iaW5kRXZlbnRzKCk7XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cclxuLy8gaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuaW1wb3J0IENvcm5lcnN0b25lUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vLi4vdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XHJcbmltcG9ydCB7IGFsZXJ0TW9kYWwsIHNob3dBbGVydE1vZGFsLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4uLy4uL3RoZW1lL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCB7IGZpeEZvcm1FbGVtZW50VW5pcXVlSWRzLCBjdXJyZW5jeUZvcm1hdCB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IFNhbGVDb3VudGRvd24gZnJvbSAnLi4vc2FsZS1jb3VudGRvd24nO1xyXG5cclxuY29uc3QgREVCVUdfTE9HID0gZmFsc2U7XHJcblxyXG5jb25zdCBub3JtYWxpemVPcHRpb25TdHJpbmcgPSBzID0+IHMucmVwbGFjZSgvOi9nLCAnJykucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5mdW5jdGlvbiBlcXVhbE9wdGlvblN0cmluZyhhLCBiKSB7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplT3B0aW9uU3RyaW5nKGEpID09PSBub3JtYWxpemVPcHRpb25TdHJpbmcoYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbCByZWdhcmRsZXNzIG9mIG9yZGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycjFcclxuICogQHBhcmFtIHtBcnJheX0gYXJyMlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGFyZUFycmF5c0VxdWFsVW5vcmRlcmVkKGFycjEsIGFycjIpIHtcclxuICAgIGNvbnN0IF9hcnIxID0gYXJyMS5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgIGNvbnN0IF9hcnIyID0gYXJyMi5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgIHJldHVybiBfYXJyMS5sZW5ndGggPT09IF9hcnIyLmxlbmd0aCAmJiBfYXJyMS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gX2FycjJbaW5kZXhdKTtcclxufVxyXG5cclxubGV0IGNhY2hlZFNldHRpbmdzO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBtdWx0aXBsZSBwcm9taXNlcyB3aXRoIGEgY29uY3VycmVuY3kgbGltaXQgKGUuZy4sIHByb2Nlc3Npbmcgb25seSAxMCBwcm9taXNlcyBhdCBhIHRpbWUgb3V0IG9mIDEwKVxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5PEZ1bmN0aW9uPFQ+fSBwcm9taXNlcyBmdW5jdGlvbnMgdGhhdCByZXR1cm4gYSBwcm9taXNlXHJcbiAqIEBwYXJhbSB7Kn0gbGltaXQgbnVtYmVyIG9mIHByb21pc2VzIHRvIHByb2Nlc3MgYXQgYSB0aW1lXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PFQ+Pn0gcmVzdWx0cyBvZiBhbGwgcHJvbWlzZXNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVByb21pc2VzV2l0aExpbWl0KHByb21pc2VzLCBsaW1pdCA9IDEwKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICBjb25zdCBleGVjdXRpbmcgPSBbXTsgLy8gVHJhY2sgdGhlIHByb21pc2VzIGN1cnJlbnRseSBleGVjdXRpbmdcclxuXHJcbiAgICBmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcclxuICAgICAgICAvLyBTdGFydCB0aGUgcHJvbWlzZSBhbmQgYWRkIGl0IHRvIHRoZSBleGVjdXRpbmcgbGlzdFxyXG4gICAgICAgIGNvbnN0IHAgPSBwcm9taXNlKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpbmlzaGVkIHByb21pc2UgZnJvbSBleGVjdXRpbmcgbGlzdFxyXG4gICAgICAgICAgICBleGVjdXRpbmcuc3BsaWNlKGV4ZWN1dGluZy5pbmRleE9mKHApLCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2gocCk7XHJcbiAgICAgICAgZXhlY3V0aW5nLnB1c2gocCk7XHJcblxyXG4gICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBsaW1pdCwgd2FpdCBmb3IgdGhlIGZpcnN0IHRvIGZpbmlzaFxyXG4gICAgICAgIGlmIChleGVjdXRpbmcubGVuZ3RoID49IGxpbWl0KSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmFjZShleGVjdXRpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBXYWl0IGZvciBhbGwgcmVtYWluaW5nIHByb21pc2VzIHRvIGNvbXBsZXRlXHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyB7XHJcbiAgICBtb2RpZmllcnNNb2RhbE92ZXJsYXlUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLW92ZXJsYXlcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vdmVybGF5PjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBtb2RpZmllcnNNb2RhbFRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWxcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNsb3NlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkNsb3NlXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY2xvc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCI+Q2xvc2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Zz48dXNlIGhyZWY9XCIjaWNvbi14bWFyay1sYXJnZVwiPjwvdXNlPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1iYWNrLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkJhY2tcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1iYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkJhY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1hcnJvdy1sZWZ0LWxvbmdcIj48L3VzZT48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1oZWFkZXItdGl0bGVcIj48JSZwcm9kdWN0VGl0bGUlPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY29udGVudFwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLXRpdGxlXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbiBjdXJyZW50IHN0ZXAncyB0aXRsZSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtb3B0aW9uc1wiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgbW9kaWZpZXJzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtc3VtbWFyeVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgc3VtbWFyeSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbXBsZXRlXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgYWRkIHRvIGNhcnQgYnV0dG9uICYgcXR5IGJveCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1mb290ZXJcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jb250aW51ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250aW51ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwldHh0Q29udGludWUlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWZvb3Rlci1zdWJ0b3RhbFwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBzdWJ0b3RhbCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPCUjbWFpbkltYWdlVXJsJT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIjwlbWFpbkltYWdlVXJsJT5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNyY3NldD1cIjwlbWFpbkltYWdlU3Jjc2V0JT5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXpvb20taW1hZ2U9XCI8JXpvb21JbWFnZVVybCU+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaXplcz1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxhenlsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtaW1nIC8+XHJcbiAgICAgICAgICAgICAgICA8JS9tYWluSW1hZ2VVcmwlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uVG9vbHRpcFRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXRvb2x0aXBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdG9vbHRpcC10cmlnZ2VyXCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCJNb3JlIGluZm9ybWF0aW9uXCIgdGl0bGU9XCJNb3JlIGluZm9ybWF0aW9uXCI+aTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdG9vbHRpcC1idWJibGVcIj48JXRvb2x0aXAlPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy12YWx1ZS10b29sdGlwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXRvb2x0aXAtdHJpZ2dlclwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwiTW9yZSBpbmZvcm1hdGlvblwiIHRpdGxlPVwiTW9yZSBpbmZvcm1hdGlvblwiPmk8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXRvb2x0aXAtYnViYmxlXCI+PCV0b29sdGlwJT48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG9wdGlvblZhbHVlVG9vbHRpcEhlYWRpbmdUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXZhbHVlLXRvb2x0aXAtaGVhZGluZ1wiPjwlaGVhZGluZyU+PC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG9wdGlvblByaWNlVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPCUjcHJlbG9hZGVyJT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlIF9wcmVsb2FkZXJcIj4uLi48L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJlbG9hZGVyJT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlIF93aXRoVGF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1vbGQgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1ub3cgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UgX3dpdGhvdXRUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW9sZCBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW5vdyBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JXByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG9wdGlvblByaWNlUGxhaW5UZW1wbGF0ZSA9IGBcclxuICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAoPCVwcmljZVdpdGhUYXglPilcclxuICAgICAgICA8JS9wcmljZVdpdGhUYXglPlxyXG4gICAgICAgIDwlXnByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICAoPCVwcmljZVdpdGhvdXRUYXglPilcclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICA8JS9wcmljZVdpdGhUYXglPlxyXG4gICAgYDtcclxuXHJcbiAgICBzdWJ0b3RhbFRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLWdyb3VwLWxhYmVsXCI+PCV0eHRTdWJ0b3RhbCU+PC9kaXY+XHJcbiAgICAgICAgICAgIDwlI3ByZWxvYWRlciU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbCBfcHJlbG9hZGVyXCI+Li4uPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByZWxvYWRlciU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbCBfd2l0aFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtb2xkIF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtbm93IF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsIF93aXRob3V0VGF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1vbGQgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ub3cgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBzdW1tYXJ5VGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9uc1wiPlxyXG4gICAgICAgICAgICA8JSNvcHRpb25zJT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnMtb3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnMtb3B0aW9uLW5hbWVcIj48JW5hbWUlPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb24tdmFsdWVcIj48JXZhbHVlJT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnMtb3B0aW9uLXByaWNlc1wiPjwlJnByaWNlSHRtbCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL29wdGlvbnMlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBzaG93UHJpY2VGcmVlID0gZmFsc2U7XHJcbiAgICBzaG93UHJpY2VaZXJvID0gZmFsc2U7XHJcblxyXG4gICAgYWRkVG9DYXJ0V3JhcHBlclNlbGVjdG9yID0gJy5hZGQtdG8tY2FydC13cmFwcGVyJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlIGZvciBmdW5jdGlvbiBgZmV0Y2hPcHRpb25QcmljZWBcclxuICAgICAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCB7IHByaWNlc1dpdGhUYXg6IHsgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IH0sIHByaWNlc1dpdGhvdXRUYXg6IHsgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IH0gfT59XHJcbiAgICAgKi9cclxuICAgIGZldGNoT3B0aW9uUHJpY2VDYWNoZSA9IHt9O1xyXG5cclxuICAgIGNvbnNvbGUgPSB7XHJcbiAgICAgICAgbG9nOiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoREVCVUdfTE9HKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgc3VwZXIoJHNjb3BlLCAuLi5hcmdzKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRjaG9vc2VPcHRpb25zQnRuID0gJGZvcm0uZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IE51bWJlcigkZm9ybS5maW5kKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nKS52YWwoKSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUHJvZHVjdE1ldGFkYXRhKCRmb3JtKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRW5hYmxlIG9yIGRpc2FibGUgbW9kaWZpZXJzIG1vZGFsIGZlYXR1cmVcclxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBlbmFibGUgbW9kaWZpZXJzIG1vZGFsIGlmIG91ciBjaG9vc2Ugb3B0aW9ucyBidXR0b24gYXBwZWFycyBpbiB0aGUgcHJvZHVjdCBkZXRhaWxzXHJcbiAgICAgICAgdGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCA9ICRjaG9vc2VPcHRpb25zQnRuLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZU1vZGlmaWVyc01vZGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmluZFByb2R1Y3RFZGl0RXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kU3RpY2t5QWRkVG9DYXJ0RXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kTW9kYWxEZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5pbml0T3B0aW9uU3RlcHBlcigpO1xyXG4gICAgICAgIHRoaXMuc3luY1Byb2R1Y3RDYXJkUXR5KCk7XHJcbiAgICAgICAgdGhpcy5pbml0U2FsZUNvdW50ZG93bigpO1xyXG4gICAgICAgIHRoaXMuYmluZFJlbmV3aW5nRGF0YVBsYW5WaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJJbmxpbmVPcHRpb25Ub29sdGlwcygpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyU3BlY1Rvb2x0aXBzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0SW5saW5lT3B0aW9uUHJpY2VIaW50cygpO1xyXG4gICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCd1cGRhdGUtd2lzaGxpc3QtYnV0dG9ucycsIFt0aGlzLiRzY29wZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hQcm9kdWN0TWV0YWRhdGEoJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpLmZpcnN0KCkpIHtcclxuICAgICAgICBjb25zdCBwYXJzZU1ldGFkYXRhID0gc2VsZWN0b3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJGZvcm0uZmluZChzZWxlY3RvcikuZmlyc3QoKS50ZXh0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgaW52YWxpZCBtZXRhZGF0YSBwYXlsb2Fkcy5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMgPSBwYXJzZU1ldGFkYXRhKCdbZGF0YS1leWV2YS1wcm9kdWN0LWN1c3RvbS1maWVsZHNdJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7XHJcbiAgICAgICAgICogICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAqICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICogICBzdGF0ZTogJ21vZGlmaWVyJyB8ICd2YXJpYW50X29wdGlvbicsXHJcbiAgICAgICAgICogICBwYXJ0aWFsOiAnc3dhdGNoJyB8ICdzZXQtcmVjdGFuZ2xlJyB8ICdzZXQtc2VsZWN0JyB8ICdzZXQtcmFkaW8nXHJcbiAgICAgICAgICogICAgIHwgJ2lucHV0LXRleHQnIHwgJ2lucHV0LW51bWJlcnMnIHwgJ2lucHV0LWNoZWNrYm94JyB8ICdpbnB1dC1maWxlJ1xyXG4gICAgICAgICAqICAgICB8ICdkYXRlJyB8ICd0ZXh0YXJlYScgfCAncHJvZHVjdC1saXN0JyxcclxuICAgICAgICAgKiAgIHJlcXVpcmVkOiBib29sZWFuLFxyXG4gICAgICAgICAqICAgcHJlZmlsbD86IHN0cmluZyxcclxuICAgICAgICAgKiAgIHNlbGVjdGVkX2RhdGU/OiB7XHJcbiAgICAgICAgICogICAgIGRheTogc3RyaW5nLFxyXG4gICAgICAgICAqICAgICBtb250aDogc3RyaW5nLFxyXG4gICAgICAgICAqICAgICB5ZWFyOiBzdHJpbmdcclxuICAgICAgICAgKiAgIH0sXHJcbiAgICAgICAgICogICBjaGVja2VkPzogYm9vbGVhbixcclxuICAgICAgICAgKiAgIG5vVmFsdWU/OiBudW1iZXIsXHJcbiAgICAgICAgICogICB2YWx1ZT86IG51bWJlcixcclxuICAgICAgICAgKiAgIHZhbHVlcz86IEFycmF5PHtcclxuICAgICAgICAgKiAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICAgKiAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAgICAgKiAgICAgc2VsZWN0ZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICogICAgIGRhdGE6IHN0cmluZyB8IEFycmF5PHN0cmluZz5cclxuICAgICAgICAgKiAgIH0+XHJcbiAgICAgICAgICogfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucyA9IHBhcnNlTWV0YWRhdGEoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uc10nKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMuY3VzdG9tRmllbGRzOicsIHRoaXMuY3VzdG9tRmllbGRzKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscy5wcm9kdWN0T3B0aW9uczonLCB0aGlzLnByb2R1Y3RPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgJHVwZGF0ZVByb2R1Y3RXcmFwcGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS11cGRhdGUtcHJvZHVjdC13cmFwcGVyXScpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZXdNb2RlbCguLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSBzdXBlci5nZXRWaWV3TW9kZWwoLi4uYXJncyk7XHJcbiAgICAgICAgbW9kZWwuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyID0gdGhpcy4kdXBkYXRlUHJvZHVjdFdyYXBwZXI7XHJcbiAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKTtcclxuICAgICAgICBjb25zdCAkYnRuID0gdGhpcy4kdXBkYXRlUHJvZHVjdFdyYXBwZXIuZmluZCgnaW5wdXQsIGJ1dHRvbicpO1xyXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgICRidG4ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYnRuLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJyaWRlIHRoZSBtZXRob2QgdG8gc3VwcG9ydCBlZGl0IHByb2R1Y3QgaW4gY2FydFxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXHJcbiAgICAgKi9cclxuICAgIGFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcclxuICAgICAgICBpZiAoZXZlbnQuZWRpdFByb2R1Y3RJbkNhcnQpIHtcclxuICAgICAgICAgICAgJChmb3JtKS5maW5kKCdpbnB1dFtuYW1lPVwiYWN0aW9uXCJdJykudmFsKCdFZGl0UHJvZHVjdEZpZWxkc0luQ2FydCcpO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKGZvcm0pLmZpbmQoJ2lucHV0W25hbWU9XCJhY3Rpb25cIl0nKS52YWwoJ2FkZCcpO1xyXG4gICAgICAgICAgICBzdXBlci5hZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFZGl0IHByb2R1Y3QgaW4gY2FydC5cclxuICAgICAqIEFsbW9zdCBjbG9uZSBmcm9tIGFkZFByb2R1Y3RUb0NhcnQgbWV0aG9kIGZyb20gdGhlIHBhcmVudCBjbGFzcy5cclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGVkaXRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XHJcbiAgICAgICAgY29uc3QgJHNhdmVCdG4gPSAkKCdbZGF0YS11cGRhdGUtcHJvZHVjdC13cmFwcGVyXScsICQoZXZlbnQudGFyZ2V0KSkuZmluZCgnaW5wdXQsIGJ1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQnRuVmFsID0gJHNhdmVCdG4udmFsKCk7XHJcbiAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkc2F2ZUJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xyXG5cclxuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxyXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJHNhdmVCdG5cclxuICAgICAgICAgICAgLnZhbCh3YWl0TWVzc2FnZSlcclxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG5cclxuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRzYXZlQnRuLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkc2F2ZUJ0blxyXG4gICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcclxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0Q2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgZmFpbHVyZSA9IChlcnJvclRleHQpID0+IHtcclxuICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yVGV4dDtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJHNhdmVCdG4pKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydE1vZGFsKCkuJHByZU1vZGFsRm9jdXNlZEVsID0gJHNhdmVCdG47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdFF1YW50aXR5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9IGZvcm1EYXRhLmdldCgnaXRlbV9pZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdRdHkgPSBmb3JtRGF0YS5nZXQoJ3F0eVtdJyk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDYXJ0SXRlbVF1YW50aXR5KGl0ZW1JZCwgbmV3UXR5KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsdXJlKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSxcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIH0pLmRvbmUoKHJlc3BvbnNlKSA9PiBzdWNjZXNzKHJlc3BvbnNlKSkuZmFpbCgoX3hociwgX3N0YXR1cywgZXJyb3IpID0+IGZhaWx1cmUoZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYXJ0SXRlbVF1YW50aXR5KGl0ZW1JZCwgbmV3UXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2U/LmRhdGE/LnN0YXR1cyAhPT0gJ3N1Y2NlZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBjbGljayBvbiB0aGUgQWRkIE5ldyB0byBDYXJ0IGJ1dHRvbiwgdHJpZ2dlciB0aGUgZm9ybSBzdWJtaXQgZXZlbnQgd2l0aCBgYWRkTmV3VG9DYXJ0YCBmbGFnXHJcbiAgICAgKiBzbyB0aGF0IG5ldyBwcm9kdWN0IGlzIGFsd2F5cyBhZGRlZCB0byBjYXJ0IHJlZ2FyZGxlc3Mgb2YgZWRpdCBwcm9kdWN0IGluIGNhcnQgb3Igbm90XHJcbiAgICAgKi9cclxuICAgIGJpbmRQcm9kdWN0RWRpdEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBzdWJtaXRFdmVudCA9ICQuRXZlbnQoJ3N1Ym1pdCcsIHsgZWRpdFByb2R1Y3RJbkNhcnQ6IHRydWUgfSk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG5cclxuICAgICAgICB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlci5maW5kKCdpbnB1dCwgYnV0dG9uJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkZm9ybS50cmlnZ2VyKHN1Ym1pdEV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kU3RpY2t5QWRkVG9DYXJ0RXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZVN0aWNreUFkZFRvQ2FydENsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICgkYnV0dG9uLnByb3AoJ2Rpc2FibGVkJykgfHwgJGJ1dHRvbi5hdHRyKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGlmICghJGZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRzdGlja3lRdHkgPSAkYnV0dG9uLnNpYmxpbmdzKCcucHJvZHVjdFZpZXctc3RpY2t5LWFkZC10by1jYXJ0JylcclxuICAgICAgICAgICAgICAgIC5maW5kKCcubW9iaWxlLWluY3JlbWVudCBpbnB1dFtuYW1lPVwicXR5W11cIl0nKVxyXG4gICAgICAgICAgICAgICAgLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtUXR5ID0gJGZvcm0uZmluZCgnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBpbnB1dFtuYW1lPVwicXR5W11cIl0nKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRzdGlja3lRdHkubGVuZ3RoICYmICRmb3JtUXR5Lmxlbmd0aCAmJiAkZm9ybVF0eS52YWwoKSAhPT0gJHN0aWNreVF0eS52YWwoKSkge1xyXG4gICAgICAgICAgICAgICAgJGZvcm1RdHkudmFsKCRzdGlja3lRdHkudmFsKCkpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJGZvcm1bMF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybSAmJiAhZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGludmFsaWRGaWVsZCA9IGZvcm0ucXVlcnlTZWxlY3RvcignOmludmFsaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW52YWxpZEZpZWxkPy5zY3JvbGxJbnRvVmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbnZhbGlkRmllbGQ/LmZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZEZpZWxkLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JtLnJlcG9ydFZhbGlkaXR5ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnZhbGlkRmllbGQ/LnJlcG9ydFZhbGlkaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZEZpZWxkLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCcjc3RpY2t5LWFkZC10by1jYXJ0JylcclxuICAgICAgICAgICAgLm9mZignY2xpY2suZXlldmFTdGlja3lBZGRUb0NhcnQnKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrLmV5ZXZhU3RpY2t5QWRkVG9DYXJ0JywgaGFuZGxlU3RpY2t5QWRkVG9DYXJ0Q2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRNb2RhbERlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSB0aGUgaW1hZ2UgZ2FsbGVyeSBtb2RhbCB3aGVuIHF1aWNrLXZpZXcgbW9kYWwgaXMgY2xvc2VkXHJcbiAgICAgICAgLy8gdG8gcHJldmVudCBtZW1vcnkgbGVha1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmNsb3Nlc3QoJy5tb2RhbCcpLm9uZShNb2RhbEV2ZW50cy5jbG9zZWQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuaW1hZ2VHYWxsZXJ5TW9kYWwuZGVzdHJveU1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE9wdGlvblN0ZXBwZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tc3RlcHBlcl0nKS5lYWNoKChfaSwgZm9ybUZpZWxkRWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGZvcm1GaWVsZCA9ICQoZm9ybUZpZWxkRWwpO1xyXG4gICAgICAgICAgICBjb25zdCAkZGVjID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJkZWNcIl0nKTtcclxuICAgICAgICAgICAgY29uc3QgJGluYyA9ICRmb3JtRmllbGQuZmluZCgnW2RhdGEtYWN0aW9uPVwiaW5jXCJdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjaGVjayA9ICRmb3JtRmllbGQuZmluZCgnW2RhdGEtYWN0aW9uPVwiY2hlY2tcIl0nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykuYWRkQ2xhc3MoJ19jaGVja2luZycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOnZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjaGVja2VkID0gJHJhZGlvcy5maWx0ZXIoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZmlyc3QgPSAkcmFkaW9zLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVja2VkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gJHJhZGlvcy5pbmRleCgkY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGkgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCBpID09PSAkcmFkaW9zLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5hZGRDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJGZpcnN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykucmVtb3ZlQ2xhc3MoJ19jaGVja2luZycpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gKGluYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLmFkZENsYXNzKCdfY2hlY2tpbmcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkcmFkaW9zID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbzp2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICRyYWRpb3MuZmlsdGVyKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpcnN0ID0gJHJhZGlvcy5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkY2hlY2tlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm91bmQgY2hlY2tlZCByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSAkcmFkaW9zLmluZGV4KCRjaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdCB0aGUgbmV4dCByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8ICRyYWRpb3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5lcShpICsgMSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCBpICsgMSA9PT0gJHJhZGlvcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0IHRoZSBwcmV2aW91cyByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLmVxKGkgLSAxKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBpIC0gMSA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5hZGRDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJGZpcnN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBubyBjaGVja2VkIHJhZGlvLCBhbmQgZm91bmQgdGhlIGZpcnN0IHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluYyAmJiAkZmlyc3QuZmlsdGVyKCdbdmFsdWU9XCJcIl0sIFt2YWx1ZT1cIjBcIl0nKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICsgYW5kIGZpcnN0IG9wdGlvbiBpcyAnbm9uZScsIGlnbm9yZSB0aGUgbm9uZSBvcHRpb24sIHNlbGVjdCB0aGUgZmlyc3QgdmFsdWVkIG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLm5vdCgkZmlyc3QpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgJHJhZGlvcy5sZW5ndGggPT09IDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsc2UsIHNlbGVjdCB0aGUgZmlyc3QgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgJGZpcnN0LnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgJHJhZGlvcy5sZW5ndGggPT09IDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2suYWRkQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNoZWNrZWQgcmFkaW8gaXMgJ25vbmUnIHRoZW4gdW5jaGVjayB0aGUgY2hlY2sgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpZiAoJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbzpjaGVja2VkJykuZmlsdGVyKCdbdmFsdWU9XCJcIl0sIFt2YWx1ZT1cIjBcIl0nKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLnJlbW92ZUNsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5yZW1vdmVDbGFzcygnX2NoZWNraW5nJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkZGVjLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRpbmMub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdCh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkY2hlY2sub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGlmICgkY2hlY2suaGFzQ2xhc3MoJ19jaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1bmNoZWNrIHRoZSBjaGVja2VkIHJhZGlvIGFuZCBzZWxlY3QgdGhlICdub25lJyByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR1bmNoZWNrID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbzpjaGVja2VkJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbm9uZSA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJG5vbmUubGVuZ3RoID4gMCkgJG5vbmUudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoJHVuY2hlY2subGVuZ3RoKSAkdW5jaGVjay50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2sucmVtb3ZlQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTeW5jIHByb2R1Y3QgcXVhbnRpdHkgd2l0aCBxdHkgb2YgdGhlIGNvcnJlc3BvbmRpbmcgcHJvZHVjdCBjYXJkXHJcbiAgICAgKi9cclxuICAgIHN5bmNQcm9kdWN0Q2FyZFF0eSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0UXVhbnRpdHkpIHJldHVybjsgLy8gc3RvcCBpZiBlZGl0IHByb2R1Y3QgaW4gY2FydFxyXG5cclxuICAgICAgICBjb25zdCBjYXJkUXR5ID0gJChgW2RhdGEtY2FyZC1xdWFudGl0eS1jaGFuZ2VdIGlucHV0W25hbWU9XCJxdHlfJHt0aGlzLnByb2R1Y3RJZH1cIl1gKS52YWwoKTtcclxuICAgICAgICBpZiAoIWNhcmRRdHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgJHF0eSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gaW5wdXRbbmFtZT1cInF0eVtdXCJdJyk7XHJcbiAgICAgICAgY29uc3QgcXR5ID0gJHF0eS52YWwoKTtcclxuICAgICAgICBpZiAoJHF0eS5sZW5ndGggPiAwICYmIHF0eSAhPT0gY2FyZFF0eSkge1xyXG4gICAgICAgICAgICAkcXR5LnZhbChjYXJkUXR5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNhbGVDb3VudGRvd24oKSB7XHJcbiAgICAgICAgY29uc3QgeyB0eHRTYWxlQ291bnRkb3duSlNPTiB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXNhbGUtY291bnRkb3duLWRhdGVdJyk7XHJcbiAgICAgICAgJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25UcmFuc2xhdGlvbnMnLCB7IGVuZF9pbjogJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25MYWJlbCcpIH0pO1xyXG5cclxuICAgICAgICBTYWxlQ291bnRkb3duLmNvbmZpZ3VyZSh7IHR4dFNhbGVDb3VudGRvd25KU09OIH0pO1xyXG4gICAgICAgIFNhbGVDb3VudGRvd24uYWRkKCRlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFJlbmV3aW5nRGF0YVBsYW5WaXNpYmlsaXR5KCkge1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLm9mZignY2hhbmdlLmV5ZXZhUmVuZXdpbmdEYXRhUGxhbicsICdbbmFtZT1cImF0dHJpYnV0ZVsxMzMwM11cIl0nKTtcclxuICAgICAgICB0aGlzLiRzY29wZS5vbignY2hhbmdlLmV5ZXZhUmVuZXdpbmdEYXRhUGxhbicsICdbbmFtZT1cImF0dHJpYnV0ZVsxMzMwM11cIl0nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKS5maXJzdCgpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgIGlmICgkcHJvZHVjdE9wdGlvbnNFbC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgJHJlbmV3aW5nUmFkaW8gPSAkcHJvZHVjdE9wdGlvbnNFbFxyXG4gICAgICAgICAgICAuZmluZCgnW25hbWU9XCJhdHRyaWJ1dGVbMTMzMDNdXCJdW3ZhbHVlPVwiMTY5OFwiXScpXHJcbiAgICAgICAgICAgIC5maXJzdCgpO1xyXG5cclxuICAgICAgICBpZiAoJHJlbmV3aW5nUmFkaW8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3VsZEhpZGVGaWVsZHMgPSAkcmVuZXdpbmdSYWRpby5pcygnOmNoZWNrZWQnKTtcclxuICAgICAgICBjb25zdCBmaWVsZElkcyA9IFsxMzMwNCwgMTMzMDUsIDEzMzA2XTtcclxuXHJcbiAgICAgICAgZmllbGRJZHMuZm9yRWFjaChmaWVsZElkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke2ZpZWxkSWR9XCJdYCkuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYgKCRmaWVsZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZEhpZGVGaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUhpZGRlbk1vZGlmaWVyRmllbGQoJGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICRmaWVsZC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKS5yZW1vdmVDbGFzcygnZm9ybS1maWVsZC0tZXJyb3InKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlU2hvd25Nb2RpZmllckZpZWxkKCRmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAkZmllbGQuY3NzKCdkaXNwbGF5JywgJycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlSGlkZGVuTW9kaWZpZXJGaWVsZCgkZmllbGQpIHtcclxuICAgICAgICAkZmllbGQuZmluZCgnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKSwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKF9pLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGVsLmlzKCdbZGF0YS1leWV2YS1vcmlnaW5hbC1yZXF1aXJlZF0nKSkge1xyXG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ2RhdGEtZXlldmEtb3JpZ2luYWwtcmVxdWlyZWQnLCAkZWwucHJvcCgncmVxdWlyZWQnKSA/ICd0cnVlJyA6ICdmYWxzZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkZWwucHJvcCgncmVxdWlyZWQnLCBmYWxzZSkucmVtb3ZlQXR0cigncmVxdWlyZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkZWwuaXMoJzpjaGVja2JveCwgOnJhZGlvJykpIHtcclxuICAgICAgICAgICAgICAgICRlbC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCRlbC5pcygnc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICRlbC5wcm9wKCdzZWxlY3RlZEluZGV4JywgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZWwudmFsKCcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZVNob3duTW9kaWZpZXJGaWVsZCgkZmllbGQpIHtcclxuICAgICAgICAkZmllbGQuZmluZCgnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKSwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKF9pLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxSZXF1aXJlZCA9ICRlbC5hdHRyKCdkYXRhLWV5ZXZhLW9yaWdpbmFsLXJlcXVpcmVkJykgPT09ICd0cnVlJztcclxuXHJcbiAgICAgICAgICAgICRlbC5wcm9wKCdyZXF1aXJlZCcsIG9yaWdpbmFsUmVxdWlyZWQpO1xyXG4gICAgICAgICAgICBpZiAob3JpZ2luYWxSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ3JlcXVpcmVkJywgJycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGVsLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnbGFiZWwudW5hdmFpbGFibGUsIG9wdGlvbi51bmF2YWlsYWJsZScpXHJcbiAgICAgICAgICAgIC5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZF0nKVxyXG4gICAgICAgICAgICAucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyhkYXRhLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlVmlldyhkYXRhLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQcm9kdWN0TWV0YWRhdGEoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcklubGluZU9wdGlvblRvb2x0aXBzKCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU2FsZVBlcmNlbnQoZGF0YSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGlwcGluZ0NvdW50ZG93bihkYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgIWRhdGE/LnB1cmNoYXNhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub25lU2FsZXMgPSB0aGlzLmN1c3RvbUZpZWxkTm9uZVNhbGVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzU3VidG90YWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2FsZVBlcmNlbnQoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0ICRkaXYgPSB0aGlzLiRzY29wZS5maW5kKCcucHJpY2Utc2VjdGlvbi0tc2FsZVBlcmNlbnQnKTtcclxuICAgICAgICBjb25zdCAkc3BhbiA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2FsZS1wZXJjZW50XScpO1xyXG4gICAgICAgIGxldCBzYWxlUGVyY2VudCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChkYXRhPy5wcmljZT8ud2l0aG91dF90YXg/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5wcmljZT8ucnJwX3dpdGhvdXRfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWUgLyBkYXRhLnByaWNlLnJycF93aXRob3V0X3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheD8udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhPy5wcmljZT8ud2l0aF90YXg/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5wcmljZT8ucnJwX3dpdGhfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUgLyBkYXRhLnByaWNlLnJycF93aXRoX3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy5ub25fc2FsZV9wcmljZV93aXRoX3RheD8udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2FsZVBlcmNlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICRzcGFuLnRleHQoYC0ke3NhbGVQZXJjZW50fSVgKTtcclxuICAgICAgICAgICAgJGRpdi5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNwYW4udGV4dCgnJyk7XHJcbiAgICAgICAgICAgICRkaXYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTaGlwcGluZ0NvdW50ZG93bihkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJHNoaXBwaW5nQ291bnRkb3duID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcGFwYXRoZW1lcy1zaGlwcGluZy1jb3VudGRvd25dJyk7XHJcblxyXG4gICAgICAgIGlmICgkc2hpcHBpbmdDb3VudGRvd24uaXMoJzpoaWRkZW4nKSAmJiBkYXRhPy5wdXJjaGFzYWJsZSkge1xyXG4gICAgICAgICAgICAkc2hpcHBpbmdDb3VudGRvd24uY3NzKCdzdHlsZScsICdmbGV4Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2hpcHBpbmdDb3VudGRvd24uaXMoJzp2aXNpYmxlJykgJiYgIWRhdGE/LnB1cmNoYXNhYmxlKSB7XHJcbiAgICAgICAgICAgICRzaGlwcGluZ0NvdW50ZG93bi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnRDb250ZW50KC4uLmFyZ3MpIHtcclxuICAgICAgICAvLyBjbG9zZSBtb2RpZmllcnMgbW9kYWwgYWZ0ZXIgYWRkZWQgcHJvZHVjdCB0byBjYXJ0XHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJHByZU1vZGFsRm9jdXNlZEVsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIudXBkYXRlQ2FydENvbnRlbnQoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSwgLi4uYXJncykge1xyXG4gICAgICAgIHN1cGVyLnNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UsIC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxJbWcgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtaW1nXScpO1xyXG4gICAgICAgIGNvbnN0IHsgbWFpbkltYWdlVXJsLCB6b29tSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCB9ID0gdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlO1xyXG5cclxuICAgICAgICBpZiAobWFpbkltYWdlVXJsICYmIG1haW5JbWFnZVVybCAhPT0gJG1vZGlmaWVyc01vZGFsSW1nLmF0dHIoJ3NyYycpKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEltZ1xyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBtYWluIGltYWdlIGluIHF1aWNrLXZpZXcgb24gbW9iaWxlXHJcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBlbCkgPT4gJChlbCkuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeV0nKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIG1haW5JbWFnZVNyY3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IHByaWNlIHdpdGggY3VycmVuY3kgc3ltYm9sIGFuZCBkZWNpbWFsIHBsYWNlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwbHVzU3ltYm9sIHdoZXRoZXIgdG8gc2hvdyBwbHVzIHN5bWJvbCBmb3IgcG9zaXRpdmUgdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGZvcm1hdFByaWNlKHZhbHVlLCBwbHVzU3ltYm9sID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBkaXNwbGF5ID0gY2FjaGVkU2V0dGluZ3MgPyB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5X3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LnN5bWJvbCxcclxuICAgICAgICAgICAgY3VycmVuY3lfbG9jYXRpb246IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuc3ltYm9sUGxhY2VtZW50LFxyXG4gICAgICAgICAgICBkZWNpbWFsX3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LmRlY2ltYWxUb2tlbixcclxuICAgICAgICAgICAgZGVjaW1hbF9wbGFjZXM6IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuZGVjaW1hbFBsYWNlcyxcclxuICAgICAgICAgICAgdGhvdXNhbmRzX3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LnRob3VzYW5kc1Rva2VuLFxyXG4gICAgICAgIH0gOiB7fTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBjdXJyZW5jeUZvcm1hdCgtdmFsdWUsIGRpc3BsYXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGx1c1N5bWJvbCA/IGAtJHtmb3JtYXR0ZWR9YCA6IGZvcm1hdHRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGN1cnJlbmN5Rm9ybWF0KHZhbHVlLCBkaXNwbGF5KTtcclxuICAgICAgICByZXR1cm4gcGx1c1N5bWJvbCA/IGArJHtmb3JtYXR0ZWR9YCA6IGZvcm1hdHRlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmQgb3B0aW9uIHZhbHVlIGJ5IG9wdGlvbiBuYW1lIGFuZCB2YWx1ZSBuYW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgb3B0aW9uIGRpc3BsYXkgbmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlTmFtZSB2YWx1ZSBsYWJlbFxyXG4gICAgICogQHJldHVybnMge1tudW1iZXIsIG51bWJlcl19IG9wdGlvbklkLCB2YWx1ZUlkXHJcbiAgICAgKi9cclxuICAgIGZpbmRPcHRpb25WYWx1ZShvcHRpb25OYW1lLCB2YWx1ZU5hbWUpIHtcclxuICAgICAgICBjb25zdCBoaWRlSWZPcHRpb24gPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgZGlzcGxheV9uYW1lIH0pID0+IGRpc3BsYXlfbmFtZS5yZXBsYWNlKCcvOjsvZycsICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGhpZGVJZk9wdGlvbj8udmFsdWVzPy5maW5kKCh7IGxhYmVsIH0pID0+IGxhYmVsLnJlcGxhY2UoJy86Oy9nJywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZU5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uSWQgPSBoaWRlSWZPcHRpb24/LmlkO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZT8uaWQ7XHJcbiAgICAgICAgcmV0dXJuIFtvcHRpb25JZCwgdmFsdWVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1tYWluXScpLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpO1xyXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKS5hdHRyKCdkYXRhLXNyY3NldCcpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkYXR0cmlidXRlTWVzc2FnZVdyYXBwZXIgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LWF0dHJpYnV0ZXMtbWVzc2FnZV0nKTtcclxuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0V3JhcHBlciA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLWFkZC10by1jYXJ0LXdyYXBwZXJdJyk7XHJcbiAgICAgICAgY29uc3QgJGNob29zZU9wdGlvbnNCdG4gPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kaWZpZXJzTW9kYWxUZW1wbGF0ZSwge1xyXG4gICAgICAgICAgICB0eHRDb250aW51ZTogdGhpcy5jb250ZXh0LnR4dENvbnRpbnVlLFxyXG4gICAgICAgICAgICBwcm9kdWN0VGl0bGU6IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtdGl0bGVdJykuaHRtbCgpLFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VVcmw6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwgfHwgbWFpbkltYWdlVXJsLFxyXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwgfHwgem9vbUltYWdlVXJsLFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VTcmNzZXQgfHwgbWFpbkltYWdlU3Jjc2V0LFxyXG4gICAgICAgIH0sIG51bGwsIFsnPCUnLCAnJT4nXSkpLmFwcGVuZFRvKCRwcm9kdWN0T3B0aW9uc0VsKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENvbXBsZXRlID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDbG9zZSA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY2xvc2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ29udGludWUgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEJhY2sgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2tdJyk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgbW9kaWZpZXIgb3B0aW9ucyB0byB0aGUgbW9kYWxcclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1zdGF0ZT1cIm1vZGlmaWVyXCJdJykuYXBwZW5kVG8oJG1vZGlmaWVyc01vZGFsT3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgYWRkIHRvIGNhcnQgJiBxdHkgYm94IHRvIHRoZSBtb2RhbFxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENvbXBsZXRlLmFwcGVuZCgkYWRkVG9DYXJ0V3JhcHBlcik7XHJcblxyXG4gICAgICAgIC8vIGNsb25lIHB1cmNoYXNhYmxlIG1lc3NhZ2VcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5maW5kKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpLmNsb25lKClcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlcik7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENsb3NlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2sub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFja1N0ZXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29udGludWUub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBhbmQgcmVwb3J0IGludmFsaWQgaW5wdXRzIGlmIGFueVxyXG4gICAgICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5zbGljZSgtMSlbMF0gfHwgW107XHJcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRJbnB1dHMgPSBzaG93T3B0aW9uSWRzLnJlZHVjZSgoX2ludmFsaWRJbnB1dHMsIG9wdGlvbklkKSA9PiAoW1xyXG4gICAgICAgICAgICAgICAgLi4uX2ludmFsaWRJbnB1dHMsXHJcbiAgICAgICAgICAgICAgICAuLi4kbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW2RheV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVttb250aF1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVt5ZWFyXVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihlbCA9PiAhZWwuY2hlY2tWYWxpZGl0eSgpKSxcclxuICAgICAgICAgICAgXSksIFtdKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnZhbGlkSW5wdXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnZhbGlkSW5wdXRzWzBdLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGF1dG8gc2VsZWN0IHRoZSAnbm9uZScgb3B0aW9uIGlmIG5vIHJhZGlvIG9wdGlvbiBvciBubyBwcm9kdWN0IHBpY2sgbGlzdCBvcHRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgc2hvd09wdGlvbklkcy5mb3JFYWNoKG9wdGlvbklkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVwiXWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRyYWRpb3MubGVuZ3RoID4gMCAmJiAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFmdGVyIGNsaWNraW5nIGNvbnRpbnVlIGJ1dHRvbiwgdXBkYXRlIHRoZSBtb2RpZmllcnMgdmlldyBhdXRvbWF0aWNhbGx5XHJcbiAgICAgICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGNob29zZU9wdGlvbnNCdG4ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVxdWlyZSBzZWxlY3RpbmcgdmFyaWFudCBvcHRpb25zIGJlZm9yZSBvcGVuaW5nIHRoZSBtb2RhbFxyXG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVZhcmlhbnRPcHRpb25zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsXScpLmFkZENsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgLmJlZm9yZSh0aGlzLm1vZGlmaWVyc01vZGFsT3ZlcmxheVRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGlmaWVyc01vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vdmVybGF5XScpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2RpZmllcnNWaWV3KCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxyXG4gICAgICAgICAgICAubm90KCdbdHlwZT1cImNoZWNrYm94XCJdLCBbdHlwZT1cInJhZGlvXCJdLCBbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS52YWwoJycpO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcclxuICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gZmxhZyBhbnkgaW5wdXQvc2VsZWN0IGlzIG5vdCBzaG93biB5ZXQgc28gdGhhdCB0aGUgY29udGludWUgYnV0dG9uIGlzIHNob3duXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5yZW1vdmVBdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IG1vZGFsIHRvIHVwZGF0ZSB0aGlzIHZpZXcgYXV0b21hdGljYWxseSB3aGVuIG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb250YWlucyBhbGwgb3B0aW9uIGlkcyB0aGF0IGFyZSBzaG93biBpbiBlYWNoIHN0ZXBcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW11bXX1cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyByZXNldCB0aGUgc2hvd24gb3B0aW9uIGlkcyBpbiBhbGwgc3RlcHNcclxuICAgICAgICB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE5vbi1zYWxlIHByaWNlcyBmb3Igb3B0aW9uIHZhbHVlcy5cclxuICAgICAgICAgKiBQdWxsaW5nIGZyb20gY3VzdG9tIGZpZWxkcyBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYC5cclxuICAgICAgICAgKiBQb3B1bGF0ZWQgaW4gYHVwZGF0ZU1vZGlmaWVyc1ZpZXcoKWAuXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfSB9fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIG1vZGlmaWVycyBtb2RhbCBhc2FwIHNvIHRoYXQgbm90IGFsbCBvcHRpb25zIGFyZSBkaXNwbGF5ZWRcclxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVNb2RpZmllcnNWaWV3KHsgaWdub3JlQVBJQ2FsbCA9IGZhbHNlIH0gPSB7fSkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxCYWNrID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2tdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1bW1hcnkgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtc3VtbWFyeV0nKS5lbXB0eSgpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFRpdGxlID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXRpdGxlXScpLmVtcHR5KCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsRm9vdGVyID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlcl0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250aW51ZV0nKS5oaWRlKCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VidG90YWwgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsXScpO1xyXG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRXcmFwcGVyID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtYWRkLXRvLWNhcnQtd3JhcHBlcl0nKS5oaWRlKCk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZvcm1EYXRhOiAnLCBBcnJheS5mcm9tKGZvcm1EYXRhLmVudHJpZXMoKSkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdXJyZW50IG9wdGlvbiBpZCB0aGF0IGFwcGVhcnMgYWxvbmUgd2l0aG91dCBhbnkgZ3JvdXAuXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRPcHRpb25JZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3VycmVudCBncm91cCBuYW1lIHRoYXQgdGhlIG9wdGlvbiBiZWxvbmdzIHRvLlxyXG4gICAgICAgICAqIEdyb3VwIG5hbWUgdGhhdCBhcHBlYXJzIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYFxyXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBjdXJyZW50R3JvdXBOYW1lO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcHRpb24gaWRzIG9mIG9wdGlvbiBuYW1lcyBhcHBlYXIgaW4gdGhlIHZhbHVlIG9mIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgLlxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogICBDdXN0b20gZmllbGQ6IGBfX0Bncm91cCBTZWxlY3QgYSBwcmVzY3JpcHRpb24gdHlwZWAgPSBgcHJlc2NyaXB0aW9uIHR5cGVgXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRHcm91cE9wdGlvbklkcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBvcHRpb24gaWRzIHNob3VsZCBiZSBoaWRkZW5cclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgaGlkZU9wdGlvbklkcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e29wdGlvbklkOiBudW1iZXIsIHZhbHVlSWQ6IG51bWJlcn0+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGhpZGVPcHRpb25WYWx1ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVG9vbHRpcHMgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwYFxyXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3Q8bnVtYmVyLCB7IHRvb2x0aXA6IHN0cmluZywgdmFsdWVUb29sdGlwczogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfT5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB0b29sdGlwcyA9IHt9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUb29sdGlwIGhlYWRpbmdzIGZvciBvcHRpb24gdmFsdWVzIGV4dHJhY3RlZCBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfX1cclxuICAgICAgICAgKiBAZXhhbXBsZSB7IDI6IHsgMTIzOiAnVG9vbHRpcCBIZWFkaW5nJyB9IH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB0b29sdGlwSGVhZGluZ3MgPSB7fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTm9uLXNhbGUgcHJpY2VzIGZvciBvcHRpb24gdmFsdWVzLlxyXG4gICAgICAgICAqIENhbiBiZSBvdmVycmlkZGVuIGJ5IGN1c3RvbSBmaWVsZHMgYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWBcclxuICAgICAgICAgKiBAdHlwZSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9IH19XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgbm9uZVNhbGVzID0ge307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9wdGlvbiByZW5hbWVzIGV4dHJhY3RlZCBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogc3RyaW5nIH19XHJcbiAgICAgICAgICogQGV4YW1wbGUgeyAxMjM6ICdOZXcgTmFtZScsIDQ1NjogJ0Fub3RoZXIgTmFtZScgfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IG9wdGlvblJlbmFtZXMgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgc3RhdGUgfSkgPT4gc3RhdGUgPT09ICdtb2RpZmllcicpLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnJWNQcm9kdWN0RGV0YWlscyAtIG9wdGlvbjogJywgJ2NvbG9yOiBjeWFuJywgb3B0aW9uLmRpc3BsYXlfbmFtZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGlkZU9wdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEZpcnN0IGdyb3VwIG5hbWUgdGhhdCB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8uXHJcbiAgICAgICAgICAgICAqIEdyb3VwIG5hbWUgdGhhdCBhcHBlYXJzIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxldCBncm91cE5hbWU7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT3B0aW9uIGlkcyBvZiBvcHRpb24gbmFtZXMgYXBwZWFyIGluIHRoZSB2YWx1ZSBvZiBjdXN0b20gZmllbGQgYF9fQGdyb3VwYC5cclxuICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICogICBDdXN0b20gZmllbGQ6IGBfX0Bncm91cCBTZWxlY3QgYSBwcmVzY3JpcHRpb24gdHlwZWAgPSBgcHJlc2NyaXB0aW9uIHR5cGVgXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxldCBncm91cE9wdGlvbklkcztcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIHJhZGlvIHR5cGUgYW5kIGhhcyAnbm9uZScgdmFsdWUgY2hlY2tlZFxyXG4gICAgICAgICAgICBjb25zdCBpc05vbmVSYWRpb0NoZWNrZWQgPSAkZm9ybS5maW5kKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdW3ZhbHVlPVwiXCJdYCkucHJvcCgnY2hlY2tlZCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgZmlsZSB0eXBlIGFuZCBhbHJlYWR5IHNob3duIGFmdGVyIG1vZGFsIHNob3duXHJcbiAgICAgICAgICAgIGNvbnN0ICRmaWxlID0gJGZvcm0uZmluZChgaW5wdXRbdHlwZT1cImZpbGVcIl1bbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRmlsZVNob3duID0gJGZpbGUubGVuZ3RoID4gMCAmJiAkZmlsZS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCBkYXRlIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJGRhdGUgPSAkZm9ybS5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dW2RheV1cIl0sIHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bbW9udGhdXCJdLCBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdXCJdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT3B0aW9uYWxEYXRlU2hvd24gPSAkZGF0ZS5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJGRhdGUuYXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgb3B0aW9uYWwgc2VsZWN0IHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRmb3JtLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbFNlbGVjdFNob3duID0gJHNlbGVjdC5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJHNlbGVjdC5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCB0ZXh0IC8gbXVsdGlsaW5lIC8gbnVtYmVyIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJHRleHQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgdGV4dGFyZWEnKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbFRleHRTaG93biA9ICR0ZXh0Lmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkdGV4dC5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybVZhbHVlICYmICEoZm9ybVZhbHVlIGluc3RhbmNlb2YgRmlsZSlcclxuICAgICAgICAgICAgICAgIHx8IGlzTm9uZVJhZGlvQ2hlY2tlZCB8fCBpc0ZpbGVTaG93biB8fCBpc09wdGlvbmFsRGF0ZVNob3duIHx8IGlzT3B0aW9uYWxTZWxlY3RTaG93biB8fCBpc09wdGlvbmFsVGV4dFNob3duXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW2RheV1gKVxyXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1gKVxyXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVt5ZWFyXWApKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWRlIG9wdGlvbiBpZiB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvbjogJywgaGlkZU9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AaGlkZV9pZiAoLiopXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlkZUlmTWF0Y2ggPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYoeyBjdXN0b21GaWVsZCwgZm9ybURhdGEsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGlkZUlmTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvbiA9IGhpZGVJZk1hdGNoLmhpZGVPcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb25WYWx1ZXMucHVzaCguLi5oaWRlSWZNYXRjaC5oaWRlT3B0aW9uVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JvdXBOYW1lICYmICFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQGdyb3VwICguKilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaEdyb3VwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZSA9IGdyb3VwTWF0Y2guZ3JvdXBOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBPcHRpb25JZHMgPSBncm91cE1hdGNoLmdyb3VwT3B0aW9uSWRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXBNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHRvb2x0aXBNYXRjaC50b29sdGlwIHx8IHRvb2x0aXBzW29wdGlvbi5pZF0/LnRvb2x0aXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwczogT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udmFsdWVUb29sdGlwcywgdG9vbHRpcE1hdGNoLnZhbHVlVG9vbHRpcHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcEhlYWRpbmdzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcEhlYWRpbmcoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcEhlYWRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdLCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoUmVuYW1lKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblJlbmFtZXNbb3B0aW9uLmlkXSA9IG5ld05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZU5vblNhbGVzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoTm9uU2FsZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obm9uZVNhbGVzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uLmlkXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5vbmVTYWxlc1tvcHRpb24uaWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlTm9uU2FsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA9PT0gMCAmJiAhY3VycmVudE9wdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gdmlzaWJsZSBvcHRpb24gYmVmb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb24gZ3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwTmFtZSA9IGdyb3VwTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gZ3JvdXBPcHRpb25JZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwTmFtZTogJHtjdXJyZW50R3JvdXBOYW1lfSwgY3VycmVudEdyb3VwT3B0aW9uSWRzOiAke2N1cnJlbnRHcm91cE9wdGlvbklkc31gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFuZC1hbG9uZSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRPcHRpb25JZDogJHtjdXJyZW50T3B0aW9uSWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaGlkZU9wdGlvbklkcy5wdXNoKG9wdGlvbi5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPiAwICYmIGhpZGVPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgaGlkZGVuIG9wdGlvbnMgZnJvbSB0aGUgY3VycmVudCBncm91cFxyXG4gICAgICAgICAgICBjdXJyZW50R3JvdXBPcHRpb25JZHMgPSBjdXJyZW50R3JvdXBPcHRpb25JZHMuZmlsdGVyKGlkID0+ICFoaWRlT3B0aW9uSWRzLmluY2x1ZGVzKGlkKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwT3B0aW9uSWRzOiAke2N1cnJlbnRHcm91cE9wdGlvbklkc31gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudE9wdGlvbklkOiAnLCBjdXJyZW50T3B0aW9uSWQpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwTmFtZTogJywgY3VycmVudEdyb3VwTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICcsIGN1cnJlbnRHcm91cE9wdGlvbklkcyk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uVmFsdWVzOiAnLCBoaWRlT3B0aW9uVmFsdWVzKTtcclxuXHJcbiAgICAgICAgLy8gU3RvcmUgbm9uLXNhbGUgcHJpY2VzIG9mIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICAvLyB0byB1c2Ugd2hlbiB1cGRhdGluZyBvcHRpb24gcHJpY2VzIG9ubHkgd2l0aG91dCB1cGRhdGUgdGhlIHdob2xlIG1vZGlmaWVycyB2aWV3XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmN1c3RvbUZpZWxkTm9uZVNhbGVzLCBub25lU2FsZXMpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJRHMgb2Ygb3B0aW9ucyB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgYXQgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxyXG4gICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSBjdXJyZW50R3JvdXBPcHRpb25JZHMubGVuZ3RoID4gMCA/IGN1cnJlbnRHcm91cE9wdGlvbklkc1xyXG4gICAgICAgICAgICA6IChjdXJyZW50T3B0aW9uSWQgPyBbY3VycmVudE9wdGlvbklkXSA6IFtdKTtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHNob3duIG9wdGlvbiBpZHMgb2YgdGhlIGN1cnJlbnQgc3RlcCB0byB0aGUgc3RhY2tcclxuICAgICAgICAvLyBpZiBub3QgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzIHN0ZXAuXHJcbiAgICAgICAgLy8gdGhpcyBpcyB1c2VkIHRvIG5hdmlnYXRlIGJhY2sgdG8gdGhlIHByZXZpb3VzIHN0ZXAuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgIHx8ICFhcmVBcnJheXNFcXVhbFVub3JkZXJlZCh0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXSwgc2hvd09wdGlvbklkcykpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5wdXNoKHNob3dPcHRpb25JZHMpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIHN0YWNrZWRTaG93T3B0aW9uSWRzOiAnLCB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgLyBoaWRlIGJhY2sgYnV0dG9uXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxCYWNrLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxCYWNrLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgZm9vdGVyLCBhbmQgaGlkZSBpdCBpZiBubyBtb3JlIG9wdGlvbiBzaG93blxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsRm9vdGVyLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxGb290ZXIuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBtb2RhbCB0aXRsZSBmcm9tIHRoZSBjdXN0b20gZmllbGQgYF9fQGdyb3VwIChncm91cCBuYW1lKWAgb3Igb3B0aW9uIGRpc3BsYXkgbmFtZVxyXG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmh0bWwoY3VycmVudEdyb3VwTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IG9wdGlvblJlbmFtZXNbc2hvd09wdGlvbklkc1swXV0gfHwgdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBzaG93T3B0aW9uSWRzWzBdKT8uZGlzcGxheV9uYW1lO1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS50ZXh0KHRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhpZGUgdGhlIG9wdGlvbiBuYW1lIHdoZW4gaGVyZSBpcyBvbmx5IDEgb3B0aW9uIHNob3duIGluIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7c2hvd09wdGlvbklkc1swXX1cIl0gLmZvcm0tbGFiZWxgKS5maXJzdCgpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkXSAuZm9ybS1sYWJlbCcpLmZpcnN0KCkuc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBjdXJyZW50IHByb2R1Y3Qgb3B0aW9uc1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdfc2hvdycpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKF8sIGVsKSA9PiAhc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIoJChlbCkuZGF0YSgncHJvZHVjdC1hdHRyaWJ1dGUtaWQnKSkpKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ19zaG93Jyk7XHJcblxyXG4gICAgICAgIC8vIFJlbmFtZSB0aGUgc2hvd24gb3B0aW9ucyBpZiBuZWVkZWRcclxuICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gb3B0aW9uUmVuYW1lc1tvcHRpb25JZF07XHJcbiAgICAgICAgICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl0gLmZvcm0tbGFiZWxgKS5maXJzdCgpLmh0bWwobmV3TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0b29sdGlwIGZvciBncm91cFxyXG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBncm91cFRvb2x0aXAgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tRmllbGRzLmZvckVhY2goY3VzdG9tRmllbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncm91cFRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cFRvb2x0aXAgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAoeyBjdXN0b21GaWVsZCwgZ3JvdXBOYW1lOiBjdXJyZW50R3JvdXBOYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncm91cFRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIGdyb3VwVG9vbHRpcCkpO1xyXG4gICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2hvdyB0b29sdGlwIGZvciBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25Ub29sdGlwcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncywgc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyBmb3Igc2hvd24gb3B0aW9ucyBhbmQgZGlzcGxheSBDb250aW51ZSBidXR0b24gaWYgbmVlZGVkLlxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMoc2hvd09wdGlvbklkcywgJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsQ29udGludWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBwcmljZXMgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICBpZiAoIWlnbm9yZUFQSUNhbGwpIHtcclxuICAgICAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlcigkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93IHN1bW1hcnkgYnV0IHByZWxvYWRlciBmb3IgcHJpY2VzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zaG93T3B0aW9uUHJpY2VzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzLCBmb3JtRGF0YSwgbm9uZVNhbGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNob3cgc3VtbWFyeSBjb250ZW50IGlmIG5vIG9wdGlvbiB2aXNpYmxlIG9uIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93U3VtbWFyeSgkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5LCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgJG1vZGlmaWVyc01vZGFsVGl0bGUsICRhZGRUb0NhcnRXcmFwcGVyLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgcmVxdWlyZWQgdmFyaWFudCBvcHRpb25zIGFuZCByZXBvcnQgZXJyb3IgZm9yIHRoZSBmaXJzdCBpbnZhbGlkIG9wdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGVWYXJpYW50T3B0aW9ucygpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnZhbGlkID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgc3RhdGUgfSkgPT4gc3RhdGUgPT09ICd2YXJpYW50X29wdGlvbicpLmZpbmQob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBSZXF1aXJlZCBvcHRpb24gXCIke29wdGlvbi5kaXNwbGF5X25hbWV9XCIgaXMgbm90IHNlbGVjdGVkYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaW52YWxpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9ICRmb3JtLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7aW52YWxpZC5pZH1dXCJdYClbMF07XHJcbiAgICAgICAgICAgIGVsLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFja1N0ZXAoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IFtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5wb3AoKSwgLy8gY3VycmVudCBzdGVwJ3Mgc2hvd24gb3B0aW9uIGlkc1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnBvcCgpLCAvLyBwcmV2aW91cyBzdGVwJ3Mgc2hvd24gb3B0aW9uIGlkc1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IHZhbHVlcyBvZiBzaG93biBvcHRpb24gaWRzIGluIGN1cnJlbnQgc3RlcCAmIHByZXZpb3VzIHN0ZXBcclxuICAgICAgICAvLyB0byBkaXNwbGF5IHByZXZpb3VzIHN0ZXAgYWdhaW4uXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBlbCkgPT4gc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIoJChlbCkuYXR0cignZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSkpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXHJcbiAgICAgICAgICAgICAgICAubm90KCdbdHlwZT1cImNoZWNrYm94XCJdLCBbdHlwZT1cInJhZGlvXCJdLCBbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykudmFsKCcnKTtcclxuXHJcbiAgICAgICAgICAgICRvcHRpb24uZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICRvcHRpb24uZmluZCgnW25hbWVePVwiYXR0cmlidXRlXCJdJykucmVtb3ZlQXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBpbW1lZGlhdGVseSB1cGRhdGUgZGlzcGxheSBwcmV2aW91cyBvcHRpb25zIG9uIG1vZGlmaWVycyBtb2RhbFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBjaGFuZ2UgZXZlbnQgdG8gdXBkYXRlIHByaWNlcyAmIGRhdGEgYmVsb25ncyB0byBCQ1xyXG4gICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHNob3VsZCBiZSBoaWRkZW4gYmFzZWQgb24gdGhlIGN1c3RvbSBmaWVsZCBgX19AaGlkZV9pZmBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZm9ybURhdGE6IEZvcm1EYXRhLFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBpZDogTnVtYmVyLFxyXG4gICAgICogICAgIGRpc3BsYXlfbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlczogW3tcclxuICAgICAqICAgICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICogICAgIH1dXHJcbiAgICAgKiAgIH1cclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgaGlkZU9wdGlvbjogYm9vbGVhbiwgaGlkZU9wdGlvblZhbHVlczogQXJyYXk8e29wdGlvbklkOiBudW1iZXIsIHZhbHVlSWQ6IG51bWJlcn0+IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYoeyBjdXN0b21GaWVsZCwgZm9ybURhdGEsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXN0b21GaWVsZE1hdGNoSGlkZUlmOiBjZl9uYW1lID0gJHtjdXN0b21GaWVsZC5uYW1lfSA7IG9wX25hbWUgPSAke29wdGlvbi5kaXNwbGF5X25hbWV9YCk7XHJcbiAgICAgICAgbGV0IGhpZGVPcHRpb24gPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBoaWRlT3B0aW9uVmFsdWVzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AaGlkZV9pZlxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAoIW0pIHJldHVybjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBoaWRlSWZPcHRpb25zID0gbVsxXS5zcGxpdCgnOycpLm1hcChrdiA9PiBrdi5zcGxpdCgnOicsIDIpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcclxuICAgICAgICAgICAgbmFtZToga2V5LnRyaW0oKSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUudHJpbSgpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGhpZGVJZk9wdGlvbnM6ICR7aGlkZUlmT3B0aW9ucy5tYXAoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKHZhbHVlID8gYCR7bmFtZX06ICR7dmFsdWV9YCA6IG5hbWUpKS5qb2luKCc7ICcpfWApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRoZW5PcHRpb25zID0gY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5tYXAoa3YgPT4ga3Yuc3BsaXQoJzonLCAyKSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XHJcbiAgICAgICAgICAgIG5hbWU6IGtleS50cmltKCksXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSA/IHZhbHVlLnRyaW0oKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0aGVuT3B0aW9uczogJHt0aGVuT3B0aW9ucy5tYXAoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKHZhbHVlID8gYCR7bmFtZX06ICR7dmFsdWV9YCA6IG5hbWUpKS5qb2luKCc7ICcpfWApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGbGFnIHRvIGNoZWNrIGlmIG9wdGlvbjp2YWx1ZSBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYCBtYXRjaGVzIHdpdGggY3VycmVudCBmb3JtIGRhdGFcclxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgaGlkZUlmTWF0Y2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBvcHRpb246dmFsdWUgaW4gY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYCBtYXRjaGVzIHdpdGggY3VycmVudCBmb3JtIGRhdGFcclxuICAgICAgICBoaWRlSWZPcHRpb25zLmZvckVhY2goKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBbb3B0aW9uSWQsIHZhbHVlSWRdID0gdGhpcy5maW5kT3B0aW9uVmFsdWUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSBOdW1iZXIoZm9ybURhdGEuZ2V0QWxsKGBhdHRyaWJ1dGVbJHtvcHRpb25JZH1dYCkuc2xpY2UoLTEpWzBdKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtVmFsdWUgPT09IHZhbHVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGhpZGVJZk1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZUlmTWF0Y2g6ICcsIGhpZGVJZk1hdGNoKTtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVJZk1hdGNoKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IG9wdGlvbiBzaG91bGQgYmUgaGlkZGVuIHdoZW4gbWF0Y2hpbmcgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGN1c3RvbSBmaWVsZCBgX19AaGlkZV9pZmBcclxuICAgICAgICAgICAgdGhlbk9wdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGN1c3RvbSBmaWVsZCB2YWx1ZSBjb250YWluIG9wdGlvbiBuYW1lIHdpdGhvdXQgdmFsdWUsIHRoZW4gaGlkZSB0aGUgd2hvbGUgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb246ICcsIGhpZGVPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uLnZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIGhpZGUgdGhlIHNwZWNpZmljIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgbGFiZWwsIGlkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hpZGVPcHRpb25WYWx1ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVJZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uVmFsdWVzLnB1c2goX2hpZGVPcHRpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uVmFsdWU6ICcsIF9oaWRlT3B0aW9uVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpZGVPcHRpb24gfHwgaGlkZU9wdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGhpZGVPcHRpb24sIGhpZGVPcHRpb25WYWx1ZXMgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8gdGhlIGdyb3VwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQGdyb3VwYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBpZDogTnVtYmVyLFxyXG4gICAgICogICB9LFxyXG4gICAgICogQHJldHVybnMge3sgZ3JvdXBOYW1lOiBzdHJpbmcsIGdyb3VwT3B0aW9uSWRzOiBBcnJheTxudW1iZXI+IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hHcm91cCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AZ3JvdXBcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gbVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwT3B0aW9uSWRzID0gY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5tYXAocyA9PiBzLnRyaW0oKSkgLy8gb3B0aW9uIG5hbWVzXHJcbiAgICAgICAgICAgICAgICAubWFwKG9wdGlvbk5hbWUgPT4gdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGRpc3BsYXlfbmFtZSB9KSA9PiBlcXVhbE9wdGlvblN0cmluZyhkaXNwbGF5X25hbWUsIG9wdGlvbk5hbWUpKT8uaWQpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGlkID0+IGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncm91cE9wdGlvbklkcy5pbmNsdWRlcyhvcHRpb24uaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvcHRpb24gYmVsb25ncyB0byB0aGUgZ3JvdXAgaW4gdGhpcyBjdXN0b20gZmllbGRcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gZ3JvdXBOYW1lOiAke2dyb3VwTmFtZX0sIGdyb3VwT3B0aW9uSWRzOiAke2dyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZ3JvdXBOYW1lLCBncm91cE9wdGlvbklkcyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiB2YWx1ZSBoYXMgYSB0b29sdGlwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXAgbmFtZVs6dmFsdWVdID0gdG9vbHRpcGBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfVxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWUsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgbGFiZWxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9XHJcbiAgICAgKiB9fSBwYXJhbTBcclxuICAgICAqIEByZXR1cm5zIHt7IHRvb2x0aXA6IHN0cmluZyB9IHwgeyB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9IHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gbVsxXS5zcGxpdCgnOicsIDIpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IGN1c3RvbUZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdG9vbHRpcCBmb3Igb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3Igb3B0aW9uIFwiJHtuYW1lfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdG9vbHRpcCB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBzID0ge307XHJcblxyXG4gICAgICAgICAgICAvLyB0b29sdGlwIGZvciBvcHRpb24gdmFsdWVcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlcy5mb3JFYWNoKCh7IGlkLCBsYWJlbCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcobGFiZWwsIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3Igb3B0aW9uIFwiJHtuYW1lfSA6ICR7dmFsdWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwc1tpZF0gPSB0b29sdGlwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlVG9vbHRpcHMgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZ3JvdXAgaGFzIGEgdG9vbHRpcCBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0B0b29sdGlwIChncm91cCBuYW1lKSA9IHRvb2x0aXBgXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZ3JvdXBOYW1lOiBzdHJpbmdcclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3N0cmluZyB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCh7IGN1c3RvbUZpZWxkLCBncm91cE5hbWUgfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSBjdXN0b21GaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIGdyb3VwIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhncm91cE5hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgZm9yIGdyb3VwIFwiJHtuYW1lfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHZhbHVlIGhhcyBhIHRvb2x0aXAgaGVhZGluZyBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0B0b29sdGlwX2hlYWRpbmcgbmFtZTp2YWx1ZSA9IHRvb2x0aXAgaGVhZGluZ2BcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgb3B0aW9uOiB7XHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IG51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfVxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcF9oZWFkaW5nXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBtWzFdLnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gY3VzdG9tRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZSBvciBub3QgdmFsdWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICF2YWx1ZSB8fCAhZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcEhlYWRpbmdzID0ge307XHJcblxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgaWQsIGxhYmVsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGhlYWRpbmcgZm9yIG9wdGlvbiBcIiR7bmFtZX0gOiAke3ZhbHVlfVwiID0gXCJcIlwiJHtoZWFkaW5nfVwiXCJcImApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcEhlYWRpbmdzW2lkXSA9IGhlYWRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9vbHRpcEhlYWRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gbmFtZSBjb250YWlucyBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZWBcclxuICAgICAqIGFuZCByZXR1cm4gdGhlIG5ldyBuYW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMC5jdXN0b21GaWVsZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5jdXN0b21GaWVsZC5uYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLmN1c3RvbUZpZWxkLnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wLm9wdGlvblxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5vcHRpb24uZGlzcGxheV9uYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfSBuZXcgb3B0aW9uIG5hbWVcclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFJlbmFtZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AcmVuYW1lXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IFN0cmluZyhjdXN0b21GaWVsZC52YWx1ZSkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSByZW5hbWUgb3B0aW9uIFwiJHtuYW1lfVwiIHRvIFwiJHtuZXdOYW1lfVwiYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgbm9uLXNhbGUgcHJpY2UgaW4gdGhlIGN1c3RvbSBmaWVsZFxyXG4gICAgICogYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgb3B0aW9uOiB7XHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IG51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfSxcclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9fVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoTm9uU2FsZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlTm9uU2FsZXMgPSB7fTtcclxuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQG5vbnNhbGVcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBOdW1iZXIobVsxXS50cmltKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3BsaXQgZWFjaCAob3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZSkgcGFpciBzZXBhcmF0ZWQgYnkgXCI7XCJcclxuICAgICAgICAgICAgY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5mb3JFYWNoKGt2ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHNwbGl0IG9wdGlvbiBuYW1lIDogb3B0aW9uIHZhbHVlIGluIGN1c3RvbSBmaWVsZCB2YWx1ZSBzZXBhcmF0ZWQgYnkgXCI6XCJcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtvcHRpb25OYW1lLCB2YWx1ZUxhYmVsXSA9IGt2LnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBvcHRpb25OYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBuYW1lIGluIGN1c3RvbSBmaWVsZCBtYXRjaCB3aXRoIGN1cnJlbnQgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIG9wdGlvbiB2YWx1ZSBJRCB0aGF0IG1hdGNoZXMgd2l0aCB0aGUgdmFsdWUgbGFiZWwgaW4gY3VzdG9tIGZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IG9wdGlvbi52YWx1ZXMuZmluZCgoeyBsYWJlbCB9KSA9PiBlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWVMYWJlbCkpPy5pZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gbm9uLXNhbGUgcHJpY2UgY29ycmVzcG9uZGluZyB0byB0aGUgb3B0aW9uIHZhbHVlIElEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTm9uU2FsZXNbdmFsdWVJZF0gPSBwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWVOb25TYWxlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHN0b3JlIHNldHRpbmdzIGluY2x1ZGluZyB0YXggYW5kIGFjdGl2ZSBjdXJyZW5jeVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHtcclxuICAgICAqICAgdGF4OiB7IHBkcDogbnVtYmVyIH0sXHJcbiAgICAgKiAgIGN1cnJlbmN5OiB7XHJcbiAgICAgKiAgICAgY29kZTogc3RyaW5nLFxyXG4gICAgICogICAgIGRpc3BsYXk6IHsgZGVjaW1hbFBsYWNlczogbnVtYmVyLCBkZWNpbWFsVG9rZW46IHN0cmluZywgc3ltYm9sOiBzdHJpbmcsIHN5bWJvbFBsYWNlbWVudDogc3RyaW5nLCB0aG91c2FuZHNUb2tlbjogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgZXhjaGFuZ2VSYXRlOiBudW1iZXIsIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZGVmYXVsdEN1cnJlbmN5OiB7XHJcbiAgICAgKiAgICAgY29kZTogc3RyaW5nLFxyXG4gICAgICogICAgIGRpc3BsYXk6IHsgZGVjaW1hbFBsYWNlczogbnVtYmVyLCBkZWNpbWFsVG9rZW46IHN0cmluZywgc3ltYm9sOiBzdHJpbmcsIHN5bWJvbFBsYWNlbWVudDogc3RyaW5nLCB0aG91c2FuZHNUb2tlbjogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgZXhjaGFuZ2VSYXRlOiBudW1iZXIsIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqIH0+XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGZldGNoU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgaWYgKGNhY2hlZFNldHRpbmdzKSByZXR1cm4gY2FjaGVkU2V0dGluZ3M7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY29udGV4dC5ncmFwaFFMVG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWZhdWx0Q3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3koY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQ3VycmVuY3lGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeTogY3VycmVuY3koY3VycmVuY3lDb2RlOiAkZGVmYXVsdEN1cnJlbmN5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkN1cnJlbmN5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IEN1cnJlbmN5RmllbGRzIG9uIEN1cnJlbmN5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xQbGFjZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kc1Rva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2VSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuYWN0aXZlX2N1cnJlbmN5X2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5Q29kZTogdGhpcy5jb250ZXh0LmRlZmF1bHRfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYWNoZWRTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgLi4ucmVzcC5kYXRhLnNpdGUuc2V0dGluZ3MsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiByZXNwLmRhdGEuc2l0ZS5jdXJyZW5jeSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gY2FjaGVkU2V0dGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBvcHRpb24gcHJpY2VzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTx7IGlkOiBudW1iZXIsIHZhbHVlczogQXJyYXk8eyBpZDogbnVtYmVyIH0+IH0+fSBzaG93T3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PHtcclxuICAgICAqICAgb3B0aW9uSWQ6IG51bWJlcnxudWxsLFxyXG4gICAgICogICB2YWx1ZUlkOiBudW1iZXJ8bnVsbCxcclxuICAgICAqICAgcHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIHByaWNlc1dpdGhvdXRUYXg6IHtcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBhZGp1c3RlZFByaWNlc1dpdGhUYXg6IHtcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIG5vblNhbGVQcmljZVZhbHVlOiBudW1iZXIsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIGFkanVzdGVkUHJpY2VzV2l0aG91dFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG51bWJlcixcclxuICAgICAqICAgfSxcclxuICAgICAqIH0+Pn1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hPcHRpb25QcmljZXMoc2hvd09wdGlvbnMsIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5lbnRyaWVzKCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSBrZXkubWF0Y2goL15hdHRyaWJ1dGVcXFsoXFxkKylcXF0kLyk7XHJcbiAgICAgICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25FbnRpdHlJZCA9IE51bWJlcihtWzFdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlRW50aXR5SWQgPSBOdW1iZXIodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUVudGl0eUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaG93T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBvcHRpb25FbnRpdHlJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcy5wdXNoKHsgb3B0aW9uRW50aXR5SWQsIHZhbHVlRW50aXR5SWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNvbWJvc1swXSBpcyB0aGUgYmFzZWxpbmUgKGFscmVhZHkgc2VsZWN0ZWQgb3B0aW9ucyk7IHRoZSByZXN0IGFyZSBvbmUgY2FuZGlkYXRlIHZhbHVlIGVhY2hcclxuICAgICAgICBjb25zdCBjb21ib3MgPSBbc2VsZWN0ZWRPcHRpb25WYWx1ZUlkc107XHJcbiAgICAgICAgY29uc3QgY29tYm9zTWV0YSA9IFtudWxsXTtcclxuXHJcbiAgICAgICAgc2hvd09wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBvcHRpb24udmFsdWVzIHx8IChvcHRpb24udmFsdWUgPyBbeyBpZDogb3B0aW9uLnZhbHVlIH1dIDogW10pO1xyXG5cclxuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29tYm9zLnB1c2goW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkT3B0aW9uVmFsdWVJZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBvcHRpb25FbnRpdHlJZDogb3B0aW9uLmlkLCB2YWx1ZUVudGl0eUlkOiB2YWx1ZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICBjb21ib3NNZXRhLnB1c2goeyBvcHRpb25JZDogb3B0aW9uLmlkLCB2YWx1ZUlkOiB2YWx1ZS5pZCB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgdGhpcy5mZXRjaE9wdGlvblByaWNlc0JhdGNoKGNvbWJvcyk7XHJcbiAgICAgICAgY29uc3QgW3ByZXYsIC4uLnNlbGVjdGlvbnNdID0gcHJvZHVjdHMubWFwKChwcm9kdWN0LCBpKSA9PiAoaSA9PT0gMCA/IHByb2R1Y3QgOiB7IC4uLmNvbWJvc01ldGFbaV0sIC4uLnByb2R1Y3QgfSkpO1xyXG5cclxuICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goc2VsZWN0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vbi1zYWxlIHByaWNlIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBwcmljZSBhbmQgdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNpZGVyIGFsbCBub3cgcHJpY2UgYW5kIHJlZ3VsYXIgcHJpY2VcclxuICAgICAgICAgICAgICAgIGxldCBub25TYWxlUHJpY2VXaXRoVGF4ID0gc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4Py5wcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5wcmljZS52YWx1ZSAtIHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBub24tc2FsZSBwcmljZSBpZiBpdCdzIGxlc3MgdGhhbiB0aGUgY3VycmVudCBwcmljZVxyXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGVQcmljZVdpdGhUYXggPD0gc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5hZGp1c3RlZFByaWNlc1dpdGhUYXggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LmJhc2VQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG5vblNhbGVQcmljZVdpdGhUYXgsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9uLXNhbGUgcHJpY2UgYmFzZWQgb24gdGhlIHByZXZpb3VzIHByaWNlIGFuZCB0aGUgY3VycmVudCBwcmljZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc2lkZXIgYWxsIG5vdyBwcmljZSBhbmQgcmVndWxhciBwcmljZVxyXG4gICAgICAgICAgICAgICAgbGV0IG5vblNhbGVQcmljZVdpdGhvdXRUYXggPSBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8ucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXg/LnByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LnByaWNlLnZhbHVlIC0gc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LmJhc2VQcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG5vbi1zYWxlIHByaWNlIGlmIGl0J3MgbGVzcyB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBpZiAobm9uU2FsZVByaWNlV2l0aG91dFRheCA8PSBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFkanVzdGVkUHJpY2VzV2l0aG91dFRheCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VWYWx1ZTogbm9uU2FsZVByaWNlV2l0aG91dFRheCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBmZXRjaE9wdGlvblByaWNlcyByZXR1cm5zOiAnLCBzZWxlY3Rpb25zKTtcclxuICAgICAgICByZXR1cm4gW3ByZXYsIC4uLnNlbGVjdGlvbnNdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2ggcHJvZHVjdCBwcmljZSBmcm9tIHNwZWNpZmljIG9wdGlvbnNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PHsgb3B0aW9uRW50aXR5SWQ6IG51bWJlciwgdmFsdWVFbnRpdHlJZDogbnVtYmVyfT59IG9wdGlvblZhbHVlSWRzXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFyaWFudCBmZXRjaCB0aGUgbWF0Y2hpbmcgU0tVL3ZhcmlhbnQncyBvd24gcHJpY2UgaW5zdGVhZCBvZiB0aGUgYmFzZSBwcm9kdWN0ICsgbW9kaWZpZXJzXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHByaWNlc1dpdGhUYXg6IHsgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IH0sIHByaWNlc1dpdGhvdXRUYXg6IHsgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9IH0gfT5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hPcHRpb25QcmljZShvcHRpb25WYWx1ZUlkcykge1xyXG4gICAgICAgIGNvbnN0IFtwcm9kdWN0XSA9IGF3YWl0IHRoaXMuZmV0Y2hPcHRpb25QcmljZXNCYXRjaChbb3B0aW9uVmFsdWVJZHNdKTtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHByaWNlcyBmb3IgbXVsdGlwbGUgb3B0aW9uLXZhbHVlIGNvbWJpbmF0aW9ucywgbWVyZ2luZyBhcyBtYW55IGFzIHBvc3NpYmxlIGludG8gYVxyXG4gICAgICogc2luZ2xlIEdyYXBoUUwgcmVxdWVzdCAodmlhIGFsaWFzZXMpIGluc3RlYWQgb2Ygb25lIHJlcXVlc3QgcGVyIGNvbWJpbmF0aW9uLCB0byBjdXQgZG93blxyXG4gICAgICogb24gdGhlIG51bWJlciBvZiBuZXR3b3JrIHJvdW5kLXRyaXBzICh0aGUgbWFpbiBjb3N0LCBub3QgcGF5bG9hZCBzaXplKS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PHsgb3B0aW9uRW50aXR5SWQ6IG51bWJlciwgdmFsdWVFbnRpdHlJZDogbnVtYmVyfT4+fSBjb21ib3NcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8Ym9vbGVhbj59IGlzVmFyaWFudEZsYWdzIHBlci1jb21ibzogbG9vayB1cCB0aGUgbWF0Y2hpbmcgdmFyaWFudC9TS1UgcHJpY2VcclxuICAgICAqICAgKG5lZWRlZCBmb3IgXCJ2YXJpYW50IG9wdGlvblwiIGF0dHJpYnV0ZXMsIHdoaWNoIGRlZmluZSBzZXBhcmF0ZSBTS1VzKSBpbnN0ZWFkIG9mIHRoZVxyXG4gICAgICogICBiYXNlIHByb2R1Y3QgcHJpY2UgKyBtb2RpZmllciBhZGp1c3RtZW50XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTx7IHByaWNlc1dpdGhUYXg6IG9iamVjdCwgcHJpY2VzV2l0aG91dFRheDogb2JqZWN0IH0+Pn0gcmVzdWx0cywgc2FtZSBvcmRlci9sZW5ndGggYXMgYGNvbWJvc2BcclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hPcHRpb25QcmljZXNCYXRjaChjb21ib3MpIHtcclxuICAgICAgICBjb25zdCBCQVRDSF9DSFVOS19TSVpFID0gODtcclxuICAgICAgICBjb25zdCBjYWNoZUtleXMgPSBjb21ib3MubWFwKGNvbWJvID0+IGBwcm9kdWN0OiR7SlNPTi5zdHJpbmdpZnkoY29tYm8pfWApO1xyXG4gICAgICAgIGNvbnN0IHVuY2FjaGVkSW5kZXhlcyA9IGNhY2hlS2V5c1xyXG4gICAgICAgICAgICAubWFwKChrZXksIGluZGV4KSA9PiAodGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVba2V5XSA/IG51bGwgOiBpbmRleCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoaW5kZXggPT4gaW5kZXggIT09IG51bGwpO1xyXG5cclxuICAgICAgICBjb25zdCBjaHVua3MgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuY2FjaGVkSW5kZXhlcy5sZW5ndGg7IGkgKz0gQkFUQ0hfQ0hVTktfU0laRSkge1xyXG4gICAgICAgICAgICBjaHVua3MucHVzaCh1bmNhY2hlZEluZGV4ZXMuc2xpY2UoaSwgaSArIEJBVENIX0NIVU5LX1NJWkUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IGhhbmRsZVByb21pc2VzV2l0aExpbWl0KGNodW5rcy5tYXAoY2h1bmtJbmRleGVzID0+IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVEZWZzID0gY2h1bmtJbmRleGVzLm1hcChpID0+IGAkb3B0aW9uVmFsdWVJZHMke2l9OiBbT3B0aW9uVmFsdWVJZCFdYCkuam9pbignLCAnKTtcclxuICAgICAgICAgICAgY29uc3QgYWxpYXNGaWVsZHMgPSBjaHVua0luZGV4ZXMubWFwKGkgPT4gYFxyXG4gICAgICAgICAgICAgICAgZiR7aX06IHByb2R1Y3QoZW50aXR5SWQ6ICRwcm9kdWN0SWQsIG9wdGlvblZhbHVlSWRzOiAkb3B0aW9uVmFsdWVJZHMke2l9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzV2l0aFRheDogcHJpY2VzKGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZSwgaW5jbHVkZVRheDogdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRob3V0VGF4OiBwcmljZXMoY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlLCBpbmNsdWRlVGF4OiBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYCkuam9pbignXFxuJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuYWN0aXZlX2N1cnJlbmN5X2NvZGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNodW5rSW5kZXhlcy5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzW2BvcHRpb25WYWx1ZUlkcyR7aX1gXSA9IGNvbWJvc1tpXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICgkcHJvZHVjdElkOiBJbnQhLCAkY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhLCAke3ZhcmlhYmxlRGVmc30pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHthbGlhc0ZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IFByaWNlRmllbGRzIG9uIFByaWNlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2h1bmtJbmRleGVzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcC5kYXRhPy5zaXRlPy5bYGYke2l9YF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVbY2FjaGVLZXlzW2ldXSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRvbid0IGxldCBvbmUgYmFkIGNodW5rIChlLmcuIGFuIHVuc3VwcG9ydGVkIHZhcmlhbnQgcHJpY2luZyBxdWVyeSBvbiB0aGlzXHJcbiAgICAgICAgICAgICAgICAvLyBzdG9yZSkgdGFrZSBkb3duIHByaWNpbmcgZm9yIGV2ZXJ5IG90aGVyIG9wdGlvbiBvbiB0aGUgcGFnZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBmZXRjaE9wdGlvblByaWNlc0JhdGNoIGNodW5rIGZhaWxlZDogJywgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCA0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhY2hlS2V5cy5tYXAoa2V5ID0+IHRoaXMuZmV0Y2hPcHRpb25QcmljZUNhY2hlW2tleV0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheSB0b29sdGlwcyB0byB0aGUgY29ycmVzcG9uZGluZyBzaG93biBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxUaXRsZVxyXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyB0b29sdGlwOiBzdHJpbmcsIHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0gfX0gdG9vbHRpcHNcclxuICAgICAqIEBwYXJhbSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH19IHRvb2x0aXBIZWFkaW5nc1xyXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaG93T3B0aW9uSWRzIG9wdGlvbiBpZHMgdG8gc2hvdyB0b29sdGlwc1xyXG4gICAgICovXHJcbiAgICBzaG93T3B0aW9uVG9vbHRpcHMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsVGl0bGUsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MsIHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICAvLyBEaXNwbGF5IHRvb2x0aXBcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwcykuZm9yRWFjaCgoW29wdGlvbklkLCB7IHRvb2x0aXAsIHZhbHVlVG9vbHRpcHMgfV0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcihvcHRpb25JZCkpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdG9vbHRpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIG9wdGlvbklkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkb3B0aW9uLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQ9XCIke29wdGlvbklkfVwiXWApLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRsYWJlbCA9ICRvcHRpb24uZmluZCgnbGFiZWwnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkbGFiZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYWJlbC5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb24ucHJlcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcHMpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB2YWx1ZVRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICRvcHRpb24uZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICR2YWx1ZS5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpZiBvbmx5IDEgb3B0aW9uIHNob3duIGF0IGN1cnJlbnQgc3RlcCxcclxuICAgICAgICAvLyB0aGVuIG1vdmUgaXRzIHRvb2x0aXAgdG8gdGhlIG1vZGFsIHRpdGxlXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtzaG93T3B0aW9uSWRzWzBdfVwiXWApO1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSB0b29sdGlwIGhlYWRpbmdcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwSGVhZGluZ3MpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKFtvcHRpb25JZF0pID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKG9wdGlvbklkKSkpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChbb3B0aW9uSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmdzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcEhlYWRpbmdzKS5mb3JFYWNoKChbdmFsdWVJZCwgdmFsdWVUb29sdGlwSGVhZGluZ10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwSGVhZGluZyA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUucmVwbGFjZSgnPCVoZWFkaW5nJT4nLCB2YWx1ZVRvb2x0aXBIZWFkaW5nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMoKSB7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKCEkcHJvZHVjdE9wdGlvbnNFbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZF0sIFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZF0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2R1Y3RPcHRpb25zLmxlbmd0aCB8fCAhdGhpcy5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbklkcyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkXScpXHJcbiAgICAgICAgICAgIC5tYXAoKF9pbmRleCwgZWwpID0+IE51bWJlcigkKGVsKS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSlcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBzID0ge307XHJcbiAgICAgICAgY29uc3QgdG9vbHRpcEhlYWRpbmdzID0ge307XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBvcHRpb25JZHMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAgICAgICAuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdG9vbHRpcE1hdGNoLnRvb2x0aXAgfHwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcHM6IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBzW29wdGlvbi5pZF0/LnZhbHVlVG9vbHRpcHMsIHRvb2x0aXBNYXRjaC52YWx1ZVRvb2x0aXBzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUb29sdGlwSGVhZGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSwgdmFsdWVUb29sdGlwSGVhZGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93SW5saW5lT3B0aW9uVG9vbHRpcHMoJHByb2R1Y3RPcHRpb25zRWwsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNwZWNUb29sdGlwcygpIHtcclxuICAgICAgICBjb25zdCBwcmVmaXggPSAnX19Ac3BlY190b29sdGlwICc7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIE1BU1RFUiBTUEVDIFRPT0xUSVBTXHJcbiAgICAgICAgLy8gQWRkIGVudHJpZXMgaGVyZSB0byBzaG93IGEgdG9vbHRpcCBvbiBldmVyeSBwcm9kdWN0IHBhZ2UgZm9yXHJcbiAgICAgICAgLy8gdGhhdCBzcGVjIHJvdyBhdXRvbWF0aWNhbGx5LiBObyBjdXN0b20gZmllbGQgbmVlZGVkIHBlciBwcm9kdWN0LlxyXG4gICAgICAgIC8vIFBlci1wcm9kdWN0IGN1c3RvbSBmaWVsZHMgKGUuZy4gX19Ac3BlY190b29sdGlwIE1lbW9yeSkgd2lsbFxyXG4gICAgICAgIC8vIG92ZXJyaWRlIHRoZXNlIHZhbHVlcyBpZiBwcmVzZW50LlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGNvbnN0IG1hc3RlclRvb2x0aXBzID0ge1xyXG4gICAgICAgICAgICAnTWVtb3J5JzogJ05vdCBzdXJlIGlmIHRoaXMgaXMgdGhlIHJpZ2h0IGFtb3VudCBvZiBtZW1vcnkgZm9yIHlvdXIgbmVlZHM/IFJlZmVyIHRvIG91ciBibG9nIG9uIDxhIGhyZWY9XCJodHRwczovL3d3dy5ib2Jqb2huc29uLmNvbS9ibG9nL2hvdy1tdWNoLXJhbS1kby15b3UtYWN0dWFsbHktbmVlZC1pbi1hLXJ1Z2dlZC1sYXB0b3AvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UkFNIE5lZWRzIGluIGEgcnVnZ2VkIGxhcHRvcDwvYT4uJyxcclxuICAgICAgICAgICAgLy8gJ1N0b3JhZ2UnOiAnVGhlIGRyaXZlIHdoZXJlIHlvdXIgZmlsZXMgYW5kIE9TIGFyZSBzdG9yZWQuJyxcclxuICAgICAgICAgICAgLy8gJ1Byb2Nlc3Nvcic6ICdUaGUgQ1BVIGlzIHRoZSBicmFpbiBvZiB0aGUgY29tcHV0ZXIuJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgYW55IHByZXZpb3VzbHkgaW5qZWN0ZWQgc3BlYyB0b29sdGlwc1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXNwZWMtdG9vbHRpcF0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgLy8gQnVpbGQgZmluYWwgbWFwOiBzdGFydCB3aXRoIG1hc3RlciBkZWZhdWx0cywgb3ZlcnJpZGUgd2l0aCBwZXItcHJvZHVjdCBjdXN0b20gZmllbGRzXHJcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRUb29sdGlwcyA9IHsgLi4ubWFzdGVyVG9vbHRpcHMgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbmFtZS5zdGFydHNXaXRoKHByZWZpeCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3BlY05hbWUgPSBuYW1lLnNsaWNlKHByZWZpeC5sZW5ndGgpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzcGVjTmFtZSAmJiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRUb29sdGlwc1tzcGVjTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyhyZXNvbHZlZFRvb2x0aXBzKS5mb3JFYWNoKChbc3BlY05hbWUsIHRvb2x0aXBUZXh0XSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZGQgPSB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1zcGVjLW5hbWU9XCIke3NwZWNOYW1lfVwiXWApLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRkZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdG9vbHRpcFRleHQpKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtc3BlYy10b29sdGlwJywgc3BlY05hbWUpO1xyXG5cclxuICAgICAgICAgICAgJGRkLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0lubGluZU9wdGlvblRvb2x0aXBzKCRwcm9kdWN0T3B0aW9uc0VsLCB0b29sdGlwcywgdG9vbHRpcEhlYWRpbmdzKSB7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9vbHRpcHMpLmZvckVhY2goKFtvcHRpb25JZCwgeyB0b29sdGlwLCB2YWx1ZVRvb2x0aXBzID0ge30gfV0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJG9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBvcHRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbGFiZWwgPSAkb3B0aW9uLmZpbmQoJ2xhYmVsJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGxhYmVsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbGFiZWwuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5wcmVwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwcykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcF0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB2YWx1ZVRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJ29wdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnOnNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRvcHRpb24uZmluZCgnc2VsZWN0JykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2VsZWN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzZWxlY3QuYWZ0ZXIoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYWZ0ZXIoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9vbHRpcEhlYWRpbmdzKS5mb3JFYWNoKChbb3B0aW9uSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmdzXSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkb3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZVRvb2x0aXBIZWFkaW5ncykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmddKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEkdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwSGVhZGluZyA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUucmVwbGFjZSgnPCVoZWFkaW5nJT4nLCB2YWx1ZVRvb2x0aXBIZWFkaW5nKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWhlYWRpbmctaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJ29wdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnOnNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRvcHRpb24uZmluZCgnc2VsZWN0JykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2VsZWN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzZWxlY3QuYWZ0ZXIoJHRvb2x0aXBIZWFkaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb24uYXBwZW5kKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5hcHBlbmQoJHRvb2x0aXBIZWFkaW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gb3B0aW9ucyBhbmQgZGlzcGxheSBjb250aW51ZSBidXR0b24gaWYgbmVjZXNzYXJ5LlxyXG4gICAgICogU3RvcCBhdXRvIHVwZGF0ZSB0aGUgbW9kaWZpZXJzIHZpZXcgdW50aWwgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICpcclxuICAgICAqIENvbnRpbnVlIGJ1dHRvbiBpcyBzaG93biBpZiBhbnkgb2YgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAgICAgKiAtIG9wdGlvbnMgdGhhdCBoYXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICogLSBjaGVja2JveCBvcHRpb25zXHJcbiAgICAgKiAtIG9wdGlvbmFsIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgKiAtIG9wdGlvbmFsIGRhdGUgc2VsZWN0IG9wdGlvbnNcclxuICAgICAqIC0gZmlsZSBpbnB1dFxyXG4gICAgICogLSBtb3JlIHRoYW4gMSBvcHRpb24gYXJlIHNob3duIGF0IHRoZSBzYW1lIHRpbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IHNob3dPcHRpb25JZHMgc2hvdyBvcHRpb24gaWRzXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbENvbnRpbnVlXHJcbiAgICAgKi9cclxuICAgIHBvcHVsYXRlRGVmYXVsdE9wdGlvblZhbHVlcyhzaG93T3B0aW9uSWRzLCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSkge1xyXG4gICAgICAgIGNvbnN0IHNob3duT3B0aW9ucyA9IHRoaXMucHJvZHVjdE9wdGlvbnMuZmlsdGVyKCh7IGlkIH0pID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoaWQpKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogb3B0aW9ucyB0aGF0IGhhcyBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBwcmVmaWxsLCBzZWxlY3RlZF9kYXRlLCB2YWx1ZXMgfSkgPT5cclxuICAgICAgICAgICAgICAgIHByZWZpbGwgfHxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkX2RhdGUgJiYgKHNlbGVjdGVkX2RhdGUuZGF5IHx8IHNlbGVjdGVkX2RhdGUubW9udGggfHwgc2VsZWN0ZWRfZGF0ZS55ZWFyKSB8fFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzPy5maW5kKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNoZWNrYm94IHR5cGUgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94T3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IG5vVmFsdWUsIHZhbHVlIH0pID0+IG5vVmFsdWUgfHwgdmFsdWUpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBmaWxlIHR5cGUgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGZpbGVPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnaW5wdXQtZmlsZScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBkYXRlIHR5cGUgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRhdGVPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnZGF0ZScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBkcm9wZG93biB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyByZXF1aXJlZCwgcGFydGlhbCB9KSA9PiAhcmVxdWlyZWQgJiYgcGFydGlhbCA9PT0gJ3NldC1zZWxlY3QnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdGV4dCAvIG11bHRpbGluZSAvIG51bWJlciBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgdGV4dE9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBwYXJ0aWFsIH0pID0+IHBhcnRpYWwgPT09ICdpbnB1dC10ZXh0JyB8fCBwYXJ0aWFsID09PSAndGV4dGFyZWEnIHx8IHBhcnRpYWwgPT09ICdpbnB1dC1udW1iZXJzJyk7XHJcblxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDFcclxuICAgICAgICAgICAgfHwgZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMCB8fCBjaGVja2JveE9wdGlvbnMubGVuZ3RoID4gMCB8fCBmaWxlT3B0aW9ucy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgIHx8IGRhdGVPcHRpb25zLmxlbmd0aCA+IDAgfHwgZHJvcGRvd25PcHRpb25zLmxlbmd0aCA+IDAgfHwgdGV4dE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBzaG93IGNvbnRpbnVlIGJ1dHRvblxyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxDb250aW51ZS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGF1dG8gdXBkYXRlIHRoZSBtb2RpZmllcnMgdmlldyB1bnRpbCB0aGUgY29udGludWUgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIHRvIHRoZSBzaG93biBvcHRpb25zXHJcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgICAgIGlkLCBwcmVmaWxsLCBzZWxlY3RlZF9kYXRlLCB2YWx1ZXMsXHJcbiAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZXM/LmZpbmQoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpPy5pZDtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdzZWxlY3QnKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXWApLnZhbCh2YWx1ZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3ZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlZmlsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXQsIHRleHRhcmVhJykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1gKS52YWwocHJlZmlsbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkX2RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRfZGF0ZS5kYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bZGF5XVwiXWApLnZhbChzZWxlY3RlZF9kYXRlLmRheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9kYXRlLm1vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW21vbnRoXVwiXWApLnZhbChzZWxlY3RlZF9kYXRlLm1vbnRoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX2RhdGUueWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVt5ZWFyXVwiXWApLnZhbChzZWxlY3RlZF9kYXRlLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gY2hlY2tib3ggb3B0aW9uc1xyXG4gICAgICAgICAgICBjaGVja2JveE9wdGlvbnMuZm9yRWFjaCgoe1xyXG4gICAgICAgICAgICAgICAgaWQsIGNoZWNrZWQsIHZhbHVlLCBub1ZhbHVlLFxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImhpZGRlblwiXWApLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiY2hlY2tib3hcIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImhpZGRlblwiXWApLnZhbChub1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJjaGVja2JveFwiXWApLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gbWFyayBmaWxlIGlucHV0LCBkYXRlIGlucHV0LCBkcm9wZG93biBzZWxlY3QsIHRleHQgaW5wdXQgYXMgc2hvd25cclxuICAgICAgICAgICAgWy4uLmZpbGVPcHRpb25zLCAuLi5kYXRlT3B0aW9ucywgLi4uZHJvcGRvd25PcHRpb25zLCAuLi50ZXh0T3B0aW9uc10uZm9yRWFjaCgoeyBpZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW2RheV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVttb250aF1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVt5ZWFyXVwiXWApLmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVNob3dPcHRpb25QcmljZXNQcmVsb2FkZXIoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHByZWxvYWRlcjogdHJ1ZSB9O1xyXG4gICAgICAgIGNvbnN0IHByaWNlSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICBjb25zdCBwcmljZVRleHQgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVBsYWluVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICBjb25zdCBzdWJ0b3RhbEh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcblxyXG4gICAgICAgIHNob3dPcHRpb25JZHMuZm9yRWFjaChvcHRpb25JZCA9PiB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAgICAgICAgICAgIC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXWApXHJcbiAgICAgICAgICAgICAgICAuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IE51bWJlcigkdmFsdWUuYXR0cignZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlSWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJpY2UgPSAkKHByaWNlSHRtbCkuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJ29wdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGFscmVhZHkgaGFzIHByaWNlIGRpc3BsYXllZCBiZWZvcmU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuZGF0YSgncHJpY2VIdG1sJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcsICR2YWx1ZS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLnRleHQoYCR7JHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpfSAke3ByaWNlVGV4dH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRvbGQgPSAkdmFsdWUuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkb2xkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGxhY2Vob2xkZXIgPSAkdmFsdWUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtcGxhY2Vob2xkZXJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsU3VidG90YWwuaHRtbChzdWJ0b3RhbEh0bWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheSBwcmljZXMgdG8gY29ycmVzcG9uZGluZyBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbFxyXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaG93T3B0aW9uSWRzIG9wdGlvbiBpZHMgdG8gc2hvdyBwcmljZXNcclxuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXHJcbiAgICAgKiBAcGFyYW0ge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfSB9fSBub25lU2FsZXMgb3B0aW9uIHZhbHVlcyB3aXRoIG5vbi1zYWxlIHByaWNlc1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaWdub3JlVXBkYXRlU3VidG90YWw9ZmFsc2VdIGlnbm9yZSB1cGRhdGUgc3VidG90YWxcclxuICAgICAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiBBdXRvLWNhbGN1bGF0ZSBhbmQgZGlzcGxheSBlYWNoIG9wdGlvbiB2YWx1ZSdzIHByaWNlIGFkanVzdG1lbnQgKGUuZy4gXCIoKyQxMDAuMDApXCIpXHJcbiAgICAgKiBuZXh0IHRvIGl0cyBsYWJlbCBvbiB0aGUgcGxhaW4gKG5vbi1tb2RhbCkgb3B0aW9uIGxpc3QsIHNvIGFkbWlucyBubyBsb25nZXIgbmVlZCB0b1xyXG4gICAgICogbWFudWFsbHkgdHlwZSB0aGUgcHJpY2UgZGlmZmVyZW5jZSBpbnRvIHRoZSBvcHRpb24gdmFsdWUgbmFtZS5cclxuICAgICAqL1xyXG4gICAgaW5pdElubGluZU9wdGlvblByaWNlSGludHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpLmZpcnN0KCk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKCRwcm9kdWN0T3B0aW9uc0VsLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5wcm9kdWN0T3B0aW9ucz8ubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtWzBdKTtcclxuICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5tYXAoKHsgaWQgfSkgPT4gaWQpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dPcHRpb25QcmljZXMoJHByb2R1Y3RPcHRpb25zRWwsICQoKSwgc2hvd09wdGlvbklkcywgZm9ybURhdGEsIHt9LCB0cnVlKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaW5pdElubGluZU9wdGlvblByaWNlSGludHMgZmFpbGVkOiAnLCBlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaG93T3B0aW9uUHJpY2VzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzLCBmb3JtRGF0YSwgbm9uZVNhbGVzLCBpZ25vcmVVcGRhdGVTdWJ0b3RhbCA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgW3NldHRpbmdzLCBbcHJldiwgLi4uc2VsZWN0aW9uc11dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoU2V0dGluZ3MoKSxcclxuICAgICAgICAgICAgdGhpcy5mZXRjaE9wdGlvblByaWNlcyhcclxuICAgICAgICAgICAgICAgIHNob3dPcHRpb25JZHMubWFwKF9pZCA9PiB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IF9pZCkpLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dQcmljZSA9IHZhbHVlID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgTWF0aC5hYnMoTnVtYmVyKHZhbHVlKSkgPCAwLjAwNSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFByaWNlKHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgb3B0aW9uSWQsIHZhbHVlSWQsIGFkanVzdGVkUHJpY2VzV2l0aFRheCwgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4LFxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiBhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXg6IHNob3dQcmljZShhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiAoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUsIHRydWUpIDogJycpLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiBzaG93UHJpY2UoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IChhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlLCB0cnVlKSA6ICcnKSxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyYW1zLnByaWNlV2l0aFRheCB8fCBwYXJhbXMucHJpY2VXaXRob3V0VGF4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvdmVycmlkZSBub24tc2FsZSBwcmljZSBmb3Igb3B0aW9uIHZhbHVlcyBpZiBpdCBpcyBhcHBlYXJzIGluIGN1c3RvbSBmaWVsZCBgX19Abm9uc2FsZWBcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBpZiBpdCdzIGhpZ2hlciB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub25TYWxlID0gbm9uZVNhbGVzW29wdGlvbklkXT8uW3ZhbHVlSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGNoYW5nZWROb25TYWxlID0gbm9uU2FsZSAqIHNldHRpbmdzLmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVZhbHVlID0gc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSA6IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNoYW5nZWROb25TYWxlID4gcHJpY2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IGV4Y2hhbmdlZE5vblNhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogdGhpcy5mb3JtYXRQcmljZShleGNoYW5nZWROb25TYWxlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiBleGNoYW5nZWROb25TYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IHRoaXMuZm9ybWF0UHJpY2UoZXhjaGFuZ2VkTm9uU2FsZSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVRleHQgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVBsYWluVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcmljZSA9ICQocHJpY2VIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgIC8vIHNjb3BlIHRvIHRoZSBsYWJlbCBvbmx5OiBzb21lIGxheW91dHMgKGUuZy4gaW1hZ2UgbGlzdCBpdGVtcykgYWxzbyBwdXRcclxuICAgICAgICAgICAgICAgIC8vIGRhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWUgb24gdGhlIHN1cnJvdW5kaW5nIDxsaT4sIHdoaWNoIHdvdWxkIG90aGVyd2lzZVxyXG4gICAgICAgICAgICAgICAgLy8gbWF0Y2ggdG9vIGFuZCBkdXBsaWNhdGUgdGhlIHByaWNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYGxhYmVsW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdLCBvcHRpb25bZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkb24ndCBzaG93IGEgcHJpY2UgZm9yIG91dC1vZi1zdG9jay91bmF2YWlsYWJsZSB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaGFzQ2xhc3MoJ3VuYXZhaWxhYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlU2VsZWN0b3IgPSBgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtcy5wcmljZVdpdGhUYXggJiYgIXBhcmFtcy5wcmljZVdpdGhvdXRUYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZmluZChwcmljZVNlbGVjdG9yKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JywgJHZhbHVlLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS50ZXh0KGAkeyR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKX0gJHtwcmljZVRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ3ByaWNlSHRtbCcsIHByaWNlSHRtbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKHByaWNlU2VsZWN0b3IpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwbGFjZWhvbGRlciA9ICR2YWx1ZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1wbGFjZWhvbGRlcl0nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwoJHByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNob3cgc3VidG90YWwgY2FsY3VsYXRlZCBmcm9tIGFsbCBzZWxlY3RlZCBvcHRpb25zIGZvciB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgaWYgKCFpZ25vcmVVcGRhdGVTdWJ0b3RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25TdWJ0b3RhbCgkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgcHJldiwgc2V0dGluZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgc3VidG90YWwgZm9yIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VidG90YWxcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBwcmljZXNXaXRoVGF4OiB7XHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB8IG51bGwsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIHByaWNlc1dpdGhvdXRUYXg6IHtcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB8IG51bGwsXHJcbiAgICAgKiB9fSBwcm9kdWN0XHJcbiAgICAgKiBAcGFyYW0ge3sgdGF4OiB7IHBkcDogbnVtYmVyIH0gfX0gc2V0dGluZ3NcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHNob3dPcHRpb25TdWJ0b3RhbCgkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgcHJvZHVjdCwgc2V0dGluZ3MpIHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0eHRTdWJ0b3RhbDogdGhpcy5jb250ZXh0LnR4dFN1YnRvdGFsLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aFRheDogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiAnJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdC5wcmljZXNXaXRoVGF4Py5wcmljZSB8fCBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXg/LnByaWNlKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlID8gcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXg6IHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgPiBwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUpIDogJycsXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdJTkMnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlID8gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgPiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUpIDogJycsXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgc3VtbWFyeSBvZiBzZWxlY3RlZCBvcHRpb25zIGJlZm9yZSBhZGRpbmcgdG8gY2FydFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VtbWFyeVxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsVGl0bGVcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkYWRkVG9DYXJ0V3JhcHBlclxyXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJlbG9hZGVyXHJcbiAgICAgKi9cclxuICAgIHNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhLCBwcmVsb2FkZXIgPSBmYWxzZSkge1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmh0bWwodGhpcy5jb250ZXh0LnR4dFJldmlld1NlbGVjdGlvbnMpO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gIXByZWxvYWRlclxyXG4gICAgICAgICAgICA/ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoKVxyXG4gICAgICAgICAgICA6IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHsgcHJlbG9hZGVyIH0sIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgY29uc3QgJHN1YnRvdGFsID0gJChzdWJ0b3RhbEh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlLXN1YnRvdGFsJywgJycpO1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF5U3RyID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVtkYXldYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoU3RyID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1gKTtcclxuICAgICAgICAgICAgY29uc3QgeWVhclN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1beWVhcl1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXlTdHIgfHwgbW9udGhTdHIgfHwgeWVhclN0cikge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZGlzcGxheV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShgJHt5ZWFyU3RyfS0ke21vbnRoU3RyfS0ke2RheVN0cn1gKS50b0xvY2FsZURhdGVTdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZTogYCR7eWVhclN0cn0tJHttb250aFN0cn0tJHtkYXlTdHJ9YCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVN0ciA9IGZvcm1EYXRhLmdldEFsbChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKS5zbGljZSgtMSlbMF07XHJcbiAgICAgICAgICAgIGlmICghdmFsdWVTdHIgfHwgdmFsdWVTdHIgPT09ICcwJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlU3RyIGluc3RhbmNlb2YgRmlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlU3RyLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZGlzcGxheV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVTdHIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IHZhbHVlU3RyID8gTnVtYmVyKHZhbHVlU3RyKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIGl0IGlzIGNoZWNrYm94IGFuZCBub3QgY2hlY2tlZFxyXG4gICAgICAgICAgICBpZiAob3B0aW9uLm5vVmFsdWUgJiYgb3B0aW9uLm5vVmFsdWUgPT09IHZhbHVlSWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlTGFiZWwgPSBvcHRpb24udmFsdWVzPy5maW5kKCh7IGlkIH0pID0+IGlkID09PSB2YWx1ZUlkKT8ubGFiZWxcclxuICAgICAgICAgICAgICAgIHx8IChvcHRpb24udmFsdWUgPT09IHZhbHVlSWQgPyBvcHRpb24ubGFiZWwgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJpY2VIdG1sID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uLmlkfS0ke3ZhbHVlSWR9XCJdYClcclxuICAgICAgICAgICAgICAgIC5maXJzdCgpLmNsb25lKCkucmVtb3ZlQXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZCcpWzBdPy5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25FbFByaWNlSHRtbCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXSBvcHRpb25bdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkuZGF0YSgncHJpY2VIdG1sJyk7XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZUxhYmVsIHx8IHZhbHVlU3RyLFxyXG4gICAgICAgICAgICAgICAgcHJpY2VIdG1sOiBwcmljZUh0bWwgfHwgb3B0aW9uRWxQcmljZUh0bWwsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBzdW1tYXJ5SHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1bW1hcnlUZW1wbGF0ZSwgeyBvcHRpb25zIH0sIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsU3VtbWFyeS5odG1sKHN1bW1hcnlIdG1sKTtcclxuXHJcbiAgICAgICAgLy8gSW5zZXJ0IHN1YnRvdGFsIHRvIHRvIGFkZCB0byBjYXJ0IHdyYXBwZXIgYW5kIHNob3cgaXRcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29tcGxldGUtc3VidG90YWxdJykucmVtb3ZlKCk7XHJcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuZmluZCh0aGlzLmFkZFRvQ2FydFdyYXBwZXJTZWxlY3RvcikucHJlcGVuZCgkc3VidG90YWwpO1xyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZV1cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS53aXRob3V0X3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LmN1cnJlbmN5XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS50YXhfbGFiZWxcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4XVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXgudmFsdWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXguY3VycmVuY3lcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS53aXRoX3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhfdGF4LmN1cnJlbmN5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LmN1cnJlbmN5XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZU1vZGlmaWVyc1N1YnRvdGFsKGRhdGEpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VidG90YWwgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsXScpO1xyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0eHRTdWJ0b3RhbDogdGhpcy5jb250ZXh0LnR4dFN1YnRvdGFsLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aFRheDogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiAnJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5wcmljZSkge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAuLi4oZGF0YS5wcmljZS53aXRoX3RheCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXg6IGRhdGEucHJpY2Uud2l0aF90YXguZm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihkYXRhLnByaWNlLndpdGhvdXRfdGF4ID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogZGF0YS5wcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcbiAqIFBhcnNlcyBhbiBJU08gZGF0ZS10aW1lIHN0cmluZyBhbmQgZXh0cmFjdHMgdGhlIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBkYXRlLXRpbWUgc3RyaW5nIHRvIHBhcnNlLlxuICogQHJldHVybnMge09iamVjdHxudWxsfSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZXh0cmFjdGVkIGNvbXBvbmVudHMsIG9yIGBudWxsYCBpZiB0aGUgZm9ybWF0IGlzIGludmFsaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGVUaW1lU3RyaW5nKHN0cikge1xuICAgIGNvbnN0IHJlZ2V4ID0gL15cXHMqKD86KD86KFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkpfCg/OihcXGR7Mn0pLShcXGR7Mn0pKSk/KD86W1RcXHNdKT8oPzooXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KSg/OlxcLlxcZCspP3woXFxkezJ9KTooXFxkezJ9KXwoXFxkezJ9KSk/XFxzKig/Olp8KFsrLV0pKFxcZHsxLDJ9KSg/Ojo/KFxcZHsyfSkpPyk/XFxzKiQvO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBzdHIudHJpbSgpLm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIGZvcm1hdFxuICAgIH1cblxuICAgIGNvbnN0IFtcbiAgICAgICAgLFxuICAgICAgICB5ZWFyLCBtb250aCwgZGF5LCAvLyBbMV0sIFsyXSwgWzNdXG4gICAgICAgIHNob3J0TW9udGgsIHNob3J0RGF5LCAvLyBbNF0sIFs1XVxuICAgICAgICBob3VyLCBtaW51dGUsIHNlY29uZCwgLy8gWzZdLCBbN10sIFs4XVxuICAgICAgICBzaG9ydEhvdXIsIHNob3J0TWludXRlLCAvLyBbOV0sIFsxMF1cbiAgICAgICAgc2luZ2xlVGltZUNvbXBvbmVudCwgLy8gWzExXVxuICAgICAgICB0elNpZ24sIHR6SG91ck9mZnNldCwgdHpNaW51dGVPZmZzZXQsIC8vIFsxMl0sIFsxM10sIFsxNF1cbiAgICBdID0gbWF0Y2g7XG5cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgIC8vIERhdGUgY29tcG9uZW50c1xuICAgIGlmICh5ZWFyICYmIG1vbnRoICYmIGRheSkge1xuICAgICAgICByZXN1bHQueWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcbiAgICAgICAgcmVzdWx0Lm1vbnRoID0gcGFyc2VJbnQobW9udGgsIDEwKTtcbiAgICAgICAgcmVzdWx0LmRheSA9IHBhcnNlSW50KGRheSwgMTApO1xuICAgIH0gZWxzZSBpZiAoc2hvcnRNb250aCAmJiBzaG9ydERheSkge1xuICAgICAgICByZXN1bHQubW9udGggPSBwYXJzZUludChzaG9ydE1vbnRoLCAxMCk7XG4gICAgICAgIHJlc3VsdC5kYXkgPSBwYXJzZUludChzaG9ydERheSwgMTApO1xuICAgIH1cblxuICAgIC8vIFRpbWUgY29tcG9uZW50c1xuICAgIGlmIChob3VyICE9PSB1bmRlZmluZWQgJiYgbWludXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChob3VyLCAxMCk7XG4gICAgICAgIHJlc3VsdC5taW51dGUgPSBwYXJzZUludChtaW51dGUsIDEwKTtcbiAgICAgICAgaWYgKHNlY29uZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHQuc2Vjb25kID0gcGFyc2VJbnQoc2Vjb25kLCAxMCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNob3J0SG91ciAhPT0gdW5kZWZpbmVkICYmIHNob3J0TWludXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChzaG9ydEhvdXIsIDEwKTtcbiAgICAgICAgcmVzdWx0Lm1pbnV0ZSA9IHBhcnNlSW50KHNob3J0TWludXRlLCAxMCk7XG4gICAgfSBlbHNlIGlmIChzaW5nbGVUaW1lQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChzaW5nbGVUaW1lQ29tcG9uZW50LCAxMCk7XG4gICAgfVxuXG4gICAgLy8gVGltZXpvbmVcbiAgICBpZiAodHpTaWduICYmIHR6SG91ck9mZnNldCkge1xuICAgICAgICBjb25zdCBzaWduID0gdHpTaWduID09PSAnKycgPyAxIDogLTE7XG4gICAgICAgIGNvbnN0IHR6SG91ciA9IHBhcnNlSW50KHR6SG91ck9mZnNldCwgMTApO1xuICAgICAgICBjb25zdCB0ek1pbnV0ZSA9IHR6TWludXRlT2Zmc2V0ID8gcGFyc2VJbnQodHpNaW51dGVPZmZzZXQsIDEwKSA6IDA7XG4gICAgICAgIHJlc3VsdC50aW1lem9uZSA9IHNpZ24gKiAodHpIb3VyICsgdHpNaW51dGUgLyA2MCk7XG4gICAgfSBlbHNlIGlmIChzdHIuaW5jbHVkZXMoJ1onKSkge1xuICAgICAgICByZXN1bHQudGltZXpvbmUgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkYXRlLXRpbWUgc3RyaW5nIGludG8gYSBEYXRlIG9iamVjdCBhZGp1c3RlZCBmb3IgY291bnRkb3duIHB1cnBvc2VzLlxuICpcbiAqIC0gSWYgdGhlIGRhdGUtdGltZSBzdHJpbmcgZG9lcyBub3QgaW5jbHVkZSBhIHllYXIsIG1vbnRoLCBvciBkYXksIGl0IGlzIHRyZWF0ZWQgYXMgYSBkYWlseSBjb3VudGRvd24uXG4gKiAgIFRoZSBmdW5jdGlvbiB3aWxsIHNldCB0aGUgZGF0ZSB0byB0b2RheSBvciByb2xsIG92ZXIgdG8gdGhlIG5leHQgZGF5IGlmIHRoZSB0aW1lIGhhcyBhbHJlYWR5IHBhc3NlZC5cbiAqIC0gSWYgdGhlIGRhdGUtdGltZSBzdHJpbmcgZG9lcyBub3QgaW5jbHVkZSBhbiBob3VyLCBtaW51dGUsIG9yIHNlY29uZCwgdGhleSBkZWZhdWx0IHRvIDAuXG4gKiAtIFRoZSBmdW5jdGlvbiBhZGp1c3RzIGZvciB0aGUgc3BlY2lmaWVkIHRpbWV6b25lIG9mZnNldC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIGRhdGUtdGltZSBzdHJpbmcgdG8gcGFyc2UuXG4gKiBAcmV0dXJucyB7RGF0ZXx1bmRlZmluZWR9IEEgRGF0ZSBvYmplY3QgdXNlZCBmb3IgdGhlIGNvdW50ZG93biwgb3IgYHVuZGVmaW5lZGAgaWYgcGFyc2luZyBmYWlscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ291bnRkb3duRGF0ZShzdHIpIHtcbiAgICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2VEYXRlVGltZVN0cmluZyhzdHIpO1xuICAgIGlmICghcGFyc2VkRGF0ZSkgcmV0dXJuO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXG4gICAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgdGltZXpvbmUgfSA9IHBhcnNlZERhdGU7XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHkgPSB5ZWFyID8/IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG0gPSBtb250aCA/PyAobm93LmdldE1vbnRoKCkgKyAxKTtcbiAgICBjb25zdCBkID0gZGF5ID8/IG5vdy5nZXREYXRlKCk7XG4gICAgY29uc3QgaCA9IGhvdXIgfHwgMDtcbiAgICBjb25zdCBtaW4gPSBtaW51dGUgfHwgMDtcbiAgICBjb25zdCBzZWMgPSBzZWNvbmQgfHwgMDtcblxuICAgIGxldCBkYXRlO1xuXG4gICAgaWYgKHRpbWV6b25lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdXRjTWlsbGlzID0gRGF0ZS5VVEMoeSwgbSAtIDEsIGQsIGgsIG1pbiwgc2VjKSAtICh0aW1lem9uZSAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHV0Y01pbGxpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmICh5ZWFyKSBkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICAgICAgICBpZiAobW9udGgpIGRhdGUuc2V0TW9udGgobW9udGggLSAxKTtcbiAgICAgICAgaWYgKGRheSkgZGF0ZS5zZXREYXRlKGRheSk7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoaCk7XG4gICAgICAgIGRhdGUuc2V0TWludXRlcyhtaW4pO1xuICAgICAgICBkYXRlLnNldFNlY29uZHMoc2VjKTtcbiAgICB9XG5cbiAgICBpZiAoIXllYXIgJiYgIW1vbnRoICYmICFkYXkpIHtcbiAgICAgICAgLy8gZm9yIGRhaWx5IGNvdW50ZG93biwgYWRkIDEgZGF5IGlmIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAgICAgICAgaWYgKGRhdGUgPCBub3cpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbi8qKlxuICogKipTYWxlQ291bnRkb3duIFNpbmdsZXRvbiBPYmplY3QqKlxuICpcbiAqIE1hbmFnZXMgY291bnRkb3duIHRpbWVycyBmb3Igc2FsZXMgb3IgcHJvbW90aW9uYWwgZXZlbnRzIG9uIHlvdXIgd2Vic2l0ZS5cbiAqIEl0IGhhbmRsZXMgbXVsdGlwbGUgY291bnRkb3duIGVsZW1lbnRzLCB1cGRhdGVzIHRoZW0gaW4gcmVhbC10aW1lLCBhbmQgbWFuYWdlcyB2aXNpYmlsaXR5IGJhc2VkIG9uIHRoZSB2aWV3cG9ydC5cbiAqXG4gKiAtLS1cbiAqXG4gKiAqKlVzYWdlOioqXG4gKlxuICogKioxLiBDb25maWd1cmUgdGhlIENvdW50ZG93biAoT3B0aW9uYWwpOioqXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xuICogICAvLyBPcHRpb25hbCBzZXR0aW5nc1xuICogICBkYXRlRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duRGF0ZScsICAgICAgIC8vIERhdGEgYXR0cmlidXRlIGZvciBjb3VudGRvd24gZGF0ZVxuICogICBpblZpZXdwb3J0RGF0YU5hbWU6ICdzYWxlQ291bnRkb3duSW5WaWV3cG9ydCcsIC8vIERhdGEgYXR0cmlidXRlIGZvciB2aWV3cG9ydCB2aXNpYmlsaXR5XG4gKiAgIHNlbGVjdG9yczogeyAuLi4gfSxcbiAqICAgdGVtcGxhdGU6ICcuLi4nLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDdXN0b20gSFRNTCB0ZW1wbGF0ZSBmb3IgdGhlIGNvdW50ZG93blxuICogICBoaWRlQ2xhc3M6ICdfaGlkZScsICAgICAgICAgICAgICAgICAgICAgIC8vIENsYXNzIHRvIGhpZGUgZWxlbWVudHNcbiAqICAgc2FsZUVuZENsYXNzOiAnX3NhbGVFbmRlZCcsICAgICAgICAgICAgICAvLyBDbGFzcyB3aGVuIHNhbGUgZW5kc1xuICogICBhY3RpdmVDbGFzczogJ19hY3RpdmUnLCAgICAgICAgICAgICAgICAgIC8vIENsYXNzIHdoZW4gY291bnRkb3duIGlzIGFjdGl2ZVxuICogICB0cmFuc2xhdGlvbnM6IHtcbiAqICAgICBlbmRfaW46ICdFbmRzIGluJyxcbiAqICAgICBkYXk6ICdEYXknLFxuICogICAgIGRheXM6ICdEYXlzJyxcbiAqICAgICBob3VyOiAnSG91cicsXG4gKiAgICAgaG91cnM6ICdIb3VycycsXG4gKiAgICAgbWludXRlOiAnTWludXRlJyxcbiAqICAgICBtaW51dGVzOiAnTWludXRlcycsXG4gKiAgICAgc2Vjb25kOiAnU2Vjb25kJyxcbiAqICAgICBzZWNvbmRzOiAnU2Vjb25kcycsXG4gKiAgIH0sXG4gKiAgIHR4dFNhbGVDb3VudGRvd25KU09OOiAneyBcInRyYW5zbGF0aW9uc1wiOiB7IC4uLiB9IH0nLCAvLyBKU09OIHN0cmluZyBmb3IgdHJhbnNsYXRpb25zXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqICoqMi4gQWRkIENvdW50ZG93biBFbGVtZW50czoqKlxuICpcbiAqIC0gKipPcHRpb24gMToqKiBEaXJlY3RseSBzcGVjaWZ5IHRoZSBkYXRlIHdoZW4gYWRkaW5nIHRoZSBlbGVtZW50LlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBjb25zdCAkZWwgPSAkKCcjY291bnRkb3duLWVsZW1lbnQnKTtcbiAqICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XG4gKiAgIFNhbGVDb3VudGRvd24uYWRkKCRlbCwgZGF0ZSk7XG4gKiAgIGBgYFxuICpcbiAqIC0gKipPcHRpb24gMjoqKiBTZXQgZGF0YSBhdHRyaWJ1dGVzIG9uIHRoZSBlbGVtZW50IGFuZCBhZGQgaXQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIGNvbnN0ICRlbCA9ICQoJyNjb3VudGRvd24tZWxlbWVudCcpO1xuICogICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93bkRhdGUnLCAnMjAyMy0xMi0zMVQyMzo1OTo1OScpO1xuICogICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAnRW5kcyBpbicsIC4uLiB9KTtcbiAqICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsKTtcbiAqICAgYGBgXG4gKlxuICogLS0tXG4gKlxuICogKipOb3RlczoqKlxuICpcbiAqIC0gVGhlIGNvdW50ZG93biBhdXRvbWF0aWNhbGx5IHVwZGF0ZXMgdmlzaWJsZSBlbGVtZW50cyBpbiB0aGUgdmlld3BvcnQuXG4gKiAtIFN1cHBvcnRzIGN1c3RvbWl6YXRpb24gdGhyb3VnaCBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGF0dHJpYnV0ZXMuXG4gKiAtIEhhbmRsZXMgYXV0b21hdGljIHN0b3BwaW5nIHdoZW4gbm8gZWxlbWVudHMgcmVtYWluLlxuICpcbiAqIC0tLVxuICpcbiAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIEluaXRpYWxpemUgYW5kIGNvbmZpZ3VyZVxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xuICogICB0cmFuc2xhdGlvbnM6IHtcbiAqICAgICBlbmRfaW46ICdTYWxlIGVuZHMgaW4nLFxuICogICAgIC8vIE90aGVyIHRyYW5zbGF0aW9ucy4uLlxuICogICB9LFxuICogfSk7XG4gKlxuICogLy8gQWRkIGNvdW50ZG93biBlbGVtZW50XG4gKiBjb25zdCAkY291bnRkb3duID0gJCgnI2NvdW50ZG93bicpO1xuICogY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XG4gKiBTYWxlQ291bnRkb3duLmFkZCgkY291bnRkb3duLCBlbmREYXRlKTtcbiAqIGBgYFxuICovXG5cbmNvbnN0IFNhbGVDb3VudGRvd24gPSB7XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7U2V0PEVsZW1lbnQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZWxlbWVudHM6IG5ldyBTZXQoKSxcblxuICAgIC8qKlxuICAgICAqIFRpbWVyIGludGVydmFsIElEXG4gICAgICogQHR5cGUge251bWJlcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGltZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHtJbnRlcnNlY3Rpb25PYnNlcnZlcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAqIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGNvdW50ZG93biBkYXRlXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIGRhdGVEYXRhTmFtZTogJ3NhbGVDb3VudGRvd25EYXRlJyxcblxuICAgIC8qKlxuICAgICAqIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaW5WaWV3cG9ydERhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkluVmlld3BvcnQnLFxuXG4gICAgLyoqXG4gICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgdHJhbnNsYXRpb25zIEpTT05cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdHJhbnNsYXRpb25zRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duVHJhbnNsYXRpb25zJyxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdG9ycyBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHR5cGUge3tlbmRMYWJlbDogc3RyaW5nLCBkYXk6IHN0cmluZywgZGF5VmFsdWU6IHN0cmluZywgZGF5TGFiZWw6IHN0cmluZywgaG91cjogc3RyaW5nLCBob3VyVmFsdWU6IHN0cmluZywgaG91ckxhYmVsOiBzdHJpbmcsIG1pbnV0ZTogc3RyaW5nLCBtaW51dGVWYWx1ZTogc3RyaW5nLCBtaW51dGVMYWJlbDogc3RyaW5nLCBzZWNvbmQ6IHN0cmluZywgc2Vjb25kVmFsdWU6IHN0cmluZywgc2Vjb25kTGFiZWw6IHN0cmluZ319XG4gICAgICovXG4gICAgc2VsZWN0b3JzOiB7XG4gICAgICAgIGVuZExhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZW5kLWxhYmVsXScsXG4gICAgICAgIGRheTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheV0nLFxuICAgICAgICBkYXlWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheS12YWx1ZV0nLFxuICAgICAgICBkYXlMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheS1sYWJlbF0nLFxuICAgICAgICBob3VyOiAnW2RhdGEtc2FsZS1jb3VudGRvd24taG91cl0nLFxuICAgICAgICBob3VyVmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLXZhbHVlXScsXG4gICAgICAgIGhvdXJMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWhvdXItbGFiZWxdJyxcbiAgICAgICAgbWludXRlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlXScsXG4gICAgICAgIG1pbnV0ZVZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLXZhbHVlXScsXG4gICAgICAgIG1pbnV0ZUxhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLWxhYmVsXScsXG4gICAgICAgIHNlY29uZDogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZF0nLFxuICAgICAgICBzZWNvbmRWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC12YWx1ZV0nLFxuICAgICAgICBzZWNvbmRMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC1sYWJlbF0nLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYmFkZ2UtcGVyY2VudFwiPjwvdXNlPjwvc3ZnPjwvaT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfZW5kXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1lbmQtbGFiZWw+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9kYXlcIiBkYXRhLXNhbGUtY291bnRkb3duLWRheT48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5LXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5LWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX2hvdXJcIiBkYXRhLXNhbGUtY291bnRkb3duLWhvdXI+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLWhvdXItdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX21pbnV0ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtbGFiZWw+PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfc2Vjb25kXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQ+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC12YWx1ZT48L3NwYW4+PHNwYW4gY2xhc3M9XCJfbGFiZWxcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgIGAsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHRvIGhpZGUgZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaGlkZUNsYXNzOiAnX2hpZGUnLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBzYWxlIGhhcyBlbmRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzYWxlRW5kQ2xhc3M6ICdfc2FsZUVuZGVkJyxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgYWN0aXZlIGNvdW50ZG93blxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhY3RpdmVDbGFzczogJ19hY3RpdmUnLFxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRpb25zIGZvciBjb3VudGRvd24gbGFiZWxzXG4gICAgICogQHR5cGUge3tlbmRfaW46IHN0cmluZywgZGF5OiBzdHJpbmcsIGRheXM6IHN0cmluZywgaG91cjogc3RyaW5nLCBob3Vyczogc3RyaW5nLCBtaW51dGU6IHN0cmluZywgbWludXRlczogc3RyaW5nLCBzZWNvbmQ6IHN0cmluZywgc2Vjb25kczogc3RyaW5nfX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICBlbmRfaW46ICdFbmQgaW4nLFxuICAgICAgICBkYXk6ICdEYXknLFxuICAgICAgICBkYXlzOiAnRGF5cycsXG4gICAgICAgIGhvdXI6ICdIb3VyJyxcbiAgICAgICAgaG91cnM6ICdIb3VycycsXG4gICAgICAgIG1pbnV0ZTogJ01pbnV0ZScsXG4gICAgICAgIG1pbnV0ZXM6ICdNaW51dGVzJyxcbiAgICAgICAgc2Vjb25kOiAnU2Vjb25kJyxcbiAgICAgICAgc2Vjb25kczogJ1NlY29uZHMnLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmUgdGhlIGNvdW50ZG93biBzZXR0aW5nc1xuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmRhdGVEYXRhTmFtZSAtIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGNvdW50ZG93biBkYXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaW5WaWV3cG9ydERhdGFOYW1lIC0gRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgaW4gdmlld3BvcnQgdmlzaWJpbGl0eVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnNlbGVjdG9ycyAtIFNlbGVjdG9ycyBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmVuZExhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmRheVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5ob3VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5ob3VyTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMubWludXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZVZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZUxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLnNlY29uZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRlbXBsYXRlIC0gVGVtcGxhdGUgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmhpZGVDbGFzcyAtIENsYXNzIG5hbWUgdG8gaGlkZSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNhbGVFbmRDbGFzcyAtIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgc2FsZSBoYXMgZW5kZWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hY3RpdmVDbGFzcyAtIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgYWN0aXZlIGNvdW50ZG93blxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnRyYW5zbGF0aW9ucyAtIFRyYW5zbGF0aW9ucyBmb3IgY291bnRkb3duIGxhYmVsc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5lbmRfaW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuZGF5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmRheXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuaG91clxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5ob3Vyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5taW51dGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMubWludXRlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5zZWNvbmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuc2Vjb25kc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnR4dFNhbGVDb3VudGRvd25KU09OIC0gSlNPTiBzdHJpbmcgZm9yIHRyYW5zbGF0aW9uc1xuICAgICAqL1xuICAgIGNvbmZpZ3VyZSh7XG4gICAgICAgIGRhdGVEYXRhTmFtZSxcbiAgICAgICAgaW5WaWV3cG9ydERhdGFOYW1lLFxuICAgICAgICBzZWxlY3RvcnMsXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICBoaWRlQ2xhc3MsXG4gICAgICAgIHNhbGVFbmRDbGFzcyxcbiAgICAgICAgYWN0aXZlQ2xhc3MsXG4gICAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgICAgdHh0U2FsZUNvdW50ZG93bkpTT04sXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIGlmIChkYXRlRGF0YU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZURhdGFOYW1lID0gZGF0ZURhdGFOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluVmlld3BvcnREYXRhTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5pblZpZXdwb3J0RGF0YU5hbWUgPSBpblZpZXdwb3J0RGF0YU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0b3JzKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycyA9IHsgLi4udGhpcy5zZWxlY3RvcnMsIC4uLnNlbGVjdG9ycyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlkZUNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVDbGFzcyA9IGhpZGVDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYWxlRW5kQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2FsZUVuZENsYXNzID0gc2FsZUVuZENsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNsYXNzID0gYWN0aXZlQ2xhc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy50cmFuc2xhdGlvbnMsIC4uLnRyYW5zbGF0aW9ucyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR4dFNhbGVDb3VudGRvd25KU09OKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHR4dFNhbGVDb3VudGRvd25KU09OKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFucyA9IE9iamVjdC5rZXlzKGpzb24udHJhbnNsYXRpb25zKS5yZWR1Y2UoKF90cmFucywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3J0S2V5ID0ga2V5LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgICAgICBfdHJhbnNbc2hvcnRLZXldID0ganNvbi50cmFuc2xhdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90cmFucztcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy50cmFuc2xhdGlvbnMsIC4uLnRyYW5zIH07XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGVsZW1lbnQgJiBjb3JyZXNwb25kaW5nIGRhdGUgdG8gdGhlIGNvdW50ZG93biBjb2xsZWN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcbiAgICAgKiBAcGFyYW0ge0RhdGV8bnVsbH0gZGF0ZSAtIFRoZSBjb3VudGRvd24gZGF0ZS4gSWYgbm90IHByb3ZpZGVkLCBpdCB3aWxsIGJlIGV4dHJhY3RlZCBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZSBgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXRlYFxuICAgICAqL1xuICAgIGFkZCgkZWwsIGRhdGUgPSBudWxsKSB7XG4gICAgICAgIGxldCB2YWxpZERhdGUgPSBkYXRlIHx8ICRlbC5kYXRhKHRoaXMuZGF0ZURhdGFOYW1lKTtcbiAgICAgICAgaWYgKHZhbGlkRGF0ZSAmJiB0eXBlb2YgdmFsaWREYXRlID09PSAnc3RyaW5nJykgdmFsaWREYXRlID0gcGFyc2VDb3VudGRvd25EYXRlKHZhbGlkRGF0ZSk7XG4gICAgICAgIGlmICghdmFsaWREYXRlKSByZXR1cm47XG4gICAgICAgICRlbC5kYXRhKHRoaXMuZGF0ZURhdGFOYW1lLCB2YWxpZERhdGUpLmh0bWwodGhpcy50ZW1wbGF0ZSlcbiAgICAgICAgICAgIC5nZXQoKS5mb3JFYWNoKGVsID0+IHRoaXMuZWxlbWVudHMuYWRkKGVsKSk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZSgkZWwpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9ic2VydmUgdGhlIGVsZW1lbnQgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHkgY2hlY2tcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvYnNlcnZlKCRlbCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgLy8gYXNzdW1lIGVsZW1lbnQgaXMgaW4gdmlld3BvcnQgaWYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgJGVsLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2UgaWYgbm90IGFscmVhZHkgY3JlYXRlZFxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKGVudHJ5LnRhcmdldCkuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSwgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXNJbnRlcnNlY3RpbmcnLCBlbnRyeS50YXJnZXQsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICByb290OiBudWxsLCAvLyBEZWZhdWx0cyB0byB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMCwgLy8gQ2FsbGJhY2sgaXMgdHJpZ2dlcmVkIHdoZW4gYW55IHBhcnQgb2YgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLm9ic2VydmVyLm9ic2VydmUoZWwpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RvcCBvYnNlcnZpbmcgdGhlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB1bm9ic2VydmUoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1bm9ic2VydmUnLCBlbCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdmlld3BvcnQgYW5kIHZpc2libGVcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpc1Zpc2libGVJblZpZXdwb3J0KCRlbCkge1xuICAgICAgICByZXR1cm4gJGVsLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUpICYmICRlbC5pcygnOnZpc2libGUnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogc3RhcnQgcnVubmluZyBjb3VudGRvd24gZXZlcnkgc2Vjb25kXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMudGltZXIgJiYgdGhpcy5lbGVtZW50cy5zaXplID4gMCkge1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnJ1bigpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBzdG9wIGNvdW50ZG93blxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RvcCBjb3VudGRvd24nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogcnVubmluZyBjb3VudGRvd24gcHJvY2Vzc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgLy8gY2hlY2sgYW5kIHN0b3AgaWYgZWxlbWVudCBubyBsb25nZXIgZXhpc3RzIGluIERPTVxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlKGVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSAkZWwuZGF0YSh0aGlzLmRhdGVEYXRhTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgY291bnRkb3duIGlmIGVsZW1lbnQgaXMgbm90IGluIHZpZXdwb3J0IG9yIG5vdCB2aXNpYmxlXG4gICAgICAgICAgICBpZiAoIWRhdGUgfHwgIXRoaXMuaXNWaXNpYmxlSW5WaWV3cG9ydCgkZWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAoZGF0ZSA8PSBub3cpIHtcbiAgICAgICAgICAgICAgICAvLyBDb3VudCBkb3duIGRhdGUgaGFzIHBhc3NlZFxuICAgICAgICAgICAgICAgICRlbC5hZGRDbGFzcyh0aGlzLnNhbGVFbmRDbGFzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5kZWxldGUoZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcmVtYWluaW5nIHRpbWUgKGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKVxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGRhdGUgLSBub3c7XG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgICAgICBjb25zdCAkZW5kTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5lbmRMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkZGF5ID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5KTtcbiAgICAgICAgICAgIGNvbnN0ICRkYXlWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmRheVZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRkYXlMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmRheUxhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRob3VyID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91cik7XG4gICAgICAgICAgICBjb25zdCAkaG91clZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91clZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRob3VyTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5ob3VyTGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZSk7XG4gICAgICAgICAgICBjb25zdCAkbWludXRlVmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5taW51dGVWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkbWludXRlTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5taW51dGVMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWNvbmRWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLnNlY29uZFZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWNvbmRMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLnNlY29uZExhYmVsKTtcblxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRpb25zID0geyAuLi50aGlzLnRyYW5zbGF0aW9ucywgLi4uJGVsLmRhdGEodGhpcy50cmFuc2xhdGlvbnNEYXRhTmFtZSkgfTtcblxuICAgICAgICAgICAgJGVsLmFkZENsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgJGVuZExhYmVsLmh0bWwodHJhbnNsYXRpb25zLmVuZF9pbik7XG4gICAgICAgICAgICAkZGF5VmFsdWUudGV4dChkYXlzKTtcbiAgICAgICAgICAgICRkYXlMYWJlbC5odG1sKGRheXMgPT09IDEgPyB0cmFuc2xhdGlvbnMuZGF5IDogdHJhbnNsYXRpb25zLmRheXMpO1xuICAgICAgICAgICAgJGRheS50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCk7XG4gICAgICAgICAgICAkaG91clZhbHVlLnRleHQoaG91cnMpO1xuICAgICAgICAgICAgJGhvdXJMYWJlbC5odG1sKGhvdXJzID09PSAxID8gdHJhbnNsYXRpb25zLmhvdXIgOiB0cmFuc2xhdGlvbnMuaG91cnMpO1xuICAgICAgICAgICAgJGhvdXIudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDAgJiYgaG91cnMgPT09IDApO1xuICAgICAgICAgICAgJG1pbnV0ZVZhbHVlLnRleHQobWludXRlcyk7XG4gICAgICAgICAgICAkbWludXRlTGFiZWwuaHRtbChtaW51dGVzID09PSAxID8gdHJhbnNsYXRpb25zLm1pbnV0ZSA6IHRyYW5zbGF0aW9ucy5taW51dGVzKTtcbiAgICAgICAgICAgICRtaW51dGUudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDAgJiYgaG91cnMgPT09IDAgJiYgbWludXRlcyA9PT0gMCk7XG4gICAgICAgICAgICAkc2Vjb25kVmFsdWUudGV4dChzZWNvbmRzKTtcbiAgICAgICAgICAgICRzZWNvbmRMYWJlbC5odG1sKHNlY29uZHMgPT09IDEgPyB0cmFuc2xhdGlvbnMuc2Vjb25kIDogdHJhbnNsYXRpb25zLnNlY29uZHMpO1xuICAgICAgICAgICAgJHNlY29uZC50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYWxlQ291bnRkb3duO1xuIiwiZXhwb3J0IGNvbnN0IGFyaWFLZXlDb2RlcyA9IHtcbiAgICBSRVRVUk46IDEzLFxuICAgIFNQQUNFOiAzMixcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxufTtcbiIsImltcG9ydCB7IGFyaWFLZXlDb2RlcyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3Qgc2V0Q2hlY2tlZFJhZGlvSXRlbSA9IChpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCkgPT4ge1xuICAgIGl0ZW1Db2xsZWN0aW9uLmVhY2goKGlkeCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCAkaXRlbSA9ICQoaXRlbSk7XG4gICAgICAgIGlmIChpZHggIT09IGl0ZW1JZHgpIHtcbiAgICAgICAgICAgICRpdGVtLmF0dHIoJ2FyaWEtY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgdHJ1ZSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICRpdGVtLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xufTtcblxuY29uc3QgY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uID0gKGxhc3RJdGVtSWR4LCBjdXJyZW50SWR4KSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBjdXJyZW50SWR4ID4gbGFzdEl0ZW1JZHg6IHJldHVybiAwO1xuICAgIGNhc2UgY3VycmVudElkeCA8IDA6IHJldHVybiBsYXN0SXRlbUlkeDtcbiAgICBkZWZhdWx0OiByZXR1cm4gY3VycmVudElkeDtcbiAgICB9XG59O1xuXG5jb25zdCBoYW5kbGVJdGVtS2V5RG93biA9IGl0ZW1Db2xsZWN0aW9uID0+IGUgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZTtcbiAgICBjb25zdCBpdGVtSWR4ID0gaXRlbUNvbGxlY3Rpb24uaW5kZXgoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCBsYXN0Q29sbGVjdGlvbkl0ZW1JZHggPSBpdGVtQ29sbGVjdGlvbi5sZW5ndGggLSAxO1xuXG4gICAgaWYgKE9iamVjdC52YWx1ZXMoYXJpYUtleUNvZGVzKS5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuTEVGVDpcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5VUDoge1xuICAgICAgICBjb25zdCBwcmV2SXRlbUlkeCA9IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbihsYXN0Q29sbGVjdGlvbkl0ZW1JZHgsIGl0ZW1JZHggLSAxKTtcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZ2V0KHByZXZJdGVtSWR4KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4IC0gMSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5SSUdIVDpcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5ET1dOOiB7XG4gICAgICAgIGNvbnN0IG5leHRJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCArIDEpO1xuICAgICAgICBpdGVtQ29sbGVjdGlvbi5nZXQobmV4dEl0ZW1JZHgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggKyAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDogYnJlYWs7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKCRjb250YWluZXIsIGl0ZW1TZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0ICRpdGVtQ29sbGVjdGlvbiA9ICRjb250YWluZXIuZmluZChpdGVtU2VsZWN0b3IpO1xuXG4gICAgJGNvbnRhaW5lci5vbigna2V5ZG93bicsIGl0ZW1TZWxlY3RvciwgaGFuZGxlSXRlbUtleURvd24oJGl0ZW1Db2xsZWN0aW9uKSk7XG59O1xuIiwiLy8gaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4uL3dpc2hsaXN0JzsgLy8gcGFwYXRoZW1lcy1ldmV2YTogZGlzYWJsZWRcbmltcG9ydCB7IGluaXRSYWRpb09wdGlvbnMgfSBmcm9tICcuL2FyaWEnO1xuXG5jb25zdCBvcHRpb25zVHlwZXNNYXAgPSB7XG4gICAgSU5QVVRfRklMRTogJ2lucHV0LWZpbGUnLFxuICAgIElOUFVUX1RFWFQ6ICdpbnB1dC10ZXh0JyxcbiAgICBJTlBVVF9OVU1CRVI6ICdpbnB1dC1udW1iZXInLFxuICAgIElOUFVUX0NIRUNLQk9YOiAnaW5wdXQtY2hlY2tib3gnLFxuICAgIFRFWFRBUkVBOiAndGV4dGFyZWEnLFxuICAgIERBVEU6ICdkYXRlJyxcbiAgICBTRVRfU0VMRUNUOiAnc2V0LXNlbGVjdCcsXG4gICAgU0VUX1JFQ1RBTkdMRTogJ3NldC1yZWN0YW5nbGUnLFxuICAgIFNFVF9SQURJTzogJ3NldC1yYWRpbycsXG4gICAgU1dBVENIOiAnc3dhdGNoJyxcbiAgICBQUk9EVUNUX0xJU1Q6ICdwcm9kdWN0LWxpc3QnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbkNoYW5nZURlY29yYXRvcihhcmVEZWZhdWx0T3B0aW9uc1NldCkge1xuICAgIHJldHVybiAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgaWYgKGFyZURlZmF1bHRPcHRpb25zU2V0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAvLyBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7IC8vIHBhcGF0aGVtZXMtZXZldmE6IGRpc2FibGVkXG4gICAgICAgIHRoaXMuZ2V0VGFiUmVxdWVzdHMoKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKS5lYWNoKChfXywgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcblxuICAgICAgICAgICAgdGhpcy5fbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YWx1ZSwgdHlwZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlKHZhcmlhbnREb21Ob2RlLCB2YXJpYW50VHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHZhcmlhbnRUeXBlKSB7XG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNFVF9SQURJTzpcbiAgICAgICAgY2FzZSBvcHRpb25zVHlwZXNNYXAuU1dBVENIOiB7XG4gICAgICAgICAgICBpbml0UmFkaW9PcHRpb25zKCQodmFyaWFudERvbU5vZGUpLCAnW3R5cGU9cmFkaW9dJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3cgcmFkaW8gYnV0dG9ucyB0byBnZXQgZGVzZWxlY3RlZFxuICAgICAqL1xuICAgIGluaXRSYWRpb0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgcmFkaW8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRyYWRpbyA9ICQocmFkaW8pO1xuXG4gICAgICAgICAgICAvLyBPbmx5IGJpbmQgdG8gY2xpY2sgb25jZVxuICAgICAgICAgICAgaWYgKCRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICRyYWRpby5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkcmFkaW8uZGF0YSgnc3RhdGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJywgJHJhZGlvLnByb3AoJ2NoZWNrZWQnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSA9IHRoaXMuY29udGV4dC5vdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2U7XG4gICAgICAgIGxldCBvdXRPZlN0b2NrTWVzc2FnZSA9IGRhdGEub3V0X29mX3N0b2NrX21lc3NhZ2U7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yICE9PSAnaGlkZV9vcHRpb24nICYmIGJlaGF2aW9yICE9PSAnbGFiZWxfb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgICAgICBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7b3V0T2ZTdG9ja01lc3NhZ2V9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7b3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlfSlgO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcblxuXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBmcmFnbWVudCBpZGVudGlmaWVyIGluIFVSTCByZXF1ZXN0aW5nIGEgc3BlY2lmaWMgdGFiXG4gICAgICovXG4gICAgZ2V0VGFiUmVxdWVzdHMoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjdGFiLScpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJCgnLnRhYnMnKS5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYCk7XG4gICAgICAgICAgICBjb25zdCAkdGFiQ29udGVudCA9ICQoYCR7d2luZG93LmxvY2F0aW9uLmhhc2h9YCk7XG5cbiAgICAgICAgICAgIGlmICgkYWN0aXZlVGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkYWN0aXZlVGFiLmZpbmQoJy50YWInKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYClcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICR0YWJDb250ZW50LmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2luY2UgJHByb2R1Y3RWaWV3IGNhbiBiZSBkeW5hbWljYWxseSBpbnNlcnRlZCB1c2luZyByZW5kZXJfd2l0aCxcbiAgICAgKiBXZSBoYXZlIHRvIHJldHJpZXZlIHRoZSByZXNwZWN0aXZlIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gJHNjb3BlXG4gICAgICovXG4gICAgZ2V0Vmlld01vZGVsKCRzY29wZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICR3ZWlnaHQ6ICQoJy5wcm9kdWN0Vmlldy1pbmZvIFtkYXRhLXByb2R1Y3Qtd2VpZ2h0XScsICRzY29wZSksXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydEZvcm06ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNrdToge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQuc2t1LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBjOiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC51cGMtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC11cGNdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWFudGl0eToge1xuICAgICAgICAgICAgICAgICR0ZXh0OiAkKCcuaW5jcmVtZW50VG90YWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRidWxrUHJpY2luZzogJCgnLnByb2R1Y3RWaWV3LWluZm8tYnVsa1ByaWNpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHdhbGxldEJ1dHRvbnM6ICQoJ1tkYXRhLWFkZC10by1jYXJ0LXdhbGxldC1idXR0b25zXScsICRzY29wZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcHJpY2luZyBlbGVtZW50cyB0aGF0IHdpbGwgc2hvdyB1cCBvbmx5IHdoZW4gdGhlIHByaWNlIGV4aXN0cyBpbiBBUElcbiAgICAgKiBAcGFyYW0gdmlld01vZGVsXG4gICAgICovXG4gICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZXcoZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAhZGF0YS5pbnN0b2NrXG4gICAgICAgICAgICA/IChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZSB8fCB0aGlzLmNvbnRleHQub3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlKVxuICAgICAgICAgICAgOiAoZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcblxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KG1lc3NhZ2UpO1xuXG4gICAgICAgIGlmIChkYXRhLnByaWNlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEud2VpZ2h0IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdlaWdodC5odG1sKGRhdGEud2VpZ2h0LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdmFyaWF0aW9uX2lkIGlmIGl0IGV4aXN0cyBmb3IgYWRkaW5nIHRvIHdpc2hsaXN0XG4gICAgICAgIGlmIChkYXRhLnZhcmlhbnRJZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3aXNobGlzdFZhcmlhdGlvbi52YWwoZGF0YS52YXJpYW50SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgU0tVIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5za3UpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoZGF0YS5za3UpO1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBVUEMgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLnVwYykge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dChkYXRhLnVwYyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHN0b2NrIHZpZXcgaXMgb24gKENQIHNldHRpbmdzKVxuICAgICAgICBpZiAodmlld01vZGVsLnN0b2NrLiRjb250YWluZXIubGVuZ3RoICYmIHR5cGVvZiBkYXRhLnN0b2NrID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0b2NrIGNvbnRhaW5lciBpcyBoaWRkZW4sIHNob3dcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3KGRhdGEpO1xuXG4gICAgICAgIC8vIElmIEJ1bGsgUHJpY2luZyByZW5kZXJlZCBIVE1MIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzICYmIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0V3JhcHBlciA9ICQoJyNhZGQtdG8tY2FydC13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKGFkZFRvQ2FydFdyYXBwZXIuaXMoJzpoaWRkZW4nKSAmJiBkYXRhLnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICBhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByaWNlID0gcHJpY2UucHJpY2VfcmFuZ2UgP1xuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRoX3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aF90YXguZm9ybWF0dGVkfWBcbiAgICAgICAgICAgICAgICA6IHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZDtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRoVGF4LiRzcGFuLmh0bWwodXBkYXRlZFByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByaWNlID0gcHJpY2UucHJpY2VfcmFuZ2UgP1xuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRob3V0X3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aG91dF90YXguZm9ybWF0dGVkfWBcbiAgICAgICAgICAgICAgICA6IHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZDtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRob3V0VGF4LiRzcGFuLmh0bWwodXBkYXRlZFByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5zYXZlZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGFuIG1lc3NhZ2UgYm94IGlmIGEgbWVzc2FnZSBpcyBwYXNzZWRcbiAgICAgKiBIaWRlIHRoZSBib3ggaWYgdGhlIG1lc3NhZ2UgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICAgKi9cbiAgICBzaG93TWVzc2FnZUJveChtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVXYWxsZXRCdXR0b25zVmlldyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgY29uc3QgaXNWYWxpZEZvcm0gPSB2aWV3TW9kZWwuJGFkZFRvQ2FydEZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGlzVmFsaWRGb3JtICYmIGRhdGEucHVyY2hhc2FibGUgJiYgZGF0YS5pbnN0b2NrKTtcbiAgICB9XG5cbiAgICB0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShzaG91bGRTaG93KSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICBpZiAoc2hvdWxkU2hvdykge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3YWxsZXRCdXR0b25zLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmhpZGUoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGluIGEgc2VsZWN0IGRyb3Bkb3duLCBzZWxlY3QgdGhlIGZpcnN0IG9wdGlvbiAoTUVSQy02MzkpXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHNCYXNlLCB7IG9wdGlvbkNoYW5nZURlY29yYXRvciB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvZXlldmEvaW1hZ2UtZ2FsbGVyeSc7IC8vIHBhcGF0aGVtZXMtZXlldmEgZWRpdGVkXG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IGFsZXJ0TW9kYWwsIHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCB7IGlzRW1wdHksIGlzUGxhaW5PYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5pbXBvcnQgeyBub3JtYWxpemVGb3JtRGF0YSB9IGZyb20gJy4vdXRpbHMvYXBpJztcbmltcG9ydCB7IGlzQnJvd3NlcklFLCBjb252ZXJ0SW50b0FycmF5IH0gZnJvbSAnLi91dGlscy9pZS1oZWxwZXJzJztcbmltcG9ydCBiYW5uZXJVdGlscyBmcm9tICcuL3V0aWxzL2Jhbm5lci11dGlscyc7XG5pbXBvcnQgY3VycmVuY3lTZWxlY3RvciBmcm9tICcuLi9nbG9iYWwvY3VycmVuY3ktc2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0LCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXSAubG9hZGluZ092ZXJsYXknKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkgPSBuZXcgSW1hZ2VHYWxsZXJ5KCQoJ1tkYXRhLWltYWdlLWdhbGxlcnldJywgdGhpcy4kc2NvcGUpKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB0aGlzLmxpc3RlblF1YW50aXR5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuJHN3YXRjaE9wdGlvbk1lc3NhZ2UgPSAkKCcuc3dhdGNoLW9wdGlvbi1tZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlID0ge307XG4gICAgICAgIHRoaXMuc3dhdGNoR3JvdXBJZExpc3QgPSAkKCdbaWRePVwic3dhdGNoR3JvdXBcIl0nKS5tYXAoKF8sIGdyb3VwKSA9PiAkKGdyb3VwKS5hdHRyKCdpZCcpKTtcbiAgICAgICAgdGhpcy5zdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVNlbGVjdG9yKCk7XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCAkc2NvcGUpO1xuXG4gICAgICAgIGlmICgkZm9ybVswXS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0uZmluZCgnaW5wdXQjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JyksXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuICAgICAgICB0aGlzLmJpbmRSZW5ld2luZ0RhdGFQbGFuVmlzaWJpbGl0eSgkcHJvZHVjdE9wdGlvbnNFbGVtZW50KTtcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RTd2F0Y2hHcm91cCA9ICQoJ1tpZCo9XCJhdHRyaWJ1dGVfc3dhdGNoXCJdJywgJGZvcm0pO1xuICAgICAgICBjb25zdCAkcHJvZHVjdFN3YXRjaExhYmVscyA9ICQoJy5mb3JtLW9wdGlvbi1zd2F0Y2gnLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IHBsYWNlU3dhdGNoTGFiZWxJbWFnZSA9IChfLCBsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG9wdGlvbkltYWdlID0gJCgnLmZvcm0tb3B0aW9uLWV4cGFuZGVkJywgJChsYWJlbCkpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSW1hZ2VXaWR0aCA9ICRvcHRpb25JbWFnZS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICBjb25zdCBleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCA9IDU1O1xuICAgICAgICAgICAgY29uc3QgeyByaWdodCB9ID0gbGFiZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlciA9IHdpbmRvdy5zY3JlZW4ud2lkdGggLSByaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0VmFsdWUgPSBvcHRpb25JbWFnZVdpZHRoIC0gZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXI7XG5cbiAgICAgICAgICAgIGlmIChlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlciA8IChvcHRpb25JbWFnZVdpZHRoICsgZXh0ZW5kZWRPcHRpb25JbWFnZU9mZnNldExlZnQpKSB7XG4gICAgICAgICAgICAgICAgJG9wdGlvbkltYWdlLmNzcygnbGVmdCcsIGAke3NoaWZ0VmFsdWUgPiAwID8gLXNoaWZ0VmFsdWUgOiBzaGlmdFZhbHVlfXB4YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaExhYmVscywgcGxhY2VTd2F0Y2hMYWJlbEltYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuc2hvd1N3YXRjaE5hbWVzKSB7XG4gICAgICAgICAgICB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuXG4gICAgICAgICAgICAkcHJvZHVjdFN3YXRjaEdyb3VwLm9uKCdjaGFuZ2UnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3YXRjaEdyb3VwRWxlbWVudCA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTd2F0Y2hOYW1lT25PcHRpb24oJCh0YXJnZXQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaEdyb3VwLCAoXywgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3YXRjaEdyb3VwRWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuaXMoJzpjaGVja2VkJykpIHRoaXMuc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkKGVsZW1lbnQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoJHByb2R1Y3RPcHRpb25zRWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRmb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdFRvQ2FydChldmVudCwgJGZvcm1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XG4gICAgICAgIGlmICgoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlQ2FsbGJhY2sgPSBvcHRpb25DaGFuZ2VEZWNvcmF0b3IuY2FsbCh0aGlzLCBoYXNEZWZhdWx0T3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoJHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICBiYW5uZXJVdGlscy5kaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudChwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwcmV2aWV3TW9kYWwnKVswXTtcbiAgICB9XG5cbiAgICByZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLmFkZChbe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdID4gLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLm51bWJlcnNPbmx5KHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5wcm9kdWN0UXVhbnRpdHlFcnJvck1lc3NhZ2UsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3I7XG4gICAgfVxuXG4gICAgc3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3dhdGNoR3JvdXBJZExpc3QubGVuZ3RoICYmIGlzRW1wdHkodGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLnN3YXRjaEdyb3VwSWRMaXN0LmVhY2goKF8sIHN3YXRjaEdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW3N3YXRjaEdyb3VwSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW3N3YXRjaEdyb3VwSWRdID0gJChgIyR7c3dhdGNoR3JvdXBJZH0gfiAuc3dhdGNoLW9wdGlvbi1tZXNzYWdlYCkudGV4dCgpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFByb2R1Y3RWYXJpYW50KCkge1xuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyksIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkKHZhbHVlKS5pcygnOmhpZGRlbicpIHx8IHZhbHVlLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFudHNsaXN0ID0gY29udmVydEludG9BcnJheSh2YWx1ZS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0ID0gaW5wdCA9PiBpbnB0LmRhdGFzZXQucHJvZHVjdEF0dHJpYnV0ZVZhbHVlID09PSBjaGVja2VkLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50c2xpc3QuZmlsdGVyKG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQpWzBdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmlubmVyVGV4dC50cmltKCkgOiBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuY2hpbGRyZW5bMF0gOiBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbC50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKSA6ICd1bnNhdGlzZmllZCc7XG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcucHJvZHVjdFZpZXcnKTtcblxuICAgICAgICBpZiAocHJvZHVjdFZhcmlhbnQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50ID0gcHJvZHVjdFZhcmlhbnQgPT09ICd1bnNhdGlzZmllZCcgPyAnJyA6IHByb2R1Y3RWYXJpYW50O1xuICAgICAgICAgICAgaWYgKHZpZXcuYXR0cignZGF0YS1ldmVudC10eXBlJykpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IHZpZXcuZmluZCgnLnByb2R1Y3RWaWV3LXRpdGxlJylbMF0uaW5uZXJUZXh0LnJlcGxhY2UoL1wiL2csICdcXFxcJCYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XG4gICAgICAgICAgICAgICAgY2FyZC5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRSZW5ld2luZ0RhdGFQbGFuVmlzaWJpbGl0eSgkcHJvZHVjdE9wdGlvbnNFbGVtZW50KSB7XG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub2ZmKCdjaGFuZ2UucmVuZXdpbmdEYXRhUGxhbicsICdbbmFtZT1cImF0dHJpYnV0ZVsxMzMwM11cIl0nKTtcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlLnJlbmV3aW5nRGF0YVBsYW4nLCAnW25hbWU9XCJhdHRyaWJ1dGVbMTMzMDNdXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCRwcm9kdWN0T3B0aW9uc0VsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoJHByb2R1Y3RPcHRpb25zRWxlbWVudCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygkcHJvZHVjdE9wdGlvbnNFbGVtZW50KSB7XG4gICAgICAgIGlmICghJHByb2R1Y3RPcHRpb25zRWxlbWVudCB8fCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJHJlbmV3aW5nUmFkaW8gPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50XG4gICAgICAgICAgICAuZmluZCgnW25hbWU9XCJhdHRyaWJ1dGVbMTMzMDNdXCJdW3ZhbHVlPVwiMTY5OFwiXScpXG4gICAgICAgICAgICAuZmlyc3QoKTtcblxuICAgICAgICBpZiAoJHJlbmV3aW5nUmFkaW8ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG91bGRIaWRlRmllbGRzID0gJHJlbmV3aW5nUmFkaW8uaXMoJzpjaGVja2VkJyk7XG4gICAgICAgIGNvbnN0IGZpZWxkSWRzID0gWzEzMzA0LCAxMzMwNSwgMTMzMDZdO1xuXG4gICAgICAgIGZpZWxkSWRzLmZvckVhY2goZmllbGRJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtmaWVsZElkfVwiXWApLmZpcnN0KCk7XG4gICAgICAgICAgICBpZiAoJGZpZWxkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNob3VsZEhpZGVGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVIaWRkZW5Nb2RpZmllckZpZWxkKCRmaWVsZCk7XG4gICAgICAgICAgICAgICAgJGZpZWxkLmNzcygnZGlzcGxheScsICdub25lJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1lcnJvcicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZVNob3duTW9kaWZpZXJGaWVsZCgkZmllbGQpO1xuICAgICAgICAgICAgICAgICRmaWVsZC5jc3MoJ2Rpc3BsYXknLCAnJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZUhpZGRlbk1vZGlmaWVyRmllbGQoJGZpZWxkKSB7XG4gICAgICAgICRmaWVsZC5maW5kKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoX2ksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcblxuICAgICAgICAgICAgaWYgKCEkZWwuaXMoJ1tkYXRhLW9yaWdpbmFsLXJlcXVpcmVkXScpKSB7XG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ2RhdGEtb3JpZ2luYWwtcmVxdWlyZWQnLCAkZWwucHJvcCgncmVxdWlyZWQnKSA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkZWwucHJvcCgncmVxdWlyZWQnLCBmYWxzZSkucmVtb3ZlQXR0cigncmVxdWlyZWQnKTtcblxuICAgICAgICAgICAgaWYgKCRlbC5pcygnOmNoZWNrYm94LCA6cmFkaW8nKSkge1xuICAgICAgICAgICAgICAgICRlbC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkZWwuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgJGVsLnByb3AoJ3NlbGVjdGVkSW5kZXgnLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGVuYWJsZVNob3duTW9kaWZpZXJGaWVsZCgkZmllbGQpIHtcbiAgICAgICAgJGZpZWxkLmZpbmQoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSksIHNlbGVjdCwgdGV4dGFyZWEnKS5lYWNoKChfaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3Qgd2FzUmVxdWlyZWQgPSAkZWwuYXR0cignZGF0YS1vcmlnaW5hbC1yZXF1aXJlZCcpID09PSAndHJ1ZSc7XG5cbiAgICAgICAgICAgICRlbC5wcm9wKCdyZXF1aXJlZCcsIHdhc1JlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmICh3YXNSZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB3aW5kb3cgaXMgYmVpbmcgcnVuIGluc2lkZSBhbiBpZnJhbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1J1bm5pbmdJbklmcmFtZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEhhbmRsZSBwcm9kdWN0IG9wdGlvbnMgY2hhbmdlc1xuICAgICAqXG4gICAgICovXG4gICAgcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuXG4gICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKCRjaGFuZ2VkT3B0aW9uLmF0dHIoJ3R5cGUnKSA9PT0gJ2ZpbGUnIHx8IHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSwgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGZvcm0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRleHQgPSAkZm9ybS5wYXJlbnRzKCcucHJvZHVjdFZpZXcnKS5maW5kKCcucHJvZHVjdFZpZXctaW5mbycpO1xuICAgICAgICAgICAgICAgIG1vZGFsRmFjdG9yeSgnW2RhdGEtcmV2ZWFsXScsIHsgJGNvbnRleHQgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RPcHRpb25zQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBwcm9kdWN0QXR0cmlidXRlc0RhdGEsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpZiB0aGlzIHNldHRpbmcgaXMgZW5hYmxlZCBpbiBQYWdlIEJ1aWxkZXJcbiAgICAgKiBzaG93IG5hbWUgZm9yIHN3YXRjaCBvcHRpb25cbiAgICAgKi9cbiAgICBzaG93U3dhdGNoTmFtZU9uT3B0aW9uKCRzd2F0Y2gsICRzd2F0Y2hHcm91cCkge1xuICAgICAgICBjb25zdCBzd2F0Y2hOYW1lID0gJHN3YXRjaC5hdHRyKCdhcmlhLWxhYmVsJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVN3YXRjaEdyb3VwSWQgPSAkc3dhdGNoR3JvdXAuYXR0cignYXJpYS1sYWJlbGxlZGJ5Jyk7XG4gICAgICAgIGNvbnN0ICRzd2F0Y2hPcHRpb25NZXNzYWdlID0gJChgIyR7YWN0aXZlU3dhdGNoR3JvdXBJZH0gfiAuc3dhdGNoLW9wdGlvbi1tZXNzYWdlYCk7XG5cbiAgICAgICAgJCgnW2RhdGEtb3B0aW9uLXZhbHVlXScsICRzd2F0Y2hHcm91cCkudGV4dChzd2F0Y2hOYW1lKTtcbiAgICAgICAgJHN3YXRjaE9wdGlvbk1lc3NhZ2UudGV4dChgJHt0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZVthY3RpdmVTd2F0Y2hHcm91cElkXX0gJHtzd2F0Y2hOYW1lfWApO1xuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRzd2F0Y2hPcHRpb25NZXNzYWdlLCAnc3RhdHVzJywgJ2Fzc2VydGl2ZScpO1xuICAgIH1cblxuICAgIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiBhcmlhTGl2ZVN0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAhISRlbGVtZW50LnBhcmVudHMoJy5xdWlja1ZpZXcnKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSkge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChpbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxuICAgICAgICAgICAgICAgIHsgJzF4JzogdGhpcy5jb250ZXh0Lnpvb21TaXplIH0sXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIHpvb20gc2l6ZSB1c2VkIGZvciBkYXRhLXpvb20taW1hZ2UgaW5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LXZpZXcuaHRtbFxuXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG5cbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQucHJvZHVjdFNpemUgfSxcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggZmFsbGJhY2sgaW1hZ2Ugc2l6ZSB1c2VkIGZvciB0aGUgbWFpbiBwcm9kdWN0IGltYWdlIGluXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcblxuICAgICAgICAgICAgICAgICAgICBOb3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIGltYWdlIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHNyY3NldFxuXG4gICAgICAgICAgICAgICAgICAgIEFsc28gbm90ZSB0aGF0IGdldFNyY3NldCByZXR1cm5zIGEgc2ltcGxlIHNyYyBzdHJpbmcgd2hlbiBleGFjdGx5IG9uZSBzaXplIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChpbWFnZS5kYXRhKTtcblxuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuc2V0QWx0ZXJuYXRlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5yZXN0b3JlSW1hZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIGFjdGlvbiB3aGVuIHRoZSBzaG9wcGVyIGNsaWNrcyBvbiArIC8gLSBmb3IgcXVhbnRpdHlcbiAgICAgKlxuICAgICAqL1xuICAgIGxpc3RlblF1YW50aXR5Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBidXR0b24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0O1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNaW4gPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNYXggPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuXG4gICAgICAgICAgICBsZXQgcXR5ID0gZm9ybXMubnVtYmVyc09ubHkoJGlucHV0LnZhbCgpKSA/IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApIDogcXVhbnRpdHlNaW47XG4gICAgICAgICAgICAvLyBJZiBhY3Rpb24gaXMgaW5jcmVtZW50aW5nXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgICAgICBxdHkgPSBmb3Jtcy52YWxpZGF0ZUluY3JlYXNlQWdhaW5zdE1heEJvdW5kYXJ5KHF0eSwgcXVhbnRpdHlNYXgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChxdHkgPiAxKSB7XG4gICAgICAgICAgICAgICAgcXR5ID0gZm9ybXMudmFsaWRhdGVEZWNyZWFzZUFnYWluc3RNaW5Cb3VuZGFyeShxdHksIHF1YW50aXR5TWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiBpbnB1dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiRpbnB1dC52YWwocXR5KTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0ZXh0XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJHRleHQudGV4dChxdHkpO1xuICAgICAgICAgICAgLy8gcGVyZm9ybSB2YWxpZGF0aW9uIGFmdGVyIHVwZGF0aW5nIHByb2R1Y3QgcXVhbnRpdHlcbiAgICAgICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQcmV2ZW50IHRyaWdnZXJpbmcgcXVhbnRpdHkgY2hhbmdlIHdoZW4gcHJlc3NpbmcgZW50ZXJcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2tleXByZXNzJywgJy5mb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIGV2ZW50LndoaWNoLCB0aGVuIHVzZSBldmVudC53aGljaCwgb3RoZXJ3aXNlIHVzZSBldmVudC5rZXlDb2RlXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcbiAgICAgICAgICAgIGlmICh4ID09PSAxMykge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdrZXl1cCcsICcuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEFkZCBhIHByb2R1Y3QgdG8gY2FydFxuICAgICAqXG4gICAgICovXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0QnRuID0gJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICQoZXZlbnQudGFyZ2V0KSk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQnRuVmFsID0gJGFkZFRvQ2FydEJ0bi52YWwoKTtcbiAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkYWRkVG9DYXJ0QnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XG5cbiAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKG5vcm1hbGl6ZUZvcm1EYXRhKG5ldyBGb3JtRGF0YShmb3JtKSksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW5jeVNlbGVjdG9yKHJlc3BvbnNlLmRhdGEuY2FydF9pZCk7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gR3VhcmQgc3RhdGVtZW50XG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRhZGRUb0NhcnRCdG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0TW9kYWwoKS4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkYWRkVG9DYXJ0QnRuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9wZW4gcHJldmlldyBtb2RhbCBhbmQgdXBkYXRlIGNvbnRlbnRcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5hZGRDbGFzcygnYXBwbGUtcGF5LXN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGFkZFRvQ2FydEJ0bikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJHByZU1vZGFsRm9jdXNlZEVsID0gJGFkZFRvQ2FydEJ0bjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRDb250ZW50KHRoaXMucHJldmlld01vZGFsLCByZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vIG1vZGFsLCByZWRpcmVjdCB0byB0aGUgY2FydCBwYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8IHRoaXMuY29udGV4dC51cmxzLmNhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRhZGRUb0NhcnRCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjYXJ0IGNvbnRlbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvcHJldmlldycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0OiBjYXJ0SXRlbUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gdXJsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3RUbyh1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xuICAgICAgICAgICAgd2luZG93LnRvcC5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYXJ0IGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kYWx9IG1vZGFsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhcnRJdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgdXBkYXRlQ2FydENvbnRlbnQobW9kYWwsIGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGNvdW50ZXJcbiAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRRdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgbW9kYWwuJGNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRDb3VudGVyID0gJCgnLm5hdlVzZXItYWN0aW9uIC5jYXJ0LWNvdW50Jyk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0UXVhbnRpdHkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9tb3Rpb25CYW5uZXIgPSAkKCdbZGF0YS1wcm9tb3Rpb24tYmFubmVyXScpO1xuICAgICAgICAgICAgY29uc3QgJGJhY2tUb1Nob3BwcGluZ0J0biA9ICQoJy5wcmV2aWV3Q2FydENoZWNrb3V0ID4gW2RhdGEtcmV2ZWFsLWNsb3NlXScpO1xuICAgICAgICAgICAgY29uc3QgJG1vZGFsQ2xvc2VCdG4gPSAkKCcjcHJldmlld01vZGFsID4gLm1vZGFsLWNsb3NlJyk7XG4gICAgICAgICAgICBjb25zdCBiYW5uZXJVcGRhdGVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0Q29udGFpbmVyID0gJCgnI21haW4tY29udGVudCA+IC5jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICRwcm9kdWN0Q29udGFpbmVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IHBkcC11cGRhdGVcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAkKCcubG9hZGluZ092ZXJsYXkucGRwLXVwZGF0ZScsICRwcm9kdWN0Q29udGFpbmVyKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJGNhcnRDb3VudGVyLmFkZENsYXNzKCdjYXJ0LWNvdW50LS1wb3NpdGl2ZScpO1xuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkcHJvbW90aW9uQmFubmVyLmxlbmd0aCAmJiAkYmFja1RvU2hvcHBwaW5nQnRuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICRiYWNrVG9TaG9wcHBpbmdCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgJG1vZGFsQ2xvc2VCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpO1xuICAgICAgICB0aGlzLnNob3dQcm9kdWN0SW1hZ2UoZGF0YS5pbWFnZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCkge1xuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YUl0ZW1zID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0RGV0YWlscyA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgZm9ybURhdGFJdGVtIG9mIGZvcm1EYXRhSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGZvcm1EYXRhSXRlbTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwcm9kdWN0X2lkJykge1xuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLnByb2R1Y3RJZCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAncXR5W10nKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMucXVhbnRpdHkgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvYXR0cmlidXRlLykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0T3B0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogTnVtYmVyKG5hbWUubWF0Y2goL1xcZCsvZylbMF0pLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMgPSBwcm9kdWN0RGV0YWlscz8ub3B0aW9uU2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFsuLi5wcm9kdWN0RGV0YWlscy5vcHRpb25TZWxlY3Rpb25zLCBwcm9kdWN0T3B0aW9uXVxuICAgICAgICAgICAgICAgICAgICA6IFtwcm9kdWN0T3B0aW9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RVcGRhdGUnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7IHByb2R1Y3REZXRhaWxzIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRlU2VsZWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLmVhY2goKGksIHNjb3BlKSA9PiB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVEYXlzKGRhdGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aFNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbbW9udGhdXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5U2VsZWN0b3IgPSBkYXRlT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lJD1cIltkYXldXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhclNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbeWVhcl1cIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KG1vbnRoU2VsZWN0b3IudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoeWVhclNlbGVjdG9yLnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgbGV0IGRheXNJbk1vbnRoO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4obW9udGgpICYmICFOdW1iZXIuaXNOYU4oeWVhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9ICgoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMCkgPyAyOSA6IDI4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogY2FzZSA2OiBjYXNlIDk6IGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9IDMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9IDMxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZGF5ID0gMjk7IGRheSA8PSAzMTsgZGF5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZGF5U2VsZWN0b3IucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtkYXl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXkgPD0gZGF5c0luTW9udGggJiYgIW9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5U2VsZWN0b3Iub3B0aW9ucy5hZGQobmV3IE9wdGlvbihkYXksIGRheSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRheSA+IGRheXNJbk1vbnRoICYmIG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKHNjb3BlKS5vbignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlT3B0aW9uID0gZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1kYXRlXScpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURheXMoZGF0ZU9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPWRhdGVdJykuZm9yRWFjaCgoZGF0ZU9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZURheXMoZGF0ZU9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYW55IGVtcHR5IHN0cmluZyB2YWx1ZXMgZnJvbSB0aGUgZm9ybURhdGFcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiovXG5leHBvcnQgY29uc3QgZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSA9IGZvcm1EYXRhID0+IHtcbiAgICBjb25zdCByZXMgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKHZhbCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjcyOTkyL2FqYXgtcmVxdWVzdC1mYWlscy13aGVuLXNlbmRpbmctZm9ybWRhdGEtaW5jbHVkaW5nLWVtcHR5LWZpbGUtaW5wdXQtaW4tc2FmYXJpXG4gKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtID0gZm9ybURhdGEgPT4ge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoISh2YWwgaW5zdGFuY2VvZiBGaWxlKSB8fCB2YWwubmFtZSB8fCB2YWwuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHJlcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgZW1wdHkgc3RyaW5nIHZhbHVlcyBhbmQgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybURhdGFcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUZvcm1EYXRhID0gZm9ybURhdGEgPT4gZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybShmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpKTtcbiIsImltcG9ydCB7IGlzQnJvd3NlcklFIH0gZnJvbSAnLi9pZS1oZWxwZXJzJztcblxuY29uc3QgYmFubmVyVXRpbHMgPSB7XG4gICAgZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQ6IChwcm9kdWN0QXR0cmlidXRlcykgPT4ge1xuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlIHx8IGlzQnJvd3NlcklFKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHByaWNlID0gMDtcblxuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLnByaWNlX3JhbmdlKSB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhfdGF4LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdiaWdjb21tZXJjZS5wcm9kdWN0cHJpY2VjaGFuZ2UnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYmFubmVyVXRpbHM7XG4iLCJleHBvcnQgY29uc3QgaXNCcm93c2VySUUgPSAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRJbnRvQXJyYXkgPSBjb2xsZWN0aW9uID0+IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbGxlY3Rpb24pO1xuIiwiaW1wb3J0ICdlYXN5em9vbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGdhbGxlcnkpIHtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1tYWluXScpO1xuICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpO1xuICAgICAgICB0aGlzLiRzZWxlY3RhYmxlSW1hZ2VzID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHt9O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLnNldEltYWdlWm9vbSgpO1xuICAgIH1cblxuICAgIHNldE1haW5JbWFnZShpbWdPYmopIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7IC4uLmltZ09iaiB9O1xuXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKCk7XG4gICAgfVxuXG4gICAgc2V0QWx0ZXJuYXRlSW1hZ2UoaW1nT2JqKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVkSW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuZmluZCgnaW1nJykuYXR0cignc3JjJyksXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuYXR0cignZGF0YS16b29tLWltYWdlJyksXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiB0aGlzLiRtYWluSW1hZ2UuZmluZCgnaW1nJykuYXR0cignc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6IHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHJlc3RvcmVJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UodGhpcy5zYXZlZEltYWdlKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNhdmVkSW1hZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3ROZXdJbWFnZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaW1nT2JqID0ge1xuICAgICAgICAgICAgbWFpbkltYWdlVXJsOiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsJyksXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsJyksXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICAgICAgbWFpbkltYWdlQWx0OiAkdGFyZ2V0LmNoaWxkcmVuKCkuZmlyc3QoKS5hdHRyKCdhbHQnKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoaW1nT2JqKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3dhcE1haW5JbWFnZSgpIHtcbiAgICAgICAgY29uc3QgaXNCcm93c2VySUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdUcmlkZW50Jyk7XG5cbiAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLnN3YXAoXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy4kbWFpbkltYWdlLmF0dHIoe1xuICAgICAgICAgICAgJ2RhdGEtem9vbS1pbWFnZSc6IHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZC5hdHRyKHtcbiAgICAgICAgICAgIGFsdDogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZUFsdCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzQnJvd3NlcklFKSB7XG4gICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlc0lFID0ge1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgke3RoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybH0pYCxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbic6ICdjb250ZW50LWJveCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb250YWluJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZC5jc3MoZmFsbGJhY2tTdHlsZXNJRSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltYWdlKCkge1xuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSAkKCcucHJvZHVjdFZpZXctaW1hZ2UnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gJGltYWdlQ29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICRpbWFnZUNvbnRhaW5lci53aWR0aCgpO1xuXG4gICAgICAgIGNvbnN0ICRpbWFnZSA9IHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS4kem9vbTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gJGltYWdlLmhlaWdodCgpO1xuICAgICAgICBjb25zdCB3aWR0aCA9ICRpbWFnZS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChoZWlnaHQgPCBjb250YWluZXJIZWlnaHQgfHwgd2lkdGggPCBjb250YWluZXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEltYWdlWm9vbSgpIHtcbiAgICAgICAgdGhpcy5lYXN5em9vbSA9IHRoaXMuJG1haW5JbWFnZS5lYXN5Wm9vbSh7XG4gICAgICAgICAgICBvblNob3c6ICgpID0+IHRoaXMuY2hlY2tJbWFnZSgpLFxuICAgICAgICAgICAgZXJyb3JOb3RpY2U6ICcnLFxuICAgICAgICAgICAgbG9hZGluZ05vdGljZTogJycsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdJbWFnZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfaW5oZXJpdHNMb29zZSIsImNvbnN0cnVjdG9yIiwiX3NldFByb3RvdHlwZU9mIiwibXVzdGFjaGUiLCJjcmVhdGVGb2N1c1RyYXAiLCJ0b29scyIsIkNvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IiwiREVGQVVMVF9TVEVQIiwiSW1hZ2VHYWxsZXJ5TW9kYWwiLCJpbWFnZUdhbGxlcnkiLCIkZ2FsbGVyeSIsIm1vZGFsVGVtcGxhdGUiLCIkYm9keSIsIiQiLCJjcmVhdGVNb2RhbCIsIl9wcm90byIsImJpbmRFdmVudHMiLCJfdGhpcyIsImZpbmQiLCJvZmYiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkYSIsImN1cnJlbnRUYXJnZXQiLCJpbWFnZVVybCIsImRhdGEiLCJpbWFnZVNyY3NldCIsInpvb21JbWFnZVVybCIsInZpZGVvSWQiLCJzdGVwIiwiY2xvc2VzdCIsIk51bWJlciIsInNwbGl0Iiwib3Blbk1vZGFsIiwiJGdhbGxlcnlNb2RhbCIsImNsb3NlTW9kYWwiLCJrZXkiLCJpcyIsInRhcmdldCIsInNldE1haW5JbWFnZSIsInNldE1haW5WaWRlbyIsInRvdGFsU3RlcCIsInNldE1haW4zNjAiLCJwcmV2aW91czM2MFN0ZXAiLCJuZXh0MzYwU3RlcCIsInBsYXkzNjAiLCJwYXVzZTM2MCIsImRlc3Ryb3lNb2RhbCIsInJlbW92ZSIsIl8kbWFpbkltYWdlTGluayRnZXQiLCIkbWFpbkltYWdlTGluayIsIiRtYWluSW1hZ2UiLCJjbG9uZSIsInJlbW92ZUF0dHIiLCJhdHRyIiwibWFpbkltYWdlTGlua0VsZW1lbnQiLCJnZXQiLCJvdXRlckhUTUwiLCJuYW1lIiwidGV4dCIsInZpZGVvc0xhYmVsIiwiaW1hZ2VzMzYwTGFiZWwiLCJpbWFnZXNMYWJlbCIsInZpZGVvcyIsIm1hcCIsImxpIiwiXyQkZmluZCRjbG9uZSRnZXQiLCJsaW5rRWxlbWVudCIsImltYWdlczM2MCIsIl8kZWwkZ2V0IiwiJGVsIiwiaW1hZ2VzIiwiZmlsdGVyIiwiXyRhJGdldCIsInJlbmRlciIsImhpZGUiLCJhcHBlbmRUbyIsImluaXRJbWFnZVpvb20iLCJmb2N1c1RyYXAiLCJlc2NhcGVEZWFjdGl2YXRlcyIsInJldHVybkZvY3VzT25EZWFjdGl2YXRlIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJfdGhpczIiLCIkbGFzdEFjdGl2ZUVsZW1lbnQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhZGRDbGFzcyIsIiRtYWluSW1nIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiYWN0aXZhdGUiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsIl90aGlzMyIsImhpZGVNYWluVmlkZW8iLCJoaWRlMzYwVUkiLCJkZWFjdGl2YXRlIiwibWFpbkltYWdlVXJsIiwibWFpbkltYWdlU3Jjc2V0Iiwic2hvd01haW5JbWFnZSIsInNldEFjdGl2ZVRodW1iIiwic3dhcE1haW5JbWFnZSIsImhpZGVNYWluSW1hZ2UiLCJfaSIsIiRpbWFnZUNvbnRhaW5lciIsImVhc3l6b29tIiwic3dhcCIsImlzQnJvd3NlcklFIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5jbHVkZXMiLCJmYWxsYmFja1N0eWxlc0lFIiwiY3NzIiwiY2hlY2tJbWFnZSIsImNvbnRhaW5lckhlaWdodCIsImhlaWdodCIsImNvbnRhaW5lcldpZHRoIiwid2lkdGgiLCIkaW1hZ2UiLCIkem9vbSIsIl90aGlzNCIsImVhc3lab29tIiwib25TaG93IiwiZXJyb3JOb3RpY2UiLCJsb2FkaW5nTm90aWNlIiwic2hvd01haW5WaWRlbyIsInNyYyIsInNob3czNjBVSSIsInN3YXBNYWluMzYwIiwic2V0MzYwQ3VycmVudFN0ZXAiLCJjdXJyZW50U3RlcCIsInRvdGFsIiwiX3RoaXM1IiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsMzYwIiwic2V0SW50ZXJ2YWwiLCJDYXJkSW1hZ2VHYWxsZXJ5TW9kYWwiLCJfSW1hZ2VHYWxsZXJ5TW9kYWwyIiwiJHNjb3BlIiwiX3RlbXAiLCJfdGhpczYiLCJfcmVmIiwicHJvZHVjdElkIiwiZ3JhcGhRTFRva2VuIiwiem9vbVNpemUiLCJwcm9kdWN0U2l6ZSIsInRodW1iU2l6ZSIsInR4dFZpZGVvc0xhYmVsIiwidHh0SW1hZ2VzMzYwTGFiZWwiLCJ0eHRJbWFnZXNMYWJlbCIsImxvYWRpbmdNb2RhbFRlbXBsYXRlIiwiX3Byb3RvMiIsIm9wZW5Mb2FkaW5nTW9kYWwiLCJfb3BlbkxvYWRpbmdNb2RhbCIsIl9jYWxsZWUiLCJfY29udGV4dCIsImxvYWRNb2RhbCIsIl9sb2FkTW9kYWwiLCJfY2FsbGVlMiIsIm1haW5JbWFnZSIsIl9jb250ZXh0MiIsImZldGNoUHJvZHVjdCIsImltYWdlIiwiaXNEZWZhdWx0IiwiZ2V0U3Jjc2V0IiwidXJsVGVtcGxhdGUiLCJ6b29tVXJsIiwidXJsIiwidGh1bWJuYWlsVXJsIiwiYWx0VGV4dCIsInZpZGVvIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiaHRtbCIsIl90ZW1wMiIsIl90aGlzNyIsIl9yZWYyIiwiX3JlZjIkZmlyc3RWaWRlbyIsImZpcnN0VmlkZW8iLCJfcmVmMiRmaXJzdCIsImZpcnN0MzYwIiwiZmlyc3QiLCJfZmV0Y2hQcm9kdWN0IiwiX2NhbGxlZTMiLCJfdGhpcyR6b29tU2l6ZSRzcGxpdCQiLCJ6b29tV2lkdGgiLCJ6b29tSGVpZ2h0IiwiX3RoaXMkcHJvZHVjdFNpemUkc3BsIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiX3RoaXMkdGh1bWJTaXplJHNwbGl0IiwidGh1bWJXaWR0aCIsInRodW1iSGVpZ2h0IiwicmVzcCIsIl9yZWYzIiwiX2NvbnRleHQzIiwiYWpheCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInZhcmlhYmxlcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwieGhyRmllbGRzIiwid2l0aENyZWRlbnRpYWxzIiwic2l0ZSIsInByb2R1Y3QiLCJlZGdlcyIsIl9yZWY0Iiwibm9kZSIsIl9yZWY1IiwiY3VzdG9tRmllbGRzIiwiX3JlZjYiLCJfcmVmNyIsIkltYWdlR2FsbGVyeSIsIl9Db3JuZXJzdG9uZUltYWdlR2FsbCIsIl90aGlzOCIsImltYWdlR2FsbGVyeU1vZGFsIiwiX3Byb3RvMyIsImRlZmF1bHQiLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2NyZWF0ZUNsYXNzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJ1dGlscyIsIkNvcm5lcnN0b25lUHJvZHVjdERldGFpbHMiLCJhbGVydE1vZGFsIiwic2hvd0FsZXJ0TW9kYWwiLCJNb2RhbEV2ZW50cyIsImZpeEZvcm1FbGVtZW50VW5pcXVlSWRzIiwiY3VycmVuY3lGb3JtYXQiLCJTYWxlQ291bnRkb3duIiwiREVCVUdfTE9HIiwibm9ybWFsaXplT3B0aW9uU3RyaW5nIiwicyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImVxdWFsT3B0aW9uU3RyaW5nIiwiYiIsImFyZUFycmF5c0VxdWFsVW5vcmRlcmVkIiwiYXJyMSIsImFycjIiLCJfYXJyMSIsInNsaWNlIiwic29ydCIsIl9hcnIyIiwiZXZlcnkiLCJpbmRleCIsImNhY2hlZFNldHRpbmdzIiwiaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQiLCJfeCIsIl94MiIsIl9oYW5kbGVQcm9taXNlc1dpdGhMaW1pdCIsIl9jYWxsZWU5IiwicHJvbWlzZXMiLCJsaW1pdCIsInJlc3VsdHMiLCJleGVjdXRpbmciLCJfbG9vcCIsIl9pdGVyYXRvciIsIl9zdGVwIiwiX2NvbnRleHQwIiwicHJvbWlzZSIsIl9jb250ZXh0OSIsInJlc3VsdCIsInNwbGljZSIsImluZGV4T2YiLCJwdXNoIiwicmFjZSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfcmVnZW5lcmF0b3JWYWx1ZXMiLCJhbGwiLCJQcm9kdWN0RGV0YWlscyIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZSIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY29uY2F0IiwibW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUiLCJtb2RpZmllcnNNb2RhbFRlbXBsYXRlIiwib3B0aW9uVG9vbHRpcFRlbXBsYXRlIiwib3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUiLCJvcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUiLCJvcHRpb25QcmljZVRlbXBsYXRlIiwib3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlIiwic3VidG90YWxUZW1wbGF0ZSIsInN1bW1hcnlUZW1wbGF0ZSIsInNob3dQcmljZUZyZWUiLCJzaG93UHJpY2VaZXJvIiwiYWRkVG9DYXJ0V3JhcHBlclNlbGVjdG9yIiwiZmV0Y2hPcHRpb25QcmljZUNhY2hlIiwiY29uc29sZSIsImxvZyIsIl9jb25zb2xlIiwiJGZvcm0iLCIkY2hvb3NlT3B0aW9uc0J0biIsInZhbCIsInJlZnJlc2hQcm9kdWN0TWV0YWRhdGEiLCJlbmFibGVNb2RpZmllcnNNb2RhbCIsImNyZWF0ZU1vZGlmaWVyc01vZGFsIiwiYmluZFByb2R1Y3RFZGl0RXZlbnRzIiwiYmluZFN0aWNreUFkZFRvQ2FydEV2ZW50cyIsImJpbmRNb2RhbERlc3Ryb3kiLCJpbml0T3B0aW9uU3RlcHBlciIsInN5bmNQcm9kdWN0Q2FyZFF0eSIsImluaXRTYWxlQ291bnRkb3duIiwiYmluZFJlbmV3aW5nRGF0YVBsYW5WaXNpYmlsaXR5IiwicmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMiLCJyZW5kZXJTcGVjVG9vbHRpcHMiLCJpbml0SW5saW5lT3B0aW9uUHJpY2VIaW50cyIsInBhcnNlTWV0YWRhdGEiLCJzZWxlY3RvciIsInBhcnNlIiwicHJvZHVjdE9wdGlvbnMiLCJnZXRWaWV3TW9kZWwiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGUyIiwiX2xlbjIiLCJfa2V5MiIsIm1vZGVsIiwiJHVwZGF0ZVByb2R1Y3RXcmFwcGVyIiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCIkYnRuIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwicHJvcCIsImFkZFByb2R1Y3RUb0NhcnQiLCJmb3JtIiwiZWRpdFByb2R1Y3RJbkNhcnQiLCJlZGl0UHJvZHVjdFRvQ2FydCIsIl9lZGl0UHJvZHVjdFRvQ2FydCIsIiRzYXZlQnRuIiwib3JpZ2luYWxCdG5WYWwiLCJ3YWl0TWVzc2FnZSIsImZvcm1EYXRhIiwic3VjY2VzcyIsImZhaWx1cmUiLCJpdGVtSWQiLCJuZXdRdHkiLCJfdCIsIndpbmRvdyIsIkZvcm1EYXRhIiwidW5kZWZpbmVkIiwiJG92ZXJsYXkiLCJzZXRMaXZlUmVnaW9uQXR0cmlidXRlcyIsIm5leHQiLCJyZXNwb25zZSIsImNvbnRleHQiLCJlZGl0UHJvZHVjdENhbGxiYWNrIiwiZXJyb3JUZXh0IiwidG1wIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoZWNrSXNRdWlja1ZpZXdDaGlsZCIsIiRwcmVNb2RhbEZvY3VzZWRFbCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiZWRpdFByb2R1Y3RRdWFudGl0eSIsInVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsImZhaWwiLCJfeGhyIiwiX3N0YXR1cyIsImVycm9yIiwiX3gzIiwiX3g0IiwicmVqZWN0IiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJfcmVzcG9uc2UkZGF0YSIsInN0YXR1cyIsImVycm9ycyIsImpvaW4iLCJzdWJtaXRFdmVudCIsIkV2ZW50IiwiaGFuZGxlU3RpY2t5QWRkVG9DYXJ0Q2xpY2siLCIkYnV0dG9uIiwiJHN0aWNreVF0eSIsInNpYmxpbmdzIiwiJGZvcm1RdHkiLCJjaGVja1ZhbGlkaXR5IiwiaW52YWxpZEZpZWxkIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImZvY3VzIiwicmVwb3J0VmFsaWRpdHkiLCJvbmUiLCJjbG9zZWQiLCJlYWNoIiwiZm9ybUZpZWxkRWwiLCIkZm9ybUZpZWxkIiwiJGRlYyIsIiRpbmMiLCIkY2hlY2siLCJpbml0IiwiJHJhZGlvcyIsIiRjaGVja2VkIiwiJGZpcnN0Iiwic2VsZWN0IiwiaW5jIiwiZXEiLCJub3QiLCJoYXNDbGFzcyIsIiR1bmNoZWNrIiwiJG5vbmUiLCJjYXJkUXR5IiwiJHF0eSIsInF0eSIsInR4dFNhbGVDb3VudGRvd25KU09OIiwiZW5kX2luIiwiY29uZmlndXJlIiwiYWRkIiwidG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcyIsIiRwcm9kdWN0T3B0aW9uc0VsIiwiJHJlbmV3aW5nUmFkaW8iLCJzaG91bGRIaWRlRmllbGRzIiwiZmllbGRJZHMiLCJmb3JFYWNoIiwiZmllbGRJZCIsIiRmaWVsZCIsImRpc2FibGVIaWRkZW5Nb2RpZmllckZpZWxkIiwiZW5hYmxlU2hvd25Nb2RpZmllckZpZWxkIiwiZWwiLCJvcmlnaW5hbFJlcXVpcmVkIiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlMyIsIl9sZW4zIiwiX2tleTMiLCJ1cGRhdGVTYWxlUGVyY2VudCIsInVwZGF0ZVNoaXBwaW5nQ291bnRkb3duIiwibWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyIsInVwZGF0ZU1vZGlmaWVyc1ZpZXciLCIkbW9kaWZpZXJzTW9kYWxPcHRpb25zIiwiJG1vZGlmaWVyc01vZGFsU3VidG90YWwiLCJzaG93T3B0aW9uSWRzIiwic3RhY2tlZFNob3dPcHRpb25JZHMiLCJub25lU2FsZXMiLCJjdXN0b21GaWVsZE5vbmVTYWxlcyIsInNob3dPcHRpb25QcmljZXMiLCJ1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbCIsIl9kYXRhJHByaWNlIiwiX2RhdGEkcHJpY2U0IiwiJGRpdiIsIiRzcGFuIiwic2FsZVBlcmNlbnQiLCJwcmljZSIsIndpdGhvdXRfdGF4IiwiX2RhdGEkcHJpY2UyIiwiX2RhdGEkcHJpY2UzIiwicnJwX3dpdGhvdXRfdGF4IiwiTWF0aCIsInJvdW5kIiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJ3aXRoX3RheCIsIl9kYXRhJHByaWNlNSIsIl9kYXRhJHByaWNlNiIsInJycF93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4IiwiJHNoaXBwaW5nQ291bnRkb3duIiwidXBkYXRlQ2FydENvbnRlbnQiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGU0IiwiY2xvc2VNb2RpZmllcnNNb2RhbCIsInByZXZpZXdNb2RhbCIsIl9sZW40IiwiX2tleTQiLCJzaG93UHJvZHVjdEltYWdlIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlNSIsIl9sZW41IiwiX2tleTUiLCIkbW9kaWZpZXJzTW9kYWxJbWciLCJfdGhpcyRpbWFnZUdhbGxlcnkkY3UiLCJjdXJyZW50SW1hZ2UiLCJmb3JtYXRQcmljZSIsInBsdXNTeW1ib2wiLCJkaXNwbGF5IiwiY3VycmVuY3lfdG9rZW4iLCJjdXJyZW5jeSIsInN5bWJvbCIsImN1cnJlbmN5X2xvY2F0aW9uIiwic3ltYm9sUGxhY2VtZW50IiwiZGVjaW1hbF90b2tlbiIsImRlY2ltYWxUb2tlbiIsImRlY2ltYWxfcGxhY2VzIiwiZGVjaW1hbFBsYWNlcyIsInRob3VzYW5kc190b2tlbiIsInRob3VzYW5kc1Rva2VuIiwiZm9ybWF0dGVkIiwiZmluZE9wdGlvblZhbHVlIiwib3B0aW9uTmFtZSIsInZhbHVlTmFtZSIsIl9oaWRlSWZPcHRpb24kdmFsdWVzIiwiaGlkZUlmT3B0aW9uIiwiZGlzcGxheV9uYW1lIiwidmFsdWVzIiwibGFiZWwiLCJvcHRpb25JZCIsImlkIiwidmFsdWVJZCIsIiRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlciIsIiRhZGRUb0NhcnRXcmFwcGVyIiwiJG1vZGlmaWVyc01vZGFsIiwidHh0Q29udGludWUiLCJwcm9kdWN0VGl0bGUiLCIkbW9kaWZpZXJzTW9kYWxDb21wbGV0ZSIsIiRtb2RpZmllcnNNb2RhbENsb3NlIiwiJG1vZGlmaWVyc01vZGFsQ29udGludWUiLCIkbW9kaWZpZXJzTW9kYWxCYWNrIiwiYXBwZW5kIiwiZ29CYWNrU3RlcCIsImludmFsaWRJbnB1dHMiLCJyZWR1Y2UiLCJfaW52YWxpZElucHV0cyIsInZhbGlkYXRlVmFyaWFudE9wdGlvbnMiLCJpbml0TW9kaWZpZXJzVmlldyIsIm9wZW5Nb2RpZmllcnNNb2RhbCIsImJlZm9yZSIsImlnbm9yZUFQSUNhbGwiLCJfdXBkYXRlTW9kaWZpZXJzVmlldyIsIl9yZWYzJGlnbm9yZUFQSUNhbGwiLCIkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5IiwiJG1vZGlmaWVyc01vZGFsVGl0bGUiLCIkbW9kaWZpZXJzTW9kYWxGb290ZXIiLCJjdXJyZW50T3B0aW9uSWQiLCJjdXJyZW50R3JvdXBOYW1lIiwiY3VycmVudEdyb3VwT3B0aW9uSWRzIiwiaGlkZU9wdGlvbklkcyIsImhpZGVPcHRpb25WYWx1ZXMiLCJ0b29sdGlwcyIsInRvb2x0aXBIZWFkaW5ncyIsIm9wdGlvblJlbmFtZXMiLCJfdGhpcyRwcm9kdWN0T3B0aW9ucyQiLCJ0aXRsZSIsImdyb3VwVG9vbHRpcCIsIiR0b29sdGlwIiwiZW1wdHkiLCJmcm9tIiwiZW50cmllcyIsInN0YXRlIiwib3B0aW9uIiwiaGlkZU9wdGlvbiIsImdyb3VwTmFtZSIsImdyb3VwT3B0aW9uSWRzIiwiaXNOb25lUmFkaW9DaGVja2VkIiwiJGZpbGUiLCJpc0ZpbGVTaG93biIsIiRkYXRlIiwiaXNPcHRpb25hbERhdGVTaG93biIsInJlcXVpcmVkIiwiJHNlbGVjdCIsImlzT3B0aW9uYWxTZWxlY3RTaG93biIsIiR0ZXh0IiwiaXNPcHRpb25hbFRleHRTaG93biIsImZvcm1WYWx1ZSIsIkZpbGUiLCJjdXN0b21GaWVsZCIsImhpZGVJZk1hdGNoIiwiY3VzdG9tRmllbGRNYXRjaEhpZGVJZiIsImdyb3VwTWF0Y2giLCJjdXN0b21GaWVsZE1hdGNoR3JvdXAiLCJfT2JqZWN0JGFzc2lnbiIsInRvb2x0aXBNYXRjaCIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZCIsIl90b29sdGlwcyRvcHRpb24kaWQyIiwiYXNzaWduIiwidG9vbHRpcCIsInZhbHVlVG9vbHRpcHMiLCJ2YWx1ZVRvb2x0aXBIZWFkaW5ncyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyIsIm5ld05hbWUiLCJjdXN0b21GaWVsZE1hdGNoUmVuYW1lIiwidmFsdWVOb25TYWxlcyIsImN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlIiwiXyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAiLCJzaG93T3B0aW9uVG9vbHRpcHMiLCJwb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMiLCJkaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlciIsInNob3dTdW1tYXJ5IiwiX3g1IiwiX3RoaXM5IiwiaW52YWxpZCIsInBvcCIsIiRvcHRpb24iLCJfdGhpczAiLCJtYXRjaCIsImhpZGVJZk9wdGlvbnMiLCJrdiIsIl9yZWY4IiwidHJpbSIsIl9yZWY5IiwidGhlbk9wdGlvbnMiLCJfcmVmMCIsIl9yZWYxIiwiX3JlZjEwIiwiX3RoaXMwJGZpbmRPcHRpb25WYWx1IiwiZ2V0QWxsIiwiX3JlZjExIiwiX3JlZjEyIiwiX2hpZGVPcHRpb25WYWx1ZSIsIl9yZWYxMyIsIl90aGlzMSIsIl90aGlzMSRwcm9kdWN0T3B0aW9ucyIsIl9yZWYxNCIsIl9yZWYxNSIsIl90aGlzMTAiLCJfbSQxJHNwbGl0JG1hcCIsIl9yZWYxNiIsIl9yZWYxNyIsIl9yZWYxOCIsIl90aGlzMTEiLCJfbSQxJHNwbGl0JG1hcDIiLCJoZWFkaW5nIiwiX3JlZjE5IiwiX3JlZjIwIiwiX3JlZjIxIiwiX2t2JHNwbGl0JG1hcCIsInZhbHVlTGFiZWwiLCJfb3B0aW9uJHZhbHVlcyRmaW5kIiwiX3JlZjIyIiwiZmV0Y2hTZXR0aW5ncyIsIl9mZXRjaFNldHRpbmdzIiwiY3VycmVuY3lDb2RlIiwiYWN0aXZlX2N1cnJlbmN5X2NvZGUiLCJkZWZhdWx0Q3VycmVuY3lDb2RlIiwiZGVmYXVsdF9jdXJyZW5jeV9jb2RlIiwic2V0dGluZ3MiLCJmZXRjaE9wdGlvblByaWNlcyIsIl9mZXRjaE9wdGlvblByaWNlcyIsIl9jYWxsZWU0Iiwic2hvd09wdGlvbnMiLCJzZWxlY3RlZE9wdGlvblZhbHVlSWRzIiwiY29tYm9zIiwiY29tYm9zTWV0YSIsInByb2R1Y3RzIiwiX3Byb2R1Y3RzJG1hcCIsInByZXYiLCJzZWxlY3Rpb25zIiwiX2NvbnRleHQ0IiwiX3JlZjIzIiwib3B0aW9uRW50aXR5SWQiLCJ2YWx1ZUVudGl0eUlkIiwiX3JlZjI0IiwiZmV0Y2hPcHRpb25QcmljZXNCYXRjaCIsIl9hcnJheUxpa2VUb0FycmF5Iiwic2VsZWN0aW9uIiwicHJpY2VzV2l0aFRheCIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aCIsIl9wcmV2JHByaWNlc1dpdGhUYXgiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGgyIiwiX3ByZXYkcHJpY2VzV2l0aFRheDIiLCJub25TYWxlUHJpY2VXaXRoVGF4IiwiYmFzZVByaWNlIiwiYWRqdXN0ZWRQcmljZXNXaXRoVGF4Iiwibm9uU2FsZVByaWNlVmFsdWUiLCJwcmljZXNXaXRob3V0VGF4IiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoMyIsIl9wcmV2JHByaWNlc1dpdGhvdXRUYSIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aDQiLCJfcHJldiRwcmljZXNXaXRob3V0VGEyIiwibm9uU2FsZVByaWNlV2l0aG91dFRheCIsImFkanVzdGVkUHJpY2VzV2l0aG91dFRheCIsIl94NiIsIl94NyIsImZldGNoT3B0aW9uUHJpY2UiLCJfZmV0Y2hPcHRpb25QcmljZSIsIl9jYWxsZWU1Iiwib3B0aW9uVmFsdWVJZHMiLCJfeWllbGQkdGhpcyRmZXRjaE9wdGkiLCJfY29udGV4dDUiLCJfeDgiLCJfZmV0Y2hPcHRpb25QcmljZXNCYXRjaCIsIl9jYWxsZWU3IiwiX3RoaXMxMiIsIkJBVENIX0NIVU5LX1NJWkUiLCJjYWNoZUtleXMiLCJ1bmNhY2hlZEluZGV4ZXMiLCJjaHVua3MiLCJfY29udGV4dDciLCJjb21ibyIsImNodW5rSW5kZXhlcyIsIl9jYWxsZWU2IiwidmFyaWFibGVEZWZzIiwiYWxpYXNGaWVsZHMiLCJfdDIiLCJfY29udGV4dDYiLCJfcmVzcCRkYXRhIiwiX3g5IiwiX3RoaXMxMyIsIl9yZWYyNiIsIl9yZWYyNiQiLCIkbGFiZWwiLCJhZnRlciIsInByZXBlbmQiLCJfcmVmMjciLCJ2YWx1ZVRvb2x0aXAiLCIkdmFsdWUiLCJfcmVmMjgiLCJfcmVmMjkiLCJfcmVmMzAiLCJ2YWx1ZVRvb2x0aXBIZWFkaW5nIiwiJHRvb2x0aXBIZWFkaW5nIiwiX3RoaXMxNCIsIm9wdGlvbklkcyIsIl9pbmRleCIsIl9yZWYzMSIsIl90b29sdGlwcyRvcHRpb24kaWQzIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZDQiLCJzaG93SW5saW5lT3B0aW9uVG9vbHRpcHMiLCJfdGhpczE1IiwicHJlZml4IiwibWFzdGVyVG9vbHRpcHMiLCJyZXNvbHZlZFRvb2x0aXBzIiwiX3JlZjMyIiwic3RhcnRzV2l0aCIsInNwZWNOYW1lIiwiX3JlZjMzIiwidG9vbHRpcFRleHQiLCIkZGQiLCJfdGhpczE2IiwiX3JlZjM0IiwiX3JlZjM0JCIsIl9yZWYzNCQkdmFsdWVUb29sdGlwcyIsIl9yZWYzNSIsIl9yZWYzNiIsIl9yZWYzNyIsInNob3duT3B0aW9ucyIsIl9yZWYzOCIsImRlZmF1bHRPcHRpb25zIiwiX3JlZjM5IiwicHJlZmlsbCIsInNlbGVjdGVkX2RhdGUiLCJkYXkiLCJtb250aCIsInllYXIiLCJfcmVmNDAiLCJzZWxlY3RlZCIsImNoZWNrYm94T3B0aW9ucyIsIl9yZWY0MSIsIm5vVmFsdWUiLCJmaWxlT3B0aW9ucyIsIl9yZWY0MiIsInBhcnRpYWwiLCJkYXRlT3B0aW9ucyIsIl9yZWY0MyIsImRyb3Bkb3duT3B0aW9ucyIsIl9yZWY0NCIsInRleHRPcHRpb25zIiwiX3JlZjQ1IiwiX3JlZjQ2IiwiX3ZhbHVlcyRmaW5kIiwiX3JlZjQ3IiwiX3JlZjQ4IiwiY2hlY2tlZCIsIl9yZWY0OSIsInBhcmFtcyIsInByZWxvYWRlciIsInByaWNlSHRtbCIsInByaWNlVGV4dCIsInN1YnRvdGFsSHRtbCIsIiRwcmljZSIsIiRvbGQiLCIkcGxhY2Vob2xkZXIiLCJfdGhpcyRwcm9kdWN0T3B0aW9ucyIsIl90aGlzMTciLCJfcmVmNTAiLCJfc2hvd09wdGlvblByaWNlcyIsIl9jYWxsZWU4IiwiaWdub3JlVXBkYXRlU3VidG90YWwiLCJfdGhpczE4IiwiX3lpZWxkJFByb21pc2UkYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsJCIsInNob3dQcmljZSIsIl9jb250ZXh0OCIsIl9pZCIsIl9yZWY1MSIsImFicyIsIl9yZWY1MiIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYSIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYTIiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UyIiwidGF4IiwicGRwIiwicHJpY2VXaXRoVGF4VmFsdWUiLCJwcmljZVdpdGhUYXgiLCJub25TYWxlUHJpY2VXaXRoVGF4VmFsdWUiLCJwcmljZVdpdGhvdXRUYXhWYWx1ZSIsInByaWNlV2l0aG91dFRheCIsIm5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZSIsIl9ub25lU2FsZXMkb3B0aW9uSWQiLCJub25TYWxlIiwiX2FkanVzdGVkUHJpY2VzV2l0aG91MyIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYTMiLCJleGNoYW5nZWROb25TYWxlIiwiZXhjaGFuZ2VSYXRlIiwicHJpY2VWYWx1ZSIsInByaWNlU2VsZWN0b3IiLCJzaG93T3B0aW9uU3VidG90YWwiLCJfeDAiLCJfeDEiLCJfeDEwIiwiX3gxMSIsIl94MTIiLCJfeDEzIiwiX3Byb2R1Y3QkcHJpY2VzV2l0aFRhIiwiX3Byb2R1Y3QkcHJpY2VzV2l0aG91IiwidHh0U3VidG90YWwiLCJ0eHRSZXZpZXdTZWxlY3Rpb25zIiwib3B0aW9ucyIsIiRzdWJ0b3RhbCIsIl9vcHRpb24kdmFsdWVzIiwiXyRtb2RpZmllcnNNb2RhbE9wdGlvIiwiZGF5U3RyIiwibW9udGhTdHIiLCJ5ZWFyU3RyIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInZhbHVlU3RyIiwiX3JlZjUzIiwib3B0aW9uRWxQcmljZUh0bWwiLCJzdW1tYXJ5SHRtbCIsInBhcnNlRGF0ZVRpbWVTdHJpbmciLCJzdHIiLCJyZWdleCIsInNob3J0TW9udGgiLCJzaG9ydERheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJzaG9ydEhvdXIiLCJzaG9ydE1pbnV0ZSIsInNpbmdsZVRpbWVDb21wb25lbnQiLCJ0elNpZ24iLCJ0ekhvdXJPZmZzZXQiLCJ0ek1pbnV0ZU9mZnNldCIsInBhcnNlSW50Iiwic2lnbiIsInR6SG91ciIsInR6TWludXRlIiwidGltZXpvbmUiLCJwYXJzZUNvdW50ZG93bkRhdGUiLCJwYXJzZWREYXRlIiwibm93IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJoIiwibWluIiwic2VjIiwiZGF0ZSIsInV0Y01pbGxpcyIsIlVUQyIsInNldEZ1bGxZZWFyIiwic2V0TW9udGgiLCJzZXREYXRlIiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsImVsZW1lbnRzIiwiU2V0IiwidGltZXIiLCJvYnNlcnZlciIsImRhdGVEYXRhTmFtZSIsImluVmlld3BvcnREYXRhTmFtZSIsInRyYW5zbGF0aW9uc0RhdGFOYW1lIiwic2VsZWN0b3JzIiwiZW5kTGFiZWwiLCJkYXlWYWx1ZSIsImRheUxhYmVsIiwiaG91clZhbHVlIiwiaG91ckxhYmVsIiwibWludXRlVmFsdWUiLCJtaW51dGVMYWJlbCIsInNlY29uZFZhbHVlIiwic2Vjb25kTGFiZWwiLCJ0ZW1wbGF0ZSIsImhpZGVDbGFzcyIsInNhbGVFbmRDbGFzcyIsImFjdGl2ZUNsYXNzIiwidHJhbnNsYXRpb25zIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJqc29uIiwidHJhbnMiLCJrZXlzIiwiX3RyYW5zIiwic2hvcnRLZXkiLCJ2YWxpZERhdGUiLCJvYnNlcnZlIiwic3RhcnQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290IiwidGhyZXNob2xkIiwidW5vYnNlcnZlIiwiaXNWaXNpYmxlSW5WaWV3cG9ydCIsInNpemUiLCJydW4iLCJzdG9wIiwiZGlzY29ubmVjdCIsImJvZHkiLCJjb250YWlucyIsImRpZmYiLCJmbG9vciIsIiRlbmRMYWJlbCIsIiRkYXkiLCIkZGF5VmFsdWUiLCIkZGF5TGFiZWwiLCIkaG91ciIsIiRob3VyVmFsdWUiLCIkaG91ckxhYmVsIiwiJG1pbnV0ZSIsIiRtaW51dGVWYWx1ZSIsIiRtaW51dGVMYWJlbCIsIiRzZWNvbmQiLCIkc2Vjb25kVmFsdWUiLCIkc2Vjb25kTGFiZWwiLCJ0b2dnbGVDbGFzcyIsImFyaWFLZXlDb2RlcyIsIlJFVFVSTiIsIlNQQUNFIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwic2V0Q2hlY2tlZFJhZGlvSXRlbSIsIml0ZW1Db2xsZWN0aW9uIiwiaXRlbUlkeCIsImlkeCIsIml0ZW0iLCIkaXRlbSIsImNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbiIsImxhc3RJdGVtSWR4IiwiY3VycmVudElkeCIsImhhbmRsZUl0ZW1LZXlEb3duIiwia2V5Q29kZSIsImxhc3RDb2xsZWN0aW9uSXRlbUlkeCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZJdGVtSWR4IiwibmV4dEl0ZW1JZHgiLCIkY29udGFpbmVyIiwiaXRlbVNlbGVjdG9yIiwiJGl0ZW1Db2xsZWN0aW9uIiwiaW5pdFJhZGlvT3B0aW9ucyIsIm9wdGlvbnNUeXBlc01hcCIsIklOUFVUX0ZJTEUiLCJJTlBVVF9URVhUIiwiSU5QVVRfTlVNQkVSIiwiSU5QVVRfQ0hFQ0tCT1giLCJURVhUQVJFQSIsIkRBVEUiLCJTRVRfU0VMRUNUIiwiU0VUX1JFQ1RBTkdMRSIsIlNFVF9SQURJTyIsIlNXQVRDSCIsIlBST0RVQ1RfTElTVCIsIm9wdGlvbkNoYW5nZURlY29yYXRvciIsImFyZURlZmF1bHRPcHRpb25zU2V0IiwiYXR0cmlidXRlc0RhdGEiLCJhdHRyaWJ1dGVzQ29udGVudCIsImNvbnRlbnQiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwiZ2V0VGFiUmVxdWVzdHMiLCJfXyIsIl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlIiwidmFyaWFudERvbU5vZGUiLCJ2YXJpYW50VHlwZSIsInJhZGlvIiwiJHJhZGlvIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsImVuYWJsZUF0dHJpYnV0ZSIsImRpc2FibGVBdHRyaWJ1dGUiLCJsb2NhdGlvbiIsImhhc2giLCIkYWN0aXZlVGFiIiwiaGFzIiwiJHRhYkNvbnRlbnQiLCJycnBXaXRoVGF4IiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJGFkZFRvQ2FydEZvcm0iLCIkd2lzaGxpc3RWYXJpYXRpb24iLCJzdG9jayIsIiRpbnB1dCIsInNrdSIsInVwYyIsInF1YW50aXR5IiwiJGJ1bGtQcmljaW5nIiwiJHdhbGxldEJ1dHRvbnMiLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsInZpZXdNb2RlbCIsIm1lc3NhZ2UiLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwic2hvd01lc3NhZ2VCb3giLCJ1cGRhdGVQcmljZVZpZXciLCJ3ZWlnaHQiLCJ2YXJpYW50SWQiLCJ1cGRhdGVXYWxsZXRCdXR0b25zVmlldyIsImJ1bGtfZGlzY291bnRfcmF0ZXMiLCJhZGRUb0NhcnRXcmFwcGVyIiwidXBkYXRlZFByaWNlIiwicHJpY2VfcmFuZ2UiLCJtYXgiLCJzYXZlZCIsIiRtZXNzYWdlQm94IiwiaXNWYWxpZEZvcm0iLCJ0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eSIsInNob3VsZFNob3ciLCJnZXRBdHRyaWJ1dGVUeXBlIiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJwYXJlbnQiLCJ0b2dnbGVPcHRpb24iLCJzZWxlY3RlZEluZGV4IiwibW9kYWxGYWN0b3J5Iiwibm9kIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImZvcm1zIiwibm9ybWFsaXplRm9ybURhdGEiLCJjb252ZXJ0SW50b0FycmF5IiwiYmFubmVyVXRpbHMiLCJjdXJyZW5jeVNlbGVjdG9yIiwiX1Byb2R1Y3REZXRhaWxzQmFzZSIsInByb2R1Y3RBdHRyaWJ1dGVzRGF0YSIsImxpc3RlblF1YW50aXR5Q2hhbmdlIiwiJHN3YXRjaE9wdGlvbk1lc3NhZ2UiLCJzd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2UiLCJzd2F0Y2hHcm91cElkTGlzdCIsImdyb3VwIiwic3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcyIsInVwZGF0ZURhdGVTZWxlY3RvciIsInVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSIsImFkZFRvQ2FydFZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJoYXNPcHRpb25zIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCIkcHJvZHVjdFN3YXRjaEdyb3VwIiwiJHByb2R1Y3RTd2F0Y2hMYWJlbHMiLCJwbGFjZVN3YXRjaExhYmVsSW1hZ2UiLCIkb3B0aW9uSW1hZ2UiLCJvcHRpb25JbWFnZVdpZHRoIiwib3V0ZXJXaWR0aCIsImV4dGVuZGVkT3B0aW9uSW1hZ2VPZmZzZXRMZWZ0IiwiX2xhYmVsJGdldEJvdW5kaW5nQ2xpIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlnaHQiLCJlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlciIsInNjcmVlbiIsInNoaWZ0VmFsdWUiLCJyZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24iLCJzaG93U3dhdGNoTmFtZXMiLCJzd2F0Y2hHcm91cEVsZW1lbnQiLCJwYXJlbnROb2RlIiwic2hvd1N3YXRjaE5hbWVPbk9wdGlvbiIsImVsZW1lbnQiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCJzZXRQcm9kdWN0VmFyaWFudCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIl9pc0VtcHR5IiwiJHByb2R1Y3RJZCIsIm9wdGlvbkNoYW5nZUNhbGxiYWNrIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJkaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudCIsInZhbGlkYXRlIiwiY2IiLCJudW1iZXJzT25seSIsImVycm9yTWVzc2FnZSIsInByb2R1Y3RRdWFudGl0eUVycm9yTWVzc2FnZSIsInN3YXRjaEdyb3VwSWQiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsIm9wdGlvblRpdGxlIiwiaXNTYXRpc2ZpZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGF0ZVN0cmluZyIsIngiLCJnZXRTZWxlY3RlZE9wdGlvbkxhYmVsIiwicHJvZHVjdFZhcmlhbnRzbGlzdCIsIm1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQiLCJpbnB0IiwiZGF0YXNldCIsInByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSIsImxhYmVscyIsInByb2R1Y3RWYXJpYW50IiwidmlldyIsInByb2R1Y3ROYW1lIiwiY2FyZCIsIndhc1JlcXVpcmVkIiwiaXNSdW5uaW5nSW5JZnJhbWUiLCJzZWxmIiwidG9wIiwiJGNoYW5nZWRPcHRpb24iLCJwYXJlbnRzIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50IiwiJGNvbnRleHQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGV0YWlsIiwiJHN3YXRjaCIsIiRzd2F0Y2hHcm91cCIsInN3YXRjaE5hbWUiLCJhY3RpdmVTd2F0Y2hHcm91cElkIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwicm9sZSIsIl9pc1BsYWluT2JqZWN0Iiwic2V0QWx0ZXJuYXRlSW1hZ2UiLCJyZXN0b3JlSW1hZ2UiLCIkdGFyZ2V0IiwicXVhbnRpdHlNaW4iLCJxdWFudGl0eU1heCIsInZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkiLCJ2YWxpZGF0ZURlY3JlYXNlQWdhaW5zdE1pbkJvdW5kYXJ5Iiwid2hpY2giLCIkYWRkVG9DYXJ0QnRuIiwiaXRlbUFkZCIsImNhcnRfaWQiLCJvcGVuIiwiQXBwbGVQYXlTZXNzaW9uIiwiJG1vZGFsIiwiY2FydF9pdGVtIiwicmVkaXJlY3RUbyIsImNhcnRfdXJsIiwidXJscyIsImdldENhcnRDb250ZW50IiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCJzdWdnZXN0IiwiY29uZmlnIiwic3VnZ2VzdGlvbnMiLCJnZXRDb250ZW50IiwiaWZyYW1lU2RrIiwibW9kYWwiLCJ1cGRhdGVDb250ZW50IiwiJGNhcnRRdWFudGl0eSIsIiRjb250ZW50IiwiJGNhcnRDb3VudGVyIiwiJHByb21vdGlvbkJhbm5lciIsIiRiYWNrVG9TaG9wcHBpbmdCdG4iLCIkbW9kYWxDbG9zZUJ0biIsImJhbm5lclVwZGF0ZUhhbmRsZXIiLCIkcHJvZHVjdENvbnRhaW5lciIsInJlbG9hZCIsImZvcm1EYXRhSXRlbXMiLCJzZXJpYWxpemVBcnJheSIsInByb2R1Y3REZXRhaWxzIiwiZm9ybURhdGFJdGVtIiwicHJvZHVjdE9wdGlvbiIsIm9wdGlvblZhbHVlIiwib3B0aW9uU2VsZWN0aW9ucyIsInNjb3BlIiwidXBkYXRlRGF5cyIsImRhdGVPcHRpb24iLCJtb250aFNlbGVjdG9yIiwiZGF5U2VsZWN0b3IiLCJ5ZWFyU2VsZWN0b3IiLCJkYXlzSW5Nb250aCIsImlzTmFOIiwiT3B0aW9uIiwiZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSIsInJlcyIsIl9zdGVwJHZhbHVlIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsImV2dCIsImFtb3VudCIsImRvY3VtZW50TW9kZSIsImNvbGxlY3Rpb24iLCIkbWFpbkltYWdlTmVzdGVkIiwiJHNlbGVjdGFibGVJbWFnZXMiLCJzZXRJbWFnZVpvb20iLCJpbWdPYmoiLCJzYXZlZEltYWdlIiwiJHNlbGVjdGVkVGh1bWIiLCJzZWxlY3ROZXdJbWFnZSIsIm1haW5JbWFnZUFsdCIsImFsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9