"use strict";
(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["account"],{

/***/ "./assets/js/papathemes/eyeva/account.js"
/*!***********************************************!*\
  !*** ./assets/js/papathemes/eyeva/account.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var _theme_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/account */ "./assets/js/theme/account.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Account = /*#__PURE__*/function (_CornerstoneAccount) {
  function Account() {
    return _CornerstoneAccount.apply(this, arguments) || this;
  }
  _inheritsLoose(Account, _CornerstoneAccount);
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    _CornerstoneAccount.prototype.onReady.call(this);
    var orderId = Number($('[data-account-reorder-form] input[name=orderid]').val());
    if (orderId) this.initOrder(orderId);
  };
  _proto.initOrder = /*#__PURE__*/function () {
    var _initOrder = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(orderId) {
      var _resp$data, _resp$data2, _resp$data3;
      var resp, items;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return $.ajax({
              url: '/graphql',
              method: 'POST',
              data: JSON.stringify({
                query: "\n                    query Order($orderId: Int!) {\n                        site {\n                            order(filter: { entityId: $orderId }) {\n                                consignments {\n                                    downloads {\n                                        lineItems(first: 50) {\n                                            edges {\n                                                node {\n                                                    entityId\n                                                    productEntityId\n                                                }\n                                            }\n                                        }\n                                    }\n                                    pickups(first: 50) {\n                                        edges {\n                                            node {\n                                                lineItems(first: 50) {\n                                                    edges {\n                                                        node {\n                                                            entityId\n                                                            productEntityId\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                    shipping(first: 50) {\n                                        edges {\n                                            node {\n                                                lineItems(first: 50) {\n                                                    edges {\n                                                        node {\n                                                            entityId\n                                                            productEntityId\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                ",
                variables: {
                  orderId: orderId
                }
              }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + this.context.graphQLToken
              },
              xhrFields: {
                withCredentials: true
              }
            });
          case 1:
            resp = _context.v;
            /**
             * @type {Array<{ entityId: number, productEntityId: number }>}
             */
            items = [].concat((resp == null || (_resp$data = resp.data) == null || (_resp$data = _resp$data.site) == null || (_resp$data = _resp$data.order) == null || (_resp$data = _resp$data.consignments) == null || (_resp$data = _resp$data.downloads) == null || (_resp$data = _resp$data.lineItems) == null || (_resp$data = _resp$data.edges) == null ? void 0 : _resp$data.map(function (_ref) {
              var node = _ref.node;
              return node;
            })) || [], (resp == null || (_resp$data2 = resp.data) == null || (_resp$data2 = _resp$data2.site) == null || (_resp$data2 = _resp$data2.order) == null || (_resp$data2 = _resp$data2.consignments) == null || (_resp$data2 = _resp$data2.pickups) == null || (_resp$data2 = _resp$data2.edges) == null ? void 0 : _resp$data2.reduce(function (acc, _ref2) {
              var node = _ref2.node;
              return [].concat(acc, node.lineItems.edges.map(function (_ref3) {
                var itemNode = _ref3.node;
                return itemNode;
              }));
            }, [])) || [], (resp == null || (_resp$data3 = resp.data) == null || (_resp$data3 = _resp$data3.site) == null || (_resp$data3 = _resp$data3.order) == null || (_resp$data3 = _resp$data3.consignments) == null || (_resp$data3 = _resp$data3.shipping) == null || (_resp$data3 = _resp$data3.edges) == null ? void 0 : _resp$data3.reduce(function (acc, _ref4) {
              var node = _ref4.node;
              return [].concat(acc, node.lineItems.edges.map(function (_ref5) {
                var itemNode = _ref5.node;
                return itemNode;
              }));
            }, [])) || []);
            $('[data-order-product-link]').each(function (_i, el) {
              var $el = $(el);
              var orderProductId = Number($el.data('orderProductLink'));
              var item = items.find(function (_ref6) {
                var entityId = _ref6.entityId;
                return entityId === orderProductId;
              });
              if (item) {
                $el.attr('href', "/products.php?productId=" + item.productEntityId);
              }
            });
            $('[data-order-product-review-link]').each(function (_i, el) {
              var $el = $(el);
              var orderProductId = Number($el.data('orderProductReviewLink'));
              var item = items.find(function (_ref7) {
                var entityId = _ref7.entityId;
                return entityId === orderProductId;
              });
              if (item) {
                $el.attr('href', "/products.php?productId=" + item.productEntityId + "#write_review");
              }
            });
          case 2:
            return _context.a(2);
        }
      }, _callee, this);
    }));
    function initOrder(_x) {
      return _initOrder.apply(this, arguments);
    }
    return initOrder;
  }() // copy almost from parent class
  ;
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('[data-account-reorder-checkbox]:checked'); // eyeva edit
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        (0,_theme_global_modal__WEBPACK_IMPORTED_MODULE_1__.showAlertModal)(_this.context.selectItem);
      }
    });
  };
  return Account;
}(_theme_account__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/theme/account.js"
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Account)
/* harmony export */ });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }









var Account = /*#__PURE__*/function (_PageManager) {
  function Account(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__.createTranslationDictionary)(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }
  _inheritsLoose(Account, _PageManager);
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    var $editAccountForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-edit-account-form]');
    var $addressForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-address-form]');
    var $inboxForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-inbox-form]');
    var $accountReturnForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-return-form]');
    var $paymentMethodForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('form[data-payment-method-form]');
    var $reorderForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');
    var $bigCommerce = window.BigCommerce;

    // Injected via template
    this.passwordRequirements = this.context.passwordRequirements;

    // Instantiates wish list JS
    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);
    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);
      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }
    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }
    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);
      if (this.$state.is('input')) {
        (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.insertStateHiddenField)(this.$state);
      }
    }
    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }
    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }
    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }
    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }
    if ($bigCommerce && $bigCommerce.renderAccountPayments) {
      var _this$context = this.context,
        countries = _this$context.countries,
        paymentsUrl = _this$context.paymentsUrl,
        storeHash = _this$context.storeHash,
        storeLocale = _this$context.storeLocale,
        vaultToken = _this$context.vaultToken,
        shopperId = _this$context.shopperId,
        customerEmail = _this$context.customerEmail,
        providerId = _this$context.providerId,
        currencyCode = _this$context.currencyCode,
        paymentMethodsUrl = _this$context.paymentMethodsUrl,
        paymentProviderInitializationData = _this$context.paymentProviderInitializationData,
        themeSettings = _this$context.themeSettings;
      $bigCommerce.renderAccountPayments({
        styles: {
          inputBase: {
            color: themeSettings['input-font-color'],
            borderColor: themeSettings['input-border-color']
          },
          inputValidationError: {
            color: themeSettings['color-error'],
            borderColor: themeSettings['color-error']
          },
          inputValidationSuccess: {
            color: themeSettings['color-success'],
            borderColor: themeSettings['color-success']
          },
          submitButton: {
            color: themeSettings['button--primary-color'],
            backgroundColor: themeSettings['button--primary-backgroundColor'],
            borderColor: themeSettings['button--primary-backgroundColor'],
            '&:hover': {
              color: themeSettings['button--primary-colorHover'],
              backgroundColor: themeSettings['button--primary-backgroundColorHover'],
              borderColor: themeSettings['button--primary-backgroundColorHover']
            },
            '&:active': {
              color: themeSettings['button--primary-colorActive'],
              backgroundColor: themeSettings['button--primary-backgroundColorActive'],
              borderColor: themeSettings['button--primary-backgroundColorActive']
            },
            '&[disabled]': {
              backgroundColor: themeSettings['button--disabled-backgroundColor'],
              borderColor: themeSettings['button--disabled-borderColor'],
              color: themeSettings['button--disabled-color'],
              cursor: 'not-allowed'
            }
          },
          cancelButton: {
            color: themeSettings['button--default-color'],
            backgroundColor: themeSettings['button--default-backgroundColor'],
            borderColor: themeSettings['button--default-backgroundColor'],
            '&:hover': {
              color: themeSettings['button--default-colorHover'],
              backgroundColor: themeSettings['button--default-backgroundColorHover'],
              borderColor: themeSettings['button--default-backgroundColorHover']
            },
            '&:active': {
              color: themeSettings['button--default-colorActive'],
              backgroundColor: themeSettings['button--default-backgroundColorActive'],
              borderColor: themeSettings['button--default-backgroundColorActive']
            }
          },
          label: {
            color: themeSettings['form-label-font-color']
          },
          validationError: {
            color: themeSettings['color-error']
          },
          heading: {
            color: themeSettings['color-textHeading']
          }
        },
        storeContextData: {
          countries: countries,
          paymentsUrl: paymentsUrl,
          storeHash: storeHash,
          storeLocale: storeLocale,
          vaultToken: vaultToken,
          shopperId: shopperId,
          customerEmail: customerEmail,
          providerId: providerId,
          currencyCode: currencyCode,
          paymentMethodsUrl: paymentMethodsUrl,
          paymentProviderInitializationData: paymentProviderInitializationData
        },
        errorHandler: _global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal
      });
    }
    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }

  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */;
  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this2.context.selectItem);
      }
    });
  };
  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this3 = this;
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    addressValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }
        if ($last) {
          addressValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(addressValidator, field, _this3.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
        }
      });
    }
    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();
      if (addressValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false;

      // Iterate until we find a non-zero value in the dropdown for quantity
      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true;

          // Exit out of loop if we found at least one return
          return true;
        }
      });
      if (formSubmit) {
        return true;
      }
      (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(errorMessage);
      return event.preventDefault();
    });
  };
  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this4 = this;
    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, \"prefix\": \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.announceInputErrorMessage
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last;
    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }
      var $field = $(field);
      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }
      if ($last) {
        paymentMethodValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setStateCountryValidation(paymentMethodValidator, field, _this4.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
      }
    });

    // Use credit card number input listener to highlight credit card type
    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.creditCardType)(target.value);
      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    });

    // Set of credit card validation
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Validators.setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    });

    // Set of credit card format
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__.Formatters.setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]");

    // Billing address validation
    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault();
      // Perform final form validation
      paymentMethodValidator.performCheck();
      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {});

        // Assign country and state code
        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this4.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });
        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });
        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state;

        // Default Instrument
        data.default_instrument = !!data.default_instrument;

        // Store credit card
        (0,_common_payment_method__WEBPACK_IMPORTED_MODULE_9__.storeInstrument)(_this4.context, data, function () {
          window.location.href = _this4.context.paymentMethodsUrl;
        }, function () {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.showAlertModal)(_this4.context.generic_error);
        });
      }
    });
  };
  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: formEditSelector + " input[type=\"submit\"]",
      delay: 900
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector);

    // This only handles the custom fields, standard fields are added below
    editValidator.add(validationModel);
    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
        enterPassword = _this$validationDicti.password,
        matchPassword = _this$validationDicti.password_match;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error), true);
    }
    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;
          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }
          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }
    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();
      if (editValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.trigger('focus');
      }, 900);
    });
  };
  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      delay: 900
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();
      if (inboxValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
      setTimeout(function () {
        var earliestError = $('span.form-inlineMessage:first').prev('input');
        earliestError.trigger('focus');
      }, 900);
    });
  };
  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ },

/***/ "./assets/js/theme/common/payment-method.js"
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Formatters: () => (/* binding */ Formatters),
/* harmony export */   Validators: () => (/* binding */ Validators),
/* harmony export */   creditCardType: () => (/* binding */ creditCardType),
/* harmony export */   storeInstrument: () => (/* binding */ storeInstrument)
/* harmony export */ });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
    shopperId = _ref.shopperId,
    storeHash = _ref.storeHash,
    vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
    currency_code = _ref2.currency_code,
    credit_card_number = _ref2.credit_card_number,
    expiration = _ref2.expiration,
    name_on_card = _ref2.name_on_card,
    cvv = _ref2.cvv,
    default_instrument = _ref2.default_instrument,
    address1 = _ref2.address1,
    address2 = _ref2.address2,
    city = _ref2.city,
    postal_code = _ref2.postal_code,
    state_or_province_code = _ref2.state_or_province_code,
    country_code = _ref2.country_code,
    company = _ref2.company,
    first_name = _ref2.first_name,
    last_name = _ref2.last_name,
    email = _ref2.email,
    phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(target.value));
      });
    }
  },
  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
          which = _ref4.which;
        var refTarget = target;
        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default().card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default().expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default().cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};

/***/ },

/***/ "./assets/js/theme/common/utils/pagination-utils.js"
/*!**********************************************************!*\
  !*** ./assets/js/theme/common/utils/pagination-utils.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wishlistPaginatorHelper: () => (/* binding */ wishlistPaginatorHelper)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var changeWishlistPaginationLinks = function changeWishlistPaginationLinks(wishlistUrl) {
  for (var _len = arguments.length, paginationItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paginationItems[_key - 1] = arguments[_key];
  }
  return $.each(paginationItems, function (_, $item) {
    var paginationLink = $item.children('.pagination-link');
    if ($item.length && !paginationLink.attr('href').includes('page=')) {
      var pageNumber = paginationLink.attr('href');
      paginationLink.attr('href', wishlistUrl + "page=" + pageNumber);
    }
  });
};

/**
 * helps to withdraw differences in structures around the stencil resource pagination
 */
var wishlistPaginatorHelper = function wishlistPaginatorHelper() {
  var $paginationList = $('.pagination-list');
  if (!$paginationList.length) return;
  var $nextItem = $('.pagination-item--next', $paginationList);
  var $prevItem = $('.pagination-item--previous', $paginationList);
  var currentHref = $('[data-pagination-current-page-link]').attr('href');
  var partialPaginationUrl = currentHref.split('page=').shift();
  changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};

/***/ },

/***/ "./assets/js/theme/wishlist.js"
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WishList)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/pagination-utils */ "./assets/js/theme/common/utils/pagination-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var WishList = /*#__PURE__*/function (_PageManager) {
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _this || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  _inheritsLoose(WishList, _PageManager);
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: this.context.enterWishlistNameError
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');
    if ($('[data-pagination-wishlist]').length) {
      (0,_common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__.wishlistPaginatorHelper)();
    }
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLGdCQUFnQixDQUFDO0lBRTVDLElBQUlBLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDekMsTUFBTSxFQUFFO01BQ3hDOFYsdUZBQXVCLENBQUMsQ0FBQztJQUM3QjtJQUVBLElBQUlrQixnQkFBZ0IsQ0FBQ2hYLE1BQU0sRUFBRTtNQUN6QixJQUFJLENBQUM0Vyw2QkFBNkIsQ0FBQ0ksZ0JBQWdCLENBQUM7SUFDeEQ7SUFFQSxJQUFJLENBQUNQLHFCQUFxQixDQUFDLENBQUM7RUFDaEMsQ0FBQztFQUFBLE9BQUFKLFFBQUE7QUFBQSxFQW5FaUNqUCxxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9hY2NvdW50LmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wYXltZW50LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvcGFnaW5hdGlvbi11dGlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS93aXNobGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ybmVyc3RvbmVBY2NvdW50IGZyb20gJy4uLy4uL3RoZW1lL2FjY291bnQnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi8uLi90aGVtZS9nbG9iYWwvbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29ybmVyc3RvbmVBY2NvdW50IHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBzdXBlci5vblJlYWR5KCk7XG5cbiAgICAgICAgY29uc3Qgb3JkZXJJZCA9IE51bWJlcigkKCdbZGF0YS1hY2NvdW50LXJlb3JkZXItZm9ybV0gaW5wdXRbbmFtZT1vcmRlcmlkXScpLnZhbCgpKTtcbiAgICAgICAgaWYgKG9yZGVySWQpIHRoaXMuaW5pdE9yZGVyKG9yZGVySWQpO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXRPcmRlcihvcmRlcklkKSB7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2dyYXBocWwnLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgT3JkZXIoJG9yZGVySWQ6IEludCEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyKGZpbHRlcjogeyBlbnRpdHlJZDogJG9yZGVySWQgfSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zaWdubWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWNrdXBzKGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nKGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVySWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuY29udGV4dC5ncmFwaFFMVG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0FycmF5PHsgZW50aXR5SWQ6IG51bWJlciwgcHJvZHVjdEVudGl0eUlkOiBudW1iZXIgfT59XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgICAgICAgIC4uLnJlc3A/LmRhdGE/LnNpdGU/Lm9yZGVyPy5jb25zaWdubWVudHM/LmRvd25sb2Fkcz8ubGluZUl0ZW1zPy5lZGdlcz8ubWFwKCh7IG5vZGUgfSkgPT4gbm9kZSkgfHwgW10sXG4gICAgICAgICAgICAuLi5yZXNwPy5kYXRhPy5zaXRlPy5vcmRlcj8uY29uc2lnbm1lbnRzPy5waWNrdXBzPy5lZGdlcz8ucmVkdWNlKChhY2MsIHsgbm9kZSB9KSA9PiBbLi4uYWNjLCAuLi5ub2RlLmxpbmVJdGVtcy5lZGdlcy5tYXAoKHsgbm9kZTogaXRlbU5vZGUgfSkgPT4gaXRlbU5vZGUpXSwgW10pIHx8IFtdLFxuICAgICAgICAgICAgLi4ucmVzcD8uZGF0YT8uc2l0ZT8ub3JkZXI/LmNvbnNpZ25tZW50cz8uc2hpcHBpbmc/LmVkZ2VzPy5yZWR1Y2UoKGFjYywgeyBub2RlIH0pID0+IFsuLi5hY2MsIC4uLm5vZGUubGluZUl0ZW1zLmVkZ2VzLm1hcCgoeyBub2RlOiBpdGVtTm9kZSB9KSA9PiBpdGVtTm9kZSldLCBbXSkgfHwgW10sXG4gICAgICAgIF07XG5cbiAgICAgICAgJCgnW2RhdGEtb3JkZXItcHJvZHVjdC1saW5rXScpLmVhY2goKF9pLCBlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCBvcmRlclByb2R1Y3RJZCA9IE51bWJlcigkZWwuZGF0YSgnb3JkZXJQcm9kdWN0TGluaycpKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKCh7IGVudGl0eUlkIH0pID0+IGVudGl0eUlkID09PSBvcmRlclByb2R1Y3RJZCk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICRlbC5hdHRyKCdocmVmJywgYC9wcm9kdWN0cy5waHA/cHJvZHVjdElkPSR7aXRlbS5wcm9kdWN0RW50aXR5SWR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLXByb2R1Y3QtcmV2aWV3LWxpbmtdJykuZWFjaCgoX2ksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyUHJvZHVjdElkID0gTnVtYmVyKCRlbC5kYXRhKCdvcmRlclByb2R1Y3RSZXZpZXdMaW5rJykpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zLmZpbmQoKHsgZW50aXR5SWQgfSkgPT4gZW50aXR5SWQgPT09IG9yZGVyUHJvZHVjdElkKTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ2hyZWYnLCBgL3Byb2R1Y3RzLnBocD9wcm9kdWN0SWQ9JHtpdGVtLnByb2R1Y3RFbnRpdHlJZH0jd3JpdGVfcmV2aWV3YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNvcHkgYWxtb3N0IGZyb20gcGFyZW50IGNsYXNzXG4gICAgaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSkge1xuICAgICAgICAkcmVvcmRlckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMgPSAkKCdbZGF0YS1hY2NvdW50LXJlb3JkZXItY2hlY2tib3hdOmNoZWNrZWQnKTsgLy8gZXlldmEgZWRpdFxuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcblxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMuZWFjaCgoaW5kZXgsIHByb2R1Y3RDaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbCh0aGlzLmNvbnRleHQuc2VsZWN0SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4vd2lzaGxpc3QnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQge1xuICAgIGNsYXNzaWZ5Rm9ybSxcbiAgICBWYWxpZGF0b3JzLFxuICAgIGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCxcbiAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QsXG59IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCB7IGNyZWRpdENhcmRUeXBlLCBzdG9yZUluc3RydW1lbnQsIFZhbGlkYXRvcnMgYXMgQ0NWYWxpZGF0b3JzLCBGb3JtYXR0ZXJzIGFzIENDRm9ybWF0dGVycyB9IGZyb20gJy4vY29tbW9uL3BheW1lbnQtbWV0aG9kJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGVkaXRBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkYWRkcmVzc0Zvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRpbmJveEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkYWNjb3VudFJldHVybkZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmV0dXJuLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRwYXltZW50TWV0aG9kRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRyZW9yZGVyRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZW9yZGVyLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRpbnZvaWNlQnV0dG9uID0gJCgnW2RhdGEtcHJpbnQtaW52b2ljZV0nKTtcbiAgICAgICAgY29uc3QgJGJpZ0NvbW1lcmNlID0gd2luZG93LkJpZ0NvbW1lcmNlO1xuXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkUmVxdWlyZW1lbnRzO1xuXG4gICAgICAgIC8vIEluc3RhbnRpYXRlcyB3aXNoIGxpc3QgSlNcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICgkZWRpdEFjY291bnRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbnZvaWNlQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGludm9pY2VCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGggLyAyIC0gNDUwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLyAyIC0gMzIwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICRpbnZvaWNlQnV0dG9uLmRhdGEoJ3ByaW50SW52b2ljZScpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnb3JkZXJJbnZvaWNlJywgYHdpZHRoPTkwMCxoZWlnaHQ9NjUwLGxlZnQ9JHtsZWZ0fSx0b3A9JHt0b3B9LHNjcm9sbGJhcnM9MWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFkZHJlc3NGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbmJveEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhY2NvdW50UmV0dXJuRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXltZW50TWV0aG9kRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRyZW9yZGVyRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGJpZ0NvbW1lcmNlICYmICRiaWdDb21tZXJjZS5yZW5kZXJBY2NvdW50UGF5bWVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBjb3VudHJpZXMsXG4gICAgICAgICAgICAgICAgcGF5bWVudHNVcmwsXG4gICAgICAgICAgICAgICAgc3RvcmVIYXNoLFxuICAgICAgICAgICAgICAgIHN0b3JlTG9jYWxlLFxuICAgICAgICAgICAgICAgIHZhdWx0VG9rZW4sXG4gICAgICAgICAgICAgICAgc2hvcHBlcklkLFxuICAgICAgICAgICAgICAgIGN1c3RvbWVyRW1haWwsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJJZCxcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGUsXG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZHNVcmwsXG4gICAgICAgICAgICAgICAgcGF5bWVudFByb3ZpZGVySW5pdGlhbGl6YXRpb25EYXRhLFxuICAgICAgICAgICAgICAgIHRoZW1lU2V0dGluZ3MsXG4gICAgICAgICAgICB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgICAgICAkYmlnQ29tbWVyY2UucmVuZGVyQWNjb3VudFBheW1lbnRzKHtcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRCYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snaW5wdXQtZm9udC1jb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2lucHV0LWJvcmRlci1jb2xvciddLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbGlkYXRpb25FcnJvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLWVycm9yJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snY29sb3ItZXJyb3InXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWxpZGF0aW9uU3VjY2Vzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLXN1Y2Nlc3MnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZVNldHRpbmdzWydjb2xvci1zdWNjZXNzJ10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1jb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktYmFja2dyb3VuZENvbG9yJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1jb2xvckhvdmVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktYmFja2dyb3VuZENvbG9ySG92ZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvckhvdmVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktY29sb3JBY3RpdmUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1iYWNrZ3JvdW5kQ29sb3JBY3RpdmUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvckFjdGl2ZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICcmW2Rpc2FibGVkXSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGlzYWJsZWQtYmFja2dyb3VuZENvbG9yJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGlzYWJsZWQtYm9yZGVyQ29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kaXNhYmxlZC1jb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1jb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtYmFja2dyb3VuZENvbG9yJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kZWZhdWx0LWJhY2tncm91bmRDb2xvciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1jb2xvckhvdmVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtYmFja2dyb3VuZENvbG9ySG92ZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kZWZhdWx0LWJhY2tncm91bmRDb2xvckhvdmVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtY29sb3JBY3RpdmUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1iYWNrZ3JvdW5kQ29sb3JBY3RpdmUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kZWZhdWx0LWJhY2tncm91bmRDb2xvckFjdGl2ZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydmb3JtLWxhYmVsLWZvbnQtY29sb3InXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snY29sb3ItZXJyb3InXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLXRleHRIZWFkaW5nJ10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdG9yZUNvbnRleHREYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50cmllcyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudHNVcmwsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlSGFzaCxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVMb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIHZhdWx0VG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIHNob3BwZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJFbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlLFxuICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kc1VybCxcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudFByb3ZpZGVySW5pdGlhbGl6YXRpb25EYXRhLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyOiBzaG93QWxlcnRNb2RhbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlQWRkcmVzcygpO1xuICAgICAgICB0aGlzLmJpbmREZWxldGVQYXltZW50TWV0aG9kKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgYSBzdWJtaXQgaG9vayB0byBlbnN1cmUgdGhlIGN1c3RvbWVyIHJlY2VpdmVzIGEgY29uZmlybWF0aW9uIGRpYWxvZyBiZWZvcmUgZGVsZXRpbmcgYW4gYWRkcmVzc1xuICAgICAqL1xuICAgIGJpbmREZWxldGVBZGRyZXNzKCkge1xuICAgICAgICAkKCdbZGF0YS1kZWxldGUtYWRkcmVzc10nKS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZGVsZXRlQWRkcmVzcycpO1xuXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKSB7XG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1wYXltZW50LW1ldGhvZF0nKS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZGVsZXRlUGF5bWVudE1ldGhvZCcpO1xuXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSkge1xuICAgICAgICAkcmVvcmRlckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMgPSAkKCcuYWNjb3VudC1saXN0SXRlbSAuZm9ybS1jaGVja2JveDpjaGVja2VkJyk7XG4gICAgICAgICAgICBsZXQgc3VibWl0Rm9ybSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkcmVvcmRlckZvcm0uZmluZCgnW25hbWVePVwicmVvcmRlcml0ZW1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcy5lYWNoKChpbmRleCwgcHJvZHVjdENoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChwcm9kdWN0Q2hlY2tib3gpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgcmVvcmRlcml0ZW1bJHtwcm9kdWN0SWR9XWAsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMScsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICRyZW9yZGVyRm9ybS5hcHBlbmQoJGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXN1Ym1pdEZvcm0pIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHRoaXMuY29udGV4dC5zZWxlY3RJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0sIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJztcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoc3RhdGVTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZHJlc3NWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihhZGRyZXNzVmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkYWRkcmVzc0Zvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChhZGRyZXNzVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJGFjY291bnRSZXR1cm5Gb3JtLmRhdGEoJ2FjY291bnRSZXR1cm5Gb3JtRXJyb3InKTtcblxuICAgICAgICAkYWNjb3VudFJldHVybkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtU3VibWl0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgd2UgZmluZCBhIG5vbi16ZXJvIHZhbHVlIGluIHRoZSBkcm9wZG93biBmb3IgcXVhbnRpdHlcbiAgICAgICAgICAgICQoJ1tuYW1lXj1cInJldHVybl9xdHlcIl0nLCAkYWNjb3VudFJldHVybkZvcm0pLmVhY2goKGksIGVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkKGVsZSkudmFsKCksIDEwKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtU3VibWl0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBFeGl0IG91dCBvZiBsb29wIGlmIHdlIGZvdW5kIGF0IGxlYXN0IG9uZSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmb3JtU3VibWl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGVycm9yTWVzc2FnZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSkge1xuICAgICAgICAvLyBJbmplY3QgdmFsaWRhdGlvbnMgaW50byBmb3JtIGZpZWxkcyBiZWZvcmUgdmFsaWRhdGlvbiBydW5zXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjZmlyc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuZmlyc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjbGFzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5sYXN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvbXBhbnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvbXBhbnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjcGhvbmUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnBob25lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2FkZHJlc3MxLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5hZGRyZXNzMUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2FkZHJlc3MyLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5hZGRyZXNzMkxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjaXR5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jaXR5TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY291bnRyeS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlc2VsZWN0XCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb3VudHJ5TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJwcmVmaXhcIjogXCIke3RoaXMuY29udGV4dC5jaG9vc2VDb3VudHJ5TGFiZWx9XCIgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3N0YXRlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5zdGF0ZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bvc3RhbF9jb2RlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5wb3N0YWxDb2RlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0sIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RTZWxlY3RvciA9ICdmb3JtW2RhdGEtcGF5bWVudC1tZXRob2QtZm9ybV0nO1xuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdYCk7XG5cbiAgICAgICAgbGV0ICRsYXN0O1xuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVc2UgY3JlZGl0IGNhcmQgbnVtYmVyIGlucHV0IGxpc3RlbmVyIHRvIGhpZ2hsaWdodCBjcmVkaXQgY2FyZCB0eXBlXG4gICAgICAgIGxldCBjYXJkVHlwZTtcbiAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gKS5vbigna2V5dXAnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgY2FyZFR5cGUgPSBjcmVkaXRDYXJkVHlwZSh0YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKGNhcmRUeXBlKSB7XG4gICAgICAgICAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGltZ1thbHQ9XCIke2NhcmRUeXBlfVwiXWApLnNpYmxpbmdzKCkuY3NzKCdvcGFjaXR5JywgJy4yJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdgKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgdmFsaWRhdGlvblxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCwgdGhpcy5jb250ZXh0LmNyZWRpdENhcmROdW1iZXIpO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0RXhwaXJhdGlvblZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWAsIHRoaXMuY29udGV4dC5leHBpcmF0aW9uKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldE5hbWVPbkNhcmRWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cIm5hbWVfb25fY2FyZFwiXWAsIHRoaXMuY29udGV4dC5uYW1lT25DYXJkKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEN2dlZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3Z2XCJdYCwgdGhpcy5jb250ZXh0LmN2diwgKCkgPT4gY2FyZFR5cGUpO1xuXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCBmb3JtYXRcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldENyZWRpdENhcmROdW1iZXJGb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCk7XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRFeHBpcmF0aW9uRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gKTtcblxuICAgICAgICAvLyBCaWxsaW5nIGFkZHJlc3MgdmFsaWRhdGlvblxuICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gZmluYWwgZm9ybSB2YWxpZGF0aW9uXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gU2VyaWFsaXplIGZvcm0gZGF0YSBhbmQgcmVkdWNlIGl0IHRvIG9iamVjdFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBfLnJlZHVjZSgkcGF5bWVudE1ldGhvZEZvcm0uc2VyaWFsaXplQXJyYXkoKSwgKG9iaiwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZPYmogPSBvYmo7XG4gICAgICAgICAgICAgICAgICAgIHJlZk9ialtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZk9iajtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gY291bnRyeSBhbmQgc3RhdGUgY29kZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBfLmZpbmQodGhpcy5jb250ZXh0LmNvdW50cmllcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuY291bnRyeSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb3VudHJ5ICYmIF8uZmluZChjb3VudHJ5LnN0YXRlcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuc3RhdGUpO1xuICAgICAgICAgICAgICAgIGRhdGEuY291bnRyeV9jb2RlID0gY291bnRyeSA/IGNvdW50cnkuY29kZSA6IGRhdGEuY291bnRyeTtcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXRlX29yX3Byb3ZpbmNlX2NvZGUgPSBzdGF0ZSA/IHN0YXRlLmNvZGUgOiBkYXRhLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBJbnN0cnVtZW50XG4gICAgICAgICAgICAgICAgZGF0YS5kZWZhdWx0X2luc3RydW1lbnQgPSAhIWRhdGEuZGVmYXVsdF9pbnN0cnVtZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgY3JlZGl0IGNhcmRcbiAgICAgICAgICAgICAgICBzdG9yZUluc3RydW1lbnQodGhpcy5jb250ZXh0LCBkYXRhLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jb250ZXh0LnBheW1lbnRNZXRob2RzVXJsO1xuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwodGhpcy5jb250ZXh0LmdlbmVyaWNfZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgY29uc3QgZm9ybUVkaXRTZWxlY3RvciA9ICdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJztcbiAgICAgICAgY29uc3QgZWRpdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gLFxuICAgICAgICAgICAgZGVsYXk6IDkwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiRW1haWxBZGRyZXNzXCJdYDtcbiAgICAgICAgY29uc3QgJGVtYWlsRWxlbWVudCA9ICQoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ29uZmlybVBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ3VycmVudFBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJGN1cnJlbnRQYXNzd29yZCA9ICQoY3VycmVudFBhc3N3b3JkU2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFRoaXMgb25seSBoYW5kbGVzIHRoZSBjdXN0b20gZmllbGRzLCBzdGFuZGFyZCBmaWVsZHMgYXJlIGFkZGVkIGJlbG93XG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRlbWFpbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRFbWFpbFZhbGlkYXRpb24oZWRpdFZhbGlkYXRvciwgZW1haWxTZWxlY3RvciwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS52YWxpZF9lbWFpbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBhc3N3b3JkRWxlbWVudCAmJiAkcGFzc3dvcmQyRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBwYXNzd29yZDogZW50ZXJQYXNzd29yZCwgcGFzc3dvcmRfbWF0Y2g6IG1hdGNoUGFzc3dvcmQgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdChlbnRlclBhc3N3b3JkLCBlbnRlclBhc3N3b3JkLCBtYXRjaFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLmVycm9yKSxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY3VycmVudFBhc3N3b3JkKSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSAnJyAmJiAkcGFzc3dvcmRFbGVtZW50LnZhbCgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY3VycmVudFBhc3N3b3JkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfZmlyc3RuYW1lJ11gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5maXJzdE5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2xhc3RuYW1lJ11gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5sYXN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRlZGl0QWNjb3VudEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChlZGl0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVhcmxpZXN0RXJyb3IgPSAkKCdzcGFuLmZvcm0taW5saW5lTWVzc2FnZTpmaXJzdCcpLnByZXYoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgZWFybGllc3RFcnJvci50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgfSwgOTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSkge1xuICAgICAgICBjb25zdCBpbmJveFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICBkZWxheTogOTAwLFxuICAgICAgICB9KTtcblxuICAgICAgICBpbmJveFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHNlbGVjdFtuYW1lPVwibWVzc2FnZV9vcmRlcl9pZFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE51bWJlcih2YWwpICE9PSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck9yZGVyTnVtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFtuYW1lPVwibWVzc2FnZV9zdWJqZWN0XCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJTdWJqZWN0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSB0ZXh0YXJlYVtuYW1lPVwibWVzc2FnZV9jb250ZW50XCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJNZXNzYWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGluYm94Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaW5ib3hWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChpbmJveFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVhcmxpZXN0RXJyb3IgPSAkKCdzcGFuLmZvcm0taW5saW5lTWVzc2FnZTpmaXJzdCcpLnByZXYoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgZWFybGllc3RFcnJvci50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgfSwgOTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGNyZWRpdGNhcmRzIGZyb20gJ2NyZWRpdGNhcmRzJztcblxuLyoqXG4gKiBPbWl0IG51bGwgb3IgZW1wdHkgc3RyaW5nIHByb3BlcnRpZXMgb2Ygb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5jb25zdCBvbWl0TnVsbFN0cmluZyA9IG9iaiA9PiB7XG4gICAgY29uc3QgcmVmT2JqID0gb2JqO1xuXG4gICAgJC5lYWNoKHJlZk9iaiwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgZGVsZXRlIHJlZk9ialtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVmT2JqO1xufTtcblxuLyoqXG4gKiBHZXQgY3JlZGl0IGNhcmQgdHlwZSBmcm9tIGNyZWRpdCBjYXJkIG51bWJlclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVkaXRDYXJkVHlwZSA9IHZhbHVlID0+IGNyZWRpdGNhcmRzLmNhcmQudHlwZShjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbHVlKSwgdHJ1ZSk7XG5cbi8qKlxuICogV3JhcHBlciBmb3IgYWpheCByZXF1ZXN0IHRvIHN0b3JlIGEgbmV3IGluc3RydW1lbnQgaW4gYmlncGF5XG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGhlYWRlclxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBib2R5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkb25lIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSBzdWNjZXNzZnVsIHJlc3BvbnNlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmYWlsIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNvbnN0IHN0b3JlSW5zdHJ1bWVudCA9ICh7XG4gICAgLy8gSG9zdG5hbWUsIElkcyAmIFRva2VuXG4gICAgcGF5bWVudHNVcmwsXG4gICAgc2hvcHBlcklkLFxuICAgIHN0b3JlSGFzaCxcbiAgICB2YXVsdFRva2VuLFxufSwge1xuICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgLy8gUHJvdmlkZXIgSW5mb1xuICAgIHByb3ZpZGVyX2lkLFxuICAgIGN1cnJlbmN5X2NvZGUsXG5cbiAgICAvLyBJbnN0cnVtZW50IERldGFpbHNcbiAgICBjcmVkaXRfY2FyZF9udW1iZXIsXG4gICAgZXhwaXJhdGlvbixcbiAgICBuYW1lX29uX2NhcmQsXG4gICAgY3Z2LFxuICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcblxuICAgIC8vIEJpbGxpbmcgQWRkcmVzc1xuICAgIGFkZHJlc3MxLFxuICAgIGFkZHJlc3MyLFxuICAgIGNpdHksXG4gICAgcG9zdGFsX2NvZGUsXG4gICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcbiAgICBjb3VudHJ5X2NvZGUsXG4gICAgY29tcGFueSxcbiAgICBmaXJzdF9uYW1lLFxuICAgIGxhc3RfbmFtZSxcbiAgICBlbWFpbCxcbiAgICBwaG9uZSxcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG59LCBkb25lLCBmYWlsKSA9PiB7XG4gICAgY29uc3QgZXhwaXJ5ID0gZXhwaXJhdGlvbi5zcGxpdCgnLycpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgJHtwYXltZW50c1VybH0vc3RvcmVzLyR7c3RvcmVIYXNofS9jdXN0b21lcnMvJHtzaG9wcGVySWR9L3N0b3JlZF9pbnN0cnVtZW50c2AsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHZhdWx0VG9rZW4sXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaW5zdHJ1bWVudDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjYXJkJyxcbiAgICAgICAgICAgICAgICBjYXJkaG9sZGVyX25hbWU6IG5hbWVfb25fY2FyZCxcbiAgICAgICAgICAgICAgICBudW1iZXI6IGNyZWRpdGNhcmRzLmNhcmQucGFyc2UoY3JlZGl0X2NhcmRfbnVtYmVyKSxcbiAgICAgICAgICAgICAgICBleHBpcnlfbW9udGg6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSxcbiAgICAgICAgICAgICAgICBleHBpcnlfeWVhcjogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX3ZhbHVlOiBjdnYsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmlsbGluZ19hZGRyZXNzOiBvbWl0TnVsbFN0cmluZyh7XG4gICAgICAgICAgICAgICAgYWRkcmVzczEsXG4gICAgICAgICAgICAgICAgYWRkcmVzczIsXG4gICAgICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxuICAgICAgICAgICAgICAgIGNvdW50cnlfY29kZSxcbiAgICAgICAgICAgICAgICBjb21wYW55LFxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwcm92aWRlcl9pZCxcbiAgICAgICAgICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcbiAgICAgICAgICAgIGN1cnJlbmN5X2NvZGUsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgICAgIC5kb25lKGRvbmUpXG4gICAgICAgIC5mYWlsKGZhaWwpO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1hdHRlcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdDogZmllbGQgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IGNyZWRpdGNhcmRzLmNhcmQuZm9ybWF0KGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBleHBpcmF0aW9uIGRhdGVcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFeHBpcmF0aW9uRm9ybWF0OiBmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0LCB3aGljaCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmICh3aGljaCA9PT0gOCAmJiAvLiooXFwvKSQvLnRlc3QodGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIDUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2hpY2ggIT09IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMS05XVxcL3xbMi05XSkkL2csICcwJDEvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKDBbMS05XXwxWzAtMl0pJC9nLCAnJDEvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswLTFdKShbMy05XSkkL2csICcwJDEvJDInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkoWzAtOV17Mn0pJC9nLCAnJDEvJDInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzBdKylcXC98WzBdKyQvZywgJzAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFxkXFwvXXxeW1xcL10qJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jYXJkLmlzVmFsaWQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWwpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0RXhwaXJhdGlvblZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyeSA9IHZhbC5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiAvXigwWzEtOV18MVswLTJdKVxcLyhbMC05XXsyfSkkLy50ZXN0KHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiAhY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5pc1Bhc3QoY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLCBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBuYW1lIG9uIGNhcmRcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldE5hbWVPbkNhcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSAhIXZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjdnZcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqIEBwYXJhbSB7YW55fSBjYXJkVHlwZSBUaGUgY3JlZGl0IGNhcmQgbnVtYmVyIHR5cGVcbiAgICAgKi9cbiAgICBzZXRDdnZWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlLCBjYXJkVHlwZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiBjYXJkVHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IGNhcmRUeXBlKCkgOiBjYXJkVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jdmMuaXNWYWxpZCh2YWwsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuIiwiY29uc3QgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MgPSAod2lzaGxpc3RVcmwsIC4uLnBhZ2luYXRpb25JdGVtcykgPT4gJC5lYWNoKHBhZ2luYXRpb25JdGVtcywgKF8sICRpdGVtKSA9PiB7XG4gICAgY29uc3QgcGFnaW5hdGlvbkxpbmsgPSAkaXRlbS5jaGlsZHJlbignLnBhZ2luYXRpb24tbGluaycpO1xuXG4gICAgaWYgKCRpdGVtLmxlbmd0aCAmJiAhcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicpLmluY2x1ZGVzKCdwYWdlPScpKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJyk7XG4gICAgICAgIHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnLCBgJHt3aXNobGlzdFVybH1wYWdlPSR7cGFnZU51bWJlcn1gKTtcbiAgICB9XG59KTtcblxuLyoqXG4gKiBoZWxwcyB0byB3aXRoZHJhdyBkaWZmZXJlbmNlcyBpbiBzdHJ1Y3R1cmVzIGFyb3VuZCB0aGUgc3RlbmNpbCByZXNvdXJjZSBwYWdpbmF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB3aXNobGlzdFBhZ2luYXRvckhlbHBlciA9ICgpID0+IHtcbiAgICBjb25zdCAkcGFnaW5hdGlvbkxpc3QgPSAkKCcucGFnaW5hdGlvbi1saXN0Jyk7XG5cbiAgICBpZiAoISRwYWdpbmF0aW9uTGlzdC5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0ICRuZXh0SXRlbSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQnLCAkcGFnaW5hdGlvbkxpc3QpO1xuICAgIGNvbnN0ICRwcmV2SXRlbSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzJywgJHBhZ2luYXRpb25MaXN0KTtcbiAgICBjb25zdCBjdXJyZW50SHJlZiA9ICQoJ1tkYXRhLXBhZ2luYXRpb24tY3VycmVudC1wYWdlLWxpbmtdJykuYXR0cignaHJlZicpO1xuICAgIGNvbnN0IHBhcnRpYWxQYWdpbmF0aW9uVXJsID0gY3VycmVudEhyZWYuc3BsaXQoJ3BhZ2U9Jykuc2hpZnQoKTtcblxuICAgIGNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzKHBhcnRpYWxQYWdpbmF0aW9uVXJsLCAkcHJldkl0ZW0sICRuZXh0SXRlbSk7XG59O1xuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHsgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIgfSBmcm9tICcuL2NvbW1vbi91dGlscy9wYWdpbmF0aW9uLXV0aWxzJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lzaExpc3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2FjY291bnQvYWRkLXdpc2hsaXN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29uZmlybSBib3ggYmVmb3JlIGRlbGV0aW5nIGFsbCB3aXNoIGxpc3RzXG4gICAgICovXG4gICAgd2lzaGxpc3REZWxldGVDb25maXJtKCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXdpc2hsaXN0LWRlbGV0ZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybSh0aGlzLmNvbnRleHQud2lzaGxpc3REZWxldGUpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNobGlzdEZvcm0pIHtcbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbbmFtZT1cIndpc2hsaXN0bmFtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlcldpc2hsaXN0TmFtZUVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGFkZFdpc2hsaXN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCAkYWRkV2lzaExpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nKTtcblxuICAgICAgICBpZiAoJCgnW2RhdGEtcGFnaW5hdGlvbi13aXNobGlzdF0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFkZFdpc2hMaXN0Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hMaXN0Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndpc2hsaXN0RGVsZXRlQ29uZmlybSgpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9pbmhlcml0c0xvb3NlIiwiY29uc3RydWN0b3IiLCJfc2V0UHJvdG90eXBlT2YiLCJDb3JuZXJzdG9uZUFjY291bnQiLCJzaG93QWxlcnRNb2RhbCIsIkFjY291bnQiLCJfQ29ybmVyc3RvbmVBY2NvdW50IiwiX3Byb3RvIiwib25SZWFkeSIsIm9yZGVySWQiLCJOdW1iZXIiLCIkIiwidmFsIiwiaW5pdE9yZGVyIiwiX2luaXRPcmRlciIsIl9jYWxsZWUiLCJfcmVzcCRkYXRhIiwiX3Jlc3AkZGF0YTIiLCJfcmVzcCRkYXRhMyIsInJlc3AiLCJpdGVtcyIsIl9jb250ZXh0IiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvbnRleHQiLCJncmFwaFFMVG9rZW4iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb25jYXQiLCJzaXRlIiwib3JkZXIiLCJjb25zaWdubWVudHMiLCJkb3dubG9hZHMiLCJsaW5lSXRlbXMiLCJlZGdlcyIsIm1hcCIsIl9yZWYiLCJub2RlIiwicGlja3VwcyIsInJlZHVjZSIsImFjYyIsIl9yZWYyIiwiX3JlZjMiLCJpdGVtTm9kZSIsInNoaXBwaW5nIiwiX3JlZjQiLCJfcmVmNSIsImVhY2giLCJfaSIsImVsIiwiJGVsIiwib3JkZXJQcm9kdWN0SWQiLCJpdGVtIiwiZmluZCIsIl9yZWY2IiwiZW50aXR5SWQiLCJhdHRyIiwicHJvZHVjdEVudGl0eUlkIiwiX3JlZjciLCJfeCIsImluaXRSZW9yZGVyRm9ybSIsIiRyZW9yZGVyRm9ybSIsIl90aGlzIiwib24iLCJldmVudCIsIiRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMiLCJzdWJtaXRGb3JtIiwicmVtb3ZlIiwiaW5kZXgiLCJwcm9kdWN0Q2hlY2tib3giLCJwcm9kdWN0SWQiLCIkaW5wdXQiLCJ0eXBlIiwibmFtZSIsImFwcGVuZCIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0SXRlbSIsImRlZmF1bHQiLCJQYWdlTWFuYWdlciIsIm5vZCIsIldpc2hsaXN0IiwidmFsaWRhdGlvbiIsInN0YXRlQ291bnRyeSIsImNsYXNzaWZ5Rm9ybSIsIlZhbGlkYXRvcnMiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsImNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImNyZWRpdENhcmRUeXBlIiwic3RvcmVJbnN0cnVtZW50IiwiQ0NWYWxpZGF0b3JzIiwiRm9ybWF0dGVycyIsIkNDRm9ybWF0dGVycyIsIl9QYWdlTWFuYWdlciIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiJHN0YXRlIiwiJGJvZHkiLCIkZWRpdEFjY291bnRGb3JtIiwiJGFkZHJlc3NGb3JtIiwiJGluYm94Rm9ybSIsIiRhY2NvdW50UmV0dXJuRm9ybSIsIiRwYXltZW50TWV0aG9kRm9ybSIsIiRpbnZvaWNlQnV0dG9uIiwiJGJpZ0NvbW1lcmNlIiwid2luZG93IiwiQmlnQ29tbWVyY2UiLCJwYXNzd29yZFJlcXVpcmVtZW50cyIsImxvYWQiLCJyZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbiIsImlzIiwibGVmdCIsInNjcmVlbiIsImF2YWlsV2lkdGgiLCJ0b3AiLCJhdmFpbEhlaWdodCIsIm9wZW4iLCJpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uIiwicmVnaXN0ZXJJbmJveFZhbGlkYXRpb24iLCJpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uIiwiaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbiIsInJlbmRlckFjY291bnRQYXltZW50cyIsIl90aGlzJGNvbnRleHQiLCJjb3VudHJpZXMiLCJwYXltZW50c1VybCIsInN0b3JlSGFzaCIsInN0b3JlTG9jYWxlIiwidmF1bHRUb2tlbiIsInNob3BwZXJJZCIsImN1c3RvbWVyRW1haWwiLCJwcm92aWRlcklkIiwiY3VycmVuY3lDb2RlIiwicGF5bWVudE1ldGhvZHNVcmwiLCJwYXltZW50UHJvdmlkZXJJbml0aWFsaXphdGlvbkRhdGEiLCJ0aGVtZVNldHRpbmdzIiwic3R5bGVzIiwiaW5wdXRCYXNlIiwiY29sb3IiLCJib3JkZXJDb2xvciIsImlucHV0VmFsaWRhdGlvbkVycm9yIiwiaW5wdXRWYWxpZGF0aW9uU3VjY2VzcyIsInN1Ym1pdEJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsImNhbmNlbEJ1dHRvbiIsImxhYmVsIiwidmFsaWRhdGlvbkVycm9yIiwiaGVhZGluZyIsInN0b3JlQ29udGV4dERhdGEiLCJlcnJvckhhbmRsZXIiLCJiaW5kRGVsZXRlQWRkcmVzcyIsImJpbmREZWxldGVQYXltZW50TWV0aG9kIiwibWVzc2FnZSIsImN1cnJlbnRUYXJnZXQiLCJjb25maXJtIiwiX3RoaXMyIiwiX3RoaXMzIiwidmFsaWRhdGlvbk1vZGVsIiwic3RhdGVTZWxlY3RvciIsIiRzdGF0ZUVsZW1lbnQiLCJhZGRyZXNzVmFsaWRhdG9yIiwic3VibWl0IiwidGFwIiwiYWRkIiwiJGxhc3QiLCJlcnIiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImZpZWxkX25vdF9ibGFuayIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJlcnJvck1lc3NhZ2UiLCJmb3JtU3VibWl0IiwiZWxlIiwicGFyc2VJbnQiLCJfdGhpczQiLCJmaXJzdE5hbWVMYWJlbCIsImxhc3ROYW1lTGFiZWwiLCJjb21wYW55TGFiZWwiLCJwaG9uZUxhYmVsIiwiYWRkcmVzczFMYWJlbCIsImFkZHJlc3MyTGFiZWwiLCJjaXR5TGFiZWwiLCJjb3VudHJ5TGFiZWwiLCJjaG9vc2VDb3VudHJ5TGFiZWwiLCJzdGF0ZUxhYmVsIiwicG9zdGFsQ29kZUxhYmVsIiwicGF5bWVudE1ldGhvZFNlbGVjdG9yIiwicGF5bWVudE1ldGhvZFZhbGlkYXRvciIsImNhcmRUeXBlIiwidGFyZ2V0Iiwic2libGluZ3MiLCJjc3MiLCJzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbiIsImNyZWRpdENhcmROdW1iZXIiLCJzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbiIsImV4cGlyYXRpb24iLCJzZXROYW1lT25DYXJkVmFsaWRhdGlvbiIsIm5hbWVPbkNhcmQiLCJzZXRDdnZWYWxpZGF0aW9uIiwiY3Z2Iiwic2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdCIsInNldEV4cGlyYXRpb25Gb3JtYXQiLCJfcmVkdWNlIiwic2VyaWFsaXplQXJyYXkiLCJvYmoiLCJyZWZPYmoiLCJjb3VudHJ5IiwiX2ZpbmQiLCJzdGF0ZSIsInN0YXRlcyIsImNvdW50cnlfY29kZSIsImNvZGUiLCJzdGF0ZV9vcl9wcm92aW5jZV9jb2RlIiwiZGVmYXVsdF9pbnN0cnVtZW50IiwibG9jYXRpb24iLCJocmVmIiwiZ2VuZXJpY19lcnJvciIsImZvcm1FZGl0U2VsZWN0b3IiLCJlZGl0VmFsaWRhdG9yIiwiZGVsYXkiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsInBhc3N3b3JkU2VsZWN0b3IiLCIkcGFzc3dvcmRFbGVtZW50IiwicGFzc3dvcmQyU2VsZWN0b3IiLCIkcGFzc3dvcmQyRWxlbWVudCIsImN1cnJlbnRQYXNzd29yZFNlbGVjdG9yIiwiJGN1cnJlbnRQYXNzd29yZCIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkX2VtYWlsIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwiZW50ZXJQYXNzd29yZCIsInBhc3N3b3JkIiwibWF0Y2hQYXNzd29yZCIsInBhc3N3b3JkX21hdGNoIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwiZXJyb3IiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJyZXN1bHQiLCJjdXJyZW50UGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldFRpbWVvdXQiLCJlYXJsaWVzdEVycm9yIiwicHJldiIsInRyaWdnZXIiLCJpbmJveFZhbGlkYXRvciIsImVudGVyT3JkZXJOdW0iLCJlbnRlclN1YmplY3QiLCJlbnRlck1lc3NhZ2UiLCJjcmVkaXRjYXJkcyIsIm9taXROdWxsU3RyaW5nIiwia2V5IiwiY2FyZCIsInBhcnNlIiwiZmFpbCIsInByb3ZpZGVyX2lkIiwiY3VycmVuY3lfY29kZSIsImNyZWRpdF9jYXJkX251bWJlciIsIm5hbWVfb25fY2FyZCIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwicG9zdGFsX2NvZGUiLCJjb21wYW55IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmUiLCJleHBpcnkiLCJzcGxpdCIsImRhdGFUeXBlIiwiY2FjaGUiLCJBY2NlcHQiLCJpbnN0cnVtZW50IiwiY2FyZGhvbGRlcl9uYW1lIiwibnVtYmVyIiwiZXhwaXJ5X21vbnRoIiwibW9udGgiLCJleHBpcnlfeWVhciIsInllYXIiLCJ2ZXJpZmljYXRpb25fdmFsdWUiLCJiaWxsaW5nX2FkZHJlc3MiLCJyZWZUYXJnZXQiLCJmb3JtYXQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwiY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MiLCJ3aXNobGlzdFVybCIsIl9sZW4iLCJwYWdpbmF0aW9uSXRlbXMiLCJBcnJheSIsIl9rZXkiLCJfIiwiJGl0ZW0iLCJwYWdpbmF0aW9uTGluayIsImNoaWxkcmVuIiwiaW5jbHVkZXMiLCJwYWdlTnVtYmVyIiwid2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIiLCIkcGFnaW5hdGlvbkxpc3QiLCIkbmV4dEl0ZW0iLCIkcHJldkl0ZW0iLCJjdXJyZW50SHJlZiIsInBhcnRpYWxQYWdpbmF0aW9uVXJsIiwic2hpZnQiLCJXaXNoTGlzdCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJ3aXNobGlzdERlbGV0ZUNvbmZpcm0iLCJjb25maXJtZWQiLCJ3aXNobGlzdERlbGV0ZSIsInJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uIiwiJGFkZFdpc2hsaXN0Rm9ybSIsImFkZFdpc2hsaXN0VmFsaWRhdG9yIiwiZW50ZXJXaXNobGlzdE5hbWVFcnJvciIsIiRhZGRXaXNoTGlzdEZvcm0iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==