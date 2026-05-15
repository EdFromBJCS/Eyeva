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
  _proto.renderSpecTooltips = function renderSpecTooltips() {
    var _this13 = this;
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
      var $dd = _this13.$scope.find("[data-spec-name=\"" + specName + "\"]").first();
      if (!$dd.length) {
        return;
      }
      var $tooltip = $(_this13.optionTooltipTemplate.replace('<%tooltip%>', tooltipText)).attr('data-eyeva-spec-tooltip', specName);
      $dd.append($tooltip);
    });
  };
  _proto.showInlineOptionTooltips = function showInlineOptionTooltips($productOptionsEl, tooltips, tooltipHeadings) {
    var _this14 = this;
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
        var $tooltip = $(_this14.optionTooltipTemplate.replace('<%tooltip%>', tooltip)).attr('data-eyeva-product-option-tooltip-id', optionId);
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
        var $tooltip = $(_this14.optionValueTooltipTemplate.replace('<%tooltip%>', valueTooltip)).attr('data-eyeva-product-option-tooltip-id', optionId + "-" + valueId);
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
        var $tooltipHeading = $(_this14.optionValueTooltipHeadingTemplate.replace('<%heading%>', valueTooltipHeading)).attr('data-eyeva-product-option-tooltip-heading-id', optionId + "-" + valueId);
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
      var _this15 = this;
      var _yield$Promise$all, settings, _yield$Promise$all$, prev, selections, showPrice;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (ignoreUpdateSubtotal === void 0) {
              ignoreUpdateSubtotal = false;
            }
            _context6.n = 1;
            return Promise.all([this.fetchSettings(), this.fetchOptionPrices(showOptionIds.map(function (_id) {
              return _this15.productOptions.find(function (_ref49) {
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
                if (_this15.showPriceFree) {
                  return _this15.context.txtPriceFree;
                } else if (_this15.showPriceZero) {
                  return _this15.formatPrice(value, true);
                }
                return '';
              }
              return _this15.formatPrice(value, true);
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
                nonSalePriceWithTax: adjustedPricesWithTax != null && adjustedPricesWithTax.nonSalePriceValue ? _this15.formatPrice(adjustedPricesWithTax == null ? void 0 : adjustedPricesWithTax.nonSalePriceValue, true) : ''
              } : {}, settings.tax.pdp !== 'INC' ? {
                priceWithoutTaxValue: adjustedPricesWithoutTax == null || (_adjustedPricesWithou = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou.value,
                priceWithoutTax: showPrice(adjustedPricesWithoutTax == null || (_adjustedPricesWithou2 = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou2.value),
                nonSalePriceWithoutTaxValue: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue : '',
                nonSalePriceWithoutTax: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? _this15.formatPrice(adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue, true) : ''
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
                      nonSalePriceWithTax: _this15.formatPrice(exchangedNonSale, true)
                    } : {}, settings.tax.pdp !== 'INC' ? {
                      nonSalePriceWithoutTaxValue: exchangedNonSale,
                      nonSalePriceWithoutTax: _this15.formatPrice(exchangedNonSale, true)
                    } : {});
                  }
                }
                var priceHtml = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this15.optionPriceTemplate, params, null, ['<%', '%>']);
                var priceText = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this15.optionPricePlainTemplate, params, null, ['<%', '%>']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX3Byb2R1Y3QtZGV0YWlsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEs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bkQsSUFBTUosTUFBTSxHQUFHRyxNQUFNLENBQUNILE1BQU0sQ0FBQyxDQUFDO0lBQzlCLElBQU1FLEtBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFLLENBQUMsQ0FBQztJQUU1QixJQUFJRixNQUFNLEdBQUdELGVBQWUsSUFBSUcsS0FBSyxHQUFHRCxjQUFjLEVBQUU7TUFDcEQsSUFBSSxDQUFDWCxRQUFRLENBQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUNrRCxJQUFJLENBQUMsQ0FBQztJQUN6QztFQUNKLENBQUM7RUFBQTdELE1BQUEsQ0FFRHlvQyxZQUFZLEdBQVosU0FBQUEsWUFBWUEsQ0FBQSxFQUFHO0lBQUEsSUFBQXZvQyxLQUFBO0lBQ1gsSUFBSSxDQUFDeUYsUUFBUSxHQUFHLElBQUksQ0FBQ3RELFVBQVUsQ0FBQ3NFLFFBQVEsQ0FBQztNQUNyQ0MsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUE7UUFBQSxPQUFRMUcsS0FBSSxDQUFDaUcsVUFBVSxDQUFDLENBQUM7TUFBQTtNQUMvQlUsV0FBVyxFQUFFLEVBQUU7TUFDZkMsYUFBYSxFQUFFO0lBQ25CLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTlHLE1BQUEsQ0FFREMsVUFBVSxHQUFWLFNBQUFBLFVBQVVBLENBQUEsRUFBRztJQUNULElBQUksQ0FBQ3VvQyxpQkFBaUIsQ0FBQ25vQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ3dvQyxjQUFjLENBQUMzckMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3RFLENBQUM7RUFBQSxPQUFBdVAsWUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9leWV2YS9pbWFnZS1nYWxsZXJ5LmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvcHJvZHVjdC1kZXRhaWxzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvc2FsZS1jb3VudGRvd24uanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvY29uc3RhbnRzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL2luZGV4LmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL3JhZGlvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvYXBpLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9iYW5uZXItdXRpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2llLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9pbWFnZS1nYWxsZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZWFzeXpvb20nO1xuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcbmltcG9ydCB7IGNyZWF0ZUZvY3VzVHJhcCB9IGZyb20gJ2ZvY3VzLXRyYXAnO1xuaW1wb3J0IHsgdG9vbHMgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkgZnJvbSAnLi4vLi4vdGhlbWUvcHJvZHVjdC9pbWFnZS1nYWxsZXJ5JztcblxuY29uc3QgREVGQVVMVF9TVEVQID0gMzYwO1xuY2xhc3MgSW1hZ2VHYWxsZXJ5TW9kYWwge1xuICAgIG1vZGFsVGVtcGxhdGUgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtb3ZlcmxheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJDbG9zZVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5DbG9zZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tZWFzeXpvb21cIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLWltZy1jb250YWluZXJcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZtYWluSW1hZ2VMaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi0zNjBcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC0zNjAtaW1nLWNvbnRhaW5lclwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtaW1nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkXCIgZGF0YS1zaXplcz1cImF1dG9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLXByZXZpb3VzXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wcmV2aW91cz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYXJyb3ctbGVmdC1sb25nXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLXBsYXlcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBsYXk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXBsYXlcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPlBsYXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1wYXVzZVwiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGF1c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXBhdXNlXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5QYXVzZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiX2J0biBfYnRuLW5leHRcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLW5leHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LXJpZ2h0LWxvbmdcIj48L3VzZT48L3N2Zz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tdmlkZW9cIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxhenlsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvaHRtbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzkwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Via2l0QWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vemFsbG93ZnVsbHNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aXRsZVwiPnt7bmFtZX19PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3sjdmlkZW9zLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC12aWRlb3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbGFiZWxcIj57e3ZpZGVvc0xhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyN2aWRlb3N9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svdmlkZW9zfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L3ZpZGVvcy5sZW5ndGh9fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXMzNjAubGVuZ3RofX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLTM2MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sYWJlbFwiPnt7aW1hZ2VzMzYwTGFiZWx9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlczM2MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLXRodW1ibmFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsaW5rRWxlbWVudH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlczM2MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXMzNjAubGVuZ3RofX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1pbWFnZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbGFiZWxcIj57e2ltYWdlc0xhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXN9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SW1hZ2VHYWxsZXJ5P30gaW1hZ2VHYWxsZXJ5XG4gICAgICogQHBhcmFtIHtqUXVlcnk/fSAkZ2FsbGVyeVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGltYWdlR2FsbGVyeSA9IG51bGwsICRnYWxsZXJ5ID0gbnVsbCkge1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeSA9IGltYWdlR2FsbGVyeTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeSA9ICRnYWxsZXJ5O1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuXG4gICAgICAgIGlmIChpbWFnZUdhbGxlcnkgJiYgJGdhbGxlcnkpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLiRnYWxsZXJ5KSB7XG4gICAgICAgICAgICAvLyBvcGVuIG1vZGFsIHdoZW4gY2xpY2sgb24gdmlkZW8sIDM2MCB2aWV3LCBvciBtb3JlIGltYWdlIHRodW1ibmFpbHNcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlcbiAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS1tb3JlXScpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrJylcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlU3Jjc2V0ID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwID0gJGEuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0nKS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IE51bWJlcihpbWFnZVVybC5zcGxpdCgnIycpWzFdKSB8fCBERUZBVUxUX1NURVBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbChpbWFnZVVybCwgaW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdmlkZW9JZCwgc3RlcCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIGNsb3NlIGJ1dHRvblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBwcmVzcyBFc2NhcGUga2V5XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5vbigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIG91dHNpZGUgKG92ZXJsYXkpXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRnYWxsZXJ5TW9kYWwuaXMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGltYWdlIHRodW1ibmFpbHNcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZShcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyksXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB2aWRlbyB0aHVtYm5haWxzXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJyk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5WaWRlbyh2aWRlb0lkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gMzYwIGltYWdlIHRodW1ibmFpbHNcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbS1yb3RhdG9yXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsU3RlcCA9ICRhLmRhdGEoJ2V5ZXZhSW1hZ2VHYWxsZXJ5TW9kYWxJdGVtUm90YXRvcicpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlab29tSW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICB0b3RhbFN0ZXAsXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcHJldmlvdXNdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91czM2MFN0ZXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLW5leHRdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5uZXh0MzYwU3RlcCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcGxheV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXkzNjAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBhdXNlXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucGF1c2UzNjAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveU1vZGFsKCkge1xuICAgICAgICBpZiAodGhpcy4kZ2FsbGVyeU1vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwgPSAkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgJG1haW5JbWFnZUxpbmsgPSB0aGlzLmltYWdlR2FsbGVyeS4kbWFpbkltYWdlLmZpbmQoJ2EnKS5jbG9uZSgpO1xuICAgICAgICAkbWFpbkltYWdlTGluay5maW5kKCdpbWcnKS5yZW1vdmVBdHRyKCdkYXRhLXpvb20taW1hZ2UnKS5hdHRyKCdkYXRhLWV5ZXZhLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZScsICcnKTtcblxuICAgICAgICBjb25zdCBtYWluSW1hZ2VMaW5rRWxlbWVudCA9ICRtYWluSW1hZ2VMaW5rLmdldCgwKT8ub3V0ZXJIVE1MO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy4kZ2FsbGVyeS5jbG9zZXN0KCcucHJvZHVjdFZpZXcnKS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LXRpdGxlXScpLnRleHQoKTtcbiAgICAgICAgY29uc3QgdmlkZW9zTGFiZWwgPSB0aGlzLiRnYWxsZXJ5LmRhdGEoJ3ZpZGVvc0xhYmVsJykgfHwgJ1ZpZGVvcyc7XG4gICAgICAgIGNvbnN0IGltYWdlczM2MExhYmVsID0gdGhpcy4kZ2FsbGVyeS5kYXRhKCdpbWFnZXMzNjBMYWJlbCcpIHx8ICczNjAgVmlldyc7XG4gICAgICAgIGNvbnN0IGltYWdlc0xhYmVsID0gdGhpcy4kZ2FsbGVyeS5kYXRhKCdpbWFnZXNMYWJlbCcpIHx8ICdQcm9kdWN0IEltYWdlcyc7XG5cbiAgICAgICAgY29uc3QgdmlkZW9zID0gdGhpcy4kZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW9dJykuZ2V0KCkubWFwKGxpID0+ICh7XG4gICAgICAgICAgICBsaW5rRWxlbWVudDogJChsaSkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLmNsb25lKCkuZ2V0KDApPy5vdXRlckhUTUwsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCBpbWFnZXMzNjAgPSB0aGlzLiRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdJykuZ2V0KCkubWFwKGxpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQobGkpLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKS5jbG9uZSgpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQO1xuICAgICAgICAgICAgJGVsLnJlbW92ZUF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtJykuYXR0cignZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcicsIHN0ZXApO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiAkZWwuZ2V0KDApPy5vdXRlckhUTUwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLiRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKS5nZXQoKVxuICAgICAgICAgICAgLmZpbHRlcihhID0+ICQoYSkuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLTM2MF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS1tb3JlXScpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIC5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGEgPSAkKGEpLmNsb25lKClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtJywgJycpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICRhLmdldCgwKT8ub3V0ZXJIVE1MLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLm1vZGFsVGVtcGxhdGUsIHtcbiAgICAgICAgICAgIG1haW5JbWFnZUxpbmtFbGVtZW50LFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHZpZGVvc0xhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzMzYwTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXNMYWJlbCxcbiAgICAgICAgICAgIHZpZGVvcyxcbiAgICAgICAgICAgIGltYWdlczM2MCxcbiAgICAgICAgICAgIGltYWdlcyxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5oaWRlKCkuYXBwZW5kVG8odGhpcy4kYm9keSk7XG5cbiAgICAgICAgdGhpcy5pbml0SW1hZ2Vab29tKCk7XG5cbiAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAodGhpcy4kZ2FsbGVyeU1vZGFsLmdldCgwKSwge1xuICAgICAgICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IGZhbHNlLFxuICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW5Nb2RhbChpbWFnZVVybCwgaW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdmlkZW9JZCwgdG90YWxTdGVwKSB7XG4gICAgICAgIHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50ID0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgdGhpcy4kYm9keS5hZGRDbGFzcygnX2dhbGxlcnlNb2RhbC1vcGVuZWQnKTtcblxuICAgICAgICBpZiAodGhpcy5pbWFnZUdhbGxlcnkpIHtcbiAgICAgICAgICAgIGNvbnN0ICRtYWluSW1nID0gdGhpcy5pbWFnZUdhbGxlcnkuJG1haW5JbWFnZS5maW5kKCdpbWcnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKFxuICAgICAgICAgICAgICAgICRtYWluSW1nLmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgICAgICRtYWluSW1nLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuYXR0cignZGF0YS16b29tLWltYWdlJyksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZGVvSWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKHZpZGVvSWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsU3RlcCkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluMzYwKGltYWdlVXJsLCBpbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmFkZENsYXNzKCdfb3BlbmluZycpLnNob3coKS5yZW1vdmVDbGFzcygnX29wZW5pbmcnKTtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAuYWN0aXZhdGUoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWNsb3NlXScpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmFkZENsYXNzKCdfY2xvc2luZycpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZU1haW5WaWRlbygpO1xuICAgICAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcbiAgICAgICAgICAgIHRoaXMuJGJvZHkucmVtb3ZlQ2xhc3MoJ19nYWxsZXJ5TW9kYWwtb3BlbmVkJyk7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwucmVtb3ZlQ2xhc3MoJ19jbG9zaW5nJykuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuJGxhc3RBY3RpdmVFbGVtZW50KSB0aGlzLiRsYXN0QWN0aXZlRWxlbWVudC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIHNldE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKSB7XG4gICAgICAgIHRoaXMuaGlkZU1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLmhpZGUzNjBVSSgpO1xuICAgICAgICB0aGlzLnNob3dNYWluSW1hZ2UoKTtcblxuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKG1haW5JbWFnZVVybCk7XG4gICAgICAgIHRoaXMuc3dhcE1haW5JbWFnZShtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsKTtcbiAgICB9XG5cbiAgICBzaG93TWFpbkltYWdlKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZU1haW5JbWFnZSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKG1haW5JbWFnZVVybCwgdmlkZW9JZCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsXSwgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgLmZpbHRlcigoX2ksIGEpID0+XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsICYmICQoYSkuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSA9PT0gbWFpbkltYWdlVXJsXG4gICAgICAgICAgICAgICAgfHwgdmlkZW9JZCAmJiAkKGEpLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJykgPT09IHZpZGVvSWQpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIHN3YXBNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCkge1xuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKTtcbiAgICAgICAgY29uc3QgJGEgPSAkaW1hZ2VDb250YWluZXIuZmluZCgnYScpO1xuICAgICAgICBjb25zdCAkbWFpbkltYWdlID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWdhbGxlcnktbW9kYWwtbWFpbi1pbWFnZV0nKTtcblxuICAgICAgICAkaW1hZ2VDb250YWluZXIuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcbiAgICAgICAgJGEuYXR0cignaHJlZicsIHpvb21JbWFnZVVybCk7XG4gICAgICAgICRtYWluSW1hZ2UuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKS5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpO1xuXG4gICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5zd2FwKFxuICAgICAgICAgICAgbWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGlzQnJvd3NlcklFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnVHJpZGVudCcpO1xuICAgICAgICBpZiAoaXNCcm93c2VySUUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrU3R5bGVzSUUgPSB7XG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKCR7bWFpbkltYWdlVXJsfSlgLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtb3JpZ2luJzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJ2NvbnRhaW4nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLW1haW4taW1hZ2VdJykuY3NzKGZhbGxiYWNrU3R5bGVzSUUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgJGltYWdlQ29udGFpbmVyID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtbWFpbi1pbWctY29udGFpbmVyXScpO1xuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSAkaW1hZ2VDb250YWluZXIuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gJGltYWdlQ29udGFpbmVyLndpZHRoKCk7XG5cbiAgICAgICAgY29uc3QgJGltYWdlID0gdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLiR6b29tO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAkaW1hZ2UuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gJGltYWdlLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKGhlaWdodCA8IGNvbnRhaW5lckhlaWdodCB8fCB3aWR0aCA8IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEltYWdlWm9vbSgpIHtcbiAgICAgICAgdGhpcy5lYXN5em9vbSA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpLmVhc3lab29tKHtcbiAgICAgICAgICAgIG9uU2hvdzogKCkgPT4gdGhpcy5jaGVja0ltYWdlKCksXG4gICAgICAgICAgICBlcnJvck5vdGljZTogJycsXG4gICAgICAgICAgICBsb2FkaW5nTm90aWNlOiAnJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd01haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLnNob3coKTtcbiAgICB9XG5cbiAgICBoaWRlTWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC12aWRlby1wbGF5ZXJdJykuaGlkZSgpXG4gICAgICAgICAgICAuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgJycpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbyh2aWRlb0lkKSB7XG4gICAgICAgIHRoaXMuaGlkZU1haW5JbWFnZSgpO1xuICAgICAgICB0aGlzLmhpZGUzNjBVSSgpO1xuICAgICAgICB0aGlzLnNob3dNYWluVmlkZW8oKTtcblxuICAgICAgICBjb25zdCBzcmMgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfT9yZWY9MCZhdXRvcGxheT0xYDtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLnNob3coKS5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCBzcmMpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKG51bGwsIHZpZGVvSWQpO1xuICAgIH1cblxuICAgIHNldE1haW4zNjAobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKSB7XG4gICAgICAgIHRoaXMuaGlkZU1haW5JbWFnZSgpO1xuICAgICAgICB0aGlzLmhpZGVNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zaG93MzYwVUkoKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYihtYWluSW1hZ2VVcmwpO1xuICAgICAgICB0aGlzLnN3YXBNYWluMzYwKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCk7XG4gICAgfVxuXG4gICAgc3dhcE1haW4zNjAobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1pbWctY29udGFpbmVyXSBpbWcnKVxuICAgICAgICAgICAgLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybClcbiAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXG4gICAgICAgICAgICAuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcbiAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcCgwLCB0b3RhbFN0ZXApO1xuICAgIH1cblxuICAgIHNob3czNjBVSSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLnNob3coKTtcbiAgICB9XG5cbiAgICBoaWRlMzYwVUkoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5oaWRlKCk7XG4gICAgICAgIHRoaXMucGF1c2UzNjAoKTtcbiAgICB9XG5cbiAgICBzZXQzNjBDdXJyZW50U3RlcChjdXJyZW50U3RlcCwgdG90YWxTdGVwID0gREVGQVVMVF9TVEVQKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKVxuICAgICAgICAgICAgLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcsIGN1cnJlbnRTdGVwKVxuICAgICAgICAgICAgLmNzcygnLS1pbWFnZS0zNjAtc3RlcHMnLCB0b3RhbFN0ZXApO1xuICAgIH1cblxuICAgIG5leHQzNjBTdGVwKCkge1xuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJyk7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcpKSB8fCAwO1xuICAgICAgICBjb25zdCB0b3RhbCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1zdGVwcycpKSB8fCBERUZBVUxUX1NURVA7XG5cbiAgICAgICAgaWYgKHN0ZXAgPCB0b3RhbCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoc3RlcCArIDEsIHRvdGFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoMCwgdG90YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldmlvdXMzNjBTdGVwKCkge1xuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJyk7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtY3VycmVudCcpKSB8fCAwO1xuICAgICAgICBjb25zdCB0b3RhbCA9IE51bWJlcigkZWwuY3NzKCctLWltYWdlLTM2MC1zdGVwcycpKSB8fCBERUZBVUxUX1NURVA7XG5cbiAgICAgICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKHN0ZXAgLSAxLCB0b3RhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKHRvdGFsIC0gMSwgdG90YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheTM2MCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsMzYwKTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbDM2MCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dDM2MFN0ZXAoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLmFkZENsYXNzKCdfcGxheWluZycpO1xuICAgIH1cblxuICAgIHBhdXNlMzYwKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwzNjApO1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykucmVtb3ZlQ2xhc3MoJ19wbGF5aW5nJyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZEltYWdlR2FsbGVyeU1vZGFsIGV4dGVuZHMgSW1hZ2VHYWxsZXJ5TW9kYWwge1xuICAgIGxvYWRpbmdNb2RhbFRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXkgZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxvYWRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgICRzY29wZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvZHVjdElkLFxuICAgICAgICAgICAgZ3JhcGhRTFRva2VuLFxuICAgICAgICAgICAgem9vbVNpemUsXG4gICAgICAgICAgICBwcm9kdWN0U2l6ZSxcbiAgICAgICAgICAgIHRodW1iU2l6ZSxcbiAgICAgICAgICAgIHR4dFZpZGVvc0xhYmVsLFxuICAgICAgICAgICAgdHh0SW1hZ2VzMzYwTGFiZWwsXG4gICAgICAgICAgICB0eHRJbWFnZXNMYWJlbCxcbiAgICAgICAgfSA9IHt9LFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XG4gICAgICAgIHRoaXMuZ3JhcGhRTFRva2VuID0gZ3JhcGhRTFRva2VuO1xuICAgICAgICB0aGlzLnpvb21TaXplID0gem9vbVNpemU7XG4gICAgICAgIHRoaXMucHJvZHVjdFNpemUgPSBwcm9kdWN0U2l6ZTtcbiAgICAgICAgdGhpcy50aHVtYlNpemUgPSB0aHVtYlNpemU7XG4gICAgICAgIHRoaXMudHh0VmlkZW9zTGFiZWwgPSB0eHRWaWRlb3NMYWJlbDtcbiAgICAgICAgdGhpcy50eHRJbWFnZXMzNjBMYWJlbCA9IHR4dEltYWdlczM2MExhYmVsO1xuICAgICAgICB0aGlzLnR4dEltYWdlc0xhYmVsID0gdHh0SW1hZ2VzTGFiZWw7XG4gICAgfVxuXG4gICAgYXN5bmMgb3BlbkxvYWRpbmdNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95TW9kYWwoKTtcblxuICAgICAgICB0aGlzLiRsYXN0QWN0aXZlRWxlbWVudCA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoJ19nYWxsZXJ5TW9kYWwtb3BlbmVkJyk7XG5cbiAgICAgICAgLy8gZGlzcGxheSBsb2FkaW5nIG1vZGFsXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubG9hZGluZ01vZGFsVGVtcGxhdGUpKTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmhpZGUoKS5hcHBlbmRUbyh0aGlzLiRib2R5KTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmFkZENsYXNzKCdfb3BlbmluZycpLnNob3coKS5yZW1vdmVDbGFzcygnX29wZW5pbmcnKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkTW9kYWwoKSB7XG4gICAgICAgIC8vIGZldGNoIHByb2R1Y3QgZGF0YVxuICAgICAgICBhd2FpdCB0aGlzLmZldGNoUHJvZHVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZSA9IHRoaXMuaW1hZ2VzLmZpbmQoaW1hZ2UgPT4gaW1hZ2UuaXNEZWZhdWx0KSB8fCB0aGlzLmltYWdlc1swXTtcbiAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KG1haW5JbWFnZS51cmxUZW1wbGF0ZSk7XG5cbiAgICAgICAgY29uc3QgbWFpbkltYWdlTGlua0VsZW1lbnQgPSBgXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCIke21haW5JbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmw9XCIke21haW5JbWFnZS51cmx9XCJcbiAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldD1cIiR7bWFpbkltYWdlU3Jjc2V0fVwiXG4gICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsPVwiJHttYWluSW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgPjxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIHNyYz1cIiR7bWFpbkltYWdlLnRodW1ibmFpbFVybH1cIiBkYXRhLXNyY3NldD1cIiR7bWFpbkltYWdlU3Jjc2V0fVwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgYWx0PVwiJHttYWluSW1hZ2UuYWx0VGV4dH1cIiAvPjwvYT5gO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLiRzY29wZS5maW5kKCcuY2FyZC10aXRsZScpLnRleHQoKTtcbiAgICAgICAgY29uc3QgdmlkZW9zTGFiZWwgPSB0aGlzLnR4dFZpZGVvc0xhYmVsIHx8ICdWaWRlb3MnO1xuICAgICAgICBjb25zdCBpbWFnZXMzNjBMYWJlbCA9IHRoaXMudHh0SW1hZ2VzMzYwTGFiZWwgfHwgJzM2MCBWaWV3JztcbiAgICAgICAgY29uc3QgaW1hZ2VzTGFiZWwgPSB0aGlzLnR4dEltYWdlc0xhYmVsIHx8ICdQcm9kdWN0IEltYWdlcyc7XG5cbiAgICAgICAgY29uc3QgdmlkZW9zID0gdGhpcy52aWRlb3MubWFwKHZpZGVvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodmlkZW8udXJsKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgndicpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogYFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kdWN0Vmlldy10aHVtYm5haWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHt2aWRlby51cmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkPVwiJHt2aWRlb0lkfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8ke3ZpZGVvSWR9L2RlZmF1bHQuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSBocmVmPVwiI2ljb24tcGxheS1zb2xpZFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGltYWdlczM2MCA9IHRoaXMuaW1hZ2VzMzYwLm1hcCgoaW1hZ2VVcmwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogYFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kdWN0Vmlldy10aHVtYm5haWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcj1cIiR7c3RlcH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmw9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldD1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlVXJsfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgaHJlZj1cIiNpY29uLTM2MFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2E+YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHRoaXMuaW1hZ2VzLm1hcChpbWFnZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVNyY3NldCA9IHRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChpbWFnZS51cmxUZW1wbGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiBgXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RWaWV3LXRodW1ibmFpbC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke2ltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybD1cIiR7aW1hZ2UudXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldD1cIiR7aW1hZ2VTcmNzZXR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7aW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBzcmM9XCIke2ltYWdlLnRodW1ibmFpbFVybH1cIiBkYXRhLXNyY3NldD1cIiR7aW1hZ2VTcmNzZXR9XCIgZGF0YS1zaXplcz1cImF1dG9cIiBhbHQ9XCIke2ltYWdlLmFsdFRleHR9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPmAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCAkZ2FsbGVyeU1vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RhbFRlbXBsYXRlLCB7XG4gICAgICAgICAgICBtYWluSW1hZ2VMaW5rRWxlbWVudCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB2aWRlb3NMYWJlbCxcbiAgICAgICAgICAgIGltYWdlczM2MExhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzTGFiZWwsXG4gICAgICAgICAgICB2aWRlb3MsXG4gICAgICAgICAgICBpbWFnZXMzNjAsXG4gICAgICAgICAgICBpbWFnZXMsXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyByZXBsYWNlIGxvYWRpbmcgbW9kYWwgd2l0aCB0aGUgYWN0dWFsIG1vZGFsXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5odG1sKCRnYWxsZXJ5TW9kYWwuaHRtbCgpKTtcblxuICAgICAgICB0aGlzLmluaXRJbWFnZVpvb20oKTtcblxuICAgICAgICB0aGlzLmZvY3VzVHJhcCA9IGNyZWF0ZUZvY3VzVHJhcCh0aGlzLiRnYWxsZXJ5TW9kYWwuZ2V0KDApLCB7XG4gICAgICAgICAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgICAgICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UsXG4gICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKHtcbiAgICAgICAgZmlyc3RWaWRlbyA9IGZhbHNlLFxuICAgICAgICBmaXJzdDM2MCA9IGZhbHNlLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLm9wZW5Mb2FkaW5nTW9kYWwoKTtcblxuICAgICAgICB0aGlzLmxvYWRNb2RhbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZpcnN0VmlkZW8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5maXJzdCgpLmRhdGEoJ2ltYWdlR2FsbGVyeUl0ZW1WaWRlb0lkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8odmlkZW9JZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmaXJzdDM2MCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcl0nKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFpbjM2MChcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdleWV2YUltYWdlR2FsbGVyeU1vZGFsSXRlbVJvdGF0b3InKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcC5hY3RpdmF0ZSgpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hQcm9kdWN0KCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXMgfHwgdGhpcy52aWRlb3MgfHwgdGhpcy5pbWFnZXMzNjApIHJldHVybjtcblxuICAgICAgICBjb25zdCBbem9vbVdpZHRoLCB6b29tSGVpZ2h0XSA9IHRoaXMuem9vbVNpemUuc3BsaXQoJ3gnKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgY29uc3QgW2ltYWdlV2lkdGgsIGltYWdlSGVpZ2h0XSA9IHRoaXMucHJvZHVjdFNpemUuc3BsaXQoJ3gnKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgY29uc3QgW3RodW1iV2lkdGgsIHRodW1iSGVpZ2h0XSA9IHRoaXMudGh1bWJTaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XG5cbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICBxdWVyeShcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0SWQ6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkem9vbVdpZHRoOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHpvb21IZWlnaHQ6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW1hZ2VXaWR0aDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbWFnZUhlaWdodDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aHVtYldpZHRoOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHRodW1iSGVpZ2h0OiBJbnQhXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdChlbnRpdHlJZDogJHByb2R1Y3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwod2lkdGg6ICRpbWFnZVdpZHRoLCBoZWlnaHQ6ICRpbWFnZUhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsVXJsOiB1cmwod2lkdGg6ICR0aHVtYldpZHRoLCBoZWlnaHQ6ICR0aHVtYkhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgem9vbVVybDogdXJsKHdpZHRoOiAkem9vbVdpZHRoLCBoZWlnaHQ6ICR6b29tSGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxUZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHMobmFtZXM6IFtcIl9fQDM2MFwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0SWQsXG4gICAgICAgICAgICAgICAgICAgIHpvb21XaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgem9vbUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHRodW1iV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHRodW1iSGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmdyYXBoUUxUb2tlbn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IFtpbWFnZXMsIHZpZGVvcywgaW1hZ2VzMzYwXSA9IFtcbiAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QuaW1hZ2VzLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IG5vZGUpLFxuICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdC52aWRlb3MuZWRnZXMubWFwKCh7IG5vZGUgfSkgPT4gbm9kZSksXG4gICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LmN1c3RvbUZpZWxkcy5lZGdlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgbm9kZSB9KSA9PiBub2RlLm5hbWUgPT09ICdfX0AzNjAnKVxuICAgICAgICAgICAgICAgIC5tYXAoKHsgbm9kZSB9KSA9PiBub2RlLnZhbHVlKSxcbiAgICAgICAgXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5PHthbHRUZXh0OiBzdHJpbmcsIGlzRGVmYXVsdDogYm9vbGVhbiwgdXJsPzogc3RyaW5nLCB0aHVtYm5haWxVcmw/OiBzdHJpbmcsIHpvb21Vcmw/OiBzdHJpbmcsIHVybFRlbXBsYXRlPzogc3RyaW5nfT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5PHt0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZ30+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52aWRlb3MgPSB2aWRlb3M7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW1hZ2VzMzYwID0gaW1hZ2VzMzYwO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VHYWxsZXJ5IGV4dGVuZHMgQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRnYWxsZXJ5KSB7XG4gICAgICAgIHN1cGVyKCRnYWxsZXJ5KTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnlNb2RhbCA9IG5ldyBJbWFnZUdhbGxlcnlNb2RhbCh0aGlzLCAkZ2FsbGVyeSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgc3VwZXIuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeU1vZGFsLmJpbmRFdmVudHMoKTtcbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4vLyBpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xyXG5pbXBvcnQgQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyBmcm9tICcuLi8uLi90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcclxuaW1wb3J0IHsgYWxlcnRNb2RhbCwgc2hvd0FsZXJ0TW9kYWwsIE1vZGFsRXZlbnRzIH0gZnJvbSAnLi4vLi4vdGhlbWUvZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IHsgZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMsIGN1cnJlbmN5Rm9ybWF0IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgU2FsZUNvdW50ZG93biBmcm9tICcuLi9zYWxlLWNvdW50ZG93bic7XHJcblxyXG5jb25zdCBERUJVR19MT0cgPSBmYWxzZTtcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZU9wdGlvblN0cmluZyA9IHMgPT4gcy5yZXBsYWNlKC86L2csICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudG9Mb3dlckNhc2UoKTtcclxuXHJcbmZ1bmN0aW9uIGVxdWFsT3B0aW9uU3RyaW5nKGEsIGIpIHtcclxuICAgIHJldHVybiBub3JtYWxpemVPcHRpb25TdHJpbmcoYSkgPT09IG5vcm1hbGl6ZU9wdGlvblN0cmluZyhiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHR3byBhcnJheXMgYXJlIGVxdWFsIHJlZ2FyZGxlc3Mgb2Ygb3JkZXJcclxuICpcclxuICogQHBhcmFtIHtBcnJheX0gYXJyMVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIyXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWxVbm9yZGVyZWQoYXJyMSwgYXJyMikge1xyXG4gICAgY29uc3QgX2FycjEgPSBhcnIxLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgY29uc3QgX2FycjIgPSBhcnIyLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgcmV0dXJuIF9hcnIxLmxlbmd0aCA9PT0gX2FycjIubGVuZ3RoICYmIF9hcnIxLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBfYXJyMltpbmRleF0pO1xyXG59XHJcblxyXG5sZXQgY2FjaGVkU2V0dGluZ3M7XHJcblxyXG4vKipcclxuICogSGFuZGxlIG11bHRpcGxlIHByb21pc2VzIHdpdGggYSBjb25jdXJyZW5jeSBsaW1pdCAoZS5nLiwgcHJvY2Vzc2luZyBvbmx5IDEwIHByb21pc2VzIGF0IGEgdGltZSBvdXQgb2YgMTApXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXk8RnVuY3Rpb248VD59IHByb21pc2VzIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBhIHByb21pc2VcclxuICogQHBhcmFtIHsqfSBsaW1pdCBudW1iZXIgb2YgcHJvbWlzZXMgdG8gcHJvY2VzcyBhdCBhIHRpbWVcclxuICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8VD4+fSByZXN1bHRzIG9mIGFsbCBwcm9taXNlc1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUHJvbWlzZXNXaXRoTGltaXQocHJvbWlzZXMsIGxpbWl0ID0gMTApIHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgIGNvbnN0IGV4ZWN1dGluZyA9IFtdOyAvLyBUcmFjayB0aGUgcHJvbWlzZXMgY3VycmVudGx5IGV4ZWN1dGluZ1xyXG5cclxuICAgIGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xyXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBwcm9taXNlIGFuZCBhZGQgaXQgdG8gdGhlIGV4ZWN1dGluZyBsaXN0XHJcbiAgICAgICAgY29uc3QgcCA9IHByb21pc2UoKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmluaXNoZWQgcHJvbWlzZSBmcm9tIGV4ZWN1dGluZyBsaXN0XHJcbiAgICAgICAgICAgIGV4ZWN1dGluZy5zcGxpY2UoZXhlY3V0aW5nLmluZGV4T2YocCksIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaChwKTtcclxuICAgICAgICBleGVjdXRpbmcucHVzaChwKTtcclxuXHJcbiAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGxpbWl0LCB3YWl0IGZvciB0aGUgZmlyc3QgdG8gZmluaXNoXHJcbiAgICAgICAgaWYgKGV4ZWN1dGluZy5sZW5ndGggPj0gbGltaXQpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKGV4ZWN1dGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdhaXQgZm9yIGFsbCByZW1haW5pbmcgcHJvbWlzZXMgdG8gY29tcGxldGVcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMgZXh0ZW5kcyBDb3JuZXJzdG9uZVByb2R1Y3REZXRhaWxzIHtcclxuICAgIG1vZGlmaWVyc01vZGFsT3ZlcmxheVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtb3ZlcmxheVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW92ZXJsYXk+PC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIG1vZGlmaWVyc01vZGFsVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbFwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY2xvc2UtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQ2xvc2VcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jbG9zZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5DbG9zZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWJhY2stYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQmFja1wiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCI+QmFjazwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LWxlZnQtbG9uZ1wiPjwvdXNlPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWhlYWRlci10aXRsZVwiPjwlJnByb2R1Y3RUaXRsZSU+PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jb250ZW50XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtdGl0bGVcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC10aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWluIGN1cnJlbnQgc3RlcCdzIHRpdGxlIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1vcHRpb25zXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBtb2RpZmllcnMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1zdW1tYXJ5XCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtc3VtbWFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBzdW1tYXJ5IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY29tcGxldGVcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBhZGQgdG8gY2FydCBidXR0b24gJiBxdHkgYm94IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWZvb3RlclwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbnRpbnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCV0eHRDb250aW51ZSU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtZm9vdGVyLXN1YnRvdGFsXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGNvbnRhaW5zIHN1YnRvdGFsIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8JSNtYWluSW1hZ2VVcmwlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiPCVtYWluSW1hZ2VVcmwlPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3Jjc2V0PVwiPCVtYWluSW1hZ2VTcmNzZXQlPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtem9vbS1pbWFnZT1cIjwlem9vbUltYWdlVXJsJT5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNpemVzPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGF6eWxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1pbWcgLz5cclxuICAgICAgICAgICAgICAgIDwlL21haW5JbWFnZVVybCU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25Ub29sdGlwVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tdG9vbHRpcFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLXRyaWdnZXJcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbD1cIk1vcmUgaW5mb3JtYXRpb25cIiB0aXRsZT1cIk1vcmUgaW5mb3JtYXRpb25cIj5pPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy10b29sdGlwLWJ1YmJsZVwiPjwldG9vbHRpcCU+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXZhbHVlLXRvb2x0aXBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdG9vbHRpcC10cmlnZ2VyXCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCJNb3JlIGluZm9ybWF0aW9uXCIgdGl0bGU9XCJNb3JlIGluZm9ybWF0aW9uXCI+aTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdG9vbHRpcC1idWJibGVcIj48JXRvb2x0aXAlPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctdmFsdWUtdG9vbHRpcC1oZWFkaW5nXCI+PCVoZWFkaW5nJT48L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uUHJpY2VUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8JSNwcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UgX3ByZWxvYWRlclwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2UgX3dpdGhUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW9sZCBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLW5vdyBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aFRheFZhbHVlJT5cIj48JXByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfd2l0aG91dFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utb2xkIF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utbm93IF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlID0gYFxyXG4gICAgICAgIDwlI3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICg8JXByaWNlV2l0aFRheCU+KVxyXG4gICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgPCVecHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICg8JXByaWNlV2l0aG91dFRheCU+KVxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICBgO1xyXG5cclxuICAgIHN1YnRvdGFsVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtZ3JvdXAtbGFiZWxcIj48JXR4dFN1YnRvdGFsJT48L2Rpdj5cclxuICAgICAgICAgICAgPCUjcHJlbG9hZGVyJT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsIF9wcmVsb2FkZXJcIj4uLi48L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJlbG9hZGVyJT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsIF93aXRoVGF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1vbGQgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ub3cgX3dpdGhUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3dpdGhvdXRUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW9sZCBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW5vdyBfd2l0aG91dFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JXByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHN1bW1hcnlUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDwlI29wdGlvbnMlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb24tbmFtZVwiPjwlbmFtZSU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi12YWx1ZVwiPjwldmFsdWUlPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1zdW1tYXJ5T3B0aW9ucy1vcHRpb24tcHJpY2VzXCI+PCUmcHJpY2VIdG1sJT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvb3B0aW9ucyU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHNob3dQcmljZUZyZWUgPSBmYWxzZTtcclxuICAgIHNob3dQcmljZVplcm8gPSBmYWxzZTtcclxuXHJcbiAgICBhZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IgPSAnLmFkZC10by1jYXJ0LXdyYXBwZXInO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FjaGUgZm9yIGZ1bmN0aW9uIGBmZXRjaE9wdGlvblByaWNlYFxyXG4gICAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIHsgcHJpY2VzV2l0aFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSwgcHJpY2VzV2l0aG91dFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSB9Pn1cclxuICAgICAqL1xyXG4gICAgZmV0Y2hPcHRpb25QcmljZUNhY2hlID0ge307XHJcblxyXG4gICAgY29uc29sZSA9IHtcclxuICAgICAgICBsb2c6ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChERUJVR19MT0cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBmaXhGb3JtRWxlbWVudFVuaXF1ZUlkcygkc2NvcGUpO1xyXG5cclxuICAgICAgICBzdXBlcigkc2NvcGUsIC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJGNob29zZU9wdGlvbnNCdG4gPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gTnVtYmVyKCRmb3JtLmZpbmQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScpLnZhbCgpKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQcm9kdWN0TWV0YWRhdGEoJGZvcm0pO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSBtb2RpZmllcnMgbW9kYWwgZmVhdHVyZVxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIGVuYWJsZSBtb2RpZmllcnMgbW9kYWwgaWYgb3VyIGNob29zZSBvcHRpb25zIGJ1dHRvbiBhcHBlYXJzIGluIHRoZSBwcm9kdWN0IGRldGFpbHNcclxuICAgICAgICB0aGlzLmVuYWJsZU1vZGlmaWVyc01vZGFsID0gJGNob29zZU9wdGlvbnNCdG4ubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RpZmllcnNNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kUHJvZHVjdEVkaXRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRTdGlja3lBZGRUb0NhcnRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRNb2RhbERlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmluaXRPcHRpb25TdGVwcGVyKCk7XHJcbiAgICAgICAgdGhpcy5zeW5jUHJvZHVjdENhcmRRdHkoKTtcclxuICAgICAgICB0aGlzLmluaXRTYWxlQ291bnRkb3duKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJJbmxpbmVPcHRpb25Ub29sdGlwcygpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyU3BlY1Rvb2x0aXBzKCk7XHJcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3VwZGF0ZS13aXNobGlzdC1idXR0b25zJywgW3RoaXMuJHNjb3BlXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKSkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlTWV0YWRhdGEgPSBzZWxlY3RvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkZm9ybS5maW5kKHNlbGVjdG9yKS5maXJzdCgpLnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBpbnZhbGlkIG1ldGFkYXRhIHBheWxvYWRzLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcyA9IHBhcnNlTWV0YWRhdGEoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtY3VzdG9tLWZpZWxkc10nKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtcclxuICAgICAgICAgKiAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgICogICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAgICAgKiAgIHN0YXRlOiAnbW9kaWZpZXInIHwgJ3ZhcmlhbnRfb3B0aW9uJyxcclxuICAgICAgICAgKiAgIHBhcnRpYWw6ICdzd2F0Y2gnIHwgJ3NldC1yZWN0YW5nbGUnIHwgJ3NldC1zZWxlY3QnIHwgJ3NldC1yYWRpbydcclxuICAgICAgICAgKiAgICAgfCAnaW5wdXQtdGV4dCcgfCAnaW5wdXQtbnVtYmVycycgfCAnaW5wdXQtY2hlY2tib3gnIHwgJ2lucHV0LWZpbGUnXHJcbiAgICAgICAgICogICAgIHwgJ2RhdGUnIHwgJ3RleHRhcmVhJyB8ICdwcm9kdWN0LWxpc3QnLFxyXG4gICAgICAgICAqICAgcmVxdWlyZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICogICBwcmVmaWxsPzogc3RyaW5nLFxyXG4gICAgICAgICAqICAgc2VsZWN0ZWRfZGF0ZT86IHtcclxuICAgICAgICAgKiAgICAgZGF5OiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIG1vbnRoOiBzdHJpbmcsXHJcbiAgICAgICAgICogICAgIHllYXI6IHN0cmluZ1xyXG4gICAgICAgICAqICAgfSxcclxuICAgICAgICAgKiAgIGNoZWNrZWQ/OiBib29sZWFuLFxyXG4gICAgICAgICAqICAgbm9WYWx1ZT86IG51bWJlcixcclxuICAgICAgICAgKiAgIHZhbHVlPzogbnVtYmVyLFxyXG4gICAgICAgICAqICAgdmFsdWVzPzogQXJyYXk8e1xyXG4gICAgICAgICAqICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAqICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICAgICAqICAgICBzZWxlY3RlZDogYm9vbGVhbixcclxuICAgICAgICAgKiAgICAgZGF0YTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPlxyXG4gICAgICAgICAqICAgfT5cclxuICAgICAgICAgKiB9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zID0gcGFyc2VNZXRhZGF0YSgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscy5jdXN0b21GaWVsZHM6JywgdGhpcy5jdXN0b21GaWVsZHMpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzLnByb2R1Y3RPcHRpb25zOicsIHRoaXMucHJvZHVjdE9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkdXBkYXRlUHJvZHVjdFdyYXBwZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld01vZGVsKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IHN1cGVyLmdldFZpZXdNb2RlbCguLi5hcmdzKTtcclxuICAgICAgICBtb2RlbC4kdXBkYXRlUHJvZHVjdFdyYXBwZXIgPSB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlcjtcclxuICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xyXG4gICAgICAgIGNvbnN0ICRidG4gPSB0aGlzLiR1cGRhdGVQcm9kdWN0V3JhcHBlci5maW5kKCdpbnB1dCwgYnV0dG9uJyk7XHJcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcclxuICAgICAgICAgICAgJGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRidG4ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcnJpZGUgdGhlIG1ldGhvZCB0byBzdXBwb3J0IGVkaXQgcHJvZHVjdCBpbiBjYXJ0XHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cclxuICAgICAqL1xyXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xyXG4gICAgICAgIGlmIChldmVudC5lZGl0UHJvZHVjdEluQ2FydCkge1xyXG4gICAgICAgICAgICAkKGZvcm0pLmZpbmQoJ2lucHV0W25hbWU9XCJhY3Rpb25cIl0nKS52YWwoJ0VkaXRQcm9kdWN0RmllbGRzSW5DYXJ0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoZm9ybSkuZmluZCgnaW5wdXRbbmFtZT1cImFjdGlvblwiXScpLnZhbCgnYWRkJyk7XHJcbiAgICAgICAgICAgIHN1cGVyLmFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVkaXQgcHJvZHVjdCBpbiBjYXJ0LlxyXG4gICAgICogQWxtb3N0IGNsb25lIGZyb20gYWRkUHJvZHVjdFRvQ2FydCBtZXRob2QgZnJvbSB0aGUgcGFyZW50IGNsYXNzLlxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcclxuICAgICAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZWRpdFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcclxuICAgICAgICBjb25zdCAkc2F2ZUJ0biA9ICQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJywgJChldmVudC50YXJnZXQpKS5maW5kKCdpbnB1dCwgYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkc2F2ZUJ0bi52YWwoKTtcclxuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRzYXZlQnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkc2F2ZUJ0blxyXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxyXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJHNhdmVCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xyXG5cclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzYXZlQnRuXHJcbiAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBmYWlsdXJlID0gKGVycm9yVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JUZXh0O1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkc2F2ZUJ0bikpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0TW9kYWwoKS4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkc2F2ZUJ0bjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0UXVhbnRpdHkpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZm9ybURhdGEuZ2V0KCdpdGVtX2lkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1F0eSA9IGZvcm1EYXRhLmdldCgncXR5W10nKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWx1cmUoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgfSkuZG9uZSgocmVzcG9uc2UpID0+IHN1Y2Nlc3MocmVzcG9uc2UpKS5mYWlsKChfeGhyLCBfc3RhdHVzLCBlcnJvcikgPT4gZmFpbHVyZShlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkoaXRlbUlkLCBuZXdRdHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZT8uZGF0YT8uc3RhdHVzICE9PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGNsaWNrIG9uIHRoZSBBZGQgTmV3IHRvIENhcnQgYnV0dG9uLCB0cmlnZ2VyIHRoZSBmb3JtIHN1Ym1pdCBldmVudCB3aXRoIGBhZGROZXdUb0NhcnRgIGZsYWdcclxuICAgICAqIHNvIHRoYXQgbmV3IHByb2R1Y3QgaXMgYWx3YXlzIGFkZGVkIHRvIGNhcnQgcmVnYXJkbGVzcyBvZiBlZGl0IHByb2R1Y3QgaW4gY2FydCBvciBub3RcclxuICAgICAqL1xyXG4gICAgYmluZFByb2R1Y3RFZGl0RXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEV2ZW50ID0gJC5FdmVudCgnc3VibWl0JywgeyBlZGl0UHJvZHVjdEluQ2FydDogdHJ1ZSB9KTtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyLmZpbmQoJ2lucHV0LCBidXR0b24nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICRmb3JtLnRyaWdnZXIoc3VibWl0RXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRTdGlja3lBZGRUb0NhcnRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlU3RpY2t5QWRkVG9DYXJ0Q2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkYnV0dG9uID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKCRidXR0b24ucHJvcCgnZGlzYWJsZWQnKSB8fCAkYnV0dG9uLmF0dHIoJ2FyaWEtZGlzYWJsZWQnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJykuZmlyc3QoKTtcclxuICAgICAgICAgICAgaWYgKCEkZm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJHN0aWNreVF0eSA9ICRidXR0b24uc2libGluZ3MoJy5wcm9kdWN0Vmlldy1zdGlja3ktYWRkLXRvLWNhcnQnKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5tb2JpbGUtaW5jcmVtZW50IGlucHV0W25hbWU9XCJxdHlbXVwiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgJGZvcm1RdHkgPSAkZm9ybS5maW5kKCdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGlucHV0W25hbWU9XCJxdHlbXVwiXScpLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHN0aWNreVF0eS5sZW5ndGggJiYgJGZvcm1RdHkubGVuZ3RoICYmICRmb3JtUXR5LnZhbCgpICE9PSAkc3RpY2t5UXR5LnZhbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybVF0eS52YWwoJHN0aWNreVF0eS52YWwoKSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybVswXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtICYmICFmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW52YWxpZEZpZWxkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCc6aW52YWxpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbnZhbGlkRmllbGQ/LnNjcm9sbEludG9WaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZEZpZWxkLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGludmFsaWRGaWVsZD8uZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvcm0ucmVwb3J0VmFsaWRpdHkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGludmFsaWRGaWVsZD8ucmVwb3J0VmFsaWRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRmllbGQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJyNzdGlja3ktYWRkLXRvLWNhcnQnKVxyXG4gICAgICAgICAgICAub2ZmKCdjbGljay5leWV2YVN0aWNreUFkZFRvQ2FydCcpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2suZXlldmFTdGlja3lBZGRUb0NhcnQnLCBoYW5kbGVTdGlja3lBZGRUb0NhcnRDbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZE1vZGFsRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBkZXN0cm95IHRoZSBpbWFnZSBnYWxsZXJ5IG1vZGFsIHdoZW4gcXVpY2stdmlldyBtb2RhbCBpcyBjbG9zZWRcclxuICAgICAgICAvLyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXHJcbiAgICAgICAgdGhpcy4kc2NvcGUuY2xvc2VzdCgnLm1vZGFsJykub25lKE1vZGFsRXZlbnRzLmNsb3NlZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbWFnZUdhbGxlcnlNb2RhbC5kZXN0cm95TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0T3B0aW9uU3RlcHBlcigpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1zdGVwcGVyXScpLmVhY2goKF9pLCBmb3JtRmllbGRFbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZm9ybUZpZWxkID0gJChmb3JtRmllbGRFbCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRkZWMgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImRlY1wiXScpO1xyXG4gICAgICAgICAgICBjb25zdCAkaW5jID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJpbmNcIl0nKTtcclxuICAgICAgICAgICAgY29uc3QgJGNoZWNrID0gJGZvcm1GaWVsZC5maW5kKCdbZGF0YS1hY3Rpb249XCJjaGVja1wiXScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5hZGRDbGFzcygnX2NoZWNraW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86dmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaXJzdCA9ICRyYWRpb3MuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSAkcmFkaW9zLmluZGV4KCRjaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgaSA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgPT09ICRyYWRpb3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5yZW1vdmVDbGFzcygnX2NoZWNraW5nJyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbml0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3QgPSAoaW5jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykuYWRkQ2xhc3MoJ19jaGVja2luZycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOnZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjaGVja2VkID0gJHJhZGlvcy5maWx0ZXIoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZmlyc3QgPSAkcmFkaW9zLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVja2VkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3VuZCBjaGVja2VkIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRyYWRpb3MuaW5kZXgoJGNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZWN0IHRoZSBuZXh0IHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgJHJhZGlvcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLmVxKGkgKyAxKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGkgKyAxID09PSAkcmFkaW9zLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIHByZXZpb3VzIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZXEoaSAtIDEpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGkgLSAxID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkZmlyc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIGNoZWNrZWQgcmFkaW8sIGFuZCBmb3VuZCB0aGUgZmlyc3QgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jICYmICRmaXJzdC5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKyBhbmQgZmlyc3Qgb3B0aW9uIGlzICdub25lJywgaWdub3JlIHRoZSBub25lIG9wdGlvbiwgc2VsZWN0IHRoZSBmaXJzdCB2YWx1ZWQgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3Mubm90KCRmaXJzdCkuZmlyc3QoKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSwgc2VsZWN0IHRoZSBmaXJzdCByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZmlyc3QucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCAkcmFkaW9zLmxlbmd0aCA9PT0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5hZGRDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgY2hlY2tlZCByYWRpbyBpcyAnbm9uZScgdGhlbiB1bmNoZWNrIHRoZSBjaGVjayBidXR0b25cclxuICAgICAgICAgICAgICAgIGlmICgkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5maWx0ZXIoJ1t2YWx1ZT1cIlwiXSwgW3ZhbHVlPVwiMFwiXScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2sucmVtb3ZlQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLnJlbW92ZUNsYXNzKCdfY2hlY2tpbmcnKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRkZWMub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGluYy5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0KHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICRjaGVjay5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRjaGVjay5oYXNDbGFzcygnX2NoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuY2hlY2sgdGhlIGNoZWNrZWQgcmFkaW8gYW5kIHNlbGVjdCB0aGUgJ25vbmUnIHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHVuY2hlY2sgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRub25lID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkbm9uZS5sZW5ndGggPiAwKSAkbm9uZS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgkdW5jaGVjay5sZW5ndGgpICR1bmNoZWNrLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5yZW1vdmVDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN5bmMgcHJvZHVjdCBxdWFudGl0eSB3aXRoIHF0eSBvZiB0aGUgY29ycmVzcG9uZGluZyBwcm9kdWN0IGNhcmRcclxuICAgICAqL1xyXG4gICAgc3luY1Byb2R1Y3RDYXJkUXR5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RRdWFudGl0eSkgcmV0dXJuOyAvLyBzdG9wIGlmIGVkaXQgcHJvZHVjdCBpbiBjYXJ0XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRRdHkgPSAkKGBbZGF0YS1jYXJkLXF1YW50aXR5LWNoYW5nZV0gaW5wdXRbbmFtZT1cInF0eV8ke3RoaXMucHJvZHVjdElkfVwiXWApLnZhbCgpO1xyXG4gICAgICAgIGlmICghY2FyZFF0eSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCAkcXR5ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBpbnB1dFtuYW1lPVwicXR5W11cIl0nKTtcclxuICAgICAgICBjb25zdCBxdHkgPSAkcXR5LnZhbCgpO1xyXG4gICAgICAgIGlmICgkcXR5Lmxlbmd0aCA+IDAgJiYgcXR5ICE9PSBjYXJkUXR5KSB7XHJcbiAgICAgICAgICAgICRxdHkudmFsKGNhcmRRdHkpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0U2FsZUNvdW50ZG93bigpIHtcclxuICAgICAgICBjb25zdCB7IHR4dFNhbGVDb3VudGRvd25KU09OIH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtc2FsZS1jb3VudGRvd24tZGF0ZV0nKTtcclxuICAgICAgICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAkZWwuZGF0YSgnc2FsZUNvdW50ZG93bkxhYmVsJykgfSk7XHJcblxyXG4gICAgICAgIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHsgdHh0U2FsZUNvdW50ZG93bkpTT04gfSk7XHJcbiAgICAgICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaWV3KGRhdGEsIC4uLmFyZ3MpIHtcclxuICAgICAgICBzdXBlci51cGRhdGVWaWV3KGRhdGEsIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFByb2R1Y3RNZXRhZGF0YSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTYWxlUGVyY2VudChkYXRhKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoaXBwaW5nQ291bnRkb3duKGRhdGEpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpXHJcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCAhZGF0YT8ucHVyY2hhc2FibGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vbmVTYWxlcyA9IHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvblByaWNlcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcywgZm9ybURhdGEsIG5vbmVTYWxlcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RpZmllcnNTdWJ0b3RhbChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTYWxlUGVyY2VudChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJGRpdiA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcmljZS1zZWN0aW9uLS1zYWxlUGVyY2VudCcpO1xyXG4gICAgICAgIGNvbnN0ICRzcGFuID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYWxlLXBlcmNlbnRdJyk7XHJcbiAgICAgICAgbGV0IHNhbGVQZXJjZW50ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGRhdGE/LnByaWNlPy53aXRob3V0X3RheD8udmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGE/LnByaWNlPy5ycnBfd2l0aG91dF90YXg/LnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSAvIGRhdGEucHJpY2UucnJwX3dpdGhvdXRfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJpY2U/Lm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWUgLyBkYXRhLnByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy53aXRoX3RheD8udmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGE/LnByaWNlPy5ycnBfd2l0aF90YXg/LnZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2FsZVBlcmNlbnQgPSBNYXRoLnJvdW5kKCgxIC0gZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZSAvIGRhdGEucHJpY2UucnJwX3dpdGhfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YT8ucHJpY2U/Lm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUgLyBkYXRhLnByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LnZhbHVlKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzYWxlUGVyY2VudCA+IDApIHtcclxuICAgICAgICAgICAgJHNwYW4udGV4dChgLSR7c2FsZVBlcmNlbnR9JWApO1xyXG4gICAgICAgICAgICAkZGl2LnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkc3Bhbi50ZXh0KCcnKTtcclxuICAgICAgICAgICAgJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNoaXBwaW5nQ291bnRkb3duKGRhdGEpIHtcclxuICAgICAgICBjb25zdCAkc2hpcHBpbmdDb3VudGRvd24gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wYXBhdGhlbWVzLXNoaXBwaW5nLWNvdW50ZG93bl0nKTtcclxuXHJcbiAgICAgICAgaWYgKCRzaGlwcGluZ0NvdW50ZG93bi5pcygnOmhpZGRlbicpICYmIGRhdGE/LnB1cmNoYXNhYmxlKSB7XHJcbiAgICAgICAgICAgICRzaGlwcGluZ0NvdW50ZG93bi5jc3MoJ3N0eWxlJywgJ2ZsZXgnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzaGlwcGluZ0NvdW50ZG93bi5pcygnOnZpc2libGUnKSAmJiAhZGF0YT8ucHVyY2hhc2FibGUpIHtcclxuICAgICAgICAgICAgJHNoaXBwaW5nQ291bnRkb3duLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FydENvbnRlbnQoLi4uYXJncykge1xyXG4gICAgICAgIC8vIGNsb3NlIG1vZGlmaWVycyBtb2RhbCBhZnRlciBhZGRlZCBwcm9kdWN0IHRvIGNhcnRcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVNb2RpZmllcnNNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdXBlci51cGRhdGVDYXJ0Q29udGVudCguLi5hcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgc3VwZXIuc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSwgLi4uYXJncyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEltZyA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1pbWddJyk7XHJcbiAgICAgICAgY29uc3QgeyBtYWluSW1hZ2VVcmwsIHpvb21JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0IH0gPSB0aGlzLmltYWdlR2FsbGVyeS5jdXJyZW50SW1hZ2U7XHJcblxyXG4gICAgICAgIGlmIChtYWluSW1hZ2VVcmwgJiYgbWFpbkltYWdlVXJsICE9PSAkbW9kaWZpZXJzTW9kYWxJbWcuYXR0cignc3JjJykpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsSW1nXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXpvb20taW1hZ2UnLCB6b29tSW1hZ2VVcmwpO1xyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIG1haW4gaW1hZ2UgaW4gcXVpY2stdmlldyBvbiBtb2JpbGVcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoX2ksIGVsKSA9PiAkKGVsKS5jbG9zZXN0KCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXQgcHJpY2Ugd2l0aCBjdXJyZW5jeSBzeW1ib2wgYW5kIGRlY2ltYWwgcGxhY2VzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBsdXNTeW1ib2wgd2hldGhlciB0byBzaG93IHBsdXMgc3ltYm9sIGZvciBwb3NpdGl2ZSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZm9ybWF0UHJpY2UodmFsdWUsIHBsdXNTeW1ib2wgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBjYWNoZWRTZXR0aW5ncyA/IHtcclxuICAgICAgICAgICAgY3VycmVuY3lfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuc3ltYm9sLFxyXG4gICAgICAgICAgICBjdXJyZW5jeV9sb2NhdGlvbjogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5zeW1ib2xQbGFjZW1lbnQsXHJcbiAgICAgICAgICAgIGRlY2ltYWxfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuZGVjaW1hbFRva2VuLFxyXG4gICAgICAgICAgICBkZWNpbWFsX3BsYWNlczogY2FjaGVkU2V0dGluZ3MuY3VycmVuY3kuZGlzcGxheS5kZWNpbWFsUGxhY2VzLFxyXG4gICAgICAgICAgICB0aG91c2FuZHNfdG9rZW46IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkudGhvdXNhbmRzVG9rZW4sXHJcbiAgICAgICAgfSA6IHt9O1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGN1cnJlbmN5Rm9ybWF0KC12YWx1ZSwgZGlzcGxheSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwbHVzU3ltYm9sID8gYC0ke2Zvcm1hdHRlZH1gIDogZm9ybWF0dGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkID0gY3VycmVuY3lGb3JtYXQodmFsdWUsIGRpc3BsYXkpO1xyXG4gICAgICAgIHJldHVybiBwbHVzU3ltYm9sID8gYCske2Zvcm1hdHRlZH1gIDogZm9ybWF0dGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZCBvcHRpb24gdmFsdWUgYnkgb3B0aW9uIG5hbWUgYW5kIHZhbHVlIG5hbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSBvcHRpb24gZGlzcGxheSBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVOYW1lIHZhbHVlIGxhYmVsXHJcbiAgICAgKiBAcmV0dXJucyB7W251bWJlciwgbnVtYmVyXX0gb3B0aW9uSWQsIHZhbHVlSWRcclxuICAgICAqL1xyXG4gICAgZmluZE9wdGlvblZhbHVlKG9wdGlvbk5hbWUsIHZhbHVlTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGhpZGVJZk9wdGlvbiA9IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBkaXNwbGF5X25hbWUgfSkgPT4gZGlzcGxheV9uYW1lLnJlcGxhY2UoJy86Oy9nJywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpID09PSBvcHRpb25OYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaGlkZUlmT3B0aW9uPy52YWx1ZXM/LmZpbmQoKHsgbGFiZWwgfSkgPT4gbGFiZWwucmVwbGFjZSgnLzo7L2cnLCAnJykucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCBvcHRpb25JZCA9IGhpZGVJZk9wdGlvbj8uaWQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWVJZCA9IHZhbHVlPy5pZDtcclxuICAgICAgICByZXR1cm4gW29wdGlvbklkLCB2YWx1ZUlkXTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNb2RpZmllcnNNb2RhbCgpIHtcclxuICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW5dJykuYXR0cignZGF0YS16b29tLWltYWdlJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1tYWluLWltYWdlXScpLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlciA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtYXR0cmlidXRlcy1tZXNzYWdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRXcmFwcGVyID0gJGZvcm0uZmluZCgnW2RhdGEtZXlldmEtYWRkLXRvLWNhcnQtd3JhcHBlcl0nKTtcclxuICAgICAgICBjb25zdCAkY2hvb3NlT3B0aW9uc0J0biA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RpZmllcnNNb2RhbFRlbXBsYXRlLCB7XHJcbiAgICAgICAgICAgIHR4dENvbnRpbnVlOiB0aGlzLmNvbnRleHQudHh0Q29udGludWUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RUaXRsZTogdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC10aXRsZV0nKS5odG1sKCksXHJcbiAgICAgICAgICAgIG1haW5JbWFnZVVybDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLm1haW5JbWFnZVVybCB8fCBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCB8fCB6b29tSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlLm1haW5JbWFnZVNyY3NldCB8fCBtYWluSW1hZ2VTcmNzZXQsXHJcbiAgICAgICAgfSwgbnVsbCwgWyc8JScsICclPiddKSkuYXBwZW5kVG8oJHByb2R1Y3RPcHRpb25zRWwpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ29tcGxldGUgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENsb3NlID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jbG9zZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29udGludWVdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQmFjayA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFja10nKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSBtb2RpZmllciBvcHRpb25zIHRvIHRoZSBtb2RhbFxyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXN0YXRlPVwibW9kaWZpZXJcIl0nKS5hcHBlbmRUbygkbW9kaWZpZXJzTW9kYWxPcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSBhZGQgdG8gY2FydCAmIHF0eSBib3ggdG8gdGhlIG1vZGFsXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29tcGxldGUuYXBwZW5kKCRhZGRUb0NhcnRXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgLy8gY2xvbmUgcHVyY2hhc2FibGUgbWVzc2FnZVxyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLmZpbmQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJykuY2xvbmUoKVxyXG4gICAgICAgICAgICAuYXBwZW5kVG8oJGF0dHJpYnV0ZU1lc3NhZ2VXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ2xvc2Uub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQmFjay5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrU3RlcCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxDb250aW51ZS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGFuZCByZXBvcnQgaW52YWxpZCBpbnB1dHMgaWYgYW55XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXSB8fCBbXTtcclxuICAgICAgICAgICAgY29uc3QgaW52YWxpZElucHV0cyA9IHNob3dPcHRpb25JZHMucmVkdWNlKChfaW52YWxpZElucHV0cywgb3B0aW9uSWQpID0+IChbXHJcbiAgICAgICAgICAgICAgICAuLi5faW52YWxpZElucHV0cyxcclxuICAgICAgICAgICAgICAgIC4uLiRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAuZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbklkfV1bZGF5XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW21vbnRoXVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW3llYXJdXCJdYClcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGVsID0+ICFlbC5jaGVja1ZhbGlkaXR5KCkpLFxyXG4gICAgICAgICAgICBdKSwgW10pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGludmFsaWRJbnB1dHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGludmFsaWRJbnB1dHNbMF0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYXV0byBzZWxlY3QgdGhlICdub25lJyBvcHRpb24gaWYgbm8gcmFkaW8gb3B0aW9uIG9yIG5vIHByb2R1Y3QgcGljayBsaXN0IG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dXCJdYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJHJhZGlvcy5sZW5ndGggPiAwICYmICRyYWRpb3MuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZmlsdGVyKCdbdmFsdWU9XCJcIl0sIFt2YWx1ZT1cIjBcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gYWZ0ZXIgY2xpY2tpbmcgY29udGludWUgYnV0dG9uLCB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IGF1dG9tYXRpY2FsbHlcclxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkY2hvb3NlT3B0aW9uc0J0bi5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXF1aXJlIHNlbGVjdGluZyB2YXJpYW50IG9wdGlvbnMgYmVmb3JlIG9wZW5pbmcgdGhlIG1vZGFsXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlVmFyaWFudE9wdGlvbnMoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TW9kaWZpZXJzVmlldygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kaWZpZXJzTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RpZmllcnNNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICAuYmVmb3JlKHRoaXMubW9kaWZpZXJzTW9kYWxPdmVybGF5VGVtcGxhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsXScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW92ZXJsYXldJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1vZGlmaWVyc1ZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXHJcbiAgICAgICAgICAgIC5ub3QoJ1t0eXBlPVwiY2hlY2tib3hcIl0sIFt0eXBlPVwicmFkaW9cIl0sIFt0eXBlPVwiZmlsZVwiXScpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnZhbCgnJyk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBmbGFnIGFueSBpbnB1dC9zZWxlY3QgaXMgbm90IHNob3duIHlldCBzbyB0aGF0IHRoZSBjb250aW51ZSBidXR0b24gaXMgc2hvd25cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ1tuYW1lXj1cImF0dHJpYnV0ZVwiXScpLnJlbW92ZUF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgbW9kYWwgdG8gdXBkYXRlIHRoaXMgdmlldyBhdXRvbWF0aWNhbGx5IHdoZW4gb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbnRhaW5zIGFsbCBvcHRpb24gaWRzIHRoYXQgYXJlIHNob3duIGluIGVhY2ggc3RlcFxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJbXVtdfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIHJlc2V0IHRoZSBzaG93biBvcHRpb24gaWRzIGluIGFsbCBzdGVwc1xyXG4gICAgICAgIHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTm9uLXNhbGUgcHJpY2VzIGZvciBvcHRpb24gdmFsdWVzLlxyXG4gICAgICAgICAqIFB1bGxpbmcgZnJvbSBjdXN0b20gZmllbGRzIGBfX0Bub25zYWxlIHByaWNlID0gb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZVs7IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWU7IC4uLl1gLlxyXG4gICAgICAgICAqIFBvcHVsYXRlZCBpbiBgdXBkYXRlTW9kaWZpZXJzVmlldygpYC5cclxuICAgICAgICAgKiBAdHlwZSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9IH19XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZE5vbmVTYWxlcyA9IHt9O1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgbW9kaWZpZXJzIG1vZGFsIGFzYXAgc28gdGhhdCBub3QgYWxsIG9wdGlvbnMgYXJlIGRpc3BsYXllZFxyXG4gICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGw6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsID0gZmFsc2UgfSA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEJhY2sgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtYmFja10nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1zdW1tYXJ5XScpLmVtcHR5KCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsVGl0bGUgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtdGl0bGVdJykuZW1wdHkoKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxGb290ZXIgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENvbnRpbnVlID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlXScpLmhpZGUoKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XHJcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydFdyYXBwZXIgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1hZGQtdG8tY2FydC13cmFwcGVyXScpLmhpZGUoKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gZm9ybURhdGE6ICcsIEFycmF5LmZyb20oZm9ybURhdGEuZW50cmllcygpKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEN1cnJlbnQgb3B0aW9uIGlkIHRoYXQgYXBwZWFycyBhbG9uZSB3aXRob3V0IGFueSBncm91cC5cclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfHVuZGVmaW5lZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgY3VycmVudE9wdGlvbklkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdXJyZW50IGdyb3VwIG5hbWUgdGhhdCB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8uXHJcbiAgICAgICAgICogR3JvdXAgbmFtZSB0aGF0IGFwcGVhcnMgY3VzdG9tIGZpZWxkIGBfX0Bncm91cCAoZ3JvdXAgbmFtZSlgXHJcbiAgICAgICAgICogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRHcm91cE5hbWU7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9wdGlvbiBpZHMgb2Ygb3B0aW9uIG5hbWVzIGFwcGVhciBpbiB0aGUgdmFsdWUgb2YgY3VzdG9tIGZpZWxkIGBfX0Bncm91cGAuXHJcbiAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgKiAgIEN1c3RvbSBmaWVsZDogYF9fQGdyb3VwIFNlbGVjdCBhIHByZXNjcmlwdGlvbiB0eXBlYCA9IGBwcmVzY3JpcHRpb24gdHlwZWBcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIG9wdGlvbiBpZHMgc2hvdWxkIGJlIGhpZGRlblxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBoaWRlT3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7b3B0aW9uSWQ6IG51bWJlciwgdmFsdWVJZDogbnVtYmVyfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgaGlkZU9wdGlvblZhbHVlcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUb29sdGlwcyBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlcyBleHRyYWN0ZWQgZnJvbSBjdXN0b20gZmllbGRzIGBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBgXHJcbiAgICAgICAgICogQHR5cGUge09iamVjdDxudW1iZXIsIHsgdG9vbHRpcDogc3RyaW5nLCB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9PlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBzID0ge307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRvb2x0aXAgaGVhZGluZ3MgZm9yIG9wdGlvbiB2YWx1ZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AdG9vbHRpcF9oZWFkaW5nIG5hbWU6dmFsdWUgPSB0b29sdGlwIGhlYWRpbmdgXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9fVxyXG4gICAgICAgICAqIEBleGFtcGxlIHsgMjogeyAxMjM6ICdUb29sdGlwIEhlYWRpbmcnIH0gfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBIZWFkaW5ncyA9IHt9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBOb24tc2FsZSBwcmljZXMgZm9yIG9wdGlvbiB2YWx1ZXMuXHJcbiAgICAgICAgICogQ2FuIGJlIG92ZXJyaWRkZW4gYnkgY3VzdG9tIGZpZWxkcyBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH0gfX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBub25lU2FsZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT3B0aW9uIHJlbmFtZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AcmVuYW1lIG9wdGlvbiBuYW1lID0gbmV3IG5hbWVgXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiBzdHJpbmcgfX1cclxuICAgICAgICAgKiBAZXhhbXBsZSB7IDEyMzogJ05ldyBOYW1lJywgNDU2OiAnQW5vdGhlciBOYW1lJyB9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uUmVuYW1lcyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBzdGF0ZSB9KSA9PiBzdGF0ZSA9PT0gJ21vZGlmaWVyJykuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCclY1Byb2R1Y3REZXRhaWxzIC0gb3B0aW9uOiAnLCAnY29sb3I6IGN5YW4nLCBvcHRpb24uZGlzcGxheV9uYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoaWRlT3B0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogRmlyc3QgZ3JvdXAgbmFtZSB0aGF0IHRoZSBvcHRpb24gYmVsb25ncyB0by5cclxuICAgICAgICAgICAgICogR3JvdXAgbmFtZSB0aGF0IGFwcGVhcnMgY3VzdG9tIGZpZWxkIGBfX0Bncm91cCAoZ3JvdXAgbmFtZSlgXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbGV0IGdyb3VwTmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBPcHRpb24gaWRzIG9mIG9wdGlvbiBuYW1lcyBhcHBlYXIgaW4gdGhlIHZhbHVlIG9mIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgLlxyXG4gICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAgICAgICAgKiAgIEN1c3RvbSBmaWVsZDogYF9fQGdyb3VwIFNlbGVjdCBhIHByZXNjcmlwdGlvbiB0eXBlYCA9IGBwcmVzY3JpcHRpb24gdHlwZWBcclxuICAgICAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj58dW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbGV0IGdyb3VwT3B0aW9uSWRzO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgcmFkaW8gdHlwZSBhbmQgaGFzICdub25lJyB2YWx1ZSBjaGVja2VkXHJcbiAgICAgICAgICAgIGNvbnN0IGlzTm9uZVJhZGlvQ2hlY2tlZCA9ICRmb3JtLmZpbmQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1bdmFsdWU9XCJcIl1gKS5wcm9wKCdjaGVja2VkJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBmaWxlIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJGZpbGUgPSAkZm9ybS5maW5kKGBpbnB1dFt0eXBlPVwiZmlsZVwiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNGaWxlU2hvd24gPSAkZmlsZS5sZW5ndGggPiAwICYmICRmaWxlLmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIG9wdGlvbmFsIGRhdGUgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkZGF0ZSA9ICRmb3JtLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XVwiXSwgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1cIl0sIHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1beWVhcl1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbERhdGVTaG93biA9ICRkYXRlLmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkZGF0ZS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCBzZWxlY3QgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGZvcm0uZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBpc09wdGlvbmFsU2VsZWN0U2hvd24gPSAkc2VsZWN0Lmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkc2VsZWN0LmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIG9wdGlvbmFsIHRleHQgLyBtdWx0aWxpbmUgLyBudW1iZXIgdHlwZSBhbmQgYWxyZWFkeSBzaG93biBhZnRlciBtb2RhbCBzaG93blxyXG4gICAgICAgICAgICBjb25zdCAkdGV4dCA9ICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCB0ZXh0YXJlYScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXWApO1xyXG4gICAgICAgICAgICBjb25zdCBpc09wdGlvbmFsVGV4dFNob3duID0gJHRleHQubGVuZ3RoID4gMCAmJiAhb3B0aW9uLnJlcXVpcmVkICYmICR0ZXh0LmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZSA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtVmFsdWUgJiYgIShmb3JtVmFsdWUgaW5zdGFuY2VvZiBGaWxlKVxyXG4gICAgICAgICAgICAgICAgfHwgaXNOb25lUmFkaW9DaGVja2VkIHx8IGlzRmlsZVNob3duIHx8IGlzT3B0aW9uYWxEYXRlU2hvd24gfHwgaXNPcHRpb25hbFNlbGVjdFNob3duIHx8IGlzT3B0aW9uYWxUZXh0U2hvd25cclxuICAgICAgICAgICAgICAgIHx8IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XWApXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW21vbnRoXWApXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdYCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGhpZGUgb3B0aW9uIGlmIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIGhpZGVPcHRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uOiAnLCBoaWRlT3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbUZpZWxkcy5mb3JFYWNoKGN1c3RvbUZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0BoaWRlX2lmICguKilcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWRlSWZNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaEhpZGVJZih7IGN1c3RvbUZpZWxkLCBmb3JtRGF0YSwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaWRlSWZNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gaGlkZUlmTWF0Y2guaGlkZU9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvblZhbHVlcy5wdXNoKC4uLmhpZGVJZk1hdGNoLmhpZGVPcHRpb25WYWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncm91cE5hbWUgJiYgIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AZ3JvdXAgKC4qKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoR3JvdXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lID0gZ3JvdXBNYXRjaC5ncm91cE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cE9wdGlvbklkcyA9IGdyb3VwTWF0Y2guZ3JvdXBPcHRpb25JZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0B0b29sdGlwIG5hbWVbOnZhbHVlXSA9IHRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdG9vbHRpcE1hdGNoLnRvb2x0aXAgfHwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBzOiBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwc1tvcHRpb24uaWRdPy52YWx1ZVRvb2x0aXBzLCB0b29sdGlwTWF0Y2gudmFsdWVUb29sdGlwcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AdG9vbHRpcF9oZWFkaW5nIG5hbWU6dmFsdWUgPSB0b29sdGlwIGhlYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwSGVhZGluZ3MgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwSGVhZGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0sIHZhbHVlVG9vbHRpcEhlYWRpbmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hSZW5hbWUoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uUmVuYW1lc1tvcHRpb24uaWRdID0gbmV3TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlTm9uU2FsZXMgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihub25lU2FsZXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcHRpb24uaWRdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubm9uZVNhbGVzW29wdGlvbi5pZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVOb25TYWxlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50R3JvdXBPcHRpb25JZHMubGVuZ3RoID09PSAwICYmICFjdXJyZW50T3B0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBubyB2aXNpYmxlIG9wdGlvbiBiZWZvcmVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBncm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBOYW1lID0gZ3JvdXBOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50R3JvdXBPcHRpb25JZHMgPSBncm91cE9wdGlvbklkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBOYW1lOiAke2N1cnJlbnRHcm91cE5hbWV9LCBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICR7Y3VycmVudEdyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YW5kLWFsb25lIG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uSWQgPSBvcHRpb24uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudE9wdGlvbklkOiAke2N1cnJlbnRPcHRpb25JZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlT3B0aW9uSWRzLnB1c2gob3B0aW9uLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA+IDAgJiYgaGlkZU9wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBoaWRkZW4gb3B0aW9ucyBmcm9tIHRoZSBjdXJyZW50IGdyb3VwXHJcbiAgICAgICAgICAgIGN1cnJlbnRHcm91cE9wdGlvbklkcyA9IGN1cnJlbnRHcm91cE9wdGlvbklkcy5maWx0ZXIoaWQgPT4gIWhpZGVPcHRpb25JZHMuaW5jbHVkZXMoaWQpKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICR7Y3VycmVudEdyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50T3B0aW9uSWQ6ICcsIGN1cnJlbnRPcHRpb25JZCk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBOYW1lOiAnLCBjdXJyZW50R3JvdXBOYW1lKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRHcm91cE9wdGlvbklkczogJywgY3VycmVudEdyb3VwT3B0aW9uSWRzKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb25WYWx1ZXM6ICcsIGhpZGVPcHRpb25WYWx1ZXMpO1xyXG5cclxuICAgICAgICAvLyBTdG9yZSBub24tc2FsZSBwcmljZXMgb2Ygb3B0aW9uIHZhbHVlc1xyXG4gICAgICAgIC8vIHRvIHVzZSB3aGVuIHVwZGF0aW5nIG9wdGlvbiBwcmljZXMgb25seSB3aXRob3V0IHVwZGF0ZSB0aGUgd2hvbGUgbW9kaWZpZXJzIHZpZXdcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXMsIG5vbmVTYWxlcyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElEcyBvZiBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBhdCB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XHJcbiAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPiAwID8gY3VycmVudEdyb3VwT3B0aW9uSWRzXHJcbiAgICAgICAgICAgIDogKGN1cnJlbnRPcHRpb25JZCA/IFtjdXJyZW50T3B0aW9uSWRdIDogW10pO1xyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgc2hvd24gb3B0aW9uIGlkcyBvZiB0aGUgY3VycmVudCBzdGVwIHRvIHRoZSBzdGFja1xyXG4gICAgICAgIC8vIGlmIG5vdCB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXMgc3RlcC5cclxuICAgICAgICAvLyB0aGlzIGlzIHVzZWQgdG8gbmF2aWdhdGUgYmFjayB0byB0aGUgcHJldmlvdXMgc3RlcC5cclxuICAgICAgICBpZiAodGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgfHwgIWFyZUFycmF5c0VxdWFsVW5vcmRlcmVkKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMuc2xpY2UoLTEpWzBdLCBzaG93T3B0aW9uSWRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnB1c2goc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gc3RhY2tlZFNob3dPcHRpb25JZHM6ICcsIHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2hvdyAvIGhpZGUgYmFjayBidXR0b25cclxuICAgICAgICBpZiAodGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2suc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2suaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2hvdyBmb290ZXIsIGFuZCBoaWRlIGl0IGlmIG5vIG1vcmUgb3B0aW9uIHNob3duXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxGb290ZXIuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEZvb3Rlci5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIG1vZGFsIHRpdGxlIGZyb20gdGhlIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYCBvciBvcHRpb24gZGlzcGxheSBuYW1lXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE5hbWUpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuaHRtbChjdXJyZW50R3JvdXBOYW1lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gb3B0aW9uUmVuYW1lc1tzaG93T3B0aW9uSWRzWzBdXSB8fCB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHNob3dPcHRpb25JZHNbMF0pPy5kaXNwbGF5X25hbWU7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLnRleHQodGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaGlkZSB0aGUgb3B0aW9uIG5hbWUgd2hlbiBoZXJlIGlzIG9ubHkgMSBvcHRpb24gc2hvd24gaW4gdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtzaG93T3B0aW9uSWRzWzBdfVwiXSAuZm9ybS1sYWJlbGApLmZpcnN0KCkuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdIC5mb3JtLWxhYmVsJykuZmlyc3QoKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IGN1cnJlbnQgcHJvZHVjdCBvcHRpb25zXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0nKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ19zaG93JylcclxuICAgICAgICAgICAgLmZpbHRlcigoXywgZWwpID0+ICFzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcigkKGVsKS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSkpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnX3Nob3cnKTtcclxuXHJcbiAgICAgICAgLy8gUmVuYW1lIHRoZSBzaG93biBvcHRpb25zIGlmIG5lZWRlZFxyXG4gICAgICAgIHNob3dPcHRpb25JZHMuZm9yRWFjaChvcHRpb25JZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBvcHRpb25SZW5hbWVzW29wdGlvbklkXTtcclxuICAgICAgICAgICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXSAuZm9ybS1sYWJlbGApLmZpcnN0KCkuaHRtbChuZXdOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTaG93IHRvb2x0aXAgZm9yIGdyb3VwXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwVG9vbHRpcCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyb3VwVG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVG9vbHRpcCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCh7IGN1c3RvbUZpZWxkLCBncm91cE5hbWU6IGN1cnJlbnRHcm91cE5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyb3VwVG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgZ3JvdXBUb29sdGlwKSk7XHJcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTaG93IHRvb2x0aXAgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd09wdGlvblRvb2x0aXBzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFRpdGxlLCB0b29sdGlwcywgdG9vbHRpcEhlYWRpbmdzLCBzaG93T3B0aW9uSWRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIGZvciBzaG93biBvcHRpb25zIGFuZCBkaXNwbGF5IENvbnRpbnVlIGJ1dHRvbiBpZiBuZWVkZWQuXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRGVmYXVsdE9wdGlvblZhbHVlcyhzaG93T3B0aW9uSWRzLCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IHByaWNlcyBmb3Igb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xyXG4gICAgICAgIGlmICghaWdub3JlQVBJQ2FsbCkge1xyXG4gICAgICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgc3VtbWFyeSBidXQgcHJlbG9hZGVyIGZvciBwcmljZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N1bW1hcnkoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VtbWFyeSwgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsICRtb2RpZmllcnNNb2RhbFRpdGxlLCAkYWRkVG9DYXJ0V3JhcHBlciwgZm9ybURhdGEsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2hvdyBzdW1tYXJ5IGNvbnRlbnQgaWYgbm8gb3B0aW9uIHZpc2libGUgb24gdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0ZSByZXF1aXJlZCB2YXJpYW50IG9wdGlvbnMgYW5kIHJlcG9ydCBlcnJvciBmb3IgdGhlIGZpcnN0IGludmFsaWQgb3B0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZVZhcmlhbnRPcHRpb25zKCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybVswXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGludmFsaWQgPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBzdGF0ZSB9KSA9PiBzdGF0ZSA9PT0gJ3ZhcmlhbnRfb3B0aW9uJykuZmluZChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9uLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIFJlcXVpcmVkIG9wdGlvbiBcIiR7b3B0aW9uLmRpc3BsYXlfbmFtZX1cIiBpcyBub3Qgc2VsZWN0ZWRgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChpbnZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gJGZvcm0uZmluZChgW25hbWU9XCJhdHRyaWJ1dGVbJHtpbnZhbGlkLmlkfV1cIl1gKVswXTtcclxuICAgICAgICAgICAgZWwucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrU3RlcCgpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gW1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnBvcCgpLCAvLyBjdXJyZW50IHN0ZXAncyBzaG93biBvcHRpb24gaWRzXHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMucG9wKCksIC8vIHByZXZpb3VzIHN0ZXAncyBzaG93biBvcHRpb24gaWRzXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgdmFsdWVzIG9mIHNob3duIG9wdGlvbiBpZHMgaW4gY3VycmVudCBzdGVwICYgcHJldmlvdXMgc3RlcFxyXG4gICAgICAgIC8vIHRvIGRpc3BsYXkgcHJldmlvdXMgc3RlcCBhZ2Fpbi5cclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcykge1xyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZF0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoX2ksIGVsKSA9PiBzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcigkKGVsKS5hdHRyKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkJykpKSk7XHJcblxyXG4gICAgICAgICAgICAkb3B0aW9uLmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJylcclxuICAgICAgICAgICAgICAgIC5ub3QoJ1t0eXBlPVwiY2hlY2tib3hcIl0sIFt0eXBlPVwicmFkaW9cIl0sIFt0eXBlPVwiZmlsZVwiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS52YWwoJycpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5yZW1vdmVBdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGltbWVkaWF0ZWx5IHVwZGF0ZSBkaXNwbGF5IHByZXZpb3VzIG9wdGlvbnMgb24gbW9kaWZpZXJzIG1vZGFsXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzVmlldyh7IGlnbm9yZUFQSUNhbGw6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIGNoYW5nZSBldmVudCB0byB1cGRhdGUgcHJpY2VzICYgZGF0YSBiZWxvbmdzIHRvIEJDXHJcbiAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0VsLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gc2hvdWxkIGJlIGhpZGRlbiBiYXNlZCBvbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBmb3JtRGF0YTogRm9ybURhdGEsXHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IE51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfVxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBoaWRlT3B0aW9uOiBib29sZWFuLCBoaWRlT3B0aW9uVmFsdWVzOiBBcnJheTx7b3B0aW9uSWQ6IG51bWJlciwgdmFsdWVJZDogbnVtYmVyfT4gfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaEhpZGVJZih7IGN1c3RvbUZpZWxkLCBmb3JtRGF0YSwgb3B0aW9uIH0pIHtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGN1c3RvbUZpZWxkTWF0Y2hIaWRlSWY6IGNmX25hbWUgPSAke2N1c3RvbUZpZWxkLm5hbWV9IDsgb3BfbmFtZSA9ICR7b3B0aW9uLmRpc3BsYXlfbmFtZX1gKTtcclxuICAgICAgICBsZXQgaGlkZU9wdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGhpZGVPcHRpb25WYWx1ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0BoaWRlX2lmXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmICghbSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGhpZGVJZk9wdGlvbnMgPSBtWzFdLnNwbGl0KCc7JykubWFwKGt2ID0+IGt2LnNwbGl0KCc6JywgMikpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lOiBrZXkudHJpbSgpLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgPyB2YWx1ZS50cmltKCkgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gaGlkZUlmT3B0aW9uczogJHtoaWRlSWZPcHRpb25zLm1hcCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiAodmFsdWUgPyBgJHtuYW1lfTogJHt2YWx1ZX1gIDogbmFtZSkpLmpvaW4oJzsgJyl9YCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgdGhlbk9wdGlvbnMgPSBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLm1hcChrdiA9PiBrdi5zcGxpdCgnOicsIDIpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcclxuICAgICAgICAgICAgbmFtZToga2V5LnRyaW0oKSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUudHJpbSgpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRoZW5PcHRpb25zOiAke3RoZW5PcHRpb25zLm1hcCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiAodmFsdWUgPyBgJHtuYW1lfTogJHt2YWx1ZX1gIDogbmFtZSkpLmpvaW4oJzsgJyl9YCk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEZsYWcgdG8gY2hlY2sgaWYgb3B0aW9uOnZhbHVlIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgIG1hdGNoZXMgd2l0aCBjdXJyZW50IGZvcm0gZGF0YVxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBoaWRlSWZNYXRjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG9wdGlvbjp2YWx1ZSBpbiBjdXN0b20gZmllbGQgYF9fQGhpZGVfaWZgIG1hdGNoZXMgd2l0aCBjdXJyZW50IGZvcm0gZGF0YVxyXG4gICAgICAgIGhpZGVJZk9wdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtvcHRpb25JZCwgdmFsdWVJZF0gPSB0aGlzLmZpbmRPcHRpb25WYWx1ZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1WYWx1ZSA9IE51bWJlcihmb3JtRGF0YS5nZXRBbGwoYGF0dHJpYnV0ZVske29wdGlvbklkfV1gKS5zbGljZSgtMSlbMF0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZvcm1WYWx1ZSA9PT0gdmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgaGlkZUlmTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlSWZNYXRjaDogJywgaGlkZUlmTWF0Y2gpO1xyXG5cclxuICAgICAgICBpZiAoaGlkZUlmTWF0Y2gpIHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgb3B0aW9uIHNob3VsZCBiZSBoaWRkZW4gd2hlbiBtYXRjaGluZyB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYFxyXG4gICAgICAgICAgICB0aGVuT3B0aW9ucy5mb3JFYWNoKCh7IG5hbWUsIHZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgY3VzdG9tIGZpZWxkIHZhbHVlIGNvbnRhaW4gb3B0aW9uIG5hbWUgd2l0aG91dCB2YWx1ZSwgdGhlbiBoaWRlIHRoZSB3aG9sZSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvbjogJywgaGlkZU9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb24udmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgaGlkZSB0aGUgc3BlY2lmaWMgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCgoeyBsYWJlbCwgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfaGlkZU9wdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogb3B0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb25WYWx1ZXMucHVzaChfaGlkZU9wdGlvblZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb25WYWx1ZTogJywgX2hpZGVPcHRpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGlkZU9wdGlvbiB8fCBoaWRlT3B0aW9uVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaGlkZU9wdGlvbiwgaGlkZU9wdGlvblZhbHVlcyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gYmVsb25ncyB0byB0aGUgZ3JvdXAgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt7XHJcbiAgICAgKiAgIGN1c3RvbUZpZWxkOiB7XHJcbiAgICAgKiAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiBAcmV0dXJucyB7eyBncm91cE5hbWU6IHN0cmluZywgZ3JvdXBPcHRpb25JZHM6IEFycmF5PG51bWJlcj4gfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaEdyb3VwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0Bncm91cFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cE5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBPcHRpb25JZHMgPSBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLm1hcChzID0+IHMudHJpbSgpKSAvLyBvcHRpb24gbmFtZXNcclxuICAgICAgICAgICAgICAgIC5tYXAob3B0aW9uTmFtZSA9PiB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgZGlzcGxheV9uYW1lIH0pID0+IGVxdWFsT3B0aW9uU3RyaW5nKGRpc3BsYXlfbmFtZSwgb3B0aW9uTmFtZSkpPy5pZClcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyb3VwT3B0aW9uSWRzLmluY2x1ZGVzKG9wdGlvbi5pZCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBiZWxvbmdzIHRvIHRoZSBncm91cCBpbiB0aGlzIGN1c3RvbSBmaWVsZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBncm91cE5hbWU6ICR7Z3JvdXBOYW1lfSwgZ3JvdXBPcHRpb25JZHM6ICR7Z3JvdXBPcHRpb25JZHN9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBncm91cE5hbWUsIGdyb3VwT3B0aW9uSWRzIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHZhbHVlIGhhcyBhIHRvb2x0aXAgaW4gdGhlIGN1c3RvbSBmaWVsZCBgX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9XHJcbiAgICAgKiAgIG9wdGlvbjoge1xyXG4gICAgICogICAgIGRpc3BsYXlfbmFtZSxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBsYWJlbFxyXG4gICAgICogICAgIH1dXHJcbiAgICAgKiAgIH1cclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgdG9vbHRpcDogc3RyaW5nIH0gfCB7IHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBtWzFdLnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICBjb25zdCB0b29sdGlwID0gY3VzdG9tRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0b29sdGlwIGZvciBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGZvciBvcHRpb24gXCIke25hbWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0b29sdGlwIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcHMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRvb2x0aXAgZm9yIG9wdGlvbiB2YWx1ZVxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgaWQsIGxhYmVsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGZvciBvcHRpb24gXCIke25hbWV9IDogJHt2YWx1ZX1cIiA9IFwiXCJcIiR7dG9vbHRpcH1cIlwiXCJgKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvb2x0aXBzW2lkXSA9IHRvb2x0aXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWVUb29sdGlwcyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBncm91cCBoYXMgYSB0b29sdGlwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXAgKGdyb3VwIG5hbWUpID0gdG9vbHRpcGBcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBncm91cE5hbWU6IHN0cmluZ1xyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoVG9vbHRpcEdyb3VwKHsgY3VzdG9tRmllbGQsIGdyb3VwTmFtZSB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IGN1c3RvbUZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggZ3JvdXAgbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKGdyb3VwTmFtZSwgbmFtZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3IgZ3JvdXAgXCIke25hbWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b29sdGlwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgdG9vbHRpcCBoZWFkaW5nIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICogICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9XHJcbiAgICAgKiB9fSBwYXJhbTBcclxuICAgICAqIEByZXR1cm5zIHt7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0B0b29sdGlwX2hlYWRpbmdcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlXSA9IG1bMV0uc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmcgPSBjdXN0b21GaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIG9wdGlvbiBuYW1lIG9yIG5vdCB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIXZhbHVlIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVUb29sdGlwSGVhZGluZ3MgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZXMuZm9yRWFjaCgoeyBpZCwgbGFiZWwgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgaGVhZGluZyBmb3Igb3B0aW9uIFwiJHtuYW1lfSA6ICR7dmFsdWV9XCIgPSBcIlwiXCIke2hlYWRpbmd9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwSGVhZGluZ3NbaWRdID0gaGVhZGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVUb29sdGlwSGVhZGluZ3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiBuYW1lIGNvbnRhaW5zIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lYFxyXG4gICAgICogYW5kIHJldHVybiB0aGUgbmV3IG5hbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wLmN1c3RvbUZpZWxkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLmN1c3RvbUZpZWxkLm5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbTAuY3VzdG9tRmllbGQudmFsdWVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbTAub3B0aW9uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLm9wdGlvbi5kaXNwbGF5X25hbWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9IG5ldyBvcHRpb24gbmFtZVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoUmVuYW1lKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgbSA9IGN1c3RvbUZpZWxkLm5hbWUubWF0Y2goL15fX0ByZW5hbWVcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IG1bMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gU3RyaW5nKGN1c3RvbUZpZWxkLnZhbHVlKS50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUgfHwgIWVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHJlbmFtZSBvcHRpb24gXCIke25hbWV9XCIgdG8gXCIke25ld05hbWV9XCJgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiB2YWx1ZSBoYXMgYSBub24tc2FsZSBwcmljZSBpbiB0aGUgY3VzdG9tIGZpZWxkXHJcbiAgICAgKiBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgKiAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICogICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9LFxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH19XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVOb25TYWxlcyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19Abm9uc2FsZVxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IE51bWJlcihtWzFdLnRyaW0oKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzcGxpdCBlYWNoIChvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlKSBwYWlyIHNlcGFyYXRlZCBieSBcIjtcIlxyXG4gICAgICAgICAgICBjdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnOycpLmZvckVhY2goa3YgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gc3BsaXQgb3B0aW9uIG5hbWUgOiBvcHRpb24gdmFsdWUgaW4gY3VzdG9tIGZpZWxkIHZhbHVlIHNlcGFyYXRlZCBieSBcIjpcIlxyXG4gICAgICAgICAgICAgICAgY29uc3QgW29wdGlvbk5hbWUsIHZhbHVlTGFiZWxdID0ga3Yuc3BsaXQoJzonLCAyKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsT3B0aW9uU3RyaW5nKG9wdGlvbi5kaXNwbGF5X25hbWUsIG9wdGlvbk5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uIG5hbWUgaW4gY3VzdG9tIGZpZWxkIG1hdGNoIHdpdGggY3VycmVudCBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgb3B0aW9uIHZhbHVlIElEIHRoYXQgbWF0Y2hlcyB3aXRoIHRoZSB2YWx1ZSBsYWJlbCBpbiBjdXN0b20gZmllbGRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gb3B0aW9uLnZhbHVlcy5maW5kKCh7IGxhYmVsIH0pID0+IGVxdWFsT3B0aW9uU3RyaW5nKGxhYmVsLCB2YWx1ZUxhYmVsKSk/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBub24tc2FsZSBwcmljZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBvcHRpb24gdmFsdWUgSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVOb25TYWxlc1t2YWx1ZUlkXSA9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZU5vblNhbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2ggc3RvcmUgc2V0dGluZ3MgaW5jbHVkaW5nIHRheCBhbmQgYWN0aXZlIGN1cnJlbmN5XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8e1xyXG4gICAgICogICB0YXg6IHsgcGRwOiBudW1iZXIgfSxcclxuICAgICAqICAgY3VycmVuY3k6IHtcclxuICAgICAqICAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgZGlzcGxheTogeyBkZWNpbWFsUGxhY2VzOiBudW1iZXIsIGRlY2ltYWxUb2tlbjogc3RyaW5nLCBzeW1ib2w6IHN0cmluZywgc3ltYm9sUGxhY2VtZW50OiBzdHJpbmcsIHRob3VzYW5kc1Rva2VuOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBleGNoYW5nZVJhdGU6IG51bWJlciwgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBkZWZhdWx0Q3VycmVuY3k6IHtcclxuICAgICAqICAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgZGlzcGxheTogeyBkZWNpbWFsUGxhY2VzOiBudW1iZXIsIGRlY2ltYWxUb2tlbjogc3RyaW5nLCBzeW1ib2w6IHN0cmluZywgc3ltYm9sUGxhY2VtZW50OiBzdHJpbmcsIHRob3VzYW5kc1Rva2VuOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBleGNoYW5nZVJhdGU6IG51bWJlciwgbmFtZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogfT5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hTZXR0aW5ncygpIHtcclxuICAgICAgICBpZiAoY2FjaGVkU2V0dGluZ3MpIHJldHVybiBjYWNoZWRTZXR0aW5ncztcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlZmF1bHRDdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSFcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeShjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5DdXJyZW5jeUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5OiBjdXJyZW5jeShjdXJyZW5jeUNvZGU6ICRkZWZhdWx0Q3VycmVuY3lDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQ3VycmVuY3lGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgQ3VycmVuY3lGaWVsZHMgb24gQ3VycmVuY3kge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFBsYWNlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNoYW5nZVJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuZGVmYXVsdF9jdXJyZW5jeV9jb2RlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhY2hlZFNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICAuLi5yZXNwLmRhdGEuc2l0ZS5zZXR0aW5ncyxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHJlc3AuZGF0YS5zaXRlLmN1cnJlbmN5LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIG9wdGlvbiBwcmljZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PHsgaWQ6IG51bWJlciwgdmFsdWVzOiBBcnJheTx7IGlkOiBudW1iZXIgfT4gfT59IHNob3dPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8e1xyXG4gICAgICogICBvcHRpb25JZDogbnVtYmVyfG51bGwsXHJcbiAgICAgKiAgIHZhbHVlSWQ6IG51bWJlcnxudWxsLFxyXG4gICAgICogICBwcmljZXNXaXRoVGF4OiB7XHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgcHJpY2VzV2l0aG91dFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIGFkanVzdGVkUHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG51bWJlcixcclxuICAgICAqICAgfSxcclxuICAgICAqICAgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4OiB7XHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBub25TYWxlUHJpY2VWYWx1ZTogbnVtYmVyLFxyXG4gICAgICogICB9LFxyXG4gICAgICogfT4+fVxyXG4gICAgICovXHJcbiAgICBhc3luYyBmZXRjaE9wdGlvblByaWNlcyhzaG93T3B0aW9ucywgZm9ybURhdGEpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlSWRzID0gW107XHJcblxyXG4gICAgICAgIGZvcm1EYXRhLmVudHJpZXMoKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IGtleS5tYXRjaCgvXmF0dHJpYnV0ZVxcWyhcXGQrKVxcXSQvKTtcclxuICAgICAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVudGl0eUlkID0gTnVtYmVyKG1bMV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVFbnRpdHlJZCA9IE51bWJlcih2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlRW50aXR5SWQgJiYgIXNob3dPcHRpb25zLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IG9wdGlvbkVudGl0eUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWVJZHMucHVzaCh7IG9wdGlvbkVudGl0eUlkLCB2YWx1ZUVudGl0eUlkIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW1xyXG4gICAgICAgICAgICAvLyBmZXRjaCBhbHJlYWR5IHNlbGVjdGVkIG9wdGlvbnMnIHByaWNlc1xyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmZldGNoT3B0aW9uUHJpY2Uoc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyksXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgc2hvd09wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBvcHRpb24udmFsdWVzIHx8IChvcHRpb24udmFsdWUgPyBbeyBpZDogb3B0aW9uLnZhbHVlIH1dIDogW10pO1xyXG4gICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBmZXRjaCBjdXJyZW50IG9wdGlvbiB2YWx1ZSdzIHByaWNlc1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hPcHRpb25QcmljZShbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGVkT3B0aW9uVmFsdWVJZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkVudGl0eUlkOiBvcHRpb24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUVudGl0eUlkOiB2YWx1ZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdKS50aGVuKHByb2R1Y3QgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVJZDogdmFsdWUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtwcmV2LCAuLi5zZWxlY3Rpb25zXSA9IGF3YWl0IGhhbmRsZVByb21pc2VzV2l0aExpbWl0KHByb21pc2VzKTtcclxuXHJcbiAgICAgICAgc2VsZWN0aW9ucy5mb3JFYWNoKHNlbGVjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucHJpY2VzV2l0aFRheCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBub24tc2FsZSBwcmljZSBiYXNlZCBvbiB0aGUgcHJldmlvdXMgcHJpY2UgYW5kIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zaWRlciBhbGwgbm93IHByaWNlIGFuZCByZWd1bGFyIHByaWNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9uU2FsZVByaWNlV2l0aFRheCA9IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4Py5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAvLyB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWUgLSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbm9uLXNhbGUgcHJpY2UgaWYgaXQncyBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIGlmIChub25TYWxlUHJpY2VXaXRoVGF4IDw9IHNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRqdXN0ZWRQcmljZXNXaXRoVGF4ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVZhbHVlOiBub25TYWxlUHJpY2VXaXRoVGF4LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5vbi1zYWxlIHByaWNlIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBwcmljZSBhbmQgdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNpZGVyIGFsbCBub3cgcHJpY2UgYW5kIHJlZ3VsYXIgcHJpY2VcclxuICAgICAgICAgICAgICAgIGxldCBub25TYWxlUHJpY2VXaXRob3V0VGF4ID0gc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXg/LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXg/LmJhc2VQcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHx8IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZSAtIHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBub24tc2FsZSBwcmljZSBpZiBpdCdzIGxlc3MgdGhhbiB0aGUgY3VycmVudCBwcmljZVxyXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGVQcmljZVdpdGhvdXRUYXggPD0gc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5hZGp1c3RlZFByaWNlc1dpdGhvdXRUYXggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG5vblNhbGVQcmljZVdpdGhvdXRUYXgsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gZmV0Y2hPcHRpb25QcmljZXMgcmV0dXJuczogJywgc2VsZWN0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIFtwcmV2LCAuLi5zZWxlY3Rpb25zXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHByb2R1Y3QgcHJpY2UgZnJvbSBzcGVjaWZpYyBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTx7IG9wdGlvbkVudGl0eUlkOiBudW1iZXIsIHZhbHVlRW50aXR5SWQ6IG51bWJlcn0+fSBvcHRpb25WYWx1ZUlkc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8eyBwcmljZXNXaXRoVGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9LCBwcmljZXNXaXRob3V0VGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9IH0+XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGZldGNoT3B0aW9uUHJpY2Uob3B0aW9uVmFsdWVJZHMpIHtcclxuICAgICAgICBjb25zdCBjYWNoZUtleSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvblZhbHVlSWRzKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtjYWNoZUtleV0pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHhockZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgKCRwcm9kdWN0SWQ6IEludCEsICRvcHRpb25WYWx1ZUlkczogW09wdGlvblZhbHVlSWQhXSwgJGN1cnJlbmN5Q29kZTogY3VycmVuY3lDb2RlISkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdChlbnRpdHlJZDogJHByb2R1Y3RJZCwgb3B0aW9uVmFsdWVJZHM6ICRvcHRpb25WYWx1ZUlkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRoVGF4OiBwcmljZXMoY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlLCBpbmNsdWRlVGF4OiB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlc1dpdGhvdXRUYXg6IHByaWNlcyhjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGUsIGluY2x1ZGVUYXg6IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5QcmljZUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5RmllbGRzIG9uIE1vbmV5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBQcmljZUZpZWxkcyBvbiBQcmljZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiB0aGlzLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWVJZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hPcHRpb25QcmljZUNhY2hlW2NhY2hlS2V5XSA9IHJlc3AuZGF0YS5zaXRlLnByb2R1Y3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVbY2FjaGVLZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheSB0b29sdGlwcyB0byB0aGUgY29ycmVzcG9uZGluZyBzaG93biBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxUaXRsZVxyXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyB0b29sdGlwOiBzdHJpbmcsIHZhbHVlVG9vbHRpcHM6IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH0gfX0gdG9vbHRpcHNcclxuICAgICAqIEBwYXJhbSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IHN0cmluZyB9IH19IHRvb2x0aXBIZWFkaW5nc1xyXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaG93T3B0aW9uSWRzIG9wdGlvbiBpZHMgdG8gc2hvdyB0b29sdGlwc1xyXG4gICAgICovXHJcbiAgICBzaG93T3B0aW9uVG9vbHRpcHMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsVGl0bGUsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MsIHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICAvLyBEaXNwbGF5IHRvb2x0aXBcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwcykuZm9yRWFjaCgoW29wdGlvbklkLCB7IHRvb2x0aXAsIHZhbHVlVG9vbHRpcHMgfV0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcihvcHRpb25JZCkpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdG9vbHRpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZCcsIG9wdGlvbklkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkb3B0aW9uLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQ9XCIke29wdGlvbklkfVwiXWApLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRsYWJlbCA9ICRvcHRpb24uZmluZCgnbGFiZWwnKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkbGFiZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYWJlbC5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb24ucHJlcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcHMpLmZvckVhY2goKFt2YWx1ZUlkLCB2YWx1ZVRvb2x0aXBdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB2YWx1ZVRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICRvcHRpb24uZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICR2YWx1ZS5hZnRlcigkdG9vbHRpcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpZiBvbmx5IDEgb3B0aW9uIHNob3duIGF0IGN1cnJlbnQgc3RlcCxcclxuICAgICAgICAvLyB0aGVuIG1vdmUgaXRzIHRvb2x0aXAgdG8gdGhlIG1vZGFsIHRpdGxlXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtzaG93T3B0aW9uSWRzWzBdfVwiXWApO1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSB0b29sdGlwIGhlYWRpbmdcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0b29sdGlwSGVhZGluZ3MpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKFtvcHRpb25JZF0pID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoTnVtYmVyKG9wdGlvbklkKSkpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChbb3B0aW9uSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmdzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlVG9vbHRpcEhlYWRpbmdzKS5mb3JFYWNoKChbdmFsdWVJZCwgdmFsdWVUb29sdGlwSGVhZGluZ10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwSGVhZGluZyA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUucmVwbGFjZSgnPCVoZWFkaW5nJT4nLCB2YWx1ZVRvb2x0aXBIZWFkaW5nKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1oZWFkaW5nLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW5saW5lT3B0aW9uVG9vbHRpcHMoKSB7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgaWYgKCEkcHJvZHVjdE9wdGlvbnNFbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZF0sIFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZF0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2R1Y3RPcHRpb25zLmxlbmd0aCB8fCAhdGhpcy5jdXN0b21GaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbklkcyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkXScpXHJcbiAgICAgICAgICAgIC5tYXAoKF9pbmRleCwgZWwpID0+IE51bWJlcigkKGVsKS5kYXRhKCdwcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSlcclxuICAgICAgICAgICAgLmdldCgpO1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBzID0ge307XHJcbiAgICAgICAgY29uc3QgdG9vbHRpcEhlYWRpbmdzID0ge307XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBvcHRpb25JZHMuaW5jbHVkZXMoaWQpKVxyXG4gICAgICAgICAgICAuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcE1hdGNoID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXBNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdG9vbHRpcE1hdGNoLnRvb2x0aXAgfHwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udG9vbHRpcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcHM6IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBzW29wdGlvbi5pZF0/LnZhbHVlVG9vbHRpcHMsIHRvb2x0aXBNYXRjaC52YWx1ZVRvb2x0aXBzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBIZWFkaW5nKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUb29sdGlwSGVhZGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhlYWRpbmdzW29wdGlvbi5pZF0gPSBPYmplY3QuYXNzaWduKHt9LCB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSwgdmFsdWVUb29sdGlwSGVhZGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93SW5saW5lT3B0aW9uVG9vbHRpcHMoJHByb2R1Y3RPcHRpb25zRWwsIHRvb2x0aXBzLCB0b29sdGlwSGVhZGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNwZWNUb29sdGlwcygpIHtcclxuICAgICAgICBjb25zdCBwcmVmaXggPSAnX19Ac3BlY190b29sdGlwICc7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIE1BU1RFUiBTUEVDIFRPT0xUSVBTXHJcbiAgICAgICAgLy8gQWRkIGVudHJpZXMgaGVyZSB0byBzaG93IGEgdG9vbHRpcCBvbiBldmVyeSBwcm9kdWN0IHBhZ2UgZm9yXHJcbiAgICAgICAgLy8gdGhhdCBzcGVjIHJvdyBhdXRvbWF0aWNhbGx5LiBObyBjdXN0b20gZmllbGQgbmVlZGVkIHBlciBwcm9kdWN0LlxyXG4gICAgICAgIC8vIFBlci1wcm9kdWN0IGN1c3RvbSBmaWVsZHMgKGUuZy4gX19Ac3BlY190b29sdGlwIE1lbW9yeSkgd2lsbFxyXG4gICAgICAgIC8vIG92ZXJyaWRlIHRoZXNlIHZhbHVlcyBpZiBwcmVzZW50LlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGNvbnN0IG1hc3RlclRvb2x0aXBzID0ge1xyXG4gICAgICAgICAgICAnTWVtb3J5JzogJ05vdCBzdXJlIGlmIHRoaXMgaXMgdGhlIHJpZ2h0IGFtb3VudCBvZiBtZW1vcnkgZm9yIHlvdXIgbmVlZHM/IFJlZmVyIHRvIG91ciBibG9nIG9uIDxhIGhyZWY9XCJodHRwczovL3d3dy5ib2Jqb2huc29uLmNvbS9ibG9nL2hvdy1tdWNoLXJhbS1kby15b3UtYWN0dWFsbHktbmVlZC1pbi1hLXJ1Z2dlZC1sYXB0b3AvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UkFNIE5lZWRzIGluIGEgcnVnZ2VkIGxhcHRvcDwvYT4uJyxcclxuICAgICAgICAgICAgLy8gJ1N0b3JhZ2UnOiAnVGhlIGRyaXZlIHdoZXJlIHlvdXIgZmlsZXMgYW5kIE9TIGFyZSBzdG9yZWQuJyxcclxuICAgICAgICAgICAgLy8gJ1Byb2Nlc3Nvcic6ICdUaGUgQ1BVIGlzIHRoZSBicmFpbiBvZiB0aGUgY29tcHV0ZXIuJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgYW55IHByZXZpb3VzbHkgaW5qZWN0ZWQgc3BlYyB0b29sdGlwc1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXNwZWMtdG9vbHRpcF0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgLy8gQnVpbGQgZmluYWwgbWFwOiBzdGFydCB3aXRoIG1hc3RlciBkZWZhdWx0cywgb3ZlcnJpZGUgd2l0aCBwZXItcHJvZHVjdCBjdXN0b20gZmllbGRzXHJcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRUb29sdGlwcyA9IHsgLi4ubWFzdGVyVG9vbHRpcHMgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbmFtZS5zdGFydHNXaXRoKHByZWZpeCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3BlY05hbWUgPSBuYW1lLnNsaWNlKHByZWZpeC5sZW5ndGgpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzcGVjTmFtZSAmJiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRUb29sdGlwc1tzcGVjTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyhyZXNvbHZlZFRvb2x0aXBzKS5mb3JFYWNoKChbc3BlY05hbWUsIHRvb2x0aXBUZXh0XSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZGQgPSB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1zcGVjLW5hbWU9XCIke3NwZWNOYW1lfVwiXWApLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRkZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdG9vbHRpcFRleHQpKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZXlldmEtc3BlYy10b29sdGlwJywgc3BlY05hbWUpO1xyXG5cclxuICAgICAgICAgICAgJGRkLmFwcGVuZCgkdG9vbHRpcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0lubGluZU9wdGlvblRvb2x0aXBzKCRwcm9kdWN0T3B0aW9uc0VsLCB0b29sdGlwcywgdG9vbHRpcEhlYWRpbmdzKSB7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9vbHRpcHMpLmZvckVhY2goKFtvcHRpb25JZCwgeyB0b29sdGlwLCB2YWx1ZVRvb2x0aXBzID0ge30gfV0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJG9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBvcHRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbGFiZWwgPSAkb3B0aW9uLmZpbmQoJ2xhYmVsJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGxhYmVsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbGFiZWwuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5wcmVwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWVUb29sdGlwcykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcF0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvb2x0aXAgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwVGVtcGxhdGUucmVwbGFjZSgnPCV0b29sdGlwJT4nLCB2YWx1ZVRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJ29wdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnOnNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRvcHRpb24uZmluZCgnc2VsZWN0JykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2VsZWN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzZWxlY3QuYWZ0ZXIoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5hcHBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYWZ0ZXIoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9vbHRpcEhlYWRpbmdzKS5mb3JFYWNoKChbb3B0aW9uSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmdzXSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkb3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZVRvb2x0aXBIZWFkaW5ncykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmddKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdmFsdWUgPSAkb3B0aW9uLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLmZpcnN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEkdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwSGVhZGluZyA9ICQodGhpcy5vcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUucmVwbGFjZSgnPCVoZWFkaW5nJT4nLCB2YWx1ZVRvb2x0aXBIZWFkaW5nKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWhlYWRpbmctaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJ29wdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnOnNlbGVjdGVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRvcHRpb24uZmluZCgnc2VsZWN0JykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2VsZWN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzZWxlY3QuYWZ0ZXIoJHRvb2x0aXBIZWFkaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb24uYXBwZW5kKCR0b29sdGlwSGVhZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5hcHBlbmQoJHRvb2x0aXBIZWFkaW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gb3B0aW9ucyBhbmQgZGlzcGxheSBjb250aW51ZSBidXR0b24gaWYgbmVjZXNzYXJ5LlxyXG4gICAgICogU3RvcCBhdXRvIHVwZGF0ZSB0aGUgbW9kaWZpZXJzIHZpZXcgdW50aWwgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpcyBjbGlja2VkLlxyXG4gICAgICpcclxuICAgICAqIENvbnRpbnVlIGJ1dHRvbiBpcyBzaG93biBpZiBhbnkgb2YgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAgICAgKiAtIG9wdGlvbnMgdGhhdCBoYXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICogLSBjaGVja2JveCBvcHRpb25zXHJcbiAgICAgKiAtIG9wdGlvbmFsIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgKiAtIG9wdGlvbmFsIGRhdGUgc2VsZWN0IG9wdGlvbnNcclxuICAgICAqIC0gZmlsZSBpbnB1dFxyXG4gICAgICogLSBtb3JlIHRoYW4gMSBvcHRpb24gYXJlIHNob3duIGF0IHRoZSBzYW1lIHRpbWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IHNob3dPcHRpb25JZHMgc2hvdyBvcHRpb24gaWRzXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbENvbnRpbnVlXHJcbiAgICAgKi9cclxuICAgIHBvcHVsYXRlRGVmYXVsdE9wdGlvblZhbHVlcyhzaG93T3B0aW9uSWRzLCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSkge1xyXG4gICAgICAgIGNvbnN0IHNob3duT3B0aW9ucyA9IHRoaXMucHJvZHVjdE9wdGlvbnMuZmlsdGVyKCh7IGlkIH0pID0+IHNob3dPcHRpb25JZHMuaW5jbHVkZXMoaWQpKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogb3B0aW9ucyB0aGF0IGhhcyBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBwcmVmaWxsLCBzZWxlY3RlZF9kYXRlLCB2YWx1ZXMgfSkgPT5cclxuICAgICAgICAgICAgICAgIHByZWZpbGwgfHxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkX2RhdGUgJiYgKHNlbGVjdGVkX2RhdGUuZGF5IHx8IHNlbGVjdGVkX2RhdGUubW9udGggfHwgc2VsZWN0ZWRfZGF0ZS55ZWFyKSB8fFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzPy5maW5kKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNoZWNrYm94IHR5cGUgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94T3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IG5vVmFsdWUsIHZhbHVlIH0pID0+IG5vVmFsdWUgfHwgdmFsdWUpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBmaWxlIHR5cGUgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGZpbGVPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnaW5wdXQtZmlsZScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBkYXRlIHR5cGUgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRhdGVPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnZGF0ZScpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBkcm9wZG93biB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyByZXF1aXJlZCwgcGFydGlhbCB9KSA9PiAhcmVxdWlyZWQgJiYgcGFydGlhbCA9PT0gJ3NldC1zZWxlY3QnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdGV4dCAvIG11bHRpbGluZSAvIG51bWJlciBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgdGV4dE9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBwYXJ0aWFsIH0pID0+IHBhcnRpYWwgPT09ICdpbnB1dC10ZXh0JyB8fCBwYXJ0aWFsID09PSAndGV4dGFyZWEnIHx8IHBhcnRpYWwgPT09ICdpbnB1dC1udW1iZXJzJyk7XHJcblxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDFcclxuICAgICAgICAgICAgfHwgZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMCB8fCBjaGVja2JveE9wdGlvbnMubGVuZ3RoID4gMCB8fCBmaWxlT3B0aW9ucy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgIHx8IGRhdGVPcHRpb25zLmxlbmd0aCA+IDAgfHwgZHJvcGRvd25PcHRpb25zLmxlbmd0aCA+IDAgfHwgdGV4dE9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBzaG93IGNvbnRpbnVlIGJ1dHRvblxyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxDb250aW51ZS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGF1dG8gdXBkYXRlIHRoZSBtb2RpZmllcnMgdmlldyB1bnRpbCB0aGUgY29udGludWUgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHBvcHVsYXRlIGRlZmF1bHQgdmFsdWVzIHRvIHRoZSBzaG93biBvcHRpb25zXHJcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgICAgIGlkLCBwcmVmaWxsLCBzZWxlY3RlZF9kYXRlLCB2YWx1ZXMsXHJcbiAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZXM/LmZpbmQoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpPy5pZDtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdzZWxlY3QnKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXWApLnZhbCh2YWx1ZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3ZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlZmlsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXQsIHRleHRhcmVhJykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1gKS52YWwocHJlZmlsbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkX2RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRfZGF0ZS5kYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bZGF5XVwiXWApLnZhbChzZWxlY3RlZF9kYXRlLmRheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9kYXRlLm1vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW21vbnRoXVwiXWApLnZhbChzZWxlY3RlZF9kYXRlLm1vbnRoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX2RhdGUueWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVt5ZWFyXVwiXWApLnZhbChzZWxlY3RlZF9kYXRlLnllYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gY2hlY2tib3ggb3B0aW9uc1xyXG4gICAgICAgICAgICBjaGVja2JveE9wdGlvbnMuZm9yRWFjaCgoe1xyXG4gICAgICAgICAgICAgICAgaWQsIGNoZWNrZWQsIHZhbHVlLCBub1ZhbHVlLFxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImhpZGRlblwiXWApLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiY2hlY2tib3hcIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImhpZGRlblwiXWApLnZhbChub1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJjaGVja2JveFwiXWApLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gbWFyayBmaWxlIGlucHV0LCBkYXRlIGlucHV0LCBkcm9wZG93biBzZWxlY3QsIHRleHQgaW5wdXQgYXMgc2hvd25cclxuICAgICAgICAgICAgWy4uLmZpbGVPcHRpb25zLCAuLi5kYXRlT3B0aW9ucywgLi4uZHJvcGRvd25PcHRpb25zLCAuLi50ZXh0T3B0aW9uc10uZm9yRWFjaCgoeyBpZCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW2RheV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVttb250aF1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVt5ZWFyXVwiXWApLmF0dHIoJ2RhdGEtZmllbGQtc2hvd24nLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVNob3dPcHRpb25QcmljZXNQcmVsb2FkZXIoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHByZWxvYWRlcjogdHJ1ZSB9O1xyXG4gICAgICAgIGNvbnN0IHByaWNlSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICBjb25zdCBwcmljZVRleHQgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVBsYWluVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICBjb25zdCBzdWJ0b3RhbEh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcblxyXG4gICAgICAgIHNob3dPcHRpb25JZHMuZm9yRWFjaChvcHRpb25JZCA9PiB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAgICAgICAgICAgIC5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7b3B0aW9uSWR9XCJdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXWApXHJcbiAgICAgICAgICAgICAgICAuZWFjaCgoX2ksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IE51bWJlcigkdmFsdWUuYXR0cignZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlSWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJpY2UgPSAkKHByaWNlSHRtbCkuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuaXMoJ29wdGlvbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGFscmVhZHkgaGFzIHByaWNlIGRpc3BsYXllZCBiZWZvcmU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkdmFsdWUuZGF0YSgncHJpY2VIdG1sJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcsICR2YWx1ZS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLnRleHQoYCR7JHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpfSAke3ByaWNlVGV4dH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRvbGQgPSAkdmFsdWUuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkb2xkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGxhY2Vob2xkZXIgPSAkdmFsdWUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtcGxhY2Vob2xkZXJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGxhY2Vob2xkZXIuaHRtbCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsU3VidG90YWwuaHRtbChzdWJ0b3RhbEh0bWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzcGxheSBwcmljZXMgdG8gY29ycmVzcG9uZGluZyBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbFxyXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBzaG93T3B0aW9uSWRzIG9wdGlvbiBpZHMgdG8gc2hvdyBwcmljZXNcclxuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXHJcbiAgICAgKiBAcGFyYW0ge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfSB9fSBub25lU2FsZXMgb3B0aW9uIHZhbHVlcyB3aXRoIG5vbi1zYWxlIHByaWNlc1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaWdub3JlVXBkYXRlU3VidG90YWw9ZmFsc2VdIGlnbm9yZSB1cGRhdGUgc3VidG90YWxcclxuICAgICAqL1xyXG4gICAgYXN5bmMgc2hvd09wdGlvblByaWNlcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcywgZm9ybURhdGEsIG5vbmVTYWxlcywgaWdub3JlVXBkYXRlU3VidG90YWwgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IFtzZXR0aW5ncywgW3ByZXYsIC4uLnNlbGVjdGlvbnNdXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaFNldHRpbmdzKCksXHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hPcHRpb25QcmljZXMoXHJcbiAgICAgICAgICAgICAgICBzaG93T3B0aW9uSWRzLm1hcChfaWQgPT4gdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBfaWQpKSxcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93UHJpY2UgPSB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1ByaWNlRnJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHh0UHJpY2VGcmVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dQcmljZVplcm8pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRQcmljZSh2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UHJpY2UodmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaCgoe1xyXG4gICAgICAgICAgICBvcHRpb25JZCwgdmFsdWVJZCwgYWRqdXN0ZWRQcmljZXNXaXRoVGF4LCBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXgsXHJcbiAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdFWCcgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheDogc2hvd1ByaWNlKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IChhZGp1c3RlZFByaWNlc1dpdGhUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA6ICcnKSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiAoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IHRoaXMuZm9ybWF0UHJpY2UoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSwgdHJ1ZSkgOiAnJyksXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdJTkMnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IHNob3dQcmljZShhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiAoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheDogKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUsIHRydWUpIDogJycpLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMucHJpY2VXaXRoVGF4IHx8IHBhcmFtcy5wcmljZVdpdGhvdXRUYXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIG92ZXJyaWRlIG5vbi1zYWxlIHByaWNlIGZvciBvcHRpb24gdmFsdWVzIGlmIGl0IGlzIGFwcGVhcnMgaW4gY3VzdG9tIGZpZWxkIGBfX0Bub25zYWxlYFxyXG4gICAgICAgICAgICAgICAgLy8gYW5kIGlmIGl0J3MgaGlnaGVyIHRoYW4gdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vblNhbGUgPSBub25lU2FsZXNbb3B0aW9uSWRdPy5bdmFsdWVJZF07XHJcbiAgICAgICAgICAgICAgICBpZiAobm9uU2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4Y2hhbmdlZE5vblNhbGUgPSBub25TYWxlICogc2V0dGluZ3MuY3VycmVuY3kuZXhjaGFuZ2VSYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlVmFsdWUgPSBzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ucHJpY2U/LnZhbHVlIDogYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5wcmljZT8udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Y2hhbmdlZE5vblNhbGUgPiBwcmljZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZTogZXhjaGFuZ2VkTm9uU2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiB0aGlzLmZvcm1hdFByaWNlKGV4Y2hhbmdlZE5vblNhbGUsIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWU6IGV4Y2hhbmdlZE5vblNhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheDogdGhpcy5mb3JtYXRQcmljZShleGNoYW5nZWROb25TYWxlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlVGV4dCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvblByaWNlUGxhaW5UZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHByaWNlID0gJChwcmljZUh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJG9wdGlvbi5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnLCAkdmFsdWUudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLnRleHQoYCR7JHZhbHVlLmRhdGEoJ29yaWdpbmFsVGV4dCcpfSAke3ByaWNlVGV4dH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZGF0YSgncHJpY2VIdG1sJywgcHJpY2VIdG1sKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkPVwiJHtvcHRpb25JZH0tJHt2YWx1ZUlkfVwiXWApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwbGFjZWhvbGRlciA9ICR2YWx1ZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1wbGFjZWhvbGRlcl0nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwoJHByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuYXBwZW5kKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNob3cgc3VidG90YWwgY2FsY3VsYXRlZCBmcm9tIGFsbCBzZWxlY3RlZCBvcHRpb25zIGZvciB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgaWYgKCFpZ25vcmVVcGRhdGVTdWJ0b3RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25TdWJ0b3RhbCgkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgcHJldiwgc2V0dGluZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgc3VidG90YWwgZm9yIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VidG90YWxcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBwcmljZXNXaXRoVGF4OiB7XHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB8IG51bGwsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIHByaWNlc1dpdGhvdXRUYXg6IHtcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB8IG51bGwsXHJcbiAgICAgKiB9fSBwcm9kdWN0XHJcbiAgICAgKiBAcGFyYW0ge3sgdGF4OiB7IHBkcDogbnVtYmVyIH0gfX0gc2V0dGluZ3NcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHNob3dPcHRpb25TdWJ0b3RhbCgkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgcHJvZHVjdCwgc2V0dGluZ3MpIHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0eHRTdWJ0b3RhbDogdGhpcy5jb250ZXh0LnR4dFN1YnRvdGFsLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aFRheDogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiAnJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdC5wcmljZXNXaXRoVGF4Py5wcmljZSB8fCBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXg/LnByaWNlKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlID8gcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXg6IHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgPiBwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUpIDogJycsXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNldHRpbmdzLnRheC5wZHAgIT09ICdJTkMnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlID8gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgPiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUpIDogJycsXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3cgc3VtbWFyeSBvZiBzZWxlY3RlZCBvcHRpb25zIGJlZm9yZSBhZGRpbmcgdG8gY2FydFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VtbWFyeVxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsVGl0bGVcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkYWRkVG9DYXJ0V3JhcHBlclxyXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJlbG9hZGVyXHJcbiAgICAgKi9cclxuICAgIHNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhLCBwcmVsb2FkZXIgPSBmYWxzZSkge1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmh0bWwodGhpcy5jb250ZXh0LnR4dFJldmlld1NlbGVjdGlvbnMpO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gIXByZWxvYWRlclxyXG4gICAgICAgICAgICA/ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoKVxyXG4gICAgICAgICAgICA6IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHsgcHJlbG9hZGVyIH0sIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgY29uc3QgJHN1YnRvdGFsID0gJChzdWJ0b3RhbEh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlLXN1YnRvdGFsJywgJycpO1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF5U3RyID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVtkYXldYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoU3RyID0gZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1gKTtcclxuICAgICAgICAgICAgY29uc3QgeWVhclN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1beWVhcl1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXlTdHIgfHwgbW9udGhTdHIgfHwgeWVhclN0cikge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZGlzcGxheV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShgJHt5ZWFyU3RyfS0ke21vbnRoU3RyfS0ke2RheVN0cn1gKS50b0xvY2FsZURhdGVTdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZTogYCR7eWVhclN0cn0tJHttb250aFN0cn0tJHtkYXlTdHJ9YCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVN0ciA9IGZvcm1EYXRhLmdldEFsbChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1gKS5zbGljZSgtMSlbMF07XHJcbiAgICAgICAgICAgIGlmICghdmFsdWVTdHIgfHwgdmFsdWVTdHIgPT09ICcwJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlU3RyIGluc3RhbmNlb2YgRmlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlU3RyLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb24uZGlzcGxheV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVTdHIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IHZhbHVlU3RyID8gTnVtYmVyKHZhbHVlU3RyKSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIGl0IGlzIGNoZWNrYm94IGFuZCBub3QgY2hlY2tlZFxyXG4gICAgICAgICAgICBpZiAob3B0aW9uLm5vVmFsdWUgJiYgb3B0aW9uLm5vVmFsdWUgPT09IHZhbHVlSWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlTGFiZWwgPSBvcHRpb24udmFsdWVzPy5maW5kKCh7IGlkIH0pID0+IGlkID09PSB2YWx1ZUlkKT8ubGFiZWxcclxuICAgICAgICAgICAgICAgIHx8IChvcHRpb24udmFsdWUgPT09IHZhbHVlSWQgPyBvcHRpb24ubGFiZWwgOiB1bmRlZmluZWQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJpY2VIdG1sID0gJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uLmlkfS0ke3ZhbHVlSWR9XCJdYClcclxuICAgICAgICAgICAgICAgIC5maXJzdCgpLmNsb25lKCkucmVtb3ZlQXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZCcpWzBdPy5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25FbFByaWNlSHRtbCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVwiXSBvcHRpb25bdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCkuZGF0YSgncHJpY2VIdG1sJyk7XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZUxhYmVsIHx8IHZhbHVlU3RyLFxyXG4gICAgICAgICAgICAgICAgcHJpY2VIdG1sOiBwcmljZUh0bWwgfHwgb3B0aW9uRWxQcmljZUh0bWwsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBzdW1tYXJ5SHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1bW1hcnlUZW1wbGF0ZSwgeyBvcHRpb25zIH0sIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsU3VtbWFyeS5odG1sKHN1bW1hcnlIdG1sKTtcclxuXHJcbiAgICAgICAgLy8gSW5zZXJ0IHN1YnRvdGFsIHRvIHRvIGFkZCB0byBjYXJ0IHdyYXBwZXIgYW5kIHNob3cgaXRcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29tcGxldGUtc3VidG90YWxdJykucmVtb3ZlKCk7XHJcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuZmluZCh0aGlzLmFkZFRvQ2FydFdyYXBwZXJTZWxlY3RvcikucHJlcGVuZCgkc3VidG90YWwpO1xyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZV1cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS53aXRob3V0X3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LmN1cnJlbmN5XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS50YXhfbGFiZWxcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4XVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXgudmFsdWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXguY3VycmVuY3lcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YS5wcmljZS53aXRoX3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLndpdGhfdGF4LmN1cnJlbmN5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LmN1cnJlbmN5XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZU1vZGlmaWVyc1N1YnRvdGFsKGRhdGEpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWwgPSAkZm9ybS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VidG90YWwgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsXScpO1xyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICB0eHRTdWJ0b3RhbDogdGhpcy5jb250ZXh0LnR4dFN1YnRvdGFsLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aFRheDogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiAnJyxcclxuICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiAnJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5wcmljZSkge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAuLi4oZGF0YS5wcmljZS53aXRoX3RheCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogZGF0YS5wcmljZS53aXRoX3RheC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXg6IGRhdGEucHJpY2Uud2l0aF90YXguZm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihkYXRhLnByaWNlLndpdGhvdXRfdGF4ID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheFZhbHVlOiBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogZGF0YS5wcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQsXHJcbiAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcbiAqIFBhcnNlcyBhbiBJU08gZGF0ZS10aW1lIHN0cmluZyBhbmQgZXh0cmFjdHMgdGhlIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBkYXRlLXRpbWUgc3RyaW5nIHRvIHBhcnNlLlxuICogQHJldHVybnMge09iamVjdHxudWxsfSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZXh0cmFjdGVkIGNvbXBvbmVudHMsIG9yIGBudWxsYCBpZiB0aGUgZm9ybWF0IGlzIGludmFsaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGVUaW1lU3RyaW5nKHN0cikge1xuICAgIGNvbnN0IHJlZ2V4ID0gL15cXHMqKD86KD86KFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkpfCg/OihcXGR7Mn0pLShcXGR7Mn0pKSk/KD86W1RcXHNdKT8oPzooXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KSg/OlxcLlxcZCspP3woXFxkezJ9KTooXFxkezJ9KXwoXFxkezJ9KSk/XFxzKig/Olp8KFsrLV0pKFxcZHsxLDJ9KSg/Ojo/KFxcZHsyfSkpPyk/XFxzKiQvO1xuXG4gICAgY29uc3QgbWF0Y2ggPSBzdHIudHJpbSgpLm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIHJldHVybiBudWxsOyAvLyBJbnZhbGlkIGZvcm1hdFxuICAgIH1cblxuICAgIGNvbnN0IFtcbiAgICAgICAgLFxuICAgICAgICB5ZWFyLCBtb250aCwgZGF5LCAvLyBbMV0sIFsyXSwgWzNdXG4gICAgICAgIHNob3J0TW9udGgsIHNob3J0RGF5LCAvLyBbNF0sIFs1XVxuICAgICAgICBob3VyLCBtaW51dGUsIHNlY29uZCwgLy8gWzZdLCBbN10sIFs4XVxuICAgICAgICBzaG9ydEhvdXIsIHNob3J0TWludXRlLCAvLyBbOV0sIFsxMF1cbiAgICAgICAgc2luZ2xlVGltZUNvbXBvbmVudCwgLy8gWzExXVxuICAgICAgICB0elNpZ24sIHR6SG91ck9mZnNldCwgdHpNaW51dGVPZmZzZXQsIC8vIFsxMl0sIFsxM10sIFsxNF1cbiAgICBdID0gbWF0Y2g7XG5cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgIC8vIERhdGUgY29tcG9uZW50c1xuICAgIGlmICh5ZWFyICYmIG1vbnRoICYmIGRheSkge1xuICAgICAgICByZXN1bHQueWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcbiAgICAgICAgcmVzdWx0Lm1vbnRoID0gcGFyc2VJbnQobW9udGgsIDEwKTtcbiAgICAgICAgcmVzdWx0LmRheSA9IHBhcnNlSW50KGRheSwgMTApO1xuICAgIH0gZWxzZSBpZiAoc2hvcnRNb250aCAmJiBzaG9ydERheSkge1xuICAgICAgICByZXN1bHQubW9udGggPSBwYXJzZUludChzaG9ydE1vbnRoLCAxMCk7XG4gICAgICAgIHJlc3VsdC5kYXkgPSBwYXJzZUludChzaG9ydERheSwgMTApO1xuICAgIH1cblxuICAgIC8vIFRpbWUgY29tcG9uZW50c1xuICAgIGlmIChob3VyICE9PSB1bmRlZmluZWQgJiYgbWludXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChob3VyLCAxMCk7XG4gICAgICAgIHJlc3VsdC5taW51dGUgPSBwYXJzZUludChtaW51dGUsIDEwKTtcbiAgICAgICAgaWYgKHNlY29uZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXN1bHQuc2Vjb25kID0gcGFyc2VJbnQoc2Vjb25kLCAxMCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNob3J0SG91ciAhPT0gdW5kZWZpbmVkICYmIHNob3J0TWludXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChzaG9ydEhvdXIsIDEwKTtcbiAgICAgICAgcmVzdWx0Lm1pbnV0ZSA9IHBhcnNlSW50KHNob3J0TWludXRlLCAxMCk7XG4gICAgfSBlbHNlIGlmIChzaW5nbGVUaW1lQ29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0LmhvdXIgPSBwYXJzZUludChzaW5nbGVUaW1lQ29tcG9uZW50LCAxMCk7XG4gICAgfVxuXG4gICAgLy8gVGltZXpvbmVcbiAgICBpZiAodHpTaWduICYmIHR6SG91ck9mZnNldCkge1xuICAgICAgICBjb25zdCBzaWduID0gdHpTaWduID09PSAnKycgPyAxIDogLTE7XG4gICAgICAgIGNvbnN0IHR6SG91ciA9IHBhcnNlSW50KHR6SG91ck9mZnNldCwgMTApO1xuICAgICAgICBjb25zdCB0ek1pbnV0ZSA9IHR6TWludXRlT2Zmc2V0ID8gcGFyc2VJbnQodHpNaW51dGVPZmZzZXQsIDEwKSA6IDA7XG4gICAgICAgIHJlc3VsdC50aW1lem9uZSA9IHNpZ24gKiAodHpIb3VyICsgdHpNaW51dGUgLyA2MCk7XG4gICAgfSBlbHNlIGlmIChzdHIuaW5jbHVkZXMoJ1onKSkge1xuICAgICAgICByZXN1bHQudGltZXpvbmUgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkYXRlLXRpbWUgc3RyaW5nIGludG8gYSBEYXRlIG9iamVjdCBhZGp1c3RlZCBmb3IgY291bnRkb3duIHB1cnBvc2VzLlxuICpcbiAqIC0gSWYgdGhlIGRhdGUtdGltZSBzdHJpbmcgZG9lcyBub3QgaW5jbHVkZSBhIHllYXIsIG1vbnRoLCBvciBkYXksIGl0IGlzIHRyZWF0ZWQgYXMgYSBkYWlseSBjb3VudGRvd24uXG4gKiAgIFRoZSBmdW5jdGlvbiB3aWxsIHNldCB0aGUgZGF0ZSB0byB0b2RheSBvciByb2xsIG92ZXIgdG8gdGhlIG5leHQgZGF5IGlmIHRoZSB0aW1lIGhhcyBhbHJlYWR5IHBhc3NlZC5cbiAqIC0gSWYgdGhlIGRhdGUtdGltZSBzdHJpbmcgZG9lcyBub3QgaW5jbHVkZSBhbiBob3VyLCBtaW51dGUsIG9yIHNlY29uZCwgdGhleSBkZWZhdWx0IHRvIDAuXG4gKiAtIFRoZSBmdW5jdGlvbiBhZGp1c3RzIGZvciB0aGUgc3BlY2lmaWVkIHRpbWV6b25lIG9mZnNldC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIGRhdGUtdGltZSBzdHJpbmcgdG8gcGFyc2UuXG4gKiBAcmV0dXJucyB7RGF0ZXx1bmRlZmluZWR9IEEgRGF0ZSBvYmplY3QgdXNlZCBmb3IgdGhlIGNvdW50ZG93biwgb3IgYHVuZGVmaW5lZGAgaWYgcGFyc2luZyBmYWlscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ291bnRkb3duRGF0ZShzdHIpIHtcbiAgICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2VEYXRlVGltZVN0cmluZyhzdHIpO1xuICAgIGlmICghcGFyc2VkRGF0ZSkgcmV0dXJuO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXG4gICAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgdGltZXpvbmUgfSA9IHBhcnNlZERhdGU7XG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHkgPSB5ZWFyID8/IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG0gPSBtb250aCA/PyAobm93LmdldE1vbnRoKCkgKyAxKTtcbiAgICBjb25zdCBkID0gZGF5ID8/IG5vdy5nZXREYXRlKCk7XG4gICAgY29uc3QgaCA9IGhvdXIgfHwgMDtcbiAgICBjb25zdCBtaW4gPSBtaW51dGUgfHwgMDtcbiAgICBjb25zdCBzZWMgPSBzZWNvbmQgfHwgMDtcblxuICAgIGxldCBkYXRlO1xuXG4gICAgaWYgKHRpbWV6b25lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdXRjTWlsbGlzID0gRGF0ZS5VVEMoeSwgbSAtIDEsIGQsIGgsIG1pbiwgc2VjKSAtICh0aW1lem9uZSAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHV0Y01pbGxpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmICh5ZWFyKSBkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICAgICAgICBpZiAobW9udGgpIGRhdGUuc2V0TW9udGgobW9udGggLSAxKTtcbiAgICAgICAgaWYgKGRheSkgZGF0ZS5zZXREYXRlKGRheSk7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoaCk7XG4gICAgICAgIGRhdGUuc2V0TWludXRlcyhtaW4pO1xuICAgICAgICBkYXRlLnNldFNlY29uZHMoc2VjKTtcbiAgICB9XG5cbiAgICBpZiAoIXllYXIgJiYgIW1vbnRoICYmICFkYXkpIHtcbiAgICAgICAgLy8gZm9yIGRhaWx5IGNvdW50ZG93biwgYWRkIDEgZGF5IGlmIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAgICAgICAgaWYgKGRhdGUgPCBub3cpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbi8qKlxuICogKipTYWxlQ291bnRkb3duIFNpbmdsZXRvbiBPYmplY3QqKlxuICpcbiAqIE1hbmFnZXMgY291bnRkb3duIHRpbWVycyBmb3Igc2FsZXMgb3IgcHJvbW90aW9uYWwgZXZlbnRzIG9uIHlvdXIgd2Vic2l0ZS5cbiAqIEl0IGhhbmRsZXMgbXVsdGlwbGUgY291bnRkb3duIGVsZW1lbnRzLCB1cGRhdGVzIHRoZW0gaW4gcmVhbC10aW1lLCBhbmQgbWFuYWdlcyB2aXNpYmlsaXR5IGJhc2VkIG9uIHRoZSB2aWV3cG9ydC5cbiAqXG4gKiAtLS1cbiAqXG4gKiAqKlVzYWdlOioqXG4gKlxuICogKioxLiBDb25maWd1cmUgdGhlIENvdW50ZG93biAoT3B0aW9uYWwpOioqXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xuICogICAvLyBPcHRpb25hbCBzZXR0aW5nc1xuICogICBkYXRlRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duRGF0ZScsICAgICAgIC8vIERhdGEgYXR0cmlidXRlIGZvciBjb3VudGRvd24gZGF0ZVxuICogICBpblZpZXdwb3J0RGF0YU5hbWU6ICdzYWxlQ291bnRkb3duSW5WaWV3cG9ydCcsIC8vIERhdGEgYXR0cmlidXRlIGZvciB2aWV3cG9ydCB2aXNpYmlsaXR5XG4gKiAgIHNlbGVjdG9yczogeyAuLi4gfSxcbiAqICAgdGVtcGxhdGU6ICcuLi4nLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDdXN0b20gSFRNTCB0ZW1wbGF0ZSBmb3IgdGhlIGNvdW50ZG93blxuICogICBoaWRlQ2xhc3M6ICdfaGlkZScsICAgICAgICAgICAgICAgICAgICAgIC8vIENsYXNzIHRvIGhpZGUgZWxlbWVudHNcbiAqICAgc2FsZUVuZENsYXNzOiAnX3NhbGVFbmRlZCcsICAgICAgICAgICAgICAvLyBDbGFzcyB3aGVuIHNhbGUgZW5kc1xuICogICBhY3RpdmVDbGFzczogJ19hY3RpdmUnLCAgICAgICAgICAgICAgICAgIC8vIENsYXNzIHdoZW4gY291bnRkb3duIGlzIGFjdGl2ZVxuICogICB0cmFuc2xhdGlvbnM6IHtcbiAqICAgICBlbmRfaW46ICdFbmRzIGluJyxcbiAqICAgICBkYXk6ICdEYXknLFxuICogICAgIGRheXM6ICdEYXlzJyxcbiAqICAgICBob3VyOiAnSG91cicsXG4gKiAgICAgaG91cnM6ICdIb3VycycsXG4gKiAgICAgbWludXRlOiAnTWludXRlJyxcbiAqICAgICBtaW51dGVzOiAnTWludXRlcycsXG4gKiAgICAgc2Vjb25kOiAnU2Vjb25kJyxcbiAqICAgICBzZWNvbmRzOiAnU2Vjb25kcycsXG4gKiAgIH0sXG4gKiAgIHR4dFNhbGVDb3VudGRvd25KU09OOiAneyBcInRyYW5zbGF0aW9uc1wiOiB7IC4uLiB9IH0nLCAvLyBKU09OIHN0cmluZyBmb3IgdHJhbnNsYXRpb25zXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqICoqMi4gQWRkIENvdW50ZG93biBFbGVtZW50czoqKlxuICpcbiAqIC0gKipPcHRpb24gMToqKiBEaXJlY3RseSBzcGVjaWZ5IHRoZSBkYXRlIHdoZW4gYWRkaW5nIHRoZSBlbGVtZW50LlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBjb25zdCAkZWwgPSAkKCcjY291bnRkb3duLWVsZW1lbnQnKTtcbiAqICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XG4gKiAgIFNhbGVDb3VudGRvd24uYWRkKCRlbCwgZGF0ZSk7XG4gKiAgIGBgYFxuICpcbiAqIC0gKipPcHRpb24gMjoqKiBTZXQgZGF0YSBhdHRyaWJ1dGVzIG9uIHRoZSBlbGVtZW50IGFuZCBhZGQgaXQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIGNvbnN0ICRlbCA9ICQoJyNjb3VudGRvd24tZWxlbWVudCcpO1xuICogICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93bkRhdGUnLCAnMjAyMy0xMi0zMVQyMzo1OTo1OScpO1xuICogICAkZWwuZGF0YSgnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsIHsgZW5kX2luOiAnRW5kcyBpbicsIC4uLiB9KTtcbiAqICAgU2FsZUNvdW50ZG93bi5hZGQoJGVsKTtcbiAqICAgYGBgXG4gKlxuICogLS0tXG4gKlxuICogKipOb3RlczoqKlxuICpcbiAqIC0gVGhlIGNvdW50ZG93biBhdXRvbWF0aWNhbGx5IHVwZGF0ZXMgdmlzaWJsZSBlbGVtZW50cyBpbiB0aGUgdmlld3BvcnQuXG4gKiAtIFN1cHBvcnRzIGN1c3RvbWl6YXRpb24gdGhyb3VnaCBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGF0dHJpYnV0ZXMuXG4gKiAtIEhhbmRsZXMgYXV0b21hdGljIHN0b3BwaW5nIHdoZW4gbm8gZWxlbWVudHMgcmVtYWluLlxuICpcbiAqIC0tLVxuICpcbiAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIEluaXRpYWxpemUgYW5kIGNvbmZpZ3VyZVxuICogU2FsZUNvdW50ZG93bi5jb25maWd1cmUoe1xuICogICB0cmFuc2xhdGlvbnM6IHtcbiAqICAgICBlbmRfaW46ICdTYWxlIGVuZHMgaW4nLFxuICogICAgIC8vIE90aGVyIHRyYW5zbGF0aW9ucy4uLlxuICogICB9LFxuICogfSk7XG4gKlxuICogLy8gQWRkIGNvdW50ZG93biBlbGVtZW50XG4gKiBjb25zdCAkY291bnRkb3duID0gJCgnI2NvdW50ZG93bicpO1xuICogY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKCcyMDIzLTEyLTMxVDIzOjU5OjU5Jyk7XG4gKiBTYWxlQ291bnRkb3duLmFkZCgkY291bnRkb3duLCBlbmREYXRlKTtcbiAqIGBgYFxuICovXG5cbmNvbnN0IFNhbGVDb3VudGRvd24gPSB7XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7U2V0PEVsZW1lbnQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZWxlbWVudHM6IG5ldyBTZXQoKSxcblxuICAgIC8qKlxuICAgICAqIFRpbWVyIGludGVydmFsIElEXG4gICAgICogQHR5cGUge251bWJlcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGltZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHtJbnRlcnNlY3Rpb25PYnNlcnZlcnxudWxsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG5cbiAgICAvKipcbiAgICAqIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGNvdW50ZG93biBkYXRlXG4gICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIGRhdGVEYXRhTmFtZTogJ3NhbGVDb3VudGRvd25EYXRlJyxcblxuICAgIC8qKlxuICAgICAqIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaW5WaWV3cG9ydERhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkluVmlld3BvcnQnLFxuXG4gICAgLyoqXG4gICAgICogRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgdHJhbnNsYXRpb25zIEpTT05cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdHJhbnNsYXRpb25zRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duVHJhbnNsYXRpb25zJyxcblxuICAgIC8qKlxuICAgICAqIFNlbGVjdG9ycyBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHR5cGUge3tlbmRMYWJlbDogc3RyaW5nLCBkYXk6IHN0cmluZywgZGF5VmFsdWU6IHN0cmluZywgZGF5TGFiZWw6IHN0cmluZywgaG91cjogc3RyaW5nLCBob3VyVmFsdWU6IHN0cmluZywgaG91ckxhYmVsOiBzdHJpbmcsIG1pbnV0ZTogc3RyaW5nLCBtaW51dGVWYWx1ZTogc3RyaW5nLCBtaW51dGVMYWJlbDogc3RyaW5nLCBzZWNvbmQ6IHN0cmluZywgc2Vjb25kVmFsdWU6IHN0cmluZywgc2Vjb25kTGFiZWw6IHN0cmluZ319XG4gICAgICovXG4gICAgc2VsZWN0b3JzOiB7XG4gICAgICAgIGVuZExhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tZW5kLWxhYmVsXScsXG4gICAgICAgIGRheTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheV0nLFxuICAgICAgICBkYXlWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheS12YWx1ZV0nLFxuICAgICAgICBkYXlMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWRheS1sYWJlbF0nLFxuICAgICAgICBob3VyOiAnW2RhdGEtc2FsZS1jb3VudGRvd24taG91cl0nLFxuICAgICAgICBob3VyVmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLXZhbHVlXScsXG4gICAgICAgIGhvdXJMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWhvdXItbGFiZWxdJyxcbiAgICAgICAgbWludXRlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlXScsXG4gICAgICAgIG1pbnV0ZVZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLXZhbHVlXScsXG4gICAgICAgIG1pbnV0ZUxhYmVsOiAnW2RhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLWxhYmVsXScsXG4gICAgICAgIHNlY29uZDogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZF0nLFxuICAgICAgICBzZWNvbmRWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC12YWx1ZV0nLFxuICAgICAgICBzZWNvbmRMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC1sYWJlbF0nLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxzdmc+PHVzZSBocmVmPVwiI2ljb24tYmFkZ2UtcGVyY2VudFwiPjwvdXNlPjwvc3ZnPjwvaT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfZW5kXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1lbmQtbGFiZWw+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9kYXlcIiBkYXRhLXNhbGUtY291bnRkb3duLWRheT48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5LXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24tZGF5LWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX2hvdXJcIiBkYXRhLXNhbGUtY291bnRkb3duLWhvdXI+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLWhvdXItdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX21pbnV0ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1taW51dGUtbGFiZWw+PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfc2Vjb25kXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQ+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC12YWx1ZT48L3NwYW4+PHNwYW4gY2xhc3M9XCJfbGFiZWxcIiBkYXRhLXNhbGUtY291bnRkb3duLXNlY29uZC1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgIGAsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHRvIGhpZGUgZWxlbWVudHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaGlkZUNsYXNzOiAnX2hpZGUnLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSB0byBpbmRpY2F0ZSBzYWxlIGhhcyBlbmRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzYWxlRW5kQ2xhc3M6ICdfc2FsZUVuZGVkJyxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgYWN0aXZlIGNvdW50ZG93blxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhY3RpdmVDbGFzczogJ19hY3RpdmUnLFxuXG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRpb25zIGZvciBjb3VudGRvd24gbGFiZWxzXG4gICAgICogQHR5cGUge3tlbmRfaW46IHN0cmluZywgZGF5OiBzdHJpbmcsIGRheXM6IHN0cmluZywgaG91cjogc3RyaW5nLCBob3Vyczogc3RyaW5nLCBtaW51dGU6IHN0cmluZywgbWludXRlczogc3RyaW5nLCBzZWNvbmQ6IHN0cmluZywgc2Vjb25kczogc3RyaW5nfX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICBlbmRfaW46ICdFbmQgaW4nLFxuICAgICAgICBkYXk6ICdEYXknLFxuICAgICAgICBkYXlzOiAnRGF5cycsXG4gICAgICAgIGhvdXI6ICdIb3VyJyxcbiAgICAgICAgaG91cnM6ICdIb3VycycsXG4gICAgICAgIG1pbnV0ZTogJ01pbnV0ZScsXG4gICAgICAgIG1pbnV0ZXM6ICdNaW51dGVzJyxcbiAgICAgICAgc2Vjb25kOiAnU2Vjb25kJyxcbiAgICAgICAgc2Vjb25kczogJ1NlY29uZHMnLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmUgdGhlIGNvdW50ZG93biBzZXR0aW5nc1xuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmRhdGVEYXRhTmFtZSAtIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGNvdW50ZG93biBkYXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaW5WaWV3cG9ydERhdGFOYW1lIC0gRGF0YSBhdHRyaWJ1dGUgbmFtZSBmb3IgaW4gdmlld3BvcnQgdmlzaWJpbGl0eVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnNlbGVjdG9ycyAtIFNlbGVjdG9ycyBmb3IgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmVuZExhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmRheVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5ob3VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLmhvdXJWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5ob3VyTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMubWludXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZVZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZUxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLnNlY29uZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRlbXBsYXRlIC0gVGVtcGxhdGUgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmhpZGVDbGFzcyAtIENsYXNzIG5hbWUgdG8gaGlkZSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNhbGVFbmRDbGFzcyAtIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgc2FsZSBoYXMgZW5kZWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5hY3RpdmVDbGFzcyAtIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgYWN0aXZlIGNvdW50ZG93blxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnRyYW5zbGF0aW9ucyAtIFRyYW5zbGF0aW9ucyBmb3IgY291bnRkb3duIGxhYmVsc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5lbmRfaW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuZGF5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmRheXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuaG91clxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5ob3Vyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5taW51dGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMubWludXRlc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5zZWNvbmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuc2Vjb25kc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnR4dFNhbGVDb3VudGRvd25KU09OIC0gSlNPTiBzdHJpbmcgZm9yIHRyYW5zbGF0aW9uc1xuICAgICAqL1xuICAgIGNvbmZpZ3VyZSh7XG4gICAgICAgIGRhdGVEYXRhTmFtZSxcbiAgICAgICAgaW5WaWV3cG9ydERhdGFOYW1lLFxuICAgICAgICBzZWxlY3RvcnMsXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICBoaWRlQ2xhc3MsXG4gICAgICAgIHNhbGVFbmRDbGFzcyxcbiAgICAgICAgYWN0aXZlQ2xhc3MsXG4gICAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgICAgdHh0U2FsZUNvdW50ZG93bkpTT04sXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIGlmIChkYXRlRGF0YU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZURhdGFOYW1lID0gZGF0ZURhdGFOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluVmlld3BvcnREYXRhTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5pblZpZXdwb3J0RGF0YU5hbWUgPSBpblZpZXdwb3J0RGF0YU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0b3JzKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdG9ycyA9IHsgLi4udGhpcy5zZWxlY3RvcnMsIC4uLnNlbGVjdG9ycyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlkZUNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVDbGFzcyA9IGhpZGVDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYWxlRW5kQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc2FsZUVuZENsYXNzID0gc2FsZUVuZENsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNsYXNzID0gYWN0aXZlQ2xhc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy50cmFuc2xhdGlvbnMsIC4uLnRyYW5zbGF0aW9ucyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR4dFNhbGVDb3VudGRvd25KU09OKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHR4dFNhbGVDb3VudGRvd25KU09OKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFucyA9IE9iamVjdC5rZXlzKGpzb24udHJhbnNsYXRpb25zKS5yZWR1Y2UoKF90cmFucywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3J0S2V5ID0ga2V5LnNwbGl0KCcuJykucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgICAgICBfdHJhbnNbc2hvcnRLZXldID0ganNvbi50cmFuc2xhdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90cmFucztcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy50cmFuc2xhdGlvbnMsIC4uLnRyYW5zIH07XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGVsZW1lbnQgJiBjb3JyZXNwb25kaW5nIGRhdGUgdG8gdGhlIGNvdW50ZG93biBjb2xsZWN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcbiAgICAgKiBAcGFyYW0ge0RhdGV8bnVsbH0gZGF0ZSAtIFRoZSBjb3VudGRvd24gZGF0ZS4gSWYgbm90IHByb3ZpZGVkLCBpdCB3aWxsIGJlIGV4dHJhY3RlZCBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZSBgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXRlYFxuICAgICAqL1xuICAgIGFkZCgkZWwsIGRhdGUgPSBudWxsKSB7XG4gICAgICAgIGxldCB2YWxpZERhdGUgPSBkYXRlIHx8ICRlbC5kYXRhKHRoaXMuZGF0ZURhdGFOYW1lKTtcbiAgICAgICAgaWYgKHZhbGlkRGF0ZSAmJiB0eXBlb2YgdmFsaWREYXRlID09PSAnc3RyaW5nJykgdmFsaWREYXRlID0gcGFyc2VDb3VudGRvd25EYXRlKHZhbGlkRGF0ZSk7XG4gICAgICAgIGlmICghdmFsaWREYXRlKSByZXR1cm47XG4gICAgICAgICRlbC5kYXRhKHRoaXMuZGF0ZURhdGFOYW1lLCB2YWxpZERhdGUpLmh0bWwodGhpcy50ZW1wbGF0ZSlcbiAgICAgICAgICAgIC5nZXQoKS5mb3JFYWNoKGVsID0+IHRoaXMuZWxlbWVudHMuYWRkKGVsKSk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZSgkZWwpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE9ic2VydmUgdGhlIGVsZW1lbnQgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHkgY2hlY2tcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvYnNlcnZlKCRlbCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgLy8gYXNzdW1lIGVsZW1lbnQgaXMgaW4gdmlld3BvcnQgaWYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgJGVsLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2UgaWYgbm90IGFscmVhZHkgY3JlYXRlZFxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKGVudHJ5LnRhcmdldCkuZGF0YSh0aGlzLmluVmlld3BvcnREYXRhTmFtZSwgZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaXNJbnRlcnNlY3RpbmcnLCBlbnRyeS50YXJnZXQsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICByb290OiBudWxsLCAvLyBEZWZhdWx0cyB0byB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMCwgLy8gQ2FsbGJhY2sgaXMgdHJpZ2dlcmVkIHdoZW4gYW55IHBhcnQgb2YgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLm9ic2VydmVyLm9ic2VydmUoZWwpKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RvcCBvYnNlcnZpbmcgdGhlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB1bm9ic2VydmUoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1bm9ic2VydmUnLCBlbCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdmlld3BvcnQgYW5kIHZpc2libGVcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpc1Zpc2libGVJblZpZXdwb3J0KCRlbCkge1xuICAgICAgICByZXR1cm4gJGVsLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUpICYmICRlbC5pcygnOnZpc2libGUnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogc3RhcnQgcnVubmluZyBjb3VudGRvd24gZXZlcnkgc2Vjb25kXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMudGltZXIgJiYgdGhpcy5lbGVtZW50cy5zaXplID4gMCkge1xuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnJ1bigpLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBzdG9wIGNvdW50ZG93blxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RvcCBjb3VudGRvd24nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogcnVubmluZyBjb3VudGRvd24gcHJvY2Vzc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgLy8gY2hlY2sgYW5kIHN0b3AgaWYgZWxlbWVudCBubyBsb25nZXIgZXhpc3RzIGluIERPTVxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlKGVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSAkZWwuZGF0YSh0aGlzLmRhdGVEYXRhTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgY291bnRkb3duIGlmIGVsZW1lbnQgaXMgbm90IGluIHZpZXdwb3J0IG9yIG5vdCB2aXNpYmxlXG4gICAgICAgICAgICBpZiAoIWRhdGUgfHwgIXRoaXMuaXNWaXNpYmxlSW5WaWV3cG9ydCgkZWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAoZGF0ZSA8PSBub3cpIHtcbiAgICAgICAgICAgICAgICAvLyBDb3VudCBkb3duIGRhdGUgaGFzIHBhc3NlZFxuICAgICAgICAgICAgICAgICRlbC5hZGRDbGFzcyh0aGlzLnNhbGVFbmRDbGFzcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5kZWxldGUoZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5vYnNlcnZlKGVsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcmVtYWluaW5nIHRpbWUgKGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKVxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IGRhdGUgLSBub3c7XG4gICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgICAgICBjb25zdCAkZW5kTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5lbmRMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkZGF5ID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZGF5KTtcbiAgICAgICAgICAgIGNvbnN0ICRkYXlWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmRheVZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRkYXlMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmRheUxhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRob3VyID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91cik7XG4gICAgICAgICAgICBjb25zdCAkaG91clZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91clZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRob3VyTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5ob3VyTGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLm1pbnV0ZSk7XG4gICAgICAgICAgICBjb25zdCAkbWludXRlVmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5taW51dGVWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkbWludXRlTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5taW51dGVMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuc2Vjb25kKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWNvbmRWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLnNlY29uZFZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0ICRzZWNvbmRMYWJlbCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLnNlY29uZExhYmVsKTtcblxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRpb25zID0geyAuLi50aGlzLnRyYW5zbGF0aW9ucywgLi4uJGVsLmRhdGEodGhpcy50cmFuc2xhdGlvbnNEYXRhTmFtZSkgfTtcblxuICAgICAgICAgICAgJGVsLmFkZENsYXNzKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgJGVuZExhYmVsLmh0bWwodHJhbnNsYXRpb25zLmVuZF9pbik7XG4gICAgICAgICAgICAkZGF5VmFsdWUudGV4dChkYXlzKTtcbiAgICAgICAgICAgICRkYXlMYWJlbC5odG1sKGRheXMgPT09IDEgPyB0cmFuc2xhdGlvbnMuZGF5IDogdHJhbnNsYXRpb25zLmRheXMpO1xuICAgICAgICAgICAgJGRheS50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCk7XG4gICAgICAgICAgICAkaG91clZhbHVlLnRleHQoaG91cnMpO1xuICAgICAgICAgICAgJGhvdXJMYWJlbC5odG1sKGhvdXJzID09PSAxID8gdHJhbnNsYXRpb25zLmhvdXIgOiB0cmFuc2xhdGlvbnMuaG91cnMpO1xuICAgICAgICAgICAgJGhvdXIudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDAgJiYgaG91cnMgPT09IDApO1xuICAgICAgICAgICAgJG1pbnV0ZVZhbHVlLnRleHQobWludXRlcyk7XG4gICAgICAgICAgICAkbWludXRlTGFiZWwuaHRtbChtaW51dGVzID09PSAxID8gdHJhbnNsYXRpb25zLm1pbnV0ZSA6IHRyYW5zbGF0aW9ucy5taW51dGVzKTtcbiAgICAgICAgICAgICRtaW51dGUudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDAgJiYgaG91cnMgPT09IDAgJiYgbWludXRlcyA9PT0gMCk7XG4gICAgICAgICAgICAkc2Vjb25kVmFsdWUudGV4dChzZWNvbmRzKTtcbiAgICAgICAgICAgICRzZWNvbmRMYWJlbC5odG1sKHNlY29uZHMgPT09IDEgPyB0cmFuc2xhdGlvbnMuc2Vjb25kIDogdHJhbnNsYXRpb25zLnNlY29uZHMpO1xuICAgICAgICAgICAgJHNlY29uZC50b2dnbGVDbGFzcyh0aGlzLmhpZGVDbGFzcywgZGF5cyA9PT0gMCAmJiBob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYWxlQ291bnRkb3duO1xuIiwiZXhwb3J0IGNvbnN0IGFyaWFLZXlDb2RlcyA9IHtcbiAgICBSRVRVUk46IDEzLFxuICAgIFNQQUNFOiAzMixcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgaW5pdFJhZGlvT3B0aW9ucyB9IGZyb20gJy4vcmFkaW9PcHRpb25zJztcbiIsImltcG9ydCB7IGFyaWFLZXlDb2RlcyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3Qgc2V0Q2hlY2tlZFJhZGlvSXRlbSA9IChpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCkgPT4ge1xuICAgIGl0ZW1Db2xsZWN0aW9uLmVhY2goKGlkeCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCAkaXRlbSA9ICQoaXRlbSk7XG4gICAgICAgIGlmIChpZHggIT09IGl0ZW1JZHgpIHtcbiAgICAgICAgICAgICRpdGVtLmF0dHIoJ2FyaWEtY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgdHJ1ZSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICRpdGVtLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xufTtcblxuY29uc3QgY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uID0gKGxhc3RJdGVtSWR4LCBjdXJyZW50SWR4KSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBjdXJyZW50SWR4ID4gbGFzdEl0ZW1JZHg6IHJldHVybiAwO1xuICAgIGNhc2UgY3VycmVudElkeCA8IDA6IHJldHVybiBsYXN0SXRlbUlkeDtcbiAgICBkZWZhdWx0OiByZXR1cm4gY3VycmVudElkeDtcbiAgICB9XG59O1xuXG5jb25zdCBoYW5kbGVJdGVtS2V5RG93biA9IGl0ZW1Db2xsZWN0aW9uID0+IGUgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZTtcbiAgICBjb25zdCBpdGVtSWR4ID0gaXRlbUNvbGxlY3Rpb24uaW5kZXgoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCBsYXN0Q29sbGVjdGlvbkl0ZW1JZHggPSBpdGVtQ29sbGVjdGlvbi5sZW5ndGggLSAxO1xuXG4gICAgaWYgKE9iamVjdC52YWx1ZXMoYXJpYUtleUNvZGVzKS5pbmNsdWRlcyhrZXlDb2RlKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuTEVGVDpcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5VUDoge1xuICAgICAgICBjb25zdCBwcmV2SXRlbUlkeCA9IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbihsYXN0Q29sbGVjdGlvbkl0ZW1JZHgsIGl0ZW1JZHggLSAxKTtcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZ2V0KHByZXZJdGVtSWR4KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4IC0gMSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5SSUdIVDpcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5ET1dOOiB7XG4gICAgICAgIGNvbnN0IG5leHRJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCArIDEpO1xuICAgICAgICBpdGVtQ29sbGVjdGlvbi5nZXQobmV4dEl0ZW1JZHgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggKyAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDogYnJlYWs7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKCRjb250YWluZXIsIGl0ZW1TZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0ICRpdGVtQ29sbGVjdGlvbiA9ICRjb250YWluZXIuZmluZChpdGVtU2VsZWN0b3IpO1xuXG4gICAgJGNvbnRhaW5lci5vbigna2V5ZG93bicsIGl0ZW1TZWxlY3RvciwgaGFuZGxlSXRlbUtleURvd24oJGl0ZW1Db2xsZWN0aW9uKSk7XG59O1xuIiwiLy8gaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4uL3dpc2hsaXN0JzsgLy8gcGFwYXRoZW1lcy1ldmV2YTogZGlzYWJsZWRcbmltcG9ydCB7IGluaXRSYWRpb09wdGlvbnMgfSBmcm9tICcuL2FyaWEnO1xuXG5jb25zdCBvcHRpb25zVHlwZXNNYXAgPSB7XG4gICAgSU5QVVRfRklMRTogJ2lucHV0LWZpbGUnLFxuICAgIElOUFVUX1RFWFQ6ICdpbnB1dC10ZXh0JyxcbiAgICBJTlBVVF9OVU1CRVI6ICdpbnB1dC1udW1iZXInLFxuICAgIElOUFVUX0NIRUNLQk9YOiAnaW5wdXQtY2hlY2tib3gnLFxuICAgIFRFWFRBUkVBOiAndGV4dGFyZWEnLFxuICAgIERBVEU6ICdkYXRlJyxcbiAgICBTRVRfU0VMRUNUOiAnc2V0LXNlbGVjdCcsXG4gICAgU0VUX1JFQ1RBTkdMRTogJ3NldC1yZWN0YW5nbGUnLFxuICAgIFNFVF9SQURJTzogJ3NldC1yYWRpbycsXG4gICAgU1dBVENIOiAnc3dhdGNoJyxcbiAgICBQUk9EVUNUX0xJU1Q6ICdwcm9kdWN0LWxpc3QnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbkNoYW5nZURlY29yYXRvcihhcmVEZWZhdWx0T3B0aW9uc1NldCkge1xuICAgIHJldHVybiAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgaWYgKGFyZURlZmF1bHRPcHRpb25zU2V0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAvLyBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7IC8vIHBhcGF0aGVtZXMtZXZldmE6IGRpc2FibGVkXG4gICAgICAgIHRoaXMuZ2V0VGFiUmVxdWVzdHMoKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKS5lYWNoKChfXywgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcblxuICAgICAgICAgICAgdGhpcy5fbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YWx1ZSwgdHlwZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlKHZhcmlhbnREb21Ob2RlLCB2YXJpYW50VHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHZhcmlhbnRUeXBlKSB7XG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNFVF9SQURJTzpcbiAgICAgICAgY2FzZSBvcHRpb25zVHlwZXNNYXAuU1dBVENIOiB7XG4gICAgICAgICAgICBpbml0UmFkaW9PcHRpb25zKCQodmFyaWFudERvbU5vZGUpLCAnW3R5cGU9cmFkaW9dJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3cgcmFkaW8gYnV0dG9ucyB0byBnZXQgZGVzZWxlY3RlZFxuICAgICAqL1xuICAgIGluaXRSYWRpb0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgcmFkaW8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRyYWRpbyA9ICQocmFkaW8pO1xuXG4gICAgICAgICAgICAvLyBPbmx5IGJpbmQgdG8gY2xpY2sgb25jZVxuICAgICAgICAgICAgaWYgKCRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICRyYWRpby5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkcmFkaW8uZGF0YSgnc3RhdGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJywgJHJhZGlvLnByb3AoJ2NoZWNrZWQnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSA9IHRoaXMuY29udGV4dC5vdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2U7XG4gICAgICAgIGxldCBvdXRPZlN0b2NrTWVzc2FnZSA9IGRhdGEub3V0X29mX3N0b2NrX21lc3NhZ2U7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yICE9PSAnaGlkZV9vcHRpb24nICYmIGJlaGF2aW9yICE9PSAnbGFiZWxfb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgICAgICBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7b3V0T2ZTdG9ja01lc3NhZ2V9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7b3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlfSlgO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcblxuXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBmcmFnbWVudCBpZGVudGlmaWVyIGluIFVSTCByZXF1ZXN0aW5nIGEgc3BlY2lmaWMgdGFiXG4gICAgICovXG4gICAgZ2V0VGFiUmVxdWVzdHMoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjdGFiLScpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJCgnLnRhYnMnKS5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYCk7XG4gICAgICAgICAgICBjb25zdCAkdGFiQ29udGVudCA9ICQoYCR7d2luZG93LmxvY2F0aW9uLmhhc2h9YCk7XG5cbiAgICAgICAgICAgIGlmICgkYWN0aXZlVGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkYWN0aXZlVGFiLmZpbmQoJy50YWInKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYClcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICR0YWJDb250ZW50LmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2luY2UgJHByb2R1Y3RWaWV3IGNhbiBiZSBkeW5hbWljYWxseSBpbnNlcnRlZCB1c2luZyByZW5kZXJfd2l0aCxcbiAgICAgKiBXZSBoYXZlIHRvIHJldHJpZXZlIHRoZSByZXNwZWN0aXZlIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gJHNjb3BlXG4gICAgICovXG4gICAgZ2V0Vmlld01vZGVsKCRzY29wZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICR3ZWlnaHQ6ICQoJy5wcm9kdWN0Vmlldy1pbmZvIFtkYXRhLXByb2R1Y3Qtd2VpZ2h0XScsICRzY29wZSksXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydEZvcm06ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNrdToge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQuc2t1LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBjOiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC51cGMtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC11cGNdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWFudGl0eToge1xuICAgICAgICAgICAgICAgICR0ZXh0OiAkKCcuaW5jcmVtZW50VG90YWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRidWxrUHJpY2luZzogJCgnLnByb2R1Y3RWaWV3LWluZm8tYnVsa1ByaWNpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHdhbGxldEJ1dHRvbnM6ICQoJ1tkYXRhLWFkZC10by1jYXJ0LXdhbGxldC1idXR0b25zXScsICRzY29wZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcHJpY2luZyBlbGVtZW50cyB0aGF0IHdpbGwgc2hvdyB1cCBvbmx5IHdoZW4gdGhlIHByaWNlIGV4aXN0cyBpbiBBUElcbiAgICAgKiBAcGFyYW0gdmlld01vZGVsXG4gICAgICovXG4gICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZXcoZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAhZGF0YS5pbnN0b2NrXG4gICAgICAgICAgICA/IChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZSB8fCB0aGlzLmNvbnRleHQub3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlKVxuICAgICAgICAgICAgOiAoZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcblxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KG1lc3NhZ2UpO1xuXG4gICAgICAgIGlmIChkYXRhLnByaWNlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEud2VpZ2h0IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdlaWdodC5odG1sKGRhdGEud2VpZ2h0LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdmFyaWF0aW9uX2lkIGlmIGl0IGV4aXN0cyBmb3IgYWRkaW5nIHRvIHdpc2hsaXN0XG4gICAgICAgIGlmIChkYXRhLnZhcmlhbnRJZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3aXNobGlzdFZhcmlhdGlvbi52YWwoZGF0YS52YXJpYW50SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgU0tVIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5za3UpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoZGF0YS5za3UpO1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBVUEMgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLnVwYykge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dChkYXRhLnVwYyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHN0b2NrIHZpZXcgaXMgb24gKENQIHNldHRpbmdzKVxuICAgICAgICBpZiAodmlld01vZGVsLnN0b2NrLiRjb250YWluZXIubGVuZ3RoICYmIHR5cGVvZiBkYXRhLnN0b2NrID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0b2NrIGNvbnRhaW5lciBpcyBoaWRkZW4sIHNob3dcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3KGRhdGEpO1xuXG4gICAgICAgIC8vIElmIEJ1bGsgUHJpY2luZyByZW5kZXJlZCBIVE1MIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzICYmIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0V3JhcHBlciA9ICQoJyNhZGQtdG8tY2FydC13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKGFkZFRvQ2FydFdyYXBwZXIuaXMoJzpoaWRkZW4nKSAmJiBkYXRhLnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICBhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByaWNlID0gcHJpY2UucHJpY2VfcmFuZ2UgP1xuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRoX3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aF90YXguZm9ybWF0dGVkfWBcbiAgICAgICAgICAgICAgICA6IHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZDtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRoVGF4LiRzcGFuLmh0bWwodXBkYXRlZFByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByaWNlID0gcHJpY2UucHJpY2VfcmFuZ2UgP1xuICAgICAgICAgICAgICAgIGAke3ByaWNlLnByaWNlX3JhbmdlLm1pbi53aXRob3V0X3RheC5mb3JtYXR0ZWR9IC0gJHtwcmljZS5wcmljZV9yYW5nZS5tYXgud2l0aG91dF90YXguZm9ybWF0dGVkfWBcbiAgICAgICAgICAgICAgICA6IHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZDtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VXaXRob3V0VGF4LiRzcGFuLmh0bWwodXBkYXRlZFByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5zYXZlZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGFuIG1lc3NhZ2UgYm94IGlmIGEgbWVzc2FnZSBpcyBwYXNzZWRcbiAgICAgKiBIaWRlIHRoZSBib3ggaWYgdGhlIG1lc3NhZ2UgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICAgKi9cbiAgICBzaG93TWVzc2FnZUJveChtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVXYWxsZXRCdXR0b25zVmlldyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgY29uc3QgaXNWYWxpZEZvcm0gPSB2aWV3TW9kZWwuJGFkZFRvQ2FydEZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpO1xuICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGlzVmFsaWRGb3JtICYmIGRhdGEucHVyY2hhc2FibGUgJiYgZGF0YS5pbnN0b2NrKTtcbiAgICB9XG5cbiAgICB0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShzaG91bGRTaG93KSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICBpZiAoc2hvdWxkU2hvdykge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3YWxsZXRCdXR0b25zLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmhpZGUoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGluIGEgc2VsZWN0IGRyb3Bkb3duLCBzZWxlY3QgdGhlIGZpcnN0IG9wdGlvbiAoTUVSQy02MzkpXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHNCYXNlLCB7IG9wdGlvbkNoYW5nZURlY29yYXRvciB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvZXlldmEvaW1hZ2UtZ2FsbGVyeSc7IC8vIHBhcGF0aGVtZXMtZXlldmEgZWRpdGVkXG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IGFsZXJ0TW9kYWwsIHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCB7IGlzRW1wdHksIGlzUGxhaW5PYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5pbXBvcnQgeyBub3JtYWxpemVGb3JtRGF0YSB9IGZyb20gJy4vdXRpbHMvYXBpJztcbmltcG9ydCB7IGlzQnJvd3NlcklFLCBjb252ZXJ0SW50b0FycmF5IH0gZnJvbSAnLi91dGlscy9pZS1oZWxwZXJzJztcbmltcG9ydCBiYW5uZXJVdGlscyBmcm9tICcuL3V0aWxzL2Jhbm5lci11dGlscyc7XG5pbXBvcnQgY3VycmVuY3lTZWxlY3RvciBmcm9tICcuLi9nbG9iYWwvY3VycmVuY3ktc2VsZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0LCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXSAubG9hZGluZ092ZXJsYXknKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkgPSBuZXcgSW1hZ2VHYWxsZXJ5KCQoJ1tkYXRhLWltYWdlLWdhbGxlcnldJywgdGhpcy4kc2NvcGUpKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB0aGlzLmxpc3RlblF1YW50aXR5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuJHN3YXRjaE9wdGlvbk1lc3NhZ2UgPSAkKCcuc3dhdGNoLW9wdGlvbi1tZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlID0ge307XG4gICAgICAgIHRoaXMuc3dhdGNoR3JvdXBJZExpc3QgPSAkKCdbaWRePVwic3dhdGNoR3JvdXBcIl0nKS5tYXAoKF8sIGdyb3VwKSA9PiAkKGdyb3VwKS5hdHRyKCdpZCcpKTtcbiAgICAgICAgdGhpcy5zdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVNlbGVjdG9yKCk7XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCAkc2NvcGUpO1xuXG4gICAgICAgIGlmICgkZm9ybVswXS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0uZmluZCgnaW5wdXQjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JyksXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuICAgICAgICBjb25zdCBoYXNPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5odG1sKCkudHJpbSgpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuICAgICAgICBjb25zdCAkcHJvZHVjdFN3YXRjaEdyb3VwID0gJCgnW2lkKj1cImF0dHJpYnV0ZV9zd2F0Y2hcIl0nLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0U3dhdGNoTGFiZWxzID0gJCgnLmZvcm0tb3B0aW9uLXN3YXRjaCcsICRmb3JtKTtcbiAgICAgICAgY29uc3QgcGxhY2VTd2F0Y2hMYWJlbEltYWdlID0gKF8sIGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkb3B0aW9uSW1hZ2UgPSAkKCcuZm9ybS1vcHRpb24tZXhwYW5kZWQnLCAkKGxhYmVsKSk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25JbWFnZVdpZHRoID0gJG9wdGlvbkltYWdlLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGV4dGVuZGVkT3B0aW9uSW1hZ2VPZmZzZXRMZWZ0ID0gNTU7XG4gICAgICAgICAgICBjb25zdCB7IHJpZ2h0IH0gPSBsYWJlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyID0gd2luZG93LnNjcmVlbi53aWR0aCAtIHJpZ2h0O1xuICAgICAgICAgICAgY29uc3Qgc2hpZnRWYWx1ZSA9IG9wdGlvbkltYWdlV2lkdGggLSBlbXB0eVNwYWNlVG9TY3JlZW5SaWdodEJvcmRlcjtcblxuICAgICAgICAgICAgaWYgKGVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyIDwgKG9wdGlvbkltYWdlV2lkdGggKyBleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCkpIHtcbiAgICAgICAgICAgICAgICAkb3B0aW9uSW1hZ2UuY3NzKCdsZWZ0JywgYCR7c2hpZnRWYWx1ZSA+IDAgPyAtc2hpZnRWYWx1ZSA6IHNoaWZ0VmFsdWV9cHhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkVG9DYXJ0VmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgJC5lYWNoKCRwcm9kdWN0U3dhdGNoTGFiZWxzLCBwbGFjZVN3YXRjaExhYmVsSW1hZ2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29udGV4dC5zaG93U3dhdGNoTmFtZXMpIHtcbiAgICAgICAgICAgIHRoaXMuJHN3YXRjaE9wdGlvbk1lc3NhZ2UucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0U3dhdGNoR3JvdXAub24oJ2NoYW5nZScsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoR3JvdXBFbGVtZW50ID0gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkKHRhcmdldCksICQoc3dhdGNoR3JvdXBFbGVtZW50KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJC5lYWNoKCRwcm9kdWN0U3dhdGNoR3JvdXAsIChfLCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoR3JvdXBFbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5pcygnOmNoZWNrZWQnKSkgdGhpcy5zaG93U3dhdGNoTmFtZU9uT3B0aW9uKCQoZWxlbWVudCksICQoc3dhdGNoR3JvdXBFbGVtZW50KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9DYXJ0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCAkZm9ybVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXG4gICAgICAgIC8vIG9yIGhhdmUgZGVmYXVsdCB2YXJpYW50IHByb3BlcnRpZXMgdGhhdCBjaGFuZ2UgdGhlIHZpZXdcbiAgICAgICAgaWYgKChpc0VtcHR5KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSkgfHwgaGFzRGVmYXVsdE9wdGlvbnMpICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25DaGFuZ2VDYWxsYmFjayA9IG9wdGlvbkNoYW5nZURlY29yYXRvci5jYWxsKHRoaXMsIGhhc0RlZmF1bHRPcHRpb25zKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZSgkcHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCBvcHRpb25DaGFuZ2VDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LnNob3coKTtcblxuICAgICAgICB0aGlzLnByZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3ByZXZpZXdNb2RhbCcpWzBdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQWRkVG9DYXJ0VmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gPiAuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMubnVtYmVyc09ubHkodmFsKTtcbiAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnByb2R1Y3RRdWFudGl0eUVycm9yTWVzc2FnZSxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICBzdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzKCkge1xuICAgICAgICBpZiAodGhpcy5zd2F0Y2hHcm91cElkTGlzdC5sZW5ndGggJiYgaXNFbXB0eSh0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc3dhdGNoR3JvdXBJZExpc3QuZWFjaCgoXywgc3dhdGNoR3JvdXBJZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2Vbc3dhdGNoR3JvdXBJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2Vbc3dhdGNoR3JvdXBJZF0gPSAkKGAjJHtzd2F0Y2hHcm91cElkfSB+IC5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2VgKS50ZXh0KCkudHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQoKSB7XG4gICAgICAgIGNvbnN0IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgICQuZWFjaCgkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhbnRzbGlzdCA9IGNvbnZlcnRJbnRvQXJyYXkodmFsdWUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCA9IGlucHQgPT4gaW5wdC5kYXRhc2V0LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSA9PT0gY2hlY2tlZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0KVswXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmNoaWxkcmVuWzBdIDogY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpZZXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJykgOiAndW5zYXRpc2ZpZWQnO1xuICAgICAgICBjb25zdCB2aWV3ID0gJCgnLnByb2R1Y3RWaWV3Jyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RWYXJpYW50KSB7XG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9IHByb2R1Y3RWYXJpYW50ID09PSAndW5zYXRpc2ZpZWQnID8gJycgOiBwcm9kdWN0VmFyaWFudDtcbiAgICAgICAgICAgIGlmICh2aWV3LmF0dHIoJ2RhdGEtZXZlbnQtdHlwZScpKSB7XG4gICAgICAgICAgICAgICAgdmlldy5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSB2aWV3LmZpbmQoJy5wcm9kdWN0Vmlldy10aXRsZScpWzBdLmlubmVyVGV4dC5yZXBsYWNlKC9cIi9nLCAnXFxcXCQmJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9ICQoYFtkYXRhLW5hbWU9XCIke3Byb2R1Y3ROYW1lfVwiXWApO1xuICAgICAgICAgICAgICAgIGNhcmQuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgd2luZG93IGlzIGJlaW5nIHJ1biBpbnNpZGUgYW4gaWZyYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNSdW5uaW5nSW5JZnJhbWUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgcHJvZHVjdCBvcHRpb25zIGNoYW5nZXNcbiAgICAgKlxuICAgICAqL1xuICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICAvLyBEbyBub3QgdHJpZ2dlciBhbiBhamF4IHJlcXVlc3QgaWYgaXQncyBhIGZpbGUgb3IgaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhwcm9kdWN0QXR0cmlidXRlc0RhdGEsIHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICAgICAgYmFubmVyVXRpbHMuZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkZm9ybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGV4dCA9ICRmb3JtLnBhcmVudHMoJy5wcm9kdWN0VmlldycpLmZpbmQoJy5wcm9kdWN0Vmlldy1pbmZvJyk7XG4gICAgICAgICAgICAgICAgbW9kYWxGYWN0b3J5KCdbZGF0YS1yZXZlYWxdJywgeyAkY29udGV4dCB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ29uUHJvZHVjdE9wdGlvbnNDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGlmIHRoaXMgc2V0dGluZyBpcyBlbmFibGVkIGluIFBhZ2UgQnVpbGRlclxuICAgICAqIHNob3cgbmFtZSBmb3Igc3dhdGNoIG9wdGlvblxuICAgICAqL1xuICAgIHNob3dTd2F0Y2hOYW1lT25PcHRpb24oJHN3YXRjaCwgJHN3YXRjaEdyb3VwKSB7XG4gICAgICAgIGNvbnN0IHN3YXRjaE5hbWUgPSAkc3dhdGNoLmF0dHIoJ2FyaWEtbGFiZWwnKTtcbiAgICAgICAgY29uc3QgYWN0aXZlU3dhdGNoR3JvdXBJZCA9ICRzd2F0Y2hHcm91cC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknKTtcbiAgICAgICAgY29uc3QgJHN3YXRjaE9wdGlvbk1lc3NhZ2UgPSAkKGAjJHthY3RpdmVTd2F0Y2hHcm91cElkfSB+IC5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2VgKTtcblxuICAgICAgICAkKCdbZGF0YS1vcHRpb24tdmFsdWVdJywgJHN3YXRjaEdyb3VwKS50ZXh0KHN3YXRjaE5hbWUpO1xuICAgICAgICAkc3dhdGNoT3B0aW9uTWVzc2FnZS50ZXh0KGAke3RoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW2FjdGl2ZVN3YXRjaEdyb3VwSWRdfSAke3N3YXRjaE5hbWV9YCk7XG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJHN3YXRjaE9wdGlvbk1lc3NhZ2UsICdzdGF0dXMnLCAnYXNzZXJ0aXZlJyk7XG4gICAgfVxuXG4gICAgc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGVsZW1lbnQsIHJvbGVUeXBlLCBhcmlhTGl2ZVN0YXR1cykge1xuICAgICAgICAkZWxlbWVudC5hdHRyKHtcbiAgICAgICAgICAgIHJvbGU6IHJvbGVUeXBlLFxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IGFyaWFMaXZlU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICEhJGVsZW1lbnQucGFyZW50cygnLnF1aWNrVmlldycpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlKSB7XG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KGltYWdlKSkge1xuICAgICAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQuem9vbVNpemUgfSxcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggem9vbSBzaXplIHVzZWQgZm9yIGRhdGEtem9vbS1pbWFnZSBpblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3Qtdmlldy5odG1sXG5cbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcblxuICAgICAgICAgICAgICAgICAgICBBbHNvIG5vdGUgdGhhdCBnZXRTcmNzZXQgcmV0dXJucyBhIHNpbXBsZSBzcmMgc3RyaW5nIHdoZW4gZXhhY3RseSBvbmUgc2l6ZSBpcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YSxcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC5wcm9kdWN0U2l6ZSB9LFxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgIFNob3VsZCBtYXRjaCBmYWxsYmFjayBpbWFnZSBzaXplIHVzZWQgZm9yIHRoZSBtYWluIHByb2R1Y3QgaW1hZ2UgaW5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LXZpZXcuaHRtbFxuXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG5cbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KGltYWdlLmRhdGEpO1xuXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5zZXRBbHRlcm5hdGVJbWFnZSh7XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgICAgIHpvb21JbWFnZVVybCxcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnJlc3RvcmVJbWFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgYWN0aW9uIHdoZW4gdGhlIHNob3BwZXIgY2xpY2tzIG9uICsgLyAtIGZvciBxdWFudGl0eVxuICAgICAqXG4gICAgICovXG4gICAgbGlzdGVuUXVhbnRpdHlDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGJ1dHRvbicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9IHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQ7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1heCA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG5cbiAgICAgICAgICAgIGxldCBxdHkgPSBmb3Jtcy5udW1iZXJzT25seSgkaW5wdXQudmFsKCkpID8gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCkgOiBxdWFudGl0eU1pbjtcbiAgICAgICAgICAgIC8vIElmIGFjdGlvbiBpcyBpbmNyZW1lbnRpbmdcbiAgICAgICAgICAgIGlmICgkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJykge1xuICAgICAgICAgICAgICAgIHF0eSA9IGZvcm1zLnZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkocXR5LCBxdWFudGl0eU1heCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF0eSA+IDEpIHtcbiAgICAgICAgICAgICAgICBxdHkgPSBmb3Jtcy52YWxpZGF0ZURlY3JlYXNlQWdhaW5zdE1pbkJvdW5kYXJ5KHF0eSwgcXVhbnRpdHlNaW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB1cGRhdGUgaGlkZGVuIGlucHV0XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0LnZhbChxdHkpO1xuICAgICAgICAgICAgLy8gdXBkYXRlIHRleHRcbiAgICAgICAgICAgIHZpZXdNb2RlbC5xdWFudGl0eS4kdGV4dC50ZXh0KHF0eSk7XG4gICAgICAgICAgICAvLyBwZXJmb3JtIHZhbGlkYXRpb24gYWZ0ZXIgdXBkYXRpbmcgcHJvZHVjdCBxdWFudGl0eVxuICAgICAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFByZXZlbnQgdHJpZ2dlcmluZyBxdWFudGl0eSBjaGFuZ2Ugd2hlbiBwcmVzc2luZyBlbnRlclxuICAgICAgICB0aGlzLiRzY29wZS5vbigna2V5cHJlc3MnLCAnLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgZXZlbnQud2hpY2gsIHRoZW4gdXNlIGV2ZW50LndoaWNoLCBvdGhlcndpc2UgdXNlIGV2ZW50LmtleUNvZGVcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xuICAgICAgICAgICAgaWYgKHggPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2tleXVwJywgJy5mb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQWRkIGEgcHJvZHVjdCB0byBjYXJ0XG4gICAgICpcbiAgICAgKi9cbiAgICBhZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRCdG4gPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJChldmVudC50YXJnZXQpKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkYWRkVG9DYXJ0QnRuLnZhbCgpO1xuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcblxuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1BZGQobm9ybWFsaXplRm9ybURhdGEobmV3IEZvcm1EYXRhKGZvcm0pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbmN5U2VsZWN0b3IocmVzcG9uc2UuZGF0YS5jYXJ0X2lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xuXG4gICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGFkZFRvQ2FydEJ0bikpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRNb2RhbCgpLiRwcmVNb2RhbEZvY3VzZWRFbCA9ICRhZGRUb0NhcnRCdG47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3BlbiBwcmV2aWV3IG1vZGFsIGFuZCB1cGRhdGUgY29udGVudFxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwub3BlbigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5BcHBsZVBheVNlc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJG1vZGFsLmFkZENsYXNzKCdhcHBsZS1wYXktc3VwcG9ydGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkYWRkVG9DYXJ0QnRuKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkYWRkVG9DYXJ0QnRuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydENvbnRlbnQodGhpcy5wcmV2aWV3TW9kYWwsIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gbW9kYWwsIHJlZGlyZWN0IHRvIHRoZSBjYXJ0IHBhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8ocmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHwgdGhpcy5jb250ZXh0LnVybHMuY2FydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGFkZFRvQ2FydEJ0bi5uZXh0KCksICdzdGF0dXMnLCAncG9saXRlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhcnQgY29udGVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXJ0SXRlbUlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZVxuICAgICAqL1xuICAgIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9wcmV2aWV3JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCBvbkNvbXBsZXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmdJbklmcmFtZSgpICYmICF3aW5kb3cuaWZyYW1lU2RrKSB7XG4gICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhcnQgY29udGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RhbH0gbW9kYWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICB1cGRhdGVDYXJ0Q29udGVudChtb2RhbCwgY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLmdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxuICAgICAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCAkY2FydFF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCBtb2RhbC4kY29udGVudCk7XG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJGNhcnRRdWFudGl0eS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgJHByb21vdGlvbkJhbm5lciA9ICQoJ1tkYXRhLXByb21vdGlvbi1iYW5uZXJdJyk7XG4gICAgICAgICAgICBjb25zdCAkYmFja1RvU2hvcHBwaW5nQnRuID0gJCgnLnByZXZpZXdDYXJ0Q2hlY2tvdXQgPiBbZGF0YS1yZXZlYWwtY2xvc2VdJyk7XG4gICAgICAgICAgICBjb25zdCAkbW9kYWxDbG9zZUJ0biA9ICQoJyNwcmV2aWV3TW9kYWwgPiAubW9kYWwtY2xvc2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbm5lclVwZGF0ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RDb250YWluZXIgPSAkKCcjbWFpbi1jb250ZW50ID4gLmNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgJHByb2R1Y3RDb250YWluZXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXkgcGRwLXVwZGF0ZVwiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICQoJy5sb2FkaW5nT3ZlcmxheS5wZHAtdXBkYXRlJywgJHByb2R1Y3RDb250YWluZXIpLnNob3coKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkY2FydENvdW50ZXIuYWRkQ2xhc3MoJ2NhcnQtY291bnQtLXBvc2l0aXZlJyk7XG4gICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRwcm9tb3Rpb25CYW5uZXIubGVuZ3RoICYmICRiYWNrVG9TaG9wcHBpbmdCdG4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJGJhY2tUb1Nob3BwcGluZ0J0bi5vbignY2xpY2snLCBiYW5uZXJVcGRhdGVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAkbW9kYWxDbG9zZUJ0bi5vbignY2xpY2snLCBiYW5uZXJVcGRhdGVIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RJbWFnZShkYXRhLmltYWdlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKSB7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhSXRlbXMgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3REZXRhaWxzID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBmb3JtRGF0YUl0ZW0gb2YgZm9ybURhdGFJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZm9ybURhdGFJdGVtO1xuXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3Byb2R1Y3RfaWQnKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMucHJvZHVjdElkID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdxdHlbXScpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5xdWFudGl0eSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lLm1hdGNoKC9hdHRyaWJ1dGUvKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RPcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbklkOiBOdW1iZXIobmFtZS5tYXRjaCgvXFxkKy9nKVswXSksXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMub3B0aW9uU2VsZWN0aW9ucyA9IHByb2R1Y3REZXRhaWxzPy5vcHRpb25TZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgID8gWy4uLnByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMsIHByb2R1Y3RPcHRpb25dXG4gICAgICAgICAgICAgICAgICAgIDogW3Byb2R1Y3RPcHRpb25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ29uUHJvZHVjdFVwZGF0ZScsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHsgcHJvZHVjdERldGFpbHMgfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGVTZWxlY3RvcigpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUuZWFjaCgoaSwgc2NvcGUpID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURheXMoZGF0ZU9wdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoU2VsZWN0b3IgPSBkYXRlT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lJD1cIlttb250aF1cIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlTZWxlY3RvciA9IGRhdGVPcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWUkPVwiW2RheV1cIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyU2VsZWN0b3IgPSBkYXRlT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lJD1cIlt5ZWFyXVwiXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQobW9udGhTZWxlY3Rvci52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludCh5ZWFyU2VsZWN0b3IudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5c0luTW9udGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc05hTihtb250aCkgJiYgIU51bWJlci5pc05hTih5ZWFyKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gKCh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwKSA/IDI5IDogMjg7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiBjYXNlIDY6IGNhc2UgOTogY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gMzE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXkgPSAyOTsgZGF5IDw9IDMxOyBkYXkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkYXlTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke2RheX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheSA8PSBkYXlzSW5Nb250aCAmJiAhb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlTZWxlY3Rvci5vcHRpb25zLmFkZChuZXcgT3B0aW9uKGRheSwgZGF5KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF5ID4gZGF5c0luTW9udGggJiYgb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoc2NvcGUpLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVPcHRpb24gPSBlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPWRhdGVdJyk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF5cyhkYXRlT3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2NvcGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9ZGF0ZV0nKS5mb3JFYWNoKChkYXRlT3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF5cyhkYXRlT3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgc3RyaW5nIHZhbHVlcyBmcm9tIHRoZSBmb3JtRGF0YVxuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtID0gZm9ybURhdGEgPT4ge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAodmFsICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJlcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk2NzI5OTIvYWpheC1yZXF1ZXN0LWZhaWxzLXdoZW4tc2VuZGluZy1mb3JtZGF0YS1pbmNsdWRpbmctZW1wdHktZmlsZS1pbnB1dC1pbi1zYWZhcmlcbiAqIFNhZmFyaSBicm93c2VyIHdpdGgganF1ZXJ5IDMuMy4xIGhhcyBhbiBpc3N1ZSB1cGxvYWRpbmcgZW1wdHkgZmlsZSBwYXJhbWV0ZXJzLiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYW55IGVtcHR5IGZpbGVzIGZyb20gdGhlIGZvcm0gcGFyYW1zXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0gPSBmb3JtRGF0YSA9PiB7XG4gICAgY29uc3QgcmVzID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHZhbCBpbnN0YW5jZW9mIEZpbGUpIHx8IHZhbC5uYW1lIHx8IHZhbC5zaXplKSB7XG4gICAgICAgICAgICAgICAgcmVzLmFwcGVuZChrZXksIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBlbXB0eSBzdHJpbmcgdmFsdWVzIGFuZCBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtRGF0YVxuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplRm9ybURhdGEgPSBmb3JtRGF0YSA9PiBmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkpO1xuIiwiaW1wb3J0IHsgaXNCcm93c2VySUUgfSBmcm9tICcuL2llLWhlbHBlcnMnO1xuXG5jb25zdCBiYW5uZXJVdGlscyA9IHtcbiAgICBkaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudDogKHByb2R1Y3RBdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGlmICghcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2UgfHwgaXNCcm93c2VySUUpIHJldHVybjtcblxuICAgICAgICBsZXQgcHJpY2UgPSAwO1xuXG4gICAgICAgIGlmICghcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2UucHJpY2VfcmFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgICAgIHByaWNlID0gcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aG91dF90YXgudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgICAgIHByaWNlID0gcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2JpZ2NvbW1lcmNlLnByb2R1Y3RwcmljZWNoYW5nZScsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIGFtb3VudDogcHJpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBiYW5uZXJVdGlscztcbiIsImV4cG9ydCBjb25zdCBpc0Jyb3dzZXJJRSA9ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuXG5leHBvcnQgY29uc3QgY29udmVydEludG9BcnJheSA9IGNvbGxlY3Rpb24gPT4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29sbGVjdGlvbik7XG4iLCJpbXBvcnQgJ2Vhc3l6b29tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VHYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZ2FsbGVyeSkge1xuICAgICAgICB0aGlzLiRtYWluSW1hZ2UgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW5dJyk7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZCA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJyk7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0ge307XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SW1hZ2Vab29tKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpbkltYWdlKGltZ09iaikge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHsgLi4uaW1nT2JqIH07XG5cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgICAgICB0aGlzLnN3YXBNYWluSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBzZXRBbHRlcm5hdGVJbWFnZShpbWdPYmopIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVkSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRJbWFnZSA9IHtcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmw6IHRoaXMuJG1haW5JbWFnZS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmw6IHRoaXMuJG1haW5JbWFnZS5hdHRyKCdkYXRhLXpvb20taW1hZ2UnKSxcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6IHRoaXMuJG1haW5JbWFnZS5maW5kKCdpbWcnKS5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogdGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKGltZ09iaik7XG4gICAgfVxuXG4gICAgcmVzdG9yZUltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZSh0aGlzLnNhdmVkSW1hZ2UpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2F2ZWRJbWFnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdE5ld0ltYWdlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBpbWdPYmogPSB7XG4gICAgICAgICAgICBtYWluSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmwnKSxcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmwnKSxcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgICAgICBtYWluSW1hZ2VBbHQ6ICR0YXJnZXQuY2hpbGRyZW4oKS5maXJzdCgpLmF0dHIoJ2FsdCcpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiRzZWxlY3RhYmxlSW1hZ2VzLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzd2FwTWFpbkltYWdlKCkge1xuICAgICAgICBjb25zdCBpc0Jyb3dzZXJJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ1RyaWRlbnQnKTtcblxuICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuc3dhcChcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybCxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLiRtYWluSW1hZ2UuYXR0cih7XG4gICAgICAgICAgICAnZGF0YS16b29tLWltYWdlJzogdGhpcy5jdXJyZW50SW1hZ2Uuem9vbUltYWdlVXJsLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlTmVzdGVkLmF0dHIoe1xuICAgICAgICAgICAgYWx0OiB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VBbHQsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNCcm93c2VySUUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrU3R5bGVzSUUgPSB7XG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKCR7dGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlVXJsfSlgLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtb3JpZ2luJzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJ2NvbnRhaW4nLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy4kbWFpbkltYWdlTmVzdGVkLmNzcyhmYWxsYmFja1N0eWxlc0lFKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0ICRpbWFnZUNvbnRhaW5lciA9ICQoJy5wcm9kdWN0Vmlldy1pbWFnZScpO1xuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSAkaW1hZ2VDb250YWluZXIuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gJGltYWdlQ29udGFpbmVyLndpZHRoKCk7XG5cbiAgICAgICAgY29uc3QgJGltYWdlID0gdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLiR6b29tO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAkaW1hZ2UuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gJGltYWdlLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKGhlaWdodCA8IGNvbnRhaW5lckhlaWdodCB8fCB3aWR0aCA8IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW1hZ2Vab29tKCkge1xuICAgICAgICB0aGlzLmVhc3l6b29tID0gdGhpcy4kbWFpbkltYWdlLmVhc3lab29tKHtcbiAgICAgICAgICAgIG9uU2hvdzogKCkgPT4gdGhpcy5jaGVja0ltYWdlKCksXG4gICAgICAgICAgICBlcnJvck5vdGljZTogJycsXG4gICAgICAgICAgICBsb2FkaW5nTm90aWNlOiAnJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld0ltYWdlLmJpbmQodGhpcykpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9pbmhlcml0c0xvb3NlIiwiY29uc3RydWN0b3IiLCJfc2V0UHJvdG90eXBlT2YiLCJtdXN0YWNoZSIsImNyZWF0ZUZvY3VzVHJhcCIsInRvb2xzIiwiQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkiLCJERUZBVUxUX1NURVAiLCJJbWFnZUdhbGxlcnlNb2RhbCIsImltYWdlR2FsbGVyeSIsIiRnYWxsZXJ5IiwibW9kYWxUZW1wbGF0ZSIsIiRib2R5IiwiJCIsImNyZWF0ZU1vZGFsIiwiX3Byb3RvIiwiYmluZEV2ZW50cyIsIl90aGlzIiwiZmluZCIsIm9mZiIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRhIiwiY3VycmVudFRhcmdldCIsImltYWdlVXJsIiwiZGF0YSIsImltYWdlU3Jjc2V0Iiwiem9vbUltYWdlVXJsIiwidmlkZW9JZCIsInN0ZXAiLCJjbG9zZXN0IiwiTnVtYmVyIiwic3BsaXQiLCJvcGVuTW9kYWwiLCIkZ2FsbGVyeU1vZGFsIiwiY2xvc2VNb2RhbCIsImtleSIsImlzIiwidGFyZ2V0Iiwic2V0TWFpbkltYWdlIiwic2V0TWFpblZpZGVvIiwidG90YWxTdGVwIiwic2V0TWFpbjM2MCIsInByZXZpb3VzMzYwU3RlcCIsIm5leHQzNjBTdGVwIiwicGxheTM2MCIsInBhdXNlMzYwIiwiZGVzdHJveU1vZGFsIiwicmVtb3ZlIiwiXyRtYWluSW1hZ2VMaW5rJGdldCIsIiRtYWluSW1hZ2VMaW5rIiwiJG1haW5JbWFnZSIsImNsb25lIiwicmVtb3ZlQXR0ciIsImF0dHIiLCJtYWluSW1hZ2VMaW5rRWxlbWVudCIsImdldCIsIm91dGVySFRNTCIsIm5hbWUiLCJ0ZXh0IiwidmlkZW9zTGFiZWwiLCJpbWFnZXMzNjBMYWJlbCIsImltYWdlc0xhYmVsIiwidmlkZW9zIiwibWFwIiwibGkiLCJfJCRmaW5kJGNsb25lJGdldCIsImxpbmtFbGVtZW50IiwiaW1hZ2VzMzYwIiwiXyRlbCRnZXQiLCIkZWwiLCJpbWFnZXMiLCJmaWx0ZXIiLCJfJGEkZ2V0IiwicmVuZGVyIiwiaGlkZSIsImFwcGVuZFRvIiwiaW5pdEltYWdlWm9vbSIsImZvY3VzVHJhcCIsImVzY2FwZURlYWN0aXZhdGVzIiwicmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUiLCJhbGxvd091dHNpZGVDbGljayIsIl90aGlzMiIsIiRsYXN0QWN0aXZlRWxlbWVudCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImFkZENsYXNzIiwiJG1haW5JbWciLCJzaG93IiwicmVtb3ZlQ2xhc3MiLCJhY3RpdmF0ZSIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwiX3RoaXMzIiwiaGlkZU1haW5WaWRlbyIsImhpZGUzNjBVSSIsImRlYWN0aXZhdGUiLCJtYWluSW1hZ2VVcmwiLCJtYWluSW1hZ2VTcmNzZXQiLCJzaG93TWFpbkltYWdlIiwic2V0QWN0aXZlVGh1bWIiLCJzd2FwTWFpbkltYWdlIiwiaGlkZU1haW5JbWFnZSIsIl9pIiwiJGltYWdlQ29udGFpbmVyIiwiZWFzeXpvb20iLCJzd2FwIiwiaXNCcm93c2VySUUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmNsdWRlcyIsImZhbGxiYWNrU3R5bGVzSUUiLCJjc3MiLCJjaGVja0ltYWdlIiwiY29udGFpbmVySGVpZ2h0IiwiaGVpZ2h0IiwiY29udGFpbmVyV2lkdGgiLCJ3aWR0aCIsIiRpbWFnZSIsIiR6b29tIiwiX3RoaXM0IiwiZWFzeVpvb20iLCJvblNob3ciLCJlcnJvck5vdGljZSIsImxvYWRpbmdOb3RpY2UiLCJzaG93TWFpblZpZGVvIiwic3JjIiwic2hvdzM2MFVJIiwic3dhcE1haW4zNjAiLCJzZXQzNjBDdXJyZW50U3RlcCIsImN1cnJlbnRTdGVwIiwidG90YWwiLCJfdGhpczUiLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwzNjAiLCJzZXRJbnRlcnZhbCIsIkNhcmRJbWFnZUdhbGxlcnlNb2RhbCIsIl9JbWFnZUdhbGxlcnlNb2RhbDIiLCIkc2NvcGUiLCJfdGVtcCIsIl90aGlzNiIsIl9yZWYiLCJwcm9kdWN0SWQiLCJncmFwaFFMVG9rZW4iLCJ6b29tU2l6ZSIsInByb2R1Y3RTaXplIiwidGh1bWJTaXplIiwidHh0VmlkZW9zTGFiZWwiLCJ0eHRJbWFnZXMzNjBMYWJlbCIsInR4dEltYWdlc0xhYmVsIiwibG9hZGluZ01vZGFsVGVtcGxhdGUiLCJfcHJvdG8yIiwib3BlbkxvYWRpbmdNb2RhbCIsIl9vcGVuTG9hZGluZ01vZGFsIiwiX2NhbGxlZSIsIl9jb250ZXh0IiwibG9hZE1vZGFsIiwiX2xvYWRNb2RhbCIsIl9jYWxsZWUyIiwibWFpbkltYWdlIiwiX2NvbnRleHQyIiwiZmV0Y2hQcm9kdWN0IiwiaW1hZ2UiLCJpc0RlZmF1bHQiLCJnZXRTcmNzZXQiLCJ1cmxUZW1wbGF0ZSIsInpvb21VcmwiLCJ1cmwiLCJ0aHVtYm5haWxVcmwiLCJhbHRUZXh0IiwidmlkZW8iLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJodG1sIiwiX3RlbXAyIiwiX3RoaXM3IiwiX3JlZjIiLCJfcmVmMiRmaXJzdFZpZGVvIiwiZmlyc3RWaWRlbyIsIl9yZWYyJGZpcnN0IiwiZmlyc3QzNjAiLCJmaXJzdCIsIl9mZXRjaFByb2R1Y3QiLCJfY2FsbGVlMyIsIl90aGlzJHpvb21TaXplJHNwbGl0JCIsInpvb21XaWR0aCIsInpvb21IZWlnaHQiLCJfdGhpcyRwcm9kdWN0U2l6ZSRzcGwiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJfdGhpcyR0aHVtYlNpemUkc3BsaXQiLCJ0aHVtYldpZHRoIiwidGh1bWJIZWlnaHQiLCJyZXNwIiwiX3JlZjMiLCJfY29udGV4dDMiLCJhamF4IiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzaXRlIiwicHJvZHVjdCIsImVkZ2VzIiwiX3JlZjQiLCJub2RlIiwiX3JlZjUiLCJjdXN0b21GaWVsZHMiLCJfcmVmNiIsIl9yZWY3IiwiSW1hZ2VHYWxsZXJ5IiwiX0Nvcm5lcnN0b25lSW1hZ2VHYWxsIiwiX3RoaXM4IiwiaW1hZ2VHYWxsZXJ5TW9kYWwiLCJfcHJvdG8zIiwiZGVmYXVsdCIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsInV0aWxzIiwiQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyIsImFsZXJ0TW9kYWwiLCJzaG93QWxlcnRNb2RhbCIsIk1vZGFsRXZlbnRzIiwiZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMiLCJjdXJyZW5jeUZvcm1hdCIsIlNhbGVDb3VudGRvd24iLCJERUJVR19MT0ciLCJub3JtYWxpemVPcHRpb25TdHJpbmciLCJzIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZXF1YWxPcHRpb25TdHJpbmciLCJiIiwiYXJlQXJyYXlzRXF1YWxVbm9yZGVyZWQiLCJhcnIxIiwiYXJyMiIsIl9hcnIxIiwic2xpY2UiLCJzb3J0IiwiX2FycjIiLCJldmVyeSIsImluZGV4IiwiY2FjaGVkU2V0dGluZ3MiLCJoYW5kbGVQcm9taXNlc1dpdGhMaW1pdCIsIl94IiwiX3gyIiwiX2hhbmRsZVByb21pc2VzV2l0aExpbWl0IiwiX2NhbGxlZTciLCJwcm9taXNlcyIsImxpbWl0IiwicmVzdWx0cyIsImV4ZWN1dGluZyIsIl9sb29wIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJfY29udGV4dDgiLCJwcm9taXNlIiwiX2NvbnRleHQ3IiwicmVzdWx0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInB1c2giLCJyYWNlIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9yZWdlbmVyYXRvclZhbHVlcyIsImFsbCIsIlByb2R1Y3REZXRhaWxzIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25jYXQiLCJtb2RpZmllcnNNb2RhbE92ZXJsYXlUZW1wbGF0ZSIsIm1vZGlmaWVyc01vZGFsVGVtcGxhdGUiLCJvcHRpb25Ub29sdGlwVGVtcGxhdGUiLCJvcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZSIsIm9wdGlvblZhbHVlVG9vbHRpcEhlYWRpbmdUZW1wbGF0ZSIsIm9wdGlvblByaWNlVGVtcGxhdGUiLCJvcHRpb25QcmljZVBsYWluVGVtcGxhdGUiLCJzdWJ0b3RhbFRlbXBsYXRlIiwic3VtbWFyeVRlbXBsYXRlIiwic2hvd1ByaWNlRnJlZSIsInNob3dQcmljZVplcm8iLCJhZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IiLCJmZXRjaE9wdGlvblByaWNlQ2FjaGUiLCJjb25zb2xlIiwibG9nIiwiX2NvbnNvbGUiLCIkZm9ybSIsIiRjaG9vc2VPcHRpb25zQnRuIiwidmFsIiwicmVmcmVzaFByb2R1Y3RNZXRhZGF0YSIsImVuYWJsZU1vZGlmaWVyc01vZGFsIiwiY3JlYXRlTW9kaWZpZXJzTW9kYWwiLCJiaW5kUHJvZHVjdEVkaXRFdmVudHMiLCJiaW5kU3RpY2t5QWRkVG9DYXJ0RXZlbnRzIiwiYmluZE1vZGFsRGVzdHJveSIsImluaXRPcHRpb25TdGVwcGVyIiwic3luY1Byb2R1Y3RDYXJkUXR5IiwiaW5pdFNhbGVDb3VudGRvd24iLCJyZW5kZXJJbmxpbmVPcHRpb25Ub29sdGlwcyIsInJlbmRlclNwZWNUb29sdGlwcyIsInBhcnNlTWV0YWRhdGEiLCJzZWxlY3RvciIsInBhcnNlIiwicHJvZHVjdE9wdGlvbnMiLCJnZXRWaWV3TW9kZWwiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGUyIiwiX2xlbjIiLCJfa2V5MiIsIm1vZGVsIiwiJHVwZGF0ZVByb2R1Y3RXcmFwcGVyIiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCIkYnRuIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwicHJvcCIsImFkZFByb2R1Y3RUb0NhcnQiLCJmb3JtIiwiZWRpdFByb2R1Y3RJbkNhcnQiLCJlZGl0UHJvZHVjdFRvQ2FydCIsIl9lZGl0UHJvZHVjdFRvQ2FydCIsIiRzYXZlQnRuIiwib3JpZ2luYWxCdG5WYWwiLCJ3YWl0TWVzc2FnZSIsImZvcm1EYXRhIiwic3VjY2VzcyIsImZhaWx1cmUiLCJpdGVtSWQiLCJuZXdRdHkiLCJfdCIsIndpbmRvdyIsIkZvcm1EYXRhIiwidW5kZWZpbmVkIiwiJG92ZXJsYXkiLCJzZXRMaXZlUmVnaW9uQXR0cmlidXRlcyIsIm5leHQiLCJyZXNwb25zZSIsImNvbnRleHQiLCJlZGl0UHJvZHVjdENhbGxiYWNrIiwiZXJyb3JUZXh0IiwidG1wIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNoZWNrSXNRdWlja1ZpZXdDaGlsZCIsIiRwcmVNb2RhbEZvY3VzZWRFbCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiZWRpdFByb2R1Y3RRdWFudGl0eSIsInVwZGF0ZUNhcnRJdGVtUXVhbnRpdHkiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsImZhaWwiLCJfeGhyIiwiX3N0YXR1cyIsImVycm9yIiwiX3gzIiwiX3g0IiwicmVqZWN0IiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJfcmVzcG9uc2UkZGF0YSIsInN0YXR1cyIsImVycm9ycyIsImpvaW4iLCJzdWJtaXRFdmVudCIsIkV2ZW50IiwiaGFuZGxlU3RpY2t5QWRkVG9DYXJ0Q2xpY2siLCIkYnV0dG9uIiwiJHN0aWNreVF0eSIsInNpYmxpbmdzIiwiJGZvcm1RdHkiLCJjaGVja1ZhbGlkaXR5IiwiaW52YWxpZEZpZWxkIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImZvY3VzIiwicmVwb3J0VmFsaWRpdHkiLCJvbmUiLCJjbG9zZWQiLCJlYWNoIiwiZm9ybUZpZWxkRWwiLCIkZm9ybUZpZWxkIiwiJGRlYyIsIiRpbmMiLCIkY2hlY2siLCJpbml0IiwiJHJhZGlvcyIsIiRjaGVja2VkIiwiJGZpcnN0Iiwic2VsZWN0IiwiaW5jIiwiZXEiLCJub3QiLCJoYXNDbGFzcyIsIiR1bmNoZWNrIiwiJG5vbmUiLCJjYXJkUXR5IiwiJHF0eSIsInF0eSIsInR4dFNhbGVDb3VudGRvd25KU09OIiwiZW5kX2luIiwiY29uZmlndXJlIiwiYWRkIiwidXBkYXRlVmlldyIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTMiLCJfbGVuMyIsIl9rZXkzIiwidXBkYXRlU2FsZVBlcmNlbnQiLCJ1cGRhdGVTaGlwcGluZ0NvdW50ZG93biIsIm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXciLCJ1cGRhdGVNb2RpZmllcnNWaWV3IiwiJHByb2R1Y3RPcHRpb25zRWwiLCIkbW9kaWZpZXJzTW9kYWxPcHRpb25zIiwiJG1vZGlmaWVyc01vZGFsU3VidG90YWwiLCJzaG93T3B0aW9uSWRzIiwic3RhY2tlZFNob3dPcHRpb25JZHMiLCJub25lU2FsZXMiLCJjdXN0b21GaWVsZE5vbmVTYWxlcyIsInNob3dPcHRpb25QcmljZXMiLCJ1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbCIsIl9kYXRhJHByaWNlIiwiX2RhdGEkcHJpY2U0IiwiJGRpdiIsIiRzcGFuIiwic2FsZVBlcmNlbnQiLCJwcmljZSIsIndpdGhvdXRfdGF4IiwiX2RhdGEkcHJpY2UyIiwiX2RhdGEkcHJpY2UzIiwicnJwX3dpdGhvdXRfdGF4IiwiTWF0aCIsInJvdW5kIiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJ3aXRoX3RheCIsIl9kYXRhJHByaWNlNSIsIl9kYXRhJHByaWNlNiIsInJycF93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4IiwiJHNoaXBwaW5nQ291bnRkb3duIiwidXBkYXRlQ2FydENvbnRlbnQiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGU0IiwiY2xvc2VNb2RpZmllcnNNb2RhbCIsInByZXZpZXdNb2RhbCIsIl9sZW40IiwiX2tleTQiLCJzaG93UHJvZHVjdEltYWdlIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlNSIsIl9sZW41IiwiX2tleTUiLCIkbW9kaWZpZXJzTW9kYWxJbWciLCJfdGhpcyRpbWFnZUdhbGxlcnkkY3UiLCJjdXJyZW50SW1hZ2UiLCJlbCIsImZvcm1hdFByaWNlIiwicGx1c1N5bWJvbCIsImRpc3BsYXkiLCJjdXJyZW5jeV90b2tlbiIsImN1cnJlbmN5Iiwic3ltYm9sIiwiY3VycmVuY3lfbG9jYXRpb24iLCJzeW1ib2xQbGFjZW1lbnQiLCJkZWNpbWFsX3Rva2VuIiwiZGVjaW1hbFRva2VuIiwiZGVjaW1hbF9wbGFjZXMiLCJkZWNpbWFsUGxhY2VzIiwidGhvdXNhbmRzX3Rva2VuIiwidGhvdXNhbmRzVG9rZW4iLCJmb3JtYXR0ZWQiLCJmaW5kT3B0aW9uVmFsdWUiLCJvcHRpb25OYW1lIiwidmFsdWVOYW1lIiwiX2hpZGVJZk9wdGlvbiR2YWx1ZXMiLCJoaWRlSWZPcHRpb24iLCJkaXNwbGF5X25hbWUiLCJ2YWx1ZXMiLCJsYWJlbCIsIm9wdGlvbklkIiwiaWQiLCJ2YWx1ZUlkIiwiJGF0dHJpYnV0ZU1lc3NhZ2VXcmFwcGVyIiwiJGFkZFRvQ2FydFdyYXBwZXIiLCIkbW9kaWZpZXJzTW9kYWwiLCJ0eHRDb250aW51ZSIsInByb2R1Y3RUaXRsZSIsIiRtb2RpZmllcnNNb2RhbENvbXBsZXRlIiwiJG1vZGlmaWVyc01vZGFsQ2xvc2UiLCIkbW9kaWZpZXJzTW9kYWxDb250aW51ZSIsIiRtb2RpZmllcnNNb2RhbEJhY2siLCJhcHBlbmQiLCJnb0JhY2tTdGVwIiwiaW52YWxpZElucHV0cyIsInJlZHVjZSIsIl9pbnZhbGlkSW5wdXRzIiwiZm9yRWFjaCIsInZhbGlkYXRlVmFyaWFudE9wdGlvbnMiLCJpbml0TW9kaWZpZXJzVmlldyIsIm9wZW5Nb2RpZmllcnNNb2RhbCIsImJlZm9yZSIsImlnbm9yZUFQSUNhbGwiLCJfdXBkYXRlTW9kaWZpZXJzVmlldyIsIl9yZWYzJGlnbm9yZUFQSUNhbGwiLCIkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5IiwiJG1vZGlmaWVyc01vZGFsVGl0bGUiLCIkbW9kaWZpZXJzTW9kYWxGb290ZXIiLCJjdXJyZW50T3B0aW9uSWQiLCJjdXJyZW50R3JvdXBOYW1lIiwiY3VycmVudEdyb3VwT3B0aW9uSWRzIiwiaGlkZU9wdGlvbklkcyIsImhpZGVPcHRpb25WYWx1ZXMiLCJ0b29sdGlwcyIsInRvb2x0aXBIZWFkaW5ncyIsIm9wdGlvblJlbmFtZXMiLCJfdGhpcyRwcm9kdWN0T3B0aW9ucyQiLCJ0aXRsZSIsImdyb3VwVG9vbHRpcCIsIiR0b29sdGlwIiwiZW1wdHkiLCJmcm9tIiwiZW50cmllcyIsInN0YXRlIiwib3B0aW9uIiwiaGlkZU9wdGlvbiIsImdyb3VwTmFtZSIsImdyb3VwT3B0aW9uSWRzIiwiaXNOb25lUmFkaW9DaGVja2VkIiwiJGZpbGUiLCJpc0ZpbGVTaG93biIsIiRkYXRlIiwiaXNPcHRpb25hbERhdGVTaG93biIsInJlcXVpcmVkIiwiJHNlbGVjdCIsImlzT3B0aW9uYWxTZWxlY3RTaG93biIsIiR0ZXh0IiwiaXNPcHRpb25hbFRleHRTaG93biIsImZvcm1WYWx1ZSIsIkZpbGUiLCJjdXN0b21GaWVsZCIsImhpZGVJZk1hdGNoIiwiY3VzdG9tRmllbGRNYXRjaEhpZGVJZiIsImdyb3VwTWF0Y2giLCJjdXN0b21GaWVsZE1hdGNoR3JvdXAiLCJfT2JqZWN0JGFzc2lnbiIsInRvb2x0aXBNYXRjaCIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZCIsIl90b29sdGlwcyRvcHRpb24kaWQyIiwiYXNzaWduIiwidG9vbHRpcCIsInZhbHVlVG9vbHRpcHMiLCJ2YWx1ZVRvb2x0aXBIZWFkaW5ncyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyIsIm5ld05hbWUiLCJjdXN0b21GaWVsZE1hdGNoUmVuYW1lIiwidmFsdWVOb25TYWxlcyIsImN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlIiwiXyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAiLCJzaG93T3B0aW9uVG9vbHRpcHMiLCJwb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMiLCJkaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlciIsInNob3dTdW1tYXJ5IiwiX3g1IiwiaW52YWxpZCIsInBvcCIsIiRvcHRpb24iLCJtYXRjaCIsImhpZGVJZk9wdGlvbnMiLCJrdiIsIl9yZWY4IiwidHJpbSIsIl9yZWY5IiwidGhlbk9wdGlvbnMiLCJfcmVmMCIsIl9yZWYxIiwiX3JlZjEwIiwiX3RoaXM4JGZpbmRPcHRpb25WYWx1IiwiZ2V0QWxsIiwiX3JlZjExIiwiX3JlZjEyIiwiX2hpZGVPcHRpb25WYWx1ZSIsIl9yZWYxMyIsIl90aGlzOSIsIl90aGlzOSRwcm9kdWN0T3B0aW9ucyIsIl9yZWYxNCIsIl9yZWYxNSIsIl90aGlzMCIsIl9tJDEkc3BsaXQkbWFwIiwiX3JlZjE2IiwiX3JlZjE3IiwiX3JlZjE4IiwiX3RoaXMxIiwiX20kMSRzcGxpdCRtYXAyIiwiaGVhZGluZyIsIl9yZWYxOSIsIl9yZWYyMCIsIl9yZWYyMSIsIl9rdiRzcGxpdCRtYXAiLCJ2YWx1ZUxhYmVsIiwiX29wdGlvbiR2YWx1ZXMkZmluZCIsIl9yZWYyMiIsImZldGNoU2V0dGluZ3MiLCJfZmV0Y2hTZXR0aW5ncyIsImN1cnJlbmN5Q29kZSIsImFjdGl2ZV9jdXJyZW5jeV9jb2RlIiwiZGVmYXVsdEN1cnJlbmN5Q29kZSIsImRlZmF1bHRfY3VycmVuY3lfY29kZSIsInNldHRpbmdzIiwiZmV0Y2hPcHRpb25QcmljZXMiLCJfZmV0Y2hPcHRpb25QcmljZXMiLCJfY2FsbGVlNCIsInNob3dPcHRpb25zIiwiX3RoaXMxMCIsInNlbGVjdGVkT3B0aW9uVmFsdWVJZHMiLCJfeWllbGQkaGFuZGxlUHJvbWlzZXMiLCJwcmV2Iiwic2VsZWN0aW9ucyIsIl9jb250ZXh0NCIsIl9yZWYyMyIsIm9wdGlvbkVudGl0eUlkIiwidmFsdWVFbnRpdHlJZCIsIl9yZWYyNCIsImZldGNoT3B0aW9uUHJpY2UiLCJfYXJyYXlMaWtlVG9BcnJheSIsInNlbGVjdGlvbiIsInByaWNlc1dpdGhUYXgiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGgiLCJfcHJldiRwcmljZXNXaXRoVGF4IiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoMiIsIl9wcmV2JHByaWNlc1dpdGhUYXgyIiwibm9uU2FsZVByaWNlV2l0aFRheCIsImJhc2VQcmljZSIsImFkanVzdGVkUHJpY2VzV2l0aFRheCIsIm5vblNhbGVQcmljZVZhbHVlIiwicHJpY2VzV2l0aG91dFRheCIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aDMiLCJfcHJldiRwcmljZXNXaXRob3V0VGEiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGg0IiwiX3ByZXYkcHJpY2VzV2l0aG91dFRhMiIsIm5vblNhbGVQcmljZVdpdGhvdXRUYXgiLCJhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXgiLCJfeDYiLCJfeDciLCJfZmV0Y2hPcHRpb25QcmljZSIsIl9jYWxsZWU1Iiwib3B0aW9uVmFsdWVJZHMiLCJjYWNoZUtleSIsIl9jb250ZXh0NSIsIl94OCIsIl90aGlzMTEiLCJfcmVmMjUiLCJfcmVmMjUkIiwiJGxhYmVsIiwiYWZ0ZXIiLCJwcmVwZW5kIiwiX3JlZjI2IiwidmFsdWVUb29sdGlwIiwiJHZhbHVlIiwiX3JlZjI3IiwiX3JlZjI4IiwiX3JlZjI5IiwidmFsdWVUb29sdGlwSGVhZGluZyIsIiR0b29sdGlwSGVhZGluZyIsIl90aGlzMTIiLCJvcHRpb25JZHMiLCJfaW5kZXgiLCJfcmVmMzAiLCJfdG9vbHRpcHMkb3B0aW9uJGlkMyIsIl90b29sdGlwcyRvcHRpb24kaWQ0Iiwic2hvd0lubGluZU9wdGlvblRvb2x0aXBzIiwiX3RoaXMxMyIsInByZWZpeCIsIm1hc3RlclRvb2x0aXBzIiwicmVzb2x2ZWRUb29sdGlwcyIsIl9yZWYzMSIsInN0YXJ0c1dpdGgiLCJzcGVjTmFtZSIsIl9yZWYzMiIsInRvb2x0aXBUZXh0IiwiJGRkIiwiX3RoaXMxNCIsIl9yZWYzMyIsIl9yZWYzMyQiLCJfcmVmMzMkJHZhbHVlVG9vbHRpcHMiLCJfcmVmMzQiLCJfcmVmMzUiLCJfcmVmMzYiLCJzaG93bk9wdGlvbnMiLCJfcmVmMzciLCJkZWZhdWx0T3B0aW9ucyIsIl9yZWYzOCIsInByZWZpbGwiLCJzZWxlY3RlZF9kYXRlIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiX3JlZjM5Iiwic2VsZWN0ZWQiLCJjaGVja2JveE9wdGlvbnMiLCJfcmVmNDAiLCJub1ZhbHVlIiwiZmlsZU9wdGlvbnMiLCJfcmVmNDEiLCJwYXJ0aWFsIiwiZGF0ZU9wdGlvbnMiLCJfcmVmNDIiLCJkcm9wZG93bk9wdGlvbnMiLCJfcmVmNDMiLCJ0ZXh0T3B0aW9ucyIsIl9yZWY0NCIsIl9yZWY0NSIsIl92YWx1ZXMkZmluZCIsIl9yZWY0NiIsIl9yZWY0NyIsImNoZWNrZWQiLCJfcmVmNDgiLCJwYXJhbXMiLCJwcmVsb2FkZXIiLCJwcmljZUh0bWwiLCJwcmljZVRleHQiLCJzdWJ0b3RhbEh0bWwiLCIkcHJpY2UiLCIkb2xkIiwiJHBsYWNlaG9sZGVyIiwiX3Nob3dPcHRpb25QcmljZXMiLCJfY2FsbGVlNiIsImlnbm9yZVVwZGF0ZVN1YnRvdGFsIiwiX3RoaXMxNSIsIl95aWVsZCRQcm9taXNlJGFsbCIsIl95aWVsZCRQcm9taXNlJGFsbCQiLCJzaG93UHJpY2UiLCJfY29udGV4dDYiLCJfaWQiLCJfcmVmNDkiLCJ0eHRQcmljZUZyZWUiLCJfcmVmNTAiLCJfYWRqdXN0ZWRQcmljZXNXaXRoVGEiLCJfYWRqdXN0ZWRQcmljZXNXaXRoVGEyIiwiX2FkanVzdGVkUHJpY2VzV2l0aG91IiwiX2FkanVzdGVkUHJpY2VzV2l0aG91MiIsInRheCIsInBkcCIsInByaWNlV2l0aFRheFZhbHVlIiwicHJpY2VXaXRoVGF4Iiwibm9uU2FsZVByaWNlV2l0aFRheFZhbHVlIiwicHJpY2VXaXRob3V0VGF4VmFsdWUiLCJwcmljZVdpdGhvdXRUYXgiLCJub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWUiLCJfbm9uZVNhbGVzJG9wdGlvbklkIiwibm9uU2FsZSIsIl9hZGp1c3RlZFByaWNlc1dpdGhvdTMiLCJfYWRqdXN0ZWRQcmljZXNXaXRoVGEzIiwiZXhjaGFuZ2VkTm9uU2FsZSIsImV4Y2hhbmdlUmF0ZSIsInByaWNlVmFsdWUiLCJzaG93T3B0aW9uU3VidG90YWwiLCJfeDkiLCJfeDAiLCJfeDEiLCJfeDEwIiwiX3gxMSIsIl94MTIiLCJfcHJvZHVjdCRwcmljZXNXaXRoVGEiLCJfcHJvZHVjdCRwcmljZXNXaXRob3UiLCJ0eHRTdWJ0b3RhbCIsInR4dFJldmlld1NlbGVjdGlvbnMiLCJvcHRpb25zIiwiJHN1YnRvdGFsIiwiX29wdGlvbiR2YWx1ZXMiLCJfJG1vZGlmaWVyc01vZGFsT3B0aW8iLCJkYXlTdHIiLCJtb250aFN0ciIsInllYXJTdHIiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidmFsdWVTdHIiLCJfcmVmNTEiLCJvcHRpb25FbFByaWNlSHRtbCIsInN1bW1hcnlIdG1sIiwicGFyc2VEYXRlVGltZVN0cmluZyIsInN0ciIsInJlZ2V4Iiwic2hvcnRNb250aCIsInNob3J0RGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsInNob3J0SG91ciIsInNob3J0TWludXRlIiwic2luZ2xlVGltZUNvbXBvbmVudCIsInR6U2lnbiIsInR6SG91ck9mZnNldCIsInR6TWludXRlT2Zmc2V0IiwicGFyc2VJbnQiLCJzaWduIiwidHpIb3VyIiwidHpNaW51dGUiLCJ0aW1lem9uZSIsInBhcnNlQ291bnRkb3duRGF0ZSIsInBhcnNlZERhdGUiLCJub3ciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImgiLCJtaW4iLCJzZWMiLCJkYXRlIiwidXRjTWlsbGlzIiwiVVRDIiwic2V0RnVsbFllYXIiLCJzZXRNb250aCIsInNldERhdGUiLCJzZXRIb3VycyIsInNldE1pbnV0ZXMiLCJzZXRTZWNvbmRzIiwiZWxlbWVudHMiLCJTZXQiLCJ0aW1lciIsIm9ic2VydmVyIiwiZGF0ZURhdGFOYW1lIiwiaW5WaWV3cG9ydERhdGFOYW1lIiwidHJhbnNsYXRpb25zRGF0YU5hbWUiLCJzZWxlY3RvcnMiLCJlbmRMYWJlbCIsImRheVZhbHVlIiwiZGF5TGFiZWwiLCJob3VyVmFsdWUiLCJob3VyTGFiZWwiLCJtaW51dGVWYWx1ZSIsIm1pbnV0ZUxhYmVsIiwic2Vjb25kVmFsdWUiLCJzZWNvbmRMYWJlbCIsInRlbXBsYXRlIiwiaGlkZUNsYXNzIiwic2FsZUVuZENsYXNzIiwiYWN0aXZlQ2xhc3MiLCJ0cmFuc2xhdGlvbnMiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImpzb24iLCJ0cmFucyIsImtleXMiLCJfdHJhbnMiLCJzaG9ydEtleSIsInZhbGlkRGF0ZSIsIm9ic2VydmUiLCJzdGFydCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJ1bm9ic2VydmUiLCJpc1Zpc2libGVJblZpZXdwb3J0Iiwic2l6ZSIsInJ1biIsInN0b3AiLCJkaXNjb25uZWN0IiwiYm9keSIsImNvbnRhaW5zIiwiZGlmZiIsImZsb29yIiwiJGVuZExhYmVsIiwiJGRheSIsIiRkYXlWYWx1ZSIsIiRkYXlMYWJlbCIsIiRob3VyIiwiJGhvdXJWYWx1ZSIsIiRob3VyTGFiZWwiLCIkbWludXRlIiwiJG1pbnV0ZVZhbHVlIiwiJG1pbnV0ZUxhYmVsIiwiJHNlY29uZCIsIiRzZWNvbmRWYWx1ZSIsIiRzZWNvbmRMYWJlbCIsInRvZ2dsZUNsYXNzIiwiYXJpYUtleUNvZGVzIiwiUkVUVVJOIiwiU1BBQ0UiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJpbml0UmFkaW9PcHRpb25zIiwic2V0Q2hlY2tlZFJhZGlvSXRlbSIsIml0ZW1Db2xsZWN0aW9uIiwiaXRlbUlkeCIsImlkeCIsIml0ZW0iLCIkaXRlbSIsImNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbiIsImxhc3RJdGVtSWR4IiwiY3VycmVudElkeCIsImhhbmRsZUl0ZW1LZXlEb3duIiwia2V5Q29kZSIsImxhc3RDb2xsZWN0aW9uSXRlbUlkeCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZJdGVtSWR4IiwibmV4dEl0ZW1JZHgiLCIkY29udGFpbmVyIiwiaXRlbVNlbGVjdG9yIiwiJGl0ZW1Db2xsZWN0aW9uIiwib3B0aW9uc1R5cGVzTWFwIiwiSU5QVVRfRklMRSIsIklOUFVUX1RFWFQiLCJJTlBVVF9OVU1CRVIiLCJJTlBVVF9DSEVDS0JPWCIsIlRFWFRBUkVBIiwiREFURSIsIlNFVF9TRUxFQ1QiLCJTRVRfUkVDVEFOR0xFIiwiU0VUX1JBRElPIiwiU1dBVENIIiwiUFJPRFVDVF9MSVNUIiwib3B0aW9uQ2hhbmdlRGVjb3JhdG9yIiwiYXJlRGVmYXVsdE9wdGlvbnNTZXQiLCJhdHRyaWJ1dGVzRGF0YSIsImF0dHJpYnV0ZXNDb250ZW50IiwiY29udGVudCIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwiUHJvZHVjdERldGFpbHNCYXNlIiwiaW5pdFJhZGlvQXR0cmlidXRlcyIsImdldFRhYlJlcXVlc3RzIiwiX18iLCJfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSIsInZhcmlhbnREb21Ob2RlIiwidmFyaWFudFR5cGUiLCJyYWRpbyIsIiRyYWRpbyIsIm91dF9vZl9zdG9ja19iZWhhdmlvciIsImluU3RvY2tJZHMiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwib3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlIiwib3V0T2ZTdG9ja01lc3NhZ2UiLCJvdXRfb2Zfc3RvY2tfbWVzc2FnZSIsImF0dHJpYnV0ZSIsIiRhdHRyaWJ1dGUiLCJhdHRySWQiLCJlbmFibGVBdHRyaWJ1dGUiLCJkaXNhYmxlQXR0cmlidXRlIiwibG9jYXRpb24iLCJoYXNoIiwiJGFjdGl2ZVRhYiIsImhhcyIsIiR0YWJDb250ZW50IiwicnJwV2l0aFRheCIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCJwcmljZUxhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsIiRhZGRUb0NhcnRGb3JtIiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwic3RvY2siLCIkaW5wdXQiLCJza3UiLCJ1cGMiLCJxdWFudGl0eSIsIiRidWxrUHJpY2luZyIsIiR3YWxsZXRCdXR0b25zIiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJ2aWV3TW9kZWwiLCJtZXNzYWdlIiwic3RvY2tfbWVzc2FnZSIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInNob3dNZXNzYWdlQm94IiwidXBkYXRlUHJpY2VWaWV3Iiwid2VpZ2h0IiwidmFyaWFudElkIiwidXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXciLCJidWxrX2Rpc2NvdW50X3JhdGVzIiwiYWRkVG9DYXJ0V3JhcHBlciIsInVwZGF0ZWRQcmljZSIsInByaWNlX3JhbmdlIiwibWF4Iiwic2F2ZWQiLCIkbWVzc2FnZUJveCIsImlzVmFsaWRGb3JtIiwidG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkiLCJzaG91bGRTaG93IiwiZ2V0QXR0cmlidXRlVHlwZSIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkcGFyZW50IiwicGFyZW50IiwidG9nZ2xlT3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsIm1vZGFsRmFjdG9yeSIsIm5vZCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJmb3JtcyIsIm5vcm1hbGl6ZUZvcm1EYXRhIiwiY29udmVydEludG9BcnJheSIsImJhbm5lclV0aWxzIiwiY3VycmVuY3lTZWxlY3RvciIsIl9Qcm9kdWN0RGV0YWlsc0Jhc2UiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJsaXN0ZW5RdWFudGl0eUNoYW5nZSIsIiRzd2F0Y2hPcHRpb25NZXNzYWdlIiwic3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlIiwic3dhdGNoR3JvdXBJZExpc3QiLCJncm91cCIsInN0b3JlSW5pdE1lc3NhZ2VzRm9yU3dhdGNoZXMiLCJ1cGRhdGVEYXRlU2VsZWN0b3IiLCJ1cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEiLCJhZGRUb0NhcnRWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsImhhc0RlZmF1bHRPcHRpb25zIiwiJHByb2R1Y3RTd2F0Y2hHcm91cCIsIiRwcm9kdWN0U3dhdGNoTGFiZWxzIiwicGxhY2VTd2F0Y2hMYWJlbEltYWdlIiwiJG9wdGlvbkltYWdlIiwib3B0aW9uSW1hZ2VXaWR0aCIsIm91dGVyV2lkdGgiLCJleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCIsIl9sYWJlbCRnZXRCb3VuZGluZ0NsaSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpZ2h0IiwiZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIiLCJzY3JlZW4iLCJzaGlmdFZhbHVlIiwicmVnaXN0ZXJBZGRUb0NhcnRWYWxpZGF0aW9uIiwic2hvd1N3YXRjaE5hbWVzIiwic3dhdGNoR3JvdXBFbGVtZW50IiwicGFyZW50Tm9kZSIsInNob3dTd2F0Y2hOYW1lT25PcHRpb24iLCJlbGVtZW50IiwicHJvZHVjdE9wdGlvbnNDaGFuZ2VkIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJfaXNFbXB0eSIsIiRwcm9kdWN0SWQiLCJvcHRpb25DaGFuZ2VDYWxsYmFjayIsInByb2R1Y3RBdHRyaWJ1dGVzIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwiZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQiLCJ2YWxpZGF0ZSIsImNiIiwibnVtYmVyc09ubHkiLCJlcnJvck1lc3NhZ2UiLCJwcm9kdWN0UXVhbnRpdHlFcnJvck1lc3NhZ2UiLCJzd2F0Y2hHcm91cElkIiwidW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyIsIm9wdGlvbkxhYmVsIiwiY2hpbGRyZW4iLCJvcHRpb25UaXRsZSIsImlzU2F0aXNmaWVkIiwicXVlcnlTZWxlY3RvckFsbCIsImRhdGVTdHJpbmciLCJ4IiwiZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCIsInByb2R1Y3RWYXJpYW50c2xpc3QiLCJtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0IiwiaW5wdCIsImRhdGFzZXQiLCJwcm9kdWN0QXR0cmlidXRlVmFsdWUiLCJsYWJlbHMiLCJwcm9kdWN0VmFyaWFudCIsInZpZXciLCJwcm9kdWN0TmFtZSIsImNhcmQiLCJpc1J1bm5pbmdJbklmcmFtZSIsInNlbGYiLCJ0b3AiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCIkY29udGV4dCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkZXRhaWwiLCIkc3dhdGNoIiwiJHN3YXRjaEdyb3VwIiwic3dhdGNoTmFtZSIsImFjdGl2ZVN3YXRjaEdyb3VwSWQiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJyb2xlIiwiX2lzUGxhaW5PYmplY3QiLCJzZXRBbHRlcm5hdGVJbWFnZSIsInJlc3RvcmVJbWFnZSIsIiR0YXJnZXQiLCJxdWFudGl0eU1pbiIsInF1YW50aXR5TWF4IiwidmFsaWRhdGVJbmNyZWFzZUFnYWluc3RNYXhCb3VuZGFyeSIsInZhbGlkYXRlRGVjcmVhc2VBZ2FpbnN0TWluQm91bmRhcnkiLCJ3aGljaCIsIiRhZGRUb0NhcnRCdG4iLCJpdGVtQWRkIiwiY2FydF9pZCIsIm9wZW4iLCJBcHBsZVBheVNlc3Npb24iLCIkbW9kYWwiLCJjYXJ0X2l0ZW0iLCJyZWRpcmVjdFRvIiwiY2FydF91cmwiLCJ1cmxzIiwiZ2V0Q2FydENvbnRlbnQiLCJjYXJ0SXRlbUlkIiwib25Db21wbGV0ZSIsInN1Z2dlc3QiLCJjb25maWciLCJzdWdnZXN0aW9ucyIsImdldENvbnRlbnQiLCJpZnJhbWVTZGsiLCJtb2RhbCIsInVwZGF0ZUNvbnRlbnQiLCIkY2FydFF1YW50aXR5IiwiJGNvbnRlbnQiLCIkY2FydENvdW50ZXIiLCIkcHJvbW90aW9uQmFubmVyIiwiJGJhY2tUb1Nob3BwcGluZ0J0biIsIiRtb2RhbENsb3NlQnRuIiwiYmFubmVyVXBkYXRlSGFuZGxlciIsIiRwcm9kdWN0Q29udGFpbmVyIiwicmVsb2FkIiwiZm9ybURhdGFJdGVtcyIsInNlcmlhbGl6ZUFycmF5IiwicHJvZHVjdERldGFpbHMiLCJmb3JtRGF0YUl0ZW0iLCJwcm9kdWN0T3B0aW9uIiwib3B0aW9uVmFsdWUiLCJvcHRpb25TZWxlY3Rpb25zIiwic2NvcGUiLCJ1cGRhdGVEYXlzIiwiZGF0ZU9wdGlvbiIsIm1vbnRoU2VsZWN0b3IiLCJkYXlTZWxlY3RvciIsInllYXJTZWxlY3RvciIsImRheXNJbk1vbnRoIiwiaXNOYU4iLCJPcHRpb24iLCJmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtIiwicmVzIiwiX3N0ZXAkdmFsdWUiLCJmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0iLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX3N0ZXAyJHZhbHVlIiwiZXZ0IiwiYW1vdW50IiwiZG9jdW1lbnRNb2RlIiwiY29sbGVjdGlvbiIsIiRtYWluSW1hZ2VOZXN0ZWQiLCIkc2VsZWN0YWJsZUltYWdlcyIsInNldEltYWdlWm9vbSIsImltZ09iaiIsInNhdmVkSW1hZ2UiLCIkc2VsZWN0ZWRUaHVtYiIsInNlbGVjdE5ld0ltYWdlIiwibWFpbkltYWdlQWx0IiwiYWx0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=