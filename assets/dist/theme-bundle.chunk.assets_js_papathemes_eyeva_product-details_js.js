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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX3Byb2R1Y3QtZGV0YWlsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEs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Q0FBQztFQUFBLE9BQUF1UCxZQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2V5ZXZhL2ltYWdlLWdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9leWV2YS9wcm9kdWN0LWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9zYWxlLWNvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvcmFkaW9PcHRpb25zLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMtYmFzZS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Jhbm5lci11dGlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvaWUtaGVscGVycy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L2ltYWdlLWdhbGxlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdlYXN5em9vbSc7XG5pbXBvcnQgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xuaW1wb3J0IHsgY3JlYXRlRm9jdXNUcmFwIH0gZnJvbSAnZm9jdXMtdHJhcCc7XG5pbXBvcnQgeyB0b29scyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDb3JuZXJzdG9uZUltYWdlR2FsbGVyeSBmcm9tICcuLi8uLi90aGVtZS9wcm9kdWN0L2ltYWdlLWdhbGxlcnknO1xuXG5jb25zdCBERUZBVUxUX1NURVAgPSAzNjA7XG5jbGFzcyBJbWFnZUdhbGxlcnlNb2RhbCB7XG4gICAgbW9kYWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1vdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1jbG9zZVwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkNsb3NlXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkNsb3NlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+PHVzZSBocmVmPVwiI2ljb24teG1hcmstbGFyZ2VcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi1lYXN5em9vbVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4taW1nLWNvbnRhaW5lclwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1tYWluLWltZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Jm1haW5JbWFnZUxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLTM2MFwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLTM2MC1pbWctY29udGFpbmVyXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1pbWctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBkYXRhLXNpemVzPVwiYXV0b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC0zNjAtY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcHJldmlvdXNcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXByZXZpb3VzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1hcnJvdy1sZWZ0LWxvbmdcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcGxheVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGxheT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tcGxheVwiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UGxheTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLXBhdXNlXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wYXVzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tcGF1c2VcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlBhdXNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tbmV4dFwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtbmV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctcmlnaHQtbG9uZ1wiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi12aWRlb1wiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGF6eWxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2NDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzOTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRpdGxlXCI+e3tuYW1lfX08L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyN2aWRlb3MubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXZpZGVvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sYWJlbFwiPnt7dmlkZW9zTGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I3ZpZGVvc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey92aWRlb3N9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3svdmlkZW9zLmxlbmd0aH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlczM2MC5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3tpbWFnZXMzNjBMYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzMzYwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzMzYwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlczM2MC5sZW5ndGh9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXMubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWltYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sYWJlbFwiPnt7aW1hZ2VzTGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXMubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJbWFnZUdhbGxlcnk/fSBpbWFnZUdhbGxlcnlcbiAgICAgKiBAcGFyYW0ge2pRdWVyeT99ICRnYWxsZXJ5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW1hZ2VHYWxsZXJ5ID0gbnVsbCwgJGdhbGxlcnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5ID0gaW1hZ2VHYWxsZXJ5O1xuICAgICAgICB0aGlzLiRnYWxsZXJ5ID0gJGdhbGxlcnk7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgICAgICAgaWYgKGltYWdlR2FsbGVyeSAmJiAkZ2FsbGVyeSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuJGdhbGxlcnkpIHtcbiAgICAgICAgICAgIC8vIG9wZW4gbW9kYWwgd2hlbiBjbGljayBvbiB2aWRlbywgMzYwIHZpZXcsIG9yIG1vcmUgaW1hZ2UgdGh1bWJuYWlsc1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeVxuICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW9dLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLW1vcmVdJylcbiAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snKVxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmNzZXQgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSAkYS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXScpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKGltYWdlVXJsLCBpbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB2aWRlb0lkLCBzdGVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsb3NlIG1vZGFsIHdoZW4gY2xpY2sgY2xvc2UgYnV0dG9uXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIHByZXNzIEVzY2FwZSBrZXlcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLm9uKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNsb3NlIG1vZGFsIHdoZW4gY2xpY2sgb3V0c2lkZSAob3ZlcmxheSlcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGdhbGxlcnlNb2RhbC5pcyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW1hZ2UgdGh1bWJuYWlsc1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHZpZGVvIHRodW1ibmFpbHNcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKHZpZGVvSWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAzNjAgaW1hZ2UgdGh1bWJuYWlsc1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3JdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdG90YWxTdGVwID0gJGEuZGF0YSgnZXlldmFJbWFnZUdhbGxlcnlNb2RhbEl0ZW1Sb3RhdG9yJyk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW4zNjAoXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgIHRvdGFsU3RlcCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wcmV2aW91c10nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzMzYwU3RlcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtbmV4dF0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLm5leHQzNjBTdGVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wbGF5XScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucGxheTM2MCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGF1c2VdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZTM2MCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95TW9kYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLiRnYWxsZXJ5TW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbCA9ICQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZU1vZGFsKCkge1xuICAgICAgICBjb25zdCAkbWFpbkltYWdlTGluayA9IHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuZmluZCgnYScpLmNsb25lKCk7XG4gICAgICAgICRtYWluSW1hZ2VMaW5rLmZpbmQoJ2ltZycpLnJlbW92ZUF0dHIoJ2RhdGEtem9vbS1pbWFnZScpLmF0dHIoJ2RhdGEtZXlldmEtZ2FsbGVyeS1tb2RhbC1tYWluLWltYWdlJywgJycpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZUxpbmtFbGVtZW50ID0gJG1haW5JbWFnZUxpbmsuZ2V0KDApPy5vdXRlckhUTUw7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLiRnYWxsZXJ5LmNsb3Nlc3QoJy5wcm9kdWN0VmlldycpLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtdGl0bGVdJykudGV4dCgpO1xuICAgICAgICBjb25zdCB2aWRlb3NMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgndmlkZW9zTGFiZWwnKSB8fCAnVmlkZW9zJztcbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwTGFiZWwgPSB0aGlzLiRnYWxsZXJ5LmRhdGEoJ2ltYWdlczM2MExhYmVsJykgfHwgJzM2MCBWaWV3JztcbiAgICAgICAgY29uc3QgaW1hZ2VzTGFiZWwgPSB0aGlzLiRnYWxsZXJ5LmRhdGEoJ2ltYWdlc0xhYmVsJykgfHwgJ1Byb2R1Y3QgSW1hZ2VzJztcblxuICAgICAgICBjb25zdCB2aWRlb3MgPSB0aGlzLiRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10nKS5nZXQoKS5tYXAobGkgPT4gKHtcbiAgICAgICAgICAgIGxpbmtFbGVtZW50OiAkKGxpKS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykuY2xvbmUoKS5nZXQoMCk/Lm91dGVySFRNTCxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGltYWdlczM2MCA9IHRoaXMuJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0nKS5nZXQoKS5tYXAobGkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChsaSkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpLmNsb25lKCk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9ICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpO1xuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcihpbWFnZVVybC5zcGxpdCgnIycpWzFdKSB8fCBERUZBVUxUX1NURVA7XG4gICAgICAgICAgICAkZWwucmVtb3ZlQXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0nKS5hdHRyKCdkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yJywgc3RlcCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICRlbC5nZXQoMCk/Lm91dGVySFRNTCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpLmdldCgpXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4gJChhKS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW9dLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLW1vcmVdJykubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkYSA9ICQoYSkuY2xvbmUoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0nLCAnJyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogJGEuZ2V0KDApPy5vdXRlckhUTUwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kYWxUZW1wbGF0ZSwge1xuICAgICAgICAgICAgbWFpbkltYWdlTGlua0VsZW1lbnQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmlkZW9zTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXMzNjBMYWJlbCxcbiAgICAgICAgICAgIGltYWdlc0xhYmVsLFxuICAgICAgICAgICAgdmlkZW9zLFxuICAgICAgICAgICAgaW1hZ2VzMzYwLFxuICAgICAgICAgICAgaW1hZ2VzLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmhpZGUoKS5hcHBlbmRUbyh0aGlzLiRib2R5KTtcblxuICAgICAgICB0aGlzLmluaXRJbWFnZVpvb20oKTtcblxuICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IGNyZWF0ZUZvY3VzVHJhcCh0aGlzLiRnYWxsZXJ5TW9kYWwuZ2V0KDApLCB7XG4gICAgICAgICAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgICAgICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKGltYWdlVXJsLCBpbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB2aWRlb0lkLCB0b3RhbFN0ZXApIHtcbiAgICAgICAgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRib2R5LmFkZENsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xuXG4gICAgICAgIGlmICh0aGlzLmltYWdlR2FsbGVyeSkge1xuICAgICAgICAgICAgY29uc3QgJG1haW5JbWcgPSB0aGlzLmltYWdlR2FsbGVyeS4kbWFpbkltYWdlLmZpbmQoJ2ltZycpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoXG4gICAgICAgICAgICAgICAgJG1haW5JbWcuYXR0cignc3JjJyksXG4gICAgICAgICAgICAgICAgJG1haW5JbWcuYXR0cignc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuJG1haW5JbWFnZS5hdHRyKCdkYXRhLXpvb20taW1hZ2UnKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlkZW9JZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8odmlkZW9JZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG90YWxTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW4zNjAoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19vcGVuaW5nJykuc2hvdygpLnJlbW92ZUNsYXNzKCdfb3BlbmluZycpO1xuICAgICAgICB0aGlzLmZvY3VzVHJhcC5hY3RpdmF0ZSgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2VdJykudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19jbG9zaW5nJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlTWFpblZpZGVvKCk7XG4gICAgICAgICAgICB0aGlzLmhpZGUzNjBVSSgpO1xuICAgICAgICAgICAgdGhpcy4kYm9keS5yZW1vdmVDbGFzcygnX2dhbGxlcnlNb2RhbC1vcGVuZWQnKTtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5yZW1vdmVDbGFzcygnX2Nsb3NpbmcnKS5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQpIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50LnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgc2V0TWFpbkltYWdlKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwpIHtcbiAgICAgICAgdGhpcy5oaWRlTWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuaGlkZTM2MFVJKCk7XG4gICAgICAgIHRoaXMuc2hvd01haW5JbWFnZSgpO1xuXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwpO1xuICAgIH1cblxuICAgIHNob3dNYWluSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpLnNob3coKTtcbiAgICB9XG5cbiAgICBoaWRlTWFpbkltYWdlKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsLCB2aWRlb0lkKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmxdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAuZmlsdGVyKChfaSwgYSkgPT5cbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmwgJiYgJChhKS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpID09PSBtYWluSW1hZ2VVcmxcbiAgICAgICAgICAgICAgICB8fCB2aWRlb0lkICYmICQoYSkuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKSA9PT0gdmlkZW9JZClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgc3dhcE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKSB7XG4gICAgICAgIGNvbnN0ICRpbWFnZUNvbnRhaW5lciA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpO1xuICAgICAgICBjb25zdCAkYSA9ICRpbWFnZUNvbnRhaW5lci5maW5kKCdhJyk7XG4gICAgICAgIGNvbnN0ICRtYWluSW1hZ2UgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtZ2FsbGVyeS1tb2RhbC1tYWluLWltYWdlXScpO1xuXG4gICAgICAgICRpbWFnZUNvbnRhaW5lci5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xuICAgICAgICAkYS5hdHRyKCdocmVmJywgem9vbUltYWdlVXJsKTtcbiAgICAgICAgJG1haW5JbWFnZS5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldCk7XG5cbiAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLnN3YXAoXG4gICAgICAgICAgICBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaXNCcm93c2VySUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdUcmlkZW50Jyk7XG4gICAgICAgIGlmIChpc0Jyb3dzZXJJRSkge1xuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZXNJRSA9IHtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoJHttYWluSW1hZ2VVcmx9KWAsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1vcmlnaW4nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY29udGFpbicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZV0nKS5jc3MoZmFsbGJhY2tTdHlsZXNJRSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltYWdlKCkge1xuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1tYWluLWltZy1jb250YWluZXJdJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICRpbWFnZUNvbnRhaW5lci5oZWlnaHQoKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSAkaW1hZ2VDb250YWluZXIud2lkdGgoKTtcblxuICAgICAgICBjb25zdCAkaW1hZ2UgPSB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuJHpvb207XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICRpbWFnZS5oZWlnaHQoKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAkaW1hZ2Uud2lkdGgoKTtcblxuICAgICAgICBpZiAoaGVpZ2h0IDwgY29udGFpbmVySGVpZ2h0IHx8IHdpZHRoIDwgY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0SW1hZ2Vab29tKCkge1xuICAgICAgICB0aGlzLmVhc3l6b29tID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJykuZWFzeVpvb20oe1xuICAgICAgICAgICAgb25TaG93OiAoKSA9PiB0aGlzLmNoZWNrSW1hZ2UoKSxcbiAgICAgICAgICAgIGVycm9yTm90aWNlOiAnJyxcbiAgICAgICAgICAgIGxvYWRpbmdOb3RpY2U6ICcnLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXJdJykuc2hvdygpO1xuICAgIH1cblxuICAgIGhpZGVNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllcl0nKS5oaWRlKClcbiAgICAgICAgICAgIC5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCAnJyk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKHZpZGVvSWQpIHtcbiAgICAgICAgdGhpcy5oaWRlTWFpbkltYWdlKCk7XG4gICAgICAgIHRoaXMuaGlkZTM2MFVJKCk7XG4gICAgICAgIHRoaXMuc2hvd01haW5WaWRlbygpO1xuXG4gICAgICAgIGNvbnN0IHNyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P3JlZj0wJmF1dG9wbGF5PTFgO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXJdJykuc2hvdygpLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobnVsbCwgdmlkZW9JZCk7XG4gICAgfVxuXG4gICAgc2V0TWFpbjM2MChtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApIHtcbiAgICAgICAgdGhpcy5oaWRlTWFpbkltYWdlKCk7XG4gICAgICAgIHRoaXMuaGlkZU1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNob3czNjBVSSgpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKG1haW5JbWFnZVVybCk7XG4gICAgICAgIHRoaXMuc3dhcE1haW4zNjAobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKTtcbiAgICB9XG5cbiAgICBzd2FwTWFpbjM2MChtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLWltZy1jb250YWluZXJdIGltZycpXG4gICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxuICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xuICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKDAsIHRvdGFsU3RlcCk7XG4gICAgfVxuXG4gICAgc2hvdzM2MFVJKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykuc2hvdygpO1xuICAgIH1cblxuICAgIGhpZGUzNjBVSSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLmhpZGUoKTtcbiAgICAgICAgdGhpcy5wYXVzZTM2MCgpO1xuICAgIH1cblxuICAgIHNldDM2MEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwLCB0b3RhbFN0ZXAgPSBERUZBVUxUX1NURVApIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpXG4gICAgICAgICAgICAuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JywgY3VycmVudFN0ZXApXG4gICAgICAgICAgICAuY3NzKCctLWltYWdlLTM2MC1zdGVwcycsIHRvdGFsU3RlcCk7XG4gICAgfVxuXG4gICAgbmV4dDM2MFN0ZXAoKSB7XG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKTtcbiAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JykpIHx8IDA7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJykpIHx8IERFRkFVTFRfU1RFUDtcblxuICAgICAgICBpZiAoc3RlcCA8IHRvdGFsIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcChzdGVwICsgMSwgdG90YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcCgwLCB0b3RhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2aW91czM2MFN0ZXAoKSB7XG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKTtcbiAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JykpIHx8IDA7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJykpIHx8IERFRkFVTFRfU1RFUDtcblxuICAgICAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoc3RlcCAtIDEsIHRvdGFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAodG90YWwgLSAxLCB0b3RhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5MzYwKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwzNjApO1xuICAgICAgICB0aGlzLmludGVydmFsMzYwID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0MzYwU3RlcCgpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykuYWRkQ2xhc3MoJ19wbGF5aW5nJyk7XG4gICAgfVxuXG4gICAgcGF1c2UzNjAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbDM2MCk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5yZW1vdmVDbGFzcygnX3BsYXlpbmcnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkSW1hZ2VHYWxsZXJ5TW9kYWwgZXh0ZW5kcyBJbWFnZUdhbGxlcnlNb2RhbCB7XG4gICAgbG9hZGluZ01vZGFsVGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtb3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheSBleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbG9hZGluZ1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgJHNjb3BlLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9kdWN0SWQsXG4gICAgICAgICAgICBncmFwaFFMVG9rZW4sXG4gICAgICAgICAgICB6b29tU2l6ZSxcbiAgICAgICAgICAgIHByb2R1Y3RTaXplLFxuICAgICAgICAgICAgdGh1bWJTaXplLFxuICAgICAgICAgICAgdHh0VmlkZW9zTGFiZWwsXG4gICAgICAgICAgICB0eHRJbWFnZXMzNjBMYWJlbCxcbiAgICAgICAgICAgIHR4dEltYWdlc0xhYmVsLFxuICAgICAgICB9ID0ge30sXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcbiAgICAgICAgdGhpcy5ncmFwaFFMVG9rZW4gPSBncmFwaFFMVG9rZW47XG4gICAgICAgIHRoaXMuem9vbVNpemUgPSB6b29tU2l6ZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0U2l6ZSA9IHByb2R1Y3RTaXplO1xuICAgICAgICB0aGlzLnRodW1iU2l6ZSA9IHRodW1iU2l6ZTtcbiAgICAgICAgdGhpcy50eHRWaWRlb3NMYWJlbCA9IHR4dFZpZGVvc0xhYmVsO1xuICAgICAgICB0aGlzLnR4dEltYWdlczM2MExhYmVsID0gdHh0SW1hZ2VzMzYwTGFiZWw7XG4gICAgICAgIHRoaXMudHh0SW1hZ2VzTGFiZWwgPSB0eHRJbWFnZXNMYWJlbDtcbiAgICB9XG5cbiAgICBhc3luYyBvcGVuTG9hZGluZ01vZGFsKCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lNb2RhbCgpO1xuXG4gICAgICAgIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50ID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy4kYm9keS5hZGRDbGFzcygnX2dhbGxlcnlNb2RhbC1vcGVuZWQnKTtcblxuICAgICAgICAvLyBkaXNwbGF5IGxvYWRpbmcgbW9kYWxcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5sb2FkaW5nTW9kYWxUZW1wbGF0ZSkpO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuaGlkZSgpLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19vcGVuaW5nJykuc2hvdygpLnJlbW92ZUNsYXNzKCdfb3BlbmluZycpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRNb2RhbCgpIHtcbiAgICAgICAgLy8gZmV0Y2ggcHJvZHVjdCBkYXRhXG4gICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hQcm9kdWN0KCk7XG5cbiAgICAgICAgY29uc3QgbWFpbkltYWdlID0gdGhpcy5pbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pc0RlZmF1bHQpIHx8IHRoaXMuaW1hZ2VzWzBdO1xuICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB0b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQobWFpbkltYWdlLnVybFRlbXBsYXRlKTtcblxuICAgICAgICBjb25zdCBtYWluSW1hZ2VMaW5rRWxlbWVudCA9IGBcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIiR7bWFpbkltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybD1cIiR7bWFpbkltYWdlLnVybH1cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHttYWluSW1hZ2VTcmNzZXR9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke21haW5JbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICA+PGltZyBjbGFzcz1cImxhenlsb2FkXCIgc3JjPVwiJHttYWluSW1hZ2UudGh1bWJuYWlsVXJsfVwiIGRhdGEtc3Jjc2V0PVwiJHttYWluSW1hZ2VTcmNzZXR9XCIgZGF0YS1zaXplcz1cImF1dG9cIiBhbHQ9XCIke21haW5JbWFnZS5hbHRUZXh0fVwiIC8+PC9hPmA7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuJHNjb3BlLmZpbmQoJy5jYXJkLXRpdGxlJykudGV4dCgpO1xuICAgICAgICBjb25zdCB2aWRlb3NMYWJlbCA9IHRoaXMudHh0VmlkZW9zTGFiZWwgfHwgJ1ZpZGVvcyc7XG4gICAgICAgIGNvbnN0IGltYWdlczM2MExhYmVsID0gdGhpcy50eHRJbWFnZXMzNjBMYWJlbCB8fCAnMzYwIFZpZXcnO1xuICAgICAgICBjb25zdCBpbWFnZXNMYWJlbCA9IHRoaXMudHh0SW1hZ2VzTGFiZWwgfHwgJ1Byb2R1Y3QgSW1hZ2VzJztcblxuICAgICAgICBjb25zdCB2aWRlb3MgPSB0aGlzLnZpZGVvcy5tYXAodmlkZW8gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh2aWRlby51cmwpO1xuICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd2Jyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiBgXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3ZpZGVvLnVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWQ9XCIke3ZpZGVvSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpLyR7dmlkZW9JZH0vZGVmYXVsdC5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIGhyZWY9XCIjaWNvbi1wbGF5LXNvbGlkXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwID0gdGhpcy5pbWFnZXMzNjAubWFwKChpbWFnZVVybCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcihpbWFnZVVybC5zcGxpdCgnIycpWzFdKSB8fCBERUZBVUxUX1NURVA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiBgXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yPVwiJHtzdGVwfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybD1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsPVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VVcmx9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSBocmVmPVwiI2ljb24tMzYwXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5pbWFnZXMubWFwKGltYWdlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlU3Jjc2V0ID0gdG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KGltYWdlLnVybFRlbXBsYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFZpZXctdGh1bWJuYWlsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7aW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsPVwiJHtpbWFnZS51cmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHtpbWFnZVNyY3NldH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsPVwiJHtpbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIHNyYz1cIiR7aW1hZ2UudGh1bWJuYWlsVXJsfVwiIGRhdGEtc3Jjc2V0PVwiJHtpbWFnZVNyY3NldH1cIiBkYXRhLXNpemVzPVwiYXV0b1wiIGFsdD1cIiR7aW1hZ2UuYWx0VGV4dH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0ICRnYWxsZXJ5TW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLm1vZGFsVGVtcGxhdGUsIHtcbiAgICAgICAgICAgIG1haW5JbWFnZUxpbmtFbGVtZW50LFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHZpZGVvc0xhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzMzYwTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXNMYWJlbCxcbiAgICAgICAgICAgIHZpZGVvcyxcbiAgICAgICAgICAgIGltYWdlczM2MCxcbiAgICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIHJlcGxhY2UgbG9hZGluZyBtb2RhbCB3aXRoIHRoZSBhY3R1YWwgbW9kYWxcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmh0bWwoJGdhbGxlcnlNb2RhbC5odG1sKCkpO1xuXG4gICAgICAgIHRoaXMuaW5pdEltYWdlWm9vbSgpO1xuXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGdhbGxlcnlNb2RhbC5nZXQoMCksIHtcbiAgICAgICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBvcGVuTW9kYWwoe1xuICAgICAgICBmaXJzdFZpZGVvID0gZmFsc2UsXG4gICAgICAgIGZpcnN0MzYwID0gZmFsc2UsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMub3BlbkxvYWRpbmdNb2RhbCgpO1xuXG4gICAgICAgIHRoaXMubG9hZE1vZGFsKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmlyc3RWaWRlbykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLmZpcnN0KCkuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1haW5WaWRlbyh2aWRlb0lkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpcnN0MzYwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yXScpLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2V5ZXZhSW1hZ2VHYWxsZXJ5TW9kYWxJdGVtUm90YXRvcicpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlXScpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaFByb2R1Y3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlcyB8fCB0aGlzLnZpZGVvcyB8fCB0aGlzLmltYWdlczM2MCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IFt6b29tV2lkdGgsIHpvb21IZWlnaHRdID0gdGhpcy56b29tU2l6ZS5zcGxpdCgneCcpLm1hcChOdW1iZXIpO1xuICAgICAgICBjb25zdCBbaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHRdID0gdGhpcy5wcm9kdWN0U2l6ZS5zcGxpdCgneCcpLm1hcChOdW1iZXIpO1xuICAgICAgICBjb25zdCBbdGh1bWJXaWR0aCwgdGh1bWJIZWlnaHRdID0gdGhpcy50aHVtYlNpemUuc3BsaXQoJ3gnKS5tYXAoTnVtYmVyKTtcblxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5KFxuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RJZDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR6b29tV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkem9vbUhlaWdodDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbWFnZVdpZHRoOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlSGVpZ2h0OiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHRodW1iV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGh1bWJIZWlnaHQ6IEludCFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0KGVudGl0eUlkOiAkcHJvZHVjdElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCh3aWR0aDogJGltYWdlV2lkdGgsIGhlaWdodDogJGltYWdlSGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxVcmw6IHVybCh3aWR0aDogJHRodW1iV2lkdGgsIGhlaWdodDogJHRodW1iSGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tVXJsOiB1cmwod2lkdGg6ICR6b29tV2lkdGgsIGhlaWdodDogJHpvb21IZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkcyhuYW1lczogW1wiX19AMzYwXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3RJZCxcbiAgICAgICAgICAgICAgICAgICAgem9vbVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICB6b29tSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJIZWlnaHQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuZ3JhcGhRTFRva2VufWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgW2ltYWdlcywgdmlkZW9zLCBpbWFnZXMzNjBdID0gW1xuICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdC5pbWFnZXMuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gbm9kZSksXG4gICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LnZpZGVvcy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiBub2RlKSxcbiAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QuY3VzdG9tRmllbGRzLmVkZ2VzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeyBub2RlIH0pID0+IG5vZGUubmFtZSA9PT0gJ19fQDM2MCcpXG4gICAgICAgICAgICAgICAgLm1hcCgoeyBub2RlIH0pID0+IG5vZGUudmFsdWUpLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e2FsdFRleHQ6IHN0cmluZywgaXNEZWZhdWx0OiBib29sZWFuLCB1cmw/OiBzdHJpbmcsIHRodW1ibmFpbFVybD86IHN0cmluZywgem9vbVVybD86IHN0cmluZywgdXJsVGVtcGxhdGU/OiBzdHJpbmd9Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e3RpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nfT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZpZGVvcyA9IHZpZGVvcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbWFnZXMzNjAgPSBpbWFnZXMzNjA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkgZXh0ZW5kcyBDb3JuZXJzdG9uZUltYWdlR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGdhbGxlcnkpIHtcbiAgICAgICAgc3VwZXIoJGdhbGxlcnkpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeU1vZGFsID0gbmV3IEltYWdlR2FsbGVyeU1vZGFsKHRoaXMsICRnYWxsZXJ5KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBzdXBlci5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5TW9kYWwuYmluZEV2ZW50cygpO1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXHJcbi8vIGltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XHJcbmltcG9ydCBDb3JuZXJzdG9uZVByb2R1Y3REZXRhaWxzIGZyb20gJy4uLy4uL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xyXG5pbXBvcnQgeyBhbGVydE1vZGFsLCBzaG93QWxlcnRNb2RhbCwgTW9kYWxFdmVudHMgfSBmcm9tICcuLi8uLi90aGVtZS9nbG9iYWwvbW9kYWwnO1xyXG5pbXBvcnQgeyBmaXhGb3JtRWxlbWVudFVuaXF1ZUlkcywgY3VycmVuY3lGb3JtYXQgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCBTYWxlQ291bnRkb3duIGZyb20gJy4uL3NhbGUtY291bnRkb3duJztcclxuXHJcbmNvbnN0IERFQlVHX0xPRyA9IGZhbHNlO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplT3B0aW9uU3RyaW5nID0gcyA9PiBzLnJlcGxhY2UoLzovZywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuZnVuY3Rpb24gZXF1YWxPcHRpb25TdHJpbmcoYSwgYikge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZU9wdGlvblN0cmluZyhhKSA9PT0gbm9ybWFsaXplT3B0aW9uU3RyaW5nKGIpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdHdvIGFycmF5cyBhcmUgZXF1YWwgcmVnYXJkbGVzcyBvZiBvcmRlclxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIxXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycjJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBhcmVBcnJheXNFcXVhbFVub3JkZXJlZChhcnIxLCBhcnIyKSB7XHJcbiAgICBjb25zdCBfYXJyMSA9IGFycjEuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICBjb25zdCBfYXJyMiA9IGFycjIuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICByZXR1cm4gX2FycjEubGVuZ3RoID09PSBfYXJyMi5sZW5ndGggJiYgX2FycjEuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IF9hcnIyW2luZGV4XSk7XHJcbn1cclxuXHJcbmxldCBjYWNoZWRTZXR0aW5ncztcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGUgbXVsdGlwbGUgcHJvbWlzZXMgd2l0aCBhIGNvbmN1cnJlbmN5IGxpbWl0IChlLmcuLCBwcm9jZXNzaW5nIG9ubHkgMTAgcHJvbWlzZXMgYXQgYSB0aW1lIG91dCBvZiAxMClcclxuICpcclxuICogQHBhcmFtIHtBcnJheTxGdW5jdGlvbjxUPn0gcHJvbWlzZXMgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIGEgcHJvbWlzZVxyXG4gKiBAcGFyYW0geyp9IGxpbWl0IG51bWJlciBvZiBwcm9taXNlcyB0byBwcm9jZXNzIGF0IGEgdGltZVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTxUPj59IHJlc3VsdHMgb2YgYWxsIHByb21pc2VzXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVQcm9taXNlc1dpdGhMaW1pdChwcm9taXNlcywgbGltaXQgPSAxMCkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgY29uc3QgZXhlY3V0aW5nID0gW107IC8vIFRyYWNrIHRoZSBwcm9taXNlcyBjdXJyZW50bHkgZXhlY3V0aW5nXHJcblxyXG4gICAgZm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XHJcbiAgICAgICAgLy8gU3RhcnQgdGhlIHByb21pc2UgYW5kIGFkZCBpdCB0byB0aGUgZXhlY3V0aW5nIGxpc3RcclxuICAgICAgICBjb25zdCBwID0gcHJvbWlzZSgpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaW5pc2hlZCBwcm9taXNlIGZyb20gZXhlY3V0aW5nIGxpc3RcclxuICAgICAgICAgICAgZXhlY3V0aW5nLnNwbGljZShleGVjdXRpbmcuaW5kZXhPZihwKSwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHApO1xyXG4gICAgICAgIGV4ZWN1dGluZy5wdXNoKHApO1xyXG5cclxuICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgbGltaXQsIHdhaXQgZm9yIHRoZSBmaXJzdCB0byBmaW5pc2hcclxuICAgICAgICBpZiAoZXhlY3V0aW5nLmxlbmd0aCA+PSBsaW1pdCkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJhY2UoZXhlY3V0aW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2FpdCBmb3IgYWxsIHJlbWFpbmluZyBwcm9taXNlcyB0byBjb21wbGV0ZVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIENvcm5lcnN0b25lUHJvZHVjdERldGFpbHMge1xyXG4gICAgbW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1vdmVybGF5XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3ZlcmxheT48L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgbW9kaWZpZXJzTW9kYWxUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jbG9zZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJDbG9zZVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNsb3NlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkNsb3NlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+PHVzZSBocmVmPVwiI2ljb24teG1hcmstbGFyZ2VcIj48L3VzZT48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtYmFjay1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJCYWNrXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5CYWNrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctbGVmdC1sb25nXCI+PC91c2U+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtaGVhZGVyLXRpdGxlXCI+PCUmcHJvZHVjdFRpdGxlJT48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbnRlbnRcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC10aXRsZVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW4gY3VycmVudCBzdGVwJ3MgdGl0bGUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLW9wdGlvbnNcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIG1vZGlmaWVycyAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLXN1bW1hcnlcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIHN1bW1hcnkgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jb21wbGV0ZVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIGFkZCB0byBjYXJ0IGJ1dHRvbiAmIHF0eSBib3ggLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtZm9vdGVyXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY29udGludWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGludWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8JXR4dENvbnRpbnVlJT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1mb290ZXItc3VidG90YWxcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgc3VidG90YWwgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwlI21haW5JbWFnZVVybCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCI8JW1haW5JbWFnZVVybCU+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmNzZXQ9XCI8JW1haW5JbWFnZVNyY3NldCU+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS16b29tLWltYWdlPVwiPCV6b29tSW1hZ2VVcmwlPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2l6ZXM9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYXp5bG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWltZyAvPlxyXG4gICAgICAgICAgICAgICAgPCUvbWFpbkltYWdlVXJsJT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG9wdGlvblRvb2x0aXBUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi10b29sdGlwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXRvb2x0aXAtdHJpZ2dlclwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwiTW9yZSBpbmZvcm1hdGlvblwiIHRpdGxlPVwiTW9yZSBpbmZvcm1hdGlvblwiPmk8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXRvb2x0aXAtYnViYmxlXCI+PCV0b29sdGlwJT48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdmFsdWUtdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLXRyaWdnZXJcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbD1cIk1vcmUgaW5mb3JtYXRpb25cIiB0aXRsZT1cIk1vcmUgaW5mb3JtYXRpb25cIj5pPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLWJ1YmJsZVwiPjwldG9vbHRpcCU+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy12YWx1ZS10b29sdGlwLWhlYWRpbmdcIj48JWhlYWRpbmclPjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25QcmljZVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDwlI3ByZWxvYWRlciU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfcHJlbG9hZGVyXCI+Li4uPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByZWxvYWRlciU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfd2l0aFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utb2xkIF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utbm93IF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlIF93aXRob3V0VGF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1vbGQgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1ub3cgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25QcmljZVBsYWluVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPCUjcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgKDwlcHJpY2VXaXRoVGF4JT4pXHJcbiAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICA8JV5wcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgKDwlcHJpY2VXaXRob3V0VGF4JT4pXHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgIGA7XHJcblxyXG4gICAgc3VidG90YWxUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ncm91cC1sYWJlbFwiPjwldHh0U3VidG90YWwlPjwvZGl2PlxyXG4gICAgICAgICAgICA8JSNwcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3ByZWxvYWRlclwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3dpdGhUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW9sZCBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW5vdyBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aFRheFZhbHVlJT5cIj48JXByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbCBfd2l0aG91dFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtb2xkIF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtbm93IF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgc3VtbWFyeVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPCUjb3B0aW9ucyU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi1uYW1lXCI+PCVuYW1lJT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnMtb3B0aW9uLXZhbHVlXCI+PCV2YWx1ZSU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi1wcmljZXNcIj48JSZwcmljZUh0bWwlPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9vcHRpb25zJT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgc2hvd1ByaWNlRnJlZSA9IGZhbHNlO1xyXG4gICAgc2hvd1ByaWNlWmVybyA9IGZhbHNlO1xyXG5cclxuICAgIGFkZFRvQ2FydFdyYXBwZXJTZWxlY3RvciA9ICcuYWRkLXRvLWNhcnQtd3JhcHBlcic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZSBmb3IgZnVuY3Rpb24gYGZldGNoT3B0aW9uUHJpY2VgXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgeyBwcmljZXNXaXRoVGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9LCBwcmljZXNXaXRob3V0VGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9IH0+fVxyXG4gICAgICovXHJcbiAgICBmZXRjaE9wdGlvblByaWNlQ2FjaGUgPSB7fTtcclxuXHJcbiAgICBjb25zb2xlID0ge1xyXG4gICAgICAgIGxvZzogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgaWYgKERFQlVHX0xPRykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgLi4uYXJncykge1xyXG4gICAgICAgIGZpeEZvcm1FbGVtZW50VW5pcXVlSWRzKCRzY29wZSk7XHJcblxyXG4gICAgICAgIHN1cGVyKCRzY29wZSwgLi4uYXJncyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkY2hvb3NlT3B0aW9uc0J0biA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBOdW1iZXIoJGZvcm0uZmluZCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJykudmFsKCkpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgkZm9ybSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIG1vZGlmaWVycyBtb2RhbCBmZWF0dXJlXHJcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gZW5hYmxlIG1vZGlmaWVycyBtb2RhbCBpZiBvdXIgY2hvb3NlIG9wdGlvbnMgYnV0dG9uIGFwcGVhcnMgaW4gdGhlIHByb2R1Y3QgZGV0YWlsc1xyXG4gICAgICAgIHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwgPSAkY2hvb3NlT3B0aW9uc0J0bi5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpbmRQcm9kdWN0RWRpdEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZFN0aWNreUFkZFRvQ2FydEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZE1vZGFsRGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdE9wdGlvblN0ZXBwZXIoKTtcclxuICAgICAgICB0aGlzLnN5bmNQcm9kdWN0Q2FyZFF0eSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNhbGVDb3VudGRvd24oKTtcclxuICAgICAgICB0aGlzLmJpbmRSZW5ld2luZ0RhdGFQbGFuVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclNwZWNUb29sdGlwcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdElubGluZU9wdGlvblByaWNlSGludHMoKTtcclxuICAgICAgICAkKCdib2R5JykudHJpZ2dlcigndXBkYXRlLXdpc2hsaXN0LWJ1dHRvbnMnLCBbdGhpcy4kc2NvcGVdKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUHJvZHVjdE1ldGFkYXRhKCRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKS5maXJzdCgpKSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VNZXRhZGF0YSA9IHNlbGVjdG9yID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9ICRmb3JtLmZpbmQoc2VsZWN0b3IpLmZpcnN0KCkudGV4dCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIGludmFsaWQgbWV0YWRhdGEgcGF5bG9hZHMuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VzdG9tRmllbGRzID0gcGFyc2VNZXRhZGF0YSgnW2RhdGEtZXlldmEtcHJvZHVjdC1jdXN0b20tZmllbGRzXScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e1xyXG4gICAgICAgICAqICAgaWQ6IG51bWJlcixcclxuICAgICAgICAgKiAgIGRpc3BsYXlfbmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAqICAgc3RhdGU6ICdtb2RpZmllcicgfCAndmFyaWFudF9vcHRpb24nLFxyXG4gICAgICAgICAqICAgcGFydGlhbDogJ3N3YXRjaCcgfCAnc2V0LXJlY3RhbmdsZScgfCAnc2V0LXNlbGVjdCcgfCAnc2V0LXJhZGlvJ1xyXG4gICAgICAgICAqICAgICB8ICdpbnB1dC10ZXh0JyB8ICdpbnB1dC1udW1iZXJzJyB8ICdpbnB1dC1jaGVja2JveCcgfCAnaW5wdXQtZmlsZSdcclxuICAgICAgICAgKiAgICAgfCAnZGF0ZScgfCAndGV4dGFyZWEnIHwgJ3Byb2R1Y3QtbGlzdCcsXHJcbiAgICAgICAgICogICByZXF1aXJlZDogYm9vbGVhbixcclxuICAgICAgICAgKiAgIHByZWZpbGw/OiBzdHJpbmcsXHJcbiAgICAgICAgICogICBzZWxlY3RlZF9kYXRlPzoge1xyXG4gICAgICAgICAqICAgICBkYXk6IHN0cmluZyxcclxuICAgICAgICAgKiAgICAgbW9udGg6IHN0cmluZyxcclxuICAgICAgICAgKiAgICAgeWVhcjogc3RyaW5nXHJcbiAgICAgICAgICogICB9LFxyXG4gICAgICAgICAqICAgY2hlY2tlZD86IGJvb2xlYW4sXHJcbiAgICAgICAgICogICBub1ZhbHVlPzogbnVtYmVyLFxyXG4gICAgICAgICAqICAgdmFsdWU/OiBudW1iZXIsXHJcbiAgICAgICAgICogICB2YWx1ZXM/OiBBcnJheTx7XHJcbiAgICAgICAgICogICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICogICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIHNlbGVjdGVkOiBib29sZWFuLFxyXG4gICAgICAgICAqICAgICBkYXRhOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+XHJcbiAgICAgICAgICogICB9PlxyXG4gICAgICAgICAqIH0+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnMgPSBwYXJzZU1ldGFkYXRhKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbnNdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzLmN1c3RvbUZpZWxkczonLCB0aGlzLmN1c3RvbUZpZWxkcyk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMucHJvZHVjdE9wdGlvbnM6JywgdGhpcy5wcm9kdWN0T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0ICR1cGRhdGVQcm9kdWN0V3JhcHBlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtdXBkYXRlLXByb2R1Y3Qtd3JhcHBlcl0nKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3TW9kZWwoLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gc3VwZXIuZ2V0Vmlld01vZGVsKC4uLmFyZ3MpO1xyXG4gICAgICAgIG1vZGVsLiR1cGRhdGVQcm9kdWN0V3JhcHBlciA9IHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyO1xyXG4gICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSk7XHJcbiAgICAgICAgY29uc3QgJGJ0biA9IHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyLmZpbmQoJ2lucHV0LCBidXR0b24nKTtcclxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xyXG4gICAgICAgICAgICAkYnRuLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGJ0bi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkZSB0aGUgbWV0aG9kIHRvIHN1cHBvcnQgZWRpdCBwcm9kdWN0IGluIGNhcnRcclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxyXG4gICAgICovXHJcbiAgICBhZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmVkaXRQcm9kdWN0SW5DYXJ0KSB7XHJcbiAgICAgICAgICAgICQoZm9ybSkuZmluZCgnaW5wdXRbbmFtZT1cImFjdGlvblwiXScpLnZhbCgnRWRpdFByb2R1Y3RGaWVsZHNJbkNhcnQnKTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0UHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChmb3JtKS5maW5kKCdpbnB1dFtuYW1lPVwiYWN0aW9uXCJdJykudmFsKCdhZGQnKTtcclxuICAgICAgICAgICAgc3VwZXIuYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWRpdCBwcm9kdWN0IGluIGNhcnQuXHJcbiAgICAgKiBBbG1vc3QgY2xvbmUgZnJvbSBhZGRQcm9kdWN0VG9DYXJ0IG1ldGhvZCBmcm9tIHRoZSBwYXJlbnQgY2xhc3MuXHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBlZGl0UHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xyXG4gICAgICAgIGNvbnN0ICRzYXZlQnRuID0gJCgnW2RhdGEtdXBkYXRlLXByb2R1Y3Qtd3JhcHBlcl0nLCAkKGV2ZW50LnRhcmdldCkpLmZpbmQoJ2lucHV0LCBidXR0b24nKTtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRzYXZlQnRuLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJHNhdmVCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcclxuXHJcbiAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcclxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICRzYXZlQnRuXHJcbiAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXHJcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkc2F2ZUJ0bi5uZXh0KCksICdzdGF0dXMnLCAncG9saXRlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJHNhdmVCdG5cclxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXHJcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdENhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZhaWx1cmUgPSAoZXJyb3JUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvclRleHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRzYXZlQnRuKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnRNb2RhbCgpLiRwcmVNb2RhbEZvY3VzZWRFbCA9ICRzYXZlQnRuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RRdWFudGl0eSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBmb3JtRGF0YS5nZXQoJ2l0ZW1faWQnKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3UXR5ID0gZm9ybURhdGEuZ2V0KCdxdHlbXScpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ2FydEl0ZW1RdWFudGl0eShpdGVtSWQsIG5ld1F0eSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbHVyZShlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICB9KS5kb25lKChyZXNwb25zZSkgPT4gc3VjY2VzcyhyZXNwb25zZSkpLmZhaWwoKF94aHIsIF9zdGF0dXMsIGVycm9yKSA9PiBmYWlsdXJlKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FydEl0ZW1RdWFudGl0eShpdGVtSWQsIG5ld1F0eSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlPy5kYXRhPy5zdGF0dXMgIT09ICdzdWNjZWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gY2xpY2sgb24gdGhlIEFkZCBOZXcgdG8gQ2FydCBidXR0b24sIHRyaWdnZXIgdGhlIGZvcm0gc3VibWl0IGV2ZW50IHdpdGggYGFkZE5ld1RvQ2FydGAgZmxhZ1xyXG4gICAgICogc28gdGhhdCBuZXcgcHJvZHVjdCBpcyBhbHdheXMgYWRkZWQgdG8gY2FydCByZWdhcmRsZXNzIG9mIGVkaXQgcHJvZHVjdCBpbiBjYXJ0IG9yIG5vdFxyXG4gICAgICovXHJcbiAgICBiaW5kUHJvZHVjdEVkaXRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0RXZlbnQgPSAkLkV2ZW50KCdzdWJtaXQnLCB7IGVkaXRQcm9kdWN0SW5DYXJ0OiB0cnVlIH0pO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuXHJcbiAgICAgICAgdGhpcy4kdXBkYXRlUHJvZHVjdFdyYXBwZXIuZmluZCgnaW5wdXQsIGJ1dHRvbicpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJGZvcm0udHJpZ2dlcihzdWJtaXRFdmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFN0aWNreUFkZFRvQ2FydEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBoYW5kbGVTdGlja3lBZGRUb0NhcnRDbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoJGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcpIHx8ICRidXR0b24uYXR0cignYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBpZiAoISRmb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkc3RpY2t5UXR5ID0gJGJ1dHRvbi5zaWJsaW5ncygnLnByb2R1Y3RWaWV3LXN0aWNreS1hZGQtdG8tY2FydCcpXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnLm1vYmlsZS1pbmNyZW1lbnQgaW5wdXRbbmFtZT1cInF0eVtdXCJdJylcclxuICAgICAgICAgICAgICAgIC5maXJzdCgpO1xyXG4gICAgICAgICAgICBjb25zdCAkZm9ybVF0eSA9ICRmb3JtLmZpbmQoJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gaW5wdXRbbmFtZT1cInF0eVtdXCJdJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkc3RpY2t5UXR5Lmxlbmd0aCAmJiAkZm9ybVF0eS5sZW5ndGggJiYgJGZvcm1RdHkudmFsKCkgIT09ICRzdGlja3lRdHkudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICRmb3JtUXR5LnZhbCgkc3RpY2t5UXR5LnZhbCgpKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtWzBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0gJiYgIWZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnZhbGlkRmllbGQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJzppbnZhbGlkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGludmFsaWRGaWVsZD8uc2Nyb2xsSW50b1ZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW52YWxpZEZpZWxkPy5mb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm9ybS5yZXBvcnRWYWxpZGl0eSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW52YWxpZEZpZWxkPy5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnI3N0aWNreS1hZGQtdG8tY2FydCcpXHJcbiAgICAgICAgICAgIC5vZmYoJ2NsaWNrLmV5ZXZhU3RpY2t5QWRkVG9DYXJ0JylcclxuICAgICAgICAgICAgLm9uKCdjbGljay5leWV2YVN0aWNreUFkZFRvQ2FydCcsIGhhbmRsZVN0aWNreUFkZFRvQ2FydENsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kTW9kYWxEZXN0cm95KCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgdGhlIGltYWdlIGdhbGxlcnkgbW9kYWwgd2hlbiBxdWljay12aWV3IG1vZGFsIGlzIGNsb3NlZFxyXG4gICAgICAgIC8vIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcclxuICAgICAgICB0aGlzLiRzY29wZS5jbG9zZXN0KCcubW9kYWwnKS5vbmUoTW9kYWxFdmVudHMuY2xvc2VkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LmltYWdlR2FsbGVyeU1vZGFsLmRlc3Ryb3lNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRPcHRpb25TdGVwcGVyKCkge1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLXN0ZXBwZXJdJykuZWFjaCgoX2ksIGZvcm1GaWVsZEVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtRmllbGQgPSAkKGZvcm1GaWVsZEVsKTtcclxuICAgICAgICAgICAgY29uc3QgJGRlYyA9ICRmb3JtRmllbGQuZmluZCgnW2RhdGEtYWN0aW9uPVwiZGVjXCJdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRpbmMgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImluY1wiXScpO1xyXG4gICAgICAgICAgICBjb25zdCAkY2hlY2sgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImNoZWNrXCJdJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLmFkZENsYXNzKCdfY2hlY2tpbmcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkcmFkaW9zID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbzp2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICRyYWRpb3MuZmlsdGVyKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpcnN0ID0gJHJhZGlvcy5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkY2hlY2tlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRyYWRpb3MuaW5kZXgoJGNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBpID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgaSA9PT0gJHJhZGlvcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2suYWRkQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRmaXJzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLnJlbW92ZUNsYXNzKCdfY2hlY2tpbmcnKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IChpbmMpID0+IHtcclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5hZGRDbGFzcygnX2NoZWNraW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86dmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaXJzdCA9ICRyYWRpb3MuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvdW5kIGNoZWNrZWQgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gJHJhZGlvcy5pbmRleCgkY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIG5leHQgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCAkcmFkaW9zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZXEoaSArIDEpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgaSArIDEgPT09ICRyYWRpb3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdCB0aGUgcHJldmlvdXMgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5lcShpIC0gMSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgaSAtIDEgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2suYWRkQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRmaXJzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gY2hlY2tlZCByYWRpbywgYW5kIGZvdW5kIHRoZSBmaXJzdCByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmMgJiYgJGZpcnN0LmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiArIGFuZCBmaXJzdCBvcHRpb24gaXMgJ25vbmUnLCBpZ25vcmUgdGhlIG5vbmUgb3B0aW9uLCBzZWxlY3QgdGhlIGZpcnN0IHZhbHVlZCBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5ub3QoJGZpcnN0KS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsICRyYWRpb3MubGVuZ3RoID09PSAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlLCBzZWxlY3QgdGhlIGZpcnN0IHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRmaXJzdC5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsICRyYWRpb3MubGVuZ3RoID09PSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjaGVja2VkIHJhZGlvIGlzICdub25lJyB0aGVuIHVuY2hlY2sgdGhlIGNoZWNrIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaWYgKCRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86Y2hlY2tlZCcpLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5yZW1vdmVDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykucmVtb3ZlQ2xhc3MoJ19jaGVja2luZycpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJGRlYy5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0KGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkaW5jLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGNoZWNrLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrLmhhc0NsYXNzKCdfY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5jaGVjayB0aGUgY2hlY2tlZCByYWRpbyBhbmQgc2VsZWN0IHRoZSAnbm9uZScgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdW5jaGVjayA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJG5vbmUgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykuZmlsdGVyKCdbdmFsdWU9XCJcIl0sIFt2YWx1ZT1cIjBcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRub25lLmxlbmd0aCA+IDApICRub25lLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCR1bmNoZWNrLmxlbmd0aCkgJHVuY2hlY2sudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLnJlbW92ZUNsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3luYyBwcm9kdWN0IHF1YW50aXR5IHdpdGggcXR5IG9mIHRoZSBjb3JyZXNwb25kaW5nIHByb2R1Y3QgY2FyZFxyXG4gICAgICovXHJcbiAgICBzeW5jUHJvZHVjdENhcmRRdHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdFF1YW50aXR5KSByZXR1cm47IC8vIHN0b3AgaWYgZWRpdCBwcm9kdWN0IGluIGNhcnRcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZFF0eSA9ICQoYFtkYXRhLWNhcmQtcXVhbnRpdHktY2hhbmdlXSBpbnB1dFtuYW1lPVwicXR5XyR7dGhpcy5wcm9kdWN0SWR9XCJdYCkudmFsKCk7XHJcbiAgICAgICAgaWYgKCFjYXJkUXR5KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0ICRxdHkgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGlucHV0W25hbWU9XCJxdHlbXVwiXScpO1xyXG4gICAgICAgIGNvbnN0IHF0eSA9ICRxdHkudmFsKCk7XHJcbiAgICAgICAgaWYgKCRxdHkubGVuZ3RoID4gMCAmJiBxdHkgIT09IGNhcmRRdHkpIHtcclxuICAgICAgICAgICAgJHF0eS52YWwoY2FyZFF0eSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRTYWxlQ291bnRkb3duKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdHh0U2FsZUNvdW50ZG93bkpTT04gfSA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXRlXScpO1xyXG4gICAgICAgICRlbC5kYXRhKCdzYWxlQ291bnRkb3duVHJhbnNsYXRpb25zJywgeyBlbmRfaW46ICRlbC5kYXRhKCdzYWxlQ291bnRkb3duTGFiZWwnKSB9KTtcclxuXHJcbiAgICAgICAgU2FsZUNvdW50ZG93bi5jb25maWd1cmUoeyB0eHRTYWxlQ291bnRkb3duSlNPTiB9KTtcclxuICAgICAgICBTYWxlQ291bnRkb3duLmFkZCgkZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRSZW5ld2luZ0RhdGFQbGFuVmlzaWJpbGl0eSgpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5vZmYoJ2NoYW5nZS5leWV2YVJlbmV3aW5nRGF0YVBsYW4nLCAnW25hbWU9XCJhdHRyaWJ1dGVbMTMzMDNdXCJdJyk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NoYW5nZS5leWV2YVJlbmV3aW5nRGF0YVBsYW4nLCAnW25hbWU9XCJhdHRyaWJ1dGVbMTMzMDNdXCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKS5maXJzdCgpO1xyXG5cclxuICAgICAgICBpZiAoJHByb2R1Y3RPcHRpb25zRWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0ICRyZW5ld2luZ1JhZGlvID0gJHByb2R1Y3RPcHRpb25zRWxcclxuICAgICAgICAgICAgLmZpbmQoJ1tuYW1lPVwiYXR0cmlidXRlWzEzMzAzXVwiXVt2YWx1ZT1cIjE2OThcIl0nKVxyXG4gICAgICAgICAgICAuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKCRyZW5ld2luZ1JhZGlvLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzaG91bGRIaWRlRmllbGRzID0gJHJlbmV3aW5nUmFkaW8uaXMoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgY29uc3QgZmllbGRJZHMgPSBbMTMzMDQsIDEzMzA1LCAxMzMwNl07XHJcblxyXG4gICAgICAgIGZpZWxkSWRzLmZvckVhY2goZmllbGRJZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtmaWVsZElkfVwiXWApLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGlmICgkZmllbGQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzaG91bGRIaWRlRmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVIaWRkZW5Nb2RpZmllckZpZWxkKCRmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAkZmllbGQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLWVycm9yJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZVNob3duTW9kaWZpZXJGaWVsZCgkZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgJGZpZWxkLmNzcygnZGlzcGxheScsICcnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUhpZGRlbk1vZGlmaWVyRmllbGQoJGZpZWxkKSB7XHJcbiAgICAgICAgJGZpZWxkLmZpbmQoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSksIHNlbGVjdCwgdGV4dGFyZWEnKS5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRlbC5pcygnW2RhdGEtZXlldmEtb3JpZ2luYWwtcmVxdWlyZWRdJykpIHtcclxuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdkYXRhLWV5ZXZhLW9yaWdpbmFsLXJlcXVpcmVkJywgJGVsLnByb3AoJ3JlcXVpcmVkJykgPyAndHJ1ZScgOiAnZmFsc2UnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGVsLnByb3AoJ3JlcXVpcmVkJywgZmFsc2UpLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJGVsLmlzKCc6Y2hlY2tib3gsIDpyYWRpbycpKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgkZWwuaXMoJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwucHJvcCgnc2VsZWN0ZWRJbmRleCcsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGVsLnZhbCgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVTaG93bk1vZGlmaWVyRmllbGQoJGZpZWxkKSB7XHJcbiAgICAgICAgJGZpZWxkLmZpbmQoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSksIHNlbGVjdCwgdGV4dGFyZWEnKS5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVxdWlyZWQgPSAkZWwuYXR0cignZGF0YS1leWV2YS1vcmlnaW5hbC1yZXF1aXJlZCcpID09PSAndHJ1ZSc7XHJcblxyXG4gICAgICAgICAgICAkZWwucHJvcCgncmVxdWlyZWQnLCBvcmlnaW5hbFJlcXVpcmVkKTtcclxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdyZXF1aXJlZCcsICcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRlbC5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyhkYXRhLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlVmlldyhkYXRhLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQcm9kdWN0TWV0YWRhdGEoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcklubGluZU9wdGlvblRvb2x0aXBzKCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU2FsZVBlcmNlbnQoZGF0YSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGlwcGluZ0NvdW50ZG93bihkYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgIWRhdGE/LnB1cmNoYXNhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub25lU2FsZXMgPSB0aGlzLmN1c3RvbUZpZWxkTm9uZVNhbGVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzU3VidG90YWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2FsZVBlcmNlbnQoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0ICRkaXYgPSB0aGlzLiRzY29wZS5maW5kKCcucHJpY2Utc2VjdGlvbi0tc2FsZVBlcmNlbnQnKTtcclxuICAgICAgICBjb25zdCAkc3BhbiA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2FsZS1wZXJjZW50XScpO1xyXG4gICAgICAgIGxldCBzYWxlUGVyY2VudCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChkYXRhPy5wcmljZT8ud2l0aG91dF90YXg/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5wcmljZT8ucnJwX3dpdGhvdXRfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWUgLyBkYXRhLnByaWNlLnJycF93aXRob3V0X3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheD8udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhPy5wcmljZT8ud2l0aF90YXg/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5wcmljZT8ucnJwX3dpdGhfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUgLyBkYXRhLnByaWNlLnJycF93aXRoX3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy5ub25fc2FsZV9wcmljZV93aXRoX3RheD8udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2FsZVBlcmNlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICRzcGFuLnRleHQoYC0ke3NhbGVQZXJjZW50fSVgKTtcclxuICAgICAgICAgICAgJGRpdi5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNwYW4udGV4dCgnJyk7XHJcbiAgICAgICAgICAgICRkaXYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTaGlwcGluZ0NvdW50ZG93bihkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJHNoaXBwaW5nQ291bnRkb3duID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcGFwYXRoZW1lcy1zaGlwcGluZy1jb3VudGRvd25dJyk7XHJcblxyXG4gICAgICAgIGlmICgkc2hpcHBpbmdDb3VudGRvd24uaXMoJzpoaWRkZW4nKSAmJiBkYXRhPy5wdXJjaGFzYWJsZSkge1xyXG4gICAgICAgICAgICAkc2hpcHBpbmdDb3VudGRvd24uY3NzKCdzdHlsZScsICdmbGV4Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2hpcHBpbmdDb3VudGRvd24uaXMoJzp2aXNpYmxlJykgJiYgIWRhdGE/LnB1cmNoYXNhYmxlKSB7XHJcbiAgICAgICAgICAgICRzaGlwcGluZ0NvdW50ZG93bi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnRDb250ZW50KC4uLmFyZ3MpIHtcclxuICAgICAgICAvLyBjbG9zZSBtb2RpZmllcnMgbW9kYWwgYWZ0ZXIgYWRkZWQgcHJvZHVjdCB0byBjYXJ0XHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJHByZU1vZGFsRm9jdXNlZEVsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIudXBkYXRlQ2FydENvbnRlbnQoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSwgLi4uYXJncykge1xyXG4gICAgICAgIHN1cGVyLnNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UsIC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxJbWcgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtaW1nXScpO1xyXG4gICAgICAgIGNvbnN0IHsgbWFpbkltYWdlVXJsLCB6b29tSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCB9ID0gdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlO1xyXG5cclxuICAgICAgICBpZiAobWFpbkltYWdlVXJsICYmIG1haW5JbWFnZVVybCAhPT0gJG1vZGlmaWVyc01vZGFsSW1nLmF0dHIoJ3NyYycpKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEltZ1xyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBtYWluIGltYWdlIGluIHF1aWNrLXZpZXcgb24gbW9iaWxlXHJcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBlbCkgPT4gJChlbCkuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeV0nKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIG1haW5JbWFnZVNyY3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IHByaWNlIHdpdGggY3VycmVuY3kgc3ltYm9sIGFuZCBkZWNpbWFsIHBsYWNlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwbHVzU3ltYm9sIHdoZXRoZXIgdG8gc2hvdyBwbHVzIHN5bWJvbCBmb3IgcG9zaXRpdmUgdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGZvcm1hdFByaWNlKHZhbHVlLCBwbHVzU3ltYm9sID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBkaXNwbGF5ID0gY2FjaGVkU2V0dGluZ3MgPyB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5X3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LnN5bWJvbCxcclxuICAgICAgICAgICAgY3VycmVuY3lfbG9jYXRpb246IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuc3ltYm9sUGxhY2VtZW50LFxyXG4gICAgICAgICAgICBkZWNpbWFsX3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LmRlY2ltYWxUb2tlbixcclxuICAgICAgICAgICAgZGVjaW1hbF9wbGFjZXM6IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuZGVjaW1hbFBsYWNlcyxcclxuICAgICAgICAgICAgdGhvdXNhbmRzX3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LnRob3VzYW5kc1Rva2VuLFxyXG4gICAgICAgIH0gOiB7fTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBjdXJyZW5jeUZvcm1hdCgtdmFsdWUsIGRpc3BsYXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGx1c1N5bWJvbCA/IGAtJHtmb3JtYXR0ZWR9YCA6IGZvcm1hdHRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGN1cnJlbmN5Rm9ybWF0KHZhbHVlLCBkaXNwbGF5KTtcclxuICAgICAgICByZXR1cm4gcGx1c1N5bWJvbCA/IGArJHtmb3JtYXR0ZWR9YCA6IGZvcm1hdHRlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmQgb3B0aW9uIHZhbHVlIGJ5IG9wdGlvbiBuYW1lIGFuZCB2YWx1ZSBuYW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgb3B0aW9uIGRpc3BsYXkgbmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlTmFtZSB2YWx1ZSBsYWJlbFxyXG4gICAgICogQHJldHVybnMge1tudW1iZXIsIG51bWJlcl19IG9wdGlvbklkLCB2YWx1ZUlkXHJcbiAgICAgKi9cclxuICAgIGZpbmRPcHRpb25WYWx1ZShvcHRpb25OYW1lLCB2YWx1ZU5hbWUpIHtcclxuICAgICAgICBjb25zdCBoaWRlSWZPcHRpb24gPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgZGlzcGxheV9uYW1lIH0pID0+IGRpc3BsYXlfbmFtZS5yZXBsYWNlKCcvOjsvZycsICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGhpZGVJZk9wdGlvbj8udmFsdWVzPy5maW5kKCh7IGxhYmVsIH0pID0+IGxhYmVsLnJlcGxhY2UoJy86Oy9nJywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZU5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uSWQgPSBoaWRlSWZPcHRpb24/LmlkO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZT8uaWQ7XHJcbiAgICAgICAgcmV0dXJuIFtvcHRpb25JZCwgdmFsdWVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1tYWluXScpLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpO1xyXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKS5hdHRyKCdkYXRhLXNyY3NldCcpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkYXR0cmlidXRlTWVzc2FnZVdyYXBwZXIgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LWF0dHJpYnV0ZXMtbWVzc2FnZV0nKTtcclxuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0V3JhcHBlciA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLWFkZC10by1jYXJ0LXdyYXBwZXJdJyk7XHJcbiAgICAgICAgY29uc3QgJGNob29zZU9wdGlvbnNCdG4gPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kaWZpZXJzTW9kYWxUZW1wbGF0ZSwge1xyXG4gICAgICAgICAgICB0eHRDb250aW51ZTogdGhpcy5jb250ZXh0LnR4dENvbnRpbnVlLFxyXG4gICAgICAgICAgICBwcm9kdWN0VGl0bGU6IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtdGl0bGVdJykuaHRtbCgpLFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VVcmw6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwgfHwgbWFpbkltYWdlVXJsLFxyXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwgfHwgem9vbUltYWdlVXJsLFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VTcmNzZXQgfHwgbWFpbkltYWdlU3Jjc2V0LFxyXG4gICAgICAgIH0sIG51bGwsIFsnPCUnLCAnJT4nXSkpLmFwcGVuZFRvKCRwcm9kdWN0T3B0aW9uc0VsKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENvbXBsZXRlID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDbG9zZSA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY2xvc2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ29udGludWUgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEJhY2sgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2tdJyk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgbW9kaWZpZXIgb3B0aW9ucyB0byB0aGUgbW9kYWxcclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1zdGF0ZT1cIm1vZGlmaWVyXCJdJykuYXBwZW5kVG8oJG1vZGlmaWVyc01vZGFsT3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgYWRkIHRvIGNhcnQgJiBxdHkgYm94IHRvIHRoZSBtb2RhbFxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENvbXBsZXRlLmFwcGVuZCgkYWRkVG9DYXJ0V3JhcHBlcik7XHJcblxyXG4gICAgICAgIC8vIGNsb25lIHB1cmNoYXNhYmxlIG1lc3NhZ2VcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5maW5kKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpLmNsb25lKClcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlcik7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENsb3NlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2sub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFja1N0ZXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29udGludWUub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBhbmQgcmVwb3J0IGludmFsaWQgaW5wdXRzIGlmIGFueVxyXG4gICAgICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5zbGljZSgtMSlbMF0gfHwgW107XHJcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRJbnB1dHMgPSBzaG93T3B0aW9uSWRzLnJlZHVjZSgoX2ludmFsaWRJbnB1dHMsIG9wdGlvbklkKSA9PiAoW1xyXG4gICAgICAgICAgICAgICAgLi4uX2ludmFsaWRJbnB1dHMsXHJcbiAgICAgICAgICAgICAgICAuLi4kbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW2RheV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVttb250aF1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVt5ZWFyXVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihlbCA9PiAhZWwuY2hlY2tWYWxpZGl0eSgpKSxcclxuICAgICAgICAgICAgXSksIFtdKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnZhbGlkSW5wdXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnZhbGlkSW5wdXRzWzBdLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGF1dG8gc2VsZWN0IHRoZSAnbm9uZScgb3B0aW9uIGlmIG5vIHJhZGlvIG9wdGlvbiBvciBubyBwcm9kdWN0IHBpY2sgbGlzdCBvcHRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgc2hvd09wdGlvbklkcy5mb3JFYWNoKG9wdGlvbklkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVwiXWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRyYWRpb3MubGVuZ3RoID4gMCAmJiAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFmdGVyIGNsaWNraW5nIGNvbnRpbnVlIGJ1dHRvbiwgdXBkYXRlIHRoZSBtb2RpZmllcnMgdmlldyBhdXRvbWF0aWNhbGx5XHJcbiAgICAgICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGNob29zZU9wdGlvbnNCdG4ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVxdWlyZSBzZWxlY3RpbmcgdmFyaWFudCBvcHRpb25zIGJlZm9yZSBvcGVuaW5nIHRoZSBtb2RhbFxyXG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVZhcmlhbnRPcHRpb25zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsXScpLmFkZENsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgLmJlZm9yZSh0aGlzLm1vZGlmaWVyc01vZGFsT3ZlcmxheVRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGlmaWVyc01vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vdmVybGF5XScpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2RpZmllcnNWaWV3KCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxyXG4gICAgICAgICAgICAubm90KCdbdHlwZT1cImNoZWNrYm94XCJdLCBbdHlwZT1cInJhZGlvXCJdLCBbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS52YWwoJycpO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcclxuICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gZmxhZyBhbnkgaW5wdXQvc2VsZWN0IGlzIG5vdCBzaG93biB5ZXQgc28gdGhhdCB0aGUgY29udGludWUgYnV0dG9uIGlzIHNob3duXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5yZW1vdmVBdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IG1vZGFsIHRvIHVwZGF0ZSB0aGlzIHZpZXcgYXV0b21hdGljYWxseSB3aGVuIG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb250YWlucyBhbGwgb3B0aW9uIGlkcyB0aGF0IGFyZSBzaG93biBpbiBlYWNoIHN0ZXBcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW11bXX1cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyByZXNldCB0aGUgc2hvd24gb3B0aW9uIGlkcyBpbiBhbGwgc3RlcHNcclxuICAgICAgICB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE5vbi1zYWxlIHByaWNlcyBmb3Igb3B0aW9uIHZhbHVlcy5cclxuICAgICAgICAgKiBQdWxsaW5nIGZyb20gY3VzdG9tIGZpZWxkcyBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYC5cclxuICAgICAgICAgKiBQb3B1bGF0ZWQgaW4gYHVwZGF0ZU1vZGlmaWVyc1ZpZXcoKWAuXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfSB9fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIG1vZGlmaWVycyBtb2RhbCBhc2FwIHNvIHRoYXQgbm90IGFsbCBvcHRpb25zIGFyZSBkaXNwbGF5ZWRcclxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVNb2RpZmllcnNWaWV3KHsgaWdub3JlQVBJQ2FsbCA9IGZhbHNlIH0gPSB7fSkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxCYWNrID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2tdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1bW1hcnkgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtc3VtbWFyeV0nKS5lbXB0eSgpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFRpdGxlID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXRpdGxlXScpLmVtcHR5KCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsRm9vdGVyID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlcl0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250aW51ZV0nKS5oaWRlKCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VidG90YWwgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsXScpO1xyXG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRXcmFwcGVyID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtYWRkLXRvLWNhcnQtd3JhcHBlcl0nKS5oaWRlKCk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZvcm1EYXRhOiAnLCBBcnJheS5mcm9tKGZvcm1EYXRhLmVudHJpZXMoKSkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdXJyZW50IG9wdGlvbiBpZCB0aGF0IGFwcGVhcnMgYWxvbmUgd2l0aG91dCBhbnkgZ3JvdXAuXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRPcHRpb25JZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3VycmVudCBncm91cCBuYW1lIHRoYXQgdGhlIG9wdGlvbiBiZWxvbmdzIHRvLlxyXG4gICAgICAgICAqIEdyb3VwIG5hbWUgdGhhdCBhcHBlYXJzIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYFxyXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBjdXJyZW50R3JvdXBOYW1lO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcHRpb24gaWRzIG9mIG9wdGlvbiBuYW1lcyBhcHBlYXIgaW4gdGhlIHZhbHVlIG9mIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgLlxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogICBDdXN0b20gZmllbGQ6IGBfX0Bncm91cCBTZWxlY3QgYSBwcmVzY3JpcHRpb24gdHlwZWAgPSBgcHJlc2NyaXB0aW9uIHR5cGVgXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRHcm91cE9wdGlvbklkcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBvcHRpb24gaWRzIHNob3VsZCBiZSBoaWRkZW5cclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgaGlkZU9wdGlvbklkcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e29wdGlvbklkOiBudW1iZXIsIHZhbHVlSWQ6IG51bWJlcn0+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGhpZGVPcHRpb25WYWx1ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVG9vbHRpcHMgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwYFxyXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3Q8bnVtYmVyLCB7IHRvb2x0aXA6IHN0cmluZywgdmFsdWVUb29sdGlwczogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfT5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB0b29sdGlwcyA9IHt9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUb29sdGlwIGhlYWRpbmdzIGZvciBvcHRpb24gdmFsdWVzIGV4dHJhY3RlZCBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfX1cclxuICAgICAgICAgKiBAZXhhbXBsZSB7IDI6IHsgMTIzOiAnVG9vbHRpcCBIZWFkaW5nJyB9IH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB0b29sdGlwSGVhZGluZ3MgPSB7fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTm9uLXNhbGUgcHJpY2VzIGZvciBvcHRpb24gdmFsdWVzLlxyXG4gICAgICAgICAqIENhbiBiZSBvdmVycmlkZGVuIGJ5IGN1c3RvbSBmaWVsZHMgYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWBcclxuICAgICAgICAgKiBAdHlwZSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9IH19XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgbm9uZVNhbGVzID0ge307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9wdGlvbiByZW5hbWVzIGV4dHJhY3RlZCBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogc3RyaW5nIH19XHJcbiAgICAgICAgICogQGV4YW1wbGUgeyAxMjM6ICdOZXcgTmFtZScsIDQ1NjogJ0Fub3RoZXIgTmFtZScgfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IG9wdGlvblJlbmFtZXMgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgc3RhdGUgfSkgPT4gc3RhdGUgPT09ICdtb2RpZmllcicpLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnJWNQcm9kdWN0RGV0YWlscyAtIG9wdGlvbjogJywgJ2NvbG9yOiBjeWFuJywgb3B0aW9uLmRpc3BsYXlfbmFtZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGlkZU9wdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEZpcnN0IGdyb3VwIG5hbWUgdGhhdCB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8uXHJcbiAgICAgICAgICAgICAqIEdyb3VwIG5hbWUgdGhhdCBhcHBlYXJzIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxldCBncm91cE5hbWU7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT3B0aW9uIGlkcyBvZiBvcHRpb24gbmFtZXMgYXBwZWFyIGluIHRoZSB2YWx1ZSBvZiBjdXN0b20gZmllbGQgYF9fQGdyb3VwYC5cclxuICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICogICBDdXN0b20gZmllbGQ6IGBfX0Bncm91cCBTZWxlY3QgYSBwcmVzY3JpcHRpb24gdHlwZWAgPSBgcHJlc2NyaXB0aW9uIHR5cGVgXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxldCBncm91cE9wdGlvbklkcztcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIHJhZGlvIHR5cGUgYW5kIGhhcyAnbm9uZScgdmFsdWUgY2hlY2tlZFxyXG4gICAgICAgICAgICBjb25zdCBpc05vbmVSYWRpb0NoZWNrZWQgPSAkZm9ybS5maW5kKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdW3ZhbHVlPVwiXCJdYCkucHJvcCgnY2hlY2tlZCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgZmlsZSB0eXBlIGFuZCBhbHJlYWR5IHNob3duIGFmdGVyIG1vZGFsIHNob3duXHJcbiAgICAgICAgICAgIGNvbnN0ICRmaWxlID0gJGZvcm0uZmluZChgaW5wdXRbdHlwZT1cImZpbGVcIl1bbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRmlsZVNob3duID0gJGZpbGUubGVuZ3RoID4gMCAmJiAkZmlsZS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCBkYXRlIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJGRhdGUgPSAkZm9ybS5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dW2RheV1cIl0sIHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bbW9udGhdXCJdLCBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdXCJdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT3B0aW9uYWxEYXRlU2hvd24gPSAkZGF0ZS5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJGRhdGUuYXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgb3B0aW9uYWwgc2VsZWN0IHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRmb3JtLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbFNlbGVjdFNob3duID0gJHNlbGVjdC5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJHNlbGVjdC5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCB0ZXh0IC8gbXVsdGlsaW5lIC8gbnVtYmVyIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJHRleHQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgdGV4dGFyZWEnKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbFRleHRTaG93biA9ICR0ZXh0Lmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkdGV4dC5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybVZhbHVlICYmICEoZm9ybVZhbHVlIGluc3RhbmNlb2YgRmlsZSlcclxuICAgICAgICAgICAgICAgIHx8IGlzTm9uZVJhZGlvQ2hlY2tlZCB8fCBpc0ZpbGVTaG93biB8fCBpc09wdGlvbmFsRGF0ZVNob3duIHx8IGlzT3B0aW9uYWxTZWxlY3RTaG93biB8fCBpc09wdGlvbmFsVGV4dFNob3duXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW2RheV1gKVxyXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1gKVxyXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVt5ZWFyXWApKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWRlIG9wdGlvbiBpZiB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvbjogJywgaGlkZU9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AaGlkZV9pZiAoLiopXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlkZUlmTWF0Y2ggPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYoeyBjdXN0b21GaWVsZCwgZm9ybURhdGEsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGlkZUlmTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvbiA9IGhpZGVJZk1hdGNoLmhpZGVPcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb25WYWx1ZXMucHVzaCguLi5oaWRlSWZNYXRjaC5oaWRlT3B0aW9uVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JvdXBOYW1lICYmICFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQGdyb3VwICguKilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaEdyb3VwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZSA9IGdyb3VwTWF0Y2guZ3JvdXBOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBPcHRpb25JZHMgPSBncm91cE1hdGNoLmdyb3VwT3B0aW9uSWRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXBNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHRvb2x0aXBNYXRjaC50b29sdGlwIHx8IHRvb2x0aXBzW29wdGlvbi5pZF0/LnRvb2x0aXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwczogT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udmFsdWVUb29sdGlwcywgdG9vbHRpcE1hdGNoLnZhbHVlVG9vbHRpcHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcEhlYWRpbmdzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcEhlYWRpbmcoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcEhlYWRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdLCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoUmVuYW1lKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblJlbmFtZXNbb3B0aW9uLmlkXSA9IG5ld05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZU5vblNhbGVzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoTm9uU2FsZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obm9uZVNhbGVzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uLmlkXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5vbmVTYWxlc1tvcHRpb24uaWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlTm9uU2FsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA9PT0gMCAmJiAhY3VycmVudE9wdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gdmlzaWJsZSBvcHRpb24gYmVmb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb24gZ3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwTmFtZSA9IGdyb3VwTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gZ3JvdXBPcHRpb25JZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwTmFtZTogJHtjdXJyZW50R3JvdXBOYW1lfSwgY3VycmVudEdyb3VwT3B0aW9uSWRzOiAke2N1cnJlbnRHcm91cE9wdGlvbklkc31gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFuZC1hbG9uZSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRPcHRpb25JZDogJHtjdXJyZW50T3B0aW9uSWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaGlkZU9wdGlvbklkcy5wdXNoKG9wdGlvbi5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPiAwICYmIGhpZGVPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgaGlkZGVuIG9wdGlvbnMgZnJvbSB0aGUgY3VycmVudCBncm91cFxyXG4gICAgICAgICAgICBjdXJyZW50R3JvdXBPcHRpb25JZHMgPSBjdXJyZW50R3JvdXBPcHRpb25JZHMuZmlsdGVyKGlkID0+ICFoaWRlT3B0aW9uSWRzLmluY2x1ZGVzKGlkKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwT3B0aW9uSWRzOiAke2N1cnJlbnRHcm91cE9wdGlvbklkc31gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudE9wdGlvbklkOiAnLCBjdXJyZW50T3B0aW9uSWQpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwTmFtZTogJywgY3VycmVudEdyb3VwTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICcsIGN1cnJlbnRHcm91cE9wdGlvbklkcyk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uVmFsdWVzOiAnLCBoaWRlT3B0aW9uVmFsdWVzKTtcclxuXHJcbiAgICAgICAgLy8gU3RvcmUgbm9uLXNhbGUgcHJpY2VzIG9mIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICAvLyB0byB1c2Ugd2hlbiB1cGRhdGluZyBvcHRpb24gcHJpY2VzIG9ubHkgd2l0aG91dCB1cGRhdGUgdGhlIHdob2xlIG1vZGlmaWVycyB2aWV3XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmN1c3RvbUZpZWxkTm9uZVNhbGVzLCBub25lU2FsZXMpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJRHMgb2Ygb3B0aW9ucyB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgYXQgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxyXG4gICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSBjdXJyZW50R3JvdXBPcHRpb25JZHMubGVuZ3RoID4gMCA/IGN1cnJlbnRHcm91cE9wdGlvbklkc1xyXG4gICAgICAgICAgICA6IChjdXJyZW50T3B0aW9uSWQgPyBbY3VycmVudE9wdGlvbklkXSA6IFtdKTtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHNob3duIG9wdGlvbiBpZHMgb2YgdGhlIGN1cnJlbnQgc3RlcCB0byB0aGUgc3RhY2tcclxuICAgICAgICAvLyBpZiBub3QgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzIHN0ZXAuXHJcbiAgICAgICAgLy8gdGhpcyBpcyB1c2VkIHRvIG5hdmlnYXRlIGJhY2sgdG8gdGhlIHByZXZpb3VzIHN0ZXAuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgIHx8ICFhcmVBcnJheXNFcXVhbFVub3JkZXJlZCh0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXSwgc2hvd09wdGlvbklkcykpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5wdXNoKHNob3dPcHRpb25JZHMpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIHN0YWNrZWRTaG93T3B0aW9uSWRzOiAnLCB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgLyBoaWRlIGJhY2sgYnV0dG9uXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxCYWNrLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxCYWNrLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgZm9vdGVyLCBhbmQgaGlkZSBpdCBpZiBubyBtb3JlIG9wdGlvbiBzaG93blxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsRm9vdGVyLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxGb290ZXIuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBtb2RhbCB0aXRsZSBmcm9tIHRoZSBjdXN0b20gZmllbGQgYF9fQGdyb3VwIChncm91cCBuYW1lKWAgb3Igb3B0aW9uIGRpc3BsYXkgbmFtZVxyXG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmh0bWwoY3VycmVudEdyb3VwTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IG9wdGlvblJlbmFtZXNbc2hvd09wdGlvbklkc1swXV0gfHwgdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBzaG93T3B0aW9uSWRzWzBdKT8uZGlzcGxheV9uYW1lO1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS50ZXh0KHRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhpZGUgdGhlIG9wdGlvbiBuYW1lIHdoZW4gaGVyZSBpcyBvbmx5IDEgb3B0aW9uIHNob3duIGluIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7c2hvd09wdGlvbklkc1swXX1cIl0gLmZvcm0tbGFiZWxgKS5maXJzdCgpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkXSAuZm9ybS1sYWJlbCcpLmZpcnN0KCkuc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBjdXJyZW50IHByb2R1Y3Qgb3B0aW9uc1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdfc2hvdycpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKF8sIGVsKSA9PiAhc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIoJChlbCkuZGF0YSgncHJvZHVjdC1hdHRyaWJ1dGUtaWQnKSkpKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ19zaG93Jyk7XHJcblxyXG4gICAgICAgIC8vIFJlbmFtZSB0aGUgc2hvd24gb3B0aW9ucyBpZiBuZWVkZWRcclxuICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gb3B0aW9uUmVuYW1lc1tvcHRpb25JZF07XHJcbiAgICAgICAgICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl0gLmZvcm0tbGFiZWxgKS5maXJzdCgpLmh0bWwobmV3TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0b29sdGlwIGZvciBncm91cFxyXG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBncm91cFRvb2x0aXAgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tRmllbGRzLmZvckVhY2goY3VzdG9tRmllbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncm91cFRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cFRvb2x0aXAgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAoeyBjdXN0b21GaWVsZCwgZ3JvdXBOYW1lOiBjdXJyZW50R3JvdXBOYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncm91cFRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIGdyb3VwVG9vbHRpcCkpO1xyXG4gICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2hvdyB0b29sdGlwIGZvciBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25Ub29sdGlwcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncywgc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyBmb3Igc2hvd24gb3B0aW9ucyBhbmQgZGlzcGxheSBDb250aW51ZSBidXR0b24gaWYgbmVlZGVkLlxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMoc2hvd09wdGlvbklkcywgJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsQ29udGludWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBwcmljZXMgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICBpZiAoIWlnbm9yZUFQSUNhbGwpIHtcclxuICAgICAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlcigkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93IHN1bW1hcnkgYnV0IHByZWxvYWRlciBmb3IgcHJpY2VzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zaG93T3B0aW9uUHJpY2VzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzLCBmb3JtRGF0YSwgbm9uZVNhbGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNob3cgc3VtbWFyeSBjb250ZW50IGlmIG5vIG9wdGlvbiB2aXNpYmxlIG9uIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93U3VtbWFyeSgkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5LCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgJG1vZGlmaWVyc01vZGFsVGl0bGUsICRhZGRUb0NhcnRXcmFwcGVyLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgcmVxdWlyZWQgdmFyaWFudCBvcHRpb25zIGFuZCByZXBvcnQgZXJyb3IgZm9yIHRoZSBmaXJzdCBpbnZhbGlkIG9wdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGVWYXJpYW50T3B0aW9ucygpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnZhbGlkID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgc3RhdGUgfSkgPT4gc3RhdGUgPT09ICd2YXJpYW50X29wdGlvbicpLmZpbmQob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBSZXF1aXJlZCBvcHRpb24gXCIke29wdGlvbi5kaXNwbGF5X25hbWV9XCIgaXMgbm90IHNlbGVjdGVkYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaW52YWxpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9ICRmb3JtLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7aW52YWxpZC5pZH1dXCJdYClbMF07XHJcbiAgICAgICAgICAgIGVsLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFja1N0ZXAoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IFtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5wb3AoKSwgLy8gY3VycmVudCBzdGVwJ3Mgc2hvd24gb3B0aW9uIGlkc1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnBvcCgpLCAvLyBwcmV2aW91cyBzdGVwJ3Mgc2hvd24gb3B0aW9uIGlkc1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IHZhbHVlcyBvZiBzaG93biBvcHRpb24gaWRzIGluIGN1cnJlbnQgc3RlcCAmIHByZXZpb3VzIHN0ZXBcclxuICAgICAgICAvLyB0byBkaXNwbGF5IHByZXZpb3VzIHN0ZXAgYWdhaW4uXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBlbCkgPT4gc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIoJChlbCkuYXR0cignZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSkpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXHJcbiAgICAgICAgICAgICAgICAubm90KCdbdHlwZT1cImNoZWNrYm94XCJdLCBbdHlwZT1cInJhZGlvXCJdLCBbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykudmFsKCcnKTtcclxuXHJcbiAgICAgICAgICAgICRvcHRpb24uZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICRvcHRpb24uZmluZCgnW25hbWVePVwiYXR0cmlidXRlXCJdJykucmVtb3ZlQXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBpbW1lZGlhdGVseSB1cGRhdGUgZGlzcGxheSBwcmV2aW91cyBvcHRpb25zIG9uIG1vZGlmaWVycyBtb2RhbFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBjaGFuZ2UgZXZlbnQgdG8gdXBkYXRlIHByaWNlcyAmIGRhdGEgYmVsb25ncyB0byBCQ1xyXG4gICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHNob3VsZCBiZSBoaWRkZW4gYmFzZWQgb24gdGhlIGN1c3RvbSBmaWVsZCBgX19AaGlkZV9pZmBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZm9ybURhdGE6IEZvcm1EYXRhLFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBpZDogTnVtYmVyLFxyXG4gICAgICogICAgIGRpc3BsYXlfbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlczogW3tcclxuICAgICAqICAgICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICogICAgIH1dXHJcbiAgICAgKiAgIH1cclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgaGlkZU9wdGlvbjogYm9vbGVhbiwgaGlkZU9wdGlvblZhbHVlczogQXJyYXk8e29wdGlvbklkOiBudW1iZXIsIHZhbHVlSWQ6IG51bWJlcn0+IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYoeyBjdXN0b21GaWVsZCwgZm9ybURhdGEsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXN0b21GaWVsZE1hdGNoSGlkZUlmOiBjZl9uYW1lID0gJHtjdXN0b21GaWVsZC5uYW1lfSA7IG9wX25hbWUgPSAke29wdGlvbi5kaXNwbGF5X25hbWV9YCk7XHJcbiAgICAgICAgbGV0IGhpZGVPcHRpb24gPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBoaWRlT3B0aW9uVmFsdWVzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AaGlkZV9pZlxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAoIW0pIHJldHVybjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBoaWRlSWZPcHRpb25zID0gbVsxXS5zcGxpdCgnOycpLm1hcChrdiA9PiBrdi5zcGxpdCgnOicsIDIpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcclxuICAgICAgICAgICAgbmFtZToga2V5LnRyaW0oKSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUudHJpbSgpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGhpZGVJZk9wdGlvbnM6ICR7aGlkZUlmT3B0aW9ucy5tYXAoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKHZhbHVlID8gYCR7bmFtZX06ICR7dmFsdWV9YCA6IG5hbWUpKS5qb2luKCc7ICcpfWApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRoZW5PcHRpb25zID0gY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5tYXAoa3YgPT4ga3Yuc3BsaXQoJzonLCAyKSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XHJcbiAgICAgICAgICAgIG5hbWU6IGtleS50cmltKCksXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSA/IHZhbHVlLnRyaW0oKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0aGVuT3B0aW9uczogJHt0aGVuT3B0aW9ucy5tYXAoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKHZhbHVlID8gYCR7bmFtZX06ICR7dmFsdWV9YCA6IG5hbWUpKS5qb2luKCc7ICcpfWApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGbGFnIHRvIGNoZWNrIGlmIG9wdGlvbjp2YWx1ZSBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYCBtYXRjaGVzIHdpdGggY3VycmVudCBmb3JtIGRhdGFcclxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgaGlkZUlmTWF0Y2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBvcHRpb246dmFsdWUgaW4gY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYCBtYXRjaGVzIHdpdGggY3VycmVudCBmb3JtIGRhdGFcclxuICAgICAgICBoaWRlSWZPcHRpb25zLmZvckVhY2goKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBbb3B0aW9uSWQsIHZhbHVlSWRdID0gdGhpcy5maW5kT3B0aW9uVmFsdWUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSBOdW1iZXIoZm9ybURhdGEuZ2V0QWxsKGBhdHRyaWJ1dGVbJHtvcHRpb25JZH1dYCkuc2xpY2UoLTEpWzBdKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtVmFsdWUgPT09IHZhbHVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGhpZGVJZk1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZUlmTWF0Y2g6ICcsIGhpZGVJZk1hdGNoKTtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVJZk1hdGNoKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IG9wdGlvbiBzaG91bGQgYmUgaGlkZGVuIHdoZW4gbWF0Y2hpbmcgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGN1c3RvbSBmaWVsZCBgX19AaGlkZV9pZmBcclxuICAgICAgICAgICAgdGhlbk9wdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGN1c3RvbSBmaWVsZCB2YWx1ZSBjb250YWluIG9wdGlvbiBuYW1lIHdpdGhvdXQgdmFsdWUsIHRoZW4gaGlkZSB0aGUgd2hvbGUgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb246ICcsIGhpZGVPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uLnZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIGhpZGUgdGhlIHNwZWNpZmljIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgbGFiZWwsIGlkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hpZGVPcHRpb25WYWx1ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVJZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uVmFsdWVzLnB1c2goX2hpZGVPcHRpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uVmFsdWU6ICcsIF9oaWRlT3B0aW9uVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpZGVPcHRpb24gfHwgaGlkZU9wdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGhpZGVPcHRpb24sIGhpZGVPcHRpb25WYWx1ZXMgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8gdGhlIGdyb3VwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQGdyb3VwYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBpZDogTnVtYmVyLFxyXG4gICAgICogICB9LFxyXG4gICAgICogQHJldHVybnMge3sgZ3JvdXBOYW1lOiBzdHJpbmcsIGdyb3VwT3B0aW9uSWRzOiBBcnJheTxudW1iZXI+IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hHcm91cCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AZ3JvdXBcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gbVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwT3B0aW9uSWRzID0gY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5tYXAocyA9PiBzLnRyaW0oKSkgLy8gb3B0aW9uIG5hbWVzXHJcbiAgICAgICAgICAgICAgICAubWFwKG9wdGlvbk5hbWUgPT4gdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGRpc3BsYXlfbmFtZSB9KSA9PiBlcXVhbE9wdGlvblN0cmluZyhkaXNwbGF5X25hbWUsIG9wdGlvbk5hbWUpKT8uaWQpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGlkID0+IGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncm91cE9wdGlvbklkcy5pbmNsdWRlcyhvcHRpb24uaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvcHRpb24gYmVsb25ncyB0byB0aGUgZ3JvdXAgaW4gdGhpcyBjdXN0b20gZmllbGRcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gZ3JvdXBOYW1lOiAke2dyb3VwTmFtZX0sIGdyb3VwT3B0aW9uSWRzOiAke2dyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZ3JvdXBOYW1lLCBncm91cE9wdGlvbklkcyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiB2YWx1ZSBoYXMgYSB0b29sdGlwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXAgbmFtZVs6dmFsdWVdID0gdG9vbHRpcGBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfVxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWUsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgbGFiZWxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9XHJcbiAgICAgKiB9fSBwYXJhbTBcclxuICAgICAqIEByZXR1cm5zIHt7IHRvb2x0aXA6IHN0cmluZyB9IHwgeyB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9IHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gbVsxXS5zcGxpdCgnOicsIDIpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IGN1c3RvbUZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdG9vbHRpcCBmb3Igb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3Igb3B0aW9uIFwiJHtuYW1lfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdG9vbHRpcCB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBzID0ge307XHJcblxyXG4gICAgICAgICAgICAvLyB0b29sdGlwIGZvciBvcHRpb24gdmFsdWVcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlcy5mb3JFYWNoKCh7IGlkLCBsYWJlbCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcobGFiZWwsIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3Igb3B0aW9uIFwiJHtuYW1lfSA6ICR7dmFsdWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwc1tpZF0gPSB0b29sdGlwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlVG9vbHRpcHMgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZ3JvdXAgaGFzIGEgdG9vbHRpcCBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0B0b29sdGlwIChncm91cCBuYW1lKSA9IHRvb2x0aXBgXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZ3JvdXBOYW1lOiBzdHJpbmdcclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3N0cmluZyB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCh7IGN1c3RvbUZpZWxkLCBncm91cE5hbWUgfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSBjdXN0b21GaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIGdyb3VwIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhncm91cE5hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgZm9yIGdyb3VwIFwiJHtuYW1lfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHZhbHVlIGhhcyBhIHRvb2x0aXAgaGVhZGluZyBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0B0b29sdGlwX2hlYWRpbmcgbmFtZTp2YWx1ZSA9IHRvb2x0aXAgaGVhZGluZ2BcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgb3B0aW9uOiB7XHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IG51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfVxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcF9oZWFkaW5nXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBtWzFdLnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gY3VzdG9tRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZSBvciBub3QgdmFsdWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICF2YWx1ZSB8fCAhZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcEhlYWRpbmdzID0ge307XHJcblxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgaWQsIGxhYmVsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGhlYWRpbmcgZm9yIG9wdGlvbiBcIiR7bmFtZX0gOiAke3ZhbHVlfVwiID0gXCJcIlwiJHtoZWFkaW5nfVwiXCJcImApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcEhlYWRpbmdzW2lkXSA9IGhlYWRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9vbHRpcEhlYWRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gbmFtZSBjb250YWlucyBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZWBcclxuICAgICAqIGFuZCByZXR1cm4gdGhlIG5ldyBuYW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMC5jdXN0b21GaWVsZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5jdXN0b21GaWVsZC5uYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLmN1c3RvbUZpZWxkLnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wLm9wdGlvblxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5vcHRpb24uZGlzcGxheV9uYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfSBuZXcgb3B0aW9uIG5hbWVcclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFJlbmFtZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AcmVuYW1lXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IFN0cmluZyhjdXN0b21GaWVsZC52YWx1ZSkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSByZW5hbWUgb3B0aW9uIFwiJHtuYW1lfVwiIHRvIFwiJHtuZXdOYW1lfVwiYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgbm9uLXNhbGUgcHJpY2UgaW4gdGhlIGN1c3RvbSBmaWVsZFxyXG4gICAgICogYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgb3B0aW9uOiB7XHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IG51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfSxcclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9fVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoTm9uU2FsZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlTm9uU2FsZXMgPSB7fTtcclxuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQG5vbnNhbGVcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBOdW1iZXIobVsxXS50cmltKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3BsaXQgZWFjaCAob3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZSkgcGFpciBzZXBhcmF0ZWQgYnkgXCI7XCJcclxuICAgICAgICAgICAgY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5mb3JFYWNoKGt2ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHNwbGl0IG9wdGlvbiBuYW1lIDogb3B0aW9uIHZhbHVlIGluIGN1c3RvbSBmaWVsZCB2YWx1ZSBzZXBhcmF0ZWQgYnkgXCI6XCJcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtvcHRpb25OYW1lLCB2YWx1ZUxhYmVsXSA9IGt2LnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBvcHRpb25OYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBuYW1lIGluIGN1c3RvbSBmaWVsZCBtYXRjaCB3aXRoIGN1cnJlbnQgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIG9wdGlvbiB2YWx1ZSBJRCB0aGF0IG1hdGNoZXMgd2l0aCB0aGUgdmFsdWUgbGFiZWwgaW4gY3VzdG9tIGZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IG9wdGlvbi52YWx1ZXMuZmluZCgoeyBsYWJlbCB9KSA9PiBlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWVMYWJlbCkpPy5pZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gbm9uLXNhbGUgcHJpY2UgY29ycmVzcG9uZGluZyB0byB0aGUgb3B0aW9uIHZhbHVlIElEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTm9uU2FsZXNbdmFsdWVJZF0gPSBwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWVOb25TYWxlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHN0b3JlIHNldHRpbmdzIGluY2x1ZGluZyB0YXggYW5kIGFjdGl2ZSBjdXJyZW5jeVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHtcclxuICAgICAqICAgdGF4OiB7IHBkcDogbnVtYmVyIH0sXHJcbiAgICAgKiAgIGN1cnJlbmN5OiB7XHJcbiAgICAgKiAgICAgY29kZTogc3RyaW5nLFxyXG4gICAgICogICAgIGRpc3BsYXk6IHsgZGVjaW1hbFBsYWNlczogbnVtYmVyLCBkZWNpbWFsVG9rZW46IHN0cmluZywgc3ltYm9sOiBzdHJpbmcsIHN5bWJvbFBsYWNlbWVudDogc3RyaW5nLCB0aG91c2FuZHNUb2tlbjogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgZXhjaGFuZ2VSYXRlOiBudW1iZXIsIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZGVmYXVsdEN1cnJlbmN5OiB7XHJcbiAgICAgKiAgICAgY29kZTogc3RyaW5nLFxyXG4gICAgICogICAgIGRpc3BsYXk6IHsgZGVjaW1hbFBsYWNlczogbnVtYmVyLCBkZWNpbWFsVG9rZW46IHN0cmluZywgc3ltYm9sOiBzdHJpbmcsIHN5bWJvbFBsYWNlbWVudDogc3RyaW5nLCB0aG91c2FuZHNUb2tlbjogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgZXhjaGFuZ2VSYXRlOiBudW1iZXIsIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqIH0+XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGZldGNoU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgaWYgKGNhY2hlZFNldHRpbmdzKSByZXR1cm4gY2FjaGVkU2V0dGluZ3M7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY29udGV4dC5ncmFwaFFMVG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWZhdWx0Q3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3koY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQ3VycmVuY3lGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeTogY3VycmVuY3koY3VycmVuY3lDb2RlOiAkZGVmYXVsdEN1cnJlbmN5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkN1cnJlbmN5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IEN1cnJlbmN5RmllbGRzIG9uIEN1cnJlbmN5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xQbGFjZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kc1Rva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2VSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuYWN0aXZlX2N1cnJlbmN5X2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5Q29kZTogdGhpcy5jb250ZXh0LmRlZmF1bHRfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYWNoZWRTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgLi4ucmVzcC5kYXRhLnNpdGUuc2V0dGluZ3MsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiByZXNwLmRhdGEuc2l0ZS5jdXJyZW5jeSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gY2FjaGVkU2V0dGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBvcHRpb24gcHJpY2VzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTx7IGlkOiBudW1iZXIsIHZhbHVlczogQXJyYXk8eyBpZDogbnVtYmVyIH0+IH0+fSBzaG93T3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PHtcclxuICAgICAqICAgb3B0aW9uSWQ6IG51bWJlcnxudWxsLFxyXG4gICAgICogICB2YWx1ZUlkOiBudW1iZXJ8bnVsbCxcclxuICAgICAqICAgcHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIHByaWNlc1dpdGhvdXRUYXg6IHtcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBhZGp1c3RlZFByaWNlc1dpdGhUYXg6IHtcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIG5vblNhbGVQcmljZVZhbHVlOiBudW1iZXIsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIGFkanVzdGVkUHJpY2VzV2l0aG91dFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG51bWJlcixcclxuICAgICAqICAgfSxcclxuICAgICAqIH0+Pn1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hPcHRpb25QcmljZXMoc2hvd09wdGlvbnMsIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5lbnRyaWVzKCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSBrZXkubWF0Y2goL15hdHRyaWJ1dGVcXFsoXFxkKylcXF0kLyk7XHJcbiAgICAgICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25FbnRpdHlJZCA9IE51bWJlcihtWzFdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlRW50aXR5SWQgPSBOdW1iZXIodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUVudGl0eUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaG93T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBvcHRpb25FbnRpdHlJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcy5wdXNoKHsgb3B0aW9uRW50aXR5SWQsIHZhbHVlRW50aXR5SWQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNvbWJvc1swXSBpcyB0aGUgYmFzZWxpbmUgKGFscmVhZHkgc2VsZWN0ZWQgb3B0aW9ucyk7IHRoZSByZXN0IGFyZSBvbmUgY2FuZGlkYXRlIHZhbHVlIGVhY2hcclxuICAgICAgICBjb25zdCBjb21ib3MgPSBbc2VsZWN0ZWRPcHRpb25WYWx1ZUlkc107XHJcbiAgICAgICAgY29uc3QgY29tYm9zTWV0YSA9IFtudWxsXTtcclxuXHJcbiAgICAgICAgLy8gVmFyaWFudCBvcHRpb25zICh0aG9zZSB0aGF0IGNyZWF0ZSBhIFNLVSkgb25seSByZXR1cm4gdGhlIFNLVSdzIHByaWNlIHdoZW4gZXZlcnkgdmFyaWFudCBvcHRpb24gaXMgc3BlY2lmaWVkXHJcbiAgICAgICAgY29uc3QgdmFyaWFudElkcyA9IG5ldyBTZXQoXHJcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXN0YXRlPVwidmFyaWFudF9vcHRpb25cIl0nKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoX2ksIGVsKSA9PiBOdW1iZXIoJChlbCkuYXR0cignZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSlcclxuICAgICAgICAgICAgICAgIC5nZXQoKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFyaWFudFZhbHVlSWRzID0gW107XHJcblxyXG4gICAgICAgIGZvcm1EYXRhLmVudHJpZXMoKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IGtleS5tYXRjaCgvXmF0dHJpYnV0ZVxcWyhcXGQrKVxcXSQvKTtcclxuICAgICAgICAgICAgaWYgKG0gJiYgdmFyaWFudElkcy5oYXMoTnVtYmVyKG1bMV0pKSAmJiBOdW1iZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFZhcmlhbnRWYWx1ZUlkcy5wdXNoKHsgb3B0aW9uRW50aXR5SWQ6IE51bWJlcihtWzFdKSwgdmFsdWVFbnRpdHlJZDogTnVtYmVyKHZhbHVlKSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBwZXIgdmFyaWFudCBvcHRpb246IFNLVSBvZiB0aGUgb3RoZXIgc2VsZWN0ZWQgdmFyaWFudHMgKyB0aGlzIG9wdGlvbidzIGZpcnN0IChzdGFuZGFyZCkgdmFsdWVcclxuICAgICAgICBjb25zdCB2YXJpYW50QmFzZWxpbmVJbmRleGVzID0ge307XHJcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IFtdO1xyXG5cclxuICAgICAgICBzaG93T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG9wdGlvbi52YWx1ZXMgfHwgKG9wdGlvbi52YWx1ZSA/IFt7IGlkOiBvcHRpb24udmFsdWUgfV0gOiBbXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmFyaWFudCA9IHZhcmlhbnRJZHMuaGFzKG9wdGlvbi5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVmFyaWFudHMgPSBpc1ZhcmlhbnRcclxuICAgICAgICAgICAgICAgID8gc2VsZWN0ZWRWYXJpYW50VmFsdWVJZHMuZmlsdGVyKCh7IG9wdGlvbkVudGl0eUlkIH0pID0+IG9wdGlvbkVudGl0eUlkICE9PSBvcHRpb24uaWQpXHJcbiAgICAgICAgICAgICAgICA6IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzVmFyaWFudCAmJiB2YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudEJhc2VsaW5lSW5kZXhlc1tvcHRpb24uaWRdID0gY29tYm9zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGNvbWJvcy5wdXNoKFsuLi5vdGhlclZhcmlhbnRzLCB7IG9wdGlvbkVudGl0eUlkOiBvcHRpb24uaWQsIHZhbHVlRW50aXR5SWQ6IHZhbHVlc1swXS5pZCB9XSk7XHJcbiAgICAgICAgICAgICAgICBjb21ib3NNZXRhLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tYm86IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3RoZXJWYXJpYW50cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvcHRpb25FbnRpdHlJZDogb3B0aW9uLmlkLCB2YWx1ZUVudGl0eUlkOiB2YWx1ZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YTogeyBvcHRpb25JZDogb3B0aW9uLmlkLCB2YWx1ZUlkOiB2YWx1ZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYW5kaWRhdGVzLmZvckVhY2goKHsgY29tYm8sIG1ldGEgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb21ib3MucHVzaChjb21ibyk7XHJcbiAgICAgICAgICAgIGNvbWJvc01ldGEucHVzaChtZXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCB0aGlzLmZldGNoT3B0aW9uUHJpY2VzQmF0Y2goY29tYm9zKTtcclxuICAgICAgICBjb25zdCBwcmV2ID0gcHJvZHVjdHNbMF07XHJcbiAgICAgICAgY29uc3QgdmFyaWFudEJhc2VsaW5lcyA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHZhcmlhbnRCYXNlbGluZUluZGV4ZXMpLmZvckVhY2goKFtvcHRpb25JZCwgaW5kZXhdKSA9PiB7XHJcbiAgICAgICAgICAgIHZhcmlhbnRCYXNlbGluZXNbb3B0aW9uSWRdID0gcHJvZHVjdHNbaW5kZXhdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBwcm9kdWN0c1xyXG4gICAgICAgICAgICAubWFwKChwcm9kdWN0LCBpKSA9PiAoY29tYm9zTWV0YVtpXSA/IHsgLi4uY29tYm9zTWV0YVtpXSwgLi4ucHJvZHVjdCB9IDogbnVsbCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAvLyB2YXJpYW50IG9wdGlvbnMgbmVlZCB0aGUgZnVsbCBTS1UgY29tYmluYXRpb24sIHNvIHRoZXkgY29tcGFyZSBhZ2FpbnN0IHRoZWlyIG93biBiYXNlbGluZVxyXG4gICAgICAgICAgICBjb25zdCBiYXNlID0gdmFyaWFudEJhc2VsaW5lc1tzZWxlY3Rpb24ub3B0aW9uSWRdIHx8IHByZXY7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9uLXNhbGUgcHJpY2UgYmFzZWQgb24gdGhlIHByZXZpb3VzIHByaWNlIGFuZCB0aGUgY3VycmVudCBwcmljZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc2lkZXIgYWxsIG5vdyBwcmljZSBhbmQgcmVndWxhciBwcmljZVxyXG4gICAgICAgICAgICAgICAgbGV0IG5vblNhbGVQcmljZVdpdGhUYXggPSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWUgLSBiYXNlLnByaWNlc1dpdGhUYXg/LnByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZSAtIGJhc2UucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LnByaWNlLnZhbHVlIC0gc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG5vbi1zYWxlIHByaWNlIGlmIGl0J3MgbGVzcyB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBpZiAobm9uU2FsZVByaWNlV2l0aFRheCA8PSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSAtIGJhc2UucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFkanVzdGVkUHJpY2VzV2l0aFRheCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhUYXguYmFzZVByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlIC0gYmFzZS5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUgLSBiYXNlLnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VWYWx1ZTogbm9uU2FsZVByaWNlV2l0aFRheCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBub24tc2FsZSBwcmljZSBiYXNlZCBvbiB0aGUgcHJldmlvdXMgcHJpY2UgYW5kIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zaWRlciBhbGwgbm93IHByaWNlIGFuZCByZWd1bGFyIHByaWNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9uU2FsZVByaWNlV2l0aG91dFRheCA9IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZSAtIGJhc2UucHJpY2VzV2l0aG91dFRheD8ucHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlIC0gYmFzZS5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAvLyB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8ucHJpY2UudmFsdWUgLSBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbm9uLXNhbGUgcHJpY2UgaWYgaXQncyBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIGlmIChub25TYWxlUHJpY2VXaXRob3V0VGF4IDw9IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlIC0gYmFzZS5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgLSBiYXNlLnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSAtIGJhc2UucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVZhbHVlOiBub25TYWxlUHJpY2VXaXRob3V0VGF4LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZldGNoT3B0aW9uUHJpY2VzIHJldHVybnM6ICcsIHNlbGVjdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBbcHJldiwgLi4uc2VsZWN0aW9uc107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBwcm9kdWN0IHByaWNlIGZyb20gc3BlY2lmaWMgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8eyBvcHRpb25FbnRpdHlJZDogbnVtYmVyLCB2YWx1ZUVudGl0eUlkOiBudW1iZXJ9Pn0gb3B0aW9uVmFsdWVJZHNcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYXJpYW50IGZldGNoIHRoZSBtYXRjaGluZyBTS1UvdmFyaWFudCdzIG93biBwcmljZSBpbnN0ZWFkIG9mIHRoZSBiYXNlIHByb2R1Y3QgKyBtb2RpZmllcnNcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcHJpY2VzV2l0aFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSwgcHJpY2VzV2l0aG91dFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSB9PlxyXG4gICAgICovXHJcbiAgICBhc3luYyBmZXRjaE9wdGlvblByaWNlKG9wdGlvblZhbHVlSWRzKSB7XHJcbiAgICAgICAgY29uc3QgW3Byb2R1Y3RdID0gYXdhaXQgdGhpcy5mZXRjaE9wdGlvblByaWNlc0JhdGNoKFtvcHRpb25WYWx1ZUlkc10pO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2ggcHJpY2VzIGZvciBtdWx0aXBsZSBvcHRpb24tdmFsdWUgY29tYmluYXRpb25zLCBtZXJnaW5nIGFzIG1hbnkgYXMgcG9zc2libGUgaW50byBhXHJcbiAgICAgKiBzaW5nbGUgR3JhcGhRTCByZXF1ZXN0ICh2aWEgYWxpYXNlcykgaW5zdGVhZCBvZiBvbmUgcmVxdWVzdCBwZXIgY29tYmluYXRpb24sIHRvIGN1dCBkb3duXHJcbiAgICAgKiBvbiB0aGUgbnVtYmVyIG9mIG5ldHdvcmsgcm91bmQtdHJpcHMgKHRoZSBtYWluIGNvc3QsIG5vdCBwYXlsb2FkIHNpemUpLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8eyBvcHRpb25FbnRpdHlJZDogbnVtYmVyLCB2YWx1ZUVudGl0eUlkOiBudW1iZXJ9Pj59IGNvbWJvc1xyXG4gICAgICogQHBhcmFtIHtBcnJheTxib29sZWFuPn0gaXNWYXJpYW50RmxhZ3MgcGVyLWNvbWJvOiBsb29rIHVwIHRoZSBtYXRjaGluZyB2YXJpYW50L1NLVSBwcmljZVxyXG4gICAgICogICAobmVlZGVkIGZvciBcInZhcmlhbnQgb3B0aW9uXCIgYXR0cmlidXRlcywgd2hpY2ggZGVmaW5lIHNlcGFyYXRlIFNLVXMpIGluc3RlYWQgb2YgdGhlXHJcbiAgICAgKiAgIGJhc2UgcHJvZHVjdCBwcmljZSArIG1vZGlmaWVyIGFkanVzdG1lbnRcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PHsgcHJpY2VzV2l0aFRheDogb2JqZWN0LCBwcmljZXNXaXRob3V0VGF4OiBvYmplY3QgfT4+fSByZXN1bHRzLCBzYW1lIG9yZGVyL2xlbmd0aCBhcyBgY29tYm9zYFxyXG4gICAgICovXHJcbiAgICBhc3luYyBmZXRjaE9wdGlvblByaWNlc0JhdGNoKGNvbWJvcykge1xyXG4gICAgICAgIGNvbnN0IEJBVENIX0NIVU5LX1NJWkUgPSA4O1xyXG4gICAgICAgIGNvbnN0IGNhY2hlS2V5cyA9IGNvbWJvcy5tYXAoY29tYm8gPT4gYHByb2R1Y3Q6JHtKU09OLnN0cmluZ2lmeShjb21ibyl9YCk7XHJcbiAgICAgICAgY29uc3QgdW5jYWNoZWRJbmRleGVzID0gY2FjaGVLZXlzXHJcbiAgICAgICAgICAgIC5tYXAoKGtleSwgaW5kZXgpID0+ICh0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtrZXldID8gbnVsbCA6IGluZGV4KSlcclxuICAgICAgICAgICAgLmZpbHRlcihpbmRleCA9PiBpbmRleCAhPT0gbnVsbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5jYWNoZWRJbmRleGVzLmxlbmd0aDsgaSArPSBCQVRDSF9DSFVOS19TSVpFKSB7XHJcbiAgICAgICAgICAgIGNodW5rcy5wdXNoKHVuY2FjaGVkSW5kZXhlcy5zbGljZShpLCBpICsgQkFUQ0hfQ0hVTktfU0laRSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQoY2h1bmtzLm1hcChjaHVua0luZGV4ZXMgPT4gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZURlZnMgPSBjaHVua0luZGV4ZXMubWFwKGkgPT4gYCRvcHRpb25WYWx1ZUlkcyR7aX06IFtPcHRpb25WYWx1ZUlkIV1gKS5qb2luKCcsICcpO1xyXG4gICAgICAgICAgICBjb25zdCBhbGlhc0ZpZWxkcyA9IGNodW5rSW5kZXhlcy5tYXAoaSA9PiBgXHJcbiAgICAgICAgICAgICAgICBmJHtpfTogcHJvZHVjdChlbnRpdHlJZDogJHByb2R1Y3RJZCwgb3B0aW9uVmFsdWVJZHM6ICRvcHRpb25WYWx1ZUlkcyR7aX0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRoVGF4OiBwcmljZXMoY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlLCBpbmNsdWRlVGF4OiB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByaWNlRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlc1dpdGhvdXRUYXg6IHByaWNlcyhjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUsIGluY2x1ZGVUYXg6IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByaWNlRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgKS5qb2luKCdcXG4nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2h1bmtJbmRleGVzLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNbYG9wdGlvblZhbHVlSWRzJHtpfWBdID0gY29tYm9zW2ldO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmNvbnRleHQuZ3JhcGhRTFRva2VufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgKCRwcm9kdWN0SWQ6IEludCEsICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSEsICR7dmFyaWFibGVEZWZzfSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2FsaWFzRmllbGRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5RmllbGRzIG9uIE1vbmV5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgUHJpY2VGaWVsZHMgb24gUHJpY2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVQcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaHVua0luZGV4ZXMuZm9yRWFjaChpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwLmRhdGE/LnNpdGU/LltgZiR7aX1gXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtjYWNoZUtleXNbaV1dID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3QgbGV0IG9uZSBiYWQgY2h1bmsgKGUuZy4gYW4gdW5zdXBwb3J0ZWQgdmFyaWFudCBwcmljaW5nIHF1ZXJ5IG9uIHRoaXNcclxuICAgICAgICAgICAgICAgIC8vIHN0b3JlKSB0YWtlIGRvd24gcHJpY2luZyBmb3IgZXZlcnkgb3RoZXIgb3B0aW9uIG9uIHRoZSBwYWdlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZldGNoT3B0aW9uUHJpY2VzQmF0Y2ggY2h1bmsgZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksIDQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2FjaGVLZXlzLm1hcChrZXkgPT4gdGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVba2V5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5IHRvb2x0aXBzIHRvIHRoZSBjb3JyZXNwb25kaW5nIHNob3duIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFRpdGxlXHJcbiAgICAgKiBAcGFyYW0ge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IHRvb2x0aXA6IHN0cmluZywgdmFsdWVUb29sdGlwczogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfSB9fSB0b29sdGlwc1xyXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfX0gdG9vbHRpcEhlYWRpbmdzXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNob3dPcHRpb25JZHMgb3B0aW9uIGlkcyB0byBzaG93IHRvb2x0aXBzXHJcbiAgICAgKi9cclxuICAgIHNob3dPcHRpb25Ub29sdGlwcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncywgc2hvd09wdGlvbklkcykge1xyXG4gICAgICAgIC8vIERpc3BsYXkgdG9vbHRpcFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvb2x0aXBzKS5mb3JFYWNoKChbb3B0aW9uSWQsIHsgdG9vbHRpcCwgdmFsdWVUb29sdGlwcyB9XSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKG9wdGlvbklkKSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25Ub29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB0b29sdGlwKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkJywgb3B0aW9uSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICRvcHRpb24uZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZD1cIiR7b3B0aW9uSWR9XCJdYCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJGxhYmVsID0gJG9wdGlvbi5maW5kKCdsYWJlbCcpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRsYWJlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxhYmVsLmFmdGVyKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5wcmVwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwcykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcF0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHZhbHVlVG9vbHRpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJG9wdGlvbi5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtvcHRpb25JZH0tJHt2YWx1ZUlkfVwiXWApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJHZhbHVlLmFmdGVyKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGlmIG9ubHkgMSBvcHRpb24gc2hvd24gYXQgY3VycmVudCBzdGVwLFxyXG4gICAgICAgIC8vIHRoZW4gbW92ZSBpdHMgdG9vbHRpcCB0byB0aGUgbW9kYWwgdGl0bGVcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQ9XCIke3Nob3dPcHRpb25JZHNbMF19XCJdYCk7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IHRvb2x0aXAgaGVhZGluZ1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvb2x0aXBIZWFkaW5ncylcclxuICAgICAgICAgICAgLmZpbHRlcigoW29wdGlvbklkXSkgPT4gc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIob3B0aW9uSWQpKSlcclxuICAgICAgICAgICAgLmZvckVhY2goKFtvcHRpb25JZCwgdmFsdWVUb29sdGlwSGVhZGluZ3NdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwSGVhZGluZ3MpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXBIZWFkaW5nID0gJCh0aGlzLm9wdGlvblZhbHVlVG9vbHRpcEhlYWRpbmdUZW1wbGF0ZS5yZXBsYWNlKCc8JWhlYWRpbmclPicsIHZhbHVlVG9vbHRpcEhlYWRpbmcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWhlYWRpbmctaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkPVwiJHtvcHRpb25JZH0tJHt2YWx1ZUlkfVwiXWApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5hcHBlbmQoJHRvb2x0aXBIZWFkaW5nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJbmxpbmVPcHRpb25Ub29sdGlwcygpIHtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKS5maXJzdCgpO1xyXG5cclxuICAgICAgICBpZiAoISRwcm9kdWN0T3B0aW9uc0VsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkXSwgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkXScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMucHJvZHVjdE9wdGlvbnMubGVuZ3RoIHx8ICF0aGlzLmN1c3RvbUZpZWxkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uSWRzID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcclxuICAgICAgICAgICAgLm1hcCgoX2luZGV4LCBlbCkgPT4gTnVtYmVyKCQoZWwpLmRhdGEoJ3Byb2R1Y3QtYXR0cmlidXRlLWlkJykpKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgY29uc3QgdG9vbHRpcHMgPSB7fTtcclxuICAgICAgICBjb25zdCB0b29sdGlwSGVhZGluZ3MgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IG9wdGlvbklkcy5pbmNsdWRlcyhpZCkpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcy5mb3JFYWNoKGN1c3RvbUZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b29sdGlwTWF0Y2ggPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB0b29sdGlwTWF0Y2gudG9vbHRpcCB8fCB0b29sdGlwc1tvcHRpb24uaWRdPy50b29sdGlwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwczogT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udmFsdWVUb29sdGlwcywgdG9vbHRpcE1hdGNoLnZhbHVlVG9vbHRpcHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcEhlYWRpbmdzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcEhlYWRpbmcoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVRvb2x0aXBIZWFkaW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdLCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dJbmxpbmVPcHRpb25Ub29sdGlwcygkcHJvZHVjdE9wdGlvbnNFbCwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU3BlY1Rvb2x0aXBzKCkge1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9ICdfX0BzcGVjX3Rvb2x0aXAgJztcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gTUFTVEVSIFNQRUMgVE9PTFRJUFNcclxuICAgICAgICAvLyBBZGQgZW50cmllcyBoZXJlIHRvIHNob3cgYSB0b29sdGlwIG9uIGV2ZXJ5IHByb2R1Y3QgcGFnZSBmb3JcclxuICAgICAgICAvLyB0aGF0IHNwZWMgcm93IGF1dG9tYXRpY2FsbHkuIE5vIGN1c3RvbSBmaWVsZCBuZWVkZWQgcGVyIHByb2R1Y3QuXHJcbiAgICAgICAgLy8gUGVyLXByb2R1Y3QgY3VzdG9tIGZpZWxkcyAoZS5nLiBfX0BzcGVjX3Rvb2x0aXAgTWVtb3J5KSB3aWxsXHJcbiAgICAgICAgLy8gb3ZlcnJpZGUgdGhlc2UgdmFsdWVzIGlmIHByZXNlbnQuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3QgbWFzdGVyVG9vbHRpcHMgPSB7XHJcbiAgICAgICAgICAgICdNZW1vcnknOiAnTm90IHN1cmUgaWYgdGhpcyBpcyB0aGUgcmlnaHQgYW1vdW50IG9mIG1lbW9yeSBmb3IgeW91ciBuZWVkcz8gUmVmZXIgdG8gb3VyIGJsb2cgb24gPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJvYmpvaG5zb24uY29tL2Jsb2cvaG93LW11Y2gtcmFtLWRvLXlvdS1hY3R1YWxseS1uZWVkLWluLWEtcnVnZ2VkLWxhcHRvcC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SQU0gTmVlZHMgaW4gYSBydWdnZWQgbGFwdG9wPC9hPi4nLFxyXG4gICAgICAgICAgICAvLyAnU3RvcmFnZSc6ICdUaGUgZHJpdmUgd2hlcmUgeW91ciBmaWxlcyBhbmQgT1MgYXJlIHN0b3JlZC4nLFxyXG4gICAgICAgICAgICAvLyAnUHJvY2Vzc29yJzogJ1RoZSBDUFUgaXMgdGhlIGJyYWluIG9mIHRoZSBjb21wdXRlci4nLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBhbnkgcHJldmlvdXNseSBpbmplY3RlZCBzcGVjIHRvb2x0aXBzXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtc3BlYy10b29sdGlwXScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAvLyBCdWlsZCBmaW5hbCBtYXA6IHN0YXJ0IHdpdGggbWFzdGVyIGRlZmF1bHRzLCBvdmVycmlkZSB3aXRoIHBlci1wcm9kdWN0IGN1c3RvbSBmaWVsZHNcclxuICAgICAgICBjb25zdCByZXNvbHZlZFRvb2x0aXBzID0geyAuLi5tYXN0ZXJUb29sdGlwcyB9O1xyXG5cclxuICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcy5mb3JFYWNoKCh7IG5hbWUsIHZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFuYW1lLnN0YXJ0c1dpdGgocHJlZml4KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzcGVjTmFtZSA9IG5hbWUuc2xpY2UocHJlZml4Lmxlbmd0aCkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNwZWNOYW1lICYmIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlZFRvb2x0aXBzW3NwZWNOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHJlc29sdmVkVG9vbHRpcHMpLmZvckVhY2goKFtzcGVjTmFtZSwgdG9vbHRpcFRleHRdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRkZCA9IHRoaXMuJHNjb3BlLmZpbmQoYFtkYXRhLXNwZWMtbmFtZT1cIiR7c3BlY05hbWV9XCJdYCkuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGRkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25Ub29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB0b29sdGlwVGV4dCkpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1zcGVjLXRvb2x0aXAnLCBzcGVjTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAkZGQuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93SW5saW5lT3B0aW9uVG9vbHRpcHMoJHByb2R1Y3RPcHRpb25zRWwsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MpIHtcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwcykuZm9yRWFjaCgoW29wdGlvbklkLCB7IHRvb2x0aXAsIHZhbHVlVG9vbHRpcHMgPSB7fSB9XSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkb3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdG9vbHRpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIG9wdGlvbklkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRsYWJlbCA9ICRvcHRpb24uZmluZCgnbGFiZWwnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkbGFiZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYWJlbC5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLnByZXBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZVRvb2x0aXBzKS5mb3JFYWNoKChbdmFsdWVJZCwgdmFsdWVUb29sdGlwXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJG9wdGlvbi5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHZhbHVlVG9vbHRpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCc6c2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJG9wdGlvbi5maW5kKCdzZWxlY3QnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzZWxlY3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNlbGVjdC5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwSGVhZGluZ3MpLmZvckVhY2goKFtvcHRpb25JZCwgdmFsdWVUb29sdGlwSGVhZGluZ3NdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRvcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcEhlYWRpbmdzKS5mb3JFYWNoKChbdmFsdWVJZCwgdmFsdWVUb29sdGlwSGVhZGluZ10pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXBIZWFkaW5nID0gJCh0aGlzLm9wdGlvblZhbHVlVG9vbHRpcEhlYWRpbmdUZW1wbGF0ZS5yZXBsYWNlKCc8JWhlYWRpbmclPicsIHZhbHVlVG9vbHRpcEhlYWRpbmcpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCc6c2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJG9wdGlvbi5maW5kKCdzZWxlY3QnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzZWxlY3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNlbGVjdC5hZnRlcigkdG9vbHRpcEhlYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5hcHBlbmQoJHRvb2x0aXBIZWFkaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkdG9vbHRpcEhlYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIHRvIHRoZSBzaG93biBvcHRpb25zIGFuZCBkaXNwbGF5IGNvbnRpbnVlIGJ1dHRvbiBpZiBuZWNlc3NhcnkuXHJcbiAgICAgKiBTdG9wIGF1dG8gdXBkYXRlIHRoZSBtb2RpZmllcnMgdmlldyB1bnRpbCB0aGUgY29udGludWUgYnV0dG9uIGlzIGNsaWNrZWQuXHJcbiAgICAgKlxyXG4gICAgICogQ29udGludWUgYnV0dG9uIGlzIHNob3duIGlmIGFueSBvZiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICAgICAqIC0gb3B0aW9ucyB0aGF0IGhhcyBkZWZhdWx0IHZhbHVlXHJcbiAgICAgKiAtIGNoZWNrYm94IG9wdGlvbnNcclxuICAgICAqIC0gb3B0aW9uYWwgc2VsZWN0IG9wdGlvbnNcclxuICAgICAqIC0gb3B0aW9uYWwgZGF0ZSBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgICogLSBmaWxlIGlucHV0XHJcbiAgICAgKiAtIG1vcmUgdGhhbiAxIG9wdGlvbiBhcmUgc2hvd24gYXQgdGhlIHNhbWUgdGltZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gc2hvd09wdGlvbklkcyBzaG93IG9wdGlvbiBpZHNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsQ29udGludWVcclxuICAgICAqL1xyXG4gICAgcG9wdWxhdGVEZWZhdWx0T3B0aW9uVmFsdWVzKHNob3dPcHRpb25JZHMsICRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbENvbnRpbnVlKSB7XHJcbiAgICAgICAgY29uc3Qgc2hvd25PcHRpb25zID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgaWQgfSkgPT4gc2hvd09wdGlvbklkcy5pbmNsdWRlcyhpZCkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBvcHRpb25zIHRoYXQgaGFzIGRlZmF1bHQgdmFsdWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHByZWZpbGwsIHNlbGVjdGVkX2RhdGUsIHZhbHVlcyB9KSA9PlxyXG4gICAgICAgICAgICAgICAgcHJlZmlsbCB8fFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRfZGF0ZSAmJiAoc2VsZWN0ZWRfZGF0ZS5kYXkgfHwgc2VsZWN0ZWRfZGF0ZS5tb250aCB8fCBzZWxlY3RlZF9kYXRlLnllYXIpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM/LmZpbmQoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogY2hlY2tib3ggdHlwZSBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgY2hlY2tib3hPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgbm9WYWx1ZSwgdmFsdWUgfSkgPT4gbm9WYWx1ZSB8fCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGZpbGUgdHlwZSBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZmlsZU9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBwYXJ0aWFsIH0pID0+IHBhcnRpYWwgPT09ICdpbnB1dC1maWxlJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGRhdGUgdHlwZSBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZGF0ZU9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBwYXJ0aWFsIH0pID0+IHBhcnRpYWwgPT09ICdkYXRlJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGRyb3Bkb3duIHR5cGUgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duT3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHJlcXVpcmVkLCBwYXJ0aWFsIH0pID0+ICFyZXF1aXJlZCAmJiBwYXJ0aWFsID09PSAnc2V0LXNlbGVjdCcpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB0ZXh0IC8gbXVsdGlsaW5lIC8gbnVtYmVyIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB0ZXh0T3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHBhcnRpYWwgfSkgPT4gcGFydGlhbCA9PT0gJ2lucHV0LXRleHQnIHx8IHBhcnRpYWwgPT09ICd0ZXh0YXJlYScgfHwgcGFydGlhbCA9PT0gJ2lucHV0LW51bWJlcnMnKTtcclxuXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICB8fCBkZWZhdWx0T3B0aW9ucy5sZW5ndGggPiAwIHx8IGNoZWNrYm94T3B0aW9ucy5sZW5ndGggPiAwIHx8IGZpbGVPcHRpb25zLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgfHwgZGF0ZU9wdGlvbnMubGVuZ3RoID4gMCB8fCBkcm9wZG93bk9wdGlvbnMubGVuZ3RoID4gMCB8fCB0ZXh0T3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHNob3cgY29udGludWUgYnV0dG9uXHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbENvbnRpbnVlLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgYXV0byB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IHVudGlsIHRoZSBjb250aW51ZSBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICAgICAgICB0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIG9wdGlvbnNcclxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMuZm9yRWFjaCgoe1xyXG4gICAgICAgICAgICAgICAgaWQsIHByZWZpbGwsIHNlbGVjdGVkX2RhdGUsIHZhbHVlcyxcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IHZhbHVlcz8uZmluZCgoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCk/LmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ3NlbGVjdCcpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdYCkudmFsKHZhbHVlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVmaWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dCwgdGV4dGFyZWEnKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXWApLnZhbChwcmVmaWxsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRfZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9kYXRlLmRheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVtkYXldXCJdYCkudmFsKHNlbGVjdGVkX2RhdGUuZGF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX2RhdGUubW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bbW9udGhdXCJdYCkudmFsKHNlbGVjdGVkX2RhdGUubW9udGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRfZGF0ZS55ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW3llYXJdXCJdYCkudmFsKHNlbGVjdGVkX2RhdGUueWVhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIHRvIHRoZSBzaG93biBjaGVja2JveCBvcHRpb25zXHJcbiAgICAgICAgICAgIGNoZWNrYm94T3B0aW9ucy5mb3JFYWNoKCh7XHJcbiAgICAgICAgICAgICAgICBpZCwgY2hlY2tlZCwgdmFsdWUsIG5vVmFsdWUsXHJcbiAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiaGlkZGVuXCJdYCkudmFsKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJjaGVja2JveFwiXWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiaGlkZGVuXCJdYCkudmFsKG5vVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImNoZWNrYm94XCJdYCkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBtYXJrIGZpbGUgaW5wdXQsIGRhdGUgaW5wdXQsIGRyb3Bkb3duIHNlbGVjdCwgdGV4dCBpbnB1dCBhcyBzaG93blxyXG4gICAgICAgICAgICBbLi4uZmlsZU9wdGlvbnMsIC4uLmRhdGVPcHRpb25zLCAuLi5kcm9wZG93bk9wdGlvbnMsIC4uLnRleHRPcHRpb25zXS5mb3JFYWNoKCh7IGlkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bZGF5XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW21vbnRoXVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW3llYXJdXCJdYCkuYXR0cignZGF0YS1maWVsZC1zaG93bicsICd0cnVlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlcigkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcykge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgcHJlbG9hZGVyOiB0cnVlIH07XHJcbiAgICAgICAgY29uc3QgcHJpY2VIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMub3B0aW9uUHJpY2VUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgIGNvbnN0IHByaWNlVGV4dCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlUGxhaW5UZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuXHJcbiAgICAgICAgc2hvd09wdGlvbklkcy5mb3JFYWNoKG9wdGlvbklkID0+IHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl0gW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdYClcclxuICAgICAgICAgICAgICAgIC5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gTnVtYmVyKCR2YWx1ZS5hdHRyKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWVJZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwcmljZSA9ICQocHJpY2VIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgYWxyZWFkeSBoYXMgcHJpY2UgZGlzcGxheWVkIGJlZm9yZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5kYXRhKCdwcmljZUh0bWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JywgJHZhbHVlLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUudGV4dChgJHskdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0Jyl9ICR7cHJpY2VUZXh0fWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJG9sZCA9ICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRvbGQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG9sZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwbGFjZWhvbGRlciA9ICR2YWx1ZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1wbGFjZWhvbGRlcl0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkcGxhY2Vob2xkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS5hcHBlbmQoJHByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5IHByaWNlcyB0byBjb3JyZXNwb25kaW5nIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHNob3dPcHRpb25JZHMgb3B0aW9uIGlkcyB0byBzaG93IHByaWNlc1xyXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcclxuICAgICAqIEBwYXJhbSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9IH19IG5vbmVTYWxlcyBvcHRpb24gdmFsdWVzIHdpdGggbm9uLXNhbGUgcHJpY2VzXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpZ25vcmVVcGRhdGVTdWJ0b3RhbD1mYWxzZV0gaWdub3JlIHVwZGF0ZSBzdWJ0b3RhbFxyXG4gICAgICovXHJcbiAgICAvKipcclxuICAgICAqIEF1dG8tY2FsY3VsYXRlIGFuZCBkaXNwbGF5IGVhY2ggb3B0aW9uIHZhbHVlJ3MgcHJpY2UgYWRqdXN0bWVudCAoZS5nLiBcIigrJDEwMC4wMClcIilcclxuICAgICAqIG5leHQgdG8gaXRzIGxhYmVsIG9uIHRoZSBwbGFpbiAobm9uLW1vZGFsKSBvcHRpb24gbGlzdCwgc28gYWRtaW5zIG5vIGxvbmdlciBuZWVkIHRvXHJcbiAgICAgKiBtYW51YWxseSB0eXBlIHRoZSBwcmljZSBkaWZmZXJlbmNlIGludG8gdGhlIG9wdGlvbiB2YWx1ZSBuYW1lLlxyXG4gICAgICovXHJcbiAgICBpbml0SW5saW5lT3B0aW9uUHJpY2VIaW50cygpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKS5maXJzdCgpO1xyXG5cclxuICAgICAgICBpZiAoJHByb2R1Y3RPcHRpb25zRWwubGVuZ3RoID09PSAwIHx8ICF0aGlzLnByb2R1Y3RPcHRpb25zPy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG4gICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnByb2R1Y3RPcHRpb25zLm1hcCgoeyBpZCB9KSA9PiBpZCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd09wdGlvblByaWNlcygkcHJvZHVjdE9wdGlvbnNFbCwgJCgpLCBzaG93T3B0aW9uSWRzLCBmb3JtRGF0YSwge30sIHRydWUpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBpbml0SW5saW5lT3B0aW9uUHJpY2VIaW50cyBmYWlsZWQ6ICcsIGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMsIGlnbm9yZVVwZGF0ZVN1YnRvdGFsID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBbc2V0dGluZ3MsIFtwcmV2LCAuLi5zZWxlY3Rpb25zXV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hTZXR0aW5ncygpLFxyXG4gICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2VzKFxyXG4gICAgICAgICAgICAgICAgc2hvd09wdGlvbklkcy5tYXAoX2lkID0+IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gX2lkKSksXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd1ByaWNlID0gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCBNYXRoLmFicyhOdW1iZXIodmFsdWUpKSA8IDAuMDA1KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UHJpY2UodmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaCgoe1xyXG4gICAgICAgICAgICBvcHRpb25JZCwgdmFsdWVJZCwgYWRqdXN0ZWRQcmljZXNXaXRoVGF4LCBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXgsXHJcbiAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdFWCcgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheDogc2hvd1ByaWNlKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IChhZGp1c3RlZFByaWNlc1dpdGhUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA6ICcnKSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiAoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IHRoaXMuZm9ybWF0UHJpY2UoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSwgdHJ1ZSkgOiAnJyksXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdJTkMnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IHNob3dQcmljZShhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiAoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheDogKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUsIHRydWUpIDogJycpLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMucHJpY2VXaXRoVGF4IHx8IHBhcmFtcy5wcmljZVdpdGhvdXRUYXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIG92ZXJyaWRlIG5vbi1zYWxlIHByaWNlIGZvciBvcHRpb24gdmFsdWVzIGlmIGl0IGlzIGFwcGVhcnMgaW4gY3VzdG9tIGZpZWxkIGBfX0Bub25zYWxlYFxyXG4gICAgICAgICAgICAgICAgLy8gYW5kIGlmIGl0J3MgaGlnaGVyIHRoYW4gdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vblNhbGUgPSBub25lU2FsZXNbb3B0aW9uSWRdPy5bdmFsdWVJZF07XHJcbiAgICAgICAgICAgICAgICBpZiAobm9uU2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4Y2hhbmdlZE5vblNhbGUgPSBub25TYWxlICogc2V0dGluZ3MuY3VycmVuY3kuZXhjaGFuZ2VSYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlVmFsdWUgPSBzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ucHJpY2U/LnZhbHVlIDogYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5wcmljZT8udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2hhbmdlZE5vblNhbGUgPiBwcmljZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZTogZXhjaGFuZ2VkTm9uU2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiB0aGlzLmZvcm1hdFByaWNlKGV4Y2hhbmdlZE5vblNhbGUsIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWU6IGV4Y2hhbmdlZE5vblNhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheDogdGhpcy5mb3JtYXRQcmljZShleGNoYW5nZWROb25TYWxlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlVGV4dCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlUGxhaW5UZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHByaWNlID0gJChwcmljZUh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgLy8gc2NvcGUgdG8gdGhlIGxhYmVsIG9ubHk6IHNvbWUgbGF5b3V0cyAoZS5nLiBpbWFnZSBsaXN0IGl0ZW1zKSBhbHNvIHB1dFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZSBvbiB0aGUgc3Vycm91bmRpbmcgPGxpPiwgd2hpY2ggd291bGQgb3RoZXJ3aXNlXHJcbiAgICAgICAgICAgICAgICAvLyBtYXRjaCB0b28gYW5kIGR1cGxpY2F0ZSB0aGUgcHJpY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgbGFiZWxbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl0sIG9wdGlvbltkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlU2VsZWN0b3IgPSBgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtcy5wcmljZVdpdGhUYXggJiYgIXBhcmFtcy5wcmljZVdpdGhvdXRUYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZmluZChwcmljZVNlbGVjdG9yKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JywgJHZhbHVlLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS50ZXh0KGAkeyR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKX0gJHtwcmljZVRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ3ByaWNlSHRtbCcsIHByaWNlSHRtbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKHByaWNlU2VsZWN0b3IpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwbGFjZWhvbGRlciA9ICR2YWx1ZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1wbGFjZWhvbGRlcl0nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwoJHByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNob3cgc3VidG90YWwgY2FsY3VsYXRlZCBmcm9tIGFsbCBzZWxlY3RlZCBvcHRpb25zIGZvciB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgaWYgKCFpZ25vcmVVcGRhdGVTdWJ0b3RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25TdWJ0b3RhbCgkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgcHJldiwgc2V0dGluZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgc3VidG90YWwgZm9yIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VidG90YWxcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBwcmljZXNXaXRoVGF4OiB7XHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB8IG51bGwsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIHByaWNlc1dpdGhvdXRUYXg6IHtcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB8IG51bGwsXHJcbiAgICAgKiB9fSBwcm9kdWN0XHJcbiAgICAgKiBAcGFyYW0ge3sgdGF4OiB7IHBkcDogbnVtYmVyIH0gfX0gc2V0dGluZ3NcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHNob3dPcHRpb25TdWJ0b3RhbCgkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgcHJvZHVjdCwgc2V0dGluZ3MpIHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0eHRTdWJ0b3RhbDogdGhpcy5jb250ZXh0LnR4dFN1YnRvdGFsLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aFRheDogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiAnJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdC5wcmljZXNXaXRoVGF4Py5wcmljZSB8fCBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXg/LnByaWNlKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlID8gcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXg6IHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgPiBwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUpIDogJycsXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdJTkMnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlID8gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgPiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUpIDogJycsXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgc3VtbWFyeSBvZiBzZWxlY3RlZCBvcHRpb25zIGJlZm9yZSBhZGRpbmcgdG8gY2FydFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VtbWFyeVxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsVGl0bGVcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkYWRkVG9DYXJ0V3JhcHBlclxyXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJlbG9hZGVyXHJcbiAgICAgKi9cclxuICAgIHNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhLCBwcmVsb2FkZXIgPSBmYWxzZSkge1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmh0bWwodGhpcy5jb250ZXh0LnR4dFJldmlld1NlbGVjdGlvbnMpO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gIXByZWxvYWRlclxyXG4gICAgICAgICAgICA/ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoKVxyXG4gICAgICAgICAgICA6IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHsgcHJlbG9hZGVyIH0sIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgY29uc3QgJHN1YnRvdGFsID0gJChzdWJ0b3RhbEh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlLXN1YnRvdGFsJywgJycpO1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF5U3RyID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVtkYXldYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoU3RyID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1gKTtcclxuICAgICAgICAgICAgY29uc3QgeWVhclN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1beWVhcl1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXlTdHIgfHwgbW9udGhTdHIgfHwgeWVhclN0cikge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZGlzcGxheV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShgJHt5ZWFyU3RyfS0ke21vbnRoU3RyfS0ke2RheVN0cn1gKS50b0xvY2FsZURhdGVTdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZTogYCR7eWVhclN0cn0tJHttb250aFN0cn0tJHtkYXlTdHJ9YCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVN0ciA9IGZvcm1EYXRhLmdldEFsbChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKS5zbGljZSgtMSlbMF07XHJcbiAgICAgICAgICAgIGlmICghdmFsdWVTdHIgfHwgdmFsdWVTdHIgPT09ICcwJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlU3RyIGluc3RhbmNlb2YgRmlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlU3RyLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZGlzcGxheV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVTdHIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IHZhbHVlU3RyID8gTnVtYmVyKHZhbHVlU3RyKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIGl0IGlzIGNoZWNrYm94IGFuZCBub3QgY2hlY2tlZFxyXG4gICAgICAgICAgICBpZiAob3B0aW9uLm5vVmFsdWUgJiYgb3B0aW9uLm5vVmFsdWUgPT09IHZhbHVlSWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlTGFiZWwgPSBvcHRpb24udmFsdWVzPy5maW5kKCh7IGlkIH0pID0+IGlkID09PSB2YWx1ZUlkKT8ubGFiZWxcclxuICAgICAgICAgICAgICAgIHx8IChvcHRpb24udmFsdWUgPT09IHZhbHVlSWQgPyBvcHRpb24ubGFiZWwgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJpY2VIdG1sID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uLmlkfS0ke3ZhbHVlSWR9XCJdYClcclxuICAgICAgICAgICAgICAgIC5maXJzdCgpLmNsb25lKCkucmVtb3ZlQXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZCcpWzBdPy5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25FbFByaWNlSHRtbCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXSBvcHRpb25bdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkuZGF0YSgncHJpY2VIdG1sJyk7XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZUxhYmVsIHx8IHZhbHVlU3RyLFxyXG4gICAgICAgICAgICAgICAgcHJpY2VIdG1sOiBwcmljZUh0bWwgfHwgb3B0aW9uRWxQcmljZUh0bWwsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBzdW1tYXJ5SHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1bW1hcnlUZW1wbGF0ZSwgeyBvcHRpb25zIH0sIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsU3VtbWFyeS5odG1sKHN1bW1hcnlIdG1sKTtcclxuXHJcbiAgICAgICAgLy8gSW5zZXJ0IHN1YnRvdGFsIHRvIHRvIGFkZCB0byBjYXJ0IHdyYXBwZXIgYW5kIHNob3cgaXRcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29tcGxldGUtc3VidG90YWxdJykucmVtb3ZlKCk7XHJcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuZmluZCh0aGlzLmFkZFRvQ2FydFdyYXBwZXJTZWxlY3RvcikucHJlcGVuZCgkc3VidG90YWwpO1xyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZV1cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS53aXRob3V0X3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LmN1cnJlbmN5XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS50YXhfbGFiZWxcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4XVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXgudmFsdWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXguY3VycmVuY3lcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS53aXRoX3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhfdGF4LmN1cnJlbmN5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LmN1cnJlbmN5XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZU1vZGlmaWVyc1N1YnRvdGFsKGRhdGEpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VidG90YWwgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsXScpO1xyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0eHRTdWJ0b3RhbDogdGhpcy5jb250ZXh0LnR4dFN1YnRvdGFsLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aFRheDogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiAnJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5wcmljZSkge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAuLi4oZGF0YS5wcmljZS53aXRoX3RheCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXg6IGRhdGEucHJpY2Uud2l0aF90YXguZm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihkYXRhLnByaWNlLndpdGhvdXRfdGF4ID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogZGF0YS5wcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcbiAqIFBhcnNlcyBhbiBJU08gZGF0ZS10aW1lIHN0cmluZyBhbmQgZXh0cmFjdHMgdGhlIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBkYXRlLXRpbWUgc3RyaW5nIHRvIHBhcnNlLlxuICogQHJldHVybnMge09iamVjdHxudWxsfSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZXh0cmFjdGVkIGNvbXBvbmVudHMsIG9yIGBudWxsYCBpZiB0aGUgZm9ybWF0IGlzIGludmFsaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGVUaW1lU3RyaW5nKHN0cikge1xuICAgIGNvbnN0IHJlZ2V4ID0gL15cXHMqKD86KD86KFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkpfCg/OihcXGR7Mn0pLShcXGR7Mn0pKSk/KD86W1RcXHNdKT8oPzooXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KSg/OlxcLlxcZCspP3woXFxkezJ9KTooXFxkezJ9KXwoXFxkezJ9KSk/XFxzKig/Olp8KFsrLV0pKFxcZHsxLDJ9KSg/Ojo/KFxcZHsyfSkpPyk/XFxzKiQvO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBzdHIudHJpbSgpLm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIGZvcm1hdFxuICAgIH1cblxuICAgIGNvbnN0IFtcbiAgICAgICAgLFxuICAgICAgICB5ZWFyLCBtb250aCwgZGF5LCAvLyBbMV0sIFsyXSwgWzNdXG4gICAgICAgIHNob3J0TW9udGgsIHNob3J0RGF5LCAvLyBbNF0sIFs1XVxuICAgICAgICBob3VyLCBtaW51dGUsIHNlY29uZCwgLy8gWzZdLCBbN10sIFs4XVxuICAgICAgICBzaG9ydEhvdXIsIHNob3J0TWludXRlLCAvLyBbOV0sIFsxMF1cbiAgICAgICAgc2luZ2xlVGltZUNvbXBvbmVudCwgLy8gWzExXVxuICAgICAgICB0elNpZ24sIHR6SG91ck9mZnNldCwgdHpNaW51dGVPZmZzZXQsIC8vIFsxMl0sIFsxM10sIFsxNF1cbiAgICBdID0gbWF0Y2g7XG5cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgIC8vIERhdGUgY29tcG9uZW50c1xuICAgIGlmICh5ZWFyICYmIG1vbnRoICYmIGRheSkge1xuICAgICAgICByZXN1bHQueWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcbiAgICAgICAgcmVzdWx0Lm1vbnRoID0gcGFyc2VJbnQobW9udGgsIDEwKTtcbiAgICAgICAgcmVzdWx0LmRheSA9IHBhcnNlSW50KGRheSwgMTApO1xuICAgIH0gZWxzZSBpZiAoc2hvcnRNb250aCAmJiBzaG9ydERheSkge1xuICAgICAgICByZXN1bHQubW9udGggPSBwYXJzZUludChzaG9ydE1vbnRoLCAxMCk7XG4gICAgICAgIHJlc3VsdC5kYXkgPSBwYXJzZUludChzaG9ydERheSwgMTApO1xuICAgIH1cblxuICAgIC8vIFRpbWUgY29tcG9uZW50c1xuICAgIGlmIChob3VyICE9PSB1bmRlZmluZWQgJiYgbWludXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChob3VyLCAxMCk7XG4gICAgICAgIHJlc3VsdC5taW51dGUgPSBwYXJzZUludChtaW51dGUsIDEwKTtcbiAgICAgICAgaWYgKHNlY29uZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHQuc2Vjb25kID0gcGFyc2VJbnQoc2Vjb25kLCAxMCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNob3J0SG91ciAhPT0gdW5kZWZpbmVkICYmIHNob3J0TWludXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChzaG9ydEhvdXIsIDEwKTtcbiAgICAgICAgcmVzdWx0Lm1pbnV0ZSA9IHBhcnNlSW50KHNob3J0TWludXRlLCAxMCk7XG4gICAgfSBlbHNlIGlmIChzaW5nbGVUaW1lQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChzaW5nbGVUaW1lQ29tcG9uZW50LCAxMCk7XG4gICAgfVxuXG4gICAgLy8gVGltZXpvbmVcbiAgICBpZiAodHpTaWduICYmIHR6SG91ck9mZnNldCkge1xuICAgICAgICBjb25zdCBzaWduID0gdHpTaWduID09PSAnKycgPyAxIDogLTE7XG4gICAgICAgIGNvbnN0IHR6SG91ciA9IHBhcnNlSW50KHR6SG91ck9mZnNldCwgMTApO1xuICAgICAgICBjb25zdCB0ek1pbnV0ZSA9IHR6TWludXRlT2Zmc2V0ID8gcGFyc2VJbnQodHpNaW51dGVPZmZzZXQsIDEwKSA6IDA7XG4gICAgICAgIHJlc3VsdC50aW1lem9uZSA9IHNpZ24gKiAodHpIb3VyICsgdHpNaW51dGUgLyA2MCk7XG4gICAgfSBlbHNlIGlmIChzdHIuaW5jbHVkZXMoJ1onKSkge1xuICAgICAgICByZXN1bHQudGltZXpvbmUgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkYXRlLXRpbWUgc3RyaW5nIGludG8gYSBEYXRlIG9iamVjdCBhZGp1c3RlZCBmb3IgY291bnRkb3duIHB1cnBvc2VzLlxuICpcbiAqIC0gSWYgdGhlIGRhdGUtdGltZSBzdHJpbmcgZG9lcyBub3QgaW5jbHVkZSBhIHllYXIsIG1vbnRoLCBvciBkYXksIGl0IGlzIHRyZWF0ZWQgYXMgYSBkYWlseSBjb3VudGRvd24uXG4gKiAgIFRoZSBmdW5jdGlvbiB3aWxsIHNldCB0aGUgZGF0ZSB0byB0b2RheSBvciByb2xsIG92ZXIgdG8gdGhlIG5leHQgZGF5IGlmIHRoZSB0aW1lIGhhcyBhbHJlYWR5IHBhc3NlZC5cbiAqIC0gSWYgdGhlIGRhdGUtdGltZSBzdHJpbmcgZG9lcyBub3QgaW5jbHVkZSBhbiBob3VyLCBtaW51dGUsIG9yIHNlY29uZCwgdGhleSBkZWZhdWx0IHRvIDAuXG4gKiAtIFRoZSBmdW5jdGlvbiBhZGp1c3RzIGZvciB0aGUgc3BlY2lmaWVkIHRpbWV6b25lIG9mZnNldC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIGRhdGUtdGltZSBzdHJpbmcgdG8gcGFyc2UuXG4gKiBAcmV0dXJucyB7RGF0ZXx1bmRlZmluZWR9IEEgRGF0ZSBvYmplY3QgdXNlZCBmb3IgdGhlIGNvdW50ZG93biwgb3IgYHVuZGVmaW5lZGAgaWYgcGFyc2luZyBmYWlscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ291bnRkb3duRGF0ZShzdHIpIHtcbiAgICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2VEYXRlVGltZVN0cmluZyhzdHIpO1xuICAgIGlmICghcGFyc2VkRGF0ZSkgcmV0dXJuO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXG4gICAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgdGltZXpvbmUgfSA9IHBhcnNlZERhdGU7XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHkgPSB5ZWFyID8/IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG0gPSBtb250aCA/PyAobm93LmdldE1vbnRoKCkgKyAxKTtcbiAgICBjb25zdCBkID0gZGF5ID8/IG5vdy5nZXREYXRlKCk7XG4gICAgY29uc3QgaCA9IGhvdXIgfHwgMDtcbiAgICBjb25zdCBtaW4gPSBtaW51dGUgfHwgMDtcbiAgICBjb25zdCBzZWMgPSBzZWNvbmQgfHwgMDtcblxuICAgIGxldCBkYXRlO1xuXG4gICAgaWYgKHRpbWV6b25lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdXRjTWlsbGlzID0gRGF0ZS5VVEMoeSwgbSAtIDEsIGQsIGgsIG1pbiwgc2VjKSAtICh0aW1lem9uZSAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHV0Y01pbGxpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmICh5ZWFyKSBkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICAgICAgICBpZiAobW9udGgpIGRhdGUuc2V0TW9udGgobW9udGggLSAxKTtcbiAgICAgICAgaWYgKGRheSkgZGF0ZS5zZXREYXRlKGRheSk7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoaCk7XG4gICAgICAgIGRhdGUuc2V0TWludXRlcyhtaW4pO1xuICAgICAgICBkYXRlLnNldFNlY29uZHMoc2VjKTtcbiAgICB9XG5cbiAgICBpZiAoIXllYXIgJiYgIW1vbnRoICYmICFkYXkpIHtcbiAgICAgICAgLy8gZm9yIGRhaWx5IGNvdW50ZG93biwgYWRkIDEgZGF5IGlmIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAgICAgICAgaWYgKGRhdGUgPCBub3cpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbi8qKlxuICogKipTYWxlQ291bnRkb3duIFNpbmdsZXRvbiBPYmplY3QqKlxuICpcbiAqIE1hbmFnZXMgY291bnRkb3duIHRpbWVycyBmb3Igc2FsZXMgb3IgcHJvbW90aW9uYWwgZXZlbnRzIG9uIHlvdXIgd2Vic2l0ZS5cbiAqIEl0IGhhbmRsZXMgbXVsdGlwbGUgY291bnRkb3duIGVsZW1lbnRzLCB1cGRhdGVzIHRoZW0gaW4gcmVhbC10aW1lLCBhbmQgbWFuYWdlcyB2aXNpYmlsaXR5IGJhc2VkIG9uIHRoZSB2aWV3cG9ydC5cbiAqXG4gKiAtLS1cbiAqXG4gKiAqKlVzYWdlOioqXG4gKlxuICogKioxLiBDb25maWd1cmUgdGhlIENvdW50ZG93biAoT3B0aW9uYWwpOioqXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xuICogICAvLyBPcHRpb25hbCBzZXR0aW5nc1xuICogICBkYXRlRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duRGF0ZScsICAgICAgIC8vIERhdGEgYXR0cmlidXRlIGZvciBjb3VudGRvd24gZGF0ZVxuICogICBpblZpZXdwb3J0RGF0YU5hbWU6ICdzYWxlQ291bnRkb3duSW5WaWV3cG9ydCcsIC8vIERhdGEgYXR0cmlidXRlIGZvciB2aWV3cG9ydCB2aXNpYmlsaXR5XG4gKiAgIHNlbGVjdG9yczogeyAuLi4gfSxcbiAqICAgdGVtcGxhdGU6ICcuLi4nLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDdXN0b20gSFRNTCB0ZW1wbGF0ZSBmb3IgdGhlIGNvdW50ZG93blxuICogICBoaWRlQ2xhc3M6ICdfaGlkZScsICAgICAgICAgICAgICAgICAgICAgIC8vIENsYXNzIHRvIGhpZGUgZWxlbWVudHNcbiAqICAgc2FsZUVuZENsYXNzOiAnX3NhbGVFbmRlZCcsICAgICAgICAgICAgICAvLyBDbGFzcyB3aGVuIHNhbGUgZW5kc1xuICogICBhY3RpdmVDbGFzczogJ19hY3RpdmUnLCAgICAgICAgICAgICAgICAgIC8vIENsYXNzIHdoZW4gY291bnRkb3duIGlzIGFjdGl2ZVxuICogICB0cmFuc2xhdGlvbnM6IHtcbiAqICAgICBlbmRfaW46ICdFbmRzIGluJyxcbiAqICAgICBkYXk6ICdEYXknLFxuICogICAgIGRheXM6ICdEYXlzJyxcbiAqICAgICBob3VyOiAnSG91cicsXG4gKiAgICAgaG91cnM6ICdIb3VycycsXG4gKiAgICAgbWludXRlOiAnTWludXRlJyxcbiAqICAgICBtaW51dGVzOiAnTWludXRlcycsXG4gKiAgICAgc2Vjb25kOiAnU2Vjb25kJyxcbiAqICAgICBzZWNvbmRzOiAnU2Vjb25kcycsXG4gKiAgIH0sXG4gKiAgIHR4dFNhbGVDb3VudGRvd25KU09OOiAneyBcInRyYW5zbGF0aW9uc1wiOiB7IC4uLiB9IH0nLCAvLyBKU09OIHN0cmluZyBmb3IgdHJhbnNsYXRpb25zXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqICoqMi4gQWRkIENvdW50ZG93biBFbGVtZW50czoqKlxuICpcbiAqIC0gKipPcHRpb24gMToqKiBEaXJlY3RseSBzcGVjaWZ5IHRoZSBkYXRlIHdoZW4gYWRkaW5nIHRoZSBlbGVtZW50LlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBjb25zdCAkZWwgPSAkKCcjY291bnRkb3duLWVsZW1lbnQnKTtcbiAqICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XG4gKiAgIFNhbGVDb3VudGRvd24uYWRkKCRlbCwgZGF0ZSk7XG4gKiAgIGBgYFxuICpcbiAqIC0gKipPcHRpb24gMjoqKiBTZXQgZGF0YSBhdHRyaWJ1dGVzIG9uIHRoZSBlbGVtZW50IGFuZCBhZGQgaXQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIGNvbnN0ICRlbCA9ICQoJyNjb3VudGRvd24tZWxlbWVudCcpO1xuICogICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93bkRhdGUnLCAnMjAyMy0xMi0zMVQyMzo1OTo1OScpO1xuICogICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAnRW5kcyBpbicsIC4uLiB9KTtcbiAqICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsKTtcbiAqICAgYGBgXG4gKlxuICogLS0tXG4gKlxuICogKipOb3RlczoqKlxuICpcbiAqIC0gVGhlIGNvdW50ZG93biBhdXRvbWF0aWNhbGx5IHVwZGF0ZXMgdmlzaWJsZSBlbGVtZW50cyBpbiB0aGUgdmlld3BvcnQuXG4gKiAtIFN1cHBvcnRzIGN1c3RvbWl6YXRpb24gdGhyb3VnaCBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGF0dHJpYnV0ZXMuXG4gKiAtIEhhbmRsZXMgYXV0b21hdGljIHN0b3BwaW5nIHdoZW4gbm8gZWxlbWVudHMgcmVtYWluLlxuICpcbiAqIC0tLVxuICpcbiAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIEluaXRpYWxpemUgYW5kIGNvbmZpZ3VyZVxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xuICogICB0cmFuc2xhdGlvbnM6IHtcbiAqICAgICBlbmRfaW46ICdTYWxlIGVuZHMgaW4nLFxuICogICAgIC8vIE90aGVyIHRyYW5zbGF0aW9ucy4uLlxuICogICB9LFxuICogfSk7XG4gKlxuICogLy8gQWRkIGNvdW50ZG93biBlbGVtZW50XG4gKiBjb25zdCAkY291bnRkb3duID0gJCgnI2NvdW50ZG93bicpO1xuICogY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XG4gKiBTYWxlQ291bnRkb3duLmFkZCgkY291bnRkb3duLCBlbmREYXRlKTtcbiAqIGBgYFxuICovXG5cbmNvbnN0IFNhbGVDb3VudGRvd24gPSB7XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7U2V0PEVsZW1lbnQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZWxlbWVudHM6IG5ldyBTZXQoKSxcblxuICAgIC8qKlxuICAgICAqIFRpbWVyIGludGVydmFsIElEXG4gICAgICogQHR5cGUge251bWJlcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGltZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHtJbnRlcnNlY3Rpb25PYnNlcnZlcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAqIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGNvdW50ZG93biBkYXRlXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIGRhdGVEYXRhTmFtZTogJ3NhbGVDb3VudGRvd25EYXRlJyxcblxuICAgIC8qKlxuICAgICAqIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaW5WaWV3cG9ydERhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkluVmlld3BvcnQnLFxuXG4gICAgLyoqXG4gICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgdHJhbnNsYXRpb25zIEpTT05cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdHJhbnNsYXRpb25zRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duVHJhbnNsYXRpb25zJyxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdG9ycyBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHR5cGUge3tlbmRMYWJlbDogc3RyaW5nLCBkYXk6IHN0cmluZywgZGF5VmFsdWU6IHN0cmluZywgZGF5TGFiZWw6IHN0cmluZywgaG91cjogc3RyaW5nLCBob3VyVmFsdWU6IHN0cmluZywgaG91ckxhYmVsOiBzdHJpbmcsIG1pbnV0ZTogc3RyaW5nLCBtaW51dGVWYWx1ZTogc3RyaW5nLCBtaW51dGVMYWJlbDogc3RyaW5nLCBzZWNvbmQ6IHN0cmluZywgc2Vjb25kVmFsdWU6IHN0cmluZywgc2Vjb25kTGFiZWw6IHN0cmluZ319XG4gICAgICovXG4gICAgc2VsZWN0b3JzOiB7XG4gICAgICAgIGVuZExhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZW5kLWxhYmVsXScsXG4gICAgICAgIGRheTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheV0nLFxuICAgICAgICBkYXlWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheS12YWx1ZV0nLFxuICAgICAgICBkYXlMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheS1sYWJlbF0nLFxuICAgICAgICBob3VyOiAnW2RhdGEtc2FsZS1jb3VudGRvd24taG91cl0nLFxuICAgICAgICBob3VyVmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLXZhbHVlXScsXG4gICAgICAgIGhvdXJMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWhvdXItbGFiZWxdJyxcbiAgICAgICAgbWludXRlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlXScsXG4gICAgICAgIG1pbnV0ZVZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLXZhbHVlXScsXG4gICAgICAgIG1pbnV0ZUxhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLWxhYmVsXScsXG4gICAgICAgIHNlY29uZDogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZF0nLFxuICAgICAgICBzZWNvbmRWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC12YWx1ZV0nLFxuICAgICAgICBzZWNvbmRMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC1sYWJlbF0nLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYmFkZ2UtcGVyY2VudFwiPjwvdXNlPjwvc3ZnPjwvaT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfZW5kXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1lbmQtbGFiZWw+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9kYXlcIiBkYXRhLXNhbGUtY291bnRkb3duLWRheT48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5LXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5LWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX2hvdXJcIiBkYXRhLXNhbGUtY291bnRkb3duLWhvdXI+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLWhvdXItdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX21pbnV0ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtbGFiZWw+PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfc2Vjb25kXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQ+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC12YWx1ZT48L3NwYW4+PHNwYW4gY2xhc3M9XCJfbGFiZWxcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgIGAsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHRvIGhpZGUgZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaGlkZUNsYXNzOiAnX2hpZGUnLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBzYWxlIGhhcyBlbmRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzYWxlRW5kQ2xhc3M6ICdfc2FsZUVuZGVkJyxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgYWN0aXZlIGNvdW50ZG93blxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhY3RpdmVDbGFzczogJ19hY3RpdmUnLFxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRpb25zIGZvciBjb3VudGRvd24gbGFiZWxzXG4gICAgICogQHR5cGUge3tlbmRfaW46IHN0cmluZywgZGF5OiBzdHJpbmcsIGRheXM6IHN0cmluZywgaG91cjogc3RyaW5nLCBob3Vyczogc3RyaW5nLCBtaW51dGU6IHN0cmluZywgbWludXRlczogc3RyaW5nLCBzZWNvbmQ6IHN0cmluZywgc2Vjb25kczogc3RyaW5nfX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICBlbmRfaW46ICdFbmQgaW4nLFxuICAgICAgICBkYXk6ICdEYXknLFxuICAgICAgICBkYXlzOiAnRGF5cycsXG4gICAgICAgIGhvdXI6ICdIb3VyJyxcbiAgICAgICAgaG91cnM6ICdIb3VycycsXG4gICAgICAgIG1pbnV0ZTogJ01pbnV0ZScsXG4gICAgICAgIG1pbnV0ZXM6ICdNaW51dGVzJyxcbiAgICAgICAgc2Vjb25kOiAnU2Vjb25kJyxcbiAgICAgICAgc2Vjb25kczogJ1NlY29uZHMnLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmUgdGhlIGNvdW50ZG93biBzZXR0aW5nc1xuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmRhdGVEYXRhTmFtZSAtIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGNvdW50ZG93biBkYXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaW5WaWV3cG9ydERhdGFOYW1lIC0gRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgaW4gdmlld3BvcnQgdmlzaWJpbGl0eVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnNlbGVjdG9ycyAtIFNlbGVjdG9ycyBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmVuZExhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmRheVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5ob3VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5ob3VyTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMubWludXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZVZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZUxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLnNlY29uZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRlbXBsYXRlIC0gVGVtcGxhdGUgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmhpZGVDbGFzcyAtIENsYXNzIG5hbWUgdG8gaGlkZSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNhbGVFbmRDbGFzcyAtIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgc2FsZSBoYXMgZW5kZWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hY3RpdmVDbGFzcyAtIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgYWN0aXZlIGNvdW50ZG93blxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnRyYW5zbGF0aW9ucyAtIFRyYW5zbGF0aW9ucyBmb3IgY291bnRkb3duIGxhYmVsc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5lbmRfaW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuZGF5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmRheXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuaG91clxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5ob3Vyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5taW51dGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMubWludXRlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5zZWNvbmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuc2Vjb25kc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnR4dFNhbGVDb3VudGRvd25KU09OIC0gSlNPTiBzdHJpbmcgZm9yIHRyYW5zbGF0aW9uc1xuICAgICAqL1xuICAgIGNvbmZpZ3VyZSh7XG4gICAgICAgIGRhdGVEYXRhTmFtZSxcbiAgICAgICAgaW5WaWV3cG9ydERhdGFOYW1lLFxuICAgICAgICBzZWxlY3RvcnMsXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICBoaWRlQ2xhc3MsXG4gICAgICAgIHNhbGVFbmRDbGFzcyxcbiAgICAgICAgYWN0aXZlQ2xhc3MsXG4gICAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgICAgdHh0U2FsZUNvdW50ZG93bkpTT04sXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIGlmIChkYXRlRGF0YU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZURhdGFOYW1lID0gZGF0ZURhdGFOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluVmlld3BvcnREYXRhTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5pblZpZXdwb3J0RGF0YU5hbWUgPSBpblZpZXdwb3J0RGF0YU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0b3JzKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycyA9IHsgLi4udGhpcy5zZWxlY3RvcnMsIC4uLnNlbGVjdG9ycyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlkZUNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVDbGFzcyA9IGhpZGVDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYWxlRW5kQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2FsZUVuZENsYXNzID0gc2FsZUVuZENsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNsYXNzID0gYWN0aXZlQ2xhc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy50cmFuc2xhdGlvbnMsIC4uLnRyYW5zbGF0aW9ucyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR4dFNhbGVDb3VudGRvd25KU09OKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHR4dFNhbGVDb3VudGRvd25KU09OKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFucyA9IE9iamVjdC5rZXlzKGpzb24udHJhbnNsYXRpb25zKS5yZWR1Y2UoKF90cmFucywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3J0S2V5ID0ga2V5LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgICAgICBfdHJhbnNbc2hvcnRLZXldID0ganNvbi50cmFuc2xhdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90cmFucztcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy50cmFuc2xhdGlvbnMsIC4uLnRyYW5zIH07XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGVsZW1lbnQgJiBjb3JyZXNwb25kaW5nIGRhdGUgdG8gdGhlIGNvdW50ZG93biBjb2xsZWN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcbiAgICAgKiBAcGFyYW0ge0RhdGV8bnVsbH0gZGF0ZSAtIFRoZSBjb3VudGRvd24gZGF0ZS4gSWYgbm90IHByb3ZpZGVkLCBpdCB3aWxsIGJlIGV4dHJhY3RlZCBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZSBgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXRlYFxuICAgICAqL1xuICAgIGFkZCgkZWwsIGRhdGUgPSBudWxsKSB7XG4gICAgICAgIGxldCB2YWxpZERhdGUgPSBkYXRlIHx8ICRlbC5kYXRhKHRoaXMuZGF0ZURhdGFOYW1lKTtcbiAgICAgICAgaWYgKHZhbGlkRGF0ZSAmJiB0eXBlb2YgdmFsaWREYXRlID09PSAnc3RyaW5nJykgdmFsaWREYXRlID0gcGFyc2VDb3VudGRvd25EYXRlKHZhbGlkRGF0ZSk7XG4gICAgICAgIGlmICghdmFsaWREYXRlKSByZXR1cm47XG4gICAgICAgICRlbC5kYXRhKHRoaXMuZGF0ZURhdGFOYW1lLCB2YWxpZERhdGUpLmh0bWwodGhpcy50ZW1wbGF0ZSlcbiAgICAgICAgICAgIC5nZXQoKS5mb3JFYWNoKGVsID0+IHRoaXMuZWxlbWVudHMuYWRkKGVsKSk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZSgkZWwpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9ic2VydmUgdGhlIGVsZW1lbnQgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHkgY2hlY2tcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvYnNlcnZlKCRlbCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgLy8gYXNzdW1lIGVsZW1lbnQgaXMgaW4gdmlld3BvcnQgaWYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgJGVsLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2UgaWYgbm90IGFscmVhZHkgY3JlYXRlZFxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKGVudHJ5LnRhcmdldCkuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSwgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXNJbnRlcnNlY3RpbmcnLCBlbnRyeS50YXJnZXQsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICByb290OiBudWxsLCAvLyBEZWZhdWx0cyB0byB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMCwgLy8gQ2FsbGJhY2sgaXMgdHJpZ2dlcmVkIHdoZW4gYW55IHBhcnQgb2YgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLm9ic2VydmVyLm9ic2VydmUoZWwpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RvcCBvYnNlcnZpbmcgdGhlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB1bm9ic2VydmUoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1bm9ic2VydmUnLCBlbCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdmlld3BvcnQgYW5kIHZpc2libGVcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpc1Zpc2libGVJblZpZXdwb3J0KCRlbCkge1xuICAgICAgICByZXR1cm4gJGVsLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUpICYmICRlbC5pcygnOnZpc2libGUnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogc3RhcnQgcnVubmluZyBjb3VudGRvd24gZXZlcnkgc2Vjb25kXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMudGltZXIgJiYgdGhpcy5lbGVtZW50cy5zaXplID4gMCkge1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnJ1bigpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBzdG9wIGNvdW50ZG93blxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RvcCBjb3VudGRvd24nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogcnVubmluZyBjb3VudGRvd24gcHJvY2Vzc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgLy8gY2hlY2sgYW5kIHN0b3AgaWYgZWxlbWVudCBubyBsb25nZXIgZXhpc3RzIGluIERPTVxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlKGVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSAkZWwuZGF0YSh0aGlzLmRhdGVEYXRhTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgY291bnRkb3duIGlmIGVsZW1lbnQgaXMgbm90IGluIHZpZXdwb3J0IG9yIG5vdCB2aXNpYmxlXG4gICAgICAgICAgICBpZiAoIWRhdGUgfHwgIXRoaXMuaXNWaXNpYmxlSW5WaWV3cG9ydCgkZWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAoZGF0ZSA8PSBub3cpIHtcbiAgICAgICAgICAgICAgICAvLyBDb3VudCBkb3duIGRhdGUgaGFzIHBhc3NlZFxuICAgICAgICAgICAgICAgICRlbC5hZGRDbGFzcyh0aGlzLnNhbGVFbmRDbGFzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5kZWxldGUoZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcmVtYWluaW5nIHRpbWUgKGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKVxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGRhdGUgLSBub3c7XG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgICAgICBjb25zdCAkZW5kTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5lbmRMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkZGF5ID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5KTtcbiAgICAgICAgICAgIGNvbnN0ICRkYXlWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmRheVZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRkYXlMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmRheUxhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRob3VyID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91cik7XG4gICAgICAgICAgICBjb25zdCAkaG91clZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91clZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRob3VyTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5ob3VyTGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZSk7XG4gICAgICAgICAgICBjb25zdCAkbWludXRlVmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5taW51dGVWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkbWludXRlTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5taW51dGVMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWNvbmRWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLnNlY29uZFZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWNvbmRMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLnNlY29uZExhYmVsKTtcblxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRpb25zID0geyAuLi50aGlzLnRyYW5zbGF0aW9ucywgLi4uJGVsLmRhdGEodGhpcy50cmFuc2xhdGlvbnNEYXRhTmFtZSkgfTtcblxuICAgICAgICAgICAgJGVsLmFkZENsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgJGVuZExhYmVsLmh0bWwodHJhbnNsYXRpb25zLmVuZF9pbik7XG4gICAgICAgICAgICAkZGF5VmFsdWUudGV4dChkYXlzKTtcbiAgICAgICAgICAgICRkYXlMYWJlbC5odG1sKGRheXMgPT09IDEgPyB0cmFuc2xhdGlvbnMuZGF5IDogdHJhbnNsYXRpb25zLmRheXMpO1xuICAgICAgICAgICAgJGRheS50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCk7XG4gICAgICAgICAgICAkaG91clZhbHVlLnRleHQoaG91cnMpO1xuICAgICAgICAgICAgJGhvdXJMYWJlbC5odG1sKGhvdXJzID09PSAxID8gdHJhbnNsYXRpb25zLmhvdXIgOiB0cmFuc2xhdGlvbnMuaG91cnMpO1xuICAgICAgICAgICAgJGhvdXIudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDAgJiYgaG91cnMgPT09IDApO1xuICAgICAgICAgICAgJG1pbnV0ZVZhbHVlLnRleHQobWludXRlcyk7XG4gICAgICAgICAgICAkbWludXRlTGFiZWwuaHRtbChtaW51dGVzID09PSAxID8gdHJhbnNsYXRpb25zLm1pbnV0ZSA6IHRyYW5zbGF0aW9ucy5taW51dGVzKTtcbiAgICAgICAgICAgICRtaW51dGUudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDAgJiYgaG91cnMgPT09IDAgJiYgbWludXRlcyA9PT0gMCk7XG4gICAgICAgICAgICAkc2Vjb25kVmFsdWUudGV4dChzZWNvbmRzKTtcbiAgICAgICAgICAgICRzZWNvbmRMYWJlbC5odG1sKHNlY29uZHMgPT09IDEgPyB0cmFuc2xhdGlvbnMuc2Vjb25kIDogdHJhbnNsYXRpb25zLnNlY29uZHMpO1xuICAgICAgICAgICAgJHNlY29uZC50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYWxlQ291bnRkb3duO1xuIiwiZXhwb3J0IGNvbnN0IGFyaWFLZXlDb2RlcyA9IHtcbiAgICBSRVRVUk46IDEzLFxuICAgIFNQQUNFOiAzMixcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgaW5pdFJhZGlvT3B0aW9ucyB9IGZyb20gJy4vcmFkaW9PcHRpb25zJztcbiIsImltcG9ydCB7IGFyaWFLZXlDb2RlcyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3Qgc2V0Q2hlY2tlZFJhZGlvSXRlbSA9IChpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCkgPT4ge1xuICAgIGl0ZW1Db2xsZWN0aW9uLmVhY2goKGlkeCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCAkaXRlbSA9ICQoaXRlbSk7XG4gICAgICAgIGlmIChpZHggIT09IGl0ZW1JZHgpIHtcbiAgICAgICAgICAgICRpdGVtLmF0dHIoJ2FyaWEtY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgdHJ1ZSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICRpdGVtLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xufTtcblxuY29uc3QgY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uID0gKGxhc3RJdGVtSWR4LCBjdXJyZW50SWR4KSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBjdXJyZW50SWR4ID4gbGFzdEl0ZW1JZHg6IHJldHVybiAwO1xuICAgIGNhc2UgY3VycmVudElkeCA8IDA6IHJldHVybiBsYXN0SXRlbUlkeDtcbiAgICBkZWZhdWx0OiByZXR1cm4gY3VycmVudElkeDtcbiAgICB9XG59O1xuXG5jb25zdCBoYW5kbGVJdGVtS2V5RG93biA9IGl0ZW1Db2xsZWN0aW9uID0+IGUgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZTtcbiAgICBjb25zdCBpdGVtSWR4ID0gaXRlbUNvbGxlY3Rpb24uaW5kZXgoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCBsYXN0Q29sbGVjdGlvbkl0ZW1JZHggPSBpdGVtQ29sbGVjdGlvbi5sZW5ndGggLSAxO1xuXG4gICAgaWYgKE9iamVjdC52YWx1ZXMoYXJpYUtleUNvZGVzKS5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuTEVGVDpcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5VUDoge1xuICAgICAgICBjb25zdCBwcmV2SXRlbUlkeCA9IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbihsYXN0Q29sbGVjdGlvbkl0ZW1JZHgsIGl0ZW1JZHggLSAxKTtcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZ2V0KHByZXZJdGVtSWR4KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4IC0gMSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5SSUdIVDpcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5ET1dOOiB7XG4gICAgICAgIGNvbnN0IG5leHRJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCArIDEpO1xuICAgICAgICBpdGVtQ29sbGVjdGlvbi5nZXQobmV4dEl0ZW1JZHgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggKyAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDogYnJlYWs7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKCRjb250YWluZXIsIGl0ZW1TZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0ICRpdGVtQ29sbGVjdGlvbiA9ICRjb250YWluZXIuZmluZChpdGVtU2VsZWN0b3IpO1xuXG4gICAgJGNvbnRhaW5lci5vbigna2V5ZG93bicsIGl0ZW1TZWxlY3RvciwgaGFuZGxlSXRlbUtleURvd24oJGl0ZW1Db2xsZWN0aW9uKSk7XG59O1xuIiwiLy8gaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4uL3dpc2hsaXN0JzsgLy8gcGFwYXRoZW1lcy1ldmV2YTogZGlzYWJsZWRcbmltcG9ydCB7IGluaXRSYWRpb09wdGlvbnMgfSBmcm9tICcuL2FyaWEnO1xuXG5jb25zdCBvcHRpb25zVHlwZXNNYXAgPSB7XG4gICAgSU5QVVRfRklMRTogJ2lucHV0LWZpbGUnLFxuICAgIElOUFVUX1RFWFQ6ICdpbnB1dC10ZXh0JyxcbiAgICBJTlBVVF9OVU1CRVI6ICdpbnB1dC1udW1iZXInLFxuICAgIElOUFVUX0NIRUNLQk9YOiAnaW5wdXQtY2hlY2tib3gnLFxuICAgIFRFWFRBUkVBOiAndGV4dGFyZWEnLFxuICAgIERBVEU6ICdkYXRlJyxcbiAgICBTRVRfU0VMRUNUOiAnc2V0LXNlbGVjdCcsXG4gICAgU0VUX1JFQ1RBTkdMRTogJ3NldC1yZWN0YW5nbGUnLFxuICAgIFNFVF9SQURJTzogJ3NldC1yYWRpbycsXG4gICAgU1dBVENIOiAnc3dhdGNoJyxcbiAgICBQUk9EVUNUX0xJU1Q6ICdwcm9kdWN0LWxpc3QnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbkNoYW5nZURlY29yYXRvcihhcmVEZWZhdWx0T3B0aW9uc1NldCkge1xuICAgIHJldHVybiAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgaWYgKGFyZURlZmF1bHRPcHRpb25zU2V0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAvLyBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7IC8vIHBhcGF0aGVtZXMtZXZldmE6IGRpc2FibGVkXG4gICAgICAgIHRoaXMuZ2V0VGFiUmVxdWVzdHMoKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKS5lYWNoKChfXywgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcblxuICAgICAgICAgICAgdGhpcy5fbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YWx1ZSwgdHlwZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlKHZhcmlhbnREb21Ob2RlLCB2YXJpYW50VHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHZhcmlhbnRUeXBlKSB7XG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNFVF9SQURJTzpcbiAgICAgICAgY2FzZSBvcHRpb25zVHlwZXNNYXAuU1dBVENIOiB7XG4gICAgICAgICAgICBpbml0UmFkaW9PcHRpb25zKCQodmFyaWFudERvbU5vZGUpLCAnW3R5cGU9cmFkaW9dJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3cgcmFkaW8gYnV0dG9ucyB0byBnZXQgZGVzZWxlY3RlZFxuICAgICAqL1xuICAgIGluaXRSYWRpb0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgcmFkaW8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRyYWRpbyA9ICQocmFkaW8pO1xuXG4gICAgICAgICAgICAvLyBPbmx5IGJpbmQgdG8gY2xpY2sgb25jZVxuICAgICAgICAgICAgaWYgKCRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICRyYWRpby5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkcmFkaW8uZGF0YSgnc3RhdGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJywgJHJhZGlvLnByb3AoJ2NoZWNrZWQnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSA9IHRoaXMuY29udGV4dC5vdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2U7XG4gICAgICAgIGxldCBvdXRPZlN0b2NrTWVzc2FnZSA9IGRhdGEub3V0X29mX3N0b2NrX21lc3NhZ2U7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yICE9PSAnaGlkZV9vcHRpb24nICYmIGJlaGF2aW9yICE9PSAnbGFiZWxfb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgICAgICBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7b3V0T2ZTdG9ja01lc3NhZ2V9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7b3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlfSlgO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcblxuXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBmcmFnbWVudCBpZGVudGlmaWVyIGluIFVSTCByZXF1ZXN0aW5nIGEgc3BlY2lmaWMgdGFiXG4gICAgICovXG4gICAgZ2V0VGFiUmVxdWVzdHMoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjdGFiLScpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJCgnLnRhYnMnKS5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYCk7XG4gICAgICAgICAgICBjb25zdCAkdGFiQ29udGVudCA9ICQoYCR7d2luZG93LmxvY2F0aW9uLmhhc2h9YCk7XG5cbiAgICAgICAgICAgIGlmICgkYWN0aXZlVGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkYWN0aXZlVGFiLmZpbmQoJy50YWInKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYClcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICR0YWJDb250ZW50LmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2luY2UgJHByb2R1Y3RWaWV3IGNhbiBiZSBkeW5hbWljYWxseSBpbnNlcnRlZCB1c2luZyByZW5kZXJfd2l0aCxcbiAgICAgKiBXZSBoYXZlIHRvIHJldHJpZXZlIHRoZSByZXNwZWN0aXZlIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gJHNjb3BlXG4gICAgICovXG4gICAgZ2V0Vmlld01vZGVsKCRzY29wZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICR3ZWlnaHQ6ICQoJy5wcm9kdWN0Vmlldy1pbmZvIFtkYXRhLXByb2R1Y3Qtd2VpZ2h0XScsICRzY29wZSksXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydEZvcm06ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNrdToge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQuc2t1LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBjOiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC51cGMtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC11cGNdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWFudGl0eToge1xuICAgICAgICAgICAgICAgICR0ZXh0OiAkKCcuaW5jcmVtZW50VG90YWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRidWxrUHJpY2luZzogJCgnLnByb2R1Y3RWaWV3LWluZm8tYnVsa1ByaWNpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHdhbGxldEJ1dHRvbnM6ICQoJ1tkYXRhLWFkZC10by1jYXJ0LXdhbGxldC1idXR0b25zXScsICRzY29wZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcHJpY2luZyBlbGVtZW50cyB0aGF0IHdpbGwgc2hvdyB1cCBvbmx5IHdoZW4gdGhlIHByaWNlIGV4aXN0cyBpbiBBUElcbiAgICAgKiBAcGFyYW0gdmlld01vZGVsXG4gICAgICovXG4gICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZXcoZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAhZGF0YS5pbnN0b2NrXG4gICAgICAgICAgICA/IChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZSB8fCB0aGlzLmNvbnRleHQub3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlKVxuICAgICAgICAgICAgOiAoZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcblxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KG1lc3NhZ2UpO1xuXG4gICAgICAgIGlmIChkYXRhLnByaWNlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEud2VpZ2h0IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdlaWdodC5odG1sKGRhdGEud2VpZ2h0LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdmFyaWF0aW9uX2lkIGlmIGl0IGV4aXN0cyBmb3IgYWRkaW5nIHRvIHdpc2hsaXN0XG4gICAgICAgIGlmIChkYXRhLnZhcmlhbnRJZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3aXNobGlzdFZhcmlhdGlvbi52YWwoZGF0YS52YXJpYW50SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgU0tVIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5za3UpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoZGF0YS5za3UpO1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBVUEMgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLnVwYykge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dChkYXRhLnVwYyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHN0b2NrIHZpZXcgaXMgb24gKENQIHNldHRpbmdzKVxuICAgICAgICBpZiAodmlld01vZGVsLnN0b2NrLiRjb250YWluZXIubGVuZ3RoICYmIHR5cGVvZiBkYXRhLnN0b2NrID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0b2NrIGNvbnRhaW5lciBpcyBoaWRkZW4sIHNob3dcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3KGRhdGEpO1xuXG4gICAgICAgIC8vIElmIEJ1bGsgUHJpY2luZyByZW5kZXJlZCBIVE1MIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzICYmIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0V3JhcHBlciA9ICQoJyNhZGQtdG8tY2FydC13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKGFkZFRvQ2FydFdyYXBwZXIuaXMoJzpoaWRkZW4nKSAmJiBkYXRhLnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICBhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByaWNlID0gcHJpY2UucHJpY2VfcmFuZ2UgP1xuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRoX3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aF90YXguZm9ybWF0dGVkfWBcbiAgICAgICAgICAgICAgICA6IHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZDtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRoVGF4LiRzcGFuLmh0bWwodXBkYXRlZFByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByaWNlID0gcHJpY2UucHJpY2VfcmFuZ2UgP1xuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRob3V0X3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aG91dF90YXguZm9ybWF0dGVkfWBcbiAgICAgICAgICAgICAgICA6IHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZDtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRob3V0VGF4LiRzcGFuLmh0bWwodXBkYXRlZFByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5zYXZlZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGFuIG1lc3NhZ2UgYm94IGlmIGEgbWVzc2FnZSBpcyBwYXNzZWRcbiAgICAgKiBIaWRlIHRoZSBib3ggaWYgdGhlIG1lc3NhZ2UgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICAgKi9cbiAgICBzaG93TWVzc2FnZUJveChtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVXYWxsZXRCdXR0b25zVmlldyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgY29uc3QgaXNWYWxpZEZvcm0gPSB2aWV3TW9kZWwuJGFkZFRvQ2FydEZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGlzVmFsaWRGb3JtICYmIGRhdGEucHVyY2hhc2FibGUgJiYgZGF0YS5pbnN0b2NrKTtcbiAgICB9XG5cbiAgICB0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShzaG91bGRTaG93KSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICBpZiAoc2hvdWxkU2hvdykge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3YWxsZXRCdXR0b25zLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmhpZGUoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGluIGEgc2VsZWN0IGRyb3Bkb3duLCBzZWxlY3QgdGhlIGZpcnN0IG9wdGlvbiAoTUVSQy02MzkpXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHNCYXNlLCB7IG9wdGlvbkNoYW5nZURlY29yYXRvciB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvZXlldmEvaW1hZ2UtZ2FsbGVyeSc7IC8vIHBhcGF0aGVtZXMtZXlldmEgZWRpdGVkXG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IGFsZXJ0TW9kYWwsIHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCB7IGlzRW1wdHksIGlzUGxhaW5PYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5pbXBvcnQgeyBub3JtYWxpemVGb3JtRGF0YSB9IGZyb20gJy4vdXRpbHMvYXBpJztcbmltcG9ydCB7IGlzQnJvd3NlcklFLCBjb252ZXJ0SW50b0FycmF5IH0gZnJvbSAnLi91dGlscy9pZS1oZWxwZXJzJztcbmltcG9ydCBiYW5uZXJVdGlscyBmcm9tICcuL3V0aWxzL2Jhbm5lci11dGlscyc7XG5pbXBvcnQgY3VycmVuY3lTZWxlY3RvciBmcm9tICcuLi9nbG9iYWwvY3VycmVuY3ktc2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0LCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXSAubG9hZGluZ092ZXJsYXknKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkgPSBuZXcgSW1hZ2VHYWxsZXJ5KCQoJ1tkYXRhLWltYWdlLWdhbGxlcnldJywgdGhpcy4kc2NvcGUpKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB0aGlzLmxpc3RlblF1YW50aXR5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuJHN3YXRjaE9wdGlvbk1lc3NhZ2UgPSAkKCcuc3dhdGNoLW9wdGlvbi1tZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlID0ge307XG4gICAgICAgIHRoaXMuc3dhdGNoR3JvdXBJZExpc3QgPSAkKCdbaWRePVwic3dhdGNoR3JvdXBcIl0nKS5tYXAoKF8sIGdyb3VwKSA9PiAkKGdyb3VwKS5hdHRyKCdpZCcpKTtcbiAgICAgICAgdGhpcy5zdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVNlbGVjdG9yKCk7XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCAkc2NvcGUpO1xuXG4gICAgICAgIGlmICgkZm9ybVswXS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0uZmluZCgnaW5wdXQjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JyksXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuICAgICAgICB0aGlzLmJpbmRSZW5ld2luZ0RhdGFQbGFuVmlzaWJpbGl0eSgkcHJvZHVjdE9wdGlvbnNFbGVtZW50KTtcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RTd2F0Y2hHcm91cCA9ICQoJ1tpZCo9XCJhdHRyaWJ1dGVfc3dhdGNoXCJdJywgJGZvcm0pO1xuICAgICAgICBjb25zdCAkcHJvZHVjdFN3YXRjaExhYmVscyA9ICQoJy5mb3JtLW9wdGlvbi1zd2F0Y2gnLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IHBsYWNlU3dhdGNoTGFiZWxJbWFnZSA9IChfLCBsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG9wdGlvbkltYWdlID0gJCgnLmZvcm0tb3B0aW9uLWV4cGFuZGVkJywgJChsYWJlbCkpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSW1hZ2VXaWR0aCA9ICRvcHRpb25JbWFnZS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICBjb25zdCBleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCA9IDU1O1xuICAgICAgICAgICAgY29uc3QgeyByaWdodCB9ID0gbGFiZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlciA9IHdpbmRvdy5zY3JlZW4ud2lkdGggLSByaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0VmFsdWUgPSBvcHRpb25JbWFnZVdpZHRoIC0gZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXI7XG5cbiAgICAgICAgICAgIGlmIChlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlciA8IChvcHRpb25JbWFnZVdpZHRoICsgZXh0ZW5kZWRPcHRpb25JbWFnZU9mZnNldExlZnQpKSB7XG4gICAgICAgICAgICAgICAgJG9wdGlvbkltYWdlLmNzcygnbGVmdCcsIGAke3NoaWZ0VmFsdWUgPiAwID8gLXNoaWZ0VmFsdWUgOiBzaGlmdFZhbHVlfXB4YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaExhYmVscywgcGxhY2VTd2F0Y2hMYWJlbEltYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuc2hvd1N3YXRjaE5hbWVzKSB7XG4gICAgICAgICAgICB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuXG4gICAgICAgICAgICAkcHJvZHVjdFN3YXRjaEdyb3VwLm9uKCdjaGFuZ2UnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3YXRjaEdyb3VwRWxlbWVudCA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTd2F0Y2hOYW1lT25PcHRpb24oJCh0YXJnZXQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaEdyb3VwLCAoXywgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3YXRjaEdyb3VwRWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuaXMoJzpjaGVja2VkJykpIHRoaXMuc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkKGVsZW1lbnQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoJHByb2R1Y3RPcHRpb25zRWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRmb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdFRvQ2FydChldmVudCwgJGZvcm1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XG4gICAgICAgIGlmICgoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlQ2FsbGJhY2sgPSBvcHRpb25DaGFuZ2VEZWNvcmF0b3IuY2FsbCh0aGlzLCBoYXNEZWZhdWx0T3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoJHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICBiYW5uZXJVdGlscy5kaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudChwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwcmV2aWV3TW9kYWwnKVswXTtcbiAgICB9XG5cbiAgICByZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLmFkZChbe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdID4gLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLm51bWJlcnNPbmx5KHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5wcm9kdWN0UXVhbnRpdHlFcnJvck1lc3NhZ2UsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3I7XG4gICAgfVxuXG4gICAgc3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3dhdGNoR3JvdXBJZExpc3QubGVuZ3RoICYmIGlzRW1wdHkodGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLnN3YXRjaEdyb3VwSWRMaXN0LmVhY2goKF8sIHN3YXRjaEdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW3N3YXRjaEdyb3VwSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW3N3YXRjaEdyb3VwSWRdID0gJChgIyR7c3dhdGNoR3JvdXBJZH0gfiAuc3dhdGNoLW9wdGlvbi1tZXNzYWdlYCkudGV4dCgpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFByb2R1Y3RWYXJpYW50KCkge1xuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyksIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkKHZhbHVlKS5pcygnOmhpZGRlbicpIHx8IHZhbHVlLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFudHNsaXN0ID0gY29udmVydEludG9BcnJheSh2YWx1ZS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0ID0gaW5wdCA9PiBpbnB0LmRhdGFzZXQucHJvZHVjdEF0dHJpYnV0ZVZhbHVlID09PSBjaGVja2VkLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50c2xpc3QuZmlsdGVyKG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQpWzBdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmlubmVyVGV4dC50cmltKCkgOiBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuY2hpbGRyZW5bMF0gOiBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbC50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKSA6ICd1bnNhdGlzZmllZCc7XG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcucHJvZHVjdFZpZXcnKTtcblxuICAgICAgICBpZiAocHJvZHVjdFZhcmlhbnQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50ID0gcHJvZHVjdFZhcmlhbnQgPT09ICd1bnNhdGlzZmllZCcgPyAnJyA6IHByb2R1Y3RWYXJpYW50O1xuICAgICAgICAgICAgaWYgKHZpZXcuYXR0cignZGF0YS1ldmVudC10eXBlJykpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IHZpZXcuZmluZCgnLnByb2R1Y3RWaWV3LXRpdGxlJylbMF0uaW5uZXJUZXh0LnJlcGxhY2UoL1wiL2csICdcXFxcJCYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XG4gICAgICAgICAgICAgICAgY2FyZC5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRSZW5ld2luZ0RhdGFQbGFuVmlzaWJpbGl0eSgkcHJvZHVjdE9wdGlvbnNFbGVtZW50KSB7XG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub2ZmKCdjaGFuZ2UucmVuZXdpbmdEYXRhUGxhbicsICdbbmFtZT1cImF0dHJpYnV0ZVsxMzMwM11cIl0nKTtcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlLnJlbmV3aW5nRGF0YVBsYW4nLCAnW25hbWU9XCJhdHRyaWJ1dGVbMTMzMDNdXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCRwcm9kdWN0T3B0aW9uc0VsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoJHByb2R1Y3RPcHRpb25zRWxlbWVudCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygkcHJvZHVjdE9wdGlvbnNFbGVtZW50KSB7XG4gICAgICAgIGlmICghJHByb2R1Y3RPcHRpb25zRWxlbWVudCB8fCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJHJlbmV3aW5nUmFkaW8gPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50XG4gICAgICAgICAgICAuZmluZCgnW25hbWU9XCJhdHRyaWJ1dGVbMTMzMDNdXCJdW3ZhbHVlPVwiMTY5OFwiXScpXG4gICAgICAgICAgICAuZmlyc3QoKTtcblxuICAgICAgICBpZiAoJHJlbmV3aW5nUmFkaW8ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG91bGRIaWRlRmllbGRzID0gJHJlbmV3aW5nUmFkaW8uaXMoJzpjaGVja2VkJyk7XG4gICAgICAgIGNvbnN0IGZpZWxkSWRzID0gWzEzMzA0LCAxMzMwNSwgMTMzMDZdO1xuXG4gICAgICAgIGZpZWxkSWRzLmZvckVhY2goZmllbGRJZCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtmaWVsZElkfVwiXWApLmZpcnN0KCk7XG4gICAgICAgICAgICBpZiAoJGZpZWxkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNob3VsZEhpZGVGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVIaWRkZW5Nb2RpZmllckZpZWxkKCRmaWVsZCk7XG4gICAgICAgICAgICAgICAgJGZpZWxkLmNzcygnZGlzcGxheScsICdub25lJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1lcnJvcicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZVNob3duTW9kaWZpZXJGaWVsZCgkZmllbGQpO1xuICAgICAgICAgICAgICAgICRmaWVsZC5jc3MoJ2Rpc3BsYXknLCAnJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZUhpZGRlbk1vZGlmaWVyRmllbGQoJGZpZWxkKSB7XG4gICAgICAgICRmaWVsZC5maW5kKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoX2ksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcblxuICAgICAgICAgICAgaWYgKCEkZWwuaXMoJ1tkYXRhLW9yaWdpbmFsLXJlcXVpcmVkXScpKSB7XG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ2RhdGEtb3JpZ2luYWwtcmVxdWlyZWQnLCAkZWwucHJvcCgncmVxdWlyZWQnKSA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkZWwucHJvcCgncmVxdWlyZWQnLCBmYWxzZSkucmVtb3ZlQXR0cigncmVxdWlyZWQnKTtcblxuICAgICAgICAgICAgaWYgKCRlbC5pcygnOmNoZWNrYm94LCA6cmFkaW8nKSkge1xuICAgICAgICAgICAgICAgICRlbC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkZWwuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgJGVsLnByb3AoJ3NlbGVjdGVkSW5kZXgnLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGVuYWJsZVNob3duTW9kaWZpZXJGaWVsZCgkZmllbGQpIHtcbiAgICAgICAgJGZpZWxkLmZpbmQoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSksIHNlbGVjdCwgdGV4dGFyZWEnKS5lYWNoKChfaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3Qgd2FzUmVxdWlyZWQgPSAkZWwuYXR0cignZGF0YS1vcmlnaW5hbC1yZXF1aXJlZCcpID09PSAndHJ1ZSc7XG5cbiAgICAgICAgICAgICRlbC5wcm9wKCdyZXF1aXJlZCcsIHdhc1JlcXVpcmVkKTtcbiAgICAgICAgICAgIGlmICh3YXNSZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdyZXF1aXJlZCcsICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB3aW5kb3cgaXMgYmVpbmcgcnVuIGluc2lkZSBhbiBpZnJhbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1J1bm5pbmdJbklmcmFtZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEhhbmRsZSBwcm9kdWN0IG9wdGlvbnMgY2hhbmdlc1xuICAgICAqXG4gICAgICovXG4gICAgcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuXG4gICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKCRjaGFuZ2VkT3B0aW9uLmF0dHIoJ3R5cGUnKSA9PT0gJ2ZpbGUnIHx8IHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSwgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGZvcm0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRleHQgPSAkZm9ybS5wYXJlbnRzKCcucHJvZHVjdFZpZXcnKS5maW5kKCcucHJvZHVjdFZpZXctaW5mbycpO1xuICAgICAgICAgICAgICAgIG1vZGFsRmFjdG9yeSgnW2RhdGEtcmV2ZWFsXScsIHsgJGNvbnRleHQgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RPcHRpb25zQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBwcm9kdWN0QXR0cmlidXRlc0RhdGEsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpZiB0aGlzIHNldHRpbmcgaXMgZW5hYmxlZCBpbiBQYWdlIEJ1aWxkZXJcbiAgICAgKiBzaG93IG5hbWUgZm9yIHN3YXRjaCBvcHRpb25cbiAgICAgKi9cbiAgICBzaG93U3dhdGNoTmFtZU9uT3B0aW9uKCRzd2F0Y2gsICRzd2F0Y2hHcm91cCkge1xuICAgICAgICBjb25zdCBzd2F0Y2hOYW1lID0gJHN3YXRjaC5hdHRyKCdhcmlhLWxhYmVsJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVN3YXRjaEdyb3VwSWQgPSAkc3dhdGNoR3JvdXAuYXR0cignYXJpYS1sYWJlbGxlZGJ5Jyk7XG4gICAgICAgIGNvbnN0ICRzd2F0Y2hPcHRpb25NZXNzYWdlID0gJChgIyR7YWN0aXZlU3dhdGNoR3JvdXBJZH0gfiAuc3dhdGNoLW9wdGlvbi1tZXNzYWdlYCk7XG5cbiAgICAgICAgJCgnW2RhdGEtb3B0aW9uLXZhbHVlXScsICRzd2F0Y2hHcm91cCkudGV4dChzd2F0Y2hOYW1lKTtcbiAgICAgICAgJHN3YXRjaE9wdGlvbk1lc3NhZ2UudGV4dChgJHt0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZVthY3RpdmVTd2F0Y2hHcm91cElkXX0gJHtzd2F0Y2hOYW1lfWApO1xuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRzd2F0Y2hPcHRpb25NZXNzYWdlLCAnc3RhdHVzJywgJ2Fzc2VydGl2ZScpO1xuICAgIH1cblxuICAgIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiBhcmlhTGl2ZVN0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAhISRlbGVtZW50LnBhcmVudHMoJy5xdWlja1ZpZXcnKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSkge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChpbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxuICAgICAgICAgICAgICAgIHsgJzF4JzogdGhpcy5jb250ZXh0Lnpvb21TaXplIH0sXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIHpvb20gc2l6ZSB1c2VkIGZvciBkYXRhLXpvb20taW1hZ2UgaW5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LXZpZXcuaHRtbFxuXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG5cbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQucHJvZHVjdFNpemUgfSxcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggZmFsbGJhY2sgaW1hZ2Ugc2l6ZSB1c2VkIGZvciB0aGUgbWFpbiBwcm9kdWN0IGltYWdlIGluXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcblxuICAgICAgICAgICAgICAgICAgICBOb3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIGltYWdlIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHNyY3NldFxuXG4gICAgICAgICAgICAgICAgICAgIEFsc28gbm90ZSB0aGF0IGdldFNyY3NldCByZXR1cm5zIGEgc2ltcGxlIHNyYyBzdHJpbmcgd2hlbiBleGFjdGx5IG9uZSBzaXplIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChpbWFnZS5kYXRhKTtcblxuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuc2V0QWx0ZXJuYXRlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5yZXN0b3JlSW1hZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIGFjdGlvbiB3aGVuIHRoZSBzaG9wcGVyIGNsaWNrcyBvbiArIC8gLSBmb3IgcXVhbnRpdHlcbiAgICAgKlxuICAgICAqL1xuICAgIGxpc3RlblF1YW50aXR5Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBidXR0b24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0O1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNaW4gPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNYXggPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuXG4gICAgICAgICAgICBsZXQgcXR5ID0gZm9ybXMubnVtYmVyc09ubHkoJGlucHV0LnZhbCgpKSA/IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApIDogcXVhbnRpdHlNaW47XG4gICAgICAgICAgICAvLyBJZiBhY3Rpb24gaXMgaW5jcmVtZW50aW5nXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgICAgICBxdHkgPSBmb3Jtcy52YWxpZGF0ZUluY3JlYXNlQWdhaW5zdE1heEJvdW5kYXJ5KHF0eSwgcXVhbnRpdHlNYXgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChxdHkgPiAxKSB7XG4gICAgICAgICAgICAgICAgcXR5ID0gZm9ybXMudmFsaWRhdGVEZWNyZWFzZUFnYWluc3RNaW5Cb3VuZGFyeShxdHksIHF1YW50aXR5TWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiBpbnB1dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiRpbnB1dC52YWwocXR5KTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0ZXh0XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJHRleHQudGV4dChxdHkpO1xuICAgICAgICAgICAgLy8gcGVyZm9ybSB2YWxpZGF0aW9uIGFmdGVyIHVwZGF0aW5nIHByb2R1Y3QgcXVhbnRpdHlcbiAgICAgICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQcmV2ZW50IHRyaWdnZXJpbmcgcXVhbnRpdHkgY2hhbmdlIHdoZW4gcHJlc3NpbmcgZW50ZXJcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2tleXByZXNzJywgJy5mb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIGV2ZW50LndoaWNoLCB0aGVuIHVzZSBldmVudC53aGljaCwgb3RoZXJ3aXNlIHVzZSBldmVudC5rZXlDb2RlXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcbiAgICAgICAgICAgIGlmICh4ID09PSAxMykge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdrZXl1cCcsICcuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEFkZCBhIHByb2R1Y3QgdG8gY2FydFxuICAgICAqXG4gICAgICovXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0QnRuID0gJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICQoZXZlbnQudGFyZ2V0KSk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQnRuVmFsID0gJGFkZFRvQ2FydEJ0bi52YWwoKTtcbiAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkYWRkVG9DYXJ0QnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XG5cbiAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKG5vcm1hbGl6ZUZvcm1EYXRhKG5ldyBGb3JtRGF0YShmb3JtKSksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW5jeVNlbGVjdG9yKHJlc3BvbnNlLmRhdGEuY2FydF9pZCk7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gR3VhcmQgc3RhdGVtZW50XG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRhZGRUb0NhcnRCdG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0TW9kYWwoKS4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkYWRkVG9DYXJ0QnRuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9wZW4gcHJldmlldyBtb2RhbCBhbmQgdXBkYXRlIGNvbnRlbnRcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5hZGRDbGFzcygnYXBwbGUtcGF5LXN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGFkZFRvQ2FydEJ0bikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJHByZU1vZGFsRm9jdXNlZEVsID0gJGFkZFRvQ2FydEJ0bjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRDb250ZW50KHRoaXMucHJldmlld01vZGFsLCByZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vIG1vZGFsLCByZWRpcmVjdCB0byB0aGUgY2FydCBwYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8IHRoaXMuY29udGV4dC51cmxzLmNhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRhZGRUb0NhcnRCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjYXJ0IGNvbnRlbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvcHJldmlldycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0OiBjYXJ0SXRlbUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gdXJsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3RUbyh1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xuICAgICAgICAgICAgd2luZG93LnRvcC5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYXJ0IGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kYWx9IG1vZGFsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhcnRJdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgdXBkYXRlQ2FydENvbnRlbnQobW9kYWwsIGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGNvdW50ZXJcbiAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRRdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgbW9kYWwuJGNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRDb3VudGVyID0gJCgnLm5hdlVzZXItYWN0aW9uIC5jYXJ0LWNvdW50Jyk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0UXVhbnRpdHkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9tb3Rpb25CYW5uZXIgPSAkKCdbZGF0YS1wcm9tb3Rpb24tYmFubmVyXScpO1xuICAgICAgICAgICAgY29uc3QgJGJhY2tUb1Nob3BwcGluZ0J0biA9ICQoJy5wcmV2aWV3Q2FydENoZWNrb3V0ID4gW2RhdGEtcmV2ZWFsLWNsb3NlXScpO1xuICAgICAgICAgICAgY29uc3QgJG1vZGFsQ2xvc2VCdG4gPSAkKCcjcHJldmlld01vZGFsID4gLm1vZGFsLWNsb3NlJyk7XG4gICAgICAgICAgICBjb25zdCBiYW5uZXJVcGRhdGVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0Q29udGFpbmVyID0gJCgnI21haW4tY29udGVudCA+IC5jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICRwcm9kdWN0Q29udGFpbmVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IHBkcC11cGRhdGVcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAkKCcubG9hZGluZ092ZXJsYXkucGRwLXVwZGF0ZScsICRwcm9kdWN0Q29udGFpbmVyKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJGNhcnRDb3VudGVyLmFkZENsYXNzKCdjYXJ0LWNvdW50LS1wb3NpdGl2ZScpO1xuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkcHJvbW90aW9uQmFubmVyLmxlbmd0aCAmJiAkYmFja1RvU2hvcHBwaW5nQnRuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICRiYWNrVG9TaG9wcHBpbmdCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgJG1vZGFsQ2xvc2VCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpO1xuICAgICAgICB0aGlzLnNob3dQcm9kdWN0SW1hZ2UoZGF0YS5pbWFnZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCkge1xuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YUl0ZW1zID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0RGV0YWlscyA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgZm9ybURhdGFJdGVtIG9mIGZvcm1EYXRhSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGZvcm1EYXRhSXRlbTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwcm9kdWN0X2lkJykge1xuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLnByb2R1Y3RJZCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAncXR5W10nKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMucXVhbnRpdHkgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvYXR0cmlidXRlLykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0T3B0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogTnVtYmVyKG5hbWUubWF0Y2goL1xcZCsvZylbMF0pLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMgPSBwcm9kdWN0RGV0YWlscz8ub3B0aW9uU2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFsuLi5wcm9kdWN0RGV0YWlscy5vcHRpb25TZWxlY3Rpb25zLCBwcm9kdWN0T3B0aW9uXVxuICAgICAgICAgICAgICAgICAgICA6IFtwcm9kdWN0T3B0aW9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RVcGRhdGUnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7IHByb2R1Y3REZXRhaWxzIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRlU2VsZWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLmVhY2goKGksIHNjb3BlKSA9PiB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVEYXlzKGRhdGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aFNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbbW9udGhdXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5U2VsZWN0b3IgPSBkYXRlT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lJD1cIltkYXldXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhclNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbeWVhcl1cIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KG1vbnRoU2VsZWN0b3IudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoeWVhclNlbGVjdG9yLnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgbGV0IGRheXNJbk1vbnRoO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4obW9udGgpICYmICFOdW1iZXIuaXNOYU4oeWVhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9ICgoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMCkgPyAyOSA6IDI4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogY2FzZSA2OiBjYXNlIDk6IGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9IDMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9IDMxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZGF5ID0gMjk7IGRheSA8PSAzMTsgZGF5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZGF5U2VsZWN0b3IucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtkYXl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXkgPD0gZGF5c0luTW9udGggJiYgIW9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5U2VsZWN0b3Iub3B0aW9ucy5hZGQobmV3IE9wdGlvbihkYXksIGRheSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRheSA+IGRheXNJbk1vbnRoICYmIG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKHNjb3BlKS5vbignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlT3B0aW9uID0gZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1kYXRlXScpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURheXMoZGF0ZU9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPWRhdGVdJykuZm9yRWFjaCgoZGF0ZU9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZURheXMoZGF0ZU9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYW55IGVtcHR5IHN0cmluZyB2YWx1ZXMgZnJvbSB0aGUgZm9ybURhdGFcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiovXG5leHBvcnQgY29uc3QgZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSA9IGZvcm1EYXRhID0+IHtcbiAgICBjb25zdCByZXMgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKHZhbCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjcyOTkyL2FqYXgtcmVxdWVzdC1mYWlscy13aGVuLXNlbmRpbmctZm9ybWRhdGEtaW5jbHVkaW5nLWVtcHR5LWZpbGUtaW5wdXQtaW4tc2FmYXJpXG4gKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtID0gZm9ybURhdGEgPT4ge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoISh2YWwgaW5zdGFuY2VvZiBGaWxlKSB8fCB2YWwubmFtZSB8fCB2YWwuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHJlcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgZW1wdHkgc3RyaW5nIHZhbHVlcyBhbmQgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybURhdGFcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUZvcm1EYXRhID0gZm9ybURhdGEgPT4gZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybShmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpKTtcbiIsImltcG9ydCB7IGlzQnJvd3NlcklFIH0gZnJvbSAnLi9pZS1oZWxwZXJzJztcblxuY29uc3QgYmFubmVyVXRpbHMgPSB7XG4gICAgZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQ6IChwcm9kdWN0QXR0cmlidXRlcykgPT4ge1xuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlIHx8IGlzQnJvd3NlcklFKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHByaWNlID0gMDtcblxuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLnByaWNlX3JhbmdlKSB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhfdGF4LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdiaWdjb21tZXJjZS5wcm9kdWN0cHJpY2VjaGFuZ2UnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYmFubmVyVXRpbHM7XG4iLCJleHBvcnQgY29uc3QgaXNCcm93c2VySUUgPSAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRJbnRvQXJyYXkgPSBjb2xsZWN0aW9uID0+IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbGxlY3Rpb24pO1xuIiwiaW1wb3J0ICdlYXN5em9vbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGdhbGxlcnkpIHtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1tYWluXScpO1xuICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpO1xuICAgICAgICB0aGlzLiRzZWxlY3RhYmxlSW1hZ2VzID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHt9O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLnNldEltYWdlWm9vbSgpO1xuICAgIH1cblxuICAgIHNldE1haW5JbWFnZShpbWdPYmopIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7IC4uLmltZ09iaiB9O1xuXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKCk7XG4gICAgfVxuXG4gICAgc2V0QWx0ZXJuYXRlSW1hZ2UoaW1nT2JqKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVkSW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuZmluZCgnaW1nJykuYXR0cignc3JjJyksXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuYXR0cignZGF0YS16b29tLWltYWdlJyksXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiB0aGlzLiRtYWluSW1hZ2UuZmluZCgnaW1nJykuYXR0cignc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6IHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHJlc3RvcmVJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UodGhpcy5zYXZlZEltYWdlKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNhdmVkSW1hZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3ROZXdJbWFnZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaW1nT2JqID0ge1xuICAgICAgICAgICAgbWFpbkltYWdlVXJsOiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsJyksXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsJyksXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICAgICAgbWFpbkltYWdlQWx0OiAkdGFyZ2V0LmNoaWxkcmVuKCkuZmlyc3QoKS5hdHRyKCdhbHQnKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoaW1nT2JqKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3dhcE1haW5JbWFnZSgpIHtcbiAgICAgICAgY29uc3QgaXNCcm93c2VySUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdUcmlkZW50Jyk7XG5cbiAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLnN3YXAoXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy4kbWFpbkltYWdlLmF0dHIoe1xuICAgICAgICAgICAgJ2RhdGEtem9vbS1pbWFnZSc6IHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZC5hdHRyKHtcbiAgICAgICAgICAgIGFsdDogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZUFsdCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzQnJvd3NlcklFKSB7XG4gICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlc0lFID0ge1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgke3RoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybH0pYCxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbic6ICdjb250ZW50LWJveCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb250YWluJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZC5jc3MoZmFsbGJhY2tTdHlsZXNJRSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltYWdlKCkge1xuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSAkKCcucHJvZHVjdFZpZXctaW1hZ2UnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gJGltYWdlQ29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICRpbWFnZUNvbnRhaW5lci53aWR0aCgpO1xuXG4gICAgICAgIGNvbnN0ICRpbWFnZSA9IHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS4kem9vbTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gJGltYWdlLmhlaWdodCgpO1xuICAgICAgICBjb25zdCB3aWR0aCA9ICRpbWFnZS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChoZWlnaHQgPCBjb250YWluZXJIZWlnaHQgfHwgd2lkdGggPCBjb250YWluZXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEltYWdlWm9vbSgpIHtcbiAgICAgICAgdGhpcy5lYXN5em9vbSA9IHRoaXMuJG1haW5JbWFnZS5lYXN5Wm9vbSh7XG4gICAgICAgICAgICBvblNob3c6ICgpID0+IHRoaXMuY2hlY2tJbWFnZSgpLFxuICAgICAgICAgICAgZXJyb3JOb3RpY2U6ICcnLFxuICAgICAgICAgICAgbG9hZGluZ05vdGljZTogJycsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdJbWFnZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfaW5oZXJpdHNMb29zZSIsImNvbnN0cnVjdG9yIiwiX3NldFByb3RvdHlwZU9mIiwibXVzdGFjaGUiLCJjcmVhdGVGb2N1c1RyYXAiLCJ0b29scyIsIkNvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IiwiREVGQVVMVF9TVEVQIiwiSW1hZ2VHYWxsZXJ5TW9kYWwiLCJpbWFnZUdhbGxlcnkiLCIkZ2FsbGVyeSIsIm1vZGFsVGVtcGxhdGUiLCIkYm9keSIsIiQiLCJjcmVhdGVNb2RhbCIsIl9wcm90byIsImJpbmRFdmVudHMiLCJfdGhpcyIsImZpbmQiLCJvZmYiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkYSIsImN1cnJlbnRUYXJnZXQiLCJpbWFnZVVybCIsImRhdGEiLCJpbWFnZVNyY3NldCIsInpvb21JbWFnZVVybCIsInZpZGVvSWQiLCJzdGVwIiwiY2xvc2VzdCIsIk51bWJlciIsInNwbGl0Iiwib3Blbk1vZGFsIiwiJGdhbGxlcnlNb2RhbCIsImNsb3NlTW9kYWwiLCJrZXkiLCJpcyIsInRhcmdldCIsInNldE1haW5JbWFnZSIsInNldE1haW5WaWRlbyIsInRvdGFsU3RlcCIsInNldE1haW4zNjAiLCJwcmV2aW91czM2MFN0ZXAiLCJuZXh0MzYwU3RlcCIsInBsYXkzNjAiLCJwYXVzZTM2MCIsImRlc3Ryb3lNb2RhbCIsInJlbW92ZSIsIl8kbWFpbkltYWdlTGluayRnZXQiLCIkbWFpbkltYWdlTGluayIsIiRtYWluSW1hZ2UiLCJjbG9uZSIsInJlbW92ZUF0dHIiLCJhdHRyIiwibWFpbkltYWdlTGlua0VsZW1lbnQiLCJnZXQiLCJvdXRlckhUTUwiLCJuYW1lIiwidGV4dCIsInZpZGVvc0xhYmVsIiwiaW1hZ2VzMzYwTGFiZWwiLCJpbWFnZXNMYWJlbCIsInZpZGVvcyIsIm1hcCIsImxpIiwiXyQkZmluZCRjbG9uZSRnZXQiLCJsaW5rRWxlbWVudCIsImltYWdlczM2MCIsIl8kZWwkZ2V0IiwiJGVsIiwiaW1hZ2VzIiwiZmlsdGVyIiwiXyRhJGdldCIsInJlbmRlciIsImhpZGUiLCJhcHBlbmRUbyIsImluaXRJbWFnZVpvb20iLCJmb2N1c1RyYXAiLCJlc2NhcGVEZWFjdGl2YXRlcyIsInJldHVybkZvY3VzT25EZWFjdGl2YXRlIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJfdGhpczIiLCIkbGFzdEFjdGl2ZUVsZW1lbnQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhZGRDbGFzcyIsIiRtYWluSW1nIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiYWN0aXZhdGUiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsIl90aGlzMyIsImhpZGVNYWluVmlkZW8iLCJoaWRlMzYwVUkiLCJkZWFjdGl2YXRlIiwibWFpbkltYWdlVXJsIiwibWFpbkltYWdlU3Jjc2V0Iiwic2hvd01haW5JbWFnZSIsInNldEFjdGl2ZVRodW1iIiwic3dhcE1haW5JbWFnZSIsImhpZGVNYWluSW1hZ2UiLCJfaSIsIiRpbWFnZUNvbnRhaW5lciIsImVhc3l6b29tIiwic3dhcCIsImlzQnJvd3NlcklFIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5jbHVkZXMiLCJmYWxsYmFja1N0eWxlc0lFIiwiY3NzIiwiY2hlY2tJbWFnZSIsImNvbnRhaW5lckhlaWdodCIsImhlaWdodCIsImNvbnRhaW5lcldpZHRoIiwid2lkdGgiLCIkaW1hZ2UiLCIkem9vbSIsIl90aGlzNCIsImVhc3lab29tIiwib25TaG93IiwiZXJyb3JOb3RpY2UiLCJsb2FkaW5nTm90aWNlIiwic2hvd01haW5WaWRlbyIsInNyYyIsInNob3czNjBVSSIsInN3YXBNYWluMzYwIiwic2V0MzYwQ3VycmVudFN0ZXAiLCJjdXJyZW50U3RlcCIsInRvdGFsIiwiX3RoaXM1IiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsMzYwIiwic2V0SW50ZXJ2YWwiLCJDYXJkSW1hZ2VHYWxsZXJ5TW9kYWwiLCJfSW1hZ2VHYWxsZXJ5TW9kYWwyIiwiJHNjb3BlIiwiX3RlbXAiLCJfdGhpczYiLCJfcmVmIiwicHJvZHVjdElkIiwiZ3JhcGhRTFRva2VuIiwiem9vbVNpemUiLCJwcm9kdWN0U2l6ZSIsInRodW1iU2l6ZSIsInR4dFZpZGVvc0xhYmVsIiwidHh0SW1hZ2VzMzYwTGFiZWwiLCJ0eHRJbWFnZXNMYWJlbCIsImxvYWRpbmdNb2RhbFRlbXBsYXRlIiwiX3Byb3RvMiIsIm9wZW5Mb2FkaW5nTW9kYWwiLCJfb3BlbkxvYWRpbmdNb2RhbCIsIl9jYWxsZWUiLCJfY29udGV4dCIsImxvYWRNb2RhbCIsIl9sb2FkTW9kYWwiLCJfY2FsbGVlMiIsIm1haW5JbWFnZSIsIl9jb250ZXh0MiIsImZldGNoUHJvZHVjdCIsImltYWdlIiwiaXNEZWZhdWx0IiwiZ2V0U3Jjc2V0IiwidXJsVGVtcGxhdGUiLCJ6b29tVXJsIiwidXJsIiwidGh1bWJuYWlsVXJsIiwiYWx0VGV4dCIsInZpZGVvIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiaHRtbCIsIl90ZW1wMiIsIl90aGlzNyIsIl9yZWYyIiwiX3JlZjIkZmlyc3RWaWRlbyIsImZpcnN0VmlkZW8iLCJfcmVmMiRmaXJzdCIsImZpcnN0MzYwIiwiZmlyc3QiLCJfZmV0Y2hQcm9kdWN0IiwiX2NhbGxlZTMiLCJfdGhpcyR6b29tU2l6ZSRzcGxpdCQiLCJ6b29tV2lkdGgiLCJ6b29tSGVpZ2h0IiwiX3RoaXMkcHJvZHVjdFNpemUkc3BsIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiX3RoaXMkdGh1bWJTaXplJHNwbGl0IiwidGh1bWJXaWR0aCIsInRodW1iSGVpZ2h0IiwicmVzcCIsIl9yZWYzIiwiX2NvbnRleHQzIiwiYWpheCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInZhcmlhYmxlcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwieGhyRmllbGRzIiwid2l0aENyZWRlbnRpYWxzIiwic2l0ZSIsInByb2R1Y3QiLCJlZGdlcyIsIl9yZWY0Iiwibm9kZSIsIl9yZWY1IiwiY3VzdG9tRmllbGRzIiwiX3JlZjYiLCJfcmVmNyIsIkltYWdlR2FsbGVyeSIsIl9Db3JuZXJzdG9uZUltYWdlR2FsbCIsIl90aGlzOCIsImltYWdlR2FsbGVyeU1vZGFsIiwiX3Byb3RvMyIsImRlZmF1bHQiLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2NyZWF0ZUNsYXNzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJ1dGlscyIsIkNvcm5lcnN0b25lUHJvZHVjdERldGFpbHMiLCJhbGVydE1vZGFsIiwic2hvd0FsZXJ0TW9kYWwiLCJNb2RhbEV2ZW50cyIsImZpeEZvcm1FbGVtZW50VW5pcXVlSWRzIiwiY3VycmVuY3lGb3JtYXQiLCJTYWxlQ291bnRkb3duIiwiREVCVUdfTE9HIiwibm9ybWFsaXplT3B0aW9uU3RyaW5nIiwicyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImVxdWFsT3B0aW9uU3RyaW5nIiwiYiIsImFyZUFycmF5c0VxdWFsVW5vcmRlcmVkIiwiYXJyMSIsImFycjIiLCJfYXJyMSIsInNsaWNlIiwic29ydCIsIl9hcnIyIiwiZXZlcnkiLCJpbmRleCIsImNhY2hlZFNldHRpbmdzIiwiaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQiLCJfeCIsIl94MiIsIl9oYW5kbGVQcm9taXNlc1dpdGhMaW1pdCIsIl9jYWxsZWU5IiwicHJvbWlzZXMiLCJsaW1pdCIsInJlc3VsdHMiLCJleGVjdXRpbmciLCJfbG9vcCIsIl9pdGVyYXRvciIsIl9zdGVwIiwiX2NvbnRleHQwIiwicHJvbWlzZSIsIl9jb250ZXh0OSIsInJlc3VsdCIsInNwbGljZSIsImluZGV4T2YiLCJwdXNoIiwicmFjZSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfcmVnZW5lcmF0b3JWYWx1ZXMiLCJhbGwiLCJQcm9kdWN0RGV0YWlscyIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZSIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY29uY2F0IiwibW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUiLCJtb2RpZmllcnNNb2RhbFRlbXBsYXRlIiwib3B0aW9uVG9vbHRpcFRlbXBsYXRlIiwib3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUiLCJvcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUiLCJvcHRpb25QcmljZVRlbXBsYXRlIiwib3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlIiwic3VidG90YWxUZW1wbGF0ZSIsInN1bW1hcnlUZW1wbGF0ZSIsInNob3dQcmljZUZyZWUiLCJzaG93UHJpY2VaZXJvIiwiYWRkVG9DYXJ0V3JhcHBlclNlbGVjdG9yIiwiZmV0Y2hPcHRpb25QcmljZUNhY2hlIiwiY29uc29sZSIsImxvZyIsIl9jb25zb2xlIiwiJGZvcm0iLCIkY2hvb3NlT3B0aW9uc0J0biIsInZhbCIsInJlZnJlc2hQcm9kdWN0TWV0YWRhdGEiLCJlbmFibGVNb2RpZmllcnNNb2RhbCIsImNyZWF0ZU1vZGlmaWVyc01vZGFsIiwiYmluZFByb2R1Y3RFZGl0RXZlbnRzIiwiYmluZFN0aWNreUFkZFRvQ2FydEV2ZW50cyIsImJpbmRNb2RhbERlc3Ryb3kiLCJpbml0T3B0aW9uU3RlcHBlciIsInN5bmNQcm9kdWN0Q2FyZFF0eSIsImluaXRTYWxlQ291bnRkb3duIiwiYmluZFJlbmV3aW5nRGF0YVBsYW5WaXNpYmlsaXR5IiwicmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMiLCJyZW5kZXJTcGVjVG9vbHRpcHMiLCJpbml0SW5saW5lT3B0aW9uUHJpY2VIaW50cyIsInBhcnNlTWV0YWRhdGEiLCJzZWxlY3RvciIsInBhcnNlIiwicHJvZHVjdE9wdGlvbnMiLCJnZXRWaWV3TW9kZWwiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGUyIiwiX2xlbjIiLCJfa2V5MiIsIm1vZGVsIiwiJHVwZGF0ZVByb2R1Y3RXcmFwcGVyIiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCIkYnRuIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwicHJvcCIsImFkZFByb2R1Y3RUb0NhcnQiLCJmb3JtIiwiZWRpdFByb2R1Y3RJbkNhcnQiLCJlZGl0UHJvZHVjdFRvQ2FydCIsIl9lZGl0UHJvZHVjdFRvQ2FydCIsIiRzYXZlQnRuIiwib3JpZ2luYWxCdG5WYWwiLCJ3YWl0TWVzc2FnZSIsImZvcm1EYXRhIiwic3VjY2VzcyIsImZhaWx1cmUiLCJpdGVtSWQiLCJuZXdRdHkiLCJfdCIsIndpbmRvdyIsIkZvcm1EYXRhIiwidW5kZWZpbmVkIiwiJG92ZXJsYXkiLCJzZXRMaXZlUmVnaW9uQXR0cmlidXRlcyIsIm5leHQiLCJyZXNwb25zZSIsImNvbnRleHQiLCJlZGl0UHJvZHVjdENhbGxiYWNrIiwiZXJyb3JUZXh0IiwidG1wIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoZWNrSXNRdWlja1ZpZXdDaGlsZCIsIiRwcmVNb2RhbEZvY3VzZWRFbCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiZWRpdFByb2R1Y3RRdWFudGl0eSIsInVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsImZhaWwiLCJfeGhyIiwiX3N0YXR1cyIsImVycm9yIiwiX3gzIiwiX3g0IiwicmVqZWN0IiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJfcmVzcG9uc2UkZGF0YSIsInN0YXR1cyIsImVycm9ycyIsImpvaW4iLCJzdWJtaXRFdmVudCIsIkV2ZW50IiwiaGFuZGxlU3RpY2t5QWRkVG9DYXJ0Q2xpY2siLCIkYnV0dG9uIiwiJHN0aWNreVF0eSIsInNpYmxpbmdzIiwiJGZvcm1RdHkiLCJjaGVja1ZhbGlkaXR5IiwiaW52YWxpZEZpZWxkIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImZvY3VzIiwicmVwb3J0VmFsaWRpdHkiLCJvbmUiLCJjbG9zZWQiLCJlYWNoIiwiZm9ybUZpZWxkRWwiLCIkZm9ybUZpZWxkIiwiJGRlYyIsIiRpbmMiLCIkY2hlY2siLCJpbml0IiwiJHJhZGlvcyIsIiRjaGVja2VkIiwiJGZpcnN0Iiwic2VsZWN0IiwiaW5jIiwiZXEiLCJub3QiLCJoYXNDbGFzcyIsIiR1bmNoZWNrIiwiJG5vbmUiLCJjYXJkUXR5IiwiJHF0eSIsInF0eSIsInR4dFNhbGVDb3VudGRvd25KU09OIiwiZW5kX2luIiwiY29uZmlndXJlIiwiYWRkIiwidG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcyIsIiRwcm9kdWN0T3B0aW9uc0VsIiwiJHJlbmV3aW5nUmFkaW8iLCJzaG91bGRIaWRlRmllbGRzIiwiZmllbGRJZHMiLCJmb3JFYWNoIiwiZmllbGRJZCIsIiRmaWVsZCIsImRpc2FibGVIaWRkZW5Nb2RpZmllckZpZWxkIiwiZW5hYmxlU2hvd25Nb2RpZmllckZpZWxkIiwiZWwiLCJvcmlnaW5hbFJlcXVpcmVkIiwidXBkYXRlVmlldyIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTMiLCJfbGVuMyIsIl9rZXkzIiwidXBkYXRlU2FsZVBlcmNlbnQiLCJ1cGRhdGVTaGlwcGluZ0NvdW50ZG93biIsIm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXciLCJ1cGRhdGVNb2RpZmllcnNWaWV3IiwiJG1vZGlmaWVyc01vZGFsT3B0aW9ucyIsIiRtb2RpZmllcnNNb2RhbFN1YnRvdGFsIiwic2hvd09wdGlvbklkcyIsInN0YWNrZWRTaG93T3B0aW9uSWRzIiwibm9uZVNhbGVzIiwiY3VzdG9tRmllbGROb25lU2FsZXMiLCJzaG93T3B0aW9uUHJpY2VzIiwidXBkYXRlTW9kaWZpZXJzU3VidG90YWwiLCJfZGF0YSRwcmljZSIsIl9kYXRhJHByaWNlNCIsIiRkaXYiLCIkc3BhbiIsInNhbGVQZXJjZW50IiwicHJpY2UiLCJ3aXRob3V0X3RheCIsIl9kYXRhJHByaWNlMiIsIl9kYXRhJHByaWNlMyIsInJycF93aXRob3V0X3RheCIsIk1hdGgiLCJyb3VuZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4Iiwid2l0aF90YXgiLCJfZGF0YSRwcmljZTUiLCJfZGF0YSRwcmljZTYiLCJycnBfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRoX3RheCIsIiRzaGlwcGluZ0NvdW50ZG93biIsInVwZGF0ZUNhcnRDb250ZW50IiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlNCIsImNsb3NlTW9kaWZpZXJzTW9kYWwiLCJwcmV2aWV3TW9kYWwiLCJfbGVuNCIsIl9rZXk0Iiwic2hvd1Byb2R1Y3RJbWFnZSIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTUiLCJfbGVuNSIsIl9rZXk1IiwiJG1vZGlmaWVyc01vZGFsSW1nIiwiX3RoaXMkaW1hZ2VHYWxsZXJ5JGN1IiwiY3VycmVudEltYWdlIiwiZm9ybWF0UHJpY2UiLCJwbHVzU3ltYm9sIiwiZGlzcGxheSIsImN1cnJlbmN5X3Rva2VuIiwiY3VycmVuY3kiLCJzeW1ib2wiLCJjdXJyZW5jeV9sb2NhdGlvbiIsInN5bWJvbFBsYWNlbWVudCIsImRlY2ltYWxfdG9rZW4iLCJkZWNpbWFsVG9rZW4iLCJkZWNpbWFsX3BsYWNlcyIsImRlY2ltYWxQbGFjZXMiLCJ0aG91c2FuZHNfdG9rZW4iLCJ0aG91c2FuZHNUb2tlbiIsImZvcm1hdHRlZCIsImZpbmRPcHRpb25WYWx1ZSIsIm9wdGlvbk5hbWUiLCJ2YWx1ZU5hbWUiLCJfaGlkZUlmT3B0aW9uJHZhbHVlcyIsImhpZGVJZk9wdGlvbiIsImRpc3BsYXlfbmFtZSIsInZhbHVlcyIsImxhYmVsIiwib3B0aW9uSWQiLCJpZCIsInZhbHVlSWQiLCIkYXR0cmlidXRlTWVzc2FnZVdyYXBwZXIiLCIkYWRkVG9DYXJ0V3JhcHBlciIsIiRtb2RpZmllcnNNb2RhbCIsInR4dENvbnRpbnVlIiwicHJvZHVjdFRpdGxlIiwiJG1vZGlmaWVyc01vZGFsQ29tcGxldGUiLCIkbW9kaWZpZXJzTW9kYWxDbG9zZSIsIiRtb2RpZmllcnNNb2RhbENvbnRpbnVlIiwiJG1vZGlmaWVyc01vZGFsQmFjayIsImFwcGVuZCIsImdvQmFja1N0ZXAiLCJpbnZhbGlkSW5wdXRzIiwicmVkdWNlIiwiX2ludmFsaWRJbnB1dHMiLCJ2YWxpZGF0ZVZhcmlhbnRPcHRpb25zIiwiaW5pdE1vZGlmaWVyc1ZpZXciLCJvcGVuTW9kaWZpZXJzTW9kYWwiLCJiZWZvcmUiLCJpZ25vcmVBUElDYWxsIiwiX3VwZGF0ZU1vZGlmaWVyc1ZpZXciLCJfcmVmMyRpZ25vcmVBUElDYWxsIiwiJG1vZGlmaWVyc01vZGFsU3VtbWFyeSIsIiRtb2RpZmllcnNNb2RhbFRpdGxlIiwiJG1vZGlmaWVyc01vZGFsRm9vdGVyIiwiY3VycmVudE9wdGlvbklkIiwiY3VycmVudEdyb3VwTmFtZSIsImN1cnJlbnRHcm91cE9wdGlvbklkcyIsImhpZGVPcHRpb25JZHMiLCJoaWRlT3B0aW9uVmFsdWVzIiwidG9vbHRpcHMiLCJ0b29sdGlwSGVhZGluZ3MiLCJvcHRpb25SZW5hbWVzIiwiX3RoaXMkcHJvZHVjdE9wdGlvbnMkIiwidGl0bGUiLCJncm91cFRvb2x0aXAiLCIkdG9vbHRpcCIsImVtcHR5IiwiZnJvbSIsImVudHJpZXMiLCJzdGF0ZSIsIm9wdGlvbiIsImhpZGVPcHRpb24iLCJncm91cE5hbWUiLCJncm91cE9wdGlvbklkcyIsImlzTm9uZVJhZGlvQ2hlY2tlZCIsIiRmaWxlIiwiaXNGaWxlU2hvd24iLCIkZGF0ZSIsImlzT3B0aW9uYWxEYXRlU2hvd24iLCJyZXF1aXJlZCIsIiRzZWxlY3QiLCJpc09wdGlvbmFsU2VsZWN0U2hvd24iLCIkdGV4dCIsImlzT3B0aW9uYWxUZXh0U2hvd24iLCJmb3JtVmFsdWUiLCJGaWxlIiwiY3VzdG9tRmllbGQiLCJoaWRlSWZNYXRjaCIsImN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYiLCJncm91cE1hdGNoIiwiY3VzdG9tRmllbGRNYXRjaEdyb3VwIiwiX09iamVjdCRhc3NpZ24iLCJ0b29sdGlwTWF0Y2giLCJjdXN0b21GaWVsZE1hdGNoVG9vbHRpcCIsIl90b29sdGlwcyRvcHRpb24kaWQiLCJfdG9vbHRpcHMkb3B0aW9uJGlkMiIsImFzc2lnbiIsInRvb2x0aXAiLCJ2YWx1ZVRvb2x0aXBzIiwidmFsdWVUb29sdGlwSGVhZGluZ3MiLCJjdXN0b21GaWVsZE1hdGNoVG9vbHRpcEhlYWRpbmciLCJuZXdOYW1lIiwiY3VzdG9tRmllbGRNYXRjaFJlbmFtZSIsInZhbHVlTm9uU2FsZXMiLCJjdXN0b21GaWVsZE1hdGNoTm9uU2FsZSIsIl8iLCJjdXN0b21GaWVsZE1hdGNoVG9vbHRpcEdyb3VwIiwic2hvd09wdGlvblRvb2x0aXBzIiwicG9wdWxhdGVEZWZhdWx0T3B0aW9uVmFsdWVzIiwiZGlzcGxheVNob3dPcHRpb25QcmljZXNQcmVsb2FkZXIiLCJzaG93U3VtbWFyeSIsIl94NSIsIl90aGlzOSIsImludmFsaWQiLCJwb3AiLCIkb3B0aW9uIiwiX3RoaXMwIiwibWF0Y2giLCJoaWRlSWZPcHRpb25zIiwia3YiLCJfcmVmOCIsInRyaW0iLCJfcmVmOSIsInRoZW5PcHRpb25zIiwiX3JlZjAiLCJfcmVmMSIsIl9yZWYxMCIsIl90aGlzMCRmaW5kT3B0aW9uVmFsdSIsImdldEFsbCIsIl9yZWYxMSIsIl9yZWYxMiIsIl9oaWRlT3B0aW9uVmFsdWUiLCJfcmVmMTMiLCJfdGhpczEiLCJfdGhpczEkcHJvZHVjdE9wdGlvbnMiLCJfcmVmMTQiLCJfcmVmMTUiLCJfdGhpczEwIiwiX20kMSRzcGxpdCRtYXAiLCJfcmVmMTYiLCJfcmVmMTciLCJfcmVmMTgiLCJfdGhpczExIiwiX20kMSRzcGxpdCRtYXAyIiwiaGVhZGluZyIsIl9yZWYxOSIsIl9yZWYyMCIsIl9yZWYyMSIsIl9rdiRzcGxpdCRtYXAiLCJ2YWx1ZUxhYmVsIiwiX29wdGlvbiR2YWx1ZXMkZmluZCIsIl9yZWYyMiIsImZldGNoU2V0dGluZ3MiLCJfZmV0Y2hTZXR0aW5ncyIsImN1cnJlbmN5Q29kZSIsImFjdGl2ZV9jdXJyZW5jeV9jb2RlIiwiZGVmYXVsdEN1cnJlbmN5Q29kZSIsImRlZmF1bHRfY3VycmVuY3lfY29kZSIsInNldHRpbmdzIiwiZmV0Y2hPcHRpb25QcmljZXMiLCJfZmV0Y2hPcHRpb25QcmljZXMiLCJfY2FsbGVlNCIsInNob3dPcHRpb25zIiwic2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyIsImNvbWJvcyIsImNvbWJvc01ldGEiLCJ2YXJpYW50SWRzIiwic2VsZWN0ZWRWYXJpYW50VmFsdWVJZHMiLCJ2YXJpYW50QmFzZWxpbmVJbmRleGVzIiwiY2FuZGlkYXRlcyIsInByb2R1Y3RzIiwicHJldiIsInZhcmlhbnRCYXNlbGluZXMiLCJzZWxlY3Rpb25zIiwiX2NvbnRleHQ0IiwiX3JlZjIzIiwib3B0aW9uRW50aXR5SWQiLCJ2YWx1ZUVudGl0eUlkIiwiX3JlZjI0IiwiU2V0IiwiX3JlZjI1IiwiaGFzIiwiaXNWYXJpYW50Iiwib3RoZXJWYXJpYW50cyIsIl9yZWYyNiIsImNvbWJvIiwibWV0YSIsIl9yZWYyNyIsImZldGNoT3B0aW9uUHJpY2VzQmF0Y2giLCJfcmVmMjgiLCJCb29sZWFuIiwic2VsZWN0aW9uIiwiYmFzZSIsInByaWNlc1dpdGhUYXgiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGgiLCJfYmFzZSRwcmljZXNXaXRoVGF4IiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoMiIsIl9iYXNlJHByaWNlc1dpdGhUYXgyIiwibm9uU2FsZVByaWNlV2l0aFRheCIsImJhc2VQcmljZSIsImFkanVzdGVkUHJpY2VzV2l0aFRheCIsIm5vblNhbGVQcmljZVZhbHVlIiwicHJpY2VzV2l0aG91dFRheCIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aDMiLCJfYmFzZSRwcmljZXNXaXRob3V0VGEiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGg0IiwiX2Jhc2UkcHJpY2VzV2l0aG91dFRhMiIsIm5vblNhbGVQcmljZVdpdGhvdXRUYXgiLCJhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXgiLCJfeDYiLCJfeDciLCJmZXRjaE9wdGlvblByaWNlIiwiX2ZldGNoT3B0aW9uUHJpY2UiLCJfY2FsbGVlNSIsIm9wdGlvblZhbHVlSWRzIiwiX3lpZWxkJHRoaXMkZmV0Y2hPcHRpIiwiX2NvbnRleHQ1IiwiX3g4IiwiX2ZldGNoT3B0aW9uUHJpY2VzQmF0Y2giLCJfY2FsbGVlNyIsIl90aGlzMTIiLCJCQVRDSF9DSFVOS19TSVpFIiwiY2FjaGVLZXlzIiwidW5jYWNoZWRJbmRleGVzIiwiY2h1bmtzIiwiX2NvbnRleHQ3IiwiY2h1bmtJbmRleGVzIiwiX2NhbGxlZTYiLCJ2YXJpYWJsZURlZnMiLCJhbGlhc0ZpZWxkcyIsIl90MiIsIl9jb250ZXh0NiIsIl9yZXNwJGRhdGEiLCJfeDkiLCJfdGhpczEzIiwiX3JlZjMwIiwiX3JlZjMwJCIsIiRsYWJlbCIsImFmdGVyIiwicHJlcGVuZCIsIl9yZWYzMSIsInZhbHVlVG9vbHRpcCIsIiR2YWx1ZSIsIl9yZWYzMiIsIl9yZWYzMyIsIl9yZWYzNCIsInZhbHVlVG9vbHRpcEhlYWRpbmciLCIkdG9vbHRpcEhlYWRpbmciLCJfdGhpczE0Iiwib3B0aW9uSWRzIiwiX2luZGV4IiwiX3JlZjM1IiwiX3Rvb2x0aXBzJG9wdGlvbiRpZDMiLCJfdG9vbHRpcHMkb3B0aW9uJGlkNCIsInNob3dJbmxpbmVPcHRpb25Ub29sdGlwcyIsIl90aGlzMTUiLCJwcmVmaXgiLCJtYXN0ZXJUb29sdGlwcyIsInJlc29sdmVkVG9vbHRpcHMiLCJfcmVmMzYiLCJzdGFydHNXaXRoIiwic3BlY05hbWUiLCJfcmVmMzciLCJ0b29sdGlwVGV4dCIsIiRkZCIsIl90aGlzMTYiLCJfcmVmMzgiLCJfcmVmMzgkIiwiX3JlZjM4JCR2YWx1ZVRvb2x0aXBzIiwiX3JlZjM5IiwiX3JlZjQwIiwiX3JlZjQxIiwic2hvd25PcHRpb25zIiwiX3JlZjQyIiwiZGVmYXVsdE9wdGlvbnMiLCJfcmVmNDMiLCJwcmVmaWxsIiwic2VsZWN0ZWRfZGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsIl9yZWY0NCIsInNlbGVjdGVkIiwiY2hlY2tib3hPcHRpb25zIiwiX3JlZjQ1Iiwibm9WYWx1ZSIsImZpbGVPcHRpb25zIiwiX3JlZjQ2IiwicGFydGlhbCIsImRhdGVPcHRpb25zIiwiX3JlZjQ3IiwiZHJvcGRvd25PcHRpb25zIiwiX3JlZjQ4IiwidGV4dE9wdGlvbnMiLCJfcmVmNDkiLCJfcmVmNTAiLCJfdmFsdWVzJGZpbmQiLCJfcmVmNTEiLCJfcmVmNTIiLCJjaGVja2VkIiwiX3JlZjUzIiwicGFyYW1zIiwicHJlbG9hZGVyIiwicHJpY2VIdG1sIiwicHJpY2VUZXh0Iiwic3VidG90YWxIdG1sIiwiJHByaWNlIiwiJG9sZCIsIiRwbGFjZWhvbGRlciIsIl90aGlzJHByb2R1Y3RPcHRpb25zIiwiX3RoaXMxNyIsIl9yZWY1NCIsIl9zaG93T3B0aW9uUHJpY2VzIiwiX2NhbGxlZTgiLCJpZ25vcmVVcGRhdGVTdWJ0b3RhbCIsIl90aGlzMTgiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwkIiwic2hvd1ByaWNlIiwiX2NvbnRleHQ4IiwiX2lkIiwiX3JlZjU1IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJhYnMiLCJfcmVmNTYiLCJfYWRqdXN0ZWRQcmljZXNXaXRoVGEiLCJfYWRqdXN0ZWRQcmljZXNXaXRoVGEyIiwiX2FkanVzdGVkUHJpY2VzV2l0aG91IiwiX2FkanVzdGVkUHJpY2VzV2l0aG91MiIsInRheCIsInBkcCIsInByaWNlV2l0aFRheFZhbHVlIiwicHJpY2VXaXRoVGF4Iiwibm9uU2FsZVByaWNlV2l0aFRheFZhbHVlIiwicHJpY2VXaXRob3V0VGF4VmFsdWUiLCJwcmljZVdpdGhvdXRUYXgiLCJub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWUiLCJfbm9uZVNhbGVzJG9wdGlvbklkIiwibm9uU2FsZSIsIl9hZGp1c3RlZFByaWNlc1dpdGhvdTMiLCJfYWRqdXN0ZWRQcmljZXNXaXRoVGEzIiwiZXhjaGFuZ2VkTm9uU2FsZSIsImV4Y2hhbmdlUmF0ZSIsInByaWNlVmFsdWUiLCJwcmljZVNlbGVjdG9yIiwic2hvd09wdGlvblN1YnRvdGFsIiwiX3gwIiwiX3gxIiwiX3gxMCIsIl94MTEiLCJfeDEyIiwiX3gxMyIsIl9wcm9kdWN0JHByaWNlc1dpdGhUYSIsIl9wcm9kdWN0JHByaWNlc1dpdGhvdSIsInR4dFN1YnRvdGFsIiwidHh0UmV2aWV3U2VsZWN0aW9ucyIsIm9wdGlvbnMiLCIkc3VidG90YWwiLCJfb3B0aW9uJHZhbHVlcyIsIl8kbW9kaWZpZXJzTW9kYWxPcHRpbyIsImRheVN0ciIsIm1vbnRoU3RyIiwieWVhclN0ciIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ2YWx1ZVN0ciIsIl9yZWY1NyIsIm9wdGlvbkVsUHJpY2VIdG1sIiwic3VtbWFyeUh0bWwiLCJwYXJzZURhdGVUaW1lU3RyaW5nIiwic3RyIiwicmVnZXgiLCJzaG9ydE1vbnRoIiwic2hvcnREYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwic2hvcnRIb3VyIiwic2hvcnRNaW51dGUiLCJzaW5nbGVUaW1lQ29tcG9uZW50IiwidHpTaWduIiwidHpIb3VyT2Zmc2V0IiwidHpNaW51dGVPZmZzZXQiLCJwYXJzZUludCIsInNpZ24iLCJ0ekhvdXIiLCJ0ek1pbnV0ZSIsInRpbWV6b25lIiwicGFyc2VDb3VudGRvd25EYXRlIiwicGFyc2VkRGF0ZSIsIm5vdyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiaCIsIm1pbiIsInNlYyIsImRhdGUiLCJ1dGNNaWxsaXMiLCJVVEMiLCJzZXRGdWxsWWVhciIsInNldE1vbnRoIiwic2V0RGF0ZSIsInNldEhvdXJzIiwic2V0TWludXRlcyIsInNldFNlY29uZHMiLCJlbGVtZW50cyIsInRpbWVyIiwib2JzZXJ2ZXIiLCJkYXRlRGF0YU5hbWUiLCJpblZpZXdwb3J0RGF0YU5hbWUiLCJ0cmFuc2xhdGlvbnNEYXRhTmFtZSIsInNlbGVjdG9ycyIsImVuZExhYmVsIiwiZGF5VmFsdWUiLCJkYXlMYWJlbCIsImhvdXJWYWx1ZSIsImhvdXJMYWJlbCIsIm1pbnV0ZVZhbHVlIiwibWludXRlTGFiZWwiLCJzZWNvbmRWYWx1ZSIsInNlY29uZExhYmVsIiwidGVtcGxhdGUiLCJoaWRlQ2xhc3MiLCJzYWxlRW5kQ2xhc3MiLCJhY3RpdmVDbGFzcyIsInRyYW5zbGF0aW9ucyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwianNvbiIsInRyYW5zIiwia2V5cyIsIl90cmFucyIsInNob3J0S2V5IiwidmFsaWREYXRlIiwib2JzZXJ2ZSIsInN0YXJ0IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdCIsInRocmVzaG9sZCIsInVub2JzZXJ2ZSIsImlzVmlzaWJsZUluVmlld3BvcnQiLCJzaXplIiwicnVuIiwic3RvcCIsImRpc2Nvbm5lY3QiLCJib2R5IiwiY29udGFpbnMiLCJkaWZmIiwiZmxvb3IiLCIkZW5kTGFiZWwiLCIkZGF5IiwiJGRheVZhbHVlIiwiJGRheUxhYmVsIiwiJGhvdXIiLCIkaG91clZhbHVlIiwiJGhvdXJMYWJlbCIsIiRtaW51dGUiLCIkbWludXRlVmFsdWUiLCIkbWludXRlTGFiZWwiLCIkc2Vjb25kIiwiJHNlY29uZFZhbHVlIiwiJHNlY29uZExhYmVsIiwidG9nZ2xlQ2xhc3MiLCJhcmlhS2V5Q29kZXMiLCJSRVRVUk4iLCJTUEFDRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsImluaXRSYWRpb09wdGlvbnMiLCJzZXRDaGVja2VkUmFkaW9JdGVtIiwiaXRlbUNvbGxlY3Rpb24iLCJpdGVtSWR4IiwiaWR4IiwiaXRlbSIsIiRpdGVtIiwiY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uIiwibGFzdEl0ZW1JZHgiLCJjdXJyZW50SWR4IiwiaGFuZGxlSXRlbUtleURvd24iLCJrZXlDb2RlIiwibGFzdENvbGxlY3Rpb25JdGVtSWR4Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldkl0ZW1JZHgiLCJuZXh0SXRlbUlkeCIsIiRjb250YWluZXIiLCJpdGVtU2VsZWN0b3IiLCIkaXRlbUNvbGxlY3Rpb24iLCJvcHRpb25zVHlwZXNNYXAiLCJJTlBVVF9GSUxFIiwiSU5QVVRfVEVYVCIsIklOUFVUX05VTUJFUiIsIklOUFVUX0NIRUNLQk9YIiwiVEVYVEFSRUEiLCJEQVRFIiwiU0VUX1NFTEVDVCIsIlNFVF9SRUNUQU5HTEUiLCJTRVRfUkFESU8iLCJTV0FUQ0giLCJQUk9EVUNUX0xJU1QiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJhcmVEZWZhdWx0T3B0aW9uc1NldCIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwiZ2V0VGFiUmVxdWVzdHMiLCJfXyIsIl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlIiwidmFyaWFudERvbU5vZGUiLCJ2YXJpYW50VHlwZSIsInJhZGlvIiwiJHJhZGlvIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsImVuYWJsZUF0dHJpYnV0ZSIsImRpc2FibGVBdHRyaWJ1dGUiLCJsb2NhdGlvbiIsImhhc2giLCIkYWN0aXZlVGFiIiwiJHRhYkNvbnRlbnQiLCJycnBXaXRoVGF4IiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJGFkZFRvQ2FydEZvcm0iLCIkd2lzaGxpc3RWYXJpYXRpb24iLCJzdG9jayIsIiRpbnB1dCIsInNrdSIsInVwYyIsInF1YW50aXR5IiwiJGJ1bGtQcmljaW5nIiwiJHdhbGxldEJ1dHRvbnMiLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsInZpZXdNb2RlbCIsIm1lc3NhZ2UiLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwic2hvd01lc3NhZ2VCb3giLCJ1cGRhdGVQcmljZVZpZXciLCJ3ZWlnaHQiLCJ2YXJpYW50SWQiLCJ1cGRhdGVXYWxsZXRCdXR0b25zVmlldyIsImJ1bGtfZGlzY291bnRfcmF0ZXMiLCJhZGRUb0NhcnRXcmFwcGVyIiwidXBkYXRlZFByaWNlIiwicHJpY2VfcmFuZ2UiLCJtYXgiLCJzYXZlZCIsIiRtZXNzYWdlQm94IiwiaXNWYWxpZEZvcm0iLCJ0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eSIsInNob3VsZFNob3ciLCJnZXRBdHRyaWJ1dGVUeXBlIiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJwYXJlbnQiLCJ0b2dnbGVPcHRpb24iLCJzZWxlY3RlZEluZGV4IiwibW9kYWxGYWN0b3J5Iiwibm9kIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImZvcm1zIiwibm9ybWFsaXplRm9ybURhdGEiLCJjb252ZXJ0SW50b0FycmF5IiwiYmFubmVyVXRpbHMiLCJjdXJyZW5jeVNlbGVjdG9yIiwiX1Byb2R1Y3REZXRhaWxzQmFzZSIsInByb2R1Y3RBdHRyaWJ1dGVzRGF0YSIsImxpc3RlblF1YW50aXR5Q2hhbmdlIiwiJHN3YXRjaE9wdGlvbk1lc3NhZ2UiLCJzd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2UiLCJzd2F0Y2hHcm91cElkTGlzdCIsImdyb3VwIiwic3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcyIsInVwZGF0ZURhdGVTZWxlY3RvciIsInVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSIsImFkZFRvQ2FydFZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJoYXNPcHRpb25zIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCIkcHJvZHVjdFN3YXRjaEdyb3VwIiwiJHByb2R1Y3RTd2F0Y2hMYWJlbHMiLCJwbGFjZVN3YXRjaExhYmVsSW1hZ2UiLCIkb3B0aW9uSW1hZ2UiLCJvcHRpb25JbWFnZVdpZHRoIiwib3V0ZXJXaWR0aCIsImV4dGVuZGVkT3B0aW9uSW1hZ2VPZmZzZXRMZWZ0IiwiX2xhYmVsJGdldEJvdW5kaW5nQ2xpIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlnaHQiLCJlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlciIsInNjcmVlbiIsInNoaWZ0VmFsdWUiLCJyZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24iLCJzaG93U3dhdGNoTmFtZXMiLCJzd2F0Y2hHcm91cEVsZW1lbnQiLCJwYXJlbnROb2RlIiwic2hvd1N3YXRjaE5hbWVPbk9wdGlvbiIsImVsZW1lbnQiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCJzZXRQcm9kdWN0VmFyaWFudCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIl9pc0VtcHR5IiwiJHByb2R1Y3RJZCIsIm9wdGlvbkNoYW5nZUNhbGxiYWNrIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJkaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudCIsInZhbGlkYXRlIiwiY2IiLCJudW1iZXJzT25seSIsImVycm9yTWVzc2FnZSIsInByb2R1Y3RRdWFudGl0eUVycm9yTWVzc2FnZSIsInN3YXRjaEdyb3VwSWQiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsIm9wdGlvblRpdGxlIiwiaXNTYXRpc2ZpZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGF0ZVN0cmluZyIsIngiLCJnZXRTZWxlY3RlZE9wdGlvbkxhYmVsIiwicHJvZHVjdFZhcmlhbnRzbGlzdCIsIm1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQiLCJpbnB0IiwiZGF0YXNldCIsInByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSIsImxhYmVscyIsInByb2R1Y3RWYXJpYW50IiwidmlldyIsInByb2R1Y3ROYW1lIiwiY2FyZCIsIndhc1JlcXVpcmVkIiwiaXNSdW5uaW5nSW5JZnJhbWUiLCJzZWxmIiwidG9wIiwiJGNoYW5nZWRPcHRpb24iLCJwYXJlbnRzIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50IiwiJGNvbnRleHQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGV0YWlsIiwiJHN3YXRjaCIsIiRzd2F0Y2hHcm91cCIsInN3YXRjaE5hbWUiLCJhY3RpdmVTd2F0Y2hHcm91cElkIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwicm9sZSIsIl9pc1BsYWluT2JqZWN0Iiwic2V0QWx0ZXJuYXRlSW1hZ2UiLCJyZXN0b3JlSW1hZ2UiLCIkdGFyZ2V0IiwicXVhbnRpdHlNaW4iLCJxdWFudGl0eU1heCIsInZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkiLCJ2YWxpZGF0ZURlY3JlYXNlQWdhaW5zdE1pbkJvdW5kYXJ5Iiwid2hpY2giLCIkYWRkVG9DYXJ0QnRuIiwiaXRlbUFkZCIsImNhcnRfaWQiLCJvcGVuIiwiQXBwbGVQYXlTZXNzaW9uIiwiJG1vZGFsIiwiY2FydF9pdGVtIiwicmVkaXJlY3RUbyIsImNhcnRfdXJsIiwidXJscyIsImdldENhcnRDb250ZW50IiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCJzdWdnZXN0IiwiY29uZmlnIiwic3VnZ2VzdGlvbnMiLCJnZXRDb250ZW50IiwiaWZyYW1lU2RrIiwibW9kYWwiLCJ1cGRhdGVDb250ZW50IiwiJGNhcnRRdWFudGl0eSIsIiRjb250ZW50IiwiJGNhcnRDb3VudGVyIiwiJHByb21vdGlvbkJhbm5lciIsIiRiYWNrVG9TaG9wcHBpbmdCdG4iLCIkbW9kYWxDbG9zZUJ0biIsImJhbm5lclVwZGF0ZUhhbmRsZXIiLCIkcHJvZHVjdENvbnRhaW5lciIsInJlbG9hZCIsImZvcm1EYXRhSXRlbXMiLCJzZXJpYWxpemVBcnJheSIsInByb2R1Y3REZXRhaWxzIiwiZm9ybURhdGFJdGVtIiwicHJvZHVjdE9wdGlvbiIsIm9wdGlvblZhbHVlIiwib3B0aW9uU2VsZWN0aW9ucyIsInNjb3BlIiwidXBkYXRlRGF5cyIsImRhdGVPcHRpb24iLCJtb250aFNlbGVjdG9yIiwiZGF5U2VsZWN0b3IiLCJ5ZWFyU2VsZWN0b3IiLCJkYXlzSW5Nb250aCIsImlzTmFOIiwiT3B0aW9uIiwiZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSIsInJlcyIsIl9zdGVwJHZhbHVlIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsImV2dCIsImFtb3VudCIsImRvY3VtZW50TW9kZSIsImNvbGxlY3Rpb24iLCIkbWFpbkltYWdlTmVzdGVkIiwiJHNlbGVjdGFibGVJbWFnZXMiLCJzZXRJbWFnZVpvb20iLCJpbWdPYmoiLCJzYXZlZEltYWdlIiwiJHNlbGVjdGVkVGh1bWIiLCJzZWxlY3ROZXdJbWFnZSIsIm1haW5JbWFnZUFsdCIsImFsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9