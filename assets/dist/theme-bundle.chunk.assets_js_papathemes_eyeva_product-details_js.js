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
    _this.bindRenewingDataPlanVisibility();
    _this.renderInlineOptionTooltips();
    _this.renderSpecTooltips();
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
      var _this12 = this;
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
              return _this12.fetchOptionPrice(selectedOptionValueIds);
            }];
            showOptions.forEach(function (option) {
              var values = option.values || (option.value ? [{
                id: option.value
              }] : []);
              values.forEach(function (value) {
                // fetch current option value's prices
                promises.push(function () {
                  return _this12.fetchOptionPrice([].concat(selectedOptionValueIds, [{
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
    var _this13 = this;
    // Display tooltip
    Object.entries(tooltips).forEach(function (_ref25) {
      var optionId = _ref25[0],
        _ref25$ = _ref25[1],
        tooltip = _ref25$.tooltip,
        valueTooltips = _ref25$.valueTooltips;
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
      Object.entries(valueTooltips).forEach(function (_ref26) {
        var valueId = _ref26[0],
          valueTooltip = _ref26[1];
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
    this.productOptions.filter(function (_ref30) {
      var id = _ref30.id;
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
    this.customFields.forEach(function (_ref31) {
      var name = _ref31.name,
        value = _ref31.value;
      if (!name.startsWith(prefix)) {
        return;
      }
      var specName = name.slice(prefix.length).trim();
      if (specName && value) {
        resolvedTooltips[specName] = value;
      }
    });
    Object.entries(resolvedTooltips).forEach(function (_ref32) {
      var specName = _ref32[0],
        tooltipText = _ref32[1];
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
    Object.entries(tooltips).forEach(function (_ref33) {
      var optionId = _ref33[0],
        _ref33$ = _ref33[1],
        tooltip = _ref33$.tooltip,
        _ref33$$valueTooltips = _ref33$.valueTooltips,
        valueTooltips = _ref33$$valueTooltips === void 0 ? {} : _ref33$$valueTooltips;
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
      Object.entries(valueTooltips).forEach(function (_ref34) {
        var valueId = _ref34[0],
          valueTooltip = _ref34[1];
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
    Object.entries(tooltipHeadings).forEach(function (_ref35) {
      var optionId = _ref35[0],
        valueTooltipHeadings = _ref35[1];
      var $option = $productOptionsEl.find("[data-product-attribute-id=\"" + optionId + "\"]");
      if (!$option.length) {
        return;
      }
      Object.entries(valueTooltipHeadings).forEach(function (_ref36) {
        var valueId = _ref36[0],
          valueTooltipHeading = _ref36[1];
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
    var shownOptions = this.productOptions.filter(function (_ref37) {
      var id = _ref37.id;
      return showOptionIds.includes(id);
    });

    /**
     * options that has default value
     */
    var defaultOptions = shownOptions.filter(function (_ref38) {
      var prefill = _ref38.prefill,
        selected_date = _ref38.selected_date,
        values = _ref38.values;
      return prefill || selected_date && (selected_date.day || selected_date.month || selected_date.year) || (values == null ? void 0 : values.find(function (_ref39) {
        var selected = _ref39.selected;
        return selected;
      }));
    });

    /**
     * checkbox type options
     */
    var checkboxOptions = shownOptions.filter(function (_ref40) {
      var noValue = _ref40.noValue,
        value = _ref40.value;
      return noValue || value;
    });

    /**
     * file type options
     */
    var fileOptions = shownOptions.filter(function (_ref41) {
      var partial = _ref41.partial;
      return partial === 'input-file';
    });

    /**
     * date type options
     */
    var dateOptions = shownOptions.filter(function (_ref42) {
      var partial = _ref42.partial;
      return partial === 'date';
    });

    /**
     * dropdown type options
     */
    var dropdownOptions = shownOptions.filter(function (_ref43) {
      var required = _ref43.required,
        partial = _ref43.partial;
      return !required && partial === 'set-select';
    });

    /**
     * text / multiline / number options
     */
    var textOptions = shownOptions.filter(function (_ref44) {
      var partial = _ref44.partial;
      return partial === 'input-text' || partial === 'textarea' || partial === 'input-numbers';
    });
    if (showOptionIds.length > 1 || defaultOptions.length > 0 || checkboxOptions.length > 0 || fileOptions.length > 0 || dateOptions.length > 0 || dropdownOptions.length > 0 || textOptions.length > 0) {
      // show continue button
      $modifiersModalContinue.show();

      // stop auto update the modifiers view until the continue button is clicked
      this.manualUpdateModifiersView = true;

      // populate default values to the shown options
      defaultOptions.forEach(function (_ref45) {
        var _values$find;
        var id = _ref45.id,
          prefill = _ref45.prefill,
          selected_date = _ref45.selected_date,
          values = _ref45.values;
        var valueId = values == null || (_values$find = values.find(function (_ref46) {
          var selected = _ref46.selected;
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
      checkboxOptions.forEach(function (_ref47) {
        var id = _ref47.id,
          checked = _ref47.checked,
          value = _ref47.value,
          noValue = _ref47.noValue;
        if (checked) {
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"hidden\"]").val(value);
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"checkbox\"]").prop('checked', true);
        } else {
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"hidden\"]").val(noValue);
          $modifiersModalOptions.find("input[name=\"attribute[" + id + "]\"][type=\"checkbox\"]").prop('checked', false);
        }
      });

      // mark file input, date input, dropdown select, text input as shown
      [].concat(fileOptions, dateOptions, dropdownOptions, textOptions).forEach(function (_ref48) {
        var id = _ref48.id;
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
      var _this17 = this;
      var _yield$Promise$all, settings, _yield$Promise$all$, prev, selections, showPrice;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (ignoreUpdateSubtotal === void 0) {
              ignoreUpdateSubtotal = false;
            }
            _context6.n = 1;
            return Promise.all([this.fetchSettings(), this.fetchOptionPrices(showOptionIds.map(function (_id) {
              return _this17.productOptions.find(function (_ref49) {
                var id = _ref49.id;
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
                if (_this17.showPriceFree) {
                  return _this17.context.txtPriceFree;
                } else if (_this17.showPriceZero) {
                  return _this17.formatPrice(value, true);
                }
                return '';
              }
              return _this17.formatPrice(value, true);
            };
            selections.forEach(function (_ref50) {
              var _adjustedPricesWithTa, _adjustedPricesWithTa2, _adjustedPricesWithou, _adjustedPricesWithou2;
              var optionId = _ref50.optionId,
                valueId = _ref50.valueId,
                adjustedPricesWithTax = _ref50.adjustedPricesWithTax,
                adjustedPricesWithoutTax = _ref50.adjustedPricesWithoutTax;
              var params = Object.assign({}, settings.tax.pdp !== 'EX' ? {
                priceWithTaxValue: adjustedPricesWithTax == null || (_adjustedPricesWithTa = adjustedPricesWithTax.price) == null ? void 0 : _adjustedPricesWithTa.value,
                priceWithTax: showPrice(adjustedPricesWithTax == null || (_adjustedPricesWithTa2 = adjustedPricesWithTax.price) == null ? void 0 : _adjustedPricesWithTa2.value),
                nonSalePriceWithTaxValue: adjustedPricesWithTax != null && adjustedPricesWithTax.nonSalePriceValue ? adjustedPricesWithTax == null ? void 0 : adjustedPricesWithTax.nonSalePriceValue : '',
                nonSalePriceWithTax: adjustedPricesWithTax != null && adjustedPricesWithTax.nonSalePriceValue ? _this17.formatPrice(adjustedPricesWithTax == null ? void 0 : adjustedPricesWithTax.nonSalePriceValue, true) : ''
              } : {}, settings.tax.pdp !== 'INC' ? {
                priceWithoutTaxValue: adjustedPricesWithoutTax == null || (_adjustedPricesWithou = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou.value,
                priceWithoutTax: showPrice(adjustedPricesWithoutTax == null || (_adjustedPricesWithou2 = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou2.value),
                nonSalePriceWithoutTaxValue: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue : '',
                nonSalePriceWithoutTax: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? _this17.formatPrice(adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue, true) : ''
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
                      nonSalePriceWithTax: _this17.formatPrice(exchangedNonSale, true)
                    } : {}, settings.tax.pdp !== 'INC' ? {
                      nonSalePriceWithoutTaxValue: exchangedNonSale,
                      nonSalePriceWithoutTax: _this17.formatPrice(exchangedNonSale, true)
                    } : {});
                  }
                }
                var priceHtml = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this17.optionPriceTemplate, params, null, ['<%', '%>']);
                var priceText = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this17.optionPricePlainTemplate, params, null, ['<%', '%>']);
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
      var valueLabel = ((_option$values = option.values) == null || (_option$values = _option$values.find(function (_ref51) {
        var id = _ref51.id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX3Byb2R1Y3QtZGV0YWlsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEs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QUFlLENBQUNhLEtBQUssQ0FBQyxDQUFDO0lBRTlDLElBQU1DLE1BQU0sR0FBRyxJQUFJLENBQUNiLFFBQVEsQ0FBQ2hGLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzhGLEtBQUs7SUFDbkQsSUFBTUosTUFBTSxHQUFHRyxNQUFNLENBQUNILE1BQU0sQ0FBQyxDQUFDO0lBQzlCLElBQU1FLEtBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFLLENBQUMsQ0FBQztJQUU1QixJQUFJRixNQUFNLEdBQUdELGVBQWUsSUFBSUcsS0FBSyxHQUFHRCxjQUFjLEVBQUU7TUFDcEQsSUFBSSxDQUFDWCxRQUFRLENBQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNrRCxJQUFJLENBQUMsQ0FBQztJQUN6QztFQUNKLENBQUM7RUFBQTdELE1BQUEsQ0FFRHNwQyxZQUFZLEdBQVosU0FBQUEsWUFBWUEsQ0FBQSxFQUFHO0lBQUEsSUFBQXBwQyxLQUFBO0lBQ1gsSUFBSSxDQUFDeUYsUUFBUSxHQUFHLElBQUksQ0FBQ3RELFVBQVUsQ0FBQ3NFLFFBQVEsQ0FBQztNQUNyQ0MsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUE7UUFBQSxPQUFRMUcsS0FBSSxDQUFDaUcsVUFBVSxDQUFDLENBQUM7TUFBQTtNQUMvQlUsV0FBVyxFQUFFLEVBQUU7TUFDZkMsYUFBYSxFQUFFO0lBQ25CLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTlHLE1BQUEsQ0FFREMsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ29wQyxpQkFBaUIsQ0FBQ2hwQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ3FwQyxjQUFjLENBQUN4c0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3RFLENBQUM7RUFBQSxPQUFBdVAsWUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9leWV2YS9pbWFnZS1nYWxsZXJ5LmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvcHJvZHVjdC1kZXRhaWxzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvc2FsZS1jb3VudGRvd24uanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvY29uc3RhbnRzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL2luZGV4LmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL3JhZGlvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvYXBpLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9iYW5uZXItdXRpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2llLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9pbWFnZS1nYWxsZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZWFzeXpvb20nO1xuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcbmltcG9ydCB7IGNyZWF0ZUZvY3VzVHJhcCB9IGZyb20gJ2ZvY3VzLXRyYXAnO1xuaW1wb3J0IHsgdG9vbHMgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkgZnJvbSAnLi4vLi4vdGhlbWUvcHJvZHVjdC9pbWFnZS1nYWxsZXJ5JztcblxuY29uc3QgREVGQVVMVF9TVEVQID0gMzYwO1xuY2xhc3MgSW1hZ2VHYWxsZXJ5TW9kYWwge1xuICAgIG1vZGFsVGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtb3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJDbG9zZVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5DbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tZWFzeXpvb21cIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLWltZy1jb250YWluZXJcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZtYWluSW1hZ2VMaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi0zNjBcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC0zNjAtaW1nLWNvbnRhaW5lclwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtaW1nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkXCIgZGF0YS1zaXplcz1cImF1dG9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLXByZXZpb3VzXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wcmV2aW91cz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctbGVmdC1sb25nXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLXBsYXlcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBsYXk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXBsYXlcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlBsYXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1wYXVzZVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGF1c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXBhdXNlXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5QYXVzZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLW5leHRcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLW5leHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LXJpZ2h0LWxvbmdcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tdmlkZW9cIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxhenlsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aXRsZVwiPnt7bmFtZX19PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3sjdmlkZW9zLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC12aWRlb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbGFiZWxcIj57e3ZpZGVvc0xhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyN2aWRlb3N9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svdmlkZW9zfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L3ZpZGVvcy5sZW5ndGh9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXMzNjAubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLTM2MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sYWJlbFwiPnt7aW1hZ2VzMzYwTGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlczM2MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlczM2MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXMzNjAubGVuZ3RofX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1pbWFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbGFiZWxcIj57e2ltYWdlc0xhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SW1hZ2VHYWxsZXJ5P30gaW1hZ2VHYWxsZXJ5XG4gICAgICogQHBhcmFtIHtqUXVlcnk/fSAkZ2FsbGVyeVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGltYWdlR2FsbGVyeSA9IG51bGwsICRnYWxsZXJ5ID0gbnVsbCkge1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeSA9IGltYWdlR2FsbGVyeTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeSA9ICRnYWxsZXJ5O1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuXG4gICAgICAgIGlmIChpbWFnZUdhbGxlcnkgJiYgJGdhbGxlcnkpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLiRnYWxsZXJ5KSB7XG4gICAgICAgICAgICAvLyBvcGVuIG1vZGFsIHdoZW4gY2xpY2sgb24gdmlkZW8sIDM2MCB2aWV3LCBvciBtb3JlIGltYWdlIHRodW1ibmFpbHNcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlcbiAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS1tb3JlXScpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrJylcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3Jjc2V0ID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwID0gJGEuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0nKS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IE51bWJlcihpbWFnZVVybC5zcGxpdCgnIycpWzFdKSB8fCBERUZBVUxUX1NURVBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbChpbWFnZVVybCwgaW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdmlkZW9JZCwgc3RlcCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIGNsb3NlIGJ1dHRvblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBwcmVzcyBFc2NhcGUga2V5XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5vbigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIG91dHNpZGUgKG92ZXJsYXkpXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRnYWxsZXJ5TW9kYWwuaXMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGltYWdlIHRodW1ibmFpbHNcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZShcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyksXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB2aWRlbyB0aHVtYm5haWxzXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJyk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5WaWRlbyh2aWRlb0lkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gMzYwIGltYWdlIHRodW1ibmFpbHNcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsU3RlcCA9ICRhLmRhdGEoJ2V5ZXZhSW1hZ2VHYWxsZXJ5TW9kYWxJdGVtUm90YXRvcicpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICB0b3RhbFN0ZXAsXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcHJldmlvdXNdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91czM2MFN0ZXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLW5leHRdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5uZXh0MzYwU3RlcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGxheV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXkzNjAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBhdXNlXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucGF1c2UzNjAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveU1vZGFsKCkge1xuICAgICAgICBpZiAodGhpcy4kZ2FsbGVyeU1vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwgPSAkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgJG1haW5JbWFnZUxpbmsgPSB0aGlzLmltYWdlR2FsbGVyeS4kbWFpbkltYWdlLmZpbmQoJ2EnKS5jbG9uZSgpO1xuICAgICAgICAkbWFpbkltYWdlTGluay5maW5kKCdpbWcnKS5yZW1vdmVBdHRyKCdkYXRhLXpvb20taW1hZ2UnKS5hdHRyKCdkYXRhLWV5ZXZhLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZScsICcnKTtcblxuICAgICAgICBjb25zdCBtYWluSW1hZ2VMaW5rRWxlbWVudCA9ICRtYWluSW1hZ2VMaW5rLmdldCgwKT8ub3V0ZXJIVE1MO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy4kZ2FsbGVyeS5jbG9zZXN0KCcucHJvZHVjdFZpZXcnKS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LXRpdGxlXScpLnRleHQoKTtcbiAgICAgICAgY29uc3QgdmlkZW9zTGFiZWwgPSB0aGlzLiRnYWxsZXJ5LmRhdGEoJ3ZpZGVvc0xhYmVsJykgfHwgJ1ZpZGVvcyc7XG4gICAgICAgIGNvbnN0IGltYWdlczM2MExhYmVsID0gdGhpcy4kZ2FsbGVyeS5kYXRhKCdpbWFnZXMzNjBMYWJlbCcpIHx8ICczNjAgVmlldyc7XG4gICAgICAgIGNvbnN0IGltYWdlc0xhYmVsID0gdGhpcy4kZ2FsbGVyeS5kYXRhKCdpbWFnZXNMYWJlbCcpIHx8ICdQcm9kdWN0IEltYWdlcyc7XG5cbiAgICAgICAgY29uc3QgdmlkZW9zID0gdGhpcy4kZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW9dJykuZ2V0KCkubWFwKGxpID0+ICh7XG4gICAgICAgICAgICBsaW5rRWxlbWVudDogJChsaSkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLmNsb25lKCkuZ2V0KDApPy5vdXRlckhUTUwsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCBpbWFnZXMzNjAgPSB0aGlzLiRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdJykuZ2V0KCkubWFwKGxpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQobGkpLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKS5jbG9uZSgpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQO1xuICAgICAgICAgICAgJGVsLnJlbW92ZUF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtJykuYXR0cignZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcicsIHN0ZXApO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiAkZWwuZ2V0KDApPy5vdXRlckhUTUwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLiRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKS5nZXQoKVxuICAgICAgICAgICAgLmZpbHRlcihhID0+ICQoYSkuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS1tb3JlXScpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIC5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGEgPSAkKGEpLmNsb25lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtJywgJycpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICRhLmdldCgwKT8ub3V0ZXJIVE1MLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLm1vZGFsVGVtcGxhdGUsIHtcbiAgICAgICAgICAgIG1haW5JbWFnZUxpbmtFbGVtZW50LFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHZpZGVvc0xhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzMzYwTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXNMYWJlbCxcbiAgICAgICAgICAgIHZpZGVvcyxcbiAgICAgICAgICAgIGltYWdlczM2MCxcbiAgICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5oaWRlKCkuYXBwZW5kVG8odGhpcy4kYm9keSk7XG5cbiAgICAgICAgdGhpcy5pbml0SW1hZ2Vab29tKCk7XG5cbiAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAodGhpcy4kZ2FsbGVyeU1vZGFsLmdldCgwKSwge1xuICAgICAgICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IGZhbHNlLFxuICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW5Nb2RhbChpbWFnZVVybCwgaW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdmlkZW9JZCwgdG90YWxTdGVwKSB7XG4gICAgICAgIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50ID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy4kYm9keS5hZGRDbGFzcygnX2dhbGxlcnlNb2RhbC1vcGVuZWQnKTtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZUdhbGxlcnkpIHtcbiAgICAgICAgICAgIGNvbnN0ICRtYWluSW1nID0gdGhpcy5pbWFnZUdhbGxlcnkuJG1haW5JbWFnZS5maW5kKCdpbWcnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKFxuICAgICAgICAgICAgICAgICRtYWluSW1nLmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgICAgICRtYWluSW1nLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuYXR0cignZGF0YS16b29tLWltYWdlJyksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZGVvSWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKHZpZGVvSWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsU3RlcCkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKGltYWdlVXJsLCBpbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmFkZENsYXNzKCdfb3BlbmluZycpLnNob3coKS5yZW1vdmVDbGFzcygnX29wZW5pbmcnKTtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAuYWN0aXZhdGUoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlXScpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmFkZENsYXNzKCdfY2xvc2luZycpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZU1haW5WaWRlbygpO1xuICAgICAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcbiAgICAgICAgICAgIHRoaXMuJGJvZHkucmVtb3ZlQ2xhc3MoJ19nYWxsZXJ5TW9kYWwtb3BlbmVkJyk7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwucmVtb3ZlQ2xhc3MoJ19jbG9zaW5nJykuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50KSB0aGlzLiRsYXN0QWN0aXZlRWxlbWVudC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIHNldE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKSB7XG4gICAgICAgIHRoaXMuaGlkZU1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLmhpZGUzNjBVSSgpO1xuICAgICAgICB0aGlzLnNob3dNYWluSW1hZ2UoKTtcblxuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKG1haW5JbWFnZVVybCk7XG4gICAgICAgIHRoaXMuc3dhcE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKTtcbiAgICB9XG5cbiAgICBzaG93TWFpbkltYWdlKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZU1haW5JbWFnZSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKG1haW5JbWFnZVVybCwgdmlkZW9JZCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgLmZpbHRlcigoX2ksIGEpID0+XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsICYmICQoYSkuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSA9PT0gbWFpbkltYWdlVXJsXG4gICAgICAgICAgICAgICAgfHwgdmlkZW9JZCAmJiAkKGEpLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJykgPT09IHZpZGVvSWQpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIHN3YXBNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCkge1xuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKTtcbiAgICAgICAgY29uc3QgJGEgPSAkaW1hZ2VDb250YWluZXIuZmluZCgnYScpO1xuICAgICAgICBjb25zdCAkbWFpbkltYWdlID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZV0nKTtcblxuICAgICAgICAkaW1hZ2VDb250YWluZXIuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcbiAgICAgICAgJGEuYXR0cignaHJlZicsIHpvb21JbWFnZVVybCk7XG4gICAgICAgICRtYWluSW1hZ2UuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKS5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpO1xuXG4gICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5zd2FwKFxuICAgICAgICAgICAgbWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGlzQnJvd3NlcklFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnVHJpZGVudCcpO1xuICAgICAgICBpZiAoaXNCcm93c2VySUUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrU3R5bGVzSUUgPSB7XG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKCR7bWFpbkltYWdlVXJsfSlgLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtb3JpZ2luJzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJ2NvbnRhaW4nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLW1haW4taW1hZ2VdJykuY3NzKGZhbGxiYWNrU3R5bGVzSUUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgJGltYWdlQ29udGFpbmVyID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWctY29udGFpbmVyXScpO1xuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSAkaW1hZ2VDb250YWluZXIuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gJGltYWdlQ29udGFpbmVyLndpZHRoKCk7XG5cbiAgICAgICAgY29uc3QgJGltYWdlID0gdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLiR6b29tO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAkaW1hZ2UuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gJGltYWdlLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKGhlaWdodCA8IGNvbnRhaW5lckhlaWdodCB8fCB3aWR0aCA8IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEltYWdlWm9vbSgpIHtcbiAgICAgICAgdGhpcy5lYXN5em9vbSA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpLmVhc3lab29tKHtcbiAgICAgICAgICAgIG9uU2hvdzogKCkgPT4gdGhpcy5jaGVja0ltYWdlKCksXG4gICAgICAgICAgICBlcnJvck5vdGljZTogJycsXG4gICAgICAgICAgICBsb2FkaW5nTm90aWNlOiAnJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd01haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLnNob3coKTtcbiAgICB9XG5cbiAgICBoaWRlTWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXJdJykuaGlkZSgpXG4gICAgICAgICAgICAuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgJycpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbyh2aWRlb0lkKSB7XG4gICAgICAgIHRoaXMuaGlkZU1haW5JbWFnZSgpO1xuICAgICAgICB0aGlzLmhpZGUzNjBVSSgpO1xuICAgICAgICB0aGlzLnNob3dNYWluVmlkZW8oKTtcblxuICAgICAgICBjb25zdCBzcmMgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfT9yZWY9MCZhdXRvcGxheT0xYDtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLnNob3coKS5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCBzcmMpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKG51bGwsIHZpZGVvSWQpO1xuICAgIH1cblxuICAgIHNldE1haW4zNjAobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKSB7XG4gICAgICAgIHRoaXMuaGlkZU1haW5JbWFnZSgpO1xuICAgICAgICB0aGlzLmhpZGVNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zaG93MzYwVUkoKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYihtYWluSW1hZ2VVcmwpO1xuICAgICAgICB0aGlzLnN3YXBNYWluMzYwKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCk7XG4gICAgfVxuXG4gICAgc3dhcE1haW4zNjAobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1pbWctY29udGFpbmVyXSBpbWcnKVxuICAgICAgICAgICAgLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybClcbiAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXG4gICAgICAgICAgICAuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcbiAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcCgwLCB0b3RhbFN0ZXApO1xuICAgIH1cblxuICAgIHNob3czNjBVSSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLnNob3coKTtcbiAgICB9XG5cbiAgICBoaWRlMzYwVUkoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5oaWRlKCk7XG4gICAgICAgIHRoaXMucGF1c2UzNjAoKTtcbiAgICB9XG5cbiAgICBzZXQzNjBDdXJyZW50U3RlcChjdXJyZW50U3RlcCwgdG90YWxTdGVwID0gREVGQVVMVF9TVEVQKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKVxuICAgICAgICAgICAgLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcsIGN1cnJlbnRTdGVwKVxuICAgICAgICAgICAgLmNzcygnLS1pbWFnZS0zNjAtc3RlcHMnLCB0b3RhbFN0ZXApO1xuICAgIH1cblxuICAgIG5leHQzNjBTdGVwKCkge1xuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJyk7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcpKSB8fCAwO1xuICAgICAgICBjb25zdCB0b3RhbCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1zdGVwcycpKSB8fCBERUZBVUxUX1NURVA7XG5cbiAgICAgICAgaWYgKHN0ZXAgPCB0b3RhbCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoc3RlcCArIDEsIHRvdGFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoMCwgdG90YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXMzNjBTdGVwKCkge1xuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJyk7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcpKSB8fCAwO1xuICAgICAgICBjb25zdCB0b3RhbCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1zdGVwcycpKSB8fCBERUZBVUxUX1NURVA7XG5cbiAgICAgICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKHN0ZXAgLSAxLCB0b3RhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKHRvdGFsIC0gMSwgdG90YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheTM2MCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsMzYwKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbDM2MCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dDM2MFN0ZXAoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLmFkZENsYXNzKCdfcGxheWluZycpO1xuICAgIH1cblxuICAgIHBhdXNlMzYwKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwzNjApO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykucmVtb3ZlQ2xhc3MoJ19wbGF5aW5nJyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZEltYWdlR2FsbGVyeU1vZGFsIGV4dGVuZHMgSW1hZ2VHYWxsZXJ5TW9kYWwge1xuICAgIGxvYWRpbmdNb2RhbFRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXkgZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxvYWRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgICRzY29wZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvZHVjdElkLFxuICAgICAgICAgICAgZ3JhcGhRTFRva2VuLFxuICAgICAgICAgICAgem9vbVNpemUsXG4gICAgICAgICAgICBwcm9kdWN0U2l6ZSxcbiAgICAgICAgICAgIHRodW1iU2l6ZSxcbiAgICAgICAgICAgIHR4dFZpZGVvc0xhYmVsLFxuICAgICAgICAgICAgdHh0SW1hZ2VzMzYwTGFiZWwsXG4gICAgICAgICAgICB0eHRJbWFnZXNMYWJlbCxcbiAgICAgICAgfSA9IHt9LFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XG4gICAgICAgIHRoaXMuZ3JhcGhRTFRva2VuID0gZ3JhcGhRTFRva2VuO1xuICAgICAgICB0aGlzLnpvb21TaXplID0gem9vbVNpemU7XG4gICAgICAgIHRoaXMucHJvZHVjdFNpemUgPSBwcm9kdWN0U2l6ZTtcbiAgICAgICAgdGhpcy50aHVtYlNpemUgPSB0aHVtYlNpemU7XG4gICAgICAgIHRoaXMudHh0VmlkZW9zTGFiZWwgPSB0eHRWaWRlb3NMYWJlbDtcbiAgICAgICAgdGhpcy50eHRJbWFnZXMzNjBMYWJlbCA9IHR4dEltYWdlczM2MExhYmVsO1xuICAgICAgICB0aGlzLnR4dEltYWdlc0xhYmVsID0gdHh0SW1hZ2VzTGFiZWw7XG4gICAgfVxuXG4gICAgYXN5bmMgb3BlbkxvYWRpbmdNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95TW9kYWwoKTtcblxuICAgICAgICB0aGlzLiRsYXN0QWN0aXZlRWxlbWVudCA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoJ19nYWxsZXJ5TW9kYWwtb3BlbmVkJyk7XG5cbiAgICAgICAgLy8gZGlzcGxheSBsb2FkaW5nIG1vZGFsXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubG9hZGluZ01vZGFsVGVtcGxhdGUpKTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmhpZGUoKS5hcHBlbmRUbyh0aGlzLiRib2R5KTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmFkZENsYXNzKCdfb3BlbmluZycpLnNob3coKS5yZW1vdmVDbGFzcygnX29wZW5pbmcnKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkTW9kYWwoKSB7XG4gICAgICAgIC8vIGZldGNoIHByb2R1Y3QgZGF0YVxuICAgICAgICBhd2FpdCB0aGlzLmZldGNoUHJvZHVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZSA9IHRoaXMuaW1hZ2VzLmZpbmQoaW1hZ2UgPT4gaW1hZ2UuaXNEZWZhdWx0KSB8fCB0aGlzLmltYWdlc1swXTtcbiAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KG1haW5JbWFnZS51cmxUZW1wbGF0ZSk7XG5cbiAgICAgICAgY29uc3QgbWFpbkltYWdlTGlua0VsZW1lbnQgPSBgXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIke21haW5JbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmw9XCIke21haW5JbWFnZS51cmx9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldD1cIiR7bWFpbkltYWdlU3Jjc2V0fVwiXG4gICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsPVwiJHttYWluSW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgPjxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIHNyYz1cIiR7bWFpbkltYWdlLnRodW1ibmFpbFVybH1cIiBkYXRhLXNyY3NldD1cIiR7bWFpbkltYWdlU3Jjc2V0fVwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgYWx0PVwiJHttYWluSW1hZ2UuYWx0VGV4dH1cIiAvPjwvYT5gO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLiRzY29wZS5maW5kKCcuY2FyZC10aXRsZScpLnRleHQoKTtcbiAgICAgICAgY29uc3QgdmlkZW9zTGFiZWwgPSB0aGlzLnR4dFZpZGVvc0xhYmVsIHx8ICdWaWRlb3MnO1xuICAgICAgICBjb25zdCBpbWFnZXMzNjBMYWJlbCA9IHRoaXMudHh0SW1hZ2VzMzYwTGFiZWwgfHwgJzM2MCBWaWV3JztcbiAgICAgICAgY29uc3QgaW1hZ2VzTGFiZWwgPSB0aGlzLnR4dEltYWdlc0xhYmVsIHx8ICdQcm9kdWN0IEltYWdlcyc7XG5cbiAgICAgICAgY29uc3QgdmlkZW9zID0gdGhpcy52aWRlb3MubWFwKHZpZGVvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodmlkZW8udXJsKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgndicpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogYFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kdWN0Vmlldy10aHVtYm5haWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHt2aWRlby51cmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkPVwiJHt2aWRlb0lkfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8ke3ZpZGVvSWR9L2RlZmF1bHQuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSBocmVmPVwiI2ljb24tcGxheS1zb2xpZFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGltYWdlczM2MCA9IHRoaXMuaW1hZ2VzMzYwLm1hcCgoaW1hZ2VVcmwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogYFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kdWN0Vmlldy10aHVtYm5haWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcj1cIiR7c3RlcH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmw9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldD1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlVXJsfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgaHJlZj1cIiNpY29uLTM2MFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuaW1hZ2VzLm1hcChpbWFnZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVNyY3NldCA9IHRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChpbWFnZS51cmxUZW1wbGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiBgXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke2ltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybD1cIiR7aW1hZ2UudXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldD1cIiR7aW1hZ2VTcmNzZXR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7aW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBzcmM9XCIke2ltYWdlLnRodW1ibmFpbFVybH1cIiBkYXRhLXNyY3NldD1cIiR7aW1hZ2VTcmNzZXR9XCIgZGF0YS1zaXplcz1cImF1dG9cIiBhbHQ9XCIke2ltYWdlLmFsdFRleHR9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPmAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCAkZ2FsbGVyeU1vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RhbFRlbXBsYXRlLCB7XG4gICAgICAgICAgICBtYWluSW1hZ2VMaW5rRWxlbWVudCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB2aWRlb3NMYWJlbCxcbiAgICAgICAgICAgIGltYWdlczM2MExhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzTGFiZWwsXG4gICAgICAgICAgICB2aWRlb3MsXG4gICAgICAgICAgICBpbWFnZXMzNjAsXG4gICAgICAgICAgICBpbWFnZXMsXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyByZXBsYWNlIGxvYWRpbmcgbW9kYWwgd2l0aCB0aGUgYWN0dWFsIG1vZGFsXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5odG1sKCRnYWxsZXJ5TW9kYWwuaHRtbCgpKTtcblxuICAgICAgICB0aGlzLmluaXRJbWFnZVpvb20oKTtcblxuICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IGNyZWF0ZUZvY3VzVHJhcCh0aGlzLiRnYWxsZXJ5TW9kYWwuZ2V0KDApLCB7XG4gICAgICAgICAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgICAgICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKHtcbiAgICAgICAgZmlyc3RWaWRlbyA9IGZhbHNlLFxuICAgICAgICBmaXJzdDM2MCA9IGZhbHNlLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLm9wZW5Mb2FkaW5nTW9kYWwoKTtcblxuICAgICAgICB0aGlzLmxvYWRNb2RhbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZpcnN0VmlkZW8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5maXJzdCgpLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8odmlkZW9JZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmaXJzdDM2MCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcl0nKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFpbjM2MChcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdleWV2YUltYWdlR2FsbGVyeU1vZGFsSXRlbVJvdGF0b3InKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcC5hY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hQcm9kdWN0KCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXMgfHwgdGhpcy52aWRlb3MgfHwgdGhpcy5pbWFnZXMzNjApIHJldHVybjtcblxuICAgICAgICBjb25zdCBbem9vbVdpZHRoLCB6b29tSGVpZ2h0XSA9IHRoaXMuem9vbVNpemUuc3BsaXQoJ3gnKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgY29uc3QgW2ltYWdlV2lkdGgsIGltYWdlSGVpZ2h0XSA9IHRoaXMucHJvZHVjdFNpemUuc3BsaXQoJ3gnKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgY29uc3QgW3RodW1iV2lkdGgsIHRodW1iSGVpZ2h0XSA9IHRoaXMudGh1bWJTaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XG5cbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICBxdWVyeShcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0SWQ6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkem9vbVdpZHRoOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHpvb21IZWlnaHQ6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW1hZ2VXaWR0aDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbWFnZUhlaWdodDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aHVtYldpZHRoOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHRodW1iSGVpZ2h0OiBJbnQhXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdChlbnRpdHlJZDogJHByb2R1Y3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwod2lkdGg6ICRpbWFnZVdpZHRoLCBoZWlnaHQ6ICRpbWFnZUhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsVXJsOiB1cmwod2lkdGg6ICR0aHVtYldpZHRoLCBoZWlnaHQ6ICR0aHVtYkhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbVVybDogdXJsKHdpZHRoOiAkem9vbVdpZHRoLCBoZWlnaHQ6ICR6b29tSGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxUZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHMobmFtZXM6IFtcIl9fQDM2MFwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgICAgIHpvb21XaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgem9vbUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHRodW1iV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHRodW1iSGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmdyYXBoUUxUb2tlbn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IFtpbWFnZXMsIHZpZGVvcywgaW1hZ2VzMzYwXSA9IFtcbiAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QuaW1hZ2VzLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IG5vZGUpLFxuICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdC52aWRlb3MuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gbm9kZSksXG4gICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LmN1c3RvbUZpZWxkcy5lZGdlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgbm9kZSB9KSA9PiBub2RlLm5hbWUgPT09ICdfX0AzNjAnKVxuICAgICAgICAgICAgICAgIC5tYXAoKHsgbm9kZSB9KSA9PiBub2RlLnZhbHVlKSxcbiAgICAgICAgXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5PHthbHRUZXh0OiBzdHJpbmcsIGlzRGVmYXVsdDogYm9vbGVhbiwgdXJsPzogc3RyaW5nLCB0aHVtYm5haWxVcmw/OiBzdHJpbmcsIHpvb21Vcmw/OiBzdHJpbmcsIHVybFRlbXBsYXRlPzogc3RyaW5nfT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5PHt0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZ30+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aWRlb3MgPSB2aWRlb3M7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW1hZ2VzMzYwID0gaW1hZ2VzMzYwO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VHYWxsZXJ5IGV4dGVuZHMgQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRnYWxsZXJ5KSB7XG4gICAgICAgIHN1cGVyKCRnYWxsZXJ5KTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnlNb2RhbCA9IG5ldyBJbWFnZUdhbGxlcnlNb2RhbCh0aGlzLCAkZ2FsbGVyeSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgc3VwZXIuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeU1vZGFsLmJpbmRFdmVudHMoKTtcbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4vLyBpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xyXG5pbXBvcnQgQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyBmcm9tICcuLi8uLi90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcclxuaW1wb3J0IHsgYWxlcnRNb2RhbCwgc2hvd0FsZXJ0TW9kYWwsIE1vZGFsRXZlbnRzIH0gZnJvbSAnLi4vLi4vdGhlbWUvZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IHsgZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMsIGN1cnJlbmN5Rm9ybWF0IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgU2FsZUNvdW50ZG93biBmcm9tICcuLi9zYWxlLWNvdW50ZG93bic7XHJcblxyXG5jb25zdCBERUJVR19MT0cgPSBmYWxzZTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZU9wdGlvblN0cmluZyA9IHMgPT4gcy5yZXBsYWNlKC86L2csICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudG9Mb3dlckNhc2UoKTtcclxuXHJcbmZ1bmN0aW9uIGVxdWFsT3B0aW9uU3RyaW5nKGEsIGIpIHtcclxuICAgIHJldHVybiBub3JtYWxpemVPcHRpb25TdHJpbmcoYSkgPT09IG5vcm1hbGl6ZU9wdGlvblN0cmluZyhiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHR3byBhcnJheXMgYXJlIGVxdWFsIHJlZ2FyZGxlc3Mgb2Ygb3JkZXJcclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYXJyMVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIyXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWxVbm9yZGVyZWQoYXJyMSwgYXJyMikge1xyXG4gICAgY29uc3QgX2FycjEgPSBhcnIxLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgY29uc3QgX2FycjIgPSBhcnIyLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgcmV0dXJuIF9hcnIxLmxlbmd0aCA9PT0gX2FycjIubGVuZ3RoICYmIF9hcnIxLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBfYXJyMltpbmRleF0pO1xyXG59XHJcblxyXG5sZXQgY2FjaGVkU2V0dGluZ3M7XHJcblxyXG4vKipcclxuICogSGFuZGxlIG11bHRpcGxlIHByb21pc2VzIHdpdGggYSBjb25jdXJyZW5jeSBsaW1pdCAoZS5nLiwgcHJvY2Vzc2luZyBvbmx5IDEwIHByb21pc2VzIGF0IGEgdGltZSBvdXQgb2YgMTApXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXk8RnVuY3Rpb248VD59IHByb21pc2VzIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBhIHByb21pc2VcclxuICogQHBhcmFtIHsqfSBsaW1pdCBudW1iZXIgb2YgcHJvbWlzZXMgdG8gcHJvY2VzcyBhdCBhIHRpbWVcclxuICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8VD4+fSByZXN1bHRzIG9mIGFsbCBwcm9taXNlc1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQocHJvbWlzZXMsIGxpbWl0ID0gMTApIHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgIGNvbnN0IGV4ZWN1dGluZyA9IFtdOyAvLyBUcmFjayB0aGUgcHJvbWlzZXMgY3VycmVudGx5IGV4ZWN1dGluZ1xyXG5cclxuICAgIGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xyXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBwcm9taXNlIGFuZCBhZGQgaXQgdG8gdGhlIGV4ZWN1dGluZyBsaXN0XHJcbiAgICAgICAgY29uc3QgcCA9IHByb21pc2UoKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmluaXNoZWQgcHJvbWlzZSBmcm9tIGV4ZWN1dGluZyBsaXN0XHJcbiAgICAgICAgICAgIGV4ZWN1dGluZy5zcGxpY2UoZXhlY3V0aW5nLmluZGV4T2YocCksIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaChwKTtcclxuICAgICAgICBleGVjdXRpbmcucHVzaChwKTtcclxuXHJcbiAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGxpbWl0LCB3YWl0IGZvciB0aGUgZmlyc3QgdG8gZmluaXNoXHJcbiAgICAgICAgaWYgKGV4ZWN1dGluZy5sZW5ndGggPj0gbGltaXQpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKGV4ZWN1dGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdhaXQgZm9yIGFsbCByZW1haW5pbmcgcHJvbWlzZXMgdG8gY29tcGxldGVcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb3JuZXJzdG9uZVByb2R1Y3REZXRhaWxzIHtcclxuICAgIG1vZGlmaWVyc01vZGFsT3ZlcmxheVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtb3ZlcmxheVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW92ZXJsYXk+PC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG1vZGlmaWVyc01vZGFsVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbFwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY2xvc2UtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQ2xvc2VcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jbG9zZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5DbG9zZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWJhY2stYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQmFja1wiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCI+QmFjazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LWxlZnQtbG9uZ1wiPjwvdXNlPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWhlYWRlci10aXRsZVwiPjwlJnByb2R1Y3RUaXRsZSU+PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jb250ZW50XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtdGl0bGVcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC10aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWluIGN1cnJlbnQgc3RlcCdzIHRpdGxlIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1vcHRpb25zXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBtb2RpZmllcnMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1zdW1tYXJ5XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBzdW1tYXJ5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY29tcGxldGVcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBhZGQgdG8gY2FydCBidXR0b24gJiBxdHkgYm94IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWZvb3RlclwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbnRpbnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCV0eHRDb250aW51ZSU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtZm9vdGVyLXN1YnRvdGFsXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIHN1YnRvdGFsIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8JSNtYWluSW1hZ2VVcmwlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiPCVtYWluSW1hZ2VVcmwlPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3Jjc2V0PVwiPCVtYWluSW1hZ2VTcmNzZXQlPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtem9vbS1pbWFnZT1cIjwlem9vbUltYWdlVXJsJT5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNpemVzPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGF6eWxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1pbWcgLz5cclxuICAgICAgICAgICAgICAgIDwlL21haW5JbWFnZVVybCU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25Ub29sdGlwVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLXRyaWdnZXJcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbD1cIk1vcmUgaW5mb3JtYXRpb25cIiB0aXRsZT1cIk1vcmUgaW5mb3JtYXRpb25cIj5pPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLWJ1YmJsZVwiPjwldG9vbHRpcCU+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXZhbHVlLXRvb2x0aXBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdG9vbHRpcC10cmlnZ2VyXCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCJNb3JlIGluZm9ybWF0aW9uXCIgdGl0bGU9XCJNb3JlIGluZm9ybWF0aW9uXCI+aTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdG9vbHRpcC1idWJibGVcIj48JXRvb2x0aXAlPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdmFsdWUtdG9vbHRpcC1oZWFkaW5nXCI+PCVoZWFkaW5nJT48L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uUHJpY2VUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8JSNwcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UgX3ByZWxvYWRlclwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UgX3dpdGhUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW9sZCBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW5vdyBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aFRheFZhbHVlJT5cIj48JXByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfd2l0aG91dFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utb2xkIF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utbm93IF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlID0gYFxyXG4gICAgICAgIDwlI3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICg8JXByaWNlV2l0aFRheCU+KVxyXG4gICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgPCVecHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICg8JXByaWNlV2l0aG91dFRheCU+KVxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICBgO1xyXG5cclxuICAgIHN1YnRvdGFsVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtZ3JvdXAtbGFiZWxcIj48JXR4dFN1YnRvdGFsJT48L2Rpdj5cclxuICAgICAgICAgICAgPCUjcHJlbG9hZGVyJT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsIF9wcmVsb2FkZXJcIj4uLi48L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJlbG9hZGVyJT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsIF93aXRoVGF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1vbGQgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ub3cgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3dpdGhvdXRUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW9sZCBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW5vdyBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JXByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHN1bW1hcnlUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDwlI29wdGlvbnMlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb24tbmFtZVwiPjwlbmFtZSU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi12YWx1ZVwiPjwldmFsdWUlPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb24tcHJpY2VzXCI+PCUmcHJpY2VIdG1sJT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvb3B0aW9ucyU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHNob3dQcmljZUZyZWUgPSBmYWxzZTtcclxuICAgIHNob3dQcmljZVplcm8gPSBmYWxzZTtcclxuXHJcbiAgICBhZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IgPSAnLmFkZC10by1jYXJ0LXdyYXBwZXInO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGUgZm9yIGZ1bmN0aW9uIGBmZXRjaE9wdGlvblByaWNlYFxyXG4gICAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIHsgcHJpY2VzV2l0aFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSwgcHJpY2VzV2l0aG91dFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSB9Pn1cclxuICAgICAqL1xyXG4gICAgZmV0Y2hPcHRpb25QcmljZUNhY2hlID0ge307XHJcblxyXG4gICAgY29uc29sZSA9IHtcclxuICAgICAgICBsb2c6ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChERUJVR19MT0cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBmaXhGb3JtRWxlbWVudFVuaXF1ZUlkcygkc2NvcGUpO1xyXG5cclxuICAgICAgICBzdXBlcigkc2NvcGUsIC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJGNob29zZU9wdGlvbnNCdG4gPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gTnVtYmVyKCRmb3JtLmZpbmQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQcm9kdWN0TWV0YWRhdGEoJGZvcm0pO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSBtb2RpZmllcnMgbW9kYWwgZmVhdHVyZVxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIGVuYWJsZSBtb2RpZmllcnMgbW9kYWwgaWYgb3VyIGNob29zZSBvcHRpb25zIGJ1dHRvbiBhcHBlYXJzIGluIHRoZSBwcm9kdWN0IGRldGFpbHNcclxuICAgICAgICB0aGlzLmVuYWJsZU1vZGlmaWVyc01vZGFsID0gJGNob29zZU9wdGlvbnNCdG4ubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RpZmllcnNNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kUHJvZHVjdEVkaXRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRTdGlja3lBZGRUb0NhcnRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRNb2RhbERlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmluaXRPcHRpb25TdGVwcGVyKCk7XHJcbiAgICAgICAgdGhpcy5zeW5jUHJvZHVjdENhcmRRdHkoKTtcclxuICAgICAgICB0aGlzLmluaXRTYWxlQ291bnRkb3duKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kUmVuZXdpbmdEYXRhUGxhblZpc2liaWxpdHkoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcklubGluZU9wdGlvblRvb2x0aXBzKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTcGVjVG9vbHRpcHMoKTtcclxuICAgICAgICAkKCdib2R5JykudHJpZ2dlcigndXBkYXRlLXdpc2hsaXN0LWJ1dHRvbnMnLCBbdGhpcy4kc2NvcGVdKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUHJvZHVjdE1ldGFkYXRhKCRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKS5maXJzdCgpKSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VNZXRhZGF0YSA9IHNlbGVjdG9yID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9ICRmb3JtLmZpbmQoc2VsZWN0b3IpLmZpcnN0KCkudGV4dCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIGludmFsaWQgbWV0YWRhdGEgcGF5bG9hZHMuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VzdG9tRmllbGRzID0gcGFyc2VNZXRhZGF0YSgnW2RhdGEtZXlldmEtcHJvZHVjdC1jdXN0b20tZmllbGRzXScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e1xyXG4gICAgICAgICAqICAgaWQ6IG51bWJlcixcclxuICAgICAgICAgKiAgIGRpc3BsYXlfbmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAqICAgc3RhdGU6ICdtb2RpZmllcicgfCAndmFyaWFudF9vcHRpb24nLFxyXG4gICAgICAgICAqICAgcGFydGlhbDogJ3N3YXRjaCcgfCAnc2V0LXJlY3RhbmdsZScgfCAnc2V0LXNlbGVjdCcgfCAnc2V0LXJhZGlvJ1xyXG4gICAgICAgICAqICAgICB8ICdpbnB1dC10ZXh0JyB8ICdpbnB1dC1udW1iZXJzJyB8ICdpbnB1dC1jaGVja2JveCcgfCAnaW5wdXQtZmlsZSdcclxuICAgICAgICAgKiAgICAgfCAnZGF0ZScgfCAndGV4dGFyZWEnIHwgJ3Byb2R1Y3QtbGlzdCcsXHJcbiAgICAgICAgICogICByZXF1aXJlZDogYm9vbGVhbixcclxuICAgICAgICAgKiAgIHByZWZpbGw/OiBzdHJpbmcsXHJcbiAgICAgICAgICogICBzZWxlY3RlZF9kYXRlPzoge1xyXG4gICAgICAgICAqICAgICBkYXk6IHN0cmluZyxcclxuICAgICAgICAgKiAgICAgbW9udGg6IHN0cmluZyxcclxuICAgICAgICAgKiAgICAgeWVhcjogc3RyaW5nXHJcbiAgICAgICAgICogICB9LFxyXG4gICAgICAgICAqICAgY2hlY2tlZD86IGJvb2xlYW4sXHJcbiAgICAgICAgICogICBub1ZhbHVlPzogbnVtYmVyLFxyXG4gICAgICAgICAqICAgdmFsdWU/OiBudW1iZXIsXHJcbiAgICAgICAgICogICB2YWx1ZXM/OiBBcnJheTx7XHJcbiAgICAgICAgICogICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICogICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIHNlbGVjdGVkOiBib29sZWFuLFxyXG4gICAgICAgICAqICAgICBkYXRhOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+XHJcbiAgICAgICAgICogICB9PlxyXG4gICAgICAgICAqIH0+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnMgPSBwYXJzZU1ldGFkYXRhKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbnNdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzLmN1c3RvbUZpZWxkczonLCB0aGlzLmN1c3RvbUZpZWxkcyk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMucHJvZHVjdE9wdGlvbnM6JywgdGhpcy5wcm9kdWN0T3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0ICR1cGRhdGVQcm9kdWN0V3JhcHBlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtdXBkYXRlLXByb2R1Y3Qtd3JhcHBlcl0nKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3TW9kZWwoLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gc3VwZXIuZ2V0Vmlld01vZGVsKC4uLmFyZ3MpO1xyXG4gICAgICAgIG1vZGVsLiR1cGRhdGVQcm9kdWN0V3JhcHBlciA9IHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyO1xyXG4gICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSk7XHJcbiAgICAgICAgY29uc3QgJGJ0biA9IHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyLmZpbmQoJ2lucHV0LCBidXR0b24nKTtcclxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xyXG4gICAgICAgICAgICAkYnRuLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGJ0bi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkZSB0aGUgbWV0aG9kIHRvIHN1cHBvcnQgZWRpdCBwcm9kdWN0IGluIGNhcnRcclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxyXG4gICAgICovXHJcbiAgICBhZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmVkaXRQcm9kdWN0SW5DYXJ0KSB7XHJcbiAgICAgICAgICAgICQoZm9ybSkuZmluZCgnaW5wdXRbbmFtZT1cImFjdGlvblwiXScpLnZhbCgnRWRpdFByb2R1Y3RGaWVsZHNJbkNhcnQnKTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0UHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChmb3JtKS5maW5kKCdpbnB1dFtuYW1lPVwiYWN0aW9uXCJdJykudmFsKCdhZGQnKTtcclxuICAgICAgICAgICAgc3VwZXIuYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWRpdCBwcm9kdWN0IGluIGNhcnQuXHJcbiAgICAgKiBBbG1vc3QgY2xvbmUgZnJvbSBhZGRQcm9kdWN0VG9DYXJ0IG1ldGhvZCBmcm9tIHRoZSBwYXJlbnQgY2xhc3MuXHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBlZGl0UHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xyXG4gICAgICAgIGNvbnN0ICRzYXZlQnRuID0gJCgnW2RhdGEtdXBkYXRlLXByb2R1Y3Qtd3JhcHBlcl0nLCAkKGV2ZW50LnRhcmdldCkpLmZpbmQoJ2lucHV0LCBidXR0b24nKTtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRzYXZlQnRuLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJHNhdmVCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcclxuXHJcbiAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcclxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICRzYXZlQnRuXHJcbiAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXHJcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkc2F2ZUJ0bi5uZXh0KCksICdzdGF0dXMnLCAncG9saXRlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJHNhdmVCdG5cclxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXHJcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdENhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZhaWx1cmUgPSAoZXJyb3JUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvclRleHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRzYXZlQnRuKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnRNb2RhbCgpLiRwcmVNb2RhbEZvY3VzZWRFbCA9ICRzYXZlQnRuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RRdWFudGl0eSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBmb3JtRGF0YS5nZXQoJ2l0ZW1faWQnKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3UXR5ID0gZm9ybURhdGEuZ2V0KCdxdHlbXScpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ2FydEl0ZW1RdWFudGl0eShpdGVtSWQsIG5ld1F0eSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbHVyZShlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICB9KS5kb25lKChyZXNwb25zZSkgPT4gc3VjY2VzcyhyZXNwb25zZSkpLmZhaWwoKF94aHIsIF9zdGF0dXMsIGVycm9yKSA9PiBmYWlsdXJlKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FydEl0ZW1RdWFudGl0eShpdGVtSWQsIG5ld1F0eSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlPy5kYXRhPy5zdGF0dXMgIT09ICdzdWNjZWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gY2xpY2sgb24gdGhlIEFkZCBOZXcgdG8gQ2FydCBidXR0b24sIHRyaWdnZXIgdGhlIGZvcm0gc3VibWl0IGV2ZW50IHdpdGggYGFkZE5ld1RvQ2FydGAgZmxhZ1xyXG4gICAgICogc28gdGhhdCBuZXcgcHJvZHVjdCBpcyBhbHdheXMgYWRkZWQgdG8gY2FydCByZWdhcmRsZXNzIG9mIGVkaXQgcHJvZHVjdCBpbiBjYXJ0IG9yIG5vdFxyXG4gICAgICovXHJcbiAgICBiaW5kUHJvZHVjdEVkaXRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0RXZlbnQgPSAkLkV2ZW50KCdzdWJtaXQnLCB7IGVkaXRQcm9kdWN0SW5DYXJ0OiB0cnVlIH0pO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuXHJcbiAgICAgICAgdGhpcy4kdXBkYXRlUHJvZHVjdFdyYXBwZXIuZmluZCgnaW5wdXQsIGJ1dHRvbicpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJGZvcm0udHJpZ2dlcihzdWJtaXRFdmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFN0aWNreUFkZFRvQ2FydEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBoYW5kbGVTdGlja3lBZGRUb0NhcnRDbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoJGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcpIHx8ICRidXR0b24uYXR0cignYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBpZiAoISRmb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkc3RpY2t5UXR5ID0gJGJ1dHRvbi5zaWJsaW5ncygnLnByb2R1Y3RWaWV3LXN0aWNreS1hZGQtdG8tY2FydCcpXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnLm1vYmlsZS1pbmNyZW1lbnQgaW5wdXRbbmFtZT1cInF0eVtdXCJdJylcclxuICAgICAgICAgICAgICAgIC5maXJzdCgpO1xyXG4gICAgICAgICAgICBjb25zdCAkZm9ybVF0eSA9ICRmb3JtLmZpbmQoJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gaW5wdXRbbmFtZT1cInF0eVtdXCJdJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkc3RpY2t5UXR5Lmxlbmd0aCAmJiAkZm9ybVF0eS5sZW5ndGggJiYgJGZvcm1RdHkudmFsKCkgIT09ICRzdGlja3lRdHkudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICRmb3JtUXR5LnZhbCgkc3RpY2t5UXR5LnZhbCgpKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtWzBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm0gJiYgIWZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnZhbGlkRmllbGQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJzppbnZhbGlkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGludmFsaWRGaWVsZD8uc2Nyb2xsSW50b1ZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW52YWxpZEZpZWxkPy5mb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm9ybS5yZXBvcnRWYWxpZGl0eSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW52YWxpZEZpZWxkPy5yZXBvcnRWYWxpZGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRGaWVsZC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnI3N0aWNreS1hZGQtdG8tY2FydCcpXHJcbiAgICAgICAgICAgIC5vZmYoJ2NsaWNrLmV5ZXZhU3RpY2t5QWRkVG9DYXJ0JylcclxuICAgICAgICAgICAgLm9uKCdjbGljay5leWV2YVN0aWNreUFkZFRvQ2FydCcsIGhhbmRsZVN0aWNreUFkZFRvQ2FydENsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kTW9kYWxEZXN0cm95KCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgdGhlIGltYWdlIGdhbGxlcnkgbW9kYWwgd2hlbiBxdWljay12aWV3IG1vZGFsIGlzIGNsb3NlZFxyXG4gICAgICAgIC8vIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcclxuICAgICAgICB0aGlzLiRzY29wZS5jbG9zZXN0KCcubW9kYWwnKS5vbmUoTW9kYWxFdmVudHMuY2xvc2VkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LmltYWdlR2FsbGVyeU1vZGFsLmRlc3Ryb3lNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRPcHRpb25TdGVwcGVyKCkge1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLXN0ZXBwZXJdJykuZWFjaCgoX2ksIGZvcm1GaWVsZEVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtRmllbGQgPSAkKGZvcm1GaWVsZEVsKTtcclxuICAgICAgICAgICAgY29uc3QgJGRlYyA9ICRmb3JtRmllbGQuZmluZCgnW2RhdGEtYWN0aW9uPVwiZGVjXCJdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRpbmMgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImluY1wiXScpO1xyXG4gICAgICAgICAgICBjb25zdCAkY2hlY2sgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImNoZWNrXCJdJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLmFkZENsYXNzKCdfY2hlY2tpbmcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkcmFkaW9zID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbzp2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICRyYWRpb3MuZmlsdGVyKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpcnN0ID0gJHJhZGlvcy5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkY2hlY2tlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRyYWRpb3MuaW5kZXgoJGNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBpID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgaSA9PT0gJHJhZGlvcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2suYWRkQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRmaXJzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLnJlbW92ZUNsYXNzKCdfY2hlY2tpbmcnKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IChpbmMpID0+IHtcclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5hZGRDbGFzcygnX2NoZWNraW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86dmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaXJzdCA9ICRyYWRpb3MuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvdW5kIGNoZWNrZWQgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gJHJhZGlvcy5pbmRleCgkY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIG5leHQgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCAkcmFkaW9zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZXEoaSArIDEpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgaSArIDEgPT09ICRyYWRpb3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdCB0aGUgcHJldmlvdXMgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5lcShpIC0gMSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgaSAtIDEgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2suYWRkQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRmaXJzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gY2hlY2tlZCByYWRpbywgYW5kIGZvdW5kIHRoZSBmaXJzdCByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmMgJiYgJGZpcnN0LmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiArIGFuZCBmaXJzdCBvcHRpb24gaXMgJ25vbmUnLCBpZ25vcmUgdGhlIG5vbmUgb3B0aW9uLCBzZWxlY3QgdGhlIGZpcnN0IHZhbHVlZCBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5ub3QoJGZpcnN0KS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsICRyYWRpb3MubGVuZ3RoID09PSAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlLCBzZWxlY3QgdGhlIGZpcnN0IHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRmaXJzdC5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsICRyYWRpb3MubGVuZ3RoID09PSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjaGVja2VkIHJhZGlvIGlzICdub25lJyB0aGVuIHVuY2hlY2sgdGhlIGNoZWNrIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaWYgKCRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86Y2hlY2tlZCcpLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5yZW1vdmVDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykucmVtb3ZlQ2xhc3MoJ19jaGVja2luZycpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJGRlYy5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0KGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkaW5jLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGNoZWNrLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrLmhhc0NsYXNzKCdfY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5jaGVjayB0aGUgY2hlY2tlZCByYWRpbyBhbmQgc2VsZWN0IHRoZSAnbm9uZScgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdW5jaGVjayA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJG5vbmUgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykuZmlsdGVyKCdbdmFsdWU9XCJcIl0sIFt2YWx1ZT1cIjBcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRub25lLmxlbmd0aCA+IDApICRub25lLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCR1bmNoZWNrLmxlbmd0aCkgJHVuY2hlY2sudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLnJlbW92ZUNsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3luYyBwcm9kdWN0IHF1YW50aXR5IHdpdGggcXR5IG9mIHRoZSBjb3JyZXNwb25kaW5nIHByb2R1Y3QgY2FyZFxyXG4gICAgICovXHJcbiAgICBzeW5jUHJvZHVjdENhcmRRdHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdFF1YW50aXR5KSByZXR1cm47IC8vIHN0b3AgaWYgZWRpdCBwcm9kdWN0IGluIGNhcnRcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZFF0eSA9ICQoYFtkYXRhLWNhcmQtcXVhbnRpdHktY2hhbmdlXSBpbnB1dFtuYW1lPVwicXR5XyR7dGhpcy5wcm9kdWN0SWR9XCJdYCkudmFsKCk7XHJcbiAgICAgICAgaWYgKCFjYXJkUXR5KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0ICRxdHkgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGlucHV0W25hbWU9XCJxdHlbXVwiXScpO1xyXG4gICAgICAgIGNvbnN0IHF0eSA9ICRxdHkudmFsKCk7XHJcbiAgICAgICAgaWYgKCRxdHkubGVuZ3RoID4gMCAmJiBxdHkgIT09IGNhcmRRdHkpIHtcclxuICAgICAgICAgICAgJHF0eS52YWwoY2FyZFF0eSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRTYWxlQ291bnRkb3duKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdHh0U2FsZUNvdW50ZG93bkpTT04gfSA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXRlXScpO1xyXG4gICAgICAgICRlbC5kYXRhKCdzYWxlQ291bnRkb3duVHJhbnNsYXRpb25zJywgeyBlbmRfaW46ICRlbC5kYXRhKCdzYWxlQ291bnRkb3duTGFiZWwnKSB9KTtcclxuXHJcbiAgICAgICAgU2FsZUNvdW50ZG93bi5jb25maWd1cmUoeyB0eHRTYWxlQ291bnRkb3duSlNPTiB9KTtcclxuICAgICAgICBTYWxlQ291bnRkb3duLmFkZCgkZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRSZW5ld2luZ0RhdGFQbGFuVmlzaWJpbGl0eSgpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5vZmYoJ2NoYW5nZS5leWV2YVJlbmV3aW5nRGF0YVBsYW4nLCAnW25hbWU9XCJhdHRyaWJ1dGVbMTMzMDNdXCJdJyk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NoYW5nZS5leWV2YVJlbmV3aW5nRGF0YVBsYW4nLCAnW25hbWU9XCJhdHRyaWJ1dGVbMTMzMDNdXCJdJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKS5maXJzdCgpO1xyXG5cclxuICAgICAgICBpZiAoJHByb2R1Y3RPcHRpb25zRWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0ICRyZW5ld2luZ1JhZGlvID0gJHByb2R1Y3RPcHRpb25zRWxcclxuICAgICAgICAgICAgLmZpbmQoJ1tuYW1lPVwiYXR0cmlidXRlWzEzMzAzXVwiXVt2YWx1ZT1cIjE2OThcIl0nKVxyXG4gICAgICAgICAgICAuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKCRyZW5ld2luZ1JhZGlvLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzaG91bGRIaWRlRmllbGRzID0gJHJlbmV3aW5nUmFkaW8uaXMoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgY29uc3QgZmllbGRJZHMgPSBbMTMzMDQsIDEzMzA1LCAxMzMwNl07XHJcblxyXG4gICAgICAgIGZpZWxkSWRzLmZvckVhY2goZmllbGRJZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtmaWVsZElkfVwiXWApLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGlmICgkZmllbGQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzaG91bGRIaWRlRmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVIaWRkZW5Nb2RpZmllckZpZWxkKCRmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAkZmllbGQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLWVycm9yJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZVNob3duTW9kaWZpZXJGaWVsZCgkZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgJGZpZWxkLmNzcygnZGlzcGxheScsICcnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUhpZGRlbk1vZGlmaWVyRmllbGQoJGZpZWxkKSB7XHJcbiAgICAgICAgJGZpZWxkLmZpbmQoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSksIHNlbGVjdCwgdGV4dGFyZWEnKS5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRlbC5pcygnW2RhdGEtZXlldmEtb3JpZ2luYWwtcmVxdWlyZWRdJykpIHtcclxuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdkYXRhLWV5ZXZhLW9yaWdpbmFsLXJlcXVpcmVkJywgJGVsLnByb3AoJ3JlcXVpcmVkJykgPyAndHJ1ZScgOiAnZmFsc2UnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGVsLnByb3AoJ3JlcXVpcmVkJywgZmFsc2UpLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJGVsLmlzKCc6Y2hlY2tib3gsIDpyYWRpbycpKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgkZWwuaXMoJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwucHJvcCgnc2VsZWN0ZWRJbmRleCcsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGVsLnZhbCgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVTaG93bk1vZGlmaWVyRmllbGQoJGZpZWxkKSB7XHJcbiAgICAgICAgJGZpZWxkLmZpbmQoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSksIHNlbGVjdCwgdGV4dGFyZWEnKS5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUmVxdWlyZWQgPSAkZWwuYXR0cignZGF0YS1leWV2YS1vcmlnaW5hbC1yZXF1aXJlZCcpID09PSAndHJ1ZSc7XHJcblxyXG4gICAgICAgICAgICAkZWwucHJvcCgncmVxdWlyZWQnLCBvcmlnaW5hbFJlcXVpcmVkKTtcclxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdyZXF1aXJlZCcsICcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRlbC5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyhkYXRhLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlVmlldyhkYXRhLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQcm9kdWN0TWV0YWRhdGEoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcklubGluZU9wdGlvblRvb2x0aXBzKCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU2FsZVBlcmNlbnQoZGF0YSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGlwcGluZ0NvdW50ZG93bihkYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgIWRhdGE/LnB1cmNoYXNhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub25lU2FsZXMgPSB0aGlzLmN1c3RvbUZpZWxkTm9uZVNhbGVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzU3VidG90YWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2FsZVBlcmNlbnQoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0ICRkaXYgPSB0aGlzLiRzY29wZS5maW5kKCcucHJpY2Utc2VjdGlvbi0tc2FsZVBlcmNlbnQnKTtcclxuICAgICAgICBjb25zdCAkc3BhbiA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2FsZS1wZXJjZW50XScpO1xyXG4gICAgICAgIGxldCBzYWxlUGVyY2VudCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChkYXRhPy5wcmljZT8ud2l0aG91dF90YXg/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5wcmljZT8ucnJwX3dpdGhvdXRfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWUgLyBkYXRhLnByaWNlLnJycF93aXRob3V0X3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheD8udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhPy5wcmljZT8ud2l0aF90YXg/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5wcmljZT8ucnJwX3dpdGhfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUgLyBkYXRhLnByaWNlLnJycF93aXRoX3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy5ub25fc2FsZV9wcmljZV93aXRoX3RheD8udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2FsZVBlcmNlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICRzcGFuLnRleHQoYC0ke3NhbGVQZXJjZW50fSVgKTtcclxuICAgICAgICAgICAgJGRpdi5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNwYW4udGV4dCgnJyk7XHJcbiAgICAgICAgICAgICRkaXYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTaGlwcGluZ0NvdW50ZG93bihkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJHNoaXBwaW5nQ291bnRkb3duID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcGFwYXRoZW1lcy1zaGlwcGluZy1jb3VudGRvd25dJyk7XHJcblxyXG4gICAgICAgIGlmICgkc2hpcHBpbmdDb3VudGRvd24uaXMoJzpoaWRkZW4nKSAmJiBkYXRhPy5wdXJjaGFzYWJsZSkge1xyXG4gICAgICAgICAgICAkc2hpcHBpbmdDb3VudGRvd24uY3NzKCdzdHlsZScsICdmbGV4Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2hpcHBpbmdDb3VudGRvd24uaXMoJzp2aXNpYmxlJykgJiYgIWRhdGE/LnB1cmNoYXNhYmxlKSB7XHJcbiAgICAgICAgICAgICRzaGlwcGluZ0NvdW50ZG93bi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnRDb250ZW50KC4uLmFyZ3MpIHtcclxuICAgICAgICAvLyBjbG9zZSBtb2RpZmllcnMgbW9kYWwgYWZ0ZXIgYWRkZWQgcHJvZHVjdCB0byBjYXJ0XHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJHByZU1vZGFsRm9jdXNlZEVsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIudXBkYXRlQ2FydENvbnRlbnQoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSwgLi4uYXJncykge1xyXG4gICAgICAgIHN1cGVyLnNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UsIC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxJbWcgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtaW1nXScpO1xyXG4gICAgICAgIGNvbnN0IHsgbWFpbkltYWdlVXJsLCB6b29tSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCB9ID0gdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlO1xyXG5cclxuICAgICAgICBpZiAobWFpbkltYWdlVXJsICYmIG1haW5JbWFnZVVybCAhPT0gJG1vZGlmaWVyc01vZGFsSW1nLmF0dHIoJ3NyYycpKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEltZ1xyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBtYWluIGltYWdlIGluIHF1aWNrLXZpZXcgb24gbW9iaWxlXHJcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBlbCkgPT4gJChlbCkuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeV0nKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIG1haW5JbWFnZVNyY3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IHByaWNlIHdpdGggY3VycmVuY3kgc3ltYm9sIGFuZCBkZWNpbWFsIHBsYWNlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwbHVzU3ltYm9sIHdoZXRoZXIgdG8gc2hvdyBwbHVzIHN5bWJvbCBmb3IgcG9zaXRpdmUgdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGZvcm1hdFByaWNlKHZhbHVlLCBwbHVzU3ltYm9sID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBkaXNwbGF5ID0gY2FjaGVkU2V0dGluZ3MgPyB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5X3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LnN5bWJvbCxcclxuICAgICAgICAgICAgY3VycmVuY3lfbG9jYXRpb246IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuc3ltYm9sUGxhY2VtZW50LFxyXG4gICAgICAgICAgICBkZWNpbWFsX3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LmRlY2ltYWxUb2tlbixcclxuICAgICAgICAgICAgZGVjaW1hbF9wbGFjZXM6IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuZGVjaW1hbFBsYWNlcyxcclxuICAgICAgICAgICAgdGhvdXNhbmRzX3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LnRob3VzYW5kc1Rva2VuLFxyXG4gICAgICAgIH0gOiB7fTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBjdXJyZW5jeUZvcm1hdCgtdmFsdWUsIGRpc3BsYXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGx1c1N5bWJvbCA/IGAtJHtmb3JtYXR0ZWR9YCA6IGZvcm1hdHRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGN1cnJlbmN5Rm9ybWF0KHZhbHVlLCBkaXNwbGF5KTtcclxuICAgICAgICByZXR1cm4gcGx1c1N5bWJvbCA/IGArJHtmb3JtYXR0ZWR9YCA6IGZvcm1hdHRlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmQgb3B0aW9uIHZhbHVlIGJ5IG9wdGlvbiBuYW1lIGFuZCB2YWx1ZSBuYW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgb3B0aW9uIGRpc3BsYXkgbmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlTmFtZSB2YWx1ZSBsYWJlbFxyXG4gICAgICogQHJldHVybnMge1tudW1iZXIsIG51bWJlcl19IG9wdGlvbklkLCB2YWx1ZUlkXHJcbiAgICAgKi9cclxuICAgIGZpbmRPcHRpb25WYWx1ZShvcHRpb25OYW1lLCB2YWx1ZU5hbWUpIHtcclxuICAgICAgICBjb25zdCBoaWRlSWZPcHRpb24gPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgZGlzcGxheV9uYW1lIH0pID0+IGRpc3BsYXlfbmFtZS5yZXBsYWNlKCcvOjsvZycsICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGhpZGVJZk9wdGlvbj8udmFsdWVzPy5maW5kKCh7IGxhYmVsIH0pID0+IGxhYmVsLnJlcGxhY2UoJy86Oy9nJywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZU5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uSWQgPSBoaWRlSWZPcHRpb24/LmlkO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZT8uaWQ7XHJcbiAgICAgICAgcmV0dXJuIFtvcHRpb25JZCwgdmFsdWVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1tYWluXScpLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpO1xyXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKS5hdHRyKCdkYXRhLXNyY3NldCcpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkYXR0cmlidXRlTWVzc2FnZVdyYXBwZXIgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LWF0dHJpYnV0ZXMtbWVzc2FnZV0nKTtcclxuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0V3JhcHBlciA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLWFkZC10by1jYXJ0LXdyYXBwZXJdJyk7XHJcbiAgICAgICAgY29uc3QgJGNob29zZU9wdGlvbnNCdG4gPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kaWZpZXJzTW9kYWxUZW1wbGF0ZSwge1xyXG4gICAgICAgICAgICB0eHRDb250aW51ZTogdGhpcy5jb250ZXh0LnR4dENvbnRpbnVlLFxyXG4gICAgICAgICAgICBwcm9kdWN0VGl0bGU6IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtdGl0bGVdJykuaHRtbCgpLFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VVcmw6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwgfHwgbWFpbkltYWdlVXJsLFxyXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwgfHwgem9vbUltYWdlVXJsLFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VTcmNzZXQgfHwgbWFpbkltYWdlU3Jjc2V0LFxyXG4gICAgICAgIH0sIG51bGwsIFsnPCUnLCAnJT4nXSkpLmFwcGVuZFRvKCRwcm9kdWN0T3B0aW9uc0VsKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENvbXBsZXRlID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDbG9zZSA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY2xvc2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ29udGludWUgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEJhY2sgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2tdJyk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgbW9kaWZpZXIgb3B0aW9ucyB0byB0aGUgbW9kYWxcclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1zdGF0ZT1cIm1vZGlmaWVyXCJdJykuYXBwZW5kVG8oJG1vZGlmaWVyc01vZGFsT3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgYWRkIHRvIGNhcnQgJiBxdHkgYm94IHRvIHRoZSBtb2RhbFxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENvbXBsZXRlLmFwcGVuZCgkYWRkVG9DYXJ0V3JhcHBlcik7XHJcblxyXG4gICAgICAgIC8vIGNsb25lIHB1cmNoYXNhYmxlIG1lc3NhZ2VcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5maW5kKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpLmNsb25lKClcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlcik7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENsb3NlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2sub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFja1N0ZXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29udGludWUub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBhbmQgcmVwb3J0IGludmFsaWQgaW5wdXRzIGlmIGFueVxyXG4gICAgICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5zbGljZSgtMSlbMF0gfHwgW107XHJcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRJbnB1dHMgPSBzaG93T3B0aW9uSWRzLnJlZHVjZSgoX2ludmFsaWRJbnB1dHMsIG9wdGlvbklkKSA9PiAoW1xyXG4gICAgICAgICAgICAgICAgLi4uX2ludmFsaWRJbnB1dHMsXHJcbiAgICAgICAgICAgICAgICAuLi4kbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW2RheV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVttb250aF1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVt5ZWFyXVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihlbCA9PiAhZWwuY2hlY2tWYWxpZGl0eSgpKSxcclxuICAgICAgICAgICAgXSksIFtdKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnZhbGlkSW5wdXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnZhbGlkSW5wdXRzWzBdLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGF1dG8gc2VsZWN0IHRoZSAnbm9uZScgb3B0aW9uIGlmIG5vIHJhZGlvIG9wdGlvbiBvciBubyBwcm9kdWN0IHBpY2sgbGlzdCBvcHRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgc2hvd09wdGlvbklkcy5mb3JFYWNoKG9wdGlvbklkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVwiXWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRyYWRpb3MubGVuZ3RoID4gMCAmJiAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFmdGVyIGNsaWNraW5nIGNvbnRpbnVlIGJ1dHRvbiwgdXBkYXRlIHRoZSBtb2RpZmllcnMgdmlldyBhdXRvbWF0aWNhbGx5XHJcbiAgICAgICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGNob29zZU9wdGlvbnNCdG4ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVxdWlyZSBzZWxlY3RpbmcgdmFyaWFudCBvcHRpb25zIGJlZm9yZSBvcGVuaW5nIHRoZSBtb2RhbFxyXG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVZhcmlhbnRPcHRpb25zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsXScpLmFkZENsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgLmJlZm9yZSh0aGlzLm1vZGlmaWVyc01vZGFsT3ZlcmxheVRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGlmaWVyc01vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vdmVybGF5XScpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2RpZmllcnNWaWV3KCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxyXG4gICAgICAgICAgICAubm90KCdbdHlwZT1cImNoZWNrYm94XCJdLCBbdHlwZT1cInJhZGlvXCJdLCBbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS52YWwoJycpO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcclxuICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gZmxhZyBhbnkgaW5wdXQvc2VsZWN0IGlzIG5vdCBzaG93biB5ZXQgc28gdGhhdCB0aGUgY29udGludWUgYnV0dG9uIGlzIHNob3duXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5yZW1vdmVBdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IG1vZGFsIHRvIHVwZGF0ZSB0aGlzIHZpZXcgYXV0b21hdGljYWxseSB3aGVuIG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb250YWlucyBhbGwgb3B0aW9uIGlkcyB0aGF0IGFyZSBzaG93biBpbiBlYWNoIHN0ZXBcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW11bXX1cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyByZXNldCB0aGUgc2hvd24gb3B0aW9uIGlkcyBpbiBhbGwgc3RlcHNcclxuICAgICAgICB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE5vbi1zYWxlIHByaWNlcyBmb3Igb3B0aW9uIHZhbHVlcy5cclxuICAgICAgICAgKiBQdWxsaW5nIGZyb20gY3VzdG9tIGZpZWxkcyBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYC5cclxuICAgICAgICAgKiBQb3B1bGF0ZWQgaW4gYHVwZGF0ZU1vZGlmaWVyc1ZpZXcoKWAuXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfSB9fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIG1vZGlmaWVycyBtb2RhbCBhc2FwIHNvIHRoYXQgbm90IGFsbCBvcHRpb25zIGFyZSBkaXNwbGF5ZWRcclxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVNb2RpZmllcnNWaWV3KHsgaWdub3JlQVBJQ2FsbCA9IGZhbHNlIH0gPSB7fSkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxCYWNrID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2tdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1bW1hcnkgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtc3VtbWFyeV0nKS5lbXB0eSgpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFRpdGxlID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXRpdGxlXScpLmVtcHR5KCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsRm9vdGVyID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlcl0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250aW51ZV0nKS5oaWRlKCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VidG90YWwgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsXScpO1xyXG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRXcmFwcGVyID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtYWRkLXRvLWNhcnQtd3JhcHBlcl0nKS5oaWRlKCk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZvcm1EYXRhOiAnLCBBcnJheS5mcm9tKGZvcm1EYXRhLmVudHJpZXMoKSkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdXJyZW50IG9wdGlvbiBpZCB0aGF0IGFwcGVhcnMgYWxvbmUgd2l0aG91dCBhbnkgZ3JvdXAuXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRPcHRpb25JZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3VycmVudCBncm91cCBuYW1lIHRoYXQgdGhlIG9wdGlvbiBiZWxvbmdzIHRvLlxyXG4gICAgICAgICAqIEdyb3VwIG5hbWUgdGhhdCBhcHBlYXJzIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYFxyXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBjdXJyZW50R3JvdXBOYW1lO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcHRpb24gaWRzIG9mIG9wdGlvbiBuYW1lcyBhcHBlYXIgaW4gdGhlIHZhbHVlIG9mIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgLlxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogICBDdXN0b20gZmllbGQ6IGBfX0Bncm91cCBTZWxlY3QgYSBwcmVzY3JpcHRpb24gdHlwZWAgPSBgcHJlc2NyaXB0aW9uIHR5cGVgXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRHcm91cE9wdGlvbklkcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBvcHRpb24gaWRzIHNob3VsZCBiZSBoaWRkZW5cclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgaGlkZU9wdGlvbklkcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e29wdGlvbklkOiBudW1iZXIsIHZhbHVlSWQ6IG51bWJlcn0+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGhpZGVPcHRpb25WYWx1ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVG9vbHRpcHMgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwYFxyXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3Q8bnVtYmVyLCB7IHRvb2x0aXA6IHN0cmluZywgdmFsdWVUb29sdGlwczogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfT5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB0b29sdGlwcyA9IHt9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUb29sdGlwIGhlYWRpbmdzIGZvciBvcHRpb24gdmFsdWVzIGV4dHJhY3RlZCBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfX1cclxuICAgICAgICAgKiBAZXhhbXBsZSB7IDI6IHsgMTIzOiAnVG9vbHRpcCBIZWFkaW5nJyB9IH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB0b29sdGlwSGVhZGluZ3MgPSB7fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTm9uLXNhbGUgcHJpY2VzIGZvciBvcHRpb24gdmFsdWVzLlxyXG4gICAgICAgICAqIENhbiBiZSBvdmVycmlkZGVuIGJ5IGN1c3RvbSBmaWVsZHMgYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWBcclxuICAgICAgICAgKiBAdHlwZSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9IH19XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgbm9uZVNhbGVzID0ge307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9wdGlvbiByZW5hbWVzIGV4dHJhY3RlZCBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogc3RyaW5nIH19XHJcbiAgICAgICAgICogQGV4YW1wbGUgeyAxMjM6ICdOZXcgTmFtZScsIDQ1NjogJ0Fub3RoZXIgTmFtZScgfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IG9wdGlvblJlbmFtZXMgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgc3RhdGUgfSkgPT4gc3RhdGUgPT09ICdtb2RpZmllcicpLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnJWNQcm9kdWN0RGV0YWlscyAtIG9wdGlvbjogJywgJ2NvbG9yOiBjeWFuJywgb3B0aW9uLmRpc3BsYXlfbmFtZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGlkZU9wdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEZpcnN0IGdyb3VwIG5hbWUgdGhhdCB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8uXHJcbiAgICAgICAgICAgICAqIEdyb3VwIG5hbWUgdGhhdCBhcHBlYXJzIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxldCBncm91cE5hbWU7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT3B0aW9uIGlkcyBvZiBvcHRpb24gbmFtZXMgYXBwZWFyIGluIHRoZSB2YWx1ZSBvZiBjdXN0b20gZmllbGQgYF9fQGdyb3VwYC5cclxuICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICogICBDdXN0b20gZmllbGQ6IGBfX0Bncm91cCBTZWxlY3QgYSBwcmVzY3JpcHRpb24gdHlwZWAgPSBgcHJlc2NyaXB0aW9uIHR5cGVgXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxldCBncm91cE9wdGlvbklkcztcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIHJhZGlvIHR5cGUgYW5kIGhhcyAnbm9uZScgdmFsdWUgY2hlY2tlZFxyXG4gICAgICAgICAgICBjb25zdCBpc05vbmVSYWRpb0NoZWNrZWQgPSAkZm9ybS5maW5kKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdW3ZhbHVlPVwiXCJdYCkucHJvcCgnY2hlY2tlZCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgZmlsZSB0eXBlIGFuZCBhbHJlYWR5IHNob3duIGFmdGVyIG1vZGFsIHNob3duXHJcbiAgICAgICAgICAgIGNvbnN0ICRmaWxlID0gJGZvcm0uZmluZChgaW5wdXRbdHlwZT1cImZpbGVcIl1bbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRmlsZVNob3duID0gJGZpbGUubGVuZ3RoID4gMCAmJiAkZmlsZS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCBkYXRlIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJGRhdGUgPSAkZm9ybS5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dW2RheV1cIl0sIHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bbW9udGhdXCJdLCBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdXCJdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT3B0aW9uYWxEYXRlU2hvd24gPSAkZGF0ZS5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJGRhdGUuYXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgb3B0aW9uYWwgc2VsZWN0IHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRmb3JtLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbFNlbGVjdFNob3duID0gJHNlbGVjdC5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJHNlbGVjdC5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCB0ZXh0IC8gbXVsdGlsaW5lIC8gbnVtYmVyIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJHRleHQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgdGV4dGFyZWEnKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbFRleHRTaG93biA9ICR0ZXh0Lmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkdGV4dC5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybVZhbHVlICYmICEoZm9ybVZhbHVlIGluc3RhbmNlb2YgRmlsZSlcclxuICAgICAgICAgICAgICAgIHx8IGlzTm9uZVJhZGlvQ2hlY2tlZCB8fCBpc0ZpbGVTaG93biB8fCBpc09wdGlvbmFsRGF0ZVNob3duIHx8IGlzT3B0aW9uYWxTZWxlY3RTaG93biB8fCBpc09wdGlvbmFsVGV4dFNob3duXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW2RheV1gKVxyXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1gKVxyXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVt5ZWFyXWApKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWRlIG9wdGlvbiBpZiB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvbjogJywgaGlkZU9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AaGlkZV9pZiAoLiopXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlkZUlmTWF0Y2ggPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYoeyBjdXN0b21GaWVsZCwgZm9ybURhdGEsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGlkZUlmTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvbiA9IGhpZGVJZk1hdGNoLmhpZGVPcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb25WYWx1ZXMucHVzaCguLi5oaWRlSWZNYXRjaC5oaWRlT3B0aW9uVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JvdXBOYW1lICYmICFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQGdyb3VwICguKilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaEdyb3VwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZSA9IGdyb3VwTWF0Y2guZ3JvdXBOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBPcHRpb25JZHMgPSBncm91cE1hdGNoLmdyb3VwT3B0aW9uSWRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXBNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHRvb2x0aXBNYXRjaC50b29sdGlwIHx8IHRvb2x0aXBzW29wdGlvbi5pZF0/LnRvb2x0aXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwczogT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udmFsdWVUb29sdGlwcywgdG9vbHRpcE1hdGNoLnZhbHVlVG9vbHRpcHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcEhlYWRpbmdzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcEhlYWRpbmcoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcEhlYWRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdLCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoUmVuYW1lKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblJlbmFtZXNbb3B0aW9uLmlkXSA9IG5ld05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZU5vblNhbGVzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoTm9uU2FsZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obm9uZVNhbGVzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uLmlkXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5vbmVTYWxlc1tvcHRpb24uaWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlTm9uU2FsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA9PT0gMCAmJiAhY3VycmVudE9wdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gdmlzaWJsZSBvcHRpb24gYmVmb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb24gZ3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwTmFtZSA9IGdyb3VwTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gZ3JvdXBPcHRpb25JZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwTmFtZTogJHtjdXJyZW50R3JvdXBOYW1lfSwgY3VycmVudEdyb3VwT3B0aW9uSWRzOiAke2N1cnJlbnRHcm91cE9wdGlvbklkc31gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFuZC1hbG9uZSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRPcHRpb25JZDogJHtjdXJyZW50T3B0aW9uSWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaGlkZU9wdGlvbklkcy5wdXNoKG9wdGlvbi5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPiAwICYmIGhpZGVPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgaGlkZGVuIG9wdGlvbnMgZnJvbSB0aGUgY3VycmVudCBncm91cFxyXG4gICAgICAgICAgICBjdXJyZW50R3JvdXBPcHRpb25JZHMgPSBjdXJyZW50R3JvdXBPcHRpb25JZHMuZmlsdGVyKGlkID0+ICFoaWRlT3B0aW9uSWRzLmluY2x1ZGVzKGlkKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwT3B0aW9uSWRzOiAke2N1cnJlbnRHcm91cE9wdGlvbklkc31gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudE9wdGlvbklkOiAnLCBjdXJyZW50T3B0aW9uSWQpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwTmFtZTogJywgY3VycmVudEdyb3VwTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICcsIGN1cnJlbnRHcm91cE9wdGlvbklkcyk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uVmFsdWVzOiAnLCBoaWRlT3B0aW9uVmFsdWVzKTtcclxuXHJcbiAgICAgICAgLy8gU3RvcmUgbm9uLXNhbGUgcHJpY2VzIG9mIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICAvLyB0byB1c2Ugd2hlbiB1cGRhdGluZyBvcHRpb24gcHJpY2VzIG9ubHkgd2l0aG91dCB1cGRhdGUgdGhlIHdob2xlIG1vZGlmaWVycyB2aWV3XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmN1c3RvbUZpZWxkTm9uZVNhbGVzLCBub25lU2FsZXMpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJRHMgb2Ygb3B0aW9ucyB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgYXQgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxyXG4gICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSBjdXJyZW50R3JvdXBPcHRpb25JZHMubGVuZ3RoID4gMCA/IGN1cnJlbnRHcm91cE9wdGlvbklkc1xyXG4gICAgICAgICAgICA6IChjdXJyZW50T3B0aW9uSWQgPyBbY3VycmVudE9wdGlvbklkXSA6IFtdKTtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHNob3duIG9wdGlvbiBpZHMgb2YgdGhlIGN1cnJlbnQgc3RlcCB0byB0aGUgc3RhY2tcclxuICAgICAgICAvLyBpZiBub3QgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzIHN0ZXAuXHJcbiAgICAgICAgLy8gdGhpcyBpcyB1c2VkIHRvIG5hdmlnYXRlIGJhY2sgdG8gdGhlIHByZXZpb3VzIHN0ZXAuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgIHx8ICFhcmVBcnJheXNFcXVhbFVub3JkZXJlZCh0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXSwgc2hvd09wdGlvbklkcykpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5wdXNoKHNob3dPcHRpb25JZHMpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIHN0YWNrZWRTaG93T3B0aW9uSWRzOiAnLCB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgLyBoaWRlIGJhY2sgYnV0dG9uXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxCYWNrLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxCYWNrLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgZm9vdGVyLCBhbmQgaGlkZSBpdCBpZiBubyBtb3JlIG9wdGlvbiBzaG93blxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsRm9vdGVyLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxGb290ZXIuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBtb2RhbCB0aXRsZSBmcm9tIHRoZSBjdXN0b20gZmllbGQgYF9fQGdyb3VwIChncm91cCBuYW1lKWAgb3Igb3B0aW9uIGRpc3BsYXkgbmFtZVxyXG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmh0bWwoY3VycmVudEdyb3VwTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IG9wdGlvblJlbmFtZXNbc2hvd09wdGlvbklkc1swXV0gfHwgdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBzaG93T3B0aW9uSWRzWzBdKT8uZGlzcGxheV9uYW1lO1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS50ZXh0KHRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhpZGUgdGhlIG9wdGlvbiBuYW1lIHdoZW4gaGVyZSBpcyBvbmx5IDEgb3B0aW9uIHNob3duIGluIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7c2hvd09wdGlvbklkc1swXX1cIl0gLmZvcm0tbGFiZWxgKS5maXJzdCgpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkXSAuZm9ybS1sYWJlbCcpLmZpcnN0KCkuc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBjdXJyZW50IHByb2R1Y3Qgb3B0aW9uc1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdfc2hvdycpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKF8sIGVsKSA9PiAhc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIoJChlbCkuZGF0YSgncHJvZHVjdC1hdHRyaWJ1dGUtaWQnKSkpKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ19zaG93Jyk7XHJcblxyXG4gICAgICAgIC8vIFJlbmFtZSB0aGUgc2hvd24gb3B0aW9ucyBpZiBuZWVkZWRcclxuICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gb3B0aW9uUmVuYW1lc1tvcHRpb25JZF07XHJcbiAgICAgICAgICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl0gLmZvcm0tbGFiZWxgKS5maXJzdCgpLmh0bWwobmV3TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0b29sdGlwIGZvciBncm91cFxyXG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBncm91cFRvb2x0aXAgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tRmllbGRzLmZvckVhY2goY3VzdG9tRmllbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncm91cFRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cFRvb2x0aXAgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAoeyBjdXN0b21GaWVsZCwgZ3JvdXBOYW1lOiBjdXJyZW50R3JvdXBOYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncm91cFRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIGdyb3VwVG9vbHRpcCkpO1xyXG4gICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2hvdyB0b29sdGlwIGZvciBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25Ub29sdGlwcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncywgc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyBmb3Igc2hvd24gb3B0aW9ucyBhbmQgZGlzcGxheSBDb250aW51ZSBidXR0b24gaWYgbmVlZGVkLlxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMoc2hvd09wdGlvbklkcywgJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsQ29udGludWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBwcmljZXMgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICBpZiAoIWlnbm9yZUFQSUNhbGwpIHtcclxuICAgICAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlcigkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93IHN1bW1hcnkgYnV0IHByZWxvYWRlciBmb3IgcHJpY2VzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zaG93T3B0aW9uUHJpY2VzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzLCBmb3JtRGF0YSwgbm9uZVNhbGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNob3cgc3VtbWFyeSBjb250ZW50IGlmIG5vIG9wdGlvbiB2aXNpYmxlIG9uIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93U3VtbWFyeSgkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5LCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgJG1vZGlmaWVyc01vZGFsVGl0bGUsICRhZGRUb0NhcnRXcmFwcGVyLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgcmVxdWlyZWQgdmFyaWFudCBvcHRpb25zIGFuZCByZXBvcnQgZXJyb3IgZm9yIHRoZSBmaXJzdCBpbnZhbGlkIG9wdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGVWYXJpYW50T3B0aW9ucygpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnZhbGlkID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgc3RhdGUgfSkgPT4gc3RhdGUgPT09ICd2YXJpYW50X29wdGlvbicpLmZpbmQob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBSZXF1aXJlZCBvcHRpb24gXCIke29wdGlvbi5kaXNwbGF5X25hbWV9XCIgaXMgbm90IHNlbGVjdGVkYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaW52YWxpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9ICRmb3JtLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7aW52YWxpZC5pZH1dXCJdYClbMF07XHJcbiAgICAgICAgICAgIGVsLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFja1N0ZXAoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IFtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5wb3AoKSwgLy8gY3VycmVudCBzdGVwJ3Mgc2hvd24gb3B0aW9uIGlkc1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnBvcCgpLCAvLyBwcmV2aW91cyBzdGVwJ3Mgc2hvd24gb3B0aW9uIGlkc1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IHZhbHVlcyBvZiBzaG93biBvcHRpb24gaWRzIGluIGN1cnJlbnQgc3RlcCAmIHByZXZpb3VzIHN0ZXBcclxuICAgICAgICAvLyB0byBkaXNwbGF5IHByZXZpb3VzIHN0ZXAgYWdhaW4uXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBlbCkgPT4gc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIoJChlbCkuYXR0cignZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSkpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXHJcbiAgICAgICAgICAgICAgICAubm90KCdbdHlwZT1cImNoZWNrYm94XCJdLCBbdHlwZT1cInJhZGlvXCJdLCBbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykudmFsKCcnKTtcclxuXHJcbiAgICAgICAgICAgICRvcHRpb24uZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICRvcHRpb24uZmluZCgnW25hbWVePVwiYXR0cmlidXRlXCJdJykucmVtb3ZlQXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBpbW1lZGlhdGVseSB1cGRhdGUgZGlzcGxheSBwcmV2aW91cyBvcHRpb25zIG9uIG1vZGlmaWVycyBtb2RhbFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBjaGFuZ2UgZXZlbnQgdG8gdXBkYXRlIHByaWNlcyAmIGRhdGEgYmVsb25ncyB0byBCQ1xyXG4gICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHNob3VsZCBiZSBoaWRkZW4gYmFzZWQgb24gdGhlIGN1c3RvbSBmaWVsZCBgX19AaGlkZV9pZmBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZm9ybURhdGE6IEZvcm1EYXRhLFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBpZDogTnVtYmVyLFxyXG4gICAgICogICAgIGRpc3BsYXlfbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlczogW3tcclxuICAgICAqICAgICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICogICAgIH1dXHJcbiAgICAgKiAgIH1cclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgaGlkZU9wdGlvbjogYm9vbGVhbiwgaGlkZU9wdGlvblZhbHVlczogQXJyYXk8e29wdGlvbklkOiBudW1iZXIsIHZhbHVlSWQ6IG51bWJlcn0+IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYoeyBjdXN0b21GaWVsZCwgZm9ybURhdGEsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXN0b21GaWVsZE1hdGNoSGlkZUlmOiBjZl9uYW1lID0gJHtjdXN0b21GaWVsZC5uYW1lfSA7IG9wX25hbWUgPSAke29wdGlvbi5kaXNwbGF5X25hbWV9YCk7XHJcbiAgICAgICAgbGV0IGhpZGVPcHRpb24gPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBoaWRlT3B0aW9uVmFsdWVzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AaGlkZV9pZlxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAoIW0pIHJldHVybjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBoaWRlSWZPcHRpb25zID0gbVsxXS5zcGxpdCgnOycpLm1hcChrdiA9PiBrdi5zcGxpdCgnOicsIDIpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcclxuICAgICAgICAgICAgbmFtZToga2V5LnRyaW0oKSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUudHJpbSgpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGhpZGVJZk9wdGlvbnM6ICR7aGlkZUlmT3B0aW9ucy5tYXAoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKHZhbHVlID8gYCR7bmFtZX06ICR7dmFsdWV9YCA6IG5hbWUpKS5qb2luKCc7ICcpfWApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRoZW5PcHRpb25zID0gY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5tYXAoa3YgPT4ga3Yuc3BsaXQoJzonLCAyKSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XHJcbiAgICAgICAgICAgIG5hbWU6IGtleS50cmltKCksXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSA/IHZhbHVlLnRyaW0oKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0aGVuT3B0aW9uczogJHt0aGVuT3B0aW9ucy5tYXAoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKHZhbHVlID8gYCR7bmFtZX06ICR7dmFsdWV9YCA6IG5hbWUpKS5qb2luKCc7ICcpfWApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGbGFnIHRvIGNoZWNrIGlmIG9wdGlvbjp2YWx1ZSBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYCBtYXRjaGVzIHdpdGggY3VycmVudCBmb3JtIGRhdGFcclxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgaGlkZUlmTWF0Y2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBvcHRpb246dmFsdWUgaW4gY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYCBtYXRjaGVzIHdpdGggY3VycmVudCBmb3JtIGRhdGFcclxuICAgICAgICBoaWRlSWZPcHRpb25zLmZvckVhY2goKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBbb3B0aW9uSWQsIHZhbHVlSWRdID0gdGhpcy5maW5kT3B0aW9uVmFsdWUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSBOdW1iZXIoZm9ybURhdGEuZ2V0QWxsKGBhdHRyaWJ1dGVbJHtvcHRpb25JZH1dYCkuc2xpY2UoLTEpWzBdKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtVmFsdWUgPT09IHZhbHVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGhpZGVJZk1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZUlmTWF0Y2g6ICcsIGhpZGVJZk1hdGNoKTtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVJZk1hdGNoKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IG9wdGlvbiBzaG91bGQgYmUgaGlkZGVuIHdoZW4gbWF0Y2hpbmcgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGN1c3RvbSBmaWVsZCBgX19AaGlkZV9pZmBcclxuICAgICAgICAgICAgdGhlbk9wdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGN1c3RvbSBmaWVsZCB2YWx1ZSBjb250YWluIG9wdGlvbiBuYW1lIHdpdGhvdXQgdmFsdWUsIHRoZW4gaGlkZSB0aGUgd2hvbGUgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb246ICcsIGhpZGVPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uLnZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIGhpZGUgdGhlIHNwZWNpZmljIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgbGFiZWwsIGlkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hpZGVPcHRpb25WYWx1ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVJZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uVmFsdWVzLnB1c2goX2hpZGVPcHRpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uVmFsdWU6ICcsIF9oaWRlT3B0aW9uVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpZGVPcHRpb24gfHwgaGlkZU9wdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGhpZGVPcHRpb24sIGhpZGVPcHRpb25WYWx1ZXMgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8gdGhlIGdyb3VwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQGdyb3VwYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBpZDogTnVtYmVyLFxyXG4gICAgICogICB9LFxyXG4gICAgICogQHJldHVybnMge3sgZ3JvdXBOYW1lOiBzdHJpbmcsIGdyb3VwT3B0aW9uSWRzOiBBcnJheTxudW1iZXI+IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hHcm91cCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AZ3JvdXBcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gbVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwT3B0aW9uSWRzID0gY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5tYXAocyA9PiBzLnRyaW0oKSkgLy8gb3B0aW9uIG5hbWVzXHJcbiAgICAgICAgICAgICAgICAubWFwKG9wdGlvbk5hbWUgPT4gdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGRpc3BsYXlfbmFtZSB9KSA9PiBlcXVhbE9wdGlvblN0cmluZyhkaXNwbGF5X25hbWUsIG9wdGlvbk5hbWUpKT8uaWQpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGlkID0+IGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncm91cE9wdGlvbklkcy5pbmNsdWRlcyhvcHRpb24uaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvcHRpb24gYmVsb25ncyB0byB0aGUgZ3JvdXAgaW4gdGhpcyBjdXN0b20gZmllbGRcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gZ3JvdXBOYW1lOiAke2dyb3VwTmFtZX0sIGdyb3VwT3B0aW9uSWRzOiAke2dyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZ3JvdXBOYW1lLCBncm91cE9wdGlvbklkcyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiB2YWx1ZSBoYXMgYSB0b29sdGlwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXAgbmFtZVs6dmFsdWVdID0gdG9vbHRpcGBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfVxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWUsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgbGFiZWxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9XHJcbiAgICAgKiB9fSBwYXJhbTBcclxuICAgICAqIEByZXR1cm5zIHt7IHRvb2x0aXA6IHN0cmluZyB9IHwgeyB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9IHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gbVsxXS5zcGxpdCgnOicsIDIpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IGN1c3RvbUZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdG9vbHRpcCBmb3Igb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3Igb3B0aW9uIFwiJHtuYW1lfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdG9vbHRpcCB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBzID0ge307XHJcblxyXG4gICAgICAgICAgICAvLyB0b29sdGlwIGZvciBvcHRpb24gdmFsdWVcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlcy5mb3JFYWNoKCh7IGlkLCBsYWJlbCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcobGFiZWwsIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3Igb3B0aW9uIFwiJHtuYW1lfSA6ICR7dmFsdWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwc1tpZF0gPSB0b29sdGlwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlVG9vbHRpcHMgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZ3JvdXAgaGFzIGEgdG9vbHRpcCBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0B0b29sdGlwIChncm91cCBuYW1lKSA9IHRvb2x0aXBgXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZ3JvdXBOYW1lOiBzdHJpbmdcclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3N0cmluZyB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCh7IGN1c3RvbUZpZWxkLCBncm91cE5hbWUgfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSBjdXN0b21GaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIGdyb3VwIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhncm91cE5hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgZm9yIGdyb3VwIFwiJHtuYW1lfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHZhbHVlIGhhcyBhIHRvb2x0aXAgaGVhZGluZyBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0B0b29sdGlwX2hlYWRpbmcgbmFtZTp2YWx1ZSA9IHRvb2x0aXAgaGVhZGluZ2BcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgb3B0aW9uOiB7XHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IG51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfVxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcF9oZWFkaW5nXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBtWzFdLnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gY3VzdG9tRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZSBvciBub3QgdmFsdWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICF2YWx1ZSB8fCAhZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcEhlYWRpbmdzID0ge307XHJcblxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgaWQsIGxhYmVsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGhlYWRpbmcgZm9yIG9wdGlvbiBcIiR7bmFtZX0gOiAke3ZhbHVlfVwiID0gXCJcIlwiJHtoZWFkaW5nfVwiXCJcImApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcEhlYWRpbmdzW2lkXSA9IGhlYWRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9vbHRpcEhlYWRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gbmFtZSBjb250YWlucyBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZWBcclxuICAgICAqIGFuZCByZXR1cm4gdGhlIG5ldyBuYW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMC5jdXN0b21GaWVsZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5jdXN0b21GaWVsZC5uYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLmN1c3RvbUZpZWxkLnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wLm9wdGlvblxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5vcHRpb24uZGlzcGxheV9uYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfSBuZXcgb3B0aW9uIG5hbWVcclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFJlbmFtZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AcmVuYW1lXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IFN0cmluZyhjdXN0b21GaWVsZC52YWx1ZSkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSByZW5hbWUgb3B0aW9uIFwiJHtuYW1lfVwiIHRvIFwiJHtuZXdOYW1lfVwiYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgbm9uLXNhbGUgcHJpY2UgaW4gdGhlIGN1c3RvbSBmaWVsZFxyXG4gICAgICogYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgb3B0aW9uOiB7XHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IG51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfSxcclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9fVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoTm9uU2FsZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlTm9uU2FsZXMgPSB7fTtcclxuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQG5vbnNhbGVcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBOdW1iZXIobVsxXS50cmltKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3BsaXQgZWFjaCAob3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZSkgcGFpciBzZXBhcmF0ZWQgYnkgXCI7XCJcclxuICAgICAgICAgICAgY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5mb3JFYWNoKGt2ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHNwbGl0IG9wdGlvbiBuYW1lIDogb3B0aW9uIHZhbHVlIGluIGN1c3RvbSBmaWVsZCB2YWx1ZSBzZXBhcmF0ZWQgYnkgXCI6XCJcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtvcHRpb25OYW1lLCB2YWx1ZUxhYmVsXSA9IGt2LnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBvcHRpb25OYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBuYW1lIGluIGN1c3RvbSBmaWVsZCBtYXRjaCB3aXRoIGN1cnJlbnQgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIG9wdGlvbiB2YWx1ZSBJRCB0aGF0IG1hdGNoZXMgd2l0aCB0aGUgdmFsdWUgbGFiZWwgaW4gY3VzdG9tIGZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IG9wdGlvbi52YWx1ZXMuZmluZCgoeyBsYWJlbCB9KSA9PiBlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWVMYWJlbCkpPy5pZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gbm9uLXNhbGUgcHJpY2UgY29ycmVzcG9uZGluZyB0byB0aGUgb3B0aW9uIHZhbHVlIElEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTm9uU2FsZXNbdmFsdWVJZF0gPSBwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWVOb25TYWxlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHN0b3JlIHNldHRpbmdzIGluY2x1ZGluZyB0YXggYW5kIGFjdGl2ZSBjdXJyZW5jeVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHtcclxuICAgICAqICAgdGF4OiB7IHBkcDogbnVtYmVyIH0sXHJcbiAgICAgKiAgIGN1cnJlbmN5OiB7XHJcbiAgICAgKiAgICAgY29kZTogc3RyaW5nLFxyXG4gICAgICogICAgIGRpc3BsYXk6IHsgZGVjaW1hbFBsYWNlczogbnVtYmVyLCBkZWNpbWFsVG9rZW46IHN0cmluZywgc3ltYm9sOiBzdHJpbmcsIHN5bWJvbFBsYWNlbWVudDogc3RyaW5nLCB0aG91c2FuZHNUb2tlbjogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgZXhjaGFuZ2VSYXRlOiBudW1iZXIsIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZGVmYXVsdEN1cnJlbmN5OiB7XHJcbiAgICAgKiAgICAgY29kZTogc3RyaW5nLFxyXG4gICAgICogICAgIGRpc3BsYXk6IHsgZGVjaW1hbFBsYWNlczogbnVtYmVyLCBkZWNpbWFsVG9rZW46IHN0cmluZywgc3ltYm9sOiBzdHJpbmcsIHN5bWJvbFBsYWNlbWVudDogc3RyaW5nLCB0aG91c2FuZHNUb2tlbjogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgZXhjaGFuZ2VSYXRlOiBudW1iZXIsIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqIH0+XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGZldGNoU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgaWYgKGNhY2hlZFNldHRpbmdzKSByZXR1cm4gY2FjaGVkU2V0dGluZ3M7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY29udGV4dC5ncmFwaFFMVG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWZhdWx0Q3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3koY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQ3VycmVuY3lGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeTogY3VycmVuY3koY3VycmVuY3lDb2RlOiAkZGVmYXVsdEN1cnJlbmN5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkN1cnJlbmN5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IEN1cnJlbmN5RmllbGRzIG9uIEN1cnJlbmN5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xQbGFjZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kc1Rva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2VSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuYWN0aXZlX2N1cnJlbmN5X2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5Q29kZTogdGhpcy5jb250ZXh0LmRlZmF1bHRfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYWNoZWRTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgLi4ucmVzcC5kYXRhLnNpdGUuc2V0dGluZ3MsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiByZXNwLmRhdGEuc2l0ZS5jdXJyZW5jeSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gY2FjaGVkU2V0dGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBvcHRpb24gcHJpY2VzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTx7IGlkOiBudW1iZXIsIHZhbHVlczogQXJyYXk8eyBpZDogbnVtYmVyIH0+IH0+fSBzaG93T3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PHtcclxuICAgICAqICAgb3B0aW9uSWQ6IG51bWJlcnxudWxsLFxyXG4gICAgICogICB2YWx1ZUlkOiBudW1iZXJ8bnVsbCxcclxuICAgICAqICAgcHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIHByaWNlc1dpdGhvdXRUYXg6IHtcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBhZGp1c3RlZFByaWNlc1dpdGhUYXg6IHtcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIG5vblNhbGVQcmljZVZhbHVlOiBudW1iZXIsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIGFkanVzdGVkUHJpY2VzV2l0aG91dFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG51bWJlcixcclxuICAgICAqICAgfSxcclxuICAgICAqIH0+Pn1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hPcHRpb25QcmljZXMoc2hvd09wdGlvbnMsIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5lbnRyaWVzKCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSBrZXkubWF0Y2goL15hdHRyaWJ1dGVcXFsoXFxkKylcXF0kLyk7XHJcbiAgICAgICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25FbnRpdHlJZCA9IE51bWJlcihtWzFdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlRW50aXR5SWQgPSBOdW1iZXIodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUVudGl0eUlkICYmICFzaG93T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBvcHRpb25FbnRpdHlJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlSWRzLnB1c2goeyBvcHRpb25FbnRpdHlJZCwgdmFsdWVFbnRpdHlJZCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcclxuICAgICAgICAgICAgLy8gZmV0Y2ggYWxyZWFkeSBzZWxlY3RlZCBvcHRpb25zJyBwcmljZXNcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5mZXRjaE9wdGlvblByaWNlKHNlbGVjdGVkT3B0aW9uVmFsdWVJZHMpLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHNob3dPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gb3B0aW9uLnZhbHVlcyB8fCAob3B0aW9uLnZhbHVlID8gW3sgaWQ6IG9wdGlvbi52YWx1ZSB9XSA6IFtdKTtcclxuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZmV0Y2ggY3VycmVudCBvcHRpb24gdmFsdWUncyBwcmljZXNcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2UoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZE9wdGlvblZhbHVlSWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbnRpdHlJZDogb3B0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVFbnRpdHlJZDogdmFsdWUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSkudGhlbihwcm9kdWN0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbklkOiBvcHRpb24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlSWQ6IHZhbHVlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBbcHJldiwgLi4uc2VsZWN0aW9uc10gPSBhd2FpdCBoYW5kbGVQcm9taXNlc1dpdGhMaW1pdChwcm9taXNlcyk7XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9uLXNhbGUgcHJpY2UgYmFzZWQgb24gdGhlIHByZXZpb3VzIHByaWNlIGFuZCB0aGUgY3VycmVudCBwcmljZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc2lkZXIgYWxsIG5vdyBwcmljZSBhbmQgcmVndWxhciBwcmljZVxyXG4gICAgICAgICAgICAgICAgbGV0IG5vblNhbGVQcmljZVdpdGhUYXggPSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXg/LnByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LnByaWNlLnZhbHVlIC0gc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG5vbi1zYWxlIHByaWNlIGlmIGl0J3MgbGVzcyB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBpZiAobm9uU2FsZVByaWNlV2l0aFRheCA8PSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFkanVzdGVkUHJpY2VzV2l0aFRheCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhUYXguYmFzZVByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VWYWx1ZTogbm9uU2FsZVByaWNlV2l0aFRheCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBub24tc2FsZSBwcmljZSBiYXNlZCBvbiB0aGUgcHJldmlvdXMgcHJpY2UgYW5kIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zaWRlciBhbGwgbm93IHByaWNlIGFuZCByZWd1bGFyIHByaWNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9uU2FsZVByaWNlV2l0aG91dFRheCA9IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheD8ucHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAvLyB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8ucHJpY2UudmFsdWUgLSBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbm9uLXNhbGUgcHJpY2UgaWYgaXQncyBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIGlmIChub25TYWxlUHJpY2VXaXRob3V0VGF4IDw9IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVZhbHVlOiBub25TYWxlUHJpY2VXaXRob3V0VGF4LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZldGNoT3B0aW9uUHJpY2VzIHJldHVybnM6ICcsIHNlbGVjdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBbcHJldiwgLi4uc2VsZWN0aW9uc107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBwcm9kdWN0IHByaWNlIGZyb20gc3BlY2lmaWMgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8eyBvcHRpb25FbnRpdHlJZDogbnVtYmVyLCB2YWx1ZUVudGl0eUlkOiBudW1iZXJ9Pn0gb3B0aW9uVmFsdWVJZHNcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcHJpY2VzV2l0aFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSwgcHJpY2VzV2l0aG91dFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSB9PlxyXG4gICAgICovXHJcbiAgICBhc3luYyBmZXRjaE9wdGlvblByaWNlKG9wdGlvblZhbHVlSWRzKSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25WYWx1ZUlkcyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVbY2FjaGVLZXldKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY29udGV4dC5ncmFwaFFMVG9rZW59YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICgkcHJvZHVjdElkOiBJbnQhLCAkb3B0aW9uVmFsdWVJZHM6IFtPcHRpb25WYWx1ZUlkIV0sICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QoZW50aXR5SWQ6ICRwcm9kdWN0SWQsIG9wdGlvblZhbHVlSWRzOiAkb3B0aW9uVmFsdWVJZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzV2l0aFRheDogcHJpY2VzKGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZSwgaW5jbHVkZVRheDogdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUHJpY2VGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRob3V0VGF4OiBwcmljZXMoY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlLCBpbmNsdWRlVGF4OiBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUHJpY2VGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgUHJpY2VGaWVsZHMgb24gUHJpY2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuYWN0aXZlX2N1cnJlbmN5X2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlSWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtjYWNoZUtleV0gPSByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hPcHRpb25QcmljZUNhY2hlW2NhY2hlS2V5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgdG9vbHRpcHMgdG8gdGhlIGNvcnJlc3BvbmRpbmcgc2hvd24gb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsVGl0bGVcclxuICAgICAqIEBwYXJhbSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgdG9vbHRpcDogc3RyaW5nLCB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9IH19IHRvb2x0aXBzXHJcbiAgICAgKiBAcGFyYW0ge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9fSB0b29sdGlwSGVhZGluZ3NcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2hvd09wdGlvbklkcyBvcHRpb24gaWRzIHRvIHNob3cgdG9vbHRpcHNcclxuICAgICAqL1xyXG4gICAgc2hvd09wdGlvblRvb2x0aXBzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFRpdGxlLCB0b29sdGlwcywgdG9vbHRpcEhlYWRpbmdzLCBzaG93T3B0aW9uSWRzKSB7XHJcbiAgICAgICAgLy8gRGlzcGxheSB0b29sdGlwXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9vbHRpcHMpLmZvckVhY2goKFtvcHRpb25JZCwgeyB0b29sdGlwLCB2YWx1ZVRvb2x0aXBzIH1dKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIob3B0aW9uSWQpKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBvcHRpb25JZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJG9wdGlvbi5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtvcHRpb25JZH1cIl1gKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbGFiZWwgPSAkb3B0aW9uLmZpbmQoJ2xhYmVsJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGxhYmVsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbGFiZWwuYWZ0ZXIoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLnByZXBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZVRvb2x0aXBzKS5mb3JFYWNoKChbdmFsdWVJZCwgdmFsdWVUb29sdGlwXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJG9wdGlvbi5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdmFsdWVUb29sdGlwKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkb3B0aW9uLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAkdmFsdWUuYWZ0ZXIoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gaWYgb25seSAxIG9wdGlvbiBzaG93biBhdCBjdXJyZW50IHN0ZXAsXHJcbiAgICAgICAgLy8gdGhlbiBtb3ZlIGl0cyB0b29sdGlwIHRvIHRoZSBtb2RhbCB0aXRsZVxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZD1cIiR7c2hvd09wdGlvbklkc1swXX1cIl1gKTtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpc3BsYXkgdG9vbHRpcCBoZWFkaW5nXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9vbHRpcEhlYWRpbmdzKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChbb3B0aW9uSWRdKSA9PiBzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcihvcHRpb25JZCkpKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoW29wdGlvbklkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nc10pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZVRvb2x0aXBIZWFkaW5ncykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmddKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJG9wdGlvbi5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcEhlYWRpbmcgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlLnJlcGxhY2UoJzwlaGVhZGluZyU+JywgdmFsdWVUb29sdGlwSGVhZGluZykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWhlYWRpbmctaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkdG9vbHRpcEhlYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcklubGluZU9wdGlvblRvb2x0aXBzKCkge1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgIGlmICghJHByb2R1Y3RPcHRpb25zRWwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWRdLCBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWhlYWRpbmctaWRdJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5wcm9kdWN0T3B0aW9ucy5sZW5ndGggfHwgIXRoaXMuY3VzdG9tRmllbGRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25JZHMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0nKVxyXG4gICAgICAgICAgICAubWFwKChfaW5kZXgsIGVsKSA9PiBOdW1iZXIoJChlbCkuZGF0YSgncHJvZHVjdC1hdHRyaWJ1dGUtaWQnKSkpXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICBjb25zdCB0b29sdGlwcyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBIZWFkaW5ncyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gb3B0aW9uSWRzLmluY2x1ZGVzKGlkKSlcclxuICAgICAgICAgICAgLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tRmllbGRzLmZvckVhY2goY3VzdG9tRmllbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXBNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcHNbb3B0aW9uLmlkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBzW29wdGlvbi5pZF0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHRvb2x0aXBNYXRjaC50b29sdGlwIHx8IHRvb2x0aXBzW29wdGlvbi5pZF0/LnRvb2x0aXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBzOiBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdPy52YWx1ZVRvb2x0aXBzLCB0b29sdGlwTWF0Y2gudmFsdWVUb29sdGlwcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwSGVhZGluZ3MgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVG9vbHRpcEhlYWRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0sIHZhbHVlVG9vbHRpcEhlYWRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0lubGluZU9wdGlvblRvb2x0aXBzKCRwcm9kdWN0T3B0aW9uc0VsLCB0b29sdGlwcywgdG9vbHRpcEhlYWRpbmdzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTcGVjVG9vbHRpcHMoKSB7XHJcbiAgICAgICAgY29uc3QgcHJlZml4ID0gJ19fQHNwZWNfdG9vbHRpcCAnO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBNQVNURVIgU1BFQyBUT09MVElQU1xyXG4gICAgICAgIC8vIEFkZCBlbnRyaWVzIGhlcmUgdG8gc2hvdyBhIHRvb2x0aXAgb24gZXZlcnkgcHJvZHVjdCBwYWdlIGZvclxyXG4gICAgICAgIC8vIHRoYXQgc3BlYyByb3cgYXV0b21hdGljYWxseS4gTm8gY3VzdG9tIGZpZWxkIG5lZWRlZCBwZXIgcHJvZHVjdC5cclxuICAgICAgICAvLyBQZXItcHJvZHVjdCBjdXN0b20gZmllbGRzIChlLmcuIF9fQHNwZWNfdG9vbHRpcCBNZW1vcnkpIHdpbGxcclxuICAgICAgICAvLyBvdmVycmlkZSB0aGVzZSB2YWx1ZXMgaWYgcHJlc2VudC5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBjb25zdCBtYXN0ZXJUb29sdGlwcyA9IHtcclxuICAgICAgICAgICAgJ01lbW9yeSc6ICdOb3Qgc3VyZSBpZiB0aGlzIGlzIHRoZSByaWdodCBhbW91bnQgb2YgbWVtb3J5IGZvciB5b3VyIG5lZWRzPyBSZWZlciB0byBvdXIgYmxvZyBvbiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYm9iam9obnNvbi5jb20vYmxvZy9ob3ctbXVjaC1yYW0tZG8teW91LWFjdHVhbGx5LW5lZWQtaW4tYS1ydWdnZWQtbGFwdG9wL1wiIHRhcmdldD1cIl9ibGFua1wiPlJBTSBOZWVkcyBpbiBhIHJ1Z2dlZCBsYXB0b3A8L2E+LicsXHJcbiAgICAgICAgICAgIC8vICdTdG9yYWdlJzogJ1RoZSBkcml2ZSB3aGVyZSB5b3VyIGZpbGVzIGFuZCBPUyBhcmUgc3RvcmVkLicsXHJcbiAgICAgICAgICAgIC8vICdQcm9jZXNzb3InOiAnVGhlIENQVSBpcyB0aGUgYnJhaW4gb2YgdGhlIGNvbXB1dGVyLicsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGFueSBwcmV2aW91c2x5IGluamVjdGVkIHNwZWMgdG9vbHRpcHNcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1zcGVjLXRvb2x0aXBdJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIC8vIEJ1aWxkIGZpbmFsIG1hcDogc3RhcnQgd2l0aCBtYXN0ZXIgZGVmYXVsdHMsIG92ZXJyaWRlIHdpdGggcGVyLXByb2R1Y3QgY3VzdG9tIGZpZWxkc1xyXG4gICAgICAgIGNvbnN0IHJlc29sdmVkVG9vbHRpcHMgPSB7IC4uLm1hc3RlclRvb2x0aXBzIH07XHJcblxyXG4gICAgICAgIHRoaXMuY3VzdG9tRmllbGRzLmZvckVhY2goKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW5hbWUuc3RhcnRzV2l0aChwcmVmaXgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWNOYW1lID0gbmFtZS5zbGljZShwcmVmaXgubGVuZ3RoKS50cmltKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3BlY05hbWUgJiYgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmVkVG9vbHRpcHNbc3BlY05hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocmVzb2x2ZWRUb29sdGlwcykuZm9yRWFjaCgoW3NwZWNOYW1lLCB0b29sdGlwVGV4dF0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGRkID0gdGhpcy4kc2NvcGUuZmluZChgW2RhdGEtc3BlYy1uYW1lPVwiJHtzcGVjTmFtZX1cIl1gKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkZGQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHRvb2x0aXBUZXh0KSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXNwZWMtdG9vbHRpcCcsIHNwZWNOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICRkZC5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJbmxpbmVPcHRpb25Ub29sdGlwcygkcHJvZHVjdE9wdGlvbnNFbCwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncykge1xyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvb2x0aXBzKS5mb3JFYWNoKChbb3B0aW9uSWQsIHsgdG9vbHRpcCwgdmFsdWVUb29sdGlwcyA9IHt9IH1dKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRvcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICQodGhpcy5vcHRpb25Ub29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB0b29sdGlwKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkJywgb3B0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGxhYmVsID0gJG9wdGlvbi5maW5kKCdsYWJlbCcpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRsYWJlbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxhYmVsLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb24ucHJlcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcHMpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEkdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdmFsdWVUb29sdGlwKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJzpzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkb3B0aW9uLmZpbmQoJ3NlbGVjdCcpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNlbGVjdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2VsZWN0LmFmdGVyKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb24uYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFmdGVyKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvb2x0aXBIZWFkaW5ncykuZm9yRWFjaCgoW29wdGlvbklkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nc10pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJG9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwSGVhZGluZ3MpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJG9wdGlvbi5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcEhlYWRpbmcgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlLnJlcGxhY2UoJzwlaGVhZGluZyU+JywgdmFsdWVUb29sdGlwSGVhZGluZykpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJzpzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkb3B0aW9uLmZpbmQoJ3NlbGVjdCcpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHNlbGVjdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2VsZWN0LmFmdGVyKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLmFwcGVuZCgkdG9vbHRpcEhlYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIG9wdGlvbnMgYW5kIGRpc3BsYXkgY29udGludWUgYnV0dG9uIGlmIG5lY2Vzc2FyeS5cclxuICAgICAqIFN0b3AgYXV0byB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IHVudGlsIHRoZSBjb250aW51ZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAqXHJcbiAgICAgKiBDb250aW51ZSBidXR0b24gaXMgc2hvd24gaWYgYW55IG9mIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gICAgICogLSBvcHRpb25zIHRoYXQgaGFzIGRlZmF1bHQgdmFsdWVcclxuICAgICAqIC0gY2hlY2tib3ggb3B0aW9uc1xyXG4gICAgICogLSBvcHRpb25hbCBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgICogLSBvcHRpb25hbCBkYXRlIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgKiAtIGZpbGUgaW5wdXRcclxuICAgICAqIC0gbW9yZSB0aGFuIDEgb3B0aW9uIGFyZSBzaG93biBhdCB0aGUgc2FtZSB0aW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBzaG93T3B0aW9uSWRzIHNob3cgb3B0aW9uIGlkc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxDb250aW51ZVxyXG4gICAgICovXHJcbiAgICBwb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMoc2hvd09wdGlvbklkcywgJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsQ29udGludWUpIHtcclxuICAgICAgICBjb25zdCBzaG93bk9wdGlvbnMgPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBpZCB9KSA9PiBzaG93T3B0aW9uSWRzLmluY2x1ZGVzKGlkKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIG9wdGlvbnMgdGhhdCBoYXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcHJlZmlsbCwgc2VsZWN0ZWRfZGF0ZSwgdmFsdWVzIH0pID0+XHJcbiAgICAgICAgICAgICAgICBwcmVmaWxsIHx8XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZF9kYXRlICYmIChzZWxlY3RlZF9kYXRlLmRheSB8fCBzZWxlY3RlZF9kYXRlLm1vbnRoIHx8IHNlbGVjdGVkX2RhdGUueWVhcikgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlcz8uZmluZCgoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjaGVja2JveCB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBjaGVja2JveE9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBub1ZhbHVlLCB2YWx1ZSB9KSA9PiBub1ZhbHVlIHx8IHZhbHVlKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZmlsZSB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBmaWxlT3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHBhcnRpYWwgfSkgPT4gcGFydGlhbCA9PT0gJ2lucHV0LWZpbGUnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZGF0ZSB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkYXRlT3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHBhcnRpYWwgfSkgPT4gcGFydGlhbCA9PT0gJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZHJvcGRvd24gdHlwZSBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcmVxdWlyZWQsIHBhcnRpYWwgfSkgPT4gIXJlcXVpcmVkICYmIHBhcnRpYWwgPT09ICdzZXQtc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRleHQgLyBtdWx0aWxpbmUgLyBudW1iZXIgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRleHRPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnaW5wdXQtdGV4dCcgfHwgcGFydGlhbCA9PT0gJ3RleHRhcmVhJyB8fCBwYXJ0aWFsID09PSAnaW5wdXQtbnVtYmVycycpO1xyXG5cclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgIHx8IGRlZmF1bHRPcHRpb25zLmxlbmd0aCA+IDAgfHwgY2hlY2tib3hPcHRpb25zLmxlbmd0aCA+IDAgfHwgZmlsZU9wdGlvbnMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICB8fCBkYXRlT3B0aW9ucy5sZW5ndGggPiAwIHx8IGRyb3Bkb3duT3B0aW9ucy5sZW5ndGggPiAwIHx8IHRleHRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gc2hvdyBjb250aW51ZSBidXR0b25cclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29udGludWUuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBhdXRvIHVwZGF0ZSB0aGUgbW9kaWZpZXJzIHZpZXcgdW50aWwgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gb3B0aW9uc1xyXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucy5mb3JFYWNoKCh7XHJcbiAgICAgICAgICAgICAgICBpZCwgcHJlZmlsbCwgc2VsZWN0ZWRfZGF0ZSwgdmFsdWVzLFxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gdmFsdWVzPy5maW5kKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKT8uaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnc2VsZWN0JykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1gKS52YWwodmFsdWVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt2YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByZWZpbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdYCkudmFsKHByZWZpbGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZF9kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX2RhdGUuZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW2RheV1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS5kYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRfZGF0ZS5tb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVttb250aF1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS5tb250aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9kYXRlLnllYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1beWVhcl1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIGNoZWNrYm94IG9wdGlvbnNcclxuICAgICAgICAgICAgY2hlY2tib3hPcHRpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgICAgIGlkLCBjaGVja2VkLCB2YWx1ZSwgbm9WYWx1ZSxcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJoaWRkZW5cIl1gKS52YWwodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImNoZWNrYm94XCJdYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJoaWRkZW5cIl1gKS52YWwobm9WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiY2hlY2tib3hcIl1gKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1hcmsgZmlsZSBpbnB1dCwgZGF0ZSBpbnB1dCwgZHJvcGRvd24gc2VsZWN0LCB0ZXh0IGlucHV0IGFzIHNob3duXHJcbiAgICAgICAgICAgIFsuLi5maWxlT3B0aW9ucywgLi4uZGF0ZU9wdGlvbnMsIC4uLmRyb3Bkb3duT3B0aW9ucywgLi4udGV4dE9wdGlvbnNdLmZvckVhY2goKHsgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVtkYXldXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bbW9udGhdXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1beWVhcl1cIl1gKS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzKSB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBwcmVsb2FkZXI6IHRydWUgfTtcclxuICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgY29uc3QgcHJpY2VUZXh0ID0gbXVzdGFjaGUucmVuZGVyKHRoaXMub3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG5cclxuICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV1gKVxyXG4gICAgICAgICAgICAgICAgLmVhY2goKF9pLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSBOdW1iZXIoJHZhbHVlLmF0dHIoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZUlkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByaWNlID0gJChwcmljZUh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBhbHJlYWR5IGhhcyBwcmljZSBkaXNwbGF5ZWQgYmVmb3JlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmRhdGEoJ3ByaWNlSHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnLCAkdmFsdWUudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS50ZXh0KGAkeyR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKX0gJHtwcmljZVRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkb2xkID0gJHZhbHVlLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkPVwiJHtvcHRpb25JZH0tJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG9sZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb2xkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHBsYWNlaG9sZGVyID0gJHZhbHVlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLXBsYWNlaG9sZGVyXScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwoJHByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgcHJpY2VzIHRvIGNvcnJlc3BvbmRpbmcgb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VidG90YWxcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2hvd09wdGlvbklkcyBvcHRpb24gaWRzIHRvIHNob3cgcHJpY2VzXHJcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxyXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH0gfX0gbm9uZVNhbGVzIG9wdGlvbiB2YWx1ZXMgd2l0aCBub24tc2FsZSBwcmljZXNcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZVVwZGF0ZVN1YnRvdGFsPWZhbHNlXSBpZ25vcmUgdXBkYXRlIHN1YnRvdGFsXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMsIGlnbm9yZVVwZGF0ZVN1YnRvdGFsID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBbc2V0dGluZ3MsIFtwcmV2LCAuLi5zZWxlY3Rpb25zXV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hTZXR0aW5ncygpLFxyXG4gICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2VzKFxyXG4gICAgICAgICAgICAgICAgc2hvd09wdGlvbklkcy5tYXAoX2lkID0+IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gX2lkKSksXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd1ByaWNlID0gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dQcmljZUZyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnR4dFByaWNlRnJlZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93UHJpY2VaZXJvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UHJpY2UodmFsdWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFByaWNlKHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgb3B0aW9uSWQsIHZhbHVlSWQsIGFkanVzdGVkUHJpY2VzV2l0aFRheCwgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4LFxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiBhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXg6IHNob3dQcmljZShhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiAoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUsIHRydWUpIDogJycpLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiBzaG93UHJpY2UoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IChhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlLCB0cnVlKSA6ICcnKSxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyYW1zLnByaWNlV2l0aFRheCB8fCBwYXJhbXMucHJpY2VXaXRob3V0VGF4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvdmVycmlkZSBub24tc2FsZSBwcmljZSBmb3Igb3B0aW9uIHZhbHVlcyBpZiBpdCBpcyBhcHBlYXJzIGluIGN1c3RvbSBmaWVsZCBgX19Abm9uc2FsZWBcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBpZiBpdCdzIGhpZ2hlciB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub25TYWxlID0gbm9uZVNhbGVzW29wdGlvbklkXT8uW3ZhbHVlSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGNoYW5nZWROb25TYWxlID0gbm9uU2FsZSAqIHNldHRpbmdzLmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVZhbHVlID0gc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSA6IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNoYW5nZWROb25TYWxlID4gcHJpY2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IGV4Y2hhbmdlZE5vblNhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogdGhpcy5mb3JtYXRQcmljZShleGNoYW5nZWROb25TYWxlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiBleGNoYW5nZWROb25TYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IHRoaXMuZm9ybWF0UHJpY2UoZXhjaGFuZ2VkTm9uU2FsZSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVRleHQgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVBsYWluVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcmljZSA9ICQocHJpY2VIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JywgJHZhbHVlLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS50ZXh0KGAkeyR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKX0gJHtwcmljZVRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ3ByaWNlSHRtbCcsIHByaWNlSHRtbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGxhY2Vob2xkZXIgPSAkdmFsdWUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtcGxhY2Vob2xkZXJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTaG93IHN1YnRvdGFsIGNhbGN1bGF0ZWQgZnJvbSBhbGwgc2VsZWN0ZWQgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmICghaWdub3JlVXBkYXRlU3VidG90YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9uU3VidG90YWwoJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHByZXYsIHNldHRpbmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5IHN1YnRvdGFsIGZvciB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgcHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfCBudWxsLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBwcmljZXNXaXRob3V0VGF4OiB7XHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfCBudWxsLFxyXG4gICAgICogfX0gcHJvZHVjdFxyXG4gICAgICogQHBhcmFtIHt7IHRheDogeyBwZHA6IG51bWJlciB9IH19IHNldHRpbmdzXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBzaG93T3B0aW9uU3VidG90YWwoJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHByb2R1Y3QsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdHh0U3VidG90YWw6IHRoaXMuY29udGV4dC50eHRTdWJ0b3RhbCxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogJycsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3QucHJpY2VzV2l0aFRheD8ucHJpY2UgfHwgcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4Py5wcmljZSkge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheDogdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiBwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4OiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IHN1bW1hcnkgb2Ygc2VsZWN0ZWQgb3B0aW9ucyBiZWZvcmUgYWRkaW5nIHRvIGNhcnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1bW1hcnlcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbFxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFRpdGxlXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGFkZFRvQ2FydFdyYXBwZXJcclxuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZWxvYWRlclxyXG4gICAgICovXHJcbiAgICBzaG93U3VtbWFyeSgkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5LCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgJG1vZGlmaWVyc01vZGFsVGl0bGUsICRhZGRUb0NhcnRXcmFwcGVyLCBmb3JtRGF0YSwgcHJlbG9hZGVyID0gZmFsc2UpIHtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5odG1sKHRoaXMuY29udGV4dC50eHRSZXZpZXdTZWxlY3Rpb25zKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9ICFwcmVsb2FkZXJcclxuICAgICAgICAgICAgPyAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKClcclxuICAgICAgICAgICAgOiBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCB7IHByZWxvYWRlciB9LCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgIGNvbnN0ICRzdWJ0b3RhbCA9ICQoc3VidG90YWxIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZS1zdWJ0b3RhbCcsICcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheVN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XWApO1xyXG4gICAgICAgICAgICBjb25zdCBtb250aFN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bbW9udGhdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHllYXJTdHIgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF5U3RyIHx8IG1vbnRoU3RyIHx8IHllYXJTdHIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoYCR7eWVhclN0cn0tJHttb250aFN0cn0tJHtkYXlTdHJ9YCkudG9Mb2NhbGVEYXRlU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU6IGAke3llYXJTdHJ9LSR7bW9udGhTdHJ9LSR7ZGF5U3RyfWAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVTdHIgPSBmb3JtRGF0YS5nZXRBbGwoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCkuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlU3RyIHx8IHZhbHVlU3RyID09PSAnMCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZVN0ciBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVN0ci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlU3RyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZVN0ciA/IE51bWJlcih2YWx1ZVN0cikgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBpdCBpcyBjaGVja2JveCBhbmQgbm90IGNoZWNrZWRcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5ub1ZhbHVlICYmIG9wdGlvbi5ub1ZhbHVlID09PSB2YWx1ZUlkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUxhYmVsID0gb3B0aW9uLnZhbHVlcz8uZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gdmFsdWVJZCk/LmxhYmVsXHJcbiAgICAgICAgICAgICAgICB8fCAob3B0aW9uLnZhbHVlID09PSB2YWx1ZUlkID8gb3B0aW9uLmxhYmVsIDogdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlSHRtbCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbi5pZH0tJHt2YWx1ZUlkfVwiXWApXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKS5jbG9uZSgpLnJlbW92ZUF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnKVswXT8ub3V0ZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxQcmljZUh0bWwgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl0gb3B0aW9uW3ZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLmRhdGEoJ3ByaWNlSHRtbCcpO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5kaXNwbGF5X25hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVMYWJlbCB8fCB2YWx1ZVN0cixcclxuICAgICAgICAgICAgICAgIHByaWNlSHRtbDogcHJpY2VIdG1sIHx8IG9wdGlvbkVsUHJpY2VIdG1sLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VtbWFyeUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdW1tYXJ5VGVtcGxhdGUsIHsgb3B0aW9ucyB9LCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1bW1hcnkuaHRtbChzdW1tYXJ5SHRtbCk7XHJcblxyXG4gICAgICAgIC8vIEluc2VydCBzdWJ0b3RhbCB0byB0byBhZGQgdG8gY2FydCB3cmFwcGVyIGFuZCBzaG93IGl0XHJcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlLXN1YnRvdGFsXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLmZpbmQodGhpcy5hZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IpLnByZXBlbmQoJHN1YnRvdGFsKTtcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5zaG93KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2VdXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aG91dF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRob3V0X3RheC5jdXJyZW5jeVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2UudGF4X2xhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmN1cnJlbmN5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRoX3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRoX3RheC5jdXJyZW5jeVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC5jdXJyZW5jeVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdHh0U3VidG90YWw6IHRoaXMuY29udGV4dC50eHRTdWJ0b3RhbCxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogJycsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEucHJpY2UpIHtcclxuICAgICAgICAgICAgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgLi4uKGRhdGEucHJpY2Uud2l0aF90YXggPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6IGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiBkYXRhLnByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAuLi4oZGF0YS5wcmljZS53aXRob3V0X3RheCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IGRhdGEucHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXG4gKiBQYXJzZXMgYW4gSVNPIGRhdGUtdGltZSBzdHJpbmcgYW5kIGV4dHJhY3RzIHRoZSBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgZGF0ZS10aW1lIHN0cmluZyB0byBwYXJzZS5cbiAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGV4dHJhY3RlZCBjb21wb25lbnRzLCBvciBgbnVsbGAgaWYgdGhlIGZvcm1hdCBpcyBpbnZhbGlkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlVGltZVN0cmluZyhzdHIpIHtcbiAgICBjb25zdCByZWdleCA9IC9eXFxzKig/Oig/OihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pKXwoPzooXFxkezJ9KS0oXFxkezJ9KSkpPyg/OltUXFxzXSk/KD86KFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSkoPzpcXC5cXGQrKT98KFxcZHsyfSk6KFxcZHsyfSl8KFxcZHsyfSkpP1xccyooPzpafChbKy1dKShcXGR7MSwyfSkoPzo6PyhcXGR7Mn0pKT8pP1xccyokLztcblxuICAgIGNvbnN0IG1hdGNoID0gc3RyLnRyaW0oKS5tYXRjaChyZWdleCk7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgICByZXR1cm4gbnVsbDsgLy8gSW52YWxpZCBmb3JtYXRcbiAgICB9XG5cbiAgICBjb25zdCBbXG4gICAgICAgICxcbiAgICAgICAgeWVhciwgbW9udGgsIGRheSwgLy8gWzFdLCBbMl0sIFszXVxuICAgICAgICBzaG9ydE1vbnRoLCBzaG9ydERheSwgLy8gWzRdLCBbNV1cbiAgICAgICAgaG91ciwgbWludXRlLCBzZWNvbmQsIC8vIFs2XSwgWzddLCBbOF1cbiAgICAgICAgc2hvcnRIb3VyLCBzaG9ydE1pbnV0ZSwgLy8gWzldLCBbMTBdXG4gICAgICAgIHNpbmdsZVRpbWVDb21wb25lbnQsIC8vIFsxMV1cbiAgICAgICAgdHpTaWduLCB0ekhvdXJPZmZzZXQsIHR6TWludXRlT2Zmc2V0LCAvLyBbMTJdLCBbMTNdLCBbMTRdXG4gICAgXSA9IG1hdGNoO1xuXG4gICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAvLyBEYXRlIGNvbXBvbmVudHNcbiAgICBpZiAoeWVhciAmJiBtb250aCAmJiBkYXkpIHtcbiAgICAgICAgcmVzdWx0LnllYXIgPSBwYXJzZUludCh5ZWFyLCAxMCk7XG4gICAgICAgIHJlc3VsdC5tb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XG4gICAgICAgIHJlc3VsdC5kYXkgPSBwYXJzZUludChkYXksIDEwKTtcbiAgICB9IGVsc2UgaWYgKHNob3J0TW9udGggJiYgc2hvcnREYXkpIHtcbiAgICAgICAgcmVzdWx0Lm1vbnRoID0gcGFyc2VJbnQoc2hvcnRNb250aCwgMTApO1xuICAgICAgICByZXN1bHQuZGF5ID0gcGFyc2VJbnQoc2hvcnREYXksIDEwKTtcbiAgICB9XG5cbiAgICAvLyBUaW1lIGNvbXBvbmVudHNcbiAgICBpZiAoaG91ciAhPT0gdW5kZWZpbmVkICYmIG1pbnV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdC5ob3VyID0gcGFyc2VJbnQoaG91ciwgMTApO1xuICAgICAgICByZXN1bHQubWludXRlID0gcGFyc2VJbnQobWludXRlLCAxMCk7XG4gICAgICAgIGlmIChzZWNvbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50KHNlY29uZCwgMTApO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChzaG9ydEhvdXIgIT09IHVuZGVmaW5lZCAmJiBzaG9ydE1pbnV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdC5ob3VyID0gcGFyc2VJbnQoc2hvcnRIb3VyLCAxMCk7XG4gICAgICAgIHJlc3VsdC5taW51dGUgPSBwYXJzZUludChzaG9ydE1pbnV0ZSwgMTApO1xuICAgIH0gZWxzZSBpZiAoc2luZ2xlVGltZUNvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdC5ob3VyID0gcGFyc2VJbnQoc2luZ2xlVGltZUNvbXBvbmVudCwgMTApO1xuICAgIH1cblxuICAgIC8vIFRpbWV6b25lXG4gICAgaWYgKHR6U2lnbiAmJiB0ekhvdXJPZmZzZXQpIHtcbiAgICAgICAgY29uc3Qgc2lnbiA9IHR6U2lnbiA9PT0gJysnID8gMSA6IC0xO1xuICAgICAgICBjb25zdCB0ekhvdXIgPSBwYXJzZUludCh0ekhvdXJPZmZzZXQsIDEwKTtcbiAgICAgICAgY29uc3QgdHpNaW51dGUgPSB0ek1pbnV0ZU9mZnNldCA/IHBhcnNlSW50KHR6TWludXRlT2Zmc2V0LCAxMCkgOiAwO1xuICAgICAgICByZXN1bHQudGltZXpvbmUgPSBzaWduICogKHR6SG91ciArIHR6TWludXRlIC8gNjApO1xuICAgIH0gZWxzZSBpZiAoc3RyLmluY2x1ZGVzKCdaJykpIHtcbiAgICAgICAgcmVzdWx0LnRpbWV6b25lID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgZGF0ZS10aW1lIHN0cmluZyBpbnRvIGEgRGF0ZSBvYmplY3QgYWRqdXN0ZWQgZm9yIGNvdW50ZG93biBwdXJwb3Nlcy5cbiAqXG4gKiAtIElmIHRoZSBkYXRlLXRpbWUgc3RyaW5nIGRvZXMgbm90IGluY2x1ZGUgYSB5ZWFyLCBtb250aCwgb3IgZGF5LCBpdCBpcyB0cmVhdGVkIGFzIGEgZGFpbHkgY291bnRkb3duLlxuICogICBUaGUgZnVuY3Rpb24gd2lsbCBzZXQgdGhlIGRhdGUgdG8gdG9kYXkgb3Igcm9sbCBvdmVyIHRvIHRoZSBuZXh0IGRheSBpZiB0aGUgdGltZSBoYXMgYWxyZWFkeSBwYXNzZWQuXG4gKiAtIElmIHRoZSBkYXRlLXRpbWUgc3RyaW5nIGRvZXMgbm90IGluY2x1ZGUgYW4gaG91ciwgbWludXRlLCBvciBzZWNvbmQsIHRoZXkgZGVmYXVsdCB0byAwLlxuICogLSBUaGUgZnVuY3Rpb24gYWRqdXN0cyBmb3IgdGhlIHNwZWNpZmllZCB0aW1lem9uZSBvZmZzZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBkYXRlLXRpbWUgc3RyaW5nIHRvIHBhcnNlLlxuICogQHJldHVybnMge0RhdGV8dW5kZWZpbmVkfSBBIERhdGUgb2JqZWN0IHVzZWQgZm9yIHRoZSBjb3VudGRvd24sIG9yIGB1bmRlZmluZWRgIGlmIHBhcnNpbmcgZmFpbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvdW50ZG93bkRhdGUoc3RyKSB7XG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlRGF0ZVRpbWVTdHJpbmcoc3RyKTtcbiAgICBpZiAoIXBhcnNlZERhdGUpIHJldHVybjtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuICAgIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIHRpbWV6b25lIH0gPSBwYXJzZWREYXRlO1xuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB5ID0geWVhciA/PyBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtID0gbW9udGggPz8gKG5vdy5nZXRNb250aCgpICsgMSk7XG4gICAgY29uc3QgZCA9IGRheSA/PyBub3cuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGggPSBob3VyIHx8IDA7XG4gICAgY29uc3QgbWluID0gbWludXRlIHx8IDA7XG4gICAgY29uc3Qgc2VjID0gc2Vjb25kIHx8IDA7XG5cbiAgICBsZXQgZGF0ZTtcblxuICAgIGlmICh0aW1lem9uZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHV0Y01pbGxpcyA9IERhdGUuVVRDKHksIG0gLSAxLCBkLCBoLCBtaW4sIHNlYykgLSAodGltZXpvbmUgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh1dGNNaWxsaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAoeWVhcikgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICAgICAgaWYgKG1vbnRoKSBkYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7XG4gICAgICAgIGlmIChkYXkpIGRhdGUuc2V0RGF0ZShkYXkpO1xuICAgICAgICBkYXRlLnNldEhvdXJzKGgpO1xuICAgICAgICBkYXRlLnNldE1pbnV0ZXMobWluKTtcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKHNlYyk7XG4gICAgfVxuXG4gICAgaWYgKCF5ZWFyICYmICFtb250aCAmJiAhZGF5KSB7XG4gICAgICAgIC8vIGZvciBkYWlseSBjb3VudGRvd24sIGFkZCAxIGRheSBpZiBkYXRlIGlzIGluIHRoZSBwYXN0XG4gICAgICAgIGlmIChkYXRlIDwgbm93KSB7XG4gICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRlO1xufVxuXG4vKipcbiAqICoqU2FsZUNvdW50ZG93biBTaW5nbGV0b24gT2JqZWN0KipcbiAqXG4gKiBNYW5hZ2VzIGNvdW50ZG93biB0aW1lcnMgZm9yIHNhbGVzIG9yIHByb21vdGlvbmFsIGV2ZW50cyBvbiB5b3VyIHdlYnNpdGUuXG4gKiBJdCBoYW5kbGVzIG11bHRpcGxlIGNvdW50ZG93biBlbGVtZW50cywgdXBkYXRlcyB0aGVtIGluIHJlYWwtdGltZSwgYW5kIG1hbmFnZXMgdmlzaWJpbGl0eSBiYXNlZCBvbiB0aGUgdmlld3BvcnQuXG4gKlxuICogLS0tXG4gKlxuICogKipVc2FnZToqKlxuICpcbiAqICoqMS4gQ29uZmlndXJlIHRoZSBDb3VudGRvd24gKE9wdGlvbmFsKToqKlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHtcbiAqICAgLy8gT3B0aW9uYWwgc2V0dGluZ3NcbiAqICAgZGF0ZURhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkRhdGUnLCAgICAgICAvLyBEYXRhIGF0dHJpYnV0ZSBmb3IgY291bnRkb3duIGRhdGVcbiAqICAgaW5WaWV3cG9ydERhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkluVmlld3BvcnQnLCAvLyBEYXRhIGF0dHJpYnV0ZSBmb3Igdmlld3BvcnQgdmlzaWJpbGl0eVxuICogICBzZWxlY3RvcnM6IHsgLi4uIH0sXG4gKiAgIHRlbXBsYXRlOiAnLi4uJywgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3VzdG9tIEhUTUwgdGVtcGxhdGUgZm9yIHRoZSBjb3VudGRvd25cbiAqICAgaGlkZUNsYXNzOiAnX2hpZGUnLCAgICAgICAgICAgICAgICAgICAgICAvLyBDbGFzcyB0byBoaWRlIGVsZW1lbnRzXG4gKiAgIHNhbGVFbmRDbGFzczogJ19zYWxlRW5kZWQnLCAgICAgICAgICAgICAgLy8gQ2xhc3Mgd2hlbiBzYWxlIGVuZHNcbiAqICAgYWN0aXZlQ2xhc3M6ICdfYWN0aXZlJywgICAgICAgICAgICAgICAgICAvLyBDbGFzcyB3aGVuIGNvdW50ZG93biBpcyBhY3RpdmVcbiAqICAgdHJhbnNsYXRpb25zOiB7XG4gKiAgICAgZW5kX2luOiAnRW5kcyBpbicsXG4gKiAgICAgZGF5OiAnRGF5JyxcbiAqICAgICBkYXlzOiAnRGF5cycsXG4gKiAgICAgaG91cjogJ0hvdXInLFxuICogICAgIGhvdXJzOiAnSG91cnMnLFxuICogICAgIG1pbnV0ZTogJ01pbnV0ZScsXG4gKiAgICAgbWludXRlczogJ01pbnV0ZXMnLFxuICogICAgIHNlY29uZDogJ1NlY29uZCcsXG4gKiAgICAgc2Vjb25kczogJ1NlY29uZHMnLFxuICogICB9LFxuICogICB0eHRTYWxlQ291bnRkb3duSlNPTjogJ3sgXCJ0cmFuc2xhdGlvbnNcIjogeyAuLi4gfSB9JywgLy8gSlNPTiBzdHJpbmcgZm9yIHRyYW5zbGF0aW9uc1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiAqKjIuIEFkZCBDb3VudGRvd24gRWxlbWVudHM6KipcbiAqXG4gKiAtICoqT3B0aW9uIDE6KiogRGlyZWN0bHkgc3BlY2lmeSB0aGUgZGF0ZSB3aGVuIGFkZGluZyB0aGUgZWxlbWVudC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgY29uc3QgJGVsID0gJCgnI2NvdW50ZG93bi1lbGVtZW50Jyk7XG4gKiAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgnMjAyMy0xMi0zMVQyMzo1OTo1OScpO1xuICogICBTYWxlQ291bnRkb3duLmFkZCgkZWwsIGRhdGUpO1xuICogICBgYGBcbiAqXG4gKiAtICoqT3B0aW9uIDI6KiogU2V0IGRhdGEgYXR0cmlidXRlcyBvbiB0aGUgZWxlbWVudCBhbmQgYWRkIGl0LlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBjb25zdCAkZWwgPSAkKCcjY291bnRkb3duLWVsZW1lbnQnKTtcbiAqICAgJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25EYXRlJywgJzIwMjMtMTItMzFUMjM6NTk6NTknKTtcbiAqICAgJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25UcmFuc2xhdGlvbnMnLCB7IGVuZF9pbjogJ0VuZHMgaW4nLCAuLi4gfSk7XG4gKiAgIFNhbGVDb3VudGRvd24uYWRkKCRlbCk7XG4gKiAgIGBgYFxuICpcbiAqIC0tLVxuICpcbiAqICoqTm90ZXM6KipcbiAqXG4gKiAtIFRoZSBjb3VudGRvd24gYXV0b21hdGljYWxseSB1cGRhdGVzIHZpc2libGUgZWxlbWVudHMgaW4gdGhlIHZpZXdwb3J0LlxuICogLSBTdXBwb3J0cyBjdXN0b21pemF0aW9uIHRocm91Z2ggY29uZmlndXJhdGlvbiBhbmQgZGF0YSBhdHRyaWJ1dGVzLlxuICogLSBIYW5kbGVzIGF1dG9tYXRpYyBzdG9wcGluZyB3aGVuIG5vIGVsZW1lbnRzIHJlbWFpbi5cbiAqXG4gKiAtLS1cbiAqXG4gKiAqKkV4YW1wbGU6KipcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiAvLyBJbml0aWFsaXplIGFuZCBjb25maWd1cmVcbiAqIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHtcbiAqICAgdHJhbnNsYXRpb25zOiB7XG4gKiAgICAgZW5kX2luOiAnU2FsZSBlbmRzIGluJyxcbiAqICAgICAvLyBPdGhlciB0cmFuc2xhdGlvbnMuLi5cbiAqICAgfSxcbiAqIH0pO1xuICpcbiAqIC8vIEFkZCBjb3VudGRvd24gZWxlbWVudFxuICogY29uc3QgJGNvdW50ZG93biA9ICQoJyNjb3VudGRvd24nKTtcbiAqIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgnMjAyMy0xMi0zMVQyMzo1OTo1OScpO1xuICogU2FsZUNvdW50ZG93bi5hZGQoJGNvdW50ZG93biwgZW5kRGF0ZSk7XG4gKiBgYGBcbiAqL1xuXG5jb25zdCBTYWxlQ291bnRkb3duID0ge1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHR5cGUge1NldDxFbGVtZW50Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGVsZW1lbnRzOiBuZXcgU2V0KCksXG5cbiAgICAvKipcbiAgICAgKiBUaW1lciBpbnRlcnZhbCBJRFxuICAgICAqIEB0eXBlIHtudW1iZXJ8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRpbWVyOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7SW50ZXJzZWN0aW9uT2JzZXJ2ZXJ8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ic2VydmVyOiBudWxsLFxuXG4gICAgLyoqXG4gICAgKiBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBjb3VudGRvd24gZGF0ZVxuICAgICogQHR5cGUge3N0cmluZ31cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBkYXRlRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duRGF0ZScsXG5cbiAgICAvKipcbiAgICAgKiBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGluVmlld3BvcnREYXRhTmFtZTogJ3NhbGVDb3VudGRvd25JblZpZXdwb3J0JyxcblxuICAgIC8qKlxuICAgICAqIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIHRyYW5zbGF0aW9ucyBKU09OXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRyYW5zbGF0aW9uc0RhdGFOYW1lOiAnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RvcnMgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEB0eXBlIHt7ZW5kTGFiZWw6IHN0cmluZywgZGF5OiBzdHJpbmcsIGRheVZhbHVlOiBzdHJpbmcsIGRheUxhYmVsOiBzdHJpbmcsIGhvdXI6IHN0cmluZywgaG91clZhbHVlOiBzdHJpbmcsIGhvdXJMYWJlbDogc3RyaW5nLCBtaW51dGU6IHN0cmluZywgbWludXRlVmFsdWU6IHN0cmluZywgbWludXRlTGFiZWw6IHN0cmluZywgc2Vjb25kOiBzdHJpbmcsIHNlY29uZFZhbHVlOiBzdHJpbmcsIHNlY29uZExhYmVsOiBzdHJpbmd9fVxuICAgICAqL1xuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBlbmRMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWVuZC1sYWJlbF0nLFxuICAgICAgICBkYXk6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXldJyxcbiAgICAgICAgZGF5VmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktdmFsdWVdJyxcbiAgICAgICAgZGF5TGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktbGFiZWxdJyxcbiAgICAgICAgaG91cjogJ1tkYXRhLXNhbGUtY291bnRkb3duLWhvdXJdJyxcbiAgICAgICAgaG91clZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24taG91ci12YWx1ZV0nLFxuICAgICAgICBob3VyTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLWxhYmVsXScsXG4gICAgICAgIG1pbnV0ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZV0nLFxuICAgICAgICBtaW51dGVWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS12YWx1ZV0nLFxuICAgICAgICBtaW51dGVMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS1sYWJlbF0nLFxuICAgICAgICBzZWNvbmQ6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmRdJyxcbiAgICAgICAgc2Vjb25kVmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtdmFsdWVdJyxcbiAgICAgICAgc2Vjb25kTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtbGFiZWxdJyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWJhZGdlLXBlcmNlbnRcIj48L3VzZT48L3N2Zz48L2k+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX2VuZFwiIGRhdGEtc2FsZS1jb3VudGRvd24tZW5kLWxhYmVsPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfZGF5XCIgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXk+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLWRheS12YWx1ZT48L3NwYW4+PHNwYW4gY2xhc3M9XCJfbGFiZWxcIiBkYXRhLXNhbGUtY291bnRkb3duLWRheS1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9ob3VyXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24taG91ci1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9taW51dGVcIiBkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZT48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX3NlY29uZFwiIGRhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtbGFiZWw+PC9zcGFuPjwvc3Bhbj5cbiAgICBgLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSB0byBoaWRlIGVsZW1lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGhpZGVDbGFzczogJ19oaWRlJyxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgc2FsZSBoYXMgZW5kZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2FsZUVuZENsYXNzOiAnX3NhbGVFbmRlZCcsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHRvIGluZGljYXRlIGFjdGl2ZSBjb3VudGRvd25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWN0aXZlQ2xhc3M6ICdfYWN0aXZlJyxcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0aW9ucyBmb3IgY291bnRkb3duIGxhYmVsc1xuICAgICAqIEB0eXBlIHt7ZW5kX2luOiBzdHJpbmcsIGRheTogc3RyaW5nLCBkYXlzOiBzdHJpbmcsIGhvdXI6IHN0cmluZywgaG91cnM6IHN0cmluZywgbWludXRlOiBzdHJpbmcsIG1pbnV0ZXM6IHN0cmluZywgc2Vjb25kOiBzdHJpbmcsIHNlY29uZHM6IHN0cmluZ319XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgICAgZW5kX2luOiAnRW5kIGluJyxcbiAgICAgICAgZGF5OiAnRGF5JyxcbiAgICAgICAgZGF5czogJ0RheXMnLFxuICAgICAgICBob3VyOiAnSG91cicsXG4gICAgICAgIGhvdXJzOiAnSG91cnMnLFxuICAgICAgICBtaW51dGU6ICdNaW51dGUnLFxuICAgICAgICBtaW51dGVzOiAnTWludXRlcycsXG4gICAgICAgIHNlY29uZDogJ1NlY29uZCcsXG4gICAgICAgIHNlY29uZHM6ICdTZWNvbmRzJyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlIHRoZSBjb3VudGRvd24gc2V0dGluZ3NcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5kYXRlRGF0YU5hbWUgLSBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBjb3VudGRvd24gZGF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmluVmlld3BvcnREYXRhTmFtZSAtIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5zZWxlY3RvcnMgLSBTZWxlY3RvcnMgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5lbmRMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZGF5VmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZGF5TGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuaG91clxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5ob3VyVmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuaG91ckxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5taW51dGVWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5taW51dGVMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuc2Vjb25kVmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuc2Vjb25kTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50ZW1wbGF0ZSAtIFRlbXBsYXRlIGZvciBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5oaWRlQ2xhc3MgLSBDbGFzcyBuYW1lIHRvIGhpZGUgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zYWxlRW5kQ2xhc3MgLSBDbGFzcyBuYW1lIHRvIGluZGljYXRlIHNhbGUgaGFzIGVuZGVkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYWN0aXZlQ2xhc3MgLSBDbGFzcyBuYW1lIHRvIGluZGljYXRlIGFjdGl2ZSBjb3VudGRvd25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy50cmFuc2xhdGlvbnMgLSBUcmFuc2xhdGlvbnMgZm9yIGNvdW50ZG93biBsYWJlbHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuZW5kX2luXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmRheVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5kYXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmhvdXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuaG91cnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMubWludXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLm1pbnV0ZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuc2Vjb25kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLnNlY29uZHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50eHRTYWxlQ291bnRkb3duSlNPTiAtIEpTT04gc3RyaW5nIGZvciB0cmFuc2xhdGlvbnNcbiAgICAgKi9cbiAgICBjb25maWd1cmUoe1xuICAgICAgICBkYXRlRGF0YU5hbWUsXG4gICAgICAgIGluVmlld3BvcnREYXRhTmFtZSxcbiAgICAgICAgc2VsZWN0b3JzLFxuICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgaGlkZUNsYXNzLFxuICAgICAgICBzYWxlRW5kQ2xhc3MsXG4gICAgICAgIGFjdGl2ZUNsYXNzLFxuICAgICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICAgIHR4dFNhbGVDb3VudGRvd25KU09OLFxuICAgIH0gPSB7fSkge1xuICAgICAgICBpZiAoZGF0ZURhdGFOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVEYXRhTmFtZSA9IGRhdGVEYXRhTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpblZpZXdwb3J0RGF0YU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5WaWV3cG9ydERhdGFOYW1lID0gaW5WaWV3cG9ydERhdGFOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdG9ycykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RvcnMgPSB7IC4uLnRoaXMuc2VsZWN0b3JzLCAuLi5zZWxlY3RvcnMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpZGVDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5oaWRlQ2xhc3MgPSBoaWRlQ2xhc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2FsZUVuZENsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLnNhbGVFbmRDbGFzcyA9IHNhbGVFbmRDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDbGFzcyA9IGFjdGl2ZUNsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucykge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi50cmFuc2xhdGlvbnMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eHRTYWxlQ291bnRkb3duSlNPTikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh0eHRTYWxlQ291bnRkb3duSlNPTik7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnMgPSBPYmplY3Qua2V5cyhqc29uLnRyYW5zbGF0aW9ucykucmVkdWNlKChfdHJhbnMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG9ydEtleSA9IGtleS5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgICAgICAgICAgX3RyYW5zW3Nob3J0S2V5XSA9IGpzb24udHJhbnNsYXRpb25zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHJhbnM7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi50cmFucyB9O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBlbGVtZW50ICYgY29ycmVzcG9uZGluZyBkYXRlIHRvIHRoZSBjb3VudGRvd24gY29sbGVjdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICogQHBhcmFtIHtEYXRlfG51bGx9IGRhdGUgLSBUaGUgY291bnRkb3duIGRhdGUuIElmIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBiZSBleHRyYWN0ZWQgZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGUgYGRhdGEtc2FsZS1jb3VudGRvd24tZGF0ZWBcbiAgICAgKi9cbiAgICBhZGQoJGVsLCBkYXRlID0gbnVsbCkge1xuICAgICAgICBsZXQgdmFsaWREYXRlID0gZGF0ZSB8fCAkZWwuZGF0YSh0aGlzLmRhdGVEYXRhTmFtZSk7XG4gICAgICAgIGlmICh2YWxpZERhdGUgJiYgdHlwZW9mIHZhbGlkRGF0ZSA9PT0gJ3N0cmluZycpIHZhbGlkRGF0ZSA9IHBhcnNlQ291bnRkb3duRGF0ZSh2YWxpZERhdGUpO1xuICAgICAgICBpZiAoIXZhbGlkRGF0ZSkgcmV0dXJuO1xuICAgICAgICAkZWwuZGF0YSh0aGlzLmRhdGVEYXRhTmFtZSwgdmFsaWREYXRlKS5odG1sKHRoaXMudGVtcGxhdGUpXG4gICAgICAgICAgICAuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLmVsZW1lbnRzLmFkZChlbCkpO1xuICAgICAgICB0aGlzLm9ic2VydmUoJGVsKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlIHRoZSBlbGVtZW50IGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5IGNoZWNrXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb2JzZXJ2ZSgkZWwpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIC8vIGFzc3VtZSBlbGVtZW50IGlzIGluIHZpZXdwb3J0IGlmIEludGVyc2VjdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICRlbC5kYXRhKHRoaXMuaW5WaWV3cG9ydERhdGFOYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgLy8gY3JlYXRlIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlIGlmIG5vdCBhbHJlYWR5IGNyZWF0ZWRcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJChlbnRyeS50YXJnZXQpLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzSW50ZXJzZWN0aW5nJywgZW50cnkudGFyZ2V0LCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcm9vdDogbnVsbCwgLy8gRGVmYXVsdHMgdG8gdmlld3BvcnRcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAsIC8vIENhbGxiYWNrIGlzIHRyaWdnZXJlZCB3aGVuIGFueSBwYXJ0IG9mIHRoZSBlbGVtZW50IGlzIHZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmdldCgpLmZvckVhY2goZWwgPT4gdGhpcy5vYnNlcnZlci5vYnNlcnZlKGVsKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3Agb2JzZXJ2aW5nIHRoZSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdW5vYnNlcnZlKGVsKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndW5vYnNlcnZlJywgZWwpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBlbGVtZW50IGlzIGluIHZpZXdwb3J0IGFuZCB2aXNpYmxlXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaXNWaXNpYmxlSW5WaWV3cG9ydCgkZWwpIHtcbiAgICAgICAgcmV0dXJuICRlbC5kYXRhKHRoaXMuaW5WaWV3cG9ydERhdGFOYW1lKSAmJiAkZWwuaXMoJzp2aXNpYmxlJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHN0YXJ0IHJ1bm5pbmcgY291bnRkb3duIGV2ZXJ5IHNlY29uZFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbWVyICYmIHRoaXMuZWxlbWVudHMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5ydW4oKSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogc3RvcCBjb3VudGRvd25cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc3RvcCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0b3AgY291bnRkb3duJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHJ1bm5pbmcgY291bnRkb3duIHByb2Nlc3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGFuZCBzdG9wIGlmIGVsZW1lbnQgbm8gbG9uZ2VyIGV4aXN0cyBpbiBET01cbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhlbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmRlbGV0ZShlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBzdG9wIGNvdW50ZG93biBpZiBlbGVtZW50IGlzIG5vdCBpbiB2aWV3cG9ydCBvciBub3QgdmlzaWJsZVxuICAgICAgICAgICAgaWYgKCFkYXRlIHx8ICF0aGlzLmlzVmlzaWJsZUluVmlld3BvcnQoJGVsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgaWYgKGRhdGUgPD0gbm93KSB7XG4gICAgICAgICAgICAgICAgLy8gQ291bnQgZG93biBkYXRlIGhhcyBwYXNzZWRcbiAgICAgICAgICAgICAgICAkZWwuYWRkQ2xhc3ModGhpcy5zYWxlRW5kQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlKGVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHJlbWFpbmluZyB0aW1lIChkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcylcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBkYXRlIC0gbm93O1xuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgY29uc3QgJGVuZExhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZW5kTGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJGRheSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmRheSk7XG4gICAgICAgICAgICBjb25zdCAkZGF5VmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5kYXlWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkZGF5TGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5kYXlMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkaG91ciA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmhvdXIpO1xuICAgICAgICAgICAgY29uc3QgJGhvdXJWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmhvdXJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkaG91ckxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91ckxhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRtaW51dGUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5taW51dGUpO1xuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZVZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMubWludXRlVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZUxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMubWludXRlTGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJHNlY29uZCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLnNlY29uZCk7XG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kVmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5zZWNvbmRWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5zZWNvbmRMYWJlbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy50cmFuc2xhdGlvbnMsIC4uLiRlbC5kYXRhKHRoaXMudHJhbnNsYXRpb25zRGF0YU5hbWUpIH07XG5cbiAgICAgICAgICAgICRlbC5hZGRDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICRlbmRMYWJlbC5odG1sKHRyYW5zbGF0aW9ucy5lbmRfaW4pO1xuICAgICAgICAgICAgJGRheVZhbHVlLnRleHQoZGF5cyk7XG4gICAgICAgICAgICAkZGF5TGFiZWwuaHRtbChkYXlzID09PSAxID8gdHJhbnNsYXRpb25zLmRheSA6IHRyYW5zbGF0aW9ucy5kYXlzKTtcbiAgICAgICAgICAgICRkYXkudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDApO1xuICAgICAgICAgICAgJGhvdXJWYWx1ZS50ZXh0KGhvdXJzKTtcbiAgICAgICAgICAgICRob3VyTGFiZWwuaHRtbChob3VycyA9PT0gMSA/IHRyYW5zbGF0aW9ucy5ob3VyIDogdHJhbnNsYXRpb25zLmhvdXJzKTtcbiAgICAgICAgICAgICRob3VyLnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwICYmIGhvdXJzID09PSAwKTtcbiAgICAgICAgICAgICRtaW51dGVWYWx1ZS50ZXh0KG1pbnV0ZXMpO1xuICAgICAgICAgICAgJG1pbnV0ZUxhYmVsLmh0bWwobWludXRlcyA9PT0gMSA/IHRyYW5zbGF0aW9ucy5taW51dGUgOiB0cmFuc2xhdGlvbnMubWludXRlcyk7XG4gICAgICAgICAgICAkbWludXRlLnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwICYmIGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDApO1xuICAgICAgICAgICAgJHNlY29uZFZhbHVlLnRleHQoc2Vjb25kcyk7XG4gICAgICAgICAgICAkc2Vjb25kTGFiZWwuaHRtbChzZWNvbmRzID09PSAxID8gdHJhbnNsYXRpb25zLnNlY29uZCA6IHRyYW5zbGF0aW9ucy5zZWNvbmRzKTtcbiAgICAgICAgICAgICRzZWNvbmQudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDAgJiYgaG91cnMgPT09IDAgJiYgbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FsZUNvdW50ZG93bjtcbiIsImV4cG9ydCBjb25zdCBhcmlhS2V5Q29kZXMgPSB7XG4gICAgUkVUVVJOOiAxMyxcbiAgICBTUEFDRTogMzIsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGluaXRSYWRpb09wdGlvbnMgfSBmcm9tICcuL3JhZGlvT3B0aW9ucyc7XG4iLCJpbXBvcnQgeyBhcmlhS2V5Q29kZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHNldENoZWNrZWRSYWRpb0l0ZW0gPSAoaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHgpID0+IHtcbiAgICBpdGVtQ29sbGVjdGlvbi5lYWNoKChpZHgsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGl0ZW0pO1xuICAgICAgICBpZiAoaWR4ICE9PSBpdGVtSWR4KSB7XG4gICAgICAgICAgICAkaXRlbS5hdHRyKCdhcmlhLWNoZWNrZWQnLCBmYWxzZSkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRpdGVtLmF0dHIoJ2FyaWEtY2hlY2tlZCcsIHRydWUpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAkaXRlbS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbiA9IChsYXN0SXRlbUlkeCwgY3VycmVudElkeCkgPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgY3VycmVudElkeCA+IGxhc3RJdGVtSWR4OiByZXR1cm4gMDtcbiAgICBjYXNlIGN1cnJlbnRJZHggPCAwOiByZXR1cm4gbGFzdEl0ZW1JZHg7XG4gICAgZGVmYXVsdDogcmV0dXJuIGN1cnJlbnRJZHg7XG4gICAgfVxufTtcblxuY29uc3QgaGFuZGxlSXRlbUtleURvd24gPSBpdGVtQ29sbGVjdGlvbiA9PiBlID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGU7XG4gICAgY29uc3QgaXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmluZGV4KGUuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgbGFzdENvbGxlY3Rpb25JdGVtSWR4ID0gaXRlbUNvbGxlY3Rpb24ubGVuZ3RoIC0gMTtcblxuICAgIGlmIChPYmplY3QudmFsdWVzKGFyaWFLZXlDb2RlcykuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgIGNhc2UgYXJpYUtleUNvZGVzLkxFRlQ6XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuVVA6IHtcbiAgICAgICAgY29uc3QgcHJldkl0ZW1JZHggPSBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24obGFzdENvbGxlY3Rpb25JdGVtSWR4LCBpdGVtSWR4IC0gMSk7XG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChwcmV2SXRlbUlkeCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgc2V0Q2hlY2tlZFJhZGlvSXRlbShpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCAtIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuUklHSFQ6XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuRE9XTjoge1xuICAgICAgICBjb25zdCBuZXh0SXRlbUlkeCA9IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbihsYXN0Q29sbGVjdGlvbkl0ZW1JZHgsIGl0ZW1JZHggKyAxKTtcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZ2V0KG5leHRJdGVtSWR4KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4ICsgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgkY29udGFpbmVyLCBpdGVtU2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCAkaXRlbUNvbGxlY3Rpb24gPSAkY29udGFpbmVyLmZpbmQoaXRlbVNlbGVjdG9yKTtcblxuICAgICRjb250YWluZXIub24oJ2tleWRvd24nLCBpdGVtU2VsZWN0b3IsIGhhbmRsZUl0ZW1LZXlEb3duKCRpdGVtQ29sbGVjdGlvbikpO1xufTtcbiIsIi8vIGltcG9ydCBXaXNobGlzdCBmcm9tICcuLi93aXNobGlzdCc7IC8vIHBhcGF0aGVtZXMtZXZldmE6IGRpc2FibGVkXG5pbXBvcnQgeyBpbml0UmFkaW9PcHRpb25zIH0gZnJvbSAnLi9hcmlhJztcblxuY29uc3Qgb3B0aW9uc1R5cGVzTWFwID0ge1xuICAgIElOUFVUX0ZJTEU6ICdpbnB1dC1maWxlJyxcbiAgICBJTlBVVF9URVhUOiAnaW5wdXQtdGV4dCcsXG4gICAgSU5QVVRfTlVNQkVSOiAnaW5wdXQtbnVtYmVyJyxcbiAgICBJTlBVVF9DSEVDS0JPWDogJ2lucHV0LWNoZWNrYm94JyxcbiAgICBURVhUQVJFQTogJ3RleHRhcmVhJyxcbiAgICBEQVRFOiAnZGF0ZScsXG4gICAgU0VUX1NFTEVDVDogJ3NldC1zZWxlY3QnLFxuICAgIFNFVF9SRUNUQU5HTEU6ICdzZXQtcmVjdGFuZ2xlJyxcbiAgICBTRVRfUkFESU86ICdzZXQtcmFkaW8nLFxuICAgIFNXQVRDSDogJ3N3YXRjaCcsXG4gICAgUFJPRFVDVF9MSVNUOiAncHJvZHVjdC1saXN0Jyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25DaGFuZ2VEZWNvcmF0b3IoYXJlRGVmYXVsdE9wdGlvbnNTZXQpIHtcbiAgICByZXR1cm4gKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIGlmIChhcmVEZWZhdWx0T3B0aW9uc1NldCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgLy8gV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpOyAvLyBwYXBhdGhlbWVzLWV2ZXZhOiBkaXNhYmxlZFxuICAgICAgICB0aGlzLmdldFRhYlJlcXVlc3RzKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJykuZWFjaCgoX18sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUodmFsdWUsIHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YXJpYW50RG9tTm9kZSwgdmFyaWFudFR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh2YXJpYW50VHlwZSkge1xuICAgICAgICBjYXNlIG9wdGlvbnNUeXBlc01hcC5TRVRfUkFESU86XG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNXQVRDSDoge1xuICAgICAgICAgICAgaW5pdFJhZGlvT3B0aW9ucygkKHZhcmlhbnREb21Ob2RlKSwgJ1t0eXBlPXJhZGlvXScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93IHJhZGlvIGJ1dHRvbnMgdG8gZ2V0IGRlc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpbml0UmFkaW9BdHRyaWJ1dGVzKCkge1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIHJhZGlvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcmFkaW8gPSAkKHJhZGlvKTtcblxuICAgICAgICAgICAgLy8gT25seSBiaW5kIHRvIGNsaWNrIG9uY2VcbiAgICAgICAgICAgIGlmICgkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAkcmFkaW8ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHJhZGlvLmRhdGEoJ3N0YXRlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScsICRyYWRpby5wcm9wKCdjaGVja2VkJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UgPSB0aGlzLmNvbnRleHQub3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlO1xuICAgICAgICBsZXQgb3V0T2ZTdG9ja01lc3NhZ2UgPSBkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICAgICAgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke291dE9mU3RvY2tNZXNzYWdlfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke291dE9mU3RvY2tEZWZhdWx0TWVzc2FnZX0pYDtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCBhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdHRySWQgPSBwYXJzZUludCgkYXR0cmlidXRlLmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZScpLCAxMCk7XG5cblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgZnJhZ21lbnQgaWRlbnRpZmllciBpbiBVUkwgcmVxdWVzdGluZyBhIHNwZWNpZmljIHRhYlxuICAgICAqL1xuICAgIGdldFRhYlJlcXVlc3RzKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3RhYi0nKSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgJGFjdGl2ZVRhYiA9ICQoJy50YWJzJykuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApO1xuICAgICAgICAgICAgY29uc3QgJHRhYkNvbnRlbnQgPSAkKGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofWApO1xuXG4gICAgICAgICAgICBpZiAoJGFjdGl2ZVRhYi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJGFjdGl2ZVRhYi5maW5kKCcudGFiJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkdGFiQ29udGVudC5hZGRDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpbmNlICRwcm9kdWN0VmlldyBjYW4gYmUgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgdXNpbmcgcmVuZGVyX3dpdGgsXG4gICAgICogV2UgaGF2ZSB0byByZXRyaWV2ZSB0aGUgcmVzcGVjdGl2ZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtICRzY29wZVxuICAgICAqL1xuICAgIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByaWNlV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJycFdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVNhdmVkOiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLXNlY3Rpb24tLXNhdmluZycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZU5vd0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkd2VpZ2h0OiAkKCcucHJvZHVjdFZpZXctaW5mbyBbZGF0YS1wcm9kdWN0LXdlaWdodF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXG4gICAgICAgICAgICAkYWRkVG9DYXJ0OiAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRhZGRUb0NhcnRGb3JtOiAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHdpc2hsaXN0VmFyaWF0aW9uOiAkKCdbZGF0YS13aXNobGlzdC1hZGRdIFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHN0b2NrOiB7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tkYXRhLXByb2R1Y3Qtc3RvY2tdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBza3U6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnNrdS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXNrdV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwYzoge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQudXBjLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3QtdXBjXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICR3YWxsZXRCdXR0b25zOiAkKCdbZGF0YS1hZGQtdG8tY2FydC13YWxsZXQtYnV0dG9uc10nLCAkc2NvcGUpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgdGhlIHByaWNpbmcgZWxlbWVudHMgdGhhdCB3aWxsIHNob3cgdXAgb25seSB3aGVuIHRoZSBwcmljZSBleGlzdHMgaW4gQVBJXG4gICAgICogQHBhcmFtIHZpZXdNb2RlbFxuICAgICAqL1xuICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVWaWV3KGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gIWRhdGEuaW5zdG9ja1xuICAgICAgICAgICAgPyAoZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEub3V0X29mX3N0b2NrX21lc3NhZ2UgfHwgdGhpcy5jb250ZXh0Lm91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSlcbiAgICAgICAgICAgIDogKGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5zaG93TWVzc2FnZUJveChtZXNzYWdlKTtcblxuICAgICAgICBpZiAoZGF0YS5wcmljZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBkYXRhLnByaWNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLndlaWdodCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3ZWlnaHQuaHRtbChkYXRhLndlaWdodC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHZhcmlhdGlvbl9pZCBpZiBpdCBleGlzdHMgZm9yIGFkZGluZyB0byB3aXNobGlzdFxuICAgICAgICBpZiAoZGF0YS52YXJpYW50SWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuc2t1KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KGRhdGEuc2t1KTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS51cGMpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoZGF0YS51cGMpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBzdG9jayB2aWV3IGlzIG9uIChDUCBzZXR0aW5ncylcbiAgICAgICAgaWYgKHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmxlbmd0aCAmJiB0eXBlb2YgZGF0YS5zdG9jayA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdG9jayBjb250YWluZXIgaXMgaGlkZGVuLCBzaG93XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKTtcbiAgICAgICAgdGhpcy51cGRhdGVXYWxsZXRCdXR0b25zVmlldyhkYXRhKTtcblxuICAgICAgICAvLyBJZiBCdWxrIFByaWNpbmcgcmVuZGVyZWQgSFRNTCBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcyAmJiBjb250ZW50KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChkYXRhLmJ1bGtfZGlzY291bnRfcmF0ZXMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZFRvQ2FydFdyYXBwZXIgPSAkKCcjYWRkLXRvLWNhcnQtd3JhcHBlcicpO1xuXG4gICAgICAgIGlmIChhZGRUb0NhcnRXcmFwcGVyLmlzKCc6aGlkZGVuJykgJiYgZGF0YS5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgICAgYWRkVG9DYXJ0V3JhcHBlci5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcblxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cbiAgICAgICAgICAgICAgICBgJHtwcmljZS5wcmljZV9yYW5nZS5taW4ud2l0aF90YXguZm9ybWF0dGVkfSAtICR7cHJpY2UucHJpY2VfcmFuZ2UubWF4LndpdGhfdGF4LmZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aFRheC4kc3Bhbi5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cbiAgICAgICAgICAgICAgICBgJHtwcmljZS5wcmljZV9yYW5nZS5taW4ud2l0aG91dF90YXguZm9ybWF0dGVkfSAtICR7cHJpY2UucHJpY2VfcmFuZ2UubWF4LndpdGhvdXRfdGF4LmZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aG91dFRheC4kc3Bhbi5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBhbiBtZXNzYWdlIGJveCBpZiBhIG1lc3NhZ2UgaXMgcGFzc2VkXG4gICAgICogSGlkZSB0aGUgYm94IGlmIHRoZSBtZXNzYWdlIGlzIGVtcHR5XG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICovXG4gICAgc2hvd01lc3NhZ2VCb3gobWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJyk7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQobWVzc2FnZSk7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXcoZGF0YSkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgIGNvbnN0IGlzVmFsaWRGb3JtID0gdmlld01vZGVsLiRhZGRUb0NhcnRGb3JtWzBdLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgdGhpcy50b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShpc1ZhbGlkRm9ybSAmJiBkYXRhLnB1cmNoYXNhYmxlICYmIGRhdGEuaW5zdG9jayk7XG4gICAgfVxuXG4gICAgdG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkoc2hvdWxkU2hvdykge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG5cbiAgICAgICAgaWYgKHNob3VsZFNob3cpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdhbGxldEJ1dHRvbnMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkge1xuICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcblxuICAgICAgICByZXR1cm4gJHBhcmVudCA/ICRwYXJlbnQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZScpIDogbnVsbDtcbiAgICB9XG5cbiAgICBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgaXMgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiBhIHNlbGVjdCBkcm9wZG93biwgc2VsZWN0IHRoZSBmaXJzdCBvcHRpb24gKE1FUkMtNjM5KVxuICAgICAgICAgICAgaWYgKCRzZWxlY3QudmFsKCkgPT09ICRhdHRyaWJ1dGUuYXR0cigndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzQmFzZSwgeyBvcHRpb25DaGFuZ2VEZWNvcmF0b3IgfSBmcm9tICcuL3Byb2R1Y3QtZGV0YWlscy1iYXNlJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi8uLi9wYXBhdGhlbWVzL2V5ZXZhL2ltYWdlLWdhbGxlcnknOyAvLyBwYXBhdGhlbWVzLWV5ZXZhIGVkaXRlZFxuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBhbGVydE1vZGFsLCBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgeyBpc0VtcHR5LCBpc1BsYWluT2JqZWN0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuaW1wb3J0IHsgbm9ybWFsaXplRm9ybURhdGEgfSBmcm9tICcuL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXJJRSwgY29udmVydEludG9BcnJheSB9IGZyb20gJy4vdXRpbHMvaWUtaGVscGVycyc7XG5pbXBvcnQgYmFubmVyVXRpbHMgZnJvbSAnLi91dGlscy9iYW5uZXItdXRpbHMnO1xuaW1wb3J0IGN1cnJlbmN5U2VsZWN0b3IgZnJvbSAnLi4vZ2xvYmFsL2N1cnJlbmN5LXNlbGVjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBQcm9kdWN0RGV0YWlsc0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0ge30pIHtcbiAgICAgICAgc3VwZXIoJHNjb3BlLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydC1pdGVtLWFkZF0gLmxvYWRpbmdPdmVybGF5Jyk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5ID0gbmV3IEltYWdlR2FsbGVyeSgkKCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScsIHRoaXMuJHNjb3BlKSk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LmluaXQoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5RdWFudGl0eUNoYW5nZSgpO1xuICAgICAgICB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlID0gJCgnLnN3YXRjaC1vcHRpb24tbWVzc2FnZScpO1xuICAgICAgICB0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZSA9IHt9O1xuICAgICAgICB0aGlzLnN3YXRjaEdyb3VwSWRMaXN0ID0gJCgnW2lkXj1cInN3YXRjaEdyb3VwXCJdJykubWFwKChfLCBncm91cCkgPT4gJChncm91cCkuYXR0cignaWQnKSk7XG4gICAgICAgIHRoaXMuc3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGVTZWxlY3RvcigpO1xuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKTtcblxuICAgICAgICBpZiAoJGZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRmb3JtLmZpbmQoJ2lucHV0I2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScsICRmb3JtKTtcbiAgICAgICAgdGhpcy5iaW5kUmVuZXdpbmdEYXRhUGxhblZpc2liaWxpdHkoJHByb2R1Y3RPcHRpb25zRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xuICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0U3dhdGNoR3JvdXAgPSAkKCdbaWQqPVwiYXR0cmlidXRlX3N3YXRjaFwiXScsICRmb3JtKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RTd2F0Y2hMYWJlbHMgPSAkKCcuZm9ybS1vcHRpb24tc3dhdGNoJywgJGZvcm0pO1xuICAgICAgICBjb25zdCBwbGFjZVN3YXRjaExhYmVsSW1hZ2UgPSAoXywgbGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb25JbWFnZSA9ICQoJy5mb3JtLW9wdGlvbi1leHBhbmRlZCcsICQobGFiZWwpKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkltYWdlV2lkdGggPSAkb3B0aW9uSW1hZ2Uub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgY29uc3QgZXh0ZW5kZWRPcHRpb25JbWFnZU9mZnNldExlZnQgPSA1NTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmlnaHQgfSA9IGxhYmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIgPSB3aW5kb3cuc2NyZWVuLndpZHRoIC0gcmlnaHQ7XG4gICAgICAgICAgICBjb25zdCBzaGlmdFZhbHVlID0gb3B0aW9uSW1hZ2VXaWR0aCAtIGVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyO1xuXG4gICAgICAgICAgICBpZiAoZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIgPCAob3B0aW9uSW1hZ2VXaWR0aCArIGV4dGVuZGVkT3B0aW9uSW1hZ2VPZmZzZXRMZWZ0KSkge1xuICAgICAgICAgICAgICAgICRvcHRpb25JbWFnZS5jc3MoJ2xlZnQnLCBgJHtzaGlmdFZhbHVlID4gMCA/IC1zaGlmdFZhbHVlIDogc2hpZnRWYWx1ZX1weGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRUb0NhcnRWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICAkLmVhY2goJHByb2R1Y3RTd2F0Y2hMYWJlbHMsIHBsYWNlU3dhdGNoTGFiZWxJbWFnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb250ZXh0LnNob3dTd2F0Y2hOYW1lcykge1xuICAgICAgICAgICAgdGhpcy4kc3dhdGNoT3B0aW9uTWVzc2FnZS5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcblxuICAgICAgICAgICAgJHByb2R1Y3RTd2F0Y2hHcm91cC5vbignY2hhbmdlJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzd2F0Y2hHcm91cEVsZW1lbnQgPSB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3dhdGNoTmFtZU9uT3B0aW9uKCQodGFyZ2V0KSwgJChzd2F0Y2hHcm91cEVsZW1lbnQpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkLmVhY2goJHByb2R1Y3RTd2F0Y2hHcm91cCwgKF8sIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzd2F0Y2hHcm91cEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmlzKCc6Y2hlY2tlZCcpKSB0aGlzLnNob3dTd2F0Y2hOYW1lT25PcHRpb24oJChlbGVtZW50KSwgJChzd2F0Y2hHcm91cEVsZW1lbnQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCRwcm9kdWN0T3B0aW9uc0VsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkZm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsICRmb3JtWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHByb2R1Y3QgYXR0cmlidXRlcy4gQWxzbyB1cGRhdGUgdGhlIGluaXRpYWwgdmlldyBpbiBjYXNlIGl0ZW1zIGFyZSBvb3NcbiAgICAgICAgLy8gb3IgaGF2ZSBkZWZhdWx0IHZhcmlhbnQgcHJvcGVydGllcyB0aGF0IGNoYW5nZSB0aGUgdmlld1xuICAgICAgICBpZiAoKGlzRW1wdHkocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKSB8fCBoYXNEZWZhdWx0T3B0aW9ucykgJiYgaGFzT3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkNoYW5nZUNhbGxiYWNrID0gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yLmNhbGwodGhpcywgaGFzRGVmYXVsdE9wdGlvbnMpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKCRwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIG9wdGlvbkNoYW5nZUNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgYmFubmVyVXRpbHMuZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuc2hvdygpO1xuXG4gICAgICAgIHRoaXMucHJldmlld01vZGFsID0gbW9kYWxGYWN0b3J5KCcjcHJldmlld01vZGFsJylbMF07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBZGRUb0NhcnRWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSA+IC5mb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbCcsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5udW1iZXJzT25seSh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucHJvZHVjdFF1YW50aXR5RXJyb3JNZXNzYWdlLFxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHN0b3JlSW5pdE1lc3NhZ2VzRm9yU3dhdGNoZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN3YXRjaEdyb3VwSWRMaXN0Lmxlbmd0aCAmJiBpc0VtcHR5KHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlKSkge1xuICAgICAgICAgICAgdGhpcy5zd2F0Y2hHcm91cElkTGlzdC5lYWNoKChfLCBzd2F0Y2hHcm91cElkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZVtzd2F0Y2hHcm91cElkXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZVtzd2F0Y2hHcm91cElkXSA9ICQoYCMke3N3YXRjaEdyb3VwSWR9IH4gLnN3YXRjaC1vcHRpb24tbWVzc2FnZWApLnRleHQoKS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh2YWx1ZSkuaXMoJzpoaWRkZW4nKSB8fCB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhbnRzbGlzdCA9IGNvbnZlcnRJbnRvQXJyYXkodmFsdWUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCA9IGlucHQgPT4gaW5wdC5kYXRhc2V0LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSA9PT0gY2hlY2tlZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0KVswXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmNoaWxkcmVuWzBdIDogY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpZZXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJykgOiAndW5zYXRpc2ZpZWQnO1xuICAgICAgICBjb25zdCB2aWV3ID0gJCgnLnByb2R1Y3RWaWV3Jyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RWYXJpYW50KSB7XG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9IHByb2R1Y3RWYXJpYW50ID09PSAndW5zYXRpc2ZpZWQnID8gJycgOiBwcm9kdWN0VmFyaWFudDtcbiAgICAgICAgICAgIGlmICh2aWV3LmF0dHIoJ2RhdGEtZXZlbnQtdHlwZScpKSB7XG4gICAgICAgICAgICAgICAgdmlldy5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSB2aWV3LmZpbmQoJy5wcm9kdWN0Vmlldy10aXRsZScpWzBdLmlubmVyVGV4dC5yZXBsYWNlKC9cIi9nLCAnXFxcXCQmJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9ICQoYFtkYXRhLW5hbWU9XCIke3Byb2R1Y3ROYW1lfVwiXWApO1xuICAgICAgICAgICAgICAgIGNhcmQuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kUmVuZXdpbmdEYXRhUGxhblZpc2liaWxpdHkoJHByb2R1Y3RPcHRpb25zRWxlbWVudCkge1xuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9mZignY2hhbmdlLnJlbmV3aW5nRGF0YVBsYW4nLCAnW25hbWU9XCJhdHRyaWJ1dGVbMTMzMDNdXCJdJyk7XG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NoYW5nZS5yZW5ld2luZ0RhdGFQbGFuJywgJ1tuYW1lPVwiYXR0cmlidXRlWzEzMzAzXVwiXScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlUmVuZXdpbmdEYXRhUGxhbkZpZWxkcygkcHJvZHVjdE9wdGlvbnNFbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzKCRwcm9kdWN0T3B0aW9uc0VsZW1lbnQpO1xuICAgIH1cblxuICAgIHRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoJHByb2R1Y3RPcHRpb25zRWxlbWVudCkge1xuICAgICAgICBpZiAoISRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgfHwgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRyZW5ld2luZ1JhZGlvID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudFxuICAgICAgICAgICAgLmZpbmQoJ1tuYW1lPVwiYXR0cmlidXRlWzEzMzAzXVwiXVt2YWx1ZT1cIjE2OThcIl0nKVxuICAgICAgICAgICAgLmZpcnN0KCk7XG5cbiAgICAgICAgaWYgKCRyZW5ld2luZ1JhZGlvLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkSGlkZUZpZWxkcyA9ICRyZW5ld2luZ1JhZGlvLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgICBjb25zdCBmaWVsZElkcyA9IFsxMzMwNCwgMTMzMDUsIDEzMzA2XTtcblxuICAgICAgICBmaWVsZElkcy5mb3JFYWNoKGZpZWxkSWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7ZmllbGRJZH1cIl1gKS5maXJzdCgpO1xuICAgICAgICAgICAgaWYgKCRmaWVsZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRIaWRlRmllbGRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlSGlkZGVuTW9kaWZpZXJGaWVsZCgkZmllbGQpO1xuICAgICAgICAgICAgICAgICRmaWVsZC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKS5yZW1vdmVDbGFzcygnZm9ybS1maWVsZC0tZXJyb3InKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVTaG93bk1vZGlmaWVyRmllbGQoJGZpZWxkKTtcbiAgICAgICAgICAgICAgICAkZmllbGQuY3NzKCdkaXNwbGF5JywgJycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc2FibGVIaWRkZW5Nb2RpZmllckZpZWxkKCRmaWVsZCkge1xuICAgICAgICAkZmllbGQuZmluZCgnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKSwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKF9pLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG5cbiAgICAgICAgICAgIGlmICghJGVsLmlzKCdbZGF0YS1vcmlnaW5hbC1yZXF1aXJlZF0nKSkge1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdkYXRhLW9yaWdpbmFsLXJlcXVpcmVkJywgJGVsLnByb3AoJ3JlcXVpcmVkJykgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGVsLnByb3AoJ3JlcXVpcmVkJywgZmFsc2UpLnJlbW92ZUF0dHIoJ3JlcXVpcmVkJyk7XG5cbiAgICAgICAgICAgIGlmICgkZWwuaXMoJzpjaGVja2JveCwgOnJhZGlvJykpIHtcbiAgICAgICAgICAgICAgICAkZWwucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJGVsLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRlbC5wcm9wKCdzZWxlY3RlZEluZGV4JywgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlbmFibGVTaG93bk1vZGlmaWVyRmllbGQoJGZpZWxkKSB7XG4gICAgICAgICRmaWVsZC5maW5kKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoX2ksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IHdhc1JlcXVpcmVkID0gJGVsLmF0dHIoJ2RhdGEtb3JpZ2luYWwtcmVxdWlyZWQnKSA9PT0gJ3RydWUnO1xuXG4gICAgICAgICAgICAkZWwucHJvcCgncmVxdWlyZWQnLCB3YXNSZXF1aXJlZCk7XG4gICAgICAgICAgICBpZiAod2FzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAkZWwuYXR0cigncmVxdWlyZWQnLCAnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgd2luZG93IGlzIGJlaW5nIHJ1biBpbnNpZGUgYW4gaWZyYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNSdW5uaW5nSW5JZnJhbWUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgcHJvZHVjdCBvcHRpb25zIGNoYW5nZXNcbiAgICAgKlxuICAgICAqL1xuICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICAvLyBEbyBub3QgdHJpZ2dlciBhbiBhamF4IHJlcXVlc3QgaWYgaXQncyBhIGZpbGUgb3IgaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhwcm9kdWN0QXR0cmlidXRlc0RhdGEsIHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlbmV3aW5nRGF0YVBsYW5GaWVsZHMoJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgICAgICBiYW5uZXJVdGlscy5kaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudChwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRmb3JtKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRjb250ZXh0ID0gJGZvcm0ucGFyZW50cygnLnByb2R1Y3RWaWV3JykuZmluZCgnLnByb2R1Y3RWaWV3LWluZm8nKTtcbiAgICAgICAgICAgICAgICBtb2RhbEZhY3RvcnkoJ1tkYXRhLXJldmVhbF0nLCB7ICRjb250ZXh0IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb25Qcm9kdWN0T3B0aW9uc0NoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaWYgdGhpcyBzZXR0aW5nIGlzIGVuYWJsZWQgaW4gUGFnZSBCdWlsZGVyXG4gICAgICogc2hvdyBuYW1lIGZvciBzd2F0Y2ggb3B0aW9uXG4gICAgICovXG4gICAgc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkc3dhdGNoLCAkc3dhdGNoR3JvdXApIHtcbiAgICAgICAgY29uc3Qgc3dhdGNoTmFtZSA9ICRzd2F0Y2guYXR0cignYXJpYS1sYWJlbCcpO1xuICAgICAgICBjb25zdCBhY3RpdmVTd2F0Y2hHcm91cElkID0gJHN3YXRjaEdyb3VwLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScpO1xuICAgICAgICBjb25zdCAkc3dhdGNoT3B0aW9uTWVzc2FnZSA9ICQoYCMke2FjdGl2ZVN3YXRjaEdyb3VwSWR9IH4gLnN3YXRjaC1vcHRpb24tbWVzc2FnZWApO1xuXG4gICAgICAgICQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nLCAkc3dhdGNoR3JvdXApLnRleHQoc3dhdGNoTmFtZSk7XG4gICAgICAgICRzd2F0Y2hPcHRpb25NZXNzYWdlLnRleHQoYCR7dGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2VbYWN0aXZlU3dhdGNoR3JvdXBJZF19ICR7c3dhdGNoTmFtZX1gKTtcbiAgICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkc3dhdGNoT3B0aW9uTWVzc2FnZSwgJ3N0YXR1cycsICdhc3NlcnRpdmUnKTtcbiAgICB9XG5cbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gISEkZWxlbWVudC5wYXJlbnRzKCcucXVpY2tWaWV3JykubGVuZ3RoO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QoaW1hZ2UpKSB7XG4gICAgICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YSxcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC56b29tU2l6ZSB9LFxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgIFNob3VsZCBtYXRjaCB6b29tIHNpemUgdXNlZCBmb3IgZGF0YS16b29tLWltYWdlIGluXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcblxuICAgICAgICAgICAgICAgICAgICBOb3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIGltYWdlIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHNyY3NldFxuXG4gICAgICAgICAgICAgICAgICAgIEFsc28gbm90ZSB0aGF0IGdldFNyY3NldCByZXR1cm5zIGEgc2ltcGxlIHNyYyBzdHJpbmcgd2hlbiBleGFjdGx5IG9uZSBzaXplIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxuICAgICAgICAgICAgICAgIHsgJzF4JzogdGhpcy5jb250ZXh0LnByb2R1Y3RTaXplIH0sXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIGZhbGxiYWNrIGltYWdlIHNpemUgdXNlZCBmb3IgdGhlIG1haW4gcHJvZHVjdCBpbWFnZSBpblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3Qtdmlldy5odG1sXG5cbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcblxuICAgICAgICAgICAgICAgICAgICBBbHNvIG5vdGUgdGhhdCBnZXRTcmNzZXQgcmV0dXJucyBhIHNpbXBsZSBzcmMgc3RyaW5nIHdoZW4gZXhhY3RseSBvbmUgc2l6ZSBpcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoaW1hZ2UuZGF0YSk7XG5cbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnNldEFsdGVybmF0ZUltYWdlKHtcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkucmVzdG9yZUltYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEhhbmRsZSBhY3Rpb24gd2hlbiB0aGUgc2hvcHBlciBjbGlja3Mgb24gKyAvIC0gZm9yIHF1YW50aXR5XG4gICAgICpcbiAgICAgKi9cbiAgICBsaXN0ZW5RdWFudGl0eUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NsaWNrJywgJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gYnV0dG9uJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gdmlld01vZGVsLnF1YW50aXR5LiRpbnB1dDtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWluID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWF4ID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcblxuICAgICAgICAgICAgbGV0IHF0eSA9IGZvcm1zLm51bWJlcnNPbmx5KCRpbnB1dC52YWwoKSkgPyBwYXJzZUludCgkaW5wdXQudmFsKCksIDEwKSA6IHF1YW50aXR5TWluO1xuICAgICAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgICAgICAgaWYgKCR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnKSB7XG4gICAgICAgICAgICAgICAgcXR5ID0gZm9ybXMudmFsaWRhdGVJbmNyZWFzZUFnYWluc3RNYXhCb3VuZGFyeShxdHksIHF1YW50aXR5TWF4KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5ID4gMSkge1xuICAgICAgICAgICAgICAgIHF0eSA9IGZvcm1zLnZhbGlkYXRlRGVjcmVhc2VBZ2FpbnN0TWluQm91bmRhcnkocXR5LCBxdWFudGl0eU1pbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBoaWRkZW4gaW5wdXRcbiAgICAgICAgICAgIHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQudmFsKHF0eSk7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGV4dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiR0ZXh0LnRleHQocXR5KTtcbiAgICAgICAgICAgIC8vIHBlcmZvcm0gdmFsaWRhdGlvbiBhZnRlciB1cGRhdGluZyBwcm9kdWN0IHF1YW50aXR5XG4gICAgICAgICAgICB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUHJldmVudCB0cmlnZ2VyaW5nIHF1YW50aXR5IGNoYW5nZSB3aGVuIHByZXNzaW5nIGVudGVyXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdrZXlwcmVzcycsICcuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBldmVudC53aGljaCwgdGhlbiB1c2UgZXZlbnQud2hpY2gsIG90aGVyd2lzZSB1c2UgZXZlbnQua2V5Q29kZVxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XG4gICAgICAgICAgICBpZiAoeCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5vbigna2V5dXAnLCAnLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIGNhcnRcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkKGV2ZW50LnRhcmdldCkpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgLnZhbCh3YWl0TWVzc2FnZSlcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChub3JtYWxpemVGb3JtRGF0YShuZXcgRm9ybURhdGEoZm9ybSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY3VycmVuY3lTZWxlY3RvcihyZXNwb25zZS5kYXRhLmNhcnRfaWQpO1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkYWRkVG9DYXJ0QnRuKSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydE1vZGFsKCkuJHByZU1vZGFsRm9jdXNlZEVsID0gJGFkZFRvQ2FydEJ0bjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPcGVuIHByZXZpZXcgbW9kYWwgYW5kIHVwZGF0ZSBjb250ZW50XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aWV3TW9kYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kbW9kYWwuYWRkQ2xhc3MoJ2FwcGxlLXBheS1zdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRhZGRUb0NhcnRCdG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRwcmVNb2RhbEZvY3VzZWRFbCA9ICRhZGRUb0NhcnRCdG47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0Q29udGVudCh0aGlzLnByZXZpZXdNb2RhbCwgcmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgICAgICAgICAvLyBpZiBubyBtb2RhbCwgcmVkaXJlY3QgdG8gdGhlIGNhcnQgcGFnZVxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbyhyZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5jYXJ0X3VybCB8fCB0aGlzLmNvbnRleHQudXJscy5jYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkYWRkVG9DYXJ0QnRuLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2FydCBjb250ZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhcnRJdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L3ByZXZpZXcnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdDogY2FydEl0ZW1JZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogNCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIG9uQ29tcGxldGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZGlyZWN0IHRvIHVybFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHJlZGlyZWN0VG8odXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUnVubmluZ0luSWZyYW1lKCkgJiYgIXdpbmRvdy5pZnJhbWVTZGspIHtcbiAgICAgICAgICAgIHdpbmRvdy50b3AubG9jYXRpb24gPSB1cmw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgY2FydCBjb250ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01vZGFsfSBtb2RhbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXJ0SXRlbUlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZVxuICAgICAqL1xuICAgIHVwZGF0ZUNhcnRDb250ZW50KG1vZGFsLCBjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FydCBjb3VudGVyXG4gICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0UXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIG1vZGFsLiRjb250ZW50KTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0Q291bnRlciA9ICQoJy5uYXZVc2VyLWFjdGlvbiAuY2FydC1jb3VudCcpO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkY2FydFF1YW50aXR5LmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG4gICAgICAgICAgICBjb25zdCAkcHJvbW90aW9uQmFubmVyID0gJCgnW2RhdGEtcHJvbW90aW9uLWJhbm5lcl0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRiYWNrVG9TaG9wcHBpbmdCdG4gPSAkKCcucHJldmlld0NhcnRDaGVja291dCA+IFtkYXRhLXJldmVhbC1jbG9zZV0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRtb2RhbENsb3NlQnRuID0gJCgnI3ByZXZpZXdNb2RhbCA+IC5tb2RhbC1jbG9zZScpO1xuICAgICAgICAgICAgY29uc3QgYmFubmVyVXBkYXRlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdENvbnRhaW5lciA9ICQoJyNtYWluLWNvbnRlbnQgPiAuY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAkcHJvZHVjdENvbnRhaW5lci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheSBwZHAtdXBkYXRlXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgJCgnLmxvYWRpbmdPdmVybGF5LnBkcC11cGRhdGUnLCAkcHJvZHVjdENvbnRhaW5lcikuc2hvdygpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcygnY2FydC1jb3VudC0tcG9zaXRpdmUnKTtcbiAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuXG4gICAgICAgICAgICBpZiAob25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHByb21vdGlvbkJhbm5lci5sZW5ndGggJiYgJGJhY2tUb1Nob3BwcGluZ0J0bi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkYmFja1RvU2hvcHBwaW5nQnRuLm9uKCdjbGljaycsIGJhbm5lclVwZGF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICRtb2RhbENsb3NlQnRuLm9uKCdjbGljaycsIGJhbm5lclVwZGF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBzdXBlci51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKTtcbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdEltYWdlKGRhdGEuaW1hZ2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpIHtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGFJdGVtcyA9ICRmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdERldGFpbHMgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZvcm1EYXRhSXRlbSBvZiBmb3JtRGF0YUl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBmb3JtRGF0YUl0ZW07XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAncHJvZHVjdF9pZCcpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5wcm9kdWN0SWQgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3F0eVtdJykge1xuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLnF1YW50aXR5ID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5hbWUubWF0Y2goL2F0dHJpYnV0ZS8pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE9wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IE51bWJlcihuYW1lLm1hdGNoKC9cXGQrL2cpWzBdKSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5vcHRpb25TZWxlY3Rpb25zID0gcHJvZHVjdERldGFpbHM/Lm9wdGlvblNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgPyBbLi4ucHJvZHVjdERldGFpbHMub3B0aW9uU2VsZWN0aW9ucywgcHJvZHVjdE9wdGlvbl1cbiAgICAgICAgICAgICAgICAgICAgOiBbcHJvZHVjdE9wdGlvbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnb25Qcm9kdWN0VXBkYXRlJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDogeyBwcm9kdWN0RGV0YWlscyB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGF0ZVNlbGVjdG9yKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5lYWNoKChpLCBzY29wZSkgPT4ge1xuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGF5cyhkYXRlT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGhTZWxlY3RvciA9IGRhdGVPcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWUkPVwiW21vbnRoXVwiXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheVNlbGVjdG9yID0gZGF0ZU9wdGlvbi5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZSQ9XCJbZGF5XVwiXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHllYXJTZWxlY3RvciA9IGRhdGVPcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWUkPVwiW3llYXJdXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChtb250aFNlbGVjdG9yLnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KHllYXJTZWxlY3Rvci52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgIGxldCBkYXlzSW5Nb250aDtcblxuICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKG1vbnRoKSAmJiAhTnVtYmVyLmlzTmFOKHllYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c0luTW9udGggPSAoKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApIHx8IHllYXIgJSA0MDAgPT09IDApID8gMjkgOiAyODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IGNhc2UgNjogY2FzZSA5OiBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c0luTW9udGggPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c0luTW9udGggPSAzMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGRheSA9IDI5OyBkYXkgPD0gMzE7IGRheSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRheVNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7ZGF5fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5IDw9IGRheXNJbk1vbnRoICYmICFvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheVNlbGVjdG9yLm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oZGF5LCBkYXkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXkgPiBkYXlzSW5Nb250aCAmJiBvcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJChzY29wZSkub24oJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZU9wdGlvbiA9IGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsb3Nlc3QgJiYgZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9ZGF0ZV0nKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZU9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEYXlzKGRhdGVPcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzY29wZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1kYXRlXScpLmZvckVhY2goKGRhdGVPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVEYXlzKGRhdGVPcHRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBzdHJpbmcgdmFsdWVzIGZyb20gdGhlIGZvcm1EYXRhXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4qL1xuZXhwb3J0IGNvbnN0IGZpbHRlckVtcHR5VmFsdWVzRnJvbUZvcm0gPSBmb3JtRGF0YSA9PiB7XG4gICAgY29uc3QgcmVzID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICh2YWwgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmVzLmFwcGVuZChrZXksIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTY3Mjk5Mi9hamF4LXJlcXVlc3QtZmFpbHMtd2hlbi1zZW5kaW5nLWZvcm1kYXRhLWluY2x1ZGluZy1lbXB0eS1maWxlLWlucHV0LWluLXNhZmFyaVxuICogU2FmYXJpIGJyb3dzZXIgd2l0aCBqcXVlcnkgMy4zLjEgaGFzIGFuIGlzc3VlIHVwbG9hZGluZyBlbXB0eSBmaWxlIHBhcmFtZXRlcnMuIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybSBwYXJhbXNcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSA9IGZvcm1EYXRhID0+IHtcbiAgICBjb25zdCByZXMgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCEodmFsIGluc3RhbmNlb2YgRmlsZSkgfHwgdmFsLm5hbWUgfHwgdmFsLnNpemUpIHtcbiAgICAgICAgICAgICAgICByZXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIGVtcHR5IHN0cmluZyB2YWx1ZXMgYW5kIGVtcHR5IGZpbGVzIGZyb20gdGhlIGZvcm1EYXRhXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVGb3JtRGF0YSA9IGZvcm1EYXRhID0+IGZpbHRlckVtcHR5VmFsdWVzRnJvbUZvcm0oZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSk7XG4iLCJpbXBvcnQgeyBpc0Jyb3dzZXJJRSB9IGZyb20gJy4vaWUtaGVscGVycyc7XG5cbmNvbnN0IGJhbm5lclV0aWxzID0ge1xuICAgIGRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50OiAocHJvZHVjdEF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZSB8fCBpc0Jyb3dzZXJJRSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwcmljZSA9IDA7XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZS5wcmljZV9yYW5nZSkge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRob3V0X3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRoX3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudCgnYmlnY29tbWVyY2UucHJvZHVjdHByaWNlY2hhbmdlJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiBwcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJhbm5lclV0aWxzO1xuIiwiZXhwb3J0IGNvbnN0IGlzQnJvd3NlcklFID0gISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0SW50b0FycmF5ID0gY29sbGVjdGlvbiA9PiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb2xsZWN0aW9uKTtcbiIsImltcG9ydCAnZWFzeXpvb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRnYWxsZXJ5KSB7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZSA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbWFpbl0nKTtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlTmVzdGVkID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKTtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcyA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7fTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRJbWFnZVpvb20oKTtcbiAgICB9XG5cbiAgICBzZXRNYWluSW1hZ2UoaW1nT2JqKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0geyAuLi5pbWdPYmogfTtcblxuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgICAgIHRoaXMuc3dhcE1haW5JbWFnZSgpO1xuICAgIH1cblxuICAgIHNldEFsdGVybmF0ZUltYWdlKGltZ09iaikge1xuICAgICAgICBpZiAoIXRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlZEltYWdlID0ge1xuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybDogdGhpcy4kbWFpbkltYWdlLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgICAgIHpvb21JbWFnZVVybDogdGhpcy4kbWFpbkltYWdlLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpLFxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogdGhpcy4kbWFpbkltYWdlLmZpbmQoJ2ltZycpLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiB0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoaW1nT2JqKTtcbiAgICB9XG5cbiAgICByZXN0b3JlSW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnNhdmVkSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKHRoaXMuc2F2ZWRJbWFnZSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zYXZlZEltYWdlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3SW1hZ2UoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGltZ09iaiA9IHtcbiAgICAgICAgICAgIG1haW5JbWFnZVVybDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybCcpLFxuICAgICAgICAgICAgem9vbUltYWdlVXJsOiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybCcpLFxuICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2Utc3Jjc2V0JyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgICAgIG1haW5JbWFnZUFsdDogJHRhcmdldC5jaGlsZHJlbigpLmZpcnN0KCkuYXR0cignYWx0JyksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKGltZ09iaik7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN3YXBNYWluSW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0IGlzQnJvd3NlcklFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnVHJpZGVudCcpO1xuXG4gICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5zd2FwKFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2Uuem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuJG1haW5JbWFnZS5hdHRyKHtcbiAgICAgICAgICAgICdkYXRhLXpvb20taW1hZ2UnOiB0aGlzLmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQuYXR0cih7XG4gICAgICAgICAgICBhbHQ6IHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZUFsdCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VBbHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc0Jyb3dzZXJJRSkge1xuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZXNJRSA9IHtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoJHt0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmx9KWAsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1vcmlnaW4nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY29udGFpbicsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQuY3NzKGZhbGxiYWNrU3R5bGVzSUUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgJGltYWdlQ29udGFpbmVyID0gJCgnLnByb2R1Y3RWaWV3LWltYWdlJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICRpbWFnZUNvbnRhaW5lci5oZWlnaHQoKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSAkaW1hZ2VDb250YWluZXIud2lkdGgoKTtcblxuICAgICAgICBjb25zdCAkaW1hZ2UgPSB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuJHpvb207XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICRpbWFnZS5oZWlnaHQoKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAkaW1hZ2Uud2lkdGgoKTtcblxuICAgICAgICBpZiAoaGVpZ2h0IDwgY29udGFpbmVySGVpZ2h0IHx8IHdpZHRoIDwgY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJbWFnZVpvb20oKSB7XG4gICAgICAgIHRoaXMuZWFzeXpvb20gPSB0aGlzLiRtYWluSW1hZ2UuZWFzeVpvb20oe1xuICAgICAgICAgICAgb25TaG93OiAoKSA9PiB0aGlzLmNoZWNrSW1hZ2UoKSxcbiAgICAgICAgICAgIGVycm9yTm90aWNlOiAnJyxcbiAgICAgICAgICAgIGxvYWRpbmdOb3RpY2U6ICcnLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRzZWxlY3RhYmxlSW1hZ2VzLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3SW1hZ2UuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2luaGVyaXRzTG9vc2UiLCJjb25zdHJ1Y3RvciIsIl9zZXRQcm90b3R5cGVPZiIsIm11c3RhY2hlIiwiY3JlYXRlRm9jdXNUcmFwIiwidG9vbHMiLCJDb3JuZXJzdG9uZUltYWdlR2FsbGVyeSIsIkRFRkFVTFRfU1RFUCIsIkltYWdlR2FsbGVyeU1vZGFsIiwiaW1hZ2VHYWxsZXJ5IiwiJGdhbGxlcnkiLCJtb2RhbFRlbXBsYXRlIiwiJGJvZHkiLCIkIiwiY3JlYXRlTW9kYWwiLCJfcHJvdG8iLCJiaW5kRXZlbnRzIiwiX3RoaXMiLCJmaW5kIiwib2ZmIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGEiLCJjdXJyZW50VGFyZ2V0IiwiaW1hZ2VVcmwiLCJkYXRhIiwiaW1hZ2VTcmNzZXQiLCJ6b29tSW1hZ2VVcmwiLCJ2aWRlb0lkIiwic3RlcCIsImNsb3Nlc3QiLCJOdW1iZXIiLCJzcGxpdCIsIm9wZW5Nb2RhbCIsIiRnYWxsZXJ5TW9kYWwiLCJjbG9zZU1vZGFsIiwia2V5IiwiaXMiLCJ0YXJnZXQiLCJzZXRNYWluSW1hZ2UiLCJzZXRNYWluVmlkZW8iLCJ0b3RhbFN0ZXAiLCJzZXRNYWluMzYwIiwicHJldmlvdXMzNjBTdGVwIiwibmV4dDM2MFN0ZXAiLCJwbGF5MzYwIiwicGF1c2UzNjAiLCJkZXN0cm95TW9kYWwiLCJyZW1vdmUiLCJfJG1haW5JbWFnZUxpbmskZ2V0IiwiJG1haW5JbWFnZUxpbmsiLCIkbWFpbkltYWdlIiwiY2xvbmUiLCJyZW1vdmVBdHRyIiwiYXR0ciIsIm1haW5JbWFnZUxpbmtFbGVtZW50IiwiZ2V0Iiwib3V0ZXJIVE1MIiwibmFtZSIsInRleHQiLCJ2aWRlb3NMYWJlbCIsImltYWdlczM2MExhYmVsIiwiaW1hZ2VzTGFiZWwiLCJ2aWRlb3MiLCJtYXAiLCJsaSIsIl8kJGZpbmQkY2xvbmUkZ2V0IiwibGlua0VsZW1lbnQiLCJpbWFnZXMzNjAiLCJfJGVsJGdldCIsIiRlbCIsImltYWdlcyIsImZpbHRlciIsIl8kYSRnZXQiLCJyZW5kZXIiLCJoaWRlIiwiYXBwZW5kVG8iLCJpbml0SW1hZ2Vab29tIiwiZm9jdXNUcmFwIiwiZXNjYXBlRGVhY3RpdmF0ZXMiLCJyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSIsImFsbG93T3V0c2lkZUNsaWNrIiwiX3RoaXMyIiwiJGxhc3RBY3RpdmVFbGVtZW50IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYWRkQ2xhc3MiLCIkbWFpbkltZyIsInNob3ciLCJyZW1vdmVDbGFzcyIsImFjdGl2YXRlIiwic2V0VGltZW91dCIsInRyaWdnZXIiLCJfdGhpczMiLCJoaWRlTWFpblZpZGVvIiwiaGlkZTM2MFVJIiwiZGVhY3RpdmF0ZSIsIm1haW5JbWFnZVVybCIsIm1haW5JbWFnZVNyY3NldCIsInNob3dNYWluSW1hZ2UiLCJzZXRBY3RpdmVUaHVtYiIsInN3YXBNYWluSW1hZ2UiLCJoaWRlTWFpbkltYWdlIiwiX2kiLCIkaW1hZ2VDb250YWluZXIiLCJlYXN5em9vbSIsInN3YXAiLCJpc0Jyb3dzZXJJRSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluY2x1ZGVzIiwiZmFsbGJhY2tTdHlsZXNJRSIsImNzcyIsImNoZWNrSW1hZ2UiLCJjb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJjb250YWluZXJXaWR0aCIsIndpZHRoIiwiJGltYWdlIiwiJHpvb20iLCJfdGhpczQiLCJlYXN5Wm9vbSIsIm9uU2hvdyIsImVycm9yTm90aWNlIiwibG9hZGluZ05vdGljZSIsInNob3dNYWluVmlkZW8iLCJzcmMiLCJzaG93MzYwVUkiLCJzd2FwTWFpbjM2MCIsInNldDM2MEN1cnJlbnRTdGVwIiwiY3VycmVudFN0ZXAiLCJ0b3RhbCIsIl90aGlzNSIsImNsZWFySW50ZXJ2YWwiLCJpbnRlcnZhbDM2MCIsInNldEludGVydmFsIiwiQ2FyZEltYWdlR2FsbGVyeU1vZGFsIiwiX0ltYWdlR2FsbGVyeU1vZGFsMiIsIiRzY29wZSIsIl90ZW1wIiwiX3RoaXM2IiwiX3JlZiIsInByb2R1Y3RJZCIsImdyYXBoUUxUb2tlbiIsInpvb21TaXplIiwicHJvZHVjdFNpemUiLCJ0aHVtYlNpemUiLCJ0eHRWaWRlb3NMYWJlbCIsInR4dEltYWdlczM2MExhYmVsIiwidHh0SW1hZ2VzTGFiZWwiLCJsb2FkaW5nTW9kYWxUZW1wbGF0ZSIsIl9wcm90bzIiLCJvcGVuTG9hZGluZ01vZGFsIiwiX29wZW5Mb2FkaW5nTW9kYWwiLCJfY2FsbGVlIiwiX2NvbnRleHQiLCJsb2FkTW9kYWwiLCJfbG9hZE1vZGFsIiwiX2NhbGxlZTIiLCJtYWluSW1hZ2UiLCJfY29udGV4dDIiLCJmZXRjaFByb2R1Y3QiLCJpbWFnZSIsImlzRGVmYXVsdCIsImdldFNyY3NldCIsInVybFRlbXBsYXRlIiwiem9vbVVybCIsInVybCIsInRodW1ibmFpbFVybCIsImFsdFRleHQiLCJ2aWRlbyIsIlVSTCIsInNlYXJjaFBhcmFtcyIsImh0bWwiLCJfdGVtcDIiLCJfdGhpczciLCJfcmVmMiIsIl9yZWYyJGZpcnN0VmlkZW8iLCJmaXJzdFZpZGVvIiwiX3JlZjIkZmlyc3QiLCJmaXJzdDM2MCIsImZpcnN0IiwiX2ZldGNoUHJvZHVjdCIsIl9jYWxsZWUzIiwiX3RoaXMkem9vbVNpemUkc3BsaXQkIiwiem9vbVdpZHRoIiwiem9vbUhlaWdodCIsIl90aGlzJHByb2R1Y3RTaXplJHNwbCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsIl90aGlzJHRodW1iU2l6ZSRzcGxpdCIsInRodW1iV2lkdGgiLCJ0aHVtYkhlaWdodCIsInJlc3AiLCJfcmVmMyIsIl9jb250ZXh0MyIsImFqYXgiLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsInNpdGUiLCJwcm9kdWN0IiwiZWRnZXMiLCJfcmVmNCIsIm5vZGUiLCJfcmVmNSIsImN1c3RvbUZpZWxkcyIsIl9yZWY2IiwiX3JlZjciLCJJbWFnZUdhbGxlcnkiLCJfQ29ybmVyc3RvbmVJbWFnZUdhbGwiLCJfdGhpczgiLCJpbWFnZUdhbGxlcnlNb2RhbCIsIl9wcm90bzMiLCJkZWZhdWx0IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jcmVhdGVDbGFzcyIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwidXRpbHMiLCJDb3JuZXJzdG9uZVByb2R1Y3REZXRhaWxzIiwiYWxlcnRNb2RhbCIsInNob3dBbGVydE1vZGFsIiwiTW9kYWxFdmVudHMiLCJmaXhGb3JtRWxlbWVudFVuaXF1ZUlkcyIsImN1cnJlbmN5Rm9ybWF0IiwiU2FsZUNvdW50ZG93biIsIkRFQlVHX0xPRyIsIm5vcm1hbGl6ZU9wdGlvblN0cmluZyIsInMiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJlcXVhbE9wdGlvblN0cmluZyIsImIiLCJhcmVBcnJheXNFcXVhbFVub3JkZXJlZCIsImFycjEiLCJhcnIyIiwiX2FycjEiLCJzbGljZSIsInNvcnQiLCJfYXJyMiIsImV2ZXJ5IiwiaW5kZXgiLCJjYWNoZWRTZXR0aW5ncyIsImhhbmRsZVByb21pc2VzV2l0aExpbWl0IiwiX3giLCJfeDIiLCJfaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQiLCJfY2FsbGVlNyIsInByb21pc2VzIiwibGltaXQiLCJyZXN1bHRzIiwiZXhlY3V0aW5nIiwiX2xvb3AiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIl9jb250ZXh0OCIsInByb21pc2UiLCJfY29udGV4dDciLCJyZXN1bHQiLCJzcGxpY2UiLCJpbmRleE9mIiwicHVzaCIsInJhY2UiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3JlZ2VuZXJhdG9yVmFsdWVzIiwiYWxsIiwiUHJvZHVjdERldGFpbHMiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGUiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbmNhdCIsIm1vZGlmaWVyc01vZGFsT3ZlcmxheVRlbXBsYXRlIiwibW9kaWZpZXJzTW9kYWxUZW1wbGF0ZSIsIm9wdGlvblRvb2x0aXBUZW1wbGF0ZSIsIm9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlIiwib3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlIiwib3B0aW9uUHJpY2VUZW1wbGF0ZSIsIm9wdGlvblByaWNlUGxhaW5UZW1wbGF0ZSIsInN1YnRvdGFsVGVtcGxhdGUiLCJzdW1tYXJ5VGVtcGxhdGUiLCJzaG93UHJpY2VGcmVlIiwic2hvd1ByaWNlWmVybyIsImFkZFRvQ2FydFdyYXBwZXJTZWxlY3RvciIsImZldGNoT3B0aW9uUHJpY2VDYWNoZSIsImNvbnNvbGUiLCJsb2ciLCJfY29uc29sZSIsIiRmb3JtIiwiJGNob29zZU9wdGlvbnNCdG4iLCJ2YWwiLCJyZWZyZXNoUHJvZHVjdE1ldGFkYXRhIiwiZW5hYmxlTW9kaWZpZXJzTW9kYWwiLCJjcmVhdGVNb2RpZmllcnNNb2RhbCIsImJpbmRQcm9kdWN0RWRpdEV2ZW50cyIsImJpbmRTdGlja3lBZGRUb0NhcnRFdmVudHMiLCJiaW5kTW9kYWxEZXN0cm95IiwiaW5pdE9wdGlvblN0ZXBwZXIiLCJzeW5jUHJvZHVjdENhcmRRdHkiLCJpbml0U2FsZUNvdW50ZG93biIsImJpbmRSZW5ld2luZ0RhdGFQbGFuVmlzaWJpbGl0eSIsInJlbmRlcklubGluZU9wdGlvblRvb2x0aXBzIiwicmVuZGVyU3BlY1Rvb2x0aXBzIiwicGFyc2VNZXRhZGF0YSIsInNlbGVjdG9yIiwicGFyc2UiLCJwcm9kdWN0T3B0aW9ucyIsImdldFZpZXdNb2RlbCIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTIiLCJfbGVuMiIsIl9rZXkyIiwibW9kZWwiLCIkdXBkYXRlUHJvZHVjdFdyYXBwZXIiLCJ1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyIsIiRidG4iLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJwcm9wIiwiYWRkUHJvZHVjdFRvQ2FydCIsImZvcm0iLCJlZGl0UHJvZHVjdEluQ2FydCIsImVkaXRQcm9kdWN0VG9DYXJ0IiwiX2VkaXRQcm9kdWN0VG9DYXJ0IiwiJHNhdmVCdG4iLCJvcmlnaW5hbEJ0blZhbCIsIndhaXRNZXNzYWdlIiwiZm9ybURhdGEiLCJzdWNjZXNzIiwiZmFpbHVyZSIsIml0ZW1JZCIsIm5ld1F0eSIsIl90Iiwid2luZG93IiwiRm9ybURhdGEiLCJ1bmRlZmluZWQiLCIkb3ZlcmxheSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwibmV4dCIsInJlc3BvbnNlIiwiY29udGV4dCIsImVkaXRQcm9kdWN0Q2FsbGJhY2siLCJlcnJvclRleHQiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hlY2tJc1F1aWNrVmlld0NoaWxkIiwiJHByZU1vZGFsRm9jdXNlZEVsIiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJlZGl0UHJvZHVjdFF1YW50aXR5IiwidXBkYXRlQ2FydEl0ZW1RdWFudGl0eSIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiZmFpbCIsIl94aHIiLCJfc3RhdHVzIiwiZXJyb3IiLCJfeDMiLCJfeDQiLCJyZWplY3QiLCJhcGkiLCJjYXJ0IiwiaXRlbVVwZGF0ZSIsImVyciIsIl9yZXNwb25zZSRkYXRhIiwic3RhdHVzIiwiZXJyb3JzIiwiam9pbiIsInN1Ym1pdEV2ZW50IiwiRXZlbnQiLCJoYW5kbGVTdGlja3lBZGRUb0NhcnRDbGljayIsIiRidXR0b24iLCIkc3RpY2t5UXR5Iiwic2libGluZ3MiLCIkZm9ybVF0eSIsImNoZWNrVmFsaWRpdHkiLCJpbnZhbGlkRmllbGQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiZm9jdXMiLCJyZXBvcnRWYWxpZGl0eSIsIm9uZSIsImNsb3NlZCIsImVhY2giLCJmb3JtRmllbGRFbCIsIiRmb3JtRmllbGQiLCIkZGVjIiwiJGluYyIsIiRjaGVjayIsImluaXQiLCIkcmFkaW9zIiwiJGNoZWNrZWQiLCIkZmlyc3QiLCJzZWxlY3QiLCJpbmMiLCJlcSIsIm5vdCIsImhhc0NsYXNzIiwiJHVuY2hlY2siLCIkbm9uZSIsImNhcmRRdHkiLCIkcXR5IiwicXR5IiwidHh0U2FsZUNvdW50ZG93bkpTT04iLCJlbmRfaW4iLCJjb25maWd1cmUiLCJhZGQiLCJ0b2dnbGVSZW5ld2luZ0RhdGFQbGFuRmllbGRzIiwiJHByb2R1Y3RPcHRpb25zRWwiLCIkcmVuZXdpbmdSYWRpbyIsInNob3VsZEhpZGVGaWVsZHMiLCJmaWVsZElkcyIsImZvckVhY2giLCJmaWVsZElkIiwiJGZpZWxkIiwiZGlzYWJsZUhpZGRlbk1vZGlmaWVyRmllbGQiLCJlbmFibGVTaG93bk1vZGlmaWVyRmllbGQiLCJlbCIsIm9yaWdpbmFsUmVxdWlyZWQiLCJ1cGRhdGVWaWV3IiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlMyIsIl9sZW4zIiwiX2tleTMiLCJ1cGRhdGVTYWxlUGVyY2VudCIsInVwZGF0ZVNoaXBwaW5nQ291bnRkb3duIiwibWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyIsInVwZGF0ZU1vZGlmaWVyc1ZpZXciLCIkbW9kaWZpZXJzTW9kYWxPcHRpb25zIiwiJG1vZGlmaWVyc01vZGFsU3VidG90YWwiLCJzaG93T3B0aW9uSWRzIiwic3RhY2tlZFNob3dPcHRpb25JZHMiLCJub25lU2FsZXMiLCJjdXN0b21GaWVsZE5vbmVTYWxlcyIsInNob3dPcHRpb25QcmljZXMiLCJ1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbCIsIl9kYXRhJHByaWNlIiwiX2RhdGEkcHJpY2U0IiwiJGRpdiIsIiRzcGFuIiwic2FsZVBlcmNlbnQiLCJwcmljZSIsIndpdGhvdXRfdGF4IiwiX2RhdGEkcHJpY2UyIiwiX2RhdGEkcHJpY2UzIiwicnJwX3dpdGhvdXRfdGF4IiwiTWF0aCIsInJvdW5kIiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJ3aXRoX3RheCIsIl9kYXRhJHByaWNlNSIsIl9kYXRhJHByaWNlNiIsInJycF93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4IiwiJHNoaXBwaW5nQ291bnRkb3duIiwidXBkYXRlQ2FydENvbnRlbnQiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGU0IiwiY2xvc2VNb2RpZmllcnNNb2RhbCIsInByZXZpZXdNb2RhbCIsIl9sZW40IiwiX2tleTQiLCJzaG93UHJvZHVjdEltYWdlIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlNSIsIl9sZW41IiwiX2tleTUiLCIkbW9kaWZpZXJzTW9kYWxJbWciLCJfdGhpcyRpbWFnZUdhbGxlcnkkY3UiLCJjdXJyZW50SW1hZ2UiLCJmb3JtYXRQcmljZSIsInBsdXNTeW1ib2wiLCJkaXNwbGF5IiwiY3VycmVuY3lfdG9rZW4iLCJjdXJyZW5jeSIsInN5bWJvbCIsImN1cnJlbmN5X2xvY2F0aW9uIiwic3ltYm9sUGxhY2VtZW50IiwiZGVjaW1hbF90b2tlbiIsImRlY2ltYWxUb2tlbiIsImRlY2ltYWxfcGxhY2VzIiwiZGVjaW1hbFBsYWNlcyIsInRob3VzYW5kc190b2tlbiIsInRob3VzYW5kc1Rva2VuIiwiZm9ybWF0dGVkIiwiZmluZE9wdGlvblZhbHVlIiwib3B0aW9uTmFtZSIsInZhbHVlTmFtZSIsIl9oaWRlSWZPcHRpb24kdmFsdWVzIiwiaGlkZUlmT3B0aW9uIiwiZGlzcGxheV9uYW1lIiwidmFsdWVzIiwibGFiZWwiLCJvcHRpb25JZCIsImlkIiwidmFsdWVJZCIsIiRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlciIsIiRhZGRUb0NhcnRXcmFwcGVyIiwiJG1vZGlmaWVyc01vZGFsIiwidHh0Q29udGludWUiLCJwcm9kdWN0VGl0bGUiLCIkbW9kaWZpZXJzTW9kYWxDb21wbGV0ZSIsIiRtb2RpZmllcnNNb2RhbENsb3NlIiwiJG1vZGlmaWVyc01vZGFsQ29udGludWUiLCIkbW9kaWZpZXJzTW9kYWxCYWNrIiwiYXBwZW5kIiwiZ29CYWNrU3RlcCIsImludmFsaWRJbnB1dHMiLCJyZWR1Y2UiLCJfaW52YWxpZElucHV0cyIsInZhbGlkYXRlVmFyaWFudE9wdGlvbnMiLCJpbml0TW9kaWZpZXJzVmlldyIsIm9wZW5Nb2RpZmllcnNNb2RhbCIsImJlZm9yZSIsImlnbm9yZUFQSUNhbGwiLCJfdXBkYXRlTW9kaWZpZXJzVmlldyIsIl9yZWYzJGlnbm9yZUFQSUNhbGwiLCIkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5IiwiJG1vZGlmaWVyc01vZGFsVGl0bGUiLCIkbW9kaWZpZXJzTW9kYWxGb290ZXIiLCJjdXJyZW50T3B0aW9uSWQiLCJjdXJyZW50R3JvdXBOYW1lIiwiY3VycmVudEdyb3VwT3B0aW9uSWRzIiwiaGlkZU9wdGlvbklkcyIsImhpZGVPcHRpb25WYWx1ZXMiLCJ0b29sdGlwcyIsInRvb2x0aXBIZWFkaW5ncyIsIm9wdGlvblJlbmFtZXMiLCJfdGhpcyRwcm9kdWN0T3B0aW9ucyQiLCJ0aXRsZSIsImdyb3VwVG9vbHRpcCIsIiR0b29sdGlwIiwiZW1wdHkiLCJmcm9tIiwiZW50cmllcyIsInN0YXRlIiwib3B0aW9uIiwiaGlkZU9wdGlvbiIsImdyb3VwTmFtZSIsImdyb3VwT3B0aW9uSWRzIiwiaXNOb25lUmFkaW9DaGVja2VkIiwiJGZpbGUiLCJpc0ZpbGVTaG93biIsIiRkYXRlIiwiaXNPcHRpb25hbERhdGVTaG93biIsInJlcXVpcmVkIiwiJHNlbGVjdCIsImlzT3B0aW9uYWxTZWxlY3RTaG93biIsIiR0ZXh0IiwiaXNPcHRpb25hbFRleHRTaG93biIsImZvcm1WYWx1ZSIsIkZpbGUiLCJjdXN0b21GaWVsZCIsImhpZGVJZk1hdGNoIiwiY3VzdG9tRmllbGRNYXRjaEhpZGVJZiIsImdyb3VwTWF0Y2giLCJjdXN0b21GaWVsZE1hdGNoR3JvdXAiLCJfT2JqZWN0JGFzc2lnbiIsInRvb2x0aXBNYXRjaCIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZCIsIl90b29sdGlwcyRvcHRpb24kaWQyIiwiYXNzaWduIiwidG9vbHRpcCIsInZhbHVlVG9vbHRpcHMiLCJ2YWx1ZVRvb2x0aXBIZWFkaW5ncyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyIsIm5ld05hbWUiLCJjdXN0b21GaWVsZE1hdGNoUmVuYW1lIiwidmFsdWVOb25TYWxlcyIsImN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlIiwiXyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAiLCJzaG93T3B0aW9uVG9vbHRpcHMiLCJwb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMiLCJkaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlciIsInNob3dTdW1tYXJ5IiwiX3g1IiwiX3RoaXM5IiwiaW52YWxpZCIsInBvcCIsIiRvcHRpb24iLCJfdGhpczAiLCJtYXRjaCIsImhpZGVJZk9wdGlvbnMiLCJrdiIsIl9yZWY4IiwidHJpbSIsIl9yZWY5IiwidGhlbk9wdGlvbnMiLCJfcmVmMCIsIl9yZWYxIiwiX3JlZjEwIiwiX3RoaXMwJGZpbmRPcHRpb25WYWx1IiwiZ2V0QWxsIiwiX3JlZjExIiwiX3JlZjEyIiwiX2hpZGVPcHRpb25WYWx1ZSIsIl9yZWYxMyIsIl90aGlzMSIsIl90aGlzMSRwcm9kdWN0T3B0aW9ucyIsIl9yZWYxNCIsIl9yZWYxNSIsIl90aGlzMTAiLCJfbSQxJHNwbGl0JG1hcCIsIl9yZWYxNiIsIl9yZWYxNyIsIl9yZWYxOCIsIl90aGlzMTEiLCJfbSQxJHNwbGl0JG1hcDIiLCJoZWFkaW5nIiwiX3JlZjE5IiwiX3JlZjIwIiwiX3JlZjIxIiwiX2t2JHNwbGl0JG1hcCIsInZhbHVlTGFiZWwiLCJfb3B0aW9uJHZhbHVlcyRmaW5kIiwiX3JlZjIyIiwiZmV0Y2hTZXR0aW5ncyIsIl9mZXRjaFNldHRpbmdzIiwiY3VycmVuY3lDb2RlIiwiYWN0aXZlX2N1cnJlbmN5X2NvZGUiLCJkZWZhdWx0Q3VycmVuY3lDb2RlIiwiZGVmYXVsdF9jdXJyZW5jeV9jb2RlIiwic2V0dGluZ3MiLCJmZXRjaE9wdGlvblByaWNlcyIsIl9mZXRjaE9wdGlvblByaWNlcyIsIl9jYWxsZWU0Iiwic2hvd09wdGlvbnMiLCJfdGhpczEyIiwic2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyIsIl95aWVsZCRoYW5kbGVQcm9taXNlcyIsInByZXYiLCJzZWxlY3Rpb25zIiwiX2NvbnRleHQ0IiwiX3JlZjIzIiwib3B0aW9uRW50aXR5SWQiLCJ2YWx1ZUVudGl0eUlkIiwiX3JlZjI0IiwiZmV0Y2hPcHRpb25QcmljZSIsIl9hcnJheUxpa2VUb0FycmF5Iiwic2VsZWN0aW9uIiwicHJpY2VzV2l0aFRheCIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aCIsIl9wcmV2JHByaWNlc1dpdGhUYXgiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGgyIiwiX3ByZXYkcHJpY2VzV2l0aFRheDIiLCJub25TYWxlUHJpY2VXaXRoVGF4IiwiYmFzZVByaWNlIiwiYWRqdXN0ZWRQcmljZXNXaXRoVGF4Iiwibm9uU2FsZVByaWNlVmFsdWUiLCJwcmljZXNXaXRob3V0VGF4IiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoMyIsIl9wcmV2JHByaWNlc1dpdGhvdXRUYSIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aDQiLCJfcHJldiRwcmljZXNXaXRob3V0VGEyIiwibm9uU2FsZVByaWNlV2l0aG91dFRheCIsImFkanVzdGVkUHJpY2VzV2l0aG91dFRheCIsIl94NiIsIl94NyIsIl9mZXRjaE9wdGlvblByaWNlIiwiX2NhbGxlZTUiLCJvcHRpb25WYWx1ZUlkcyIsImNhY2hlS2V5IiwiX2NvbnRleHQ1IiwiX3g4IiwiX3RoaXMxMyIsIl9yZWYyNSIsIl9yZWYyNSQiLCIkbGFiZWwiLCJhZnRlciIsInByZXBlbmQiLCJfcmVmMjYiLCJ2YWx1ZVRvb2x0aXAiLCIkdmFsdWUiLCJfcmVmMjciLCJfcmVmMjgiLCJfcmVmMjkiLCJ2YWx1ZVRvb2x0aXBIZWFkaW5nIiwiJHRvb2x0aXBIZWFkaW5nIiwiX3RoaXMxNCIsIm9wdGlvbklkcyIsIl9pbmRleCIsIl9yZWYzMCIsIl90b29sdGlwcyRvcHRpb24kaWQzIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZDQiLCJzaG93SW5saW5lT3B0aW9uVG9vbHRpcHMiLCJfdGhpczE1IiwicHJlZml4IiwibWFzdGVyVG9vbHRpcHMiLCJyZXNvbHZlZFRvb2x0aXBzIiwiX3JlZjMxIiwic3RhcnRzV2l0aCIsInNwZWNOYW1lIiwiX3JlZjMyIiwidG9vbHRpcFRleHQiLCIkZGQiLCJfdGhpczE2IiwiX3JlZjMzIiwiX3JlZjMzJCIsIl9yZWYzMyQkdmFsdWVUb29sdGlwcyIsIl9yZWYzNCIsIl9yZWYzNSIsIl9yZWYzNiIsInNob3duT3B0aW9ucyIsIl9yZWYzNyIsImRlZmF1bHRPcHRpb25zIiwiX3JlZjM4IiwicHJlZmlsbCIsInNlbGVjdGVkX2RhdGUiLCJkYXkiLCJtb250aCIsInllYXIiLCJfcmVmMzkiLCJzZWxlY3RlZCIsImNoZWNrYm94T3B0aW9ucyIsIl9yZWY0MCIsIm5vVmFsdWUiLCJmaWxlT3B0aW9ucyIsIl9yZWY0MSIsInBhcnRpYWwiLCJkYXRlT3B0aW9ucyIsIl9yZWY0MiIsImRyb3Bkb3duT3B0aW9ucyIsIl9yZWY0MyIsInRleHRPcHRpb25zIiwiX3JlZjQ0IiwiX3JlZjQ1IiwiX3ZhbHVlcyRmaW5kIiwiX3JlZjQ2IiwiX3JlZjQ3IiwiY2hlY2tlZCIsIl9yZWY0OCIsInBhcmFtcyIsInByZWxvYWRlciIsInByaWNlSHRtbCIsInByaWNlVGV4dCIsInN1YnRvdGFsSHRtbCIsIiRwcmljZSIsIiRvbGQiLCIkcGxhY2Vob2xkZXIiLCJfc2hvd09wdGlvblByaWNlcyIsIl9jYWxsZWU2IiwiaWdub3JlVXBkYXRlU3VidG90YWwiLCJfdGhpczE3IiwiX3lpZWxkJFByb21pc2UkYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsJCIsInNob3dQcmljZSIsIl9jb250ZXh0NiIsIl9pZCIsIl9yZWY0OSIsInR4dFByaWNlRnJlZSIsIl9yZWY1MCIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYSIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYTIiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UyIiwidGF4IiwicGRwIiwicHJpY2VXaXRoVGF4VmFsdWUiLCJwcmljZVdpdGhUYXgiLCJub25TYWxlUHJpY2VXaXRoVGF4VmFsdWUiLCJwcmljZVdpdGhvdXRUYXhWYWx1ZSIsInByaWNlV2l0aG91dFRheCIsIm5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZSIsIl9ub25lU2FsZXMkb3B0aW9uSWQiLCJub25TYWxlIiwiX2FkanVzdGVkUHJpY2VzV2l0aG91MyIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYTMiLCJleGNoYW5nZWROb25TYWxlIiwiZXhjaGFuZ2VSYXRlIiwicHJpY2VWYWx1ZSIsInNob3dPcHRpb25TdWJ0b3RhbCIsIl94OSIsIl94MCIsIl94MSIsIl94MTAiLCJfeDExIiwiX3gxMiIsIl9wcm9kdWN0JHByaWNlc1dpdGhUYSIsIl9wcm9kdWN0JHByaWNlc1dpdGhvdSIsInR4dFN1YnRvdGFsIiwidHh0UmV2aWV3U2VsZWN0aW9ucyIsIm9wdGlvbnMiLCIkc3VidG90YWwiLCJfb3B0aW9uJHZhbHVlcyIsIl8kbW9kaWZpZXJzTW9kYWxPcHRpbyIsImRheVN0ciIsIm1vbnRoU3RyIiwieWVhclN0ciIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ2YWx1ZVN0ciIsIl9yZWY1MSIsIm9wdGlvbkVsUHJpY2VIdG1sIiwic3VtbWFyeUh0bWwiLCJwYXJzZURhdGVUaW1lU3RyaW5nIiwic3RyIiwicmVnZXgiLCJzaG9ydE1vbnRoIiwic2hvcnREYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwic2hvcnRIb3VyIiwic2hvcnRNaW51dGUiLCJzaW5nbGVUaW1lQ29tcG9uZW50IiwidHpTaWduIiwidHpIb3VyT2Zmc2V0IiwidHpNaW51dGVPZmZzZXQiLCJwYXJzZUludCIsInNpZ24iLCJ0ekhvdXIiLCJ0ek1pbnV0ZSIsInRpbWV6b25lIiwicGFyc2VDb3VudGRvd25EYXRlIiwicGFyc2VkRGF0ZSIsIm5vdyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiaCIsIm1pbiIsInNlYyIsImRhdGUiLCJ1dGNNaWxsaXMiLCJVVEMiLCJzZXRGdWxsWWVhciIsInNldE1vbnRoIiwic2V0RGF0ZSIsInNldEhvdXJzIiwic2V0TWludXRlcyIsInNldFNlY29uZHMiLCJlbGVtZW50cyIsIlNldCIsInRpbWVyIiwib2JzZXJ2ZXIiLCJkYXRlRGF0YU5hbWUiLCJpblZpZXdwb3J0RGF0YU5hbWUiLCJ0cmFuc2xhdGlvbnNEYXRhTmFtZSIsInNlbGVjdG9ycyIsImVuZExhYmVsIiwiZGF5VmFsdWUiLCJkYXlMYWJlbCIsImhvdXJWYWx1ZSIsImhvdXJMYWJlbCIsIm1pbnV0ZVZhbHVlIiwibWludXRlTGFiZWwiLCJzZWNvbmRWYWx1ZSIsInNlY29uZExhYmVsIiwidGVtcGxhdGUiLCJoaWRlQ2xhc3MiLCJzYWxlRW5kQ2xhc3MiLCJhY3RpdmVDbGFzcyIsInRyYW5zbGF0aW9ucyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwianNvbiIsInRyYW5zIiwia2V5cyIsIl90cmFucyIsInNob3J0S2V5IiwidmFsaWREYXRlIiwib2JzZXJ2ZSIsInN0YXJ0IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdCIsInRocmVzaG9sZCIsInVub2JzZXJ2ZSIsImlzVmlzaWJsZUluVmlld3BvcnQiLCJzaXplIiwicnVuIiwic3RvcCIsImRpc2Nvbm5lY3QiLCJib2R5IiwiY29udGFpbnMiLCJkaWZmIiwiZmxvb3IiLCIkZW5kTGFiZWwiLCIkZGF5IiwiJGRheVZhbHVlIiwiJGRheUxhYmVsIiwiJGhvdXIiLCIkaG91clZhbHVlIiwiJGhvdXJMYWJlbCIsIiRtaW51dGUiLCIkbWludXRlVmFsdWUiLCIkbWludXRlTGFiZWwiLCIkc2Vjb25kIiwiJHNlY29uZFZhbHVlIiwiJHNlY29uZExhYmVsIiwidG9nZ2xlQ2xhc3MiLCJhcmlhS2V5Q29kZXMiLCJSRVRVUk4iLCJTUEFDRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsImluaXRSYWRpb09wdGlvbnMiLCJzZXRDaGVja2VkUmFkaW9JdGVtIiwiaXRlbUNvbGxlY3Rpb24iLCJpdGVtSWR4IiwiaWR4IiwiaXRlbSIsIiRpdGVtIiwiY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uIiwibGFzdEl0ZW1JZHgiLCJjdXJyZW50SWR4IiwiaGFuZGxlSXRlbUtleURvd24iLCJrZXlDb2RlIiwibGFzdENvbGxlY3Rpb25JdGVtSWR4Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldkl0ZW1JZHgiLCJuZXh0SXRlbUlkeCIsIiRjb250YWluZXIiLCJpdGVtU2VsZWN0b3IiLCIkaXRlbUNvbGxlY3Rpb24iLCJvcHRpb25zVHlwZXNNYXAiLCJJTlBVVF9GSUxFIiwiSU5QVVRfVEVYVCIsIklOUFVUX05VTUJFUiIsIklOUFVUX0NIRUNLQk9YIiwiVEVYVEFSRUEiLCJEQVRFIiwiU0VUX1NFTEVDVCIsIlNFVF9SRUNUQU5HTEUiLCJTRVRfUkFESU8iLCJTV0FUQ0giLCJQUk9EVUNUX0xJU1QiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJhcmVEZWZhdWx0T3B0aW9uc1NldCIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwiZ2V0VGFiUmVxdWVzdHMiLCJfXyIsIl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlIiwidmFyaWFudERvbU5vZGUiLCJ2YXJpYW50VHlwZSIsInJhZGlvIiwiJHJhZGlvIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsImVuYWJsZUF0dHJpYnV0ZSIsImRpc2FibGVBdHRyaWJ1dGUiLCJsb2NhdGlvbiIsImhhc2giLCIkYWN0aXZlVGFiIiwiaGFzIiwiJHRhYkNvbnRlbnQiLCJycnBXaXRoVGF4IiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJGFkZFRvQ2FydEZvcm0iLCIkd2lzaGxpc3RWYXJpYXRpb24iLCJzdG9jayIsIiRpbnB1dCIsInNrdSIsInVwYyIsInF1YW50aXR5IiwiJGJ1bGtQcmljaW5nIiwiJHdhbGxldEJ1dHRvbnMiLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsInZpZXdNb2RlbCIsIm1lc3NhZ2UiLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwic2hvd01lc3NhZ2VCb3giLCJ1cGRhdGVQcmljZVZpZXciLCJ3ZWlnaHQiLCJ2YXJpYW50SWQiLCJ1cGRhdGVXYWxsZXRCdXR0b25zVmlldyIsImJ1bGtfZGlzY291bnRfcmF0ZXMiLCJhZGRUb0NhcnRXcmFwcGVyIiwidXBkYXRlZFByaWNlIiwicHJpY2VfcmFuZ2UiLCJtYXgiLCJzYXZlZCIsIiRtZXNzYWdlQm94IiwiaXNWYWxpZEZvcm0iLCJ0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eSIsInNob3VsZFNob3ciLCJnZXRBdHRyaWJ1dGVUeXBlIiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJwYXJlbnQiLCJ0b2dnbGVPcHRpb24iLCJzZWxlY3RlZEluZGV4IiwibW9kYWxGYWN0b3J5Iiwibm9kIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImZvcm1zIiwibm9ybWFsaXplRm9ybURhdGEiLCJjb252ZXJ0SW50b0FycmF5IiwiYmFubmVyVXRpbHMiLCJjdXJyZW5jeVNlbGVjdG9yIiwiX1Byb2R1Y3REZXRhaWxzQmFzZSIsInByb2R1Y3RBdHRyaWJ1dGVzRGF0YSIsImxpc3RlblF1YW50aXR5Q2hhbmdlIiwiJHN3YXRjaE9wdGlvbk1lc3NhZ2UiLCJzd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2UiLCJzd2F0Y2hHcm91cElkTGlzdCIsImdyb3VwIiwic3RvcmVJbml0TWVzc2FnZXNGb3JTd2F0Y2hlcyIsInVwZGF0ZURhdGVTZWxlY3RvciIsInVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSIsImFkZFRvQ2FydFZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJoYXNPcHRpb25zIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCIkcHJvZHVjdFN3YXRjaEdyb3VwIiwiJHByb2R1Y3RTd2F0Y2hMYWJlbHMiLCJwbGFjZVN3YXRjaExhYmVsSW1hZ2UiLCIkb3B0aW9uSW1hZ2UiLCJvcHRpb25JbWFnZVdpZHRoIiwib3V0ZXJXaWR0aCIsImV4dGVuZGVkT3B0aW9uSW1hZ2VPZmZzZXRMZWZ0IiwiX2xhYmVsJGdldEJvdW5kaW5nQ2xpIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlnaHQiLCJlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlciIsInNjcmVlbiIsInNoaWZ0VmFsdWUiLCJyZWdpc3RlckFkZFRvQ2FydFZhbGlkYXRpb24iLCJzaG93U3dhdGNoTmFtZXMiLCJzd2F0Y2hHcm91cEVsZW1lbnQiLCJwYXJlbnROb2RlIiwic2hvd1N3YXRjaE5hbWVPbk9wdGlvbiIsImVsZW1lbnQiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCJzZXRQcm9kdWN0VmFyaWFudCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIl9pc0VtcHR5IiwiJHByb2R1Y3RJZCIsIm9wdGlvbkNoYW5nZUNhbGxiYWNrIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJkaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudCIsInZhbGlkYXRlIiwiY2IiLCJudW1iZXJzT25seSIsImVycm9yTWVzc2FnZSIsInByb2R1Y3RRdWFudGl0eUVycm9yTWVzc2FnZSIsInN3YXRjaEdyb3VwSWQiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsIm9wdGlvblRpdGxlIiwiaXNTYXRpc2ZpZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGF0ZVN0cmluZyIsIngiLCJnZXRTZWxlY3RlZE9wdGlvbkxhYmVsIiwicHJvZHVjdFZhcmlhbnRzbGlzdCIsIm1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQiLCJpbnB0IiwiZGF0YXNldCIsInByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSIsImxhYmVscyIsInByb2R1Y3RWYXJpYW50IiwidmlldyIsInByb2R1Y3ROYW1lIiwiY2FyZCIsIndhc1JlcXVpcmVkIiwiaXNSdW5uaW5nSW5JZnJhbWUiLCJzZWxmIiwidG9wIiwiJGNoYW5nZWRPcHRpb24iLCJwYXJlbnRzIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50IiwiJGNvbnRleHQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGV0YWlsIiwiJHN3YXRjaCIsIiRzd2F0Y2hHcm91cCIsInN3YXRjaE5hbWUiLCJhY3RpdmVTd2F0Y2hHcm91cElkIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwicm9sZSIsIl9pc1BsYWluT2JqZWN0Iiwic2V0QWx0ZXJuYXRlSW1hZ2UiLCJyZXN0b3JlSW1hZ2UiLCIkdGFyZ2V0IiwicXVhbnRpdHlNaW4iLCJxdWFudGl0eU1heCIsInZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkiLCJ2YWxpZGF0ZURlY3JlYXNlQWdhaW5zdE1pbkJvdW5kYXJ5Iiwid2hpY2giLCIkYWRkVG9DYXJ0QnRuIiwiaXRlbUFkZCIsImNhcnRfaWQiLCJvcGVuIiwiQXBwbGVQYXlTZXNzaW9uIiwiJG1vZGFsIiwiY2FydF9pdGVtIiwicmVkaXJlY3RUbyIsImNhcnRfdXJsIiwidXJscyIsImdldENhcnRDb250ZW50IiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCJzdWdnZXN0IiwiY29uZmlnIiwic3VnZ2VzdGlvbnMiLCJnZXRDb250ZW50IiwiaWZyYW1lU2RrIiwibW9kYWwiLCJ1cGRhdGVDb250ZW50IiwiJGNhcnRRdWFudGl0eSIsIiRjb250ZW50IiwiJGNhcnRDb3VudGVyIiwiJHByb21vdGlvbkJhbm5lciIsIiRiYWNrVG9TaG9wcHBpbmdCdG4iLCIkbW9kYWxDbG9zZUJ0biIsImJhbm5lclVwZGF0ZUhhbmRsZXIiLCIkcHJvZHVjdENvbnRhaW5lciIsInJlbG9hZCIsImZvcm1EYXRhSXRlbXMiLCJzZXJpYWxpemVBcnJheSIsInByb2R1Y3REZXRhaWxzIiwiZm9ybURhdGFJdGVtIiwicHJvZHVjdE9wdGlvbiIsIm9wdGlvblZhbHVlIiwib3B0aW9uU2VsZWN0aW9ucyIsInNjb3BlIiwidXBkYXRlRGF5cyIsImRhdGVPcHRpb24iLCJtb250aFNlbGVjdG9yIiwiZGF5U2VsZWN0b3IiLCJ5ZWFyU2VsZWN0b3IiLCJkYXlzSW5Nb250aCIsImlzTmFOIiwiT3B0aW9uIiwiZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSIsInJlcyIsIl9zdGVwJHZhbHVlIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsImV2dCIsImFtb3VudCIsImRvY3VtZW50TW9kZSIsImNvbGxlY3Rpb24iLCIkbWFpbkltYWdlTmVzdGVkIiwiJHNlbGVjdGFibGVJbWFnZXMiLCJzZXRJbWFnZVpvb20iLCJpbWdPYmoiLCJzYXZlZEltYWdlIiwiJHNlbGVjdGVkVGh1bWIiLCJzZWxlY3ROZXdJbWFnZSIsIm1haW5JbWFnZUFsdCIsImFsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9