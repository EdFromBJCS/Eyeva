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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX3Byb2R1Y3QtZGV0YWlsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEs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Q0FBQTtRQUFBLE9BQVExRyxLQUFJLENBQUNpRyxVQUFVLENBQUMsQ0FBQztNQUFBO01BQy9CVSxXQUFXLEVBQUUsRUFBRTtNQUNmQyxhQUFhLEVBQUU7SUFDbkIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBOUcsTUFBQSxDQUVEQyxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDNG5DLGlCQUFpQixDQUFDeG5DLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDNm5DLGNBQWMsQ0FBQ2hyQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDdEUsQ0FBQztFQUFBLE9BQUF1UCxZQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2V5ZXZhL2ltYWdlLWdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9leWV2YS9wcm9kdWN0LWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9zYWxlLWNvdW50ZG93bi5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvcmFkaW9PcHRpb25zLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMtYmFzZS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Jhbm5lci11dGlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvaWUtaGVscGVycy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L2ltYWdlLWdhbGxlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdlYXN5em9vbSc7XG5pbXBvcnQgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xuaW1wb3J0IHsgY3JlYXRlRm9jdXNUcmFwIH0gZnJvbSAnZm9jdXMtdHJhcCc7XG5pbXBvcnQgeyB0b29scyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDb3JuZXJzdG9uZUltYWdlR2FsbGVyeSBmcm9tICcuLi8uLi90aGVtZS9wcm9kdWN0L2ltYWdlLWdhbGxlcnknO1xuXG5jb25zdCBERUZBVUxUX1NURVAgPSAzNjA7XG5jbGFzcyBJbWFnZUdhbGxlcnlNb2RhbCB7XG4gICAgbW9kYWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1vdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1jbG9zZVwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkNsb3NlXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkNsb3NlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+PHVzZSBocmVmPVwiI2ljb24teG1hcmstbGFyZ2VcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi1lYXN5em9vbVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4taW1nLWNvbnRhaW5lclwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1tYWluLWltZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Jm1haW5JbWFnZUxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLTM2MFwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLTM2MC1pbWctY29udGFpbmVyXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1pbWctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBkYXRhLXNpemVzPVwiYXV0b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC0zNjAtY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcHJldmlvdXNcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXByZXZpb3VzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1hcnJvdy1sZWZ0LWxvbmdcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcGxheVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGxheT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tcGxheVwiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UGxheTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLXBhdXNlXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wYXVzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tcGF1c2VcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlBhdXNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tbmV4dFwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtbmV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctcmlnaHQtbG9uZ1wiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi12aWRlb1wiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGF6eWxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2NDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzOTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRBbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW96YWxsb3dmdWxsc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRpdGxlXCI+e3tuYW1lfX08L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyN2aWRlb3MubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXZpZGVvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sYWJlbFwiPnt7dmlkZW9zTGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I3ZpZGVvc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey92aWRlb3N9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3svdmlkZW9zLmxlbmd0aH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlczM2MC5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3tpbWFnZXMzNjBMYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzMzYwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzMzYwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlczM2MC5sZW5ndGh9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXMubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWltYWdlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sYWJlbFwiPnt7aW1hZ2VzTGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXMubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJbWFnZUdhbGxlcnk/fSBpbWFnZUdhbGxlcnlcbiAgICAgKiBAcGFyYW0ge2pRdWVyeT99ICRnYWxsZXJ5XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW1hZ2VHYWxsZXJ5ID0gbnVsbCwgJGdhbGxlcnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5ID0gaW1hZ2VHYWxsZXJ5O1xuICAgICAgICB0aGlzLiRnYWxsZXJ5ID0gJGdhbGxlcnk7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgICAgICAgaWYgKGltYWdlR2FsbGVyeSAmJiAkZ2FsbGVyeSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgaWYgKHRoaXMuJGdhbGxlcnkpIHtcbiAgICAgICAgICAgIC8vIG9wZW4gbW9kYWwgd2hlbiBjbGljayBvbiB2aWRlbywgMzYwIHZpZXcsIG9yIG1vcmUgaW1hZ2UgdGh1bWJuYWlsc1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeVxuICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW9dLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLW1vcmVdJylcbiAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2snKVxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmNzZXQgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSAkYS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXScpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKGltYWdlVXJsLCBpbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB2aWRlb0lkLCBzdGVwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsb3NlIG1vZGFsIHdoZW4gY2xpY2sgY2xvc2UgYnV0dG9uXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIHByZXNzIEVzY2FwZSBrZXlcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLm9uKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNsb3NlIG1vZGFsIHdoZW4gY2xpY2sgb3V0c2lkZSAob3ZlcmxheSlcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGdhbGxlcnlNb2RhbC5pcyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW1hZ2UgdGh1bWJuYWlsc1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHZpZGVvIHRodW1ibmFpbHNcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKHZpZGVvSWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAzNjAgaW1hZ2UgdGh1bWJuYWlsc1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3JdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdG90YWxTdGVwID0gJGEuZGF0YSgnZXlldmFJbWFnZUdhbGxlcnlNb2RhbEl0ZW1Sb3RhdG9yJyk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW4zNjAoXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgIHRvdGFsU3RlcCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wcmV2aW91c10nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzMzYwU3RlcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtbmV4dF0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLm5leHQzNjBTdGVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wbGF5XScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucGxheTM2MCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGF1c2VdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wYXVzZTM2MCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95TW9kYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLiRnYWxsZXJ5TW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbCA9ICQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZU1vZGFsKCkge1xuICAgICAgICBjb25zdCAkbWFpbkltYWdlTGluayA9IHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuZmluZCgnYScpLmNsb25lKCk7XG4gICAgICAgICRtYWluSW1hZ2VMaW5rLmZpbmQoJ2ltZycpLnJlbW92ZUF0dHIoJ2RhdGEtem9vbS1pbWFnZScpLmF0dHIoJ2RhdGEtZXlldmEtZ2FsbGVyeS1tb2RhbC1tYWluLWltYWdlJywgJycpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZUxpbmtFbGVtZW50ID0gJG1haW5JbWFnZUxpbmsuZ2V0KDApPy5vdXRlckhUTUw7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLiRnYWxsZXJ5LmNsb3Nlc3QoJy5wcm9kdWN0VmlldycpLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtdGl0bGVdJykudGV4dCgpO1xuICAgICAgICBjb25zdCB2aWRlb3NMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgndmlkZW9zTGFiZWwnKSB8fCAnVmlkZW9zJztcbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwTGFiZWwgPSB0aGlzLiRnYWxsZXJ5LmRhdGEoJ2ltYWdlczM2MExhYmVsJykgfHwgJzM2MCBWaWV3JztcbiAgICAgICAgY29uc3QgaW1hZ2VzTGFiZWwgPSB0aGlzLiRnYWxsZXJ5LmRhdGEoJ2ltYWdlc0xhYmVsJykgfHwgJ1Byb2R1Y3QgSW1hZ2VzJztcblxuICAgICAgICBjb25zdCB2aWRlb3MgPSB0aGlzLiRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10nKS5nZXQoKS5tYXAobGkgPT4gKHtcbiAgICAgICAgICAgIGxpbmtFbGVtZW50OiAkKGxpKS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykuY2xvbmUoKS5nZXQoMCk/Lm91dGVySFRNTCxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGltYWdlczM2MCA9IHRoaXMuJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0nKS5nZXQoKS5tYXAobGkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChsaSkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpLmNsb25lKCk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9ICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpO1xuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcihpbWFnZVVybC5zcGxpdCgnIycpWzFdKSB8fCBERUZBVUxUX1NURVA7XG4gICAgICAgICAgICAkZWwucmVtb3ZlQXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0nKS5hdHRyKCdkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yJywgc3RlcCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICRlbC5nZXQoMCk/Lm91dGVySFRNTCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpLmdldCgpXG4gICAgICAgICAgICAuZmlsdGVyKGEgPT4gJChhKS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW9dLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLW1vcmVdJykubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkYSA9ICQoYSkuY2xvbmUoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0nLCAnJyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogJGEuZ2V0KDApPy5vdXRlckhUTUwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kYWxUZW1wbGF0ZSwge1xuICAgICAgICAgICAgbWFpbkltYWdlTGlua0VsZW1lbnQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmlkZW9zTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXMzNjBMYWJlbCxcbiAgICAgICAgICAgIGltYWdlc0xhYmVsLFxuICAgICAgICAgICAgdmlkZW9zLFxuICAgICAgICAgICAgaW1hZ2VzMzYwLFxuICAgICAgICAgICAgaW1hZ2VzLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmhpZGUoKS5hcHBlbmRUbyh0aGlzLiRib2R5KTtcblxuICAgICAgICB0aGlzLmluaXRJbWFnZVpvb20oKTtcblxuICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IGNyZWF0ZUZvY3VzVHJhcCh0aGlzLiRnYWxsZXJ5TW9kYWwuZ2V0KDApLCB7XG4gICAgICAgICAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgICAgICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKGltYWdlVXJsLCBpbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB2aWRlb0lkLCB0b3RhbFN0ZXApIHtcbiAgICAgICAgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRib2R5LmFkZENsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xuXG4gICAgICAgIGlmICh0aGlzLmltYWdlR2FsbGVyeSkge1xuICAgICAgICAgICAgY29uc3QgJG1haW5JbWcgPSB0aGlzLmltYWdlR2FsbGVyeS4kbWFpbkltYWdlLmZpbmQoJ2ltZycpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoXG4gICAgICAgICAgICAgICAgJG1haW5JbWcuYXR0cignc3JjJyksXG4gICAgICAgICAgICAgICAgJG1haW5JbWcuYXR0cignc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuJG1haW5JbWFnZS5hdHRyKCdkYXRhLXpvb20taW1hZ2UnKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlkZW9JZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8odmlkZW9JZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodG90YWxTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW4zNjAoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19vcGVuaW5nJykuc2hvdygpLnJlbW92ZUNsYXNzKCdfb3BlbmluZycpO1xuICAgICAgICB0aGlzLmZvY3VzVHJhcC5hY3RpdmF0ZSgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2VdJykudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19jbG9zaW5nJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlTWFpblZpZGVvKCk7XG4gICAgICAgICAgICB0aGlzLmhpZGUzNjBVSSgpO1xuICAgICAgICAgICAgdGhpcy4kYm9keS5yZW1vdmVDbGFzcygnX2dhbGxlcnlNb2RhbC1vcGVuZWQnKTtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5yZW1vdmVDbGFzcygnX2Nsb3NpbmcnKS5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcC5kZWFjdGl2YXRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQpIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50LnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgc2V0TWFpbkltYWdlKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwpIHtcbiAgICAgICAgdGhpcy5oaWRlTWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuaGlkZTM2MFVJKCk7XG4gICAgICAgIHRoaXMuc2hvd01haW5JbWFnZSgpO1xuXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwpO1xuICAgIH1cblxuICAgIHNob3dNYWluSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpLnNob3coKTtcbiAgICB9XG5cbiAgICBoaWRlTWFpbkltYWdlKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsLCB2aWRlb0lkKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmxdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAuZmlsdGVyKChfaSwgYSkgPT5cbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmwgJiYgJChhKS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpID09PSBtYWluSW1hZ2VVcmxcbiAgICAgICAgICAgICAgICB8fCB2aWRlb0lkICYmICQoYSkuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKSA9PT0gdmlkZW9JZClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgc3dhcE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKSB7XG4gICAgICAgIGNvbnN0ICRpbWFnZUNvbnRhaW5lciA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpO1xuICAgICAgICBjb25zdCAkYSA9ICRpbWFnZUNvbnRhaW5lci5maW5kKCdhJyk7XG4gICAgICAgIGNvbnN0ICRtYWluSW1hZ2UgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtZ2FsbGVyeS1tb2RhbC1tYWluLWltYWdlXScpO1xuXG4gICAgICAgICRpbWFnZUNvbnRhaW5lci5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xuICAgICAgICAkYS5hdHRyKCdocmVmJywgem9vbUltYWdlVXJsKTtcbiAgICAgICAgJG1haW5JbWFnZS5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldCk7XG5cbiAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLnN3YXAoXG4gICAgICAgICAgICBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaXNCcm93c2VySUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdUcmlkZW50Jyk7XG4gICAgICAgIGlmIChpc0Jyb3dzZXJJRSkge1xuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZXNJRSA9IHtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoJHttYWluSW1hZ2VVcmx9KWAsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1vcmlnaW4nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY29udGFpbicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZV0nKS5jc3MoZmFsbGJhY2tTdHlsZXNJRSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltYWdlKCkge1xuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1tYWluLWltZy1jb250YWluZXJdJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICRpbWFnZUNvbnRhaW5lci5oZWlnaHQoKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSAkaW1hZ2VDb250YWluZXIud2lkdGgoKTtcblxuICAgICAgICBjb25zdCAkaW1hZ2UgPSB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuJHpvb207XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICRpbWFnZS5oZWlnaHQoKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAkaW1hZ2Uud2lkdGgoKTtcblxuICAgICAgICBpZiAoaGVpZ2h0IDwgY29udGFpbmVySGVpZ2h0IHx8IHdpZHRoIDwgY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0SW1hZ2Vab29tKCkge1xuICAgICAgICB0aGlzLmVhc3l6b29tID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJykuZWFzeVpvb20oe1xuICAgICAgICAgICAgb25TaG93OiAoKSA9PiB0aGlzLmNoZWNrSW1hZ2UoKSxcbiAgICAgICAgICAgIGVycm9yTm90aWNlOiAnJyxcbiAgICAgICAgICAgIGxvYWRpbmdOb3RpY2U6ICcnLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXJdJykuc2hvdygpO1xuICAgIH1cblxuICAgIGhpZGVNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllcl0nKS5oaWRlKClcbiAgICAgICAgICAgIC5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCAnJyk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKHZpZGVvSWQpIHtcbiAgICAgICAgdGhpcy5oaWRlTWFpbkltYWdlKCk7XG4gICAgICAgIHRoaXMuaGlkZTM2MFVJKCk7XG4gICAgICAgIHRoaXMuc2hvd01haW5WaWRlbygpO1xuXG4gICAgICAgIGNvbnN0IHNyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P3JlZj0wJmF1dG9wbGF5PTFgO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXJdJykuc2hvdygpLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobnVsbCwgdmlkZW9JZCk7XG4gICAgfVxuXG4gICAgc2V0TWFpbjM2MChtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApIHtcbiAgICAgICAgdGhpcy5oaWRlTWFpbkltYWdlKCk7XG4gICAgICAgIHRoaXMuaGlkZU1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNob3czNjBVSSgpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKG1haW5JbWFnZVVybCk7XG4gICAgICAgIHRoaXMuc3dhcE1haW4zNjAobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKTtcbiAgICB9XG5cbiAgICBzd2FwTWFpbjM2MChtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLWltZy1jb250YWluZXJdIGltZycpXG4gICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxuICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xuICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKDAsIHRvdGFsU3RlcCk7XG4gICAgfVxuXG4gICAgc2hvdzM2MFVJKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykuc2hvdygpO1xuICAgIH1cblxuICAgIGhpZGUzNjBVSSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLmhpZGUoKTtcbiAgICAgICAgdGhpcy5wYXVzZTM2MCgpO1xuICAgIH1cblxuICAgIHNldDM2MEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwLCB0b3RhbFN0ZXAgPSBERUZBVUxUX1NURVApIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpXG4gICAgICAgICAgICAuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JywgY3VycmVudFN0ZXApXG4gICAgICAgICAgICAuY3NzKCctLWltYWdlLTM2MC1zdGVwcycsIHRvdGFsU3RlcCk7XG4gICAgfVxuXG4gICAgbmV4dDM2MFN0ZXAoKSB7XG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKTtcbiAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JykpIHx8IDA7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJykpIHx8IERFRkFVTFRfU1RFUDtcblxuICAgICAgICBpZiAoc3RlcCA8IHRvdGFsIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcChzdGVwICsgMSwgdG90YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcCgwLCB0b3RhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2aW91czM2MFN0ZXAoKSB7XG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKTtcbiAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1jdXJyZW50JykpIHx8IDA7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJykpIHx8IERFRkFVTFRfU1RFUDtcblxuICAgICAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoc3RlcCAtIDEsIHRvdGFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAodG90YWwgLSAxLCB0b3RhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5MzYwKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwzNjApO1xuICAgICAgICB0aGlzLmludGVydmFsMzYwID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0MzYwU3RlcCgpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykuYWRkQ2xhc3MoJ19wbGF5aW5nJyk7XG4gICAgfVxuXG4gICAgcGF1c2UzNjAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbDM2MCk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5yZW1vdmVDbGFzcygnX3BsYXlpbmcnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkSW1hZ2VHYWxsZXJ5TW9kYWwgZXh0ZW5kcyBJbWFnZUdhbGxlcnlNb2RhbCB7XG4gICAgbG9hZGluZ01vZGFsVGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtb3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheSBleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbG9hZGluZ1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgJHNjb3BlLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9kdWN0SWQsXG4gICAgICAgICAgICBncmFwaFFMVG9rZW4sXG4gICAgICAgICAgICB6b29tU2l6ZSxcbiAgICAgICAgICAgIHByb2R1Y3RTaXplLFxuICAgICAgICAgICAgdGh1bWJTaXplLFxuICAgICAgICAgICAgdHh0VmlkZW9zTGFiZWwsXG4gICAgICAgICAgICB0eHRJbWFnZXMzNjBMYWJlbCxcbiAgICAgICAgICAgIHR4dEltYWdlc0xhYmVsLFxuICAgICAgICB9ID0ge30sXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLnByb2R1Y3RJZCA9IHByb2R1Y3RJZDtcbiAgICAgICAgdGhpcy5ncmFwaFFMVG9rZW4gPSBncmFwaFFMVG9rZW47XG4gICAgICAgIHRoaXMuem9vbVNpemUgPSB6b29tU2l6ZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0U2l6ZSA9IHByb2R1Y3RTaXplO1xuICAgICAgICB0aGlzLnRodW1iU2l6ZSA9IHRodW1iU2l6ZTtcbiAgICAgICAgdGhpcy50eHRWaWRlb3NMYWJlbCA9IHR4dFZpZGVvc0xhYmVsO1xuICAgICAgICB0aGlzLnR4dEltYWdlczM2MExhYmVsID0gdHh0SW1hZ2VzMzYwTGFiZWw7XG4gICAgICAgIHRoaXMudHh0SW1hZ2VzTGFiZWwgPSB0eHRJbWFnZXNMYWJlbDtcbiAgICB9XG5cbiAgICBhc3luYyBvcGVuTG9hZGluZ01vZGFsKCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lNb2RhbCgpO1xuXG4gICAgICAgIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50ID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy4kYm9keS5hZGRDbGFzcygnX2dhbGxlcnlNb2RhbC1vcGVuZWQnKTtcblxuICAgICAgICAvLyBkaXNwbGF5IGxvYWRpbmcgbW9kYWxcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5sb2FkaW5nTW9kYWxUZW1wbGF0ZSkpO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuaGlkZSgpLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuYWRkQ2xhc3MoJ19vcGVuaW5nJykuc2hvdygpLnJlbW92ZUNsYXNzKCdfb3BlbmluZycpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRNb2RhbCgpIHtcbiAgICAgICAgLy8gZmV0Y2ggcHJvZHVjdCBkYXRhXG4gICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hQcm9kdWN0KCk7XG5cbiAgICAgICAgY29uc3QgbWFpbkltYWdlID0gdGhpcy5pbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pc0RlZmF1bHQpIHx8IHRoaXMuaW1hZ2VzWzBdO1xuICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB0b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQobWFpbkltYWdlLnVybFRlbXBsYXRlKTtcblxuICAgICAgICBjb25zdCBtYWluSW1hZ2VMaW5rRWxlbWVudCA9IGBcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIiR7bWFpbkltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybD1cIiR7bWFpbkltYWdlLnVybH1cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHttYWluSW1hZ2VTcmNzZXR9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke21haW5JbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICA+PGltZyBjbGFzcz1cImxhenlsb2FkXCIgc3JjPVwiJHttYWluSW1hZ2UudGh1bWJuYWlsVXJsfVwiIGRhdGEtc3Jjc2V0PVwiJHttYWluSW1hZ2VTcmNzZXR9XCIgZGF0YS1zaXplcz1cImF1dG9cIiBhbHQ9XCIke21haW5JbWFnZS5hbHRUZXh0fVwiIC8+PC9hPmA7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuJHNjb3BlLmZpbmQoJy5jYXJkLXRpdGxlJykudGV4dCgpO1xuICAgICAgICBjb25zdCB2aWRlb3NMYWJlbCA9IHRoaXMudHh0VmlkZW9zTGFiZWwgfHwgJ1ZpZGVvcyc7XG4gICAgICAgIGNvbnN0IGltYWdlczM2MExhYmVsID0gdGhpcy50eHRJbWFnZXMzNjBMYWJlbCB8fCAnMzYwIFZpZXcnO1xuICAgICAgICBjb25zdCBpbWFnZXNMYWJlbCA9IHRoaXMudHh0SW1hZ2VzTGFiZWwgfHwgJ1Byb2R1Y3QgSW1hZ2VzJztcblxuICAgICAgICBjb25zdCB2aWRlb3MgPSB0aGlzLnZpZGVvcy5tYXAodmlkZW8gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh2aWRlby51cmwpO1xuICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCd2Jyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiBgXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3ZpZGVvLnVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWQ9XCIke3ZpZGVvSWR9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpLyR7dmlkZW9JZH0vZGVmYXVsdC5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIGhyZWY9XCIjaWNvbi1wbGF5LXNvbGlkXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwID0gdGhpcy5pbWFnZXMzNjAubWFwKChpbWFnZVVybCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcihpbWFnZVVybC5zcGxpdCgnIycpWzFdKSB8fCBERUZBVUxUX1NURVA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiBgXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yPVwiJHtzdGVwfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybD1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsPVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VVcmx9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSBocmVmPVwiI2ljb24tMzYwXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy5pbWFnZXMubWFwKGltYWdlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlU3Jjc2V0ID0gdG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KGltYWdlLnVybFRlbXBsYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFZpZXctdGh1bWJuYWlsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7aW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsPVwiJHtpbWFnZS51cmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0PVwiJHtpbWFnZVNyY3NldH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsPVwiJHtpbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIHNyYz1cIiR7aW1hZ2UudGh1bWJuYWlsVXJsfVwiIGRhdGEtc3Jjc2V0PVwiJHtpbWFnZVNyY3NldH1cIiBkYXRhLXNpemVzPVwiYXV0b1wiIGFsdD1cIiR7aW1hZ2UuYWx0VGV4dH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0ICRnYWxsZXJ5TW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLm1vZGFsVGVtcGxhdGUsIHtcbiAgICAgICAgICAgIG1haW5JbWFnZUxpbmtFbGVtZW50LFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHZpZGVvc0xhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzMzYwTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXNMYWJlbCxcbiAgICAgICAgICAgIHZpZGVvcyxcbiAgICAgICAgICAgIGltYWdlczM2MCxcbiAgICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIHJlcGxhY2UgbG9hZGluZyBtb2RhbCB3aXRoIHRoZSBhY3R1YWwgbW9kYWxcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmh0bWwoJGdhbGxlcnlNb2RhbC5odG1sKCkpO1xuXG4gICAgICAgIHRoaXMuaW5pdEltYWdlWm9vbSgpO1xuXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGdhbGxlcnlNb2RhbC5nZXQoMCksIHtcbiAgICAgICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBvcGVuTW9kYWwoe1xuICAgICAgICBmaXJzdFZpZGVvID0gZmFsc2UsXG4gICAgICAgIGZpcnN0MzYwID0gZmFsc2UsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMub3BlbkxvYWRpbmdNb2RhbCgpO1xuXG4gICAgICAgIHRoaXMubG9hZE1vZGFsKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZmlyc3RWaWRlbykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLmZpcnN0KCkuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1haW5WaWRlbyh2aWRlb0lkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpcnN0MzYwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yXScpLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2V5ZXZhSW1hZ2VHYWxsZXJ5TW9kYWxJdGVtUm90YXRvcicpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlXScpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaFByb2R1Y3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlcyB8fCB0aGlzLnZpZGVvcyB8fCB0aGlzLmltYWdlczM2MCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IFt6b29tV2lkdGgsIHpvb21IZWlnaHRdID0gdGhpcy56b29tU2l6ZS5zcGxpdCgneCcpLm1hcChOdW1iZXIpO1xuICAgICAgICBjb25zdCBbaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHRdID0gdGhpcy5wcm9kdWN0U2l6ZS5zcGxpdCgneCcpLm1hcChOdW1iZXIpO1xuICAgICAgICBjb25zdCBbdGh1bWJXaWR0aCwgdGh1bWJIZWlnaHRdID0gdGhpcy50aHVtYlNpemUuc3BsaXQoJ3gnKS5tYXAoTnVtYmVyKTtcblxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5KFxuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RJZDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR6b29tV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkem9vbUhlaWdodDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbWFnZVdpZHRoOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlSGVpZ2h0OiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHRodW1iV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGh1bWJIZWlnaHQ6IEludCFcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0KGVudGl0eUlkOiAkcHJvZHVjdElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCh3aWR0aDogJGltYWdlV2lkdGgsIGhlaWdodDogJGltYWdlSGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxVcmw6IHVybCh3aWR0aDogJHRodW1iV2lkdGgsIGhlaWdodDogJHRodW1iSGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tVXJsOiB1cmwod2lkdGg6ICR6b29tV2lkdGgsIGhlaWdodDogJHpvb21IZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkcyhuYW1lczogW1wiX19AMzYwXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3RJZCxcbiAgICAgICAgICAgICAgICAgICAgem9vbVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICB6b29tSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJIZWlnaHQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuZ3JhcGhRTFRva2VufWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgW2ltYWdlcywgdmlkZW9zLCBpbWFnZXMzNjBdID0gW1xuICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdC5pbWFnZXMuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gbm9kZSksXG4gICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LnZpZGVvcy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiBub2RlKSxcbiAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QuY3VzdG9tRmllbGRzLmVkZ2VzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeyBub2RlIH0pID0+IG5vZGUubmFtZSA9PT0gJ19fQDM2MCcpXG4gICAgICAgICAgICAgICAgLm1hcCgoeyBub2RlIH0pID0+IG5vZGUudmFsdWUpLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e2FsdFRleHQ6IHN0cmluZywgaXNEZWZhdWx0OiBib29sZWFuLCB1cmw/OiBzdHJpbmcsIHRodW1ibmFpbFVybD86IHN0cmluZywgem9vbVVybD86IHN0cmluZywgdXJsVGVtcGxhdGU/OiBzdHJpbmd9Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e3RpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nfT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZpZGVvcyA9IHZpZGVvcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbWFnZXMzNjAgPSBpbWFnZXMzNjA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkgZXh0ZW5kcyBDb3JuZXJzdG9uZUltYWdlR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGdhbGxlcnkpIHtcbiAgICAgICAgc3VwZXIoJGdhbGxlcnkpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeU1vZGFsID0gbmV3IEltYWdlR2FsbGVyeU1vZGFsKHRoaXMsICRnYWxsZXJ5KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBzdXBlci5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5TW9kYWwuYmluZEV2ZW50cygpO1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXHJcbi8vIGltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XHJcbmltcG9ydCBDb3JuZXJzdG9uZVByb2R1Y3REZXRhaWxzIGZyb20gJy4uLy4uL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xyXG5pbXBvcnQgeyBhbGVydE1vZGFsLCBzaG93QWxlcnRNb2RhbCwgTW9kYWxFdmVudHMgfSBmcm9tICcuLi8uLi90aGVtZS9nbG9iYWwvbW9kYWwnO1xyXG5pbXBvcnQgeyBmaXhGb3JtRWxlbWVudFVuaXF1ZUlkcywgY3VycmVuY3lGb3JtYXQgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCBTYWxlQ291bnRkb3duIGZyb20gJy4uL3NhbGUtY291bnRkb3duJztcclxuXHJcbmNvbnN0IERFQlVHX0xPRyA9IGZhbHNlO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplT3B0aW9uU3RyaW5nID0gcyA9PiBzLnJlcGxhY2UoLzovZywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuZnVuY3Rpb24gZXF1YWxPcHRpb25TdHJpbmcoYSwgYikge1xyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZU9wdGlvblN0cmluZyhhKSA9PT0gbm9ybWFsaXplT3B0aW9uU3RyaW5nKGIpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdHdvIGFycmF5cyBhcmUgZXF1YWwgcmVnYXJkbGVzcyBvZiBvcmRlclxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIxXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycjJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBhcmVBcnJheXNFcXVhbFVub3JkZXJlZChhcnIxLCBhcnIyKSB7XHJcbiAgICBjb25zdCBfYXJyMSA9IGFycjEuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICBjb25zdCBfYXJyMiA9IGFycjIuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICByZXR1cm4gX2FycjEubGVuZ3RoID09PSBfYXJyMi5sZW5ndGggJiYgX2FycjEuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IF9hcnIyW2luZGV4XSk7XHJcbn1cclxuXHJcbmxldCBjYWNoZWRTZXR0aW5ncztcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGUgbXVsdGlwbGUgcHJvbWlzZXMgd2l0aCBhIGNvbmN1cnJlbmN5IGxpbWl0IChlLmcuLCBwcm9jZXNzaW5nIG9ubHkgMTAgcHJvbWlzZXMgYXQgYSB0aW1lIG91dCBvZiAxMClcclxuICpcclxuICogQHBhcmFtIHtBcnJheTxGdW5jdGlvbjxUPn0gcHJvbWlzZXMgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIGEgcHJvbWlzZVxyXG4gKiBAcGFyYW0geyp9IGxpbWl0IG51bWJlciBvZiBwcm9taXNlcyB0byBwcm9jZXNzIGF0IGEgdGltZVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTxUPj59IHJlc3VsdHMgb2YgYWxsIHByb21pc2VzXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVQcm9taXNlc1dpdGhMaW1pdChwcm9taXNlcywgbGltaXQgPSAxMCkge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgY29uc3QgZXhlY3V0aW5nID0gW107IC8vIFRyYWNrIHRoZSBwcm9taXNlcyBjdXJyZW50bHkgZXhlY3V0aW5nXHJcblxyXG4gICAgZm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XHJcbiAgICAgICAgLy8gU3RhcnQgdGhlIHByb21pc2UgYW5kIGFkZCBpdCB0byB0aGUgZXhlY3V0aW5nIGxpc3RcclxuICAgICAgICBjb25zdCBwID0gcHJvbWlzZSgpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaW5pc2hlZCBwcm9taXNlIGZyb20gZXhlY3V0aW5nIGxpc3RcclxuICAgICAgICAgICAgZXhlY3V0aW5nLnNwbGljZShleGVjdXRpbmcuaW5kZXhPZihwKSwgMSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHApO1xyXG4gICAgICAgIGV4ZWN1dGluZy5wdXNoKHApO1xyXG5cclxuICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgbGltaXQsIHdhaXQgZm9yIHRoZSBmaXJzdCB0byBmaW5pc2hcclxuICAgICAgICBpZiAoZXhlY3V0aW5nLmxlbmd0aCA+PSBsaW1pdCkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxyXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJhY2UoZXhlY3V0aW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2FpdCBmb3IgYWxsIHJlbWFpbmluZyBwcm9taXNlcyB0byBjb21wbGV0ZVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIENvcm5lcnN0b25lUHJvZHVjdERldGFpbHMge1xyXG4gICAgbW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1vdmVybGF5XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3ZlcmxheT48L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgbW9kaWZpZXJzTW9kYWxUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jbG9zZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJDbG9zZVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNsb3NlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkNsb3NlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+PHVzZSBocmVmPVwiI2ljb24teG1hcmstbGFyZ2VcIj48L3VzZT48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtYmFjay1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJCYWNrXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5CYWNrPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctbGVmdC1sb25nXCI+PC91c2U+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtaGVhZGVyLXRpdGxlXCI+PCUmcHJvZHVjdFRpdGxlJT48L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbnRlbnRcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC10aXRsZVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW4gY3VycmVudCBzdGVwJ3MgdGl0bGUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLW9wdGlvbnNcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIG1vZGlmaWVycyAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLXN1bW1hcnlcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1zdW1tYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIHN1bW1hcnkgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jb21wbGV0ZVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIGFkZCB0byBjYXJ0IGJ1dHRvbiAmIHF0eSBib3ggLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtZm9vdGVyXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY29udGludWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGludWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8JXR4dENvbnRpbnVlJT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1mb290ZXItc3VidG90YWxcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgc3VidG90YWwgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwlI21haW5JbWFnZVVybCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCI8JW1haW5JbWFnZVVybCU+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmNzZXQ9XCI8JW1haW5JbWFnZVNyY3NldCU+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS16b29tLWltYWdlPVwiPCV6b29tSW1hZ2VVcmwlPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2l6ZXM9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYXp5bG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWltZyAvPlxyXG4gICAgICAgICAgICAgICAgPCUvbWFpbkltYWdlVXJsJT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG9wdGlvblRvb2x0aXBUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi10b29sdGlwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXRvb2x0aXAtdHJpZ2dlclwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwiTW9yZSBpbmZvcm1hdGlvblwiIHRpdGxlPVwiTW9yZSBpbmZvcm1hdGlvblwiPmk8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXRvb2x0aXAtYnViYmxlXCI+PCV0b29sdGlwJT48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdmFsdWUtdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLXRyaWdnZXJcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbD1cIk1vcmUgaW5mb3JtYXRpb25cIiB0aXRsZT1cIk1vcmUgaW5mb3JtYXRpb25cIj5pPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLWJ1YmJsZVwiPjwldG9vbHRpcCU+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy12YWx1ZS10b29sdGlwLWhlYWRpbmdcIj48JWhlYWRpbmclPjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25QcmljZVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDwlI3ByZWxvYWRlciU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfcHJlbG9hZGVyXCI+Li4uPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByZWxvYWRlciU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfd2l0aFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utb2xkIF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utbm93IF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlIF93aXRob3V0VGF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1vbGQgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1ub3cgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25QcmljZVBsYWluVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPCUjcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgKDwlcHJpY2VXaXRoVGF4JT4pXHJcbiAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICA8JV5wcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgKDwlcHJpY2VXaXRob3V0VGF4JT4pXHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgIGA7XHJcblxyXG4gICAgc3VidG90YWxUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ncm91cC1sYWJlbFwiPjwldHh0U3VidG90YWwlPjwvZGl2PlxyXG4gICAgICAgICAgICA8JSNwcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3ByZWxvYWRlclwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3dpdGhUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW9sZCBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW5vdyBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aFRheFZhbHVlJT5cIj48JXByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbCBfd2l0aG91dFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtb2xkIF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtbm93IF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgc3VtbWFyeVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPCUjb3B0aW9ucyU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi1uYW1lXCI+PCVuYW1lJT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnMtb3B0aW9uLXZhbHVlXCI+PCV2YWx1ZSU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi1wcmljZXNcIj48JSZwcmljZUh0bWwlPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9vcHRpb25zJT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgc2hvd1ByaWNlRnJlZSA9IGZhbHNlO1xyXG4gICAgc2hvd1ByaWNlWmVybyA9IGZhbHNlO1xyXG5cclxuICAgIGFkZFRvQ2FydFdyYXBwZXJTZWxlY3RvciA9ICcuYWRkLXRvLWNhcnQtd3JhcHBlcic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZSBmb3IgZnVuY3Rpb24gYGZldGNoT3B0aW9uUHJpY2VgXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgeyBwcmljZXNXaXRoVGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9LCBwcmljZXNXaXRob3V0VGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9IH0+fVxyXG4gICAgICovXHJcbiAgICBmZXRjaE9wdGlvblByaWNlQ2FjaGUgPSB7fTtcclxuXHJcbiAgICBjb25zb2xlID0ge1xyXG4gICAgICAgIGxvZzogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgaWYgKERFQlVHX0xPRykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgLi4uYXJncykge1xyXG4gICAgICAgIGZpeEZvcm1FbGVtZW50VW5pcXVlSWRzKCRzY29wZSk7XHJcblxyXG4gICAgICAgIHN1cGVyKCRzY29wZSwgLi4uYXJncyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkY2hvb3NlT3B0aW9uc0J0biA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBOdW1iZXIoJGZvcm0uZmluZCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJykudmFsKCkpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgkZm9ybSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEVuYWJsZSBvciBkaXNhYmxlIG1vZGlmaWVycyBtb2RhbCBmZWF0dXJlXHJcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gZW5hYmxlIG1vZGlmaWVycyBtb2RhbCBpZiBvdXIgY2hvb3NlIG9wdGlvbnMgYnV0dG9uIGFwcGVhcnMgaW4gdGhlIHByb2R1Y3QgZGV0YWlsc1xyXG4gICAgICAgIHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwgPSAkY2hvb3NlT3B0aW9uc0J0bi5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJpbmRQcm9kdWN0RWRpdEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZFN0aWNreUFkZFRvQ2FydEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZE1vZGFsRGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdE9wdGlvblN0ZXBwZXIoKTtcclxuICAgICAgICB0aGlzLnN5bmNQcm9kdWN0Q2FyZFF0eSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNhbGVDb3VudGRvd24oKTtcclxuICAgICAgICB0aGlzLnJlbmRlcklubGluZU9wdGlvblRvb2x0aXBzKCk7XHJcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3VwZGF0ZS13aXNobGlzdC1idXR0b25zJywgW3RoaXMuJHNjb3BlXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKSkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlTWV0YWRhdGEgPSBzZWxlY3RvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkZm9ybS5maW5kKHNlbGVjdG9yKS5maXJzdCgpLnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBpbnZhbGlkIG1ldGFkYXRhIHBheWxvYWRzLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcyA9IHBhcnNlTWV0YWRhdGEoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtY3VzdG9tLWZpZWxkc10nKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtcclxuICAgICAgICAgKiAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICogICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAgICAgKiAgIHN0YXRlOiAnbW9kaWZpZXInIHwgJ3ZhcmlhbnRfb3B0aW9uJyxcclxuICAgICAgICAgKiAgIHBhcnRpYWw6ICdzd2F0Y2gnIHwgJ3NldC1yZWN0YW5nbGUnIHwgJ3NldC1zZWxlY3QnIHwgJ3NldC1yYWRpbydcclxuICAgICAgICAgKiAgICAgfCAnaW5wdXQtdGV4dCcgfCAnaW5wdXQtbnVtYmVycycgfCAnaW5wdXQtY2hlY2tib3gnIHwgJ2lucHV0LWZpbGUnXHJcbiAgICAgICAgICogICAgIHwgJ2RhdGUnIHwgJ3RleHRhcmVhJyB8ICdwcm9kdWN0LWxpc3QnLFxyXG4gICAgICAgICAqICAgcmVxdWlyZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICogICBwcmVmaWxsPzogc3RyaW5nLFxyXG4gICAgICAgICAqICAgc2VsZWN0ZWRfZGF0ZT86IHtcclxuICAgICAgICAgKiAgICAgZGF5OiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIG1vbnRoOiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIHllYXI6IHN0cmluZ1xyXG4gICAgICAgICAqICAgfSxcclxuICAgICAgICAgKiAgIGNoZWNrZWQ/OiBib29sZWFuLFxyXG4gICAgICAgICAqICAgbm9WYWx1ZT86IG51bWJlcixcclxuICAgICAgICAgKiAgIHZhbHVlPzogbnVtYmVyLFxyXG4gICAgICAgICAqICAgdmFsdWVzPzogQXJyYXk8e1xyXG4gICAgICAgICAqICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAqICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICAgICAqICAgICBzZWxlY3RlZDogYm9vbGVhbixcclxuICAgICAgICAgKiAgICAgZGF0YTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPlxyXG4gICAgICAgICAqICAgfT5cclxuICAgICAgICAgKiB9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zID0gcGFyc2VNZXRhZGF0YSgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscy5jdXN0b21GaWVsZHM6JywgdGhpcy5jdXN0b21GaWVsZHMpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzLnByb2R1Y3RPcHRpb25zOicsIHRoaXMucHJvZHVjdE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkdXBkYXRlUHJvZHVjdFdyYXBwZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld01vZGVsKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IHN1cGVyLmdldFZpZXdNb2RlbCguLi5hcmdzKTtcclxuICAgICAgICBtb2RlbC4kdXBkYXRlUHJvZHVjdFdyYXBwZXIgPSB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlcjtcclxuICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xyXG4gICAgICAgIGNvbnN0ICRidG4gPSB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlci5maW5kKCdpbnB1dCwgYnV0dG9uJyk7XHJcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcclxuICAgICAgICAgICAgJGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRidG4ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGUgdGhlIG1ldGhvZCB0byBzdXBwb3J0IGVkaXQgcHJvZHVjdCBpbiBjYXJ0XHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cclxuICAgICAqL1xyXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xyXG4gICAgICAgIGlmIChldmVudC5lZGl0UHJvZHVjdEluQ2FydCkge1xyXG4gICAgICAgICAgICAkKGZvcm0pLmZpbmQoJ2lucHV0W25hbWU9XCJhY3Rpb25cIl0nKS52YWwoJ0VkaXRQcm9kdWN0RmllbGRzSW5DYXJ0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoZm9ybSkuZmluZCgnaW5wdXRbbmFtZT1cImFjdGlvblwiXScpLnZhbCgnYWRkJyk7XHJcbiAgICAgICAgICAgIHN1cGVyLmFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVkaXQgcHJvZHVjdCBpbiBjYXJ0LlxyXG4gICAgICogQWxtb3N0IGNsb25lIGZyb20gYWRkUHJvZHVjdFRvQ2FydCBtZXRob2QgZnJvbSB0aGUgcGFyZW50IGNsYXNzLlxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZWRpdFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcclxuICAgICAgICBjb25zdCAkc2F2ZUJ0biA9ICQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJywgJChldmVudC50YXJnZXQpKS5maW5kKCdpbnB1dCwgYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkc2F2ZUJ0bi52YWwoKTtcclxuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRzYXZlQnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkc2F2ZUJ0blxyXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxyXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJHNhdmVCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xyXG5cclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzYXZlQnRuXHJcbiAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBmYWlsdXJlID0gKGVycm9yVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JUZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkc2F2ZUJ0bikpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0TW9kYWwoKS4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkc2F2ZUJ0bjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0UXVhbnRpdHkpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZm9ybURhdGEuZ2V0KCdpdGVtX2lkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1F0eSA9IGZvcm1EYXRhLmdldCgncXR5W10nKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWx1cmUoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgfSkuZG9uZSgocmVzcG9uc2UpID0+IHN1Y2Nlc3MocmVzcG9uc2UpKS5mYWlsKChfeGhyLCBfc3RhdHVzLCBlcnJvcikgPT4gZmFpbHVyZShlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZT8uZGF0YT8uc3RhdHVzICE9PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGNsaWNrIG9uIHRoZSBBZGQgTmV3IHRvIENhcnQgYnV0dG9uLCB0cmlnZ2VyIHRoZSBmb3JtIHN1Ym1pdCBldmVudCB3aXRoIGBhZGROZXdUb0NhcnRgIGZsYWdcclxuICAgICAqIHNvIHRoYXQgbmV3IHByb2R1Y3QgaXMgYWx3YXlzIGFkZGVkIHRvIGNhcnQgcmVnYXJkbGVzcyBvZiBlZGl0IHByb2R1Y3QgaW4gY2FydCBvciBub3RcclxuICAgICAqL1xyXG4gICAgYmluZFByb2R1Y3RFZGl0RXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEV2ZW50ID0gJC5FdmVudCgnc3VibWl0JywgeyBlZGl0UHJvZHVjdEluQ2FydDogdHJ1ZSB9KTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyLmZpbmQoJ2lucHV0LCBidXR0b24nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICRmb3JtLnRyaWdnZXIoc3VibWl0RXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRTdGlja3lBZGRUb0NhcnRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlU3RpY2t5QWRkVG9DYXJ0Q2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkYnV0dG9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKCRidXR0b24ucHJvcCgnZGlzYWJsZWQnKSB8fCAkYnV0dG9uLmF0dHIoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYgKCEkZm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJHN0aWNreVF0eSA9ICRidXR0b24uc2libGluZ3MoJy5wcm9kdWN0Vmlldy1zdGlja3ktYWRkLXRvLWNhcnQnKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5tb2JpbGUtaW5jcmVtZW50IGlucHV0W25hbWU9XCJxdHlbXVwiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgJGZvcm1RdHkgPSAkZm9ybS5maW5kKCdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGlucHV0W25hbWU9XCJxdHlbXVwiXScpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHN0aWNreVF0eS5sZW5ndGggJiYgJGZvcm1RdHkubGVuZ3RoICYmICRmb3JtUXR5LnZhbCgpICE9PSAkc3RpY2t5UXR5LnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybVF0eS52YWwoJHN0aWNreVF0eS52YWwoKSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybVswXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtICYmICFmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW52YWxpZEZpZWxkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCc6aW52YWxpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbnZhbGlkRmllbGQ/LnNjcm9sbEludG9WaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZEZpZWxkLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGludmFsaWRGaWVsZD8uZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvcm0ucmVwb3J0VmFsaWRpdHkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGludmFsaWRGaWVsZD8ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJyNzdGlja3ktYWRkLXRvLWNhcnQnKVxyXG4gICAgICAgICAgICAub2ZmKCdjbGljay5leWV2YVN0aWNreUFkZFRvQ2FydCcpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2suZXlldmFTdGlja3lBZGRUb0NhcnQnLCBoYW5kbGVTdGlja3lBZGRUb0NhcnRDbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZE1vZGFsRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBkZXN0cm95IHRoZSBpbWFnZSBnYWxsZXJ5IG1vZGFsIHdoZW4gcXVpY2stdmlldyBtb2RhbCBpcyBjbG9zZWRcclxuICAgICAgICAvLyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuY2xvc2VzdCgnLm1vZGFsJykub25lKE1vZGFsRXZlbnRzLmNsb3NlZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbWFnZUdhbGxlcnlNb2RhbC5kZXN0cm95TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0T3B0aW9uU3RlcHBlcigpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1zdGVwcGVyXScpLmVhY2goKF9pLCBmb3JtRmllbGRFbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZm9ybUZpZWxkID0gJChmb3JtRmllbGRFbCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRkZWMgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImRlY1wiXScpO1xyXG4gICAgICAgICAgICBjb25zdCAkaW5jID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJpbmNcIl0nKTtcclxuICAgICAgICAgICAgY29uc3QgJGNoZWNrID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJjaGVja1wiXScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5hZGRDbGFzcygnX2NoZWNraW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86dmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaXJzdCA9ICRyYWRpb3MuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSAkcmFkaW9zLmluZGV4KCRjaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgaSA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgPT09ICRyYWRpb3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5yZW1vdmVDbGFzcygnX2NoZWNraW5nJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbml0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSAoaW5jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykuYWRkQ2xhc3MoJ19jaGVja2luZycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOnZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjaGVja2VkID0gJHJhZGlvcy5maWx0ZXIoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZmlyc3QgPSAkcmFkaW9zLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVja2VkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3VuZCBjaGVja2VkIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRyYWRpb3MuaW5kZXgoJGNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0IHRoZSBuZXh0IHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgJHJhZGlvcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLmVxKGkgKyAxKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgKyAxID09PSAkcmFkaW9zLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIHByZXZpb3VzIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZXEoaSAtIDEpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGkgLSAxID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIGNoZWNrZWQgcmFkaW8sIGFuZCBmb3VuZCB0aGUgZmlyc3QgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jICYmICRmaXJzdC5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKyBhbmQgZmlyc3Qgb3B0aW9uIGlzICdub25lJywgaWdub3JlIHRoZSBub25lIG9wdGlvbiwgc2VsZWN0IHRoZSBmaXJzdCB2YWx1ZWQgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3Mubm90KCRmaXJzdCkuZmlyc3QoKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSwgc2VsZWN0IHRoZSBmaXJzdCByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZmlyc3QucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5hZGRDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hlY2tlZCByYWRpbyBpcyAnbm9uZScgdGhlbiB1bmNoZWNrIHRoZSBjaGVjayBidXR0b25cclxuICAgICAgICAgICAgICAgIGlmICgkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2sucmVtb3ZlQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLnJlbW92ZUNsYXNzKCdfY2hlY2tpbmcnKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRkZWMub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGluYy5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0KHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRjaGVjay5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVjay5oYXNDbGFzcygnX2NoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuY2hlY2sgdGhlIGNoZWNrZWQgcmFkaW8gYW5kIHNlbGVjdCB0aGUgJ25vbmUnIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHVuY2hlY2sgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRub25lID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkbm9uZS5sZW5ndGggPiAwKSAkbm9uZS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgkdW5jaGVjay5sZW5ndGgpICR1bmNoZWNrLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5yZW1vdmVDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN5bmMgcHJvZHVjdCBxdWFudGl0eSB3aXRoIHF0eSBvZiB0aGUgY29ycmVzcG9uZGluZyBwcm9kdWN0IGNhcmRcclxuICAgICAqL1xyXG4gICAgc3luY1Byb2R1Y3RDYXJkUXR5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RRdWFudGl0eSkgcmV0dXJuOyAvLyBzdG9wIGlmIGVkaXQgcHJvZHVjdCBpbiBjYXJ0XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRRdHkgPSAkKGBbZGF0YS1jYXJkLXF1YW50aXR5LWNoYW5nZV0gaW5wdXRbbmFtZT1cInF0eV8ke3RoaXMucHJvZHVjdElkfVwiXWApLnZhbCgpO1xyXG4gICAgICAgIGlmICghY2FyZFF0eSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCAkcXR5ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBpbnB1dFtuYW1lPVwicXR5W11cIl0nKTtcclxuICAgICAgICBjb25zdCBxdHkgPSAkcXR5LnZhbCgpO1xyXG4gICAgICAgIGlmICgkcXR5Lmxlbmd0aCA+IDAgJiYgcXR5ICE9PSBjYXJkUXR5KSB7XHJcbiAgICAgICAgICAgICRxdHkudmFsKGNhcmRRdHkpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0U2FsZUNvdW50ZG93bigpIHtcclxuICAgICAgICBjb25zdCB7IHR4dFNhbGVDb3VudGRvd25KU09OIH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF0ZV0nKTtcclxuICAgICAgICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAkZWwuZGF0YSgnc2FsZUNvdW50ZG93bkxhYmVsJykgfSk7XHJcblxyXG4gICAgICAgIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHsgdHh0U2FsZUNvdW50ZG93bkpTT04gfSk7XHJcbiAgICAgICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWV3KGRhdGEsIC4uLmFyZ3MpIHtcclxuICAgICAgICBzdXBlci51cGRhdGVWaWV3KGRhdGEsIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTYWxlUGVyY2VudChkYXRhKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoaXBwaW5nQ291bnRkb3duKGRhdGEpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpXHJcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCAhZGF0YT8ucHVyY2hhc2FibGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vbmVTYWxlcyA9IHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvblByaWNlcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcywgZm9ybURhdGEsIG5vbmVTYWxlcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RpZmllcnNTdWJ0b3RhbChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTYWxlUGVyY2VudChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJGRpdiA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcmljZS1zZWN0aW9uLS1zYWxlUGVyY2VudCcpO1xyXG4gICAgICAgIGNvbnN0ICRzcGFuID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYWxlLXBlcmNlbnRdJyk7XHJcbiAgICAgICAgbGV0IHNhbGVQZXJjZW50ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGRhdGE/LnByaWNlPy53aXRob3V0X3RheD8udmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGE/LnByaWNlPy5ycnBfd2l0aG91dF90YXg/LnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSAvIGRhdGEucHJpY2UucnJwX3dpdGhvdXRfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJpY2U/Lm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWUgLyBkYXRhLnByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy53aXRoX3RheD8udmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGE/LnByaWNlPy5ycnBfd2l0aF90YXg/LnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZSAvIGRhdGEucHJpY2UucnJwX3dpdGhfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJpY2U/Lm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUgLyBkYXRhLnByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzYWxlUGVyY2VudCA+IDApIHtcclxuICAgICAgICAgICAgJHNwYW4udGV4dChgLSR7c2FsZVBlcmNlbnR9JWApO1xyXG4gICAgICAgICAgICAkZGl2LnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkc3Bhbi50ZXh0KCcnKTtcclxuICAgICAgICAgICAgJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNoaXBwaW5nQ291bnRkb3duKGRhdGEpIHtcclxuICAgICAgICBjb25zdCAkc2hpcHBpbmdDb3VudGRvd24gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wYXBhdGhlbWVzLXNoaXBwaW5nLWNvdW50ZG93bl0nKTtcclxuXHJcbiAgICAgICAgaWYgKCRzaGlwcGluZ0NvdW50ZG93bi5pcygnOmhpZGRlbicpICYmIGRhdGE/LnB1cmNoYXNhYmxlKSB7XHJcbiAgICAgICAgICAgICRzaGlwcGluZ0NvdW50ZG93bi5jc3MoJ3N0eWxlJywgJ2ZsZXgnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzaGlwcGluZ0NvdW50ZG93bi5pcygnOnZpc2libGUnKSAmJiAhZGF0YT8ucHVyY2hhc2FibGUpIHtcclxuICAgICAgICAgICAgJHNoaXBwaW5nQ291bnRkb3duLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FydENvbnRlbnQoLi4uYXJncykge1xyXG4gICAgICAgIC8vIGNsb3NlIG1vZGlmaWVycyBtb2RhbCBhZnRlciBhZGRlZCBwcm9kdWN0IHRvIGNhcnRcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlci51cGRhdGVDYXJ0Q29udGVudCguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIuc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSwgLi4uYXJncyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEltZyA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1pbWddJyk7XHJcbiAgICAgICAgY29uc3QgeyBtYWluSW1hZ2VVcmwsIHpvb21JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0IH0gPSB0aGlzLmltYWdlR2FsbGVyeS5jdXJyZW50SW1hZ2U7XHJcblxyXG4gICAgICAgIGlmIChtYWluSW1hZ2VVcmwgJiYgbWFpbkltYWdlVXJsICE9PSAkbW9kaWZpZXJzTW9kYWxJbWcuYXR0cignc3JjJykpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsSW1nXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIG1haW4gaW1hZ2UgaW4gcXVpY2stdmlldyBvbiBtb2JpbGVcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoX2ksIGVsKSA9PiAkKGVsKS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXQgcHJpY2Ugd2l0aCBjdXJyZW5jeSBzeW1ib2wgYW5kIGRlY2ltYWwgcGxhY2VzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsdXNTeW1ib2wgd2hldGhlciB0byBzaG93IHBsdXMgc3ltYm9sIGZvciBwb3NpdGl2ZSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZm9ybWF0UHJpY2UodmFsdWUsIHBsdXNTeW1ib2wgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBjYWNoZWRTZXR0aW5ncyA/IHtcclxuICAgICAgICAgICAgY3VycmVuY3lfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuc3ltYm9sLFxyXG4gICAgICAgICAgICBjdXJyZW5jeV9sb2NhdGlvbjogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5zeW1ib2xQbGFjZW1lbnQsXHJcbiAgICAgICAgICAgIGRlY2ltYWxfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuZGVjaW1hbFRva2VuLFxyXG4gICAgICAgICAgICBkZWNpbWFsX3BsYWNlczogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5kZWNpbWFsUGxhY2VzLFxyXG4gICAgICAgICAgICB0aG91c2FuZHNfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkudGhvdXNhbmRzVG9rZW4sXHJcbiAgICAgICAgfSA6IHt9O1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGN1cnJlbmN5Rm9ybWF0KC12YWx1ZSwgZGlzcGxheSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwbHVzU3ltYm9sID8gYC0ke2Zvcm1hdHRlZH1gIDogZm9ybWF0dGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gY3VycmVuY3lGb3JtYXQodmFsdWUsIGRpc3BsYXkpO1xyXG4gICAgICAgIHJldHVybiBwbHVzU3ltYm9sID8gYCske2Zvcm1hdHRlZH1gIDogZm9ybWF0dGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZCBvcHRpb24gdmFsdWUgYnkgb3B0aW9uIG5hbWUgYW5kIHZhbHVlIG5hbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSBvcHRpb24gZGlzcGxheSBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVOYW1lIHZhbHVlIGxhYmVsXHJcbiAgICAgKiBAcmV0dXJucyB7W251bWJlciwgbnVtYmVyXX0gb3B0aW9uSWQsIHZhbHVlSWRcclxuICAgICAqL1xyXG4gICAgZmluZE9wdGlvblZhbHVlKG9wdGlvbk5hbWUsIHZhbHVlTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGhpZGVJZk9wdGlvbiA9IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBkaXNwbGF5X25hbWUgfSkgPT4gZGlzcGxheV9uYW1lLnJlcGxhY2UoJy86Oy9nJywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpID09PSBvcHRpb25OYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaGlkZUlmT3B0aW9uPy52YWx1ZXM/LmZpbmQoKHsgbGFiZWwgfSkgPT4gbGFiZWwucmVwbGFjZSgnLzo7L2cnLCAnJykucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCBvcHRpb25JZCA9IGhpZGVJZk9wdGlvbj8uaWQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWVJZCA9IHZhbHVlPy5pZDtcclxuICAgICAgICByZXR1cm4gW29wdGlvbklkLCB2YWx1ZUlkXTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNb2RpZmllcnNNb2RhbCgpIHtcclxuICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW5dJykuYXR0cignZGF0YS16b29tLWltYWdlJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlciA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtYXR0cmlidXRlcy1tZXNzYWdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRXcmFwcGVyID0gJGZvcm0uZmluZCgnW2RhdGEtZXlldmEtYWRkLXRvLWNhcnQtd3JhcHBlcl0nKTtcclxuICAgICAgICBjb25zdCAkY2hvb3NlT3B0aW9uc0J0biA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RpZmllcnNNb2RhbFRlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgIHR4dENvbnRpbnVlOiB0aGlzLmNvbnRleHQudHh0Q29udGludWUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC10aXRsZV0nKS5odG1sKCksXHJcbiAgICAgICAgICAgIG1haW5JbWFnZVVybDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLm1haW5JbWFnZVVybCB8fCBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCB8fCB6b29tSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLm1haW5JbWFnZVNyY3NldCB8fCBtYWluSW1hZ2VTcmNzZXQsXHJcbiAgICAgICAgfSwgbnVsbCwgWyc8JScsICclPiddKSkuYXBwZW5kVG8oJHByb2R1Y3RPcHRpb25zRWwpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ29tcGxldGUgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENsb3NlID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jbG9zZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGludWVdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQmFjayA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFja10nKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSBtb2RpZmllciBvcHRpb25zIHRvIHRoZSBtb2RhbFxyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXN0YXRlPVwibW9kaWZpZXJcIl0nKS5hcHBlbmRUbygkbW9kaWZpZXJzTW9kYWxPcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSBhZGQgdG8gY2FydCAmIHF0eSBib3ggdG8gdGhlIG1vZGFsXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29tcGxldGUuYXBwZW5kKCRhZGRUb0NhcnRXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgLy8gY2xvbmUgcHVyY2hhc2FibGUgbWVzc2FnZVxyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLmZpbmQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJykuY2xvbmUoKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJGF0dHJpYnV0ZU1lc3NhZ2VXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ2xvc2Uub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQmFjay5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrU3RlcCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxDb250aW51ZS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGFuZCByZXBvcnQgaW52YWxpZCBpbnB1dHMgaWYgYW55XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXSB8fCBbXTtcclxuICAgICAgICAgICAgY29uc3QgaW52YWxpZElucHV0cyA9IHNob3dPcHRpb25JZHMucmVkdWNlKChfaW52YWxpZElucHV0cywgb3B0aW9uSWQpID0+IChbXHJcbiAgICAgICAgICAgICAgICAuLi5faW52YWxpZElucHV0cyxcclxuICAgICAgICAgICAgICAgIC4uLiRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAuZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbklkfV1bZGF5XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW21vbnRoXVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW3llYXJdXCJdYClcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVsID0+ICFlbC5jaGVja1ZhbGlkaXR5KCkpLFxyXG4gICAgICAgICAgICBdKSwgW10pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludmFsaWRJbnB1dHNbMF0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYXV0byBzZWxlY3QgdGhlICdub25lJyBvcHRpb24gaWYgbm8gcmFkaW8gb3B0aW9uIG9yIG5vIHByb2R1Y3QgcGljayBsaXN0IG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dXCJdYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHJhZGlvcy5sZW5ndGggPiAwICYmICRyYWRpb3MuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZmlsdGVyKCdbdmFsdWU9XCJcIl0sIFt2YWx1ZT1cIjBcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gYWZ0ZXIgY2xpY2tpbmcgY29udGludWUgYnV0dG9uLCB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IGF1dG9tYXRpY2FsbHlcclxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkY2hvb3NlT3B0aW9uc0J0bi5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXF1aXJlIHNlbGVjdGluZyB2YXJpYW50IG9wdGlvbnMgYmVmb3JlIG9wZW5pbmcgdGhlIG1vZGFsXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlVmFyaWFudE9wdGlvbnMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RpZmllcnNNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAuYmVmb3JlKHRoaXMubW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsXScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW92ZXJsYXldJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1vZGlmaWVyc1ZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXHJcbiAgICAgICAgICAgIC5ub3QoJ1t0eXBlPVwiY2hlY2tib3hcIl0sIFt0eXBlPVwicmFkaW9cIl0sIFt0eXBlPVwiZmlsZVwiXScpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnZhbCgnJyk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBmbGFnIGFueSBpbnB1dC9zZWxlY3QgaXMgbm90IHNob3duIHlldCBzbyB0aGF0IHRoZSBjb250aW51ZSBidXR0b24gaXMgc2hvd25cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnJlbW92ZUF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgbW9kYWwgdG8gdXBkYXRlIHRoaXMgdmlldyBhdXRvbWF0aWNhbGx5IHdoZW4gb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbnRhaW5zIGFsbCBvcHRpb24gaWRzIHRoYXQgYXJlIHNob3duIGluIGVhY2ggc3RlcFxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJbXVtdfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzaG93biBvcHRpb24gaWRzIGluIGFsbCBzdGVwc1xyXG4gICAgICAgIHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTm9uLXNhbGUgcHJpY2VzIGZvciBvcHRpb24gdmFsdWVzLlxyXG4gICAgICAgICAqIFB1bGxpbmcgZnJvbSBjdXN0b20gZmllbGRzIGBfX0Bub25zYWxlIHByaWNlID0gb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZVs7IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWU7IC4uLl1gLlxyXG4gICAgICAgICAqIFBvcHVsYXRlZCBpbiBgdXBkYXRlTW9kaWZpZXJzVmlldygpYC5cclxuICAgICAgICAgKiBAdHlwZSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9IH19XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZE5vbmVTYWxlcyA9IHt9O1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgbW9kaWZpZXJzIG1vZGFsIGFzYXAgc28gdGhhdCBub3QgYWxsIG9wdGlvbnMgYXJlIGRpc3BsYXllZFxyXG4gICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGw6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsID0gZmFsc2UgfSA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEJhY2sgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFja10nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1zdW1tYXJ5XScpLmVtcHR5KCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsVGl0bGUgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtdGl0bGVdJykuZW1wdHkoKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxGb290ZXIgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENvbnRpbnVlID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlXScpLmhpZGUoKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XHJcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydFdyYXBwZXIgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1hZGQtdG8tY2FydC13cmFwcGVyXScpLmhpZGUoKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gZm9ybURhdGE6ICcsIEFycmF5LmZyb20oZm9ybURhdGEuZW50cmllcygpKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1cnJlbnQgb3B0aW9uIGlkIHRoYXQgYXBwZWFycyBhbG9uZSB3aXRob3V0IGFueSBncm91cC5cclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfHVuZGVmaW5lZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgY3VycmVudE9wdGlvbklkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdXJyZW50IGdyb3VwIG5hbWUgdGhhdCB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8uXHJcbiAgICAgICAgICogR3JvdXAgbmFtZSB0aGF0IGFwcGVhcnMgY3VzdG9tIGZpZWxkIGBfX0Bncm91cCAoZ3JvdXAgbmFtZSlgXHJcbiAgICAgICAgICogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRHcm91cE5hbWU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9wdGlvbiBpZHMgb2Ygb3B0aW9uIG5hbWVzIGFwcGVhciBpbiB0aGUgdmFsdWUgb2YgY3VzdG9tIGZpZWxkIGBfX0Bncm91cGAuXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiAgIEN1c3RvbSBmaWVsZDogYF9fQGdyb3VwIFNlbGVjdCBhIHByZXNjcmlwdGlvbiB0eXBlYCA9IGBwcmVzY3JpcHRpb24gdHlwZWBcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIG9wdGlvbiBpZHMgc2hvdWxkIGJlIGhpZGRlblxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBoaWRlT3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7b3B0aW9uSWQ6IG51bWJlciwgdmFsdWVJZDogbnVtYmVyfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgaGlkZU9wdGlvblZhbHVlcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUb29sdGlwcyBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlcyBleHRyYWN0ZWQgZnJvbSBjdXN0b20gZmllbGRzIGBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBgXHJcbiAgICAgICAgICogQHR5cGUge09iamVjdDxudW1iZXIsIHsgdG9vbHRpcDogc3RyaW5nLCB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9PlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBzID0ge307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRvb2x0aXAgaGVhZGluZ3MgZm9yIG9wdGlvbiB2YWx1ZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AdG9vbHRpcF9oZWFkaW5nIG5hbWU6dmFsdWUgPSB0b29sdGlwIGhlYWRpbmdgXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9fVxyXG4gICAgICAgICAqIEBleGFtcGxlIHsgMjogeyAxMjM6ICdUb29sdGlwIEhlYWRpbmcnIH0gfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBIZWFkaW5ncyA9IHt9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBOb24tc2FsZSBwcmljZXMgZm9yIG9wdGlvbiB2YWx1ZXMuXHJcbiAgICAgICAgICogQ2FuIGJlIG92ZXJyaWRkZW4gYnkgY3VzdG9tIGZpZWxkcyBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH0gfX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBub25lU2FsZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT3B0aW9uIHJlbmFtZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AcmVuYW1lIG9wdGlvbiBuYW1lID0gbmV3IG5hbWVgXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiBzdHJpbmcgfX1cclxuICAgICAgICAgKiBAZXhhbXBsZSB7IDEyMzogJ05ldyBOYW1lJywgNDU2OiAnQW5vdGhlciBOYW1lJyB9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uUmVuYW1lcyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBzdGF0ZSB9KSA9PiBzdGF0ZSA9PT0gJ21vZGlmaWVyJykuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCclY1Byb2R1Y3REZXRhaWxzIC0gb3B0aW9uOiAnLCAnY29sb3I6IGN5YW4nLCBvcHRpb24uZGlzcGxheV9uYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoaWRlT3B0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRmlyc3QgZ3JvdXAgbmFtZSB0aGF0IHRoZSBvcHRpb24gYmVsb25ncyB0by5cclxuICAgICAgICAgICAgICogR3JvdXAgbmFtZSB0aGF0IGFwcGVhcnMgY3VzdG9tIGZpZWxkIGBfX0Bncm91cCAoZ3JvdXAgbmFtZSlgXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbGV0IGdyb3VwTmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBPcHRpb24gaWRzIG9mIG9wdGlvbiBuYW1lcyBhcHBlYXIgaW4gdGhlIHZhbHVlIG9mIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgLlxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgKiAgIEN1c3RvbSBmaWVsZDogYF9fQGdyb3VwIFNlbGVjdCBhIHByZXNjcmlwdGlvbiB0eXBlYCA9IGBwcmVzY3JpcHRpb24gdHlwZWBcclxuICAgICAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj58dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbGV0IGdyb3VwT3B0aW9uSWRzO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgcmFkaW8gdHlwZSBhbmQgaGFzICdub25lJyB2YWx1ZSBjaGVja2VkXHJcbiAgICAgICAgICAgIGNvbnN0IGlzTm9uZVJhZGlvQ2hlY2tlZCA9ICRmb3JtLmZpbmQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1bdmFsdWU9XCJcIl1gKS5wcm9wKCdjaGVja2VkJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBmaWxlIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJGZpbGUgPSAkZm9ybS5maW5kKGBpbnB1dFt0eXBlPVwiZmlsZVwiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNGaWxlU2hvd24gPSAkZmlsZS5sZW5ndGggPiAwICYmICRmaWxlLmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIG9wdGlvbmFsIGRhdGUgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkZGF0ZSA9ICRmb3JtLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XVwiXSwgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1cIl0sIHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1beWVhcl1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbERhdGVTaG93biA9ICRkYXRlLmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkZGF0ZS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCBzZWxlY3QgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGZvcm0uZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBpc09wdGlvbmFsU2VsZWN0U2hvd24gPSAkc2VsZWN0Lmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkc2VsZWN0LmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIG9wdGlvbmFsIHRleHQgLyBtdWx0aWxpbmUgLyBudW1iZXIgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkdGV4dCA9ICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCB0ZXh0YXJlYScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBpc09wdGlvbmFsVGV4dFNob3duID0gJHRleHQubGVuZ3RoID4gMCAmJiAhb3B0aW9uLnJlcXVpcmVkICYmICR0ZXh0LmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZSA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtVmFsdWUgJiYgIShmb3JtVmFsdWUgaW5zdGFuY2VvZiBGaWxlKVxyXG4gICAgICAgICAgICAgICAgfHwgaXNOb25lUmFkaW9DaGVja2VkIHx8IGlzRmlsZVNob3duIHx8IGlzT3B0aW9uYWxEYXRlU2hvd24gfHwgaXNPcHRpb25hbFNlbGVjdFNob3duIHx8IGlzT3B0aW9uYWxUZXh0U2hvd25cclxuICAgICAgICAgICAgICAgIHx8IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XWApXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW21vbnRoXWApXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdYCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGhpZGUgb3B0aW9uIGlmIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIGhpZGVPcHRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uOiAnLCBoaWRlT3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcy5mb3JFYWNoKGN1c3RvbUZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0BoaWRlX2lmICguKilcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWRlSWZNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaEhpZGVJZih7IGN1c3RvbUZpZWxkLCBmb3JtRGF0YSwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaWRlSWZNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gaGlkZUlmTWF0Y2guaGlkZU9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvblZhbHVlcy5wdXNoKC4uLmhpZGVJZk1hdGNoLmhpZGVPcHRpb25WYWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncm91cE5hbWUgJiYgIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AZ3JvdXAgKC4qKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoR3JvdXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lID0gZ3JvdXBNYXRjaC5ncm91cE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cE9wdGlvbklkcyA9IGdyb3VwTWF0Y2guZ3JvdXBPcHRpb25JZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdG9vbHRpcE1hdGNoLnRvb2x0aXAgfHwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBzOiBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdPy52YWx1ZVRvb2x0aXBzLCB0b29sdGlwTWF0Y2gudmFsdWVUb29sdGlwcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AdG9vbHRpcF9oZWFkaW5nIG5hbWU6dmFsdWUgPSB0b29sdGlwIGhlYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwSGVhZGluZ3MgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwSGVhZGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0sIHZhbHVlVG9vbHRpcEhlYWRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hSZW5hbWUoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uUmVuYW1lc1tvcHRpb24uaWRdID0gbmV3TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlTm9uU2FsZXMgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihub25lU2FsZXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb24uaWRdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubm9uZVNhbGVzW29wdGlvbi5pZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVOb25TYWxlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50R3JvdXBPcHRpb25JZHMubGVuZ3RoID09PSAwICYmICFjdXJyZW50T3B0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBubyB2aXNpYmxlIG9wdGlvbiBiZWZvcmVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBncm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBOYW1lID0gZ3JvdXBOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBPcHRpb25JZHMgPSBncm91cE9wdGlvbklkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBOYW1lOiAke2N1cnJlbnRHcm91cE5hbWV9LCBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICR7Y3VycmVudEdyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YW5kLWFsb25lIG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uSWQgPSBvcHRpb24uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudE9wdGlvbklkOiAke2N1cnJlbnRPcHRpb25JZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlT3B0aW9uSWRzLnB1c2gob3B0aW9uLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA+IDAgJiYgaGlkZU9wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBoaWRkZW4gb3B0aW9ucyBmcm9tIHRoZSBjdXJyZW50IGdyb3VwXHJcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cE9wdGlvbklkcyA9IGN1cnJlbnRHcm91cE9wdGlvbklkcy5maWx0ZXIoaWQgPT4gIWhpZGVPcHRpb25JZHMuaW5jbHVkZXMoaWQpKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICR7Y3VycmVudEdyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50T3B0aW9uSWQ6ICcsIGN1cnJlbnRPcHRpb25JZCk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBOYW1lOiAnLCBjdXJyZW50R3JvdXBOYW1lKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRHcm91cE9wdGlvbklkczogJywgY3VycmVudEdyb3VwT3B0aW9uSWRzKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb25WYWx1ZXM6ICcsIGhpZGVPcHRpb25WYWx1ZXMpO1xyXG5cclxuICAgICAgICAvLyBTdG9yZSBub24tc2FsZSBwcmljZXMgb2Ygb3B0aW9uIHZhbHVlc1xyXG4gICAgICAgIC8vIHRvIHVzZSB3aGVuIHVwZGF0aW5nIG9wdGlvbiBwcmljZXMgb25seSB3aXRob3V0IHVwZGF0ZSB0aGUgd2hvbGUgbW9kaWZpZXJzIHZpZXdcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXMsIG5vbmVTYWxlcyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElEcyBvZiBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBhdCB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XHJcbiAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPiAwID8gY3VycmVudEdyb3VwT3B0aW9uSWRzXHJcbiAgICAgICAgICAgIDogKGN1cnJlbnRPcHRpb25JZCA/IFtjdXJyZW50T3B0aW9uSWRdIDogW10pO1xyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgc2hvd24gb3B0aW9uIGlkcyBvZiB0aGUgY3VycmVudCBzdGVwIHRvIHRoZSBzdGFja1xyXG4gICAgICAgIC8vIGlmIG5vdCB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXMgc3RlcC5cclxuICAgICAgICAvLyB0aGlzIGlzIHVzZWQgdG8gbmF2aWdhdGUgYmFjayB0byB0aGUgcHJldmlvdXMgc3RlcC5cclxuICAgICAgICBpZiAodGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgfHwgIWFyZUFycmF5c0VxdWFsVW5vcmRlcmVkKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMuc2xpY2UoLTEpWzBdLCBzaG93T3B0aW9uSWRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnB1c2goc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gc3RhY2tlZFNob3dPcHRpb25JZHM6ICcsIHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2hvdyAvIGhpZGUgYmFjayBidXR0b25cclxuICAgICAgICBpZiAodGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2suc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2suaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2hvdyBmb290ZXIsIGFuZCBoaWRlIGl0IGlmIG5vIG1vcmUgb3B0aW9uIHNob3duXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxGb290ZXIuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEZvb3Rlci5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIG1vZGFsIHRpdGxlIGZyb20gdGhlIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYCBvciBvcHRpb24gZGlzcGxheSBuYW1lXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE5hbWUpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuaHRtbChjdXJyZW50R3JvdXBOYW1lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gb3B0aW9uUmVuYW1lc1tzaG93T3B0aW9uSWRzWzBdXSB8fCB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHNob3dPcHRpb25JZHNbMF0pPy5kaXNwbGF5X25hbWU7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLnRleHQodGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGlkZSB0aGUgb3B0aW9uIG5hbWUgd2hlbiBoZXJlIGlzIG9ubHkgMSBvcHRpb24gc2hvd24gaW4gdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtzaG93T3B0aW9uSWRzWzBdfVwiXSAuZm9ybS1sYWJlbGApLmZpcnN0KCkuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdIC5mb3JtLWxhYmVsJykuZmlyc3QoKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IGN1cnJlbnQgcHJvZHVjdCBvcHRpb25zXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0nKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ19zaG93JylcclxuICAgICAgICAgICAgLmZpbHRlcigoXywgZWwpID0+ICFzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcigkKGVsKS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSkpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnX3Nob3cnKTtcclxuXHJcbiAgICAgICAgLy8gUmVuYW1lIHRoZSBzaG93biBvcHRpb25zIGlmIG5lZWRlZFxyXG4gICAgICAgIHNob3dPcHRpb25JZHMuZm9yRWFjaChvcHRpb25JZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBvcHRpb25SZW5hbWVzW29wdGlvbklkXTtcclxuICAgICAgICAgICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXSAuZm9ybS1sYWJlbGApLmZpcnN0KCkuaHRtbChuZXdOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTaG93IHRvb2x0aXAgZm9yIGdyb3VwXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwVG9vbHRpcCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyb3VwVG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVG9vbHRpcCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCh7IGN1c3RvbUZpZWxkLCBncm91cE5hbWU6IGN1cnJlbnRHcm91cE5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyb3VwVG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgZ3JvdXBUb29sdGlwKSk7XHJcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaG93IHRvb2x0aXAgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvblRvb2x0aXBzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFRpdGxlLCB0b29sdGlwcywgdG9vbHRpcEhlYWRpbmdzLCBzaG93T3B0aW9uSWRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIGZvciBzaG93biBvcHRpb25zIGFuZCBkaXNwbGF5IENvbnRpbnVlIGJ1dHRvbiBpZiBuZWVkZWQuXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRGVmYXVsdE9wdGlvblZhbHVlcyhzaG93T3B0aW9uSWRzLCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IHByaWNlcyBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xyXG4gICAgICAgIGlmICghaWdub3JlQVBJQ2FsbCkge1xyXG4gICAgICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgc3VtbWFyeSBidXQgcHJlbG9hZGVyIGZvciBwcmljZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N1bW1hcnkoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSwgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsICRtb2RpZmllcnNNb2RhbFRpdGxlLCAkYWRkVG9DYXJ0V3JhcHBlciwgZm9ybURhdGEsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2hvdyBzdW1tYXJ5IGNvbnRlbnQgaWYgbm8gb3B0aW9uIHZpc2libGUgb24gdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0ZSByZXF1aXJlZCB2YXJpYW50IG9wdGlvbnMgYW5kIHJlcG9ydCBlcnJvciBmb3IgdGhlIGZpcnN0IGludmFsaWQgb3B0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZVZhcmlhbnRPcHRpb25zKCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBzdGF0ZSB9KSA9PiBzdGF0ZSA9PT0gJ3ZhcmlhbnRfb3B0aW9uJykuZmluZChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIFJlcXVpcmVkIG9wdGlvbiBcIiR7b3B0aW9uLmRpc3BsYXlfbmFtZX1cIiBpcyBub3Qgc2VsZWN0ZWRgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gJGZvcm0uZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtpbnZhbGlkLmlkfV1cIl1gKVswXTtcclxuICAgICAgICAgICAgZWwucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrU3RlcCgpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gW1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnBvcCgpLCAvLyBjdXJyZW50IHN0ZXAncyBzaG93biBvcHRpb24gaWRzXHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMucG9wKCksIC8vIHByZXZpb3VzIHN0ZXAncyBzaG93biBvcHRpb24gaWRzXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgdmFsdWVzIG9mIHNob3duIG9wdGlvbiBpZHMgaW4gY3VycmVudCBzdGVwICYgcHJldmlvdXMgc3RlcFxyXG4gICAgICAgIC8vIHRvIGRpc3BsYXkgcHJldmlvdXMgc3RlcCBhZ2Fpbi5cclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcykge1xyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoX2ksIGVsKSA9PiBzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcigkKGVsKS5hdHRyKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkJykpKSk7XHJcblxyXG4gICAgICAgICAgICAkb3B0aW9uLmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcclxuICAgICAgICAgICAgICAgIC5ub3QoJ1t0eXBlPVwiY2hlY2tib3hcIl0sIFt0eXBlPVwicmFkaW9cIl0sIFt0eXBlPVwiZmlsZVwiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS52YWwoJycpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5yZW1vdmVBdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IHVwZGF0ZSBkaXNwbGF5IHByZXZpb3VzIG9wdGlvbnMgb24gbW9kaWZpZXJzIG1vZGFsXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGw6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIGNoYW5nZSBldmVudCB0byB1cGRhdGUgcHJpY2VzICYgZGF0YSBiZWxvbmdzIHRvIEJDXHJcbiAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gc2hvdWxkIGJlIGhpZGRlbiBiYXNlZCBvbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBmb3JtRGF0YTogRm9ybURhdGEsXHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IE51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfVxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBoaWRlT3B0aW9uOiBib29sZWFuLCBoaWRlT3B0aW9uVmFsdWVzOiBBcnJheTx7b3B0aW9uSWQ6IG51bWJlciwgdmFsdWVJZDogbnVtYmVyfT4gfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaEhpZGVJZih7IGN1c3RvbUZpZWxkLCBmb3JtRGF0YSwgb3B0aW9uIH0pIHtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGN1c3RvbUZpZWxkTWF0Y2hIaWRlSWY6IGNmX25hbWUgPSAke2N1c3RvbUZpZWxkLm5hbWV9IDsgb3BfbmFtZSA9ICR7b3B0aW9uLmRpc3BsYXlfbmFtZX1gKTtcclxuICAgICAgICBsZXQgaGlkZU9wdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGhpZGVPcHRpb25WYWx1ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0BoaWRlX2lmXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmICghbSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGhpZGVJZk9wdGlvbnMgPSBtWzFdLnNwbGl0KCc7JykubWFwKGt2ID0+IGt2LnNwbGl0KCc6JywgMikpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lOiBrZXkudHJpbSgpLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgPyB2YWx1ZS50cmltKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gaGlkZUlmT3B0aW9uczogJHtoaWRlSWZPcHRpb25zLm1hcCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiAodmFsdWUgPyBgJHtuYW1lfTogJHt2YWx1ZX1gIDogbmFtZSkpLmpvaW4oJzsgJyl9YCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgdGhlbk9wdGlvbnMgPSBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLm1hcChrdiA9PiBrdi5zcGxpdCgnOicsIDIpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcclxuICAgICAgICAgICAgbmFtZToga2V5LnRyaW0oKSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUudHJpbSgpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRoZW5PcHRpb25zOiAke3RoZW5PcHRpb25zLm1hcCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiAodmFsdWUgPyBgJHtuYW1lfTogJHt2YWx1ZX1gIDogbmFtZSkpLmpvaW4oJzsgJyl9YCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEZsYWcgdG8gY2hlY2sgaWYgb3B0aW9uOnZhbHVlIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgIG1hdGNoZXMgd2l0aCBjdXJyZW50IGZvcm0gZGF0YVxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBoaWRlSWZNYXRjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG9wdGlvbjp2YWx1ZSBpbiBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgIG1hdGNoZXMgd2l0aCBjdXJyZW50IGZvcm0gZGF0YVxyXG4gICAgICAgIGhpZGVJZk9wdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtvcHRpb25JZCwgdmFsdWVJZF0gPSB0aGlzLmZpbmRPcHRpb25WYWx1ZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZSA9IE51bWJlcihmb3JtRGF0YS5nZXRBbGwoYGF0dHJpYnV0ZVske29wdGlvbklkfV1gKS5zbGljZSgtMSlbMF0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm1WYWx1ZSA9PT0gdmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgaGlkZUlmTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlSWZNYXRjaDogJywgaGlkZUlmTWF0Y2gpO1xyXG5cclxuICAgICAgICBpZiAoaGlkZUlmTWF0Y2gpIHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgb3B0aW9uIHNob3VsZCBiZSBoaWRkZW4gd2hlbiBtYXRjaGluZyB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYFxyXG4gICAgICAgICAgICB0aGVuT3B0aW9ucy5mb3JFYWNoKCh7IG5hbWUsIHZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgY3VzdG9tIGZpZWxkIHZhbHVlIGNvbnRhaW4gb3B0aW9uIG5hbWUgd2l0aG91dCB2YWx1ZSwgdGhlbiBoaWRlIHRoZSB3aG9sZSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvbjogJywgaGlkZU9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb24udmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgaGlkZSB0aGUgc3BlY2lmaWMgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCgoeyBsYWJlbCwgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaGlkZU9wdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogb3B0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb25WYWx1ZXMucHVzaChfaGlkZU9wdGlvblZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb25WYWx1ZTogJywgX2hpZGVPcHRpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGlkZU9wdGlvbiB8fCBoaWRlT3B0aW9uVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaGlkZU9wdGlvbiwgaGlkZU9wdGlvblZhbHVlcyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gYmVsb25ncyB0byB0aGUgZ3JvdXAgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt7XHJcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XHJcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiBAcmV0dXJucyB7eyBncm91cE5hbWU6IHN0cmluZywgZ3JvdXBPcHRpb25JZHM6IEFycmF5PG51bWJlcj4gfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaEdyb3VwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0Bncm91cFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cE5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBPcHRpb25JZHMgPSBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLm1hcChzID0+IHMudHJpbSgpKSAvLyBvcHRpb24gbmFtZXNcclxuICAgICAgICAgICAgICAgIC5tYXAob3B0aW9uTmFtZSA9PiB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgZGlzcGxheV9uYW1lIH0pID0+IGVxdWFsT3B0aW9uU3RyaW5nKGRpc3BsYXlfbmFtZSwgb3B0aW9uTmFtZSkpPy5pZClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyb3VwT3B0aW9uSWRzLmluY2x1ZGVzKG9wdGlvbi5pZCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBncm91cCBpbiB0aGlzIGN1c3RvbSBmaWVsZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBncm91cE5hbWU6ICR7Z3JvdXBOYW1lfSwgZ3JvdXBPcHRpb25JZHM6ICR7Z3JvdXBPcHRpb25JZHN9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBncm91cE5hbWUsIGdyb3VwT3B0aW9uSWRzIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHZhbHVlIGhhcyBhIHRvb2x0aXAgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9XHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGRpc3BsYXlfbmFtZSxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBsYWJlbFxyXG4gICAgICogICAgIH1dXHJcbiAgICAgKiAgIH1cclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgdG9vbHRpcDogc3RyaW5nIH0gfCB7IHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBtWzFdLnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gY3VzdG9tRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0b29sdGlwIGZvciBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGZvciBvcHRpb24gXCIke25hbWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0b29sdGlwIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcHMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRvb2x0aXAgZm9yIG9wdGlvbiB2YWx1ZVxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgaWQsIGxhYmVsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGZvciBvcHRpb24gXCIke25hbWV9IDogJHt2YWx1ZX1cIiA9IFwiXCJcIiR7dG9vbHRpcH1cIlwiXCJgKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBzW2lkXSA9IHRvb2x0aXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWVUb29sdGlwcyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBncm91cCBoYXMgYSB0b29sdGlwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXAgKGdyb3VwIG5hbWUpID0gdG9vbHRpcGBcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBncm91cE5hbWU6IHN0cmluZ1xyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoVG9vbHRpcEdyb3VwKHsgY3VzdG9tRmllbGQsIGdyb3VwTmFtZSB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IGN1c3RvbUZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggZ3JvdXAgbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKGdyb3VwTmFtZSwgbmFtZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3IgZ3JvdXAgXCIke25hbWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgdG9vbHRpcCBoZWFkaW5nIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICogICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9XHJcbiAgICAgKiB9fSBwYXJhbTBcclxuICAgICAqIEByZXR1cm5zIHt7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwX2hlYWRpbmdcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IG1bMV0uc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBjdXN0b21GaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIG9wdGlvbiBuYW1lIG9yIG5vdCB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIXZhbHVlIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwSGVhZGluZ3MgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCgoeyBpZCwgbGFiZWwgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgaGVhZGluZyBmb3Igb3B0aW9uIFwiJHtuYW1lfSA6ICR7dmFsdWV9XCIgPSBcIlwiXCIke2hlYWRpbmd9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwSGVhZGluZ3NbaWRdID0gaGVhZGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb29sdGlwSGVhZGluZ3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiBuYW1lIGNvbnRhaW5zIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lYFxyXG4gICAgICogYW5kIHJldHVybiB0aGUgbmV3IG5hbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wLmN1c3RvbUZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLmN1c3RvbUZpZWxkLm5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbTAuY3VzdG9tRmllbGQudmFsdWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbTAub3B0aW9uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLm9wdGlvbi5kaXNwbGF5X25hbWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9IG5ldyBvcHRpb24gbmFtZVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoUmVuYW1lKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0ByZW5hbWVcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IG1bMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gU3RyaW5nKGN1c3RvbUZpZWxkLnZhbHVlKS50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHJlbmFtZSBvcHRpb24gXCIke25hbWV9XCIgdG8gXCIke25ld05hbWV9XCJgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiB2YWx1ZSBoYXMgYSBub24tc2FsZSBwcmljZSBpbiB0aGUgY3VzdG9tIGZpZWxkXHJcbiAgICAgKiBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICogICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9LFxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH19XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVOb25TYWxlcyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19Abm9uc2FsZVxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IE51bWJlcihtWzFdLnRyaW0oKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzcGxpdCBlYWNoIChvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlKSBwYWlyIHNlcGFyYXRlZCBieSBcIjtcIlxyXG4gICAgICAgICAgICBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLmZvckVhY2goa3YgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gc3BsaXQgb3B0aW9uIG5hbWUgOiBvcHRpb24gdmFsdWUgaW4gY3VzdG9tIGZpZWxkIHZhbHVlIHNlcGFyYXRlZCBieSBcIjpcIlxyXG4gICAgICAgICAgICAgICAgY29uc3QgW29wdGlvbk5hbWUsIHZhbHVlTGFiZWxdID0ga3Yuc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG9wdGlvbk5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIG5hbWUgaW4gY3VzdG9tIGZpZWxkIG1hdGNoIHdpdGggY3VycmVudCBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgb3B0aW9uIHZhbHVlIElEIHRoYXQgbWF0Y2hlcyB3aXRoIHRoZSB2YWx1ZSBsYWJlbCBpbiBjdXN0b20gZmllbGRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gb3B0aW9uLnZhbHVlcy5maW5kKCh7IGxhYmVsIH0pID0+IGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZUxhYmVsKSk/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBub24tc2FsZSBwcmljZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBvcHRpb24gdmFsdWUgSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVOb25TYWxlc1t2YWx1ZUlkXSA9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZU5vblNhbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2ggc3RvcmUgc2V0dGluZ3MgaW5jbHVkaW5nIHRheCBhbmQgYWN0aXZlIGN1cnJlbmN5XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8e1xyXG4gICAgICogICB0YXg6IHsgcGRwOiBudW1iZXIgfSxcclxuICAgICAqICAgY3VycmVuY3k6IHtcclxuICAgICAqICAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgZGlzcGxheTogeyBkZWNpbWFsUGxhY2VzOiBudW1iZXIsIGRlY2ltYWxUb2tlbjogc3RyaW5nLCBzeW1ib2w6IHN0cmluZywgc3ltYm9sUGxhY2VtZW50OiBzdHJpbmcsIHRob3VzYW5kc1Rva2VuOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBleGNoYW5nZVJhdGU6IG51bWJlciwgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBkZWZhdWx0Q3VycmVuY3k6IHtcclxuICAgICAqICAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgZGlzcGxheTogeyBkZWNpbWFsUGxhY2VzOiBudW1iZXIsIGRlY2ltYWxUb2tlbjogc3RyaW5nLCBzeW1ib2w6IHN0cmluZywgc3ltYm9sUGxhY2VtZW50OiBzdHJpbmcsIHRob3VzYW5kc1Rva2VuOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBleGNoYW5nZVJhdGU6IG51bWJlciwgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogfT5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hTZXR0aW5ncygpIHtcclxuICAgICAgICBpZiAoY2FjaGVkU2V0dGluZ3MpIHJldHVybiBjYWNoZWRTZXR0aW5ncztcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlZmF1bHRDdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSFcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeShjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5DdXJyZW5jeUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBjdXJyZW5jeShjdXJyZW5jeUNvZGU6ICRkZWZhdWx0Q3VycmVuY3lDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQ3VycmVuY3lGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgQ3VycmVuY3lGaWVsZHMgb24gQ3VycmVuY3kge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFBsYWNlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNoYW5nZVJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuZGVmYXVsdF9jdXJyZW5jeV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhY2hlZFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICAuLi5yZXNwLmRhdGEuc2l0ZS5zZXR0aW5ncyxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHJlc3AuZGF0YS5zaXRlLmN1cnJlbmN5LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIG9wdGlvbiBwcmljZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PHsgaWQ6IG51bWJlciwgdmFsdWVzOiBBcnJheTx7IGlkOiBudW1iZXIgfT4gfT59IHNob3dPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8e1xyXG4gICAgICogICBvcHRpb25JZDogbnVtYmVyfG51bGwsXHJcbiAgICAgKiAgIHZhbHVlSWQ6IG51bWJlcnxudWxsLFxyXG4gICAgICogICBwcmljZXNXaXRoVGF4OiB7XHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgcHJpY2VzV2l0aG91dFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIGFkanVzdGVkUHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG51bWJlcixcclxuICAgICAqICAgfSxcclxuICAgICAqICAgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4OiB7XHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBub25TYWxlUHJpY2VWYWx1ZTogbnVtYmVyLFxyXG4gICAgICogICB9LFxyXG4gICAgICogfT4+fVxyXG4gICAgICovXHJcbiAgICBhc3luYyBmZXRjaE9wdGlvblByaWNlcyhzaG93T3B0aW9ucywgZm9ybURhdGEpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlSWRzID0gW107XHJcblxyXG4gICAgICAgIGZvcm1EYXRhLmVudHJpZXMoKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IGtleS5tYXRjaCgvXmF0dHJpYnV0ZVxcWyhcXGQrKVxcXSQvKTtcclxuICAgICAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVudGl0eUlkID0gTnVtYmVyKG1bMV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVFbnRpdHlJZCA9IE51bWJlcih2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlRW50aXR5SWQgJiYgIXNob3dPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IG9wdGlvbkVudGl0eUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWVJZHMucHVzaCh7IG9wdGlvbkVudGl0eUlkLCB2YWx1ZUVudGl0eUlkIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW1xyXG4gICAgICAgICAgICAvLyBmZXRjaCBhbHJlYWR5IHNlbGVjdGVkIG9wdGlvbnMnIHByaWNlc1xyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmZldGNoT3B0aW9uUHJpY2Uoc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgc2hvd09wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBvcHRpb24udmFsdWVzIHx8IChvcHRpb24udmFsdWUgPyBbeyBpZDogb3B0aW9uLnZhbHVlIH1dIDogW10pO1xyXG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBmZXRjaCBjdXJyZW50IG9wdGlvbiB2YWx1ZSdzIHByaWNlc1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hPcHRpb25QcmljZShbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkT3B0aW9uVmFsdWVJZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkVudGl0eUlkOiBvcHRpb24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUVudGl0eUlkOiB2YWx1ZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdKS50aGVuKHByb2R1Y3QgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVJZDogdmFsdWUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtwcmV2LCAuLi5zZWxlY3Rpb25zXSA9IGF3YWl0IGhhbmRsZVByb21pc2VzV2l0aExpbWl0KHByb21pc2VzKTtcclxuXHJcbiAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKHNlbGVjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucHJpY2VzV2l0aFRheCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBub24tc2FsZSBwcmljZSBiYXNlZCBvbiB0aGUgcHJldmlvdXMgcHJpY2UgYW5kIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zaWRlciBhbGwgbm93IHByaWNlIGFuZCByZWd1bGFyIHByaWNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9uU2FsZVByaWNlV2l0aFRheCA9IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAvLyB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWUgLSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbm9uLXNhbGUgcHJpY2UgaWYgaXQncyBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIGlmIChub25TYWxlUHJpY2VXaXRoVGF4IDw9IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRqdXN0ZWRQcmljZXNXaXRoVGF4ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVZhbHVlOiBub25TYWxlUHJpY2VXaXRoVGF4LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vbi1zYWxlIHByaWNlIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBwcmljZSBhbmQgdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNpZGVyIGFsbCBub3cgcHJpY2UgYW5kIHJlZ3VsYXIgcHJpY2VcclxuICAgICAgICAgICAgICAgIGxldCBub25TYWxlUHJpY2VXaXRob3V0VGF4ID0gc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXg/LmJhc2VQcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZSAtIHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBub24tc2FsZSBwcmljZSBpZiBpdCdzIGxlc3MgdGhhbiB0aGUgY3VycmVudCBwcmljZVxyXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGVQcmljZVdpdGhvdXRUYXggPD0gc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5hZGp1c3RlZFByaWNlc1dpdGhvdXRUYXggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG5vblNhbGVQcmljZVdpdGhvdXRUYXgsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gZmV0Y2hPcHRpb25QcmljZXMgcmV0dXJuczogJywgc2VsZWN0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIFtwcmV2LCAuLi5zZWxlY3Rpb25zXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHByb2R1Y3QgcHJpY2UgZnJvbSBzcGVjaWZpYyBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTx7IG9wdGlvbkVudGl0eUlkOiBudW1iZXIsIHZhbHVlRW50aXR5SWQ6IG51bWJlcn0+fSBvcHRpb25WYWx1ZUlkc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8eyBwcmljZXNXaXRoVGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9LCBwcmljZXNXaXRob3V0VGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9IH0+XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGZldGNoT3B0aW9uUHJpY2Uob3B0aW9uVmFsdWVJZHMpIHtcclxuICAgICAgICBjb25zdCBjYWNoZUtleSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvblZhbHVlSWRzKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtjYWNoZUtleV0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHhockZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgKCRwcm9kdWN0SWQ6IEludCEsICRvcHRpb25WYWx1ZUlkczogW09wdGlvblZhbHVlSWQhXSwgJGN1cnJlbmN5Q29kZTogY3VycmVuY3lDb2RlISkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdChlbnRpdHlJZDogJHByb2R1Y3RJZCwgb3B0aW9uVmFsdWVJZHM6ICRvcHRpb25WYWx1ZUlkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRoVGF4OiBwcmljZXMoY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlLCBpbmNsdWRlVGF4OiB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlc1dpdGhvdXRUYXg6IHByaWNlcyhjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUsIGluY2x1ZGVUYXg6IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5RmllbGRzIG9uIE1vbmV5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBQcmljZUZpZWxkcyBvbiBQcmljZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWVJZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hPcHRpb25QcmljZUNhY2hlW2NhY2hlS2V5XSA9IHJlc3AuZGF0YS5zaXRlLnByb2R1Y3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVbY2FjaGVLZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheSB0b29sdGlwcyB0byB0aGUgY29ycmVzcG9uZGluZyBzaG93biBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxUaXRsZVxyXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyB0b29sdGlwOiBzdHJpbmcsIHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0gfX0gdG9vbHRpcHNcclxuICAgICAqIEBwYXJhbSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH19IHRvb2x0aXBIZWFkaW5nc1xyXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaG93T3B0aW9uSWRzIG9wdGlvbiBpZHMgdG8gc2hvdyB0b29sdGlwc1xyXG4gICAgICovXHJcbiAgICBzaG93T3B0aW9uVG9vbHRpcHMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsVGl0bGUsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MsIHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICAvLyBEaXNwbGF5IHRvb2x0aXBcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwcykuZm9yRWFjaCgoW29wdGlvbklkLCB7IHRvb2x0aXAsIHZhbHVlVG9vbHRpcHMgfV0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcihvcHRpb25JZCkpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdG9vbHRpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIG9wdGlvbklkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkb3B0aW9uLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQ9XCIke29wdGlvbklkfVwiXWApLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRsYWJlbCA9ICRvcHRpb24uZmluZCgnbGFiZWwnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkbGFiZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYWJlbC5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb24ucHJlcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcHMpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB2YWx1ZVRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICRvcHRpb24uZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICR2YWx1ZS5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpZiBvbmx5IDEgb3B0aW9uIHNob3duIGF0IGN1cnJlbnQgc3RlcCxcclxuICAgICAgICAvLyB0aGVuIG1vdmUgaXRzIHRvb2x0aXAgdG8gdGhlIG1vZGFsIHRpdGxlXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtzaG93T3B0aW9uSWRzWzBdfVwiXWApO1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSB0b29sdGlwIGhlYWRpbmdcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwSGVhZGluZ3MpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKFtvcHRpb25JZF0pID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKG9wdGlvbklkKSkpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChbb3B0aW9uSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmdzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcEhlYWRpbmdzKS5mb3JFYWNoKChbdmFsdWVJZCwgdmFsdWVUb29sdGlwSGVhZGluZ10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwSGVhZGluZyA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUucmVwbGFjZSgnPCVoZWFkaW5nJT4nLCB2YWx1ZVRvb2x0aXBIZWFkaW5nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMoKSB7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKCEkcHJvZHVjdE9wdGlvbnNFbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZF0sIFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZF0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2R1Y3RPcHRpb25zLmxlbmd0aCB8fCAhdGhpcy5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbklkcyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkXScpXHJcbiAgICAgICAgICAgIC5tYXAoKF9pbmRleCwgZWwpID0+IE51bWJlcigkKGVsKS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSlcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBzID0ge307XHJcbiAgICAgICAgY29uc3QgdG9vbHRpcEhlYWRpbmdzID0ge307XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBvcHRpb25JZHMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAgICAgICAuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdG9vbHRpcE1hdGNoLnRvb2x0aXAgfHwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcHM6IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBzW29wdGlvbi5pZF0/LnZhbHVlVG9vbHRpcHMsIHRvb2x0aXBNYXRjaC52YWx1ZVRvb2x0aXBzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUb29sdGlwSGVhZGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSwgdmFsdWVUb29sdGlwSGVhZGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93SW5saW5lT3B0aW9uVG9vbHRpcHMoJHByb2R1Y3RPcHRpb25zRWwsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJbmxpbmVPcHRpb25Ub29sdGlwcygkcHJvZHVjdE9wdGlvbnNFbCwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncykge1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvb2x0aXBzKS5mb3JFYWNoKChbb3B0aW9uSWQsIHsgdG9vbHRpcCwgdmFsdWVUb29sdGlwcyA9IHt9IH1dKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRvcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25Ub29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB0b29sdGlwKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkJywgb3B0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGxhYmVsID0gJG9wdGlvbi5maW5kKCdsYWJlbCcpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRsYWJlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxhYmVsLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb24ucHJlcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcHMpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEkdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdmFsdWVUb29sdGlwKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJzpzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkb3B0aW9uLmZpbmQoJ3NlbGVjdCcpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNlbGVjdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2VsZWN0LmFmdGVyKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb24uYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFmdGVyKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvb2x0aXBIZWFkaW5ncykuZm9yRWFjaCgoW29wdGlvbklkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nc10pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJG9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwSGVhZGluZ3MpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJG9wdGlvbi5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcEhlYWRpbmcgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlLnJlcGxhY2UoJzwlaGVhZGluZyU+JywgdmFsdWVUb29sdGlwSGVhZGluZykpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJzpzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkb3B0aW9uLmZpbmQoJ3NlbGVjdCcpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNlbGVjdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2VsZWN0LmFmdGVyKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLmFwcGVuZCgkdG9vbHRpcEhlYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIG9wdGlvbnMgYW5kIGRpc3BsYXkgY29udGludWUgYnV0dG9uIGlmIG5lY2Vzc2FyeS5cclxuICAgICAqIFN0b3AgYXV0byB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IHVudGlsIHRoZSBjb250aW51ZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAqXHJcbiAgICAgKiBDb250aW51ZSBidXR0b24gaXMgc2hvd24gaWYgYW55IG9mIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gICAgICogLSBvcHRpb25zIHRoYXQgaGFzIGRlZmF1bHQgdmFsdWVcclxuICAgICAqIC0gY2hlY2tib3ggb3B0aW9uc1xyXG4gICAgICogLSBvcHRpb25hbCBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgICogLSBvcHRpb25hbCBkYXRlIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgKiAtIGZpbGUgaW5wdXRcclxuICAgICAqIC0gbW9yZSB0aGFuIDEgb3B0aW9uIGFyZSBzaG93biBhdCB0aGUgc2FtZSB0aW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBzaG93T3B0aW9uSWRzIHNob3cgb3B0aW9uIGlkc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxDb250aW51ZVxyXG4gICAgICovXHJcbiAgICBwb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMoc2hvd09wdGlvbklkcywgJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsQ29udGludWUpIHtcclxuICAgICAgICBjb25zdCBzaG93bk9wdGlvbnMgPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBpZCB9KSA9PiBzaG93T3B0aW9uSWRzLmluY2x1ZGVzKGlkKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIG9wdGlvbnMgdGhhdCBoYXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcHJlZmlsbCwgc2VsZWN0ZWRfZGF0ZSwgdmFsdWVzIH0pID0+XHJcbiAgICAgICAgICAgICAgICBwcmVmaWxsIHx8XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZF9kYXRlICYmIChzZWxlY3RlZF9kYXRlLmRheSB8fCBzZWxlY3RlZF9kYXRlLm1vbnRoIHx8IHNlbGVjdGVkX2RhdGUueWVhcikgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlcz8uZmluZCgoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjaGVja2JveCB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBjaGVja2JveE9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBub1ZhbHVlLCB2YWx1ZSB9KSA9PiBub1ZhbHVlIHx8IHZhbHVlKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZmlsZSB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBmaWxlT3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHBhcnRpYWwgfSkgPT4gcGFydGlhbCA9PT0gJ2lucHV0LWZpbGUnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZGF0ZSB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkYXRlT3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHBhcnRpYWwgfSkgPT4gcGFydGlhbCA9PT0gJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZHJvcGRvd24gdHlwZSBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcmVxdWlyZWQsIHBhcnRpYWwgfSkgPT4gIXJlcXVpcmVkICYmIHBhcnRpYWwgPT09ICdzZXQtc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRleHQgLyBtdWx0aWxpbmUgLyBudW1iZXIgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRleHRPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnaW5wdXQtdGV4dCcgfHwgcGFydGlhbCA9PT0gJ3RleHRhcmVhJyB8fCBwYXJ0aWFsID09PSAnaW5wdXQtbnVtYmVycycpO1xyXG5cclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgIHx8IGRlZmF1bHRPcHRpb25zLmxlbmd0aCA+IDAgfHwgY2hlY2tib3hPcHRpb25zLmxlbmd0aCA+IDAgfHwgZmlsZU9wdGlvbnMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICB8fCBkYXRlT3B0aW9ucy5sZW5ndGggPiAwIHx8IGRyb3Bkb3duT3B0aW9ucy5sZW5ndGggPiAwIHx8IHRleHRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gc2hvdyBjb250aW51ZSBidXR0b25cclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29udGludWUuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBhdXRvIHVwZGF0ZSB0aGUgbW9kaWZpZXJzIHZpZXcgdW50aWwgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gb3B0aW9uc1xyXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucy5mb3JFYWNoKCh7XHJcbiAgICAgICAgICAgICAgICBpZCwgcHJlZmlsbCwgc2VsZWN0ZWRfZGF0ZSwgdmFsdWVzLFxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gdmFsdWVzPy5maW5kKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKT8uaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnc2VsZWN0JykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1gKS52YWwodmFsdWVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt2YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByZWZpbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdYCkudmFsKHByZWZpbGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZF9kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX2RhdGUuZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW2RheV1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS5kYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRfZGF0ZS5tb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVttb250aF1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS5tb250aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9kYXRlLnllYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1beWVhcl1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIGNoZWNrYm94IG9wdGlvbnNcclxuICAgICAgICAgICAgY2hlY2tib3hPcHRpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgICAgIGlkLCBjaGVja2VkLCB2YWx1ZSwgbm9WYWx1ZSxcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJoaWRkZW5cIl1gKS52YWwodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImNoZWNrYm94XCJdYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJoaWRkZW5cIl1gKS52YWwobm9WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiY2hlY2tib3hcIl1gKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1hcmsgZmlsZSBpbnB1dCwgZGF0ZSBpbnB1dCwgZHJvcGRvd24gc2VsZWN0LCB0ZXh0IGlucHV0IGFzIHNob3duXHJcbiAgICAgICAgICAgIFsuLi5maWxlT3B0aW9ucywgLi4uZGF0ZU9wdGlvbnMsIC4uLmRyb3Bkb3duT3B0aW9ucywgLi4udGV4dE9wdGlvbnNdLmZvckVhY2goKHsgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVtkYXldXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bbW9udGhdXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1beWVhcl1cIl1gKS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzKSB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBwcmVsb2FkZXI6IHRydWUgfTtcclxuICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgY29uc3QgcHJpY2VUZXh0ID0gbXVzdGFjaGUucmVuZGVyKHRoaXMub3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG5cclxuICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV1gKVxyXG4gICAgICAgICAgICAgICAgLmVhY2goKF9pLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSBOdW1iZXIoJHZhbHVlLmF0dHIoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZUlkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByaWNlID0gJChwcmljZUh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBhbHJlYWR5IGhhcyBwcmljZSBkaXNwbGF5ZWQgYmVmb3JlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmRhdGEoJ3ByaWNlSHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnLCAkdmFsdWUudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS50ZXh0KGAkeyR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKX0gJHtwcmljZVRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkb2xkID0gJHZhbHVlLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkPVwiJHtvcHRpb25JZH0tJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG9sZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb2xkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHBsYWNlaG9sZGVyID0gJHZhbHVlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLXBsYWNlaG9sZGVyXScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwoJHByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgcHJpY2VzIHRvIGNvcnJlc3BvbmRpbmcgb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VidG90YWxcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2hvd09wdGlvbklkcyBvcHRpb24gaWRzIHRvIHNob3cgcHJpY2VzXHJcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxyXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH0gfX0gbm9uZVNhbGVzIG9wdGlvbiB2YWx1ZXMgd2l0aCBub24tc2FsZSBwcmljZXNcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZVVwZGF0ZVN1YnRvdGFsPWZhbHNlXSBpZ25vcmUgdXBkYXRlIHN1YnRvdGFsXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMsIGlnbm9yZVVwZGF0ZVN1YnRvdGFsID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBbc2V0dGluZ3MsIFtwcmV2LCAuLi5zZWxlY3Rpb25zXV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hTZXR0aW5ncygpLFxyXG4gICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2VzKFxyXG4gICAgICAgICAgICAgICAgc2hvd09wdGlvbklkcy5tYXAoX2lkID0+IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gX2lkKSksXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd1ByaWNlID0gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dQcmljZUZyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnR4dFByaWNlRnJlZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93UHJpY2VaZXJvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UHJpY2UodmFsdWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFByaWNlKHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgb3B0aW9uSWQsIHZhbHVlSWQsIGFkanVzdGVkUHJpY2VzV2l0aFRheCwgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4LFxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiBhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXg6IHNob3dQcmljZShhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiAoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUsIHRydWUpIDogJycpLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiBzaG93UHJpY2UoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IChhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlLCB0cnVlKSA6ICcnKSxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyYW1zLnByaWNlV2l0aFRheCB8fCBwYXJhbXMucHJpY2VXaXRob3V0VGF4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvdmVycmlkZSBub24tc2FsZSBwcmljZSBmb3Igb3B0aW9uIHZhbHVlcyBpZiBpdCBpcyBhcHBlYXJzIGluIGN1c3RvbSBmaWVsZCBgX19Abm9uc2FsZWBcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBpZiBpdCdzIGhpZ2hlciB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub25TYWxlID0gbm9uZVNhbGVzW29wdGlvbklkXT8uW3ZhbHVlSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGNoYW5nZWROb25TYWxlID0gbm9uU2FsZSAqIHNldHRpbmdzLmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVZhbHVlID0gc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSA6IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNoYW5nZWROb25TYWxlID4gcHJpY2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IGV4Y2hhbmdlZE5vblNhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogdGhpcy5mb3JtYXRQcmljZShleGNoYW5nZWROb25TYWxlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiBleGNoYW5nZWROb25TYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IHRoaXMuZm9ybWF0UHJpY2UoZXhjaGFuZ2VkTm9uU2FsZSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVRleHQgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVBsYWluVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcmljZSA9ICQocHJpY2VIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JywgJHZhbHVlLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS50ZXh0KGAkeyR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKX0gJHtwcmljZVRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ3ByaWNlSHRtbCcsIHByaWNlSHRtbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGxhY2Vob2xkZXIgPSAkdmFsdWUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtcGxhY2Vob2xkZXJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTaG93IHN1YnRvdGFsIGNhbGN1bGF0ZWQgZnJvbSBhbGwgc2VsZWN0ZWQgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmICghaWdub3JlVXBkYXRlU3VidG90YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9uU3VidG90YWwoJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHByZXYsIHNldHRpbmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5IHN1YnRvdGFsIGZvciB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgcHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfCBudWxsLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBwcmljZXNXaXRob3V0VGF4OiB7XHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfCBudWxsLFxyXG4gICAgICogfX0gcHJvZHVjdFxyXG4gICAgICogQHBhcmFtIHt7IHRheDogeyBwZHA6IG51bWJlciB9IH19IHNldHRpbmdzXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBzaG93T3B0aW9uU3VidG90YWwoJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHByb2R1Y3QsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdHh0U3VidG90YWw6IHRoaXMuY29udGV4dC50eHRTdWJ0b3RhbCxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogJycsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3QucHJpY2VzV2l0aFRheD8ucHJpY2UgfHwgcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4Py5wcmljZSkge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheDogdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiBwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4OiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IHN1bW1hcnkgb2Ygc2VsZWN0ZWQgb3B0aW9ucyBiZWZvcmUgYWRkaW5nIHRvIGNhcnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1bW1hcnlcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbFxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFRpdGxlXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGFkZFRvQ2FydFdyYXBwZXJcclxuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZWxvYWRlclxyXG4gICAgICovXHJcbiAgICBzaG93U3VtbWFyeSgkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5LCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgJG1vZGlmaWVyc01vZGFsVGl0bGUsICRhZGRUb0NhcnRXcmFwcGVyLCBmb3JtRGF0YSwgcHJlbG9hZGVyID0gZmFsc2UpIHtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5odG1sKHRoaXMuY29udGV4dC50eHRSZXZpZXdTZWxlY3Rpb25zKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9ICFwcmVsb2FkZXJcclxuICAgICAgICAgICAgPyAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKClcclxuICAgICAgICAgICAgOiBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCB7IHByZWxvYWRlciB9LCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgIGNvbnN0ICRzdWJ0b3RhbCA9ICQoc3VidG90YWxIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZS1zdWJ0b3RhbCcsICcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheVN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XWApO1xyXG4gICAgICAgICAgICBjb25zdCBtb250aFN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bbW9udGhdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHllYXJTdHIgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF5U3RyIHx8IG1vbnRoU3RyIHx8IHllYXJTdHIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoYCR7eWVhclN0cn0tJHttb250aFN0cn0tJHtkYXlTdHJ9YCkudG9Mb2NhbGVEYXRlU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU6IGAke3llYXJTdHJ9LSR7bW9udGhTdHJ9LSR7ZGF5U3RyfWAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVTdHIgPSBmb3JtRGF0YS5nZXRBbGwoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCkuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlU3RyIHx8IHZhbHVlU3RyID09PSAnMCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZVN0ciBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVN0ci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlU3RyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZVN0ciA/IE51bWJlcih2YWx1ZVN0cikgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBpdCBpcyBjaGVja2JveCBhbmQgbm90IGNoZWNrZWRcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5ub1ZhbHVlICYmIG9wdGlvbi5ub1ZhbHVlID09PSB2YWx1ZUlkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUxhYmVsID0gb3B0aW9uLnZhbHVlcz8uZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gdmFsdWVJZCk/LmxhYmVsXHJcbiAgICAgICAgICAgICAgICB8fCAob3B0aW9uLnZhbHVlID09PSB2YWx1ZUlkID8gb3B0aW9uLmxhYmVsIDogdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlSHRtbCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbi5pZH0tJHt2YWx1ZUlkfVwiXWApXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKS5jbG9uZSgpLnJlbW92ZUF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnKVswXT8ub3V0ZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxQcmljZUh0bWwgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl0gb3B0aW9uW3ZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLmRhdGEoJ3ByaWNlSHRtbCcpO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5kaXNwbGF5X25hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVMYWJlbCB8fCB2YWx1ZVN0cixcclxuICAgICAgICAgICAgICAgIHByaWNlSHRtbDogcHJpY2VIdG1sIHx8IG9wdGlvbkVsUHJpY2VIdG1sLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VtbWFyeUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdW1tYXJ5VGVtcGxhdGUsIHsgb3B0aW9ucyB9LCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1bW1hcnkuaHRtbChzdW1tYXJ5SHRtbCk7XHJcblxyXG4gICAgICAgIC8vIEluc2VydCBzdWJ0b3RhbCB0byB0byBhZGQgdG8gY2FydCB3cmFwcGVyIGFuZCBzaG93IGl0XHJcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlLXN1YnRvdGFsXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLmZpbmQodGhpcy5hZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IpLnByZXBlbmQoJHN1YnRvdGFsKTtcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5zaG93KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2VdXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aG91dF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRob3V0X3RheC5jdXJyZW5jeVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2UudGF4X2xhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmN1cnJlbmN5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRoX3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRoX3RheC5jdXJyZW5jeVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC5jdXJyZW5jeVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdHh0U3VidG90YWw6IHRoaXMuY29udGV4dC50eHRTdWJ0b3RhbCxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogJycsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEucHJpY2UpIHtcclxuICAgICAgICAgICAgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgLi4uKGRhdGEucHJpY2Uud2l0aF90YXggPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6IGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiBkYXRhLnByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAuLi4oZGF0YS5wcmljZS53aXRob3V0X3RheCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IGRhdGEucHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXG4gKiBQYXJzZXMgYW4gSVNPIGRhdGUtdGltZSBzdHJpbmcgYW5kIGV4dHJhY3RzIHRoZSBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgZGF0ZS10aW1lIHN0cmluZyB0byBwYXJzZS5cbiAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGV4dHJhY3RlZCBjb21wb25lbnRzLCBvciBgbnVsbGAgaWYgdGhlIGZvcm1hdCBpcyBpbnZhbGlkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlVGltZVN0cmluZyhzdHIpIHtcbiAgICBjb25zdCByZWdleCA9IC9eXFxzKig/Oig/OihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pKXwoPzooXFxkezJ9KS0oXFxkezJ9KSkpPyg/OltUXFxzXSk/KD86KFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSkoPzpcXC5cXGQrKT98KFxcZHsyfSk6KFxcZHsyfSl8KFxcZHsyfSkpP1xccyooPzpafChbKy1dKShcXGR7MSwyfSkoPzo6PyhcXGR7Mn0pKT8pP1xccyokLztcblxuICAgIGNvbnN0IG1hdGNoID0gc3RyLnRyaW0oKS5tYXRjaChyZWdleCk7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgICByZXR1cm4gbnVsbDsgLy8gSW52YWxpZCBmb3JtYXRcbiAgICB9XG5cbiAgICBjb25zdCBbXG4gICAgICAgICxcbiAgICAgICAgeWVhciwgbW9udGgsIGRheSwgLy8gWzFdLCBbMl0sIFszXVxuICAgICAgICBzaG9ydE1vbnRoLCBzaG9ydERheSwgLy8gWzRdLCBbNV1cbiAgICAgICAgaG91ciwgbWludXRlLCBzZWNvbmQsIC8vIFs2XSwgWzddLCBbOF1cbiAgICAgICAgc2hvcnRIb3VyLCBzaG9ydE1pbnV0ZSwgLy8gWzldLCBbMTBdXG4gICAgICAgIHNpbmdsZVRpbWVDb21wb25lbnQsIC8vIFsxMV1cbiAgICAgICAgdHpTaWduLCB0ekhvdXJPZmZzZXQsIHR6TWludXRlT2Zmc2V0LCAvLyBbMTJdLCBbMTNdLCBbMTRdXG4gICAgXSA9IG1hdGNoO1xuXG4gICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAvLyBEYXRlIGNvbXBvbmVudHNcbiAgICBpZiAoeWVhciAmJiBtb250aCAmJiBkYXkpIHtcbiAgICAgICAgcmVzdWx0LnllYXIgPSBwYXJzZUludCh5ZWFyLCAxMCk7XG4gICAgICAgIHJlc3VsdC5tb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XG4gICAgICAgIHJlc3VsdC5kYXkgPSBwYXJzZUludChkYXksIDEwKTtcbiAgICB9IGVsc2UgaWYgKHNob3J0TW9udGggJiYgc2hvcnREYXkpIHtcbiAgICAgICAgcmVzdWx0Lm1vbnRoID0gcGFyc2VJbnQoc2hvcnRNb250aCwgMTApO1xuICAgICAgICByZXN1bHQuZGF5ID0gcGFyc2VJbnQoc2hvcnREYXksIDEwKTtcbiAgICB9XG5cbiAgICAvLyBUaW1lIGNvbXBvbmVudHNcbiAgICBpZiAoaG91ciAhPT0gdW5kZWZpbmVkICYmIG1pbnV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdC5ob3VyID0gcGFyc2VJbnQoaG91ciwgMTApO1xuICAgICAgICByZXN1bHQubWludXRlID0gcGFyc2VJbnQobWludXRlLCAxMCk7XG4gICAgICAgIGlmIChzZWNvbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50KHNlY29uZCwgMTApO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChzaG9ydEhvdXIgIT09IHVuZGVmaW5lZCAmJiBzaG9ydE1pbnV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdC5ob3VyID0gcGFyc2VJbnQoc2hvcnRIb3VyLCAxMCk7XG4gICAgICAgIHJlc3VsdC5taW51dGUgPSBwYXJzZUludChzaG9ydE1pbnV0ZSwgMTApO1xuICAgIH0gZWxzZSBpZiAoc2luZ2xlVGltZUNvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdC5ob3VyID0gcGFyc2VJbnQoc2luZ2xlVGltZUNvbXBvbmVudCwgMTApO1xuICAgIH1cblxuICAgIC8vIFRpbWV6b25lXG4gICAgaWYgKHR6U2lnbiAmJiB0ekhvdXJPZmZzZXQpIHtcbiAgICAgICAgY29uc3Qgc2lnbiA9IHR6U2lnbiA9PT0gJysnID8gMSA6IC0xO1xuICAgICAgICBjb25zdCB0ekhvdXIgPSBwYXJzZUludCh0ekhvdXJPZmZzZXQsIDEwKTtcbiAgICAgICAgY29uc3QgdHpNaW51dGUgPSB0ek1pbnV0ZU9mZnNldCA/IHBhcnNlSW50KHR6TWludXRlT2Zmc2V0LCAxMCkgOiAwO1xuICAgICAgICByZXN1bHQudGltZXpvbmUgPSBzaWduICogKHR6SG91ciArIHR6TWludXRlIC8gNjApO1xuICAgIH0gZWxzZSBpZiAoc3RyLmluY2x1ZGVzKCdaJykpIHtcbiAgICAgICAgcmVzdWx0LnRpbWV6b25lID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgZGF0ZS10aW1lIHN0cmluZyBpbnRvIGEgRGF0ZSBvYmplY3QgYWRqdXN0ZWQgZm9yIGNvdW50ZG93biBwdXJwb3Nlcy5cbiAqXG4gKiAtIElmIHRoZSBkYXRlLXRpbWUgc3RyaW5nIGRvZXMgbm90IGluY2x1ZGUgYSB5ZWFyLCBtb250aCwgb3IgZGF5LCBpdCBpcyB0cmVhdGVkIGFzIGEgZGFpbHkgY291bnRkb3duLlxuICogICBUaGUgZnVuY3Rpb24gd2lsbCBzZXQgdGhlIGRhdGUgdG8gdG9kYXkgb3Igcm9sbCBvdmVyIHRvIHRoZSBuZXh0IGRheSBpZiB0aGUgdGltZSBoYXMgYWxyZWFkeSBwYXNzZWQuXG4gKiAtIElmIHRoZSBkYXRlLXRpbWUgc3RyaW5nIGRvZXMgbm90IGluY2x1ZGUgYW4gaG91ciwgbWludXRlLCBvciBzZWNvbmQsIHRoZXkgZGVmYXVsdCB0byAwLlxuICogLSBUaGUgZnVuY3Rpb24gYWRqdXN0cyBmb3IgdGhlIHNwZWNpZmllZCB0aW1lem9uZSBvZmZzZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBkYXRlLXRpbWUgc3RyaW5nIHRvIHBhcnNlLlxuICogQHJldHVybnMge0RhdGV8dW5kZWZpbmVkfSBBIERhdGUgb2JqZWN0IHVzZWQgZm9yIHRoZSBjb3VudGRvd24sIG9yIGB1bmRlZmluZWRgIGlmIHBhcnNpbmcgZmFpbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvdW50ZG93bkRhdGUoc3RyKSB7XG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlRGF0ZVRpbWVTdHJpbmcoc3RyKTtcbiAgICBpZiAoIXBhcnNlZERhdGUpIHJldHVybjtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuICAgIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIHRpbWV6b25lIH0gPSBwYXJzZWREYXRlO1xuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB5ID0geWVhciA/PyBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtID0gbW9udGggPz8gKG5vdy5nZXRNb250aCgpICsgMSk7XG4gICAgY29uc3QgZCA9IGRheSA/PyBub3cuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGggPSBob3VyIHx8IDA7XG4gICAgY29uc3QgbWluID0gbWludXRlIHx8IDA7XG4gICAgY29uc3Qgc2VjID0gc2Vjb25kIHx8IDA7XG5cbiAgICBsZXQgZGF0ZTtcblxuICAgIGlmICh0aW1lem9uZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHV0Y01pbGxpcyA9IERhdGUuVVRDKHksIG0gLSAxLCBkLCBoLCBtaW4sIHNlYykgLSAodGltZXpvbmUgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh1dGNNaWxsaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAoeWVhcikgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICAgICAgaWYgKG1vbnRoKSBkYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7XG4gICAgICAgIGlmIChkYXkpIGRhdGUuc2V0RGF0ZShkYXkpO1xuICAgICAgICBkYXRlLnNldEhvdXJzKGgpO1xuICAgICAgICBkYXRlLnNldE1pbnV0ZXMobWluKTtcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKHNlYyk7XG4gICAgfVxuXG4gICAgaWYgKCF5ZWFyICYmICFtb250aCAmJiAhZGF5KSB7XG4gICAgICAgIC8vIGZvciBkYWlseSBjb3VudGRvd24sIGFkZCAxIGRheSBpZiBkYXRlIGlzIGluIHRoZSBwYXN0XG4gICAgICAgIGlmIChkYXRlIDwgbm93KSB7XG4gICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRlO1xufVxuXG4vKipcbiAqICoqU2FsZUNvdW50ZG93biBTaW5nbGV0b24gT2JqZWN0KipcbiAqXG4gKiBNYW5hZ2VzIGNvdW50ZG93biB0aW1lcnMgZm9yIHNhbGVzIG9yIHByb21vdGlvbmFsIGV2ZW50cyBvbiB5b3VyIHdlYnNpdGUuXG4gKiBJdCBoYW5kbGVzIG11bHRpcGxlIGNvdW50ZG93biBlbGVtZW50cywgdXBkYXRlcyB0aGVtIGluIHJlYWwtdGltZSwgYW5kIG1hbmFnZXMgdmlzaWJpbGl0eSBiYXNlZCBvbiB0aGUgdmlld3BvcnQuXG4gKlxuICogLS0tXG4gKlxuICogKipVc2FnZToqKlxuICpcbiAqICoqMS4gQ29uZmlndXJlIHRoZSBDb3VudGRvd24gKE9wdGlvbmFsKToqKlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHtcbiAqICAgLy8gT3B0aW9uYWwgc2V0dGluZ3NcbiAqICAgZGF0ZURhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkRhdGUnLCAgICAgICAvLyBEYXRhIGF0dHJpYnV0ZSBmb3IgY291bnRkb3duIGRhdGVcbiAqICAgaW5WaWV3cG9ydERhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkluVmlld3BvcnQnLCAvLyBEYXRhIGF0dHJpYnV0ZSBmb3Igdmlld3BvcnQgdmlzaWJpbGl0eVxuICogICBzZWxlY3RvcnM6IHsgLi4uIH0sXG4gKiAgIHRlbXBsYXRlOiAnLi4uJywgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3VzdG9tIEhUTUwgdGVtcGxhdGUgZm9yIHRoZSBjb3VudGRvd25cbiAqICAgaGlkZUNsYXNzOiAnX2hpZGUnLCAgICAgICAgICAgICAgICAgICAgICAvLyBDbGFzcyB0byBoaWRlIGVsZW1lbnRzXG4gKiAgIHNhbGVFbmRDbGFzczogJ19zYWxlRW5kZWQnLCAgICAgICAgICAgICAgLy8gQ2xhc3Mgd2hlbiBzYWxlIGVuZHNcbiAqICAgYWN0aXZlQ2xhc3M6ICdfYWN0aXZlJywgICAgICAgICAgICAgICAgICAvLyBDbGFzcyB3aGVuIGNvdW50ZG93biBpcyBhY3RpdmVcbiAqICAgdHJhbnNsYXRpb25zOiB7XG4gKiAgICAgZW5kX2luOiAnRW5kcyBpbicsXG4gKiAgICAgZGF5OiAnRGF5JyxcbiAqICAgICBkYXlzOiAnRGF5cycsXG4gKiAgICAgaG91cjogJ0hvdXInLFxuICogICAgIGhvdXJzOiAnSG91cnMnLFxuICogICAgIG1pbnV0ZTogJ01pbnV0ZScsXG4gKiAgICAgbWludXRlczogJ01pbnV0ZXMnLFxuICogICAgIHNlY29uZDogJ1NlY29uZCcsXG4gKiAgICAgc2Vjb25kczogJ1NlY29uZHMnLFxuICogICB9LFxuICogICB0eHRTYWxlQ291bnRkb3duSlNPTjogJ3sgXCJ0cmFuc2xhdGlvbnNcIjogeyAuLi4gfSB9JywgLy8gSlNPTiBzdHJpbmcgZm9yIHRyYW5zbGF0aW9uc1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiAqKjIuIEFkZCBDb3VudGRvd24gRWxlbWVudHM6KipcbiAqXG4gKiAtICoqT3B0aW9uIDE6KiogRGlyZWN0bHkgc3BlY2lmeSB0aGUgZGF0ZSB3aGVuIGFkZGluZyB0aGUgZWxlbWVudC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgY29uc3QgJGVsID0gJCgnI2NvdW50ZG93bi1lbGVtZW50Jyk7XG4gKiAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgnMjAyMy0xMi0zMVQyMzo1OTo1OScpO1xuICogICBTYWxlQ291bnRkb3duLmFkZCgkZWwsIGRhdGUpO1xuICogICBgYGBcbiAqXG4gKiAtICoqT3B0aW9uIDI6KiogU2V0IGRhdGEgYXR0cmlidXRlcyBvbiB0aGUgZWxlbWVudCBhbmQgYWRkIGl0LlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBjb25zdCAkZWwgPSAkKCcjY291bnRkb3duLWVsZW1lbnQnKTtcbiAqICAgJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25EYXRlJywgJzIwMjMtMTItMzFUMjM6NTk6NTknKTtcbiAqICAgJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25UcmFuc2xhdGlvbnMnLCB7IGVuZF9pbjogJ0VuZHMgaW4nLCAuLi4gfSk7XG4gKiAgIFNhbGVDb3VudGRvd24uYWRkKCRlbCk7XG4gKiAgIGBgYFxuICpcbiAqIC0tLVxuICpcbiAqICoqTm90ZXM6KipcbiAqXG4gKiAtIFRoZSBjb3VudGRvd24gYXV0b21hdGljYWxseSB1cGRhdGVzIHZpc2libGUgZWxlbWVudHMgaW4gdGhlIHZpZXdwb3J0LlxuICogLSBTdXBwb3J0cyBjdXN0b21pemF0aW9uIHRocm91Z2ggY29uZmlndXJhdGlvbiBhbmQgZGF0YSBhdHRyaWJ1dGVzLlxuICogLSBIYW5kbGVzIGF1dG9tYXRpYyBzdG9wcGluZyB3aGVuIG5vIGVsZW1lbnRzIHJlbWFpbi5cbiAqXG4gKiAtLS1cbiAqXG4gKiAqKkV4YW1wbGU6KipcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiAvLyBJbml0aWFsaXplIGFuZCBjb25maWd1cmVcbiAqIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHtcbiAqICAgdHJhbnNsYXRpb25zOiB7XG4gKiAgICAgZW5kX2luOiAnU2FsZSBlbmRzIGluJyxcbiAqICAgICAvLyBPdGhlciB0cmFuc2xhdGlvbnMuLi5cbiAqICAgfSxcbiAqIH0pO1xuICpcbiAqIC8vIEFkZCBjb3VudGRvd24gZWxlbWVudFxuICogY29uc3QgJGNvdW50ZG93biA9ICQoJyNjb3VudGRvd24nKTtcbiAqIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgnMjAyMy0xMi0zMVQyMzo1OTo1OScpO1xuICogU2FsZUNvdW50ZG93bi5hZGQoJGNvdW50ZG93biwgZW5kRGF0ZSk7XG4gKiBgYGBcbiAqL1xuXG5jb25zdCBTYWxlQ291bnRkb3duID0ge1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHR5cGUge1NldDxFbGVtZW50Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGVsZW1lbnRzOiBuZXcgU2V0KCksXG5cbiAgICAvKipcbiAgICAgKiBUaW1lciBpbnRlcnZhbCBJRFxuICAgICAqIEB0eXBlIHtudW1iZXJ8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRpbWVyOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7SW50ZXJzZWN0aW9uT2JzZXJ2ZXJ8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ic2VydmVyOiBudWxsLFxuXG4gICAgLyoqXG4gICAgKiBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBjb3VudGRvd24gZGF0ZVxuICAgICogQHR5cGUge3N0cmluZ31cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBkYXRlRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duRGF0ZScsXG5cbiAgICAvKipcbiAgICAgKiBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGluVmlld3BvcnREYXRhTmFtZTogJ3NhbGVDb3VudGRvd25JblZpZXdwb3J0JyxcblxuICAgIC8qKlxuICAgICAqIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIHRyYW5zbGF0aW9ucyBKU09OXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRyYW5zbGF0aW9uc0RhdGFOYW1lOiAnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RvcnMgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEB0eXBlIHt7ZW5kTGFiZWw6IHN0cmluZywgZGF5OiBzdHJpbmcsIGRheVZhbHVlOiBzdHJpbmcsIGRheUxhYmVsOiBzdHJpbmcsIGhvdXI6IHN0cmluZywgaG91clZhbHVlOiBzdHJpbmcsIGhvdXJMYWJlbDogc3RyaW5nLCBtaW51dGU6IHN0cmluZywgbWludXRlVmFsdWU6IHN0cmluZywgbWludXRlTGFiZWw6IHN0cmluZywgc2Vjb25kOiBzdHJpbmcsIHNlY29uZFZhbHVlOiBzdHJpbmcsIHNlY29uZExhYmVsOiBzdHJpbmd9fVxuICAgICAqL1xuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBlbmRMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWVuZC1sYWJlbF0nLFxuICAgICAgICBkYXk6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXldJyxcbiAgICAgICAgZGF5VmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktdmFsdWVdJyxcbiAgICAgICAgZGF5TGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktbGFiZWxdJyxcbiAgICAgICAgaG91cjogJ1tkYXRhLXNhbGUtY291bnRkb3duLWhvdXJdJyxcbiAgICAgICAgaG91clZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24taG91ci12YWx1ZV0nLFxuICAgICAgICBob3VyTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLWxhYmVsXScsXG4gICAgICAgIG1pbnV0ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZV0nLFxuICAgICAgICBtaW51dGVWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS12YWx1ZV0nLFxuICAgICAgICBtaW51dGVMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS1sYWJlbF0nLFxuICAgICAgICBzZWNvbmQ6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmRdJyxcbiAgICAgICAgc2Vjb25kVmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtdmFsdWVdJyxcbiAgICAgICAgc2Vjb25kTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtbGFiZWxdJyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWJhZGdlLXBlcmNlbnRcIj48L3VzZT48L3N2Zz48L2k+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX2VuZFwiIGRhdGEtc2FsZS1jb3VudGRvd24tZW5kLWxhYmVsPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfZGF5XCIgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXk+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLWRheS12YWx1ZT48L3NwYW4+PHNwYW4gY2xhc3M9XCJfbGFiZWxcIiBkYXRhLXNhbGUtY291bnRkb3duLWRheS1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9ob3VyXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24taG91ci1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9taW51dGVcIiBkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZT48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX3NlY29uZFwiIGRhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtbGFiZWw+PC9zcGFuPjwvc3Bhbj5cbiAgICBgLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSB0byBoaWRlIGVsZW1lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGhpZGVDbGFzczogJ19oaWRlJyxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgc2FsZSBoYXMgZW5kZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2FsZUVuZENsYXNzOiAnX3NhbGVFbmRlZCcsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHRvIGluZGljYXRlIGFjdGl2ZSBjb3VudGRvd25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWN0aXZlQ2xhc3M6ICdfYWN0aXZlJyxcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0aW9ucyBmb3IgY291bnRkb3duIGxhYmVsc1xuICAgICAqIEB0eXBlIHt7ZW5kX2luOiBzdHJpbmcsIGRheTogc3RyaW5nLCBkYXlzOiBzdHJpbmcsIGhvdXI6IHN0cmluZywgaG91cnM6IHN0cmluZywgbWludXRlOiBzdHJpbmcsIG1pbnV0ZXM6IHN0cmluZywgc2Vjb25kOiBzdHJpbmcsIHNlY29uZHM6IHN0cmluZ319XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgICAgZW5kX2luOiAnRW5kIGluJyxcbiAgICAgICAgZGF5OiAnRGF5JyxcbiAgICAgICAgZGF5czogJ0RheXMnLFxuICAgICAgICBob3VyOiAnSG91cicsXG4gICAgICAgIGhvdXJzOiAnSG91cnMnLFxuICAgICAgICBtaW51dGU6ICdNaW51dGUnLFxuICAgICAgICBtaW51dGVzOiAnTWludXRlcycsXG4gICAgICAgIHNlY29uZDogJ1NlY29uZCcsXG4gICAgICAgIHNlY29uZHM6ICdTZWNvbmRzJyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlIHRoZSBjb3VudGRvd24gc2V0dGluZ3NcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5kYXRlRGF0YU5hbWUgLSBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBjb3VudGRvd24gZGF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmluVmlld3BvcnREYXRhTmFtZSAtIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5zZWxlY3RvcnMgLSBTZWxlY3RvcnMgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5lbmRMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZGF5VmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZGF5TGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuaG91clxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5ob3VyVmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuaG91ckxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5taW51dGVWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5taW51dGVMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuc2Vjb25kVmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuc2Vjb25kTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50ZW1wbGF0ZSAtIFRlbXBsYXRlIGZvciBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5oaWRlQ2xhc3MgLSBDbGFzcyBuYW1lIHRvIGhpZGUgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zYWxlRW5kQ2xhc3MgLSBDbGFzcyBuYW1lIHRvIGluZGljYXRlIHNhbGUgaGFzIGVuZGVkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYWN0aXZlQ2xhc3MgLSBDbGFzcyBuYW1lIHRvIGluZGljYXRlIGFjdGl2ZSBjb3VudGRvd25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy50cmFuc2xhdGlvbnMgLSBUcmFuc2xhdGlvbnMgZm9yIGNvdW50ZG93biBsYWJlbHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuZW5kX2luXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmRheVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5kYXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmhvdXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuaG91cnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMubWludXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLm1pbnV0ZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuc2Vjb25kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLnNlY29uZHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50eHRTYWxlQ291bnRkb3duSlNPTiAtIEpTT04gc3RyaW5nIGZvciB0cmFuc2xhdGlvbnNcbiAgICAgKi9cbiAgICBjb25maWd1cmUoe1xuICAgICAgICBkYXRlRGF0YU5hbWUsXG4gICAgICAgIGluVmlld3BvcnREYXRhTmFtZSxcbiAgICAgICAgc2VsZWN0b3JzLFxuICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgaGlkZUNsYXNzLFxuICAgICAgICBzYWxlRW5kQ2xhc3MsXG4gICAgICAgIGFjdGl2ZUNsYXNzLFxuICAgICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICAgIHR4dFNhbGVDb3VudGRvd25KU09OLFxuICAgIH0gPSB7fSkge1xuICAgICAgICBpZiAoZGF0ZURhdGFOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVEYXRhTmFtZSA9IGRhdGVEYXRhTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpblZpZXdwb3J0RGF0YU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5WaWV3cG9ydERhdGFOYW1lID0gaW5WaWV3cG9ydERhdGFOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdG9ycykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RvcnMgPSB7IC4uLnRoaXMuc2VsZWN0b3JzLCAuLi5zZWxlY3RvcnMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpZGVDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5oaWRlQ2xhc3MgPSBoaWRlQ2xhc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2FsZUVuZENsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLnNhbGVFbmRDbGFzcyA9IHNhbGVFbmRDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDbGFzcyA9IGFjdGl2ZUNsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucykge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi50cmFuc2xhdGlvbnMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eHRTYWxlQ291bnRkb3duSlNPTikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh0eHRTYWxlQ291bnRkb3duSlNPTik7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnMgPSBPYmplY3Qua2V5cyhqc29uLnRyYW5zbGF0aW9ucykucmVkdWNlKChfdHJhbnMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG9ydEtleSA9IGtleS5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgICAgICAgICAgX3RyYW5zW3Nob3J0S2V5XSA9IGpzb24udHJhbnNsYXRpb25zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHJhbnM7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi50cmFucyB9O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBlbGVtZW50ICYgY29ycmVzcG9uZGluZyBkYXRlIHRvIHRoZSBjb3VudGRvd24gY29sbGVjdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICogQHBhcmFtIHtEYXRlfG51bGx9IGRhdGUgLSBUaGUgY291bnRkb3duIGRhdGUuIElmIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBiZSBleHRyYWN0ZWQgZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGUgYGRhdGEtc2FsZS1jb3VudGRvd24tZGF0ZWBcbiAgICAgKi9cbiAgICBhZGQoJGVsLCBkYXRlID0gbnVsbCkge1xuICAgICAgICBsZXQgdmFsaWREYXRlID0gZGF0ZSB8fCAkZWwuZGF0YSh0aGlzLmRhdGVEYXRhTmFtZSk7XG4gICAgICAgIGlmICh2YWxpZERhdGUgJiYgdHlwZW9mIHZhbGlkRGF0ZSA9PT0gJ3N0cmluZycpIHZhbGlkRGF0ZSA9IHBhcnNlQ291bnRkb3duRGF0ZSh2YWxpZERhdGUpO1xuICAgICAgICBpZiAoIXZhbGlkRGF0ZSkgcmV0dXJuO1xuICAgICAgICAkZWwuZGF0YSh0aGlzLmRhdGVEYXRhTmFtZSwgdmFsaWREYXRlKS5odG1sKHRoaXMudGVtcGxhdGUpXG4gICAgICAgICAgICAuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLmVsZW1lbnRzLmFkZChlbCkpO1xuICAgICAgICB0aGlzLm9ic2VydmUoJGVsKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlIHRoZSBlbGVtZW50IGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5IGNoZWNrXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb2JzZXJ2ZSgkZWwpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIC8vIGFzc3VtZSBlbGVtZW50IGlzIGluIHZpZXdwb3J0IGlmIEludGVyc2VjdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICRlbC5kYXRhKHRoaXMuaW5WaWV3cG9ydERhdGFOYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgLy8gY3JlYXRlIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlIGlmIG5vdCBhbHJlYWR5IGNyZWF0ZWRcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJChlbnRyeS50YXJnZXQpLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzSW50ZXJzZWN0aW5nJywgZW50cnkudGFyZ2V0LCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcm9vdDogbnVsbCwgLy8gRGVmYXVsdHMgdG8gdmlld3BvcnRcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAsIC8vIENhbGxiYWNrIGlzIHRyaWdnZXJlZCB3aGVuIGFueSBwYXJ0IG9mIHRoZSBlbGVtZW50IGlzIHZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmdldCgpLmZvckVhY2goZWwgPT4gdGhpcy5vYnNlcnZlci5vYnNlcnZlKGVsKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3Agb2JzZXJ2aW5nIHRoZSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdW5vYnNlcnZlKGVsKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndW5vYnNlcnZlJywgZWwpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBlbGVtZW50IGlzIGluIHZpZXdwb3J0IGFuZCB2aXNpYmxlXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaXNWaXNpYmxlSW5WaWV3cG9ydCgkZWwpIHtcbiAgICAgICAgcmV0dXJuICRlbC5kYXRhKHRoaXMuaW5WaWV3cG9ydERhdGFOYW1lKSAmJiAkZWwuaXMoJzp2aXNpYmxlJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHN0YXJ0IHJ1bm5pbmcgY291bnRkb3duIGV2ZXJ5IHNlY29uZFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbWVyICYmIHRoaXMuZWxlbWVudHMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5ydW4oKSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogc3RvcCBjb3VudGRvd25cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc3RvcCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0b3AgY291bnRkb3duJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHJ1bm5pbmcgY291bnRkb3duIHByb2Nlc3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGFuZCBzdG9wIGlmIGVsZW1lbnQgbm8gbG9uZ2VyIGV4aXN0cyBpbiBET01cbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhlbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmRlbGV0ZShlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBzdG9wIGNvdW50ZG93biBpZiBlbGVtZW50IGlzIG5vdCBpbiB2aWV3cG9ydCBvciBub3QgdmlzaWJsZVxuICAgICAgICAgICAgaWYgKCFkYXRlIHx8ICF0aGlzLmlzVmlzaWJsZUluVmlld3BvcnQoJGVsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgaWYgKGRhdGUgPD0gbm93KSB7XG4gICAgICAgICAgICAgICAgLy8gQ291bnQgZG93biBkYXRlIGhhcyBwYXNzZWRcbiAgICAgICAgICAgICAgICAkZWwuYWRkQ2xhc3ModGhpcy5zYWxlRW5kQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlKGVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHJlbWFpbmluZyB0aW1lIChkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcylcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBkYXRlIC0gbm93O1xuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgY29uc3QgJGVuZExhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZW5kTGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJGRheSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmRheSk7XG4gICAgICAgICAgICBjb25zdCAkZGF5VmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5kYXlWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkZGF5TGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5kYXlMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkaG91ciA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmhvdXIpO1xuICAgICAgICAgICAgY29uc3QgJGhvdXJWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmhvdXJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkaG91ckxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91ckxhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRtaW51dGUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5taW51dGUpO1xuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZVZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMubWludXRlVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZUxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMubWludXRlTGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJHNlY29uZCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLnNlY29uZCk7XG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kVmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5zZWNvbmRWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5zZWNvbmRMYWJlbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy50cmFuc2xhdGlvbnMsIC4uLiRlbC5kYXRhKHRoaXMudHJhbnNsYXRpb25zRGF0YU5hbWUpIH07XG5cbiAgICAgICAgICAgICRlbC5hZGRDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICRlbmRMYWJlbC5odG1sKHRyYW5zbGF0aW9ucy5lbmRfaW4pO1xuICAgICAgICAgICAgJGRheVZhbHVlLnRleHQoZGF5cyk7XG4gICAgICAgICAgICAkZGF5TGFiZWwuaHRtbChkYXlzID09PSAxID8gdHJhbnNsYXRpb25zLmRheSA6IHRyYW5zbGF0aW9ucy5kYXlzKTtcbiAgICAgICAgICAgICRkYXkudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDApO1xuICAgICAgICAgICAgJGhvdXJWYWx1ZS50ZXh0KGhvdXJzKTtcbiAgICAgICAgICAgICRob3VyTGFiZWwuaHRtbChob3VycyA9PT0gMSA/IHRyYW5zbGF0aW9ucy5ob3VyIDogdHJhbnNsYXRpb25zLmhvdXJzKTtcbiAgICAgICAgICAgICRob3VyLnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwICYmIGhvdXJzID09PSAwKTtcbiAgICAgICAgICAgICRtaW51dGVWYWx1ZS50ZXh0KG1pbnV0ZXMpO1xuICAgICAgICAgICAgJG1pbnV0ZUxhYmVsLmh0bWwobWludXRlcyA9PT0gMSA/IHRyYW5zbGF0aW9ucy5taW51dGUgOiB0cmFuc2xhdGlvbnMubWludXRlcyk7XG4gICAgICAgICAgICAkbWludXRlLnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwICYmIGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDApO1xuICAgICAgICAgICAgJHNlY29uZFZhbHVlLnRleHQoc2Vjb25kcyk7XG4gICAgICAgICAgICAkc2Vjb25kTGFiZWwuaHRtbChzZWNvbmRzID09PSAxID8gdHJhbnNsYXRpb25zLnNlY29uZCA6IHRyYW5zbGF0aW9ucy5zZWNvbmRzKTtcbiAgICAgICAgICAgICRzZWNvbmQudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDAgJiYgaG91cnMgPT09IDAgJiYgbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FsZUNvdW50ZG93bjtcbiIsImV4cG9ydCBjb25zdCBhcmlhS2V5Q29kZXMgPSB7XG4gICAgUkVUVVJOOiAxMyxcbiAgICBTUEFDRTogMzIsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGluaXRSYWRpb09wdGlvbnMgfSBmcm9tICcuL3JhZGlvT3B0aW9ucyc7XG4iLCJpbXBvcnQgeyBhcmlhS2V5Q29kZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHNldENoZWNrZWRSYWRpb0l0ZW0gPSAoaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHgpID0+IHtcbiAgICBpdGVtQ29sbGVjdGlvbi5lYWNoKChpZHgsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGl0ZW0pO1xuICAgICAgICBpZiAoaWR4ICE9PSBpdGVtSWR4KSB7XG4gICAgICAgICAgICAkaXRlbS5hdHRyKCdhcmlhLWNoZWNrZWQnLCBmYWxzZSkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRpdGVtLmF0dHIoJ2FyaWEtY2hlY2tlZCcsIHRydWUpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAkaXRlbS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbiA9IChsYXN0SXRlbUlkeCwgY3VycmVudElkeCkgPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgY3VycmVudElkeCA+IGxhc3RJdGVtSWR4OiByZXR1cm4gMDtcbiAgICBjYXNlIGN1cnJlbnRJZHggPCAwOiByZXR1cm4gbGFzdEl0ZW1JZHg7XG4gICAgZGVmYXVsdDogcmV0dXJuIGN1cnJlbnRJZHg7XG4gICAgfVxufTtcblxuY29uc3QgaGFuZGxlSXRlbUtleURvd24gPSBpdGVtQ29sbGVjdGlvbiA9PiBlID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGU7XG4gICAgY29uc3QgaXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmluZGV4KGUuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgbGFzdENvbGxlY3Rpb25JdGVtSWR4ID0gaXRlbUNvbGxlY3Rpb24ubGVuZ3RoIC0gMTtcblxuICAgIGlmIChPYmplY3QudmFsdWVzKGFyaWFLZXlDb2RlcykuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgIGNhc2UgYXJpYUtleUNvZGVzLkxFRlQ6XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuVVA6IHtcbiAgICAgICAgY29uc3QgcHJldkl0ZW1JZHggPSBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24obGFzdENvbGxlY3Rpb25JdGVtSWR4LCBpdGVtSWR4IC0gMSk7XG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChwcmV2SXRlbUlkeCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgc2V0Q2hlY2tlZFJhZGlvSXRlbShpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCAtIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuUklHSFQ6XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuRE9XTjoge1xuICAgICAgICBjb25zdCBuZXh0SXRlbUlkeCA9IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbihsYXN0Q29sbGVjdGlvbkl0ZW1JZHgsIGl0ZW1JZHggKyAxKTtcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZ2V0KG5leHRJdGVtSWR4KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4ICsgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgkY29udGFpbmVyLCBpdGVtU2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCAkaXRlbUNvbGxlY3Rpb24gPSAkY29udGFpbmVyLmZpbmQoaXRlbVNlbGVjdG9yKTtcblxuICAgICRjb250YWluZXIub24oJ2tleWRvd24nLCBpdGVtU2VsZWN0b3IsIGhhbmRsZUl0ZW1LZXlEb3duKCRpdGVtQ29sbGVjdGlvbikpO1xufTtcbiIsIi8vIGltcG9ydCBXaXNobGlzdCBmcm9tICcuLi93aXNobGlzdCc7IC8vIHBhcGF0aGVtZXMtZXZldmE6IGRpc2FibGVkXG5pbXBvcnQgeyBpbml0UmFkaW9PcHRpb25zIH0gZnJvbSAnLi9hcmlhJztcblxuY29uc3Qgb3B0aW9uc1R5cGVzTWFwID0ge1xuICAgIElOUFVUX0ZJTEU6ICdpbnB1dC1maWxlJyxcbiAgICBJTlBVVF9URVhUOiAnaW5wdXQtdGV4dCcsXG4gICAgSU5QVVRfTlVNQkVSOiAnaW5wdXQtbnVtYmVyJyxcbiAgICBJTlBVVF9DSEVDS0JPWDogJ2lucHV0LWNoZWNrYm94JyxcbiAgICBURVhUQVJFQTogJ3RleHRhcmVhJyxcbiAgICBEQVRFOiAnZGF0ZScsXG4gICAgU0VUX1NFTEVDVDogJ3NldC1zZWxlY3QnLFxuICAgIFNFVF9SRUNUQU5HTEU6ICdzZXQtcmVjdGFuZ2xlJyxcbiAgICBTRVRfUkFESU86ICdzZXQtcmFkaW8nLFxuICAgIFNXQVRDSDogJ3N3YXRjaCcsXG4gICAgUFJPRFVDVF9MSVNUOiAncHJvZHVjdC1saXN0Jyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25DaGFuZ2VEZWNvcmF0b3IoYXJlRGVmYXVsdE9wdGlvbnNTZXQpIHtcbiAgICByZXR1cm4gKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIGlmIChhcmVEZWZhdWx0T3B0aW9uc1NldCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgLy8gV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpOyAvLyBwYXBhdGhlbWVzLWV2ZXZhOiBkaXNhYmxlZFxuICAgICAgICB0aGlzLmdldFRhYlJlcXVlc3RzKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJykuZWFjaCgoX18sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUodmFsdWUsIHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YXJpYW50RG9tTm9kZSwgdmFyaWFudFR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh2YXJpYW50VHlwZSkge1xuICAgICAgICBjYXNlIG9wdGlvbnNUeXBlc01hcC5TRVRfUkFESU86XG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNXQVRDSDoge1xuICAgICAgICAgICAgaW5pdFJhZGlvT3B0aW9ucygkKHZhcmlhbnREb21Ob2RlKSwgJ1t0eXBlPXJhZGlvXScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93IHJhZGlvIGJ1dHRvbnMgdG8gZ2V0IGRlc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpbml0UmFkaW9BdHRyaWJ1dGVzKCkge1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIHJhZGlvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcmFkaW8gPSAkKHJhZGlvKTtcblxuICAgICAgICAgICAgLy8gT25seSBiaW5kIHRvIGNsaWNrIG9uY2VcbiAgICAgICAgICAgIGlmICgkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAkcmFkaW8ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHJhZGlvLmRhdGEoJ3N0YXRlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScsICRyYWRpby5wcm9wKCdjaGVja2VkJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UgPSB0aGlzLmNvbnRleHQub3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlO1xuICAgICAgICBsZXQgb3V0T2ZTdG9ja01lc3NhZ2UgPSBkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICAgICAgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke291dE9mU3RvY2tNZXNzYWdlfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke291dE9mU3RvY2tEZWZhdWx0TWVzc2FnZX0pYDtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCBhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdHRySWQgPSBwYXJzZUludCgkYXR0cmlidXRlLmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZScpLCAxMCk7XG5cblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgZnJhZ21lbnQgaWRlbnRpZmllciBpbiBVUkwgcmVxdWVzdGluZyBhIHNwZWNpZmljIHRhYlxuICAgICAqL1xuICAgIGdldFRhYlJlcXVlc3RzKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3RhYi0nKSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgJGFjdGl2ZVRhYiA9ICQoJy50YWJzJykuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApO1xuICAgICAgICAgICAgY29uc3QgJHRhYkNvbnRlbnQgPSAkKGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofWApO1xuXG4gICAgICAgICAgICBpZiAoJGFjdGl2ZVRhYi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJGFjdGl2ZVRhYi5maW5kKCcudGFiJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkdGFiQ29udGVudC5hZGRDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpbmNlICRwcm9kdWN0VmlldyBjYW4gYmUgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgdXNpbmcgcmVuZGVyX3dpdGgsXG4gICAgICogV2UgaGF2ZSB0byByZXRyaWV2ZSB0aGUgcmVzcGVjdGl2ZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtICRzY29wZVxuICAgICAqL1xuICAgIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByaWNlV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJycFdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVNhdmVkOiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLXNlY3Rpb24tLXNhdmluZycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZU5vd0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkd2VpZ2h0OiAkKCcucHJvZHVjdFZpZXctaW5mbyBbZGF0YS1wcm9kdWN0LXdlaWdodF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXG4gICAgICAgICAgICAkYWRkVG9DYXJ0OiAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRhZGRUb0NhcnRGb3JtOiAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHdpc2hsaXN0VmFyaWF0aW9uOiAkKCdbZGF0YS13aXNobGlzdC1hZGRdIFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHN0b2NrOiB7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tkYXRhLXByb2R1Y3Qtc3RvY2tdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBza3U6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnNrdS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXNrdV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwYzoge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQudXBjLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3QtdXBjXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICR3YWxsZXRCdXR0b25zOiAkKCdbZGF0YS1hZGQtdG8tY2FydC13YWxsZXQtYnV0dG9uc10nLCAkc2NvcGUpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgdGhlIHByaWNpbmcgZWxlbWVudHMgdGhhdCB3aWxsIHNob3cgdXAgb25seSB3aGVuIHRoZSBwcmljZSBleGlzdHMgaW4gQVBJXG4gICAgICogQHBhcmFtIHZpZXdNb2RlbFxuICAgICAqL1xuICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVWaWV3KGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gIWRhdGEuaW5zdG9ja1xuICAgICAgICAgICAgPyAoZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEub3V0X29mX3N0b2NrX21lc3NhZ2UgfHwgdGhpcy5jb250ZXh0Lm91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSlcbiAgICAgICAgICAgIDogKGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5zaG93TWVzc2FnZUJveChtZXNzYWdlKTtcblxuICAgICAgICBpZiAoZGF0YS5wcmljZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBkYXRhLnByaWNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLndlaWdodCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3ZWlnaHQuaHRtbChkYXRhLndlaWdodC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHZhcmlhdGlvbl9pZCBpZiBpdCBleGlzdHMgZm9yIGFkZGluZyB0byB3aXNobGlzdFxuICAgICAgICBpZiAoZGF0YS52YXJpYW50SWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuc2t1KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KGRhdGEuc2t1KTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS51cGMpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoZGF0YS51cGMpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBzdG9jayB2aWV3IGlzIG9uIChDUCBzZXR0aW5ncylcbiAgICAgICAgaWYgKHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmxlbmd0aCAmJiB0eXBlb2YgZGF0YS5zdG9jayA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdG9jayBjb250YWluZXIgaXMgaGlkZGVuLCBzaG93XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKTtcbiAgICAgICAgdGhpcy51cGRhdGVXYWxsZXRCdXR0b25zVmlldyhkYXRhKTtcblxuICAgICAgICAvLyBJZiBCdWxrIFByaWNpbmcgcmVuZGVyZWQgSFRNTCBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcyAmJiBjb250ZW50KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChkYXRhLmJ1bGtfZGlzY291bnRfcmF0ZXMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZFRvQ2FydFdyYXBwZXIgPSAkKCcjYWRkLXRvLWNhcnQtd3JhcHBlcicpO1xuXG4gICAgICAgIGlmIChhZGRUb0NhcnRXcmFwcGVyLmlzKCc6aGlkZGVuJykgJiYgZGF0YS5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgICAgYWRkVG9DYXJ0V3JhcHBlci5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcblxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cbiAgICAgICAgICAgICAgICBgJHtwcmljZS5wcmljZV9yYW5nZS5taW4ud2l0aF90YXguZm9ybWF0dGVkfSAtICR7cHJpY2UucHJpY2VfcmFuZ2UubWF4LndpdGhfdGF4LmZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aFRheC4kc3Bhbi5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cbiAgICAgICAgICAgICAgICBgJHtwcmljZS5wcmljZV9yYW5nZS5taW4ud2l0aG91dF90YXguZm9ybWF0dGVkfSAtICR7cHJpY2UucHJpY2VfcmFuZ2UubWF4LndpdGhvdXRfdGF4LmZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aG91dFRheC4kc3Bhbi5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBhbiBtZXNzYWdlIGJveCBpZiBhIG1lc3NhZ2UgaXMgcGFzc2VkXG4gICAgICogSGlkZSB0aGUgYm94IGlmIHRoZSBtZXNzYWdlIGlzIGVtcHR5XG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICovXG4gICAgc2hvd01lc3NhZ2VCb3gobWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJyk7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQobWVzc2FnZSk7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXcoZGF0YSkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgIGNvbnN0IGlzVmFsaWRGb3JtID0gdmlld01vZGVsLiRhZGRUb0NhcnRGb3JtWzBdLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgdGhpcy50b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShpc1ZhbGlkRm9ybSAmJiBkYXRhLnB1cmNoYXNhYmxlICYmIGRhdGEuaW5zdG9jayk7XG4gICAgfVxuXG4gICAgdG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkoc2hvdWxkU2hvdykge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG5cbiAgICAgICAgaWYgKHNob3VsZFNob3cpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdhbGxldEJ1dHRvbnMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkge1xuICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcblxuICAgICAgICByZXR1cm4gJHBhcmVudCA/ICRwYXJlbnQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZScpIDogbnVsbDtcbiAgICB9XG5cbiAgICBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgaXMgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiBhIHNlbGVjdCBkcm9wZG93biwgc2VsZWN0IHRoZSBmaXJzdCBvcHRpb24gKE1FUkMtNjM5KVxuICAgICAgICAgICAgaWYgKCRzZWxlY3QudmFsKCkgPT09ICRhdHRyaWJ1dGUuYXR0cigndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzQmFzZSwgeyBvcHRpb25DaGFuZ2VEZWNvcmF0b3IgfSBmcm9tICcuL3Byb2R1Y3QtZGV0YWlscy1iYXNlJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi8uLi9wYXBhdGhlbWVzL2V5ZXZhL2ltYWdlLWdhbGxlcnknOyAvLyBwYXBhdGhlbWVzLWV5ZXZhIGVkaXRlZFxuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBhbGVydE1vZGFsLCBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgeyBpc0VtcHR5LCBpc1BsYWluT2JqZWN0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuaW1wb3J0IHsgbm9ybWFsaXplRm9ybURhdGEgfSBmcm9tICcuL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXJJRSwgY29udmVydEludG9BcnJheSB9IGZyb20gJy4vdXRpbHMvaWUtaGVscGVycyc7XG5pbXBvcnQgYmFubmVyVXRpbHMgZnJvbSAnLi91dGlscy9iYW5uZXItdXRpbHMnO1xuaW1wb3J0IGN1cnJlbmN5U2VsZWN0b3IgZnJvbSAnLi4vZ2xvYmFsL2N1cnJlbmN5LXNlbGVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBQcm9kdWN0RGV0YWlsc0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0ge30pIHtcbiAgICAgICAgc3VwZXIoJHNjb3BlLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydC1pdGVtLWFkZF0gLmxvYWRpbmdPdmVybGF5Jyk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5ID0gbmV3IEltYWdlR2FsbGVyeSgkKCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScsIHRoaXMuJHNjb3BlKSk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LmluaXQoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5RdWFudGl0eUNoYW5nZSgpO1xuICAgICAgICB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlID0gJCgnLnN3YXRjaC1vcHRpb24tbWVzc2FnZScpO1xuICAgICAgICB0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZSA9IHt9O1xuICAgICAgICB0aGlzLnN3YXRjaEdyb3VwSWRMaXN0ID0gJCgnW2lkXj1cInN3YXRjaEdyb3VwXCJdJykubWFwKChfLCBncm91cCkgPT4gJChncm91cCkuYXR0cignaWQnKSk7XG4gICAgICAgIHRoaXMuc3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGVTZWxlY3RvcigpO1xuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKTtcblxuICAgICAgICBpZiAoJGZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRmb3JtLmZpbmQoJ2lucHV0I2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScsICRmb3JtKTtcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RTd2F0Y2hHcm91cCA9ICQoJ1tpZCo9XCJhdHRyaWJ1dGVfc3dhdGNoXCJdJywgJGZvcm0pO1xuICAgICAgICBjb25zdCAkcHJvZHVjdFN3YXRjaExhYmVscyA9ICQoJy5mb3JtLW9wdGlvbi1zd2F0Y2gnLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IHBsYWNlU3dhdGNoTGFiZWxJbWFnZSA9IChfLCBsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG9wdGlvbkltYWdlID0gJCgnLmZvcm0tb3B0aW9uLWV4cGFuZGVkJywgJChsYWJlbCkpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uSW1hZ2VXaWR0aCA9ICRvcHRpb25JbWFnZS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICBjb25zdCBleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCA9IDU1O1xuICAgICAgICAgICAgY29uc3QgeyByaWdodCB9ID0gbGFiZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlciA9IHdpbmRvdy5zY3JlZW4ud2lkdGggLSByaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0VmFsdWUgPSBvcHRpb25JbWFnZVdpZHRoIC0gZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXI7XG5cbiAgICAgICAgICAgIGlmIChlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlciA8IChvcHRpb25JbWFnZVdpZHRoICsgZXh0ZW5kZWRPcHRpb25JbWFnZU9mZnNldExlZnQpKSB7XG4gICAgICAgICAgICAgICAgJG9wdGlvbkltYWdlLmNzcygnbGVmdCcsIGAke3NoaWZ0VmFsdWUgPiAwID8gLXNoaWZ0VmFsdWUgOiBzaGlmdFZhbHVlfXB4YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaExhYmVscywgcGxhY2VTd2F0Y2hMYWJlbEltYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuc2hvd1N3YXRjaE5hbWVzKSB7XG4gICAgICAgICAgICB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuXG4gICAgICAgICAgICAkcHJvZHVjdFN3YXRjaEdyb3VwLm9uKCdjaGFuZ2UnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3YXRjaEdyb3VwRWxlbWVudCA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTd2F0Y2hOYW1lT25PcHRpb24oJCh0YXJnZXQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaEdyb3VwLCAoXywgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3YXRjaEdyb3VwRWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuaXMoJzpjaGVja2VkJykpIHRoaXMuc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkKGVsZW1lbnQpLCAkKHN3YXRjaEdyb3VwRWxlbWVudCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRmb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdFRvQ2FydChldmVudCwgJGZvcm1bMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XG4gICAgICAgIGlmICgoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlQ2FsbGJhY2sgPSBvcHRpb25DaGFuZ2VEZWNvcmF0b3IuY2FsbCh0aGlzLCBoYXNEZWZhdWx0T3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoJHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICBiYW5uZXJVdGlscy5kaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudChwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwcmV2aWV3TW9kYWwnKVswXTtcbiAgICB9XG5cbiAgICByZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLmFkZChbe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdID4gLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLm51bWJlcnNPbmx5KHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5wcm9kdWN0UXVhbnRpdHlFcnJvck1lc3NhZ2UsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3I7XG4gICAgfVxuXG4gICAgc3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3dhdGNoR3JvdXBJZExpc3QubGVuZ3RoICYmIGlzRW1wdHkodGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLnN3YXRjaEdyb3VwSWRMaXN0LmVhY2goKF8sIHN3YXRjaEdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW3N3YXRjaEdyb3VwSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW3N3YXRjaEdyb3VwSWRdID0gJChgIyR7c3dhdGNoR3JvdXBJZH0gfiAuc3dhdGNoLW9wdGlvbi1tZXNzYWdlYCkudGV4dCgpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFByb2R1Y3RWYXJpYW50KCkge1xuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyksIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBvcHRpb25MYWJlbC5zcGxpdCgnOicpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkID0gb3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcblxuICAgICAgICAgICAgaWYgKCh0eXBlID09PSAnaW5wdXQtZmlsZScgfHwgdHlwZSA9PT0gJ2lucHV0LXRleHQnIHx8IHR5cGUgPT09ICdpbnB1dC1udW1iZXInKSAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGV4dGFyZWEnICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2F0aXNmaWVkID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkuZXZlcnkoKHNlbGVjdCkgPT4gc2VsZWN0LnNlbGVjdGVkSW5kZXggIT09IDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzU2F0aXNmaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5tYXAoKHgpID0+IHgudmFsdWUpLmpvaW4oJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYW50c2xpc3QgPSBjb252ZXJ0SW50b0FycmF5KHZhbHVlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQgPSBpbnB0ID0+IGlucHQuZGF0YXNldC5wcm9kdWN0QXR0cmlidXRlVmFsdWUgPT09IGNoZWNrZWQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdFZhcmlhbnRzbGlzdC5maWx0ZXIobWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dClbMF07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuaW5uZXJUZXh0LnRyaW0oKSA6IGNoZWNrZWQubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3dhdGNoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5jaGlsZHJlblswXSA6IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHByb2R1Y3RWYXJpYW50ID0gdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IDAgPyBvcHRpb25zLnNvcnQoKS5qb2luKCcsICcpIDogJ3Vuc2F0aXNmaWVkJztcbiAgICAgICAgY29uc3QgdmlldyA9ICQoJy5wcm9kdWN0VmlldycpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XG4gICAgICAgICAgICBpZiAodmlldy5hdHRyKCdkYXRhLWV2ZW50LXR5cGUnKSkge1xuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlldy5maW5kKCcucHJvZHVjdFZpZXctdGl0bGUnKVswXS5pbm5lclRleHQucmVwbGFjZSgvXCIvZywgJ1xcXFwkJicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPVwiJHtwcm9kdWN0TmFtZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHdpbmRvdyBpcyBiZWluZyBydW4gaW5zaWRlIGFuIGlmcmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzUnVubmluZ0luSWZyYW1lKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIHByb2R1Y3Qgb3B0aW9ucyBjaGFuZ2VzXG4gICAgICpcbiAgICAgKi9cbiAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG5cbiAgICAgICAgLy8gRG8gbm90IHRyaWdnZXIgYW4gYWpheCByZXF1ZXN0IGlmIGl0J3MgYSBmaWxlIG9yIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcocHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGZvcm0pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGNvbnRleHQgPSAkZm9ybS5wYXJlbnRzKCcucHJvZHVjdFZpZXcnKS5maW5kKCcucHJvZHVjdFZpZXctaW5mbycpO1xuICAgICAgICAgICAgICAgIG1vZGFsRmFjdG9yeSgnW2RhdGEtcmV2ZWFsXScsIHsgJGNvbnRleHQgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RPcHRpb25zQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBwcm9kdWN0QXR0cmlidXRlc0RhdGEsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpZiB0aGlzIHNldHRpbmcgaXMgZW5hYmxlZCBpbiBQYWdlIEJ1aWxkZXJcbiAgICAgKiBzaG93IG5hbWUgZm9yIHN3YXRjaCBvcHRpb25cbiAgICAgKi9cbiAgICBzaG93U3dhdGNoTmFtZU9uT3B0aW9uKCRzd2F0Y2gsICRzd2F0Y2hHcm91cCkge1xuICAgICAgICBjb25zdCBzd2F0Y2hOYW1lID0gJHN3YXRjaC5hdHRyKCdhcmlhLWxhYmVsJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVN3YXRjaEdyb3VwSWQgPSAkc3dhdGNoR3JvdXAuYXR0cignYXJpYS1sYWJlbGxlZGJ5Jyk7XG4gICAgICAgIGNvbnN0ICRzd2F0Y2hPcHRpb25NZXNzYWdlID0gJChgIyR7YWN0aXZlU3dhdGNoR3JvdXBJZH0gfiAuc3dhdGNoLW9wdGlvbi1tZXNzYWdlYCk7XG5cbiAgICAgICAgJCgnW2RhdGEtb3B0aW9uLXZhbHVlXScsICRzd2F0Y2hHcm91cCkudGV4dChzd2F0Y2hOYW1lKTtcbiAgICAgICAgJHN3YXRjaE9wdGlvbk1lc3NhZ2UudGV4dChgJHt0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZVthY3RpdmVTd2F0Y2hHcm91cElkXX0gJHtzd2F0Y2hOYW1lfWApO1xuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRzd2F0Y2hPcHRpb25NZXNzYWdlLCAnc3RhdHVzJywgJ2Fzc2VydGl2ZScpO1xuICAgIH1cblxuICAgIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiBhcmlhTGl2ZVN0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAhISRlbGVtZW50LnBhcmVudHMoJy5xdWlja1ZpZXcnKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSkge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChpbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxuICAgICAgICAgICAgICAgIHsgJzF4JzogdGhpcy5jb250ZXh0Lnpvb21TaXplIH0sXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIHpvb20gc2l6ZSB1c2VkIGZvciBkYXRhLXpvb20taW1hZ2UgaW5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LXZpZXcuaHRtbFxuXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG5cbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQucHJvZHVjdFNpemUgfSxcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggZmFsbGJhY2sgaW1hZ2Ugc2l6ZSB1c2VkIGZvciB0aGUgbWFpbiBwcm9kdWN0IGltYWdlIGluXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcblxuICAgICAgICAgICAgICAgICAgICBOb3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIGltYWdlIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHNyY3NldFxuXG4gICAgICAgICAgICAgICAgICAgIEFsc28gbm90ZSB0aGF0IGdldFNyY3NldCByZXR1cm5zIGEgc2ltcGxlIHNyYyBzdHJpbmcgd2hlbiBleGFjdGx5IG9uZSBzaXplIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChpbWFnZS5kYXRhKTtcblxuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuc2V0QWx0ZXJuYXRlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5yZXN0b3JlSW1hZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIGFjdGlvbiB3aGVuIHRoZSBzaG9wcGVyIGNsaWNrcyBvbiArIC8gLSBmb3IgcXVhbnRpdHlcbiAgICAgKlxuICAgICAqL1xuICAgIGxpc3RlblF1YW50aXR5Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBidXR0b24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0O1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNaW4gPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNYXggPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuXG4gICAgICAgICAgICBsZXQgcXR5ID0gZm9ybXMubnVtYmVyc09ubHkoJGlucHV0LnZhbCgpKSA/IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApIDogcXVhbnRpdHlNaW47XG4gICAgICAgICAgICAvLyBJZiBhY3Rpb24gaXMgaW5jcmVtZW50aW5nXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgICAgICBxdHkgPSBmb3Jtcy52YWxpZGF0ZUluY3JlYXNlQWdhaW5zdE1heEJvdW5kYXJ5KHF0eSwgcXVhbnRpdHlNYXgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChxdHkgPiAxKSB7XG4gICAgICAgICAgICAgICAgcXR5ID0gZm9ybXMudmFsaWRhdGVEZWNyZWFzZUFnYWluc3RNaW5Cb3VuZGFyeShxdHksIHF1YW50aXR5TWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiBpbnB1dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiRpbnB1dC52YWwocXR5KTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0ZXh0XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJHRleHQudGV4dChxdHkpO1xuICAgICAgICAgICAgLy8gcGVyZm9ybSB2YWxpZGF0aW9uIGFmdGVyIHVwZGF0aW5nIHByb2R1Y3QgcXVhbnRpdHlcbiAgICAgICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQcmV2ZW50IHRyaWdnZXJpbmcgcXVhbnRpdHkgY2hhbmdlIHdoZW4gcHJlc3NpbmcgZW50ZXJcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2tleXByZXNzJywgJy5mb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBicm93c2VyIHN1cHBvcnRzIGV2ZW50LndoaWNoLCB0aGVuIHVzZSBldmVudC53aGljaCwgb3RoZXJ3aXNlIHVzZSBldmVudC5rZXlDb2RlXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcbiAgICAgICAgICAgIGlmICh4ID09PSAxMykge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdrZXl1cCcsICcuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEFkZCBhIHByb2R1Y3QgdG8gY2FydFxuICAgICAqXG4gICAgICovXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0QnRuID0gJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICQoZXZlbnQudGFyZ2V0KSk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQnRuVmFsID0gJGFkZFRvQ2FydEJ0bi52YWwoKTtcbiAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkYWRkVG9DYXJ0QnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XG5cbiAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKG5vcm1hbGl6ZUZvcm1EYXRhKG5ldyBGb3JtRGF0YShmb3JtKSksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW5jeVNlbGVjdG9yKHJlc3BvbnNlLmRhdGEuY2FydF9pZCk7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gR3VhcmQgc3RhdGVtZW50XG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRhZGRUb0NhcnRCdG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0TW9kYWwoKS4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkYWRkVG9DYXJ0QnRuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9wZW4gcHJldmlldyBtb2RhbCBhbmQgdXBkYXRlIGNvbnRlbnRcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5hZGRDbGFzcygnYXBwbGUtcGF5LXN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGFkZFRvQ2FydEJ0bikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJHByZU1vZGFsRm9jdXNlZEVsID0gJGFkZFRvQ2FydEJ0bjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRDb250ZW50KHRoaXMucHJldmlld01vZGFsLCByZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vIG1vZGFsLCByZWRpcmVjdCB0byB0aGUgY2FydCBwYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8IHRoaXMuY29udGV4dC51cmxzLmNhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRhZGRUb0NhcnRCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjYXJ0IGNvbnRlbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvcHJldmlldycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0OiBjYXJ0SXRlbUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gdXJsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3RUbyh1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xuICAgICAgICAgICAgd2luZG93LnRvcC5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYXJ0IGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kYWx9IG1vZGFsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhcnRJdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgdXBkYXRlQ2FydENvbnRlbnQobW9kYWwsIGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGNvdW50ZXJcbiAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRRdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgbW9kYWwuJGNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRDb3VudGVyID0gJCgnLm5hdlVzZXItYWN0aW9uIC5jYXJ0LWNvdW50Jyk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0UXVhbnRpdHkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9tb3Rpb25CYW5uZXIgPSAkKCdbZGF0YS1wcm9tb3Rpb24tYmFubmVyXScpO1xuICAgICAgICAgICAgY29uc3QgJGJhY2tUb1Nob3BwcGluZ0J0biA9ICQoJy5wcmV2aWV3Q2FydENoZWNrb3V0ID4gW2RhdGEtcmV2ZWFsLWNsb3NlXScpO1xuICAgICAgICAgICAgY29uc3QgJG1vZGFsQ2xvc2VCdG4gPSAkKCcjcHJldmlld01vZGFsID4gLm1vZGFsLWNsb3NlJyk7XG4gICAgICAgICAgICBjb25zdCBiYW5uZXJVcGRhdGVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0Q29udGFpbmVyID0gJCgnI21haW4tY29udGVudCA+IC5jb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgICRwcm9kdWN0Q29udGFpbmVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IHBkcC11cGRhdGVcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAkKCcubG9hZGluZ092ZXJsYXkucGRwLXVwZGF0ZScsICRwcm9kdWN0Q29udGFpbmVyKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJGNhcnRDb3VudGVyLmFkZENsYXNzKCdjYXJ0LWNvdW50LS1wb3NpdGl2ZScpO1xuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkcHJvbW90aW9uQmFubmVyLmxlbmd0aCAmJiAkYmFja1RvU2hvcHBwaW5nQnRuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICRiYWNrVG9TaG9wcHBpbmdCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgJG1vZGFsQ2xvc2VCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpO1xuICAgICAgICB0aGlzLnNob3dQcm9kdWN0SW1hZ2UoZGF0YS5pbWFnZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCkge1xuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YUl0ZW1zID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0RGV0YWlscyA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgZm9ybURhdGFJdGVtIG9mIGZvcm1EYXRhSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGZvcm1EYXRhSXRlbTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwcm9kdWN0X2lkJykge1xuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLnByb2R1Y3RJZCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAncXR5W10nKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMucXVhbnRpdHkgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvYXR0cmlidXRlLykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0T3B0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogTnVtYmVyKG5hbWUubWF0Y2goL1xcZCsvZylbMF0pLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMgPSBwcm9kdWN0RGV0YWlscz8ub3B0aW9uU2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFsuLi5wcm9kdWN0RGV0YWlscy5vcHRpb25TZWxlY3Rpb25zLCBwcm9kdWN0T3B0aW9uXVxuICAgICAgICAgICAgICAgICAgICA6IFtwcm9kdWN0T3B0aW9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RVcGRhdGUnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7IHByb2R1Y3REZXRhaWxzIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRlU2VsZWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLmVhY2goKGksIHNjb3BlKSA9PiB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVEYXlzKGRhdGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aFNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbbW9udGhdXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5U2VsZWN0b3IgPSBkYXRlT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lJD1cIltkYXldXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhclNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbeWVhcl1cIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KG1vbnRoU2VsZWN0b3IudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoeWVhclNlbGVjdG9yLnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgbGV0IGRheXNJbk1vbnRoO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4obW9udGgpICYmICFOdW1iZXIuaXNOYU4oeWVhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9ICgoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMCkgPyAyOSA6IDI4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogY2FzZSA2OiBjYXNlIDk6IGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9IDMwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSW5Nb250aCA9IDMxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZGF5ID0gMjk7IGRheSA8PSAzMTsgZGF5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZGF5U2VsZWN0b3IucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtkYXl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXkgPD0gZGF5c0luTW9udGggJiYgIW9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5U2VsZWN0b3Iub3B0aW9ucy5hZGQobmV3IE9wdGlvbihkYXksIGRheSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRheSA+IGRheXNJbk1vbnRoICYmIG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKHNjb3BlKS5vbignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlT3B0aW9uID0gZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1kYXRlXScpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURheXMoZGF0ZU9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNjb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPWRhdGVdJykuZm9yRWFjaCgoZGF0ZU9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZURheXMoZGF0ZU9wdGlvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYW55IGVtcHR5IHN0cmluZyB2YWx1ZXMgZnJvbSB0aGUgZm9ybURhdGFcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiovXG5leHBvcnQgY29uc3QgZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSA9IGZvcm1EYXRhID0+IHtcbiAgICBjb25zdCByZXMgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKHZhbCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjcyOTkyL2FqYXgtcmVxdWVzdC1mYWlscy13aGVuLXNlbmRpbmctZm9ybWRhdGEtaW5jbHVkaW5nLWVtcHR5LWZpbGUtaW5wdXQtaW4tc2FmYXJpXG4gKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtID0gZm9ybURhdGEgPT4ge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoISh2YWwgaW5zdGFuY2VvZiBGaWxlKSB8fCB2YWwubmFtZSB8fCB2YWwuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHJlcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgZW1wdHkgc3RyaW5nIHZhbHVlcyBhbmQgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybURhdGFcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUZvcm1EYXRhID0gZm9ybURhdGEgPT4gZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybShmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpKTtcbiIsImltcG9ydCB7IGlzQnJvd3NlcklFIH0gZnJvbSAnLi9pZS1oZWxwZXJzJztcblxuY29uc3QgYmFubmVyVXRpbHMgPSB7XG4gICAgZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQ6IChwcm9kdWN0QXR0cmlidXRlcykgPT4ge1xuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlIHx8IGlzQnJvd3NlcklFKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHByaWNlID0gMDtcblxuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLnByaWNlX3JhbmdlKSB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhfdGF4LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdiaWdjb21tZXJjZS5wcm9kdWN0cHJpY2VjaGFuZ2UnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYmFubmVyVXRpbHM7XG4iLCJleHBvcnQgY29uc3QgaXNCcm93c2VySUUgPSAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRJbnRvQXJyYXkgPSBjb2xsZWN0aW9uID0+IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbGxlY3Rpb24pO1xuIiwiaW1wb3J0ICdlYXN5em9vbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGdhbGxlcnkpIHtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1tYWluXScpO1xuICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpO1xuICAgICAgICB0aGlzLiRzZWxlY3RhYmxlSW1hZ2VzID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHt9O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLnNldEltYWdlWm9vbSgpO1xuICAgIH1cblxuICAgIHNldE1haW5JbWFnZShpbWdPYmopIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7IC4uLmltZ09iaiB9O1xuXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKCk7XG4gICAgfVxuXG4gICAgc2V0QWx0ZXJuYXRlSW1hZ2UoaW1nT2JqKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVkSW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuZmluZCgnaW1nJykuYXR0cignc3JjJyksXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsOiB0aGlzLiRtYWluSW1hZ2UuYXR0cignZGF0YS16b29tLWltYWdlJyksXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiB0aGlzLiRtYWluSW1hZ2UuZmluZCgnaW1nJykuYXR0cignc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6IHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHJlc3RvcmVJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UodGhpcy5zYXZlZEltYWdlKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNhdmVkSW1hZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3ROZXdJbWFnZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaW1nT2JqID0ge1xuICAgICAgICAgICAgbWFpbkltYWdlVXJsOiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsJyksXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsJyksXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICAgICAgbWFpbkltYWdlQWx0OiAkdGFyZ2V0LmNoaWxkcmVuKCkuZmlyc3QoKS5hdHRyKCdhbHQnKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoaW1nT2JqKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3dhcE1haW5JbWFnZSgpIHtcbiAgICAgICAgY29uc3QgaXNCcm93c2VySUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdUcmlkZW50Jyk7XG5cbiAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLnN3YXAoXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy4kbWFpbkltYWdlLmF0dHIoe1xuICAgICAgICAgICAgJ2RhdGEtem9vbS1pbWFnZSc6IHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZC5hdHRyKHtcbiAgICAgICAgICAgIGFsdDogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZUFsdCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzQnJvd3NlcklFKSB7XG4gICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlc0lFID0ge1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgke3RoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybH0pYCxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbic6ICdjb250ZW50LWJveCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb250YWluJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZC5jc3MoZmFsbGJhY2tTdHlsZXNJRSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltYWdlKCkge1xuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSAkKCcucHJvZHVjdFZpZXctaW1hZ2UnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gJGltYWdlQ29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICRpbWFnZUNvbnRhaW5lci53aWR0aCgpO1xuXG4gICAgICAgIGNvbnN0ICRpbWFnZSA9IHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS4kem9vbTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gJGltYWdlLmhlaWdodCgpO1xuICAgICAgICBjb25zdCB3aWR0aCA9ICRpbWFnZS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChoZWlnaHQgPCBjb250YWluZXJIZWlnaHQgfHwgd2lkdGggPCBjb250YWluZXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEltYWdlWm9vbSgpIHtcbiAgICAgICAgdGhpcy5lYXN5em9vbSA9IHRoaXMuJG1haW5JbWFnZS5lYXN5Wm9vbSh7XG4gICAgICAgICAgICBvblNob3c6ICgpID0+IHRoaXMuY2hlY2tJbWFnZSgpLFxuICAgICAgICAgICAgZXJyb3JOb3RpY2U6ICcnLFxuICAgICAgICAgICAgbG9hZGluZ05vdGljZTogJycsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdJbWFnZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfaW5oZXJpdHNMb29zZSIsImNvbnN0cnVjdG9yIiwiX3NldFByb3RvdHlwZU9mIiwibXVzdGFjaGUiLCJjcmVhdGVGb2N1c1RyYXAiLCJ0b29scyIsIkNvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IiwiREVGQVVMVF9TVEVQIiwiSW1hZ2VHYWxsZXJ5TW9kYWwiLCJpbWFnZUdhbGxlcnkiLCIkZ2FsbGVyeSIsIm1vZGFsVGVtcGxhdGUiLCIkYm9keSIsIiQiLCJjcmVhdGVNb2RhbCIsIl9wcm90byIsImJpbmRFdmVudHMiLCJfdGhpcyIsImZpbmQiLCJvZmYiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkYSIsImN1cnJlbnRUYXJnZXQiLCJpbWFnZVVybCIsImRhdGEiLCJpbWFnZVNyY3NldCIsInpvb21JbWFnZVVybCIsInZpZGVvSWQiLCJzdGVwIiwiY2xvc2VzdCIsIk51bWJlciIsInNwbGl0Iiwib3Blbk1vZGFsIiwiJGdhbGxlcnlNb2RhbCIsImNsb3NlTW9kYWwiLCJrZXkiLCJpcyIsInRhcmdldCIsInNldE1haW5JbWFnZSIsInNldE1haW5WaWRlbyIsInRvdGFsU3RlcCIsInNldE1haW4zNjAiLCJwcmV2aW91czM2MFN0ZXAiLCJuZXh0MzYwU3RlcCIsInBsYXkzNjAiLCJwYXVzZTM2MCIsImRlc3Ryb3lNb2RhbCIsInJlbW92ZSIsIl8kbWFpbkltYWdlTGluayRnZXQiLCIkbWFpbkltYWdlTGluayIsIiRtYWluSW1hZ2UiLCJjbG9uZSIsInJlbW92ZUF0dHIiLCJhdHRyIiwibWFpbkltYWdlTGlua0VsZW1lbnQiLCJnZXQiLCJvdXRlckhUTUwiLCJuYW1lIiwidGV4dCIsInZpZGVvc0xhYmVsIiwiaW1hZ2VzMzYwTGFiZWwiLCJpbWFnZXNMYWJlbCIsInZpZGVvcyIsIm1hcCIsImxpIiwiXyQkZmluZCRjbG9uZSRnZXQiLCJsaW5rRWxlbWVudCIsImltYWdlczM2MCIsIl8kZWwkZ2V0IiwiJGVsIiwiaW1hZ2VzIiwiZmlsdGVyIiwiXyRhJGdldCIsInJlbmRlciIsImhpZGUiLCJhcHBlbmRUbyIsImluaXRJbWFnZVpvb20iLCJmb2N1c1RyYXAiLCJlc2NhcGVEZWFjdGl2YXRlcyIsInJldHVybkZvY3VzT25EZWFjdGl2YXRlIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJfdGhpczIiLCIkbGFzdEFjdGl2ZUVsZW1lbnQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhZGRDbGFzcyIsIiRtYWluSW1nIiwic2hvdyIsInJlbW92ZUNsYXNzIiwiYWN0aXZhdGUiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsIl90aGlzMyIsImhpZGVNYWluVmlkZW8iLCJoaWRlMzYwVUkiLCJkZWFjdGl2YXRlIiwibWFpbkltYWdlVXJsIiwibWFpbkltYWdlU3Jjc2V0Iiwic2hvd01haW5JbWFnZSIsInNldEFjdGl2ZVRodW1iIiwic3dhcE1haW5JbWFnZSIsImhpZGVNYWluSW1hZ2UiLCJfaSIsIiRpbWFnZUNvbnRhaW5lciIsImVhc3l6b29tIiwic3dhcCIsImlzQnJvd3NlcklFIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5jbHVkZXMiLCJmYWxsYmFja1N0eWxlc0lFIiwiY3NzIiwiY2hlY2tJbWFnZSIsImNvbnRhaW5lckhlaWdodCIsImhlaWdodCIsImNvbnRhaW5lcldpZHRoIiwid2lkdGgiLCIkaW1hZ2UiLCIkem9vbSIsIl90aGlzNCIsImVhc3lab29tIiwib25TaG93IiwiZXJyb3JOb3RpY2UiLCJsb2FkaW5nTm90aWNlIiwic2hvd01haW5WaWRlbyIsInNyYyIsInNob3czNjBVSSIsInN3YXBNYWluMzYwIiwic2V0MzYwQ3VycmVudFN0ZXAiLCJjdXJyZW50U3RlcCIsInRvdGFsIiwiX3RoaXM1IiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsMzYwIiwic2V0SW50ZXJ2YWwiLCJDYXJkSW1hZ2VHYWxsZXJ5TW9kYWwiLCJfSW1hZ2VHYWxsZXJ5TW9kYWwyIiwiJHNjb3BlIiwiX3RlbXAiLCJfdGhpczYiLCJfcmVmIiwicHJvZHVjdElkIiwiZ3JhcGhRTFRva2VuIiwiem9vbVNpemUiLCJwcm9kdWN0U2l6ZSIsInRodW1iU2l6ZSIsInR4dFZpZGVvc0xhYmVsIiwidHh0SW1hZ2VzMzYwTGFiZWwiLCJ0eHRJbWFnZXNMYWJlbCIsImxvYWRpbmdNb2RhbFRlbXBsYXRlIiwiX3Byb3RvMiIsIm9wZW5Mb2FkaW5nTW9kYWwiLCJfb3BlbkxvYWRpbmdNb2RhbCIsIl9jYWxsZWUiLCJfY29udGV4dCIsImxvYWRNb2RhbCIsIl9sb2FkTW9kYWwiLCJfY2FsbGVlMiIsIm1haW5JbWFnZSIsIl9jb250ZXh0MiIsImZldGNoUHJvZHVjdCIsImltYWdlIiwiaXNEZWZhdWx0IiwiZ2V0U3Jjc2V0IiwidXJsVGVtcGxhdGUiLCJ6b29tVXJsIiwidXJsIiwidGh1bWJuYWlsVXJsIiwiYWx0VGV4dCIsInZpZGVvIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiaHRtbCIsIl90ZW1wMiIsIl90aGlzNyIsIl9yZWYyIiwiX3JlZjIkZmlyc3RWaWRlbyIsImZpcnN0VmlkZW8iLCJfcmVmMiRmaXJzdCIsImZpcnN0MzYwIiwiZmlyc3QiLCJfZmV0Y2hQcm9kdWN0IiwiX2NhbGxlZTMiLCJfdGhpcyR6b29tU2l6ZSRzcGxpdCQiLCJ6b29tV2lkdGgiLCJ6b29tSGVpZ2h0IiwiX3RoaXMkcHJvZHVjdFNpemUkc3BsIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiX3RoaXMkdGh1bWJTaXplJHNwbGl0IiwidGh1bWJXaWR0aCIsInRodW1iSGVpZ2h0IiwicmVzcCIsIl9yZWYzIiwiX2NvbnRleHQzIiwiYWpheCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInZhcmlhYmxlcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwieGhyRmllbGRzIiwid2l0aENyZWRlbnRpYWxzIiwic2l0ZSIsInByb2R1Y3QiLCJlZGdlcyIsIl9yZWY0Iiwibm9kZSIsIl9yZWY1IiwiY3VzdG9tRmllbGRzIiwiX3JlZjYiLCJfcmVmNyIsIkltYWdlR2FsbGVyeSIsIl9Db3JuZXJzdG9uZUltYWdlR2FsbCIsIl90aGlzOCIsImltYWdlR2FsbGVyeU1vZGFsIiwiX3Byb3RvMyIsImRlZmF1bHQiLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX2NyZWF0ZUNsYXNzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJ1dGlscyIsIkNvcm5lcnN0b25lUHJvZHVjdERldGFpbHMiLCJhbGVydE1vZGFsIiwic2hvd0FsZXJ0TW9kYWwiLCJNb2RhbEV2ZW50cyIsImZpeEZvcm1FbGVtZW50VW5pcXVlSWRzIiwiY3VycmVuY3lGb3JtYXQiLCJTYWxlQ291bnRkb3duIiwiREVCVUdfTE9HIiwibm9ybWFsaXplT3B0aW9uU3RyaW5nIiwicyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImVxdWFsT3B0aW9uU3RyaW5nIiwiYiIsImFyZUFycmF5c0VxdWFsVW5vcmRlcmVkIiwiYXJyMSIsImFycjIiLCJfYXJyMSIsInNsaWNlIiwic29ydCIsIl9hcnIyIiwiZXZlcnkiLCJpbmRleCIsImNhY2hlZFNldHRpbmdzIiwiaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQiLCJfeCIsIl94MiIsIl9oYW5kbGVQcm9taXNlc1dpdGhMaW1pdCIsIl9jYWxsZWU3IiwicHJvbWlzZXMiLCJsaW1pdCIsInJlc3VsdHMiLCJleGVjdXRpbmciLCJfbG9vcCIsIl9pdGVyYXRvciIsIl9zdGVwIiwiX2NvbnRleHQ4IiwicHJvbWlzZSIsIl9jb250ZXh0NyIsInJlc3VsdCIsInNwbGljZSIsImluZGV4T2YiLCJwdXNoIiwicmFjZSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfcmVnZW5lcmF0b3JWYWx1ZXMiLCJhbGwiLCJQcm9kdWN0RGV0YWlscyIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZSIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY29uY2F0IiwibW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUiLCJtb2RpZmllcnNNb2RhbFRlbXBsYXRlIiwib3B0aW9uVG9vbHRpcFRlbXBsYXRlIiwib3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUiLCJvcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUiLCJvcHRpb25QcmljZVRlbXBsYXRlIiwib3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlIiwic3VidG90YWxUZW1wbGF0ZSIsInN1bW1hcnlUZW1wbGF0ZSIsInNob3dQcmljZUZyZWUiLCJzaG93UHJpY2VaZXJvIiwiYWRkVG9DYXJ0V3JhcHBlclNlbGVjdG9yIiwiZmV0Y2hPcHRpb25QcmljZUNhY2hlIiwiY29uc29sZSIsImxvZyIsIl9jb25zb2xlIiwiJGZvcm0iLCIkY2hvb3NlT3B0aW9uc0J0biIsInZhbCIsInJlZnJlc2hQcm9kdWN0TWV0YWRhdGEiLCJlbmFibGVNb2RpZmllcnNNb2RhbCIsImNyZWF0ZU1vZGlmaWVyc01vZGFsIiwiYmluZFByb2R1Y3RFZGl0RXZlbnRzIiwiYmluZFN0aWNreUFkZFRvQ2FydEV2ZW50cyIsImJpbmRNb2RhbERlc3Ryb3kiLCJpbml0T3B0aW9uU3RlcHBlciIsInN5bmNQcm9kdWN0Q2FyZFF0eSIsImluaXRTYWxlQ291bnRkb3duIiwicmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMiLCJwYXJzZU1ldGFkYXRhIiwic2VsZWN0b3IiLCJwYXJzZSIsInByb2R1Y3RPcHRpb25zIiwiZ2V0Vmlld01vZGVsIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlMiIsIl9sZW4yIiwiX2tleTIiLCJtb2RlbCIsIiR1cGRhdGVQcm9kdWN0V3JhcHBlciIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwiJGJ0biIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsInByb3AiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiZm9ybSIsImVkaXRQcm9kdWN0SW5DYXJ0IiwiZWRpdFByb2R1Y3RUb0NhcnQiLCJfZWRpdFByb2R1Y3RUb0NhcnQiLCIkc2F2ZUJ0biIsIm9yaWdpbmFsQnRuVmFsIiwid2FpdE1lc3NhZ2UiLCJmb3JtRGF0YSIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwiaXRlbUlkIiwibmV3UXR5IiwiX3QiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsInVuZGVmaW5lZCIsIiRvdmVybGF5Iiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCJuZXh0IiwicmVzcG9uc2UiLCJjb250ZXh0IiwiZWRpdFByb2R1Y3RDYWxsYmFjayIsImVycm9yVGV4dCIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGVja0lzUXVpY2tWaWV3Q2hpbGQiLCIkcHJlTW9kYWxGb2N1c2VkRWwiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsImVkaXRQcm9kdWN0UXVhbnRpdHkiLCJ1cGRhdGVDYXJ0SXRlbVF1YW50aXR5IiwidHlwZSIsImdldEF0dHJpYnV0ZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJmYWlsIiwiX3hociIsIl9zdGF0dXMiLCJlcnJvciIsIl94MyIsIl94NCIsInJlamVjdCIsImFwaSIsImNhcnQiLCJpdGVtVXBkYXRlIiwiZXJyIiwiX3Jlc3BvbnNlJGRhdGEiLCJzdGF0dXMiLCJlcnJvcnMiLCJqb2luIiwic3VibWl0RXZlbnQiLCJFdmVudCIsImhhbmRsZVN0aWNreUFkZFRvQ2FydENsaWNrIiwiJGJ1dHRvbiIsIiRzdGlja3lRdHkiLCJzaWJsaW5ncyIsIiRmb3JtUXR5IiwiY2hlY2tWYWxpZGl0eSIsImludmFsaWRGaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJmb2N1cyIsInJlcG9ydFZhbGlkaXR5Iiwib25lIiwiY2xvc2VkIiwiZWFjaCIsImZvcm1GaWVsZEVsIiwiJGZvcm1GaWVsZCIsIiRkZWMiLCIkaW5jIiwiJGNoZWNrIiwiaW5pdCIsIiRyYWRpb3MiLCIkY2hlY2tlZCIsIiRmaXJzdCIsInNlbGVjdCIsImluYyIsImVxIiwibm90IiwiaGFzQ2xhc3MiLCIkdW5jaGVjayIsIiRub25lIiwiY2FyZFF0eSIsIiRxdHkiLCJxdHkiLCJ0eHRTYWxlQ291bnRkb3duSlNPTiIsImVuZF9pbiIsImNvbmZpZ3VyZSIsImFkZCIsInVwZGF0ZVZpZXciLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGUzIiwiX2xlbjMiLCJfa2V5MyIsInVwZGF0ZVNhbGVQZXJjZW50IiwidXBkYXRlU2hpcHBpbmdDb3VudGRvd24iLCJtYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3IiwidXBkYXRlTW9kaWZpZXJzVmlldyIsIiRwcm9kdWN0T3B0aW9uc0VsIiwiJG1vZGlmaWVyc01vZGFsT3B0aW9ucyIsIiRtb2RpZmllcnNNb2RhbFN1YnRvdGFsIiwic2hvd09wdGlvbklkcyIsInN0YWNrZWRTaG93T3B0aW9uSWRzIiwibm9uZVNhbGVzIiwiY3VzdG9tRmllbGROb25lU2FsZXMiLCJzaG93T3B0aW9uUHJpY2VzIiwidXBkYXRlTW9kaWZpZXJzU3VidG90YWwiLCJfZGF0YSRwcmljZSIsIl9kYXRhJHByaWNlNCIsIiRkaXYiLCIkc3BhbiIsInNhbGVQZXJjZW50IiwicHJpY2UiLCJ3aXRob3V0X3RheCIsIl9kYXRhJHByaWNlMiIsIl9kYXRhJHByaWNlMyIsInJycF93aXRob3V0X3RheCIsIk1hdGgiLCJyb3VuZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4Iiwid2l0aF90YXgiLCJfZGF0YSRwcmljZTUiLCJfZGF0YSRwcmljZTYiLCJycnBfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRoX3RheCIsIiRzaGlwcGluZ0NvdW50ZG93biIsInVwZGF0ZUNhcnRDb250ZW50IiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlNCIsImNsb3NlTW9kaWZpZXJzTW9kYWwiLCJwcmV2aWV3TW9kYWwiLCJfbGVuNCIsIl9rZXk0Iiwic2hvd1Byb2R1Y3RJbWFnZSIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTUiLCJfbGVuNSIsIl9rZXk1IiwiJG1vZGlmaWVyc01vZGFsSW1nIiwiX3RoaXMkaW1hZ2VHYWxsZXJ5JGN1IiwiY3VycmVudEltYWdlIiwiZWwiLCJmb3JtYXRQcmljZSIsInBsdXNTeW1ib2wiLCJkaXNwbGF5IiwiY3VycmVuY3lfdG9rZW4iLCJjdXJyZW5jeSIsInN5bWJvbCIsImN1cnJlbmN5X2xvY2F0aW9uIiwic3ltYm9sUGxhY2VtZW50IiwiZGVjaW1hbF90b2tlbiIsImRlY2ltYWxUb2tlbiIsImRlY2ltYWxfcGxhY2VzIiwiZGVjaW1hbFBsYWNlcyIsInRob3VzYW5kc190b2tlbiIsInRob3VzYW5kc1Rva2VuIiwiZm9ybWF0dGVkIiwiZmluZE9wdGlvblZhbHVlIiwib3B0aW9uTmFtZSIsInZhbHVlTmFtZSIsIl9oaWRlSWZPcHRpb24kdmFsdWVzIiwiaGlkZUlmT3B0aW9uIiwiZGlzcGxheV9uYW1lIiwidmFsdWVzIiwibGFiZWwiLCJvcHRpb25JZCIsImlkIiwidmFsdWVJZCIsIiRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlciIsIiRhZGRUb0NhcnRXcmFwcGVyIiwiJG1vZGlmaWVyc01vZGFsIiwidHh0Q29udGludWUiLCJwcm9kdWN0VGl0bGUiLCIkbW9kaWZpZXJzTW9kYWxDb21wbGV0ZSIsIiRtb2RpZmllcnNNb2RhbENsb3NlIiwiJG1vZGlmaWVyc01vZGFsQ29udGludWUiLCIkbW9kaWZpZXJzTW9kYWxCYWNrIiwiYXBwZW5kIiwiZ29CYWNrU3RlcCIsImludmFsaWRJbnB1dHMiLCJyZWR1Y2UiLCJfaW52YWxpZElucHV0cyIsImZvckVhY2giLCJ2YWxpZGF0ZVZhcmlhbnRPcHRpb25zIiwiaW5pdE1vZGlmaWVyc1ZpZXciLCJvcGVuTW9kaWZpZXJzTW9kYWwiLCJiZWZvcmUiLCJpZ25vcmVBUElDYWxsIiwiX3VwZGF0ZU1vZGlmaWVyc1ZpZXciLCJfcmVmMyRpZ25vcmVBUElDYWxsIiwiJG1vZGlmaWVyc01vZGFsU3VtbWFyeSIsIiRtb2RpZmllcnNNb2RhbFRpdGxlIiwiJG1vZGlmaWVyc01vZGFsRm9vdGVyIiwiY3VycmVudE9wdGlvbklkIiwiY3VycmVudEdyb3VwTmFtZSIsImN1cnJlbnRHcm91cE9wdGlvbklkcyIsImhpZGVPcHRpb25JZHMiLCJoaWRlT3B0aW9uVmFsdWVzIiwidG9vbHRpcHMiLCJ0b29sdGlwSGVhZGluZ3MiLCJvcHRpb25SZW5hbWVzIiwiX3RoaXMkcHJvZHVjdE9wdGlvbnMkIiwidGl0bGUiLCJncm91cFRvb2x0aXAiLCIkdG9vbHRpcCIsImVtcHR5IiwiZnJvbSIsImVudHJpZXMiLCJzdGF0ZSIsIm9wdGlvbiIsImhpZGVPcHRpb24iLCJncm91cE5hbWUiLCJncm91cE9wdGlvbklkcyIsImlzTm9uZVJhZGlvQ2hlY2tlZCIsIiRmaWxlIiwiaXNGaWxlU2hvd24iLCIkZGF0ZSIsImlzT3B0aW9uYWxEYXRlU2hvd24iLCJyZXF1aXJlZCIsIiRzZWxlY3QiLCJpc09wdGlvbmFsU2VsZWN0U2hvd24iLCIkdGV4dCIsImlzT3B0aW9uYWxUZXh0U2hvd24iLCJmb3JtVmFsdWUiLCJGaWxlIiwiY3VzdG9tRmllbGQiLCJoaWRlSWZNYXRjaCIsImN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYiLCJncm91cE1hdGNoIiwiY3VzdG9tRmllbGRNYXRjaEdyb3VwIiwiX09iamVjdCRhc3NpZ24iLCJ0b29sdGlwTWF0Y2giLCJjdXN0b21GaWVsZE1hdGNoVG9vbHRpcCIsIl90b29sdGlwcyRvcHRpb24kaWQiLCJfdG9vbHRpcHMkb3B0aW9uJGlkMiIsImFzc2lnbiIsInRvb2x0aXAiLCJ2YWx1ZVRvb2x0aXBzIiwidmFsdWVUb29sdGlwSGVhZGluZ3MiLCJjdXN0b21GaWVsZE1hdGNoVG9vbHRpcEhlYWRpbmciLCJuZXdOYW1lIiwiY3VzdG9tRmllbGRNYXRjaFJlbmFtZSIsInZhbHVlTm9uU2FsZXMiLCJjdXN0b21GaWVsZE1hdGNoTm9uU2FsZSIsIl8iLCJjdXN0b21GaWVsZE1hdGNoVG9vbHRpcEdyb3VwIiwic2hvd09wdGlvblRvb2x0aXBzIiwicG9wdWxhdGVEZWZhdWx0T3B0aW9uVmFsdWVzIiwiZGlzcGxheVNob3dPcHRpb25QcmljZXNQcmVsb2FkZXIiLCJzaG93U3VtbWFyeSIsIl94NSIsImludmFsaWQiLCJwb3AiLCIkb3B0aW9uIiwibWF0Y2giLCJoaWRlSWZPcHRpb25zIiwia3YiLCJfcmVmOCIsInRyaW0iLCJfcmVmOSIsInRoZW5PcHRpb25zIiwiX3JlZjAiLCJfcmVmMSIsIl9yZWYxMCIsIl90aGlzOCRmaW5kT3B0aW9uVmFsdSIsImdldEFsbCIsIl9yZWYxMSIsIl9yZWYxMiIsIl9oaWRlT3B0aW9uVmFsdWUiLCJfcmVmMTMiLCJfdGhpczkiLCJfdGhpczkkcHJvZHVjdE9wdGlvbnMiLCJfcmVmMTQiLCJfcmVmMTUiLCJfdGhpczAiLCJfbSQxJHNwbGl0JG1hcCIsIl9yZWYxNiIsIl9yZWYxNyIsIl9yZWYxOCIsIl90aGlzMSIsIl9tJDEkc3BsaXQkbWFwMiIsImhlYWRpbmciLCJfcmVmMTkiLCJfcmVmMjAiLCJfcmVmMjEiLCJfa3Ykc3BsaXQkbWFwIiwidmFsdWVMYWJlbCIsIl9vcHRpb24kdmFsdWVzJGZpbmQiLCJfcmVmMjIiLCJmZXRjaFNldHRpbmdzIiwiX2ZldGNoU2V0dGluZ3MiLCJjdXJyZW5jeUNvZGUiLCJhY3RpdmVfY3VycmVuY3lfY29kZSIsImRlZmF1bHRDdXJyZW5jeUNvZGUiLCJkZWZhdWx0X2N1cnJlbmN5X2NvZGUiLCJzZXR0aW5ncyIsImZldGNoT3B0aW9uUHJpY2VzIiwiX2ZldGNoT3B0aW9uUHJpY2VzIiwiX2NhbGxlZTQiLCJzaG93T3B0aW9ucyIsIl90aGlzMTAiLCJzZWxlY3RlZE9wdGlvblZhbHVlSWRzIiwiX3lpZWxkJGhhbmRsZVByb21pc2VzIiwicHJldiIsInNlbGVjdGlvbnMiLCJfY29udGV4dDQiLCJfcmVmMjMiLCJvcHRpb25FbnRpdHlJZCIsInZhbHVlRW50aXR5SWQiLCJfcmVmMjQiLCJmZXRjaE9wdGlvblByaWNlIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJzZWxlY3Rpb24iLCJwcmljZXNXaXRoVGF4IiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoIiwiX3ByZXYkcHJpY2VzV2l0aFRheCIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aDIiLCJfcHJldiRwcmljZXNXaXRoVGF4MiIsIm5vblNhbGVQcmljZVdpdGhUYXgiLCJiYXNlUHJpY2UiLCJhZGp1c3RlZFByaWNlc1dpdGhUYXgiLCJub25TYWxlUHJpY2VWYWx1ZSIsInByaWNlc1dpdGhvdXRUYXgiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGgzIiwiX3ByZXYkcHJpY2VzV2l0aG91dFRhIiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoNCIsIl9wcmV2JHByaWNlc1dpdGhvdXRUYTIiLCJub25TYWxlUHJpY2VXaXRob3V0VGF4IiwiYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4IiwiX3g2IiwiX3g3IiwiX2ZldGNoT3B0aW9uUHJpY2UiLCJfY2FsbGVlNSIsIm9wdGlvblZhbHVlSWRzIiwiY2FjaGVLZXkiLCJfY29udGV4dDUiLCJfeDgiLCJfdGhpczExIiwiX3JlZjI1IiwiX3JlZjI1JCIsIiRsYWJlbCIsImFmdGVyIiwicHJlcGVuZCIsIl9yZWYyNiIsInZhbHVlVG9vbHRpcCIsIiR2YWx1ZSIsIl9yZWYyNyIsIl9yZWYyOCIsIl9yZWYyOSIsInZhbHVlVG9vbHRpcEhlYWRpbmciLCIkdG9vbHRpcEhlYWRpbmciLCJfdGhpczEyIiwib3B0aW9uSWRzIiwiX2luZGV4IiwiX3JlZjMwIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZDMiLCJfdG9vbHRpcHMkb3B0aW9uJGlkNCIsInNob3dJbmxpbmVPcHRpb25Ub29sdGlwcyIsIl90aGlzMTMiLCJfcmVmMzEiLCJfcmVmMzEkIiwiX3JlZjMxJCR2YWx1ZVRvb2x0aXBzIiwiX3JlZjMyIiwiX3JlZjMzIiwiX3JlZjM0Iiwic2hvd25PcHRpb25zIiwiX3JlZjM1IiwiZGVmYXVsdE9wdGlvbnMiLCJfcmVmMzYiLCJwcmVmaWxsIiwic2VsZWN0ZWRfZGF0ZSIsImRheSIsIm1vbnRoIiwieWVhciIsIl9yZWYzNyIsInNlbGVjdGVkIiwiY2hlY2tib3hPcHRpb25zIiwiX3JlZjM4Iiwibm9WYWx1ZSIsImZpbGVPcHRpb25zIiwiX3JlZjM5IiwicGFydGlhbCIsImRhdGVPcHRpb25zIiwiX3JlZjQwIiwiZHJvcGRvd25PcHRpb25zIiwiX3JlZjQxIiwidGV4dE9wdGlvbnMiLCJfcmVmNDIiLCJfcmVmNDMiLCJfdmFsdWVzJGZpbmQiLCJfcmVmNDQiLCJfcmVmNDUiLCJjaGVja2VkIiwiX3JlZjQ2IiwicGFyYW1zIiwicHJlbG9hZGVyIiwicHJpY2VIdG1sIiwicHJpY2VUZXh0Iiwic3VidG90YWxIdG1sIiwiJHByaWNlIiwiJG9sZCIsIiRwbGFjZWhvbGRlciIsIl9zaG93T3B0aW9uUHJpY2VzIiwiX2NhbGxlZTYiLCJpZ25vcmVVcGRhdGVTdWJ0b3RhbCIsIl90aGlzMTQiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwkIiwic2hvd1ByaWNlIiwiX2NvbnRleHQ2IiwiX2lkIiwiX3JlZjQ3IiwidHh0UHJpY2VGcmVlIiwiX3JlZjQ4IiwiX2FkanVzdGVkUHJpY2VzV2l0aFRhIiwiX2FkanVzdGVkUHJpY2VzV2l0aFRhMiIsIl9hZGp1c3RlZFByaWNlc1dpdGhvdSIsIl9hZGp1c3RlZFByaWNlc1dpdGhvdTIiLCJ0YXgiLCJwZHAiLCJwcmljZVdpdGhUYXhWYWx1ZSIsInByaWNlV2l0aFRheCIsIm5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSIsInByaWNlV2l0aG91dFRheFZhbHVlIiwicHJpY2VXaXRob3V0VGF4Iiwibm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlIiwiX25vbmVTYWxlcyRvcHRpb25JZCIsIm5vblNhbGUiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UzIiwiX2FkanVzdGVkUHJpY2VzV2l0aFRhMyIsImV4Y2hhbmdlZE5vblNhbGUiLCJleGNoYW5nZVJhdGUiLCJwcmljZVZhbHVlIiwic2hvd09wdGlvblN1YnRvdGFsIiwiX3g5IiwiX3gwIiwiX3gxIiwiX3gxMCIsIl94MTEiLCJfeDEyIiwiX3Byb2R1Y3QkcHJpY2VzV2l0aFRhIiwiX3Byb2R1Y3QkcHJpY2VzV2l0aG91IiwidHh0U3VidG90YWwiLCJ0eHRSZXZpZXdTZWxlY3Rpb25zIiwib3B0aW9ucyIsIiRzdWJ0b3RhbCIsIl9vcHRpb24kdmFsdWVzIiwiXyRtb2RpZmllcnNNb2RhbE9wdGlvIiwiZGF5U3RyIiwibW9udGhTdHIiLCJ5ZWFyU3RyIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInZhbHVlU3RyIiwiX3JlZjQ5Iiwib3B0aW9uRWxQcmljZUh0bWwiLCJzdW1tYXJ5SHRtbCIsInBhcnNlRGF0ZVRpbWVTdHJpbmciLCJzdHIiLCJyZWdleCIsInNob3J0TW9udGgiLCJzaG9ydERheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJzaG9ydEhvdXIiLCJzaG9ydE1pbnV0ZSIsInNpbmdsZVRpbWVDb21wb25lbnQiLCJ0elNpZ24iLCJ0ekhvdXJPZmZzZXQiLCJ0ek1pbnV0ZU9mZnNldCIsInBhcnNlSW50Iiwic2lnbiIsInR6SG91ciIsInR6TWludXRlIiwidGltZXpvbmUiLCJwYXJzZUNvdW50ZG93bkRhdGUiLCJwYXJzZWREYXRlIiwibm93IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJoIiwibWluIiwic2VjIiwiZGF0ZSIsInV0Y01pbGxpcyIsIlVUQyIsInNldEZ1bGxZZWFyIiwic2V0TW9udGgiLCJzZXREYXRlIiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsImVsZW1lbnRzIiwiU2V0IiwidGltZXIiLCJvYnNlcnZlciIsImRhdGVEYXRhTmFtZSIsImluVmlld3BvcnREYXRhTmFtZSIsInRyYW5zbGF0aW9uc0RhdGFOYW1lIiwic2VsZWN0b3JzIiwiZW5kTGFiZWwiLCJkYXlWYWx1ZSIsImRheUxhYmVsIiwiaG91clZhbHVlIiwiaG91ckxhYmVsIiwibWludXRlVmFsdWUiLCJtaW51dGVMYWJlbCIsInNlY29uZFZhbHVlIiwic2Vjb25kTGFiZWwiLCJ0ZW1wbGF0ZSIsImhpZGVDbGFzcyIsInNhbGVFbmRDbGFzcyIsImFjdGl2ZUNsYXNzIiwidHJhbnNsYXRpb25zIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJqc29uIiwidHJhbnMiLCJrZXlzIiwiX3RyYW5zIiwic2hvcnRLZXkiLCJ2YWxpZERhdGUiLCJvYnNlcnZlIiwic3RhcnQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJyb290IiwidGhyZXNob2xkIiwidW5vYnNlcnZlIiwiaXNWaXNpYmxlSW5WaWV3cG9ydCIsInNpemUiLCJydW4iLCJzdG9wIiwiZGlzY29ubmVjdCIsImJvZHkiLCJjb250YWlucyIsImRpZmYiLCJmbG9vciIsIiRlbmRMYWJlbCIsIiRkYXkiLCIkZGF5VmFsdWUiLCIkZGF5TGFiZWwiLCIkaG91ciIsIiRob3VyVmFsdWUiLCIkaG91ckxhYmVsIiwiJG1pbnV0ZSIsIiRtaW51dGVWYWx1ZSIsIiRtaW51dGVMYWJlbCIsIiRzZWNvbmQiLCIkc2Vjb25kVmFsdWUiLCIkc2Vjb25kTGFiZWwiLCJ0b2dnbGVDbGFzcyIsImFyaWFLZXlDb2RlcyIsIlJFVFVSTiIsIlNQQUNFIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwiaW5pdFJhZGlvT3B0aW9ucyIsInNldENoZWNrZWRSYWRpb0l0ZW0iLCJpdGVtQ29sbGVjdGlvbiIsIml0ZW1JZHgiLCJpZHgiLCJpdGVtIiwiJGl0ZW0iLCJjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24iLCJsYXN0SXRlbUlkeCIsImN1cnJlbnRJZHgiLCJoYW5kbGVJdGVtS2V5RG93biIsImtleUNvZGUiLCJsYXN0Q29sbGVjdGlvbkl0ZW1JZHgiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2SXRlbUlkeCIsIm5leHRJdGVtSWR4IiwiJGNvbnRhaW5lciIsIml0ZW1TZWxlY3RvciIsIiRpdGVtQ29sbGVjdGlvbiIsIm9wdGlvbnNUeXBlc01hcCIsIklOUFVUX0ZJTEUiLCJJTlBVVF9URVhUIiwiSU5QVVRfTlVNQkVSIiwiSU5QVVRfQ0hFQ0tCT1giLCJURVhUQVJFQSIsIkRBVEUiLCJTRVRfU0VMRUNUIiwiU0VUX1JFQ1RBTkdMRSIsIlNFVF9SQURJTyIsIlNXQVRDSCIsIlBST0RVQ1RfTElTVCIsIm9wdGlvbkNoYW5nZURlY29yYXRvciIsImFyZURlZmF1bHRPcHRpb25zU2V0IiwiYXR0cmlidXRlc0RhdGEiLCJhdHRyaWJ1dGVzQ29udGVudCIsImNvbnRlbnQiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsIlByb2R1Y3REZXRhaWxzQmFzZSIsImluaXRSYWRpb0F0dHJpYnV0ZXMiLCJnZXRUYWJSZXF1ZXN0cyIsIl9fIiwiX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUiLCJ2YXJpYW50RG9tTm9kZSIsInZhcmlhbnRUeXBlIiwicmFkaW8iLCIkcmFkaW8iLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsIiRhY3RpdmVUYWIiLCJoYXMiLCIkdGFiQ29udGVudCIsInJycFdpdGhUYXgiLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwicHJpY2VMYWJlbCIsIiR3ZWlnaHQiLCIkaW5jcmVtZW50cyIsIiRhZGRUb0NhcnQiLCIkYWRkVG9DYXJ0Rm9ybSIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGlucHV0Iiwic2t1IiwidXBjIiwicXVhbnRpdHkiLCIkYnVsa1ByaWNpbmciLCIkd2FsbGV0QnV0dG9ucyIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwidmlld01vZGVsIiwibWVzc2FnZSIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJzaG93TWVzc2FnZUJveCIsInVwZGF0ZVByaWNlVmlldyIsIndlaWdodCIsInZhcmlhbnRJZCIsInVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3IiwiYnVsa19kaXNjb3VudF9yYXRlcyIsImFkZFRvQ2FydFdyYXBwZXIiLCJ1cGRhdGVkUHJpY2UiLCJwcmljZV9yYW5nZSIsIm1heCIsInNhdmVkIiwiJG1lc3NhZ2VCb3giLCJpc1ZhbGlkRm9ybSIsInRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5Iiwic2hvdWxkU2hvdyIsImdldEF0dHJpYnV0ZVR5cGUiLCJlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJtb2RhbEZhY3RvcnkiLCJub2QiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiZm9ybXMiLCJub3JtYWxpemVGb3JtRGF0YSIsImNvbnZlcnRJbnRvQXJyYXkiLCJiYW5uZXJVdGlscyIsImN1cnJlbmN5U2VsZWN0b3IiLCJfUHJvZHVjdERldGFpbHNCYXNlIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwibGlzdGVuUXVhbnRpdHlDaGFuZ2UiLCIkc3dhdGNoT3B0aW9uTWVzc2FnZSIsInN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZSIsInN3YXRjaEdyb3VwSWRMaXN0IiwiZ3JvdXAiLCJzdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzIiwidXBkYXRlRGF0ZVNlbGVjdG9yIiwidXBkYXRlUHJvZHVjdERldGFpbHNEYXRhIiwiYWRkVG9DYXJ0VmFsaWRhdG9yIiwic3VibWl0IiwidGFwIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJoYXNEZWZhdWx0T3B0aW9ucyIsIiRwcm9kdWN0U3dhdGNoR3JvdXAiLCIkcHJvZHVjdFN3YXRjaExhYmVscyIsInBsYWNlU3dhdGNoTGFiZWxJbWFnZSIsIiRvcHRpb25JbWFnZSIsIm9wdGlvbkltYWdlV2lkdGgiLCJvdXRlcldpZHRoIiwiZXh0ZW5kZWRPcHRpb25JbWFnZU9mZnNldExlZnQiLCJfbGFiZWwkZ2V0Qm91bmRpbmdDbGkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyaWdodCIsImVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyIiwic2NyZWVuIiwic2hpZnRWYWx1ZSIsInJlZ2lzdGVyQWRkVG9DYXJ0VmFsaWRhdGlvbiIsInNob3dTd2F0Y2hOYW1lcyIsInN3YXRjaEdyb3VwRWxlbWVudCIsInBhcmVudE5vZGUiLCJzaG93U3dhdGNoTmFtZU9uT3B0aW9uIiwiZWxlbWVudCIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZCIsInNldFByb2R1Y3RWYXJpYW50IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiX2lzRW1wdHkiLCIkcHJvZHVjdElkIiwib3B0aW9uQ2hhbmdlQ2FsbGJhY2siLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsImRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50IiwidmFsaWRhdGUiLCJjYiIsIm51bWJlcnNPbmx5IiwiZXJyb3JNZXNzYWdlIiwicHJvZHVjdFF1YW50aXR5RXJyb3JNZXNzYWdlIiwic3dhdGNoR3JvdXBJZCIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJvcHRpb25MYWJlbCIsImNoaWxkcmVuIiwib3B0aW9uVGl0bGUiLCJpc1NhdGlzZmllZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRlU3RyaW5nIiwieCIsImdldFNlbGVjdGVkT3B0aW9uTGFiZWwiLCJwcm9kdWN0VmFyaWFudHNsaXN0IiwibWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCIsImlucHQiLCJkYXRhc2V0IiwicHJvZHVjdEF0dHJpYnV0ZVZhbHVlIiwibGFiZWxzIiwicHJvZHVjdFZhcmlhbnQiLCJ2aWV3IiwicHJvZHVjdE5hbWUiLCJjYXJkIiwiaXNSdW5uaW5nSW5JZnJhbWUiLCJzZWxmIiwidG9wIiwiJGNoYW5nZWRPcHRpb24iLCJwYXJlbnRzIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50IiwiJGNvbnRleHQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGV0YWlsIiwiJHN3YXRjaCIsIiRzd2F0Y2hHcm91cCIsInN3YXRjaE5hbWUiLCJhY3RpdmVTd2F0Y2hHcm91cElkIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwicm9sZSIsIl9pc1BsYWluT2JqZWN0Iiwic2V0QWx0ZXJuYXRlSW1hZ2UiLCJyZXN0b3JlSW1hZ2UiLCIkdGFyZ2V0IiwicXVhbnRpdHlNaW4iLCJxdWFudGl0eU1heCIsInZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkiLCJ2YWxpZGF0ZURlY3JlYXNlQWdhaW5zdE1pbkJvdW5kYXJ5Iiwid2hpY2giLCIkYWRkVG9DYXJ0QnRuIiwiaXRlbUFkZCIsImNhcnRfaWQiLCJvcGVuIiwiQXBwbGVQYXlTZXNzaW9uIiwiJG1vZGFsIiwiY2FydF9pdGVtIiwicmVkaXJlY3RUbyIsImNhcnRfdXJsIiwidXJscyIsImdldENhcnRDb250ZW50IiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCJzdWdnZXN0IiwiY29uZmlnIiwic3VnZ2VzdGlvbnMiLCJnZXRDb250ZW50IiwiaWZyYW1lU2RrIiwibW9kYWwiLCJ1cGRhdGVDb250ZW50IiwiJGNhcnRRdWFudGl0eSIsIiRjb250ZW50IiwiJGNhcnRDb3VudGVyIiwiJHByb21vdGlvbkJhbm5lciIsIiRiYWNrVG9TaG9wcHBpbmdCdG4iLCIkbW9kYWxDbG9zZUJ0biIsImJhbm5lclVwZGF0ZUhhbmRsZXIiLCIkcHJvZHVjdENvbnRhaW5lciIsInJlbG9hZCIsImZvcm1EYXRhSXRlbXMiLCJzZXJpYWxpemVBcnJheSIsInByb2R1Y3REZXRhaWxzIiwiZm9ybURhdGFJdGVtIiwicHJvZHVjdE9wdGlvbiIsIm9wdGlvblZhbHVlIiwib3B0aW9uU2VsZWN0aW9ucyIsInNjb3BlIiwidXBkYXRlRGF5cyIsImRhdGVPcHRpb24iLCJtb250aFNlbGVjdG9yIiwiZGF5U2VsZWN0b3IiLCJ5ZWFyU2VsZWN0b3IiLCJkYXlzSW5Nb250aCIsImlzTmFOIiwiT3B0aW9uIiwiZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSIsInJlcyIsIl9zdGVwJHZhbHVlIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsImV2dCIsImFtb3VudCIsImRvY3VtZW50TW9kZSIsImNvbGxlY3Rpb24iLCIkbWFpbkltYWdlTmVzdGVkIiwiJHNlbGVjdGFibGVJbWFnZXMiLCJzZXRJbWFnZVpvb20iLCJpbWdPYmoiLCJzYXZlZEltYWdlIiwiJHNlbGVjdGVkVGh1bWIiLCJzZWxlY3ROZXdJbWFnZSIsIm1haW5JbWFnZUFsdCIsImFsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9