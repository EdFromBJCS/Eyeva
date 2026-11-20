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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc19wYXBhdGhlbWVzX2NhcnRfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0g7QUFDc0I7QUFDYjtBQUNYO0FBQUEsSUFFckJNLElBQUksMEJBQUFDLGdCQUFBO0VBQ3JCLFNBQUFELEtBQUEsRUFBcUI7SUFBQSxJQUFBRSxLQUFBO0lBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBTkMsSUFBSSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFKRixJQUFJLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFDZk4sS0FBQSxHQUFBRCxnQkFBQSxDQUFBUSxJQUFBLENBQUFDLEtBQUEsQ0FBQVQsZ0JBQUEsU0FBQVUsTUFBQSxDQUFTTCxJQUFJLEVBQUM7SUFDZEosS0FBQSxDQUFLSCxZQUFZLEdBQUdBLHlEQUFZLENBQUMsQ0FBQztJQUFDLE9BQUFHLEtBQUE7RUFDdkM7RUFDQTtBQUNKO0FBQ0E7RUFGSVUsY0FBQSxDQUFBWixJQUFBLEVBQUFDLGdCQUFBO0VBQUEsSUFBQVksTUFBQSxHQUFBYixJQUFBLENBQUFjLFNBQUE7RUFBQUQsTUFBQSxDQUdBRSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUNOZixnQkFBQSxDQUFBYSxTQUFBLENBQU1DLE9BQU8sQ0FBQU4sSUFBQTtJQUViUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQVU7TUFBQSxJQUFsQkEsUUFBUTtRQUFSQSxRQUFRLEdBQUcsRUFBRTtNQUFBO01BQzlDLElBQUlBLFFBQVEsRUFBRTtRQUNWSixNQUFJLENBQUNLLGFBQWEsQ0FBQ0QsUUFBUSxDQUFDO01BQ2hD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InNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvY2FydC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0LmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgQ29ybmVyc3RvbmVDYXJ0IGZyb20gJy4uL3RoZW1lL2NhcnQnO1xyXG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwsIE1vZGFsRXZlbnRzIH0gZnJvbSAnLi4vdGhlbWUvZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vZXlldmEvcHJvZHVjdC1kZXRhaWxzJztcclxuaW1wb3J0IG5vdGlmaWNhdGlvbiBmcm9tICcuL25vdGlmaWNhdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgQ29ybmVyc3RvbmVDYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IG5vdGlmaWNhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkZSB0aGUgbWV0aG9kIHRvIHJlZnJlc2ggY2FydCBjb250ZW50IHdoZW4gYGJvZHlgIHJlY2VpdmUgZXZlbnQgYHJlZnJlc2gtY2FydGBcclxuICAgICAqL1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBzdXBlci5vblJlYWR5KCk7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5vbigncmVmcmVzaC1jYXJ0JywgKGV2ZW50LCByZXNwb25zZSA9ICcnKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcnRFZGl0T3B0aW9ucyhpdGVtSWQsIHByb2R1Y3RJZCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiRtb2RhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRtb2RhbCA9ICQoJyNtb2RhbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW9kYWwub3Blbih7IHNpemU6ICdsYXJnZScgfSk7XHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5vcGVuUHJvZHVjdEVkaXQoaXRlbUlkKSxcclxuICAgICAgICAgICAgdGhpcy5vcGVuUXVpY2tWaWV3KHByb2R1Y3RJZCwgbW9kYWwpLFxyXG4gICAgICAgIF0pLnRoZW4oKFt7IGNvbnRlbnQsIGRhdGEgfV0pID0+IHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gbWVyZ2UgcXVpY2stdmlldyB3aXRoIHByb2R1Y3QgZWRpdCBvcHRpb25zIEhUTUxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCc8ZGl2PjwvZGl2PicpLmh0bWwoY29udGVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0QXR0cmlidXRlc1dyYXBwZXIgPSAkY29udGVudC5maW5kKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nKTtcclxuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSB0aGlzLiRtb2RhbC5maW5kKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nKTtcclxuICAgICAgICAgICAgY29uc3QgZWRpdFByb2R1Y3RRdWFudGl0eSA9IHRoaXMuJGNhcnRDb250ZW50LmZpbmQoYGlucHV0W25hbWU9XCJxdHktJHtpdGVtSWR9XCJdYCkudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBmaXggc3RlcHBlciBvcHRpb25zIGJlY2F1c2UgY3VzdG9tX2ZpZWxkcyBub3Qgd29ya2luZyBpbiBwcm9kdWN0L2NvbmZpZ3VyZSByZXF1ZXN0XHJcbiAgICAgICAgICAgIHRoaXMuZml4U3RlcHBlck9wdGlvbnMoJHByb2R1Y3RBdHRyaWJ1dGVzV3JhcHBlcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRtb2RhbC5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykuaHRtbCgkcHJvZHVjdEF0dHJpYnV0ZXNXcmFwcGVyLmh0bWwoKSk7IC8vIG1lcmdlIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlcy13cmFwcGVyXSA+ICogdG8gW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXVxyXG4gICAgICAgICAgICB0aGlzLiRtb2RhbC5maW5kKCdbZGF0YS1leWV2YS1wcm9kdWN0LW9wdGlvbnNdJykudGV4dChKU09OLnN0cmluZ2lmeShkYXRhLm9wdGlvbnMpKTsgLy8gdXBkYXRlIFtkYXRhLWV5ZXZhLXByb2R1Y3Qtb3B0aW9uc11cclxuICAgICAgICAgICAgdGhpcy4kbW9kYWwuZmluZCgnW2RhdGEtdXBkYXRlLXByb2R1Y3Qtd3JhcHBlcl0nKS5zaG93KCk7IC8vIHNob3cgQWRkIE5ldyBUbyBDYXJ0IGJ1dHRvblxyXG4gICAgICAgICAgICAkZm9ybS5wcmVwZW5kKGA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpdGVtX2lkXCIgdmFsdWU9XCIke2RhdGEucXVvdGVfaXRlbV9pZH1cIj5gKTsgLy8gYWRkIGhpZGRlbiBpbnB1dFtuYW1lPVwiaXRlbV9pZFwiXSB0byBmb3JtXHJcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJxdHlbXVwiXScpLnZhbChlZGl0UHJvZHVjdFF1YW50aXR5KTsgLy8gdXBkYXRlIHByb2R1Y3QgcXVhbnRpdHlcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IGNvbnRlbnQgYWZ0ZXIgZWRpdCBwcm9kdWN0IG9wdGlvbnNcclxuICAgICAgICAgICAgY29uc3QgZWRpdFByb2R1Y3RDYWxsYmFjayA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnID0gJGNvbnRlbnQuZmluZCgnW2RhdGEtdXBkYXRlZC1zdWNjZXNzLW1zZ10nKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZykgdGhpcy5ub3RpZmljYXRpb24uaW5mbyhtc2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkaXRlbSA9IHRoaXMuJGNhcnRDb250ZW50LmZpbmQoYFtkYXRhLWl0ZW0tZWRpdD1cIiR7aXRlbUlkfVwiXWApLmNsb3Nlc3QoJ1tkYXRhLWl0ZW0tcm93XScpO1xyXG4gICAgICAgICAgICAgICAgICAgICRpdGVtLmFkZENsYXNzKCdfYWRkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGl0ZW0ub25lKCdhbmltYXRpb25lbmQnLCAoKSA9PiAkaXRlbS5yZW1vdmVDbGFzcygnX2FkZGluZycpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB7IC4uLnRoaXMuY29udGV4dCwgZWRpdFByb2R1Y3RDYWxsYmFjaywgZWRpdFByb2R1Y3RRdWFudGl0eSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb2R1Y3REZXRhaWxzKG1vZGFsLiRjb250ZW50LmZpbmQoJy5xdWlja1ZpZXcnKSwgY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVwbGljYXRlIHRoZSBzdGVwcGVyIG9wdGlvbiBjb250cm9scyBmcm9tIHRoZSBwcm9kdWN0IHZpZXcgaW50byB0aGUgY2FydCBlZGl0IG9wdGlvbnMgbW9kYWxcclxuICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgY3VzdG9tX2ZpZWxkcyBhcmUgbm90IGF2YWlsYWJsZSBpbiB0aGUgcHJvZHVjdC9jb25maWd1cmUgcmVxdWVzdFxyXG4gICAgZml4U3RlcHBlck9wdGlvbnMoJHByb2R1Y3RBdHRyaWJ1dGVzV3JhcHBlcikge1xyXG4gICAgICAgIHRoaXMuJG1vZGFsLmZpbmQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nKS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1zdGVwcGVyXScpXHJcbiAgICAgICAgICAgIC5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cklkID0gJGVsLmRhdGEoJ3Byb2R1Y3QtYXR0cmlidXRlLWlkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkb3B0aW9uID0gJHByb2R1Y3RBdHRyaWJ1dGVzV3JhcHBlci5maW5kKGBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS1pZD1cIiR7YXR0cklkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgJG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZm9ybS1maWVsZC0tc3RlcHBlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtcHJvZHVjdC1vcHRpb24tc3RlcHBlcicsICcnKTtcclxuICAgICAgICAgICAgICAgICRlbC5maW5kKCcuX3F1ZXJ5LXN0ZXBwZXItZmlyc3QnKS5jbG9uZSgpLnByZXBlbmRUbygkb3B0aW9uKTtcclxuICAgICAgICAgICAgICAgICRlbC5maW5kKCcuX3F1ZXJ5LXN0ZXBwZXItbGFzdCcpLmNsb25lKCkuYXBwZW5kVG8oJG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVmcmVzaCBjYXJ0IGNvbnRlbnQgd2l0aCBpbnB1dCBjYXJ0IHBhZ2UgSFRNTFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlc3BvbnNlIEhUTUwgb2YgY2FydCBwYWdlXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCAkcmVzcG9uc2UgPSAkKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGNhcnRDb250ZW50ID0gJCgnW2RhdGEtY2FydC1jb250ZW50XScsICRyZXNwb25zZSk7XHJcbiAgICAgICAgY29uc3QgJGNhcnRUb3RhbHMgPSAkKCdbZGF0YS1jYXJ0LXRvdGFsc10nLCAkcmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0ICRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nLCAkcmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0ICRjYXJ0QWRkaXRpb25hbENoZWNrb3V0QnRucyA9ICQoJ1tkYXRhLWNhcnQtYWRkaXRpb25hbC1jaGVja291dC1idXR0b25zXScsICRyZXNwb25zZSk7XHJcbiAgICAgICAgY29uc3QgJGNhcnRQYWdlVGl0bGUgPSAkKCdbZGF0YS1jYXJ0LXBhZ2UtdGl0bGVdJywgJHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgaWYgKCRjYXJ0Q29udGVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uZXJyb3IodGhpcy5jb250ZXh0LmdlbmVyaWNFcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwoJGNhcnRDb250ZW50Lmh0bWwoKSk7XHJcbiAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKCRjYXJ0VG90YWxzLmh0bWwoKSk7XHJcbiAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzLmh0bWwoJGNhcnRNZXNzYWdlcy5odG1sKCkpO1xyXG4gICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zLmh0bWwoJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zLmh0bWwoKSk7XHJcbiAgICAgICAgJCgnW2RhdGEtY2FydC1wYWdlLXRpdGxlXScpLnJlcGxhY2VXaXRoKCRjYXJ0UGFnZVRpdGxlKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgICAgICQoYFtkYXRhLWNhcnQtaXRlbWlkPScke3RoaXMuJGFjdGl2ZUNhcnRJdGVtSWR9J11gLCB0aGlzLiRjYXJ0Q29udGVudClcclxuICAgICAgICAgICAgLmZpbHRlcihgW2RhdGEtYWN0aW9uPScke3RoaXMuJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9ufSddYClcclxuICAgICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcblxyXG4gICAgICAgIC8vIGhpZ2hsaWdodCB0aGUgbmV3bHkgYWRkZWQgaXRlbVxyXG4gICAgICAgIGNvbnN0ICRpdGVtID0gdGhpcy4kY2FydENvbnRlbnQuZmluZCgnW2RhdGEtaXRlbS1yb3ctYWRkZWRdJyk7XHJcbiAgICAgICAgJGl0ZW0uYWRkQ2xhc3MoJ19hZGRpbmcnKTtcclxuICAgICAgICAkaXRlbS5vbmUoJ2FuaW1hdGlvbmVuZCcsICgpID0+ICRpdGVtLnJlbW92ZUNsYXNzKCdfYWRkaW5nJykpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoIHByb2R1Y3QgY29uZmlndXJlZCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGl0ZW1JZFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8e1xyXG4gICAgICogICBjb250ZW50OiBzdHJpbmcsXHJcbiAgICAgKiAgIGRhdGE6IHtcclxuICAgICAqICAgICBjdXN0b21pemF0aW9uczogb2JqZWN0W10sXHJcbiAgICAgKiAgICAgb3B0aW9uczogb2JqZWN0W10sXHJcbiAgICAgKiAgICAgcHJvZHVjdF9uYW1lOiBzdHJpbmcsXHJcbiAgICAgKiAgICAgcXVvdGVfaXRlbV9pZDogc3RyaW5nLFxyXG4gICAgICogICB9XHJcbiAgICAgKiB9fT5cclxuICAgICAqL1xyXG4gICAgb3BlblByb2R1Y3RFZGl0KGl0ZW1JZCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb25lIGNvZGUgZnJvbSBhc3NldHMvanMvdGhlbWUvZ2xvYmFsL3F1aWNrLXZpZXcuanNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZHVjdElkXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAqL1xyXG4gICAgb3BlblF1aWNrVmlldyhwcm9kdWN0SWQsIG1vZGFsKSB7XHJcbiAgICAgICAgbW9kYWwuJG1vZGFsLmFkZENsYXNzKCdtb2RhbC0tcXVpY2tWaWV3Jyk7IC8vIGVuc3VyZSBtb2RhbCBoYXMgY29ycmVjdCBjbGFzcyBpZiBpdCBhbHJlYWR5IG9wZW5lZFxyXG4gICAgICAgIG1vZGFsLiRtb2RhbC5vbmUoTW9kYWxFdmVudHMub3BlbiwgKCkgPT4gbW9kYWwuJG1vZGFsLmFkZENsYXNzKCdtb2RhbC0tcXVpY2tWaWV3JykpO1xyXG4gICAgICAgIG1vZGFsLiRtb2RhbC5vbmUoTW9kYWxFdmVudHMuY2xvc2VkLCAoKSA9PiBtb2RhbC4kbW9kYWwucmVtb3ZlQ2xhc3MoJ21vZGFsLS1xdWlja1ZpZXcnKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZURyb3Bkb3duRXhwYW5kID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRkcm9wZG93bk1lbnUgPSAkKGN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bkJ0bkhlaWdodCA9ICRkcm9wZG93bk1lbnUucHJldigpLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAkZHJvcGRvd25NZW51LmNzcygndG9wJywgZHJvcGRvd25CdG5IZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1vZGFsLiRtb2RhbC5vbmUoTW9kYWxFdmVudHMuY2xvc2UsICgpID0+ICRkcm9wZG93bk1lbnUub2ZmKCdvcGVuZWQuZm5kdG4uZHJvcGRvd24nLCBoYW5kbGVEcm9wZG93bkV4cGFuZCkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHByb2R1Y3RJZCwgeyB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL3F1aWNrLXZpZXcnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzb2x2ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbCAuZHJvcGRvd24tbWVudScpLm9uKCdvcGVuZWQuZm5kdG4uZHJvcGRvd24nLCBoYW5kbGVEcm9wZG93bkV4cGFuZCk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC4kY29udGVudC5maW5kKCcucHJvZHVjdFZpZXcnKS5hZGRDbGFzcygncHJvZHVjdFZpZXctLXF1aWNrVmlldycpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZWQgZGF0YS1zbGljayBjb2RlIGFzIG5vdCB1c2VkIGluIHRoaXMgdGhlbWVcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZWQgUmV2aWV3IGNvZGUgYXMgaXQgYXMgcmVwbGFjZWQgYnkgdGhlIHRoZW1lJ3MgY3VzdG9tIGNvZGVcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZWQgbmV3IFByb2R1Y3REZXRhaWxzIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyBiaW5kLCBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBjaGVja0lzR2lmdENlcnRWYWxpZCBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBTaGlwcGluZ0VzdGltYXRvciBmcm9tICcuL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yJztcclxuaW1wb3J0IHsgZGVmYXVsdE1vZGFsLCBzaG93QWxlcnRNb2RhbCwgTW9kYWxFdmVudHMgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XHJcbmltcG9ydCBDYXJ0SXRlbURldGFpbHMgZnJvbSAnLi9jb21tb24vY2FydC1pdGVtLWRldGFpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy4kbW9kYWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJGNhcnRQYWdlQ29udGVudCA9ICQoJ1tkYXRhLWNhcnRdJyk7XHJcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0LWNvbnRlbnRdJyk7XHJcbiAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzID0gJCgnW2RhdGEtY2FydC1zdGF0dXNdJyk7XHJcbiAgICAgICAgdGhpcy4kY2FydFRvdGFscyA9ICQoJ1tkYXRhLWNhcnQtdG90YWxzXScpO1xyXG4gICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zID0gJCgnW2RhdGEtY2FydC1hZGRpdGlvbmFsLWNoZWNrb3V0LWJ1dHRvbnNdJyk7XHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnRdIC5sb2FkaW5nT3ZlcmxheScpXHJcbiAgICAgICAgICAgIC5oaWRlKCk7IC8vIFRPRE86IHRlbXBvcmFyeSB1bnRpbCByb3BlciBwdWxscyBpbiBoaXMgY2FydCBjb21wb25lbnRzXHJcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1JZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb24gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnNldEFwcGxlUGF5U3VwcG9ydCgpO1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFwcGxlUGF5U3VwcG9ydCgpIHtcclxuICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJ0UGFnZUNvbnRlbnQuYWRkQ2xhc3MoJ2FwcGxlLXBheS1zdXBwb3J0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FydFVwZGF0ZSgkdGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XHJcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1JZCA9IGl0ZW1JZDtcclxuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XHJcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcGFyc2VJbnQoJGVsLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcclxuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcclxuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XHJcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcclxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XHJcbiAgICAgICAgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwobWluRXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1heEVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsID0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XHJcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcclxuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHByZVZhbCAhPT0gbnVsbCA/IHByZVZhbCA6IG1pblF0eTtcclxuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XHJcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xyXG4gICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KE51bWJlcigkZWwudmFsKCkpLCAxMCk7XHJcbiAgICAgICAgbGV0IGludmFsaWRFbnRyeTtcclxuXHJcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxyXG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihuZXdRdHkpKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRFbnRyeSA9ICRlbC52YWwoKTtcclxuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodGhpcy5jb250ZXh0LmludmFsaWRFbnRyeU1lc3NhZ2UucmVwbGFjZSgnW0VOVFJZXScsIGludmFsaWRFbnRyeSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3UXR5IDwgbWluUXR5KSB7XHJcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1pbkVycm9yKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XHJcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1heEVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCkge1xyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCwgcHJvZHVjdElkKSB7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHsgcHJvZHVjdEZvckNoYW5nZUlkOiBwcm9kdWN0SWQsIC4uLnRoaXMuY29udGV4dCB9O1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiRtb2RhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRtb2RhbCA9ICQoJyNtb2RhbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbW9kYWwub3BlbigpO1xyXG4gICAgICAgIHRoaXMuJG1vZGFsLmZpbmQoJy5tb2RhbC1jb250ZW50JykuYWRkQ2xhc3MoJ2hpZGUtY29udGVudCcpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lciA9ICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlcy13cmFwcGVyXScsIHRoaXMuJG1vZGFsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0ID0gJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lci5sZW5ndGggJiYgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIuY3NzKCdoZWlnaHQnLCBtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy4kbW9kYWwuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uQ2hhbmdlSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwub25lKE1vZGFsRXZlbnRzLm9wZW5lZCwgb3B0aW9uQ2hhbmdlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsRm9ybSA9IHRoaXMuJG1vZGFsLmZpbmQoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgY29uc3QgcmVmcmVzaENvbnRlbnQgPSAoKSA9PiB0aGlzLnJlZnJlc2hDb250ZW50KCk7XHJcbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQucG9zdEZvcm1EYXRhKG5ldyBGb3JtRGF0YSh0aGlzKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaENvbnRlbnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtb2RhbEZvcm0ub24oJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgQ2FydEl0ZW1EZXRhaWxzKHRoaXMuJG1vZGFsLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcGFwYXRoZW1lczogZml4IG1lbW9yeSBsZWFrID4+PlxyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJChjdXJyZW50VGFyZ2V0KS5maW5kKCdmb3JtJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRzdWJtaXQgPSAkKCdpbnB1dC5idXR0b24nLCAkZm9ybSk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLmFsZXJ0TWVzc2FnZUJveCcpO1xyXG5cclxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgncC5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgY2FsbGJhY2spO1xyXG5cclxuICAgICAgICBtb2RhbC4kbW9kYWwub25lKE1vZGFsRXZlbnRzLmNsb3NlZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB1dGlscy5ob29rcy5vZmYoJ3Byb2R1Y3Qtb3B0aW9uLWNoYW5nZScsIGNhbGxiYWNrKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyA8PDxcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoQ29udGVudChyZW1vdmUpIHtcclxuICAgICAgICBjb25zdCAkY2FydEl0ZW1zUm93cyA9ICQoJ1tkYXRhLWl0ZW0tcm93XScsIHRoaXMuJGNhcnRDb250ZW50KTtcclxuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICB0b3RhbHM6ICdjYXJ0L3RvdGFscycsXHJcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU6ICdjYXJ0L3BhZ2UtdGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXHJcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsQ2hlY2tvdXRCdXR0b25zOiAnY2FydC9hZGRpdGlvbmFsLWNoZWNrb3V0LWJ1dHRvbnMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbGFzdCBpdGVtIGZyb20gY2FydD8gUmVsb2FkXHJcbiAgICAgICAgaWYgKHJlbW92ZSAmJiAkY2FydEl0ZW1zUm93cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FydENvbnRlbnQuaHRtbChyZXNwb25zZS5jb250ZW50KTtcclxuICAgICAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKHJlc3BvbnNlLnRvdGFscyk7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcy5odG1sKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2VzKTtcclxuICAgICAgICAgICAgdGhpcy4kY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMuaHRtbChyZXNwb25zZS5hZGRpdGlvbmFsQ2hlY2tvdXRCdXR0b25zKTtcclxuXHJcbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXF1YW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XHJcblxyXG4gICAgICAgICAgICAkKGBbZGF0YS1jYXJ0LWl0ZW1pZD0nJHt0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkfSddYCwgdGhpcy4kY2FydENvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGBbZGF0YS1hY3Rpb249JyR7dGhpcy4kYWN0aXZlQ2FydEl0ZW1CdG5BY3Rpb259J11gKVxyXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZENhcnRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xyXG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XHJcbiAgICAgICAgY29uc3QgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UgPSBiaW5kKGRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcclxuICAgICAgICBsZXQgcHJlVmFsO1xyXG5cclxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxyXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XHJcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNhcnQgcXR5IG1hbnVhbGx5IHVwZGF0ZXNcclxuICAgICAgICAkKCcuY2FydC1pdGVtLXF0eS1pbnB1dCcsIHRoaXMuJGNhcnRDb250ZW50KS5vbih7XHJcbiAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbiBvblF0eUZvY3VzKCkge1xyXG4gICAgICAgICAgICAgICAgcHJlVmFsID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hhbmdlOiBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcclxuICAgICAgICAgICAgICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5jYXJ0LXJlbW92ZScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydEl0ZW1pZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJpbmcgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NvbmZpcm1EZWxldGUnKTtcclxuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoc3RyaW5nLCB7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1pdGVtLWVkaXRdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtRWRpdCcpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3Byb2R1Y3RJZCcpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxyXG4gICAgICAgICAgICB0aGlzLmNhcnRFZGl0T3B0aW9ucyhpdGVtSWQsIHByb2R1Y3RJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFByb21vQ29kZUV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCAkY291cG9uQ29udGFpbmVyID0gJCgnLmNvdXBvbi1jb2RlJyk7XHJcbiAgICAgICAgY29uc3QgJGNvdXBvbkZvcm0gPSAkKCcuY291cG9uLWZvcm0nKTtcclxuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJjb3Vwb25jb2RlXCJdJywgJGNvdXBvbkZvcm0pO1xyXG5cclxuICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XHJcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuc2hvdygpO1xyXG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuc2hvdygpO1xyXG4gICAgICAgICAgICAkY29kZUlucHV0LnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmhpZGUoKTtcclxuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xyXG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkY291cG9uRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXHJcbiAgICAgICAgICAgIGlmICghY29kZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKCRjb2RlSW5wdXQuZGF0YSgnZXJyb3InKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCAkY2VydENvbnRhaW5lciA9ICQoJy5naWZ0LWNlcnRpZmljYXRlLWNvZGUnKTtcclxuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcclxuICAgICAgICBjb25zdCAkY2VydElucHV0ID0gJCgnW25hbWU9XCJjZXJ0Y29kZVwiXScsICRjZXJ0Rm9ybSk7XHJcblxyXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGUoKTtcclxuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcclxuICAgICAgICAgICAgJGNlcnRDb250YWluZXIuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcclxuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkY2VydEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29kZSA9ICRjZXJ0SW5wdXQudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjaGVja0lzR2lmdENlcnRWYWxpZChjb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh2YWxpZGF0aW9uRGljdGlvbmFyeS5pbnZhbGlkX2dpZnRfY2VydGlmaWNhdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUdpZnRDZXJ0aWZpY2F0ZShjb2RlLCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChyZXNwLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtR2lmdHdyYXAnKTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyhpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XHJcbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICRzZWxlY3QuZGF0YSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsb3dNZXNzYWdlID0gJHNlbGVjdC5maW5kKGBvcHRpb25bdmFsdWU9JHtpZH1dYCkuZGF0YSgnYWxsb3dNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9LSR7aWR9YCkuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0JykudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQoJ2lucHV0OnJhZGlvW25hbWUgPVwiZ2lmdHdyYXB0eXBlXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgICAgICAgICAgY29uc3QgJHNpbmdsZUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLXNpbmdsZScpO1xyXG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcclxuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcclxuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ1tuYW1lPVwiZ2lmdHdyYXB0eXBlXCJdJykub24oJ2NsaWNrJywgdG9nZ2xlVmlld3MpO1xyXG5cclxuICAgICAgICB0b2dnbGVWaWV3cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kQ2FydEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpO1xyXG5cclxuICAgICAgICAvLyBpbml0aWF0ZSBzaGlwcGluZyBlc3RpbWF0b3IgbW9kdWxlXHJcbiAgICAgICAgY29uc3Qgc2hpcHBpbmdFcnJvck1lc3NhZ2VzID0ge1xyXG4gICAgICAgICAgICBjb3VudHJ5OiB0aGlzLmNvbnRleHQuc2hpcHBpbmdDb3VudHJ5RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICBwcm92aW5jZTogdGhpcy5jb250ZXh0LnNoaXBwaW5nUHJvdmluY2VFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSwgc2hpcHBpbmdFcnJvck1lc3NhZ2VzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4uL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcclxuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycywgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcclxuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xyXG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0VzdGltYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgc2hpcHBpbmdFcnJvck1lc3NhZ2VzKSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG5cclxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuaXNFc3RpbWF0b3JGb3JtT3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMgPSBzaGlwcGluZ0Vycm9yTWVzc2FnZXM7XHJcbiAgICAgICAgdGhpcy5pbml0Rm9ybVZhbGlkYXRpb24oKTtcclxuICAgICAgICB0aGlzLmJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKTtcclxuICAgICAgICB0aGlzLmJpbmRFc3RpbWF0b3JFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Rm9ybVZhbGlkYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgc2hpcHBpbmdFc3RpbWF0b3JBbGVydCA9ICQoJy5zaGlwcGluZy1xdW90ZXMnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9ICdmb3JtW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXSc7XHJcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdGAsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdCcsIHRoaXMuJGVsZW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgLy8gZXN0aW1hdG9yIGVycm9yIG1lc3NhZ2VzIGFyZSBiZWluZyBpbmplY3RlZCBpbiBodG1sIGFzIGEgcmVzdWx0XHJcbiAgICAgICAgICAgIC8vIG9mIHVzZXIgc3VibWl0OyBjbGVhcmluZyBhbmQgYWRkaW5nIHJvbGUgb24gc3VibWl0IHByb3ZpZGVzXHJcbiAgICAgICAgICAgIC8vIHJlZ3VsYXIgYW5ub3VuY2VtZW50IG9mIHRoZXNlIGVycm9yIG1lc3NhZ2VzXHJcbiAgICAgICAgICAgIGlmIChzaGlwcGluZ0VzdGltYXRvckFsZXJ0LmF0dHIoJ3JvbGUnKSkge1xyXG4gICAgICAgICAgICAgICAgc2hpcHBpbmdFc3RpbWF0b3JBbGVydC5yZW1vdmVBdHRyKCdyb2xlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQuYXR0cigncm9sZScsICdhbGVydCcpO1xyXG4gICAgICAgICAgICAvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIGNvdW50cmllcywgdGhlIHN0YXRlL3JlZ2lvbiBpcyBkeW5hbWljXHJcbiAgICAgICAgICAgIC8vIE9ubHkgcGVyZm9ybSBhIGNoZWNrIGZvciBhbGwgZmllbGRzIHdoZW4gY291bnRyeSBoYXMgYSB2YWx1ZVxyXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgYXJlQWxsKCd2YWxpZCcpIHdpbGwgY2hlY2sgY291bnRyeSBmb3IgdmFsaWRpdHlcclxuICAgICAgICAgICAgaWYgKCQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCkudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kVVBTUmF0ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kVmFsaWRhdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRyeUlkID0gTnVtYmVyKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY291bnRyeUlkICE9PSAwICYmICFOdW1iZXIuaXNOYU4oY291bnRyeUlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuc2hpcHBpbmdFcnJvck1lc3NhZ2VzLmNvdW50cnksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZFN0YXRlVmFsaWRhdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKSxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWxlID0gJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVWYWwgPSAkZWxlLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZWxlVmFsICYmIGVsZVZhbC5sZW5ndGggJiYgZWxlVmFsICE9PSAnU3RhdGUvcHJvdmluY2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuc2hpcHBpbmdFcnJvck1lc3NhZ2VzLnByb3ZpbmNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIGJldHdlZW4gZGVmYXVsdCBzaGlwcGluZyBhbmQgdXBzIHNoaXBwaW5nIHJhdGVzXHJcbiAgICAgKi9cclxuICAgIGJpbmRVUFNSYXRlcygpIHtcclxuICAgICAgICBjb25zdCBVUFNSYXRlVG9nZ2xlID0gJy5lc3RpbWF0b3ItZm9ybS10b2dnbGVVUFNSYXRlJztcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIFVQU1JhdGVUb2dnbGUsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybVVwcyA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tdXBzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtVXBzLnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtRGVmYXVsdC50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XHJcbiAgICAgICAgbGV0ICRsYXN0O1xyXG5cclxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXHJcbiAgICAgICAgc3RhdGVDb3VudHJ5KHRoaXMuJHN0YXRlLCB0aGlzLmNvbnRleHQsIHsgdXNlSWRGb3JTdGF0ZXM6IHRydWUgfSwgKGVyciwgZmllbGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoZXJyKTtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmdldFN0YXR1cyh0aGlzLiRzdGF0ZSkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSh0aGlzLiRzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGZpZWxkLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ1N0YXRlL3Byb3ZpbmNlJyk7XHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBXaGVuIHlvdSBjaGFuZ2UgYSBjb3VudHJ5LCB5b3Ugc3dhcCB0aGUgc3RhdGUvcHJvdmluY2UgYmV0d2VlbiBhbiBpbnB1dCBhbmQgYSBzZWxlY3QgZHJvcGRvd25cclxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXHJcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVtb3ZlIHRoaXMgY2xhc3Mgd2hlbiB3ZSBzd2FwIHNpbmNlIG5vZCB2YWxpZGF0aW9uIGRvZXNuJ3QgY2xlYW51cCBmb3IgdXNcclxuICAgICAgICAgICAgJCh0aGlzLnNoaXBwaW5nRXN0aW1hdG9yKS5maW5kKCcuZm9ybS1maWVsZC0tc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1zdWNjZXNzJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlKHRvZ2dsZUJ1dHRvbiwgYnV0dG9uU2VsZWN0b3IsICR0b2dnbGVDb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCBjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUgPSAoc2VsZWN0b3JUb0FjdGl2YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICQodG9nZ2xlQnV0dG9uKS5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCBzZWxlY3RvclRvQWN0aXZhdGUpO1xyXG4gICAgICAgICAgICAkKGJ1dHRvblNlbGVjdG9yKS50ZXh0KCQoYCMke3NlbGVjdG9yVG9BY3RpdmF0ZX1gKS50ZXh0KCkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQpIHtcclxuICAgICAgICAgICAgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlKCdlc3RpbWF0b3ItY2xvc2UnKTtcclxuICAgICAgICAgICAgJHRvZ2dsZUNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUoJ2VzdGltYXRvci1hZGQnKTtcclxuICAgICAgICAgICAgJHRvZ2dsZUNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQgPSAhdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCAkZXN0aW1hdG9yQ29udGFpbmVyID0gJCgnLnNoaXBwaW5nLWVzdGltYXRvcicpO1xyXG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XHJcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XHJcbiAgICAgICAgJGVzdGltYXRvckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgY291bnRyeV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctc3RhdGVcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXHJcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXHJcbiAgICAgICAgICAgICAgICB6aXBfY29kZTogJCgnW25hbWU9XCJzaGlwcGluZy16aXBcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNoaXBwaW5nLXF1b3RlcycpLmh0bWwocmVzcG9uc2UuY29udGVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgJCgnLnNlbGVjdC1zaGlwcGluZy1xdW90ZScpLm9uKCdjbGljaycsIGNsaWNrRXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlSWQgPSAkKCcuc2hpcHBpbmctcXVvdGU6Y2hlY2tlZCcpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjbGlja0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zaG93Jykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUVzdGltYXRvckZvcm1TdGF0ZShldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNoaXBwaW5nLWVzdGltYXRlLXNob3dfX2J0bi1uYW1lJywgJGVzdGltYXRvckNvbnRhaW5lcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzQmFzZSwgeyBvcHRpb25DaGFuZ2VEZWNvcmF0b3IgfSBmcm9tICcuL3Byb2R1Y3QtZGV0YWlscy1iYXNlJztcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGlzQnJvd3NlcklFLCBjb252ZXJ0SW50b0FycmF5IH0gZnJvbSAnLi91dGlscy9pZS1oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRJdGVtRGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoJHNjb3BlLCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCcjQ2FydEVkaXRQcm9kdWN0RmllbGRzRm9ybScsIHRoaXMuJHNjb3BlKTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVzLXdyYXBwZXJdJywgJGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbkNoYW5nZUNhbGxiYWNrID0gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yLmNhbGwodGhpcywgaGFzRGVmYXVsdE9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xyXG4gICAgICAgIC8vIG9yIGhhdmUgZGVmYXVsdCB2YXJpYW50IHByb3BlcnRpZXMgdGhhdCBjaGFuZ2UgdGhlIHZpZXdcclxuICAgICAgICBpZiAoKGlzRW1wdHkocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKSB8fCBoYXNEZWZhdWx0T3B0aW9ucykgJiYgaGFzT3B0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSB0aGlzLmNvbnRleHQucHJvZHVjdEZvckNoYW5nZUlkO1xyXG5cclxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIG9wdGlvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2R1Y3RWYXJpYW50KCkge1xyXG4gICAgICAgIGNvbnN0IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMgPSBbXTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XHJcblxyXG4gICAgICAgICQuZWFjaCgkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBvcHRpb25MYWJlbC5zcGxpdCgnOicpWzBdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2F0aXNmaWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhbnRzbGlzdCA9IGNvbnZlcnRJbnRvQXJyYXkodmFsdWUuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0ID0gaW5wdCA9PiBpbnB0LmRhdGFzZXQucHJvZHVjdEF0dHJpYnV0ZVZhbHVlID09PSBjaGVja2VkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdFZhcmlhbnRzbGlzdC5maWx0ZXIobWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuaW5uZXJUZXh0LnRyaW0oKSA6IGNoZWNrZWQubGFiZWxzWzBdLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3dhdGNoJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmNoaWxkcmVuWzBdIDogY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHByb2R1Y3RWYXJpYW50ID0gdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IDAgPyBvcHRpb25zLnNvcnQoKS5qb2luKCcsICcpIDogJ3Vuc2F0aXNmaWVkJztcclxuICAgICAgICBjb25zdCB2aWV3ID0gJCgnLm1vZGFsLWhlYWRlci10aXRsZScpO1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdFZhcmlhbnQpIHtcclxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XHJcbiAgICAgICAgICAgIGlmICh2aWV3LmF0dHIoJ2RhdGEtZXZlbnQtdHlwZScpKSB7XHJcbiAgICAgICAgICAgICAgICB2aWV3LmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSB2aWV3Lmh0bWwoKS5tYXRjaCgvJyguKj8pJy8pWzFdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9ICQoYFtkYXRhLW5hbWU9XCIke3Byb2R1Y3ROYW1lfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgY2FyZC5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJy5tb2RhbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2hpZGUtY29udGVudCcpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZXJ0KSB7XHJcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnIHx8IGNlcnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhbnkgY3VzdG9tIGdpZnQgY2VydGlmaWNhdGUgdmFsaWRhdGlvbiBsb2dpYyBoZXJlXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH0gZnJvbSAnLi91dGlscy9mb3JtLXV0aWxzJztcclxuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xyXG5cclxuLyoqXHJcbiAqIElmIHRoZXJlIGFyZSBubyBvcHRpb25zIGZyb20gYmNhcHAsIGEgdGV4dCBmaWVsZCB3aWxsIGJlIHNlbnQuIFRoaXMgd2lsbCBjcmVhdGUgYSBzZWxlY3QgZWxlbWVudCB0byBob2xkIG9wdGlvbnMgYWZ0ZXIgdGhlIHJlbW90ZSByZXF1ZXN0LlxyXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZVN0YXRlUmVxdWlyZWQoc3RhdGVFbGVtZW50LCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XHJcbiAgICAgICAgcmV0W2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxyXG4gICAgICAgICdkYXRhLWxhYmVsJzogYXR0cnNbJ2RhdGEtbGFiZWwnXSxcclxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcclxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxyXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8c2VsZWN0Pjwvc2VsZWN0PicsIHJlcGxhY2VtZW50QXR0cmlidXRlcykpO1xyXG5cclxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcbiAgICBjb25zdCAkaGlkZGVuSW5wdXQgPSAkKCdbbmFtZSo9XCJGb3JtRmllbGRJc1RleHRcIl0nKTtcclxuXHJcbiAgICBpZiAoJGhpZGRlbklucHV0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICRoaWRkZW5JbnB1dC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXHJcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmFwcGVuZChgPHNtYWxsPiR7Y29udGV4dC5yZXF1aXJlZH08L3NtYWxsPmApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogSWYgYSBjb3VudHJ5IHdpdGggc3RhdGVzIGlzIHRoZSBkZWZhdWx0LCBhIHNlbGVjdCB3aWxsIGJlIHNlbnQsXHJcbiAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gc3dpdGNoIHRvIGFuIGlucHV0IGZpZWxkIGFuZCBoaWRlIHRoZSByZXF1aXJlZCBmaWVsZFxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZVN0YXRlT3B0aW9uYWwoc3RhdGVFbGVtZW50KSB7XHJcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XHJcbiAgICAgICAgcmV0W2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBpZDogYXR0cnMuaWQsXHJcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxyXG4gICAgICAgIGNsYXNzOiAnZm9ybS1pbnB1dCcsXHJcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcclxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XHJcblxyXG4gICAgY29uc3QgJG5ld0VsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcclxuXHJcbiAgICBpZiAoJG5ld0VsZW1lbnQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkbmV3RWxlbWVudCk7XHJcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgdGhlIGFycmF5IG9mIG9wdGlvbnMgZnJvbSB0aGUgcmVtb3RlIHJlcXVlc3QgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgc2VsZWN0IGJveC5cclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlc0FycmF5XHJcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKi9cclxuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFtdO1xyXG5cclxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XHJcblxyXG4gICAgaWYgKCFfLmlzRW1wdHkoJHNlbGVjdEVsZW1lbnQpKSB7XHJcbiAgICAgICAgc3RhdGVzQXJyYXkuc3RhdGVzLmZvckVhY2goKHN0YXRlT2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVzZUlkRm9yU3RhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIiR7c3RhdGVPYmouaWR9XCI+JHtzdGF0ZU9iai5uYW1lfTwvb3B0aW9uPmApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLm5hbWV9XCI+JHtzdGF0ZU9iai5sYWJlbCA/IHN0YXRlT2JqLmxhYmVsIDogc3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkc2VsZWN0RWxlbWVudC5odG1sKGNvbnRhaW5lci5qb2luKCcgJykpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtqUXVlcnl9IHN0YXRlRWxlbWVudFxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlRWxlbWVudCwgY29udGV4dCA9IHt9LCBvcHRpb25zLCBjYWxsYmFjaykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYWNrd2FyZHMgY29tcGF0aWJsZSBmb3IgdGhyZWUgcGFyYW1ldGVycyBpbnN0ZWFkIG9mIGZvdXJcclxuICAgICAqXHJcbiAgICAgKiBBdmFpbGFibGUgb3B0aW9uczpcclxuICAgICAqXHJcbiAgICAgKiB1c2VJZEZvclN0YXRlcyB7Qm9vbH0gLSBHZW5lcmF0ZXMgc3RhdGVzIGRyb3Bkb3duIHVzaW5nIGlkIGZvciB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpbmdzXHJcbiAgICAgKi9cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xyXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbiAgICB9XHJcblxyXG4gICAgJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50cnlOYW1lID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1dGlscy5hcGkuY291bnRyeS5nZXRCeU5hbWUoY291bnRyeU5hbWUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRjdXJyZW50SW5wdXQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHJlc3BvbnNlLmRhdGEuc3RhdGVzKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgbWF5IGhhdmUgYmVlbiByZXBsYWNlZCB3aXRoIGEgc2VsZWN0LCByZXNlbGVjdCBpdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdEVsZW1lbnQgPSBtYWtlU3RhdGVSZXF1aXJlZCgkY3VycmVudElucHV0LCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBhZGRPcHRpb25zKHJlc3BvbnNlLmRhdGEsICRzZWxlY3RFbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICRzZWxlY3RFbGVtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBtYWtlU3RhdGVPcHRpb25hbCgkY3VycmVudElucHV0LCBjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XHJcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcclxuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcclxuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxyXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcclxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XHJcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcclxuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xyXG5cclxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xyXG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXRpbHMiLCJDb3JuZXJzdG9uZUNhcnQiLCJkZWZhdWx0TW9kYWwiLCJNb2RhbEV2ZW50cyIsIlByb2R1Y3REZXRhaWxzIiwibm90aWZpY2F0aW9uIiwiQ2FydCIsIl9Db3JuZXJzdG9uZUNhcnQiLCJfdGhpcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0IiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMyIiwiJCIsIm9uIiwiZXZlbnQiLCJyZXNwb25zZSIsInVwZGF0ZUNvbnRlbnQiLCJyZWZyZXNoQ29udGVudCIsImNhcnRFZGl0T3B0aW9ucyIsIml0ZW1JZCIsInByb2R1Y3RJZCIsIl90aGlzMyIsIm1vZGFsIiwiJG1vZGFsIiwib3BlbiIsInNpemUiLCJQcm9taXNlIiwiYWxsIiwib3BlblByb2R1Y3RFZGl0Iiwib3BlblF1aWNrVmlldyIsInRoZW4iLCJfcmVmIiwiX3JlZiQiLCJjb250ZW50IiwiZGF0YSIsIiRjb250ZW50IiwiaHRtbCIsIiRwcm9kdWN0QXR0cmlidXRlc1dyYXBwZXIiLCJmaW5kIiwiJGZvcm0iLCJlZGl0UHJvZHVjdFF1YW50aXR5IiwiJGNhcnRDb250ZW50IiwidmFsIiwiZml4U3RlcHBlck9wdGlvbnMiLCJ0ZXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9wdGlvbnMiLCJzaG93IiwicHJlcGVuZCIsInF1b3RlX2l0ZW1faWQiLCJlZGl0UHJvZHVjdENhbGxiYWNrIiwiY2xvc2UiLCJtc2ciLCJpbmZvIiwiJGl0ZW0iLCJjbG9zZXN0IiwiYWRkQ2xhc3MiLCJvbmUiLCJyZW1vdmVDbGFzcyIsImNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJlYWNoIiwiX2kiLCJlbCIsIiRlbCIsImF0dHJJZCIsIiRvcHRpb24iLCJhdHRyIiwiY2xvbmUiLCJwcmVwZW5kVG8iLCJhcHBlbmRUbyIsIiRyZXNwb25zZSIsIiRjYXJ0VG90YWxzIiwiJGNhcnRNZXNzYWdlcyIsIiRjYXJ0QWRkaXRpb25hbENoZWNrb3V0QnRucyIsIiRjYXJ0UGFnZVRpdGxlIiwiZXJyb3IiLCJnZW5lcmljRXJyb3IiLCJyZXBsYWNlV2l0aCIsImJpbmRFdmVudHMiLCIkYWN0aXZlQ2FydEl0ZW1JZCIsImZpbHRlciIsIiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiIsInRyaWdnZXIiLCJyZXNvbHZlIiwidGVtcGxhdGUiLCJhcGkiLCJwcm9kdWN0QXR0cmlidXRlcyIsImNvbmZpZ3VyZUluQ2FydCIsImVyciIsImNsb3NlZCIsImhhbmRsZURyb3Bkb3duRXhwYW5kIiwiX3JlZjIiLCJjdXJyZW50VGFyZ2V0IiwiJGRyb3Bkb3duTWVudSIsImRyb3Bkb3duQnRuSGVpZ2h0IiwicHJldiIsIm91dGVySGVpZ2h0IiwiY3NzIiwib2ZmIiwicHJvZHVjdCIsImdldEJ5SWQiLCJkZWZhdWx0IiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJHZW5lcmF0b3IiLCJ1IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibCIsIlR5cGVFcnJvciIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX25leHQiLCJfdGhyb3ciLCJjb25zdHJ1Y3RvciIsIl9zZXRQcm90b3R5cGVPZiIsIlBhZ2VNYW5hZ2VyIiwiY2hlY2tJc0dpZnRDZXJ0VmFsaWQiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJTaGlwcGluZ0VzdGltYXRvciIsInNob3dBbGVydE1vZGFsIiwiQ2FydEl0ZW1EZXRhaWxzIiwiX1BhZ2VNYW5hZ2VyIiwiJGNhcnRQYWdlQ29udGVudCIsIiRvdmVybGF5IiwiaGlkZSIsInNldEFwcGxlUGF5U3VwcG9ydCIsIndpbmRvdyIsIkFwcGxlUGF5U2Vzc2lvbiIsImNhcnRVcGRhdGUiLCIkdGFyZ2V0Iiwib2xkUXR5IiwicGFyc2VJbnQiLCJtYXhRdHkiLCJtaW5RdHkiLCJtaW5FcnJvciIsIm1heEVycm9yIiwibmV3UXR5IiwiY2FydCIsIml0ZW1VcGRhdGUiLCJzdGF0dXMiLCJyZW1vdmUiLCJlcnJvcnMiLCJqb2luIiwiY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UiLCJwcmVWYWwiLCJOdW1iZXIiLCJpbnZhbGlkRW50cnkiLCJpc0ludGVnZXIiLCJpbnZhbGlkRW50cnlNZXNzYWdlIiwicmVwbGFjZSIsImNhcnRSZW1vdmVJdGVtIiwiaXRlbVJlbW92ZSIsIl90aGlzNCIsInByb2R1Y3RGb3JDaGFuZ2VJZCIsIm9wdGlvbkNoYW5nZUhhbmRsZXIiLCIkcHJvZHVjdE9wdGlvbnNDb250YWluZXIiLCJtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCIsImhhc0NsYXNzIiwib3BlbmVkIiwibW9kYWxGb3JtIiwib25TdWJtaXQiLCJfeCIsIl9vblN1Ym1pdCIsIl9jYWxsZWUiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwicG9zdEZvcm1EYXRhIiwiRm9ybURhdGEiLCJwcm9kdWN0RGV0YWlscyIsImJpbmRHaWZ0V3JhcHBpbmdGb3JtIiwiY2FsbGJhY2siLCIkc3VibWl0IiwiJG1lc3NhZ2VCb3giLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJyZXN1bHQiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJwcm9wIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiaG9va3MiLCJfdGhpczUiLCIkY2FydEl0ZW1zUm93cyIsInRvdGFscyIsInBhZ2VUaXRsZSIsInN0YXR1c01lc3NhZ2VzIiwiYWRkaXRpb25hbENoZWNrb3V0QnV0dG9ucyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0Q29udGVudCIsInF1YW50aXR5IiwiYmluZENhcnRFdmVudHMiLCJfdGhpczYiLCJkZWJvdW5jZVRpbWVvdXQiLCJfYmluZCIsIl9kZWJvdW5jZSIsImZvY3VzIiwib25RdHlGb2N1cyIsImNoYW5nZSIsInN0cmluZyIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwib25Db25maXJtIiwiYmluZFByb21vQ29kZUV2ZW50cyIsIl90aGlzNyIsIiRjb3Vwb25Db250YWluZXIiLCIkY291cG9uRm9ybSIsIiRjb2RlSW5wdXQiLCJjb2RlIiwiYXBwbHlDb2RlIiwiYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cyIsIl90aGlzOCIsIiRjZXJ0Q29udGFpbmVyIiwiJGNlcnRGb3JtIiwiJGNlcnRJbnB1dCIsInRvZ2dsZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJyZXNwIiwiYmluZEdpZnRXcmFwcGluZ0V2ZW50cyIsIl90aGlzOSIsImdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zIiwiJHNlbGVjdCIsImlkIiwiaW5kZXgiLCJhbGxvd01lc3NhZ2UiLCJ0b2dnbGVWaWV3cyIsIiRzaW5nbGVGb3JtIiwiJG11bHRpRm9ybSIsInNoaXBwaW5nRXJyb3JNZXNzYWdlcyIsImNvdW50cnkiLCJzaGlwcGluZ0NvdW50cnlFcnJvck1lc3NhZ2UiLCJwcm92aW5jZSIsInNoaXBwaW5nUHJvdmluY2VFcnJvck1lc3NhZ2UiLCJzaGlwcGluZ0VzdGltYXRvciIsInN0YXRlQ291bnRyeSIsIm5vZCIsIlZhbGlkYXRvcnMiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiY29sbGFwc2libGVGYWN0b3J5IiwiJGVsZW1lbnQiLCIkc3RhdGUiLCJpc0VzdGltYXRvckZvcm1PcGVuZWQiLCJpbml0Rm9ybVZhbGlkYXRpb24iLCJiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlIiwiYmluZEVzdGltYXRvckV2ZW50cyIsInNoaXBwaW5nRXN0aW1hdG9yQWxlcnQiLCJzaGlwcGluZ1ZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsInJlbW92ZUF0dHIiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJiaW5kVmFsaWRhdGlvbiIsImJpbmRTdGF0ZVZhbGlkYXRpb24iLCJiaW5kVVBTUmF0ZXMiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJjb3VudHJ5SWQiLCJpc05hTiIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0IiwidXNlSWRGb3JTdGF0ZXMiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiaXMiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwidG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlIiwidG9nZ2xlQnV0dG9uIiwiYnV0dG9uU2VsZWN0b3IiLCIkdG9nZ2xlQ29udGFpbmVyIiwiY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlIiwic2VsZWN0b3JUb0FjdGl2YXRlIiwiJGVzdGltYXRvckNvbnRhaW5lciIsIiRlc3RpbWF0b3JGb3JtIiwicGFyYW1zIiwiY291bnRyeV9pZCIsInN0YXRlX2lkIiwiY2l0eSIsInppcF9jb2RlIiwiZ2V0U2hpcHBpbmdRdW90ZXMiLCJjbGlja0V2ZW50IiwicXVvdGVJZCIsInN1Ym1pdFNoaXBwaW5nUXVvdGUiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJpc0Jyb3dzZXJJRSIsImNvbnZlcnRJbnRvQXJyYXkiLCJfUHJvZHVjdERldGFpbHNCYXNlIiwiJHNjb3BlIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJ0cmltIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJzZXRQcm9kdWN0VmFyaWFudCIsIm9wdGlvbkNoYW5nZUNhbGxiYWNrIiwiX2lzRW1wdHkiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJvcHRpb25MYWJlbCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Iiwib3B0aW9uVGl0bGUiLCJzcGxpdCIsInJlcXVpcmVkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwicHVzaCIsImlzU2F0aXNmaWVkIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwibWFwIiwieCIsImNoZWNrZWQiLCJnZXRTZWxlY3RlZE9wdGlvbkxhYmVsIiwicHJvZHVjdFZhcmlhbnRzbGlzdCIsIm1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQiLCJpbnB0IiwiZGF0YXNldCIsInByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSIsImxhYmVsIiwibGFiZWxzIiwidGl0bGUiLCJwcm9kdWN0VmFyaWFudCIsInNvcnQiLCJ2aWV3IiwicHJvZHVjdE5hbWUiLCJtYXRjaCIsImNhcmQiLCJjZXJ0IiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIm1ha2VTdGF0ZVJlcXVpcmVkIiwic3RhdGVFbGVtZW50IiwiYXR0cnMiLCJfdHJhbnNmb3JtIiwiaXRlbSIsInJldCIsIm5hbWUiLCJyZXBsYWNlbWVudEF0dHJpYnV0ZXMiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsImFwcGVuZCIsIm1ha2VTdGF0ZU9wdGlvbmFsIiwiYWRkT3B0aW9ucyIsInN0YXRlc0FycmF5IiwiJHNlbGVjdEVsZW1lbnQiLCJjb250YWluZXIiLCJwcmVmaXgiLCJzdGF0ZXMiLCJmb3JFYWNoIiwic3RhdGVPYmoiLCJjb3VudHJ5TmFtZSIsImdldEJ5TmFtZSIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwicGFyc2UiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsImtleSIsInBvcCIsInJlZHVjZSIsImFjYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9