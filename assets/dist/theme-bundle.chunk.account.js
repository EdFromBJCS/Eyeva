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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLGdCQUFnQixDQUFDO0lBRTVDLElBQUlBLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDekMsTUFBTSxFQUFFO01BQ3hDOFYsdUZBQXVCLENBQUMsQ0FBQztJQUM3QjtJQUVBLElBQUlrQixnQkFBZ0IsQ0FBQ2hYLE1BQU0sRUFBRTtNQUN6QixJQUFJLENBQUM0Vyw2QkFBNkIsQ0FBQ0ksZ0JBQWdCLENBQUM7SUFDeEQ7SUFFQSxJQUFJLENBQUNQLHFCQUFxQixDQUFDLENBQUM7RUFDaEMsQ0FBQztFQUFBLE9BQUFKLFFBQUE7QUFBQSxFQW5FaUNqUCxxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvZXlldmEvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9hY2NvdW50LmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wYXltZW50LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvcGFnaW5hdGlvbi11dGlscy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL2Fzc2V0cy9qcy90aGVtZS93aXNobGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ybmVyc3RvbmVBY2NvdW50IGZyb20gJy4uLy4uL3RoZW1lL2FjY291bnQnO1xyXG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uLy4uL3RoZW1lL2dsb2JhbC9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29ybmVyc3RvbmVBY2NvdW50IHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgc3VwZXIub25SZWFkeSgpO1xyXG5cclxuICAgICAgICBjb25zdCBvcmRlcklkID0gTnVtYmVyKCQoJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXSBpbnB1dFtuYW1lPW9yZGVyaWRdJykudmFsKCkpO1xyXG4gICAgICAgIGlmIChvcmRlcklkKSB0aGlzLmluaXRPcmRlcihvcmRlcklkKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0T3JkZXIob3JkZXJJZCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5IE9yZGVyKCRvcmRlcklkOiBJbnQhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIoZmlsdGVyOiB7IGVudGl0eUlkOiAkb3JkZXJJZCB9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc2lnbm1lbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtcyhmaXJzdDogNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RFbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY2t1cHMoZmlyc3Q6IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtcyhmaXJzdDogNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nKGZpcnN0OiA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbXMoZmlyc3Q6IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RFbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcklkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5jb250ZXh0LmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge0FycmF5PHsgZW50aXR5SWQ6IG51bWJlciwgcHJvZHVjdEVudGl0eUlkOiBudW1iZXIgfT59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIC4uLnJlc3A/LmRhdGE/LnNpdGU/Lm9yZGVyPy5jb25zaWdubWVudHM/LmRvd25sb2Fkcz8ubGluZUl0ZW1zPy5lZGdlcz8ubWFwKCh7IG5vZGUgfSkgPT4gbm9kZSkgfHwgW10sXHJcbiAgICAgICAgICAgIC4uLnJlc3A/LmRhdGE/LnNpdGU/Lm9yZGVyPy5jb25zaWdubWVudHM/LnBpY2t1cHM/LmVkZ2VzPy5yZWR1Y2UoKGFjYywgeyBub2RlIH0pID0+IFsuLi5hY2MsIC4uLm5vZGUubGluZUl0ZW1zLmVkZ2VzLm1hcCgoeyBub2RlOiBpdGVtTm9kZSB9KSA9PiBpdGVtTm9kZSldLCBbXSkgfHwgW10sXHJcbiAgICAgICAgICAgIC4uLnJlc3A/LmRhdGE/LnNpdGU/Lm9yZGVyPy5jb25zaWdubWVudHM/LnNoaXBwaW5nPy5lZGdlcz8ucmVkdWNlKChhY2MsIHsgbm9kZSB9KSA9PiBbLi4uYWNjLCAuLi5ub2RlLmxpbmVJdGVtcy5lZGdlcy5tYXAoKHsgbm9kZTogaXRlbU5vZGUgfSkgPT4gaXRlbU5vZGUpXSwgW10pIHx8IFtdLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLXByb2R1Y3QtbGlua10nKS5lYWNoKChfaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyUHJvZHVjdElkID0gTnVtYmVyKCRlbC5kYXRhKCdvcmRlclByb2R1Y3RMaW5rJykpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmluZCgoeyBlbnRpdHlJZCB9KSA9PiBlbnRpdHlJZCA9PT0gb3JkZXJQcm9kdWN0SWQpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgJGVsLmF0dHIoJ2hyZWYnLCBgL3Byb2R1Y3RzLnBocD9wcm9kdWN0SWQ9JHtpdGVtLnByb2R1Y3RFbnRpdHlJZH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1vcmRlci1wcm9kdWN0LXJldmlldy1saW5rXScpLmVhY2goKF9pLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcclxuICAgICAgICAgICAgY29uc3Qgb3JkZXJQcm9kdWN0SWQgPSBOdW1iZXIoJGVsLmRhdGEoJ29yZGVyUHJvZHVjdFJldmlld0xpbmsnKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKCh7IGVudGl0eUlkIH0pID0+IGVudGl0eUlkID09PSBvcmRlclByb2R1Y3RJZCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAkZWwuYXR0cignaHJlZicsIGAvcHJvZHVjdHMucGhwP3Byb2R1Y3RJZD0ke2l0ZW0ucHJvZHVjdEVudGl0eUlkfSN3cml0ZV9yZXZpZXdgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvcHkgYWxtb3N0IGZyb20gcGFyZW50IGNsYXNzXHJcbiAgICBpbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKSB7XHJcbiAgICAgICAgJHJlb3JkZXJGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMgPSAkKCdbZGF0YS1hY2NvdW50LXJlb3JkZXItY2hlY2tib3hdOmNoZWNrZWQnKTsgLy8gZXlldmEgZWRpdFxyXG4gICAgICAgICAgICBsZXQgc3VibWl0Rm9ybSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzLmVhY2goKGluZGV4LCBwcm9kdWN0Q2hlY2tib3gpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwodGhpcy5jb250ZXh0LnNlbGVjdEl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi93aXNobGlzdCc7XHJcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4vY29tbW9uL2Zvcm0tdmFsaWRhdGlvbic7XHJcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XHJcbmltcG9ydCB7XHJcbiAgICBjbGFzc2lmeUZvcm0sXHJcbiAgICBWYWxpZGF0b3JzLFxyXG4gICAgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQsXHJcbiAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QsXHJcbn0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XHJcbmltcG9ydCB7IGNyZWRpdENhcmRUeXBlLCBzdG9yZUluc3RydW1lbnQsIFZhbGlkYXRvcnMgYXMgQ0NWYWxpZGF0b3JzLCBGb3JtYXR0ZXJzIGFzIENDRm9ybWF0dGVycyB9IGZyb20gJy4vY29tbW9uL3BheW1lbnQtbWV0aG9kJztcclxuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcclxuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgY29uc3QgJGVkaXRBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRhZGRyZXNzRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkaW5ib3hGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtaW5ib3gtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkYWNjb3VudFJldHVybkZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmV0dXJuLWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJHBheW1lbnRNZXRob2RGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtcGF5bWVudC1tZXRob2QtZm9ybV0nKTtcclxuICAgICAgICBjb25zdCAkcmVvcmRlckZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXScpO1xyXG4gICAgICAgIGNvbnN0ICRpbnZvaWNlQnV0dG9uID0gJCgnW2RhdGEtcHJpbnQtaW52b2ljZV0nKTtcclxuICAgICAgICBjb25zdCAkYmlnQ29tbWVyY2UgPSB3aW5kb3cuQmlnQ29tbWVyY2U7XHJcblxyXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSB0ZW1wbGF0ZVxyXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XHJcblxyXG4gICAgICAgIC8vIEluc3RhbnRpYXRlcyB3aXNoIGxpc3QgSlNcclxuICAgICAgICBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7XHJcblxyXG4gICAgICAgIGlmICgkZWRpdEFjY291bnRGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcclxuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGludm9pY2VCdXR0b24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICRpbnZvaWNlQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGggLyAyIC0gNDUwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCAvIDIgLSAzMjA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSAkaW52b2ljZUJ1dHRvbi5kYXRhKCdwcmludEludm9pY2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdvcmRlckludm9pY2UnLCBgd2lkdGg9OTAwLGhlaWdodD02NTAsbGVmdD0ke2xlZnR9LHRvcD0ke3RvcH0sc2Nyb2xsYmFycz0xYCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRhZGRyZXNzRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcclxuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGluYm94Rm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkYWNjb3VudFJldHVybkZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRwYXltZW50TWV0aG9kRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJHJlb3JkZXJGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRiaWdDb21tZXJjZSAmJiAkYmlnQ29tbWVyY2UucmVuZGVyQWNjb3VudFBheW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIGNvdW50cmllcyxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRzVXJsLFxyXG4gICAgICAgICAgICAgICAgc3RvcmVIYXNoLFxyXG4gICAgICAgICAgICAgICAgc3RvcmVMb2NhbGUsXHJcbiAgICAgICAgICAgICAgICB2YXVsdFRva2VuLFxyXG4gICAgICAgICAgICAgICAgc2hvcHBlcklkLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJFbWFpbCxcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVySWQsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGUsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kc1VybCxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRQcm92aWRlckluaXRpYWxpemF0aW9uRGF0YSxcclxuICAgICAgICAgICAgICAgIHRoZW1lU2V0dGluZ3MsXHJcbiAgICAgICAgICAgIH0gPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgICAgICAgICAkYmlnQ29tbWVyY2UucmVuZGVyQWNjb3VudFBheW1lbnRzKHtcclxuICAgICAgICAgICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0QmFzZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snaW5wdXQtZm9udC1jb2xvciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snaW5wdXQtYm9yZGVyLWNvbG9yJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbGlkYXRpb25FcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snY29sb3ItZXJyb3InXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLWVycm9yJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbGlkYXRpb25TdWNjZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydjb2xvci1zdWNjZXNzJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZVNldHRpbmdzWydjb2xvci1zdWNjZXNzJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1jb2xvciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1iYWNrZ3JvdW5kQ29sb3InXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1iYWNrZ3JvdW5kQ29sb3InXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWNvbG9ySG92ZXInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvckhvdmVyJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvckhvdmVyJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcmOmFjdGl2ZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLXByaW1hcnktY29sb3JBY3RpdmUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1wcmltYXJ5LWJhY2tncm91bmRDb2xvckFjdGl2ZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tcHJpbWFyeS1iYWNrZ3JvdW5kQ29sb3JBY3RpdmUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyZbZGlzYWJsZWRdJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRpc2FibGVkLWJhY2tncm91bmRDb2xvciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGlzYWJsZWQtYm9yZGVyQ29sb3InXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRpc2FibGVkLWNvbG9yJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1jb2xvciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1iYWNrZ3JvdW5kQ29sb3InXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1iYWNrZ3JvdW5kQ29sb3InXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kZWZhdWx0LWNvbG9ySG92ZXInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kZWZhdWx0LWJhY2tncm91bmRDb2xvckhvdmVyJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kZWZhdWx0LWJhY2tncm91bmRDb2xvckhvdmVyJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcmOmFjdGl2ZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydidXR0b24tLWRlZmF1bHQtY29sb3JBY3RpdmUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWVTZXR0aW5nc1snYnV0dG9uLS1kZWZhdWx0LWJhY2tncm91bmRDb2xvckFjdGl2ZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lU2V0dGluZ3NbJ2J1dHRvbi0tZGVmYXVsdC1iYWNrZ3JvdW5kQ29sb3JBY3RpdmUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZVNldHRpbmdzWydmb3JtLWxhYmVsLWZvbnQtY29sb3InXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWVTZXR0aW5nc1snY29sb3ItZXJyb3InXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lU2V0dGluZ3NbJ2NvbG9yLXRleHRIZWFkaW5nJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdG9yZUNvbnRleHREYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyaWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRzVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlSGFzaCxcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZUxvY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICB2YXVsdFRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lckVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RzVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRQcm92aWRlckluaXRpYWxpemF0aW9uRGF0YSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXI6IHNob3dBbGVydE1vZGFsLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZUFkZHJlc3MoKTtcclxuICAgICAgICB0aGlzLmJpbmREZWxldGVQYXltZW50TWV0aG9kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCaW5kcyBhIHN1Ym1pdCBob29rIHRvIGVuc3VyZSB0aGUgY3VzdG9tZXIgcmVjZWl2ZXMgYSBjb25maXJtYXRpb24gZGlhbG9nIGJlZm9yZSBkZWxldGluZyBhbiBhZGRyZXNzXHJcbiAgICAgKi9cclxuICAgIGJpbmREZWxldGVBZGRyZXNzKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1hZGRyZXNzXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZUFkZHJlc3MnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpIHtcclxuICAgICAgICAkKCdbZGF0YS1kZWxldGUtcGF5bWVudC1tZXRob2RdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZGVsZXRlUGF5bWVudE1ldGhvZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pIHtcclxuICAgICAgICAkcmVvcmRlckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyA9ICQoJy5hY2NvdW50LWxpc3RJdGVtIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRyZW9yZGVyRm9ybS5maW5kKCdbbmFtZV49XCJyZW9yZGVyaXRlbVwiXScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcy5lYWNoKChpbmRleCwgcHJvZHVjdENoZWNrYm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKHByb2R1Y3RDaGVja2JveCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGByZW9yZGVyaXRlbVske3Byb2R1Y3RJZH1dYCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmFwcGVuZCgkaW5wdXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghc3VibWl0Rm9ybSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHRoaXMuY29udGV4dC5zZWxlY3RJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0sIHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nO1xyXG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKHN0YXRlU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgJGxhc3Q7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXHJcbiAgICAgICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGFkZHJlc3NWYWxpZGF0b3IsIGZpZWxkLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmZpZWxkX25vdF9ibGFuayk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGFkZHJlc3NGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICRhY2NvdW50UmV0dXJuRm9ybS5kYXRhKCdhY2NvdW50UmV0dXJuRm9ybUVycm9yJyk7XHJcblxyXG4gICAgICAgICRhY2NvdW50UmV0dXJuRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZm9ybVN1Ym1pdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCB3ZSBmaW5kIGEgbm9uLXplcm8gdmFsdWUgaW4gdGhlIGRyb3Bkb3duIGZvciBxdWFudGl0eVxyXG4gICAgICAgICAgICAkKCdbbmFtZV49XCJyZXR1cm5fcXR5XCJdJywgJGFjY291bnRSZXR1cm5Gb3JtKS5lYWNoKChpLCBlbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkKGVsZSkudmFsKCksIDEwKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TdWJtaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBFeGl0IG91dCBvZiBsb29wIGlmIHdlIGZvdW5kIGF0IGxlYXN0IG9uZSByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZm9ybVN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGVycm9yTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSkge1xyXG4gICAgICAgIC8vIEluamVjdCB2YWxpZGF0aW9ucyBpbnRvIGZvcm0gZmllbGRzIGJlZm9yZSB2YWxpZGF0aW9uIHJ1bnNcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2ZpcnN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmZpcnN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjbGFzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5sYXN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY29tcGFueS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY29tcGFueUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bob25lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5waG9uZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcclxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2FkZHJlc3MxLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5hZGRyZXNzMUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczIuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MyTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY2l0eS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY2l0eUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY291bnRyeS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlc2VsZWN0XCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb3VudHJ5TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJwcmVmaXhcIjogXCIke3RoaXMuY29udGV4dC5jaG9vc2VDb3VudHJ5TGFiZWx9XCIgfWApO1xyXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjc3RhdGUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnN0YXRlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwb3N0YWxfY29kZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucG9zdGFsQ29kZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xyXG5cclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSwgdGhpcy5jb250ZXh0KTtcclxuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kU2VsZWN0b3IgPSAnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJztcclxuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kVmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl1gKTtcclxuXHJcbiAgICAgICAgbGV0ICRsYXN0O1xyXG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcclxuICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XHJcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGZpZWxkLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmZpZWxkX25vdF9ibGFuayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVzZSBjcmVkaXQgY2FyZCBudW1iZXIgaW5wdXQgbGlzdGVuZXIgdG8gaGlnaGxpZ2h0IGNyZWRpdCBjYXJkIHR5cGVcclxuICAgICAgICBsZXQgY2FyZFR5cGU7XHJcbiAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gKS5vbigna2V5dXAnLCAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgICAgICBjYXJkVHlwZSA9IGNyZWRpdENhcmRUeXBlKHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjYXJkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGltZ1thbHQ9XCIke2NhcmRUeXBlfVwiXWApLnNpYmxpbmdzKCkuY3NzKCdvcGFjaXR5JywgJy4yJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nYCkuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgdmFsaWRhdGlvblxyXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gLCB0aGlzLmNvbnRleHQuY3JlZGl0Q2FyZE51bWJlcik7XHJcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEV4cGlyYXRpb25WYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gLCB0aGlzLmNvbnRleHQuZXhwaXJhdGlvbik7XHJcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldE5hbWVPbkNhcmRWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cIm5hbWVfb25fY2FyZFwiXWAsIHRoaXMuY29udGV4dC5uYW1lT25DYXJkKTtcclxuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3Z2VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjdnZcIl1gLCB0aGlzLmNvbnRleHQuY3Z2LCAoKSA9PiBjYXJkVHlwZSk7XHJcblxyXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCBmb3JtYXRcclxuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gKTtcclxuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0RXhwaXJhdGlvbkZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCk7XHJcblxyXG4gICAgICAgIC8vIEJpbGxpbmcgYWRkcmVzcyB2YWxpZGF0aW9uXHJcbiAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcclxuXHJcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIFBlcmZvcm0gZmluYWwgZm9ybSB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU2VyaWFsaXplIGZvcm0gZGF0YSBhbmQgcmVkdWNlIGl0IHRvIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IF8ucmVkdWNlKCRwYXltZW50TWV0aG9kRm9ybS5zZXJpYWxpemVBcnJheSgpLCAob2JqLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmT2JqID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZk9ialtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmT2JqO1xyXG4gICAgICAgICAgICAgICAgfSwge30pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBjb3VudHJ5IGFuZCBzdGF0ZSBjb2RlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gXy5maW5kKHRoaXMuY29udGV4dC5jb3VudHJpZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLmNvdW50cnkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBjb3VudHJ5ICYmIF8uZmluZChjb3VudHJ5LnN0YXRlcywgKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGRhdGEuc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5X2NvZGUgPSBjb3VudHJ5ID8gY291bnRyeS5jb2RlIDogZGF0YS5jb3VudHJ5O1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zdGF0ZV9vcl9wcm92aW5jZV9jb2RlID0gc3RhdGUgPyBzdGF0ZS5jb2RlIDogZGF0YS5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEluc3RydW1lbnRcclxuICAgICAgICAgICAgICAgIGRhdGEuZGVmYXVsdF9pbnN0cnVtZW50ID0gISFkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBjcmVkaXQgY2FyZFxyXG4gICAgICAgICAgICAgICAgc3RvcmVJbnN0cnVtZW50KHRoaXMuY29udGV4dCwgZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jb250ZXh0LnBheW1lbnRNZXRob2RzVXJsO1xyXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHRoaXMuY29udGV4dC5nZW5lcmljX2Vycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSwgdGhpcy5jb250ZXh0KTtcclxuICAgICAgICBjb25zdCBmb3JtRWRpdFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nO1xyXG4gICAgICAgIGNvbnN0IGVkaXRWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gLFxyXG4gICAgICAgICAgICBkZWxheTogOTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiRW1haWxBZGRyZXNzXCJdYDtcclxuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT1cIlBhc3N3b3JkXCJdYDtcclxuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDb25maXJtUGFzc3dvcmRcIl1gO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZDJFbGVtZW50ID0gJChwYXNzd29yZDJTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ3VycmVudFBhc3N3b3JkXCJdYDtcclxuICAgICAgICBjb25zdCAkY3VycmVudFBhc3N3b3JkID0gJChjdXJyZW50UGFzc3dvcmRTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgIC8vIFRoaXMgb25seSBoYW5kbGVzIHRoZSBjdXN0b20gZmllbGRzLCBzdGFuZGFyZCBmaWVsZHMgYXJlIGFkZGVkIGJlbG93XHJcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKCRlbWFpbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0RW1haWxWYWxpZGF0aW9uKGVkaXRWYWxpZGF0b3IsIGVtYWlsU2VsZWN0b3IsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkudmFsaWRfZW1haWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRwYXNzd29yZEVsZW1lbnQgJiYgJHBhc3N3b3JkMkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBwYXNzd29yZDogZW50ZXJQYXNzd29yZCwgcGFzc3dvcmRfbWF0Y2g6IG1hdGNoUGFzc3dvcmQgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZDJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICAgICAgZWRpdFZhbGlkYXRvcixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QoZW50ZXJQYXNzd29yZCwgZW50ZXJQYXNzd29yZCwgbWF0Y2hQYXNzd29yZCwgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cy5lcnJvciksXHJcbiAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRjdXJyZW50UGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICcnICYmICRwYXNzd29yZEVsZW1lbnQudmFsKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jdXJyZW50UGFzc3dvcmQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9maXJzdG5hbWUnXWAsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfbGFzdG5hbWUnXWAsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0Lmxhc3ROYW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAkZWRpdEFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWRpdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlYXJsaWVzdEVycm9yID0gJCgnc3Bhbi5mb3JtLWlubGluZU1lc3NhZ2U6Zmlyc3QnKS5wcmV2KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgZWFybGllc3RFcnJvci50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgICB9LCA5MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pIHtcclxuICAgICAgICBjb25zdCBpbmJveFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICAgICAgZGVsYXk6IDkwMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW5ib3hWYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gc2VsZWN0W25hbWU9XCJtZXNzYWdlX29yZGVyX2lkXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE51bWJlcih2YWwpICE9PSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyT3JkZXJOdW0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W25hbWU9XCJtZXNzYWdlX3N1YmplY3RcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclN1YmplY3QsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHRleHRhcmVhW25hbWU9XCJtZXNzYWdlX2NvbnRlbnRcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICRpbmJveEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaW5ib3hWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5ib3hWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVhcmxpZXN0RXJyb3IgPSAkKCdzcGFuLmZvcm0taW5saW5lTWVzc2FnZTpmaXJzdCcpLnByZXYoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBlYXJsaWVzdEVycm9yLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICAgIH0sIDkwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGNyZWRpdGNhcmRzIGZyb20gJ2NyZWRpdGNhcmRzJztcclxuXHJcbi8qKlxyXG4gKiBPbWl0IG51bGwgb3IgZW1wdHkgc3RyaW5nIHByb3BlcnRpZXMgb2Ygb2JqZWN0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbmNvbnN0IG9taXROdWxsU3RyaW5nID0gb2JqID0+IHtcclxuICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcclxuXHJcbiAgICAkLmVhY2gocmVmT2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHJlZk9ialtrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZWZPYmo7XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0IGNyZWRpdCBjYXJkIHR5cGUgZnJvbSBjcmVkaXQgY2FyZCBudW1iZXJcclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlZGl0Q2FyZFR5cGUgPSB2YWx1ZSA9PiBjcmVkaXRjYXJkcy5jYXJkLnR5cGUoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWx1ZSksIHRydWUpO1xyXG5cclxuLyoqXHJcbiAqIFdyYXBwZXIgZm9yIGFqYXggcmVxdWVzdCB0byBzdG9yZSBhIG5ldyBpbnN0cnVtZW50IGluIGJpZ3BheVxyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGhlYWRlclxyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGJvZHlcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgc3VjY2Vzc2Z1bCByZXNwb25zZVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmYWlsIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdG9yZUluc3RydW1lbnQgPSAoe1xyXG4gICAgLy8gSG9zdG5hbWUsIElkcyAmIFRva2VuXHJcbiAgICBwYXltZW50c1VybCxcclxuICAgIHNob3BwZXJJZCxcclxuICAgIHN0b3JlSGFzaCxcclxuICAgIHZhdWx0VG9rZW4sXHJcbn0sIHtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgICAvLyBQcm92aWRlciBJbmZvXHJcbiAgICBwcm92aWRlcl9pZCxcclxuICAgIGN1cnJlbmN5X2NvZGUsXHJcblxyXG4gICAgLy8gSW5zdHJ1bWVudCBEZXRhaWxzXHJcbiAgICBjcmVkaXRfY2FyZF9udW1iZXIsXHJcbiAgICBleHBpcmF0aW9uLFxyXG4gICAgbmFtZV9vbl9jYXJkLFxyXG4gICAgY3Z2LFxyXG4gICAgZGVmYXVsdF9pbnN0cnVtZW50LFxyXG5cclxuICAgIC8vIEJpbGxpbmcgQWRkcmVzc1xyXG4gICAgYWRkcmVzczEsXHJcbiAgICBhZGRyZXNzMixcclxuICAgIGNpdHksXHJcbiAgICBwb3N0YWxfY29kZSxcclxuICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXHJcbiAgICBjb3VudHJ5X2NvZGUsXHJcbiAgICBjb21wYW55LFxyXG4gICAgZmlyc3RfbmFtZSxcclxuICAgIGxhc3RfbmFtZSxcclxuICAgIGVtYWlsLFxyXG4gICAgcGhvbmUsXHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXHJcbn0sIGRvbmUsIGZhaWwpID0+IHtcclxuICAgIGNvbnN0IGV4cGlyeSA9IGV4cGlyYXRpb24uc3BsaXQoJy8nKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogYCR7cGF5bWVudHNVcmx9L3N0b3Jlcy8ke3N0b3JlSGFzaH0vY3VzdG9tZXJzLyR7c2hvcHBlcklkfS9zdG9yZWRfaW5zdHJ1bWVudHNgLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdmF1bHRUb2tlbixcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaW5zdHJ1bWVudDoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhcmQnLFxyXG4gICAgICAgICAgICAgICAgY2FyZGhvbGRlcl9uYW1lOiBuYW1lX29uX2NhcmQsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IGNyZWRpdGNhcmRzLmNhcmQucGFyc2UoY3JlZGl0X2NhcmRfbnVtYmVyKSxcclxuICAgICAgICAgICAgICAgIGV4cGlyeV9tb250aDogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJ5X3llYXI6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX3ZhbHVlOiBjdnYsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJpbGxpbmdfYWRkcmVzczogb21pdE51bGxTdHJpbmcoe1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzczEsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzMixcclxuICAgICAgICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSxcclxuICAgICAgICAgICAgICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2NvZGUsXHJcbiAgICAgICAgICAgICAgICBjb21wYW55LFxyXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBwcm92aWRlcl9pZCxcclxuICAgICAgICAgICAgZGVmYXVsdF9pbnN0cnVtZW50LFxyXG4gICAgICAgICAgICBjdXJyZW5jeV9jb2RlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgICAuZG9uZShkb25lKVxyXG4gICAgICAgIC5mYWlsKGZhaWwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1hdHRlcnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGNyZWRpdCBjYXJkIG51bWJlclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKi9cclxuICAgIHNldENyZWRpdENhcmROdW1iZXJGb3JtYXQ6IGZpZWxkID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IGNyZWRpdGNhcmRzLmNhcmQuZm9ybWF0KGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBleHBpcmF0aW9uIGRhdGVcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBzZXRFeHBpcmF0aW9uRm9ybWF0OiBmaWVsZCA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCwgd2hpY2ggfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHdoaWNoID09PSA4ICYmIC8uKihcXC8pJC8udGVzdCh0YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIC0xKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgNSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdoaWNoICE9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFsxLTldXFwvfFsyLTldKSQvZywgJzAkMS8nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKSQvZywgJyQxLycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswLTFdKShbMy05XSkkL2csICcwJDEvJDInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKShbMC05XXsyfSkkL2csICckMS8kMicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswXSspXFwvfFswXSskL2csICcwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFxkXFwvXXxeW1xcL10qJC9nLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZhbGlkYXRvcnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjcmVkaXQgY2FyZCBudW1iZXJcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY2FyZC5pc1ZhbGlkKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGV4cGlyYXRpb24gZGF0ZVxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIHNldEV4cGlyYXRpb25WYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5ID0gdmFsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgL14oMFsxLTldfDFbMC0yXSlcXC8oWzAtOV17Mn0pJC8udGVzdCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiAhY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5pc1Bhc3QoY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLCBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIG5hbWUgb24gY2FyZFxyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxyXG4gICAgICogQHBhcmFtIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIHNldE5hbWVPbkNhcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gISF2YWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjdnZcclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcclxuICAgICAqIEBwYXJhbSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxyXG4gICAgICogQHBhcmFtIHthbnl9IGNhcmRUeXBlIFRoZSBjcmVkaXQgY2FyZCBudW1iZXIgdHlwZVxyXG4gICAgICovXHJcbiAgICBzZXRDdnZWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlLCBjYXJkVHlwZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgY2FyZFR5cGUgPT09ICdmdW5jdGlvbicgPyBjYXJkVHlwZSgpIDogY2FyZFR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jdmMuaXNWYWxpZCh2YWwsIHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuIiwiY29uc3QgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MgPSAod2lzaGxpc3RVcmwsIC4uLnBhZ2luYXRpb25JdGVtcykgPT4gJC5lYWNoKHBhZ2luYXRpb25JdGVtcywgKF8sICRpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uTGluayA9ICRpdGVtLmNoaWxkcmVuKCcucGFnaW5hdGlvbi1saW5rJyk7XHJcblxyXG4gICAgaWYgKCRpdGVtLmxlbmd0aCAmJiAhcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicpLmluY2x1ZGVzKCdwYWdlPScpKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICBwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJywgYCR7d2lzaGxpc3RVcmx9cGFnZT0ke3BhZ2VOdW1iZXJ9YCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIGhlbHBzIHRvIHdpdGhkcmF3IGRpZmZlcmVuY2VzIGluIHN0cnVjdHVyZXMgYXJvdW5kIHRoZSBzdGVuY2lsIHJlc291cmNlIHBhZ2luYXRpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCB3aXNobGlzdFBhZ2luYXRvckhlbHBlciA9ICgpID0+IHtcclxuICAgIGNvbnN0ICRwYWdpbmF0aW9uTGlzdCA9ICQoJy5wYWdpbmF0aW9uLWxpc3QnKTtcclxuXHJcbiAgICBpZiAoISRwYWdpbmF0aW9uTGlzdC5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCAkbmV4dEl0ZW0gPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0JywgJHBhZ2luYXRpb25MaXN0KTtcclxuICAgIGNvbnN0ICRwcmV2SXRlbSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzJywgJHBhZ2luYXRpb25MaXN0KTtcclxuICAgIGNvbnN0IGN1cnJlbnRIcmVmID0gJCgnW2RhdGEtcGFnaW5hdGlvbi1jdXJyZW50LXBhZ2UtbGlua10nKS5hdHRyKCdocmVmJyk7XHJcbiAgICBjb25zdCBwYXJ0aWFsUGFnaW5hdGlvblVybCA9IGN1cnJlbnRIcmVmLnNwbGl0KCdwYWdlPScpLnNoaWZ0KCk7XHJcblxyXG4gICAgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MocGFydGlhbFBhZ2luYXRpb25VcmwsICRwcmV2SXRlbSwgJG5leHRJdGVtKTtcclxufTtcclxuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XHJcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgeyB3aXNobGlzdFBhZ2luYXRvckhlbHBlciB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMnO1xyXG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXNoTGlzdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2FjY291bnQvYWRkLXdpc2hsaXN0JyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBjb25maXJtIGJveCBiZWZvcmUgZGVsZXRpbmcgYWxsIHdpc2ggbGlzdHNcclxuICAgICAqL1xyXG4gICAgd2lzaGxpc3REZWxldGVDb25maXJtKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3QtZGVsZXRlXScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0odGhpcy5jb250ZXh0Lndpc2hsaXN0RGVsZXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNobGlzdEZvcm0pIHtcclxuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy53aXNobGlzdC1mb3JtIGlucHV0W25hbWU9XCJ3aXNobGlzdG5hbWVcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJXaXNobGlzdE5hbWVFcnJvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgJGFkZFdpc2hsaXN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBjb25zdCAkYWRkV2lzaExpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nKTtcclxuXHJcbiAgICAgICAgaWYgKCQoJ1tkYXRhLXBhZ2luYXRpb24td2lzaGxpc3RdJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGFkZFdpc2hMaXN0Rm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaExpc3RGb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud2lzaGxpc3REZWxldGVDb25maXJtKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2luaGVyaXRzTG9vc2UiLCJjb25zdHJ1Y3RvciIsIl9zZXRQcm90b3R5cGVPZiIsIkNvcm5lcnN0b25lQWNjb3VudCIsInNob3dBbGVydE1vZGFsIiwiQWNjb3VudCIsIl9Db3JuZXJzdG9uZUFjY291bnQiLCJfcHJvdG8iLCJvblJlYWR5Iiwib3JkZXJJZCIsIk51bWJlciIsIiQiLCJ2YWwiLCJpbml0T3JkZXIiLCJfaW5pdE9yZGVyIiwiX2NhbGxlZSIsIl9yZXNwJGRhdGEiLCJfcmVzcCRkYXRhMiIsIl9yZXNwJGRhdGEzIiwicmVzcCIsIml0ZW1zIiwiX2NvbnRleHQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInZhcmlhYmxlcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29udGV4dCIsImdyYXBoUUxUb2tlbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsImNvbmNhdCIsInNpdGUiLCJvcmRlciIsImNvbnNpZ25tZW50cyIsImRvd25sb2FkcyIsImxpbmVJdGVtcyIsImVkZ2VzIiwibWFwIiwiX3JlZiIsIm5vZGUiLCJwaWNrdXBzIiwicmVkdWNlIiwiYWNjIiwiX3JlZjIiLCJfcmVmMyIsIml0ZW1Ob2RlIiwic2hpcHBpbmciLCJfcmVmNCIsIl9yZWY1IiwiZWFjaCIsIl9pIiwiZWwiLCIkZWwiLCJvcmRlclByb2R1Y3RJZCIsIml0ZW0iLCJmaW5kIiwiX3JlZjYiLCJlbnRpdHlJZCIsImF0dHIiLCJwcm9kdWN0RW50aXR5SWQiLCJfcmVmNyIsIl94IiwiaW5pdFJlb3JkZXJGb3JtIiwiJHJlb3JkZXJGb3JtIiwiX3RoaXMiLCJvbiIsImV2ZW50IiwiJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyIsInN1Ym1pdEZvcm0iLCJyZW1vdmUiLCJpbmRleCIsInByb2R1Y3RDaGVja2JveCIsInByb2R1Y3RJZCIsIiRpbnB1dCIsInR5cGUiLCJuYW1lIiwiYXBwZW5kIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3RJdGVtIiwiZGVmYXVsdCIsIlBhZ2VNYW5hZ2VyIiwibm9kIiwiV2lzaGxpc3QiLCJ2YWxpZGF0aW9uIiwic3RhdGVDb3VudHJ5IiwiY2xhc3NpZnlGb3JtIiwiVmFsaWRhdG9ycyIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiY3JlZGl0Q2FyZFR5cGUiLCJzdG9yZUluc3RydW1lbnQiLCJDQ1ZhbGlkYXRvcnMiLCJGb3JtYXR0ZXJzIiwiQ0NGb3JtYXR0ZXJzIiwiX1BhZ2VNYW5hZ2VyIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCIkc3RhdGUiLCIkYm9keSIsIiRlZGl0QWNjb3VudEZvcm0iLCIkYWRkcmVzc0Zvcm0iLCIkaW5ib3hGb3JtIiwiJGFjY291bnRSZXR1cm5Gb3JtIiwiJHBheW1lbnRNZXRob2RGb3JtIiwiJGludm9pY2VCdXR0b24iLCIkYmlnQ29tbWVyY2UiLCJ3aW5kb3ciLCJCaWdDb21tZXJjZSIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwibG9hZCIsInJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uIiwiaXMiLCJsZWZ0Iiwic2NyZWVuIiwiYXZhaWxXaWR0aCIsInRvcCIsImF2YWlsSGVpZ2h0Iiwib3BlbiIsImluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24iLCJyZWdpc3RlckluYm94VmFsaWRhdGlvbiIsImluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24iLCJpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uIiwicmVuZGVyQWNjb3VudFBheW1lbnRzIiwiX3RoaXMkY29udGV4dCIsImNvdW50cmllcyIsInBheW1lbnRzVXJsIiwic3RvcmVIYXNoIiwic3RvcmVMb2NhbGUiLCJ2YXVsdFRva2VuIiwic2hvcHBlcklkIiwiY3VzdG9tZXJFbWFpbCIsInByb3ZpZGVySWQiLCJjdXJyZW5jeUNvZGUiLCJwYXltZW50TWV0aG9kc1VybCIsInBheW1lbnRQcm92aWRlckluaXRpYWxpemF0aW9uRGF0YSIsInRoZW1lU2V0dGluZ3MiLCJzdHlsZXMiLCJpbnB1dEJhc2UiLCJjb2xvciIsImJvcmRlckNvbG9yIiwiaW5wdXRWYWxpZGF0aW9uRXJyb3IiLCJpbnB1dFZhbGlkYXRpb25TdWNjZXNzIiwic3VibWl0QnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwiY2FuY2VsQnV0dG9uIiwibGFiZWwiLCJ2YWxpZGF0aW9uRXJyb3IiLCJoZWFkaW5nIiwic3RvcmVDb250ZXh0RGF0YSIsImVycm9ySGFuZGxlciIsImJpbmREZWxldGVBZGRyZXNzIiwiYmluZERlbGV0ZVBheW1lbnRNZXRob2QiLCJtZXNzYWdlIiwiY3VycmVudFRhcmdldCIsImNvbmZpcm0iLCJfdGhpczIiLCJfdGhpczMiLCJ2YWxpZGF0aW9uTW9kZWwiLCJzdGF0ZVNlbGVjdG9yIiwiJHN0YXRlRWxlbWVudCIsImFkZHJlc3NWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCJhZGQiLCIkbGFzdCIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiZmllbGRfbm90X2JsYW5rIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImVycm9yTWVzc2FnZSIsImZvcm1TdWJtaXQiLCJlbGUiLCJwYXJzZUludCIsIl90aGlzNCIsImZpcnN0TmFtZUxhYmVsIiwibGFzdE5hbWVMYWJlbCIsImNvbXBhbnlMYWJlbCIsInBob25lTGFiZWwiLCJhZGRyZXNzMUxhYmVsIiwiYWRkcmVzczJMYWJlbCIsImNpdHlMYWJlbCIsImNvdW50cnlMYWJlbCIsImNob29zZUNvdW50cnlMYWJlbCIsInN0YXRlTGFiZWwiLCJwb3N0YWxDb2RlTGFiZWwiLCJwYXltZW50TWV0aG9kU2VsZWN0b3IiLCJwYXltZW50TWV0aG9kVmFsaWRhdG9yIiwiY2FyZFR5cGUiLCJ0YXJnZXQiLCJzaWJsaW5ncyIsImNzcyIsInNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uIiwiY3JlZGl0Q2FyZE51bWJlciIsInNldEV4cGlyYXRpb25WYWxpZGF0aW9uIiwiZXhwaXJhdGlvbiIsInNldE5hbWVPbkNhcmRWYWxpZGF0aW9uIiwibmFtZU9uQ2FyZCIsInNldEN2dlZhbGlkYXRpb24iLCJjdnYiLCJzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0Iiwic2V0RXhwaXJhdGlvbkZvcm1hdCIsIl9yZWR1Y2UiLCJzZXJpYWxpemVBcnJheSIsIm9iaiIsInJlZk9iaiIsImNvdW50cnkiLCJfZmluZCIsInN0YXRlIiwic3RhdGVzIiwiY291bnRyeV9jb2RlIiwiY29kZSIsInN0YXRlX29yX3Byb3ZpbmNlX2NvZGUiLCJkZWZhdWx0X2luc3RydW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJnZW5lcmljX2Vycm9yIiwiZm9ybUVkaXRTZWxlY3RvciIsImVkaXRWYWxpZGF0b3IiLCJkZWxheSIsImVtYWlsU2VsZWN0b3IiLCIkZW1haWxFbGVtZW50IiwicGFzc3dvcmRTZWxlY3RvciIsIiRwYXNzd29yZEVsZW1lbnQiLCJwYXNzd29yZDJTZWxlY3RvciIsIiRwYXNzd29yZDJFbGVtZW50IiwiY3VycmVudFBhc3N3b3JkU2VsZWN0b3IiLCIkY3VycmVudFBhc3N3b3JkIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRfZW1haWwiLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkiLCJlbnRlclBhc3N3b3JkIiwicGFzc3dvcmQiLCJtYXRjaFBhc3N3b3JkIiwicGFzc3dvcmRfbWF0Y2giLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJlcnJvciIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImN1cnJlbnRQYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0VGltZW91dCIsImVhcmxpZXN0RXJyb3IiLCJwcmV2IiwidHJpZ2dlciIsImluYm94VmFsaWRhdG9yIiwiZW50ZXJPcmRlck51bSIsImVudGVyU3ViamVjdCIsImVudGVyTWVzc2FnZSIsImNyZWRpdGNhcmRzIiwib21pdE51bGxTdHJpbmciLCJrZXkiLCJjYXJkIiwicGFyc2UiLCJmYWlsIiwicHJvdmlkZXJfaWQiLCJjdXJyZW5jeV9jb2RlIiwiY3JlZGl0X2NhcmRfbnVtYmVyIiwibmFtZV9vbl9jYXJkIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJwb3N0YWxfY29kZSIsImNvbXBhbnkiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZSIsImV4cGlyeSIsInNwbGl0IiwiZGF0YVR5cGUiLCJjYWNoZSIsIkFjY2VwdCIsImluc3RydW1lbnQiLCJjYXJkaG9sZGVyX25hbWUiLCJudW1iZXIiLCJleHBpcnlfbW9udGgiLCJtb250aCIsImV4cGlyeV95ZWFyIiwieWVhciIsInZlcmlmaWNhdGlvbl92YWx1ZSIsImJpbGxpbmdfYWRkcmVzcyIsInJlZlRhcmdldCIsImZvcm1hdCIsIndoaWNoIiwidGVzdCIsInNsaWNlIiwicmVwbGFjZSIsInZhbGlkYXRvciIsImlzVmFsaWQiLCJpc1Bhc3QiLCJjdmMiLCJjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyIsIndpc2hsaXN0VXJsIiwiX2xlbiIsInBhZ2luYXRpb25JdGVtcyIsIkFycmF5IiwiX2tleSIsIl8iLCIkaXRlbSIsInBhZ2luYXRpb25MaW5rIiwiY2hpbGRyZW4iLCJpbmNsdWRlcyIsInBhZ2VOdW1iZXIiLCJ3aXNobGlzdFBhZ2luYXRvckhlbHBlciIsIiRwYWdpbmF0aW9uTGlzdCIsIiRuZXh0SXRlbSIsIiRwcmV2SXRlbSIsImN1cnJlbnRIcmVmIiwicGFydGlhbFBhZ2luYXRpb25VcmwiLCJzaGlmdCIsIldpc2hMaXN0Iiwib3B0aW9ucyIsInRlbXBsYXRlIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIndpc2hsaXN0RGVsZXRlQ29uZmlybSIsImNvbmZpcm1lZCIsIndpc2hsaXN0RGVsZXRlIiwicmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24iLCIkYWRkV2lzaGxpc3RGb3JtIiwiYWRkV2lzaGxpc3RWYWxpZGF0b3IiLCJlbnRlcldpc2hsaXN0TmFtZUVycm9yIiwiJGFkZFdpc2hMaXN0Rm9ybSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9