(self["webpackChunkEyeva"] = self["webpackChunkEyeva"] || []).push([["auth"],{

/***/ "./assets/js/papathemes/eyeva/auth.js"
/*!********************************************!*\
  !*** ./assets/js/papathemes/eyeva/auth.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var _theme_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/auth */ "./assets/js/theme/auth.js");
/* harmony import */ var _theme_common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _theme_common_form_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/common/form-validation */ "./assets/js/theme/common/form-validation.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var Auth = /*#__PURE__*/function (_CornerstoneAuth) {
  function Auth() {
    return _CornerstoneAuth.apply(this, arguments) || this;
  }
  _inheritsLoose(Auth, _CornerstoneAuth);
  var _proto = Auth.prototype;
  _proto.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
    _CornerstoneAuth.prototype.registerCreateAccountValidator.call(this, $createAccountForm);

    // stop multi-step form if form has no data-step attribute
    if ($createAccountForm.attr('data-step') === undefined) return;
    var validationModel = (0,_theme_common_form_validation__WEBPACK_IMPORTED_MODULE_2__["default"])($createAccountForm, this.context).filter(function (_ref) {
      var selector = _ref.selector;
      return $createAccountForm.find(selector).is(':visible');
    });
    var firstStepValidator = (0,_theme_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: this.formCreateSelector + " [data-continue-button]",
      delay: 900
    });
    firstStepValidator.add(validationModel);
    var $continueBtn = $createAccountForm.find('[data-continue-button]');
    var $backBtn = $createAccountForm.find('[data-back-button]');
    $continueBtn.on('click', function (event) {
      event.preventDefault();
      firstStepValidator.performCheck();
      if (firstStepValidator.areAll('valid')) {
        $createAccountForm.attr('data-step', '2');
      }
    });
    $backBtn.on('click', function (event) {
      event.preventDefault();
      $createAccountForm.attr('data-step', '1');
    });
  };
  return Auth;
}(_theme_auth__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/theme/auth.js"
/*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







var Auth = /*#__PURE__*/function (_PageManager) {
  function Auth(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__.createTranslationDictionary)(context);
    _this.formCreateSelector = 'form[data-create-account-form]';
    _this.recaptcha = $('.g-recaptcha iframe[src]');
    return _this;
  }
  _inheritsLoose(Auth, _PageManager);
  var _proto = Auth.prototype;
  _proto.registerLoginValidation = function registerLoginValidation($loginForm) {
    var _this2 = this;
    var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.loginValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.login-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.loginValidator.add([{
      selector: '.login-form input[name="login_email"]',
      validate: function validate(cb, val) {
        var result = loginModel.email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }, {
      selector: '.login-form input[name="login_pass"]',
      validate: function validate(cb, val) {
        var result = loginModel.password(val);
        cb(result);
      },
      errorMessage: this.context.enterPass
    }]);
    $loginForm.on('submit', function (event) {
      _this2.loginValidator.performCheck();
      if (_this2.loginValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerForgotPasswordValidation = function registerForgotPasswordValidation($forgotPasswordForm) {
    var _this3 = this;
    this.forgotPasswordValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.forgot-password-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.forgotPasswordValidator.add([{
      selector: '.forgot-password-form input[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }]);
    $forgotPasswordForm.on('submit', function (event) {
      _this3.forgotPasswordValidator.performCheck();
      if (_this3.forgotPasswordValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerNewPasswordValidation = function registerNewPasswordValidation() {
    var _this$validationDicti = this.validationDictionary,
      enterPassword = _this$validationDicti.password,
      matchPassword = _this$validationDicti.password_match;
    var newPasswordForm = '.new-password-form';
    var newPasswordValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: $(newPasswordForm + " input[type=\"submit\"]"),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    var passwordSelector = $(newPasswordForm + " input[name=\"password\"]");
    var password2Selector = $(newPasswordForm + " input[name=\"password_confirm\"]");
    var errorTextMessages = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error);
    _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setPasswordValidation(newPasswordValidator, passwordSelector, password2Selector, this.passwordRequirements, errorTextMessages);
  };
  _proto.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
    var _this4 = this;
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_3__["default"])($createAccountForm, this.context);
    var createAccountValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: this.formCreateSelector + " input[type='submit']",
      delay: 900
    });
    var $stateElement = $('[data-field-type="State"]');
    var emailSelector = this.formCreateSelector + " [data-field-type='EmailAddress']";
    var $emailElement = $(emailSelector);
    var passwordSelector = this.formCreateSelector + " [data-field-type='Password']";
    var $passwordElement = $(passwordSelector);
    var password2Selector = this.formCreateSelector + " [data-field-type='ConfirmPassword']";
    var $password2Element = $(password2Selector);
    createAccountValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      (0,_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (createAccountValidator.getStatus($stateElement) !== 'undefined') {
          createAccountValidator.remove($stateElement);
        }
        if ($last) {
          createAccountValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setStateCountryValidation(createAccountValidator, field, _this4.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.cleanUpStateValidation(field);
        }
      });
    }
    if ($emailElement) {
      createAccountValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setEmailValidation(createAccountValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti2 = this.validationDictionary,
        enterPassword = _this$validationDicti2.password,
        matchPassword = _this$validationDicti2.password_match;
      createAccountValidator.remove(passwordSelector);
      createAccountValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setPasswordValidation(createAccountValidator, passwordSelector, password2Selector, this.passwordRequirements, (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error));
    }
    $createAccountForm.on('submit', function (event) {
      _this4.submitAction(event, createAccountValidator);
    });
  };
  _proto.submitAction = function submitAction(event, validator) {
    validator.performCheck();
    if (validator.areAll('valid')) {
      return;
    }
    event.preventDefault();
    setTimeout(function () {
      var earliestError = $('span.form-inlineMessage:first').prev('input');
      earliestError.trigger('focus');
    }, 900);
  }

  /**
   * Request is made in this function to the remote endpoint and pulls back the states for country.
   */;
  _proto.onReady = function onReady() {
    if (!this.recaptcha.attr('title')) {
      this.recaptcha.attr('title', this.context.recaptchaTitle);
    }
    var $createAccountForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)(this.formCreateSelector);
    var $loginForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.login-form');
    var $forgotPasswordForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.forgot-password-form');
    var $newPasswordForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.new-password-form'); // reset password

    // Injected via auth.html
    this.passwordRequirements = this.context.passwordRequirements;
    if ($loginForm.length) {
      this.registerLoginValidation($loginForm);
    }
    if ($newPasswordForm.length) {
      this.registerNewPasswordValidation();
    }
    if ($forgotPasswordForm.length) {
      this.registerForgotPasswordValidation($forgotPasswordForm);
    }
    if ($createAccountForm.length) {
      this.registerCreateAccountValidator($createAccountForm);
    }
  };
  return Auth;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./node_modules/lodash/_baseGetTag.js"
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ },

/***/ "./node_modules/lodash/isArguments.js"
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ },

/***/ "./node_modules/lodash/isArray.js"
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ },

/***/ "./node_modules/lodash/isArrayLike.js"
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ },

/***/ "./node_modules/lodash/isFunction.js"
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ },

/***/ "./node_modules/lodash/isLength.js"
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQixtQkFBTyxDQUFDLDJEQUFlO0FBQ3hDLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXlldmEvLi9hc3NldHMvanMvcGFwYXRoZW1lcy9leWV2YS9hdXRoLmpzIiwid2VicGFjazovL0V5ZXZhLy4vYXNzZXRzL2pzL3RoZW1lL2F1dGguanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovL0V5ZXZhLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9FeWV2YS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vRXlldmEvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JuZXJzdG9uZUF1dGggZnJvbSAnLi4vLi4vdGhlbWUvYXV0aCc7XHJcbmltcG9ydCBub2QgZnJvbSAnLi4vLi4vdGhlbWUvY29tbW9uL25vZCc7XHJcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4uLy4uL3RoZW1lL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCBleHRlbmRzIENvcm5lcnN0b25lQXV0aCB7XHJcbiAgICByZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IoJGNyZWF0ZUFjY291bnRGb3JtKSB7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDcmVhdGVBY2NvdW50VmFsaWRhdG9yKCRjcmVhdGVBY2NvdW50Rm9ybSk7XHJcblxyXG4gICAgICAgIC8vIHN0b3AgbXVsdGktc3RlcCBmb3JtIGlmIGZvcm0gaGFzIG5vIGRhdGEtc3RlcCBhdHRyaWJ1dGVcclxuICAgICAgICBpZiAoJGNyZWF0ZUFjY291bnRGb3JtLmF0dHIoJ2RhdGEtc3RlcCcpID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkY3JlYXRlQWNjb3VudEZvcm0sIHRoaXMuY29udGV4dClcclxuICAgICAgICAgICAgLmZpbHRlcigoeyBzZWxlY3RvciB9KSA9PiAkY3JlYXRlQWNjb3VudEZvcm0uZmluZChzZWxlY3RvcikuaXMoJzp2aXNpYmxlJykpO1xyXG5cclxuICAgICAgICBjb25zdCBmaXJzdFN0ZXBWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1jb250aW51ZS1idXR0b25dYCxcclxuICAgICAgICAgICAgZGVsYXk6IDkwMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZmlyc3RTdGVwVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgICBjb25zdCAkY29udGludWVCdG4gPSAkY3JlYXRlQWNjb3VudEZvcm0uZmluZCgnW2RhdGEtY29udGludWUtYnV0dG9uXScpO1xyXG4gICAgICAgIGNvbnN0ICRiYWNrQnRuID0gJGNyZWF0ZUFjY291bnRGb3JtLmZpbmQoJ1tkYXRhLWJhY2stYnV0dG9uXScpO1xyXG5cclxuICAgICAgICAkY29udGludWVCdG4ub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBmaXJzdFN0ZXBWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdFN0ZXBWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkY3JlYXRlQWNjb3VudEZvcm0uYXR0cignZGF0YS1zdGVwJywgJzInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkYmFja0J0bi5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICRjcmVhdGVBY2NvdW50Rm9ybS5hdHRyKCdkYXRhLXN0ZXAnLCAnMScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XHJcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcclxuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcclxuaW1wb3J0IGZvcm1zIGZyb20gJy4vY29tbW9uL21vZGVscy9mb3Jtcyc7XHJcbmltcG9ydCB7XHJcbiAgICBjbGFzc2lmeUZvcm0sXHJcbiAgICBWYWxpZGF0b3JzLFxyXG4gICAgY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0LFxyXG4gICAgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxufSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcclxuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGggZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcclxuICAgICAgICB0aGlzLmZvcm1DcmVhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtY3JlYXRlLWFjY291bnQtZm9ybV0nO1xyXG4gICAgICAgIHRoaXMucmVjYXB0Y2hhID0gJCgnLmctcmVjYXB0Y2hhIGlmcmFtZVtzcmNdJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJMb2dpblZhbGlkYXRpb24oJGxvZ2luRm9ybSkge1xyXG4gICAgICAgIGNvbnN0IGxvZ2luTW9kZWwgPSBmb3JtcztcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpblZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJy5sb2dpbi1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IuYWRkKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcubG9naW4tZm9ybSBpbnB1dFtuYW1lPVwibG9naW5fZW1haWxcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbG9naW5Nb2RlbC5lbWFpbCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnVzZVZhbGlkRW1haWwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmxvZ2luLWZvcm0gaW5wdXRbbmFtZT1cImxvZ2luX3Bhc3NcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbG9naW5Nb2RlbC5wYXNzd29yZCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyUGFzcyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgJGxvZ2luRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9naW5WYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24oJGZvcmdvdFBhc3N3b3JkRm9ybSkge1xyXG4gICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICcuZm9yZ290LXBhc3N3b3JkLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXHJcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dFtuYW1lPVwiZW1haWxcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC51c2VWYWxpZEVtYWlsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAkZm9yZ290UGFzc3dvcmRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck5ld1Bhc3N3b3JkVmFsaWRhdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7IHBhc3N3b3JkOiBlbnRlclBhc3N3b3JkLCBwYXNzd29yZF9tYXRjaDogbWF0Y2hQYXNzd29yZCB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcclxuICAgICAgICBjb25zdCBuZXdQYXNzd29yZEZvcm0gPSAnLm5ldy1wYXNzd29yZC1mb3JtJztcclxuICAgICAgICBjb25zdCBuZXdQYXNzd29yZFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gKSxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSAkKGAke25ld1Bhc3N3b3JkRm9ybX0gaW5wdXRbbmFtZT1cInBhc3N3b3JkXCJdYCk7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSAkKGAke25ld1Bhc3N3b3JkRm9ybX0gaW5wdXRbbmFtZT1cInBhc3N3b3JkX2NvbmZpcm1cIl1gKTtcclxuICAgICAgICBjb25zdCBlcnJvclRleHRNZXNzYWdlcyA9IGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdChlbnRlclBhc3N3b3JkLCBlbnRlclBhc3N3b3JkLCBtYXRjaFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLmVycm9yKTtcclxuICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgbmV3UGFzc3dvcmRWYWxpZGF0b3IsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgICBlcnJvclRleHRNZXNzYWdlcyxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvcigkY3JlYXRlQWNjb3VudEZvcm0pIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRjcmVhdGVBY2NvdW50Rm9ybSwgdGhpcy5jb250ZXh0KTtcclxuICAgICAgICBjb25zdCBjcmVhdGVBY2NvdW50VmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gaW5wdXRbdHlwZT0nc3VibWl0J11gLFxyXG4gICAgICAgICAgICBkZWxheTogOTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcclxuICAgICAgICBjb25zdCBlbWFpbFNlbGVjdG9yID0gYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9J0VtYWlsQWRkcmVzcyddYDtcclxuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9J1Bhc3N3b3JkJ11gO1xyXG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9J0NvbmZpcm1QYXNzd29yZCddYDtcclxuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgJGxhc3Q7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXHJcbiAgICAgICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNyZWF0ZUFjY291bnRWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkbGFzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKGNyZWF0ZUFjY291bnRWYWxpZGF0b3IsIGZpZWxkLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmZpZWxkX25vdF9ibGFuayk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRlbWFpbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0RW1haWxWYWxpZGF0aW9uKGNyZWF0ZUFjY291bnRWYWxpZGF0b3IsIGVtYWlsU2VsZWN0b3IsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkudmFsaWRfZW1haWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRwYXNzd29yZEVsZW1lbnQgJiYgJHBhc3N3b3JkMkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBwYXNzd29yZDogZW50ZXJQYXNzd29yZCwgcGFzc3dvcmRfbWF0Y2g6IG1hdGNoUGFzc3dvcmQgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmQyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0KGVudGVyUGFzc3dvcmQsIGVudGVyUGFzc3dvcmQsIG1hdGNoUGFzc3dvcmQsIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMuZXJyb3IpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGNyZWF0ZUFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRBY3Rpb24oZXZlbnQsIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdEFjdGlvbihldmVudCwgdmFsaWRhdG9yKSB7XHJcbiAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICBpZiAodmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVhcmxpZXN0RXJyb3IgPSAkKCdzcGFuLmZvcm0taW5saW5lTWVzc2FnZTpmaXJzdCcpLnByZXYoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGVhcmxpZXN0RXJyb3IudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9LCA5MDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdCBpcyBtYWRlIGluIHRoaXMgZnVuY3Rpb24gdG8gdGhlIHJlbW90ZSBlbmRwb2ludCBhbmQgcHVsbHMgYmFjayB0aGUgc3RhdGVzIGZvciBjb3VudHJ5LlxyXG4gICAgICovXHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWNhcHRjaGEuYXR0cigndGl0bGUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY2FwdGNoYS5hdHRyKCd0aXRsZScsIHRoaXMuY29udGV4dC5yZWNhcHRjaGFUaXRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCAkY3JlYXRlQWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0odGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0ICRsb2dpbkZvcm0gPSBjbGFzc2lmeUZvcm0oJy5sb2dpbi1mb3JtJyk7XHJcbiAgICAgICAgY29uc3QgJGZvcmdvdFBhc3N3b3JkRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLmZvcmdvdC1wYXNzd29yZC1mb3JtJyk7XHJcbiAgICAgICAgY29uc3QgJG5ld1Bhc3N3b3JkRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLm5ldy1wYXNzd29yZC1mb3JtJyk7IC8vIHJlc2V0IHBhc3N3b3JkXHJcblxyXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSBhdXRoLmh0bWxcclxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkUmVxdWlyZW1lbnRzO1xyXG5cclxuICAgICAgICBpZiAoJGxvZ2luRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckxvZ2luVmFsaWRhdGlvbigkbG9naW5Gb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkbmV3UGFzc3dvcmRGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJGZvcmdvdFBhc3N3b3JkRm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbigkZm9yZ290UGFzc3dvcmRGb3JtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkY3JlYXRlQWNjb3VudEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDcmVhdGVBY2NvdW50VmFsaWRhdG9yKCRjcmVhdGVBY2NvdW50Rm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cclxudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcclxuXHJcbi8qKlxyXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXHJcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxyXG4gKiBvZiB2YWx1ZXMuXHJcbiAqL1xyXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XHJcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xyXG4iLCIvKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSA0LjEzLjBcclxuICogQGNhdGVnb3J5IFV0aWxcclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XHJcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcclxuIiwiLyoqXHJcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQG1lbWJlck9mIF9cclxuICogQHNpbmNlIDAuMS4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqXHJcbiAqIF8uaXNBcnJheSgnYWJjJyk7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqXHJcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKi9cclxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xyXG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxyXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xyXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXHJcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQG1lbWJlck9mIF9cclxuICogQHNpbmNlIDQuMC4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcclxuICogLy8gPT4gZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XHJcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxyXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XHJcblxyXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXHJcbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcclxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxyXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcclxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQG1lbWJlck9mIF9cclxuICogQHNpbmNlIDAuMS4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIF8uaXNGdW5jdGlvbihfKTtcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xyXG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxyXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxyXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcclxuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XHJcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xyXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cclxuICpcclxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cclxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAc2luY2UgNC4wLjBcclxuICogQGNhdGVnb3J5IExhbmdcclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIF8uaXNMZW5ndGgoMyk7XHJcbiAqIC8vID0+IHRydWVcclxuICpcclxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcclxuICogLy8gPT4gZmFsc2VcclxuICpcclxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqXHJcbiAqIF8uaXNMZW5ndGgoJzMnKTtcclxuICogLy8gPT4gZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxyXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xyXG4iXSwibmFtZXMiOlsiQ29ybmVyc3RvbmVBdXRoIiwibm9kIiwidmFsaWRhdGlvbiIsIkF1dGgiLCJfQ29ybmVyc3RvbmVBdXRoIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsInJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvciIsIiRjcmVhdGVBY2NvdW50Rm9ybSIsImNhbGwiLCJhdHRyIiwidW5kZWZpbmVkIiwidmFsaWRhdGlvbk1vZGVsIiwiY29udGV4dCIsImZpbHRlciIsIl9yZWYiLCJzZWxlY3RvciIsImZpbmQiLCJpcyIsImZpcnN0U3RlcFZhbGlkYXRvciIsInN1Ym1pdCIsImZvcm1DcmVhdGVTZWxlY3RvciIsImRlbGF5IiwiYWRkIiwiJGNvbnRpbnVlQnRuIiwiJGJhY2tCdG4iLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJkZWZhdWx0IiwiUGFnZU1hbmFnZXIiLCJzdGF0ZUNvdW50cnkiLCJmb3JtcyIsImNsYXNzaWZ5Rm9ybSIsIlZhbGlkYXRvcnMiLCJjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiX1BhZ2VNYW5hZ2VyIiwiX3RoaXMiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsInJlY2FwdGNoYSIsIiQiLCJyZWdpc3RlckxvZ2luVmFsaWRhdGlvbiIsIiRsb2dpbkZvcm0iLCJfdGhpczIiLCJsb2dpbk1vZGVsIiwibG9naW5WYWxpZGF0b3IiLCJ0YXAiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJ1c2VWYWxpZEVtYWlsIiwicGFzc3dvcmQiLCJlbnRlclBhc3MiLCJyZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbiIsIiRmb3Jnb3RQYXNzd29yZEZvcm0iLCJfdGhpczMiLCJmb3Jnb3RQYXNzd29yZFZhbGlkYXRvciIsInJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwiZW50ZXJQYXNzd29yZCIsIm1hdGNoUGFzc3dvcmQiLCJwYXNzd29yZF9tYXRjaCIsIm5ld1Bhc3N3b3JkRm9ybSIsIm5ld1Bhc3N3b3JkVmFsaWRhdG9yIiwicGFzc3dvcmRTZWxlY3RvciIsInBhc3N3b3JkMlNlbGVjdG9yIiwiZXJyb3JUZXh0TWVzc2FnZXMiLCJwYXNzd29yZFJlcXVpcmVtZW50cyIsImVycm9yIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwiX3RoaXM0IiwiY3JlYXRlQWNjb3VudFZhbGlkYXRvciIsIiRzdGF0ZUVsZW1lbnQiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsIiRwYXNzd29yZEVsZW1lbnQiLCIkcGFzc3dvcmQyRWxlbWVudCIsIiRsYXN0IiwiZXJyIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsInJlbW92ZSIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJmaWVsZF9ub3RfYmxhbmsiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRfZW1haWwiLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkyIiwic3VibWl0QWN0aW9uIiwidmFsaWRhdG9yIiwic2V0VGltZW91dCIsImVhcmxpZXN0RXJyb3IiLCJwcmV2IiwidHJpZ2dlciIsIm9uUmVhZHkiLCJyZWNhcHRjaGFUaXRsZSIsIiRuZXdQYXNzd29yZEZvcm0iLCJsZW5ndGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==