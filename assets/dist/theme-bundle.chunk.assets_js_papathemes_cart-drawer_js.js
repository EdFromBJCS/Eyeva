(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["assets_js_papathemes_cart-drawer_js"],{

/***/ "./assets/js/papathemes/cart-drawer.js"
/*!*********************************************!*\
  !*** ./assets/js/papathemes/cart-drawer.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ factory)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./assets/js/papathemes/modal.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _recently_viewed_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recently-viewed-products */ "./assets/js/papathemes/recently-viewed-products.js");
/* harmony import */ var _cart_suggested_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-suggested-products */ "./assets/js/papathemes/cart-suggested-products.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart */ "./assets/js/papathemes/cart.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var cartDrawerSingleton;
var Cart = /*#__PURE__*/function (_CartPage) {
  function Cart(context, $scope) {
    var _this;
    _this = _CartPage.call(this, context) || this;
    _this.$scope = $scope || $('body');
    _this.onReady();
    return _this;
  }

  // Copied from the base class. add scope to jquery selector
  _inheritsLoose(Cart, _CartPage);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$modal = null;
    this.$cartPageContent = $('[data-cart]', this.$scope);
    this.$cartContent = $('[data-cart-content]', this.$scope);
    this.$cartMessages = $('[data-cart-status]', this.$scope);
    this.$cartTotals = $('[data-cart-totals]', this.$scope);
    this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]', this.$scope);
    this.$overlay = $('[data-cart] .loadingOverlay', this.$scope).hide(); // TODO: temporary until roper pulls in his cart components
    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;
    this.setApplePaySupport();
    this.bindEvents();
  };
  return Cart;
}(_cart__WEBPACK_IMPORTED_MODULE_5__["default"]);
var CartDrawer = /*#__PURE__*/function () {
  function CartDrawer(context) {
    this.context = context;
    this.modal = new _modal__WEBPACK_IMPORTED_MODULE_1__["default"]({
      overlayExtraClass: 'cart-drawer',
      closeOnBackgroundClick: true,
      closeOnEsc: true,
      stackable: true
    });
    this.bindEvents();
    this.overrideCartPreviewModal();
  }
  var _proto2 = CartDrawer.prototype;
  _proto2.bindEvents = function bindEvents() {
    var _this2 = this;
    $('[data-cart-drawer-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.open();
    });
    this.bindCartQuantityUpdateEvent();
  };
  _proto2.bindCartQuantityUpdateEvent = function bindCartQuantityUpdateEvent() {
    var $body = $('body');
    var $toggle = $('[data-cart-drawer-toggle]');

    // copied Cornerstone code
    // @see: assets/js/theme/global/cart-preview.js
    $body.on('cart-quantity-update', function (event, quantity) {
      $toggle.attr('aria-label', function (_, prevValue) {
        return prevValue.replace(/\d+/, quantity);
      });
      if (!quantity) {
        $toggle.addClass('navUser-item--cart__hidden-s');
      } else {
        $toggle.removeClass('navUser-item--cart__hidden-s');
      }
      $('.cart-quantity').text(quantity).toggleClass('countPill--positive', quantity > 0);
      if (_bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].tools.storage.localStorageAvailable()) {
        localStorage.setItem('cart-quantity', quantity);
      }
    });
  };
  _proto2.initCart = function initCart(content) {
    if (content) {
      this.modal.updateContent(content);

      // move the newly added item to the top of the cart
      var $item = this.modal.$modal.find('[data-item-row-added]');
      $item.prependTo($item.parent());
      $item.addClass('_adding');
      $item.one('animationend', function () {
        return $item.removeClass('_adding');
      });
    }
    this.cart = new Cart(this.context, this.modal.$modal);
    (0,_recently_viewed_products__WEBPACK_IMPORTED_MODULE_3__.initRecentlyViewedProductsSection)(this.context);
    (0,_cart_suggested_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
  };
  _proto2.open = function open() {
    var _this3 = this;
    this.modal.openModal('', true);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.cart.getContent({
      template: 'papathemes/cart-drawer'
    }, function (err, response) {
      _this3.initCart(response);
    });
  };
  _proto2.overrideCartPreviewModal = function overrideCartPreviewModal() {
    var _this4 = this;
    var previewModal = (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('#previewModal')[0];
    previewModal.open = function () {
      previewModal.close(); // to close the quick view modal

      if (_this4.context.page_type !== 'cart') {
        _this4.modal.openModal('', true);
      }
    };
    previewModal.updateContent = function (response) {
      if (_this4.context.page_type === 'cart') {
        $('body').trigger('refresh-cart', [response]);
      } else {
        var qty = $(response).find('[data-cart-quantity]').attr('data-cart-quantity');
        previewModal.$content.html("<div data-cart-quantity=\"" + qty + "\"></div>");
        _this4.initCart(response);
      }
    };
  };
  return CartDrawer;
}();
function factory(context) {
  if (!cartDrawerSingleton) {
    cartDrawerSingleton = new CartDrawer(context);
  }
  return cartDrawerSingleton;
}

/***/ },

/***/ "./assets/js/papathemes/cart-suggested-products.js"
/*!*********************************************************!*\
  !*** ./assets/js/papathemes/cart-suggested-products.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initCartSuggestedProducts)
/* harmony export */ });
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/shuffle */ "./node_modules/lodash/shuffle.js");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./assets/js/papathemes/utils.js");
/* harmony import */ var blaze_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blaze-slider */ "./node_modules/blaze-slider/dist/blaze-slider.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var observer;
var CartSuggestedProductsObserver = /*#__PURE__*/function () {
  function CartSuggestedProductsObserver(options) {
    if (options === void 0) {
      options = {};
    }
    this.onCartChanged = this.onCartChanged.bind(this);
    this.loaded = false;
    this.products = [];
    this.options = options;
    this.query = new _utils__WEBPACK_IMPORTED_MODULE_3__.ProductCardsGraphQLQuery(options);
    this.unbindEvents();
    this.bindEvents();
  }
  var _proto = CartSuggestedProductsObserver.prototype;
  _proto.bindEvents = function bindEvents() {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.on('cart-item-add-remote', this.onCartChanged);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.on('cart-item-update-remote', this.onCartChanged);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.on('cart-item-remove-remote', this.onCartChanged);
  };
  _proto.unbindEvents = function unbindEvents() {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.off('cart-item-add-remote', this.onCartChanged);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.off('cart-item-update-remote', this.onCartChanged);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.off('cart-item-remove-remote', this.onCartChanged);
  };
  _proto.onCartChanged = function onCartChanged() {
    this.loaded = false;
    this.products = [];
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.emit('cart-suggested-products-change');
  };
  _proto.load = /*#__PURE__*/function () {
    var _load = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var cart, cartProductIds;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!this.loaded) {
              _context.n = 1;
              break;
            }
            return _context.a(2, this.products);
          case 1:
            this.loaded = true;
            _context.n = 2;
            return new Promise(function (resolve) {
              _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getCart({}, function (err, response) {
                resolve(response);
              });
            });
          case 2:
            cart = _context.v;
            if (cart) {
              cartProductIds = [].concat(cart.lineItems.physicalItems, cart.lineItems.digitalItems).map(function (item) {
                return item.productId;
              }).filter(function (productId) {
                return productId;
              }).slice(0, 50);
              this.products = this.fetchRelatedProducts(cartProductIds);
            } else {
              this.products = [];
            }
            return _context.a(2, this.products);
        }
      }, _callee, this);
    }));
    function load() {
      return _load.apply(this, arguments);
    }
    return load;
  }();
  _proto.fetchRelatedProducts = /*#__PURE__*/function () {
    var _fetchRelatedProducts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_productIds) {
      var _this = this;
      var productIds, relatedProductIds;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            productIds = _productIds.slice(0, 50);
            if (!(!productIds || productIds.length === 0)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, []);
          case 1:
            _context2.n = 2;
            return new Promise(function (resolve) {
              $.ajax({
                url: '/graphql',
                method: 'POST',
                data: JSON.stringify({
                  query: "\n                        query relatedProducts(\n                            $productIds: [Int!]\n                            $first: Int\n                        ) {\n                            site {\n                                products(entityIds: $productIds, first: $first) {\n                                    edges {\n                                        node {\n                                            relatedProducts(hideOutOfStock: true) {\n                                                edges {\n                                                    node {\n                                                        entityId\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    ",
                  variables: {
                    productIds: productIds,
                    first: productIds.length
                  }
                }),
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer " + _this.options.graphQLToken
                },
                xhrFields: {
                  withCredentials: true
                },
                success: function success(resp) {
                  var ids = resp.data.site.products.edges.reduce(function (_ids, _ref) {
                    var relatedProducts = _ref.node.relatedProducts;
                    return relatedProducts.edges.reduce(function (_ids2, _ref2) {
                      var entityId = _ref2.node.entityId;
                      return _ids2.includes(entityId) ? _ids2 : [].concat(_ids2, [entityId]);
                    }, _ids);
                  }, []);
                  resolve(ids);
                },
                error: function error() {
                  resolve([]);
                }
              });
            });
          case 2:
            relatedProductIds = _context2.v;
            return _context2.a(2, this.query.load(relatedProductIds));
        }
      }, _callee2, this);
    }));
    function fetchRelatedProducts(_x) {
      return _fetchRelatedProducts.apply(this, arguments);
    }
    return fetchRelatedProducts;
  }();
  return CartSuggestedProductsObserver;
}();
var CartSuggestedProducts = /*#__PURE__*/function () {
  function CartSuggestedProducts(_temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
      $scope = _ref3.$scope,
      _ref3$template = _ref3.template,
      template = _ref3$template === void 0 ? "<div>{{#products}}" + _utils__WEBPACK_IMPORTED_MODULE_3__.productCardTemplate + "{{/products}}</div>" : _ref3$template,
      context = _ref3.context;
    if (!observer) return;
    this.context = context;
    this.onRemove = this.onRemove.bind(this);
    this.onViewport = this.onViewport.bind(this);
    this.onCartChanged = this.onCartChanged.bind(this);
    this.template = template;
    this.loaded = false;
    this.$scope = $scope;
    this.defaultProductsCount = this.$scope.data('cartSuggestedProducts') ? this.$scope.data('cartSuggestedProducts') : Number(this.context.product_cartsuggested_count) || 50;
    this.$loading = $scope.find('.loading').show();
    this.$loadMore = $scope.find('.loadMore').hide();
    this.$collapse = $scope.find('.collapse').hide();
    if (this.$scope.length === 0) return;
    this.onLoadMore = this.onLoadMore.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this.unbindEvents();
    this.bindEvents();
  }
  var _proto2 = CartSuggestedProducts.prototype;
  _proto2.bindEvents = function bindEvents() {
    var _this2 = this;
    this.viewportObserver = new IntersectionObserver(this.onViewport);
    this.$scope.get().forEach(function (el) {
      return _this2.viewportObserver.observe(el);
    });
    this.$scope.on('remove', this.onRemove);
    this.$loadMore.on('click', this.onLoadMore);
    this.$collapse.on('click', this.onCollapse);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.on('cart-suggested-products-change', this.onCartChanged);
  };
  _proto2.unbindEvents = function unbindEvents() {
    var _this3 = this;
    if (this.viewportObserver) {
      this.$scope.get().forEach(function (el) {
        return _this3.viewportObserver.disconnect(el);
      });
      this.$loadMore.off('click', this.onLoadMore);
      this.$collapse.off('click', this.onCollapse);
    }
    this.$scope.off('remove', this.onRemove);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.off('cart-suggested-products-change', this.onCartChanged);
  };
  _proto2.onLoadMore = function onLoadMore(event) {
    event.preventDefault();
    var $products = this.$scope.find('.productGrid .product').filter(':hidden');
    $products.slice(0, this.defaultProductsCount).show();
    if (!$products.is(':hidden')) {
      this.$loadMore.hide();
    }
    this.$collapse.show();
  };
  _proto2.onCollapse = function onCollapse(event) {
    event.preventDefault();
    var $products = this.$scope.find('.productGrid .product');
    $products.slice(this.defaultProductsCount).hide();
    this.$collapse.hide();
    if ($products.length > this.defaultProductsCount) {
      this.$loadMore.show();
    }
    if (!$(event.currentTarget).parents('#cart-preview-dropdown').length) {
      $('html, body').animate({
        scrollTop: this.$scope.offset().top
      });
    }
  };
  _proto2.onRemove = function onRemove(event) {
    if (this.viewportObserver) {
      this.viewportObserver.disconnect(event.currentTarget);
    }
  };
  _proto2.onViewport = /*#__PURE__*/function () {
    var _onViewport = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var products, html, $cardCarousel, $cardGrid, $carouselBlaze, blazeSlider, $carouselSlick, $grid, _t;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (!this.loaded) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            this.loaded = true;
            this.$scope.show();
            _t = (lodash_shuffle__WEBPACK_IMPORTED_MODULE_0___default());
            _context3.n = 2;
            return observer.load();
          case 2:
            products = _t(_context3.v);
            html = mustache__WEBPACK_IMPORTED_MODULE_2__["default"].render(this.template, {
              products: products
            });
            $cardCarousel = $(html).children();
            $cardGrid = $(html).children();
            if (!($cardCarousel.length === 0)) {
              _context3.n = 3;
              break;
            }
            this.$scope.hide();
            return _context3.a(2);
          case 3:
            // Process Blaze carouse
            $carouselBlaze = this.$scope.find('.productCarousel.blaze-slider');
            if ($carouselBlaze.length > 0) {
              blazeSlider = $carouselBlaze.data('blazeSliderInstance');
              $carouselBlaze.find('.blaze-track-container .blaze-track').html($cardCarousel.get().map(function (el) {
                return $('<div class="productCarousel-slide"></div>').append(el);
              }));
              if (blazeSlider) {
                blazeSlider.totalSlides = $cardCarousel.length;
                blazeSlider.refresh();
              } else {
                $carouselBlaze.data('blazeSliderInstance', new blaze_slider__WEBPACK_IMPORTED_MODULE_4__["default"]($carouselBlaze.get(0), $carouselBlaze.data('blazeSlider')));
              }
            }

            // Process stick carousel
            $carouselSlick = this.$scope.find('.productCarousel:not(.blaze-slider)');
            if ($carouselSlick.length > 0) {
              $carouselSlick.filter('.slick-initialized[data-slick]').slick('unslick');
              $carouselSlick.html($cardCarousel.get().map(function (el) {
                return $('<div class="productCarousel-slide"></div>').append(el);
              }));
              $carouselSlick.filter('[data-slick]').slick();
            }

            // Process grid
            $grid = this.$scope.find('.productGrid');
            if ($grid.length > 0) {
              $grid.html($cardGrid.get().map(function (el) {
                return $('<li class="product"></li>').append(el);
              }));
              $grid.children().slice(this.defaultProductsCount).hide();
              if (products.length > this.defaultProductsCount) {
                this.$loadMore.show();
              } else {
                this.$loadMore.hide();
                this.$collapse.hide();
              }
            }

            // init wishlist buttons status
            if (this.context.showWishlist) {
              $('body').trigger('update-wishlist-buttons', [this.$scope]);
            }
            this.$loading.hide();
          case 4:
            return _context3.a(2);
        }
      }, _callee3, this);
    }));
    function onViewport() {
      return _onViewport.apply(this, arguments);
    }
    return onViewport;
  }();
  _proto2.onCartChanged = function onCartChanged(productId) {
    if (productId && !observer.productIds.includes(productId)) {
      this.loaded = false;
    }
  };
  return CartSuggestedProducts;
}();
function initObserver(context) {
  var restrictToLogin = !context.customerId && context.hidePriceFromGuests;
  if (!observer) {
    observer = new CartSuggestedProductsObserver(Object.assign({}, context, {
      restrictToLogin: restrictToLogin
    }));
  }
}
function initCartSuggestedProducts(context, $scope) {
  if ($scope === void 0) {
    $scope = $('[data-cart-suggested-products]');
  }
  try {
    initObserver(context);
    var $el = $scope.filter(function (i, el) {
      return !$(el).data('cartSuggestedProductsInstance');
    });
    if ($el.length > 0) {
      var instance = new CartSuggestedProducts({
        $scope: $el,
        context: context
      });
      $el.data('cartSuggestedProductsInstance', instance);
      return instance;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

/***/ },

/***/ "./assets/js/papathemes/modal.js"
/*!***************************************!*\
  !*** ./assets/js/papathemes/modal.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalStack: () => (/* binding */ ModalStack),
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



var PREFIX = 'papathemes__';
var ModalStack = /*#__PURE__*/function () {
  // Private constructor
  function ModalStack() {
    // Private static field to hold the singleton instance
    this.modals = [];
    if (ModalStack._instance) {
      throw new Error('ModalStack is a singleton. Use ModalStack.getInstance() instead.');
    }
    this.onBCModalOpened = this.onBCModalOpened.bind(this);
    this.onBCModalClosed = this.onBCModalClosed.bind(this);
    this.bindEvents();
  }
  // Accessor method to get the single instance
  ModalStack.getInstance = function getInstance() {
    if (!ModalStack._instance) {
      ModalStack._instance = new ModalStack(); // Private constructor usage
    }
    return ModalStack._instance;
  };
  var _proto = ModalStack.prototype;
  _proto.bindEvents = function bindEvents() {
    $('body').on(_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.ModalEvents.opened, '[data-reveal]', this.onBCModalOpened);
    $('body').on(_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.ModalEvents.closed, '[data-reveal]', this.onBCModalClosed);
  };
  _proto.onBCModalOpened = function onBCModalOpened() {
    var modal = this.modals[this.modals.length - 1];
    if (modal) modal.hideModal();
  };
  _proto.onBCModalClosed = function onBCModalClosed() {
    var hasBCModalOpened = $('[data-reveal]:visible').length > 0;
    if (!hasBCModalOpened) {
      var modal = this.modals[this.modals.length - 1];
      if (modal) modal.showModal();
    }
  };
  _proto.add = function add(modal) {
    var lastModal = this.modals[this.modals.length - 1];
    if (lastModal) lastModal.hideModal();
    this.modals.push(modal);
  };
  _proto.remove = function remove(modal) {
    this.modals = this.modals.filter(function (m) {
      return m !== modal;
    });
    var lastModal = this.modals[this.modals.length - 1];
    if (lastModal) lastModal.showModal();
  };
  return ModalStack;
}();
ModalStack._instance = null;

var Modal = /*#__PURE__*/function () {
  function Modal(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$modalTemplate = _ref.modalTemplate,
      modalTemplate = _ref$modalTemplate === void 0 ? "\n            <div class=\"" + PREFIX + "modal-overlay {{overlayExtraClass}}\">\n                <div class=\"" + PREFIX + "modal {{modalExtraClass}}\" data-papathemes-modal>\n                    <button class=\"" + PREFIX + "modal-close\" type=\"button\" title=\"Close\" data-papathemes-modal-close>\n                        <span class=\"aria-description--hidden\">Close</span>\n                        <span class=\"icon\" aria-hidden=\"true\">\n                            <svg><use href=\"#icon-xmark-large\"></use></svg>\n                        </span>\n                    </button>\n                    {{#modalTitle}}\n                        <div class=\"" + PREFIX + "modal-header\">\n                            {{modalTitle}}\n                        </div>\n                    {{/modalTitle}}\n                    {{#loading}}\n                        <div class=\"loadingOverlay " + PREFIX + "modal-loading\"></div>\n                    {{/loading}}\n                    {{^loading}}\n                        <div class=\"" + PREFIX + "modal-body\">\n                            {{&content}}\n                        </div>\n                    {{/loading}}\n                </div>\n            </div>\n        " : _ref$modalTemplate,
      _ref$overlayExtraClas = _ref.overlayExtraClass,
      overlayExtraClass = _ref$overlayExtraClas === void 0 ? '' : _ref$overlayExtraClas,
      _ref$modalExtraClass = _ref.modalExtraClass,
      modalExtraClass = _ref$modalExtraClass === void 0 ? '' : _ref$modalExtraClass,
      _ref$modalTitle = _ref.modalTitle,
      modalTitle = _ref$modalTitle === void 0 ? '' : _ref$modalTitle,
      _ref$closeOnBackgroun = _ref.closeOnBackgroundClick,
      closeOnBackgroundClick = _ref$closeOnBackgroun === void 0 ? false : _ref$closeOnBackgroun,
      _ref$closeOnEsc = _ref.closeOnEsc,
      closeOnEsc = _ref$closeOnEsc === void 0 ? false : _ref$closeOnEsc,
      _ref$stackable = _ref.stackable,
      stackable = _ref$stackable === void 0 ? false : _ref$stackable;
    this.$modal = void 0;
    this.$lastActiveElement = void 0;
    this.focusTrap = void 0;
    this.$body = $('body');
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onBodyClickCloseModal = this.onBodyClickCloseModal.bind(this);
    this.modalTemplate = modalTemplate;
    this.overlayExtraClass = overlayExtraClass;
    this.modalExtraClass = modalExtraClass;
    this.modalTitle = modalTitle;
    this.closeOnBackgroundClick = closeOnBackgroundClick;
    this.closeOnEsc = closeOnEsc;
    this.stackable = stackable;
    this.modalStack = ModalStack.getInstance();
    this.$modal = null;
  }
  var _proto2 = Modal.prototype;
  _proto2.openModal = function openModal(content, loading) {
    var _this = this;
    if (content === void 0) {
      content = '';
    }
    if (loading === void 0) {
      loading = false;
    }
    if (this.$modal && this.$modal.length > 0) return;
    this.$lastActiveElement = $(document.activeElement);
    this.$body.addClass("_" + PREFIX + "modal-opened");
    var overlayExtraClass = this.overlayExtraClass,
      modalExtraClass = this.modalExtraClass,
      modalTitle = this.modalTitle;
    this.$modal = $(mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(this.modalTemplate, {
      content: content,
      loading: loading,
      overlayExtraClass: overlayExtraClass,
      modalExtraClass: modalExtraClass,
      modalTitle: modalTitle
    }));
    this.$modal.hide().appendTo('body').addClass('_opening').show().removeClass('_opening');
    this.bindEvents();
    this.focusTrap = (0,focus_trap__WEBPACK_IMPORTED_MODULE_1__.createFocusTrap)(this.$modal.get(0), {
      escapeDeactivates: false,
      returnFocusOnDeactivate: false,
      allowOutsideClick: true
    });
    this.focusTrap.activate();
    setTimeout(function () {
      _this.$modal.find('[data-papathemes-modal-close]').trigger('focus');
    }, 200);
    if (this.stackable) this.modalStack.add(this);
  };
  _proto2.updateContent = function updateContent(content) {
    var overlayExtraClass = this.overlayExtraClass,
      modalExtraClass = this.modalExtraClass,
      modalTitle = this.modalTitle;
    var $modal = $(mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(this.modalTemplate, {
      content: content,
      overlayExtraClass: overlayExtraClass,
      modalExtraClass: modalExtraClass,
      modalTitle: modalTitle
    }));
    this.$modal.find('[data-papathemes-modal]').replaceWith($modal.find('[data-papathemes-modal]'));
    this.bindEvents();
  };
  _proto2.closeModal = function closeModal() {
    var _this2 = this;
    if (!this.$modal) return; // Ngăn chặn gọi closeModal nhiều lần

    this.$body.off('click', this.onBodyClickCloseModal);
    this.$modal.addClass('_closing');
    setTimeout(function () {
      _this2.$body.removeClass("_" + PREFIX + "modal-opened");
      if (_this2.$modal) {
        _this2.$modal.remove();
        _this2.$modal = null;
      }
      _this2.focusTrap.deactivate();
      _this2.$lastActiveElement.trigger('focus');
      if (_this2.stackable) _this2.modalStack.remove(_this2);
    }, 300);
    if (this.closeOnEsc) this.unbindEscEvent();
  };
  _proto2.hideModal = function hideModal() {
    var _this3 = this;
    if (!this.$modal || this.$modal.is(':hidden')) return;
    this.$modal.addClass('_closing');
    this.$body.removeClass("_" + PREFIX + "modal-opened");
    this.focusTrap.deactivate();
    this.$lastActiveElement.trigger('focus');
    setTimeout(function () {
      _this3.$modal.hide().addClass('_hidden').removeClass('_closing');
    }, 300);
    if (this.closeOnEsc) this.unbindEscEvent();
  };
  _proto2.showModal = function showModal() {
    if (!this.$modal || this.$modal.is(':visible')) return;
    this.$body.addClass("_" + PREFIX + "modal-opened");
    this.$modal.removeClass('_hidden').addClass('_opening').show().removeClass('_opening');
    this.focusTrap.activate();
    if (this.closeOnEsc) this.bindEscEvent();
  };
  _proto2.bindEvents = function bindEvents() {
    var _this4 = this;
    this.$modal.find('[data-papathemes-modal-close]').off('click').on('click', function (event) {
      event.preventDefault();
      _this4.closeModal();
    });
    if (this.closeOnBackgroundClick) {
      // make sure modal is finished displaying before binding the click event
      // to prevent closing the modal immediately
      setTimeout(function () {
        _this4.$body.off('click', _this4.onBodyClickCloseModal).on('click', _this4.onBodyClickCloseModal);
      }, 500);
    }
    if (this.closeOnEsc) {
      this.unbindEscEvent();
      this.bindEscEvent();
    }
  };
  _proto2.onBodyClickCloseModal = function onBodyClickCloseModal(event) {
    var $target = $(event.target);
    if (this.$modal && this.$modal.is(':visible') && ($target.is(this.$modal) || $target.closest(this.$modal).length === 0)) {
      this.closeModal();
    }
  };
  _proto2.onKeyUp = function onKeyUp(event) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  };
  _proto2.bindEscEvent = function bindEscEvent() {
    $(document).on('keyup', this.onKeyUp);
  };
  _proto2.unbindEscEvent = function unbindEscEvent() {
    $(document).off('keyup', this.onKeyUp);
  };
  return Modal;
}();


/***/ },

/***/ "./assets/js/papathemes/recently-viewed-products.js"
/*!**********************************************************!*\
  !*** ./assets/js/papathemes/recently-viewed-products.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRecentlyViewedProductsDropdown: () => (/* binding */ initRecentlyViewedProductsDropdown),
/* harmony export */   initRecentlyViewedProductsSection: () => (/* binding */ initRecentlyViewedProductsSection)
/* harmony export */ });
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./assets/js/papathemes/utils.js");
/* harmony import */ var blaze_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blaze-slider */ "./node_modules/blaze-slider/dist/blaze-slider.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var _excluded = ["customerRecentlyViewedProductIds", "customerId", "ignoreProductViewedEvent"];
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }




var observer;
var dummyStorage = {
  getItem: function getItem() {},
  setItem: function setItem() {},
  removeItem: function removeItem() {},
  clear: function clear() {}
};
var RecentlyViewedProductsObserver = /*#__PURE__*/function () {
  function RecentlyViewedProductsObserver(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$customerRecently = _ref.customerRecentlyViewedProductIds,
      customerRecentlyViewedProductIds = _ref$customerRecently === void 0 ? [] : _ref$customerRecently,
      _ref$customerId = _ref.customerId,
      customerId = _ref$customerId === void 0 ? 0 : _ref$customerId,
      _ref$ignoreProductVie = _ref.ignoreProductViewedEvent,
      ignoreProductViewedEvent = _ref$ignoreProductVie === void 0 ? false : _ref$ignoreProductVie,
      options = _objectWithoutPropertiesLoose(_ref, _excluded);
    this.onProductViewed = this.onProductViewed.bind(this);
    this.storage = window.localStorage || dummyStorage;
    this.productIds = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.parseJSON)(this.storage.getItem('papathemes_recentlyViewedProducts') || '[]') || [];
    this.customerRecentlyViewedProductIds = customerRecentlyViewedProductIds;
    this.customerId = customerId;
    this.ignoreProductViewedEvent = ignoreProductViewedEvent;
    this.options = options;
    this.query = new _utils__WEBPACK_IMPORTED_MODULE_3__.ProductCardsGraphQLQuery(options);
    var lastCustomerId = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.parseJSON)(this.storage.getItem('papathemes_customerId') || '0') || 0;

    // Clear recently viewed products of other customer last logged in
    if (lastCustomerId && lastCustomerId !== this.customerId) {
      this.productIds = [];
      this.storage.setItem('papathemes_recentlyViewedProducts', JSON.stringify(this.productIds));
    }
    this.storage.setItem('papathemes_customerId', JSON.stringify(this.customerId));
    this.unbindEvents();
    this.bindEvents();
  }
  var _proto = RecentlyViewedProductsObserver.prototype;
  _proto.bindEvents = function bindEvents() {
    if (!this.ignoreProductViewedEvent) {
      $('body').on('productviewed', this.onProductViewed);
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    if (!this.ignoreProductViewedEvent) {
      $('body').off('productviewed', this.onProductViewed);
    }
  };
  _proto.onProductViewed = function onProductViewed(event, productId) {
    try {
      if (productId && !this.productIds.includes(productId)) {
        this.productIds.unshift(productId);
        this.storage.setItem('papathemes_recentlyViewedProducts', JSON.stringify(this.productIds));
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.emit('product-view', productId);
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };
  _proto.load = /*#__PURE__*/function () {
    var _load = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var productIds;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!(this.customerId && this.customerRecentlyViewedProductIds.length === 0)) {
              _context.n = 2;
              break;
            }
            _context.n = 1;
            return new Promise(function (resolve) {
              _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.getPage('/', {
                template: 'papathemes/recently-viewed-products/customer-product-ids',
                config: {
                  customer: {
                    recently_viewed_products: true
                  }
                }
              }, function (err, resp) {
                resolve(String($(resp).data('productIds')).split(',').map(function (s) {
                  return Number(s);
                }).filter(function (i) {
                  return i;
                }));
              });
            });
          case 1:
            this.customerRecentlyViewedProductIds = _context.v;
          case 2:
            productIds = lodash_uniq__WEBPACK_IMPORTED_MODULE_0___default()([].concat(this.customerRecentlyViewedProductIds, this.productIds)).filter(function (productId) {
              return productId;
            }).slice(0, 100);
            return _context.a(2, this.query.load(productIds));
        }
      }, _callee, this);
    }));
    function load() {
      return _load.apply(this, arguments);
    }
    return load;
  }();
  return RecentlyViewedProductsObserver;
}();
var RecentlyViewedProductsDropdown = /*#__PURE__*/function () {
  function RecentlyViewedProductsDropdown(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      $dropdownHandler = _ref2.$dropdownHandler,
      $dropdown = _ref2.$dropdown,
      _ref2$template = _ref2.template,
      template = _ref2$template === void 0 ? "\n            <h2 class=\"_heading\">{{heading}}</h2>\n            <ul class=\"_productList\">\n                {{#products}}\n                    <li class=\"_productList-item\">\n                        <article class=\"card\"\n                            data-event-type=\"list\"\n                            data-entity-id=\"{{id}}\"\n                            data-position=\"{{index}}\"\n                            data-name=\"{{name}}\"\n                            data-product-price=\"{{price.value}}\">\n                            <figure class=\"card-figure\">\n                                <a class=\"card-img-container\" href=\"{{url}}\">\n                                    <img\n                                        {{#defaultImage}}\n                                            src=\"{{url320wide}}\"\n                                            srcset=\"{{url80wide}} 80w, {{url160wide}} 160w, {{url320wide}} 320w, {{url640wide}} 640w\"\n                                        {{/defaultImage}}\n                                        {{^defaultImage}}\n                                            src=\"{{defaultProductImage}}\"\n                                        {{/defaultImage}}\n                                        data-sizes=\"auto\"\n                                        class=\"card-image lazyload\"\n                                        alt=\"{{name}}\"\n                                        title=\"{{name}}\">\n                                </a>\n                            </figure>\n                            <div class=\"card-body\">\n                                <h3 class=\"card-title\">\n                                    <a href=\"{{url}}\" data-event-type=\"product-click\">{{name}}</a>\n                                </h3>\n                                {{#ratingHtml}}\n                                    <p class=\"card-text card-text--rating\" data-test-info-type=\"productRating\">\n                                        <span class=\"rating--small\">\n                                            {{&ratingHtml}}\n                                        </span>\n                                        {{#show_numReviews}}\n                                            <span class=\"rating--number\">({{&numberOfReviews}})</span>\n                                        {{/show_numReviews}}\n                                    </p>\n                                {{/ratingHtml}}\n                                {{#card_show_sku}}\n                                    {{#sku}}\n                                        <div class=\"card-text card-text--sku\" data-test-info-type=\"sku\">\n                                            {{sku}}\n                                        </div>\n                                    {{/sku}}\n                                {{/card_show_sku}}\n                                {{#card_show_brand}}\n                                    {{#brand}}\n                                        <div class=\"card-text card-text--brand\" data-test-info-type=\"brandName\">\n                                            <a href=\"{{brand.path}}\" alt=\"{{brand.name}}\">{{brand.name}}</a>\n                                        </div>\n                                    {{/brand}}\n                                {{/card_show_brand}}\n                                {{#customFields}}\n                                    <div class=\"card-text card-text--info\">\n                                        {{&customFields}}\n                                    </div>\n                                {{/customFields}}\n                                {{#price}}\n                                    <div class=\"card-text--price\">\n                                        {{&price.formatted}}\n                                    </div>\n                                {{/price}}\n                            </div>\n                        </article>\n                    </li>\n                {{/products}}\n            </ul>\n        " : _ref2$template;
    if (!observer) return;
    this.onDropdownOpened = this.onDropdownOpened.bind(this);
    this.onProductViewed = this.onProductViewed.bind(this);
    this.template = template;
    this.$dropdownHandler = $dropdownHandler;
    this.$dropdown = $dropdown;
    if (this.$dropdownHandler.length === 0) return;
    if (observer.customerId || observer.productIds.length > 0) {
      this.$dropdownHandler.show();
    } else {
      this.$dropdownHandler.hide();
    }
    this.unbindEvents();
    this.bindEvents();
  }
  var _proto2 = RecentlyViewedProductsDropdown.prototype;
  _proto2.bindEvents = function bindEvents() {
    this.$dropdown.on('opened.fndtn.dropdown', this.onDropdownOpened);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.on('product-view', this.onProductViewed);
  };
  _proto2.unbindEvents = function unbindEvents() {
    this.$dropdown.off('opened.fndtn.dropdown', this.onDropdownOpened);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.off('product-view', this.onProductViewed);
  };
  _proto2.onProductViewed = function onProductViewed() {
    this.$dropdownHandler.show();
  };
  _proto2.onDropdownOpened = /*#__PURE__*/function () {
    var _onDropdownOpened = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(event, $dropdown) {
      var products, heading, html;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            $dropdown.addClass('is-loading').html($('<div class="loadingOverlay" style="display: block"></div>'));
            _context2.n = 1;
            return observer.load();
          case 1:
            products = _context2.v;
            heading = this.$dropdownHandler.attr('title');
            html = mustache__WEBPACK_IMPORTED_MODULE_2__["default"].render(this.template, {
              products: products,
              heading: heading
            });
            $dropdown.html(html).removeClass('is-loading');
          case 2:
            return _context2.a(2);
        }
      }, _callee2, this);
    }));
    function onDropdownOpened(_x, _x2) {
      return _onDropdownOpened.apply(this, arguments);
    }
    return onDropdownOpened;
  }();
  return RecentlyViewedProductsDropdown;
}();
var RecentlyViewedProductsSection = /*#__PURE__*/function () {
  function RecentlyViewedProductsSection(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      $scope = _ref3.$scope,
      _ref3$template = _ref3.template,
      template = _ref3$template === void 0 ? "<div>{{#products}}" + _utils__WEBPACK_IMPORTED_MODULE_3__.productCardTemplate + "{{/products}}</div>" : _ref3$template,
      context = _ref3.context;
    if (!observer) return;
    this.context = context;
    this.defaultProductsCount = Number(this.context.product_recentviewed_count) || 50;
    this.onRemove = this.onRemove.bind(this);
    this.onViewport = this.onViewport.bind(this);
    this.onProductViewed = this.onProductViewed.bind(this);
    this.template = template;
    this.loaded = false;
    this.$scope = $scope;
    this.$loading = $scope.find('.loading').show();
    this.$loadMore = $scope.find('.loadMore').hide();
    this.$collapse = $scope.find('.collapse').hide();
    if (this.$scope.length === 0) return;
    this.onLoadMore = this.onLoadMore.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
    this.unbindEvents();
    this.bindEvents();
  }
  var _proto3 = RecentlyViewedProductsSection.prototype;
  _proto3.bindEvents = function bindEvents() {
    var _this = this;
    this.viewportObserver = new IntersectionObserver(this.onViewport);
    this.$scope.get().forEach(function (el) {
      return _this.viewportObserver.observe(el);
    });
    this.$scope.on('remove', this.onRemove);
    this.$loadMore.on('click', this.onLoadMore);
    this.$collapse.on('click', this.onCollapse);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.on('product-view', this.onProductViewed);
  };
  _proto3.unbindEvents = function unbindEvents() {
    var _this2 = this;
    if (this.viewportObserver) {
      this.$scope.get().forEach(function (el) {
        return _this2.viewportObserver.disconnect(el);
      });
      this.$loadMore.off('click', this.onLoadMore);
      this.$collapse.off('click', this.onCollapse);
    }
    this.$scope.off('remove', this.onRemove);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].hooks.off('product-view', this.onProductViewed);
  };
  _proto3.onLoadMore = function onLoadMore(event) {
    event.preventDefault();
    var $products = this.$scope.find('.product').filter(':hidden');
    $products.slice(0, this.defaultProductsCount).show();
    if (!$products.is(':hidden')) {
      this.$loadMore.hide();
    }
    this.$collapse.show();
  };
  _proto3.onCollapse = function onCollapse(event) {
    event.preventDefault();
    var $products = this.$scope.find('.product');
    $products.slice(this.defaultProductsCount).hide();
    this.$collapse.hide();
    if ($products.length > this.defaultProductsCount) {
      this.$loadMore.show();
    }
    $('html, body').animate({
      scrollTop: this.$scope.offset().top
    });
  };
  _proto3.onRemove = function onRemove(event) {
    if (this.viewportObserver) {
      this.viewportObserver.disconnect(event.currentTarget);
    }
  };
  _proto3.onViewport = /*#__PURE__*/function () {
    var _onViewport = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var products, html, $cards, $carouselBlaze, blazeSlider, $carouselSlick, $grid;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (!this.loaded) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            this.loaded = true;
            this.$scope.show();
            _context3.n = 2;
            return observer.load();
          case 2:
            products = _context3.v;
            html = mustache__WEBPACK_IMPORTED_MODULE_2__["default"].render(this.template, {
              products: products
            });
            $cards = $(html).children();
            if (!($cards.length === 0)) {
              _context3.n = 3;
              break;
            }
            this.$scope.hide();
            return _context3.a(2);
          case 3:
            // Process Blaze carouse
            $carouselBlaze = this.$scope.find('.productCarousel.blaze-slider');
            if ($carouselBlaze.length > 0) {
              blazeSlider = $carouselBlaze.data('blazeSliderInstance');
              $carouselBlaze.find('.blaze-track-container .blaze-track').html($cards.get().map(function (el) {
                return $('<div class="productCarousel-slide"></div>').append(el);
              }));
              if (blazeSlider) {
                blazeSlider.totalSlides = $cards.length;
                blazeSlider.refresh();
              } else {
                $carouselBlaze.data('blazeSliderInstance', new blaze_slider__WEBPACK_IMPORTED_MODULE_4__["default"]($carouselBlaze.get(0), $carouselBlaze.data('blazeSlider')));
              }
            }

            // Process stick carousel
            $carouselSlick = this.$scope.find('.productCarousel:not(.blaze-slider)');
            if ($carouselSlick.length > 0) {
              $carouselSlick.filter('.slick-initialized[data-slick]').slick('unslick');
              $carouselSlick.html($cards.get().map(function (el) {
                return $('<div class="productCarousel-slide"></div>').append(el);
              }));
              $carouselSlick.filter('[data-slick]').slick();
            }

            // Process grid
            $grid = this.$scope.find('.productGrid');
            if ($grid.length > 0) {
              $grid.html($cards.get().map(function (el) {
                return $('<li class="product"></li>').append(el);
              }));
              $grid.children().slice(this.defaultProductsCount).hide();
              if (products.length > this.defaultProductsCount) {
                this.$loadMore.show();
              } else {
                this.$scope.find('.actionGroup').addClass('notActive');
              }
            }

            // init wishlist buttons status
            if (this.context.showWishlist) {
              $('body').trigger('update-wishlist-buttons', [this.$scope]);
            }
            this.$loading.hide();
          case 4:
            return _context3.a(2);
        }
      }, _callee3, this);
    }));
    function onViewport() {
      return _onViewport.apply(this, arguments);
    }
    return onViewport;
  }();
  _proto3.onProductViewed = function onProductViewed(productId) {
    if (productId && !observer.productIds.includes(productId)) {
      this.loaded = false;
    }
  };
  return RecentlyViewedProductsSection;
}();
function initObserver(context) {
  var customerRecentlyViewedProductIds = String(context.customerRecentlyViewedProductIds).split(',').map(function (s) {
    return Number(s);
  }).filter(function (i) {
    return i;
  });
  var restrictToLogin = !context.customerId && context.hidePriceFromGuests;
  if (!observer) {
    observer = new RecentlyViewedProductsObserver(Object.assign({}, context, {
      customerRecentlyViewedProductIds: customerRecentlyViewedProductIds,
      restrictToLogin: restrictToLogin
    }));
  }
}
function initRecentlyViewedProductsDropdown(context, $dropdownHandler, $dropdown) {
  if ($dropdownHandler === void 0) {
    $dropdownHandler = $('[data-dropdown="recently-viewed-dropdown"]');
  }
  if ($dropdown === void 0) {
    $dropdown = $('#recently-viewed-dropdown');
  }
  try {
    initObserver(context);
    return new RecentlyViewedProductsDropdown({
      $dropdownHandler: $dropdownHandler,
      $dropdown: $dropdown
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}
function initRecentlyViewedProductsSection(context, $scope) {
  if ($scope === void 0) {
    $scope = $('[data-recently-viewed-products-section]');
  }
  try {
    initObserver(context);
    var $el = $scope.filter(function (i, el) {
      return !$(el).data('recentlyViewedProductsSectionInstance');
    });
    if ($el.length > 0) {
      var instance = new RecentlyViewedProductsSection({
        $scope: $el,
        context: context
      });
      $el.data('recentlyViewedProductsSectionInstance', instance);
      return instance;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

/***/ },

/***/ "./node_modules/lodash/_baseRandom.js"
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseRandom.js ***!
  \********************************************/
(module) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;


/***/ },

/***/ "./node_modules/lodash/_copyArray.js"
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
(module) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ },

/***/ "./node_modules/lodash/_shuffleSelf.js"
/*!*********************************************!*\
  !*** ./node_modules/lodash/_shuffleSelf.js ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseRandom = __webpack_require__(/*! ./_baseRandom */ "./node_modules/lodash/_baseRandom.js");

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */
function shuffleSelf(array, size) {
  var index = -1,
      length = array.length,
      lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = baseRandom(index, lastIndex),
        value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

module.exports = shuffleSelf;


/***/ },

/***/ "./node_modules/lodash/shuffle.js"
/*!****************************************!*\
  !*** ./node_modules/lodash/shuffle.js ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    shuffleSelf = __webpack_require__(/*! ./_shuffleSelf */ "./node_modules/lodash/_shuffleSelf.js");

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function arrayShuffle(array) {
  return shuffleSelf(copyArray(array));
}

module.exports = arrayShuffle;


/***/ },

/***/ "./node_modules/lodash/uniq.js"
/*!*************************************!*\
  !*** ./node_modules/lodash/uniq.js ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2NhcnQtZHJhd2VyX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDbkI7QUFDcUI7QUFDOEI7QUFDYjtBQUNwQztBQUU5QixJQUFJTSxtQkFBbUI7QUFBQyxJQUVsQkMsSUFBSSwwQkFBQUMsU0FBQTtFQUNOLFNBQUFELEtBQVlFLE9BQU8sRUFBRUMsTUFBTSxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUN6QkEsS0FBQSxHQUFBSCxTQUFBLENBQUFJLElBQUEsT0FBTUgsT0FBTyxDQUFDO0lBQ2RFLEtBQUEsQ0FBS0QsTUFBTSxHQUFHQSxNQUFNLElBQUlHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDakNGLEtBQUEsQ0FBS0csT0FBTyxDQUFDLENBQUM7SUFBQyxPQUFBSCxLQUFBO0VBQ25COztFQUVBO0VBQUFJLGNBQUEsQ0FBQVIsSUFBQSxFQUFBQyxTQUFBO0VBQUEsSUFBQVEsTUFBQSxHQUFBVCxJQUFBLENBQUFVLFNBQUE7RUFBQUQsTUFBQSxDQUNBRixPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ04sSUFBSSxDQUFDSSxNQUFNLEdBQUcsSUFBSTtJQUNsQixJQUFJLENBQUNDLGdCQUFnQixHQUFHTixDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQ0gsTUFBTSxDQUFDO0lBQ3JELElBQUksQ0FBQ1UsWUFBWSxHQUFHUCxDQUFDLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDSCxNQUFNLENBQUM7SUFDekQsSUFBSSxDQUFDVyxhQUFhLEdBQUdSLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUNILE1BQU0sQ0FBQztJQUN6RCxJQUFJLENBQUNZLFdBQVcsR0FBR1QsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQ0gsTUFBTSxDQUFDO0lBQ3ZELElBQUksQ0FBQ2EsMkJBQTJCLEdBQUdWLENBQUMsQ0FBQyx5Q0FB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QUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzQkEsZ0JBQWdCLG1CQUFPLENBQUMseURBQWM7QUFDdEMsa0JBQWtCLG1CQUFPLENBQUMsNkRBQWdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNkQSxlQUFlLG1CQUFPLENBQUMsdURBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvY2FydC1kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9jYXJ0LXN1Z2dlc3RlZC1wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL21vZGFsLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvcmVjZW50bHktdmlld2VkLXByb2R1Y3RzLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVJhbmRvbS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlBcnJheS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NodWZmbGVTZWxmLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zaHVmZmxlLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC91bmlxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi90aGVtZS9nbG9iYWwvbW9kYWwnO1xyXG5pbXBvcnQgeyBpbml0UmVjZW50bHlWaWV3ZWRQcm9kdWN0c1NlY3Rpb24gfSBmcm9tICcuL3JlY2VudGx5LXZpZXdlZC1wcm9kdWN0cyc7XHJcbmltcG9ydCBpbml0Q2FydFN1Z2dlc3RlZFByb2R1Y3RzIGZyb20gJy4vY2FydC1zdWdnZXN0ZWQtcHJvZHVjdHMnO1xyXG5pbXBvcnQgQ2FydFBhZ2UgZnJvbSAnLi9jYXJ0JztcclxuXHJcbmxldCBjYXJ0RHJhd2VyU2luZ2xldG9uO1xyXG5cclxuY2xhc3MgQ2FydCBleHRlbmRzIENhcnRQYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsICRzY29wZSkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlIHx8ICQoJ2JvZHknKTtcclxuICAgICAgICB0aGlzLm9uUmVhZHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb3BpZWQgZnJvbSB0aGUgYmFzZSBjbGFzcy4gYWRkIHNjb3BlIHRvIGpxdWVyeSBzZWxlY3RvclxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLiRtb2RhbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kY2FydFBhZ2VDb250ZW50ID0gJCgnW2RhdGEtY2FydF0nLCB0aGlzLiRzY29wZSk7XHJcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0LWNvbnRlbnRdJywgdGhpcy4kc2NvcGUpO1xyXG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScsIHRoaXMuJHNjb3BlKTtcclxuICAgICAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJywgdGhpcy4kc2NvcGUpO1xyXG4gICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zID0gJCgnW2RhdGEtY2FydC1hZGRpdGlvbmFsLWNoZWNrb3V0LWJ1dHRvbnNdJywgdGhpcy4kc2NvcGUpO1xyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0XSAubG9hZGluZ092ZXJsYXknLCB0aGlzLiRzY29wZSlcclxuICAgICAgICAgICAgLmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcclxuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0QXBwbGVQYXlTdXBwb3J0KCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENhcnREcmF3ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbCh7XHJcbiAgICAgICAgICAgIG92ZXJsYXlFeHRyYUNsYXNzOiAnY2FydC1kcmF3ZXInLFxyXG4gICAgICAgICAgICBjbG9zZU9uQmFja2dyb3VuZENsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlLFxyXG4gICAgICAgICAgICBzdGFja2FibGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5vdmVycmlkZUNhcnRQcmV2aWV3TW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtZHJhd2VyLXRvZ2dsZV0nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZENhcnRRdWFudGl0eVVwZGF0ZUV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZENhcnRRdWFudGl0eVVwZGF0ZUV2ZW50KCkge1xyXG4gICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKCdbZGF0YS1jYXJ0LWRyYXdlci10b2dnbGVdJyk7XHJcblxyXG4gICAgICAgIC8vIGNvcGllZCBDb3JuZXJzdG9uZSBjb2RlXHJcbiAgICAgICAgLy8gQHNlZTogYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jYXJ0LXByZXZpZXcuanNcclxuICAgICAgICAkYm9keS5vbignY2FydC1xdWFudGl0eS11cGRhdGUnLCAoZXZlbnQsIHF1YW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICR0b2dnbGUuYXR0cignYXJpYS1sYWJlbCcsIChfLCBwcmV2VmFsdWUpID0+IHByZXZWYWx1ZS5yZXBsYWNlKC9cXGQrLywgcXVhbnRpdHkpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcXVhbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgICR0b2dnbGUuYWRkQ2xhc3MoJ25hdlVzZXItaXRlbS0tY2FydF9faGlkZGVuLXMnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICR0b2dnbGUucmVtb3ZlQ2xhc3MoJ25hdlVzZXItaXRlbS0tY2FydF9faGlkZGVuLXMnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnLmNhcnQtcXVhbnRpdHknKVxyXG4gICAgICAgICAgICAgICAgLnRleHQocXVhbnRpdHkpXHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3MoJ2NvdW50UGlsbC0tcG9zaXRpdmUnLCBxdWFudGl0eSA+IDApO1xyXG4gICAgICAgICAgICBpZiAodXRpbHMudG9vbHMuc3RvcmFnZS5sb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQtcXVhbnRpdHknLCBxdWFudGl0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q2FydChjb250ZW50KSB7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbC51cGRhdGVDb250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSB0aGUgbmV3bHkgYWRkZWQgaXRlbSB0byB0aGUgdG9wIG9mIHRoZSBjYXJ0XHJcbiAgICAgICAgICAgIGNvbnN0ICRpdGVtID0gdGhpcy5tb2RhbC4kbW9kYWwuZmluZCgnW2RhdGEtaXRlbS1yb3ctYWRkZWRdJyk7XHJcbiAgICAgICAgICAgICRpdGVtLnByZXBlbmRUbygkaXRlbS5wYXJlbnQoKSk7XHJcbiAgICAgICAgICAgICRpdGVtLmFkZENsYXNzKCdfYWRkaW5nJyk7XHJcbiAgICAgICAgICAgICRpdGVtLm9uZSgnYW5pbWF0aW9uZW5kJywgKCkgPT4gJGl0ZW0ucmVtb3ZlQ2xhc3MoJ19hZGRpbmcnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhcnQgPSBuZXcgQ2FydCh0aGlzLmNvbnRleHQsIHRoaXMubW9kYWwuJG1vZGFsKTtcclxuICAgICAgICBpbml0UmVjZW50bHlWaWV3ZWRQcm9kdWN0c1NlY3Rpb24odGhpcy5jb250ZXh0KTtcclxuICAgICAgICBpbml0Q2FydFN1Z2dlc3RlZFByb2R1Y3RzKHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbigpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wZW5Nb2RhbCgnJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQoeyB0ZW1wbGF0ZTogJ3BhcGF0aGVtZXMvY2FydC1kcmF3ZXInIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdENhcnQocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJyaWRlQ2FydFByZXZpZXdNb2RhbCgpIHtcclxuICAgICAgICBjb25zdCBwcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwcmV2aWV3TW9kYWwnKVswXTtcclxuXHJcbiAgICAgICAgcHJldmlld01vZGFsLm9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXZpZXdNb2RhbC5jbG9zZSgpOyAvLyB0byBjbG9zZSB0aGUgcXVpY2sgdmlldyBtb2RhbFxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5wYWdlX3R5cGUgIT09ICdjYXJ0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5vcGVuTW9kYWwoJycsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHJldmlld01vZGFsLnVwZGF0ZUNvbnRlbnQgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5wYWdlX3R5cGUgPT09ICdjYXJ0Jykge1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3JlZnJlc2gtY2FydCcsIFtyZXNwb25zZV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXR5ID0gJChyZXNwb25zZSkuZmluZCgnW2RhdGEtY2FydC1xdWFudGl0eV0nKS5hdHRyKCdkYXRhLWNhcnQtcXVhbnRpdHknKTtcclxuICAgICAgICAgICAgICAgIHByZXZpZXdNb2RhbC4kY29udGVudC5odG1sKGA8ZGl2IGRhdGEtY2FydC1xdWFudGl0eT1cIiR7cXR5fVwiPjwvZGl2PmApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0Q2FydChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmYWN0b3J5KGNvbnRleHQpIHtcclxuICAgIGlmICghY2FydERyYXdlclNpbmdsZXRvbikge1xyXG4gICAgICAgIGNhcnREcmF3ZXJTaW5nbGV0b24gPSBuZXcgQ2FydERyYXdlcihjb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FydERyYXdlclNpbmdsZXRvbjtcclxufVxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgeyBzaHVmZmxlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IE11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuaW1wb3J0IHsgUHJvZHVjdENhcmRzR3JhcGhRTFF1ZXJ5LCBwcm9kdWN0Q2FyZFRlbXBsYXRlIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCBCbGF6ZVNsaWRlciBmcm9tICdibGF6ZS1zbGlkZXInO1xyXG5cclxubGV0IG9ic2VydmVyO1xyXG5cclxuY2xhc3MgQ2FydFN1Z2dlc3RlZFByb2R1Y3RzT2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5vbkNhcnRDaGFuZ2VkID0gdGhpcy5vbkNhcnRDaGFuZ2VkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IG5ldyBQcm9kdWN0Q2FyZHNHcmFwaFFMUXVlcnkob3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB1dGlscy5ob29rcy5vbignY2FydC1pdGVtLWFkZC1yZW1vdGUnLCB0aGlzLm9uQ2FydENoYW5nZWQpO1xyXG4gICAgICAgIHV0aWxzLmhvb2tzLm9uKCdjYXJ0LWl0ZW0tdXBkYXRlLXJlbW90ZScsIHRoaXMub25DYXJ0Q2hhbmdlZCk7XHJcbiAgICAgICAgdXRpbHMuaG9va3Mub24oJ2NhcnQtaXRlbS1yZW1vdmUtcmVtb3RlJywgdGhpcy5vbkNhcnRDaGFuZ2VkKTtcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdXRpbHMuaG9va3Mub2ZmKCdjYXJ0LWl0ZW0tYWRkLXJlbW90ZScsIHRoaXMub25DYXJ0Q2hhbmdlZCk7XHJcbiAgICAgICAgdXRpbHMuaG9va3Mub2ZmKCdjYXJ0LWl0ZW0tdXBkYXRlLXJlbW90ZScsIHRoaXMub25DYXJ0Q2hhbmdlZCk7XHJcbiAgICAgICAgdXRpbHMuaG9va3Mub2ZmKCdjYXJ0LWl0ZW0tcmVtb3ZlLXJlbW90ZScsIHRoaXMub25DYXJ0Q2hhbmdlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYXJ0Q2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcclxuICAgICAgICB1dGlscy5ob29rcy5lbWl0KCdjYXJ0LXN1Z2dlc3RlZC1wcm9kdWN0cy1jaGFuZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZCkgcmV0dXJuIHRoaXMucHJvZHVjdHM7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FydCA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDYXJ0KHt9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY2FydCkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJ0UHJvZHVjdElkcyA9IFsuLi5jYXJ0LmxpbmVJdGVtcy5waHlzaWNhbEl0ZW1zLCAuLi5jYXJ0LmxpbmVJdGVtcy5kaWdpdGFsSXRlbXNdLm1hcChpdGVtID0+IGl0ZW0ucHJvZHVjdElkKS5maWx0ZXIocHJvZHVjdElkID0+IHByb2R1Y3RJZCkuc2xpY2UoMCwgNTApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5mZXRjaFJlbGF0ZWRQcm9kdWN0cyhjYXJ0UHJvZHVjdElkcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZmV0Y2hSZWxhdGVkUHJvZHVjdHMoX3Byb2R1Y3RJZHMpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0SWRzID0gX3Byb2R1Y3RJZHMuc2xpY2UoMCwgNTApO1xyXG4gICAgICAgIGlmICghcHJvZHVjdElkcyB8fCBwcm9kdWN0SWRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBjb25zdCByZWxhdGVkUHJvZHVjdElkcyA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgcmVsYXRlZFByb2R1Y3RzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RJZHM6IFtJbnQhXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGZpcnN0OiBJbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhlbnRpdHlJZHM6ICRwcm9kdWN0SWRzLCBmaXJzdDogJGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRQcm9kdWN0cyhoaWRlT3V0T2ZTdG9jazogdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IHByb2R1Y3RJZHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLm9wdGlvbnMuZ3JhcGhRTFRva2VufWAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWRzID0gcmVzcC5kYXRhLnNpdGUucHJvZHVjdHMuZWRnZXMucmVkdWNlKChfaWRzLCB7IG5vZGU6IHsgcmVsYXRlZFByb2R1Y3RzIH0gfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZFByb2R1Y3RzLmVkZ2VzLnJlZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfaWRzMiwgeyBub2RlOiB7IGVudGl0eUlkIH0gfSkgPT4gKF9pZHMyLmluY2x1ZGVzKGVudGl0eUlkKSA/IF9pZHMyIDogWy4uLl9pZHMyLCBlbnRpdHlJZF0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSwgW10pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlkcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeS5sb2FkKHJlbGF0ZWRQcm9kdWN0SWRzKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2FydFN1Z2dlc3RlZFByb2R1Y3RzIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAkc2NvcGUsXHJcbiAgICAgICAgdGVtcGxhdGUgPSBgPGRpdj57eyNwcm9kdWN0c319JHtwcm9kdWN0Q2FyZFRlbXBsYXRlfXt7L3Byb2R1Y3RzfX08L2Rpdj5gLFxyXG4gICAgICAgIGNvbnRleHQsXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICBpZiAoIW9ic2VydmVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5vblJlbW92ZSA9IHRoaXMub25SZW1vdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uVmlld3BvcnQgPSB0aGlzLm9uVmlld3BvcnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ2FydENoYW5nZWQgPSB0aGlzLm9uQ2FydENoYW5nZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudCA9IHRoaXMuJHNjb3BlLmRhdGEoJ2NhcnRTdWdnZXN0ZWRQcm9kdWN0cycpID8gdGhpcy4kc2NvcGUuZGF0YSgnY2FydFN1Z2dlc3RlZFByb2R1Y3RzJykgOiAoTnVtYmVyKHRoaXMuY29udGV4dC5wcm9kdWN0X2NhcnRzdWdnZXN0ZWRfY291bnQpIHx8IDUwKTtcclxuXHJcbiAgICAgICAgdGhpcy4kbG9hZGluZyA9ICRzY29wZS5maW5kKCcubG9hZGluZycpLnNob3coKTtcclxuICAgICAgICB0aGlzLiRsb2FkTW9yZSA9ICRzY29wZS5maW5kKCcubG9hZE1vcmUnKS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy4kY29sbGFwc2UgPSAkc2NvcGUuZmluZCgnLmNvbGxhcHNlJykuaGlkZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kc2NvcGUubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMub25Mb2FkTW9yZSA9IHRoaXMub25Mb2FkTW9yZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Db2xsYXBzZSA9IHRoaXMub25Db2xsYXBzZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMub25WaWV3cG9ydCk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLnZpZXdwb3J0T2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdyZW1vdmUnLCB0aGlzLm9uUmVtb3ZlKTtcclxuICAgICAgICB0aGlzLiRsb2FkTW9yZS5vbignY2xpY2snLCB0aGlzLm9uTG9hZE1vcmUpO1xyXG4gICAgICAgIHRoaXMuJGNvbGxhcHNlLm9uKCdjbGljaycsIHRoaXMub25Db2xsYXBzZSk7XHJcbiAgICAgICAgdXRpbHMuaG9va3Mub24oJ2NhcnQtc3VnZ2VzdGVkLXByb2R1Y3RzLWNoYW5nZScsIHRoaXMub25DYXJ0Q2hhbmdlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXdwb3J0T2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGUuZ2V0KCkuZm9yRWFjaChlbCA9PiB0aGlzLnZpZXdwb3J0T2JzZXJ2ZXIuZGlzY29ubmVjdChlbCkpO1xyXG4gICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5vZmYoJ2NsaWNrJywgdGhpcy5vbkxvYWRNb3JlKTtcclxuICAgICAgICAgICAgdGhpcy4kY29sbGFwc2Uub2ZmKCdjbGljaycsIHRoaXMub25Db2xsYXBzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJHNjb3BlLm9mZigncmVtb3ZlJywgdGhpcy5vblJlbW92ZSk7XHJcbiAgICAgICAgdXRpbHMuaG9va3Mub2ZmKCdjYXJ0LXN1Z2dlc3RlZC1wcm9kdWN0cy1jaGFuZ2UnLCB0aGlzLm9uQ2FydENoYW5nZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZE1vcmUoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0cyA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcm9kdWN0R3JpZCAucHJvZHVjdCcpLmZpbHRlcignOmhpZGRlbicpO1xyXG5cclxuICAgICAgICAkcHJvZHVjdHNcclxuICAgICAgICAgICAgLnNsaWNlKDAsIHRoaXMuZGVmYXVsdFByb2R1Y3RzQ291bnQpXHJcbiAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgaWYgKCEkcHJvZHVjdHMuaXMoJzpoaWRkZW4nKSkge1xyXG4gICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRjb2xsYXBzZS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsYXBzZShldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0cyA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcm9kdWN0R3JpZCAucHJvZHVjdCcpO1xyXG5cclxuICAgICAgICAkcHJvZHVjdHMuc2xpY2UodGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudCkuaGlkZSgpO1xyXG5cclxuICAgICAgICB0aGlzLiRjb2xsYXBzZS5oaWRlKCk7XHJcblxyXG4gICAgICAgIGlmICgkcHJvZHVjdHMubGVuZ3RoID4gdGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLiRsb2FkTW9yZS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISQoZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50cygnI2NhcnQtcHJldmlldy1kcm9wZG93bicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMuJHNjb3BlLm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVtb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlld3BvcnRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdwb3J0T2JzZXJ2ZXIuZGlzY29ubmVjdChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25WaWV3cG9ydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2FkZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuJHNjb3BlLnNob3coKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBzaHVmZmxlKGF3YWl0IG9ic2VydmVyLmxvYWQoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBNdXN0YWNoZS5yZW5kZXIodGhpcy50ZW1wbGF0ZSwgeyBwcm9kdWN0cyB9KTtcclxuICAgICAgICBjb25zdCAkY2FyZENhcm91c2VsID0gJChodG1sKS5jaGlsZHJlbigpO1xyXG4gICAgICAgIGNvbnN0ICRjYXJkR3JpZCA9ICQoaHRtbCkuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgaWYgKCRjYXJkQ2Fyb3VzZWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyBCbGF6ZSBjYXJvdXNlXHJcbiAgICAgICAgY29uc3QgJGNhcm91c2VsQmxhemUgPSB0aGlzLiRzY29wZS5maW5kKCcucHJvZHVjdENhcm91c2VsLmJsYXplLXNsaWRlcicpO1xyXG5cclxuICAgICAgICBpZiAoJGNhcm91c2VsQmxhemUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBibGF6ZVNsaWRlciA9ICRjYXJvdXNlbEJsYXplLmRhdGEoJ2JsYXplU2xpZGVySW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgJGNhcm91c2VsQmxhemUuZmluZCgnLmJsYXplLXRyYWNrLWNvbnRhaW5lciAuYmxhemUtdHJhY2snKS5odG1sKCRjYXJkQ2Fyb3VzZWwuZ2V0KCkubWFwKGVsID0+ICQoJzxkaXYgY2xhc3M9XCJwcm9kdWN0Q2Fyb3VzZWwtc2xpZGVcIj48L2Rpdj4nKS5hcHBlbmQoZWwpKSk7XHJcbiAgICAgICAgICAgIGlmIChibGF6ZVNsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgYmxhemVTbGlkZXIudG90YWxTbGlkZXMgPSAkY2FyZENhcm91c2VsLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGJsYXplU2xpZGVyLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRjYXJvdXNlbEJsYXplLmRhdGEoJ2JsYXplU2xpZGVySW5zdGFuY2UnLCBuZXcgQmxhemVTbGlkZXIoJGNhcm91c2VsQmxhemUuZ2V0KDApLCAkY2Fyb3VzZWxCbGF6ZS5kYXRhKCdibGF6ZVNsaWRlcicpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3Mgc3RpY2sgY2Fyb3VzZWxcclxuICAgICAgICBjb25zdCAkY2Fyb3VzZWxTbGljayA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWw6bm90KC5ibGF6ZS1zbGlkZXIpJyk7XHJcblxyXG4gICAgICAgIGlmICgkY2Fyb3VzZWxTbGljay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICRjYXJvdXNlbFNsaWNrLmZpbHRlcignLnNsaWNrLWluaXRpYWxpemVkW2RhdGEtc2xpY2tdJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgJGNhcm91c2VsU2xpY2suaHRtbCgkY2FyZENhcm91c2VsLmdldCgpLm1hcChlbCA9PiAkKCc8ZGl2IGNsYXNzPVwicHJvZHVjdENhcm91c2VsLXNsaWRlXCI+PC9kaXY+JykuYXBwZW5kKGVsKSkpO1xyXG4gICAgICAgICAgICAkY2Fyb3VzZWxTbGljay5maWx0ZXIoJ1tkYXRhLXNsaWNrXScpLnNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIGdyaWRcclxuICAgICAgICBjb25zdCAkZ3JpZCA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcm9kdWN0R3JpZCcpO1xyXG4gICAgICAgIGlmICgkZ3JpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICRncmlkLmh0bWwoJGNhcmRHcmlkLmdldCgpLm1hcChlbCA9PiAkKCc8bGkgY2xhc3M9XCJwcm9kdWN0XCI+PC9saT4nKS5hcHBlbmQoZWwpKSk7XHJcbiAgICAgICAgICAgICRncmlkLmNoaWxkcmVuKCkuc2xpY2UodGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudCkuaGlkZSgpO1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdHMubGVuZ3RoID4gdGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2UuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbml0IHdpc2hsaXN0IGJ1dHRvbnMgc3RhdHVzXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5zaG93V2lzaGxpc3QpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3VwZGF0ZS13aXNobGlzdC1idXR0b25zJywgW3RoaXMuJHNjb3BlXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRsb2FkaW5nLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhcnRDaGFuZ2VkKHByb2R1Y3RJZCkge1xyXG4gICAgICAgIGlmIChwcm9kdWN0SWQgJiYgIW9ic2VydmVyLnByb2R1Y3RJZHMuaW5jbHVkZXMocHJvZHVjdElkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdE9ic2VydmVyKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHJlc3RyaWN0VG9Mb2dpbiA9ICFjb250ZXh0LmN1c3RvbWVySWQgJiYgY29udGV4dC5oaWRlUHJpY2VGcm9tR3Vlc3RzO1xyXG5cclxuICAgIGlmICghb2JzZXJ2ZXIpIHtcclxuICAgICAgICBvYnNlcnZlciA9IG5ldyBDYXJ0U3VnZ2VzdGVkUHJvZHVjdHNPYnNlcnZlcih7XHJcbiAgICAgICAgICAgIC4uLmNvbnRleHQsXHJcbiAgICAgICAgICAgIHJlc3RyaWN0VG9Mb2dpbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdENhcnRTdWdnZXN0ZWRQcm9kdWN0cyhcclxuICAgIGNvbnRleHQsXHJcbiAgICAkc2NvcGUgPSAkKCdbZGF0YS1jYXJ0LXN1Z2dlc3RlZC1wcm9kdWN0c10nKSxcclxuKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGluaXRPYnNlcnZlcihjb250ZXh0KTtcclxuICAgICAgICBjb25zdCAkZWwgPSAkc2NvcGUuZmlsdGVyKChpLCBlbCkgPT4gISQoZWwpLmRhdGEoJ2NhcnRTdWdnZXN0ZWRQcm9kdWN0c0luc3RhbmNlJykpO1xyXG5cclxuICAgICAgICBpZiAoJGVsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2FydFN1Z2dlc3RlZFByb2R1Y3RzKHtcclxuICAgICAgICAgICAgICAgICRzY29wZTogJGVsLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRlbC5kYXRhKCdjYXJ0U3VnZ2VzdGVkUHJvZHVjdHNJbnN0YW5jZScsIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuaW1wb3J0IHsgY3JlYXRlRm9jdXNUcmFwIH0gZnJvbSAnZm9jdXMtdHJhcCc7XHJcbmltcG9ydCB7IE1vZGFsRXZlbnRzIH0gZnJvbSAnLi4vdGhlbWUvZ2xvYmFsL21vZGFsJztcclxuXHJcbmNvbnN0IFBSRUZJWCA9ICdwYXBhdGhlbWVzX18nO1xyXG5cclxuY2xhc3MgTW9kYWxTdGFjayB7XHJcbiAgICBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDsgLy8gUHJpdmF0ZSBzdGF0aWMgZmllbGQgdG8gaG9sZCB0aGUgc2luZ2xldG9uIGluc3RhbmNlXHJcbiAgICBtb2RhbHMgPSBbXTtcclxuXHJcbiAgICAvLyBBY2Nlc3NvciBtZXRob2QgdG8gZ2V0IHRoZSBzaW5nbGUgaW5zdGFuY2VcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIU1vZGFsU3RhY2suX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIE1vZGFsU3RhY2suX2luc3RhbmNlID0gbmV3IE1vZGFsU3RhY2soKTsgLy8gUHJpdmF0ZSBjb25zdHJ1Y3RvciB1c2FnZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTW9kYWxTdGFjay5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBjb25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKE1vZGFsU3RhY2suX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kYWxTdGFjayBpcyBhIHNpbmdsZXRvbi4gVXNlIE1vZGFsU3RhY2suZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQkNNb2RhbE9wZW5lZCA9IHRoaXMub25CQ01vZGFsT3BlbmVkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkJDTW9kYWxDbG9zZWQgPSB0aGlzLm9uQkNNb2RhbENsb3NlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKE1vZGFsRXZlbnRzLm9wZW5lZCwgJ1tkYXRhLXJldmVhbF0nLCB0aGlzLm9uQkNNb2RhbE9wZW5lZCk7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKE1vZGFsRXZlbnRzLmNsb3NlZCwgJ1tkYXRhLXJldmVhbF0nLCB0aGlzLm9uQkNNb2RhbENsb3NlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CQ01vZGFsT3BlbmVkKCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy5tb2RhbHNbdGhpcy5tb2RhbHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKG1vZGFsKSBtb2RhbC5oaWRlTW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJDTW9kYWxDbG9zZWQoKSB7XHJcbiAgICAgICAgY29uc3QgaGFzQkNNb2RhbE9wZW5lZCA9ICQoJ1tkYXRhLXJldmVhbF06dmlzaWJsZScpLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgaWYgKCFoYXNCQ01vZGFsT3BlbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy5tb2RhbHNbdGhpcy5tb2RhbHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIGlmIChtb2RhbCkgbW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZChtb2RhbCkge1xyXG4gICAgICAgIGNvbnN0IGxhc3RNb2RhbCA9IHRoaXMubW9kYWxzW3RoaXMubW9kYWxzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChsYXN0TW9kYWwpIGxhc3RNb2RhbC5oaWRlTW9kYWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKG1vZGFsKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbHMgPSB0aGlzLm1vZGFscy5maWx0ZXIoKG0pID0+IG0gIT09IG1vZGFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFzdE1vZGFsID0gdGhpcy5tb2RhbHNbdGhpcy5tb2RhbHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKGxhc3RNb2RhbCkgbGFzdE1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBNb2RhbFN0YWNrIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XHJcbiAgICAkbW9kYWw7XHJcblxyXG4gICAgJGxhc3RBY3RpdmVFbGVtZW50O1xyXG5cclxuICAgIGZvY3VzVHJhcDtcclxuXHJcbiAgICAkYm9keSA9ICQoJ2JvZHknKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgbW9kYWxUZW1wbGF0ZSA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7UFJFRklYfW1vZGFsLW92ZXJsYXkge3tvdmVybGF5RXh0cmFDbGFzc319XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtQUkVGSVh9bW9kYWwge3ttb2RhbEV4dHJhQ2xhc3N9fVwiIGRhdGEtcGFwYXRoZW1lcy1tb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHtQUkVGSVh9bW9kYWwtY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJDbG9zZVwiIGRhdGEtcGFwYXRoZW1lcy1tb2RhbC1jbG9zZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5DbG9zZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnPjx1c2UgaHJlZj1cIiNpY29uLXhtYXJrLWxhcmdlXCI+PC91c2U+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7eyNtb2RhbFRpdGxlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7UFJFRklYfW1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ttb2RhbFRpdGxlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3svbW9kYWxUaXRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAge3sjbG9hZGluZ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheSAke1BSRUZJWH1tb2RhbC1sb2FkaW5nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3svbG9hZGluZ319XHJcbiAgICAgICAgICAgICAgICAgICAge3tebG9hZGluZ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke1BSRUZJWH1tb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZjb250ZW50fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3svbG9hZGluZ319XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCxcclxuICAgICAgICBvdmVybGF5RXh0cmFDbGFzcyA9ICcnLFxyXG4gICAgICAgIG1vZGFsRXh0cmFDbGFzcyA9ICcnLFxyXG4gICAgICAgIG1vZGFsVGl0bGUgPSAnJyxcclxuICAgICAgICBjbG9zZU9uQmFja2dyb3VuZENsaWNrID0gZmFsc2UsXHJcbiAgICAgICAgY2xvc2VPbkVzYyA9IGZhbHNlLFxyXG4gICAgICAgIHN0YWNrYWJsZSA9IGZhbHNlLFxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5vbktleVVwID0gdGhpcy5vbktleVVwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkJvZHlDbGlja0Nsb3NlTW9kYWwgPSB0aGlzLm9uQm9keUNsaWNrQ2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubW9kYWxUZW1wbGF0ZSA9IG1vZGFsVGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5RXh0cmFDbGFzcyA9IG92ZXJsYXlFeHRyYUNsYXNzO1xyXG4gICAgICAgIHRoaXMubW9kYWxFeHRyYUNsYXNzID0gbW9kYWxFeHRyYUNsYXNzO1xyXG4gICAgICAgIHRoaXMubW9kYWxUaXRsZSA9IG1vZGFsVGl0bGU7XHJcbiAgICAgICAgdGhpcy5jbG9zZU9uQmFja2dyb3VuZENsaWNrID0gY2xvc2VPbkJhY2tncm91bmRDbGljaztcclxuICAgICAgICB0aGlzLmNsb3NlT25Fc2MgPSBjbG9zZU9uRXNjO1xyXG4gICAgICAgIHRoaXMuc3RhY2thYmxlID0gc3RhY2thYmxlO1xyXG4gICAgICAgIHRoaXMubW9kYWxTdGFjayA9IE1vZGFsU3RhY2suZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLiRtb2RhbCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGFsKGNvbnRlbnQgPSAnJywgbG9hZGluZyA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuJG1vZGFsICYmIHRoaXMuJG1vZGFsLmxlbmd0aCA+IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy4kbGFzdEFjdGl2ZUVsZW1lbnQgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoYF8ke1BSRUZJWH1tb2RhbC1vcGVuZWRgKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBvdmVybGF5RXh0cmFDbGFzcywgbW9kYWxFeHRyYUNsYXNzLCBtb2RhbFRpdGxlIH0gPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLiRtb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kYWxUZW1wbGF0ZSwge1xyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICBvdmVybGF5RXh0cmFDbGFzcyxcclxuICAgICAgICAgICAgbW9kYWxFeHRyYUNsYXNzLFxyXG4gICAgICAgICAgICBtb2RhbFRpdGxlLFxyXG5cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy4kbW9kYWwuaGlkZSgpLmFwcGVuZFRvKCdib2R5JykuYWRkQ2xhc3MoJ19vcGVuaW5nJykuc2hvdygpLnJlbW92ZUNsYXNzKCdfb3BlbmluZycpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAodGhpcy4kbW9kYWwuZ2V0KDApLCB7XHJcbiAgICAgICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbGxvd091dHNpZGVDbGljazogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAuYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJG1vZGFsLmZpbmQoJ1tkYXRhLXBhcGF0aGVtZXMtbW9kYWwtY2xvc2VdJykudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9LCAyMDApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGFja2FibGUpIHRoaXMubW9kYWxTdGFjay5hZGQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29udGVudChjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgeyBvdmVybGF5RXh0cmFDbGFzcywgbW9kYWxFeHRyYUNsYXNzLCBtb2RhbFRpdGxlIH0gPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0ICRtb2RhbCA9ICQobXVzdGFjaGUucmVuZGVyKHRoaXMubW9kYWxUZW1wbGF0ZSwge1xyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICBvdmVybGF5RXh0cmFDbGFzcyxcclxuICAgICAgICAgICAgbW9kYWxFeHRyYUNsYXNzLFxyXG4gICAgICAgICAgICBtb2RhbFRpdGxlLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLiRtb2RhbC5maW5kKCdbZGF0YS1wYXBhdGhlbWVzLW1vZGFsXScpLnJlcGxhY2VXaXRoKCRtb2RhbC5maW5kKCdbZGF0YS1wYXBhdGhlbWVzLW1vZGFsXScpKTtcclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGFsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy4kbW9kYWwpIHJldHVybjsgLy8gTmfEg24gY2jhurduIGfhu41pIGNsb3NlTW9kYWwgbmhp4buBdSBs4bqnblxyXG5cclxuICAgICAgICB0aGlzLiRib2R5Lm9mZignY2xpY2snLCB0aGlzLm9uQm9keUNsaWNrQ2xvc2VNb2RhbCk7XHJcbiAgICAgICAgdGhpcy4kbW9kYWwuYWRkQ2xhc3MoJ19jbG9zaW5nJyk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRib2R5LnJlbW92ZUNsYXNzKGBfJHtQUkVGSVh9bW9kYWwtb3BlbmVkYCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRtb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiRsYXN0QWN0aXZlRWxlbWVudC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGFja2FibGUpIHRoaXMubW9kYWxTdGFjay5yZW1vdmUodGhpcyk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VPbkVzYykgdGhpcy51bmJpbmRFc2NFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNb2RhbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuJG1vZGFsIHx8IHRoaXMuJG1vZGFsLmlzKCc6aGlkZGVuJykpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy4kbW9kYWwuYWRkQ2xhc3MoJ19jbG9zaW5nJyk7XHJcbiAgICAgICAgdGhpcy4kYm9keS5yZW1vdmVDbGFzcyhgXyR7UFJFRklYfW1vZGFsLW9wZW5lZGApO1xyXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICB0aGlzLiRsYXN0QWN0aXZlRWxlbWVudC50cmlnZ2VyKCdmb2N1cycpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kbW9kYWwuaGlkZSgpLmFkZENsYXNzKCdfaGlkZGVuJykucmVtb3ZlQ2xhc3MoJ19jbG9zaW5nJyk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VPbkVzYykgdGhpcy51bmJpbmRFc2NFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNb2RhbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuJG1vZGFsIHx8IHRoaXMuJG1vZGFsLmlzKCc6dmlzaWJsZScpKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoYF8ke1BSRUZJWH1tb2RhbC1vcGVuZWRgKTtcclxuICAgICAgICB0aGlzLiRtb2RhbC5yZW1vdmVDbGFzcygnX2hpZGRlbicpLmFkZENsYXNzKCdfb3BlbmluZycpLnNob3coKS5yZW1vdmVDbGFzcygnX29wZW5pbmcnKTtcclxuICAgICAgICB0aGlzLmZvY3VzVHJhcC5hY3RpdmF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jbG9zZU9uRXNjKSB0aGlzLmJpbmRFc2NFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4kbW9kYWwuZmluZCgnW2RhdGEtcGFwYXRoZW1lcy1tb2RhbC1jbG9zZV0nKS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jbG9zZU9uQmFja2dyb3VuZENsaWNrKSB7XHJcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBtb2RhbCBpcyBmaW5pc2hlZCBkaXNwbGF5aW5nIGJlZm9yZSBiaW5kaW5nIHRoZSBjbGljayBldmVudFxyXG4gICAgICAgICAgICAvLyB0byBwcmV2ZW50IGNsb3NpbmcgdGhlIG1vZGFsIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrJywgdGhpcy5vbkJvZHlDbGlja0Nsb3NlTW9kYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIHRoaXMub25Cb2R5Q2xpY2tDbG9zZU1vZGFsKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNsb3NlT25Fc2MpIHtcclxuICAgICAgICAgICAgdGhpcy51bmJpbmRFc2NFdmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJpbmRFc2NFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJvZHlDbGlja0Nsb3NlTW9kYWwoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGlmICh0aGlzLiRtb2RhbCAmJiB0aGlzLiRtb2RhbC5pcygnOnZpc2libGUnKSAmJlxyXG4gICAgICAgICAgICAoJHRhcmdldC5pcyh0aGlzLiRtb2RhbCkgfHwgJHRhcmdldC5jbG9zZXN0KHRoaXMuJG1vZGFsKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25LZXlVcChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXNjRXZlbnQoKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGhpcy5vbktleVVwKTtcclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRFc2NFdmVudCgpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vbktleVVwKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgeyB1bmlxIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IE11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcclxuaW1wb3J0IHsgcGFyc2VKU09OLCBQcm9kdWN0Q2FyZHNHcmFwaFFMUXVlcnksIHByb2R1Y3RDYXJkVGVtcGxhdGUgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IEJsYXplU2xpZGVyIGZyb20gJ2JsYXplLXNsaWRlcic7XHJcblxyXG5sZXQgb2JzZXJ2ZXI7XHJcblxyXG5jb25zdCBkdW1teVN0b3JhZ2UgPSB7XHJcbiAgICBnZXRJdGVtOiAoKSA9PiB7fSxcclxuICAgIHNldEl0ZW06ICgpID0+IHt9LFxyXG4gICAgcmVtb3ZlSXRlbTogKCkgPT4ge30sXHJcbiAgICBjbGVhcjogKCkgPT4ge30sXHJcbn07XHJcblxyXG5jbGFzcyBSZWNlbnRseVZpZXdlZFByb2R1Y3RzT2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIGN1c3RvbWVyUmVjZW50bHlWaWV3ZWRQcm9kdWN0SWRzID0gW10sXHJcbiAgICAgICAgY3VzdG9tZXJJZCA9IDAsXHJcbiAgICAgICAgaWdub3JlUHJvZHVjdFZpZXdlZEV2ZW50ID0gZmFsc2UsXHJcbiAgICAgICAgLi4ub3B0aW9uc1xyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5vblByb2R1Y3RWaWV3ZWQgPSB0aGlzLm9uUHJvZHVjdFZpZXdlZC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlIHx8IGR1bW15U3RvcmFnZTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RJZHMgPSBwYXJzZUpTT04odGhpcy5zdG9yYWdlLmdldEl0ZW0oJ3BhcGF0aGVtZXNfcmVjZW50bHlWaWV3ZWRQcm9kdWN0cycpIHx8ICdbXScpIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJSZWNlbnRseVZpZXdlZFByb2R1Y3RJZHMgPSBjdXN0b21lclJlY2VudGx5Vmlld2VkUHJvZHVjdElkcztcclxuICAgICAgICB0aGlzLmN1c3RvbWVySWQgPSBjdXN0b21lcklkO1xyXG4gICAgICAgIHRoaXMuaWdub3JlUHJvZHVjdFZpZXdlZEV2ZW50ID0gaWdub3JlUHJvZHVjdFZpZXdlZEV2ZW50O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IG5ldyBQcm9kdWN0Q2FyZHNHcmFwaFFMUXVlcnkob3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxhc3RDdXN0b21lcklkID0gcGFyc2VKU09OKHRoaXMuc3RvcmFnZS5nZXRJdGVtKCdwYXBhdGhlbWVzX2N1c3RvbWVySWQnKSB8fCAnMCcpIHx8IDA7XHJcblxyXG4gICAgICAgIC8vIENsZWFyIHJlY2VudGx5IHZpZXdlZCBwcm9kdWN0cyBvZiBvdGhlciBjdXN0b21lciBsYXN0IGxvZ2dlZCBpblxyXG4gICAgICAgIGlmIChsYXN0Q3VzdG9tZXJJZCAmJiBsYXN0Q3VzdG9tZXJJZCAhPT0gdGhpcy5jdXN0b21lcklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdElkcyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbSgncGFwYXRoZW1lc19yZWNlbnRseVZpZXdlZFByb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0SWRzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbSgncGFwYXRoZW1lc19jdXN0b21lcklkJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jdXN0b21lcklkKSk7XHJcblxyXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaWdub3JlUHJvZHVjdFZpZXdlZEV2ZW50KSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5vbigncHJvZHVjdHZpZXdlZCcsIHRoaXMub25Qcm9kdWN0Vmlld2VkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5iaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pZ25vcmVQcm9kdWN0Vmlld2VkRXZlbnQpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLm9mZigncHJvZHVjdHZpZXdlZCcsIHRoaXMub25Qcm9kdWN0Vmlld2VkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Qcm9kdWN0Vmlld2VkKGV2ZW50LCBwcm9kdWN0SWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdElkICYmICF0aGlzLnByb2R1Y3RJZHMuaW5jbHVkZXMocHJvZHVjdElkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0SWRzLnVuc2hpZnQocHJvZHVjdElkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKCdwYXBhdGhlbWVzX3JlY2VudGx5Vmlld2VkUHJvZHVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3RJZHMpKTtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmhvb2tzLmVtaXQoJ3Byb2R1Y3QtdmlldycsIHByb2R1Y3RJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tZXJJZCAmJiB0aGlzLmN1c3RvbWVyUmVjZW50bHlWaWV3ZWRQcm9kdWN0SWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyUmVjZW50bHlWaWV3ZWRQcm9kdWN0SWRzID0gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSgnLycsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ3BhcGF0aGVtZXMvcmVjZW50bHktdmlld2VkLXByb2R1Y3RzL2N1c3RvbWVyLXByb2R1Y3QtaWRzJyxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VudGx5X3ZpZXdlZF9wcm9kdWN0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSwgKGVyciwgcmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoU3RyaW5nKCQocmVzcCkuZGF0YSgncHJvZHVjdElkcycpKS5zcGxpdCgnLCcpLm1hcChzID0+IE51bWJlcihzKSkuZmlsdGVyKGkgPT4gaSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9IHVuaXEoWy4uLnRoaXMuY3VzdG9tZXJSZWNlbnRseVZpZXdlZFByb2R1Y3RJZHMsIC4uLnRoaXMucHJvZHVjdElkc10pLmZpbHRlcihwcm9kdWN0SWQgPT4gcHJvZHVjdElkKS5zbGljZSgwLCAxMDApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5LmxvYWQocHJvZHVjdElkcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlY2VudGx5Vmlld2VkUHJvZHVjdHNEcm9wZG93biB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgJGRyb3Bkb3duSGFuZGxlcixcclxuICAgICAgICAkZHJvcGRvd24sXHJcbiAgICAgICAgdGVtcGxhdGUgPSBgXHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cIl9oZWFkaW5nXCI+e3toZWFkaW5nfX08L2gyPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJfcHJvZHVjdExpc3RcIj5cclxuICAgICAgICAgICAgICAgIHt7I3Byb2R1Y3RzfX1cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJfcHJvZHVjdExpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImNhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ldmVudC10eXBlPVwibGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWVudGl0eS1pZD1cInt7aWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBvc2l0aW9uPVwie3tpbmRleH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cInt7bmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJvZHVjdC1wcmljZT1cInt7cHJpY2UudmFsdWV9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImNhcmQtZmlndXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjYXJkLWltZy1jb250YWluZXJcIiBocmVmPVwie3t1cmx9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNkZWZhdWx0SW1hZ2V9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cInt7dXJsMzIwd2lkZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNzZXQ9XCJ7e3VybDgwd2lkZX19IDgwdywge3t1cmwxNjB3aWRlfX0gMTYwdywge3t1cmwzMjB3aWRlfX0gMzIwdywge3t1cmw2NDB3aWRlfX0gNjQwd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9kZWZhdWx0SW1hZ2V9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3teZGVmYXVsdEltYWdlfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJ7e2RlZmF1bHRQcm9kdWN0SW1hZ2V9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9kZWZhdWx0SW1hZ2V9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaXplcz1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWltYWdlIGxhenlsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInt7bmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwie3tuYW1lfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7e3VybH19XCIgZGF0YS1ldmVudC10eXBlPVwicHJvZHVjdC1jbGlja1wiPnt7bmFtZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjcmF0aW5nSHRtbH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IGNhcmQtdGV4dC0tcmF0aW5nXCIgZGF0YS10ZXN0LWluZm8tdHlwZT1cInByb2R1Y3RSYXRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmF0aW5nLS1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JnJhdGluZ0h0bWx9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjc2hvd19udW1SZXZpZXdzfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhdGluZy0tbnVtYmVyXCI+KHt7Jm51bWJlck9mUmV2aWV3c319KTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L3Nob3dfbnVtUmV2aWV3c319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9yYXRpbmdIdG1sfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNjYXJkX3Nob3dfc2t1fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjc2t1fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHQgY2FyZC10ZXh0LS1za3VcIiBkYXRhLXRlc3QtaW5mby10eXBlPVwic2t1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tza3V9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L3NrdX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svY2FyZF9zaG93X3NrdX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjY2FyZF9zaG93X2JyYW5kfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjYnJhbmR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLXRleHQtLWJyYW5kXCIgZGF0YS10ZXN0LWluZm8tdHlwZT1cImJyYW5kTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ7e2JyYW5kLnBhdGh9fVwiIGFsdD1cInt7YnJhbmQubmFtZX19XCI+e3ticmFuZC5uYW1lfX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svYnJhbmR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2NhcmRfc2hvd19icmFuZH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjY3VzdG9tRmllbGRzfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLXRleHQtLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmN1c3RvbUZpZWxkc319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2N1c3RvbUZpZWxkc319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjcHJpY2V9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0LS1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJpY2UuZm9ybWF0dGVkfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svcHJpY2V9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAge3svcHJvZHVjdHN9fVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIGAsXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICBpZiAoIW9ic2VydmVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMub25Ecm9wZG93bk9wZW5lZCA9IHRoaXMub25Ecm9wZG93bk9wZW5lZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Qcm9kdWN0Vmlld2VkID0gdGhpcy5vblByb2R1Y3RWaWV3ZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy4kZHJvcGRvd25IYW5kbGVyID0gJGRyb3Bkb3duSGFuZGxlcjtcclxuICAgICAgICB0aGlzLiRkcm9wZG93biA9ICRkcm9wZG93bjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJGRyb3Bkb3duSGFuZGxlci5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKG9ic2VydmVyLmN1c3RvbWVySWQgfHwgb2JzZXJ2ZXIucHJvZHVjdElkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGRyb3Bkb3duSGFuZGxlci5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kZHJvcGRvd25IYW5kbGVyLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLiRkcm9wZG93bi5vbignb3BlbmVkLmZuZHRuLmRyb3Bkb3duJywgdGhpcy5vbkRyb3Bkb3duT3BlbmVkKTtcclxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC12aWV3JywgdGhpcy5vblByb2R1Y3RWaWV3ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLiRkcm9wZG93bi5vZmYoJ29wZW5lZC5mbmR0bi5kcm9wZG93bicsIHRoaXMub25Ecm9wZG93bk9wZW5lZCk7XHJcbiAgICAgICAgdXRpbHMuaG9va3Mub2ZmKCdwcm9kdWN0LXZpZXcnLCB0aGlzLm9uUHJvZHVjdFZpZXdlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qcm9kdWN0Vmlld2VkKCkge1xyXG4gICAgICAgIHRoaXMuJGRyb3Bkb3duSGFuZGxlci5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Ecm9wZG93bk9wZW5lZChldmVudCwgJGRyb3Bkb3duKSB7XHJcbiAgICAgICAgJGRyb3Bkb3duLmFkZENsYXNzKCdpcy1sb2FkaW5nJykuaHRtbCgkKCc8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXlcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+PC9kaXY+JykpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IG9ic2VydmVyLmxvYWQoKTtcclxuICAgICAgICBjb25zdCBoZWFkaW5nID0gdGhpcy4kZHJvcGRvd25IYW5kbGVyLmF0dHIoJ3RpdGxlJyk7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IE11c3RhY2hlLnJlbmRlcih0aGlzLnRlbXBsYXRlLCB7IHByb2R1Y3RzLCBoZWFkaW5nIH0pO1xyXG5cclxuICAgICAgICAkZHJvcGRvd24uaHRtbChodG1sKS5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSZWNlbnRseVZpZXdlZFByb2R1Y3RzU2VjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgJHNjb3BlLFxyXG4gICAgICAgIHRlbXBsYXRlID0gYDxkaXY+e3sjcHJvZHVjdHN9fSR7cHJvZHVjdENhcmRUZW1wbGF0ZX17ey9wcm9kdWN0c319PC9kaXY+YCxcclxuICAgICAgICBjb250ZXh0LFxyXG4gICAgfSA9IHt9KSB7XHJcbiAgICAgICAgaWYgKCFvYnNlcnZlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdFByb2R1Y3RzQ291bnQgPSBOdW1iZXIodGhpcy5jb250ZXh0LnByb2R1Y3RfcmVjZW50dmlld2VkX2NvdW50KSB8fCA1MDtcclxuICAgICAgICB0aGlzLm9uUmVtb3ZlID0gdGhpcy5vblJlbW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25WaWV3cG9ydCA9IHRoaXMub25WaWV3cG9ydC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Qcm9kdWN0Vmlld2VkID0gdGhpcy5vblByb2R1Y3RWaWV3ZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB0aGlzLiRsb2FkaW5nID0gJHNjb3BlLmZpbmQoJy5sb2FkaW5nJykuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuJGxvYWRNb3JlID0gJHNjb3BlLmZpbmQoJy5sb2FkTW9yZScpLmhpZGUoKTtcclxuICAgICAgICB0aGlzLiRjb2xsYXBzZSA9ICRzY29wZS5maW5kKCcuY29sbGFwc2UnKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiRzY29wZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5vbkxvYWRNb3JlID0gdGhpcy5vbkxvYWRNb3JlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkNvbGxhcHNlID0gdGhpcy5vbkNvbGxhcHNlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnZpZXdwb3J0T2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5vblZpZXdwb3J0KTtcclxuICAgICAgICB0aGlzLiRzY29wZS5nZXQoKS5mb3JFYWNoKGVsID0+IHRoaXMudmlld3BvcnRPYnNlcnZlci5vYnNlcnZlKGVsKSk7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ3JlbW92ZScsIHRoaXMub25SZW1vdmUpO1xyXG4gICAgICAgIHRoaXMuJGxvYWRNb3JlLm9uKCdjbGljaycsIHRoaXMub25Mb2FkTW9yZSk7XHJcbiAgICAgICAgdGhpcy4kY29sbGFwc2Uub24oJ2NsaWNrJywgdGhpcy5vbkNvbGxhcHNlKTtcclxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC12aWV3JywgdGhpcy5vblByb2R1Y3RWaWV3ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZEV2ZW50cygpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3cG9ydE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmdldCgpLmZvckVhY2goZWwgPT4gdGhpcy52aWV3cG9ydE9ic2VydmVyLmRpc2Nvbm5lY3QoZWwpKTtcclxuICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUub2ZmKCdjbGljaycsIHRoaXMub25Mb2FkTW9yZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNlLm9mZignY2xpY2snLCB0aGlzLm9uQ29sbGFwc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRzY29wZS5vZmYoJ3JlbW92ZScsIHRoaXMub25SZW1vdmUpO1xyXG4gICAgICAgIHV0aWxzLmhvb2tzLm9mZigncHJvZHVjdC12aWV3JywgdGhpcy5vblByb2R1Y3RWaWV3ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZE1vcmUoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0cyA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcm9kdWN0JykuZmlsdGVyKCc6aGlkZGVuJyk7XHJcblxyXG4gICAgICAgICRwcm9kdWN0c1xyXG4gICAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudClcclxuICAgICAgICAgICAgLnNob3coKTtcclxuICAgICAgICBpZiAoISRwcm9kdWN0cy5pcygnOmhpZGRlbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGxvYWRNb3JlLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGNvbGxhcHNlLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxhcHNlKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHByb2R1Y3RzID0gdGhpcy4kc2NvcGUuZmluZCgnLnByb2R1Y3QnKTtcclxuXHJcbiAgICAgICAgJHByb2R1Y3RzLnNsaWNlKHRoaXMuZGVmYXVsdFByb2R1Y3RzQ291bnQpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy4kY29sbGFwc2UuaGlkZSgpO1xyXG5cclxuICAgICAgICBpZiAoJHByb2R1Y3RzLmxlbmd0aCA+IHRoaXMuZGVmYXVsdFByb2R1Y3RzQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuc2hvdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMuJHNjb3BlLm9mZnNldCgpLnRvcCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlbW92ZShldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXdwb3J0T2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydE9ic2VydmVyLmRpc2Nvbm5lY3QoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uVmlld3BvcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLiRzY29wZS5zaG93KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgb2JzZXJ2ZXIubG9hZCgpO1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBNdXN0YWNoZS5yZW5kZXIodGhpcy50ZW1wbGF0ZSwgeyBwcm9kdWN0cyB9KTtcclxuICAgICAgICBjb25zdCAkY2FyZHMgPSAkKGh0bWwpLmNoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgIGlmICgkY2FyZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyBCbGF6ZSBjYXJvdXNlXHJcbiAgICAgICAgY29uc3QgJGNhcm91c2VsQmxhemUgPSB0aGlzLiRzY29wZS5maW5kKCcucHJvZHVjdENhcm91c2VsLmJsYXplLXNsaWRlcicpO1xyXG5cclxuICAgICAgICBpZiAoJGNhcm91c2VsQmxhemUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBibGF6ZVNsaWRlciA9ICRjYXJvdXNlbEJsYXplLmRhdGEoJ2JsYXplU2xpZGVySW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgJGNhcm91c2VsQmxhemUuZmluZCgnLmJsYXplLXRyYWNrLWNvbnRhaW5lciAuYmxhemUtdHJhY2snKS5odG1sKCRjYXJkcy5nZXQoKS5tYXAoZWwgPT4gJCgnPGRpdiBjbGFzcz1cInByb2R1Y3RDYXJvdXNlbC1zbGlkZVwiPjwvZGl2PicpLmFwcGVuZChlbCkpKTtcclxuICAgICAgICAgICAgaWYgKGJsYXplU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBibGF6ZVNsaWRlci50b3RhbFNsaWRlcyA9ICRjYXJkcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBibGF6ZVNsaWRlci5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkY2Fyb3VzZWxCbGF6ZS5kYXRhKCdibGF6ZVNsaWRlckluc3RhbmNlJywgbmV3IEJsYXplU2xpZGVyKCRjYXJvdXNlbEJsYXplLmdldCgwKSwgJGNhcm91c2VsQmxhemUuZGF0YSgnYmxhemVTbGlkZXInKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIHN0aWNrIGNhcm91c2VsXHJcbiAgICAgICAgY29uc3QgJGNhcm91c2VsU2xpY2sgPSB0aGlzLiRzY29wZS5maW5kKCcucHJvZHVjdENhcm91c2VsOm5vdCguYmxhemUtc2xpZGVyKScpO1xyXG5cclxuICAgICAgICBpZiAoJGNhcm91c2VsU2xpY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAkY2Fyb3VzZWxTbGljay5maWx0ZXIoJy5zbGljay1pbml0aWFsaXplZFtkYXRhLXNsaWNrXScpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICRjYXJvdXNlbFNsaWNrLmh0bWwoJGNhcmRzLmdldCgpLm1hcChlbCA9PiAkKCc8ZGl2IGNsYXNzPVwicHJvZHVjdENhcm91c2VsLXNsaWRlXCI+PC9kaXY+JykuYXBwZW5kKGVsKSkpO1xyXG4gICAgICAgICAgICAkY2Fyb3VzZWxTbGljay5maWx0ZXIoJ1tkYXRhLXNsaWNrXScpLnNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIGdyaWRcclxuICAgICAgICBjb25zdCAkZ3JpZCA9IHRoaXMuJHNjb3BlLmZpbmQoJy5wcm9kdWN0R3JpZCcpO1xyXG4gICAgICAgIGlmICgkZ3JpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICRncmlkLmh0bWwoJGNhcmRzLmdldCgpLm1hcChlbCA9PiAkKCc8bGkgY2xhc3M9XCJwcm9kdWN0XCI+PC9saT4nKS5hcHBlbmQoZWwpKSk7XHJcbiAgICAgICAgICAgICRncmlkLmNoaWxkcmVuKCkuc2xpY2UodGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudCkuaGlkZSgpO1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdHMubGVuZ3RoID4gdGhpcy5kZWZhdWx0UHJvZHVjdHNDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbG9hZE1vcmUuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnLmFjdGlvbkdyb3VwJykuYWRkQ2xhc3MoJ25vdEFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbml0IHdpc2hsaXN0IGJ1dHRvbnMgc3RhdHVzXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5zaG93V2lzaGxpc3QpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ3VwZGF0ZS13aXNobGlzdC1idXR0b25zJywgW3RoaXMuJHNjb3BlXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRsb2FkaW5nLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblByb2R1Y3RWaWV3ZWQocHJvZHVjdElkKSB7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RJZCAmJiAhb2JzZXJ2ZXIucHJvZHVjdElkcy5pbmNsdWRlcyhwcm9kdWN0SWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0T2JzZXJ2ZXIoY29udGV4dCkge1xyXG4gICAgY29uc3QgY3VzdG9tZXJSZWNlbnRseVZpZXdlZFByb2R1Y3RJZHMgPSBTdHJpbmcoY29udGV4dC5jdXN0b21lclJlY2VudGx5Vmlld2VkUHJvZHVjdElkcykuc3BsaXQoJywnKS5tYXAocyA9PiBOdW1iZXIocykpLmZpbHRlcihpID0+IGkpO1xyXG4gICAgY29uc3QgcmVzdHJpY3RUb0xvZ2luID0gIWNvbnRleHQuY3VzdG9tZXJJZCAmJiBjb250ZXh0LmhpZGVQcmljZUZyb21HdWVzdHM7XHJcblxyXG4gICAgaWYgKCFvYnNlcnZlcikge1xyXG4gICAgICAgIG9ic2VydmVyID0gbmV3IFJlY2VudGx5Vmlld2VkUHJvZHVjdHNPYnNlcnZlcih7XHJcbiAgICAgICAgICAgIC4uLmNvbnRleHQsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyUmVjZW50bHlWaWV3ZWRQcm9kdWN0SWRzLFxyXG4gICAgICAgICAgICByZXN0cmljdFRvTG9naW4sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0UmVjZW50bHlWaWV3ZWRQcm9kdWN0c0Ryb3Bkb3duKFxyXG4gICAgY29udGV4dCxcclxuICAgICRkcm9wZG93bkhhbmRsZXIgPSAkKCdbZGF0YS1kcm9wZG93bj1cInJlY2VudGx5LXZpZXdlZC1kcm9wZG93blwiXScpLFxyXG4gICAgJGRyb3Bkb3duID0gJCgnI3JlY2VudGx5LXZpZXdlZC1kcm9wZG93bicpLFxyXG4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW5pdE9ic2VydmVyKGNvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVjZW50bHlWaWV3ZWRQcm9kdWN0c0Ryb3Bkb3duKHtcclxuICAgICAgICAgICAgJGRyb3Bkb3duSGFuZGxlcixcclxuICAgICAgICAgICAgJGRyb3Bkb3duLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRSZWNlbnRseVZpZXdlZFByb2R1Y3RzU2VjdGlvbihcclxuICAgIGNvbnRleHQsXHJcbiAgICAkc2NvcGUgPSAkKCdbZGF0YS1yZWNlbnRseS12aWV3ZWQtcHJvZHVjdHMtc2VjdGlvbl0nKSxcclxuKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGluaXRPYnNlcnZlcihjb250ZXh0KTtcclxuICAgICAgICBjb25zdCAkZWwgPSAkc2NvcGUuZmlsdGVyKChpLCBlbCkgPT4gISQoZWwpLmRhdGEoJ3JlY2VudGx5Vmlld2VkUHJvZHVjdHNTZWN0aW9uSW5zdGFuY2UnKSk7XHJcblxyXG4gICAgICAgIGlmICgkZWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBSZWNlbnRseVZpZXdlZFByb2R1Y3RzU2VjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGU6ICRlbCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkZWwuZGF0YSgncmVjZW50bHlWaWV3ZWRQcm9kdWN0c1NlY3Rpb25JbnN0YW5jZScsIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xyXG52YXIgbmF0aXZlRmxvb3IgPSBNYXRoLmZsb29yLFxyXG4gICAgbmF0aXZlUmFuZG9tID0gTWF0aC5yYW5kb207XHJcblxyXG4vKipcclxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmFuZG9tYCB3aXRob3V0IHN1cHBvcnQgZm9yIHJldHVybmluZ1xyXG4gKiBmbG9hdGluZy1wb2ludCBudW1iZXJzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gbG93ZXIgVGhlIGxvd2VyIGJvdW5kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdXBwZXIgVGhlIHVwcGVyIGJvdW5kLlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSByYW5kb20gbnVtYmVyLlxyXG4gKi9cclxuZnVuY3Rpb24gYmFzZVJhbmRvbShsb3dlciwgdXBwZXIpIHtcclxuICByZXR1cm4gbG93ZXIgKyBuYXRpdmVGbG9vcihuYXRpdmVSYW5kb20oKSAqICh1cHBlciAtIGxvd2VyICsgMSkpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSYW5kb207XHJcbiIsIi8qKlxyXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXHJcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cclxuICovXHJcbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XHJcbiAgdmFyIGluZGV4ID0gLTEsXHJcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XHJcblxyXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xyXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xyXG4gIH1cclxuICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xyXG4iLCJ2YXIgYmFzZVJhbmRvbSA9IHJlcXVpcmUoJy4vX2Jhc2VSYW5kb20nKTtcclxuXHJcbi8qKlxyXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc2h1ZmZsZWAgd2hpY2ggbXV0YXRlcyBhbmQgc2V0cyB0aGUgc2l6ZSBvZiBgYXJyYXlgLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2h1ZmZsZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPWFycmF5Lmxlbmd0aF0gVGhlIHNpemUgb2YgYGFycmF5YC5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaHVmZmxlU2VsZihhcnJheSwgc2l6ZSkge1xyXG4gIHZhciBpbmRleCA9IC0xLFxyXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXHJcbiAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XHJcblxyXG4gIHNpemUgPSBzaXplID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBzaXplO1xyXG4gIHdoaWxlICgrK2luZGV4IDwgc2l6ZSkge1xyXG4gICAgdmFyIHJhbmQgPSBiYXNlUmFuZG9tKGluZGV4LCBsYXN0SW5kZXgpLFxyXG4gICAgICAgIHZhbHVlID0gYXJyYXlbcmFuZF07XHJcblxyXG4gICAgYXJyYXlbcmFuZF0gPSBhcnJheVtpbmRleF07XHJcbiAgICBhcnJheVtpbmRleF0gPSB2YWx1ZTtcclxuICB9XHJcbiAgYXJyYXkubGVuZ3RoID0gc2l6ZTtcclxuICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2h1ZmZsZVNlbGY7XHJcbiIsInZhciBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcclxuICAgIHNodWZmbGVTZWxmID0gcmVxdWlyZSgnLi9fc2h1ZmZsZVNlbGYnKTtcclxuXHJcbi8qKlxyXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc2h1ZmZsZWAgZm9yIGFycmF5cy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNodWZmbGUuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHNodWZmbGVkIGFycmF5LlxyXG4gKi9cclxuZnVuY3Rpb24gYXJyYXlTaHVmZmxlKGFycmF5KSB7XHJcbiAgcmV0dXJuIHNodWZmbGVTZWxmKGNvcHlBcnJheShhcnJheSkpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U2h1ZmZsZTtcclxuIiwidmFyIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiBhbiBhcnJheSwgdXNpbmdcclxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcclxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpbiB3aGljaCBvbmx5IHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGVhY2ggZWxlbWVudFxyXG4gKiBpcyBrZXB0LiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciB0aGV5IG9jY3VyXHJcbiAqIGluIHRoZSBhcnJheS5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAc2luY2UgMC4xLjBcclxuICogQGNhdGVnb3J5IEFycmF5XHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogXy51bmlxKFsyLCAxLCAyXSk7XHJcbiAqIC8vID0+IFsyLCAxXVxyXG4gKi9cclxuZnVuY3Rpb24gdW5pcShhcnJheSkge1xyXG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSA/IGJhc2VVbmlxKGFycmF5KSA6IFtdO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXE7XHJcbiJdLCJuYW1lcyI6WyJ1dGlscyIsIk1vZGFsIiwibW9kYWxGYWN0b3J5IiwiaW5pdFJlY2VudGx5Vmlld2VkUHJvZHVjdHNTZWN0aW9uIiwiaW5pdENhcnRTdWdnZXN0ZWRQcm9kdWN0cyIsIkNhcnRQYWdlIiwiY2FydERyYXdlclNpbmdsZXRvbiIsIkNhcnQiLCJfQ2FydFBhZ2UiLCJjb250ZXh0IiwiJHNjb3BlIiwiX3RoaXMiLCJjYWxsIiwiJCIsIm9uUmVhZHkiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIiRtb2RhbCIsIiRjYXJ0UGFnZUNvbnRlbnQiLCIkY2FydENvbnRlbnQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMiLCIkb3ZlcmxheSIsImhpZGUiLCIkYWN0aXZlQ2FydEl0ZW1JZCIsIiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiIsInNldEFwcGxlUGF5U3VwcG9ydCIsImJpbmRFdmVudHMiLCJDYXJ0RHJhd2VyIiwibW9kYWwiLCJvdmVybGF5RXh0cmFDbGFzcyIsImNsb3NlT25CYWNrZ3JvdW5kQ2xpY2siLCJjbG9zZU9uRXNjIiwic3RhY2thYmxlIiwib3ZlcnJpZGVDYXJ0UHJldmlld01vZGFsIiwiX3Byb3RvMiIsIl90aGlzMiIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW4iLCJiaW5kQ2FydFF1YW50aXR5VXBkYXRlRXZlbnQiLCIkYm9keSIsIiR0b2dnbGUiLCJxdWFudGl0eSIsImF0dHIiLCJfIiwicHJldlZhbHVlIiwicmVwbGFjZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0ZXh0IiwidG9nZ2xlQ2xhc3MiLCJ0b29scyIsInN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2VBdmFpbGFibGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiaW5pdENhcnQiLCJjb250ZW50IiwidXBkYXRlQ29udGVudCIsIiRpdGVtIiwiZmluZCIsInByZXBlbmRUbyIsInBhcmVudCIsIm9uZSIsImNhcnQiLCJfdGhpczMiLCJvcGVuTW9kYWwiLCJhcGkiLCJnZXRDb250ZW50IiwidGVtcGxhdGUiLCJlcnIiLCJyZXNwb25zZSIsIl90aGlzNCIsInByZXZpZXdNb2RhbCIsImNsb3NlIiwicGFnZV90eXBlIiwidHJpZ2dlciIsInF0eSIsIiRjb250ZW50IiwiaHRtbCIsImZhY3RvcnkiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiTXVzdGFjaGUiLCJQcm9kdWN0Q2FyZHNHcmFwaFFMUXVlcnkiLCJwcm9kdWN0Q2FyZFRlbXBsYXRlIiwiQmxhemVTbGlkZXIiLCJvYnNlcnZlciIsIkNhcnRTdWdnZXN0ZWRQcm9kdWN0c09ic2VydmVyIiwib3B0aW9ucyIsIm9uQ2FydENoYW5nZWQiLCJsb2FkZWQiLCJwcm9kdWN0cyIsInF1ZXJ5IiwidW5iaW5kRXZlbnRzIiwiaG9va3MiLCJvZmYiLCJlbWl0IiwibG9hZCIsIl9sb2FkIiwiX2NhbGxlZSIsImNhcnRQcm9kdWN0SWRzIiwiX2NvbnRleHQiLCJnZXRDYXJ0IiwiY29uY2F0IiwibGluZUl0ZW1zIiwicGh5c2ljYWxJdGVtcyIsImRpZ2l0YWxJdGVtcyIsIm1hcCIsIml0ZW0iLCJwcm9kdWN0SWQiLCJmaWx0ZXIiLCJzbGljZSIsImZldGNoUmVsYXRlZFByb2R1Y3RzIiwiX2ZldGNoUmVsYXRlZFByb2R1Y3RzIiwiX2NhbGxlZTIiLCJfcHJvZHVjdElkcyIsInByb2R1Y3RJZHMiLCJyZWxhdGVkUHJvZHVjdElkcyIsIl9jb250ZXh0MiIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInZhcmlhYmxlcyIsImZpcnN0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJncmFwaFFMVG9rZW4iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzdWNjZXNzIiwicmVzcCIsImlkcyIsInNpdGUiLCJlZGdlcyIsInJlZHVjZSIsIl9pZHMiLCJfcmVmIiwicmVsYXRlZFByb2R1Y3RzIiwibm9kZSIsIl9pZHMyIiwiX3JlZjIiLCJlbnRpdHlJZCIsImluY2x1ZGVzIiwiZXJyb3IiLCJfeCIsIkNhcnRTdWdnZXN0ZWRQcm9kdWN0cyIsIl90ZW1wIiwiX3JlZjMiLCJfcmVmMyR0ZW1wbGF0ZSIsIm9uUmVtb3ZlIiwib25WaWV3cG9ydCIsImRlZmF1bHRQcm9kdWN0c0NvdW50IiwiTnVtYmVyIiwicHJvZHVjdF9jYXJ0c3VnZ2VzdGVkX2NvdW50IiwiJGxvYWRpbmciLCJzaG93IiwiJGxvYWRNb3JlIiwiJGNvbGxhcHNlIiwib25Mb2FkTW9yZSIsIm9uQ29sbGFwc2UiLCJ2aWV3cG9ydE9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJnZXQiLCJmb3JFYWNoIiwiZWwiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIiRwcm9kdWN0cyIsImlzIiwiY3VycmVudFRhcmdldCIsInBhcmVudHMiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiX29uVmlld3BvcnQiLCJfY2FsbGVlMyIsIiRjYXJkQ2Fyb3VzZWwiLCIkY2FyZEdyaWQiLCIkY2Fyb3VzZWxCbGF6ZSIsImJsYXplU2xpZGVyIiwiJGNhcm91c2VsU2xpY2siLCIkZ3JpZCIsIl90IiwiX2NvbnRleHQzIiwiX3NodWZmbGUiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImFwcGVuZCIsInRvdGFsU2xpZGVzIiwicmVmcmVzaCIsInNsaWNrIiwic2hvd1dpc2hsaXN0IiwiaW5pdE9ic2VydmVyIiwicmVzdHJpY3RUb0xvZ2luIiwiY3VzdG9tZXJJZCIsImhpZGVQcmljZUZyb21HdWVzdHMiLCJhc3NpZ24iLCIkZWwiLCJpbnN0YW5jZSIsImNvbnNvbGUiLCJtdXN0YWNoZSIsImNyZWF0ZUZvY3VzVHJhcCIsIk1vZGFsRXZlbnRzIiwiUFJFRklYIiwiTW9kYWxTdGFjayIsIm1vZGFscyIsIl9pbnN0YW5jZSIsIkVycm9yIiwib25CQ01vZGFsT3BlbmVkIiwib25CQ01vZGFsQ2xvc2VkIiwiZ2V0SW5zdGFuY2UiLCJvcGVuZWQiLCJjbG9zZWQiLCJoaWRlTW9kYWwiLCJoYXNCQ01vZGFsT3BlbmVkIiwic2hvd01vZGFsIiwiYWRkIiwibGFzdE1vZGFsIiwicHVzaCIsInJlbW92ZSIsIl9yZWYkbW9kYWxUZW1wbGF0ZSIsIm1vZGFsVGVtcGxhdGUiLCJfcmVmJG92ZXJsYXlFeHRyYUNsYXMiLCJfcmVmJG1vZGFsRXh0cmFDbGFzcyIsIm1vZGFsRXh0cmFDbGFzcyIsIl9yZWYkbW9kYWxUaXRsZSIsIm1vZGFsVGl0bGUiLCJfcmVmJGNsb3NlT25CYWNrZ3JvdW4iLCJfcmVmJGNsb3NlT25Fc2MiLCJfcmVmJHN0YWNrYWJsZSIsIiRsYXN0QWN0aXZlRWxlbWVudCIsImZvY3VzVHJhcCIsIm9uS2V5VXAiLCJvbkJvZHlDbGlja0Nsb3NlTW9kYWwiLCJtb2RhbFN0YWNrIiwibG9hZGluZyIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImFwcGVuZFRvIiwiZXNjYXBlRGVhY3RpdmF0ZXMiLCJyZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSIsImFsbG93T3V0c2lkZUNsaWNrIiwiYWN0aXZhdGUiLCJzZXRUaW1lb3V0IiwicmVwbGFjZVdpdGgiLCJjbG9zZU1vZGFsIiwiZGVhY3RpdmF0ZSIsInVuYmluZEVzY0V2ZW50IiwiYmluZEVzY0V2ZW50IiwiJHRhcmdldCIsInRhcmdldCIsImNsb3Nlc3QiLCJrZXkiLCJkZWZhdWx0IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJwYXJzZUpTT04iLCJkdW1teVN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNsZWFyIiwiUmVjZW50bHlWaWV3ZWRQcm9kdWN0c09ic2VydmVyIiwiX3JlZiRjdXN0b21lclJlY2VudGx5IiwiY3VzdG9tZXJSZWNlbnRseVZpZXdlZFByb2R1Y3RJZHMiLCJfcmVmJGN1c3RvbWVySWQiLCJfcmVmJGlnbm9yZVByb2R1Y3RWaWUiLCJpZ25vcmVQcm9kdWN0Vmlld2VkRXZlbnQiLCJfZXhjbHVkZWQiLCJvblByb2R1Y3RWaWV3ZWQiLCJ3aW5kb3ciLCJsYXN0Q3VzdG9tZXJJZCIsInVuc2hpZnQiLCJnZXRQYWdlIiwiY29uZmlnIiwiY3VzdG9tZXIiLCJyZWNlbnRseV92aWV3ZWRfcHJvZHVjdHMiLCJTdHJpbmciLCJzcGxpdCIsInMiLCJfdW5pcSIsIlJlY2VudGx5Vmlld2VkUHJvZHVjdHNEcm9wZG93biIsIl90ZW1wMiIsIiRkcm9wZG93bkhhbmRsZXIiLCIkZHJvcGRvd24iLCJfcmVmMiR0ZW1wbGF0ZSIsIm9uRHJvcGRvd25PcGVuZWQiLCJfb25Ecm9wZG93bk9wZW5lZCIsImhlYWRpbmciLCJfeDIiLCJSZWNlbnRseVZpZXdlZFByb2R1Y3RzU2VjdGlvbiIsIl90ZW1wMyIsInByb2R1Y3RfcmVjZW50dmlld2VkX2NvdW50IiwiX3Byb3RvMyIsIiRjYXJkcyIsImluaXRSZWNlbnRseVZpZXdlZFByb2R1Y3RzRHJvcGRvd24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==