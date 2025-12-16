"use strict";
(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["assets_js_papathemes_cart_js"],{

/***/ "./assets/js/papathemes/cart.js"
/*!**************************************!*\
  !*** ./assets/js/papathemes/cart.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/cart */ "./assets/js/theme/cart.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _eyeva_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eyeva/product-details */ "./assets/js/papathemes/eyeva/product-details.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification */ "./assets/js/papathemes/notification.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var Cart = /*#__PURE__*/function (_CornerstoneCart) {
  function Cart() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _CornerstoneCart.call.apply(_CornerstoneCart, [this].concat(args)) || this;
    _this.notification = (0,_notification__WEBPACK_IMPORTED_MODULE_4__["default"])();
    return _this;
  }
  /**
   * Override the method to refresh cart content when `body` receive event `refresh-cart`
   */
  _inheritsLoose(Cart, _CornerstoneCart);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    _CornerstoneCart.prototype.onReady.call(this);
    $('body').on('refresh-cart', function (event, response) {
      if (response === void 0) {
        response = '';
      }
      if (response) {
        _this2.updateContent(response);
      } else {
        _this2.refreshContent();
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this3 = this;
    var modal = (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.defaultModal)();
    if (this.$modal === null) {
      this.$modal = $('#modal');
    }
    modal.open({
      size: 'large'
    });
    Promise.all([this.openProductEdit(itemId), this.openQuickView(productId, modal)]).then(function (_ref) {
      var _ref$ = _ref[0],
        content = _ref$.content,
        data = _ref$.data;
      //
      // merge quick-view with product edit options HTML
      //
      var $content = $('<div></div>').html(content);
      var $productAttributesWrapper = $content.find('[data-product-attributes-wrapper]');
      var $form = _this3.$modal.find('form[data-cart-item-add]');
      var editProductQuantity = _this3.$cartContent.find("input[name=\"qty-" + itemId + "\"]").val();

      // fix stepper options because custom_fields not working in product/configure request
      _this3.fixStepperOptions($productAttributesWrapper);
      _this3.$modal.find('[data-product-option-change]').html($productAttributesWrapper.html()); // merge [data-product-attributes-wrapper] > * to [data-product-option-change]
      _this3.$modal.find('[data-eyeva-product-options]').text(JSON.stringify(data.options)); // update [data-eyeva-product-options]
      _this3.$modal.find('[data-update-product-wrapper]').show(); // show Add New To Cart button
      $form.prepend("<input type=\"hidden\" name=\"item_id\" value=\"" + data.quote_item_id + "\">"); // add hidden input[name="item_id"] to form
      $form.find('input[name="qty[]"]').val(editProductQuantity); // update product quantity

      // update cart content after edit product options
      var editProductCallback = function editProductCallback(response) {
        modal.close();
        if (_this3.updateContent(response)) {
          var msg = $content.find('[data-updated-success-msg]').text();
          if (msg) _this3.notification.info(msg);
          var $item = _this3.$cartContent.find("[data-item-edit=\"" + itemId + "\"]").closest('[data-item-row]');
          $item.addClass('_adding');
          $item.one('animationend', function () {
            return $item.removeClass('_adding');
          });
        }
      };
      var context = Object.assign({}, _this3.context, {
        editProductCallback: editProductCallback,
        editProductQuantity: editProductQuantity
      });
      return new _eyeva_product_details__WEBPACK_IMPORTED_MODULE_3__["default"](modal.$content.find('.quickView'), context);
    });
  }

  // Replicate the stepper option controls from the product view into the cart edit options modal
  // This is necessary because custom_fields are not available in the product/configure request
  ;
  _proto.fixStepperOptions = function fixStepperOptions($productAttributesWrapper) {
    this.$modal.find('[data-product-option-change]').find('[data-product-option-stepper]').each(function (_i, el) {
      var $el = $(el);
      var attrId = $el.data('product-attribute-id');
      var $option = $productAttributesWrapper.find("[data-product-attribute-id=\"" + attrId + "\"]");
      $option.addClass('form-field--stepper').attr('data-product-option-stepper', '');
      $el.find('._query-stepper-first').clone().prependTo($option);
      $el.find('._query-stepper-last').clone().appendTo($option);
    });
  }

  /**
   * Refresh cart content with input cart page HTML
   * @param {string} response HTML of cart page
   */;
  _proto.updateContent = function updateContent(response) {
    var $response = $(response);
    var $cartContent = $('[data-cart-content]', $response);
    var $cartTotals = $('[data-cart-totals]', $response);
    var $cartMessages = $('[data-cart-status]', $response);
    var $cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]', $response);
    var $cartPageTitle = $('[data-cart-page-title]', $response);
    if ($cartContent.length === 0) {
      this.notification.error(this.context.genericError);
      return false;
    }
    this.$cartContent.html($cartContent.html());
    this.$cartTotals.html($cartTotals.html());
    this.$cartMessages.html($cartMessages.html());
    this.$cartAdditionalCheckoutBtns.html($cartAdditionalCheckoutBtns.html());
    $('[data-cart-page-title]').replaceWith($cartPageTitle);
    this.bindEvents();
    $("[data-cart-itemid='" + this.$activeCartItemId + "']", this.$cartContent).filter("[data-action='" + this.$activeCartItemBtnAction + "']").trigger('focus');

    // highlight the newly added item
    var $item = this.$cartContent.find('[data-item-row-added]');
    $item.addClass('_adding');
    $item.one('animationend', function () {
      return $item.removeClass('_adding');
    });
    return true;
  }

  /**
   * Fetch product configured options
   *
   * @param {string} itemId
   * @returns {Promise<{
   *   content: string,
   *   data: {
   *     customizations: object[],
   *     options: object[],
   *     product_name: string,
   *     quote_item_id: string,
   *   }
   * }}>
   */;
  _proto.openProductEdit = function openProductEdit(itemId) {
    return new Promise(function (resolve) {
      var options = {
        template: 'cart/modals/configure-product'
      };
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
        resolve(response);
      });
    });
  }

  /**
   * Clone code from assets/js/theme/global/quick-view.js
   *
   * @param {number} productId
   * @returns {Promise<void>}
   */;
  _proto.openQuickView = function openQuickView(productId, modal) {
    modal.$modal.addClass('modal--quickView'); // ensure modal has correct class if it already opened
    modal.$modal.one(_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.ModalEvents.open, function () {
      return modal.$modal.addClass('modal--quickView');
    });
    modal.$modal.one(_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.ModalEvents.closed, function () {
      return modal.$modal.removeClass('modal--quickView');
    });
    var _handleDropdownExpand = function handleDropdownExpand(_ref2) {
      var currentTarget = _ref2.currentTarget;
      var $dropdownMenu = $(currentTarget);
      var dropdownBtnHeight = $dropdownMenu.prev().outerHeight();
      $dropdownMenu.css('top', dropdownBtnHeight);
      return modal.$modal.one(_theme_global_modal__WEBPACK_IMPORTED_MODULE_2__.ModalEvents.close, function () {
        return $dropdownMenu.off('opened.fndtn.dropdown', _handleDropdownExpand);
      });
    };
    return new Promise(function (resolve) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById(productId, {
        template: 'products/quick-view'
      }, function (err, response) {
        if (err) return resolve();
        modal.updateContent(response);
        $('#modal .dropdown-menu').on('opened.fndtn.dropdown', _handleDropdownExpand);
        modal.$content.find('.productView').addClass('productView--quickView');

        // removed data-slick code as not used in this theme
        // removed Review code as it as replaced by the theme's custom code
        // removed new ProductDetails object
        resolve();
      });
    });
  };
  return Cart;
}(_theme_cart__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ },

/***/ "./assets/js/theme/cart.js"
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/cart-item-details */ "./assets/js/theme/common/cart-item-details.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$modal = null;
    this.$cartPageContent = $('[data-cart]');
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components
    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;
    this.setApplePaySupport();
    this.bindEvents();
  };
  _proto.setApplePaySupport = function setApplePaySupport() {
    if (window.ApplePaySession) {
      this.$cartPageContent.addClass('apple-pay-supported');
    }
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    this.$activeCartItemId = itemId;
    this.$activeCartItemBtnAction = $target.data('action');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!Number.isInteger(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry));
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        _this3.$overlay.hide();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this4 = this;
    var context = Object.assign({
      productForChangeId: productId
    }, this.context);
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    if (this.$modal === null) {
      this.$modal = $('#modal');
    }
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    this.$modal.find('.modal-content').addClass('hide-content');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      var optionChangeHandler = function optionChangeHandler() {
        var $productOptionsContainer = $('[data-product-attributes-wrapper]', _this4.$modal);
        var modalBodyReservedHeight = $productOptionsContainer.outerHeight();
        if ($productOptionsContainer.length && modalBodyReservedHeight) {
          $productOptionsContainer.css('height', modalBodyReservedHeight);
        }
      };
      if (_this4.$modal.hasClass('open')) {
        optionChangeHandler();
      } else {
        _this4.$modal.one(_global_modal__WEBPACK_IMPORTED_MODULE_7__.ModalEvents.opened, optionChangeHandler);
      }
      var modalForm = _this4.$modal.find('form');
      var refreshContent = function refreshContent() {
        return _this4.refreshContent();
      };
      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }
      function _onSubmit() {
        _onSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                event.preventDefault();
                _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.postFormData(new FormData(this), function () {
                  modal.close();
                  refreshContent();
                });
              case 1:
                return _context.a(2);
            }
          }, _callee, this);
        }));
        return _onSubmit.apply(this, arguments);
      }
      modalForm.on('submit', onSubmit);
      _this4.productDetails = new _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__["default"](_this4.$modal, context);
      _this4.bindGiftWrappingForm();
    });

    // papathemes: fix memory leak >>>
    var callback = function callback(event, currentTarget) {
      var $form = $(currentTarget).find('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(productId, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(err);
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', callback);
    modal.$modal.one(_global_modal__WEBPACK_IMPORTED_MODULE_7__.ModalEvents.closed, function () {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.off('product-option-change', callback);
    });
    // <<<
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages',
        additionalCheckoutButtons: 'cart/additional-checkout-buttons'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);
      _this5.$cartTotals.html(response.totals);
      _this5.$cartMessages.html(response.statusMessages);
      _this5.$cartAdditionalCheckoutBtns.html(response.additionalCheckoutButtons);
      $cartPageTitle.replaceWith(response.pageTitle);
      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      if (!quantity) {
        return window.location.reload();
      }
      _this5.bindEvents();
      _this5.$overlay.hide();
      $('body').trigger('cart-quantity-update', quantity);
      $("[data-cart-itemid='" + _this5.$activeCartItemId + "']", _this5.$cartContent).filter("[data-action='" + _this5.$activeCartItemBtnAction + "']").trigger('focus');
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on({
      focus: function onQtyFocus() {
        preVal = this.value;
      },
      change: function change(event) {
        var $target = $(event.currentTarget);
        event.preventDefault();

        // update cart quantity
        cartUpdateQtyTextChange($target, preVal);
      }
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(string, {
        icon: 'warning',
        showCancelButton: true,
        onConfirm: function onConfirm() {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      var productId = $(event.currentTarget).data('productId');
      event.preventDefault();
      // edit item in cart
      _this6.cartEditOptions(itemId, productId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $couponContainer.attr('aria-hidden', false);
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $couponContainer.attr('aria-hidden', true);
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)($codeInput.data('error'));
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $certContainer.attr('aria-hidden', false);
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $certContainer.attr('aria-hidden', true);
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        var validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(_this8.context);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(validationDictionary.invalid_gift_certificate);
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(resp.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this9.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    var shippingErrorMessages = {
      country: this.context.shippingCountryErrorMessage,
      province: this.context.shippingProvinceErrorMessage
    };
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"]($('[data-shipping-estimator]'), shippingErrorMessages);
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ },

/***/ "./assets/js/theme/cart/shipping-estimator.js"
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShippingEstimator)
/* harmony export */ });
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element, shippingErrorMessages) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.isEstimatorFormOpened = false;
    this.shippingErrorMessages = shippingErrorMessages;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    var shippingEstimatorAlert = $('.shipping-quotes');
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // estimator error messages are being injected in html as a result
      // of user submit; clearing and adding role on submit provides
      // regular announcement of these error messages
      if (shippingEstimatorAlert.attr('role')) {
        shippingEstimatorAlert.removeAttr('role');
      }
      shippingEstimatorAlert.attr('role', 'alert');
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.country
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.province
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__.showAlertModal)(err);
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.Validators.cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.toggleEstimatorFormState = function toggleEstimatorFormState(toggleButton, buttonSelector, $toggleContainer) {
    var changeAttributesOnToggle = function changeAttributesOnToggle(selectorToActivate) {
      $(toggleButton).attr('aria-labelledby', selectorToActivate);
      $(buttonSelector).text($("#" + selectorToActivate).text());
    };
    if (!this.isEstimatorFormOpened) {
      changeAttributesOnToggle('estimator-close');
      $toggleContainer.removeClass('u-hidden');
    } else {
      changeAttributesOnToggle('estimator-add');
      $toggleContainer.addClass('u-hidden');
    }
    this.isEstimatorFormOpened = !this.isEstimatorFormOpened;
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var _this4 = this;
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      _this4.toggleEstimatorFormState(event.currentTarget, '.shipping-estimate-show__btn-name', $estimatorContainer);
    });
  };
  return ShippingEstimator;
}();


/***/ },

/***/ "./assets/js/theme/common/cart-item-details.js"
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/cart-item-details.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartItemDetails)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CartItemDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  function CartItemDetails($scope, context, productAttributesData) {
    var _this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    var $form = $('#CartEditProductFieldsForm', _this.$scope);
    var $productOptionsElement = $('[data-product-attributes-wrapper]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function () {
      _this.setProductVariant();
    });
    var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_2__.optionChangeDecorator.call(_this, hasDefaultOptions);

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var productId = _this.context.productForChangeId;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
    }
    return _this;
  }
  _inheritsLoose(CartItemDetails, _ProductDetailsBase);
  var _proto = CartItemDetails.prototype;
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
            var productVariantslist = (0,_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.convertIntoArray)(value.children);
            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };
            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];
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
    var view = $('.modal-header-title');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.html().match(/'(.*?)'/)[1];
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);
    this.$scope.find('.modal-content').removeClass('hide-content');
  };
  return CartItemDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ },

/***/ "./assets/js/theme/common/gift-certificate-validator.js"
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ },

/***/ "./assets/js/theme/common/state-country.js"
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    (0,_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.insertStateHiddenField)($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()($selectElement)) {
    statesArray.states.forEach(function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + (stateObj.label ? stateObj.label : stateObj.name) + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }
  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.showAlertModal)(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
}

/***/ },

/***/ "./assets/js/theme/common/utils/translations-utils.js"
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2NhcnRfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0g7QUFDc0I7QUFDYjtBQUNYO0FBQUEsSUFFckJNLElBQUksMEJBQUFDLGdCQUFBO0VBQ3JCLFNBQUFELEtBQUEsRUFBcUI7SUFBQSxJQUFBRSxLQUFBO0lBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBTkMsSUFBSSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFKRixJQUFJLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFDZk4sS0FBQSxHQUFBRCxnQkFBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsZ0JBQUEsU0FBQVUsTUFBQSxDQUFTTCxJQUFJLEVBQUM7SUFDZEosS0FBQSxDQUFLSCxZQUFZLEdBQUdBLHlEQUFZLENBQUMsQ0FBQztJQUFDLE9BQUFHLEtBQUE7RUFDdkM7RUFDQTtBQUNKO0FBQ0E7RUFGSVUsY0FBQSxDQUFBWixJQUFBLEVBQUFDLGdCQUFBO0VBQUEsSUFBQVksTUFBQSxHQUFBYixJQUFBLENBQUFjLFNBQUE7RUFBQUQsTUFBQSxDQUdBRSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUNOZixnQkFBQSxDQUFBYSxTQUFBLENBQU1DLE9BQU8sQ0FBQU4sSUFBQTtJQUViUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQVU7TUFBQSxJQUFsQkEsUUFBUTtRQUFSQSxRQUFRLEdBQUcsRUFBRTtNQUFBO01BQzlDLElBQUlBLFFBQVEsRUFBRTtRQUNWSixNQUFJLENBQUNLLGFBQWEsQ0FBQ0QsUUFBUSxDQUFDO01BQ2hD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InNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvY2FydC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0LmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENvcm5lcnN0b25lQ2FydCBmcm9tICcuLi90aGVtZS9jYXJ0JztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCwgTW9kYWxFdmVudHMgfSBmcm9tICcuLi90aGVtZS9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vZXlldmEvcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCBub3RpZmljYXRpb24gZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgQ29ybmVyc3RvbmVDYXJ0IHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IG5vdGlmaWNhdGlvbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGUgbWV0aG9kIHRvIHJlZnJlc2ggY2FydCBjb250ZW50IHdoZW4gYGJvZHlgIHJlY2VpdmUgZXZlbnQgYHJlZnJlc2gtY2FydGBcbiAgICAgKi9cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBzdXBlci5vblJlYWR5KCk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdyZWZyZXNoLWNhcnQnLCAoZXZlbnQsIHJlc3BvbnNlID0gJycpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCwgcHJvZHVjdElkKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJG1vZGFsID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRtb2RhbCA9ICQoJyNtb2RhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kYWwub3Blbih7IHNpemU6ICdsYXJnZScgfSk7XG5cbiAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5vcGVuUHJvZHVjdEVkaXQoaXRlbUlkKSxcbiAgICAgICAgICAgIHRoaXMub3BlblF1aWNrVmlldyhwcm9kdWN0SWQsIG1vZGFsKSxcbiAgICAgICAgXSkudGhlbigoW3sgY29udGVudCwgZGF0YSB9XSkgPT4ge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIG1lcmdlIHF1aWNrLXZpZXcgd2l0aCBwcm9kdWN0IGVkaXQgb3B0aW9ucyBIVE1MXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCc8ZGl2PjwvZGl2PicpLmh0bWwoY29udGVudCk7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdEF0dHJpYnV0ZXNXcmFwcGVyID0gJGNvbnRlbnQuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVzLXdyYXBwZXJdJyk7XG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9IHRoaXMuJG1vZGFsLmZpbmQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICAgICAgY29uc3QgZWRpdFByb2R1Y3RRdWFudGl0eSA9IHRoaXMuJGNhcnRDb250ZW50LmZpbmQoYGlucHV0W25hbWU9XCJxdHktJHtpdGVtSWR9XCJdYCkudmFsKCk7XG5cbiAgICAgICAgICAgIC8vIGZpeCBzdGVwcGVyIG9wdGlvbnMgYmVjYXVzZSBjdXN0b21fZmllbGRzIG5vdCB3b3JraW5nIGluIHByb2R1Y3QvY29uZmlndXJlIHJlcXVlc3RcbiAgICAgICAgICAgIHRoaXMuZml4U3RlcHBlck9wdGlvbnMoJHByb2R1Y3RBdHRyaWJ1dGVzV3JhcHBlcik7XG5cbiAgICAgICAgICAgIHRoaXMuJG1vZGFsLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKS5odG1sKCRwcm9kdWN0QXR0cmlidXRlc1dyYXBwZXIuaHRtbCgpKTsgLy8gbWVyZ2UgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVzLXdyYXBwZXJdID4gKiB0byBbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdXG4gICAgICAgICAgICB0aGlzLiRtb2RhbC5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbnNdJykudGV4dChKU09OLnN0cmluZ2lmeShkYXRhLm9wdGlvbnMpKTsgLy8gdXBkYXRlIFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uc11cbiAgICAgICAgICAgIHRoaXMuJG1vZGFsLmZpbmQoJ1tkYXRhLXVwZGF0ZS1wcm9kdWN0LXdyYXBwZXJdJykuc2hvdygpOyAvLyBzaG93IEFkZCBOZXcgVG8gQ2FydCBidXR0b25cbiAgICAgICAgICAgICRmb3JtLnByZXBlbmQoYDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIml0ZW1faWRcIiB2YWx1ZT1cIiR7ZGF0YS5xdW90ZV9pdGVtX2lkfVwiPmApOyAvLyBhZGQgaGlkZGVuIGlucHV0W25hbWU9XCJpdGVtX2lkXCJdIHRvIGZvcm1cbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJxdHlbXVwiXScpLnZhbChlZGl0UHJvZHVjdFF1YW50aXR5KTsgLy8gdXBkYXRlIHByb2R1Y3QgcXVhbnRpdHlcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgY29udGVudCBhZnRlciBlZGl0IHByb2R1Y3Qgb3B0aW9uc1xuICAgICAgICAgICAgY29uc3QgZWRpdFByb2R1Y3RDYWxsYmFjayA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBkYXRlQ29udGVudChyZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnID0gJGNvbnRlbnQuZmluZCgnW2RhdGEtdXBkYXRlZC1zdWNjZXNzLW1zZ10nKS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cpIHRoaXMubm90aWZpY2F0aW9uLmluZm8obXNnKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkaXRlbSA9IHRoaXMuJGNhcnRDb250ZW50LmZpbmQoYFtkYXRhLWl0ZW0tZWRpdD1cIiR7aXRlbUlkfVwiXWApLmNsb3Nlc3QoJ1tkYXRhLWl0ZW0tcm93XScpO1xuICAgICAgICAgICAgICAgICAgICAkaXRlbS5hZGRDbGFzcygnX2FkZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAkaXRlbS5vbmUoJ2FuaW1hdGlvbmVuZCcsICgpID0+ICRpdGVtLnJlbW92ZUNsYXNzKCdfYWRkaW5nJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB7IC4uLnRoaXMuY29udGV4dCwgZWRpdFByb2R1Y3RDYWxsYmFjaywgZWRpdFByb2R1Y3RRdWFudGl0eSB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0RGV0YWlscyhtb2RhbC4kY29udGVudC5maW5kKCcucXVpY2tWaWV3JyksIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXBsaWNhdGUgdGhlIHN0ZXBwZXIgb3B0aW9uIGNvbnRyb2xzIGZyb20gdGhlIHByb2R1Y3QgdmlldyBpbnRvIHRoZSBjYXJ0IGVkaXQgb3B0aW9ucyBtb2RhbFxuICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgY3VzdG9tX2ZpZWxkcyBhcmUgbm90IGF2YWlsYWJsZSBpbiB0aGUgcHJvZHVjdC9jb25maWd1cmUgcmVxdWVzdFxuICAgIGZpeFN0ZXBwZXJPcHRpb25zKCRwcm9kdWN0QXR0cmlidXRlc1dyYXBwZXIpIHtcbiAgICAgICAgdGhpcy4kbW9kYWwuZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLXN0ZXBwZXJdJylcbiAgICAgICAgICAgIC5lYWNoKChfaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRySWQgPSAkZWwuZGF0YSgncHJvZHVjdC1hdHRyaWJ1dGUtaWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJHByb2R1Y3RBdHRyaWJ1dGVzV3JhcHBlci5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7YXR0cklkfVwiXWApO1xuICAgICAgICAgICAgICAgICRvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdmb3JtLWZpZWxkLS1zdGVwcGVyJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtcHJvZHVjdC1vcHRpb24tc3RlcHBlcicsICcnKTtcbiAgICAgICAgICAgICAgICAkZWwuZmluZCgnLl9xdWVyeS1zdGVwcGVyLWZpcnN0JykuY2xvbmUoKS5wcmVwZW5kVG8oJG9wdGlvbik7XG4gICAgICAgICAgICAgICAgJGVsLmZpbmQoJy5fcXVlcnktc3RlcHBlci1sYXN0JykuY2xvbmUoKS5hcHBlbmRUbygkb3B0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZnJlc2ggY2FydCBjb250ZW50IHdpdGggaW5wdXQgY2FydCBwYWdlIEhUTUxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzcG9uc2UgSFRNTCBvZiBjYXJ0IHBhZ2VcbiAgICAgKi9cbiAgICB1cGRhdGVDb250ZW50KHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0ICRyZXNwb25zZSA9ICQocmVzcG9uc2UpO1xuXG4gICAgICAgIGNvbnN0ICRjYXJ0Q29udGVudCA9ICQoJ1tkYXRhLWNhcnQtY29udGVudF0nLCAkcmVzcG9uc2UpO1xuICAgICAgICBjb25zdCAkY2FydFRvdGFscyA9ICQoJ1tkYXRhLWNhcnQtdG90YWxzXScsICRyZXNwb25zZSk7XG4gICAgICAgIGNvbnN0ICRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nLCAkcmVzcG9uc2UpO1xuICAgICAgICBjb25zdCAkY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMgPSAkKCdbZGF0YS1jYXJ0LWFkZGl0aW9uYWwtY2hlY2tvdXQtYnV0dG9uc10nLCAkcmVzcG9uc2UpO1xuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nLCAkcmVzcG9uc2UpO1xuXG4gICAgICAgIGlmICgkY2FydENvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5lcnJvcih0aGlzLmNvbnRleHQuZ2VuZXJpY0Vycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwoJGNhcnRDb250ZW50Lmh0bWwoKSk7XG4gICAgICAgIHRoaXMuJGNhcnRUb3RhbHMuaHRtbCgkY2FydFRvdGFscy5odG1sKCkpO1xuICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbCgkY2FydE1lc3NhZ2VzLmh0bWwoKSk7XG4gICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zLmh0bWwoJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zLmh0bWwoKSk7XG4gICAgICAgICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKS5yZXBsYWNlV2l0aCgkY2FydFBhZ2VUaXRsZSk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgJChgW2RhdGEtY2FydC1pdGVtaWQ9JyR7dGhpcy4kYWN0aXZlQ2FydEl0ZW1JZH0nXWAsIHRoaXMuJGNhcnRDb250ZW50KVxuICAgICAgICAgICAgLmZpbHRlcihgW2RhdGEtYWN0aW9uPScke3RoaXMuJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9ufSddYClcbiAgICAgICAgICAgIC50cmlnZ2VyKCdmb2N1cycpO1xuXG4gICAgICAgIC8vIGhpZ2hsaWdodCB0aGUgbmV3bHkgYWRkZWQgaXRlbVxuICAgICAgICBjb25zdCAkaXRlbSA9IHRoaXMuJGNhcnRDb250ZW50LmZpbmQoJ1tkYXRhLWl0ZW0tcm93LWFkZGVkXScpO1xuICAgICAgICAkaXRlbS5hZGRDbGFzcygnX2FkZGluZycpO1xuICAgICAgICAkaXRlbS5vbmUoJ2FuaW1hdGlvbmVuZCcsICgpID0+ICRpdGVtLnJlbW92ZUNsYXNzKCdfYWRkaW5nJykpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHByb2R1Y3QgY29uZmlndXJlZCBvcHRpb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaXRlbUlkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8e1xuICAgICAqICAgY29udGVudDogc3RyaW5nLFxuICAgICAqICAgZGF0YToge1xuICAgICAqICAgICBjdXN0b21pemF0aW9uczogb2JqZWN0W10sXG4gICAgICogICAgIG9wdGlvbnM6IG9iamVjdFtdLFxuICAgICAqICAgICBwcm9kdWN0X25hbWU6IHN0cmluZyxcbiAgICAgKiAgICAgcXVvdGVfaXRlbV9pZDogc3RyaW5nLFxuICAgICAqICAgfVxuICAgICAqIH19PlxuICAgICAqL1xuICAgIG9wZW5Qcm9kdWN0RWRpdChpdGVtSWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvY29uZmlndXJlLXByb2R1Y3QnLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgY29kZSBmcm9tIGFzc2V0cy9qcy90aGVtZS9nbG9iYWwvcXVpY2stdmlldy5qc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2R1Y3RJZFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIG9wZW5RdWlja1ZpZXcocHJvZHVjdElkLCBtb2RhbCkge1xuICAgICAgICBtb2RhbC4kbW9kYWwuYWRkQ2xhc3MoJ21vZGFsLS1xdWlja1ZpZXcnKTsgLy8gZW5zdXJlIG1vZGFsIGhhcyBjb3JyZWN0IGNsYXNzIGlmIGl0IGFscmVhZHkgb3BlbmVkXG4gICAgICAgIG1vZGFsLiRtb2RhbC5vbmUoTW9kYWxFdmVudHMub3BlbiwgKCkgPT4gbW9kYWwuJG1vZGFsLmFkZENsYXNzKCdtb2RhbC0tcXVpY2tWaWV3JykpO1xuICAgICAgICBtb2RhbC4kbW9kYWwub25lKE1vZGFsRXZlbnRzLmNsb3NlZCwgKCkgPT4gbW9kYWwuJG1vZGFsLnJlbW92ZUNsYXNzKCdtb2RhbC0tcXVpY2tWaWV3JykpO1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZURyb3Bkb3duRXhwYW5kID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZHJvcGRvd25NZW51ID0gJChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duQnRuSGVpZ2h0ID0gJGRyb3Bkb3duTWVudS5wcmV2KCkub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgJGRyb3Bkb3duTWVudS5jc3MoJ3RvcCcsIGRyb3Bkb3duQnRuSGVpZ2h0KTtcblxuICAgICAgICAgICAgcmV0dXJuIG1vZGFsLiRtb2RhbC5vbmUoTW9kYWxFdmVudHMuY2xvc2UsICgpID0+ICRkcm9wZG93bk1lbnUub2ZmKCdvcGVuZWQuZm5kdG4uZHJvcGRvd24nLCBoYW5kbGVEcm9wZG93bkV4cGFuZCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIHsgdGVtcGxhdGU6ICdwcm9kdWN0cy9xdWljay12aWV3JyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZXNvbHZlKCk7XG5cbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgICQoJyNtb2RhbCAuZHJvcGRvd24tbWVudScpLm9uKCdvcGVuZWQuZm5kdG4uZHJvcGRvd24nLCBoYW5kbGVEcm9wZG93bkV4cGFuZCk7XG4gICAgICAgICAgICAgICAgbW9kYWwuJGNvbnRlbnQuZmluZCgnLnByb2R1Y3RWaWV3JykuYWRkQ2xhc3MoJ3Byb2R1Y3RWaWV3LS1xdWlja1ZpZXcnKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZWQgZGF0YS1zbGljayBjb2RlIGFzIG5vdCB1c2VkIGluIHRoaXMgdGhlbWVcbiAgICAgICAgICAgICAgICAvLyByZW1vdmVkIFJldmlldyBjb2RlIGFzIGl0IGFzIHJlcGxhY2VkIGJ5IHRoZSB0aGVtZSdzIGN1c3RvbSBjb2RlXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlZCBuZXcgUHJvZHVjdERldGFpbHMgb2JqZWN0XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgeyBiaW5kLCBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2hlY2tJc0dpZnRDZXJ0VmFsaWQgZnJvbSAnLi9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3InO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgU2hpcHBpbmdFc3RpbWF0b3IgZnJvbSAnLi9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwsIHNob3dBbGVydE1vZGFsLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBDYXJ0SXRlbURldGFpbHMgZnJvbSAnLi9jb21tb24vY2FydC1pdGVtLWRldGFpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsID0gbnVsbDtcbiAgICAgICAgdGhpcy4kY2FydFBhZ2VDb250ZW50ID0gJCgnW2RhdGEtY2FydF0nKTtcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0LWNvbnRlbnRdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xuICAgICAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zID0gJCgnW2RhdGEtY2FydC1hZGRpdGlvbmFsLWNoZWNrb3V0LWJ1dHRvbnNdJyk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0XSAubG9hZGluZ092ZXJsYXknKVxuICAgICAgICAgICAgLmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1JZCA9IG51bGw7XG4gICAgICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9uID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEFwcGxlUGF5U3VwcG9ydCgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZXRBcHBsZVBheVN1cHBvcnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uKSB7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuYWRkQ2xhc3MoJ2FwcGxlLXBheS1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhcnRVcGRhdGUoJHRhcmdldCkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24gPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwobWluRXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwobWF4RXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHByZVZhbCAhPT0gbnVsbCA/IHByZVZhbCA6IG1pblF0eTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KE51bWJlcigkZWwudmFsKCkpLCAxMCk7XG4gICAgICAgIGxldCBpbnZhbGlkRW50cnk7XG5cbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobmV3UXR5KSkge1xuICAgICAgICAgICAgaW52YWxpZEVudHJ5ID0gJGVsLnZhbCgpO1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRoaXMuY29udGV4dC5pbnZhbGlkRW50cnlNZXNzYWdlLnJlcGxhY2UoJ1tFTlRSWV0nLCBpbnZhbGlkRW50cnkpKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChtaW5FcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChtYXhFcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCkge1xuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCwgcHJvZHVjdElkKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7IHByb2R1Y3RGb3JDaGFuZ2VJZDogcHJvZHVjdElkLCAuLi50aGlzLmNvbnRleHQgfTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICBpZiAodGhpcy4kbW9kYWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJG1vZGFsID0gJCgnI21vZGFsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kYWwub3BlbigpO1xuICAgICAgICB0aGlzLiRtb2RhbC5maW5kKCcubW9kYWwtY29udGVudCcpLmFkZENsYXNzKCdoaWRlLWNvbnRlbnQnKTtcblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25DaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lciA9ICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlcy13cmFwcGVyXScsIHRoaXMuJG1vZGFsKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCA9ICRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lci5vdXRlckhlaWdodCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lci5sZW5ndGggJiYgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyLmNzcygnaGVpZ2h0JywgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRtb2RhbC5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uQ2hhbmdlSGFuZGxlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRtb2RhbC5vbmUoTW9kYWxFdmVudHMub3BlbmVkLCBvcHRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbW9kYWxGb3JtID0gdGhpcy4kbW9kYWwuZmluZCgnZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgcmVmcmVzaENvbnRlbnQgPSAoKSA9PiB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQucG9zdEZvcm1EYXRhKG5ldyBGb3JtRGF0YSh0aGlzKSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2RhbEZvcm0ub24oJ3N1Ym1pdCcsIG9uU3VibWl0KTtcblxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBDYXJ0SXRlbURldGFpbHModGhpcy4kbW9kYWwsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHBhcGF0aGVtZXM6IGZpeCBtZW1vcnkgbGVhayA+Pj5cbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoZXZlbnQsIGN1cnJlbnRUYXJnZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJChjdXJyZW50VGFyZ2V0KS5maW5kKCdmb3JtJyk7XG4gICAgICAgICAgICBjb25zdCAkc3VibWl0ID0gJCgnaW5wdXQuYnV0dG9uJywgJGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcuYWxlcnRNZXNzYWdlQm94Jyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ3AuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHV0aWxzLmhvb2tzLm9uKCdwcm9kdWN0LW9wdGlvbi1jaGFuZ2UnLCBjYWxsYmFjayk7XG5cbiAgICAgICAgbW9kYWwuJG1vZGFsLm9uZShNb2RhbEV2ZW50cy5jbG9zZWQsICgpID0+IHtcbiAgICAgICAgICAgIHV0aWxzLmhvb2tzLm9mZigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gPDw8XG4gICAgfVxuXG4gICAgcmVmcmVzaENvbnRlbnQocmVtb3ZlKSB7XG4gICAgICAgIGNvbnN0ICRjYXJ0SXRlbXNSb3dzID0gJCgnW2RhdGEtaXRlbS1yb3ddJywgdGhpcy4kY2FydENvbnRlbnQpO1xuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXG4gICAgICAgICAgICAgICAgdG90YWxzOiAnY2FydC90b3RhbHMnLFxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ2NhcnQvcGFnZS10aXRsZScsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbENoZWNrb3V0QnV0dG9uczogJ2NhcnQvYWRkaXRpb25hbC1jaGVja291dC1idXR0b25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0VG90YWxzLmh0bWwocmVzcG9uc2UudG90YWxzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcy5odG1sKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2VzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zLmh0bWwocmVzcG9uc2UuYWRkaXRpb25hbENoZWNrb3V0QnV0dG9ucyk7XG5cbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCB0aGlzLiRjYXJ0Q29udGVudCkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgaWYgKCFxdWFudGl0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgJChgW2RhdGEtY2FydC1pdGVtaWQ9JyR7dGhpcy4kYWN0aXZlQ2FydEl0ZW1JZH0nXWAsIHRoaXMuJGNhcnRDb250ZW50KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYFtkYXRhLWFjdGlvbj0nJHt0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbn0nXWApXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRDYXJ0RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBkZWJvdW5jZVRpbWVvdXQgPSA0MDA7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FydFJlbW92ZUl0ZW0gPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFJlbW92ZUl0ZW0sIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBsZXQgcHJlVmFsO1xuXG4gICAgICAgIC8vIGNhcnQgdXBkYXRlXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNhcnQgcXR5IG1hbnVhbGx5IHVwZGF0ZXNcbiAgICAgICAgJCgnLmNhcnQtaXRlbS1xdHktaW5wdXQnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oe1xuICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uIG9uUXR5Rm9jdXMoKSB7XG4gICAgICAgICAgICAgICAgcHJlVmFsID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgICAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNhcnQtcmVtb3ZlJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtRGVsZXRlJyk7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChzdHJpbmcsIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3Byb2R1Y3RJZCcpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGVkaXQgaXRlbSBpbiBjYXJ0XG4gICAgICAgICAgICB0aGlzLmNhcnRFZGl0T3B0aW9ucyhpdGVtSWQsIHByb2R1Y3RJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRQcm9tb0NvZGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Db250YWluZXIgPSAkKCcuY291cG9uLWNvZGUnKTtcbiAgICAgICAgY29uc3QgJGNvdXBvbkZvcm0gPSAkKCcuY291cG9uLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNvZGVJbnB1dCA9ICQoJ1tuYW1lPVwiY291cG9uY29kZVwiXScsICRjb3Vwb25Gb3JtKTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLnNob3coKTtcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuc2hvdygpO1xuICAgICAgICAgICAgJGNvZGVJbnB1dC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5oaWRlKCk7XG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLnNob3coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNvdXBvbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY29kZUlucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwoJGNvZGVJbnB1dC5kYXRhKCdlcnJvcicpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlDb2RlKGNvZGUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNlcnRDb250YWluZXIgPSAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jb2RlJyk7XG4gICAgICAgIGNvbnN0ICRjZXJ0Rm9ybSA9ICQoJy5jYXJ0LWdpZnQtY2VydGlmaWNhdGUtZm9ybScpO1xuICAgICAgICBjb25zdCAkY2VydElucHV0ID0gJCgnW25hbWU9XCJjZXJ0Y29kZVwiXScsICRjZXJ0Rm9ybSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlKCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS50b2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkY2VydEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY2VydElucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIWNoZWNrSXNHaWZ0Q2VydFZhbGlkKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodmFsaWRhdGlvbkRpY3Rpb25hcnkuaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlHaWZ0Q2VydGlmaWNhdGUoY29kZSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuXG4gICAgICAgICQoJ1tkYXRhLWl0ZW0tZ2lmdHdyYXBdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtR2lmdHdyYXAnKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9naWZ0LXdyYXBwaW5nLWZvcm0nLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyhpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kR2lmdFdyYXBwaW5nRm9ybSgpIHtcbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRzZWxlY3QudmFsKCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICRzZWxlY3QuZGF0YSgnaW5kZXgnKTtcblxuICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWxsb3dNZXNzYWdlID0gJHNlbGVjdC5maW5kKGBvcHRpb25bdmFsdWU9JHtpZH1dYCkuZGF0YSgnYWxsb3dNZXNzYWdlJyk7XG5cbiAgICAgICAgICAgICQoYC5naWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH1gKS5oaWRlKCk7XG4gICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9LSR7aWR9YCkuc2hvdygpO1xuXG4gICAgICAgICAgICBpZiAoYWxsb3dNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0JykudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlVmlld3MoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQoJ2lucHV0OnJhZGlvW25hbWUgPVwiZ2lmdHdyYXB0eXBlXCJdOmNoZWNrZWQnKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0ICRzaW5nbGVGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1zaW5nbGUnKTtcbiAgICAgICAgICAgIGNvbnN0ICRtdWx0aUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLW11bHRpcGxlJyk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ3NhbWUnKSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbbmFtZT1cImdpZnR3cmFwdHlwZVwiXScpLm9uKCdjbGljaycsIHRvZ2dsZVZpZXdzKTtcblxuICAgICAgICB0b2dnbGVWaWV3cygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuYmluZENhcnRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kUHJvbW9Db2RlRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKTtcblxuICAgICAgICAvLyBpbml0aWF0ZSBzaGlwcGluZyBlc3RpbWF0b3IgbW9kdWxlXG4gICAgICAgIGNvbnN0IHNoaXBwaW5nRXJyb3JNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuY29udGV4dC5zaGlwcGluZ0NvdW50cnlFcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICBwcm92aW5jZTogdGhpcy5jb250ZXh0LnNoaXBwaW5nUHJvdmluY2VFcnJvck1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSBuZXcgU2hpcHBpbmdFc3RpbWF0b3IoJCgnW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXScpLCBzaGlwcGluZ0Vycm9yTWVzc2FnZXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0VzdGltYXRvciB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQsIHNoaXBwaW5nRXJyb3JNZXNzYWdlcykge1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMgPSBzaGlwcGluZ0Vycm9yTWVzc2FnZXM7XG4gICAgICAgIHRoaXMuaW5pdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpO1xuICAgICAgICB0aGlzLmJpbmRFc3RpbWF0b3JFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQgPSAkKCcuc2hpcHBpbmctcXVvdGVzJyk7XG5cbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9ICdmb3JtW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXSc7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSAuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0YCxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdCcsIHRoaXMuJGVsZW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIGVzdGltYXRvciBlcnJvciBtZXNzYWdlcyBhcmUgYmVpbmcgaW5qZWN0ZWQgaW4gaHRtbCBhcyBhIHJlc3VsdFxuICAgICAgICAgICAgLy8gb2YgdXNlciBzdWJtaXQ7IGNsZWFyaW5nIGFuZCBhZGRpbmcgcm9sZSBvbiBzdWJtaXQgcHJvdmlkZXNcbiAgICAgICAgICAgIC8vIHJlZ3VsYXIgYW5ub3VuY2VtZW50IG9mIHRoZXNlIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICAgICBpZiAoc2hpcHBpbmdFc3RpbWF0b3JBbGVydC5hdHRyKCdyb2xlJykpIHtcbiAgICAgICAgICAgICAgICBzaGlwcGluZ0VzdGltYXRvckFsZXJ0LnJlbW92ZUF0dHIoJ3JvbGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcHBpbmdFc3RpbWF0b3JBbGVydC5hdHRyKCdyb2xlJywgJ2FsZXJ0Jyk7XG4gICAgICAgICAgICAvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIGNvdW50cmllcywgdGhlIHN0YXRlL3JlZ2lvbiBpcyBkeW5hbWljXG4gICAgICAgICAgICAvLyBPbmx5IHBlcmZvcm0gYSBjaGVjayBmb3IgYWxsIGZpZWxkcyB3aGVuIGNvdW50cnkgaGFzIGEgdmFsdWVcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhcmVBbGwoJ3ZhbGlkJykgd2lsbCBjaGVjayBjb3VudHJ5IGZvciB2YWxpZGl0eVxuICAgICAgICAgICAgaWYgKCQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCkudmFsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFVQU1JhdGVzKCk7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRyeUlkID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50cnlJZCAhPT0gMCAmJiAhTnVtYmVyLmlzTmFOKGNvdW50cnlJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMuY291bnRyeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCksXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZVZhbCAmJiBlbGVWYWwubGVuZ3RoICYmIGVsZVZhbCAhPT0gJ1N0YXRlL3Byb3ZpbmNlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuc2hpcHBpbmdFcnJvck1lc3NhZ2VzLnByb3ZpbmNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGJldHdlZW4gZGVmYXVsdCBzaGlwcGluZyBhbmQgdXBzIHNoaXBwaW5nIHJhdGVzXG4gICAgICovXG4gICAgYmluZFVQU1JhdGVzKCkge1xuICAgICAgICBjb25zdCBVUFNSYXRlVG9nZ2xlID0gJy5lc3RpbWF0b3ItZm9ybS10b2dnbGVVUFNSYXRlJztcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgVVBTUmF0ZVRvZ2dsZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybVVwcyA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tdXBzJyk7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybURlZmF1bHQgPSAkKCcuZXN0aW1hdG9yLWZvcm0tLWRlZmF1bHQnKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1VcHMudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtRGVmYXVsdC50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCkge1xuICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICBzdGF0ZUNvdW50cnkodGhpcy4kc3RhdGUsIHRoaXMuY29udGV4dCwgeyB1c2VJZEZvclN0YXRlczogdHJ1ZSB9LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlKHRvZ2dsZUJ1dHRvbiwgYnV0dG9uU2VsZWN0b3IsICR0b2dnbGVDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlID0gKHNlbGVjdG9yVG9BY3RpdmF0ZSkgPT4ge1xuICAgICAgICAgICAgJCh0b2dnbGVCdXR0b24pLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIHNlbGVjdG9yVG9BY3RpdmF0ZSk7XG4gICAgICAgICAgICAkKGJ1dHRvblNlbGVjdG9yKS50ZXh0KCQoYCMke3NlbGVjdG9yVG9BY3RpdmF0ZX1gKS50ZXh0KCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQpIHtcbiAgICAgICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSgnZXN0aW1hdG9yLWNsb3NlJyk7XG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlKCdlc3RpbWF0b3ItYWRkJyk7XG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNFc3RpbWF0b3JGb3JtT3BlbmVkID0gIXRoaXMuaXNFc3RpbWF0b3JGb3JtT3BlbmVkO1xuICAgIH1cblxuICAgIGJpbmRFc3RpbWF0b3JFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUVzdGltYXRvckZvcm1TdGF0ZShldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNoaXBwaW5nLWVzdGltYXRlLXNob3dfX2J0bi1uYW1lJywgJGVzdGltYXRvckNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHNCYXNlLCB7IG9wdGlvbkNoYW5nZURlY29yYXRvciB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc0Jyb3dzZXJJRSwgY29udmVydEludG9BcnJheSB9IGZyb20gJy4vdXRpbHMvaWUtaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRJdGVtRGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0LCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnI0NhcnRFZGl0UHJvZHVjdEZpZWxkc0Zvcm0nLCB0aGlzLiRzY29wZSk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xuICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvcHRpb25DaGFuZ2VDYWxsYmFjayA9IG9wdGlvbkNoYW5nZURlY29yYXRvci5jYWxsKHRoaXMsIGhhc0RlZmF1bHRPcHRpb25zKTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XG4gICAgICAgIGlmICgoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSB0aGlzLmNvbnRleHQucHJvZHVjdEZvckNoYW5nZUlkO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQoKSB7XG4gICAgICAgIGNvbnN0IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgICQuZWFjaCgkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhbnRzbGlzdCA9IGNvbnZlcnRJbnRvQXJyYXkodmFsdWUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCA9IGlucHQgPT4gaW5wdC5kYXRhc2V0LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSA9PT0gY2hlY2tlZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0KVswXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmNoaWxkcmVuWzBdIDogY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpZZXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJykgOiAndW5zYXRpc2ZpZWQnO1xuICAgICAgICBjb25zdCB2aWV3ID0gJCgnLm1vZGFsLWhlYWRlci10aXRsZScpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XG4gICAgICAgICAgICBpZiAodmlldy5hdHRyKCdkYXRhLWV2ZW50LXR5cGUnKSkge1xuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlldy5odG1sKCkubWF0Y2goLycoLio/KScvKVsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XG4gICAgICAgICAgICAgICAgY2FyZC5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJy5tb2RhbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2hpZGUtY29udGVudCcpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZXJ0KSB7XG4gICAgaWYgKHR5cGVvZiBjZXJ0ICE9PSAnc3RyaW5nJyB8fCBjZXJ0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbi8qKlxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xuXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcblxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XG5cbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgc3RhdGVzQXJyYXkuc3RhdGVzLmZvckVhY2goKHN0YXRlT2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubGFiZWwgPyBzdGF0ZU9iai5sYWJlbCA6IHN0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRzZWxlY3RFbGVtZW50Lmh0bWwoY29udGFpbmVyLmpvaW4oJyAnKSk7XG4gICAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge2pRdWVyeX0gc3RhdGVFbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZUVsZW1lbnQsIGNvbnRleHQgPSB7fSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAvKipcbiAgICAgKiBCYWNrd2FyZHMgY29tcGF0aWJsZSBmb3IgdGhyZWUgcGFyYW1ldGVycyBpbnN0ZWFkIG9mIGZvdXJcbiAgICAgKlxuICAgICAqIEF2YWlsYWJsZSBvcHRpb25zOlxuICAgICAqXG4gICAgICogdXNlSWRGb3JTdGF0ZXMge0Jvb2x9IC0gR2VuZXJhdGVzIHN0YXRlcyBkcm9wZG93biB1c2luZyBpZCBmb3IgdmFsdWVzIGluc3RlYWQgb2Ygc3RyaW5nc1xuICAgICAqL1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIH1cblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpZWxkLXR5cGU9XCJDb3VudHJ5XCJdJykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgY291bnRyeU5hbWUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xuXG4gICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jb3VudHJ5LmdldEJ5TmFtZShjb3VudHJ5TmFtZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChjb250ZXh0LnN0YXRlX2Vycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRJbnB1dCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHJlcGxhY2VkIHdpdGggYSBzZWxlY3QsIHJlc2VsZWN0IGl0XG4gICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdEVsZW1lbnQgPSBtYWtlU3RhdGVSZXF1aXJlZCgkY3VycmVudElucHV0LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGFkZE9wdGlvbnMocmVzcG9uc2UuZGF0YSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICRzZWxlY3RFbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG1ha2VTdGF0ZU9wdGlvbmFsKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIl0sIm5hbWVzIjpbInV0aWxzIiwiQ29ybmVyc3RvbmVDYXJ0IiwiZGVmYXVsdE1vZGFsIiwiTW9kYWxFdmVudHMiLCJQcm9kdWN0RGV0YWlscyIsIm5vdGlmaWNhdGlvbiIsIkNhcnQiLCJfQ29ybmVyc3RvbmVDYXJ0IiwiX3RoaXMiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIl90aGlzMiIsIiQiLCJvbiIsImV2ZW50IiwicmVzcG9uc2UiLCJ1cGRhdGVDb250ZW50IiwicmVmcmVzaENvbnRlbnQiLCJjYXJ0RWRpdE9wdGlvbnMiLCJpdGVtSWQiLCJwcm9kdWN0SWQiLCJfdGhpczMiLCJtb2RhbCIsIiRtb2RhbCIsIm9wZW4iLCJzaXplIiwiUHJvbWlzZSIsImFsbCIsIm9wZW5Qcm9kdWN0RWRpdCIsIm9wZW5RdWlja1ZpZXciLCJ0aGVuIiwiX3JlZiIsIl9yZWYkIiwiY29udGVudCIsImRhdGEiLCIkY29udGVudCIsImh0bWwiLCIkcHJvZHVjdEF0dHJpYnV0ZXNXcmFwcGVyIiwiZmluZCIsIiRmb3JtIiwiZWRpdFByb2R1Y3RRdWFudGl0eSIsIiRjYXJ0Q29udGVudCIsInZhbCIsImZpeFN0ZXBwZXJPcHRpb25zIiwidGV4dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcHRpb25zIiwic2hvdyIsInByZXBlbmQiLCJxdW90ZV9pdGVtX2lkIiwiZWRpdFByb2R1Y3RDYWxsYmFjayIsImNsb3NlIiwibXNnIiwiaW5mbyIsIiRpdGVtIiwiY2xvc2VzdCIsImFkZENsYXNzIiwib25lIiwicmVtb3ZlQ2xhc3MiLCJjb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwiZWFjaCIsIl9pIiwiZWwiLCIkZWwiLCJhdHRySWQiLCIkb3B0aW9uIiwiYXR0ciIsImNsb25lIiwicHJlcGVuZFRvIiwiYXBwZW5kVG8iLCIkcmVzcG9uc2UiLCIkY2FydFRvdGFscyIsIiRjYXJ0TWVzc2FnZXMiLCIkY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMiLCIkY2FydFBhZ2VUaXRsZSIsImVycm9yIiwiZ2VuZXJpY0Vycm9yIiwicmVwbGFjZVdpdGgiLCJiaW5kRXZlbnRzIiwiJGFjdGl2ZUNhcnRJdGVtSWQiLCJmaWx0ZXIiLCIkYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24iLCJ0cmlnZ2VyIiwicmVzb2x2ZSIsInRlbXBsYXRlIiwiYXBpIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJlcnIiLCJjbG9zZWQiLCJoYW5kbGVEcm9wZG93bkV4cGFuZCIsIl9yZWYyIiwiY3VycmVudFRhcmdldCIsIiRkcm9wZG93bk1lbnUiLCJkcm9wZG93bkJ0bkhlaWdodCIsInByZXYiLCJvdXRlckhlaWdodCIsImNzcyIsIm9mZiIsInByb2R1Y3QiLCJnZXRCeUlkIiwiZGVmYXVsdCIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwiR2VuZXJhdG9yIiwidSIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImwiLCJUeXBlRXJyb3IiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9uZXh0IiwiX3Rocm93IiwiY29uc3RydWN0b3IiLCJfc2V0UHJvdG90eXBlT2YiLCJQYWdlTWFuYWdlciIsImNoZWNrSXNHaWZ0Q2VydFZhbGlkIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJzaG93QWxlcnRNb2RhbCIsIkNhcnRJdGVtRGV0YWlscyIsIl9QYWdlTWFuYWdlciIsIiRjYXJ0UGFnZUNvbnRlbnQiLCIkb3ZlcmxheSIsImhpZGUiLCJzZXRBcHBsZVBheVN1cHBvcnQiLCJ3aW5kb3ciLCJBcHBsZVBheVNlc3Npb24iLCJjYXJ0VXBkYXRlIiwiJHRhcmdldCIsIm9sZFF0eSIsInBhcnNlSW50IiwibWF4UXR5IiwibWluUXR5IiwibWluRXJyb3IiLCJtYXhFcnJvciIsIm5ld1F0eSIsImNhcnQiLCJpdGVtVXBkYXRlIiwic3RhdHVzIiwicmVtb3ZlIiwiZXJyb3JzIiwiam9pbiIsImNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlIiwicHJlVmFsIiwiTnVtYmVyIiwiaW52YWxpZEVudHJ5IiwiaXNJbnRlZ2VyIiwiaW52YWxpZEVudHJ5TWVzc2FnZSIsInJlcGxhY2UiLCJjYXJ0UmVtb3ZlSXRlbSIsIml0ZW1SZW1vdmUiLCJfdGhpczQiLCJwcm9kdWN0Rm9yQ2hhbmdlSWQiLCJvcHRpb25DaGFuZ2VIYW5kbGVyIiwiJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyIiwibW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQiLCJoYXNDbGFzcyIsIm9wZW5lZCIsIm1vZGFsRm9ybSIsIm9uU3VibWl0IiwiX3giLCJfb25TdWJtaXQiLCJfY2FsbGVlIiwiX2NvbnRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3RGb3JtRGF0YSIsIkZvcm1EYXRhIiwicHJvZHVjdERldGFpbHMiLCJiaW5kR2lmdFdyYXBwaW5nRm9ybSIsImNhbGxiYWNrIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94Iiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwicmVzdWx0IiwicHVyY2hhc2luZ19tZXNzYWdlIiwicHJvcCIsInB1cmNoYXNhYmxlIiwiaW5zdG9jayIsImhvb2tzIiwiX3RoaXM1IiwiJGNhcnRJdGVtc1Jvd3MiLCJ0b3RhbHMiLCJwYWdlVGl0bGUiLCJzdGF0dXNNZXNzYWdlcyIsImFkZGl0aW9uYWxDaGVja291dEJ1dHRvbnMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldENvbnRlbnQiLCJxdWFudGl0eSIsImJpbmRDYXJ0RXZlbnRzIiwiX3RoaXM2IiwiZGVib3VuY2VUaW1lb3V0IiwiX2JpbmQiLCJfZGVib3VuY2UiLCJmb2N1cyIsIm9uUXR5Rm9jdXMiLCJjaGFuZ2UiLCJzdHJpbmciLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsIm9uQ29uZmlybSIsImJpbmRQcm9tb0NvZGVFdmVudHMiLCJfdGhpczciLCIkY291cG9uQ29udGFpbmVyIiwiJGNvdXBvbkZvcm0iLCIkY29kZUlucHV0IiwiY29kZSIsImFwcGx5Q29kZSIsImJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMiLCJfdGhpczgiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImludmFsaWRfZ2lmdF9jZXJ0aWZpY2F0ZSIsImFwcGx5R2lmdENlcnRpZmljYXRlIiwicmVzcCIsImJpbmRHaWZ0V3JhcHBpbmdFdmVudHMiLCJfdGhpczkiLCJnZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyIsIiRzZWxlY3QiLCJpZCIsImluZGV4IiwiYWxsb3dNZXNzYWdlIiwidG9nZ2xlVmlld3MiLCIkc2luZ2xlRm9ybSIsIiRtdWx0aUZvcm0iLCJzaGlwcGluZ0Vycm9yTWVzc2FnZXMiLCJjb3VudHJ5Iiwic2hpcHBpbmdDb3VudHJ5RXJyb3JNZXNzYWdlIiwicHJvdmluY2UiLCJzaGlwcGluZ1Byb3ZpbmNlRXJyb3JNZXNzYWdlIiwic2hpcHBpbmdFc3RpbWF0b3IiLCJzdGF0ZUNvdW50cnkiLCJub2QiLCJWYWxpZGF0b3JzIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaXNFc3RpbWF0b3JGb3JtT3BlbmVkIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ0VzdGltYXRvckFsZXJ0Iiwic2hpcHBpbmdWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCJyZW1vdmVBdHRyIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiYmluZFZhbGlkYXRpb24iLCJiaW5kU3RhdGVWYWxpZGF0aW9uIiwiYmluZFVQU1JhdGVzIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwiY291bnRyeUlkIiwiaXNOYU4iLCJlcnJvck1lc3NhZ2UiLCIkZWxlIiwiZWxlVmFsIiwiVVBTUmF0ZVRvZ2dsZSIsIiRlc3RpbWF0b3JGb3JtVXBzIiwiJGVzdGltYXRvckZvcm1EZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCIkbGFzdCIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsImlzIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInRvZ2dsZUVzdGltYXRvckZvcm1TdGF0ZSIsInRvZ2dsZUJ1dHRvbiIsImJ1dHRvblNlbGVjdG9yIiwiJHRvZ2dsZUNvbnRhaW5lciIsImNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSIsInNlbGVjdG9yVG9BY3RpdmF0ZSIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiUHJvZHVjdERldGFpbHNCYXNlIiwib3B0aW9uQ2hhbmdlRGVjb3JhdG9yIiwiaXNCcm93c2VySUUiLCJjb252ZXJ0SW50b0FycmF5IiwiX1Byb2R1Y3REZXRhaWxzQmFzZSIsIiRzY29wZSIsInByb2R1Y3RBdHRyaWJ1dGVzRGF0YSIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJoYXNPcHRpb25zIiwidHJpbSIsImhhc0RlZmF1bHRPcHRpb25zIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJvcHRpb25DaGFuZ2VDYWxsYmFjayIsIl9pc0VtcHR5IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsIm9wdGlvblRpdGxlIiwic3BsaXQiLCJyZXF1aXJlZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsInB1c2giLCJpc1NhdGlzZmllZCIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlcnkiLCJzZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiZGF0ZVN0cmluZyIsIm1hcCIsIngiLCJjaGVja2VkIiwiZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCIsInByb2R1Y3RWYXJpYW50c2xpc3QiLCJtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0IiwiaW5wdCIsImRhdGFzZXQiLCJwcm9kdWN0QXR0cmlidXRlVmFsdWUiLCJsYWJlbCIsImxhYmVscyIsInRpdGxlIiwicHJvZHVjdFZhcmlhbnQiLCJzb3J0IiwidmlldyIsInByb2R1Y3ROYW1lIiwibWF0Y2giLCJjYXJkIiwiY2VydCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJtYWtlU3RhdGVSZXF1aXJlZCIsInN0YXRlRWxlbWVudCIsImF0dHJzIiwiX3RyYW5zZm9ybSIsIml0ZW0iLCJyZXQiLCJuYW1lIiwicmVwbGFjZW1lbnRBdHRyaWJ1dGVzIiwiJG5ld0VsZW1lbnQiLCIkaGlkZGVuSW5wdXQiLCJhcHBlbmQiLCJtYWtlU3RhdGVPcHRpb25hbCIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50IiwiY29udGFpbmVyIiwicHJlZml4Iiwic3RhdGVzIiwiZm9yRWFjaCIsInN0YXRlT2JqIiwiY291bnRyeU5hbWUiLCJnZXRCeU5hbWUiLCJzdGF0ZV9lcnJvciIsIiRjdXJyZW50SW5wdXQiLCJuZXdFbGVtZW50IiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsInBhcnNlIiwidW5kZWZpbmVkIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJrZXkiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==