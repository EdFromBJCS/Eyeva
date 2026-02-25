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
    _this.bindStickyAddToCartEvents();
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
      var _this12 = this;
      var _yield$Promise$all, settings, _yield$Promise$all$, prev, selections, showPrice;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (ignoreUpdateSubtotal === void 0) {
              ignoreUpdateSubtotal = false;
            }
            _context6.n = 1;
            return Promise.all([this.fetchSettings(), this.fetchOptionPrices(showOptionIds.map(function (_id) {
              return _this12.productOptions.find(function (_ref42) {
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
                if (_this12.showPriceFree) {
                  return _this12.context.txtPriceFree;
                } else if (_this12.showPriceZero) {
                  return _this12.formatPrice(value, true);
                }
                return '';
              }
              return _this12.formatPrice(value, true);
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
                nonSalePriceWithTax: adjustedPricesWithTax != null && adjustedPricesWithTax.nonSalePriceValue ? _this12.formatPrice(adjustedPricesWithTax == null ? void 0 : adjustedPricesWithTax.nonSalePriceValue, true) : ''
              } : {}, settings.tax.pdp !== 'INC' ? {
                priceWithoutTaxValue: adjustedPricesWithoutTax == null || (_adjustedPricesWithou = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou.value,
                priceWithoutTax: showPrice(adjustedPricesWithoutTax == null || (_adjustedPricesWithou2 = adjustedPricesWithoutTax.price) == null ? void 0 : _adjustedPricesWithou2.value),
                nonSalePriceWithoutTaxValue: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue : '',
                nonSalePriceWithoutTax: adjustedPricesWithoutTax != null && adjustedPricesWithoutTax.nonSalePriceValue ? _this12.formatPrice(adjustedPricesWithoutTax == null ? void 0 : adjustedPricesWithoutTax.nonSalePriceValue, true) : ''
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
                      nonSalePriceWithTax: _this12.formatPrice(exchangedNonSale, true)
                    } : {}, settings.tax.pdp !== 'INC' ? {
                      nonSalePriceWithoutTaxValue: exchangedNonSale,
                      nonSalePriceWithoutTax: _this12.formatPrice(exchangedNonSale, true)
                    } : {});
                  }
                }
                var priceHtml = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this12.optionPriceTemplate, params, null, ['<%', '%>']);
                var priceText = mustache__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this12.optionPricePlainTemplate, params, null, ['<%', '%>']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2V5ZXZhX3Byb2R1Y3QtZGV0YWlsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0EsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEs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QUFJLENBQUN0RCxVQUFVLENBQUNzRSxRQUFRLENBQUM7TUFDckNDLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFBO1FBQUEsT0FBUTFHLEtBQUksQ0FBQ2lHLFVBQVUsQ0FBQyxDQUFDO01BQUE7TUFDL0JVLFdBQVcsRUFBRSxFQUFFO01BQ2ZDLGFBQWEsRUFBRTtJQUNuQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUE5RyxNQUFBLENBRURDLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNzbUMsaUJBQWlCLENBQUNsbUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUN1bUMsY0FBYyxDQUFDMXBDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN0RSxDQUFDO0VBQUEsT0FBQXVQLFlBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvaW1hZ2UtZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2V5ZXZhL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL3NhbGUtY291bnRkb3duLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9yYWRpb09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy1iYXNlLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvYmFubmVyLXV0aWxzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9pZS1oZWxwZXJzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Vhc3l6b29tJztcbmltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5pbXBvcnQgeyBjcmVhdGVGb2N1c1RyYXAgfSBmcm9tICdmb2N1cy10cmFwJztcbmltcG9ydCB7IHRvb2xzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IGZyb20gJy4uLy4uL3RoZW1lL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeSc7XG5cbmNvbnN0IERFRkFVTFRfU1RFUCA9IDM2MDtcbmNsYXNzIEltYWdlR2FsbGVyeU1vZGFsIHtcbiAgICBtb2RhbFRlbXBsYXRlID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW92ZXJsYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWNsb3NlXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQ2xvc2VcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2U+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCI+Q2xvc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Zz48dXNlIGhyZWY9XCIjaWNvbi14bWFyay1sYXJnZVwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLWVhc3l6b29tXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbWFpbi1pbWctY29udGFpbmVyXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLW1haW4taW1nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbWFpbkltYWdlTGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLW1haW4tMzYwXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MCBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtMzYwLWltZy1jb250YWluZXJcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLWltZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLTM2MC1jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1wcmV2aW91c1wiIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtcHJldmlvdXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWFycm93LWxlZnQtbG9uZ1wiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1wbGF5XCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wbGF5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1wbGF5XCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5QbGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJfYnRuIF9idG4tcGF1c2VcIiBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBhdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1wYXVzZVwiPjwvdXNlPjwvc3ZnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+UGF1c2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIl9idG4gX2J0bi1uZXh0XCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1uZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1hcnJvdy1yaWdodC1sb25nXCI+PC91c2U+PC9zdmc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1tYWluLXZpZGVvXCIgZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllciBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYXp5bG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM5MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYmtpdEFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGl0bGVcIj57e25hbWV9fTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I3ZpZGVvcy5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdmlkZW9zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3t2aWRlb3NMYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjdmlkZW9zfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L3ZpZGVvc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ey92aWRlb3MubGVuZ3RofX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzMzYwLmxlbmd0aH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC0zNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtbGFiZWxcIj57e2ltYWdlczM2MExhYmVsfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpbWFnZXMzNjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smbGlua0VsZW1lbnR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pbWFnZXMzNjB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzMzYwLmxlbmd0aH19XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7I2ltYWdlcy5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtaW1hZ2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsLWxhYmVsXCI+e3tpbWFnZXNMYWJlbH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaW1hZ2VzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJleWV2YV9faW1hZ2VHYWxsZXJ5TW9kYWwtdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxpbmtFbGVtZW50fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaW1hZ2VzfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2ltYWdlcy5sZW5ndGh9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ltYWdlR2FsbGVyeT99IGltYWdlR2FsbGVyeVxuICAgICAqIEBwYXJhbSB7alF1ZXJ5P30gJGdhbGxlcnlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihpbWFnZUdhbGxlcnkgPSBudWxsLCAkZ2FsbGVyeSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkgPSBpbWFnZUdhbGxlcnk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnkgPSAkZ2FsbGVyeTtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcblxuICAgICAgICBpZiAoaW1hZ2VHYWxsZXJ5ICYmICRnYWxsZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy4kZ2FsbGVyeSkge1xuICAgICAgICAgICAgLy8gb3BlbiBtb2RhbCB3aGVuIGNsaWNrIG9uIHZpZGVvLCAzNjAgdmlldywgb3IgbW9yZSBpbWFnZSB0aHVtYm5haWxzXG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5XG4gICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tbW9yZV0nKVxuICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJylcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljaycpXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVNyY3NldCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9ICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5SXRlbVZpZGVvSWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcCA9ICRhLmNsb3Nlc3QoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdJykubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBOdW1iZXIoaW1hZ2VVcmwuc3BsaXQoJyMnKVsxXSkgfHwgREVGQVVMVF9TVEVQXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHZpZGVvSWQsIHN0ZXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBjbGljayBjbG9zZSBidXR0b25cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2VdJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNsb3NlIG1vZGFsIHdoZW4gcHJlc3MgRXNjYXBlIGtleVxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwub24oJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2xvc2UgbW9kYWwgd2hlbiBjbGljayBvdXRzaWRlIChvdmVybGF5KVxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZ2FsbGVyeU1vZGFsLmlzKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpbWFnZSB0aHVtYm5haWxzXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW1dJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VVcmwnKSxcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVNyY3NldCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdmlkZW8gdGh1bWJuYWlsc1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvLWlkXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvSWQgPSAkYS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8odmlkZW9JZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIDM2MCBpbWFnZSB0aHVtYm5haWxzXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWl0ZW0tcm90YXRvcl0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB0b3RhbFN0ZXAgPSAkYS5kYXRhKCdleWV2YUltYWdlR2FsbGVyeU1vZGFsSXRlbVJvdGF0b3InKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbjM2MChcbiAgICAgICAgICAgICAgICAkYS5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICRhLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgJGEuZGF0YSgnaW1hZ2VHYWxsZXJ5Wm9vbUltYWdlVXJsJyksXG4gICAgICAgICAgICAgICAgdG90YWxTdGVwLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXByZXZpb3VzXScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXMzNjBTdGVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1uZXh0XScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMubmV4dDM2MFN0ZXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwLXBsYXldJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5MzYwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MC1wYXVzZV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnBhdXNlMzYwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3lNb2RhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGdhbGxlcnlNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsID0gJCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlTW9kYWwoKSB7XG4gICAgICAgIGNvbnN0ICRtYWluSW1hZ2VMaW5rID0gdGhpcy5pbWFnZUdhbGxlcnkuJG1haW5JbWFnZS5maW5kKCdhJykuY2xvbmUoKTtcbiAgICAgICAgJG1haW5JbWFnZUxpbmsuZmluZCgnaW1nJykucmVtb3ZlQXR0cignZGF0YS16b29tLWltYWdlJykuYXR0cignZGF0YS1leWV2YS1nYWxsZXJ5LW1vZGFsLW1haW4taW1hZ2UnLCAnJyk7XG5cbiAgICAgICAgY29uc3QgbWFpbkltYWdlTGlua0VsZW1lbnQgPSAkbWFpbkltYWdlTGluay5nZXQoMCk/Lm91dGVySFRNTDtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuJGdhbGxlcnkuY2xvc2VzdCgnLnByb2R1Y3RWaWV3JykuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC10aXRsZV0nKS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IHZpZGVvc0xhYmVsID0gdGhpcy4kZ2FsbGVyeS5kYXRhKCd2aWRlb3NMYWJlbCcpIHx8ICdWaWRlb3MnO1xuICAgICAgICBjb25zdCBpbWFnZXMzNjBMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgnaW1hZ2VzMzYwTGFiZWwnKSB8fCAnMzYwIFZpZXcnO1xuICAgICAgICBjb25zdCBpbWFnZXNMYWJlbCA9IHRoaXMuJGdhbGxlcnkuZGF0YSgnaW1hZ2VzTGFiZWwnKSB8fCAnUHJvZHVjdCBJbWFnZXMnO1xuXG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHRoaXMuJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtLXZpZGVvXScpLmdldCgpLm1hcChsaSA9PiAoe1xuICAgICAgICAgICAgbGlua0VsZW1lbnQ6ICQobGkpLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5jbG9uZSgpLmdldCgwKT8ub3V0ZXJIVE1MLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwID0gdGhpcy4kZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tMzYwXScpLmdldCgpLm1hcChsaSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGxpKS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJykuY2xvbmUoKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJyk7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUDtcbiAgICAgICAgICAgICRlbC5yZW1vdmVBdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktaXRlbScpLmF0dHIoJ2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3InLCBzdGVwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogJGVsLmdldCgwKT8ub3V0ZXJIVE1MLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhpcy4kZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJykuZ2V0KClcbiAgICAgICAgICAgIC5maWx0ZXIoYSA9PiAkKGEpLmNsb3Nlc3QoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlb10sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS0zNjBdLCBbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tbW9yZV0nKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRhID0gJChhKS5jbG9uZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktaXRlbScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbScsICcnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmtFbGVtZW50OiAkYS5nZXQoMCk/Lm91dGVySFRNTCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsID0gJChtdXN0YWNoZS5yZW5kZXIodGhpcy5tb2RhbFRlbXBsYXRlLCB7XG4gICAgICAgICAgICBtYWluSW1hZ2VMaW5rRWxlbWVudCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB2aWRlb3NMYWJlbCxcbiAgICAgICAgICAgIGltYWdlczM2MExhYmVsLFxuICAgICAgICAgICAgaW1hZ2VzTGFiZWwsXG4gICAgICAgICAgICB2aWRlb3MsXG4gICAgICAgICAgICBpbWFnZXMzNjAsXG4gICAgICAgICAgICBpbWFnZXMsXG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuaGlkZSgpLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuXG4gICAgICAgIHRoaXMuaW5pdEltYWdlWm9vbSgpO1xuXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKHRoaXMuJGdhbGxlcnlNb2RhbC5nZXQoMCksIHtcbiAgICAgICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcbiAgICAgICAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuTW9kYWwoaW1hZ2VVcmwsIGltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHZpZGVvSWQsIHRvdGFsU3RlcCkge1xuICAgICAgICB0aGlzLiRsYXN0QWN0aXZlRWxlbWVudCA9ICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoJ19nYWxsZXJ5TW9kYWwtb3BlbmVkJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VHYWxsZXJ5KSB7XG4gICAgICAgICAgICBjb25zdCAkbWFpbkltZyA9IHRoaXMuaW1hZ2VHYWxsZXJ5LiRtYWluSW1hZ2UuZmluZCgnaW1nJyk7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZShcbiAgICAgICAgICAgICAgICAkbWFpbkltZy5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAkbWFpbkltZy5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS4kbWFpbkltYWdlLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWRlb0lkKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5WaWRlbyh2aWRlb0lkKTtcbiAgICAgICAgfSBlbHNlIGlmICh0b3RhbFN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbjM2MChpbWFnZVVybCwgaW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCwgdG90YWxTdGVwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5hZGRDbGFzcygnX29wZW5pbmcnKS5zaG93KCkucmVtb3ZlQ2xhc3MoJ19vcGVuaW5nJyk7XG4gICAgICAgIHRoaXMuZm9jdXNUcmFwLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1jbG9zZV0nKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5hZGRDbGFzcygnX2Nsb3NpbmcnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVNYWluVmlkZW8oKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZTM2MFVJKCk7XG4gICAgICAgICAgICB0aGlzLiRib2R5LnJlbW92ZUNsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xuICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLnJlbW92ZUNsYXNzKCdfY2xvc2luZycpLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRsYXN0QWN0aXZlRWxlbWVudCkgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBzZXRNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCkge1xuICAgICAgICB0aGlzLmhpZGVNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcbiAgICAgICAgdGhpcy5zaG93TWFpbkltYWdlKCk7XG5cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYihtYWluSW1hZ2VVcmwpO1xuICAgICAgICB0aGlzLnN3YXBNYWluSW1hZ2UobWFpbkltYWdlVXJsLCBtYWluSW1hZ2VTcmNzZXQsIHpvb21JbWFnZVVybCk7XG4gICAgfVxuXG4gICAgc2hvd01haW5JbWFnZSgpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJykuc2hvdygpO1xuICAgIH1cblxuICAgIGhpZGVNYWluSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLWVhc3l6b29tXScpLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYihtYWluSW1hZ2VVcmwsIHZpZGVvSWQpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXVybF0sIFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZF0nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBhKSA9PlxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybCAmJiAkKGEpLmRhdGEoJ2ltYWdlR2FsbGVyeU5ld0ltYWdlVXJsJykgPT09IG1haW5JbWFnZVVybFxuICAgICAgICAgICAgICAgIHx8IHZpZGVvSWQgJiYgJChhKS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpID09PSB2aWRlb0lkKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBzd2FwTWFpbkltYWdlKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwpIHtcbiAgICAgICAgY29uc3QgJGltYWdlQ29udGFpbmVyID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtZWFzeXpvb21dJyk7XG4gICAgICAgIGNvbnN0ICRhID0gJGltYWdlQ29udGFpbmVyLmZpbmQoJ2EnKTtcbiAgICAgICAgY29uc3QgJG1haW5JbWFnZSA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1nYWxsZXJ5LW1vZGFsLW1haW4taW1hZ2VdJyk7XG5cbiAgICAgICAgJGltYWdlQ29udGFpbmVyLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScsIHpvb21JbWFnZVVybCk7XG4gICAgICAgICRhLmF0dHIoJ2hyZWYnLCB6b29tSW1hZ2VVcmwpO1xuICAgICAgICAkbWFpbkltYWdlLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybCkuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KTtcblxuICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuc3dhcChcbiAgICAgICAgICAgIG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgIHpvb21JbWFnZVVybCxcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpc0Jyb3dzZXJJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ1RyaWRlbnQnKTtcbiAgICAgICAgaWYgKGlzQnJvd3NlcklFKSB7XG4gICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlc0lFID0ge1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgke21haW5JbWFnZVVybH0pYCxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbic6ICdjb250ZW50LWJveCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb250YWluJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1tYWluLWltYWdlXScpLmNzcyhmYWxsYmFja1N0eWxlc0lFKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0ICRpbWFnZUNvbnRhaW5lciA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLW1haW4taW1nLWNvbnRhaW5lcl0nKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gJGltYWdlQ29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICRpbWFnZUNvbnRhaW5lci53aWR0aCgpO1xuXG4gICAgICAgIGNvbnN0ICRpbWFnZSA9IHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS4kem9vbTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gJGltYWdlLmhlaWdodCgpO1xuICAgICAgICBjb25zdCB3aWR0aCA9ICRpbWFnZS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChoZWlnaHQgPCBjb250YWluZXJIZWlnaHQgfHwgd2lkdGggPCBjb250YWluZXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRJbWFnZVpvb20oKSB7XG4gICAgICAgIHRoaXMuZWFzeXpvb20gPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1lYXN5em9vbV0nKS5lYXN5Wm9vbSh7XG4gICAgICAgICAgICBvblNob3c6ICgpID0+IHRoaXMuY2hlY2tJbWFnZSgpLFxuICAgICAgICAgICAgZXJyb3JOb3RpY2U6ICcnLFxuICAgICAgICAgICAgbG9hZGluZ05vdGljZTogJycsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllcl0nKS5zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZU1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtdmlkZW8tcGxheWVyXScpLmhpZGUoKVxuICAgICAgICAgICAgLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ3NyYycsICcnKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8odmlkZW9JZCkge1xuICAgICAgICB0aGlzLmhpZGVNYWluSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5oaWRlMzYwVUkoKTtcbiAgICAgICAgdGhpcy5zaG93TWFpblZpZGVvKCk7XG5cbiAgICAgICAgY29uc3Qgc3JjID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/cmVmPTAmYXV0b3BsYXk9MWA7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLXZpZGVvLXBsYXllcl0nKS5zaG93KCkuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgc3JjKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYihudWxsLCB2aWRlb0lkKTtcbiAgICB9XG5cbiAgICBzZXRNYWluMzYwKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCkge1xuICAgICAgICB0aGlzLmhpZGVNYWluSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5oaWRlTWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2hvdzM2MFVJKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIobWFpbkltYWdlVXJsKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbjM2MChtYWluSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCwgem9vbUltYWdlVXJsLCB0b3RhbFN0ZXApO1xuICAgIH1cblxuICAgIHN3YXBNYWluMzYwKG1haW5JbWFnZVVybCwgbWFpbkltYWdlU3Jjc2V0LCB6b29tSW1hZ2VVcmwsIHRvdGFsU3RlcCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjAtaW1nLWNvbnRhaW5lcl0gaW1nJylcbiAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBtYWluSW1hZ2VVcmwpXG4gICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgbWFpbkltYWdlU3Jjc2V0KVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScsIHpvb21JbWFnZVVybCk7XG4gICAgICAgIHRoaXMuc2V0MzYwQ3VycmVudFN0ZXAoMCwgdG90YWxTdGVwKTtcbiAgICB9XG5cbiAgICBzaG93MzYwVUkoKSB7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZTM2MFVJKCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJykuaGlkZSgpO1xuICAgICAgICB0aGlzLnBhdXNlMzYwKCk7XG4gICAgfVxuXG4gICAgc2V0MzYwQ3VycmVudFN0ZXAoY3VycmVudFN0ZXAsIHRvdGFsU3RlcCA9IERFRkFVTFRfU1RFUCkge1xuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC0zNjBdJylcbiAgICAgICAgICAgIC5jc3MoJy0taW1hZ2UtMzYwLWN1cnJlbnQnLCBjdXJyZW50U3RlcClcbiAgICAgICAgICAgIC5jc3MoJy0taW1hZ2UtMzYwLXN0ZXBzJywgdG90YWxTdGVwKTtcbiAgICB9XG5cbiAgICBuZXh0MzYwU3RlcCgpIHtcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpO1xuICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLWN1cnJlbnQnKSkgfHwgMDtcbiAgICAgICAgY29uc3QgdG90YWwgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtc3RlcHMnKSkgfHwgREVGQVVMVF9TVEVQO1xuXG4gICAgICAgIGlmIChzdGVwIDwgdG90YWwgLSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKHN0ZXAgKyAxLCB0b3RhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldDM2MEN1cnJlbnRTdGVwKDAsIHRvdGFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXZpb3VzMzYwU3RlcCgpIHtcbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpO1xuICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKCRlbC5jc3MoJy0taW1hZ2UtMzYwLWN1cnJlbnQnKSkgfHwgMDtcbiAgICAgICAgY29uc3QgdG90YWwgPSBOdW1iZXIoJGVsLmNzcygnLS1pbWFnZS0zNjAtc3RlcHMnKSkgfHwgREVGQVVMVF9TVEVQO1xuXG4gICAgICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcChzdGVwIC0gMSwgdG90YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXQzNjBDdXJyZW50U3RlcCh0b3RhbCAtIDEsIHRvdGFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkzNjAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbDM2MCk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwzNjAgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHQzNjBTdGVwKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1pbWFnZS1nYWxsZXJ5LW1vZGFsLTM2MF0nKS5hZGRDbGFzcygnX3BsYXlpbmcnKTtcbiAgICB9XG5cbiAgICBwYXVzZTM2MCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsMzYwKTtcbiAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtMzYwXScpLnJlbW92ZUNsYXNzKCdfcGxheWluZycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmRJbWFnZUdhbGxlcnlNb2RhbCBleHRlbmRzIEltYWdlR2FsbGVyeU1vZGFsIHtcbiAgICBsb2FkaW5nTW9kYWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1vdmVybGF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX2ltYWdlR2FsbGVyeU1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IGV5ZXZhX19pbWFnZUdhbGxlcnlNb2RhbC1sb2FkaW5nXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAkc2NvcGUsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb2R1Y3RJZCxcbiAgICAgICAgICAgIGdyYXBoUUxUb2tlbixcbiAgICAgICAgICAgIHpvb21TaXplLFxuICAgICAgICAgICAgcHJvZHVjdFNpemUsXG4gICAgICAgICAgICB0aHVtYlNpemUsXG4gICAgICAgICAgICB0eHRWaWRlb3NMYWJlbCxcbiAgICAgICAgICAgIHR4dEltYWdlczM2MExhYmVsLFxuICAgICAgICAgICAgdHh0SW1hZ2VzTGFiZWwsXG4gICAgICAgIH0gPSB7fSxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xuICAgICAgICB0aGlzLmdyYXBoUUxUb2tlbiA9IGdyYXBoUUxUb2tlbjtcbiAgICAgICAgdGhpcy56b29tU2l6ZSA9IHpvb21TaXplO1xuICAgICAgICB0aGlzLnByb2R1Y3RTaXplID0gcHJvZHVjdFNpemU7XG4gICAgICAgIHRoaXMudGh1bWJTaXplID0gdGh1bWJTaXplO1xuICAgICAgICB0aGlzLnR4dFZpZGVvc0xhYmVsID0gdHh0VmlkZW9zTGFiZWw7XG4gICAgICAgIHRoaXMudHh0SW1hZ2VzMzYwTGFiZWwgPSB0eHRJbWFnZXMzNjBMYWJlbDtcbiAgICAgICAgdGhpcy50eHRJbWFnZXNMYWJlbCA9IHR4dEltYWdlc0xhYmVsO1xuICAgIH1cblxuICAgIGFzeW5jIG9wZW5Mb2FkaW5nTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveU1vZGFsKCk7XG5cbiAgICAgICAgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRib2R5LmFkZENsYXNzKCdfZ2FsbGVyeU1vZGFsLW9wZW5lZCcpO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgbG9hZGluZyBtb2RhbFxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwgPSAkKG11c3RhY2hlLnJlbmRlcih0aGlzLmxvYWRpbmdNb2RhbFRlbXBsYXRlKSk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5oaWRlKCkuYXBwZW5kVG8odGhpcy4kYm9keSk7XG4gICAgICAgIHRoaXMuJGdhbGxlcnlNb2RhbC5hZGRDbGFzcygnX29wZW5pbmcnKS5zaG93KCkucmVtb3ZlQ2xhc3MoJ19vcGVuaW5nJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZE1vZGFsKCkge1xuICAgICAgICAvLyBmZXRjaCBwcm9kdWN0IGRhdGFcbiAgICAgICAgYXdhaXQgdGhpcy5mZXRjaFByb2R1Y3QoKTtcblxuICAgICAgICBjb25zdCBtYWluSW1hZ2UgPSB0aGlzLmltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmlzRGVmYXVsdCkgfHwgdGhpcy5pbWFnZXNbMF07XG4gICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChtYWluSW1hZ2UudXJsVGVtcGxhdGUpO1xuXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZUxpbmtFbGVtZW50ID0gYFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiJHttYWluSW1hZ2Uuem9vbVVybH1cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsPVwiJHttYWluSW1hZ2UudXJsfVwiXG4gICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQ9XCIke21haW5JbWFnZVNyY3NldH1cIlxuICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybD1cIiR7bWFpbkltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgID48aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBzcmM9XCIke21haW5JbWFnZS50aHVtYm5haWxVcmx9XCIgZGF0YS1zcmNzZXQ9XCIke21haW5JbWFnZVNyY3NldH1cIiBkYXRhLXNpemVzPVwiYXV0b1wiIGFsdD1cIiR7bWFpbkltYWdlLmFsdFRleHR9XCIgLz48L2E+YDtcblxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy4kc2NvcGUuZmluZCgnLmNhcmQtdGl0bGUnKS50ZXh0KCk7XG4gICAgICAgIGNvbnN0IHZpZGVvc0xhYmVsID0gdGhpcy50eHRWaWRlb3NMYWJlbCB8fCAnVmlkZW9zJztcbiAgICAgICAgY29uc3QgaW1hZ2VzMzYwTGFiZWwgPSB0aGlzLnR4dEltYWdlczM2MExhYmVsIHx8ICczNjAgVmlldyc7XG4gICAgICAgIGNvbnN0IGltYWdlc0xhYmVsID0gdGhpcy50eHRJbWFnZXNMYWJlbCB8fCAnUHJvZHVjdCBJbWFnZXMnO1xuXG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHRoaXMudmlkZW9zLm1hcCh2aWRlbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHZpZGVvLnVybCk7XG4gICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3YnKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFZpZXctdGh1bWJuYWlsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7dmlkZW8udXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktaXRlbS12aWRlby1pZD1cIiR7dmlkZW9JZH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvJHt2aWRlb0lkfS9kZWZhdWx0LmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgaHJlZj1cIiNpY29uLXBsYXktc29saWRcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPmAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbWFnZXMzNjAgPSB0aGlzLmltYWdlczM2MC5tYXAoKGltYWdlVXJsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKGltYWdlVXJsLnNwbGl0KCcjJylbMV0pIHx8IERFRkFVTFRfU1RFUDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua0VsZW1lbnQ6IGBcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFZpZXctdGh1bWJuYWlsLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7aW1hZ2VVcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3I9XCIke3N0ZXB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsPVwiJHtpbWFnZVVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQ9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke2ltYWdlVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZVVybH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIGhyZWY9XCIjaWNvbi0zNjBcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPmAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoaW1hZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmNzZXQgPSB0b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoaW1hZ2UudXJsVGVtcGxhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rRWxlbWVudDogYFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kdWN0Vmlldy10aHVtYm5haWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiJHtpbWFnZS56b29tVXJsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmw9XCIke2ltYWdlLnVybH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQ9XCIke2ltYWdlU3Jjc2V0fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmw9XCIke2ltYWdlLnpvb21Vcmx9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkXCIgc3JjPVwiJHtpbWFnZS50aHVtYm5haWxVcmx9XCIgZGF0YS1zcmNzZXQ9XCIke2ltYWdlU3Jjc2V0fVwiIGRhdGEtc2l6ZXM9XCJhdXRvXCIgYWx0PVwiJHtpbWFnZS5hbHRUZXh0fVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgJGdhbGxlcnlNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kYWxUZW1wbGF0ZSwge1xuICAgICAgICAgICAgbWFpbkltYWdlTGlua0VsZW1lbnQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmlkZW9zTGFiZWwsXG4gICAgICAgICAgICBpbWFnZXMzNjBMYWJlbCxcbiAgICAgICAgICAgIGltYWdlc0xhYmVsLFxuICAgICAgICAgICAgdmlkZW9zLFxuICAgICAgICAgICAgaW1hZ2VzMzYwLFxuICAgICAgICAgICAgaW1hZ2VzLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgLy8gcmVwbGFjZSBsb2FkaW5nIG1vZGFsIHdpdGggdGhlIGFjdHVhbCBtb2RhbFxuICAgICAgICB0aGlzLiRnYWxsZXJ5TW9kYWwuaHRtbCgkZ2FsbGVyeU1vZGFsLmh0bWwoKSk7XG5cbiAgICAgICAgdGhpcy5pbml0SW1hZ2Vab29tKCk7XG5cbiAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAodGhpcy4kZ2FsbGVyeU1vZGFsLmdldCgwKSwge1xuICAgICAgICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IGZhbHNlLFxuICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIG9wZW5Nb2RhbCh7XG4gICAgICAgIGZpcnN0VmlkZW8gPSBmYWxzZSxcbiAgICAgICAgZmlyc3QzNjAgPSBmYWxzZSxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5vcGVuTG9hZGluZ01vZGFsKCk7XG5cbiAgICAgICAgdGhpcy5sb2FkTW9kYWwoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChmaXJzdFZpZGVvKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9IHRoaXMuJGdhbGxlcnlNb2RhbC5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW0tdmlkZW8taWRdJykuZmlyc3QoKS5kYXRhKCdpbWFnZUdhbGxlcnlJdGVtVmlkZW9JZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKHZpZGVvSWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmlyc3QzNjApIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRnYWxsZXJ5TW9kYWwuZmluZCgnW2RhdGEtZXlldmEtaW1hZ2UtZ2FsbGVyeS1tb2RhbC1pdGVtLXJvdGF0b3JdJykuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1haW4zNjAoXG4gICAgICAgICAgICAgICAgICAgICRlbC5kYXRhKCdpbWFnZUdhbGxlcnlOZXdJbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmV3SW1hZ2VTcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsLmRhdGEoJ2ltYWdlR2FsbGVyeVpvb21JbWFnZVVybCcpLFxuICAgICAgICAgICAgICAgICAgICAkZWwuZGF0YSgnZXlldmFJbWFnZUdhbGxlcnlNb2RhbEl0ZW1Sb3RhdG9yJyksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuYWN0aXZhdGUoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZ2FsbGVyeU1vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLWltYWdlLWdhbGxlcnktbW9kYWwtY2xvc2VdJykudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoUHJvZHVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzIHx8IHRoaXMudmlkZW9zIHx8IHRoaXMuaW1hZ2VzMzYwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgW3pvb21XaWR0aCwgem9vbUhlaWdodF0gPSB0aGlzLnpvb21TaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XG4gICAgICAgIGNvbnN0IFtpbWFnZVdpZHRoLCBpbWFnZUhlaWdodF0gPSB0aGlzLnByb2R1Y3RTaXplLnNwbGl0KCd4JykubWFwKE51bWJlcik7XG4gICAgICAgIGNvbnN0IFt0aHVtYldpZHRoLCB0aHVtYkhlaWdodF0gPSB0aGlzLnRodW1iU2l6ZS5zcGxpdCgneCcpLm1hcChOdW1iZXIpO1xuXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkoXG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdElkOiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJHpvb21XaWR0aDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR6b29tSGVpZ2h0OiBJbnQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW1hZ2VIZWlnaHQ6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGh1bWJXaWR0aDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aHVtYkhlaWdodDogSW50IVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QoZW50aXR5SWQ6ICRwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsKHdpZHRoOiAkaW1hZ2VXaWR0aCwgaGVpZ2h0OiAkaW1hZ2VIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbFVybDogdXJsKHdpZHRoOiAkdGh1bWJXaWR0aCwgaGVpZ2h0OiAkdGh1bWJIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb21Vcmw6IHVybCh3aWR0aDogJHpvb21XaWR0aCwgaGVpZ2h0OiAkem9vbUhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsVGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzKG5hbWVzOiBbXCJfX0AzNjBcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHRoaXMucHJvZHVjdElkLFxuICAgICAgICAgICAgICAgICAgICB6b29tV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHpvb21IZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0aHVtYldpZHRoLFxuICAgICAgICAgICAgICAgICAgICB0aHVtYkhlaWdodCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5ncmFwaFFMVG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBbaW1hZ2VzLCB2aWRlb3MsIGltYWdlczM2MF0gPSBbXG4gICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0LmltYWdlcy5lZGdlcy5tYXAoKHsgbm9kZSB9KSA9PiBub2RlKSxcbiAgICAgICAgICAgIHJlc3AuZGF0YS5zaXRlLnByb2R1Y3QudmlkZW9zLmVkZ2VzLm1hcCgoeyBub2RlIH0pID0+IG5vZGUpLFxuICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdC5jdXN0b21GaWVsZHMuZWRnZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IG5vZGUgfSkgPT4gbm9kZS5uYW1lID09PSAnX19AMzYwJylcbiAgICAgICAgICAgICAgICAubWFwKCh7IG5vZGUgfSkgPT4gbm9kZS52YWx1ZSksXG4gICAgICAgIF07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7YWx0VGV4dDogc3RyaW5nLCBpc0RlZmF1bHQ6IGJvb2xlYW4sIHVybD86IHN0cmluZywgdGh1bWJuYWlsVXJsPzogc3RyaW5nLCB6b29tVXJsPzogc3RyaW5nLCB1cmxUZW1wbGF0ZT86IHN0cmluZ30+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7dGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmd9Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmlkZW9zID0gdmlkZW9zO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmltYWdlczM2MCA9IGltYWdlczM2MDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSBleHRlbmRzIENvcm5lcnN0b25lSW1hZ2VHYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZ2FsbGVyeSkge1xuICAgICAgICBzdXBlcigkZ2FsbGVyeSk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5TW9kYWwgPSBuZXcgSW1hZ2VHYWxsZXJ5TW9kYWwodGhpcywgJGdhbGxlcnkpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnlNb2RhbC5iaW5kRXZlbnRzKCk7XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cclxuLy8gaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuaW1wb3J0IENvcm5lcnN0b25lUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vLi4vdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XHJcbmltcG9ydCB7IGFsZXJ0TW9kYWwsIHNob3dBbGVydE1vZGFsLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4uLy4uL3RoZW1lL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCB7IGZpeEZvcm1FbGVtZW50VW5pcXVlSWRzLCBjdXJyZW5jeUZvcm1hdCB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IFNhbGVDb3VudGRvd24gZnJvbSAnLi4vc2FsZS1jb3VudGRvd24nO1xyXG5cclxuY29uc3QgREVCVUdfTE9HID0gZmFsc2U7XHJcblxyXG5jb25zdCBub3JtYWxpemVPcHRpb25TdHJpbmcgPSBzID0+IHMucmVwbGFjZSgvOi9nLCAnJykucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5mdW5jdGlvbiBlcXVhbE9wdGlvblN0cmluZyhhLCBiKSB7XHJcbiAgICByZXR1cm4gbm9ybWFsaXplT3B0aW9uU3RyaW5nKGEpID09PSBub3JtYWxpemVPcHRpb25TdHJpbmcoYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbCByZWdhcmRsZXNzIG9mIG9yZGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycjFcclxuICogQHBhcmFtIHtBcnJheX0gYXJyMlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGFyZUFycmF5c0VxdWFsVW5vcmRlcmVkKGFycjEsIGFycjIpIHtcclxuICAgIGNvbnN0IF9hcnIxID0gYXJyMS5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgIGNvbnN0IF9hcnIyID0gYXJyMi5zbGljZSgpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgIHJldHVybiBfYXJyMS5sZW5ndGggPT09IF9hcnIyLmxlbmd0aCAmJiBfYXJyMS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gX2FycjJbaW5kZXhdKTtcclxufVxyXG5cclxubGV0IGNhY2hlZFNldHRpbmdzO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBtdWx0aXBsZSBwcm9taXNlcyB3aXRoIGEgY29uY3VycmVuY3kgbGltaXQgKGUuZy4sIHByb2Nlc3Npbmcgb25seSAxMCBwcm9taXNlcyBhdCBhIHRpbWUgb3V0IG9mIDEwKVxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5PEZ1bmN0aW9uPFQ+fSBwcm9taXNlcyBmdW5jdGlvbnMgdGhhdCByZXR1cm4gYSBwcm9taXNlXHJcbiAqIEBwYXJhbSB7Kn0gbGltaXQgbnVtYmVyIG9mIHByb21pc2VzIHRvIHByb2Nlc3MgYXQgYSB0aW1lXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PFQ+Pn0gcmVzdWx0cyBvZiBhbGwgcHJvbWlzZXNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVByb21pc2VzV2l0aExpbWl0KHByb21pc2VzLCBsaW1pdCA9IDEwKSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICBjb25zdCBleGVjdXRpbmcgPSBbXTsgLy8gVHJhY2sgdGhlIHByb21pc2VzIGN1cnJlbnRseSBleGVjdXRpbmdcclxuXHJcbiAgICBmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcclxuICAgICAgICAvLyBTdGFydCB0aGUgcHJvbWlzZSBhbmQgYWRkIGl0IHRvIHRoZSBleGVjdXRpbmcgbGlzdFxyXG4gICAgICAgIGNvbnN0IHAgPSBwcm9taXNlKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpbmlzaGVkIHByb21pc2UgZnJvbSBleGVjdXRpbmcgbGlzdFxyXG4gICAgICAgICAgICBleGVjdXRpbmcuc3BsaWNlKGV4ZWN1dGluZy5pbmRleE9mKHApLCAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2gocCk7XHJcbiAgICAgICAgZXhlY3V0aW5nLnB1c2gocCk7XHJcblxyXG4gICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBsaW1pdCwgd2FpdCBmb3IgdGhlIGZpcnN0IHRvIGZpbmlzaFxyXG4gICAgICAgIGlmIChleGVjdXRpbmcubGVuZ3RoID49IGxpbWl0KSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXHJcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmFjZShleGVjdXRpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBXYWl0IGZvciBhbGwgcmVtYWluaW5nIHByb21pc2VzIHRvIGNvbXBsZXRlXHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyB7XHJcbiAgICBtb2RpZmllcnNNb2RhbE92ZXJsYXlUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLW92ZXJsYXlcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vdmVybGF5PjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBtb2RpZmllcnNNb2RhbFRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWxcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNsb3NlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkNsb3NlXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY2xvc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXJpYS1kZXNjcmlwdGlvbi0taGlkZGVuXCI+Q2xvc2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Zz48dXNlIGhyZWY9XCIjaWNvbi14bWFyay1sYXJnZVwiPjwvdXNlPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1iYWNrLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkJhY2tcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1iYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkJhY2s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Zz48dXNlIGhyZWY9XCIjaWNvbi1hcnJvdy1sZWZ0LWxvbmdcIj48L3VzZT48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1oZWFkZXItdGl0bGVcIj48JSZwcm9kdWN0VGl0bGUlPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtY29udGVudFwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLXRpdGxlXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbiBjdXJyZW50IHN0ZXAncyB0aXRsZSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtb3B0aW9uc1wiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgbW9kaWZpZXJzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctbW9kaWZpZXJzTW9kYWwtc3VtbWFyeVwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXN1bW1hcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgc3VtbWFyeSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWNvbXBsZXRlXCIgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY29tcGxldGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gY29udGFpbnMgYWRkIHRvIGNhcnQgYnV0dG9uICYgcXR5IGJveCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1mb290ZXJcIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1jb250aW51ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250aW51ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwldHh0Q29udGludWUlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW1vZGlmaWVyc01vZGFsLWZvb3Rlci1zdWJ0b3RhbFwiIGRhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBjb250YWlucyBzdWJ0b3RhbCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1tb2RpZmllcnNNb2RhbC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPCUjbWFpbkltYWdlVXJsJT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIjwlbWFpbkltYWdlVXJsJT5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNyY3NldD1cIjwlbWFpbkltYWdlU3Jjc2V0JT5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXpvb20taW1hZ2U9XCI8JXpvb21JbWFnZVVybCU+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaXplcz1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxhenlsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtaW1nIC8+XHJcbiAgICAgICAgICAgICAgICA8JS9tYWluSW1hZ2VVcmwlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgb3B0aW9uVG9vbHRpcFRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXRvb2x0aXBcIj48JXRvb2x0aXAlPjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXZhbHVlLXRvb2x0aXBcIj48JXRvb2x0aXAlPjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25WYWx1ZVRvb2x0aXBIZWFkaW5nVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy12YWx1ZS10b29sdGlwLWhlYWRpbmdcIj48JWhlYWRpbmclPjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25QcmljZVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDwlI3ByZWxvYWRlciU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfcHJlbG9hZGVyXCI+Li4uPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByZWxvYWRlciU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZSBfd2l0aFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utb2xkIF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tcHJpY2Utbm93IF93aXRoVGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRoVGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgPCUjcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXByaWNlIF93aXRob3V0VGF4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUjbm9uU2FsZVByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1vbGQgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVub25TYWxlUHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlbm9uU2FsZVByaWNlV2l0aG91dFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlL25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1wcmljZS1ub3cgX3dpdGhvdXRUYXggcHJpY2VcIiBkYXRhLXZhbHVlPVwiPCVwcmljZVdpdGhvdXRUYXhWYWx1ZSU+XCI+PCVwcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBvcHRpb25QcmljZVBsYWluVGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPCUjcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgKDwlcHJpY2VXaXRoVGF4JT4pXHJcbiAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgICAgICA8JV5wcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgKDwlcHJpY2VXaXRob3V0VGF4JT4pXHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgPCUvcHJpY2VXaXRoVGF4JT5cclxuICAgIGA7XHJcblxyXG4gICAgc3VidG90YWxUZW1wbGF0ZSA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbC1ncm91cC1sYWJlbFwiPjwldHh0U3VidG90YWwlPjwvZGl2PlxyXG4gICAgICAgICAgICA8JSNwcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3ByZWxvYWRlclwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8JS9wcmVsb2FkZXIlPlxyXG4gICAgICAgICAgICA8JSNwcmljZVdpdGhUYXglPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwgX3dpdGhUYXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8JSNub25TYWxlUHJpY2VXaXRoVGF4JT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW9sZCBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JW5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZSU+XCI+PCVub25TYWxlUHJpY2VXaXRoVGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPCUvbm9uU2FsZVByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctb3B0aW9uLXN1YnRvdGFsLW5vdyBfd2l0aFRheCBwcmljZVwiIGRhdGEtdmFsdWU9XCI8JXByaWNlV2l0aFRheFZhbHVlJT5cIj48JXByaWNlV2l0aFRheCU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwlL3ByaWNlV2l0aFRheCU+XHJcbiAgICAgICAgICAgIDwlI3ByaWNlV2l0aG91dFRheCU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LW9wdGlvbi1zdWJ0b3RhbCBfd2l0aG91dFRheFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwlI25vblNhbGVQcmljZVdpdGhvdXRUYXglPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtb2xkIF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlJT5cIj48JW5vblNhbGVQcmljZVdpdGhvdXRUYXglPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8JS9ub25TYWxlUHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImV5ZXZhX19wcm9kdWN0Vmlldy1vcHRpb24tc3VidG90YWwtbm93IF93aXRob3V0VGF4IHByaWNlXCIgZGF0YS12YWx1ZT1cIjwlcHJpY2VXaXRob3V0VGF4VmFsdWUlPlwiPjwlcHJpY2VXaXRob3V0VGF4JT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCUvcHJpY2VXaXRob3V0VGF4JT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgc3VtbWFyeVRlbXBsYXRlID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPCUjb3B0aW9ucyU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi1uYW1lXCI+PCVuYW1lJT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWV2YV9fcHJvZHVjdFZpZXctc3VtbWFyeU9wdGlvbnMtb3B0aW9uLXZhbHVlXCI+PCV2YWx1ZSU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXlldmFfX3Byb2R1Y3RWaWV3LXN1bW1hcnlPcHRpb25zLW9wdGlvbi1wcmljZXNcIj48JSZwcmljZUh0bWwlPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8JS9vcHRpb25zJT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgc2hvd1ByaWNlRnJlZSA9IGZhbHNlO1xyXG4gICAgc2hvd1ByaWNlWmVybyA9IGZhbHNlO1xyXG5cclxuICAgIGFkZFRvQ2FydFdyYXBwZXJTZWxlY3RvciA9ICcuYWRkLXRvLWNhcnQtd3JhcHBlcic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWNoZSBmb3IgZnVuY3Rpb24gYGZldGNoT3B0aW9uUHJpY2VgXHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgeyBwcmljZXNXaXRoVGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9LCBwcmljZXNXaXRob3V0VGF4OiB7IGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LCBzYWxlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSB9IH0+fVxyXG4gICAgICovXHJcbiAgICBmZXRjaE9wdGlvblByaWNlQ2FjaGUgPSB7fTtcclxuXHJcbiAgICBjb25zb2xlID0ge1xyXG4gICAgICAgIGxvZzogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgaWYgKERFQlVHX0xPRykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgLi4uYXJncykge1xyXG4gICAgICAgIGZpeEZvcm1FbGVtZW50VW5pcXVlSWRzKCRzY29wZSk7XHJcblxyXG4gICAgICAgIHN1cGVyKCRzY29wZSwgLi4uYXJncyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkY2hvb3NlT3B0aW9uc0J0biA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLW9wZW5dJyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBOdW1iZXIoJGZvcm0uZmluZCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJykudmFsKCkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VzdG9tRmllbGRzID0gKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VzdG9tRmllbGRzVGV4dCA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtY3VzdG9tLWZpZWxkc10nKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGlmIChjdXN0b21GaWVsZHNUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGN1c3RvbUZpZWxkc1RleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgSlNPTiBmb3IgY3VzdG9tIGZpZWxkcycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KSgpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzLmN1c3RvbUZpZWxkczonLCB0aGlzLmN1c3RvbUZpZWxkcyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTx7XHJcbiAgICAgICAgICogICBpZDogbnVtYmVyLFxyXG4gICAgICAgICAqICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICogICBzdGF0ZTogJ21vZGlmaWVyJyB8ICd2YXJpYW50X29wdGlvbicsXHJcbiAgICAgICAgICogICBwYXJ0aWFsOiAnc3dhdGNoJyB8ICdzZXQtcmVjdGFuZ2xlJyB8ICdzZXQtc2VsZWN0JyB8ICdzZXQtcmFkaW8nXHJcbiAgICAgICAgICogICAgIHwgJ2lucHV0LXRleHQnIHwgJ2lucHV0LW51bWJlcnMnIHwgJ2lucHV0LWNoZWNrYm94JyB8ICdpbnB1dC1maWxlJ1xyXG4gICAgICAgICAqICAgICB8ICdkYXRlJyB8ICd0ZXh0YXJlYScgfCAncHJvZHVjdC1saXN0JyxcclxuICAgICAgICAgKiAgIHJlcXVpcmVkOiBib29sZWFuLFxyXG4gICAgICAgICAqICAgcHJlZmlsbD86IHN0cmluZyxcclxuICAgICAgICAgKiAgIHNlbGVjdGVkX2RhdGU/OiB7XHJcbiAgICAgICAgICogICAgIGRheTogc3RyaW5nLFxyXG4gICAgICAgICAqICAgICBtb250aDogc3RyaW5nLFxyXG4gICAgICAgICAqICAgICB5ZWFyOiBzdHJpbmdcclxuICAgICAgICAgKiAgIH0sXHJcbiAgICAgICAgICogICBjaGVja2VkPzogYm9vbGVhbixcclxuICAgICAgICAgKiAgIG5vVmFsdWU/OiBudW1iZXIsXHJcbiAgICAgICAgICogICB2YWx1ZT86IG51bWJlcixcclxuICAgICAgICAgKiAgIHZhbHVlcz86IEFycmF5PHtcclxuICAgICAgICAgKiAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICAgKiAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAgICAgKiAgICAgc2VsZWN0ZWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgICogICAgIGRhdGE6IHN0cmluZyB8IEFycmF5PHN0cmluZz5cclxuICAgICAgICAgKiAgIH0+XHJcbiAgICAgICAgICogfT59XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAtIGlkOiBPcHRpb24gSURcclxuICAgICAgICAgKiAtIGRpc3BsYXlfbmFtZTogRGlzcGxheSBuYW1lIG9mIHRoZSBvcHRpb25cclxuICAgICAgICAgKiAtIHN0YXRlOiBUeXBlIG9mIG9wdGlvbiBzdGF0ZSwgZWl0aGVyICdtb2RpZmllcicgb3IgJ3ZhcmlhbnRfb3B0aW9uJ1xyXG4gICAgICAgICAqIC0gcmVxdWlyZWQ6IEluZGljYXRlcyBpZiB0aGlzIG9wdGlvbiBpcyByZXF1aXJlZFxyXG4gICAgICAgICAqIC0gcHJlZmlsbDogT3B0aW9uYWwgcHJlZmlsbCB2YWx1ZSwgYXZhaWxhYmxlIGZvciB0ZXh0IGJhc2VkIGZpZWxkcyBvbmx5XHJcbiAgICAgICAgICogLSBzZWxlY3RlZF9kYXRlOiBPcHRpb25hbCBzZWxlY3RlZCBkYXRlIG9iamVjdCwgYXZhaWxhYmxlIGZvciBkYXRlIGZpZWxkIG9ubHk6XHJcbiAgICAgICAgICogICAtIGRheTogRGF5IHBhcnQgb2YgdGhlIGRhdGVcclxuICAgICAgICAgKiAgIC0gbW9udGg6IE1vbnRoIHBhcnQgb2YgdGhlIGRhdGVcclxuICAgICAgICAgKiAgIC0geWVhcjogWWVhciBwYXJ0IG9mIHRoZSBkYXRlXHJcbiAgICAgICAgICogLSBjaGVja2VkOiBPcHRpb25hbCBjaGVja2VkIHN0YXR1cyBmb3IgdGhlIG9wdGlvbiwgYXZhaWxhYmxlIGZvciBjaGVja2JveCBmaWVsZCBvbmx5XHJcbiAgICAgICAgICogLSBub1ZhbHVlOiBPcHRpb25hbCB2YWx1ZSBmb3IgXCJubyBzZWxlY3Rpb25cIiAoaWYgYXBwbGljYWJsZSksIGF2YWlsYWJsZSBmb3IgY2hlY2tib3ggZmllbGQgb25seVxyXG4gICAgICAgICAqIC0gdmFsdWU6IE9wdGlvbmFsIG51bWVyaWMgdmFsdWUgYXNzaWduZWQgdG8gdGhlIG9wdGlvbiwgYXZhaWxhYmxlIGZvciBjaGVja2JveCBmaWVsZCBvbmx5XHJcbiAgICAgICAgICogLSB2YWx1ZXM6IE9wdGlvbmFsIGFycmF5IG9mIHBvc3NpYmxlIHZhbHVlcywgYXZhaWxhYmxlIGZvciByYWRpbywgc2VsZWN0LCBzd2F0Y2gsIHByb2R1Y3QgcGljay1saXN0IGZpZWxkcyBvbmx5OlxyXG4gICAgICAgICAqICAgLSBpZDogVW5pcXVlIGlkZW50aWZpZXIgZm9yIGVhY2ggdmFsdWVcclxuICAgICAgICAgKiAgIC0gbGFiZWw6IERpc3BsYXkgbGFiZWwgZm9yIHRoZSB2YWx1ZVxyXG4gICAgICAgICAqICAgLSBzZWxlY3RlZDogSW5kaWNhdGVzIGlmIHRoaXMgdmFsdWUgaXMgc2VsZWN0ZWRcclxuICAgICAgICAgKiAgIC0gZGF0YTogQWRkaXRpb25hbCBkYXRhIGZvciB0aGUgdmFsdWUsIGNhbiBiZSBhIHN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucyA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RPcHRpb25zVGV4dCA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uc10nKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0T3B0aW9uc1RleHQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocHJvZHVjdE9wdGlvbnNUZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdJbnZhbGlkIEpTT04gZm9yIHByb2R1Y3Qgb3B0aW9ucycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KSgpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzLnByb2R1Y3RPcHRpb25zOicsIHRoaXMucHJvZHVjdE9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFbmFibGUgb3IgZGlzYWJsZSBtb2RpZmllcnMgbW9kYWwgZmVhdHVyZVxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIGVuYWJsZSBtb2RpZmllcnMgbW9kYWwgaWYgb3VyIGNob29zZSBvcHRpb25zIGJ1dHRvbiBhcHBlYXJzIGluIHRoZSBwcm9kdWN0IGRldGFpbHNcclxuICAgICAgICB0aGlzLmVuYWJsZU1vZGlmaWVyc01vZGFsID0gJGNob29zZU9wdGlvbnNCdG4ubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb2RpZmllcnNNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iaW5kUHJvZHVjdEVkaXRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRTdGlja3lBZGRUb0NhcnRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmJpbmRNb2RhbERlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmluaXRPcHRpb25TdGVwcGVyKCk7XHJcbiAgICAgICAgdGhpcy5zeW5jUHJvZHVjdENhcmRRdHkoKTtcclxuICAgICAgICB0aGlzLmluaXRTYWxlQ291bnRkb3duKCk7XHJcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3VwZGF0ZS13aXNobGlzdC1idXR0b25zJywgW3RoaXMuJHNjb3BlXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0ICR1cGRhdGVQcm9kdWN0V3JhcHBlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtdXBkYXRlLXByb2R1Y3Qtd3JhcHBlcl0nKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3TW9kZWwoLi4uYXJncykge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gc3VwZXIuZ2V0Vmlld01vZGVsKC4uLmFyZ3MpO1xyXG4gICAgICAgIG1vZGVsLiR1cGRhdGVQcm9kdWN0V3JhcHBlciA9IHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyO1xyXG4gICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSk7XHJcbiAgICAgICAgY29uc3QgJGJ0biA9IHRoaXMuJHVwZGF0ZVByb2R1Y3RXcmFwcGVyLmZpbmQoJ2lucHV0LCBidXR0b24nKTtcclxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xyXG4gICAgICAgICAgICAkYnRuLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGJ0bi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkZSB0aGUgbWV0aG9kIHRvIHN1cHBvcnQgZWRpdCBwcm9kdWN0IGluIGNhcnRcclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxyXG4gICAgICovXHJcbiAgICBhZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmVkaXRQcm9kdWN0SW5DYXJ0KSB7XHJcbiAgICAgICAgICAgICQoZm9ybSkuZmluZCgnaW5wdXRbbmFtZT1cImFjdGlvblwiXScpLnZhbCgnRWRpdFByb2R1Y3RGaWVsZHNJbkNhcnQnKTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0UHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChmb3JtKS5maW5kKCdpbnB1dFtuYW1lPVwiYWN0aW9uXCJdJykudmFsKCdhZGQnKTtcclxuICAgICAgICAgICAgc3VwZXIuYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRWRpdCBwcm9kdWN0IGluIGNhcnQuXHJcbiAgICAgKiBBbG1vc3QgY2xvbmUgZnJvbSBhZGRQcm9kdWN0VG9DYXJ0IG1ldGhvZCBmcm9tIHRoZSBwYXJlbnQgY2xhc3MuXHJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBlZGl0UHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xyXG4gICAgICAgIGNvbnN0ICRzYXZlQnRuID0gJCgnW2RhdGEtdXBkYXRlLXByb2R1Y3Qtd3JhcHBlcl0nLCAkKGV2ZW50LnRhcmdldCkpLmZpbmQoJ2lucHV0LCBidXR0b24nKTtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRzYXZlQnRuLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJHNhdmVCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcclxuXHJcbiAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcclxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICRzYXZlQnRuXHJcbiAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXHJcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkc2F2ZUJ0bi5uZXh0KCksICdzdGF0dXMnLCAncG9saXRlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJHNhdmVCdG5cclxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXHJcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb250ZXh0LmVkaXRQcm9kdWN0Q2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdENhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGZhaWx1cmUgPSAoZXJyb3JUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvclRleHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1F1aWNrVmlld0NoaWxkKCRzYXZlQnRuKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnRNb2RhbCgpLiRwcmVNb2RhbEZvY3VzZWRFbCA9ICRzYXZlQnRuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZWRpdFByb2R1Y3RRdWFudGl0eSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBmb3JtRGF0YS5nZXQoJ2l0ZW1faWQnKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3UXR5ID0gZm9ybURhdGEuZ2V0KCdxdHlbXScpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ2FydEl0ZW1RdWFudGl0eShpdGVtSWQsIG5ld1F0eSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbHVyZShlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICB9KS5kb25lKChyZXNwb25zZSkgPT4gc3VjY2VzcyhyZXNwb25zZSkpLmZhaWwoKF94aHIsIF9zdGF0dXMsIGVycm9yKSA9PiBmYWlsdXJlKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FydEl0ZW1RdWFudGl0eShpdGVtSWQsIG5ld1F0eSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlPy5kYXRhPy5zdGF0dXMgIT09ICdzdWNjZWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gY2xpY2sgb24gdGhlIEFkZCBOZXcgdG8gQ2FydCBidXR0b24sIHRyaWdnZXIgdGhlIGZvcm0gc3VibWl0IGV2ZW50IHdpdGggYGFkZE5ld1RvQ2FydGAgZmxhZ1xyXG4gICAgICogc28gdGhhdCBuZXcgcHJvZHVjdCBpcyBhbHdheXMgYWRkZWQgdG8gY2FydCByZWdhcmRsZXNzIG9mIGVkaXQgcHJvZHVjdCBpbiBjYXJ0IG9yIG5vdFxyXG4gICAgICovXHJcbiAgICBiaW5kUHJvZHVjdEVkaXRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0RXZlbnQgPSAkLkV2ZW50KCdzdWJtaXQnLCB7IGVkaXRQcm9kdWN0SW5DYXJ0OiB0cnVlIH0pO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuXHJcbiAgICAgICAgdGhpcy4kdXBkYXRlUHJvZHVjdFdyYXBwZXIuZmluZCgnaW5wdXQsIGJ1dHRvbicpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJGZvcm0udHJpZ2dlcihzdWJtaXRFdmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFN0aWNreUFkZFRvQ2FydEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnI3N0aWNreS1hZGQtdG8tY2FydCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoJGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcpIHx8ICRidXR0b24uYXR0cignYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBpZiAoISRmb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkZm9ybS50cmlnZ2VyKCdzdWJtaXQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kTW9kYWxEZXN0cm95KCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgdGhlIGltYWdlIGdhbGxlcnkgbW9kYWwgd2hlbiBxdWljay12aWV3IG1vZGFsIGlzIGNsb3NlZFxyXG4gICAgICAgIC8vIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcclxuICAgICAgICB0aGlzLiRzY29wZS5jbG9zZXN0KCcubW9kYWwnKS5vbmUoTW9kYWxFdmVudHMuY2xvc2VkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LmltYWdlR2FsbGVyeU1vZGFsLmRlc3Ryb3lNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRPcHRpb25TdGVwcGVyKCkge1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLXN0ZXBwZXJdJykuZWFjaCgoX2ksIGZvcm1GaWVsZEVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtRmllbGQgPSAkKGZvcm1GaWVsZEVsKTtcclxuICAgICAgICAgICAgY29uc3QgJGRlYyA9ICRmb3JtRmllbGQuZmluZCgnW2RhdGEtYWN0aW9uPVwiZGVjXCJdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRpbmMgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImluY1wiXScpO1xyXG4gICAgICAgICAgICBjb25zdCAkY2hlY2sgPSAkZm9ybUZpZWxkLmZpbmQoJ1tkYXRhLWFjdGlvbj1cImNoZWNrXCJdJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLmFkZENsYXNzKCdfY2hlY2tpbmcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkcmFkaW9zID0gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbzp2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICRyYWRpb3MuZmlsdGVyKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpcnN0ID0gJHJhZGlvcy5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkY2hlY2tlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9ICRyYWRpb3MuaW5kZXgoJGNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBpID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgaSA9PT0gJHJhZGlvcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2suYWRkQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRmaXJzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRpbmMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1yYWRpbycpLnJlbW92ZUNsYXNzKCdfY2hlY2tpbmcnKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGluaXQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IChpbmMpID0+IHtcclxuICAgICAgICAgICAgICAgICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW8nKS5hZGRDbGFzcygnX2NoZWNraW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHJhZGlvcyA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86dmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaXJzdCA9ICRyYWRpb3MuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvdW5kIGNoZWNrZWQgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpID0gJHJhZGlvcy5pbmRleCgkY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3QgdGhlIG5leHQgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCAkcmFkaW9zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpb3MuZXEoaSArIDEpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgaSArIDEgPT09ICRyYWRpb3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGVjdCB0aGUgcHJldmlvdXMgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5lcShpIC0gMSkucHJvcCgnY2hlY2tlZCcsIHRydWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5jLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZGVjLnByb3AoJ2Rpc2FibGVkJywgaSAtIDEgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAkY2hlY2suYWRkQ2xhc3MoJ19jaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRmaXJzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gY2hlY2tlZCByYWRpbywgYW5kIGZvdW5kIHRoZSBmaXJzdCByYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmMgJiYgJGZpcnN0LmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiArIGFuZCBmaXJzdCBvcHRpb24gaXMgJ25vbmUnLCBpZ25vcmUgdGhlIG5vbmUgb3B0aW9uLCBzZWxlY3QgdGhlIGZpcnN0IHZhbHVlZCBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvcy5ub3QoJGZpcnN0KS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGRlYy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsICRyYWRpb3MubGVuZ3RoID09PSAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlLCBzZWxlY3QgdGhlIGZpcnN0IHJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRmaXJzdC5wcm9wKCdjaGVja2VkJywgdHJ1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGluYy5wcm9wKCdkaXNhYmxlZCcsICRyYWRpb3MubGVuZ3RoID09PSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLmFkZENsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBjaGVja2VkIHJhZGlvIGlzICdub25lJyB0aGVuIHVuY2hlY2sgdGhlIGNoZWNrIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgaWYgKCRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86Y2hlY2tlZCcpLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRjaGVjay5yZW1vdmVDbGFzcygnX2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykucmVtb3ZlQ2xhc3MoJ19jaGVja2luZycpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJGRlYy5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0KGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkaW5jLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGNoZWNrLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJGNoZWNrLmhhc0NsYXNzKCdfY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5jaGVjayB0aGUgY2hlY2tlZCByYWRpbyBhbmQgc2VsZWN0IHRoZSAnbm9uZScgcmFkaW9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdW5jaGVjayA9ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tcmFkaW86Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJG5vbmUgPSAkZm9ybUZpZWxkLmZpbmQoJy5mb3JtLXJhZGlvJykuZmlsdGVyKCdbdmFsdWU9XCJcIl0sIFt2YWx1ZT1cIjBcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRub25lLmxlbmd0aCA+IDApICRub25lLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCR1bmNoZWNrLmxlbmd0aCkgJHVuY2hlY2sudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrLnJlbW92ZUNsYXNzKCdfY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3luYyBwcm9kdWN0IHF1YW50aXR5IHdpdGggcXR5IG9mIHRoZSBjb3JyZXNwb25kaW5nIHByb2R1Y3QgY2FyZFxyXG4gICAgICovXHJcbiAgICBzeW5jUHJvZHVjdENhcmRRdHkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lZGl0UHJvZHVjdFF1YW50aXR5KSByZXR1cm47IC8vIHN0b3AgaWYgZWRpdCBwcm9kdWN0IGluIGNhcnRcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZFF0eSA9ICQoYFtkYXRhLWNhcmQtcXVhbnRpdHktY2hhbmdlXSBpbnB1dFtuYW1lPVwicXR5XyR7dGhpcy5wcm9kdWN0SWR9XCJdYCkudmFsKCk7XHJcbiAgICAgICAgaWYgKCFjYXJkUXR5KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0ICRxdHkgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGlucHV0W25hbWU9XCJxdHlbXVwiXScpO1xyXG4gICAgICAgIGNvbnN0IHF0eSA9ICRxdHkudmFsKCk7XHJcbiAgICAgICAgaWYgKCRxdHkubGVuZ3RoID4gMCAmJiBxdHkgIT09IGNhcmRRdHkpIHtcclxuICAgICAgICAgICAgJHF0eS52YWwoY2FyZFF0eSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRTYWxlQ291bnRkb3duKCkge1xyXG4gICAgICAgIGNvbnN0IHsgdHh0U2FsZUNvdW50ZG93bkpTT04gfSA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXRlXScpO1xyXG4gICAgICAgICRlbC5kYXRhKCdzYWxlQ291bnRkb3duVHJhbnNsYXRpb25zJywgeyBlbmRfaW46ICRlbC5kYXRhKCdzYWxlQ291bnRkb3duTGFiZWwnKSB9KTtcclxuXHJcbiAgICAgICAgU2FsZUNvdW50ZG93bi5jb25maWd1cmUoeyB0eHRTYWxlQ291bnRkb3duSlNPTiB9KTtcclxuICAgICAgICBTYWxlQ291bnRkb3duLmFkZCgkZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZpZXcoZGF0YSwgLi4uYXJncykge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZVZpZXcoZGF0YSwgLi4uYXJncyk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU2FsZVBlcmNlbnQoZGF0YSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGlwcGluZ0NvdW50ZG93bihkYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgIWRhdGE/LnB1cmNoYXNhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWxdJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1mb290ZXItc3VidG90YWxdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub25lU2FsZXMgPSB0aGlzLmN1c3RvbUZpZWxkTm9uZVNhbGVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXJzU3VidG90YWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2FsZVBlcmNlbnQoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0ICRkaXYgPSB0aGlzLiRzY29wZS5maW5kKCcucHJpY2Utc2VjdGlvbi0tc2FsZVBlcmNlbnQnKTtcclxuICAgICAgICBjb25zdCAkc3BhbiA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2FsZS1wZXJjZW50XScpO1xyXG4gICAgICAgIGxldCBzYWxlUGVyY2VudCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChkYXRhPy5wcmljZT8ud2l0aG91dF90YXg/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5wcmljZT8ucnJwX3dpdGhvdXRfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aG91dF90YXgudmFsdWUgLyBkYXRhLnByaWNlLnJycF93aXRob3V0X3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheD8udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhPy5wcmljZT8ud2l0aF90YXg/LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5wcmljZT8ucnJwX3dpdGhfdGF4Py52YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNhbGVQZXJjZW50ID0gTWF0aC5yb3VuZCgoMSAtIGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUgLyBkYXRhLnByaWNlLnJycF93aXRoX3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGE/LnByaWNlPy5ub25fc2FsZV9wcmljZV93aXRoX3RheD8udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzYWxlUGVyY2VudCA9IE1hdGgucm91bmQoKDEgLSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlIC8gZGF0YS5wcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZSkgKiAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2FsZVBlcmNlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICRzcGFuLnRleHQoYC0ke3NhbGVQZXJjZW50fSVgKTtcclxuICAgICAgICAgICAgJGRpdi5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNwYW4udGV4dCgnJyk7XHJcbiAgICAgICAgICAgICRkaXYuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTaGlwcGluZ0NvdW50ZG93bihkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJHNoaXBwaW5nQ291bnRkb3duID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtcGFwYXRoZW1lcy1zaGlwcGluZy1jb3VudGRvd25dJyk7XHJcblxyXG4gICAgICAgIGlmICgkc2hpcHBpbmdDb3VudGRvd24uaXMoJzpoaWRkZW4nKSAmJiBkYXRhPy5wdXJjaGFzYWJsZSkge1xyXG4gICAgICAgICAgICAkc2hpcHBpbmdDb3VudGRvd24uY3NzKCdzdHlsZScsICdmbGV4Jyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2hpcHBpbmdDb3VudGRvd24uaXMoJzp2aXNpYmxlJykgJiYgIWRhdGE/LnB1cmNoYXNhYmxlKSB7XHJcbiAgICAgICAgICAgICRzaGlwcGluZ0NvdW50ZG93bi5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnRDb250ZW50KC4uLmFyZ3MpIHtcclxuICAgICAgICAvLyBjbG9zZSBtb2RpZmllcnMgbW9kYWwgYWZ0ZXIgYWRkZWQgcHJvZHVjdCB0byBjYXJ0XHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTW9kaWZpZXJzTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJHByZU1vZGFsRm9jdXNlZEVsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tb3Blbl0nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIudXBkYXRlQ2FydENvbnRlbnQoLi4uYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSwgLi4uYXJncykge1xyXG4gICAgICAgIHN1cGVyLnNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UsIC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxJbWcgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtaW1nXScpO1xyXG4gICAgICAgIGNvbnN0IHsgbWFpbkltYWdlVXJsLCB6b29tSW1hZ2VVcmwsIG1haW5JbWFnZVNyY3NldCB9ID0gdGhpcy5pbWFnZUdhbGxlcnkuY3VycmVudEltYWdlO1xyXG5cclxuICAgICAgICBpZiAobWFpbkltYWdlVXJsICYmIG1haW5JbWFnZVVybCAhPT0gJG1vZGlmaWVyc01vZGFsSW1nLmF0dHIoJ3NyYycpKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbEltZ1xyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIG1haW5JbWFnZVVybClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmNzZXQnLCBtYWluSW1hZ2VTcmNzZXQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS16b29tLWltYWdlJywgem9vbUltYWdlVXJsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBtYWluIGltYWdlIGluIHF1aWNrLXZpZXcgb24gbW9iaWxlXHJcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBlbCkgPT4gJChlbCkuY2xvc2VzdCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeV0nKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgbWFpbkltYWdlVXJsKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIG1haW5JbWFnZVNyY3NldClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsIG1haW5JbWFnZVNyY3NldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IHByaWNlIHdpdGggY3VycmVuY3kgc3ltYm9sIGFuZCBkZWNpbWFsIHBsYWNlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwbHVzU3ltYm9sIHdoZXRoZXIgdG8gc2hvdyBwbHVzIHN5bWJvbCBmb3IgcG9zaXRpdmUgdmFsdWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGZvcm1hdFByaWNlKHZhbHVlLCBwbHVzU3ltYm9sID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBkaXNwbGF5ID0gY2FjaGVkU2V0dGluZ3MgPyB7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5X3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LnN5bWJvbCxcclxuICAgICAgICAgICAgY3VycmVuY3lfbG9jYXRpb246IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuc3ltYm9sUGxhY2VtZW50LFxyXG4gICAgICAgICAgICBkZWNpbWFsX3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LmRlY2ltYWxUb2tlbixcclxuICAgICAgICAgICAgZGVjaW1hbF9wbGFjZXM6IGNhY2hlZFNldHRpbmdzLmN1cnJlbmN5LmRpc3BsYXkuZGVjaW1hbFBsYWNlcyxcclxuICAgICAgICAgICAgdGhvdXNhbmRzX3Rva2VuOiBjYWNoZWRTZXR0aW5ncy5jdXJyZW5jeS5kaXNwbGF5LnRob3VzYW5kc1Rva2VuLFxyXG4gICAgICAgIH0gOiB7fTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBjdXJyZW5jeUZvcm1hdCgtdmFsdWUsIGRpc3BsYXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGx1c1N5bWJvbCA/IGAtJHtmb3JtYXR0ZWR9YCA6IGZvcm1hdHRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGN1cnJlbmN5Rm9ybWF0KHZhbHVlLCBkaXNwbGF5KTtcclxuICAgICAgICByZXR1cm4gcGx1c1N5bWJvbCA/IGArJHtmb3JtYXR0ZWR9YCA6IGZvcm1hdHRlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmQgb3B0aW9uIHZhbHVlIGJ5IG9wdGlvbiBuYW1lIGFuZCB2YWx1ZSBuYW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgb3B0aW9uIGRpc3BsYXkgbmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlTmFtZSB2YWx1ZSBsYWJlbFxyXG4gICAgICogQHJldHVybnMge1tudW1iZXIsIG51bWJlcl19IG9wdGlvbklkLCB2YWx1ZUlkXHJcbiAgICAgKi9cclxuICAgIGZpbmRPcHRpb25WYWx1ZShvcHRpb25OYW1lLCB2YWx1ZU5hbWUpIHtcclxuICAgICAgICBjb25zdCBoaWRlSWZPcHRpb24gPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbmQoKHsgZGlzcGxheV9uYW1lIH0pID0+IGRpc3BsYXlfbmFtZS5yZXBsYWNlKCcvOjsvZycsICcnKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJykudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGhpZGVJZk9wdGlvbj8udmFsdWVzPy5maW5kKCh7IGxhYmVsIH0pID0+IGxhYmVsLnJlcGxhY2UoJy86Oy9nJywgJycpLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZU5hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uSWQgPSBoaWRlSWZPcHRpb24/LmlkO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZT8uaWQ7XHJcbiAgICAgICAgcmV0dXJuIFtvcHRpb25JZCwgdmFsdWVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1tYWluXScpLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpO1xyXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJykuYXR0cignc3JjJyk7XHJcbiAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKS5hdHRyKCdkYXRhLXNyY3NldCcpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkYXR0cmlidXRlTWVzc2FnZVdyYXBwZXIgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LWF0dHJpYnV0ZXMtbWVzc2FnZV0nKTtcclxuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0V3JhcHBlciA9ICRmb3JtLmZpbmQoJ1tkYXRhLWV5ZXZhLWFkZC10by1jYXJ0LXdyYXBwZXJdJyk7XHJcbiAgICAgICAgY29uc3QgJGNob29zZU9wdGlvbnNCdG4gPSAkZm9ybS5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1vcGVuXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kaWZpZXJzTW9kYWxUZW1wbGF0ZSwge1xyXG4gICAgICAgICAgICB0eHRDb250aW51ZTogdGhpcy5jb250ZXh0LnR4dENvbnRpbnVlLFxyXG4gICAgICAgICAgICBwcm9kdWN0VGl0bGU6IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3QtdGl0bGVdJykuaHRtbCgpLFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VVcmw6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwgfHwgbWFpbkltYWdlVXJsLFxyXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwgfHwgem9vbUltYWdlVXJsLFxyXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6IHRoaXMuaW1hZ2VHYWxsZXJ5LmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VTcmNzZXQgfHwgbWFpbkltYWdlU3Jjc2V0LFxyXG4gICAgICAgIH0sIG51bGwsIFsnPCUnLCAnJT4nXSkpLmFwcGVuZFRvKCRwcm9kdWN0T3B0aW9uc0VsKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbENvbXBsZXRlID0gJG1vZGlmaWVyc01vZGFsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDbG9zZSA9ICRtb2RpZmllcnNNb2RhbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtY2xvc2VdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsQ29udGludWUgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbnRpbnVlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbEJhY2sgPSAkbW9kaWZpZXJzTW9kYWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2tdJyk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgbW9kaWZpZXIgb3B0aW9ucyB0byB0aGUgbW9kYWxcclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1zdGF0ZT1cIm1vZGlmaWVyXCJdJykuYXBwZW5kVG8oJG1vZGlmaWVyc01vZGFsT3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgYWRkIHRvIGNhcnQgJiBxdHkgYm94IHRvIHRoZSBtb2RhbFxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENvbXBsZXRlLmFwcGVuZCgkYWRkVG9DYXJ0V3JhcHBlcik7XHJcblxyXG4gICAgICAgIC8vIGNsb25lIHB1cmNoYXNhYmxlIG1lc3NhZ2VcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5maW5kKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpLmNsb25lKClcclxuICAgICAgICAgICAgLmFwcGVuZFRvKCRhdHRyaWJ1dGVNZXNzYWdlV3JhcHBlcik7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbENsb3NlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbEJhY2sub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFja1N0ZXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29udGludWUub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBhbmQgcmVwb3J0IGludmFsaWQgaW5wdXRzIGlmIGFueVxyXG4gICAgICAgICAgICBjb25zdCBzaG93T3B0aW9uSWRzID0gdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5zbGljZSgtMSlbMF0gfHwgW107XHJcbiAgICAgICAgICAgIGNvbnN0IGludmFsaWRJbnB1dHMgPSBzaG93T3B0aW9uSWRzLnJlZHVjZSgoX2ludmFsaWRJbnB1dHMsIG9wdGlvbklkKSA9PiAoW1xyXG4gICAgICAgICAgICAgICAgLi4uX2ludmFsaWRJbnB1dHMsXHJcbiAgICAgICAgICAgICAgICAuLi4kbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVwiXSwgW25hbWU9XCJhdHRyaWJ1dGVbJHtvcHRpb25JZH1dW2RheV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVttb250aF1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVt5ZWFyXVwiXWApXHJcbiAgICAgICAgICAgICAgICAgICAgLmdldCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihlbCA9PiAhZWwuY2hlY2tWYWxpZGl0eSgpKSxcclxuICAgICAgICAgICAgXSksIFtdKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnZhbGlkSW5wdXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnZhbGlkSW5wdXRzWzBdLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGF1dG8gc2VsZWN0IHRoZSAnbm9uZScgb3B0aW9uIGlmIG5vIHJhZGlvIG9wdGlvbiBvciBubyBwcm9kdWN0IHBpY2sgbGlzdCBvcHRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgc2hvd09wdGlvbklkcy5mb3JFYWNoKG9wdGlvbklkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRyYWRpb3MgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uSWR9XVwiXWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRyYWRpb3MubGVuZ3RoID4gMCAmJiAkcmFkaW9zLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkcmFkaW9zLmZpbHRlcignW3ZhbHVlPVwiXCJdLCBbdmFsdWU9XCIwXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFmdGVyIGNsaWNraW5nIGNvbnRpbnVlIGJ1dHRvbiwgdXBkYXRlIHRoZSBtb2RpZmllcnMgdmlldyBhdXRvbWF0aWNhbGx5XHJcbiAgICAgICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGNob29zZU9wdGlvbnNCdG4ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVxdWlyZSBzZWxlY3RpbmcgdmFyaWFudCBvcHRpb25zIGJlZm9yZSBvcGVuaW5nIHRoZSBtb2RhbFxyXG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVZhcmlhbnRPcHRpb25zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE1vZGlmaWVyc1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGlmaWVyc01vZGFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTW9kaWZpZXJzTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsXScpLmFkZENsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgLmJlZm9yZSh0aGlzLm1vZGlmaWVyc01vZGFsT3ZlcmxheVRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGlmaWVyc01vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbF0nKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vdmVybGF5XScpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2RpZmllcnNWaWV3KCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLW9wdGlvbnNdJyk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKVxyXG4gICAgICAgICAgICAubm90KCdbdHlwZT1cImNoZWNrYm94XCJdLCBbdHlwZT1cInJhZGlvXCJdLCBbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS52YWwoJycpO1xyXG5cclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdJylcclxuICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gZmxhZyBhbnkgaW5wdXQvc2VsZWN0IGlzIG5vdCBzaG93biB5ZXQgc28gdGhhdCB0aGUgY29udGludWUgYnV0dG9uIGlzIHNob3duXHJcbiAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdbbmFtZV49XCJhdHRyaWJ1dGVcIl0nKS5yZW1vdmVBdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IG1vZGFsIHRvIHVwZGF0ZSB0aGlzIHZpZXcgYXV0b21hdGljYWxseSB3aGVuIG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb250YWlucyBhbGwgb3B0aW9uIGlkcyB0aGF0IGFyZSBzaG93biBpbiBlYWNoIHN0ZXBcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW11bXX1cclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyByZXNldCB0aGUgc2hvd24gb3B0aW9uIGlkcyBpbiBhbGwgc3RlcHNcclxuICAgICAgICB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE5vbi1zYWxlIHByaWNlcyBmb3Igb3B0aW9uIHZhbHVlcy5cclxuICAgICAgICAgKiBQdWxsaW5nIGZyb20gY3VzdG9tIGZpZWxkcyBgX19Abm9uc2FsZSBwcmljZSA9IG9wdGlvbiBuYW1lOiBvcHRpb24gdmFsdWVbOyBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlOyAuLi5dYC5cclxuICAgICAgICAgKiBQb3B1bGF0ZWQgaW4gYHVwZGF0ZU1vZGlmaWVyc1ZpZXcoKWAuXHJcbiAgICAgICAgICogQHR5cGUge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBudW1iZXIgfSB9fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY3VzdG9tRmllbGROb25lU2FsZXMgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIG1vZGlmaWVycyBtb2RhbCBhc2FwIHNvIHRoYXQgbm90IGFsbCBvcHRpb25zIGFyZSBkaXNwbGF5ZWRcclxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVNb2RpZmllcnNWaWV3KHsgaWdub3JlQVBJQ2FsbCA9IGZhbHNlIH0gPSB7fSkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbCA9ICRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxCYWNrID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWJhY2tdJyk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1vcHRpb25zXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1bW1hcnkgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtc3VtbWFyeV0nKS5lbXB0eSgpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFRpdGxlID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLXRpdGxlXScpLmVtcHR5KCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsRm9vdGVyID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlcl0nKTtcclxuICAgICAgICBjb25zdCAkbW9kaWZpZXJzTW9kYWxDb250aW51ZSA9ICRwcm9kdWN0T3B0aW9uc0VsLmZpbmQoJ1tkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb250aW51ZV0nKS5oaWRlKCk7XHJcbiAgICAgICAgY29uc3QgJG1vZGlmaWVyc01vZGFsU3VidG90YWwgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtZm9vdGVyLXN1YnRvdGFsXScpO1xyXG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRXcmFwcGVyID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtYWRkLXRvLWNhcnQtd3JhcHBlcl0nKS5oaWRlKCk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZvcm1EYXRhOiAnLCBBcnJheS5mcm9tKGZvcm1EYXRhLmVudHJpZXMoKSkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDdXJyZW50IG9wdGlvbiBpZCB0aGF0IGFwcGVhcnMgYWxvbmUgd2l0aG91dCBhbnkgZ3JvdXAuXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcnx1bmRlZmluZWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRPcHRpb25JZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3VycmVudCBncm91cCBuYW1lIHRoYXQgdGhlIG9wdGlvbiBiZWxvbmdzIHRvLlxyXG4gICAgICAgICAqIEdyb3VwIG5hbWUgdGhhdCBhcHBlYXJzIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYFxyXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBjdXJyZW50R3JvdXBOYW1lO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBPcHRpb24gaWRzIG9mIG9wdGlvbiBuYW1lcyBhcHBlYXIgaW4gdGhlIHZhbHVlIG9mIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXBgLlxyXG4gICAgICAgICAqIEBleGFtcGxlXHJcbiAgICAgICAgICogICBDdXN0b20gZmllbGQ6IGBfX0Bncm91cCBTZWxlY3QgYSBwcmVzY3JpcHRpb24gdHlwZWAgPSBgcHJlc2NyaXB0aW9uIHR5cGVgXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGN1cnJlbnRHcm91cE9wdGlvbklkcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBvcHRpb24gaWRzIHNob3VsZCBiZSBoaWRkZW5cclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgaGlkZU9wdGlvbklkcyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e29wdGlvbklkOiBudW1iZXIsIHZhbHVlSWQ6IG51bWJlcn0+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGhpZGVPcHRpb25WYWx1ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVG9vbHRpcHMgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXMgZXh0cmFjdGVkIGZyb20gY3VzdG9tIGZpZWxkcyBgX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwYFxyXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3Q8bnVtYmVyLCB7IHRvb2x0aXA6IHN0cmluZywgdmFsdWVUb29sdGlwczogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfT5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB0b29sdGlwcyA9IHt9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUb29sdGlwIGhlYWRpbmdzIGZvciBvcHRpb24gdmFsdWVzIGV4dHJhY3RlZCBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfX1cclxuICAgICAgICAgKiBAZXhhbXBsZSB7IDI6IHsgMTIzOiAnVG9vbHRpcCBIZWFkaW5nJyB9IH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCB0b29sdGlwSGVhZGluZ3MgPSB7fTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTm9uLXNhbGUgcHJpY2VzIGZvciBvcHRpb24gdmFsdWVzLlxyXG4gICAgICAgICAqIENhbiBiZSBvdmVycmlkZGVuIGJ5IGN1c3RvbSBmaWVsZHMgYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWBcclxuICAgICAgICAgKiBAdHlwZSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9IH19XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qgbm9uZVNhbGVzID0ge307XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9wdGlvbiByZW5hbWVzIGV4dHJhY3RlZCBmcm9tIGN1c3RvbSBmaWVsZHMgYF9fQHJlbmFtZSBvcHRpb24gbmFtZSA9IG5ldyBuYW1lYFxyXG4gICAgICAgICAqIEB0eXBlIHt7IFtvcHRpb25JZDogbnVtYmVyXTogc3RyaW5nIH19XHJcbiAgICAgICAgICogQGV4YW1wbGUgeyAxMjM6ICdOZXcgTmFtZScsIDQ1NjogJ0Fub3RoZXIgTmFtZScgfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IG9wdGlvblJlbmFtZXMgPSB7fTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgc3RhdGUgfSkgPT4gc3RhdGUgPT09ICdtb2RpZmllcicpLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnJWNQcm9kdWN0RGV0YWlscyAtIG9wdGlvbjogJywgJ2NvbG9yOiBjeWFuJywgb3B0aW9uLmRpc3BsYXlfbmFtZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGlkZU9wdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEZpcnN0IGdyb3VwIG5hbWUgdGhhdCB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8uXHJcbiAgICAgICAgICAgICAqIEdyb3VwIG5hbWUgdGhhdCBhcHBlYXJzIGN1c3RvbSBmaWVsZCBgX19AZ3JvdXAgKGdyb3VwIG5hbWUpYFxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxldCBncm91cE5hbWU7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogT3B0aW9uIGlkcyBvZiBvcHRpb24gbmFtZXMgYXBwZWFyIGluIHRoZSB2YWx1ZSBvZiBjdXN0b20gZmllbGQgYF9fQGdyb3VwYC5cclxuICAgICAgICAgICAgICogQGV4YW1wbGVcclxuICAgICAgICAgICAgICogICBDdXN0b20gZmllbGQ6IGBfX0Bncm91cCBTZWxlY3QgYSBwcmVzY3JpcHRpb24gdHlwZWAgPSBgcHJlc2NyaXB0aW9uIHR5cGVgXHJcbiAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGxldCBncm91cE9wdGlvbklkcztcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIG9wdGlvbiBpcyBhIHJhZGlvIHR5cGUgYW5kIGhhcyAnbm9uZScgdmFsdWUgY2hlY2tlZFxyXG4gICAgICAgICAgICBjb25zdCBpc05vbmVSYWRpb0NoZWNrZWQgPSAkZm9ybS5maW5kKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdW3ZhbHVlPVwiXCJdYCkucHJvcCgnY2hlY2tlZCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgZmlsZSB0eXBlIGFuZCBhbHJlYWR5IHNob3duIGFmdGVyIG1vZGFsIHNob3duXHJcbiAgICAgICAgICAgIGNvbnN0ICRmaWxlID0gJGZvcm0uZmluZChgaW5wdXRbdHlwZT1cImZpbGVcIl1bbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dXCJdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRmlsZVNob3duID0gJGZpbGUubGVuZ3RoID4gMCAmJiAkZmlsZS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCBkYXRlIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJGRhdGUgPSAkZm9ybS5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dW2RheV1cIl0sIHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bbW9udGhdXCJdLCBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdXCJdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT3B0aW9uYWxEYXRlU2hvd24gPSAkZGF0ZS5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJGRhdGUuYXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgb3B0aW9uIGlzIGEgb3B0aW9uYWwgc2VsZWN0IHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRmb3JtLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbFNlbGVjdFNob3duID0gJHNlbGVjdC5sZW5ndGggPiAwICYmICFvcHRpb24ucmVxdWlyZWQgJiYgJHNlbGVjdC5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBvcHRpb24gaXMgYSBvcHRpb25hbCB0ZXh0IC8gbXVsdGlsaW5lIC8gbnVtYmVyIHR5cGUgYW5kIGFscmVhZHkgc2hvd24gYWZ0ZXIgbW9kYWwgc2hvd25cclxuICAgICAgICAgICAgY29uc3QgJHRleHQgPSAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgdGV4dGFyZWEnKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl1gKTtcclxuICAgICAgICAgICAgY29uc3QgaXNPcHRpb25hbFRleHRTaG93biA9ICR0ZXh0Lmxlbmd0aCA+IDAgJiYgIW9wdGlvbi5yZXF1aXJlZCAmJiAkdGV4dC5hdHRyKCdkYXRhLWZpZWxkLXNob3duJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybVZhbHVlICYmICEoZm9ybVZhbHVlIGluc3RhbmNlb2YgRmlsZSlcclxuICAgICAgICAgICAgICAgIHx8IGlzTm9uZVJhZGlvQ2hlY2tlZCB8fCBpc0ZpbGVTaG93biB8fCBpc09wdGlvbmFsRGF0ZVNob3duIHx8IGlzT3B0aW9uYWxTZWxlY3RTaG93biB8fCBpc09wdGlvbmFsVGV4dFNob3duXHJcbiAgICAgICAgICAgICAgICB8fCBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW2RheV1gKVxyXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVttb250aF1gKVxyXG4gICAgICAgICAgICAgICAgfHwgZm9ybURhdGEuZ2V0KGBhdHRyaWJ1dGVbJHtvcHRpb24uaWR9XVt5ZWFyXWApKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWRlIG9wdGlvbiBpZiB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICBoaWRlT3B0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZU9wdGlvbjogJywgaGlkZU9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21GaWVsZHMuZm9yRWFjaChjdXN0b21GaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AaGlkZV9pZiAoLiopXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlkZUlmTWF0Y2ggPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYoeyBjdXN0b21GaWVsZCwgZm9ybURhdGEsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGlkZUlmTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZU9wdGlvbiA9IGhpZGVJZk1hdGNoLmhpZGVPcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb25WYWx1ZXMucHVzaCguLi5oaWRlSWZNYXRjaC5oaWRlT3B0aW9uVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JvdXBOYW1lICYmICFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQGdyb3VwICguKilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaEdyb3VwKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZSA9IGdyb3VwTWF0Y2guZ3JvdXBOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBPcHRpb25JZHMgPSBncm91cE1hdGNoLmdyb3VwT3B0aW9uSWRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGVPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggX19AdG9vbHRpcCBuYW1lWzp2YWx1ZV0gPSB0b29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXBNYXRjaCA9IHRoaXMuY3VzdG9tRmllbGRNYXRjaFRvb2x0aXAoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwc1tvcHRpb24uaWRdID0gT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHRvb2x0aXBNYXRjaC50b29sdGlwIHx8IHRvb2x0aXBzW29wdGlvbi5pZF0/LnRvb2x0aXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwczogT2JqZWN0LmFzc2lnbih7fSwgdG9vbHRpcHNbb3B0aW9uLmlkXT8udmFsdWVUb29sdGlwcywgdG9vbHRpcE1hdGNoLnZhbHVlVG9vbHRpcHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQHRvb2x0aXBfaGVhZGluZyBuYW1lOnZhbHVlID0gdG9vbHRpcCBoZWFkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcEhlYWRpbmdzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoVG9vbHRpcEhlYWRpbmcoeyBjdXN0b21GaWVsZCwgb3B0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9vbHRpcEhlYWRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwSGVhZGluZ3Nbb3B0aW9uLmlkXSA9IE9iamVjdC5hc3NpZ24oe30sIHRvb2x0aXBIZWFkaW5nc1tvcHRpb24uaWRdLCB2YWx1ZVRvb2x0aXBIZWFkaW5ncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaCBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoUmVuYW1lKHsgY3VzdG9tRmllbGQsIG9wdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblJlbmFtZXNbb3B0aW9uLmlkXSA9IG5ld05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZU5vblNhbGVzID0gdGhpcy5jdXN0b21GaWVsZE1hdGNoTm9uU2FsZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obm9uZVNhbGVzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3B0aW9uLmlkXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5vbmVTYWxlc1tvcHRpb24uaWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlTm9uU2FsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFoaWRlT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEdyb3VwT3B0aW9uSWRzLmxlbmd0aCA9PT0gMCAmJiAhY3VycmVudE9wdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gdmlzaWJsZSBvcHRpb24gYmVmb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb24gZ3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwTmFtZSA9IGdyb3VwTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEdyb3VwT3B0aW9uSWRzID0gZ3JvdXBPcHRpb25JZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwTmFtZTogJHtjdXJyZW50R3JvdXBOYW1lfSwgY3VycmVudEdyb3VwT3B0aW9uSWRzOiAke2N1cnJlbnRHcm91cE9wdGlvbklkc31gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGFuZC1hbG9uZSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wdGlvbklkID0gb3B0aW9uLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGN1cnJlbnRPcHRpb25JZDogJHtjdXJyZW50T3B0aW9uSWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaGlkZU9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaGlkZU9wdGlvbklkcy5wdXNoKG9wdGlvbi5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHcm91cE9wdGlvbklkcy5sZW5ndGggPiAwICYmIGhpZGVPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgaGlkZGVuIG9wdGlvbnMgZnJvbSB0aGUgY3VycmVudCBncm91cFxyXG4gICAgICAgICAgICBjdXJyZW50R3JvdXBPcHRpb25JZHMgPSBjdXJyZW50R3JvdXBPcHRpb25JZHMuZmlsdGVyKGlkID0+ICFoaWRlT3B0aW9uSWRzLmluY2x1ZGVzKGlkKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwT3B0aW9uSWRzOiAke2N1cnJlbnRHcm91cE9wdGlvbklkc31gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudE9wdGlvbklkOiAnLCBjdXJyZW50T3B0aW9uSWQpO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gY3VycmVudEdyb3VwTmFtZTogJywgY3VycmVudEdyb3VwTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBjdXJyZW50R3JvdXBPcHRpb25JZHM6ICcsIGN1cnJlbnRHcm91cE9wdGlvbklkcyk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uVmFsdWVzOiAnLCBoaWRlT3B0aW9uVmFsdWVzKTtcclxuXHJcbiAgICAgICAgLy8gU3RvcmUgbm9uLXNhbGUgcHJpY2VzIG9mIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICAvLyB0byB1c2Ugd2hlbiB1cGRhdGluZyBvcHRpb24gcHJpY2VzIG9ubHkgd2l0aG91dCB1cGRhdGUgdGhlIHdob2xlIG1vZGlmaWVycyB2aWV3XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmN1c3RvbUZpZWxkTm9uZVNhbGVzLCBub25lU2FsZXMpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJRHMgb2Ygb3B0aW9ucyB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgYXQgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxyXG4gICAgICAgIGNvbnN0IHNob3dPcHRpb25JZHMgPSBjdXJyZW50R3JvdXBPcHRpb25JZHMubGVuZ3RoID4gMCA/IGN1cnJlbnRHcm91cE9wdGlvbklkc1xyXG4gICAgICAgICAgICA6IChjdXJyZW50T3B0aW9uSWQgPyBbY3VycmVudE9wdGlvbklkXSA6IFtdKTtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHNob3duIG9wdGlvbiBpZHMgb2YgdGhlIGN1cnJlbnQgc3RlcCB0byB0aGUgc3RhY2tcclxuICAgICAgICAvLyBpZiBub3QgdGhlIHNhbWUgYXMgdGhlIHByZXZpb3VzIHN0ZXAuXHJcbiAgICAgICAgLy8gdGhpcyBpcyB1c2VkIHRvIG5hdmlnYXRlIGJhY2sgdG8gdGhlIHByZXZpb3VzIHN0ZXAuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgIHx8ICFhcmVBcnJheXNFcXVhbFVub3JkZXJlZCh0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnNsaWNlKC0xKVswXSwgc2hvd09wdGlvbklkcykpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5wdXNoKHNob3dPcHRpb25JZHMpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIHN0YWNrZWRTaG93T3B0aW9uSWRzOiAnLCB0aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgLyBoaWRlIGJhY2sgYnV0dG9uXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhY2tlZFNob3dPcHRpb25JZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxCYWNrLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxCYWNrLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgZm9vdGVyLCBhbmQgaGlkZSBpdCBpZiBubyBtb3JlIG9wdGlvbiBzaG93blxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsRm9vdGVyLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxGb290ZXIuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBtb2RhbCB0aXRsZSBmcm9tIHRoZSBjdXN0b20gZmllbGQgYF9fQGdyb3VwIChncm91cCBuYW1lKWAgb3Igb3B0aW9uIGRpc3BsYXkgbmFtZVxyXG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbFRpdGxlLmh0bWwoY3VycmVudEdyb3VwTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IG9wdGlvblJlbmFtZXNbc2hvd09wdGlvbklkc1swXV0gfHwgdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBzaG93T3B0aW9uSWRzWzBdKT8uZGlzcGxheV9uYW1lO1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS50ZXh0KHRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGhpZGUgdGhlIG9wdGlvbiBuYW1lIHdoZW4gaGVyZSBpcyBvbmx5IDEgb3B0aW9uIHNob3duIGluIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7c2hvd09wdGlvbklkc1swXX1cIl0gLmZvcm0tbGFiZWxgKS5maXJzdCgpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkXSAuZm9ybS1sYWJlbCcpLmZpcnN0KCkuc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBjdXJyZW50IHByb2R1Y3Qgb3B0aW9uc1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdfc2hvdycpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKF8sIGVsKSA9PiAhc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIoJChlbCkuZGF0YSgncHJvZHVjdC1hdHRyaWJ1dGUtaWQnKSkpKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ19zaG93Jyk7XHJcblxyXG4gICAgICAgIC8vIFJlbmFtZSB0aGUgc2hvd24gb3B0aW9ucyBpZiBuZWVkZWRcclxuICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gb3B0aW9uUmVuYW1lc1tvcHRpb25JZF07XHJcbiAgICAgICAgICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl0gLmZvcm0tbGFiZWxgKS5maXJzdCgpLmh0bWwobmV3TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0b29sdGlwIGZvciBncm91cFxyXG4gICAgICAgIGlmIChjdXJyZW50R3JvdXBOYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBncm91cFRvb2x0aXAgPSAnJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tRmllbGRzLmZvckVhY2goY3VzdG9tRmllbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncm91cFRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cFRvb2x0aXAgPSB0aGlzLmN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAoeyBjdXN0b21GaWVsZCwgZ3JvdXBOYW1lOiBjdXJyZW50R3JvdXBOYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncm91cFRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIGdyb3VwVG9vbHRpcCkpO1xyXG4gICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2hvdyB0b29sdGlwIGZvciBvcHRpb25zIGFuZCBvcHRpb24gdmFsdWVzXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25Ub29sdGlwcygkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgdG9vbHRpcHMsIHRvb2x0aXBIZWFkaW5ncywgc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyBmb3Igc2hvd24gb3B0aW9ucyBhbmQgZGlzcGxheSBDb250aW51ZSBidXR0b24gaWYgbmVlZGVkLlxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMoc2hvd09wdGlvbklkcywgJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsQ29udGludWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBwcmljZXMgZm9yIG9wdGlvbnMgYW5kIG9wdGlvbiB2YWx1ZXNcclxuICAgICAgICBpZiAoIWlnbm9yZUFQSUNhbGwpIHtcclxuICAgICAgICAgICAgaWYgKHNob3dPcHRpb25JZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlcigkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgc2hvd09wdGlvbklkcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93IHN1bW1hcnkgYnV0IHByZWxvYWRlciBmb3IgcHJpY2VzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdW1tYXJ5KCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1bW1hcnksICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCAkbW9kaWZpZXJzTW9kYWxUaXRsZSwgJGFkZFRvQ2FydFdyYXBwZXIsIGZvcm1EYXRhLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zaG93T3B0aW9uUHJpY2VzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzLCBmb3JtRGF0YSwgbm9uZVNhbGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNob3cgc3VtbWFyeSBjb250ZW50IGlmIG5vIG9wdGlvbiB2aXNpYmxlIG9uIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93U3VtbWFyeSgkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5LCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgJG1vZGlmaWVyc01vZGFsVGl0bGUsICRhZGRUb0NhcnRXcmFwcGVyLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGUgcmVxdWlyZWQgdmFyaWFudCBvcHRpb25zIGFuZCByZXBvcnQgZXJyb3IgZm9yIHRoZSBmaXJzdCBpbnZhbGlkIG9wdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGVWYXJpYW50T3B0aW9ucygpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm1bMF0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnZhbGlkID0gdGhpcy5wcm9kdWN0T3B0aW9ucy5maWx0ZXIoKHsgc3RhdGUgfSkgPT4gc3RhdGUgPT09ICd2YXJpYW50X29wdGlvbicpLmZpbmQob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBSZXF1aXJlZCBvcHRpb24gXCIke29wdGlvbi5kaXNwbGF5X25hbWV9XCIgaXMgbm90IHNlbGVjdGVkYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoaW52YWxpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9ICRmb3JtLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7aW52YWxpZC5pZH1dXCJdYClbMF07XHJcbiAgICAgICAgICAgIGVsLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFja1N0ZXAoKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbC5maW5kKCdbZGF0YS1leWV2YS1tb2RpZmllcnMtbW9kYWwtb3B0aW9uc10nKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd09wdGlvbklkcyA9IFtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGFja2VkU2hvd09wdGlvbklkcy5wb3AoKSwgLy8gY3VycmVudCBzdGVwJ3Mgc2hvd24gb3B0aW9uIGlkc1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YWNrZWRTaG93T3B0aW9uSWRzLnBvcCgpLCAvLyBwcmV2aW91cyBzdGVwJ3Mgc2hvd24gb3B0aW9uIGlkc1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IHZhbHVlcyBvZiBzaG93biBvcHRpb24gaWRzIGluIGN1cnJlbnQgc3RlcCAmIHByZXZpb3VzIHN0ZXBcclxuICAgICAgICAvLyB0byBkaXNwbGF5IHByZXZpb3VzIHN0ZXAgYWdhaW4uXHJcbiAgICAgICAgaWYgKHNob3dPcHRpb25JZHMpIHtcclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWRdJylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKF9pLCBlbCkgPT4gc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIoJChlbCkuYXR0cignZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZCcpKSkpO1xyXG5cclxuICAgICAgICAgICAgJG9wdGlvbi5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpXHJcbiAgICAgICAgICAgICAgICAubm90KCdbdHlwZT1cImNoZWNrYm94XCJdLCBbdHlwZT1cInJhZGlvXCJdLCBbdHlwZT1cImZpbGVcIl0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykudmFsKCcnKTtcclxuXHJcbiAgICAgICAgICAgICRvcHRpb24uZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcignW25hbWVePVwiYXR0cmlidXRlXCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICRvcHRpb24uZmluZCgnW25hbWVePVwiYXR0cmlidXRlXCJdJykucmVtb3ZlQXR0cignZGF0YS1maWVsZC1zaG93bicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYW51YWxVcGRhdGVNb2RpZmllcnNWaWV3ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBpbW1lZGlhdGVseSB1cGRhdGUgZGlzcGxheSBwcmV2aW91cyBvcHRpb25zIG9uIG1vZGlmaWVycyBtb2RhbFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGlmaWVyc1ZpZXcoeyBpZ25vcmVBUElDYWxsOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdHJpZ2dlciBjaGFuZ2UgZXZlbnQgdG8gdXBkYXRlIHByaWNlcyAmIGRhdGEgYmVsb25ncyB0byBCQ1xyXG4gICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHNob3VsZCBiZSBoaWRkZW4gYmFzZWQgb24gdGhlIGN1c3RvbSBmaWVsZCBgX19AaGlkZV9pZmBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZm9ybURhdGE6IEZvcm1EYXRhLFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBpZDogTnVtYmVyLFxyXG4gICAgICogICAgIGRpc3BsYXlfbmFtZTogc3RyaW5nLFxyXG4gICAgICogICAgIHZhbHVlczogW3tcclxuICAgICAqICAgICAgIGlkOiBOdW1iZXIsXHJcbiAgICAgKiAgICAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgICogICAgIH1dXHJcbiAgICAgKiAgIH1cclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgaGlkZU9wdGlvbjogYm9vbGVhbiwgaGlkZU9wdGlvblZhbHVlczogQXJyYXk8e29wdGlvbklkOiBudW1iZXIsIHZhbHVlSWQ6IG51bWJlcn0+IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hIaWRlSWYoeyBjdXN0b21GaWVsZCwgZm9ybURhdGEsIG9wdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSBjdXN0b21GaWVsZE1hdGNoSGlkZUlmOiBjZl9uYW1lID0gJHtjdXN0b21GaWVsZC5uYW1lfSA7IG9wX25hbWUgPSAke29wdGlvbi5kaXNwbGF5X25hbWV9YCk7XHJcbiAgICAgICAgbGV0IGhpZGVPcHRpb24gPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBoaWRlT3B0aW9uVmFsdWVzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AaGlkZV9pZlxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAoIW0pIHJldHVybjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9Pn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBoaWRlSWZPcHRpb25zID0gbVsxXS5zcGxpdCgnOycpLm1hcChrdiA9PiBrdi5zcGxpdCgnOicsIDIpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKHtcclxuICAgICAgICAgICAgbmFtZToga2V5LnRyaW0oKSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUudHJpbSgpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIGhpZGVJZk9wdGlvbnM6ICR7aGlkZUlmT3B0aW9ucy5tYXAoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKHZhbHVlID8gYCR7bmFtZX06ICR7dmFsdWV9YCA6IG5hbWUpKS5qb2luKCc7ICcpfWApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8e25hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ30+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRoZW5PcHRpb25zID0gY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5tYXAoa3YgPT4ga3Yuc3BsaXQoJzonLCAyKSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XHJcbiAgICAgICAgICAgIG5hbWU6IGtleS50cmltKCksXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSA/IHZhbHVlLnRyaW0oKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0aGVuT3B0aW9uczogJHt0aGVuT3B0aW9ucy5tYXAoKHsgbmFtZSwgdmFsdWUgfSkgPT4gKHZhbHVlID8gYCR7bmFtZX06ICR7dmFsdWV9YCA6IG5hbWUpKS5qb2luKCc7ICcpfWApO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGbGFnIHRvIGNoZWNrIGlmIG9wdGlvbjp2YWx1ZSBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYCBtYXRjaGVzIHdpdGggY3VycmVudCBmb3JtIGRhdGFcclxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgaGlkZUlmTWF0Y2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBvcHRpb246dmFsdWUgaW4gY3VzdG9tIGZpZWxkIGBfX0BoaWRlX2lmYCBtYXRjaGVzIHdpdGggY3VycmVudCBmb3JtIGRhdGFcclxuICAgICAgICBoaWRlSWZPcHRpb25zLmZvckVhY2goKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBbb3B0aW9uSWQsIHZhbHVlSWRdID0gdGhpcy5maW5kT3B0aW9uVmFsdWUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWUgPSBOdW1iZXIoZm9ybURhdGEuZ2V0QWxsKGBhdHRyaWJ1dGVbJHtvcHRpb25JZH1dYCkuc2xpY2UoLTEpWzBdKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb3JtVmFsdWUgPT09IHZhbHVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGhpZGVJZk1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29uc29sZS5sb2coJ1Byb2R1Y3REZXRhaWxzIC0gaGlkZUlmTWF0Y2g6ICcsIGhpZGVJZk1hdGNoKTtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVJZk1hdGNoKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IG9wdGlvbiBzaG91bGQgYmUgaGlkZGVuIHdoZW4gbWF0Y2hpbmcgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGN1c3RvbSBmaWVsZCBgX19AaGlkZV9pZmBcclxuICAgICAgICAgICAgdGhlbk9wdGlvbnMuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGN1c3RvbSBmaWVsZCB2YWx1ZSBjb250YWluIG9wdGlvbiBuYW1lIHdpdGhvdXQgdmFsdWUsIHRoZW4gaGlkZSB0aGUgd2hvbGUgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPcHRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGhpZGVPcHRpb246ICcsIGhpZGVPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uLnZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIGhpZGUgdGhlIHNwZWNpZmljIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgbGFiZWwsIGlkIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2hpZGVPcHRpb25WYWx1ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uSWQ6IG9wdGlvbi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVJZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3B0aW9uVmFsdWVzLnB1c2goX2hpZGVPcHRpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZygnUHJvZHVjdERldGFpbHMgLSBoaWRlT3B0aW9uVmFsdWU6ICcsIF9oaWRlT3B0aW9uVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpZGVPcHRpb24gfHwgaGlkZU9wdGlvblZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGhpZGVPcHRpb24sIGhpZGVPcHRpb25WYWx1ZXMgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIGJlbG9uZ3MgdG8gdGhlIGdyb3VwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQGdyb3VwYFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e1xyXG4gICAgICogICBjdXN0b21GaWVsZDoge1xyXG4gICAgICogICAgIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBpZDogTnVtYmVyLFxyXG4gICAgICogICB9LFxyXG4gICAgICogQHJldHVybnMge3sgZ3JvdXBOYW1lOiBzdHJpbmcsIGdyb3VwT3B0aW9uSWRzOiBBcnJheTxudW1iZXI+IH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hHcm91cCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AZ3JvdXBcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gbVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwT3B0aW9uSWRzID0gY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5tYXAocyA9PiBzLnRyaW0oKSkgLy8gb3B0aW9uIG5hbWVzXHJcbiAgICAgICAgICAgICAgICAubWFwKG9wdGlvbk5hbWUgPT4gdGhpcy5wcm9kdWN0T3B0aW9ucy5maW5kKCh7IGRpc3BsYXlfbmFtZSB9KSA9PiBlcXVhbE9wdGlvblN0cmluZyhkaXNwbGF5X25hbWUsIG9wdGlvbk5hbWUpKT8uaWQpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGlkID0+IGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncm91cE9wdGlvbklkcy5pbmNsdWRlcyhvcHRpb24uaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvcHRpb24gYmVsb25ncyB0byB0aGUgZ3JvdXAgaW4gdGhpcyBjdXN0b20gZmllbGRcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gZ3JvdXBOYW1lOiAke2dyb3VwTmFtZX0sIGdyb3VwT3B0aW9uSWRzOiAke2dyb3VwT3B0aW9uSWRzfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZ3JvdXBOYW1lLCBncm91cE9wdGlvbklkcyB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIG9wdGlvbiB2YWx1ZSBoYXMgYSB0b29sdGlwIGluIHRoZSBjdXN0b20gZmllbGQgYF9fQHRvb2x0aXAgbmFtZVs6dmFsdWVdID0gdG9vbHRpcGBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfVxyXG4gICAgICogICBvcHRpb246IHtcclxuICAgICAqICAgICBkaXNwbGF5X25hbWUsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgbGFiZWxcclxuICAgICAqICAgICB9XVxyXG4gICAgICogICB9XHJcbiAgICAgKiB9fSBwYXJhbTBcclxuICAgICAqIEByZXR1cm5zIHt7IHRvb2x0aXA6IHN0cmluZyB9IHwgeyB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9IHwgdW5kZWZpbmVkfVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoVG9vbHRpcCh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gbVsxXS5zcGxpdCgnOicsIDIpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IGN1c3RvbUZpZWxkLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdG9vbHRpcCBmb3Igb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3Igb3B0aW9uIFwiJHtuYW1lfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdG9vbHRpcCB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVRvb2x0aXBzID0ge307XHJcblxyXG4gICAgICAgICAgICAvLyB0b29sdGlwIGZvciBvcHRpb24gdmFsdWVcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlcy5mb3JFYWNoKCh7IGlkLCBsYWJlbCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXF1YWxPcHRpb25TdHJpbmcobGFiZWwsIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc29sZS5sb2coYFByb2R1Y3REZXRhaWxzIC0gdG9vbHRpcCBmb3Igb3B0aW9uIFwiJHtuYW1lfSA6ICR7dmFsdWV9XCIgPSBcIlwiXCIke3Rvb2x0aXB9XCJcIlwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUb29sdGlwc1tpZF0gPSB0b29sdGlwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlVG9vbHRpcHMgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZ3JvdXAgaGFzIGEgdG9vbHRpcCBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0B0b29sdGlwIChncm91cCBuYW1lKSA9IHRvb2x0aXBgXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZ3JvdXBOYW1lOiBzdHJpbmdcclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3N0cmluZyB8IHVuZGVmaW5lZH1cclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFRvb2x0aXBHcm91cCh7IGN1c3RvbUZpZWxkLCBncm91cE5hbWUgfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcFxccysoLiopJC9pKTtcclxuICAgICAgICBpZiAobSkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSBjdXN0b21GaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3AgaWYgbm90IG1hdGNoIGdyb3VwIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhncm91cE5hbWUsIG5hbWUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnNvbGUubG9nKGBQcm9kdWN0RGV0YWlscyAtIHRvb2x0aXAgZm9yIGdyb3VwIFwiJHtuYW1lfVwiID0gXCJcIlwiJHt0b29sdGlwfVwiXCJcImApO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgb3B0aW9uIHZhbHVlIGhhcyBhIHRvb2x0aXAgaGVhZGluZyBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0B0b29sdGlwX2hlYWRpbmcgbmFtZTp2YWx1ZSA9IHRvb2x0aXAgaGVhZGluZ2BcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgb3B0aW9uOiB7XHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IG51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfVxyXG4gICAgICogfX0gcGFyYW0wXHJcbiAgICAgKiBAcmV0dXJucyB7eyBbdmFsdWVJZDogbnVtYmVyXTogc3RyaW5nIH0gfCB1bmRlZmluZWR9XHJcbiAgICAgKi9cclxuICAgIGN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AdG9vbHRpcF9oZWFkaW5nXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBtWzFdLnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gY3VzdG9tRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdCBtYXRjaCBvcHRpb24gbmFtZSBvciBub3QgdmFsdWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICF2YWx1ZSB8fCAhZXF1YWxPcHRpb25TdHJpbmcob3B0aW9uLmRpc3BsYXlfbmFtZSwgbmFtZSkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9vbHRpcEhlYWRpbmdzID0ge307XHJcblxyXG4gICAgICAgICAgICBvcHRpb24udmFsdWVzLmZvckVhY2goKHsgaWQsIGxhYmVsIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSB0b29sdGlwIGhlYWRpbmcgZm9yIG9wdGlvbiBcIiR7bmFtZX0gOiAke3ZhbHVlfVwiID0gXCJcIlwiJHtoZWFkaW5nfVwiXCJcImApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9vbHRpcEhlYWRpbmdzW2lkXSA9IGhlYWRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9vbHRpcEhlYWRpbmdzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gbmFtZSBjb250YWlucyBpbiB0aGUgY3VzdG9tIGZpZWxkIGBfX0ByZW5hbWUgb3B0aW9uIG5hbWUgPSBuZXcgbmFtZWBcclxuICAgICAqIGFuZCByZXR1cm4gdGhlIG5ldyBuYW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMC5jdXN0b21GaWVsZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5jdXN0b21GaWVsZC5uYW1lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0wLmN1c3RvbUZpZWxkLnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wLm9wdGlvblxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtMC5vcHRpb24uZGlzcGxheV9uYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfSBuZXcgb3B0aW9uIG5hbWVcclxuICAgICAqL1xyXG4gICAgY3VzdG9tRmllbGRNYXRjaFJlbmFtZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IG0gPSBjdXN0b21GaWVsZC5uYW1lLm1hdGNoKC9eX19AcmVuYW1lXFxzKyguKikkL2kpO1xyXG4gICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBtWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IFN0cmluZyhjdXN0b21GaWVsZC52YWx1ZSkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBub3QgbWF0Y2ggb3B0aW9uIG5hbWVcclxuICAgICAgICAgICAgaWYgKCFuYW1lIHx8ICFlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBuYW1lKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25zb2xlLmxvZyhgUHJvZHVjdERldGFpbHMgLSByZW5hbWUgb3B0aW9uIFwiJHtuYW1lfVwiIHRvIFwiJHtuZXdOYW1lfVwiYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBvcHRpb24gdmFsdWUgaGFzIGEgbm9uLXNhbGUgcHJpY2UgaW4gdGhlIGN1c3RvbSBmaWVsZFxyXG4gICAgICogYF9fQG5vbnNhbGUgcHJpY2UgPSBvcHRpb24gbmFtZTogb3B0aW9uIHZhbHVlWzsgb3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZTsgLi4uXWBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgY3VzdG9tRmllbGQ6IHtcclxuICAgICAqICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgb3B0aW9uOiB7XHJcbiAgICAgKiAgICAgZGlzcGxheV9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgdmFsdWVzOiBbe1xyXG4gICAgICogICAgICAgaWQ6IG51bWJlcixcclxuICAgICAqICAgICAgIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgfV1cclxuICAgICAqICAgfSxcclxuICAgICAqIH19IHBhcmFtMFxyXG4gICAgICogQHJldHVybnMge3sgW3ZhbHVlSWQ6IG51bWJlcl06IG51bWJlciB9fVxyXG4gICAgICovXHJcbiAgICBjdXN0b21GaWVsZE1hdGNoTm9uU2FsZSh7IGN1c3RvbUZpZWxkLCBvcHRpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlTm9uU2FsZXMgPSB7fTtcclxuICAgICAgICBjb25zdCBtID0gY3VzdG9tRmllbGQubmFtZS5tYXRjaCgvXl9fQG5vbnNhbGVcXHMrKC4qKSQvaSk7XHJcbiAgICAgICAgaWYgKG0pIHtcclxuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBOdW1iZXIobVsxXS50cmltKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3BsaXQgZWFjaCAob3B0aW9uIG5hbWU6IG9wdGlvbiB2YWx1ZSkgcGFpciBzZXBhcmF0ZWQgYnkgXCI7XCJcclxuICAgICAgICAgICAgY3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJzsnKS5mb3JFYWNoKGt2ID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHNwbGl0IG9wdGlvbiBuYW1lIDogb3B0aW9uIHZhbHVlIGluIGN1c3RvbSBmaWVsZCB2YWx1ZSBzZXBhcmF0ZWQgYnkgXCI6XCJcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtvcHRpb25OYW1lLCB2YWx1ZUxhYmVsXSA9IGt2LnNwbGl0KCc6JywgMikubWFwKHMgPT4gcy50cmltKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcXVhbE9wdGlvblN0cmluZyhvcHRpb24uZGlzcGxheV9uYW1lLCBvcHRpb25OYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbiBuYW1lIGluIGN1c3RvbSBmaWVsZCBtYXRjaCB3aXRoIGN1cnJlbnQgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIG9wdGlvbiB2YWx1ZSBJRCB0aGF0IG1hdGNoZXMgd2l0aCB0aGUgdmFsdWUgbGFiZWwgaW4gY3VzdG9tIGZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVJZCA9IG9wdGlvbi52YWx1ZXMuZmluZCgoeyBsYWJlbCB9KSA9PiBlcXVhbE9wdGlvblN0cmluZyhsYWJlbCwgdmFsdWVMYWJlbCkpPy5pZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gbm9uLXNhbGUgcHJpY2UgY29ycmVzcG9uZGluZyB0byB0aGUgb3B0aW9uIHZhbHVlIElEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTm9uU2FsZXNbdmFsdWVJZF0gPSBwcmljZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWVOb25TYWxlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHN0b3JlIHNldHRpbmdzIGluY2x1ZGluZyB0YXggYW5kIGFjdGl2ZSBjdXJyZW5jeVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHtcclxuICAgICAqICAgdGF4OiB7IHBkcDogbnVtYmVyIH0sXHJcbiAgICAgKiAgIGN1cnJlbmN5OiB7XHJcbiAgICAgKiAgICAgY29kZTogc3RyaW5nLFxyXG4gICAgICogICAgIGRpc3BsYXk6IHsgZGVjaW1hbFBsYWNlczogbnVtYmVyLCBkZWNpbWFsVG9rZW46IHN0cmluZywgc3ltYm9sOiBzdHJpbmcsIHN5bWJvbFBsYWNlbWVudDogc3RyaW5nLCB0aG91c2FuZHNUb2tlbjogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgZXhjaGFuZ2VSYXRlOiBudW1iZXIsIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqICAgZGVmYXVsdEN1cnJlbmN5OiB7XHJcbiAgICAgKiAgICAgY29kZTogc3RyaW5nLFxyXG4gICAgICogICAgIGRpc3BsYXk6IHsgZGVjaW1hbFBsYWNlczogbnVtYmVyLCBkZWNpbWFsVG9rZW46IHN0cmluZywgc3ltYm9sOiBzdHJpbmcsIHN5bWJvbFBsYWNlbWVudDogc3RyaW5nLCB0aG91c2FuZHNUb2tlbjogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgZXhjaGFuZ2VSYXRlOiBudW1iZXIsIG5hbWU6IHN0cmluZyxcclxuICAgICAqICAgfSxcclxuICAgICAqIH0+XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGZldGNoU2V0dGluZ3MoKSB7XHJcbiAgICAgICAgaWYgKGNhY2hlZFNldHRpbmdzKSByZXR1cm4gY2FjaGVkU2V0dGluZ3M7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY29udGV4dC5ncmFwaFFMVG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRkZWZhdWx0Q3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUhXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3koY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uQ3VycmVuY3lGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDdXJyZW5jeTogY3VycmVuY3koY3VycmVuY3lDb2RlOiAkZGVmYXVsdEN1cnJlbmN5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkN1cnJlbmN5RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IEN1cnJlbmN5RmllbGRzIG9uIEN1cnJlbmN5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xQbGFjZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kc1Rva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjaGFuZ2VSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuYWN0aXZlX2N1cnJlbmN5X2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEN1cnJlbmN5Q29kZTogdGhpcy5jb250ZXh0LmRlZmF1bHRfY3VycmVuY3lfY29kZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYWNoZWRTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgLi4ucmVzcC5kYXRhLnNpdGUuc2V0dGluZ3MsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiByZXNwLmRhdGEuc2l0ZS5jdXJyZW5jeSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gY2FjaGVkU2V0dGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBvcHRpb24gcHJpY2VzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTx7IGlkOiBudW1iZXIsIHZhbHVlczogQXJyYXk8eyBpZDogbnVtYmVyIH0+IH0+fSBzaG93T3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGFcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PHtcclxuICAgICAqICAgb3B0aW9uSWQ6IG51bWJlcnxudWxsLFxyXG4gICAgICogICB2YWx1ZUlkOiBudW1iZXJ8bnVsbCxcclxuICAgICAqICAgcHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIHByaWNlc1dpdGhvdXRUYXg6IHtcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHNhbGVQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBhZGp1c3RlZFByaWNlc1dpdGhUYXg6IHtcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBwcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIG5vblNhbGVQcmljZVZhbHVlOiBudW1iZXIsXHJcbiAgICAgKiAgIH0sXHJcbiAgICAgKiAgIGFkanVzdGVkUHJpY2VzV2l0aG91dFRheDoge1xyXG4gICAgICogICAgIGJhc2VQcmljZTogeyB2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeUNvZGU6IHN0cmluZyB9LFxyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgbm9uU2FsZVByaWNlVmFsdWU6IG51bWJlcixcclxuICAgICAqICAgfSxcclxuICAgICAqIH0+Pn1cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZmV0Y2hPcHRpb25QcmljZXMoc2hvd09wdGlvbnMsIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25WYWx1ZUlkcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5lbnRyaWVzKCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG0gPSBrZXkubWF0Y2goL15hdHRyaWJ1dGVcXFsoXFxkKylcXF0kLyk7XHJcbiAgICAgICAgICAgIGlmIChtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25FbnRpdHlJZCA9IE51bWJlcihtWzFdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlRW50aXR5SWQgPSBOdW1iZXIodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUVudGl0eUlkICYmICFzaG93T3B0aW9ucy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBvcHRpb25FbnRpdHlJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlSWRzLnB1c2goeyBvcHRpb25FbnRpdHlJZCwgdmFsdWVFbnRpdHlJZCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcclxuICAgICAgICAgICAgLy8gZmV0Y2ggYWxyZWFkeSBzZWxlY3RlZCBvcHRpb25zJyBwcmljZXNcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5mZXRjaE9wdGlvblByaWNlKHNlbGVjdGVkT3B0aW9uVmFsdWVJZHMpLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHNob3dPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gb3B0aW9uLnZhbHVlcyB8fCAob3B0aW9uLnZhbHVlID8gW3sgaWQ6IG9wdGlvbi52YWx1ZSB9XSA6IFtdKTtcclxuICAgICAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gZmV0Y2ggY3VycmVudCBvcHRpb24gdmFsdWUncyBwcmljZXNcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2UoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3RlZE9wdGlvblZhbHVlSWRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbnRpdHlJZDogb3B0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVFbnRpdHlJZDogdmFsdWUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSkudGhlbihwcm9kdWN0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbklkOiBvcHRpb24uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlSWQ6IHZhbHVlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBbcHJldiwgLi4uc2VsZWN0aW9uc10gPSBhd2FpdCBoYW5kbGVQcm9taXNlc1dpdGhMaW1pdChwcm9taXNlcyk7XHJcblxyXG4gICAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9uLXNhbGUgcHJpY2UgYmFzZWQgb24gdGhlIHByZXZpb3VzIHByaWNlIGFuZCB0aGUgY3VycmVudCBwcmljZVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc2lkZXIgYWxsIG5vdyBwcmljZSBhbmQgcmVndWxhciBwcmljZVxyXG4gICAgICAgICAgICAgICAgbGV0IG5vblNhbGVQcmljZVdpdGhUYXggPSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheD8ucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXg/LnByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfHwgc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LnByaWNlLnZhbHVlIC0gc2VsZWN0aW9uLnByaWNlc1dpdGhUYXg/LmJhc2VQcmljZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIG5vbi1zYWxlIHByaWNlIGlmIGl0J3MgbGVzcyB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBpZiAobm9uU2FsZVByaWNlV2l0aFRheCA8PSBzZWxlY3Rpb24ucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFkanVzdGVkUHJpY2VzV2l0aFRheCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhUYXguYmFzZVByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdGlvbi5wcmljZXNXaXRoVGF4LnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0aW9uLnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VWYWx1ZTogbm9uU2FsZVByaWNlV2l0aFRheCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBub24tc2FsZSBwcmljZSBiYXNlZCBvbiB0aGUgcHJldmlvdXMgcHJpY2UgYW5kIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zaWRlciBhbGwgbm93IHByaWNlIGFuZCByZWd1bGFyIHByaWNlXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9uU2FsZVByaWNlV2l0aG91dFRheCA9IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4Py5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheD8ucHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4Py5iYXNlUHJpY2UudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAvLyB8fCBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8ucHJpY2UudmFsdWUgLSBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheD8uYmFzZVByaWNlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbm9uLXNhbGUgcHJpY2UgaWYgaXQncyBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgcHJpY2VcclxuICAgICAgICAgICAgICAgIGlmIChub25TYWxlUHJpY2VXaXRob3V0VGF4IDw9IHNlbGVjdGlvbi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlIC0gcHJldi5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgLSBwcmV2LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0aW9uLnByaWNlc1dpdGhvdXRUYXgucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxlY3Rpb24ucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSAtIHByZXYucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVZhbHVlOiBub25TYWxlUHJpY2VXaXRob3V0VGF4LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnNvbGUubG9nKCdQcm9kdWN0RGV0YWlscyAtIGZldGNoT3B0aW9uUHJpY2VzIHJldHVybnM6ICcsIHNlbGVjdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBbcHJldiwgLi4uc2VsZWN0aW9uc107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZXRjaCBwcm9kdWN0IHByaWNlIGZyb20gc3BlY2lmaWMgb3B0aW9uc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8eyBvcHRpb25FbnRpdHlJZDogbnVtYmVyLCB2YWx1ZUVudGl0eUlkOiBudW1iZXJ9Pn0gb3B0aW9uVmFsdWVJZHNcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcHJpY2VzV2l0aFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSwgcHJpY2VzV2l0aG91dFRheDogeyBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSwgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfSB9PlxyXG4gICAgICovXHJcbiAgICBhc3luYyBmZXRjaE9wdGlvblByaWNlKG9wdGlvblZhbHVlSWRzKSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25WYWx1ZUlkcyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5mZXRjaE9wdGlvblByaWNlQ2FjaGVbY2FjaGVLZXldKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY29udGV4dC5ncmFwaFFMVG9rZW59YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICgkcHJvZHVjdElkOiBJbnQhLCAkb3B0aW9uVmFsdWVJZHM6IFtPcHRpb25WYWx1ZUlkIV0sICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QoZW50aXR5SWQ6ICRwcm9kdWN0SWQsIG9wdGlvblZhbHVlSWRzOiAkb3B0aW9uVmFsdWVJZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzV2l0aFRheDogcHJpY2VzKGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZSwgaW5jbHVkZVRheDogdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUHJpY2VGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXNXaXRob3V0VGF4OiBwcmljZXMoY3VycmVuY3lDb2RlOiAkY3VycmVuY3lDb2RlLCBpbmNsdWRlVGF4OiBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUHJpY2VGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgUHJpY2VGaWVsZHMgb24gUHJpY2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuYWN0aXZlX2N1cnJlbmN5X2NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogdGhpcy5wcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlSWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2VDYWNoZVtjYWNoZUtleV0gPSByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2hPcHRpb25QcmljZUNhY2hlW2NhY2hlS2V5XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgdG9vbHRpcHMgdG8gdGhlIGNvcnJlc3BvbmRpbmcgc2hvd24gb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsVGl0bGVcclxuICAgICAqIEBwYXJhbSB7eyBbb3B0aW9uSWQ6IG51bWJlcl06IHsgdG9vbHRpcDogc3RyaW5nLCB2YWx1ZVRvb2x0aXBzOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9IH19IHRvb2x0aXBzXHJcbiAgICAgKiBAcGFyYW0ge3sgW29wdGlvbklkOiBudW1iZXJdOiB7IFt2YWx1ZUlkOiBudW1iZXJdOiBzdHJpbmcgfSB9fSB0b29sdGlwSGVhZGluZ3NcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2hvd09wdGlvbklkcyBvcHRpb24gaWRzIHRvIHNob3cgdG9vbHRpcHNcclxuICAgICAqL1xyXG4gICAgc2hvd09wdGlvblRvb2x0aXBzKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFRpdGxlLCB0b29sdGlwcywgdG9vbHRpcEhlYWRpbmdzLCBzaG93T3B0aW9uSWRzKSB7XHJcbiAgICAgICAgLy8gRGlzcGxheSB0b29sdGlwXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9vbHRpcHMpLmZvckVhY2goKFtvcHRpb25JZCwgeyB0b29sdGlwLCB2YWx1ZVRvb2x0aXBzIH1dKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghc2hvd09wdGlvbklkcy5pbmNsdWRlcyhOdW1iZXIob3B0aW9uSWQpKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJG9wdGlvbiA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXWApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblRvb2x0aXBUZW1wbGF0ZS5yZXBsYWNlKCc8JXRvb2x0aXAlPicsIHRvb2x0aXApKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQnLCBvcHRpb25JZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJG9wdGlvbi5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkPVwiJHtvcHRpb25JZH1cIl1gKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbGFiZWwgPSAkb3B0aW9uLmZpbmQoJ2xhYmVsJykuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGxhYmVsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbGFiZWwuYWZ0ZXIoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLnByZXBlbmQoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZVRvb2x0aXBzKS5mb3JFYWNoKChbdmFsdWVJZCwgdmFsdWVUb29sdGlwXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJG9wdGlvbi5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b29sdGlwID0gJCh0aGlzLm9wdGlvblZhbHVlVG9vbHRpcFRlbXBsYXRlLnJlcGxhY2UoJzwldG9vbHRpcCU+JywgdmFsdWVUb29sdGlwKSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkb3B0aW9uLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAkdmFsdWUuYWZ0ZXIoJHRvb2x0aXApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gaWYgb25seSAxIG9wdGlvbiBzaG93biBhdCBjdXJyZW50IHN0ZXAsXHJcbiAgICAgICAgLy8gdGhlbiBtb3ZlIGl0cyB0b29sdGlwIHRvIHRoZSBtb2RhbCB0aXRsZVxyXG4gICAgICAgIGlmIChzaG93T3B0aW9uSWRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCAkdG9vbHRpcCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tdG9vbHRpcC1pZD1cIiR7c2hvd09wdGlvbklkc1swXX1cIl1gKTtcclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsVGl0bGUuYXBwZW5kKCR0b29sdGlwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpc3BsYXkgdG9vbHRpcCBoZWFkaW5nXHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModG9vbHRpcEhlYWRpbmdzKVxyXG4gICAgICAgICAgICAuZmlsdGVyKChbb3B0aW9uSWRdKSA9PiBzaG93T3B0aW9uSWRzLmluY2x1ZGVzKE51bWJlcihvcHRpb25JZCkpKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoW29wdGlvbklkLCB2YWx1ZVRvb2x0aXBIZWFkaW5nc10pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZVRvb2x0aXBIZWFkaW5ncykuZm9yRWFjaCgoW3ZhbHVlSWQsIHZhbHVlVG9vbHRpcEhlYWRpbmddKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHZhbHVlID0gJG9wdGlvbi5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkdG9vbHRpcEhlYWRpbmcgPSAkKHRoaXMub3B0aW9uVmFsdWVUb29sdGlwSGVhZGluZ1RlbXBsYXRlLnJlcGxhY2UoJzwlaGVhZGluZyU+JywgdmFsdWVUb29sdGlwSGVhZGluZykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXRvb2x0aXAtaGVhZGluZy1pZCcsIGAke29wdGlvbklkfS0ke3ZhbHVlSWR9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi10b29sdGlwLWhlYWRpbmctaWQ9XCIke29wdGlvbklkfS0ke3ZhbHVlSWR9XCJdYCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkdG9vbHRpcEhlYWRpbmcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIG9wdGlvbnMgYW5kIGRpc3BsYXkgY29udGludWUgYnV0dG9uIGlmIG5lY2Vzc2FyeS5cclxuICAgICAqIFN0b3AgYXV0byB1cGRhdGUgdGhlIG1vZGlmaWVycyB2aWV3IHVudGlsIHRoZSBjb250aW51ZSBidXR0b24gaXMgY2xpY2tlZC5cclxuICAgICAqXHJcbiAgICAgKiBDb250aW51ZSBidXR0b24gaXMgc2hvd24gaWYgYW55IG9mIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gICAgICogLSBvcHRpb25zIHRoYXQgaGFzIGRlZmF1bHQgdmFsdWVcclxuICAgICAqIC0gY2hlY2tib3ggb3B0aW9uc1xyXG4gICAgICogLSBvcHRpb25hbCBzZWxlY3Qgb3B0aW9uc1xyXG4gICAgICogLSBvcHRpb25hbCBkYXRlIHNlbGVjdCBvcHRpb25zXHJcbiAgICAgKiAtIGZpbGUgaW5wdXRcclxuICAgICAqIC0gbW9yZSB0aGFuIDEgb3B0aW9uIGFyZSBzaG93biBhdCB0aGUgc2FtZSB0aW1lXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBzaG93T3B0aW9uSWRzIHNob3cgb3B0aW9uIGlkc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxDb250aW51ZVxyXG4gICAgICovXHJcbiAgICBwb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMoc2hvd09wdGlvbklkcywgJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsQ29udGludWUpIHtcclxuICAgICAgICBjb25zdCBzaG93bk9wdGlvbnMgPSB0aGlzLnByb2R1Y3RPcHRpb25zLmZpbHRlcigoeyBpZCB9KSA9PiBzaG93T3B0aW9uSWRzLmluY2x1ZGVzKGlkKSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIG9wdGlvbnMgdGhhdCBoYXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcHJlZmlsbCwgc2VsZWN0ZWRfZGF0ZSwgdmFsdWVzIH0pID0+XHJcbiAgICAgICAgICAgICAgICBwcmVmaWxsIHx8XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZF9kYXRlICYmIChzZWxlY3RlZF9kYXRlLmRheSB8fCBzZWxlY3RlZF9kYXRlLm1vbnRoIHx8IHNlbGVjdGVkX2RhdGUueWVhcikgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlcz8uZmluZCgoeyBzZWxlY3RlZCB9KSA9PiBzZWxlY3RlZCkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjaGVja2JveCB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBjaGVja2JveE9wdGlvbnMgPSBzaG93bk9wdGlvbnNcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBub1ZhbHVlLCB2YWx1ZSB9KSA9PiBub1ZhbHVlIHx8IHZhbHVlKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZmlsZSB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBmaWxlT3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHBhcnRpYWwgfSkgPT4gcGFydGlhbCA9PT0gJ2lucHV0LWZpbGUnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZGF0ZSB0eXBlIG9wdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBkYXRlT3B0aW9ucyA9IHNob3duT3B0aW9uc1xyXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHBhcnRpYWwgfSkgPT4gcGFydGlhbCA9PT0gJ2RhdGUnKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZHJvcGRvd24gdHlwZSBvcHRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcmVxdWlyZWQsIHBhcnRpYWwgfSkgPT4gIXJlcXVpcmVkICYmIHBhcnRpYWwgPT09ICdzZXQtc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRleHQgLyBtdWx0aWxpbmUgLyBudW1iZXIgb3B0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHRleHRPcHRpb25zID0gc2hvd25PcHRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcGFydGlhbCB9KSA9PiBwYXJ0aWFsID09PSAnaW5wdXQtdGV4dCcgfHwgcGFydGlhbCA9PT0gJ3RleHRhcmVhJyB8fCBwYXJ0aWFsID09PSAnaW5wdXQtbnVtYmVycycpO1xyXG5cclxuICAgICAgICBpZiAoc2hvd09wdGlvbklkcy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgIHx8IGRlZmF1bHRPcHRpb25zLmxlbmd0aCA+IDAgfHwgY2hlY2tib3hPcHRpb25zLmxlbmd0aCA+IDAgfHwgZmlsZU9wdGlvbnMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICB8fCBkYXRlT3B0aW9ucy5sZW5ndGggPiAwIHx8IGRyb3Bkb3duT3B0aW9ucy5sZW5ndGggPiAwIHx8IHRleHRPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gc2hvdyBjb250aW51ZSBidXR0b25cclxuICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsQ29udGludWUuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBhdXRvIHVwZGF0ZSB0aGUgbW9kaWZpZXJzIHZpZXcgdW50aWwgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgICAgIHRoaXMubWFudWFsVXBkYXRlTW9kaWZpZXJzVmlldyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBkZWZhdWx0IHZhbHVlcyB0byB0aGUgc2hvd24gb3B0aW9uc1xyXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9ucy5mb3JFYWNoKCh7XHJcbiAgICAgICAgICAgICAgICBpZCwgcHJlZmlsbCwgc2VsZWN0ZWRfZGF0ZSwgdmFsdWVzLFxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUlkID0gdmFsdWVzPy5maW5kKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKT8uaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZCgnc2VsZWN0JykuZmlsdGVyKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1gKS52YWwodmFsdWVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKS5maWx0ZXIoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt2YWx1ZT1cIiR7dmFsdWVJZH1cIl1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByZWZpbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpLmZpbHRlcihgW25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdYCkudmFsKHByZWZpbGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZF9kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkX2RhdGUuZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgc2VsZWN0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dW2RheV1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS5kYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRfZGF0ZS5tb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVttb250aF1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS5tb250aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZF9kYXRlLnllYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBzZWxlY3RbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1beWVhcl1cIl1gKS52YWwoc2VsZWN0ZWRfZGF0ZS55ZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgZGVmYXVsdCB2YWx1ZXMgdG8gdGhlIHNob3duIGNoZWNrYm94IG9wdGlvbnNcclxuICAgICAgICAgICAgY2hlY2tib3hPcHRpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgICAgIGlkLCBjaGVja2VkLCB2YWx1ZSwgbm9WYWx1ZSxcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJoaWRkZW5cIl1gKS52YWwodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgaW5wdXRbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1bdHlwZT1cImNoZWNrYm94XCJdYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYGlucHV0W25hbWU9XCJhdHRyaWJ1dGVbJHtpZH1dXCJdW3R5cGU9XCJoaWRkZW5cIl1gKS52YWwobm9WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBpbnB1dFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXVt0eXBlPVwiY2hlY2tib3hcIl1gKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1hcmsgZmlsZSBpbnB1dCwgZGF0ZSBpbnB1dCwgZHJvcGRvd24gc2VsZWN0LCB0ZXh0IGlucHV0IGFzIHNob3duXHJcbiAgICAgICAgICAgIFsuLi5maWxlT3B0aW9ucywgLi4uZGF0ZU9wdGlvbnMsIC4uLmRyb3Bkb3duT3B0aW9ucywgLi4udGV4dE9wdGlvbnNdLmZvckVhY2goKHsgaWQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJG1vZGlmaWVyc01vZGFsT3B0aW9ucy5maW5kKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl0sIFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVtkYXldXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1bbW9udGhdXCJdLCBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1beWVhcl1cIl1gKS5hdHRyKCdkYXRhLWZpZWxkLXNob3duJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlTaG93T3B0aW9uUHJpY2VzUHJlbG9hZGVyKCRtb2RpZmllcnNNb2RhbE9wdGlvbnMsICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLCBzaG93T3B0aW9uSWRzKSB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBwcmVsb2FkZXI6IHRydWUgfTtcclxuICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgY29uc3QgcHJpY2VUZXh0ID0gbXVzdGFjaGUucmVuZGVyKHRoaXMub3B0aW9uUHJpY2VQbGFpblRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgY29uc3Qgc3VidG90YWxIdG1sID0gbXVzdGFjaGUucmVuZGVyKHRoaXMuc3VidG90YWxUZW1wbGF0ZSwgcGFyYW1zLCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG5cclxuICAgICAgICBzaG93T3B0aW9uSWRzLmZvckVhY2gob3B0aW9uSWQgPT4ge1xyXG4gICAgICAgICAgICAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAuZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtaWQ9XCIke29wdGlvbklkfVwiXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV1gKVxyXG4gICAgICAgICAgICAgICAgLmVhY2goKF9pLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSBOdW1iZXIoJHZhbHVlLmF0dHIoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWUnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZUlkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByaWNlID0gJChwcmljZUh0bWwpLmF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnLCBgJHtvcHRpb25JZH0tJHt2YWx1ZUlkfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmlzKCdvcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBhbHJlYWR5IGhhcyBwcmljZSBkaXNwbGF5ZWQgYmVmb3JlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHZhbHVlLmRhdGEoJ3ByaWNlSHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnLCAkdmFsdWUudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR2YWx1ZS50ZXh0KGAkeyR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKX0gJHtwcmljZVRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkb2xkID0gJHZhbHVlLmZpbmQoYFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkPVwiJHtvcHRpb25JZH0tJHt2YWx1ZUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG9sZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb2xkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHBsYWNlaG9sZGVyID0gJHZhbHVlLmZpbmQoJ1tkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLXBsYWNlaG9sZGVyXScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBsYWNlaG9sZGVyLmh0bWwoJHByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsLmh0bWwoc3VidG90YWxIdG1sKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3BsYXkgcHJpY2VzIHRvIGNvcnJlc3BvbmRpbmcgb3B0aW9ucyBhbmQgb3B0aW9uIHZhbHVlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsU3VidG90YWxcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gc2hvd09wdGlvbklkcyBvcHRpb24gaWRzIHRvIHNob3cgcHJpY2VzXHJcbiAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YVxyXG4gICAgICogQHBhcmFtIHt7IFtvcHRpb25JZDogbnVtYmVyXTogeyBbdmFsdWVJZDogbnVtYmVyXTogbnVtYmVyIH0gfX0gbm9uZVNhbGVzIG9wdGlvbiB2YWx1ZXMgd2l0aCBub24tc2FsZSBwcmljZXNcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZVVwZGF0ZVN1YnRvdGFsPWZhbHNlXSBpZ25vcmUgdXBkYXRlIHN1YnRvdGFsXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNob3dPcHRpb25QcmljZXMoJG1vZGlmaWVyc01vZGFsT3B0aW9ucywgJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHNob3dPcHRpb25JZHMsIGZvcm1EYXRhLCBub25lU2FsZXMsIGlnbm9yZVVwZGF0ZVN1YnRvdGFsID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBbc2V0dGluZ3MsIFtwcmV2LCAuLi5zZWxlY3Rpb25zXV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hTZXR0aW5ncygpLFxyXG4gICAgICAgICAgICB0aGlzLmZldGNoT3B0aW9uUHJpY2VzKFxyXG4gICAgICAgICAgICAgICAgc2hvd09wdGlvbklkcy5tYXAoX2lkID0+IHRoaXMucHJvZHVjdE9wdGlvbnMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gX2lkKSksXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd1ByaWNlID0gdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dQcmljZUZyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnR4dFByaWNlRnJlZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93UHJpY2VaZXJvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0UHJpY2UodmFsdWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFByaWNlKHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZWxlY3Rpb25zLmZvckVhY2goKHtcclxuICAgICAgICAgICAgb3B0aW9uSWQsIHZhbHVlSWQsIGFkanVzdGVkUHJpY2VzV2l0aFRheCwgYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4LFxyXG4gICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnRVgnID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheFZhbHVlOiBhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXg6IHNob3dQcmljZShhZGp1c3RlZFByaWNlc1dpdGhUYXg/LnByaWNlPy52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheFZhbHVlOiAoYWRqdXN0ZWRQcmljZXNXaXRoVGF4Py5ub25TYWxlUHJpY2VWYWx1ZSA/IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyB0aGlzLmZvcm1hdFByaWNlKGFkanVzdGVkUHJpY2VzV2l0aFRheD8ubm9uU2FsZVByaWNlVmFsdWUsIHRydWUpIDogJycpLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0VGF4OiBzaG93UHJpY2UoYWRqdXN0ZWRQcmljZXNXaXRob3V0VGF4Py5wcmljZT8udmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogKGFkanVzdGVkUHJpY2VzV2l0aG91dFRheD8ubm9uU2FsZVByaWNlVmFsdWUgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IChhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/Lm5vblNhbGVQcmljZVZhbHVlLCB0cnVlKSA6ICcnKSxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyYW1zLnByaWNlV2l0aFRheCB8fCBwYXJhbXMucHJpY2VXaXRob3V0VGF4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvdmVycmlkZSBub24tc2FsZSBwcmljZSBmb3Igb3B0aW9uIHZhbHVlcyBpZiBpdCBpcyBhcHBlYXJzIGluIGN1c3RvbSBmaWVsZCBgX19Abm9uc2FsZWBcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBpZiBpdCdzIGhpZ2hlciB0aGFuIHRoZSBjdXJyZW50IHByaWNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub25TYWxlID0gbm9uZVNhbGVzW29wdGlvbklkXT8uW3ZhbHVlSWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vblNhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGNoYW5nZWROb25TYWxlID0gbm9uU2FsZSAqIHNldHRpbmdzLmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVZhbHVlID0gc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyBhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXg/LnByaWNlPy52YWx1ZSA6IGFkanVzdGVkUHJpY2VzV2l0aFRheD8ucHJpY2U/LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNoYW5nZWROb25TYWxlID4gcHJpY2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4VmFsdWU6IGV4Y2hhbmdlZE5vblNhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aFRheDogdGhpcy5mb3JtYXRQcmljZShleGNoYW5nZWROb25TYWxlLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0lOQycgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlV2l0aG91dFRheFZhbHVlOiBleGNoYW5nZWROb25TYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXg6IHRoaXMuZm9ybWF0UHJpY2UoZXhjaGFuZ2VkTm9uU2FsZSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVRlbXBsYXRlLCBwYXJhbXMsIG51bGwsIFsnPCUnLCAnJT4nXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZVRleHQgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5vcHRpb25QcmljZVBsYWluVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcmljZSA9ICQocHJpY2VIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uLXByaWNlLWlkJywgYCR7b3B0aW9uSWR9LSR7dmFsdWVJZH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRvcHRpb24gPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLWlkPVwiJHtvcHRpb25JZH1cIl1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR2YWx1ZSA9ICRvcHRpb24uZmluZChgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke3ZhbHVlSWR9XCJdYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnb3B0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUuZGF0YSgnb3JpZ2luYWxUZXh0JywgJHZhbHVlLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS50ZXh0KGAkeyR2YWx1ZS5kYXRhKCdvcmlnaW5hbFRleHQnKX0gJHtwcmljZVRleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmRhdGEoJ3ByaWNlSHRtbCcsIHByaWNlSHRtbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR2YWx1ZS5maW5kKGBbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbi1wcmljZS1pZD1cIiR7b3B0aW9uSWR9LSR7dmFsdWVJZH1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGxhY2Vob2xkZXIgPSAkdmFsdWUuZmluZCgnW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtcGxhY2Vob2xkZXJdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRwbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwbGFjZWhvbGRlci5odG1sKCRwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlLmFwcGVuZCgkcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTaG93IHN1YnRvdGFsIGNhbGN1bGF0ZWQgZnJvbSBhbGwgc2VsZWN0ZWQgb3B0aW9ucyBmb3IgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGlmICghaWdub3JlVXBkYXRlU3VidG90YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9uU3VidG90YWwoJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHByZXYsIHNldHRpbmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwbGF5IHN1YnRvdGFsIGZvciB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsXHJcbiAgICAgKiBAcGFyYW0ge3tcclxuICAgICAqICAgcHJpY2VzV2l0aFRheDoge1xyXG4gICAgICogICAgIHByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgYmFzZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0sXHJcbiAgICAgKiAgICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfCBudWxsLFxyXG4gICAgICogICB9LFxyXG4gICAgICogICBwcmljZXNXaXRob3V0VGF4OiB7XHJcbiAgICAgKiAgICAgcHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgICBiYXNlUHJpY2U6IHsgdmFsdWU6IG51bWJlciwgY3VycmVuY3lDb2RlOiBzdHJpbmcgfSxcclxuICAgICAqICAgc2FsZVByaWNlOiB7IHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5Q29kZTogc3RyaW5nIH0gfCBudWxsLFxyXG4gICAgICogfX0gcHJvZHVjdFxyXG4gICAgICogQHBhcmFtIHt7IHRheDogeyBwZHA6IG51bWJlciB9IH19IHNldHRpbmdzXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBzaG93T3B0aW9uU3VidG90YWwoJG1vZGlmaWVyc01vZGFsU3VidG90YWwsIHByb2R1Y3QsIHNldHRpbmdzKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdHh0U3VidG90YWw6IHRoaXMuY29udGV4dC50eHRTdWJ0b3RhbCxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogJycsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3QucHJpY2VzV2l0aFRheD8ucHJpY2UgfHwgcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4Py5wcmljZSkge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2V0dGluZ3MudGF4LnBkcCAhPT0gJ0VYJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aFRheDogdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhUYXgucHJpY2UudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRoVGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRoVGF4OiBwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRoVGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIC4uLihzZXR0aW5ncy50YXgucGRwICE9PSAnSU5DJyA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXgucHJpY2UudmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZTogcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LmJhc2VQcmljZS52YWx1ZSA+IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5wcmljZS52YWx1ZSA/IHByb2R1Y3QucHJpY2VzV2l0aG91dFRheC5iYXNlUHJpY2UudmFsdWUgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VXaXRob3V0VGF4OiBwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlID4gcHJvZHVjdC5wcmljZXNXaXRob3V0VGF4LnByaWNlLnZhbHVlID8gdGhpcy5mb3JtYXRQcmljZShwcm9kdWN0LnByaWNlc1dpdGhvdXRUYXguYmFzZVByaWNlLnZhbHVlKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IHN1bW1hcnkgb2Ygc2VsZWN0ZWQgb3B0aW9ucyBiZWZvcmUgYWRkaW5nIHRvIGNhcnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJG1vZGlmaWVyc01vZGFsT3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFN1bW1hcnlcclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbFxyXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRtb2RpZmllcnNNb2RhbFRpdGxlXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGFkZFRvQ2FydFdyYXBwZXJcclxuICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZWxvYWRlclxyXG4gICAgICovXHJcbiAgICBzaG93U3VtbWFyeSgkbW9kaWZpZXJzTW9kYWxPcHRpb25zLCAkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5LCAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbCwgJG1vZGlmaWVyc01vZGFsVGl0bGUsICRhZGRUb0NhcnRXcmFwcGVyLCBmb3JtRGF0YSwgcHJlbG9hZGVyID0gZmFsc2UpIHtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxUaXRsZS5odG1sKHRoaXMuY29udGV4dC50eHRSZXZpZXdTZWxlY3Rpb25zKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9ICFwcmVsb2FkZXJcclxuICAgICAgICAgICAgPyAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKClcclxuICAgICAgICAgICAgOiBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdWJ0b3RhbFRlbXBsYXRlLCB7IHByZWxvYWRlciB9LCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgIGNvbnN0ICRzdWJ0b3RhbCA9ICQoc3VidG90YWxIdG1sKS5hdHRyKCdkYXRhLWV5ZXZhLW1vZGlmaWVycy1tb2RhbC1jb21wbGV0ZS1zdWJ0b3RhbCcsICcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheVN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bZGF5XWApO1xyXG4gICAgICAgICAgICBjb25zdCBtb250aFN0ciA9IGZvcm1EYXRhLmdldChgYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1bbW9udGhdYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHllYXJTdHIgPSBmb3JtRGF0YS5nZXQoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dW3llYXJdYCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF5U3RyIHx8IG1vbnRoU3RyIHx8IHllYXJTdHIpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUoYCR7eWVhclN0cn0tJHttb250aFN0cn0tJHtkYXlTdHJ9YCkudG9Mb2NhbGVEYXRlU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU6IGAke3llYXJTdHJ9LSR7bW9udGhTdHJ9LSR7ZGF5U3RyfWAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVTdHIgPSBmb3JtRGF0YS5nZXRBbGwoYGF0dHJpYnV0ZVske29wdGlvbi5pZH1dYCkuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlU3RyIHx8IHZhbHVlU3RyID09PSAnMCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZVN0ciBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVN0ci5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb3B0aW9uLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlU3RyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlSWQgPSB2YWx1ZVN0ciA/IE51bWJlcih2YWx1ZVN0cikgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCBpZiBpdCBpcyBjaGVja2JveCBhbmQgbm90IGNoZWNrZWRcclxuICAgICAgICAgICAgaWYgKG9wdGlvbi5ub1ZhbHVlICYmIG9wdGlvbi5ub1ZhbHVlID09PSB2YWx1ZUlkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUxhYmVsID0gb3B0aW9uLnZhbHVlcz8uZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gdmFsdWVJZCk/LmxhYmVsXHJcbiAgICAgICAgICAgICAgICB8fCAob3B0aW9uLnZhbHVlID09PSB2YWx1ZUlkID8gb3B0aW9uLmxhYmVsIDogdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlSHRtbCA9ICRtb2RpZmllcnNNb2RhbE9wdGlvbnMuZmluZChgW2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQ9XCIke29wdGlvbi5pZH0tJHt2YWx1ZUlkfVwiXWApXHJcbiAgICAgICAgICAgICAgICAuZmlyc3QoKS5jbG9uZSgpLnJlbW92ZUF0dHIoJ2RhdGEtZXlldmEtcHJvZHVjdC1vcHRpb24tcHJpY2UtaWQnKVswXT8ub3V0ZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxQcmljZUh0bWwgPSAkbW9kaWZpZXJzTW9kYWxPcHRpb25zLmZpbmQoYHNlbGVjdFtuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uLmlkfV1cIl0gb3B0aW9uW3ZhbHVlPVwiJHt2YWx1ZUlkfVwiXWApLmRhdGEoJ3ByaWNlSHRtbCcpO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG9wdGlvbi5kaXNwbGF5X25hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVMYWJlbCB8fCB2YWx1ZVN0cixcclxuICAgICAgICAgICAgICAgIHByaWNlSHRtbDogcHJpY2VIdG1sIHx8IG9wdGlvbkVsUHJpY2VIdG1sLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VtbWFyeUh0bWwgPSBtdXN0YWNoZS5yZW5kZXIodGhpcy5zdW1tYXJ5VGVtcGxhdGUsIHsgb3B0aW9ucyB9LCBudWxsLCBbJzwlJywgJyU+J10pO1xyXG4gICAgICAgICRtb2RpZmllcnNNb2RhbFN1bW1hcnkuaHRtbChzdW1tYXJ5SHRtbCk7XHJcblxyXG4gICAgICAgIC8vIEluc2VydCBzdWJ0b3RhbCB0byB0byBhZGQgdG8gY2FydCB3cmFwcGVyIGFuZCBzaG93IGl0XHJcbiAgICAgICAgJGFkZFRvQ2FydFdyYXBwZXIuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWNvbXBsZXRlLXN1YnRvdGFsXScpLnJlbW92ZSgpO1xyXG4gICAgICAgICRhZGRUb0NhcnRXcmFwcGVyLmZpbmQodGhpcy5hZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IpLnByZXBlbmQoJHN1YnRvdGFsKTtcclxuICAgICAgICAkYWRkVG9DYXJ0V3JhcHBlci5zaG93KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2VdXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aG91dF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRob3V0X3RheC5jdXJyZW5jeVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2UudGF4X2xhYmVsXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRob3V0X3RheF1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmN1cnJlbmN5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGEucHJpY2Uud2l0aF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRoX3RheC5mb3JtYXR0ZWRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLnByaWNlLndpdGhfdGF4LnZhbHVlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS53aXRoX3RheC5jdXJyZW5jeVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhLnByaWNlLnNhbGVfcHJpY2Vfd2l0aF90YXhdXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZS5zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC52YWx1ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2Uuc2FsZV9wcmljZV93aXRoX3RheC5jdXJyZW5jeVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsID0gJGZvcm0uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpO1xyXG4gICAgICAgIGNvbnN0ICRtb2RpZmllcnNNb2RhbFN1YnRvdGFsID0gJHByb2R1Y3RPcHRpb25zRWwuZmluZCgnW2RhdGEtZXlldmEtbW9kaWZpZXJzLW1vZGFsLWZvb3Rlci1zdWJ0b3RhbF0nKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdHh0U3VidG90YWw6IHRoaXMuY29udGV4dC50eHRTdWJ0b3RhbCxcclxuICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhUYXg6ICcnLFxyXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogJycsXHJcbiAgICAgICAgICAgIHByaWNlV2l0aG91dFRheDogJycsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEucHJpY2UpIHtcclxuICAgICAgICAgICAgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgLi4uKGRhdGEucHJpY2Uud2l0aF90YXggPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4VmFsdWU6IGRhdGEucHJpY2Uud2l0aF90YXgudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2VXaXRoVGF4OiBkYXRhLnByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCxcclxuICAgICAgICAgICAgICAgIH0gOiB7fSksXHJcbiAgICAgICAgICAgICAgICAuLi4oZGF0YS5wcmljZS53aXRob3V0X3RheCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXhWYWx1ZTogZGF0YS5wcmljZS53aXRob3V0X3RheC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IGRhdGEucHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkLFxyXG4gICAgICAgICAgICAgICAgfSA6IHt9KSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YnRvdGFsSHRtbCA9IG11c3RhY2hlLnJlbmRlcih0aGlzLnN1YnRvdGFsVGVtcGxhdGUsIHBhcmFtcywgbnVsbCwgWyc8JScsICclPiddKTtcclxuICAgICAgICAkbW9kaWZpZXJzTW9kYWxTdWJ0b3RhbC5odG1sKHN1YnRvdGFsSHRtbCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXG4gKiBQYXJzZXMgYW4gSVNPIGRhdGUtdGltZSBzdHJpbmcgYW5kIGV4dHJhY3RzIHRoZSBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgZGF0ZS10aW1lIHN0cmluZyB0byBwYXJzZS5cbiAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGV4dHJhY3RlZCBjb21wb25lbnRzLCBvciBgbnVsbGAgaWYgdGhlIGZvcm1hdCBpcyBpbnZhbGlkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlVGltZVN0cmluZyhzdHIpIHtcbiAgICBjb25zdCByZWdleCA9IC9eXFxzKig/Oig/OihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pKXwoPzooXFxkezJ9KS0oXFxkezJ9KSkpPyg/OltUXFxzXSk/KD86KFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSkoPzpcXC5cXGQrKT98KFxcZHsyfSk6KFxcZHsyfSl8KFxcZHsyfSkpP1xccyooPzpafChbKy1dKShcXGR7MSwyfSkoPzo6PyhcXGR7Mn0pKT8pP1xccyokLztcblxuICAgIGNvbnN0IG1hdGNoID0gc3RyLnRyaW0oKS5tYXRjaChyZWdleCk7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgICByZXR1cm4gbnVsbDsgLy8gSW52YWxpZCBmb3JtYXRcbiAgICB9XG5cbiAgICBjb25zdCBbXG4gICAgICAgICxcbiAgICAgICAgeWVhciwgbW9udGgsIGRheSwgLy8gWzFdLCBbMl0sIFszXVxuICAgICAgICBzaG9ydE1vbnRoLCBzaG9ydERheSwgLy8gWzRdLCBbNV1cbiAgICAgICAgaG91ciwgbWludXRlLCBzZWNvbmQsIC8vIFs2XSwgWzddLCBbOF1cbiAgICAgICAgc2hvcnRIb3VyLCBzaG9ydE1pbnV0ZSwgLy8gWzldLCBbMTBdXG4gICAgICAgIHNpbmdsZVRpbWVDb21wb25lbnQsIC8vIFsxMV1cbiAgICAgICAgdHpTaWduLCB0ekhvdXJPZmZzZXQsIHR6TWludXRlT2Zmc2V0LCAvLyBbMTJdLCBbMTNdLCBbMTRdXG4gICAgXSA9IG1hdGNoO1xuXG4gICAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgICAvLyBEYXRlIGNvbXBvbmVudHNcbiAgICBpZiAoeWVhciAmJiBtb250aCAmJiBkYXkpIHtcbiAgICAgICAgcmVzdWx0LnllYXIgPSBwYXJzZUludCh5ZWFyLCAxMCk7XG4gICAgICAgIHJlc3VsdC5tb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XG4gICAgICAgIHJlc3VsdC5kYXkgPSBwYXJzZUludChkYXksIDEwKTtcbiAgICB9IGVsc2UgaWYgKHNob3J0TW9udGggJiYgc2hvcnREYXkpIHtcbiAgICAgICAgcmVzdWx0Lm1vbnRoID0gcGFyc2VJbnQoc2hvcnRNb250aCwgMTApO1xuICAgICAgICByZXN1bHQuZGF5ID0gcGFyc2VJbnQoc2hvcnREYXksIDEwKTtcbiAgICB9XG5cbiAgICAvLyBUaW1lIGNvbXBvbmVudHNcbiAgICBpZiAoaG91ciAhPT0gdW5kZWZpbmVkICYmIG1pbnV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdC5ob3VyID0gcGFyc2VJbnQoaG91ciwgMTApO1xuICAgICAgICByZXN1bHQubWludXRlID0gcGFyc2VJbnQobWludXRlLCAxMCk7XG4gICAgICAgIGlmIChzZWNvbmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50KHNlY29uZCwgMTApO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChzaG9ydEhvdXIgIT09IHVuZGVmaW5lZCAmJiBzaG9ydE1pbnV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdC5ob3VyID0gcGFyc2VJbnQoc2hvcnRIb3VyLCAxMCk7XG4gICAgICAgIHJlc3VsdC5taW51dGUgPSBwYXJzZUludChzaG9ydE1pbnV0ZSwgMTApO1xuICAgIH0gZWxzZSBpZiAoc2luZ2xlVGltZUNvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdC5ob3VyID0gcGFyc2VJbnQoc2luZ2xlVGltZUNvbXBvbmVudCwgMTApO1xuICAgIH1cblxuICAgIC8vIFRpbWV6b25lXG4gICAgaWYgKHR6U2lnbiAmJiB0ekhvdXJPZmZzZXQpIHtcbiAgICAgICAgY29uc3Qgc2lnbiA9IHR6U2lnbiA9PT0gJysnID8gMSA6IC0xO1xuICAgICAgICBjb25zdCB0ekhvdXIgPSBwYXJzZUludCh0ekhvdXJPZmZzZXQsIDEwKTtcbiAgICAgICAgY29uc3QgdHpNaW51dGUgPSB0ek1pbnV0ZU9mZnNldCA/IHBhcnNlSW50KHR6TWludXRlT2Zmc2V0LCAxMCkgOiAwO1xuICAgICAgICByZXN1bHQudGltZXpvbmUgPSBzaWduICogKHR6SG91ciArIHR6TWludXRlIC8gNjApO1xuICAgIH0gZWxzZSBpZiAoc3RyLmluY2x1ZGVzKCdaJykpIHtcbiAgICAgICAgcmVzdWx0LnRpbWV6b25lID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgZGF0ZS10aW1lIHN0cmluZyBpbnRvIGEgRGF0ZSBvYmplY3QgYWRqdXN0ZWQgZm9yIGNvdW50ZG93biBwdXJwb3Nlcy5cbiAqXG4gKiAtIElmIHRoZSBkYXRlLXRpbWUgc3RyaW5nIGRvZXMgbm90IGluY2x1ZGUgYSB5ZWFyLCBtb250aCwgb3IgZGF5LCBpdCBpcyB0cmVhdGVkIGFzIGEgZGFpbHkgY291bnRkb3duLlxuICogICBUaGUgZnVuY3Rpb24gd2lsbCBzZXQgdGhlIGRhdGUgdG8gdG9kYXkgb3Igcm9sbCBvdmVyIHRvIHRoZSBuZXh0IGRheSBpZiB0aGUgdGltZSBoYXMgYWxyZWFkeSBwYXNzZWQuXG4gKiAtIElmIHRoZSBkYXRlLXRpbWUgc3RyaW5nIGRvZXMgbm90IGluY2x1ZGUgYW4gaG91ciwgbWludXRlLCBvciBzZWNvbmQsIHRoZXkgZGVmYXVsdCB0byAwLlxuICogLSBUaGUgZnVuY3Rpb24gYWRqdXN0cyBmb3IgdGhlIHNwZWNpZmllZCB0aW1lem9uZSBvZmZzZXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBkYXRlLXRpbWUgc3RyaW5nIHRvIHBhcnNlLlxuICogQHJldHVybnMge0RhdGV8dW5kZWZpbmVkfSBBIERhdGUgb2JqZWN0IHVzZWQgZm9yIHRoZSBjb3VudGRvd24sIG9yIGB1bmRlZmluZWRgIGlmIHBhcnNpbmcgZmFpbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvdW50ZG93bkRhdGUoc3RyKSB7XG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlRGF0ZVRpbWVTdHJpbmcoc3RyKTtcbiAgICBpZiAoIXBhcnNlZERhdGUpIHJldHVybjtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuICAgIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIHRpbWV6b25lIH0gPSBwYXJzZWREYXRlO1xuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB5ID0geWVhciA/PyBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtID0gbW9udGggPz8gKG5vdy5nZXRNb250aCgpICsgMSk7XG4gICAgY29uc3QgZCA9IGRheSA/PyBub3cuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGggPSBob3VyIHx8IDA7XG4gICAgY29uc3QgbWluID0gbWludXRlIHx8IDA7XG4gICAgY29uc3Qgc2VjID0gc2Vjb25kIHx8IDA7XG5cbiAgICBsZXQgZGF0ZTtcblxuICAgIGlmICh0aW1lem9uZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHV0Y01pbGxpcyA9IERhdGUuVVRDKHksIG0gLSAxLCBkLCBoLCBtaW4sIHNlYykgLSAodGltZXpvbmUgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh1dGNNaWxsaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAoeWVhcikgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICAgICAgaWYgKG1vbnRoKSBkYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7XG4gICAgICAgIGlmIChkYXkpIGRhdGUuc2V0RGF0ZShkYXkpO1xuICAgICAgICBkYXRlLnNldEhvdXJzKGgpO1xuICAgICAgICBkYXRlLnNldE1pbnV0ZXMobWluKTtcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKHNlYyk7XG4gICAgfVxuXG4gICAgaWYgKCF5ZWFyICYmICFtb250aCAmJiAhZGF5KSB7XG4gICAgICAgIC8vIGZvciBkYWlseSBjb3VudGRvd24sIGFkZCAxIGRheSBpZiBkYXRlIGlzIGluIHRoZSBwYXN0XG4gICAgICAgIGlmIChkYXRlIDwgbm93KSB7XG4gICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRlO1xufVxuXG4vKipcbiAqICoqU2FsZUNvdW50ZG93biBTaW5nbGV0b24gT2JqZWN0KipcbiAqXG4gKiBNYW5hZ2VzIGNvdW50ZG93biB0aW1lcnMgZm9yIHNhbGVzIG9yIHByb21vdGlvbmFsIGV2ZW50cyBvbiB5b3VyIHdlYnNpdGUuXG4gKiBJdCBoYW5kbGVzIG11bHRpcGxlIGNvdW50ZG93biBlbGVtZW50cywgdXBkYXRlcyB0aGVtIGluIHJlYWwtdGltZSwgYW5kIG1hbmFnZXMgdmlzaWJpbGl0eSBiYXNlZCBvbiB0aGUgdmlld3BvcnQuXG4gKlxuICogLS0tXG4gKlxuICogKipVc2FnZToqKlxuICpcbiAqICoqMS4gQ29uZmlndXJlIHRoZSBDb3VudGRvd24gKE9wdGlvbmFsKToqKlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHtcbiAqICAgLy8gT3B0aW9uYWwgc2V0dGluZ3NcbiAqICAgZGF0ZURhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkRhdGUnLCAgICAgICAvLyBEYXRhIGF0dHJpYnV0ZSBmb3IgY291bnRkb3duIGRhdGVcbiAqICAgaW5WaWV3cG9ydERhdGFOYW1lOiAnc2FsZUNvdW50ZG93bkluVmlld3BvcnQnLCAvLyBEYXRhIGF0dHJpYnV0ZSBmb3Igdmlld3BvcnQgdmlzaWJpbGl0eVxuICogICBzZWxlY3RvcnM6IHsgLi4uIH0sXG4gKiAgIHRlbXBsYXRlOiAnLi4uJywgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3VzdG9tIEhUTUwgdGVtcGxhdGUgZm9yIHRoZSBjb3VudGRvd25cbiAqICAgaGlkZUNsYXNzOiAnX2hpZGUnLCAgICAgICAgICAgICAgICAgICAgICAvLyBDbGFzcyB0byBoaWRlIGVsZW1lbnRzXG4gKiAgIHNhbGVFbmRDbGFzczogJ19zYWxlRW5kZWQnLCAgICAgICAgICAgICAgLy8gQ2xhc3Mgd2hlbiBzYWxlIGVuZHNcbiAqICAgYWN0aXZlQ2xhc3M6ICdfYWN0aXZlJywgICAgICAgICAgICAgICAgICAvLyBDbGFzcyB3aGVuIGNvdW50ZG93biBpcyBhY3RpdmVcbiAqICAgdHJhbnNsYXRpb25zOiB7XG4gKiAgICAgZW5kX2luOiAnRW5kcyBpbicsXG4gKiAgICAgZGF5OiAnRGF5JyxcbiAqICAgICBkYXlzOiAnRGF5cycsXG4gKiAgICAgaG91cjogJ0hvdXInLFxuICogICAgIGhvdXJzOiAnSG91cnMnLFxuICogICAgIG1pbnV0ZTogJ01pbnV0ZScsXG4gKiAgICAgbWludXRlczogJ01pbnV0ZXMnLFxuICogICAgIHNlY29uZDogJ1NlY29uZCcsXG4gKiAgICAgc2Vjb25kczogJ1NlY29uZHMnLFxuICogICB9LFxuICogICB0eHRTYWxlQ291bnRkb3duSlNPTjogJ3sgXCJ0cmFuc2xhdGlvbnNcIjogeyAuLi4gfSB9JywgLy8gSlNPTiBzdHJpbmcgZm9yIHRyYW5zbGF0aW9uc1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiAqKjIuIEFkZCBDb3VudGRvd24gRWxlbWVudHM6KipcbiAqXG4gKiAtICoqT3B0aW9uIDE6KiogRGlyZWN0bHkgc3BlY2lmeSB0aGUgZGF0ZSB3aGVuIGFkZGluZyB0aGUgZWxlbWVudC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgY29uc3QgJGVsID0gJCgnI2NvdW50ZG93bi1lbGVtZW50Jyk7XG4gKiAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgnMjAyMy0xMi0zMVQyMzo1OTo1OScpO1xuICogICBTYWxlQ291bnRkb3duLmFkZCgkZWwsIGRhdGUpO1xuICogICBgYGBcbiAqXG4gKiAtICoqT3B0aW9uIDI6KiogU2V0IGRhdGEgYXR0cmlidXRlcyBvbiB0aGUgZWxlbWVudCBhbmQgYWRkIGl0LlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBjb25zdCAkZWwgPSAkKCcjY291bnRkb3duLWVsZW1lbnQnKTtcbiAqICAgJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25EYXRlJywgJzIwMjMtMTItMzFUMjM6NTk6NTknKTtcbiAqICAgJGVsLmRhdGEoJ3NhbGVDb3VudGRvd25UcmFuc2xhdGlvbnMnLCB7IGVuZF9pbjogJ0VuZHMgaW4nLCAuLi4gfSk7XG4gKiAgIFNhbGVDb3VudGRvd24uYWRkKCRlbCk7XG4gKiAgIGBgYFxuICpcbiAqIC0tLVxuICpcbiAqICoqTm90ZXM6KipcbiAqXG4gKiAtIFRoZSBjb3VudGRvd24gYXV0b21hdGljYWxseSB1cGRhdGVzIHZpc2libGUgZWxlbWVudHMgaW4gdGhlIHZpZXdwb3J0LlxuICogLSBTdXBwb3J0cyBjdXN0b21pemF0aW9uIHRocm91Z2ggY29uZmlndXJhdGlvbiBhbmQgZGF0YSBhdHRyaWJ1dGVzLlxuICogLSBIYW5kbGVzIGF1dG9tYXRpYyBzdG9wcGluZyB3aGVuIG5vIGVsZW1lbnRzIHJlbWFpbi5cbiAqXG4gKiAtLS1cbiAqXG4gKiAqKkV4YW1wbGU6KipcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiAvLyBJbml0aWFsaXplIGFuZCBjb25maWd1cmVcbiAqIFNhbGVDb3VudGRvd24uY29uZmlndXJlKHtcbiAqICAgdHJhbnNsYXRpb25zOiB7XG4gKiAgICAgZW5kX2luOiAnU2FsZSBlbmRzIGluJyxcbiAqICAgICAvLyBPdGhlciB0cmFuc2xhdGlvbnMuLi5cbiAqICAgfSxcbiAqIH0pO1xuICpcbiAqIC8vIEFkZCBjb3VudGRvd24gZWxlbWVudFxuICogY29uc3QgJGNvdW50ZG93biA9ICQoJyNjb3VudGRvd24nKTtcbiAqIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgnMjAyMy0xMi0zMVQyMzo1OTo1OScpO1xuICogU2FsZUNvdW50ZG93bi5hZGQoJGNvdW50ZG93biwgZW5kRGF0ZSk7XG4gKiBgYGBcbiAqL1xuXG5jb25zdCBTYWxlQ291bnRkb3duID0ge1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgY291bnRkb3duIGVsZW1lbnRzXG4gICAgICogQHR5cGUge1NldDxFbGVtZW50Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGVsZW1lbnRzOiBuZXcgU2V0KCksXG5cbiAgICAvKipcbiAgICAgKiBUaW1lciBpbnRlcnZhbCBJRFxuICAgICAqIEB0eXBlIHtudW1iZXJ8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRpbWVyOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7SW50ZXJzZWN0aW9uT2JzZXJ2ZXJ8bnVsbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9ic2VydmVyOiBudWxsLFxuXG4gICAgLyoqXG4gICAgKiBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBjb3VudGRvd24gZGF0ZVxuICAgICogQHR5cGUge3N0cmluZ31cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgICBkYXRlRGF0YU5hbWU6ICdzYWxlQ291bnRkb3duRGF0ZScsXG5cbiAgICAvKipcbiAgICAgKiBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGluVmlld3BvcnREYXRhTmFtZTogJ3NhbGVDb3VudGRvd25JblZpZXdwb3J0JyxcblxuICAgIC8qKlxuICAgICAqIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIHRyYW5zbGF0aW9ucyBKU09OXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRyYW5zbGF0aW9uc0RhdGFOYW1lOiAnc2FsZUNvdW50ZG93blRyYW5zbGF0aW9ucycsXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RvcnMgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEB0eXBlIHt7ZW5kTGFiZWw6IHN0cmluZywgZGF5OiBzdHJpbmcsIGRheVZhbHVlOiBzdHJpbmcsIGRheUxhYmVsOiBzdHJpbmcsIGhvdXI6IHN0cmluZywgaG91clZhbHVlOiBzdHJpbmcsIGhvdXJMYWJlbDogc3RyaW5nLCBtaW51dGU6IHN0cmluZywgbWludXRlVmFsdWU6IHN0cmluZywgbWludXRlTGFiZWw6IHN0cmluZywgc2Vjb25kOiBzdHJpbmcsIHNlY29uZFZhbHVlOiBzdHJpbmcsIHNlY29uZExhYmVsOiBzdHJpbmd9fVxuICAgICAqL1xuICAgIHNlbGVjdG9yczoge1xuICAgICAgICBlbmRMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLWVuZC1sYWJlbF0nLFxuICAgICAgICBkYXk6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXldJyxcbiAgICAgICAgZGF5VmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktdmFsdWVdJyxcbiAgICAgICAgZGF5TGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1kYXktbGFiZWxdJyxcbiAgICAgICAgaG91cjogJ1tkYXRhLXNhbGUtY291bnRkb3duLWhvdXJdJyxcbiAgICAgICAgaG91clZhbHVlOiAnW2RhdGEtc2FsZS1jb3VudGRvd24taG91ci12YWx1ZV0nLFxuICAgICAgICBob3VyTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLWxhYmVsXScsXG4gICAgICAgIG1pbnV0ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZV0nLFxuICAgICAgICBtaW51dGVWYWx1ZTogJ1tkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS12YWx1ZV0nLFxuICAgICAgICBtaW51dGVMYWJlbDogJ1tkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZS1sYWJlbF0nLFxuICAgICAgICBzZWNvbmQ6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmRdJyxcbiAgICAgICAgc2Vjb25kVmFsdWU6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtdmFsdWVdJyxcbiAgICAgICAgc2Vjb25kTGFiZWw6ICdbZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtbGFiZWxdJyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aSBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3ZnPjx1c2UgaHJlZj1cIiNpY29uLWJhZGdlLXBlcmNlbnRcIj48L3VzZT48L3N2Zz48L2k+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX2VuZFwiIGRhdGEtc2FsZS1jb3VudGRvd24tZW5kLWxhYmVsPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJfZGF5XCIgZGF0YS1zYWxlLWNvdW50ZG93bi1kYXk+PHNwYW4gY2xhc3M9XCJfdmFsdWVcIiBkYXRhLXNhbGUtY291bnRkb3duLWRheS12YWx1ZT48L3NwYW4+PHNwYW4gY2xhc3M9XCJfbGFiZWxcIiBkYXRhLXNhbGUtY291bnRkb3duLWRheS1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9ob3VyXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1ob3VyLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24taG91ci1sYWJlbD48L3NwYW4+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIl9taW51dGVcIiBkYXRhLXNhbGUtY291bnRkb3duLW1pbnV0ZT48c3BhbiBjbGFzcz1cIl92YWx1ZVwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLXZhbHVlPjwvc3Bhbj48c3BhbiBjbGFzcz1cIl9sYWJlbFwiIGRhdGEtc2FsZS1jb3VudGRvd24tbWludXRlLWxhYmVsPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiX3NlY29uZFwiIGRhdGEtc2FsZS1jb3VudGRvd24tc2Vjb25kPjxzcGFuIGNsYXNzPVwiX3ZhbHVlXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtdmFsdWU+PC9zcGFuPjxzcGFuIGNsYXNzPVwiX2xhYmVsXCIgZGF0YS1zYWxlLWNvdW50ZG93bi1zZWNvbmQtbGFiZWw+PC9zcGFuPjwvc3Bhbj5cbiAgICBgLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSB0byBoaWRlIGVsZW1lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGhpZGVDbGFzczogJ19oaWRlJyxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgdG8gaW5kaWNhdGUgc2FsZSBoYXMgZW5kZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2FsZUVuZENsYXNzOiAnX3NhbGVFbmRlZCcsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHRvIGluZGljYXRlIGFjdGl2ZSBjb3VudGRvd25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWN0aXZlQ2xhc3M6ICdfYWN0aXZlJyxcblxuICAgIC8qKlxuICAgICAqIFRyYW5zbGF0aW9ucyBmb3IgY291bnRkb3duIGxhYmVsc1xuICAgICAqIEB0eXBlIHt7ZW5kX2luOiBzdHJpbmcsIGRheTogc3RyaW5nLCBkYXlzOiBzdHJpbmcsIGhvdXI6IHN0cmluZywgaG91cnM6IHN0cmluZywgbWludXRlOiBzdHJpbmcsIG1pbnV0ZXM6IHN0cmluZywgc2Vjb25kOiBzdHJpbmcsIHNlY29uZHM6IHN0cmluZ319XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgICAgZW5kX2luOiAnRW5kIGluJyxcbiAgICAgICAgZGF5OiAnRGF5JyxcbiAgICAgICAgZGF5czogJ0RheXMnLFxuICAgICAgICBob3VyOiAnSG91cicsXG4gICAgICAgIGhvdXJzOiAnSG91cnMnLFxuICAgICAgICBtaW51dGU6ICdNaW51dGUnLFxuICAgICAgICBtaW51dGVzOiAnTWludXRlcycsXG4gICAgICAgIHNlY29uZDogJ1NlY29uZCcsXG4gICAgICAgIHNlY29uZHM6ICdTZWNvbmRzJyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlIHRoZSBjb3VudGRvd24gc2V0dGluZ3NcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5kYXRlRGF0YU5hbWUgLSBEYXRhIGF0dHJpYnV0ZSBuYW1lIGZvciBjb3VudGRvd24gZGF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmluVmlld3BvcnREYXRhTmFtZSAtIERhdGEgYXR0cmlidXRlIG5hbWUgZm9yIGluIHZpZXdwb3J0IHZpc2liaWxpdHlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5zZWxlY3RvcnMgLSBTZWxlY3RvcnMgZm9yIGNvdW50ZG93biBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5lbmRMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5kYXlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZGF5VmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuZGF5TGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuaG91clxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5ob3VyVmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuaG91ckxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2VsZWN0b3JzLm1pbnV0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5taW51dGVWYWx1ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5taW51dGVMYWJlbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlbGVjdG9ycy5zZWNvbmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuc2Vjb25kVmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZWxlY3RvcnMuc2Vjb25kTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50ZW1wbGF0ZSAtIFRlbXBsYXRlIGZvciBjb3VudGRvd24gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5oaWRlQ2xhc3MgLSBDbGFzcyBuYW1lIHRvIGhpZGUgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zYWxlRW5kQ2xhc3MgLSBDbGFzcyBuYW1lIHRvIGluZGljYXRlIHNhbGUgaGFzIGVuZGVkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYWN0aXZlQ2xhc3MgLSBDbGFzcyBuYW1lIHRvIGluZGljYXRlIGFjdGl2ZSBjb3VudGRvd25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy50cmFuc2xhdGlvbnMgLSBUcmFuc2xhdGlvbnMgZm9yIGNvdW50ZG93biBsYWJlbHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuZW5kX2luXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmRheVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYW5zbGF0aW9ucy5kYXlzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLmhvdXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuaG91cnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMubWludXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLm1pbnV0ZXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmFuc2xhdGlvbnMuc2Vjb25kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhbnNsYXRpb25zLnNlY29uZHNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50eHRTYWxlQ291bnRkb3duSlNPTiAtIEpTT04gc3RyaW5nIGZvciB0cmFuc2xhdGlvbnNcbiAgICAgKi9cbiAgICBjb25maWd1cmUoe1xuICAgICAgICBkYXRlRGF0YU5hbWUsXG4gICAgICAgIGluVmlld3BvcnREYXRhTmFtZSxcbiAgICAgICAgc2VsZWN0b3JzLFxuICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgaGlkZUNsYXNzLFxuICAgICAgICBzYWxlRW5kQ2xhc3MsXG4gICAgICAgIGFjdGl2ZUNsYXNzLFxuICAgICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICAgIHR4dFNhbGVDb3VudGRvd25KU09OLFxuICAgIH0gPSB7fSkge1xuICAgICAgICBpZiAoZGF0ZURhdGFOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVEYXRhTmFtZSA9IGRhdGVEYXRhTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpblZpZXdwb3J0RGF0YU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5WaWV3cG9ydERhdGFOYW1lID0gaW5WaWV3cG9ydERhdGFOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdG9ycykge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RvcnMgPSB7IC4uLnRoaXMuc2VsZWN0b3JzLCAuLi5zZWxlY3RvcnMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpZGVDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5oaWRlQ2xhc3MgPSBoaWRlQ2xhc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2FsZUVuZENsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLnNhbGVFbmRDbGFzcyA9IHNhbGVFbmRDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDbGFzcyA9IGFjdGl2ZUNsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zbGF0aW9ucykge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi50cmFuc2xhdGlvbnMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eHRTYWxlQ291bnRkb3duSlNPTikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZSh0eHRTYWxlQ291bnRkb3duSlNPTik7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnMgPSBPYmplY3Qua2V5cyhqc29uLnRyYW5zbGF0aW9ucykucmVkdWNlKChfdHJhbnMsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG9ydEtleSA9IGtleS5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgICAgICAgICAgX3RyYW5zW3Nob3J0S2V5XSA9IGpzb24udHJhbnNsYXRpb25zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHJhbnM7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7IC4uLnRoaXMudHJhbnNsYXRpb25zLCAuLi50cmFucyB9O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBlbGVtZW50ICYgY29ycmVzcG9uZGluZyBkYXRlIHRvIHRoZSBjb3VudGRvd24gY29sbGVjdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG4gICAgICogQHBhcmFtIHtEYXRlfG51bGx9IGRhdGUgLSBUaGUgY291bnRkb3duIGRhdGUuIElmIG5vdCBwcm92aWRlZCwgaXQgd2lsbCBiZSBleHRyYWN0ZWQgZnJvbSB0aGUgZGF0YSBhdHRyaWJ1dGUgYGRhdGEtc2FsZS1jb3VudGRvd24tZGF0ZWBcbiAgICAgKi9cbiAgICBhZGQoJGVsLCBkYXRlID0gbnVsbCkge1xuICAgICAgICBsZXQgdmFsaWREYXRlID0gZGF0ZSB8fCAkZWwuZGF0YSh0aGlzLmRhdGVEYXRhTmFtZSk7XG4gICAgICAgIGlmICh2YWxpZERhdGUgJiYgdHlwZW9mIHZhbGlkRGF0ZSA9PT0gJ3N0cmluZycpIHZhbGlkRGF0ZSA9IHBhcnNlQ291bnRkb3duRGF0ZSh2YWxpZERhdGUpO1xuICAgICAgICBpZiAoIXZhbGlkRGF0ZSkgcmV0dXJuO1xuICAgICAgICAkZWwuZGF0YSh0aGlzLmRhdGVEYXRhTmFtZSwgdmFsaWREYXRlKS5odG1sKHRoaXMudGVtcGxhdGUpXG4gICAgICAgICAgICAuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLmVsZW1lbnRzLmFkZChlbCkpO1xuICAgICAgICB0aGlzLm9ic2VydmUoJGVsKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlIHRoZSBlbGVtZW50IGZvciBpbiB2aWV3cG9ydCB2aXNpYmlsaXR5IGNoZWNrXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb2JzZXJ2ZSgkZWwpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIC8vIGFzc3VtZSBlbGVtZW50IGlzIGluIHZpZXdwb3J0IGlmIEludGVyc2VjdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICRlbC5kYXRhKHRoaXMuaW5WaWV3cG9ydERhdGFOYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgLy8gY3JlYXRlIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlIGlmIG5vdCBhbHJlYWR5IGNyZWF0ZWRcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJChlbnRyeS50YXJnZXQpLmRhdGEodGhpcy5pblZpZXdwb3J0RGF0YU5hbWUsIGVudHJ5LmlzSW50ZXJzZWN0aW5nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzSW50ZXJzZWN0aW5nJywgZW50cnkudGFyZ2V0LCBlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcm9vdDogbnVsbCwgLy8gRGVmYXVsdHMgdG8gdmlld3BvcnRcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAsIC8vIENhbGxiYWNrIGlzIHRyaWdnZXJlZCB3aGVuIGFueSBwYXJ0IG9mIHRoZSBlbGVtZW50IGlzIHZpc2libGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmdldCgpLmZvckVhY2goZWwgPT4gdGhpcy5vYnNlcnZlci5vYnNlcnZlKGVsKSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3Agb2JzZXJ2aW5nIHRoZSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdW5vYnNlcnZlKGVsKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndW5vYnNlcnZlJywgZWwpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBlbGVtZW50IGlzIGluIHZpZXdwb3J0IGFuZCB2aXNpYmxlXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaXNWaXNpYmxlSW5WaWV3cG9ydCgkZWwpIHtcbiAgICAgICAgcmV0dXJuICRlbC5kYXRhKHRoaXMuaW5WaWV3cG9ydERhdGFOYW1lKSAmJiAkZWwuaXMoJzp2aXNpYmxlJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHN0YXJ0IHJ1bm5pbmcgY291bnRkb3duIGV2ZXJ5IHNlY29uZFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbWVyICYmIHRoaXMuZWxlbWVudHMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5ydW4oKSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogc3RvcCBjb3VudGRvd25cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc3RvcCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0b3AgY291bnRkb3duJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHJ1bm5pbmcgY291bnRkb3duIHByb2Nlc3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGFuZCBzdG9wIGlmIGVsZW1lbnQgbm8gbG9uZ2VyIGV4aXN0cyBpbiBET01cbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhlbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmRlbGV0ZShlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy51bm9ic2VydmUoZWwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gJGVsLmRhdGEodGhpcy5kYXRlRGF0YU5hbWUpO1xuXG4gICAgICAgICAgICAvLyBzdG9wIGNvdW50ZG93biBpZiBlbGVtZW50IGlzIG5vdCBpbiB2aWV3cG9ydCBvciBub3QgdmlzaWJsZVxuICAgICAgICAgICAgaWYgKCFkYXRlIHx8ICF0aGlzLmlzVmlzaWJsZUluVmlld3BvcnQoJGVsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgaWYgKGRhdGUgPD0gbm93KSB7XG4gICAgICAgICAgICAgICAgLy8gQ291bnQgZG93biBkYXRlIGhhcyBwYXNzZWRcbiAgICAgICAgICAgICAgICAkZWwuYWRkQ2xhc3ModGhpcy5zYWxlRW5kQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZGVsZXRlKGVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHJlbWFpbmluZyB0aW1lIChkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcylcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBkYXRlIC0gbm93O1xuICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgY29uc3QgJGVuZExhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuZW5kTGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJGRheSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmRheSk7XG4gICAgICAgICAgICBjb25zdCAkZGF5VmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5kYXlWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkZGF5TGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5kYXlMYWJlbCk7XG4gICAgICAgICAgICBjb25zdCAkaG91ciA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmhvdXIpO1xuICAgICAgICAgICAgY29uc3QgJGhvdXJWYWx1ZSA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLmhvdXJWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkaG91ckxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMuaG91ckxhYmVsKTtcbiAgICAgICAgICAgIGNvbnN0ICRtaW51dGUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5taW51dGUpO1xuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZVZhbHVlID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMubWludXRlVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgJG1pbnV0ZUxhYmVsID0gJGVsLmZpbmQodGhpcy5zZWxlY3RvcnMubWludXRlTGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgJHNlY29uZCA9ICRlbC5maW5kKHRoaXMuc2VsZWN0b3JzLnNlY29uZCk7XG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kVmFsdWUgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5zZWNvbmRWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCAkc2Vjb25kTGFiZWwgPSAkZWwuZmluZCh0aGlzLnNlbGVjdG9ycy5zZWNvbmRMYWJlbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHsgLi4udGhpcy50cmFuc2xhdGlvbnMsIC4uLiRlbC5kYXRhKHRoaXMudHJhbnNsYXRpb25zRGF0YU5hbWUpIH07XG5cbiAgICAgICAgICAgICRlbC5hZGRDbGFzcyh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICRlbmRMYWJlbC5odG1sKHRyYW5zbGF0aW9ucy5lbmRfaW4pO1xuICAgICAgICAgICAgJGRheVZhbHVlLnRleHQoZGF5cyk7XG4gICAgICAgICAgICAkZGF5TGFiZWwuaHRtbChkYXlzID09PSAxID8gdHJhbnNsYXRpb25zLmRheSA6IHRyYW5zbGF0aW9ucy5kYXlzKTtcbiAgICAgICAgICAgICRkYXkudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDApO1xuICAgICAgICAgICAgJGhvdXJWYWx1ZS50ZXh0KGhvdXJzKTtcbiAgICAgICAgICAgICRob3VyTGFiZWwuaHRtbChob3VycyA9PT0gMSA/IHRyYW5zbGF0aW9ucy5ob3VyIDogdHJhbnNsYXRpb25zLmhvdXJzKTtcbiAgICAgICAgICAgICRob3VyLnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwICYmIGhvdXJzID09PSAwKTtcbiAgICAgICAgICAgICRtaW51dGVWYWx1ZS50ZXh0KG1pbnV0ZXMpO1xuICAgICAgICAgICAgJG1pbnV0ZUxhYmVsLmh0bWwobWludXRlcyA9PT0gMSA/IHRyYW5zbGF0aW9ucy5taW51dGUgOiB0cmFuc2xhdGlvbnMubWludXRlcyk7XG4gICAgICAgICAgICAkbWludXRlLnRvZ2dsZUNsYXNzKHRoaXMuaGlkZUNsYXNzLCBkYXlzID09PSAwICYmIGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDApO1xuICAgICAgICAgICAgJHNlY29uZFZhbHVlLnRleHQoc2Vjb25kcyk7XG4gICAgICAgICAgICAkc2Vjb25kTGFiZWwuaHRtbChzZWNvbmRzID09PSAxID8gdHJhbnNsYXRpb25zLnNlY29uZCA6IHRyYW5zbGF0aW9ucy5zZWNvbmRzKTtcbiAgICAgICAgICAgICRzZWNvbmQudG9nZ2xlQ2xhc3ModGhpcy5oaWRlQ2xhc3MsIGRheXMgPT09IDAgJiYgaG91cnMgPT09IDAgJiYgbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FsZUNvdW50ZG93bjtcbiIsImV4cG9ydCBjb25zdCBhcmlhS2V5Q29kZXMgPSB7XG4gICAgUkVUVVJOOiAxMyxcbiAgICBTUEFDRTogMzIsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbn07XG4iLCJpbXBvcnQgeyBhcmlhS2V5Q29kZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHNldENoZWNrZWRSYWRpb0l0ZW0gPSAoaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHgpID0+IHtcbiAgICBpdGVtQ29sbGVjdGlvbi5lYWNoKChpZHgsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGl0ZW0pO1xuICAgICAgICBpZiAoaWR4ICE9PSBpdGVtSWR4KSB7XG4gICAgICAgICAgICAkaXRlbS5hdHRyKCdhcmlhLWNoZWNrZWQnLCBmYWxzZSkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRpdGVtLmF0dHIoJ2FyaWEtY2hlY2tlZCcsIHRydWUpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAkaXRlbS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbiA9IChsYXN0SXRlbUlkeCwgY3VycmVudElkeCkgPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgY3VycmVudElkeCA+IGxhc3RJdGVtSWR4OiByZXR1cm4gMDtcbiAgICBjYXNlIGN1cnJlbnRJZHggPCAwOiByZXR1cm4gbGFzdEl0ZW1JZHg7XG4gICAgZGVmYXVsdDogcmV0dXJuIGN1cnJlbnRJZHg7XG4gICAgfVxufTtcblxuY29uc3QgaGFuZGxlSXRlbUtleURvd24gPSBpdGVtQ29sbGVjdGlvbiA9PiBlID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGU7XG4gICAgY29uc3QgaXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmluZGV4KGUuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgbGFzdENvbGxlY3Rpb25JdGVtSWR4ID0gaXRlbUNvbGxlY3Rpb24ubGVuZ3RoIC0gMTtcblxuICAgIGlmIChPYmplY3QudmFsdWVzKGFyaWFLZXlDb2RlcykuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgIGNhc2UgYXJpYUtleUNvZGVzLkxFRlQ6XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuVVA6IHtcbiAgICAgICAgY29uc3QgcHJldkl0ZW1JZHggPSBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24obGFzdENvbGxlY3Rpb25JdGVtSWR4LCBpdGVtSWR4IC0gMSk7XG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChwcmV2SXRlbUlkeCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgc2V0Q2hlY2tlZFJhZGlvSXRlbShpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCAtIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuUklHSFQ6XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuRE9XTjoge1xuICAgICAgICBjb25zdCBuZXh0SXRlbUlkeCA9IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbihsYXN0Q29sbGVjdGlvbkl0ZW1JZHgsIGl0ZW1JZHggKyAxKTtcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZ2V0KG5leHRJdGVtSWR4KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4ICsgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgkY29udGFpbmVyLCBpdGVtU2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCAkaXRlbUNvbGxlY3Rpb24gPSAkY29udGFpbmVyLmZpbmQoaXRlbVNlbGVjdG9yKTtcblxuICAgICRjb250YWluZXIub24oJ2tleWRvd24nLCBpdGVtU2VsZWN0b3IsIGhhbmRsZUl0ZW1LZXlEb3duKCRpdGVtQ29sbGVjdGlvbikpO1xufTtcbiIsIi8vIGltcG9ydCBXaXNobGlzdCBmcm9tICcuLi93aXNobGlzdCc7IC8vIHBhcGF0aGVtZXMtZXZldmE6IGRpc2FibGVkXG5pbXBvcnQgeyBpbml0UmFkaW9PcHRpb25zIH0gZnJvbSAnLi9hcmlhJztcblxuY29uc3Qgb3B0aW9uc1R5cGVzTWFwID0ge1xuICAgIElOUFVUX0ZJTEU6ICdpbnB1dC1maWxlJyxcbiAgICBJTlBVVF9URVhUOiAnaW5wdXQtdGV4dCcsXG4gICAgSU5QVVRfTlVNQkVSOiAnaW5wdXQtbnVtYmVyJyxcbiAgICBJTlBVVF9DSEVDS0JPWDogJ2lucHV0LWNoZWNrYm94JyxcbiAgICBURVhUQVJFQTogJ3RleHRhcmVhJyxcbiAgICBEQVRFOiAnZGF0ZScsXG4gICAgU0VUX1NFTEVDVDogJ3NldC1zZWxlY3QnLFxuICAgIFNFVF9SRUNUQU5HTEU6ICdzZXQtcmVjdGFuZ2xlJyxcbiAgICBTRVRfUkFESU86ICdzZXQtcmFkaW8nLFxuICAgIFNXQVRDSDogJ3N3YXRjaCcsXG4gICAgUFJPRFVDVF9MSVNUOiAncHJvZHVjdC1saXN0Jyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25DaGFuZ2VEZWNvcmF0b3IoYXJlRGVmYXVsdE9wdGlvbnNTZXQpIHtcbiAgICByZXR1cm4gKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIGlmIChhcmVEZWZhdWx0T3B0aW9uc1NldCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgLy8gV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpOyAvLyBwYXBhdGhlbWVzLWV2ZXZhOiBkaXNhYmxlZFxuICAgICAgICB0aGlzLmdldFRhYlJlcXVlc3RzKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJykuZWFjaCgoX18sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUodmFsdWUsIHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YXJpYW50RG9tTm9kZSwgdmFyaWFudFR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh2YXJpYW50VHlwZSkge1xuICAgICAgICBjYXNlIG9wdGlvbnNUeXBlc01hcC5TRVRfUkFESU86XG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNXQVRDSDoge1xuICAgICAgICAgICAgaW5pdFJhZGlvT3B0aW9ucygkKHZhcmlhbnREb21Ob2RlKSwgJ1t0eXBlPXJhZGlvXScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93IHJhZGlvIGJ1dHRvbnMgdG8gZ2V0IGRlc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpbml0UmFkaW9BdHRyaWJ1dGVzKCkge1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIHJhZGlvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcmFkaW8gPSAkKHJhZGlvKTtcblxuICAgICAgICAgICAgLy8gT25seSBiaW5kIHRvIGNsaWNrIG9uY2VcbiAgICAgICAgICAgIGlmICgkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAkcmFkaW8ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHJhZGlvLmRhdGEoJ3N0YXRlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScsICRyYWRpby5wcm9wKCdjaGVja2VkJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrRGVmYXVsdE1lc3NhZ2UgPSB0aGlzLmNvbnRleHQub3V0T2ZTdG9ja0RlZmF1bHRNZXNzYWdlO1xuICAgICAgICBsZXQgb3V0T2ZTdG9ja01lc3NhZ2UgPSBkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICAgICAgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke291dE9mU3RvY2tNZXNzYWdlfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke291dE9mU3RvY2tEZWZhdWx0TWVzc2FnZX0pYDtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCBhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdHRySWQgPSBwYXJzZUludCgkYXR0cmlidXRlLmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZScpLCAxMCk7XG5cblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgZnJhZ21lbnQgaWRlbnRpZmllciBpbiBVUkwgcmVxdWVzdGluZyBhIHNwZWNpZmljIHRhYlxuICAgICAqL1xuICAgIGdldFRhYlJlcXVlc3RzKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3RhYi0nKSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgJGFjdGl2ZVRhYiA9ICQoJy50YWJzJykuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApO1xuICAgICAgICAgICAgY29uc3QgJHRhYkNvbnRlbnQgPSAkKGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofWApO1xuXG4gICAgICAgICAgICBpZiAoJGFjdGl2ZVRhYi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJGFjdGl2ZVRhYi5maW5kKCcudGFiJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkdGFiQ29udGVudC5hZGRDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpbmNlICRwcm9kdWN0VmlldyBjYW4gYmUgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgdXNpbmcgcmVuZGVyX3dpdGgsXG4gICAgICogV2UgaGF2ZSB0byByZXRyaWV2ZSB0aGUgcmVzcGVjdGl2ZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtICRzY29wZVxuICAgICAqL1xuICAgIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByaWNlV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJycFdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVNhdmVkOiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLXNlY3Rpb24tLXNhdmluZycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZU5vd0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkd2VpZ2h0OiAkKCcucHJvZHVjdFZpZXctaW5mbyBbZGF0YS1wcm9kdWN0LXdlaWdodF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXG4gICAgICAgICAgICAkYWRkVG9DYXJ0OiAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRhZGRUb0NhcnRGb3JtOiAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHdpc2hsaXN0VmFyaWF0aW9uOiAkKCdbZGF0YS13aXNobGlzdC1hZGRdIFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHN0b2NrOiB7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tkYXRhLXByb2R1Y3Qtc3RvY2tdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBza3U6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnNrdS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXNrdV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwYzoge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQudXBjLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3QtdXBjXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICR3YWxsZXRCdXR0b25zOiAkKCdbZGF0YS1hZGQtdG8tY2FydC13YWxsZXQtYnV0dG9uc10nLCAkc2NvcGUpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgdGhlIHByaWNpbmcgZWxlbWVudHMgdGhhdCB3aWxsIHNob3cgdXAgb25seSB3aGVuIHRoZSBwcmljZSBleGlzdHMgaW4gQVBJXG4gICAgICogQHBhcmFtIHZpZXdNb2RlbFxuICAgICAqL1xuICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVWaWV3KGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKGRhdGEucHJpY2UgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgZGF0YS5wcmljZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS53ZWlnaHQgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2VpZ2h0Lmh0bWwoZGF0YS53ZWlnaHQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB2YXJpYXRpb25faWQgaWYgaXQgZXhpc3RzIGZvciBhZGRpbmcgdG8gd2lzaGxpc3RcbiAgICAgICAgaWYgKGRhdGEudmFyaWFudElkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdpc2hsaXN0VmFyaWF0aW9uLnZhbChkYXRhLnZhcmlhbnRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBTS1UgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLnNrdSkge1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dChkYXRhLnNrdSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFVQQyBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEudXBjKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KGRhdGEudXBjKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgc3RvY2sgdmlldyBpcyBvbiAoQ1Agc2V0dGluZ3MpXG4gICAgICAgIGlmICh2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5sZW5ndGggJiYgdHlwZW9mIGRhdGEuc3RvY2sgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RvY2sgY29udGFpbmVyIGlzIGhpZGRlbiwgc2hvd1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSk7XG4gICAgICAgIHRoaXMudXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXcoZGF0YSk7XG5cbiAgICAgICAgLy8gSWYgQnVsayBQcmljaW5nIHJlbmRlcmVkIEhUTUwgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLmJ1bGtfZGlzY291bnRfcmF0ZXMgJiYgY29udGVudCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKGNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRUb0NhcnRXcmFwcGVyID0gJCgnI2FkZC10by1jYXJ0LXdyYXBwZXInKTtcblxuICAgICAgICBpZiAoYWRkVG9DYXJ0V3JhcHBlci5pcygnOmhpZGRlbicpICYmIGRhdGEucHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgIGFkZFRvQ2FydFdyYXBwZXIuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xuICAgICAgICB0aGlzLmNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBwcmljZS5wcmljZV9yYW5nZSA/XG4gICAgICAgICAgICAgICAgYCR7cHJpY2UucHJpY2VfcmFuZ2UubWluLndpdGhfdGF4LmZvcm1hdHRlZH0gLSAke3ByaWNlLnByaWNlX3JhbmdlLm1heC53aXRoX3RheC5mb3JtYXR0ZWR9YFxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aF90YXguZm9ybWF0dGVkO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhUYXguJHNwYW4uaHRtbCh1cGRhdGVkUHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBwcmljZS5wcmljZV9yYW5nZSA/XG4gICAgICAgICAgICAgICAgYCR7cHJpY2UucHJpY2VfcmFuZ2UubWluLndpdGhvdXRfdGF4LmZvcm1hdHRlZH0gLSAke3ByaWNlLnByaWNlX3JhbmdlLm1heC53aXRob3V0X3RheC5mb3JtYXR0ZWR9YFxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVdpdGhvdXRUYXguJHNwYW4uaHRtbCh1cGRhdGVkUHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYW4gbWVzc2FnZSBib3ggaWYgYSBtZXNzYWdlIGlzIHBhc3NlZFxuICAgICAqIEhpZGUgdGhlIGJveCBpZiB0aGUgbWVzc2FnZSBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVdhbGxldEJ1dHRvbnNWaWV3KGRhdGEpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICBjb25zdCBpc1ZhbGlkRm9ybSA9IHZpZXdNb2RlbC4kYWRkVG9DYXJ0Rm9ybVswXS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkoaXNWYWxpZEZvcm0gJiYgZGF0YS5wdXJjaGFzYWJsZSAmJiBkYXRhLmluc3RvY2spO1xuICAgIH1cblxuICAgIHRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KHNob3VsZFNob3cpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIGlmIChzaG91bGRTaG93KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdhbGxldEJ1dHRvbnMuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3YWxsZXRCdXR0b25zLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XG5cbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIGlzIHRoZSBzZWxlY3RlZCBvcHRpb24gaW4gYSBzZWxlY3QgZHJvcGRvd24sIHNlbGVjdCB0aGUgZmlyc3Qgb3B0aW9uIChNRVJDLTYzOSlcbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSArIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBQcm9kdWN0RGV0YWlsc0Jhc2UsIHsgb3B0aW9uQ2hhbmdlRGVjb3JhdG9yIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtYmFzZSc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSAnLi4vLi4vcGFwYXRoZW1lcy9leWV2YS9pbWFnZS1nYWxsZXJ5JzsgLy8gcGFwYXRoZW1lcy1leWV2YSBlZGl0ZWRcbmltcG9ydCBtb2RhbEZhY3RvcnksIHsgYWxlcnRNb2RhbCwgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IHsgaXNFbXB0eSwgaXNQbGFpbk9iamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7IG5vcm1hbGl6ZUZvcm1EYXRhIH0gZnJvbSAnLi91dGlscy9hcGknO1xuaW1wb3J0IHsgaXNCcm93c2VySUUsIGNvbnZlcnRJbnRvQXJyYXkgfSBmcm9tICcuL3V0aWxzL2llLWhlbHBlcnMnO1xuaW1wb3J0IGJhbm5lclV0aWxzIGZyb20gJy4vdXRpbHMvYmFubmVyLXV0aWxzJztcbmltcG9ydCBjdXJyZW5jeVNlbGVjdG9yIGZyb20gJy4uL2dsb2JhbC9jdXJyZW5jeS1zZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCRzY29wZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdIC5sb2FkaW5nT3ZlcmxheScpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeSA9IG5ldyBJbWFnZUdhbGxlcnkoJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeV0nLCB0aGlzLiRzY29wZSkpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbml0KCk7XG4gICAgICAgIHRoaXMubGlzdGVuUXVhbnRpdHlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy4kc3dhdGNoT3B0aW9uTWVzc2FnZSA9ICQoJy5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2UnKTtcbiAgICAgICAgdGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2UgPSB7fTtcbiAgICAgICAgdGhpcy5zd2F0Y2hHcm91cElkTGlzdCA9ICQoJ1tpZF49XCJzd2F0Y2hHcm91cFwiXScpLm1hcCgoXywgZ3JvdXApID0+ICQoZ3JvdXApLmF0dHIoJ2lkJykpO1xuICAgICAgICB0aGlzLnN0b3JlSW5pdE1lc3NhZ2VzRm9yU3dhdGNoZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRlU2VsZWN0b3IoKTtcblxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsICRzY29wZSk7XG5cbiAgICAgICAgaWYgKCRmb3JtWzBdLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybS5maW5kKCdpbnB1dCNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnKSxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xuICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0U3dhdGNoR3JvdXAgPSAkKCdbaWQqPVwiYXR0cmlidXRlX3N3YXRjaFwiXScsICRmb3JtKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RTd2F0Y2hMYWJlbHMgPSAkKCcuZm9ybS1vcHRpb24tc3dhdGNoJywgJGZvcm0pO1xuICAgICAgICBjb25zdCBwbGFjZVN3YXRjaExhYmVsSW1hZ2UgPSAoXywgbGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRvcHRpb25JbWFnZSA9ICQoJy5mb3JtLW9wdGlvbi1leHBhbmRlZCcsICQobGFiZWwpKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkltYWdlV2lkdGggPSAkb3B0aW9uSW1hZ2Uub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgY29uc3QgZXh0ZW5kZWRPcHRpb25JbWFnZU9mZnNldExlZnQgPSA1NTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmlnaHQgfSA9IGxhYmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIgPSB3aW5kb3cuc2NyZWVuLndpZHRoIC0gcmlnaHQ7XG4gICAgICAgICAgICBjb25zdCBzaGlmdFZhbHVlID0gb3B0aW9uSW1hZ2VXaWR0aCAtIGVtcHR5U3BhY2VUb1NjcmVlblJpZ2h0Qm9yZGVyO1xuXG4gICAgICAgICAgICBpZiAoZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIgPCAob3B0aW9uSW1hZ2VXaWR0aCArIGV4dGVuZGVkT3B0aW9uSW1hZ2VPZmZzZXRMZWZ0KSkge1xuICAgICAgICAgICAgICAgICRvcHRpb25JbWFnZS5jc3MoJ2xlZnQnLCBgJHtzaGlmdFZhbHVlID4gMCA/IC1zaGlmdFZhbHVlIDogc2hpZnRWYWx1ZX1weGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRUb0NhcnRWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICAkLmVhY2goJHByb2R1Y3RTd2F0Y2hMYWJlbHMsIHBsYWNlU3dhdGNoTGFiZWxJbWFnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjb250ZXh0LnNob3dTd2F0Y2hOYW1lcykge1xuICAgICAgICAgICAgdGhpcy4kc3dhdGNoT3B0aW9uTWVzc2FnZS5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcblxuICAgICAgICAgICAgJHByb2R1Y3RTd2F0Y2hHcm91cC5vbignY2hhbmdlJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzd2F0Y2hHcm91cEVsZW1lbnQgPSB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3dhdGNoTmFtZU9uT3B0aW9uKCQodGFyZ2V0KSwgJChzd2F0Y2hHcm91cEVsZW1lbnQpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkLmVhY2goJHByb2R1Y3RTd2F0Y2hHcm91cCwgKF8sIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzd2F0Y2hHcm91cEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmlzKCc6Y2hlY2tlZCcpKSB0aGlzLnNob3dTd2F0Y2hOYW1lT25PcHRpb24oJChlbGVtZW50KSwgJChzd2F0Y2hHcm91cEVsZW1lbnQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkZm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZFRvQ2FydFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsICRmb3JtWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHByb2R1Y3QgYXR0cmlidXRlcy4gQWxzbyB1cGRhdGUgdGhlIGluaXRpYWwgdmlldyBpbiBjYXNlIGl0ZW1zIGFyZSBvb3NcbiAgICAgICAgLy8gb3IgaGF2ZSBkZWZhdWx0IHZhcmlhbnQgcHJvcGVydGllcyB0aGF0IGNoYW5nZSB0aGUgdmlld1xuICAgICAgICBpZiAoKGlzRW1wdHkocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKSB8fCBoYXNEZWZhdWx0T3B0aW9ucykgJiYgaGFzT3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkNoYW5nZUNhbGxiYWNrID0gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yLmNhbGwodGhpcywgaGFzRGVmYXVsdE9wdGlvbnMpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKCRwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIG9wdGlvbkNoYW5nZUNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LnNob3coKTtcblxuICAgICAgICB0aGlzLnByZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3ByZXZpZXdNb2RhbCcpWzBdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQWRkVG9DYXJ0VmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gPiAuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMubnVtYmVyc09ubHkodmFsKTtcbiAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnByb2R1Y3RRdWFudGl0eUVycm9yTWVzc2FnZSxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFkZFRvQ2FydFZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICBzdG9yZUluaXRNZXNzYWdlc0ZvclN3YXRjaGVzKCkge1xuICAgICAgICBpZiAodGhpcy5zd2F0Y2hHcm91cElkTGlzdC5sZW5ndGggJiYgaXNFbXB0eSh0aGlzLnN3YXRjaEluaXRNZXNzYWdlU3RvcmFnZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc3dhdGNoR3JvdXBJZExpc3QuZWFjaCgoXywgc3dhdGNoR3JvdXBJZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2Vbc3dhdGNoR3JvdXBJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2F0Y2hJbml0TWVzc2FnZVN0b3JhZ2Vbc3dhdGNoR3JvdXBJZF0gPSAkKGAjJHtzd2F0Y2hHcm91cElkfSB+IC5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2VgKS50ZXh0KCkudHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQoKSB7XG4gICAgICAgIGNvbnN0IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgICQuZWFjaCgkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhbnRzbGlzdCA9IGNvbnZlcnRJbnRvQXJyYXkodmFsdWUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCA9IGlucHQgPT4gaW5wdC5kYXRhc2V0LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSA9PT0gY2hlY2tlZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0KVswXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmNoaWxkcmVuWzBdIDogY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpZZXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJykgOiAndW5zYXRpc2ZpZWQnO1xuICAgICAgICBjb25zdCB2aWV3ID0gJCgnLnByb2R1Y3RWaWV3Jyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RWYXJpYW50KSB7XG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9IHByb2R1Y3RWYXJpYW50ID09PSAndW5zYXRpc2ZpZWQnID8gJycgOiBwcm9kdWN0VmFyaWFudDtcbiAgICAgICAgICAgIGlmICh2aWV3LmF0dHIoJ2RhdGEtZXZlbnQtdHlwZScpKSB7XG4gICAgICAgICAgICAgICAgdmlldy5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSB2aWV3LmZpbmQoJy5wcm9kdWN0Vmlldy10aXRsZScpWzBdLmlubmVyVGV4dC5yZXBsYWNlKC9cIi9nLCAnXFxcXCQmJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9ICQoYFtkYXRhLW5hbWU9XCIke3Byb2R1Y3ROYW1lfVwiXWApO1xuICAgICAgICAgICAgICAgIGNhcmQuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgd2luZG93IGlzIGJlaW5nIHJ1biBpbnNpZGUgYW4gaWZyYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNSdW5uaW5nSW5JZnJhbWUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgcHJvZHVjdCBvcHRpb25zIGNoYW5nZXNcbiAgICAgKlxuICAgICAqL1xuICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICAvLyBEbyBub3QgdHJpZ2dlciBhbiBhamF4IHJlcXVlc3QgaWYgaXQncyBhIGZpbGUgb3IgaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhwcm9kdWN0QXR0cmlidXRlc0RhdGEsIHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICAgICAgYmFubmVyVXRpbHMuZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkZm9ybSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkY29udGV4dCA9ICRmb3JtLnBhcmVudHMoJy5wcm9kdWN0VmlldycpLmZpbmQoJy5wcm9kdWN0Vmlldy1pbmZvJyk7XG4gICAgICAgICAgICAgICAgbW9kYWxGYWN0b3J5KCdbZGF0YS1yZXZlYWxdJywgeyAkY29udGV4dCB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ29uUHJvZHVjdE9wdGlvbnNDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGlmIHRoaXMgc2V0dGluZyBpcyBlbmFibGVkIGluIFBhZ2UgQnVpbGRlclxuICAgICAqIHNob3cgbmFtZSBmb3Igc3dhdGNoIG9wdGlvblxuICAgICAqL1xuICAgIHNob3dTd2F0Y2hOYW1lT25PcHRpb24oJHN3YXRjaCwgJHN3YXRjaEdyb3VwKSB7XG4gICAgICAgIGNvbnN0IHN3YXRjaE5hbWUgPSAkc3dhdGNoLmF0dHIoJ2FyaWEtbGFiZWwnKTtcbiAgICAgICAgY29uc3QgYWN0aXZlU3dhdGNoR3JvdXBJZCA9ICRzd2F0Y2hHcm91cC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknKTtcbiAgICAgICAgY29uc3QgJHN3YXRjaE9wdGlvbk1lc3NhZ2UgPSAkKGAjJHthY3RpdmVTd2F0Y2hHcm91cElkfSB+IC5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2VgKTtcblxuICAgICAgICAkKCdbZGF0YS1vcHRpb24tdmFsdWVdJywgJHN3YXRjaEdyb3VwKS50ZXh0KHN3YXRjaE5hbWUpO1xuICAgICAgICAkc3dhdGNoT3B0aW9uTWVzc2FnZS50ZXh0KGAke3RoaXMuc3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlW2FjdGl2ZVN3YXRjaEdyb3VwSWRdfSAke3N3YXRjaE5hbWV9YCk7XG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJHN3YXRjaE9wdGlvbk1lc3NhZ2UsICdzdGF0dXMnLCAnYXNzZXJ0aXZlJyk7XG4gICAgfVxuXG4gICAgc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGVsZW1lbnQsIHJvbGVUeXBlLCBhcmlhTGl2ZVN0YXR1cykge1xuICAgICAgICAkZWxlbWVudC5hdHRyKHtcbiAgICAgICAgICAgIHJvbGU6IHJvbGVUeXBlLFxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IGFyaWFMaXZlU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICEhJGVsZW1lbnQucGFyZW50cygnLnF1aWNrVmlldycpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlKSB7XG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KGltYWdlKSkge1xuICAgICAgICAgICAgY29uc3Qgem9vbUltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQuem9vbVNpemUgfSxcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggem9vbSBzaXplIHVzZWQgZm9yIGRhdGEtem9vbS1pbWFnZSBpblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3Qtdmlldy5odG1sXG5cbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcblxuICAgICAgICAgICAgICAgICAgICBBbHNvIG5vdGUgdGhhdCBnZXRTcmNzZXQgcmV0dXJucyBhIHNpbXBsZSBzcmMgc3RyaW5nIHdoZW4gZXhhY3RseSBvbmUgc2l6ZSBpcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YSxcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC5wcm9kdWN0U2l6ZSB9LFxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgIFNob3VsZCBtYXRjaCBmYWxsYmFjayBpbWFnZSBzaXplIHVzZWQgZm9yIHRoZSBtYWluIHByb2R1Y3QgaW1hZ2UgaW5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LXZpZXcuaHRtbFxuXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG5cbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KGltYWdlLmRhdGEpO1xuXG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5zZXRBbHRlcm5hdGVJbWFnZSh7XG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgICAgIHpvb21JbWFnZVVybCxcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnJlc3RvcmVJbWFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgYWN0aW9uIHdoZW4gdGhlIHNob3BwZXIgY2xpY2tzIG9uICsgLyAtIGZvciBxdWFudGl0eVxuICAgICAqXG4gICAgICovXG4gICAgbGlzdGVuUXVhbnRpdHlDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGJ1dHRvbicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9IHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQ7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1heCA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG5cbiAgICAgICAgICAgIGxldCBxdHkgPSBmb3Jtcy5udW1iZXJzT25seSgkaW5wdXQudmFsKCkpID8gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCkgOiBxdWFudGl0eU1pbjtcbiAgICAgICAgICAgIC8vIElmIGFjdGlvbiBpcyBpbmNyZW1lbnRpbmdcbiAgICAgICAgICAgIGlmICgkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJykge1xuICAgICAgICAgICAgICAgIHF0eSA9IGZvcm1zLnZhbGlkYXRlSW5jcmVhc2VBZ2FpbnN0TWF4Qm91bmRhcnkocXR5LCBxdWFudGl0eU1heCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF0eSA+IDEpIHtcbiAgICAgICAgICAgICAgICBxdHkgPSBmb3Jtcy52YWxpZGF0ZURlY3JlYXNlQWdhaW5zdE1pbkJvdW5kYXJ5KHF0eSwgcXVhbnRpdHlNaW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB1cGRhdGUgaGlkZGVuIGlucHV0XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0LnZhbChxdHkpO1xuICAgICAgICAgICAgLy8gdXBkYXRlIHRleHRcbiAgICAgICAgICAgIHZpZXdNb2RlbC5xdWFudGl0eS4kdGV4dC50ZXh0KHF0eSk7XG4gICAgICAgICAgICAvLyBwZXJmb3JtIHZhbGlkYXRpb24gYWZ0ZXIgdXBkYXRpbmcgcHJvZHVjdCBxdWFudGl0eVxuICAgICAgICAgICAgdGhpcy5hZGRUb0NhcnRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFByZXZlbnQgdHJpZ2dlcmluZyBxdWFudGl0eSBjaGFuZ2Ugd2hlbiBwcmVzc2luZyBlbnRlclxuICAgICAgICB0aGlzLiRzY29wZS5vbigna2V5cHJlc3MnLCAnLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgZXZlbnQud2hpY2gsIHRoZW4gdXNlIGV2ZW50LndoaWNoLCBvdGhlcndpc2UgdXNlIGV2ZW50LmtleUNvZGVcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xuICAgICAgICAgICAgaWYgKHggPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2tleXVwJywgJy5mb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQWRkIGEgcHJvZHVjdCB0byBjYXJ0XG4gICAgICpcbiAgICAgKi9cbiAgICBhZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRCdG4gPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJChldmVudC50YXJnZXQpKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkYWRkVG9DYXJ0QnRuLnZhbCgpO1xuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcblxuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1BZGQobm9ybWFsaXplRm9ybURhdGEobmV3IEZvcm1EYXRhKGZvcm0pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbmN5U2VsZWN0b3IocmVzcG9uc2UuZGF0YS5jYXJ0X2lkKTtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xuXG4gICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaGVja0lzUXVpY2tWaWV3Q2hpbGQoJGFkZFRvQ2FydEJ0bikpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnRNb2RhbCgpLiRwcmVNb2RhbEZvY3VzZWRFbCA9ICRhZGRUb0NhcnRCdG47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3BlbiBwcmV2aWV3IG1vZGFsIGFuZCB1cGRhdGUgY29udGVudFxuICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwub3BlbigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5BcHBsZVBheVNlc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJG1vZGFsLmFkZENsYXNzKCdhcHBsZS1wYXktc3VwcG9ydGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNRdWlja1ZpZXdDaGlsZCgkYWRkVG9DYXJ0QnRuKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkYWRkVG9DYXJ0QnRuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydENvbnRlbnQodGhpcy5wcmV2aWV3TW9kYWwsIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gbW9kYWwsIHJlZGlyZWN0IHRvIHRoZSBjYXJ0IHBhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8ocmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHwgdGhpcy5jb250ZXh0LnVybHMuY2FydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGFkZFRvQ2FydEJ0bi5uZXh0KCksICdzdGF0dXMnLCAncG9saXRlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhcnQgY29udGVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXJ0SXRlbUlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZVxuICAgICAqL1xuICAgIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9wcmV2aWV3JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCBvbkNvbXBsZXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmdJbklmcmFtZSgpICYmICF3aW5kb3cuaWZyYW1lU2RrKSB7XG4gICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhcnQgY29udGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RhbH0gbW9kYWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICB1cGRhdGVDYXJ0Q29udGVudChtb2RhbCwgY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLmdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxuICAgICAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCAkY2FydFF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCBtb2RhbC4kY29udGVudCk7XG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJGNhcnRRdWFudGl0eS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgJHByb21vdGlvbkJhbm5lciA9ICQoJ1tkYXRhLXByb21vdGlvbi1iYW5uZXJdJyk7XG4gICAgICAgICAgICBjb25zdCAkYmFja1RvU2hvcHBwaW5nQnRuID0gJCgnLnByZXZpZXdDYXJ0Q2hlY2tvdXQgPiBbZGF0YS1yZXZlYWwtY2xvc2VdJyk7XG4gICAgICAgICAgICBjb25zdCAkbW9kYWxDbG9zZUJ0biA9ICQoJyNwcmV2aWV3TW9kYWwgPiAubW9kYWwtY2xvc2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGJhbm5lclVwZGF0ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RDb250YWluZXIgPSAkKCcjbWFpbi1jb250ZW50ID4gLmNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgJHByb2R1Y3RDb250YWluZXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXkgcGRwLXVwZGF0ZVwiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICQoJy5sb2FkaW5nT3ZlcmxheS5wZHAtdXBkYXRlJywgJHByb2R1Y3RDb250YWluZXIpLnNob3coKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkY2FydENvdW50ZXIuYWRkQ2xhc3MoJ2NhcnQtY291bnQtLXBvc2l0aXZlJyk7XG4gICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRwcm9tb3Rpb25CYW5uZXIubGVuZ3RoICYmICRiYWNrVG9TaG9wcHBpbmdCdG4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJGJhY2tUb1Nob3BwcGluZ0J0bi5vbignY2xpY2snLCBiYW5uZXJVcGRhdGVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAkbW9kYWxDbG9zZUJ0bi5vbignY2xpY2snLCBiYW5uZXJVcGRhdGVIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RJbWFnZShkYXRhLmltYWdlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKSB7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhSXRlbXMgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgICAgIGNvbnN0IHByb2R1Y3REZXRhaWxzID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBmb3JtRGF0YUl0ZW0gb2YgZm9ybURhdGFJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZm9ybURhdGFJdGVtO1xuXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3Byb2R1Y3RfaWQnKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMucHJvZHVjdElkID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdxdHlbXScpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5xdWFudGl0eSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lLm1hdGNoKC9hdHRyaWJ1dGUvKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RPcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbklkOiBOdW1iZXIobmFtZS5tYXRjaCgvXFxkKy9nKVswXSksXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMub3B0aW9uU2VsZWN0aW9ucyA9IHByb2R1Y3REZXRhaWxzPy5vcHRpb25TZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgID8gWy4uLnByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMsIHByb2R1Y3RPcHRpb25dXG4gICAgICAgICAgICAgICAgICAgIDogW3Byb2R1Y3RPcHRpb25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ29uUHJvZHVjdFVwZGF0ZScsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHsgcHJvZHVjdERldGFpbHMgfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGVTZWxlY3RvcigpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUuZWFjaCgoaSwgc2NvcGUpID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURheXMoZGF0ZU9wdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoU2VsZWN0b3IgPSBkYXRlT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lJD1cIlttb250aF1cIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlTZWxlY3RvciA9IGRhdGVPcHRpb24ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWUkPVwiW2RheV1cIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyU2VsZWN0b3IgPSBkYXRlT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lJD1cIlt5ZWFyXVwiXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQobW9udGhTZWxlY3Rvci52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludCh5ZWFyU2VsZWN0b3IudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5c0luTW9udGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc05hTihtb250aCkgJiYgIU51bWJlci5pc05hTih5ZWFyKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gKCh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwKSA/IDI5IDogMjg7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiBjYXNlIDY6IGNhc2UgOTogY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gMzA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoID0gMzE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXkgPSAyOTsgZGF5IDw9IDMxOyBkYXkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkYXlTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGBvcHRpb25bdmFsdWU9XCIke2RheX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheSA8PSBkYXlzSW5Nb250aCAmJiAhb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlTZWxlY3Rvci5vcHRpb25zLmFkZChuZXcgT3B0aW9uKGRheSwgZGF5KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF5ID4gZGF5c0luTW9udGggJiYgb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoc2NvcGUpLm9uKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVPcHRpb24gPSBlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPWRhdGVdJyk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGVPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGF5cyhkYXRlT3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2NvcGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9ZGF0ZV0nKS5mb3JFYWNoKChkYXRlT3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF5cyhkYXRlT3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgc3RyaW5nIHZhbHVlcyBmcm9tIHRoZSBmb3JtRGF0YVxuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtID0gZm9ybURhdGEgPT4ge1xuICAgIGNvbnN0IHJlcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAodmFsICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJlcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk2NzI5OTIvYWpheC1yZXF1ZXN0LWZhaWxzLXdoZW4tc2VuZGluZy1mb3JtZGF0YS1pbmNsdWRpbmctZW1wdHktZmlsZS1pbnB1dC1pbi1zYWZhcmlcbiAqIFNhZmFyaSBicm93c2VyIHdpdGgganF1ZXJ5IDMuMy4xIGhhcyBhbiBpc3N1ZSB1cGxvYWRpbmcgZW1wdHkgZmlsZSBwYXJhbWV0ZXJzLiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYW55IGVtcHR5IGZpbGVzIGZyb20gdGhlIGZvcm0gcGFyYW1zXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0gPSBmb3JtRGF0YSA9PiB7XG4gICAgY29uc3QgcmVzID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHZhbCBpbnN0YW5jZW9mIEZpbGUpIHx8IHZhbC5uYW1lIHx8IHZhbC5zaXplKSB7XG4gICAgICAgICAgICAgICAgcmVzLmFwcGVuZChrZXksIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBlbXB0eSBzdHJpbmcgdmFsdWVzIGFuZCBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtRGF0YVxuICogQHBhcmFtIGZvcm1EYXRhOiBGb3JtRGF0YSBvYmplY3RcbiAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplRm9ybURhdGEgPSBmb3JtRGF0YSA9PiBmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkpO1xuIiwiaW1wb3J0IHsgaXNCcm93c2VySUUgfSBmcm9tICcuL2llLWhlbHBlcnMnO1xuXG5jb25zdCBiYW5uZXJVdGlscyA9IHtcbiAgICBkaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudDogKHByb2R1Y3RBdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGlmICghcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2UgfHwgaXNCcm93c2VySUUpIHJldHVybjtcblxuICAgICAgICBsZXQgcHJpY2UgPSAwO1xuXG4gICAgICAgIGlmICghcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2UucHJpY2VfcmFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgICAgIHByaWNlID0gcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aG91dF90YXgudmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgICAgIHByaWNlID0gcHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2JpZ2NvbW1lcmNlLnByb2R1Y3RwcmljZWNoYW5nZScsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIGFtb3VudDogcHJpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBiYW5uZXJVdGlscztcbiIsImV4cG9ydCBjb25zdCBpc0Jyb3dzZXJJRSA9ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuXG5leHBvcnQgY29uc3QgY29udmVydEludG9BcnJheSA9IGNvbGxlY3Rpb24gPT4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29sbGVjdGlvbik7XG4iLCJpbXBvcnQgJ2Vhc3l6b29tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VHYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZ2FsbGVyeSkge1xuICAgICAgICB0aGlzLiRtYWluSW1hZ2UgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW5dJyk7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZCA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJyk7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0ge307XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SW1hZ2Vab29tKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpbkltYWdlKGltZ09iaikge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHsgLi4uaW1nT2JqIH07XG5cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgICAgICB0aGlzLnN3YXBNYWluSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBzZXRBbHRlcm5hdGVJbWFnZShpbWdPYmopIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVkSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRJbWFnZSA9IHtcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmw6IHRoaXMuJG1haW5JbWFnZS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmw6IHRoaXMuJG1haW5JbWFnZS5hdHRyKCdkYXRhLXpvb20taW1hZ2UnKSxcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6IHRoaXMuJG1haW5JbWFnZS5maW5kKCdpbWcnKS5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogdGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKGltZ09iaik7XG4gICAgfVxuXG4gICAgcmVzdG9yZUltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZSh0aGlzLnNhdmVkSW1hZ2UpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2F2ZWRJbWFnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdE5ld0ltYWdlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBpbWdPYmogPSB7XG4gICAgICAgICAgICBtYWluSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmwnKSxcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmwnKSxcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgICAgICBtYWluSW1hZ2VBbHQ6ICR0YXJnZXQuY2hpbGRyZW4oKS5maXJzdCgpLmF0dHIoJ2FsdCcpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiRzZWxlY3RhYmxlSW1hZ2VzLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzd2FwTWFpbkltYWdlKCkge1xuICAgICAgICBjb25zdCBpc0Jyb3dzZXJJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ1RyaWRlbnQnKTtcblxuICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuc3dhcChcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybCxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLiRtYWluSW1hZ2UuYXR0cih7XG4gICAgICAgICAgICAnZGF0YS16b29tLWltYWdlJzogdGhpcy5jdXJyZW50SW1hZ2Uuem9vbUltYWdlVXJsLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlTmVzdGVkLmF0dHIoe1xuICAgICAgICAgICAgYWx0OiB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VBbHQsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNCcm93c2VySUUpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrU3R5bGVzSUUgPSB7XG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKCR7dGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlVXJsfSlgLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtb3JpZ2luJzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJ2NvbnRhaW4nLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy4kbWFpbkltYWdlTmVzdGVkLmNzcyhmYWxsYmFja1N0eWxlc0lFKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0ICRpbWFnZUNvbnRhaW5lciA9ICQoJy5wcm9kdWN0Vmlldy1pbWFnZScpO1xuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSAkaW1hZ2VDb250YWluZXIuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gJGltYWdlQ29udGFpbmVyLndpZHRoKCk7XG5cbiAgICAgICAgY29uc3QgJGltYWdlID0gdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLiR6b29tO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSAkaW1hZ2UuaGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gJGltYWdlLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKGhlaWdodCA8IGNvbnRhaW5lckhlaWdodCB8fCB3aWR0aCA8IGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW1hZ2Vab29tKCkge1xuICAgICAgICB0aGlzLmVhc3l6b29tID0gdGhpcy4kbWFpbkltYWdlLmVhc3lab29tKHtcbiAgICAgICAgICAgIG9uU2hvdzogKCkgPT4gdGhpcy5jaGVja0ltYWdlKCksXG4gICAgICAgICAgICBlcnJvck5vdGljZTogJycsXG4gICAgICAgICAgICBsb2FkaW5nTm90aWNlOiAnJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld0ltYWdlLmJpbmQodGhpcykpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9pbmhlcml0c0xvb3NlIiwiY29uc3RydWN0b3IiLCJfc2V0UHJvdG90eXBlT2YiLCJtdXN0YWNoZSIsImNyZWF0ZUZvY3VzVHJhcCIsInRvb2xzIiwiQ29ybmVyc3RvbmVJbWFnZUdhbGxlcnkiLCJERUZBVUxUX1NURVAiLCJJbWFnZUdhbGxlcnlNb2RhbCIsImltYWdlR2FsbGVyeSIsIiRnYWxsZXJ5IiwibW9kYWxUZW1wbGF0ZSIsIiRib2R5IiwiJCIsImNyZWF0ZU1vZGFsIiwiX3Byb3RvIiwiYmluZEV2ZW50cyIsIl90aGlzIiwiZmluZCIsIm9mZiIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRhIiwiY3VycmVudFRhcmdldCIsImltYWdlVXJsIiwiZGF0YSIsImltYWdlU3Jjc2V0Iiwiem9vbUltYWdlVXJsIiwidmlkZW9JZCIsInN0ZXAiLCJjbG9zZXN0IiwiTnVtYmVyIiwic3BsaXQiLCJvcGVuTW9kYWwiLCIkZ2FsbGVyeU1vZGFsIiwiY2xvc2VNb2RhbCIsImtleSIsImlzIiwidGFyZ2V0Iiwic2V0TWFpbkltYWdlIiwic2V0TWFpblZpZGVvIiwidG90YWxTdGVwIiwic2V0TWFpbjM2MCIsInByZXZpb3VzMzYwU3RlcCIsIm5leHQzNjBTdGVwIiwicGxheTM2MCIsInBhdXNlMzYwIiwiZGVzdHJveU1vZGFsIiwicmVtb3ZlIiwiXyRtYWluSW1hZ2VMaW5rJGdldCIsIiRtYWluSW1hZ2VMaW5rIiwiJG1haW5JbWFnZSIsImNsb25lIiwicmVtb3ZlQXR0ciIsImF0dHIiLCJtYWluSW1hZ2VMaW5rRWxlbWVudCIsImdldCIsIm91dGVySFRNTCIsIm5hbWUiLCJ0ZXh0IiwidmlkZW9zTGFiZWwiLCJpbWFnZXMzNjBMYWJlbCIsImltYWdlc0xhYmVsIiwidmlkZW9zIiwibWFwIiwibGkiLCJfJCRmaW5kJGNsb25lJGdldCIsImxpbmtFbGVtZW50IiwiaW1hZ2VzMzYwIiwiXyRlbCRnZXQiLCIkZWwiLCJpbWFnZXMiLCJmaWx0ZXIiLCJfJGEkZ2V0IiwicmVuZGVyIiwiaGlkZSIsImFwcGVuZFRvIiwiaW5pdEltYWdlWm9vbSIsImZvY3VzVHJhcCIsImVzY2FwZURlYWN0aXZhdGVzIiwicmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUiLCJhbGxvd091dHNpZGVDbGljayIsIl90aGlzMiIsIiRsYXN0QWN0aXZlRWxlbWVudCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImFkZENsYXNzIiwiJG1haW5JbWciLCJzaG93IiwicmVtb3ZlQ2xhc3MiLCJhY3RpdmF0ZSIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwiX3RoaXMzIiwiaGlkZU1haW5WaWRlbyIsImhpZGUzNjBVSSIsImRlYWN0aXZhdGUiLCJtYWluSW1hZ2VVcmwiLCJtYWluSW1hZ2VTcmNzZXQiLCJzaG93TWFpbkltYWdlIiwic2V0QWN0aXZlVGh1bWIiLCJzd2FwTWFpbkltYWdlIiwiaGlkZU1haW5JbWFnZSIsIl9pIiwiJGltYWdlQ29udGFpbmVyIiwiZWFzeXpvb20iLCJzd2FwIiwiaXNCcm93c2VySUUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmNsdWRlcyIsImZhbGxiYWNrU3R5bGVzSUUiLCJjc3MiLCJjaGVja0ltYWdlIiwiY29udGFpbmVySGVpZ2h0IiwiaGVpZ2h0IiwiY29udGFpbmVyV2lkdGgiLCJ3aWR0aCIsIiRpbWFnZSIsIiR6b29tIiwiX3RoaXM0IiwiZWFzeVpvb20iLCJvblNob3ciLCJlcnJvck5vdGljZSIsImxvYWRpbmdOb3RpY2UiLCJzaG93TWFpblZpZGVvIiwic3JjIiwic2hvdzM2MFVJIiwic3dhcE1haW4zNjAiLCJzZXQzNjBDdXJyZW50U3RlcCIsImN1cnJlbnRTdGVwIiwidG90YWwiLCJfdGhpczUiLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwzNjAiLCJzZXRJbnRlcnZhbCIsIkNhcmRJbWFnZUdhbGxlcnlNb2RhbCIsIl9JbWFnZUdhbGxlcnlNb2RhbDIiLCIkc2NvcGUiLCJfdGVtcCIsIl90aGlzNiIsIl9yZWYiLCJwcm9kdWN0SWQiLCJncmFwaFFMVG9rZW4iLCJ6b29tU2l6ZSIsInByb2R1Y3RTaXplIiwidGh1bWJTaXplIiwidHh0VmlkZW9zTGFiZWwiLCJ0eHRJbWFnZXMzNjBMYWJlbCIsInR4dEltYWdlc0xhYmVsIiwibG9hZGluZ01vZGFsVGVtcGxhdGUiLCJfcHJvdG8yIiwib3BlbkxvYWRpbmdNb2RhbCIsIl9vcGVuTG9hZGluZ01vZGFsIiwiX2NhbGxlZSIsIl9jb250ZXh0IiwibG9hZE1vZGFsIiwiX2xvYWRNb2RhbCIsIl9jYWxsZWUyIiwibWFpbkltYWdlIiwiX2NvbnRleHQyIiwiZmV0Y2hQcm9kdWN0IiwiaW1hZ2UiLCJpc0RlZmF1bHQiLCJnZXRTcmNzZXQiLCJ1cmxUZW1wbGF0ZSIsInpvb21VcmwiLCJ1cmwiLCJ0aHVtYm5haWxVcmwiLCJhbHRUZXh0IiwidmlkZW8iLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJodG1sIiwiX3RlbXAyIiwiX3RoaXM3IiwiX3JlZjIiLCJfcmVmMiRmaXJzdFZpZGVvIiwiZmlyc3RWaWRlbyIsIl9yZWYyJGZpcnN0IiwiZmlyc3QzNjAiLCJmaXJzdCIsIl9mZXRjaFByb2R1Y3QiLCJfY2FsbGVlMyIsIl90aGlzJHpvb21TaXplJHNwbGl0JCIsInpvb21XaWR0aCIsInpvb21IZWlnaHQiLCJfdGhpcyRwcm9kdWN0U2l6ZSRzcGwiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJfdGhpcyR0aHVtYlNpemUkc3BsaXQiLCJ0aHVtYldpZHRoIiwidGh1bWJIZWlnaHQiLCJyZXNwIiwiX3JlZjMiLCJfY29udGV4dDMiLCJhamF4IiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzaXRlIiwicHJvZHVjdCIsImVkZ2VzIiwiX3JlZjQiLCJub2RlIiwiX3JlZjUiLCJjdXN0b21GaWVsZHMiLCJfcmVmNiIsIl9yZWY3IiwiSW1hZ2VHYWxsZXJ5IiwiX0Nvcm5lcnN0b25lSW1hZ2VHYWxsIiwiX3RoaXM4IiwiaW1hZ2VHYWxsZXJ5TW9kYWwiLCJfcHJvdG8zIiwiZGVmYXVsdCIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsInV0aWxzIiwiQ29ybmVyc3RvbmVQcm9kdWN0RGV0YWlscyIsImFsZXJ0TW9kYWwiLCJzaG93QWxlcnRNb2RhbCIsIk1vZGFsRXZlbnRzIiwiZml4Rm9ybUVsZW1lbnRVbmlxdWVJZHMiLCJjdXJyZW5jeUZvcm1hdCIsIlNhbGVDb3VudGRvd24iLCJERUJVR19MT0ciLCJub3JtYWxpemVPcHRpb25TdHJpbmciLCJzIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZXF1YWxPcHRpb25TdHJpbmciLCJiIiwiYXJlQXJyYXlzRXF1YWxVbm9yZGVyZWQiLCJhcnIxIiwiYXJyMiIsIl9hcnIxIiwic2xpY2UiLCJzb3J0IiwiX2FycjIiLCJldmVyeSIsImluZGV4IiwiY2FjaGVkU2V0dGluZ3MiLCJoYW5kbGVQcm9taXNlc1dpdGhMaW1pdCIsIl94IiwiX3gyIiwiX2hhbmRsZVByb21pc2VzV2l0aExpbWl0IiwiX2NhbGxlZTciLCJwcm9taXNlcyIsImxpbWl0IiwicmVzdWx0cyIsImV4ZWN1dGluZyIsIl9sb29wIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJfY29udGV4dDgiLCJwcm9taXNlIiwiX2NvbnRleHQ3IiwicmVzdWx0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInB1c2giLCJyYWNlIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9yZWdlbmVyYXRvclZhbHVlcyIsImFsbCIsIlByb2R1Y3REZXRhaWxzIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25jYXQiLCJtb2RpZmllcnNNb2RhbE92ZXJsYXlUZW1wbGF0ZSIsIm1vZGlmaWVyc01vZGFsVGVtcGxhdGUiLCJvcHRpb25Ub29sdGlwVGVtcGxhdGUiLCJvcHRpb25WYWx1ZVRvb2x0aXBUZW1wbGF0ZSIsIm9wdGlvblZhbHVlVG9vbHRpcEhlYWRpbmdUZW1wbGF0ZSIsIm9wdGlvblByaWNlVGVtcGxhdGUiLCJvcHRpb25QcmljZVBsYWluVGVtcGxhdGUiLCJzdWJ0b3RhbFRlbXBsYXRlIiwic3VtbWFyeVRlbXBsYXRlIiwic2hvd1ByaWNlRnJlZSIsInNob3dQcmljZVplcm8iLCJhZGRUb0NhcnRXcmFwcGVyU2VsZWN0b3IiLCJmZXRjaE9wdGlvblByaWNlQ2FjaGUiLCJjb25zb2xlIiwibG9nIiwiX2NvbnNvbGUiLCIkZm9ybSIsIiRjaG9vc2VPcHRpb25zQnRuIiwidmFsIiwiY3VzdG9tRmllbGRzVGV4dCIsInBhcnNlIiwicHJvZHVjdE9wdGlvbnMiLCJwcm9kdWN0T3B0aW9uc1RleHQiLCJlbmFibGVNb2RpZmllcnNNb2RhbCIsImNyZWF0ZU1vZGlmaWVyc01vZGFsIiwiYmluZFByb2R1Y3RFZGl0RXZlbnRzIiwiYmluZFN0aWNreUFkZFRvQ2FydEV2ZW50cyIsImJpbmRNb2RhbERlc3Ryb3kiLCJpbml0T3B0aW9uU3RlcHBlciIsInN5bmNQcm9kdWN0Q2FyZFF0eSIsImluaXRTYWxlQ291bnRkb3duIiwiZ2V0Vmlld01vZGVsIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlMiIsIl9sZW4yIiwiX2tleTIiLCJtb2RlbCIsIiR1cGRhdGVQcm9kdWN0V3JhcHBlciIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwiJGJ0biIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsInByb3AiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiZm9ybSIsImVkaXRQcm9kdWN0SW5DYXJ0IiwiZWRpdFByb2R1Y3RUb0NhcnQiLCJfZWRpdFByb2R1Y3RUb0NhcnQiLCIkc2F2ZUJ0biIsIm9yaWdpbmFsQnRuVmFsIiwid2FpdE1lc3NhZ2UiLCJmb3JtRGF0YSIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwiaXRlbUlkIiwibmV3UXR5IiwiX3QiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsInVuZGVmaW5lZCIsIiRvdmVybGF5Iiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCJuZXh0IiwicmVzcG9uc2UiLCJjb250ZXh0IiwiZWRpdFByb2R1Y3RDYWxsYmFjayIsImVycm9yVGV4dCIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGVja0lzUXVpY2tWaWV3Q2hpbGQiLCIkcHJlTW9kYWxGb2N1c2VkRWwiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsImVkaXRQcm9kdWN0UXVhbnRpdHkiLCJ1cGRhdGVDYXJ0SXRlbVF1YW50aXR5IiwidHlwZSIsImdldEF0dHJpYnV0ZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJmYWlsIiwiX3hociIsIl9zdGF0dXMiLCJlcnJvciIsIl94MyIsIl94NCIsInJlamVjdCIsImFwaSIsImNhcnQiLCJpdGVtVXBkYXRlIiwiZXJyIiwiX3Jlc3BvbnNlJGRhdGEiLCJzdGF0dXMiLCJlcnJvcnMiLCJqb2luIiwic3VibWl0RXZlbnQiLCJFdmVudCIsIiRidXR0b24iLCJvbmUiLCJjbG9zZWQiLCJlYWNoIiwiZm9ybUZpZWxkRWwiLCIkZm9ybUZpZWxkIiwiJGRlYyIsIiRpbmMiLCIkY2hlY2siLCJpbml0IiwiJHJhZGlvcyIsIiRjaGVja2VkIiwiJGZpcnN0Iiwic2VsZWN0IiwiaW5jIiwiZXEiLCJub3QiLCJoYXNDbGFzcyIsIiR1bmNoZWNrIiwiJG5vbmUiLCJjYXJkUXR5IiwiJHF0eSIsInF0eSIsInR4dFNhbGVDb3VudGRvd25KU09OIiwiZW5kX2luIiwiY29uZmlndXJlIiwiYWRkIiwidXBkYXRlVmlldyIsIl9Db3JuZXJzdG9uZVByb2R1Y3REZTMiLCJfbGVuMyIsIl9rZXkzIiwidXBkYXRlU2FsZVBlcmNlbnQiLCJ1cGRhdGVTaGlwcGluZ0NvdW50ZG93biIsIm1hbnVhbFVwZGF0ZU1vZGlmaWVyc1ZpZXciLCJ1cGRhdGVNb2RpZmllcnNWaWV3IiwiJHByb2R1Y3RPcHRpb25zRWwiLCIkbW9kaWZpZXJzTW9kYWxPcHRpb25zIiwiJG1vZGlmaWVyc01vZGFsU3VidG90YWwiLCJzaG93T3B0aW9uSWRzIiwic3RhY2tlZFNob3dPcHRpb25JZHMiLCJub25lU2FsZXMiLCJjdXN0b21GaWVsZE5vbmVTYWxlcyIsInNob3dPcHRpb25QcmljZXMiLCJ1cGRhdGVNb2RpZmllcnNTdWJ0b3RhbCIsIl9kYXRhJHByaWNlIiwiX2RhdGEkcHJpY2U0IiwiJGRpdiIsIiRzcGFuIiwic2FsZVBlcmNlbnQiLCJwcmljZSIsIndpdGhvdXRfdGF4IiwiX2RhdGEkcHJpY2UyIiwiX2RhdGEkcHJpY2UzIiwicnJwX3dpdGhvdXRfdGF4IiwiTWF0aCIsInJvdW5kIiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJ3aXRoX3RheCIsIl9kYXRhJHByaWNlNSIsIl9kYXRhJHByaWNlNiIsInJycF93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4IiwiJHNoaXBwaW5nQ291bnRkb3duIiwidXBkYXRlQ2FydENvbnRlbnQiLCJfQ29ybmVyc3RvbmVQcm9kdWN0RGU0IiwiY2xvc2VNb2RpZmllcnNNb2RhbCIsInByZXZpZXdNb2RhbCIsIl9sZW40IiwiX2tleTQiLCJzaG93UHJvZHVjdEltYWdlIiwiX0Nvcm5lcnN0b25lUHJvZHVjdERlNSIsIl9sZW41IiwiX2tleTUiLCIkbW9kaWZpZXJzTW9kYWxJbWciLCJfdGhpcyRpbWFnZUdhbGxlcnkkY3UiLCJjdXJyZW50SW1hZ2UiLCJlbCIsImZvcm1hdFByaWNlIiwicGx1c1N5bWJvbCIsImRpc3BsYXkiLCJjdXJyZW5jeV90b2tlbiIsImN1cnJlbmN5Iiwic3ltYm9sIiwiY3VycmVuY3lfbG9jYXRpb24iLCJzeW1ib2xQbGFjZW1lbnQiLCJkZWNpbWFsX3Rva2VuIiwiZGVjaW1hbFRva2VuIiwiZGVjaW1hbF9wbGFjZXMiLCJkZWNpbWFsUGxhY2VzIiwidGhvdXNhbmRzX3Rva2VuIiwidGhvdXNhbmRzVG9rZW4iLCJmb3JtYXR0ZWQiLCJmaW5kT3B0aW9uVmFsdWUiLCJvcHRpb25OYW1lIiwidmFsdWVOYW1lIiwiX2hpZGVJZk9wdGlvbiR2YWx1ZXMiLCJoaWRlSWZPcHRpb24iLCJkaXNwbGF5X25hbWUiLCJ2YWx1ZXMiLCJsYWJlbCIsIm9wdGlvbklkIiwiaWQiLCJ2YWx1ZUlkIiwiJGF0dHJpYnV0ZU1lc3NhZ2VXcmFwcGVyIiwiJGFkZFRvQ2FydFdyYXBwZXIiLCIkbW9kaWZpZXJzTW9kYWwiLCJ0eHRDb250aW51ZSIsInByb2R1Y3RUaXRsZSIsIiRtb2RpZmllcnNNb2RhbENvbXBsZXRlIiwiJG1vZGlmaWVyc01vZGFsQ2xvc2UiLCIkbW9kaWZpZXJzTW9kYWxDb250aW51ZSIsIiRtb2RpZmllcnNNb2RhbEJhY2siLCJhcHBlbmQiLCJnb0JhY2tTdGVwIiwiaW52YWxpZElucHV0cyIsInJlZHVjZSIsIl9pbnZhbGlkSW5wdXRzIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiZm9yRWFjaCIsInZhbGlkYXRlVmFyaWFudE9wdGlvbnMiLCJpbml0TW9kaWZpZXJzVmlldyIsIm9wZW5Nb2RpZmllcnNNb2RhbCIsImJlZm9yZSIsImlnbm9yZUFQSUNhbGwiLCJfdXBkYXRlTW9kaWZpZXJzVmlldyIsIl9yZWYzJGlnbm9yZUFQSUNhbGwiLCIkbW9kaWZpZXJzTW9kYWxTdW1tYXJ5IiwiJG1vZGlmaWVyc01vZGFsVGl0bGUiLCIkbW9kaWZpZXJzTW9kYWxGb290ZXIiLCJjdXJyZW50T3B0aW9uSWQiLCJjdXJyZW50R3JvdXBOYW1lIiwiY3VycmVudEdyb3VwT3B0aW9uSWRzIiwiaGlkZU9wdGlvbklkcyIsImhpZGVPcHRpb25WYWx1ZXMiLCJ0b29sdGlwcyIsInRvb2x0aXBIZWFkaW5ncyIsIm9wdGlvblJlbmFtZXMiLCJfdGhpcyRwcm9kdWN0T3B0aW9ucyQiLCJ0aXRsZSIsImdyb3VwVG9vbHRpcCIsIiR0b29sdGlwIiwiZW1wdHkiLCJmcm9tIiwiZW50cmllcyIsInN0YXRlIiwib3B0aW9uIiwiaGlkZU9wdGlvbiIsImdyb3VwTmFtZSIsImdyb3VwT3B0aW9uSWRzIiwiaXNOb25lUmFkaW9DaGVja2VkIiwiJGZpbGUiLCJpc0ZpbGVTaG93biIsIiRkYXRlIiwiaXNPcHRpb25hbERhdGVTaG93biIsInJlcXVpcmVkIiwiJHNlbGVjdCIsImlzT3B0aW9uYWxTZWxlY3RTaG93biIsIiR0ZXh0IiwiaXNPcHRpb25hbFRleHRTaG93biIsImZvcm1WYWx1ZSIsIkZpbGUiLCJjdXN0b21GaWVsZCIsImhpZGVJZk1hdGNoIiwiY3VzdG9tRmllbGRNYXRjaEhpZGVJZiIsImdyb3VwTWF0Y2giLCJjdXN0b21GaWVsZE1hdGNoR3JvdXAiLCJfT2JqZWN0JGFzc2lnbiIsInRvb2x0aXBNYXRjaCIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwIiwiX3Rvb2x0aXBzJG9wdGlvbiRpZCIsIl90b29sdGlwcyRvcHRpb24kaWQyIiwiYXNzaWduIiwidG9vbHRpcCIsInZhbHVlVG9vbHRpcHMiLCJ2YWx1ZVRvb2x0aXBIZWFkaW5ncyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwSGVhZGluZyIsIm5ld05hbWUiLCJjdXN0b21GaWVsZE1hdGNoUmVuYW1lIiwidmFsdWVOb25TYWxlcyIsImN1c3RvbUZpZWxkTWF0Y2hOb25TYWxlIiwiXyIsImN1c3RvbUZpZWxkTWF0Y2hUb29sdGlwR3JvdXAiLCJzaG93T3B0aW9uVG9vbHRpcHMiLCJwb3B1bGF0ZURlZmF1bHRPcHRpb25WYWx1ZXMiLCJkaXNwbGF5U2hvd09wdGlvblByaWNlc1ByZWxvYWRlciIsInNob3dTdW1tYXJ5IiwiX3g1IiwiaW52YWxpZCIsInBvcCIsIiRvcHRpb24iLCJtYXRjaCIsImhpZGVJZk9wdGlvbnMiLCJrdiIsIl9yZWY4IiwidHJpbSIsIl9yZWY5IiwidGhlbk9wdGlvbnMiLCJfcmVmMCIsIl9yZWYxIiwiX3JlZjEwIiwiX3RoaXM4JGZpbmRPcHRpb25WYWx1IiwiZ2V0QWxsIiwiX3JlZjExIiwiX3JlZjEyIiwiX2hpZGVPcHRpb25WYWx1ZSIsIl9yZWYxMyIsIl90aGlzOSIsIl90aGlzOSRwcm9kdWN0T3B0aW9ucyIsIl9yZWYxNCIsIl9yZWYxNSIsIl90aGlzMCIsIl9tJDEkc3BsaXQkbWFwIiwiX3JlZjE2IiwiX3JlZjE3IiwiX3JlZjE4IiwiX3RoaXMxIiwiX20kMSRzcGxpdCRtYXAyIiwiaGVhZGluZyIsIl9yZWYxOSIsIl9yZWYyMCIsIl9yZWYyMSIsIl9rdiRzcGxpdCRtYXAiLCJ2YWx1ZUxhYmVsIiwiX29wdGlvbiR2YWx1ZXMkZmluZCIsIl9yZWYyMiIsImZldGNoU2V0dGluZ3MiLCJfZmV0Y2hTZXR0aW5ncyIsImN1cnJlbmN5Q29kZSIsImFjdGl2ZV9jdXJyZW5jeV9jb2RlIiwiZGVmYXVsdEN1cnJlbmN5Q29kZSIsImRlZmF1bHRfY3VycmVuY3lfY29kZSIsInNldHRpbmdzIiwiZmV0Y2hPcHRpb25QcmljZXMiLCJfZmV0Y2hPcHRpb25QcmljZXMiLCJfY2FsbGVlNCIsInNob3dPcHRpb25zIiwiX3RoaXMxMCIsInNlbGVjdGVkT3B0aW9uVmFsdWVJZHMiLCJfeWllbGQkaGFuZGxlUHJvbWlzZXMiLCJwcmV2Iiwic2VsZWN0aW9ucyIsIl9jb250ZXh0NCIsIl9yZWYyMyIsIm9wdGlvbkVudGl0eUlkIiwidmFsdWVFbnRpdHlJZCIsIl9yZWYyNCIsImZldGNoT3B0aW9uUHJpY2UiLCJfYXJyYXlMaWtlVG9BcnJheSIsInNlbGVjdGlvbiIsInByaWNlc1dpdGhUYXgiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGgiLCJfcHJldiRwcmljZXNXaXRoVGF4IiwiX3NlbGVjdGlvbiRwcmljZXNXaXRoMiIsIl9wcmV2JHByaWNlc1dpdGhUYXgyIiwibm9uU2FsZVByaWNlV2l0aFRheCIsImJhc2VQcmljZSIsImFkanVzdGVkUHJpY2VzV2l0aFRheCIsIm5vblNhbGVQcmljZVZhbHVlIiwicHJpY2VzV2l0aG91dFRheCIsIl9zZWxlY3Rpb24kcHJpY2VzV2l0aDMiLCJfcHJldiRwcmljZXNXaXRob3V0VGEiLCJfc2VsZWN0aW9uJHByaWNlc1dpdGg0IiwiX3ByZXYkcHJpY2VzV2l0aG91dFRhMiIsIm5vblNhbGVQcmljZVdpdGhvdXRUYXgiLCJhZGp1c3RlZFByaWNlc1dpdGhvdXRUYXgiLCJfeDYiLCJfeDciLCJfZmV0Y2hPcHRpb25QcmljZSIsIl9jYWxsZWU1Iiwib3B0aW9uVmFsdWVJZHMiLCJjYWNoZUtleSIsIl9jb250ZXh0NSIsIl94OCIsIl90aGlzMTEiLCJfcmVmMjUiLCJfcmVmMjUkIiwiJGxhYmVsIiwiYWZ0ZXIiLCJwcmVwZW5kIiwiX3JlZjI2IiwidmFsdWVUb29sdGlwIiwiJHZhbHVlIiwiX3JlZjI3IiwiX3JlZjI4IiwiX3JlZjI5IiwidmFsdWVUb29sdGlwSGVhZGluZyIsIiR0b29sdGlwSGVhZGluZyIsInNob3duT3B0aW9ucyIsIl9yZWYzMCIsImRlZmF1bHRPcHRpb25zIiwiX3JlZjMxIiwicHJlZmlsbCIsInNlbGVjdGVkX2RhdGUiLCJkYXkiLCJtb250aCIsInllYXIiLCJfcmVmMzIiLCJzZWxlY3RlZCIsImNoZWNrYm94T3B0aW9ucyIsIl9yZWYzMyIsIm5vVmFsdWUiLCJmaWxlT3B0aW9ucyIsIl9yZWYzNCIsInBhcnRpYWwiLCJkYXRlT3B0aW9ucyIsIl9yZWYzNSIsImRyb3Bkb3duT3B0aW9ucyIsIl9yZWYzNiIsInRleHRPcHRpb25zIiwiX3JlZjM3IiwiX3JlZjM4IiwiX3ZhbHVlcyRmaW5kIiwiX3JlZjM5IiwiX3JlZjQwIiwiY2hlY2tlZCIsIl9yZWY0MSIsInBhcmFtcyIsInByZWxvYWRlciIsInByaWNlSHRtbCIsInByaWNlVGV4dCIsInN1YnRvdGFsSHRtbCIsIiRwcmljZSIsIiRvbGQiLCIkcGxhY2Vob2xkZXIiLCJfc2hvd09wdGlvblByaWNlcyIsIl9jYWxsZWU2IiwiaWdub3JlVXBkYXRlU3VidG90YWwiLCJfdGhpczEyIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsJCIsInNob3dQcmljZSIsIl9jb250ZXh0NiIsIl9pZCIsIl9yZWY0MiIsInR4dFByaWNlRnJlZSIsIl9yZWY0MyIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYSIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYTIiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UiLCJfYWRqdXN0ZWRQcmljZXNXaXRob3UyIiwidGF4IiwicGRwIiwicHJpY2VXaXRoVGF4VmFsdWUiLCJwcmljZVdpdGhUYXgiLCJub25TYWxlUHJpY2VXaXRoVGF4VmFsdWUiLCJwcmljZVdpdGhvdXRUYXhWYWx1ZSIsInByaWNlV2l0aG91dFRheCIsIm5vblNhbGVQcmljZVdpdGhvdXRUYXhWYWx1ZSIsIl9ub25lU2FsZXMkb3B0aW9uSWQiLCJub25TYWxlIiwiX2FkanVzdGVkUHJpY2VzV2l0aG91MyIsIl9hZGp1c3RlZFByaWNlc1dpdGhUYTMiLCJleGNoYW5nZWROb25TYWxlIiwiZXhjaGFuZ2VSYXRlIiwicHJpY2VWYWx1ZSIsInNob3dPcHRpb25TdWJ0b3RhbCIsIl94OSIsIl94MCIsIl94MSIsIl94MTAiLCJfeDExIiwiX3gxMiIsIl9wcm9kdWN0JHByaWNlc1dpdGhUYSIsIl9wcm9kdWN0JHByaWNlc1dpdGhvdSIsInR4dFN1YnRvdGFsIiwidHh0UmV2aWV3U2VsZWN0aW9ucyIsIm9wdGlvbnMiLCIkc3VidG90YWwiLCJfb3B0aW9uJHZhbHVlcyIsIl8kbW9kaWZpZXJzTW9kYWxPcHRpbyIsImRheVN0ciIsIm1vbnRoU3RyIiwieWVhclN0ciIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ2YWx1ZVN0ciIsIl9yZWY0NCIsIm9wdGlvbkVsUHJpY2VIdG1sIiwic3VtbWFyeUh0bWwiLCJwYXJzZURhdGVUaW1lU3RyaW5nIiwic3RyIiwicmVnZXgiLCJzaG9ydE1vbnRoIiwic2hvcnREYXkiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwic2hvcnRIb3VyIiwic2hvcnRNaW51dGUiLCJzaW5nbGVUaW1lQ29tcG9uZW50IiwidHpTaWduIiwidHpIb3VyT2Zmc2V0IiwidHpNaW51dGVPZmZzZXQiLCJwYXJzZUludCIsInNpZ24iLCJ0ekhvdXIiLCJ0ek1pbnV0ZSIsInRpbWV6b25lIiwicGFyc2VDb3VudGRvd25EYXRlIiwicGFyc2VkRGF0ZSIsIm5vdyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiaCIsIm1pbiIsInNlYyIsImRhdGUiLCJ1dGNNaWxsaXMiLCJVVEMiLCJzZXRGdWxsWWVhciIsInNldE1vbnRoIiwic2V0RGF0ZSIsInNldEhvdXJzIiwic2V0TWludXRlcyIsInNldFNlY29uZHMiLCJlbGVtZW50cyIsIlNldCIsInRpbWVyIiwib2JzZXJ2ZXIiLCJkYXRlRGF0YU5hbWUiLCJpblZpZXdwb3J0RGF0YU5hbWUiLCJ0cmFuc2xhdGlvbnNEYXRhTmFtZSIsInNlbGVjdG9ycyIsImVuZExhYmVsIiwiZGF5VmFsdWUiLCJkYXlMYWJlbCIsImhvdXJWYWx1ZSIsImhvdXJMYWJlbCIsIm1pbnV0ZVZhbHVlIiwibWludXRlTGFiZWwiLCJzZWNvbmRWYWx1ZSIsInNlY29uZExhYmVsIiwidGVtcGxhdGUiLCJoaWRlQ2xhc3MiLCJzYWxlRW5kQ2xhc3MiLCJhY3RpdmVDbGFzcyIsInRyYW5zbGF0aW9ucyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwianNvbiIsInRyYW5zIiwia2V5cyIsIl90cmFucyIsInNob3J0S2V5IiwidmFsaWREYXRlIiwib2JzZXJ2ZSIsInN0YXJ0IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwicm9vdCIsInRocmVzaG9sZCIsInVub2JzZXJ2ZSIsImlzVmlzaWJsZUluVmlld3BvcnQiLCJzaXplIiwicnVuIiwic3RvcCIsImRpc2Nvbm5lY3QiLCJib2R5IiwiY29udGFpbnMiLCJkaWZmIiwiZmxvb3IiLCIkZW5kTGFiZWwiLCIkZGF5IiwiJGRheVZhbHVlIiwiJGRheUxhYmVsIiwiJGhvdXIiLCIkaG91clZhbHVlIiwiJGhvdXJMYWJlbCIsIiRtaW51dGUiLCIkbWludXRlVmFsdWUiLCIkbWludXRlTGFiZWwiLCIkc2Vjb25kIiwiJHNlY29uZFZhbHVlIiwiJHNlY29uZExhYmVsIiwidG9nZ2xlQ2xhc3MiLCJhcmlhS2V5Q29kZXMiLCJSRVRVUk4iLCJTUEFDRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsInNldENoZWNrZWRSYWRpb0l0ZW0iLCJpdGVtQ29sbGVjdGlvbiIsIml0ZW1JZHgiLCJpZHgiLCJpdGVtIiwiJGl0ZW0iLCJjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24iLCJsYXN0SXRlbUlkeCIsImN1cnJlbnRJZHgiLCJoYW5kbGVJdGVtS2V5RG93biIsImtleUNvZGUiLCJsYXN0Q29sbGVjdGlvbkl0ZW1JZHgiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2SXRlbUlkeCIsIm5leHRJdGVtSWR4IiwiJGNvbnRhaW5lciIsIml0ZW1TZWxlY3RvciIsIiRpdGVtQ29sbGVjdGlvbiIsImluaXRSYWRpb09wdGlvbnMiLCJvcHRpb25zVHlwZXNNYXAiLCJJTlBVVF9GSUxFIiwiSU5QVVRfVEVYVCIsIklOUFVUX05VTUJFUiIsIklOUFVUX0NIRUNLQk9YIiwiVEVYVEFSRUEiLCJEQVRFIiwiU0VUX1NFTEVDVCIsIlNFVF9SRUNUQU5HTEUiLCJTRVRfUkFESU8iLCJTV0FUQ0giLCJQUk9EVUNUX0xJU1QiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJhcmVEZWZhdWx0T3B0aW9uc1NldCIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwiZ2V0VGFiUmVxdWVzdHMiLCJfXyIsIl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlIiwidmFyaWFudERvbU5vZGUiLCJ2YXJpYW50VHlwZSIsInJhZGlvIiwiJHJhZGlvIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tEZWZhdWx0TWVzc2FnZSIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsIiRhY3RpdmVUYWIiLCJoYXMiLCIkdGFiQ29udGVudCIsInNpYmxpbmdzIiwicnJwV2l0aFRheCIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCJwcmljZUxhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsIiRhZGRUb0NhcnRGb3JtIiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwic3RvY2siLCIkaW5wdXQiLCJza3UiLCJ1cGMiLCJxdWFudGl0eSIsIiRidWxrUHJpY2luZyIsIiR3YWxsZXRCdXR0b25zIiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJ2aWV3TW9kZWwiLCJzaG93TWVzc2FnZUJveCIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJ1cGRhdGVQcmljZVZpZXciLCJ3ZWlnaHQiLCJ2YXJpYW50SWQiLCJ1cGRhdGVXYWxsZXRCdXR0b25zVmlldyIsImJ1bGtfZGlzY291bnRfcmF0ZXMiLCJhZGRUb0NhcnRXcmFwcGVyIiwidXBkYXRlZFByaWNlIiwicHJpY2VfcmFuZ2UiLCJtYXgiLCJzYXZlZCIsIm1lc3NhZ2UiLCIkbWVzc2FnZUJveCIsImlzVmFsaWRGb3JtIiwidG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkiLCJzaG91bGRTaG93IiwiZ2V0QXR0cmlidXRlVHlwZSIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkcGFyZW50IiwicGFyZW50IiwidG9nZ2xlT3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsIm1vZGFsRmFjdG9yeSIsIm5vZCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJmb3JtcyIsIm5vcm1hbGl6ZUZvcm1EYXRhIiwiY29udmVydEludG9BcnJheSIsImJhbm5lclV0aWxzIiwiY3VycmVuY3lTZWxlY3RvciIsIl9Qcm9kdWN0RGV0YWlsc0Jhc2UiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJsaXN0ZW5RdWFudGl0eUNoYW5nZSIsIiRzd2F0Y2hPcHRpb25NZXNzYWdlIiwic3dhdGNoSW5pdE1lc3NhZ2VTdG9yYWdlIiwic3dhdGNoR3JvdXBJZExpc3QiLCJncm91cCIsInN0b3JlSW5pdE1lc3NhZ2VzRm9yU3dhdGNoZXMiLCJ1cGRhdGVEYXRlU2VsZWN0b3IiLCJ1cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEiLCJhZGRUb0NhcnRWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsImhhc0RlZmF1bHRPcHRpb25zIiwiJHByb2R1Y3RTd2F0Y2hHcm91cCIsIiRwcm9kdWN0U3dhdGNoTGFiZWxzIiwicGxhY2VTd2F0Y2hMYWJlbEltYWdlIiwiJG9wdGlvbkltYWdlIiwib3B0aW9uSW1hZ2VXaWR0aCIsIm91dGVyV2lkdGgiLCJleHRlbmRlZE9wdGlvbkltYWdlT2Zmc2V0TGVmdCIsIl9sYWJlbCRnZXRCb3VuZGluZ0NsaSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpZ2h0IiwiZW1wdHlTcGFjZVRvU2NyZWVuUmlnaHRCb3JkZXIiLCJzY3JlZW4iLCJzaGlmdFZhbHVlIiwicmVnaXN0ZXJBZGRUb0NhcnRWYWxpZGF0aW9uIiwic2hvd1N3YXRjaE5hbWVzIiwic3dhdGNoR3JvdXBFbGVtZW50IiwicGFyZW50Tm9kZSIsInNob3dTd2F0Y2hOYW1lT25PcHRpb24iLCJlbGVtZW50IiwicHJvZHVjdE9wdGlvbnNDaGFuZ2VkIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJfaXNFbXB0eSIsIiRwcm9kdWN0SWQiLCJvcHRpb25DaGFuZ2VDYWxsYmFjayIsInByb2R1Y3RBdHRyaWJ1dGVzIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwiZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJudW1iZXJzT25seSIsImVycm9yTWVzc2FnZSIsInByb2R1Y3RRdWFudGl0eUVycm9yTWVzc2FnZSIsInN3YXRjaEdyb3VwSWQiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsIm9wdGlvblRpdGxlIiwicXVlcnlTZWxlY3RvciIsImlzU2F0aXNmaWVkIiwicXVlcnlTZWxlY3RvckFsbCIsImRhdGVTdHJpbmciLCJ4IiwiZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCIsInByb2R1Y3RWYXJpYW50c2xpc3QiLCJtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0IiwiaW5wdCIsImRhdGFzZXQiLCJwcm9kdWN0QXR0cmlidXRlVmFsdWUiLCJsYWJlbHMiLCJwcm9kdWN0VmFyaWFudCIsInZpZXciLCJwcm9kdWN0TmFtZSIsImNhcmQiLCJpc1J1bm5pbmdJbklmcmFtZSIsInNlbGYiLCJ0b3AiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCIkY29udGV4dCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkZXRhaWwiLCIkc3dhdGNoIiwiJHN3YXRjaEdyb3VwIiwic3dhdGNoTmFtZSIsImFjdGl2ZVN3YXRjaEdyb3VwSWQiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJyb2xlIiwiX2lzUGxhaW5PYmplY3QiLCJzZXRBbHRlcm5hdGVJbWFnZSIsInJlc3RvcmVJbWFnZSIsIiR0YXJnZXQiLCJxdWFudGl0eU1pbiIsInF1YW50aXR5TWF4IiwidmFsaWRhdGVJbmNyZWFzZUFnYWluc3RNYXhCb3VuZGFyeSIsInZhbGlkYXRlRGVjcmVhc2VBZ2FpbnN0TWluQm91bmRhcnkiLCJ3aGljaCIsIiRhZGRUb0NhcnRCdG4iLCJpdGVtQWRkIiwiY2FydF9pZCIsIm9wZW4iLCJBcHBsZVBheVNlc3Npb24iLCIkbW9kYWwiLCJjYXJ0X2l0ZW0iLCJyZWRpcmVjdFRvIiwiY2FydF91cmwiLCJ1cmxzIiwiZ2V0Q2FydENvbnRlbnQiLCJjYXJ0SXRlbUlkIiwib25Db21wbGV0ZSIsInN1Z2dlc3QiLCJjb25maWciLCJzdWdnZXN0aW9ucyIsImdldENvbnRlbnQiLCJpZnJhbWVTZGsiLCJtb2RhbCIsInVwZGF0ZUNvbnRlbnQiLCIkY2FydFF1YW50aXR5IiwiJGNvbnRlbnQiLCIkY2FydENvdW50ZXIiLCIkcHJvbW90aW9uQmFubmVyIiwiJGJhY2tUb1Nob3BwcGluZ0J0biIsIiRtb2RhbENsb3NlQnRuIiwiYmFubmVyVXBkYXRlSGFuZGxlciIsIiRwcm9kdWN0Q29udGFpbmVyIiwicmVsb2FkIiwiZm9ybURhdGFJdGVtcyIsInNlcmlhbGl6ZUFycmF5IiwicHJvZHVjdERldGFpbHMiLCJmb3JtRGF0YUl0ZW0iLCJwcm9kdWN0T3B0aW9uIiwib3B0aW9uVmFsdWUiLCJvcHRpb25TZWxlY3Rpb25zIiwic2NvcGUiLCJ1cGRhdGVEYXlzIiwiZGF0ZU9wdGlvbiIsIm1vbnRoU2VsZWN0b3IiLCJkYXlTZWxlY3RvciIsInllYXJTZWxlY3RvciIsImRheXNJbk1vbnRoIiwiaXNOYU4iLCJPcHRpb24iLCJmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtIiwicmVzIiwiX3N0ZXAkdmFsdWUiLCJmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0iLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX3N0ZXAyJHZhbHVlIiwiZXZ0IiwiYW1vdW50IiwiZG9jdW1lbnRNb2RlIiwiY29sbGVjdGlvbiIsIiRtYWluSW1hZ2VOZXN0ZWQiLCIkc2VsZWN0YWJsZUltYWdlcyIsInNldEltYWdlWm9vbSIsImltZ09iaiIsInNhdmVkSW1hZ2UiLCIkc2VsZWN0ZWRUaHVtYiIsInNlbGVjdE5ld0ltYWdlIiwibWFpbkltYWdlQWx0IiwiYWx0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=